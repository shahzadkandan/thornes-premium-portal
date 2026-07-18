import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://thorneberry.com.pk"),
  WORDPRESS_API_URL: z.string().url().optional(),
  WORDPRESS_REVALIDATE_SECRET: z.string().min(16).optional(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
  WORDPRESS_REVALIDATE_SECRET: process.env.WORDPRESS_REVALIDATE_SECRET,
});
