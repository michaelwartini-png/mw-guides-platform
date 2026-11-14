import type { Metadata } from "next";
import Link from "next/link";
import { MilanMagazine } from "@/components/bucket-list-2027/MilanMagazine";

export const metadata: Metadata = {
  title: "Mailand Unlimited – Norditalien als Tagesausflug | Europa Bucket List 2027",
  description: "Mailand als feste Hotelbasis: Comer See, Lago Maggiore, Bergamo, Bologna, Verona, Lugano und viele weitere flexible Tagesausflüge.",
  robots: { index: false, follow: false, nocache: true },
};

const galleryPhotos = [
  {
    "id": "como",
    "src": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bellagio_and_Lake_Como_from_Menaggio-Varenna_ferry.jpg?width=1280",
    "source": "https://commons.wikimedia.org/wiki/File:Bellagio_and_Lake_Como_from_Menaggio-Varenna_ferry.jpg",
    "author": "Daniel Case",
    "license": "CC BY-SA 3.0"
  },
  {
    "id": "maggiore",
    "src": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Isole_dei_Pescatori.jpg?width=1280",
    "source": "https://commons.wikimedia.org/wiki/File:Isole_dei_Pescatori.jpg",
    "author": "Fawcett5",
    "license": "Public Domain"
  },
  {
    "id": "bologna",
    "src": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Finestrella_di_Via_Piella.jpg?width=1280",
    "source": "https://commons.wikimedia.org/wiki/File:Finestrella_di_Via_Piella.jpg",
    "author": "Donatella Bajo",
    "license": "CC BY-SA 4.0"
  },
  {
    "id": "parma",
    "src": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Teatro_Farnese_Interno.jpg?width=1280",
    "source": "https://commons.wikimedia.org/wiki/File:Teatro_Farnese_Interno.jpg",
    "author": "Maurizio Moro5153",
    "license": "CC BY-SA 4.0"
  },
  {
    "id": "verona",
    "src": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Panoramic_photograph_of_Verona_from_Castel_San_Pietro.jpg?width=1280",
    "source": "https://commons.wikimedia.org/wiki/File:Panoramic_photograph_of_Verona_from_Castel_San_Pietro.jpg",
    "author": "Espt123",
    "license": "CC BY-SA 3.0"
  },
  {
    "id": "lugano",
    "src": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lugano_Funicolare_Monte_Bre.jpeg?width=1280",
    "source": "https://commons.wikimedia.org/wiki/File:Lugano_Funicolare_Monte_Bre.jpeg",
    "author": "Robot8A",
    "license": "CC BY-SA 4.0"
  }
] as const;

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
          <p className="text-xs uppercase tracking-[0.35em] text-[#f3d6a7]">Mailand Unlimited · Europa Bucket List 2027</p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.03] sm:text-7xl lg:text-8xl">Ein Hotel in Mailand.<br/>Ganz Norditalien vor uns.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">Heute über den Dächern des Doms. Morgen auf einem Schiff zwischen Bergen. Übermorgen ein italienischer Abend in Bergamo. Wir bleiben frei – und entdecken jeden Tag eine andere Welt.</p>
        </div>
      </div>
      <p className="mt-2 px-1 text-xs text-stone-500">Vorhandenes Foto der ursprünglichen Mailand-Vorlage; Bildrechte und Quellenangabe vor einer Veröffentlichung gesondert prüfen.</p>
    </section>
    <section aria-label="Die Reise in drei Bildern" className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-10 sm:pt-24">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Mailand Unlimited · Eine Reise, viele Möglichkeiten</p>
      <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">Nicht möglichst viel sehen. Sondern möglichst viel erleben.</h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">Mailand ist nicht nur unser Bahnhof, sondern unser Zuhause auf Zeit. Die Stadt gehört uns – und die Seen, Altstädte und Berge Norditaliens sind spontane Möglichkeiten, keine Pflichttermine.</p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <div className="border-t border-stone-300 pt-5"><span className="text-xs uppercase tracking-[0.2em] text-[#92734e]">01 · Stadtgefühl</span><h3 className="mt-3 font-serif text-3xl">Mailand entdecken.</h3><p className="mt-3 text-stone-600">Domterrassen, Gassen, Plätze – und Zeit für das Unerwartete.</p></div>
        <div className="border-t border-stone-300 pt-5"><span className="text-xs uppercase tracking-[0.2em] text-[#92734e]">02 · Wasser & Weite</span><h3 className="mt-3 font-serif text-3xl">Einfach aufs Schiff.</h3><p className="mt-3 text-stone-600">Comer See oder Lago Maggiore. Der schönste Weg ist manchmal übers Wasser.</p></div>
        <div className="border-t border-stone-300 pt-5"><span className="text-xs uppercase tracking-[0.2em] text-[#92734e]">03 · Andere Welten</span><h3 className="mt-3 font-serif text-3xl">Jeden Tag neu wählen.</h3><p className="mt-3 text-stone-600">Bergamo, Bologna, Parma, Verona oder Lugano – ganz ohne Abhakliste.</p></div>
      </div>
    </section>
    <nav aria-label="Mailand-Magazin – Abschnitte" className="sticky top-0 z-30 border-b border-stone-300 bg-[#f7f4ec]/95 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto text-xs font-semibold sm:text-sm">
        {[["#mailand","Mailand erleben"],["#bildstrecke","Fotoreportage"],["#ausfluege","Reiseziele"],["#entdeckungen","Geheimtipps"],["#wochenidee","7 Tage"],["#unterkunft","Hotelbasis"],["#buchungsfahrplan","Vorbereitung"],["#reisepraxis","Reisepraxis"]].map(([href,label])=><a key={href} href={href} className="shrink-0 rounded-full border border-stone-300 px-4 py-2 hover:bg-[#eae4d8]">{label}</a>)}
      </div>
    </nav>
    <section id="mailand" className="scroll-mt-24 bg-[#263b3a] px-5 py-20 text-[#f7f4ec] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4bb91]">Mailand · die Stadt nach dem Ausflug</p>
        <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">Wenn der Tag noch lange nicht zu Ende ist.</h2>
        <div className="mt-12 grid gap-7 md:grid-cols-5 md:items-start">
          <figure className="md:col-span-3">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Milano_Naviglio_Grande_am_Abend_1.jpg?width=1600" alt="Naviglio Grande in Mailand im Abendlicht" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="mt-4"><span className="block font-serif text-3xl italic">Ein Abend, der nach Mailand klingt.</span><span className="mt-2 block text-xs text-white/65">Foto: Zairon · <a href="https://commons.wikimedia.org/wiki/File:Milano_Naviglio_Grande_am_Abend_1.jpg" target="_blank" rel="noopener noreferrer" className="underline">Original & Lizenz</a></span></figcaption>
          </figure>
          <figure className="md:col-span-2 md:mt-24">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Galleria_Vittorio_Emanuele_II%2C_Milan%2C_interior.jpg?width=1280" alt="Licht und Architektur im Inneren der Galleria Vittorio Emanuele II" loading="lazy" className="aspect-[3/4] w-full object-cover" />
            <figcaption className="mt-4"><span className="block font-serif text-3xl italic">Unter einem Himmel aus Glas.</span><span className="mt-2 block text-xs text-white/65">Foto: Gerda Arendt · CC0 · <a href="https://commons.wikimedia.org/wiki/File:Galleria_Vittorio_Emanuele_II,_Milan,_interior.jpg" target="_blank" rel="noopener noreferrer" className="underline">Original & Lizenz</a></span></figcaption>
          </figure>
        </div>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/75">Morgens die Domterrassen, nachmittags durch die Galleria, abends am Naviglio Grande. Mailand ist nicht nur unser Ausgangspunkt. Es ist ein Teil der Reise.</p>
      </div>
    </section>
    <section id="bildstrecke" aria-label="Norditalien in sieben Originalfotografien" className="scroll-mt-24 mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Die Fotoreportage · sieben Reiseziele</p>
      <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">Einmal aufbrechen. Siebenmal staunen.</h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">Vom Schiff auf dem Comer See über die Gassen Bolognas bis zu den Bergen über Lugano: Norditalien zeigt jeden Tag ein anderes Gesicht.</p>
      <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-12">
        {[
          {id:"como",name:"Comer See",title:"Die Berge kommen näher. Wir bleiben auf dem Wasser.",span:"md:col-span-8",ratio:"aspect-[5/4]"},
          {id:"maggiore",name:"Lago Maggiore",title:"Eine Insel, die ihren eigenen Rhythmus hat.",span:"md:col-span-4",ratio:"aspect-[4/5]"},
          {id:"bologna",name:"Bologna",title:"Ein Fenster. Ein Kanal. Eine andere Stadt.",span:"md:col-span-5",ratio:"aspect-[4/5]"},
          {id:"parma",name:"Parma",title:"Ein Theater, das die Zeit vergessen lässt.",span:"md:col-span-7",ratio:"aspect-[5/4]"},
          {id:"verona",name:"Verona",title:"Von oben ist die Stadt eine neue Geschichte.",span:"md:col-span-8",ratio:"aspect-[5/4]"},
          {id:"lugano",name:"Lugano",title:"Mit der Bergbahn Richtung Himmel.",span:"md:col-span-4",ratio:"aspect-[4/5]"}
        ].map(item=>{
          const photo=galleryPhotos.find(p=>p.id===item.id)!;
          return <figure key={item.id} className={item.span}>
            <div className="overflow-hidden bg-stone-200"><img src={photo.src} alt={item.name + " – authentische Wikimedia-Commons-Fotografie"} loading="lazy" className={item.ratio+" w-full object-cover"} /></div>
            <figcaption className="mt-4"><span className="text-xs uppercase tracking-[0.2em] text-[#92734e]">{item.name}</span><p className="mt-2 font-serif text-2xl italic leading-snug sm:text-3xl">{item.title}</p><p className="mt-3 text-xs text-stone-500">Foto: {photo.author} · {photo.license} · <a href={photo.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Original & Lizenz</a></p></figcaption>
          </figure>;
        })}
      </div>
      <p className="mt-8 text-xs text-stone-500">Bildquellen: Wikimedia Commons. Für diese private Vorschau werden verkleinerte Originaldateien direkt über Commons eingebunden; Rechteangaben vor einer öffentlichen Veröffentlichung nochmals prüfen.</p>
    </section>
    <section id="ausfluege" className="scroll-mt-24 mx-auto max-w-6xl px-5 pb-20 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Acht Welten · auf einen Blick</p>
      <h2 className="mt-3 font-serif text-4xl sm:text-6xl">Welche Welt zieht uns an?</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-stone-600">Erst schauen, dann entscheiden: alle Ziele ohne zusätzliche Klicks.</p>
      <div><MilanMagazine magazineMode /></div>
    </section>
    <section id="entdeckungen" className="scroll-mt-24 border-y border-stone-300 bg-[#ece6d9] py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Aus der vertieften Recherche · besondere Entdeckungen</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">Die Geschichten hinter den Postkarten.</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">Acht Entdeckungen, die aus einem gewöhnlichen Tagesausflug eine besondere Erinnerung machen können.</p>
        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {[
            {num:"01",place:"Lago Maggiore · Stresa",title:"Die Insel, auf der das Leben weitergeht",copy:"Zwischen den prachtvollen Palästen liegt die Isola dei Pescatori: enge Gassen, Stege und der Blick zurück über das Wasser. Als Tagesausflug mit Bahn und Schiff.",detail:"Schiffssaison und Rückfahrt ab Stresa prüfen",href:"https://www.navigazionelaghi.it/en/tickets-and-timetables-lake-maggiore/",link:"Offizielle Schifffahrt"},
            {num:"02",place:"Bergamo Alta",title:"Ein italienischer Abend über den Dächern",copy:"Mit der Standseilbahn in die Città Alta, durch verwinkelte Gassen zur Piazza Vecchia – und bleiben, bis die Fassaden im Abendlicht leuchten. Ein Ausflug, der nicht nach einer Checkliste verlangt.",detail:"Für einen langen Abend Rückfahrt und Standseilbahn prüfen",href:"https://www.visitbergamo.net/",link:"Visit Bergamo"},
            {num:"03",place:"Bologna",title:"Die Stadt mit dem verborgenen Wasser",copy:"Nicht nur Arkaden und Türme: Historische Kanäle und Wasserwege haben Bologna geprägt. Die Untergrundführungen sind selten; der Spaziergang auf den Spuren der Kanäle bleibt die Alternative.",detail:"Untergrundtour nur bei bestätigtem Angebot",href:"https://www.bolognawelcome.com/en/events/miscellaneous/bologna-underground",link:"Bologna Welcome"},
            {num:"04",place:"Parma",title:"Ein Theater wie eine Zeitmaschine",copy:"Im Teatro Farnese wird barocke Architektur zur Bühne. Ein außergewöhnlicher Raum, den wir mit einem entspannten Altstadttag verbinden können.",detail:"Öffnungszeiten des Complesso della Pilotta prüfen",href:"https://complessopilotta.it/",link:"Complesso della Pilotta"},
            {num:"05",place:"Verona",title:"Über den Dächern statt vor dem Balkon",copy:"Die Standseilbahn zum Castel San Pietro führt zu einem anderen Verona: Dächer, Fluss und Stadtlandschaft statt der üblichen Fotostopps.",detail:"Betriebszeiten der Funicolare prüfen",href:"https://www.tourism.verona.it/castel-san-pietro",link:"Verona Tourismus"},
            {num:"06",place:"Lugano · Schweiz",title:"Ein Berg genügt für einen großen Perspektivwechsel",copy:"Monte Brè oder Monte San Salvatore: eine historische Bergbahn und der Blick auf den See. Wir wählen bewusst einen Gipfel, statt zwei Ausflüge in einen Tag zu pressen.",detail:"Wetter, Schweizer Fahrkarten und Bergbahnbetrieb prüfen",href:"https://www.luganoregion.com/en/",link:"Lugano Region"},
            {num:"07",place:"Modena",title:"Wenn Zeit zum Handwerk wird",copy:"Eine traditionelle Acetaia erzählt die Geschichte des Balsamicos über Holzfässer und jahrelange Reifung. Für eine echte Betriebsführung brauchen wir einen bestätigten Anbieter und Termin.",detail:"Noch kein konkreter Betrieb verbindlich ausgewählt",href:"https://www.visitmodena.it/",link:"Visit Modena"},
            {num:"08",place:"Pavia",title:"Die große Stille vor Mailands Haustür",copy:"Die Certosa di Pavia bietet einen überraschenden Kontrast zur Großstadt: Kreuzgänge, kunstvolle Architektur und ein langsameres Tempo.",detail:"Zugang und Öffnungszeiten vorab prüfen",href:"https://museilombardia.cultura.gov.it/",link:"Musei Lombardia"}
          ].map(item=><details key={item.num} className="group border-t border-stone-400 py-5 open:bg-[#f7f4ec] open:px-5 open:pb-6">
            <summary className="flex cursor-pointer list-none items-start gap-5 [&::-webkit-details-marker]:hidden">
              <span className="font-serif text-3xl italic text-[#92734e]">{item.num}</span>
              <span className="min-w-0 flex-1"><span className="block text-xs uppercase tracking-[0.16em] text-[#92734e]">{item.place}</span><strong className="mt-2 block font-serif text-2xl font-normal leading-tight sm:text-3xl">{item.title}</strong></span>
              <span aria-hidden="true" className="mt-2 text-2xl text-[#92734e] group-open:rotate-45">+</span>
            </summary>
            <div className="ml-12 mt-5 max-w-xl"><p className="leading-relaxed text-stone-600">{item.copy}</p><p className="mt-4 text-xs text-stone-500">{item.detail}</p><a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold underline decoration-[#92734e] underline-offset-4">{item.link} ↗</a></div>
          </details>)}
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
            ].map(item=><details key={item.day} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center gap-5 [&::-webkit-details-marker]:hidden"><span className="w-12 shrink-0 font-serif text-3xl italic text-[#92734e]">{item.day}</span><span className="flex-1 font-serif text-xl leading-tight sm:text-2xl">{item.heading}</span><span aria-hidden="true" className="text-xl text-[#92734e] group-open:rotate-45">+</span></summary>
              <p className="ml-[4.25rem] mt-3 max-w-2xl leading-relaxed text-stone-600">{item.text}</p>
            </details>)}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-stone-500">Die Reihenfolge bleibt offen. Saisonfahrpläne und Sonderführungen für 2027 müssen vor der Reise geprüft werden.</p>
        </div>
      </div>
    </section>
    <section id="unterkunft" className="scroll-mt-24 bg-[#263b3a] px-5 py-24 text-[#f7f4ec] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4bb91]">Ein Hotel. Viele Möglichkeiten.</p>
        <h2 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.08] sm:text-7xl">Morgens aufbrechen.<br/><span className="italic text-[#d4bb91]">Abends nach Mailand zurückkehren.</span></h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">Die Freiheit dieser Reise beginnt mit einer guten Basis. Wir entscheiden uns für eine Unterkunft – und behalten alle Richtungen offen.</p>
        <div className="mt-16 grid gap-8 border-t border-white/30 pt-8 md:grid-cols-3">
          <div><span className="text-xs uppercase tracking-[0.2em] text-[#d4bb91]">Bahn im Mittelpunkt</span><h3 className="mt-3 font-serif text-3xl">Milano Centrale</h3><p className="mt-3 text-sm leading-relaxed text-white/65">Viele Bahnverbindungen in Reichweite. Umgebung, Lärm und Metroanschluss bei der Hotelwahl mitprüfen.</p></div>
          <div><span className="text-xs uppercase tracking-[0.2em] text-[#d4bb91]">Mitten im Stadtleben</span><h3 className="mt-3 font-serif text-3xl">Duomo & Zentrum</h3><p className="mt-3 text-sm leading-relaxed text-white/65">Mailand vor und nach den Tagesausflügen erleben. Die Wege zu den Bahnhöfen bewusst einplanen.</p></div>
          <div><span className="text-xs uppercase tracking-[0.2em] text-[#d4bb91]">Ein Viertel zum Bleiben</span><h3 className="mt-3 font-serif text-3xl">Brera & Garibaldi</h3><p className="mt-3 text-sm leading-relaxed text-white/65">Abendliches Stadtgefühl mit Verkehrsanbindung verbinden. Die konkrete Lage entscheidet.</p></div>
        </div>
      </div>
    </section>
    <section id="buchungsfahrplan" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 sm:px-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div><p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Für später aufheben</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">Die Planung soll nicht die Reise sein.</h2><p className="mt-6 max-w-md text-stone-600">Alle wichtigen Hinweise bleiben erhalten – aber erst sichtbar, wenn wir sie brauchen.</p></div>
        <div className="divide-y divide-stone-300 border-y border-stone-300">
          <details className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl [&::-webkit-details-marker]:hidden">01 · Anreise & Hotel <span className="text-[#92734e] group-open:rotate-45">+</span></summary><p className="mt-4 leading-relaxed text-stone-600">Reisetage, An- und Abfahrt und eine gut angebundene Unterkunft mit passenden Stornierungsbedingungen festlegen. Konkrete Hotelpreise sind noch nicht geprüft.</p></details>
          <details className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl [&::-webkit-details-marker]:hidden">02 · Besondere Erlebnisse <span className="text-[#92734e] group-open:rotate-45">+</span></summary><p className="mt-4 leading-relaxed text-stone-600">Domterrassen und gewünschte Sonderführungen auf Zeitfenster prüfen. Nicht jede Entdeckung braucht eine Reservierung.</p></details>
          <details className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl [&::-webkit-details-marker]:hidden">03 · Seen, Züge & Rückfahrt <span className="text-[#92734e] group-open:rotate-45">+</span></summary><p className="mt-4 leading-relaxed text-stone-600">Schiffssaison, Wetter und letzte Rückfahrt prüfen. Tagesausflüge bleiben austauschbar; Fahrpläne für 2027 sind nicht bestätigt.</p></details>
          <details className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl [&::-webkit-details-marker]:hidden">04 · Offizielle Verbindungen <span className="text-[#92734e] group-open:rotate-45">+</span></summary><div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm underline underline-offset-4"><a href="https://www.trenitalia.com/" target="_blank" rel="noopener noreferrer">Trenitalia</a><a href="https://www.trenord.it/" target="_blank" rel="noopener noreferrer">Trenord</a><a href="https://www.navigazionelaghi.it/" target="_blank" rel="noopener noreferrer">Navigazione Laghi</a><a href="https://www.sbb.ch/" target="_blank" rel="noopener noreferrer">SBB</a></div><p className="mt-4 text-sm text-stone-500">Offizielle Einstiegsseiten, keine bestätigten Verbindungen oder Verfügbarkeiten.</p></details>
        </div>
      </div>
    </section>
    <section id="reisepraxis" className="bg-[#eae4d8] px-5 py-24 text-center sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92734e]">Mailand Unlimited · 2027</p>
      <p className="mx-auto mt-7 max-w-4xl font-serif text-4xl italic leading-tight sm:text-6xl">Nicht alles sehen müssen. Sondern das Richtige erleben.</p>
      <p className="mx-auto mt-7 max-w-xl text-stone-600">Ein Hotel, offene Tage und genug Zeit, um unterwegs überrascht zu werden.</p>
    </section>
    <footer className="border-t border-stone-300 px-6 py-10 text-center text-sm text-stone-600">Europa Bucket List 2027 · Private Gestaltungsvorschau</footer>
  </main>;
}
