import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { services } from "@/components/site/services-data";
import hero from "@/assets/service-medicine.jpg";

export const Route = createFileRoute("/medicine-exports")({
  head: () => ({
    meta: [
      { title: "Medicine Export Coordination - Thorneberry" },
      {
        name: "description",
        content:
          "Pharmaceutical sourcing, medicine export coordination and healthcare documentation support for global buyers.",
      },
      { property: "og:title", content: "Medicine Export Coordination - Thorneberry" },
      {
        property: "og:description",
        content: "Pharmaceutical sourcing and export coordination from Pakistan.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Medicine Export Coordination"
      title="Pharmaceutical Sourcing for Global Healthcare Buyers"
      intro="Thorneberry coordinates sourcing and export support for licensed pharmaceutical formulations, generics and selected healthcare products from Pakistan, with documentation and logistics aligned to buyer and destination requirements."
      heroImage={hero}
      items={services.filter((s) =>
        ["medicine-exports", "medical-products", "medical-wearables"].includes(s.slug),
      )}
      faqs={[
        {
          q: "Which therapeutic categories do you support?",
          a: "Requests may include antibiotics, analgesics, cardiovascular, dermatology, vitamins, OTC ranges and other categories depending on supplier availability and destination requirements.",
        },
        {
          q: "Do you handle registration documentation?",
          a: "We coordinate available supplier documents such as CoA, CoO, GMP certificates, free-sale certificates and registration support files where applicable.",
        },
        {
          q: "What is the typical lead time?",
          a: "Lead time depends on stock, supplier readiness, documentation and destination route. Indicative timing is shared after RFQ review.",
        },
        {
          q: "Can you support private-label inquiries?",
          a: "Private-label or branded supply requests can be reviewed case by case with suitable Pakistani suppliers and documentation requirements.",
        },
      ]}
    />
  ),
});
