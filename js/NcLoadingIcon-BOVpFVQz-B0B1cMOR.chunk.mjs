import { Cn as e, Ct as t, D as n, Lt as r, _t as i, ht as a, mt as o, vt as s } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/NcLoadingIcon-BOVpFVQz.mjs
var c = ["aria-label"], l = ["width", "height"], u = ["fill"], d = ["fill"], f = { key: 0 }, p = /* @__PURE__ */ n(/* @__PURE__ */ t({
	__name: "NcLoadingIcon",
	props: {
		appearance: { default: "auto" },
		name: { default: "" },
		size: { default: 20 }
	},
	setup(t) {
		let n = t, p = o(() => {
			let e = ["#777", "#CCC"];
			return n.appearance === "light" ? e : n.appearance === "dark" ? e.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
		});
		return (n, o) => (r(), s("span", {
			"aria-label": t.name,
			role: "img",
			class: "material-design-icon loading-icon"
		}, [(r(), s("svg", {
			width: t.size,
			height: t.size,
			viewBox: "0 0 24 24"
		}, [a("path", {
			fill: p.value[0],
			d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
		}, null, 8, u), a("path", {
			fill: p.value[1],
			d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
		}, [t.name ? (r(), s("title", f, e(t.name), 1)) : i("", !0)], 8, d)], 8, l))], 8, c));
	}
}), [["__scopeId", "data-v-cf399190"]]);
//#endregion
export { p as t };
