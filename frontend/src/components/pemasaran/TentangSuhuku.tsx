import type { ApaItuSuhuku } from "@/types/konten";

export function TentangSuhuku({ id, data }: { id: string; data: ApaItuSuhuku }) {
  return (
    <section id={id} className="px-6 py-16">
      <p className="text-sm font-medium text-accent">{data.label}</p>
      <h2 className="mt-2 text-3xl font-bold">{data.judul}</h2>
      <p className="mt-3 max-w-2xl">{data.deskripsi}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {data.kartu.map((k) => (
          <article key={k.judul} className="rounded border p-6">
            <h3 className="font-semibold">{k.judul}</h3>
            <p className="mt-2 text-sm">{k.isi}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
