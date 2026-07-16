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
		['name' => 'invoice#duplicate', 'url' => '/api/v1/invoices/{id}/duplicate', 'verb' => 'POST'],
		['name' => 'invoice#markPaid',   'url' => '/api/v1/invoices/{id}/pay',   'verb' => 'POST'],
		['name' => 'invoice#markUnpaid', 'url' => '/api/v1/invoices/{id}/unpay', 'verb' => 'POST'],
		['name' => 'invoice#download', 'url' => '/api/v1/invoices/{id}/pdf',   'verb' => 'GET'],
		['name' => 'invoice#preview', 'url' => '/api/v1/invoices/{id}/preview', 'verb' => 'GET'],
		['name' => 'invoice#send',    'url' => '/api/v1/invoices/{id}/send',  'verb' => 'POST'],

		// Products
		['name' => 'product#index',   'url' => '/api/v1/products',      'verb' => 'GET'],
		['name' => 'product#show',    'url' => '/api/v1/products/{id}', 'verb' => 'GET'],
		['name' => 'product#create',  'url' => '/api/v1/products',      'verb' => 'POST'],
		['name' => 'product#update',  'url' => '/api/v1/products/{id}', 'verb' => 'PATCH'],
		['name' => 'product#destroy', 'url' => '/api/v1/products/{id}', 'verb' => 'DELETE'],

		// Customers
		['name' => 'customer#index',    'url' => '/api/v1/customers',               'verb' => 'GET'],
		['name' => 'customer#show',     'url' => '/api/v1/customers/{id}',          'verb' => 'GET'],
		['name' => 'customer#invoices', 'url' => '/api/v1/customers/{id}/invoices', 'verb' => 'GET'],
		['name' => 'customer#create',   'url' => '/api/v1/customers',               'verb' => 'POST'],
		['name' => 'customer#update',   'url' => '/api/v1/customers/{id}',          'verb' => 'PATCH'],
		['name' => 'customer#destroy',  'url' => '/api/v1/customers/{id}',          'verb' => 'DELETE'],

		// Settings (central company config)
		['name' => 'settings#show', 'url' => '/api/v1/settings', 'verb' => 'GET'],
		['name' => 'settings#save', 'url' => '/api/v1/settings', 'verb' => 'PUT'],
		['name' => 'settings#getLogo',    'url' => '/api/v1/settings/logo', 'verb' => 'GET'],
		['name' => 'settings#setLogo',    'url' => '/api/v1/settings/logo', 'verb' => 'PUT'],
		['name' => 'settings#deleteLogo', 'url' => '/api/v1/settings/logo', 'verb' => 'DELETE'],
		['name' => 'settings#setArchiveFolder',    'url' => '/api/v1/settings/archive-folder', 'verb' => 'PUT'],
		['name' => 'settings#deleteArchiveFolder', 'url' => '/api/v1/settings/archive-folder', 'verb' => 'DELETE'],

		// Contacts (recipient picker)
		['name' => 'contact#search', 'url' => '/api/v1/contacts/search', 'verb' => 'GET'],
		// Current user's seller-contact defaults (from NC account)
		['name' => 'contact#me', 'url' => '/api/v1/me', 'verb' => 'GET'],
		// Current user's personal seller-contact default (#47)
		['name' => 'contact#getMyContact', 'url' => '/api/v1/me/contact', 'verb' => 'GET'],
		['name' => 'contact#saveMyContact', 'url' => '/api/v1/me/contact', 'verb' => 'PUT'],

		// Access control / app admin
		['name' => 'admin#permissionInfo',     'url' => '/api/v1/permission-info',     'verb' => 'GET'],
		['name' => 'admin#getPermissions',     'url' => '/api/v1/permissions',         'verb' => 'GET'],
		['name' => 'admin#updatePermissions',  'url' => '/api/v1/permissions',         'verb' => 'PUT'],
		['name' => 'admin#searchPrincipals',   'url' => '/api/v1/principals/search',   'verb' => 'GET'],
		['name' => 'admin#testSmtp',           'url' => '/api/v1/smtp/test',           'verb' => 'POST'],
	],
];
