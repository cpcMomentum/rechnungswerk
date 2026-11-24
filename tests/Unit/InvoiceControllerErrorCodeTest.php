<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Controller\InvoiceController;
use OCA\Rechnungswerk\Exception\ErrorCode;
use OCA\Rechnungswerk\Exception\IllegalStateException;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\NumberFormatException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\AuthContext;
use OCA\Rechnungswerk\Service\InvoiceService;
use OCA\Rechnungswerk\Service\NumberFormatMessage;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Http;
use OCP\IRequest;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/** Jeder Fehlerpfad der Rechnungs-API traegt neben dem Text einen stabilen Code. */
class InvoiceControllerErrorCodeTest extends TestCase {

	use TranslatorStub;

	private InvoiceService&MockObject $service;
	private IRequest&MockObject $request;

	private function controller(?string $userId = 'alice', bool $allowed = true): InvoiceController {
		$this->service = $this->createMock(InvoiceService::class);
		$this->request = $this->createMock(IRequest::class);

		$permissions = $this->createMock(PermissionService::class);
		$permissions->method('hasAccess')->willReturn($allowed);
		$permissions->method('canEdit')->willReturn($allowed);

		$authContext = $this->createMock(AuthContext::class);
		$authContext->method('getUserId')->willReturn($userId);
		$authContext->method('isMachine')->willReturn(false);
		$authContext->method('rejection')->willReturn(null);

		return new InvoiceController(
			$this->request,
			$authContext,
			$this->service,
			$permissions,
			$this->createMock(LoggerInterface::class),
		);
	}

	public function testUnknownIdAnswersInvoiceNotFound(): void {
		$controller = $this->controller();
		$this->service->method('get')->willThrowException(new NotFoundException('Rechnung nicht gefunden.'));

		$response = $controller->show(7);

		$this->assertSame(Http::STATUS_NOT_FOUND, $response->getStatus());
		$this->assertSame(['error' => 'Rechnung nicht gefunden.', 'code' => ErrorCode::INVOICE_NOT_FOUND], $response->getData());
	}

	public function testStateConflictKeepsTheCodeOfTheThrowSite(): void {
		$controller = $this->controller();
		$this->service->method('commit')->willThrowException(
			(new IllegalStateException('Schon festgeschrieben.'))->withErrorCode(ErrorCode::INVOICE_ALREADY_COMMITTED)
		);

		$response = $controller->commit(7);

		$this->assertSame(Http::STATUS_CONFLICT, $response->getStatus());
		$this->assertSame(ErrorCode::INVOICE_ALREADY_COMMITTED, $response->getData()['code']);
		$this->assertSame('Schon festgeschrieben.', $response->getData()['error']);
	}

	public function testStateConflictWithoutCodeFallsBackToTheGeneralOne(): void {
		$controller = $this->controller();
		$this->service->method('duplicate')->willThrowException(new IllegalStateException('Geht nicht.'));

		$response = $controller->duplicate(7);

		$this->assertSame(ErrorCode::INVOICE_STATE_INVALID, $response->getData()['code']);
	}

	public function testUnreadableAmountIsTellableFromAMissingField(): void {
		$unreadable = (new NumberFormatMessage($this->l10nStub()))
			->asValidationException(new NumberFormatException('149.00', NumberFormatException::KIND_PRICE));
		$controller = $this->controller();
		$this->service->method('create')->willThrowException($unreadable);

		$response = $controller->create(['items' => []]);

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertSame(ErrorCode::NUMBER_FORMAT_INVALID, $response->getData()['code']);

		$controller = $this->controller();
		$this->service->method('create')->willThrowException(new ValidationException('Pflichtangabe fehlt.'));

		$this->assertSame(ErrorCode::VALIDATION_FAILED, $controller->create([])->getData()['code']);
	}

	public function testFailedMailAnswersMailSendFailed(): void {
		$controller = $this->controller();
		$this->service->method('sendToCustomer')->willThrowException(new \RuntimeException('SMTP down'));

		$response = $controller->send(7, 'kunde@example.org', 'Betreff', 'Text');

		$this->assertSame(Http::STATUS_INTERNAL_SERVER_ERROR, $response->getStatus());
		$this->assertSame(ErrorCode::MAIL_SEND_FAILED, $response->getData()['code']);
	}

	public function testFailedPdfAnswersPdfGenerationFailed(): void {
		$controller = $this->controller();
		$this->service->method('generatePdf')->willThrowException(new \RuntimeException('dompdf'));

		$response = $controller->download(7);

		$this->assertSame(ErrorCode::PDF_GENERATION_FAILED, $response->getData()['code']);
	}

	public function testMissingLoginAndMissingRightCarryCodes(): void {
		$this->assertSame(ErrorCode::NOT_AUTHENTICATED, $this->controller(userId: null)->index()->getData()['code']);
		$this->assertSame(ErrorCode::FORBIDDEN, $this->controller(allowed: false)->index()->getData()['code']);
		$this->assertSame(ErrorCode::FORBIDDEN, $this->controller(allowed: false)->commit(7)->getData()['code']);
	}

	public function testListPassesTheFiltersAndRefusesUnreadableOnes(): void {
		$controller = $this->controller();
		$this->request->method('getParam')->willReturnMap([['orderNumber', null, 'WP-1'], ['status', null, ['draft']]]);
		$this->service->expects($this->once())->method('list')
			->with(['orderNumber' => 'WP-1', 'status' => ['draft'], 'from' => null, 'to' => null, 'limit' => null, 'offset' => null])
			->willReturn([]);

		$response = $controller->index();

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
		$this->assertSame([], $response->getData());

		$controller = $this->controller();
		$this->service->method('list')->willThrowException(new ValidationException('Unbekannter Status.'));

		$response = $controller->index();

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertSame(ErrorCode::VALIDATION_FAILED, $response->getData()['code']);
	}

	public function testCreatePassesTheIdempotencyKeyHeaderOn(): void {
		$controller = $this->controller();
		$this->request->method('getHeader')->willReturnMap([['Idempotency-Key', 'bestellung-4711']]);
		$this->service->expects($this->once())->method('create')
			->with('alice', ['recipientName' => 'Kunde AG'], null, 'bestellung-4711')
			->willReturn(['id' => 7]);

		$response = $controller->create(['recipientName' => 'Kunde AG']);

		$this->assertSame(Http::STATUS_CREATED, $response->getStatus());
	}
}
