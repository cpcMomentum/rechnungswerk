<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Exception\IllegalStateException;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\InvoiceService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\ContentSecurityPolicy;
use OCP\AppFramework\Http\DataDisplayResponse;
use OCP\AppFramework\Http\DataDownloadResponse;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\Response;
use OCP\IRequest;
use Psr\Log\LoggerInterface;

/**
 * Quotes (#111). Thin HTTP layer over InvoiceService: quotes are the third
 * document type on the invoice table, so the controller mirrors
 * InvoiceController but routes every call through the quote-typed service
 * methods (which 404 on a non-quote id).
 */
class QuoteController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly InvoiceService $invoiceService,
		private readonly PermissionService $permissionService,
		private readonly LoggerInterface $logger,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	public function index(): DataResponse {
		if (($r = $this->guardAccess()) !== null) {
			return $r;
		}
		return new DataResponse($this->invoiceService->listQuotes());
	}

	#[NoAdminRequired]
	public function show(int $id): DataResponse {
		if (($r = $this->guardAccess()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->getQuote($id));
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		}
	}

	#[NoAdminRequired]
	public function create(array $data = []): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->createQuote($this->userId, $data), Http::STATUS_CREATED);
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
	}

	#[NoAdminRequired]
	public function update(int $id, array $data = []): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->updateQuote($id, $data));
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
	}

	#[NoAdminRequired]
	public function destroy(int $id): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			$this->invoiceService->deleteQuote($id);
			return new DataResponse(null, Http::STATUS_NO_CONTENT);
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		}
	}

	#[NoAdminRequired]
	public function commit(int $id): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->commitQuote($id));
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
	}

	#[NoAdminRequired]
	public function accept(int $id): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->markQuoteAccepted($id));
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		}
	}

	#[NoAdminRequired]
	public function reject(int $id): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->markQuoteRejected($id));
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		}
	}

	/** Convert the quote into a new invoice draft (returns that draft). */
	#[NoAdminRequired]
	public function convert(int $id): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->convertToInvoice($id, $this->userId), Http::STATUS_CREATED);
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		}
	}

	// GET download triggered via an <a download> click; browsers do not attach
	// custom request headers (CSRF tokens) on anchor navigations. Safe:
	// read-only, access-gated below, authenticated session required.
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function download(int $id): Response {
		if (($r = $this->guardAccess()) !== null) {
			return $r;
		}
		try {
			$pdf = $this->invoiceService->generateQuotePdf($id);
			return new DataDownloadResponse($pdf['content'], $pdf['filename'], 'application/pdf');
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: quote PDF generation failed', ['exception' => $e, 'quote' => $id]);
			return new DataResponse(['error' => 'Die PDF-Erzeugung ist fehlgeschlagen.'], Http::STATUS_INTERNAL_SERVER_ERROR);
		}
	}

	// GET rendered inline inside the preview dialog's <iframe>; iframe
	// navigations cannot carry custom request headers (CSRF token) either.
	// Safe: read-only, access-gated below, authenticated session required.
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function preview(int $id): Response {
		if (($r = $this->guardAccess()) !== null) {
			return $r;
		}
		try {
			$pdf = $this->invoiceService->generateQuotePreviewPdf($id);
			$response = new DataDisplayResponse($pdf['content'], Http::STATUS_OK, ['Content-Type' => 'application/pdf']);
			$csp = new ContentSecurityPolicy();
			$csp->addAllowedFrameAncestorDomain("'self'");
			$response->setContentSecurityPolicy($csp);
			return $response;
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: quote preview PDF generation failed', ['exception' => $e, 'quote' => $id]);
			return new DataResponse(['error' => 'Die PDF-Erzeugung ist fehlgeschlagen.'], Http::STATUS_INTERNAL_SERVER_ERROR);
		}
	}

	#[NoAdminRequired]
	public function send(int $id, string $to = '', string $subject = '', string $body = ''): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			$this->invoiceService->sendQuoteToCustomer($id, $to, $subject, $body);
			return new DataResponse(['sent' => true]);
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: quote mail failed', ['exception' => $e, 'quote' => $id]);
			return new DataResponse(['error' => 'Der Versand ist fehlgeschlagen.'], Http::STATUS_INTERNAL_SERVER_ERROR);
		}
	}

	private function guardAccess(): ?DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		return null;
	}

	private function guardEdit(): ?DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->canEdit($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		return null;
	}
}
