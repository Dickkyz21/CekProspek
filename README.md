# Suhuku

Aplikasi skoring prospek untuk UMKM. Satu aplikasi Next.js (halaman publik, dashboard admin, dan route handler `/api`) dengan basis data Turso (libSQL).

## Struktur

| Folder | Isi |
|---|---|
| `frontend/` | Next.js 15 (App Router), TypeScript, Tailwind, route handler `/api`, skrip migrasi dan seed |
| `frontend/db/migrations/` | Migrasi SQL berurutan (`0001_init.sql`, ...) |
| `frontend/db/turso/` | Berkas impor siap pakai untuk Turso |
| `docs/` | Keputusan arsitektur (ADR) dan panduan deploy |

## Menjalankan lokal

```bash
cd frontend
pnpm install
pnpm migrate   # membuat db/dev.db dan menerapkan migrasi
pnpm seed      # mengisi data contoh
pnpm dev       # http://localhost:3000
```

Basis data lokal adalah file `frontend/db/dev.db` (libSQL). Tidak perlu server database terpisah.

Pemeriksaan: `pnpm lint`, `pnpm test:unit`, `pnpm test` (Playwright, perlu `pnpm exec playwright install chromium`), `pnpm build`.

Health check: `GET /api/kesehatan` mengembalikan `200` jika basis data terjangkau, `503` jika tidak.

## Deploy

Lihat `docs/deploy/vercel-dan-turso.md`: frontend di Vercel (Root Directory `frontend`), basis data di Turso.

## Dokumen

- `docs/arsitektur/ADR-001-framework.md`: pemilihan framework
- `docs/arsitektur/ADR-003-basis-data.md`: Turso, migrasi, dan hosting
