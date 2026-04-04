import { expect, test } from "@playwright/test";

test("homepage loads and primary CTA is visible", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: /doorstep massage in bangalore/i,
    })
  ).toBeVisible();
  const whatsappCta = page
    .getByRole("main")
    .getByRole("link", { name: /book on whatsapp/i })
    .first();
  await expect(whatsappCta).toBeVisible();
  await expect(whatsappCta).toHaveAttribute(
    "href",
    /wa\.me\/917068344125/
  );
});

test("services page is reachable", async ({ page }) => {
  await page.goto("/services");
  await expect(
    page.getByRole("heading", { name: /tailored therapies/i })
  ).toBeVisible();
});

test("indiranagar area page is reachable", async ({ page }) => {
  await page.goto("/areas/indiranagar");
  await expect(
    page.getByRole("heading", {
      name: /doorstep massage in indiranagar, bangalore/i,
    })
  ).toBeVisible();
});

test("contact page exposes primary WhatsApp link", async ({ page }) => {
  await page.goto("/contact");

  const primaryLink = page.getByRole("link", { name: /whatsapp/i }).first();

  await expect(primaryLink).toHaveAttribute("href", /wa\.me\/917068344125/);
});
