import type { BatangBulanan as TipeBatang } from "@/types/admin";

// Grafik batang sederhana tanpa pustaka tambahan. Tinggi batang relatif terhadap nilai terbesar.
export function BatangBulanan({ data }: { data: TipeBatang[] }) {
  const maks = Math.max(...data.map((d) => d.jumlah), 1);
  return (
    <figure>
      <div className="flex h-44 items-end gap-3 border-b pb-2" role="img" aria-label="Grafik pengguna baru per bulan">
        {data.map((d, i) => (
          <div key={d.bulan} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className="text-xs tabular-nums opacity-70">{d.jumlah}</span>
            <div
              className="anim-batang kolom-sorot w-full rounded-t border-x border-t"
              style={{ height: `${(d.jumlah / maks) * 100}%`, animationDelay: `${i * 80}ms` }}
            />
            <span className="text-xs opacity-60">{d.bulan}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}
