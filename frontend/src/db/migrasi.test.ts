import { describe, expect, it } from "vitest";
import { buatKlienDariUrl, urlDatabase } from "./klien";
import { jalankanMigrasi } from "./migrasi";

describe("migrasi", () => {
  it("menerapkan skema sekali dan melewatinya saat diulang", async () => {
    const klien = buatKlienDariUrl("file::memory:");
    expect(await jalankanMigrasi(klien)).toEqual(["0001_init.sql"]);
    expect(await jalankanMigrasi(klien)).toEqual([]);

    const tabel = await klien.execute("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name");
    const nama = tabel.rows.map((r) => r.name);
    for (const t of ["Pengguna", "Tim", "Anggota", "Kontak", "Transaksi", "SkorKontak", "Langganan", "_migrasi"]) {
      expect(nama).toContain(t);
    }
    klien.close();
  });

  it("menolak nilai di luar daftar yang diizinkan", async () => {
    const klien = buatKlienDariUrl("file::memory:");
    await jalankanMigrasi(klien);
    await klien.execute("INSERT INTO Pengguna (id, email, namaUsaha) VALUES ('p1', 'a@contoh.test', 'Usaha')");
    await klien.execute("INSERT INTO Kontak (id, penggunaId, nama, tipe) VALUES ('k1', 'p1', 'Kontak', 'prospek')");
    await expect(
      klien.execute("INSERT INTO Kontak (id, penggunaId, nama, tipe) VALUES ('k2', 'p1', 'Salah', 'lainnya')")
    ).rejects.toThrow();
    klien.close();
  });
});

describe("urlDatabase", () => {
  it("mengubah path file relatif menjadi absolut terhadap folder proyek", () => {
    expect(urlDatabase("file:db/dev.db")).toBe(`file:${process.cwd()}/db/dev.db`);
  });

  it("membiarkan URL Turso dan memori apa adanya", () => {
    expect(urlDatabase("libsql://contoh-org.turso.io")).toBe("libsql://contoh-org.turso.io");
    expect(urlDatabase("file::memory:")).toBe("file::memory:");
  });
});
