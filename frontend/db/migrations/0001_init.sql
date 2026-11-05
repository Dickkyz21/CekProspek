-- Skema awal Suhuku (Turso / libSQL, SQLite).
-- Waktu disimpan sebagai milidetik sejak epoch (UTC). Nilai uang dalam rupiah utuh.
-- Dijalankan oleh `pnpm migrate` (lokal maupun Turso). Lihat docs/arsitektur/ADR-003-basis-data.md.

CREATE TABLE IF NOT EXISTS Pengguna (
  id TEXT NOT NULL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  namaUsaha TEXT NOT NULL,
  dibuatPada INTEGER NOT NULL DEFAULT (unixepoch() * 1000)
);

CREATE TABLE IF NOT EXISTS Tim (
  id TEXT NOT NULL PRIMARY KEY,
  nama TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Anggota (
  id TEXT NOT NULL PRIMARY KEY,
  timId TEXT NOT NULL REFERENCES Tim(id),
  penggunaId TEXT NOT NULL REFERENCES Pengguna(id),
  peran TEXT NOT NULL DEFAULT 'anggota',
  UNIQUE (timId, penggunaId)
);

CREATE TABLE IF NOT EXISTS Kontak (
  id TEXT NOT NULL PRIMARY KEY,
  penggunaId TEXT NOT NULL REFERENCES Pengguna(id),
  nama TEXT NOT NULL,
  tipe TEXT NOT NULL CHECK (tipe IN ('prospek', 'pelanggan')),
  dibuatPada INTEGER NOT NULL DEFAULT (unixepoch() * 1000)
);
CREATE INDEX IF NOT EXISTS Kontak_penggunaId_idx ON Kontak(penggunaId);

CREATE TABLE IF NOT EXISTS Transaksi (
  id TEXT NOT NULL PRIMARY KEY,
  kontakId TEXT NOT NULL REFERENCES Kontak(id),
  nilai INTEGER NOT NULL CHECK (nilai >= 0),
  tanggal INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS Transaksi_kontakId_tanggal_idx ON Transaksi(kontakId, tanggal);

CREATE TABLE IF NOT EXISTS SkorKontak (
  id TEXT NOT NULL PRIMARY KEY,
  kontakId TEXT NOT NULL REFERENCES Kontak(id),
  skor INTEGER NOT NULL CHECK (skor BETWEEN 0 AND 100),
  tingkat TEXT NOT NULL CHECK (tingkat IN ('hot', 'warm', 'cold')),
  dihitung INTEGER NOT NULL DEFAULT (unixepoch() * 1000)
);
CREATE INDEX IF NOT EXISTS SkorKontak_kontakId_dihitung_idx ON SkorKontak(kontakId, dihitung);

CREATE TABLE IF NOT EXISTS Langganan (
  id TEXT NOT NULL PRIMARY KEY,
  penggunaId TEXT NOT NULL UNIQUE REFERENCES Pengguna(id),
  paket TEXT NOT NULL CHECK (paket IN ('starter', 'growth', 'pro')),
  periode TEXT NOT NULL CHECK (periode IN ('bulanan', 'tahunan')),
  mulai INTEGER NOT NULL,
  berakhir INTEGER NOT NULL
);
