import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { services } from "@/components/site/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Export Portfolio — Thorneberry" },
      { name: "description", content: "Explore Thorneberry's full export portfolio: pharmaceuticals, surgical instruments, medical wearables and premium agro-food products." },
      { property: "og:title", content: "Services — Thorneberry" },
      { property: "og:description", content: "Full export portfolio across healthcare and premium food categories." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-5">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="size-3" /> <span className="text-white">Services</span>
          </nav>
          <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs text-[color:var(--teal)] uppercase tracking-[0.2em]">Our Portfolio</div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl text-white max-w-3xl">A full export portfolio from a single trusted partner.</h1>
          <p className="mt-5 text-white/65 max-w-2xl">Healthcare and premium food categories — sourced from vetted Pakistani manufacturers and shipped worldwide with full documentation.</p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.06 }}
              className="group glass rounded-3xl overflow-hidden hover:-translate-y-1 transition">
              <div className="relative h-52 overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-[color:var(--navy-deep)]/30 to-transparent" />
                <div className="absolute top-4 left-4 size-11 rounded-xl brand-gradient grid place-items-center text-[color:var(--navy-deep)]"><s.Icon className="size-5" /></div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                <Link to={s.to} className="mt-5 inline-flex items-center gap-1.5 text-sm text-[color:var(--teal)]">Read More <ArrowRight className="size-4 group-hover:translate-x-1 transition" /></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}