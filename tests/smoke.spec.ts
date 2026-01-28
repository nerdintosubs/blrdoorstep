import { expect, test } from "@playwright/test";

test("homepage loads and primary CTA is visible", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: /doorstep massage in bangalore/i,
    })
  ).toBeVisible();
  await expect(
    page.getByRole("main").getByRole("link", { name: /book on whatsapp/i }).first()
  ).toBeVisible();
});

test("services page is reachable", async ({ page }) => {
  await page.goto("/services");
  await expect(
    page.getByRole("heading", { name: /tailored therapies/i })
  ).toBeVisible();
});
