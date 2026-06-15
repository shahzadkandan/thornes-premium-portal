import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-[color:var(--navy-deep)]/80 backdrop-blur-xl">
      <div className="absolute inset-x-0 -top-px h-px brand-gradient opacity-50" />
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-5">
            <span className="grid place-items-center size-9 rounded-lg brand-gradient text-[color:var(--navy-deep)] font-bold">T</span>
            <span className="text-white font-display text-2xl">Thorneberry</span>
          </div>
          <p className="text-white/65 leading-relaxed max-w-md">
            Pakistan-based exporter of pharmaceuticals, surgical instruments, medical wearables and premium agro-food products. Trusted by partners in 40+ countries.
          </p>
          <form className="mt-6 glass rounded-full p-1.5 flex items-center max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="Your email for trade updates" className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none" />
            <button className="brand-gradient text-[color:var(--navy-deep)] font-semibold text-sm px-4 py-2 rounded-full inline-flex items-center gap-1">Subscribe <ArrowRight className="size-4" /></button>
          </form>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
          <ul className="space-y-2.5 text-white/65 text-sm">
            <li><Link to="/" className="hover:text-[color:var(--teal)]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[color:var(--teal)]">About</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--teal)]">Services</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--teal)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Services</h4>
          <ul className="space-y-2.5 text-white/65 text-sm">
            <li><Link to="/medicine-exports" className="hover:text-[color:var(--teal)]">Medicine Exports</Link></li>
            <li><Link to="/surgical-exports" className="hover:text-[color:var(--teal)]">Surgical Exports</Link></li>
            <li><Link to="/medical-exports" className="hover:text-[color:var(--teal)]">Medical Wearables</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--teal)]">Food Exports</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h4>
          <ul className="space-y-3 text-white/65 text-sm">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 text-[color:var(--teal)] shrink-0" /> Karachi, Pakistan</li>
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 text-[color:var(--teal)] shrink-0" /> +92 300 000 0000</li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 text-[color:var(--teal)] shrink-0" /> info@thorneberry.com</li>
          </ul>
          <div className="flex gap-2 mt-5">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center size-9 rounded-full glass text-white/70 hover:text-white hover:bg-white/10 transition" aria-label="Social">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Thorneberry Pvt. Ltd. All rights reserved.</p>
          <p>Crafted for global healthcare partners.</p>
        </div>
      </div>
    </footer>
  );
}