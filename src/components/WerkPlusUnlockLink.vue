<!--
	SPDX-FileCopyrightText: 2026 cpcMomentum
	SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<a v-if="href"
		class="rw-werkplus-unlock"
		:href="href"
		target="_blank"
		rel="noopener noreferrer">
		{{ t('rechnungswerk', 'Mit WerkPlus freischalten') }}
	</a>
</template>

<script setup lang="ts">
import { translate as t } from '@nextcloud/l10n'
import { werkplusLinks } from '@/werkplusLinks'

const href = werkplusLinks().buy
</script>

<style scoped>
.rw-werkplus-unlock {
	display: inline-block;
	margin-top: 8px;
	font-weight: 600;
}
</style>
