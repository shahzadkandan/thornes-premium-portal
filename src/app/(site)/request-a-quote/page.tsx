export default function RequestQuotePage() {
  return (
    <section className="min-h-screen bg-white px-6 py-20 text-[color:var(--navy)]">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--teal-dark)]">
          RFQ
        </p>
        <h1 className="mt-4 font-display text-5xl">Request a quote.</h1>
        <p className="mt-6 text-xl text-slate-600">
          Form implementation is intentionally pending until the email service, recipient, rate
          limiting and spam protection are approved.
        </p>
      </div>
    </section>
  );
}
