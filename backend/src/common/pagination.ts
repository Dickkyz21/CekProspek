export type Halaman<T> = { data: T[]; total: number; halaman: number; ukuran: number };

export function paginate<T>(data: T[], total: number, halaman: number, ukuran: number): Halaman<T> {
  return { data, total, halaman, ukuran };
}
