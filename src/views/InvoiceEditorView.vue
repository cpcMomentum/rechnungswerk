<template>
	<div class="rechnungswerk-view editor">
		<div class="editor-top">
			<NcButton variant="tertiary" @click="backToList">
				<template #icon><ArrowLeftIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Zurück') }}
			</NcButton>
			<h2>
				{{ headerTitle }}
				<span v-if="invoice" :class="['chip', `chip--${invoice.status}`]">{{ statusLabel }}</span>
			</h2>
		</div>

		<NcNoteCard v-if="error" type="error" :text="error" />
		<NcNoteCard v-if="readonly" type="info"
			:text="t('rechnungswerk', 'Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.')" />

		<!-- Rechnungsdaten -->
		<section class="section">
			<h3>{{ t('rechnungswerk', 'Rechnungsdaten') }}</h3>
			<div class="form-row">
				<label class="field"><span>{{ t('rechnungswerk', 'Rechnungsnummer') }}</span>
					<input class="input" type="text" readonly :value="invoice?.number ?? t('rechnungswerk', '(wird beim Festschreiben vergeben)')" /></label>
				<label class="field"><span>{{ t('rechnungswerk', 'Leistungsdatum') }}</span>
					<input v-model="form.performanceDate" class="input" type="date" :readonly="readonly" /></label>
			</div>
			<details class="more">
				<summary>{{ t('rechnungswerk', 'Weitere Felder (Referenz, Bestellnummer, Leitweg-ID)') }}</summary>
				<div class="form-row">
					<label class="field"><span>{{ t('rechnungswerk', 'Referenznummer') }}</span>
						<input v-model="form.referenceNumber" class="input" type="text" :readonly="readonly" /></label>
					<label class="field"><span>{{ t('rechnungswerk', 'Bestellnummer') }}</span>
						<input v-model="form.orderNumber" class="input" type="text" :readonly="readonly" /></label>
					<label class="field"><span>{{ t('rechnungswerk', 'Käuferreferenz / Leitweg-ID (BT-10)') }}</span>
						<input v-model="form.buyerReference" class="input" type="text" :readonly="readonly"
							:placeholder="t('rechnungswerk', 'nur für öffentliche Auftraggeber')" /></label>
				</div>
			</details>
		</section>

		<!-- Empfänger -->
		<section class="section">
			<h3>{{ t('rechnungswerk', 'Empfänger') }}</h3>
			<div class="form-row">
				<label class="field"><span>{{ t('rechnungswerk', 'Name') }}</span>
					<ContactPicker v-if="!readonly" v-model="form.recipientName" @select="onContactSelect" />
					<input v-else class="input" type="text" readonly :value="form.recipientName" /></label>
				<label class="field"><span>{{ t('rechnungswerk', 'E-Mail') }}</span>
					<input v-model="form.recipientEmail" class="input" type="email" :readonly="readonly" /></label>
			</div>
			<div class="form-row">
				<label class="field"><span>{{ t('rechnungswerk', 'Straße') }}</span>
					<input v-model="form.recipientAddress" class="input" type="text" :readonly="readonly" /></label>
				<label class="field field--narrow"><span>{{ t('rechnungswerk', 'PLZ') }}</span>
					<input v-model="form.recipientPostalCode" class="input" type="text" :readonly="readonly" /></label>
				<label class="field"><span>{{ t('rechnungswerk', 'Ort') }}</span>
					<input v-model="form.recipientCity" class="input" type="text" :readonly="readonly" /></label>
				<label class="field field--narrow"><span>{{ t('rechnungswerk', 'Land') }}</span>
					<input v-model="form.recipientCountry" class="input" type="text" :readonly="readonly" /></label>
			</div>
			<label class="field"><span>{{ t('rechnungswerk', 'USt-IdNr. (optional)') }}</span>
				<input v-model="form.recipientVatId" class="input" type="text" :readonly="readonly" /></label>
		</section>

		<!-- Positionen -->
		<section class="section">
			<h3>{{ t('rechnungswerk', 'Positionen') }}</h3>
			<InvoiceItemsTable
				v-model:items="items"
				:products="productStore.products"
				:readonly="readonly"
				:small-business="settingsStore.settings?.smallBusiness ?? false"
				:default-tax-rate-bp="settingsStore.settings?.defaultTaxRateBp ?? 1900" />
		</section>

		<!-- Steuer & Summen -->
		<section class="section">
			<h3>{{ t('rechnungswerk', 'Steuer & Summen') }}</h3>
			<div class="totals">
				<div class="totals__rows">
					<div class="totals__row">
						<span>{{ t('rechnungswerk', 'Zwischensumme (netto)') }}</span>
						<strong>{{ formatCents(totals.subtotalCents) }}</strong>
					</div>
					<div v-for="row in totals.taxBreakdown" :key="row.rateBp" class="totals__row muted">
						<span>{{ t('rechnungswerk', 'USt {rate}', { rate: formatTaxRate(row.rateBp) }) }} ({{ formatCents(row.netCents) }})</span>
						<span>{{ formatCents(row.taxCents) }}</span>
					</div>
					<div class="totals__row totals__row--grand">
						<span>{{ t('rechnungswerk', 'Gesamt (brutto)') }}</span>
						<strong>{{ formatCents(totals.totalCents) }}</strong>
					</div>
				</div>
			</div>
		</section>

		<!-- Texte -->
		<section class="section">
			<h3>{{ t('rechnungswerk', 'Texte') }}</h3>
			<label class="field"><span>{{ t('rechnungswerk', 'Anrede / Einleitung') }}</span>
				<textarea v-model="form.greeting" class="input" rows="2" :readonly="readonly" /></label>
			<label class="field"><span>{{ t('rechnungswerk', 'Schlusstext / Anmerkungen') }}</span>
				<textarea v-model="form.extraText" class="input" rows="2" :readonly="readonly" /></label>
		</section>

		<!-- Sticky actions -->
		<div class="action-bar">
			<template v-if="!readonly">
				<NcButton :disabled="saving" @click="save()">{{ t('rechnungswerk', 'Speichern') }}</NcButton>
				<NcButton variant="primary" :disabled="saving" @click="askFinalize">
					<template #icon><LockIcon :size="20" /></template>
					{{ t('rechnungswerk', 'Festschreiben') }}
				</NcButton>
				<NcButton v-if="invoice" variant="error" :disabled="saving" @click="askDelete">
					{{ t('rechnungswerk', 'Löschen') }}
				</NcButton>
			</template>
			<template v-else-if="invoice && invoice.status === 'committed'">
				<NcButton variant="error" :disabled="saving" @click="askCancel">
					{{ t('rechnungswerk', 'Stornieren') }}
				</NcButton>
			</template>
		</div>

		<ConfirmDialog :open="dialog === 'finalize'"
			:name="t('rechnungswerk', 'Rechnung festschreiben')"
			:message="t('rechnungswerk', 'Die Rechnung erhält eine endgültige Nummer und ist danach unveränderbar. Korrektur nur per Storno. Fortfahren?')"
			:confirm-label="t('rechnungswerk', 'Festschreiben')"
			@close="dialog = null" @confirm="doFinalize" />
		<ConfirmDialog :open="dialog === 'delete'"
			:name="t('rechnungswerk', 'Entwurf löschen')"
			:message="t('rechnungswerk', 'Diesen Entwurf wirklich löschen?')"
			:confirm-label="t('rechnungswerk', 'Löschen')" destructive
			@close="dialog = null" @confirm="doDelete" />
		<ConfirmDialog :open="dialog === 'cancel'"
			:name="t('rechnungswerk', 'Rechnung stornieren')"
			:message="t('rechnungswerk', 'Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?')"
			:confirm-label="t('rechnungswerk', 'Stornieren')" destructive
			@close="dialog = null" @confirm="doCancel" />
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'
import LockIcon from 'vue-material-design-icons/Lock.vue'
import ContactPicker from '@/components/ContactPicker.vue'
import InvoiceItemsTable from '@/components/InvoiceItemsTable.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { useProductStore } from '@/stores/productStore'
import { useSettingsStore } from '@/stores/settingsStore'
import { INVOICE_STATUS_LABELS, type ContactMatch, type InvoiceDetail } from '@/types/api'
import { emptyItem, itemFromInvoiceItem, type EditorItem } from '@/types/editor'
import { formatCents, formatTaxRate, euroInputToCents } from '@/utils/money'
import { computeTotals, lineTotalCents } from '@/utils/invoiceCalc'
import type { InvoiceInput } from '@/api/invoices'

