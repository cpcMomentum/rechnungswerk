/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Invoice, InvoiceDetail } from '@/types/api'
import { apiDelete, apiGet, apiPatch, apiPost } from './client'

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
