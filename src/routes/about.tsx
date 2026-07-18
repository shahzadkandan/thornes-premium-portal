import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Target, Eye, Heart, ShieldCheck, Globe2, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Thorneberry - Pakistan Healthcare Export Coordination" },
      {
        name: "description",
        content:
          "Thorneberry is a Pakistan-based healthcare sourcing, pharmaceutical export, procurement, documentation and logistics coordination partner for global buyers.",
      },
      { property: "og:title", content: "About Thorneberry" },
      {
        property: "og:description",
        content: "A Pakistan-based healthcare sourcing and export coordination partner.",
      },
      { property: "og:image", content: about1 },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <nav className="flex items-center gap-2 text-xs text-white/55 mb-5">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="size-3" /> <span className="text-white">About</span>
            </nav>
            <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs text-[color:var(--teal)] uppercase tracking-[0.2em]">
              About Thorneberry
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-6xl text-white leading-tight">
              A trusted healthcare sourcing bridge between Pakistan and the{" "}
              <span className="brand-gradient-text">world</span>.
            </h1>
            <p className="mt-5 text-white/70 leading-relaxed">
              Thorneberry supports international buyers with pharmaceutical sourcing, surgical
              instruments, medical supplies, documentation coordination and global logistics
              assistance from Pakistan. We focus on verified supply relationships, transparent
              communication and export-ready documentation.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Every shipment workflow is built around compliance, traceability and timely
              coordination, with supplier documentation and third-party inspections arranged where
              required.
            </p>
          </div>
          <div className="relative">
            <img
              src={about1}
              alt=""
              className="rounded-3xl w-full h-[520px] object-cover glow"
              loading="lazy"
            />
            <img
              src={about2}
              alt=""
              className="absolute -bottom-8 -left-8 w-2/3 h-48 object-cover rounded-2xl glass-strong border-4 border-[color:var(--navy-deep)]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-5">
          {[
            {
              Icon: Target,
              t: "Mission",
              d: "Help global buyers source dependable Pakistani healthcare products with clear documentation and coordinated logistics.",
            },
            {
              Icon: Eye,
              t: "Vision",
              d: "To be a trusted Pakistan-based healthcare export coordination partner for importers, distributors and institutions.",
            },
            {
              Icon: Heart,
              t: "Values",
              d: "Integrity, quality, transparency and long-term partnership in every transaction.",
            },
          ].map((v) => (
            <div key={v.t} className="glass rounded-3xl p-7">
              <div className="size-12 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]">
                <v.Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-white">{v.t}</h3>
              <p className="mt-3 text-white/65 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl md:text-4xl text-white text-center">
            What sets us apart
          </h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {[
              {
                Icon: ShieldCheck,
                t: "Quality first",
                d: "Compliance and traceability built into every sourcing workflow.",
              },
              {
                Icon: Globe2,
                t: "Global support",
                d: "Export coordination for international buyers across healthcare corridors.",
              },
              {
                Icon: Award,
                t: "Partner-first",
                d: "Clear communication, documentation readiness and long-term account support.",
              },
            ].map((v) => (
              <div key={v.t} className="glass rounded-2xl p-6">
                <v.Icon className="size-7 text-[color:var(--teal)]" />
                <div className="mt-4 text-white font-medium">{v.t}</div>
                <div className="text-sm text-white/60 mt-1.5 leading-relaxed">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
