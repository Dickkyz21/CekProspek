# Transkrip dan Penjabaran Detail: Suhuku Prospek & Pelanggan

Sumber: file HTML contoh `55b8eddb-Suhuku_Prospek___Pelanggan.html`.

Dokumen ini memuat dua hal untuk setiap bagian halaman:
1. **Transkrip**: teks dan angka yang tertulis di halaman, disalin apa adanya.
2. **Penjabaran**: fungsi bagian tersebut, struktur datanya, dan perilaku interaksinya (sesuai script di halaman).

Catatan umum: semua data dashboard bertanda "Data contoh". Nama orang dan toko di dalamnya bukan data pelanggan nyata.

---

## Ringkasan halaman

| Aspek | Keterangan |
|---|---|
| Tujuan halaman | Memasarkan Suhuku, alat dashboard untuk memberi skor prospek dan pelanggan UMKM |
| Bahasa | Indonesia |
| Target pembaca | Pemilik usaha kecil yang sudah punya kontak dan pelanggan, tetapi belum tahu siapa yang harus dihubungi |
| Jumlah bagian | 9 bagian utama plus header dan footer |
| Interaksi | 4 interaksi: filter daftar prospek, toggle harga bulanan/tahunan, keranjang produk, dan tombol pembayaran pratinjau |
| Navigasi | Tautan jangkar ke `#apa`, `#beda`, `#harga`, `#produk` |
| Tema | Terang dan gelap, mengikuti preferensi sistem |

---

## 1. Header (navigasi atas)

**Transkrip**
- Logo: `Suhuku.` (titik berwarna biru)
- Menu: Apa itu Suhuku, Keunggulan, Harga
- Tombol: Masuk (sekunder), Coba gratis (utama)

**Penjabaran**
- Header berada di atas halaman dengan tinggi 72 px dan garis bawah tipis.
- Tombol "Masuk" mengarah ke `#` karena halaman ini hanya pratinjau. Tidak ada halaman login.
- Tombol "Coba gratis" mengarah ke `#harga`, bagian paket. Tombol ini dipakai untuk mendorong pengguna memulai uji coba.
- Pada layar sempit, menu navigasi ikut turun ke baris berikutnya (flex-wrap).

---

## 2. Hero

**Transkrip**
- Label: Dashboard prospek dan pelanggan
- Judul: Ketahui siapa yang siap beli sebelum Anda menghubungi mereka.
- Lead: Suhuku membaca data kontak dan transaksi Anda, memberi skor pada setiap prospek dan pelanggan, lalu menunjukkan siapa yang perlu dihubungi hari ini.
- Tombol utama: Mulai uji coba 14 hari (ke `#harga`)
- Tombol kedua: Lihat produk siap pakai (ke `#produk`)
- Catatan kecil: Tanpa kartu kredit. Batalkan kapan saja.

**Penjabaran**
- Hero terdiri dari dua kolom: teks di kiri, contoh dashboard di kanan. Di layar sempit, keduanya tersusun vertikal.
- Janji utamanya ada pada judul: pengguna tahu siapa yang akan membeli sebelum menghubungi mereka. Ini nilai inti produk.
- Catatan "Tanpa kartu kredit" menurunkan hambatan untuk mencoba.
- Ada dua ajakan bertindak dengan tujuan berbeda: satu untuk mendaftar uji coba, satu untuk melihat produk siap pakai (jalur pembelian langsung).

---

## 3. Contoh dashboard (panel di kanan hero)

**Transkrip**
- Judul panel: Ringkasan minggu ini
- Penanda: Data contoh
- KPI:
  - 128 — Prospek aktif
  - 34 — Skor tinggi
  - 12 — Mulai menjauh
- Filter: Semua | Siap beli | Perlu dihubungi ulang
- Daftar:

| Nama | Keterangan | Status | Skor | Tingkat |
|---|---|---|---|---|
| Dewi Lestari | Sering membuka halaman harga | Siap beli | 87 | hot |
| Toko Bangun Jaya | Menanyakan stok, belum membeli | Hangat | 61 | warm |
| Rina Pratama | Pelanggan, 73 hari tanpa belanja | Menjauh | 29 | cold |
| Agus Setiawan | Pelanggan, belanja rutin tiap 30 hari | Siap beli | 81 | hot |

