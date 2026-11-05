// Format Rupiah Indonesia tanpa desimal, mis. 350000 -> "Rp 350.000"
export function formatRupiah(angka: number): string {
  return "Rp " + new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(angka);
}
