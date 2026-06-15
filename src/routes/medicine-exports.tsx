import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { services } from "@/components/site/services-data";
import hero from "@/assets/service-medicine.jpg";

export const Route = createFileRoute("/medicine-exports")({
  head: () => ({
    meta: [
      { title: "Medicine Exports — Thorneberry" },
      { name: "description", content: "Pharmaceutical formulations, generics and APIs exported worldwide under GMP and GDP compliance." },
      { property: "og:title", content: "Medicine Exports — Thorneberry" },
      { property: "og:description", content: "Pharmaceutical formulations, generics and APIs exported worldwide under GMP compliance." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Medicine Exports"
      title="Pharmaceutical Exports for Global Healthcare"
      intro="Thorneberry exports a wide portfolio of licensed pharmaceutical formulations, generics and active pharmaceutical ingredients (APIs) — manufactured in GMP-certified facilities across Pakistan and shipped under strict GDP cold-chain compliance."
      heroImage={hero}
      items={services.filter(s => ["medicine-exports","medical-products","medical-wearables"].includes(s.slug))}
      faqs={[
        { q: "Which therapeutic categories do you supply?", a: "Antibiotics, analgesics, cardiovascular, dermatology, oncology supportive care, vitamins and OTC ranges, among others." },
        { q: "Do you handle registration documentation?", a: "Yes — we provide CoA, CoO, GMP certificates, free-sale certificates and registration dossiers as required by your regulatory authority." },
        { q: "What is the typical lead time?", a: "Most stock SKUs ship within 2–4 weeks of confirmed order; custom orders depend on batch scheduling." },
        { q: "Can you do private label?", a: "Yes — we work with brand owners and distributors on private-label and contract-manufacturing programs." },
      ]}
    />
  ),
});