# Peta teks: indeks node teks (urutan kemunculan di <body>) -> teks Suhuku.
# Nilai berupa str: mengganti isi inti node (spasi awal/akhir dipertahankan).
# Nilai ("sub", lama, baru): mengganti substring di dalam node.
# Node yang tidak ada di peta tetap tampil, dan akan terdeteksi oleh pemeriksaan kebocoran.

T = {}
# Header
T.update({1: "Suhuku", 2: "Produk", 3: "Apa itu Suhuku", 4: "Keunggulan", 7: "Harga", 9: "Coba gratis"})
# Hero
T.update({10: "Untuk UMKM", 11: "Dashboard prospek dan pelanggan",
          12: "Ketahui siapa", 13: "yang siap beli sebelum Anda", 14: "hubungi.",
          15: "Suhuku membaca data kontak dan transaksi Anda, ", 16: "memberi skor",
          17: " pada setiap prospek dan pelanggan, lalu menunjukkan siapa yang perlu dihubungi hari ini.",
          18: "Mulai uji coba 14 hari", 19: "Lihat produk siap pakai",
          20: "14 hari", 21: "uji coba gratis", 22: "Tanpa kartu kredit. Batalkan kapan saja.",
          23: "Semua", 24: "Siap beli", 25: "Data contoh",
          27: "SELECT", 28: "nama,", 29: "skor", 30: "", 31: "", 32: "",
          34: "FROM", 35: "kontak", 37: "WHERE", 38: "tingkat =", 39: "'hot'",
          41: "ORDER BY", 42: "skor DESC", 44: "",
          46: "Hasil · daftar prospek", 47: "nama", 48: "skor",
          49: "Dewi Lestari", 50: "87", 51: "Toko Bangun Jaya", 52: "61", 53: "Rina Pratama", 54: "29",
          55: "Dijalankan", 56: "4 hasil", 559: "(2 rows)"})
# Marquee logo
T.update({57: "Dipercaya oleh", 58: "SNOWAYU", 59: "Muebel SJ", 60: "Alsyadress",
          67: "SNOWAYU", 68: "Muebel SJ", 69: "Alsyadress"})
# 01 Dalam angka
T.update({77: "Dalam angka",
          78: "Dibuat untuk usaha yang sudah punya kontak dan pelanggan.",
          79: "Suhuku dirancang untuk pemilik usaha kecil yang sudah punya kontak dan pelanggan, tetapi belum tahu siapa yang harus dihubungi minggu ini.",
          80: "100+", 81: "klien", 82: "dari berbagai usaha",
          83: "200+", 84: "proyek selesai", 85: "dicatat dari data pelanggan Anda",
          86: "14 hari", 87: "uji coba gratis", 88: "tanpa kartu kredit"})
# 02 Cara kerja
T.update({90: "Cara kerja", 91: "Dari data mentah ke daftar tindakan dalam tiga langkah.",
          92: "Unggah", 93: "CSV", 94: "atau", 95: "Google Sheets", 96: "", 97: "", 98: "",
          99: "Kontak ganda dan data kosong dirapikan otomatis.",
          101: "Hubungkan data",
          102: "Unggah CSV atau sambungkan Google Sheets. Kontak ganda dan data kosong dirapikan otomatis.",
          103: "Dewi Lestari", 104: "87", 105: "· Siap beli", 106: "Tingkat hot",
          107: "· skor tinggi", 108: "Siap beli, tandanya hijau.",
          110: "Lihat skor",
          111: "Setiap prospek dan pelanggan mendapat skor kemungkinan membeli beserta label yang mudah dibaca.",
          112: "Siap beli", 113: "Skor 87", 114: "Hangat", 115: "Skor 61",
          117: "Bertindak",
          118: "Terima ringkasan harian: siapa yang dihubungi, siapa yang layak ditawari promo, dan siapa yang mulai menjauh.",
          119: "Terhubung", 120: "CSV dan Google Sheets.",
          121: "Kontak ganda", 122: "Dirapikan otomatis.",
          123: "Skor", 124: "Skor 0 sampai 100 per kontak.",
          125: "Ringkasan", 126: "Daftar tindakan harian."})
# 03 Produk siap pakai
T.update({128: "Produk siap pakai", 129: "Beli sekarang, langsung bisa dipakai.",
          130: "Pembayaran selesai, akses dikirim ke email Anda. Tidak perlu menunggu diskusi.",
          131: "Template", 133: "Landing page penjualan",
          134: "Halaman satu layar siap pakai dengan bagian produk, testimoni, dan tombol WhatsApp.",
          135: "Bagian produk dan testimoni", 136: "Tombol WhatsApp untuk pembeli", 137: "Akses dikirim ke email",
          138: "Tambah ke keranjang", 139: "Rp 350.000",
          140: "Paket iklan", 142: "Setup iklan Meta dan TikTok",
          143: "Kampanye awal lengkap dengan target audiens, anggaran harian, dan laporan ROAS mingguan.",
          144: "Target audiens", 145: "Anggaran harian", 146: "Laporan ROAS mingguan",
          147: "Tambah ke keranjang", 148: "Rp 1.200.000",
          149: "Aplikasi", 151: "Kasir dan stok sederhana",
          152: "Aplikasi kasir dan inventori untuk satu komputer, dibuat dengan Python.",
          153: "Untuk satu komputer", 154: "Dibuat dengan Python", 155: "Stok dan transaksi",
          156: "Tambah ke keranjang", 157: "Rp 900.000",
          158: "Layanan agensi", 160: "Website, iklan, dan branding",
          161: "Mitra yang mengelola banyak klien dapat menawarkan dashboard ini sebagai bagian dari paket layanan.",
          162: "Untuk klien agensi", 163: "Website dan landing page", 164: "Setup iklan",
          165: "Hubungi kami", 166: "Halaman terpisah"})
