import type { Metadata } from "next";
import "./globals.css";
import { getServices, getSiteSettings } from "../lib/wordpress/queries";
import { SiteShell } from "../components/next/site-shell";

export const revalidate = 300;

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
      images: settings.defaultOgImage
        ? [
            {
              url:
                typeof settings.defaultOgImage.src === "string"
                  ? settings.defaultOgImage.src
                  : settings.defaultOgImage.src.src,
              alt: settings.defaultOgImage.alt,
            },
          ]
        : undefined,
    },
    icons: { icon: "/icon.jpg", apple: "/icon.jpg" },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [settings, services] = await Promise.all([getSiteSettings(), getServices()]);

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: settings.companyName,
              url: settings.siteUrl,
              email: settings.email,
              telephone: settings.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: settings.address,
                addressCountry: "PK",
              },
            }),
          }}
        />
        <SiteShell settings={settings} services={services}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
