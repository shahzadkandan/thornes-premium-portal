import { z } from "zod";

export const renderedFieldSchema = z.object({
  rendered: z.string().default(""),
});

export const wordpressPageSchema = z.object({
  id: z.number(),
  slug: z.string(),
  link: z.string().url().optional(),
  title: renderedFieldSchema,
  content: renderedFieldSchema,
  excerpt: renderedFieldSchema.optional(),
  modified: z.string().optional(),
});

export const wordpressPostSchema = wordpressPageSchema.extend({
  date: z.string().optional(),
  categories: z.array(z.number()).optional(),
});

export const siteSettingsSchema = z.object({
  companyName: z.string(),
  siteUrl: z.string().url(),
  email: z.string().email(),
  phone: z.string(),
  whatsapp: z.string(),
  address: z.string(),
  defaultSeoTitle: z.string(),
  defaultSeoDescription: z.string(),
});

export const serviceSchema = z.object({
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  verified: z.boolean().default(false),
});

export const wordpressPageListSchema = z.array(wordpressPageSchema);
export const wordpressPostListSchema = z.array(wordpressPostSchema);
