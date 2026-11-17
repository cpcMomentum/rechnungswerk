/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi } from 'vitest'

const apiGet = vi.fn()
const apiPost = vi.fn()

vi.mock('./client', () => ({
	apiGet: (...a: unknown[]) => apiGet(...a),
	apiPost: (...a: unknown[]) => apiPost(...a),
}))

import { getWhatsNew, getWhatsNewArchive, markWhatsNewSeen } from './whatsnew'

describe('Neuerungen-API', () => {
	it('ruft je Aktion den passenden Endpunkt auf', async () => {
		await getWhatsNew()
		await getWhatsNewArchive()
		await markWhatsNewSeen()

		expect(apiGet).toHaveBeenCalledWith('/whatsnew')
		expect(apiGet).toHaveBeenCalledWith('/whatsnew/all')
		expect(apiPost).toHaveBeenCalledWith('/whatsnew/seen', {})
	})
})
