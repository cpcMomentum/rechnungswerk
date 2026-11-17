> Extends: node_modules/nc-app-tooling/docs/design-system.md

# Design-System RechnungsWerk

Hier steht nur, was RechnungsWerk über das gemeinsame Design-System hinaus regelt.

## Navigation

- Fuß: Protokoll · Neuerungen · Einstellungen · Verwaltung.
- **Einstellungen** (`#/me`): persönlich, Gruppe „Persönlich“ mit dem Punkt „Ansprechpartner“.
- **Verwaltung** (`#/settings`): app-weit, nur für App-Admins.
- Die Adressen `#/me` und `#/settings` bleiben aus der Zeit vor den neuen Seitennamen bestehen, damit vorhandene Links weiter funktionieren.

## Neuerungen

- Gäste: RechnungsWerk zeigt die App nur Nutzern, denen ein Admin den Zugriff freigegeben hat. Eine eigene Gast-Prüfung gibt es deshalb nicht.
