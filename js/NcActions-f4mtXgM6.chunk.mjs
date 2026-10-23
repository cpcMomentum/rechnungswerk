import { a as e, d as t, g as n, o as r, r as i, u as a } from "./logger-Dmvqkkgn.chunk.mjs";
import { Gn as o, Hn as s, Nn as c, On as l, Pn as u, Q as d, Qt as f, X as p, Xt as m, Z as h, an as g, c as _, cn as v, dn as ee, dr as y, f as b, fr as x, hr as S, in as C, ln as w, mn as T, mr as E, on as D, rn as O, sn as te, t as k, tn as A, vn as j } from "./createElementId-BhyzukIw.chunk.mjs";
import { F as ne, I as M, N as re, P as ie } from "./chunks-DROf82q0.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/actionGlobal.mjs
var N = {
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
}, P = {
	mixins: [N],
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
	inject: { closeMenu: { from: ne } },
	emits: ["click"],
	created() {
		"ariaHidden" in this.$attrs && s("[NcAction*]: Do not set the ariaHidden attribute as the root element will inherit the incorrect aria-hidden.");
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
}, F = {
	name: "NcActionButton",
	components: { NcIconSvgWrapper: p },
	mixins: [P],
	inject: { isInSemanticMenu: {
		from: M,
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
			mdiCheck: _,
			mdiChevronRight: b
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
}, ae = ["role"], oe = [
	"aria-label",
	"disabled",
	"title",
	"type"
], I = { class: "action-button__longtext-wrapper" }, se = {
	key: 0,
	class: "action-button__name"
}, ce = ["textContent"], le = {
	key: 2,
	class: "action-button__text"
}, ue = ["textContent"], de = {
	key: 2,
	class: "action-button__pressed-icon material-design-icon"
};
function fe(e, t, n, r, i, a) {
	let o = u("NcIconSvgWrapper");
	return l(), D("li", {
		class: x(["action", { "action--disabled": n.disabled }]),
		role: a.isInSemanticMenu && "presentation"
	}, [O("button", j({
		"aria-label": e.ariaLabel,
		class: ["action-button button-vue", {
			"action-button--active": a.isChecked,
			focusable: a.isFocusable
		}],
		disabled: n.disabled,
		title: e.title,
		type: a.nativeType
	}, a.buttonAttributes, { onClick: t[0] ||= (...e) => a.handleClick && a.handleClick(...e) }), [
		c(e.$slots, "icon", {}, () => [O("span", {
			class: x([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
			style: E({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
			"aria-hidden": "true"
		}, null, 6)], !0),
		O("span", I, [
			e.name ? (l(), D("strong", se, S(e.name), 1)) : g("", !0),
			e.isLongText ? (l(), D("span", {
				key: 1,
				class: "action-button__longtext",
				textContent: S(e.text)
			}, null, 8, ce)) : (l(), D("span", le, S(e.text), 1)),
			n.description ? (l(), D("span", {
				key: 3,
				class: "action-button__description",
				textContent: S(n.description)
			}, null, 8, ue)) : g("", !0)
		]),
		n.isMenu ? (l(), C(o, {
			key: 0,
			class: "action-button__menu-icon",
			directional: "",
			path: r.mdiChevronRight
		}, null, 8, ["path"])) : a.isChecked ? (l(), C(o, {
			key: 1,
			path: r.mdiCheck,
			class: "action-button__pressed-icon"
		}, null, 8, ["path"])) : a.isChecked === !1 ? (l(), D("span", de)) : g("", !0),
		g("", !0)
	], 16, oe)], 10, ae);
}
var pe = /* @__PURE__ */ d(F, [["render", fe], ["__scopeId", "data-v-6c2daf4e"]]), me = ["aria-labelledby"], he = {
	key: 0,
	class: "empty-content__icon",
	"aria-hidden": "true"
}, ge = ["id"], _e = {
	key: 2,
	class: "empty-content__description"
}, ve = {
	key: 3,
	class: "empty-content__action"
}, ye = /* @__PURE__ */ d(/* @__PURE__ */ ee({
	__name: "NcEmptyContent",
	props: {
		description: { default: "" },
		name: { default: "" }
	},
	setup(e) {
		let t = k();
		return (n, r) => (l(), D("div", {
			"aria-labelledby": y(t),
			class: "empty-content",
			role: "note"
		}, [
			n.$slots.icon ? (l(), D("div", he, [c(n.$slots, "icon", {}, void 0, !0)])) : g("", !0),
			e.name !== "" || n.$slots.name ? (l(), D("div", {
				key: 1,
				id: y(t),
				class: "empty-content__name"
			}, [c(n.$slots, "name", {}, () => [v(S(e.name), 1)], !0)], 8, ge)) : g("", !0),
			e.description !== "" || n.$slots.description ? (l(), D("p", _e, [c(n.$slots, "description", {}, () => [v(S(e.description), 1)], !0)])) : g("", !0),
			n.$slots.action ? (l(), D("div", ve, [c(n.$slots, "action", {}, void 0, !0)])) : g("", !0)
		], 8, me));
	}
}), [["__scopeId", "data-v-8609a4c1"]]);
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function be(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: xe } = Object.prototype, { getPrototypeOf: L } = Object, { iterator: Se, toStringTag: Ce } = Symbol, we = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Te = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), Ee = (e, t, n) => e === Object.prototype || !n && t === null, De = (e) => {
	if (!Object.isExtensible(e)) return !1;
	let t = Object.getOwnPropertyNames(e);
	return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((t) => {
		if (Te(t)) return !1;
		let n = Object.getOwnPropertyDescriptor(e, t);
		return !!n && n.configurable && n.writable === !0;
	});
}, Oe = (e, t) => {
	let n = e, r = [];
	for (; n != null;) {
		if (r.indexOf(n) !== -1) return !1;
		r.push(n);
		let i = L(n);
		if (Ee(n, i, n === e)) return !1;
		if (we(n, t)) return !0;
		n = i;
	}
	return !1;
}, ke = (e, t) => e != null && Oe(e, t) ? e[t] : void 0, Ae = (e) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	let t = L(e);
	if (t === null && De(e)) return e;
	let n = Object.create(null), r = Object.create(null), i = [], a = e;
	for (; a != null && i.indexOf(a) === -1;) {
		i.push(a);
		let o = a === e ? t : L(a);
		if (Ee(a, o, a === e)) break;
		let s = Object.getOwnPropertyNames(a);
		Object.getOwnPropertySymbols && s.push(...Object.getOwnPropertySymbols(a));
		for (let t of s) Te(t) || we(r, t) || (n[t] = e[t], r[t] = !0);
		a = o;
	}
	return n;
}, je = ((e) => (t) => {
	let n = xe.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), R = (e) => (e = e.toLowerCase(), (t) => je(t) === e), Me = (e) => (t) => typeof t === e, { isArray: z } = Array, B = Me("undefined");
function V(e) {
	return e !== null && !B(e) && e.constructor !== null && !B(e.constructor) && H(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Ne = R("ArrayBuffer");
function Pe(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Ne(e.buffer), t;
}
var Fe = Me("string"), H = Me("function"), Ie = Me("number"), U = (e) => typeof e == "object" && !!e, Le = (e) => e === !0 || e === !1, Re = (e) => {
	if (!U(e)) return !1;
	let t = L(e);
	return (t === null || t === Object.prototype || L(t) === null) && !Oe(e, Ce) && !Oe(e, Se);
}, ze = (e) => {
	if (!U(e) || V(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, Be = R("Date"), Ve = R("File"), He = (e) => !!(e && e.uri !== void 0), Ue = (e) => e && e.getParts !== void 0, We = R("Blob"), Ge = R("FileList"), Ke = R("Set"), qe = (e) => U(e) && H(e.pipe);
function Je() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var Ye = Je(), Xe = Ye.FormData === void 0 ? void 0 : Ye.FormData, Ze = (e) => {
	if (!e) return !1;
	if (Xe && e instanceof Xe) return !0;
	let t = L(e);
	if (!t || t === Object.prototype || !H(e.append)) return !1;
	let n = je(e);
	return n === "formdata" || n === "object" && H(e.toString) && e.toString() === "[object FormData]";
}, Qe = R("URLSearchParams"), [$e, et, tt, nt] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(R), rt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function it(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), z(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (V(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function at(e, t) {
	if (V(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var W = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ot = (e) => !B(e) && e !== W;
function st(...e) {
	let { caseless: t, skipUndefined: n } = ot(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && at(r, i) || i, o = we(r, a) ? r[a] : void 0;
		Re(o) && Re(e) ? r[a] = st(o, e) : Re(e) ? r[a] = st({}, e) : z(e) ? r[a] = e.slice() : (!n || !B(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || V(n) || (it(n, i), typeof n != "object" || z(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			yt.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var ct = (e, t, n, { allOwnKeys: r } = {}) => (it(t, (t, r) => {
	n && H(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: be(t, n),
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
}, { allOwnKeys: r }), e), lt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ut = (e, t, n, r) => {
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
}, dt = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && L(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, ft = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, pt = (e) => {
	if (!e) return null;
	if (z(e)) return e;
	let t = e.length;
	if (!Ie(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, mt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && L(Uint8Array)), ht = (e, t) => {
	let n = (e && e[Se]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, gt = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, _t = R("HTMLFormElement"), vt = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: yt } = Object.prototype, bt = R("RegExp"), xt = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	it(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, St = (e) => {
	xt(e, (t, n) => {
		if (H(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (H(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, Ct = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return z(e) ? r(e) : r(String(e).split(t)), n;
}, wt = () => {}, Tt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Et(e) {
	return !!(e && H(e.append) && e[Ce] === "FormData" && e[Se]);
}
var Dt = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (U(e)) {
			if (t.has(e)) return;
			if (V(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (Ke(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!B(e) && r.push(e);
					}
				} else r = z(e) ? [] : {}, it(e, (e, t) => {
					let i = n(e);
					!B(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Ot = R("AsyncFunction"), kt = (e) => e && (U(e) || H(e)) && H(e.then) && H(e.catch), At = ((e, t) => e ? setImmediate : t ? ((e, t) => (W.addEventListener("message", ({ source: n, data: r }) => {
	n === W && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), W.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", H(W.postMessage)), jt = typeof queueMicrotask < "u" ? queueMicrotask.bind(W) : typeof process < "u" && process.nextTick || At, Mt = (e) => e != null && H(e[Se]), G = {
	isArray: z,
	isArrayBuffer: Ne,
	isBuffer: V,
	isFormData: Ze,
	isArrayBufferView: Pe,
	isString: Fe,
	isNumber: Ie,
	isBoolean: Le,
	isObject: U,
	isPlainObject: Re,
	isEmptyObject: ze,
	isReadableStream: $e,
	isRequest: et,
	isResponse: tt,
	isHeaders: nt,
	isUndefined: B,
	isDate: Be,
	isFile: Ve,
	isReactNativeBlob: He,
	isReactNative: Ue,
	isBlob: We,
	isRegExp: bt,
	isFunction: H,
	isStream: qe,
	isURLSearchParams: Qe,
	isTypedArray: mt,
	isFileList: Ge,
	forEach: it,
	merge: st,
	extend: ct,
	trim: rt,
	stripBOM: lt,
	inherits: ut,
	toFlatObject: dt,
	kindOf: je,
	kindOfTest: R,
	endsWith: ft,
	toArray: pt,
	forEachEntry: ht,
	matchAll: gt,
	isHTMLForm: _t,
	hasOwnProperty: we,
	hasOwnProp: we,
	hasOwnInPrototypeChain: Oe,
	getSafeProp: ke,
	toSafeFlatObject: Ae,
	reduceDescriptors: xt,
	freezeMethods: St,
	toObjectSet: Ct,
	toCamelCase: vt,
	noop: wt,
	toFiniteNumber: Tt,
	findKey: at,
	global: W,
	isContextDefined: ot,
	isSpecCompliantForm: Et,
	toJSONObject: Dt,
	isAsyncFn: Ot,
	isThenable: kt,
	setImmediate: At,
	asap: jt,
	isIterable: Mt,
	isSafeIterable: (e) => e != null && Oe(e, Se) && Mt(e)
}, Nt = G.toObjectSet([
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
]), Pt = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = G.hasOwnProp(t, n);
		!n || a && G.hasOwnProp(Nt, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function Ft(e) {
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
var It = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Lt = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Rt(e, t) {
	return G.isArray(e) ? e.map((e) => Rt(e, t)) : Ft(String(e).replace(t, ""));
}
var zt = (e) => Rt(e, It), Bt = (e) => Rt(e, Lt);
function Vt(e) {
	let t = Object.create(null);
	return G.forEach(e.toJSON(), (e, n) => {
		t[n] = Bt(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var Ht = Symbol("internals");
function Ut(e) {
	return e && String(e).trim().toLowerCase();
}
function Wt(e) {
	return e === !1 || e == null ? e : G.isArray(e) ? e.map(Wt) : zt(String(e));
}
function Gt(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var Kt = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function qt(e) {
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
function Jt(e) {
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
function Yt(e) {
	let t = Object.create(null), n = String(e), r = 0, i = !1, a = !1;
	function o(e) {
		let i = qt(n.slice(r, e)), a = i.indexOf("=");
		if (a < 1) return;
		let o = qt(i.slice(0, a));
		if (!Kt.test(o)) return;
		let s = o.toLowerCase();
		if (s === "__proto__" || s === "constructor" || s === "prototype") return;
		let c = qt(i.slice(a + 1));
		t[s] = Jt(c);
	}
	for (let e = 0; e < n.length; e++) {
		let t = n.charCodeAt(e);
		i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1);
	}
	return o(n.length), t;
}
var Xt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Zt(e, t, n, r, i) {
	if (G.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), G.isString(t)) {
		if (G.isString(r)) return t.indexOf(r) !== -1;
		if (G.isRegExp(r)) return r.test(t);
	}
}
function Qt(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function $t(e, t) {
	let n = G.toCamelCase(" " + t);
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
var K = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = Ut(t);
			if (!i) return;
			let a = G.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = Wt(e));
		}
		let a = (e, t) => G.forEach(e, (e, n) => i(e, n, t));
		if (G.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (G.isString(e) && (e = e.trim()) && !Xt(e)) a(Pt(e), t);
		else if (G.isObject(e) && G.isSafeIterable(e)) {
			let n = Object.create(null), r, i;
			for (let t of e) {
				if (!G.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], G.hasOwnProp(n, i) ? (r = n[i], n[i] = G.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = Ut(e), e) {
			let n = G.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return Gt(e);
				if (G.isFunction(t)) return t.call(this, e, n);
				if (G.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = Ut(e), e) {
			let n = G.findKey(this, e);
			return !(!n || this[n] === void 0 || t && !Zt(this, this[n], n, t));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = Ut(e), e) {
				let i = G.findKey(n, e);
				i && (!t || Zt(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return G.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || Zt(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return G.forEach(this, (r, i) => {
			let a = G.findKey(n, i);
			if (a) {
				t[a] = Wt(r), delete t[i];
				return;
			}
			let o = e ? Qt(i) : String(i).trim();
			o !== i && delete t[i], t[o] = Wt(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = Object.create(null);
		return G.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && G.isArray(n) ? n.join(", ") : n);
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
		return G.isArray(e) ? e : e == null || e === !1 ? [] : [e];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static parseParameters(e) {
		return Yt(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[Ht] = this[Ht] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = Ut(e);
			t[r] || ($t(n, e), t[r] = !0);
		}
		return G.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
K.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), G.reduceDescriptors(K.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), G.freezeMethods(K);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var en = "[REDACTED ****]";
function tn(e) {
	if (G.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (G.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function nn(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || G.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof K && (e = e.toJSON()), r.push(e);
		let t;
		if (G.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			G.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!G.isPlainObject(e) && tn(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? en : i(a);
				G.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
function rn(e) {
	try {
		return String(e);
	} catch {
		return "";
	}
}
function an(e) {
	return e.errors.map((e) => {
		try {
			return e && e.message ? rn(e.message) : rn(e);
		} catch {
			return "";
		}
	}).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var q = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = t.message;
		!s && G.isArray(t.errors) && t.errors.length && (s = an(t));
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
		let e = this.config, t = e && G.hasOwnProp(e, "redact") ? e.redact : void 0, n = G.isArray(t) && t.length > 0 ? nn(e, t) : G.toJSONObject(e);
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
q.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", q.ERR_BAD_OPTION = "ERR_BAD_OPTION", q.ECONNABORTED = "ECONNABORTED", q.ETIMEDOUT = "ETIMEDOUT", q.ECONNREFUSED = "ECONNREFUSED", q.ERR_NETWORK = "ERR_NETWORK", q.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", q.ERR_DEPRECATED = "ERR_DEPRECATED", q.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", q.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", q.ERR_CANCELED = "ERR_CANCELED", q.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", q.ERR_INVALID_URL = "ERR_INVALID_URL", q.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
function on(e) {
	return G.isPlainObject(e) || G.isArray(e);
}
function sn(e) {
	return G.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function cn(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = sn(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function ln(e) {
	return G.isArray(e) && !e.some(on);
}
var un = G.toFlatObject(G, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function dn(e, t, n) {
	if (!G.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData();
	let r = (e, t) => {
		let r = G.getSafeProp(n, e);
		return G.isUndefined(r) ? t : r;
	}, i = r("metaTokens", !0), a = r("visitor") || h, o = r("dots", !1), s = r("indexes", !1), c = r("Blob") || typeof Blob < "u" && Blob, l = r("maxDepth", 100), u = c && G.isSpecCompliantForm(t), d = [];
	if (!G.isFunction(a)) throw TypeError("visitor must be a function");
	function f(e) {
		if (e === null) return "";
		if (G.isDate(e)) return e.toISOString();
		if (G.isBoolean(e)) return e.toString();
		if (!u && G.isBlob(e)) throw new q("Blob is not supported. Use a Buffer instead.");
		if (G.isArrayBuffer(e) || G.isTypedArray(e)) {
			if (u && typeof c == "function") return new c([e]);
			throw new q("Blob is not supported. Use a Buffer instead.", q.ERR_NOT_SUPPORT);
		}
		return e;
	}
	function p(e) {
		if (e > l) throw new q("Object is too deeply nested (" + e + " levels). Max depth: " + l, q.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function m(e, t) {
		if (l === Infinity) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!G.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), p(t + n.length - 1), r;
		});
	}
	function h(e, n, r) {
		let a = e;
		if (G.isReactNative(t) && G.isReactNativeBlob(e)) return t.append(cn(r, n, o), f(e)), !1;
		if (e && !r && typeof e == "object") {
			if (G.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = m(e, 1);
			else if (G.isArray(e) && ln(e) || (G.isFileList(e) || G.endsWith(n, "[]")) && (a = G.toArray(e))) return n = sn(n), a.forEach(function(e, r) {
				!(G.isUndefined(e) || e === null) && t.append(s === !0 ? cn([n], r, o) : s === null ? n : n + "[]", f(e));
			}), !1;
		}
		return on(e) ? !0 : (t.append(cn(r, n, o), f(e)), !1);
	}
	let g = Object.assign(un, {
		defaultVisitor: h,
		convertValue: f,
		isVisitable: on
	});
	function _(e, n, r = 0) {
		if (!G.isUndefined(e)) {
			if (p(r), d.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			d.push(e), G.forEach(e, function(e, i) {
				(!(G.isUndefined(e) || e === null) && a.call(t, e, G.isString(i) ? i.trim() : i, n, g)) === !0 && _(e, n ? n.concat(i) : [i], r + 1);
			}), d.pop();
		}
	}
	if (!G.isObject(e)) throw TypeError("data must be an object");
	return _(e), t;
}
//#endregion
//#region node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function fn(e) {
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
function pn(e, t) {
	this._pairs = [], e && dn(e, this, t);
}
var mn = pn.prototype;
mn.append = function(e, t) {
	this._pairs.push([e, t]);
}, mn.toString = function(e) {
	let t = e ? (t) => e.call(this, t, fn) : fn;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
function hn(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function gn(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = G.isFunction(n) ? { serialize: n } : n, i = G.getSafeProp(r, "encode") || hn, a = G.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : G.isURLSearchParams(t) ? t.toString() : new pn(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var _n = Symbol("internals");
function vn(e) {
	return e ? e.length : 0;
}
function yn(e) {
	if (e) for (; e.length && e[e.length - 1] === null;) e.pop();
}
function bn(e, t) {
	let n = e.handlers, r = vn(n);
	n === t.handlersRef ? r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(e, r) {
		n[e.index] !== e.handler && t.handlerEntries.delete(r);
	}) : t.handlerEntries.clear()) : (t.handlersRef = n, t.handlerEntries.clear()), t.handlersLength = r;
}
var xn = class {
	constructor() {
		this.handlers = [], this[_n] = {
			handlersRef: this.handlers,
			handlersLength: this.handlers.length,
			handlerEntries: /* @__PURE__ */ new Map(),
			iterationDepth: 0,
			nextId: 0
		};
	}
	use(e, t, n) {
		let r = {
			fulfilled: e,
			rejected: t,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}, i = this[_n];
		this.handlers ??= [], bn(this, i);
		let a = i.nextId++;
		return this.handlers.push(r), i.handlerEntries.set(a, {
			handler: r,
			index: this.handlers.length - 1
		}), i.handlersLength = this.handlers.length, a;
	}
	eject(e) {
		let t = this[_n];
		bn(this, t);
		let n = t.handlerEntries.get(e);
		if (n) {
			if (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler) return;
			this.handlers[n.index] = null, t.iterationDepth || (yn(this.handlers), t.handlersLength = this.handlers.length);
		}
	}
	clear() {
		this.handlers && (this.handlers = [], bn(this, this[_n]));
	}
	forEach(e) {
		let t = this[_n];
		bn(this, t), t.iterationDepth++;
		try {
			G.forEach(this.handlers, function(t) {
				t !== null && e(t);
			});
		} finally {
			--t.iterationDepth || (bn(this, t), yn(this.handlers), t.handlersLength = vn(this.handlers));
		}
	}
}, Sn = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, Cn = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : pn,
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
}, wn = /* @__PURE__ */ n({
	hasBrowserEnv: () => Tn,
	hasStandardBrowserEnv: () => Dn,
	hasStandardBrowserWebWorkerEnv: () => On,
	navigator: () => En,
	origin: () => kn
}), Tn = typeof window < "u" && typeof document < "u", En = typeof navigator == "object" && navigator || void 0, Dn = Tn && (!En || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(En.product) < 0), On = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", kn = Tn && window.location.href || "http://localhost", J = {
	...wn,
	...Cn
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function An(e, t) {
	return dn(e, new J.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return J.isNode && G.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
var jn = 100;
function Mn(e) {
	if (e > jn) throw new q("FormData field is too deeply nested (" + e + " levels). Max depth: " + jn, q.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Nn(e) {
	let t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g, r;
	for (; (r = n.exec(e)) !== null;) Mn(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function Pn(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function Fn(e) {
	function t(e, n, r, i) {
		Mn(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && G.isArray(r) ? r.length : a, s ? (G.hasOwnProp(r, a) ? r[a] = G.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!G.hasOwnProp(r, a) || !G.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && G.isArray(r[a]) && (r[a] = Pn(r[a])), !o);
	}
	if (G.isFormData(e) && G.isFunction(e.entries)) {
		let n = {};
		return G.forEachEntry(e, (e, r) => {
			t(Nn(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/core/methodList.js
var In = Object.freeze([
	"get",
	"delete",
	"head",
	"options",
	"post",
	"put",
	"patch",
	"purge",
	"link",
	"unlink",
	"query"
]), Ln = (e, t) => e != null && G.hasOwnProp(e, t) ? e[t] : void 0;
function Rn(e, t, n) {
	if (G.isString(e)) try {
		return (t || JSON.parse)(e), G.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var zn = {
	transitional: Sn,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = G.isObject(e);
		if (i && G.isHTMLForm(e) && (e = new FormData(e)), G.isFormData(e)) return r ? JSON.stringify(Fn(e)) : e;
		if (G.isArrayBuffer(e) || G.isBuffer(e) || G.isStream(e) || G.isFile(e) || G.isBlob(e) || G.isReadableStream(e)) return e;
		if (G.isArrayBufferView(e)) return e.buffer;
		if (G.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = Ln(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return An(e, t).toString();
			if ((a = G.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = Ln(this, "env"), r = n && n.FormData;
				return dn(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), Rn(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = Ln(this, "transitional") || zn.transitional, n = t && t.forcedJSONParsing, r = Ln(this, "responseType"), i = r === "json";
		if (G.isResponse(e) || G.isReadableStream(e)) return e;
		if (e && G.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, Ln(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? q.from(e, q.ERR_BAD_RESPONSE, this, null, Ln(this, "response")) : e;
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
		FormData: J.classes.FormData,
		Blob: J.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
G.forEach(In, (e) => {
	zn.headers[e] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
function Bn(e, t) {
	let n = this || zn, r = t || n, i = K.from(r.headers), a = r.data;
	return G.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function Vn(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var Hn = class extends q {
	constructor(e, t, n) {
		super(e ?? "canceled", q.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
function Un(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new q("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? q.ERR_BAD_REQUEST : q.ERR_BAD_RESPONSE, n.config, n.request, n));
}
//#endregion
//#region node_modules/axios/lib/helpers/normalizeURLForProtocolCheck.js
var Wn = /[\t\n\r]/g;
function Gn(e) {
	if (typeof e != "string") return e;
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t).replace(Wn, "");
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function Kn(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
function qn(e, t) {
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
function Jn(e, t) {
	let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => {
		n = r, i = null, a &&= (clearTimeout(a), null), e(...t);
	};
	return [
		(...e) => {
			let t = Date.now(), s = t - n;
			s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
				a = null, o(i);
			}, r - s));
		},
		() => i && o(i),
		(...e) => o(e)
	];
}
//#endregion
//#region node_modules/axios/lib/helpers/progressEventReducer.js
var Yn = (e, t, n = 3) => {
	let r = 0, i = qn(50, 250);
	return Jn((n) => {
		if (!n || !G.isNumber(n.loaded)) return;
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
}, Xn = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, Zn = (e, t = G.asap) => (...n) => t(() => e(...n)), Qn = J.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, J.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(J.origin), J.navigator && /(msie|trident)/i.test(J.navigator.userAgent)) : () => !0, $n = J.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		G.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), G.isString(r) && s.push(`path=${r}`), G.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), G.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
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
function er(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
function tr(e, t) {
	if (!t) return e;
	let n = e.length;
	for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
	return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
var nr = /^https?:(?!\/\/)/i;
function rr(e) {
	return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = "") => `${t}${n}${en}`);
}
function ir(e) {
	let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${en}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${en}`);
	return n === -1 ? r : `${r}#${rr(t.slice(n + 1))}`;
}
function ar(e, t) {
	if (typeof e == "string") {
		let n = Gn(e);
		if (nr.test(n)) throw new q(`Invalid URL ${JSON.stringify(ir(n))}: missing "//" after protocol`, q.ERR_INVALID_URL, t);
	}
}
function or(e, t, n, r) {
	ar(t, r);
	let i = !er(t);
	return e && (i || n === !1) ? (ar(e, r), tr(e, t)) : t;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var sr = (e) => e instanceof K ? { ...e } : e, cr = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
function Y(e, t) {
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
		return G.isPlainObject(e) && G.isPlainObject(t) ? G.merge.call({ caseless: r }, e, t) : G.isPlainObject(t) ? G.merge({}, t) : G.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!G.isUndefined(t)) return r(e, t, n, i);
		if (!G.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!G.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!G.isUndefined(t)) return r(void 0, t);
		if (!G.isUndefined(e)) return r(void 0, e);
	}
	function s(n) {
		let r = G.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!G.isUndefined(r)) {
			if (G.isPlainObject(r)) {
				if (G.hasOwnProp(r, n)) return r[n];
			} else return;
		}
		let i = G.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (G.isPlainObject(i) && G.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (G.hasOwnProp(t, a)) return r(n, i);
		if (G.hasOwnProp(e, a)) return r(void 0, n);
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
		timeoutErrorMessage: o,
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
		headers: (e, t, n) => i(sr(e), sr(t), n, !0)
	};
	return G.forEach(cr({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = G.hasOwnProp(l, r) ? l[r] : i, o = a(G.hasOwnProp(e, r) ? e[r] : void 0, G.hasOwnProp(t, r) ? t[r] : void 0, r);
		G.isUndefined(o) && a !== c || (n[r] = o);
	}), G.hasOwnProp(t, "validateStatus") && G.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (G.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
//#endregion
//#region node_modules/axios/lib/core/setFormDataHeaders.js
var lr = ["content-type", "content-length"];
function ur(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		lr.includes(t.toLowerCase()) && e.set(t, n);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var dr = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function fr(e) {
	let t = Y({}, e), n = (e) => G.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = K.from(s), t.url = gn(or(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = G.getSafeProp(c, "username") || "", n = G.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? dr(n) : "")));
		} catch (t) {
			throw q.from(t, q.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (G.isFormData(r)) {
		let e = G.getSafeProp(r, "getHeaders");
		J.hasStandardBrowserEnv || J.hasStandardBrowserWebWorkerEnv || G.isReactNative(r) ? s.setContentType(void 0) : G.isFunction(e) && ur(s, e.call(r), n("formDataHeaderPolicy"));
	}
	if (J.hasStandardBrowserEnv && (G.isFunction(i) && (i = i(t)), i === !0 || i == null && Qn(t.url))) {
		let e = a && o && $n.read(o);
		e && s.set(a, e);
	}
	return t;
}
var pr = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = fr(e), i = r.data, a = K.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p, m;
		function h() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let g = new XMLHttpRequest();
		g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
		function _(i) {
			if (!g) return;
			if (g.status === 0 && (Kn(Gn(r.url)) || Kn(J.origin)) !== "file" && !(g.responseURL && g.responseURL.startsWith("file:"))) {
				n(new q("Request aborted", q.ECONNABORTED, e, g)), h(), g = null;
				return;
			}
			try {
				i ? m && m(i) : p && p();
			} catch (e) {
				setTimeout(() => {
					throw e;
				});
			}
			if (!g) return;
			let a = K.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
			Un(function(e) {
				t(e), h();
			}, function(e) {
				n(e), h();
			}, {
				data: !o || o === "text" || o === "json" ? g.responseText : g.response,
				status: g.status,
				statusText: g.statusText,
				headers: a,
				config: e,
				request: g
			}), g = null;
		}
		"onloadend" in g ? g.onloadend = _ : g.onreadystatechange = function() {
			g && g.readyState === 4 && (g.status !== 0 || g.responseURL && g.responseURL.startsWith("file:")) && setTimeout(_);
		}, g.onabort = function() {
			g &&= (n(new q("Request aborted", q.ECONNABORTED, e, g)), h(), null);
		}, g.onerror = function(t) {
			let r = new q(t && t.message ? t.message : "Network Error", q.ERR_NETWORK, e, g);
			r.event = t || null, n(r), h(), g = null;
		}, g.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || Sn;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new q(t, i.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED, e, g)), h(), g = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in g && G.forEach(Vt(a), function(e, t) {
			g.setRequestHeader(t, e);
		}), G.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), o && o !== "json" && (g.responseType = r.responseType), c && ([d, p, m] = Yn(c, !0), g.addEventListener("progress", d)), s && g.upload && ([u, f] = Yn(s), g.upload.addEventListener("progress", u), g.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			g &&= (n(!t || t.type ? new Hn(null, e, g) : t), g.abort(), h(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let v = Kn(r.url);
		if (v && !J.protocols.includes(v)) {
			n(new q("Unsupported protocol " + v + ":", q.ERR_BAD_REQUEST, e)), h();
			return;
		}
		g.send(i || null);
	});
}, mr = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof q ? t : new Hn(t instanceof Error ? t.message : t));
		}
	}, a = t && setTimeout(() => {
		a = null, i(new q(`timeout of ${t}ms exceeded`, q.ETIMEDOUT));
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
	return s.unsubscribe = () => G.asap(o), s;
}, hr = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, gr = async function* (e, t) {
	for await (let n of _r(e)) yield* hr(n, t);
}, _r = async function* (e) {
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
}, vr = (e, t, n, r) => {
	let i = gr(e, t), a = 0, o, s = (e) => {
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
}, yr = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, br = (e, t, n) => t + 2 < n && yr(e.charCodeAt(t + 1)) && yr(e.charCodeAt(t + 2)), xr = (e) => e <= 57 ? e - 48 : (e & 223) - 55, Sr = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, Cr = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, wr = (e) => {
	let t = Math.floor(e / 4), n = e % 4;
	return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, Tr = (e) => {
	let t = e.length, n = 0;
	return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, Er = (e) => {
	let t = e.length, n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let o = e.charCodeAt(a);
		if (o === 37 && br(e, a, t) && (o = xr(e.charCodeAt(a + 1)) * 16 + xr(e.charCodeAt(a + 2)), a += 2), !Cr(o)) {
			if (o === 61) {
				r++;
				continue;
			}
			if (!Sr(o) || r > 0) {
				i = !0;
				continue;
			}
			n++;
		}
	}
	return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? Tr(e) : wr(n);
}, Dr = (e, t) => {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let n = e.indexOf(",");
	if (n < 0) return 0;
	let r = e.slice(5, n), i = e.slice(n + 1);
	if (/;base64/i.test(r)) return t(i);
	let a = 0;
	for (let e = 0, t = i.length; e < t; e++) {
		let n = i.charCodeAt(e);
		if (n === 37 && br(i, e, t)) a += 1, e += 2;
		else if (n < 128) a += 1;
		else if (n < 2048) a += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = i.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3;
		} else a += 3;
	}
	return a;
};
function Or(e) {
	let t = typeof e == "string" ? e.indexOf("#") : -1;
	return Dr(t === -1 ? e : e.slice(0, t), Er);
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var kr = "1.20.0", Ar = 65536, jr = {
	cache: "default",
	redirect: "follow",
	referrer: "about:client",
	referrerPolicy: "",
	mode: "cors",
	integrity: "",
	keepalive: !1,
	priority: "auto",
	window: null
}, { isFunction: Mr } = G, Nr = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Pr = (e) => {
	if (!G.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, Fr = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, Ir = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Lr = (e) => {
	let t = G.global !== void 0 && G.global !== null ? G.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = G.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? Mr(i) : typeof fetch == "function", c = Mr(a), l = Mr(o);
	if (!s) return !1;
	let u = s && Mr(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && Fr(() => {
		let e = !1, t = new a(J.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && Fr(() => G.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
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
			throw new q(`Response type '${e}' is not supported`, q.ERR_NOT_SUPPORT, n);
		});
	});
	let h = async (e) => {
		if (e == null) return 0;
		if (G.isBlob(e)) return e.size;
		if (G.isSpecCompliantForm(e)) return (await new a(J.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (G.isArrayBufferView(e) || G.isArrayBuffer(e)) return e.byteLength;
		if (G.isURLSearchParams(e) && (e += ""), G.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => G.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: ee, responseType: y, headers: b, withCredentials: x = "same-origin", fetchOptions: S, maxContentLength: C, maxBodyLength: w, maxRedirects: T } = fr(e), E = G.isNumber(C) && C > -1, D = G.isNumber(w) && w > -1, O = (t) => G.hasOwnProp(e, t) ? e[t] : void 0, te = i || fetch;
		y = y ? (y + "").toLowerCase() : "text";
		let k = mr([l, d && d.toAbortSignal()], _), A = null, j = k && k.unsubscribe && (() => {
			k.unsubscribe();
		}), ne, M = null, re = () => new q("Request body larger than maxBodyLength limit", q.ERR_BAD_REQUEST, e, A);
		try {
			let i, l = O("auth");
			if (l && (i = {
				username: G.getSafeProp(l, "username") || "",
				password: G.getSafeProp(l, "password") || ""
			}), Ir(t)) {
				let e = new URL(t, J.origin);
				!i && (e.username || e.password) && (i = {
					username: Pr(e.username),
					password: Pr(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (b.delete("authorization"), b.set("Authorization", "Basic " + btoa(Nr((i.username || "") + ":" + (i.password || ""))))), E && typeof t == "string" && t.startsWith("data:") && Or(t) > C) throw new q("maxContentLength size of " + C + " exceeded", q.ERR_BAD_RESPONSE, e, A);
			if (D && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (ne = e, e > w)) throw re();
			}
			let d = D && (G.isReadableStream(s) || G.isStream(s)), _ = (e, t, n) => vr(e, Ar, (e) => {
				if (D && e > w) throw M = re();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (ee || d)) {
				if (ne ??= await g(b, s), ne !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (G.isFormData(s) && (n = e.headers.get("content-type")) && b.setContentType(n), e.body) {
						let [t, n] = ee && Xn(ne, Yn(Zn(ee))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new q("Stream request bodies are not supported by the current fetch implementation", q.ERR_NOT_SUPPORT, e, A);
			G.isString(x) || (x = x ? "include" : "omit");
			let ie = c && "credentials" in a.prototype;
			if (G.isFormData(s)) {
				let e = b.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && b.delete("content-type");
			}
			b.set("User-Agent", "axios/" + kr, !1);
			let N = S == null ? S : Object.assign(Object.create(null), S);
			N && (delete N.body, delete N.headers, delete N.method, delete N.signal, delete N.duplex, delete N.credentials);
			let P = Object.assign(Object.create(null), N, {
				signal: k,
				method: n.toUpperCase(),
				headers: Vt(b.normalize()),
				body: s,
				duplex: "half",
				credentials: ie ? x : void 0
			});
			c && (G.forEach(jr, (e, t) => {
				P[t] === void 0 && (P[t] = e);
			}), P.signal === void 0 && (P.signal = null), P.body === void 0 && (P.body = null)), T === 0 && (P.redirect = "manual", N && (N.redirect = "manual")), A = c && new a(t, P);
			let F = await (c ? te(A, N) : te(t, P)), ae = K.from(F.headers);
			if (E) {
				let t = G.toFiniteNumber(ae.getContentLength());
				if (t != null && t > C) throw new q("maxContentLength size of " + C + " exceeded", q.ERR_BAD_RESPONSE, e, A);
			}
			let oe = p && (y === "stream" || y === "response");
			if (p && F.body && (v || E || oe && j)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = F[e];
				});
				let n = G.toFiniteNumber(ae.getContentLength()), [r, i] = v && Xn(n, Yn(Zn(v), !0)) || [], a = 0;
				F = new o(vr(F.body, Ar, (t) => {
					if (E && (a = t, a > C)) throw new q("maxContentLength size of " + C + " exceeded", q.ERR_BAD_RESPONSE, e, A);
					r && r(t);
				}, () => {
					i && i(), j && j();
				}), t);
			}
			y ||= "text";
			let I = await m[G.findKey(m, y) || "text"](F, e);
			if (E && !p && !oe) {
				let t;
				if (I != null && (typeof I.byteLength == "number" ? t = I.byteLength : typeof I.size == "number" ? t = I.size : typeof I == "string" && (t = typeof r == "function" ? new r().encode(I).byteLength : I.length)), typeof t == "number" && t > C) throw new q("maxContentLength size of " + C + " exceeded", q.ERR_BAD_RESPONSE, e, A);
			}
			return !oe && j && j(), await new Promise((t, n) => {
				Un(t, n, {
					data: I,
					headers: K.from(F.headers),
					status: F.status,
					statusText: F.statusText,
					config: e,
					request: A
				});
			});
		} catch (t) {
			if (j && j(), k && k.aborted && k.reason instanceof q) {
				let n = k.reason;
				throw n.config = e, A && (n.request = A), t !== n && Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			if (M) throw A && !M.request && (M.request = A), M;
			if (t instanceof q) throw A && !t.request && (t.request = A), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new q("Network Error", q.ERR_NETWORK, e, A, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw q.from(t, t && t.code, e, A, t && t.response);
		}
	};
}, Rr = /* @__PURE__ */ new Map(), zr = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = Rr;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : Lr(t)), l = c;
	return c;
};
zr();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
var Br = {
	http: null,
	xhr: pr,
	fetch: { get: zr }
};
G.forEach(Br, (e, t) => {
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
var Vr = (e) => `- ${e}`, Hr = (e) => G.isFunction(e) || e === null || e === !1;
function Ur(e, t) {
	e = G.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Hr(r) && (i = Br[(n = String(r)).toLowerCase()], i === void 0)) throw new q(`Unknown adapter '${n}'`);
		if (i && (G.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new q("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Vr).join("\n") : " " + Vr(e[0]) : "as no adapter specified"), q.ERR_NOT_SUPPORT);
	}
	return i;
}
var Wr = {
	getAdapter: Ur,
	adapters: Br
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
function Gr(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Hn(null, e);
}
function Kr(e) {
	let t = G.toSafeFlatObject(e);
	return Gr(t), t.headers = K.from(G.getSafeProp(t, "headers")), t.data = Bn.call(t, t.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Wr.getAdapter(t.adapter || zn.adapter, t)(t).then(function(e) {
		Gr(t), t.response = e;
		try {
			e.data = Bn.call(t, t.transformResponse, e);
		} finally {
			delete t.response;
		}
		return e.headers = K.from(e.headers), e;
	}, function(e) {
		if (!Vn(e) && (Gr(t), e && e.response)) {
			t.response = e.response;
			try {
				e.response.data = Bn.call(t, t.transformResponse, e.response);
			} finally {
				delete t.response;
			}
			e.response.headers = K.from(e.response.headers);
		}
		return Promise.reject(e);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var qr = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	qr[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var Jr = {};
qr.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + kr + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new q(r(i, " has been removed" + (t ? " in " + t : "")), q.ERR_DEPRECATED);
		return t && !Jr[i] && (Jr[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, qr.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Yr(e, t, n) {
	if (typeof e != "object" || !e) throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new q("option " + a + " must be " + n, q.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new q("Unknown option " + a, q.ERR_BAD_OPTION);
	}
}
var Xr = {
	assertOptions: Yr,
	validators: qr
}, X = Xr.validators, Z = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new xn(),
			response: new xn()
		};
	}
	async request(e, t) {
		try {
			return await this._request(e, t);
		} catch (e) {
			if (e instanceof Error) try {
				let t = {};
				Error.captureStackTrace ? Error.captureStackTrace(t) : t = /* @__PURE__ */ Error();
				let n = t.stack, r = "";
				if (typeof n == "string") {
					let e = n.indexOf("\n");
					r = e === -1 ? "" : n.slice(e + 1);
				}
				if (!e.stack) e.stack = r;
				else if (r) {
					let t = r.indexOf("\n"), n = t === -1 ? -1 : r.indexOf("\n", t + 1), i = n === -1 ? "" : r.slice(n + 1);
					String(e.stack).endsWith(i) || (e.stack += "\n" + r);
				}
			} catch {}
			throw e;
		}
	}
	_request(e, t) {
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = Y(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && Xr.assertOptions(n, {
			silentJSONParsing: X.transitional(X.boolean),
			forcedJSONParsing: X.transitional(X.boolean),
			clarifyTimeoutError: X.transitional(X.boolean),
			legacyInterceptorReqResOrdering: X.transitional(X.boolean),
			advertiseZstdAcceptEncoding: X.transitional(X.boolean),
			validateStatusUndefinedResolves: X.transitional(X.boolean)
		}, !1), r != null && (G.isFunction(r) ? t.paramsSerializer = { serialize: r } : Xr.assertOptions(r, {
			encode: X.function,
			serialize: X.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), Xr.assertOptions(t, {
			baseUrl: X.spelling("baseURL"),
			withXsrfToken: X.spelling("withXSRFToken")
		}, !0), t.method = (G.getSafeProp(t, "method") || G.getSafeProp(this.defaults, "method") || "get").toLowerCase();
		let a = i && G.merge(i.common, i[t.method]);
		i && G.forEach(In.concat("common"), (e) => {
			delete i[e];
		}), t.headers = K.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || Sn;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [Kr.bind(this), void 0];
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
					G.isThenable(n) && (l = Promise.resolve(n).then(() => Kr.call(this, f)));
				} catch (e) {
					l = Promise.reject(e);
				}
				break;
			}
		}
		if (!l) try {
			l = Kr.call(this, f);
		} catch (e) {
			l = Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = Y(this.defaults, e), gn(or(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
G.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	Z.prototype[e] = function(t, n) {
		return this.request(Y(n || {}, {
			method: e,
			url: t,
			data: n && G.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), G.forEach([
	"post",
	"put",
	"patch",
	"query"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request(Y(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	Z.prototype[e] = t(), e !== "query" && (Z.prototype[e + "Form"] = t(!0));
});
//#endregion
//#region node_modules/axios/lib/cancel/CancelToken.js
var Zr = class e {
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
			n.reason || (n.reason = new Hn(e, r, i), t(n.reason));
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
function Qr(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
function $r(e) {
	return G.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var ei = {
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
	ContentTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	UnprocessableContent: 422,
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
Object.entries(ei).forEach(([e, t]) => {
	ei[t] === void 0 && (ei[t] = e);
});
//#endregion
//#region node_modules/axios/lib/axios.js
function ti(e) {
	let t = new Z(e), n = be(Z.prototype.request, t);
	return G.extend(n, Z.prototype, t, { allOwnKeys: !0 }), G.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return ti(Y(e, t));
	}, n;
}
var Q = ti(zn);
Q.Axios = Z, Q.CanceledError = Hn, Q.CancelToken = Zr, Q.isCancel = Vn, Q.VERSION = kr, Q.toFormData = dn, Q.AxiosError = q, Q.Cancel = Q.CanceledError, Q.all = function(e) {
	return Promise.all(e);
}, Q.spread = Qr, Q.isAxiosError = $r, Q.mergeConfig = Y, Q.AxiosHeaders = K, Q.formToJSON = (e) => Fn(G.isHTMLForm(e) ? new FormData(e) : e), Q.getAdapter = Wr.getAdapter, Q.HttpStatusCode = ei, Q.default = Q;
//#endregion
//#region node_modules/axios/index.js
var { Axios: ni, AxiosError: ri, CanceledError: ii, isCancel: ai, CancelToken: oi, VERSION: si, all: ci, Cancel: li, isAxiosError: ui, spread: di, toFormData: fi, AxiosHeaders: pi, HttpStatusCode: mi, formToJSON: hi, getAdapter: gi, mergeConfig: _i, create: vi } = Q;
//#endregion
//#region node_modules/@nextcloud/axios/dist/client.js
function yi() {
	let t = Q.create({ headers: {
		requesttoken: e() ?? "",
		"X-Requested-With": "XMLHttpRequest"
	} });
	return r((e) => {
		t.defaults.headers.requesttoken = e;
	}), Object.assign(t, {
		CancelToken: Q.CancelToken,
		isCancel: Q.isCancel
	});
}
//#endregion
//#region node_modules/@nextcloud/axios/dist/interceptors/csrf-token.js
var bi = "_nextcloudCsrfTokenReloaded";
function xi(e) {
	return async (t) => {
		if (!ui(t)) throw t;
		let { config: n, response: r, request: a } = t, o = a?.responseURL;
		if (n && !(bi in n) && r?.status === 412 && r?.data?.message === "CSRF check failed") {
			console.warn(`Request to ${o} failed because of a CSRF mismatch. Fetching a new token.`);
			let t = await i();
			return e.defaults.headers.requesttoken = t, e({
				...n,
				[bi]: !0,
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
var Si = "_nextcloudMaintenanceModeRetryDelay";
function Ci(e) {
	return async (t) => {
		if (!ui(t)) throw t;
		let { config: n, response: r, request: i } = t, a = i?.responseURL, o = r?.status, s = r?.headers, c = n?.[Si] ?? 1;
		if (o === 503 && s?.["x-nextcloud-maintenance-mode"] === "1" && n?.retryIfMaintenanceMode) {
			if (c *= 2, c > 32) throw console.error("Retry delay exceeded one minute, giving up.", { responseURL: a }), t;
			return console.warn(`Request to ${a} failed because of maintenance mode. Retrying in ${c}s`), await new Promise((e) => {
				setTimeout(e, c * 1e3);
			}), e({
				...n,
				[Si]: c
			});
		}
		throw t;
	};
}
//#endregion
//#region node_modules/@nextcloud/axios/dist/interceptors/not-logged-in.js
async function wi(e) {
	if (ui(e)) {
		let { config: t, response: n, request: r } = e, i = r?.responseURL;
		n?.status === 401 && n?.data?.message === "Current user is not logged in" && t?.reloadExpiredSession && globalThis.location?.reload && (console.error(`Request to ${i} failed because the user session expired. Reloading the page …`), globalThis.OC?.reload ? globalThis.OC.reload() : globalThis.location.reload());
	}
	throw e;
}
//#endregion
//#region node_modules/@nextcloud/axios/dist/index.js
var Ti = yi();
Ti.interceptors.response.use((e) => e, xi(Ti)), Ti.interceptors.response.use((e) => e, Ci(Ti)), Ti.interceptors.response.use((e) => e, wi);
//#endregion
//#region node_modules/debounce/index.js
function Ei(e, t = 100, n = {}) {
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
var Di = {
	name: "NcActionLink",
	mixins: [P],
	inject: { isInSemanticMenu: {
		from: M,
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
}, Oi = ["role"], ki = [
	"download",
	"href",
	"aria-label",
	"target",
	"title",
	"role"
], Ai = {
	key: 0,
	class: "action-link__longtext-wrapper"
}, ji = { class: "action-link__name" }, Mi = ["textContent"], Ni = ["textContent"], Pi = {
	key: 2,
	class: "action-link__text"
};
function Fi(e, t, n, r, i, a) {
	return l(), D("li", {
		class: "action",
		role: a.isInSemanticMenu && "presentation"
	}, [O("a", {
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
		c(e.$slots, "icon", {}, () => [O("span", {
			"aria-hidden": "true",
			class: x(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
			style: E({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
		}, null, 6)], !0),
		e.name ? (l(), D("span", Ai, [
			O("strong", ji, S(e.name), 1),
			t[1] ||= O("br", null, null, -1),
			O("span", {
				class: "action-link__longtext",
				textContent: S(e.text)
			}, null, 8, Mi)
		])) : e.isLongText ? (l(), D("span", {
			key: 1,
			class: "action-link__longtext",
			textContent: S(e.text)
		}, null, 8, Ni)) : (l(), D("span", Pi, S(e.text), 1)),
		g("", !0)
	], 8, ki)], 8, Oi);
}
var Ii = /* @__PURE__ */ d(Di, [["render", Fi], ["__scopeId", "data-v-32f01b7a"]]), Li = {
	name: "NcActionRouter",
	mixins: [P],
	inject: { isInSemanticMenu: {
		from: M,
		default: !1
	} },
	props: { to: {
		type: [String, Object],
		required: !0
	} }
}, Ri = ["role"], zi = {
	key: 0,
	class: "action-router__longtext-wrapper"
}, Bi = { class: "action-router__name" }, Vi = ["textContent"], Hi = ["textContent"], Ui = {
	key: 2,
	class: "action-router__text"
};
function Wi(e, t, n, r, i, a) {
	let s = u("RouterLink");
	return l(), D("li", {
		class: "action",
		role: a.isInSemanticMenu && "presentation"
	}, [w(s, {
		"aria-label": e.ariaLabel,
		class: "action-router focusable",
		rel: "nofollow noreferrer noopener",
		role: a.isInSemanticMenu && "menuitem",
		title: e.title,
		to: n.to,
		onClick: e.onClick
	}, {
		default: o(() => [
			c(e.$slots, "icon", {}, () => [O("span", {
				"aria-hidden": "true",
				class: x(["action-router__icon", [e.isIconUrl ? "action-router__icon--url" : e.icon]]),
				style: E({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
			}, null, 6)], !0),
			e.name ? (l(), D("span", zi, [
				O("strong", Bi, S(e.name), 1),
				t[0] ||= O("br", null, null, -1),
				O("span", {
					class: "action-router__longtext",
					textContent: S(e.text)
				}, null, 8, Vi)
			])) : e.isLongText ? (l(), D("span", {
				key: 1,
				class: "action-router__longtext",
				textContent: S(e.text)
			}, null, 8, Hi)) : (l(), D("span", Ui, S(e.text), 1)),
			g("", !0)
		]),
		_: 3
	}, 8, [
		"aria-label",
		"role",
		"title",
		"to",
		"onClick"
	])], 8, Ri);
}
var Gi = /* @__PURE__ */ d(Li, [["render", Wi], ["__scopeId", "data-v-87267750"]]), Ki = {
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
}, qi = ["aria-hidden", "aria-label"], Ji = [
	"fill",
	"width",
	"height"
], Yi = { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }, Xi = { key: 0 };
function Zi(e, t, n, r, i, a) {
	return l(), D("span", j(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon chevron-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(l(), D("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [O("path", Yi, [n.title ? (l(), D("title", Xi, S(n.title), 1)) : g("", !0)])], 8, Ji))], 16, qi);
}
var Qi = {
	name: "NcBreadcrumb",
	components: {
		NcActions: re,
		ChevronRight: /* @__PURE__ */ d(Ki, [["render", Zi]]),
		NcButton: h
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
		let e = k();
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
}, $i = ["data-crumb-id"];
function ea(e, t, n, r, i, a) {
	let s = u("NcButton"), d = u("NcActions"), f = u("ChevronRight");
	return l(), D("li", {
		ref: "crumb",
		class: x(["vue-crumb", [{ "vue-crumb--hovered": i.hovering }, e.$props.class]]),
		"data-crumb-id": r.crumbId,
		draggable: "false",
		onDragstart: m(() => {}, ["prevent"]),
		onDrop: t[0] ||= m((...e) => a.dropped && a.dropped(...e), ["prevent"]),
		onDragover: m(() => {}, ["prevent"]),
		onDragenter: t[1] ||= (...e) => a.dragEnter && a.dragEnter(...e),
		onDragleave: t[2] ||= (...e) => a.dragLeave && a.dragLeave(...e)
	}, [
		(n.name || n.icon || e.$slots.icon) && !e.$slots.default ? (l(), C(s, j({
			key: 0,
			"aria-label": n.icon ? n.name : void 0,
			variant: "tertiary"
		}, a.linkAttributes), te({ _: 2 }, [e.$slots.icon || n.icon ? {
			name: "icon",
			fn: o(() => [c(e.$slots, "icon", {}, () => [O("span", { class: x([n.icon, "icon"]) }, null, 2)], !0)]),
			key: "0"
		} : void 0, !(e.$slots.icon || n.icon) || n.forceIconText ? {
			name: "default",
			fn: o(() => [v(S(n.name), 1)]),
			key: "1"
		} : void 0]), 1040, ["aria-label"])) : g("", !0),
		e.$slots.default ? (l(), C(d, {
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
			icon: o(() => [c(e.$slots, "menu-icon", {}, void 0, !0)]),
			default: o(() => [c(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, [
			"container",
			"forceMenu",
			"menuName",
			"open",
			"title",
			"onUpdate:open"
		])) : g("", !0),
		w(f, {
			class: "vue-crumb__separator",
			size: 20
		})
	], 42, $i);
}
var ta = /* @__PURE__ */ d(Qi, [["render", ea], ["__scopeId", "data-v-7cec4a3e"]]), na = {
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
}, ra = ["aria-hidden", "aria-label"], ia = [
	"fill",
	"width",
	"height"
], aa = { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" }, oa = { key: 0 };
function sa(e, t, n, r, i, a) {
	return l(), D("span", j(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(l(), D("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [O("path", aa, [n.title ? (l(), D("title", oa, S(n.title), 1)) : g("", !0)])], 8, ia))], 16, ra);
}
var ca = /* @__PURE__ */ d(na, [["render", sa]]), $ = "vue-crumb", la = /* @__PURE__ */ d({
	name: "NcBreadcrumbs",
	components: {
		NcActions: re,
		NcActionButton: pe,
		NcActionRouter: Gi,
		NcActionLink: Ii,
		NcBreadcrumb: ta,
		IconFolder: ca
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
		window.addEventListener("resize", Ei(() => {
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
			t?.type === f && t?.children?.forEach?.((t) => {
				this.isBreadcrumb(t) && e.push(t);
			});
		}), e.length === 0) return;
		e[0] = A(e[0], {
			icon: this.rootIcon,
			ref: "breadcrumbs"
		});
		let t = [];
		e = e.map((e, n) => A(e, { ref: (e) => {
			t[n] = e;
		} }));
		let n = [...e];
		this.hiddenIndices.length && n.splice(Math.round(e.length / 2), 0, T(ta, {
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
			let s = pe, c = "";
			r && (s = Ii, c = r), n && (s = Gi, c = n);
			let l = T(ca, { size: 20 });
			return T(s, {
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
		let r = [T("nav", { "aria-label": this.ariaLabel }, [T("ul", { class: "breadcrumb__crumbs" }, [n])])];
		return ie(this.$slots.actions?.()) && r.push(T("div", {
			class: "breadcrumb__actions",
			ref: "breadcrumb__actions"
		}, this.$slots.actions?.())), this.breadcrumbsRefs = t, T("div", {
			class: ["breadcrumb", { "breadcrumb--collapsed": this.hiddenIndices.length === e.length - 2 }],
			ref: "container"
		}, r);
	}
}, [["__scopeId", "data-v-5a4d73af"]]);
//#endregion
export { ye as a, Ti as i, ta as n, pe as o, Ei as r, N as s, la as t };
