/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { apiGet } from './client'

export interface AuditEntry {
	id: number
	createdAt: number
	action: string
	documentId: number
	documentType: 'invoice' | 'cancellation' | 'quote'
	documentNumber: string | null
	documentExists: boolean
	userId: string | null
	userDisplayName: string | null
	apiKeyId: number | null
	apiKeyName: string | null
}

export const getDocumentAudit = (documentId: number): Promise<AuditEntry[]> =>
	apiGet<AuditEntry[]>(`/audit/documents/${documentId}`)

export const getAudit = (number: string, limit: number, offset: number): Promise<AuditEntry[]> =>
	apiGet<AuditEntry[]>(`/audit?number=${encodeURIComponent(number)}&limit=${limit}&offset=${offset}`)
