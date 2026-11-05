// Data fiktif untuk pengembangan lokal. Tidak ada data pelanggan nyata.
// Angka dan nama sama dengan frontend/src/content/admin.ts agar pratinjau dan basis data cocok.
// Hanya berjalan pada file lokal (DATABASE_URL=file:...). Untuk Turso, lihat docs/deploy.
import { buatKlien } from "../src/db/klien";
import { jalankanMigrasi } from "../src/db/migrasi";

const url = process.env.DATABASE_URL ?? "file:db/dev.db";
if (!url.startsWith("file:")) {
  throw new Error("Seed hanya untuk basis data lokal. Untuk Turso, impor db/turso/001_skema_dan_contoh.sql.");
}

type Stmt = { sql: string; args: (string | number | null)[] };

// Jam 00:00 WIB (UTC+7) pada tanggal yang diberikan, dalam milidetik.
function ms(tanggal: string, jam = 0): number {
  return Date.parse(`${tanggal}T${String(jam).padStart(2, "0")}:00:00+07:00`);
}

const pengguna: { id: string; namaUsaha: string; email: string; paket: string | null; periode: string | null; bergabung: string; berakhir: string | null }[] = [
  { id: "pg1", namaUsaha: "Usaha Contoh 1", email: "contoh1@contoh.test", paket: "growth", periode: "tahunan", bergabung: "2026-05-04", berakhir: "2027-05-04" },
  { id: "pg2", namaUsaha: "Usaha Contoh 2", email: "contoh2@contoh.test", paket: "starter", periode: "bulanan", bergabung: "2026-06-18", berakhir: "2026-12-18" },
  { id: "pg3", namaUsaha: "Usaha Contoh 3", email: "contoh3@contoh.test", paket: "pro", periode: "tahunan", bergabung: "2026-07-02", berakhir: "2027-07-02" },
  { id: "pg4", namaUsaha: "Usaha Contoh 4", email: "contoh4@contoh.test", paket: null, periode: null, bergabung: "2026-08-21", berakhir: null },
  { id: "pg5", namaUsaha: "Usaha Contoh 5", email: "contoh5@contoh.test", paket: "growth", periode: "bulanan", bergabung: "2026-08-30", berakhir: "2026-11-30" },
  { id: "pg6", namaUsaha: "Usaha Contoh 6", email: "contoh6@contoh.test", paket: "starter", periode: "tahunan", bergabung: "2026-09-09", berakhir: "2027-09-09" },
  { id: "pg7", namaUsaha: "Usaha Contoh 7", email: "contoh7@contoh.test", paket: null, periode: null, bergabung: "2026-10-03", berakhir: null },
  { id: "pg8", namaUsaha: "Usaha Contoh 8", email: "contoh8@contoh.test", paket: "growth", periode: "bulanan", bergabung: "2026-10-22", berakhir: "2026-11-22" },
];

function bangunData(): Stmt[] {
  const stmts: Stmt[] = [];
  const tambah = (sql: string, args: Stmt["args"]) => stmts.push({ sql, args });

  // Hapus isi tabel (urutan dari anak ke induk), lalu isi ulang.
  for (const t of ["SkorKontak", "Transaksi", "Kontak", "Langganan", "Anggota", "Tim", "Pengguna"]) {
    tambah(`DELETE FROM ${t}`, []);
  }

  for (const u of pengguna) {
    tambah("INSERT INTO Pengguna (id, email, namaUsaha, dibuatPada) VALUES (?, ?, ?, ?)", [u.id, u.email, u.namaUsaha, ms(u.bergabung)]);
  }

  tambah("INSERT INTO Tim (id, nama) VALUES (?, ?)", ["tim1", "Tim Contoh"]);
  tambah("INSERT INTO Anggota (id, timId, penggunaId, peran) VALUES (?, ?, ?, ?)", ["ang1", "tim1", "pg1", "pemilik"]);
  tambah("INSERT INTO Anggota (id, timId, penggunaId, peran) VALUES (?, ?, ?, ?)", ["ang2", "tim1", "pg3", "anggota"]);

  // Dua kontak per pengguna: satu prospek (hot) dan satu pelanggan (cold) dengan riwayat transaksi.
  let n = 0;
  for (const u of pengguna) {
    for (const [tipe, tingkat, skor] of [["prospek", "hot", 85], ["pelanggan", "cold", 29]] as const) {
      n += 1;
      const kid = `k${String(n).padStart(3, "0")}`;
      tambah("INSERT INTO Kontak (id, penggunaId, nama, tipe, dibuatPada) VALUES (?, ?, ?, ?, ?)", [kid, u.id, `Kontak Contoh ${n}`, tipe, ms(u.bergabung, 9)]);
      tambah("INSERT INTO SkorKontak (id, kontakId, skor, tingkat, dihitung) VALUES (?, ?, ?, ?, ?)", [`s${kid}`, kid, skor, tingkat, ms("2026-11-04", 6)]);
      if (tipe === "pelanggan") {
        tambah("INSERT INTO Transaksi (id, kontakId, nilai, tanggal) VALUES (?, ?, ?, ?)", [`tx${kid}a`, kid, 245000, ms("2026-08-10", 12)]);
        tambah("INSERT INTO Transaksi (id, kontakId, nilai, tanggal) VALUES (?, ?, ?, ?)", [`tx${kid}b`, kid, 180000, ms("2026-09-12", 12)]);
      }
    }
    if (u.paket && u.periode && u.berakhir) {
      tambah("INSERT INTO Langganan (id, penggunaId, paket, periode, mulai, berakhir) VALUES (?, ?, ?, ?, ?, ?)", [`lg${u.id}`, u.id, u.paket, u.periode, ms(u.bergabung), ms(u.berakhir)]);
    }
  }
  return stmts;
}

async function main() {
  const klien = buatKlien();
  await jalankanMigrasi(klien);
  await klien.batch(bangunData(), "write");
  const hitung = await klien.execute("SELECT (SELECT COUNT(*) FROM Pengguna) AS pengguna, (SELECT COUNT(*) FROM Kontak) AS kontak, (SELECT COUNT(*) FROM Langganan) AS langganan");
  console.log("Seed selesai:", hitung.rows[0]);
  klien.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
