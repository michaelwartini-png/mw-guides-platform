"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const collections: Record<string, { src: string; alt: string; caption: string }[]> = {
  "bodensee-unlimited": [
    { src: "/images/explore-trips/bodensee-konstanz.jpg", alt: "Konstanz am Bodensee", caption: "Konstanz" },
    { src: "/images/explore-trips/bodensee-schifffahrt.jpg", alt: "Schifffahrt auf dem Bodensee", caption: "Auf dem Wasser" },
    { src: "/images/explore-trips/bodensee-natur.jpg", alt: "Natur am Bodensee", caption: "Natur entdecken" },
    { src: "/images/explore-trips/bodensee-zeppelin.jpg", alt: "Zeppelin-Erlebnis am Bodensee", caption: "Zeppelin-Erlebnis" },
  ],
  "bratislava-wien-wachau": [
    { src: "/images/explore-trips/bratislava-tram.jpg", alt: "Straßenbahn in Bratislava", caption: "Bratislava" },
    { src: "/images/explore-trips/wien-tram-d.jpg", alt: "Straßenbahn in Wien", caption: "Wien" },
    { src: "/images/explore-trips/wachau.jpg", alt: "Wachau an der Donau", caption: "Wachau" },
    { src: "/images/explore-trips/wien-donau.png", alt: "Donau bei Wien", caption: "An der Donau" },
  ],
};
export function TravelGallery({ slug }: { slug: string }) {
  const photos = collections[slug];
  const [active, setActive] = useState<number | null>(null);
  if (!photos) return null;
  const current = active === null ? null : photos[active];
  return <section aria-label="Reisebilder" className="space-y-5">
    <div><p className="mwg-eyebrow text-[var(--mwg-accent)]">Reiseimpressionen</p><h3 className="mt-2 font-display text-3xl">Unterwegs in Bildern</h3><p className="mt-2 text-sm text-[var(--mwg-ink-70)]">Vorhandene Motive aus der MW-Guides-Mediensammlung. Bild anklicken zum Vergrößern.</p></div>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {photos.map((photo,i)=><figure key={photo.src}>
        <button type="button" onClick={()=>setActive(i)} aria-label={photo.caption+" vergrößern"} className="block aspect-video w-full overflow-hidden rounded-sm bg-[var(--mwg-line)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mwg-accent)]">
          <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
        </button>
        <figcaption className="mt-2 text-sm text-[var(--mwg-ink-70)]">{photo.caption}</figcaption>
      </figure>)}
    </div>
    {current && <div role="dialog" aria-modal="true" aria-label={current.caption} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={()=>setActive(null)}>
      <div className="relative flex max-h-full w-full max-w-5xl flex-col items-center gap-3" onClick={e=>e.stopPropagation()}>
        <button type="button" onClick={()=>setActive(null)} aria-label="Bild schließen" className="absolute right-0 top-0 rounded-full bg-white p-2 text-black"><X size={22}/></button>
        <img src={current.src} alt={current.alt} className="max-h-[76vh] w-auto max-w-full object-contain" />
        <p className="text-sm text-white">{current.caption} · {(active ?? 0)+1} / {photos.length}</p>
        <div className="flex gap-3">
          <button type="button" aria-label="Vorheriges Bild" onClick={()=>setActive(((active ?? 0)+photos.length-1)%photos.length)} className="rounded-full bg-white p-3 text-black"><ChevronLeft size={20}/></button>
          <button type="button" aria-label="Nächstes Bild" onClick={()=>setActive(((active ?? 0)+1)%photos.length)} className="rounded-full bg-white p-3 text-black"><ChevronRight size={20}/></button>
        </div>
      </div>
    </div>}
  </section>;
}
