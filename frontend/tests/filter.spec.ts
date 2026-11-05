import { test, expect } from "@playwright/test";

test("halaman beranda memuat judul utama", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Ketahui siapa yang siap beli");
});

test("tab Siap beli hanya menampilkan baris hot", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "Siap beli" }).click();
  await expect(page.getByText("Dewi Lestari")).toBeVisible();
  await expect(page.getByText("Rina Pratama")).toHaveCount(0);
});
