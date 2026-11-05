"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { teksAdmin } from "@/content/admin";

const MENU = [
  { href: "/admin", label: "Ringkasan" },
  { href: "/admin/pengguna", label: "Pengguna" },
  { href: "/admin/langganan", label: "Langganan" },
];

export function AdminSidebar() {
  const path = usePathname();
  return (
    <aside className="border-b md:sticky md:top-0 md:h-screen md:border-b-0 md:border-r">
      <div className="flex items-center justify-between gap-4 px-6 py-5 md:block">
        <Link href="/admin" className="text-lg font-bold">
          Ops<span className="text-accent">.</span> <span className="text-sm font-normal opacity-60">Admin</span>
        </Link>
        <p className="hidden text-xs opacity-60 md:mt-2 md:block">{teksAdmin.sidebarCatatan}</p>
      </div>
      <nav aria-label="Menu admin" className="flex gap-1 overflow-x-auto px-4 pb-3 md:flex-col md:pb-0">
        {MENU.map((m) => {
          const aktif = m.href === "/admin" ? path === "/admin" : path.startsWith(m.href);
          return (
            <Link
              key={m.href}
              href={m.href}
              aria-current={aktif ? "page" : undefined}
              className={`shrink-0 rounded px-3 py-2 text-sm transition-colors duration-200 ${
                aktif ? "kolom-sorot font-semibold text-accent" : "tombol-garis"
              }`}
            >
              {m.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
