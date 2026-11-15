/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { apiGet } from './client'

export interface ClubStatus {
	clubMode: boolean
	memberGroup: string | null
	membershipTypes?: string[]
	membershipTypesError?: string
}

export const getClubStatus = (includeMembershipTypes = false): Promise<ClubStatus> =>
	apiGet<ClubStatus>(includeMembershipTypes ? '/club-status?includeMembershipTypes=1' : '/club-status')
