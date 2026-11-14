import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mailand Unlimited – Magazin-Entwurf | Europa Bucket List 2027",
  description: "Ungewöhnliche Mailand-Erlebnisse, besondere Kombinationen und ein flexibler Wochenplan – redaktioneller Entwurf.",
  robots: { index: false, follow: false, nocache: true },
};

const discoveries = [
  { title: "Die Dächer des Doms – statt nur davorzustehen", kicker: "Perspektivwechsel", text: "Zwischen Türmchen und Skulpturen die Stadt von oben entdecken. Dachzugang und Zeitfenster über die offizielle Domverwaltung prüfen.", url: "https://www.duomomilano.it/", source: "Duomo di Milano", status: "Öffnungszeiten und Tickets 2027 offen" },
  { title: "Ein Abend in der Scala – oder hinter die Kulissen", kicker: "Musik & Geschichte", text: "Nicht nur das berühmte Opernhaus fotografieren: Spielplan, Museum und mögliche Führungen machen den Besuch zum Erlebnis. Ob eine Vorstellung zum Reisezeitpunkt passt, ist offen.", url: "https://www.teatroallascala.org/", source: "Teatro alla Scala", status: "Spielplan 2027 prüfen" },
  { title: "Mailand aus der Straßenbahn erleben", kicker: "Unterwegs wie die Einheimischen", text: "Eine Fahrt in einer historischen Straßenbahn kann selbst ein Stadterlebnis sein. Welche Fahrzeuge tatsächlich eingesetzt werden, lässt sich für einen bestimmten Tag nicht garantieren.", url: "https://www.atm.it/", source: "ATM Milano", status: "Linien und Fahrbetrieb prüfen" },
  { title: "Leonardos Abendmahl – das Zeitfenster entscheidet", kicker: "Kunst mit Planungsvorsprung", text: "Der Besuch von Santa Maria delle Grazie braucht sorgfältige Vorplanung. Offizielle Ticketfenster und Besuchsbedingungen beachten, statt sich auf Wiederverkäufer zu verlassen.", url: "https://cenacolovinciano.org/", source: "Museo del Cenacolo Vinciano", status: "Ticketfenster für 2027 offen" },
  { title: "Mailand und der Comer See: zwei Welten", kicker: "Stadt + See", text: "Ein möglicher Tagesausflug mit Bahn und gegebenenfalls Schiff. Erst nach Auswahl des Ortes – etwa Como oder Varenna – lassen sich Anschlüsse und ein realistischer Tagesablauf vergleichen.", url: "https://www.trenord.it/", source: "Trenord", status: "Konkrete Verbindung 2027 offen" },
  { title: "Navigli am Abend – und das andere Mailand", kicker: "Atmosphäre statt Pflichtprogramm", text: "Kanäle, Brücken und kleine Straßen machen den Abend zum Gegenpol der monumentalen Innenstadt. Ideal als flexibler Programmpunkt ohne festen Zeitdruck.", url: "https://www.yesmilano.it/", source: "YesMilano", status: "Lokale Veranstaltungen 2027 offen" }
];

const week = [
  ["1", "Ankommen & erste Stadtszenen", "Duomo-Platz, Galleria und ein Abendspaziergang – bewusst ohne volles Programm."],
  ["2", "Dom aus ungewohnter Perspektive", "Dachbesuch und historische Innenstadt; Eintrittszeit vorher buchen."],
  ["3", "Kunst, die man nicht spontan abhakt", "Leonardos Abendmahl nur mit gesichertem Zeitfenster; ansonsten Museen oder Architektur als Alternative."],
  ["4", "Mailand in Bewegung", "Historische Straßenbahn, Brera und kleine Entdeckungen abseits der Hauptachsen."],
  ["5", "Opernwelt oder Design", "Scala-Besuch nach Spielplan oder ein Tag mit Design- und Architekturthemen."],
  ["6", "Optional: Comer See", "Tagesausflug nur mit passenden Zug- und gegebenenfalls Schiffsverbindungen; sonst mehr Mailand."],
  ["7", "Letzter Kaffee, entspannte Abreise", "Puffer für die Weiterreise lassen, keine weit entfernten Termine mehr planen."]
];

