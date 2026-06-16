<template>
	<div class="rechnungswerk-view">
		<h2>{{ t('rechnungswerk', 'Einstellungen') }}</h2>
		<NcEmptyContent :name="t('rechnungswerk', 'Stammdaten')"
			:description="t('rechnungswerk', 'Firmendaten, Logo, Nummernformat und DATEV-Übergabe konfigurieren.')">
			<template #icon><CogIcon :size="20" /></template>
		</NcEmptyContent>
	</div>
</template>

<script>
import { translate as t } from '@nextcloud/l10n'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import CogIcon from 'vue-material-design-icons/Cog.vue'

export default {
	name: 'SettingsView',
	components: { NcEmptyContent, CogIcon },
	methods: { t },
}
</script>

<style scoped>
.rechnungswerk-view {
	padding: 20px;
	padding-left: 50px;
}
</style>
