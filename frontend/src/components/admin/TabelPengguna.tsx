"use client";

import { useMemo, useState } from "react";
import type { PenggunaAdmin } from "@/types/admin";
import { formatTanggal, namaPaket } from "@/lib/admin";

type Filter = "semua" | "berbayar" | "belum";

const FILTER: { nilai: Filter; label: string }[] = [
  { nilai: "semua", label: "Semua" },
  { nilai: "berbayar", label: "Berbayar" },
  { nilai: "belum", label: "Belum berlangganan" },
];

const WARNA_PAKET: Record<string, string> = {
  starter: "text-cold",
  growth: "text-accent",
  pro: "text-good",
};

export function TabelPengguna({ data }: { data: PenggunaAdmin[] }) {
  const [cari, setCari] = useState("");
  const [filter, setFilter] = useState<Filter>("semua");

  const tampil = useMemo(() => {
    const kata = cari.trim().toLowerCase();
    return data.filter((u) => {
      if (filter === "berbayar" && u.paket === null) return false;
      if (filter === "belum" && u.paket !== null) return false;
      if (!kata) return true;
      return u.namaUsaha.toLowerCase().includes(kata) || u.email.toLowerCase().includes(kata);
    });
  }, [data, cari, filter]);

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div role="tablist" aria-label="Filter pengguna" className="flex flex-wrap gap-2 text-sm">
          {FILTER.map((f) => (
            <button
              key={f.nilai}
              role="tab"
              type="button"
              aria-selected={filter === f.nilai}
              onClick={() => setFilter(f.nilai)}
              className={`rounded border px-3 py-1 transition-colors duration-200 ${
                filter === f.nilai ? "bg-accent text-white" : "tombol-garis"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm">
          <span className="sr-only">Cari pengguna</span>
          <input
            type="search"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="Cari usaha atau email"
            className="w-full rounded border bg-transparent px-3 py-2 md:w-64"
          />
        </label>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="text-left">
              <th scope="col" className="border-b p-3 font-medium opacity-70">Usaha</th>
              <th scope="col" className="border-b p-3 font-medium opacity-70">Email</th>
              <th scope="col" className="border-b p-3 font-medium opacity-70">Paket</th>
              <th scope="col" className="border-b p-3 font-medium opacity-70">Periode</th>
              <th scope="col" className="border-b p-3 text-right font-medium opacity-70">Kontak</th>
              <th scope="col" className="border-b p-3 font-medium opacity-70">Bergabung</th>
            </tr>
          </thead>
          <tbody>
            {tampil.map((u) => (
              <tr key={u.id} className="transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5">
                <th scope="row" className="border-b p-3 text-left font-medium">{u.namaUsaha}</th>
                <td className="border-b p-3">{u.email}</td>
                <td className={`border-b p-3 font-medium ${u.paket ? WARNA_PAKET[u.paket] : "opacity-60"}`}>
                  {namaPaket(u.paket)}
                </td>
                <td className="border-b p-3">{u.periode ? (u.periode === "tahunan" ? "Tahunan" : "Bulanan") : "—"}</td>
                <td className="border-b p-3 text-right tabular-nums">{u.jumlahKontak.toLocaleString("id-ID")}</td>
                <td className="border-b p-3">{formatTanggal(u.bergabung)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {tampil.length === 0 && <p className="p-6 text-center text-sm opacity-70">Tidak ada pengguna yang cocok.</p>}
      </div>
      <p className="mt-3 text-xs opacity-60">Menampilkan {tampil.length} dari {data.length} pengguna.</p>
    </div>
  );
}
