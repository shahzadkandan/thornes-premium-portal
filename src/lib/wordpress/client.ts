import { z } from "zod";
import { env } from "../env";

type RequestOptions<TSchema extends z.ZodTypeAny, TResult> = {
  path: string;
  schema: TSchema;
  revalidate?: number;
  fallback: unknown;
  transform?: (value: z.infer<TSchema>) => TResult;
};

export async function wordpressRequest<TSchema extends z.ZodTypeAny, TResult>({
  path,
  schema,
  revalidate = 300,
  fallback,
  transform,
}: RequestOptions<TSchema, TResult>): Promise<TResult> {
  if (!env.WORDPRESS_API_URL) {
    return fallback as TResult;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(new URL(path, env.WORDPRESS_API_URL), {
      signal: controller.signal,
      next: { revalidate },
      headers: { Accept: "application/json" },
    } as RequestInit & { next: { revalidate: number } });

    if (!response.ok) {
      console.error(`WordPress request failed: ${path} ${response.status}`);
      return fallback as TResult;
    }

    const json = await response.json();
    const parsed = schema.parse(json);
    return (transform ? transform(parsed) : parsed) as TResult;
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
