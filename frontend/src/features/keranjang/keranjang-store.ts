import { create } from "zustand";

// Pratinjau: keranjang hanya menyimpan harga, seperti pada template. Tidak ada cara menghapus item.
type KeranjangState = {
  harga: number[];
  tambah: (harga: number) => void;
  jumlah: () => number;
  total: () => number;
};

export const useKeranjang = create<KeranjangState>((set, get) => ({
  harga: [],
  tambah: (harga) => set((s) => ({ harga: [...s.harga, harga] })),
  jumlah: () => get().harga.length,
  total: () => get().harga.reduce((a, b) => a + b, 0),
}));
