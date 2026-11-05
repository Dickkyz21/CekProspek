"use client";

import { useEffect, useState } from "react";
import { paket, tabelFitur, teksHarga, type NilaiFitur } from "@/content/harga";
import { formatRupiah } from "@/lib/format";

type Periode = "bulanan" | "tahunan";

// Persentase hemat tahunan dihitung dari data paket, bukan ditulis tangan.
const hematPersen = Math.round(
  Math.min(...paket.map((p) => (1 - p.tahunan / (p.bulanan * 12)) * 100))
);

// Angka harga bergerak halus ke nilai baru. Dimatikan jika pengguna memilih gerak minimal.
function useAngkaBergerak(target: number, durasi = 400) {
  const [nilai, setNilai] = useState(target);
  const [dari, setDari] = useState(target);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setNilai(target);
      setDari(target);
      return;
    }
    const mulai = performance.now();
    let frame = 0;
    const tick = (waktu: number) => {
      const p = Math.min(1, (waktu - mulai) / durasi);
      const e = 1 - Math.pow(1 - p, 3); // ease-out kubik
      const v = Math.round(dari + (target - dari) * e);
      setNilai(v);
      if (p < 1) frame = requestAnimationFrame(tick);
      else setDari(target);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // dari sengaja tidak masuk dependensi: animasi hanya dimulai saat target berubah
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, durasi]);

  return nilai;
}

function AngkaHarga({ nilai }: { nilai: number }) {
  const angka = useAngkaBergerak(nilai);
  return <>{formatRupiah(angka)}</>;
}

function SelSusunan({ nilai }: { nilai: NilaiFitur }) {
  if (nilai === true) return <span aria-label={teksHarga.termasuk} className="text-good">✓</span>;
  if (nilai === null || nilai === false)
    return <span aria-label={teksHarga.tidakTermasuk} className="opacity-40">—</span>;
  return <>{nilai}</>;
}

export function HargaLangganan({ id }: { id: string }) {
  const [periode, setPeriode] = useState<Periode>("bulanan");
  const tahunan = periode === "tahunan";

  return (
    <section id={id} className="px-6 py-16">
      <p className="text-sm font-medium text-accent">{teksHarga.label}</p>
      <h2 className="mt-2 text-3xl font-bold">{teksHarga.judul}</h2>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div role="group" aria-label={teksHarga.periode} className="relative grid grid-cols-2 rounded border p-1 text-sm">
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded bg-accent transition-transform duration-300 ease-out ${tahunan ? "translate-x-full" : ""}`}
          />
          {(["bulanan", "tahunan"] as const).map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={periode === p}
              onClick={() => setPeriode(p)}
              className={`relative z-10 rounded px-4 py-1 transition-colors duration-300 ${periode === p ? "text-white" : ""}`}
            >
              {p === "bulanan" ? teksHarga.bulanan : teksHarga.tahunan}
            </button>
          ))}
        </div>
        <span
          className={`text-xs font-medium text-good transition-opacity duration-300 ${tahunan ? "opacity-100" : "opacity-0"}`}
          aria-hidden={!tahunan}
        >
          {teksHarga.hemat} {hematPersen}%
        </span>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              <th scope="col" className="border-b p-3 text-left font-medium opacity-70">{teksHarga.fitur}</th>
              {paket.map((p) => {
                const sorot = Boolean(p.label);
                const harga = tahunan ? p.tahunan : p.bulanan;
                return (
                  <th
                    scope="col"
                    key={p.nama}
                    className={`border-b p-4 text-left align-top font-normal ${sorot ? "kolom-sorot" : ""}`}
                  >
                    {p.label && (
                      <span className="inline-block rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-white">
                        {p.label}
                      </span>
                    )}
                    <span className="mt-1 block text-lg font-semibold">{p.nama}</span>
                    <span className="mt-2 block whitespace-nowrap text-2xl font-bold">
                      <AngkaHarga nilai={harga} />
                      <span className="text-sm font-normal"> /{tahunan ? "tahun" : "bulan"}</span>
                    </span>
                    {tahunan && (
                      <span className="block text-xs opacity-70">
                        {teksHarga.setara} {formatRupiah(Math.round(p.tahunan / 12))}/bulan
                      </span>
                    )}
                    <a
                      href="#"
                      className={`mt-4 inline-block rounded px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        sorot ? "bg-accent text-white hover:opacity-90" : "tombol-garis border"
                      }`}
                    >
                      {p.tombol}
                    </a>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tabelFitur.map((b) => (
              <tr key={b.fitur} className="transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5">
                <th scope="row" className="border-b p-3 text-left font-medium">{b.fitur}</th>
                {b.nilai.map((n, i) => (
                  <td key={i} className={`border-b p-3 ${i === 1 ? "kolom-sorot" : ""}`}>
                    <SelSusunan nilai={n} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs opacity-60">{teksHarga.catatan}</p>
    </section>
  );
}
