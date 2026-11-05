import { Injectable } from "@nestjs/common";
import { skorConfig } from "./skor.config";

export type MasukanSkor = {
  jumlahTransaksi: number;     // dalam periode acuan
  jumlahTransaksiMaks: number; // nilai tertinggi di antara kontak (untuk normalisasi)
  totalNilai: number;
  totalNilaiMaks: number;
  hariSejakTransaksiTerakhir: number | null; // null jika belum pernah transaksi
};

export type HasilSkor = { skor: number; tingkat: "hot" | "warm" | "cold" };

@Injectable()
export class SkorService {
  hitung(m: MasukanSkor): HasilSkor {
    const { bobot, kesegaranNolSetelahHari, ambangTingkat } = skorConfig;
    const frekuensi = m.jumlahTransaksiMaks > 0 ? (m.jumlahTransaksi / m.jumlahTransaksiMaks) * 100 : 0;
    const nilai = m.totalNilaiMaks > 0 ? (m.totalNilai / m.totalNilaiMaks) * 100 : 0;
    const kesegaran =
      m.hariSejakTransaksiTerakhir === null
        ? 0
        : Math.max(0, 100 - (m.hariSejakTransaksiTerakhir / kesegaranNolSetelahHari) * 100);

    const skor = Math.round(bobot.frekuensi * frekuensi + bobot.nilai * nilai + bobot.kesegaran * kesegaran);
    const tingkat = skor >= ambangTingkat.hot ? "hot" : skor >= ambangTingkat.warm ? "warm" : "cold";
    return { skor: Math.min(100, Math.max(0, skor)), tingkat };
  }
}
