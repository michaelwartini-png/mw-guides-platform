"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Compass, MapPin, TrainFront } from "lucide-react";
import { europaBucketList2027 } from "@/content/europaBucketList2027";
import { bucketList2027Images } from "@/content/bucketList2027Images";
import { MilanMagazine } from "./MilanMagazine";

const featuredItineraries: Record<string, { label: string; description: string }[]> = {
  "skandinavien-unlimited": [
    { label: "Kopenhagen ankommen", description: "Altstadt, Hafen und erste Eindrücke; je nach Ankunftszeit." },
    { label: "Kopenhagen entdecken", description: "Kanal, Architektur und Stadtviertel nach Lust und Wetter." },
    { label: "Mit dem Zug nach Stockholm", description: "Reisetag mit Zeit für einen ersten Spaziergang." },
    { label: "Stockholm & Inseln", description: "Altstadt, Museen oder eine Schärenfahrt als Alternative." },
    { label: "Stockholm frei gestalten", description: "Lieblingsorte vertiefen; am Abend optional Einschiffung." },
    { label: "Über die Ostsee nach Helsinki", description: "Nachtfähre nur bei passendem Fahrplan; Helsinki erkunden." },
    { label: "Helsinki & Rückreise", description: "Markthalle, Uferpromenade oder freie Zeit je nach Abflug." },
  ],
  "norwegen-lofoten": [
    { label: "Ankunft in Bodø", description: "Hafen und Küstenlandschaft kennenlernen." },
    { label: "Überfahrt zu den Lofoten", description: "Fähre und Weiterreise nach tatsächlichem Fahrplan planen." },
    { label: "Fischerdörfer entdecken", description: "Kleine Orte, Aussichtspunkte und Zeit am Wasser." },
    { label: "Lofoten ganz flexibel", description: "Wanderung, Fotostopps oder ein ruhiger Inseltag." },
    { label: "Weitere Inselerlebnisse", description: "Bootsausflug oder Landschaftstour je nach Wetter." },
    { label: "Küstenpassage Richtung Tromsø", description: "Küstenschiff nur bei passender Verbindung; sonst Alternativtransfer." },
    { label: "Tromsø & Rückreise", description: "Arktische Stadt erkunden, Abreise nach Flugverbindung." },
  ],
};

