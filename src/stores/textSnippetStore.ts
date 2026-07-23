/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { SnippetDocType, SnippetSlot, TextSnippet } from '@/types/api'
import {
	createTextSnippet as apiCreate,
	deleteTextSnippet as apiDelete,
	listTextSnippets as apiList,
	updateTextSnippet as apiUpdate,
	type TextSnippetCreate,
	type TextSnippetUpdate,
} from '@/api/textSnippets'

/** Stable sort: doc type, then slot, then sort order, then label. */
function sortSnippets(list: TextSnippet[]): void {
	list.sort((a, b) =>
		a.docType.localeCompare(b.docType)
		|| a.slot.localeCompare(b.slot)
		|| a.sortOrder - b.sortOrder
		|| a.label.localeCompare(b.label),
	)
}

export const useTextSnippetStore = defineStore('textSnippet', () => {
	const snippets = ref<TextSnippet[]>([])
	const loading = ref(false)
	const loaded = ref(false)

	async function fetchAll(): Promise<void> {
		loading.value = true
		try {
			snippets.value = await apiList()
			loaded.value = true
		} finally {
			loading.value = false
		}
	}

	/** Load once; used by consumers (e.g. the editor) that only need the data. */
	async function ensureLoaded(): Promise<void> {
		if (!loaded.value && !loading.value) {
			await fetchAll()
		}
	}

	/** At most one default per (docType, slot): drop the flag on the others locally. */
	function enforceSingleDefault(kept: TextSnippet): void {
		if (!kept.isDefault) {
			return
		}
		for (const s of snippets.value) {
			if (s.id !== kept.id && s.docType === kept.docType && s.slot === kept.slot) {
				s.isDefault = false
			}
		}
	}

	async function create(data: TextSnippetCreate): Promise<TextSnippet> {
		const snippet = await apiCreate(data)
		snippets.value.push(snippet)
		enforceSingleDefault(snippet)
		sortSnippets(snippets.value)
		return snippet
	}

	async function update(id: number, data: TextSnippetUpdate): Promise<TextSnippet> {
		const updated = await apiUpdate(id, data)
		const index = snippets.value.findIndex(s => s.id === id)
		if (index >= 0) {
			snippets.value[index] = updated
		}
		enforceSingleDefault(updated)
		sortSnippets(snippets.value)
		return updated
	}

	async function remove(id: number): Promise<void> {
		const index = snippets.value.findIndex(s => s.id === id)
		const previous = index >= 0 ? snippets.value[index] : null
		if (index >= 0) {
			snippets.value.splice(index, 1)
		}
		try {
			await apiDelete(id)
		} catch (e) {
			if (previous && index >= 0) {
				snippets.value.splice(index, 0, previous)
			}
			throw e
		}
	}

	/** Snippets for a document type + slot, defaults first. */
	function forSlot(docType: SnippetDocType, slot: SnippetSlot): TextSnippet[] {
		return snippets.value
			.filter(s => s.docType === docType && s.slot === slot)
			.sort((a, b) => Number(b.isDefault) - Number(a.isDefault) || a.sortOrder - b.sortOrder || a.label.localeCompare(b.label))
	}

	/** The default snippet content for a document type + slot, or '' if none. */
	function defaultContent(docType: SnippetDocType, slot: SnippetSlot): string {
		const def = snippets.value.find(s => s.docType === docType && s.slot === slot && s.isDefault)
		return def?.content ?? ''
	}

	return { snippets, loading, loaded, fetchAll, ensureLoaded, create, update, remove, forSlot, defaultContent }
})
