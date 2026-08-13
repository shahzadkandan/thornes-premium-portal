import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";
import type { Service } from "../../lib/wordpress/types";
import {
  BulletList,
  Container,
  ContentIcon,
  DarkPageHero,
  MediaImage,
  PrimaryCta,
  SectionHeading,
} from "./site-primitives";

export function ServiceDetailView({ service }: { service: Service }) {
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow={service.title}
        title={service.title}
        description={service.description}
        current="Healthcare Solutions"
      />
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div className="overflow-hidden rounded-[28px] border border-white/10">
            <MediaImage
              asset={service.image}
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="h-[360px] w-full object-cover md:h-[480px]"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--teal)]">
              What this covers
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
              A clearer sourcing path for {service.title.toLowerCase()}.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/65">{service.shortDescription}</p>
            <div className="mt-8">
              <BulletList items={service.benefits} />
            </div>
            <PrimaryCta href={service.cta.href}>{service.cta.label}</PrimaryCta>
          </div>
        </Container>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025] py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="How the conversation works"
            title="From product requirement to a documented next step."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {service.processSteps.map((step, index) => (
              <div key={step.title} className="rounded-[24px] glass p-6">
                <span className="text-sm text-white/40">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Quality & compliance"
              title="Documents are reviewed as part of the export workflow."
              description="The exact document set depends on product, supplier, order status and destination country. These are discussion points, not universal guarantees."
            />
          </div>
          <div className="rounded-[28px] glass-strong p-7 md:p-9">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl brand-gradient text-[color:var(--navy-deep)]">
                <FileCheck2 className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-display text-2xl text-white">Possible document areas</h2>
            </div>
            <div className="mt-7">
              <BulletList items={service.documents} />
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-28">
        <Container>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-center md:p-12">
            <ContentIcon name="handshake" className="mx-auto size-9 text-[color:var(--teal)]" />
            <h2 className="mt-5 font-display text-3xl font-semibold text-white">
              Ready to discuss {service.title.toLowerCase()}?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/60">
              Share your product requirement, quantity, destination and timeline. Thorneberry will
              help structure the next conversation.
            </p>
            <Link
              href="/request-a-quote"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)]"
            >
              Request an RFQ
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
