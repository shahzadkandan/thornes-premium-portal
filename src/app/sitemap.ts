import type { MetadataRoute } from "next";
import { env } from "../lib/env";
import { getInsights, getProducts, getServices } from "../lib/wordpress/queries";

type SitemapRoute = { path: string; priority: number; lastModified?: Date };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, products, insights] = await Promise.all([
    getServices(),
    getProducts(),
    getInsights(),
  ]);
  const routes: SitemapRoute[] = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.7 },
    { path: "/services", priority: 0.9 },
    { path: "/products", priority: 0.8 },
    { path: "/insights", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/request-a-quote", priority: 0.9 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    ...services.map((item) => ({ path: `/services/${item.slug}`, priority: 0.7 })),
    ...products.map((item) => ({ path: `/products/${item.slug}`, priority: 0.6 })),
    ...insights.map((item) => ({
      path: `/insights/${item.slug}`,
      priority: item.featured ? 0.7 : 0.5,
      lastModified: new Date(item.publishedAt),
    })),
  ];
  return routes.map((route) => ({
    url: new URL(route.path, env.NEXT_PUBLIC_SITE_URL).toString(),
    lastModified: route.lastModified ?? new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