const props = defineProps<{ id?: string }>()
const router = useRouter()
const invoiceStore = useInvoiceStore()
const productStore = useProductStore()
const settingsStore = useSettingsStore()

const invoice = ref<InvoiceDetail | null>(null)
const items = ref<EditorItem[]>([emptyItem()])
const error = ref('')
const saving = ref(false)
const dialog = ref<'finalize' | 'delete' | 'cancel' | null>(null)

const form = reactive({
	recipientName: '', recipientEmail: '', recipientAddress: '', recipientPostalCode: '',
	recipientCity: '', recipientCountry: 'DE', recipientVatId: '', recipientContactId: '',
	performanceDate: '', referenceNumber: '', orderNumber: '', buyerReference: '',
	greeting: '', extraText: '',
})

const readonly = computed(() => invoice.value !== null && invoice.value.status !== 'draft')
const statusLabel = computed(() => invoice.value ? t('rechnungswerk', INVOICE_STATUS_LABELS[invoice.value.status]) : '')
const headerTitle = computed(() => invoice.value
	? (invoice.value.number ?? t('rechnungswerk', 'Entwurf'))
	: t('rechnungswerk', 'Neue Rechnung'))

const totals = computed(() => computeTotals(items.value.map(i => ({
	taxRateBp: i.taxRateBp,
	lineTotalCents: lineTotalCents(i.quantity, euroInputToCents(i.priceInput)),
}))))

