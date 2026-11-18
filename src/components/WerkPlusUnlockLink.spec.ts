/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import WerkPlusUnlockLink from './WerkPlusUnlockLink.vue'

const links = vi.hoisted(() => ({ buy: 'https://werkwolke.de/preis?app=rechnungswerk', features: '', trial: '' }))
vi.mock('@/werkplusLinks', () => ({ werkplusLinks: () => links }))

describe('WerkPlusUnlockLink', () => {
	it('öffnet die Kaufen-Adresse in neuem Tab ohne Referrer', () => {
		const link = mount(WerkPlusUnlockLink).find('a')

		expect(link.text()).toBe('Mit WerkPlus freischalten')
		expect(link.attributes('href')).toBe('https://werkwolke.de/preis?app=rechnungswerk')
		expect(link.attributes('target')).toBe('_blank')
		expect(link.attributes('rel')).toBe('noopener noreferrer')
	})
})
