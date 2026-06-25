/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { apiGet, apiPut } from './client'

export interface PermissionInfo {
	isAdmin: boolean
	hasAccess: boolean
	canEdit: boolean
}

/** A user/group entry as returned by the principal search. */
export interface Principal {
	id: string // "user:<uid>" | "group:<gid>"
	type: 'user' | 'group'
	displayName: string
}

export interface Permissions {
	admins: string[]
	users: string[]
}

export const getPermissionInfo = (): Promise<PermissionInfo> =>
	apiGet<PermissionInfo>('/permission-info')

export const getPermissions = (): Promise<Permissions> =>
	apiGet<Permissions>('/permissions')

export const updatePermissions = (data: { admins?: string[], users?: string[] }): Promise<Permissions> =>
	apiPut<Permissions, { admins?: string[], users?: string[] }>('/permissions', data)

export const searchPrincipals = (query: string): Promise<Principal[]> =>
	apiGet<Principal[]>(`/principals/search?query=${encodeURIComponent(query)}`)
