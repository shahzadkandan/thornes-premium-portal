#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const mode = process.env.MIGRATION_MODE || "dry-run";
const baseUrl = (process.env.WP_BASE_URL || process.env.WORDPRESS_API_URL || "").replace(/\/$/, "");
const username = process.env.WP_USERNAME || "";
const applicationPassword = process.env.WP_APPLICATION_PASSWORD || "";
const manifestPath = path.join(root, "CONTENT-MAPPING.json");
const mediaPath = path.join(root, "MEDIA-MAPPING.json");

const log = (event, data = {}) => {
  console.log(JSON.stringify({ timestamp: new Date().toISOString(), event, ...data }));
};

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

function authHeaders() {
  if (!username || !applicationPassword) {
    throw new Error("WP_USERNAME and WP_APPLICATION_PASSWORD are required for apply mode.");
  }
  return {
    Authorization: `Basic ${Buffer.from(`${username}:${applicationPassword}`).toString("base64")}`,
    Accept: "application/json",
  };
}

function apiUrl(route) {
  return new URL(`/wp-json/wp/v2/${route.replace(/^\//, "")}`, `${baseUrl}/`).toString();
}

async function request(route, options = {}) {
  const response = await fetch(apiUrl(route), {
    ...options,
    headers: { ...authHeaders(), ...(options.headers || {}) },
  });
  const text = await response.text();
  let body = {};
  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    body = { raw: text.slice(0, 500) };
  }
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${route}: ${JSON.stringify(body).slice(0, 500)}`);
  }
  return body;
}

function assertApplySafety() {
  if (mode !== "apply") return;
  if (!baseUrl || !username || !applicationPassword) {
    throw new Error("Apply mode requires WP_BASE_URL, WP_USERNAME and WP_APPLICATION_PASSWORD.");
  }
  if (process.env.MIGRATION_BACKUP_CONFIRMED !== "true") {
    throw new Error(
      "Set MIGRATION_BACKUP_CONFIRMED=true only after confirming a fresh production backup.",
    );
  }
  if (process.env.MIGRATION_PRODUCTION_CONFIRM !== "I_UNDERSTAND_PRODUCTION_WRITE") {
    throw new Error(
      "Set MIGRATION_PRODUCTION_CONFIRM=I_UNDERSTAND_PRODUCTION_WRITE to enable production writes.",
    );
  }
}

async function upsertPost(item) {
  const restBase = item.rest_base || item.target;
  const payload = { ...(item.payload || {}), status: item.status || "draft" };
  const existing = await request(
    `${restBase}?slug=${encodeURIComponent(item.target_slug)}&per_page=1`,
  );
  if (Array.isArray(existing) && existing[0]?.id) {
    log("update", {
      entity: item.entity,
      slug: item.target_slug,
      id: existing[0].id,
      status: payload.status,
    });
    return request(`${restBase}/${existing[0].id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
  log("create", { entity: item.entity, slug: item.target_slug, status: payload.status });
  return request(restBase, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

async function uploadMedia(item) {
  const source = await fetch(item.source_url);
  if (!source.ok) throw new Error(`Unable to download source media: ${item.source_url}`);
  const bytes = Buffer.from(await source.arrayBuffer());
  const filename =
    path.basename(new URL(item.source_url).pathname) || `${item.source_media_id}.bin`;
  const uploaded = await request("media", {
    method: "POST",
    headers: {
      "Content-Type": source.headers.get("content-type") || "application/octet-stream",
      "Content-Disposition": `attachment; filename="${filename.replace(/"/g, "")}"`,
    },
    body: bytes,
  });
  log("media-upload", {
    source_media_id: item.source_media_id,
    attachment_id: uploaded.id,
    filename,
  });
  return uploaded;
}

async function main() {
  if (!baseUrl) {
    throw new Error("Set WP_BASE_URL or WORDPRESS_API_URL before running the migration tool.");
  }
  assertApplySafety();

  const manifest = await readJson(manifestPath);
  const media = await readJson(mediaPath);
  log("migration-start", { mode, base_url: baseUrl, destructive_actions: 0 });

  if (mode === "dry-run") {
    log("site-settings-skip", {
      reason:
        "Site Settings write requires approved WP-CLI/ACF handling and is not a public REST write route.",
    });
  }

  for (const item of manifest.items || []) {
    if (item.classification !== "verified-and-safe-to-migrate") {
      log("skip", {
        entity: item.entity,
        source_ids: item.source_ids || [],
        reason: item.classification,
      });
      continue;
    }
    if (!item.payload || !item.target_slug || !item.rest_base) {
      log("skip", {
        entity: item.entity,
        reason: "verified item has no complete payload/rest_base/target_slug",
      });
      continue;
    }
    if (mode === "dry-run") {
      log("would-upsert", {
        entity: item.entity,
        slug: item.target_slug,
        status: item.status || "draft",
      });
    } else {
      await upsertPost(item);
    }
  }

  for (const item of media.verified_candidate_assets || []) {
    if (item.classification !== "verified-and-safe-to-migrate") {
      log("media-skip", { source_media_id: item.source_media_id, reason: item.classification });
      continue;
    }
    if (mode === "dry-run") {
      log("media-would-upload", {
        source_media_id: item.source_media_id,
        target_role: item.target_role,
      });
    } else {
      await uploadMedia(item);
    }
  }

  log("migration-complete", { mode, destructive_actions: 0 });
}

main().catch((error) => {
  log("migration-error", { message: error.message });
  process.exitCode = 1;
});
