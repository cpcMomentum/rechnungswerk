<template>
	<div class="rechnungswerk-view">
		<h2>{{ t('rechnungswerk', 'Produkte') }}</h2>
		<NcEmptyContent :name="t('rechnungswerk', 'Noch keine Produkte')"
			:description="t('rechnungswerk', 'Pflege wiederkehrende Leistungen für deine Rechnungen.')">
			<template #icon><PackageVariantIcon :size="20" /></template>
		</NcEmptyContent>
	</div>
</template>

<script>
import { translate as t } from '@nextcloud/l10n'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import PackageVariantIcon from 'vue-material-design-icons/PackageVariant.vue'

export default {
	name: 'ProductsView',
	components: { NcEmptyContent, PackageVariantIcon },
	methods: { t },
}
</script>

<style scoped>
.rechnungswerk-view {
	padding: 20px;
	padding-left: 50px;
}
</style>
