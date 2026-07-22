<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use OCA\Rechnungswerk\Db\TextSnippet;
use OCA\Rechnungswerk\Db\TextSnippetMapper;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IDBConnection;

class TextSnippetService {

	public function __construct(
		private readonly TextSnippetMapper $mapper,
		private readonly IDBConnection $db,
	) {
	}

	/** @return TextSnippet[] */
	public function list(): array {
		return $this->mapper->findAll();
	}

	/**
	 * @throws NotFoundException
	 */
	public function get(int $id): TextSnippet {
		return $this->findById($id);
	}

	/**
	 * @param array<string, mixed> $data
	 * @throws ValidationException
	 */
	public function create(string $userId, array $data): TextSnippet {
		$this->validate($data);

		$now = new DateTime();
		$snippet = new TextSnippet();
		$snippet->setOwnerUserId($userId);
		$snippet->setCreatedAt($now);
		$snippet->setUpdatedAt($now);
		$this->apply($snippet, $data, true);
		// Insert + clear-sibling-defaults must be atomic: a failure mid-way could
		// otherwise leave two defaults for the same (docType, slot).
		$this->db->beginTransaction();
		try {
			$snippet = $this->mapper->insert($snippet);
			if ($snippet->getIsDefault() === 1) {
				$this->mapper->clearDefault($snippet->getDocType(), $snippet->getSlot(), $snippet->getId());
			}
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
		return $snippet;
	}

	/**
	 * @param array<string, mixed> $data
	 * @throws NotFoundException
	 * @throws ValidationException
	 */
	public function update(int $id, array $data): TextSnippet {
		$snippet = $this->findById($id);
		$this->validate($data, partial: true);
		$this->apply($snippet, $data, false);
		$snippet->setUpdatedAt(new DateTime());
		// Atomic update + clear-sibling-defaults (see create()).
		$this->db->beginTransaction();
		try {
			$snippet = $this->mapper->update($snippet);
			if ($snippet->getIsDefault() === 1) {
				$this->mapper->clearDefault($snippet->getDocType(), $snippet->getSlot(), $snippet->getId());
			}
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
		return $snippet;
	}

	/**
	 * @throws NotFoundException
	 */
	public function delete(int $id): void {
		$snippet = $this->findById($id);
		$this->mapper->delete($snippet);
	}

	/**
	 * @throws NotFoundException
	 */
	private function findById(int $id): TextSnippet {
		try {
			return $this->mapper->findOne($id);
		} catch (DoesNotExistException) {
			throw new NotFoundException('Textbaustein nicht gefunden.');
		}
	}

	/**
	 * @param array<string, mixed> $data
	 * @throws ValidationException
	 */
	private function validate(array $data, bool $partial = false): void {
		if (!$partial || array_key_exists('label', $data)) {
			$label = trim((string)($data['label'] ?? ''));
			if ($label === '') {
				throw new ValidationException('Ein Name ist erforderlich.');
			}
			if (mb_strlen($label) > 255) {
				throw new ValidationException('Der Name darf höchstens 255 Zeichen lang sein.');
			}
		}
		if (array_key_exists('docType', $data) && !in_array((string)$data['docType'], TextSnippet::DOC_TYPES, true)) {
			throw new ValidationException('Ungültiger Dokumenttyp.');
		}
		if (array_key_exists('slot', $data) && !in_array((string)$data['slot'], TextSnippet::SLOTS, true)) {
			throw new ValidationException('Ungültiger Textbereich.');
		}
	}

	/**
	 * @param array<string, mixed> $data
	 */
	private function apply(TextSnippet $snippet, array $data, bool $isNew): void {
		if (array_key_exists('label', $data)) {
			$snippet->setLabel(trim((string)$data['label']));
		}
		if (array_key_exists('content', $data)) {
			$snippet->setContent($data['content'] !== null && $data['content'] !== '' ? (string)$data['content'] : null);
		}
		if (array_key_exists('docType', $data)) {
			$snippet->setDocType((string)$data['docType']);
		} elseif ($isNew) {
			$snippet->setDocType(TextSnippet::DOC_TYPE_INVOICE);
		}
		if (array_key_exists('slot', $data)) {
			$snippet->setSlot((string)$data['slot']);
		} elseif ($isNew) {
			$snippet->setSlot(TextSnippet::SLOT_OPENING);
		}
		if (array_key_exists('isDefault', $data)) {
			$snippet->setIsDefault(!empty($data['isDefault']) ? 1 : 0);
		} elseif ($isNew) {
			$snippet->setIsDefault(0);
		}
		if (array_key_exists('sortOrder', $data)) {
			$snippet->setSortOrder((int)$data['sortOrder']);
		} elseif ($isNew) {
			$snippet->setSortOrder(0);
		}
	}
}
