"use client";

import { useState } from "react";
import { contohKpi, contohKontak, labelFilter } from "@/content/dashboard";
import { filterKontak } from "@/features/filter-kontak/filter";
import type { FilterTab } from "@/types/kontak";
import { TabelKontak } from "./TabelKontak";

export function PanelDashboardContoh() {
  const [tab, setTab] = useState<FilterTab>("semua");
  return (
    <div className="rounded border p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Ringkasan minggu ini</h3>
        <span className="text-xs opacity-60">Data contoh</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div><p className="text-2xl font-bold">{contohKpi.prospekAktif}</p><p className="text-xs">Prospek aktif</p></div>
        <div><p className="text-2xl font-bold">{contohKpi.skorTinggi}</p><p className="text-xs">Skor tinggi</p></div>
        <div><p className="text-2xl font-bold">{contohKpi.mulaiMenjauh}</p><p className="text-xs">Mulai menjauh</p></div>
      </div>
      <div role="tablist" className="mt-4 flex gap-2 text-sm">
        {(Object.keys(labelFilter) as (keyof typeof labelFilter)[]).map((k) => {
          const nilai: FilterTab = k === "semua" ? "semua" : k === "siapBeli" ? "siap-beli" : "perlu-dihubungi-ulang";
          const aktif = tab === nilai;
          return (
            <button
              key={k}
              role="tab"
              aria-selected={aktif}
              onClick={() => setTab(nilai)}
              className={`rounded border px-3 py-1 ${aktif ? "bg-accent text-white" : ""}`}
            >
              {labelFilter[k]}
            </button>
          );
        })}
      </div>
      <TabelKontak rows={filterKontak(contohKontak, tab)} />
      <p className="mt-3 text-xs opacity-60">Skor dihitung dari frekuensi belanja, nilai transaksi, dan jarak waktu sejak transaksi terakhir.</p>
    </div>
  );
}
