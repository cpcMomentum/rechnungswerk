/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi, beforeEach } from 'vitest'

const apiGet = vi.fn()
const apiPost = vi.fn()
const apiPut = vi.fn()
const apiDelete = vi.fn()

vi.mock('./client', () => ({
	apiGet: (...a: unknown[]) => apiGet(...a),
	apiPost: (...a: unknown[]) => apiPost(...a),
	apiPut: (...a: unknown[]) => apiPut(...a),
	apiDelete: (...a: unknown[]) => apiDelete(...a),
}))

import { activateLicense, getLicense, refreshLicense, removeLicense, startTrial } from './license'

describe('Lizenz-API', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it('ruft je Aktion den passenden Endpunkt auf', async () => {
		await getLicense()
		await activateLicense('wp_X')
		await startTrial()
		await refreshLicense()
		await removeLicense()

		expect(apiGet).toHaveBeenCalledWith('/license')
		expect(apiPut).toHaveBeenCalledWith('/license', { key: 'wp_X' })
		expect(apiPost).toHaveBeenCalledWith('/license/trial', {})
		expect(apiPost).toHaveBeenCalledWith('/license/refresh', {})
		expect(apiDelete).toHaveBeenCalledWith('/license')
	})
})
