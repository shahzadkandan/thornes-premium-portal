export const fallbackSiteSettings = {
  companyName: "Thorneberry",
  siteUrl: "https://thorneberry.com.pk",
  email: "info@thorneberry.com.pk",
  phone: "+92-334-0007744",
  whatsapp: "+92-334-0007744",
  address: "House no 1, Adyala Road, RWP Pakistan",
  defaultSeoTitle: "Thorneberry - Healthcare Sourcing and Export Coordination",
  defaultSeoDescription:
    "Pakistan-based healthcare sourcing, documentation and logistics coordination support for international buyers.",
};

export const fallbackServices = [
  {
    slug: "pharma-sourcing",
    title: "Pharma Sourcing",
    shortDescription:
      "Medicine and pharmaceutical sourcing coordination for qualified international buyer requirements.",
    verified: true,
  },
  {
    slug: "surgical",
    title: "Surgical Instruments",
    shortDescription:
      "Surgical instrument sourcing support for distributors, hospitals, clinics and procurement teams.",
    verified: true,
  },
  {
    slug: "medical-supplies",
    title: "Medical Supplies",
    shortDescription:
      "Medical consumables, devices and healthcare procurement coordination through verified sources.",
    verified: true,
  },
  {
    slug: "quality-compliance",
    title: "Quality and Compliance",
    shortDescription:
      "Buyer-side document review for available supplier documents such as COA, COO, batch and expiry details.",
    verified: false,
  },
  {
    slug: "global-logistics",
    title: "Global Logistics",
    shortDescription:
      "Shipment planning discussions covering Incoterms, packing, documentation and freight coordination.",
    verified: false,
  },
  {
    slug: "importer-rfq-support",
    title: "Importer RFQ Support",
    shortDescription:
      "Structured RFQ intake for product, quantity, destination, document and timeline requirements.",
    verified: true,
  },
];

export const fallbackHomepage = {
  heroEyebrow: "Pakistan-based healthcare sourcing desk",
  heroTitle: "Healthcare sourcing and export coordination from Pakistan.",
  heroDescription:
    "Thorneberry helps international buyers structure healthcare product requirements, documentation review and shipment planning without presenting itself as the manufacturer.",
  primaryCta: { label: "Request RFQ", href: "/request-a-quote" },
  secondaryCta: { label: "Explore services", href: "/services" },
};
