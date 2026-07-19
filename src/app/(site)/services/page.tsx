import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServices, getSiteSettings } from "../../../lib/wordpress/queries";
import { pageMetadata } from "../../../lib/seo";
import {
  Container,
  ContentIcon,
  DarkPageHero,
  MediaImage,
  SectionHeading,
} from "../../../components/next/site-primitives";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return pageMetadata(
    settings,
    "Healthcare Solutions | Thorneberry",
    "Pharmaceutical sourcing, surgical instruments, medical supplies, documentation and logistics coordination for international buyers.",
    undefined,
    "/services",
  );
}

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow="Healthcare Solutions"
        title="A focused healthcare sourcing and export-coordination platform."
        description="Choose the capability that matches your buyer journey, then share the product, quantity, destination and document context needed for a useful conversation."
        current="Healthcare Solutions"
      />
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Support from product requirement to shipment planning."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
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
                </div>
                <div className="p-6">
                  <div className="grid size-10 place-items-center rounded-xl brand-gradient text-[color:var(--navy-deep)]">
                    <ContentIcon name={service.iconKey} />
                  </div>
                  <h2 className="mt-4 font-display text-2xl text-white">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/60">{service.shortDescription}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)]"
                  >
                    View details
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
