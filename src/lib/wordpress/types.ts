import type { z } from "zod";
import type {
  serviceSchema,
  siteSettingsSchema,
  wordpressPageSchema,
  wordpressPostSchema,
} from "./schemas";

export type SiteSettings = z.infer<typeof siteSettingsSchema>;
export type WordpressPage = z.infer<typeof wordpressPageSchema>;
export type WordpressPost = z.infer<typeof wordpressPostSchema>;
export type Service = z.infer<typeof serviceSchema>;
