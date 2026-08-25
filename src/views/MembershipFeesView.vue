<template>
	<div class="membership-fees">
		<header class="page-header">
			<div>
				<div class="title-row">
					<h2>Beitragsabrechnung</h2>

					<span
						v-if="run"
						class="status-badge"
						:class="`status-badge--${run.status}`">
						{{ runStatusLabel }}
					</span>

					<span
						v-else
						class="status-badge status-badge--new">
						Neues Beitragsjahr
					</span>
				</div>

				<p>
					Jahresbeiträge konfigurieren, prüfen und
					Beitragsrechnungen erstellen.
				</p>
			</div>
		</header>

		<div v-if="loading" class="loading">
			<NcLoadingIcon :size="44" />
		</div>

		<template v-else>
			<div
				v-if="message"
				class="message"
				:class="`message--${messageType}`">
				{{ message }}
			</div>

			<section class="card">
				<div class="section-header">
					<div>
						<h3>Jahresabrechnung</h3>
						<p>
							Beitragsjahr und Vereinsgruppe auswählen.
						</p>
					</div>
				</div>

				<div class="selector-grid">
					<label class="field">
						<span>Beitragsjahr</span>

						<div class="field-with-button">
							<input
								v-model.number="year"
								type="number"
								min="2000"
								max="2100"
								@keyup.enter="loadConfiguration">

							<NcButton
								variant="secondary"
								:disabled="busy"
								@click="loadConfiguration">
								Laden
							</NcButton>
						</div>
					</label>

					<label class="field">
						<span>Vereinsgruppe</span>
						<input
							v-model.trim="group"
							type="text"
							:disabled="busy"
							@keyup.enter="loadConfiguration">
					</label>
				</div>

				<div
					v-if="isLocked"
					class="locked-info">
					<strong>Diese Beitragsabrechnung ist gesperrt.</strong>
					Die Rechnungsentwürfe wurden bereits erzeugt.
					Die Beitragskonfiguration kann deshalb nicht mehr
					verändert werden.
				</div>

				<div
					v-else-if="!hasConfiguration"
					class="new-info">
					Für {{ year }} und die Gruppe {{ group }} besteht noch
					keine Beitragsabrechnung. Du kannst jetzt einen neuen
					Entwurf anlegen.
				</div>
			</section>

			<section class="card">
				<div class="section-header">
					<div>
						<h3>Rechnungsdaten</h3>
						<p>
							Grunddaten für alle Beitragsrechnungen dieses Jahres.
						</p>
					</div>
				</div>

				<div class="form-grid">
					<label class="field field--wide">
						<span>Rechnungstext</span>
						<input
							v-model="invoiceText"
							type="text"
							:disabled="formDisabled"
							placeholder="Mitgliedsbeitrag 2026">
					</label>

					<label class="field">
						<span>Rechnungsdatum</span>
						<input
							v-model="issueDate"
							type="date"
							:disabled="formDisabled"
							@change="recalculateDueDate">
					</label>

					<label class="field">
						<span>Zahlungsziel in Tagen</span>
						<input
							v-model.number="paymentTermDays"
							type="number"
							min="0"
							max="365"
							:disabled="formDisabled"
							@change="recalculateDueDate">
					</label>

					<label class="field">
						<span>Fällig am</span>
						<input
							v-model="dueDate"
							type="date"
							:disabled="formDisabled">
					</label>

					<label class="field">
						<span>Währung</span>
						<input
							v-model="currency"
							type="text"
							maxlength="3"
							:disabled="formDisabled">
					</label>

					<label class="field">
						<span>Umsatzsteuer</span>
						<select
							v-model.number="taxRateBp"
							:disabled="formDisabled">
							<option :value="0">0 %</option>
							<option :value="700">7 %</option>
							<option :value="1900">19 %</option>
						</select>
					</label>
				</div>
			</section>

			<section class="card">
				<div class="section-header">
					<div>
						<h3>Jahresbeiträge</h3>
						<p>
							Grundbeitrag je Nextcloud-Beitragsgruppe.
						</p>
					</div>

					<NcButton
						v-if="!formDisabled"
						variant="secondary"
						@click="addGroupFee">
						+ Beitragsgruppe
					</NcButton>
				</div>

				<div class="table-wrapper">
					<table class="config-table">
						<thead>
							<tr>
								<th>Beitragsgruppe</th>
								<th>Jahresbeitrag</th>
								<th v-if="!formDisabled" class="action-column" />
							</tr>
						</thead>

						<tbody>
							<tr
								v-for="(row, index) in groupFeeRows"
								:key="index">
								<td>
									<input
										v-model.trim="row.name"
										type="text"
										:disabled="formDisabled"
										placeholder="z. B. 50nY">
								</td>

								<td>
									<div class="money-input">
										<input
											v-model="row.amount"
											type="text"
											inputmode="decimal"
											:disabled="formDisabled"
											placeholder="0,00">
										<span>{{ currency }}</span>
									</div>
								</td>

								<td
									v-if="!formDisabled"
									class="action-column">
									<button
										type="button"
										class="remove-button"
										title="Beitragsgruppe entfernen"
										@click="removeGroupFee(index)">
										×
									</button>
								</td>
							</tr>

							<tr v-if="groupFeeRows.length === 0">
								<td colspan="3" class="empty-row">
									Keine Beitragsgruppen vorhanden.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section class="card">
				<div class="section-header">
					<div>
						<h3>Beitragsarten</h3>
						<p>
							Prozentualer Anteil des Grundbeitrags je
							Mitgliedsart.
						</p>
					</div>

					<NcButton
						v-if="!formDisabled"
						variant="secondary"
						@click="addMembershipRule">
						+ Beitragsart
					</NcButton>
				</div>

				<div class="table-wrapper">
					<table class="config-table">
						<thead>
							<tr>
								<th>Beitragsart</th>
								<th>Berechnung</th>
								<th>Wert</th>
								<th v-if="!formDisabled" class="action-column" />
							</tr>
						</thead>

						<tbody>
							<tr
								v-for="(row, index) in membershipRuleRows"
								:key="index">
								<td>
									<input
										v-model.trim="row.name"
										type="text"
										:disabled="formDisabled"
										placeholder="z. B. Vollmitglied">
								</td>

								<td>
									<select
										v-model="row.type"
										:disabled="formDisabled">
										<option value="percent">
											Prozent
										</option>
									</select>
								</td>

								<td>
									<div class="percent-input">
										<input
											v-model="row.value"
											type="text"
											inputmode="decimal"
											:disabled="formDisabled"
											placeholder="100">
										<span>%</span>
									</div>
								</td>

								<td
									v-if="!formDisabled"
									class="action-column">
									<button
										type="button"
										class="remove-button"
										title="Beitragsart entfernen"
										@click="removeMembershipRule(index)">
										×
									</button>
								</td>
							</tr>

							<tr v-if="membershipRuleRows.length === 0">
								<td colspan="4" class="empty-row">
									Keine Beitragsarten vorhanden.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section v-if="!isLocked" class="card actions-card">
				<div class="actions">
					<NcButton
						variant="secondary"
						:disabled="busy"
						@click="copyPreviousYear">
						Vorjahr übernehmen
					</NcButton>

					<div class="actions__right">
						<NcButton
							variant="primary"
							:disabled="busy"
							@click="saveConfiguration">
							{{ saving ? 'Speichert …' : 'Speichern' }}
						</NcButton>

						<NcButton
							variant="secondary"
							:disabled="busy || !hasConfiguration"
							@click="loadPreview">
							Vorschau aktualisieren
						</NcButton>
					</div>
				</div>
			</section>

			<section class="card">
				<div class="section-header">
					<div>
						<h3>Mitgliedervorschau</h3>
						<p v-if="batch">
							{{ batch.summary.total }} Mitglieder geprüft,
							{{ batch.summary.ready }} beitragspflichtige
							Rechnungen.
						</p>

						<p v-else>
							Nach dem Speichern kann die Beitragsberechnung
							geprüft werden.
						</p>
					</div>

					<NcButton
						v-if="hasConfiguration"
						variant="secondary"
						:disabled="busy"
						@click="loadPreview">
						Aktualisieren
					</NcButton>
				</div>

				<div v-if="previewLoading" class="preview-loading">
					<NcLoadingIcon :size="32" />
				</div>

				<template v-else-if="batch">
					<div class="summary-grid">
						<div class="summary-box">
							<span>Mitglieder</span>
							<strong>{{ batch.summary.total }}</strong>
						</div>

						<div class="summary-box">
							<span>Rechnungsbereit</span>
							<strong>{{ batch.summary.ready }}</strong>
						</div>

						<div class="summary-box">
							<span>Beitragsfrei</span>
							<strong>{{ batch.summary.feeExempt }}</strong>
						</div>

						<div class="summary-box">
							<span>Gesamtbetrag</span>
							<strong>{{ previewTotal }}</strong>
						</div>

						<div
							v-if="previewErrorCount > 0"
							class="summary-box summary-box--error">
							<span>Fehler</span>
							<strong>{{ previewErrorCount }}</strong>
						</div>
					</div>

					<div class="table-wrapper">
						<table class="member-table">
							<thead>
								<tr>
									<th>Mitglied</th>
									<th>Nr.</th>
									<th>Beitragsgruppe</th>
									<th>Beitragsart</th>
									<th>Grundbeitrag</th>
									<th>Beitrag</th>
									<th>Status</th>
								</tr>
							</thead>

							<tbody>
								<tr
									v-for="member in batch.members"
									:key="member.uid"
									:class="{ 'member-row--error': isMemberError(member) }">
									<td>
										<div class="member-name">
											<strong>{{ memberName(member) }}</strong>
											<small>{{ member.email || member.uid }}</small>
										</div>
									</td>

									<td>{{ member.memberNumber || '–' }}</td>

									<td>{{ member.feeGroup || '–' }}</td>

									<td>
										{{ member.membershipType || '–' }}

										<small
											v-if="member.adjustmentValue"
											class="member-detail">
											{{ member.adjustmentValue }} %
										</small>
									</td>

									<td>
										{{ formatMoney(member.baseFeeAmount) }}
									</td>

									<td class="amount-cell">
										{{ formatMoney(member.feeAmount) }}
									</td>

									<td>
										<span
											class="member-status"
											:class="`member-status--${member.status}`">
											{{ memberStatusLabel(member) }}
										</span>
									</td>
								</tr>
							</tbody>

							<tfoot>
								<tr>
									<td colspan="5">
										<strong>
											{{ batch.summary.ready }}
											Beitragsrechnungen
										</strong>
									</td>

									<td class="amount-cell">
										<strong>{{ previewTotal }}</strong>
									</td>

									<td />
								</tr>
							</tfoot>
						</table>
					</div>

					<div
						v-if="canCreateInvoices"
						class="create-invoices">
						<div>
							<h4>Beitragsrechnungen erstellen</h4>
							<p>
								Es werden Rechnungsentwürfe für alle
								rechnungsbereiten Mitglieder erzeugt.
								Danach wird die Beitragskonfiguration für
								{{ year }} gesperrt.
							</p>
							<p>
								<strong>
									Dabei werden noch keine E-Mails versendet
									und keine Rechnungen festgeschrieben.
								</strong>
							</p>
						</div>

						<NcButton
							variant="primary"
							:disabled="busy || !previewCanCreate"
							@click="createDraftInvoices">
							{{ creating ? 'Erstellt …' : 'Beitragsrechnungen erstellen' }}
						</NcButton>
					</div>

					<div
						v-else-if="isLocked"
						class="processing-info">
						<strong>
							Beitragslauf {{ year }} wurde bereits gestartet.
						</strong>

						<span>
							Die Beitragskonfiguration ist deshalb gesperrt.
						</span>
					</div>
				</template>

				<div v-else class="empty-preview">
					Noch keine Vorschau geladen.
				</div>
			</section>
		</template>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import { apiGet, apiPost } from '@/api/client'
