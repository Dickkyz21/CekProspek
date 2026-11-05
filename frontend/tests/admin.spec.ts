import { test, expect } from "@playwright/test";

test("ringkasan admin menampilkan judul dan kartu KPI", async ({ page }) => {
  await page.goto("/admin");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Ringkasan");
  await expect(page.getByText("Total pengguna")).toBeVisible();
});

test("halaman admin tidak terindeks mesin pencari", async ({ page }) => {
  await page.goto("/admin");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});

test("pencarian pengguna menyaring tabel", async ({ page }) => {
  await page.goto("/admin/pengguna");
  await page.getByPlaceholder("Cari usaha atau email").fill("contoh3@");
  await expect(page.getByRole("row")).toHaveCount(2); // header + satu baris
  await expect(page.getByText("Menampilkan 1 dari 8 pengguna.")).toBeVisible();
});

test("filter Belum berlangganan hanya menampilkan pengguna tanpa paket", async ({ page }) => {
  await page.goto("/admin/pengguna");
  await page.getByRole("tab", { name: "Belum berlangganan" }).click();
  await expect(page.getByText("Menampilkan 2 dari 8 pengguna.")).toBeVisible();
});

test("halaman langganan menampilkan paket dan tabel", async ({ page }) => {
  await page.goto("/admin/langganan");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Langganan");
  await expect(page.getByRole("cell", { name: "Growth" }).first()).toBeVisible();
});
