import { D as e, E as t, Gn as n, In as r, Ln as i, Nn as a, On as o, Pn as s, Q as c, T as l, Tn as u, Wt as d, X as f, an as p, cn as m, dn as ee, fr as h, gn as te, hr as g, in as _, ln as v, nn as y, on as b, rn as x, sn as ne, t as S, vn as C } from "./createElementId-BhyzukIw.chunk.mjs";
import { t as re } from "./NcLoadingIcon-C4if0V8M.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/NcIconToggleSwitch.mjs
var ie = "<svg\n	xmlns=\"http://www.w3.org/2000/svg\"\n	viewBox=\"0 0 24 12\">\n	<path d=\"M17,1H7A5,5 0 0,0 2,6 5,5 0 0,0 7,11H17A5,5 0 0,0 22,6 5,5 0 0,0 17,1Z\" />\n	<circle\n		cy=\"6\"\n		r=\"3\"\n		fill=\"var(--color-main-background)\" />\n</svg>", ae = /* @__PURE__ */ c(/* @__PURE__ */ ee({
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
		d((e) => ({
			v6bd152af: t.value,
			v16fd8ca9: n.value
		}));
		let t = y(() => e.checked ? "var(--color-primary-element)" : "var(--color-text-maxcontrast)"), n = y(() => e.checked ? "calc(17 / 24 * 100%)" : "calc(7 / 24 * 100%)");
		return (t, n) => (o(), _(f, {
			class: h(t.$style.iconToggleSwitch),
			svg: ie,
			size: e.size,
			inline: e.inline
		}, null, 8, [
			"class",
			"size",
			"inline"
		]));
	}
}), [["__cssModules", { $style: {
	"material-design-icon": "_material-design-icon_zYnoU",
	iconToggleSwitch: "_iconToggleSwitch_hhj0H"
} }]]), oe = /* @__PURE__ */ Symbol.for("insideRadioGroup");
function w() {
	return te(oe, void 0);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcCheckboxRadioSwitch.mjs
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
function A(e, t, n, r, i, a) {
	return o(), b("span", C(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon checkbox-blank-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(o(), b("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [x("path", O, [n.title ? (o(), b("title", k, g(n.title), 1)) : p("", !0)])], 8, D))], 16, E);
}
var j = /* @__PURE__ */ c(T, [["render", A]]), M = {
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
function L(e, t, n, r, i, a) {
	return o(), b("span", C(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon checkbox-marked-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(o(), b("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [x("path", F, [n.title ? (o(), b("title", I, g(n.title), 1)) : p("", !0)])], 8, P))], 16, N);
}
var R = /* @__PURE__ */ c(M, [["render", L]]), z = {
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
function W(e, t, n, r, i, a) {
	return o(), b("span", C(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon minus-box-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(o(), b("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [x("path", H, [n.title ? (o(), b("title", U, g(n.title), 1)) : p("", !0)])], 8, V))], 16, B);
}
var G = /* @__PURE__ */ c(z, [["render", W]]), K = {
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
function de(e, t, n, r, i, a) {
	return o(), b("span", C(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon radiobox-blank-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(o(), b("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [x("path", le, [n.title ? (o(), b("title", ue, g(n.title), 1)) : p("", !0)])], 8, ce))], 16, se);
}
var fe = /* @__PURE__ */ c(K, [["render", de]]), pe = {
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
function ve(e, t, n, r, i, a) {
	return o(), b("span", C(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon radiobox-marked-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(o(), b("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [x("path", ge, [n.title ? (o(), b("title", _e, g(n.title), 1)) : p("", !0)])], 8, he))], 16, me);
}
var ye = /* @__PURE__ */ c(pe, [["render", ve]]), q = "checkbox", J = "radio", Y = "switch", X = "button", be = {
	name: "NcCheckboxContent",
	components: {
		NcLoadingIcon: re,
		NcIconToggleSwitch: ae
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
function we(e, t, n, i, c, l) {
	let u = s("NcLoadingIcon"), d = s("NcIconToggleSwitch");
	return o(), b("span", { class: h(["checkbox-content", {
		["checkbox-content-" + n.type]: !0,
		"checkbox-content--button-variant": n.buttonVariant,
		"checkbox-content--has-text": !!e.$slots.default
	}]) }, [x("span", {
		class: h(["checkbox-content__icon", {
			"checkbox-content__icon--checked": n.isChecked,
			"checkbox-content__icon--has-description": !l.isButtonType && e.$slots.description,
			[n.iconClass]: !0
		}]),
		"aria-hidden": !0,
		inert: ""
	}, [a(e.$slots, "icon", {
		checked: n.isChecked,
		loading: n.loading
	}, () => [n.loading ? (o(), _(u, { key: 0 })) : l.isSwitchType ? (o(), _(d, {
		key: 1,
		checked: n.isChecked,
		size: n.iconSize,
		inline: ""
	}, null, 8, ["checked", "size"])) : n.buttonVariant ? p("", !0) : (o(), _(r(l.checkboxRadioIconElement), {
		key: 2,
		size: n.iconSize
	}, null, 8, ["size"]))], !0)], 2), e.$slots.default || e.$slots.description ? (o(), b("span", xe, [e.$slots.default ? (o(), b("span", {
		key: 0,
		id: n.labelId,
		class: h(["checkbox-content__text", n.textClass])
	}, [a(e.$slots, "default", {}, void 0, !0)], 10, Se)) : p("", !0), !l.isButtonType && e.$slots.description ? (o(), b("span", {
		key: 1,
		id: n.descriptionId,
		class: "checkbox-content__description"
	}, [a(e.$slots, "description", {}, void 0, !0)], 8, Ce)) : p("", !0)])) : p("", !0)], 2);
}
var Te = /* @__PURE__ */ c(be, [["render", we], ["__scopeId", "data-v-5ca1e30f"]]);
t();
var Z = {
	name: "NcCheckboxRadioSwitch",
	components: { NcCheckboxContent: Te },
	inheritAttrs: !1,
	props: {
		id: {
			type: String,
			default: () => "checkbox-radio-switch-" + S(),
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
		return u(() => n?.value.register(!1)), {
			internalType: y(() => n?.value ? J : e.type),
			internalModelValue: y({
				get() {
					return n?.value ? n.value.modelValue : e.modelValue;
				},
				set(e) {
					n?.value ? n.value.onUpdate(e) : t("update:modelValue", e);
				}
			}),
			labelId: S(),
			descriptionId: S()
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
		inputRole() {
			return this.internalType === Y ? "switch" : void 0;
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
		t: e,
		n: l,
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
	d((e) => ({
		f99d0228: e.cssIconSize,
		v69c82152: e.cssIconHeight
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
	"role",
	"value",
	"checked",
	".indeterminate",
	"required",
	"name"
];
function De(e, t, c, l, u, d) {
	let f = s("NcCheckboxContent");
	return o(), _(r(d.computedWrapperElement), C({
		id: c.wrapperId ?? (d.isButtonType ? c.id : null),
		"aria-label": d.isButtonType && c.ariaLabel ? c.ariaLabel : void 0,
		class: ["checkbox-radio-switch", [e.$props.class, {
			["checkbox-radio-switch-" + l.internalType]: l.internalType,
			"checkbox-radio-switch--checked": d.isChecked,
			"checkbox-radio-switch--disabled": c.disabled,
			"checkbox-radio-switch--indeterminate": d.hasIndeterminate ? c.indeterminate : !1,
			"checkbox-radio-switch--button-variant": c.buttonVariant,
			"checkbox-radio-switch--button-variant-v-grouped": c.buttonVariant && c.buttonVariantGrouped === "vertical",
			"checkbox-radio-switch--button-variant-h-grouped": c.buttonVariant && c.buttonVariantGrouped === "horizontal",
			"button-vue": d.isButtonType
		}]],
		style: c.style,
		type: d.isButtonType ? "button" : null
	}, d.isButtonType ? e.$attrs : {}, i(d.isButtonType ? d.listeners : {})), {
		default: n(() => [d.isButtonType ? p("", !0) : (o(), b("input", C({
			key: 0,
			id: c.id,
			"aria-labelledby": !d.isButtonType && !c.ariaLabel ? l.labelId : null,
			"aria-describedby": !d.isButtonType && (c.description || e.$slots.description) ? l.descriptionId : null,
			"aria-label": c.ariaLabel || void 0,
			class: "checkbox-radio-switch__input",
			disabled: c.disabled,
			type: d.inputType,
			role: d.inputRole,
			value: c.value,
			checked: d.isChecked,
			".indeterminate": d.hasIndeterminate ? c.indeterminate : null,
			required: c.required,
			name: c.name
		}, e.$attrs, i(d.listeners, !0)), null, 48, Ee)), v(f, {
			id: d.isButtonType ? void 0 : `${c.id}-label`,
			class: "checkbox-radio-switch__content",
			iconClass: "checkbox-radio-switch__icon",
			textClass: "checkbox-radio-switch__text",
			type: l.internalType,
			indeterminate: d.hasIndeterminate ? c.indeterminate : !1,
			buttonVariant: c.buttonVariant,
			isChecked: d.isChecked,
			loading: c.loading,
			labelId: l.labelId,
			descriptionId: l.descriptionId,
			iconSize: d.iconSize,
			onClick: d.onToggle
		}, ne({
			icon: n(() => [a(e.$slots, "icon", {}, void 0, !0)]),
			_: 2
		}, [e.$slots.description || c.description ? {
			name: "description",
			fn: n(() => [a(e.$slots, "description", {}, () => [m(g(c.description), 1)], !0)]),
			key: "0"
		} : void 0, e.$slots.default ? {
			name: "default",
			fn: n(() => [a(e.$slots, "default", {}, void 0, !0)]),
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
var Oe = /* @__PURE__ */ c(Z, [["render", De], ["__scopeId", "data-v-81045d2a"]]);
//#endregion
export { Oe as t };
