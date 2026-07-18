import { fallbackHomepage } from "../../content/fallback/site";
import { getServices } from "../../lib/wordpress/queries";

export default async function HomePage() {
  const services = await getServices();

  return (
    <div className="bg-[color:var(--navy-deep)] text-white">
      <section className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
            {fallbackHomepage.heroEyebrow}
          </p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
            {fallbackHomepage.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/70">
            {fallbackHomepage.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="rounded-full bg-[color:var(--teal)] px-6 py-3 font-semibold text-[color:var(--navy)]"
              href={fallbackHomepage.primaryCta.href}
            >
              {fallbackHomepage.primaryCta.label}
            </a>
            <a
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
              href={fallbackHomepage.secondaryCta.href}
            >
              {fallbackHomepage.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/15 bg-white/8 p-6 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--teal)]">
            Migration scaffold
          </p>
          <h2 className="mt-4 font-display text-3xl">Headless WordPress ready content model</h2>
          <p className="mt-4 text-white/65">
            This branch initializes the Next.js App Router foundation and typed WordPress data
            layer. Final visual migration is tracked as a known limitation.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[color:var(--navy)]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--teal-dark)]">
            Editable services
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            Healthcare sourcing categories mapped for Headless WordPress.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="rounded-2xl border border-slate-200 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  {service.verified ? "Verified direction" : "Needs verification"}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.shortDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
