<template>
	<div class="rw-view">
		<div class="rw-view__head">
			<h2>{{ t('rechnungswerk', 'Textbausteine') }}</h2>
			<NcButton variant="primary" @click="openCreate">
				<template #icon><PlusIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Textbaustein anlegen') }}
			</NcButton>
		</div>

		<p class="rw-muted rw-intro">
			{{ t('rechnungswerk', 'Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.') }}
		</p>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<NcEmptyContent v-if="!store.loading && store.snippets.length === 0"
			:name="t('rechnungswerk', 'Noch keine Textbausteine')"
			:description="t('rechnungswerk', 'Lege wiederkehrende Einleitungs- und Schlusstexte an, um sie schnell in Dokumente zu übernehmen.')">
			<template #icon><TextBoxIcon :size="20" /></template>
		</NcEmptyContent>

		<div v-else-if="store.snippets.length > 0" class="rw-snippet-groups">
			<section v-for="g in groups" :key="g.key" class="rw-snippet-group">
				<h3 class="rw-snippet-group__head">
					{{ t('rechnungswerk', SNIPPET_DOC_TYPE_LABELS[g.docType]) }}
					<span class="rw-snippet-group__sep">–</span>
					{{ t('rechnungswerk', SNIPPET_SLOT_LABELS[g.slot]) }}
				</h3>
				<div class="rw-table-wrap">
					<table class="rw-table">
						<tbody>
							<tr v-for="s in g.items" :key="s.id" class="rw-row-clickable" @click="openEdit(s)">
								<td>
									<strong>{{ s.label }}</strong>
									<div v-if="s.content" class="rw-muted rw-preview">{{ preview(s.content) }}</div>
								</td>
								<td class="rw-badge-cell">
									<span v-if="s.isDefault" class="rw-badge">{{ t('rechnungswerk', 'Standard') }}</span>
								</td>
								<td class="rw-col-actions">
									<div class="rw-actions">
										<NcButton v-if="!s.isDefault"
											type="tertiary"
											:aria-label="t('rechnungswerk', 'Als Standard festlegen')"
											:title="t('rechnungswerk', 'Als Standard festlegen')"
											@click.stop="setDefault(s)">
											<template #icon><StarOutlineIcon :size="20" /></template>
										</NcButton>
										<NcButton type="tertiary"
											:aria-label="t('rechnungswerk', 'Löschen')"
											:title="t('rechnungswerk', 'Löschen')"
											@click.stop="askDelete(s)">
											<template #icon><DeleteIcon :size="20" /></template>
										</NcButton>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</div>

		<TextSnippetEditModal
			:open="editorOpen"
			:snippet="editing"
			:saving="store.loading"
			@close="editorOpen = false"
			@save="onSave" />

		<ConfirmDialog
			:open="deleteTarget !== null"
			:name="t('rechnungswerk', 'Textbaustein löschen')"
			:message="deleteTarget ? t('rechnungswerk', '„{name}“ wirklich löschen?', { name: deleteTarget.label }) : ''"
			:confirm-label="t('rechnungswerk', 'Löschen')"
			destructive
			@close="deleteTarget = null"
			@confirm="confirmDelete" />
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'
import TextBoxIcon from 'vue-material-design-icons/TextBox.vue'
import TextSnippetEditModal from '@/components/TextSnippetEditModal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import { useTextSnippetStore } from '@/stores/textSnippetStore'
import { SNIPPET_DOC_TYPE_LABELS, SNIPPET_SLOT_LABELS, type SnippetDocType, type SnippetSlot, type TextSnippet } from '@/types/api'
import type { TextSnippetCreate } from '@/api/textSnippets'

const store = useTextSnippetStore()

// Primary structure of the list: one group per document type + text area, in a
// natural reading order (invoice before quote, opening before closing). The
// snippet name is secondary — the group heading tells you what it is for.
const DOC_TYPE_ORDER: SnippetDocType[] = ['invoice', 'quote']
const SLOT_ORDER: SnippetSlot[] = ['opening', 'closing']
const groups = computed(() => {
	const out: Array<{ key: string, docType: SnippetDocType, slot: SnippetSlot, items: TextSnippet[] }> = []
	for (const docType of DOC_TYPE_ORDER) {
		for (const slot of SLOT_ORDER) {
			const items = store.snippets
				.filter(s => s.docType === docType && s.slot === slot)
				.sort((a, b) => Number(b.isDefault) - Number(a.isDefault) || a.sortOrder - b.sortOrder || a.label.localeCompare(b.label))
			if (items.length > 0) {
				out.push({ key: `${docType}-${slot}`, docType, slot, items })
			}
		}
	}
	return out
})
const editorOpen = ref(false)
const editing = ref<TextSnippet | null>(null)
const deleteTarget = ref<TextSnippet | null>(null)
const error = ref('')

const preview = (content: string): string => {
	const flat = content.replace(/\s+/g, ' ').trim()
	return flat.length > 90 ? flat.slice(0, 90) + '…' : flat
}

function fail(e: unknown, fallback: string) {
	const message = (e as { message?: string }).message ?? fallback
	error.value = message
	console.error('[rechnungswerk] text-snippets:', e)
}

onMounted(() => {
	store.fetchAll().catch(e => fail(e, t('rechnungswerk', 'Laden fehlgeschlagen')))
})

function openCreate() {
	editing.value = null
	editorOpen.value = true
}

function openEdit(snippet: TextSnippet) {
	editing.value = snippet
	editorOpen.value = true
}

async function setDefault(snippet: TextSnippet) {
	error.value = ''
	try {
		await store.update(snippet.id, { isDefault: true })
	} catch (e) {
		fail(e, t('rechnungswerk', 'Speichern fehlgeschlagen'))
	}
}

async function onSave(data: TextSnippetCreate) {
	error.value = ''
	try {
		if (editing.value) {
			await store.update(editing.value.id, data)
		} else {
			await store.create(data)
		}
		editorOpen.value = false
	} catch (e) {
		fail(e, t('rechnungswerk', 'Speichern fehlgeschlagen'))
	}
}

function askDelete(snippet: TextSnippet) {
	deleteTarget.value = snippet
}

async function confirmDelete() {
	const target = deleteTarget.value
	deleteTarget.value = null
	if (!target) {
		return
	}
	error.value = ''
	try {
		await store.remove(target.id)
	} catch (e) {
		fail(e, t('rechnungswerk', 'Löschen fehlgeschlagen'))
	}
}
</script>

<style scoped>
.rw-intro {
	max-width: 60em;
	margin: 0 0 16px;
}
.rw-preview {
	font-size: 0.85em;
	margin-top: 2px;
}
.rw-snippet-group {
	margin-bottom: 24px;
}
.rw-snippet-group__head {
	font-size: 1em;
	font-weight: 600;
	margin: 0 0 8px;
	color: var(--color-text-maxcontrast);
}
.rw-snippet-group__sep {
	margin: 0 4px;
	opacity: 0.6;
}
.rw-badge-cell {
	white-space: nowrap;
	width: 1%;
}
.rw-badge {
	display: inline-block;
	padding: 1px 8px;
	border-radius: var(--border-radius-pill, 16px);
	background: var(--color-primary-element);
	color: var(--color-primary-element-text);
	font-size: 0.8em;
	font-weight: 600;
}
</style>
