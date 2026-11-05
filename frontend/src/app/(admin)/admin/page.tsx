import { BatangBulanan } from "@/components/admin/BatangBulanan";
import { KartuKpi } from "@/components/admin/KartuKpi";
import { penggunaBaruPerBulan, penggunaContoh } from "@/content/admin";
import { formatTanggal, hitungKpi, namaPaket } from "@/lib/admin";
import { formatRupiah } from "@/lib/format";

export default function HalamanRingkasanAdmin() {
  const kpi = hitungKpi(penggunaContoh);
  const terbaru = [...penggunaContoh].sort((a, b) => b.bergabung.localeCompare(a.bergabung)).slice(0, 5);

  return (
    <>
      <h1 className="text-3xl font-bold">Ringkasan</h1>
      <p className="mt-2 text-sm opacity-70">Data contoh. Angka dihitung dari daftar pengguna contoh.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KartuKpi label="Total pengguna" nilai={kpi.totalPengguna.toLocaleString("id-ID")} />
        <KartuKpi label="Pengguna berbayar" nilai={kpi.berbayar.toLocaleString("id-ID")} catatan={`${kpi.totalPengguna - kpi.berbayar} belum berlangganan`} />
        <KartuKpi label="Perkiraan pendapatan per bulan" nilai={formatRupiah(kpi.pendapatanBulanan)} catatan="Tahunan dibagi 12" />
        <KartuKpi label="Total kontak tercatat" nilai={kpi.totalKontak.toLocaleString("id-ID")} />
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <section className="tombol-garis rounded border p-6">
          <h2 className="font-semibold">Pengguna baru per bulan</h2>
          <p className="mt-1 text-xs opacity-60">Contoh 6 bulan terakhir</p>
          <div className="mt-6">
            <BatangBulanan data={penggunaBaruPerBulan} />
          </div>
        </section>

        <section className="tombol-garis rounded border p-6">
          <h2 className="font-semibold">Pengguna terbaru</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="text-left">
                  <th scope="col" className="border-b p-2 font-medium opacity-70">Usaha</th>
                  <th scope="col" className="border-b p-2 font-medium opacity-70">Paket</th>
                  <th scope="col" className="border-b p-2 font-medium opacity-70">Bergabung</th>
                </tr>
              </thead>
              <tbody>
                {terbaru.map((u) => (
                  <tr key={u.id} className="transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5">
                    <td className="border-b p-2 font-medium">{u.namaUsaha}</td>
                    <td className="border-b p-2">{namaPaket(u.paket)}</td>
                    <td className="border-b p-2">{formatTanggal(u.bergabung)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
