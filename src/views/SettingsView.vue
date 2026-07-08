<template>
	<div class="rw-view">
		<h2 class="rw-settings-title">{{ t('rechnungswerk', 'Einstellungen') }}</h2>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<div v-if="form" class="settings-form">
			<!-- Firma -->
			<section class="rw-section">
				<h3>{{ t('rechnungswerk', 'Firma') }}</h3>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Firmenname') }}</span>
					<input v-model="form.companyName" class="rw-input" type="text" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Adresse') }}</span>
					<textarea v-model="form.companyAddress" class="rw-input" rows="3" /></label>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'USt-IdNr.') }}</span>
						<input v-model="form.vatId" class="rw-input" type="text" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Steuernummer') }}</span>
						<input v-model="form.taxNumber" class="rw-input" type="text" /></label>
				</div>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Ansprechpartner') }}</span>
						<input v-model="form.contactPerson" class="rw-input" type="text" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Telefon') }}</span>
						<input v-model="form.contactPhone" class="rw-input" type="text" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Kontakt-E-Mail') }}</span>
						<input v-model="form.contactEmail" class="rw-input" type="email" /></label>
				</div>
				<p class="rw-hint">{{ t('rechnungswerk', 'Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).') }}</p>
			</section>

			<!-- Bank -->
			<section class="rw-section">
				<h3>{{ t('rechnungswerk', 'Bankverbindung') }}</h3>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'IBAN') }}</span>
						<input v-model="form.iban" class="rw-input" type="text" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'BIC') }}</span>
						<input v-model="form.bic" class="rw-input" type="text" /></label>
				</div>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Bankname') }}</span>
					<input v-model="form.bankName" class="rw-input" type="text" /></label>
			</section>

			<!-- Branding -->
			<section class="rw-section">
				<h3>{{ t('rechnungswerk', 'Branding') }}</h3>
				<label class="rw-field rw-field--inline"><span>{{ t('rechnungswerk', 'Akzentfarbe') }}</span>
					<input v-model="form.accentColor" class="color-input" type="color" /></label>

				<div class="rw-field">
					<span>{{ t('rechnungswerk', 'Firmenlogo') }}</span>
					<div class="rw-logo">
						<img v-if="form.logoFileId" :src="logoSrc" :alt="t('rechnungswerk', 'Firmenlogo')" class="rw-logo__preview" />
						<span v-else class="rw-logo__empty">{{ t('rechnungswerk', 'Kein Logo gewählt') }}</span>
						<div class="rw-logo__actions">
							<NcButton :disabled="logoBusy" @click="onPickLogo">
								{{ form.logoFileId ? t('rechnungswerk', 'Logo ändern') : t('rechnungswerk', 'Logo wählen') }}
							</NcButton>
							<NcButton v-if="form.logoFileId" variant="tertiary" :disabled="logoBusy" @click="onRemoveLogo">
								{{ t('rechnungswerk', 'Entfernen') }}
							</NcButton>
						</div>
					</div>
					<p class="rw-hint">{{ t('rechnungswerk', 'Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.') }}</p>
				</div>
			</section>

			<!-- Rechnungsnummer -->
			<section class="rw-section">
				<h3>{{ t('rechnungswerk', 'Rechnungsnummer') }}</h3>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Format') }}</span>
					<input v-model="form.numberFormat" class="rw-input" type="text" /></label>
				<p class="rw-hint">
					{{ t('rechnungswerk', 'Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {####} fortlaufender Zähler.') }}
					<br>
					{{ t('rechnungswerk', 'Vorschau: {preview}', { preview }) }}
				</p>
				<div class="rw-field rw-reset-mode">
					<span>{{ t('rechnungswerk', 'Nummernkreis') }}</span>
					<NcCheckboxRadioSwitch
						type="radio"
						name="rw-reset-mode"
						value="yearly"
						:model-value="form.numberResetMode"
						@update:model-value="onSelectResetMode">
						{{ t('rechnungswerk', 'Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)') }}
					</NcCheckboxRadioSwitch>
					<NcCheckboxRadioSwitch
						type="radio"
						name="rw-reset-mode"
						value="continuous"
						:model-value="form.numberResetMode"
						@update:model-value="onSelectResetMode">
						{{ t('rechnungswerk', 'Fortlaufend (Zähler läuft über Jahre durch)') }}
					</NcCheckboxRadioSwitch>
				</div>
				<p class="rw-hint">
					{{ t('rechnungswerk', 'Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.') }}
				</p>
			</section>

			<!-- Steuer -->
			<section class="rw-section">
				<h3>{{ t('rechnungswerk', 'Steuer') }}</h3>
				<NcCheckboxRadioSwitch
					type="switch"
					:model-value="form.smallBusiness"
					@update:model-value="onToggleSmallBusiness">
					{{ t('rechnungswerk', 'Kleinunternehmer nach §19 UStG (kein USt-Ausweis)') }}
				</NcCheckboxRadioSwitch>
				<label v-if="!form.smallBusiness" class="rw-field tax-rate-field">
					<span>{{ t('rechnungswerk', 'Standard-USt-Satz') }}</span>
					<select v-model.number="form.defaultTaxRateBp" class="rw-input">
						<option v-for="bp in TAX_RATES_BP" :key="bp" :value="bp">{{ formatTaxRate(bp) }}</option>
					</select>
				</label>
			</section>

			<!-- Versand -->
			<section class="rw-section">
				<h3>{{ t('rechnungswerk', 'Versand') }}</h3>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'DATEV-Upload-Mail') }}</span>
					<input v-model="form.datevUploadMail" class="rw-input" type="email" /></label>
				<NcCheckboxRadioSwitch
					type="switch"
					:model-value="form.datevAutoSend"
					:disabled="!form.datevUploadMail"
					@update:model-value="onToggleDatevAutoSend">
					{{ t('rechnungswerk', 'E-Rechnung beim Festschreiben automatisch an DATEV senden') }}
				</NcCheckboxRadioSwitch>
				<p class="rw-hint">{{ t('rechnungswerk', 'Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.') }}</p>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Absender-Name') }}</span>
						<input v-model="form.smtpFromName" class="rw-input" type="text" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Absender-E-Mail') }}</span>
						<input v-model="form.smtpFromEmail" class="rw-input" type="email" /></label>
				</div>
			</section>

			<!-- Eigenes SMTP-Konto -->
			<section class="rw-section">
				<h3>{{ t('rechnungswerk', 'Eigenes SMTP-Konto (optional)') }}</h3>
				<p class="rw-hint">{{ t('rechnungswerk', 'Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).') }}</p>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Server (Host)') }}</span>
						<input v-model="form.smtpHost" class="rw-input" type="text" placeholder="smtp.example.com" /></label>
					<label class="rw-field rw-field--narrow"><span>{{ t('rechnungswerk', 'Port') }}</span>
						<input v-model.number="form.smtpPort" class="rw-input" type="number" placeholder="587" /></label>
					<label class="rw-field rw-field--narrow"><span>{{ t('rechnungswerk', 'Verschlüsselung') }}</span>
						<select v-model="form.smtpSecurity" class="rw-input">
							<option value="starttls">STARTTLS</option>
							<option value="ssl">SSL/TLS</option>
							<option value="none">{{ t('rechnungswerk', 'Keine') }}</option>
						</select></label>
				</div>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Benutzer') }}</span>
						<input v-model="form.smtpUser" class="rw-input" type="text" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Passwort') }}</span>
						<input v-model="smtpPassword" class="rw-input" type="password"
							:placeholder="form.smtpPasswordSet ? t('rechnungswerk', '•••••••• (gespeichert, leer lassen)') : ''" /></label>
				</div>
				<div class="smtp-test">
					<NcButton :disabled="!form.smtpHost || testingSmtp" @click="onTestSmtp">
						{{ t('rechnungswerk', 'Verbindung testen') }}
					</NcButton>
					<span v-if="smtpTestResult" :class="['smtp-test__result', smtpTestOk ? 'rw-ok' : 'rw-err']">{{ smtpTestResult }}</span>
				</div>
			</section>

			<!-- IMAP-Konto für DATEV-Empfangsbestätigung -->
			<section class="rw-section">
				<h3>{{ t('rechnungswerk', 'DATEV-Rückmeldung (IMAP, optional)') }}</h3>
				<p class="rw-hint">{{ t('rechnungswerk', 'DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.') }}</p>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Server (Host)') }}</span>
						<input v-model="form.imapHost" class="rw-input" type="text" placeholder="imap.example.com" /></label>
					<label class="rw-field rw-field--narrow"><span>{{ t('rechnungswerk', 'Port') }}</span>
						<input v-model.number="form.imapPort" class="rw-input" type="number" placeholder="993" /></label>
					<label class="rw-field rw-field--narrow"><span>{{ t('rechnungswerk', 'Verschlüsselung') }}</span>
						<select v-model="form.imapSecurity" class="rw-input">
							<option value="ssl">SSL/TLS</option>
							<option value="starttls">STARTTLS</option>
							<option value="tls">TLS</option>
						</select></label>
				</div>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Benutzer') }}</span>
						<input v-model="form.imapUser" class="rw-input" type="text" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Passwort') }}</span>
						<input v-model="imapPassword" class="rw-input" type="password"
							:placeholder="form.imapPasswordSet ? t('rechnungswerk', '•••••••• (gespeichert, leer lassen)') : ''" /></label>
				</div>
				<NcCheckboxRadioSwitch
					:model-value="form.imapCleanup"
					:disabled="!form.imapHost"
					@update:model-value="(v) => form.imapCleanup = v">
					{{ t('rechnungswerk', 'Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)') }}
				</NcCheckboxRadioSwitch>
			</section>

			<!-- Standardtexte -->
			<section class="rw-section">
				<h3>{{ t('rechnungswerk', 'Standardtexte') }}</h3>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Anrede') }}</span>
					<textarea v-model="form.greetingDefault" class="rw-input" rows="2" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Einleitung') }}</span>
					<textarea v-model="form.introDefault" class="rw-input" rows="2" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Schlusstext') }}</span>
					<textarea v-model="form.closingDefault" class="rw-input" rows="2" /></label>
			</section>

			<!-- Zugriff & Administration -->
			<section class="rw-section">
				<h3>{{ t('rechnungswerk', 'Zugriff & Administration') }}</h3>
				<p class="rw-hint rw-access-intro">{{ t('rechnungswerk', 'Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.') }}</p>

				<div class="rw-access-group">
					<span class="rw-access-label">{{ t('rechnungswerk', 'App-Administratoren') }}</span>
					<p class="rw-hint rw-access-desc">{{ t('rechnungswerk', 'Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.') }}</p>
					<NcSelect v-model="appAdmins"
						:options="searchResults"
						:loading="searching"
						:multiple="true"
						:close-on-select="false"
						label="displayName"
						:placeholder="t('rechnungswerk', 'Name eingeben, um Nutzer oder Gruppe zu suchen …')"
						@search="onPrincipalSearch">
						<template #no-options>{{ noOptionsText }}</template>
					</NcSelect>
				</div>

				<div class="rw-access-group">
					<span class="rw-access-label">{{ t('rechnungswerk', 'Berechtigte Nutzer') }}</span>
					<p class="rw-hint rw-access-desc">{{ t('rechnungswerk', 'Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.') }}</p>
					<NcSelect v-model="appUsers"
						:options="searchResults"
						:loading="searching"
						:multiple="true"
						:close-on-select="false"
						label="displayName"
						:placeholder="t('rechnungswerk', 'Name eingeben, um Nutzer oder Gruppe zu suchen …')"
						@search="onPrincipalSearch">
						<template #no-options>{{ noOptionsText }}</template>
					</NcSelect>
				</div>
			</section>

			<div class="rw-action-bar">
				<NcButton variant="primary" :disabled="store.saving || savingPerms" @click="onSave">
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

		<ConfirmDialog
			:open="confirmDatevAutoSend"
			:name="t('rechnungswerk', 'Automatischen DATEV-Versand aktivieren')"
			:message="t('rechnungswerk', 'Ab sofort wird bei jedem Festschreiben automatisch eine E-Mail mit der E-Rechnung an die hinterlegte DATEV-Upload-Mail gesendet. Fortfahren?')"
			:confirm-label="t('rechnungswerk', 'Aktivieren')"
			@close="confirmDatevAutoSend = false"
			@confirm="applyDatevAutoSend" />

		<ConfirmDialog
			:open="confirmResetMode"
			:name="t('rechnungswerk', 'Nummernkreis auf „Fortlaufend“ stellen')"
			:message="t('rechnungswerk', 'Der Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Der Modus wirkt sich auf alle künftig festgeschriebenen Rechnungen aus. Fortfahren?')"
			:confirm-label="t('rechnungswerk', 'Fortlaufend aktivieren')"
			@close="confirmResetMode = false"
			@confirm="applyResetMode" />
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcCheckboxRadioSwitch from '@nextcloud/vue/components/NcCheckboxRadioSwitch'
import NcSelect from '@nextcloud/vue/components/NcSelect'
import ContentSaveIcon from 'vue-material-design-icons/ContentSave.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import { useSettingsStore } from '@/stores/settingsStore'
import { TAX_RATES_BP, type Settings } from '@/types/api'
import { testSmtp, setLogo, deleteLogo, logoUrl, type SettingsSave } from '@/api/settings'
import { getPermissions, updatePermissions, searchPrincipals, type Principal } from '@/api/permissions'
import { formatTaxRate } from '@/utils/money'
import { previewInvoiceNumber } from '@/utils/invoiceNumber'

