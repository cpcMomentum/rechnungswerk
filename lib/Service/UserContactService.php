<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\IConfig;
use OCP\IL10N;

/**
 * Per-user seller-contact default (#47, cascade level 2). Stored as user-scoped
 * config (no schema churn); pre-fills the per-invoice seller contact in the
 * editor, falling back to the central company contact when unset.
 */
class UserContactService {

	private const KEY_PERSON = 'sellerContactPerson';
	private const KEY_PHONE = 'sellerContactPhone';
	private const KEY_EMAIL = 'sellerContactEmail';

	public function __construct(
		private readonly IConfig $config,
		private readonly IL10N $l10n,
	) {
	}

	/**
	 * @return array{person: string, phone: string, email: string}
	 */
	public function get(string $userId): array {
		return [
			'person' => $this->config->getUserValue($userId, Application::APP_ID, self::KEY_PERSON, ''),
			'phone' => $this->config->getUserValue($userId, Application::APP_ID, self::KEY_PHONE, ''),
			'email' => $this->config->getUserValue($userId, Application::APP_ID, self::KEY_EMAIL, ''),
		];
	}

	/**
	 * @param array<string, mixed> $data
	 * @return array{person: string, phone: string, email: string}
	 * @throws ValidationException
	 */
	public function save(string $userId, array $data): array {
		$person = trim((string)($data['person'] ?? ''));
		$phone = trim((string)($data['phone'] ?? ''));
		$email = trim((string)($data['email'] ?? ''));

		if (mb_strlen($person) > 255) {
			throw new ValidationException($this->l10n->t('Der Name darf höchstens 255 Zeichen lang sein.'));
		}
		if (mb_strlen($phone) > 64) {
			throw new ValidationException($this->l10n->t('Die Telefonnummer darf höchstens 64 Zeichen lang sein.'));
		}
		if (mb_strlen($email) > 255) {
			throw new ValidationException($this->l10n->t('Die E-Mail-Adresse darf höchstens 255 Zeichen lang sein.'));
		}
		if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
			throw new ValidationException($this->l10n->t('Bitte eine gültige E-Mail-Adresse angeben.'));
		}

		$this->config->setUserValue($userId, Application::APP_ID, self::KEY_PERSON, $person);
		$this->config->setUserValue($userId, Application::APP_ID, self::KEY_PHONE, $phone);
		$this->config->setUserValue($userId, Application::APP_ID, self::KEY_EMAIL, $email);

		return ['person' => $person, 'phone' => $phone, 'email' => $email];
	}
}
