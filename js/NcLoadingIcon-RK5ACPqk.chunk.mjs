import { En as e, Q as t, an as n, dn as r, nn as i, on as a, pr as o, rn as s } from "./createElementId-XLh0NVJk.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/NcLoadingIcon.mjs
var c = ["aria-label"], l = ["width", "height"], u = ["fill"], d = ["fill"], f = { key: 0 }, p = /* @__PURE__ */ t(/* @__PURE__ */ r({
	__name: "NcLoadingIcon",
	props: {
		appearance: { default: "auto" },
		name: { default: "" },
		size: { default: 20 }
	},
	setup(t) {
		let r = t, p = i(() => {
			let e = ["#777", "#CCC"];
			return r.appearance === "light" ? e : r.appearance === "dark" ? e.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
		});
		return (r, i) => (e(), a("span", {
			"aria-label": t.name,
			role: "img",
			class: "material-design-icon loading-icon"
		}, [(e(), a("svg", {
			width: t.size,
			height: t.size,
			viewBox: "0 0 24 24"
		}, [s("path", {
			fill: p.value[0],
			d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
		}, null, 8, u), s("path", {
			fill: p.value[1],
			d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
		}, [t.name ? (e(), a("title", f, o(t.name), 1)) : n("", !0)], 8, d)], 8, l))], 8, c));
	}
}), [["__scopeId", "data-v-cf399190"]]);
//#endregion
export { p as t };
