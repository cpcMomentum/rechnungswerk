<!--
SPDX-FileCopyrightText: 2026 cpcMomentum
SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="rw-audit-trail">
		<NcNoteCard v-if="error" type="error" :text="error" />
		<p v-else-if="loaded && entries.length === 0" class="rw-hint">
			{{ t('rechnungswerk', 'Noch keine Einträge. Vorgänge vor Einführung des Protokolls sind nicht erfasst.') }}
		</p>
		<ul v-else class="rw-audit-trail__list">
			<li v-for="entry in entries" :key="entry.id" class="rw-audit-trail__item">
				<span class="rw-audit-trail__time">{{ auditTime(entry.createdAt) }}</span>
				<span class="rw-audit-trail__action">{{ auditActionLabel(entry.action) }}</span>
				<span class="rw-muted">{{ auditActor(entry) }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import { getDocumentAudit, type AuditEntry } from '@/api/audit'
import { auditActionLabel, auditActor, auditTime } from '@/utils/auditLabels'

const props = defineProps<{ documentId: number, refreshKey: number }>()

const entries = ref<AuditEntry[]>([])
const loaded = ref(false)
const error = ref('')

let latest = 0

async function load(): Promise<void> {
	const request = ++latest
	error.value = ''
	try {
		const result = await getDocumentAudit(props.documentId)
		if (request === latest) {
			entries.value = result
		}
	} catch {
		if (request === latest) {
			error.value = t('rechnungswerk', 'Der Verlauf konnte nicht geladen werden.')
		}
	} finally {
		if (request === latest) {
			loaded.value = true
		}
	}
}

watch(() => [props.documentId, props.refreshKey], load, { immediate: true })
</script>

<style scoped>
.rw-audit-trail__list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.rw-audit-trail__item {
	display: flex;
	flex-wrap: wrap;
	gap: 4px 12px;
	padding: 6px 0;
	border-bottom: 1px solid var(--color-border);
}

.rw-audit-trail__time {
	min-width: 9em;
	color: var(--color-text-maxcontrast);
}

.rw-audit-trail__action {
	font-weight: 600;
}
</style>
