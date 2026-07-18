import type { WordpressPage } from "./types";

export function mapWordpressPageTitle(page: WordpressPage) {
  return page.title.rendered.replace(/<[^>]*>/g, "").trim();
}
