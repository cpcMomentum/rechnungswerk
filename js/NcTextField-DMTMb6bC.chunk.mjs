import { At as e, Cn as t, Ct as n, D as r, Ht as i, Jt as a, Lt as o, O as s, T as c, Xt as l, Zt as u, _t as d, bn as f, bt as p, en as m, gt as h, ht as g, i as _, kt as v, l as y, mt as b, ot as x, qt as S, r as C, t as w, tn as T, vt as E, yn as D, yt as O } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { E as k, T as A, a as j, m as M, n as N, s as P, w as F } from "./mdi-CpchYUUV-BlQjFBKG.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/NcInputField-5Sg6EUP6.mjs
var I = { class: "input-field__main-wrapper" }, L = [
	"id",
	"aria-describedby",
	"disabled",
	"placeholder",
	"type",
	"value"
], R = ["for"], z = { class: "input-field__icon input-field__icon--leading" }, B = {
	key: 2,
	class: "input-field__icon input-field__icon--trailing"
}, V = ["id"], H = /* @__PURE__ */ r(/* @__PURE__ */ n({
	inheritAttrs: !1,
	__name: "NcInputField",
	props: /* @__PURE__ */ v({
		class: { default: "" },
		inputClass: { default: "" },
		id: { default: () => w() },
		label: { default: void 0 },
		labelOutside: { type: Boolean },
		type: { default: "text" },
		placeholder: { default: void 0 },
		showTrailingButton: { type: Boolean },
		trailingButtonLabel: { default: void 0 },
		success: { type: Boolean },
		error: { type: Boolean },
		helperText: { default: "" },
		disabled: { type: Boolean },
		pill: { type: Boolean }
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ v(["trailingButtonClick"], ["update:modelValue"]),
	setup(n, { expose: r, emit: c }) {
		let _ = a(n, "modelValue"), v = n, y = c;
		r({
			focus: H,
			select: U
		});
		let C = S(), w = l("input"), O = b(() => v.showTrailingButton || v.success), j = b(() => {
			if (v.placeholder) return v.placeholder;
			if (v.label) return s ? v.label : "";
		}), M = b(() => {
			let e = v.label || v.labelOutside;
			return e || u("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation."), e;
		}), F = b(() => {
			let e = [];
			return v.helperText && e.push(`${v.id}-helper-text`), C["aria-describedby"] && e.push(String(C["aria-describedby"])), e.join(" ") || void 0;
		});
		function H(e) {
			w.value.focus(e);
		}
		function U() {
			w.value.select();
		}
		function W(e) {
			let t = e.target;
			_.value = v.type === "number" && typeof _.value == "number" ? parseFloat(t.value) : t.value;
		}
		return (r, a) => (o(), E("div", { class: f(["input-field", [{
			"input-field--disabled": n.disabled,
			"input-field--error": n.error,
			"input-field--label-outside": n.labelOutside || !M.value,
			"input-field--leading-icon": !!r.$slots.icon,
			"input-field--trailing-icon": O.value,
			"input-field--pill": n.pill,
			"input-field--success": n.success,
			"input-field--legacy": D(s)
		}, r.$props.class]]) }, [g("div", I, [
			g("input", e(r.$attrs, {
				id: n.id,
				ref: "input",
				"aria-describedby": F.value,
				"aria-live": "polite",
				class: ["input-field__input", n.inputClass],
				disabled: n.disabled,
				placeholder: j.value,
				type: n.type,
				value: _.value.toString(),
				onInput: W
			}), null, 16, L),
			!n.labelOutside && M.value ? (o(), E("label", {
				key: 0,
				class: "input-field__label",
				for: n.id
			}, t(n.label), 9, R)) : d("", !0),
			T(g("div", z, [i(r.$slots, "icon", {}, void 0, !0)], 512), [[x, !!r.$slots.icon]]),
			n.showTrailingButton ? (o(), h(k, {
				key: 1,
				class: "input-field__trailing-button",
				"aria-label": n.trailingButtonLabel,
				disabled: n.disabled,
				variant: "tertiary-no-background",
				onClick: a[0] ||= (e) => y("trailingButtonClick", e)
			}, {
				icon: m(() => [i(r.$slots, "trailing-button-icon", {}, void 0, !0)]),
				_: 3
			}, 8, ["aria-label", "disabled"])) : n.success || n.error ? (o(), E("div", B, [n.success ? (o(), h(A, {
				key: 0,
				path: D(P)
			}, null, 8, ["path"])) : (o(), h(A, {
				key: 1,
				path: D(N)
			}, null, 8, ["path"]))])) : d("", !0)
		]), n.helperText ? (o(), E("p", {
			key: 0,
			id: `${n.id}-helper-text`,
			class: "input-field__helper-text-message"
		}, [n.success ? (o(), h(A, {
			key: 0,
			class: "input-field__helper-text-message__icon",
			path: D(P),
			inline: ""
		}, null, 8, ["path"])) : n.error ? (o(), h(A, {
			key: 1,
			class: "input-field__helper-text-message__icon",
			path: D(N),
			inline: ""
		}, null, 8, ["path"])) : d("", !0), p(" " + t(n.helperText), 1)], 8, V)) : d("", !0)], 2));
	}
}), [["__scopeId", "data-v-8e16cbb5"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcTextField.vue_vue_type_script_setup_true_lang-Bx2esFU2.mjs
C(y, c);
var U = /* @__PURE__ */ n({
	__name: "NcTextField",
	props: /* @__PURE__ */ v({
		class: {},
		inputClass: {},
		id: {},
		label: {},
		labelOutside: { type: Boolean },
		type: {},
		placeholder: {},
		showTrailingButton: { type: Boolean },
		trailingButtonLabel: { default: void 0 },
		success: { type: Boolean },
		error: { type: Boolean },
		helperText: {},
		disabled: { type: Boolean },
		pill: { type: Boolean },
		trailingButtonIcon: { default: "close" }
	}, {
		modelValue: { default: "" },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(t, { expose: n }) {
		let r = a(t, "modelValue"), s = t;
		n({
			focus: p,
			select: g
		});
		let c = l("inputField"), u = {
			arrowEnd: _("Save changes"),
			close: _("Clear text"),
			undo: _("Undo changes")
		}, d = new Set(Object.keys(H.props)), f = b(() => {
			let e = Object.fromEntries(Object.entries(s).filter(([e]) => d.has(e)));
			return e.trailingButtonLabel ??= u[s.trailingButtonIcon], e;
		});
		function p(e) {
			c.value.focus(e);
		}
		function g() {
			c.value.select();
		}
		return (n, a) => (o(), h(D(H), e(f.value, {
			ref: "inputField",
			modelValue: r.value,
			"onUpdate:modelValue": a[0] ||= (e) => r.value = e
		}), O({ _: 2 }, [n.$slots.icon ? {
			name: "icon",
			fn: m(() => [i(n.$slots, "icon")]),
			key: "0"
		} : void 0, t.type === "search" ? void 0 : {
			name: "trailing-button-icon",
			fn: m(() => [t.trailingButtonIcon === "arrowEnd" ? (o(), h(D(A), {
				key: 0,
				directional: "",
				path: D(j)
			}, null, 8, ["path"])) : (o(), h(D(A), {
				key: 1,
				path: t.trailingButtonIcon === "undo" ? D(F) : D(M)
			}, null, 8, ["path"]))]),
			key: "1"
		}]), 1040, ["modelValue"]));
	}
});
//#endregion
export { H as n, U as t };