import type { ApiError } from '@/types/api'

type RunStatus = 'draft' | 'processing' | 'completed'

interface FeeRun {
	id: number
	ownerUserId: string
	year: number
	memberGroup: string
	currency: string
	invoiceText: string
	paymentTermDays: number
	issueDate: string | null
	dueDate: string | null
	taxRateBp: number
	status: RunStatus
	createdByUserId: string
	createdAt: string | null
	updatedAt: string | null
	completedAt: string | null
}

interface MembershipRule {
	type: string
	value: string
}

interface FeeConfiguration {
	run: FeeRun
	groupFees: Record<string, string>
	membershipRules: Record<string, MembershipRule>
}

interface ConfigurationResponse {
	success: boolean
	configuration: FeeConfiguration
}

interface BatchSummary {
	total: number
	ready: number
	draftCreated: number
	feeExempt: number
	incomplete: number
	noFeeGroup: number
	multipleFeeGroups: number
	noMembershipType: number
	noMembershipRule: number
	zeroFee: number
	alreadyExists: number
	profileErrors: number
	feeErrors: number
	createErrors: number
	committed: number
	alreadyCommitted: number
	missingDrafts: number
	amountMismatches: number
	invoiceNotDraft: number
	commitErrors: number
	readyToCommit: number
}

