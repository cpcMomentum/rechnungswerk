<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

return [
	'routes' => [
		['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],

		// Invoices
		['name' => 'invoice#index',   'url' => '/api/v1/invoices',             'verb' => 'GET'],
		['name' => 'invoice#show',    'url' => '/api/v1/invoices/{id}',        'verb' => 'GET'],
		['name' => 'invoice#create',  'url' => '/api/v1/invoices',             'verb' => 'POST'],
		['name' => 'invoice#update',  'url' => '/api/v1/invoices/{id}',        'verb' => 'PATCH'],
		['name' => 'invoice#destroy', 'url' => '/api/v1/invoices/{id}',        'verb' => 'DELETE'],
		['name' => 'invoice#commit',  'url' => '/api/v1/invoices/{id}/commit', 'verb' => 'POST'],
		['name' => 'invoice#cancel',  'url' => '/api/v1/invoices/{id}/cancel', 'verb' => 'POST'],
		['name' => 'invoice#download', 'url' => '/api/v1/invoices/{id}/pdf',   'verb' => 'GET'],
		['name' => 'invoice#send',    'url' => '/api/v1/invoices/{id}/send',  'verb' => 'POST'],

		// Products
		['name' => 'product#index',   'url' => '/api/v1/products',      'verb' => 'GET'],
		['name' => 'product#show',    'url' => '/api/v1/products/{id}', 'verb' => 'GET'],
		['name' => 'product#create',  'url' => '/api/v1/products',      'verb' => 'POST'],
		['name' => 'product#update',  'url' => '/api/v1/products/{id}', 'verb' => 'PATCH'],
		['name' => 'product#destroy', 'url' => '/api/v1/products/{id}', 'verb' => 'DELETE'],

		// Settings (one row per owner)
		['name' => 'settings#show', 'url' => '/api/v1/settings', 'verb' => 'GET'],
		['name' => 'settings#save', 'url' => '/api/v1/settings', 'verb' => 'PUT'],

		// Contacts (recipient picker)
		['name' => 'contact#search', 'url' => '/api/v1/contacts/search', 'verb' => 'GET'],
	],
];