- Catatan kaki: Skor dihitung dari frekuensi belanja, nilai transaksi, dan jarak waktu sejak transaksi terakhir.

**Penjabaran**

*Struktur data per baris.* Setiap prospek atau pelanggan punya lima field:
- `nama`: nama kontak atau toko
- `keterangan`: ringkasan perilaku singkat
- `status`: label yang dibaca manusia (Siap beli, Hangat, Menjauh)
- `skor`: angka 0 sampai 100 (di contoh: 29 sampai 87)
- `tingkat`: kode internal (`hot`, `warm`, `cold`) yang dipakai filter

*Makna status dan warna.*
- `hot` / "Siap beli": warna hijau (`--good`). Prospek atau pelanggan dengan skor tinggi.
- `warm` / "Hangat": warna kuning-cokelat (`--warn`). Ada minat tetapi belum membeli.
- `cold` / "Menjauh": warna abu-abu (`--cold`). Pelanggan yang mulai berhenti belanja.

*Konsistensi KPI dan daftar.* KPI "Prospek aktif" (128) adalah total seluruhnya, sedangkan daftar hanya menampilkan 4 contoh. "Skor tinggi" (34) dan "Mulai menjauh" (12) juga merupakan total, bukan hasil hitung dari 4 baris di daftar. Angka ini hanya ilustrasi.

*Perilaku filter (`script`).*
- Klik tab "Semua": seluruh baris ditampilkan.
- Klik tab "Siap beli": hanya baris dengan `data-tier="hot"` yang tampil. Dalam contoh: Dewi Lestari dan Agus Setiawan.
- Klik tab "Perlu dihubungi ulang": hanya baris `data-tier="cold"` yang tampil. Dalam contoh: Rina Pratama.
- Tab aktif memperoleh `aria-selected="true"` dan tampilannya berubah menjadi latar gelap. Tab lain kembali ke gaya biasa.
- Catatan: tab "Perlu dihubungi ulang" hanya memunculkan tingkat `cold`. Baris `warm` (Toko Bangun Jaya) hanya tampil di tab "Semua". Label tab dan isi filter tidak sepenuhnya sama, dan ini perlu diperhatikan jika data sungguhan dipakai nanti.
- Baris yang disembunyikan memakai atribut `hidden`, sehingga tidak memakan ruang.

---

## 4. Bukti sosial (proof strip)

**Transkrip**
- Dipercaya oleh: SNOWAYU, Muebel SJ, Alsyadress
- 100+ klien · 200+ proyek selesai

**Penjabaran**
- Berupa garis pemisah atas dan bawah dengan tiga nama brand dan satu baris statistik.
- Nama brand ditampilkan dengan huruf tebal, sedangkan label "Dipercaya oleh" dan statistik memakai warna redup. Ini membuat nama brand menonjol.
- Angka "100+ klien" dan "200+ proyek selesai" adalah klaim pemasaran. Sebelum halaman ini dipublikasikan, angka dan nama brand perlu dikonfirmasi, karena belum ada sumber data yang dilampirkan.

---

## 5. Apa itu Suhuku (`#apa`)

**Transkrip**
- Label: Apa itu Suhuku
- Judul: Alat kerja harian untuk menjual lebih banyak ke orang yang sama.
- Deskripsi: Banyak usaha kecil sudah punya ratusan kontak dan pelanggan, tetapi tidak tahu siapa yang harus dihubungi minggu ini. Suhuku menjawab pertanyaan itu setiap pagi.
- Tiga kartu:
  1. **Untuk prospek**: Lihat siapa yang sudah bertanya, membuka halaman harga, atau meninggalkan keranjang, lengkap dengan skor kemungkinan membeli.
  2. **Untuk pelanggan**: Ketahui siapa yang belanja rutin, siapa yang layak diberi penawaran ulang, dan siapa yang mulai berhenti sebelum benar-benar pergi.
  3. **Untuk tim**: Satu daftar prioritas untuk semua orang di tim, tanpa perlu membuka spreadsheet berbeda-beda setiap hari.