interface BatchMember {
	uid: string
	displayName: string
	email: string | null
	hasEmail: boolean
	firstName: string | null
	lastName: string | null
	memberNumber: string | null
	membershipType: string | null
	feeExempt: boolean
	complete: boolean
	readyForInvoice: boolean
	missingFields: string[]
	status: string
	feeRunId: number
	feeGroup: string | null
	baseFeeAmount: string | null
	feeAmount: string | null
	feeCurrency: string
	feeStatus: string | null
	feeMatchingGroups: string[]
	adjustmentType: string | null
	adjustmentValue: string | null
	referenceNumber: string | null
	feeError?: string
}

interface Batch {
	group: string
	year: number
	run: FeeRun
	groupFees: Record<string, string>
	membershipRules: Record<string, MembershipRule>
	summary: BatchSummary
	members: BatchMember[]
}

interface BatchResponse {
	success: boolean
	batch: Batch
}

interface GroupFeeRow {
	name: string
	amount: string
}

interface MembershipRuleRow {
	name: string
	type: string
	value: string
}

const currentYear = new Date().getFullYear()

const year = ref(currentYear)
const group = ref('LHReV')

const run = ref<FeeRun | null>(null)
const batch = ref<Batch | null>(null)

const invoiceText = ref(`Mitgliedsbeitrag ${currentYear}`)
const paymentTermDays = ref(14)
const issueDate = ref(defaultIssueDate(currentYear))
const dueDate = ref('')
const currency = ref('EUR')
const taxRateBp = ref(0)

