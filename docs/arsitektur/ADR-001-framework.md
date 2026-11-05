# ADR-001: Pemilihan framework frontend dan backend

Status: Diusulkan. Keputusan basis data dan hosting diganti oleh ADR-003 (Turso dan libSQL, Vercel).

## Konteks
Suhuku membutuhkan halaman pemasaran yang cepat dan mudah dicari (SEO), dashboard interaktif dengan tabel dan filter, API untuk impor data, serta job terjadwal untuk skor dan ringkasan harian.

## Keputusan
- Frontend: Next.js (App Router) + TypeScript + Tailwind CSS, shadcn/ui untuk tabel dan tab, Recharts untuk grafik.
- Backend: route handler Next.js di frontend (satu aplikasi). Basis data: Turso (libSQL), lihat ADR-003.
- Auth: Auth.js dengan sesi httpOnly cookie.
- Email: Resend. Pembayaran: Midtrans (atau Xendit) saat mode live.

## Alternatif yang dipertimbangkan
- FastAPI (Python): kuat untuk pengolahan data, tetapi tim frontend dan backend perlu dua ekosistem bahasa.
- Laravel (PHP): produktif untuk CRUD, tetapi integrasi real-time dan tipe bersama dengan frontend lebih sulit.

## Konsekuensi
- Satu bahasa (TypeScript) di seluruh stack; tipe DTO bisa dibagi lewat paket bersama bila diperlukan.
- Perlu disiplin modul agar NestJS tidak menjadi monolit yang sulit dipisah.
