// Data contoh untuk pratinjau dashboard admin. Bukan data pengguna nyata.
// Ganti dengan pengambilan data dari route handler /api saat sudah tersedia.
import type { BatangBulanan, PenggunaAdmin } from "@/types/admin";

export const penggunaContoh: PenggunaAdmin[] = [
  { id: "pg1", namaUsaha: "Usaha Contoh 1", email: "contoh1@contoh.test", paket: "growth", periode: "tahunan", jumlahKontak: 1840, bergabung: "2026-05-04", berakhir: "2027-05-04" },
  { id: "pg2", namaUsaha: "Usaha Contoh 2", email: "contoh2@contoh.test", paket: "starter", periode: "bulanan", jumlahKontak: 312, bergabung: "2026-06-18", berakhir: "2026-12-18" },
  { id: "pg3", namaUsaha: "Usaha Contoh 3", email: "contoh3@contoh.test", paket: "pro", periode: "tahunan", jumlahKontak: 4210, bergabung: "2026-07-02", berakhir: "2027-07-02" },
  { id: "pg4", namaUsaha: "Usaha Contoh 4", email: "contoh4@contoh.test", paket: null, periode: null, jumlahKontak: 87, bergabung: "2026-08-21", berakhir: null },
  { id: "pg5", namaUsaha: "Usaha Contoh 5", email: "contoh5@contoh.test", paket: "growth", periode: "bulanan", jumlahKontak: 2760, bergabung: "2026-08-30", berakhir: "2026-11-30" },
  { id: "pg6", namaUsaha: "Usaha Contoh 6", email: "contoh6@contoh.test", paket: "starter", periode: "tahunan", jumlahKontak: 455, bergabung: "2026-09-09", berakhir: "2027-09-09" },
  { id: "pg7", namaUsaha: "Usaha Contoh 7", email: "contoh7@contoh.test", paket: null, periode: null, jumlahKontak: 12, bergabung: "2026-10-03", berakhir: null },
  { id: "pg8", namaUsaha: "Usaha Contoh 8", email: "contoh8@contoh.test", paket: "growth", periode: "bulanan", jumlahKontak: 980, bergabung: "2026-10-22", berakhir: "2026-11-22" },
];

export const penggunaBaruPerBulan: BatangBulanan[] = [
  { bulan: "Mei", jumlah: 3 },
  { bulan: "Jun", jumlah: 4 },
  { bulan: "Jul", jumlah: 5 },
  { bulan: "Agu", jumlah: 6 },
  { bulan: "Sep", jumlah: 4 },
  { bulan: "Okt", jumlah: 7 },
];

export const teksAdmin = {
  label: "Admin",
  catatan: "Data contoh. Belum ada autentikasi, jadi halaman ini belum boleh dibuka publik.",
  sidebarCatatan: "Pratinjau. Data contoh, belum terhubung ke basis data.",
};
