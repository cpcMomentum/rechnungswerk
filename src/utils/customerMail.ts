import type { InvoiceType } from '@/types/api'

// Deliberately German and outside t(): subject and body must match the German-only PDF, not the sender's UI language.
const SUBJECT_TITLE: Record<InvoiceType, string> = {
	invoice: 'Rechnung',
	quote: 'Angebot',
	cancellation: 'Stornorechnung',
}

const SUBJECT_WITHOUT_NUMBER: Record<InvoiceType, string> = {
	invoice: 'Ihre Rechnung',
	quote: 'Ihr Angebot',
	cancellation: 'Ihre Stornorechnung',
}

export function customerMailSubject(type: InvoiceType, number: string | null | undefined): string {
	const nr = (number ?? '').trim()
	return nr !== '' ? `${SUBJECT_TITLE[type]} ${nr}` : SUBJECT_WITHOUT_NUMBER[type]
}

export function customerMailFallbackBody(isQuote: boolean): string {
	return isQuote
		? 'anbei erhalten Sie unser Angebot als PDF.'
		: 'anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).'
}
