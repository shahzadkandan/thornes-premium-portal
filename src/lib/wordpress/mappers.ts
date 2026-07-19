import type {
  AboutPageContent,
  ContactPageContent,
  Faq,
  HomepageContent,
  Insight,
  Product,
  QuotePageContent,
  Service,
  SiteSettings,
  ImageAsset,
} from "./types";
import {
  aboutPageSchema,
  contactPageSchema,
  faqSchema,
  homepageSchema,
  insightSchema,
  productSchema,
  quotePageSchema,
  serviceSchema,
  siteSettingsSchema,
} from "./schemas";

type RecordValue = Record<string, unknown>;

function isRecord(value: unknown): value is RecordValue {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function record(value: unknown): RecordValue {
  return isRecord(value) ? value : {};
}

function sourceOf(value: unknown): RecordValue {
  const root = record(value);
  return {
    ...root,
    ...record(root.data),
    ...record(root.acf),
    ...record(root.meta),
    ...record(root.fields),
  };
}

function get(source: RecordValue, ...keys: string[]) {
  for (const key of keys) {
    if (source[key] !== undefined && source[key] !== null) return source[key];
  }
  return undefined;
}

function text(value: unknown, fallback = "") {
  if (typeof value === "string") return stripHtml(value).trim() || fallback;
  if (isRecord(value) && typeof value.rendered === "string")
    return stripHtml(value.rendered).trim() || fallback;
  return fallback;
}

function stripHtml(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function textList(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) return fallback;
  const list = value.map((item) => text(item)).filter(Boolean);
  return list.length ? list : fallback;
}

function image(value: unknown, fallback: ImageAsset): ImageAsset {
  if (typeof value === "string") return { ...fallback, src: value };
  const source = sourceOf(value);
  const src = text(get(source, "src", "source_url", "url"));
  if (!src) return fallback;
  return {
    src,
    alt: text(get(source, "alt", "alt_text"), fallback.alt),
    width: typeof source.width === "number" ? source.width : fallback.width,
    height: typeof source.height === "number" ? source.height : fallback.height,
  };
}

function cta(value: unknown, fallback: { label: string; href: string }) {
  const source = sourceOf(value);
  return {
    label: text(get(source, "label", "title"), fallback.label),
    href: text(get(source, "href", "url", "link"), fallback.href),
  };
}

function steps(value: unknown, fallback: Array<{ title: string; description: string }>) {
  if (!Array.isArray(value)) return fallback;
  const mapped = value
    .map((item) => {
      const source = sourceOf(item);
      return {
        title: text(get(source, "title", "name")),
        description: text(get(source, "description", "body", "content")),
      };
    })
    .filter((item) => item.title && item.description);
  return mapped.length ? mapped : fallback;
}

export function mapSiteSettings(value: unknown, fallback: SiteSettings): SiteSettings {
  const source = sourceOf(value);
  return siteSettingsSchema.parse({
    ...fallback,
    companyName: text(get(source, "company_name", "companyName"), fallback.companyName),
    siteUrl: text(get(source, "site_url", "siteUrl"), fallback.siteUrl),
    email: text(get(source, "email"), fallback.email),
    phone: text(get(source, "phone"), fallback.phone),
    whatsapp: text(get(source, "whatsapp"), fallback.whatsapp),
    address: text(get(source, "address"), fallback.address),
    workingHours: text(get(source, "working_hours", "workingHours"), fallback.workingHours),
    logo: image(get(source, "logo"), fallback.logo),
    defaultSeoTitle: text(
      get(source, "default_seo_title", "defaultSeoTitle"),
      fallback.defaultSeoTitle,
    ),
    defaultSeoDescription: text(
      get(source, "default_seo_description", "defaultSeoDescription"),
      fallback.defaultSeoDescription,
    ),
    defaultOgImage: image(
      get(source, "default_og_image", "defaultOgImage"),
      fallback.defaultOgImage ?? fallback.logo,
    ),
    socialLinks: Array.isArray(get(source, "social_links", "socialLinks"))
      ? get(source, "social_links", "socialLinks")
      : fallback.socialLinks,
    headerCta: cta(get(source, "header_cta", "headerCta"), fallback.headerCta),
    footerText: text(get(source, "footer_text", "footerText"), fallback.footerText),
    navLinks: Array.isArray(get(source, "nav_links", "navLinks"))
      ? get(source, "nav_links", "navLinks")
      : fallback.navLinks,
  });
}

export function mapHomepage(value: unknown, fallback: HomepageContent): HomepageContent {
  const source = sourceOf(value);
  const hero = sourceOf(get(source, "hero"));
  const aboutSummary = sourceOf(get(source, "about_summary", "aboutSummary"));
  const knowledgeHub = sourceOf(get(source, "knowledge_hub", "knowledgeHub"));
  const ctaBlock = sourceOf(get(source, "cta"));
  return homepageSchema.parse({
    ...fallback,
    hero: {
      ...fallback.hero,
      ...hero,
      eyebrow: text(get(hero, "eyebrow"), fallback.hero.eyebrow),
      title: text(get(hero, "title"), fallback.hero.title),
      description: text(get(hero, "description"), fallback.hero.description),
      image: image(get(hero, "image", "hero_image"), fallback.hero.image),
      primaryCta: cta(get(hero, "primary_cta", "primaryCta"), fallback.hero.primaryCta),
      secondaryCta: cta(get(hero, "secondary_cta", "secondaryCta"), fallback.hero.secondaryCta),
      proofPoints: Array.isArray(get(hero, "proof_points", "proofPoints"))
        ? get(hero, "proof_points", "proofPoints")
        : fallback.hero.proofPoints,
    },
    trustItems: Array.isArray(get(source, "trust_items", "trustItems"))
      ? get(source, "trust_items", "trustItems")
      : fallback.trustItems,
    aboutSummary: {
      ...fallback.aboutSummary,
      eyebrow: text(get(aboutSummary, "eyebrow"), fallback.aboutSummary.eyebrow),
      title: text(get(aboutSummary, "title"), fallback.aboutSummary.title),
      body: text(get(aboutSummary, "body", "description"), fallback.aboutSummary.body),
      cta: cta(get(aboutSummary, "cta"), fallback.aboutSummary.cta),
    },
    selectedServiceSlugs: textList(
      get(source, "selected_service_slugs", "selectedServiceSlugs"),
      fallback.selectedServiceSlugs,
    ),
    valuePropositions: Array.isArray(get(source, "value_propositions", "valuePropositions"))
      ? get(source, "value_propositions", "valuePropositions")
      : fallback.valuePropositions,
    productFormats: textList(
      get(source, "product_formats", "productFormats"),
      fallback.productFormats,
    ),
    processSteps: steps(get(source, "process_steps", "processSteps"), fallback.processSteps),
    buyerSegments: Array.isArray(get(source, "buyer_segments", "buyerSegments"))
      ? get(source, "buyer_segments", "buyerSegments")
      : fallback.buyerSegments,
    knowledgeHub: {
      ...fallback.knowledgeHub,
      eyebrow: text(get(knowledgeHub, "eyebrow"), fallback.knowledgeHub.eyebrow),
      title: text(get(knowledgeHub, "title"), fallback.knowledgeHub.title),
      description: text(get(knowledgeHub, "description"), fallback.knowledgeHub.description),
      cta: cta(get(knowledgeHub, "cta"), fallback.knowledgeHub.cta),
    },
    cta: {
      ...fallback.cta,
      eyebrow: text(get(ctaBlock, "eyebrow"), fallback.cta.eyebrow),
      title: text(get(ctaBlock, "title"), fallback.cta.title),
      description: text(get(ctaBlock, "description"), fallback.cta.description),
      primaryCta: cta(get(ctaBlock, "primary_cta", "primaryCta"), fallback.cta.primaryCta),
      secondaryCta: cta(get(ctaBlock, "secondary_cta", "secondaryCta"), fallback.cta.secondaryCta),
    },
  });
}

export function mapAboutPage(value: unknown, fallback: AboutPageContent): AboutPageContent {
  const source = sourceOf(value);
  const hero = sourceOf(get(source, "hero"));
  const story = sourceOf(get(source, "story"));
  const ctaBlock = sourceOf(get(source, "cta"));
  return aboutPageSchema.parse({
    ...fallback,
    hero: {
      ...fallback.hero,
      eyebrow: text(get(hero, "eyebrow"), fallback.hero.eyebrow),
      title: text(get(hero, "title"), fallback.hero.title),
      description: text(get(hero, "description"), fallback.hero.description),
    },
    story: {
      ...fallback.story,
      title: text(get(story, "title"), fallback.story.title),
      paragraphs: textList(get(story, "paragraphs"), fallback.story.paragraphs),
      image: image(get(story, "image"), fallback.story.image),
    },
    mission: text(get(source, "mission"), fallback.mission),
    vision: text(get(source, "vision"), fallback.vision),
    values: Array.isArray(get(source, "values")) ? get(source, "values") : fallback.values,
    team: Array.isArray(get(source, "team")) ? get(source, "team") : fallback.team,
    certifications: Array.isArray(get(source, "certifications"))
      ? get(source, "certifications")
      : fallback.certifications,
    cta: {
      ...fallback.cta,
      title: text(get(ctaBlock, "title"), fallback.cta.title),
      description: text(get(ctaBlock, "description"), fallback.cta.description),
      cta: cta(get(ctaBlock, "cta"), fallback.cta.cta),
    },
  });
}

export function mapContactPage(value: unknown, fallback: ContactPageContent): ContactPageContent {
  const source = sourceOf(value);
  const hero = sourceOf(get(source, "hero"));
  return contactPageSchema.parse({
    ...fallback,
    hero: {
      ...fallback.hero,
      eyebrow: text(get(hero, "eyebrow"), fallback.hero.eyebrow),
      title: text(get(hero, "title"), fallback.hero.title),
      description: text(get(hero, "description"), fallback.hero.description),
    },
    details: Array.isArray(get(source, "details")) ? get(source, "details") : fallback.details,
    formTitle: text(get(source, "form_title", "formTitle"), fallback.formTitle),
    formDescription: text(
      get(source, "form_description", "formDescription"),
      fallback.formDescription,
    ),
    mapEmbedUrl: text(get(source, "map_embed_url", "mapEmbedUrl"), fallback.mapEmbedUrl),
  });
}

export function mapQuotePage(value: unknown, fallback: QuotePageContent): QuotePageContent {
  const source = sourceOf(value);
  const hero = sourceOf(get(source, "hero"));
  return quotePageSchema.parse({
    ...fallback,
    hero: {
      ...fallback.hero,
      eyebrow: text(get(hero, "eyebrow"), fallback.hero.eyebrow),
      title: text(get(hero, "title"), fallback.hero.title),
      description: text(get(hero, "description"), fallback.hero.description),
    },
    fields: Array.isArray(get(source, "fields")) ? get(source, "fields") : fallback.fields,
    process: steps(get(source, "process"), fallback.process),
    faqs: Array.isArray(get(source, "faqs")) ? get(source, "faqs") : fallback.faqs,
  });
}

export function mapService(value: unknown, fallback: Service): Service {
  const source = sourceOf(value);
  return serviceSchema.parse({
    ...fallback,
    slug: text(get(source, "slug"), fallback.slug),
    title: text(get(source, "title"), fallback.title),
    shortDescription: text(
      get(source, "short_description", "shortDescription", "excerpt"),
      fallback.shortDescription,
    ),
    description: text(get(source, "full_content", "description", "content"), fallback.description),
    image: image(get(source, "featured_image", "image"), fallback.image),
    iconKey: text(get(source, "icon_key", "iconKey"), fallback.iconKey),
    benefits: textList(get(source, "benefits"), fallback.benefits),
    processSteps: steps(get(source, "process_steps", "processSteps"), fallback.processSteps),
    documents: textList(get(source, "documents"), fallback.documents),
    cta: cta(get(source, "cta"), fallback.cta),
    seo: {
      ...fallback.seo,
      title: text(get(sourceOf(get(source, "seo")), "title"), fallback.seo.title),
      description: text(get(sourceOf(get(source, "seo")), "description"), fallback.seo.description),
    },
    verified:
      typeof get(source, "verified") === "boolean" ? get(source, "verified") : fallback.verified,
  });
}

export function mapProduct(value: unknown, fallback: Product): Product {
  const source = sourceOf(value);
  return productSchema.parse({
    ...fallback,
    slug: text(get(source, "slug"), fallback.slug),
    title: text(get(source, "title"), fallback.title),
    shortDescription: text(
      get(source, "short_description", "shortDescription", "excerpt"),
      fallback.shortDescription,
    ),
    description: text(get(source, "full_content", "description", "content"), fallback.description),
    category: text(get(source, "category"), fallback.category),
    categorySlug: text(get(source, "category_slug", "categorySlug"), fallback.categorySlug),
    image: image(get(source, "featured_image", "image"), fallback.image),
    specifications: textList(get(source, "specifications"), fallback.specifications),
    certifications: textList(get(source, "certifications"), fallback.certifications),
    documents: textList(get(source, "documents"), fallback.documents),
    supplierNote: text(
      get(source, "manufacturer_or_supplier", "supplier_note", "supplierNote"),
      fallback.supplierNote,
    ),
    inquiryCta: cta(get(source, "inquiry_cta", "inquiryCta"), fallback.inquiryCta),
    seo: {
      ...fallback.seo,
      title: text(get(sourceOf(get(source, "seo")), "title"), fallback.seo.title),
      description: text(get(sourceOf(get(source, "seo")), "description"), fallback.seo.description),
    },
    verified:
      typeof get(source, "verified") === "boolean" ? get(source, "verified") : fallback.verified,
  });
}

export function mapInsight(value: unknown, fallback: Insight): Insight {
  const source = sourceOf(value);
  const seo = sourceOf(get(source, "seo"));
  const author = sourceOf(get(source, "author"));
  return insightSchema.parse({
    ...fallback,
    slug: text(get(source, "slug"), fallback.slug),
    title: text(get(source, "title"), fallback.title),
    excerpt: text(get(source, "excerpt"), fallback.excerpt),
    content: text(get(source, "content", "body"), fallback.content),
    category: text(get(source, "category"), fallback.category),
    tags: textList(get(source, "tags"), fallback.tags),
    author: {
      name: text(get(author, "name"), fallback.author.name),
      role: text(get(author, "role"), fallback.author.role),
    },
    publishedAt: text(get(source, "published_at", "publishedAt", "date"), fallback.publishedAt),
    readingMinutes:
      typeof get(source, "reading_minutes", "readingMinutes") === "number"
        ? get(source, "reading_minutes", "readingMinutes")
        : fallback.readingMinutes,
    cover: image(get(source, "cover", "featured_image", "image"), fallback.cover),
    featured:
      typeof get(source, "featured") === "boolean" ? get(source, "featured") : fallback.featured,
    seo: {
      ...fallback.seo,
      title: text(get(seo, "title"), fallback.seo.title),
      description: text(get(seo, "description"), fallback.seo.description),
    },
  });
}

export function mapFaq(value: unknown, fallback: Faq): Faq {
  const source = sourceOf(value);
  return faqSchema.parse({
    ...fallback,
    question: text(get(source, "question", "title"), fallback.question),
    answer: text(get(source, "answer", "content", "body"), fallback.answer),
    category: text(get(source, "category"), fallback.category),
    order: typeof get(source, "order") === "number" ? get(source, "order") : fallback.order,
  });
}

export function mapWordpressPageTitle(page: { title?: { rendered?: string } }) {
  return text(page.title?.rendered);
}
