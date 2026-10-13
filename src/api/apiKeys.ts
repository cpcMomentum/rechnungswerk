/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { apiDelete, apiGet, apiPost } from './client'

export interface ApiKey {
	id: number
	ownerId: string
	name: string
	keyPrefix: string
	scopes: string[]
	createdAt: number
	lastUsedAt: number | null
	revokedAt: number | null
}

/** Nur direkt nach dem Anlegen: der Klartext ist danach nie wieder sichtbar. */
export interface CreatedApiKey extends ApiKey {
	plaintext: string
}

export const getApiKeys = (): Promise<ApiKey[]> =>
	apiGet<ApiKey[]>('/api-keys')

export const createApiKey = (name: string, scopes: string[]): Promise<CreatedApiKey> =>
	apiPost<CreatedApiKey, { name: string, scopes: string[] }>('/api-keys', { name, scopes })

export const revokeApiKey = (id: number): Promise<void> =>
	apiDelete<void>(`/api-keys/${id}`)
