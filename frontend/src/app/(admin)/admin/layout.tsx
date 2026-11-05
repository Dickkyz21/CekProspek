import type { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { teksAdmin } from "@/content/admin";

// Belum ada autentikasi. Jangan biarkan halaman ini terindeks atau dibuka publik sebelum login dipasang.
export const metadata: Metadata = {
  title: "Admin. Suhuku",
  robots: { index: false, follow: false },
};

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[240px_minmax(0,1fr)]">
      <AdminSidebar />
      <main className="min-w-0 px-6 py-8 md:px-10">
        <p className="text-sm font-medium text-accent">{teksAdmin.label}</p>
        <div className="mt-2">{children}</div>
        <p className="mt-12 border-t pt-4 text-xs opacity-60">{teksAdmin.catatan}</p>
      </main>
    </div>
  );
}
