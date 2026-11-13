import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { createHash, timingSafeEqual } from "node:crypto";
import { BucketListOverview } from "@/components/bucket-list-2027/BucketListOverview";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Europa Bucket List 2027 – private Vorschau",
  robots: { index: false, follow: false, nocache: true },
};

function constantTimeMatch(actual: string, expected: string): boolean {
  const a = createHash("sha256").update(actual).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

/**
 * Opt-in preview: disabled by default. On a preview deployment only, set
 * BUCKET_LIST_2027_PREVIEW_ENABLED=true
 * BUCKET_LIST_2027_PREVIEW_USER=<unique username>
 * BUCKET_LIST_2027_PREVIEW_PASSWORD=<strong random password>
 * Never set these variables in production or commit their values.
 */
export default async function BucketList2027Page() {
  if (process.env.BUCKET_LIST_2027_PREVIEW_ENABLED !== "true") notFound();
  const user = process.env.BUCKET_LIST_2027_PREVIEW_USER;
  const password = process.env.BUCKET_LIST_2027_PREVIEW_PASSWORD;
  if (!user || !password) notFound();

  const headerStore = await headers();
  const authHeader = headerStore.get("authorization") ?? "";
  let supplied = "";
  if (authHeader.startsWith("Basic ")) {
    try {
      supplied = Buffer.from(authHeader.slice(6), "base64").toString("utf8");
    } catch {
      supplied = "";
    }
  }
  // Do not render the page contents for unauthorized requests.
  if (!constantTimeMatch(supplied, user + ":" + password)) {
    const { unauthorized } = await import("next/navigation");
    unauthorized();
  }
  return <BucketListOverview />;
}
