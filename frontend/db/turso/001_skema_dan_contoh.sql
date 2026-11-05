-- Suhuku: skema dan data contoh untuk Turso (libSQL, SQLite).
-- Dibuat oleh `pnpm ekspor-turso` dari basis data lokal setelah `pnpm migrate` dan `pnpm seed`.
-- Data di bawah bersifat contoh. Bukan data pelanggan nyata.
-- Impor ke database Turso yang kosong:
--   turso db shell <nama-database> < db/turso/001_skema_dan_contoh.sql

BEGIN;

CREATE TABLE Pengguna (
  id TEXT NOT NULL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  namaUsaha TEXT NOT NULL,
  dibuatPada INTEGER NOT NULL DEFAULT (unixepoch() * 1000)
);
CREATE TABLE Tim (
  id TEXT NOT NULL PRIMARY KEY,
  nama TEXT NOT NULL
);
CREATE TABLE Anggota (
  id TEXT NOT NULL PRIMARY KEY,
  timId TEXT NOT NULL REFERENCES Tim(id),
  penggunaId TEXT NOT NULL REFERENCES Pengguna(id),
  peran TEXT NOT NULL DEFAULT 'anggota',
  UNIQUE (timId, penggunaId)
);
CREATE TABLE Kontak (
  id TEXT NOT NULL PRIMARY KEY,
  penggunaId TEXT NOT NULL REFERENCES Pengguna(id),
  nama TEXT NOT NULL,
  tipe TEXT NOT NULL CHECK (tipe IN ('prospek', 'pelanggan')),
  dibuatPada INTEGER NOT NULL DEFAULT (unixepoch() * 1000)
);
CREATE TABLE Transaksi (
  id TEXT NOT NULL PRIMARY KEY,
  kontakId TEXT NOT NULL REFERENCES Kontak(id),
  nilai INTEGER NOT NULL CHECK (nilai >= 0),
  tanggal INTEGER NOT NULL
);
CREATE TABLE SkorKontak (
  id TEXT NOT NULL PRIMARY KEY,
  kontakId TEXT NOT NULL REFERENCES Kontak(id),
  skor INTEGER NOT NULL CHECK (skor BETWEEN 0 AND 100),
  tingkat TEXT NOT NULL CHECK (tingkat IN ('hot', 'warm', 'cold')),
  dihitung INTEGER NOT NULL DEFAULT (unixepoch() * 1000)
);
CREATE TABLE Langganan (
  id TEXT NOT NULL PRIMARY KEY,
  penggunaId TEXT NOT NULL UNIQUE REFERENCES Pengguna(id),
  paket TEXT NOT NULL CHECK (paket IN ('starter', 'growth', 'pro')),
  periode TEXT NOT NULL CHECK (periode IN ('bulanan', 'tahunan')),
  mulai INTEGER NOT NULL,
  berakhir INTEGER NOT NULL
);
CREATE TABLE _migrasi (nama TEXT NOT NULL PRIMARY KEY, diterapkanPada INTEGER NOT NULL DEFAULT (unixepoch() * 1000));

CREATE INDEX Kontak_penggunaId_idx ON Kontak(penggunaId);
CREATE INDEX Transaksi_kontakId_tanggal_idx ON Transaksi(kontakId, tanggal);
CREATE INDEX SkorKontak_kontakId_dihitung_idx ON SkorKontak(kontakId, dihitung);

