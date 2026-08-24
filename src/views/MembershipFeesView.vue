<template>
	<div class="membership-fees">
		<header class="membership-fees__header">
			<div>
				<h2>Beitragsabrechnung</h2>
				<p>
					Jahresbeiträge konfigurieren, prüfen und
					Beitragsrechnungen erstellen.
				</p>
			</div>
		</header>

		<section class="membership-fees__card">
			<h3>Jahresabrechnung</h3>

			<p>
				Die Konfiguration der jährlichen Vereinsbeiträge
				wird hier verwaltet.
			</p>

			<p>
				Im nächsten Schritt kommen Jahresauswahl,
				Beitragsgruppen, Beitragsarten und die
				Mitgliedervorschau hinzu.
			</p>
		</section>
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.membership-fees {
	max-width: 1400px;
	padding: 24px 32px 48px;
}

.membership-fees__header {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-bottom: 24px;
}

.membership-fees__header h2 {
	margin: 0 0 6px;
	font-size: 26px;
}

.membership-fees__header p {
	margin: 0;
	color: var(--color-text-maxcontrast);
}

.membership-fees__card {
	padding: 24px;
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius-large);
	background: var(--color-main-background);
}

.membership-fees__card h3 {
	margin-top: 0;
}
</style>