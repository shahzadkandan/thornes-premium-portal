import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailView } from "../../../../components/next/service-detail-view";
import { pageMetadata } from "../../../../lib/seo";
import { getService, getServices, getSiteSettings } from "../../../../lib/wordpress/queries";

export async function generateStaticParams() {
  return (await getServices()).map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [settings, service] = await Promise.all([getSiteSettings(), getService(slug)]);
  if (!service) return {};
  return pageMetadata(
    settings,
    service.seo.title,
    service.seo.description,
    service.image,
    `/services/${slug}`,
  );
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
