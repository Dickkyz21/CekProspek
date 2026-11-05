// Draf sesuai docs/arsitektur/ADR-002-skor.md. Semua angka bisa diubah tanpa mengubah kode.
export const skorConfig = {
  bobot: { frekuensi: 0.4, nilai: 0.35, kesegaran: 0.25 },
  kesegaranNolSetelahHari: 90,
  ambangTingkat: { hot: 70, warm: 40 },
} as const;
