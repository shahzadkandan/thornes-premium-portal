import { fallbackServices, fallbackSiteSettings } from "../../content/fallback/site";
import { wpEndpoints } from "./endpoints";
import { serviceSchema, siteSettingsSchema, wordpressPageListSchema } from "./schemas";
import { wordpressRequest } from "./client";

export async function getSiteSettings() {
  return wordpressRequest({
    path: wpEndpoints.settings,
    schema: siteSettingsSchema,
    fallback: fallbackSiteSettings,
    revalidate: 600,
  });
}

export async function getPages() {
  return wordpressRequest({
    path: `${wpEndpoints.pages}?per_page=100`,
    schema: wordpressPageListSchema,
    fallback: [],
    revalidate: 300,
  });
}

export async function getServices() {
  return wordpressRequest({
    path: `${wpEndpoints.services}?per_page=100`,
    schema: serviceSchema.array(),
    fallback: fallbackServices,
    revalidate: 300,
  });
}
