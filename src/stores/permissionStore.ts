/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getPermissionInfo, type PermissionInfo } from '@/api/permissions'

export const usePermissionStore = defineStore('permissions', () => {
	const info = ref<PermissionInfo | null>(null)
	const loaded = ref(false)

	async function fetch(): Promise<void> {
		try {
			info.value = await getPermissionInfo()
		} catch {
			info.value = { isAdmin: false, hasAccess: false, canEdit: false }
		} finally {
			loaded.value = true
		}
	}

	return { info, loaded, fetch }
})
