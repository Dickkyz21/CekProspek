export type PaketNama = "starter" | "growth" | "pro";
export type PeriodeLangganan = "bulanan" | "tahunan";

export type PenggunaAdmin = {
  id: string;
  namaUsaha: string;
  email: string;
  paket: PaketNama | null;
  periode: PeriodeLangganan | null;
  jumlahKontak: number;
  bergabung: string; // ISO 8601, tanggal saja
  berakhir: string | null; // ISO 8601, tanggal saja. null jika belum berlangganan
};

export type BatangBulanan = { bulan: string; jumlah: number };
