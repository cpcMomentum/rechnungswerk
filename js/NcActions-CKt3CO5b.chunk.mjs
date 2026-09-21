import { a as e, d as t, g as n, o as r, r as i, u as a } from "./logger-Dmvqkkgn.chunk.mjs";
import { Bn as o, En as s, Mn as c, Q as l, Qt as u, Un as d, X as f, Xt as p, Z as m, an as h, c as g, cn as _, dn as ee, f as te, fr as v, in as y, jn as b, ln as ne, lr as x, mn as S, on as C, pr as w, rn as T, sn as re, t as E, tn as D, ur as O, vn as k } from "./createElementId-XLh0NVJk.chunk.mjs";
import { F as A, I as j, N as ie, P as ae } from "./chunks-DrYk3xeN.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/actionGlobal.mjs
var M = {
	beforeUpdate() {
		this.text = this.getText();
	},
	data() {
		return { text: this.getText() };
	},
	computed: { isLongText() {
		return this.text && this.text.trim().length > 20;
	} },
	methods: { getText() {
		return this.$slots.default?.()[0].children?.trim?.() || "";
	} }
}, oe = {
	mixins: [M],
	props: {
		icon: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		closeAfterClick: {
			type: Boolean,
			default: !1
		},
		ariaLabel: {
			type: String,
			default: null
		}
	},
	inject: { closeMenu: { from: A } },
	emits: ["click"],
	created() {
		"ariaHidden" in this.$attrs && o("[NcAction*]: Do not set the ariaHidden attribute as the root element will inherit the incorrect aria-hidden.");
	},
	computed: { isIconUrl() {
		try {
			return !!new URL(this.icon, this.icon.startsWith("/") ? window.location.origin : void 0);
		} catch {
			return !1;
		}
	} },
	methods: { onClick(e) {
		this.$emit("click", e), this.closeAfterClick && this.closeMenu(!1);
	} }
}, se = {
	name: "NcActionButton",
	components: { NcIconSvgWrapper: f },
	mixins: [oe],
	inject: { isInSemanticMenu: {
		from: j,
		default: !1
	} },
	props: {
		disabled: {
			type: Boolean,
			default: !1
		},
		isMenu: {
			type: Boolean,
			default: !1
		},
		type: {
			type: String,
			default: "button",
			validator: (e) => [
				"button",
				"checkbox",
				"radio",
				"reset",
				"submit"
			].includes(e)
		},
		modelValue: {
			type: [Boolean, String],
			default: null
		},
		value: {
			type: String,
			default: null
		},
		description: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue"],
	setup() {
		return {
			mdiCheck: g,
			mdiChevronRight: te
		};
	},
	computed: {
		isFocusable() {
			return !this.disabled;
		},
		isChecked() {
			return this.type === "radio" && typeof this.modelValue != "boolean" ? this.modelValue === this.value : this.modelValue;
		},
		nativeType() {
			return this.type === "submit" || this.type === "reset" ? this.type : "button";
		},
		buttonAttributes() {
			let e = {};
			return this.isInSemanticMenu ? (e.role = "menuitem", this.type === "radio" ? (e.role = "menuitemradio", e["aria-checked"] = this.isChecked ? "true" : "false") : (this.type === "checkbox" || this.nativeType === "button" && this.modelValue !== null) && (e.role = "menuitemcheckbox", e["aria-checked"] = this.modelValue === null ? "mixed" : this.modelValue ? "true" : "false")) : this.modelValue !== null && this.nativeType === "button" && (e["aria-pressed"] = this.modelValue ? "true" : "false"), e;
		}
	},
	methods: { handleClick(e) {
		this.onClick(e), (this.modelValue !== null || this.type !== "button") && (this.type === "radio" ? typeof this.modelValue == "boolean" ? this.$emit("update:modelValue", !this.isChecked) : this.isChecked || this.$emit("update:modelValue", this.value) : this.$emit("update:modelValue", !this.isChecked));
	} }
}, N = ["role"], ce = [
	"aria-label",
	"disabled",
	"title",
	"type"
], le = { class: "action-button__longtext-wrapper" }, ue = {
	key: 0,
	class: "action-button__name"
}, de = ["textContent"], fe = {
	key: 2,
	class: "action-button__text"
}, pe = ["textContent"], me = {
	key: 2,
	class: "action-button__pressed-icon material-design-icon"
};
function he(e, t, n, r, i, a) {
	let o = c("NcIconSvgWrapper");
	return s(), C("li", {
		class: O(["action", { "action--disabled": n.disabled }]),
		role: a.isInSemanticMenu && "presentation"
	}, [T("button", k({
		"aria-label": e.ariaLabel,
		class: ["action-button button-vue", {
			"action-button--active": a.isChecked,
			focusable: a.isFocusable
		}],
		disabled: n.disabled,
		title: e.title,
		type: a.nativeType
	}, a.buttonAttributes, { onClick: t[0] ||= (...e) => a.handleClick && a.handleClick(...e) }), [
		b(e.$slots, "icon", {}, () => [T("span", {
			class: O([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
			style: v({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
			"aria-hidden": "true"
		}, null, 6)], !0),
		T("span", le, [
			e.name ? (s(), C("strong", ue, w(e.name), 1)) : h("", !0),
			e.isLongText ? (s(), C("span", {
				key: 1,
				class: "action-button__longtext",
				textContent: w(e.text)
			}, null, 8, de)) : (s(), C("span", fe, w(e.text), 1)),
			n.description ? (s(), C("span", {
				key: 3,
				class: "action-button__description",
				textContent: w(n.description)
			}, null, 8, pe)) : h("", !0)
		]),
		n.isMenu ? (s(), y(o, {
			key: 0,
			class: "action-button__menu-icon",
			directional: "",
			path: r.mdiChevronRight
		}, null, 8, ["path"])) : a.isChecked ? (s(), y(o, {
			key: 1,
			path: r.mdiCheck,
			class: "action-button__pressed-icon"
		}, null, 8, ["path"])) : a.isChecked === !1 ? (s(), C("span", me)) : h("", !0),
		h("", !0)
	], 16, ce)], 10, N);
}
var ge = /* @__PURE__ */ l(se, [["render", he], ["__scopeId", "data-v-6c2daf4e"]]), _e = ["aria-labelledby"], ve = {
	key: 0,
	class: "empty-content__icon",
	"aria-hidden": "true"
}, ye = ["id"], be = {
	key: 2,
	class: "empty-content__description"
}, xe = {
	key: 3,
	class: "empty-content__action"
}, Se = /* @__PURE__ */ l(/* @__PURE__ */ ee({
	__name: "NcEmptyContent",
	props: {
		description: { default: "" },
		name: { default: "" }
	},
	setup(e) {
		let t = E();
		return (n, r) => (s(), C("div", {
			"aria-labelledby": x(t),
			class: "empty-content",
			role: "note"
		}, [
			n.$slots.icon ? (s(), C("div", ve, [b(n.$slots, "icon", {}, void 0, !0)])) : h("", !0),
			e.name !== "" || n.$slots.name ? (s(), C("div", {
				key: 1,
				id: x(t),
				class: "empty-content__name"
			}, [b(n.$slots, "name", {}, () => [_(w(e.name), 1)], !0)], 8, ye)) : h("", !0),
			e.description !== "" || n.$slots.description ? (s(), C("p", be, [b(n.$slots, "description", {}, () => [_(w(e.description), 1)], !0)])) : h("", !0),
			n.$slots.action ? (s(), C("div", xe, [b(n.$slots, "action", {}, void 0, !0)])) : h("", !0)
		], 8, _e));
	}
}), [["__scopeId", "data-v-8609a4c1"]]);
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function Ce(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: we } = Object.prototype, { getPrototypeOf: P } = Object, { iterator: Te, toStringTag: Ee } = Symbol, De = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Oe = (e, t) => {
	let n = e, r = [];
	for (; n != null && n !== Object.prototype;) {
		if (r.indexOf(n) !== -1) return !1;
		if (r.push(n), De(n, t)) return !0;
		n = P(n);
	}
	return !1;
}, ke = (e, t) => e != null && Oe(e, t) ? e[t] : void 0, Ae = ((e) => (t) => {
	let n = we.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), F = (e) => (e = e.toLowerCase(), (t) => Ae(t) === e), je = (e) => (t) => typeof t === e, { isArray: I } = Array, L = je("undefined");
function R(e) {
	return e !== null && !L(e) && e.constructor !== null && !L(e.constructor) && z(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Me = F("ArrayBuffer");
function Ne(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Me(e.buffer), t;
}
var Pe = je("string"), z = je("function"), Fe = je("number"), B = (e) => typeof e == "object" && !!e, Ie = (e) => e === !0 || e === !1, Le = (e) => {
	if (!B(e)) return !1;
	let t = P(e);
	return (t === null || t === Object.prototype || P(t) === null) && !Oe(e, Ee) && !Oe(e, Te);
}, Re = (e) => {
	if (!B(e) || R(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, ze = F("Date"), Be = F("File"), Ve = (e) => !!(e && e.uri !== void 0), He = (e) => e && e.getParts !== void 0, Ue = F("Blob"), We = F("FileList"), Ge = F("Set"), Ke = (e) => B(e) && z(e.pipe);
function qe() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var Je = qe(), Ye = Je.FormData === void 0 ? void 0 : Je.FormData, Xe = (e) => {
	if (!e) return !1;
	if (Ye && e instanceof Ye) return !0;
	let t = P(e);
	if (!t || t === Object.prototype || !z(e.append)) return !1;
	let n = Ae(e);
	return n === "formdata" || n === "object" && z(e.toString) && e.toString() === "[object FormData]";
}, Ze = F("URLSearchParams"), [Qe, $e, et, tt] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(F), nt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function V(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), I(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (R(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function rt(e, t) {
	if (R(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var H = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, it = (e) => !L(e) && e !== H;
function at(...e) {
	let { caseless: t, skipUndefined: n } = it(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && rt(r, i) || i, o = De(r, a) ? r[a] : void 0;
		Le(o) && Le(e) ? r[a] = at(o, e) : Le(e) ? r[a] = at({}, e) : I(e) ? r[a] = e.slice() : (!n || !L(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || R(n) || (V(n, i), typeof n != "object" || I(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			_t.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var ot = (e, t, n, { allOwnKeys: r } = {}) => (V(t, (t, r) => {
	n && z(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: Ce(t, n),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : Object.defineProperty(e, r, {
		__proto__: null,
		value: t,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}, { allOwnKeys: r }), e), st = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ct = (e, t, n, r) => {
	e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
		__proto__: null,
		value: e,
		writable: !0,
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e, "super", {
		__proto__: null,
		value: t.prototype
	}), n && Object.assign(e.prototype, n);
}, lt = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && P(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, ut = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, dt = (e) => {
	if (!e) return null;
	if (I(e)) return e;
	let t = e.length;
	if (!Fe(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, ft = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && P(Uint8Array)), pt = (e, t) => {
	let n = (e && e[Te]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, mt = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, ht = F("HTMLFormElement"), gt = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: _t } = Object.prototype, vt = F("RegExp"), yt = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	V(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, bt = (e) => {
	yt(e, (t, n) => {
		if (z(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (z(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, xt = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return I(e) ? r(e) : r(String(e).split(t)), n;
}, St = () => {}, Ct = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function wt(e) {
	return !!(e && z(e.append) && e[Ee] === "FormData" && e[Te]);
}
var Tt = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (B(e)) {
			if (t.has(e)) return;
			if (R(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (Ge(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!L(e) && r.push(e);
					}
				} else r = I(e) ? [] : {}, V(e, (e, t) => {
					let i = n(e);
					!L(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Et = F("AsyncFunction"), Dt = (e) => e && (B(e) || z(e)) && z(e.then) && z(e.catch), Ot = ((e, t) => e ? setImmediate : t ? ((e, t) => (H.addEventListener("message", ({ source: n, data: r }) => {
	n === H && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), H.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", z(H.postMessage)), kt = typeof queueMicrotask < "u" ? queueMicrotask.bind(H) : typeof process < "u" && process.nextTick || Ot, At = (e) => e != null && z(e[Te]), U = {
	isArray: I,
	isArrayBuffer: Me,
	isBuffer: R,
	isFormData: Xe,
	isArrayBufferView: Ne,
	isString: Pe,
	isNumber: Fe,
	isBoolean: Ie,
	isObject: B,
	isPlainObject: Le,
	isEmptyObject: Re,
	isReadableStream: Qe,
	isRequest: $e,
	isResponse: et,
	isHeaders: tt,
	isUndefined: L,
	isDate: ze,
	isFile: Be,
	isReactNativeBlob: Ve,
	isReactNative: He,
	isBlob: Ue,
	isRegExp: vt,
	isFunction: z,
	isStream: Ke,
	isURLSearchParams: Ze,
	isTypedArray: ft,
	isFileList: We,
	forEach: V,
	merge: at,
	extend: ot,
	trim: nt,
	stripBOM: st,
	inherits: ct,
	toFlatObject: lt,
	kindOf: Ae,
	kindOfTest: F,
	endsWith: ut,
	toArray: dt,
	forEachEntry: pt,
	matchAll: mt,
	isHTMLForm: ht,
	hasOwnProperty: De,
	hasOwnProp: De,
	hasOwnInPrototypeChain: Oe,
	getSafeProp: ke,
	reduceDescriptors: yt,
	freezeMethods: bt,
	toObjectSet: xt,
	toCamelCase: gt,
	noop: St,
	toFiniteNumber: Ct,
	findKey: rt,
	global: H,
	isContextDefined: it,
	isSpecCompliantForm: wt,
	toJSONObject: Tt,
	isAsyncFn: Et,
	isThenable: Dt,
	setImmediate: Ot,
	asap: kt,
	isIterable: At,
	isSafeIterable: (e) => e != null && Oe(e, Te) && At(e)
}, jt = U.toObjectSet([
	"age",
	"authorization",
	"content-length",
	"content-type",
	"etag",
	"expires",
	"from",
	"host",
	"if-modified-since",
	"if-unmodified-since",
	"last-modified",
	"location",
	"max-forwards",
	"proxy-authorization",
	"referer",
	"retry-after",
	"user-agent"
]), Mt = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = U.hasOwnProp(t, n);
		!n || a && U.hasOwnProp(jt, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function Nt(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
var Pt = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Ft = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function It(e, t) {
	return U.isArray(e) ? e.map((e) => It(e, t)) : Nt(String(e).replace(t, ""));
}
var Lt = (e) => It(e, Pt), Rt = (e) => It(e, Ft);
function zt(e) {
	let t = Object.create(null);
	return U.forEach(e.toJSON(), (e, n) => {
		t[n] = Rt(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var Bt = Symbol("internals");
function Vt(e) {
	return e && String(e).trim().toLowerCase();
}
function Ht(e) {
	return e === !1 || e == null ? e : U.isArray(e) ? e.map(Ht) : Lt(String(e));
}
function Ut(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var Wt = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Gt(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
function Kt(e) {
	let t = e.length - 1;
	if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34) return e;
	let n = "";
	for (let r = 1; r < t; r++) {
		let i = e.charCodeAt(r);
		if (i === 34 || i === 92 && (r += 1, r >= t)) return e;
		n += e[r];
	}
	return n;
}
function qt(e) {
	let t = Object.create(null), n = String(e), r = 0, i = !1, a = !1;
	function o(e) {
		let i = Gt(n.slice(r, e)), a = i.indexOf("=");
		if (a < 1) return;
		let o = Gt(i.slice(0, a));
		if (!Wt.test(o)) return;
		let s = o.toLowerCase();
		if (s === "__proto__" || s === "constructor" || s === "prototype") return;
		let c = Gt(i.slice(a + 1));
		t[s] = Kt(c);
	}
	for (let e = 0; e < n.length; e++) {
		let t = n.charCodeAt(e);
		i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1);
	}
	return o(n.length), t;
}
var Jt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Yt(e, t, n, r, i) {
	if (U.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), U.isString(t)) {
		if (U.isString(r)) return t.indexOf(r) !== -1;
		if (U.isRegExp(r)) return r.test(t);
	}
}
function Xt(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Zt(e, t) {
	let n = U.toCamelCase(" " + t);
	[
		"get",
		"set",
		"has"
	].forEach((r) => {
		Object.defineProperty(e, r + n, {
			__proto__: null,
			value: function(e, n, i) {
				return this[r].call(this, t, e, n, i);
			},
			configurable: !0
		});
	});
}
var W = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = Vt(t);
			if (!i) return;
			let a = U.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = Ht(e));
		}
		let a = (e, t) => U.forEach(e, (e, n) => i(e, n, t));
		if (U.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (U.isString(e) && (e = e.trim()) && !Jt(e)) a(Mt(e), t);
		else if (U.isObject(e) && U.isSafeIterable(e)) {
			let n = Object.create(null), r, i;
			for (let t of e) {
				if (!U.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], U.hasOwnProp(n, i) ? (r = n[i], n[i] = U.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = Vt(e), e) {
			let n = U.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return Ut(e);
				if (U.isFunction(t)) return t.call(this, e, n);
				if (U.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = Vt(e), e) {
			let n = U.findKey(this, e);
			return !(!n || this[n] === void 0 || t && !Yt(this, this[n], n, t));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = Vt(e), e) {
				let i = U.findKey(n, e);
				i && (!t || Yt(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return U.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || Yt(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return U.forEach(this, (r, i) => {
			let a = U.findKey(n, i);
			if (a) {
				t[a] = Ht(r), delete t[i];
				return;
			}
			let o = e ? Xt(i) : String(i).trim();
			o !== i && delete t[i], t[o] = Ht(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = Object.create(null);
		return U.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && U.isArray(n) ? n.join(", ") : n);
		}), t;
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
	}
	getSetCookie() {
		let e = this.get("set-cookie");
		return U.isArray(e) ? e : e == null || e === !1 ? [] : [e];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static parseParameters(e) {
		return qt(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[Bt] = this[Bt] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = Vt(e);
			t[r] || (Zt(n, e), t[r] = !0);
		}
		return U.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
W.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), U.reduceDescriptors(W.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), U.freezeMethods(W);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var Qt = "[REDACTED ****]";
function $t(e) {
	if (U.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (U.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function en(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || U.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof W && (e = e.toJSON()), r.push(e);
		let t;
		if (U.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			U.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!U.isPlainObject(e) && $t(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? Qt : i(a);
				U.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
function tn(e) {
	try {
		return String(e);
	} catch {
		return "";
	}
}
function nn(e) {
	return e.errors.map((e) => {
		try {
			return e && e.message ? tn(e.message) : tn(e);
		} catch {
			return "";
		}
	}).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var G = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = t.message;
		!s && U.isArray(t.errors) && t.errors.length && (s = nn(t));
		let c = new e(s, n || t.code, r, i, a);
		return Object.defineProperty(c, "cause", {
			__proto__: null,
			value: t,
			writable: !0,
			enumerable: !1,
			configurable: !0
		}), c.name = t.name, t.status != null && c.status == null && (c.status = t.status), o && Object.assign(c, o), c;
	}
	constructor(e, t, n, r, i) {
		super(e), Object.defineProperty(this, "message", {
			__proto__: null,
			value: e,
			enumerable: !0,
			writable: !0,
			configurable: !0
		}), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status);
	}
	toJSON() {
		let e = this.config, t = e && U.hasOwnProp(e, "redact") ? e.redact : void 0, n = U.isArray(t) && t.length > 0 ? en(e, t) : U.toJSONObject(e);
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: n,
			code: this.code,
			status: this.status
		};
	}
};
G.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", G.ERR_BAD_OPTION = "ERR_BAD_OPTION", G.ECONNABORTED = "ECONNABORTED", G.ETIMEDOUT = "ETIMEDOUT", G.ECONNREFUSED = "ECONNREFUSED", G.ERR_NETWORK = "ERR_NETWORK", G.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", G.ERR_DEPRECATED = "ERR_DEPRECATED", G.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", G.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", G.ERR_CANCELED = "ERR_CANCELED", G.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", G.ERR_INVALID_URL = "ERR_INVALID_URL", G.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
function rn(e) {
	return U.isPlainObject(e) || U.isArray(e);
}
function an(e) {
	return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function on(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = an(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function sn(e) {
	return U.isArray(e) && !e.some(rn);
}
var cn = U.toFlatObject(U, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function ln(e, t, n) {
	if (!U.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData(), n = U.toFlatObject(n, {
		metaTokens: !0,
		dots: !1,
		indexes: !1
	}, !1, function(e, t) {
		return !U.isUndefined(t[e]);
	});
	let r = n.metaTokens, i = n.visitor || m, a = n.dots, o = n.indexes, s = n.Blob || typeof Blob < "u" && Blob, c = n.maxDepth === void 0 ? 100 : n.maxDepth, l = s && U.isSpecCompliantForm(t), u = [];
	if (!U.isFunction(i)) throw TypeError("visitor must be a function");
	function d(e) {
		if (e === null) return "";
		if (U.isDate(e)) return e.toISOString();
		if (U.isBoolean(e)) return e.toString();
		if (!l && U.isBlob(e)) throw new G("Blob is not supported. Use a Buffer instead.");
		if (U.isArrayBuffer(e) || U.isTypedArray(e)) {
			if (l && typeof s == "function") return new s([e]);
			throw new G("Blob is not supported. Use a Buffer instead.", G.ERR_NOT_SUPPORT);
		}
		return e;
	}
	function f(e) {
		if (e > c) throw new G("Object is too deeply nested (" + e + " levels). Max depth: " + c, G.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function p(e, t) {
		if (c === Infinity) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!U.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), f(t + n.length - 1), r;
		});
	}
	function m(e, n, i) {
		let s = e;
		if (U.isReactNative(t) && U.isReactNativeBlob(e)) return t.append(on(i, n, a), d(e)), !1;
		if (e && !i && typeof e == "object") {
			if (U.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = p(e, 1);
			else if (U.isArray(e) && sn(e) || (U.isFileList(e) || U.endsWith(n, "[]")) && (s = U.toArray(e))) return n = an(n), s.forEach(function(e, r) {
				!(U.isUndefined(e) || e === null) && t.append(o === !0 ? on([n], r, a) : o === null ? n : n + "[]", d(e));
			}), !1;
		}
		return rn(e) ? !0 : (t.append(on(i, n, a), d(e)), !1);
	}
	let h = Object.assign(cn, {
		defaultVisitor: m,
		convertValue: d,
		isVisitable: rn
	});
	function g(e, n, r = 0) {
		if (!U.isUndefined(e)) {
			if (f(r), u.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			u.push(e), U.forEach(e, function(e, a) {
				(!(U.isUndefined(e) || e === null) && i.call(t, e, U.isString(a) ? a.trim() : a, n, h)) === !0 && g(e, n ? n.concat(a) : [a], r + 1);
			}), u.pop();
		}
	}
	if (!U.isObject(e)) throw TypeError("data must be an object");
	return g(e), t;
}
//#endregion
//#region node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function un(e) {
	let t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+"
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(e) {
		return t[e];
	});
}
function dn(e, t) {
	this._pairs = [], e && ln(e, this, t);
}
var fn = dn.prototype;
fn.append = function(e, t) {
	this._pairs.push([e, t]);
}, fn.toString = function(e) {
	let t = e ? (t) => e.call(this, t, un) : un;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
function pn(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function mn(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = U.isFunction(n) ? { serialize: n } : n, i = U.getSafeProp(r, "encode") || pn, a = U.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : U.isURLSearchParams(t) ? t.toString() : new dn(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var hn = class {
	constructor() {
		this.handlers = [];
	}
	use(e, t, n) {
		return this.handlers.push({
			fulfilled: e,
			rejected: t,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}), this.handlers.length - 1;
	}
	eject(e) {
		this.handlers[e] && (this.handlers[e] = null);
	}
	clear() {
		this.handlers &&= [];
	}
	forEach(e) {
		U.forEach(this.handlers, function(t) {
			t !== null && e(t);
		});
	}
}, gn = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, _n = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : dn,
		FormData: typeof FormData < "u" ? FormData : null,
		Blob: typeof Blob < "u" ? Blob : null
	},
	protocols: [
		"http",
		"https",
		"file",
		"blob",
		"url",
		"data"
	]
}, vn = /* @__PURE__ */ n({
	hasBrowserEnv: () => yn,
	hasStandardBrowserEnv: () => xn,
	hasStandardBrowserWebWorkerEnv: () => Sn,
	navigator: () => bn,
	origin: () => Cn
}), yn = typeof window < "u" && typeof document < "u", bn = typeof navigator == "object" && navigator || void 0, xn = yn && (!bn || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(bn.product) < 0), Sn = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cn = yn && window.location.href || "http://localhost", K = {
	...vn,
	..._n
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function wn(e, t) {
	return ln(e, new K.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return K.isNode && U.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
var Tn = 100;
function En(e) {
	if (e > Tn) throw new G("FormData field is too deeply nested (" + e + " levels). Max depth: " + Tn, G.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Dn(e) {
	let t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g, r;
	for (; (r = n.exec(e)) !== null;) En(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function On(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function kn(e) {
	function t(e, n, r, i) {
		En(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && U.isArray(r) ? r.length : a, s ? (U.hasOwnProp(r, a) ? r[a] = U.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!U.hasOwnProp(r, a) || !U.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && U.isArray(r[a]) && (r[a] = On(r[a])), !o);
	}
	if (U.isFormData(e) && U.isFunction(e.entries)) {
		let n = {};
		return U.forEachEntry(e, (e, r) => {
			t(Dn(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/defaults/index.js
var q = (e, t) => e != null && U.hasOwnProp(e, t) ? e[t] : void 0;
function An(e, t, n) {
	if (U.isString(e)) try {
		return (t || JSON.parse)(e), U.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var jn = {
	transitional: gn,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = U.isObject(e);
		if (i && U.isHTMLForm(e) && (e = new FormData(e)), U.isFormData(e)) return r ? JSON.stringify(kn(e)) : e;
		if (U.isArrayBuffer(e) || U.isBuffer(e) || U.isStream(e) || U.isFile(e) || U.isBlob(e) || U.isReadableStream(e)) return e;
		if (U.isArrayBufferView(e)) return e.buffer;
		if (U.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = q(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return wn(e, t).toString();
			if ((a = U.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = q(this, "env"), r = n && n.FormData;
				return ln(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), An(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = q(this, "transitional") || jn.transitional, n = t && t.forcedJSONParsing, r = q(this, "responseType"), i = r === "json";
		if (U.isResponse(e) || U.isReadableStream(e)) return e;
		if (e && U.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, q(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? G.from(e, G.ERR_BAD_RESPONSE, this, null, q(this, "response")) : e;
			}
		}
		return e;
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: K.classes.FormData,
		Blob: K.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
U.forEach([
	"delete",
	"get",
	"head",
	"post",
	"put",
	"patch",
	"query"
], (e) => {
	jn.headers[e] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
function Mn(e, t) {
	let n = this || jn, r = t || n, i = W.from(r.headers), a = r.data;
	return U.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function Nn(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var Pn = class extends G {
	constructor(e, t, n) {
		super(e ?? "canceled", G.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
function Fn(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new G("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? G.ERR_BAD_REQUEST : G.ERR_BAD_RESPONSE, n.config, n.request, n));
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function In(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
function Ln(e, t) {
	e ||= 10;
	let n = Array(e), r = Array(e), i = 0, a = 0, o;
	return t = t === void 0 ? 1e3 : t, function(s) {
		let c = Date.now(), l = r[a];
		o ||= c, n[i] = s, r[i] = c;
		let u = a, d = 0;
		for (; u !== i;) d += n[u++], u %= e;
		if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
		let f = l && c - l;
		return f ? Math.round(d * 1e3 / f) : void 0;
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/throttle.js
function Rn(e, t) {
	let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => {
		n = r, i = null, a &&= (clearTimeout(a), null), e(...t);
	};
	return [(...e) => {
		let t = Date.now(), s = t - n;
		s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
			a = null, o(i);
		}, r - s));
	}, () => i && o(i)];
}
//#endregion
//#region node_modules/axios/lib/helpers/progressEventReducer.js
var zn = (e, t, n = 3) => {
	let r = 0, i = Ln(50, 250);
	return Rn((n) => {
		if (!n || typeof n.loaded != "number") return;
		let a = n.loaded, o = n.lengthComputable ? n.total : void 0, s = Math.max(0, o == null ? a : Math.min(a, o)), c = Math.max(0, s - r), l = i(c);
		r = Math.max(r, s), e({
			loaded: s,
			total: o,
			progress: o ? s / o : void 0,
			bytes: c,
			rate: l || void 0,
			estimated: l && o ? (o - s) / l : void 0,
			event: n,
			lengthComputable: o != null,
			[t ? "download" : "upload"]: !0
		});
	}, n);
}, Bn = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, Vn = (e, t = U.asap) => (...n) => t(() => e(...n)), Hn = K.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, K.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(K.origin), K.navigator && /(msie|trident)/i.test(K.navigator.userAgent)) : () => !0, Un = K.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		U.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), U.isString(r) && s.push(`path=${r}`), U.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), U.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
	},
	read(e) {
		if (typeof document > "u") return null;
		let t = document.cookie.split(";");
		for (let n = 0; n < t.length; n++) {
			let r = t[n].replace(/^\s+/, ""), i = r.indexOf("=");
			if (i !== -1 && r.slice(0, i) === e) try {
				return decodeURIComponent(r.slice(i + 1));
			} catch {
				return r.slice(i + 1);
			}
		}
		return null;
	},
	remove(e) {
		this.write(e, "", Date.now() - 864e5, "/");
	}
} : {
	write() {},
	read() {
		return null;
	},
	remove() {}
};
//#endregion
//#region node_modules/axios/lib/helpers/isAbsoluteURL.js
function Wn(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
function Gn(e, t) {
	if (!t) return e;
	let n = e.length;
	for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
	return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
var Kn = /^https?:(?!\/\/)/i, qn = /[\t\n\r]/g;
function Jn(e) {
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t);
}
function Yn(e) {
	return Jn(e).replace(qn, "");
}
function Xn(e) {
	return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = "") => `${t}${n}${Qt}`);
}
function Zn(e) {
	let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${Qt}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${Qt}`);
	return n === -1 ? r : `${r}#${Xn(t.slice(n + 1))}`;
}
function Qn(e, t) {
	if (typeof e == "string") {
		let n = Yn(e);
		if (Kn.test(n)) throw new G(`Invalid URL ${JSON.stringify(Zn(n))}: missing "//" after protocol`, G.ERR_INVALID_URL, t);
	}
}
function $n(e, t, n, r) {
	Qn(t, r);
	let i = !Wn(t);
	return e && (i || n === !1) ? (Qn(e, r), Gn(e, t)) : t;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var er = (e) => e instanceof W ? { ...e } : e, tr = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
function J(e, t) {
	e ||= {}, t ||= {};
	let n = Object.create(null);
	Object.defineProperty(n, "hasOwnProperty", {
		__proto__: null,
		value: Object.prototype.hasOwnProperty,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
	function r(e, t, n, r) {
		return U.isPlainObject(e) && U.isPlainObject(t) ? U.merge.call({ caseless: r }, e, t) : U.isPlainObject(t) ? U.merge({}, t) : U.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!U.isUndefined(t)) return r(e, t, n, i);
		if (!U.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!U.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!U.isUndefined(t)) return r(void 0, t);
		if (!U.isUndefined(e)) return r(void 0, e);
	}
	function s(n) {
		let r = U.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!U.isUndefined(r)) {
			if (U.isPlainObject(r)) {
				if (U.hasOwnProp(r, n)) return r[n];
			} else return;
		}
		let i = U.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (U.isPlainObject(i) && U.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (U.hasOwnProp(t, a)) return r(n, i);
		if (U.hasOwnProp(e, a)) return r(void 0, n);
	}
	let l = {
		url: a,
		method: a,
		data: a,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutMessage: o,
		withCredentials: o,
		withXSRFToken: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		allowedSocketPaths: o,
		responseEncoding: o,
		validateStatus: c,
		headers: (e, t, n) => i(er(e), er(t), n, !0)
	};
	return U.forEach(tr({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = U.hasOwnProp(l, r) ? l[r] : i, o = a(U.hasOwnProp(e, r) ? e[r] : void 0, U.hasOwnProp(t, r) ? t[r] : void 0, r);
		U.isUndefined(o) && a !== c || (n[r] = o);
	}), U.hasOwnProp(t, "validateStatus") && U.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (U.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
//#endregion
//#region node_modules/axios/lib/core/setFormDataHeaders.js
var nr = ["content-type", "content-length"];
function rr(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		nr.includes(t.toLowerCase()) && e.set(t, n);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var ir = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function ar(e) {
	let t = J({}, e), n = (e) => U.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = W.from(s), t.url = mn($n(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = U.getSafeProp(c, "username") || "", n = U.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? ir(n) : "")));
		} catch (t) {
			throw G.from(t, G.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (U.isFormData(r) && (K.hasStandardBrowserEnv || K.hasStandardBrowserWebWorkerEnv || U.isReactNative(r) ? s.setContentType(void 0) : U.isFunction(r.getHeaders) && rr(s, r.getHeaders(), n("formDataHeaderPolicy"))), K.hasStandardBrowserEnv && (U.isFunction(i) && (i = i(t)), i === !0 || i == null && Hn(t.url))) {
		let e = a && o && Un.read(o);
		e && s.set(a, e);
	}
	return t;
}
var or = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = ar(e), i = r.data, a = W.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p;
		function m() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let h = new XMLHttpRequest();
		h.open(r.method.toUpperCase(), r.url, !0), h.timeout = r.timeout;
		function g() {
			if (!h) return;
			let r = W.from("getAllResponseHeaders" in h && h.getAllResponseHeaders());
			Fn(function(e) {
				t(e), m();
			}, function(e) {
				n(e), m();
			}, {
				data: !o || o === "text" || o === "json" ? h.responseText : h.response,
				status: h.status,
				statusText: h.statusText,
				headers: r,
				config: e,
				request: h
			}), h = null;
		}
		"onloadend" in h ? h.onloadend = g : h.onreadystatechange = function() {
			h && h.readyState === 4 && (h.status !== 0 || h.responseURL && h.responseURL.startsWith("file:")) && setTimeout(g);
		}, h.onabort = function() {
			h &&= (n(new G("Request aborted", G.ECONNABORTED, e, h)), m(), null);
		}, h.onerror = function(t) {
			let r = new G(t && t.message ? t.message : "Network Error", G.ERR_NETWORK, e, h);
			r.event = t || null, n(r), m(), h = null;
		}, h.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || gn;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new G(t, i.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED, e, h)), m(), h = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in h && U.forEach(zt(a), function(e, t) {
			h.setRequestHeader(t, e);
		}), U.isUndefined(r.withCredentials) || (h.withCredentials = !!r.withCredentials), o && o !== "json" && (h.responseType = r.responseType), c && ([d, p] = zn(c, !0), h.addEventListener("progress", d)), s && h.upload && ([u, f] = zn(s), h.upload.addEventListener("progress", u), h.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			h &&= (n(!t || t.type ? new Pn(null, e, h) : t), h.abort(), m(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let _ = In(r.url);
		if (_ && !K.protocols.includes(_)) {
			n(new G("Unsupported protocol " + _ + ":", G.ERR_BAD_REQUEST, e)), m();
			return;
		}
		h.send(i || null);
	});
}, sr = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof G ? t : new Pn(t instanceof Error ? t.message : t));
		}
	}, a = t && setTimeout(() => {
		a = null, i(new G(`timeout of ${t}ms exceeded`, G.ETIMEDOUT));
	}, t), o = () => {
		e &&= (a && clearTimeout(a), a = null, e.forEach((e) => {
			e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i);
		}), null);
	};
	e.forEach((e) => {
		if (!r) {
			if (e.aborted) {
				i.call(e);
				return;
			}
			e.addEventListener("abort", i, { once: !0 });
		}
	});
	let { signal: s } = n;
	return s.unsubscribe = () => U.asap(o), s;
}, cr = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, lr = async function* (e, t) {
	for await (let n of ur(e)) yield* cr(n, t);
}, ur = async function* (e) {
	if (e[Symbol.asyncIterator]) {
		yield* e;
		return;
	}
	let t = e.getReader();
	try {
		for (;;) {
			let { done: e, value: n } = await t.read();
			if (e) break;
			yield n;
		}
	} finally {
		await t.cancel();
	}
}, dr = (e, t, n, r) => {
	let i = lr(e, t), a = 0, o, s = (e) => {
		o || (o = !0, r && r(e));
	};
	return new ReadableStream({
		async pull(e) {
			try {
				let { done: t, value: r } = await i.next();
				if (t) {
					s(), e.close();
					return;
				}
				let o = r.byteLength;
				n && n(a += o), e.enqueue(new Uint8Array(r));
			} catch (e) {
				throw s(e), e;
			}
		},
		cancel(e) {
			return s(e), i.return();
		}
	}, { highWaterMark: 2 });
}, fr = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, pr = (e, t, n) => t + 2 < n && fr(e.charCodeAt(t + 1)) && fr(e.charCodeAt(t + 2)), mr = (e) => e <= 57 ? e - 48 : (e & 223) - 55, hr = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, gr = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, _r = (e) => {
	let t = Math.floor(e / 4), n = e % 4;
	return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, vr = (e) => {
	let t = e.length, n = 0;
	return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, yr = (e) => {
	let t = e.length, n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let o = e.charCodeAt(a);
		if (o === 37 && pr(e, a, t) && (o = mr(e.charCodeAt(a + 1)) * 16 + mr(e.charCodeAt(a + 2)), a += 2), !gr(o)) {
			if (o === 61) {
				r++;
				continue;
			}
			if (!hr(o) || r > 0) {
				i = !0;
				continue;
			}
			n++;
		}
	}
	return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? vr(e) : _r(n);
}, br = (e, t) => {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let n = e.indexOf(",");
	if (n < 0) return 0;
	let r = e.slice(5, n), i = e.slice(n + 1);
	if (/;base64/i.test(r)) return t(i);
	let a = 0;
	for (let e = 0, t = i.length; e < t; e++) {
		let n = i.charCodeAt(e);
		if (n === 37 && pr(i, e, t)) a += 1, e += 2;
		else if (n < 128) a += 1;
		else if (n < 2048) a += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = i.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3;
		} else a += 3;
	}
	return a;
};
function xr(e) {
	let t = typeof e == "string" ? e.indexOf("#") : -1;
	return br(t === -1 ? e : e.slice(0, t), yr);
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var Sr = "1.19.0", Cr = 65536, { isFunction: wr } = U, Tr = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Er = (e) => {
	if (!U.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, Dr = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, Or = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, kr = (e) => {
	let t = U.global !== void 0 && U.global !== null ? U.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = U.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? wr(i) : typeof fetch == "function", c = wr(a), l = wr(o);
	if (!s) return !1;
	let u = s && wr(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && Dr(() => {
		let e = !1, t = new a(K.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && Dr(() => U.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
	s && [
		"text",
		"arrayBuffer",
		"blob",
		"formData",
		"stream"
	].forEach((e) => {
		!m[e] && (m[e] = (t, n) => {
			let r = t && t[e];
			if (r) return r.call(t);
			throw new G(`Response type '${e}' is not supported`, G.ERR_NOT_SUPPORT, n);
		});
	});
	let h = async (e) => {
		if (e == null) return 0;
		if (U.isBlob(e)) return e.size;
		if (U.isSpecCompliantForm(e)) return (await new a(K.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (U.isArrayBufferView(e) || U.isArrayBuffer(e)) return e.byteLength;
		if (U.isURLSearchParams(e) && (e += ""), U.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => U.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: ee, onUploadProgress: te, responseType: v, headers: y, withCredentials: b = "same-origin", fetchOptions: ne, maxContentLength: x, maxBodyLength: S } = ar(e), C = U.isNumber(x) && x > -1, w = U.isNumber(S) && S > -1, T = (t) => U.hasOwnProp(e, t) ? e[t] : void 0, re = i || fetch;
		v = v ? (v + "").toLowerCase() : "text";
		let E = sr([l, d && d.toAbortSignal()], _), D = null, O = E && E.unsubscribe && (() => {
			E.unsubscribe();
		}), k, A = null, j = () => new G("Request body larger than maxBodyLength limit", G.ERR_BAD_REQUEST, e, D);
		try {
			let i, l = T("auth");
			if (l && (i = {
				username: U.getSafeProp(l, "username") || "",
				password: U.getSafeProp(l, "password") || ""
			}), Or(t)) {
				let e = new URL(t, K.origin);
				!i && (e.username || e.password) && (i = {
					username: Er(e.username),
					password: Er(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (y.delete("authorization"), y.set("Authorization", "Basic " + btoa(Tr((i.username || "") + ":" + (i.password || ""))))), C && typeof t == "string" && t.startsWith("data:") && xr(t) > x) throw new G("maxContentLength size of " + x + " exceeded", G.ERR_BAD_RESPONSE, e, D);
			if (w && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (k = e, e > S)) throw j();
			}
			let d = w && (U.isReadableStream(s) || U.isStream(s)), _ = (e, t, n) => dr(e, Cr, (e) => {
				if (w && e > S) throw A = j();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (te || d)) {
				if (k ??= await g(y, s), k !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (U.isFormData(s) && (n = e.headers.get("content-type")) && y.setContentType(n), e.body) {
						let [t, n] = te && Bn(k, zn(Vn(te))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new G("Stream request bodies are not supported by the current fetch implementation", G.ERR_NOT_SUPPORT, e, D);
			U.isString(b) || (b = b ? "include" : "omit");
			let ie = c && "credentials" in a.prototype;
			if (U.isFormData(s)) {
				let e = y.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && y.delete("content-type");
			}
			y.set("User-Agent", "axios/" + Sr, !1);
			let ae = {
				...ne,
				signal: E,
				method: n.toUpperCase(),
				headers: zt(y.normalize()),
				body: s,
				duplex: "half",
				credentials: ie ? b : void 0
			};
			D = c && new a(t, ae);
			let M = await (c ? re(D, ne) : re(t, ae)), oe = W.from(M.headers);
			if (C) {
				let t = U.toFiniteNumber(oe.getContentLength());
				if (t != null && t > x) throw new G("maxContentLength size of " + x + " exceeded", G.ERR_BAD_RESPONSE, e, D);
			}
			let se = p && (v === "stream" || v === "response");
			if (p && M.body && (ee || C || se && O)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = M[e];
				});
				let n = U.toFiniteNumber(oe.getContentLength()), [r, i] = ee && Bn(n, zn(Vn(ee), !0)) || [], a = 0;
				M = new o(dr(M.body, Cr, (t) => {
					if (C && (a = t, a > x)) throw new G("maxContentLength size of " + x + " exceeded", G.ERR_BAD_RESPONSE, e, D);
					r && r(t);
				}, () => {
					i && i(), O && O();
				}), t);
			}
			v ||= "text";
			let N = await m[U.findKey(m, v) || "text"](M, e);
			if (C && !p && !se) {
				let t;
				if (N != null && (typeof N.byteLength == "number" ? t = N.byteLength : typeof N.size == "number" ? t = N.size : typeof N == "string" && (t = typeof r == "function" ? new r().encode(N).byteLength : N.length)), typeof t == "number" && t > x) throw new G("maxContentLength size of " + x + " exceeded", G.ERR_BAD_RESPONSE, e, D);
			}
			return !se && O && O(), await new Promise((t, n) => {
				Fn(t, n, {
					data: N,
					headers: W.from(M.headers),
					status: M.status,
					statusText: M.statusText,
					config: e,
					request: D
				});
			});
		} catch (t) {
			if (O && O(), E && E.aborted && E.reason instanceof G) {
				let n = E.reason;
				throw n.config = e, D && (n.request = D), t !== n && Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			if (A) throw D && !A.request && (A.request = D), A;
			if (t instanceof G) throw D && !t.request && (t.request = D), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new G("Network Error", G.ERR_NETWORK, e, D, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw G.from(t, t && t.code, e, D, t && t.response);
		}
	};
}, Ar = /* @__PURE__ */ new Map(), jr = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = Ar;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : kr(t)), l = c;
	return c;
};
jr();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
var Mr = {
	http: null,
	xhr: or,
	fetch: { get: jr }
};
U.forEach(Mr, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", {
				__proto__: null,
				value: t
			});
		} catch {}
		Object.defineProperty(e, "adapterName", {
			__proto__: null,
			value: t
		});
	}
});
var Nr = (e) => `- ${e}`, Pr = (e) => U.isFunction(e) || e === null || e === !1;
function Fr(e, t) {
	e = U.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Pr(r) && (i = Mr[(n = String(r)).toLowerCase()], i === void 0)) throw new G(`Unknown adapter '${n}'`);
		if (i && (U.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new G("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Nr).join("\n") : " " + Nr(e[0]) : "as no adapter specified"), G.ERR_NOT_SUPPORT);
	}
	return i;
}
var Ir = {
	getAdapter: Fr,
	adapters: Mr
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
function Lr(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Pn(null, e);
}
function Rr(e) {
	return Lr(e), e.headers = W.from(e.headers), e.data = Mn.call(e, e.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ir.getAdapter(e.adapter || jn.adapter, e)(e).then(function(t) {
		Lr(e), e.response = t;
		try {
			t.data = Mn.call(e, e.transformResponse, t);
		} finally {
			delete e.response;
		}
		return t.headers = W.from(t.headers), t;
	}, function(t) {
		if (!Nn(t) && (Lr(e), t && t.response)) {
			e.response = t.response;
			try {
				t.response.data = Mn.call(e, e.transformResponse, t.response);
			} finally {
				delete e.response;
			}
			t.response.headers = W.from(t.response.headers);
		}
		return Promise.reject(t);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var zr = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	zr[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var Br = {};
zr.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + Sr + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new G(r(i, " has been removed" + (t ? " in " + t : "")), G.ERR_DEPRECATED);
		return t && !Br[i] && (Br[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, zr.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Vr(e, t, n) {
	if (typeof e != "object" || !e) throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new G("option " + a + " must be " + n, G.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new G("Unknown option " + a, G.ERR_BAD_OPTION);
	}
}
var Hr = {
	assertOptions: Vr,
	validators: zr
}, Y = Hr.validators, X = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new hn(),
			response: new hn()
		};
	}
	async request(e, t) {
		try {
			return await this._request(e, t);
		} catch (e) {
			if (e instanceof Error) {
				let t = {};
				Error.captureStackTrace ? Error.captureStackTrace(t) : t = /* @__PURE__ */ Error();
				let n = (() => {
					if (!t.stack) return "";
					let e = t.stack.indexOf("\n");
					return e === -1 ? "" : t.stack.slice(e + 1);
				})();
				try {
					if (!e.stack) e.stack = n;
					else if (n) {
						let t = n.indexOf("\n"), r = t === -1 ? -1 : n.indexOf("\n", t + 1), i = r === -1 ? "" : n.slice(r + 1);
						String(e.stack).endsWith(i) || (e.stack += "\n" + n);
					}
				} catch {}
			}
			throw e;
		}
	}
	_request(e, t) {
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = J(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && Hr.assertOptions(n, {
			silentJSONParsing: Y.transitional(Y.boolean),
			forcedJSONParsing: Y.transitional(Y.boolean),
			clarifyTimeoutError: Y.transitional(Y.boolean),
			legacyInterceptorReqResOrdering: Y.transitional(Y.boolean),
			advertiseZstdAcceptEncoding: Y.transitional(Y.boolean),
			validateStatusUndefinedResolves: Y.transitional(Y.boolean)
		}, !1), r != null && (U.isFunction(r) ? t.paramsSerializer = { serialize: r } : Hr.assertOptions(r, {
			encode: Y.function,
			serialize: Y.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), Hr.assertOptions(t, {
			baseUrl: Y.spelling("baseURL"),
			withXsrfToken: Y.spelling("withXSRFToken")
		}, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
		let a = i && U.merge(i.common, i[t.method]);
		i && U.forEach([
			"delete",
			"get",
			"head",
			"post",
			"put",
			"patch",
			"query",
			"common"
		], (e) => {
			delete i[e];
		}), t.headers = W.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || gn;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [Rr.bind(this), void 0];
			for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;) l = l.then(e[u++], e[u++]);
			return l;
		}
		d = o.length;
		let f = t;
		for (; u < d;) {
			let e = o[u++], t = o[u++];
			try {
				f = e ? e(f) : f;
			} catch (e) {
				if (!t) {
					l = Promise.reject(e);
					break;
				}
				try {
					let n = t.call(this, e);
					U.isThenable(n) && (l = Promise.resolve(n).then(() => Rr.call(this, f)));
				} catch (e) {
					l = Promise.reject(e);
				}
				break;
			}
		}
		if (!l) try {
			l = Rr.call(this, f);
		} catch (e) {
			l = Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = J(this.defaults, e), mn($n(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
U.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	X.prototype[e] = function(t, n) {
		return this.request(J(n || {}, {
			method: e,
			url: t,
			data: n && U.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), U.forEach([
	"post",
	"put",
	"patch",
	"query"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request(J(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	X.prototype[e] = t(), e !== "query" && (X.prototype[e + "Form"] = t(!0));
});
//#endregion
//#region node_modules/axios/lib/cancel/CancelToken.js
var Ur = class e {
	constructor(e) {
		if (typeof e != "function") throw TypeError("executor must be a function.");
		let t;
		this.promise = new Promise(function(e) {
			t = e;
		});
		let n = this;
		this.promise.then((e) => {
			if (!n._listeners) return;
			let t = n._listeners.length;
			for (; t-- > 0;) n._listeners[t](e);
			n._listeners = null;
		}), this.promise.then = (e) => {
			let t, r = new Promise((e) => {
				n.subscribe(e), t = e;
			}).then(e);
			return r.cancel = function() {
				n.unsubscribe(t);
			}, r;
		}, e(function(e, r, i) {
			n.reason || (n.reason = new Pn(e, r, i), t(n.reason));
		});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(e) : this._listeners = [e];
	}
	unsubscribe(e) {
		if (!this._listeners) return;
		let t = this._listeners.indexOf(e);
		t !== -1 && this._listeners.splice(t, 1);
	}
	toAbortSignal() {
		let e = new AbortController(), t = (t) => {
			e.abort(t);
		};
		return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
	}
	static source() {
		let t;
		return {
			token: new e(function(e) {
				t = e;
			}),
			cancel: t
		};
	}
};
//#endregion
//#region node_modules/axios/lib/helpers/spread.js
function Wr(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
function Gr(e) {
	return U.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var Kr = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
	WebServerReturnsAnUnknownError: 520,
	WebServerIsDown: 521,
	ConnectionTimedOut: 522,
	OriginIsUnreachable: 523,
	TimeoutOccurred: 524,
	SslHandshakeFailed: 525,
	InvalidSslCertificate: 526
};
Object.entries(Kr).forEach(([e, t]) => {
	Kr[t] = e;
});
//#endregion
//#region node_modules/axios/lib/axios.js
function qr(e) {
	let t = new X(e), n = Ce(X.prototype.request, t);
	return U.extend(n, X.prototype, t, { allOwnKeys: !0 }), U.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return qr(J(e, t));
	}, n;
}
var Z = qr(jn);
Z.Axios = X, Z.CanceledError = Pn, Z.CancelToken = Ur, Z.isCancel = Nn, Z.VERSION = Sr, Z.toFormData = ln, Z.AxiosError = G, Z.Cancel = Z.CanceledError, Z.all = function(e) {
	return Promise.all(e);
}, Z.spread = Wr, Z.isAxiosError = Gr, Z.mergeConfig = J, Z.AxiosHeaders = W, Z.formToJSON = (e) => kn(U.isHTMLForm(e) ? new FormData(e) : e), Z.getAdapter = Ir.getAdapter, Z.HttpStatusCode = Kr, Z.default = Z;
//#endregion
//#region node_modules/axios/index.js
var { Axios: Jr, AxiosError: Yr, CanceledError: Xr, isCancel: Zr, CancelToken: Qr, VERSION: $r, all: ei, Cancel: ti, isAxiosError: ni, spread: ri, toFormData: ii, AxiosHeaders: ai, HttpStatusCode: oi, formToJSON: si, getAdapter: ci, mergeConfig: li, create: ui } = Z;
//#endregion
//#region node_modules/@nextcloud/axios/dist/client.js
function di() {
	let t = Z.create({ headers: {
		requesttoken: e() ?? "",
		"X-Requested-With": "XMLHttpRequest"
	} });
	return r((e) => {
		t.defaults.headers.requesttoken = e;
	}), Object.assign(t, {
		CancelToken: Z.CancelToken,
		isCancel: Z.isCancel
	});
}
//#endregion
//#region node_modules/@nextcloud/axios/dist/interceptors/csrf-token.js
var fi = "_nextcloudCsrfTokenReloaded";
function pi(e) {
	return async (t) => {
		if (!ni(t)) throw t;
		let { config: n, response: r, request: a } = t, o = a?.responseURL;
		if (n && !(fi in n) && r?.status === 412 && r?.data?.message === "CSRF check failed") {
			console.warn(`Request to ${o} failed because of a CSRF mismatch. Fetching a new token.`);
			let t = await i();
			return e.defaults.headers.requesttoken = t, e({
				...n,
				[fi]: !0,
				headers: {
					...n.headers,
					requesttoken: t
				}
			});
		}
		throw t;
	};
}
//#endregion
//#region node_modules/@nextcloud/axios/dist/interceptors/maintenance-mode.js
var mi = "_nextcloudMaintenanceModeRetryDelay";
function hi(e) {
	return async (t) => {
		if (!ni(t)) throw t;
		let { config: n, response: r, request: i } = t, a = i?.responseURL, o = r?.status, s = r?.headers, c = n?.[mi] ?? 1;
		if (o === 503 && s?.["x-nextcloud-maintenance-mode"] === "1" && n?.retryIfMaintenanceMode) {
			if (c *= 2, c > 32) throw console.error("Retry delay exceeded one minute, giving up.", { responseURL: a }), t;
			return console.warn(`Request to ${a} failed because of maintenance mode. Retrying in ${c}s`), await new Promise((e) => {
				setTimeout(e, c * 1e3);
			}), e({
				...n,
				[mi]: c
			});
		}
		throw t;
	};
}
//#endregion
//#region node_modules/@nextcloud/axios/dist/interceptors/not-logged-in.js
async function gi(e) {
	if (ni(e)) {
		let { config: t, response: n, request: r } = e, i = r?.responseURL;
		n?.status === 401 && n?.data?.message === "Current user is not logged in" && t?.reloadExpiredSession && globalThis.location?.reload && (console.error(`Request to ${i} failed because the user session expired. Reloading the page …`), globalThis.OC?.reload ? globalThis.OC.reload() : globalThis.location.reload());
	}
	throw e;
}
//#endregion
//#region node_modules/@nextcloud/axios/dist/index.js
var Q = di();
Q.interceptors.response.use((e) => e, pi(Q)), Q.interceptors.response.use((e) => e, hi(Q)), Q.interceptors.response.use((e) => e, gi);
//#endregion
//#region node_modules/debounce/index.js
function _i(e, t = 100, n = {}) {
	if (typeof e != "function") throw TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);
	if (t < 0) throw RangeError("`wait` must not be negative.");
	if (typeof n == "boolean") throw TypeError("The `options` parameter must be an object, not a boolean. Use `{immediate: true}` instead.");
	let { immediate: r } = n, i, a, o, s, c;
	function l() {
		let t = i, n = a;
		return i = void 0, a = void 0, c = e.apply(t, n), c;
	}
	function u() {
		let e = Date.now() - s;
		e < t && e >= 0 ? o = setTimeout(u, t - e) : (o = void 0, r || (c = l()));
	}
	let d = function(...e) {
		if (i && this !== i && Object.getPrototypeOf(this) === Object.getPrototypeOf(i)) throw Error("Debounced method called with different contexts of the same prototype.");
		i = this, a = e, s = Date.now();
		let n = r && !o;
		if (o ||= setTimeout(u, t), n) return c = l(), c;
	};
	return Object.defineProperty(d, "isPending", { get() {
		return o !== void 0;
	} }), d.clear = () => {
		o && (clearTimeout(o), o = void 0, i = void 0, a = void 0);
	}, d.flush = () => {
		o && d.trigger();
	}, d.trigger = () => {
		c = l(), d.clear();
	}, d;
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcActionLink.mjs
var vi = {
	name: "NcActionLink",
	mixins: [oe],
	inject: { isInSemanticMenu: {
		from: j,
		default: !1
	} },
	props: {
		href: {
			type: String,
			required: !0,
			validator: (e) => {
				try {
					return new URL(e);
				} catch {
					return e.startsWith("#") || e.startsWith("/");
				}
			}
		},
		download: {
			type: String,
			default: null
		},
		target: {
			type: String,
			default: "_self",
			validator: (e) => e && (!e.startsWith("_") || [
				"_blank",
				"_self",
				"_parent",
				"_top"
			].indexOf(e) > -1)
		},
		title: {
			type: String,
			default: null
		}
	}
}, yi = ["role"], bi = [
	"download",
	"href",
	"aria-label",
	"target",
	"title",
	"role"
], xi = {
	key: 0,
	class: "action-link__longtext-wrapper"
}, Si = { class: "action-link__name" }, Ci = ["textContent"], wi = ["textContent"], Ti = {
	key: 2,
	class: "action-link__text"
};
function Ei(e, t, n, r, i, a) {
	return s(), C("li", {
		class: "action",
		role: a.isInSemanticMenu && "presentation"
	}, [T("a", {
		download: n.download,
		href: n.href,
		"aria-label": e.ariaLabel,
		target: n.target,
		title: n.title,
		class: "action-link focusable",
		rel: "nofollow noreferrer noopener",
		role: a.isInSemanticMenu && "menuitem",
		onClick: t[0] ||= (...t) => e.onClick && e.onClick(...t)
	}, [
		b(e.$slots, "icon", {}, () => [T("span", {
			"aria-hidden": "true",
			class: O(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
			style: v({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
		}, null, 6)], !0),
		e.name ? (s(), C("span", xi, [
			T("strong", Si, w(e.name), 1),
			t[1] ||= T("br", null, null, -1),
			T("span", {
				class: "action-link__longtext",
				textContent: w(e.text)
			}, null, 8, Ci)
		])) : e.isLongText ? (s(), C("span", {
			key: 1,
			class: "action-link__longtext",
			textContent: w(e.text)
		}, null, 8, wi)) : (s(), C("span", Ti, w(e.text), 1)),
		h("", !0)
	], 8, bi)], 8, yi);
}
var Di = /* @__PURE__ */ l(vi, [["render", Ei], ["__scopeId", "data-v-32f01b7a"]]), Oi = {
	name: "NcActionRouter",
	mixins: [oe],
	inject: { isInSemanticMenu: {
		from: j,
		default: !1
	} },
	props: { to: {
		type: [String, Object],
		required: !0
	} }
}, ki = ["role"], Ai = {
	key: 0,
	class: "action-router__longtext-wrapper"
}, ji = { class: "action-router__name" }, Mi = ["textContent"], Ni = ["textContent"], Pi = {
	key: 2,
	class: "action-router__text"
};
function Fi(e, t, n, r, i, a) {
	let o = c("RouterLink");
	return s(), C("li", {
		class: "action",
		role: a.isInSemanticMenu && "presentation"
	}, [ne(o, {
		"aria-label": e.ariaLabel,
		class: "action-router focusable",
		rel: "nofollow noreferrer noopener",
		role: a.isInSemanticMenu && "menuitem",
		title: e.title,
		to: n.to,
		onClick: e.onClick
	}, {
		default: d(() => [
			b(e.$slots, "icon", {}, () => [T("span", {
				"aria-hidden": "true",
				class: O(["action-router__icon", [e.isIconUrl ? "action-router__icon--url" : e.icon]]),
				style: v({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
			}, null, 6)], !0),
			e.name ? (s(), C("span", Ai, [
				T("strong", ji, w(e.name), 1),
				t[0] ||= T("br", null, null, -1),
				T("span", {
					class: "action-router__longtext",
					textContent: w(e.text)
				}, null, 8, Mi)
			])) : e.isLongText ? (s(), C("span", {
				key: 1,
				class: "action-router__longtext",
				textContent: w(e.text)
			}, null, 8, Ni)) : (s(), C("span", Pi, w(e.text), 1)),
			h("", !0)
		]),
		_: 3
	}, 8, [
		"aria-label",
		"role",
		"title",
		"to",
		"onClick"
	])], 8, ki);
}
var Ii = /* @__PURE__ */ l(Oi, [["render", Fi], ["__scopeId", "data-v-87267750"]]), Li = {
	name: "ChevronRightIcon",
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
}, Ri = ["aria-hidden", "aria-label"], zi = [
	"fill",
	"width",
	"height"
], Bi = { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }, Vi = { key: 0 };
function Hi(e, t, n, r, i, a) {
	return s(), C("span", k(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon chevron-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(s(), C("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [T("path", Bi, [n.title ? (s(), C("title", Vi, w(n.title), 1)) : h("", !0)])], 8, zi))], 16, Ri);
}
var Ui = {
	name: "NcBreadcrumb",
	components: {
		NcActions: ie,
		ChevronRight: /* @__PURE__ */ l(Li, [["render", Hi]]),
		NcButton: m
	},
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			required: !0
		},
		title: {
			type: String,
			default: null
		},
		to: {
			type: [String, Object],
			default: void 0
		},
		href: {
			type: String,
			default: void 0
		},
		icon: {
			type: String,
			default: ""
		},
		forceIconText: {
			type: Boolean,
			default: !1
		},
		disableDrop: {
			type: Boolean,
			default: !1
		},
		forceMenu: {
			type: Boolean,
			default: !1
		},
		open: {
			type: Boolean,
			default: !1
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
	emits: [
		"dragenter",
		"dragleave",
		"dropped",
		"update:open"
	],
	setup() {
		let e = E();
		return {
			actionsContainer: `.vue-crumb[data-crumb-id="${e}"]`,
			crumbId: e
		};
	},
	data() {
		return { hovering: !1 };
	},
	computed: { linkAttributes() {
		return this.to ? {
			to: this.to,
			...this.$attrs
		} : this.href ? {
			href: this.href,
			...this.$attrs
		} : this.$attrs;
	} },
	methods: {
		onOpenChange(e) {
			this.$emit("update:open", e);
		},
		dropped(e) {
			return !this.disableDrop && (this.$emit("dropped", e, this.to || this.href), this.$parent.$emit("dropped", e, this.to || this.href), this.hovering = !1, !1);
		},
		dragEnter(e) {
			this.$emit("dragenter", e), !this.disableDrop && (this.hovering = !0);
		},
		dragLeave(e) {
			this.$emit("dragleave", e), !this.disableDrop && (e.target.contains(e.relatedTarget) || this.$refs.crumb.contains(e.relatedTarget) || (this.hovering = !1));
		}
	}
}, Wi = ["data-crumb-id"];
function Gi(e, t, n, r, i, a) {
	let o = c("NcButton"), l = c("NcActions"), u = c("ChevronRight");
	return s(), C("li", {
		ref: "crumb",
		class: O(["vue-crumb", [{ "vue-crumb--hovered": i.hovering }, e.$props.class]]),
		"data-crumb-id": r.crumbId,
		draggable: "false",
		onDragstart: p(() => {}, ["prevent"]),
		onDrop: t[0] ||= p((...e) => a.dropped && a.dropped(...e), ["prevent"]),
		onDragover: p(() => {}, ["prevent"]),
		onDragenter: t[1] ||= (...e) => a.dragEnter && a.dragEnter(...e),
		onDragleave: t[2] ||= (...e) => a.dragLeave && a.dragLeave(...e)
	}, [
		(n.name || n.icon || e.$slots.icon) && !e.$slots.default ? (s(), y(o, k({
			key: 0,
			"aria-label": n.icon ? n.name : void 0,
			variant: "tertiary"
		}, a.linkAttributes), re({ _: 2 }, [e.$slots.icon || n.icon ? {
			name: "icon",
			fn: d(() => [b(e.$slots, "icon", {}, () => [T("span", { class: O([n.icon, "icon"]) }, null, 2)], !0)]),
			key: "0"
		} : void 0, !(e.$slots.icon || n.icon) || n.forceIconText ? {
			name: "default",
			fn: d(() => [_(w(n.name), 1)]),
			key: "1"
		} : void 0]), 1040, ["aria-label"])) : h("", !0),
		e.$slots.default ? (s(), y(l, {
			key: 1,
			ref: "actions",
			container: r.actionsContainer,
			forceMenu: n.forceMenu,
			forceName: "",
			menuName: n.name,
			open: n.open,
			title: n.title,
			variant: "tertiary",
			"onUpdate:open": a.onOpenChange
		}, {
			icon: d(() => [b(e.$slots, "menu-icon", {}, void 0, !0)]),
			default: d(() => [b(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, [
			"container",
			"forceMenu",
			"menuName",
			"open",
			"title",
			"onUpdate:open"
		])) : h("", !0),
		ne(u, {
			class: "vue-crumb__separator",
			size: 20
		})
	], 42, Wi);
}
var Ki = /* @__PURE__ */ l(Ui, [["render", Gi], ["__scopeId", "data-v-7cec4a3e"]]), qi = {
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
}, Ji = ["aria-hidden", "aria-label"], Yi = [
	"fill",
	"width",
	"height"
], Xi = { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" }, Zi = { key: 0 };
function Qi(e, t, n, r, i, a) {
	return s(), C("span", k(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(s(), C("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [T("path", Xi, [n.title ? (s(), C("title", Zi, w(n.title), 1)) : h("", !0)])], 8, Yi))], 16, Ji);
}
var $i = /* @__PURE__ */ l(qi, [["render", Qi]]), $ = "vue-crumb", ea = /* @__PURE__ */ l({
	name: "NcBreadcrumbs",
	components: {
		NcActions: ie,
		NcActionButton: ge,
		NcActionRouter: Ii,
		NcActionLink: Di,
		NcBreadcrumb: Ki,
		IconFolder: $i
	},
	props: {
		rootIcon: {
			type: String,
			default: "icon-home"
		},
		ariaLabel: {
			type: String,
			default: null
		}
	},
	emits: ["dropped"],
	data() {
		return {
			hiddenIndices: [],
			menuBreadcrumbProps: {
				name: "",
				forceMenu: !0,
				disableDrop: !0,
				open: !1
			},
			breadcrumbsRefs: []
		};
	},
	created() {
		window.addEventListener("resize", _i(() => {
			this.handleWindowResize();
		}, 100)), a("navigation-toggled", this.delayedResize);
	},
	mounted() {
		this.handleWindowResize();
	},
	updated() {
		this.delayedResize(), this.$nextTick(() => {
			this.hideCrumbs();
		});
	},
	beforeUnmount() {
		window.removeEventListener("resize", this.handleWindowResize), t("navigation-toggled", this.delayedResize);
	},
	methods: {
		closeActions(e) {
			this.$refs.actionsBreadcrumb.$el.contains(e.relatedTarget) || (this.menuBreadcrumbProps.open = !1);
		},
		async delayedResize() {
			await this.$nextTick(), this.handleWindowResize();
		},
		handleWindowResize() {
			if (!this.$refs.container) return;
			let e = this.breadcrumbsRefs.length, t = [], n = this.$refs.container.offsetWidth, r = this.getTotalWidth();
			this.$refs.breadcrumb__actions && (r += this.$refs.breadcrumb__actions.offsetWidth);
			let i = r - n;
			i += i > 0 ? 64 : 0;
			let a = 0, o = Math.floor(e / 2);
			for (; i > 0 && a < e - 2;) {
				let n = o + (a % 2 ? a + 1 : a) / 2 * (-1) ** (a + e % 2);
				i -= this.getWidth(this.breadcrumbsRefs[n]?.$el, n === this.breadcrumbsRefs.length - 1), t.push(n), a++;
			}
			this.arraysEqual(this.hiddenIndices, t.sort((e, t) => e - t)) || (this.hiddenIndices = t);
		},
		arraysEqual(e, t) {
			if (e.length !== t.length) return !1;
			if (e === t) return !0;
			if (e === null || t === null) return !1;
			for (let n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
			return !0;
		},
		getTotalWidth() {
			return this.breadcrumbsRefs.reduce((e, t, n) => e + this.getWidth(t.$el, n === this.breadcrumbsRefs.length - 1), 0);
		},
		getWidth(e, t) {
			if (!e?.classList) return 0;
			let n = e.classList.contains(`${$}--hidden`);
			e.style.minWidth = "auto", t && (e.style.maxWidth = "210px"), e.classList.remove(`${$}--hidden`);
			let r = e.offsetWidth;
			return n && e.classList.add(`${$}--hidden`), e.style.minWidth = "", e.style.maxWidth = "", r;
		},
		preventDefault(e) {
			return e.preventDefault && e.preventDefault(), !1;
		},
		dragStart(e) {
			return this.preventDefault(e);
		},
		dropped(e, t, n) {
			n || this.$emit("dropped", e, t), this.menuBreadcrumbProps.open = !1;
			let r = document.querySelectorAll(`.${$}`);
			for (let e of r) e.classList.remove(`${$}--hovered`);
			return this.preventDefault(e);
		},
		dragOver(e) {
			return this.preventDefault(e);
		},
		dragEnter(e, t) {
			if (!t && e.target.closest) {
				let t = e.target.closest(`.${$}`);
				if (t.classList && t.classList.contains($)) {
					let e = document.querySelectorAll(`.${$}`);
					for (let t of e) t.classList.remove(`${$}--hovered`);
					t.classList.add(`${$}--hovered`);
				}
			}
		},
		dragLeave(e, t) {
			if (!t && !e.target.contains(e.relatedTarget) && e.target.closest) {
				let t = e.target.closest(`.${$}`);
				if (t.contains(e.relatedTarget)) return;
				t.classList && t.classList.contains($) && t.classList.remove(`${$}--hovered`);
			}
		},
		hideCrumbs() {
			this.breadcrumbsRefs.forEach((e, t) => {
				e?.$el?.classList && (this.hiddenIndices.includes(t) ? e.$el.classList.add(`${$}--hidden`) : e.$el.classList.remove(`${$}--hidden`));
			});
		},
		isBreadcrumb(e) {
			return e?.type?.name === "NcBreadcrumb";
		}
	},
	render() {
		let e = [];
		if (this.$slots.default?.().forEach((t) => {
			if (this.isBreadcrumb(t)) {
				e.push(t);
				return;
			}
			t?.type === u && t?.children?.forEach?.((t) => {
				this.isBreadcrumb(t) && e.push(t);
			});
		}), e.length === 0) return;
		e[0] = D(e[0], {
			icon: this.rootIcon,
			ref: "breadcrumbs"
		});
		let t = [];
		e = e.map((e, n) => D(e, { ref: (e) => {
			t[n] = e;
		} }));
		let n = [...e];
		this.hiddenIndices.length && n.splice(Math.round(e.length / 2), 0, S(Ki, {
			class: "dropdown",
			...this.menuBreadcrumbProps,
			"aria-hidden": !0,
			ref: "actionsBreadcrumb",
			key: "actions-breadcrumb-1",
			onDragenter: () => {
				this.menuBreadcrumbProps.open = !0;
			},
			onDragleave: this.closeActions,
			"onUpdate:open": (e) => {
				this.menuBreadcrumbProps.open = e;
			}
		}, { default: () => this.hiddenIndices.filter((t) => t <= e.length - 1).map((t) => {
			let { to: n, href: r, disableDrop: i, name: a, ...o } = e[t].props;
			delete o.ref;
			let s = ge, c = "";
			r && (s = Di, c = r), n && (s = Ii, c = n);
			let l = S($i, { size: 20 });
			return S(s, {
				...o,
				class: $,
				href: r || null,
				to: n || null,
				draggable: !1,
				onDragstart: this.dragStart,
				onDrop: (e) => this.dropped(e, c, i),
				onDragover: this.dragOver,
				onDragenter: (e) => this.dragEnter(e, i),
				onDragleave: (e) => this.dragLeave(e, i)
			}, {
				default: () => a,
				icon: () => l
			});
		}) }));
		let r = [S("nav", { "aria-label": this.ariaLabel }, [S("ul", { class: "breadcrumb__crumbs" }, [n])])];
		return ae(this.$slots.actions?.()) && r.push(S("div", {
			class: "breadcrumb__actions",
			ref: "breadcrumb__actions"
		}, this.$slots.actions?.())), this.breadcrumbsRefs = t, S("div", {
			class: ["breadcrumb", { "breadcrumb--collapsed": this.hiddenIndices.length === e.length - 2 }],
			ref: "container"
		}, r);
	}
}, [["__scopeId", "data-v-5a4d73af"]]);
//#endregion
export { Se as a, Q as i, Ki as n, ge as o, _i as r, M as s, ea as t };
