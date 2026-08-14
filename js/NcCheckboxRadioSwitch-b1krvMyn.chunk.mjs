import { At as e, Cn as t, Ct as n, D as r, Ft as i, Gt as a, Ht as o, Kt as s, Lt as c, Ot as l, Ut as u, _t as d, bn as f, bt as p, en as m, gt as h, ht as g, i as _, mt as v, n as ee, nt as y, r as b, t as x, vt as S, xt as te, yt as ne } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { T as re } from "./mdi-CpchYUUV-BlQjFBKG.chunk.mjs";
import { t as ie } from "./NcLoadingIcon-BOVpFVQz-B0B1cMOR.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/NcIconToggleSwitch-CRvGt4su.mjs
var ae = "<svg\n	xmlns=\"http://www.w3.org/2000/svg\"\n	viewBox=\"0 0 24 12\">\n	<path d=\"M17,1H7A5,5 0 0,0 2,6 5,5 0 0,0 7,11H17A5,5 0 0,0 22,6 5,5 0 0,0 17,1Z\" />\n	<circle\n		cy=\"6\"\n		r=\"3\"\n		fill=\"var(--color-main-background)\" />\n</svg>", oe = /* @__PURE__ */ r(/* @__PURE__ */ n({
	__name: "NcIconToggleSwitch",
	props: {
		checked: { type: Boolean },
		size: { default: 34 },
		inline: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		y((e) => ({
			v6bd152af: t.value,
			v16fd8ca9: n.value
		}));
		let t = v(() => e.checked ? "var(--color-primary-element)" : "var(--color-text-maxcontrast)"), n = v(() => e.checked ? "calc(17 / 24 * 100%)" : "calc(7 / 24 * 100%)");
		return (t, n) => (c(), h(re, {
			class: f(t.$style.iconToggleSwitch),
			svg: ae,
			size: e.size,
			inline: e.inline
		}, null, 8, [
			"class",
			"size",
			"inline"
		]));
	}
}), [["__cssModules", { $style: {
	"material-design-icon": "_material-design-icon_63AMQ",
	iconToggleSwitch: "_iconToggleSwitch_IKWaj"
} }]]), C = /* @__PURE__ */ Symbol.for("insideRadioGroup");
function w() {
	return l(C, void 0);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcCheckboxRadioSwitch-DVdt5Hkq.mjs
var T = {
	name: "CheckboxBlankOutlineIcon",
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
}, E = ["aria-hidden", "aria-label"], D = [
	"fill",
	"width",
	"height"
], O = { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, k = { key: 0 };
function A(n, r, i, a, o, s) {
	return c(), S("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon checkbox-blank-outline-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(c(), S("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [g("path", O, [i.title ? (c(), S("title", k, t(i.title), 1)) : d("", !0)])], 8, D))], 16, E);
}
var j = /* @__PURE__ */ r(T, [["render", A]]), M = {
	name: "CheckboxMarkedIcon",
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
}, N = ["aria-hidden", "aria-label"], P = [
	"fill",
	"width",
	"height"
], F = { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, I = { key: 0 };
function L(n, r, i, a, o, s) {
	return c(), S("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon checkbox-marked-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(c(), S("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [g("path", F, [i.title ? (c(), S("title", I, t(i.title), 1)) : d("", !0)])], 8, P))], 16, N);
}
var R = /* @__PURE__ */ r(M, [["render", L]]), z = {
	name: "MinusBoxIcon",
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
}, B = ["aria-hidden", "aria-label"], V = [
	"fill",
	"width",
	"height"
], H = { d: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, U = { key: 0 };
function W(n, r, i, a, o, s) {
	return c(), S("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon minus-box-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(c(), S("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [g("path", H, [i.title ? (c(), S("title", U, t(i.title), 1)) : d("", !0)])], 8, V))], 16, B);
}
var G = /* @__PURE__ */ r(z, [["render", W]]), K = {
	name: "RadioboxBlankIcon",
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
}, se = ["aria-hidden", "aria-label"], ce = [
	"fill",
	"width",
	"height"
], le = { d: "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" }, ue = { key: 0 };
function de(n, r, i, a, o, s) {
	return c(), S("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon radiobox-blank-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(c(), S("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [g("path", le, [i.title ? (c(), S("title", ue, t(i.title), 1)) : d("", !0)])], 8, ce))], 16, se);
}
var fe = /* @__PURE__ */ r(K, [["render", de]]), pe = {
	name: "RadioboxMarkedIcon",
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
}, me = ["aria-hidden", "aria-label"], he = [
	"fill",
	"width",
	"height"
], ge = { d: "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z" }, _e = { key: 0 };
function ve(n, r, i, a, o, s) {
	return c(), S("span", e(n.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon radiobox-marked-icon",
		role: "img",
		onClick: r[0] ||= (e) => n.$emit("click", e)
	}), [(c(), S("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [g("path", ge, [i.title ? (c(), S("title", _e, t(i.title), 1)) : d("", !0)])], 8, he))], 16, me);
}
var ye = /* @__PURE__ */ r(pe, [["render", ve]]), q = "checkbox", J = "radio", Y = "switch", X = "button", be = {
	name: "NcCheckboxContent",
	components: {
		NcLoadingIcon: ie,
		NcIconToggleSwitch: oe
	},
	props: {
		iconClass: {
			type: [String, Object],
			default: null
		},
		textClass: {
			type: [String, Object],
			default: null
		},
		type: {
			type: String,
			default: "checkbox",
			validator: (e) => [
				q,
				J,
				Y,
				X
			].includes(e)
		},
		buttonVariant: {
			type: Boolean,
			default: !1
		},
		isChecked: {
			type: Boolean,
			default: !1
		},
		indeterminate: {
			type: Boolean,
			default: !1
		},
		loading: {
			type: Boolean,
			default: !1
		},
		iconSize: {
			type: Number,
			default: 24
		},
		labelId: {
			type: String,
			required: !0
		},
		descriptionId: {
			type: String,
			required: !0
		}
	},
	computed: {
		isButtonType() {
			return this.type === X;
		},
		isSwitchType() {
			return this.type === Y;
		},
		checkboxRadioIconElement() {
			return this.type === J ? this.isChecked ? ye : fe : this.indeterminate ? G : this.isChecked ? R : j;
		}
	}
}, xe = {
	key: 0,
	class: "checkbox-content__wrapper"
}, Se = ["id"], Ce = ["id"];
function we(e, t, n, r, i, s) {
	let l = u("NcLoadingIcon"), p = u("NcIconToggleSwitch");
	return c(), S("span", { class: f(["checkbox-content", {
		["checkbox-content-" + n.type]: !0,
		"checkbox-content--button-variant": n.buttonVariant,
		"checkbox-content--has-text": !!e.$slots.default
	}]) }, [g("span", {
		class: f(["checkbox-content__icon", {
			"checkbox-content__icon--checked": n.isChecked,
			"checkbox-content__icon--has-description": !s.isButtonType && e.$slots.description,
			[n.iconClass]: !0
		}]),
		"aria-hidden": !0,
		inert: ""
	}, [o(e.$slots, "icon", {
		checked: n.isChecked,
		loading: n.loading
	}, () => [n.loading ? (c(), h(l, { key: 0 })) : s.isSwitchType ? (c(), h(p, {
		key: 1,
		checked: n.isChecked,
		size: n.iconSize,
		inline: ""
	}, null, 8, ["checked", "size"])) : n.buttonVariant ? d("", !0) : (c(), h(a(s.checkboxRadioIconElement), {
		key: 2,
		size: n.iconSize
	}, null, 8, ["size"]))], !0)], 2), e.$slots.default || e.$slots.description ? (c(), S("span", xe, [e.$slots.default ? (c(), S("span", {
		key: 0,
		id: n.labelId,
		class: f(["checkbox-content__text", n.textClass])
	}, [o(e.$slots, "default", {}, void 0, !0)], 10, Se)) : d("", !0), !s.isButtonType && e.$slots.description ? (c(), S("span", {
		key: 1,
		id: n.descriptionId,
		class: "checkbox-content__description"
	}, [o(e.$slots, "description", {}, void 0, !0)], 8, Ce)) : d("", !0)])) : d("", !0)], 2);
}
var Te = /* @__PURE__ */ r(be, [["render", we], ["__scopeId", "data-v-5ca1e30f"]]);
b();
var Z = {
	name: "NcCheckboxRadioSwitch",
	components: { NcCheckboxContent: Te },
	inheritAttrs: !1,
	props: {
		id: {
			type: String,
			default: () => "checkbox-radio-switch-" + x(),
			validator: (e) => e.trim() !== ""
		},
		wrapperId: {
			type: String,
			default: null
		},
		name: {
			type: String,
			default: null
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: "checkbox",
			validator: (e) => [
				q,
				J,
				Y,
				X
			].includes(e)
		},
		buttonVariant: {
			type: Boolean,
			default: !1
		},
		buttonVariantGrouped: {
			type: String,
			default: "no",
			validator: (e) => [
				"no",
				"vertical",
				"horizontal"
			].includes(e)
		},
		modelValue: {
			type: [
				Boolean,
				Array,
				String
			],
			default: !1
		},
		value: {
			type: String,
			default: null
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		indeterminate: {
			type: Boolean,
			default: !1
		},
		required: {
			type: Boolean,
			default: !1
		},
		loading: {
			type: Boolean,
			default: !1
		},
		wrapperElement: {
			type: String,
			default: null
		},
		class: {
			type: [
				String,
				Array,
				Object
			],
			default: ""
		},
		style: {
			type: [
				String,
				Array,
				Object
			],
			default: ""
		},
		description: {
			type: String,
			default: null
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = w();
		return i(() => n?.value.register(!1)), {
			internalType: v(() => n?.value ? J : e.type),
			internalModelValue: v({
				get() {
					return n?.value ? n.value.modelValue : e.modelValue;
				},
				set(e) {
					n?.value ? n.value.onUpdate(e) : t("update:modelValue", e);
				}
			}),
			labelId: x(),
			descriptionId: x()
		};
	},
	computed: {
		isButtonType() {
			return this.internalType === X;
		},
		computedWrapperElement() {
			return this.isButtonType ? "button" : this.wrapperElement === null ? "span" : this.wrapperElement;
		},
		listeners() {
			return this.isButtonType ? { click: this.onToggle } : { change: this.onToggle };
		},
		iconSize() {
			return this.internalType === Y ? 36 : 20;
		},
		cssIconSize() {
			return this.iconSize + "px";
		},
		cssIconHeight() {
			return this.internalType === Y ? "16px" : this.cssIconSize;
		},
		inputType() {
			return [
				q,
				J,
				X
			].includes(this.internalType) ? this.internalType : q;
		},
		isChecked() {
			return this.value === null ? this.internalModelValue === !0 : Array.isArray(this.internalModelValue) ? [...this.internalModelValue].indexOf(this.value) > -1 : this.internalModelValue === this.value;
		},
		hasIndeterminate() {
			return [q, J].includes(this.inputType);
		}
	},
	mounted() {
		if (this.name && this.internalType === q && !Array.isArray(this.internalModelValue)) throw Error("When using groups of checkboxes, the updated value will be an array.");
		if (this.name && this.internalType === Y) throw Error("Switches are not made to be used for data sets. Please use checkboxes instead.");
		if (typeof this.internalModelValue != "boolean" && this.internalType === Y) throw Error("Switches can only be used with boolean as modelValue prop.");
	},
	methods: {
		t: _,
		n: ee,
		onToggle(e) {
			if (!(this.disabled || e.target.tagName.toLowerCase() === "a")) {
				if (this.internalType === J) {
					this.internalModelValue = this.value;
					return;
				}
				if (this.internalType === Y) {
					this.internalModelValue = !this.isChecked;
					return;
				}
				if (typeof this.internalModelValue == "boolean") {
					this.internalModelValue = !this.internalModelValue;
					return;
				}
				this.internalModelValue = this.isChecked ? this.internalModelValue.filter((e) => e !== this.value) : [...this.internalModelValue, this.value];
			}
		}
	}
}, Q = () => {
	y((e) => ({
		v5ac25550: e.cssIconSize,
		d98ce684: e.cssIconHeight
	}));
}, $ = Z.setup;
Z.setup = $ ? (e, t) => (Q(), $(e, t)) : Q;
var Ee = [
	"id",
	"aria-labelledby",
	"aria-describedby",
	"aria-label",
	"disabled",
	"type",
	"value",
	"checked",
	".indeterminate",
	"required",
	"name"
];
function De(n, r, i, l, f, g) {
	let _ = u("NcCheckboxContent");
	return c(), h(a(g.computedWrapperElement), e({
		id: i.wrapperId ?? (g.isButtonType ? i.id : null),
		"aria-label": g.isButtonType && i.ariaLabel ? i.ariaLabel : void 0,
		class: ["checkbox-radio-switch", [n.$props.class, {
			["checkbox-radio-switch-" + l.internalType]: l.internalType,
			"checkbox-radio-switch--checked": g.isChecked,
			"checkbox-radio-switch--disabled": i.disabled,
			"checkbox-radio-switch--indeterminate": g.hasIndeterminate ? i.indeterminate : !1,
			"checkbox-radio-switch--button-variant": i.buttonVariant,
			"checkbox-radio-switch--button-variant-v-grouped": i.buttonVariant && i.buttonVariantGrouped === "vertical",
			"checkbox-radio-switch--button-variant-h-grouped": i.buttonVariant && i.buttonVariantGrouped === "horizontal",
			"button-vue": g.isButtonType
		}]],
		style: i.style,
		type: g.isButtonType ? "button" : null
	}, g.isButtonType ? n.$attrs : {}, s(g.isButtonType ? g.listeners : {})), {
		default: m(() => [g.isButtonType ? d("", !0) : (c(), S("input", e({
			key: 0,
			id: i.id,
			"aria-labelledby": !g.isButtonType && !i.ariaLabel ? l.labelId : null,
			"aria-describedby": !g.isButtonType && (i.description || n.$slots.description) ? l.descriptionId : null,
			"aria-label": i.ariaLabel || void 0,
			class: "checkbox-radio-switch__input",
			disabled: i.disabled,
			type: g.inputType,
			value: i.value,
			checked: g.isChecked,
			".indeterminate": g.hasIndeterminate ? i.indeterminate : null,
			required: i.required,
			name: i.name
		}, n.$attrs, s(g.listeners, !0)), null, 48, Ee)), te(_, {
			id: g.isButtonType ? void 0 : `${i.id}-label`,
			class: "checkbox-radio-switch__content",
			iconClass: "checkbox-radio-switch__icon",
			textClass: "checkbox-radio-switch__text",
			type: l.internalType,
			indeterminate: g.hasIndeterminate ? i.indeterminate : !1,
			buttonVariant: i.buttonVariant,
			isChecked: g.isChecked,
			loading: i.loading,
			labelId: l.labelId,
			descriptionId: l.descriptionId,
			iconSize: g.iconSize,
			onClick: g.onToggle
		}, ne({
			icon: m(() => [o(n.$slots, "icon", {}, void 0, !0)]),
			_: 2
		}, [n.$slots.description || i.description ? {
			name: "description",
			fn: m(() => [o(n.$slots, "description", {}, () => [p(t(i.description), 1)], !0)]),
			key: "0"
		} : void 0, n.$slots.default ? {
			name: "default",
			fn: m(() => [o(n.$slots, "default", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, [
			"id",
			"type",
			"indeterminate",
			"buttonVariant",
			"isChecked",
			"loading",
			"labelId",
			"descriptionId",
			"iconSize",
			"onClick"
		])]),
		_: 3
	}, 16, [
		"id",
		"aria-label",
		"class",
		"style",
		"type"
	]);
}
var Oe = /* @__PURE__ */ r(Z, [["render", De], ["__scopeId", "data-v-c34c63a4"]]);
//#endregion
export { Oe as t };
