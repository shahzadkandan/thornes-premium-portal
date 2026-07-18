import { getSiteSettings } from "../../../lib/wordpress/queries";

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <section className="min-h-screen bg-white px-6 py-20 text-[color:var(--navy)]">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--teal-dark)]">
          Contact
        </p>
        <h1 className="mt-4 font-display text-5xl">Start a healthcare sourcing conversation.</h1>
        <div className="mt-8 grid gap-4 text-lg text-slate-600">
          <p>{settings.phone}</p>
          <p>{settings.email}</p>
          <p>{settings.address}</p>
        </div>
      </div>
    </section>
  );
}
