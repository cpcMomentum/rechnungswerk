import { At as e, Cn as t, Ct as n, D as r, Gt as i, Ht as a, Lt as o, O as s, Ot as c, R as l, Zt as u, bn as d, bt as ee, en as f, gt as p, ht as m, k as h, mt as g, nt as _, vt as v, yn as y } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
//#region node_modules/vue-router/dist/useApi-CROJJdhE.js
function b(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function x(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && b(e.default);
}
var S = Object.assign;
function C(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = T(i) ? i.map(e) : e(i);
	}
	return n;
}
var w = () => {}, T = Array.isArray;
function E(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var D = Symbol("");
function O(e, t) {
	return S(/* @__PURE__ */ Error(), {
		type: e,
		[D]: !0
	}, t);
}
function k(e, t) {
	return e instanceof Error && D in e && (t == null || !!(e.type & t));
}
var A = Symbol(""), j = Symbol(""), M = Symbol(""), N = Symbol(""), P = Symbol("");
function F() {
	return c(M);
}
function I(e) {
	return c(N);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/useNcFormBox-Djlh582y.mjs
var L = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function R() {
	return c(L, {
		isInFormBox: !1,
		formBoxItemClass: void 0
	});
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcButton-jvoYS2my.mjs
var z = { class: "button-vue__wrapper" }, B = { class: "button-vue__icon" }, V = { class: "button-vue__text" }, H = /* @__PURE__ */ r(/* @__PURE__ */ n({
	__name: "NcButton",
	props: {
		alignment: { default: "center" },
		ariaLabel: { default: void 0 },
		disabled: { type: Boolean },
		download: {
			type: [String, Boolean],
			default: void 0
		},
		href: { default: void 0 },
		pressed: {
			type: Boolean,
			default: void 0
		},
		size: { default: "normal" },
		target: { default: "_self" },
		text: { default: void 0 },
		to: { default: void 0 },
		type: { default: "button" },
		variant: { default: "secondary" },
		wide: { type: Boolean }
	},
	emits: ["click", "update:pressed"],
	setup(n, { emit: r }) {
		let l = n, u = r, { formBoxItemClass: d } = R(), _ = c(M, null) !== null, v = g(() => _ && l.to ? "RouterLink" : l.href ? "a" : "button"), b = g(() => v.value === "button" && typeof l.pressed == "boolean"), x = g(() => l.pressed ? "primary" : l.pressed === !1 && l.variant === "primary" ? "secondary" : l.variant), S = g(() => x.value.startsWith("tertiary")), C = g(() => l.alignment.split("-")[0]), w = g(() => l.alignment.includes("-")), T = c("NcPopover:trigger:attrs", () => ({}), !1), E = g(() => T()), D = g(() => {
			if (v.value === "RouterLink") return {
				to: l.to,
				activeClass: "active"
			};
			if (v.value === "a") return {
				href: l.href || "#",
				target: l.target,
				rel: "nofollow noreferrer noopener",
				download: l.download || void 0
			};
			if (v.value === "button") return {
				...E.value,
				"aria-pressed": l.pressed,
				type: l.type,
				disabled: l.disabled
			};
		});
		function O(e) {
			b.value && u("update:pressed", !l.pressed), u("click", e);
		}
		return (r, c) => (o(), p(i(v.value), e({
			class: ["button-vue", [
				`button-vue--size-${n.size}`,
				{
					[`button-vue--${x.value}`]: x.value,
					"button-vue--tertiary": S.value,
					"button-vue--wide": n.wide,
					[`button-vue--${C.value}`]: C.value !== "center",
					"button-vue--reverse": w.value,
					"button-vue--legacy": y(s),
					"button-vue--legacy34": y(h)
				},
				y(d)
			]],
			"aria-label": n.ariaLabel
		}, D.value, { onClick: O }), {
			default: f(() => [m("span", z, [m("span", B, [a(r.$slots, "icon", {}, void 0, !0)]), m("span", V, [a(r.$slots, "default", {}, () => [ee(t(n.text), 1)], !0)])])]),
			_: 3
		}, 16, ["class", "aria-label"]));
	}
}), [["__scopeId", "data-v-00a99684"]]), U = ["aria-hidden", "aria-label"], W = {
	key: 0,
	viewBox: "0 0 24 24",
	xmlns: "http://www.w3.org/2000/svg"
}, G = ["d"], K = ["innerHTML"], te = /* @__PURE__ */ r(/* @__PURE__ */ n({
	__name: "NcIconSvgWrapper",
	props: {
		directional: { type: Boolean },
		inline: { type: Boolean },
		svg: { default: "" },
		name: { default: void 0 },
		path: { default: "" },
		size: { default: 20 }
	},
	setup(e) {
		_((e) => ({ fb515064: n.value }));
		let t = e, n = g(() => typeof t.size == "number" ? `${t.size}px` : t.size), r = g(() => {
			if (!t.svg || t.path) return;
			let e = l.sanitize(t.svg), n = new DOMParser().parseFromString(e, "image/svg+xml");
			return n.querySelector("parsererror") ? (u("SVG is not valid"), "") : (n.documentElement.id && n.documentElement.removeAttribute("id"), n.documentElement.outerHTML);
		});
		return (t, n) => (o(), v("span", {
			"aria-hidden": e.name ? void 0 : "true",
			"aria-label": e.name || void 0,
			class: d(["icon-vue", {
				"icon-vue--directional": e.directional,
				"icon-vue--inline": e.inline
			}]),
			role: "img"
		}, [r.value ? (o(), v("span", {
			key: 1,
			innerHTML: r.value
		}, null, 8, K)) : (o(), v("svg", W, [m("path", { d: e.path }, null, 8, G)]))], 10, U));
	}
}), [["__scopeId", "data-v-aaedb1c3"]]), q = "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z", J = "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z", Y = "M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z", X = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z", Z = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Q = "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1", ne = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", re = "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", ie = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", ae = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", oe = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", se = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", ce = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z", le = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", ue = "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z", de = "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z", fe = "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z", pe = "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z", $ = "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", me = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", he = "M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z", ge = "M14,19H18V5H14M6,19H10V5H6V19Z", _e = "M8,5.14V19.14L19,12.14L8,5.14Z", ve = "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z";
//#endregion
export { T as A, I as B, _e as C, C as D, H as E, E as F, j as H, w as I, N as L, k as M, b as N, S as O, A as P, M as R, ge as S, te as T, F as V, fe as _, Z as a, me as b, re as c, oe as d, se as f, de as g, ue as h, X as i, x as j, O as k, ie as l, le as m, J as n, Q as o, ce as p, Y as r, ne as s, q as t, ae as u, pe as v, ve as w, he as x, $ as y, P as z };
