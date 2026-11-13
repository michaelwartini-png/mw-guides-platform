#!/usr/bin/env node
/**
 * Download explicitly approved Wikimedia Commons photos and record attribution.
 * Usage: node scripts/import-commons-bucket-list.mjs
 * Requires outbound network access. Never silently accepts unknown licenses.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const entries = [
  { trip: "skandinavien-unlimited", file: "Nyhavn, Copenhague.jpg", slug: "kopenhagen-nyhavn" },
  { trip: "norwegen-lofoten", file: "Reine - Lofoten.jpg", slug: "lofoten-reine" },
  { trip: "skandinavien-unlimited", file: "Stockholm-Gamla-Stan-panorama.jpg", slug: "stockholm-gamla-stan" },
  { trip: "skandinavien-unlimited", file: "Helsinki Senate Square and Helsinki Cathedral in May 2026.jpg", slug: "helsinki-dom-senatsplatz" },
];
const allowed = new Set(["CC BY 4.0", "CC BY-SA 4.0", "CC0", "Public domain"]);
const root = path.resolve("public/images/bucket-list-2027");
const credits = [];
const agent = "MWGuidesTravelMagazine/0.1 (Wikimedia image attribution research)";
function plain(s = "") { return s.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').trim(); }
for (const entry of entries) {
  const params = new URLSearchParams({
    action: "query", format: "json", prop: "imageinfo",
    titles: "File:" + entry.file, iiprop: "url|extmetadata",
    iiurlwidth: "1280",
  });
  const response = await fetch("https://commons.wikimedia.org/w/api.php?" + params, { headers: { "User-Agent": agent } });
  if (!response.ok) throw new Error("Wikimedia API HTTP " + response.status);
  const json = await response.json();
  const page = Object.values(json.query?.pages ?? {})[0];
  const info = page?.imageinfo?.[0];
  if (!info?.thumburl || !info.extmetadata) throw new Error("Missing file or metadata: " + entry.file);
  const meta = info.extmetadata;
  const license = plain(meta.LicenseShortName?.value);
  if (!info.descriptionurl || !info.descriptionurl.includes("commons.wikimedia.org/wiki/File:")) throw new Error("Unexpected source page: " + entry.file);
  if (!allowed.has(license)) throw new Error("License requires manual review: " + entry.file + " (" + license + ")");
  const author = plain(meta.Artist?.value);
  const licenseUrl = meta.LicenseUrl?.value ?? "";
  if (!author || (!licenseUrl && license !== "Public domain")) throw new Error("Missing attribution: " + entry.file);
  const thumbnailUrl = new URL(info.thumburl);
  // Wikimedia may return thumbnail URLs from multiple official media hosts.
  // Log the hostname for diagnostics while rejecting untrusted hosts.
  const approvedHosts = new Set(["upload.wikimedia.org", "commons.wikimedia.org", "thumb.wikimedia.org"]);
  process.stdout.write("Thumbnail host for " + entry.file + ": " + thumbnailUrl.hostname + "\\n");
  if (thumbnailUrl.protocol !== "https:" || !approvedHosts.has(thumbnailUrl.hostname)) {
    throw new Error("Unexpected image host " + thumbnailUrl.hostname + " for " + entry.file);
  }
  const imageResponse = await fetch(info.thumburl, { headers: { "User-Agent": agent } });
  if (!imageResponse.ok) throw new Error("Image HTTP " + imageResponse.status);
  const contentType = imageResponse.headers.get("content-type") ?? "";
  if (!contentType.startsWith("image/")) throw new Error("Unexpected media type: " + contentType);
  const bytes = Buffer.from(await imageResponse.arrayBuffer());
  if (bytes.length > 8_000_000) throw new Error("Image unexpectedly large: " + entry.file);
  const ext = contentType.includes("png") ? ".png" : contentType.includes("webp") ? ".webp" : ".jpg";
  const destination = path.join(root, entry.trip, entry.slug + ext);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
  credits.push({
    trip: entry.trip, src: "/images/bucket-list-2027/" + entry.trip + "/" + entry.slug + ext,
    title: entry.file, author, license, licenseUrl,
    source: info.descriptionurl, modifications: "Wikimedia thumbnail resized to max 1280px; no further editing",
  });
  process.stdout.write("Saved " + destination + "\n");
}
await writeFile(path.join(root, "credits.json"), JSON.stringify(credits, null, 2) + "\n");
process.stdout.write("Saved attribution manifest: " + credits.length + " images\n");
