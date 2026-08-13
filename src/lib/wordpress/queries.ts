import {
  fallbackAboutPage,
  fallbackContactPage,
  fallbackFaqs,
  fallbackHomepage,
  fallbackProducts,
  fallbackQuotePage,
  fallbackServices,
  fallbackSiteSettings,
  fallbackInsights,
} from "../../content/fallback/site";
import { z } from "zod";
import { wordpressRequest } from "./client";
import { wpEndpoints } from "./endpoints";
import {
  mapAboutPage,
  mapContactPage,
  mapFaq,
  mapHomepage,
  mapInsight,
  mapProduct,
  mapQuotePage,
  mapService,
  mapSiteSettings,
} from "./mappers";
import { wordpressObjectListSchema, wordpressObjectSchema } from "./schemas";
import type { Insight, Product, Service } from "./types";

export async function getSiteSettings() {
  return wordpressRequest({
    path: wpEndpoints.settings,
    schema: wordpressObjectSchema,
    fallback: fallbackSiteSettings,
    transform: (value) => mapSiteSettings(value, fallbackSiteSettings),
    revalidate: 600,
    tags: ["wordpress:settings"],
  });
}

async function getPagePayload(slug: string) {
  const pageResponseSchema = z.union([wordpressObjectSchema, wordpressObjectListSchema]);
  return wordpressRequest({
    path: wpEndpoints.page(slug),
    fallbackPaths: [wpEndpoints.pageBySlug(slug)],
    schema: pageResponseSchema,
    fallback: {},
    transform: (value) => (Array.isArray(value) ? (value[0] ?? {}) : value),
    revalidate: 300,
    tags: [`wordpress:page:${slug}`],
  });
}

export async function getHomepage() {
  return mapHomepage(await getPagePayload("home"), fallbackHomepage);
}

export async function getAboutPage() {
  return mapAboutPage(await getPagePayload("about"), fallbackAboutPage);
}

export async function getContactPage() {
  return mapContactPage(await getPagePayload("contact"), fallbackContactPage);
}

export async function getQuotePage() {
  return mapQuotePage(await getPagePayload("request-a-quote"), fallbackQuotePage);
}

export async function getServices(): Promise<Service[]> {
  return wordpressRequest({
    path: `${wpEndpoints.services}?per_page=100&_embed=1`,
    schema: wordpressObjectListSchema,
    fallback: fallbackServices,
    transform: (items) =>
      items.map((item) =>
        mapService(
          item,
          fallbackServices.find((service) => service.slug === String(item.slug ?? "")) ??
            fallbackServices[0],
        ),
      ),
    revalidate: 300,
    tags: ["wordpress:services"],
  });
}

export async function getService(slug: string) {
  const services = await getServices();
  return services.find((service) => service.slug === slug);
}

export async function getProducts(): Promise<Product[]> {
  return wordpressRequest({
    path: `${wpEndpoints.products}?per_page=100&_embed=1`,
    schema: wordpressObjectListSchema,
    fallback: fallbackProducts,
    transform: (items) =>
      items.map((item) => {
        const embedded = (item as Record<string, unknown>)._embedded;
        const terms =
          embedded && typeof embedded === "object" && !Array.isArray(embedded)
            ? (embedded as Record<string, unknown>)["wp:term"]
            : undefined;
        const category = Array.isArray(terms)
          ? terms
              .flatMap((group) => (Array.isArray(group) ? group : []))
              .find((term) => {
                return (
                  typeof term === "object" &&
                  term !== null &&
                  (term as Record<string, unknown>).taxonomy === "product_category"
                );
              })
          : undefined;
        const source =
          category && typeof category === "object"
            ? {
                ...item,
                category: (category as Record<string, unknown>).name,
                category_slug: (category as Record<string, unknown>).slug,
              }
            : item;
        return mapProduct(
          source,
          fallbackProducts.find((product) => product.slug === String(item.slug ?? "")) ??
            fallbackProducts[0],
        );
      }),
    revalidate: 300,
    tags: ["wordpress:products"],
  });
}

export async function getProduct(slug: string) {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}

export async function getInsights(): Promise<Insight[]> {
  return wordpressRequest({
    path: `${wpEndpoints.posts}?per_page=100&_embed=1`,
    schema: wordpressObjectListSchema,
    fallback: fallbackInsights,
    transform: (items) =>
      items.map((item) =>
        mapInsight(
          item,
          fallbackInsights.find((insight) => insight.slug === String(item.slug ?? "")) ??
            fallbackInsights[0],
        ),
      ),
    revalidate: 300,
    tags: ["wordpress:insights"],
  });
}

export async function getInsight(slug: string) {
  const insights = await getInsights();
  return insights.find((insight) => insight.slug === slug);
}

export async function getFaqs() {
  return wordpressRequest({
    path: `${wpEndpoints.faqs}?per_page=100&orderby=menu_order&order=asc`,
    schema: wordpressObjectListSchema,
    fallback: fallbackFaqs,
    transform: (items) =>
      items.map((item, index) => mapFaq(item, fallbackFaqs[index] ?? fallbackFaqs[0])),
    revalidate: 300,
    tags: ["wordpress:faqs"],
  });
}
