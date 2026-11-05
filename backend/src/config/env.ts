import { z } from "zod";

// Validasi env saat boot agar konfigurasi salah langsung terlihat.
const schema = z.object({
  DATABASE_URL: z.string().min(1).default("file:db/dev.db"),
  TURSO_AUTH_TOKEN: z.string().optional(),
  MIGRASI_SAAT_START: z.enum(["true", "false"]).default("true"),
  REDIS_URL: z.string().default("redis://localhost:6379"),
  PORT: z.coerce.number().default(4000),
  APP_ORIGIN: z.string().default("http://localhost:3000"),
  SESSION_SECRET: z.string().min(32),
  FITUR_PEMBAYARAN_AKTIF: z.enum(["true", "false"]).default("false"),
});

export const env = schema.parse(process.env);
