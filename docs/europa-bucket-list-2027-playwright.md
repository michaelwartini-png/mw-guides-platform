# Europa Bucket List 2027 – Vorschau und Qualitätssicherung

## Aktueller Veröffentlichungsstand
Die Reiseübersicht ist als **öffentlich erreichbare, nicht beworbene Netlify-Deploy-Preview** verfügbar:
https://deploy-preview-1--mw-guides-platform.netlify.app/bucket-list-2027

Die Vorschau ist **nicht passwortgeschützt**. `noindex` ist eine Suchmaschinenanweisung, keine Zugangskontrolle. Keine vertraulichen Gruppen- oder Personendaten eintragen. Die Produktionsversion auf `main` bleibt getrennt.

## Verifiziert über GitHub (13.11.2026)
- Der Netlify-Commitstatus für `56fd1aa` lautet `success` / `Deploy Preview ready!`.
- Alle neun im Modul `content/bucketList2027Images.ts` referenzierten Titelbilder existieren als nichtleere Dateien im Preview-Branch.
- Das Wikimedia-Importmanifest enthält 13 Einträge; die Lizenzdaten werden auf der Bildnachweise-Seite ausgegeben.
- **Nicht verifiziert:** tatsächliche Darstellung und Interaktion im Browser auf Desktop, Tablet und Smartphone.

## Browser-QA vor Abschluss
1. Desktop 1920×1080, Tablet 768×1024, Smartphone 390×844.
2. Neun Fotokacheln: keine abgeschnittenen Titel, Bilder laden, keine horizontale Überbreite.
3. Suche nach `Hydra`, Verkehrsfilter `Nachtfähre`, Öffnen/Zurück, direkte URL `?reise=portugal-unlimited`.
4. Portugal-Galerie: vier Fotos, Lightbox, Bildnachweise, Tastaturnavigation.
5. Prüfen: keine JavaScript-Fehler, Bild-404, defekten Links; `noindex` und Sitemap-Ausschluss.
6. Status je Prüfung ausdrücklich als **bestanden**, **fehlgeschlagen** oder **nicht ausgeführt** dokumentieren.

## Playwright lokal
Die bestehenden Tests unter `tests/europa-bucket-list/` sind historisch und enthalten noch Annahmen über eine passwortgeschützte Vorschau. Diese Annahmen sind veraltet; die Tests müssen vor dem nächsten automatisierten Lauf aktualisiert werden. Ein grüner Netlify-Build ersetzt keinen Browsertest.

Voraussetzungen: `npm install`, `npm install --no-save @playwright/test`, `npx playwright install chromium`.
