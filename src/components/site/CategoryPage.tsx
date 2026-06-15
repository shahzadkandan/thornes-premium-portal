import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck, Truck, Award, CheckCircle2, FileText, Package, ClipboardCheck, Plane, HelpCircle, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import type { Service } from "./services-data";

export function CategoryPage({
  title, eyebrow, intro, items, faqs, heroImage,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  items: Service[];
  faqs: { q: string; a: string }[];
  heroImage: string;
}) {
  return (
    <SiteLayout>
      {/* Hero banner */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--navy-deep)]/80 via-[color:var(--navy-deep)]/90 to-[color:var(--navy-deep)]" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_30%_20%,color-mix(in_oklab,var(--teal)_25%,transparent),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="size-3" />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="size-3" />
            <span className="text-white">{title}</span>
          </nav>
          <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs text-[color:var(--teal)] uppercase tracking-[0.2em]">{eyebrow}</div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl text-white leading-tight max-w-3xl">{title}</h1>
          <p className="mt-5 text-white/70 max-w-2xl leading-relaxed">{intro}</p>
          <div className="mt-8 flex gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold px-5 py-3 rounded-full glow">Request a Quote <ArrowRight className="size-4" /></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 glass-strong text-white font-medium px-5 py-3 rounded-full">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl md:text-4xl text-white">Why partner with Thorneberry</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { Icon: ShieldCheck, t: "Verified Quality", d: "Pre-shipment QA and third-party inspection on request." },
              { Icon: Award, t: "Global Standards", d: "GMP, ISO 13485 and HACCP-aligned manufacturers." },
              { Icon: Truck, t: "Reliable Logistics", d: "Multi-modal freight with full tracking & documentation." },
              { Icon: CheckCircle2, t: "Flexible MOQs", d: "Trial orders, scaled contracts and private-label options." },
            ].map((it) => (
              <div key={it.t} className="glass rounded-2xl p-6">
                <div className="size-11 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]"><it.Icon className="size-5" /></div>
                <div className="mt-4 text-white font-medium">{it.t}</div>
                <div className="text-sm text-white/60 mt-1.5 leading-relaxed">{it.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl md:text-4xl text-white">Product highlights</h2>
          <p className="text-white/65 mt-3 max-w-2xl">A curated selection from this category. Full catalogues and certificates are shared on request.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
                className="glass rounded-3xl overflow-hidden group hover:-translate-y-1 transition">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] to-transparent" />
                  <div className="absolute top-4 left-4 size-10 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]"><s.Icon className="size-5" /></div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-white">{s.title}</h3>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl md:text-4xl text-white">Our export process</h2>
          <div className="mt-12 grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[color:var(--teal)]/60 to-transparent" />
            {[
              { Icon: FileText, t: "Inquiry & Quote", d: "Share requirements; receive indicative pricing." },
              { Icon: ClipboardCheck, t: "Sampling & QA", d: "Samples shipped; certificates and lab tests provided." },
              { Icon: Package, t: "Production & Packing", d: "Manufactured to spec with export-grade packaging." },
              { Icon: Plane, t: "Shipping & Support", d: "Air, sea or land freight with full documentation." },
            ].map((s, i) => (
              <div key={s.t} className="relative glass rounded-3xl p-6 text-center">
                <div className="size-12 rounded-full brand-gradient grid place-items-center text-[color:var(--navy-deep)] font-bold mx-auto">{i + 1}</div>
                <s.Icon className="size-5 text-[color:var(--teal)] mx-auto mt-4" />
                <div className="text-white font-medium mt-2">{s.t}</div>
                <div className="text-xs text-white/55 mt-1.5 leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass-strong rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white">Quality assurance you can audit</h2>
              <p className="text-white/65 mt-4 leading-relaxed">Every shipment leaves with batch documentation, certificates of analysis and origin, and full traceability back to the manufacturer. We welcome third-party inspections.</p>
            </div>
            <ul className="space-y-3">
              {["Pre-shipment inspections", "Certificates of Analysis & Origin", "Third-party lab testing on request", "Cold-chain & GDP-compliant logistics", "Full batch-level traceability"].map((q) => (
                <li key={q} className="flex gap-3 text-white/80"><CheckCircle2 className="size-5 text-[color:var(--teal)] shrink-0 mt-0.5" /> {q}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy)] via-[color:var(--navy-deep)] to-[color:var(--charcoal)]" />
            <div className="absolute inset-0 bg-[radial-gradient(500px_250px_at_50%_0%,color-mix(in_oklab,var(--teal)_40%,transparent),transparent_60%)] animate-pulse-glow" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl text-white">Looking for {title.toLowerCase()}?</h2>
              <p className="text-white/70 mt-4 max-w-xl mx-auto">Send us your requirement and receive a tailored quote within one business day.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold px-7 py-4 rounded-full glow">Request a Quote <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs text-[color:var(--teal)] uppercase tracking-[0.2em]"><HelpCircle className="size-3" /> Questions</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-white">Frequently asked</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="glass rounded-2xl p-6 group">
                <summary className="cursor-pointer text-white font-medium flex justify-between items-center list-none">
                  {f.q}
                  <ChevronRight className="size-4 text-[color:var(--teal)] transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-white/65 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="font-display text-3xl md:text-4xl text-white">Talk to our trade desk</h2>
            <p className="text-white/65">Our team replies within one business day with samples, certificates and pricing.</p>
            {[
              { Icon: MapPin, t: "Karachi, Pakistan" },
              { Icon: Phone, t: "+92 300 000 0000" },
              { Icon: Mail, t: "info@thorneberry.com" },
              { Icon: Clock, t: "Mon – Sat · 9:00 – 18:00 PKT" },
            ].map((c) => (
              <div key={c.t} className="glass rounded-2xl p-4 flex items-center gap-3">
                <div className="size-10 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]"><c.Icon className="size-5" /></div>
                <span className="text-white/85">{c.t}</span>
              </div>
            ))}
          </div>
          <form className="glass-strong rounded-3xl p-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[["Name","name"],["Company","company"],["Country","country"],["Email","email"],["Phone","phone"]].map(([l,n]) => (
                <label key={n} className="block">
                  <span className="block text-xs uppercase tracking-widest text-white/60 mb-1.5">{l}</span>
                  <input name={n} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[color:var(--teal)]" placeholder={l} />
                </label>
              ))}
            </div>
            <label className="block">
              <span className="block text-xs uppercase tracking-widest text-white/60 mb-1.5">Requirements</span>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[color:var(--teal)]" placeholder="Tell us about your requirements..." />
            </label>
            <button className="inline-flex w-full justify-center items-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold px-6 py-3.5 rounded-full glow">Submit Inquiry <Send className="size-4" /></button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}