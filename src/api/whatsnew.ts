/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { WhatsNewPayload } from '@/types/api'
import { apiGet, apiPost } from './client'

/** Noch nicht gesehene Neuerungen der laufenden Version (#308). */
export const getWhatsNew = (): Promise<WhatsNewPayload> =>
	apiGet<WhatsNewPayload>('/whatsnew')

/** Quittiert das Fenster; es kommt fuer diese Version nicht wieder. */
export const markWhatsNewSeen = (): Promise<void> =>
	apiPost<void, Record<string, never>>('/whatsnew/seen', {})
