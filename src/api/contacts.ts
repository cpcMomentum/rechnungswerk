/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { ContactMatch } from '@/types/api'
import { apiGet } from './client'

export const searchContacts = (q: string): Promise<ContactMatch[]> =>
	apiGet<ContactMatch[]>(`/contacts/search?q=${encodeURIComponent(q)}`)
