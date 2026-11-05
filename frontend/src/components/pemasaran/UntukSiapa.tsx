import type { UntukSiapa as TipeUntukSiapa } from "@/types/konten";

export function UntukSiapa({ data }: { data: TipeUntukSiapa }) {
  return (
    <section id="untuk" className="px-6 py-16">
      <p className="text-sm font-medium text-accent">{data.label}</p>
      <h2 className="mt-2 text-3xl font-bold">{data.judul}</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {data.kartu.map((k) => (
          <article key={k.kategori} className="rounded border p-6">
            <span className="text-xs font-medium text-accent">{k.segmen}</span>
            <h3 className="mt-1 font-semibold">{k.kategori}</h3>
            <p className="mt-2 text-sm">{k.masalah}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
