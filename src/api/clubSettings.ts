/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { apiGet, apiPut } from './client'

export interface ClubSettings {
	clubMode: boolean
	memberGroup: string | null
	profileFieldsAvailable: boolean
}

export const getClubSettings = (): Promise<ClubSettings> =>
	apiGet<ClubSettings>('/club-settings')

export const saveClubSettings = (
	data: Pick<ClubSettings, 'clubMode' | 'memberGroup'>,
): Promise<ClubSettings> =>
	apiPut<ClubSettings, typeof data>('/club-settings', data)
