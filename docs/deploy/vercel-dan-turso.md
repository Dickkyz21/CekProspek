# Deploy: Vercel dan Turso

Seluruh aplikasi berjalan di Vercel. Basis data di Turso. Tidak ada layanan lain.

## 1. Buat database di Turso

Pasang Turso CLI, lalu login:

```bash
turso auth login
turso db create suhuku
turso db show suhuku --url        # salin, dipakai sebagai DATABASE_URL
turso db tokens create suhuku     # salin, dipakai sebagai TURSO_AUTH_TOKEN
```

## 2. Isi database

- **Dengan data contoh (disarankan untuk pratinjau):** impor file SQL ke database yang masih kosong:

  ```bash
  turso db shell suhuku < frontend/db/turso/001_skema_dan_contoh.sql
  ```

  File ini berisi skema, indeks, data contoh, dan tabel `_migrasi`.

- **Kosong:** jalankan migrasi dari komputer lokal dengan URL dan token Turso:

  ```bash
  cd frontend
  DATABASE_URL="libsql://nama-database.turso.io" TURSO_AUTH_TOKEN="..." pnpm migrate
  ```

Jangan menjalankan keduanya pada database yang sama. Impor SQL sudah mencatat migrasi, sehingga `pnpm migrate` tidak akan mengulanginya, tetapi tetap pilih satu cara.

## 3. Deploy ke Vercel

1. Di Vercel, pilih **Add New > Project**, lalu pilih repositori ini.
2. Isi **Root Directory** dengan `frontend`. Framework terdeteksi sebagai Next.js.
3. Build command dan output dibiarkan default (`pnpm build` dan `.next`).
4. Di **Environment Variables**, tambahkan:
   - `DATABASE_URL` = URL `libsql://...` dari langkah 1
   - `TURSO_AUTH_TOKEN` = token dari langkah 1
5. Klik **Deploy**.

## 4. Verifikasi

```bash
curl https://<domain-vercel>/api/kesehatan
```

Respons `{"status":"ok","database":"ok"}` dengan status `200` berarti aplikasi terhubung ke Turso. Respons `503` berarti URL atau token salah, atau database tidak terjangkau. Periksa nilai di Environment Variables, lalu redeploy.

## Catatan

- Setiap perubahan variabel lingkungan membutuhkan redeploy agar berlaku.
- Setelah mengubah data contoh, ekspor ulang file SQL dengan `cd frontend && pnpm migrate && pnpm seed && pnpm ekspor-turso`.
- Pipeline CI (`.github/workflows/ci.yml`) menjalankan lint, unit test, dan build pada setiap push ke `main` dan setiap pull request.
