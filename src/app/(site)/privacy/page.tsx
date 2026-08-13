import type { Metadata } from "next";
import { getSiteSettings } from "../../../lib/wordpress/queries";
import { pageMetadata } from "../../../lib/seo";
import { Container, DarkPageHero } from "../../../components/next/site-primitives";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return pageMetadata(
    settings,
    "Privacy Policy | Thorneberry",
    "How Thorneberry handles information submitted through healthcare sourcing and RFQ enquiries.",
    undefined,
    "/privacy",
  );
}

export default async function PrivacyPage() {
  const settings = await getSiteSettings();
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="Information for people who contact Thorneberry about healthcare sourcing and export coordination."
        current="Privacy"
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl space-y-8 text-sm leading-8 text-white/70">
          <div>
            <h2 className="font-display text-2xl text-white">Information you submit</h2>
            <p className="mt-3">
              When you use a contact or RFQ form, you may submit your name, organisation, email,
              phone number, country and product requirement. Please do not submit patient records,
              clinical data or other sensitive health information.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-white">How it is used</h2>
            <p className="mt-3">
              Thorneberry uses the information you choose to provide to respond to your enquiry and
              coordinate the healthcare sourcing or export discussion you requested.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-white">Contact</h2>
            <p className="mt-3">
              Privacy questions can be sent to{" "}
              <a className="text-[color:var(--teal)]" href={`mailto:${settings.email}`}>
                {settings.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
