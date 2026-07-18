import type { MetadataRoute } from "next";
import { env } from "../lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/services",
    "/products",
    "/insights",
    "/contact",
    "/request-a-quote",
  ];

  return routes.map((route) => ({
    url: new URL(route, env.NEXT_PUBLIC_SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
