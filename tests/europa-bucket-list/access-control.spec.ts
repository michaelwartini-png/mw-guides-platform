import { expect, test } from "@playwright/test";

/**
 * The Netlify deploy preview is intentionally unlisted, NOT password protected.
 * Check search-engine indexing directives; never claim this provides access control.
 */
test("preview carries a noindex directive", async ({ page }) => {
  await page.goto(process.env.PLAYWRIGHT_PREVIEW_PATH ?? "/bucket-list-2027");
  const robots = await page.locator('meta[name="robots"]').getAttribute("content");
  expect(robots?.toLowerCase()).toContain("noindex");
});
