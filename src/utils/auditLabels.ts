/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { getCanonicalLocale, translate as t } from '@nextcloud/l10n'
import type { AuditEntry } from '@/api/audit'

export function auditActionLabel(action: string): string {
	switch (action) {
	case 'create': return t('rechnungswerk', 'Angelegt')
	case 'update': return t('rechnungswerk', 'Geändert')
	case 'delete': return t('rechnungswerk', 'Gelöscht')
	case 'commit': return t('rechnungswerk', 'Festgeschrieben')
	case 'send': return t('rechnungswerk', 'Versendet')
	case 'pay': return t('rechnungswerk', 'Als bezahlt markiert')
	case 'unpay': return t('rechnungswerk', 'Als unbezahlt markiert')
	case 'cancel': return t('rechnungswerk', 'Storniert')
	case 'cancel_document': return t('rechnungswerk', 'Als Storno angelegt')
	case 'duplicate': return t('rechnungswerk', 'Als Kopie angelegt')
	case 'revise': return t('rechnungswerk', 'Als Überarbeitung angelegt')
	case 'accept': return t('rechnungswerk', 'Als angenommen markiert')
	case 'reject': return t('rechnungswerk', 'Als abgelehnt markiert')
	case 'convert': return t('rechnungswerk', 'In Rechnung übernommen')
	case 'convert_document': return t('rechnungswerk', 'Aus Angebot angelegt')
	case 'supersede': return t('rechnungswerk', 'Durch Überarbeitung ersetzt')
	default: return action
	}
}

export function auditActor(entry: AuditEntry): string {
	const person = entry.userDisplayName ?? t('rechnungswerk', 'System')
	if (entry.apiKeyId === null) {
		return person
	}
	const key = entry.apiKeyName ?? `#${entry.apiKeyId}`
	// Vue escapes on render; escaping here as well would show names like "R&D" as "R&amp;D".
	return t('rechnungswerk', '{person} über API-Schlüssel „{key}“', { person, key }, undefined, { escape: false })
}

export function auditDocumentLabel(entry: AuditEntry): string {
	if (entry.documentNumber) {
		return entry.documentNumber
	}
	return entry.documentType === 'quote'
		? t('rechnungswerk', 'Angebotsentwurf {id}', { id: entry.documentId })
		: t('rechnungswerk', 'Rechnungsentwurf {id}', { id: entry.documentId })
}

export function auditTime(unix: number): string {
	return new Date(unix * 1000).toLocaleString(getCanonicalLocale(), { dateStyle: 'short', timeStyle: 'short' })
}
