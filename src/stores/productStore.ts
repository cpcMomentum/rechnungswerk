/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '@/types/api'
import {
	createProduct as apiCreate,
	deleteProduct as apiDelete,
	listProducts as apiList,
	updateProduct as apiUpdate,
	type ProductCreate,
	type ProductUpdate,
} from '@/api/products'

export const useProductStore = defineStore('product', () => {
	const products = ref<Product[]>([])
	const loading = ref(false)

	async function fetchAll(): Promise<void> {
		loading.value = true
		try {
			products.value = await apiList()
		} finally {
			loading.value = false
		}
	}

	async function create(data: ProductCreate): Promise<Product> {
		const product = await apiCreate(data)
		products.value.push(product)
		products.value.sort((a, b) => a.name.localeCompare(b.name))
		return product
	}

	async function update(id: number, data: ProductUpdate): Promise<Product> {
		const updated = await apiUpdate(id, data)
		const index = products.value.findIndex(p => p.id === id)
		if (index >= 0) {
			products.value[index] = updated
		}
		products.value.sort((a, b) => a.name.localeCompare(b.name))
		return updated
	}

	async function remove(id: number): Promise<void> {
		const index = products.value.findIndex(p => p.id === id)
		const previous = index >= 0 ? products.value[index] : null
		if (index >= 0) {
			products.value.splice(index, 1)
		}
		try {
			await apiDelete(id)
		} catch (e) {
			if (previous && index >= 0) {
				products.value.splice(index, 0, previous)
			}
			throw e
		}
	}

	return { products, loading, fetchAll, create, update, remove }
})
