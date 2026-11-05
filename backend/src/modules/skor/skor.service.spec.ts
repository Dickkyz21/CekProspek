import { SkorService } from "./skor.service";

describe("SkorService", () => {
  const svc = new SkorService();

  it("memberi tingkat hot untuk pelanggan rutin dan baru belanja", () => {
    const hasil = svc.hitung({
      jumlahTransaksi: 10, jumlahTransaksiMaks: 10,
      totalNilai: 5_000_000, totalNilaiMaks: 5_000_000,
      hariSejakTransaksiTerakhir: 5,
    });
    expect(hasil.tingkat).toBe("hot");
  });

  it("memberi tingkat cold untuk pelanggan yang sudah lama tidak belanja", () => {
    const hasil = svc.hitung({
      jumlahTransaksi: 1, jumlahTransaksiMaks: 10,
      totalNilai: 100_000, totalNilaiMaks: 5_000_000,
      hariSejakTransaksiTerakhir: 90,
    });
    expect(hasil.tingkat).toBe("cold");
  });

  it("skor selalu di antara 0 dan 100", () => {
    const hasil = svc.hitung({
      jumlahTransaksi: 0, jumlahTransaksiMaks: 0,
      totalNilai: 0, totalNilaiMaks: 0,
      hariSejakTransaksiTerakhir: null,
    });
    expect(hasil.skor).toBeGreaterThanOrEqual(0);
    expect(hasil.skor).toBeLessThanOrEqual(100);
  });
});
