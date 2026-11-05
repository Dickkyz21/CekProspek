import { paket } from "@/content/harga";
import type { PaketNama, PenggunaAdmin } from "@/types/admin";

// Tanggal selalu ditampilkan dengan zona waktu tetap agar hasil render server dan browser sama.
export function formatTanggal(iso: string): string {
  return new Date(`${iso}T00:00:00+07:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  });
}

export function namaPaket(p: PaketNama | null): string {
  if (!p) return "Belum berlangganan";
  return p.charAt(0).toUpperCase() + p.slice(1);
}

// Nilai langganan per bulan. Paket tahunan dibagi 12 agar bisa dibandingkan dengan bulanan.
export function nilaiBulanan(u: PenggunaAdmin): number {
  if (!u.paket || !u.periode) return 0;
  const harga = paket.find((p) => p.nama.toLowerCase() === u.paket);
  if (!harga) return 0;
  return u.periode === "tahunan" ? Math.round(harga.tahunan / 12) : harga.bulanan;
}

export function hitungKpi(daftar: PenggunaAdmin[]) {
  const berbayar = daftar.filter((u) => u.paket !== null);
  return {
    totalPengguna: daftar.length,
    berbayar: berbayar.length,
    pendapatanBulanan: daftar.reduce((jumlah, u) => jumlah + nilaiBulanan(u), 0),
    totalKontak: daftar.reduce((jumlah, u) => jumlah + u.jumlahKontak, 0),
  };
}
