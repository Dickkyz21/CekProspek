# Suhuku

Dashboard prospek dan pelanggan untuk UMKM: memberi skor kemungkinan membeli pada setiap kontak dan menampilkan daftar tindakan harian.

## Struktur repositori

| Folder | Isi |
|---|---|
| `frontend/` | Aplikasi Next.js (App Router): halaman pemasaran dan dashboard aplikasi |
| `backend/` | API NestJS, worker job, integrasi, migrasi SQL (Turso) |
| `docs/` | Spesifikasi, ADR arsitektur, dokumentasi API, referensi desain |
| `.github/workflows/` | Pipeline CI (lint, test, build) |

## Prasyarat

- Node.js 20 LTS atau lebih baru
- pnpm 9 (`corepack enable`)
- Docker dan Docker Compose (untuk Redis lokal)

## Menjalankan secara lokal

```bash
cp .env.example .env
docker compose up -d redis

cd backend && pnpm install && pnpm migrate && pnpm seed && pnpm start:dev
cd ../frontend && pnpm install && pnpm dev
```

Basis data lokal adalah file `backend/db/dev.db` (libSQL). Tidak perlu server database terpisah.

Frontend berjalan di `http://localhost:3000`, backend di `http://localhost:4000`.

## Status konten

Angka harga, bukti sosial (SNOWAYU, Muebel SJ, Alsyadress, 100+ klien, 200+ proyek), dan klaim produk masih berstatus **contoh** dan wajib dikonfirmasi sebelum situs produksi. Daftarnya ada di `docs/spesifikasi/transkrip-data-suhuku-detail.md` bagian "Hal yang perlu dikonfirmasi".

## Dokumen terkait

- `docs/spesifikasi/transkrip-data-suhuku-detail.md`: sumber teks dan perilaku halaman
- `docs/arsitektur/ADR-001-framework.md`: pemilihan framework
- `docs/arsitektur/ADR-002-skor.md`: aturan skor dan tingkat
- `docs/arsitektur/ADR-003-basis-data.md`: Turso, migrasi, dan hosting (Vercel, Render)
- `docs/deploy/vercel-dan-turso.md`: langkah deploy
- `docs/api/endpoint.md`: daftar endpoint API
- `docs/referensi-desain/`: template visual acuan (bukan kode produksi)
