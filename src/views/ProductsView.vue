<template>
	<div class="rw-view">
		<div class="rw-view__head">
			<h2>{{ t('rechnungswerk', 'Produkte') }}</h2>
			<NcButton variant="primary" @click="openCreate">
				<template #icon><PlusIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Produkt anlegen') }}
			</NcButton>
		</div>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<NcEmptyContent v-if="!store.loading && store.products.length === 0"
			:name="t('rechnungswerk', 'Noch keine Produkte')"
			:description="t('rechnungswerk', 'Pflege wiederkehrende Leistungen, um sie schnell in Rechnungen zu übernehmen.')">
			<template #icon><PackageVariantIcon :size="20" /></template>
		</NcEmptyContent>

		<div v-else-if="store.products.length > 0" class="rw-table-wrap">
			<table class="rw-table">
				<thead>
					<tr>
						<th>{{ t('rechnungswerk', 'Name') }}</th>
						<th>{{ t('rechnungswerk', 'Einheit') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Preis') }}</th>
						<th class="num">{{ t('rechnungswerk', 'USt') }}</th>
						<th class="num" />
					</tr>
				</thead>
				<tbody>
					<tr v-for="p in store.products" :key="p.id">
						<td>
							<strong>{{ p.name }}</strong>
							<div v-if="p.description" class="rw-muted">{{ p.description }}</div>
						</td>
						<td>{{ t('rechnungswerk', unitLabel(p.defaultUnitCode)) }}</td>
						<td class="num">{{ formatCents(p.defaultPriceCents) }}</td>
						<td class="num">{{ formatTaxRate(p.defaultTaxRateBp) }}</td>
						<td class="num">
							<NcActions :aria-label="t('rechnungswerk', 'Aktionen')">
								<NcActionButton @click="openEdit(p)">
									<template #icon><PencilIcon :size="20" /></template>
									{{ t('rechnungswerk', 'Bearbeiten') }}
								</NcActionButton>
								<NcActionButton @click="askDelete(p)">
									<template #icon><DeleteIcon :size="20" /></template>
									{{ t('rechnungswerk', 'Löschen') }}
								</NcActionButton>
							</NcActions>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<ProductEditModal
			:open="editorOpen"
			:product="editing"
			:saving="store.loading"
			@close="editorOpen = false"
			@save="onSave" />

		<ConfirmDialog
			:open="deleteTarget !== null"
			:name="t('rechnungswerk', 'Produkt löschen')"
			:message="deleteTarget ? t('rechnungswerk', '„{name}“ wirklich löschen?', { name: deleteTarget.name }) : ''"
			:confirm-label="t('rechnungswerk', 'Löschen')"
			destructive
			@close="deleteTarget = null"
			@confirm="confirmDelete" />
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import PencilIcon from 'vue-material-design-icons/Pencil.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'
import PackageVariantIcon from 'vue-material-design-icons/PackageVariant.vue'
import ProductEditModal from '@/components/ProductEditModal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import { useProductStore } from '@/stores/productStore'
import { UNIT_CODE_LABELS, type Product, type UnitCode } from '@/types/api'
import type { ProductCreate } from '@/api/products'
import { formatCents, formatTaxRate } from '@/utils/money'

const store = useProductStore()
const editorOpen = ref(false)
const editing = ref<Product | null>(null)
const deleteTarget = ref<Product | null>(null)
const error = ref('')

const unitLabel = (code: string): string => UNIT_CODE_LABELS[code as UnitCode] ?? code

function fail(e: unknown, fallback: string) {
	const message = (e as { message?: string }).message ?? fallback
	error.value = message
	console.error('[rechnungswerk] products:', e)
}

onMounted(() => {
	store.fetchAll().catch(e => fail(e, t('rechnungswerk', 'Laden fehlgeschlagen')))
})

function openCreate() {
	editing.value = null
	editorOpen.value = true
}

function openEdit(product: Product) {
	editing.value = product
	editorOpen.value = true
}

async function onSave(data: ProductCreate) {
	error.value = ''
	try {
		if (editing.value) {
			await store.update(editing.value.id, data)
		} else {
			await store.create(data)
		}
		editorOpen.value = false
	} catch (e) {
		fail(e, t('rechnungswerk', 'Speichern fehlgeschlagen'))
	}
}

function askDelete(product: Product) {
	deleteTarget.value = product
}

async function confirmDelete() {
	const target = deleteTarget.value
	deleteTarget.value = null
	if (!target) {
		return
	}
	error.value = ''
	try {
		await store.remove(target.id)
	} catch (e) {
		fail(e, t('rechnungswerk', 'Löschen fehlgeschlagen'))
	}
}
</script>
