"use client";

import { useMemo, useState } from "react";

const photos = [
  {
    "id": 1,
    "place": "Lugano",
    "file": "See_und_Palme_in_Lugano_2024.jpg",
    "title": "Palme vor dem See",
    "verified": false
  },
  {
    "id": 2,
    "place": "Lugano",
    "file": "Lugano_1.jpg",
    "title": "Häuser am Wasser",
    "verified": false
  },
  {
    "id": 3,
    "place": "Mailand",
    "file": "04_003_Mailand,_Piazza_Repubblica.jpg",
    "title": "Gelbe Straßenbahnen",
    "verified": false
  },
  {
    "id": 4,
    "place": "Bologna",
    "file": "Bologna,_Italy_-_panoramio_(14).jpg",
    "title": "Bologna bei Nacht",
    "verified": false
  },
  {
    "id": 5,
    "place": "Bologna",
    "file": "Bologna_Panorama.jpg",
    "title": "Dächer von Bologna",
    "verified": false
  },
  {
    "id": 6,
    "place": "Comer See",
    "file": "Comer_See_Personenschiff.JPG",
    "title": "Fähre auf dem See",
    "verified": false
  },
  {
    "id": 7,
    "place": "Comer See",
    "file": "Comer_See_Schiffsverkehr.JPG",
    "title": "Schiffsverkehr",
    "verified": false
  },
  {
    "id": 8,
    "place": "Lago Maggiore",
    "file": "Gabriele_Chiattone_-_Poster_Lago_Maggiore.jpg",
    "title": "Historisches Reiseplakat",
    "verified": false
  },
  {
    "id": 9,
    "place": "Mailand",
    "file": "Interior_of_Milano_Centrale_2022-09-28_14.jpg",
    "title": "Bahnhof Milano Centrale",
    "verified": false
  },
  {
    "id": 10,
    "place": "Comer See",
    "file": "Lago_di_Como_(riflessi).jpg",
    "title": "Spiegelung im See",
    "verified": false
  },
  {
    "id": 11,
    "place": "Comer See",
    "file": "Lake_Como_from_Como_(2).jpg",
    "title": "Hafen von Como",
    "verified": false
  },
  {
    "id": 12,
    "place": "Mailand",
    "file": "Milan,_Italy._August_2016._(34379545635).jpg",
    "title": "Navigli bei Nacht",
    "verified": false
  },
  {
    "id": 13,
    "place": "Mailand",
    "file": "Milan,_Italy_-_December_2025_-_229.jpg",
    "title": "Navigli bei Tag",
    "verified": false
  },
  {
    "id": 14,
    "place": "Mailand",
    "file": "Milan,_Italy_-_December_2025_-_245.jpg",
    "title": "Architektur und Technik",
    "verified": false
  },
  {
    "id": 15,
    "place": "Mailand",
    "file": "Milan,_Italy_Tram_25_February_2013.jpg",
    "title": "Historische Straßenbahn",
    "verified": false
  },
  {
    "id": 16,
    "place": "Mailand",
    "file": "Milano_Centrale_Frecciabianca.jpg",
    "title": "Zug in Milano Centrale",
    "verified": false
  },
  {
    "id": 17,
    "place": "Lugano",
    "file": "Lugano_from_Monte_Bre.jpg",
    "title": "Lugano vom Monte Brè",
    "verified": false
  },
  {
    "id": 18,
    "place": "Comer See",
    "file": "Panoramic_view_of_Como_Lake_(Lago_di_Como),_seen_from_the_mountain_Monte_Grona_-_Plesio_(Como)_2015-10-25.JPG",
    "title": "Panorama vom Monte Grona",
    "verified": false
  },
  {
    "id": 19,
    "place": "Mailand",
    "file": "Milano_Centrale_railway_station_by_Tanweer.jpg",
    "title": "Bahnhof und Reisende",
    "verified": false
  },
  {
    "id": 20,
    "place": "Mailand",
    "file": "Panorama_from_the_cathedral,_Milan,_Italy_LOC_4711357943.jpg",
    "title": "Historisches Stadtpanorama",
    "verified": false
  },
  {
    "id": 21,
    "place": "Mailand",
    "file": "Mailänder_Dom_Detail_Dachaufgang.jpg",
    "title": "Gotische Dachdetails",
    "verified": false
  },
  {
    "id": 22,
    "place": "Mailand",
    "file": "Milan_Cathedral_from_Piazza_del_Duomo.jpg",
    "title": "Domfassade",
    "verified": false
  },
  {
    "id": 23,
    "place": "Bergamo",
    "file": "Bergamo_-_Piazza_Pontida.jpg",
    "title": "Historische Piazza Pontida",
    "verified": false
  },
  {
    "id": 24,
    "place": "Verona",
    "file": "Collage_Verona.jpg",
    "title": "Verona-Collage",
    "verified": false
  },
  {
    "id": 25,
    "place": "Mailand",
    "file": "Der_Mailänder_Dom_(1874).jpg",
    "title": "Der Dom im 19. Jahrhundert",
    "verified": false
  },
  {
    "id": 26,
    "place": "Turin",
    "file": "For_sale,_market_in_Turin,_Italy_(32273853228).jpg",
    "title": "Markt in Turin",
    "verified": false
  },
  {
    "id": 27,
    "place": "Verona",
    "file": "Gran_Guardia_(Verona).jpg",
    "title": "Gran Guardia",
    "verified": false
  },
  {
    "id": 28,
    "place": "Turin",
    "file": "La_basilica_al_tramonto.jpg",
    "title": "Basilika im Abendlicht – Ort prüfen",
    "verified": false
  },
  {
    "id": 29,
    "place": "Lago Maggiore",
    "file": "Lago-Maggiore_1359.JPG",
    "title": "Insel im Lago Maggiore",
    "verified": false
  },
  {
    "id": 30,
    "place": "Lago Maggiore",
    "file": "Lago-Maggiore_1364.JPG",
    "title": "Palastinsel",
    "verified": false
  },
  {
    "id": 31,
    "place": "Mailand",
    "file": "Mailänder_Dom_Dach_a.jpg",
    "title": "Auf dem Domdach",
    "verified": false
  },
  {
    "id": 32,
    "place": "Verona",
    "file": "Verona_il_Sole_che_cala.jpg",
    "title": "Verona bei Sonnenuntergang",
    "verified": true
  },
  {
    "id": 33,
    "place": "Turin",
    "file": "Piazza_Castello_Turin_Italy_27-12-2021.jpg",
    "title": "Piazza Castello",
    "verified": false
  },
  {
    "id": 34,
    "place": "Bergamo",
    "file": "Sunrise_at_Bergamo_old_town,_Lombardy,_Italy.jpg",
    "title": "Bergamo im Morgenlicht",
    "verified": true
  },
  {
    "id": 35,
    "place": "Turin",
    "file": "Tram_in_Via_Po,_Turin_(Italy,_2020).jpg",
    "title": "Tram mit Lichterketten",
    "verified": false
  },
  {
    "id": 36,
    "place": "Turin",
    "file": "Turin,_Italy…City_highlights_(10830904545).jpg",
    "title": "Turin bei Nacht",
    "verified": false
  },
  {
    "id": 37,
    "place": "Turin",
    "file": "Turin_Montage.png",
    "title": "Turin-Collage",
    "verified": false
  },
  {
    "id": 38,
    "place": "Verona",
    "file": "Verona_0001.jpg",
    "title": "Gasse in Verona",
    "verified": false
  }
];
const places = ["Alle","Mailand","Comer See","Lago Maggiore","Bergamo","Bologna","Verona","Lugano","Turin"];
function commonsUrl(file: string) { return "https://commons.wikimedia.org/wiki/Special:Redirect/file/" + encodeURIComponent(file) + "?width=960"; }
function sourceUrl(file: string) { return "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(file); }
export default function MilanPhotoLibrary() {
  const [place,setPlace] = useState("Alle");
  const [selected,setSelected] = useState<number | null>(null);
  const [favorites,setFavorites] = useState<number[]>([]);
  const [failed,setFailed] = useState<number[]>([]);
  const visible = useMemo(()=>photos.filter(p=>place==="Alle"||p.place===place),[place]);
  const active = photos.find(p=>p.id===selected);
  const toggle = (id:number) => setFavorites(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id]);
  return <main className="min-h-screen bg-[#f5f1e9] text-[#283330] pb-24">
    <header className="mx-auto max-w-7xl px-5 pt-16 pb-9 md:px-10">
      <a href="/bucket-list-2027/mailand-magazin" className="text-xs uppercase tracking-[0.2em] text-[#806a4f] underline underline-offset-4">← Mailand Unlimited</a>
      <p className="mt-9 text-xs uppercase tracking-[0.25em] text-[#947b55]">Europa Bucket List · Bildredaktion</p>
      <h1 className="mt-3 font-serif text-5xl md:text-7xl">Die Mailand-Fotothek.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#59615d]">Alle Motive auf einen Blick – nach Reiseziel sortiert, groß zu betrachten und für die spätere Bildauswahl vormerkbar.</p>
      <p className="mt-3 max-w-3xl text-sm text-[#765d48]">Private Arbeitsvorschau: Vorschaubilder werden direkt von Wikimedia Commons geladen. Es sind keine in GitHub gespeicherten Upload-Dateien. Bildidentität und Rechte müssen vor einer Veröffentlichung geprüft werden; zwei Original-Lizenzseiten wurden bisher recherchiert.</p>
      <div className="mt-8 flex flex-wrap gap-2">{places.map(x=><button key={x} onClick={()=>setPlace(x)} className={`rounded-full border px-4 py-2 text-sm transition ${place===x?"border-[#283330] bg-[#283330] text-white":"border-[#c9c1b3] bg-white/60 hover:bg-white"}`}>{x}{x!=="Alle"&&<span className="ml-1 opacity-60">{photos.filter(p=>p.place===x).length}</span>}</button>)}</div>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#58615d]"><span>{visible.length} Motive sichtbar</span><span>{favorites.length} vorgemerkt</span><button className="underline underline-offset-4" onClick={()=>{const text=favorites.map(id=>{const p=photos.find(x=>x.id===id)!;return `#${p.id} – ${p.place}: ${p.title} (${p.file})`}).join("\n");navigator.clipboard?.writeText(text);}}>Auswahlliste kopieren</button></div>
    </header>
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-12 px-5 pb-16 sm:grid-cols-2 lg:grid-cols-3 md:px-10">
      {visible.map(p=><article key={p.id} className="group min-w-0"><button onClick={()=>setSelected(p.id)} className="relative block aspect-[4/3] w-full overflow-hidden bg-[#e2ddd2] text-left" aria-label={`Foto ${p.id} groß ansehen`}>{failed.includes(p.id)?<span className="flex h-full items-center justify-center p-6 text-center text-sm text-[#665d51]">Vorschau nicht verfügbar – Originalquelle öffnen</span>:<img src={commonsUrl(p.file)} alt={p.title} loading="lazy" onError={()=>setFailed(old=>[...old,p.id])} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"/>}<span className="absolute left-3 top-3 bg-[#f5f1e9]/95 px-2 py-1 text-xs">#{p.id}</span></button><div className="pt-4"><p className="text-[11px] uppercase tracking-[0.18em] text-[#947b55]">{p.place}</p><h2 className="mt-1 font-serif text-2xl">{p.title}</h2><p className="mt-2 text-xs text-[#77756e]">{p.verified?"Commons-Lizenzquelle recherchiert · Dateiidentität offen":"Lizenzprüfung offen"}</p><div className="mt-4 flex flex-wrap items-center gap-3 text-sm"><button className={`rounded-full border px-4 py-2 ${favorites.includes(p.id)?"bg-[#283330] text-white":"border-[#bfb5a5]"}`} onClick={()=>toggle(p.id)}>{favorites.includes(p.id)?"✓ Vorgemerkt":"+ Vormerken"}</button><a href={sourceUrl(p.file)} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Original & Lizenz ↗</a></div></div></article>)}
    </section>
    <footer className="mx-auto max-w-7xl border-t border-[#d4cbbd] px-5 py-8 text-sm text-[#716d65] md:px-10">38 unterschiedliche Dateinamen aus 46 Uploads; acht bekannte Wiederholungen ausgelassen. Eine Auswahl wird nur im geöffneten Browser gehalten und kann als Text kopiert werden. Kein Bild wird dadurch zur Veröffentlichung freigegeben.</footer>
    {active&&<div role="dialog" aria-modal="true" aria-label={active.title} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={()=>setSelected(null)}><div className="relative flex max-h-full w-full max-w-6xl flex-col items-center" onClick={e=>e.stopPropagation()}><button onClick={()=>setSelected(null)} className="absolute right-0 top-0 z-10 rounded-full bg-white px-4 py-2 text-black">Schließen ×</button><img src={commonsUrl(active.file)} alt={active.title} className="max-h-[72vh] max-w-full object-contain" /><div className="mt-4 text-center text-white"><p className="font-serif text-2xl">{active.title}</p><p className="mt-1 text-sm opacity-75">{active.place} · #{active.id}</p><div className="mt-4 flex justify-center gap-5"><button onClick={()=>toggle(active.id)} className="underline underline-offset-4">{favorites.includes(active.id)?"✓ Vorgemerkt":"+ Vormerken"}</button><a href={sourceUrl(active.file)} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Originalseite ↗</a></div></div></div></div>}
  </main>;
}
