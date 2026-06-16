# Changelog

Alle nennenswerten Änderungen an Rechnungswerk werden hier dokumentiert.

Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
Versionierung nach [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

### Added
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
