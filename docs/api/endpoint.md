# Daftar endpoint API (draf)

Basis URL: `/api/v1`. Semua endpoint privat memerlukan sesi httpOnly cookie.

| Metode | Path | Modul | Keterangan |
|---|---|---|---|
| POST | /auth/daftar | auth | Daftar dan kirim email verifikasi |
| POST | /auth/masuk | auth | Masuk dengan sesi cookie |
| POST | /auth/keluar | auth | Hapus sesi |
| GET | /kontak | kontak | Daftar kontak dengan filter `tingkat` dan paginasi |
| GET | /kontak/:id | kontak | Detail kontak beserta riwayat skor |
| POST | /impor/csv | impor | Unggah CSV, mengembalikan id job |
| POST | /impor/google-sheets | impor | Sambungkan Google Sheets |
| GET | /impor/:jobId | impor | Status job impor |
| GET | /transaksi | transaksi | Daftar transaksi per kontak |
| GET | /skor/ringkasan | skor | KPI: total prospek, skor tinggi, mulai menjauh |
| GET | /ringkasan/harian | ringkasan | Ringkasan harian untuk tim |
| GET | /langganan/paket | langganan | Daftar paket dan harga bulanan/tahunan |
| POST | /langganan/uji-coba | langganan | Mulai uji coba 14 hari |
| POST | /pembayaran/checkout | pembayaran | Dinonaktifkan pada mode pratinjau |
| GET | /produk-digital | produk-digital | Daftar produk siap pakai |
| GET | /tim/anggota | tim | Anggota tim (maks. sesuai paket) |