onMounted(async () => {
	try {
		await Promise.all([productStore.fetchAll(), settingsStore.fetch()])
		if (props.id) {
			await load(Number(props.id))
		} else {
			form.greeting = settingsStore.settings?.greetingDefault ?? ''
			form.extraText = settingsStore.settings?.closingDefault ?? ''
		}
	} catch (e) {
		fail(e, t('rechnungswerk', 'Laden fehlgeschlagen'))
	}
})

async function load(id: number) {
	const detail = await invoiceStore.get(id)
	invoice.value = detail
	form.recipientName = detail.recipientName ?? ''
	form.recipientEmail = detail.recipientEmail ?? ''
	form.recipientAddress = detail.recipientAddress ?? ''
	form.recipientPostalCode = detail.recipientPostalCode ?? ''
	form.recipientCity = detail.recipientCity ?? ''
	form.recipientCountry = detail.recipientCountry ?? 'DE'
	form.recipientVatId = detail.recipientVatId ?? ''
	form.recipientContactId = detail.recipientContactId ?? ''
	form.performanceDate = detail.performanceDate ?? ''
	form.referenceNumber = detail.referenceNumber ?? ''
	form.orderNumber = detail.orderNumber ?? ''
	form.buyerReference = detail.buyerReference ?? ''
	form.greeting = detail.greeting ?? ''
	form.extraText = detail.extraText ?? ''
	items.value = detail.items.length > 0 ? detail.items.map(itemFromInvoiceItem) : [emptyItem()]
}

function onContactSelect(c: ContactMatch) {
	form.recipientName = c.name
	form.recipientEmail = c.email
	form.recipientAddress = c.address
	form.recipientPostalCode = c.postalCode
	form.recipientCity = c.city
	if (c.country) {
		form.recipientCountry = c.country
	}
}

function buildInput(): InvoiceInput {
	return {
		...form,
		items: items.value
			.filter(i => i.name.trim() !== '')
			.map(i => ({
				productId: i.productId,
				name: i.name.trim(),
				description: i.description.trim() === '' ? null : i.description.trim(),
				quantity: String(i.quantity).replace(',', '.'),
				unitCode: i.unitCode,
				unitPriceCents: euroInputToCents(i.priceInput),
				taxRateBp: i.taxRateBp,
			})),
	}
}

