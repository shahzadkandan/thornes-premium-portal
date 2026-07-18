import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { services } from "@/components/site/services-data";
import hero from "@/assets/service-medical.jpg";

export const Route = createFileRoute("/medical-exports")({
  head: () => ({
    meta: [
      { title: "Medical Exports — Thorneberry" },
      {
        name: "description",
        content:
          "Medical wearables, disposables, diagnostics and consumables exported worldwide from Pakistan.",
      },
      { property: "og:title", content: "Medical Exports — Thorneberry" },
      {
        property: "og:description",
        content: "Wearables, disposables and diagnostics for global healthcare.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Medical Exports"
      title="Medical Wearables, Disposables & Diagnostics"
      intro="A modern range of connected health wearables, hospital disposables, diagnostic kits and clinical consumables for hospitals, clinics, NGOs and humanitarian programs across the world."
      heroImage={hero}
      items={services.filter((s) =>
        ["medical-wearables", "medical-products", "surgical-exports"].includes(s.slug),
      )}
      faqs={[
        {
          q: "Which wearables do you offer?",
          a: "Pulse oximeters, continuous glucose patches, ECG monitors, smart wrist devices and remote-patient-monitoring kits.",
        },
        {
          q: "Do you supply for humanitarian programs?",
          a: "Yes — we work with NGOs and UN-procurement-listed partners with flexible MOQs and rapid documentation.",
        },
      ]}
    />
  ),
});
