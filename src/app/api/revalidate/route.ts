import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { env } from "../../../lib/env";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    secret?: string;
    path?: string;
    paths?: string[];
    tags?: string[];
  } | null;

  if (!env.WORDPRESS_REVALIDATE_SECRET || body?.secret !== env.WORDPRESS_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const paths = [
    ...(Array.isArray(body?.paths) ? body.paths : []),
    ...(body?.path ? [body.path] : []),
  ].filter((path) => path.startsWith("/") && !path.startsWith("//"));
  const pathsToRevalidate = paths.length ? [...new Set(paths)] : ["/"];
  const tagsToRevalidate = (Array.isArray(body?.tags) ? body.tags : []).filter((tag) =>
    /^wordpress:[a-z0-9:-]+$/.test(tag),
  );

  pathsToRevalidate.forEach((path) => revalidatePath(path));
  tagsToRevalidate.forEach((tag) => revalidateTag(tag, "max"));

  return NextResponse.json({ ok: true, paths: pathsToRevalidate, tags: tagsToRevalidate });
}