const groupFeeRows = ref<GroupFeeRow[]>([])
const membershipRuleRows = ref<MembershipRuleRow[]>([])

const loading = ref(true)
const previewLoading = ref(false)
const saving = ref(false)
const creating = ref(false)

const message = ref('')
const messageType = ref<'success' | 'error' | 'info'>('info')

const hasConfiguration = computed(() => run.value !== null)

const isLocked = computed(() => {
	return run.value !== null && run.value.status !== 'draft'
})

const formDisabled = computed(() => {
	return isLocked.value || saving.value || creating.value
})

const busy = computed(() => {
	return loading.value
		|| previewLoading.value
		|| saving.value
		|| creating.value
})

const runStatusLabel = computed(() => {
	switch (run.value?.status) {
	case 'draft':
		return 'Entwurf'
	case 'processing':
		return 'In Bearbeitung'
	case 'completed':
		return 'Abgeschlossen'
	default:
		return ''
	}
})

const previewTotalCents = computed(() => {
	if (!batch.value) {
		return 0
	}

	return batch.value.members.reduce((sum, member) => {
		if (!member.feeAmount) {
			return sum
		}

		return sum + decimalToCents(member.feeAmount)
	}, 0)
})

const previewTotal = computed(() => {
	return formatCents(previewTotalCents.value, currency.value)
})

const previewErrorCount = computed(() => {
	if (!batch.value) {
		return 0
	}

	const summary = batch.value.summary

	return summary.incomplete
		+ summary.noFeeGroup
		+ summary.multipleFeeGroups
		+ summary.noMembershipType
		+ summary.noMembershipRule
		+ summary.zeroFee
		+ summary.profileErrors
		+ summary.feeErrors
		+ summary.createErrors
})

const previewCanCreate = computed(() => {
	return batch.value !== null
		&& batch.value.summary.ready > 0
		&& previewErrorCount.value === 0
})

const canCreateInvoices = computed(() => {
	return run.value?.status === 'draft'
})

onMounted(async () => {
	recalculateDueDate()
	await loadConfiguration()
})

async function loadConfiguration(): Promise<void> {
	clearMessage()

	if (!group.value.trim()) {
		showError('Bitte eine Vereinsgruppe angeben.')
		return
	}

	if (!validYear(year.value)) {
		showError('Bitte ein gültiges Beitragsjahr angeben.')
		return
	}

	loading.value = true
	batch.value = null

	try {
		const response = await apiGet<ConfigurationResponse>(
			configurationPath(year.value, group.value),
		)

		applyConfiguration(response.configuration)

		await loadPreview()
	} catch (error) {
		const apiError = error as ApiError

		if (apiError.status === 400 || apiError.status === 404) {
			initializeNewYear(year.value)
			showInfo(
				`Für ${year.value} besteht noch keine Beitragsabrechnung. `
				+ 'Du kannst einen neuen Entwurf anlegen.',
			)
		} else {
			showError(apiError.message)
		}
	} finally {
		loading.value = false
	}
}

async function loadPreview(): Promise<void> {
	if (!hasConfiguration.value) {
		return
	}

	previewLoading.value = true

	try {
		const response = await apiGet<BatchResponse>(
			`/membership-invoices/batch-preview`
			+ `?group=${encodeURIComponent(group.value)}`
			+ `&year=${year.value}`,
		)

		batch.value = response.batch

		if (response.batch.run) {
			run.value = response.batch.run
		}
	} catch (error) {
		const apiError = error as ApiError
		showError(apiError.message)
	} finally {
		previewLoading.value = false
	}
}

async function saveConfiguration(): Promise<void> {
	clearMessage()

	if (isLocked.value) {
		showError('Diese Beitragsabrechnung ist bereits gesperrt.')
		return
	}

	const validationError = validateConfiguration()

	if (validationError) {
		showError(validationError)
		return
	}

	saving.value = true

	try {
		const response = await apiPost<
			ConfigurationResponse,
			Record<string, unknown>
		>(
			'/membership-invoices/configuration',
			{
				year: year.value,
				group: group.value.trim(),
				groupFees: buildGroupFees(),
				membershipRules: buildMembershipRules(),
				currency: currency.value.trim().toUpperCase(),
				invoiceText: invoiceText.value.trim(),
				paymentTermDays: paymentTermDays.value,
				taxRateBp: taxRateBp.value,
				issueDate: issueDate.value || null,
				dueDate: dueDate.value || null,
			},
		)

		applyConfiguration(response.configuration)

		showSuccess(`Beitragsabrechnung ${year.value} wurde gespeichert.`)

		await loadPreview()
	} catch (error) {
		const apiError = error as ApiError
		showError(apiError.message)
	} finally {
		saving.value = false
	}
}

