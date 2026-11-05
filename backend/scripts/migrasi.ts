// Menerapkan migrasi ke basis data yang ditunjuk DATABASE_URL (file lokal atau libsql:// Turso).
import { buatKlien } from "../src/db/klien";
import { jalankanMigrasi } from "../src/db/migrasi";

async function main() {
  const klien = buatKlien();
  const baru = await jalankanMigrasi(klien);
  console.log(baru.length > 0 ? `Diterapkan: ${baru.join(", ")}` : "Tidak ada migrasi baru.");
  klien.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
