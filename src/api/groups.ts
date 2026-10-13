/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { apiGet } from './client'

export interface GroupOption {
	id: string
	displayName: string
}

interface GroupsResponse {
	groups: GroupOption[]
}

export const getGroups = async (): Promise<GroupOption[]> => {
	const response = await apiGet<GroupsResponse>('/groups')
	return response.groups
}
