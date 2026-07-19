"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Service, SiteSettings } from "../../lib/wordpress/types";

export function SiteHeader({
  settings,
  services,
}: {
  settings: SiteSettings;
  services: Service[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[color:var(--navy-deep)]/80 backdrop-blur-2xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-6">
        <Link
          href="/"
          aria-label="Thorneberry home"
          className="shrink-0 rounded-xl bg-white p-1.5 transition hover:ring-2 hover:ring-[color:var(--teal)]/50"
        >
          <Image
            src={settings.logo.src}
            alt={settings.logo.alt}
            width={46}
            height={46}
            className="size-10 rounded-lg object-cover"
            priority
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
        >
          {settings.navLinks.map((item) => {
            const isServices = item.href === "/services";
            return (
              <div key={item.href} className="group relative flex min-h-[76px] items-center">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`nav-link inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-3 text-[13px] font-medium transition ${isActive(item.href) ? "text-white" : "text-white/68 hover:text-white"}`}
                >
                  {item.label}
                  {isServices ? (
                    <ChevronDown
                      className="size-3.5 text-white/45 transition group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
                {isServices ? (
                  <div className="pointer-events-none invisible absolute left-1/2 top-full w-[680px] -translate-x-1/2 translate-y-2 rounded-2xl border border-white/10 bg-[color:var(--navy-deep)]/95 p-3 opacity-0 shadow-2xl transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-1">
                      {services.slice(0, 6).map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="rounded-xl p-4 transition hover:bg-white/[0.06]"
                        >
                          <span className="flex items-center gap-2 text-sm font-medium text-white/90">
                            {service.title}
                            <ArrowRight
                              className="size-3.5 text-[color:var(--teal)]"
                              aria-hidden="true"
                            />
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-white/50">
                            {service.shortDescription}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={settings.headerCta.href}
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2.5 text-[13px] font-medium text-white/88 transition hover:border-white/25 hover:bg-white/[0.1] sm:inline-flex"
          >
            {settings.headerCta.label}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-black/60 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col border-l border-white/10 bg-[color:var(--navy-deep)] p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Image
                src={settings.logo.src}
                alt={settings.logo.alt}
                width={46}
                height={46}
                className="rounded-lg bg-white p-1"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="mt-10 flex flex-col gap-1">
              {settings.navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3.5 text-base transition hover:bg-white/[0.06] ${isActive(item.href) ? "bg-white/[0.08] text-white" : "text-white/75"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href={settings.headerCta.href}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full brand-gradient px-5 py-3 font-semibold text-[color:var(--navy-deep)]"
            >
              {settings.headerCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <p className="mt-auto text-sm leading-6 text-white/50">
              {settings.phone}
              <br />
              {settings.email}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
