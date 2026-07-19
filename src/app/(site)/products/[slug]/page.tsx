import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getProduct, getProducts, getSiteSettings } from "../../../../lib/wordpress/queries";
import { pageMetadata } from "../../../../lib/seo";
import {
  BulletList,
  Container,
  DarkPageHero,
  MediaImage,
  PrimaryCta,
  SectionHeading,
} from "../../../../components/next/site-primitives";

export async function generateStaticParams() {
  return (await getProducts()).map((product) => ({ slug: product.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [settings, product] = await Promise.all([getSiteSettings(), getProduct(slug)]);
  return product
    ? pageMetadata(
        settings,
        product.seo.title,
        product.seo.description,
        product.image,
        `/products/${slug}`,
      )
    : {};
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow={product.category}
        title={product.title}
        description={product.description}
        current="Sourcing Catalogue"
      />
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-[28px] border border-white/10">
            <MediaImage
              asset={product.image}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm leading-7 text-white/65">{product.shortDescription}</p>
            <div className="mt-8">
              <SectionHeading
                align="left"
                eyebrow="Buyer specification"
                title="Start with the details that shape a useful quote."
              />
            </div>
            <div className="mt-6">
              <BulletList items={product.specifications} />
            </div>
            <div className="mt-8">
              <PrimaryCta href={product.inquiryCta.href}>{product.inquiryCta.label}</PrimaryCta>
            </div>
          </div>
        </Container>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Documents"
              title="Evidence is reviewed per product and destination."
              description={product.supplierNote}
            />
            <div className="mt-6">
              <BulletList items={product.documents} />
            </div>
          </div>
          <div className="rounded-[28px] glass p-7">
            <h2 className="font-display text-2xl text-white">Available evidence areas</h2>
            <div className="mt-6 space-y-3">
              {product.certifications.length ? (
                product.certifications.map((certification) => (
                  <div
                    key={certification}
                    className="flex items-center gap-3 text-sm text-white/72"
                  >
                    <ArrowRight className="size-4 text-[color:var(--teal)]" aria-hidden="true" />
                    {certification}
                  </div>
                ))
              ) : (
                <p className="text-sm leading-7 text-white/55">
                  No certifications are presented as verified for this product area yet. Share your
                  destination requirements so available evidence can be reviewed.
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-center md:p-12">
            <h2 className="font-display text-3xl text-white">
              Need a related product or custom list?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Send the specification, quantity and destination. The catalogue is a starting point
              for a structured buyer conversation.
            </p>
            <div className="mt-7">
              <PrimaryCta href="/request-a-quote">Request an RFQ</PrimaryCta>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
