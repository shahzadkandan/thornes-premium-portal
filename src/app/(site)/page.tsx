import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileCheck2,
  Globe2,
  HeartHandshake,
  Plane,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { getHomepage, getServices, getSiteSettings } from "../../lib/wordpress/queries";
import { pageMetadata } from "../../lib/seo";
import {
  Container,
  ContentIcon,
  MediaImage,
  PrimaryCta,
  SectionHeading,
  SecondaryCta,
} from "../../components/next/site-primitives";

export async function generateMetadata(): Promise<Metadata> {
  const [settings, homepage] = await Promise.all([getSiteSettings(), getHomepage()]);
  return pageMetadata(
    settings,
    settings.defaultSeoTitle,
    settings.defaultSeoDescription,
    homepage.hero.image,
  );
}

const trustIcons = { search: SearchCheck, file: FileCheck2, shield: ShieldCheck, plane: Plane };

export default async function HomePage() {
  const [homepage, services] = await Promise.all([getHomepage(), getServices()]);
  const selectedServices = homepage.selectedServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);

  return (
    <div className="overflow-hidden bg-[color:var(--navy-deep)]">
      <section className="relative min-h-[760px] overflow-hidden pt-32 text-white md:pt-40">
        <div className="absolute inset-0" aria-hidden="true">
          <MediaImage
            asset={homepage.hero.image}
            priority
            sizes="100vw"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--navy-deep)_0%,rgba(7,26,46,.92)_44%,rgba(7,26,46,.64)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_75%_35%,color-mix(in_oklab,var(--teal)_15%,transparent),transparent_68%)]" />
        </div>
        <Container className="relative grid items-center gap-12 pb-24 lg:grid-cols-[1.08fr_.92fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="size-1.5 rounded-full bg-[color:var(--teal)]" aria-hidden="true" />
              {homepage.hero.eyebrow}
            </div>
            <h1 className="mt-7 max-w-3xl text-balance font-display text-5xl font-semibold leading-[1.04] md:text-7xl">
              {homepage.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              {homepage.hero.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryCta href={homepage.hero.primaryCta.href}>
                {homepage.hero.primaryCta.label}
              </PrimaryCta>
              <SecondaryCta href={homepage.hero.secondaryCta.href}>
                {homepage.hero.secondaryCta.label}
              </SecondaryCta>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
              {homepage.hero.proofPoints.map((point) => (
                <div key={point.label} className="glass rounded-2xl p-4">
                  <div className="text-lg font-semibold text-white">{point.label}</div>
                  <div className="mt-1 text-xs text-white/50">{point.detail}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div
              className="absolute -inset-5 rounded-[32px] bg-[color:var(--teal)]/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-2.5 shadow-2xl">
              <MediaImage
                asset={homepage.hero.image}
                priority
                sizes="(max-width: 1024px) 50vw, 560px"
                className="h-[520px] w-full rounded-[22px] object-cover"
              />
              <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-2.5">
                {[
                  ["Product", "review"],
                  ["Document", "check"],
                  ["Shipment", "plan"],
                ].map(([label, detail]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-[color:var(--navy-deep)]/75 p-3.5 backdrop-blur-xl"
                  >
                    <div className="text-sm font-semibold text-white">{label}</div>
                    <div className="mt-1 text-xs text-white/50">{detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-10 -mt-9 pb-10">
        <Container>
          <div className="glass-strong grid gap-2 rounded-[26px] p-3 md:grid-cols-4">
            {homepage.trustItems.map((item) => {
              const Icon = trustIcons[item.iconKey as keyof typeof trustIcons] ?? SearchCheck;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.045]"
                >
                  <Icon className="size-5 text-white/75" aria-hidden="true" />
                  <h2 className="mt-3 font-semibold text-white">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-white/55">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="solutions" className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Healthcare solutions"
            title={
              <>
                Built around the buyer's{" "}
                <span className="brand-gradient-text">procurement journey</span>
              </>
            }
            description="The sourcing path connects product clarity, documentation confidence, shipment planning and a direct RFQ conversation."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {selectedServices.map((service) =>
              service ? (
                <article
                  key={service.slug}
                  className="group overflow-hidden rounded-[26px] glass transition hover:-translate-y-1 hover:bg-white/[0.06]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <MediaImage
                      asset={service.image}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] to-transparent" />
                    <div className="absolute left-5 top-5 grid size-11 place-items-center rounded-xl brand-gradient text-[color:var(--navy-deep)]">
                      <ContentIcon name={service.iconKey} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--teal)]"
                    >
                      Explore service
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ) : null,
            )}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow={homepage.aboutSummary.eyebrow}
              title={homepage.aboutSummary.title}
              description={homepage.aboutSummary.body}
            />
            <Link
              href={homepage.aboutSummary.cta.href}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)]"
            >
              {homepage.aboutSummary.cta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {homepage.valuePropositions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[color:var(--navy-deep)]/50 p-6"
              >
                <div className="grid size-10 place-items-center rounded-xl brand-gradient text-[color:var(--navy-deep)]">
                  <ContentIcon name={item.iconKey} />
                </div>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Export process"
            title={
              <>
                From requirement to <span className="brand-gradient-text">shipment planning</span>
              </>
            }
            description="Every RFQ gets clearer when product, documents, quotation context and logistics are discussed together."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {homepage.processSteps.map((step, index) => (
              <div key={step.title} className="rounded-[24px] glass p-6">
                <span className="text-sm text-white/40">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-10 rounded-[30px] border border-white/10 bg-white/[0.035] p-8 md:p-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <SectionHeading
              align="left"
              eyebrow="Who we support"
              title="A coordination desk for serious healthcare buyers."
              description="Hospitals, importers, distributors, NGOs, clinics and institutional procurement teams can bring a defined requirement to the conversation."
            />
            <div className="grid gap-3 sm:grid-cols-3">
              {homepage.buyerSegments.map((segment) => (
                <div key={segment.title} className="rounded-2xl bg-[color:var(--navy-deep)]/60 p-5">
                  <ContentIcon name={segment.iconKey} className="size-6 text-[color:var(--teal)]" />
                  <h3 className="mt-4 text-sm font-semibold text-white">{segment.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/55">{segment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <SectionHeading
                align="left"
                eyebrow="Sourcing catalogue"
                title="A focused healthcare catalogue, not a mixed export list."
                description="Explore medicine formats, surgical instruments, hospital consumables and medical wearables. Availability, supplier attribution and documents are confirmed per inquiry."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {homepage.productFormats.map((format) => (
                  <div
                    key={format}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[color:var(--navy-deep)]/60 p-4 text-sm text-white/78"
                  >
                    <span className="grid size-7 place-items-center rounded-full bg-[color:var(--teal)]/15 text-[color:var(--teal)]">
                      <Globe2 className="size-4" aria-hidden="true" />
                    </span>
                    {format}
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)]"
            >
              Browse sourcing catalogue
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 p-8 text-center md:p-14">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy)] via-[color:var(--navy-deep)] to-[color:var(--charcoal)]"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--teal)]">
                {homepage.knowledgeHub.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-5xl">
                {homepage.knowledgeHub.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/62">
                {homepage.knowledgeHub.description}
              </p>
              <Link
                href={homepage.knowledgeHub.cta.href}
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                {homepage.knowledgeHub.cta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-28 pt-12">
        <Container>
          <div className="rounded-[30px] bg-gradient-to-br from-[color:var(--teal)] to-[color:var(--cyan-accent)] p-px">
            <div className="rounded-[29px] bg-[color:var(--navy-deep)] p-8 text-center md:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--teal)]">
                {homepage.cta.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-5xl">
                {homepage.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/62">
                {homepage.cta.description}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryCta href={homepage.cta.primaryCta.href}>
                  {homepage.cta.primaryCta.label}
                </PrimaryCta>
                <SecondaryCta href={homepage.cta.secondaryCta.href}>
                  {homepage.cta.secondaryCta.label}
                </SecondaryCta>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
