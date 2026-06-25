/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Typed HTTP client wrapping @nextcloud/axios. Session + CSRF are
 * handled by @nextcloud/axios automatically (OC.requestToken).
 */

import axios, { type AxiosError } from '@nextcloud/axios'
import { generateUrl } from '@nextcloud/router'
import type { ApiError } from '@/types/api'

export function apiUrl(path: string): string {
	return generateUrl(`/apps/rechnungswerk/api/v1${path}`)
}

function wrapError(error: unknown): ApiError {
	const axiosError = error as AxiosError<{ error?: string }>
	const status = axiosError.response?.status ?? 0
	const message = axiosError.response?.data?.error ?? axiosError.message ?? 'Unknown error'
	return { status, message }
}

export async function apiGet<T>(path: string): Promise<T> {
	try {
		const { data } = await axios.get<T>(apiUrl(path))
		return data
	} catch (e) {
		throw wrapError(e)
	}
}

export async function apiPost<T, B = unknown>(path: string, body: B): Promise<T> {
	try {
		const { data } = await axios.post<T>(apiUrl(path), body)
		return data
	} catch (e) {
		throw wrapError(e)
	}
}

export async function apiPatch<T, B = unknown>(path: string, body: B): Promise<T> {
	try {
		const { data } = await axios.patch<T>(apiUrl(path), body)
		return data
	} catch (e) {
		throw wrapError(e)
	}
}

export async function apiPut<T, B = unknown>(path: string, body: B): Promise<T> {
	try {
		const { data } = await axios.put<T>(apiUrl(path), body)
		return data
	} catch (e) {
		throw wrapError(e)
	}
}

export async function apiDelete<T = void>(path: string): Promise<T> {
	try {
		const { data } = await axios.delete<T>(apiUrl(path))
		return data
	} catch (e) {
		throw wrapError(e)
	}
}
