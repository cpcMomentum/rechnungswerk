<template>
	<div class="rw-view">
		<div class="rw-view__head">
			<h2>{{ t('rechnungswerk', 'Kunden') }}</h2>
			<div class="rw-view__actions">
				<NcButton @click="openImport">
					<template #icon><AccountArrowRightIcon :size="20" /></template>
					{{ t('rechnungswerk', 'Aus Nextcloud-Kontakten importieren') }}
				</NcButton>
				<NcButton variant="primary" @click="openCreate">
					<template #icon><PlusIcon :size="20" /></template>
					{{ t('rechnungswerk', 'Neuer Kunde') }}
				</NcButton>
			</div>
		</div>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<NcEmptyContent v-if="!store.loading && store.customers.length === 0"
			:name="t('rechnungswerk', 'Noch keine Kunden')"
			:description="t('rechnungswerk', 'Lege Kunden an oder übernimm sie aus deinen Nextcloud-Kontakten, um sie schnell in Rechnungen auszuwählen.')">
			<template #icon><AccountGroupIcon :size="20" /></template>
		</NcEmptyContent>

		<div v-else-if="store.customers.length > 0" class="rw-table-wrap">
			<table class="rw-table">
				<thead>
					<tr>
						<th>{{ t('rechnungswerk', 'Kundennr.') }}</th>
						<th>{{ t('rechnungswerk', 'Kunde') }}</th>
						<th>{{ t('rechnungswerk', 'Ort') }}</th>
						<th class="num" />
					</tr>
				</thead>
				<tbody>
					<tr v-for="c in store.customers" :key="c.id">
						<td class="rw-muted">{{ c.customerNumber }}</td>
						<td>
							<strong>{{ c.name }}</strong>
							<div v-if="c.contactPerson || c.vatId" class="rw-muted">
								{{ [c.contactPerson, c.vatId].filter(Boolean).join(' · ') }}
							</div>
						</td>
						<td>{{ [c.postalCode, c.city].filter(Boolean).join(' ') }}</td>
						<td class="num">
							<NcActions :aria-label="t('rechnungswerk', 'Aktionen')">
								<NcActionButton @click="openEdit(c)">
									<template #icon><PencilIcon :size="20" /></template>
									{{ t('rechnungswerk', 'Bearbeiten') }}
								</NcActionButton>
								<NcActionButton @click="askDelete(c)">
									<template #icon><DeleteIcon :size="20" /></template>
									{{ t('rechnungswerk', 'Löschen') }}
								</NcActionButton>
							</NcActions>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<CustomerEditModal
			:open="editorOpen"
			:customer="editing"
			:saving="store.loading"
			:taken-numbers="takenNumbers"
			:prefill="prefill"
			@close="editorOpen = false"
			@save="onSave" />

		<NcModal v-if="importOpen" :name="t('rechnungswerk', 'Aus Nextcloud-Kontakten übernehmen')" @close="importOpen = false">
			<div class="rw-import">
				<p class="rw-muted">
					{{ t('rechnungswerk', 'Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.') }}
				</p>
				<ContactPicker v-model="contactQuery" @select="onContactSelected" />
			</div>
		</NcModal>

		<ConfirmDialog
			:open="deleteTarget !== null"
			:name="t('rechnungswerk', 'Kunde löschen')"
			:message="deleteTarget ? t('rechnungswerk', '„{name}“ wirklich löschen?', { name: deleteTarget.name }) : ''"
			:confirm-label="t('rechnungswerk', 'Löschen')"
			destructive
			@close="deleteTarget = null"
			@confirm="confirmDelete" />
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcModal from '@nextcloud/vue/components/NcModal'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import PencilIcon from 'vue-material-design-icons/Pencil.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'
import AccountGroupIcon from 'vue-material-design-icons/AccountGroup.vue'
import AccountArrowRightIcon from 'vue-material-design-icons/AccountArrowRight.vue'
import CustomerEditModal from '@/components/CustomerEditModal.vue'
import ContactPicker from '@/components/ContactPicker.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import { useCustomerStore } from '@/stores/customerStore'
import type { Customer, ContactMatch } from '@/types/api'
import type { CustomerCreate } from '@/api/customers'

const store = useCustomerStore()
const editorOpen = ref(false)
const editing = ref<Customer | null>(null)
const prefill = ref<Partial<CustomerCreate> | null>(null)
const deleteTarget = ref<Customer | null>(null)
const importOpen = ref(false)
const contactQuery = ref('')
const error = ref('')

const takenNumbers = computed(() => store.customers
	.filter(c => c.id !== editing.value?.id)
	.map(c => c.customerNumber.trim().toLowerCase()))

function fail(e: unknown, fallback: string) {
	error.value = (e as { message?: string }).message ?? fallback
	console.error('[rechnungswerk] customers:', e)
}

onMounted(() => {
	store.fetchAll().catch(e => fail(e, t('rechnungswerk', 'Laden fehlgeschlagen')))
})

function openCreate() {
	editing.value = null
	prefill.value = null
	editorOpen.value = true
}

function openEdit(customer: Customer) {
	editing.value = customer
	prefill.value = null
	editorOpen.value = true
}

function openImport() {
	contactQuery.value = ''
	importOpen.value = true
}

function onContactSelected(contact: ContactMatch) {
	importOpen.value = false
	editing.value = null
	prefill.value = {
		name: contact.name,
		email: contact.email || null,
		phone: contact.phone || null,
		address: contact.address || null,
		postalCode: contact.postalCode || null,
		city: contact.city || null,
		country: contact.country || 'DE',
	}
	editorOpen.value = true
}

async function onSave(data: CustomerCreate) {
	error.value = ''
	try {
		if (editing.value) {
			await store.update(editing.value.id, data)
		} else {
			await store.create(data)
		}
		editorOpen.value = false
		prefill.value = null
	} catch (e) {
		fail(e, t('rechnungswerk', 'Speichern fehlgeschlagen'))
	}
}

function askDelete(customer: Customer) {
	deleteTarget.value = customer
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

<style scoped>
.rw-view__actions {
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
}
.rw-import {
	padding: 20px 24px 28px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	min-width: min(480px, 80vw);
}
</style>