type SettingsForm = Omit<Settings, 'id' | 'numberCounter' | 'numberCounterYear'>

const store = useSettingsStore()
const form = ref<SettingsForm | null>(null)
const error = ref('')
const confirmSmallBusiness = ref(false)
const confirmDatevAutoSend = ref(false)
const confirmResetMode = ref(false)
const currentCounter = ref(0)
const currentYear = ref(new Date().getFullYear())
const currentYearFromSettings = ref<number | null>(null)

const appAdmins = ref<Principal[]>([])
const appUsers = ref<Principal[]>([])
const searchResults = ref<Principal[]>([])
const searching = ref(false)
const savingPerms = ref(false)
const lastQuery = ref('')
let searchTimer: ReturnType<typeof setTimeout> | null = null

const smtpPassword = ref('')
const imapPassword = ref('')
const testingSmtp = ref(false)
const smtpTestResult = ref('')
const smtpTestOk = ref(false)

const logoBusy = ref(false)
/** Logo preview URL; the file id doubles as a cache-buster so it reloads on change. */
const logoSrc = computed(() => (form.value?.logoFileId ? logoUrl(form.value.logoFileId) : ''))

/** Context-aware empty-state text so users know they have to type to search. */
const noOptionsText = computed(() => {
	if (searching.value) {
		return t('rechnungswerk', 'Suche läuft …')
	}
	if (lastQuery.value.trim().length < 2) {
		return t('rechnungswerk', 'Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.')
	}
	return t('rechnungswerk', 'Keine Treffer.')
})

