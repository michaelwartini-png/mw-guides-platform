/**
 * Private travel-group planning data. Not imported by public routes.
 * The private preview must be access-controlled before any route uses this data.
 */
export interface BucketListTrip2027 {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  route: string[];
  highlights: string[];
  transport: string[];
  planningNotes: string[];
  existingExploreTripSlug?: string;
}

export const europaBucketList2027: BucketListTrip2027[] = [
  {
    slug: "mailand-unlimited",
    title: "Mailand Unlimited",
    subtitle: "Norditalien entdecken, ohne ständig den Koffer zu packen.",
    duration: "ca. 7 Tage",
    route: ["Mailand als Basis", "Lago Maggiore", "Comer See", "Bergamo", "Bologna", "Verona"],
    highlights: ["Borromäische Inseln", "Comer See per Schiff", "Historische Altstädte", "Navigli"],
    transport: ["Bahn", "ÖPNV", "Schiff"],
    planningNotes: ["Ausflüge flexibel nach Wetter und Interessen kombinieren.", "Fahrpläne und Öffnungszeiten vor Reiseantritt prüfen."],
    existingExploreTripSlug: "mailand-unlimited",
  },
  {
    slug: "skandinavien-unlimited",
    title: "Skandinavien Unlimited",
    subtitle: "Drei Hauptstädte und eine Nacht auf dem Meer.",
    duration: "ca. 7 Tage",
    route: ["Kopenhagen", "Stockholm", "Helsinki"],
    highlights: ["Øresund-Verbindung", "Stockholmer Schären", "Nachtfähre", "Helsinki"],
    transport: ["Bahn", "Nachtfähre", "ÖPNV"],
    planningNotes: ["Mehrere Hotelstandorte einplanen.", "Fährfahrplan und Kabinenverfügbarkeit prüfen."],
  },
  {
    slug: "norwegen-lofoten",
    title: "Norwegen & Lofoten",
    subtitle: "Inselwelten, Fjorde und die spektakuläre norwegische Küste.",
    duration: "ca. 7 Tage",
    route: ["Bodø", "Lofoten", "Tromsø"],
    highlights: ["Fährfahrt zu den Lofoten", "Fischerdörfer", "Küstenpassage", "Arktische Landschaften"],
    transport: ["Flug", "Fähre", "Küstenschiff", "Bus"],
    planningNotes: ["Wetter- und saisonabhängige Verbindungen berücksichtigen.", "Küstenschiff und Fähren nicht ohne Fahrplanprüfung fest einplanen."],
  },
  {
    slug: "rotterdam-unlimited",
    title: "Rotterdam Unlimited",
    subtitle: "Hafen, moderne Architektur und die Niederlande vom Wasser aus.",
    duration: "ca. 7 Tage",
    route: ["Rotterdam als Basis", "Den Haag", "Delft", "Utrecht", "Kinderdijk"],
    highlights: ["Hafenrundfahrt", "Wassertaxi", "Erasmusbrücke", "Internationale Institutionen"],
    transport: ["Bahn", "Wassertaxi", "Schiff", "ÖPNV"],
    planningNotes: ["Hotelstandort Rotterdam oder Vlaardingen vergleichen.", "Wassertaxi- und Schiffsangebote saisonal prüfen."],
  },
  {
    slug: "portugal-unlimited",
    title: "Portugal Unlimited",
    subtitle: "Von Portos historischer Straßenbahn über den Douro bis Lissabon.",
    duration: "ca. 7 Tage",
    route: ["Porto", "Douro", "Lissabon", "optional Cascais"],
    highlights: ["Historische Straßenbahnlinie 1", "Douro-Schifffahrt", "Bahnreise nach Lissabon", "Belém"],
    transport: ["Flug", "Straßenbahn", "Bahn", "Schiff"],
    planningNotes: ["Zwei Hotelstandorte vorsehen.", "Douro-Schifffahrt und Zuganschlüsse zeitlich abstimmen."],
  },
  {
    slug: "bratislava-wien-wachau",
    title: "Bratislava – Wien – Wachau",
    subtitle: "Zwei Hauptstädte, die Donau und außergewöhnliche Einblicke.",
    duration: "ca. 7 Tage",
    route: ["Bratislava", "Wien", "Melk", "Krems"],
    highlights: ["Twin City Liner", "Öffentliche Parlamentssitzung, falls verfügbar", "UNO-City", "Wachau-Schifffahrt"],
    transport: ["Bahn", "Schiff", "ÖPNV"],
    planningNotes: ["Parlamentssitzungen nur nach tatsächlichem Sitzungskalender.", "Wachau-Schiffe nicht als frei nutzbares Hop-on-Hop-off-Angebot darstellen."],
    existingExploreTripSlug: "wien-bratislava",
  },
  {
    slug: "preveza-lefkada",
    title: "Preveza & Lefkada",
    subtitle: "Griechische Hafenstädte und türkisfarbene Inselbuchten.",
    duration: "ca. 7 Tage",
    route: ["Preveza", "Nikopolis", "Lefkada", "Nidri"],
    highlights: ["Hafen von Preveza", "Antikes Nikopolis", "Bootsausflüge", "Strände von Lefkada"],
    transport: ["Flug", "Bus", "Boot"],
    planningNotes: ["Erreichbarkeit abgelegener Strände ohne Mietwagen prüfen.", "Mögliche Aufteilung auf zwei Hotelstandorte."],
  },
  {
    slug: "bodensee-unlimited",
    title: "Bodensee Unlimited",
    subtitle: "Drei Länder, ein See und täglich neue Möglichkeiten.",
    duration: "ca. 7 Tage",
    route: ["Konstanz", "Meersburg", "Lindau", "Bregenz", "Stein am Rhein"],
    highlights: ["Insel Mainau", "Rheinfall", "Pfänder", "Zeppelin Museum"],
    transport: ["Bahn", "Schiff", "Seilbahn", "ÖPNV"],
    planningNotes: ["Mögliche Aufteilung Konstanz und Lindau/Bregenz.", "Schifffahrtszeiten saisonal abgleichen."],
    existingExploreTripSlug: "bodensee",
  },
  {
    slug: "hydra-unlimited",
    title: "Hydra Unlimited",
    subtitle: "Eine autofreie griechische Insel als entspannte Reisebasis.",
    duration: "ca. 7 Tage",
    route: ["Athen/Piräus", "Hydra", "optional Poros", "optional Spetses"],
    highlights: ["Autofreier Inselort", "Wassertaxis", "Küstenwege", "Inselhafen"],
    transport: ["Flug", "Fähre", "Wassertaxi"],
    planningNotes: ["Hydra als durchgehender Hotelstandort.", "Tagesausflüge nach Poros oder Spetses nur bei passenden Fährverbindungen."],
  },
];

export function getBucketListTrip2027(slug: string): BucketListTrip2027 | undefined {
  return europaBucketList2027.find((trip) => trip.slug === slug);
}
