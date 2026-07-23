/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export interface ApiError {
	status: number
	message: string
}

/** UN/ECE Rec. 20 unit codes used in EN16931. Labels are translated at render time. */
export const UNIT_CODES = ['C62', 'HUR', 'DAY', 'MON', 'KGM', 'LS', 'KWH', 'LTR', 'MTR', 'KMT', 'MTK', 'GRM', 'TNE'] as const
export type UnitCode = typeof UNIT_CODES[number]

export const UNIT_CODE_LABELS: Record<UnitCode, string> = {
	C62: 'Stück',
	HUR: 'Stunde',
	DAY: 'Tag',
	MON: 'Monat',
	KGM: 'kg',
	LS: 'Pauschal',
	KWH: 'kWh',
	LTR: 'Liter',
	MTR: 'Meter',
	KMT: 'Kilometer',
	MTK: 'm²',
	GRM: 'Gramm',
	TNE: 'Tonne',
}

/** Tax rates in basis points (19 % = 1900). */
export const TAX_RATES_BP = [1900, 700, 0] as const

export interface Product {
	id: number
	name: string
	description: string | null
	defaultUnitCode: UnitCode
	/** Optional free-text unit name; XML uses C62 when set (#153). */
	defaultUnitLabel: string | null
	/** Default unit net price in ten-thousandths of a euro (1/10000 €, 4 decimals, #147). */
	defaultPriceE4: number
	defaultTaxRateBp: number
	createdAt: string | null
	updatedAt: string | null
}

/** Default §19 UStG hint; mirrors ZugferdService::SMALL_BUSINESS_NOTE_DEFAULT (#141). */
export const SMALL_BUSINESS_NOTE_DEFAULT = 'Gem. § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.'

/** Text snippet catalog (#126/#141): reusable opening / closing texts per doc type. */
export type SnippetDocType = 'invoice' | 'quote'
export type SnippetSlot = 'opening' | 'closing'

export const SNIPPET_DOC_TYPE_LABELS: Record<SnippetDocType, string> = {
	invoice: 'Rechnung',
	quote: 'Angebot',
}
export const SNIPPET_SLOT_LABELS: Record<SnippetSlot, string> = {
	opening: 'Anrede & Einleitung',
	closing: 'Schlusstext',
}

export interface TextSnippet {
	id: number
	docType: SnippetDocType
	slot: SnippetSlot
	label: string
	content: string | null
	isDefault: boolean
	sortOrder: number
	createdAt: string | null
	updatedAt: string | null
}

export interface Customer {
	id: number
	customerNumber: string
	name: string
	vatId: string | null
	address: string | null
	postalCode: string | null
	city: string | null
	country: string | null
	contactPerson: string | null
	phone: string | null
	email: string | null
	bankAccountHolder: string | null
	iban: string | null
	bic: string | null
	bankName: string | null
	defaultPaymentTermDays: number | null
	defaultTaxRateBp: number | null
	note: string | null
	createdAt: string | null
	updatedAt: string | null
}

export type InvoiceStatus = 'draft' | 'committed' | 'cancelled'
export type InvoiceType = 'invoice' | 'cancellation' | 'quote'
/** Derived payment status (#117); null for drafts and cancellation documents. */
export type PaymentStatus = 'unpaid' | 'overdue' | 'paid'
/** Derived quote status (#111); null for non-quote documents. */
export type QuoteStatus = 'draft' | 'open' | 'expired' | 'accepted' | 'rejected' | 'converted' | 'superseded'

export const INVOICE_STATUS_LABELS: Record<InvoiceStatus, string> = {
	draft: 'Entwurf',
	committed: 'Festgeschrieben',
	cancelled: 'Storniert',
}

export const INVOICE_TYPE_LABELS: Record<InvoiceType, string> = {
	invoice: 'Rechnung',
	cancellation: 'Storno',
	quote: 'Angebot',
}

export const QUOTE_STATUS_LABELS: Record<QuoteStatus, string> = {
	draft: 'Entwurf',
	open: 'Offen',
	expired: 'Abgelaufen',
	accepted: 'Angenommen',
	rejected: 'Abgelehnt',
	converted: 'Übernommen',
	superseded: 'Revidiert',
}

export interface TaxBreakdownRow {
	rateBp: number
	netCents: number
	taxCents: number
}

