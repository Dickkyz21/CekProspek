// Entrypoint worker (BullMQ). Dijalankan oleh service `worker` di docker-compose.
import "reflect-metadata";
import { Worker } from "bullmq";
import { env } from "../config/env";

const koneksi = { url: env.REDIS_URL };

// Antrean yang direncanakan: skor-ulang, ringkasan-harian, impor-kontak, kirim-notifikasi.
new Worker("skor-ulang", async (job) => {
  console.log("skor-ulang", job.id);
}, { connection: koneksi });

console.log("Worker berjalan");
