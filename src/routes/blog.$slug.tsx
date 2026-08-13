import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  Facebook,
  Linkedin,
  Link2,
  Mail,
  Tag,
  Twitter,
  User,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getPost, getRelated, type BlogPost } from "@/components/site/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelated(params.slug) };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    return {
      meta: [
        { title: p ? `${p.title} — Thorneberry Journal` : "Article — Thorneberry" },
        { name: "description", content: p?.excerpt ?? "Thorneberry Journal article." },
        { property: "og:title", content: p?.title ?? "Thorneberry Journal" },
        { property: "og:description", content: p?.excerpt ?? "" },
        { property: "og:type", content: "article" },
        ...(p?.cover
          ? [
              { property: "og:image", content: p.cover },
              { name: "twitter:image", content: p.cover },
            ]
          : []),
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs text-[color:var(--teal)] uppercase tracking-[0.2em]">
            404 — Article
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl text-white">Article not found</h1>
          <p className="mt-4 text-white/65">
            This story isn't published yet. Browse the journal for available articles.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold px-6 py-3 rounded-full"
          >
            <ArrowLeft className="size-4" /> Back to Journal
          </Link>
        </div>
      </section>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <section className="pt-40 pb-24 text-center text-white">
        <h1 className="font-display text-3xl">Something went wrong loading this article.</h1>
        <button
          onClick={() => reset()}
          className="mt-6 brand-gradient text-[color:var(--navy-deep)] font-semibold px-6 py-3 rounded-full"
        >
          Retry
        </button>
      </section>
    </SiteLayout>
  ),
  component: ArticlePage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ArticlePage() {
  const { post, related } = Route.useLoaderData();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(100, (h.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <SiteLayout>
      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-white/5">
        <div
          className="h-full brand-gradient transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.cover} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--navy-deep)]/80 via-[color:var(--navy-deep)]/95 to-[color:var(--navy-deep)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6">
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-5">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <Link to="/blog" className="hover:text-white">
              Journal
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-white truncate">{post.title}</span>
          </nav>
          <span className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full brand-gradient text-[color:var(--navy-deep)] font-semibold">
            {post.category}
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-6xl text-white leading-[1.05]">
            {post.title}
          </h1>
          <p className="mt-5 text-white/70 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/65">
            <span className="flex items-center gap-2">
              <User className="size-4 text-[color:var(--teal)]" /> {post.author.name}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="size-4 text-[color:var(--teal)]" />{" "}
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-4 text-[color:var(--teal)]" /> {post.readingMinutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl overflow-hidden glass-strong">
            <img src={post.cover} alt={post.title} className="w-full h-[420px] object-cover" />
          </div>
        </div>
      </section>

      {/* Body + sidebar */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_280px] gap-12">
          <article
            className="prose-article text-white/80 leading-relaxed text-[17px] space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--teal)]">
                Share
              </div>
              <div className="mt-4 flex gap-2">
                {[Twitter, Linkedin, Facebook, Link2].map((Icon, i) => (
                  <button
                    key={i}
                    className="grid place-items-center size-10 rounded-full glass-strong text-white/80 hover:text-white hover:bg-white/10 transition"
                    aria-label="Share"
                  >
                    <Icon className="size-4" />
                  </button>
                ))}
              </div>
            </div>
            {post.tags.length > 0 && (
              <div className="glass rounded-2xl p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--teal)]">
                  Tags
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((t: string) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/70 flex items-center gap-1"
                    >
                      <Tag className="size-3" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="glass-strong rounded-2xl p-6">
              <div className="size-10 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]">
                <Mail className="size-4" />
              </div>
              <h4 className="mt-4 text-white font-medium">Subscribe to the Briefing</h4>
              <p className="mt-1.5 text-xs text-white/60">
                Monthly journal updates, straight to your inbox.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex flex-col gap-2">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder:text-white/40 outline-none focus:border-[color:var(--teal)]"
                />
                <button className="brand-gradient text-[color:var(--navy-deep)] font-semibold text-xs px-4 py-2.5 rounded-full">
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      {/* Author */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-strong rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
            <div className="size-16 rounded-2xl brand-gradient grid place-items-center text-[color:var(--navy-deep)] text-2xl font-bold">
              {post.author.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--teal)]">
                Written by
              </div>
              <h3 className="mt-1 font-display text-2xl text-white">{post.author.name}</h3>
              <p className="text-white/55 text-sm">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl text-white mb-8">Related articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p: BlogPost) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group glass rounded-3xl overflow-hidden hover:-translate-y-1 transition"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-widest text-[color:var(--teal)]">
                      {p.category}
                    </div>
                    <h3 className="mt-2 font-display text-lg text-white group-hover:text-[color:var(--teal)] transition">
                      {p.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/70">
                      Read <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
