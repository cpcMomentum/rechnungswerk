/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Settings } from '@/types/api'
import { apiDelete, apiGet, apiPost, apiPut, apiUrl } from './client'

export interface SmtpTestInput {
	host: string
	port: number
	security: string
	user: string
	password: string
}

/** Test an SMTP account; resolves on success, rejects with ApiError otherwise. */
export const testSmtp = (data: SmtpTestInput): Promise<{ ok: boolean }> =>
	apiPost<{ ok: boolean }, SmtpTestInput>('/smtp/test', data)

export type SettingsSave = Partial<Omit<Settings, 'id' | 'numberCounter' | 'numberCounterYear' | 'smtpPasswordSet'>>
	& { smtpPassword?: string }

export const getSettings = (): Promise<Settings> =>
	apiGet<Settings>('/settings')

export const saveSettings = (data: SettingsSave): Promise<Settings> =>
	apiPut<Settings, { data: SettingsSave }>('/settings', { data })

/** Set the company logo from a file path in the admin's Nextcloud files. */
export const setLogo = (path: string): Promise<{ logoFileId: number | null }> =>
	apiPut<{ logoFileId: number | null }, { path: string }>('/settings/logo', { path })

/** Remove the company logo. */
export const deleteLogo = (): Promise<{ logoFileId: number | null }> =>
	apiDelete<{ logoFileId: number | null }>('/settings/logo')

/**
 * Absolute URL of the company logo for use in <img src>. The cacheBuster
 * (the current file id) forces the browser to reload after the logo changes.
 */
export const logoUrl = (cacheBuster: number | string): string =>
	`${apiUrl('/settings/logo')}?v=${cacheBuster}`
