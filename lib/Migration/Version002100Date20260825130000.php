<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version002100Date20260825130000 extends SimpleMigrationStep {

    public function name(): string {
        return 'Schema v0.21.0 (Vereinsmodus Einstellungen)';
    }

    public function description(): string {
        return 'Add club mode and member group settings.';
    }

    public function changeSchema(
        IOutput $output,
        Closure $schemaClosure,
        array $options
    ): ?ISchemaWrapper {

        $schema = $schemaClosure();

        $table = $schema->getTable('rechnungswerk_settings');

        if (!$table->hasColumn('club_mode')) {
            $table->addColumn(
                'club_mode',
                Types::SMALLINT,
                [
                    'notnull' => true,
                    'default' => 0,
                ]
            );
        }

        if (!$table->hasColumn('member_group')) {
            $table->addColumn(
                'member_group',
                Types::STRING,
                [
                    'notnull' => false,
                    'length' => 64,
                ]
            );
        }

        return $schema;
    }
}