export interface InvoiceItem {
	id: number
	invoiceId: number
	productId: number | null
	name: string
	description: string | null
	quantity: string
	unitCode: UnitCode
	/** Optional free-text unit name; XML uses C62 when set (#153). */
	unitLabel: string | null
	/** Unit net price in ten-thousandths of a euro (1/10000 €, 4 decimals, #147). */
	unitPriceE4: number
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
	customerId: number | null
	recipientAddress: string | null
	recipientPostalCode: string | null
	recipientCity: string | null
	recipientCountry: string | null
	recipientEmail: string | null
	recipientVatId: string | null
	recipientContactPerson: string | null
	recipientPhone: string | null
	sellerContactPerson: string | null
	sellerContactPhone: string | null
	sellerContactEmail: string | null
	issueDate: string | null
	performanceDate: string | null
	performancePeriodStart: string | null
	performancePeriodEnd: string | null
	referenceNumber: string | null
	orderNumber: string | null
	buyerReference: string | null
	contractNumber: string | null
	projectReference: string | null
	relatedInvoiceId: number | null
	/** Number of the original invoice a storno/credit note refers to. */
	relatedNumber: string | null
	subtotalCents: number
	totalCents: number
	taxBreakdown: TaxBreakdownRow[]
	specialTaxCase: string | null
	greeting: string | null
	extraText: string | null
	/** Plain-text notes shown on the invoice and exported as BT-22. */
	notes: string[]
	paymentTermDays: number | null
	dueDate: string | null
	discountTerms: string | null
	datevStatus: string | null
	datevStatusAt: string | null
	committedAt: string | null
	/** Payment date (#117); set = paid, null = open. */
	paidAt: string | null
	/** Derived payment status; null for drafts and cancellation documents. */
	paymentStatus: PaymentStatus | null
	/** Quote validity date ("gültig bis", #111); quotes only. */
	validUntil: string | null
	/** Freibleibend/unverbindlich flag (§145 BGB, #111); quotes only. */
	offerFreeform: boolean
	/** Link from a converted invoice or a revision back to its source quote (#111). */
	relatedQuoteId: number | null
	/** Number of the source quote (revision source / convert source); detail responses only. */
	relatedQuoteNumber?: string | null
	/** Derived quote status (#111); null for non-quote documents. */
	quoteStatus: QuoteStatus | null
	createdAt: string | null
	updatedAt: string | null
}

/** Detail response from GET /invoices/{id}: header fields plus line items. */
export interface InvoiceDetail extends Invoice {
	items: InvoiceItem[]
}

/** Seller-contact defaults for the current user (from their Nextcloud account). */
export interface MeContactDefaults {
	person: string
	phone: string
	email: string
}

export interface ContactMatch {
	name: string
	email: string
	phone: string
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
	contactPerson: string | null
	contactPhone: string | null
	contactEmail: string | null
	logoFileId: number | null
	accentColor: string | null
	numberFormat: string
	numberCounter: number
	numberCounterYear: number | null
	numberResetMode: 'yearly' | 'continuous'
	/** Independent quote number circle (#111). */
	quoteNumberFormat: string
	quoteNumberCounter: number
	quoteNumberCounterYear: number | null
	quoteNumberResetMode: 'yearly' | 'continuous'
	fileNameFormat: string
	archiveEnabled: boolean
	archiveFolderId: number | null
	archiveSubfolder: string | null
	archiveFolderPath?: string | null
	girocodeEnabled: boolean
	smallBusiness: boolean
	/** Configurable §19 UStG hint printed on invoices; null = use default wording (#141). */
	smallBusinessNote: string | null
	defaultTaxRateBp: number
	/** Global default payment term in days, pre-fills new invoices (#117). */
	defaultPaymentTermDays: number | null
	datevUploadMail: string | null
	datevAutoSend: boolean
	smtpFromName: string | null
	smtpFromEmail: string | null
	smtpHost: string | null
	smtpPort: number | null
	smtpSecurity: string
	smtpUser: string | null
	smtpPasswordSet: boolean
	imapHost: string | null
	imapPort: number | null
	imapSecurity: string
	imapUser: string | null
	imapPasswordSet: boolean
	imapCleanup: boolean
	greetingDefault: string | null
	introDefault: string | null
	closingDefault: string | null
}
