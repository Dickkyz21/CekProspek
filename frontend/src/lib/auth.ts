// Placeholder. Auth.js akan dipasang pada tahap autentikasi.
export const RUTE_PUBLIK = ["/", "/harga"];
export function perluMasuk(path: string): boolean {
  return !RUTE_PUBLIK.includes(path);
}
