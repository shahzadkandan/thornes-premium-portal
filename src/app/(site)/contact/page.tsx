import type { Metadata } from "next";
import { getContactPage, getQuotePage, getSiteSettings } from "../../../lib/wordpress/queries";
import { pageMetadata } from "../../../lib/seo";
import { LeadForm } from "../../../components/next/lead-form";
import { Container, ContentIcon, DarkPageHero } from "../../../components/next/site-primitives";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const page = await getContactPage();
  return pageMetadata(
    settings,
    "Contact Thorneberry | Healthcare Export Quote",
    page.hero.description,
    undefined,
    "/contact",
  );
}

export default async function ContactPage() {
  const [page, quote] = await Promise.all([getContactPage(), getQuotePage()]);
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        current="Contact"
      />
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div className="space-y-4">
            {page.details.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4 rounded-2xl glass p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl brand-gradient text-[color:var(--navy-deep)]">
                  <ContentIcon name={detail.iconKey} />
                </span>
                <div>
                  <h2 className="font-semibold text-white">{detail.label}</h2>
                  <p className="mt-1 text-sm leading-6 text-white/60">{detail.value}</p>
                </div>
              </div>
            ))}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Thorneberry location map"
                src={page.mapEmbedUrl}
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--teal)]">
                {page.formTitle}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/60">{page.formDescription}</p>
            </div>
            <LeadForm fields={quote.fields} endpoint="/api/contact" submitLabel="Submit inquiry" />
          </div>
        </Container>
      </section>
    </div>
  );
}
