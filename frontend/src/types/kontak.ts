export type Tingkat = "hot" | "warm" | "cold";

export type Kontak = {
  id: string;
  nama: string;
  keterangan: string;
  status: string;
  skor: number; // 0 sampai 100
  tingkat: Tingkat;
};

export type FilterTab = "semua" | "siap-beli" | "perlu-dihubungi-ulang";
