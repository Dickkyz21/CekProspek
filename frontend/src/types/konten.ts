export type BerandaHero = {
  label: string;
  judul: string;
  lead: string;
  ctaUtama: string;
  ctaKedua: string;
  catatan: string;
};

export type BuktiSosial = {
  label: string;
  brand: string[];
  statistik: string[];
};

export type ApaItuSuhuku = {
  label: string;
  judul: string;
  deskripsi: string;
  kartu: { judul: string; isi: string }[];
};

export type Keunggulan = {
  label: string;
  judul: string;
  deskripsi: string;
  kolom: string[];
  baris: { aspek: string; nilai: string[] }[];
  catatan: string;
};

export type UntukSiapa = {
  label: string;
  judul: string;
  kartu: { segmen: string; kategori: string; masalah: string }[];
};

export type CaraKerja = {
  label: string;
  judul: string;
  langkah: { judul: string; isi: string }[];
};

export type Testimoni = {
  tampil: boolean;
  label: string;
  judul: string;
  catatan: string;
  kartu: { inisial: string; nama: string; usaha: string; isi: string }[];
};

export type FAQ = {
  label: string;
  judul: string;
  daftar: { tanya: string; jawab: string }[];
};

export type Penutup = {
  judul: string;
  deskripsi: string;
  ctaUtama: string;
  ctaKedua: string;
};

export type Footer = {
  hak: string;
  catatan: string;
  kontak: { email: string; whatsapp: string };
};
