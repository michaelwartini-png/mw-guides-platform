"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Compass, MapPin, TrainFront } from "lucide-react";
import { europaBucketList2027 } from "@/content/europaBucketList2027";

/**
 * Private preview component. Intentionally NOT mounted on a Next.js route.
 * Publish only behind verified host-level access control.
 */
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
            <button type="button" onClick={() => setSelectedSlug(null)}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--mwg-accent)] hover:underline">
              <ArrowLeft size={16} /> Alle neun Reisen
            </button>
            <div className="mt-8 border-t border-[var(--mwg-line)] pt-8">
              <p className="mwg-eyebrow text-[var(--mwg-accent)]">{selected.duration}</p>
              <h2 className="mwg-display-lg mt-3">{selected.title}</h2>
              <p className="mt-4 max-w-[65ch] text-lg text-[var(--mwg-ink-70)]">{selected.subtitle}</p>
              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="font-display text-2xl">Mögliche Route</h3>
                  <ol className="mt-5 space-y-3">
                    {selected.route.map((stop, i) => (
                      <li key={stop} className="flex gap-3 text-[var(--mwg-ink-70)]">
                        <span className="font-mono text-xs text-[var(--mwg-accent)]">{String(i + 1).padStart(2, "0")}</span>
                        {stop}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="font-display text-2xl">Besondere Erlebnisse</h3>
                  <ul className="mt-5 space-y-3 text-[var(--mwg-ink-70)]">
                    {selected.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-10 rounded-sm border border-[var(--mwg-line)] p-6">
                <h3 className="font-display text-xl">Gut zu wissen</h3>
                <p className="mt-3 text-sm text-[var(--mwg-ink-70)]">
                  Unterwegs mit: {selected.transport.join(" · ")}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--mwg-ink-70)]">
                  {selected.planningNotes.map((note) => <li key={note}>• {note}</li>)}
                </ul>
              </div>
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
                  <span className="font-mono text-xs text-[var(--mwg-accent)]">{String(i + 1).padStart(2, "0")} / 09</span>
                  <h2 className="mt-4 font-display text-2xl">{trip.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--mwg-ink-70)]">{trip.subtitle}</p>
                  <p className="mt-5 flex items-start gap-2 text-sm text-[var(--mwg-ink-70)]">
                    <MapPin size={16} className="mt-0.5 shrink-0" /> {trip.route.join(" · ")}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs text-[var(--mwg-ink-70)]">
                    <TrainFront size={15} /> {trip.transport.join(" · ")}
                  </p>
                  <button type="button" onClick={() => { setSelectedSlug(trip.slug); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
