/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { apiDelete, apiGet, apiPost, apiPut } from './client'

export type LicenseState = 'none' | 'invalid' | 'valid' | 'grace' | 'expired'

export interface LicenseStatus {
	instanceUuid: string
	keySet: boolean
	keyHint: string | null
	employeeBucket: string
	state: LicenseState
	tier: 'free' | 'werkplus'
	features: string[]
	expiresAt: string | null
	graceUntil: string | null
	lastCheckAt: string | null
	lastError: { code: string, message: string, at: string | null } | null
}

export const EMPLOYEE_BUCKETS = ['1-5', '6-20', '21-50', '51-200', '200+'] as const

export const getLicense = (): Promise<LicenseStatus> =>
	apiGet<LicenseStatus>('/license')

export const activateLicense = (key: string, employeeBucket: string): Promise<LicenseStatus> =>
	apiPut<LicenseStatus, { key: string, employeeBucket: string }>('/license', { key, employeeBucket })

export const refreshLicense = (): Promise<LicenseStatus> =>
	apiPost<LicenseStatus>('/license/refresh', {})

export const removeLicense = (): Promise<LicenseStatus> =>
	apiDelete<LicenseStatus>('/license')
