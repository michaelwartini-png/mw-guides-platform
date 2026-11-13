"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Compass, Copy, MapPin, TrainFront } from "lucide-react";
import { europaBucketList2027 } from "@/content/europaBucketList2027";
import { bucketList2027Images } from "@/content/bucketList2027Images";
import { MilanMagazine } from "./MilanMagazine";
import { TravelGallery } from "./TravelGallery";

const featuredItineraries: Record<string, { label: string; description: string }[]> = {
  "rotterdam-unlimited": [
    { label: "Rotterdam ankommen", description: "Hafenatmosphäre, Erasmusbrücke und ein erster Spaziergang." },
    { label: "Rotterdam vom Wasser", description: "Hafenrundfahrt und moderne Architektur nach Interesse." },
    { label: "Delft & Den Haag", description: "Historische Gassen, politische Stadt und Museen als Optionen." },
    { label: "Scheveningen", description: "Strandtag oder Stadtprogramm je nach Wetter." },
    { label: "Kinderdijk", description: "Windmühlenlandschaft mit passender Anreise entdecken." },
    { label: "Utrecht", description: "Grachten, Cafés und Altstadt; alternativ mehr Zeit in Rotterdam." },
    { label: "Lieblingsorte & Rückreise", description: "Freier Vormittag und Rückfahrt." },
  ],
  "portugal-unlimited": [
    { label: "Porto ankommen", description: "Altstadt und Ufer des Douro kennenlernen." },
    { label: "Historische Straßenbahn", description: "Mit der Tramlinie 1 Richtung Küste, sofern in Betrieb." },
    { label: "Douro erleben", description: "Kurze Flussfahrt und Aussichtspunkte statt festem Stundenplan." },
    { label: "Weiter nach Lissabon", description: "Bahnfahrt und erste Eindrücke in der Hauptstadt." },
    { label: "Lissabon entdecken", description: "Altstadt, Aussichtspunkte und die Tram 28 als Option." },
    { label: "Belém oder Cascais", description: "Kultur am Tejo oder ein Ausflug ans Meer." },
    { label: "Freie Zeit & Rückreise", description: "Lieblingsviertel und Abreise nach Verbindung." },
  ],
  "bratislava-wien-wachau": [
    { label: "Bratislava entdecken", description: "Altstadt, Burg und Donauufer." },
    { label: "Über die Donau nach Wien", description: "Twin City Liner bei passendem Fahrplan; alternativ Zug." },
    { label: "Wien klassisch", description: "Innenstadt, Ringstraße und Museen nach Wahl." },
    { label: "Wien hinter den Kulissen", description: "Parlament und UNO City nur mit geeigneter Führung beziehungsweise Besuchstermin." },
    { label: "Wachau", description: "Krems und Donautal; Schifffahrt saisonabhängig." },
    { label: "Freier Wien-Tag", description: "Lieblingsorte, Kaffeehaus oder weiterer Ausflug." },
    { label: "Rückreise", description: "Letzter Spaziergang je nach Abfahrt." },
  ],
  "preveza-lefkada": [
    { label: "Preveza ankommen", description: "Altstadt, Hafen und erstes Küstengefühl." },
    { label: "Antikes Nikopolis", description: "Archäologische Stätten und Zeit am Wasser." },
    { label: "Nach Lefkada", description: "Insel entdecken und eine passende Basis finden." },
    { label: "Strände & Aussicht", description: "Buchten und Landschaft je nach Wetter." },
    { label: "Nidri", description: "Hafenort und optionaler Bootsausflug." },
    { label: "Freier Inseltag", description: "Lieblingsstrand oder weiterer Küstenort." },
    { label: "Rückreise", description: "Transfer mit ausreichender Zeitreserve." },
  ],
  "bodensee-unlimited": [
    { label: "Konstanz", description: "Altstadt und Uferpromenade." },
    { label: "Mainau", description: "Blumeninsel als entspannter Tagesausflug." },
    { label: "Reichenau & Stein am Rhein", description: "Inselgeschichte und historische Gassen." },
    { label: "Rheinfall", description: "Wasserfall und Aussichtspunkte entdecken." },
    { label: "Lindau & Bregenz", description: "Hafenstädte und Seepromenaden." },
    { label: "Pfänder oder Zeppelin", description: "Bergpanorama oder Technikgeschichte nach Interesse." },
    { label: "Freier Seetag & Rückreise", description: "Schifffahrt oder Lieblingsort vor der Abreise." },
  ],
  "hydra-unlimited": [
    { label: "Anreise nach Hydra", description: "Fähre ab Piräus nach Fahrplan und erstes Hafenpanorama." },
    { label: "Hydra-Ort", description: "Gassen, Treppen und autofreie Inselatmosphäre." },
    { label: "Küste vom Wasser", description: "Wassertaxi oder Bootsausflug je nach Wetter." },
    { label: "Buchten entdecken", description: "Bade- und Aussichtspunkte mit passender Verbindung." },
    { label: "Inselkultur", description: "Galerien, Architektur und gemütliche Spaziergänge." },
    { label: "Freier Inseltag", description: "Lieblingsorte wiedersehen; weitere Insel nur bei sinnvoller Fährverbindung." },
    { label: "Rückfahrt & Heimreise", description: "Fähr- und Flugzeiten mit ausreichendem Puffer planen." },
  ],
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

const planningLinks: Record<string, { label: string; url: string; note: string }[]> = {
  "skandinavien-unlimited": [
    { label: "DSB – Bahn Dänemark", url: "https://www.dsb.dk/", note: "Dänische Bahnverbindungen" },
    { label: "SJ – Bahn Schweden", url: "https://www.sj.se/", note: "Schwedische Fernzüge" },
    { label: "Tallink Silja Line", url: "https://www.tallink.com/", note: "Ostsee-Fährverbindungen" },
    { label: "Viking Line", url: "https://www.vikingline.com/", note: "Alternative Fährverbindungen" },
  ],
  "norwegen-lofoten": [
    { label: "Entur – Norwegische Reiseplanung", url: "https://entur.no/", note: "Öffentlicher Verkehr" },
    { label: "Reis Nordland", url: "https://www.reisnordland.no/", note: "Regionalverkehr und Fähren" },
    { label: "Hurtigruten", url: "https://www.hurtigruten.com/", note: "Küstenverbindungen" },
    { label: "Havila Voyages", url: "https://www.havilavoyages.com/", note: "Weitere Küstenschiffe" },
  ],
  "rotterdam-unlimited": [
    { label: "NS – Niederländische Bahn", url: "https://www.ns.nl/", note: "Bahnverbindungen" },
    { label: "RET – Nahverkehr Rotterdam", url: "https://www.ret.nl/", note: "Metro, Tram und Bus" },
  ],
  "portugal-unlimited": [
    { label: "CP – Portugiesische Bahn", url: "https://www.cp.pt/", note: "Porto–Lissabon und Regionalzüge" },
    { label: "Carris – Lissabon", url: "https://www.carris.pt/", note: "Tram und Stadtverkehr" },
  ],
  "bratislava-wien-wachau": [
    { label: "Twin City Liner", url: "https://www.twincityliner.com/", note: "Schiffsverbindung Wien–Bratislava" },
    { label: "ÖBB", url: "https://www.oebb.at/", note: "Bahn und Regionalverkehr" },
  ],
  "preveza-lefkada": [
    { label: "Visit Greece", url: "https://www.visitgreece.gr/", note: "Offizielle Reiseinformationen" },
  ],
  "bodensee-unlimited": [
    { label: "Bodensee-Schiffsbetriebe", url: "https://www.bsb.de/", note: "Schifffahrten" },
    { label: "Deutsche Bahn", url: "https://www.bahn.de/", note: "Bahnverbindungen" },
  ],
  "hydra-unlimited": [
    { label: "Visit Greece", url: "https://www.visitgreece.gr/", note: "Offizielle Reiseinformationen" },
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
  const selectedIndex = europaBucketList2027.findIndex((trip) => trip.slug === selectedSlug);
  const [linkCopied, setLinkCopied] = useState(false);
  const copyTripLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLinkCopied(true);
    } catch {
      setLinkCopied(false);
    }
  };

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
        <p className="mt-3 text-sm"><a href="/bucket-list-2027/bildnachweise" className="text-[var(--mwg-accent)] underline underline-offset-4">Wikimedia-Fotos & Bildnachweise ansehen</a></p>

        {selected ? (
          <section className="mt-12" aria-label={selected.title}>
            <button type="button" onClick={() => navigateToTrip(null)}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--mwg-accent)] hover:underline">
              <ArrowLeft size={16} /> Alle neun Reisen
            </button>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--mwg-line)] pb-5">
              <span className="font-mono text-xs text-[var(--mwg-accent)]">REISE {String(selectedIndex + 1).padStart(2, "0")} / 09</span>
              <button type="button" onClick={copyTripLink} className="inline-flex items-center gap-2 border border-[var(--mwg-line)] px-4 py-2 text-sm hover:bg-white">
                <Copy size={15} /> {linkCopied ? "Link kopiert" : "Diese Reise teilen"}
              </button>
            </div>
            <div className="mt-8 border-t border-[var(--mwg-line)] pt-8">
              {bucketList2027Images[selected.slug] && <figure className="mb-8"><div className="aspect-[16/7] overflow-hidden rounded-sm bg-[var(--mwg-line)]"><img src={bucketList2027Images[selected.slug]!.src} alt={bucketList2027Images[selected.slug]!.alt} className="h-full w-full object-cover" /></div>{selected.slug === "skandinavien-unlimited" && <figcaption className="mt-2 text-xs text-[var(--mwg-ink-70)]">Nyhavn, Kopenhagen · Foto: Bene Riobó · <a href="https://commons.wikimedia.org/wiki/File:Nyhavn,_Copenhague.jpg" target="_blank" rel="noopener noreferrer" className="underline">Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline">CC BY-SA 4.0</a> · unverändert, auf Anzeigegröße skaliert</figcaption>}{selected.slug === "norwegen-lofoten" && <figcaption className="mt-2 text-xs text-[var(--mwg-ink-70)]">Reine, Lofoten · Foto: Jakub Fryš · <a href="https://commons.wikimedia.org/wiki/File:Reine_-_Lofoten.jpg" target="_blank" rel="noopener noreferrer" className="underline">Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline">CC BY-SA 4.0</a> · unverändert, auf Anzeigegröße skaliert</figcaption>}{[
                { slug: "portugal-unlimited", place: "Porto am Douro", author: "Mайкл Гиммельфарб", source: "https://commons.wikimedia.org/wiki/File:Porto_Panoramic1.jpg" },
                { slug: "rotterdam-unlimited", place: "Erasmusbrücke, Rotterdam", author: "Ymblanter", source: "https://commons.wikimedia.org/wiki/File:Rotterdam_Erasmusbrug_seen_from_Willemsplein.jpg" },
                { slug: "preveza-lefkada", place: "Porto Katsiki, Lefkada", author: "Dimitra Papadimitriou", source: "https://commons.wikimedia.org/wiki/File:Porto_Katsiki_Beach,_Lefkada,_Ionian_Islands,_Greece.jpg" },
                { slug: "hydra-unlimited", place: "Hafen von Hydra", author: "Νικόλαος Κυριακάκης", source: "https://commons.wikimedia.org/wiki/File:Hydra_harbour,_Greece.jpg" },
              ].filter(photo => photo.slug === selected.slug).map(photo => <figcaption key={photo.slug} className="mt-2 text-xs text-[var(--mwg-ink-70)]">{photo.place} · Foto: {photo.author} · <a href={photo.source} target="_blank" rel="noopener noreferrer" className="underline">Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline">CC BY-SA 4.0</a> · unverändert, auf Anzeigegröße skaliert</figcaption>)}</figure>}
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
                  <TravelGallery slug={selected.slug} />
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
                  {planningLinks[selected.slug] && (
                    <section aria-label="Offizielle Planungslinks">
                      <p className="mwg-eyebrow text-[var(--mwg-accent)]">Selbst entdecken</p>
                      <h3 className="mt-2 font-display text-3xl">Nützliche Links für unterwegs</h3>
                      <p className="mt-3 text-sm text-[var(--mwg-ink-70)]">Einstiegsseiten der Anbieter. Fahrpläne, Preise und Verfügbarkeit sind noch nicht geprüft.</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {planningLinks[selected.slug].map((link) => (
                          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 border border-[var(--mwg-line)] bg-white p-5 hover:border-[var(--mwg-accent)]">
                            <span><span className="block font-display text-lg group-hover:text-[var(--mwg-accent)]">{link.label}</span><span className="mt-1 block text-xs text-[var(--mwg-ink-70)]">{link.note}</span></span>
                            <ArrowRight size={18} className="shrink-0 text-[var(--mwg-accent)]" />
                          </a>
                        ))}
                      </div>
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
            <nav aria-label="Weitere Reisen" className="mt-14 grid gap-3 border-t border-[var(--mwg-line)] pt-7 sm:grid-cols-2">
              {[-1, 1].map((step) => {
                const next = europaBucketList2027[(selectedIndex + step + europaBucketList2027.length) % europaBucketList2027.length];
                return <button key={step} type="button" onClick={() => { setLinkCopied(false); navigateToTrip(next.slug); }} className="flex items-center justify-between gap-3 border border-[var(--mwg-line)] bg-white p-5 text-left hover:border-[var(--mwg-accent)]">
                  {step === -1 && <ArrowLeft size={20} className="shrink-0 text-[var(--mwg-accent)]" />}
                  <span><span className="block text-xs text-[var(--mwg-ink-70)]">{step === -1 ? "Vorherige Reise" : "Nächste Reise"}</span><span className="mt-1 block font-display text-lg">{next.title}</span></span>
                  {step === 1 && <ArrowRight size={20} className="shrink-0 text-[var(--mwg-accent)]" />}
                </button>;
              })}
            </nav>
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
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((trip, i) => (
                <article key={trip.slug} className="flex flex-col rounded-sm border border-[var(--mwg-line)] bg-white p-6">
                  <button type="button" onClick={() => openTrip(trip.slug)} aria-label={`${trip.title} öffnen`} className="group -mx-6 -mt-6 mb-5 block aspect-[16/9] w-[calc(100%+3rem)] overflow-hidden bg-[#173f49] relative cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mwg-accent)]">
                    {bucketList2027Images[trip.slug] ? (
                      <>
                        <img src={bucketList2027Images[trip.slug]!.src} alt={bucketList2027Images[trip.slug]!.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" aria-hidden="true" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-white sm:p-5">
                          <span className="max-w-[82%] font-display text-xl leading-tight drop-shadow-md sm:text-2xl">{trip.title}</span>
                          <span className="shrink-0 rounded-full border border-white/60 bg-black/25 px-2 py-1 font-mono text-[10px] sm:px-2.5 sm:text-xs">{String(europaBucketList2027.findIndex(t => t.slug === trip.slug) + 1).padStart(2, "0")}</span>
                        </div>
                      </>
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
