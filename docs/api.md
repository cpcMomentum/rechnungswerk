# RechnungsWerk: Rechnungs-API für Maschinenklienten

Diese Seite beschreibt, was ein Klient wissen muss, der Rechnungen ohne Oberfläche anlegt. Sie nennt vor allem
die Stellen, an denen die API etwas anderes tut, als ein Feldname vermuten lässt.

## Zugang

- Basis: `https://<instanz>/apps/rechnungswerk/api/v1`
- Anmeldung: `Authorization: Bearer rwrk_…` mit einem API-Schlüssel. API-Schlüssel setzen eine aktive WerkPlus-Lizenz
  voraus.
- Jeder Aufruf braucht zusätzlich den Kopf `OCS-APIRequest: true`. Ohne ihn antwortet Nextcloud mit
  `412 CSRF check failed`, noch bevor die API den Schlüssel prüft.
- Jeder Schlüssel trägt Rechte (Scopes). Fehlt das Recht für einen Aufruf, antwortet die API mit `403` und
  `SCOPE_MISSING`.

| Aufruf | Zweck | Scope |
|---|---|---|
| `GET /invoices` | Rechnungen auflisten | `invoices:read` |
| `GET /invoices/{id}` | eine Rechnung lesen | `invoices:read` |
| `POST /invoices` | Entwurf anlegen | `invoices:create` |
| `DELETE /invoices/{id}` | eigenen Entwurf löschen | `invoices:delete` |
| `POST /invoices/{id}/commit` | festschreiben | `invoices:commit` |
| `GET /invoices/{id}/pdf` | festgeschriebenen Beleg abholen | `invoices:pdf` |
| `POST /invoices/{id}/send` | an den Kunden versenden | `invoices:send` |
| `POST /invoices/{id}/pay` | Zahlungseingang melden | `invoices:pay` |
| `POST /invoices/{id}/cancel` | stornieren | `invoices:cancel` |

Ändern (`PATCH`), Duplizieren und „unbezahlt“ sind der Oberfläche vorbehalten.

## Beträge kommen als deutscher Text

`items[].unitPriceInput` und `items[].quantity` werden so gelesen, wie ein Mensch sie in das Feld tippt:
**Das Komma trennt die Nachkommastellen, der Punkt gruppiert Tausender in Dreiergruppen.**

| Gesendet | Ergebnis |
|---|---|
| `"149,00"` | 149,00 € |
| `"149"` | 149,00 € |
| `"1.234,56"` | 1.234,56 € |
| `"149.00"` | `400` mit `NUMBER_FORMAT_INVALID`: `00` ist keine Dreiergruppe |
| `"1.200"` | **1.200,00 €**, nicht 1,20 € |

Die letzte Zeile ist die teure: Ein `number_format()` mit Punkt als Dezimaltrenner macht die Rechnung um den
Faktor 1000 falsch. Ist sie festgeschrieben und versendet, hilft nur noch ein Storno. Beträge deshalb immer mit
Komma formatieren. Erlaubt sind bis zu 4 Nachkommastellen beim Preis und 3 bei der Menge.

## Kleinunternehmer: der Steuersatz wird überschrieben

Ist die Instanz als Kleinunternehmer (§ 19 UStG) eingerichtet, setzt die API den Steuersatz jeder Position auf 0,
gleich welcher `items[].taxRateBp` gesendet wurde. Die Rechnung entsteht dann ohne Umsatzsteuer.

Die Antwort auf `POST /invoices` meldet das im Feld `warnings`:

```json
{ "id": 42, "totalCents": 14900, "warnings": ["TAX_RATE_OVERRIDDEN_SMALL_BUSINESS"] }
```

`warnings` ist beim Anlegen immer vorhanden und ohne Hinweis leer. Ein Klient, der Umsatzsteuer erwartet, sollte
bei diesem Hinweis abbrechen, statt festzuschreiben.

## Rechnungen suchen

`GET /invoices` liefert ohne Parameter den ganzen Bestand, neueste zuerst. Eingrenzen lässt er sich so:

