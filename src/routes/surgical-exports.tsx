import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { services } from "@/components/site/services-data";
import hero from "@/assets/service-surgical.jpg";

export const Route = createFileRoute("/surgical-exports")({
  head: () => ({
    meta: [
      { title: "Surgical Instrument Sourcing - Thorneberry" },
      {
        name: "description",
        content:
          "Surgical instrument sourcing and export coordination from Pakistan for hospitals, distributors and import companies.",
      },
      { property: "og:title", content: "Surgical Instrument Sourcing - Thorneberry" },
      {
        property: "og:description",
        content: "Surgical instrument sourcing and export support from Pakistan.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Surgical Instruments"
      title="Surgical Instrument Sourcing from Pakistan"
      intro="From general surgery to dental, orthopaedic and ENT requirements, Thorneberry helps buyers source surgical instruments from Pakistan with supplier documentation, inspection options and export coordination support."
      heroImage={hero}
      items={services.filter((s) =>
        ["surgical-exports", "medical-products", "medical-wearables"].includes(s.slug),
      )}
      faqs={[
        {
          q: "What instrument categories can be requested?",
          a: "General surgery, dental, orthopaedic, ENT, ophthalmic, gynaecology, plastic surgery and veterinary instruments can be reviewed with suitable suppliers.",
        },
        {
          q: "Can documentation be provided?",
          a: "Available supplier documentation, quality certificates and technical files can be coordinated according to product and destination requirements.",
        },
        {
          q: "Do you support OEM and branding?",
          a: "Branding, laser engraving, packaging and custom sets can be discussed where suppliers support the requested specifications and MOQs.",
        },
      ]}
    />
  ),
});
