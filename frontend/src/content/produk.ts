// [KONFIRMASI] Pengiriman akses ke email setelah pembayaran belum tersedia pada pratinjau.
export type Produk = { jenis: string; nama: string; deskripsi: string; harga: number };

export const produk: Produk[] = [
  { jenis: "Template", nama: "Landing page penjualan", deskripsi: "Halaman satu layar siap pakai dengan bagian produk, testimoni, dan tombol WhatsApp.", harga: 350000 },
  { jenis: "Paket iklan", nama: "Setup iklan Meta dan TikTok", deskripsi: "Kampanye awal lengkap dengan target audiens, anggaran harian, dan laporan ROAS mingguan.", harga: 1200000 },
  { jenis: "Aplikasi", nama: "Kasir dan stok sederhana", deskripsi: "Aplikasi kasir dan inventori untuk satu komputer, dibuat dengan Python.", harga: 900000 },
];

export const teksProduk = {
  label: "Produk siap pakai",
  judul: "Beli sekarang, langsung bisa dipakai.",
  deskripsi: "Pembayaran selesai, akses dikirim ke email Anda. Tidak perlu menunggu diskusi.",
  keranjangKosong: "Keranjang masih kosong.",
  ringkasan: "{jumlah} item, total Rp {total}",
  pratinjauCheckout: "Ini pratinjau. Pembayaran akan dihubungkan saat situs live.",
};
