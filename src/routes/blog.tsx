import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Search,
  Calendar,
  Clock,
  Tag,
  Mail,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { blogPosts, blogCategories, type BlogPost } from "@/components/site/blog-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Journal — Thorneberry" },
      {
        name: "description",
        content:
          "Industry insights, regulatory updates and stories from Thorneberry — Pakistan's global healthcare and pharmaceutical exporter.",
      },
      { property: "og:title", content: "Insights & Journal — Thorneberry" },
      {
        property: "og:description",
        content: "Industry insights and stories from a global healthcare exporter.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchesCat = !cat || p.category === cat;
      const ql = q.trim().toLowerCase();
      const matchesQ =
        !ql ||
        p.title.toLowerCase().includes(ql) ||
        p.excerpt.toLowerCase().includes(ql) ||
        p.tags.some((t) => t.toLowerCase().includes(ql));
      return matchesCat && matchesQ;
    });
  }, [q, cat]);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const latest = filtered.filter((p) => p.slug !== featured?.slug);
  const popular = [...blogPosts].slice(0, 4);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_50%_0%,color-mix(in_oklab,var(--teal)_18%,transparent),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-5">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-white">Journal</span>
          </nav>
          <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs text-[color:var(--teal)] uppercase tracking-[0.2em]">
            <Sparkles className="size-3" /> Thorneberry Journal
          </div>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="max-w-4xl text-balance font-display text-[42px] font-semibold leading-[1.08] text-white md:text-[56px] lg:text-[64px]">
              Insights from the global healthcare supply chain.
            </h1>
            <p className="max-w-md leading-relaxed text-white/65">
              Field notes, regulatory updates and buyer education on pharmaceutical exports,
              surgical sourcing and medical supply logistics.
            </p>
          </div>

          {/* Search + categories */}
          <div className="mt-10 flex flex-col lg:flex-row gap-4 lg:items-center">
            <label className="glass rounded-full flex items-center gap-3 px-5 py-3 flex-1 max-w-xl">
              <Search className="size-4 text-white/50" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles, topics or tags…"
                className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-sm"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCat(null)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition ${!cat ? "brand-gradient text-[color:var(--navy-deep)] border-transparent" : "border-white/15 text-white/70 hover:text-white"}`}
              >
                All
              </button>
              {blogCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition ${cat === c ? "brand-gradient text-[color:var(--navy-deep)] border-transparent" : "border-white/15 text-white/70 hover:text-white"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured / empty state */}
      {featured ? <FeaturedArticle post={featured} /> : <EmptyState />}

      {/* Latest grid */}
      {latest.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-white">Latest articles</h2>
              <span className="text-xs text-white/50 uppercase tracking-[0.2em]">
                {latest.length} stories
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latest.map((p, i) => (
                <ArticleCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular + Newsletter */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-2 text-[color:var(--teal)] text-xs uppercase tracking-[0.2em]">
              <BookOpen className="size-3.5" /> Most read
            </div>
            <h3 className="mt-3 font-display text-2xl md:text-3xl text-white">
              Popular this quarter
            </h3>
            {popular.length === 0 ? (
              <p className="mt-4 text-white/55 text-sm">
                Popular articles will appear here once our editorial team publishes the first
                stories.
              </p>
            ) : (
              <ul className="mt-8 divide-y divide-white/10">
                {popular.map((p, i) => (
                  <li key={p.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="flex items-center gap-6 py-5 group"
                    >
                      <span className="font-display text-2xl text-white/30 group-hover:text-[color:var(--teal)] transition w-8">
                        0{i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="text-white font-medium group-hover:text-[color:var(--teal)] transition">
                          {p.title}
                        </div>
                        <div className="text-xs text-white/50 mt-1">
                          {p.category} · {p.readingMinutes} min read
                        </div>
                      </div>
                      <ArrowRight className="size-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 glass-strong">
            <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_80%_0%,color-mix(in_oklab,var(--teal)_30%,transparent),transparent_60%)]" />
            <div className="relative">
              <div className="size-12 rounded-2xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]">
                <Mail className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-white">The Thorneberry Briefing</h3>
              <p className="mt-2 text-white/65 text-sm leading-relaxed">
                A monthly newsletter on global pharma exports, regulatory shifts and supply-chain
                intelligence. No fluff.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-3">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[color:var(--teal)]"
                />
                <button className="w-full inline-flex justify-center items-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold px-5 py-3 rounded-full">
                  Subscribe <ArrowRight className="size-4" />
                </button>
              </form>
              <p className="mt-3 text-[11px] text-white/40">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block">
          <div className="relative overflow-hidden rounded-[2rem] glass-strong">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-72 lg:h-[480px] overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full brand-gradient text-[color:var(--navy-deep)] font-semibold uppercase tracking-widest">
                    Featured
                  </span>
                  <span className="text-white/55">{post.category}</span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl text-white leading-tight group-hover:text-[color:var(--teal)] transition">
                  {post.title}
                </h2>
                <p className="mt-4 text-white/65 leading-relaxed">{post.excerpt}</p>
                <div className="mt-6 flex items-center gap-5 text-xs text-white/55">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" /> {formatDate(post.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {post.readingMinutes} min read
                  </span>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-[color:var(--teal)] font-medium">
                  Read article{" "}
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.06 }}
    >
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="group glass rounded-3xl overflow-hidden block hover:-translate-y-1 transition"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-transparent to-transparent" />
          <span className="absolute top-4 left-4 text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-full glass-strong text-white">
            {post.category}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-[11px] text-white/50">
            <span className="flex items-center gap-1">
              <Calendar className="size-3" /> {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3" /> {post.readingMinutes} min
            </span>
          </div>
          <h3 className="mt-3 font-display text-xl text-white leading-snug group-hover:text-[color:var(--teal)] transition">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-2">{post.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-[color:var(--teal)]">
            Read more <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(500px_300px_at_50%_0%,color-mix(in_oklab,var(--teal)_25%,transparent),transparent_60%)] animate-pulse-glow" />
          <div className="relative">
            <div className="mx-auto size-14 rounded-2xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]">
              <BookOpen className="size-6" />
            </div>
            <h2 className="mt-6 font-display text-3xl md:text-4xl text-white">
              The journal is launching soon.
            </h2>
            <p className="mt-4 text-white/65 max-w-xl mx-auto leading-relaxed">
              We're preparing in-depth articles on pharmaceutical exports, quality documentation,
              regulatory pathways and global healthcare trade. Subscribe to be notified when the
              first stories go live.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 max-w-md mx-auto glass rounded-full p-1.5 flex items-center"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none"
              />
              <button className="brand-gradient text-[color:var(--navy-deep)] font-semibold text-sm px-5 py-2 rounded-full inline-flex items-center gap-1.5">
                Notify Me <ArrowRight className="size-4" />
              </button>
            </form>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {blogCategories.map((c) => (
                <span
                  key={c}
                  className="text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 text-white/60 flex items-center gap-1.5"
                >
                  <Tag className="size-3" /> {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
