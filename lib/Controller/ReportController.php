<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\ReportService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDownloadResponse;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\Response;
use OCP\IRequest;
use Psr\Log\LoggerInterface;

class ReportController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly ReportService $reportService,
		private readonly PermissionService $permissionService,
		private readonly LoggerInterface $logger,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	public function show(string $from = '', string $to = '', string $basis = ReportService::BASIS_ISSUE): DataResponse {
		if (($r = $this->guardAccess()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->reportService->build($from, $to, $basis));
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
	}

	// GET download triggered via an <a download> click; browsers do not attach
	// custom request headers (including CSRF tokens) on anchor navigations.
	// Safe: read-only, access-gated below, authenticated session required.
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function csv(string $from = '', string $to = '', string $basis = ReportService::BASIS_ISSUE): Response {
		if (($r = $this->guardAccess()) !== null) {
			return $r;
		}
		try {
			$report = $this->reportService->build($from, $to, $basis);
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
		return new DataDownloadResponse(
			$this->reportService->toCsv($report),
			$this->reportService->fileBaseName($report) . '.csv',
			'text/csv; charset=utf-8',
		);
	}

	// Same reasoning as csv(): anchor download, read-only, access-gated.
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function pdf(string $from = '', string $to = '', string $basis = ReportService::BASIS_ISSUE): Response {
		if (($r = $this->guardAccess()) !== null) {
			return $r;
		}
		try {
			$report = $this->reportService->build($from, $to, $basis);
			return new DataDownloadResponse(
				$this->reportService->toPdf($report),
				$this->reportService->fileBaseName($report) . '.pdf',
				'application/pdf',
			);
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: report PDF generation failed', ['exception' => $e]);
			return new DataResponse(['error' => 'Die PDF-Erzeugung ist fehlgeschlagen.'], Http::STATUS_INTERNAL_SERVER_ERROR);
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
}
