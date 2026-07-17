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

class InvoiceController extends Controller {

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
		return new DataResponse($this->invoiceService->list());
	}

	#[NoAdminRequired]
	public function show(int $id): DataResponse {
		if (($r = $this->guardAccess()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->get($id));
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
			return new DataResponse($this->invoiceService->create($this->userId, $data), Http::STATUS_CREATED);
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
			return new DataResponse($this->invoiceService->updateInvoice($id, $data));
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
			$this->invoiceService->deleteInvoice($id);
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
			return new DataResponse($this->invoiceService->commit($id));
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
	}

	// GET download triggered via an <a download> click; browsers do not attach
	// custom request headers (including CSRF tokens) on anchor navigations.
	// Safe: read-only, access-gated below, authenticated session required.
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function download(int $id): Response {
		if (($r = $this->guardAccess()) !== null) {
			return $r;
		}
		try {
			$pdf = $this->invoiceService->generatePdf($id);
			return new DataDownloadResponse($pdf['content'], $pdf['filename'], 'application/pdf');
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: PDF generation failed', ['exception' => $e, 'invoice' => $id]);
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
			$pdf = $this->invoiceService->generatePreviewPdf($id);
			$response = new DataDisplayResponse($pdf['content'], Http::STATUS_OK, ['Content-Type' => 'application/pdf']);
			// The default CSP ships frame-ancestors 'none', which blocks the
			// preview dialog's same-origin <iframe>. Relax exactly that.
			$csp = new ContentSecurityPolicy();
			$csp->addAllowedFrameAncestorDomain("'self'");
			$response->setContentSecurityPolicy($csp);
			return $response;
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: preview PDF generation failed', ['exception' => $e, 'invoice' => $id]);
			return new DataResponse(['error' => 'Die PDF-Erzeugung ist fehlgeschlagen.'], Http::STATUS_INTERNAL_SERVER_ERROR);
		}
	}

	#[NoAdminRequired]
	public function send(int $id, string $to = '', string $subject = '', string $body = ''): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			$this->invoiceService->sendToCustomer($id, $to, $subject, $body);
			return new DataResponse(['sent' => true]);
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: invoice mail failed', ['exception' => $e, 'invoice' => $id]);
			return new DataResponse(['error' => 'Der Versand ist fehlgeschlagen.'], Http::STATUS_INTERNAL_SERVER_ERROR);
		}
	}

	#[NoAdminRequired]
	public function cancel(int $id): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->cancel($id, $this->userId));
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		}
	}

	#[NoAdminRequired]
	public function duplicate(int $id): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->duplicate($id, $this->userId), Http::STATUS_CREATED);
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		}
	}

	#[NoAdminRequired]
	public function markPaid(int $id, ?string $date = null): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->markPaid($id, $date));
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		}
	}

	#[NoAdminRequired]
	public function markUnpaid(int $id): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->markUnpaid($id));
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
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
