import { expect, test } from "@playwright/test";

/**
 * Security gate for a deployed private preview.
 * Requires PREVIEW_PROTECTED_URL to be a known private page URL.
 * Must run without authentication and verify denial at the host.
 */
test("unauthenticated visitors cannot read private preview", async ({ request }) => {
  const url = process.env.PREVIEW_PROTECTED_URL;
  test.skip(!url, "Protected preview URL not configured.");
  const response = await request.get(url!, { maxRedirects: 0 });
  // 401/403 for direct protection, or a redirect to an auth provider.
  expect([301, 302, 303, 307, 308, 401, 403]).toContain(response.status());
  if (response.status() >= 300 && response.status() < 400) {
    const location = response.headers()["location"] ?? "";
    expect(location).toMatch(/login|auth|signin|identity/i);
  }
});