const preview = computed(() => {
	if (!form.value) {
		return ''
	}
	// Continuous: the counter never resets, so the next number is always
	// current + 1. Yearly: it restarts at 1 once the calendar year rolls over.
	const base = form.value.numberResetMode === 'continuous'
		? currentCounter.value
		: (currentYear.value === currentYearFromSettings.value ? currentCounter.value : 0)
	return previewInvoiceNumber(form.value.numberFormat || 'RE-{YYYY}-{####}', base + 1, currentYear.value)
})

onMounted(async () => {
	try {
		await store.fetch()
		hydrate()
		const perms = await getPermissions()
		appAdmins.value = idsToPrincipals(perms.admins)
		appUsers.value = idsToPrincipals(perms.users)
	} catch (e) {
		fail(e, t('rechnungswerk', 'Laden fehlgeschlagen'))
	}
})

/** Hydrate stored "user:x"/"group:y" ids into picker objects (label = id suffix). */
function idsToPrincipals(ids: string[]): Principal[] {
	return ids.map((id) => ({
		id,
		type: id.startsWith('group:') ? 'group' : 'user',
		displayName: id.replace(/^(user|group):/, ''),
	}))
}

function onPrincipalSearch(query: string) {
	lastQuery.value = query
	if (searchTimer) {
		clearTimeout(searchTimer)
	}
	if (query.trim().length < 2) {
		searchResults.value = []
		searching.value = false
		return
	}
	searching.value = true
	searchTimer = setTimeout(async () => {
		try {
			searchResults.value = await searchPrincipals(query.trim())
		} catch {
			searchResults.value = []
		} finally {
			searching.value = false
		}
	}, 300)
}

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
		contactPerson: s.contactPerson,
		contactPhone: s.contactPhone,
		contactEmail: s.contactEmail,
		logoFileId: s.logoFileId,
		accentColor: s.accentColor,
		numberFormat: s.numberFormat,
		numberResetMode: s.numberResetMode,
		smallBusiness: s.smallBusiness,
		defaultTaxRateBp: s.defaultTaxRateBp,
		datevUploadMail: s.datevUploadMail,
		datevAutoSend: s.datevAutoSend,
		smtpFromName: s.smtpFromName,
		smtpFromEmail: s.smtpFromEmail,
		smtpHost: s.smtpHost,
		smtpPort: s.smtpPort,
		smtpSecurity: s.smtpSecurity || 'starttls',
		smtpUser: s.smtpUser,
		smtpPasswordSet: s.smtpPasswordSet,
		imapHost: s.imapHost,
		imapPort: s.imapPort,
		imapSecurity: s.imapSecurity || 'ssl',
		imapUser: s.imapUser,
		imapPasswordSet: s.imapPasswordSet,
		imapCleanup: s.imapCleanup,
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

