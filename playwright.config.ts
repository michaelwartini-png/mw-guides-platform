import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3000";
const externalPreview = Boolean(process.env.PLAYWRIGHT_BASE_URL);

export default defineConfig({
  testDir: "./tests/europa-bucket-list",
  timeout: 30_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  reporter: [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]],
  use: {
    ...(process.env.PLAYWRIGHT_PREVIEW_AUTH ? { httpCredentials: { username: process.env.PLAYWRIGHT_PREVIEW_AUTH.split(":")[0], password: process.env.PLAYWRIGHT_PREVIEW_AUTH.slice(process.env.PLAYWRIGHT_PREVIEW_AUTH.indexOf(":") + 1) } } : {}),
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    { name: "desktop-chromium", use: { ...devices["Desktop Chrome"], viewport: { width: 1920, height: 1080 } } },
    { name: "tablet-chromium", use: { ...devices["Desktop Chrome"], viewport: { width: 768, height: 1024 } } },
    { name: "mobile-chromium", use: { ...devices["Desktop Chrome"], viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
  ],
  ...(externalPreview ? {} : { webServer: { command: "npm run dev", url: baseURL, reuseExistingServer: !process.env.CI, timeout: 120_000 } }),
});
