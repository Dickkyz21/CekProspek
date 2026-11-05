import type { Client } from "@libsql/client";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

// Folder migrasi relatif terhadap folder frontend (cwd), sama di lokal dan Vercel.
export const FOLDER_MIGRASI = path.resolve(process.cwd(), "db/migrations");

// Menerapkan berkas .sql yang belum tercatat, berurutan dari nama berkas.
// Aman dijalankan berulang: migrasi yang sudah tercatat dilewati.
export async function jalankanMigrasi(klien: Client, folder = FOLDER_MIGRASI): Promise<string[]> {
  await klien.execute(
    "CREATE TABLE IF NOT EXISTS _migrasi (nama TEXT NOT NULL PRIMARY KEY, diterapkanPada INTEGER NOT NULL DEFAULT (unixepoch() * 1000))"
  );
  const sudah = new Set(
    (await klien.execute("SELECT nama FROM _migrasi")).rows.map((r) => String(r.nama))
  );

  const diterapkan: string[] = [];
  const berkas = readdirSync(folder).filter((f) => f.endsWith(".sql")).sort();
  for (const nama of berkas) {
    if (sudah.has(nama)) continue;
    const sql = readFileSync(path.join(folder, nama), "utf8");
    await klien.executeMultiple(sql);
    await klien.execute({ sql: "INSERT INTO _migrasi (nama) VALUES (?)", args: [nama] });
    diterapkan.push(nama);
  }
  return diterapkan;
}