function onToggleDatevAutoSend(value: boolean) {
	if (!form.value) {
		return
	}
	if (value) {
		confirmDatevAutoSend.value = true
	} else {
		form.value.datevAutoSend = false
	}
}

function applyDatevAutoSend() {
	confirmDatevAutoSend.value = false
	if (form.value) {
		form.value.datevAutoSend = true
	}
}

function onSelectResetMode(value: string) {
	if (!form.value || value === form.value.numberResetMode) {
		return
	}
	// Switching to continuous is a consequential numbering-policy change → confirm.
	// Switching back to yearly is applied directly; the format's year component is
	// enforced on save (client check in onSave + server validation).
	if (value === 'continuous') {
		confirmResetMode.value = true
	} else {
		form.value.numberResetMode = 'yearly'
	}
}

function applyResetMode() {
	confirmResetMode.value = false
	if (form.value) {
		form.value.numberResetMode = 'continuous'
	}
}

/** Pick a logo from the user's files (raster image) and store it immediately. */
function onPickLogo() {
	OC.dialogs.filepicker(
		t('rechnungswerk', 'Firmenlogo wählen'),
		async (path: string) => {
			if (!path) {
				return
			}
			logoBusy.value = true
			error.value = ''
			try {
				const res = await setLogo(path)
				if (form.value) {
					form.value.logoFileId = res.logoFileId
				}
			} catch (e) {
				fail(e, t('rechnungswerk', 'Logo konnte nicht gesetzt werden.'))
			} finally {
				logoBusy.value = false
			}
		},
		false,
		['image/png', 'image/jpeg', 'image/gif'],
		true,
		OC.dialogs.FILEPICKER_TYPE_CHOOSE,
	)
}

