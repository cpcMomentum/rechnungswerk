/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Settings } from '@/types/api'
import { apiGet, apiPut } from './client'

export type SettingsSave = Partial<Omit<Settings, 'id' | 'numberCounter' | 'numberCounterYear'>>

export const getSettings = (): Promise<Settings> =>
	apiGet<Settings>('/settings')

export const saveSettings = (data: SettingsSave): Promise<Settings> =>
	apiPut<Settings, { data: SettingsSave }>('/settings', { data })
