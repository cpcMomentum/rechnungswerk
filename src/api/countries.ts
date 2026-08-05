/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Country } from '@/types/api'
import { apiGet } from './client'

/**
 * Die Liste ist konstant und wird pro Sitzung einmal geladen (#167).
 * Parallele Aufrufe teilen sich dieselbe Anfrage.
 */
let cached: Promise<Country[]> | null = null

export const listCountries = (): Promise<Country[]> => {
	if (cached === null) {
		cached = apiGet<Country[]>('/countries').catch((e) => {
			// Ein Fehlschlag darf nicht dauerhaft haengen bleiben.
			cached = null
			throw e
		})
	}
	return cached
}
