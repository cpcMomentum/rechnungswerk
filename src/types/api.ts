/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export interface ApiError {
	status: number
	message: string
}

/** UN/ECE Rec. 20 unit codes used in EN16931. Labels are translated at render time. */
export const UNIT_CODES = ['C62', 'HUR', 'DAY', 'MON', 'KGM', 'LS'] as const
export type UnitCode = typeof UNIT_CODES[number]

export const UNIT_CODE_LABELS: Record<UnitCode, string> = {
	C62: 'Stück',
	HUR: 'Stunde',
	DAY: 'Tag',
	MON: 'Monat',
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
export type InvoiceType = 'invoice' | 'cancellation'

export const INVOICE_STATUS_LABELS: Record<InvoiceStatus, string> = {
	draft: 'Entwurf',
	committed: 'Festgeschrieben',
	cancelled: 'Storniert',
}

export const INVOICE_TYPE_LABELS: Record<InvoiceType, string> = {
	invoice: 'Rechnung',
	cancellation: 'Storno',
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
	relatedInvoiceId: number | null
	/** Number of the original invoice a storno/credit note refers to. */
	relatedNumber: string | null
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
	datevStatus: string | null
	datevStatusAt: string | null
	committedAt: string | null
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
	fileNameFormat: string
	archiveEnabled: boolean
	archiveFolderId: number | null
	archiveSubfolder: string | null
	archiveFolderPath?: string | null
	smallBusiness: boolean
	defaultTaxRateBp: number
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