async function save(): Promise<InvoiceDetail | null> {
	error.value = ''
	saving.value = true
	try {
		let detail: InvoiceDetail
		if (invoice.value) {
			detail = await invoiceStore.update(invoice.value.id, buildInput())
		} else {
			detail = await invoiceStore.create(buildInput())
			router.replace({ name: 'invoice-detail', params: { id: String(detail.id) } })
		}
		invoice.value = detail
		return detail
	} catch (e) {
		fail(e, t('rechnungswerk', 'Speichern fehlgeschlagen'))
		return null
	} finally {
		saving.value = false
	}
}

function askFinalize() {
	dialog.value = 'finalize'
}
function askDelete() {
	dialog.value = 'delete'
}
function askCancel() {
	dialog.value = 'cancel'
}

async function doFinalize() {
	dialog.value = null
	const saved = await save()
	if (!saved) {
		return
	}
	saving.value = true
	try {
		invoice.value = await invoiceStore.commit(saved.id)
	} catch (e) {
		fail(e, t('rechnungswerk', 'Festschreiben fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

async function doDelete() {
	dialog.value = null
	if (!invoice.value) {
		backToList()
		return
	}
	saving.value = true
	try {
		await invoiceStore.remove(invoice.value.id)
		backToList()
	} catch (e) {
		fail(e, t('rechnungswerk', 'Löschen fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

async function doCancel() {
	dialog.value = null
	if (!invoice.value) {
		return
	}
	saving.value = true
	try {
		const storno = await invoiceStore.cancel(invoice.value.id)
		await load(storno.id)
	} catch (e) {
		fail(e, t('rechnungswerk', 'Stornieren fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

function backToList() {
	router.push({ name: 'invoices' })
}

function fail(e: unknown, fallback: string) {
	error.value = (e as { message?: string }).message ?? fallback
	console.error('[rechnungswerk] editor:', e)
}
</script>

<style scoped>
.rechnungswerk-view {
	padding: 20px;
	padding-left: 50px;
	max-width: 900px;
	padding-bottom: 80px;
}
.editor-top {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 12px;
}
.editor-top h2 {
	margin: 0;
	display: flex;
	align-items: center;
	gap: 12px;
}
.section {
	margin-bottom: 28px;
}
.section h3 {
	margin: 0 0 12px;
	padding-bottom: 6px;
	border-bottom: 1px solid var(--color-border);
}
.form-row {
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	margin-bottom: 12px;
}
.field {
	display: flex;
	flex-direction: column;
	gap: 4px;
	flex: 1 1 220px;
}
.field--narrow {
	flex: 0 1 120px;
}
.field > span {
	font-weight: 600;
	font-size: 0.9em;
}
.input {
	width: 100%;
	box-sizing: border-box;
}
.more {
	margin-top: 8px;
}
.more summary {
	cursor: pointer;
	color: var(--color-text-maxcontrast);
	margin-bottom: 12px;
}
.totals {
	display: flex;
	justify-content: flex-end;
}
.totals__rows {
	min-width: 320px;
}
.totals__row {
	display: flex;
	justify-content: space-between;
	padding: 6px 0;
}
.totals__row.muted {
	color: var(--color-text-maxcontrast);
	font-size: 0.92em;
}
.totals__row--grand {
	border-top: 2px solid var(--color-border);
	margin-top: 4px;
	font-size: 1.1em;
}
.action-bar {
	position: sticky;
	bottom: 0;
	display: flex;
	justify-content: flex-end;
	gap: 8px;
	padding: 12px 0;
	background: var(--color-main-background);
	border-top: 1px solid var(--color-border);
}
.chip {
	display: inline-block;
	padding: 2px 10px;
	border-radius: 12px;
	font-size: 0.6em;
	font-weight: 600;
	color: #fff;
	vertical-align: middle;
}
.chip--draft { background: #6c757d; }
.chip--committed { background: #2d7d46; }
.chip--cancelled { background: #c62828; }
</style>
