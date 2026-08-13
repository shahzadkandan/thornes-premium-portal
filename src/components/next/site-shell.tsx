import { Bot, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import type { Service, SiteSettings } from "../../lib/wordpress/types";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({
  children,
  settings,
  services,
}: {
  children: ReactNode;
  settings: SiteSettings;
  services: Service[];
}) {
  return (
    <div className="min-h-screen bg-[color:var(--navy-deep)] text-white">
      <SiteHeader settings={settings} services={services} />
      <main>{children}</main>
      <SiteFooter settings={settings} services={services} />
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${settings.whatsapp.replace(/[^\d]/g, "")}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Thorneberry on WhatsApp"
          className="grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:-translate-y-0.5"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
        </a>
        <button
          type="button"
          aria-label="Open chatbot placeholder"
          className="grid size-12 place-items-center rounded-full brand-gradient text-[color:var(--navy-deep)] shadow-2xl transition hover:-translate-y-0.5"
        >
          <Bot className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
