import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProducts, getSiteSettings } from "../../../lib/wordpress/queries";
import { pageMetadata } from "../../../lib/seo";
import {
  Container,
  DarkPageHero,
  MediaImage,
  SectionHeading,
} from "../../../components/next/site-primitives";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return pageMetadata(
    settings,
    "Sourcing Catalogue | Thorneberry",
    "A focused healthcare sourcing catalogue covering medicine formats, surgical instruments, medical supplies and wearables.",
    undefined,
    "/products",
  );
}

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow="Sourcing Catalogue"
        title="A focused catalogue for healthcare procurement."
        description="Browse the product architecture by category. Final availability, supplier attribution, documentation and lead time are confirmed per inquiry."
        current="Sourcing Catalogue"
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="space-y-16">
            {categories.map((category) => (
              <section key={category} aria-labelledby={`category-${category}`}>
                <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--teal)]">
                      Product category
                    </p>
                    <h2
                      id={`category-${category}`}
                      className="mt-2 font-display text-3xl text-white"
                    >
                      {category}
                    </h2>
                  </div>
                  <Link
                    href={`/request-a-quote?category=${encodeURIComponent(category)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)]"
                  >
                    Request this category
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {products
                    .filter((product) => product.category === category)
                    .map((product) => (
                      <article key={product.slug} className="overflow-hidden rounded-[24px] glass">
                        <MediaImage
                          asset={product.image}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="h-48 w-full object-cover"
                        />
                        <div className="p-6">
                          <h3 className="font-display text-2xl text-white">{product.title}</h3>
                          <p className="mt-3 text-sm leading-6 text-white/60">
                            {product.shortDescription}
                          </p>
                          <Link
                            href={`/products/${product.slug}`}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)]"
                          >
                            View product area
                            <ArrowRight className="size-4" aria-hidden="true" />
                          </Link>
                        </div>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-28">
        <Container>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-center md:p-12">
            <SectionHeading
              eyebrow="Buyer note"
              title="Supplier and manufacturer information is confirmed per inquiry."
              description="The catalogue helps you structure a requirement. It does not imply universal stock, certification, manufacturing ownership or regulatory approval."
            />
            <Link
              href="/request-a-quote"
              className="mt-7 inline-flex items-center gap-2 rounded-full brand-gradient px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)]"
            >
              Start an RFQ
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
