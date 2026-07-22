<template>
	<NcModal v-if="open" :name="title" @keydown.esc="e => escCloses(e, () => $emit('close'))" @close="$emit('close')">
		<div class="snippet-modal">
			<h2>{{ title }}</h2>

			<label class="field">
				<span>{{ t('rechnungswerk', 'Name') }} *</span>
				<input ref="nameInput" v-model="form.label" class="input" type="text"
					:placeholder="t('rechnungswerk', 'z. B. Neukunde, Mahnfreundlich')" />
			</label>

			<div class="field-row">
				<label class="field">
					<span>{{ t('rechnungswerk', 'Dokument') }}</span>
					<select v-model="form.docType" class="input">
						<option v-for="dt in SNIPPET_DOC_TYPES" :key="dt" :value="dt">
							{{ t('rechnungswerk', SNIPPET_DOC_TYPE_LABELS[dt]) }}
						</option>
					</select>
				</label>

				<label class="field">
					<span>{{ t('rechnungswerk', 'Textbereich') }}</span>
					<select v-model="form.slot" class="input">
						<option v-for="sl in SNIPPET_SLOTS" :key="sl" :value="sl">
							{{ t('rechnungswerk', SNIPPET_SLOT_LABELS[sl]) }}
						</option>
					</select>
				</label>
			</div>

			<label class="field">
				<span>{{ t('rechnungswerk', 'Text') }}</span>
				<textarea v-model="form.content" class="input" rows="6" />
			</label>

			<NcCheckboxRadioSwitch :model-value="form.isDefault" @update:model-value="(v) => form.isDefault = v">
				{{ t('rechnungswerk', 'Als Standard für neue Dokumente verwenden') }}
			</NcCheckboxRadioSwitch>
			<p class="hint">{{ t('rechnungswerk', 'Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.') }}</p>

			<div class="actions">
				<NcButton @click="$emit('close')">{{ t('rechnungswerk', 'Abbrechen') }}</NcButton>
				<NcButton variant="primary" :disabled="saving || !isValid" @click="onSave">
					{{ t('rechnungswerk', 'Speichern') }}
				</NcButton>
			</div>
		</div>
	</NcModal>
</template>

<script setup lang="ts">
import { computed, nextTick, reactive, ref, watch } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcModal from '@nextcloud/vue/components/NcModal'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcCheckboxRadioSwitch from '@nextcloud/vue/components/NcCheckboxRadioSwitch'
import {
	SNIPPET_DOC_TYPE_LABELS,
	SNIPPET_SLOT_LABELS,
	type SnippetDocType,
	type SnippetSlot,
	type TextSnippet,
} from '@/types/api'
import type { TextSnippetCreate } from '@/api/textSnippets'
import { escCloses } from '@/utils/modalEsc'

const SNIPPET_DOC_TYPES: SnippetDocType[] = ['invoice', 'quote']
const SNIPPET_SLOTS: SnippetSlot[] = ['opening', 'closing']

const props = defineProps<{
	open: boolean
	snippet: TextSnippet | null
	saving?: boolean
}>()

const emit = defineEmits<{
	close: []
	save: [data: TextSnippetCreate]
}>()

const nameInput = ref<HTMLInputElement | null>(null)

const form = reactive<{ label: string, docType: SnippetDocType, slot: SnippetSlot, content: string, isDefault: boolean }>({
	label: '',
	docType: 'invoice',
	slot: 'opening',
	content: '',
	isDefault: false,
})

const title = computed(() => props.snippet
	? t('rechnungswerk', 'Textbaustein bearbeiten')
	: t('rechnungswerk', 'Textbaustein anlegen'))

const isValid = computed(() => form.label.trim() !== '')

watch(() => props.open, (open) => {
	if (!open) {
		return
	}
	const s = props.snippet
	form.label = s?.label ?? ''
	form.docType = s?.docType ?? 'invoice'
	form.slot = s?.slot ?? 'opening'
	form.content = s?.content ?? ''
	form.isDefault = s?.isDefault ?? false
	nextTick(() => nameInput.value?.focus())
}, { immediate: true })

function onSave() {
	if (!isValid.value) {
		return
	}
	emit('save', {
		label: form.label.trim(),
		docType: form.docType,
		slot: form.slot,
		content: form.content.trim() === '' ? null : form.content,
		isDefault: form.isDefault,
	})
}
</script>

<style scoped>
.snippet-modal {
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	min-width: 0;
}
.snippet-modal h2 {
	margin: 0 0 8px;
}
.field {
	display: flex;
	flex-direction: column;
	gap: 4px;
}
.field > span {
	font-weight: 600;
	font-size: 0.9em;
}
.field-row {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}
.field-row .field {
	flex: 1 1 160px;
}
.input {
	width: 100%;
	box-sizing: border-box;
}
.hint {
	font-size: 0.85em;
	color: var(--color-text-maxcontrast);
	margin: 0;
}
.actions {
	display: flex;
	justify-content: flex-end;
	gap: 8px;
	margin-top: 12px;
}
</style>
