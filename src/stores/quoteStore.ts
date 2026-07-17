/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Invoice, InvoiceDetail } from '@/types/api'
import type { InvoiceInput } from '@/api/invoices'
import {
	acceptQuote as apiAccept,
	commitQuote as apiCommit,
	convertQuote as apiConvert,
	createQuote as apiCreate,
	deleteQuote as apiDelete,
	getQuote as apiGet,
	listQuotes as apiList,
	rejectQuote as apiReject,
	reviseQuote as apiRevise,
	updateQuote as apiUpdate,
} from '@/api/quotes'

/**
 * Quotes (#111) store. Mirrors the invoice store's shape (fetchAll/get/create/
 * update/remove/commit) so the shared editor can talk to either through the same
 * interface, plus the quote-only lifecycle actions accept/reject/convert.
 */
export const useQuoteStore = defineStore('quote', () => {
	const quotes = ref<Invoice[]>([])
	const loading = ref(false)

	async function fetchAll(): Promise<void> {
		loading.value = true
		try {
			quotes.value = await apiList()
		} finally {
			loading.value = false
		}
	}

	const get = (id: number): Promise<InvoiceDetail> => apiGet(id)

	async function create(data: InvoiceInput): Promise<InvoiceDetail> {
		const created = await apiCreate(data)
		await fetchAll()
		return created
	}

	async function update(id: number, data: InvoiceInput): Promise<InvoiceDetail> {
		const updated = await apiUpdate(id, data)
		await fetchAll()
		return updated
	}

	async function remove(id: number): Promise<void> {
		await apiDelete(id)
		quotes.value = quotes.value.filter(q => q.id !== id)
	}

	async function commit(id: number): Promise<InvoiceDetail> {
		const committed = await apiCommit(id)
		await fetchAll()
		return committed
	}

	async function accept(id: number): Promise<InvoiceDetail> {
		const updated = await apiAccept(id)
		await fetchAll()
		return updated
	}

	async function reject(id: number): Promise<InvoiceDetail> {
		const updated = await apiReject(id)
		await fetchAll()
		return updated
	}

	async function convert(id: number): Promise<InvoiceDetail> {
		const invoice = await apiConvert(id)
		await fetchAll()
		return invoice
	}

	async function revise(id: number): Promise<InvoiceDetail> {
		const draft = await apiRevise(id)
		await fetchAll()
		return draft
	}

	return { quotes, loading, fetchAll, get, create, update, remove, commit, accept, reject, convert, revise }
})
