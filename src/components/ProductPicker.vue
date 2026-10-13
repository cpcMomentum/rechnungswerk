<template>
	<div class="product-picker">
		<input
			:value="query"
			class="input"
			type="text"
			autocomplete="off"
			:placeholder="t('rechnungswerk', 'Produkt wählen oder suchen …')"
			@input="onInput(($event.target as HTMLInputElement).value)"
			@focus="oeffnen"
			@click="oeffnen"
			@blur="onBlur" />
		<div v-if="open && matches.length > 0" class="product-picker__panel">
			<div class="product-picker__head">{{ headline }}</div>
			<ul class="product-picker__list">
				<li
					v-for="p in matches"
					:key="p.id"
					class="product-picker__item"
					@mousedown.prevent="choose(p)">
					<strong>{{ p.name }}</strong>
					<span class="muted">{{ subtitle(p) }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import { UNIT_CODE_LABELS, type Product } from '@/types/api'
import { e4ToEuroInput } from '@/utils/money'

// The already-loaded product list from the editor (productStore.fetchAll on
// mount). Kept as a prop instead of reading the store so the picker stays a
// dumb, reusable component, mirroring CustomerPicker.
const props = defineProps<{
	products: Product[]
}>()

const emit = defineEmits<{
	select: [product: Product]
}>()

const query = ref('')
const matches = ref<Product[]>([])
const open = ref(false)

/** Laufender Schliess-Timer aus {@link onBlur}, damit {@link oeffnen} ihn abbrechen kann. */
let schliessTimer: number | null = null

/**
 * Was die Liste gerade zeigt.
 *
 * Sie zeigt IMMER alle passenden Produkte, nicht nur die ersten: Eine
 * abgeschnittene Liste verschweigt, was es sonst noch gibt, und scrollen kann
 * man ohnehin. Die Zahl im Kopf sagt, wie viel unter der sichtbaren Kante noch
 * wartet.
 */
const headline = computed(() => {
	if (query.value.trim() === '') {
		return t('rechnungswerk', 'Alle Produkte ({gesamt})', { gesamt: props.products.length })
	}

	return t('rechnungswerk', '{treffer} Treffer', { treffer: matches.value.length })
})

/** Muted second line: net price and unit, so identically named products differ. */
function subtitle(p: Product): string {
	const price = `${e4ToEuroInput(p.defaultPriceE4)} €`
	const unit = p.defaultUnitLabel || t('rechnungswerk', UNIT_CODE_LABELS[p.defaultUnitCode])
	return [price, unit].filter(Boolean).join(' · ')
}

/**
 * Die Treffer zu einer Eingabe.
 *
 * **Leere Eingabe zeigt ALLE Produkte, nicht keines** (#305). Vorher blieb die
 * Liste ohne Suchbegriff leer, und weil `@focus` nur oeffnete, wenn schon
 * Treffer dastanden, sah man beim Klick ins Feld gar nichts. Wer den
 * Produktnamen nicht auswendig wusste, musste den Entwurf verlassen und im
 * Produktbereich nachsehen.
 */
function trefferFuer(value: string): Product[] {
	const q = value.trim().toLowerCase()
	if (q === '') {
		return props.products
	}

	return props.products.filter(p =>
		`${p.name} ${p.description ?? ''}`.toLowerCase().includes(q),
	)
}

function onInput(value: string) {
	query.value = value
	matches.value = trefferFuer(value)
	open.value = matches.value.length > 0
}

/**
 * Klick ins Feld zeigt die Auswahl, ohne dass man etwas wissen muss (#305).
 *
 * Haengt an `@focus` UND `@click`: Nach einer Auswahl schliesst `choose()` die
 * Liste, der Fokus bleibt aber im Feld. Ein zweiter Klick loeste dann kein
 * `focus` mehr aus, und die Liste blieb zu — man musste erst woanders
 * hinklicken und zurueck. Beim Durchklicken auf der Testinstanz aufgefallen.
 */
function oeffnen() {
	// Einen noch laufenden Schliess-Timer abbrechen: Sonst schliesst er die
	// Liste 150 ms spaeter wieder, obwohl das Feld gerade erneut angeklickt
	// wurde. Genau so blieb sie nach einer Auswahl zu (auf der Testinstanz
	// beobachtet, vom Unit-Test nicht erfasst, weil dort kein blur laeuft).
	if (schliessTimer !== null) {
		clearTimeout(schliessTimer)
		schliessTimer = null
	}
	matches.value = trefferFuer(query.value)
	open.value = matches.value.length > 0
}

function choose(product: Product) {
	// Clear so the field is ready for the next product; the row is added by the
	// parent via addFromProduct.
	query.value = ''
	matches.value = []
	open.value = false
	emit('select', product)
}

function onBlur() {
	// Delay so a click on a list item (mousedown) still registers before close.
	schliessTimer = window.setTimeout(() => {
		open.value = false
		schliessTimer = null
	}, 150)
}
</script>

<style scoped>
.product-picker {
	position: relative;
	min-width: 260px;
}
.input {
	width: 100%;
	box-sizing: border-box;
}
.product-picker__panel {
	position: absolute;
	z-index: 10;
	left: 0;
	right: 0;
	margin: 2px 0 0;
	background: var(--color-main-background);
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius);
	box-shadow: 0 2px 8px var(--color-box-shadow);
	overflow: hidden;
}
.product-picker__head {
	padding: 6px 12px;
	font-size: 0.85em;
	color: var(--color-text-maxcontrast);
	background: var(--color-background-hover);
	border-bottom: 1px solid var(--color-border);
}
.product-picker__list {
	margin: 0;
	padding: 4px 0;
	list-style: none;
	max-height: 400px;
	overflow-y: auto;
}
.product-picker__item {
	display: flex;
	flex-direction: column;
	padding: 6px 12px;
	cursor: pointer;
}
.product-picker__item:hover {
	background: var(--color-background-hover);
}
.muted {
	color: var(--color-text-maxcontrast);
	font-size: 0.9em;
}
</style>
