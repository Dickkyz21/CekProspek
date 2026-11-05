# Deploy: frontend di Vercel, backend di Render, basis data di Turso

Keputusan dan alasannya ada di `docs/arsitektur/ADR-003-basis-data.md`.

| Bagian | Tempat | Berkas konfigurasi |
|---|---|---|
| Frontend (Next.js) | Vercel | `frontend/` (Root Directory) |
| Backend (web) dan worker | Render, Docker | `render.yaml`, `backend/Dockerfile` |
| Redis | Render Key Value | `render.yaml` |
| Basis data | Turso (libSQL) | `backend/db/migrations/`, `backend/db/turso/` |

## 1. Buat basis data di Turso

```bash
turso auth login
turso db create suhuku
turso db show suhuku --url        # hasilnya: libsql://suhuku-<org>.turso.io
turso db tokens create suhuku     # hasilnya: TURSO_AUTH_TOKEN
```

Ada dua cara mengisi database:

- **Produksi (kosong):** tidak perlu impor. Saat backend pertama kali start, migrasi `0001_init.sql` diterapkan otomatis (`MIGRASI_SAAT_START=true`).
- **Pratinjau (dengan data contoh):** impor file yang sudah dibuat dari basis data lokal ke database yang masih kosong:

  ```bash
  turso db shell suhuku < backend/db/turso/001_skema_dan_contoh.sql
  ```

  File ini sudah berisi tabel `_migrasi`, sehingga backend tidak mengulang migrasi.

Jangan impor ke database yang sudah berisi tabel. Perintah `CREATE TABLE` akan gagal.

## 2. Deploy backend ke Render

1. Di Render, pilih **New > Blueprint**, lalu pilih repositori ini. Render membaca `render.yaml` dan membuat tiga layanan: `suhuku-backend`, `suhuku-worker`, dan `suhuku-redis`.
2. Isi variabel yang bertanda `sync: false`:
   - `DATABASE_URL` = URL dari langkah 1, misalnya `libsql://suhuku-<org>.turso.io`
   - `TURSO_AUTH_TOKEN` = token dari langkah 1
   - `APP_ORIGIN` = alamat frontend di Vercel, misalnya `https://suhuku.vercel.app`
   - Ulangi `DATABASE_URL` dan `TURSO_AUTH_TOKEN` untuk `suhuku-worker`.
3. `SESSION_SECRET` dibuat otomatis oleh Render.
4. Setelah deploy selesai, periksa:

   ```bash
   curl https://<alamat-backend>/api/v1/kesehatan
   # {"status":"ok","database":"ok"}
   ```

Catatan: blueprint ini belum diuji langsung di Render, karena pembuatan akun dan deploy dilakukan di luar lingkungan pengembangan ini. Jika Render menolak salah satu field saat impor blueprint, periksa field itu terhadap dokumentasi Render.

## 3. Deploy frontend ke Vercel

1. Impor repositori, lalu isi **Root Directory** dengan `frontend`.
2. Framework terdeteksi sebagai Next.js. Install Command `pnpm install --frozen-lockfile` dan Build Command `pnpm build` sudah sesuai.
3. Environment variable (opsional sampai backend siap dipakai frontend):
   - `NEXT_PUBLIC_API_URL` = alamat backend di Render, misalnya `https://suhuku-backend.onrender.com`

## 4. Pengembangan lokal

```bash
cp .env.example .env
docker compose up -d redis
cd backend && pnpm install && pnpm migrate && pnpm seed && pnpm start:dev
cd ../frontend && pnpm install && pnpm dev
```

Ekspor ulang file SQL untuk Turso setelah mengubah data contoh: `cd backend && pnpm ekspor-turso`.

## 5. Sebelum produksi

- Pasang autentikasi untuk `/admin`. Saat ini halaman itu hanya diberi `noindex`.
- Ganti data contoh di `frontend/src/content/` dan `frontend/src/content/admin.ts` dengan data dari API.
- Konfirmasi angka harga dan klaim pemasaran (lihat `docs/spesifikasi/transkrip-data-suhuku-detail.md`, bagian "Hal yang perlu dikonfirmasi").
