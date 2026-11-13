import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BucketListOverview } from "@/components/bucket-list-2027/BucketListOverview";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata: Metadata = {
  title: "Europa Bucket List 2027 – private Vorschau",
  robots: { index: false, follow: false, nocache: true },
};

/** Requests must pass the HTTP Basic access gate in proxy.ts first. */
export default function BucketList2027Page() {
  if (process.env.BUCKET_LIST_2027_PREVIEW_ENABLED !== "true") notFound();
  if (!process.env.BUCKET_LIST_2027_PREVIEW_USER || !process.env.BUCKET_LIST_2027_PREVIEW_PASSWORD) notFound();
  return <BucketListOverview />;
}
