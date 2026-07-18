import type { Metadata } from "next";
import "./globals.css";
import { getSiteSettings } from "../lib/wordpress/queries";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    metadataBase: new URL(settings.siteUrl),
    title: {
      default: settings.defaultSeoTitle,
      template: `%s - ${settings.companyName}`,
    },
    description: settings.defaultSeoDescription,
    openGraph: {
      title: settings.defaultSeoTitle,
      description: settings.defaultSeoDescription,
      url: settings.siteUrl,
      siteName: settings.companyName,
      type: "website",
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en">
      <body>
        <header className="border-b border-white/10 bg-[color:var(--navy)] text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <a className="font-display text-2xl font-semibold" href="/">
              {settings.companyName}
            </a>
            <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
              <a href="/services">Services</a>
              <a href="/products">Products</a>
              <a href="/insights">Insights</a>
              <a href="/contact">Contact</a>
              <a
                className="rounded-full bg-[color:var(--teal)] px-4 py-2 text-[color:var(--navy)]"
                href="/request-a-quote"
              >
                Request RFQ
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-[color:var(--navy)] px-6 py-12 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            <div>
              <p className="font-display text-2xl">{settings.companyName}</p>
              <p className="mt-3 max-w-sm text-white/65">
                Healthcare sourcing and export coordination support for international buyers.
              </p>
            </div>
            <div>
              <p className="font-semibold">Contact</p>
              <p className="mt-3 text-white/65">{settings.phone}</p>
              <p className="text-white/65">{settings.email}</p>
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="mt-3 text-white/65">{settings.address}</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
