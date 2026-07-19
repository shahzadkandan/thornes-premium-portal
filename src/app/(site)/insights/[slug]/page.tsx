import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getInsight, getInsights, getSiteSettings } from "../../../../lib/wordpress/queries";
import { pageMetadata } from "../../../../lib/seo";
import { Container, DarkPageHero, MediaImage } from "../../../../components/next/site-primitives";

export async function generateStaticParams() {
  return (await getInsights()).map((insight) => ({ slug: insight.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [settings, insight] = await Promise.all([getSiteSettings(), getInsight(slug)]);
  return insight
    ? pageMetadata(
        settings,
        insight.seo.title,
        insight.seo.description,
        insight.cover,
        `/insights/${slug}`,
      )
    : {};
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) notFound();
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow={insight.category}
        title={insight.title}
        description={insight.excerpt}
        current="Knowledge Hub"
      />
      <article className="py-20 md:py-28">
        <Container className="max-w-4xl">
          <MediaImage
            asset={insight.cover}
            sizes="(max-width: 896px) 100vw, 896px"
            className="h-[260px] w-full rounded-[28px] object-cover md:h-[420px]"
          />
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-white/50">
            <span>
              {new Date(insight.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{insight.readingMinutes} min read</span>
            <span>·</span>
            <span>{insight.author.name}</span>
          </div>
          <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-p:text-white/70 prose-p:leading-8 prose-a:text-[color:var(--teal)]">
            {insight.content.split(/\n\n+/).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-2">
            {insight.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-7">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)]"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Knowledge Hub
            </Link>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)]"
            >
              Discuss a requirement
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </article>
    </div>
  );
}
