import type { Metadata } from "next";
import { BucketListOverview } from "@/components/bucket-list-2027/BucketListOverview";

export const metadata: Metadata = {
  title: "Europa Bucket List 2027 – Reiseideen",
  description: "Neun europäische Reiseideen. Alles kann – nichts muss.",
  robots: { index: false, follow: false, nocache: true },
};

export default function BucketList2027Page() {
  return <BucketListOverview />;
}
