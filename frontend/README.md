# Frontend Suhuku

Next.js App Router + TypeScript + Tailwind.

- `src/app/(pemasaran)`: halaman publik (beranda)
- `src/app/(aplikasi)`: dashboard setelah masuk
- `src/content/`: seluruh teks halaman, bersumber dari `docs/spesifikasi/transkrip-data-suhuku-detail.md`
- `src/components/`: struktur dan gaya, mengikuti template di `docs/referensi-desain/`

```bash
pnpm install
pnpm dev
pnpm test
```

Catatan: `pnpm-lock.yaml` wajib di-commit sebelum CI berjalan.

## Dashboard admin

- `src/app/(admin)/admin`: Ringkasan, Pengguna, dan Langganan. Semua data masih contoh dari `src/content/admin.ts`.
- Belum ada autentikasi. Halaman diberi `noindex`, tetapi jangan dibuka publik sebelum login dipasang.

## Deploy ke Vercel

Panduan lengkap ada di `docs/deploy/vercel-dan-turso.md`. Ringkasnya: set Root Directory ke `frontend`, lalu Vercel memakai `pnpm build` secara otomatis.
