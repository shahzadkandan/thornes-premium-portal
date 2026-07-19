import heroPhoto from "@/assets/thorneberry-healthcare-export-hero.webp";
import medicineImage from "@/assets/service-medicine.jpg";
import medicalImage from "@/assets/service-medical.jpg";
import surgicalImage from "@/assets/service-surgical.jpg";
import wearableImage from "@/assets/service-wearables.jpg";
import aboutImage from "@/assets/about-1.jpg";
import logoImage from "@/assets/thorneberry-logo.jpg";

const image = (src: string, alt: string) => ({ src, alt });

export const fallbackSiteSettings = {
  companyName: "Thorneberry",
  siteUrl: "https://thorneberry.com.pk",
  email: "info@thorneberry.com.pk",
  phone: "+92-334-0007744",
  whatsapp: "+92-334-0007744",
  address: "House no 1, Adyala Road, RWP Pakistan",
  workingHours: "Monday - Saturday, 9:00 - 18:00 PKT",
  logo: image(logoImage, "Thorneberry logo"),
  defaultSeoTitle: "Thorneberry | Healthcare Sourcing & Export Coordination",
  defaultSeoDescription:
    "Thorneberry connects international healthcare buyers with Pakistan-based sourcing, pharmaceutical export coordination, documentation and logistics support.",
  defaultOgImage: image(heroPhoto, "Healthcare sourcing and export coordination from Pakistan"),
  socialLinks: [],
  headerCta: { label: "Request RFQ", href: "/request-a-quote" },
  footerText:
    "Pakistan-based healthcare sourcing, pharmaceutical export, procurement, documentation and logistics coordination partner for international buyers.",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Healthcare Solutions", href: "/services" },
    { label: "Knowledge Hub", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const fallbackHomepage = {
  hero: {
    eyebrow: "Pakistan-based healthcare sourcing desk",
    title: "Healthcare sourcing & pharma export coordination from Pakistan.",
    description:
      "Thorneberry supports international buyers with pharmaceutical sourcing, medicine export coordination, quality documentation, regulatory coordination and global shipment planning.",
    image: image(heroPhoto, "Healthcare sourcing and pharmaceutical export coordination"),
    primaryCta: { label: "Request Export Quote", href: "/request-a-quote" },
    secondaryCta: { label: "Explore Healthcare Solutions", href: "/services" },
    proofPoints: [
      { label: "RFQ", detail: "Structured intake" },
      { label: "Docs", detail: "Destination-aware" },
      { label: "Incoterms", detail: "Quote clarity" },
      { label: "Logistics", detail: "Shipment planning" },
    ],
  },
  trustItems: [
    {
      title: "Healthcare sourcing",
      description: "Product requirements reviewed before quote.",
      iconKey: "search",
    },
    {
      title: "Documentation support",
      description: "COA, COO, batch, expiry and export documents where applicable.",
      iconKey: "file",
    },
    {
      title: "Regulatory coordination",
      description: "Destination-aware document workflow for buyer review.",
      iconKey: "shield",
    },
    {
      title: "Global shipment planning",
      description: "Incoterms, freight mode and timeline clarity.",
      iconKey: "plane",
    },
  ],
  aboutSummary: {
    eyebrow: "A focused export coordination partner",
    title: "Built around the buyer's procurement journey.",
    body: "Thorneberry connects international buyers with Pakistan-based healthcare sourcing channels. The role is coordination: clarify the requirement, review availability and documents, align the quotation and plan the shipment with the buyer.",
    cta: { label: "How Thorneberry works", href: "/about" },
  },
  selectedServiceSlugs: [
    "pharmaceutical-sourcing",
    "medicine-export-coordination",
    "surgical-instruments",
    "medical-supplies",
    "medical-devices-wearables",
    "quality-documentation",
  ],
  valuePropositions: [
    {
      title: "One structured conversation",
      description:
        "Product, quantity, destination and documents stay connected from RFQ to shipment planning.",
      iconKey: "clipboard",
    },
    {
      title: "Clearer quote context",
      description: "MOQ, lead time, Incoterms and documentation questions are surfaced early.",
      iconKey: "quote",
    },
    {
      title: "Buyer-side confidence",
      description:
        "Thorneberry helps international importers understand what can be supported before they commit.",
      iconKey: "handshake",
    },
  ],
  productFormats: [
    "Tablets",
    "Capsules",
    "Injections",
    "Infusions",
    "Syrups & Suspensions",
    "Creams & Topicals",
    "Hospital Consumables",
    "Surgical Sets",
  ],
  processSteps: [
    {
      title: "Share requirement",
      description: "Send product, dosage form, strength, quantity and destination country.",
    },
    {
      title: "Review product fit",
      description: "Availability, supplier suitability and documentation needs are reviewed.",
    },
    {
      title: "Clarify quotation",
      description: "MOQ, Incoterms, lead time, payment terms and quote validity are discussed.",
    },
    {
      title: "Plan shipment",
      description: "Packing, documents, freight mode and export coordination are aligned.",
    },
  ],
  buyerSegments: [
    {
      title: "Importers & distributors",
      description: "Product sourcing, portfolio review and repeat supply conversations.",
      iconKey: "network",
    },
    {
      title: "Hospitals & clinics",
      description: "Medicine, surgical and medical supply procurement support.",
      iconKey: "hospital",
    },
    {
      title: "NGOs & institutions",
      description:
        "Institutional healthcare sourcing coordination subject to requirements and documentation.",
      iconKey: "heart",
    },
  ],
  knowledgeHub: {
    eyebrow: "Knowledge Hub",
    title: "Export knowledge for better procurement decisions.",
    description:
      "Practical guidance on pharmaceutical sourcing, RFQs, documentation, Incoterms and healthcare shipment planning.",
    cta: { label: "Visit Knowledge Hub", href: "/insights" },
  },
  cta: {
    eyebrow: "Start with a clear requirement",
    title: "Ready to discuss your product requirement?",
    description:
      "Share your product list, destination country, quantity, required documents and expected timeline for a structured review.",
    primaryCta: { label: "Request Export Quote", href: "/request-a-quote" },
    secondaryCta: { label: "WhatsApp +92-334-0007744", href: "https://wa.me/923340007744" },
  },
};

export const fallbackAboutPage = {
  hero: {
    eyebrow: "About Thorneberry",
    title: "A healthcare sourcing and export coordination company.",
    description:
      "Thorneberry helps international buyers navigate Pakistan-based healthcare procurement with a focused, documentation-aware and logistics-conscious workflow.",
  },
  story: {
    title: "A clearer bridge between buyer requirements and export coordination.",
    paragraphs: [
      "International healthcare procurement can become difficult when product availability, documents, pricing and shipment planning are handled as disconnected conversations.",
      "Thorneberry brings those conversations together. We help importers, distributors, hospitals, clinics and institutional procurement teams structure a requirement and coordinate the next steps with relevant Pakistan-based supply channels.",
      "Thorneberry is presented as a sourcing and export-coordination partner. Product availability, supplier attribution, documentation and lead time are reviewed per inquiry rather than promised universally.",
    ],
    image: image(aboutImage, "Thorneberry healthcare sourcing coordination"),
  },
  mission:
    "Make cross-border healthcare procurement clearer, more structured and easier to move from requirement to shipment planning.",
  vision:
    "Become a trusted Pakistan-based coordination desk for serious healthcare buyers who value clarity, responsive communication and document-aware export workflows.",
  values: [
    {
      title: "Clarity before commitment",
      description:
        "We surface product, document, MOQ and destination questions before expectations are set.",
    },
    {
      title: "Evidence-led communication",
      description:
        "Capabilities and claims should be supported by available supplier or company information.",
    },
    {
      title: "Buyer journey thinking",
      description:
        "RFQ, quote, documentation and shipment planning are treated as one procurement path.",
    },
    {
      title: "Long-term coordination",
      description:
        "A useful export relationship should support repeat conversations, not only one transaction.",
    },
  ],
  team: [],
  certifications: [],
  cta: {
    title: "Start a sourcing conversation",
    description:
      "Share the requirement you are trying to procure and we will help structure the next step.",
    cta: { label: "Request an RFQ", href: "/request-a-quote" },
  },
};

export const fallbackServices = [
  {
    slug: "pharmaceutical-sourcing",
    title: "Pharmaceutical Sourcing",
    shortDescription:
      "Pakistan-based sourcing coordination for medicines, generics, dosage forms and qualified buyer requirements.",
    description:
      "Thorneberry helps international buyers structure pharmaceutical requirements and coordinate availability, supplier conversations and documentation review through relevant Pakistan-based supply channels.",
    image: image(medicineImage, "Pharmaceutical sourcing coordination"),
    iconKey: "pill",
    benefits: [
      "Generic name, dosage form and strength review",
      "Buyer-specific quantity and destination discussion",
      "Supplier and document availability review",
      "Quote context before shipment planning",
    ],
    processSteps: fallbackHomepage.processSteps,
    documents: [
      "Certificate of Analysis where applicable",
      "Certificate of Origin where applicable",
      "Batch and expiry details",
      "Product-specific export documents",
    ],
    cta: { label: "Discuss pharmaceutical sourcing", href: "/request-a-quote" },
    seo: {
      title: "Pharmaceutical Sourcing from Pakistan | Thorneberry",
      description:
        "Pharmaceutical sourcing and export coordination support for international healthcare buyers.",
    },
    verified: true,
  },
  {
    slug: "medicine-export-coordination",
    title: "Medicine Export Coordination",
    shortDescription:
      "Quote, MOQ, documentation, Incoterms and shipment planning support for medicine buyers.",
    description:
      "Medicine export coordination connects the product requirement to quotation context, documentation questions and a realistic shipment conversation.",
    image: image(medicineImage, "Medicine export coordination"),
    iconKey: "clipboard",
    benefits: [
      "Structured medicine RFQ intake",
      "MOQ, lead time and quote validity discussion",
      "Destination-aware documentation review",
      "Air, sea or other freight planning discussion",
    ],
    processSteps: fallbackHomepage.processSteps,
    documents: [
      "Commercial invoice",
      "Packing list",
      "Certificate of Origin where applicable",
      "Product-specific documentation",
    ],
    cta: { label: "Request a medicine RFQ", href: "/request-a-quote" },
    seo: {
      title: "Medicine Export Coordination | Thorneberry",
      description:
        "Coordinate medicine sourcing, documentation and shipment planning with Thorneberry.",
    },
    verified: true,
  },
  {
    slug: "surgical-instruments",
    title: "Surgical Instruments",
    shortDescription:
      "Surgical instrument sourcing support for distributors, hospitals, clinics and procurement teams.",
    description:
      "Thorneberry helps buyers organize surgical instrument requirements, technical details, quantity, packaging and destination documentation questions before a quote is prepared.",
    image: image(surgicalImage, "Surgical instruments sourcing"),
    iconKey: "scissors",
    benefits: [
      "General, dental, orthopaedic and ENT requirements can be reviewed",
      "Technical specification and material questions",
      "Custom set, packaging or branding discussion where supported",
      "Inspection and documentation options reviewed per inquiry",
    ],
    processSteps: fallbackHomepage.processSteps,
    documents: [
      "Technical product details",
      "Packing and labeling information",
      "Available quality documents",
      "Destination-specific import requirements",
    ],
    cta: { label: "Discuss surgical instruments", href: "/request-a-quote" },
    seo: {
      title: "Surgical Instrument Sourcing | Thorneberry",
      description:
        "Surgical instrument sourcing and export coordination support for global healthcare buyers.",
    },
    verified: true,
  },
  {
    slug: "medical-supplies",
    title: "Medical Supplies",
    shortDescription:
      "Hospital consumables, clinical supplies and medical procurement support for global buyers.",
    description:
      "Medical supply inquiries are reviewed around product specifications, usage environment, packaging, quantity, documents and destination needs.",
    image: image(medicalImage, "Medical supplies sourcing"),
    iconKey: "stethoscope",
    benefits: [
      "Consumables and clinical procurement review",
      "Specification, packaging and quantity clarity",
      "Buyer-side document checklist",
      "Shipment planning for institutional requirements",
    ],
    processSteps: fallbackHomepage.processSteps,
    documents: [
      "Product specification",
      "Packing list and invoice",
      "Available certificates",
      "Destination import documents where applicable",
    ],
    cta: { label: "Discuss medical supplies", href: "/request-a-quote" },
    seo: {
      title: "Medical Supplies Sourcing | Thorneberry",
      description:
        "Medical supplies and healthcare procurement coordination for international buyers.",
    },
    verified: true,
  },
  {
    slug: "medical-devices-wearables",
    title: "Medical Wearables & Devices",
    shortDescription:
      "Medical device and wearable sourcing coordination subject to product, certification and destination review.",
    description:
      "Wearable and device requests are assessed around intended use, technical requirements, certification evidence, quantity and destination import pathway.",
    image: image(wearableImage, "Medical wearables and devices"),
    iconKey: "watch",
    benefits: [
      "Product and intended-use clarification",
      "Certification and technical file questions",
      "Supplier availability review",
      "Destination-specific import considerations",
    ],
    processSteps: fallbackHomepage.processSteps,
    documents: [
      "Technical specification",
      "Available conformity documents",
      "Packing and labeling details",
      "Destination requirements",
    ],
    cta: { label: "Discuss medical devices", href: "/request-a-quote" },
    seo: {
      title: "Medical Wearables & Devices | Thorneberry",
      description:
        "Medical wearable and device sourcing coordination subject to product and destination review.",
    },
    verified: true,
  },
  {
    slug: "quality-documentation",
    title: "Quality & Documentation Support",
    shortDescription:
      "COA, COO, batch, expiry, invoice, packing list and product-document review where applicable.",
    description:
      "Documentation is discussed before final quotation because requirements vary by product, supplier, order and destination market.",
    image: image(medicalImage, "Healthcare quality documentation support"),
    iconKey: "file",
    benefits: [
      "Document checklist by product and destination",
      "COA and COO discussion where available",
      "Batch, expiry and packing information",
      "No universal document promise without verification",
    ],
    processSteps: fallbackHomepage.processSteps,
    documents: [
      "COA where applicable",
      "COO where applicable",
      "Batch and expiry information",
      "Commercial invoice and packing list",
    ],
    cta: { label: "Review documentation needs", href: "/request-a-quote" },
    seo: {
      title: "Healthcare Export Documentation | Thorneberry",
      description:
        "Buyer-side quality and export documentation coordination for healthcare procurement.",
    },
    verified: false,
  },
  {
    slug: "regulatory-coordination",
    title: "Regulatory Coordination",
    shortDescription:
      "Destination-aware document coordination for importers, distributors and institutional buyers.",
    description:
      "Thorneberry helps buyers identify the product and destination questions that should be clarified with suppliers, regulators and import teams before shipment.",
    image: image(medicineImage, "Healthcare regulatory coordination"),
    iconKey: "globe",
    benefits: [
      "Destination market requirement discussion",
      "Product registration question mapping",
      "Supplier evidence review where available",
      "Coordination with buyer-side compliance teams",
    ],
    processSteps: fallbackHomepage.processSteps,
    documents: [
      "Product-specific registration documents",
      "Available certificates",
      "Origin and shipment documents",
      "Buyer-provided destination checklist",
    ],
    cta: { label: "Discuss compliance needs", href: "/request-a-quote" },
    seo: {
      title: "Healthcare Regulatory Coordination | Thorneberry",
      description:
        "Destination-aware regulatory and export document coordination for healthcare buyers.",
    },
    verified: false,
  },
  {
    slug: "global-logistics",
    title: "Global Logistics",
    shortDescription:
      "Air, sea, freight forwarder, Incoterms, customs document and shipment planning support.",
    description:
      "Shipment planning is aligned with product readiness, documents, packing, destination, freight mode and the responsibilities set by the agreed Incoterms.",
    image: image(surgicalImage, "Global healthcare logistics planning"),
    iconKey: "truck",
    benefits: [
      "FCA, CIF, CIP and DAP context can be discussed",
      "Air and sea freight planning",
      "Packing, batch, expiry and dispatch document alignment",
      "Temperature-sensitive planning where required and verified",
    ],
    processSteps: fallbackHomepage.processSteps,
    documents: [
      "Commercial invoice",
      "Packing list",
      "Transport and origin documents",
      "Destination customs requirements",
    ],
    cta: { label: "Plan a healthcare shipment", href: "/request-a-quote" },
    seo: {
      title: "Global Healthcare Logistics | Thorneberry",
      description:
        "Healthcare shipment, Incoterms and export logistics coordination for international buyers.",
    },
    verified: false,
  },
  {
    slug: "importer-rfq-support",
    title: "Importer & Distributor Support",
    shortDescription:
      "Structured RFQ support for importers, distributors, hospitals and institutional procurement teams.",
    description:
      "A useful RFQ starts with the details that determine product fit, quote validity, documents, timeline and shipment feasibility.",
    image: image(wearableImage, "Importer and distributor RFQ support"),
    iconKey: "handshake",
    benefits: [
      "Product list and requirement review",
      "Destination and quantity clarity",
      "Document and timeline questions",
      "A direct path to the next procurement step",
    ],
    processSteps: fallbackHomepage.processSteps,
    documents: [
      "Buyer product list",
      "Destination-country requirements",
      "Preferred Incoterms",
      "Expected delivery timeline",
    ],
    cta: { label: "Start an importer RFQ", href: "/request-a-quote" },
    seo: {
      title: "Importer RFQ Support | Thorneberry",
      description:
        "Structured importer and distributor RFQ support for healthcare procurement from Pakistan.",
    },
    verified: true,
  },
];

export const fallbackProducts = [
  {
    slug: "tablets-capsules",
    title: "Tablets & Capsules",
    shortDescription:
      "Solid oral dosage-form requirements reviewed with product, strength, quantity and destination details.",
    description:
      "Tablets and capsules can be reviewed as part of a pharmaceutical RFQ. Availability, packaging, MOQ, documents and lead time depend on the requested product and supplier.",
    category: "Medicine",
    categorySlug: "medicine",
    image: image(medicineImage, "Tablets and capsules sourcing"),
    specifications: [
      "Generic or brand name",
      "Strength and dosage form",
      "Pack size and target quantity",
      "Destination and registration status",
    ],
    certifications: [],
    documents: [
      "COA where applicable",
      "Batch and expiry details",
      "Origin and export documents where applicable",
    ],
    supplierNote:
      "Supplier and manufacturer attribution is confirmed per inquiry before publication or quotation.",
    inquiryCta: { label: "Request medicine availability", href: "/request-a-quote" },
    seo: {
      title: "Tablets & Capsules Sourcing | Thorneberry",
      description:
        "Source tablets and capsules through a structured pharmaceutical export inquiry.",
    },
    verified: false,
  },
  {
    slug: "injectables-infusions",
    title: "Injectables & Infusions",
    shortDescription:
      "Injectable and infusion requirements reviewed around presentation, cold-chain questions, documents and destination needs.",
    description:
      "Injectable and infusion inquiries require extra attention to packaging, handling, shelf life, documents and destination requirements.",
    category: "Medicine",
    categorySlug: "medicine",
    image: image(medicineImage, "Injectables and infusions sourcing"),
    specifications: [
      "Molecule and presentation",
      "Strength and pack size",
      "Storage and handling requirements",
      "Quantity and destination",
    ],
    certifications: [],
    documents: [
      "Product-specific certificates",
      "Batch and expiry details",
      "Transport and handling documents where applicable",
    ],
    supplierNote:
      "Cold-chain and GDP claims are reviewed per product and route; they are not assumed globally.",
    inquiryCta: { label: "Discuss injectables", href: "/request-a-quote" },
    seo: {
      title: "Injectables & Infusions Sourcing | Thorneberry",
      description: "Discuss injectable and infusion sourcing requirements with Thorneberry.",
    },
    verified: false,
  },
  {
    slug: "surgical-instrument-sets",
    title: "Surgical Instrument Sets",
    shortDescription:
      "General, dental, orthopaedic and other surgical instrument-set requirements reviewed by specification.",
    description:
      "Instrument sets can be scoped around procedure, material, finish, quantity, packaging and any branding or technical requirements supported by the supplier.",
    category: "Surgical",
    categorySlug: "surgical",
    image: image(surgicalImage, "Surgical instrument sets"),
    specifications: [
      "Procedure or specialty",
      "Instrument list and material",
      "Set quantity and packaging",
      "Technical and destination requirements",
    ],
    certifications: [],
    documents: [
      "Technical product details",
      "Packing and labeling information",
      "Available supplier documentation",
    ],
    supplierNote: "Product and supplier information is confirmed per inquiry.",
    inquiryCta: { label: "Request surgical catalogue", href: "/request-a-quote" },
    seo: {
      title: "Surgical Instrument Sets | Thorneberry",
      description: "Surgical instrument sourcing and export coordination for international buyers.",
    },
    verified: false,
  },
  {
    slug: "hospital-consumables",
    title: "Hospital Consumables",
    shortDescription:
      "Clinical and hospital consumable requirements reviewed around specification, packaging and institutional quantity.",
    description:
      "Hospital consumable inquiries are reviewed with product specification, intended use, pack configuration, quantity and destination documentation in mind.",
    category: "Medical Supplies",
    categorySlug: "medical-supplies",
    image: image(medicalImage, "Hospital consumables"),
    specifications: [
      "Product specification",
      "Intended use",
      "Pack configuration",
      "Quantity and delivery timeline",
    ],
    certifications: [],
    documents: [
      "Product specification",
      "Packing list and invoice",
      "Available certificates where applicable",
    ],
    supplierNote: "Availability and supplier attribution are confirmed before quote.",
    inquiryCta: { label: "Discuss medical supplies", href: "/request-a-quote" },
    seo: {
      title: "Hospital Consumables Sourcing | Thorneberry",
      description: "Hospital consumable sourcing and healthcare procurement coordination.",
    },
    verified: false,
  },
  {
    slug: "medical-wearables",
    title: "Medical Wearables",
    shortDescription:
      "Wearable and remote-monitoring product requirements reviewed around intended use and available evidence.",
    description:
      "Medical wearable inquiries are reviewed around intended use, technical specification, conformity evidence, quantity and destination pathway.",
    category: "Wearables",
    categorySlug: "wearables",
    image: image(wearableImage, "Medical wearables"),
    specifications: [
      "Intended use",
      "Technical specification",
      "Certification evidence",
      "Quantity and destination",
    ],
    certifications: [],
    documents: [
      "Technical file where available",
      "Conformity documents where available",
      "Packing and labeling details",
    ],
    supplierNote:
      "Certification and regulatory suitability must be confirmed per product and market.",
    inquiryCta: { label: "Discuss medical wearables", href: "/request-a-quote" },
    seo: {
      title: "Medical Wearables Sourcing | Thorneberry",
      description:
        "Medical wearable sourcing coordination subject to product and destination review.",
    },
    verified: false,
  },
];

export const fallbackInsights = [
  {
    slug: "how-importers-source-medicines-from-pakistan",
    title: "How international importers source medicines from Pakistan",
    excerpt:
      "A practical overview of requirement review, supplier coordination, documentation, pricing, shipment planning and buyer-side compliance.",
    content:
      "For international buyers, medicine sourcing from Pakistan begins with a clear product requirement: generic name, dosage form, strength, quantity, destination country, registration status and preferred Incoterms.\n\nAfter the initial RFQ, availability, supplier suitability, batch documentation, packaging expectations, shelf-life requirements and lead time should be reviewed. Buyers may also need product-specific documents or destination import information.\n\nThorneberry supports this journey by coordinating between buyers, Pakistan-based healthcare supply channels, documentation teams and logistics partners.",
    category: "Industry Insights",
    tags: ["medicine sourcing", "importers", "Pakistan", "RFQ"],
    author: { name: "Thorneberry Editorial Desk", role: "Healthcare Export Insights" },
    publishedAt: "2026-07-14",
    readingMinutes: 4,
    cover: image(medicineImage, "Medicine sourcing from Pakistan"),
    featured: true,
    seo: {
      title: "How Importers Source Medicines from Pakistan",
      description: "A practical guide to medicine sourcing and export coordination from Pakistan.",
    },
  },
  {
    slug: "pharmaceutical-export-rfq-checklist",
    title: "Pharmaceutical export RFQ checklist for serious buyers",
    excerpt:
      "What importers should include when requesting a quote for medicines, generics, injectables, OTC products or institutional supply.",
    content:
      "A strong pharmaceutical RFQ should include the product name, active ingredient, dosage form, strength, target quantity, destination country, registration needs, preferred packaging and expected delivery terms.\n\nMOQ, lead time, shelf life, payment terms and documentation requirements should be discussed early. If the product is for tender, hospital procurement or institutional supply, technical specifications should be included.",
    category: "Pharmaceutical Exports",
    tags: ["RFQ", "pharmaceutical export", "MOQ", "documentation"],
    author: { name: "Thorneberry Editorial Desk", role: "Healthcare Export Insights" },
    publishedAt: "2026-07-13",
    readingMinutes: 3,
    cover: image(medicineImage, "Pharmaceutical export RFQ checklist"),
    featured: false,
    seo: {
      title: "Pharmaceutical Export RFQ Checklist",
      description:
        "The product, document and shipment details buyers should include in a pharmaceutical RFQ.",
    },
  },
  {
    slug: "surgical-medical-supplies-buyer-guide",
    title: "Buyer guide for surgical instruments and medical supplies",
    excerpt:
      "Key points hospitals, distributors and procurement teams should verify before sourcing surgical and medical supply products.",
    content:
      "Surgical and medical supply sourcing requires clarity on material, usage environment, packaging, sterilization expectations, quantity, technical standards and destination-country import rules.\n\nA low price is not useful if product specifications are unclear or documentation is incomplete. Buyers should ask for product details, available certificates, packing details and realistic shipment timelines.",
    category: "Surgical & Medical",
    tags: ["surgical instruments", "medical supplies", "hospital procurement"],
    author: { name: "Thorneberry Editorial Desk", role: "Healthcare Export Insights" },
    publishedAt: "2026-07-12",
    readingMinutes: 3,
    cover: image(surgicalImage, "Surgical instruments and medical supplies"),
    featured: false,
    seo: {
      title: "Buyer Guide for Surgical Instruments and Medical Supplies",
      description: "How healthcare buyers can structure surgical and medical supply requirements.",
    },
  },
  {
    slug: "quality-documentation-for-healthcare-exports",
    title: "Quality documentation buyers may request in healthcare exports",
    excerpt:
      "A simple guide to COA, COO, batch details, expiry information, product documentation and importer-side regulatory checks.",
    content:
      "Depending on the product and destination market, buyers may request a certificate of analysis, certificate of origin, batch information, expiry details, packing list, invoice and other product-specific documents.\n\nDocumentation availability should be discussed before final quotation. Not every product requires the same evidence, and not every destination market follows the same import pathway.",
    category: "Regulatory & Compliance",
    tags: ["COA", "COO", "quality documentation", "compliance"],
    author: { name: "Thorneberry Editorial Desk", role: "Healthcare Export Insights" },
    publishedAt: "2026-07-11",
    readingMinutes: 4,
    cover: image(medicalImage, "Healthcare export documentation"),
    featured: false,
    seo: {
      title: "Quality Documentation for Healthcare Exports",
      description:
        "Understand the documents healthcare buyers may request before export quotation.",
    },
  },
  {
    slug: "incoterms-logistics-healthcare-shipments",
    title: "Incoterms and logistics planning for healthcare shipments",
    excerpt:
      "Why shipment terms, lead time, documentation and freight planning should be aligned before confirming healthcare export orders.",
    content:
      "Healthcare shipment planning is more than booking freight. Buyers and suppliers need clarity on Incoterms, responsibility points, destination handling, documentation timing, packaging expectations and any temperature or handling sensitivity.\n\nThorneberry helps international buyers discuss Incoterms and logistics early, so quotations reflect the real export journey instead of only product pricing.",
    category: "Global Trade",
    tags: ["Incoterms", "logistics", "shipment planning", "global trade"],
    author: { name: "Thorneberry Editorial Desk", role: "Healthcare Export Insights" },
    publishedAt: "2026-07-10",
    readingMinutes: 3,
    cover: image(heroPhoto, "Healthcare shipment logistics"),
    featured: false,
    seo: {
      title: "Incoterms and Logistics for Healthcare Shipments",
      description:
        "Why healthcare buyers should align Incoterms, documents and freight planning early.",
    },
  },
  {
    slug: "thorneberry-healthcare-export-focus",
    title: "Thorneberry focuses on healthcare export coordination",
    excerpt:
      "Thorneberry's focused direction covers pharmaceutical sourcing, surgical instruments, medical supplies, documentation and logistics support.",
    content:
      "Thorneberry's digital presence is focused around healthcare export coordination for international buyers. The role is pharmaceutical sourcing, medicine export coordination, surgical instruments, medical supplies, quality documentation, logistics and importer RFQ support.\n\nThis direction keeps the buyer journey focused and removes unrelated export categories from the healthcare experience.",
    category: "Company News",
    tags: ["Thorneberry", "healthcare exports", "company update"],
    author: { name: "Thorneberry Editorial Desk", role: "Company Updates" },
    publishedAt: "2026-07-09",
    readingMinutes: 2,
    cover: image(heroPhoto, "Thorneberry healthcare export coordination"),
    featured: false,
    seo: {
      title: "Thorneberry Healthcare Export Coordination",
      description: "Thorneberry's focused healthcare sourcing and export coordination direction.",
    },
  },
];

export const fallbackFaqs = [
  {
    question: "What does Thorneberry do?",
    answer:
      "Thorneberry supports global healthcare buyers with medicine, pharmaceutical, surgical and medical supply export coordination from Pakistan.",
    category: "General",
    order: 1,
  },
  {
    question: "How can I request a quote?",
    answer:
      "Submit your product requirement through the RFQ form or contact Thorneberry via phone or WhatsApp at +92-334-0007744, or email info@thorneberry.com.pk.",
    category: "RFQ",
    order: 2,
  },
  {
    question: "Does Thorneberry export food products?",
    answer:
      "No. The current website focuses on healthcare, pharmaceutical, surgical and medical export solutions.",
    category: "General",
    order: 3,
  },
  {
    question: "Who can contact Thorneberry?",
    answer:
      "Hospitals, importers, distributors, NGOs, clinics and institutional procurement teams can share a healthcare sourcing requirement.",
    category: "General",
    order: 4,
  },
  {
    question: "What should I include in an RFQ?",
    answer:
      "Include the product or generic name, dosage form or specification, quantity, destination country, required documents and expected timeline.",
    category: "RFQ",
    order: 5,
  },
  {
    question: "Can you guarantee certificates, cold chain or lead time?",
    answer:
      "No universal guarantee is made. Documents, handling requirements and lead time are reviewed per product, supplier, order and destination.",
    category: "Quality & Compliance",
    order: 6,
  },
];

export const fallbackContactPage = {
  hero: {
    eyebrow: "Contact Thorneberry",
    title: "Start a healthcare sourcing conversation.",
    description:
      "Share your product requirement, quantity, destination country and timeline. Thorneberry will review the RFQ and respond with the next coordination steps.",
  },
  details: [
    { label: "Address", value: fallbackSiteSettings.address, iconKey: "map" },
    { label: "Phone / WhatsApp", value: fallbackSiteSettings.phone, iconKey: "phone" },
    { label: "Email", value: fallbackSiteSettings.email, iconKey: "mail" },
    { label: "Working hours", value: fallbackSiteSettings.workingHours, iconKey: "clock" },
  ],
  formTitle: "Tell us what you are trying to procure",
  formDescription:
    "Include product details, quantity, destination, required documents and expected timeline.",
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=73.00%2C33.52%2C73.18%2C33.66&layer=mapnik",
};

export const fallbackQuotePage = {
  hero: {
    eyebrow: "Importer RFQ support",
    title: "Request a structured export quote.",
    description:
      "The more context you share, the more useful the sourcing, documentation and shipment-planning conversation can be.",
  },
  fields: [
    { label: "Your name", name: "name", type: "text" as const, required: true },
    { label: "Company", name: "company", type: "text" as const, required: true },
    { label: "Work email", name: "email", type: "email" as const, required: true },
    { label: "Phone / WhatsApp", name: "phone", type: "tel" as const, required: true },
    { label: "Destination country", name: "country", type: "text" as const, required: true },
    {
      label: "Product area",
      name: "productArea",
      type: "select" as const,
      required: true,
      options: [
        "Medicine / Pharmaceutical",
        "Surgical Instruments",
        "Medical Supplies",
        "Medical Wearables",
        "Other healthcare requirement",
      ],
    },
    {
      label: "Quantity or annual requirement",
      name: "quantity",
      type: "text" as const,
      required: false,
    },
    {
      label: "Requirement details",
      name: "requirements",
      type: "textarea" as const,
      required: true,
    },
  ],
  process: fallbackHomepage.processSteps,
  faqs: fallbackFaqs.filter((faq) => ["RFQ", "Quality & Compliance"].includes(faq.category)),
};
