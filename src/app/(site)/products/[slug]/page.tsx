export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <section className="min-h-screen bg-white px-6 py-20 text-[color:var(--navy)]">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--teal-dark)]">
          Product
        </p>
        <h1 className="mt-4 font-display text-5xl">{slug}</h1>
        <p className="mt-6 text-xl text-slate-600">
          Product detail content will come from WordPress after verification.
        </p>
      </div>
    </section>
  );
}
