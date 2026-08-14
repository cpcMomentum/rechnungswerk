import { n as e } from "./rolldown-runtime-B0aSnxlc.chunk.mjs";
import { At as t, Cn as n, Ct as r, D as i, Et as a, Ht as o, Lt as s, Sn as c, Ut as l, Zt as u, _t as d, bn as f, bt as p, ct as m, en as h, gt as g, ht as _, pt as v, t as y, ut as b, vt as x, xt as S, yn as ee, yt as C } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { a as te, c as w, g as ne, h as re, s as ie } from "./NcPopover-B87bEPLq-Bfc7fZbF.chunk.mjs";
import { E as T, T as E, d as D, s as ae } from "./mdi-CpchYUUV-BlQjFBKG.chunk.mjs";
import { C as O, S as oe, b as se, x as ce } from "./chunks-tk4b0tDJ.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/actionGlobal-BZFdtdJL.mjs
var k = {
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
}, le = {
	mixins: [k],
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
	inject: { closeMenu: { from: oe } },
	emits: ["click"],
	created() {
		"ariaHidden" in this.$attrs && u("[NcAction*]: Do not set the ariaHidden attribute as the root element will inherit the incorrect aria-hidden.");
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
}, ue = {
	name: "NcActionButton",
	components: { NcIconSvgWrapper: E },
	mixins: [le],
	inject: { isInSemanticMenu: {
		from: O,
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
			mdiCheck: ae,
			mdiChevronRight: D
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
}, A = ["role"], de = [
	"aria-label",
	"disabled",
	"title",
	"type"
], fe = { class: "action-button__longtext-wrapper" }, pe = {
	key: 0,
	class: "action-button__name"
}, me = ["textContent"], he = {
	key: 2,
	class: "action-button__text"
}, ge = ["textContent"], _e = {
	key: 2,
	class: "action-button__pressed-icon material-design-icon"
};
function ve(e, r, i, a, u, p) {
	let m = l("NcIconSvgWrapper");
	return s(), x("li", {
		class: f(["action", { "action--disabled": i.disabled }]),
		role: p.isInSemanticMenu && "presentation"
	}, [_("button", t({
		"aria-label": e.ariaLabel,
		class: ["action-button button-vue", {
			"action-button--active": p.isChecked,
			focusable: p.isFocusable
		}],
		disabled: i.disabled,
		title: e.title,
		type: p.nativeType
	}, p.buttonAttributes, { onClick: r[0] ||= (...e) => p.handleClick && p.handleClick(...e) }), [
		o(e.$slots, "icon", {}, () => [_("span", {
			class: f([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
			style: c({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
			"aria-hidden": "true"
		}, null, 6)], !0),
		_("span", fe, [
			e.name ? (s(), x("strong", pe, n(e.name), 1)) : d("", !0),
			e.isLongText ? (s(), x("span", {
				key: 1,
				class: "action-button__longtext",
				textContent: n(e.text)
			}, null, 8, me)) : (s(), x("span", he, n(e.text), 1)),
			i.description ? (s(), x("span", {
				key: 3,
				class: "action-button__description",
				textContent: n(i.description)
			}, null, 8, ge)) : d("", !0)
		]),
		i.isMenu ? (s(), g(m, {
			key: 0,
			class: "action-button__menu-icon",
			directional: "",
			path: a.mdiChevronRight
		}, null, 8, ["path"])) : p.isChecked ? (s(), g(m, {
			key: 1,
			path: a.mdiCheck,
			class: "action-button__pressed-icon"
		}, null, 8, ["path"])) : p.isChecked === !1 ? (s(), x("span", _e)) : d("", !0),
		d("", !0)
	], 16, de)], 10, A);
}
var ye = /* @__PURE__ */ i(ue, [["render", ve], ["__scopeId", "data-v-6c2daf4e"]]), be = ["aria-labelledby"], xe = {
	key: 0,
	class: "empty-content__icon",
	"aria-hidden": "true"
}, Se = ["id"], Ce = {
	key: 2,
	class: "empty-content__description"
}, we = {
	key: 3,
	class: "empty-content__action"
}, Te = /* @__PURE__ */ i(/* @__PURE__ */ r({
	__name: "NcEmptyContent",
	props: {
		description: { default: "" },
		name: { default: "" }
	},
	setup(e) {
		let t = y();
		return (r, i) => (s(), x("div", {
			"aria-labelledby": ee(t),
			class: "empty-content",
			role: "note"
		}, [
			r.$slots.icon ? (s(), x("div", xe, [o(r.$slots, "icon", {}, void 0, !0)])) : d("", !0),
			e.name !== "" || r.$slots.name ? (s(), x("div", {
				key: 1,
				id: ee(t),
				class: "empty-content__name"
			}, [o(r.$slots, "name", {}, () => [p(n(e.name), 1)], !0)], 8, Se)) : d("", !0),
			e.description !== "" || r.$slots.description ? (s(), x("p", Ce, [o(r.$slots, "description", {}, () => [p(n(e.description), 1)], !0)])) : d("", !0),
			r.$slots.action ? (s(), x("div", we, [o(r.$slots, "action", {}, void 0, !0)])) : d("", !0)
		], 8, be));
	}
}), [["__scopeId", "data-v-8609a4c1"]]);
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function Ee(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: De } = Object.prototype, { getPrototypeOf: j } = Object, { iterator: M, toStringTag: Oe } = Symbol, ke = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), N = (e, t) => {
	let n = e, r = [];
	for (; n != null && n !== Object.prototype;) {
		if (r.indexOf(n) !== -1) return !1;
		if (r.push(n), ke(n, t)) return !0;
		n = j(n);
	}
	return !1;
}, Ae = (e, t) => e != null && N(e, t) ? e[t] : void 0, je = ((e) => (t) => {
	let n = De.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), P = (e) => (e = e.toLowerCase(), (t) => je(t) === e), Me = (e) => (t) => typeof t === e, { isArray: F } = Array, I = Me("undefined");
function L(e) {
	return e !== null && !I(e) && e.constructor !== null && !I(e.constructor) && R(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Ne = P("ArrayBuffer");
function Pe(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Ne(e.buffer), t;
}
var Fe = Me("string"), R = Me("function"), Ie = Me("number"), z = (e) => typeof e == "object" && !!e, Le = (e) => e === !0 || e === !1, Re = (e) => {
	if (!z(e)) return !1;
	let t = j(e);
	return (t === null || t === Object.prototype || j(t) === null) && !N(e, Oe) && !N(e, M);
}, ze = (e) => {
	if (!z(e) || L(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, Be = P("Date"), Ve = P("File"), He = (e) => !!(e && e.uri !== void 0), Ue = (e) => e && e.getParts !== void 0, We = P("Blob"), Ge = P("FileList"), Ke = P("Set"), qe = (e) => z(e) && R(e.pipe);
function Je() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var Ye = Je(), Xe = Ye.FormData === void 0 ? void 0 : Ye.FormData, Ze = (e) => {
	if (!e) return !1;
	if (Xe && e instanceof Xe) return !0;
	let t = j(e);
	if (!t || t === Object.prototype || !R(e.append)) return !1;
	let n = je(e);
	return n === "formdata" || n === "object" && R(e.toString) && e.toString() === "[object FormData]";
}, Qe = P("URLSearchParams"), [$e, et, tt, nt] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(P), rt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function B(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), F(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (L(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function it(e, t) {
	if (L(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var V = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, at = (e) => !I(e) && e !== V;
function ot(...e) {
	let { caseless: t, skipUndefined: n } = at(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && it(r, i) || i, o = ke(r, a) ? r[a] : void 0;
		Re(o) && Re(e) ? r[a] = ot(o, e) : Re(e) ? r[a] = ot({}, e) : F(e) ? r[a] = e.slice() : (!n || !I(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || L(n) || (B(n, i), typeof n != "object" || F(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			vt.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var st = (e, t, n, { allOwnKeys: r } = {}) => (B(t, (t, r) => {
	n && R(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: Ee(t, n),
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
}, { allOwnKeys: r }), e), ct = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), lt = (e, t, n, r) => {
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
}, ut = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && j(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, dt = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, ft = (e) => {
	if (!e) return null;
	if (F(e)) return e;
	let t = e.length;
	if (!Ie(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, pt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && j(Uint8Array)), mt = (e, t) => {
	let n = (e && e[M]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, ht = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, gt = P("HTMLFormElement"), _t = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: vt } = Object.prototype, yt = P("RegExp"), bt = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	B(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, xt = (e) => {
	bt(e, (t, n) => {
		if (R(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (R(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, St = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return F(e) ? r(e) : r(String(e).split(t)), n;
}, Ct = () => {}, wt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Tt(e) {
	return !!(e && R(e.append) && e[Oe] === "FormData" && e[M]);
}
var Et = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (z(e)) {
			if (t.has(e)) return;
			if (L(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (Ke(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!I(e) && r.push(e);
					}
				} else r = F(e) ? [] : {}, B(e, (e, t) => {
					let i = n(e);
					!I(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Dt = P("AsyncFunction"), Ot = (e) => e && (z(e) || R(e)) && R(e.then) && R(e.catch), kt = ((e, t) => e ? setImmediate : t ? ((e, t) => (V.addEventListener("message", ({ source: n, data: r }) => {
	n === V && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), V.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", R(V.postMessage)), At = typeof queueMicrotask < "u" ? queueMicrotask.bind(V) : typeof process < "u" && process.nextTick || kt, jt = (e) => e != null && R(e[M]), H = {
	isArray: F,
	isArrayBuffer: Ne,
	isBuffer: L,
	isFormData: Ze,
	isArrayBufferView: Pe,
	isString: Fe,
	isNumber: Ie,
	isBoolean: Le,
	isObject: z,
	isPlainObject: Re,
	isEmptyObject: ze,
	isReadableStream: $e,
	isRequest: et,
	isResponse: tt,
	isHeaders: nt,
	isUndefined: I,
	isDate: Be,
	isFile: Ve,
	isReactNativeBlob: He,
	isReactNative: Ue,
	isBlob: We,
	isRegExp: yt,
	isFunction: R,
	isStream: qe,
	isURLSearchParams: Qe,
	isTypedArray: pt,
	isFileList: Ge,
	forEach: B,
	merge: ot,
	extend: st,
	trim: rt,
	stripBOM: ct,
	inherits: lt,
	toFlatObject: ut,
	kindOf: je,
	kindOfTest: P,
	endsWith: dt,
	toArray: ft,
	forEachEntry: mt,
	matchAll: ht,
	isHTMLForm: gt,
	hasOwnProperty: ke,
	hasOwnProp: ke,
	hasOwnInPrototypeChain: N,
	getSafeProp: Ae,
	reduceDescriptors: bt,
	freezeMethods: xt,
	toObjectSet: St,
	toCamelCase: _t,
	noop: Ct,
	toFiniteNumber: wt,
	findKey: it,
	global: V,
	isContextDefined: at,
	isSpecCompliantForm: Tt,
	toJSONObject: Et,
	isAsyncFn: Dt,
	isThenable: Ot,
	setImmediate: kt,
	asap: At,
	isIterable: jt,
	isSafeIterable: (e) => e != null && N(e, M) && jt(e)
}, Mt = H.toObjectSet([
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
]), Nt = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = H.hasOwnProp(t, n);
		!n || a && H.hasOwnProp(Mt, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function Pt(e) {
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
var Ft = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), It = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Lt(e, t) {
	return H.isArray(e) ? e.map((e) => Lt(e, t)) : Pt(String(e).replace(t, ""));
}
var Rt = (e) => Lt(e, Ft), zt = (e) => Lt(e, It);
function Bt(e) {
	let t = Object.create(null);
	return H.forEach(e.toJSON(), (e, n) => {
		t[n] = zt(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var Vt = Symbol("internals");
function U(e) {
	return e && String(e).trim().toLowerCase();
}
function Ht(e) {
	return e === !1 || e == null ? e : H.isArray(e) ? e.map(Ht) : Rt(String(e));
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
	if (H.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), H.isString(t)) {
		if (H.isString(r)) return t.indexOf(r) !== -1;
		if (H.isRegExp(r)) return r.test(t);
	}
}
function Xt(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Zt(e, t) {
	let n = H.toCamelCase(" " + t);
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
			let i = U(t);
			if (!i) return;
			let a = H.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = Ht(e));
		}
		let a = (e, t) => H.forEach(e, (e, n) => i(e, n, t));
		if (H.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (H.isString(e) && (e = e.trim()) && !Jt(e)) a(Nt(e), t);
		else if (H.isObject(e) && H.isSafeIterable(e)) {
			let n = Object.create(null), r, i;
			for (let t of e) {
				if (!H.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], H.hasOwnProp(n, i) ? (r = n[i], n[i] = H.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = U(e), e) {
			let n = H.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return Ut(e);
				if (H.isFunction(t)) return t.call(this, e, n);
				if (H.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = U(e), e) {
			let n = H.findKey(this, e);
			return !!(n && this[n] !== void 0 && (!t || Yt(this, this[n], n, t)));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = U(e), e) {
				let i = H.findKey(n, e);
				i && (!t || Yt(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return H.isArray(e) ? e.forEach(i) : i(e), r;
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
		return H.forEach(this, (r, i) => {
			let a = H.findKey(n, i);
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
		return H.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && H.isArray(n) ? n.join(", ") : n);
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
		return H.isArray(e) ? e : e == null || e === !1 ? [] : [e];
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
		let t = (this[Vt] = this[Vt] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = U(e);
			t[r] || (Zt(n, e), t[r] = !0);
		}
		return H.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
W.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), H.reduceDescriptors(W.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), H.freezeMethods(W);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var Qt = "[REDACTED ****]";
function $t(e) {
	if (H.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (H.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function en(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || H.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof W && (e = e.toJSON()), r.push(e);
		let t;
		if (H.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			H.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!H.isPlainObject(e) && $t(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? Qt : i(a);
				H.isUndefined(e) || (t[r] = e);
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
		!s && H.isArray(t.errors) && t.errors.length && (s = nn(t));
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
		let e = this.config, t = e && H.hasOwnProp(e, "redact") ? e.redact : void 0, n = H.isArray(t) && t.length > 0 ? en(e, t) : H.toJSONObject(e);
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
	return H.isPlainObject(e) || H.isArray(e);
}
function an(e) {
	return H.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function on(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = an(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function sn(e) {
	return H.isArray(e) && !e.some(rn);
}
var cn = H.toFlatObject(H, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function ln(e, t, n) {
	if (!H.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData(), n = H.toFlatObject(n, {
		metaTokens: !0,
		dots: !1,
		indexes: !1
	}, !1, function(e, t) {
		return !H.isUndefined(t[e]);
	});
	let r = n.metaTokens, i = n.visitor || m, a = n.dots, o = n.indexes, s = n.Blob || typeof Blob < "u" && Blob, c = n.maxDepth === void 0 ? 100 : n.maxDepth, l = s && H.isSpecCompliantForm(t), u = [];
	if (!H.isFunction(i)) throw TypeError("visitor must be a function");
	function d(e) {
		if (e === null) return "";
		if (H.isDate(e)) return e.toISOString();
		if (H.isBoolean(e)) return e.toString();
		if (!l && H.isBlob(e)) throw new G("Blob is not supported. Use a Buffer instead.");
		if (H.isArrayBuffer(e) || H.isTypedArray(e)) {
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
			if (!H.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), f(t + n.length - 1), r;
		});
	}
	function m(e, n, i) {
		let s = e;
		if (H.isReactNative(t) && H.isReactNativeBlob(e)) return t.append(on(i, n, a), d(e)), !1;
		if (e && !i && typeof e == "object") {
			if (H.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = p(e, 1);
			else if (H.isArray(e) && sn(e) || (H.isFileList(e) || H.endsWith(n, "[]")) && (s = H.toArray(e))) return n = an(n), s.forEach(function(e, r) {
				!(H.isUndefined(e) || e === null) && t.append(o === !0 ? on([n], r, a) : o === null ? n : n + "[]", d(e));
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
		if (!H.isUndefined(e)) {
			if (f(r), u.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			u.push(e), H.forEach(e, function(e, a) {
				(!(H.isUndefined(e) || e === null) && i.call(t, e, H.isString(a) ? a.trim() : a, n, h)) === !0 && g(e, n ? n.concat(a) : [a], r + 1);
			}), u.pop();
		}
	}
	if (!H.isObject(e)) throw TypeError("data must be an object");
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
	let r = H.isFunction(n) ? { serialize: n } : n, i = H.getSafeProp(r, "encode") || pn, a = H.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : H.isURLSearchParams(t) ? t.toString() : new dn(t, r).toString(i), o) {
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
		H.forEach(this.handlers, function(t) {
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
}, vn = /* @__PURE__ */ e({
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
			return K.isNode && H.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
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
		return a = !a && H.isArray(r) ? r.length : a, s ? (H.hasOwnProp(r, a) ? r[a] = H.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!H.hasOwnProp(r, a) || !H.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && H.isArray(r[a]) && (r[a] = On(r[a])), !o);
	}
	if (H.isFormData(e) && H.isFunction(e.entries)) {
		let n = {};
		return H.forEachEntry(e, (e, r) => {
			t(Dn(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/defaults/index.js
var q = (e, t) => e != null && H.hasOwnProp(e, t) ? e[t] : void 0;
function An(e, t, n) {
	if (H.isString(e)) try {
		return (t || JSON.parse)(e), H.trim(e);
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
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = H.isObject(e);
		if (i && H.isHTMLForm(e) && (e = new FormData(e)), H.isFormData(e)) return r ? JSON.stringify(kn(e)) : e;
		if (H.isArrayBuffer(e) || H.isBuffer(e) || H.isStream(e) || H.isFile(e) || H.isBlob(e) || H.isReadableStream(e)) return e;
		if (H.isArrayBufferView(e)) return e.buffer;
		if (H.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = q(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return wn(e, t).toString();
			if ((a = H.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = q(this, "env"), r = n && n.FormData;
				return ln(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), An(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = q(this, "transitional") || jn.transitional, n = t && t.forcedJSONParsing, r = q(this, "responseType"), i = r === "json";
		if (H.isResponse(e) || H.isReadableStream(e)) return e;
		if (e && H.isString(e) && (n && !r || i)) {
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
H.forEach([
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
	return H.forEach(e, function(e) {
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
}, Vn = (e, t = H.asap) => (...n) => t(() => e(...n)), Hn = K.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, K.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(K.origin), K.navigator && /(msie|trident)/i.test(K.navigator.userAgent)) : () => !0, Un = K.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		H.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), H.isString(r) && s.push(`path=${r}`), H.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), H.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
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
		return H.isPlainObject(e) && H.isPlainObject(t) ? H.merge.call({ caseless: r }, e, t) : H.isPlainObject(t) ? H.merge({}, t) : H.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!H.isUndefined(t)) return r(e, t, n, i);
		if (!H.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!H.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!H.isUndefined(t)) return r(void 0, t);
		if (!H.isUndefined(e)) return r(void 0, e);
	}
	function s(n) {
		let r = H.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!H.isUndefined(r)) {
			if (H.isPlainObject(r)) {
				if (H.hasOwnProp(r, n)) return r[n];
			} else return;
		}
		let i = H.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (H.isPlainObject(i) && H.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (H.hasOwnProp(t, a)) return r(n, i);
		if (H.hasOwnProp(e, a)) return r(void 0, n);
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
	return H.forEach(tr({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = H.hasOwnProp(l, r) ? l[r] : i, o = a(H.hasOwnProp(e, r) ? e[r] : void 0, H.hasOwnProp(t, r) ? t[r] : void 0, r);
		H.isUndefined(o) && a !== c || (n[r] = o);
	}), H.hasOwnProp(t, "validateStatus") && H.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (H.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
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
	let t = J({}, e), n = (e) => H.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = W.from(s), t.url = mn($n(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = H.getSafeProp(c, "username") || "", n = H.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? ir(n) : "")));
		} catch (t) {
			throw G.from(t, G.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (H.isFormData(r) && (K.hasStandardBrowserEnv || K.hasStandardBrowserWebWorkerEnv || H.isReactNative(r) ? s.setContentType(void 0) : H.isFunction(r.getHeaders) && rr(s, r.getHeaders(), n("formDataHeaderPolicy"))), K.hasStandardBrowserEnv && (H.isFunction(i) && (i = i(t)), i === !0 || i == null && Hn(t.url))) {
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
			!h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.startsWith("file:")) || setTimeout(g);
		}, h.onabort = function() {
			h &&= (n(new G("Request aborted", G.ECONNABORTED, e, h)), m(), null);
		}, h.onerror = function(t) {
			let r = new G(t && t.message ? t.message : "Network Error", G.ERR_NETWORK, e, h);
			r.event = t || null, n(r), m(), h = null;
		}, h.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || gn;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new G(t, i.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED, e, h)), m(), h = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in h && H.forEach(Bt(a), function(e, t) {
			h.setRequestHeader(t, e);
		}), H.isUndefined(r.withCredentials) || (h.withCredentials = !!r.withCredentials), o && o !== "json" && (h.responseType = r.responseType), c && ([d, p] = zn(c, !0), h.addEventListener("progress", d)), s && h.upload && ([u, f] = zn(s), h.upload.addEventListener("progress", u), h.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
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
	return s.unsubscribe = () => H.asap(o), s;
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
var Sr = "1.19.0", Cr = 65536, { isFunction: wr } = H, Tr = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Er = (e) => {
	if (!H.isString(e)) return e;
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
	let t = H.global !== void 0 && H.global !== null ? H.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = H.merge.call({ skipUndefined: !0 }, {
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
	}), p = l && u && Dr(() => H.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
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
		if (H.isBlob(e)) return e.size;
		if (H.isSpecCompliantForm(e)) return (await new a(K.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (H.isArrayBufferView(e) || H.isArrayBuffer(e)) return e.byteLength;
		if (H.isURLSearchParams(e) && (e += ""), H.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => H.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: y, responseType: b, headers: x, withCredentials: S = "same-origin", fetchOptions: ee, maxContentLength: C, maxBodyLength: te } = ar(e), w = H.isNumber(C) && C > -1, ne = H.isNumber(te) && te > -1, re = (t) => H.hasOwnProp(e, t) ? e[t] : void 0, ie = i || fetch;
		b = b ? (b + "").toLowerCase() : "text";
		let T = sr([l, d && d.toAbortSignal()], _), E = null, D = T && T.unsubscribe && (() => {
			T.unsubscribe();
		}), ae, O = null, oe = () => new G("Request body larger than maxBodyLength limit", G.ERR_BAD_REQUEST, e, E);
		try {
			let i, l = re("auth");
			if (l && (i = {
				username: H.getSafeProp(l, "username") || "",
				password: H.getSafeProp(l, "password") || ""
			}), Or(t)) {
				let e = new URL(t, K.origin);
				!i && (e.username || e.password) && (i = {
					username: Er(e.username),
					password: Er(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (x.delete("authorization"), x.set("Authorization", "Basic " + btoa(Tr((i.username || "") + ":" + (i.password || ""))))), w && typeof t == "string" && t.startsWith("data:") && xr(t) > C) throw new G("maxContentLength size of " + C + " exceeded", G.ERR_BAD_RESPONSE, e, E);
			if (ne && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (ae = e, e > te)) throw oe();
			}
			let d = ne && (H.isReadableStream(s) || H.isStream(s)), _ = (e, t, n) => dr(e, Cr, (e) => {
				if (ne && e > te) throw O = oe();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (y || d)) {
				if (ae ??= await g(x, s), ae !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (H.isFormData(s) && (n = e.headers.get("content-type")) && x.setContentType(n), e.body) {
						let [t, n] = y && Bn(ae, zn(Vn(y))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new G("Stream request bodies are not supported by the current fetch implementation", G.ERR_NOT_SUPPORT, e, E);
			H.isString(S) || (S = S ? "include" : "omit");
			let se = c && "credentials" in a.prototype;
			if (H.isFormData(s)) {
				let e = x.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && x.delete("content-type");
			}
			x.set("User-Agent", "axios/" + Sr, !1);
			let ce = {
				...ee,
				signal: T,
				method: n.toUpperCase(),
				headers: Bt(x.normalize()),
				body: s,
				duplex: "half",
				credentials: se ? S : void 0
			};
			E = c && new a(t, ce);
			let k = await (c ? ie(E, ee) : ie(t, ce)), le = W.from(k.headers);
			if (w) {
				let t = H.toFiniteNumber(le.getContentLength());
				if (t != null && t > C) throw new G("maxContentLength size of " + C + " exceeded", G.ERR_BAD_RESPONSE, e, E);
			}
			let ue = p && (b === "stream" || b === "response");
			if (p && k.body && (v || w || ue && D)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = k[e];
				});
				let n = H.toFiniteNumber(le.getContentLength()), [r, i] = v && Bn(n, zn(Vn(v), !0)) || [], a = 0;
				k = new o(dr(k.body, Cr, (t) => {
					if (w && (a = t, a > C)) throw new G("maxContentLength size of " + C + " exceeded", G.ERR_BAD_RESPONSE, e, E);
					r && r(t);
				}, () => {
					i && i(), D && D();
				}), t);
			}
			b ||= "text";
			let A = await m[H.findKey(m, b) || "text"](k, e);
			if (w && !p && !ue) {
				let t;
				if (A != null && (typeof A.byteLength == "number" ? t = A.byteLength : typeof A.size == "number" ? t = A.size : typeof A == "string" && (t = typeof r == "function" ? new r().encode(A).byteLength : A.length)), typeof t == "number" && t > C) throw new G("maxContentLength size of " + C + " exceeded", G.ERR_BAD_RESPONSE, e, E);
			}
			return !ue && D && D(), await new Promise((t, n) => {
				Fn(t, n, {
					data: A,
					headers: W.from(k.headers),
					status: k.status,
					statusText: k.statusText,
					config: e,
					request: E
				});
			});
		} catch (t) {
			if (D && D(), T && T.aborted && T.reason instanceof G) {
				let n = T.reason;
				throw n.config = e, E && (n.request = E), t !== n && Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			if (O) throw E && !O.request && (O.request = E), O;
			if (t instanceof G) throw E && !t.request && (t.request = E), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new G("Network Error", G.ERR_NETWORK, e, E, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw G.from(t, t && t.code, e, E, t && t.response);
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
H.forEach(Mr, (e, t) => {
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
var Nr = (e) => `- ${e}`, Pr = (e) => H.isFunction(e) || e === null || e === !1;
function Fr(e, t) {
	e = H.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Pr(r) && (i = Mr[(n = String(r)).toLowerCase()], i === void 0)) throw new G(`Unknown adapter '${n}'`);
		if (i && (H.isFunction(i) || (i = i.get(t)))) break;
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
		}, !1), r != null && (H.isFunction(r) ? t.paramsSerializer = { serialize: r } : Hr.assertOptions(r, {
			encode: Y.function,
			serialize: Y.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), Hr.assertOptions(t, {
			baseUrl: Y.spelling("baseURL"),
			withXsrfToken: Y.spelling("withXSRFToken")
		}, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
		let a = i && H.merge(i.common, i[t.method]);
		i && H.forEach([
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
					H.isThenable(n) && (l = Promise.resolve(n).then(() => Rr.call(this, f)));
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
H.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	X.prototype[e] = function(t, n) {
		return this.request(J(n || {}, {
			method: e,
			url: t,
			data: n && H.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), H.forEach([
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
	return H.isObject(e) && e.isAxiosError === !0;
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
	let t = new X(e), n = Ee(X.prototype.request, t);
	return H.extend(n, X.prototype, t, { allOwnKeys: !0 }), H.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return qr(J(e, t));
	}, n;
}
var Z = qr(jn);
Z.Axios = X, Z.CanceledError = Pn, Z.CancelToken = Ur, Z.isCancel = Nn, Z.VERSION = Sr, Z.toFormData = ln, Z.AxiosError = G, Z.Cancel = Z.CanceledError, Z.all = function(e) {
	return Promise.all(e);
}, Z.spread = Wr, Z.isAxiosError = Gr, Z.mergeConfig = J, Z.AxiosHeaders = W, Z.formToJSON = (e) => kn(H.isHTMLForm(e) ? new FormData(e) : e), Z.getAdapter = Ir.getAdapter, Z.HttpStatusCode = Kr, Z.default = Z;
//#endregion
//#region node_modules/axios/index.js
var { Axios: Jr, AxiosError: Yr, CanceledError: Xr, isCancel: Zr, CancelToken: Qr, VERSION: $r, all: ei, Cancel: ti, isAxiosError: ni, spread: ri, toFormData: ii, AxiosHeaders: ai, HttpStatusCode: oi, formToJSON: si, getAdapter: ci, mergeConfig: li, create: ui } = Z;
//#endregion
//#region node_modules/@nextcloud/axios/dist/client.js
function di() {
	let e = Z.create({ headers: {
		requesttoken: ie() ?? "",
		"X-Requested-With": "XMLHttpRequest"
	} });
	return w((t) => {
		e.defaults.headers.requesttoken = t;
	}), Object.assign(e, {
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
		let { config: n, response: r, request: i } = t, a = i?.responseURL;
		if (n && !(fi in n) && r?.status === 412 && r?.data?.message === "CSRF check failed") {
			console.warn(`Request to ${a} failed because of a CSRF mismatch. Fetching a new token.`);
			let t = await te();
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
//#region node_modules/@nextcloud/vue/dist/chunks/NcActionLink-BFiaYt9A.mjs
var vi = {
	name: "NcActionLink",
	mixins: [le],
	inject: { isInSemanticMenu: {
		from: O,
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
function Ei(e, t, r, i, a, l) {
	return s(), x("li", {
		class: "action",
		role: l.isInSemanticMenu && "presentation"
	}, [_("a", {
		download: r.download,
		href: r.href,
		"aria-label": e.ariaLabel,
		target: r.target,
		title: r.title,
		class: "action-link focusable",
		rel: "nofollow noreferrer noopener",
		role: l.isInSemanticMenu && "menuitem",
		onClick: t[0] ||= (...t) => e.onClick && e.onClick(...t)
	}, [
		o(e.$slots, "icon", {}, () => [_("span", {
			"aria-hidden": "true",
			class: f(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
			style: c({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
		}, null, 6)], !0),
		e.name ? (s(), x("span", xi, [
			_("strong", Si, n(e.name), 1),
			t[1] ||= _("br", null, null, -1),
			_("span", {
				class: "action-link__longtext",
				textContent: n(e.text)
			}, null, 8, Ci)
		])) : e.isLongText ? (s(), x("span", {
			key: 1,
			class: "action-link__longtext",
			textContent: n(e.text)
		}, null, 8, wi)) : (s(), x("span", Ti, n(e.text), 1)),
		d("", !0)
	], 8, bi)], 8, yi);
}
var Di = /* @__PURE__ */ i(vi, [["render", Ei], ["__scopeId", "data-v-32f01b7a"]]), Oi = {
	name: "NcActionRouter",
	mixins: [le],
	inject: { isInSemanticMenu: {
		from: O,
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
function Fi(e, t, r, i, a, u) {
	let p = l("RouterLink");
	return s(), x("li", {
		class: "action",
		role: u.isInSemanticMenu && "presentation"
	}, [S(p, {
		"aria-label": e.ariaLabel,
		class: "action-router focusable",
		rel: "nofollow noreferrer noopener",
		role: u.isInSemanticMenu && "menuitem",
		title: e.title,
		to: r.to,
		onClick: e.onClick
	}, {
		default: h(() => [
			o(e.$slots, "icon", {}, () => [_("span", {
				"aria-hidden": "true",
				class: f(["action-router__icon", [e.isIconUrl ? "action-router__icon--url" : e.icon]]),
				style: c({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
			}, null, 6)], !0),
			e.name ? (s(), x("span", Ai, [
				_("strong", ji, n(e.name), 1),
				t[0] ||= _("br", null, null, -1),
				_("span", {
					class: "action-router__longtext",
					textContent: n(e.text)
				}, null, 8, Mi)
			])) : e.isLongText ? (s(), x("span", {
				key: 1,
				class: "action-router__longtext",
				textContent: n(e.text)
			}, null, 8, Ni)) : (s(), x("span", Pi, n(e.text), 1)),
			d("", !0)
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
var Ii = /* @__PURE__ */ i(Oi, [["render", Fi], ["__scopeId", "data-v-87267750"]]), Li = {
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
function Hi(e, r, i, a, o, c) {
	return s(), x("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon chevron-right-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(s(), x("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [_("path", Bi, [i.title ? (s(), x("title", Vi, n(i.title), 1)) : d("", !0)])], 8, zi))], 16, Ri);
}
var Ui = {
	name: "NcBreadcrumb",
	components: {
		NcActions: se,
		ChevronRight: /* @__PURE__ */ i(Li, [["render", Hi]]),
		NcButton: T
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
		let e = y();
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
function Gi(e, r, i, a, c, u) {
	let v = l("NcButton"), y = l("NcActions"), b = l("ChevronRight");
	return s(), x("li", {
		ref: "crumb",
		class: f(["vue-crumb", [{ "vue-crumb--hovered": c.hovering }, e.$props.class]]),
		"data-crumb-id": a.crumbId,
		draggable: "false",
		onDragstart: m(() => {}, ["prevent"]),
		onDrop: r[0] ||= m((...e) => u.dropped && u.dropped(...e), ["prevent"]),
		onDragover: m(() => {}, ["prevent"]),
		onDragenter: r[1] ||= (...e) => u.dragEnter && u.dragEnter(...e),
		onDragleave: r[2] ||= (...e) => u.dragLeave && u.dragLeave(...e)
	}, [
		(i.name || i.icon || e.$slots.icon) && !e.$slots.default ? (s(), g(v, t({
			key: 0,
			"aria-label": i.icon ? i.name : void 0,
			variant: "tertiary"
		}, u.linkAttributes), C({ _: 2 }, [e.$slots.icon || i.icon ? {
			name: "icon",
			fn: h(() => [o(e.$slots, "icon", {}, () => [_("span", { class: f([i.icon, "icon"]) }, null, 2)], !0)]),
			key: "0"
		} : void 0, !(e.$slots.icon || i.icon) || i.forceIconText ? {
			name: "default",
			fn: h(() => [p(n(i.name), 1)]),
			key: "1"
		} : void 0]), 1040, ["aria-label"])) : d("", !0),
		e.$slots.default ? (s(), g(y, {
			key: 1,
			ref: "actions",
			container: a.actionsContainer,
			forceMenu: i.forceMenu,
			forceName: "",
			menuName: i.name,
			open: i.open,
			title: i.title,
			variant: "tertiary",
			"onUpdate:open": u.onOpenChange
		}, {
			icon: h(() => [o(e.$slots, "menu-icon", {}, void 0, !0)]),
			default: h(() => [o(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, [
			"container",
			"forceMenu",
			"menuName",
			"open",
			"title",
			"onUpdate:open"
		])) : d("", !0),
		S(b, {
			class: "vue-crumb__separator",
			size: 20
		})
	], 42, Wi);
}
var Ki = /* @__PURE__ */ i(Ui, [["render", Gi], ["__scopeId", "data-v-7cec4a3e"]]), qi = {
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
function Qi(e, r, i, a, o, c) {
	return s(), x("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(s(), x("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [_("path", Xi, [i.title ? (s(), x("title", Zi, n(i.title), 1)) : d("", !0)])], 8, Yi))], 16, Ji);
}
var $i = /* @__PURE__ */ i(qi, [["render", Qi]]), $ = "vue-crumb", ea = /* @__PURE__ */ i({
	name: "NcBreadcrumbs",
	components: {
		NcActions: se,
		NcActionButton: ye,
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
		}, 100)), re("navigation-toggled", this.delayedResize);
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
		window.removeEventListener("resize", this.handleWindowResize), ne("navigation-toggled", this.delayedResize);
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
			t?.type === b && t?.children?.forEach?.((t) => {
				this.isBreadcrumb(t) && e.push(t);
			});
		}), e.length === 0) return;
		e[0] = v(e[0], {
			icon: this.rootIcon,
			ref: "breadcrumbs"
		});
		let t = [];
		e = e.map((e, n) => v(e, { ref: (e) => {
			t[n] = e;
		} }));
		let n = [...e];
		this.hiddenIndices.length && n.splice(Math.round(e.length / 2), 0, a(Ki, {
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
			let { to: n, href: r, disableDrop: i, name: o, ...s } = e[t].props;
			delete s.ref;
			let c = ye, l = "";
			r && (c = Di, l = r), n && (c = Ii, l = n);
			let u = a($i, { size: 20 });
			return a(c, {
				...s,
				class: $,
				href: r || null,
				to: n || null,
				draggable: !1,
				onDragstart: this.dragStart,
				onDrop: (e) => this.dropped(e, l, i),
				onDragover: this.dragOver,
				onDragenter: (e) => this.dragEnter(e, i),
				onDragleave: (e) => this.dragLeave(e, i)
			}, {
				default: () => o,
				icon: () => u
			});
		}) }));
		let r = [a("nav", { "aria-label": this.ariaLabel }, [a("ul", { class: "breadcrumb__crumbs" }, [n])])];
		return ce(this.$slots.actions?.()) && r.push(a("div", {
			class: "breadcrumb__actions",
			ref: "breadcrumb__actions"
		}, this.$slots.actions?.())), this.breadcrumbsRefs = t, a("div", {
			class: ["breadcrumb", { "breadcrumb--collapsed": this.hiddenIndices.length === e.length - 2 }],
			ref: "container"
		}, r);
	}
}, [["__scopeId", "data-v-5a4d73af"]]);
//#endregion
export { Te as a, Q as i, Ki as n, ye as o, _i as r, k as s, ea as t };
