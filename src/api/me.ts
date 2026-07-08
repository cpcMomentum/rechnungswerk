/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { MeContactDefaults } from '@/types/api'
import { apiGet, apiPut } from './client'

/** The current user's saved personal seller-contact default (#47, cascade level 2). */
export const getMyContact = (): Promise<MeContactDefaults> =>
	apiGet<MeContactDefaults>('/me/contact')

export const saveMyContact = (data: MeContactDefaults): Promise<MeContactDefaults> =>
	apiPut<MeContactDefaults, { data: MeContactDefaults }>('/me/contact', { data })
