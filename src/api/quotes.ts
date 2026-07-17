/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Invoice, InvoiceDetail } from '@/types/api'
import type { InvoiceInput, InvoiceSendInput } from '@/api/invoices'
import { apiDelete, apiGet, apiPatch, apiPost, apiUrl } from './client'

// Quotes (#111) reuse the invoice header/positions shape, so the create/update
// payload is the same InvoiceInput (validUntil/offerFreeform are quote-only
// fields on it). Only the endpoints and the lifecycle actions differ.

export const listQuotes = (): Promise<Invoice[]> =>
	apiGet<Invoice[]>('/quotes')

export const getQuote = (id: number): Promise<InvoiceDetail> =>
	apiGet<InvoiceDetail>(`/quotes/${id}`)

export const createQuote = (data: InvoiceInput): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, { data: InvoiceInput }>('/quotes', { data })

export const updateQuote = (id: number, data: InvoiceInput): Promise<InvoiceDetail> =>
	apiPatch<InvoiceDetail, { data: InvoiceInput }>(`/quotes/${id}`, { data })

export const deleteQuote = (id: number): Promise<void> =>
	apiDelete(`/quotes/${id}`)

export const commitQuote = (id: number): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, Record<string, never>>(`/quotes/${id}/commit`, {})

export const acceptQuote = (id: number): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, Record<string, never>>(`/quotes/${id}/accept`, {})

export const rejectQuote = (id: number): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, Record<string, never>>(`/quotes/${id}/reject`, {})

/** Convert a committed quote into a fresh invoice draft (#111); returns that draft. */
export const convertQuote = (id: number): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, Record<string, never>>(`/quotes/${id}/convert`, {})

/** Same-origin URL of the quote PDF for a committed quote (session-authenticated). */
export const quotePdfUrl = (id: number): string =>
	apiUrl(`/quotes/${id}/pdf`)

/** Watermarked draft-preview URL; the cache-buster forces a re-fetch after edits. */
export const quotePreviewUrl = (id: number): string =>
	apiUrl(`/quotes/${id}/preview`) + '?t=' + Date.now()

/** Trigger a browser download of the quote PDF (transient <a download>). */
export const downloadQuotePdf = (id: number): void => {
	const a = document.createElement('a')
	a.href = quotePdfUrl(id)
	a.download = ''
	a.rel = 'noopener'
	a.style.display = 'none'
	document.body.appendChild(a)
	a.click()
	a.remove()
}

export const sendQuote = (id: number, data: InvoiceSendInput): Promise<{ sent: boolean }> =>
	apiPost<{ sent: boolean }, InvoiceSendInput>(`/quotes/${id}/send`, data)
