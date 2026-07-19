import type { Metadata } from "next";
import { getQuotePage, getSiteSettings } from "../../../lib/wordpress/queries";
import { pageMetadata } from "../../../lib/seo";
import { LeadForm } from "../../../components/next/lead-form";
import { Container, DarkPageHero, SectionHeading } from "../../../components/next/site-primitives";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const page = await getQuotePage();
  return pageMetadata(
    settings,
    "Request an Export Quote | Thorneberry",
    page.hero.description,
    undefined,
    "/request-a-quote",
  );
}

export default async function RequestQuotePage() {
  const page = await getQuotePage();
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        current="Request an Export Quote"
      />
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <LeadForm fields={page.fields} endpoint="/api/rfq" submitLabel="Send RFQ" />
          </div>
          <aside className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="What happens next"
              title="A practical export conversation."
              description="Your requirement gives the sourcing desk the context to review product fit, documents, quotation questions and shipment planning."
            />
            <div className="mt-8 space-y-3">
              {page.process.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <span className="text-sm text-[color:var(--teal)]">0{index + 1}</span>
                  <div>
                    <h2 className="font-semibold text-white">{step.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/58">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </Container>
      </section>
      <section className="border-t border-white/10 py-20">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="RFQ FAQs" title="Before you send your requirement." />
          <div className="mt-10 space-y-3">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl glass p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">
                  {faq.question}
                  <span className="text-[color:var(--teal)] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
