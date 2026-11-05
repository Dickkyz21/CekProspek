import type { BerandaHero } from "@/types/konten";
import { PanelDashboardContoh } from "@/components/dashboard/PanelDashboardContoh";

export function Hero({ data }: { data: BerandaHero }) {
  return (
    <section className="grid gap-10 px-6 py-16 md:grid-cols-2">
      <div className="anim-naik">
        <p className="text-sm font-medium text-accent">{data.label}</p>
        <h1 className="mt-3 text-4xl font-bold">{data.judul}</h1>
        <p className="mt-4">{data.lead}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#harga" className="rounded bg-accent px-4 py-2 text-white transition-opacity hover:opacity-90">{data.ctaUtama}</a>
          <a href="#produk" className="tombol-garis rounded border px-4 py-2">{data.ctaKedua}</a>
        </div>
        <p className="mt-3 text-xs opacity-70">{data.catatan}</p>
      </div>
      <div className="anim-naik-tunda">
        <PanelDashboardContoh />
      </div>
    </section>
  );
}
