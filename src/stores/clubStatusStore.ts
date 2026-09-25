/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getClubStatus } from '@/api/clubStatus'

export const useClubStatusStore = defineStore('clubStatus', () => {
	const clubMode = ref(false)
	const loaded = ref(false)

	async function fetch(): Promise<void> {
		try {
			const status = await getClubStatus()
			clubMode.value = status.clubMode
		} catch {
			clubMode.value = false
		} finally {
			loaded.value = true
		}
	}

	function setClubMode(value: boolean): void {
		clubMode.value = value
		loaded.value = true
	}

	return {
		clubMode,
		loaded,
		fetch,
		setClubMode,
	}
})
