<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\AppInfo;

use OCA\Rechnungswerk\BackgroundJob\DatevConfirmationJob;
use OCA\Rechnungswerk\BackgroundJob\DocumentBackfillJob;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\BackgroundJob\IJobList;

class Application extends App implements IBootstrap {
	public const APP_ID = 'rechnungswerk';

	public function __construct() {
		parent::__construct(self::APP_ID);

		// Runtime dependencies (horstoeko/zugferd, dompdf) are vendored into the
		// app and shipped in the release tarball — the Nextcloud server does not
		// provide them. Load our own autoloader so they are available.
		$autoloader = __DIR__ . '/../../vendor/autoload.php';
		if (file_exists($autoloader)) {
			require_once $autoloader;
		}
	}

	public function register(IRegistrationContext $context): void {
	}

	public function boot(IBootContext $context): void {
		// Register the DATEV confirmation poller. IJobList::add is idempotent,
		// so re-adding on every boot is safe.
		$jobList = $context->getServerContainer()->get(IJobList::class);
		$jobList->add(DatevConfirmationJob::class);
		// Zieht die Belege des Bestands nach (#181, Schritt 3). Bleibt dauerhaft
		// registriert: er faengt auch die seltenen Faelle ein, in denen das
		// Einfrieren beim Festschreiben fehlschlaegt.
		$jobList->add(DocumentBackfillJob::class);
	}
}
