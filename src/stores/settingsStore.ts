/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Settings } from '@/types/api'
import { getSettings as apiGet, saveSettings as apiSave, type SettingsSave } from '@/api/settings'

export const useSettingsStore = defineStore('settings', () => {
	const settings = ref<Settings | null>(null)
	const loading = ref(false)
	const saving = ref(false)

	async function fetch(): Promise<void> {
		loading.value = true
		try {
			settings.value = await apiGet()
		} finally {
			loading.value = false
		}
	}

	async function save(data: SettingsSave): Promise<Settings> {
		saving.value = true
		try {
			settings.value = await apiSave(data)
			return settings.value
		} finally {
			saving.value = false
		}
	}

	return { settings, loading, saving, fetch, save }
})