/** Public, unlisted editorial travel preview. */
export function BucketListOverview() {
  const [query, setQuery] = useState("");
  const [transport, setTransport] = useState("alle");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const transportOptions = useMemo(
    () => ["alle", ...Array.from(new Set(europaBucketList2027.flatMap((trip) => trip.transport)))],
    [],
  );
  const filtered = useMemo(() => europaBucketList2027.filter((trip) => {
    const haystack = [trip.title, trip.subtitle, ...trip.route, ...trip.highlights].join(" ").toLocaleLowerCase("de");
    return haystack.includes(query.trim().toLocaleLowerCase("de")) &&
      (transport === "alle" || trip.transport.includes(transport));
  }), [query, transport]);
  // A selected trip can be shared, refreshed and navigated with the browser Back button.
  useEffect(() => {
    const syncFromUrl = () => {
      const slug = new URL(window.location.href).searchParams.get("reise");
      setSelectedSlug(europaBucketList2027.some((trip) => trip.slug === slug) ? slug : null);
    };
    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);
  const navigateToTrip = (slug: string | null) => {
    const url = new URL(window.location.href);
    if (slug) url.searchParams.set("reise", slug);
    else url.searchParams.delete("reise");
    window.history.pushState(null, "", url.toString());
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openTrip = (slug: string) => navigateToTrip(slug);
  const selected = europaBucketList2027.find((trip) => trip.slug === selectedSlug);

  return (
    <main className="min-h-screen bg-[var(--mwg-paper)] text-[var(--mwg-ink)]">
      <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-10 lg:py-20">
        <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--mwg-accent)]">
          <Compass size={16} /> Reisegruppen-Vorschau · 2027
        </div>
        <h1 className="mwg-display-xl max-w-[18ch]">Europa Bucket List 2027</h1>
        <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-[var(--mwg-ink-70)]">
          Neun außergewöhnliche Reisen, unzählige Möglichkeiten. Alles kann – nichts muss.
          Hier sammeln wir Ideen, besondere Erlebnisse und flexible Routen für unsere Reisegruppe.
        </p>

        {selected ? (
          <section className="mt-12" aria-label={selected.title}>
            <button type="button" onClick={() => navigateToTrip(null)}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--mwg-accent)] hover:underline">
              <ArrowLeft size={16} /> Alle neun Reisen
            </button>
            <div className="mt-8 border-t border-[var(--mwg-line)] pt-8">
              {bucketList2027Images[selected.slug] && <div className="mb-8 aspect-[16/7] overflow-hidden rounded-sm bg-[var(--mwg-line)]"><img src={bucketList2027Images[selected.slug]!.src} alt={bucketList2027Images[selected.slug]!.alt} className="h-full w-full object-cover" /></div>}
              <p className="mwg-eyebrow text-[var(--mwg-accent)]">{selected.duration}</p>
              <h2 className="mwg-display-lg mt-3">{selected.title}</h2>
              <p className="mt-4 max-w-[65ch] text-lg text-[var(--mwg-ink-70)]">{selected.subtitle}</p>
              {selected.slug === "mailand-unlimited" ? <MilanMagazine /> : (
                <div className="mt-12 space-y-12">
                  <section aria-label="Reisecharakter" className="grid gap-4 sm:grid-cols-3">
                    <div className="border border-[var(--mwg-line)] p-5">
                      <span className="mwg-eyebrow text-[var(--mwg-accent)]">Reisedauer</span>
                      <p className="mt-3 font-display text-xl">{selected.duration}</p>
                    </div>
                    <div className="border border-[var(--mwg-line)] p-5">
                      <span className="mwg-eyebrow text-[var(--mwg-accent)]">Unterwegs</span>
                      <p className="mt-3 font-display text-xl">{selected.transport.join(" · ")}</p>
                    </div>
                    <div className="border border-[var(--mwg-line)] p-5">
                      <span className="mwg-eyebrow text-[var(--mwg-accent)]">Unser Motto</span>
                      <p className="mt-3 font-display text-xl">Alles kann – nichts muss</p>
                    </div>
                  </section>
                  {(selected.slug === "skandinavien-unlimited" || selected.slug === "norwegen-lofoten") && (
                    <section aria-label="Reiseimpressionen" className="border-y border-[var(--mwg-line)] py-8">
                      <p className="mwg-eyebrow text-[var(--mwg-accent)]">Drei Perspektiven auf die Reise</p>
                      <h3 className="mt-2 font-display text-3xl">Orte, die in Erinnerung bleiben</h3>
                      <p className="mt-3 max-w-[65ch] text-sm text-[var(--mwg-ink-70)]">Ein erster redaktioneller Überblick. Originalfotos ergänzen wir, sobald passende, nutzbare Bilddateien vorliegen.</p>
                      <div className="mt-6 grid gap-3 md:grid-cols-3">
                        {(selected.slug === "skandinavien-unlimited" ? [
                          { place: "Kopenhagen", tag: "Hafen & Stadtleben", tone: "from-[#123c50] to-[#4c8893]" },
                          { place: "Stockholm", tag: "Inseln & Schären", tone: "from-[#294b58] to-[#9a8c70]" },
                          { place: "Helsinki", tag: "Ostsee & Architektur", tone: "from-[#355b64] to-[#a3b3ad]" },
                        ] : [
                          { place: "Bodø", tag: "Tor zum Norden", tone: "from-[#173849] to-[#638b94]" },
                          { place: "Lofoten", tag: "Inseln & Fischerdörfer", tone: "from-[#27464d] to-[#8c8b7d]" },
                          { place: "Tromsø", tag: "Arktisches Stadtleben", tone: "from-[#1e3549] to-[#7c9ca6]" },
                        ]).map((item, i) => (
                          <div key={item.place} className={`relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-gradient-to-br ${item.tone} p-5 text-white`}>
                            <span className="absolute right-5 top-5 font-mono text-xs tracking-widest text-white/75">0{i + 1}</span>
                            <div aria-hidden="true" className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/20" />
                            <div aria-hidden="true" className="absolute -left-8 top-1/4 h-32 w-32 rounded-full border border-white/15" />
                            <p className="relative text-xs uppercase tracking-[0.16em] text-white/80">{item.tag}</p>
                            <h4 className="relative mt-2 font-display text-3xl text-white">{item.place}</h4>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                  <section aria-label="Reiseroute">
                    <p className="mwg-eyebrow text-[var(--mwg-accent)]">Orientierung statt Stundenplan</p>
                    <h3 className="mt-2 font-display text-3xl">Unsere mögliche Route</h3>
                    <p className="mt-3 max-w-[70ch] text-[var(--mwg-ink-70)]">Diese Stationen sind eine Idee für die Reise – nicht jeder Ort muss besucht werden.</p>
                    <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {selected.route.map((stop, i) => (
                        <li key={stop} className="flex min-h-20 items-center gap-4 border border-[var(--mwg-line)] bg-white p-4">
                          <span className="font-mono text-lg text-[var(--mwg-accent)]">{String(i + 1).padStart(2, "0")}</span>
                          <span className="font-display text-lg">{stop}</span>
                        </li>
                      ))}
                    </ol>
                  </section>
                  <section aria-label="Besondere Erlebnisse">
                    <p className="mwg-eyebrow text-[var(--mwg-accent)]">Die Highlights</p>
                    <h3 className="mt-2 font-display text-3xl">Was diese Reise besonders macht</h3>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {selected.highlights.map((highlight, i) => (
                        <article key={highlight} className="border-t-2 border-[var(--mwg-accent)] bg-white p-6">
                          <span className="font-mono text-xs text-[var(--mwg-accent)]">ERLEBNIS {String(i + 1).padStart(2, "0")}</span>
                          <h4 className="mt-3 font-display text-2xl">{highlight}</h4>
                        </article>
                      ))}
                    </div>
                  </section>
                  {featuredItineraries[selected.slug] && (
                    <section aria-label="Sieben Tage Reiseideen">
                      <p className="mwg-eyebrow text-[var(--mwg-accent)]">Inspiration, kein Stundenplan</p>
                      <h3 className="mt-2 font-display text-3xl">Sieben Tage voller Möglichkeiten</h3>
                      <p className="mt-3 max-w-[70ch] text-[var(--mwg-ink-70)]">Eine mögliche Reihenfolge, die wir je nach Wetter, Verbindungen und Interessen anpassen können.</p>
                      <ol className="mt-6 grid gap-x-8 sm:grid-cols-2">
                        {featuredItineraries[selected.slug].map((day, i) => (
                          <li key={day.label} className="flex gap-4 border-b border-[var(--mwg-line)] py-5">
                            <span className="font-mono text-sm text-[var(--mwg-accent)]">{String(i + 1).padStart(2, "0")}</span>
                            <div>
                              <h4 className="font-display text-lg">{day.label}</h4>
                              <p className="mt-2 text-sm leading-relaxed text-[var(--mwg-ink-70)]">{day.description}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </section>
                  )}
                  <section className="border border-[var(--mwg-line)] p-6 sm:p-8">
                    <h3 className="font-display text-2xl">Gut zu wissen</h3>
                    <ul className="mt-5 space-y-3 text-[var(--mwg-ink-70)]">
                      {selected.planningNotes.map((note) => <li key={note} className="flex gap-3"><span className="text-[var(--mwg-accent)]" aria-hidden="true">•</span><span>{note}</span></li>)}
                    </ul>
                  </section>
                </div>
              )}
            </div>
          </section>
        ) : (
          <section className="mt-12" aria-label="Reiseideen vergleichen">
            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="flex-1 text-sm">
                <span className="mb-2 block font-medium">Reise suchen</span>
                <input value={query} onChange={(event) => setQuery(event.target.value)}
                  placeholder="Reiseziel, Stadt oder Erlebnis"
                  className="w-full rounded-sm border border-[var(--mwg-line)] bg-white px-4 py-3 text-[var(--mwg-ink)]" />
              </label>
              <label className="text-sm sm:w-64">
                <span className="mb-2 block font-medium">Verkehrsmittel</span>
                <select value={transport} onChange={(event) => setTransport(event.target.value)}
                  className="w-full rounded-sm border border-[var(--mwg-line)] bg-white px-4 py-3 text-[var(--mwg-ink)]">
                  {transportOptions.map((option) =>
                    <option key={option} value={option}>{option === "alle" ? "Alle Verkehrsmittel" : option}</option>
                  )}
                </select>
              </label>
            </div>
            <p aria-live="polite" className="mt-5 text-sm text-[var(--mwg-ink-70)]">
              {filtered.length} von {europaBucketList2027.length} Reisen
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((trip, i) => (
                <article key={trip.slug} className="flex flex-col rounded-sm border border-[var(--mwg-line)] bg-white p-6">
                  <button type="button" onClick={() => openTrip(trip.slug)} aria-label={`${trip.title} öffnen`} className="-mx-6 -mt-6 mb-5 block aspect-[16/9] w-[calc(100%+3rem)] overflow-hidden bg-[#173f49] relative cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mwg-accent)]">
                    {bucketList2027Images[trip.slug] ? (
                      <img src={bucketList2027Images[trip.slug]!.src} alt={bucketList2027Images[trip.slug]!.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    ) : (
                      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#123944] via-[#326c73] to-[#b6b19b] p-6 text-white">
                        <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full border border-white/20" aria-hidden="true" />
                        <div className="absolute -right-20 -top-8 h-56 w-56 rounded-full border border-white/20" aria-hidden="true" />
                        <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full border border-white/10" aria-hidden="true" />
                        <span className="relative text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">Europa · 2027</span>
                        <div className="relative">
                          <span className="text-[11px] uppercase tracking-[0.2em] text-white/75">Reiseidee {String(europaBucketList2027.findIndex(t => t.slug === trip.slug) + 1).padStart(2,"0")}</span>
                          <p className="mt-2 max-w-[18ch] font-display text-3xl leading-tight text-white">{trip.title}</p>
                        </div>
                      </div>
                    )}
                  </button>
                  <span className="font-mono text-xs text-[var(--mwg-accent)]">{String(europaBucketList2027.findIndex(t => t.slug === trip.slug) + 1).padStart(2, "0")} / 09</span>
                  <h2 className="mt-4 font-display text-2xl"><button type="button" onClick={() => openTrip(trip.slug)} className="text-left hover:text-[var(--mwg-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mwg-accent)]">{trip.title}</button></h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--mwg-ink-70)]">{trip.subtitle}</p>
                  <p className="mt-5 flex items-start gap-2 text-sm text-[var(--mwg-ink-70)]">
                    <MapPin size={16} className="mt-0.5 shrink-0" /> {trip.route.join(" · ")}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs text-[var(--mwg-ink-70)]">
                    <TrainFront size={15} /> {trip.transport.join(" · ")}
                  </p>
                  <button type="button" onClick={() => openTrip(trip.slug)}
                    className="mt-6 inline-flex items-center gap-2 self-start font-medium text-[var(--mwg-accent)] hover:underline">
                    Reise entdecken <ArrowRight size={16} />
                  </button>
                </article>
              ))}
            </div>
            {filtered.length === 0 && <p className="mt-8">Keine passende Reise gefunden. Bitte Filter anpassen.</p>}
          </section>
        )}
      </div>
    </main>
  );
}
