<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\TextSnippet;
use OCA\Rechnungswerk\Db\TextSnippetMapper;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\TextSnippetService;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IDBConnection;
use PHPUnit\Framework\TestCase;

class TextSnippetServiceTest extends TestCase {

	private TextSnippetMapper $mapper;
	private TextSnippetService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->mapper = $this->createMock(TextSnippetMapper::class);
		$this->service = new TextSnippetService($this->mapper, $this->createMock(IDBConnection::class));
	}

	public function testCreateAppliesDefaults(): void {
		$this->mapper->method('insert')->willReturnArgument(0);
		$this->mapper->expects($this->never())->method('clearDefault');

		$snippet = $this->service->create('alice', ['label' => '  Neukunde  ']);

		$this->assertSame('Neukunde', $snippet->getLabel());
		$this->assertSame('alice', $snippet->getOwnerUserId());
		$this->assertSame(TextSnippet::DOC_TYPE_INVOICE, $snippet->getDocType());
		$this->assertSame(TextSnippet::SLOT_OPENING, $snippet->getSlot());
		$this->assertSame(0, $snippet->getIsDefault());
		$this->assertSame(0, $snippet->getSortOrder());
	}

	public function testCreateKeepsProvidedValues(): void {
		$this->mapper->method('insert')->willReturnArgument(0);

		$snippet = $this->service->create('alice', [
			'label' => 'Angebot Schluss',
			'docType' => 'quote',
			'slot' => 'closing',
			'content' => 'Wir freuen uns auf Ihre Rückmeldung.',
			'sortOrder' => 5,
		]);

		$this->assertSame('quote', $snippet->getDocType());
		$this->assertSame('closing', $snippet->getSlot());
		$this->assertSame('Wir freuen uns auf Ihre Rückmeldung.', $snippet->getContent());
		$this->assertSame(5, $snippet->getSortOrder());
	}

	public function testCreateAsDefaultClearsSiblingDefaults(): void {
		$this->mapper->method('insert')->willReturnArgument(0);
		// The new default must clear any existing default of the same (docType, slot).
		$this->mapper->expects($this->once())
			->method('clearDefault')
			->with('quote', 'opening', $this->anything());

		$snippet = $this->service->create('alice', [
			'label' => 'Standard',
			'docType' => 'quote',
			'slot' => 'opening',
			'isDefault' => true,
		]);

		$this->assertSame(1, $snippet->getIsDefault());
	}

	public function testUpdateAsDefaultClearsSiblingDefaults(): void {
		$existing = new TextSnippet();
		$existing->setOwnerUserId('alice');
		$existing->setLabel('Alt');
		$existing->setDocType('invoice');
		$existing->setSlot('closing');
		$existing->setIsDefault(0);
		$this->mapper->method('findOne')->willReturn($existing);
		$this->mapper->method('update')->willReturnArgument(0);
		$this->mapper->expects($this->once())
			->method('clearDefault')
			->with('invoice', 'closing', $this->anything());

		$updated = $this->service->update(1, ['isDefault' => true]);

		$this->assertSame(1, $updated->getIsDefault());
	}

	public function testCreateRejectsEmptyLabel(): void {
		$this->expectException(ValidationException::class);
		$this->service->create('alice', ['label' => '   ']);
	}

	public function testCreateRejectsInvalidDocType(): void {
		$this->expectException(ValidationException::class);
		$this->service->create('alice', ['label' => 'X', 'docType' => 'letter']);
	}

	public function testCreateRejectsInvalidSlot(): void {
		$this->expectException(ValidationException::class);
		$this->service->create('alice', ['label' => 'X', 'slot' => 'middle']);
	}

	public function testUpdateRejectsEmptyLabelWhenProvided(): void {
		$existing = new TextSnippet();
		$existing->setOwnerUserId('alice');
		$existing->setLabel('Alt');
		$existing->setDocType('invoice');
		$existing->setSlot('opening');
		$this->mapper->method('findOne')->willReturn($existing);

		$this->expectException(ValidationException::class);
		$this->service->update(1, ['label' => '']);
	}

	public function testGetUnknownThrowsNotFound(): void {
		$this->mapper->method('findOne')
			->willThrowException(new DoesNotExistException('nope'));

		$this->expectException(NotFoundException::class);
		$this->service->get(999);
	}
}
