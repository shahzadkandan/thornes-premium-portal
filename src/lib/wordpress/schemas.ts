import { z } from "zod";

export const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const imageSchema = z.object({
  src: z.union([
    z.string(),
    z.object({
      src: z.string(),
      width: z.number(),
      height: z.number(),
      blurDataURL: z.string().optional(),
    }),
  ]),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  canonical: z.string().optional(),
});

export const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const siteSettingsSchema = z.object({
  companyName: z.string(),
  siteUrl: z.string().url(),
  email: z.string().email(),
  phone: z.string(),
  whatsapp: z.string(),
  address: z.string(),
  workingHours: z.string(),
  logo: imageSchema,
  defaultSeoTitle: z.string(),
  defaultSeoDescription: z.string(),
  defaultOgImage: imageSchema.optional(),
  socialLinks: z.array(linkSchema),
  headerCta: ctaSchema,
  footerText: z.string(),
  navLinks: z.array(linkSchema),
});

export const homepageSchema = z.object({
  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    image: imageSchema,
    primaryCta: ctaSchema,
    secondaryCta: ctaSchema,
    proofPoints: z.array(z.object({ label: z.string(), detail: z.string() })),
  }),
  trustItems: z.array(
    z.object({ title: z.string(), description: z.string(), iconKey: z.string() }),
  ),
  aboutSummary: z.object({
    eyebrow: z.string(),
    title: z.string(),
    body: z.string(),
    cta: ctaSchema,
  }),
  selectedServiceSlugs: z.array(z.string()),
  valuePropositions: z.array(
    z.object({ title: z.string(), description: z.string(), iconKey: z.string() }),
  ),
  productFormats: z.array(z.string()),
  processSteps: z.array(z.object({ title: z.string(), description: z.string() })),
  buyerSegments: z.array(
    z.object({ title: z.string(), description: z.string(), iconKey: z.string() }),
  ),
  knowledgeHub: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    cta: ctaSchema,
  }),
  cta: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    primaryCta: ctaSchema,
    secondaryCta: ctaSchema,
  }),
});

export const aboutPageSchema = z.object({
  hero: z.object({ eyebrow: z.string(), title: z.string(), description: z.string() }),
  story: z.object({ title: z.string(), paragraphs: z.array(z.string()), image: imageSchema }),
  mission: z.string(),
  vision: z.string(),
  values: z.array(z.object({ title: z.string(), description: z.string() })),
  team: z.array(
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      image: imageSchema.optional(),
      linkedin: z.string().optional(),
    }),
  ),
  certifications: z.array(
    z.object({
      title: z.string(),
      issuer: z.string(),
      description: z.string(),
      verified: z.boolean(),
    }),
  ),
  cta: z.object({ title: z.string(), description: z.string(), cta: ctaSchema }),
});

export const serviceSchema = z.object({
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  image: imageSchema,
  iconKey: z.string(),
  benefits: z.array(z.string()),
  processSteps: z.array(z.object({ title: z.string(), description: z.string() })),
  documents: z.array(z.string()),
  cta: ctaSchema,
  seo: seoSchema,
  verified: z.boolean(),
});

export const productSchema = z.object({
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  category: z.string(),
  categorySlug: z.string(),
  image: imageSchema,
  specifications: z.array(z.string()),
  certifications: z.array(z.string()),
  documents: z.array(z.string()),
  supplierNote: z.string(),
  inquiryCta: ctaSchema,
  seo: seoSchema,
  verified: z.boolean(),
});

export const insightSchema = z.object({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  author: z.object({ name: z.string(), role: z.string() }),
  publishedAt: z.string(),
  readingMinutes: z.number(),
  cover: imageSchema,
  featured: z.boolean(),
  seo: seoSchema,
});

export const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
  category: z.string(),
  order: z.number(),
});

export const contactPageSchema = z.object({
  hero: z.object({ eyebrow: z.string(), title: z.string(), description: z.string() }),
  details: z.array(z.object({ label: z.string(), value: z.string(), iconKey: z.string() })),
  formTitle: z.string(),
  formDescription: z.string(),
  mapEmbedUrl: z.string().url(),
});

export const quotePageSchema = z.object({
  hero: z.object({ eyebrow: z.string(), title: z.string(), description: z.string() }),
  fields: z.array(
    z.object({
      label: z.string(),
      name: z.string(),
      type: z.enum(["text", "email", "tel", "number", "textarea", "select"]),
      required: z.boolean(),
      options: z.array(z.string()).optional(),
    }),
  ),
  process: z.array(z.object({ title: z.string(), description: z.string() })),
  faqs: z.array(faqSchema),
});

export const wordpressPageSchema = z.object({
  id: z.number(),
  slug: z.string(),
  link: z.string().url().optional(),
  title: z.object({ rendered: z.string().default("") }),
  content: z.object({ rendered: z.string().default("") }),
  excerpt: z.object({ rendered: z.string().default("") }).optional(),
  modified: z.string().optional(),
});

export const wordpressPostSchema = wordpressPageSchema.extend({
  date: z.string().optional(),
  categories: z.array(z.number()).optional(),
});

export const wordpressObjectSchema = z.record(z.string(), z.unknown());
export const wordpressObjectListSchema = z.array(wordpressObjectSchema);
export const wordpressPageListSchema = z.array(wordpressPageSchema);
export const wordpressPostListSchema = z.array(wordpressPostSchema);
