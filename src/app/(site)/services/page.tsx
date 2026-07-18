import { getServices } from "../../../lib/wordpress/queries";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <section className="min-h-screen bg-white px-6 py-20 text-[color:var(--navy)]">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--teal-dark)]">
          Services
        </p>
        <h1 className="mt-4 font-display text-5xl">Healthcare sourcing and export coordination.</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-slate-600">{service.shortDescription}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
