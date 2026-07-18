export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <section className="min-h-screen bg-white px-6 py-20 text-[color:var(--navy)]">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--teal-dark)]">
          Insight
        </p>
        <h1 className="mt-4 font-display text-5xl">{slug}</h1>
        <p className="mt-6 text-xl text-slate-600">
          Article content will come from WordPress posts.
        </p>
      </div>
    </section>
  );
}
