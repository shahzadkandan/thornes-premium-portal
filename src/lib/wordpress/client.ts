import { z } from "zod";
import { env } from "../env";

type RequestOptions<TSchema extends z.ZodTypeAny, TResult> = {
  path: string;
  fallbackPaths?: string[];
  schema: TSchema;
  revalidate?: number;
  tags?: string[];
  fallback: unknown;
  transform?: (value: z.infer<TSchema>) => TResult;
};

export async function wordpressRequest<TSchema extends z.ZodTypeAny, TResult>({
  path,
  fallbackPaths = [],
  schema,
  revalidate = 300,
  tags = [],
  fallback,
  transform,
}: RequestOptions<TSchema, TResult>): Promise<TResult> {
  if (!env.WORDPRESS_API_URL) {
    return fallback as TResult;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    for (const requestPath of [path, ...fallbackPaths]) {
      const response = await fetch(new URL(requestPath, env.WORDPRESS_API_URL), {
        signal: controller.signal,
        next: { revalidate, tags },
        headers: { Accept: "application/json" },
      } as RequestInit & { next: { revalidate: number; tags: string[] } });

      if (response.status === 404 && requestPath !== fallbackPaths.at(-1)) {
        continue;
      }

      if (!response.ok) {
        console.error(`WordPress request failed: ${requestPath} ${response.status}`);
        return fallback as TResult;
      }

      const json = await response.json();
      const parsed = schema.safeParse(json);
      if (!parsed.success) {
        console.error(`WordPress response shape invalid: ${requestPath}`);
        return fallback as TResult;
      }

      return (transform ? transform(parsed.data) : parsed.data) as TResult;
    }

    return fallback as TResult;
  } catch (error) {
    console.error(
      `WordPress request error: ${path}`,
      error instanceof Error ? error.message : "Unknown error",
    );
    return fallback as TResult;
  } finally {
    clearTimeout(timeout);
  }
}

export async function wordpressHealthCheck() {
  if (!env.WORDPRESS_API_URL) {
    return { configured: false, ok: false, status: null as number | null };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(new URL("/wp-json/", env.WORDPRESS_API_URL), {
      cache: "no-store",
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });

    return { configured: true, ok: response.ok, status: response.status };
  } catch {
    return { configured: true, ok: false, status: null as number | null };
  } finally {
    clearTimeout(timeout);
  }
}
