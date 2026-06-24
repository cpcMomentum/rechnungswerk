<template>
	<span class="info-icon-wrapper">
		<NcPopover popup-role="tooltip" :focus-trap="false">
			<template #trigger>
				<InformationOutline class="info-icon" :size="14" tabindex="0" />
			</template>
			<div class="info-popup" tabindex="0">
				<slot />
			</div>
		</NcPopover>
	</span>
</template>

<script setup lang="ts">
import NcPopover from '@nextcloud/vue/components/NcPopover'
import InformationOutline from 'vue-material-design-icons/InformationOutline.vue'
</script>

<style>
/* Unscoped: NcPopover's internal .v-popper div must be inline so the icon sits
   on the text baseline (scoped :deep() does not reliably cross the boundary). */
.info-icon-wrapper .v-popper {
	display: inline !important;
}
</style>

<style scoped>
.info-icon-wrapper {
	display: inline;
}

.info-icon {
	display: inline;
	vertical-align: middle;
	margin-left: 2px;
	cursor: pointer;
	color: var(--color-text-maxcontrast);
}

.info-icon:hover {
	color: var(--color-primary-element);
}

.info-popup {
	padding: 10px 14px;
	max-width: 300px;
	font-size: 13px;
	line-height: 1.4;
}
</style>
