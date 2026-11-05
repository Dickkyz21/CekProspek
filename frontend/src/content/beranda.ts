// Sumber: docs/spesifikasi/transkrip-data-suhuku-detail.md
// Ubah teks di sini saja. Struktur halaman ada di components/.
// Bagian bertanda PLACEHOLDER berisi data dummy. Ganti dengan data asli sebelum publikasi.
import type { BerandaHero, BuktiSosial, ApaItuSuhuku, Keunggulan, UntukSiapa, CaraKerja, Testimoni, FAQ, Penutup, Footer } from "@/types/konten";

export const beranda: {
  hero: BerandaHero;
  buktiSosial: BuktiSosial;
  apaItuSuhuku: ApaItuSuhuku;
  keunggulan: Keunggulan;
  untukSiapa: UntukSiapa;
  caraKerja: CaraKerja;
  testimoni: Testimoni;
  faq: FAQ;
  penutup: Penutup;
  footer: Footer;
} = {
  hero: {
    label: "Dashboard prospek dan pelanggan",
    judul: "Ketahui siapa yang siap beli sebelum Anda menghubungi mereka.",
    lead: "Suhuku membaca data kontak dan transaksi Anda, memberi skor pada setiap prospek dan pelanggan, lalu menunjukkan siapa yang perlu dihubungi hari ini.",
    ctaUtama: "Mulai uji coba 14 hari",
    ctaKedua: "Lihat produk siap pakai",
    catatan: "Tanpa kartu kredit. Batalkan kapan saja.",
  },
  buktiSosial: {
    label: "Logo klien (PLACEHOLDER)",
    brand: ["Logo 1", "Logo 2", "Logo 3"], // PLACEHOLDER: ganti dengan logo klien yang sudah dikonfirmasi
    statistik: ["100+ klien", "200+ proyek selesai"], // [KONFIRMASI] sebelum produksi
  },
  apaItuSuhuku: {
    label: "Apa itu Suhuku",
    judul: "Alat kerja harian untuk menjual lebih banyak ke orang yang sama.",
    deskripsi:
      "Banyak usaha kecil sudah punya ratusan kontak dan pelanggan, tetapi tidak tahu siapa yang harus dihubungi minggu ini. Suhuku menjawab pertanyaan itu setiap pagi.",
    kartu: [
      { judul: "Untuk prospek", isi: "Lihat siapa yang sudah bertanya, membuka halaman harga, atau meninggalkan keranjang, lengkap dengan skor kemungkinan membeli." },
      { judul: "Untuk pelanggan", isi: "Ketahui siapa yang belanja rutin, siapa yang layak diberi penawaran ulang, dan siapa yang mulai berhenti sebelum benar-benar pergi." },
      { judul: "Untuk tim", isi: "Satu daftar prioritas untuk semua orang di tim, tanpa perlu membuka spreadsheet berbeda-beda setiap hari." },
    ],
  },
  keunggulan: {
    label: "Keunggulan",
    judul: "Dibuat untuk UMKM, bukan untuk perusahaan besar.",
    deskripsi:
      "Ada dua jenis alat yang biasa dipakai pemilik usaha kecil. Suhuku berada di tengah: sederhana seperti kasir, tetapi fokus pada siapa yang akan membeli.",
    kolom: ["Aspek", "CRM perusahaan", "Aplikasi kasir all-in-one", "Suhuku"],
    baris: [
      { aspek: "Fokus utama", nilai: ["Pipeline penjualan tim besar", "Transaksi, stok, dan pesanan harian", "Prediksi siapa yang akan beli dan siapa yang akan berhenti"] },
      { aspek: "Pengguna", nilai: ["Tim sales dan layanan pelanggan", "Kasir dan pemilik toko", "Pemilik usaha dan satu-dua orang tim"] },
      { aspek: "Waktu belajar", nilai: ["Berminggu-minggu", "Beberapa hari", "Hitungan jam, dengan skor langsung terlihat"] },
      { aspek: "Langkah berikutnya", nilai: ["Pengguna harus menentukan sendiri", "Pengguna harus menentukan sendiri", "Daftar tindakan harian, misalnya kontak ini hari ini"] },
      { aspek: "Setup iklan dan website", nilai: ["Tidak termasuk", "Tidak termasuk", "Tersedia lewat produk siap beli dan layanan agensi"] },
    ],
    catatan: "Perbandingan ini menggambarkan kategori umum, bukan produk tertentu.",
  },
  untukSiapa: {
    label: "Untuk siapa",
    judul: "Pemilik usaha yang sudah punya pelanggan, tetapi belum memanfaatkannya.",
    kartu: [
      { segmen: "Marketplace", kategori: "Penjual online", masalah: "Shopee, TikTok Shop, Instagram. Punya ratusan sampai ribuan pembeli, tetapi tidak tahu siapa yang layak ditawari ulang." },
      { segmen: "WhatsApp", kategori: "Usaha lewat WhatsApp", masalah: "Furniture, kosmetik, makanan. Sering kehilangan calon pembeli karena follow-up tidak konsisten dan tidak tercatat." },
      { segmen: "Pengiklan", kategori: "Pengguna iklan", masalah: "Pemilik yang sudah beriklan. Ingin melihat hubungan antara iklan, prospek, dan penjualan dalam satu tempat." },
      { segmen: "Agensi (mitra)", kategori: "Agensi", masalah: "Mitra yang mengelola banyak klien. Dapat menawarkan dashboard ini kepada klien sebagai bagian dari paket layanan." },
    ],
  },
  caraKerja: {
    label: "Cara kerja",
    judul: "Dari data mentah ke daftar tindakan dalam tiga langkah.",
    langkah: [
      { judul: "Hubungkan data", isi: "Unggah CSV atau sambungkan Google Sheets. Kontak ganda dan data kosong dirapikan otomatis." },
      { judul: "Lihat skor", isi: "Setiap prospek dan pelanggan mendapat skor kemungkinan membeli beserta label yang mudah dibaca." },
      { judul: "Bertindak", isi: "Terima ringkasan harian: siapa yang dihubungi, siapa yang layak ditawari promo, dan siapa yang mulai menjauh." },
    ],
  },
  testimoni: {
    tampil: true, // set false untuk menyembunyikan seluruh bagian
    label: "Testimoni (PLACEHOLDER)",
    judul: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    catatan: "Teks di bawah ini dummy. Ganti dengan testimoni asli dari pelanggan yang sudah memberi izin.",
    kartu: [
      { inisial: "NP", nama: "Nama Pelanggan 1", usaha: "Lorem ipsum usaha", isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." },
      { inisial: "NP", nama: "Nama Pelanggan 2", usaha: "Dolor sit amet", isi: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
      { inisial: "NP", nama: "Nama Pelanggan 3", usaha: "Consectetur elit", isi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla." },
    ],
  },
  faq: {
    label: "Pertanyaan umum",
    judul: "Hal yang sering ditanyakan sebelum mulai.",
    daftar: [
      { tanya: "Apa itu Suhuku?", jawab: "Suhuku adalah dashboard prospek dan pelanggan untuk UMKM. Suhuku membaca data kontak dan transaksi Anda, memberi skor kemungkinan membeli pada setiap kontak, lalu menunjukkan siapa yang perlu dihubungi hari ini." },
      { tanya: "Berapa harganya?", jawab: "Harga di halaman ini adalah contoh dan belum final. Starter mulai Rp 99.000 per bulan, Growth Rp 249.000 per bulan, dan Pro Rp 590.000 per bulan. Pembayaran tahunan memberi potongan sekitar 20%." },
      { tanya: "Apakah perlu kartu kredit untuk mencoba?", jawab: "Tidak. Uji coba tidak memerlukan kartu kredit, dan Anda bisa membatalkan kapan saja." },
      { tanya: "Data apa yang dibutuhkan?", jawab: "Cukup satu daftar kontak dalam bentuk file CSV atau Google Sheets. Anda tidak perlu menyiapkan seluruh data sekaligus untuk mulai." }, // [KONFIRMASI] klaim perapian data otomatis
      { tanya: "Bisakah mengimpor pesanan dari Shopee?", jawab: "Bisa, mulai dari paket Growth. Paket Starter belum mencakup impor dari Shopee." }, // [KONFIRMASI] integrasi Shopee
      { tanya: "Untuk siapa Suhuku?", jawab: "Pemilik usaha kecil yang sudah punya kontak dan pelanggan, misalnya penjual di marketplace, usaha yang melayani pesanan lewat WhatsApp, pengguna iklan, dan agensi yang mengelola banyak klien." },
    ],
  },
  penutup: {
    judul: "Mulai dari satu daftar kontak.",
    deskripsi: "Unggah data pertama Anda hari ini. Skor pertama biasanya muncul dalam hitungan menit.",
    ctaUtama: "Mulai gratis",
    ctaKedua: "Lihat produk",
  },
  footer: {
    hak: "© 2026 Suhuku. Halaman pratinjau, bukan situs produksi.",
    catatan: "Layanan agensi (website, iklan, branding) tersedia di halaman terpisah.",
    kontak: { email: "email@contoh.com", whatsapp: "+62 000 0000 0000" }, // PLACEHOLDER: ganti dengan kontak Suhuku
  },
};
