"use client";

import { useEffect, useRef, useState } from "react";

// Membungkus bagian halaman agar muncul perlahan saat masuk layar.
// Tanpa JavaScript, class `.js` tidak terpasang dan konten langsung terlihat (lihat globals.css).
export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [terlihat, setTerlihat] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setTerlihat(true);
      return;
    }
    const io = new IntersectionObserver(
      (entri) => {
        if (entri.some((e) => e.isIntersecting)) {
          setTerlihat(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${terlihat ? "is-visible" : ""}`}>{children}</div>;
}
