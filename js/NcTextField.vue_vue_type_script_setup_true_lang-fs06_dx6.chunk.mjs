import { $ as e, D as t, E as n, Gn as r, Hn as i, J as a, Jt as o, Kn as s, M as c, Nn as l, On as u, Q as d, Rn as f, Vn as p, X as m, Z as h, _n as g, an as _, c as v, cn as y, dn as b, dr as x, fr as S, h as C, hr as w, in as T, nn as E, o as D, on as O, r as k, rn as A, sn as j, t as M, vn as N, w as P, zn as F } from "./createElementId-BhyzukIw.chunk.mjs";
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
}, V = ["id"], H = /* @__PURE__ */ d(/* @__PURE__ */ b({
	inheritAttrs: !1,
	__name: "NcInputField",
	props: /* @__PURE__ */ g({
		class: { default: "" },
		inputClass: { default: "" },
		id: { default: () => M() },
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
	emits: /* @__PURE__ */ g(["trailingButtonClick"], ["update:modelValue"]),
	setup(t, { expose: n, emit: a }) {
		let c = F(t, "modelValue"), d = t, g = a;
		n({
			focus: H,
			select: U
		});
		let b = f(), C = p("input"), D = E(() => d.showTrailingButton || d.success), j = E(() => {
			if (d.placeholder) return d.placeholder;
			if (d.label) return e ? d.label : "";
		}), M = E(() => {
			let e = d.label || d.labelOutside;
			return e || i("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation."), e;
		}), P = E(() => {
			let e = [];
			return d.helperText && e.push(`${d.id}-helper-text`), b["aria-describedby"] && e.push(String(b["aria-describedby"])), e.join(" ") || void 0;
		});
		function H(e) {
			C.value.focus(e);
		}
		function U() {
			C.value.select();
		}
		function W(e) {
			let t = e.target;
			c.value = d.type === "number" && typeof c.value == "number" ? parseFloat(t.value) : t.value;
		}
		return (n, i) => (u(), O("div", { class: S(["input-field", [{
			"input-field--disabled": t.disabled,
			"input-field--error": t.error,
			"input-field--label-outside": t.labelOutside || !M.value,
			"input-field--leading-icon": !!n.$slots.icon,
			"input-field--trailing-icon": D.value,
			"input-field--pill": t.pill,
			"input-field--success": t.success,
			"input-field--legacy": x(e)
		}, n.$props.class]]) }, [A("div", I, [
			A("input", N(n.$attrs, {
				id: t.id,
				ref: "input",
				"aria-describedby": P.value,
				"aria-live": "polite",
				class: ["input-field__input", t.inputClass],
				disabled: t.disabled,
				placeholder: j.value,
				type: t.type,
				value: c.value.toString(),
				onInput: W
			}), null, 16, L),
			!t.labelOutside && M.value ? (u(), O("label", {
				key: 0,
				class: "input-field__label",
				for: t.id
			}, w(t.label), 9, R)) : _("", !0),
			s(A("div", z, [l(n.$slots, "icon", {}, void 0, !0)], 512), [[o, !!n.$slots.icon]]),
			t.showTrailingButton ? (u(), T(h, {
				key: 1,
				class: "input-field__trailing-button",
				"aria-label": t.trailingButtonLabel,
				disabled: t.disabled,
				variant: "tertiary-no-background",
				onClick: i[0] ||= (e) => g("trailingButtonClick", e)
			}, {
				icon: r(() => [l(n.$slots, "trailing-button-icon", {}, void 0, !0)]),
				_: 3
			}, 8, ["aria-label", "disabled"])) : t.success || t.error ? (u(), O("div", B, [t.success ? (u(), T(m, {
				key: 0,
				path: x(v)
			}, null, 8, ["path"])) : (u(), T(m, {
				key: 1,
				path: x(k)
			}, null, 8, ["path"]))])) : _("", !0)
		]), t.helperText ? (u(), O("p", {
			key: 0,
			id: `${t.id}-helper-text`,
			class: "input-field__helper-text-message"
		}, [t.success ? (u(), T(m, {
			key: 0,
			class: "input-field__helper-text-message__icon",
			path: x(v),
			inline: ""
		}, null, 8, ["path"])) : t.error ? (u(), T(m, {
			key: 1,
			class: "input-field__helper-text-message__icon",
			path: x(k),
			inline: ""
		}, null, 8, ["path"])) : _("", !0), y(" " + w(t.helperText), 1)], 8, V)) : _("", !0)], 2));
	}
}), [["__scopeId", "data-v-feb04bef"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcTextField.vue_vue_type_script_setup_true_lang.mjs
n(c, a);
var U = /* @__PURE__ */ b({
	__name: "NcTextField",
	props: /* @__PURE__ */ g({
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
	setup(e, { expose: n }) {
		let i = F(e, "modelValue"), a = e;
		n({
			focus: f,
			select: h
		});
		let o = p("inputField"), s = {
			arrowEnd: t("Save changes"),
			close: t("Clear text"),
			undo: t("Undo changes")
		}, c = new Set(Object.keys(H.props)), d = E(() => {
			let e = Object.fromEntries(Object.entries(a).filter(([e]) => c.has(e)));
			return e.trailingButtonLabel ??= s[a.trailingButtonIcon], e;
		});
		function f(e) {
			o.value.focus(e);
		}
		function h() {
			o.value.select();
		}
		return (t, n) => (u(), T(x(H), N(d.value, {
			ref: "inputField",
			modelValue: i.value,
			"onUpdate:modelValue": n[0] ||= (e) => i.value = e
		}), j({ _: 2 }, [t.$slots.icon ? {
			name: "icon",
			fn: r(() => [l(t.$slots, "icon")]),
			key: "0"
		} : void 0, e.type === "search" ? void 0 : {
			name: "trailing-button-icon",
			fn: r(() => [e.trailingButtonIcon === "arrowEnd" ? (u(), T(x(m), {
				key: 0,
				directional: "",
				path: x(D)
			}, null, 8, ["path"])) : (u(), T(x(m), {
				key: 1,
				path: e.trailingButtonIcon === "undo" ? x(P) : x(C)
			}, null, 8, ["path"]))]),
			key: "1"
		}]), 1040, ["modelValue"]));
	}
});
//#endregion
export { H as n, U as t };
