import { At as e, Cn as t, Ct as n, D as r, Ft as i, Ht as a, It as o, Jt as s, Kt as c, Lt as l, Qt as u, S as d, Sn as f, St as p, Ut as m, Vt as h, Xt as g, _t as _, bn as v, bt as y, ct as b, dn as x, en as S, g as ee, gn as te, gt as C, ht as w, i as ne, jt as re, kt as ie, mn as T, mt as E, r as ae, t as D, ut as O, vn as oe, vt as k, w as se, xt as A, yn as j, yt as ce } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { _ as le, c as ue, m as de, o as fe, r as pe, s as me, v as he, y as ge } from "./NcPopover-B87bEPLq-Bfc7fZbF.chunk.mjs";
import { E as _e, T as ve, _ as ye, v as be } from "./mdi-CpchYUUV-BlQjFBKG.chunk.mjs";
import { a as xe, b as Se, d as Ce, f as we, o as M, r as Te, u as Ee, v as De, y as Oe } from "./chunks-tk4b0tDJ.chunk.mjs";
import { t as ke } from "./NcSelect--kERLlBK-CgY601vH.chunk.mjs";
import { a as Ae, i as je, n as Me, r as Ne, s as Pe, t as Fe } from "./NcActions-BW7oJgs-.chunk.mjs";
import { t as Ie } from "./NcCheckboxRadioSwitch-b1krvMyn.chunk.mjs";
import "./NcSelect-_-6PKSP3.chunk.mjs";
import { a as Le, d as Re, f as ze, h as Be, i as Ve, m as He, n as Ue, p as We, r as Ge, s as Ke, u as qe } from "./preview-Bef-XMOh.chunk.mjs";
import { a as Je, c as Ye, d as N, f as Xe, i as Ze, l as Qe, n as $e, o as et, r as tt, s as nt, t as P, u as rt } from "./_plugin-vue_export-helper-DV6c2A9v.chunk.mjs";
import { n as it, t as at } from "./NcTextField-DMTMb6bC.chunk.mjs";
//#region node_modules/@nextcloud/sharing/dist/share/ShareType.js
var ot;
(function(e) {
	e[e.User = 0] = "User", e[e.Group = 1] = "Group", e[e.Link = 3] = "Link", e[e.Email = 4] = "Email", e[e.Remote = 6] = "Remote", e[e.Team = 7] = "Team", e[e.Guest = 8] = "Guest", e[e.RemoteGroup = 9] = "RemoteGroup", e[e.Room = 10] = "Room", e[e.Deck = 12] = "Deck", e[e.FederatedGroup = 14] = "FederatedGroup", e[e.ScienceMesh = 15] = "ScienceMesh";
})(ot ||= {});
//#endregion
//#region node_modules/@nextcloud/sharing/dist/public.js
function st() {
	return Oe("files_sharing", "isPublic", null) ?? document.querySelector("input#isPublic[type=\"hidden\"][name=\"isPublic\"][value=\"1\"]") !== null;
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcDateTimePickerNative-B8CMOUnH.mjs
ae(d);
var ct = ["for"], lt = [
	"id",
	"type",
	"value",
	"min",
	"max"
], ut = /* @__PURE__ */ r(/* @__PURE__ */ n({
	inheritAttrs: !1,
	__name: "NcDateTimePickerNative",
	props: /* @__PURE__ */ ie({
		class: { default: void 0 },
		id: { default: () => D() },
		inputClass: { default: "" },
		type: { default: "date" },
		label: { default: () => ne("Please choose a date") },
		min: { default: null },
		max: { default: null },
		hideLabel: { type: Boolean }
	}, {
		modelValue: { default: null },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(n) {
		let r = s(n, "modelValue"), i = n, a = E(() => r.value ? d(r.value) : ""), o = E(() => i.max ? d(i.max) : void 0), c = E(() => i.min ? d(i.min) : void 0);
		function u(e) {
			return {
				yyyy: e.getFullYear().toString().padStart(4, "0"),
				MM: (e.getMonth() + 1).toString().padStart(2, "0"),
				dd: e.getDate().toString().padStart(2, "0"),
				hh: e.getHours().toString().padStart(2, "0"),
				mm: e.getMinutes().toString().padStart(2, "0")
			};
		}
		function d(e) {
			let { yyyy: t, MM: n, dd: r, hh: a, mm: o } = u(e);
			if (i.type === "datetime-local") return `${t}-${n}-${r}T${a}:${o}`;
			if (i.type === "date") return `${t}-${n}-${r}`;
			if (i.type === "month") return `${t}-${n}`;
			if (i.type === "time") return `${a}:${o}`;
			if (i.type === "week") {
				let n = new Date(Number.parseInt(t), 0, 1), r = Math.floor((e.getTime() - n.getTime()) / 864e5);
				return `${t}-W${Math.ceil(r / 7)}`;
			}
			return "";
		}
		function f(e) {
			let t = e.target;
			if (!t || isNaN(t.valueAsNumber)) r.value = null;
			else if (i.type === "time") {
				let e = t.value, { yyyy: n, MM: i, dd: a } = u(r.value || /* @__PURE__ */ new Date());
				r.value = /* @__PURE__ */ new Date(`${n}-${i}-${a}T${e}`);
			} else if (i.type === "month") {
				let e = (new Date(t.value).getMonth() + 1).toString().padStart(2, "0"), { yyyy: n, dd: i, hh: a, mm: o } = u(r.value || /* @__PURE__ */ new Date());
				r.value = /* @__PURE__ */ new Date(`${n}-${e}-${i}T${a}:${o}`);
			} else {
				let e = new Date(t.valueAsNumber).getTimezoneOffset() * 1e3 * 60, n = t.valueAsNumber + e;
				r.value = new Date(n);
			}
		}
		return (r, i) => (l(), k("div", { class: v(["native-datetime-picker", r.$props.class]) }, [w("label", {
			class: v(["native-datetime-picker__label", { "hidden-visually": n.hideLabel }]),
			for: n.id
		}, t(n.label), 11, ct), w("input", e({
			id: n.id,
			class: ["native-datetime-picker__input", n.inputClass],
			type: n.type,
			value: a.value,
			min: c.value,
			max: o.value
		}, r.$attrs, { onInput: f }), null, 16, lt)], 2));
	}
}), [["__scopeId", "data-v-b97e1f7a"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcPasswordField-BFyzHTOO.mjs
ae(ee);
var dt = /* @__PURE__ */ r(/* @__PURE__ */ n({
	__name: "NcPasswordField",
	props: /* @__PURE__ */ ie({
		class: {},
		inputClass: { default: "" },
		id: {},
		label: {},
		labelOutside: { type: Boolean },
		placeholder: {},
		showTrailingButton: {
			type: Boolean,
			default: !0
		},
		success: { type: Boolean },
		error: { type: Boolean },
		helperText: {},
		disabled: { type: Boolean },
		pill: { type: Boolean },
		checkPasswordStrength: { type: Boolean },
		minlength: { default: void 0 },
		asText: { type: Boolean }
	}, {
		modelValue: { default: "" },
		modelModifiers: {},
		visible: {
			type: Boolean,
			default: !1
		},
		visibleModifiers: {}
	}),
	emits: /* @__PURE__ */ ie(["valid", "invalid"], ["update:modelValue", "update:visible"]),
	setup(t, { expose: n, emit: r }) {
		let i = s(t, "modelValue"), o = s(t, "visible"), c = t, d = r;
		n({
			focus: ee,
			select: te
		});
		let { password_policy: f } = De(), p = g("inputField"), m = x(""), h = x(), _ = E(() => {
			let e = { ...c };
			return delete e.checkPasswordStrength, delete e.minlength, delete e.asText, delete e.error, delete e.helperText, delete e.inputClass, delete e.success, e;
		}), v = E(() => c.minlength ?? (c.checkPasswordStrength ? f?.minLength : void 0) ?? void 0);
		u(i, () => {
			h.value = void 0, m.value = "";
		}), u(i, Ne(y, 500));
		async function y() {
			if (!(!c.checkPasswordStrength || !i.value)) try {
				let { data: e } = await je.post(le("apps/password_policy/api/v1/validate"), { password: i.value });
				if (h.value = e.ocs.data.passed, e.ocs.data.passed) {
					m.value = ne("Password is secure"), d("valid");
					return;
				}
				m.value = e.ocs.data.reason, d("invalid");
			} catch (e) {
				pe.error("Password policy returned an error", { error: e });
			}
		}
		function b() {
			o.value = !o.value;
		}
		function ee(e) {
			p.value.focus(e);
		}
		function te() {
			p.value.select();
		}
		return (n, r) => (l(), C(it, e(_.value, {
			ref: "inputField",
			modelValue: i.value,
			"onUpdate:modelValue": r[0] ||= (e) => i.value = e,
			error: t.error || h.value === !1,
			helperText: t.helperText || m.value,
			inputClass: [t.inputClass, { "password-field__input--secure-text": !o.value && t.asText }],
			minlength: v.value,
			success: t.success || h.value === !0,
			trailingButtonLabel: o.value ? j(ne)("Hide password") : j(ne)("Show password"),
			type: o.value || t.asText ? "text" : "password",
			onTrailingButtonClick: b
		}), ce({
			"trailing-button-icon": S(() => [A(ve, { path: o.value ? j(be) : j(ye) }, null, 8, ["path"])]),
			_: 2
		}, [n.$slots.icon ? {
			name: "icon",
			fn: S(() => [a(n.$slots, "icon", {}, void 0, !0)]),
			key: "0"
		} : void 0]), 1040, [
			"modelValue",
			"error",
			"helperText",
			"inputClass",
			"minlength",
			"success",
			"trailingButtonLabel",
			"type"
		]));
	}
}), [["__scopeId", "data-v-cb828737"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcActionInput-Dr8Yrafu.mjs
ae(se);
var ft = {
	name: "NcActionInput",
	components: {
		NcDateTimePickerNative: ut,
		NcPasswordField: dt,
		NcTextField: at,
		NcColorPicker: p(() => import("./NcColorPicker-Bn1Xhz-9.chunk.mjs").then((e) => e.t)),
		NcDateTimePicker: p(() => import("./NcDateTimePicker-DcVGEtt2.chunk.mjs")),
		NcSelect: p(() => import("./NcSelect-_-6PKSP3.chunk.mjs").then((e) => e.t))
	},
	mixins: [Pe],
	inheritAttrs: !1,
	props: {
		id: {
			type: String,
			default: () => "action-" + D(),
			validator: (e) => e.trim() !== ""
		},
		inputId: {
			type: String,
			default: () => "action-input-" + D(),
			validator: (e) => e.trim() !== ""
		},
		icon: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: "text",
			validator(e) {
				return [
					"date",
					"datetime-local",
					"month",
					"multiselect",
					"number",
					"password",
					"search",
					"tel",
					"text",
					"time",
					"url",
					"week",
					"color",
					"email"
				].includes(e);
			}
		},
		idNativeDateTimePicker: {
			type: String,
			default: "date-time-picker_id"
		},
		isNativePicker: {
			type: Boolean,
			default: !1
		},
		label: {
			type: String,
			default: null
		},
		labelOutside: {
			type: Boolean,
			default: !0
		},
		modelValue: {
			type: [
				String,
				Date,
				Number,
				Array
			],
			default: ""
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		showTrailingButton: {
			type: Boolean,
			default: !0
		},
		trailingButtonLabel: {
			type: String,
			default: ne("Submit")
		},
		class: {
			type: [
				String,
				Array,
				Object
			],
			default: ""
		}
	},
	emits: ["submit", "update:modelValue"],
	computed: {
		isIconUrl() {
			try {
				return new URL(this.icon);
			} catch {
				return !1;
			}
		},
		isMultiselectType() {
			return this.type === "multiselect";
		},
		nativeDatePickerType() {
			switch (this.type) {
				case "date":
				case "month":
				case "time":
				case "week":
				case "datetime-local": return this.type;
			}
			return !1;
		},
		datePickerType() {
			if (!this.isNativePicker) switch (this.type) {
				case "date":
				case "month":
				case "time": return this.type;
				case "datetime-local": return "datetime";
			}
			return !1;
		},
		isFocusable() {
			return !this.disabled;
		}
	},
	methods: {
		onLeave() {
			this.$refs.datetimepicker && this.$refs.datetimepicker.$refs.datepicker && this.$refs.datetimepicker.$refs.datepicker.closePopup();
		},
		onSubmit(e) {
			if (e.preventDefault(), e.stopPropagation(), !this.disabled) this.$emit("submit", e);
			else return !1;
		},
		onUpdateModelValue(e) {
			this.$emit("update:modelValue", e);
		}
	}
}, pt = { class: "action-input__icon-wrapper" }, mt = ["disabled"], ht = { class: "action-input__container" }, gt = ["for"], _t = { class: "action-input__input-container" }, vt = {
	key: 4,
	class: "action-input__container"
}, yt = ["for"], bt = { class: "action-input__input-container" };
function xt(n, r, i, o, s, c) {
	let u = m("NcDateTimePicker"), d = m("NcDateTimePickerNative"), p = m("NcSelect"), h = m("NcPasswordField"), g = m("NcColorPicker"), y = m("NcTextField");
	return l(), k("li", { class: v(["action", [{ "action--disabled": i.disabled }, n.$props.class]]) }, [w("span", {
		class: v(["action-input", {
			"action-input-picker--disabled": i.disabled,
			"action-input--visible-label": i.labelOutside && i.label
		}]),
		onMouseleave: r[3] ||= (...e) => c.onLeave && c.onLeave(...e)
	}, [w("span", pt, [a(n.$slots, "icon", {}, () => [w("span", {
		"aria-hidden": "true",
		class: v(["action-input__icon", [c.isIconUrl ? "action-input__icon--url" : i.icon]]),
		style: f({ backgroundImage: c.isIconUrl ? `url(${i.icon})` : null })
	}, null, 6)], !0)]), w("form", {
		ref: "form",
		class: "action-input__form",
		disabled: i.disabled,
		onSubmit: r[2] ||= b((...e) => c.onSubmit && c.onSubmit(...e), ["prevent"])
	}, [w("div", ht, [i.label && i.labelOutside && !i.isNativePicker ? (l(), k("label", {
		key: 0,
		class: v(["action-input__text-label", { "action-input__text-label--hidden": !i.labelOutside }]),
		for: i.inputId
	}, t(i.label), 11, gt)) : _("", !0), w("div", _t, [c.datePickerType ? (l(), C(u, e({
		key: 0,
		ref: "datetimepicker",
		modelValue: i.modelValue,
		style: { "z-index": "99999999999" },
		placeholder: n.text,
		disabled: i.disabled,
		type: c.datePickerType,
		inputClass: ["mx-input", { focusable: c.isFocusable }],
		class: "action-input__datetimepicker",
		appendToBody: ""
	}, n.$attrs, { "onUpdate:modelValue": c.onUpdateModelValue }), null, 16, [
		"modelValue",
		"placeholder",
		"disabled",
		"type",
		"inputClass",
		"onUpdate:modelValue"
	])) : i.isNativePicker ? (l(), C(d, e({
		key: 1,
		id: i.idNativeDateTimePicker,
		modelValue: i.modelValue,
		label: i.label,
		type: c.nativeDatePickerType,
		inputClass: { focusable: c.isFocusable },
		class: "action-input__datetimepicker"
	}, n.$attrs, { "onUpdate:modelValue": c.onUpdateModelValue }), null, 16, [
		"id",
		"modelValue",
		"label",
		"type",
		"inputClass",
		"onUpdate:modelValue"
	])) : c.isMultiselectType ? (l(), C(p, e({
		key: 2,
		modelValue: i.modelValue,
		placeholder: n.text,
		disabled: i.disabled,
		appendToBody: !1,
		inputClass: { focusable: c.isFocusable },
		class: "action-input__multi"
	}, n.$attrs, { "onUpdate:modelValue": c.onUpdateModelValue }), null, 16, [
		"modelValue",
		"placeholder",
		"disabled",
		"inputClass",
		"onUpdate:modelValue"
	])) : i.type === "password" ? (l(), C(h, e({
		key: 3,
		id: i.inputId,
		modelValue: i.modelValue,
		label: i.label,
		labelOutside: !i.label || i.labelOutside,
		placeholder: n.text,
		disabled: i.disabled,
		inputClass: { focusable: c.isFocusable },
		showTrailingButton: i.showTrailingButton && !i.disabled
	}, n.$attrs, { "onUpdate:modelValue": c.onUpdateModelValue }), null, 16, [
		"id",
		"modelValue",
		"label",
		"labelOutside",
		"placeholder",
		"disabled",
		"inputClass",
		"showTrailingButton",
		"onUpdate:modelValue"
	])) : i.type === "color" ? (l(), k("div", vt, [i.label && i.type === "color" ? (l(), k("label", {
		key: 0,
		class: v(["action-input__text-label", { "action-input__text-label--hidden": !i.labelOutside }]),
		for: i.inputId
	}, t(i.label), 11, yt)) : _("", !0), w("div", bt, [A(g, e({
		id: "inputId",
		modelValue: i.modelValue,
		class: "colorpicker__trigger"
	}, n.$attrs, {
		"onUpdate:modelValue": c.onUpdateModelValue,
		onSubmit: r[0] ||= (e) => n.$refs.form.requestSubmit()
	}), {
		default: S(() => [w("button", {
			class: v(["colorpicker__preview", { focusable: c.isFocusable }]),
			style: f({ "background-color": i.modelValue })
		}, null, 6)]),
		_: 1
	}, 16, ["modelValue", "onUpdate:modelValue"])])])) : (l(), C(y, e({
		key: 5,
		id: i.inputId,
		modelValue: i.modelValue,
		label: i.label,
		labelOutside: !i.label || i.labelOutside,
		placeholder: n.text,
		disabled: i.disabled,
		inputClass: { focusable: c.isFocusable },
		type: i.type,
		trailingButtonIcon: "arrowRight",
		trailingButtonLabel: i.trailingButtonLabel,
		showTrailingButton: i.showTrailingButton && !i.disabled
	}, n.$attrs, {
		onTrailingButtonClick: r[1] ||= (e) => n.$refs.form.requestSubmit(),
		"onUpdate:modelValue": c.onUpdateModelValue
	}), null, 16, [
		"id",
		"modelValue",
		"label",
		"labelOutside",
		"placeholder",
		"disabled",
		"inputClass",
		"type",
		"trailingButtonLabel",
		"showTrailingButton",
		"onUpdate:modelValue"
	]))])])], 40, mt)], 34)], 2);
}
var St = /* @__PURE__ */ r(ft, [["render", xt], ["__scopeId", "data-v-43230e98"]]);
//#endregion
//#region node_modules/@nextcloud/files/node_modules/@nextcloud/sharing/dist/public.js
function Ct() {
	return Oe("files_sharing", "isPublic", null) ?? document.querySelector("input#isPublic[type=\"hidden\"][name=\"isPublic\"][value=\"1\"]") !== null;
}
function wt() {
	return Oe("files_sharing", "sharingToken", null) ?? document.querySelector("input#sharingToken[type=\"hidden\"]")?.value ?? null;
}
//#endregion
//#region node_modules/webdav/dist/web/index.js
var Tt = {
	2(e) {
		function t(e, t, i) {
			e instanceof RegExp && (e = n(e, i)), t instanceof RegExp && (t = n(t, i));
			var a = r(e, t, i);
			return a && {
				start: a[0],
				end: a[1],
				pre: i.slice(0, a[0]),
				body: i.slice(a[0] + e.length, a[1]),
				post: i.slice(a[1] + t.length)
			};
		}
		function n(e, t) {
			var n = t.match(e);
			return n ? n[0] : null;
		}
		function r(e, t, n) {
			var r, i, a, o, s, c = n.indexOf(e), l = n.indexOf(t, c + 1), u = c;
			if (c >= 0 && l > 0) {
				for (r = [], a = n.length; u >= 0 && !s;) u == c ? (r.push(u), c = n.indexOf(e, u + 1)) : r.length == 1 ? s = [r.pop(), l] : ((i = r.pop()) < a && (a = i, o = l), l = n.indexOf(t, u + 1)), u = c < l && c >= 0 ? c : l;
				r.length && (s = [a, o]);
			}
			return s;
		}
		e.exports = t, t.range = r;
	},
	101(e, t, n) {
		var r;
		e = n.nmd(e), function() {
			var i = (e && e.exports, typeof global == "object" && global);
			i.global !== i && i.window;
			var a = function(e) {
				this.message = e;
			};
			(a.prototype = /* @__PURE__ */ Error()).name = "InvalidCharacterError";
			var o = function(e) {
				throw new a(e);
			}, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = /[\t\n\f\r ]/g, l = {
				encode: function(e) {
					e = String(e), /[^\0-\xFF]/.test(e) && o("The string to be encoded contains characters outside of the Latin1 range.");
					for (var t, n, r, i, a = e.length % 3, c = "", l = -1, u = e.length - a; ++l < u;) t = e.charCodeAt(l) << 16, n = e.charCodeAt(++l) << 8, r = e.charCodeAt(++l), c += s.charAt((i = t + n + r) >> 18 & 63) + s.charAt(i >> 12 & 63) + s.charAt(i >> 6 & 63) + s.charAt(63 & i);
					return a == 2 ? (t = e.charCodeAt(l) << 8, n = e.charCodeAt(++l), c += s.charAt((i = t + n) >> 10) + s.charAt(i >> 4 & 63) + s.charAt(i << 2 & 63) + "=") : a == 1 && (i = e.charCodeAt(l), c += s.charAt(i >> 2) + s.charAt(i << 4 & 63) + "=="), c;
				},
				decode: function(e) {
					var t = (e = String(e).replace(c, "")).length;
					t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length), (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && o("Invalid character: the string to be decoded is not correctly encoded.");
					for (var n, r, i = 0, a = "", l = -1; ++l < t;) r = s.indexOf(e.charAt(l)), n = i % 4 ? 64 * n + r : r, i++ % 4 && (a += String.fromCharCode(255 & n >> (-2 * i & 6)));
					return a;
				},
				version: "1.0.0"
			};
			(r = function() {
				return l;
			}.call(t, n, t, e)) === void 0 || (e.exports = r);
		}();
	},
	172(e, t) {
		t.d = function(e) {
			if (!e) return 0;
			for (var t = (e = e.toString()).length, n = e.length; n--;) {
				var r = e.charCodeAt(n);
				56320 <= r && r <= 57343 && n--, 127 < r && r <= 2047 ? t++ : 2047 < r && r <= 65535 && (t += 2);
			}
			return t;
		};
	},
	526(e) {
		var t = {
			utf8: {
				stringToBytes: function(e) {
					return t.bin.stringToBytes(unescape(encodeURIComponent(e)));
				},
				bytesToString: function(e) {
					return decodeURIComponent(escape(t.bin.bytesToString(e)));
				}
			},
			bin: {
				stringToBytes: function(e) {
					for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
					return t;
				},
				bytesToString: function(e) {
					for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
					return t.join("");
				}
			}
		};
		e.exports = t;
	},
	298(e) {
		var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
			rotl: function(e, t) {
				return e << t | e >>> 32 - t;
			},
			rotr: function(e, t) {
				return e << 32 - t | e >>> t;
			},
			endian: function(e) {
				if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
				for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
				return e;
			},
			randomBytes: function(e) {
				for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
				return t;
			},
			bytesToWords: function(e) {
				for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
				return t;
			},
			wordsToBytes: function(e) {
				for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
				return t;
			},
			bytesToHex: function(e) {
				for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
				return t.join("");
			},
			hexToBytes: function(e) {
				for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
				return t;
			},
			bytesToBase64: function(e) {
				for (var n = [], r = 0; r < e.length; r += 3) for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], a = 0; a < 4; a++) 8 * r + 6 * a <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - a) & 63)) : n.push("=");
				return n.join("");
			},
			base64ToBytes: function(e) {
				e = e.replace(/[^A-Z0-9+\/]/gi, "");
				for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) i != 0 && n.push((t.indexOf(e.charAt(r - 1)) & 2 ** (-2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
				return n;
			}
		};
		e.exports = n;
	},
	135(e) {
		function t(e) {
			return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
		}
		e.exports = function(e) {
			return e != null && (t(e) || function(e) {
				return typeof e.readFloatLE == "function" && typeof e.slice == "function" && t(e.slice(0, 0));
			}(e) || !!e._isBuffer);
		};
	},
	542(e, t, n) {
		(function() {
			var t = n(298), r = n(526).utf8, i = n(135), a = n(526).bin, o = function(e, n) {
				e.constructor == String ? e = n && n.encoding === "binary" ? a.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
				for (var s = t.bytesToWords(e), c = 8 * e.length, l = 1732584193, u = -271733879, d = -1732584194, f = 271733878, p = 0; p < s.length; p++) s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
				s[c >>> 5] |= 128 << c % 32, s[14 + (c + 64 >>> 9 << 4)] = c;
				var m = o._ff, h = o._gg, g = o._hh, _ = o._ii;
				for (p = 0; p < s.length; p += 16) {
					var v = l, y = u, b = d, x = f;
					l = m(l, u, d, f, s[p + 0], 7, -680876936), f = m(f, l, u, d, s[p + 1], 12, -389564586), d = m(d, f, l, u, s[p + 2], 17, 606105819), u = m(u, d, f, l, s[p + 3], 22, -1044525330), l = m(l, u, d, f, s[p + 4], 7, -176418897), f = m(f, l, u, d, s[p + 5], 12, 1200080426), d = m(d, f, l, u, s[p + 6], 17, -1473231341), u = m(u, d, f, l, s[p + 7], 22, -45705983), l = m(l, u, d, f, s[p + 8], 7, 1770035416), f = m(f, l, u, d, s[p + 9], 12, -1958414417), d = m(d, f, l, u, s[p + 10], 17, -42063), u = m(u, d, f, l, s[p + 11], 22, -1990404162), l = m(l, u, d, f, s[p + 12], 7, 1804603682), f = m(f, l, u, d, s[p + 13], 12, -40341101), d = m(d, f, l, u, s[p + 14], 17, -1502002290), l = h(l, u = m(u, d, f, l, s[p + 15], 22, 1236535329), d, f, s[p + 1], 5, -165796510), f = h(f, l, u, d, s[p + 6], 9, -1069501632), d = h(d, f, l, u, s[p + 11], 14, 643717713), u = h(u, d, f, l, s[p + 0], 20, -373897302), l = h(l, u, d, f, s[p + 5], 5, -701558691), f = h(f, l, u, d, s[p + 10], 9, 38016083), d = h(d, f, l, u, s[p + 15], 14, -660478335), u = h(u, d, f, l, s[p + 4], 20, -405537848), l = h(l, u, d, f, s[p + 9], 5, 568446438), f = h(f, l, u, d, s[p + 14], 9, -1019803690), d = h(d, f, l, u, s[p + 3], 14, -187363961), u = h(u, d, f, l, s[p + 8], 20, 1163531501), l = h(l, u, d, f, s[p + 13], 5, -1444681467), f = h(f, l, u, d, s[p + 2], 9, -51403784), d = h(d, f, l, u, s[p + 7], 14, 1735328473), l = g(l, u = h(u, d, f, l, s[p + 12], 20, -1926607734), d, f, s[p + 5], 4, -378558), f = g(f, l, u, d, s[p + 8], 11, -2022574463), d = g(d, f, l, u, s[p + 11], 16, 1839030562), u = g(u, d, f, l, s[p + 14], 23, -35309556), l = g(l, u, d, f, s[p + 1], 4, -1530992060), f = g(f, l, u, d, s[p + 4], 11, 1272893353), d = g(d, f, l, u, s[p + 7], 16, -155497632), u = g(u, d, f, l, s[p + 10], 23, -1094730640), l = g(l, u, d, f, s[p + 13], 4, 681279174), f = g(f, l, u, d, s[p + 0], 11, -358537222), d = g(d, f, l, u, s[p + 3], 16, -722521979), u = g(u, d, f, l, s[p + 6], 23, 76029189), l = g(l, u, d, f, s[p + 9], 4, -640364487), f = g(f, l, u, d, s[p + 12], 11, -421815835), d = g(d, f, l, u, s[p + 15], 16, 530742520), l = _(l, u = g(u, d, f, l, s[p + 2], 23, -995338651), d, f, s[p + 0], 6, -198630844), f = _(f, l, u, d, s[p + 7], 10, 1126891415), d = _(d, f, l, u, s[p + 14], 15, -1416354905), u = _(u, d, f, l, s[p + 5], 21, -57434055), l = _(l, u, d, f, s[p + 12], 6, 1700485571), f = _(f, l, u, d, s[p + 3], 10, -1894986606), d = _(d, f, l, u, s[p + 10], 15, -1051523), u = _(u, d, f, l, s[p + 1], 21, -2054922799), l = _(l, u, d, f, s[p + 8], 6, 1873313359), f = _(f, l, u, d, s[p + 15], 10, -30611744), d = _(d, f, l, u, s[p + 6], 15, -1560198380), u = _(u, d, f, l, s[p + 13], 21, 1309151649), l = _(l, u, d, f, s[p + 4], 6, -145523070), f = _(f, l, u, d, s[p + 11], 10, -1120210379), d = _(d, f, l, u, s[p + 2], 15, 718787259), u = _(u, d, f, l, s[p + 9], 21, -343485551), l = l + v >>> 0, u = u + y >>> 0, d = d + b >>> 0, f = f + x >>> 0;
				}
				return t.endian([
					l,
					u,
					d,
					f
				]);
			};
			o._ff = function(e, t, n, r, i, a, o) {
				var s = e + (t & n | ~t & r) + (i >>> 0) + o;
				return (s << a | s >>> 32 - a) + t;
			}, o._gg = function(e, t, n, r, i, a, o) {
				var s = e + (t & r | n & ~r) + (i >>> 0) + o;
				return (s << a | s >>> 32 - a) + t;
			}, o._hh = function(e, t, n, r, i, a, o) {
				var s = e + (t ^ n ^ r) + (i >>> 0) + o;
				return (s << a | s >>> 32 - a) + t;
			}, o._ii = function(e, t, n, r, i, a, o) {
				var s = e + (n ^ (t | ~r)) + (i >>> 0) + o;
				return (s << a | s >>> 32 - a) + t;
			}, o._blocksize = 16, o._digestsize = 16, e.exports = function(e, n) {
				if (e == null) throw Error("Illegal argument " + e);
				var r = t.wordsToBytes(o(e, n));
				return n && n.asBytes ? r : n && n.asString ? a.bytesToString(r) : t.bytesToHex(r);
			};
		})();
	},
	285(e, t, n) {
		var r = n(2);
		e.exports = function(e, t) {
			if (!e) return [];
			var n = (t ||= {}).max == null ? 1 / 0 : t.max;
			return e.substr(0, 2) === "{}" && (e = "\\{\\}" + e.substr(2)), g(function(e) {
				return e.split("\\\\").join(i).split("\\{").join(a).split("\\}").join(o).split("\\,").join(s).split("\\.").join(c);
			}(e), n, !0).map(u);
		};
		var i = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", o = "\0CLOSE" + Math.random() + "\0", s = "\0COMMA" + Math.random() + "\0", c = "\0PERIOD" + Math.random() + "\0";
		function l(e) {
			return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
		}
		function u(e) {
			return e.split(i).join("\\").split(a).join("{").split(o).join("}").split(s).join(",").split(c).join(".");
		}
		function d(e) {
			if (!e) return [""];
			var t = [], n = r("{", "}", e);
			if (!n) return e.split(",");
			var i = n.pre, a = n.body, o = n.post, s = i.split(",");
			s[s.length - 1] += "{" + a + "}";
			var c = d(o);
			return o.length && (s[s.length - 1] += c.shift(), s.push.apply(s, c)), t.push.apply(t, s), t;
		}
		function f(e) {
			return "{" + e + "}";
		}
		function p(e) {
			return /^-?0\d/.test(e);
		}
		function m(e, t) {
			return e <= t;
		}
		function h(e, t) {
			return e >= t;
		}
		function g(e, t, n) {
			var i = [], a = r("{", "}", e);
			if (!a) return [e];
			var s = a.pre, c = a.post.length ? g(a.post, t, !1) : [""];
			if (/\$$/.test(a.pre)) for (var u = 0; u < c.length && u < t; u++) {
				var _ = s + "{" + a.body + "}" + c[u];
				i.push(_);
			}
			else {
				var v, y, b = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body), x = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body), S = b || x, ee = a.body.indexOf(",") >= 0;
				if (!S && !ee) return a.post.match(/,(?!,).*\}/) ? g(e = a.pre + "{" + a.body + o + a.post, t, !0) : [e];
				if (S) v = a.body.split(/\.\./);
				else if ((v = d(a.body)).length === 1 && (v = g(v[0], t, !1).map(f)).length === 1) return c.map((function(e) {
					return a.pre + v[0] + e;
				}));
				if (S) {
					var te = l(v[0]), C = l(v[1]), w = Math.max(v[0].length, v[1].length), ne = v.length == 3 ? Math.max(Math.abs(l(v[2])), 1) : 1, re = m;
					C < te && (ne *= -1, re = h);
					var ie = v.some(p);
					y = [];
					for (var T = te; re(T, C); T += ne) {
						var E;
						if (x) (E = String.fromCharCode(T)) === "\\" && (E = "");
						else if (E = String(T), ie) {
							var ae = w - E.length;
							if (ae > 0) {
								var D = Array(ae + 1).join("0");
								E = T < 0 ? "-" + D + E.slice(1) : D + E;
							}
						}
						y.push(E);
					}
				} else {
					y = [];
					for (var O = 0; O < v.length; O++) y.push.apply(y, g(v[O], t, !1));
				}
				for (O = 0; O < y.length; O++) for (u = 0; u < c.length && i.length < t; u++) _ = s + y[O] + c[u], (!n || S || _) && i.push(_);
			}
			return i;
		}
	},
	829(e) {
		function t(e) {
			return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
				return typeof e;
			} : function(e) {
				return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			}, t(e);
		}
		function n(e) {
			var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
			return n = function(e) {
				if (e === null || (n = e, Function.toString.call(n).indexOf("[native code]") === -1)) return e;
				var n;
				if (typeof e != "function") throw TypeError("Super expression must either be null or a function");
				if (t !== void 0) {
					if (t.has(e)) return t.get(e);
					t.set(e, o);
				}
				function o() {
					return r(e, arguments, a(this).constructor);
				}
				return o.prototype = Object.create(e.prototype, { constructor: {
					value: o,
					enumerable: !1,
					writable: !0,
					configurable: !0
				} }), i(o, e);
			}, n(e);
		}
		function r(e, t, n) {
			return r = function() {
				if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
				if (typeof Proxy == "function") return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0;
				} catch {
					return !1;
				}
			}() ? Reflect.construct : function(e, t, n) {
				var r = [null];
				r.push.apply(r, t);
				var a = new (Function.bind.apply(e, r))();
				return n && i(a, n.prototype), a;
			}, r.apply(null, arguments);
		}
		function i(e, t) {
			return i = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e;
			}, i(e, t);
		}
		function a(e) {
			return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e);
			}, a(e);
		}
		var o = function(e) {
			function n(e) {
				var r;
				return function(e, t) {
					if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
				}(this, n), (r = function(e, n) {
					return !n || t(n) !== "object" && typeof n != "function" ? function(e) {
						if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					}(e) : n;
				}(this, a(n).call(this, e))).name = "ObjectPrototypeMutationError", r;
			}
			return function(e, t) {
				if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, { constructor: {
					value: e,
					writable: !0,
					configurable: !0
				} }), t && i(e, t);
			}(n, e), n;
		}(n(Error));
		function s(e, n) {
			for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {}, i = n.split("."), a = i.length, o = function(t) {
				var n = i[t];
				if (!e) return { v: void 0 };
				if (n === "+") {
					if (Array.isArray(e)) return { v: e.map((function(n, a) {
						var o = i.slice(t + 1);
						return o.length > 0 ? s(n, o.join("."), r) : r(e, a, i, t);
					})) };
					var a = i.slice(0, t).join(".");
					throw Error(`Object at wildcard (${a}) is not an array`);
				}
				e = r(e, n, i, t);
			}, c = 0; c < a; c++) {
				var l = o(c);
				if (t(l) === "object") return l.v;
			}
			return e;
		}
		function c(e, t) {
			return e.length === t + 1;
		}
		e.exports = {
			set: function(e, n, r) {
				if (t(e) != "object" || e === null || n === void 0) return e;
				if (typeof n == "number") return e[n] = r, e[n];
				try {
					return s(e, n, (function(e, t, n, i) {
						if (e === Reflect.getPrototypeOf({})) throw new o("Attempting to mutate Object.prototype");
						if (!e[t]) {
							var a = Number.isInteger(Number(n[i + 1])), s = n[i + 1] === "+";
							e[t] = a || s ? [] : {};
						}
						return c(n, i) && (e[t] = r), e[t];
					}));
				} catch (t) {
					if (t instanceof o) throw t;
					return e;
				}
			},
			get: function(e, n) {
				if (t(e) != "object" || e === null || n === void 0) return e;
				if (typeof n == "number") return e[n];
				try {
					return s(e, n, (function(e, t) {
						return e[t];
					}));
				} catch {
					return e;
				}
			},
			has: function(e, n) {
				var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
				if (t(e) != "object" || e === null || n === void 0) return !1;
				if (typeof n == "number") return n in e;
				try {
					var i = !1;
					return s(e, n, (function(e, t, n, a) {
						if (!c(n, a)) return e && e[t];
						i = r.own ? e.hasOwnProperty(t) : t in e;
					})), i;
				} catch {
					return !1;
				}
			},
			hasOwn: function(e, t, n) {
				return this.has(e, t, n || { own: !0 });
			},
			isIn: function(e, n, r) {
				var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
				if (t(e) != "object" || e === null || n === void 0) return !1;
				try {
					var a = !1, o = !1;
					return s(e, n, (function(e, n, i, s) {
						return a = a || e === r || !!e && e[n] === r, o = c(i, s) && t(e) === "object" && n in e, e && e[n];
					})), i.validPath ? a && o : a;
				} catch {
					return !1;
				}
			},
			ObjectPrototypeMutationError: o
		};
	},
	47(e, t, n) {
		var r = n(410), i = function(e) {
			return typeof e == "string";
		};
		function a(e, t) {
			for (var n = [], r = 0; r < e.length; r++) {
				var i = e[r];
				i && i !== "." && (i === ".." ? n.length && n[n.length - 1] !== ".." ? n.pop() : t && n.push("..") : n.push(i));
			}
			return n;
		}
		var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, s = {};
		function c(e) {
			return o.exec(e).slice(1);
		}
		s.resolve = function() {
			for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
				var r = n >= 0 ? arguments[n] : process.cwd();
				if (!i(r)) throw TypeError("Arguments to path.resolve must be strings");
				r && (e = r + "/" + e, t = r.charAt(0) === "/");
			}
			return (t ? "/" : "") + (e = a(e.split("/"), !t).join("/")) || ".";
		}, s.normalize = function(e) {
			var t = s.isAbsolute(e), n = e.substr(-1) === "/";
			return (e = a(e.split("/"), !t).join("/")) || t || (e = "."), e && n && (e += "/"), (t ? "/" : "") + e;
		}, s.isAbsolute = function(e) {
			return e.charAt(0) === "/";
		}, s.join = function() {
			for (var e = "", t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				if (!i(n)) throw TypeError("Arguments to path.join must be strings");
				n && (e += e ? "/" + n : n);
			}
			return s.normalize(e);
		}, s.relative = function(e, t) {
			function n(e) {
				for (var t = 0; t < e.length && e[t] === ""; t++);
				for (var n = e.length - 1; n >= 0 && e[n] === ""; n--);
				return t > n ? [] : e.slice(t, n + 1);
			}
			e = s.resolve(e).substr(1), t = s.resolve(t).substr(1);
			for (var r = n(e.split("/")), i = n(t.split("/")), a = Math.min(r.length, i.length), o = a, c = 0; c < a; c++) if (r[c] !== i[c]) {
				o = c;
				break;
			}
			var l = [];
			for (c = o; c < r.length; c++) l.push("..");
			return (l = l.concat(i.slice(o))).join("/");
		}, s._makeLong = function(e) {
			return e;
		}, s.dirname = function(e) {
			var t = c(e), n = t[0], r = t[1];
			return n || r ? (r &&= r.substr(0, r.length - 1), n + r) : ".";
		}, s.basename = function(e, t) {
			var n = c(e)[2];
			return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
		}, s.extname = function(e) {
			return c(e)[3];
		}, s.format = function(e) {
			if (!r.isObject(e)) throw TypeError("Parameter 'pathObject' must be an object, not " + typeof e);
			if (!i(e.root || "")) throw TypeError("'pathObject.root' must be a string or undefined, not " + typeof e.root);
			return (e.dir ? e.dir + s.sep : "") + (e.base || "");
		}, s.parse = function(e) {
			if (!i(e)) throw TypeError("Parameter 'pathString' must be a string, not " + typeof e);
			var t = c(e);
			if (!t || t.length !== 4) throw TypeError("Invalid path '" + e + "'");
			return t[1] = t[1] || "", t[2] = t[2] || "", t[3] = t[3] || "", {
				root: t[0],
				dir: t[0] + t[1].slice(0, t[1].length - 1),
				base: t[2],
				ext: t[3],
				name: t[2].slice(0, t[2].length - t[3].length)
			};
		}, s.sep = "/", s.delimiter = ":", e.exports = s;
	},
	647(e, t) {
		var n = Object.prototype.hasOwnProperty;
		function r(e) {
			try {
				return decodeURIComponent(e.replace(/\+/g, " "));
			} catch {
				return null;
			}
		}
		function i(e) {
			try {
				return encodeURIComponent(e);
			} catch {
				return null;
			}
		}
		t.stringify = function(e, t) {
			t ||= "";
			var r, a, o = [];
			for (a in typeof t != "string" && (t = "?"), e) if (n.call(e, a)) {
				if ((r = e[a]) || r != null && !isNaN(r) || (r = ""), a = i(a), r = i(r), a === null || r === null) continue;
				o.push(a + "=" + r);
			}
			return o.length ? t + o.join("&") : "";
		}, t.parse = function(e) {
			for (var t, n = /([^=?#&]+)=?([^&]*)/g, i = {}; t = n.exec(e);) {
				var a = r(t[1]), o = r(t[2]);
				a === null || o === null || a in i || (i[a] = o);
			}
			return i;
		};
	},
	670(e) {
		e.exports = function(e, t) {
			if (t = t.split(":")[0], !(e = +e)) return !1;
			switch (t) {
				case "http":
				case "ws": return e !== 80;
				case "https":
				case "wss": return e !== 443;
				case "ftp": return e !== 21;
				case "gopher": return e !== 70;
				case "file": return !1;
			}
			return e !== 0;
		};
	},
	737(e, t, n) {
		var r = n(670), i = n(647), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, o = /[\n\r\t]/g, s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, c = /:\d+$/, l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, u = /^[a-zA-Z]:/;
		function d(e) {
			return (e || "").toString().replace(a, "");
		}
		var f = [
			["#", "hash"],
			["?", "query"],
			function(e, t) {
				return h(t.protocol) ? e.replace(/\\/g, "/") : e;
			},
			["/", "pathname"],
			[
				"@",
				"auth",
				1
			],
			[
				NaN,
				"host",
				void 0,
				1,
				1
			],
			[
				/:(\d*)$/,
				"port",
				void 0,
				1
			],
			[
				NaN,
				"hostname",
				void 0,
				1,
				1
			]
		], p = {
			hash: 1,
			query: 1
		};
		function m(e) {
			var t, n = (typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}).location || {}, r = {}, i = typeof (e ||= n);
			if (e.protocol === "blob:") r = new _(unescape(e.pathname), {});
			else if (i === "string") for (t in r = new _(e, {}), p) delete r[t];
			else if (i === "object") {
				for (t in e) t in p || (r[t] = e[t]);
				r.slashes === void 0 && (r.slashes = s.test(e.href));
			}
			return r;
		}
		function h(e) {
			return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
		}
		function g(e, t) {
			e = (e = d(e)).replace(o, ""), t ||= {};
			var n, r = l.exec(e), i = r[1] ? r[1].toLowerCase() : "", a = !!r[2], s = !!r[3], c = 0;
			return a ? s ? (n = r[2] + r[3] + r[4], c = r[2].length + r[3].length) : (n = r[2] + r[4], c = r[2].length) : s ? (n = r[3] + r[4], c = r[3].length) : n = r[4], i === "file:" ? c >= 2 && (n = n.slice(2)) : h(i) ? n = r[4] : i ? a && (n = n.slice(2)) : c >= 2 && h(t.protocol) && (n = r[4]), {
				protocol: i,
				slashes: a || h(i),
				slashesCount: c,
				rest: n
			};
		}
		function _(e, t, n) {
			if (e = (e = d(e)).replace(o, ""), !(this instanceof _)) return new _(e, t, n);
			var a, s, c, l, p, v, y = f.slice(), b = typeof t, x = this, S = 0;
			for (b !== "object" && b !== "string" && (n = t, t = null), n && typeof n != "function" && (n = i.parse), a = !(s = g(e || "", t = m(t))).protocol && !s.slashes, x.slashes = s.slashes || a && t.slashes, x.protocol = s.protocol || t.protocol || "", e = s.rest, (s.protocol === "file:" && (s.slashesCount !== 2 || u.test(e)) || !s.slashes && (s.protocol || s.slashesCount < 2 || !h(x.protocol))) && (y[3] = [/(.*)/, "pathname"]); S < y.length; S++) typeof (l = y[S]) == "function" ? e = l(e, x) : (c = l[0], v = l[1], c == c ? typeof c == "string" ? ~(p = c === "@" ? e.lastIndexOf(c) : e.indexOf(c)) && (typeof l[2] == "number" ? (x[v] = e.slice(0, p), e = e.slice(p + l[2])) : (x[v] = e.slice(p), e = e.slice(0, p))) : (p = c.exec(e)) && (x[v] = p[1], e = e.slice(0, p.index)) : x[v] = e, x[v] = x[v] || a && l[3] && t[v] || "", l[4] && (x[v] = x[v].toLowerCase()));
			n && (x.query = n(x.query)), a && t.slashes && x.pathname.charAt(0) !== "/" && (x.pathname !== "" || t.pathname !== "") && (x.pathname = function(e, t) {
				if (e === "") return t;
				for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, i = n[r - 1], a = !1, o = 0; r--;) n[r] === "." ? n.splice(r, 1) : n[r] === ".." ? (n.splice(r, 1), o++) : o && (r === 0 && (a = !0), n.splice(r, 1), o--);
				return a && n.unshift(""), i !== "." && i !== ".." || n.push(""), n.join("/");
			}(x.pathname, t.pathname)), x.pathname.charAt(0) !== "/" && h(x.protocol) && (x.pathname = "/" + x.pathname), r(x.port, x.protocol) || (x.host = x.hostname, x.port = ""), x.username = x.password = "", x.auth &&= (~(p = x.auth.indexOf(":")) ? (x.username = x.auth.slice(0, p), x.username = encodeURIComponent(decodeURIComponent(x.username)), x.password = x.auth.slice(p + 1), x.password = encodeURIComponent(decodeURIComponent(x.password))) : x.username = encodeURIComponent(decodeURIComponent(x.auth)), x.password ? x.username + ":" + x.password : x.username), x.origin = x.protocol !== "file:" && h(x.protocol) && x.host ? x.protocol + "//" + x.host : "null", x.href = x.toString();
		}
		_.prototype = {
			set: function(e, t, n) {
				var a = this;
				switch (e) {
					case "query":
						typeof t == "string" && t.length && (t = (n || i.parse)(t)), a[e] = t;
						break;
					case "port":
						a[e] = t, r(t, a.protocol) ? t && (a.host = a.hostname + ":" + t) : (a.host = a.hostname, a[e] = "");
						break;
					case "hostname":
						a[e] = t, a.port && (t += ":" + a.port), a.host = t;
						break;
					case "host":
						a[e] = t, c.test(t) ? (t = t.split(":"), a.port = t.pop(), a.hostname = t.join(":")) : (a.hostname = t, a.port = "");
						break;
					case "protocol":
						a.protocol = t.toLowerCase(), a.slashes = !n;
						break;
					case "pathname":
					case "hash":
						if (t) {
							var o = e === "pathname" ? "/" : "#";
							a[e] = t.charAt(0) === o ? t : o + t;
						} else a[e] = t;
						break;
					case "username":
					case "password":
						a[e] = encodeURIComponent(t);
						break;
					case "auth":
						var s = t.indexOf(":");
						~s ? (a.username = t.slice(0, s), a.username = encodeURIComponent(decodeURIComponent(a.username)), a.password = t.slice(s + 1), a.password = encodeURIComponent(decodeURIComponent(a.password))) : a.username = encodeURIComponent(decodeURIComponent(t));
				}
				for (var l = 0; l < f.length; l++) {
					var u = f[l];
					u[4] && (a[u[1]] = a[u[1]].toLowerCase());
				}
				return a.auth = a.password ? a.username + ":" + a.password : a.username, a.origin = a.protocol !== "file:" && h(a.protocol) && a.host ? a.protocol + "//" + a.host : "null", a.href = a.toString(), a;
			},
			toString: function(e) {
				e && typeof e == "function" || (e = i.stringify);
				var t, n = this, r = n.host, a = n.protocol;
				a && a.charAt(a.length - 1) !== ":" && (a += ":");
				var o = a + (n.protocol && n.slashes || h(n.protocol) ? "//" : "");
				return n.username ? (o += n.username, n.password && (o += ":" + n.password), o += "@") : n.password ? (o += ":" + n.password, o += "@") : n.protocol !== "file:" && h(n.protocol) && !r && n.pathname !== "/" && (o += "@"), (r[r.length - 1] === ":" || c.test(n.hostname) && !n.port) && (r += ":"), o += r + n.pathname, (t = typeof n.query == "object" ? e(n.query) : n.query) && (o += t.charAt(0) === "?" ? t : "?" + t), n.hash && (o += n.hash), o;
			}
		}, _.extractProtocol = g, _.location = m, _.trimLeft = d, _.qs = i, e.exports = _;
	},
	410() {},
	388() {},
	805() {},
	345() {},
	800() {}
}, Et = {};
function F(e) {
	var t = Et[e];
	if (t !== void 0) return t.exports;
	var n = Et[e] = {
		id: e,
		loaded: !1,
		exports: {}
	};
	return Tt[e].call(n.exports, n, n.exports, F), n.loaded = !0, n.exports;
}
F.n = (e) => {
	var t = e && e.__esModule ? () => e.default : () => e;
	return F.d(t, { a: t }), t;
}, F.d = (e, t) => {
	for (var n in t) F.o(t, n) && !F.o(e, n) && Object.defineProperty(e, n, {
		enumerable: !0,
		get: t[n]
	});
}, F.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), F.nmd = (e) => (e.paths = [], e.children ||= [], e);
var Dt = F(737), Ot = F.n(Dt);
function kt(e) {
	if (!At(e)) throw Error("Parameter was not an error");
}
function At(e) {
	return !!e && typeof e == "object" && (t = e, Object.prototype.toString.call(t) === "[object Error]") || e instanceof Error;
	var t;
}
var I = class e extends Error {
	constructor(e, t) {
		let { options: n, shortMessage: r } = function(e) {
			let t, n = "";
			if (e.length === 0) t = {};
			else if (At(e[0])) t = { cause: e[0] }, n = e.slice(1).join(" ") || "";
			else if (e[0] && typeof e[0] == "object") t = Object.assign({}, e[0]), n = e.slice(1).join(" ") || "";
			else {
				if (typeof e[0] != "string") throw Error("Invalid arguments passed to Layerr");
				t = {}, n = n = e.join(" ") || "";
			}
			return {
				options: t,
				shortMessage: n
			};
		}([...arguments]), i = r;
		if (n.cause && (i = `${i}: ${n.cause.message}`), super(i), this.message = i, n.name && typeof n.name == "string" ? this.name = n.name : this.name = "Layerr", n.cause && Object.defineProperty(this, "_cause", { value: n.cause }), Object.defineProperty(this, "_info", { value: {} }), n.info && typeof n.info == "object" && Object.assign(this._info, n.info), Error.captureStackTrace) {
			let e = n.constructorOpt || this.constructor;
			Error.captureStackTrace(this, e);
		}
	}
	static cause(e) {
		return kt(e), e._cause && At(e._cause) ? e._cause : null;
	}
	static fullStack(t) {
		kt(t);
		let n = e.cause(t);
		return n ? `${t.stack}\ncaused by: ${e.fullStack(n)}` : t.stack ?? "";
	}
	static info(t) {
		kt(t);
		let n = {}, r = e.cause(t);
		return r && Object.assign(n, e.info(r)), t._info && Object.assign(n, t._info), n;
	}
	toString() {
		let e = this.name || this.constructor.name || this.constructor.prototype.name;
		return this.message && (e = `${e}: ${this.message}`), e;
	}
}, jt = F(47), Mt = F.n(jt), Nt = "__PATH_SEPARATOR_POSIX__", Pt = "__PATH_SEPARATOR_WINDOWS__";
function L(e) {
	try {
		let t = e.replace(/\//g, Nt).replace(/\\\\/g, Pt);
		return encodeURIComponent(t).split(Pt).join("\\\\").split(Nt).join("/");
	} catch (e) {
		throw new I(e, "Failed encoding path");
	}
}
function Ft(e) {
	return e.startsWith("/") ? e : "/" + e;
}
function It(e) {
	let t = e;
	return t[0] !== "/" && (t = "/" + t), /^.+\/$/.test(t) && (t = t.substr(0, t.length - 1)), t;
}
function Lt(e) {
	let t = new (Ot())(e).pathname;
	return t.length <= 0 && (t = "/"), It(t);
}
function R() {
	return function() {
		return function(e) {
			var t = [];
			if (e.length === 0) return "";
			if (typeof e[0] != "string") throw TypeError("Url must be a string. Received " + e[0]);
			e[0].match(/^[^/:]+:\/*$/) && e.length > 1 && (e[0] = e.shift() + e[0]), e[0] = e[0].match(/^file:\/\/\//) ? e[0].replace(/^([^/:]+):\/*/, "$1:///") : e[0].replace(/^([^/:]+):\/*/, "$1://");
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (typeof r != "string") throw TypeError("Url must be a string. Received " + r);
				r !== "" && (n > 0 && (r = r.replace(/^[\/]+/, "")), r = n < e.length - 1 ? r.replace(/[\/]+$/, "") : r.replace(/[\/]+$/, "/"), t.push(r));
			}
			var i = t.join("/"), a = (i = i.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
			return a.shift() + (a.length > 0 ? "?" : "") + a.join("&");
		}(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
	}([...arguments].reduce(((e, t, n) => ((n === 0 || t !== "/" || t === "/" && e[e.length - 1] !== "/") && e.push(t), e)), []));
}
var Rt = F(542), zt = F.n(Rt);
function Bt(e, t) {
	let n = e.url.replace("//", ""), r = n.indexOf("/") == -1 ? "/" : n.slice(n.indexOf("/")), i = e.method ? e.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(t.qop) && "auth", o = `00000000${t.nc}`.slice(-8), s = function(e, t, n, r, i, a, o) {
		let s = o || zt()(`${t}:${n}:${r}`);
		return e && e.toLowerCase() === "md5-sess" ? zt()(`${s}:${i}:${a}`) : s;
	}(t.algorithm, t.username, t.realm, t.password, t.nonce, t.cnonce, t.ha1), c = zt()(`${i}:${r}`), l = a ? zt()(`${s}:${t.nonce}:${o}:${t.cnonce}:${a}:${c}`) : zt()(`${s}:${t.nonce}:${c}`), u = {
		username: t.username,
		realm: t.realm,
		nonce: t.nonce,
		uri: r,
		qop: a,
		response: l,
		nc: o,
		cnonce: t.cnonce,
		algorithm: t.algorithm,
		opaque: t.opaque
	}, d = [];
	for (let e in u) u[e] && (e === "qop" || e === "nc" || e === "algorithm" ? d.push(`${e}=${u[e]}`) : d.push(`${e}="${u[e]}"`));
	return `Digest ${d.join(", ")}`;
}
function Vt(e) {
	return (e.headers && e.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var Ht = F(101), Ut = F.n(Ht);
function Wt(e) {
	return Ut().decode(e);
}
function Gt(e, t) {
	var n;
	return `Basic ${n = `${e}:${t}`, Ut().encode(n)}`;
}
var Kt = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, qt = Kt.fetch.bind(Kt);
Kt.Headers, Kt.Request, Kt.Response;
var z = function(e) {
	return e.Auto = "auto", e.Digest = "digest", e.None = "none", e.Password = "password", e.Token = "token", e;
}({}), Jt = function(e) {
	return e.DataTypeNoLength = "data-type-no-length", e.InvalidAuthType = "invalid-auth-type", e.InvalidOutputFormat = "invalid-output-format", e.LinkUnsupportedAuthType = "link-unsupported-auth", e.InvalidUpdateRange = "invalid-update-range", e.NotSupported = "not-supported", e;
}({});
function Yt(e, t, n, r, i) {
	switch (e.authType) {
		case z.Auto:
			t && n && (e.headers.Authorization = Gt(t, n));
			break;
		case z.Digest:
			e.digest = function(e, t, n) {
				return {
					username: e,
					password: t,
					ha1: n,
					nc: 0,
					algorithm: "md5",
					hasDigestAuth: !1
				};
			}(t, n, i);
			break;
		case z.None: break;
		case z.Password:
			e.headers.Authorization = Gt(t, n);
			break;
		case z.Token:
			e.headers.Authorization = `${(a = r).token_type} ${a.access_token}`;
			break;
		default: throw new I({ info: { code: Jt.InvalidAuthType } }, `Invalid auth type: ${e.authType}`);
	}
	var a;
}
F(345), F(800);
var Xt = "@@HOTPATCHER", Zt = () => {};
function Qt(e) {
	return {
		original: e,
		methods: [e],
		final: !1
	};
}
var $t = class {
	constructor() {
		this._configuration = {
			registry: {},
			getEmptyAction: "null"
		}, this.__type__ = Xt;
	}
	get configuration() {
		return this._configuration;
	}
	get getEmptyAction() {
		return this.configuration.getEmptyAction;
	}
	set getEmptyAction(e) {
		this.configuration.getEmptyAction = e;
	}
	control(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		if (!e || e.__type__ !== Xt) throw Error("Failed taking control of target HotPatcher instance: Invalid type or object");
		return Object.keys(e.configuration.registry).forEach(((n) => {
			this.configuration.registry.hasOwnProperty(n) ? t && (this.configuration.registry[n] = Object.assign({}, e.configuration.registry[n])) : this.configuration.registry[n] = Object.assign({}, e.configuration.registry[n]);
		})), e._configuration = this.configuration, this;
	}
	execute(e) {
		return (this.get(e) || Zt)(...[...arguments].slice(1));
	}
	get(e) {
		let t = this.configuration.registry[e];
		if (!t) switch (this.getEmptyAction) {
			case "null": return null;
			case "throw": throw Error(`Failed handling method request: No method provided for override: ${e}`);
			default: throw Error(`Failed handling request which resulted in an empty method: Invalid empty-action specified: ${this.getEmptyAction}`);
		}
		return function() {
			var e = [...arguments];
			if (e.length === 0) throw Error("Failed creating sequence: No functions provided");
			return function() {
				let t = [...arguments], n = this;
				for (; e.length > 0;) t = [e.shift().apply(n, t)];
				return t[0];
			};
		}(...t.methods);
	}
	isPatched(e) {
		return !!this.configuration.registry[e];
	}
	patch(e, t) {
		let { chain: n = !1 } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		if (this.configuration.registry[e] && this.configuration.registry[e].final) throw Error(`Failed patching '${e}': Method marked as being final`);
		if (typeof t != "function") throw Error(`Failed patching '${e}': Provided method is not a function`);
		if (n) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(t) : this.configuration.registry[e] = Qt(t);
		else if (this.isPatched(e)) {
			let { original: n } = this.configuration.registry[e];
			this.configuration.registry[e] = Object.assign(Qt(t), { original: n });
		} else this.configuration.registry[e] = Qt(t);
		return this;
	}
	patchInline(e, t) {
		this.isPatched(e) || this.patch(e, t);
		var n = [...arguments].slice(2);
		return this.execute(e, ...n);
	}
	plugin(e) {
		return [...arguments].slice(1).forEach(((t) => {
			this.patch(e, t, { chain: !0 });
		})), this;
	}
	restore(e) {
		if (!this.isPatched(e)) throw Error(`Failed restoring method: No method present for key: ${e}`);
		if (typeof this.configuration.registry[e].original != "function") throw Error(`Failed restoring method: Original method not found or of invalid type for key: ${e}`);
		return this.configuration.registry[e].methods = [this.configuration.registry[e].original], this;
	}
	setFinal(e) {
		if (!this.configuration.registry.hasOwnProperty(e)) throw Error(`Failed marking '${e}' as final: No method found for key`);
		return this.configuration.registry[e].final = !0, this;
	}
}, en = null;
function tn() {
	return en ||= new $t(), en;
}
function nn(e) {
	return function(e) {
		if (typeof e != "object" || !e || Object.prototype.toString.call(e) != "[object Object]") return !1;
		if (Object.getPrototypeOf(e) === null) return !0;
		let t = e;
		for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
		return Object.getPrototypeOf(e) === t;
	}(e) ? Object.assign({}, e) : Object.setPrototypeOf(Object.assign({}, e), Object.getPrototypeOf(e));
}
function rn() {
	var e = [...arguments];
	let t = null, n = [...e];
	for (; n.length > 0;) {
		let e = n.shift();
		t = t ? an(t, e) : nn(e);
	}
	return t;
}
function an(e, t) {
	let n = nn(e);
	return Object.keys(t).forEach(((e) => {
		n.hasOwnProperty(e) ? Array.isArray(t[e]) ? n[e] = Array.isArray(n[e]) ? [...n[e], ...t[e]] : [...t[e]] : typeof t[e] == "object" && t[e] ? n[e] = typeof n[e] == "object" && n[e] ? an(n[e], t[e]) : nn(t[e]) : n[e] = t[e] : n[e] = t[e];
	})), n;
}
function on(e) {
	let t = {};
	for (let n of e.keys()) t[n] = e.get(n);
	return t;
}
function sn() {
	var e = [...arguments];
	if (e.length === 0) return {};
	let t = {};
	return e.reduce(((e, n) => (Object.keys(n).forEach(((r) => {
		let i = r.toLowerCase();
		t.hasOwnProperty(i) ? e[t[i]] = n[r] : (t[i] = r, e[r] = n[r]);
	})), e)), {});
}
F(805);
var cn = typeof ArrayBuffer == "function", { toString: ln } = Object.prototype;
function un(e) {
	return cn && (e instanceof ArrayBuffer || ln.call(e) === "[object ArrayBuffer]");
}
function dn(e) {
	return e != null && e.constructor != null && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function fn(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
function pn(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var mn = fn((function(e) {
	let t = e._digest;
	return delete e._digest, t.hasDigestAuth && (e = rn(e, { headers: { Authorization: Bt(e, t) } })), pn(gn(e), (function(n) {
		let r = !1;
		return i = function(e) {
			return r ? e : n;
		}, (a = function() {
			if (n.status == 401) return t.hasDigestAuth = function(e, t) {
				if (!Vt(e)) return !1;
				let n = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
				for (;;) {
					let r = e.headers && e.headers.get("www-authenticate") || "", i = n.exec(r);
					if (!i) break;
					t[i[1]] = i[2] || i[3];
				}
				return t.nc += 1, t.cnonce = function() {
					let e = "";
					for (let t = 0; t < 32; ++t) e = `${e}${"abcdef0123456789"[Math.floor(16 * Math.random())]}`;
					return e;
				}(), !0;
			}(n, t), function() {
				if (t.hasDigestAuth) return pn(gn(e = rn(e, { headers: { Authorization: Bt(e, t) } })), (function(e) {
					return e.status == 401 ? t.hasDigestAuth = !1 : t.nc++, r = !0, e;
				}));
			}();
			t.nc++;
		}()) && a.then ? a.then(i) : i(a);
		var i, a;
	}));
})), hn = fn((function(e, t) {
	return pn(gn(e), (function(n) {
		return n.ok ? (t.authType = z.Password, n) : n.status == 401 && Vt(n) ? (t.authType = z.Digest, Yt(t, t.username, t.password, void 0, void 0), e._digest = t.digest, mn(e)) : n;
	}));
})), B = fn((function(e, t) {
	return t.authType === z.Auto ? hn(e, t) : e._digest ? mn(e) : gn(e);
}));
function V(e, t, n) {
	let r = nn(e);
	return r.headers = sn(t.headers, r.headers || {}, n.headers || {}), n.data !== void 0 && (r.data = n.data), n.signal && (r.signal = n.signal), t.httpAgent && (r.httpAgent = t.httpAgent), t.httpsAgent && (r.httpsAgent = t.httpsAgent), t.digest && (r._digest = t.digest), typeof t.withCredentials == "boolean" && (r.withCredentials = t.withCredentials), r;
}
function gn(e) {
	let t = tn();
	return t.patchInline("request", ((e) => t.patchInline("fetch", qt, e.url, function(e) {
		let t = {}, n = { method: e.method };
		if (e.headers && (t = sn(t, e.headers)), e.data !== void 0) {
			let [r, i] = function(e) {
				if (typeof e == "string" || dn(e) || un(e)) return [e, {}];
				if (e && typeof e == "object") return [JSON.stringify(e), { "content-type": "application/json" }];
				throw Error("Unable to convert request body: Unexpected body type: " + typeof e);
			}(e.data);
			n.body = r, t = sn(t, i);
		}
		return e.signal && (n.signal = e.signal), e.withCredentials && (n.credentials = "include"), n.headers = t, n;
	}(e))), e);
}
var _n = F(285), vn = (e) => {
	if (typeof e != "string") throw TypeError("invalid pattern");
	if (e.length > 65536) throw TypeError("pattern is too long");
}, yn = {
	"[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0],
	"[:alpha:]": ["\\p{L}\\p{Nl}", !0],
	"[:ascii:]": ["\\x00-\\x7f", !1],
	"[:blank:]": ["\\p{Zs}\\t", !0],
	"[:cntrl:]": ["\\p{Cc}", !0],
	"[:digit:]": ["\\p{Nd}", !0],
	"[:graph:]": [
		"\\p{Z}\\p{C}",
		!0,
		!0
	],
	"[:lower:]": ["\\p{Ll}", !0],
	"[:print:]": ["\\p{C}", !0],
	"[:punct:]": ["\\p{P}", !0],
	"[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0],
	"[:upper:]": ["\\p{Lu}", !0],
	"[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0],
	"[:xdigit:]": ["A-Fa-f0-9", !1]
}, bn = (e) => e.replace(/[[\]\\-]/g, "\\$&"), xn = (e) => e.join(""), Sn = (e, t) => {
	let n = t;
	if (e.charAt(n) !== "[") throw Error("not in a brace expression");
	let r = [], i = [], a = n + 1, o = !1, s = !1, c = !1, l = !1, u = n, d = "";
	t: for (; a < e.length;) {
		let t = e.charAt(a);
		if (t !== "!" && t !== "^" || a !== n + 1) {
			if (t === "]" && o && !c) {
				u = a + 1;
				break;
			}
			if (o = !0, t !== "\\" || c) {
				if (t === "[" && !c) {
					for (let [t, [o, c, l]] of Object.entries(yn)) if (e.startsWith(t, a)) {
						if (d) return [
							"$.",
							!1,
							e.length - n,
							!0
						];
						a += t.length, l ? i.push(o) : r.push(o), s ||= c;
						continue t;
					}
				}
				c = !1, d ? (t > d ? r.push(bn(d) + "-" + bn(t)) : t === d && r.push(bn(t)), d = "", a++) : e.startsWith("-]", a + 1) ? (r.push(bn(t + "-")), a += 2) : e.startsWith("-", a + 1) ? (d = t, a += 2) : (r.push(bn(t)), a++);
			} else c = !0, a++;
		} else l = !0, a++;
	}
	if (u < a) return [
		"",
		!1,
		0,
		!1
	];
	if (!r.length && !i.length) return [
		"$.",
		!1,
		e.length - n,
		!0
	];
	if (i.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !l) return [
		(f = r[0].length === 2 ? r[0].slice(-1) : r[0], f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")),
		!1,
		u - n,
		!1
	];
	var f;
	let p = "[" + (l ? "^" : "") + xn(r) + "]", m = "[" + (l ? "" : "^") + xn(i) + "]";
	return [
		r.length && i.length ? "(" + p + "|" + m + ")" : r.length ? p : m,
		s,
		u - n,
		!0
	];
}, Cn = function(e) {
	let { windowsPathsNoEscape: t = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return t ? e.replace(/\[([^\/\\])\]/g, "$1") : e.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, H, wn = /* @__PURE__ */ new Set([
	"!",
	"?",
	"+",
	"*",
	"@"
]), Tn = (e) => wn.has(e), En = (e) => Tn(e.type), Dn = /* @__PURE__ */ new Map([
	["!", ["@"]],
	["?", ["?", "@"]],
	["@", ["@"]],
	["*", [
		"*",
		"+",
		"?",
		"@"
	]],
	["+", ["+", "@"]]
]), On = /* @__PURE__ */ new Map([
	["!", ["?"]],
	["@", ["?"]],
	["+", ["?", "*"]]
]), kn = /* @__PURE__ */ new Map([
	["!", ["?", "@"]],
	["?", ["?", "@"]],
	["@", ["?", "@"]],
	["*", [
		"*",
		"+",
		"?",
		"@"
	]],
	["+", [
		"+",
		"@",
		"?",
		"*"
	]]
]), An = /* @__PURE__ */ new Map([
	["!", /* @__PURE__ */ new Map([["!", "@"]])],
	["?", /* @__PURE__ */ new Map([["*", "*"], ["+", "*"]])],
	["@", /* @__PURE__ */ new Map([
		["!", "!"],
		["?", "?"],
		["@", "@"],
		["*", "*"],
		["+", "+"]
	])],
	["+", /* @__PURE__ */ new Map([["?", "*"], ["*", "*"]])]
]), jn = "(?!\\.)", Mn = /* @__PURE__ */ new Set(["[", "."]), Nn = /* @__PURE__ */ new Set(["..", "."]), Pn = /* @__PURE__ */ new Set("().*{}+?[]^$\\!"), Fn = "[^/]", In = "[^/]*?", Ln = "[^/]+?", Rn = class {
	type;
	#e;
	#t;
	#n = !1;
	#r = [];
	#i;
	#a;
	#o;
	#s = !1;
	#c;
	#l;
	#u = !1;
	constructor(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		this.type = e, e && (this.#t = !0), this.#i = t, this.#e = this.#i ? this.#i.#e : this, this.#c = this.#e === this ? n : this.#e.#c, this.#o = this.#e === this ? [] : this.#e.#o, e !== "!" || this.#e.#s || this.#o.push(this), this.#a = this.#i ? this.#i.#r.length : 0;
	}
	get hasMagic() {
		if (this.#t !== void 0) return this.#t;
		for (let e of this.#r) if (typeof e != "string" && (e.type || e.hasMagic)) return this.#t = !0;
		return this.#t;
	}
	toString() {
		return this.#l === void 0 ? this.#l = this.type ? this.type + "(" + this.#r.map(((e) => String(e))).join("|") + ")" : this.#r.map(((e) => String(e))).join("") : this.#l;
	}
	#d() {
		if (this !== this.#e) throw Error("should only call on root");
		if (this.#s) return this;
		let e;
		for (this.toString(), this.#s = !0; e = this.#o.pop();) {
			if (e.type !== "!") continue;
			let t = e, n = t.#i;
			for (; n;) {
				for (let r = t.#a + 1; !n.type && r < n.#r.length; r++) for (let t of e.#r) {
					if (typeof t == "string") throw Error("string part in extglob AST??");
					t.copyIn(n.#r[r]);
				}
				t = n, n = t.#i;
			}
		}
		return this;
	}
	push() {
		var e = [...arguments];
		for (let t of e) if (t !== "") {
			if (typeof t != "string" && !(t instanceof H && t.#i === this)) throw Error("invalid part: " + t);
			this.#r.push(t);
		}
	}
	toJSON() {
		let e = this.type === null ? this.#r.slice().map(((e) => typeof e == "string" ? e : e.toJSON())) : [this.type, ...this.#r.map(((e) => e.toJSON()))];
		return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === this.#e || this.#e.#s && this.#i?.type === "!") && e.push({}), e;
	}
	isStart() {
		if (this.#e === this) return !0;
		if (!this.#i?.isStart()) return !1;
		if (this.#a === 0) return !0;
		let e = this.#i;
		for (let t = 0; t < this.#a; t++) {
			let n = e.#r[t];
			if (!(n instanceof H && n.type === "!")) return !1;
		}
		return !0;
	}
	isEnd() {
		if (this.#e === this || this.#i?.type === "!") return !0;
		if (!this.#i?.isEnd()) return !1;
		if (!this.type) return this.#i?.isEnd();
		let e = this.#i ? this.#i.#r.length : 0;
		return this.#a === e - 1;
	}
	copyIn(e) {
		typeof e == "string" ? this.push(e) : this.push(e.clone(this));
	}
	clone(e) {
		let t = new H(this.type, e);
		for (let e of this.#r) t.copyIn(e);
		return t;
	}
	static #f(e, t, n, r, i) {
		let a = r.maxExtglobRecursion ?? 2, o = !1, s = !1, c = -1, l = !1;
		if (t.type === null) {
			let u = n, d = "";
			for (; u < e.length;) {
				let n = e.charAt(u++);
				if (o || n === "\\") o = !o, d += n;
				else if (s) u === c + 1 ? n !== "^" && n !== "!" || (l = !0) : n !== "]" || u === c + 2 && l || (s = !1), d += n;
				else if (n !== "[") {
					if (!r.noext && Tn(n) && e.charAt(u) === "(" && i <= a) {
						t.push(d), d = "";
						let a = new H(n, t);
						u = H.#f(e, a, u, r, i + 1), t.push(a);
					} else d += n;
				} else s = !0, c = u, l = !1, d += n;
			}
			return t.push(d), u;
		}
		let u = n + 1, d = new H(null, t), f = [], p = "";
		for (; u < e.length;) {
			let n = e.charAt(u++);
			if (o || n === "\\") o = !o, p += n;
			else if (s) u === c + 1 ? n !== "^" && n !== "!" || (l = !0) : n !== "]" || u === c + 2 && l || (s = !1), p += n;
			else if (n !== "[") {
				if (Tn(n) && e.charAt(u) === "(" && (i <= a || t && t.#h(n))) {
					let a = t && t.#h(n) ? 0 : 1;
					d.push(p), p = "";
					let o = new H(n, d);
					d.push(o), u = H.#f(e, o, u, r, i + a);
				} else if (n !== "|") {
					if (n === ")") return p === "" && t.#r.length === 0 && (t.#u = !0), d.push(p), p = "", t.push(...f, d), u;
					p += n;
				} else d.push(p), p = "", f.push(d), d = new H(null, t);
			} else s = !0, c = u, l = !1, p += n;
		}
		return t.type = null, t.#t = void 0, t.#r = [e.substring(n - 1)], u;
	}
	#p(e) {
		return this.#m(e, On);
	}
	#m(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dn;
		if (!e || typeof e != "object" || e.type !== null || e.#r.length !== 1 || this.type === null) return !1;
		let n = e.#r[0];
		return !(!n || typeof n != "object" || n.type === null) && this.#h(n.type, t);
	}
	#h(e) {
		return !!(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn).get(this.type)?.includes(e);
	}
	#g(e, t) {
		let n = e.#r[0], r = new H(null, n, this.options);
		r.#r.push(""), n.push(r), this.#_(e, t);
	}
	#_(e, t) {
		let n = e.#r[0];
		this.#r.splice(t, 1, ...n.#r);
		for (let e of n.#r) typeof e == "object" && (e.#i = this);
		this.#l = void 0;
	}
	#v(e) {
		return !!An.get(this.type)?.has(e);
	}
	#y(e) {
		if (!e || typeof e != "object" || e.type !== null || e.#r.length !== 1 || this.type === null || this.#r.length !== 1) return !1;
		let t = e.#r[0];
		return !(!t || typeof t != "object" || t.type === null) && this.#v(t.type);
	}
	#b(e) {
		let t = An.get(this.type), n = e.#r[0], r = t?.get(n.type);
		if (!r) return !1;
		this.#r = n.#r;
		for (let e of this.#r) typeof e == "object" && (e.#i = this);
		this.type = r, this.#l = void 0, this.#u = !1;
	}
	#x() {
		if (En(this)) {
			let e = 0, t = !1;
			do {
				t = !0;
				for (let e = 0; e < this.#r.length; e++) {
					let n = this.#r[e];
					typeof n == "object" && (n.#x(), this.#m(n) ? (t = !1, this.#_(n, e)) : this.#p(n) ? (t = !1, this.#g(n, e)) : this.#y(n) && (t = !1, this.#b(n)));
				}
			} while (!t && ++e < 10);
		} else for (let e of this.#r) typeof e == "object" && e.#x();
		this.#l = void 0;
	}
	static fromGlob(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = new H(null, void 0, t);
		return H.#f(e, n, 0, t, 0), n;
	}
	toMMPattern() {
		if (this !== this.#e) return this.#e.toMMPattern();
		let e = this.toString(), [t, n, r, i] = this.toRegExpSource();
		if (!(r || this.#t || this.#c.nocase && !this.#c.nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return n;
		let a = (this.#c.nocase ? "i" : "") + (i ? "u" : "");
		return Object.assign(RegExp(`^${t}$`, a), {
			_src: t,
			_glob: e
		});
	}
	get options() {
		return this.#c;
	}
	toRegExpSource(e) {
		let t = e ?? !!this.#c.dot;
		if (this.#e === this && (this.#x(), this.#d()), !En(this)) {
			let n = this.isStart() && this.isEnd(), r = this.#r.map(((t) => {
				let [r, i, a, o] = typeof t == "string" ? H.#C(t, this.#t, n) : t.toRegExpSource(e);
				return this.#t = this.#t || a, this.#n = this.#n || o, r;
			})).join(""), i = "";
			if (this.isStart() && typeof this.#r[0] == "string" && (this.#r.length !== 1 || !Nn.has(this.#r[0]))) {
				let n = Mn, a = t && n.has(r.charAt(0)) || r.startsWith("\\.") && n.has(r.charAt(2)) || r.startsWith("\\.\\.") && n.has(r.charAt(4)), o = !t && !e && n.has(r.charAt(0));
				i = a ? "(?!(?:^|/)\\.\\.?(?:$|/))" : o ? jn : "";
			}
			let a = "";
			return this.isEnd() && this.#e.#s && this.#i?.type === "!" && (a = "(?:$|\\/)"), [
				i + r + a,
				Cn(r),
				this.#t = !!this.#t,
				this.#n
			];
		}
		let n = this.type === "*" || this.type === "+", r = this.type === "!" ? "(?:(?!(?:" : "(?:", i = this.#S(t);
		if (this.isStart() && this.isEnd() && !i && this.type !== "!") {
			let e = this.toString(), t = this;
			return t.#r = [e], t.type = null, t.#t = void 0, [
				e,
				Cn(this.toString()),
				!1,
				!1
			];
		}
		let a = !n || e || t ? "" : this.#S(!0);
		a === i && (a = ""), a && (i = `(?:${i})(?:${a})*?`);
		let o = "";
		return o = this.type === "!" && this.#u ? (this.isStart() && !t ? jn : "") + Ln : r + i + (this.type === "!" ? "))" + (!this.isStart() || t || e ? "" : jn) + "[^/]*?)" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && a ? ")" : this.type === "*" && a ? ")?" : `)${this.type}`), [
			o,
			Cn(i),
			this.#t = !!this.#t,
			this.#n
		];
	}
	#S(e) {
		return this.#r.map(((t) => {
			if (typeof t == "string") throw Error("string type in extglob ast??");
			let [n, r, i, a] = t.toRegExpSource(e);
			return this.#n = this.#n || a, n;
		})).filter(((e) => !(this.isStart() && this.isEnd() && !e))).join("|");
	}
	static #C(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = !1, i = "", a = !1, o = !1;
		for (let s = 0; s < e.length; s++) {
			let c = e.charAt(s);
			if (r) r = !1, i += (Pn.has(c) ? "\\" : "") + c, o = !1;
			else if (c !== "\\") {
				if (c === "[") {
					let [n, r, c, l] = Sn(e, s);
					if (c) {
						i += n, a ||= r, s += c - 1, t ||= l, o = !1;
						continue;
					}
				}
				if (c !== "*") o = !1, c === "?" ? (i += Fn, t = !0) : i += c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
				else {
					if (o) continue;
					o = !0, i += n && /^[*]+$/.test(e) ? Ln : In, t = !0;
				}
			} else s === e.length - 1 ? i += "\\\\" : r = !0;
		}
		return [
			i,
			Cn(e),
			!!t,
			a
		];
	}
};
H = Rn;
var U = function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return vn(t), !(!n.nocomment && t.charAt(0) === "#") && new cr(t, n).match(e);
}, zn = /^\*+([^+@!?\*\[\(]*)$/, Bn = (e) => (t) => !t.startsWith(".") && t.endsWith(e), Vn = (e) => (t) => t.endsWith(e), Hn = (e) => (e = e.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(e)), Un = (e) => (e = e.toLowerCase(), (t) => t.toLowerCase().endsWith(e)), Wn = /^\*+\.\*+$/, Gn = (e) => !e.startsWith(".") && e.includes("."), Kn = (e) => e !== "." && e !== ".." && e.includes("."), qn = /^\.\*+$/, Jn = (e) => e !== "." && e !== ".." && e.startsWith("."), Yn = /^\*+$/, Xn = (e) => e.length !== 0 && !e.startsWith("."), Zn = (e) => e.length !== 0 && e !== "." && e !== "..", Qn = /^\?+([^+@!?\*\[\(]*)?$/, $n = (e) => {
	let [t, n = ""] = e, r = rr([t]);
	return n ? (n = n.toLowerCase(), (e) => r(e) && e.toLowerCase().endsWith(n)) : r;
}, er = (e) => {
	let [t, n = ""] = e, r = ir([t]);
	return n ? (n = n.toLowerCase(), (e) => r(e) && e.toLowerCase().endsWith(n)) : r;
}, tr = (e) => {
	let [t, n = ""] = e, r = ir([t]);
	return n ? (e) => r(e) && e.endsWith(n) : r;
}, nr = (e) => {
	let [t, n = ""] = e, r = rr([t]);
	return n ? (e) => r(e) && e.endsWith(n) : r;
}, rr = (e) => {
	let [t] = e, n = t.length;
	return (e) => e.length === n && !e.startsWith(".");
}, ir = (e) => {
	let [t] = e, n = t.length;
	return (e) => e.length === n && e !== "." && e !== "..";
}, ar = typeof process == "object" && process ? {}.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
U.sep = ar === "win32" ? "\\" : "/";
var W = Symbol("globstar **");
U.GLOBSTAR = W, U.filter = function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return (n) => U(n, e, t);
};
var G = function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return Object.assign({}, e, t);
};
U.defaults = (e) => {
	if (!e || typeof e != "object" || !Object.keys(e).length) return U;
	let t = U;
	return Object.assign((function(n, r) {
		return t(n, r, G(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
	}), {
		Minimatch: class extends t.Minimatch {
			constructor(t) {
				super(t, G(e, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
			}
			static defaults(n) {
				return t.defaults(G(e, n)).Minimatch;
			}
		},
		AST: class extends t.AST {
			constructor(t, n) {
				super(t, n, G(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
			}
			static fromGlob(n) {
				let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				return t.AST.fromGlob(n, G(e, r));
			}
		},
		unescape: function(n) {
			let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return t.unescape(n, G(e, r));
		},
		escape: function(n) {
			let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return t.escape(n, G(e, r));
		},
		filter: function(n) {
			let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return t.filter(n, G(e, r));
		},
		defaults: (n) => t.defaults(G(e, n)),
		makeRe: function(n) {
			let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return t.makeRe(n, G(e, r));
		},
		braceExpand: function(n) {
			let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return t.braceExpand(n, G(e, r));
		},
		match: function(n, r) {
			let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
			return t.match(n, r, G(e, i));
		},
		sep: t.sep,
		GLOBSTAR: W
	});
};
var or = function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return vn(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : _n(e);
};
U.braceExpand = or, U.makeRe = function(e) {
	return new cr(e, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, U.match = function(e, t) {
	let n = new cr(t, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
	return e = e.filter(((e) => n.match(e))), n.options.nonull && !e.length && e.push(t), e;
};
var sr = /[?*]|[+@!]\(.*?\)|\[|\]/, cr = class {
	options;
	set;
	pattern;
	windowsPathsNoEscape;
	nonegate;
	negate;
	comment;
	empty;
	preserveMultipleSlashes;
	partial;
	globSet;
	globParts;
	nocase;
	isWindows;
	platform;
	windowsNoMagicRoot;
	maxGlobstarRecursion;
	regexp;
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		vn(e), t ||= {}, this.options = t, this.maxGlobstarRecursion = t.maxGlobstarRecursion ?? 200, this.pattern = e, this.platform = t.platform || ar, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!t.windowsPathsNoEscape || !1 === t.allowWindowsEscape, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!t.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!t.nonegate, this.comment = !1, this.empty = !1, this.partial = !!t.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = t.windowsNoMagicRoot === void 0 ? !(!this.isWindows || !this.nocase) : t.windowsNoMagicRoot, this.globSet = [], this.globParts = [], this.set = [], this.make();
	}
	hasMagic() {
		if (this.options.magicalBraces && this.set.length > 1) return !0;
		for (let e of this.set) for (let t of e) if (typeof t != "string") return !0;
		return !1;
	}
	debug() {}
	make() {
		let e = this.pattern, t = this.options;
		if (!t.nocomment && e.charAt(0) === "#") return void (this.comment = !0);
		if (!e) return void (this.empty = !0);
		this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], t.debug && (this.debug = function() {
			return console.error(...arguments);
		}), this.debug(this.pattern, this.globSet);
		let n = this.globSet.map(((e) => this.slashSplit(e)));
		this.globParts = this.preprocess(n), this.debug(this.pattern, this.globParts);
		let r = this.globParts.map(((e, t, n) => {
			if (this.isWindows && this.windowsNoMagicRoot) {
				let t = !(e[0] !== "" || e[1] !== "" || e[2] !== "?" && sr.test(e[2]) || sr.test(e[3])), n = /^[a-z]:/i.test(e[0]);
				if (t) return [...e.slice(0, 4), ...e.slice(4).map(((e) => this.parse(e)))];
				if (n) return [e[0], ...e.slice(1).map(((e) => this.parse(e)))];
			}
			return e.map(((e) => this.parse(e)));
		}));
		if (this.debug(this.pattern, r), this.set = r.filter(((e) => e.indexOf(!1) === -1)), this.isWindows) for (let e = 0; e < this.set.length; e++) {
			let t = this.set[e];
			t[0] === "" && t[1] === "" && this.globParts[e][2] === "?" && typeof t[3] == "string" && /^[a-z]:$/i.test(t[3]) && (t[2] = "?");
		}
		this.debug(this.pattern, this.set);
	}
	preprocess(e) {
		if (this.options.noglobstar) for (let t = 0; t < e.length; t++) for (let n = 0; n < e[t].length; n++) e[t][n] === "**" && (e[t][n] = "*");
		let { optimizationLevel: t = 1 } = this.options;
		return t >= 2 ? (e = this.firstPhasePreProcess(e), e = this.secondPhasePreProcess(e)) : e = t >= 1 ? this.levelOneOptimize(e) : this.adjascentGlobstarOptimize(e), e;
	}
	adjascentGlobstarOptimize(e) {
		return e.map(((e) => {
			let t = -1;
			for (; (t = e.indexOf("**", t + 1)) !== -1;) {
				let n = t;
				for (; e[n + 1] === "**";) n++;
				n !== t && e.splice(t, n - t);
			}
			return e;
		}));
	}
	levelOneOptimize(e) {
		return e.map(((e) => (e = e.reduce(((e, t) => {
			let n = e[e.length - 1];
			return t === "**" && n === "**" ? e : t === ".." && n && n !== ".." && n !== "." && n !== "**" ? (e.pop(), e) : (e.push(t), e);
		}), [])).length === 0 ? [""] : e));
	}
	levelTwoFileOptimize(e) {
		Array.isArray(e) || (e = this.slashSplit(e));
		let t = !1;
		do {
			if (t = !1, !this.preserveMultipleSlashes) {
				for (let n = 1; n < e.length - 1; n++) {
					let r = e[n];
					n === 1 && r === "" && e[0] === "" || r !== "." && r !== "" || (t = !0, e.splice(n, 1), n--);
				}
				e[0] !== "." || e.length !== 2 || e[1] !== "." && e[1] !== "" || (t = !0, e.pop());
			}
			let n = 0;
			for (; (n = e.indexOf("..", n + 1)) !== -1;) {
				let r = e[n - 1];
				r && r !== "." && r !== ".." && r !== "**" && (t = !0, e.splice(n - 1, 2), n -= 2);
			}
		} while (t);
		return e.length === 0 ? [""] : e;
	}
	firstPhasePreProcess(e) {
		let t = !1;
		do {
			t = !1;
			for (let n of e) {
				let r = -1;
				for (; (r = n.indexOf("**", r + 1)) !== -1;) {
					let i = r;
					for (; n[i + 1] === "**";) i++;
					i > r && n.splice(r + 1, i - r);
					let a = n[r + 1], o = n[r + 2], s = n[r + 3];
					if (a !== ".." || !o || o === "." || o === ".." || !s || s === "." || s === "..") continue;
					t = !0, n.splice(r, 1);
					let c = n.slice(0);
					c[r] = "**", e.push(c), r--;
				}
				if (!this.preserveMultipleSlashes) {
					for (let e = 1; e < n.length - 1; e++) {
						let r = n[e];
						e === 1 && r === "" && n[0] === "" || r !== "." && r !== "" || (t = !0, n.splice(e, 1), e--);
					}
					n[0] !== "." || n.length !== 2 || n[1] !== "." && n[1] !== "" || (t = !0, n.pop());
				}
				let i = 0;
				for (; (i = n.indexOf("..", i + 1)) !== -1;) {
					let e = n[i - 1];
					if (e && e !== "." && e !== ".." && e !== "**") {
						t = !0;
						let e = i === 1 && n[i + 1] === "**" ? ["."] : [];
						n.splice(i - 1, 2, ...e), n.length === 0 && n.push(""), i -= 2;
					}
				}
			}
		} while (t);
		return e;
	}
	secondPhasePreProcess(e) {
		for (let t = 0; t < e.length - 1; t++) for (let n = t + 1; n < e.length; n++) {
			let r = this.partsMatch(e[t], e[n], !this.preserveMultipleSlashes);
			if (r) {
				e[t] = [], e[n] = r;
				break;
			}
		}
		return e.filter(((e) => e.length));
	}
	partsMatch(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = 0, i = 0, a = [], o = "";
		for (; r < e.length && i < t.length;) if (e[r] === t[i]) a.push(o === "b" ? t[i] : e[r]), r++, i++;
		else if (n && e[r] === "**" && t[i] === e[r + 1]) a.push(e[r]), r++;
		else if (n && t[i] === "**" && e[r] === t[i + 1]) a.push(t[i]), i++;
		else if (e[r] !== "*" || !t[i] || !this.options.dot && t[i].startsWith(".") || t[i] === "**") {
			if (t[i] !== "*" || !e[r] || !this.options.dot && e[r].startsWith(".") || e[r] === "**" || o === "a") return !1;
			o = "b", a.push(t[i]), r++, i++;
		} else {
			if (o === "b") return !1;
			o = "a", a.push(e[r]), r++, i++;
		}
		return e.length === t.length && a;
	}
	parseNegate() {
		if (this.nonegate) return;
		let e = this.pattern, t = !1, n = 0;
		for (let r = 0; r < e.length && e.charAt(r) === "!"; r++) t = !t, n++;
		n && (this.pattern = e.slice(n)), this.negate = t;
	}
	matchOne(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = 0, i = 0;
		if (this.isWindows) {
			let n = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), a = !n && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), o = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), s = a ? 3 : n ? 0 : void 0, c = !o && t[0] === "" && t[1] === "" && t[2] === "?" && typeof t[3] == "string" && /^[a-z]:$/i.test(t[3]) ? 3 : o ? 0 : void 0;
			if (typeof s == "number" && typeof c == "number") {
				let [n, a] = [e[s], t[c]];
				n.toLowerCase() === a.toLowerCase() && (t[c] = n, i = c, r = s);
			}
		}
		let { optimizationLevel: a = 1 } = this.options;
		return a >= 2 && (e = this.levelTwoFileOptimize(e)), t.includes(W) ? this.#e(e, t, n, r, i) : this.#n(e, t, n, r, i);
	}
	#e(e, t, n, r, i) {
		let a = t.indexOf(W, i), o = t.lastIndexOf(W), [s, c, l] = n ? [
			t.slice(i, a),
			t.slice(a + 1),
			[]
		] : [
			t.slice(i, a),
			t.slice(a + 1, o),
			t.slice(o + 1)
		];
		if (s.length) {
			let t = e.slice(r, r + s.length);
			if (!this.#n(t, s, n, 0, 0)) return !1;
			r += s.length;
		}
		let u = 0;
		if (l.length) {
			if (l.length + r > e.length) return !1;
			let t = e.length - l.length;
			if (this.#n(e, l, n, t, 0)) u = l.length;
			else {
				if (e[e.length - 1] !== "" || r + l.length === e.length || (t--, !this.#n(e, l, n, t, 0))) return !1;
				u = l.length + 1;
			}
		}
		if (!c.length) {
			let t = !!u;
			for (let n = r; n < e.length - u; n++) {
				let r = String(e[n]);
				if (t = !0, r === "." || r === ".." || !this.options.dot && r.startsWith(".")) return !1;
			}
			return n || t;
		}
		let d = [[[], 0]], f = d[0], p = 0, m = [0];
		for (let e of c) e === W ? (m.push(p), f = [[], 0], d.push(f)) : (f[0].push(e), p++);
		let h = d.length - 1, g = e.length - u;
		for (let e of d) e[1] = g - (m[h--] + e[0].length);
		return !!this.#t(e, d, r, 0, n, 0, !!u);
	}
	#t(e, t, n, r, i, a, o) {
		let s = t[r];
		if (!s) {
			for (let t = n; t < e.length; t++) {
				o = !0;
				let n = e[t];
				if (n === "." || n === ".." || !this.options.dot && n.startsWith(".")) return !1;
			}
			return o;
		}
		let [c, l] = s;
		for (; n <= l;) {
			if (this.#n(e.slice(0, n + c.length), c, i, n, 0) && a < this.maxGlobstarRecursion) {
				let s = this.#t(e, t, n + c.length, r + 1, i, a + 1, o);
				if (!1 !== s) return s;
			}
			let s = e[n];
			if (s === "." || s === ".." || !this.options.dot && s.startsWith(".")) return !1;
			n++;
		}
		return i || null;
	}
	#n(e, t, n, r, i) {
		let a, o, s, c;
		for (a = r, o = i, c = e.length, s = t.length; a < c && o < s; a++, o++) {
			this.debug("matchOne loop");
			let n, r = t[o], i = e[a];
			if (this.debug(t, r, i), !1 === r || r === W || (typeof r == "string" ? (n = i === r, this.debug("string match", r, i, n)) : (n = r.test(i), this.debug("pattern match", r, i, n)), !n)) return !1;
		}
		if (a === c && o === s) return !0;
		if (a === c) return n;
		if (o === s) return a === c - 1 && e[a] === "";
		throw Error("wtf?");
	}
	braceExpand() {
		return or(this.pattern, this.options);
	}
	parse(e) {
		vn(e);
		let t = this.options;
		if (e === "**") return W;
		if (e === "") return "";
		let n, r = null;
		(n = e.match(Yn)) ? r = t.dot ? Zn : Xn : (n = e.match(zn)) ? r = (t.nocase ? t.dot ? Un : Hn : t.dot ? Vn : Bn)(n[1]) : (n = e.match(Qn)) ? r = (t.nocase ? t.dot ? er : $n : t.dot ? tr : nr)(n) : (n = e.match(Wn)) ? r = t.dot ? Kn : Gn : (n = e.match(qn)) && (r = Jn);
		let i = Rn.fromGlob(e, this.options).toMMPattern();
		return r && typeof i == "object" && Reflect.defineProperty(i, "test", { value: r }), i;
	}
	makeRe() {
		if (this.regexp || !1 === this.regexp) return this.regexp;
		let e = this.set;
		if (!e.length) return this.regexp = !1, this.regexp;
		let t = this.options, n = t.noglobstar ? "[^/]*?" : t.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", r = new Set(t.nocase ? ["i"] : []), i = e.map(((e) => {
			let t = e.map(((e) => {
				if (e instanceof RegExp) for (let t of e.flags.split("")) r.add(t);
				return typeof e == "string" ? e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : e === W ? W : e._src;
			}));
			return t.forEach(((e, r) => {
				let i = t[r + 1], a = t[r - 1];
				e === W && a !== W && (a === void 0 ? i !== void 0 && i !== W ? t[r + 1] = "(?:\\/|" + n + "\\/)?" + i : t[r] = n : i === void 0 ? t[r - 1] = a + "(?:\\/|" + n + ")?" : i !== W && (t[r - 1] = a + "(?:\\/|\\/" + n + "\\/)" + i, t[r + 1] = W));
			})), t.filter(((e) => e !== W)).join("/");
		})).join("|"), [a, o] = e.length > 1 ? ["(?:", ")"] : ["", ""];
		i = "^" + a + i + o + "$", this.negate && (i = "^(?!" + i + ").+$");
		try {
			this.regexp = new RegExp(i, [...r].join(""));
		} catch {
			this.regexp = !1;
		}
		return this.regexp;
	}
	slashSplit(e) {
		return this.preserveMultipleSlashes ? e.split("/") : this.isWindows && /^\/\/[^\/]+/.test(e) ? ["", ...e.split(/\/+/)] : e.split(/\/+/);
	}
	match(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.partial;
		if (this.debug("match", e, this.pattern), this.comment) return !1;
		if (this.empty) return e === "";
		if (e === "/" && t) return !0;
		let n = this.options;
		this.isWindows && (e = e.split("\\").join("/"));
		let r = this.slashSplit(e);
		this.debug(this.pattern, "split", r);
		let i = this.set;
		this.debug(this.pattern, "set", i);
		let a = r[r.length - 1];
		if (!a) for (let e = r.length - 2; !a && e >= 0; e--) a = r[e];
		for (let e = 0; e < i.length; e++) {
			let o = i[e], s = r;
			if (n.matchBase && o.length === 1 && (s = [a]), this.matchOne(s, o, t)) return !!n.flipNegate || !this.negate;
		}
		return !n.flipNegate && this.negate;
	}
	static defaults(e) {
		return U.defaults(e).Minimatch;
	}
};
function lr(e) {
	let t = /* @__PURE__ */ Error(`${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""}Invalid response: ${e.status} ${e.statusText}`);
	return t.status = e.status, t.response = e, t;
}
function K(e, t) {
	let { status: n } = t;
	if (n === 401 && e.digest) return t;
	if (n >= 400) throw lr(t);
	return t;
}
function ur(e, t) {
	return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? {
		data: t,
		headers: e.headers ? on(e.headers) : {},
		status: e.status,
		statusText: e.statusText
	} : t;
}
U.AST = Rn, U.Minimatch = cr, U.escape = function(e) {
	let { windowsPathsNoEscape: t = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return t ? e.replace(/[?*()[\]]/g, "[$&]") : e.replace(/[?*()[\]\\]/g, "\\$&");
}, U.unescape = Cn;
var dr = (fr = function(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = V({
		url: R(e.remoteURL, L(t)),
		method: "COPY",
		headers: {
			Destination: R(e.remoteURL, L(n)),
			Overwrite: !1 === r.overwrite ? "F" : "T",
			Depth: r.shallow ? "0" : "infinity"
		}
	}, e, r);
	return o = function(t) {
		K(e, t);
	}, (a = B(i, e)) && a.then || (a = Promise.resolve(a)), o ? a.then(o) : a;
	var a, o;
}, function() {
	var e = [...arguments];
	try {
		return Promise.resolve(fr.apply(this, e));
	} catch (e) {
		return Promise.reject(e);
	}
}), fr, pr = /* @__PURE__ */ RegExp("^[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
function mr(e, t) {
	let n = [], r = t.exec(e);
	for (; r;) {
		let i = [];
		i.startIndex = t.lastIndex - r[0].length;
		let a = r.length;
		for (let e = 0; e < a; e++) i.push(r[e]);
		n.push(i), r = t.exec(e);
	}
	return n;
}
var hr = function(e) {
	return pr.exec(e) != null;
}, gr = [
	"hasOwnProperty",
	"toString",
	"valueOf",
	"__defineGetter__",
	"__defineSetter__",
	"__lookupGetter__",
	"__lookupSetter__"
], _r = [
	"__proto__",
	"constructor",
	"prototype"
], vr = (e) => gr.includes(e) ? "__" + e : e, yr = {
	preserveOrder: !1,
	attributeNamePrefix: "@_",
	attributesGroupName: !1,
	textNodeName: "#text",
	ignoreAttributes: !0,
	removeNSPrefix: !1,
	allowBooleanAttributes: !1,
	parseTagValue: !0,
	parseAttributeValue: !1,
	trimValues: !0,
	cdataPropName: !1,
	numberParseOptions: {
		hex: !0,
		leadingZeros: !0,
		eNotation: !0
	},
	tagValueProcessor: function(e, t) {
		return t;
	},
	attributeValueProcessor: function(e, t) {
		return t;
	},
	stopNodes: [],
	alwaysCreateTextNode: !1,
	isArray: () => !1,
	commentPropName: !1,
	unpairedTags: [],
	processEntities: !0,
	htmlEntities: !1,
	entityDecoder: null,
	ignoreDeclaration: !1,
	ignorePiTags: !1,
	transformTagName: !1,
	transformAttributeName: !1,
	updateTag: function(e, t, n) {
		return e;
	},
	captureMetaData: !1,
	maxNestedTags: 100,
	strictReservedNames: !0,
	jPath: !0,
	onDangerousProperty: vr
};
function br(e, t) {
	if (typeof e != "string") return;
	let n = e.toLowerCase();
	if (gr.some(((e) => n === e.toLowerCase())) || _r.some(((e) => n === e.toLowerCase()))) throw Error(`[SECURITY] Invalid ${t}: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
}
function xr(e, t) {
	return typeof e == "boolean" ? {
		enabled: e,
		maxEntitySize: 1e4,
		maxExpansionDepth: 1e4,
		maxTotalExpansions: 1 / 0,
		maxExpandedLength: 1e5,
		maxEntityCount: 1e3,
		allowedTags: null,
		tagFilter: null,
		appliesTo: "all"
	} : typeof e == "object" && e ? {
		enabled: !1 !== e.enabled,
		maxEntitySize: Math.max(1, e.maxEntitySize ?? 1e4),
		maxExpansionDepth: Math.max(1, e.maxExpansionDepth ?? 1e4),
		maxTotalExpansions: Math.max(1, e.maxTotalExpansions ?? 1 / 0),
		maxExpandedLength: Math.max(1, e.maxExpandedLength ?? 1e5),
		maxEntityCount: Math.max(1, e.maxEntityCount ?? 1e3),
		allowedTags: e.allowedTags ?? null,
		tagFilter: e.tagFilter ?? null,
		appliesTo: e.appliesTo ?? "all"
	} : xr(!0);
}
var Sr = function(e) {
	let t = Object.assign({}, yr, e), n = [
		{
			value: t.attributeNamePrefix,
			name: "attributeNamePrefix"
		},
		{
			value: t.attributesGroupName,
			name: "attributesGroupName"
		},
		{
			value: t.textNodeName,
			name: "textNodeName"
		},
		{
			value: t.cdataPropName,
			name: "cdataPropName"
		},
		{
			value: t.commentPropName,
			name: "commentPropName"
		}
	];
	for (let { value: e, name: t } of n) e && br(e, t);
	return t.onDangerousProperty === null && (t.onDangerousProperty = vr), t.processEntities = xr(t.processEntities, t.htmlEntities), t.unpairedTagsSet = new Set(t.unpairedTags), t.stopNodes && Array.isArray(t.stopNodes) && (t.stopNodes = t.stopNodes.map(((e) => typeof e == "string" && e.startsWith("*.") ? ".." + e.substring(2) : e))), t;
}, Cr = typeof Symbol == "function" ? Symbol("XML Node Metadata") : "@@xmlMetadata", wr = class {
	constructor(e) {
		this.tagname = e, this.child = [], this[":@"] = Object.create(null);
	}
	add(e, t) {
		e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: t });
	}
	addChild(e, t) {
		e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({
			[e.tagname]: e.child,
			":@": e[":@"]
		}) : this.child.push({ [e.tagname]: e.child }), t !== void 0 && (this.child[this.child.length - 1][Cr] = { startIndex: t });
	}
	static getMetaDataSymbol() {
		return Cr;
	}
}, Tr = class {
	constructor(e) {
		this.suppressValidationErr = !e, this.options = e;
	}
	readDocType(e, t) {
		let n = Object.create(null), r = 0;
		if (e[t + 3] !== "O" || e[t + 4] !== "C" || e[t + 5] !== "T" || e[t + 6] !== "Y" || e[t + 7] !== "P" || e[t + 8] !== "E") throw Error("Invalid Tag instead of DOCTYPE");
		{
			t += 9;
			let i = 1, a = !1, o = !1, s = "";
			for (; t < e.length; t++) if (e[t] !== "<" || o) {
				if (e[t] === ">") {
					if (o ? e[t - 1] === "-" && e[t - 2] === "-" && (o = !1, i--) : i--, i === 0) break;
				} else e[t] === "[" ? a = !0 : s += e[t];
			} else {
				if (a && Er(e, "!ENTITY", t)) {
					let i, a;
					if (t += 7, [i, a, t] = this.readEntityExp(e, t + 1, this.suppressValidationErr), a.indexOf("&") === -1) {
						if (!1 !== this.options.enabled && this.options.maxEntityCount != null && r >= this.options.maxEntityCount) throw Error(`Entity count (${r + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
						n[i] = a, r++;
					}
				} else if (a && Er(e, "!ELEMENT", t)) {
					t += 8;
					let { index: n } = this.readElementExp(e, t + 1);
					t = n;
				} else if (a && Er(e, "!ATTLIST", t)) t += 8;
				else if (a && Er(e, "!NOTATION", t)) {
					t += 9;
					let { index: n } = this.readNotationExp(e, t + 1, this.suppressValidationErr);
					t = n;
				} else {
					if (!Er(e, "!--", t)) throw Error("Invalid DOCTYPE");
					o = !0;
				}
				i++, s = "";
			}
			if (i !== 0) throw Error("Unclosed DOCTYPE");
		}
		return {
			entities: n,
			i: t
		};
	}
	readEntityExp(e, t) {
		let n = t = q(e, t);
		for (; t < e.length && !/\s/.test(e[t]) && e[t] !== "\"" && e[t] !== "'";) t++;
		let r = e.substring(n, t);
		if (Dr(r), t = q(e, t), !this.suppressValidationErr) {
			if (e.substring(t, t + 6).toUpperCase() === "SYSTEM") throw Error("External entities are not supported");
			if (e[t] === "%") throw Error("Parameter entities are not supported");
		}
		let i = "";
		if ([t, i] = this.readIdentifierVal(e, t, "entity"), !1 !== this.options.enabled && this.options.maxEntitySize != null && i.length > this.options.maxEntitySize) throw Error(`Entity "${r}" size (${i.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
		return [
			r,
			i,
			--t
		];
	}
	readNotationExp(e, t) {
		let n = t = q(e, t);
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		!this.suppressValidationErr && Dr(r), t = q(e, t);
		let i = e.substring(t, t + 6).toUpperCase();
		if (!this.suppressValidationErr && i !== "SYSTEM" && i !== "PUBLIC") throw Error(`Expected SYSTEM or PUBLIC, found "${i}"`);
		t += i.length, t = q(e, t);
		let a = null, o = null;
		if (i === "PUBLIC") [t, a] = this.readIdentifierVal(e, t, "publicIdentifier"), e[t = q(e, t)] !== "\"" && e[t] !== "'" || ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier"));
		else if (i === "SYSTEM" && ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier"), !this.suppressValidationErr && !o)) throw Error("Missing mandatory system identifier for SYSTEM notation");
		return {
			notationName: r,
			publicIdentifier: a,
			systemIdentifier: o,
			index: --t
		};
	}
	readIdentifierVal(e, t, n) {
		let r = "", i = e[t];
		if (i !== "\"" && i !== "'") throw Error(`Expected quoted string, found "${i}"`);
		let a = ++t;
		for (; t < e.length && e[t] !== i;) t++;
		if (r = e.substring(a, t), e[t] !== i) throw Error(`Unterminated ${n} value`);
		return [++t, r];
	}
	readElementExp(e, t) {
		let n = t = q(e, t);
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		if (!this.suppressValidationErr && !hr(r)) throw Error(`Invalid element name: "${r}"`);
		let i = "";
		if (e[t = q(e, t)] === "E" && Er(e, "MPTY", t)) t += 4;
		else if (e[t] === "A" && Er(e, "NY", t)) t += 2;
		else if (e[t] === "(") {
			let n = ++t;
			for (; t < e.length && e[t] !== ")";) t++;
			if (i = e.substring(n, t), e[t] !== ")") throw Error("Unterminated content model");
		} else if (!this.suppressValidationErr) throw Error(`Invalid Element Expression, found "${e[t]}"`);
		return {
			elementName: r,
			contentModel: i.trim(),
			index: t
		};
	}
	readAttlistExp(e, t) {
		let n = t = q(e, t);
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		for (Dr(r), n = t = q(e, t); t < e.length && !/\s/.test(e[t]);) t++;
		let i = e.substring(n, t);
		if (!Dr(i)) throw Error(`Invalid attribute name: "${i}"`);
		t = q(e, t);
		let a = "";
		if (e.substring(t, t + 8).toUpperCase() === "NOTATION") {
			if (a = "NOTATION", e[t = q(e, t += 8)] !== "(") throw Error(`Expected '(', found "${e[t]}"`);
			t++;
			let n = [];
			for (; t < e.length && e[t] !== ")";) {
				let r = t;
				for (; t < e.length && e[t] !== "|" && e[t] !== ")";) t++;
				let i = e.substring(r, t);
				if (i = i.trim(), !Dr(i)) throw Error(`Invalid notation name: "${i}"`);
				n.push(i), e[t] === "|" && (t++, t = q(e, t));
			}
			if (e[t] !== ")") throw Error("Unterminated list of notations");
			t++, a += " (" + n.join("|") + ")";
		} else {
			let n = t;
			for (; t < e.length && !/\s/.test(e[t]);) t++;
			if (a += e.substring(n, t), !this.suppressValidationErr && ![
				"CDATA",
				"ID",
				"IDREF",
				"IDREFS",
				"ENTITY",
				"ENTITIES",
				"NMTOKEN",
				"NMTOKENS"
			].includes(a.toUpperCase())) throw Error(`Invalid attribute type: "${a}"`);
		}
		t = q(e, t);
		let o = "";
		return e.substring(t, t + 8).toUpperCase() === "#REQUIRED" ? (o = "#REQUIRED", t += 8) : e.substring(t, t + 7).toUpperCase() === "#IMPLIED" ? (o = "#IMPLIED", t += 7) : [t, o] = this.readIdentifierVal(e, t, "ATTLIST"), {
			elementName: r,
			attributeName: i,
			attributeType: a,
			defaultValue: o,
			index: t
		};
	}
}, q = (e, t) => {
	for (; t < e.length && /\s/.test(e[t]);) t++;
	return t;
};
function Er(e, t, n) {
	for (let r = 0; r < t.length; r++) if (t[r] !== e[n + r + 1]) return !1;
	return !0;
}
function Dr(e) {
	if (hr(e)) return e;
	throw Error(`Invalid entity name ${e}`);
}
var Or = /^[-+]?0x[a-fA-F0-9]+$/, kr = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Ar = {
	hex: !0,
	leadingZeros: !0,
	decimalPoint: ".",
	eNotation: !0,
	infinity: "original"
}, jr = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/, Mr = class {
	constructor(e) {
		this._matcher = e;
	}
	get separator() {
		return this._matcher.separator;
	}
	getCurrentTag() {
		let e = this._matcher.path;
		return e.length > 0 ? e[e.length - 1].tag : void 0;
	}
	getCurrentNamespace() {
		let e = this._matcher.path;
		return e.length > 0 ? e[e.length - 1].namespace : void 0;
	}
	getAttrValue(e) {
		let t = this._matcher.path;
		if (t.length !== 0) return t[t.length - 1].values?.[e];
	}
	hasAttr(e) {
		let t = this._matcher.path;
		if (t.length === 0) return !1;
		let n = t[t.length - 1];
		return n.values !== void 0 && e in n.values;
	}
	getPosition() {
		let e = this._matcher.path;
		return e.length === 0 ? -1 : e[e.length - 1].position ?? 0;
	}
	getCounter() {
		let e = this._matcher.path;
		return e.length === 0 ? -1 : e[e.length - 1].counter ?? 0;
	}
	getIndex() {
		return this.getPosition();
	}
	getDepth() {
		return this._matcher.path.length;
	}
	toString(e) {
		let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
		return this._matcher.toString(e, t);
	}
	toArray() {
		return this._matcher.path.map(((e) => e.tag));
	}
	matches(e) {
		return this._matcher.matches(e);
	}
	matchesAny(e) {
		return e.matchesAny(this._matcher);
	}
}, Nr = class {
	constructor() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		this.separator = e.separator || ".", this.path = [], this.siblingStacks = [], this._pathStringCache = null, this._view = new Mr(this);
	}
	push(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
		this._pathStringCache = null, this.path.length > 0 && (this.path[this.path.length - 1].values = void 0);
		let r = this.path.length;
		this.siblingStacks[r] || (this.siblingStacks[r] = /* @__PURE__ */ new Map());
		let i = this.siblingStacks[r], a = n ? `${n}:${e}` : e, o = i.get(a) || 0, s = 0;
		for (let e of i.values()) s += e;
		i.set(a, o + 1);
		let c = {
			tag: e,
			position: s,
			counter: o
		};
		n != null && (c.namespace = n), t != null && (c.values = t), this.path.push(c);
	}
	pop() {
		if (this.path.length === 0) return;
		this._pathStringCache = null;
		let e = this.path.pop();
		return this.siblingStacks.length > this.path.length + 1 && (this.siblingStacks.length = this.path.length + 1), e;
	}
	updateCurrent(e) {
		if (this.path.length > 0) {
			let t = this.path[this.path.length - 1];
			e != null && (t.values = e);
		}
	}
	getCurrentTag() {
		return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
	}
	getCurrentNamespace() {
		return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
	}
	getAttrValue(e) {
		if (this.path.length !== 0) return this.path[this.path.length - 1].values?.[e];
	}
	hasAttr(e) {
		if (this.path.length === 0) return !1;
		let t = this.path[this.path.length - 1];
		return t.values !== void 0 && e in t.values;
	}
	getPosition() {
		return this.path.length === 0 ? -1 : this.path[this.path.length - 1].position ?? 0;
	}
	getCounter() {
		return this.path.length === 0 ? -1 : this.path[this.path.length - 1].counter ?? 0;
	}
	getIndex() {
		return this.getPosition();
	}
	getDepth() {
		return this.path.length;
	}
	toString(e) {
		let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], n = e || this.separator;
		if (n === this.separator && !0 === t) {
			if (this._pathStringCache !== null) return this._pathStringCache;
			let e = this.path.map(((e) => e.namespace ? `${e.namespace}:${e.tag}` : e.tag)).join(n);
			return this._pathStringCache = e, e;
		}
		return this.path.map(((e) => t && e.namespace ? `${e.namespace}:${e.tag}` : e.tag)).join(n);
	}
	toArray() {
		return this.path.map(((e) => e.tag));
	}
	reset() {
		this._pathStringCache = null, this.path = [], this.siblingStacks = [];
	}
	matches(e) {
		let t = e.segments;
		return t.length !== 0 && (e.hasDeepWildcard() ? this._matchWithDeepWildcard(t) : this._matchSimple(t));
	}
	_matchSimple(e) {
		if (this.path.length !== e.length) return !1;
		for (let t = 0; t < e.length; t++) if (!this._matchSegment(e[t], this.path[t], t === this.path.length - 1)) return !1;
		return !0;
	}
	_matchWithDeepWildcard(e) {
		let t = this.path.length - 1, n = e.length - 1;
		for (; n >= 0 && t >= 0;) {
			let r = e[n];
			if (r.type === "deep-wildcard") {
				if (n--, n < 0) return !0;
				let r = e[n], i = !1;
				for (let e = t; e >= 0; e--) if (this._matchSegment(r, this.path[e], e === this.path.length - 1)) {
					t = e - 1, n--, i = !0;
					break;
				}
				if (!i) return !1;
			} else {
				if (!this._matchSegment(r, this.path[t], t === this.path.length - 1)) return !1;
				t--, n--;
			}
		}
		return n < 0;
	}
	_matchSegment(e, t, n) {
		if (e.tag !== "*" && e.tag !== t.tag || e.namespace !== void 0 && e.namespace !== "*" && e.namespace !== t.namespace || e.attrName !== void 0 && (!n || !t.values || !(e.attrName in t.values) || e.attrValue !== void 0 && String(t.values[e.attrName]) !== String(e.attrValue))) return !1;
		if (e.position !== void 0) {
			if (!n) return !1;
			let r = t.counter ?? 0;
			if (e.position === "first" && r !== 0 || e.position === "odd" && r % 2 != 1 || e.position === "even" && r % 2 != 0 || e.position === "nth" && r !== e.positionValue) return !1;
		}
		return !0;
	}
	matchesAny(e) {
		return e.matchesAny(this);
	}
	snapshot() {
		return {
			path: this.path.map(((e) => ({ ...e }))),
			siblingStacks: this.siblingStacks.map(((e) => new Map(e)))
		};
	}
	restore(e) {
		this._pathStringCache = null, this.path = e.path.map(((e) => ({ ...e }))), this.siblingStacks = e.siblingStacks.map(((e) => new Map(e)));
	}
	readOnly() {
		return this._view;
	}
}, Pr = class {
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
		this.pattern = e, this.separator = t.separator || ".", this.segments = this._parse(e), this.data = n, this._hasDeepWildcard = this.segments.some(((e) => e.type === "deep-wildcard")), this._hasAttributeCondition = this.segments.some(((e) => e.attrName !== void 0)), this._hasPositionSelector = this.segments.some(((e) => e.position !== void 0));
	}
	_parse(e) {
		let t = [], n = 0, r = "";
		for (; n < e.length;) e[n] === this.separator ? n + 1 < e.length && e[n + 1] === this.separator ? (r.trim() && (t.push(this._parseSegment(r.trim())), r = ""), t.push({ type: "deep-wildcard" }), n += 2) : (r.trim() && t.push(this._parseSegment(r.trim())), r = "", n++) : (r += e[n], n++);
		return r.trim() && t.push(this._parseSegment(r.trim())), t;
	}
	_parseSegment(e) {
		let t = { type: "tag" }, n = null, r = e, i = e.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
		if (i && (r = i[1] + i[3], i[2])) {
			let e = i[2].slice(1, -1);
			e && (n = e);
		}
		let a, o, s = r;
		if (r.includes("::")) {
			let t = r.indexOf("::");
			if (a = r.substring(0, t).trim(), s = r.substring(t + 2).trim(), !a) throw Error(`Invalid namespace in pattern: ${e}`);
		}
		let c = null;
		if (s.includes(":")) {
			let e = s.lastIndexOf(":"), t = s.substring(0, e).trim(), n = s.substring(e + 1).trim();
			[
				"first",
				"last",
				"odd",
				"even"
			].includes(n) || /^nth\(\d+\)$/.test(n) ? (o = t, c = n) : o = s;
		} else o = s;
		if (!o) throw Error(`Invalid segment pattern: ${e}`);
		if (t.tag = o, a && (t.namespace = a), n) {
			if (n.includes("=")) {
				let e = n.indexOf("=");
				t.attrName = n.substring(0, e).trim(), t.attrValue = n.substring(e + 1).trim();
			} else t.attrName = n.trim();
		}
		if (c) {
			let e = c.match(/^nth\((\d+)\)$/);
			e ? (t.position = "nth", t.positionValue = parseInt(e[1], 10)) : t.position = c;
		}
		return t;
	}
	get length() {
		return this.segments.length;
	}
	hasDeepWildcard() {
		return this._hasDeepWildcard;
	}
	hasAttributeCondition() {
		return this._hasAttributeCondition;
	}
	hasPositionSelector() {
		return this._hasPositionSelector;
	}
	toString() {
		return this.pattern;
	}
}, Fr = class {
	constructor() {
		this._byDepthAndTag = /* @__PURE__ */ new Map(), this._wildcardByDepth = /* @__PURE__ */ new Map(), this._deepWildcards = [], this._patterns = /* @__PURE__ */ new Set(), this._sealed = !1;
	}
	add(e) {
		if (this._sealed) throw TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");
		if (this._patterns.has(e.pattern)) return this;
		if (this._patterns.add(e.pattern), e.hasDeepWildcard()) return this._deepWildcards.push(e), this;
		let t = e.length, n = e.segments[e.segments.length - 1]?.tag;
		if (n && n !== "*") {
			let r = `${t}:${n}`;
			this._byDepthAndTag.has(r) || this._byDepthAndTag.set(r, []), this._byDepthAndTag.get(r).push(e);
		} else this._wildcardByDepth.has(t) || this._wildcardByDepth.set(t, []), this._wildcardByDepth.get(t).push(e);
		return this;
	}
	addAll(e) {
		for (let t of e) this.add(t);
		return this;
	}
	has(e) {
		return this._patterns.has(e.pattern);
	}
	get size() {
		return this._patterns.size;
	}
	seal() {
		return this._sealed = !0, this;
	}
	get isSealed() {
		return this._sealed;
	}
	matchesAny(e) {
		return this.findMatch(e) !== null;
	}
	findMatch(e) {
		let t = e.getDepth(), n = `${t}:${e.getCurrentTag()}`, r = this._byDepthAndTag.get(n);
		if (r) {
			for (let t = 0; t < r.length; t++) if (e.matches(r[t])) return r[t];
		}
		let i = this._wildcardByDepth.get(t);
		if (i) {
			for (let t = 0; t < i.length; t++) if (e.matches(i[t])) return i[t];
		}
		for (let t = 0; t < this._deepWildcards.length; t++) if (e.matches(this._deepWildcards[t])) return this._deepWildcards[t];
		return null;
	}
}, Ir = {
	cent: "¢",
	pound: "£",
	curren: "¤",
	yen: "¥",
	euro: "€",
	dollar: "$",
	euro: "€",
	fnof: "ƒ",
	inr: "₹",
	af: "؋",
	birr: "ብር",
	peso: "₱",
	rub: "₽",
	won: "₩",
	yuan: "¥",
	cedil: "¸"
}, Lr = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	quot: "\""
}, Rr = {
	nbsp: "\xA0",
	copy: "©",
	reg: "®",
	trade: "™",
	mdash: "—",
	ndash: "–",
	hellip: "…",
	laquo: "«",
	raquo: "»",
	lsquo: "‘",
	rsquo: "’",
	ldquo: "“",
	rdquo: "”",
	bull: "•",
	para: "¶",
	sect: "§",
	deg: "°",
	frac12: "½",
	frac14: "¼",
	frac34: "¾"
}, zr = /* @__PURE__ */ new Set("!?\\\\/[]$%{}^&*()<>|+");
function Br(e) {
	if (e[0] === "#") throw Error(`[EntityReplacer] Invalid character '#' in entity name: "${e}"`);
	for (let t of e) if (zr.has(t)) throw Error(`[EntityReplacer] Invalid character '${t}' in entity name: "${e}"`);
	return e;
}
function Vr() {
	let e = Object.create(null);
	var t = [...arguments];
	for (let n of t) if (n) for (let t of Object.keys(n)) {
		let r = n[t];
		if (typeof r == "string") e[t] = r;
		else if (r && typeof r == "object" && r.val !== void 0) {
			let n = r.val;
			typeof n == "string" && (e[t] = n);
		}
	}
	return e;
}
var Hr = "external", Ur = "base", Wr = "all", J = Object.freeze({
	allow: 0,
	leave: 1,
	remove: 2,
	throw: 3
}), Gr = /* @__PURE__ */ new Set([
	9,
	10,
	13
]), Kr = class {
	constructor() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		var t;
		this._limit = e.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = typeof e.postCheck == "function" ? e.postCheck : (e) => e, this._limitTiers = (t = this._limit.applyLimitsTo ?? Hr) && t !== Hr ? t === Wr ? /* @__PURE__ */ new Set([Wr]) : t === Ur ? /* @__PURE__ */ new Set([Ur]) : Array.isArray(t) ? new Set(t) : /* @__PURE__ */ new Set([Hr]) : /* @__PURE__ */ new Set([Hr]), this._numericAllowed = e.numericAllowed ?? !0, this._baseMap = Vr(Lr, e.namedEntities || null), this._externalMap = Object.create(null), this._inputMap = Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(e.remove && Array.isArray(e.remove) ? e.remove : []), this._leaveSet = new Set(e.leave && Array.isArray(e.leave) ? e.leave : []);
		let n = function(e) {
			if (!e) return {
				xmlVersion: 1,
				onLevel: J.allow,
				nullLevel: J.remove
			};
			let t = e.xmlVersion === 1.1 ? 1.1 : 1, n = J[e.onNCR] ?? J.allow, r = J[e.nullNCR] ?? J.remove;
			return {
				xmlVersion: t,
				onLevel: n,
				nullLevel: Math.max(r, J.remove)
			};
		}(e.ncr);
		this._ncrXmlVersion = n.xmlVersion, this._ncrOnLevel = n.onLevel, this._ncrNullLevel = n.nullLevel;
	}
	setExternalEntities(e) {
		if (e) for (let t of Object.keys(e)) Br(t);
		this._externalMap = Vr(e);
	}
	addExternalEntity(e, t) {
		Br(e), typeof t == "string" && t.indexOf("&") === -1 && (this._externalMap[e] = t);
	}
	addInputEntities(e) {
		this._totalExpansions = 0, this._expandedLength = 0, this._inputMap = Vr(e);
	}
	reset() {
		return this._inputMap = Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this;
	}
	setXmlVersion(e) {
		this._ncrXmlVersion = e === 1.1 ? 1.1 : 1;
	}
	decode(e) {
		if (typeof e != "string" || e.length === 0) return e;
		let t = e, n = [], r = e.length, i = 0, a = 0, o = this._maxTotalExpansions > 0, s = this._maxExpandedLength > 0, c = o || s;
		for (; a < r;) {
			if (e.charCodeAt(a) !== 38) {
				a++;
				continue;
			}
			let t = a + 1;
			for (; t < r && e.charCodeAt(t) !== 59 && t - a <= 32;) t++;
			if (t >= r || e.charCodeAt(t) !== 59) {
				a++;
				continue;
			}
			let l = e.slice(a + 1, t);
			if (l.length === 0) {
				a++;
				continue;
			}
			let u, d;
			if (this._removeSet.has(l)) u = "", d === void 0 && (d = Hr);
			else {
				if (this._leaveSet.has(l)) {
					a++;
					continue;
				}
				if (l.charCodeAt(0) === 35) {
					let e = this._resolveNCR(l);
					if (e === void 0) {
						a++;
						continue;
					}
					u = e, d = Ur;
				} else {
					let e = this._resolveName(l);
					u = e?.value, d = e?.tier;
				}
			}
			if (u !== void 0) {
				if (a > i && n.push(e.slice(i, a)), n.push(u), i = t + 1, a = i, c && this._tierCounts(d)) {
					if (o && (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions)) throw Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);
					if (s) {
						let e = u.length - (l.length + 2);
						if (e > 0 && (this._expandedLength += e, this._expandedLength > this._maxExpandedLength)) throw Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`);
					}
				}
			} else a++;
		}
		i < r && n.push(e.slice(i));
		let l = n.length === 0 ? e : n.join("");
		return this._postCheck(l, t);
	}
	_tierCounts(e) {
		return !!this._limitTiers.has(Wr) || this._limitTiers.has(e);
	}
	_resolveName(e) {
		return e in this._inputMap ? {
			value: this._inputMap[e],
			tier: Hr
		} : e in this._externalMap ? {
			value: this._externalMap[e],
			tier: Hr
		} : e in this._baseMap ? {
			value: this._baseMap[e],
			tier: Ur
		} : void 0;
	}
	_classifyNCR(e) {
		return e === 0 ? this._ncrNullLevel : e >= 55296 && e <= 57343 || this._ncrXmlVersion === 1 && e >= 1 && e <= 31 && !Gr.has(e) ? J.remove : -1;
	}
	_applyNCRAction(e, t, n) {
		switch (e) {
			case J.allow: return String.fromCodePoint(n);
			case J.remove: return "";
			case J.leave: return;
			case J.throw: throw Error(`[EntityDecoder] Prohibited numeric character reference &${t}; (U+${n.toString(16).toUpperCase().padStart(4, "0")})`);
			default: return String.fromCodePoint(n);
		}
	}
	_resolveNCR(e) {
		let t = e.charCodeAt(1), n;
		if (n = t === 120 || t === 88 ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), Number.isNaN(n) || n < 0 || n > 1114111) return;
		let r = this._classifyNCR(n);
		if (!this._numericAllowed && r < J.remove) return;
		let i = r === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, r);
		return this._applyNCRAction(i, e, n);
	}
};
function qr(e, t) {
	if (!e) return {};
	let n = t.attributesGroupName ? e[t.attributesGroupName] : e;
	if (!n) return {};
	let r = {};
	for (let e in n) e.startsWith(t.attributeNamePrefix) ? r[e.substring(t.attributeNamePrefix.length)] = n[e] : r[e] = n[e];
	return r;
}
function Jr(e) {
	if (!e || typeof e != "string") return;
	let t = e.indexOf(":");
	if (t !== -1 && t > 0) {
		let n = e.substring(0, t);
		if (n !== "xmlns") return n;
	}
}
var Yr = class {
	constructor(e, t) {
		var n;
		this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.parseXml = ei, this.parseTextData = Xr, this.resolveNameSpace = Zr, this.buildAttributesMap = $r, this.isItStopNode = ii, this.replaceEntitiesValue = ni, this.readStopNodeData = ci, this.saveTextToParentTag = ri, this.addChild = ti, this.ignoreAttributesFn = typeof (n = this.options.ignoreAttributes) == "function" ? n : Array.isArray(n) ? (e) => {
			for (let t of n) if (typeof t == "string" && e === t || t instanceof RegExp && t.test(e)) return !0;
		} : () => !1, this.entityExpansionCount = 0, this.currentExpandedLength = 0;
		let r = { ...Lr };
		this.options.entityDecoder ? this.entityDecoder = this.options.entityDecoder : (typeof this.options.htmlEntities == "object" ? r = this.options.htmlEntities : !0 === this.options.htmlEntities && (r = {
			...Rr,
			...Ir
		}), this.entityDecoder = new Kr({
			namedEntities: {
				...r,
				...t
			},
			numericAllowed: this.options.htmlEntities,
			limit: {
				maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
				maxExpandedLength: this.options.processEntities.maxExpandedLength,
				applyLimitsTo: this.options.processEntities.appliesTo
			}
		})), this.matcher = new Nr(), this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = !1, this.stopNodeExpressionsSet = new Fr();
		let i = this.options.stopNodes;
		if (i && i.length > 0) {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "string" ? this.stopNodeExpressionsSet.add(new Pr(t)) : t instanceof Pr && this.stopNodeExpressionsSet.add(t);
			}
			this.stopNodeExpressionsSet.seal();
		}
	}
};
function Xr(e, t, n, r, i, a, o) {
	let s = this.options;
	if (e !== void 0 && (s.trimValues && !r && (e = e.trim()), e.length > 0)) {
		o || (e = this.replaceEntitiesValue(e, t, n));
		let r = s.jPath ? n.toString() : n, c = s.tagValueProcessor(t, e, r, i, a);
		return c == null ? e : typeof c != typeof e || c !== e ? c : s.trimValues || e.trim() === e ? li(e, s.parseTagValue, s.numberParseOptions) : e;
	}
}
function Zr(e) {
	if (this.options.removeNSPrefix) {
		let t = e.split(":"), n = e.charAt(0) === "/" ? "/" : "";
		if (t[0] === "xmlns") return "";
		t.length === 2 && (e = n + t[1]);
	}
	return e;
}
var Qr = /* @__PURE__ */ RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
function $r(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], i = this.options;
	if (!0 === r || !0 !== i.ignoreAttributes && typeof e == "string") {
		let r = mr(e, Qr), a = r.length, o = {}, s = Array(a), c = !1, l = {};
		for (let e = 0; e < a; e++) {
			let t = this.resolveNameSpace(r[e][1]), a = r[e][4];
			if (t.length && a !== void 0) {
				let r = a;
				i.trimValues && (r = r.trim()), r = this.replaceEntitiesValue(r, n, this.readonlyMatcher), s[e] = r, l[t] = r, c = !0;
			}
		}
		c && typeof t == "object" && t.updateCurrent && t.updateCurrent(l);
		let u = i.jPath ? t.toString() : this.readonlyMatcher, d = !1;
		for (let e = 0; e < a; e++) {
			let t = this.resolveNameSpace(r[e][1]);
			if (this.ignoreAttributesFn(t, u)) continue;
			let n = i.attributeNamePrefix + t;
			if (t.length) {
				if (i.transformAttributeName && (n = i.transformAttributeName(n)), n = di(n, i), r[e][4] !== void 0) {
					let r = s[e], a = i.attributeValueProcessor(t, r, u);
					o[n] = a == null ? r : typeof a != typeof r || a !== r ? a : li(r, i.parseAttributeValue, i.numberParseOptions), d = !0;
				} else i.allowBooleanAttributes && (o[n] = !0, d = !0);
			}
		}
		if (!d) return;
		if (i.attributesGroupName && !i.preserveOrder) {
			let e = {};
			return e[i.attributesGroupName] = o, e;
		}
		return o;
	}
}
var ei = function(e) {
	e = e.replace(/\r\n?/g, "\n");
	let t = new wr("!xml"), n = t, r = "";
	this.matcher.reset(), this.entityDecoder.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0;
	let i = this.options, a = new Tr(i.processEntities), o = e.length;
	for (let s = 0; s < o; s++) if (e[s] === "<") {
		let c = e.charCodeAt(s + 1);
		if (c === 47) {
			let t = ai(e, ">", s, "Closing Tag is not closed."), a = e.substring(s + 2, t).trim();
			if (i.removeNSPrefix) {
				let e = a.indexOf(":");
				e !== -1 && (a = a.substr(e + 1));
			}
			a = ui(i.transformTagName, a, "", i).tagName, n && (r = this.saveTextToParentTag(r, n, this.readonlyMatcher));
			let o = this.matcher.getCurrentTag();
			if (a && i.unpairedTagsSet.has(a)) throw Error(`Unpaired tag can not be used as closing tag: </${a}>`);
			o && i.unpairedTagsSet.has(o) && (this.matcher.pop(), this.tagsNodeStack.pop()), this.matcher.pop(), this.isCurrentNodeStopNode = !1, n = this.tagsNodeStack.pop(), r = "", s = t;
		} else if (c === 63) {
			let t = si(e, s, !1, "?>");
			if (!t) throw Error("Pi Tag is not closed.");
			r = this.saveTextToParentTag(r, n, this.readonlyMatcher);
			let a = this.buildAttributesMap(t.tagExp, this.matcher, t.tagName, !0);
			if (a) {
				let e = a[this.options.attributeNamePrefix + "version"];
				this.entityDecoder.setXmlVersion(Number(e) || 1);
			}
			if (!(i.ignoreDeclaration && t.tagName === "?xml" || i.ignorePiTags)) {
				let e = new wr(t.tagName);
				e.add(i.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && !0 !== i.ignoreAttributes && (e[":@"] = a), this.addChild(n, e, this.readonlyMatcher, s);
			}
			s = t.closeIndex + 1;
		} else if (c === 33 && e.charCodeAt(s + 2) === 45 && e.charCodeAt(s + 3) === 45) {
			let t = ai(e, "-->", s + 4, "Comment is not closed.");
			if (i.commentPropName) {
				let a = e.substring(s + 4, t - 2);
				r = this.saveTextToParentTag(r, n, this.readonlyMatcher), n.add(i.commentPropName, [{ [i.textNodeName]: a }]);
			}
			s = t;
		} else if (c === 33 && e.charCodeAt(s + 2) === 68) {
			let t = a.readDocType(e, s);
			this.entityDecoder.addInputEntities(t.entities), s = t.i;
		} else if (c === 33 && e.charCodeAt(s + 2) === 91) {
			let t = ai(e, "]]>", s, "CDATA is not closed.") - 2, a = e.substring(s + 9, t);
			r = this.saveTextToParentTag(r, n, this.readonlyMatcher);
			let o = this.parseTextData(a, n.tagname, this.readonlyMatcher, !0, !1, !0, !0);
			o ??= "", i.cdataPropName ? n.add(i.cdataPropName, [{ [i.textNodeName]: a }]) : n.add(i.textNodeName, o), s = t + 2;
		} else {
			let a = si(e, s, i.removeNSPrefix);
			if (!a) {
				let t = e.substring(Math.max(0, s - 50), Math.min(o, s + 50));
				throw Error(`readTagExp returned undefined at position ${s}. Context: "${t}"`);
			}
			let c = a.tagName, l = a.rawTagName, u = a.tagExp, d = a.attrExpPresent, f = a.closeIndex;
			if ({tagName: c, tagExp: u} = ui(i.transformTagName, c, u, i), i.strictReservedNames && (c === i.commentPropName || c === i.cdataPropName || c === i.textNodeName || c === i.attributesGroupName)) throw Error(`Invalid tag name: ${c}`);
			n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, this.readonlyMatcher, !1));
			let p = n;
			p && i.unpairedTagsSet.has(p.tagname) && (n = this.tagsNodeStack.pop(), this.matcher.pop());
			let m = !1;
			u.length > 0 && u.lastIndexOf("/") === u.length - 1 && (m = !0, c[c.length - 1] === "/" ? (c = c.substr(0, c.length - 1), u = c) : u = u.substr(0, u.length - 1), d = c !== u);
			let h, g = null;
			h = Jr(l), c !== t.tagname && this.matcher.push(c, {}, h), c !== u && d && (g = this.buildAttributesMap(u, this.matcher, c), g && qr(g, i)), c !== t.tagname && (this.isCurrentNodeStopNode = this.isItStopNode());
			let _ = s;
			if (this.isCurrentNodeStopNode) {
				let t = "";
				if (m) s = a.closeIndex;
				else if (i.unpairedTagsSet.has(c)) s = a.closeIndex;
				else {
					let n = this.readStopNodeData(e, l, f + 1);
					if (!n) throw Error(`Unexpected end of ${l}`);
					s = n.i, t = n.tagContent;
				}
				let r = new wr(c);
				g && (r[":@"] = g), r.add(i.textNodeName, t), this.matcher.pop(), this.isCurrentNodeStopNode = !1, this.addChild(n, r, this.readonlyMatcher, _);
			} else {
				if (m) {
					({tagName: c, tagExp: u} = ui(i.transformTagName, c, u, i));
					let e = new wr(c);
					g && (e[":@"] = g), this.addChild(n, e, this.readonlyMatcher, _), this.matcher.pop(), this.isCurrentNodeStopNode = !1;
				} else {
					if (i.unpairedTagsSet.has(c)) {
						let e = new wr(c);
						g && (e[":@"] = g), this.addChild(n, e, this.readonlyMatcher, _), this.matcher.pop(), this.isCurrentNodeStopNode = !1, s = a.closeIndex;
						continue;
					}
					{
						let e = new wr(c);
						if (this.tagsNodeStack.length > i.maxNestedTags) throw Error("Maximum nested tags exceeded");
						this.tagsNodeStack.push(n), g && (e[":@"] = g), this.addChild(n, e, this.readonlyMatcher, _), n = e;
					}
				}
				r = "", s = f;
			}
		}
	} else r += e[s];
	return t.child;
};
function ti(e, t, n, r) {
	this.options.captureMetaData || (r = void 0);
	let i = this.options.jPath ? n.toString() : n, a = this.options.updateTag(t.tagname, i, t[":@"]);
	!1 === a || (typeof a == "string" && (t.tagname = a), e.addChild(t, r));
}
function ni(e, t, n) {
	let r = this.options.processEntities;
	if (!r || !r.enabled) return e;
	if (r.allowedTags) {
		let i = this.options.jPath ? n.toString() : n;
		if (!(Array.isArray(r.allowedTags) ? r.allowedTags.includes(t) : r.allowedTags(t, i))) return e;
	}
	if (r.tagFilter) {
		let i = this.options.jPath ? n.toString() : n;
		if (!r.tagFilter(t, i)) return e;
	}
	return this.entityDecoder.decode(e);
}
function ri(e, t, n, r) {
	return e &&= (r === void 0 && (r = t.child.length === 0), (e = this.parseTextData(e, t.tagname, n, !1, !!t[":@"] && Object.keys(t[":@"]).length !== 0, r)) !== void 0 && e !== "" && t.add(this.options.textNodeName, e), ""), e;
}
function ii() {
	return this.stopNodeExpressionsSet.size !== 0 && this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
function ai(e, t, n, r) {
	let i = e.indexOf(t, n);
	if (i === -1) throw Error(r);
	return i + t.length - 1;
}
function oi(e, t, n, r) {
	let i = e.indexOf(t, n);
	if (i === -1) throw Error(r);
	return i;
}
function si(e, t, n) {
	let r = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", r = 0, i = e.length, a = n.charCodeAt(0), o = n.length > 1 ? n.charCodeAt(1) : -1, s = "", c = t;
		for (let n = t; n < i; n++) {
			let t = e.charCodeAt(n);
			if (r) t === r && (r = 0);
			else if (t === 34 || t === 39) r = t;
			else if (t === a) {
				if (o === -1 || e.charCodeAt(n + 1) === o) return s += e.substring(c, n), {
					data: s,
					index: n
				};
			} else t !== 9 || r || (s += e.substring(c, n) + " ", c = n + 1);
		}
	}(e, t + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
	if (!r) return;
	let i = r.data, a = r.index, o = i.search(/\s/), s = i, c = !0;
	o !== -1 && (s = i.substring(0, o), i = i.substring(o + 1).trimStart());
	let l = s;
	if (n) {
		let e = s.indexOf(":");
		e !== -1 && (s = s.substr(e + 1), c = s !== r.data.substr(e + 1));
	}
	return {
		tagName: s,
		tagExp: i,
		closeIndex: a,
		attrExpPresent: c,
		rawTagName: l
	};
}
function ci(e, t, n) {
	let r = n, i = 1, a = e.length;
	for (; n < a; n++) if (e[n] === "<") {
		let a = e.charCodeAt(n + 1);
		if (a === 47) {
			let a = oi(e, ">", n, `${t} is not closed`);
			if (e.substring(n + 2, a).trim() === t && (i--, i === 0)) return {
				tagContent: e.substring(r, n),
				i: a
			};
			n = a;
		} else if (a === 63) n = ai(e, "?>", n + 1, "StopNode is not closed.");
		else if (a === 33 && e.charCodeAt(n + 2) === 45 && e.charCodeAt(n + 3) === 45) n = ai(e, "-->", n + 3, "StopNode is not closed.");
		else if (a === 33 && e.charCodeAt(n + 2) === 91) n = ai(e, "]]>", n, "StopNode is not closed.") - 2;
		else {
			let r = si(e, n, ">");
			r && ((r && r.tagName) === t && r.tagExp[r.tagExp.length - 1] !== "/" && i++, n = r.closeIndex);
		}
	}
}
function li(e, t, n) {
	if (t && typeof e == "string") {
		let t = e.trim();
		return t === "true" || t !== "false" && function(e) {
			let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			if (t = Object.assign({}, Ar, t), !e || typeof e != "string") return e;
			let n = e.trim();
			if (n.length === 0 || t.skipLike !== void 0 && t.skipLike.test(n)) return e;
			if (n === "0") return 0;
			if (t.hex && Or.test(n)) return function(e) {
				if (parseInt) return parseInt(e, 16);
				if (Number.parseInt) return Number.parseInt(e, 16);
				if (window && window.parseInt) return window.parseInt(e, 16);
				throw Error("parseInt, Number.parseInt, window.parseInt are not supported");
			}(n);
			if (isFinite(n)) {
				if (n.includes("e") || n.includes("E")) return function(e, t, n) {
					if (!n.eNotation) return e;
					let r = t.match(jr);
					if (r) {
						let i = r[1] || "", a = r[3].indexOf("e") === -1 ? "E" : "e", o = r[2], s = i ? e[o.length + 1] === a : e[o.length] === a;
						return o.length > 1 && s ? e : (o.length !== 1 || !r[3].startsWith(`.${a}`) && r[3][0] !== a) && o.length > 0 ? n.leadingZeros && !s ? (t = (r[1] || "") + r[3], Number(t)) : e : Number(t);
					}
					return e;
				}(e, n, t);
				{
					let i = kr.exec(n);
					if (i) {
						let a = i[1] || "", o = i[2], s = ((r = i[3]) && r.indexOf(".") !== -1 && ((r = r.replace(/0+$/, "")) === "." ? r = "0" : r[0] === "." ? r = "0" + r : r[r.length - 1] === "." && (r = r.substring(0, r.length - 1))), r), c = a ? e[o.length + 1] === "." : e[o.length] === ".";
						if (!t.leadingZeros && (o.length > 1 || o.length === 1 && !c)) return e;
						{
							let r = Number(n), i = String(r);
							if (r === 0) return r;
							if (i.search(/[eE]/) !== -1) return t.eNotation ? r : e;
							if (n.indexOf(".") !== -1) return i === "0" || i === s || i === `${a}${s}` ? r : e;
							let c = o ? s : n;
							return o ? c === i || a + c === i ? r : e : c === i || c === a + i ? r : e;
						}
					}
					return e;
				}
			}
			var r;
			return function(e, t, n) {
				let r = t === 1 / 0;
				switch (n.infinity.toLowerCase()) {
					case "null": return null;
					case "infinity": return t;
					case "string": return r ? "Infinity" : "-Infinity";
					default: return e;
				}
			}(e, Number(n), t);
		}(e, n);
	}
	return e === void 0 ? "" : e;
}
function ui(e, t, n, r) {
	if (e) {
		let r = e(t);
		n === t && (n = r), t = r;
	}
	return {
		tagName: t = di(t, r),
		tagExp: n
	};
}
function di(e, t) {
	if (_r.includes(e)) throw Error(`[SECURITY] Invalid name: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
	return gr.includes(e) ? t.onDangerousProperty(e) : e;
}
var fi = wr.getMetaDataSymbol();
function pi(e, t) {
	if (!e || typeof e != "object") return {};
	if (!t) return e;
	let n = {};
	for (let r in e) r.startsWith(t) ? n[r.substring(t.length)] = e[r] : n[r] = e[r];
	return n;
}
function mi(e, t, n, r) {
	return hi(e, t, n, r);
}
function hi(e, t, n, r) {
	let i, a = {};
	for (let o = 0; o < e.length; o++) {
		let s = e[o], c = gi(s);
		if (c !== void 0 && c !== t.textNodeName) {
			let e = pi(s[":@"] || {}, t.attributeNamePrefix);
			n.push(c, e);
		}
		if (c === t.textNodeName) i === void 0 ? i = s[c] : i += "" + s[c];
		else {
			if (c === void 0) continue;
			if (s[c]) {
				let e = hi(s[c], t, n, r), i = vi(e, t);
				if (s[":@"] ? _i(e, s[":@"], r, t) : Object.keys(e).length !== 1 || e[t.textNodeName] === void 0 || t.alwaysCreateTextNode ? Object.keys(e).length === 0 && (t.alwaysCreateTextNode ? e[t.textNodeName] = "" : e = "") : e = e[t.textNodeName], s[fi] !== void 0 && typeof e == "object" && e && (e[fi] = s[fi]), a[c] !== void 0 && Object.prototype.hasOwnProperty.call(a, c)) Array.isArray(a[c]) || (a[c] = [a[c]]), a[c].push(e);
				else {
					let n = t.jPath ? r.toString() : r;
					a[c] = t.isArray(c, n, i) ? [e] : e;
				}
				c !== void 0 && c !== t.textNodeName && n.pop();
			}
		}
	}
	return typeof i == "string" ? i.length > 0 && (a[t.textNodeName] = i) : i !== void 0 && (a[t.textNodeName] = i), a;
}
function gi(e) {
	let t = Object.keys(e);
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (n !== ":@") return n;
	}
}
function _i(e, t, n, r) {
	if (t) {
		let i = Object.keys(t), a = i.length;
		for (let o = 0; o < a; o++) {
			let a = i[o], s = a.startsWith(r.attributeNamePrefix) ? a.substring(r.attributeNamePrefix.length) : a, c = r.jPath ? n.toString() + "." + s : n;
			e[a] = r.isArray(a, c, !0, !0) ? [t[a]] : t[a];
		}
	}
}
function vi(e, t) {
	let { textNodeName: n } = t, r = Object.keys(e).length;
	return r === 0 || !(r !== 1 || !e[n] && typeof e[n] != "boolean" && e[n] !== 0);
}
var yi = {
	allowBooleanAttributes: !1,
	unpairedTags: []
};
function bi(e) {
	return e === " " || e === "	" || e === "\n" || e === "\r";
}
function xi(e, t) {
	let n = t;
	for (; t < e.length; t++) if (e[t] == "?" || e[t] == " ") {
		let r = e.substr(n, t - n);
		if (t > 5 && r === "xml") return Y("InvalidXml", "XML declaration allowed only at the start of the document.", X(e, t));
		if (e[t] == "?" && e[t + 1] == ">") {
			t++;
			break;
		}
	}
	return t;
}
function Si(e, t) {
	if (e.length > t + 5 && e[t + 1] === "-" && e[t + 2] === "-") {
		for (t += 3; t < e.length; t++) if (e[t] === "-" && e[t + 1] === "-" && e[t + 2] === ">") {
			t += 2;
			break;
		}
	} else if (e.length > t + 8 && e[t + 1] === "D" && e[t + 2] === "O" && e[t + 3] === "C" && e[t + 4] === "T" && e[t + 5] === "Y" && e[t + 6] === "P" && e[t + 7] === "E") {
		let n = 1;
		for (t += 8; t < e.length; t++) if (e[t] === "<") n++;
		else if (e[t] === ">" && (n--, n === 0)) break;
	} else if (e.length > t + 9 && e[t + 1] === "[" && e[t + 2] === "C" && e[t + 3] === "D" && e[t + 4] === "A" && e[t + 5] === "T" && e[t + 6] === "A" && e[t + 7] === "[") {
		for (t += 8; t < e.length; t++) if (e[t] === "]" && e[t + 1] === "]" && e[t + 2] === ">") {
			t += 2;
			break;
		}
	}
	return t;
}
function Ci(e, t) {
	let n = "", r = "", i = !1;
	for (; t < e.length; t++) {
		if (e[t] === "\"" || e[t] === "'") r === "" ? r = e[t] : r !== e[t] || (r = "");
		else if (e[t] === ">" && r === "") {
			i = !0;
			break;
		}
		n += e[t];
	}
	return r === "" && {
		value: n,
		index: t,
		tagClosed: i
	};
}
var wi = /* @__PURE__ */ RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
function Ti(e, t) {
	let n = mr(e, wi), r = {};
	for (let e = 0; e < n.length; e++) {
		if (n[e][1].length === 0) return Y("InvalidAttr", "Attribute '" + n[e][2] + "' has no space in starting.", Oi(n[e]));
		if (n[e][3] !== void 0 && n[e][4] === void 0) return Y("InvalidAttr", "Attribute '" + n[e][2] + "' is without value.", Oi(n[e]));
		if (n[e][3] === void 0 && !t.allowBooleanAttributes) return Y("InvalidAttr", "boolean attribute '" + n[e][2] + "' is not allowed.", Oi(n[e]));
		let i = n[e][2];
		if (!Di(i)) return Y("InvalidAttr", "Attribute '" + i + "' is an invalid name.", Oi(n[e]));
		if (Object.prototype.hasOwnProperty.call(r, i)) return Y("InvalidAttr", "Attribute '" + i + "' is repeated.", Oi(n[e]));
		r[i] = 1;
	}
	return !0;
}
function Ei(e, t) {
	if (e[++t] === ";") return -1;
	if (e[t] === "#") return function(e, t) {
		let n = /\d/;
		for (e[t] === "x" && (t++, n = /[\da-fA-F]/); t < e.length; t++) {
			if (e[t] === ";") return t;
			if (!e[t].match(n)) break;
		}
		return -1;
	}(e, ++t);
	let n = 0;
	for (; t < e.length; t++, n++) if (!(e[t].match(/\w/) && n < 20)) {
		if (e[t] === ";") break;
		return -1;
	}
	return t;
}
function Y(e, t, n) {
	return { err: {
		code: e,
		msg: t,
		line: n.line || n,
		col: n.col
	} };
}
function Di(e) {
	return hr(e);
}
function X(e, t) {
	let n = e.substring(0, t).split(/\r?\n/);
	return {
		line: n.length,
		col: n[n.length - 1].length + 1
	};
}
function Oi(e) {
	return e.startIndex + e[1].length;
}
var ki = class {
	constructor(e) {
		this.externalEntities = {}, this.options = Sr(e);
	}
	parse(e, t) {
		if (typeof e != "string" && e.toString) e = e.toString();
		else if (typeof e != "string") throw Error("XML data is accepted in String or Bytes[] form.");
		if (t) {
			!0 === t && (t = {});
			let n = function(e, t) {
				t = Object.assign({}, yi, t);
				let n = [], r = !1, i = !1;
				e[0] === "﻿" && (e = e.substr(1));
				for (let a = 0; a < e.length; a++) if (e[a] === "<" && e[a + 1] === "?") {
					if (a += 2, a = xi(e, a), a.err) return a;
				} else {
					if (e[a] !== "<") {
						if (bi(e[a])) continue;
						return Y("InvalidChar", "char '" + e[a] + "' is not expected.", X(e, a));
					}
					{
						let o = a;
						if (a++, e[a] === "!") {
							a = Si(e, a);
							continue;
						}
						{
							let s = !1;
							e[a] === "/" && (s = !0, a++);
							let c = "";
							for (; a < e.length && e[a] !== ">" && e[a] !== " " && e[a] !== "	" && e[a] !== "\n" && e[a] !== "\r"; a++) c += e[a];
							if (c = c.trim(), c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1), a--), !hr(c)) {
								let t;
								return t = c.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + c + "' is an invalid name.", Y("InvalidTag", t, X(e, a));
							}
							let l = Ci(e, a);
							if (!1 === l) return Y("InvalidAttr", "Attributes for '" + c + "' have open quote.", X(e, a));
							let u = l.value;
							if (a = l.index, u[u.length - 1] === "/") {
								let n = a - u.length;
								u = u.substring(0, u.length - 1);
								let i = Ti(u, t);
								if (!0 !== i) return Y(i.err.code, i.err.msg, X(e, n + i.err.line));
								r = !0;
							} else if (s) {
								if (!l.tagClosed) return Y("InvalidTag", "Closing tag '" + c + "' doesn't have proper closing.", X(e, a));
								if (u.trim().length > 0) return Y("InvalidTag", "Closing tag '" + c + "' can't have attributes or invalid starting.", X(e, o));
								if (n.length === 0) return Y("InvalidTag", "Closing tag '" + c + "' has not been opened.", X(e, o));
								{
									let t = n.pop();
									if (c !== t.tagName) {
										let n = X(e, t.tagStartPos);
										return Y("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + n.line + ", col " + n.col + ") instead of closing tag '" + c + "'.", X(e, o));
									}
									n.length == 0 && (i = !0);
								}
							} else {
								let s = Ti(u, t);
								if (!0 !== s) return Y(s.err.code, s.err.msg, X(e, a - u.length + s.err.line));
								if (!0 === i) return Y("InvalidXml", "Multiple possible root nodes found.", X(e, a));
								t.unpairedTags.indexOf(c) !== -1 || n.push({
									tagName: c,
									tagStartPos: o
								}), r = !0;
							}
							for (a++; a < e.length; a++) if (e[a] === "<") {
								if (e[a + 1] === "!") {
									a++, a = Si(e, a);
									continue;
								}
								if (e[a + 1] !== "?") break;
								if (a = xi(e, ++a), a.err) return a;
							} else if (e[a] === "&") {
								let t = Ei(e, a);
								if (t == -1) return Y("InvalidChar", "char '&' is not expected.", X(e, a));
								a = t;
							} else if (!0 === i && !bi(e[a])) return Y("InvalidXml", "Extra text at the end", X(e, a));
							e[a] === "<" && a--;
						}
					}
				}
				return r ? n.length == 1 ? Y("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", X(e, n[0].tagStartPos)) : !(n.length > 0) || Y("InvalidXml", "Invalid '" + JSON.stringify(n.map(((e) => e.tagName)), null, 4).replace(/\r?\n/g, "") + "' found.", {
					line: 1,
					col: 1
				}) : Y("InvalidXml", "Start tag expected.", 1);
			}(e, t);
			if (!0 !== n) throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`);
		}
		let n = new Yr(this.options, this.externalEntities), r = n.parseXml(e);
		return this.options.preserveOrder || r === void 0 ? r : mi(r, this.options, n.matcher, n.readonlyMatcher);
	}
	addEntity(e, t) {
		if (t.indexOf("&") !== -1) throw Error("Entity value can't have '&'");
		if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
		if (t === "&") throw Error("An entity with value '&' is not permitted");
		this.externalEntities[e] = t;
	}
	static getMetaDataSymbol() {
		return wr.getMetaDataSymbol();
	}
}, Ai = F(829), Z = F.n(Ai), ji = function(e) {
	return e.Array = "array", e.Object = "object", e.Original = "original", e;
}(ji || {});
function Mi(e) {
	return typeof e == "string" ? e : e.toString(".", !1);
}
function Ni(e, t) {
	if (!e.endsWith("propstat.prop.displayname")) return t;
}
function Pi(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ji.Original, r = Z().get(e, t);
	return n === "array" && !1 === Array.isArray(r) ? [r] : n === "object" && Array.isArray(r) ? r[0] : r;
}
function Fi(e, t) {
	return t ??= {
		attributeNamePrefix: "@",
		attributeParsers: [],
		tagParsers: [Ni]
	}, new Promise(((n) => {
		n(function(e) {
			let { multistatus: t } = e;
			if (t === "") return { multistatus: { response: [] } };
			if (!t) throw Error("Invalid response: No root multistatus found");
			let n = { multistatus: Array.isArray(t) ? t[0] : t };
			return Z().set(n, "multistatus.response", Pi(n, "multistatus.response", ji.Array)), Z().set(n, "multistatus.response", Z().get(n, "multistatus.response").map(((e) => function(e) {
				let t = Object.assign({}, e);
				return t.status ? Z().set(t, "status", Pi(t, "status", ji.Object)) : (Z().set(t, "propstat", Pi(t, "propstat", ji.Object)), Z().set(t, "propstat.prop", Pi(t, "propstat.prop", ji.Object))), t;
			}(e)))), n;
		}(function(e) {
			let { attributeNamePrefix: t, attributeParsers: n, entityDecoder: r, tagParsers: i } = e, a = {
				allowBooleanAttributes: !0,
				attributeNamePrefix: t,
				textNodeName: "text",
				ignoreAttributes: !1,
				removeNSPrefix: !0,
				jPath: !1,
				numberParseOptions: {
					hex: !0,
					leadingZeros: !1
				},
				attributeValueProcessor(e, t, r) {
					let i = Mi(r);
					for (let e of n) try {
						let n = e(i, t);
						if (n !== t) return n;
					} catch {}
					return t;
				},
				tagValueProcessor(e, t, n) {
					let r = Mi(n);
					for (let e of i) try {
						let n = e(r, t);
						if (n !== t) return n;
					} catch {}
					return t;
				}
			};
			return r && (a.entityDecoder = new Kr({ limit: {
				maxTotalExpansions: r.limit?.maxTotalExpansions ?? 0,
				maxExpandedLength: r.limit?.maxExpandedLength ?? 0
			} })), new ki(a);
		}(t).parse(e)));
	}));
}
function Ii(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], { getlastmodified: r = null, getcontentlength: i = "0", resourcetype: a = null, getcontenttype: o = null, getetag: s = null } = e, c = a && typeof a == "object" && a.collection !== void 0 ? "directory" : "file", l = {
		filename: t,
		basename: Mt().basename(t),
		lastmod: r,
		size: parseInt(i, 10),
		type: c,
		etag: typeof s == "string" ? s.replace(/"/g, "") : null
	};
	return c === "file" && (l.mime = o && typeof o == "string" ? o.split(";")[0] : ""), n && (e.displayname !== void 0 && (e.displayname = String(e.displayname)), l.props = e), l;
}
function Li(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = null;
	try {
		e.multistatus.response[0].propstat && (r = e.multistatus.response[0]);
	} catch {}
	if (!r) throw Error("Failed getting item stat: bad response");
	let { propstat: { prop: i, status: a } } = r, [o, s, c] = a.split(" ", 3), l = parseInt(s, 10);
	if (l >= 400) {
		let e = /* @__PURE__ */ Error(`Invalid response: ${l} ${c}`);
		throw e.status = l, e;
	}
	return Ii(i, It(t), n);
}
function Ri(e) {
	switch (String(e)) {
		case "-3": return "unlimited";
		case "-2":
		case "-1": return "unknown";
		default: return parseInt(String(e), 10);
	}
}
function zi(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Bi = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, { details: r = !1 } = n;
	return zi(B(V({
		url: R(e.remoteURL, L(t)),
		method: "PROPFIND",
		headers: {
			Accept: "text/plain,application/xml",
			Depth: "0"
		}
	}, e, n), e), (function(n) {
		return K(e, n), zi(n.text(), (function(i) {
			return zi(Fi(i, e.parsing), (function(e) {
				return ur(n, Li(e, t, r), r);
			}));
		}));
	}));
}));
function Vi(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Hi = Ui((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = function(e) {
		if (!e || e === "/") return [];
		let t = e, n = [];
		do
			n.push(t), t = Mt().dirname(t);
		while (t && t !== "/");
		return n;
	}(It(t));
	r.sort(((e, t) => e.length > t.length ? 1 : t.length > e.length ? -1 : 0));
	let i = !1;
	return function(e, t, n) {
		if (typeof e[Ki] == "function") {
			var r, i, a, o = e[Ki]();
			function n(e) {
				try {
					for (; !(r = o.next()).done;) if ((e = t(r.value)) && e.then) {
						if (!Ji(e)) return void e.then(n, a ||= Q.bind(null, i = new qi(), 2));
						e = e.v;
					}
					i ? Q(i, 1, e) : i = e;
				} catch (e) {
					Q(i ||= new qi(), 2, e);
				}
			}
			if (n(), o.return) {
				var s = function(e) {
					try {
						r.done || o.return();
					} catch {}
					return e;
				};
				if (i && i.then) return i.then(s, (function(e) {
					throw s(e);
				}));
				s();
			}
			return i;
		}
		if (!("length" in e)) throw TypeError("Object is not iterable");
		for (var c = [], l = 0; l < e.length; l++) c.push(e[l]);
		return function(e, t, n) {
			var r, i, a = -1;
			return function o(s) {
				try {
					for (; ++a < e.length && (!n || !n());) if ((s = t(a)) && s.then) {
						if (!Ji(s)) return void s.then(o, i ||= Q.bind(null, r = new qi(), 2));
						s = s.v;
					}
					r ? Q(r, 1, s) : r = s;
				} catch (e) {
					Q(r ||= new qi(), 2, e);
				}
			}(), r;
		}(c, (function(e) {
			return t(c[e]);
		}), n);
	}(r, (function(r) {
		return a = function() {
			return function(n, i) {
				try {
					var a = Vi(Bi(e, r), (function(e) {
						if (e.type !== "directory") throw Error(`Path includes a file: ${t}`);
					}));
				} catch (e) {
					return i(e);
				}
				return a && a.then ? a.then(void 0, i) : a;
			}(0, (function(t) {
				let a = t;
				return function() {
					if (a.status === 404) return i = !0, Gi(Yi(e, r, {
						...n,
						recursive: !1
					}));
					throw t;
				}();
			}));
		}, (o = function() {
			if (i) return Gi(Yi(e, r, {
				...n,
				recursive: !1
			}));
		}()) && o.then ? o.then(a) : a();
		var a, o;
	}), (function() {
		return !1;
	}));
}));
function Ui(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
function Wi() {}
function Gi(e, t) {
	if (!t) return e && e.then ? e.then(Wi) : Promise.resolve();
}
var Ki = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Q(e, t, n) {
	if (!e.s) {
		if (n instanceof qi) {
			if (!n.s) return void (n.o = Q.bind(null, e, t));
			1 & t && (t = n.s), n = n.v;
		}
		if (n && n.then) return void n.then(Q.bind(null, e, t), Q.bind(null, e, 2));
		e.s = t, e.v = n;
		let r = e.o;
		r && r(e);
	}
}
var qi = function() {
	function e() {}
	return e.prototype.then = function(t, n) {
		let r = new e(), i = this.s;
		if (i) {
			let e = 1 & i ? t : n;
			if (e) {
				try {
					Q(r, 1, e(this.v));
				} catch (e) {
					Q(r, 2, e);
				}
				return r;
			}
			return this;
		}
		return this.o = function(e) {
			try {
				let i = e.v;
				1 & e.s ? Q(r, 1, t ? t(i) : i) : n ? Q(r, 1, n(i)) : Q(r, 2, i);
			} catch (e) {
				Q(r, 2, e);
			}
		}, r;
	}, e;
}();
function Ji(e) {
	return e instanceof qi && 1 & e.s;
}
var Yi = Ui((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	if (!0 === n.recursive) return Hi(e, t, n);
	let r = V({
		url: R(e.remoteURL, (i = L(t), i.endsWith("/") ? i : i + "/")),
		method: "MKCOL"
	}, e, n);
	var i;
	return Vi(B(r, e), (function(t) {
		K(e, t);
	}));
})), Xi = F(388), Zi = F.n(Xi), Qi = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = {};
	if (typeof n.range == "object" && typeof n.range.start == "number") {
		let e = `bytes=${n.range.start}-`;
		typeof n.range.end == "number" && (e = `${e}${n.range.end}`), r.Range = e;
	}
	let i = V({
		url: R(e.remoteURL, L(t)),
		method: "GET",
		headers: r
	}, e, n);
	return o = function(t) {
		if (K(e, t), r.Range && t.status !== 206) {
			let e = /* @__PURE__ */ Error(`Invalid response code for partial request: ${t.status}`);
			throw e.status = t.status, e;
		}
		return n.callback && setTimeout((() => {
			n.callback(t);
		}), 0), t.body;
	}, (a = B(i, e)) && a.then || (a = Promise.resolve(a)), o ? a.then(o) : a;
	var a, o;
})), $i = () => {}, ea = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n) {
	n.url ||= R(e.remoteURL, L(t));
	let r = V(n, e, {});
	return a = function(t) {
		return K(e, t), t;
	}, (i = B(r, e)) && i.then || (i = Promise.resolve(i)), a ? i.then(a) : i;
	var i, a;
})), ta = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = V({
		url: R(e.remoteURL, L(t)),
		method: "DELETE"
	}, e, n);
	return a = function(t) {
		K(e, t);
	}, (i = B(r, e)) && i.then || (i = Promise.resolve(i)), a ? i.then(a) : i;
	var i, a;
})), na = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return function(r, i) {
		try {
			var a = (o = Bi(e, t, n), s = function() {
				return !0;
			}, c ? s ? s(o) : o : (o && o.then || (o = Promise.resolve(o)), s ? o.then(s) : o));
		} catch (e) {
			return i(e);
		}
		var o, s, c;
		return a && a.then ? a.then(void 0, i) : a;
	}(0, (function(e) {
		if (e.status === 404) return !1;
		throw e;
	}));
}));
function ra(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var ia = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return ra(B(V({
		url: R(e.remoteURL, L(t), "/"),
		method: "PROPFIND",
		headers: {
			Accept: "text/plain,application/xml",
			Depth: n.deep ? "infinity" : "1"
		}
	}, e, n), e), (function(r) {
		return K(e, r), ra(r.text(), (function(i) {
			if (!i) throw Error("Failed parsing directory contents: Empty response");
			return ra(Fi(i, e.parsing), (function(i) {
				let a = Ft(t), o = function(e, t, n) {
					let r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], i = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], a = Mt().join(t, "/"), { multistatus: { response: o } } = e, s = o.map(((e) => {
						let t = function(e) {
							try {
								return e.replace(/^https?:\/\/[^\/]+/, "");
							} catch (e) {
								throw new I(e, "Failed normalising HREF");
							}
						}(e.href), { propstat: { prop: n } } = e;
						return Ii(n, a === "/" ? decodeURIComponent(It(t)) : It(Mt().relative(decodeURIComponent(a), decodeURIComponent(t))), r);
					}));
					return i ? s : s.filter(((e) => e.basename && (e.type === "file" || e.filename !== n.replace(/\/$/, ""))));
				}(i, Ft(e.remoteBasePath || e.remotePath), a, n.details, n.includeSelf);
				return n.glob && (o = function(e, t) {
					return e.filter(((e) => U(e.filename, t, { matchBase: !0 })));
				}(o, n.glob)), ur(r, o, n.details);
			}));
		}));
	}));
}));
function aa(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
var oa = aa((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return sa(B(V({
		url: R(e.remoteURL, L(t)),
		method: "GET",
		headers: { Accept: "text/plain" },
		transformResponse: [ua]
	}, e, n), e), (function(t) {
		return K(e, t), sa(t.text(), (function(e) {
			return ur(t, e, n.details);
		}));
	}));
}));
function sa(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var ca = aa((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return sa(B(V({
		url: R(e.remoteURL, L(t)),
		method: "GET"
	}, e, n), e), (function(t) {
		let r;
		return K(e, t), function(e, t) {
			var n = e();
			return n && n.then ? n.then(t) : t();
		}((function() {
			return sa(t.arrayBuffer(), (function(e) {
				r = e;
			}));
		}), (function() {
			return ur(t, r, n.details);
		}));
	}));
})), la = aa((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, { format: r = "binary" } = n;
	if (r !== "binary" && r !== "text") throw new I({ info: { code: Jt.InvalidOutputFormat } }, `Invalid output format: ${r}`);
	return r === "text" ? oa(e, t, n) : ca(e, t, n);
})), ua = (e) => e;
function da(e, t) {
	let n = "";
	t.format && t.indentBy.length > 0 && (n = "\n");
	let r = [];
	if (t.stopNodes && Array.isArray(t.stopNodes)) for (let e = 0; e < t.stopNodes.length; e++) {
		let n = t.stopNodes[e];
		typeof n == "string" ? r.push(new Pr(n)) : n instanceof Pr && r.push(n);
	}
	return fa(e, t, n, new Nr(), r);
}
function fa(e, t, n, r, i) {
	let a = "", o = !1;
	if (t.maxNestedTags && r.getDepth() > t.maxNestedTags) throw Error("Maximum nested tags exceeded");
	if (!Array.isArray(e)) {
		if (e != null) {
			let n = e.toString();
			return n = ya(n, t), n;
		}
		return "";
	}
	for (let s = 0; s < e.length; s++) {
		let c = e[s], l = ga(c);
		if (l === void 0) continue;
		let u = pa(c[":@"], t);
		r.push(l, u);
		let d = va(r, i);
		if (l === t.textNodeName) {
			let e = c[l];
			d || (e = t.tagValueProcessor(l, e), e = ya(e, t)), o && (a += n), a += e, o = !1, r.pop();
			continue;
		}
		if (l === t.cdataPropName) {
			o && (a += n);
			let e = c[l][0][t.textNodeName];
			a += `<![CDATA[${String(e).replace(/\]\]>/g, "]]]]><![CDATA[>")}]]>`, o = !1, r.pop();
			continue;
		}
		if (l === t.commentPropName) {
			let e = c[l][0][t.textNodeName];
			a += n + `\x3c!--${String(e).replace(/--/g, "- -").replace(/-$/, "- ")}--\x3e`, o = !0, r.pop();
			continue;
		}
		if (l[0] === "?") {
			let e = _a(c[":@"], t, d), i = l === "?xml" ? "" : n, s = c[l][0][t.textNodeName];
			s = s.length === 0 ? "" : " " + s, a += i + `<${l}${s}${e}?>`, o = !0, r.pop();
			continue;
		}
		let f = n;
		f !== "" && (f += t.indentBy);
		let p = n + `<${l}${_a(c[":@"], t, d)}`, m;
		m = d ? ma(c[l], t) : fa(c[l], t, f, r, i), t.unpairedTags.indexOf(l) === -1 ? m && m.length !== 0 || !t.suppressEmptyNode ? m && m.endsWith(">") ? a += p + `>${m}${n}</${l}>` : (a += p + ">", m && n !== "" && (m.includes("/>") || m.includes("</")) ? a += n + t.indentBy + m + n : a += m, a += `</${l}>`) : a += p + "/>" : t.suppressUnpairedNode ? a += p + ">" : a += p + "/>", o = !0, r.pop();
	}
	return a;
}
function pa(e, t) {
	if (!e || t.ignoreAttributes) return null;
	let n = {}, r = !1;
	for (let i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i.startsWith(t.attributeNamePrefix) ? i.substr(t.attributeNamePrefix.length) : i] = e[i], r = !0);
	return r ? n : null;
}
function ma(e, t) {
	if (!Array.isArray(e)) return e == null ? "" : e.toString();
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e[r], a = ga(i);
		if (a === t.textNodeName) n += i[a];
		else if (a === t.cdataPropName) n += i[a][0][t.textNodeName];
		else if (a === t.commentPropName) n += i[a][0][t.textNodeName];
		else {
			if (a && a[0] === "?") continue;
			if (a) {
				let e = ha(i[":@"], t), r = ma(i[a], t);
				r && r.length !== 0 ? n += `<${a}${e}>${r}</${a}>` : n += `<${a}${e}/>`;
			}
		}
	}
	return n;
}
function ha(e, t) {
	let n = "";
	if (e && !t.ignoreAttributes) for (let r in e) {
		if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
		let i = e[r];
		!0 === i && t.suppressBooleanAttributes ? n += ` ${r.substr(t.attributeNamePrefix.length)}` : n += ` ${r.substr(t.attributeNamePrefix.length)}="${i}"`;
	}
	return n;
}
function ga(e) {
	let t = Object.keys(e);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (Object.prototype.hasOwnProperty.call(e, r) && r !== ":@") return r;
	}
}
function _a(e, t, n) {
	let r = "";
	if (e && !t.ignoreAttributes) for (let i in e) {
		if (!Object.prototype.hasOwnProperty.call(e, i)) continue;
		let a;
		n ? a = e[i] : (a = t.attributeValueProcessor(i, e[i]), a = ya(a, t)), !0 === a && t.suppressBooleanAttributes ? r += ` ${i.substr(t.attributeNamePrefix.length)}` : r += ` ${i.substr(t.attributeNamePrefix.length)}="${a}"`;
	}
	return r;
}
function va(e, t) {
	if (!t || t.length === 0) return !1;
	for (let n = 0; n < t.length; n++) if (e.matches(t[n])) return !0;
	return !1;
}
function ya(e, t) {
	if (e && e.length > 0 && t.processEntities) for (let n = 0; n < t.entities.length; n++) {
		let r = t.entities[n];
		e = e.replace(r.regex, r.val);
	}
	return e;
}
var ba = {
	attributeNamePrefix: "@_",
	attributesGroupName: !1,
	textNodeName: "#text",
	ignoreAttributes: !0,
	cdataPropName: !1,
	format: !1,
	indentBy: "  ",
	suppressEmptyNode: !1,
	suppressUnpairedNode: !0,
	suppressBooleanAttributes: !0,
	tagValueProcessor: function(e, t) {
		return t;
	},
	attributeValueProcessor: function(e, t) {
		return t;
	},
	preserveOrder: !1,
	commentPropName: !1,
	unpairedTags: [],
	entities: [
		{
			regex: /* @__PURE__ */ RegExp("&", "g"),
			val: "&amp;"
		},
		{
			regex: /* @__PURE__ */ RegExp(">", "g"),
			val: "&gt;"
		},
		{
			regex: /* @__PURE__ */ RegExp("<", "g"),
			val: "&lt;"
		},
		{
			regex: /* @__PURE__ */ RegExp("'", "g"),
			val: "&apos;"
		},
		{
			regex: /* @__PURE__ */ RegExp("\"", "g"),
			val: "&quot;"
		}
	],
	processEntities: !0,
	stopNodes: [],
	oneListGroup: !1,
	maxNestedTags: 100,
	jPath: !0
};
function $(e) {
	if (this.options = Object.assign({}, ba, e), this.options.stopNodes && Array.isArray(this.options.stopNodes) && (this.options.stopNodes = this.options.stopNodes.map(((e) => typeof e == "string" && e.startsWith("*.") ? ".." + e.substring(2) : e))), this.stopNodeExpressions = [], this.options.stopNodes && Array.isArray(this.options.stopNodes)) for (let e = 0; e < this.options.stopNodes.length; e++) {
		let t = this.options.stopNodes[e];
		typeof t == "string" ? this.stopNodeExpressions.push(new Pr(t)) : t instanceof Pr && this.stopNodeExpressions.push(t);
	}
	var t;
	!0 === this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
		return !1;
	} : (this.ignoreAttributesFn = typeof (t = this.options.ignoreAttributes) == "function" ? t : Array.isArray(t) ? (e) => {
		for (let n of t) if (typeof n == "string" && e === n || n instanceof RegExp && n.test(e)) return !0;
	} : () => !1, this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = Ca), this.processTextOrObjNode = xa, this.options.format ? (this.indentate = Sa, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
		return "";
	}, this.tagEndChar = ">", this.newLine = "");
}
function xa(e, t, n, r) {
	let i = this.extractAttributes(e);
	if (r.push(t, i), this.checkStopNode(r)) {
		let i = this.buildRawContent(e), a = this.buildAttributesForStopNode(e);
		return r.pop(), this.buildObjectNode(i, t, a, n);
	}
	let a = this.j2x(e, n + 1, r);
	return r.pop(), e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1 ? this.buildTextValNode(e[this.options.textNodeName], t, a.attrStr, n, r) : this.buildObjectNode(a.val, t, a.attrStr, n);
}
function Sa(e) {
	return this.options.indentBy.repeat(e);
}
function Ca(e) {
	return !(!e.startsWith(this.options.attributeNamePrefix) || e === this.options.textNodeName) && e.substr(this.attrPrefixLen);
}
$.prototype.build = function(e) {
	if (this.options.preserveOrder) return da(e, this.options);
	{
		Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = { [this.options.arrayNodeName]: e });
		let t = new Nr();
		return this.j2x(e, 0, t).val;
	}
}, $.prototype.j2x = function(e, t, n) {
	let r = "", i = "";
	if (this.options.maxNestedTags && n.getDepth() >= this.options.maxNestedTags) throw Error("Maximum nested tags exceeded");
	let a = this.options.jPath ? n.toString() : n, o = this.checkStopNode(n);
	for (let s in e) if (Object.prototype.hasOwnProperty.call(e, s)) {
		if (e[s] === void 0) this.isAttribute(s) && (i += "");
		else if (e[s] === null) this.isAttribute(s) || s === this.options.cdataPropName ? i += "" : s[0] === "?" ? i += this.indentate(t) + "<" + s + "?" + this.tagEndChar : i += this.indentate(t) + "<" + s + "/" + this.tagEndChar;
		else if (e[s] instanceof Date) i += this.buildTextValNode(e[s], s, "", t, n);
		else if (typeof e[s] != "object") {
			let c = this.isAttribute(s);
			if (c && !this.ignoreAttributesFn(c, a)) r += this.buildAttrPairStr(c, "" + e[s], o);
			else if (!c) {
				if (s === this.options.textNodeName) {
					let t = this.options.tagValueProcessor(s, "" + e[s]);
					i += this.replaceEntitiesValue(t);
				} else {
					n.push(s);
					let r = this.checkStopNode(n);
					if (n.pop(), r) {
						let n = "" + e[s];
						i += n === "" ? this.indentate(t) + "<" + s + this.closeTag(s) + this.tagEndChar : this.indentate(t) + "<" + s + ">" + n + "</" + s + this.tagEndChar;
					} else i += this.buildTextValNode(e[s], s, "", t, n);
				}
			}
		} else if (Array.isArray(e[s])) {
			let r = e[s].length, a = "", o = "";
			for (let c = 0; c < r; c++) {
				let r = e[s][c];
				if (r !== void 0) {
					if (r === null) s[0] === "?" ? i += this.indentate(t) + "<" + s + "?" + this.tagEndChar : i += this.indentate(t) + "<" + s + "/" + this.tagEndChar;
					else if (typeof r == "object") {
						if (this.options.oneListGroup) {
							n.push(s);
							let e = this.j2x(r, t + 1, n);
							n.pop(), a += e.val, this.options.attributesGroupName && r.hasOwnProperty(this.options.attributesGroupName) && (o += e.attrStr);
						} else a += this.processTextOrObjNode(r, s, t, n);
					} else if (this.options.oneListGroup) {
						let e = this.options.tagValueProcessor(s, r);
						e = this.replaceEntitiesValue(e), a += e;
					} else {
						n.push(s);
						let e = this.checkStopNode(n);
						if (n.pop(), e) {
							let e = "" + r;
							a += e === "" ? this.indentate(t) + "<" + s + this.closeTag(s) + this.tagEndChar : this.indentate(t) + "<" + s + ">" + e + "</" + s + this.tagEndChar;
						} else a += this.buildTextValNode(r, s, "", t, n);
					}
				}
			}
			this.options.oneListGroup && (a = this.buildObjectNode(a, s, o, t)), i += a;
		} else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
			let t = Object.keys(e[s]), n = t.length;
			for (let i = 0; i < n; i++) r += this.buildAttrPairStr(t[i], "" + e[s][t[i]], o);
		} else i += this.processTextOrObjNode(e[s], s, t, n);
	}
	return {
		attrStr: r,
		val: i
	};
}, $.prototype.buildAttrPairStr = function(e, t, n) {
	return n || (t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t)), this.options.suppressBooleanAttributes && t === "true" ? " " + e : " " + e + "=\"" + t + "\"";
}, $.prototype.extractAttributes = function(e) {
	if (!e || typeof e != "object") return null;
	let t = {}, n = !1;
	if (this.options.attributesGroupName && e[this.options.attributesGroupName]) {
		let r = e[this.options.attributesGroupName];
		for (let e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e.startsWith(this.options.attributeNamePrefix) ? e.substring(this.options.attributeNamePrefix.length) : e] = r[e], n = !0);
	} else for (let r in e) {
		if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
		let i = this.isAttribute(r);
		i && (t[i] = e[r], n = !0);
	}
	return n ? t : null;
}, $.prototype.buildRawContent = function(e) {
	if (typeof e == "string") return e;
	if (typeof e != "object" || !e) return String(e);
	if (e[this.options.textNodeName] !== void 0) return e[this.options.textNodeName];
	let t = "";
	for (let n in e) {
		if (!Object.prototype.hasOwnProperty.call(e, n) || this.isAttribute(n) || this.options.attributesGroupName && n === this.options.attributesGroupName) continue;
		let r = e[n];
		if (n === this.options.textNodeName) t += r;
		else if (Array.isArray(r)) {
			for (let e of r) if (typeof e == "string" || typeof e == "number") t += `<${n}>${e}</${n}>`;
			else if (typeof e == "object" && e) {
				let r = this.buildRawContent(e), i = this.buildAttributesForStopNode(e);
				t += r === "" ? `<${n}${i}/>` : `<${n}${i}>${r}</${n}>`;
			}
		} else if (typeof r == "object" && r) {
			let e = this.buildRawContent(r), i = this.buildAttributesForStopNode(r);
			t += e === "" ? `<${n}${i}/>` : `<${n}${i}>${e}</${n}>`;
		} else t += `<${n}>${r}</${n}>`;
	}
	return t;
}, $.prototype.buildAttributesForStopNode = function(e) {
	if (!e || typeof e != "object") return "";
	let t = "";
	if (this.options.attributesGroupName && e[this.options.attributesGroupName]) {
		let n = e[this.options.attributesGroupName];
		for (let e in n) {
			if (!Object.prototype.hasOwnProperty.call(n, e)) continue;
			let r = e.startsWith(this.options.attributeNamePrefix) ? e.substring(this.options.attributeNamePrefix.length) : e, i = n[e];
			!0 === i && this.options.suppressBooleanAttributes ? t += " " + r : t += " " + r + "=\"" + i + "\"";
		}
	} else for (let n in e) {
		if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
		let r = this.isAttribute(n);
		if (r) {
			let i = e[n];
			!0 === i && this.options.suppressBooleanAttributes ? t += " " + r : t += " " + r + "=\"" + i + "\"";
		}
	}
	return t;
}, $.prototype.buildObjectNode = function(e, t, n, r) {
	if (e === "") return t[0] === "?" ? this.indentate(r) + "<" + t + n + "?" + this.tagEndChar : this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
	{
		let i = "</" + t + this.tagEndChar, a = "";
		return t[0] === "?" && (a = "?", i = ""), !n && n !== "" || e.indexOf("<") !== -1 ? !1 !== this.options.commentPropName && t === this.options.commentPropName && a.length === 0 ? this.indentate(r) + `\x3c!--${e}--\x3e` + this.newLine : this.indentate(r) + "<" + t + n + a + this.tagEndChar + e + this.indentate(r) + i : this.indentate(r) + "<" + t + n + a + ">" + e + i;
	}
}, $.prototype.closeTag = function(e) {
	let t = "";
	return this.options.unpairedTags.indexOf(e) === -1 ? t = this.options.suppressEmptyNode ? "/" : `></${e}` : this.options.suppressUnpairedNode || (t = "/"), t;
}, $.prototype.checkStopNode = function(e) {
	if (!this.stopNodeExpressions || this.stopNodeExpressions.length === 0) return !1;
	for (let t = 0; t < this.stopNodeExpressions.length; t++) if (e.matches(this.stopNodeExpressions[t])) return !0;
	return !1;
}, $.prototype.buildTextValNode = function(e, t, n, r, i) {
	if (!1 !== this.options.cdataPropName && t === this.options.cdataPropName) {
		let t = String(e).replace(/\]\]>/g, "]]]]><![CDATA[>");
		return this.indentate(r) + `<![CDATA[${t}]]>` + this.newLine;
	}
	if (!1 !== this.options.commentPropName && t === this.options.commentPropName) {
		let t = String(e).replace(/--/g, "- -").replace(/-$/, "- ");
		return this.indentate(r) + `\x3c!--${t}--\x3e` + this.newLine;
	}
	if (t[0] === "?") return this.indentate(r) + "<" + t + n + "?" + this.tagEndChar;
	{
		let i = this.options.tagValueProcessor(t, e);
		return i = this.replaceEntitiesValue(i), i === "" ? this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(r) + "<" + t + n + ">" + i + "</" + t + this.tagEndChar;
	}
}, $.prototype.replaceEntitiesValue = function(e) {
	if (e && e.length > 0 && this.options.processEntities) for (let t = 0; t < this.options.entities.length; t++) {
		let n = this.options.entities[t];
		e = e.replace(n.regex, n.val);
	}
	return e;
};
var wa = $;
function Ta(e) {
	return new wa({
		attributeNamePrefix: "@_",
		format: !0,
		ignoreAttributes: !1,
		suppressEmptyNode: !0
	}).build(Ea({ lockinfo: {
		"@_xmlns:d": "DAV:",
		lockscope: { exclusive: {} },
		locktype: { write: {} },
		owner: { href: e }
	} }, "d"));
}
function Ea(e, t) {
	let n = { ...e };
	for (let e in n) n.hasOwnProperty(e) && (n[e] && typeof n[e] == "object" && e.indexOf(":") === -1 ? (n[`${t}:${e}`] = Ea(n[e], t), delete n[e]) : !1 === /^@_/.test(e) && (n[`${t}:${e}`] = n[e], delete n[e]));
	return n;
}
function Da(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
function Oa(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
var ka = Oa((function(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
	return Da(B(V({
		url: R(e.remoteURL, L(t)),
		method: "UNLOCK",
		headers: { "Lock-Token": n }
	}, e, r), e), (function(t) {
		if (K(e, t), t.status !== 204 && t.status !== 200) throw lr(t);
	}));
})), Aa = Oa((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, { refreshToken: r, timeout: i = ja } = n, a = {
		Accept: "text/plain,application/xml",
		Timeout: i
	};
	return r && (a.If = r), Da(B(V({
		url: R(e.remoteURL, L(t)),
		method: "LOCK",
		headers: a,
		data: Ta(e.contactHref)
	}, e, n), e), (function(t) {
		return K(e, t), Da(t.text(), (function(e) {
			let n = (a = e, new ki({
				removeNSPrefix: !0,
				parseAttributeValue: !0,
				parseTagValue: !0
			}).parse(a)), r = Z().get(n, "prop.lockdiscovery.activelock.locktoken.href"), i = Z().get(n, "prop.lockdiscovery.activelock.timeout");
			var a;
			if (!r) throw lr(t, "No lock token received: ");
			return {
				token: r,
				serverTimeout: i
			};
		}));
	}));
})), ja = "Infinite, Second-4100000000";
function Ma(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Na = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.path || "/";
	return Ma(B(V({
		url: R(e.remoteURL, n),
		method: "PROPFIND",
		headers: {
			Accept: "text/plain,application/xml",
			Depth: "0"
		}
	}, e, t), e), (function(n) {
		return K(e, n), Ma(n.text(), (function(r) {
			return Ma(Fi(r, e.parsing), (function(e) {
				return ur(n, function(e) {
					try {
						let [t] = e.multistatus.response, { propstat: { prop: { "quota-used-bytes": n, "quota-available-bytes": r } } } = t;
						return n !== void 0 && r !== void 0 ? {
							used: parseInt(String(n), 10),
							available: Ri(r)
						} : null;
					} catch {}
					return null;
				}(e), t.details);
			}));
		}));
	}));
}));
function Pa(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Fa = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, { details: r = !1 } = n;
	return Pa(B(V({
		url: R(e.remoteURL, L(t)),
		method: "SEARCH",
		headers: {
			Accept: "text/plain,application/xml",
			"Content-Type": e.headers["Content-Type"] || "application/xml; charset=utf-8"
		}
	}, e, n), e), (function(n) {
		return K(e, n), Pa(n.text(), (function(i) {
			return Pa(Fi(i, e.parsing), (function(e) {
				return ur(n, function(e, t, n) {
					let r = {
						truncated: !1,
						results: []
					};
					return r.truncated = e.multistatus.response.some(((e) => (e.status || e.propstat?.status).split(" ", 3)?.[1] === "507" && e.href.replace(/\/$/, "").endsWith(L(t).replace(/\/$/, "")))), e.multistatus.response.forEach(((e) => {
						if (e.propstat === void 0) return;
						let t = e.href.split("/").map(decodeURIComponent).join("/");
						r.results.push(Ii(e.propstat.prop, t, n));
					})), r;
				}(e, t, r), r);
			}));
		}));
	}));
})), Ia = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = V({
		url: R(e.remoteURL, L(t)),
		method: "MOVE",
		headers: {
			Destination: R(e.remoteURL, L(n)),
			Overwrite: !1 === r.overwrite ? "F" : "T"
		}
	}, e, r);
	return o = function(t) {
		K(e, t);
	}, (a = B(i, e)) && a.then || (a = Promise.resolve(a)), o ? a.then(o) : a;
	var a, o;
})), La = F(172);
function Ra(e) {
	if (un(e)) return e.byteLength;
	if (dn(e)) return e.length;
	if (typeof e == "string") return (0, La.d)(e);
	throw new I({ info: { code: Jt.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
}
var za = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, { contentLength: i = !0, overwrite: a = !0 } = r, o = { "Content-Type": "application/octet-stream" };
	!1 === i || (o["Content-Length"] = typeof i == "number" ? `${i}` : `${Ra(n)}`), a || (o["If-None-Match"] = "*");
	let s = V({
		url: R(e.remoteURL, L(t)),
		method: "PUT",
		headers: o,
		data: n
	}, e, r);
	return l = function(t) {
		try {
			K(e, t);
		} catch (e) {
			let t = e;
			if (t.status !== 412 || a) throw t;
			return !1;
		}
		return !0;
	}, (c = B(s, e)) && c.then || (c = Promise.resolve(c)), l ? c.then(l) : c;
	var c, l;
})), Ba = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = V({
		url: R(e.remoteURL, L(t)),
		method: "OPTIONS"
	}, e, n);
	return a = function(t) {
		try {
			K(e, t);
		} catch (e) {
			throw e;
		}
		return {
			compliance: (t.headers.get("DAV") ?? "").split(",").map(((e) => e.trim())),
			server: t.headers.get("Server") ?? ""
		};
	}, (i = B(r, e)) && i.then || (i = Promise.resolve(i)), a ? i.then(a) : i;
	var i, a;
}));
function Va(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Ha = Ga((function(e, t, n, r, i) {
	let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
	if (n > r || n < 0) throw new I({ info: { code: Jt.InvalidUpdateRange } }, `Invalid update range ${n} for partial update`);
	let o = {
		"Content-Type": "application/octet-stream",
		"Content-Length": "" + (r - n + 1),
		"Content-Range": `bytes ${n}-${r}/*`
	};
	return Va(B(V({
		url: R(e.remoteURL, L(t)),
		method: "PUT",
		headers: o,
		data: i
	}, e, a), e), (function(t) {
		K(e, t);
	}));
}));
function Ua(e, t) {
	var n = e();
	return n && n.then ? n.then(t) : t(n);
}
var Wa = Ga((function(e, t, n, r, i) {
	let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
	if (n > r || n < 0) throw new I({ info: { code: Jt.InvalidUpdateRange } }, `Invalid update range ${n} for partial update`);
	let o = {
		"Content-Type": "application/x-sabredav-partialupdate",
		"Content-Length": "" + (r - n + 1),
		"X-Update-Range": `bytes=${n}-${r}`
	};
	return Va(B(V({
		url: R(e.remoteURL, L(t)),
		method: "PATCH",
		headers: o,
		data: i
	}, e, a), e), (function(t) {
		K(e, t);
	}));
}));
function Ga(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
var Ka = Ga((function(e, t, n, r, i) {
	let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
	return Va(Ba(e, t, a), (function(o) {
		let s = !1;
		return Ua((function() {
			if (o.compliance.includes("sabredav-partialupdate")) return Va(Wa(e, t, n, r, i, a), (function(e) {
				return s = !0, e;
			}));
		}), (function(c) {
			let l = !1;
			return s ? c : Ua((function() {
				if (o.server.includes("Apache") && o.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Va(Ha(e, t, n, r, i, a), (function(e) {
					return l = !0, e;
				}));
			}), (function(e) {
				if (l) return e;
				throw new I({ info: { code: Jt.NotSupported } }, "Not supported");
			}));
		}));
	}));
})), qa = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function Ja(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { authType: n = null, remoteBasePath: r, contactHref: i = qa, entityDecoder: a, ha1: o, headers: s = {}, httpAgent: c, httpsAgent: l, password: u, token: d, username: f, withCredentials: p } = t, m = n;
	m ||= f || u ? z.Password : z.None;
	let h = {
		authType: m,
		remoteBasePath: r,
		contactHref: i,
		ha1: o,
		headers: Object.assign({}, s),
		httpAgent: c,
		httpsAgent: l,
		password: u,
		parsing: {
			attributeNamePrefix: t.attributeNamePrefix ?? "@",
			attributeParsers: [],
			entityDecoder: a,
			tagParsers: [Ni]
		},
		remotePath: Lt(e),
		remoteURL: e,
		token: d,
		username: f,
		withCredentials: p
	};
	return Yt(h, f, u, d, o), {
		copyFile: (e, t, n) => dr(h, e, t, n),
		createDirectory: (e, t) => Yi(h, e, t),
		createReadStream: (e, t) => function(e, t) {
			let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = new (Zi()).PassThrough();
			return Qi(e, t, n).then(((e) => {
				e.pipe(r);
			})).catch(((e) => {
				r.emit("error", e);
			})), r;
		}(h, e, t),
		createWriteStream: (e, t, n) => function(e, t) {
			let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : $i, i = new (Zi()).PassThrough(), a = {};
			return !1 === n.overwrite && (a["If-None-Match"] = "*"), B(V({
				url: R(e.remoteURL, L(t)),
				method: "PUT",
				headers: a,
				data: i,
				maxRedirects: 0
			}, e, n), e).then(((t) => K(e, t))).then(((e) => {
				setTimeout((() => {
					r(e);
				}), 0);
			})).catch(((e) => {
				i.emit("error", e);
			})), i;
		}(h, e, t, n),
		customRequest: (e, t) => ea(h, e, t),
		deleteFile: (e, t) => ta(h, e, t),
		exists: (e, t) => na(h, e, t),
		getDirectoryContents: (e, t) => ia(h, e, t),
		getFileContents: (e, t) => la(h, e, t),
		getFileDownloadLink: (e) => function(e, t) {
			let n = R(e.remoteURL, L(t)), r = /^https:/i.test(n) ? "https" : "http";
			switch (e.authType) {
				case z.None: break;
				case z.Password: {
					let t = Wt(e.headers.Authorization.replace(/^Basic /i, "").trim());
					n = n.replace(/^https?:\/\//, `${r}://${t}@`);
					break;
				}
				default: throw new I({ info: { code: Jt.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${e.authType}`);
			}
			return n;
		}(h, e),
		getFileUploadLink: (e) => function(e, t) {
			let n = `${R(e.remoteURL, L(t))}?Content-Type=application/octet-stream`, r = /^https:/i.test(n) ? "https" : "http";
			switch (e.authType) {
				case z.None: break;
				case z.Password: {
					let t = Wt(e.headers.Authorization.replace(/^Basic /i, "").trim());
					n = n.replace(/^https?:\/\//, `${r}://${t}@`);
					break;
				}
				default: throw new I({ info: { code: Jt.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${e.authType}`);
			}
			return n;
		}(h, e),
		getHeaders: () => Object.assign({}, h.headers),
		getQuota: (e) => Na(h, e),
		lock: (e, t) => Aa(h, e, t),
		moveFile: (e, t, n) => Ia(h, e, t, n),
		putFileContents: (e, t, n) => za(h, e, t, n),
		partialUpdateFileContents: (e, t, n, r, i) => Ka(h, e, t, n, r, i),
		getDAVCompliance: (e) => Ba(h, e),
		search: (e, t) => Fa(h, e, t),
		setHeaders: (e) => {
			h.headers = Object.assign({}, e);
		},
		stat: (e, t) => Bi(h, e, t),
		unlock: (e, t, n) => ka(h, e, t, n),
		registerAttributeParser: (e) => {
			h.parsing.attributeParsers.push(e);
		},
		registerTagParser: (e) => {
			h.parsing.tagParsers.push(e);
		}
	};
}
//#endregion
//#region node_modules/@nextcloud/files/dist/dav.mjs
function Ya(e = "") {
	let t = N.NONE;
	return e ? (e.includes("G") && (t |= N.READ), e.includes("W") && (t |= N.WRITE), e.includes("CK") && (t |= N.CREATE), e.includes("NV") && (t |= N.UPDATE), e.includes("D") && (t |= N.DELETE), e.includes("R") && (t |= N.SHARE), t) : t;
}
var Xa = [
	"d:getcontentlength",
	"d:getcontenttype",
	"d:getetag",
	"d:getlastmodified",
	"d:creationdate",
	"d:displayname",
	"d:quota-available-bytes",
	"d:resourcetype",
	"nc:has-preview",
	"nc:is-encrypted",
	"nc:mount-type",
	"oc:comments-unread",
	"oc:favorite",
	"oc:fileid",
	"oc:owner-display-name",
	"oc:owner-id",
	"oc:permissions",
	"oc:size"
], Za = {
	d: "DAV:",
	nc: "http://nextcloud.org/ns",
	oc: "http://owncloud.org/ns",
	ocs: "http://open-collaboration-services.org/ns"
};
function Qa() {
	return Xe.davProperties ??= [...Xa], Xe.davProperties.map((e) => `<${e} />`).join(" ");
}
function $a() {
	return Xe.davNamespaces ??= { ...Za }, Object.keys(Xe.davNamespaces).map((e) => `xmlns:${e}="${Xe.davNamespaces?.[e]}"`).join(" ");
}
function eo() {
	return `<?xml version="1.0"?>
		<d:propfind ${$a()}>
			<d:prop>
				${Qa()}
			</d:prop>
		</d:propfind>`;
}
function to() {
	return `<?xml version="1.0"?>
		<oc:filter-files ${$a()}>
			<d:prop>
				${Qa()}
			</d:prop>
			<oc:filter-rules>
				<oc:favorite>1</oc:favorite>
			</oc:filter-rules>
		</oc:filter-files>`;
}
function no(e) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<d:searchrequest ${$a()}
	xmlns:ns="https://github.com/icewind1991/SearchDAV/ns">
	<d:basicsearch>
		<d:select>
			<d:prop>
				${Qa()}
			</d:prop>
		</d:select>
		<d:from>
			<d:scope>
				<d:href>/files/${fe()?.uid}/</d:href>
				<d:depth>infinity</d:depth>
			</d:scope>
		</d:from>
		<d:where>
			<d:and>
				<d:or>
					<d:not>
						<d:eq>
							<d:prop>
								<d:getcontenttype/>
							</d:prop>
							<d:literal>httpd/unix-directory</d:literal>
						</d:eq>
					</d:not>
					<d:eq>
						<d:prop>
							<oc:size/>
						</d:prop>
						<d:literal>0</d:literal>
					</d:eq>
				</d:or>
				<d:gt>
					<d:prop>
						<d:getlastmodified/>
					</d:prop>
					<d:literal>${e}</d:literal>
				</d:gt>
			</d:and>
		</d:where>
		<d:orderby>
			<d:order>
				<d:prop>
					<d:getlastmodified/>
				</d:prop>
				<d:descending/>
			</d:order>
		</d:orderby>
		<d:limit>
			<d:nresults>100</d:nresults>
			<ns:firstresult>0</ns:firstresult>
		</d:limit>
	</d:basicsearch>
</d:searchrequest>`;
}
function ro() {
	return Ct() ? `/files/${wt()}` : `/files/${fe()?.uid}`;
}
var io = ro();
function ao() {
	let e = he("dav");
	return Ct() ? e.replace("remote.php", "public.php") : e;
}
var oo = ao();
function so(e = oo, t = {}) {
	let n = Ja(e, { headers: t });
	function r(e) {
		n.setHeaders({
			...t,
			"X-Requested-With": "XMLHttpRequest",
			requesttoken: e ?? ""
		});
	}
	return ue(r), r(me()), tn().patch("fetch", (e, t) => {
		let n = t.headers;
		return n?.method && (t.method = n.method, delete n.method), fetch(e, t);
	}), n;
}
async function co(e = {}) {
	let t = e.client ?? so(), n = e.path ?? "/", r = e.davRoot ?? io;
	return (await t.getDirectoryContents(`${r}${n}`, {
		signal: e.signal,
		details: !0,
		data: to(),
		headers: { method: "REPORT" },
		includeSelf: !0
	})).data.filter((e) => e.filename !== n).map((e) => lo(e, r));
}
function lo(e, t = io, n = oo) {
	let r = fe()?.uid;
	if (Ct()) r ??= "anonymous";
	else if (!r) throw Error("No user id found");
	let i = e.props, a = Ya(i?.permissions), o = String(i?.["owner-id"] || r), s = i.fileid || 0, c = new Date(Date.parse(e.lastmod)), l = new Date(Date.parse(i.creationdate)), u = {
		id: s,
		source: `${n}${e.filename}`,
		mtime: !isNaN(c.getTime()) && c.getTime() !== 0 ? c : void 0,
		crtime: !isNaN(l.getTime()) && l.getTime() !== 0 ? l : void 0,
		mime: e.mime || "application/octet-stream",
		displayname: i.displayname === void 0 ? void 0 : String(i.displayname),
		size: i?.size || Number.parseInt(i.getcontentlength || "0"),
		status: s < 0 ? rt.FAILED : void 0,
		permissions: a,
		owner: o,
		root: t,
		attributes: {
			...e,
			...i,
			hasPreview: i?.["has-preview"]
		}
	};
	return delete u.attributes?.props, e.type === "file" ? new nt(u) : new Qe(u);
}
//#endregion
//#region node_modules/@nextcloud/dialogs/dist/chunks/FilePicker.mjs
var uo = {
	name: "FileIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, fo = ["aria-hidden", "aria-label"], po = [
	"fill",
	"width",
	"height"
], mo = { d: "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" }, ho = { key: 0 };
function go(n, r, i, a, o, s) {
	return l(), k("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon file-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(l(), k("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [w("path", mo, [i.title ? (l(), k("title", ho, t(i.title), 1)) : _("", !0)])], 8, po))], 16, fo);
}
var _o = /* @__PURE__ */ P(uo, [["render", go]]), vo = {
	name: "MenuDownIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, yo = ["aria-hidden", "aria-label"], bo = [
	"fill",
	"width",
	"height"
], xo = { d: "M7,10L12,15L17,10H7Z" }, So = { key: 0 };
function Co(n, r, i, a, o, s) {
	return l(), k("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon menu-down-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(l(), k("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [w("path", xo, [i.title ? (l(), k("title", So, t(i.title), 1)) : _("", !0)])], 8, bo))], 16, yo);
}
var wo = /* @__PURE__ */ P(vo, [["render", Co]]), To = {
	name: "MenuUpIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Eo = ["aria-hidden", "aria-label"], Do = [
	"fill",
	"width",
	"height"
], Oo = { d: "M7,15L12,10L17,15H7Z" }, ko = { key: 0 };
function Ao(n, r, i, a, o, s) {
	return l(), k("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon menu-up-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(l(), k("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [w("path", Oo, [i.title ? (l(), k("title", ko, t(i.title), 1)) : _("", !0)])], 8, Do))], 16, Eo);
}
var jo = /* @__PURE__ */ P(To, [["render", Ao]]), Mo = {
	name: "FolderIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, No = ["aria-hidden", "aria-label"], Po = [
	"fill",
	"width",
	"height"
], Fo = { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" }, Io = { key: 0 };
function Lo(n, r, i, a, o, s) {
	return l(), k("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(l(), k("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [w("path", Fo, [i.title ? (l(), k("title", Io, t(i.title), 1)) : _("", !0)])], 8, Po))], 16, No);
}
var Ro = /* @__PURE__ */ P(Mo, [["render", Lo]]), zo = {
	"file-picker__file-icon": "_file-picker__file-icon_1aykw_9",
	"file-picker__file-icon--primary": "_file-picker__file-icon--primary_1aykw_22",
	"file-picker__file-icon-overlay": "_file-picker__file-icon-overlay_1aykw_26"
}, Bo = /* @__PURE__ */ n({
	__name: "FilePreview",
	props: {
		node: {},
		cropImagePreviews: { type: Boolean }
	},
	setup(e) {
		let t = e, n = x(zo), { previewURL: r, previewLoaded: i } = Ue(te(t, "node"), E(() => ({ cropPreview: t.cropImagePreviews }))), a = E(() => t.node.type === Ye.File), o = E(() => {
			if (t.node.type !== Ye.Folder) return null;
			if (t.node.attributes?.["is-encrypted"] === 1) return Re;
			if (t.node.attributes?.["is-tag"]) return Be;
			let e = Object.values(t.node.attributes?.["share-types"] || {}).flat();
			if (e.some((e) => e === ot.Link || e === ot.Email)) return ze;
			if (e.length > 0) return Le;
			switch (t.node.attributes?.["mount-type"]) {
				case "external":
				case "external-session": return We;
				case "group": return Ve;
				case "shared": return Le;
			}
			return null;
		});
		return (e, t) => (l(), k("div", {
			style: f(j(i) ? { backgroundImage: `url(${j(r)})` } : void 0),
			class: v(n.value["file-picker__file-icon"])
		}, [j(i) ? _("", !0) : (l(), k(O, { key: 0 }, [a.value ? (l(), C(_o, {
			key: 0,
			size: 32
		})) : (l(), k(O, { key: 1 }, [o.value ? (l(), C(j(ve), {
			key: 0,
			class: v(n.value["file-picker__file-icon-overlay"]),
			inline: "",
			path: o.value,
			size: 16
		}, null, 8, ["class", "path"])) : _("", !0), A(Ro, {
			class: v(n.value["file-picker__file-icon--primary"]),
			size: 32
		}, null, 8, ["class"])], 64))], 64))], 6));
	}
}), Vo = [
	"tabindex",
	"aria-selected",
	"data-filename"
], Ho = { class: "row-name" }, Uo = {
	class: "file-picker__name-container",
	"data-testid": "row-name"
}, Wo = ["title", "textContent"], Go = ["textContent"], Ko = { class: "row-size" }, qo = { class: "row-modified" }, Jo = /* @__PURE__ */ P(/* @__PURE__ */ n({
	__name: "FileListRow",
	props: {
		allowPickDirectory: { type: Boolean },
		selected: { type: Boolean },
		showCheckbox: { type: Boolean },
		canPick: { type: Boolean },
		node: {},
		cropImagePreviews: { type: Boolean }
	},
	emits: ["update:selected", "enterDirectory"],
	setup(n, { emit: r }) {
		let i = n, a = r, o = E(() => i.node.mtime ?? 0), s = E(() => Ee(i.node.displayname)), u = E(() => i.node.displayname.slice(0, s.value ? -s.value.length : void 0)), d = E(() => i.node.type === Ye.Folder), f = E(() => i.canPick && (i.allowPickDirectory || !d.value)), p = E(() => (i.node.permissions & N.READ) === N.READ);
		function m() {
			f.value && a("update:selected", !i.selected);
		}
		function h() {
			d.value ? p.value && a("enterDirectory", i.node) : m();
		}
		function g(e) {
			e.key === "Enter" && h();
		}
		return (r, i) => (l(), k("tr", e({
			tabindex: n.showCheckbox && !d.value ? void 0 : 0,
			"aria-selected": f.value ? n.selected : void 0,
			class: ["file-picker__row", [{
				"file-picker__row--selected": n.selected && !n.showCheckbox,
				"file-picker__row--not-navigatable": d.value && !p.value,
				"file-picker__row--not-pickable": !f.value
			}]],
			"data-filename": n.node.basename,
			"data-testid": "file-list-row"
		}, c({
			click: h,
			...!n.showCheckbox || d.value ? { keydown: g } : {}
		}, !0)), [
			n.showCheckbox ? (l(), k("td", {
				key: 0,
				class: "row-checkbox",
				onClick: b(() => {}, ["stop"])
			}, [A(j(Ie), {
				"aria-label": j(M)("Select the row for {nodename}", { nodename: u.value }),
				disabled: !f.value,
				"data-testid": "row-checkbox",
				modelValue: n.selected,
				"onUpdate:modelValue": m
			}, null, 8, [
				"aria-label",
				"disabled",
				"modelValue"
			])])) : _("", !0),
			w("td", Ho, [w("div", Uo, [
				A(Bo, {
					node: n.node,
					cropImagePreviews: n.cropImagePreviews
				}, null, 8, ["node", "cropImagePreviews"]),
				w("div", {
					class: "file-picker__file-name",
					title: u.value,
					textContent: t(u.value)
				}, null, 8, Wo),
				w("div", {
					class: "file-picker__file-extension",
					textContent: t(s.value)
				}, null, 8, Go)
			])]),
			w("td", Ko, t(j(Ze)(n.node.size || 0)), 1),
			w("td", qo, [A(j(Ge), {
				timestamp: o.value,
				ignoreSeconds: ""
			}, null, 8, ["timestamp"])])
		], 16, Vo));
	}
}), [["__scopeId", "data-v-7857e8bd"]]), Yo = {
	"aria-hidden": "true",
	class: "file-picker__row loading-row"
}, Xo = {
	key: 0,
	class: "row-checkbox"
}, Zo = { class: "row-name" }, Qo = { class: "row-wrapper" }, $o = /* @__PURE__ */ P(/* @__PURE__ */ n({
	__name: "LoadingTableRow",
	props: { showCheckbox: { type: Boolean } },
	setup(e) {
		return (t, n) => (l(), k("tr", Yo, [
			e.showCheckbox ? (l(), k("td", Xo, [...n[0] ||= [w("span", null, null, -1)]])) : _("", !0),
			w("td", Zo, [w("div", Qo, [w("span", { class: v(j(zo)["file-picker__file-icon"]) }, null, 2), n[1] ||= w("span", null, null, -1)])]),
			n[2] ||= w("td", { class: "row-size" }, [w("span")], -1),
			n[3] ||= w("td", { class: "row-modified" }, [w("span")], -1)
		]));
	}
}), [["__scopeId", "data-v-1f96131b"]]);
function es() {
	let e = Oe("files", "config", null), t = x(e?.show_hidden ?? !0), n = x(e?.sort_favorites_first ?? !0), r = x(e?.crop_image_previews ?? !0);
	return i(async () => {
		if (st()) Te.debug("Skip loading files settings - currently on public share");
		else try {
			let { data: e } = await je.get(ge("/apps/files/api/v1/configs"));
			t.value = e?.data?.show_hidden ?? !1, n.value = e?.data?.sort_favorites_first ?? !0, r.value = e?.data?.crop_image_previews ?? !0;
		} catch (e) {
			Te.error("Could not load files settings", { error: e }), xe(M("Could not load files settings"));
		}
	}), {
		showHiddenFiles: t,
		sortFavoritesFirst: n,
		cropImagePreviews: r
	};
}
function ts(e) {
	let t = (e) => e === "asc" ? "ascending" : e === "desc" ? "descending" : "none", n = Oe("files", "viewConfigs", null), r = x({
		sortBy: n?.files?.sorting_mode ?? "basename",
		order: t(n?.files?.sorting_direction ?? "asc")
	}), a = x({
		sortBy: n?.recent?.sorting_mode ?? "basename",
		order: t(n?.recent?.sorting_direction ?? "asc")
	}), o = x({
		sortBy: n?.favorites?.sorting_mode ?? "basename",
		order: t(n?.favorites?.sorting_direction ?? "asc")
	});
	i(async () => {
		if (st()) Te.debug("Skip loading files views - currently on public share");
		else try {
			let { data: e } = await je.get(ge("/apps/files/api/v1/views"));
			r.value = {
				sortBy: e?.data?.files?.sorting_mode ?? "basename",
				order: t(e?.data?.files?.sorting_direction)
			}, o.value = {
				sortBy: e?.data?.favorites?.sorting_mode ?? "basename",
				order: t(e?.data?.favorites?.sorting_direction)
			}, a.value = {
				sortBy: e?.data?.recent?.sorting_mode ?? "basename",
				order: t(e?.data?.recent?.sorting_direction)
			};
		} catch (e) {
			Te.error("Could not load files views", { error: e }), xe(M("Could not load files views"));
		}
	});
	let s = E(() => oe(e || "files") === "files" ? r.value : oe(e) === "recent" ? a.value : o.value);
	return {
		filesViewConfig: r,
		favoritesViewConfig: o,
		recentViewConfig: a,
		currentConfig: s,
		sortBy: E(() => s.value.sortBy),
		order: E(() => s.value.order)
	};
}
var ns = {
	key: 0,
	class: "row-checkbox"
}, rs = { class: "hidden-visually" }, is = ["aria-sort"], as = { class: "header-wrapper" }, os = {
	key: 2,
	style: { width: "44px" }
}, ss = ["aria-sort"], cs = {
	key: 2,
	style: { width: "44px" }
}, ls = ["aria-sort"], us = {
	key: 2,
	style: { width: "44px" }
}, ds = /* @__PURE__ */ P(/* @__PURE__ */ n({
	__name: "FileList",
	props: /* @__PURE__ */ ie({
		currentView: {},
		multiselect: { type: Boolean },
		allowPickDirectory: { type: Boolean },
		loading: { type: Boolean },
		files: {},
		canPick: { type: Function }
	}, {
		path: { required: !0 },
		pathModifiers: {},
		selectedFiles: { required: !0 },
		selectedFilesModifiers: {}
	}),
	emits: ["update:path", "update:selectedFiles"],
	setup(e) {
		let n = s(e, "path"), r = s(e, "selectedFiles"), a = e, c = x(), { currentConfig: u } = ts(a.currentView), d = E(() => c.value ?? u.value), f = E(() => d.value.sortBy === "basename" ? d.value.order === "none" ? void 0 : d.value.order : void 0), p = E(() => d.value.sortBy === "size" ? d.value.order === "none" ? void 0 : d.value.order : void 0), m = E(() => d.value.sortBy === "mtime" ? d.value.order === "none" ? void 0 : d.value.order : void 0);
		function g(e) {
			d.value.sortBy === e ? d.value.order === "ascending" ? c.value = {
				sortBy: d.value.sortBy,
				order: "descending"
			} : c.value = {
				sortBy: d.value.sortBy,
				order: "ascending"
			} : c.value = {
				sortBy: e,
				order: "ascending"
			};
		}
		let { sortFavoritesFirst: v, cropImagePreviews: b } = es(), ee = E(() => Je(a.files, {
			sortFoldersFirst: !0,
			sortFavoritesFirst: v.value,
			sortingOrder: d.value.order === "descending" ? "desc" : "asc",
			sortingMode: d.value.sortBy
		})), te = E(() => a.files.filter((e) => a.allowPickDirectory || e.type !== Ye.Folder)), ne = E(() => !a.loading && r.value.length > 0 && r.value.length >= te.value.length);
		function ie() {
			r.value.length < te.value.length ? r.value = [...te.value] : r.value = [];
		}
		function T(e) {
			r.value.includes(e) ? r.value = r.value.filter((t) => t.path !== e.path) : a.multiselect ? r.value = [...r.value, e] : r.value = [e];
		}
		function ae(e) {
			n.value = e.path;
		}
		let D = x(4), oe = x();
		{
			let e = () => re(() => {
				let e = oe.value?.parentElement?.children || [], t = oe.value?.parentElement?.clientHeight || 450;
				for (let n = 0; n < e.length; n++) oe.value?.isSameNode(e[n]) || (t -= e[n].clientHeight);
				D.value = Math.max(1, Math.floor((t - 50) / 50));
			});
			i(() => {
				window.addEventListener("resize", e), e();
			}), o(() => {
				window.removeEventListener("resize", e);
			});
		}
		return (n, i) => (l(), k("div", {
			ref_key: "fileContainer",
			ref: oe,
			class: "file-picker__files"
		}, [w("table", null, [w("thead", null, [w("tr", null, [
			e.multiselect ? (l(), k("th", ns, [w("span", rs, t(j(M)("Select entry")), 1), e.multiselect ? (l(), C(j(Ie), {
				key: 0,
				"aria-label": j(M)("Select all entries"),
				"data-testid": "select-all-checkbox",
				modelValue: ne.value,
				"onUpdate:modelValue": ie
			}, null, 8, ["aria-label", "modelValue"])) : _("", !0)])) : _("", !0),
			w("th", {
				"aria-sort": f.value,
				class: "row-name"
			}, [w("div", as, [i[3] ||= w("span", { class: "file-picker__header-preview" }, null, -1), A(j(_e), {
				"data-test": "file-picker_sort-name",
				variant: "tertiary",
				wide: "",
				onClick: i[0] ||= (e) => g("basename")
			}, {
				icon: S(() => [f.value === "ascending" ? (l(), C(jo, {
					key: 0,
					size: 20
				})) : f.value === "descending" ? (l(), C(wo, {
					key: 1,
					size: 20
				})) : (l(), k("span", os))]),
				default: S(() => [y(" " + t(j(M)("Name")), 1)]),
				_: 1
			})])], 8, is),
			w("th", {
				"aria-sort": p.value,
				class: "row-size"
			}, [A(j(_e), {
				variant: "tertiary",
				wide: "",
				onClick: i[1] ||= (e) => g("size")
			}, {
				icon: S(() => [p.value === "ascending" ? (l(), C(jo, {
					key: 0,
					size: 20
				})) : p.value === "descending" ? (l(), C(wo, {
					key: 1,
					size: 20
				})) : (l(), k("span", cs))]),
				default: S(() => [y(" " + t(j(M)("Size")), 1)]),
				_: 1
			})], 8, ss),
			w("th", {
				"aria-sort": m.value,
				class: "row-modified"
			}, [A(j(_e), {
				variant: "tertiary",
				wide: "",
				onClick: i[2] ||= (e) => g("mtime")
			}, {
				icon: S(() => [m.value === "ascending" ? (l(), C(jo, {
					key: 0,
					size: 20
				})) : m.value === "descending" ? (l(), C(wo, {
					key: 1,
					size: 20
				})) : (l(), k("span", us))]),
				default: S(() => [y(" " + t(j(M)("Modified")), 1)]),
				_: 1
			})], 8, ls)
		])]), w("tbody", null, [e.loading ? (l(!0), k(O, { key: 0 }, h(D.value, (t) => (l(), C($o, {
			key: t,
			showCheckbox: e.multiselect
		}, null, 8, ["showCheckbox"]))), 128)) : (l(!0), k(O, { key: 1 }, h(ee.value, (t) => (l(), C(Jo, {
			key: t.fileid || t.path,
			allowPickDirectory: e.allowPickDirectory,
			showCheckbox: e.multiselect,
			canPick: (e.multiselect || r.value.length === 0 || r.value.includes(t)) && (e.canPick === void 0 || e.canPick(t)),
			selected: r.value.includes(t),
			node: t,
			cropImagePreviews: j(b),
			"onUpdate:selected": (e) => T(t),
			onEnterDirectory: ae
		}, null, 8, [
			"allowPickDirectory",
			"showCheckbox",
			"canPick",
			"selected",
			"node",
			"cropImagePreviews",
			"onUpdate:selected"
		]))), 128))])])], 512));
	}
}), [["__scopeId", "data-v-412efd5c"]]), fs = {
	name: "HomeIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, ps = ["aria-hidden", "aria-label"], ms = [
	"fill",
	"width",
	"height"
], hs = { d: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" }, gs = { key: 0 };
function _s(n, r, i, a, o, s) {
	return l(), k("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon home-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(l(), k("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [w("path", hs, [i.title ? (l(), k("title", gs, t(i.title), 1)) : _("", !0)])], 8, ms))], 16, ps);
}
var vs = /* @__PURE__ */ P(fs, [["render", _s]]), ys = {
	name: "PlusIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, bs = ["aria-hidden", "aria-label"], xs = [
	"fill",
	"width",
	"height"
], Ss = { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, Cs = { key: 0 };
function ws(n, r, i, a, o, s) {
	return l(), k("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon plus-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(l(), k("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [w("path", Ss, [i.title ? (l(), k("title", Cs, t(i.title), 1)) : _("", !0)])], 8, xs))], 16, bs);
}
var Ts = /* @__PURE__ */ P(ys, [["render", ws]]), Es = /* @__PURE__ */ P(/* @__PURE__ */ n({
	__name: "FilePickerBreadcrumbs",
	props: /* @__PURE__ */ ie({ showMenu: { type: Boolean } }, {
		path: { required: !0 },
		pathModifiers: {}
	}),
	emits: /* @__PURE__ */ ie(["createNode"], ["update:path"]),
	setup(e, { emit: t }) {
		let n = s(e, "path"), r = t, i = x(!1), a = x(""), o = g("nameInput");
		function c() {
			let e = a.value.trim(), t = o.value?.$el?.querySelector("input"), n = "";
			try {
				et(e);
			} catch (e) {
				if (!(e instanceof $e)) throw e;
				switch (e.reason) {
					case tt.Character:
						n = M("\"{char}\" is not allowed inside a folder name.", { char: e.segment });
						break;
					case tt.ReservedName:
						n = M("\"{segment}\" is a reserved name and not allowed for folder names.", { segment: e.segment });
						break;
					case tt.Extension:
						n = M("Folder names must not end with \"{extension}\".", { extension: e.segment });
						break;
					default: n = M("Invalid folder name.");
				}
			}
			return t && t.setCustomValidity(n), n === "";
		}
		function u() {
			let e = a.value.trim();
			c() && (i.value = !1, r("createNode", e), a.value = "");
		}
		let d = E(() => n.value.split("/").filter((e) => e !== "").map((e, t, n) => ({
			name: e,
			path: "/" + n.slice(0, t + 1).join("/")
		})));
		return (t, r) => (l(), C(j(Fe), { class: "file-picker__breadcrumbs" }, ce({
			default: S(() => [A(j(Me), {
				name: j(M)("All files"),
				title: j(M)("Home"),
				onClick: r[0] ||= (e) => n.value = "/"
			}, {
				icon: S(() => [A(vs, { size: 20 })]),
				_: 1
			}, 8, ["name", "title"]), (l(!0), k(O, null, h(d.value, (e) => (l(), C(j(Me), {
				key: e.path,
				name: e.name,
				title: e.path,
				onClick: (t) => n.value = e.path
			}, null, 8, [
				"name",
				"title",
				"onClick"
			]))), 128))]),
			_: 2
		}, [e.showMenu ? {
			name: "actions",
			fn: S(() => [A(j(Se), {
				open: i.value,
				"onUpdate:open": r[2] ||= (e) => i.value = e,
				"aria-label": j(M)("Create directory"),
				forceMenu: !0,
				forceName: !0,
				menuName: j(M)("New"),
				variant: "secondary",
				onClose: r[3] ||= (e) => a.value = ""
			}, {
				icon: S(() => [A(Ts, { size: 20 })]),
				default: S(() => [A(j(St), {
					ref_key: "nameInput",
					ref: o,
					modelValue: a.value,
					"onUpdate:modelValue": [r[1] ||= (e) => a.value = e, c],
					label: j(M)("New folder"),
					placeholder: j(M)("New folder name"),
					onSubmit: u
				}, {
					icon: S(() => [A(Ro, { size: 20 })]),
					_: 1
				}, 8, [
					"modelValue",
					"label",
					"placeholder"
				])]),
				_: 1
			}, 8, [
				"open",
				"aria-label",
				"menuName"
			])]),
			key: "0"
		} : void 0]), 1024));
	}
}), [["__scopeId", "data-v-b448b141"]]), Ds = {
	name: "CloseIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Os = ["aria-hidden", "aria-label"], ks = [
	"fill",
	"width",
	"height"
], As = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, js = { key: 0 };
function Ms(n, r, i, a, o, s) {
	return l(), k("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(l(), k("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [w("path", As, [i.title ? (l(), k("title", js, t(i.title), 1)) : _("", !0)])], 8, ks))], 16, Os);
}
var Ns = /* @__PURE__ */ P(Ds, [["render", Ms]]), Ps = {
	name: "MagnifyIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Fs = ["aria-hidden", "aria-label"], Is = [
	"fill",
	"width",
	"height"
], Ls = { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, Rs = { key: 0 };
function zs(n, r, i, a, o, s) {
	return l(), k("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon magnify-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(l(), k("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [w("path", Ls, [i.title ? (l(), k("title", Rs, t(i.title), 1)) : _("", !0)])], 8, Is))], 16, Fs);
}
var Bs = /* @__PURE__ */ P(Ps, [["render", zs]]);
function Vs(e) {
	let t = [
		{
			id: "files",
			label: M("All files"),
			icon: qe
		},
		{
			id: "recent",
			label: M("Recent"),
			icon: Ke
		},
		{
			id: "favorites",
			label: M("Favorites"),
			icon: He
		}
	];
	return {
		allViews: t,
		availableViews: e.value ? t.filter(({ id: e }) => e === "files") : t
	};
}
var Hs = {
	key: 0,
	class: "file-picker__side"
}, Us = /* @__PURE__ */ P(/* @__PURE__ */ n({
	__name: "FilePickerNavigation",
	props: {
		currentView: {},
		filterString: {},
		isCollapsed: { type: Boolean },
		disabledNavigation: { type: Boolean }
	},
	emits: ["update:currentView", "update:filterString"],
	setup(e, { emit: n }) {
		let r = e, i = n, { availableViews: a } = Vs(x(fe() === null)), o = E(() => a.filter((e) => e.id === r.currentView)[0] ?? a[0]), s = (e) => i("update:filterString", e.toString());
		return (n, r) => (l(), k(O, null, [A(j(at), {
			class: "file-picker__filter-input",
			label: j(M)("Filter file list"),
			showTrailingButton: !!e.filterString,
			modelValue: e.filterString,
			"onUpdate:modelValue": s,
			onTrailingButtonClick: r[0] ||= (e) => s("")
		}, {
			"trailing-button-icon": S(() => [A(Ns, { size: 16 })]),
			default: S(() => [A(Bs, { size: 16 })]),
			_: 1
		}, 8, [
			"label",
			"showTrailingButton",
			"modelValue"
		]), j(a).length > 1 && !e.disabledNavigation ? (l(), k(O, { key: 0 }, [e.isCollapsed ? (l(), C(j(ke), {
			key: 1,
			"aria-label": j(M)("Current view selector"),
			clearable: !1,
			searchable: !1,
			options: j(a),
			modelValue: o.value,
			"onUpdate:modelValue": r[1] ||= (e) => i("update:currentView", e.id)
		}, null, 8, [
			"aria-label",
			"options",
			"modelValue"
		])) : (l(), k("ul", Hs, [(l(!0), k(O, null, h(j(a), (r) => (l(), k("li", { key: r.id }, [A(j(_e), {
			variant: e.currentView === r.id ? "primary" : "tertiary",
			wide: !0,
			onClick: (e) => n.$emit("update:currentView", r.id)
		}, {
			icon: S(() => [A(j(ve), {
				path: r.icon,
				size: 20
			}, null, 8, ["path"])]),
			default: S(() => [y(" " + t(r.label), 1)]),
			_: 2
		}, 1032, ["variant", "onClick"])]))), 128))]))], 64)) : _("", !0)], 64));
	}
}), [["__scopeId", "data-v-e1c54e23"]]);
async function Ws({ client: e, signal: t }) {
	let n = Math.round(Date.now() / 1e3) - 1209600, { data: r } = await e.search("/", {
		signal: t,
		details: !0,
		data: no(n)
	});
	return r.results.map((e) => lo(e));
}
async function Gs({ client: e, path: t, signal: n }) {
	let r = (await e.getDirectoryContents(Ce(io, t), {
		signal: n,
		details: !0,
		includeSelf: !0,
		data: eo()
	})).data.map((e) => lo(e));
	return {
		contents: r.filter(({ path: e }) => e !== t),
		folder: r.find(({ path: e }) => t === e)
	};
}
async function Ks(e, t) {
	let { data: n } = await e.stat(Ce(io, t), {
		details: !0,
		data: eo()
	});
	return lo(n);
}
function qs(e, t) {
	let n = so(), r = T([]), a = T(null), o = x(!0), s;
	async function c(e) {
		let i = Ce(t.value, e);
		await n.createDirectory(Ce(io, i));
		let a = await Ks(n, i);
		return r.value = [...r.value, a], a;
	}
	async function l() {
		s &&= (s.abort(), void 0), s = new AbortController(), o.value = !0;
		try {
			if (e.value === "favorites") r.value = await co({
				client: n,
				path: t.value,
				signal: s.signal
			}), a.value = null;
			else if (e.value === "recent") r.value = await Ws({
				client: n,
				signal: s.signal
			}), a.value = null;
			else {
				let e = await Gs({
					client: n,
					path: t.value,
					signal: s.signal
				});
				a.value = e.folder, r.value = e.contents;
			}
		} catch (e) {
			if (e instanceof Error && e.name === "AbortError") return;
			throw e;
		} finally {
			s = void 0, o.value = !1;
		}
	}
	return u([e, t], () => l()), i(() => l()), {
		isLoading: o,
		files: r,
		folder: a,
		loadFiles: l,
		createDirectory: c
	};
}
function Js(e) {
	let t = E(() => e.value.map((e) => e.split("/")));
	return { isSupportedMimeType: (e) => {
		let n = e.split("/");
		return t.value.some(([e, t]) => (n[0] === e || e === "*") && (n[1] === t || t === "*"));
	} };
}
var Ys = { class: "file-picker__main" }, Xs = {
	key: 1,
	class: "file-picker__view"
}, Zs = /* @__PURE__ */ P(/* @__PURE__ */ n({
	__name: "FilePicker",
	props: {
		buttons: {},
		name: {},
		allowPickDirectory: {
			type: Boolean,
			default: !1
		},
		noMenu: {
			type: Boolean,
			default: !1
		},
		disabledNavigation: {
			type: Boolean,
			default: !1
		},
		filterFn: {
			type: Function,
			default: void 0
		},
		canPickFn: {
			type: Function,
			default: void 0
		},
		mimetypeFilter: { default: () => [] },
		multiselect: {
			type: Boolean,
			default: !1
		},
		path: { default: void 0 }
	},
	emits: ["close"],
	setup(e, { emit: n }) {
		let r = e, a = n, o = x(!0), s = x("files"), c = x(window?.sessionStorage.getItem("NC.FilePicker.LastPath") || "/"), d = x(""), f = E({
			get: () => s.value === "files" ? d.value || r.path || c.value : "/",
			set: (e) => {
				d.value = e;
			}
		}), p = T([]), m = x(""), { files: h, folder: g, isLoading: _, loadFiles: v, createDirectory: y } = qs(s, f);
		u([d], () => {
			r.path === void 0 && d.value && window.sessionStorage.setItem("NC.FilePicker.LastPath", d.value), p.value = [], m.value = "";
		});
		let b = !1, ee = E(() => {
			let e = p.value.length === 0 && r.allowPickDirectory && g.value && (!r.canPickFn || r.canPickFn(g.value)) ? [g.value] : p.value;
			return (typeof r.buttons == "function" ? r.buttons(e, f.value, s.value) : r.buttons).map((t) => ({
				...t,
				disabled: t.disabled || _.value,
				callback: () => {
					b = !0, ne(t.callback, e);
				}
			}));
		});
		async function ne(e, t) {
			await e(t), a("close", t), b = !1;
		}
		let re = E(() => s.value === "favorites" ? M("Favorites") : s.value === "recent" ? M("Recent") : ""), { isSupportedMimeType: ie } = Js(te(r, "mimetypeFilter"));
		i(() => v());
		let { showHiddenFiles: ae } = es(), D = E(() => {
			let e = h.value;
			return ae.value || (e = e.filter((e) => !e.basename.startsWith("."))), r.mimetypeFilter.length > 0 && (e = e.filter((e) => e.type === "folder" || e.mime && ie(e.mime))), m.value && (e = e.filter((e) => e.basename.toLowerCase().includes(m.value.toLowerCase()))), r.filterFn && (e = e.filter((e) => r.filterFn(e))), e;
		}), O = E(() => s.value === "files" ? M("Upload some content or sync with your devices!") : s.value === "recent" ? M("Files and folders you recently modified will show up here.") : M("Files and folders you mark as favorite will show up here."));
		async function oe(e) {
			try {
				let t = await y(e);
				d.value = t.path, de("files:node:created", h.value.filter((t) => t.basename === e)[0]);
			} catch (t) {
				Te.warn("Could not create new folder", {
					name: e,
					error: t
				}), xe(M("Could not create the new folder"));
			}
		}
		function se(e) {
			!e && !b && a("close");
		}
		return (n, r) => (l(), C(j(we), {
			open: o.value,
			"onUpdate:open": [r[6] ||= (e) => o.value = e, se],
			buttons: ee.value,
			name: e.name,
			size: "large",
			contentClasses: "file-picker__content",
			dialogClasses: "file-picker",
			navigationClasses: "file-picker__navigation"
		}, {
			navigation: S(({ isCollapsed: t }) => [A(Us, {
				currentView: s.value,
				"onUpdate:currentView": r[0] ||= (e) => s.value = e,
				filterString: m.value,
				"onUpdate:filterString": r[1] ||= (e) => m.value = e,
				isCollapsed: t,
				disabledNavigation: e.disabledNavigation
			}, null, 8, [
				"currentView",
				"filterString",
				"isCollapsed",
				"disabledNavigation"
			])]),
			default: S(() => [w("div", Ys, [s.value === "files" ? (l(), C(Es, {
				key: 0,
				path: f.value,
				"onUpdate:path": r[2] ||= (e) => f.value = e,
				showMenu: !e.noMenu,
				onCreateNode: oe
			}, null, 8, ["path", "showMenu"])) : (l(), k("div", Xs, [w("h3", null, t(re.value), 1)])), j(_) || D.value.length > 0 ? (l(), C(ds, {
				key: 2,
				path: f.value,
				"onUpdate:path": [r[3] ||= (e) => f.value = e, r[5] ||= (e) => s.value = "files"],
				selectedFiles: p.value,
				"onUpdate:selectedFiles": r[4] ||= (e) => p.value = e,
				allowPickDirectory: e.allowPickDirectory,
				currentView: s.value,
				files: D.value,
				multiselect: e.multiselect,
				loading: j(_),
				name: re.value,
				canPick: e.canPickFn
			}, null, 8, [
				"path",
				"selectedFiles",
				"allowPickDirectory",
				"currentView",
				"files",
				"multiselect",
				"loading",
				"name",
				"canPick"
			])) : m.value ? (l(), C(j(Ae), {
				key: 3,
				name: j(M)("No matching files"),
				description: j(M)("No files matching your filter were found.")
			}, {
				icon: S(() => [A(_o)]),
				_: 1
			}, 8, ["name", "description"])) : (l(), C(j(Ae), {
				key: 4,
				name: j(M)("No files in here"),
				description: O.value
			}, {
				icon: S(() => [A(_o)]),
				_: 1
			}, 8, ["name", "description"]))])]),
			_: 1
		}, 8, [
			"open",
			"buttons",
			"name"
		]));
	}
}), [["__scopeId", "data-v-39182aaf"]]);
//#endregion
export { Zs as default };
