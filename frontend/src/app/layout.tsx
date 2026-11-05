import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhuku. Ketahui siapa yang siap beli",
  description:
    "Suhuku membaca data kontak dan transaksi Anda, memberi skor pada setiap prospek dan pelanggan, lalu menunjukkan siapa yang perlu dihubungi hari ini.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {/* Menandai bahwa JavaScript aktif, sebelum React berjalan. Dipakai untuk animasi muncul. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
