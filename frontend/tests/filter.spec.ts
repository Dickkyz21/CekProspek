import { test, expect } from "@playwright/test";

test("beranda memuat judul utama dari template", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Ketahui siapa yang siap beli");
});

test("tab Siap beli hanya menampilkan baris hot", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "Siap beli" }).click();
  await expect(page.getByRole("cell", { name: "Dewi Lestari" })).toBeVisible();
  await expect(page.getByRole("cell", { name: "Rina Pratama" })).toBeHidden();
});

test("toggle harga tahunan menampilkan harga tahunan", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Tahunan" }).click();
  await expect(page.getByText("Rp 950.000")).toBeVisible();
});
