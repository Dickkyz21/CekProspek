# ADR-003: Basis data dan hosting

Status: Diterima. Mengganti keputusan basis data di ADR-001 (PostgreSQL dan Prisma). Hosting disederhanakan menjadi Vercel dan Turso saja.

## Konteks

- ADR-001 menetapkan PostgreSQL dengan Prisma. Prisma CLI mengunduh binary dari `binaries.prisma.sh` untuk `generate` dan `migrate`. Unduhan itu diblokir di lingkungan pengembangan, sehingga Prisma tidak bisa dipakai secara andal.
- Pemilik proyek memilih Turso untuk basis data.
- Pemilik proyek ingin arsitektur sesederhana mungkin: hanya Vercel dan Turso. Tidak ada server terpisah, Redis, atau worker. Fitur yang butuh proses latar belakang ditunda sampai benar-benar diperlukan.

## Keputusan

1. **Basis data: Turso (libSQL).** Lokal memakai file `frontend/db/dev.db`. Produksi memakai `libsql://...` dengan `TURSO_AUTH_TOKEN`. Kode yang sama dipakai untuk keduanya (`src/db/klien.ts`).
2. **Akses data: `@libsql/client` langsung, tanpa ORM.** Kueri ditulis sebagai SQL.
3. **Migrasi: berkas SQL berurutan di `frontend/db/migrations/`.** Runner (`src/db/migrasi.ts`) mencatat setiap berkas di tabel `_migrasi` dan melewati berkas yang sudah diterapkan. Dijalankan dengan `pnpm migrate`. Migrasi tidak berjalan otomatis saat aplikasi start.
4. **File impor Turso dibuat dari basis data lokal:** `pnpm ekspor-turso` menulis `frontend/db/turso/001_skema_dan_contoh.sql` berisi skema, indeks, dan seluruh baris, termasuk `_migrasi`. File ini diimpor sekali ke database Turso kosong, sehingga migrasi tidak diulang.
5. **Hosting: Vercel untuk seluruh aplikasi** (Root Directory `frontend`). Halaman dan API berada di satu proyek. Basis data di Turso.
6. **Health check:** `GET /api/kesehatan` menjalankan `SELECT 1`.

## Konsekuensi

- Tidak ada worker atau antrean job. Pekerjaan terjadwal, jika nanti dibutuhkan, memakai Vercel Cron atau layanan terpisah yang diputuskan di ADR baru.
- Route handler di Vercel bersifat tanpa status. Koneksi Turso dibuka per request dan ditutup setelahnya.
- Migrasi harus dijalankan manual (`pnpm migrate`, atau impor file SQL ke Turso). Ini disengaja agar produksi tidak berubah diam-diam saat deploy.

## Alternatif yang ditolak

- **Prisma dengan adapter libSQL.** Ditolak karena `prisma generate` dan `migrate` membutuhkan binary dari host yang tidak selalu bisa dijangkau.
- **PostgreSQL (Neon, Supabase, atau server sendiri).** Tidak dipilih karena pemilik proyek sudah memilih Turso.
- **Backend NestJS terpisah di Render.** Ditolak demi arsitektur yang lebih sederhana. Render juga meminta kartu kredit untuk akun baru.
