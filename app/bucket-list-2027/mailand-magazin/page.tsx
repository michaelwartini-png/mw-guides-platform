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
        {[["#konzept","Reisekonzept"],["#bildstrecke","Bildgeschichte"],["#entdeckungen","Besondere Erlebnisse"],["#wochenidee","7 Tage"],["#reisepraxis","Reisepraxis"],["#ausfluege","Ausflugswahl"]].map(([href,label])=><a key={href} href={href} className="shrink-0 rounded-full border border-stone-300 px-4 py-2 hover:bg-[#eae4d8]">{label}</a>)}
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
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Auf den Anzeigetafeln steht nicht nur das nächste Ziel. Sie zeigen Möglichkeiten: Wasser, Berge, Altstädte und Entdeckungen, für die ein einziger Tag genügt.</p>
        <figure className="mt-9"><div className="overflow-hidden bg-stone-700"><img src="/images/explore-trips/mailand-centrale.jpg" alt="Milano Centrale – Ausgangspunkt zahlreicher Zugausflüge" loading="lazy" className="aspect-[16/9] w-full object-cover" /></div><figcaption className="mt-3 text-sm italic text-white/70">Milano Centrale. Nicht nur ein Bahnhof. Das Tor zu vielen Möglichkeiten.</figcaption></figure>
      </div>
    </section>
    <section id="bildstrecke" aria-label="Reisestimmungen aus der ursprünglichen Mailand-Vorlage" className="scroll-mt-24 pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Die Bildgeschichte · ein Ausgangspunkt, viele Welten</p><h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Der schönste Reiseplan ist manchmal eine offene Tür.</h2></div>
          <p className="max-w-xs text-sm leading-relaxed text-stone-600">Ein visueller Vorgeschmack auf die Vielfalt jenseits der Stadt.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-12">
          <figure className="group relative overflow-hidden bg-stone-200 md:col-span-7"><img src="/images/explore-trips/mailand-natur.jpg" alt="Naturmotiv aus der bestehenden Mailand-Unlimited-Bildauswahl" loading="lazy" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] md:aspect-auto"/><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-6 pb-7 pt-24 text-white"><span className="text-xs uppercase tracking-[0.2em] text-white/75">Natur & Wasser</span><strong className="mt-2 block max-w-lg font-serif text-3xl font-normal leading-tight sm:text-4xl">Einmal abbiegen. Und die Stadt ist ganz weit weg.</strong></figcaption></figure>
          <div className="grid gap-4 md:col-span-5">
            <figure className="group relative overflow-hidden bg-stone-200"><img src="/images/explore-trips/mailand-staedte.jpg" alt="Städtemotiv aus der bestehenden Mailand-Unlimited-Bildauswahl" loading="lazy" className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"/><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-6 pt-20 text-white"><span className="text-xs uppercase tracking-[0.2em] text-white/75">Städte & Geschichte</span><strong className="mt-2 block font-serif text-2xl font-normal leading-tight sm:text-3xl">Hinter jeder Fassade eine neue Zeit.</strong></figcaption></figure>
            <figure className="group relative overflow-hidden bg-stone-200"><img src="/images/explore-trips/mailand-besondere-erlebnisse.jpg" alt="Erlebnismotiv aus der bestehenden Mailand-Unlimited-Bildauswahl" loading="lazy" className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"/><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-6 pt-20 text-white"><span className="text-xs uppercase tracking-[0.2em] text-white/75">Unerwartete Entdeckungen</span><strong className="mt-2 block font-serif text-2xl font-normal leading-tight sm:text-3xl">Die besten Geschichten stehen nicht im Fahrplan.</strong></figcaption></figure>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-stone-500">Bildstrecke mit drei bereits im Repository vorhandenen Motiven der Mailand-Vorlage. Die Fotos illustrieren Reisethemen und sind nicht als Nachweis konkreter Sonderführungen oder Orte beschriftet. Rechte- und Herkunftsnachweise vor einer öffentlichen Veröffentlichung vervollständigen.</p>
      </div>
    </section>
    <section id="entdeckungen" className="scroll-mt-24 border-y border-stone-300 bg-[#ece6d9] py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Aus der vertieften Recherche · besondere Entdeckungen</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">Nicht nur wohin. Sondern was uns dort überrascht.</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">Hinter den bekannten Namen verbergen sich Geschichten, die man leicht übersieht. Diese Auswahl ergänzt unsere ursprünglichen Tagesausflüge – sie ersetzt keinen der Orte.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            {num:"01",place:"Lago Maggiore · Stresa",title:"Die Insel, auf der das Leben weitergeht",copy:"Zwischen den prachtvollen Palästen liegt die Isola dei Pescatori: enge Gassen, Stege und der Blick zurück über das Wasser. Als Tagesausflug mit Bahn und Schiff.",detail:"Schiffssaison und Rückfahrt ab Stresa prüfen",href:"https://www.navigazionelaghi.it/en/tickets-and-timetables-lake-maggiore/",link:"Offizielle Schifffahrt"},
            {num:"02",place:"Bergamo Alta",title:"Unter der Stadt liegt eine zweite Stadt",copy:"Krypten, Zisternen und verborgene Räume erzählen von einem Bergamo, das oberhalb der Erde kaum jemand vermutet. Die besondere Führung ist terminabhängig.",detail:"Nur bei bestätigtem Führungstermin",href:"https://www.visitbergamo.net/es/oggetto/bergamo-sotterranea/",link:"Visit Bergamo"},
            {num:"03",place:"Bologna",title:"Die Stadt mit dem verborgenen Wasser",copy:"Nicht nur Arkaden und Türme: Historische Kanäle und Wasserwege haben Bologna geprägt. Die Untergrundführungen sind selten; der Spaziergang auf den Spuren der Kanäle bleibt die Alternative.",detail:"Untergrundtour nur bei bestätigtem Angebot",href:"https://www.bolognawelcome.com/en/events/miscellaneous/bologna-underground",link:"Bologna Welcome"},
            {num:"04",place:"Parma",title:"Ein Theater wie eine Zeitmaschine",copy:"Im Teatro Farnese wird barocke Architektur zur Bühne. Ein außergewöhnlicher Raum, den wir mit einem entspannten Altstadttag verbinden können.",detail:"Öffnungszeiten des Complesso della Pilotta prüfen",href:"https://complessopilotta.it/",link:"Complesso della Pilotta"},
            {num:"05",place:"Verona",title:"Über den Dächern statt vor dem Balkon",copy:"Die Standseilbahn zum Castel San Pietro führt zu einem anderen Verona: Dächer, Fluss und Stadtlandschaft statt der üblichen Fotostopps.",detail:"Betriebszeiten der Funicolare prüfen",href:"https://www.tourism.verona.it/castel-san-pietro",link:"Verona Tourismus"},
            {num:"06",place:"Lugano · Schweiz",title:"Ein Berg genügt für einen großen Perspektivwechsel",copy:"Monte Brè oder Monte San Salvatore: eine historische Bergbahn und der Blick auf den See. Wir wählen bewusst einen Gipfel, statt zwei Ausflüge in einen Tag zu pressen.",detail:"Wetter, Schweizer Fahrkarten und Bergbahnbetrieb prüfen",href:"https://www.luganoregion.com/en/",link:"Lugano Region"},
            {num:"07",place:"Modena",title:"Wenn Zeit zum Handwerk wird",copy:"Eine traditionelle Acetaia erzählt die Geschichte des Balsamicos über Holzfässer und jahrelange Reifung. Für eine echte Betriebsführung brauchen wir einen bestätigten Anbieter und Termin.",detail:"Noch kein konkreter Betrieb verbindlich ausgewählt",href:"https://www.visitmodena.it/",link:"Visit Modena"},
            {num:"08",place:"Pavia",title:"Die große Stille vor Mailands Haustür",copy:"Die Certosa di Pavia bietet einen überraschenden Kontrast zur Großstadt: Kreuzgänge, kunstvolle Architektur und ein langsameres Tempo.",detail:"Zugang und Öffnungszeiten vorab prüfen",href:"https://museilombardia.cultura.gov.it/",link:"Musei Lombardia"}
          ].map((item,i)=><article key={item.num} className={`flex flex-col justify-between border border-stone-300 bg-[#f7f4ec] p-7 sm:p-9 ${i===0||i===3?"md:min-h-[390px]":""}`}>
            <div>
              <div className="flex items-center justify-between gap-3"><span className="text-xs uppercase tracking-[0.2em] text-[#92734e]">{item.place}</span><span className="font-serif text-3xl italic text-stone-300">{item.num}</span></div>
              <h3 className="mt-7 max-w-lg font-serif text-3xl leading-tight sm:text-4xl">{item.title}</h3>
              <p className="mt-5 leading-relaxed text-stone-600">{item.copy}</p>
            </div>
            <div className="mt-8 border-t border-stone-300 pt-5"><p className="text-xs text-stone-500">{item.detail}</p><a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold underline decoration-[#92734e] underline-offset-4 hover:text-[#92734e]">{item.link} ↗</a></div>
          </article>)}
        </div>
        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-stone-600">Redaktioneller Prüfstand: Die genannten Erlebnisse sind Rechercheoptionen, keine für 2027 bestätigten Buchungen. Für mehrere Sonderführungen, Fahrpläne und Preise liegen noch keine verbindlichen Angaben vor. Die Bildredaktion ergänzt nach Rechteprüfung echte Fotos dieser Orte.</p>
      </div>
    </section>
    <section id="wochenidee" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 sm:px-10">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Sieben Tage · ein Hotel · freie Auswahl</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Keine sieben Pflichten. Sieben Möglichkeiten.</h2>
          <p className="mt-6 leading-relaxed text-stone-600">Ein möglicher Wochenrhythmus: bewusst mit Alternativen und freien Entscheidungen statt einem überfüllten Programm.</p>
          <div className="mt-8 border-l-2 border-[#92734e] pl-5 font-serif text-2xl italic leading-snug">Manchmal ist der beste Tagesausflug der, den wir erst beim Frühstück beschließen.</div>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {[
              {day:"01",heading:"Mailand. Erst einmal ankommen.",text:"Hotel beziehen, die Stadt entdecken, den Bahnhof für die kommenden Tage kennenlernen."},
              {day:"02",heading:"Wasser: Comer See oder Lago Maggiore.",text:"Fähren und Uferorte am Comer See – oder Stresa mit den Borromäischen Inseln. Nicht beides am selben Tag."},
              {day:"03",heading:"Geschichte: Bergamo oder Pavia.",text:"Mit der Standseilbahn hinauf nach Bergamo Alta oder die ruhigen Höfe und das Kloster von Pavia erkunden."},
              {day:"04",heading:"Eine andere Stadt: Bologna oder Verona.",text:"Verborgene Kanäle und Arkaden – oder der Blick vom Castel San Pietro. Sonderführungen nur bei bestätigten Terminen."},
              {day:"05",heading:"Handwerk und große Räume: Modena oder Parma.",text:"Eine reservierte Acetaia-Besichtigung, die Käsereikultur oder das Teatro Farnese. Keine unrealistische Pflichtkombination."},
              {day:"06",heading:"Ein Hauch Schweiz – oder noch einmal an den See.",text:"Lugano mit genau einer Bergbahn als Option; alternativ ein zweiter, ruhigerer Tag am Wasser."},
              {day:"07",heading:"Mailand gehört uns.",text:"Zeit für eine Entdeckung in der Stadt, einen Lieblingsort, einen spontanen Abstecher oder die entspannte Rückreise."}
            ].map(item=><article key={item.day} className="grid gap-3 py-6 sm:grid-cols-[70px_1fr] sm:gap-6"><span className="font-serif text-4xl italic text-[#92734e]">{item.day}</span><div><h3 className="font-serif text-2xl leading-tight sm:text-3xl">{item.heading}</h3><p className="mt-3 max-w-2xl leading-relaxed text-stone-600">{item.text}</p></div></article>)}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-stone-500">Die Reihenfolge bleibt offen. Saisonfahrpläne und Sonderführungen für 2027 müssen vor der Reise geprüft werden.</p>
        </div>
      </div>
    </section>
    <section id="reisepraxis" className="scroll-mt-24 bg-[#263b3a] px-5 py-20 text-[#f7f4ec] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4bb91]">Gut zu wissen, bevor es losgeht</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Freiheit braucht nur ein bisschen Vorbereitung.</h2>
        <div className="mt-12 grid gap-9 md:grid-cols-3">
          <div><h3 className="font-serif text-3xl">Der richtige Ausgangspunkt</h3><p className="mt-4 leading-relaxed text-white/75">Ein Hotel mit guter Anbindung an Milano Centrale oder andere passende Bahnhöfe spart tägliche Umwege. Die konkrete Lage entscheidet mit über die Reisequalität.</p></div>
          <div><h3 className="font-serif text-3xl">Erst die Rückfahrt</h3><p className="mt-4 leading-relaxed text-white/75">Bei Seen und Schiffen zuerst den letzten sinnvollen Rückweg prüfen. Fähren, Bergbahnen und Sonderführungen können saisonal fahren oder ausfallen.</p></div>
          <div><h3 className="font-serif text-3xl">Eine Überraschung pro Tag</h3><p className="mt-4 leading-relaxed text-white/75">Eine besondere Führung oder Bootsfahrt reicht als Höhepunkt. Alles Weitere bleibt freiwillig. Bei schlechtem Wetter wählen wir eine Stadt statt einer Bergbahn.</p></div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3 text-sm">
          <a href="https://www.trenitalia.com/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/50 px-5 py-3 hover:bg-white/10">Trenitalia · Bahn</a>
          <a href="https://www.trenord.it/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/50 px-5 py-3 hover:bg-white/10">Trenord · Regionalzüge</a>
          <a href="https://www.navigazionelaghi.it/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/50 px-5 py-3 hover:bg-white/10">Navigazione Laghi · Schiffe</a>
          <a href="https://www.sbb.ch/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/50 px-5 py-3 hover:bg-white/10">SBB · Schweiz</a>
        </div>
        <p className="mt-6 text-xs text-white/60">Offizielle Einstiegsseiten zur eigenständigen Fahrplanprüfung. Keine Echtzeit-Verfügbarkeiten oder für 2027 garantierten Verbindungen.</p>
      </div>
    </section>
    <section id="ausfluege" className="scroll-mt-24 mx-auto max-w-6xl px-5 pb-20 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Die ursprünglichen Reiseziele · frei kombinierbar</p>
      <h2 className="mt-3 font-serif text-4xl sm:text-6xl">Norditalien liegt uns zu Füßen.</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-stone-600">Alle Ziele unserer ursprünglichen Vorlage auf einen Blick – zum Vergleichen und Auswählen.</p>
      <div><MilanMagazine magazineMode /></div>
    </section>
    <footer className="border-t border-stone-300 px-6 py-10 text-center text-sm text-stone-600">Europa Bucket List 2027 · Private Gestaltungsvorschau</footer>
  </main>;
}
