import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { services } from "@/components/site/services-data";
import hero from "@/assets/service-surgical.jpg";

export const Route = createFileRoute("/surgical-exports")({
  head: () => ({
    meta: [
      { title: "Surgical Exports — Thorneberry" },
      { name: "description", content: "Precision stainless-steel surgical instruments crafted in Sialkot, exported worldwide to ISO 13485 standards." },
      { property: "og:title", content: "Surgical Exports — Thorneberry" },
      { property: "og:description", content: "Precision surgical instruments from Sialkot, Pakistan." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Surgical Exports"
      title="Precision Surgical Instruments from Sialkot"
      intro="From general surgery to dental, orthopaedic and ENT specialisations — our surgical instruments are crafted by Sialkot's master manufacturers and verified to ISO 13485 standards, ready for hospitals and distributors worldwide."
      heroImage={hero}
      items={services.filter(s => ["surgical-exports","medical-products","medical-wearables"].includes(s.slug))}
      faqs={[
        { q: "What instrument categories do you offer?", a: "General surgery, dental, orthopaedic, ENT, ophthalmic, gynaecology, plastic surgery and veterinary instruments — plus custom-spec items." },
        { q: "Are your instruments CE-marked?", a: "Yes — applicable instruments ship with CE marking and full technical files; FDA-registered options are available on request." },
        { q: "Do you offer OEM and branding?", a: "Yes — laser engraving, custom packaging and branded sets are available from low MOQs." },
      ]}
    />
  ),
});