async function copyPreviousYear(): Promise<void> {
	if (isLocked.value) {
		return
	}

	const previousYear = year.value - 1

	clearMessage()

	try {
		const response = await apiGet<ConfigurationResponse>(
			configurationPath(previousYear, group.value),
		)

		const previous = response.configuration

		groupFeeRows.value = Object.entries(previous.groupFees).map(
			([name, amount]) => ({
				name,
				amount: moneyForInput(amount),
			}),
		)

		membershipRuleRows.value = Object.entries(
			previous.membershipRules,
		).map(([name, rule]) => ({
			name,
			type: rule.type,
			value: rule.value,
		}))

		currency.value = previous.run.currency
		paymentTermDays.value = previous.run.paymentTermDays
		taxRateBp.value = previous.run.taxRateBp

		invoiceText.value = replaceYear(
			previous.run.invoiceText,
			previousYear,
			year.value,
		)

		issueDate.value = defaultIssueDate(year.value)
		recalculateDueDate()

		showSuccess(
			`Beitragswerte aus ${previousYear} wurden übernommen. `
			+ 'Bitte prüfen und anschließend speichern.',
		)
	} catch (error) {
		const apiError = error as ApiError
		showError(
			`Vorjahr ${previousYear} konnte nicht übernommen werden: `
			+ apiError.message,
		)
	}
}

async function createDraftInvoices(): Promise<void> {
	if (!batch.value || !previewCanCreate.value) {
		return
	}

	const confirmed = window.confirm(
		`Für ${batch.value.summary.ready} Mitglieder werden `
		+ `Beitragsrechnungsentwürfe für ${year.value} erstellt.\n\n`
		+ 'Danach wird die Beitragskonfiguration gesperrt.\n\n'
		+ 'Es werden noch keine E-Mails versendet und keine '
		+ 'Rechnungen endgültig festgeschrieben.\n\n'
		+ 'Fortfahren?',
	)

	if (!confirmed) {
		return
	}

	creating.value = true
	clearMessage()

	try {
		const response = await apiPost<
			BatchResponse,
			{
				group: string
				year: number
				confirm: boolean
			}
		>(
			'/membership-invoices/batch-create-drafts',
			{
				group: group.value,
				year: year.value,
				confirm: true,
			},
		)

		batch.value = response.batch
		run.value = response.batch.run

		const summary = response.batch.summary

		showSuccess(
			`Beitragslauf ${year.value} wurde gestartet. `
			+ `${summary.draftCreated} Rechnungsentwürfe wurden neu erstellt`
			+ (summary.alreadyExists > 0
					? `, ${summary.alreadyExists} waren bereits vorhanden.`
					: '.'),
		)

		await reloadConfigurationAfterCreation()
	} catch (error) {
		const apiError = error as ApiError
		showError(apiError.message)
	} finally {
		creating.value = false
	}
}

async function reloadConfigurationAfterCreation(): Promise<void> {
	try {
		const response = await apiGet<ConfigurationResponse>(
			configurationPath(year.value, group.value),
		)

		applyConfiguration(response.configuration)
		await loadPreview()
	} catch {
		// Der Erstellungsaufruf selbst war erfolgreich.
		// Ein nachgelagerter Reload darf die Erfolgsmeldung nicht überschreiben.
	}
}

function applyConfiguration(configuration: FeeConfiguration): void {
	run.value = configuration.run

	year.value = configuration.run.year
	group.value = configuration.run.memberGroup
	currency.value = configuration.run.currency
	invoiceText.value = configuration.run.invoiceText
	paymentTermDays.value = configuration.run.paymentTermDays
	issueDate.value = configuration.run.issueDate ?? ''
	dueDate.value = configuration.run.dueDate ?? ''
	taxRateBp.value = configuration.run.taxRateBp

	groupFeeRows.value = Object.entries(configuration.groupFees).map(
		([name, amount]) => ({
			name,
			amount: moneyForInput(amount),
		}),
	)

	membershipRuleRows.value = Object.entries(
		configuration.membershipRules,
	).map(([name, rule]) => ({
		name,
		type: rule.type,
		value: rule.value,
	}))
}

function initializeNewYear(selectedYear: number): void {
	run.value = null
	batch.value = null

	invoiceText.value = `Mitgliedsbeitrag ${selectedYear}`
	paymentTermDays.value = 14
	issueDate.value = defaultIssueDate(selectedYear)
	currency.value = 'EUR'
	taxRateBp.value = 0

	groupFeeRows.value = []
	membershipRuleRows.value = []

	recalculateDueDate()
}

