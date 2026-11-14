type Photo = { id: number; place: string; file: string; title: string; verified: boolean };
const photos: Photo[] = [
  {
    "id": 1,
    "place": "Lugano",
    "file": "See_und_Palme_in_Lugano_2024.jpg",
    "title": "Palme vor dem See",
    "verified": false
  },
  {
    "id": 2,
    "place": "Lugano",
    "file": "Lugano_1.jpg",
    "title": "Häuser am Wasser",
    "verified": false
  },
  {
    "id": 3,
    "place": "Mailand",
    "file": "04_003_Mailand,_Piazza_Repubblica.jpg",
    "title": "Gelbe Straßenbahnen",
    "verified": false
  },
  {
    "id": 4,
    "place": "Bologna",
    "file": "Bologna,_Italy_-_panoramio_(14).jpg",
    "title": "Bologna bei Nacht",
    "verified": false
  },
  {
    "id": 5,
    "place": "Bologna",
    "file": "Bologna_Panorama.jpg",
    "title": "Dächer von Bologna",
    "verified": false
  },
  {
    "id": 6,
    "place": "Comer See",
    "file": "Comer_See_Personenschiff.JPG",
    "title": "Fähre auf dem See",
    "verified": false
  },
  {
    "id": 7,
    "place": "Comer See",
    "file": "Comer_See_Schiffsverkehr.JPG",
    "title": "Schiffsverkehr",
    "verified": false
  },
  {
    "id": 8,
    "place": "Lago Maggiore",
    "file": "Gabriele_Chiattone_-_Poster_Lago_Maggiore.jpg",
    "title": "Historisches Reiseplakat",
    "verified": false
  },
  {
    "id": 9,
    "place": "Mailand",
    "file": "Interior_of_Milano_Centrale_2022-09-28_14.jpg",
    "title": "Bahnhof Milano Centrale",
    "verified": false
  },
  {
    "id": 10,
    "place": "Comer See",
    "file": "Lago_di_Como_(riflessi).jpg",
    "title": "Spiegelung im See",
    "verified": false
  },
  {
    "id": 11,
    "place": "Comer See",
    "file": "Lake_Como_from_Como_(2).jpg",
    "title": "Hafen von Como",
    "verified": false
  },
  {
    "id": 12,
    "place": "Mailand",
    "file": "Milan,_Italy._August_2016._(34379545635).jpg",
    "title": "Navigli bei Nacht",
    "verified": false
  },
  {
    "id": 13,
    "place": "Mailand",
    "file": "Milan,_Italy_-_December_2025_-_229.jpg",
    "title": "Navigli bei Tag",
    "verified": false
  },
  {
    "id": 14,
    "place": "Mailand",
    "file": "Milan,_Italy_-_December_2025_-_245.jpg",
    "title": "Architektur und Technik",
    "verified": false
  },
  {
    "id": 15,
    "place": "Mailand",
    "file": "Milan,_Italy_Tram_25_February_2013.jpg",
    "title": "Historische Straßenbahn",
    "verified": false
  },
  {
    "id": 16,
    "place": "Mailand",
    "file": "Milano_Centrale_Frecciabianca.jpg",
    "title": "Zug in Milano Centrale",
    "verified": false
  },
  {
    "id": 17,
    "place": "Lugano",
    "file": "Lugano_from_Monte_Bre.jpg",
    "title": "Lugano vom Monte Brè",
    "verified": false
  },
  {
    "id": 18,
    "place": "Comer See",
    "file": "Panoramic_view_of_Como_Lake_(Lago_di_Como),_seen_from_the_mountain_Monte_Grona_-_Plesio_(Como)_2015-10-25.JPG",
    "title": "Panorama vom Monte Grona",
    "verified": false
  },
  {
    "id": 19,
    "place": "Mailand",
    "file": "Milano_Centrale_railway_station_by_Tanweer.jpg",
    "title": "Bahnhof und Reisende",
    "verified": false
  },
  {
    "id": 20,
    "place": "Mailand",
    "file": "Panorama_from_the_cathedral,_Milan,_Italy_LOC_4711357943.jpg",
    "title": "Historisches Stadtpanorama",
    "verified": false
  },
  {
    "id": 21,
    "place": "Mailand",
    "file": "Mailänder_Dom_Detail_Dachaufgang.jpg",
    "title": "Gotische Dachdetails",
    "verified": false
  },
  {
    "id": 22,
    "place": "Mailand",
    "file": "Milan_Cathedral_from_Piazza_del_Duomo.jpg",
    "title": "Domfassade",
    "verified": false
  },
  {
    "id": 23,
    "place": "Bergamo",
    "file": "Bergamo_-_Piazza_Pontida.jpg",
    "title": "Historische Piazza Pontida",
    "verified": false
  },
  {
    "id": 24,
    "place": "Verona",
    "file": "Collage_Verona.jpg",
    "title": "Verona-Collage",
    "verified": false
  },
  {
    "id": 25,
    "place": "Mailand",
    "file": "Der_Mailänder_Dom_(1874).jpg",
    "title": "Der Dom im 19. Jahrhundert",
    "verified": false
  },
  {
    "id": 26,
    "place": "Turin",
    "file": "For_sale,_market_in_Turin,_Italy_(32273853228).jpg",
    "title": "Markt in Turin",
    "verified": false
  },
  {
    "id": 27,
    "place": "Verona",
    "file": "Gran_Guardia_(Verona).jpg",
    "title": "Gran Guardia",
    "verified": false
  },
  {
    "id": 28,
    "place": "Turin",
    "file": "La_basilica_al_tramonto.jpg",
    "title": "Basilika im Abendlicht – Ort prüfen",
    "verified": false
  },
  {
    "id": 29,
    "place": "Lago Maggiore",
    "file": "Lago-Maggiore_1359.JPG",
    "title": "Insel im Lago Maggiore",
    "verified": false
  },
  {
    "id": 30,
    "place": "Lago Maggiore",
    "file": "Lago-Maggiore_1364.JPG",
    "title": "Palastinsel",
    "verified": false
  },
  {
    "id": 31,
    "place": "Mailand",
    "file": "Mailänder_Dom_Dach_a.jpg",
    "title": "Auf dem Domdach",
    "verified": false
  },
  {
    "id": 32,
    "place": "Verona",
    "file": "Verona_il_Sole_che_cala.jpg",
    "title": "Verona bei Sonnenuntergang",
    "verified": true
  },
  {
    "id": 33,
    "place": "Turin",
    "file": "Piazza_Castello_Turin_Italy_27-12-2021.jpg",
    "title": "Piazza Castello",
    "verified": false
  },
  {
    "id": 34,
    "place": "Bergamo",
    "file": "Sunrise_at_Bergamo_old_town,_Lombardy,_Italy.jpg",
    "title": "Bergamo im Morgenlicht",
    "verified": true
  },
  {
    "id": 35,
    "place": "Turin",
    "file": "Tram_in_Via_Po,_Turin_(Italy,_2020).jpg",
    "title": "Tram mit Lichterketten",
    "verified": false
  },
  {
    "id": 36,
    "place": "Turin",
    "file": "Turin,_Italy…City_highlights_(10830904545).jpg",
    "title": "Turin bei Nacht",
    "verified": false
  },
  {
    "id": 37,
    "place": "Turin",
    "file": "Turin_Montage.png",
    "title": "Turin-Collage",
    "verified": false
  },
  {
    "id": 38,
    "place": "Verona",
    "file": "Verona_0001.jpg",
    "title": "Gasse in Verona",
    "verified": false
  }
];
const places = ["Mailand","Comer See","Lago Maggiore","Bergamo","Bologna","Verona","Lugano","Turin"];
function sourceUrl(file: string) { return "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(file); }
function photoUrl(file: string) { return "https://commons.wikimedia.org/wiki/Special:Redirect/file/" + encodeURIComponent(file) + "?width=960"; }
export default function MilanPhotoLibrary() {
 return <main className="min-h-screen bg-[#f5f1e9] px-5 py-12 text-[#283330] md:px-12">
  <div className="mx-auto max-w-7xl"><a className="text-sm underline" href="/bucket-list-2027/mailand-magazin">← Mailand Unlimited</a>
   <p className="mt-12 text-xs uppercase tracking-[0.2em]">Europa Bucket List 2027 · Bildredaktion</p>
   <h1 className="mt-3 font-serif text-5xl md:text-7xl">Mailand-Fotothek</h1>
   <p className="mt-5 max-w-3xl text-lg">38 Bildvorschläge aus deinen Uploads. Große Vorschaubilder, nach Reiseziel geordnet. Die Urheber- und Lizenzprüfung ist noch nicht abgeschlossen; keine Freigabe zur Veröffentlichung.</p>
   <nav className="my-10 flex flex-wrap gap-3"><a href="#alle" className="rounded-full border px-4 py-2">Alle</a>{places.map(place=><a key={place} href={"#"+place.replace(/ /g,"-")} className="rounded-full border px-4 py-2">{place}</a>)}</nav>
   <div id="alle">{places.map(place=><section key={place} id={place.replace(/ /g,"-")} className="mb-20 scroll-mt-8"><h2 className="mb-7 border-b pb-3 font-serif text-4xl">{place}</h2><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{photos.filter(p=>p.place===place).map(p=><article key={p.id}><a href={sourceUrl(p.file)} target="_blank" rel="noopener noreferrer" className="block overflow-hidden bg-[#e2ddd2]"><img src={photoUrl(p.file)} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover" /></a><div className="mt-3 flex items-start justify-between gap-3"><div><p className="text-xs opacity-60">#{p.id} · Lizenzprüfung offen</p><h3 className="mt-1 font-serif text-xl">{p.title}</h3></div><a className="shrink-0 text-sm underline" href={sourceUrl(p.file)} target="_blank" rel="noopener noreferrer">Original ↗</a></div></article>)}</div></section>)}</div>
  </div>
 </main>;
}
