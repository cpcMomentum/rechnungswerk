/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Customer, Invoice } from '@/types/api'
import { apiDelete, apiGet, apiPatch, apiPost } from './client'

export interface CustomerCreate {
	customerNumber: string
	name: string
	vatId?: string | null
	address?: string | null
	postalCode?: string | null
	city?: string | null
	country?: string | null
	contactPerson?: string | null
	phone?: string | null
	email?: string | null
	bankAccountHolder?: string | null
	iban?: string | null
	bic?: string | null
	bankName?: string | null
	defaultPaymentTermDays?: number | null
	defaultTaxRateBp?: number | null
	note?: string | null
}

export type CustomerUpdate = Partial<CustomerCreate>

export const listCustomers = (): Promise<Customer[]> =>
	apiGet<Customer[]>('/customers')

export const listCustomerInvoices = (id: number): Promise<Invoice[]> =>
	apiGet<Invoice[]>(`/customers/${id}/invoices`)

export const createCustomer = (data: CustomerCreate): Promise<Customer> =>
	apiPost<Customer, { data: CustomerCreate }>('/customers', { data })

export const updateCustomer = (id: number, data: CustomerUpdate): Promise<Customer> =>
	apiPatch<Customer, { data: CustomerUpdate }>(`/customers/${id}`, { data })

export const deleteCustomer = (id: number): Promise<void> =>
	apiDelete(`/customers/${id}`)
