import type { z } from "zod";
import type {
  aboutPageSchema,
  contactPageSchema,
  faqSchema,
  homepageSchema,
  imageSchema,
  insightSchema,
  productSchema,
  quotePageSchema,
  serviceSchema,
  siteSettingsSchema,
  wordpressPageSchema,
  wordpressPostSchema,
} from "./schemas";

export type ImageAsset = z.infer<typeof imageSchema>;
export type SiteSettings = z.infer<typeof siteSettingsSchema>;
export type HomepageContent = z.infer<typeof homepageSchema>;
export type AboutPageContent = z.infer<typeof aboutPageSchema>;
export type ContactPageContent = z.infer<typeof contactPageSchema>;
export type QuotePageContent = z.infer<typeof quotePageSchema>;
export type WordpressPage = z.infer<typeof wordpressPageSchema>;
export type WordpressPost = z.infer<typeof wordpressPostSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type Product = z.infer<typeof productSchema>;
export type Insight = z.infer<typeof insightSchema>;
export type Faq = z.infer<typeof faqSchema>;
