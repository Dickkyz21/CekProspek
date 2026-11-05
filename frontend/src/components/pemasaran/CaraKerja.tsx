import type { CaraKerja as TipeCaraKerja } from "@/types/konten";

export function CaraKerja({ id, data }: { id: string; data: TipeCaraKerja }) {
  return (
    <section id={id} className="px-6 py-16">
      <p className="text-sm font-medium text-accent">{data.label}</p>
      <h2 className="mt-2 text-3xl font-bold">{data.judul}</h2>
      <ol className="mt-8 grid gap-6 md:grid-cols-3">
        {data.langkah.map((l, i) => (
          <li key={l.judul} className="rounded border p-6">
            <span className="text-sm opacity-60">Langkah {i + 1}</span>
            <h3 className="mt-1 font-semibold">{l.judul}</h3>
            <p className="mt-2 text-sm">{l.isi}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
