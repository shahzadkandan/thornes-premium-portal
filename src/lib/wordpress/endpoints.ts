export const wpEndpoints = {
  pages: "/wp-json/wp/v2/pages",
  posts: "/wp-json/wp/v2/posts",
  media: "/wp-json/wp/v2/media",
  services: "/wp-json/wp/v2/services",
  products: "/wp-json/wp/v2/products",
  faqs: "/wp-json/wp/v2/faqs",
  settings: "/wp-json/thorneberry/v1/settings",
  page: (slug: string) => `/wp-json/thorneberry/v1/pages/${encodeURIComponent(slug)}`,
  pageBySlug: (slug: string) =>
    `/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_embed=1&per_page=1`,
} as const;
