import { expect, test } from "@playwright/test";

const previewPath = process.env.PLAYWRIGHT_PREVIEW_PATH ?? "/bucket-list-2027";

test.describe("Europa Bucket List 2027 – unlisted preview", () => {
  test("shows nine photo cards and searches Hydra", async ({ page }) => {
    await page.goto(previewPath);
    await expect(page.getByRole("heading", { name: "Europa Bucket List 2027" })).toBeVisible();
    await expect(page.getByRole("article")).toHaveCount(9);
    const photos = page.locator("article button img");
    await expect(photos).toHaveCount(9);
    await expect.poll(async () => photos.evaluateAll(images => images.every(img => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0))).toBe(true);
    await page.getByPlaceholder("Reiseziel, Stadt oder Erlebnis").fill("Hydra");
    await expect(page.getByRole("article")).toHaveCount(1);
    await page.getByRole("button", { name: "Hydra Unlimited öffnen" }).click();
    await expect(page.getByRole("heading", { name: "Unsere mögliche Route" })).toBeVisible();
    await page.getByRole("button", { name: "Alle neun Reisen" }).click();
    await page.getByPlaceholder("Reiseziel, Stadt oder Erlebnis").fill("");
    await expect(page.getByRole("article")).toHaveCount(9);
  });

  test("filters night ferry and has no horizontal overflow", async ({ page }) => {
    await page.goto(previewPath);
    await page.getByLabel("Verkehrsmittel").selectOption("Nachtfähre");
    await expect(page.getByRole("article")).toHaveCount(1);
    await expect(page.getByRole("article").getByRole("heading", { name: "Skandinavien Unlimited" })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  });

  test("opens Portugal direct link and displays seven gallery photos", async ({ page }) => {
    await page.goto(previewPath + "?reise=portugal-unlimited");
    await expect(page.getByRole("heading", { name: "Portugal Unlimited" })).toBeVisible();
    const images = page.locator('img[src*="/images/bucket-list-2027/portugal-unlimited/"]');
    await expect(images).toHaveCount(8); // hero + seven gallery images
    await expect.poll(async () => images.evaluateAll(items => items.every(img => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0))).toBe(true);
  });

  for (const trip of [
    { slug: "preveza-lefkada", galleryCount: 6 },
    { slug: "rotterdam-unlimited", galleryCount: 5 },
    { slug: "hydra-unlimited", galleryCount: 8 },
    { slug: "portugal-unlimited", galleryCount: 7 },
    { slug: "norwegen-lofoten", galleryCount: 5 },
    { slug: "skandinavien-unlimited", galleryCount: 4 },
    { slug: "bodensee-unlimited", galleryCount: 7 },
  ]) {
    test(`loads every licensed gallery image for ${trip.slug}`, async ({ page }) => {
      await page.goto(previewPath + "?reise=" + trip.slug);
      const gallery = page.getByRole("region", { name: "Reisebilder" });
      const images = gallery.locator("figure img");
      await expect(images).toHaveCount(trip.galleryCount);
      await expect.poll(async () => images.evaluateAll(items =>
        items.every(img => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0)
      )).toBe(true);
      await expect(gallery.getByText("Bild derzeit nicht verfügbar")).toHaveCount(0);
      await gallery.getByRole("button", { name: /vergrößern/ }).first().click();
      await expect(page.getByRole("dialog")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).toHaveCount(0);
    });
  }

  test("has no JavaScript exceptions or horizontal overflow", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(previewPath);
    await expect(page.getByRole("heading", { name: "Europa Bucket List 2027" })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    expect(errors).toEqual([]);
  });
});
