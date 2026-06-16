<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

return [
	'routes' => [
		['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],

		// REST-Routen folgen, z.B.:
		// ['name' => 'invoice#index',   'url' => '/api/v1/invoices',      'verb' => 'GET'],
		// ['name' => 'invoice#show',    'url' => '/api/v1/invoices/{id}', 'verb' => 'GET'],
		// ['name' => 'invoice#create',  'url' => '/api/v1/invoices',      'verb' => 'POST'],
		// ['name' => 'invoice#update',  'url' => '/api/v1/invoices/{id}', 'verb' => 'PATCH'],
		// ['name' => 'invoice#destroy', 'url' => '/api/v1/invoices/{id}', 'verb' => 'DELETE'],
	],
];
