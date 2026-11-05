import type { Penutup } from "@/types/konten";

export function CtaPenutup({ data }: { data: Penutup }) {
  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-3xl font-bold">{data.judul}</h2>
      <p className="mt-3">{data.deskripsi}</p>
      <div className="mt-6 flex justify-center gap-3">
        <a href="#harga" className="rounded bg-accent px-4 py-2 text-white">{data.ctaUtama}</a>
        <a href="#produk" className="rounded border px-4 py-2">{data.ctaKedua}</a>
      </div>
    </section>
  );
}
