import type { Metadata } from "next";
import { getSiteSettings } from "../../../lib/wordpress/queries";
import { pageMetadata } from "../../../lib/seo";
import { Container, DarkPageHero } from "../../../components/next/site-primitives";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return pageMetadata(
    settings,
    "Terms and Conditions | Thorneberry",
    "General terms for using the Thorneberry healthcare sourcing and export coordination website.",
    undefined,
    "/terms",
  );
}

export default async function TermsPage() {
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow="Terms"
        title="Terms and Conditions"
        description="General information for visitors and healthcare procurement enquiries."
        current="Terms"
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl space-y-8 text-sm leading-8 text-white/70">
          <div>
            <h2 className="font-display text-2xl text-white">Website information</h2>
            <p className="mt-3">
              This website provides information to help healthcare buyers structure a sourcing or
              export enquiry. A website listing is not a quotation, availability confirmation or
              regulatory approval.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-white">Product enquiries</h2>
            <p className="mt-3">
              Product composition and pack-size information is reviewed against the available source
              record. Supplier attribution, documents, pricing, availability, destination
              requirements and shipment terms are confirmed separately for each enquiry.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-white">Contact</h2>
            <p className="mt-3">
              Questions about an enquiry can be sent through the contact form or by email to
              info@thorneberry.com.pk.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