**Penjabaran**
- Bagian ini menjelaskan produk dengan tiga sudut pandang pengguna: prospek (calon pembeli), pelanggan (pembeli lama), dan tim (pelaksana).
- Setiap kartu menjawab satu pertanyaan: "apa yang bisa saya lihat?" Kartu pertama tentang calon pembeli, kedua tentang pembeli lama, ketiga tentang cara kerja tim.
- Kalimat "setiap pagi" di deskripsi menyiratkan ringkasan harian. Ini sejalan dengan bagian "Cara kerja" yang menyebut ringkasan harian.
- Kartu tidak bisa diklik. Tidak ada tautan atau interaksi.

---

## 6. Keunggulan (`#beda`)

**Transkrip**
- Label: Keunggulan
- Judul: Dibuat untuk UMKM, bukan untuk perusahaan besar.
- Deskripsi: Ada dua jenis alat yang biasa dipakai pemilik usaha kecil. Suhuku berada di tengah: sederhana seperti kasir, tetapi fokus pada siapa yang akan membeli.

| Aspek | CRM perusahaan | Aplikasi kasir all-in-one | Suhuku |
|---|---|---|---|
| Fokus utama | Pipeline penjualan tim besar | Transaksi, stok, dan pesanan harian | Prediksi siapa yang akan beli dan siapa yang akan berhenti |
| Pengguna | Tim sales dan layanan pelanggan | Kasir dan pemilik toko | Pemilik usaha dan satu-dua orang tim |
| Waktu belajar | Berminggu-minggu | Beberapa hari | Hitungan jam, dengan skor langsung terlihat |
| Langkah berikutnya | Pengguna harus menentukan sendiri | Pengguna harus menentukan sendiri | Daftar tindakan harian, misalnya kontak ini hari ini |
| Setup iklan dan website | Tidak termasuk | Tidak termasuk | Tersedia lewat produk siap beli dan layanan agensi |

- Catatan: Perbandingan ini menggambarkan kategori umum, bukan produk tertentu.

**Penjabaran**
- Tabel ini memposisikan Suhuku di antara dua kategori produk yang sudah dikenal. Kolom Suhuku diberi latar biru muda agar menonjol.
- Ada tiga kategori pembanding: CRM perusahaan (kompleks, untuk tim besar), aplikasi kasir (fokus transaksi), dan Suhuku (fokus prediksi perilaku).
- Baris "Langkah berikutnya" adalah pembeda utama: dua kategori lain menyerahkan keputusan kepada pengguna, sedangkan Suhuku memberi daftar tindakan.
- Baris "Setup iklan dan website" menunjukkan bahwa Suhuku juga terhubung dengan layanan agensi dan produk siap beli.
- Di layar sempit, tabel bisa digulir ke samping (overflow horizontal) di dalam wadahnya, sehingga halaman utama tidak ikut bergeser.

---

## 7. Untuk siapa (`#untuk`)

**Transkrip**
- Label: Untuk siapa
- Judul: Pemilik usaha yang sudah punya pelanggan, tetapi belum memanfaatkannya.
- Empat kartu:
  1. **Penjual online** — Shopee, TikTok Shop, Instagram. Punya ratusan sampai ribuan pembeli, tetapi tidak tahu siapa yang layak ditawari ulang.
  2. **Usaha lewat WhatsApp** — Furniture, kosmetik, makanan. Sering kehilangan calon pembeli karena follow-up tidak konsisten dan tidak tercatat.
  3. **Pengguna iklan** — Pemilik yang sudah beriklan. Ingin melihat hubungan antara iklan, prospek, dan penjualan dalam satu tempat.
  4. **Agensi** — Mitra yang mengelola banyak klien. Dapat menawarkan dashboard ini kepada klien sebagai bagian dari paket layanan.

**Penjabaran**
- Setiap kartu memiliki tiga lapisan: segmen (label kecil berwarna biru), nama kategori (judul), dan masalah (deskripsi).
- Segmen mencakup empat kelompok: marketplace, WhatsApp, pengiklan, dan agensi. Agensi adalah segmen mitra (reseller), bukan pengguna akhir.
- Masalah yang disebut selalu berkaitan dengan pelanggan yang sudah ada. Ini sejalan dengan judul bagian.

---

## 8. Cara kerja (`#cara-kerja`)

**Transkrip**
- Label: Cara kerja
- Judul: Dari data mentah ke daftar tindakan dalam tiga langkah.
- Langkah:
  1. **Hubungkan data** — Unggah CSV atau sambungkan Google Sheets. Kontak ganda dan data kosong dirapikan otomatis.
  2. **Lihat skor** — Setiap prospek dan pelanggan mendapat skor kemungkinan membeli beserta label yang mudah dibaca.
  3. **Bertindak** — Terima ringkasan harian: siapa yang dihubungi, siapa yang layak ditawari promo, dan siapa yang mulai menjauh.

