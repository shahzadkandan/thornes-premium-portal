"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Insight } from "../../lib/wordpress/types";

function sourceOf(src: Insight["cover"]["src"]) {
  return typeof src === "string" ? src : src.src;
}

export function InsightsBrowser({ insights }: { insights: Insight[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(insights.map((insight) => insight.category))];
  const filtered = useMemo(
    () =>
      insights.filter((insight) => {
        const haystack =
          `${insight.title} ${insight.excerpt} ${insight.tags.join(" ")}`.toLowerCase();
        return (
          (category === "All" || insight.category === category) &&
          haystack.includes(query.toLowerCase().trim())
        );
      }),
    [category, insights, query],
  );
  const featured = filtered.find((insight) => insight.featured) ?? filtered[0];
  const latest = filtered.filter((insight) => insight.slug !== featured?.slug);

  return (
    <>
      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center">
        <label className="glass flex max-w-xl flex-1 items-center gap-3 rounded-full px-5 py-3">
          <Search className="size-4 text-white/50" aria-hidden="true" />
          <span className="sr-only">Search insights</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles, topics or tags"
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
          />
        </label>
        <div className="flex flex-wrap gap-2" aria-label="Insight categories">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full border px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${category === item ? "border-transparent brand-gradient text-[color:var(--navy-deep)]" : "border-white/15 text-white/65 hover:text-white"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {featured ? (
        <Link
          href={`/insights/${featured.slug}`}
          className="group mt-12 grid overflow-hidden rounded-[28px] glass-strong lg:grid-cols-2"
        >
          <div className="relative h-64 overflow-hidden lg:h-[420px]">
            <Image
              src={featured.cover.src}
              alt={featured.cover.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized={
                typeof featured.cover.src === "string" && featured.cover.src.startsWith("http")
              }
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="w-fit rounded-full brand-gradient px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--navy-deep)]">
              Featured · {featured.category}
            </span>
            <h2 className="mt-5 font-display text-3xl leading-tight text-white md:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 leading-7 text-white/62">{featured.excerpt}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)]">
              Read article
              <ArrowRight
                className="size-4 transition group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      ) : (
        <div className="mt-12 rounded-[28px] glass p-12 text-center text-white/65">
          No insights match this search.
        </div>
      )}
      <div className="mt-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-white md:text-4xl">Latest articles</h2>
          <span className="text-xs uppercase tracking-[0.16em] text-white/40">
            {latest.length} stories
          </span>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="group overflow-hidden rounded-[24px] glass transition hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={insight.cover.src}
                  alt={insight.cover.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized={
                    typeof insight.cover.src === "string" && insight.cover.src.startsWith("http")
                  }
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--teal)]">
                  {insight.category}
                </p>
                <h3 className="mt-3 font-display text-xl leading-snug text-white">
                  {insight.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/58">
                  {insight.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)]">
                  Read more
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
