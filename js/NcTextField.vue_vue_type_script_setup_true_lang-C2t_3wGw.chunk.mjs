import { $ as e, Bn as t, D as n, E as r, En as i, In as a, J as o, Jt as s, Ln as c, M as l, Q as u, Un as d, Wn as f, X as p, Z as m, _n as h, an as g, c as _, cn as v, dn as y, h as b, in as x, jn as S, lr as C, nn as w, o as T, on as E, pr as D, r as O, rn as k, sn as A, t as j, ur as M, vn as N, w as P, zn as F } from "./createElementId-XLh0NVJk.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/NcInputField.mjs
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
}, V = ["id"], H = /* @__PURE__ */ u(/* @__PURE__ */ y({
	inheritAttrs: !1,
	__name: "NcInputField",
	props: /* @__PURE__ */ h({
		class: { default: "" },
		inputClass: { default: "" },
		id: { default: () => j() },
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
	emits: /* @__PURE__ */ h(["trailingButtonClick"], ["update:modelValue"]),
	setup(n, { expose: r, emit: o }) {
		let l = c(n, "modelValue"), u = n, h = o;
		r({
			focus: H,
			select: U
		});
		let y = a(), b = F("input"), T = w(() => u.showTrailingButton || u.success), A = w(() => {
			if (u.placeholder) return u.placeholder;
			if (u.label) return e ? u.label : "";
		}), j = w(() => {
			let e = u.label || u.labelOutside;
			return e || t("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation."), e;
		}), P = w(() => {
			let e = [];
			return u.helperText && e.push(`${u.id}-helper-text`), y["aria-describedby"] && e.push(String(y["aria-describedby"])), e.join(" ") || void 0;
		});
		function H(e) {
			b.value.focus(e);
		}
		function U() {
			b.value.select();
		}
		function W(e) {
			let t = e.target;
			l.value = u.type === "number" && typeof l.value == "number" ? parseFloat(t.value) : t.value;
		}
		return (t, r) => (i(), E("div", { class: M(["input-field", [{
			"input-field--disabled": n.disabled,
			"input-field--error": n.error,
			"input-field--label-outside": n.labelOutside || !j.value,
			"input-field--leading-icon": !!t.$slots.icon,
			"input-field--trailing-icon": T.value,
			"input-field--pill": n.pill,
			"input-field--success": n.success,
			"input-field--legacy": C(e)
		}, t.$props.class]]) }, [k("div", I, [
			k("input", N(t.$attrs, {
				id: n.id,
				ref: "input",
				"aria-describedby": P.value,
				"aria-live": "polite",
				class: ["input-field__input", n.inputClass],
				disabled: n.disabled,
				placeholder: A.value,
				type: n.type,
				value: l.value.toString(),
				onInput: W
			}), null, 16, L),
			!n.labelOutside && j.value ? (i(), E("label", {
				key: 0,
				class: "input-field__label",
				for: n.id
			}, D(n.label), 9, R)) : g("", !0),
			f(k("div", z, [S(t.$slots, "icon", {}, void 0, !0)], 512), [[s, !!t.$slots.icon]]),
			n.showTrailingButton ? (i(), x(m, {
				key: 1,
				class: "input-field__trailing-button",
				"aria-label": n.trailingButtonLabel,
				disabled: n.disabled,
				variant: "tertiary-no-background",
				onClick: r[0] ||= (e) => h("trailingButtonClick", e)
			}, {
				icon: d(() => [S(t.$slots, "trailing-button-icon", {}, void 0, !0)]),
				_: 3
			}, 8, ["aria-label", "disabled"])) : n.success || n.error ? (i(), E("div", B, [n.success ? (i(), x(p, {
				key: 0,
				path: C(_)
			}, null, 8, ["path"])) : (i(), x(p, {
				key: 1,
				path: C(O)
			}, null, 8, ["path"]))])) : g("", !0)
		]), n.helperText ? (i(), E("p", {
			key: 0,
			id: `${n.id}-helper-text`,
			class: "input-field__helper-text-message"
		}, [n.success ? (i(), x(p, {
			key: 0,
			class: "input-field__helper-text-message__icon",
			path: C(_),
			inline: ""
		}, null, 8, ["path"])) : n.error ? (i(), x(p, {
			key: 1,
			class: "input-field__helper-text-message__icon",
			path: C(O),
			inline: ""
		}, null, 8, ["path"])) : g("", !0), v(" " + D(n.helperText), 1)], 8, V)) : g("", !0)], 2));
	}
}), [["__scopeId", "data-v-feb04bef"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcTextField.vue_vue_type_script_setup_true_lang.mjs
r(l, o);
var U = /* @__PURE__ */ y({
	__name: "NcTextField",
	props: /* @__PURE__ */ h({
		class: {},
		inputClass: {},
		id: {},
		label: {},
		labelOutside: { type: Boolean },
		placeholder: {},
		showTrailingButton: { type: Boolean },
		trailingButtonLabel: { default: void 0 },
		success: { type: Boolean },
		error: { type: Boolean },
		helperText: {},
		disabled: { type: Boolean },
		pill: { type: Boolean },
		type: {},
		trailingButtonIcon: { default: "close" }
	}, {
		modelValue: { default: "" },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e, { expose: t }) {
		let r = c(e, "modelValue"), a = e;
		t({
			focus: f,
			select: m
		});
		let o = F("inputField"), s = {
			arrowEnd: n("Save changes"),
			close: n("Clear text"),
			undo: n("Undo changes")
		}, l = new Set(Object.keys(H.props)), u = w(() => {
			let e = Object.fromEntries(Object.entries(a).filter(([e]) => l.has(e)));
			return e.trailingButtonLabel ??= s[a.trailingButtonIcon], e;
		});
		function f(e) {
			o.value.focus(e);
		}
		function m() {
			o.value.select();
		}
		return (t, n) => (i(), x(C(H), N(u.value, {
			ref: "inputField",
			modelValue: r.value,
			"onUpdate:modelValue": n[0] ||= (e) => r.value = e
		}), A({ _: 2 }, [t.$slots.icon ? {
			name: "icon",
			fn: d(() => [S(t.$slots, "icon")]),
			key: "0"
		} : void 0, e.type === "search" ? void 0 : {
			name: "trailing-button-icon",
			fn: d(() => [e.trailingButtonIcon === "arrowEnd" ? (i(), x(C(p), {
				key: 0,
				directional: "",
				path: C(T)
			}, null, 8, ["path"])) : (i(), x(C(p), {
				key: 1,
				path: e.trailingButtonIcon === "undo" ? C(P) : C(b)
			}, null, 8, ["path"]))]),
			key: "1"
		}]), 1040, ["modelValue"]));
	}
});
//#endregion
export { H as n, U as t };
