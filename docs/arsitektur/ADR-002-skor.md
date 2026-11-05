# ADR-002: Aturan skor dan tingkat

Status: Draf, perlu validasi dengan data nyata

## Konteks
Setiap prospek dan pelanggan perlu skor 0 sampai 100 dan tingkat yang mudah dibaca. Halaman pratinjau menyebut skor dihitung dari frekuensi belanja, nilai transaksi, dan jarak waktu sejak transaksi terakhir.

## Keputusan awal
- Skor = 0,40 × frekuensi + 0,35 × nilai + 0,25 × kesegaran, masing-masing dinormalisasi ke 0 sampai 100.
- Kesegaran menurun seiring hari sejak transaksi terakhir (contoh: 0 hari = 100, 90 hari atau lebih = 0).
- Tingkat: `hot` untuk skor 70 ke atas, `warm` untuk 40 sampai 69, `cold` untuk di bawah 40.
- Prospek tanpa transaksi memakai sinyal perilaku (membuka halaman harga, menanyakan stok, meninggalkan keranjang) dengan bobot terpisah.

## Catatan
- Bobot dan ambang di atas adalah titik awal. Semuanya disimpan di konfigurasi, bukan hard-code.
- Tab "Perlu dihubungi ulang" di pratinjau hanya menampilkan `cold`; keputusan apakah `warm` ikut perlu diambil sebelum produksi.
