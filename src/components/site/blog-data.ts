export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: { name: string; role: string; avatar?: string };
  publishedAt: string; // ISO
  readingMinutes: number;
  cover: string;
  featured?: boolean;
};

export const blogCategories = [
  "Industry Insights",
  "Pharmaceutical Exports",
  "Surgical & Medical",
  "Regulatory & Compliance",
  "Global Trade",
  "Company News",
];

// Posts are managed manually. Leave empty — render an elegant empty state.
export const blogPosts: BlogPost[] = [];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelated(slug: string, limit = 3) {
  const post = getPost(slug);
  if (!post) return [];
  return blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, limit);
}