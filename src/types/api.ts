/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export interface ApiError {
	status: number
	message: string
}

/** UN/ECE Rec. 20 unit codes used in EN16931. Labels are translated at render time. */
export const UNIT_CODES = ['C62', 'HUR', 'DAY', 'KGM', 'LS'] as const
export type UnitCode = typeof UNIT_CODES[number]

export const UNIT_CODE_LABELS: Record<UnitCode, string> = {
	C62: 'Stück',
	HUR: 'Stunde',
	DAY: 'Tag',
	KGM: 'kg',
	LS: 'Pauschal',
}

/** Tax rates in basis points (19 % = 1900). */
export const TAX_RATES_BP = [1900, 700, 0] as const

export interface Product {
	id: number
	name: string
	description: string | null
	defaultUnitCode: UnitCode
	defaultPriceCents: number
	defaultTaxRateBp: number
	createdAt: string | null
	updatedAt: string | null
}

export type InvoiceStatus = 'draft' | 'committed' | 'cancelled'
export type InvoiceType = 'invoice' | 'cancellation' | 'credit_note'

export const INVOICE_STATUS_LABELS: Record<InvoiceStatus, string> = {
	draft: 'Entwurf',
	committed: 'Festgeschrieben',
	cancelled: 'Storniert',
}

export const INVOICE_TYPE_LABELS: Record<InvoiceType, string> = {
	invoice: 'Rechnung',
	cancellation: 'Storno',
	credit_note: 'Gutschrift',
}

export interface TaxBreakdownRow {
	rateBp: number
	netCents: number
	taxCents: number
}

export interface CustomField {
	label: string
	value: string
}

export interface InvoiceItem {
	id: number
	invoiceId: number
	productId: number | null
	name: string
	description: string | null
	quantity: string
	unitCode: UnitCode
	unitPriceCents: number
	taxRateBp: number
	lineTotalCents: number
	sortOrder: number
}

export interface Invoice {
	id: number
	number: string | null
	status: InvoiceStatus
	invoiceType: InvoiceType
	recipientName: string | null
	recipientContactId: string | null
	recipientAddress: string | null
	recipientPostalCode: string | null
	recipientCity: string | null
	recipientCountry: string | null
	recipientEmail: string | null
	recipientVatId: string | null
	issueDate: string | null
	performanceDate: string | null
	performancePeriodStart: string | null
	performancePeriodEnd: string | null
	referenceNumber: string | null
	orderNumber: string | null
	buyerReference: string | null
	relatedInvoiceId: number | null
	subtotalCents: number
	totalCents: number
	taxBreakdown: TaxBreakdownRow[]
	specialTaxCase: string | null
	greeting: string | null
	extraText: string | null
	customFields: CustomField[]
	paymentTermDays: number | null
	dueDate: string | null
	discountTerms: string | null
	committedAt: string | null
	createdAt: string | null
	updatedAt: string | null
}

/** Detail response from GET /invoices/{id}: header fields plus line items. */
export interface InvoiceDetail extends Invoice {
	items: InvoiceItem[]
}

export interface ContactMatch {
	name: string
	email: string
	address: string
	postalCode: string
	city: string
	country: string
}

export interface Settings {
	id: number
	companyName: string | null
	companyAddress: string | null
	vatId: string | null
	taxNumber: string | null
	iban: string | null
	bic: string | null
	bankName: string | null
	logoFileId: number | null
	accentColor: string | null
	numberFormat: string
	numberCounter: number
	numberCounterYear: number | null
	smallBusiness: boolean
	defaultTaxRateBp: number
	datevUploadMail: string | null
	smtpFromName: string | null
	smtpFromEmail: string | null
	greetingDefault: string | null
	introDefault: string | null
	closingDefault: string | null
}
