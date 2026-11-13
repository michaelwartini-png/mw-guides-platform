"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const collections: Record<string, { src: string; alt: string; caption: string; credit?: { author: string; source: string; license: string; licenseUrl: string } }[]> = {
  "skandinavien-unlimited": [
    { src: "/images/bucket-list-2027/skandinavien-unlimited/kopenhagen-nyhavn.jpg", alt: "Nyhavn mit farbigen Häusern am Hafen von Kopenhagen", caption: "Kopenhagen · Nyhavn", credit: { author: "Bene Riobó", source: "https://commons.wikimedia.org/wiki/File:Nyhavn,_Copenhague.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/skandinavien-unlimited/stockholm-gamla-stan.jpg", alt: "Panorama der Stockholmer Altstadt Gamla Stan", caption: "Stockholm · Gamla Stan", credit: { author: "Acediscovery", source: "https://commons.wikimedia.org/wiki/File:Stockholm-Gamla-Stan-panorama.jpg", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/" } },
    { src: "/images/bucket-list-2027/skandinavien-unlimited/helsinki-dom-senatsplatz.jpg", alt: "Dom von Helsinki über dem Senatsplatz", caption: "Helsinki · Dom und Senatsplatz", credit: { author: "JIP", source: "https://commons.wikimedia.org/wiki/File:Helsinki_Senate_Square_and_Helsinki_Cathedral_in_May_2026.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
  ],
  "norwegen-lofoten": [
    { src: "/images/bucket-list-2027/norwegen-lofoten/bodo-hafen.jpg", alt: "Hafen von Bodø in Nordnorwegen", caption: "Bodø · Hafen", credit: { author: "Lukas Beck", source: "https://commons.wikimedia.org/wiki/File:Bod%C3%B8_Hafen_lub_2025-07-24_img01.jpg", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/" } },
    { src: "/images/bucket-list-2027/norwegen-lofoten/lofoten-reine.jpg", alt: "Fischerdorf Reine auf den Lofoten in Norwegen", caption: "Lofoten · Reine", credit: { author: "Jakub Fryš", source: "https://commons.wikimedia.org/wiki/File:Reine_-_Lofoten.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/norwegen-lofoten/tromso-eismeerkathedrale.jpg", alt: "Eismeerkathedrale und Brücke in Tromsø", caption: "Tromsø · Eismeerkathedrale", credit: { author: "Virtual-Pano", source: "https://commons.wikimedia.org/wiki/File:09512_Tromsdalen_church_and_bridge_-_Tromso,_Norway_-_V-P.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
  ],
  "portugal-unlimited": [
    { src: "/images/bucket-list-2027/portugal-unlimited/porto-panorama.jpg", alt: "Panorama von Porto am Douro", caption: "Porto · Stadtpanorama", credit: { author: "Mайкл Гиммельфарб", source: "https://commons.wikimedia.org/wiki/File:Porto_Panoramic1.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/portugal-unlimited/porto-historische-tram.jpg", alt: "Historische Straßenbahn in Porto an der Rua de Santa Catarina", caption: "Porto · historische Straßenbahn", credit: { author: "Krzysztof Golik", source: "https://commons.wikimedia.org/wiki/File:Tram_at_Rua_de_Santa_Catarina_in_Porto_(1).jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/portugal-unlimited/porto-douro-bruecke.jpg", alt: "Brücke Dom Luís I über den Douro in Porto", caption: "Porto · Dom-Luís-I-Brücke und Douro", credit: { author: "Michael Gaylard from Horsham, UK", source: "https://commons.wikimedia.org/wiki/File:A_panoramic_view_of_the_Dom_Lu%C3%ADs_I_Bridge_spanning_the_Douro_River_in_Porto,_Portugal,_with_a_yellow_tram_crossing_and_the_historic_city_skyline_in_the_background._(55246746406).jpg", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/" } },
    { src: "/images/bucket-list-2027/portugal-unlimited/lissabon-tram-28.jpg", alt: "Straßenbahn 28 in Lissabon", caption: "Lissabon · Tram 28", credit: { author: "LBM1948", source: "https://commons.wikimedia.org/wiki/File:Lisboa,_tranv%C3%ADa_28.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
  ],
  "rotterdam-unlimited": [
    { src: "/images/bucket-list-2027/rotterdam-unlimited/rotterdam-erasmusbruecke.jpg", alt: "Erasmusbrücke in Rotterdam", caption: "Rotterdam · Erasmusbrücke", credit: { author: "Ymblanter", source: "https://commons.wikimedia.org/wiki/File:Rotterdam_Erasmusbrug_seen_from_Willemsplein.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/rotterdam-unlimited/rotterdam-kubushaeuser.jpg", alt: "Kubushäuser in Rotterdam", caption: "Rotterdam · Kubushäuser", credit: { author: "ClaudiCK", source: "https://commons.wikimedia.org/wiki/File:Rotterdam_cubic_houses.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/rotterdam-unlimited/rotterdam-markthal.jpg", alt: "Markthal in Rotterdam", caption: "Rotterdam · Markthal", credit: { author: "Jorge Franganillo", source: "https://commons.wikimedia.org/wiki/File:Markthal_Rotterdam.jpg", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/" } },
    { src: "/images/bucket-list-2027/rotterdam-unlimited/delft-gracht.jpg", alt: "Historische Gracht in Delft", caption: "Delft · Grachten", credit: { author: "Jamesflomonosoff", source: "https://commons.wikimedia.org/wiki/File:Canal_in_Delft.JPG", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/File:Canal_in_Delft.JPG" } },
    { src: "/images/bucket-list-2027/rotterdam-unlimited/kinderdijk-windmuehlen.jpg", alt: "Windmühlen von Kinderdijk", caption: "Kinderdijk · Windmühlen", credit: { author: "Aivin Gast", source: "https://commons.wikimedia.org/wiki/File:Windmills,_Kinderdijk.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
  ],
  "preveza-lefkada": [
    { src: "/images/bucket-list-2027/preveza-lefkada/lefkada-porto-katsiki.jpg", alt: "Porto-Katsiki-Strand auf Lefkada", caption: "Lefkada · Porto Katsiki", credit: { author: "Dimitra Papadimitriou", source: "https://commons.wikimedia.org/wiki/File:Porto_Katsiki_Beach,_Lefkada,_Ionian_Islands,_Greece.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/preveza-lefkada/preveza-hafen-abend.jpg", alt: "Hafenpromenade von Preveza", caption: "Preveza · Hafenpromenade", credit: { author: "Annatsach", source: "https://commons.wikimedia.org/wiki/File:Wharf_in_Preveza,_Greece.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/preveza-lefkada/lefkada-egremni.jpg", alt: "Egremni-Strand auf Lefkada", caption: "Lefkada · Egremni", credit: { author: "Neda Glisovic", source: "https://commons.wikimedia.org/wiki/File:Egremni_beach.JPG", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/preveza-lefkada/lefkada-kueste.jpg", alt: "Strand und Küste von Lefkada", caption: "Lefkada · Küstenlandschaft", credit: { author: "Tanopoulou", source: "https://commons.wikimedia.org/wiki/File:Lefkada_Beach.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/preveza-lefkada/nidri-hafen.jpg", alt: "Hafen von Nidri auf Lefkada", caption: "Nidri · Hafen", credit: { author: "Anton Lefterov", source: "https://commons.wikimedia.org/wiki/File:Nydri_port.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/preveza-lefkada/nikopolis-altes-museum.jpg", alt: "Altes archäologisches Museum von Nikopolis", caption: "Nikopolis · Altes archäologisches Museum", credit: { author: "Χαράλαμπος Γκούβας (Harry Gouvas)", source: "https://commons.wikimedia.org/wiki/File:The_Old_Archaeological_Museum_of_Nicopolis.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
  ],
  "hydra-unlimited": [
    { src: "/images/bucket-list-2027/hydra-unlimited/hydra-hafen.jpg", alt: "Hafenpanorama der Insel Hydra", caption: "Hydra · Hafen", credit: { author: "Νικόλαος Κυριακάκης", source: "https://commons.wikimedia.org/wiki/File:Hydra_harbour,_Greece.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/hydra-unlimited/hydra-inselblick.jpg", alt: "Inselansicht von Hydra", caption: "Hydra · Inselblick", credit: { author: "Misa.stefanovic.07", source: "https://commons.wikimedia.org/wiki/File:0157_-_Hydra.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
    { src: "/images/bucket-list-2027/hydra-unlimited/hydra-ortsimpression.jpg", alt: "Ortsansicht auf Hydra", caption: "Hydra · Ortsimpression", credit: { author: "Misa.stefanovic.07", source: "https://commons.wikimedia.org/wiki/File:0058_-_Hydra.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" } },
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
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo,i)=><figure key={photo.src} className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}>
        {failedImages.includes(photo.src) ? <div role="status" className={`flex flex-col items-center justify-center gap-2 bg-white p-5 text-center text-sm ${i === 0 ? "aspect-[16/9] lg:aspect-auto lg:h-[calc(100%-3.5rem)]" : "aspect-[4/3]"}`}><span>Bild derzeit nicht verfügbar</span>{photo.credit && <a href={photo.credit.source} target="_blank" rel="noopener noreferrer" className="underline">Original bei Wikimedia öffnen</a>}</div> : <button type="button" onClick={(event)=>{ lastTrigger.current=event.currentTarget; setActive(i); }} aria-label={photo.caption+" vergrößern"} className={`group block w-full overflow-hidden rounded-sm bg-[var(--mwg-line)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mwg-accent)] ${i === 0 ? "aspect-[16/9] lg:aspect-auto lg:h-[calc(100%-3.5rem)]" : "aspect-[4/3]"}`}>
          <img src={photo.src} alt={photo.alt} loading="lazy" onError={()=>setFailedImages(previous => previous.includes(photo.src) ? previous : [...previous, photo.src])} className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
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
