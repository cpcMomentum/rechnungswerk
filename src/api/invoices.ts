/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Invoice, InvoiceDetail } from '@/types/api'
import { apiDelete, apiGet, apiPatch, apiPost, apiUrl } from './client'

export interface InvoiceItemInput {
	productId?: number | null
	name: string
	description?: string | null
	quantity: string
	unitCode: string
	unitPriceCents: number
	taxRateBp: number
}

export interface InvoiceInput {
	recipientName?: string | null
	recipientContactId?: string | null
	recipientAddress?: string | null
	recipientPostalCode?: string | null
	recipientCity?: string | null
	recipientCountry?: string | null
	recipientEmail?: string | null
	recipientVatId?: string | null
	performanceDate?: string | null
	performancePeriodStart?: string | null
	performancePeriodEnd?: string | null
	referenceNumber?: string | null
	orderNumber?: string | null
	buyerReference?: string | null
	specialTaxCase?: string | null
	greeting?: string | null
	extraText?: string | null
	customFields?: Array<{ label: string, value: string }>
	paymentTermDays?: number | null
	discountTerms?: string | null
	items?: InvoiceItemInput[]
}

export const listInvoices = (): Promise<Invoice[]> =>
	apiGet<Invoice[]>('/invoices')

export const getInvoice = (id: number): Promise<InvoiceDetail> =>
	apiGet<InvoiceDetail>(`/invoices/${id}`)

export const createInvoice = (data: InvoiceInput): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, { data: InvoiceInput }>('/invoices', { data })

export const updateInvoice = (id: number, data: InvoiceInput): Promise<InvoiceDetail> =>
	apiPatch<InvoiceDetail, { data: InvoiceInput }>(`/invoices/${id}`, { data })

export const deleteInvoice = (id: number): Promise<void> =>
	apiDelete(`/invoices/${id}`)

export const commitInvoice = (id: number): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, Record<string, never>>(`/invoices/${id}/commit`, {})

export const cancelInvoice = (id: number): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, Record<string, never>>(`/invoices/${id}/cancel`, {})

/** Same-origin URL of the ZUGFeRD PDF for a committed invoice (session-authenticated). */
export const invoicePdfUrl = (id: number): string =>
	apiUrl(`/invoices/${id}/pdf`)

/**
 * Trigger a browser download of the invoice PDF. Uses a transient anchor with
 * the `download` attribute rather than window.open() — the latter flickers a
 * blank tab and is throttled by popup blockers; the anchor lets the server's
 * `Content-Disposition: attachment` save the file in place.
 */
export const downloadInvoicePdf = (id: number): void => {
	const a = document.createElement('a')
	a.href = invoicePdfUrl(id)
	a.download = ''
	a.rel = 'noopener'
	a.style.display = 'none'
	document.body.appendChild(a)
	a.click()
	a.remove()
}

export interface InvoiceSendInput {
	to: string
	subject: string
	body: string
}

export const sendInvoice = (id: number, data: InvoiceSendInput): Promise<{ sent: boolean }> =>
	apiPost<{ sent: boolean }, InvoiceSendInput>(`/invoices/${id}/send`, data)
