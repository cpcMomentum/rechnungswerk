<template>
	<NcModal v-if="open" :name="title" @keydown.esc="e => escCloses(e, () => $emit('close'))" @close="$emit('close')">
		<div class="customer-modal">
			<h2>{{ title }}</h2>

			<div class="form-section">
				<h3>{{ t('rechnungswerk', 'Stammdaten') }}</h3>
				<div class="row">
					<label class="field">
						<span>{{ t('rechnungswerk', 'Kundennr.') }} *</span>
						<input ref="numberInput" v-model="form.customerNumber" class="input" type="text" />
					</label>
					<label class="field">
						<span>{{ t('rechnungswerk', 'Name / Firma') }} *</span>
						<input v-model="form.name" class="input" type="text" />
					</label>
				</div>
				<NcNoteCard v-if="duplicateNumber" type="error"
					:text="t('rechnungswerk', 'Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.', { number: form.customerNumber.trim() })" />
				<div class="row">
					<label class="field">
						<span>{{ t('rechnungswerk', 'USt-IdNr.') }}</span>
						<input v-model="form.vatId" class="input" type="text" />
					</label>
				</div>
			</div>

			<div class="form-section">
				<h3>{{ t('rechnungswerk', 'Anschrift') }}</h3>
				<label class="field">
					<span>{{ t('rechnungswerk', 'Straße & Hausnummer') }}</span>
					<input v-model="form.address" class="input" type="text" />
				</label>
				<div class="row">
					<label class="field">
						<span>{{ t('rechnungswerk', 'PLZ') }}</span>
						<input v-model="form.postalCode" class="input" type="text" />
					</label>
					<label class="field">
						<span>{{ t('rechnungswerk', 'Ort') }}</span>
						<input v-model="form.city" class="input" type="text" />
					</label>
				</div>
				<div class="row">
					<label class="field">
						<span>{{ t('rechnungswerk', 'Land') }}</span>
						<input v-model="form.country" class="input" type="text" maxlength="2" />
					</label>
				</div>
			</div>

			<div class="form-section">
				<h3>{{ t('rechnungswerk', 'Ansprechpartner & Kontakt') }}</h3>
				<div class="row">
					<label class="field">
						<span>{{ t('rechnungswerk', 'Ansprechpartner') }}</span>
						<input v-model="form.contactPerson" class="input" type="text" />
					</label>
					<label class="field">
						<span>{{ t('rechnungswerk', 'Telefon') }}</span>
						<input v-model="form.phone" class="input" type="text" />
					</label>
				</div>
				<label class="field">
					<span>{{ t('rechnungswerk', 'E-Mail (für Rechnungsversand)') }}</span>
					<input v-model="form.email" class="input" type="email" />
				</label>
			</div>

			<div class="form-section">
				<h3>{{ t('rechnungswerk', 'Bankverbindung') }}</h3>
				<label class="field">
					<span>{{ t('rechnungswerk', 'Kontoinhaber') }}</span>
					<input v-model="form.bankAccountHolder" class="input" type="text" />
				</label>
				<div class="row">
					<label class="field">
						<span>{{ t('rechnungswerk', 'IBAN') }}</span>
						<input v-model="form.iban" class="input" type="text" />
					</label>
					<label class="field">
						<span>{{ t('rechnungswerk', 'BIC') }}</span>
						<input v-model="form.bic" class="input" type="text" />
					</label>
				</div>
				<label class="field">
					<span>{{ t('rechnungswerk', 'Bank') }}</span>
					<input v-model="form.bankName" class="input" type="text" />
				</label>
			</div>

			<div class="form-section">
				<h3>{{ t('rechnungswerk', 'Vorgaben für neue Rechnungen') }}</h3>
				<div class="row">
					<label class="field">
						<span>{{ t('rechnungswerk', 'Zahlungsziel (Tage)') }}</span>
						<input v-model="paymentTermInput" class="input" type="number" min="0" inputmode="numeric" />
					</label>
					<label class="field">
						<span>{{ t('rechnungswerk', 'Standard-Steuersatz') }}</span>
						<select v-model="taxRateInput" class="input">
							<option value="">{{ t('rechnungswerk', '— keine Vorgabe —') }}</option>
							<option v-for="bp in TAX_RATES_BP" :key="bp" :value="String(bp)">{{ formatTaxRate(bp) }}</option>
						</select>
					</label>
				</div>
				<label class="field">
					<span>{{ t('rechnungswerk', 'Notiz (intern, nicht auf der Rechnung)') }}</span>
					<textarea v-model="form.note" class="input" rows="2" />
				</label>
			</div>

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
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import { TAX_RATES_BP, type Customer } from '@/types/api'
import type { CustomerCreate } from '@/api/customers'
import { escCloses } from '@/utils/modalEsc'
import { formatTaxRate } from '@/utils/money'

const props = defineProps<{
	open: boolean
	customer: Customer | null
	saving?: boolean
	/** Customer numbers already taken by OTHER customers (lower-cased), for the duplicate guard. */
	takenNumbers?: string[]
	/** Optional prefill (e.g. imported Nextcloud contact) when creating a new customer. */
	prefill?: Partial<CustomerCreate> | null
}>()

