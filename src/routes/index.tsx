import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  HeartHandshake,
  MapPin,
  PackageCheck,
  Phone,
  Plane,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
} from "lucide-react";
import heroPhoto from "@/assets/thorneberry-healthcare-export-hero.webp";
import pharmaVisual from "@/assets/hero-pharma-export.png";
import { SiteLayout } from "@/components/site/SiteLayout";
import { services } from "@/components/site/services-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thorneberry - Healthcare Sourcing & Pharmaceutical Export Coordination" },
      {
        name: "description",
        content:
          "Pakistan-based healthcare sourcing, pharmaceutical export, procurement, documentation, regulatory coordination and logistics support for international buyers.",
      },
      {
        property: "og:title",
        content: "Thorneberry - Healthcare Sourcing & Pharmaceutical Export Coordination",
      },
      {
        property: "og:description",
        content:
          "A premium healthcare sourcing and export coordination partner from Pakistan for importers, distributors, hospitals and NGOs.",
      },
    ],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustIndicators />
      <Solutions />
      <Portfolio />
      <SourcingNetwork />
      <QualityDocs />
      <ExportProcess />
      <Logistics />
      <WhyThorneberry />
      <RFQ />
      <AssistantPreview />
      <KnowledgeHub />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-[136px] pb-24 flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroPhoto}
          alt=""
          className="h-full w-full object-cover opacity-35"
          width={1600}
          height={1000}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--navy-deep)_0%,rgba(7,26,46,.9)_43%,rgba(7,26,46,.66)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(880px_460px_at_76%_36%,color-mix(in_oklab,var(--teal)_16%,transparent),transparent_68%)]" />
      </div>
      <RouteNetwork />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.14fr_.86fr]">
        <div className="max-w-[740px]">
          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/68 backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-[color:var(--teal)] shadow-[0_0_14px_color-mix(in_oklab,var(--teal)_65%,transparent)]" />
            Pakistan-based healthcare sourcing desk
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.78 }}
            className="mt-7 max-w-[740px] text-balance font-display text-[42px] font-semibold leading-[1.06] text-white sm:text-[52px] lg:text-[56px]"
          >
            Healthcare sourcing & <span className="block">pharma export coordination</span>{" "}
            <span className="block text-white/86">from Pakistan.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.72 }}
            className="mt-7 max-w-[620px] text-[17px] leading-8 text-white/66"
          >
            Thorneberry supports international buyers with pharmaceutical sourcing, medicine export
            coordination, quality documentation, regulatory coordination and global shipment
            planning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.72 }}
            className="mt-10 flex flex-wrap gap-3.5"
          >
            <Link
              to="/contact"
              className="premium-button inline-flex items-center gap-2 rounded-full brand-gradient px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)]"
            >
              Request Export Quote <ArrowRight className="size-4" />
            </Link>
            <a
              href="#solutions"
              className="premium-button-secondary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white"
            >
              Explore Healthcare Solutions
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.72 }}
            className="mt-14 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4"
          >
            {[
              ["RFQ", "structured intake"],
              ["Docs", "destination-aware"],
              ["Incoterms", "quote clarity"],
              ["Logistics", "shipment planning"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="glass rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.065]"
              >
                <div className="text-xl font-semibold text-white">{k}</div>
                <div className="mt-1.5 text-xs text-white/52">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.9 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-5 rounded-[32px] bg-[color:var(--teal)]/8 blur-3xl" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.10] bg-white/[0.035] p-2.5 shadow-[0_30px_90px_-48px_rgba(0,0,0,.95)] backdrop-blur-xl">
            <img
              src={pharmaVisual}
              alt="Premium pharmaceutical sourcing and export coordination visual"
              className="h-[520px] w-full rounded-[22px] object-cover object-[52%_50%] transition duration-700 hover:scale-[1.015]"
              width={1200}
              height={900}
            />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2.5">
              {[
                ["Product", "review"],
                ["Document", "check"],
                ["Shipment", "plan"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-white/[0.10] bg-[color:var(--navy-deep)]/64 p-3.5 backdrop-blur-xl"
                >
                  <div className="text-[13px] font-semibold text-white">{a}</div>
                  <div className="mt-0.5 text-xs text-white/50">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RouteNetwork() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-42"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="routeGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".03" />
          <stop offset="48%" stopColor="#22D3EE" stopOpacity=".32" />
          <stop offset="100%" stopColor="#C69A3D" stopOpacity=".07" />
        </linearGradient>
      </defs>
      {[
        "M650 430 C820 318 1010 276 1235 172",
        "M650 430 C850 430 1048 508 1284 638",
        "M650 430 C540 310 450 252 304 204",
        "M650 430 C810 358 930 390 1100 360",
      ].map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="url(#routeGrad)"
          strokeWidth="1.2"
          strokeDasharray="2 18"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            delay: 0.9 + i * 0.18,
            duration: 2.4,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 3,
          }}
        />
      ))}
      {[
        [650, 430],
        [1235, 172],
        [1284, 638],
        [304, 204],
        [1100, 360],
      ].map(([cx, cy], i) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={i === 0 ? 3.2 : 2.2}
          fill={i === 0 ? "#D9FFFA" : "#FFFFFF"}
          opacity={i === 0 ? 0.72 : 0.36}
        />
      ))}
    </svg>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <motion.div {...fadeUp} className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--teal)]">
        <Sparkles className="size-3" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 leading-relaxed text-white/65">{sub}</p>}
    </motion.div>
  );
}

