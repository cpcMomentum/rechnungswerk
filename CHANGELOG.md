# Changelog

Alle nennenswerten Änderungen an Rechnungswerk werden hier dokumentiert.

Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
Versionierung nach [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

### Added
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
