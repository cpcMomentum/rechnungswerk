<template>
	<NcModal v-if="open" :name="title" @keydown.esc="e => escCloses(e, () => $emit('close'))" @close="$emit('close')">
		<div class="send-modal">
			<h2>{{ title }}</h2>
			<p class="send-modal__hint">{{ hint }}</p>

			<label class="field">
				<span>{{ t('rechnungswerk', 'Empfänger-E-Mail') }} *</span>
				<input ref="toInput" v-model="form.to" class="input" type="email" />
			</label>

			<label class="field">
				<span>{{ t('rechnungswerk', 'Betreff') }} *</span>
				<input v-model="form.subject" class="input" type="text" />
			</label>

			<label class="field">
				<span>{{ t('rechnungswerk', 'Nachricht') }}</span>
				<textarea v-model="form.body" class="input" rows="6" />
			</label>

			<div class="actions">
				<NcButton @click="$emit('close')">{{ t('rechnungswerk', 'Abbrechen') }}</NcButton>
				<NcButton variant="primary" :disabled="saving || !isValid" @click="onSend">
					<template #icon><SendIcon :size="20" /></template>
					{{ t('rechnungswerk', 'Senden') }}
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
import SendIcon from 'vue-material-design-icons/Send.vue'
import type { InvoiceDetail } from '@/types/api'
import { escCloses } from '@/utils/modalEsc'

const props = defineProps<{
	open: boolean
	invoice: InvoiceDetail | null
	defaultBody: string
	saving?: boolean
	/** Wording of the dialog: an invoice (default) or a quote (#111). */
	kind?: 'invoice' | 'quote'
}>()

const isQuote = computed(() => props.kind === 'quote')
const title = computed(() => isQuote.value
	? t('rechnungswerk', 'Angebot an Kunde senden')
	: t('rechnungswerk', 'Rechnung an Kunde senden'))
const hint = computed(() => isQuote.value
	? t('rechnungswerk', 'Das Angebot wird als PDF angehängt.')
	: t('rechnungswerk', 'Die E-Rechnung wird als ZUGFeRD-PDF angehängt.'))

const emit = defineEmits<{
	close: []
	send: [data: { to: string, subject: string, body: string }]
}>()

const toInput = ref<HTMLInputElement | null>(null)

const form = reactive<{ to: string, subject: string, body: string }>({
	to: '',
	subject: '',
	body: '',
})

const isValid = computed(() => /\S+@\S+\.\S+/.test(form.to.trim()) && form.subject.trim() !== '')

watch(() => props.open, (open) => {
	if (!open) {
		return
	}
	const inv = props.invoice
	form.to = inv?.recipientEmail ?? ''
	if (isQuote.value) {
		form.subject = inv?.number
			? t('rechnungswerk', 'Angebot {number}', { number: inv.number })
			: t('rechnungswerk', 'Ihr Angebot')
	} else {
		form.subject = inv?.number
			? t('rechnungswerk', 'Rechnung {number}', { number: inv.number })
			: t('rechnungswerk', 'Ihre Rechnung')
	}
	form.body = props.defaultBody
	nextTick(() => toInput.value?.focus())
}, { immediate: true })

function onSend() {
	if (!isValid.value) {
		return
	}
	emit('send', {
		to: form.to.trim(),
		subject: form.subject.trim(),
		body: form.body,
	})
}
</script>

<style scoped>
.send-modal {
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	min-width: 0;
}
.send-modal h2 {
	margin: 0;
}
.send-modal__hint {
	margin: 0 0 4px;
	color: var(--color-text-maxcontrast);
	font-size: 0.9em;
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
.input {
	width: 100%;
	box-sizing: border-box;
}
.actions {
	display: flex;
	justify-content: flex-end;
	gap: 8px;
	margin-top: 12px;
}
</style>
