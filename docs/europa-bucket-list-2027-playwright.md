# Europa Bucket List 2027 – Playwright QA

The preview component is not mounted on a public route. The tests remain opt-in until host-level authentication is configured.

## Setup
Install dependencies locally: `npm install`, `npm install --no-save @playwright/test`, `npx playwright install chromium`.

## Run
After a protected preview is deployed, set:
- `PLAYWRIGHT_BASE_URL`: preview origin.
- `PLAYWRIGHT_PREVIEW_PATH`: private page path.
- `PLAYWRIGHT_PREVIEW_AUTH`: optional Basic auth credentials (do not commit).
- `PREVIEW_PROTECTED_URL`: absolute private URL for unauthenticated access check.

Then run `npx playwright test`.

Tests cover desktop 1920x1080, tablet 768x1024, mobile 390x844; nine cards, search, filtering, detail navigation, horizontal overflow, JS exceptions and unauthenticated access denial.

**Important:** Skipped tests are not successful test results. Before release, require all tests to run and pass. A redirect alone does not establish strong access control: manually verify the auth destination and that the private content is not exposed in HTML, static assets, feeds, or public build artifacts. Check noindex and sitemap separately. Do not publish until access control is verified.
