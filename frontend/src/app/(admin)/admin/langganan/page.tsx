import { KartuKpi } from "@/components/admin/KartuKpi";
import { penggunaContoh } from "@/content/admin";
import { paket } from "@/content/harga";
import { formatTanggal, namaPaket, nilaiBulanan } from "@/lib/admin";
import { formatRupiah } from "@/lib/format";

export default function HalamanLanggananAdmin() {
  const berbayar = penggunaContoh
    .filter((u) => u.paket !== null)
    .sort((a, b) => (a.berakhir ?? "").localeCompare(b.berakhir ?? ""));

  return (
    <>
      <h1 className="text-3xl font-bold">Langganan</h1>
      <p className="mt-2 text-sm opacity-70">Jumlah pengguna dan perkiraan pendapatan per paket. Harga paket masih contoh.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {paket.map((p) => {
          const anggota = penggunaContoh.filter((u) => u.paket === p.nama.toLowerCase());
          const pendapatan = anggota.reduce((j, u) => j + nilaiBulanan(u), 0);
          return (
            <KartuKpi
              key={p.nama}
              label={`Paket ${p.nama}`}
              nilai={`${anggota.length} pengguna`}
              catatan={`Perkiraan ${formatRupiah(pendapatan)} per bulan`}
            />
          );
        })}
      </div>

      <div className="tombol-garis mt-8 rounded border p-6">
        <h2 className="font-semibold">Langganan berbayar</h2>
        <p className="mt-1 text-xs opacity-60">Diurutkan dari masa berlaku paling dekat berakhir.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="text-left">
                <th scope="col" className="border-b p-3 font-medium opacity-70">Usaha</th>
                <th scope="col" className="border-b p-3 font-medium opacity-70">Paket</th>
                <th scope="col" className="border-b p-3 font-medium opacity-70">Periode</th>
                <th scope="col" className="border-b p-3 text-right font-medium opacity-70">Nilai per bulan</th>
                <th scope="col" className="border-b p-3 font-medium opacity-70">Berakhir</th>
              </tr>
            </thead>
            <tbody>
              {berbayar.map((u) => (
                <tr key={u.id} className="transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5">
                  <th scope="row" className="border-b p-3 text-left font-medium">{u.namaUsaha}</th>
                  <td className="border-b p-3">{namaPaket(u.paket)}</td>
                  <td className="border-b p-3">{u.periode === "tahunan" ? "Tahunan" : "Bulanan"}</td>
                  <td className="border-b p-3 text-right tabular-nums">{formatRupiah(nilaiBulanan(u))}</td>
                  <td className="border-b p-3">{u.berakhir ? formatTanggal(u.berakhir) : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
