// Membuat berkas SQL untuk diimpor ke Turso dari basis data lokal (setelah `pnpm migrate` dan `pnpm seed`).
// Isinya: skema seluruh tabel, indeks, dan semua baris (termasuk tabel _migrasi).
// Impor ke database Turso yang KOSONG:  turso db shell <nama> < db/turso/001_skema_dan_contoh.sql
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { buatKlien } from "../src/db/klien";

const TUJUAN = path.resolve(process.cwd(), "db/turso/001_skema_dan_contoh.sql");

// Urutan memperhatikan kunci asing: induk sebelum anak.
const URUTAN_TABEL = ["Pengguna", "Tim", "Anggota", "Kontak", "Transaksi", "SkorKontak", "Langganan", "_migrasi"];

function literal(v: unknown): string {
  if (v === null || v === undefined) return "NULL";
  if (typeof v === "number" || typeof v === "bigint") return String(v);
  if (typeof v === "string") return "'" + v.replace(/'/g, "''") + "'";
  if (v instanceof ArrayBuffer) return "X'" + Buffer.from(v).toString("hex") + "'";
  throw new Error(`Tipe nilai tidak didukung: ${typeof v}`);
}

async function main() {
  const klien = buatKlien();
  const skema = await klien.execute(
    "SELECT name, sql FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'"
  );
  const indeks = await klien.execute(
    "SELECT sql FROM sqlite_master WHERE type = 'index' AND sql IS NOT NULL AND name NOT LIKE 'sqlite_%'"
  );
  const skemaPerTabel = new Map(skema.rows.map((r) => [String(r.name), String(r.sql)]));

  const baris: string[] = [];
  baris.push("-- Suhuku: skema dan data contoh untuk Turso (libSQL, SQLite).");
  baris.push("-- Dibuat oleh `pnpm ekspor-turso` dari basis data lokal setelah `pnpm migrate` dan `pnpm seed`.");
  baris.push("-- Data di bawah bersifat contoh. Bukan data pelanggan nyata.");
  baris.push("-- Impor ke database Turso yang kosong:");
  baris.push("--   turso db shell <nama-database> < db/turso/001_skema_dan_contoh.sql");
  baris.push("");
  baris.push("BEGIN;");
  baris.push("");

  for (const nama of URUTAN_TABEL) {
    const sql = skemaPerTabel.get(nama);
    if (!sql) throw new Error(`Tabel ${nama} tidak ditemukan. Jalankan pnpm migrate dulu.`);
    baris.push(sql + ";");
  }
  baris.push("");
  for (const r of indeks.rows) baris.push(String(r.sql) + ";");
  baris.push("");

  for (const nama of URUTAN_TABEL) {
    const data = await klien.execute(`SELECT * FROM "${nama}"`);
    const kolom = data.columns.map((c) => `"${c}"`).join(", ");
    for (const row of data.rows) {
      const nilai = data.columns.map((c) => literal(row[c])).join(", ");
      baris.push(`INSERT INTO "${nama}" (${kolom}) VALUES (${nilai});`);
    }
  }

  baris.push("");
  baris.push("COMMIT;");
  baris.push("");

  mkdirSync(path.dirname(TUJUAN), { recursive: true });
  writeFileSync(TUJUAN, baris.join("\n"), "utf8");
  console.log(`Ditulis: ${TUJUAN} (${baris.length} baris)`);
  klien.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
