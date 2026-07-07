/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import InvoicesView from '@/views/InvoicesView.vue'
import InvoiceEditorView from '@/views/InvoiceEditorView.vue'
import ProductsView from '@/views/ProductsView.vue'
import CustomersView from '@/views/CustomersView.vue'
import MyContactView from '@/views/MyContactView.vue'
import SettingsView from '@/views/SettingsView.vue'

const routes: RouteRecordRaw[] = [
	{ path: '/', redirect: { name: 'invoices' } },
	{ path: '/invoices', name: 'invoices', component: InvoicesView },
	{ path: '/invoices/new', name: 'invoice-new', component: InvoiceEditorView },
	{ path: '/invoices/:id', name: 'invoice-detail', component: InvoiceEditorView, props: true },
	{ path: '/customers', name: 'customers', component: CustomersView },
	{ path: '/products', name: 'products', component: ProductsView },
	{ path: '/me', name: 'my-contact', component: MyContactView },
	{ path: '/settings', name: 'settings', component: SettingsView },
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