const emit = defineEmits<{
	close: []
	save: [data: CustomerCreate]
}>()

const numberInput = ref<HTMLInputElement | null>(null)

type Form = {
	customerNumber: string
	name: string
	vatId: string
	address: string
	postalCode: string
	city: string
	country: string
	contactPerson: string
	phone: string
	email: string
	bankAccountHolder: string
	iban: string
	bic: string
	bankName: string
	note: string
}

const blank = (): Form => ({
	customerNumber: '', name: '', vatId: '', address: '', postalCode: '', city: '',
	country: 'DE', contactPerson: '', phone: '', email: '', bankAccountHolder: '',
	iban: '', bic: '', bankName: '', note: '',
})

const form = reactive<Form>(blank())
const paymentTermInput = ref('')
const taxRateInput = ref('')

const title = computed(() => props.customer
	? t('rechnungswerk', 'Kunde bearbeiten')
	: t('rechnungswerk', 'Kunde anlegen'))

const duplicateNumber = computed(() => {
	const n = form.customerNumber.trim().toLowerCase()
	return n !== '' && (props.takenNumbers ?? []).includes(n)
})

const isValid = computed(() =>
	form.customerNumber.trim() !== '' && form.name.trim() !== '' && !duplicateNumber.value)

watch(() => props.open, (open) => {
	if (!open) {
		return
	}
	const c = props.customer
	Object.assign(form, blank())
	if (c) {
		form.customerNumber = c.customerNumber ?? ''
		form.name = c.name ?? ''
		form.vatId = c.vatId ?? ''
		form.address = c.address ?? ''
		form.postalCode = c.postalCode ?? ''
		form.city = c.city ?? ''
		form.country = c.country ?? 'DE'
		form.contactPerson = c.contactPerson ?? ''
		form.phone = c.phone ?? ''
		form.email = c.email ?? ''
		form.bankAccountHolder = c.bankAccountHolder ?? ''
		form.iban = c.iban ?? ''
		form.bic = c.bic ?? ''
		form.bankName = c.bankName ?? ''
		form.note = c.note ?? ''
		paymentTermInput.value = c.defaultPaymentTermDays != null ? String(c.defaultPaymentTermDays) : ''
		taxRateInput.value = c.defaultTaxRateBp != null ? String(c.defaultTaxRateBp) : ''
	} else if (props.prefill) {
		Object.assign(form, { ...blank(), ...stripNulls(props.prefill) })
	}
	nextTick(() => numberInput.value?.focus())
}, { immediate: true })

function stripNulls(obj: Partial<CustomerCreate>): Record<string, string> {
	const out: Record<string, string> = {}
	for (const [k, v] of Object.entries(obj)) {
		if (typeof v === 'string') {
			out[k] = v
		}
	}
	return out
}

function trimmedOrNull(value: string): string | null {
	const v = value.trim()
	return v === '' ? null : v
}

function onSave() {
	if (!isValid.value) {
		return
	}
	emit('save', {
		customerNumber: form.customerNumber.trim(),
		name: form.name.trim(),
		vatId: trimmedOrNull(form.vatId),
		address: trimmedOrNull(form.address),
		postalCode: trimmedOrNull(form.postalCode),
		city: trimmedOrNull(form.city),
		country: form.country.trim() === '' ? 'DE' : form.country.trim().toUpperCase(),
		contactPerson: trimmedOrNull(form.contactPerson),
		phone: trimmedOrNull(form.phone),
		email: trimmedOrNull(form.email),
		bankAccountHolder: trimmedOrNull(form.bankAccountHolder),
		iban: trimmedOrNull(form.iban),
		bic: trimmedOrNull(form.bic),
		bankName: trimmedOrNull(form.bankName),
		defaultPaymentTermDays: paymentTermInput.value.trim() === '' ? null : Math.max(0, Number(paymentTermInput.value)),
		defaultTaxRateBp: taxRateInput.value === '' ? null : Number(taxRateInput.value),
		note: trimmedOrNull(form.note),
	})
}
</script>

<style scoped>
.customer-modal {
	padding: 4px 22px 18px;
	min-width: 0;
}
.customer-modal h2 {
	margin: 12px 0 4px;
}
/* Sektionen mit Trennlinie, angelehnt an contractmanager ContractForm */
.form-section {
	padding: 16px 0;
	border-top: 1px solid var(--color-border-light, var(--color-border));
}
.form-section:first-of-type {
	border-top: none;
	padding-top: 4px;
}
.form-section > h3 {
	margin: 0 0 14px;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.04em;
	color: var(--color-text-maxcontrast);
}
.field {
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-bottom: 14px;
}
.field > span {
	font-weight: 600;
	font-size: 0.9em;
}
.row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 14px;
	margin-bottom: 14px;
}
.row .field {
	margin-bottom: 0;
}
.form-section > :last-child {
	margin-bottom: 0;
}
.input {
	width: 100%;
	box-sizing: border-box;
}
.actions {
	display: flex;
	justify-content: flex-end;
	gap: 8px;
	padding-top: 16px;
	margin-top: 4px;
	border-top: 1px solid var(--color-border-light, var(--color-border));
}
</style>
