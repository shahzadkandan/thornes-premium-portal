import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Service, SiteSettings } from "../../lib/wordpress/types";

export function SiteFooter({
  settings,
  services,
}: {
  settings: SiteSettings;
  services: Service[];
}) {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--navy-deep)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={settings.logo.src}
              alt={settings.logo.alt}
              width={42}
              height={42}
              className="rounded-lg bg-white p-1"
            />
            <span className="font-display text-2xl">{settings.companyName}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">{settings.footerText}</p>
          <Link
            href="/request-a-quote"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)] transition hover:text-white"
          >
            Start an RFQ
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            {settings.navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[color:var(--teal)]">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products" className="transition hover:text-[color:var(--teal)]">
                Sourcing Catalogue
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition hover:text-[color:var(--teal)]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-[color:var(--teal)]">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Capabilities
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="transition hover:text-[color:var(--teal)]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-white/65">
            <li className="flex gap-3">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-[color:var(--teal)]"
                aria-hidden="true"
              />
              <span>{settings.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone
                className="mt-0.5 size-4 shrink-0 text-[color:var(--teal)]"
                aria-hidden="true"
              />
              <a href={`tel:${settings.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                {settings.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail
                className="mt-0.5 size-4 shrink-0 text-[color:var(--teal)]"
                aria-hidden="true"
              />
              <a href={`mailto:${settings.email}`} className="break-all hover:text-white">
                {settings.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle
                className="mt-0.5 size-4 shrink-0 text-[color:var(--teal)]"
                aria-hidden="true"
              />
              <a
                href={`https://wa.me/${settings.whatsapp.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp {settings.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {settings.companyName}. All rights reserved.
          </p>
          <p>Healthcare sourcing and export coordination from Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
