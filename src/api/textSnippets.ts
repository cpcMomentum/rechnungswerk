/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { SnippetDocType, SnippetSlot, TextSnippet } from '@/types/api'
import { apiDelete, apiGet, apiPatch, apiPost } from './client'

export interface TextSnippetCreate {
	label: string
	docType: SnippetDocType
	slot: SnippetSlot
	content?: string | null
	isDefault?: boolean
	sortOrder?: number
}

export type TextSnippetUpdate = Partial<TextSnippetCreate>

export const listTextSnippets = (): Promise<TextSnippet[]> =>
	apiGet<TextSnippet[]>('/text-snippets')

export const createTextSnippet = (data: TextSnippetCreate): Promise<TextSnippet> =>
	apiPost<TextSnippet, { data: TextSnippetCreate }>('/text-snippets', { data })

export const updateTextSnippet = (id: number, data: TextSnippetUpdate): Promise<TextSnippet> =>
	apiPatch<TextSnippet, { data: TextSnippetUpdate }>(`/text-snippets/${id}`, { data })

export const deleteTextSnippet = (id: number): Promise<void> =>
	apiDelete(`/text-snippets/${id}`)
