import type { Metadata } from "next";
import Link from "next/link";
import credits from "@/public/images/bucket-list-2027/credits.json";

export const metadata: Metadata = {
  title: "Bildnachweise – Europa Bucket List 2027",
  robots: { index: false, follow: false, nocache: true },
};

const labels: Record<string, string> = {
  "skandinavien-unlimited": "Skandinavien Unlimited",
  "norwegen-lofoten": "Norwegen & Lofoten",
};

export default function BildnachweisePage() {
  return <main className="min-h-screen bg-[var(--mwg-paper)] text-[var(--mwg-ink)]">
    <div className="mx-auto max-w-5xl px-6 py-12 lg:py-20">
      <Link href="/bucket-list-2027" className="text-sm text-[var(--mwg-accent)] hover:underline">← Zur Europa Bucket List 2027</Link>
      <p className="mwg-eyebrow mt-12 text-[var(--mwg-accent)]">Transparenz & Lizenzen</p>
      <h1 className="mwg-display-xl mt-3">Bildnachweise</h1>
      <p className="mt-5 max-w-2xl text-[var(--mwg-ink-70)]">Diese Übersicht dokumentiert die aus Wikimedia Commons importierten Reisefotos. Andere Bilder aus der bestehenden MW-Guides-Mediensammlung sind hier nicht aufgeführt.</p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {credits.map((photo) => <figure key={photo.src} className="overflow-hidden border border-[var(--mwg-line)] bg-white">
          <img src={photo.src} alt={photo.title} loading="lazy" className="aspect-video w-full object-cover" />
          <figcaption className="space-y-2 p-5 text-sm">
            <p className="font-medium">{labels[photo.trip] ?? photo.trip} · {photo.title}</p>
            <p>Fotograf: {photo.author}</p>
            <p>Lizenz: <a className="underline" href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">{photo.license}</a></p>
            <p><a className="underline" href={photo.source} target="_blank" rel="noopener noreferrer">Originaldatei bei Wikimedia Commons</a></p>
            <p className="text-xs text-[var(--mwg-ink-70)]">Bearbeitung: {photo.modifications}</p>
          </figcaption>
        </figure>)}
      </div>
    </div>
  </main>;
}
