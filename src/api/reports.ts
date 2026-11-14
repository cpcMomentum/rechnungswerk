/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Report, ReportBasis } from '@/types/api'
import { apiGet, apiUrl } from './client'

export interface ReportQuery {
	/** Erster Tag, Y-m-d. */
	from: string
	/** Letzter Tag (einschließlich), Y-m-d. */
	to: string
	basis: ReportBasis
}

const queryString = (q: ReportQuery): string =>
	'?' + new URLSearchParams({ from: q.from, to: q.to, basis: q.basis }).toString()

export const getReport = (q: ReportQuery): Promise<Report> =>
	apiGet<Report>('/reports' + queryString(q))

/**
 * Trigger a browser download of the report as CSV or PDF. Same transient-anchor
 * approach as downloadInvoicePdf(): the server's `Content-Disposition:
 * attachment` saves the file in place, no blank tab, no popup blocker.
 */
export const downloadReport = (format: 'csv' | 'pdf', q: ReportQuery): void => {
	const a = document.createElement('a')
	a.href = apiUrl(`/reports/${format}`) + queryString(q)
	a.download = ''
	a.rel = 'noopener'
	a.style.display = 'none'
	document.body.appendChild(a)
	a.click()
	a.remove()
}
