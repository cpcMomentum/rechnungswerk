/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { apiGet } from './client'

export interface ClubStatus {
	clubMode: boolean
}

export const getClubStatus = (): Promise<ClubStatus> =>
	apiGet<ClubStatus>('/club-status')
