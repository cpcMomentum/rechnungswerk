/**
 * Schliesst ein NcModal per Esc auch dann, wenn der Fokus in einem
 * Eingabefeld steht: NcModals eigener Esc-Handler (useHotKey) ignoriert
 * Tastatur-Events aus Inputs, waehrend der Focus-Trap beim Oeffnen das
 * erste Eingabefeld fokussiert (#107).
 *
 * Als `@keydown.esc="e => escCloses(e, ...)"` auf dem NcModal-Tag
 * registrieren. Offene Dropdowns (NcSelect) schliessen weiterhin nur
 * das Dropdown.
 */
export function escCloses(event: Event, close: () => void): void {
	const target = event.target as HTMLElement | null
	if (target?.closest?.('.v-select.vs--open')) {
		return
	}
	close()
}
