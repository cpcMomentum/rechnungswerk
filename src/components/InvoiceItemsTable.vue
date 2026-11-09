<template>
	<div>
		<div class="rw-table-wrap">
			<table class="rw-table rw-table--positions">
				<colgroup>
					<col>
					<col class="rw-col-qty">
					<col class="rw-col-unit">
					<col class="rw-col-price">
					<col class="rw-col-tax">
					<col class="rw-col-sum">
					<col v-if="!readonly" class="rw-col-actions">
				</colgroup>
				<thead>
					<tr>
						<th>{{ t('rechnungswerk', 'Bezeichnung') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Menge') }}</th>
						<th>{{ t('rechnungswerk', 'Einheit') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Einzelpreis (€)') }}</th>
						<th class="num">{{ t('rechnungswerk', 'USt') }}</th>
						<th class="rw-sum">{{ t('rechnungswerk', 'Summe netto') }}</th>
						<th v-if="!readonly" />
					</tr>
				</thead>
				<tbody>
					<template v-for="(item, i) in items" :key="i">
						<tr class="rw-pos-main">
							<td>
								<input v-model="item.name" class="rw-input" type="text"
									:readonly="readonly" :placeholder="t('rechnungswerk', 'Leistung')" />
							</td>
							<td class="num">
								<!-- Beim Verlassen wird der erkannte Wert zurueckgeschrieben.
								     Wer "1.000" tippt und danach "1.000" mit passendem
								     Zeilenbetrag sieht, erkennt sofort, ob die App ihn
								     richtig verstanden hat (#157). -->
								<input v-model="item.quantity" class="rw-input num" type="text"
									inputmode="decimal" :readonly="readonly"
									@blur="normalizeQuantity(item)" />
							</td>
							<td>
								<select v-model="item.unitCode" class="rw-input" :disabled="readonly">
									<option v-for="code in UNIT_CODES" :key="code" :value="code">
										{{ t('rechnungswerk', UNIT_CODE_LABELS[code]) }}
									</option>
								</select>
							</td>
							<td class="num">
								<!-- Textfeld, nicht type="number" (#223): ein Zahlenfeld liefert
								     immer Maschinenformat mit Punkt, waehrend Browser und Server
								     den Inhalt deutsch lesen. Aus 1,234 € wurden so 1.234 €,
								     schon beim ersten Speichern. Menge und Preis benutzen jetzt
								     dieselbe Schreibweise und denselben Parser. -->
								<input v-model="item.priceInput" class="rw-input num" type="text"
									inputmode="decimal" :readonly="readonly"
									@blur="normalizePrice(item)" />
							</td>
							<td class="num">
								<select v-model.number="item.taxRateBp" class="rw-input" :disabled="readonly || smallBusiness">
									<option v-for="bp in TAX_RATES_BP" :key="bp" :value="bp">{{ formatTaxRate(bp) }}</option>
								</select>
							</td>
							<td class="rw-sum">{{ formatCents(lineTotal(item)) }}</td>
							<td v-if="!readonly" class="num">
								<NcButton variant="tertiary" :aria-label="t('rechnungswerk', 'Position entfernen')" @click="remove(i)">
									<template #icon><DeleteIcon :size="20" /></template>
								</NcButton>
							</td>
						</tr>
						<!-- Zweite Zeile je Position. Sie traegt seit #238 auch das freie
						     Einheitenfeld: in der Einheitenspalte stand es neben der Auswahl,
						     und weil beide width:100% hatten und die Zelle nicht umbrechen
						     kann, fiel eines von beiden auf einen Strich zusammen. Hier ist
						     der Platz schon da, die Zeile gibt es im Bearbeitungsmodus
						     ohnehin unter jeder Position. -->
						<tr v-if="!readonly || item.description || item.unitLabel" class="rw-pos-desc">
							<td :colspan="readonly ? 6 : 7">
								<div class="rw-sub-row">
									<input v-if="!readonly || item.unitLabel" v-model="item.unitLabel"
										class="rw-input rw-input--sub rw-unit-label" type="text" maxlength="64"
										:readonly="readonly" :placeholder="t('rechnungswerk', 'eigene Einheit')"
										:title="t('rechnungswerk', 'Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.')" />
									<input v-if="!readonly || item.description" v-model="item.description"
										class="rw-input rw-input--sub rw-desc" type="text"
										:readonly="readonly" :placeholder="t('rechnungswerk', 'Beschreibung (optional)')" />
								</div>
							</td>
						</tr>
					</template>
					<tr v-if="items.length === 0">
						<td :colspan="readonly ? 6 : 7" class="rw-muted empty-row">
							{{ t('rechnungswerk', 'Noch keine Positionen.') }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div v-if="!readonly" class="rw-toolbar">
			<NcButton @click="add">
				<template #icon><PlusIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Position hinzufügen') }}
			</NcButton>
			<!--
				#346: Ohne Produkte stand hier bislang NICHTS, weil das Feld an
				`products.length > 0` hing. Wer noch keine angelegt hatte, erfuhr
				nie, dass es die Funktion gibt, und tippte jede Position von Hand.
				Im Leerzustand tritt deshalb ein Weg zum Produktbereich an die
				Stelle des Feldes. Der Kommentar steht VOR dem Paar, nicht
				zwischen v-if und v-else.
			-->
			<ProductPicker v-if="products.length > 0" :products="products" @select="addFromProduct" />
			<NcButton v-else variant="tertiary" @click="zuProdukten">
				<template #icon><PackageVariantIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Noch keine Produkte angelegt') }}
			</NcButton>
		</div>
	</div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'
import PackageVariantIcon from 'vue-material-design-icons/PackageVariant.vue'
import ProductPicker from '@/components/ProductPicker.vue'
import { TAX_RATES_BP, UNIT_CODE_LABELS, UNIT_CODES, type Product } from '@/types/api'
import { emptyItem, itemFromProduct, type EditorItem } from '@/types/editor'
import { formatCents, formatTaxRate, euroInputToE4, e4ToEuroInput } from '@/utils/money'
import { lineTotalCents } from '@/utils/invoiceCalc'
import { formatForInput, parsePrice, parseQuantity } from '@/utils/numberInput'

const items = defineModel<EditorItem[]>('items', { required: true })
const props = defineProps<{
	products: Product[]
	readonly?: boolean
	smallBusiness?: boolean
	defaultTaxRateBp?: number
}>()

const lineTotal = (item: EditorItem): number => lineTotalCents(item.quantity, euroInputToE4(item.priceInput))

/**
 * Erkannten Mengenwert beim Verlassen des Feldes zurueckschreiben (#157).
 * Eine unlesbare Eingabe bleibt stehen, damit der Nutzer sieht, was er getippt
 * hat, und beim Speichern die Meldung des Servers dazu bekommt.
 */
function normalizeQuantity(item: EditorItem): void {
	const parsed = parseQuantity(item.quantity)
	if (parsed !== null) {
		item.quantity = formatForInput(parsed)
	}
}

/**
 * Dasselbe fuer den Preis (#223). Angezeigt wird, was gespeichert wird: der Weg
 * geht bewusst ueber e4 und zurueck, also genau durch die Umrechnung, die auch
 * der Server vornimmt. Eine unlesbare Eingabe bleibt stehen.
 */
function normalizePrice(item: EditorItem): void {
	if (parsePrice(item.priceInput) !== null) {
		item.priceInput = e4ToEuroInput(euroInputToE4(item.priceInput))
	}
}

// Under §19 small-business there is no VAT: force every line to 0 % so the
// client preview matches what the server stores.
watch(() => props.smallBusiness, (sb) => {
	if (sb) {
		for (const item of items.value) {
			item.taxRateBp = 0
		}
	}
}, { immediate: true })

const router = useRouter()

/** #346: Aus dem Leerzustand direkt dorthin, wo Produkte entstehen. */
function zuProdukten() {
	router.push({ name: 'products' })
}

/**
 * Eine unberuehrte Zeile ist eine, die der Anlage-Zustand hinterlassen hat:
 * ohne Bezeichnung und ohne Beschreibung. Menge, Einheit und Steuersatz sind
 * vorbelegt und sagen deshalb nichts darueber aus, ob jemand die Zeile schon
 * benutzt; der Preis kann legitim 0,00 sein.
 */
function istUnberuehrt(item: EditorItem): boolean {
	return item.name.trim() === '' && item.description.trim() === ''
}

/**
 * Index einer unberuehrten LETZTEN Zeile, sonst -1.
 *
 * Nur die letzte: Eine leere Zeile mitten im Beleg kann als Abstandhalter
 * gewollt sein, die letzte ist der Rest des Anlage-Zustands.
 */
function letzteLeereZeile(): number {
	const i = items.value.length - 1

	return i >= 0 && istUnberuehrt(items.value[i]) ? i : -1
}

function add() {
	// #347: Steht schon eine unberuehrte Zeile da, waere eine zweite nur
	// Leerlauf – dann bleibt es bei der einen.
	if (letzteLeereZeile() !== -1) {
		return
	}
	items.value.push(emptyItem(props.smallBusiness ? 0 : (props.defaultTaxRateBp ?? 1900)))
}

/**
 * #347: Das Produkt FUELLT die leere Startzeile, statt sich darunter zu setzen.
 *
 * Ein neuer Entwurf beginnt mit einer unberuehrten Position. Wer daraufhin ein
 * Produkt einfuegte, hatte sie als erste Zeile mit 0,00 im Beleg stehen und
 * musste sie von Hand wegwerfen.
 */
function addFromProduct(product: Product) {
	const neu = itemFromProduct(product, props.smallBusiness ?? false)
	const leer = letzteLeereZeile()
	if (leer !== -1) {
		items.value.splice(leer, 1, neu)

		return
	}
	items.value.push(neu)
}

function remove(index: number) {
	items.value.splice(index, 1)
}
</script>

<style scoped>
.empty-row {
	text-align: center;
	padding: 16px;
}
/* Freies Einheitenfeld (#153) und Beschreibung teilen sich die zweite Zeile.
 *
 * Warum nicht mehr in der Einheitenspalte (#238): dort stand das Feld neben der
 * Auswahl, beide mit width:100% aus .rw-input, und die Zelle kann nicht
 * umbrechen. Zwei volle Zellenbreiten auf einer Zeile, die nur eine fasst --
 * eines von beiden fiel auf einen Strich zusammen.
 *
 * Zwei naheliegende Auswege wurden gemessen und verworfen. Das Feld unter die
 * Auswahl zu setzen haengt unter JEDE Position eine leere Box und macht die
 * Zeile von 55 auf 96 px hoch. Die Spalte auf 250 px zu verbreitern nimmt
 * "Bezeichnung" bei 1200 px Fensterbreite 138 px weg (191 -> 53) und loest bei
 * 1100 px einen Querscroll aus -- derselbe Engpass, nur eine Spalte weiter.
 * Hier ist der Platz dagegen schon vorhanden: die Zeile existiert im
 * Bearbeitungsmodus ohnehin, Spaltenbreiten und Zeilenhoehe bleiben unberuehrt.
 *
 * `.rw-input` MUSS im Selektor stehen. Vue haengt den Scope nur an den letzten
 * Selektorteil, `.rw-unit-label[data-v-x]` waere damit (0,2,0) und gleichauf
 * mit der globalen `.app-rechnungswerk .rw-input` -- bei Gleichstand gewinnt
 * die spaeter geladene, also die globale.
 */
.rw-sub-row {
	display: flex;
	gap: 6px;
}
.rw-input.rw-unit-label {
	flex: 0 0 150px;
	width: 150px;
}
.rw-input.rw-desc {
	flex: 1 1 auto;
	min-width: 0;
}
</style>
