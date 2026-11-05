# Backend Suhuku

NestJS + TypeScript, basis data Turso (libSQL) lewat `@libsql/client`, BullMQ + Redis untuk job. Keputusan ada di `docs/arsitektur/ADR-003-basis-data.md`.

```bash
pnpm install
pnpm migrate        # menerapkan db/migrations/*.sql yang belum tercatat
pnpm seed           # data contoh (hanya file lokal)
pnpm start:dev      # server di http://localhost:4000
```

Cek hidup: `GET /api/v1/kesehatan`.

## Perintah

| Perintah | Fungsi |
|---|---|
| `pnpm migrate` | Terapkan migrasi ke `DATABASE_URL` (file lokal atau Turso) |
| `pnpm seed` | Isi data contoh ke file lokal |
| `pnpm ekspor-turso` | Tulis `db/turso/001_skema_dan_contoh.sql` dari basis data lokal |
| `pnpm test` / `pnpm lint` / `pnpm build` | Tes, lint, build ke `dist/` |

## Menambah migrasi

Buat berkas baru di `db/migrations/` dengan awalan urutan, misalnya `0002_transaksi_indeks.sql`. Jangan mengubah berkas yang sudah pernah diterapkan. Runner menandai berkas dengan nama, bukan isinya.

## Lingkungan

- `DATABASE_URL`: `file:db/dev.db` (lokal) atau `libsql://...` (Turso)
- `TURSO_AUTH_TOKEN`: wajib untuk `libsql://`
- `MIGRASI_SAAT_START`: `true` untuk menerapkan migrasi saat server start

Catatan: `pnpm-lock.yaml` wajib di-commit. CI dan Docker memakai `--frozen-lockfile`.