function addGroupFee(): void {
	groupFeeRows.value.push({
		name: '',
		amount: '0,00',
	})
}

function removeGroupFee(index: number): void {
	groupFeeRows.value.splice(index, 1)
}

function addMembershipRule(): void {
	membershipRuleRows.value.push({
		name: '',
		type: 'percent',
		value: '100',
	})
}

function removeMembershipRule(index: number): void {
	membershipRuleRows.value.splice(index, 1)
}

function buildGroupFees(): Record<string, string> {
	const result: Record<string, string> = {}

	for (const row of groupFeeRows.value) {
		result[row.name.trim()] = normalizeDecimal(row.amount)
	}

	return result
}

function buildMembershipRules(): Record<string, MembershipRule> {
	const result: Record<string, MembershipRule> = {}

	for (const row of membershipRuleRows.value) {
		result[row.name.trim()] = {
			type: row.type,
			value: normalizeDecimal(row.value),
		}
	}

	return result
}

function validateConfiguration(): string | null {
	if (!validYear(year.value)) {
		return 'Bitte ein gültiges Beitragsjahr angeben.'
	}

	if (!group.value.trim()) {
		return 'Bitte eine Vereinsgruppe angeben.'
	}

	if (!invoiceText.value.trim()) {
		return 'Bitte einen Rechnungstext angeben.'
	}

	if (!issueDate.value) {
		return 'Bitte ein Rechnungsdatum angeben.'
	}

	if (!dueDate.value) {
		return 'Bitte ein Fälligkeitsdatum angeben.'
	}

	if (dueDate.value < issueDate.value) {
		return 'Das Fälligkeitsdatum darf nicht vor dem Rechnungsdatum liegen.'
	}

	if (!Number.isInteger(paymentTermDays.value) || paymentTermDays.value < 0) {
		return 'Das Zahlungsziel ist ungültig.'
	}

	if (groupFeeRows.value.length === 0) {
		return 'Mindestens eine Beitragsgruppe ist erforderlich.'
	}

	const seenGroups = new Set<string>()

	for (const row of groupFeeRows.value) {
		const name = row.name.trim()

		if (!name) {
			return 'Eine Beitragsgruppe hat keinen Namen.'
		}

		if (seenGroups.has(name)) {
			return `Die Beitragsgruppe "${name}" ist doppelt vorhanden.`
		}

		seenGroups.add(name)

		if (!validDecimal(row.amount)) {
			return `Der Beitrag für "${name}" ist ungültig.`
		}
	}

	if (membershipRuleRows.value.length === 0) {
		return 'Mindestens eine Beitragsart ist erforderlich.'
	}

	const seenRules = new Set<string>()

	for (const row of membershipRuleRows.value) {
		const name = row.name.trim()

		if (!name) {
			return 'Eine Beitragsart hat keinen Namen.'
		}

		if (seenRules.has(name)) {
			return `Die Beitragsart "${name}" ist doppelt vorhanden.`
		}

		seenRules.add(name)

		if (!validDecimal(row.value)) {
			return `Der Wert der Beitragsart "${name}" ist ungültig.`
		}
	}

	return null
}

function recalculateDueDate(): void {
	if (!issueDate.value) {
		dueDate.value = ''
		return
	}

	const days = Number(paymentTermDays.value)

	if (!Number.isFinite(days) || days < 0) {
		return
	}

	const [yearPart, monthPart, dayPart] = issueDate.value
		.split('-')
		.map(Number)

	const date = new Date(Date.UTC(
		yearPart,
		monthPart - 1,
		dayPart,
	))

	date.setUTCDate(date.getUTCDate() + Math.trunc(days))

	dueDate.value = [
		date.getUTCFullYear(),
		String(date.getUTCMonth() + 1).padStart(2, '0'),
		String(date.getUTCDate()).padStart(2, '0'),
	].join('-')
}

function configurationPath(selectedYear: number, selectedGroup: string): string {
	return '/membership-invoices/configuration'
		+ `?group=${encodeURIComponent(selectedGroup.trim())}`
		+ `&year=${selectedYear}`
}

function defaultIssueDate(selectedYear: number): string {
	const now = new Date()

	if (selectedYear === now.getFullYear()) {
		return [
			now.getFullYear(),
			String(now.getMonth() + 1).padStart(2, '0'),
			String(now.getDate()).padStart(2, '0'),
		].join('-')
	}

	return `${selectedYear}-01-01`
}

function replaceYear(
	text: string,
	oldYear: number,
	newYear: number,
): string {
	const oldValue = String(oldYear)

	if (text.includes(oldValue)) {
		return text.replaceAll(oldValue, String(newYear))
	}

	return `Mitgliedsbeitrag ${newYear}`
}

function validYear(value: number): boolean {
	return Number.isInteger(value) && value >= 2000 && value <= 2100
}

