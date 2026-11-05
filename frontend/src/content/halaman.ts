// Konten halaman turunan dari footer beranda. Sumber: transkrip "Suhuku Prospek & Pelanggan" (diganti ke Ops Analisis).
// Semua isi halaman di sini adalah data nyata dari transkrip, kecuali halaman Legal yang berupa draf.

export const BRAND = "Ops Analisis";
export const DOMAIN = "CekProspek.id";
export const TAHUN = 2026;

export type Tabel = { kepala: string[]; baris: string[][] };

export type Bagian = {
  judul?: string;
  paragraf?: string[];
  poin?: string[];
  tabel?: Tabel;
};

export type Halaman = {
  slug: string;
  kelompok: string;
  label: string;
  judul: string;
  lead: string;
  bagian: Bagian[];
  ctaLabel: string;
  ctaHref: string;
};

export const HALAMAN: Halaman[] = [
  // ---------- Produk ----------
  {
    slug: "landing-page-penjualan",
    kelompok: "Produk",
    label: "Template",
    judul: "Landing page penjualan",
    lead: "Halaman satu layar siap pakai dengan bagian produk, testimoni, dan tombol WhatsApp.",
    bagian: [
      {
        judul: "Yang Anda dapatkan",
        poin: ["Bagian produk dan keunggulan", "Bagian testimoni pelanggan", "Tombol WhatsApp untuk langsung menghubungi pembeli", "Siap diedit tanpa keahlian kode"],
      },
      {
        judul: "Detail",
        tabel: {
          kepala: ["Jenis", "Harga"],
          baris: [["Template digital", "Rp 350.000"]],
        },
      },
    ],
    ctaLabel: "Tambah ke keranjang",
    ctaHref: "/#produk",
  },
  {
    slug: "setup-iklan-meta-tiktok",
    kelompok: "Produk",
    label: "Paket iklan",
    judul: "Setup iklan Meta dan TikTok",
    lead: "Kampanye awal lengkap dengan target audiens, anggaran harian, dan laporan ROAS mingguan.",
    bagian: [
      {
        judul: "Yang Anda dapatkan",
        poin: ["Kampanye awal di Meta dan TikTok", "Target audiens yang disusun dari data Anda", "Pengaturan anggaran harian", "Laporan ROAS mingguan"],
      },
      {
        judul: "Detail",
        tabel: {
          kepala: ["Jenis", "Harga"],
          baris: [["Paket jasa setup iklan", "Rp 1.200.000"]],
        },
      },
    ],
    ctaLabel: "Tambah ke keranjang",
    ctaHref: "/#produk",
  },
  {
    slug: "aplikasi-kasir-stok",
    kelompok: "Produk",
    label: "Aplikasi",
    judul: "Aplikasi kasir dan stok",
    lead: "Aplikasi kasir dan inventori sederhana untuk satu komputer, dibuat dengan Python.",
    bagian: [
      {
        judul: "Fitur",
        poin: ["Pencatatan transaksi kasir", "Pengelolaan stok barang", "Berjalan di satu komputer"],
      },
      {
        judul: "Detail",
        tabel: {
          kepala: ["Jenis", "Harga"],
          baris: [["Aplikasi desktop", "Rp 900.000"]],
        },
      },
    ],
    ctaLabel: "Tambah ke keranjang",
    ctaHref: "/#produk",
  },

  // ---------- Untuk siapa ----------
  {
    slug: "penjual-online",
    kelompok: "Untuk siapa",
    label: "Penjual online",
    judul: "Untuk penjual online",
    lead: "Shopee, TikTok Shop, dan Instagram punya ratusan sampai ribuan pembeli, tetapi belum tentu tahu siapa yang layak ditawari ulang.",
    bagian: [
      {
        judul: "Masalah yang sering terjadi",
        paragraf: ["Data pembeli tersebar di setiap marketplace dan akun media sosial. Anda punya banyak nama, tetapi tidak tahu siapa yang akan kembali belanja."],
      },
      {
        judul: "Bagaimana Ops membantu",
        poin: ["Impor data pembeli dari Shopee (paket Growth ke atas)", "Skor pelanggan untuk melihat siapa yang rutin belanja", "Daftar pelanggan yang layak diberi penawaran ulang"],
      },
    ],
    ctaLabel: "Mulai uji coba 14 hari",
    ctaHref: "/#harga",
  },
  {
    slug: "usaha-whatsapp",
    kelompok: "Untuk siapa",
    label: "Usaha lewat WhatsApp",
    judul: "Untuk usaha yang jualan lewat WhatsApp",
    lead: "Furniture, kosmetik, dan makanan sering kehilangan calon pembeli karena follow-up tidak konsisten dan tidak tercatat.",
    bagian: [
      {
        judul: "Masalah yang sering terjadi",
        paragraf: ["Percakapan penting tersimpan di ponsel masing-masing orang dan mudah terlewat. Calon pembeli yang sudah bertanya bisa hilang begitu saja."],
      },
      {
        judul: "Bagaimana Ops membantu",
        poin: ["Skor prospek untuk siapa yang paling siap beli", "Notifikasi WhatsApp (paket Growth ke atas)", "Daftar tindakan harian: siapa yang harus dihubungi hari ini"],
      },
    ],
    ctaLabel: "Mulai uji coba 14 hari",
    ctaHref: "/#harga",
  },
  {
    slug: "pengguna-iklan",
    kelompok: "Untuk siapa",
    label: "Pengguna iklan",
    judul: "Untuk pemilik yang sudah beriklan",
    lead: "Lihat hubungan antara iklan, prospek, dan penjualan dalam satu tempat.",
    bagian: [
      {
        judul: "Masalah yang sering terjadi",
        paragraf: ["Iklan menghasilkan klik dan pesan, tetapi sulit dihubungkan ke penjualan yang benar-benar terjadi."],
      },
      {
        judul: "Bagaimana Ops membantu",
        poin: ["Satu daftar prospek dari semua sumber", "Skor untuk membantu memprioritaskan follow-up", "Pelacakan dari prospek sampai pelanggan"],
      },
    ],
    ctaLabel: "Lihat paket",
    ctaHref: "/#harga",
  },
  {
    slug: "agensi",
    kelompok: "Untuk siapa",
    label: "Agensi",
    judul: "Untuk agensi dan mitra",
    lead: "Mitra yang mengelola banyak klien dapat menawarkan dashboard ini kepada klien sebagai bagian dari paket layanan.",
    bagian: [
      {
        judul: "Model kerja",
        paragraf: ["Agensi adalah mitra (reseller), bukan pengguna akhir. Anda menjual dashboard sebagai bagian dari layanan untuk klien Anda."],
      },
      {
        judul: "Yang didapat agensi",
        poin: ["Paket Pro dengan kontak tidak terbatas dan akses API", "Hingga 5 anggota tim", "Dukungan prioritas"],
      },
    ],
    ctaLabel: "Hubungi kami",
    ctaHref: "/#harga",
  },

  // ---------- Cara kerja ----------
  {
    slug: "hubungkan-data",
    kelompok: "Cara kerja",
    label: "Langkah 1",
    judul: "Hubungkan data",
    lead: "Unggah CSV atau sambungkan Google Sheets. Kontak ganda dan data kosong dirapikan otomatis.",
    bagian: [
      {
        judul: "Sumber data",
        poin: ["Unggah file CSV", "Sambungkan Google Sheets"],
      },
      {
        judul: "Pembersihan otomatis",
        paragraf: ["Kontak yang tercatat dua kali digabung, dan baris dengan data kosong dirapikan sebelum skor dihitung."],
      },
    ],
    ctaLabel: "Mulai gratis",
    ctaHref: "/#harga",
  },
  {
    slug: "lihat-skor",
    kelompok: "Cara kerja",
    label: "Langkah 2",
    judul: "Lihat skor",
    lead: "Setiap prospek dan pelanggan mendapat skor kemungkinan membeli, beserta label yang mudah dibaca.",
    bagian: [
      {
        judul: "Faktor skor",
        poin: ["Frekuensi belanja", "Nilai transaksi", "Jarak waktu sejak transaksi terakhir"],
      },
      {
        judul: "Label",
        tabel: {
          kepala: ["Label", "Arti"],
          baris: [
            ["Siap beli", "Skor tinggi, layak segera dihubungi"],
            ["Hangat", "Ada minat, tetapi belum membeli"],
            ["Menjauh", "Pelanggan yang mulai berhenti belanja"],
          ],
        },
      },
      {
        paragraf: ["Skor berada di rentang 0 sampai 100."],
      },
    ],
    ctaLabel: "Mulai gratis",
    ctaHref: "/#harga",
  },
  {
    slug: "bertindak",
    kelompok: "Cara kerja",
    label: "Langkah 3",
    judul: "Bertindak",
    lead: "Terima ringkasan harian: siapa yang dihubungi, siapa yang layak ditawari promo, dan siapa yang mulai menjauh.",
    bagian: [
      {
        judul: "Isi ringkasan harian",
        poin: ["Daftar prospek yang dihubungi hari ini", "Pelanggan yang layak ditawari promo", "Pelanggan yang mulai menjauh"],
      },
    ],
    ctaLabel: "Mulai gratis",
    ctaHref: "/#harga",
  },

  // ---------- Platform ----------
  {
    slug: "harga",
    kelompok: "Platform",
    label: "Harga",
    judul: "Harga langganan",
    lead: "Pilih paket sesuai ukuran usaha Anda. Pembayaran tahunan memberi hemat sekitar 20%.",
    bagian: [
      {
        tabel: {
          kepala: ["Paket", "Bulanan", "Tahunan", "Fitur utama"],
          baris: [
            ["Starter", "Rp 99.000 /bulan", "Rp 950.000 /tahun", "Hingga 500 kontak; skor prospek dasar; ringkasan mingguan"],
            ["Growth (Paling populer)", "Rp 249.000 /bulan", "Rp 2.390.000 /tahun", "Hingga 5.000 kontak; skor pelanggan dan risiko berhenti belanja; notifikasi WhatsApp; impor dari Shopee"],
            ["Pro", "Rp 590.000 /bulan", "Rp 5.660.000 /tahun", "Kontak tidak terbatas; akses API; hingga 5 anggota tim; dukungan prioritas"],
          ],
        },
      },
      {
        paragraf: ["Harga ini masih contoh untuk pratinjau dan dapat berubah sebelum peluncuran."],
      },
    ],
    ctaLabel: "Mulai uji coba 14 hari",
    ctaHref: "/#harga",
  },
  {
    slug: "keunggulan",
    kelompok: "Platform",
    label: "Keunggulan",
    judul: "Dibuat untuk UMKM, bukan untuk perusahaan besar",
    lead: "Ada dua jenis alat yang biasa dipakai pemilik usaha kecil. Ops berada di tengah: sederhana seperti kasir, tetapi fokus pada siapa yang akan membeli.",
    bagian: [
      {
        tabel: {
          kepala: ["Aspek", "CRM perusahaan", "Aplikasi kasir all-in-one", "Ops"],
          baris: [
            ["Fokus utama", "Pipeline penjualan tim besar", "Transaksi, stok, dan pesanan harian", "Prediksi siapa yang akan beli dan siapa yang akan berhenti"],
            ["Pengguna", "Tim sales dan layanan pelanggan", "Kasir dan pemilik toko", "Pemilik usaha dan satu-dua orang tim"],
            ["Waktu belajar", "Berminggu-minggu", "Beberapa hari", "Hitungan jam, dengan skor langsung terlihat"],
            ["Langkah berikutnya", "Pengguna harus menentukan sendiri", "Pengguna harus menentukan sendiri", "Daftar tindakan harian"],
            ["Setup iklan dan website", "Tidak termasuk", "Tidak termasuk", "Tersedia lewat produk siap beli dan layanan agensi"],
          ],
        },
      },
      {
        paragraf: ["Perbandingan ini menggambarkan kategori umum, bukan produk tertentu."],
      },
    ],
    ctaLabel: "Mulai gratis",
    ctaHref: "/#harga",
  },
  {
    slug: "apa-itu-ops",
    kelompok: "Platform",
    label: "Apa itu Ops",
    judul: "Alat kerja harian untuk menjual lebih banyak ke orang yang sama",
    lead: "Banyak usaha kecil sudah punya ratusan kontak dan pelanggan, tetapi tidak tahu siapa yang harus dihubungi minggu ini. Ops menjawab pertanyaan itu setiap pagi.",
    bagian: [
      {
        judul: "Untuk prospek",
        paragraf: ["Lihat siapa yang sudah bertanya, membuka halaman harga, atau meninggalkan keranjang, lengkap dengan skor kemungkinan membeli."],
      },
      {
        judul: "Untuk pelanggan",
        paragraf: ["Ketahui siapa yang belanja rutin, siapa yang layak diberi penawaran ulang, dan siapa yang mulai berhenti sebelum benar-benar pergi."],
      },
      {
        judul: "Untuk tim",
        paragraf: ["Satu daftar prioritas untuk semua orang di tim, tanpa perlu membuka spreadsheet berbeda-beda setiap hari."],
      },
    ],
    ctaLabel: "Lihat produk",
    ctaHref: "/#produk",
  },

  // ---------- Legal (draf) ----------
  {
    slug: "syarat-ketentuan",
    kelompok: "Legal",
    label: "Dokumen",
    judul: "Syarat dan ketentuan",
    lead: "Draf. Teks ini perlu ditinjau oleh tim hukum sebelum dipublikasikan.",
    bagian: [
      {
        judul: "Penggunaan layanan",
        paragraf: ["Dengan menggunakan Ops Analisis di CekProspek.id, Anda setuju untuk memakai layanan sesuai tujuan usaha Anda yang sah."],
      },
      {
        judul: "Langganan dan pembayaran",
        paragraf: ["Paket langganan berlaku sesuai periode yang Anda pilih. Uji coba 14 hari tidak memerlukan kartu kredit."],
      },
    ],
    ctaLabel: "Kembali ke beranda",
    ctaHref: "/",
  },
  {
    slug: "kebijakan-privasi",
    kelompok: "Legal",
    label: "Dokumen",
    judul: "Kebijakan privasi",
    lead: "Draf. Teks ini perlu ditinjau oleh tim hukum sebelum dipublikasikan.",
    bagian: [
      {
        judul: "Data yang dikumpulkan",
        paragraf: ["Ops memproses data kontak dan transaksi yang Anda unggah untuk menghitung skor prospek dan pelanggan."],
      },
      {
        judul: "Penggunaan data",
        paragraf: ["Data hanya dipakai untuk menyediakan layanan kepada Anda. Rincian pembagian dan penyimpanan data perlu dilengkapi oleh tim hukum."],
      },
    ],
    ctaLabel: "Kembali ke beranda",
    ctaHref: "/",
  },
];

export function cariHalaman(slug: string): Halaman | undefined {
  return HALAMAN.find((h) => h.slug === slug);
}
