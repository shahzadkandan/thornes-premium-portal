import type { Metadata } from "next";
import type { ImageAsset, SiteSettings } from "./wordpress/types";

export function imageSource(asset?: ImageAsset) {
  if (!asset) return undefined;
  return typeof asset.src === "string" ? asset.src : asset.src.src;
}

export function pageMetadata(
  settings: SiteSettings,
  title: string,
  description: string,
  image?: ImageAsset,
  path = "/",
): Metadata {
  const imageUrl = imageSource(image ?? settings.defaultOgImage);
  return {
    metadataBase: new URL(settings.siteUrl),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      siteName: settings.companyName,
      type: "website",
      images: imageUrl ? [{ url: imageUrl, alt: image?.alt ?? settings.companyName }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}
