"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, MapPin, TrainFront, Ship, CalendarDays } from "lucide-react";

const photos = [
  {src:"/images/explore-trips/mailand-hero.jpg",alt:"Mailänder Dom",caption:"Mailand · Unsere Basis"},
  {src:"/images/explore-trips/mailand-como.jpg",alt:"Comer See",caption:"Comer See · Unterwegs am Wasser"},
  {src:"/images/explore-trips/mailand-bergamo.jpg",alt:"Bergamo",caption:"Bergamo · Altstadt entdecken"},
  {src:"/images/explore-trips/mailand-centrale.jpg",alt:"Bahnhof Milano Centrale",caption:"Milano Centrale · Startpunkt für Ausflüge"},
  {src:"/images/explore-trips/mailand-closing.jpg",alt:"Norditalien",caption:"Norditalien · Immer neue Perspektiven"},
];
const excursions = [
  {name:"Mailand",tag:"Stadt & Kultur",image:"/images/explore-trips/mailand-hero.jpg",text:"Dom, Galleria Vittorio Emanuele II, Navigli und die lebendigen Viertel der Stadt. Auch ein freier Nachmittag gehört dazu.",via:"Zu Fuß · Metro · Tram"},
  {name:"Comer See",tag:"See & Schiff",image:"/images/explore-trips/mailand-como.jpg",text:"Mit dem Zug an den See, weiter mit dem Schiff – beispielsweise zwischen Como und den Orten am Wasser. Die konkrete Verbindung wählen wir passend zum Tag.",via:"Bahn · Schiff"},
  {name:"Stresa & Lago Maggiore",tag:"Inselwelten",text:"Promenade in Stresa und – bei passendem Fahrplan – ein Ausflug zu den Borromäischen Inseln.",via:"Bahn · Ausflugsschiff"},
  {name:"Bergamo",tag:"Altstadt",image:"/images/explore-trips/mailand-bergamo.jpg",text:"Bergamo Alta, historische Gassen, Aussichtspunkte und die Fahrt mit der Standseilbahn.",via:"Bahn · Standseilbahn"},
  {name:"Bologna",tag:"Arkaden & Plätze",text:"Arkaden, Piazza Maggiore und die Spuren der versteckten Kanäle.",via:"Bahn · zu Fuß"},
  {name:"Modena & Parma",tag:"Genuss & Geschichte",text:"Modenas traditionelle Acetaien oder Parmas außergewöhnliches Teatro Farnese – zwei unterschiedliche Ausflugsideen.",via:"Bahn · zu Fuß"},
  {name:"Verona & Pavia",tag:"Weitere Optionen",text:"Veronas Aussicht vom Castel San Pietro oder die stille Certosa bei Pavia.",via:"Bahn · zu Fuß"},
  {name:"Lugano",tag:"Schweizer Abstecher",text:"See und Bergpanorama – Monte Brè oder Monte San Salvatore.",via:"Bahn · zu Fuß"},
];
const days = [
  {day:"01",title:"Ankommen & Mailand erleben",text:"Anreise, ein erster Stadtspaziergang, Domplatz und ein Abend in den Navigli."},
  {day:"02",title:"Comer See",text:"Bahnfahrt zum See, eine Schifffahrt und Zeit für die Orte am Ufer."},
  {day:"03",title:"Lago Maggiore & Stresa",text:"Seepromenade und optional die Borromäischen Inseln."},
  {day:"04",title:"Bergamo Alta",text:"Historische Oberstadt, Standseilbahn und Aussichtspunkte."},
  {day:"05",title:"Bologna oder Verona",text:"Eine der beiden Städte auswählen – abhängig von Lust und Wetter."},
  {day:"06",title:"Freier Wahl-Tag",text:"Mailand vertiefen, nach Lugano fahren oder Modena, Parma beziehungsweise Pavia entdecken."},
  {day:"07",title:"Lieblingsorte & Rückreise",text:"Zeit für einen letzten Spaziergang oder ein entspanntes Frühstück."},
];
const links = [
  {label:"Trenitalia – Zugverbindungen",href:"https://www.trenitalia.com/"},
  {label:"Trenord – Regionalverkehr",href:"https://www.trenord.it/"},
  {label:"ATM Milano – Nahverkehr",href:"https://www.atm.it/"},
  {label:"Navigazione Laghi – Schiffe",href:"https://www.navigazionelaghi.it/"},
];
export function MilanMagazine({ magazineMode = false }: { magazineMode?: boolean } = {}) {
  const [showAll, setShowAll] = useState(false);
  return <div className="mt-10 space-y-14">
    {!magazineMode && <div className="grid gap-5 md:grid-cols-3">
      <div className="rounded-sm border border-[var(--mwg-line)] p-5"><TrainFront className="mb-3 text-[var(--mwg-accent)]" size={22}/><strong className="block font-display text-xl">Ein Hotel als Basis</strong><p className="mt-2 text-sm leading-relaxed text-[var(--mwg-ink-70)]">Von Mailand aus sternförmig zu den schönsten Zielen Norditaliens.</p></div>
      <div className="rounded-sm border border-[var(--mwg-line)] p-5"><Ship className="mb-3 text-[var(--mwg-accent)]" size={22}/><strong className="block font-display text-xl">Stadt, Seen & Schiffe</strong><p className="mt-2 text-sm leading-relaxed text-[var(--mwg-ink-70)]">Abwechslung zwischen Architektur, Altstädten und Wasser.</p></div>
      <div className="rounded-sm border border-[var(--mwg-line)] p-5"><CalendarDays className="mb-3 text-[var(--mwg-accent)]" size={22}/><strong className="block font-display text-xl">Alles kann – nichts muss</strong><p className="mt-2 text-sm leading-relaxed text-[var(--mwg-ink-70)]">Sieben flexible Tage. Wir entscheiden vor Ort, worauf wir Lust haben.</p></div>
    </div>}

    {!magazineMode && <section aria-label="Bilder aus Norditalien">
      <div className="mb-5 flex items-end justify-between gap-3"><div><p className="mwg-eyebrow text-[var(--mwg-accent)]">Impressionen</p><h3 className="mt-2 font-display text-3xl">Norditalien in Bildern</h3></div><span className="text-xs text-[var(--mwg-ink-70)]">MW Guides · vorhandene Bilddateien</span></div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {photos.slice(1).map((p)=><figure key={p.src} className="min-w-0"><div className="aspect-video w-full overflow-hidden rounded-sm bg-[var(--mwg-line)]"><img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div><figcaption className="mt-2 text-xs text-[var(--mwg-ink-70)]">{p.caption}</figcaption></figure>)}
      </div>
    </section>}

    <section>
      <p className="mwg-eyebrow text-[var(--mwg-accent)]">Entdecken statt abhaken</p>
      <h3 className="mt-2 font-display text-3xl">Wohin soll es heute gehen?</h3>
      <p className="mt-3 max-w-[75ch] text-[var(--mwg-ink-70)]">Acht Möglichkeiten. Jede mit ihrem eigenen besonderen Moment.</p>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {(magazineMode ? excursions : excursions.slice(0,showAll?excursions.length:4)).map(e=><article key={e.name} className="overflow-hidden rounded-sm border border-[var(--mwg-line)] bg-white"><div className="relative aspect-[16/10] overflow-hidden bg-[#e6dfd2]">{("image" in e && e.image) ? <img src={e.image} alt={`${e.name} · Vorschaufoto aus der vorhandenen Reiseauswahl`} loading="lazy" className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#c6b99f] via-[#e9e2d4] to-[#a5b9ae]"><span aria-hidden="true" className="font-display text-6xl italic text-[#263b3a]/70">{e.name.slice(0,1)}</span><span className="absolute bottom-3 left-4 text-xs font-medium text-[#263b3a]">Bildmotiv in Vorbereitung</span></div>}</div><div className="p-5 sm:p-6"><span className="text-xs uppercase tracking-wider text-[var(--mwg-accent)]">{e.tag}</span><h4 className="mt-2 font-display text-2xl">{e.name}</h4><p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--mwg-ink-70)]">{e.text}</p><p className="mt-3 flex items-center gap-2 text-xs text-[var(--mwg-accent)]"><MapPin size={14}/>{e.via}</p></div></article>)}
      </div>
      {!magazineMode && <button type="button" onClick={()=>setShowAll(!showAll)} className="mt-5 inline-flex items-center gap-2 font-medium text-[var(--mwg-accent)] hover:underline">{showAll?"Weniger Ausflüge anzeigen":"Alle acht Ausflugsideen anzeigen"} <ChevronDown size={16} className={showAll?"rotate-180":""}/></button>}
    </section>

    {!magazineMode && <section className="border-t border-[var(--mwg-line)] pt-10">
      <p className="mwg-eyebrow text-[var(--mwg-accent)]">Inspiration, kein Stundenplan</p><h3 className="mt-2 font-display text-3xl">Sieben Tage voller Möglichkeiten</h3>
      <div className="mt-7 grid gap-3 md:grid-cols-2">{days.map(d=><div key={d.day} className="flex gap-5 border-b border-[var(--mwg-line)] py-4"><span className="font-mono text-lg text-[var(--mwg-accent)]">{d.day}</span><div><h4 className="font-display text-xl">{d.title}</h4><p className="mt-2 text-sm leading-relaxed text-[var(--mwg-ink-70)]">{d.text}</p></div></div>)}</div>
      <p className="mt-4 text-sm italic text-[var(--mwg-ink-70)]">Die Reihenfolge ist frei austauschbar. Für Fähren, Zugfahrten und Besichtigungen prüfen wir vorab aktuelle Zeiten.</p>
    </section>}

    {!magazineMode && <section className="rounded-sm bg-white p-7">
      <h3 className="font-display text-2xl">Praktische Links für die Planung</h3>
      <p className="mt-2 text-sm text-[var(--mwg-ink-70)]">Offizielle Einstiegsseiten – keine bestätigten Fahrpläne oder Buchungen.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">{links.map(l=><a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 border-b border-[var(--mwg-line)] py-3 text-sm font-medium text-[var(--mwg-accent)] hover:underline">{l.label}<ArrowUpRight size={17}/></a>)}</div>
    </section>}
  </div>;
}
