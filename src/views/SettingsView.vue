<template>
	<div class="rechnungswerk-view">
		<h2>{{ t('rechnungswerk', 'Einstellungen') }}</h2>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<div v-if="form" class="settings-form">
			<!-- Firma -->
			<section class="settings-section">
				<h3>{{ t('rechnungswerk', 'Firma') }}</h3>
				<label class="field"><span>{{ t('rechnungswerk', 'Firmenname') }}</span>
					<input v-model="form.companyName" class="input" type="text" /></label>
				<label class="field"><span>{{ t('rechnungswerk', 'Adresse') }}</span>
					<textarea v-model="form.companyAddress" class="input" rows="3" /></label>
				<div class="field-row">
					<label class="field"><span>{{ t('rechnungswerk', 'USt-IdNr.') }}</span>
						<input v-model="form.vatId" class="input" type="text" /></label>
					<label class="field"><span>{{ t('rechnungswerk', 'Steuernummer') }}</span>
						<input v-model="form.taxNumber" class="input" type="text" /></label>
				</div>
			</section>

			<!-- Bank -->
			<section class="settings-section">
				<h3>{{ t('rechnungswerk', 'Bankverbindung') }}</h3>
				<div class="field-row">
					<label class="field"><span>{{ t('rechnungswerk', 'IBAN') }}</span>
						<input v-model="form.iban" class="input" type="text" /></label>
					<label class="field"><span>{{ t('rechnungswerk', 'BIC') }}</span>
						<input v-model="form.bic" class="input" type="text" /></label>
				</div>
				<label class="field"><span>{{ t('rechnungswerk', 'Bankname') }}</span>
					<input v-model="form.bankName" class="input" type="text" /></label>
			</section>

			<!-- Branding -->
			<section class="settings-section">
				<h3>{{ t('rechnungswerk', 'Branding') }}</h3>
				<label class="field field--inline"><span>{{ t('rechnungswerk', 'Akzentfarbe') }}</span>
					<input v-model="form.accentColor" class="color-input" type="color" /></label>
				<p class="hint">{{ t('rechnungswerk', 'Das Firmenlogo wird mit der PDF-Erzeugung in einer späteren Iteration ergänzt.') }}</p>
			</section>

			<!-- Rechnungsnummer -->
			<section class="settings-section">
				<h3>{{ t('rechnungswerk', 'Rechnungsnummer') }}</h3>
				<label class="field"><span>{{ t('rechnungswerk', 'Format') }}</span>
					<input v-model="form.numberFormat" class="input" type="text" /></label>
				<p class="hint">
					{{ t('rechnungswerk', 'Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {####} fortlaufender Zähler.') }}
					<br>
					{{ t('rechnungswerk', 'Vorschau: {preview}', { preview }) }}
				</p>
			</section>

			<!-- Steuer -->
			<section class="settings-section">
				<h3>{{ t('rechnungswerk', 'Steuer') }}</h3>
				<NcCheckboxRadioSwitch
					type="switch"
					:model-value="form.smallBusiness"
					@update:model-value="onToggleSmallBusiness">
					{{ t('rechnungswerk', 'Kleinunternehmer nach §19 UStG (kein USt-Ausweis)') }}
				</NcCheckboxRadioSwitch>
				<label v-if="!form.smallBusiness" class="field" style="margin-top: 12px;">
					<span>{{ t('rechnungswerk', 'Standard-USt-Satz') }}</span>
					<select v-model.number="form.defaultTaxRateBp" class="input">
						<option v-for="bp in TAX_RATES_BP" :key="bp" :value="bp">{{ formatTaxRate(bp) }}</option>
					</select>
				</label>
			</section>

			<!-- Versand -->
			<section class="settings-section">
				<h3>{{ t('rechnungswerk', 'Versand') }}</h3>
				<label class="field"><span>{{ t('rechnungswerk', 'DATEV-Upload-Mail') }}</span>
					<input v-model="form.datevUploadMail" class="input" type="email" /></label>
				<div class="field-row">
					<label class="field"><span>{{ t('rechnungswerk', 'Absender-Name') }}</span>
						<input v-model="form.smtpFromName" class="input" type="text" /></label>
					<label class="field"><span>{{ t('rechnungswerk', 'Absender-E-Mail') }}</span>
						<input v-model="form.smtpFromEmail" class="input" type="email" /></label>
				</div>
			</section>

			<!-- Standardtexte -->
			<section class="settings-section">
				<h3>{{ t('rechnungswerk', 'Standardtexte') }}</h3>
				<label class="field"><span>{{ t('rechnungswerk', 'Anrede') }}</span>
					<textarea v-model="form.greetingDefault" class="input" rows="2" /></label>
				<label class="field"><span>{{ t('rechnungswerk', 'Einleitung') }}</span>
					<textarea v-model="form.introDefault" class="input" rows="2" /></label>
				<label class="field"><span>{{ t('rechnungswerk', 'Schlusstext') }}</span>
					<textarea v-model="form.closingDefault" class="input" rows="2" /></label>
			</section>

			<div class="save-bar">
				<NcButton variant="primary" :disabled="store.saving" @click="onSave">
					<template #icon><ContentSaveIcon :size="20" /></template>
					{{ t('rechnungswerk', 'Speichern') }}
				</NcButton>
			</div>
		</div>

		<ConfirmDialog
			:open="confirmSmallBusiness"
			:name="t('rechnungswerk', 'Kleinunternehmer §19 aktivieren')"
			:message="t('rechnungswerk', 'Damit werden künftige Rechnungen ohne Umsatzsteuer ausgewiesen (§19 UStG). Bestehende festgeschriebene Rechnungen bleiben unverändert. Fortfahren?')"
			:confirm-label="t('rechnungswerk', 'Aktivieren')"
			@close="confirmSmallBusiness = false"
			@confirm="applySmallBusiness" />
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcCheckboxRadioSwitch from '@nextcloud/vue/components/NcCheckboxRadioSwitch'
import ContentSaveIcon from 'vue-material-design-icons/ContentSave.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import { useSettingsStore } from '@/stores/settingsStore'
import { TAX_RATES_BP, type Settings } from '@/types/api'
import type { SettingsSave } from '@/api/settings'
import { formatTaxRate } from '@/utils/money'
import { previewInvoiceNumber } from '@/utils/invoiceNumber'

