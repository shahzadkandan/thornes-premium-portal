import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Truck, Award, HeartHandshake, Sparkles, CheckCircle2, Star, Quote, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { services } from "@/components/site/services-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thorneberry — Global Healthcare & Pharmaceutical Exports" },
      { name: "description", content: "Trusted worldwide for medicine exports, surgical instruments, medical wearables and premium food products from Pakistan." },
      { property: "og:title", content: "Thorneberry — Global Healthcare & Pharmaceutical Exports" },
      { property: "og:description", content: "Trusted worldwide for medicine exports, surgical instruments, medical wearables and premium food products from Pakistan." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-70" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--navy-deep)]/80 via-[color:var(--navy-deep)]/60 to-[color:var(--navy-deep)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_30%,color-mix(in_oklab,var(--teal)_25%,transparent),transparent_60%)]" />
      </div>

      {/* Floating glass cards */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
        className="hidden lg:flex absolute right-10 top-40 glass rounded-2xl p-4 w-64 animate-float">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]"><Globe2 className="size-5" /></div>
          <div><div className="text-white text-sm font-medium">40+ Countries</div><div className="text-white/60 text-xs">Active export routes</div></div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
        style={{ animationDelay: "1.5s" }}
        className="hidden lg:flex absolute right-32 bottom-32 glass rounded-2xl p-4 w-64 animate-float">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]"><ShieldCheck className="size-5" /></div>
          <div><div className="text-white text-sm font-medium">ISO 13485 · GMP</div><div className="text-white/60 text-xs">Quality systems</div></div>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/80 mb-6">
          <span className="size-2 rounded-full brand-gradient animate-pulse-glow" /> Pakistan-based · Exporting to 40+ countries
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] max-w-4xl">
          Global Healthcare & <br />
          <span className="brand-gradient-text">Pharmaceutical</span> Export Solutions
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
          Trusted worldwide for medicine exports, surgical instruments, medical wearables and healthcare products from Pakistan — backed by quality systems, reliable logistics and decades of trade expertise.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4">
          <Link to="/services" className="inline-flex items-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold px-6 py-3.5 rounded-full glow hover:opacity-90 transition">
            Explore Services <ArrowRight className="size-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 glass-strong text-white font-medium px-6 py-3.5 rounded-full hover:bg-white/10 transition">
            Contact Us
          </Link>
        </motion.div>

        {/* Counters */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
          {[
            { v: 40, s: "+", l: "Countries Served" },
            { v: 500, s: "+", l: "Product SKUs" },
            { v: 15, s: "+", l: "Years of Trade" },
            { v: 99, s: "%", l: "On-Time Delivery" },
          ].map((c) => (
            <div key={c.l} className="glass rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-display brand-gradient-text"><Counter to={c.v} suffix={c.s} /></div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">{c.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { Icon: Globe2, t: "Global Export Network" },
    { Icon: ShieldCheck, t: "Quality Assurance" },
    { Icon: Truck, t: "Reliable Supply Chain" },
    { Icon: Award, t: "International Standards" },
    { Icon: HeartHandshake, t: "Customer Satisfaction" },
  ];
  return (
    <section className="relative -mt-12 z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-strong rounded-3xl p-3 grid grid-cols-2 md:grid-cols-5 gap-2">
          {items.map(({ Icon, t }) => (
            <div key={t} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition">
              <div className="size-11 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)] shrink-0"><Icon className="size-5" /></div>
              <div className="text-white text-sm font-medium leading-tight">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub, center = true }: { eyebrow: string; title: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <div className={`inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs text-[color:var(--teal)] uppercase tracking-[0.2em] ${center ? "" : ""}`}>
        <Sparkles className="size-3" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl text-white leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-white/65 leading-relaxed">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader center={false} eyebrow="About Thorneberry"
            title={<>A Pakistan-based exporter built for <span className="brand-gradient-text">global healthcare</span></>}
            sub="Thorneberry is a trusted name in international trade — supplying pharmaceuticals, surgical instruments, medical wearables and premium agro-food products from Pakistan to partners across the world. We combine rigorous quality systems with a flexible, partner-first approach to logistics." />
          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {[
              { t: "Mission", d: "Deliver reliable healthcare and food exports that improve lives globally." },
              { t: "Vision", d: "To be Pakistan's most trusted bridge between local manufacturers and the world." },
              { t: "Values", d: "Integrity, quality, transparency and long-term partnership." },
            ].map((v) => (
              <div key={v.t} className="glass rounded-2xl p-5">
                <div className="text-[color:var(--teal)] text-xs uppercase tracking-widest">{v.t}</div>
                <div className="text-white mt-2 text-sm leading-relaxed">{v.d}</div>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-white hover:text-[color:var(--teal)] transition group">
            Read our full story <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.img initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              src={about1} alt="Pharmaceutical specialist" loading="lazy" width={1024} height={1280}
              className="rounded-3xl object-cover h-[420px] w-full glow" />
            <motion.img initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.7 }}
              src={about2} alt="Global export logistics" loading="lazy" width={1024} height={800}
              className="rounded-3xl object-cover h-[280px] w-full mt-12" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-5 max-w-[220px]">
            <div className="text-3xl font-display brand-gradient-text">15+</div>
            <div className="text-xs text-white/65 mt-1">Years building trusted trade routes across Asia, Europe, MENA and Africa.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="What we export"
          title={<>A full portfolio of <span className="brand-gradient-text">healthcare & food</span> exports</>}
          sub="From pharmaceutical formulations to premium agro-food products — every category is sourced from vetted manufacturers and shipped with end-to-end care." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="group glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:bg-white/[0.07]">
              <div className="relative h-52 overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" width={1024} height={768}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-[color:var(--navy-deep)]/30 to-transparent" />
                <div className="absolute top-4 left-4 size-11 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)] shadow-lg">
                  <s.Icon className="size-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed line-clamp-3">{s.desc}</p>
                <Link to={s.to} className="mt-5 inline-flex items-center gap-1.5 text-sm text-[color:var(--teal)] hover:text-[color:var(--cyan-accent)] transition">
                  Read More <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    { Icon: Award, t: "International Standards", d: "GMP, ISO 13485 and HACCP-aligned partners across our supply network." },
    { Icon: Truck, t: "Reliable Delivery", d: "Multi-modal logistics with verified freight forwarders and real-time tracking." },
    { Icon: ShieldCheck, t: "Quality Control", d: "Pre-shipment inspections, third-party labs and full traceability." },
    { Icon: Sparkles, t: "Competitive Pricing", d: "Direct-from-manufacturer sourcing and scaled procurement advantage." },
    { Icon: Globe2, t: "Global Reach", d: "Active distribution in Asia, MENA, Africa, Europe and the Americas." },
    { Icon: HeartHandshake, t: "Customer Satisfaction", d: "Dedicated account managers and long-term partnership programs." },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Why choose us"
          title={<>Built to be the <span className="brand-gradient-text">partner you trust</span></>} />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div key={it.t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="relative glass rounded-3xl p-7 hover:bg-white/[0.06] transition group overflow-hidden">
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-[color:var(--teal)]/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="size-12 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]"><it.Icon className="size-6" /></div>
              <h3 className="mt-5 font-display text-xl text-white">{it.t}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [services[0].image, services[1].image, services[3].image, services[4].image, services[6].image, services[10].image];
  const spans = ["row-span-2", "", "", "row-span-2", "", ""];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Our world" title={<>Glimpses from across <span className="brand-gradient-text">our network</span></>} />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
          {imgs.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl glass group ${spans[i]}`}>
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)]/70 to-transparent opacity-60 group-hover:opacity-30 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { n: "Dr. Amelia Reyes", r: "Procurement Director, MedSource Europe", q: "Thorneberry has been a reliable partner for our pharmaceutical sourcing. Consistent quality and zero compromise on documentation." },
    { n: "Karim Al-Sayed", r: "CEO, Gulf Surgical Trading", q: "Their Sialkot-made surgical instruments meet every spec we send. Lead times and packaging are best-in-class." },
    { n: "Linh Nguyen", r: "Imports Manager, Saigon Wellness", q: "Wearables and consumables arrive exactly as quoted. The team is responsive across time zones." },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Client voices" title={<>Trusted by <span className="brand-gradient-text">global partners</span></>} />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={t.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-7 relative">
              <Quote className="absolute right-6 top-6 size-8 text-[color:var(--teal)]/30" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="size-4 fill-[color:var(--teal)] text-[color:var(--teal)]" />)}
              </div>
              <p className="text-white/80 leading-relaxed">{t.q}</p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="text-white font-medium">{t.n}</div>
                <div className="text-xs text-white/55 mt-0.5">{t.r}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy)] via-[color:var(--navy-deep)] to-[color:var(--charcoal)]" />
          <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,color-mix(in_oklab,var(--teal)_40%,transparent),transparent_60%)] animate-pulse-glow" />
          <div className="absolute -inset-px rounded-[2rem] [background:linear-gradient(120deg,transparent,color-mix(in_oklab,var(--teal)_60%,transparent),transparent)_border-box] [mask:linear-gradient(#000,#000)_padding-box,linear-gradient(#000,#000)] [mask-composite:exclude] border border-transparent" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl text-white leading-tight max-w-3xl mx-auto">
              Ready to partner with a <span className="brand-gradient-text">trusted global export company?</span>
            </h2>
            <p className="mt-5 text-white/70 max-w-xl mx-auto">Tell us what you need — our trade desk responds within one business day with samples, certificates and indicative pricing.</p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold px-7 py-4 rounded-full glow">Request Quote <ArrowRight className="size-4" /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 glass-strong text-white font-medium px-7 py-4 rounded-full hover:bg-white/10 transition">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Get in touch" title={<>Let's start an <span className="brand-gradient-text">export conversation</span></>} />
        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              { Icon: MapPin, t: "Address", d: "Head Office, Karachi, Sindh, Pakistan" },
              { Icon: Phone, t: "Phone", d: "+92 300 000 0000" },
              { Icon: Mail, t: "Email", d: "info@thorneberry.com" },
              { Icon: Clock, t: "Working Hours", d: "Monday – Saturday · 9:00 – 18:00 PKT" },
            ].map((c) => (
              <div key={c.t} className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="size-11 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)] shrink-0"><c.Icon className="size-5" /></div>
                <div><div className="text-white font-medium">{c.t}</div><div className="text-white/65 text-sm mt-1">{c.d}</div></div>
              </div>
            ))}
            <div className="glass rounded-2xl overflow-hidden h-72">
              <iframe title="Map" className="w-full h-full grayscale-[40%] opacity-90"
                src="https://www.openstreetmap.org/export/embed.html?bbox=66.97%2C24.80%2C67.17%2C24.95&layer=mapnik" />
            </div>
          </div>

          <form className="glass-strong rounded-3xl p-7 space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Country" name="country" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" />
            </div>
            <Field label="Requirements" name="requirements" textarea />
            <button className="inline-flex items-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold px-6 py-3.5 rounded-full glow w-full justify-center">
              Submit Inquiry <Send className="size-4" />
            </button>
            <p className="text-xs text-white/50 text-center">We respond within one business day. Your information stays confidential.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea = false }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const cls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[color:var(--teal)] focus:ring-2 focus:ring-[color:var(--teal)]/30 transition";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-white/60 mb-1.5">{label}</span>
      {textarea
        ? <textarea name={name} rows={4} className={cls} placeholder={`Tell us about your ${label.toLowerCase()}...`} />
        : <input name={name} type={type} className={cls} placeholder={label} />}
    </label>
  );
}
