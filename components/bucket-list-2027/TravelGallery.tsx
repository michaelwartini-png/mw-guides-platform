"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const collections: Record<string, { src: string; alt: string; caption: string; credit?: { author: string; source: string; license: string; licenseUrl: string } }[]> = {
  "skandinavien-unlimited": [
    { src: "/images/bucket-list-2027/skandinavien-unlimited/kopenhagen-nyhavn.jpg", alt: "Nyhavn mit farbigen Häusern am Hafen von Kopenhagen", caption: "Kopenhagen · Nyhavn", credit: { author: "Bene Riobó", source: "https://commons.wikimedia.org/wiki/File:Nyhavn,_Copenhague.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
  ],
  "norwegen-lofoten": [
    { src: "/images/bucket-list-2027/norwegen-lofoten/lofoten-reine.jpg", alt: "Fischerdorf Reine auf den Lofoten in Norwegen", caption: "Lofoten · Reine", credit: { author: "Jakub Fryš", source: "https://commons.wikimedia.org/wiki/File:Reine_-_Lofoten.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
  ],
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
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const closeButton = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const close = () => {
    setActive(null);
    requestAnimationFrame(() => lastTrigger.current?.focus());
  };
  useEffect(() => {
    if (active === null || !photos) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close(); }
      if (event.key === "ArrowLeft") { event.preventDefault(); setActive(i => i === null ? null : (i + photos.length - 1) % photos.length); }
      if (event.key === "ArrowRight") { event.preventDefault(); setActive(i => i === null ? null : (i + 1) % photos.length); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, photos]);
  if (!photos) return null;
  const current = active === null ? null : photos[active];
  return <section aria-label="Reisebilder" className="space-y-5">
    <div><p className="mwg-eyebrow text-[var(--mwg-accent)]">Reiseimpressionen</p><h3 className="mt-2 font-display text-3xl">Unterwegs in Bildern</h3><p className="mt-2 text-sm text-[var(--mwg-ink-70)]">Reisebilder aus der MW-Guides-Mediensammlung und Wikimedia Commons. Bild anklicken zum Vergrößern.</p></div>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {photos.map((photo,i)=><figure key={photo.src}>
        {failedImages.includes(photo.src) ? <div role="status" className="flex aspect-video flex-col items-center justify-center gap-2 bg-white p-5 text-center text-sm"><span>Bild derzeit nicht verfügbar</span>{photo.credit && <a href={photo.credit.source} target="_blank" rel="noopener noreferrer" className="underline">Original bei Wikimedia öffnen</a>}</div> : <button type="button" onClick={(event)=>{ lastTrigger.current=event.currentTarget; setActive(i); }} aria-label={photo.caption+" vergrößern"} className="block aspect-video w-full overflow-hidden rounded-sm bg-[var(--mwg-line)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mwg-accent)]">
          <img src={photo.src} alt={photo.alt} loading="lazy" onError={()=>setFailedImages(previous => previous.includes(photo.src) ? previous : [...previous, photo.src])} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
        </button>}
        <figcaption className="mt-2 text-sm text-[var(--mwg-ink-70)]">{photo.caption}{photo.credit && <span className="mt-1 block text-xs">Foto: {photo.credit.author} · <a href={photo.credit.source} target="_blank" rel="noopener noreferrer" className="underline">Wikimedia Commons</a> · <a href={photo.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">{photo.credit.license}</a> · unverändert, auf Anzeigegröße skaliert</span>}</figcaption>
      </figure>)}
    </div>
    {current && <div role="dialog" aria-modal="true" aria-label={current.caption} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={close}>
      <div className="relative flex max-h-full w-full max-w-5xl flex-col items-center gap-3" onClick={e=>e.stopPropagation()}>
        <button ref={closeButton} type="button" onClick={close} aria-label="Bild schließen" className="absolute right-0 top-0 rounded-full bg-white p-2 text-black"><X size={22}/></button>
        <img src={current.src} alt={current.alt} className="max-h-[76vh] w-auto max-w-full object-contain" />
        <p className="text-sm text-white">{current.caption} · {(active ?? 0)+1} / {photos.length}{current.credit && <span className="block text-center text-xs">Foto: {current.credit.author} · <a href={current.credit.source} target="_blank" rel="noopener noreferrer" className="underline">Quelle</a> · <a href={current.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">{current.credit.license}</a></span>}</p>
        <div className="flex gap-3">
          <button type="button" aria-label="Vorheriges Bild" onClick={()=>setActive(((active ?? 0)+photos.length-1)%photos.length)} className="rounded-full bg-white p-3 text-black"><ChevronLeft size={20}/></button>
          <button type="button" aria-label="Nächstes Bild" onClick={()=>setActive(((active ?? 0)+1)%photos.length)} className="rounded-full bg-white p-3 text-black"><ChevronRight size={20}/></button>
        </div>
      </div>
    </div>}
  </section>;
}
