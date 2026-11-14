import type { Metadata } from "next";
import Link from "next/link";
import { MilanMagazine } from "@/components/bucket-list-2027/MilanMagazine";

export const metadata: Metadata = {
  title: "Mailand Unlimited – Norditalien als Tagesausflug | Europa Bucket List 2027",
  description: "Mailand als feste Hotelbasis: Comer See, Lago Maggiore, Bergamo, Bologna, Verona, Lugano und viele weitere flexible Tagesausflüge.",
  robots: { index: false, follow: false, nocache: true },
};

export default function MilanMagazinePreview() {
  return <main className="min-h-screen bg-[#f7f4ec] text-[#26312f]">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs uppercase tracking-[0.18em] text-stone-600 sm:px-10">
      <span>Europa Bucket List 2027 · redaktionelle Gestaltungsvorschau</span>
      <Link className="underline underline-offset-4" href="/bucket-list-2027?reise=mailand-unlimited">Originalvorlage vergleichen</Link>
    </div>
    <section className="mx-auto max-w-[1600px] px-3 sm:px-6" aria-label="Mailand als Ausgangspunkt">
      <div className="relative min-h-[470px] overflow-hidden bg-[#263b3a]">
        <img src="/images/explore-trips/mailand-hero.jpg" alt="Mailänder Dom – Ausgangspunkt für Tagesausflüge durch Norditalien" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative flex min-h-[470px] flex-col justify-end px-6 pb-12 text-white sm:min-h-[650px] sm:px-14 sm:pb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#f3d6a7]">Norditalien · ein Hotel · unzählige Möglichkeiten</p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.03] sm:text-7xl lg:text-8xl">Mailand Unlimited.<br/>Jeden Tag eine andere Welt.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">Morgens mit dem Zug los. Mittags am Comer See, in Bergamos Altstadt oder auf den Borromäischen Inseln. Abends zurück nach Mailand – ohne Kofferpacken.</p>
        </div>
      </div>
      <p className="mt-2 px-1 text-xs text-stone-500">Vorhandenes Foto der ursprünglichen Mailand-Vorlage; Bildrechte und Quellenangabe vor einer Veröffentlichung gesondert prüfen.</p>
    </section>
    <nav aria-label="Mailand-Magazin – Abschnitte" className="sticky top-0 z-30 border-b border-stone-300 bg-[#f7f4ec]/95 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto text-xs font-semibold sm:text-sm">
        {[["#konzept","Reisekonzept"],["#ausfluege","Tagesausflüge"],["#reiseplanung","7 Tage & Quellen"]].map(([href,label])=><a key={href} href={href} className="shrink-0 rounded-full border border-stone-300 px-4 py-2 hover:bg-[#eae4d8]">{label}</a>)}
      </div>
    </nav>
    <section id="konzept" className="scroll-mt-24 mx-auto max-w-4xl px-6 py-20 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Die Idee hinter Mailand Unlimited</p>
      <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">Einmal ankommen. Jeden Tag neu entdecken.</h2>
      <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-stone-600">Mailand ist unser Ausgangspunkt – nicht das alleinige Reiseziel. Seen und Schiffe, historische Städte, Standseilbahnen, Arkaden und sogar ein Abstecher in die Schweiz: Wir wählen täglich neu, wohin es geht. Alles kann, nichts muss.</p>
    </section>
    <section aria-label="Norditalien in großen Bildern" className="mx-auto max-w-6xl px-5 pb-24 sm:px-10">
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <figure>
            <div className="overflow-hidden bg-stone-200"><img src="/images/explore-trips/mailand-como.jpg" alt="Comer See – Ausflugsziel von Mailand" loading="lazy" className="aspect-[5/4] w-full object-cover" /></div>
            <figcaption className="mt-4 font-serif text-2xl italic leading-snug sm:text-3xl">Morgens Mailand. Mittags ein Schiff auf dem Comer See.</figcaption>
          </figure>
        </div>
        <div className="md:col-span-4 md:pb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">01 · Der See ruft</p>
          <h3 className="mt-4 font-serif text-4xl leading-tight">Ein Zugticket. Ein völlig anderer Tag.</h3>
          <p className="mt-5 leading-relaxed text-stone-600">Von der Großstadt ans Wasser. Am Ufer entlang, an Bord eines Schiffes, zwischen kleinen Orten und Bergen. Der Comer See ist keine Pflichtstation – sondern eine Möglichkeit, die man sich offenhält.</p>
          <p className="mt-4 text-sm text-stone-500">Bahn und Schiff · Verbindung und Saisonfahrplan prüfen</p>
        </div>
      </div>
      <div className="mt-24 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="md:order-2">
          <figure><div className="overflow-hidden bg-stone-200"><img src="/images/explore-trips/mailand-bergamo.jpg" alt="Bergamo – historische Oberstadt" loading="lazy" className="aspect-[4/5] w-full object-cover" /></div><figcaption className="mt-4 font-serif text-2xl italic">Ein paar Stationen weiter. Und plötzlich Mittelalter.</figcaption></figure>
        </div>
        <div className="max-w-md md:order-1 md:pl-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">02 · Über den Dächern von Bergamo</p>
          <h3 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Die schönste Überraschung liegt manchmal ganz nah.</h3>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">Mit der Bahn nach Bergamo. Dann mit der Standseilbahn hinauf in die Città Alta. Hinter den Mauern warten enge Gassen, kleine Plätze und Ausblicke, für die man gern länger bleibt.</p>
          <p className="mt-5 text-sm text-stone-500">Bahn + Standseilbahn · Betriebszeiten prüfen</p>
        </div>
      </div>
      <div className="mt-24 bg-[#263b3a] px-6 py-12 text-[#f7f4ec] sm:px-12 sm:py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4bb91]">03 · Das Abenteuer beginnt am Bahnhof</p>
        <h3 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Wohin fahren wir heute?</h3>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Lago Maggiore und die Borromäischen Inseln? Bologna mit seinen Arkaden? Verona, Parma, Modena, Pavia – oder über die Grenze nach Lugano? Unser schönster Luxus ist die Auswahl.</p>
        <figure className="mt-9"><div className="overflow-hidden bg-stone-700"><img src="/images/explore-trips/mailand-centrale.jpg" alt="Milano Centrale – Ausgangspunkt zahlreicher Zugausflüge" loading="lazy" className="aspect-[16/9] w-full object-cover" /></div><figcaption className="mt-3 text-sm italic text-white/70">Milano Centrale. Nicht nur ein Bahnhof. Das Tor zu vielen Möglichkeiten.</figcaption></figure>
      </div>
      <div className="mt-24 grid gap-9 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7"><figure><div className="overflow-hidden bg-stone-200"><img src="/images/explore-trips/mailand-closing.jpg" alt="Norditalien – Landschaft und Reisestimmung" loading="lazy" className="aspect-[16/10] w-full object-cover" /></div><figcaption className="mt-3 text-xs text-stone-500">Vorhandenes Motiv aus der Mailand-Vorlage · Bildrechte vor öffentlicher Veröffentlichung prüfen</figcaption></figure></div>
        <div className="md:col-span-5"><p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">04 · Und abends?</p><h3 className="mt-4 font-serif text-4xl leading-tight">Zurück nach Mailand. Mit Geschichten im Gepäck.</h3><p className="mt-6 text-lg leading-relaxed text-stone-600">Kein Hotelwechsel. Kein Kofferpacken. Nur die Frage, welcher Ausflug morgen auf uns wartet. Und wenn wir einmal nirgendwohin fahren möchten? Dann gehört der Tag ganz Mailand.</p></div>
      </div>
    </section>
    <section id="ausfluege" className="scroll-mt-24 mx-auto max-w-6xl px-5 pb-20 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Die bestehende Mailand-Vorlage – vollständig übernommen</p>
      <h2 className="mt-3 font-serif text-4xl sm:text-6xl">Norditalien liegt uns zu Füßen.</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-stone-600">Die nachfolgende Ausflugsübersicht, Bilder, sieben flexiblen Reisetage und Anbieterlinks stammen unverändert aus der vorhandenen Mailand-Komponente. Wir ändern hier die redaktionelle Präsentation, nicht das Reiseprogramm.</p>
      <div id="reiseplanung" className="scroll-mt-24"><MilanMagazine /></div>
    </section>
    <footer className="border-t border-stone-300 px-6 py-10 text-center text-sm text-stone-600">Mailand Unlimited · private, nicht indexierbare Magazin-Vorschau · ursprüngliches Reisekonzept bewahrt</footer>
  </main>;
}
