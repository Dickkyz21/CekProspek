// Data contoh, bukan data pelanggan nyata.
import type { Kontak } from "@/types/kontak";

export const contohKpi = { prospekAktif: 128, skorTinggi: 34, mulaiMenjauh: 12 }; // total, bukan hitung dari daftar

export const contohKontak: Kontak[] = [
  { id: "c1", nama: "Dewi Lestari", keterangan: "Sering membuka halaman harga", status: "Siap beli", skor: 87, tingkat: "hot" },
  { id: "c2", nama: "Toko Bangun Jaya", keterangan: "Menanyakan stok, belum membeli", status: "Hangat", skor: 61, tingkat: "warm" },
  { id: "c3", nama: "Rina Pratama", keterangan: "Pelanggan, 73 hari tanpa belanja", status: "Menjauh", skor: 29, tingkat: "cold" },
  { id: "c4", nama: "Agus Setiawan", keterangan: "Pelanggan, belanja rutin tiap 30 hari", status: "Siap beli", skor: 81, tingkat: "hot" },
];

export const labelFilter = { semua: "Semua", siapBeli: "Siap beli", perluDihubungiUlang: "Perlu dihubungi ulang" };
