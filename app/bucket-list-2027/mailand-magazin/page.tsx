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
    <section id="ausfluege" className="scroll-mt-24 mx-auto max-w-6xl px-5 pb-20 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Die bestehende Mailand-Vorlage – vollständig übernommen</p>
      <h2 className="mt-3 font-serif text-4xl sm:text-6xl">Norditalien liegt uns zu Füßen.</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-stone-600">Die nachfolgende Ausflugsübersicht, Bilder, sieben flexiblen Reisetage und Anbieterlinks stammen unverändert aus der vorhandenen Mailand-Komponente. Wir ändern hier die redaktionelle Präsentation, nicht das Reiseprogramm.</p>
      <div id="reiseplanung" className="scroll-mt-24"><MilanMagazine /></div>
    </section>
    <footer className="border-t border-stone-300 px-6 py-10 text-center text-sm text-stone-600">Mailand Unlimited · private, nicht indexierbare Magazin-Vorschau · ursprüngliches Reisekonzept bewahrt</footer>
  </main>;
}
