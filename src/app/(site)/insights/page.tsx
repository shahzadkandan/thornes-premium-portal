import type { Metadata } from "next";
import { getInsights, getSiteSettings } from "../../../lib/wordpress/queries";
import { pageMetadata } from "../../../lib/seo";
import { InsightsBrowser } from "../../../components/next/insights-browser";
import { Container, DarkPageHero } from "../../../components/next/site-primitives";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return pageMetadata(
    settings,
    "Knowledge Hub | Thorneberry",
    "Buyer education, regulatory context and practical guidance on pharmaceutical exports, surgical sourcing and healthcare logistics.",
    undefined,
    "/insights",
  );
}

export default async function InsightsPage() {
  const insights = await getInsights();
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow="Thorneberry Knowledge Hub"
        title="Insights from the global healthcare supply chain."
        description="Field notes, regulatory context and buyer education on pharmaceutical exports, surgical sourcing, medical supplies and shipment planning."
        current="Knowledge Hub"
      />
      <section className="pb-28">
        <Container>
          <InsightsBrowser insights={insights} />
        </Container>
      </section>
    </div>
  );
}
