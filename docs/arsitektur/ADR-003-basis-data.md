# ADR-003: Basis data Turso (libSQL) dan hosting

Status: Diterima. Mengganti keputusan basis data di ADR-001 (PostgreSQL dan Prisma).

## Konteks
- Pemilik proyek memilih Turso (libSQL) sebagai basis data.
- ADR-001 sebelumnya menetapkan PostgreSQL dengan Prisma. Prisma CLI membutuhkan binary dari `binaries.prisma.sh` untuk `generate` dan `migrate`. Binary itu diunduh saat instalasi dan saat build Docker, sehingga menambah titik gagal di build dan deploy.
- Vercel tidak cocok untuk backend NestJS yang menjalankan worker BullMQ dan Redis secara terus-menerus.

## Keputusan
1. **Basis data: Turso (libSQL).** Lokal memakai file `backend/db/dev.db`. Produksi memakai `libsql://...` dengan `TURSO_AUTH_TOKEN`. Kode yang sama dipakai untuk keduanya.
2. **Akses data: `@libsql/client` langsung, tanpa Prisma.** Kueri ditulis sebagai SQL.
3. **Migrasi: berkas SQL berurutan di `backend/db/migrations/`.** Runner (`src/db/migrasi.ts`) mencatat setiap berkas di tabel `_migrasi`. Runner dijalankan saat server start (`MIGRASI_SAAT_START=true`) dan lewat `pnpm migrate`. Migrasi yang sudah tercatat dilewati.
4. **File impor Turso dibuat dari basis data lokal:** `pnpm ekspor-turso` menulis `backend/db/turso/001_skema_dan_contoh.sql` berisi skema, indeks, dan seluruh baris, termasuk `_migrasi`. Impor ke database Turso yang kosong dengan `turso db shell`.
5. **Hosting:**
   - Frontend: Vercel (Root Directory `frontend`).
   - Backend (web) dan worker: Render, dari `backend/Dockerfile`, dengan blueprint `render.yaml`.
   - Redis: Render Key Value.
   - Basis data: Turso.

## Alternatif yang dipertimbangkan
- **Prisma dengan adapter libSQL.** Ditolak karena `prisma generate` dan `migrate` membutuhkan binary dari host yang tidak selalu bisa dijangkau (termasuk saat build Docker).
- **PostgreSQL (Neon, Supabase, atau server sendiri).** Tidak dipilih karena pemilik proyek sudah memilih Turso.

## Konsekuensi
- Tidak ada tipe otomatis dari skema. Tipe baris ditulis manual di kode data. Perubahan skema harus lewat berkas migrasi baru.
- Batasan SQLite berlaku: tidak ada `ALTER COLUMN`. Perubahan kolom memerlukan migrasi tabel baru.
- Waktu disimpan sebagai milidetik UTC. Nilai uang sebagai rupiah utuh (`INTEGER`), tanpa desimal.
- Batasan `CHECK` ditegakkan oleh basis data untuk `tipe`, `tingkat`, `skor`, `paket`, dan `periode`.
- Pencadangan dan pemulihan mengikuti kebijakan Turso. Perlu dicek sebelum produksi.
