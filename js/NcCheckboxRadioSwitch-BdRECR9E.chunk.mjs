import { Cn as e, D as t, E as n, En as r, Fn as i, Mn as a, Pn as o, Q as s, T as c, Un as l, Wt as u, X as d, an as f, cn as ee, dn as p, gn as te, in as m, jn as h, ln as ne, nn as g, on as _, pr as v, rn as y, sn as b, t as x, ur as S, vn as C } from "./createElementId-XLh0NVJk.chunk.mjs";
import { t as re } from "./NcLoadingIcon-RK5ACPqk.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/NcIconToggleSwitch.mjs
var ie = "<svg\n	xmlns=\"http://www.w3.org/2000/svg\"\n	viewBox=\"0 0 24 12\">\n	<path d=\"M17,1H7A5,5 0 0,0 2,6 5,5 0 0,0 7,11H17A5,5 0 0,0 22,6 5,5 0 0,0 17,1Z\" />\n	<circle\n		cy=\"6\"\n		r=\"3\"\n		fill=\"var(--color-main-background)\" />\n</svg>", ae = /* @__PURE__ */ s(/* @__PURE__ */ p({
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
		u((e) => ({
			v6bd152af: t.value,
			v16fd8ca9: n.value
		}));
		let t = g(() => e.checked ? "var(--color-primary-element)" : "var(--color-text-maxcontrast)"), n = g(() => e.checked ? "calc(17 / 24 * 100%)" : "calc(7 / 24 * 100%)");
		return (t, n) => (r(), m(d, {
			class: S(t.$style.iconToggleSwitch),
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
	"material-design-icon": "_material-design-icon_r7JU1",
	iconToggleSwitch: "_iconToggleSwitch_1qpqv"
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
function A(e, t, n, i, a, o) {
	return r(), _("span", C(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon checkbox-blank-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(r(), _("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [y("path", O, [n.title ? (r(), _("title", k, v(n.title), 1)) : f("", !0)])], 8, D))], 16, E);
}
var j = /* @__PURE__ */ s(T, [["render", A]]), M = {
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
function L(e, t, n, i, a, o) {
	return r(), _("span", C(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon checkbox-marked-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(r(), _("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [y("path", F, [n.title ? (r(), _("title", I, v(n.title), 1)) : f("", !0)])], 8, P))], 16, N);
}
var R = /* @__PURE__ */ s(M, [["render", L]]), z = {
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
function W(e, t, n, i, a, o) {
	return r(), _("span", C(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon minus-box-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(r(), _("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [y("path", H, [n.title ? (r(), _("title", U, v(n.title), 1)) : f("", !0)])], 8, V))], 16, B);
}
var G = /* @__PURE__ */ s(z, [["render", W]]), K = {
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
function de(e, t, n, i, a, o) {
	return r(), _("span", C(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon radiobox-blank-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(r(), _("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [y("path", le, [n.title ? (r(), _("title", ue, v(n.title), 1)) : f("", !0)])], 8, ce))], 16, se);
}
var fe = /* @__PURE__ */ s(K, [["render", de]]), pe = {
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
function ve(e, t, n, i, a, o) {
	return r(), _("span", C(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon radiobox-marked-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(r(), _("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [y("path", ge, [n.title ? (r(), _("title", _e, v(n.title), 1)) : f("", !0)])], 8, he))], 16, me);
}
var ye = /* @__PURE__ */ s(pe, [["render", ve]]), q = "checkbox", J = "radio", Y = "switch", X = "button", be = {
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
function we(e, t, n, i, s, c) {
	let l = a("NcLoadingIcon"), u = a("NcIconToggleSwitch");
	return r(), _("span", { class: S(["checkbox-content", {
		["checkbox-content-" + n.type]: !0,
		"checkbox-content--button-variant": n.buttonVariant,
		"checkbox-content--has-text": !!e.$slots.default
	}]) }, [y("span", {
		class: S(["checkbox-content__icon", {
			"checkbox-content__icon--checked": n.isChecked,
			"checkbox-content__icon--has-description": !c.isButtonType && e.$slots.description,
			[n.iconClass]: !0
		}]),
		"aria-hidden": !0,
		inert: ""
	}, [h(e.$slots, "icon", {
		checked: n.isChecked,
		loading: n.loading
	}, () => [n.loading ? (r(), m(l, { key: 0 })) : c.isSwitchType ? (r(), m(u, {
		key: 1,
		checked: n.isChecked,
		size: n.iconSize,
		inline: ""
	}, null, 8, ["checked", "size"])) : n.buttonVariant ? f("", !0) : (r(), m(o(c.checkboxRadioIconElement), {
		key: 2,
		size: n.iconSize
	}, null, 8, ["size"]))], !0)], 2), e.$slots.default || e.$slots.description ? (r(), _("span", xe, [e.$slots.default ? (r(), _("span", {
		key: 0,
		id: n.labelId,
		class: S(["checkbox-content__text", n.textClass])
	}, [h(e.$slots, "default", {}, void 0, !0)], 10, Se)) : f("", !0), !c.isButtonType && e.$slots.description ? (r(), _("span", {
		key: 1,
		id: n.descriptionId,
		class: "checkbox-content__description"
	}, [h(e.$slots, "description", {}, void 0, !0)], 8, Ce)) : f("", !0)])) : f("", !0)], 2);
}
var Te = /* @__PURE__ */ s(be, [["render", we], ["__scopeId", "data-v-5ca1e30f"]]);
n();
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
	setup(t, { emit: n }) {
		let r = w();
		return e(() => r?.value.register(!1)), {
			internalType: g(() => r?.value ? J : t.type),
			internalModelValue: g({
				get() {
					return r?.value ? r.value.modelValue : t.modelValue;
				},
				set(e) {
					r?.value ? r.value.onUpdate(e) : n("update:modelValue", e);
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
		t,
		n: c,
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
	u((e) => ({
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
function De(e, t, n, s, c, u) {
	let d = a("NcCheckboxContent");
	return r(), m(o(u.computedWrapperElement), C({
		id: n.wrapperId ?? (u.isButtonType ? n.id : null),
		"aria-label": u.isButtonType && n.ariaLabel ? n.ariaLabel : void 0,
		class: ["checkbox-radio-switch", [e.$props.class, {
			["checkbox-radio-switch-" + s.internalType]: s.internalType,
			"checkbox-radio-switch--checked": u.isChecked,
			"checkbox-radio-switch--disabled": n.disabled,
			"checkbox-radio-switch--indeterminate": u.hasIndeterminate ? n.indeterminate : !1,
			"checkbox-radio-switch--button-variant": n.buttonVariant,
			"checkbox-radio-switch--button-variant-v-grouped": n.buttonVariant && n.buttonVariantGrouped === "vertical",
			"checkbox-radio-switch--button-variant-h-grouped": n.buttonVariant && n.buttonVariantGrouped === "horizontal",
			"button-vue": u.isButtonType
		}]],
		style: n.style,
		type: u.isButtonType ? "button" : null
	}, u.isButtonType ? e.$attrs : {}, i(u.isButtonType ? u.listeners : {})), {
		default: l(() => [u.isButtonType ? f("", !0) : (r(), _("input", C({
			key: 0,
			id: n.id,
			"aria-labelledby": !u.isButtonType && !n.ariaLabel ? s.labelId : null,
			"aria-describedby": !u.isButtonType && (n.description || e.$slots.description) ? s.descriptionId : null,
			"aria-label": n.ariaLabel || void 0,
			class: "checkbox-radio-switch__input",
			disabled: n.disabled,
			type: u.inputType,
			role: u.inputRole,
			value: n.value,
			checked: u.isChecked,
			".indeterminate": u.hasIndeterminate ? n.indeterminate : null,
			required: n.required,
			name: n.name
		}, e.$attrs, i(u.listeners, !0)), null, 48, Ee)), ne(d, {
			id: u.isButtonType ? void 0 : `${n.id}-label`,
			class: "checkbox-radio-switch__content",
			iconClass: "checkbox-radio-switch__icon",
			textClass: "checkbox-radio-switch__text",
			type: s.internalType,
			indeterminate: u.hasIndeterminate ? n.indeterminate : !1,
			buttonVariant: n.buttonVariant,
			isChecked: u.isChecked,
			loading: n.loading,
			labelId: s.labelId,
			descriptionId: s.descriptionId,
			iconSize: u.iconSize,
			onClick: u.onToggle
		}, b({
			icon: l(() => [h(e.$slots, "icon", {}, void 0, !0)]),
			_: 2
		}, [e.$slots.description || n.description ? {
			name: "description",
			fn: l(() => [h(e.$slots, "description", {}, () => [ee(v(n.description), 1)], !0)]),
			key: "0"
		} : void 0, e.$slots.default ? {
			name: "default",
			fn: l(() => [h(e.$slots, "default", {}, void 0, !0)]),
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
var Oe = /* @__PURE__ */ s(Z, [["render", De], ["__scopeId", "data-v-81045d2a"]]);
//#endregion
export { Oe as t };
