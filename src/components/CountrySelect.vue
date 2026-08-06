<template>
	<!-- title, weil das zugeklappte Feld sehr lange Laendernamen abschneidet. -->
	<select v-model="code" :class="selectClass" :disabled="disabled" :title="selectedLabel">
		<!--
			Ein gespeicherter Code, den die Liste nicht kennt, bekommt eine eigene
			Option. Sonst wuerde das Feld beim Oeffnen still auf den ersten Eintrag
			springen und einen Altbestand ueberschreiben.
		-->
		<option v-if="unknownCode !== ''" :value="unknownCode">{{ unknownCode }}</option>
		<option v-for="c in countries" :key="c.code" :value="c.code">{{ c.label }} ({{ c.code }})</option>
	</select>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { listCountries } from '@/api/countries'
import type { Country } from '@/types/api'

/**
 * Laenderauswahl statt Freitext (#167). Adressbuecher liefern ausgeschriebene
 * Namen, waehrend Datenbank und EN16931 den ISO-Code erwarten. Von Hand
 * getippt ging das regelmaessig schief.
 */
const code = defineModel<string>({ required: true })

withDefaults(defineProps<{
	selectClass?: string
	disabled?: boolean
}>(), {
	selectClass: 'rw-input',
	disabled: false,
})

const countries = ref<Country[]>([])

const selectedLabel = computed(() => {
	const match = countries.value.find((c) => c.code === code.value)
	return match ? `${match.label} (${match.code})` : (code.value ?? '')
})

const unknownCode = computed(() => {
	const current = code.value ?? ''
	if (current === '' || countries.value.length === 0) {
		return current
	}
	return countries.value.some((c) => c.code === current) ? '' : current
})

onMounted(async () => {
	try {
		countries.value = await listCountries()
	} catch {
		// Ohne Liste bleibt der gespeicherte Wert als einzige Option stehen,
		// statt dass das Formular ihn beim Speichern verliert.
		countries.value = []
	}
})
</script>
