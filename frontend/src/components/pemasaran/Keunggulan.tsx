import type { Keunggulan as TipeKeunggulan } from "@/types/konten";

export function Keunggulan({ id, data }: { id: string; data: TipeKeunggulan }) {
  return (
    <section id={id} className="px-6 py-16">
      <p className="text-sm font-medium text-accent">{data.label}</p>
      <h2 className="mt-2 text-3xl font-bold">{data.judul}</h2>
      <p className="mt-3 max-w-2xl">{data.deskripsi}</p>
      {/* Tabel digulir horizontal di dalam wadahnya agar halaman tidak ikut bergeser */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              {data.kolom.map((k, i) => (
                <th
                  key={k}
                  className={`border-b p-3 text-left ${i === 2 ? "kolom-sorot font-semibold" : ""}`}
                >
                  {k}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.baris.map((b) => (
              <tr key={b.aspek}>
                <th className="border-b p-3 text-left font-medium">{b.aspek}</th>
                {b.nilai.map((n, i) => (
                  <td key={i} className={`border-b p-3 ${i === 2 ? "kolom-sorot" : ""}`}>{n}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs opacity-60">{data.catatan}</p>
    </section>
  );
}
