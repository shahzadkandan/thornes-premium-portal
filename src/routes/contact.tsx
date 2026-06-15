import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Thorneberry — Get an Export Quote" },
      { name: "description", content: "Request a quote, samples or partnership conversation. Our trade desk in Karachi replies within one business day." },
      { property: "og:title", content: "Contact Thorneberry" },
      { property: "og:description", content: "Reach our trade desk for quotes, samples and partnership inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-5">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="size-3" /> <span className="text-white">Contact</span>
          </nav>
          <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs text-[color:var(--teal)] uppercase tracking-[0.2em]">Contact</div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl text-white max-w-3xl">Start an <span className="brand-gradient-text">export conversation</span> with us.</h1>
          <p className="mt-5 text-white/65 max-w-2xl">Tell us what you need — our team responds within one business day with samples, certificates and indicative pricing.</p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
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
            <div className="glass rounded-2xl overflow-hidden h-80">
              <iframe title="Map" className="w-full h-full opacity-90"
                src="https://www.openstreetmap.org/export/embed.html?bbox=66.97%2C24.80%2C67.17%2C24.95&layer=mapnik" />
            </div>
          </div>

          <form className="glass-strong rounded-3xl p-7 space-y-4 h-fit" onSubmit={(e) => e.preventDefault()}>
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
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[color:var(--teal)]" placeholder="Share product details, quantities, destination port and timeline..." />
            </label>
            <button className="inline-flex w-full justify-center items-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold px-6 py-3.5 rounded-full glow">Submit Inquiry <Send className="size-4" /></button>
            <p className="text-xs text-white/50 text-center">Confidential. We respond within one business day.</p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}