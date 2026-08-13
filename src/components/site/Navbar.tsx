import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Clock, Mail, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/thorneberry-logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Healthcare Solutions", mega: true },
  { to: "/blog", label: "Knowledge Hub" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const megaServices = [
  {
    to: "/medicine-exports",
    title: "Pharmaceutical Sourcing",
    desc: "Medicines, generics and dosage-form requirements",
  },
  {
    to: "/medicine-exports",
    title: "Medicine Export Coordination",
    desc: "MOQ, quote, Incoterms and shipment planning",
  },
  {
    to: "/surgical-exports",
    title: "Surgical Instruments",
    desc: "Hospital and distributor sourcing support",
  },
  {
    to: "/medical-exports",
    title: "Medical Supplies",
    desc: "Consumables, devices and healthcare procurement",
  },
  {
    to: "/services",
    title: "Quality & Documentation",
    desc: "COA, COO, batch, expiry and export documents",
  },
  {
    to: "/contact",
    title: "Importer RFQ Support",
    desc: "Structured quote intake for global buyers",
  },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-out ${scrolled ? "border-b border-white/[0.08] bg-[color:var(--navy-deep)]/82 shadow-[0_18px_60px_-36px_rgba(0,0,0,.85)] backdrop-blur-2xl" : "bg-transparent"}`}
      >
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between gap-6 px-6">
          <Link to="/" className="group flex shrink-0 items-center" aria-label="Thorneberry home">
            <span className="grid size-12 place-items-center overflow-hidden rounded-[10px] border border-white/12 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,.12)] transition group-hover:border-white/24">
              <img src={logo} alt="Thorneberry logo" className="size-full object-cover" />
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
            {nav.map((n) => (
              <div
                key={n.to + n.label}
                className="group/navitem relative flex h-[78px] items-center"
              >
                <Link
                  to={n.to}
                  className="nav-link group relative inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 text-[12.5px] font-medium text-white/68 transition-all duration-300 hover:text-white xl:px-3.5 xl:text-[13px]"
                  activeProps={{ className: "text-white" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  <span>{n.label}</span>
                  {"mega" in n && n.mega && (
                    <ChevronDown className="size-3.5 text-white/42 transition group-hover:translate-y-px group-hover:text-white/70" />
                  )}
                </Link>
                {"mega" in n && n.mega && (
                  <div className="invisible pointer-events-none absolute left-1/2 top-full w-[720px] -translate-x-1/2 translate-y-2 scale-[0.985] pt-2 opacity-0 transition duration-200 ease-out group-hover/navitem:visible group-hover/navitem:pointer-events-auto group-hover/navitem:translate-y-0 group-hover/navitem:scale-100 group-hover/navitem:opacity-100">
                    <div className="rounded-[22px] border border-white/[0.10] bg-[color:var(--navy-deep)]/92 p-3 shadow-[0_24px_80px_-35px_rgba(0,0,0,.9)] backdrop-blur-2xl">
                      <div className="grid grid-cols-2 gap-1.5">
                        {megaServices.map((s) => (
                          <Link
                            key={s.title}
                            to={s.to}
                            className="group rounded-2xl px-4 py-3.5 transition duration-300 hover:bg-white/[0.055]"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium text-white/88">
                              {s.title}
                              <ArrowRight className="size-3.5 -translate-x-1 text-white/35 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </div>
                            <div className="mt-1.5 text-xs leading-relaxed text-white/48">
                              {s.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full border border-white/14 bg-white/[0.055] px-4 py-2.5 text-[13px] font-medium text-white/86 shadow-[inset_0_1px_0_rgba(255,255,255,.07)] transition duration-300 hover:border-white/24 hover:bg-white/[0.09] hover:text-white sm:inline-flex"
            >
              Request RFQ <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white xl:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/62 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32 }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-white/10 bg-[color:var(--navy-deep)] p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex items-center gap-3 text-xl font-semibold text-white">
                  <span className="grid size-12 place-items-center overflow-hidden rounded-[10px] bg-white">
                    <img src={logo} alt="Thorneberry logo" className="size-full object-cover" />
                  </span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {nav.map((n) => (
                  <Link
                    key={n.label}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base text-white/82 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-5 py-3 font-medium text-white"
              >
                Request RFQ <ArrowRight className="size-4" />
              </Link>
              <div className="mt-auto space-y-2 pt-8 text-xs text-white/58">
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5" /> +92-334-0007744
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-3.5" /> info@thorneberry.com.pk
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-3.5" /> Healthcare sourcing and export coordination
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
