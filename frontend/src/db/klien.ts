import { createClient, type Client } from "@libsql/client";
import path from "node:path";

// Satu cara membuat klien untuk semua lingkungan:
//   file:db/dev.db          lokal, relatif terhadap folder frontend (cwd)
//   libsql://nama.turso.io  Turso, memakai TURSO_AUTH_TOKEN (di Vercel: Environment Variables)
// Semua perintah (app, migrasi, seed, ekspor) dijalankan dari folder frontend.
export function urlDatabase(raw: string): string {
  if (!raw.startsWith("file:")) return raw;
  const berkas = raw.slice("file:".length);
  if (berkas === ":memory:") return raw;
  return "file:" + path.resolve(process.cwd(), berkas);
}

export function buatKlien(): Client {
  const url = process.env.DATABASE_URL ?? "file:db/dev.db";
  return createClient({ url: urlDatabase(url), authToken: process.env.TURSO_AUTH_TOKEN || undefined });
}

export function buatKlienDariUrl(url: string, authToken?: string): Client {
  return createClient({ url: urlDatabase(url), authToken });
}