function normalizeDecimal(value: string): string {
	const normalized = value
		.trim()
		.replace(/\s/g, '')
		.replace(',', '.')

	const number = Number(normalized)

	if (!Number.isFinite(number)) {
		return normalized
	}

	return number.toFixed(2)
}

function validDecimal(value: string): boolean {
	const normalized = value
		.trim()
		.replace(/\s/g, '')
		.replace(',', '.')

	return /^\d+(?:\.\d{1,4})?$/.test(normalized)
		&& Number.isFinite(Number(normalized))
}

function moneyForInput(value: string): string {
	return Number(value).toFixed(2).replace('.', ',')
}

function decimalToCents(value: string): number {
	const normalized = value.replace(',', '.')
	const [whole = '0', fraction = ''] = normalized.split('.')

	const cents = Number(
		`${whole}${fraction.padEnd(2, '0').slice(0, 2)}`,
	)

	return Number.isFinite(cents) ? cents : 0
}

function formatCents(value: number, selectedCurrency: string): string {
	return new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: selectedCurrency || 'EUR',
	}).format(value / 100)
}

function formatMoney(value: string | null): string {
	if (value === null) {
		return '–'
	}

	return formatCents(decimalToCents(value), currency.value)
}

function memberName(member: BatchMember): string {
	const profileName = [
		member.firstName,
		member.lastName,
	]
		.filter(Boolean)
		.join(' ')
		.trim()

	return profileName || member.displayName || member.uid
}

function memberStatusLabel(member: BatchMember): string {
	switch (member.status) {
	case 'ready':
		return 'Bereit'
	case 'fee_exempt':
		return 'Beitragsfrei'
	case 'incomplete':
		return 'Unvollständig'
	case 'no_fee_group':
		return 'Keine Beitragsgruppe'
	case 'multiple_fee_groups':
		return 'Mehrere Beitragsgruppen'
	case 'no_membership_type':
		return 'Keine Beitragsart'
	case 'no_membership_rule':
		return 'Keine Beitragsregel'
	case 'zero_fee':
		return 'Beitrag 0,00 €'
	case 'profile_error':
		return 'Profilfehler'
	case 'fee_error':
		return 'Beitragsfehler'
	default:
		return member.status || 'Unbekannt'
	}
}

function isMemberError(member: BatchMember): boolean {
	return ![
		'ready',
		'fee_exempt',
	].includes(member.status)
}

function clearMessage(): void {
	message.value = ''
}

function showSuccess(text: string): void {
	message.value = text
	messageType.value = 'success'
}

function showError(text: string): void {
	message.value = text
	messageType.value = 'error'
}

function showInfo(text: string): void {
	message.value = text
	messageType.value = 'info'
}
</script>

<style scoped>
.membership-fees {
	box-sizing: border-box;
	width: 100%;
	max-width: 1500px;
	padding: 24px 32px 60px;
}

.page-header {
	margin-bottom: 24px;
}

.page-header h2 {
	margin: 0;
	font-size: 28px;
	font-weight: 700;
}

.page-header p,
.section-header p {
	margin: 6px 0 0;
	color: var(--color-text-maxcontrast);
}

.title-row {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 12px;
}

.status-badge {
	display: inline-flex;
	align-items: center;
	min-height: 26px;
	padding: 2px 10px;
	border-radius: 14px;
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
}

.status-badge--draft,
.status-badge--new {
	background: var(--color-background-dark);
}

.status-badge--processing {
	background: var(--color-warning);
	color: var(--color-primary-text);
}

.status-badge--completed {
	background: var(--color-success);
	color: #fff;
}

.loading {
	display: flex;
	justify-content: center;
	padding: 80px;
}

.card {
	margin-bottom: 18px;
	padding: 22px;
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius-large);
	background: var(--color-main-background);
}

.section-header {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 20px;
	margin-bottom: 20px;
}

.section-header h3 {
	margin: 0;
	font-size: 20px;
}

.selector-grid,
.form-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(180px, 1fr));
	gap: 18px;
}

.selector-grid {
	grid-template-columns: repeat(2, minmax(240px, 420px));
}

