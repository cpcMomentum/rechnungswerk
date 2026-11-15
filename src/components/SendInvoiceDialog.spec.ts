/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SendInvoiceDialog from '@/components/SendInvoiceDialog.vue'
import { customerMailFallbackBody, customerMailSubject } from '@/utils/customerMail'
import type { InvoiceDetail, InvoiceType } from '@/types/api'

// Simulates a user with an English UI: every t() call comes back translated.
vi.mock('@nextcloud/l10n', () => ({
	translate: (_app: string, text: string, vars?: Record<string, string>) => {
		const en: Record<string, string> = {
			'Rechnung {number}': 'Invoice {number}',
			'Angebot {number}': 'Quote {number}',
			'Ihre Rechnung': 'Your invoice',
			'Ihr Angebot': 'Your quote',
		}
		let out = en[text] ?? `EN:${text}`
		for (const [k, v] of Object.entries(vars ?? {})) {
			out = out.replace(`{${k}}`, v)
		}
		return out
	},
}))

vi.mock('@nextcloud/vue/components/NcModal', () => ({
	default: { name: 'NcModal', template: '<div><slot /></div>' },
}))
vi.mock('@nextcloud/vue/components/NcButton', () => ({
	default: { name: 'NcButton', emits: ['click'], template: '<button @click="$emit(\'click\')"><slot /></button>' },
}))

function beleg(invoiceType: InvoiceType, number: string | null): InvoiceDetail {
	return { invoiceType, number, recipientEmail: 'kunde@example.org' } as unknown as InvoiceDetail
}

function subjectFor(invoice: InvoiceDetail | null, kind?: 'invoice' | 'quote'): string {
	const w = mount(SendInvoiceDialog, { props: { open: true, invoice, defaultBody: 'x', kind } })
	return (w.findAll('input')[1].element as HTMLInputElement).value
}

describe('SendInvoiceDialog: Betreff unabhängig von der Oberflächensprache', () => {
	it.each([
		['invoice', 'RE-2026-0012', 'Rechnung RE-2026-0012'],
		['quote', 'AN-2026-0003', 'Angebot AN-2026-0003'],
		['cancellation', 'RE-2026-0013', 'Stornorechnung RE-2026-0013'],
	] as const)('%s mit Nummer → deutscher Betreff', (type, nr, expected) => {
		expect(subjectFor(beleg(type, nr), type === 'quote' ? 'quote' : 'invoice')).toBe(expected)
	})

	it('ohne Nummer → deutsche Anrede', () => {
		expect(subjectFor(beleg('invoice', null))).toBe('Ihre Rechnung')
		expect(subjectFor(beleg('quote', null), 'quote')).toBe('Ihr Angebot')
	})

	it('ohne Beleg richtet sich der Betreff nach kind', () => {
		expect(subjectFor(null, 'quote')).toBe('Ihr Angebot')
		expect(subjectFor(null)).toBe('Ihre Rechnung')
	})
})

describe('customerMail', () => {
	it('leere oder fehlende Nummer zählt als keine Nummer', () => {
		expect(customerMailSubject('cancellation', '  ')).toBe('Ihre Stornorechnung')
		expect(customerMailSubject('invoice', undefined)).toBe('Ihre Rechnung')
	})

	it('Ersatztext ist fest deutsch', () => {
		expect(customerMailFallbackBody(true)).toBe('anbei erhalten Sie unser Angebot als PDF.')
		expect(customerMailFallbackBody(false)).toBe('anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).')
	})
})
