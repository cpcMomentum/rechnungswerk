import { a as e, d as t, g as n, o as r, r as i, u as a } from "./logger-Dmvqkkgn.chunk.mjs";
import { Bn as o, En as s, Mn as c, Q as l, Qt as u, Un as d, X as f, Xt as p, Z as m, an as h, c as g, cn as _, dn as v, f as ee, fr as y, in as b, jn as x, ln as te, lr as S, mn as C, on as w, pr as T, rn as E, sn as ne, t as re, tn as D, ur as O, vn as k } from "./createElementId-B15WSLm8.chunk.mjs";
import { F as ie, I as A, N as ae, P as oe } from "./chunks-BArBh8u3.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/actionGlobal.mjs
var j = {
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
}, M = {
	mixins: [j],
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
	inject: { closeMenu: { from: ie } },
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
}, N = {
	name: "NcActionButton",
	components: { NcIconSvgWrapper: f },
	mixins: [M],
	inject: { isInSemanticMenu: {
		from: A,
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
			mdiChevronRight: ee
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
}, se = ["role"], ce = [
	"aria-label",
	"disabled",
	"title",
	"type"
], P = { class: "action-button__longtext-wrapper" }, le = {
	key: 0,
	class: "action-button__name"
}, ue = ["textContent"], de = {
	key: 2,
	class: "action-button__text"
}, fe = ["textContent"], pe = {
	key: 2,
	class: "action-button__pressed-icon material-design-icon"
};
function me(e, t, n, r, i, a) {
	let o = c("NcIconSvgWrapper");
	return s(), w("li", {
		class: O(["action", { "action--disabled": n.disabled }]),
		role: a.isInSemanticMenu && "presentation"
	}, [E("button", k({
		"aria-label": e.ariaLabel,
		class: ["action-button button-vue", {
			"action-button--active": a.isChecked,
			focusable: a.isFocusable
		}],
		disabled: n.disabled,
		title: e.title,
		type: a.nativeType
	}, a.buttonAttributes, { onClick: t[0] ||= (...e) => a.handleClick && a.handleClick(...e) }), [
		x(e.$slots, "icon", {}, () => [E("span", {
			class: O([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
			style: y({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
			"aria-hidden": "true"
		}, null, 6)], !0),
		E("span", P, [
			e.name ? (s(), w("strong", le, T(e.name), 1)) : h("", !0),
			e.isLongText ? (s(), w("span", {
				key: 1,
				class: "action-button__longtext",
				textContent: T(e.text)
			}, null, 8, ue)) : (s(), w("span", de, T(e.text), 1)),
			n.description ? (s(), w("span", {
				key: 3,
				class: "action-button__description",
				textContent: T(n.description)
			}, null, 8, fe)) : h("", !0)
		]),
		n.isMenu ? (s(), b(o, {
			key: 0,
			class: "action-button__menu-icon",
			directional: "",
			path: r.mdiChevronRight
		}, null, 8, ["path"])) : a.isChecked ? (s(), b(o, {
			key: 1,
			path: r.mdiCheck,
			class: "action-button__pressed-icon"
		}, null, 8, ["path"])) : a.isChecked === !1 ? (s(), w("span", pe)) : h("", !0),
		h("", !0)
	], 16, ce)], 10, se);
}
var he = /* @__PURE__ */ l(N, [["render", me], ["__scopeId", "data-v-6c2daf4e"]]), ge = ["aria-labelledby"], _e = {
	key: 0,
	class: "empty-content__icon",
	"aria-hidden": "true"
}, ve = ["id"], ye = {
	key: 2,
	class: "empty-content__description"
}, be = {
	key: 3,
	class: "empty-content__action"
}, xe = /* @__PURE__ */ l(/* @__PURE__ */ v({
	__name: "NcEmptyContent",
	props: {
		description: { default: "" },
		name: { default: "" }
	},
	setup(e) {
		let t = re();
		return (n, r) => (s(), w("div", {
			"aria-labelledby": S(t),
			class: "empty-content",
			role: "note"
		}, [
			n.$slots.icon ? (s(), w("div", _e, [x(n.$slots, "icon", {}, void 0, !0)])) : h("", !0),
			e.name !== "" || n.$slots.name ? (s(), w("div", {
				key: 1,
				id: S(t),
				class: "empty-content__name"
			}, [x(n.$slots, "name", {}, () => [_(T(e.name), 1)], !0)], 8, ve)) : h("", !0),
			e.description !== "" || n.$slots.description ? (s(), w("p", ye, [x(n.$slots, "description", {}, () => [_(T(e.description), 1)], !0)])) : h("", !0),
			n.$slots.action ? (s(), w("div", be, [x(n.$slots, "action", {}, void 0, !0)])) : h("", !0)
		], 8, ge));
	}
}), [["__scopeId", "data-v-8609a4c1"]]);
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function Se(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: Ce } = Object.prototype, { getPrototypeOf: F } = Object, { iterator: we, toStringTag: Te } = Symbol, Ee = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), De = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), Oe = (e, t, n) => e === Object.prototype || !n && t === null, ke = (e) => {
	if (!Object.isExtensible(e)) return !1;
	let t = Object.getOwnPropertyNames(e);
	return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((t) => {
		if (De(t)) return !1;
		let n = Object.getOwnPropertyDescriptor(e, t);
		return !!n && n.configurable && n.writable === !0;
	});
}, Ae = (e, t) => {
	let n = e, r = [];
	for (; n != null;) {
		if (r.indexOf(n) !== -1) return !1;
		r.push(n);
		let i = F(n);
		if (Oe(n, i, n === e)) return !1;
		if (Ee(n, t)) return !0;
		n = i;
	}
	return !1;
}, je = (e, t) => e != null && Ae(e, t) ? e[t] : void 0, Me = (e) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	let t = F(e);
	if (t === null && ke(e)) return e;
	let n = Object.create(null), r = Object.create(null), i = [], a = e;
	for (; a != null && i.indexOf(a) === -1;) {
		i.push(a);
		let o = a === e ? t : F(a);
		if (Oe(a, o, a === e)) break;
		let s = Object.getOwnPropertyNames(a);
		Object.getOwnPropertySymbols && s.push(...Object.getOwnPropertySymbols(a));
		for (let t of s) De(t) || Ee(r, t) || (n[t] = e[t], r[t] = !0);
		a = o;
	}
	return n;
}, Ne = ((e) => (t) => {
	let n = Ce.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), I = (e) => (e = e.toLowerCase(), (t) => Ne(t) === e), Pe = (e) => (t) => typeof t === e, { isArray: L } = Array, R = Pe("undefined");
function z(e) {
	return e !== null && !R(e) && e.constructor !== null && !R(e.constructor) && B(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Fe = I("ArrayBuffer");
function Ie(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Fe(e.buffer), t;
}
var Le = Pe("string"), B = Pe("function"), Re = Pe("number"), V = (e) => typeof e == "object" && !!e, ze = (e) => e === !0 || e === !1, Be = (e) => {
	if (!V(e)) return !1;
	let t = F(e);
	return (t === null || t === Object.prototype || F(t) === null) && !Ae(e, Te) && !Ae(e, we);
}, Ve = (e) => {
	if (!V(e) || z(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, He = I("Date"), Ue = I("File"), We = (e) => !!(e && e.uri !== void 0), Ge = (e) => e && e.getParts !== void 0, Ke = I("Blob"), qe = I("FileList"), Je = I("Set"), Ye = (e) => V(e) && B(e.pipe);
function Xe() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var Ze = Xe(), Qe = Ze.FormData === void 0 ? void 0 : Ze.FormData, $e = (e) => {
	if (!e) return !1;
	if (Qe && e instanceof Qe) return !0;
	let t = F(e);
	if (!t || t === Object.prototype || !B(e.append)) return !1;
	let n = Ne(e);
	return n === "formdata" || n === "object" && B(e.toString) && e.toString() === "[object FormData]";
}, et = I("URLSearchParams"), [tt, nt, rt, it] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(I), at = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ot(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), L(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (z(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function st(e, t) {
	if (z(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var H = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ct = (e) => !R(e) && e !== H;
function lt(...e) {
	let { caseless: t, skipUndefined: n } = ct(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && st(r, i) || i, o = Ee(r, a) ? r[a] : void 0;
		Be(o) && Be(e) ? r[a] = lt(o, e) : Be(e) ? r[a] = lt({}, e) : L(e) ? r[a] = e.slice() : (!n || !R(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || z(n) || (ot(n, i), typeof n != "object" || L(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			xt.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var ut = (e, t, n, { allOwnKeys: r } = {}) => (ot(t, (t, r) => {
	n && B(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: Se(t, n),
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
}, { allOwnKeys: r }), e), dt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ft = (e, t, n, r) => {
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
}, pt = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && F(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, mt = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, ht = (e) => {
	if (!e) return null;
	if (L(e)) return e;
	let t = e.length;
	if (!Re(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, gt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && F(Uint8Array)), _t = (e, t) => {
	let n = (e && e[we]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, vt = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, yt = I("HTMLFormElement"), bt = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: xt } = Object.prototype, St = I("RegExp"), Ct = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	ot(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, wt = (e) => {
	Ct(e, (t, n) => {
		if (B(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (B(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, Tt = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return L(e) ? r(e) : r(String(e).split(t)), n;
}, Et = () => {}, Dt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Ot(e) {
	return !!(e && B(e.append) && e[Te] === "FormData" && e[we]);
}
var kt = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (V(e)) {
			if (t.has(e)) return;
			if (z(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (Je(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!R(e) && r.push(e);
					}
				} else r = L(e) ? [] : {}, ot(e, (e, t) => {
					let i = n(e);
					!R(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, At = I("AsyncFunction"), jt = (e) => e && (V(e) || B(e)) && B(e.then) && B(e.catch), Mt = ((e, t) => e ? setImmediate : t ? ((e, t) => (H.addEventListener("message", ({ source: n, data: r }) => {
	n === H && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), H.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", B(H.postMessage)), Nt = typeof queueMicrotask < "u" ? queueMicrotask.bind(H) : typeof process < "u" && process.nextTick || Mt, Pt = (e) => e != null && B(e[we]), U = {
	isArray: L,
	isArrayBuffer: Fe,
	isBuffer: z,
	isFormData: $e,
	isArrayBufferView: Ie,
	isString: Le,
	isNumber: Re,
	isBoolean: ze,
	isObject: V,
	isPlainObject: Be,
	isEmptyObject: Ve,
	isReadableStream: tt,
	isRequest: nt,
	isResponse: rt,
	isHeaders: it,
	isUndefined: R,
	isDate: He,
	isFile: Ue,
	isReactNativeBlob: We,
	isReactNative: Ge,
	isBlob: Ke,
	isRegExp: St,
	isFunction: B,
	isStream: Ye,
	isURLSearchParams: et,
	isTypedArray: gt,
	isFileList: qe,
	forEach: ot,
	merge: lt,
	extend: ut,
	trim: at,
	stripBOM: dt,
	inherits: ft,
	toFlatObject: pt,
	kindOf: Ne,
	kindOfTest: I,
	endsWith: mt,
	toArray: ht,
	forEachEntry: _t,
	matchAll: vt,
	isHTMLForm: yt,
	hasOwnProperty: Ee,
	hasOwnProp: Ee,
	hasOwnInPrototypeChain: Ae,
	getSafeProp: je,
	toSafeFlatObject: Me,
	reduceDescriptors: Ct,
	freezeMethods: wt,
	toObjectSet: Tt,
	toCamelCase: bt,
	noop: Et,
	toFiniteNumber: Dt,
	findKey: st,
	global: H,
	isContextDefined: ct,
	isSpecCompliantForm: Ot,
	toJSONObject: kt,
	isAsyncFn: At,
	isThenable: jt,
	setImmediate: Mt,
	asap: Nt,
	isIterable: Pt,
	isSafeIterable: (e) => e != null && Ae(e, we) && Pt(e)
}, Ft = U.toObjectSet([
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
]), It = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = U.hasOwnProp(t, n);
		!n || a && U.hasOwnProp(Ft, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function Lt(e) {
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
var Rt = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), zt = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Bt(e, t) {
	return U.isArray(e) ? e.map((e) => Bt(e, t)) : Lt(String(e).replace(t, ""));
}
var Vt = (e) => Bt(e, Rt), Ht = (e) => Bt(e, zt);
function Ut(e) {
	let t = Object.create(null);
	return U.forEach(e.toJSON(), (e, n) => {
		t[n] = Ht(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var Wt = Symbol("internals");
function Gt(e) {
	return e && String(e).trim().toLowerCase();
}
function Kt(e) {
	return e === !1 || e == null ? e : U.isArray(e) ? e.map(Kt) : Vt(String(e));
}
function qt(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var Jt = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Yt(e) {
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
function Xt(e) {
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
function Zt(e) {
	let t = Object.create(null), n = String(e), r = 0, i = !1, a = !1;
	function o(e) {
		let i = Yt(n.slice(r, e)), a = i.indexOf("=");
		if (a < 1) return;
		let o = Yt(i.slice(0, a));
		if (!Jt.test(o)) return;
		let s = o.toLowerCase();
		if (s === "__proto__" || s === "constructor" || s === "prototype") return;
		let c = Yt(i.slice(a + 1));
		t[s] = Xt(c);
	}
	for (let e = 0; e < n.length; e++) {
		let t = n.charCodeAt(e);
		i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1);
	}
	return o(n.length), t;
}
var Qt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $t(e, t, n, r, i) {
	if (U.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), U.isString(t)) {
		if (U.isString(r)) return t.indexOf(r) !== -1;
		if (U.isRegExp(r)) return r.test(t);
	}
}
function en(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function tn(e, t) {
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
			let i = Gt(t);
			if (!i) return;
			let a = U.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = Kt(e));
		}
		let a = (e, t) => U.forEach(e, (e, n) => i(e, n, t));
		if (U.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (U.isString(e) && (e = e.trim()) && !Qt(e)) a(It(e), t);
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
		if (e = Gt(e), e) {
			let n = U.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return qt(e);
				if (U.isFunction(t)) return t.call(this, e, n);
				if (U.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = Gt(e), e) {
			let n = U.findKey(this, e);
			return !(!n || this[n] === void 0 || t && !$t(this, this[n], n, t));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = Gt(e), e) {
				let i = U.findKey(n, e);
				i && (!t || $t(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return U.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || $t(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return U.forEach(this, (r, i) => {
			let a = U.findKey(n, i);
			if (a) {
				t[a] = Kt(r), delete t[i];
				return;
			}
			let o = e ? en(i) : String(i).trim();
			o !== i && delete t[i], t[o] = Kt(r), n[o] = !0;
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
		return Zt(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[Wt] = this[Wt] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = Gt(e);
			t[r] || (tn(n, e), t[r] = !0);
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
var nn = "[REDACTED ****]";
function rn(e) {
	if (U.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (U.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function an(e, t) {
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
			if (!U.isPlainObject(e) && rn(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? nn : i(a);
				U.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
function on(e) {
	try {
		return String(e);
	} catch {
		return "";
	}
}
function sn(e) {
	return e.errors.map((e) => {
		try {
			return e && e.message ? on(e.message) : on(e);
		} catch {
			return "";
		}
	}).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var G = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = t.message;
		!s && U.isArray(t.errors) && t.errors.length && (s = sn(t));
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
		let e = this.config, t = e && U.hasOwnProp(e, "redact") ? e.redact : void 0, n = U.isArray(t) && t.length > 0 ? an(e, t) : U.toJSONObject(e);
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
function cn(e) {
	return U.isPlainObject(e) || U.isArray(e);
}
function ln(e) {
	return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function un(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = ln(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function dn(e) {
	return U.isArray(e) && !e.some(cn);
}
var fn = U.toFlatObject(U, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function pn(e, t, n) {
	if (!U.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData();
	let r = (e, t) => {
		let r = U.getSafeProp(n, e);
		return U.isUndefined(r) ? t : r;
	}, i = r("metaTokens", !0), a = r("visitor") || h, o = r("dots", !1), s = r("indexes", !1), c = r("Blob") || typeof Blob < "u" && Blob, l = r("maxDepth", 100), u = c && U.isSpecCompliantForm(t), d = [];
	if (!U.isFunction(a)) throw TypeError("visitor must be a function");
	function f(e) {
		if (e === null) return "";
		if (U.isDate(e)) return e.toISOString();
		if (U.isBoolean(e)) return e.toString();
		if (!u && U.isBlob(e)) throw new G("Blob is not supported. Use a Buffer instead.");
		if (U.isArrayBuffer(e) || U.isTypedArray(e)) {
			if (u && typeof c == "function") return new c([e]);
			throw new G("Blob is not supported. Use a Buffer instead.", G.ERR_NOT_SUPPORT);
		}
		return e;
	}
	function p(e) {
		if (e > l) throw new G("Object is too deeply nested (" + e + " levels). Max depth: " + l, G.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function m(e, t) {
		if (l === Infinity) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!U.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), p(t + n.length - 1), r;
		});
	}
	function h(e, n, r) {
		let a = e;
		if (U.isReactNative(t) && U.isReactNativeBlob(e)) return t.append(un(r, n, o), f(e)), !1;
		if (e && !r && typeof e == "object") {
			if (U.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = m(e, 1);
			else if (U.isArray(e) && dn(e) || (U.isFileList(e) || U.endsWith(n, "[]")) && (a = U.toArray(e))) return n = ln(n), a.forEach(function(e, r) {
				!(U.isUndefined(e) || e === null) && t.append(s === !0 ? un([n], r, o) : s === null ? n : n + "[]", f(e));
			}), !1;
		}
		return cn(e) ? !0 : (t.append(un(r, n, o), f(e)), !1);
	}
	let g = Object.assign(fn, {
		defaultVisitor: h,
		convertValue: f,
		isVisitable: cn
	});
	function _(e, n, r = 0) {
		if (!U.isUndefined(e)) {
			if (p(r), d.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			d.push(e), U.forEach(e, function(e, i) {
				(!(U.isUndefined(e) || e === null) && a.call(t, e, U.isString(i) ? i.trim() : i, n, g)) === !0 && _(e, n ? n.concat(i) : [i], r + 1);
			}), d.pop();
		}
	}
	if (!U.isObject(e)) throw TypeError("data must be an object");
	return _(e), t;
}
//#endregion
//#region node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function mn(e) {
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
function hn(e, t) {
	this._pairs = [], e && pn(e, this, t);
}
var gn = hn.prototype;
gn.append = function(e, t) {
	this._pairs.push([e, t]);
}, gn.toString = function(e) {
	let t = e ? (t) => e.call(this, t, mn) : mn;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
function _n(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function vn(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = U.isFunction(n) ? { serialize: n } : n, i = U.getSafeProp(r, "encode") || _n, a = U.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : U.isURLSearchParams(t) ? t.toString() : new hn(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var yn = Symbol("internals");
function bn(e) {
	return e ? e.length : 0;
}
function xn(e) {
	if (e) for (; e.length && e[e.length - 1] === null;) e.pop();
}
function Sn(e, t) {
	let n = e.handlers, r = bn(n);
	n === t.handlersRef ? r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(e, r) {
		n[e.index] !== e.handler && t.handlerEntries.delete(r);
	}) : t.handlerEntries.clear()) : (t.handlersRef = n, t.handlerEntries.clear()), t.handlersLength = r;
}
var Cn = class {
	constructor() {
		this.handlers = [], this[yn] = {
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
		}, i = this[yn];
		this.handlers ??= [], Sn(this, i);
		let a = i.nextId++;
		return this.handlers.push(r), i.handlerEntries.set(a, {
			handler: r,
			index: this.handlers.length - 1
		}), i.handlersLength = this.handlers.length, a;
	}
	eject(e) {
		let t = this[yn];
		Sn(this, t);
		let n = t.handlerEntries.get(e);
		if (n) {
			if (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler) return;
			this.handlers[n.index] = null, t.iterationDepth || (xn(this.handlers), t.handlersLength = this.handlers.length);
		}
	}
	clear() {
		this.handlers && (this.handlers = [], Sn(this, this[yn]));
	}
	forEach(e) {
		let t = this[yn];
		Sn(this, t), t.iterationDepth++;
		try {
			U.forEach(this.handlers, function(t) {
				t !== null && e(t);
			});
		} finally {
			--t.iterationDepth || (Sn(this, t), xn(this.handlers), t.handlersLength = bn(this.handlers));
		}
	}
}, wn = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, Tn = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : hn,
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
}, En = /* @__PURE__ */ n({
	hasBrowserEnv: () => Dn,
	hasStandardBrowserEnv: () => kn,
	hasStandardBrowserWebWorkerEnv: () => An,
	navigator: () => On,
	origin: () => jn
}), Dn = typeof window < "u" && typeof document < "u", On = typeof navigator == "object" && navigator || void 0, kn = Dn && (!On || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(On.product) < 0), An = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", jn = Dn && window.location.href || "http://localhost", K = {
	...En,
	...Tn
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function Mn(e, t) {
	return pn(e, new K.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return K.isNode && U.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
var Nn = 100;
function Pn(e) {
	if (e > Nn) throw new G("FormData field is too deeply nested (" + e + " levels). Max depth: " + Nn, G.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Fn(e) {
	let t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g, r;
	for (; (r = n.exec(e)) !== null;) Pn(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function In(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function Ln(e) {
	function t(e, n, r, i) {
		Pn(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && U.isArray(r) ? r.length : a, s ? (U.hasOwnProp(r, a) ? r[a] = U.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!U.hasOwnProp(r, a) || !U.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && U.isArray(r[a]) && (r[a] = In(r[a])), !o);
	}
	if (U.isFormData(e) && U.isFunction(e.entries)) {
		let n = {};
		return U.forEachEntry(e, (e, r) => {
			t(Fn(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/core/methodList.js
var Rn = Object.freeze([
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
]), q = (e, t) => e != null && U.hasOwnProp(e, t) ? e[t] : void 0;
function zn(e, t, n) {
	if (U.isString(e)) try {
		return (t || JSON.parse)(e), U.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var Bn = {
	transitional: wn,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = U.isObject(e);
		if (i && U.isHTMLForm(e) && (e = new FormData(e)), U.isFormData(e)) return r ? JSON.stringify(Ln(e)) : e;
		if (U.isArrayBuffer(e) || U.isBuffer(e) || U.isStream(e) || U.isFile(e) || U.isBlob(e) || U.isReadableStream(e)) return e;
		if (U.isArrayBufferView(e)) return e.buffer;
		if (U.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = q(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return Mn(e, t).toString();
			if ((a = U.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = q(this, "env"), r = n && n.FormData;
				return pn(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), zn(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = q(this, "transitional") || Bn.transitional, n = t && t.forcedJSONParsing, r = q(this, "responseType"), i = r === "json";
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
U.forEach(Rn, (e) => {
	Bn.headers[e] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
function Vn(e, t) {
	let n = this || Bn, r = t || n, i = W.from(r.headers), a = r.data;
	return U.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function Hn(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var Un = class extends G {
	constructor(e, t, n) {
		super(e ?? "canceled", G.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
function Wn(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new G("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? G.ERR_BAD_REQUEST : G.ERR_BAD_RESPONSE, n.config, n.request, n));
}
//#endregion
//#region node_modules/axios/lib/helpers/normalizeURLForProtocolCheck.js
var Gn = /[\t\n\r]/g;
function Kn(e) {
	if (typeof e != "string") return e;
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t).replace(Gn, "");
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function qn(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
function Jn(e, t) {
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
function Yn(e, t) {
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
var Xn = (e, t, n = 3) => {
	let r = 0, i = Jn(50, 250);
	return Yn((n) => {
		if (!n || !U.isNumber(n.loaded)) return;
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
}, Zn = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, Qn = (e, t = U.asap) => (...n) => t(() => e(...n)), $n = K.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, K.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(K.origin), K.navigator && /(msie|trident)/i.test(K.navigator.userAgent)) : () => !0, er = K.hasStandardBrowserEnv ? {
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
function tr(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
function nr(e, t) {
	if (!t) return e;
	let n = e.length;
	for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
	return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
var rr = /^https?:(?!\/\/)/i;
function ir(e) {
	return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = "") => `${t}${n}${nn}`);
}
function ar(e) {
	let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${nn}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${nn}`);
	return n === -1 ? r : `${r}#${ir(t.slice(n + 1))}`;
}
function or(e, t) {
	if (typeof e == "string") {
		let n = Kn(e);
		if (rr.test(n)) throw new G(`Invalid URL ${JSON.stringify(ar(n))}: missing "//" after protocol`, G.ERR_INVALID_URL, t);
	}
}
function sr(e, t, n, r) {
	or(t, r);
	let i = !tr(t);
	return e && (i || n === !1) ? (or(e, r), nr(e, t)) : t;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var cr = (e) => e instanceof W ? { ...e } : e, lr = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
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
		headers: (e, t, n) => i(cr(e), cr(t), n, !0)
	};
	return U.forEach(lr({
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
var ur = ["content-type", "content-length"];
function dr(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		ur.includes(t.toLowerCase()) && e.set(t, n);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var fr = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function pr(e) {
	let t = J({}, e), n = (e) => U.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = W.from(s), t.url = vn(sr(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = U.getSafeProp(c, "username") || "", n = U.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? fr(n) : "")));
		} catch (t) {
			throw G.from(t, G.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (U.isFormData(r)) {
		let e = U.getSafeProp(r, "getHeaders");
		K.hasStandardBrowserEnv || K.hasStandardBrowserWebWorkerEnv || U.isReactNative(r) ? s.setContentType(void 0) : U.isFunction(e) && dr(s, e.call(r), n("formDataHeaderPolicy"));
	}
	if (K.hasStandardBrowserEnv && (U.isFunction(i) && (i = i(t)), i === !0 || i == null && $n(t.url))) {
		let e = a && o && er.read(o);
		e && s.set(a, e);
	}
	return t;
}
var mr = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = pr(e), i = r.data, a = W.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p, m;
		function h() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let g = new XMLHttpRequest();
		g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
		function _(i) {
			if (!g) return;
			if (g.status === 0 && (qn(Kn(r.url)) || qn(K.origin)) !== "file" && !(g.responseURL && g.responseURL.startsWith("file:"))) {
				n(new G("Request aborted", G.ECONNABORTED, e, g)), h(), g = null;
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
			let a = W.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
			Wn(function(e) {
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
			g &&= (n(new G("Request aborted", G.ECONNABORTED, e, g)), h(), null);
		}, g.onerror = function(t) {
			let r = new G(t && t.message ? t.message : "Network Error", G.ERR_NETWORK, e, g);
			r.event = t || null, n(r), h(), g = null;
		}, g.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || wn;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new G(t, i.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED, e, g)), h(), g = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in g && U.forEach(Ut(a), function(e, t) {
			g.setRequestHeader(t, e);
		}), U.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), o && o !== "json" && (g.responseType = r.responseType), c && ([d, p, m] = Xn(c, !0), g.addEventListener("progress", d)), s && g.upload && ([u, f] = Xn(s), g.upload.addEventListener("progress", u), g.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			g &&= (n(!t || t.type ? new Un(null, e, g) : t), g.abort(), h(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let v = qn(r.url);
		if (v && !K.protocols.includes(v)) {
			n(new G("Unsupported protocol " + v + ":", G.ERR_BAD_REQUEST, e)), h();
			return;
		}
		g.send(i || null);
	});
}, hr = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof G ? t : new Un(t instanceof Error ? t.message : t));
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
}, gr = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, _r = async function* (e, t) {
	for await (let n of vr(e)) yield* gr(n, t);
}, vr = async function* (e) {
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
}, yr = (e, t, n, r) => {
	let i = _r(e, t), a = 0, o, s = (e) => {
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
}, br = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, xr = (e, t, n) => t + 2 < n && br(e.charCodeAt(t + 1)) && br(e.charCodeAt(t + 2)), Sr = (e) => e <= 57 ? e - 48 : (e & 223) - 55, Cr = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, wr = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, Tr = (e) => {
	let t = Math.floor(e / 4), n = e % 4;
	return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, Er = (e) => {
	let t = e.length, n = 0;
	return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, Dr = (e) => {
	let t = e.length, n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let o = e.charCodeAt(a);
		if (o === 37 && xr(e, a, t) && (o = Sr(e.charCodeAt(a + 1)) * 16 + Sr(e.charCodeAt(a + 2)), a += 2), !wr(o)) {
			if (o === 61) {
				r++;
				continue;
			}
			if (!Cr(o) || r > 0) {
				i = !0;
				continue;
			}
			n++;
		}
	}
	return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? Er(e) : Tr(n);
}, Or = (e, t) => {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let n = e.indexOf(",");
	if (n < 0) return 0;
	let r = e.slice(5, n), i = e.slice(n + 1);
	if (/;base64/i.test(r)) return t(i);
	let a = 0;
	for (let e = 0, t = i.length; e < t; e++) {
		let n = i.charCodeAt(e);
		if (n === 37 && xr(i, e, t)) a += 1, e += 2;
		else if (n < 128) a += 1;
		else if (n < 2048) a += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = i.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3;
		} else a += 3;
	}
	return a;
};
function kr(e) {
	let t = typeof e == "string" ? e.indexOf("#") : -1;
	return Or(t === -1 ? e : e.slice(0, t), Dr);
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var Ar = "1.20.0", jr = 65536, Mr = {
	cache: "default",
	redirect: "follow",
	referrer: "about:client",
	referrerPolicy: "",
	mode: "cors",
	integrity: "",
	keepalive: !1,
	priority: "auto",
	window: null
}, { isFunction: Nr } = U, Pr = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Fr = (e) => {
	if (!U.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, Ir = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, Lr = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Rr = (e) => {
	let t = U.global !== void 0 && U.global !== null ? U.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = U.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? Nr(i) : typeof fetch == "function", c = Nr(a), l = Nr(o);
	if (!s) return !1;
	let u = s && Nr(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && Ir(() => {
		let e = !1, t = new a(K.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && Ir(() => U.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
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
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: ee, responseType: y, headers: b, withCredentials: x = "same-origin", fetchOptions: te, maxContentLength: S, maxBodyLength: C, maxRedirects: w } = pr(e), T = U.isNumber(S) && S > -1, E = U.isNumber(C) && C > -1, ne = (t) => U.hasOwnProp(e, t) ? e[t] : void 0, re = i || fetch;
		y = y ? (y + "").toLowerCase() : "text";
		let D = hr([l, d && d.toAbortSignal()], _), O = null, k = D && D.unsubscribe && (() => {
			D.unsubscribe();
		}), ie, A = null, ae = () => new G("Request body larger than maxBodyLength limit", G.ERR_BAD_REQUEST, e, O);
		try {
			let i, l = ne("auth");
			if (l && (i = {
				username: U.getSafeProp(l, "username") || "",
				password: U.getSafeProp(l, "password") || ""
			}), Lr(t)) {
				let e = new URL(t, K.origin);
				!i && (e.username || e.password) && (i = {
					username: Fr(e.username),
					password: Fr(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (b.delete("authorization"), b.set("Authorization", "Basic " + btoa(Pr((i.username || "") + ":" + (i.password || ""))))), T && typeof t == "string" && t.startsWith("data:") && kr(t) > S) throw new G("maxContentLength size of " + S + " exceeded", G.ERR_BAD_RESPONSE, e, O);
			if (E && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (ie = e, e > C)) throw ae();
			}
			let d = E && (U.isReadableStream(s) || U.isStream(s)), _ = (e, t, n) => yr(e, jr, (e) => {
				if (E && e > C) throw A = ae();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (ee || d)) {
				if (ie ??= await g(b, s), ie !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (U.isFormData(s) && (n = e.headers.get("content-type")) && b.setContentType(n), e.body) {
						let [t, n] = ee && Zn(ie, Xn(Qn(ee))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new G("Stream request bodies are not supported by the current fetch implementation", G.ERR_NOT_SUPPORT, e, O);
			U.isString(x) || (x = x ? "include" : "omit");
			let oe = c && "credentials" in a.prototype;
			if (U.isFormData(s)) {
				let e = b.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && b.delete("content-type");
			}
			b.set("User-Agent", "axios/" + Ar, !1);
			let j = te == null ? te : Object.assign(Object.create(null), te);
			j && (delete j.body, delete j.headers, delete j.method, delete j.signal, delete j.duplex, delete j.credentials);
			let M = Object.assign(Object.create(null), j, {
				signal: D,
				method: n.toUpperCase(),
				headers: Ut(b.normalize()),
				body: s,
				duplex: "half",
				credentials: oe ? x : void 0
			});
			c && (U.forEach(Mr, (e, t) => {
				M[t] === void 0 && (M[t] = e);
			}), M.signal === void 0 && (M.signal = null), M.body === void 0 && (M.body = null)), w === 0 && (M.redirect = "manual", j && (j.redirect = "manual")), O = c && new a(t, M);
			let N = await (c ? re(O, j) : re(t, M)), se = W.from(N.headers);
			if (T) {
				let t = U.toFiniteNumber(se.getContentLength());
				if (t != null && t > S) throw new G("maxContentLength size of " + S + " exceeded", G.ERR_BAD_RESPONSE, e, O);
			}
			let ce = p && (y === "stream" || y === "response");
			if (p && N.body && (v || T || ce && k)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = N[e];
				});
				let n = U.toFiniteNumber(se.getContentLength()), [r, i] = v && Zn(n, Xn(Qn(v), !0)) || [], a = 0;
				N = new o(yr(N.body, jr, (t) => {
					if (T && (a = t, a > S)) throw new G("maxContentLength size of " + S + " exceeded", G.ERR_BAD_RESPONSE, e, O);
					r && r(t);
				}, () => {
					i && i(), k && k();
				}), t);
			}
			y ||= "text";
			let P = await m[U.findKey(m, y) || "text"](N, e);
			if (T && !p && !ce) {
				let t;
				if (P != null && (typeof P.byteLength == "number" ? t = P.byteLength : typeof P.size == "number" ? t = P.size : typeof P == "string" && (t = typeof r == "function" ? new r().encode(P).byteLength : P.length)), typeof t == "number" && t > S) throw new G("maxContentLength size of " + S + " exceeded", G.ERR_BAD_RESPONSE, e, O);
			}
			return !ce && k && k(), await new Promise((t, n) => {
				Wn(t, n, {
					data: P,
					headers: W.from(N.headers),
					status: N.status,
					statusText: N.statusText,
					config: e,
					request: O
				});
			});
		} catch (t) {
			if (k && k(), D && D.aborted && D.reason instanceof G) {
				let n = D.reason;
				throw n.config = e, O && (n.request = O), t !== n && Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			if (A) throw O && !A.request && (A.request = O), A;
			if (t instanceof G) throw O && !t.request && (t.request = O), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new G("Network Error", G.ERR_NETWORK, e, O, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw G.from(t, t && t.code, e, O, t && t.response);
		}
	};
}, zr = /* @__PURE__ */ new Map(), Br = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = zr;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : Rr(t)), l = c;
	return c;
};
Br();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
var Vr = {
	http: null,
	xhr: mr,
	fetch: { get: Br }
};
U.forEach(Vr, (e, t) => {
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
var Hr = (e) => `- ${e}`, Ur = (e) => U.isFunction(e) || e === null || e === !1;
function Wr(e, t) {
	e = U.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Ur(r) && (i = Vr[(n = String(r)).toLowerCase()], i === void 0)) throw new G(`Unknown adapter '${n}'`);
		if (i && (U.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new G("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Hr).join("\n") : " " + Hr(e[0]) : "as no adapter specified"), G.ERR_NOT_SUPPORT);
	}
	return i;
}
var Gr = {
	getAdapter: Wr,
	adapters: Vr
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
function Kr(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Un(null, e);
}
function qr(e) {
	let t = U.toSafeFlatObject(e);
	return Kr(t), t.headers = W.from(U.getSafeProp(t, "headers")), t.data = Vn.call(t, t.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Gr.getAdapter(t.adapter || Bn.adapter, t)(t).then(function(e) {
		Kr(t), t.response = e;
		try {
			e.data = Vn.call(t, t.transformResponse, e);
		} finally {
			delete t.response;
		}
		return e.headers = W.from(e.headers), e;
	}, function(e) {
		if (!Hn(e) && (Kr(t), e && e.response)) {
			t.response = e.response;
			try {
				e.response.data = Vn.call(t, t.transformResponse, e.response);
			} finally {
				delete t.response;
			}
			e.response.headers = W.from(e.response.headers);
		}
		return Promise.reject(e);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var Jr = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	Jr[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var Yr = {};
Jr.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + Ar + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new G(r(i, " has been removed" + (t ? " in " + t : "")), G.ERR_DEPRECATED);
		return t && !Yr[i] && (Yr[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, Jr.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Xr(e, t, n) {
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
var Zr = {
	assertOptions: Xr,
	validators: Jr
}, Y = Zr.validators, X = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new Cn(),
			response: new Cn()
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
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = J(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && Zr.assertOptions(n, {
			silentJSONParsing: Y.transitional(Y.boolean),
			forcedJSONParsing: Y.transitional(Y.boolean),
			clarifyTimeoutError: Y.transitional(Y.boolean),
			legacyInterceptorReqResOrdering: Y.transitional(Y.boolean),
			advertiseZstdAcceptEncoding: Y.transitional(Y.boolean),
			validateStatusUndefinedResolves: Y.transitional(Y.boolean)
		}, !1), r != null && (U.isFunction(r) ? t.paramsSerializer = { serialize: r } : Zr.assertOptions(r, {
			encode: Y.function,
			serialize: Y.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), Zr.assertOptions(t, {
			baseUrl: Y.spelling("baseURL"),
			withXsrfToken: Y.spelling("withXSRFToken")
		}, !0), t.method = (U.getSafeProp(t, "method") || U.getSafeProp(this.defaults, "method") || "get").toLowerCase();
		let a = i && U.merge(i.common, i[t.method]);
		i && U.forEach(Rn.concat("common"), (e) => {
			delete i[e];
		}), t.headers = W.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || wn;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [qr.bind(this), void 0];
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
					U.isThenable(n) && (l = Promise.resolve(n).then(() => qr.call(this, f)));
				} catch (e) {
					l = Promise.reject(e);
				}
				break;
			}
		}
		if (!l) try {
			l = qr.call(this, f);
		} catch (e) {
			l = Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = J(this.defaults, e), vn(sr(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
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
var Qr = class e {
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
			n.reason || (n.reason = new Un(e, r, i), t(n.reason));
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
function $r(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
function ei(e) {
	return U.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var ti = {
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
Object.entries(ti).forEach(([e, t]) => {
	ti[t] === void 0 && (ti[t] = e);
});
//#endregion
//#region node_modules/axios/lib/axios.js
function ni(e) {
	let t = new X(e), n = Se(X.prototype.request, t);
	return U.extend(n, X.prototype, t, { allOwnKeys: !0 }), U.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return ni(J(e, t));
	}, n;
}
var Z = ni(Bn);
Z.Axios = X, Z.CanceledError = Un, Z.CancelToken = Qr, Z.isCancel = Hn, Z.VERSION = Ar, Z.toFormData = pn, Z.AxiosError = G, Z.Cancel = Z.CanceledError, Z.all = function(e) {
	return Promise.all(e);
}, Z.spread = $r, Z.isAxiosError = ei, Z.mergeConfig = J, Z.AxiosHeaders = W, Z.formToJSON = (e) => Ln(U.isHTMLForm(e) ? new FormData(e) : e), Z.getAdapter = Gr.getAdapter, Z.HttpStatusCode = ti, Z.default = Z;
//#endregion
//#region node_modules/axios/index.js
var { Axios: ri, AxiosError: ii, CanceledError: ai, isCancel: oi, CancelToken: si, VERSION: ci, all: li, Cancel: ui, isAxiosError: di, spread: fi, toFormData: pi, AxiosHeaders: mi, HttpStatusCode: hi, formToJSON: gi, getAdapter: _i, mergeConfig: vi, create: yi } = Z;
//#endregion
//#region node_modules/@nextcloud/axios/dist/client.js
function bi() {
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
var xi = "_nextcloudCsrfTokenReloaded";
function Si(e) {
	return async (t) => {
		if (!di(t)) throw t;
		let { config: n, response: r, request: a } = t, o = a?.responseURL;
		if (n && !(xi in n) && r?.status === 412 && r?.data?.message === "CSRF check failed") {
			console.warn(`Request to ${o} failed because of a CSRF mismatch. Fetching a new token.`);
			let t = await i();
			return e.defaults.headers.requesttoken = t, e({
				...n,
				[xi]: !0,
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
var Ci = "_nextcloudMaintenanceModeRetryDelay";
function wi(e) {
	return async (t) => {
		if (!di(t)) throw t;
		let { config: n, response: r, request: i } = t, a = i?.responseURL, o = r?.status, s = r?.headers, c = n?.[Ci] ?? 1;
		if (o === 503 && s?.["x-nextcloud-maintenance-mode"] === "1" && n?.retryIfMaintenanceMode) {
			if (c *= 2, c > 32) throw console.error("Retry delay exceeded one minute, giving up.", { responseURL: a }), t;
			return console.warn(`Request to ${a} failed because of maintenance mode. Retrying in ${c}s`), await new Promise((e) => {
				setTimeout(e, c * 1e3);
			}), e({
				...n,
				[Ci]: c
			});
		}
		throw t;
	};
}
//#endregion
//#region node_modules/@nextcloud/axios/dist/interceptors/not-logged-in.js
async function Ti(e) {
	if (di(e)) {
		let { config: t, response: n, request: r } = e, i = r?.responseURL;
		n?.status === 401 && n?.data?.message === "Current user is not logged in" && t?.reloadExpiredSession && globalThis.location?.reload && (console.error(`Request to ${i} failed because the user session expired. Reloading the page …`), globalThis.OC?.reload ? globalThis.OC.reload() : globalThis.location.reload());
	}
	throw e;
}
//#endregion
//#region node_modules/@nextcloud/axios/dist/index.js
var Q = bi();
Q.interceptors.response.use((e) => e, Si(Q)), Q.interceptors.response.use((e) => e, wi(Q)), Q.interceptors.response.use((e) => e, Ti);
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
	mixins: [M],
	inject: { isInSemanticMenu: {
		from: A,
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
	return s(), w("li", {
		class: "action",
		role: a.isInSemanticMenu && "presentation"
	}, [E("a", {
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
		x(e.$slots, "icon", {}, () => [E("span", {
			"aria-hidden": "true",
			class: O(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
			style: y({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
		}, null, 6)], !0),
		e.name ? (s(), w("span", Ai, [
			E("strong", ji, T(e.name), 1),
			t[1] ||= E("br", null, null, -1),
			E("span", {
				class: "action-link__longtext",
				textContent: T(e.text)
			}, null, 8, Mi)
		])) : e.isLongText ? (s(), w("span", {
			key: 1,
			class: "action-link__longtext",
			textContent: T(e.text)
		}, null, 8, Ni)) : (s(), w("span", Pi, T(e.text), 1)),
		h("", !0)
	], 8, ki)], 8, Oi);
}
var Ii = /* @__PURE__ */ l(Di, [["render", Fi], ["__scopeId", "data-v-32f01b7a"]]), Li = {
	name: "NcActionRouter",
	mixins: [M],
	inject: { isInSemanticMenu: {
		from: A,
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
	let o = c("RouterLink");
	return s(), w("li", {
		class: "action",
		role: a.isInSemanticMenu && "presentation"
	}, [te(o, {
		"aria-label": e.ariaLabel,
		class: "action-router focusable",
		rel: "nofollow noreferrer noopener",
		role: a.isInSemanticMenu && "menuitem",
		title: e.title,
		to: n.to,
		onClick: e.onClick
	}, {
		default: d(() => [
			x(e.$slots, "icon", {}, () => [E("span", {
				"aria-hidden": "true",
				class: O(["action-router__icon", [e.isIconUrl ? "action-router__icon--url" : e.icon]]),
				style: y({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
			}, null, 6)], !0),
			e.name ? (s(), w("span", zi, [
				E("strong", Bi, T(e.name), 1),
				t[0] ||= E("br", null, null, -1),
				E("span", {
					class: "action-router__longtext",
					textContent: T(e.text)
				}, null, 8, Vi)
			])) : e.isLongText ? (s(), w("span", {
				key: 1,
				class: "action-router__longtext",
				textContent: T(e.text)
			}, null, 8, Hi)) : (s(), w("span", Ui, T(e.text), 1)),
			h("", !0)
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
var Gi = /* @__PURE__ */ l(Li, [["render", Wi], ["__scopeId", "data-v-87267750"]]), Ki = {
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
	return s(), w("span", k(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon chevron-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(s(), w("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [E("path", Yi, [n.title ? (s(), w("title", Xi, T(n.title), 1)) : h("", !0)])], 8, Ji))], 16, qi);
}
var Qi = {
	name: "NcBreadcrumb",
	components: {
		NcActions: ae,
		ChevronRight: /* @__PURE__ */ l(Ki, [["render", Zi]]),
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
		let e = re();
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
	let o = c("NcButton"), l = c("NcActions"), u = c("ChevronRight");
	return s(), w("li", {
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
		(n.name || n.icon || e.$slots.icon) && !e.$slots.default ? (s(), b(o, k({
			key: 0,
			"aria-label": n.icon ? n.name : void 0,
			variant: "tertiary"
		}, a.linkAttributes), ne({ _: 2 }, [e.$slots.icon || n.icon ? {
			name: "icon",
			fn: d(() => [x(e.$slots, "icon", {}, () => [E("span", { class: O([n.icon, "icon"]) }, null, 2)], !0)]),
			key: "0"
		} : void 0, !(e.$slots.icon || n.icon) || n.forceIconText ? {
			name: "default",
			fn: d(() => [_(T(n.name), 1)]),
			key: "1"
		} : void 0]), 1040, ["aria-label"])) : h("", !0),
		e.$slots.default ? (s(), b(l, {
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
			icon: d(() => [x(e.$slots, "menu-icon", {}, void 0, !0)]),
			default: d(() => [x(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, [
			"container",
			"forceMenu",
			"menuName",
			"open",
			"title",
			"onUpdate:open"
		])) : h("", !0),
		te(u, {
			class: "vue-crumb__separator",
			size: 20
		})
	], 42, $i);
}
var ta = /* @__PURE__ */ l(Qi, [["render", ea], ["__scopeId", "data-v-7cec4a3e"]]), na = {
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
	return s(), w("span", k(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(s(), w("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [E("path", aa, [n.title ? (s(), w("title", oa, T(n.title), 1)) : h("", !0)])], 8, ia))], 16, ra);
}
var ca = /* @__PURE__ */ l(na, [["render", sa]]), $ = "vue-crumb", la = /* @__PURE__ */ l({
	name: "NcBreadcrumbs",
	components: {
		NcActions: ae,
		NcActionButton: he,
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
		this.hiddenIndices.length && n.splice(Math.round(e.length / 2), 0, C(ta, {
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
			let s = he, c = "";
			r && (s = Ii, c = r), n && (s = Gi, c = n);
			let l = C(ca, { size: 20 });
			return C(s, {
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
		let r = [C("nav", { "aria-label": this.ariaLabel }, [C("ul", { class: "breadcrumb__crumbs" }, [n])])];
		return oe(this.$slots.actions?.()) && r.push(C("div", {
			class: "breadcrumb__actions",
			ref: "breadcrumb__actions"
		}, this.$slots.actions?.())), this.breadcrumbsRefs = t, C("div", {
			class: ["breadcrumb", { "breadcrumb--collapsed": this.hiddenIndices.length === e.length - 2 }],
			ref: "container"
		}, r);
	}
}, [["__scopeId", "data-v-5a4d73af"]]);
//#endregion
export { xe as a, Q as i, ta as n, he as o, Ei as r, j as s, la as t };
