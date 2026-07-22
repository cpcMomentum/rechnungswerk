<template>
	<div class="rw-view">
		<div class="rw-editor-head">
			<NcBreadcrumbs>
				<NcBreadcrumb :name="isQuote ? t('rechnungswerk', 'Angebote') : t('rechnungswerk', 'Rechnungen')" :to="{ name: listRoute }" />
				<NcBreadcrumb :name="headerTitle" />
			</NcBreadcrumbs>
			<span v-if="invoice" class="rw-status-group">
				<span class="rw-status-tag">
					<component :is="statusIcon(invoice.status)" :size="18" :class="['rw-sicon', `rw-sicon--${invoice.status}`]" />
					{{ statusLabel }}
				</span>
				<span v-if="!isQuote && invoice.invoiceType !== 'invoice'" v-tooltip="typeTooltip" class="rw-pill">{{ typeLabel }}</span>
				<span v-if="isQuote && invoice.relatedQuoteNumber" class="rw-pill">{{ t('rechnungswerk', 'Revision von {number}', { number: invoice.relatedQuoteNumber }) }}</span>
				<span v-if="invoice.datevStatus && datevStatusLabel" class="rw-status-tag" :title="t('rechnungswerk', 'DATEV-Übergabe')">
					<component :is="datevIcon(invoice.datevStatus)" :size="18" :class="['rw-sicon', `rw-sicon--datev-${invoice.datevStatus}`]" />
					{{ datevStatusLabel }}
				</span>
			</span>
		</div>

		<NcNoteCard v-if="error" type="error" :text="error" />
		<NcNoteCard v-if="notice" type="success" :text="notice" />
		<NcNoteCard v-if="readonly" type="info"
			:text="isQuote
				? t('rechnungswerk', 'Dieses Angebot ist festgeschrieben und kann nicht mehr geändert werden.')
				: t('rechnungswerk', 'Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.')" />

		<!-- Kopfdaten -->
		<section class="rw-section">
			<h3>{{ isQuote ? t('rechnungswerk', 'Angebotsdaten') : t('rechnungswerk', 'Rechnungsdaten') }}</h3>
			<div class="rw-form-row">
				<label class="rw-field invoice-no"><span>{{ isQuote ? t('rechnungswerk', 'Angebotsnummer') : t('rechnungswerk', 'Rechnungsnummer') }}</span>
					<input class="rw-input" type="text" readonly :value="invoice?.number ?? t('rechnungswerk', '(wird vergeben)')" /></label>
				<label class="rw-field"><span>{{ isQuote ? t('rechnungswerk', 'Geplanter Leistungszeitraum (optional)') : t('rechnungswerk', 'Leistungsdatum /-zeitraum') }}</span>
					<input v-model="form.performancePeriodStart" class="rw-input" type="date" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'bis (optional)') }}</span>
					<input v-model="form.performancePeriodEnd" class="rw-input" type="date" :readonly="readonly" /></label>
			</div>
			<p class="rw-hint">{{ isQuote
				? t('rechnungswerk', 'Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.')
				: t('rechnungswerk', 'Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.') }}</p>
			<details class="more">
				<summary>{{ isQuote
					? t('rechnungswerk', 'Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)')
					: t('rechnungswerk', 'Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)') }}</summary>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Referenznummer') }}</span>
						<input v-model="form.referenceNumber" class="rw-input" type="text" :readonly="readonly" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Bestellnummer') }}</span>
						<input v-model="form.orderNumber" class="rw-input" type="text" :readonly="readonly" /></label>
					<!-- Leitweg-ID (BT-10) is an e-invoice field for public buyers; a quote has none. -->
					<label v-if="!isQuote" class="rw-field"><span>{{ t('rechnungswerk', 'Käuferreferenz / Leitweg-ID (BT-10)') }}</span>
						<input v-model="form.buyerReference" class="rw-input" type="text" :readonly="readonly"
							:placeholder="t('rechnungswerk', 'nur für öffentliche Auftraggeber')" /></label>
					<span v-else class="rw-field" aria-hidden="true" />
				</div>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Vertragsnummer (BT-12)') }}</span>
						<input v-model="form.contractNumber" class="rw-input" type="text" :readonly="readonly" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Objekt-/Projektkennung (BT-18)') }}</span>
						<input v-model="form.projectReference" class="rw-input" type="text" :readonly="readonly" /></label>
					<span class="rw-field" aria-hidden="true" />
				</div>
			</details>
		</section>

		<!-- Empfänger -->
		<section class="rw-section">
			<h3>{{ t('rechnungswerk', 'Empfänger') }}</h3>
			<div v-if="!readonly" class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Kunde übernehmen') }}</span>
					<CustomerPicker @select="onCustomerSelect" />
					<span class="rw-hint">{{ t('rechnungswerk', 'Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.') }}</span></label>
			</div>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Name') }}</span>
					<ContactPicker v-if="!readonly" v-model="form.recipientName" @select="onContactSelect" />
					<input v-else class="rw-input" type="text" readonly :value="form.recipientName" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'E-Mail') }}</span>
					<input v-model="form.recipientEmail" class="rw-input" type="email" :readonly="readonly" /></label>
			</div>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Straße') }}</span>
					<input v-model="form.recipientAddress" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field rw-field--narrow"><span>{{ t('rechnungswerk', 'PLZ') }}</span>
					<input v-model="form.recipientPostalCode" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Ort') }}</span>
					<input v-model="form.recipientCity" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field rw-field--narrow"><span>{{ t('rechnungswerk', 'Land') }}</span>
					<input v-model="form.recipientCountry" class="rw-input" type="text" :readonly="readonly" /></label>
			</div>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'USt-IdNr. (optional)') }}</span>
					<input v-model="form.recipientVatId" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Ansprechpartner (optional)') }}</span>
					<input v-model="form.recipientContactPerson" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Telefon (optional)') }}</span>
					<input v-model="form.recipientPhone" class="rw-input" type="text" :readonly="readonly" /></label>
			</div>
		</section>

		<!-- Rechnungssteller / Ansprechpartner (Verkäuferseite) -->
		<section class="rw-section">
			<h3>{{ isQuote ? t('rechnungswerk', 'Ansprechpartner (für dieses Angebot)') : t('rechnungswerk', 'Ansprechpartner (für diese Rechnung)') }}</h3>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Name') }}</span>
					<input v-model="form.sellerContactPerson" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Telefon') }}</span>
					<input v-model="form.sellerContactPhone" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'E-Mail') }}</span>
					<input v-model="form.sellerContactEmail" class="rw-input" type="email" :readonly="readonly" /></label>
			</div>
			<p class="rw-hint">{{ isQuote
				? t('rechnungswerk', 'Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.')
				: t('rechnungswerk', 'Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.') }}</p>
		</section>

		<!-- Anrede & Einleitung (vor den Positionen) -->
		<section class="rw-section">
			<div class="rw-section-head">
				<h3>{{ t('rechnungswerk', 'Anrede & Einleitung') }}</h3>
				<NcActions v-if="!readonly && openingSnippets.length > 0"
					:menu-name="t('rechnungswerk', 'Vorlage einfügen')">
					<template #icon><TextBoxIcon :size="18" /></template>
					<NcActionButton v-for="s in openingSnippets" :key="s.id" @click="applyOpening(s)">
						{{ s.label }}
					</NcActionButton>
				</NcActions>
			</div>
			<label class="rw-field"><span>{{ t('rechnungswerk', 'Anrede & Einleitung') }}</span>
				<textarea v-model="form.greeting" class="rw-input" rows="3" :readonly="readonly"
					:placeholder="t('rechnungswerk', 'Anrede und Einleitung – Vorgabe aus den Textbausteinen')" /></label>
		</section>

		<!-- Positionen -->
		<section class="rw-section">
			<h3>{{ t('rechnungswerk', 'Positionen') }}</h3>
			<InvoiceItemsTable
				v-model:items="items"
				:products="productStore.products"
				:readonly="readonly"
				:small-business="settingsStore.settings?.smallBusiness ?? false"
				:default-tax-rate-bp="settingsStore.settings?.defaultTaxRateBp ?? 1900" />
		</section>

		<!-- Steuer & Summen -->
		<section class="rw-section">
			<h3>{{ t('rechnungswerk', 'Steuer & Summen') }}</h3>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Steuerfall') }}</span>
					<select v-model="form.specialTaxCase" class="rw-input" :disabled="readonly">
						<option value="">{{ t('rechnungswerk', 'Regelbesteuerung') }}</option>
						<option value="reverse_charge">{{ t('rechnungswerk', 'Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)') }}</option>
						<option value="intra_community">{{ t('rechnungswerk', 'Innergemeinschaftliche Lieferung (steuerfrei)') }}</option>
						<option value="export">{{ t('rechnungswerk', 'Ausfuhrlieferung Drittland (steuerfrei)') }}</option>
					</select></label>
				<span class="rw-field" aria-hidden="true" />
			</div>
			<NcNoteCard v-if="form.specialTaxCase !== ''" type="info"
				:text="t('rechnungswerk', 'Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.')" />
			<div class="rw-totals">
				<div class="rw-kpi-card">
					<div class="rw-kpi-row">
						<span>{{ t('rechnungswerk', 'Zwischensumme (netto)') }}</span>
						<strong>{{ formatCents(totals.subtotalCents) }}</strong>
					</div>
					<div v-for="row in totals.taxBreakdown" :key="row.rateBp" class="rw-kpi-row rw-kpi-row--muted">
						<span>{{ t('rechnungswerk', 'USt {rate}', { rate: formatTaxRate(row.rateBp) }) }} ({{ formatCents(row.netCents) }})</span>
						<span>{{ formatCents(row.taxCents) }}</span>
					</div>
					<div class="rw-kpi-row rw-kpi-row--grand">
						<span>{{ t('rechnungswerk', 'Gesamt (brutto)') }}</span>
						<strong>{{ formatCents(totals.totalCents) }}</strong>
					</div>
				</div>
			</div>
		</section>

		<!-- Zahlungsbedingungen (Rechnung) -->
		<section v-if="!isQuote" class="rw-section">
			<h3>{{ t('rechnungswerk', 'Zahlungsbedingungen') }}</h3>
			<div class="rw-form-row">
				<label class="rw-field payterm-days"><span>{{ t('rechnungswerk', 'Zahlungsziel (Tage)') }}</span>
					<input v-model="form.paymentTermDays" class="rw-input" type="number" min="0" step="1" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Fällig am') }}</span>
					<input class="rw-input" type="text" readonly :value="dueDatePreview || '—'" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Skonto') }}</span>
					<input v-model="form.discountTerms" class="rw-input" type="text" :readonly="readonly"
						:placeholder="t('rechnungswerk', 'z. B. 2 % bei Zahlung bis …')" /></label>
			</div>
		</section>

		<!-- Gültigkeit (Angebot, #111) -->
		<section v-else class="rw-section">
			<h3>{{ t('rechnungswerk', 'Gültigkeit') }}</h3>
			<div class="rw-form-row">
				<label class="rw-field payterm-days"><span>{{ t('rechnungswerk', 'Gültig bis') }}</span>
					<input v-model="form.validUntil" class="rw-input" type="date" :readonly="readonly" /></label>
				<label class="rw-field rw-checkbox-field">
					<span class="rw-checkbox-row">
						<input v-model="form.offerFreeform" type="checkbox" :disabled="readonly" />
						{{ t('rechnungswerk', 'Freibleibendes Angebot (unverbindlich)') }}
					</span>
				</label>
			</div>
			<p class="rw-hint">{{ t('rechnungswerk', '„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.') }}</p>
		</section>

		<!-- Schlusstext -->
		<section class="rw-section">
			<div class="rw-section-head">
				<h3>{{ t('rechnungswerk', 'Schlusstext') }}</h3>
				<NcActions v-if="!readonly && closingSnippets.length > 0"
					:menu-name="t('rechnungswerk', 'Vorlage einfügen')">
					<template #icon><TextBoxIcon :size="18" /></template>
					<NcActionButton v-for="s in closingSnippets" :key="s.id" @click="applyClosing(s)">
						{{ s.label }}
					</NcActionButton>
				</NcActions>
			</div>
			<label class="rw-field"><span>{{ t('rechnungswerk', 'Schlusstext / Anmerkungen') }}</span>
				<textarea v-model="form.extraText" class="rw-input" rows="3" :readonly="readonly"
					:placeholder="t('rechnungswerk', 'Schlusstext – Vorgabe aus den Textbausteinen')" /></label>
		</section>

		<!-- Notizen / Hinweise (BT-22) -->
		<section v-if="!readonly || notes.length > 0" class="rw-section">
			<h3>{{ isQuote ? t('rechnungswerk', 'Notizen / Hinweise auf dem Angebot') : t('rechnungswerk', 'Notizen / Hinweise auf der Rechnung') }}</h3>
			<div v-for="(note, i) in notes" :key="i" class="rw-note-row">
				<input v-model="notes[i]" class="rw-input" type="text" :readonly="readonly"
					:aria-label="t('rechnungswerk', 'Notiz {index}', { index: i + 1 })" />
				<NcButton v-if="!readonly" variant="tertiary"
					:aria-label="t('rechnungswerk', 'Notiz entfernen')" @click="removeNote(i)">
					<template #icon><DeleteIcon :size="20" /></template>
				</NcButton>
			</div>
			<NcButton v-if="!readonly" variant="tertiary" @click="addNote">
				<template #icon><PlusIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Notiz hinzufügen') }}
			</NcButton>
			<p class="rw-hint">{{ isQuote
				? t('rechnungswerk', 'Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.')
				: t('rechnungswerk', 'Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.') }}</p>
		</section>

		<!-- Sticky actions -->
		<div class="rw-action-bar">
			<template v-if="!readonly">
				<NcButton :disabled="saving" @click="save()">{{ t('rechnungswerk', 'Speichern') }}</NcButton>
				<NcButton :disabled="saving" @click="openPreview">
					<template #icon><EyeOutlineIcon :size="20" /></template>
					{{ t('rechnungswerk', 'Vorschau') }}
				</NcButton>
				<NcButton variant="primary" :disabled="saving" @click="askFinalize">
					<template #icon><LockIcon :size="20" /></template>
					{{ t('rechnungswerk', 'Festschreiben') }}
				</NcButton>
				<NcButton v-if="invoice" variant="error" :disabled="saving" @click="askDelete">
					{{ t('rechnungswerk', 'Löschen') }}
				</NcButton>
			</template>
			<template v-else-if="invoice">
				<NcButton @click="downloadPdf">
					<template #icon><DownloadIcon :size="20" /></template>
					{{ t('rechnungswerk', 'PDF herunterladen') }}
				</NcButton>
				<NcButton :variant="isQuote ? 'secondary' : 'primary'" :disabled="sending" @click="sendDialogOpen = true">
					<template #icon><SendIcon :size="20" /></template>
					{{ t('rechnungswerk', 'An Kunde senden') }}
				</NcButton>
				<!-- Invoice: correction via storno -->
				<NcButton v-if="!isQuote && invoice.status === 'committed'" variant="error" :disabled="saving" @click="askCancel">
					{{ t('rechnungswerk', 'Stornieren') }}
				</NcButton>
				<!-- Quote lifecycle (#111): decide (open/expired), revise and/or convert -->
				<template v-if="isQuote">
					<NcButton v-if="canDecideQuote" :disabled="saving" @click="doAccept">
						<template #icon><CheckIcon :size="20" /></template>
						{{ t('rechnungswerk', 'Annehmen') }}
					</NcButton>
					<NcButton v-if="canDecideQuote" :disabled="saving" @click="doReject">
						<template #icon><CloseIcon :size="20" /></template>
						{{ t('rechnungswerk', 'Ablehnen') }}
					</NcButton>
					<NcButton v-if="canReviseQuote" :disabled="saving" @click="askRevise">
						<template #icon><FileEditOutlineIcon :size="20" /></template>
						{{ t('rechnungswerk', 'Revidieren') }}
					</NcButton>
					<NcButton v-if="canConvertQuote" variant="primary" :disabled="saving" @click="askConvert">
						<template #icon><FileMoveOutlineIcon :size="20" /></template>
						{{ t('rechnungswerk', 'In Rechnung übernehmen') }}
					</NcButton>
				</template>
			</template>
		</div>

		<ConfirmDialog :open="dialog === 'finalize'"
			:name="isQuote ? t('rechnungswerk', 'Angebot festschreiben') : t('rechnungswerk', 'Rechnung festschreiben')"
			:message="finalizeMessage"
			:confirm-label="t('rechnungswerk', 'Festschreiben')"
			@close="dialog = null" @confirm="doFinalize" />
		<ConfirmDialog :open="dialog === 'delete'"
			:name="isQuote ? t('rechnungswerk', 'Angebot löschen') : t('rechnungswerk', 'Entwurf löschen')"
			:message="isQuote ? t('rechnungswerk', 'Diesen Angebots-Entwurf wirklich löschen?') : t('rechnungswerk', 'Diesen Entwurf wirklich löschen?')"
			:confirm-label="t('rechnungswerk', 'Löschen')" destructive
			@close="dialog = null" @confirm="doDelete" />
		<ConfirmDialog :open="dialog === 'cancel'"
			:name="t('rechnungswerk', 'Rechnung stornieren')"
			:message="t('rechnungswerk', 'Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?')"
			:confirm-label="t('rechnungswerk', 'Stornorechnung erstellen')" destructive
			@close="dialog = null" @confirm="doCancel" />
		<ConfirmDialog :open="dialog === 'convert'"
			:name="t('rechnungswerk', 'In Rechnung übernehmen')"
			:message="t('rechnungswerk', 'Aus diesem Angebot wird ein neuer Rechnungs-Entwurf mit denselben Positionen erstellt. Das Angebot wird als „übernommen“ markiert. Fortfahren?')"
			:confirm-label="t('rechnungswerk', 'Rechnung erstellen')"
			@close="dialog = null" @confirm="doConvert" />
		<ConfirmDialog :open="dialog === 'revise'"
			:name="t('rechnungswerk', 'Angebot revidieren')"
			:message="t('rechnungswerk', 'Es wird eine überarbeitbare Kopie als neue Angebots-Revision erstellt. Beim Festschreiben erhält sie eine Revisionsnummer (z. B. AN-…-1) und dieses Angebot wird als „revidiert“ markiert. Fortfahren?')"
			:confirm-label="t('rechnungswerk', 'Revision erstellen')"
			@close="dialog = null" @confirm="doRevise" />

		<SendInvoiceDialog
			:open="sendDialogOpen"
			:invoice="invoice"
			:default-body="defaultMailBody"
			:saving="sending"
			:kind="isQuote ? 'quote' : 'invoice'"
			@close="sendDialogOpen = false"
			@send="doSend" />

		<NcDialog :open="previewOpen"
			:name="t('rechnungswerk', 'Vorschau (Entwurf)')"
			size="large"
			@update:open="onPreviewUpdateOpen">
			<iframe v-if="previewUrl"
				:src="previewUrl"
				class="preview-frame"
				:title="t('rechnungswerk', 'Vorschau (Entwurf)')" />
		</NcDialog>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcDialog from '@nextcloud/vue/components/NcDialog'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcBreadcrumbs from '@nextcloud/vue/components/NcBreadcrumbs'
import NcBreadcrumb from '@nextcloud/vue/components/NcBreadcrumb'
import LockIcon from 'vue-material-design-icons/Lock.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'
import DownloadIcon from 'vue-material-design-icons/Download.vue'
import SendIcon from 'vue-material-design-icons/Send.vue'
import PencilOutlineIcon from 'vue-material-design-icons/PencilOutline.vue'
import EyeOutlineIcon from 'vue-material-design-icons/EyeOutline.vue'
import CheckIcon from 'vue-material-design-icons/Check.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import FileMoveOutlineIcon from 'vue-material-design-icons/FileMoveOutline.vue'
import FileEditOutlineIcon from 'vue-material-design-icons/FileEditOutline.vue'
import CloseCircleIcon from 'vue-material-design-icons/CloseCircle.vue'
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import ClockOutlineIcon from 'vue-material-design-icons/ClockOutline.vue'
import HelpCircleOutlineIcon from 'vue-material-design-icons/HelpCircleOutline.vue'
import ContactPicker from '@/components/ContactPicker.vue'
import CustomerPicker from '@/components/CustomerPicker.vue'
import InvoiceItemsTable from '@/components/InvoiceItemsTable.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import SendInvoiceDialog from '@/components/SendInvoiceDialog.vue'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import TextBoxIcon from 'vue-material-design-icons/TextBox.vue'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { useQuoteStore } from '@/stores/quoteStore'
import { useProductStore } from '@/stores/productStore'
import { useSettingsStore } from '@/stores/settingsStore'
import { useTextSnippetStore } from '@/stores/textSnippetStore'
import { INVOICE_STATUS_LABELS, INVOICE_TYPE_LABELS, QUOTE_STATUS_LABELS, type ContactMatch, type Customer, type InvoiceDetail, type SnippetDocType, type TextSnippet } from '@/types/api'
import { emptyItem, itemFromInvoiceItem, type EditorItem } from '@/types/editor'
import { formatCents, formatTaxRate, euroInputToCents } from '@/utils/money'
import { computeTotals, lineTotalCents } from '@/utils/invoiceCalc'
import { downloadInvoicePdf, invoicePreviewUrl, sendInvoice, type InvoiceInput } from '@/api/invoices'
import { downloadQuotePdf, quotePreviewUrl, sendQuote } from '@/api/quotes'
import { getMyContact } from '@/api/me'

const props = defineProps<{ id?: string }>()
const route = useRoute()
const router = useRouter()
const invoiceStore = useInvoiceStore()
const quoteStore = useQuoteStore()
const productStore = useProductStore()
const settingsStore = useSettingsStore()
const textSnippetStore = useTextSnippetStore()

// The invoice editor doubles as the quote editor (#111): the mode is derived
// from the route name ('quote-new'/'quote-detail' → quote). Everything below
// keeps the invoice path unchanged and only diverges when isQuote is true.
const isQuote = computed(() => typeof route.name === 'string' && route.name.startsWith('quote'))
// Facade over whichever store owns this document type. Both expose the same
// get/create/update/remove/commit surface; quote-only actions (accept/reject/
// convert) and invoice-only ones (cancel) are called on their store directly.
const docStore = computed(() => (isQuote.value ? quoteStore : invoiceStore))
// Text snippets (#126/#141): the insertable templates and the auto-fill default
// are scoped to this document's type so quotes carry their own wording.
const snippetDocType = computed<SnippetDocType>(() => (isQuote.value ? 'quote' : 'invoice'))
const openingSnippets = computed(() => textSnippetStore.forSlot(snippetDocType.value, 'opening'))
const closingSnippets = computed(() => textSnippetStore.forSlot(snippetDocType.value, 'closing'))
function applyOpening(snippet: TextSnippet) {
	form.greeting = snippet.content ?? ''
}
function applyClosing(snippet: TextSnippet) {
	form.extraText = snippet.content ?? ''
}
const listRoute = computed(() => (isQuote.value ? 'quotes' : 'invoices'))
const detailRoute = computed(() => (isQuote.value ? 'quote-detail' : 'invoice-detail'))

const invoice = ref<InvoiceDetail | null>(null)
const items = ref<EditorItem[]>([emptyItem()])
const notes = ref<string[]>([])
const error = ref('')
const notice = ref('')
const saving = ref(false)
const sending = ref(false)
const sendDialogOpen = ref(false)
const previewOpen = ref(false)
const previewUrl = ref('')
const dialog = ref<'finalize' | 'delete' | 'cancel' | 'convert' | 'revise' | null>(null)

const emptyForm = () => ({
	customerId: null as number | null,
	recipientName: '', recipientEmail: '', recipientAddress: '', recipientPostalCode: '',
	recipientCity: '', recipientCountry: 'DE', recipientVatId: '', recipientContactId: '',
	recipientContactPerson: '', recipientPhone: '',
	sellerContactPerson: '', sellerContactPhone: '', sellerContactEmail: '',
	performanceDate: '', performancePeriodStart: '', performancePeriodEnd: '',
	referenceNumber: '', orderNumber: '', buyerReference: '',
	contractNumber: '', projectReference: '', specialTaxCase: '',
	greeting: '', extraText: '',
	paymentTermDays: '' as string | number, discountTerms: '',
	validUntil: '', offerFreeform: false,
})
const form = reactive(emptyForm())

const TAX_EXEMPT_CASES = ['reverse_charge', 'intra_community', 'export']
const taxExempt = computed(() =>
	(settingsStore.settings?.smallBusiness ?? false) || TAX_EXEMPT_CASES.includes(form.specialTaxCase))

const dueDatePreview = computed(() => {
	const days = Number.parseInt(String(form.paymentTermDays), 10)
	if (Number.isNaN(days)) {
		return ''
	}
	// Parse "Y-m-d" at local noon so the preview never shifts a day in
	// timezones west of UTC (the real due date is computed server-side anyway).
	const atLocalNoon = (ymd: string): Date => new Date(`${ymd}T12:00:00`)
	if (invoice.value?.dueDate) {
		return atLocalNoon(invoice.value.dueDate).toLocaleDateString()
	}
	const base = invoice.value?.issueDate ? atLocalNoon(invoice.value.issueDate) : new Date()
	base.setDate(base.getDate() + days)
	return base.toLocaleDateString()
})

const readonly = computed(() => invoice.value !== null && invoice.value.status !== 'draft')
const STATUS_ICON: Record<string, unknown> = { draft: PencilOutlineIcon, committed: LockIcon, cancelled: CloseCircleIcon }
const DATEV_ICON: Record<string, unknown> = { pending: ClockOutlineIcon, confirmed: CheckCircleIcon, unknown: HelpCircleOutlineIcon, failed: CloseCircleIcon }
const statusIcon = (s: string): unknown => STATUS_ICON[s] ?? PencilOutlineIcon
const datevIcon = (s: string): unknown => DATEV_ICON[s] ?? HelpCircleOutlineIcon
// For a committed quote the derived quote status (Offen/Angenommen/…) is more
// informative than the generic document status, so show it in quote mode.
const statusLabel = computed(() => {
	if (!invoice.value) {
		return ''
	}
	if (isQuote.value && invoice.value.quoteStatus) {
		return t('rechnungswerk', QUOTE_STATUS_LABELS[invoice.value.quoteStatus] ?? invoice.value.status)
	}
	return t('rechnungswerk', INVOICE_STATUS_LABELS[invoice.value.status])
})
const typeLabel = computed(() => invoice.value ? t('rechnungswerk', INVOICE_TYPE_LABELS[invoice.value.invoiceType]) : '')
const datevStatusLabel = computed(() => {
	const map: Record<string, string> = {
		pending: t('rechnungswerk', 'DATEV: gesendet'),
		confirmed: t('rechnungswerk', 'DATEV: bestätigt'),
		failed: t('rechnungswerk', 'DATEV: abgelehnt'),
		unknown: t('rechnungswerk', 'DATEV: Antwort prüfen'),
	}
	const s = invoice.value?.datevStatus
	return s ? (map[s] ?? '') : ''
})
const typeTooltip = computed(() => {
	if (!invoice.value) {
		return ''
	}
	return invoice.value.relatedNumber
		? t('rechnungswerk', '{type} zu Rechnung {number}', { type: typeLabel.value, number: invoice.value.relatedNumber })
		: typeLabel.value
})

const finalizeMessage = computed(() => {
	if (isQuote.value) {
		return t('rechnungswerk', 'Das Angebot erhält eine endgültige Angebotsnummer und ist danach unveränderbar. Fortfahren?')
	}
	let msg = t('rechnungswerk', 'Die Rechnung erhält eine endgültige Nummer und ist danach unveränderbar. Korrektur nur per Storno. Fortfahren?')
	const s = settingsStore.settings
	if (s?.datevAutoSend && s.datevUploadMail) {
		msg += '\n\n' + t('rechnungswerk', 'Beim Festschreiben wird automatisch eine E-Rechnung an DATEV ({mail}) gesendet.', { mail: s.datevUploadMail })
	}
	return msg
})

const defaultMailBody = computed(() => {
	// Opening already bundles salutation + intro (see onMounted / invoice.greeting);
	// fall back to the default text snippet for this document type (#126/#141).
	const opening = (invoice.value?.greeting
		?? textSnippetStore.defaultContent(snippetDocType.value, 'opening')).trim()
	const closing = (invoice.value?.extraText
		?? textSnippetStore.defaultContent(snippetDocType.value, 'closing')).trim()
	const fallback = isQuote.value
		? t('rechnungswerk', 'anbei erhalten Sie unser Angebot als PDF.')
		: t('rechnungswerk', 'anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).')
	const parts = [
		opening !== '' ? opening : fallback,
		closing,
	].filter(p => p !== '')
	return parts.join('\n\n')
})
const headerTitle = computed(() => {
	if (invoice.value) {
		return invoice.value.number ?? t('rechnungswerk', 'Entwurf')
	}
	return isQuote.value ? t('rechnungswerk', 'Neues Angebot') : t('rechnungswerk', 'Neue Rechnung')
})

const totals = computed(() => computeTotals(items.value.map(i => ({
	taxRateBp: i.taxRateBp,
	lineTotalCents: lineTotalCents(i.quantity, euroInputToCents(i.priceInput)),
})), taxExempt.value))

// Bumped on every navigation-driven (re-)load below; load()/initNew() compare
// the token they were called with against the current value after their
// await so a slow, superseded request can't clobber a newer one's state when
// the user navigates between invoices faster than the response arrives.
let navToken = 0

onMounted(async () => {
	const token = ++navToken
	try {
		await Promise.all([productStore.fetchAll(), settingsStore.fetch(), textSnippetStore.ensureLoaded()])
		if (token !== navToken) {
			return
		}
		if (props.id) {
			await load(Number(props.id), token)
		} else {
			await initNew(token)
		}
	} catch (e) {
		fail(e, t('rechnungswerk', 'Laden fehlgeschlagen'))
	}
})

// invoice-new and invoice-detail share this component, so Vue Router reuses
// the instance on SPA navigation between them — onMounted does not run again
// (#109). Reset and re-initialise here instead of forcing a remount via a
// keyed router-view: save() swaps /invoices/new to /invoices/{id} while the
// finalize/preview flow is still running on this instance, and a remount
// would strand that flow on a dead instance.
// Also react to the document mode (route name): the same component instance
// backs both invoice and quote editors, so navigating invoice→quote keeps the
// instance and only the route name changes.
watch(() => [route.name, props.id] as const, async ([, newId]) => {
	const token = ++navToken
	try {
		if (!newId) {
			resetEditor()
			await initNew(token)
		} else {
			// Reload when the id differs OR the loaded document's type no longer
			// matches the current mode (invoice↔quote on the same id).
			const modeMismatch = invoice.value !== null
				&& (invoice.value.invoiceType === 'quote') !== isQuote.value
			if (invoice.value?.id !== Number(newId) || modeMismatch) {
				resetEditor()
				await load(Number(newId), token)
			}
		}
		// invoice.value.id === newId and same mode: our own router.replace after
		// creating the draft — state is already current, nothing to do.
	} catch (e) {
		fail(e, t('rechnungswerk', 'Laden fehlgeschlagen'))
	}
})

/** Blank editor state for a fresh invoice (SPA navigation, no remount). */
function resetEditor() {
	invoice.value = null
	items.value = [emptyItem()]
	notes.value = []
	error.value = ''
	notice.value = ''
	sendDialogOpen.value = false
	previewOpen.value = false
	previewUrl.value = ''
	dialog.value = null
	Object.assign(form, emptyForm())
}

/** Defaults for a new invoice: text templates + seller-contact cascade. */
async function initNew(token: number = navToken) {
	const s = settingsStore.settings
	// Opening = salutation + intro (rendered above the line items); the closing
	// text is edited separately below. Both are pre-filled from the default text
	// snippet for this document type (#126/#141), empty when none is flagged.
	form.greeting = textSnippetStore.defaultContent(snippetDocType.value, 'opening')
	form.extraText = textSnippetStore.defaultContent(snippetDocType.value, 'closing')
	// Global default payment term (#117) pre-fills the due date on new invoices;
	// a customer-specific term still overrides this on customer selection. A
	// quote has no payment term, so it is left blank there.
	form.paymentTermDays = isQuote.value ? '' : (s?.defaultPaymentTermDays ?? '')
	// Seller-contact cascade (#47): the user's personal default ("Mein
	// Kontakt") first, falling back per field to the central company
	// contact when unset. Left fully empty → backend uses the company
	// contact. The NC account is no longer pulled automatically; it is a
	// manual import in the "Mein Kontakt" area.
	let mine = { person: '', phone: '', email: '' }
	try {
		mine = await getMyContact()
	} catch {
		// ignore — company contact will be used
	}
	if (token !== navToken) {
		return
	}
	form.sellerContactPerson = mine.person || (s?.contactPerson ?? '')
	form.sellerContactPhone = mine.phone || (s?.contactPhone ?? '')
	form.sellerContactEmail = mine.email || (s?.contactEmail ?? '')
}

async function load(id: number, token: number = navToken) {
	// Route through the facade: a quote id must be fetched from /quotes, not
	// /invoices (the invoice endpoint type-rejects a quote id with a 404).
	const detail = await docStore.value.get(id)
	if (token !== navToken) {
		return
	}
	invoice.value = detail
	form.customerId = detail.customerId ?? null
	form.recipientName = detail.recipientName ?? ''
	form.recipientEmail = detail.recipientEmail ?? ''
	form.recipientAddress = detail.recipientAddress ?? ''
	form.recipientPostalCode = detail.recipientPostalCode ?? ''
	form.recipientCity = detail.recipientCity ?? ''
	form.recipientCountry = detail.recipientCountry ?? 'DE'
	form.recipientVatId = detail.recipientVatId ?? ''
	form.recipientContactId = detail.recipientContactId ?? ''
	form.recipientContactPerson = detail.recipientContactPerson ?? ''
	form.recipientPhone = detail.recipientPhone ?? ''
	form.sellerContactPerson = detail.sellerContactPerson ?? ''
	form.sellerContactPhone = detail.sellerContactPhone ?? ''
	form.sellerContactEmail = detail.sellerContactEmail ?? ''
	// Single date lives in the first ("von") field; a filled "bis" makes it a period.
	form.performancePeriodStart = detail.performancePeriodStart ?? detail.performanceDate ?? ''
	form.performancePeriodEnd = detail.performancePeriodEnd ?? ''
	form.referenceNumber = detail.referenceNumber ?? ''
	form.orderNumber = detail.orderNumber ?? ''
	form.buyerReference = detail.buyerReference ?? ''
	form.contractNumber = detail.contractNumber ?? ''
	form.projectReference = detail.projectReference ?? ''
	notes.value = [...(detail.notes ?? [])]
	form.specialTaxCase = detail.specialTaxCase ?? ''
	form.greeting = detail.greeting ?? ''
	form.extraText = detail.extraText ?? ''
	form.paymentTermDays = detail.paymentTermDays ?? ''
	form.discountTerms = detail.discountTerms ?? ''
	form.validUntil = detail.validUntil ?? ''
	form.offerFreeform = detail.offerFreeform ?? false
	items.value = detail.items.length > 0 ? detail.items.map(itemFromInvoiceItem) : [emptyItem()]
}

function addNote() {
	notes.value.push('')
}
function removeNote(i: number) {
	notes.value.splice(i, 1)
}

function onCustomerSelect(c: Customer) {
	form.customerId = c.id
	form.recipientName = c.name
	form.recipientContactId = ''
	form.recipientEmail = c.email ?? ''
	form.recipientAddress = c.address ?? ''
	form.recipientPostalCode = c.postalCode ?? ''
	form.recipientCity = c.city ?? ''
	form.recipientCountry = c.country ?? 'DE'
	form.recipientVatId = c.vatId ?? ''
	form.recipientContactPerson = c.contactPerson ?? ''
	form.recipientPhone = c.phone ?? ''
	// Customer default carries over to the invoice header (per-line tax stays per item).
	if (c.defaultPaymentTermDays != null) {
		form.paymentTermDays = c.defaultPaymentTermDays
	}
}

function onContactSelect(c: ContactMatch) {
	// Ad-hoc Nextcloud contact: no longer tied to a saved customer.
	form.customerId = null
	form.recipientName = c.name
	form.recipientEmail = c.email
	if (c.phone) {
		form.recipientPhone = c.phone
	}
	form.recipientAddress = c.address
	form.recipientPostalCode = c.postalCode
	form.recipientCity = c.city
	if (c.country) {
		form.recipientCountry = c.country
	}
}

function buildInput(): InvoiceInput {
	// Only the first field set → single performance date (BT-72); both fields set
	// → billing period (BG-14). Never persist both shapes at once.
	const von = form.performancePeriodStart
	const bis = form.performancePeriodEnd
	const dates = (von && bis)
		? { performanceDate: '', performancePeriodStart: von, performancePeriodEnd: bis }
		: { performanceDate: von || bis || '', performancePeriodStart: '', performancePeriodEnd: '' }
	const input: InvoiceInput = {
		...form,
		...dates,
		paymentTermDays: form.paymentTermDays === '' ? null : Number(form.paymentTermDays),
		notes: notes.value.map(n => n.trim()).filter(n => n !== ''),
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
	// Keep the payloads type-clean: a quote carries validity + freibleibend but no
	// payment term / discount; an invoice carries the reverse. Never write a
	// field of one document type onto the other.
	if (isQuote.value) {
		input.validUntil = form.validUntil === '' ? null : form.validUntil
		input.offerFreeform = form.offerFreeform
		input.paymentTermDays = null
		input.discountTerms = null
	} else {
		delete input.validUntil
		delete input.offerFreeform
	}
	return input
}

async function save(): Promise<InvoiceDetail | null> {
	error.value = ''
	saving.value = true
	try {
		let detail: InvoiceDetail
		if (invoice.value) {
			detail = await docStore.value.update(invoice.value.id, buildInput())
		} else {
			detail = await docStore.value.create(buildInput())
			router.replace({ name: detailRoute.value, params: { id: String(detail.id) } })
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

/**
 * Save the draft first so the preview reflects the current form state, then
 * show the watermarked preview PDF in a dialog.
 */
async function openPreview() {
	const saved = await save()
	if (!saved) {
		return
	}
	previewUrl.value = isQuote.value ? quotePreviewUrl(saved.id) : invoicePreviewUrl(saved.id)
	previewOpen.value = true
}
function onPreviewUpdateOpen(value: boolean) {
	if (!value) {
		previewOpen.value = false
		previewUrl.value = ''
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
function askConvert() {
	dialog.value = 'convert'
}
function askRevise() {
	dialog.value = 'revise'
}

/** A committed quote can be revised unless it was already converted or superseded (mirrors backend). */
const canReviseQuote = computed(() => isQuote.value && invoice.value?.status === 'committed'
	&& !['converted', 'superseded'].includes(invoice.value?.quoteStatus ?? ''))

/** Whether a committed quote can still be turned into an invoice (mirrors backend). */
const canConvertQuote = computed(() =>
	isQuote.value && invoice.value?.status === 'committed'
	&& ['open', 'expired', 'accepted'].includes(invoice.value?.quoteStatus ?? ''))
/** Whether a committed quote is still awaiting a decision (open/expired). */
const canDecideQuote = computed(() =>
	isQuote.value && invoice.value?.status === 'committed'
	&& ['open', 'expired'].includes(invoice.value?.quoteStatus ?? ''))

function downloadPdf() {
	if (!invoice.value) {
		return
	}
	if (isQuote.value) {
		downloadQuotePdf(invoice.value.id)
	} else {
		downloadInvoicePdf(invoice.value.id)
	}
}

async function doFinalize() {
	dialog.value = null
	const saved = await save()
	if (!saved) {
		return
	}
	saving.value = true
	try {
		const committed = await docStore.value.commit(saved.id)
		invoice.value = committed
		notice.value = ''
		if (isQuote.value) {
			notice.value = t('rechnungswerk', 'Angebot festgeschrieben.')
		} else {
			// The commit response carries a transient DATEV hand-off result that is
			// not part of the persisted invoice — surface it as feedback.
			const datevMailSent = (committed as InvoiceDetail & { datevMailSent?: boolean | null }).datevMailSent
			if (datevMailSent === true) {
				notice.value = t('rechnungswerk', 'Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.')
			} else if (datevMailSent === null) {
				error.value = t('rechnungswerk', 'Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden.')
			}
		}
	} catch (e) {
		fail(e, t('rechnungswerk', 'Festschreiben fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

async function doAccept() {
	if (!invoice.value) {
		return
	}
	saving.value = true
	error.value = ''
	try {
		invoice.value = await quoteStore.accept(invoice.value.id)
		notice.value = t('rechnungswerk', 'Angebot als angenommen markiert.')
	} catch (e) {
		fail(e, t('rechnungswerk', 'Aktion fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

async function doReject() {
	if (!invoice.value) {
		return
	}
	saving.value = true
	error.value = ''
	try {
		invoice.value = await quoteStore.reject(invoice.value.id)
		notice.value = t('rechnungswerk', 'Angebot als abgelehnt markiert.')
	} catch (e) {
		fail(e, t('rechnungswerk', 'Aktion fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

async function doConvert() {
	dialog.value = null
	if (!invoice.value) {
		return
	}
	saving.value = true
	error.value = ''
	try {
		const created = await quoteStore.convert(invoice.value.id)
		// Land on the new invoice draft so the user can finalise it.
		router.push({ name: 'invoice-detail', params: { id: String(created.id) } })
	} catch (e) {
		fail(e, t('rechnungswerk', 'Übernahme fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

async function doRevise() {
	dialog.value = null
	if (!invoice.value) {
		return
	}
	saving.value = true
	error.value = ''
	try {
		const draft = await quoteStore.revise(invoice.value.id)
		// Land on the new revision draft so the user can adjust and finalise it.
		router.push({ name: 'quote-detail', params: { id: String(draft.id) } })
	} catch (e) {
		fail(e, t('rechnungswerk', 'Revidieren fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

async function doSend(data: { to: string, subject: string, body: string }) {
	if (!invoice.value) {
		return
	}
	sending.value = true
	error.value = ''
	try {
		if (isQuote.value) {
			await sendQuote(invoice.value.id, data)
			sendDialogOpen.value = false
			notice.value = t('rechnungswerk', 'Angebot an {to} gesendet.', { to: data.to })
		} else {
			await sendInvoice(invoice.value.id, data)
			sendDialogOpen.value = false
			notice.value = t('rechnungswerk', 'Rechnung an {to} gesendet.', { to: data.to })
		}
	} catch (e) {
		fail(e, t('rechnungswerk', 'Versand fehlgeschlagen'))
	} finally {
		sending.value = false
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
		await docStore.value.remove(invoice.value.id)
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
		const datevMailSent = (storno as InvoiceDetail & { datevMailSent?: boolean | null }).datevMailSent
		await load(storno.id)
		notice.value = ''
		if (datevMailSent === true) {
			notice.value = t('rechnungswerk', 'Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.')
		} else if (datevMailSent === null) {
			error.value = t('rechnungswerk', 'Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden.')
		}
	} catch (e) {
		fail(e, t('rechnungswerk', 'Stornieren fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

function backToList() {
	router.push({ name: listRoute.value })
}

function fail(e: unknown, fallback: string) {
	error.value = (e as { message?: string }).message ?? fallback
	console.error('[rechnungswerk] editor:', e)
}
</script>

<style scoped>
/* Layout/cards/inputs/chips live in the shared src/css/app.css. Only the
   editor-specific header and the optional-fields disclosure stay local. */
.rw-editor-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	margin-bottom: 16px;
}
.rw-editor-head :deep(.breadcrumb) {
	flex: 1 1 auto;
	min-width: 0;
}
/* Section header with an inline "insert template" action (#126/#141). */
.rw-section-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
}
.rw-section-head h3 {
	margin: 0;
}
.more {
	margin-top: 8px;
}
.rw-note-row {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 8px;
}
.rw-note-row .rw-input {
	flex: 1 1 auto;
}
.more summary {
	cursor: pointer;
	color: var(--color-text-maxcontrast);
}
/* Keep the "Zahlungsziel (Tage)" label on one line so the field stays aligned
   with the neighbouring boxes. */
.payterm-days {
	flex: 0 0 170px;
}
.payterm-days > span {
	white-space: nowrap;
}
/* Keep the read-only invoice number compact so the date pickers get the room. */
.invoice-no {
	flex: 0 1 180px;
}
/* Freibleibend checkbox (quote mode): align the box with the neighbouring inputs. */
.rw-checkbox-field {
	justify-content: flex-end;
}
.rw-checkbox-row {
	display: flex;
	align-items: center;
	gap: 8px;
	min-height: 34px;
}
.rw-checkbox-row input[type="checkbox"] {
	width: 16px;
	height: 16px;
	flex: 0 0 auto;
	margin: 0;
}
/* A4-portrait preview needs real height; the browser's PDF viewer fills the frame. */
.preview-frame {
	width: 100%;
	height: min(75vh, 1000px);
	border: none;
	display: block;
}
</style>
