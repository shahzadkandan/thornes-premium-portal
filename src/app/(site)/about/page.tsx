export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-20 text-[color:var(--navy)]">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--teal-dark)]">
          About
        </p>
        <h1 className="mt-4 font-display text-5xl">
          A healthcare sourcing and export coordination company.
        </h1>
        <p className="mt-6 text-xl text-slate-600">
          Thorneberry should be positioned as a coordination partner, not as a pharmaceutical
          manufacturer.
        </p>
      </div>
    </section>
  );
}
