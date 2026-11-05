"use client";

import { useState } from "react";
import { produk, teksProduk } from "@/content/produk";
import { formatRupiah } from "@/lib/format";
import { useKeranjang } from "@/features/keranjang/keranjang-store";

export function ProdukSiapPakai({ id }: { id: string }) {
  const { tambah, jumlah, total } = useKeranjang();
  const [pesan, setPesan] = useState<string | null>(null);
  const n = jumlah();
  return (
    <section id={id} className="px-6 py-16">
      <p className="text-sm font-medium text-accent">{teksProduk.label}</p>
      <h2 className="mt-2 text-3xl font-bold">{teksProduk.judul}</h2>
      <p className="mt-3">{teksProduk.deskripsi}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {produk.map((p) => (
          <article key={p.nama} className="tombol-garis flex flex-col rounded border p-6">
            {/* PLACEHOLDER: ganti dengan screenshot produk asli */}
            <div className="grid aspect-video place-items-center rounded border border-dashed text-xs opacity-60">
              Screenshot placeholder
            </div>
            <span className="mt-4 text-xs text-accent">{p.jenis}</span>
            <h3 className="mt-1 font-semibold">{p.nama}</h3>
            <p className="mt-2 text-sm">{p.deskripsi}</p>
            <p className="mt-4 font-bold">{formatRupiah(p.harga)}</p>
            <button
              onClick={() => tambah(p.harga)}
              className="tombol-garis mt-4 self-start rounded border px-4 py-2 text-sm"
            >
              Tambah ke keranjang
            </button>
          </article>
        ))}
      </div>
      <div id="checkout" className="mt-8 rounded border p-6">
        <p className="text-sm">
          {n === 0
            ? teksProduk.keranjangKosong
            : teksProduk.ringkasan.replace("{jumlah}", String(n)).replace("{total}", new Intl.NumberFormat("id-ID").format(total()))}
        </p>
        <button
          disabled={n === 0}
          onClick={() => setPesan(teksProduk.pratinjauCheckout)}
          className="mt-3 rounded bg-accent px-4 py-2 text-sm text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          Lanjut ke pembayaran
        </button>
        {pesan && <p className="mt-3 text-sm">{pesan}</p>}
      </div>
    </section>
  );
}
