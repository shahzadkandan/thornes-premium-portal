import { z } from "zod";
import { env } from "../env";

type RequestOptions<TSchema extends z.ZodTypeAny> = {
  path: string;
  schema: TSchema;
  revalidate?: number;
  fallback: z.infer<TSchema>;
};

export async function wordpressRequest<TSchema extends z.ZodTypeAny>({
  path,
  schema,
  revalidate = 300,
  fallback,
}: RequestOptions<TSchema>): Promise<z.infer<TSchema>> {
  if (!env.WORDPRESS_API_URL) {
    return fallback;
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
      return fallback;
    }

    const json = await response.json();
    return schema.parse(json);
  } catch (error) {
    console.error(
      `WordPress request error: ${path}`,
      error instanceof Error ? error.message : "Unknown error",
    );
    return fallback;
  } finally {
    clearTimeout(timeout);
  }
}
