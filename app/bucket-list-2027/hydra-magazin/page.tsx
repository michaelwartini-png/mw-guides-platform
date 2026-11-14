import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hydra Unlimited – Magazin-Entwurf | Europa Bucket List 2027",
  description: "Ein bildstarker, unveröffentlichter Entwurf für Hydra mit optionalen Inselerlebnissen auf Spetses und Poros.",
  robots: { index: false, follow: false, nocache: true },
};

const base = "/images/bucket-list-2027/hydra-unlimited/";
const photos = {
  hero: { src: base + "hydra-hafen.jpg", alt: "Hafen von Hydra mit Booten und Häusern", author: "Νικόλαος Κυριακάκης", source: "https://commons.wikimedia.org/wiki/File:Hydra_harbour,_Greece.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  taxi: { src: base + "hydra-wassertaxis.jpg", alt: "Wassertaxis auf Hydra", author: "dronepicr", source: "https://commons.wikimedia.org/wiki/File:Water_taxis_in_Hydra_Greece_(43958691225).jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/" },
  village: { src: base + "hydra-ortsimpression.jpg", alt: "Ortsimpression auf Hydra", author: "Misa.stefanovic.07", source: "https://commons.wikimedia.org/wiki/File:0058_-_Hydra.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  beach: { src: base + "hydra-vlychos-strand.jpg", alt: "Vlychos-Strand auf Hydra", author: "dronepicr", source: "https://commons.wikimedia.org/wiki/File:Vlychos_Beach_Hydra,_Greece_(43058081140).jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/" },
  spetsesBeach: { src: base + "ausflug-spetses-strand.jpg", alt: "Strand auf Spetses", author: "Qweasdqwe", source: "https://commons.wikimedia.org/wiki/File:Spetses_9.JPG", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  spetsesView: { src: base + "ausflug-spetses-hafen.jpg", alt: "Inselansicht von Spetses", author: "Jean Housen", source: "https://commons.wikimedia.org/wiki/File:20190512_095_spetses.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  poros: { src: base + "ausflug-poros-hafen.jpg", alt: "Hafen von Poros", author: "Gonzolito", source: "https://commons.wikimedia.org/wiki/File:Poros_2015.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
};
type Photo = typeof photos.hero;
function PhotoCredit({ photo }: { photo: Photo }) {
  return <figcaption className="mt-2 text-xs leading-relaxed text-stone-500">Foto: {photo.author} · <a className="underline underline-offset-2" href={photo.source} target="_blank" rel="noopener noreferrer">Quelle</a> · <a className="underline underline-offset-2" href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">{photo.license}</a> · auf Anzeigegröße skaliert</figcaption>;
}
function PhotoFigure({ photo, caption, className = "", imageClassName = "" }: { photo: Photo; caption: string; className?: string; imageClassName?: string }) {
  return <figure className={className}><div className="overflow-hidden bg-stone-200"><img src={photo.src} alt={photo.alt} loading="lazy" className={imageClassName || "aspect-[4/3] w-full object-cover"} /></div><p className="mt-3 font-serif text-xl italic text-stone-800">{caption}</p><PhotoCredit photo={photo}/></figure>;
}
export default function HydraMagazinePreview() {
  return <main className="min-h-screen bg-[#f7f4ec] text-[#26312f]">
    <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-10">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-stone-600"><span>Europa Bucket List 2027 · Magazin-Entwurf</span><Link className="underline underline-offset-4" href="/bucket-list-2027?reise=hydra-unlimited">Bisherige Seite vergleichen</Link></div>
      <p className="mt-3 text-xs text-stone-500">Separate Gestaltungsvorschau · kein Ersatz der freigegebenen Reiseseite · Hero A unverändert</p>
    </div>
    <section className="mx-auto mt-8 max-w-[1600px] px-3 sm:px-6">
      <div className="relative overflow-hidden bg-stone-700">
        <img src={photos.hero.src} alt={photos.hero.alt} className="h-[64vh] min-h-[420px] w-full object-cover object-center md:h-[82vh]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute bottom-8 left-6 right-6 text-white sm:bottom-14 sm:left-14">
          <p className="mb-4 text-xs uppercase tracking-[0.32em]">Griechenland · Saronischer Golf</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">Hydra.<br/>Wo die Zeit langsamer tickt.</h1>
          <p className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">Eine Insel ohne Autos. Und mit tausend Gründen, noch einen Tag zu bleiben.</p>
        </div>
      </div>
      <div className="px-3"><PhotoCredit photo={photos.hero}/></div>
    </section>
    <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Ankommen und durchatmen</p>
      <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-5xl">Morgens mit dem Boot los. Mittags ans Meer. Abends einfach bleiben.</h2>
      <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-stone-600">Hydra muss man nicht abhaken. Man kann sich treiben lassen, den Hafen hinter sich lassen und den nächsten Lieblingsplatz entdecken. Alles kann – nichts muss.</p>
    </section>
    <section className="mx-auto max-w-6xl px-5 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">01 · Hydra erleben</p>
      <h2 className="mb-8 mt-3 font-serif text-4xl sm:text-6xl">Der schönste Weg führt übers Wasser.</h2>
      <PhotoFigure photo={photos.taxi} caption="Hier ist das Boot das Taxi." imageClassName="aspect-[16/9] w-full object-cover" />
      <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-start">
        <PhotoFigure photo={photos.village} caption="Einfach losgehen. Und die Zeit vergessen." imageClassName="aspect-[4/5] w-full object-cover" />
        <div className="md:pt-28"><PhotoFigure photo={photos.beach} caption="Ein Platz am Meer, der sich nach Urlaub anfühlt." imageClassName="aspect-[4/5] w-full object-cover" /></div>
      </div>
    </section>
    <section className="mx-auto mt-24 max-w-6xl border-t border-stone-300 px-5 py-20 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">02 · Wenn die Verbindung passt</p>
      <h2 className="mt-3 max-w-4xl font-serif text-4xl sm:text-6xl">Noch zwei Inseln. Noch mehr Sehnsuchtsorte.</h2>
      <p className="mt-5 max-w-2xl text-stone-600">Spetses und Poros sind optionale Ausflugsideen, keine festen Programmpunkte. Die tatsächlichen Fährverbindungen müssen wir vor der Reise prüfen.</p>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div><h3 className="mb-5 font-serif text-3xl">Spetses</h3><PhotoFigure photo={photos.spetsesBeach} caption="Ein Strand, an dem man gern länger bleibt." /><div className="mt-9"><PhotoFigure photo={photos.spetsesView} caption="Ein anderer Blick auf die Insel." /></div></div>
        <div className="md:pt-28"><h3 className="mb-5 font-serif text-3xl">Poros</h3><PhotoFigure photo={photos.poros} caption="Ein Hafen wie ein Versprechen." /></div>
      </div>
    </section>
    <section className="bg-[#eae4d8] px-6 py-20 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">03 · Ein Abend, der bleibt</p>
      <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl sm:text-6xl">Und irgendwann wird aus einem Tag eine Erinnerung.</h2>
      <p className="mx-auto mt-6 max-w-2xl text-stone-600">Das ausgewählte Sonnenuntergangsfoto bei Kamini wird hier ergänzt, sobald die Originaldatei erfolgreich und lizenzgeprüft importiert ist. Bis dahin zeigen wir bewusst kein Ersatzbild.</p>
    </section>
    <section id="besonderes" className="bg-[#243d3c] px-5 py-20 text-[#f7f4ec] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4bb91]">04 · Das Besondere entdecken</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">Nicht die üblichen Top 10. Sondern Geschichten, die bleiben.</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">Fünf ungewöhnliche Reiseideen aus unserer Quellenrecherche. Manche sind saisonal, manche nur bei passendem Wetter möglich. Für 2027 sind Preise, Termine und Verfügbarkeit noch nicht abschließend bestätigt.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            { number: "01", title: "Mit dem Wassertaxi an Hydras abgelegene Ostküste", text: "Die Region um Zourva und den Leuchtturm zeigt eine ganz andere Seite der Insel. Perplexity nennt einen älteren Richtwert von rund 100 € für die Fahrt; aktuellen Preis, Rückfahrt und Wetterbedingungen unbedingt beim Betreiber klären.", link: "https://www.hydradirect.com/travel-information/transport-on-hydra/taxis", label: "Wassertaxis und lokale Informationen", status: "2027-Preis & Route offen" },
            { number: "02", title: "Die Küste vom Wasser aus entdecken", text: "Eine lokale Rundfahrt mit möglichen Badestopps an ungewöhnlichen Küstenstellen, darunter eine in der Recherche erwähnte Meereshöhle. Ob genau dieser Halt angeboten wird, muss beim Veranstalter bestätigt werden.", link: "https://www.hydradirect.com/Gnghydracruises", label: "G&G Hydra Cruises recherchieren", status: "Tour & Höhlenstopp prüfen" },
            { number: "03", title: "Miaoulia: ein Hafenabend mit Geschichte", text: "Das traditionsreiche Fest erinnert an die maritime Geschichte Hydras und ist für seine eindrucksvollen Feiern bekannt. Die in der Recherche genannten Daten 25.–27. Juni 2027 sind noch nicht amtlich bestätigt.", link: "https://www.hydra.gr/", label: "Gemeinde Hydra – offizielle Informationen", status: "Termin 2027 unbestätigt" },
            { number: "04", title: "Übernachten wie in einem historischen Kapitänshaus", text: "Statt eines austauschbaren Hotels: historische Architektur und die Atmosphäre eines Inselhauses. Cotommatae Hydra 1810 ist ein konkreter Ausgangspunkt für die Unterkunftsrecherche; Zimmer und Preise für 2027 prüfen.", link: "https://www.cotommatae.gr/", label: "Cotommatae Hydra 1810", status: "Verfügbarkeit 2027 offen" },
            { number: "05", title: "Drei Inseln, drei völlig verschiedene Stimmungen", text: "Hydra als Basis, Spetses und Poros als mögliche Ergänzungen. Ob Tagesausflüge oder eine mehrtägige Route besser funktionieren, hängt von passenden Hin- und Rückfahrten ab. Keine garantierte direkte Tagesverbindung.", link: "https://www.ferryhopper.com/en/destinations/greece/hydra", label: "Fährverbindungen vergleichen", status: "Konkrete Fahrten 2027 prüfen" }
          ].map(item => <article key={item.number} className="border border-white/20 bg-white/5 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4"><span className="font-serif text-3xl text-[#d4bb91]">{item.number}</span><span className="text-right text-xs text-[#e5d2af]">{item.status}</span></div>
            <h3 className="mt-6 font-serif text-2xl leading-snug sm:text-3xl">{item.title}</h3>
            <p className="mt-4 leading-relaxed text-white/75">{item.text}</p>
            <a className="mt-6 inline-block text-sm font-semibold text-[#f4d9a8] underline underline-offset-4" href={item.link} target="_blank" rel="noopener noreferrer">{item.label} ↗</a>
          </article>)}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/65">Redaktioneller Recherche-Stand: November 2026. Die Vorschläge stammen aus einer externen Perplexity-Recherche und sind noch keine unabhängig verifizierten Buchungsangebote. Vor Reiseplanung Originalquelle, Fahrplan und Veranstalter prüfen.</p>
      </div>
    </section>
    <section id="reiseplanung" className="mx-auto max-w-6xl px-5 py-20 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">05 · Gut vorbereitet, entspannt unterwegs</p>
      <h2 className="mt-3 max-w-4xl font-serif text-4xl sm:text-6xl">Alles Wichtige. An einem Ort.</h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">Die schönsten Reiseideen sind nur der Anfang. Hier findest du die nützlichen Originalquellen für Fähren, Inselinformationen, Wege und Angebote – mit einer kurzen Erklärung, wann sich welcher Link lohnt.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {[
          { title: "Fähren & Inselhopping", links: [
            { name: "Hydra-Hafen · tagesaktuelle Abfahrten", url: "https://www.gtp.gr/ferries/ports/hydraport", desc: "Besonders nützlich: Abfahrten und Ankünfte nach Datum; damit Hin- und Rückfahrt für Ausflüge vergleichen." },
            { name: "Alpha Lines · Fahrplan & Preise 2026", url: "https://www.ferries.gr/de/ferry-companies/alphalines/route/piraeus-poros-hydra-spetses/", desc: "Konkrete 2026er Fahrplanperioden und Preisübersicht, unter anderem Hydra–Spetses. Keine Zusage für 2027." },
            { name: "Magic Sea Ferries · Fahrpläne 2026", url: "https://www.ferries.gr/de/ferry-companies/magicseaferries/route/athens-poros-hydra-spetses-portoheli/", desc: "Saisonale Verbindungen mit Poros und Spetses; vor Planung prüfen, ob die Route im Reisezeitraum verkehrt." },
            { name: "Hellenic Seaways · Fahrpläne 2026", url: "https://www.ferries.gr/de/ferry-companies/hellenic-seaways/route/piraeus-poros-hydra-spetses-hermioni/", desc: "Weitere Abfahrten über Poros und Hydra nach Spetses; mögliche Rückfahrten für Inselbesuche abgleichen." },
            { name: "Hellenic Seaways · Hydra", url: "https://www.hellenicseaways.gr/en-gb/destinations/hydra-the-lady-of-the-saronic-gulf", desc: "Reederei für die Anreise ab Piräus; konkrete Abfahrten und Tickets direkt prüfen." },
            { name: "Ferryhopper · Hydra", url: "https://www.ferryhopper.com/en/destinations/greece/hydra", desc: "Verbindungen und Reisedauer vergleichen; auch für Spetses und Poros." },
            { name: "Ferries.gr · Saronische Inseln", url: "https://www.ferries.gr/en/ferry-companies/hellenic-seaways/route/piraeus-aegina-poros-hydra/", desc: "Routenübersicht Piräus–Poros–Hydra–Spetses. Fahrpläne vor der Buchung erneut prüfen." }
          ]},
          { title: "Offizielle Inselinformationen", links: [
            { name: "Visit Greece · Hydra", url: "https://www.visitgreece.gr/en/mainland/saronic-islands/hydra", desc: "Offizielle touristische Einführung mit Sehenswürdigkeiten und Reisetipps." },
            { name: "Hydra Trails", url: "https://hydratrails.gr/", desc: "Offizielles Wegenetz mit Wanderungen, Karten und praktischen Informationen." },
            { name: "Gemeinde Spetses · Besucherportal", url: "https://spetses.gov.gr/en/visitor", desc: "Sehenswürdigkeiten, Strände und Verkehrsinfos für einen optionalen Ausflug." },
            { name: "Visit Poros · Praktische Infos", url: "https://visitporos.com/useful.html", desc: "Anreise, Verkehr auf Poros und lokale Ansprechpartner." }
          ]},
          { title: "Reiseideen & Geheimtipps", links: [
            { name: "Discover Greece · Hydra (Deutsch)", url: "https://www.discovergreece.com/de/attica/hydra", desc: "Deutschsprachige Inspiration zu Orten, Erlebnissen und Reisezeit." },
            { name: "Ferryhopper · Hydra-Reiseführer", url: "https://www.ferryhopper.com/en/destinations/greece/hydra", desc: "Neben Fährinfos auch Strände, Fortbewegung und Inselhopping-Ideen." }
          ]},
          { title: "Angebote & Preisideen", links: [
            { name: "Urlaubsguru · Griechenland", url: "https://www.urlaubsguru.de/urlaubsziele/griechenland-urlaub/", desc: "Griechenland-Angebote und Inspiration vergleichen; kein speziell bestätigtes Hydra-Angebot." },
            { name: "Urlaubspiraten", url: "https://www.urlaubspiraten.de/", desc: "Reisedeals und mögliche Flug- oder Hotelangebote recherchieren; Verfügbarkeit und Hydra-Bezug selbst prüfen." }
          ]}
        ].map(group => <div key={group.title} className="border-t border-stone-300 pt-6">
          <h3 className="font-serif text-2xl sm:text-3xl">{group.title}</h3>
          <ul className="mt-5 space-y-6">{group.links.map(link => <li key={link.url + link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-[#a48965] underline-offset-4 hover:text-[#7b5e38]">{link.name} ↗</a>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">{link.desc}</p>
          </li>)}</ul>
        </div>)}
      </div>
      <p className="mt-10 border-t border-stone-300 pt-5 text-sm text-stone-600">Hinweis: Fahrpläne, Preise, saisonale Verbindungen und Angebote ändern sich. Spetses und Poros sind optionale Ziele; passende Hin- und Rückfahrten für deinen Reisetag vorab prüfen. Die Links sind redaktionelle Hinweise, keine bestätigten Buchungen.</p>
    </section>
    <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 py-10 text-sm text-stone-600"><span>Hydra Unlimited · eigenständiger Magazin-Entwurf</span><Link href="/bucket-list-2027?reise=hydra-unlimited" className="underline underline-offset-4">Zur bisherigen Reiseansicht</Link></footer>
  </main>;
}
