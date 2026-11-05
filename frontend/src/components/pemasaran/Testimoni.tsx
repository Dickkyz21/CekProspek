import type { Testimoni as TipeTestimoni } from "@/types/konten";

export function Testimoni({ id, data }: { id: string; data: TipeTestimoni }) {
  if (!data.tampil) return null;
  return (
    <section id={id} className="px-6 py-16">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm font-medium text-accent">{data.label}</p>
        <span className="rounded border border-dashed px-2 py-0.5 text-xs opacity-70">Dummy, belum final</span>
      </div>
      <h2 className="mt-2 text-3xl font-bold">{data.judul}</h2>
      <p className="mt-3 text-sm opacity-70">{data.catatan}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {data.kartu.map((k) => (
          <figure key={k.nama} className="tombol-garis flex flex-col rounded border p-6">
            <blockquote className="flex-1 text-sm">&ldquo;{k.isi}&rdquo;</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 text-sm">
              <span aria-hidden="true" className="kolom-sorot grid h-9 w-9 place-items-center rounded-full text-xs font-semibold text-accent">
                {k.inisial}
              </span>
              <span>
                <span className="block font-medium">{k.nama}</span>
                <span className="block text-xs opacity-70">{k.usaha}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
