import type { Kontak, FilterTab, Tingkat } from "@/types/kontak";

// Catatan: tab "perlu-dihubungi-ulang" pada pratinjau hanya memunculkan `cold`.
// Keputusan apakah `warm` ikut perlu diambil sebelum produksi (lihat ADR-002).
const TINGKAT_PER_TAB: Record<FilterTab, Tingkat[] | null> = {
  semua: null,
  "siap-beli": ["hot"],
  "perlu-dihubungi-ulang": ["cold"],
};

export function filterKontak(rows: Kontak[], tab: FilterTab): Kontak[] {
  const izin = TINGKAT_PER_TAB[tab];
  return izin === null ? rows : rows.filter((r) => izin.includes(r.tingkat));
}
