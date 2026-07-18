import type { ReactNode } from "react";
import { Bot, MessageCircle } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/923340007744"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Thorneberry on WhatsApp"
          className="size-12 rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 grid place-items-center transition hover:-translate-y-0.5"
        >
          <MessageCircle className="size-5" />
        </a>
        <button
          type="button"
          aria-label="Open Thorneberry chatbot placeholder"
          className="size-12 rounded-full brand-gradient text-[color:var(--navy-deep)] shadow-2xl shadow-black/30 grid place-items-center transition hover:-translate-y-0.5"
          onClick={() => window.dispatchEvent(new CustomEvent("thorneberry-chatbot-placeholder"))}
        >
          <Bot className="size-5" />
        </button>
      </div>
    </div>
  );
}