.field {
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.field > span {
	font-weight: 600;
}

.field--wide {
	grid-column: span 2;
}

.field input,
.field select,
.config-table input,
.config-table select {
	box-sizing: border-box;
	width: 100%;
	min-height: 44px;
	padding: 8px 12px;
	border: 2px solid var(--color-border-maxcontrast);
	border-radius: var(--border-radius-large);
	background: var(--color-main-background);
	color: var(--color-main-text);
	font: inherit;
}

.field input:focus,
.field select:focus,
.config-table input:focus,
.config-table select:focus {
	border-color: var(--color-primary-element);
	outline: none;
}

.field input:disabled,
.field select:disabled,
.config-table input:disabled,
.config-table select:disabled {
	border-color: var(--color-border);
	background: var(--color-background-dark);
	color: var(--color-text-maxcontrast);
	opacity: 1;
}

.field-with-button {
	display: flex;
	gap: 8px;
}

.field-with-button input {
	flex: 1;
}

.locked-info,
.new-info,
.processing-info {
	margin-top: 20px;
	padding: 14px 16px;
	border-radius: var(--border-radius-large);
}

.locked-info,
.processing-info {
	background: var(--color-background-dark);
}

.new-info {
	background: var(--color-background-hover);
}

.locked-info strong,
.processing-info strong {
	display: block;
	margin-bottom: 4px;
}

.table-wrapper {
	overflow-x: auto;
}

.config-table,
.member-table {
	width: 100%;
	border-collapse: collapse;
}

.config-table th,
.config-table td,
.member-table th,
.member-table td {
	padding: 10px;
	border-bottom: 1px solid var(--color-border);
	text-align: left;
	vertical-align: middle;
}

.config-table th,
.member-table th {
	color: var(--color-text-maxcontrast);
	font-size: 13px;
	font-weight: 700;
}

.config-table th:first-child,
.config-table td:first-child {
	padding-left: 0;
}

.config-table th:last-child,
.config-table td:last-child {
	padding-right: 0;
}

.money-input,
.percent-input {
	display: flex;
	align-items: center;
	gap: 8px;
}

.money-input input,
.percent-input input {
	max-width: 180px;
	text-align: right;
}

.action-column {
	width: 44px;
	text-align: center !important;
}

.remove-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	padding: 0;
	border: 0;
	border-radius: 50%;
	background: transparent;
	color: var(--color-error);
	font-size: 25px;
	line-height: 1;
	cursor: pointer;
}

.remove-button:hover {
	background: var(--color-background-hover);
}

.empty-row,
.empty-preview {
	padding: 28px !important;
	color: var(--color-text-maxcontrast);
	text-align: center !important;
}

.actions-card {
	padding-top: 16px;
	padding-bottom: 16px;
}

.actions {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
}

.actions__right {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

.summary-grid {
	display: grid;
	grid-template-columns: repeat(5, minmax(120px, 1fr));
	gap: 12px;
	margin-bottom: 20px;
}

.summary-box {
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 14px 16px;
	border-radius: var(--border-radius-large);
	background: var(--color-background-dark);
}

.summary-box span {
	color: var(--color-text-maxcontrast);
	font-size: 13px;
}

.summary-box strong {
	font-size: 21px;
}

.summary-box--error strong {
	color: var(--color-error);
}

.member-name {
	display: flex;
	flex-direction: column;
	gap: 2px;
	min-width: 180px;
}

.member-name small,
.member-detail {
	color: var(--color-text-maxcontrast);
}

.member-detail {
	display: block;
	margin-top: 2px;
}

.amount-cell {
	text-align: right !important;
	white-space: nowrap;
}

.member-status {
	display: inline-flex;
	align-items: center;
	min-height: 26px;
	padding: 2px 9px;
	border-radius: 14px;
	background: var(--color-background-dark);
	white-space: nowrap;
	font-size: 12px;
	font-weight: 600;
}

.member-status--ready {
	background: var(--color-success);
	color: #fff;
}

.member-status--fee_exempt {
	background: var(--color-background-dark);
}

.member-row--error .member-status {
	background: var(--color-error);
	color: #fff;
}

.member-row--error {
	background: var(--color-background-hover);
}

.member-table tfoot td {
	border-top: 2px solid var(--color-border-maxcontrast);
	border-bottom: 0;
}

.preview-loading {
	display: flex;
	justify-content: center;
	padding: 40px;
}

.create-invoices {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
	margin-top: 24px;
	padding: 20px;
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius-large);
	background: var(--color-background-dark);
}

.create-invoices h4 {
	margin: 0 0 6px;
	font-size: 18px;
}

.create-invoices p {
	margin: 4px 0;
}

.message {
	margin-bottom: 18px;
	padding: 14px 18px;
	border-radius: var(--border-radius-large);
}

.message--success {
	background: var(--color-success);
	color: #fff;
}

.message--error {
	background: var(--color-error);
	color: #fff;
}

.message--info {
	background: var(--color-background-dark);
}

@media (max-width: 950px) {
	.membership-fees {
		padding: 18px;
	}

	.selector-grid,
	.form-grid {
		grid-template-columns: 1fr;
	}

	.field--wide {
		grid-column: auto;
	}

	.summary-grid {
		grid-template-columns: repeat(2, 1fr);
	}

	.create-invoices,
	.actions {
		align-items: stretch;
		flex-direction: column;
	}

	.actions__right {
		justify-content: flex-start;
	}
}

@media (max-width: 600px) {
	.summary-grid {
		grid-template-columns: 1fr;
	}

	.section-header {
		flex-direction: column;
	}
}
</style>
