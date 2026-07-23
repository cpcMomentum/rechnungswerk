/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import InvoicesView from '@/views/InvoicesView.vue'
import InvoiceEditorView from '@/views/InvoiceEditorView.vue'
import QuotesView from '@/views/QuotesView.vue'
import ProductsView from '@/views/ProductsView.vue'
import TextSnippetsView from '@/views/TextSnippetsView.vue'
import CustomersView from '@/views/CustomersView.vue'
import MyContactView from '@/views/MyContactView.vue'
import SettingsView from '@/views/SettingsView.vue'

const routes: RouteRecordRaw[] = [
	{ path: '/', redirect: { name: 'invoices' } },
	{ path: '/invoices', name: 'invoices', component: InvoicesView },
	{ path: '/invoices/new', name: 'invoice-new', component: InvoiceEditorView },
	{ path: '/invoices/:id', name: 'invoice-detail', component: InvoiceEditorView, props: true },
	// Quotes (#111) reuse the invoice editor in "quote" mode (derived from the
	// route name); the list is its own view.
	{ path: '/quotes', name: 'quotes', component: QuotesView },
	{ path: '/quotes/new', name: 'quote-new', component: InvoiceEditorView },
	{ path: '/quotes/:id', name: 'quote-detail', component: InvoiceEditorView, props: true },
	{ path: '/customers', name: 'customers', component: CustomersView },
	{ path: '/products', name: 'products', component: ProductsView },
	{ path: '/text-snippets', name: 'text-snippets', component: TextSnippetsView },
	{ path: '/me', name: 'my-contact', component: MyContactView },
	{ path: '/settings', name: 'settings', component: SettingsView },
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
