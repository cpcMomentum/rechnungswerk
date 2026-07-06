# Changelog

Alle nennenswerten Änderungen an RechnungsWerk werden hier dokumentiert.

Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
Versionierung nach [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

## [0.1.2] - 2026-07-05

### Added
- Nextcloud 34 wird unterstützt (`max-version` auf 34 angehoben)
- Kundenverwaltung: eigene Customer-Entität mit Erfassung, Bearbeitung und Übernahme
  in die Rechnung

### Fixed
- Storno als rechtssichere E-Rechnung: Korrekturrechnung mit typeCode **384**
  und negativen Beträgen (EN16931 / §14c UStG), Referenz auf die stornierte Rechnung
  (BT-25/BT-26); Beleg heißt „Stornorechnung" statt „Gutschrift" (#64, #65)
- Storno-Dialog eindeutig beschriftet, doppeltes „Cancel" behoben (#64)
- DATEV-Rückkanal (IMAP): RFC-2047-Q-Encoding wird versionsstabil dekodiert (PHP 8.2)

### Changed
- DATEV-Rückkanal nutzt einen eigenen schlanken IMAP-Client statt `webklex/php-imap`
  (deutlich kleineres Release, unter dem App-Store-Größenlimit) (#51)
- Anzeigename und Marken-Strings durchgängig auf „RechnungsWerk" vereinheitlicht

## [0.1.1] - 2026-06-26

### Added
- Spendenlink (Ko-fi) in der App-Beschreibung / im App Store

## [0.1.0] - 2026-06-25

Erster öffentlicher Release im Nextcloud App Store. Rechnungen und E-Rechnungen
(ZUGFeRD/EN16931) erstellen, an Kunden versenden und automatisch an DATEV übergeben.

### Added
- E-Rechnung (ZUGFeRD/EN16931): CII-XML + branded PDF/A-3 (`ZugferdService`),
  vollständiger Feldexport — Leistungsdatum/-zeitraum (BT-72/BG-14),
  Bestell-/Referenznummern (BT-13/14), Verkäufer-/Käufer-Ansprechpartner (BG-6/BG-9),
  USt-Sonderfälle (Reverse-Charge, innergemeinschaftlich, Ausfuhr)
- DATEV-Übergabe: automatischer E-Mail-Versand der ZUGFeRD-PDF an die DATEV-Upload-Mail
  beim Festschreiben und beim Stornieren; optionales eigenes SMTP-Konto
- DATEV-Rückkanal (IMAP): Background-Job wertet Empfangsbestätigungen aus
  (In-Reply-To-Matching), Status gesendet → bestätigt; optionaler Papierkorb-Cleanup
  bestätigter Quittungen (Admin-Einstellung, Default aus)
- Verkäufer-Ansprechpartner pro Rechnung (Kaskade Rechnung → NC-Konto → Firmenkontakt)
- Status-Anzeige als flache Icons + Legende in Liste und Editor; Einstellungen
  in der Navigation unten links (NC-Konvention)
- Zahlungsbedingungen (It. 4a): Zahlungsziel (Tage), automatisch berechnetes
  Fälligkeitsdatum beim Festschreiben und Skonto-Hinweis — Migration v0.1.1
  (`payment_term_days`, `due_date`, `discount_terms`) + Editor-Sektion
- Rechnungs-Editor + Liste (It. 3): `InvoicesView` mit Status-Chips und
  `InvoiceEditorView` (Rechnungsdaten · Empfänger · Positionen · Steuer&Summen · Texte)
- Editierbare Positionstabelle mit Live-Summen + USt-Aufschlüsselung (Client-Vorschau,
  Server autoritativ), Produkt-Übernahme aus dem Katalog, §19-konforme 0%-Erzwingung
- Empfänger-Auswahl aus Nextcloud-Kontakten (`ContactController` + `OCP\Contacts\IManager`)
  mit Tipp-Vorschlägen und Auto-Befüllung
- Lifecycle in der UI: Entwurf speichern → Festschreiben (Bestätigung, endgültige Nummer,
  read-only) → Stornieren (Stornobeleg)
- l10n de/en erweitert (120 Keys)

### Added (frühere Iterationen)
- Stammdaten + Produktkatalog (It. 2): `ProductService`/`ProductController`
  (`/api/v1/products` CRUD) und `SettingsController` (`/api/v1/settings`)
- Frontend `ProductsView` (Tabelle + Editor-Modal) und `SettingsView` (gegliedertes
  Formular: Firma/Bank/Branding/Nummernkreis/Steuer/Versand/Standardtexte) mit
  §19-Bestätigungsdialog und Live-Vorschau der Rechnungsnummer
- Pinia-Stores, typisierter API-Client, Geld-Helfer (Cent↔€), l10n de/en
- Unit-Tests für `ProductService`
- _(Logo-Auswahl via NC-Files-Picker bewusst auf It. 4 / PDF-Branding verschoben)_
- Initiale App-Grundstruktur (Vue 3 + Vite + @nextcloud/vue 9, PHP 8.2 OCP)
- App-Navigation mit Platzhalter-Views: Rechnungen, Produkte, Einstellungen
- Datenmodell + Persistenz-Schicht: Entities/Mapper für Invoice, InvoiceItem,
  Product, Settings (Geld in Cents, Steuer in Basispunkten, owner-scoped)
- DB-Migration v0.1.0 (4 Tabellen)
- `InvoiceCalculator` (Zeilensummen, Steueraufschlüsselung pro Satzgruppe,
  Rechnungsnummern-Formatierung) mit Unit-Tests
- `InvoiceService` mit Lifecycle (Entwurf → Festschreiben → Storno) und
  `SettingsService` (per-Owner-Stammdaten, jahresbasierter Nummernkreis)
- REST-API `/api/v1/invoices` (CRUD + `/commit`, `/cancel`)

[Unreleased]: https://github.com/cpcMomentum/rechnungswerk/compare/v0.1.2...HEAD
[0.1.2]: https://github.com/cpcMomentum/rechnungswerk/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/cpcMomentum/rechnungswerk/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/cpcMomentum/rechnungswerk/releases/tag/v0.1.0
