/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import InvoicesView from '@/views/InvoicesView.vue'
import ProductsView from '@/views/ProductsView.vue'
import SettingsView from '@/views/SettingsView.vue'

const routes: RouteRecordRaw[] = [
	{ path: '/', redirect: { name: 'invoices' } },
	{ path: '/invoices', name: 'invoices', component: InvoicesView },
	{ path: '/products', name: 'products', component: ProductsView },
	{ path: '/settings', name: 'settings', component: SettingsView },
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