type SettingsForm = Omit<Settings, 'id' | 'numberCounter' | 'numberCounterYear'>

const store = useSettingsStore()
const form = ref<SettingsForm | null>(null)
const error = ref('')
const confirmSmallBusiness = ref(false)
const currentCounter = ref(0)
const currentYear = ref(new Date().getFullYear())
const currentYearFromSettings = ref<number | null>(null)

const preview = computed(() => {
	if (!form.value) {
		return ''
	}
	const next = (currentYear.value === currentYearFromSettings.value ? currentCounter.value : 0) + 1
	return previewInvoiceNumber(form.value.numberFormat || 'RE-{YYYY}-{####}', next, currentYear.value)
})

onMounted(async () => {
	try {
		await store.fetch()
		hydrate()
	} catch (e) {
		fail(e, t('rechnungswerk', 'Laden fehlgeschlagen'))
	}
})

function hydrate() {
	const s = store.settings
	if (!s) {
		return
	}
	currentCounter.value = s.numberCounter
	currentYearFromSettings.value = s.numberCounterYear
	form.value = {
		companyName: s.companyName,
		companyAddress: s.companyAddress,
		vatId: s.vatId,
		taxNumber: s.taxNumber,
		iban: s.iban,
		bic: s.bic,
		bankName: s.bankName,
		logoFileId: s.logoFileId,
		accentColor: s.accentColor,
		numberFormat: s.numberFormat,
		smallBusiness: s.smallBusiness,
		defaultTaxRateBp: s.defaultTaxRateBp,
		datevUploadMail: s.datevUploadMail,
		smtpFromName: s.smtpFromName,
		smtpFromEmail: s.smtpFromEmail,
		greetingDefault: s.greetingDefault,
		introDefault: s.introDefault,
		closingDefault: s.closingDefault,
	}
}

function onToggleSmallBusiness(value: boolean) {
	if (!form.value) {
		return
	}
	if (value) {
		confirmSmallBusiness.value = true
	} else {
		form.value.smallBusiness = false
	}
}

function applySmallBusiness() {
	confirmSmallBusiness.value = false
	if (form.value) {
		form.value.smallBusiness = true
	}
}

async function onSave() {
	if (!form.value) {
		return
	}
	error.value = ''
	try {
		await store.save(form.value as SettingsSave)
		hydrate()
	} catch (e) {
		fail(e, t('rechnungswerk', 'Speichern fehlgeschlagen'))
	}
}

function fail(e: unknown, fallback: string) {
	error.value = (e as { message?: string }).message ?? fallback
	console.error('[rechnungswerk] settings:', e)
}
</script>

<style scoped>
.rechnungswerk-view {
	padding: 20px;
	padding-left: 50px;
	max-width: 760px;
}
.settings-form {
	display: flex;
	flex-direction: column;
	gap: 28px;
}
.settings-section {
	display: flex;
	flex-direction: column;
	gap: 12px;
}
.settings-section h3 {
	margin: 0 0 4px;
	padding-bottom: 6px;
	border-bottom: 1px solid var(--color-border);
}
.field {
	display: flex;
	flex-direction: column;
	gap: 4px;
}
.field--inline {
	flex-direction: row;
	align-items: center;
	gap: 12px;
}
.field > span {
	font-weight: 600;
	font-size: 0.9em;
}
.field-row {
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
}
.field-row .field {
	flex: 1 1 200px;
}
.input {
	width: 100%;
	box-sizing: border-box;
}
.color-input {
	width: 48px;
	height: 32px;
	padding: 0;
	border: none;
	background: none;
	cursor: pointer;
}
.hint {
	color: var(--color-text-maxcontrast);
	font-size: 0.9em;
	margin: 0;
}
.save-bar {
	position: sticky;
	bottom: 0;
	display: flex;
	justify-content: flex-end;
	padding: 12px 0;
	background: var(--color-main-background);
	border-top: 1px solid var(--color-border);
}
</style>
