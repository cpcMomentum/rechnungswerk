<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * PHPUnit bootstrap for Rechnungswerk.
 *
 * Expected to run inside the Nextcloud container (via docker exec), which
 * loads NC's runtime via /var/www/html/lib/base.php and makes OCP\* available.
 * Our own classes come from the app's composer autoloader.
 */

require_once __DIR__ . '/../vendor/autoload.php';
require_once '/var/www/html/lib/base.php';