export default function MilanMagazinePreview() {
  return <main className="min-h-screen bg-[#f5f1ea] text-[#262b2a]">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs uppercase tracking-[0.2em] text-stone-600"><span>Europa Bucket List 2027 · Magazin-Entwurf</span><Link href="/bucket-list-2027?reise=mailand-unlimited" className="underline underline-offset-4">Bisherige Mailand-Seite vergleichen</Link></div>
    <header className="bg-[#283e40] px-6 py-24 text-[#f7f1e6] sm:py-36"><div className="mx-auto max-w-6xl">
      <p className="text-xs uppercase tracking-[0.35em] text-[#ddc39d]">Italien · Mailand Unlimited</p>
      <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[1.02] sm:text-8xl">Mailand.<br/>Mehr als Mode.</h1>
      <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/80">Eine Stadt zwischen Opernloge, Straßenbahn und Dachterrassen. Und vielleicht beginnt das nächste Abenteuer schon am See.</p>
      <p className="mt-8 max-w-2xl text-sm text-white/60">Bewusst noch ohne neue Bilder: Bildauswahl, Urheberrechte und Freigabe stehen aus. Keine Platzhalterfotos als angebliche Originalmotive.</p>
    </div></header>
    <nav aria-label="Mailand-Magazin" className="sticky top-0 z-20 overflow-x-auto border-b border-stone-300 bg-[#f5f1ea]/95 px-5 py-3 backdrop-blur"><div className="mx-auto flex max-w-6xl gap-2 text-sm font-semibold">
      {[["#entdeckungen","Besondere Erlebnisse"],["#woche","7-Tage-Idee"],["#planung","Buchung & Quellen"]].map(([href,label])=><a key={href} href={href} className="shrink-0 rounded-full border border-stone-300 px-4 py-2 hover:bg-[#e6ddd0]">{label}</a>)}
    </div></nav>
    <section className="mx-auto max-w-4xl px-6 py-20 text-center"><p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Die Idee</p><h2 className="mt-5 font-serif text-4xl sm:text-6xl">Nicht Sehenswürdigkeiten sammeln. Geschichten erleben.</h2><p className="mt-6 text-lg leading-relaxed text-stone-600">Das ist ein eigenständiger redaktioneller Startentwurf für Mailand, keine Kopie der Hydra-Seite. Jede Empfehlung führt zu einer offiziellen Informationsquelle; aktuelle Preise und 2027-Termine sind noch nicht geprüft.</p></section>
    <section id="entdeckungen" className="scroll-mt-24 bg-[#e8e1d6] px-6 py-20"><div className="mx-auto max-w-6xl"><p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">01 · Sechs Entdeckungen</p><h2 className="mt-4 font-serif text-4xl sm:text-6xl">Mailand, das im Kopf bleibt.</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-2">{discoveries.map((item,i)=><article key={item.title} className="flex flex-col border border-stone-300 bg-[#faf8f4] p-7"><div className="flex items-start justify-between gap-3"><span className="font-serif text-3xl text-[#92734e]">{String(i+1).padStart(2,"0")}</span><span className="text-right text-xs uppercase tracking-wider text-[#92734e]">{item.kicker}</span></div><h3 className="mt-5 font-serif text-3xl">{item.title}</h3><p className="mt-4 leading-relaxed text-stone-600">{item.text}</p><div className="mt-auto pt-7"><p className="border-t border-stone-300 pt-4 text-xs text-stone-600">{item.status}</p><a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold underline underline-offset-4">{item.source} ↗</a></div></article>)}</div>
    </div></section>
    <section id="woche" className="scroll-mt-24 bg-[#283e40] px-6 py-20 text-[#f7f1e6]"><div className="mx-auto max-w-6xl"><p className="text-xs uppercase tracking-[0.3em] text-[#ddc39d]">02 · Eine Woche</p><h2 className="mt-4 font-serif text-4xl sm:text-6xl">Sieben Tage, kein Pflichtprogramm.</h2><div className="mt-12 grid gap-4 md:grid-cols-2">{week.map(([day,title,detail])=><article key={day} className="border border-white/20 p-6"><p className="text-xs uppercase tracking-widest text-[#ddc39d]">Tag {day}</p><h3 className="mt-3 font-serif text-2xl">{title}</h3><p className="mt-3 leading-relaxed text-white/75">{detail}</p></article>)}</div></div></section>
    <section id="planung" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20"><p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">03 · Buchungsvorbereitung</p><h2 className="mt-4 font-serif text-4xl sm:text-6xl">Die drei Entscheidungen zuerst.</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{[
      ["Reisezeit","Vorstellung in der Scala oder besondere Ausstellung als Fixpunkt? Erst offizielle Termine abgleichen."],
      ["Tickets","Für Abendmahl und Domdach frühzeitig offizielle Buchungsfenster prüfen; keine garantierten Plätze."],
      ["Ausflug","Comer See erst nach Abgleich von Zug- und Schiffsfahrplänen als Tagesausflug festlegen."]
    ].map(([title,body])=><div key={title} className="border-t-2 border-[#92734e] pt-5"><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 leading-relaxed text-stone-600">{body}</p></div>)}</div><p className="mt-10 text-sm text-stone-600">Rechercheentwurf November 2026. Die Anbieterlinks dienen als Ausgangspunkte; Termine, Preise, Verfügbarkeit und einzelne Programmpunkte für 2027 sind nicht verbindlich bestätigt.</p></section>
    <footer className="border-t border-stone-300 px-6 py-10 text-center text-sm text-stone-600">Mailand Unlimited · private, nicht indexierbare Magazin-Vorschau</footer>
  </main>;
}
