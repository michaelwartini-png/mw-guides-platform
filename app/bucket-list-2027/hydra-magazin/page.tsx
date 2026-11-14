// Netlify branch-preview build trigger — no page content changed (2026-11-14).
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
    <section className="mx-auto mt-5 max-w-none px-0">
      <div className="relative overflow-hidden bg-stone-700">
        <img src={photos.hero.src} alt={photos.hero.alt} className="h-[82vh] min-h-[620px] w-full object-cover object-center md:h-[96vh]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute bottom-12 left-7 right-6 text-white sm:bottom-24 sm:left-[9vw]">
          <p className="mb-4 text-xs uppercase tracking-[0.32em]">Griechenland · Saronischer Golf</p>
          <h1 className="max-w-5xl font-serif text-6xl leading-[0.97] tracking-tight sm:text-8xl lg:text-[clamp(6rem,10vw,11rem)]">Hydra.<br/>Wo die Zeit langsamer tickt.</h1>
          <p className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">Eine Insel ohne Autos. Und mit tausend Gründen, noch einen Tag zu bleiben.</p>
        </div>
      </div>
      <div className="px-3"><PhotoCredit photo={photos.hero}/></div>
    </section>
    <nav aria-label="Hydra-Magazin: zu den Abschnitten" className="sticky top-0 z-30 border-b border-stone-300 bg-[#f7f4ec]/95 px-4 py-3 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto text-xs font-semibold sm:text-sm">
        <span className="mr-3 hidden shrink-0 font-serif text-lg text-[#26312f] md:inline">Hydra Unlimited</span>
        {[
          { href: "#fotos", label: "Reisefotos" },
          { href: "#besonderes", label: "Besondere Erlebnisse" },
          { href: "#inselroute", label: "Inselkombinationen" },
          { href: "#unterkuenfte", label: "Besonders übernachten" },
          { href: "#wochenidee", label: "7-Tage-Idee" },
          { href: "#buchungsfahrplan", label: "Buchungsfahrplan" },
          { href: "#reiseplanung", label: "Fähren & Tipps" }
        ].map(item => <a key={item.href} href={item.href} className="shrink-0 rounded-full border border-stone-300 px-4 py-2 text-[#26312f] transition-colors hover:bg-[#eae4d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92734e]">{item.label}</a>)}
      </div>
    </nav>
    <section className="mx-auto max-w-3xl px-6 py-28 text-center sm:py-44">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Ankommen und durchatmen</p>
      <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-5xl">Morgens mit dem Boot los. Mittags ans Meer. Abends einfach bleiben.</h2>
      <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-stone-600">Hydra muss man nicht abhaken. Man kann sich treiben lassen, den Hafen hinter sich lassen und den nächsten Lieblingsplatz entdecken. Alles kann – nichts muss.</p>
    </section>
    <section id="fotos" className="mx-auto max-w-[1450px] scroll-mt-24 px-5 sm:px-[7vw]">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">01 · Hydra erleben</p>
      <h2 className="mb-12 mt-5 max-w-5xl font-serif text-5xl leading-[1.03] sm:text-7xl">Der schönste Weg führt übers Wasser.</h2>
      <PhotoFigure photo={photos.taxi} caption="Hier ist das Boot das Taxi." imageClassName="aspect-[3/2] w-full object-cover md:aspect-[2.15/1]" />
      <div className="mt-24 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-16">
        <PhotoFigure photo={photos.village} caption="Einfach losgehen. Und die Zeit vergessen." imageClassName="aspect-[4/5] w-full object-cover" />
        <div className="md:pt-44"><PhotoFigure photo={photos.beach} caption="Ein Platz am Meer, der sich nach Urlaub anfühlt." imageClassName="aspect-[4/5] w-full object-cover" /></div>
      </div>
    </section>
    <section className="bg-[#173a36] px-6 py-36 text-center text-[#f7f4ec] sm:py-52">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">03 · Ein Abend, der bleibt</p>
      <h2 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[1.05] sm:text-8xl">Und irgendwann wird aus einem Tag eine Erinnerung.</h2>
      <p className="mx-auto mt-6 max-w-2xl text-white/75">Das ausgewählte Sonnenuntergangsfoto bei Kamini wird hier ergänzt, sobald die Originaldatei erfolgreich und lizenzgeprüft importiert ist. Bis dahin zeigen wir bewusst kein Ersatzbild.</p>
    </section>
    <section className="mx-auto mt-28 max-w-[1450px] border-t border-stone-300 px-5 py-28 sm:px-[7vw]">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">02 · Wenn die Verbindung passt</p>
      <h2 className="mt-3 max-w-4xl font-serif text-4xl sm:text-6xl">Noch zwei Inseln. Noch mehr Sehnsuchtsorte.</h2>
      <p className="mt-5 max-w-2xl text-stone-600">Spetses und Poros sind optionale Ausflugsideen, keine festen Programmpunkte. Die tatsächlichen Fährverbindungen müssen wir vor der Reise prüfen.</p>
      <div className="mt-16 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
        <div><h3 className="mb-5 font-serif text-3xl">Spetses</h3><PhotoFigure photo={photos.spetsesBeach} caption="Ein Strand, an dem man gern länger bleibt." /><div className="mt-9"><PhotoFigure photo={photos.spetsesView} caption="Ein anderer Blick auf die Insel." /></div></div>
        <div className="md:pt-28"><h3 className="mb-5 font-serif text-3xl">Poros</h3><PhotoFigure photo={photos.poros} caption="Ein Hafen wie ein Versprechen." /></div>
      </div>
    </section>
    <section id="besonderes" className="scroll-mt-24 bg-[#243d3c] px-5 py-20 text-[#f7f4ec] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4bb91]">04 · Das Besondere entdecken</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">Nicht die üblichen Top 10. Sondern Geschichten, die bleiben.</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">Fünf ungewöhnliche Reiseideen aus unserer Quellenrecherche. Manche sind saisonal, manche nur bei passendem Wetter möglich. Für 2027 sind Preise, Termine und Verfügbarkeit noch nicht abschließend bestätigt.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            { number: "01", title: "Mit dem Wassertaxi an Hydras abgelegene Ostküste", text: "Die Region um Zourva und den Leuchtturm zeigt eine ganz andere Seite der Insel. Hydra Direct nennt in der Preisliste vom 2. Mai 2025 einen Festtarif von 100 € je Fahrt zum Leuchtturm (üblicherweise bis zu acht Personen). Rückfahrt, aktuelle Preise und Wetterbedingungen unbedingt beim Betreiber klären.", link: "https://www.hydradirect.com/travel-information/transport-on-hydra/taxis", label: "Wassertaxis und lokale Informationen", status: "2027-Preis & Route offen" },
            { number: "02", title: "Die Küste vom Wasser aus entdecken", text: "G&G Hydra Cruises beschreibt die Daskalakis-Höhle als wetterabhängigen Stopp seiner sommerlichen Inselrundfahrt. Der veröffentlichte Richtpreis beträgt 40 € ohne bzw. 60 € mit Mittagessen pro Person; Durchführung nur bei ausreichender Teilnehmerzahl (10–12) und nach Rücksprache.", link: "https://www.hydradirect.com/Gnghydracruises", label: "G&G Hydra Cruises recherchieren", status: "Sommerbetrieb · Höhlenstopp wetterabhängig" },
            { number: "03", title: "Miaoulia: ein Hafenabend mit Geschichte", text: "Das traditionsreiche Fest erinnert an die maritime Geschichte Hydras und ist für seine eindrucksvollen Feiern bekannt. Die offizielle griechische Tourismusorganisation bestätigt das jährlich stattfindende Fest und die Nachstellung einer historischen Seeschlacht. Der genaue Termin 2027 ist noch nicht amtlich bestätigt.", link: "https://www.visitgreece.gr/de/experiences/culture/archaeological-sites-monuments/miaoulia", label: "Visit Greece – Miaoulia (Deutsch)", status: "Termin 2027 unbestätigt" },
            { number: "04", title: "Übernachten wie in einem historischen Kapitänshaus", text: "Das restaurierte Kapitänshaus Cotommatae 1810 liegt laut eigener Website nur rund 200 Meter vom Hafen entfernt. Die historischen Zimmer erzählen eigene Geschichten; das Hotel vermittelt außerdem private Bootsausflüge zu abgelegenen Buchten und kleinen Inseln. Zimmer, Ausflugsangebot und Preise für 2027 direkt anfragen.", link: "https://www.cotommatae.gr/", label: "Cotommatae Hydra 1810", status: "Verfügbarkeit 2027 offen" },
            { number: "05", title: "Drei Inseln, drei völlig verschiedene Stimmungen", text: "Die Route Hydra–Spetses ist für den veröffentlichten Fahrplanzeitraum bis Februar 2027 mit Fahrzeiten ab etwa 30 Minuten belegt. Auch Spetses–Poros ist als Verbindung veröffentlicht (teilweise mit Zwischenstopp auf Hydra). Das macht eine Mehrinseltour interessant, aber noch keinen Tagesausflug mit passender Rückfahrt garantiert. Sommerfahrpläne 2027 und Anschlüsse erst nach Veröffentlichung planen.", link: "https://www.gtp.gr/ferries/hydraport/spetsesport", label: "Hydra–Spetses: veröffentlichte Fahrpläne", status: "Sommer 2027 noch offen" }
          ].map(item => <article key={item.number} className="border border-white/20 bg-white/5 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4"><span className="font-serif text-3xl text-[#d4bb91]">{item.number}</span><span className="text-right text-xs text-[#e5d2af]">{item.status}</span></div>
            <h3 className="mt-6 font-serif text-2xl leading-snug sm:text-3xl">{item.title}</h3>
            <p className="mt-4 leading-relaxed text-white/75">{item.text}</p>
            <a className="mt-6 inline-block text-sm font-semibold text-[#f4d9a8] underline underline-offset-4" href={item.link} target="_blank" rel="noopener noreferrer">{item.label} ↗</a>
          </article>)}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/65">Redaktioneller Recherche-Stand: November 2026. Wassertaxi-Tarif, G&G-Rundfahrt und Miaoulia-Tradition wurden anhand von Hydra Direct bzw. Visit Greece gegengeprüft; die übrigen Ideen sind weiterhin Recherchekandidaten. Preise, Termine, Fahrpläne und Verfügbarkeit für 2027 müssen beim Anbieter bestätigt werden.</p>
      </div>
    </section>
    <section id="inselroute" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Die clevere Kombination</p>
      <h2 className="mt-4 max-w-4xl font-serif text-4xl sm:text-5xl">Hydra als Basis – oder drei Inseln in einer Woche?</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-stone-600">Zwei unterschiedliche Reiseideen, keine starre Route: Bleibe auf Hydra und plane nur bei passenden Rückfahrten Ausflüge. Oder kombiniere mehrere Übernachtungsorte, um Spetses und Poros ohne Zeitdruck zu erleben.</p>
      <div className="mt-9 grid gap-6 md:grid-cols-2">
        <div className="border border-stone-300 bg-white/70 p-7"><p className="text-xs uppercase tracking-widest text-[#92734e]">Variante A · entspannt</p><h3 className="mt-3 font-serif text-3xl">Sieben Tage Hydra</h3><p className="mt-4 leading-relaxed text-stone-600">Ein fester Übernachtungsort. Bootsausflüge, Wanderungen und Inselbesuche nur, wenn Wetter und Hin- und Rückfahrt zusammenpassen. Besonders flexibel.</p></div>
        <div className="border border-stone-300 bg-white/70 p-7"><p className="text-xs uppercase tracking-widest text-[#92734e]">Variante B · Inselhopping</p><h3 className="mt-3 font-serif text-3xl">Hydra + Spetses + Poros</h3><p className="mt-4 leading-relaxed text-stone-600">Mehrere Übernachtungsorte statt riskanter Tagesrückfahrten. Die konkrete Reihenfolge, Gepäcklogistik und Aufenthaltsdauer erst anhand der Fahrpläne für den gewünschten Reisezeitraum festlegen.</p></div>
      </div>
      <p className="mt-7 text-sm text-stone-600">Quellen: <a className="underline underline-offset-2" href="https://www.gtp.gr/ferries/hydraport/spetsesport" target="_blank" rel="noopener noreferrer">Hydra–Spetses Fahrpläne</a> · <a className="underline underline-offset-2" href="https://www.gtp.gr/ferries/spetsesport/porosislandport" target="_blank" rel="noopener noreferrer">Spetses–Poros Fahrpläne</a> · <a className="underline underline-offset-2" href="https://www.cotommatae.gr/hotel/" target="_blank" rel="noopener noreferrer">Cotommatae 1810: Unterkunft und Erlebnisse</a>. Die angezeigten Fahrpläne decken bislang nicht die gesamte Saison 2027 ab.</p>
    </section>
    <section id="unterkuenfte" className="scroll-mt-24 bg-[#eee8dd] px-5 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Übernachten mit Geschichte</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl sm:text-6xl">Nicht irgendein Zimmer. Ein Stück Hydra.</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">Drei ungewöhnliche Unterkünfte aus unserer Recherche. Kein Hotelranking und keine Buchungsempfehlung ohne Preisvergleich: Hier zählt zuerst, was den Aufenthalt besonders machen könnte.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { title: "Cotommatae Hydra 1810", label: "Historisches Kapitänshaus", description: "Ein restauriertes Haus aus dem 19. Jahrhundert mit traditioneller Inselarchitektur. Besonders interessant: Neben der Übernachtung können Gäste nach privaten Bootsausflügen fragen.", audience: "Für Reisende, die Geschichte und individuelle Ausflüge verbinden möchten.", url: "https://www.cotommatae.gr/", source: "Website der Unterkunft", status: "Zimmer, Bootstouren und Preise 2027 anfragen" },
            { title: "Orloff Boutique Hotel", label: "Historisches Boutiquehotel", description: "Laut Betreiber wurde das historische Haupthaus 1796 errichtet; das Boutiquehotel umfasst acht individuell gestaltete Zimmer und Suiten. Besonders spannend sind die Orloff Legacy Suites in einem restaurierten Herrenhaus des 19. Jahrhunderts, etwa 100 Meter entfernt. Bootsausflüge können auf Anfrage arrangiert werden.", audience: "Für Reisende, die ein kleines Haus mit besonderer Atmosphäre suchen.", url: "https://www.orloff.gr/", source: "Offizielle Hotel-Website", status: "Historie und Zimmerangebot vom Betreiber bestätigt · Preise 2027 offen" },
            { title: "Economou Mansion", label: "Kapitänshaus für eine Gruppe?", description: "Ein Unterkunftsverzeichnis beschreibt ein Kapitänshaus oberhalb des Hafens mit vier Schlafzimmern, drei Bädern, Küche und Platz für bis zu acht Gäste. Diese Angaben sind nicht durch eine eigene Betreiberwebsite bestätigt; vor einer Empfehlung sind Identität, Direktkontakt und tatsächliche Buchbarkeit zu prüfen.", audience: "Als mögliche Alternative für eine kleine Reisegruppe statt mehrerer Hotelzimmer.", url: "https://www.santorinisecrets.com/hotels/economou-mansion/", source: "Unterkunftsverzeichnis (nicht Direktanbieter)", status: "Nur Verzeichniseintrag gefunden · Direktanbieter und Preis 2027 prüfen" }
          ].map(item => <article key={item.title} className="flex flex-col border border-stone-300 bg-[#faf8f3] p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[#92734e]">{item.label}</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight">{item.title}</h3>
            <p className="mt-5 leading-relaxed text-stone-700">{item.description}</p>
            <p className="mt-4 text-sm text-stone-600"><strong>Besonders geeignet:</strong> {item.audience}</p>
            <div className="mt-auto pt-7">
              <p className="border-t border-stone-300 pt-4 text-xs text-stone-600"><strong>Prüfstatus:</strong> {item.status}</p>
              <a className="mt-4 inline-block font-semibold underline underline-offset-4" href={item.url} target="_blank" rel="noopener noreferrer">{item.source} ↗</a>
            </div>
          </article>)}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-stone-600">Redaktioneller Stand November 2026. Cotommatae und Orloff wurden anhand ihrer eigenen Websites geprüft; Economou Mansion bleibt ein nicht unabhängig bestätigter Recherchekandidat. Keine der Unterkünfte wurde auf konkrete Verfügbarkeit 2027 geprüft. Wir zeigen bewusst keine fremden Hotelfotos ohne geklärte Bildrechte. Vor der Buchung Betreiber, Ausstattung, Stornierungsbedingungen und 2027-Preise prüfen.</p>
      </div>
    </section>
    <section id="wochenidee" className="scroll-mt-24 bg-[#263b3a] px-5 py-20 text-[#f7f4ec] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4bb91]">Eine Woche, viele Möglichkeiten</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl sm:text-6xl">Sieben Tage. Kein Pflichtprogramm.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">Ein flexibler Reiseentwurf mit Hydra als festem Standort. Die Erlebnisse sind Vorschläge, keine bereits buchbaren Termine. Schlechtes Wetter, Fährpläne und persönliche Vorlieben dürfen den Plan jederzeit verändern.</p>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { day: "Tag 1", name: "Ankommen, ohne Eile", detail: "Fähre ab Piräus, einchecken, den Hafen zu Fuß erkunden und den ersten Abend am Wasser verbringen." },
            { day: "Tag 2", name: "Hydra vom Wasser aus", detail: "Wassertaxi und Badestopp an einer geeigneten Bucht. Für Zourva unbedingt Hin- und Rückfahrt vorab absprechen." },
            { day: "Tag 3", name: "Geschichten hinter den Fassaden", detail: "Historische Gassen, Kapitänshaus-Architektur und ein Spaziergang Richtung Kamini. Zeit für spontane Entdeckungen lassen." },
            { day: "Tag 4", name: "Ein außergewöhnlicher Bootstag", detail: "Bei passendem Wetter eine Inselrundfahrt anfragen. Der erwähnte Höhlenstopp ist nicht garantiert." },
            { day: "Tag 5", name: "Wandern oder einfach bleiben", detail: "Einen passenden Weg bei Hydra Trails auswählen – oder bewusst einen freien Strand- und Hafentag einlegen." },
            { day: "Tag 6", name: "Optionale Nachbarinsel", detail: "Spetses oder Poros nur dann als Tagesausflug einplanen, wenn eine passende Rückfahrt bestätigt ist. Sonst Hydra genießen." },
            { day: "Tag 7", name: "Abschied mit Puffer", detail: "Rückreise zum Festland; ausreichend Zeit zwischen Fähre und eventueller Weiterreise einplanen." }
          ].map(item => <li key={item.day} className="border border-white/20 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4bb91]">{item.day}</p>
            <h3 className="mt-3 font-serif text-2xl">{item.name}</h3>
            <p className="mt-3 leading-relaxed text-white/75">{item.detail}</p>
          </li>)}
        </ol>
        <div className="mt-8 border-l-2 border-[#d4bb91] pl-5 text-sm leading-relaxed text-white/75"><strong className="text-white">Wenn das Miaoulia-Festival stattfindet:</strong> Den Festabend bewusst freihalten und das Programm erst nach Veröffentlichung der offiziellen Termine einbauen. Keine festen Daten für 2027 voraussetzen.</div>
      </div>
    </section>
    <section id="buchungsfahrplan" className="scroll-mt-24 border-y border-stone-300 bg-[#faf8f3] px-5 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Von der Sehnsucht zur Reise</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl sm:text-6xl">Was zuerst buchen? Und was besser noch nicht?</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">Eine praktische Reihenfolge für Hydra 2027 – ohne erfundene Angebote. Erst den Reisezeitraum und die Anreise klären, dann Unterkünfte vergleichen und erst danach wetterabhängige Erlebnisse festlegen.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            { n: "01", title: "Reisezeit und besonderen Anlass wählen", desc: "Soll das Miaoulia-Festival ein Höhepunkt werden? Dann auf die offiziellen Termine warten, bevor nicht stornierbare Buchungen erfolgen. Andernfalls die Woche flexibel wählen.", action: "Noch offen: offizielles Festivaldatum 2027" },
            { n: "02", title: "Anreise bis Hydra als Kette prüfen", desc: "Flug oder andere Anreise nach Athen, Transfer zum Hafen Piräus und Fähre nach Hydra gemeinsam planen. Bei getrennten Tickets genügend Puffer vorsehen; nicht mit einem unbestätigten Anschluss rechnen.", action: "Noch offen: individuelle Reisezeit und 2027-Fahrplan" },
            { n: "03", title: "Historische Unterkünfte direkt anfragen", desc: "Cotommatae und Orloff nach Verfügbarkeit, Zimmerkategorie, Gesamtpreis inklusive Abgaben, Stornierungsregeln und Gepäcktransport ab Hafen fragen. Economou erst nach Klärung des tatsächlichen Anbieters berücksichtigen.", action: "Noch offen: konkrete Angebote und Stornobedingungen" },
            { n: "04", title: "Bootserlebnisse mit Plan B vormerken", desc: "Wassertaxi nach Zourva oder G&G-Rundfahrt mit Höhlenstopp direkt beim Betreiber anfragen. Wichtig: Rückfahrt, Mindestteilnehmerzahl, Wetterregelung, Storno und endgültiger Preis.", action: "Noch offen: Termine, Preis und Durchführbarkeit" },
            { n: "05", title: "Spetses oder Poros bewusst auswählen", desc: "Nur bei geeigneter Hin- und Rückfahrt als Tagesausflug. Wer beide Inseln intensiv erleben möchte, prüft besser eine Route mit mehreren Übernachtungsorten.", action: "Noch offen: passende Fahrten im gewählten Reisezeitraum" },
            { n: "06", title: "Gesamtpreis statt Einzel-Schnäppchen vergleichen", desc: "Anreise, Transfers, Fähren, Übernachtungen, Bootsausflüge und Stornierungsbedingungen gemeinsam betrachten. Ein günstiger Flug hilft wenig, wenn ein zusätzlicher Übernachtungstag nötig wird.", action: "Noch offen: vergleichbare Gesamtangebote" }
          ].map(item => <article key={item.n} className="border border-stone-300 bg-white p-6">
            <p className="font-serif text-3xl text-[#92734e]">{item.n}</p>
            <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
            <p className="mt-4 leading-relaxed text-stone-600">{item.desc}</p>
            <p className="mt-5 border-t border-stone-200 pt-4 text-sm font-medium text-[#765b3b]">{item.action}</p>
          </article>)}
        </div>
        <div className="mt-9 border-l-4 border-[#92734e] bg-[#eee8dd] p-6">
          <h3 className="font-serif text-2xl">Eine Anfrage, die wirklich weiterhilft</h3>
          <p className="mt-3 max-w-4xl leading-relaxed text-stone-700">Für Unterkünfte immer dieselben Angaben anfragen: gewünschter Zeitraum und Nächte, Personenzahl, Zimmerart, Gesamtpreis inklusive aller Zuschläge, Stornofrist, Frühstück, Anreise vom Hafen und optional organisierte Bootsausflüge. Erst dann sind Angebote sinnvoll vergleichbar.</p>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-stone-600">Stand November 2026: Dies ist eine Planungshilfe, keine Buchungsbestätigung. Verfügbarkeit und Preise für 2027 sind nicht geprüft. Originalanbieter und Fahrplanquellen stehen im Abschnitt „Fähren & Tipps“.</p>
      </div>
    </section>
    <section id="reiseplanung" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 sm:px-10">
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
