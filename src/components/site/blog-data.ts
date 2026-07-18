import medicineCover from "@/assets/service-medicine.jpg";
import surgicalCover from "@/assets/service-surgical.jpg";
import medicalCover from "@/assets/service-medical.jpg";
import healthcareCover from "@/assets/thorneberry-healthcare-export-hero.webp";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: { name: string; role: string; avatar?: string };
  publishedAt: string; // ISO
  readingMinutes: number;
  cover: string;
  featured?: boolean;
};

export const blogCategories = [
  "Industry Insights",
  "Pharmaceutical Exports",
  "Surgical & Medical",
  "Regulatory & Compliance",
  "Global Trade",
  "Company News",
];

// Posts are managed manually. Leave empty — render an elegant empty state.
export const blogPosts: BlogPost[] = [
  {
    slug: "how-importers-source-medicines-from-pakistan",
    title: "How international importers source medicines from Pakistan",
    excerpt:
      "A practical overview of the sourcing path: requirement review, manufacturer coordination, documentation, pricing, shipment planning and buyer-side compliance.",
    content: `
For international buyers, medicine sourcing from Pakistan is not only a price discussion. A reliable procurement journey usually begins with a clear product requirement: generic name, dosage form, strength, quantity, destination country, registration status and preferred Incoterms.

After the initial RFQ, the sourcing desk reviews availability, manufacturer suitability, batch documentation, packaging expectations, shelf-life requirements and lead time. For regulated products, buyers may also need COA, COO, GMP-related evidence, product dossiers or destination-specific import documents.

Thorneberry supports this journey by coordinating between buyers, Pakistan-based pharmaceutical supply channels, documentation teams and logistics partners. The goal is to reduce uncertainty before quotation, so importers understand what can be supplied, what documents may be available and how shipment planning should be approached.
`,
    category: "Industry Insights",
    tags: ["medicine sourcing", "importers", "Pakistan", "RFQ"],
    author: { name: "Thorneberry Editorial Desk", role: "Healthcare Export Insights" },
    publishedAt: "2026-07-14",
    readingMinutes: 4,
    cover: medicineCover,
    featured: true,
  },
  {
    slug: "pharmaceutical-export-rfq-checklist",
    title: "Pharmaceutical export RFQ checklist for serious buyers",
    excerpt:
      "What importers should include when requesting a quote for medicines, generics, injectables, OTC products or institutional supply.",
    content: `
A strong pharmaceutical RFQ saves time and improves quote accuracy. Buyers should share the product name, active ingredient, dosage form, strength, target quantity, destination country, registration needs, preferred packaging and expected delivery terms.

MOQ, lead time, shelf life, payment terms and documentation requirements should be discussed early. If the product is for tender, hospital procurement or NGO supply, the buyer should also mention technical specifications and any mandatory certificates.

Thorneberry structures RFQ intake so the sourcing and documentation review can happen before expectations are set. This helps buyers avoid unclear pricing, incomplete documents or shipment delays later in the process.
`,
    category: "Pharmaceutical Exports",
    tags: ["RFQ", "pharmaceutical export", "MOQ", "documentation"],
    author: { name: "Thorneberry Editorial Desk", role: "Healthcare Export Insights" },
    publishedAt: "2026-07-13",
    readingMinutes: 3,
    cover: medicineCover,
  },
  {
    slug: "surgical-medical-supplies-buyer-guide",
    title: "Buyer guide for surgical instruments and medical supplies",
    excerpt:
      "Key points hospitals, distributors and procurement teams should verify before sourcing surgical and medical supply products.",
    content: `
Surgical and medical supply sourcing requires clarity on material, usage environment, packaging, sterilization expectations, quantity, technical standards and destination-country import rules.

For distributors and hospitals, the biggest concern is consistency. A low price is not useful if product specifications are unclear or documentation is incomplete. Buyers should ask for product details, available certificates, packing details and realistic shipment timelines.

Thorneberry helps buyers organize surgical and medical supply requests so quotation, documentation and logistics can be reviewed as one workflow rather than separate disconnected steps.
`,
    category: "Surgical & Medical",
    tags: ["surgical instruments", "medical supplies", "hospital procurement"],
    author: { name: "Thorneberry Editorial Desk", role: "Healthcare Export Insights" },
    publishedAt: "2026-07-12",
    readingMinutes: 3,
    cover: surgicalCover,
  },
  {
    slug: "quality-documentation-for-healthcare-exports",
    title: "Quality documentation buyers may request in healthcare exports",
    excerpt:
      "A simple guide to COA, COO, batch details, expiry information, product documentation and importer-side regulatory checks.",
    content: `
Healthcare exports depend heavily on documents. Depending on the product and destination market, buyers may request certificate of analysis, certificate of origin, batch information, expiry details, packing list, invoice and other product-specific documents.

Documentation availability should be discussed before final quotation. Not every product requires the same evidence, and not every destination market follows the same import pathway. This is why a documentation review is an important early step.

Thorneberry positions documentation as part of the export workflow, not an afterthought. The aim is to help buyers understand what can be supported before shipment planning begins.
`,
    category: "Regulatory & Compliance",
    tags: ["COA", "COO", "quality documentation", "compliance"],
    author: { name: "Thorneberry Editorial Desk", role: "Healthcare Export Insights" },
    publishedAt: "2026-07-11",
    readingMinutes: 4,
    cover: medicalCover,
  },
  {
    slug: "incoterms-logistics-healthcare-shipments",
    title: "Incoterms and logistics planning for healthcare shipments",
    excerpt:
      "Why shipment terms, lead time, documentation and freight planning should be aligned before confirming healthcare export orders.",
    content: `
Healthcare shipment planning is more than booking freight. Buyers and suppliers need clarity on Incoterms, responsibility points, destination handling, documentation timing, packaging expectations and any temperature or handling sensitivity.

For pharmaceutical and medical supply shipments, lead time should include product arrangement, document preparation, inspection where applicable and freight coordination. Rushed shipping without document readiness can create avoidable delays.

Thorneberry helps international buyers discuss Incoterms and logistics early, so quotations reflect the real export journey instead of only product pricing.
`,
    category: "Global Trade",
    tags: ["Incoterms", "logistics", "shipment planning", "global trade"],
    author: { name: "Thorneberry Editorial Desk", role: "Healthcare Export Insights" },
    publishedAt: "2026-07-10",
    readingMinutes: 3,
    cover: healthcareCover,
  },
  {
    slug: "thorneberry-healthcare-export-focus",
    title: "Thorneberry focuses on healthcare export coordination",
    excerpt:
      "The Thorneberry website is now focused on pharmaceutical sourcing, surgical instruments, medical supplies, documentation and logistics support.",
    content: `
Thorneberry's digital presence is being refined around healthcare export coordination for international buyers. The focus is pharmaceutical sourcing, medicine export coordination, surgical instruments, medical supplies, quality documentation, logistics and importer RFQ support.

This direction removes unrelated export categories and makes the website easier for hospitals, distributors, NGOs, clinics and procurement teams to understand.

The goal is a premium, focused and buyer-friendly platform that helps serious importers start a structured sourcing conversation with Thorneberry.
`,
    category: "Company News",
    tags: ["Thorneberry", "healthcare exports", "company update"],
    author: { name: "Thorneberry Editorial Desk", role: "Company Updates" },
    publishedAt: "2026-07-09",
    readingMinutes: 2,
    cover: healthcareCover,
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelated(slug: string, limit = 3) {
  const post = getPost(slug);
  if (!post) return [];
  return blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, limit);
}