INSERT INTO "Pengguna" ("id", "email", "namaUsaha", "dibuatPada") VALUES ('pg1', 'contoh1@contoh.test', 'Usaha Contoh 1', 1777827600000);
INSERT INTO "Pengguna" ("id", "email", "namaUsaha", "dibuatPada") VALUES ('pg2', 'contoh2@contoh.test', 'Usaha Contoh 2', 1781715600000);
INSERT INTO "Pengguna" ("id", "email", "namaUsaha", "dibuatPada") VALUES ('pg3', 'contoh3@contoh.test', 'Usaha Contoh 3', 1782925200000);
INSERT INTO "Pengguna" ("id", "email", "namaUsaha", "dibuatPada") VALUES ('pg4', 'contoh4@contoh.test', 'Usaha Contoh 4', 1787245200000);
INSERT INTO "Pengguna" ("id", "email", "namaUsaha", "dibuatPada") VALUES ('pg5', 'contoh5@contoh.test', 'Usaha Contoh 5', 1788022800000);
INSERT INTO "Pengguna" ("id", "email", "namaUsaha", "dibuatPada") VALUES ('pg6', 'contoh6@contoh.test', 'Usaha Contoh 6', 1788886800000);
INSERT INTO "Pengguna" ("id", "email", "namaUsaha", "dibuatPada") VALUES ('pg7', 'contoh7@contoh.test', 'Usaha Contoh 7', 1790960400000);
INSERT INTO "Pengguna" ("id", "email", "namaUsaha", "dibuatPada") VALUES ('pg8', 'contoh8@contoh.test', 'Usaha Contoh 8', 1792602000000);
INSERT INTO "Tim" ("id", "nama") VALUES ('tim1', 'Tim Contoh');
INSERT INTO "Anggota" ("id", "timId", "penggunaId", "peran") VALUES ('ang1', 'tim1', 'pg1', 'pemilik');
INSERT INTO "Anggota" ("id", "timId", "penggunaId", "peran") VALUES ('ang2', 'tim1', 'pg3', 'anggota');
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k001', 'pg1', 'Kontak Contoh 1', 'prospek', 1777860000000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k002', 'pg1', 'Kontak Contoh 2', 'pelanggan', 1777860000000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k003', 'pg2', 'Kontak Contoh 3', 'prospek', 1781748000000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k004', 'pg2', 'Kontak Contoh 4', 'pelanggan', 1781748000000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k005', 'pg3', 'Kontak Contoh 5', 'prospek', 1782957600000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k006', 'pg3', 'Kontak Contoh 6', 'pelanggan', 1782957600000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k007', 'pg4', 'Kontak Contoh 7', 'prospek', 1787277600000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k008', 'pg4', 'Kontak Contoh 8', 'pelanggan', 1787277600000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k009', 'pg5', 'Kontak Contoh 9', 'prospek', 1788055200000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k010', 'pg5', 'Kontak Contoh 10', 'pelanggan', 1788055200000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k011', 'pg6', 'Kontak Contoh 11', 'prospek', 1788919200000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k012', 'pg6', 'Kontak Contoh 12', 'pelanggan', 1788919200000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k013', 'pg7', 'Kontak Contoh 13', 'prospek', 1790992800000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k014', 'pg7', 'Kontak Contoh 14', 'pelanggan', 1790992800000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k015', 'pg8', 'Kontak Contoh 15', 'prospek', 1792634400000);
INSERT INTO "Kontak" ("id", "penggunaId", "nama", "tipe", "dibuatPada") VALUES ('k016', 'pg8', 'Kontak Contoh 16', 'pelanggan', 1792634400000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk002a', 'k002', 245000, 1786338000000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk002b', 'k002', 180000, 1789189200000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk004a', 'k004', 245000, 1786338000000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk004b', 'k004', 180000, 1789189200000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk006a', 'k006', 245000, 1786338000000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk006b', 'k006', 180000, 1789189200000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk008a', 'k008', 245000, 1786338000000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk008b', 'k008', 180000, 1789189200000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk010a', 'k010', 245000, 1786338000000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk010b', 'k010', 180000, 1789189200000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk012a', 'k012', 245000, 1786338000000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk012b', 'k012', 180000, 1789189200000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk014a', 'k014', 245000, 1786338000000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk014b', 'k014', 180000, 1789189200000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk016a', 'k016', 245000, 1786338000000);
INSERT INTO "Transaksi" ("id", "kontakId", "nilai", "tanggal") VALUES ('txk016b', 'k016', 180000, 1789189200000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk001', 'k001', 85, 'hot', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk002', 'k002', 29, 'cold', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk003', 'k003', 85, 'hot', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk004', 'k004', 29, 'cold', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk005', 'k005', 85, 'hot', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk006', 'k006', 29, 'cold', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk007', 'k007', 85, 'hot', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk008', 'k008', 29, 'cold', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk009', 'k009', 85, 'hot', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk010', 'k010', 29, 'cold', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk011', 'k011', 85, 'hot', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk012', 'k012', 29, 'cold', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk013', 'k013', 85, 'hot', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk014', 'k014', 29, 'cold', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk015', 'k015', 85, 'hot', 1793746800000);
INSERT INTO "SkorKontak" ("id", "kontakId", "skor", "tingkat", "dihitung") VALUES ('sk016', 'k016', 29, 'cold', 1793746800000);
INSERT INTO "Langganan" ("id", "penggunaId", "paket", "periode", "mulai", "berakhir") VALUES ('lgpg1', 'pg1', 'growth', 'tahunan', 1777827600000, 1809363600000);
INSERT INTO "Langganan" ("id", "penggunaId", "paket", "periode", "mulai", "berakhir") VALUES ('lgpg2', 'pg2', 'starter', 'bulanan', 1781715600000, 1797526800000);
INSERT INTO "Langganan" ("id", "penggunaId", "paket", "periode", "mulai", "berakhir") VALUES ('lgpg3', 'pg3', 'pro', 'tahunan', 1782925200000, 1814461200000);
INSERT INTO "Langganan" ("id", "penggunaId", "paket", "periode", "mulai", "berakhir") VALUES ('lgpg5', 'pg5', 'growth', 'bulanan', 1788022800000, 1795971600000);
INSERT INTO "Langganan" ("id", "penggunaId", "paket", "periode", "mulai", "berakhir") VALUES ('lgpg6', 'pg6', 'starter', 'tahunan', 1788886800000, 1820422800000);
INSERT INTO "Langganan" ("id", "penggunaId", "paket", "periode", "mulai", "berakhir") VALUES ('lgpg8', 'pg8', 'growth', 'bulanan', 1792602000000, 1795280400000);
INSERT INTO "_migrasi" ("nama", "diterapkanPada") VALUES ('0001_init.sql', 1793860478000);

COMMIT;
