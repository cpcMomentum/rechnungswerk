/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Invoice, InvoiceDetail } from '@/types/api'
import {
	cancelInvoice as apiCancel,
	commitInvoice as apiCommit,
	createInvoice as apiCreate,
	deleteInvoice as apiDelete,
	getInvoice as apiGet,
	listInvoices as apiList,
	updateInvoice as apiUpdate,
	type InvoiceInput,
} from '@/api/invoices'

export const useInvoiceStore = defineStore('invoice', () => {
	const invoices = ref<Invoice[]>([])
	const loading = ref(false)

	async function fetchAll(): Promise<void> {
		loading.value = true
		try {
			invoices.value = await apiList()
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
		invoices.value = invoices.value.filter(i => i.id !== id)
	}

	async function commit(id: number): Promise<InvoiceDetail> {
		const committed = await apiCommit(id)
		await fetchAll()
		return committed
	}

	async function cancel(id: number): Promise<InvoiceDetail> {
		const storno = await apiCancel(id)
		await fetchAll()
		return storno
	}

	return { invoices, loading, fetchAll, get, create, update, remove, commit, cancel }
})
