#!/usr/bin/env node
/**
 * Download explicitly approved Wikimedia Commons photos and record attribution.
 * Usage: node scripts/import-commons-bucket-list.mjs
 * Requires outbound network access. Never silently accepts unknown licenses.
 */
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const entries = [
  { trip: "skandinavien-unlimited", file: "Nyhavn, Copenhague.jpg", slug: "kopenhagen-nyhavn" },
  { trip: "skandinavien-unlimited", file: "MS Silja Symphony in Stockholm.jpg", slug: "stockholm-helsinki-nachtfaehre" },
  { trip: "norwegen-lofoten", file: "Reine - Lofoten.jpg", slug: "lofoten-reine" },
  { trip: "norwegen-lofoten", file: "Hurtigruten-ships hg.jpg", slug: "norwegen-hurtigruten-schiffe" },
  { trip: "norwegen-lofoten", file: "At Eliassen Rorbuer fishermen cabin area in Hamnøya, Moskenes, Lofoten, Norway, 2015 April - 2.jpg", slug: "lofoten-hamnoy-rorbuer" },
  { trip: "norwegen-lofoten", file: "Bodø Hafen lub 2025-07-24 img01.jpg", slug: "bodo-hafen" },
  { trip: "norwegen-lofoten", file: "09512 Tromsdalen church and bridge - Tromso, Norway - V-P.jpg", slug: "tromso-eismeerkathedrale" },
  { trip: "skandinavien-unlimited", file: "Stockholm-Gamla-Stan-panorama.jpg", slug: "stockholm-gamla-stan" },
  { trip: "skandinavien-unlimited", file: "Helsinki Senate Square and Helsinki Cathedral in May 2026.jpg", slug: "helsinki-dom-senatsplatz" },
  { trip: "rotterdam-unlimited", file: "Rotterdam Erasmusbrug seen from Willemsplein.jpg", slug: "rotterdam-erasmusbruecke" },
  { trip: "rotterdam-unlimited", file: "Rotterdam cubic houses.jpg", slug: "rotterdam-kubushaeuser" },
  { trip: "rotterdam-unlimited", file: "Markthal Rotterdam.jpg", slug: "rotterdam-markthal" },
  { trip: "rotterdam-unlimited", file: "Canal in Delft.JPG", slug: "delft-gracht" },
  { trip: "rotterdam-unlimited", file: "Windmills, Kinderdijk.jpg", slug: "kinderdijk-windmuehlen" },
  { trip: "preveza-lefkada", file: "Porto Katsiki Beach, Lefkada, Ionian Islands, Greece.jpg", slug: "lefkada-porto-katsiki" },
  { trip: "preveza-lefkada", file: "Wharf in Preveza, Greece.jpg", slug: "preveza-hafen-abend" },
  { trip: "preveza-lefkada", file: "Egremni beach.JPG", slug: "lefkada-egremni" },
  { trip: "preveza-lefkada", file: "Lefkada Beach.jpg", slug: "lefkada-kueste" },
  { trip: "preveza-lefkada", file: "Nydri port.jpg", slug: "nidri-hafen" },
  { trip: "preveza-lefkada", file: "The Old Archaeological Museum of Nicopolis.jpg", slug: "nikopolis-altes-museum" },
  { trip: "hydra-unlimited", file: "Hydra harbour, Greece.jpg", slug: "hydra-hafen" },
  { trip: "hydra-unlimited", file: "0157 - Hydra.jpg", slug: "hydra-inselblick" },
  { trip: "hydra-unlimited", file: "0058 - Hydra.jpg", slug: "hydra-ortsimpression" },
  { trip: "hydra-unlimited", file: "Water taxis in Hydra Greece (43958691225).jpg", slug: "hydra-wassertaxis" },
  { trip: "hydra-unlimited", file: "Vlychos Beach Hydra, Greece (43058081140).jpg", slug: "hydra-vlychos-strand" },
  { trip: "hydra-unlimited", file: "20190512 095 spetses.jpg", slug: "ausflug-spetses-hafen" },
  { trip: "hydra-unlimited", file: "20190512 313 spetses.jpg", slug: "ausflug-spetses-hafenansicht" },
  { trip: "hydra-unlimited", file: "Poros 2015.jpg", slug: "ausflug-poros-hafen" },
  { trip: "bodensee-unlimited", file: "Rhine Falls in Switzerland.jpg", slug: "rheinfall-schaffhausen" },
  { trip: "bodensee-unlimited", file: "Mainau-4.jpg", slug: "mainau-tulpenfeld" },
  { trip: "bodensee-unlimited", file: "Stein am Rhein. Les maisons peintes du centre-ville.jpg", slug: "stein-am-rhein-bemalte-haeuser" },
  { trip: "portugal-unlimited", file: "Porto Panoramic1.jpg", slug: "porto-panorama" },
  { trip: "portugal-unlimited", file: "VIVA DOURO 5378.jpg", slug: "porto-douro-ausflugsboot" },
  { trip: "portugal-unlimited", file: "Porto, vista da Douro (01).jpg", slug: "porto-douro-vom-schiff" },
  { trip: "portugal-unlimited", file: "Tram at Rua de Santa Catarina in Porto (1).jpg", slug: "porto-historische-tram" },
  { trip: "portugal-unlimited", file: "Tramway de Porto, ligne 1.jpg", slug: "porto-tram-linie-1" },
  { trip: "portugal-unlimited", file: "Lisboa, tranvía 28.jpg", slug: "lissabon-tram-28" },
  { trip: "portugal-unlimited", file: "A panoramic view of the Dom Luís I Bridge spanning the Douro River in Porto, Portugal, with a yellow tram crossing and the historic city skyline in the background. (55246746406).jpg", slug: "porto-douro-bruecke" },
];
const allowed = new Set(["CC BY 2.0", "CC BY 4.0", "CC BY-SA 4.0", "CC0", "Public domain"]);
const root = path.resolve("public/images/bucket-list-2027");
const credits = [];
// Preserve previously imported credits when expanding the selection.
let previousCredits = [];
try {
  previousCredits = JSON.parse(await readFile(path.join(root, "credits.json"), "utf8"));
  if (!Array.isArray(previousCredits)) throw new Error("Invalid credits manifest");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const agent = "MWGuidesTravelMagazine/0.1 (Wikimedia image attribution research)";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchWithBackoff(url) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const response = await fetch(url, { headers: { "User-Agent": agent } });
    if (response.status !== 429 && response.status < 500) return response;
    if (attempt === 4) return response;
    const retryAfter = Number(response.headers.get("retry-after"));
    const delay = Number.isFinite(retryAfter) && retryAfter > 0
      ? Math.min(retryAfter * 1000, 120000)
      : Math.min(10000 * 2 ** attempt, 120000);
    process.stdout.write("Wikimedia HTTP " + response.status + "; retry in " + Math.round(delay / 1000) + "s\n");
    await wait(delay);
  }
}

function plain(s = "") { return s.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').trim(); }
for (const entry of entries) {
  const prior = previousCredits.find((item) => item.trip === entry.trip && item.src?.split("/").pop()?.startsWith(entry.slug + "."));
  if (prior) {
    const localFile = path.resolve("public", prior.src.replace(/^\//, ""));
    try {
      if ((await stat(localFile)).size > 0) {
        process.stdout.write("Already imported: " + entry.file + "\n");
        continue;
      }
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  const params = new URLSearchParams({
    action: "query", format: "json", prop: "imageinfo",
    titles: "File:" + entry.file, iiprop: "url|extmetadata",
    iiurlwidth: "1280",
  });
  const response = await fetchWithBackoff("https://commons.wikimedia.org/w/api.php?" + params);
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
  const imageResponse = await fetchWithBackoff(info.thumburl);
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
  await wait(1200);
}
const importedSources = new Set(credits.map((entry) => entry.source));
const mergedCredits = [...previousCredits.filter((entry) => !importedSources.has(entry.source)), ...credits];
await writeFile(path.join(root, "credits.json"), JSON.stringify(mergedCredits, null, 2) + "\n");
process.stdout.write("Saved attribution manifest: " + mergedCredits.length + " images\n");
