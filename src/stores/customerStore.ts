/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Customer } from '@/types/api'
import {
	createCustomer as apiCreate,
	deleteCustomer as apiDelete,
	listCustomers as apiList,
	updateCustomer as apiUpdate,
	type CustomerCreate,
	type CustomerUpdate,
} from '@/api/customers'

export const useCustomerStore = defineStore('customer', () => {
	const customers = ref<Customer[]>([])
	const loading = ref(false)

	function sort(): void {
		customers.value.sort((a, b) => a.name.localeCompare(b.name))
	}

	async function fetchAll(): Promise<void> {
		loading.value = true
		try {
			customers.value = await apiList()
		} finally {
			loading.value = false
		}
	}

	async function create(data: CustomerCreate): Promise<Customer> {
		const customer = await apiCreate(data)
		customers.value.push(customer)
		sort()
		return customer
	}

	async function update(id: number, data: CustomerUpdate): Promise<Customer> {
		const updated = await apiUpdate(id, data)
		const index = customers.value.findIndex(c => c.id === id)
		if (index >= 0) {
			customers.value[index] = updated
		}
		sort()
		return updated
	}

	async function remove(id: number): Promise<void> {
		const index = customers.value.findIndex(c => c.id === id)
		const previous = index >= 0 ? customers.value[index] : null
		if (index >= 0) {
			customers.value.splice(index, 1)
		}
		try {
			await apiDelete(id)
		} catch (e) {
			if (previous && index >= 0) {
				customers.value.splice(index, 0, previous)
			}
			throw e
		}
	}

	return { customers, loading, fetchAll, create, update, remove }
})
