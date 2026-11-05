// [KONFIRMASI] Semua harga masih contoh dan belum final.
export type Paket = {
  nama: string;
  bulanan: number;
  tahunan: number;
  fitur: string[];
  tombol: string;
  label?: string;
};

export const paket: Paket[] = [
  { nama: "Starter", bulanan: 99000, tahunan: 950000, fitur: ["Hingga 500 kontak", "Skor prospek dasar", "Ringkasan mingguan"], tombol: "Mulai gratis" },
  { nama: "Growth", bulanan: 249000, tahunan: 2390000, fitur: ["Hingga 5.000 kontak", "Skor pelanggan dan risiko berhenti belanja", "Notifikasi WhatsApp", "Impor dari Shopee"], tombol: "Mulai uji coba 14 hari", label: "Paling populer" },
  { nama: "Pro", bulanan: 590000, tahunan: 5660000, fitur: ["Kontak tidak terbatas", "Akses API", "Hingga 5 anggota tim", "Dukungan prioritas"], tombol: "Hubungi kami" },
];

// Baris perbandingan untuk tabel. Urutan nilai: [Starter, Growth, Pro].
// true = termasuk, null = tidak termasuk, string = nilai teks.
// [KONFIRMASI] Sel yang tidak disebut eksplisit di transkrip ditandai di bawah.
export type NilaiFitur = boolean | string | null;
export type BarisFitur = { fitur: string; nilai: [NilaiFitur, NilaiFitur, NilaiFitur] };

export const tabelFitur: BarisFitur[] = [
  { fitur: "Jumlah kontak", nilai: ["500", "5.000", "Tidak terbatas"] },
  { fitur: "Skor prospek dasar", nilai: [true, null, null] }, // [KONFIRMASI] Growth dan Pro belum disebut
  { fitur: "Skor pelanggan dan risiko berhenti belanja", nilai: [null, true, true] }, // [KONFIRMASI] Pro belum disebut
  { fitur: "Ringkasan mingguan", nilai: [true, null, null] }, // [KONFIRMASI] Growth dan Pro belum disebut
  { fitur: "Notifikasi WhatsApp", nilai: [null, true, true] },
  { fitur: "Impor dari Shopee", nilai: [null, true, true] },
  { fitur: "Akses API", nilai: [null, null, true] },
  { fitur: "Anggota tim", nilai: [null, null, "Hingga 5"] },
  { fitur: "Dukungan prioritas", nilai: [null, null, true] },
];

export const teksHarga = {
  label: "Harga langganan",
  judul: "Pilih paket sesuai ukuran usaha Anda.",
  catatan: "Harga ini contoh untuk pratinjau dan belum final.",
  bulanan: "Bulanan",
  tahunan: "Tahunan",
  periode: "Pilih periode pembayaran",
  fitur: "Fitur",
  termasuk: "Termasuk",
  tidakTermasuk: "Tidak termasuk",
  setara: "setara",
  hemat: "Hemat sekitar",
};
