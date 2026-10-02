<!--
	SPDX-FileCopyrightText: 2026 cpcMomentum
	SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<nav class="rw-subnav" :aria-label="ariaLabel || t('rechnungswerk', 'Bereiche')">
		<template v-for="group in groups" :key="group.label">
			<div class="rw-subnav__group">{{ group.label }}</div>
			<button
				v-for="item in group.items"
				:key="item.key"
				type="button"
				class="rw-subnav__item"
				:class="{ 'rw-subnav__item--active': modelValue === item.key }"
				:aria-current="modelValue === item.key ? 'page' : undefined"
				@click="emit('update:modelValue', item.key)">
				<component :is="item.icon" :size="18" />
				{{ item.label }}
			</button>
		</template>
	</nav>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { translate as t } from '@nextcloud/l10n'

/** Ein Bereich in der linken Einstellungs-Navigation. */
export interface SettingsItem {
	key: string
	label: string
	icon: Component
}

/** Eine Überschrift mit ihren Bereichen. */
export interface SettingsGroup {
	label: string
	items: SettingsItem[]
}

/**
 * Die linke Bereichs-Navigation der Einstellungsseite (#350).
 *
 * Gebaut nach `PwSettingsNav` aus projektwerk — gleicher Stack, dieselbe
 * Aufgabenteilung: Die Navigation hält KEINEN eigenen Zustand. Der aktive
 * Bereich kommt über `modelValue` herein und geht über `update:modelValue`
 * zurück; was darunter erscheint, entscheidet die Seite.
 *
 * Gegenüber projektwerk kommen Gruppen-Überschriften und Icons dazu, wie in
 * worktime: Vierzehn Bereiche ohne Gliederung waeren eine ebenso lange Liste,
 * wie es vorher eine lange Seite war.
 *
 * Die Beschriftung ist zugleich der zugängliche Name des Knopfes — sie sollte
 * stabil bleiben, falls später e2e-Tests darüber klicken.
 */
defineProps<{
	/** Die Gruppen in Anzeigereihenfolge. */
	groups: SettingsGroup[]
	/** Der aktive Bereichsschlüssel. */
	modelValue: string
	/** Beschriftung für Screenreader; leer = Vorgabe „Bereiche". */
	ariaLabel?: string
}>()

const emit = defineEmits<{
	'update:modelValue': [key: string]
}>()
</script>
