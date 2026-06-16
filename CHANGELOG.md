# Changelog

Alle nennenswerten Änderungen an Rechnungswerk werden hier dokumentiert.

Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
Versionierung nach [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

### Added
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