**Penjabaran**
- Tiga langkah ini menjelaskan alur kerja: masukkan data, lihat hasil, lalu ambil tindakan.
- Langkah 1 menyebut dua sumber data: file CSV dan Google Sheets. Keduanya juga menjadi kebutuhan integrasi yang harus disiapkan di sisi produk.
- Langkah 1 menjanjikan pembersihan data otomatis untuk kontak ganda dan data kosong. Fitur ini perlu dipastikan sebelum peluncuran.
- Langkah 3 menghasilkan tiga jenis keluaran: daftar yang dihubungi, promo yang layak, dan pelanggan yang menjauh.
- Halaman ini tidak memuat tampilan langkah-langkah tersebut. Ilustrasinya ada di panel dashboard pada hero.

---

## 9. Produk siap pakai (`#produk`)

**Transkrip**
- Label: Produk siap pakai
- Judul: Beli sekarang, langsung bisa dipakai.
- Deskripsi: Pembayaran selesai, akses dikirim ke email Anda. Tidak perlu menunggu diskusi.

| Jenis | Nama produk | Deskripsi | Harga | Tombol |
|---|---|---|---|---|
| Template | Landing page penjualan | Halaman satu layar siap pakai dengan bagian produk, testimoni, dan tombol WhatsApp. | Rp 350.000 | Tambah ke keranjang |
| Paket iklan | Setup iklan Meta dan TikTok | Kampanye awal lengkap dengan target audiens, anggaran harian, dan laporan ROAS mingguan. | Rp 1.200.000 | Tambah ke keranjang |
| Aplikasi | Kasir dan stok sederhana | Aplikasi kasir dan inventori untuk satu komputer, dibuat dengan Python. | Rp 900.000 | Tambah ke keranjang |

**Keranjang**
- Keadaan awal: "Keranjang masih kosong." Tombol "Lanjut ke pembayaran" nonaktif.
- Setelah tombol "Tambah ke keranjang" diklik: "{jumlah} item, total Rp {total}". Tombol pembayaran aktif.
- Setelah tombol "Lanjut ke pembayaran" diklik: "Ini pratinjau. Pembayaran akan dihubungkan saat situs live."

**Penjabaran**

*Tiga jenis produk.*
- **Template** adalah produk digital murah dan bisa langsung dipakai.
- **Paket iklan** adalah layanan jasa dengan hasil yang dilaporkan (ROAS mingguan).
- **Aplikasi** adalah perangkat lunak untuk satu komputer.

*Logika keranjang (`script`).*
- Setiap item disimpan sebagai angka harga dalam daftar `cart`. Nama produk tidak disimpan.
- Total dihitung dengan menjumlahkan semua harga. Jumlah item sama dengan panjang daftar.
- Karena tidak ada cara menghapus item, keranjang hanya bisa bertambah. Klik tombol produk yang sama dua kali akan menambah harga dua kali.
- Tombol "Lanjut ke pembayaran" hanya menampilkan pesan. Tidak ada pembayaran yang diproses.

*Catatan produk.* Deskripsi bagian menjanjikan akses dikirim ke email setelah pembayaran. Ini belum ada karena halaman hanya pratinjau.

---

## 10. Harga langganan (`#harga`)

**Transkrip**
- Label: Harga langganan
- Judul: Pilih paket sesuai ukuran usaha Anda.
- Toggle periode: Bulanan | Tahunan
- Paket:

| Paket | Bulanan | Tahunan | Fitur | Tombol | Label |
|---|---|---|---|---|---|
| Starter | Rp 99.000 /bulan | Rp 950.000 /tahun | Hingga 500 kontak; skor prospek dasar; ringkasan mingguan | Mulai gratis | — |
| Growth | Rp 249.000 /bulan | Rp 2.390.000 /tahun | Hingga 5.000 kontak; skor pelanggan dan risiko berhenti belanja; notifikasi WhatsApp; impor dari Shopee | Mulai uji coba 14 hari | Paling populer |
| Pro | Rp 590.000 /bulan | Rp 5.660.000 /tahun | Kontak tidak terbatas; akses API; hingga 5 anggota tim; dukungan prioritas | Hubungi kami | — |

