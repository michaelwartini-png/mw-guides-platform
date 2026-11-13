import { expect, test } from "@playwright/test";

/**
 * These tests are intentionally opt-in: no private preview route is exposed
 * until the host-level access control has been configured and verified.
 *
 * PLAYWRIGHT_PREVIEW_PATH: path to protected preview, e.g. /bucket-list-2027
 * PLAYWRIGHT_PREVIEW_AUTH: Basic auth user:password, if host uses Basic auth.
 * PLAYWRIGHT_BASE_URL: protected preview origin.
 */
const previewPath = process.env.PLAYWRIGHT_PREVIEW_PATH;

test.describe("Europa Bucket List 2027 – private preview", () => {
  test.skip(!previewPath, "Private preview not deployed yet; no public route must be created for testing.");

  test("renders nine trips and allows searching", async ({ page }) => {
    await page.goto(previewPath!);
    await expect(page.getByRole("heading", { name: "Europa Bucket List 2027" })).toBeVisible();
    await expect(page.getByRole("article")).toHaveCount(9);
    await page.getByPlaceholder("Reiseziel, Stadt oder Erlebnis").fill("Hydra");
    await expect(page.getByRole("article")).toHaveCount(1);
    await expect(page.getByRole("heading", { name: "Hydra Unlimited" })).toBeVisible();
    await page.getByRole("button", { name: "Reise entdecken" }).click();
    await expect(page.getByRole("heading", { name: "Mögliche Route" })).toBeVisible();
    await page.getByRole("button", { name: "Alle neun Reisen" }).click();
    await page.getByPlaceholder("Reiseziel, Stadt oder Erlebnis").fill("");
    await expect(page.getByRole("article")).toHaveCount(9);
  });

  test("filters transport and has no horizontal overflow", async ({ page }) => {
    await page.goto(previewPath!);
    await page.getByLabel("Verkehrsmittel").selectOption("Nachtfähre");
    await expect(page.getByRole("article")).toHaveCount(1);
    await expect(page.getByRole("heading", { name: "Skandinavien Unlimited" })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(overflow).toBe(false);
  });

  test("does not leak browser errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(previewPath!);
    await expect(page.getByRole("heading", { name: "Europa Bucket List 2027" })).toBeVisible();
    expect(errors).toEqual([]);
  });
});