# 04 Keunggulan
T.update({171: "Keunggulan", 172: "Dibuat untuk UMKM, bukan untuk perusahaan besar.",
          173: "CRM & aplikasi kasir", 174: "Suhuku",
          175: "Fokus utama", 176: "Pipeline tim besar atau transaksi harian",
          177: "Prediksi siapa yang akan beli dan berhenti",
          178: "Pengguna", 179: "Tim sales atau kasir", 180: "Pemilik usaha dan satu-dua orang tim",
          181: "Waktu belajar", 182: "Berminggu-minggu atau beberapa hari",
          183: "Hitungan jam, dengan skor langsung terlihat",
          184: "Langkah berikutnya", 185: "Pengguna menentukan sendiri",
          186: "Daftar tindakan harian untuk tim"})
# 05 Testimoni: seluruh bagian disembunyikan dan teksnya dikosongkan (lihat build.py)
# 06 FAQ
T.update({516: "05", 520: "hubungi kami",
          522: "Apa itu Suhuku?",
          523: "Suhuku adalah alat dashboard untuk memberi skor prospek dan pelanggan UMKM. Ia membaca data kontak dan transaksi, lalu menunjukkan siapa yang perlu dihubungi hari ini.",
          524: "Berapa harganya?",
          525: "Paket Starter mulai Rp 99.000 per bulan atau Rp 950.000 per tahun. Harga ini masih contoh dan belum final.",
          526: "Siapa yang cocok pakai Suhuku?",
          527: "Pemilik usaha yang sudah punya kontak dan pelanggan. Lebih spesifiknya:",
          528: "Penjual online di Shopee, TikTok Shop, atau Instagram",
          529: "Usaha yang menjual lewat WhatsApp",
          530: "Pengguna iklan yang ingin melihat hubungan iklan dan penjualan",
          531: "Agensi yang mengelola banyak klien",
          532: "Data apa yang dibutuhkan?",
          533: "Unggah file CSV atau sambungkan Google Sheets. Kontak ganda dan data kosong dirapikan otomatis.",
          534: "Bisa impor dari Shopee?",
          535: "Impor dari Shopee tersedia di paket Growth ke atas.",
          536: "Perlu kartu kredit untuk mencoba?",
          537: "Tidak. Uji coba 14 hari tanpa kartu kredit, dan Anda bisa membatalkan kapan saja."})
# CTA penutup
T.update({538: "Mulai dari satu daftar kontak.",
          539: "Unggah data pertama Anda hari ini. Skor pertama biasanya muncul dalam hitungan menit.",
          540: "Mulai gratis", 541: "Lihat produk",
          542: "Tanpa kartu kredit", 543: "Batalkan kapan saja", 544: "Uji coba 14 hari"})
# Terminal visual
T.update({545: "suhuku — prospek", 546: ("sub", "ngulikdata", "suhuku"),
          548: "nama, skor", 549: ("sub", "ngulikdata", "suhuku"),
          551: "kontak", 552: ("sub", "ngulikdata", "suhuku"),
          554: "tingkat =", 555: "'hot'",
          557: ("sub", "skill_baru", "nama"),
          558: "Dewi Lestari\n Agus Setiawan"})
# Footer
T.update({560: "Suhuku", 561: "Alat dashboard untuk memberi skor prospek dan pelanggan UMKM.",
          562: "Halaman pratinjau, bukan situs produksi.",
          566: "© 2026 Suhuku. Semua hak dilindungi.",
          568: "Landing page penjualan", 569: "Template · Rp 350.000",
          570: "Setup iklan Meta dan TikTok", 571: "Paket iklan · Rp 1.200.000",
          572: "Aplikasi kasir dan stok", 573: "Aplikasi · Rp 900.000",
          574: "Untuk siapa", 575: "Penjual online", 576: "Usaha WhatsApp", 577: "Pengguna iklan", 578: "Agensi",
          582: "Cara kerja", 583: "Hubungkan data", 584: "Lihat skor", 585: "Bertindak",
          591: "Harga", 592: "Keunggulan", 593: "Apa itu Suhuku",
          597: "Syarat & Ketentuan", 598: "Kebijakan Privasi"})
