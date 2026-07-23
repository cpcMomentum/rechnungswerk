/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Product } from '@/types/api'
import { apiDelete, apiGet, apiPatch, apiPost } from './client'

export interface ProductCreate {
	name: string
	description?: string | null
	defaultUnitCode?: string
	defaultPriceE4?: number
	defaultTaxRateBp?: number
}

export type ProductUpdate = Partial<ProductCreate>

export const listProducts = (): Promise<Product[]> =>
	apiGet<Product[]>('/products')

export const createProduct = (data: ProductCreate): Promise<Product> =>
	apiPost<Product, { data: ProductCreate }>('/products', { data })

export const updateProduct = (id: number, data: ProductUpdate): Promise<Product> =>
	apiPatch<Product, { data: ProductUpdate }>(`/products/${id}`, { data })

export const deleteProduct = (id: number): Promise<void> =>
	apiDelete(`/products/${id}`)