- Catatan: Harga ini contoh untuk pratinjau dan belum final.

**Penjabaran**

*Perbandingan harga tahunan.*
- Starter: tahunan Rp 950.000 dibanding bulanan 12 × Rp 99.000 = Rp 1.188.000. Hemat sekitar 20%.
- Growth: tahunan Rp 2.390.000 dibanding 12 × Rp 249.000 = Rp 2.988.000. Hemat sekitar 20%.
- Pro: tahunan Rp 5.660.000 dibanding 12 × Rp 590.000 = Rp 7.080.000. Hemat sekitar 20%.
- Ketiganya memberi diskon sekitar 20% untuk pembayaran tahunan. Ini konsisten.

*Logika toggle (`script`).*
- Tombol "Bulanan" dan "Tahunan" saling mengganti status `aria-pressed`.
- Setiap elemen harga memiliki dua atribut: `data-m` untuk harga bulanan dan `data-y` untuk tahunan. Script memilih salah satu dan memformatnya ke format Rupiah Indonesia.
- Teks satuan berubah dari "/bulan" menjadi "/tahun" mengikuti pilihan.

*Fitur dan batasan.*
- Batas kontak: 500, 5.000, dan tidak terbatas. Ini pembeda utama antar paket.
- Notifikasi WhatsApp dan impor Shopee hanya ada di Growth ke atas. Akses API dan jumlah anggota tim hanya di Pro.
- Paket Growth diberi label "Paling populer" dan bingkai biru tebal untuk menarik perhatian.

*Catatan.* Harga bersifat contoh dan belum final. Angka ini perlu dikonfirmasi sebelum dipakai di situs produksi.

---

## 11. Penutup (CTA)

**Transkrip**
- Judul: Mulai dari satu daftar kontak.
- Deskripsi: Unggah data pertama Anda hari ini. Skor pertama biasanya muncul dalam hitungan menit.
- Tombol: Mulai gratis (ke `#harga`), Lihat produk (ke `#produk`)

**Penjabaran**
- Judul menurunkan hambatan: cukup satu daftar kontak untuk mulai, bukan seluruh data.
- Klaim "skor pertama dalam hitungan menit" perlu dipastikan sesuai kenyataan produk.
- Tombol "Mulai gratis" dan "Lihat produk" mengulang dua jalur dari hero, yaitu paket langganan dan pembelian langsung.

---

## 12. Footer

**Transkrip**
- © 2026 Suhuku. Halaman pratinjau, bukan situs produksi.
- Layanan agensi (website, iklan, branding) tersedia di halaman terpisah.

**Penjabaran**
- Footer menyatakan dengan jelas bahwa halaman ini pratinjau, bukan situs produksi.
- Tautan ke layanan agensi disebut, tetapi tidak ada tautannya di halaman ini.

---

## Ringkasan interaksi (script)

| Interaksi | Pemicu | Efek | Elemen |
|---|---|---|---|
| Filter daftar | Klik tab | Menyembunyikan atau menampilkan baris berdasarkan `data-tier` | `.tab`, `#list .item` |
| Toggle harga | Klik Bulanan / Tahunan | Mengganti angka dan satuan harga | `.toggle button`, `[data-m]` |
| Tambah keranjang | Klik tombol produk | Menambah harga ke daftar, memperbarui total | `[data-name]` |
| Pembayaran | Klik "Lanjut ke pembayaran" | Menampilkan pesan pratinjau | `#checkout` |

---

## Hal yang perlu dikonfirmasi sebelum situs produksi

1. Nama klien dan jumlah klien di bukti sosial (SNOWAYU, Muebel SJ, Alsyadress, 100+, 200+).
2. Harga paket dan produk (masih ditandai contoh dan belum final).
3. Klaim "skor pertama dalam hitungan menit" dan "pembersihan data otomatis".
4. Pengiriman akses produk ke email setelah pembayaran.
5. Integrasi impor CSV, Google Sheets, dan Shopee.
6. Perbedaan label filter "Perlu dihubungi ulang" dan tingkat yang ditampilkan di tab tersebut.
7. Tombol "Masuk" dan tautan layanan agensi yang belum mengarah ke halaman nyata.