function TrustIndicators() {
  const items = [
    {
      Icon: SearchCheck,
      t: "Healthcare sourcing",
      d: "Product requirements reviewed before quote.",
    },
    { Icon: FileCheck2, t: "Documentation support", d: "COA, COO, batch, expiry and export docs." },
    { Icon: ShieldCheck, t: "Regulatory coordination", d: "Destination-aware document workflow." },
    {
      Icon: Plane,
      t: "Global shipment planning",
      d: "Incoterms, freight mode and timeline clarity.",
    },
  ];
  return (
    <section className="relative -mt-8 z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-strong grid gap-2 rounded-[26px] p-3 md:grid-cols-4">
          {items.map(({ Icon, t, d }) => (
            <div
              key={t}
              className="rounded-2xl p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.045]"
            >
              <Icon className="size-5 text-white/72" />
              <div className="mt-3 font-semibold text-white">{t}</div>
              <div className="mt-1 text-sm text-white/55">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Healthcare solutions"
          title={
            <>
              Built around the buyer's{" "}
              <span className="brand-gradient-text">procurement journey</span>
            </>
          }
          sub="The site is designed for importers who need product clarity, documentation confidence, shipment planning and a clean path to RFQ."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <motion.article
              key={s.slug}
              {...fadeUp}
              transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
              className="group overflow-hidden rounded-[26px] glass transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] to-transparent" />
                <div className="absolute left-5 top-5 grid size-11 place-items-center rounded-xl brand-gradient text-[color:var(--navy-deep)]">
                  <s.Icon className="size-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/62">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <SectionHeader
          center={false}
          eyebrow="Pharmaceutical portfolio"
          title={
            <>
              A controlled sourcing layer,{" "}
              <span className="brand-gradient-text">not a messy catalogue</span>
            </>
          }
          sub="Product availability, documentation, MOQ and export feasibility are reviewed per inquiry, product and destination country."
        />
        <motion.div {...fadeUp} className="grid gap-3 sm:grid-cols-2">
          {[
            "Tablets",
            "Capsules",
            "Injections",
            "Infusions",
            "Syrups & Suspensions",
            "Creams & Topicals",
            "Antibiotics",
            "Pain Management",
          ].map((x) => (
            <div
              key={x}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <CheckCircle2 className="size-5 text-[color:var(--teal)]" />
              <span className="text-white/80">{x}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SourcingNetwork() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-9 rounded-[30px] border border-white/[0.09] bg-white/[0.035] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] md:p-12 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeader
            center={false}
            eyebrow="Strategic sourcing network"
            title={
              <>
                Healthcare sourcing through{" "}
                <span className="brand-gradient-text">vetted supply relationships</span>
              </>
            }
            sub="Thorneberry is not positioned as a manufacturer. The brand role is sourcing, export coordination, procurement, documentation and logistics support for qualified international buyers."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Source", "Clarify product, dosage, strength, quantity and destination."],
              ["Verify", "Review product fit, document availability and export feasibility."],
              [
                "Coordinate",
                "Prepare quote logic around MOQ, Incoterms, lead time and payment terms.",
              ],
              ["Ship", "Plan documents, packing, freight mode and dispatch coordination."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl bg-[color:var(--navy-deep)]/48 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.045]"
              >
                <div className="text-xl font-semibold text-white">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QualityDocs() {
  const docs = [
    "COA",
    "COO",
    "Batch & Expiry",
    "Commercial Invoice",
    "Packing List",
    "GMP / FSC / CoPP where applicable",
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Quality & documentation"
          title={
            <>
              Documentation support for{" "}
              <span className="brand-gradient-text">serious import decisions</span>
            </>
          }
          sub="No fake guarantees. Document availability depends on product, destination country, order status and regulatory requirement."
        />
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {docs.map((d) => (
            <div
              key={d}
              className="rounded-2xl glass p-6 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.055]"
            >
              <FileCheck2 className="size-6 text-white/72" />
              <div className="mt-4 font-semibold text-white">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExportProcess() {
  const steps = [
    ["Requirement", "Product, generic, dosage form, strength, quantity and destination."],
    ["Review", "Availability, documentation needs and export feasibility."],
    ["Quotation", "MOQ, Incoterms, lead time, payment terms and quote validity."],
    ["Coordination", "Packing, documents, freight mode, dispatch and repeat order support."],
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Export process"
          title={
            <>
              From product requirement to{" "}
              <span className="brand-gradient-text">export shipment</span>
            </>
          }
        />
        <div className="relative mt-16 grid gap-5 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <motion.div
              key={t}
              {...fadeUp}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative rounded-[26px] glass p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.055]"
            >
              <div className="text-sm text-white/52">0{i + 1}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Logistics() {
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <SectionHeader
          center={false}
          eyebrow="Global logistics"
          title={
            <>
              Shipment planning for{" "}
              <span className="brand-gradient-text">healthcare procurement</span>
            </>
          }
          sub="Air, sea, Incoterms, freight forwarder coordination, customs documents and temperature-sensitive shipment planning where required."
        />
        <div className="relative min-h-[360px] overflow-hidden rounded-[30px] glass-strong p-8">
          <div className="absolute inset-0 bg-[radial-gradient(500px_220px_at_50%_50%,color-mix(in_oklab,var(--teal)_12%,transparent),transparent_72%)]" />
          <Globe2 className="absolute right-8 top-8 size-28 text-white/10" />
          <div className="relative grid gap-4">
            {[
              "FCA / CIF / CIP / DAP quotation context",
              "Air and sea shipment coordination",
              "Temperature-sensitive planning where required",
              "Packing, batch, expiry and dispatch documents",
            ].map((x) => (
              <div
                key={x}
                className="flex items-center gap-3 rounded-2xl bg-[color:var(--navy-deep)]/55 p-4"
              >
                <Truck className="size-5 text-white/66" />
                <span className="text-white/75">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyThorneberry() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Thorneberry"
          title={
            <>
              A focused partner for <span className="brand-gradient-text">healthcare buyers</span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {[
            [Stethoscope, "Healthcare-only focus"],
            [ClipboardCheck, "Structured RFQ workflow"],
            [ShieldCheck, "Documentation-aware support"],
            [MapPin, "Pakistan sourcing advantage"],
            [HeartHandshake, "Importer and NGO support"],
          ].map(([Icon, t]) => {
            const I = Icon as typeof Stethoscope;
            return (
              <div
                key={t as string}
                className="rounded-[26px] glass p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-white/[0.055]"
              >
                <I className="mx-auto size-6 text-white/72" />
                <div className="mt-4 text-sm font-semibold text-white">{t as string}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RFQ() {
  const fields = [
    "Destination country",
    "Product / generic name",
    "Dosage form",
    "Required strength",
    "Quantity",
    "Packaging requirement",
    "Target delivery date",
    "Import licence status",
  ];
  return (
    <section className="py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeader
          center={false}
          eyebrow="Product inquiry / RFQ"
          title={
            <>
              Built to collect the details{" "}
              <span className="brand-gradient-text">export teams actually need</span>
            </>
          }
          sub="The prototype RFQ flow prepares buyers to submit a useful inquiry instead of a vague contact message."
        />
        <form
          className="rounded-[30px] glass-strong p-6 md:p-7"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((f) => (
              <label key={f} className="block">
                <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-white/55">
                  {f}
                </span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.07]"
                  placeholder={f}
                />
              </label>
            ))}
          </div>
          <button className="premium-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full brand-gradient px-6 py-4 text-sm font-semibold text-[color:var(--navy-deep)]">
            Submit Export Requirement <Send className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function AssistantPreview() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 rounded-[30px] border border-white/[0.09] bg-[color:var(--navy-deep)] p-8 md:p-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Bot className="size-9 text-white/74" />
            <h2 className="mt-5 font-display text-4xl font-semibold text-white">
              Thorneberry Export Assistant
            </h2>
            <p className="mt-4 text-white/65">
              A structured B2B inquiry assistant for product, destination, dosage, quantity,
              packaging, licence and contact handoff.
            </p>
          </div>
          <div className="space-y-3">
            {[
              "What product or generic name do you need?",
              "Which destination country will import the shipment?",
              "Do you already have an import licence or registration path?",
              "Would you prefer WhatsApp or email follow-up?",
            ].map((q) => (
              <div
                key={q}
                className="rounded-2xl bg-white/[0.055] p-4 text-white/72 transition duration-300 hover:bg-white/[0.075]"
              >
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function KnowledgeHub() {
  const guides = [
    "How to request a pharmaceutical export quote",
    "COA, COO, GMP, FSC and CoPP explained",
    "Incoterms for healthcare importers",
    "Cold chain considerations for medical shipments",
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Knowledge Hub"
          title={
            <>
              Buyer education that supports{" "}
              <span className="brand-gradient-text">better procurement decisions</span>
            </>
          }
        />
        <div className="mt-16 grid gap-5 md:grid-cols-4">
          {guides.map((g) => (
            <article
              key={g}
              className="rounded-[26px] glass p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.055]"
            >
              <PackageCheck className="size-6 text-white/72" />
              <h3 className="mt-5 text-xl font-semibold text-white">{g}</h3>
              <p className="mt-3 text-sm text-white/55">
                Preview article for the future SEO and buyer education platform.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
