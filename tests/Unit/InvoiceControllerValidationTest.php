<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Controller\InvoiceController;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\InvoiceService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Http;
use OCP\IRequest;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/**
 * Eine fehlende Angabe ist kein Serverfehler. Beim Festschreiben wurde die
 * ValidationException schon in eine 400 mit Text uebersetzt, beim Stornieren
 * nicht — dort kam sie als 500 an, und die Oberflaeche zeigte statt der
 * Meldung nur "Request failed with status code 500" (#313).
 */
class InvoiceControllerValidationTest extends TestCase {

	private const MELDUNG = 'Bitte zuerst den Firmennamen hinterlegen.';

	private function controllerRefusingWith(string $method): InvoiceController {
		$service = $this->createMock(InvoiceService::class);
		$service->method($method)->willThrowException(new ValidationException(self::MELDUNG));

		$permissions = $this->createMock(PermissionService::class);
		$permissions->method('isAdmin')->willReturn(true);
		$permissions->method('hasAccess')->willReturn(true);
		$permissions->method('canEdit')->willReturn(true);

		return new InvoiceController(
			$this->createMock(IRequest::class),
			'alice',
			$service,
			$permissions,
			$this->createMock(LoggerInterface::class),
		);
	}

	public function testCancelAnswersFailedValidationWithTheMessage(): void {
		$response = $this->controllerRefusingWith('cancel')->cancel(7);

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertSame(['error' => self::MELDUNG], $response->getData());
	}

	/** Zum Vergleich der Weg, der es schon konnte. */
	public function testCommitAnswersFailedValidationWithTheMessage(): void {
		$response = $this->controllerRefusingWith('commit')->commit(7);

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertSame(['error' => self::MELDUNG], $response->getData());
	}
}
