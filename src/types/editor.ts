/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * UI-only shape for editing invoice line items. Price is held as a euro input
 * string while editing; it is converted to integer cents on save.
 */

import type { InvoiceItem, Product, UnitCode } from '@/types/api'
import { e4ToEuroInput } from '@/utils/money'

export interface EditorItem {
	productId: number | null
	name: string
	description: string
	quantity: string
	unitCode: UnitCode
	unitLabel: string
	priceInput: string
	taxRateBp: number
}

export function emptyItem(defaultTaxRateBp = 1900): EditorItem {
	return {
		productId: null,
		name: '',
		description: '',
		quantity: '1',
		unitCode: 'C62',
		unitLabel: '',
		priceInput: '0.00',
		taxRateBp: defaultTaxRateBp,
	}
}

export function itemFromProduct(product: Product, smallBusiness: boolean): EditorItem {
	return {
		productId: product.id,
		name: product.name,
		description: product.description ?? '',
		quantity: '1',
		unitCode: product.defaultUnitCode,
		unitLabel: product.defaultUnitLabel ?? '',
		priceInput: e4ToEuroInput(product.defaultPriceE4),
		taxRateBp: smallBusiness ? 0 : product.defaultTaxRateBp,
	}
}

export function itemFromInvoiceItem(item: InvoiceItem): EditorItem {
	return {
		productId: item.productId,
		name: item.name,
		description: item.description ?? '',
		quantity: item.quantity,
		unitCode: item.unitCode,
		unitLabel: item.unitLabel ?? '',
		priceInput: e4ToEuroInput(item.unitPriceE4),
		taxRateBp: item.taxRateBp,
	}
}
