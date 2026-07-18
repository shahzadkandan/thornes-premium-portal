import { notFound } from "next/navigation";
import { getServices } from "../../../../lib/wordpress/queries";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const services = await getServices();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const selectedService = service!;

  return (
    <section className="min-h-screen bg-white px-6 py-20 text-[color:var(--navy)]">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--teal-dark)]">
          Service
        </p>
        <h1 className="mt-4 font-display text-5xl">{selectedService.title}</h1>
        <p className="mt-6 text-xl leading-relaxed text-slate-600">
          {selectedService.shortDescription}
        </p>
      </div>
    </section>
  );
}
