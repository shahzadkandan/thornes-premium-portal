import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", mega: true },
  { to: "/medicine-exports", label: "Medicine Exports" },
  { to: "/surgical-exports", label: "Surgical Exports" },
  { to: "/medical-exports", label: "Medical Exports" },
  { to: "/contact", label: "Contact" },
];

const megaServices = [
  { to: "/medicine-exports", title: "Medicine Exports", desc: "Pharmaceutical formulations & APIs" },
  { to: "/surgical-exports", title: "Surgical Exports", desc: "Precision stainless-steel instruments" },
  { to: "/medical-exports", title: "Medical Wearables", desc: "Connected health & monitoring devices" },
  { to: "/medical-exports", title: "Medical Products", desc: "Disposables, diagnostics & consumables" },
  { to: "/services", title: "Dry Fruits & Rice", desc: "Premium Pakistani agro-exports" },
  { to: "/services", title: "Meat, Poultry & Seafood", desc: "Halal-certified frozen exports" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className={`hidden md:block border-b border-white/10 transition-colors ${scrolled ? "bg-[color:var(--navy-deep)]/90" : "bg-black/20"} backdrop-blur-md`}>
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between text-xs text-white/70">
          <div className="flex items-center gap-6">
            <a href="tel:+92000000000" className="flex items-center gap-2 hover:text-[color:var(--teal)] transition"><Phone className="size-3.5" /> +92 300 000 0000</a>
            <a href="mailto:info@thorneberry.com" className="flex items-center gap-2 hover:text-[color:var(--teal)] transition"><Mail className="size-3.5" /> info@thorneberry.com</a>
            <span className="flex items-center gap-2"><Clock className="size-3.5" /> Mon–Sat, 9:00 – 18:00 PKT</span>
          </div>
          <div className="text-white/50 tracking-[0.25em] uppercase">Karachi · Lahore · Worldwide</div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`transition-all duration-500 ${scrolled ? "bg-[color:var(--navy-deep)]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,.6)]" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid place-items-center size-9 rounded-lg brand-gradient text-[color:var(--navy-deep)] font-bold">T</span>
            <span className="text-white font-display text-2xl tracking-tight">Thorneberry</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <div key={n.to + n.label}
                onMouseEnter={() => n.mega && setMegaOpen(true)}
                onMouseLeave={() => n.mega && setMegaOpen(false)}
                className="relative">
                <Link to={n.to} className="px-4 py-2 text-sm text-white/80 hover:text-white transition rounded-full hover:bg-white/5 flex items-center gap-1"
                  activeProps={{ className: "text-white bg-white/5" }}
                  activeOptions={{ exact: n.to === "/" }}>
                  {n.label} {n.mega && <ChevronDown className="size-3.5 opacity-60" />}
                </Link>
                <AnimatePresence>
                  {n.mega && megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[680px]">
                      <div className="glass-strong rounded-2xl p-5 grid grid-cols-2 gap-2">
                        {megaServices.map((s) => (
                          <Link key={s.title} to={s.to} className="p-3 rounded-xl hover:bg-white/5 transition group">
                            <div className="text-white font-medium flex items-center gap-2">{s.title}<ArrowRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" /></div>
                            <div className="text-xs text-white/60 mt-1">{s.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition glow">
              Get a Quote <ArrowRight className="size-4" />
            </Link>
            <button onClick={() => setOpen(true)} className="lg:hidden grid place-items-center size-10 rounded-full glass text-white" aria-label="Open menu">
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-in */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.35 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-[color:var(--navy-deep)] border-l border-white/10 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="text-white font-display text-xl">Thorneberry</span>
                <button onClick={() => setOpen(false)} className="grid place-items-center size-10 rounded-full glass text-white"><X className="size-5" /></button>
              </div>
              <nav className="flex flex-col gap-1">
                {nav.map((n) => (
                  <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className="px-4 py-3 text-white/85 hover:bg-white/5 rounded-xl text-base">
                    {n.label}
                  </Link>
                ))}
              </nav>
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-6 inline-flex items-center justify-center gap-2 brand-gradient text-[color:var(--navy-deep)] font-semibold px-5 py-3 rounded-full">
                Get a Quote <ArrowRight className="size-4" />
              </Link>
              <div className="mt-auto pt-8 text-xs text-white/60 space-y-2">
                <div className="flex items-center gap-2"><Phone className="size-3.5" /> +92 300 000 0000</div>
                <div className="flex items-center gap-2"><Mail className="size-3.5" /> info@thorneberry.com</div>
                <div className="flex items-center gap-2"><Clock className="size-3.5" /> Mon–Sat, 9:00 – 18:00 PKT</div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}