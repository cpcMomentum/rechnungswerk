/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Settings } from '@/types/api'
import { apiGet, apiPost, apiPut } from './client'

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
