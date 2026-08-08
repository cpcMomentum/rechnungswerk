/*
 * Vorgegebene Vue-Boilerplate: sie ist der Grund, warum `tsc` Importe von
 * *.vue-Dateien akzeptiert. Die Form mit `{}` und `any` stammt aus der
 * Vue-Vorlage; sie engherziger zu typisieren wuerde die Typpruefung des
 * gesamten Frontends beruehren, ohne etwas zu gewinnen.
 */
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any -- s. o.
	const component: DefineComponent<{}, {}, any>
	export default component
}
