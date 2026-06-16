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