/** Remove the company logo immediately. */
async function onRemoveLogo() {
	logoBusy.value = true
	error.value = ''
	try {
		await deleteLogo()
		if (form.value) {
			form.value.logoFileId = null
		}
	} catch (e) {
		fail(e, t('rechnungswerk', 'Logo konnte nicht entfernt werden.'))
	} finally {
		logoBusy.value = false
	}
}

async function onSave() {
	if (!form.value) {
		return
	}
	error.value = ''
	// Mirror the server rule: a yearly-resetting counter needs a year component
	// in the format, otherwise numbers repeat every Jan 1.
	const fmt = (form.value.numberFormat || '').trim()
	if (form.value.numberResetMode === 'yearly' && !/\{YYYY\}|\{YY\}/.test(fmt)) {
		error.value = t('rechnungswerk', 'Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen.')
		return
	}
	savingPerms.value = true
	try {
		const payload = { ...form.value } as SettingsSave
		// The logo is managed via its own endpoints (setLogo/deleteLogo), not the
		// generic save — the server ignores logoFileId here, so don't send it.
		delete payload.logoFileId
		// Only send the SMTP password when the admin typed a new one (it is
		// masked; an empty field means "keep the stored one").
		if (smtpPassword.value !== '') {
			payload.smtpPassword = smtpPassword.value
		}
		if (imapPassword.value !== '') {
			payload.imapPassword = imapPassword.value
		}
		// Two separate calls (company settings vs access lists). Report which
		// step failed so a partial save is not silently misread as "all saved".
		try {
			await store.save(payload)
		} catch (e) {
			fail(e, t('rechnungswerk', 'Speichern der Einstellungen fehlgeschlagen.'))
			return
		}
		try {
			await updatePermissions({
				admins: appAdmins.value.map((p) => p.id),
				users: appUsers.value.map((p) => p.id),
			})
		} catch (e) {
			fail(e, t('rechnungswerk', 'Einstellungen gespeichert, aber die Zugriffsrechte konnten nicht gespeichert werden. Bitte erneut speichern.'))
			return
		}
		smtpPassword.value = ''
		imapPassword.value = ''
		hydrate()
	} finally {
		savingPerms.value = false
	}
}

