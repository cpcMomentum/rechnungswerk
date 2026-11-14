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
	state: LicenseState
	tier: 'free' | 'werkplus'
	features: string[]
	licensedEmployees: number | null
	expiresAt: string | null
	graceUntil: string | null
	lastCheckAt: string | null
	lastError: { code: string, message: string, at: string | null } | null
}

export const getLicense = (): Promise<LicenseStatus> =>
	apiGet<LicenseStatus>('/license')

export const activateLicense = (key: string): Promise<LicenseStatus> =>
	apiPut<LicenseStatus, { key: string }>('/license', { key })

export const startTrial = (): Promise<{ key: string, status: LicenseStatus }> =>
	apiPost<{ key: string, status: LicenseStatus }>('/license/trial', {})

export const refreshLicense = (): Promise<LicenseStatus> =>
	apiPost<LicenseStatus>('/license/refresh', {})

export const removeLicense = (): Promise<LicenseStatus> =>
	apiDelete<LicenseStatus>('/license')
