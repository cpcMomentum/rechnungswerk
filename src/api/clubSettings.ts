/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { apiGet, apiPut } from './client'

export interface ClubSettings {
	clubMode: boolean
	memberGroup: string | null
}

export const getClubSettings = (): Promise<ClubSettings> =>
	apiGet<ClubSettings>('/club-settings')

export const saveClubSettings = (
	data: ClubSettings,
): Promise<ClubSettings> =>
	apiPut<ClubSettings, ClubSettings>('/club-settings', data)
