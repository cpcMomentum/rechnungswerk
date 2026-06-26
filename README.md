# RechnungsWerk

Schlanke Nextcloud-App zum Erstellen von Rechnungen und **E-Rechnungen** (ZUGFeRD/EN16931)
für deutsche Unternehmen — mit frei wählbarem Empfänger pro Rechnung und automatischer
Übergabe an DATEV.

## Features (MVP)

- Aufgeräumter Rechnungs-Editor (Positionen, Maßeinheit, USt pro Zeile, Live-Summen)
- ZUGFeRD-Erzeugung (PDF/A-3 + eingebettetes EN16931-CII-XML)
- GoBD-konforme Festschreibung (Entwurf → festgeschrieben → Storno/Gutschrift)
- Automatische DATEV-Übergabe per Upload Mail beim Festschreiben
- Kundenversand: PDF-Download und In-App-Versand (Empfänger aus Nextcloud-Kontakten)
- Produktkatalog für wiederkehrende Leistungen
- Stammdaten/Einstellungen (Nummernformat, Firmendaten, Logo, Standardtexte, §19)

## Entwicklung

```bash
npm install
npm run dev      # Vite Dev-Server
npm run build    # Produktions-Build nach js/ + css/
```

## Lizenz

AGPL-3.0-or-later