| Parameter | Bedeutung |
|---|---|
| `orderNumber` | exakte Suche nach der eigenen Referenz |
| `status` | `draft`, `committed` oder `cancelled` |
| `from`, `to` | Rechnungsdatum von/bis, `JJJJ-MM-TT`, jeweils einschließlich |
| `limit`, `offset` | Ausschnitt; `limit` von 1 bis 500, `offset` ab 0 |

- Kein Treffer ergibt eine leere Liste, kein `404`.
- Unbekannte Parameter werden ignoriert.
- Ein unlesbarer Wert eines bekannten Parameters ergibt `400` mit `VALIDATION_FAILED`.
- Entwürfe haben noch kein Rechnungsdatum und fallen bei `from`/`to` heraus.

## Doppeltes Anlegen vermeiden

Geht die Antwort auf `POST /invoices` in einer Zeitüberschreitung verloren, weiß der Klient nicht, ob die
Rechnung entstanden ist. Dafür gibt es den Kopf `Idempotency-Key`:

```
POST /invoices
Idempotency-Key: bestellung-4711
```

- Kommt derselbe Schlüssel erneut, legt die API nichts an und antwortet mit der schon angelegten Rechnung:
  gleicher Status `201`, gleiche `id`.
- Der Schlüssel ist frei wählbar (höchstens 255 Zeichen), sinnvoll ist die eigene Bestell- oder Vorgangsnummer.
- Er gilt je API-Schlüssel. Zwei Klienten mit demselben Wert treffen nie dieselbe Rechnung.
- Die Antwort zeigt den **aktuellen** Stand der Rechnung. Wurde sie inzwischen festgeschrieben, ist sie es auch in
  der Antwort. Der mitgeschickte Inhalt wird beim Wiederholen nicht verglichen.
- Wurde der Entwurf inzwischen gelöscht, ist der Schlüssel wieder frei.
- Ohne den Kopf legt jeder Aufruf eine neue Rechnung an.

Wer keinen Schlüssel mitschickt, sucht nach einer Zeitüberschreitung zuerst mit `?orderNumber=…` und legt nur
dann erneut an, wenn die Liste leer ist.

## Fehler

Jeder Fehler trägt neben dem Text einen Code:

```json
{ "error": "Nur festgeschriebene Rechnungen können als PDF heruntergeladen werden.", "code": "INVOICE_NOT_COMMITTED" }
```

**Verzweigen und protokollieren nur über `code`.** Der Text ist für Menschen, kann sich jederzeit ändern und kann
Kundendaten enthalten.

| Code | Status | Anlass |
|---|---|---|
| `NOT_AUTHENTICATED` | 401 | weder Sitzung noch Schlüssel |
| `API_KEY_INVALID` | 401 | Schlüssel unbekannt oder widerrufen |
| `KEY_GATE_CLOSED` | 403 | keine aktive WerkPlus-Lizenz |
| `API_KEY_FORBIDDEN` | 403 | Besitzer des Schlüssels darf die App nicht nutzen |
| `SCOPE_MISSING` | 403 | dem Schlüssel fehlt das Recht für diesen Aufruf |
| `FORBIDDEN` | 403 | angemeldeter Nutzer ohne Berechtigung |
| `RATE_LIMITED` | 429 | zu viele Aufrufe, Wartezeit im Kopf `Retry-After` |
| `INVOICE_NOT_FOUND` | 404 | unbekannte ID |
| `INVOICE_NOT_COMMITTED` | 409 | Vorgang verlangt eine festgeschriebene Rechnung |
| `INVOICE_ALREADY_COMMITTED` | 409 | Vorgang verlangt einen Entwurf |
| `INVOICE_CANCELLED` | 409 | Vorgang auf einem stornierten Beleg |
| `INVOICE_STATE_INVALID` | 409 | Vorgang passt aus anderem Grund nicht zum Beleg |
| `VALIDATION_FAILED` | 400 | Pflichtangabe fehlt oder ist unplausibel |
| `NUMBER_FORMAT_INVALID` | 400 | Betrag oder Menge nicht lesbar |
| `PDF_GENERATION_FAILED` | 500 | Beleg ließ sich nicht erzeugen |
| `MAIL_SEND_FAILED` | 500 | Versand gescheitert |

Wiederholen lohnt bei Verbindungsfehlern, `429` und `5xx`. Bei `400`, `404` und `409` ändert eine Wiederholung
nichts.