async function onTestSmtp() {
	if (!form.value?.smtpHost) {
		return
	}
	testingSmtp.value = true
	smtpTestResult.value = ''
	try {
		await testSmtp({
			host: form.value.smtpHost,
			port: form.value.smtpPort ?? 587,
			security: form.value.smtpSecurity || 'starttls',
			user: form.value.smtpUser ?? '',
			password: smtpPassword.value,
		})
		smtpTestOk.value = true
		smtpTestResult.value = t('rechnungswerk', 'Verbindung erfolgreich.')
	} catch (e) {
		smtpTestOk.value = false
		smtpTestResult.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Verbindung fehlgeschlagen.')
	} finally {
		testingSmtp.value = false
	}
}

function fail(e: unknown, fallback: string) {
	error.value = (e as { message?: string }).message ?? fallback
	console.error('[rechnungswerk] settings:', e)
}
</script>

<style scoped>
/* Layout/cards/fields/inputs come from the shared src/css/app.css. */
.tax-rate-field {
	margin-top: 12px;
}
.rw-settings-title {
	margin: 0 0 16px;
	font-size: 22px;
	font-weight: 700;
}
.settings-form {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
.color-input {
	width: 48px;
	height: 32px;
	padding: 0;
	border: none;
	background: none;
	cursor: pointer;
}
/* Access section: description above the picker, clear spacing between groups. */
.rw-access-intro {
	margin-bottom: 16px;
}
.rw-access-group {
	display: flex;
	flex-direction: column;
	gap: 4px;
}
.rw-access-group + .rw-access-group {
	margin-top: 20px;
}
.rw-access-label {
	font-weight: 600;
}
.rw-access-desc {
	margin: 0 0 4px;
}
.smtp-test {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-top: 8px;
}
.smtp-test__result.rw-ok {
	color: #2a8c4a;
	font-weight: 600;
}
.smtp-test__result.rw-err {
	color: #cc4b42;
	font-weight: 600;
}
.rw-logo {
	display: flex;
	align-items: center;
	gap: 16px;
	margin-top: 4px;
}
.rw-logo__preview {
	max-width: 180px;
	max-height: 72px;
	object-fit: contain;
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius);
	padding: 6px;
	background: #ffffff;
}
.rw-logo__empty {
	color: var(--color-text-maxcontrast);
	font-style: italic;
}
.rw-logo__actions {
	display: flex;
	gap: 8px;
}
</style>
