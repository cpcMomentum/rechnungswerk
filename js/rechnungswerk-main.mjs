import { c as e, d as t, g as n, l as r, m as i, t as a, u as o } from "./logger-Dmvqkkgn.chunk.mjs";
import { $n as s, $t as c, A as l, An as u, Bn as d, Bt as f, Cn as p, D as m, E as h, En as g, F as _, Gt as ee, Hn as v, I as y, In as te, J as b, Jn as x, Jt as S, Kt as C, L as ne, Ln as w, Mn as T, Nn as re, O as E, On as ie, Pn as ae, Q as D, Qn as oe, Qt as O, R as se, Rn as k, Tt as A, Un as j, V as ce, Vn as M, Vt as N, Wn as P, X as le, Xn as ue, Xt as F, Yn as I, Yt as de, Z as L, Zn as fe, _ as pe, _n as me, _t as he, a as ge, an as R, ar as _e, at as ve, bn as ye, c as be, cn as z, ct as xe, dn as B, dr as Se, dt as Ce, et as we, fn as Te, fr as Ee, ft as De, g as Oe, gn as ke, gt as Ae, hn as je, ht as Me, in as V, ir as Ne, it as Pe, jn as Fe, ln as H, lr as U, lt as Ie, mn as Le, mt as Re, nn as W, nr as ze, nt as G, o as Be, on as K, ot as Ve, pn as He, pr as q, pt as Ue, qn as We, qt as J, rn as Y, rt as Ge, sr as Ke, st as qe, t as Je, tr as X, tt as Ye, ur as Z, ut as Xe, v as Ze, vn as Q, wn as Qe, xn as $e, yn as et, z as tt, zn as nt } from "./createElementId-B15WSLm8.chunk.mjs";
import { a as rt, i as it, n as at, o as ot, t as st } from "./NcPopover-zn_by2MI.chunk.mjs";
import { A as ct, E as lt, L as ut, M as dt, N as ft, T as pt, j as mt, k as ht, r as gt, t as _t, w as vt } from "./chunks-BArBh8u3.chunk.mjs";
import { n as yt, r as bt, t as xt } from "./NcSelect-B4NvvAAZ.chunk.mjs";
import { a as St, i as Ct, n as wt, o as Tt, t as Et } from "./NcActions-COBB31nv.chunk.mjs";
import { t as Dt } from "./NcLoadingIcon-CJqRuF8c.chunk.mjs";
import { t as Ot } from "./NcCheckboxRadioSwitch-FT6LbQWS.chunk.mjs";
//#region node_modules/pinia/dist/pinia.js
var kt = typeof window < "u", At, jt = (e) => At = e, Mt = Symbol();
function Nt(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Pt = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Ft(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function It(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Vt(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Lt(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Rt(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var zt = typeof navigator == "object" ? navigator : { userAgent: "" }, Bt = /Macintosh/.test(zt.userAgent) && /AppleWebKit/.test(zt.userAgent) && !/Safari/.test(zt.userAgent), Vt = kt ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Bt ? Ht : "msSaveOrOpenBlob" in zt ? Ut : Wt : () => {};
function Ht(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Rt(r) : Lt(r.href) ? It(e, t, n) : (r.target = "_blank", Rt(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Rt(r);
	}, 0));
}
function Ut(e, t = "download", n) {
	if (typeof e == "string") {
		if (Lt(e)) It(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Rt(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Ft(e, n), t);
}
function Wt(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return It(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Pt.HTMLElement)) || "safari" in Pt, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Bt) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: Gt } = Object;
function Kt() {
	let e = We(!0), t = e.run(() => X({})), n = [], r = [], i = fe({
		install(e) {
			jt(i), i._a = e, e.provide(Mt, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var qt = () => {};
function Jt(e, t, n, r = qt) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && x() && oe(i), i;
}
function Yt(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Xt = (e) => e(), Zt = Symbol(), Qt = Symbol();
function $t(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!Object.hasOwn(t, n)) continue;
		let r = t[n], i = e[n];
		e[n] = Nt(i) && Nt(r) && Object.hasOwn(e, n) && !ue(r) && !I(r) ? $t(i, r) : r;
	}
	return e;
}
var en = Symbol();
function tn(e) {
	return !e || typeof e != "object" || !Object.hasOwn(e, en);
}
var { assign: nn } = Object;
function rn(e) {
	return !!(ue(e) && e.effect);
}
function an(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), nn(Ke(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = fe(W(() => {
			jt(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = on(e, l, t, n, r, !0), c;
}
function on(e, t, n = {}, r, i, a) {
	let o, c = nn({ actions: {} }, n), l = { deep: !0 }, u, d, f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m, h = r.state.value[e];
	!a && !h && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let g;
	function _(t) {
		let n;
		u = d = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: "patch function",
			storeId: e,
			events: m
		}) : ($t(r.state.value[e], t), n = {
			type: "patch object",
			payload: t,
			storeId: e,
			events: m
		});
		let i = g = Symbol();
		et().then(() => {
			g === i && (u = !0);
		}), d = !0, Yt(f, n, r.state.value[e]);
	}
	let ee = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			nn(e, t);
		});
	} : qt;
	function v() {
		o.stop(), f.clear(), p.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (Zt in t) return t[Qt] = n, t;
		let i = function() {
			jt(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Yt(p, {
				args: n,
				name: i[Qt],
				store: b,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : b, n);
			} catch (e) {
				throw Yt(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Yt(a, e), e)).catch((e) => (Yt(o, e), Promise.reject(e))) : (Yt(a, l), l);
		};
		return i[Zt] = !0, i[Qt] = n, i;
	}, te = {
		_p: r,
		$id: e,
		$onAction: Jt.bind(null, p),
		$patch: _,
		$reset: ee,
		$subscribe(t, n = {}) {
			if (f.has(t)) return qt;
			let i = Jt(f, t, n.detached, () => a()), a = o.run(() => M(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? d : u) && t({
					storeId: e,
					type: "direct",
					events: m
				}, r);
			}, nn({}, l, n)));
			return i;
		},
		$dispose: v
	}, b = s(te);
	r._s.set(e, b);
	let x = (r._a && r._a.runWithContext || Xt)(() => r._e.run(() => (o = We()).run(() => t({ action: y }))));
	for (let t in x) {
		let n = x[t];
		ue(n) && !rn(n) || I(n) ? a || (h && tn(n) && (ue(n) ? n.value = h[t] : ((n instanceof Set || n instanceof Map) && n.clear(), $t(n, h[t]))), r.state.value[e][t] = n) : typeof n == "function" && (x[t] = y(n, t), c.actions[t] = n);
	}
	return nn(b, x), nn(_e(b), x), Object.defineProperty(b, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			_((t) => {
				nn(t, e);
			});
		}
	}), r._p.forEach((e) => {
		let t = o.run(() => e({
			store: b,
			app: r._a,
			pinia: r,
			options: c
		}));
		nn(b, t);
	}), h && a && n.hydrate && n.hydrate(b.$state, h), u = !0, d = !0, b;
}
function sn(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = je();
		return n ||= o ? ke(Mt, null) : null, n && jt(n), n = At, n._s.has(e) || (i ? on(e, t, r, n) : an(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
//#endregion
//#region node_modules/vue-router/dist/devtools-CN5uWJaH.js
var cn = typeof document < "u", ln = /#/g, un = /&/g, dn = /\//g, fn = /=/g, pn = /\?/g, mn = /\+/g, hn = /%5B/g, gn = /%5D/g, _n = /%5E/g, vn = /%60/g, yn = /%7B/g, bn = /%7C/g, xn = /%7D/g, Sn = /%20/g;
function Cn(e) {
	return e == null ? "" : encodeURI("" + e).replace(bn, "|").replace(hn, "[").replace(gn, "]");
}
function wn(e) {
	return Cn(e).replace(yn, "{").replace(xn, "}").replace(_n, "^");
}
function Tn(e) {
	return Cn(e).replace(mn, "%2B").replace(Sn, "+").replace(ln, "%23").replace(un, "%26").replace(vn, "`").replace(yn, "{").replace(xn, "}").replace(_n, "^");
}
function En(e) {
	return Tn(e).replace(fn, "%3D");
}
function Dn(e) {
	return Cn(e).replace(ln, "%23").replace(pn, "%3F");
}
function On(e) {
	return Dn(e).replace(dn, "%2F");
}
function kn(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var An = /\/$/, jn = (e) => e.replace(An, "");
function Mn(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = Bn(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: kn(o)
	};
}
function Nn(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Pn(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Fn(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && In(t.matched[r], n.matched[i]) && Ln(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function In(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ln(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Rn(e[n], t[n])) return !1;
	return !0;
}
function Rn(e, t) {
	return ve(e) ? zn(e, t) : ve(t) ? zn(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function zn(e, t) {
	return ve(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function Bn(e, t) {
	if (Pe(e)) return e;
	if (!e) return t;
	let n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
	(i === ".." || i === ".") && r.push("");
	let a = n.length - 1, o, s;
	for (o = 0; o < r.length; o++) if (s = r[o], s !== ".") {
		if (s === "..") a > 1 && a--;
		else break;
	}
	return n.slice(0, a).join("/") + "/" + r.slice(o).join("/");
}
var Vn = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
function Hn(e) {
	if (!e) {
		if (cn) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), jn(e);
}
var Un = /^[^#]+#/;
function Wn(e, t) {
	return e.replace(Un, "#") + t;
}
function Gn(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var Kn = () => history.scrollRestoration === "manual" ? {
	left: window.scrollX,
	top: window.scrollY
} : null;
function qn(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = Gn(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Jn(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var Yn = /* @__PURE__ */ new Map();
function Xn(e) {
	Yn.set(e, Kn());
}
function Zn(e) {
	let t = Yn.get(e);
	return Yn.delete(e), t;
}
function Qn(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function $n(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function er(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(mn, " "), i = r.indexOf("="), a = kn(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : kn(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			ve(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function tr(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (n = En(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(ve(r) ? r.map((e) => e && Tn(e)) : [r && Tn(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function nr(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = ve(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function rr() {
	let e = [];
	function t(t) {
		return e.push(t), () => {
			let n = e.indexOf(t);
			n > -1 && e.splice(n, 1);
		};
	}
	function n() {
		e = [];
	}
	return {
		add: t,
		list: () => e.slice(),
		reset: n
	};
}
function ir(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(Ge(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : Qn(e) ? c(Ge(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function ar(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (xe(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(ir(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Ve(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && ir(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function or(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => In(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => In(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
var sr = () => location.protocol + "//" + location.host;
function cr(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Pn(n, "");
	}
	return Pn(n, e) + r + i;
}
function lr(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = cr(e, location), c = n.value, l = t.value, u = 0;
		if (a) {
			if (n.value = s, t.value = a, o && o === c) {
				o = null;
				return;
			}
			u = l ? a.position - l.position : 0;
		} else r(s);
		i.forEach((e) => {
			e(n.value, c, {
				delta: u,
				type: "pop",
				direction: u ? u > 0 ? "forward" : "back" : ""
			});
		});
	};
	function c() {
		o = n.value;
	}
	function l(e) {
		i.push(e);
		let t = () => {
			let t = i.indexOf(e);
			t > -1 && i.splice(t, 1);
		};
		return a.push(t), t;
	}
	function u() {
		let { history: e } = window;
		e.state && e.replaceState(G({}, e.state, { scroll: Kn() }), "");
	}
	function d() {
		for (let e of a) e();
		a = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", u);
	}
	return window.addEventListener("popstate", s), window.addEventListener("pagehide", u), {
		pauseListeners: c,
		listen: l,
		destroy: d
	};
}
function ur(e, t, n, r = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: null
	};
}
function dr(e) {
	let { history: t, location: n } = window, r = { value: cr(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : sr() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			console.error(e), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, G({}, t.state, ur(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = G({}, i.value, t.state, {
			forward: e,
			scroll: Kn()
		});
		a(o.current, o, !0), a(e, G({}, ur(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function fr(e) {
	e = Hn(e);
	let t = dr(e), n = lr(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = G({
		location: "",
		base: e,
		go: r,
		createHref: Wn.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function pr(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), fr(e);
}
var mr = {
	type: 0,
	value: ""
}, hr = /[a-zA-Z0-9_]/;
function gr(e) {
	if (!e) return [[]];
	if (e === "/") return [[mr]];
	if (!Pe(e)) throw Error(`Invalid path "${e}"`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = 0, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === 0 ? a.push({
			type: 0,
			value: l
		}) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: 1,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) switch (c = e[s++], n) {
		case 0:
			c === "\\" ? (r = n, n = 4) : c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = 1) : f();
			break;
		case 4:
			f(), n = r;
			break;
		case 1:
			c === "(" ? n = 2 : hr.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case 2:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
			break;
		case 3:
			d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var _r = "[^/]+?", vr = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, yr = /[.+*?^${}()[\]/\\]/g;
function br(e, t) {
	let n = G({}, vr, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(yr, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || _r;
				if (u !== _r) {
					s += 10;
					try {
						RegExp(`(${u})`);
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += 20, c && (s += -8), n && (s += -20), u === ".*" && (s += -50);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += .7000000000000001;
	}
	n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
	let o = new RegExp(i, n.sensitive ? "" : "i");
	function s(e) {
		let t = e.match(o), n = {};
		if (!t) return null;
		for (let e = 1; e < t.length; e++) {
			let r = t[e] || "", i = a[e - 1];
			n[i.name] = r && i.repeatable ? r.split("/") : r;
		}
		return n;
	}
	function c(t) {
		let n = "", r = !1;
		for (let i of e) {
			(!r || !n.endsWith("/")) && (n += "/"), r = !1;
			for (let e of i) if (e.type === 0) n += e.value;
			else if (e.type === 1) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (ve(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = ve(c) ? c.join("/") : c;
				if (!l) {
					if (s) i.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0);
					else throw Error(`Missing required param "${a}"`);
				}
				n += l;
			}
		}
		return n || "/";
	}
	return {
		re: o,
		score: r,
		keys: a,
		parse: s,
		stringify: c
	};
}
function xr(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Sr(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = xr(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (Cr(r)) return 1;
		if (Cr(i)) return -1;
	}
	return i.length - r.length;
}
function Cr(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var wr = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function Tr(e, t, n) {
	let r = br(gr(e.path), n), i = G(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function Er(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = Xe(wr, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = Or(e);
		s.aliasOf = r && r.record;
		let l = Xe(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(Or(G({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let d, f;
		for (let t of u) {
			let { path: u } = t;
			if (n && !Pe(u)) {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (d = Tr(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !Ar(d) && o(e.name)), Pr(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Ce;
	}
	function o(e) {
		if ($n(e)) {
			let t = r.get(e);
			t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o));
		} else {
			let t = n.indexOf(e);
			t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o));
		}
	}
	function s() {
		return n;
	}
	function c(e) {
		let t = Mr(e, n);
		n.splice(t, 0, e), e.record.name && !Ar(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw Ge(1, { location: e });
			s = i.record.name, a = G(Dr(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && Dr(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw Ge(1, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = G({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: jr(c)
		};
	}
	e.forEach((e) => a(e));
	function u() {
		n.length = 0, r.clear();
	}
	return {
		addRoute: a,
		resolve: l,
		removeRoute: o,
		clearRoutes: u,
		getRoutes: s,
		getRecordMatcher: i
	};
}
function Dr(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function Or(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: kr(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function kr(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function Ar(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function jr(e) {
	return e.reduce((e, t) => G(e, t.meta), {});
}
function Mr(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		Sr(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = Nr(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function Nr(e) {
	let t = e;
	for (; t = t.parent;) if (Pr(t) && Sr(e, t) === 0) return t;
}
function Pr({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Fr(e) {
	let t = ke(Ue), n = ke(De), r = W(() => {
		let n = U(e.to);
		return t.resolve(n);
	}), i = W(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(In.bind(null, i));
		if (o > -1) return o;
		let s = Br(e[t - 2]);
		return t > 1 && Br(i) === s && a[a.length - 1].path !== s ? a.findIndex(In.bind(null, e[t - 2])) : o;
	}), a = W(() => i.value > -1 && zr(n.params, r.value.params)), o = W(() => i.value > -1 && i.value === n.matched.length - 1 && Ln(n.params, r.value.params));
	function s(n = {}) {
		if (Rr(n)) {
			let n = t[U(e.replace) ? "replace" : "push"](U(e.to)).catch(Ce);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	return {
		route: r,
		href: W(() => r.value.href),
		isActive: a,
		isExactActive: o,
		navigate: s
	};
}
function Ir(e) {
	return e.length === 1 ? e[0] : e;
}
var Lr = /* @__PURE__ */ B({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: !0
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink: Fr,
	setup(e, { slots: t }) {
		let n = s(Fr(e)), { options: r } = ke(Ue), i = W(() => ({
			[Vr(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Vr(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && Ir(t.default(n));
			return e.custom ? r : Le("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function Rr(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function zr(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (ve(r)) {
			if (!ve(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
		} else if (r !== i) return !1;
	}
	return !0;
}
function Br(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Vr = (e, t, n) => e ?? t ?? n, Hr = /*#__PURE__*/ B({
	name: "RouterView",
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(e, { attrs: t, slots: n }) {
		let r = ke(Re), i = W(() => e.route || r.value), a = ke(he, 0), o = W(() => {
			let e = U(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = W(() => i.value.matched[o.value]);
		ie(he, W(() => o.value + 1)), ie(Ie, s), ie(Re, i);
		let c = X();
		return M(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !In(t, i) || !r) && (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return Ur(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, f = Le(l, G({}, d, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return Ur(n.default, {
				Component: f,
				route: r
			}) || f;
		};
	}
});
function Ur(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Wr = Hr;
function Gr(e) {
	let t = Er(e.routes, e), n = e.parseQuery || er, r = e.stringifyQuery || tr, i = e.history, a = rr(), o = rr(), s = rr(), c = Ne(Vn), l = Ne(0), u = Vn;
	cn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let d = Ye.bind(null, (e) => "" + e), f = Ye.bind(null, On), p = Ye.bind(null, kn);
	function m(e, n) {
		let r, i;
		$n(e) ? (r = t.getRecordMatcher(e), i = n) : i = e;
		let a = t.addRoute(i, r);
		return l.value++, () => {
			a(), l.value++;
		};
	}
	function h(e) {
		let n = t.getRecordMatcher(e);
		n && (t.removeRoute(n), l.value++);
	}
	function g() {
		t.clearRoutes(), l.value++;
	}
	function _() {
		return t.getRoutes().map((e) => e.record);
	}
	function ee(e) {
		return !!t.getRecordMatcher(e);
	}
	function v(e, a) {
		if (l.value, typeof e == "string") {
			a ||= e.startsWith("/") ? Vn : c.value;
			let r = Mn(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return G(r, o, {
				params: p(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		a = G({}, a || (e.path != null && e.path.startsWith("/") && !("name" in e && e.name) ? Vn : c.value));
		let o;
		if (e.path != null) o = G({}, e, { path: Mn(n, e.path, a.path).path });
		else {
			let t = G({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = G({}, e, { params: f(t) }), a.params = f(a.params);
		}
		let s = t.resolve(o, a), u = e.hash || "";
		s.params = d(p(s.params));
		let m = Nn(r, G({}, e, {
			hash: wn(u),
			path: s.path
		})), h = i.createHref(m);
		return G({
			fullPath: m,
			hash: u,
			query: r === tr ? nr(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: h
		});
	}
	function y(e) {
		return typeof e == "string" ? Mn(n, e, c.value.path) : G({}, e);
	}
	function te(e, t) {
		if (u !== e) return Ge(8, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return C(e);
	}
	function x(e) {
		return b(G(y(e), { replace: !0 }));
	}
	function S(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = y(i) : { path: i }, i.params = {}), G({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function C(e, t) {
		let n = u = v(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, l = S(n, i);
		if (l) return C(G(y(l), {
			state: typeof l == "object" ? G({}, a, l.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && Fn(r, i, n) && (f = Ge(16, {
			to: d,
			from: i
		}), j(i, i, !0, !1)), (f ? Promise.resolve(f) : T(d, i)).catch((e) => qe(e) ? qe(e, 2) ? e : A(e) : se(e, d, i)).then((e) => {
			if (e) {
				if (qe(e, 2)) return C(G({ replace: s }, y(e.to), {
					state: typeof e.to == "object" ? G({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = E(d, i, !0, s, a);
			return re(d, i, e), e;
		});
	}
	function ne(e, t) {
		let n = te(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function w(e) {
		let t = N.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function T(e, t) {
		let n, [r, i, s] = or(e, t);
		n = ar(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(ir(r, e, t));
		});
		let c = ne.bind(null, e, t);
		return n.push(c), le(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(ir(r, e, t));
			return n.push(c), le(n);
		}).then(() => {
			n = ar(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(ir(r, e, t));
			});
			return n.push(c), le(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (ve(r.beforeEnter)) for (let i of r.beforeEnter) n.push(ir(i, e, t));
				else n.push(ir(r.beforeEnter, e, t));
			}
			return n.push(c), le(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = ar(s, "beforeRouteEnter", e, t, w), n.push(c), le(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(ir(r, e, t));
			return n.push(c), le(n);
		}).catch((e) => qe(e, 8) ? e : Promise.reject(e));
	}
	function re(e, t, n) {
		s.list().forEach((r) => w(() => r(e, t, n)));
	}
	function E(e, t, n, r, a) {
		let o = te(e, t);
		if (o) return o;
		let s = t === Vn, l = cn ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, G({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, j(e, t, n, s), A();
	}
	let ie;
	function ae() {
		ie ||= i.listen((e, t, n) => {
			if (!P.listening) return;
			let r = v(e), a = S(r, P.currentRoute.value);
			if (a) {
				C(G(a, {
					replace: !0,
					force: !0
				}), r).catch(Ce);
				return;
			}
			u = r;
			let o = c.value;
			cn && n.delta && Xn(Jn(o.fullPath, n.delta)), T(r, o).catch((e) => qe(e, 12) ? e : qe(e, 2) ? (C(G(y(e.to), { force: !0 }), r).then((e) => {
				qe(e, 20) && !n.delta && n.type === "pop" && i.go(-1, !1);
			}).catch(Ce), Promise.reject()) : (n.delta && i.go(-n.delta, !1), se(e, r, o))).then((e) => {
				e ||= E(r, o, !1), e && (n.delta && !qe(e, 8) ? i.go(-n.delta, !1) : n.type === "pop" && qe(e, 20) && i.go(-1, !1)), re(r, o, e);
			}).catch(Ce);
		});
	}
	let D = rr(), oe = rr(), O;
	function se(e, t, n) {
		A(e);
		let r = oe.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function k() {
		return O && c.value !== Vn ? Promise.resolve() : new Promise((e, t) => {
			D.add([e, t]);
		});
	}
	function A(e) {
		return O || (O = !e, ae(), D.list().forEach(([t, n]) => e ? n(e) : t()), D.reset()), e;
	}
	function j(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!cn || !a) return Promise.resolve();
		let o = !r && Zn(Jn(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return et().then(() => a(t, n, o)).then((e) => t === c.value && e && qn(e)).catch((e) => t === c.value && se(e, t, n));
	}
	let ce = (e) => i.go(e), M, N = /* @__PURE__ */ new Set(), P = {
		currentRoute: c,
		listening: !0,
		addRoute: m,
		removeRoute: h,
		clearRoutes: g,
		hasRoute: ee,
		getRoutes: _,
		resolve: v,
		options: e,
		push: b,
		replace: x,
		go: ce,
		back: () => ce(-1),
		forward: () => ce(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: oe.add,
		isReady: k,
		install(e) {
			e.component("RouterLink", Lr), e.component("RouterView", Wr), e.config.globalProperties.$router = P, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => U(c)
			}), cn && !M && c.value === Vn && (M = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in Vn) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Ue, P), e.provide(De, ze(t)), e.provide(Re, c);
			let n = e.unmount;
			N.add(e), e.unmount = function() {
				N.delete(e), N.size < 1 && (u = Vn, ie && ie(), ie = null, c.value = Vn, M = !1, O = !1), n();
			};
		}
	};
	function le(e) {
		return e.reduce((e, t) => e.then(() => w(t)), Promise.resolve());
	}
	return P;
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/constants2.mjs
var Kr = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), qr = /* @__PURE__ */ Symbol.for("NcContent:selector");
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcContent.mjs
h(ce);
var Jr = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM140 44C132.268 44 126 50.268 126 58V292C126 299.732 132.268 306 140 306H372C379.732 306 386 299.732 386 292V58C386 50.268 379.732 44 372 44H140Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", Yr = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM112 44C119.732 44 126 50.268 126 58V292C126 299.732 119.732 306 112 306H20C12.268 306 6 299.732 6 292V58C6 50.268 12.268 44 20 44H112Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", Xr = { class: "vue-skip-actions__container" }, Zr = { class: "vue-skip-actions__headline" }, Qr = { class: "vue-skip-actions__buttons" }, $r = /* @__PURE__ */ D(/* @__PURE__ */ B({
	__name: "NcContent",
	props: { appName: {} },
	setup(e) {
		let t = e;
		ie(Kr, l), ie(qr, "#content-vue"), ie("appName", W(() => t.appName));
		let n = ut(), i = X(!1), a = X(), o = W(() => a.value === "navigation" ? Yr : Jr);
		ye(() => {
			let e = document.getElementById("skip-actions");
			e && (e.innerHTML = "", e.classList.add("vue-skip-actions"));
		});
		function s() {
			r("toggle-navigation", { open: !0 }), et(() => {
				window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
			});
		}
		function l(e) {
			i.value = e, a.value ||= "navigation";
		}
		return (t, r) => (g(), K("div", {
			id: "content-vue",
			class: Z(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": U(we) }]])
		}, [(g(), V(c, { to: "#skip-actions" }, [Y("div", Xr, [
			Y("div", Zr, q(U(m)("Keyboard navigation help")), 1),
			Y("div", Qr, [P(H(L, {
				href: "#app-navigation-vue",
				variant: "tertiary",
				onClick: F(s, ["prevent"]),
				onFocusin: r[0] ||= (e) => a.value = "navigation",
				onMouseover: r[1] ||= (e) => a.value = "navigation"
			}, {
				default: j(() => [z(q(U(m)("Skip to app navigation")), 1)]),
				_: 1
			}, 512), [[S, i.value]]), H(L, {
				href: "#app-content-vue",
				variant: "tertiary",
				onFocusin: r[2] ||= (e) => a.value = "content",
				onMouseover: r[3] ||= (e) => a.value = "content"
			}, {
				default: j(() => [z(q(U(m)("Skip to main content")), 1)]),
				_: 1
			})]),
			P(H(le, {
				class: "vue-skip-actions__image",
				svg: o.value,
				size: "auto"
			}, null, 8, ["svg"]), [[S, !U(n)]])
		])])), Fe(t.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-d13dcb98"]]), ei = { name: "NcAppNavigationList" }, ti = { class: "app-navigation-list" };
function ni(e, t, n, r, i, a) {
	return g(), K("ul", ti, [Fe(e.$slots, "default", {}, void 0, !0)]);
}
var ri = /* @__PURE__ */ D(ei, [["render", ni], ["__scopeId", "data-v-d72957ed"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcAppNavigation.mjs
h(_);
var ii = { class: "app-navigation-toggle-wrapper" }, ai = /* @__PURE__ */ D(/* @__PURE__ */ B({
	__name: "NcAppNavigationToggle",
	props: {
		open: {
			type: Boolean,
			required: !0
		},
		openModifiers: {}
	},
	emits: ["update:open"],
	setup(e) {
		let t = w(e, "open"), n = W(() => t.value ? m("Close navigation") : m("Open navigation"));
		return (e, r) => (g(), K("div", ii, [H(U(L), {
			class: "app-navigation-toggle",
			"aria-controls": "app-navigation-vue",
			"aria-expanded": t.value ? "true" : "false",
			"aria-label": n.value,
			title: n.value,
			variant: "tertiary",
			onClick: r[0] ||= (e) => t.value = !t.value
		}, {
			icon: j(() => [H(le, {
				path: U(pe),
				directional: ""
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-expanded",
			"aria-label",
			"title"
		])]));
	}
}), [["__scopeId", "data-v-e8177cc7"]]), oi = [
	"aria-hidden",
	"aria-label",
	"aria-labelledby",
	"inert"
], si = { class: "app-navigation__search" }, ci = /* @__PURE__ */ D(/* @__PURE__ */ B({
	__name: "NcAppNavigation",
	props: {
		ariaLabel: {},
		ariaLabelledby: {}
	},
	setup(e) {
		let n = e, i, a = ke(Kr, () => d("NcAppNavigation is not mounted inside NcContent, this is probably an error."), !1), s = nt("appNavigationContainer"), c = ut(), l = X(!c.value), u = W(() => c.value && l.value);
		v(() => {
			!n.ariaLabel && !n.ariaLabelledby && d("NcAppNavigation requires either `ariaLabel` or `ariaLabelledby` to be set for accessibility.");
		}), M(c, (e) => {
			l.value = !e, r("navigation-toggled", { open: l.value });
		}), M(u, () => {
			h();
		}), p(() => {
			a(!0), o("toggle-navigation", m), r("navigation-toggled", { open: l.value }), i = rt(s.value, {
				allowOutsideClick: !0,
				clickOutsideDeactivates: () => (c.value && (i.deactivate({ returnFocus: !1 }), f(!1)), !1),
				fallbackFocus: s.value,
				trapStack: it(),
				escapeDeactivates: !1
			}), h();
		}), Qe(() => {
			a(!1), t("toggle-navigation", m), i.deactivate();
		});
		function f(e) {
			if (l.value === e) {
				r("navigation-toggled", { open: l.value });
				return;
			}
			l.value = e === void 0 ? !l.value : e;
			let t = getComputedStyle(document.body), n = parseInt(t.getPropertyValue("--animation-slow")) || 200;
			setTimeout(() => {
				r("navigation-toggled", { open: l.value });
			}, 1.5 * n);
		}
		function m({ open: e }) {
			return f(e);
		}
		function h() {
			u.value ? i.activate() : i.deactivate();
		}
		function _() {
			c.value && f(!1);
		}
		return (t, n) => (g(), K("div", {
			ref: "appNavigationContainer",
			class: Z(["app-navigation", {
				"app-navigation--closed": !l.value,
				"app-navigation--legacy": U(we)
			}])
		}, [Y("nav", {
			id: "app-navigation-vue",
			"aria-hidden": l.value ? "false" : "true",
			"aria-label": e.ariaLabel || void 0,
			"aria-labelledby": e.ariaLabelledby || void 0,
			class: "app-navigation__content",
			inert: !l.value || void 0,
			onKeydown: de(_, ["esc"])
		}, [
			Y("div", si, [Fe(t.$slots, "search", {}, void 0, !0)]),
			Y("div", { class: Z(["app-navigation__body", { "app-navigation__body--no-list": !t.$slots.list }]) }, [Fe(t.$slots, "default", {}, void 0, !0)], 2),
			t.$slots.list ? (g(), V(ri, {
				key: 0,
				class: "app-navigation__list"
			}, {
				default: j(() => [Fe(t.$slots, "list", {}, void 0, !0)]),
				_: 3
			})) : R("", !0),
			Fe(t.$slots, "footer", {}, void 0, !0)
		], 40, oi), H(ai, {
			open: l.value,
			"onUpdate:open": f
		}, null, 8, ["open"])], 2));
	}
}), [["__scopeId", "data-v-ec9c3f18"]]), li = {
	name: "ChevronUpIcon",
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
}, ui = ["aria-hidden", "aria-label"], di = [
	"fill",
	"width",
	"height"
], fi = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, pi = { key: 0 };
function mi(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon chevron-up-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", fi, [n.title ? (g(), K("title", pi, q(n.title), 1)) : R("", !0)])], 8, di))], 16, ui);
}
var hi = /* @__PURE__ */ D(li, [["render", mi]]), gi = {
	name: "ArrowRightIcon",
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
}, _i = ["aria-hidden", "aria-label"], vi = [
	"fill",
	"width",
	"height"
], yi = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, bi = { key: 0 };
function xi(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon arrow-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", yi, [n.title ? (g(), K("title", bi, q(n.title), 1)) : R("", !0)])], 8, vi))], 16, _i);
}
var Si = /* @__PURE__ */ D(gi, [["render", xi]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcInputConfirmCancel.mjs
h(l);
var Ci = {
	name: "NcInputConfirmCancel",
	components: {
		IconArrowRight: Si,
		IconClose: yt,
		NcButton: L
	},
	props: {
		primary: {
			default: !1,
			type: Boolean
		},
		placeholder: {
			default: "",
			type: String
		},
		modelValue: {
			default: "",
			type: String
		}
	},
	emits: [
		"cancel",
		"confirm",
		"update:modelValue"
	],
	setup() {
		return { isLegacy34: we };
	},
	data() {
		return {
			labelConfirm: m("Confirm changes"),
			labelCancel: m("Cancel changes")
		};
	},
	computed: { valueModel: {
		get() {
			return this.modelValue;
		},
		set(e) {
			this.$emit("update:modelValue", e);
		}
	} },
	methods: {
		confirm() {
			this.$emit("confirm");
		},
		cancel() {
			this.$emit("cancel");
		},
		focusInput() {
			this.$refs.input.focus();
		}
	}
}, wi = ["placeholder"];
function Ti(e, t, n, r, i, a) {
	let o = T("IconArrowRight"), s = T("NcButton"), c = T("IconClose");
	return g(), K("div", { class: Z(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": r.isLegacy34 }]) }, [Y("form", {
		onSubmit: t[1] ||= F((...e) => a.confirm && a.confirm(...e), ["prevent"]),
		onKeydown: t[2] ||= de(F((...e) => a.cancel && a.cancel(...e), [
			"exact",
			"stop",
			"prevent"
		]), ["esc"]),
		onClick: t[3] ||= F(() => {}, ["stop", "prevent"])
	}, [
		P(Y("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.valueModel = e,
			type: "text",
			class: "app-navigation-input-confirm__input",
			placeholder: n.placeholder
		}, null, 8, wi), [[J, a.valueModel]]),
		H(s, {
			"aria-label": i.labelConfirm,
			type: "submit",
			variant: "primary",
			onClick: F(a.confirm, ["stop", "prevent"])
		}, {
			icon: j(() => [H(o, { size: 20 })]),
			_: 1
		}, 8, ["aria-label", "onClick"]),
		H(s, {
			"aria-label": i.labelCancel,
			type: "reset",
			variant: n.primary ? "primary" : "tertiary",
			onClick: F(a.cancel, ["stop", "prevent"])
		}, {
			icon: j(() => [H(c, { size: 20 })]),
			_: 1
		}, 8, [
			"aria-label",
			"variant",
			"onClick"
		])
	], 32)], 2);
}
var Ei = /* @__PURE__ */ D(Ci, [["render", Ti], ["__scopeId", "data-v-6926a0b8"]]), Di = B({
	name: "NcVNodes",
	props: { vnodes: {
		type: [Array, Object],
		default: null
	} },
	render() {
		return this.vnodes || this.$slots?.default?.({});
	}
}), Oi = {
	name: "PencilIcon",
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
}, ki = ["aria-hidden", "aria-label"], Ai = [
	"fill",
	"width",
	"height"
], ji = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, Mi = { key: 0 };
function Ni(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon pencil-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", ji, [n.title ? (g(), K("title", Mi, q(n.title), 1)) : R("", !0)])], 8, Ai))], 16, ki);
}
var Pi = /* @__PURE__ */ D(Oi, [["render", Ni]]), Fi = {
	name: "UndoIcon",
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
}, Ii = ["aria-hidden", "aria-label"], Li = [
	"fill",
	"width",
	"height"
], Ri = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, zi = { key: 0 };
function Bi(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon undo-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ri, [n.title ? (g(), K("title", zi, q(n.title), 1)) : R("", !0)])], 8, Li))], 16, Ii);
}
var Vi = /* @__PURE__ */ D(Fi, [["render", Bi]]);
h(y);
var Hi = {
	name: "NcAppNavigationIconCollapsible",
	components: {
		NcButton: L,
		ChevronDown: bt,
		ChevronUp: hi
	},
	props: {
		open: {
			type: Boolean,
			required: !0
		},
		active: {
			type: Boolean,
			required: !0
		}
	},
	emits: ["click"],
	setup() {
		return { isLegacy34: we };
	},
	computed: { labelButton() {
		return this.open ? m("Collapse menu") : m("Open menu");
	} },
	methods: { onClick(e) {
		this.$emit("click", e);
	} }
};
function Ui(e, t, n, r, i, a) {
	let o = T("ChevronUp"), s = T("ChevronDown"), c = T("NcButton");
	return g(), V(c, {
		class: Z(["icon-collapse", {
			"icon-collapse--active": n.active,
			"icon-collapse--open": n.open
		}]),
		"aria-label": a.labelButton,
		variant: n.active && r.isLegacy34 ? "tertiary-on-primary" : "tertiary",
		onClick: a.onClick
	}, {
		icon: j(() => [n.open ? (g(), V(o, {
			key: 0,
			size: 20
		})) : (g(), V(s, {
			key: 1,
			size: 20
		}))]),
		_: 1
	}, 8, [
		"class",
		"aria-label",
		"variant",
		"onClick"
	]);
}
var Wi = /* @__PURE__ */ D(Hi, [["render", Ui], ["__scopeId", "data-v-cfbd3794"]]);
h(ne, b);
var Gi = {
	name: "NcAppNavigationItem",
	components: {
		NcActions: ft,
		NcActionButton: Tt,
		NcAppNavigationIconCollapsible: Wi,
		NcInputConfirmCancel: Ei,
		NcLoadingIcon: Dt,
		NcVNodes: Di,
		Pencil: Pi,
		Undo: Vi
	},
	props: {
		active: {
			type: Boolean,
			default: !1
		},
		name: {
			type: String,
			required: !0
		},
		title: {
			type: String,
			default: null
		},
		id: {
			type: String,
			default: () => Je(),
			validator: (e) => e.trim() !== ""
		},
		icon: {
			type: String,
			default: ""
		},
		loading: {
			type: Boolean,
			default: !1
		},
		to: {
			type: [String, Object],
			default: null
		},
		href: {
			type: String,
			default: null
		},
		allowCollapse: {
			type: Boolean,
			default: !1
		},
		editable: {
			type: Boolean,
			default: !1
		},
		editLabel: {
			type: String,
			default: ""
		},
		editPlaceholder: {
			type: String,
			default: ""
		},
		pinned: {
			type: Boolean,
			default: !1
		},
		undo: {
			type: Boolean,
			default: !1
		},
		open: {
			type: Boolean,
			default: !1
		},
		menuOpen: {
			type: Boolean,
			default: !1
		},
		forceMenu: {
			type: Boolean,
			default: !1
		},
		menuIcon: {
			type: String,
			default: void 0
		},
		menuPlacement: {
			type: String,
			default: "bottom"
		},
		ariaDescription: {
			type: String,
			default: null
		},
		forceDisplayActions: {
			type: Boolean,
			default: !1
		},
		inlineActions: {
			type: Number,
			default: 0
		}
	},
	emits: [
		"update:menuOpen",
		"update:open",
		"update:name",
		"click",
		"undo"
	],
	setup() {
		return {
			isMobile: ut(),
			isLegacy34: we
		};
	},
	data() {
		return {
			actionsBoundariesElement: void 0,
			editingValue: "",
			opened: this.open,
			editingActive: !1,
			menuOpenLocalValue: !1,
			focused: !1
		};
	},
	computed: {
		isRouterLink() {
			return this.to && !this.href;
		},
		canHaveChildren() {
			return this.$parent.$options._componentTag !== "AppNavigationItem";
		},
		editButtonAriaLabel() {
			return this.editLabel ? this.editLabel : m("Edit item");
		},
		undoButtonAriaLabel() {
			return m("Undo changes");
		}
	},
	watch: { open(e) {
		this.opened = e;
	} },
	mounted() {
		this.actionsBoundariesElement = document.querySelector("#content-vue") || void 0;
	},
	methods: {
		onMenuToggle(e) {
			this.$emit("update:menuOpen", e), this.menuOpenLocalValue = e;
		},
		toggleCollapse() {
			this.opened = !this.opened, this.$emit("update:open", this.opened);
		},
		onClick(e, t, n) {
			this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && r("toggle-navigation", { open: !1 }));
		},
		handleEdit() {
			this.editingValue = this.name, this.editingActive = !0, this.onMenuToggle(!1), this.$nextTick(() => {
				this.$refs.editingInput.focusInput();
			});
		},
		cancelEditing() {
			this.editingActive = !1;
		},
		handleEditingDone() {
			this.$emit("update:name", this.editingValue), this.editingValue = "", this.editingActive = !1;
		},
		handleUndo() {
			this.$emit("undo");
		},
		handleFocus() {
			this.focused = !0;
		},
		handleBlur() {
			this.focused = !1;
		},
		handleTab(e) {
			if (this.editingActive) return;
			let t = this.$el?.querySelector(".app-navigation-entry__utils");
			if (!t) return;
			let n = t.querySelector("button");
			this.focused && n && (e.preventDefault(), n.focus(), this.focused = !1);
		},
		isExternal(e) {
			return e && e.match(/[a-z]+:\/\//i);
		}
	}
}, Ki = ["id"], qi = [
	"aria-current",
	"aria-description",
	"aria-expanded",
	"href",
	"target",
	"title",
	"onClick"
], Ji = {
	key: 0,
	class: "editingContainer"
}, Yi = {
	key: 1,
	class: "app-navigation-entry__deleted"
}, Xi = { class: "app-navigation-entry__deleted-description" }, Zi = {
	key: 0,
	class: "app-navigation-entry__counter-wrapper"
}, Qi = {
	key: 0,
	class: "app-navigation-entry__children"
};
function $i(e, t, n, r, i, a) {
	let o = T("NcLoadingIcon"), s = T("NcInputConfirmCancel"), c = T("Pencil"), l = T("NcActionButton"), u = T("Undo"), d = T("NcActions"), f = T("NcAppNavigationIconCollapsible");
	return g(), K("li", {
		id: n.id,
		class: Z([{
			"app-navigation-entry--opened": i.opened,
			"app-navigation-entry--pinned": n.pinned,
			"app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
		}, "app-navigation-entry-wrapper"])
	}, [(g(), V(ae(a.isRouterLink ? "router-link" : "NcVNodes"), Se(He({ ...a.isRouterLink && {
		custom: !0,
		to: n.to
	} })), {
		default: j(({ href: p, navigate: m, isActive: h }) => [Y("div", { class: Z(["app-navigation-entry", {
			"app-navigation-entry--editing": i.editingActive,
			"app-navigation-entry--deleted": n.undo,
			"app-navigation-entry--legacy": r.isLegacy34,
			active: n.to && h || n.active
		}]) }, [
			n.undo ? R("", !0) : (g(), K("a", {
				key: 0,
				class: "app-navigation-entry-link",
				"aria-current": n.active || n.to && h ? "page" : void 0,
				"aria-description": n.ariaDescription,
				"aria-expanded": e.$slots.default ? i.opened.toString() : void 0,
				href: n.href || p || "#",
				target: a.isExternal(n.href) ? "_blank" : void 0,
				title: n.title || n.name,
				onBlur: t[1] ||= (...e) => a.handleBlur && a.handleBlur(...e),
				onClick: (e) => a.onClick(e, m, p),
				onFocus: t[2] ||= (...e) => a.handleFocus && a.handleFocus(...e),
				onKeydown: t[3] ||= de(F((...e) => a.handleTab && a.handleTab(...e), ["exact"]), ["tab"])
			}, [
				Y("div", { class: Z(["app-navigation-entry-icon", { [n.icon]: n.icon }]) }, [n.loading ? (g(), V(o, { key: 0 })) : Fe(e.$slots, "icon", { active: n.active || n.to && h }, void 0, !0, 1)], 2),
				Y("span", { class: Z(["app-navigation-entry__name", { "hidden-visually": i.editingActive }]) }, q(n.name), 3),
				i.editingActive ? (g(), K("div", Ji, [H(s, {
					ref: "editingInput",
					modelValue: i.editingValue,
					"onUpdate:modelValue": t[0] ||= (e) => i.editingValue = e,
					placeholder: n.editPlaceholder === "" ? n.name : n.editPlaceholder,
					primary: n.to && h || n.active,
					onCancel: a.cancelEditing,
					onConfirm: a.handleEditingDone
				}, null, 8, [
					"modelValue",
					"placeholder",
					"primary",
					"onCancel",
					"onConfirm"
				])])) : R("", !0)
			], 40, qi)),
			n.undo ? (g(), K("div", Yi, [Y("div", Xi, q(n.name), 1)])) : R("", !0),
			(e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !i.editingActive ? (g(), K("div", {
				key: 2,
				class: Z(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || i.menuOpenLocalValue || n.menuOpen }])
			}, [e.$slots.counter ? (g(), K("div", Zi, [Fe(e.$slots, "counter", {}, void 0, !0)])) : R("", !0), e.$slots.actions || n.editable && !i.editingActive || n.undo ? (g(), V(d, {
				key: 1,
				ref: "actions",
				class: "app-navigation-entry__actions",
				container: "#app-navigation-vue",
				boundariesElement: i.actionsBoundariesElement,
				inline: n.inlineActions,
				placement: n.menuPlacement,
				open: n.menuOpen,
				forceMenu: n.forceMenu,
				defaultIcon: n.menuIcon,
				variant: "tertiary",
				"onUpdate:open": a.onMenuToggle
			}, {
				icon: j(() => [Fe(e.$slots, "menu-icon", {}, void 0, !0)]),
				default: j(() => [
					n.editable && !i.editingActive ? (g(), V(l, {
						key: 0,
						"aria-label": a.editButtonAriaLabel,
						onClick: a.handleEdit
					}, {
						icon: j(() => [H(c, { size: 20 })]),
						default: j(() => [z(" " + q(n.editLabel), 1)]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : R("", !0),
					n.undo ? (g(), V(l, {
						key: 1,
						"aria-label": a.undoButtonAriaLabel,
						onClick: a.handleUndo
					}, {
						icon: j(() => [H(u, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : R("", !0),
					Fe(e.$slots, "actions", {}, void 0, !0)
				]),
				_: 3
			}, 8, [
				"boundariesElement",
				"inline",
				"placement",
				"open",
				"forceMenu",
				"defaultIcon",
				"onUpdate:open"
			])) : R("", !0)], 2)) : R("", !0),
			n.allowCollapse && e.$slots.default ? (g(), V(f, {
				key: 3,
				active: n.to && h || n.active,
				open: i.opened,
				onClick: F(a.toggleCollapse, ["prevent", "stop"])
			}, null, 8, [
				"active",
				"open",
				"onClick"
			])) : R("", !0),
			Fe(e.$slots, "extra", {}, void 0, !0)
		], 2)]),
		_: 3
	}, 16)), a.canHaveChildren && e.$slots.default ? (g(), K("ul", Qi, [Fe(e.$slots, "default", {}, void 0, !0)])) : R("", !0)], 10, Ki);
}
var ea = /* @__PURE__ */ D(Gi, [["render", $i], ["__scopeId", "data-v-6cae7342"]]), ta = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "splitpanes",
	props: {
		horizontal: {
			type: Boolean,
			default: !1
		},
		pushOtherPanes: {
			type: Boolean,
			default: !0
		},
		maximizePanes: {
			type: Boolean,
			default: !0
		},
		rtl: {
			type: Boolean,
			default: !1
		},
		firstSplitter: {
			type: Boolean,
			default: !1
		},
		keyboardStep: {
			type: Number,
			default: 5
		}
	},
	emits: [
		"ready",
		"resize",
		"resized",
		"pane-click",
		"pane-maximize",
		"pane-add",
		"pane-remove",
		"splitter-click",
		"splitter-dblclick",
		"direction-changed"
	],
	setup(e, { emit: t }) {
		let n = t, r = e, i = te(), a = k(), o = X([]), s = W(() => o.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), c = W(() => o.value.length), l = X(null), u = X(!1), d = X({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), f = X({
			splitter: null,
			timeoutId: null
		}), m = W(() => ({
			[`splitpanes splitpanes--${r.horizontal ? "horizontal" : "vertical"}`]: !0,
			"splitpanes--dragging": d.value.dragging,
			"splitpanes--ready": u.value
		})), h = () => {
			document.addEventListener("mousemove", v, { passive: !1 }), document.addEventListener("mouseup", y), "ontouchstart" in window && (document.addEventListener("touchmove", v, { passive: !1 }), document.addEventListener("touchend", y));
		}, _ = () => {
			document.removeEventListener("mousemove", v, { passive: !1 }), document.removeEventListener("mouseup", y), "ontouchstart" in window && (document.removeEventListener("touchmove", v, { passive: !1 }), document.removeEventListener("touchend", y));
		}, ee = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: i } = n.getBoundingClientRect(), { clientX: a, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				d.value.cursorOffset = r.horizontal ? o - i : a - t;
			}
			h(), d.value.mouseDown = !0, d.value.activeSplitter = t, document.documentElement.style.cursor = r.horizontal ? "row-resize" : "col-resize";
		}, v = (e) => {
			d.value.mouseDown && (e.preventDefault(), d.value.dragging || (window.getSelection()?.removeAllRanges(), d.value.dragging = !0), requestAnimationFrame(() => {
				T(ne(e)), me("resize", { event: e }, !0);
			}));
		}, y = (e) => {
			d.value.dragging && (window.getSelection()?.removeAllRanges(), me("resized", { event: e }, !0)), d.value.mouseDown = !1, d.value.activeSplitter = null, setTimeout(() => {
				d.value.dragging = !1, _(), document.documentElement.style.cursor = "";
			}, 100);
		}, b = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), f.value.splitter === t ? (clearTimeout(f.value.timeoutId), f.value.timeoutId = null, x(e, t), f.value.splitter = null) : (f.value.splitter = t, f.value.timeoutId = setTimeout(() => f.value.splitter = null, 500))), d.value.dragging || me("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, x = (e, t) => {
			if (me("splitter-dblclick", {
				event: e,
				index: t
			}, !0), r.maximizePanes) {
				let n = 0;
				o.value = o.value.map((e, r) => (e.size = r === t ? e.max : e.min, r !== t && (n += e.min), e)), o.value[t].size -= n, me("pane-maximize", {
					event: e,
					index: t,
					pane: o.value[t]
				}), me("resized", {
					event: e,
					index: t
				}, !0);
			}
		}, S = (e, t) => {
			if (!r.keyboardStep) return;
			let n = r.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", i = r.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !i) return;
			e.preventDefault(), d.value.activeSplitter = t;
			let a = (n ? 1 : -1) * (r.rtl && !r.horizontal ? -1 : 1), s = D(t) + o.value[t].size;
			re(Math.min(Math.max(s + a * r.keyboardStep, 0), 100)), me("resize", { event: e }, !0), me("resized", { event: e }, !0), d.value.activeSplitter = null;
		}, C = (e, t) => {
			let n = s.value[t];
			n && me("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, ne = (e) => {
			let t = l.value.getBoundingClientRect(), { clientX: n, clientY: i } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (r.horizontal ? 0 : d.value.cursorOffset) - t.left,
				y: i - (r.horizontal ? d.value.cursorOffset : 0) - t.top
			};
		}, w = (e) => {
			e = e[r.horizontal ? "y" : "x"];
			let t = l.value[r.horizontal ? "clientHeight" : "clientWidth"];
			return r.rtl && !r.horizontal && (e = t - e), e * 100 / t;
		}, T = (e) => {
			re(w(e));
		}, re = (e) => {
			let t = d.value.activeSplitter;
			if (t === null || t >= o.value.length - 1) return;
			let n = {
				prevPanesSize: D(t),
				nextPanesSize: oe(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, i = 0 + (r.pushOtherPanes ? 0 : n.prevPanesSize), a = 100 - (r.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, a), i);
			let s = [t, t + 1], c = o.value[s[0]] || null, l = o.value[s[1]] || null, u = c !== null && c.max < 100 && e >= c.max + n.prevPanesSize, f = l !== null && l.max < 100 && e <= 100 - (l.max + oe(t + 1));
			if (u || f) {
				u ? (c.size = c.max, l.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - n.nextPanesSize, l.min), l.max)) : (c.size = Math.min(Math.max(100 - l.max - n.prevPanesSize - oe(t + 1), c.min), c.max), l.size = l.max);
				return;
			}
			if (r.pushOtherPanes) {
				let t = E(n, e);
				if (!t) return;
				({sums: n, panesToResize: s} = t), c = o.value[s[0]] || null, l = o.value[s[1]] || null;
			}
			c !== null && (c.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, c.min), c.max)), l !== null && (l.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, l.min), l.max));
		}, E = (e, t) => {
			let n = d.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + o.value[r[0]].min) {
				if (r[0] = O(n).index, e.prevReachedMinPanes = 0, r[0] < n && o.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), o.value[r[1]].size = 100 - e.prevReachedMinPanes - o.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = D(r[0]);
			}
			return t > 100 - e.nextPanesSize - o.value[r[1]].min && (r[1] = se(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && o.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : oe(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, o.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (o.value[r[0]].size = 100 - e.prevPanesSize - oe(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, D = (e) => o.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), oe = (e) => o.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), O = (e) => [...o.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, se = (e) => o.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, A = () => {
			let e = Array.from(l.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, j = (e, t, n = !1) => {
			let i = e - 1, a = document.createElement("div");
			a.classList.add("splitpanes__splitter"), n || (a.onmousedown = (e) => ee(e, i), typeof window < "u" && "ontouchstart" in window && (a.ontouchstart = (e) => ee(e, i)), a.onclick = (e) => b(e, i + 1), r.keyboardStep && (a.setAttribute("tabindex", "0"), a.setAttribute("role", "separator"), a.setAttribute("aria-orientation", r.horizontal ? "horizontal" : "vertical"), a.onkeydown = (e) => S(e, i))), a.ondblclick = (e) => x(e, i + 1), t.parentNode.insertBefore(a, t);
		}, ce = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, N = () => {
			let e = Array.from(l.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && ce(t);
			let t = 0;
			for (let n of e) n.className.includes("splitpanes__pane") && (!t && r.firstSplitter ? j(t, n, !0) : t && j(t, n), t++);
		}, P = ({ uid: e, ...t }) => {
			let n = s.value[e];
			for (let [e, r] of Object.entries(t)) n[e] = r;
		}, le = !1, ue = (e) => {
			let t = -1;
			Array.from(l.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), o.value.splice(t, 0, {
				...e,
				index: t
			}), o.value.forEach((e, t) => e.index = t), u.value && !le && (le = !0, et(() => {
				N(), I({ addedPane: o.value[t] }), me("pane-add", { pane: o.value[t] }), le = !1;
			}));
		}, F = (e) => {
			let t = o.value.findIndex((t) => t.id === e);
			o.value[t].el = null;
			let n = o.value.splice(t, 1)[0];
			o.value.forEach((e, t) => e.index = t), et(() => {
				N(), me("pane-remove", { pane: n }), I({ removedPane: {
					...n,
					index: t
				} });
			});
		}, I = (e = {}) => {
			!e.addedPane && !e.removedPane ? L() : o.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? fe(e) : de(), u.value && me("resized");
		}, de = () => {
			let e = 100 / c.value, t = 100, n = [], r = [];
			for (let i of o.value) i.size = Math.max(Math.min(e, i.max), i.min), t -= i.size, i.size >= i.max && n.push(i.id), i.size <= i.min && r.push(i.id);
			Math.abs(t) > .1 && pe(t, n, r);
		}, L = () => {
			let e = 100, t = [], n = [], r = 0;
			for (let i of o.value) e -= i.size, i.givenSize !== null && r++, i.size >= i.max && t.push(i.id), i.size <= i.min && n.push(i.id);
			let i = 100;
			if (e > .1) {
				for (let t of o.value) t.givenSize === null && (t.size = Math.max(Math.min(e / (c.value - r), t.max), t.min)), i -= t.size;
				i > .1 && pe(i, t, n);
			}
		}, fe = ({ addedPane: e, removedPane: t } = {}) => {
			let n = o.value.reduce((e, t) => e + (t.givenSize === null ? 0 : t.givenSize), 0), r = o.value.filter((e) => e.givenSize === null).length, i = r > 0 ? (100 - n) / r : 0, a = 0, s = [], c = [];
			for (let e of o.value) a -= e.size, e.size >= e.max && s.push(e.id), e.size <= e.min && c.push(e.id);
			if (!(Math.abs(a) < .1)) {
				a = 100;
				for (let e of o.value) e.givenSize === null && (e.size = Math.max(Math.min(i, e.max), e.min)), a -= e.size, e.size >= e.max && s.push(e.id), e.size <= e.min && c.push(e.id);
				Math.abs(a) > .1 && pe(a, s, c);
			}
		}, pe = (e, t, n) => {
			let r;
			r = e > 0 ? e / (c.value - t.length) : e / (c.value - n.length), o.value.forEach((i, a) => {
				if (e > 0 && !t.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				} else if (!n.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				}
			}), Math.abs(e) > .1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
		}, me = (e, t = void 0, i = !1) => {
			let a = t?.index ?? d.value.activeSplitter ?? null;
			n(e, {
				...t,
				...a !== null && { index: a },
				...i && a !== null && {
					prevPane: o.value[a - +!!r.firstSplitter],
					nextPane: o.value[a + +!r.firstSplitter]
				},
				panes: o.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		};
		M(() => r.firstSplitter, () => N()), M(() => r.horizontal, (e) => et(() => {
			n("direction-changed", {
				horizontal: e,
				panes: o.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), p(() => {
			A(), N(), I(), me("ready"), u.value = !0;
		}), $e(() => u.value = !1);
		let he = () => {
			let { class: e, ...t } = i;
			return Le("div", {
				ref: l,
				class: [m.value, e],
				...t
			}, a.default?.());
		};
		return ie("panes", o), ie("indexedPanes", s), ie("horizontal", W(() => r.horizontal)), ie("requestUpdate", P), ie("onPaneAdd", ue), ie("onPaneRemove", F), ie("onPaneClick", C), (e, t) => (g(), V(ae(he)));
	}
}), na = {
	__name: "pane",
	props: {
		size: { type: [Number, String] },
		minSize: {
			type: [Number, String],
			default: 0
		},
		maxSize: {
			type: [Number, String],
			default: 100
		}
	},
	setup(e) {
		let t = e, n = ke("requestUpdate"), r = ke("onPaneAdd"), i = ke("horizontal"), a = ke("onPaneRemove"), o = ke("onPaneClick"), s = Te()?.uid, c = ke("indexedPanes"), l = W(() => c.value[s]), u = X(null), d = W(() => {
			let e = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
			return Math.max(Math.min(e, m.value), f.value);
		}), f = W(() => {
			let e = parseFloat(t.minSize);
			return isNaN(e) ? 0 : e;
		}), m = W(() => {
			let e = parseFloat(t.maxSize);
			return isNaN(e) ? 100 : e;
		}), h = W(() => {
			let e = l.value?.size ?? (t.size === void 0 ? void 0 : d.value);
			return e === void 0 ? "" : `${i.value ? "height" : "width"}: ${e}%`;
		});
		return M(() => d.value, (e) => n({
			uid: s,
			size: e
		})), M(() => f.value, (e) => n({
			uid: s,
			min: e
		})), M(() => m.value, (e) => n({
			uid: s,
			max: e
		})), p(() => {
			r({
				id: s,
				el: u.value,
				min: f.value,
				max: m.value,
				givenSize: t.size === void 0 ? null : d.value,
				size: d.value
			});
		}), $e(() => a(s)), (e, t) => (g(), K("div", {
			ref_key: "paneEl",
			ref: u,
			class: "splitpanes__pane",
			onClick: t[0] ||= (t) => U(o)(t, e._.uid),
			style: Ee(h.value)
		}, [Fe(e.$slots, "default")], 4));
	}
};
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/appName.mjs
function ra(e) {
	let t = !1, n;
	return (...r) => (t || (t = !0, n = e(...r)), n);
}
var ia = "missing-app-name";
try {
	ia = "rechnungswerk";
} catch {
	a.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
var aa = ia;
function oa() {
	return ke("appName", aa);
}
var sa = ra(() => {
	let e = ct("core", "apps", []), t = oa();
	return e.find(({ id: e }) => e === t)?.name ?? t;
});
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcAppContent.mjs
h(se);
var ca = /* @__PURE__ */ D(/* @__PURE__ */ B({
	__name: "NcAppContentDetailsToggle",
	setup(e) {
		let t = ut();
		M(t, n), p(() => {
			n(t.value);
		}), $e(() => {
			t.value && n(!1);
		});
		function n(e = !0) {
			let t = document.querySelector(".app-navigation .app-navigation-toggle");
			t && (t.style.display = e ? "none" : "", e === !0 && r("toggle-navigation", { open: !1 }));
		}
		return (e, n) => (g(), V(U(L), {
			"aria-label": U(m)("Go back to the list"),
			class: Z(["app-details-toggle", { "app-details-toggle--mobile": U(t) }]),
			title: U(m)("Go back to the list"),
			variant: "tertiary"
		}, {
			icon: j(() => [H(U(le), {
				directional: "",
				path: U(Be)
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-label",
			"class",
			"title"
		]));
	}
}), [["__scopeId", "data-v-a28923a1"]]), la = {
	key: 0,
	class: "hidden-visually"
}, ua = { class: "app-content-wrapper__list" }, da = {
	key: 1,
	class: "app-content-wrapper"
}, fa = e("nextcloud").persist().build(), pa = ht().theming?.name ?? "Nextcloud", ma = /* @__PURE__ */ D(/* @__PURE__ */ B({
	__name: "NcAppContent",
	props: /* @__PURE__ */ me({
		disableSwipe: {
			type: Boolean,
			default: !1
		},
		listSize: { default: 20 },
		listMinWidth: { default: 15 },
		listMaxWidth: { default: 40 },
		paneConfigKey: { default: "" },
		layout: { default: "vertical-split" },
		pageHeading: { default: () => void 0 },
		pageTitle: { default: () => void 0 }
	}, {
		showDetails: {
			type: Boolean,
			default: !0
		},
		showDetailsModifiers: {}
	}),
	emits: /* @__PURE__ */ me(["resizeList", "update:showDetails"], ["update:showDetails"]),
	setup(e, { emit: t }) {
		let n = w(e, "showDetails"), i = t, o = oa(), s = sa(), c = ut(), l = mt(), u = dt(() => e.disableSwipe ? void 0 : l.value, { onSwipeEnd(e, t) {
			Math.abs(u.lengthX.value) > 70 && (u.coordsStart.x < 150 && t === "right" ? r("toggle-navigation", { open: !0 }) : u.coordsStart.x < 450 && t === "left" && r("toggle-navigation", { open: !1 }));
		} }), d = X(), f = W(() => e.paneConfigKey === "" ? `pane-list-size-${o}` : `pane-list-size-${e.paneConfigKey}`), m = W(() => ({
			list: {
				size: e.listSize,
				min: e.listMinWidth,
				max: e.listMaxWidth
			},
			details: {
				size: 100 - e.listSize,
				min: 100 - e.listMaxWidth,
				max: 100 - e.listMinWidth
			}
		})), h = W(() => d.value ? 100 - d.value : m.value.details.size), _ = W(() => {
			let t = /* @__PURE__ */ new Set();
			if (e.pageTitle) for (let n of e.pageTitle.split(" - ")) t.add(n);
			else if (e.pageHeading) {
				for (let n of e.pageHeading.split(" - ")) t.add(n);
				t.size > 0 && t.add(s);
			} else return null;
			return t.add(pa), [...t.values()].join(" - ");
		});
		M(_, () => {
			_.value !== null && (document.title = _.value);
		}, { immediate: !0 }), M(() => e.paneConfigKey, v, { immediate: !0 }), p(v);
		function ee(e) {
			let t = Math.trunc(e.panes[0].size);
			fa.setItem(f.value, JSON.stringify(t)), d.value = t, i("resizeList", { size: t }), a.debug("[NcAppContent] pane config", { listPaneSize: t });
		}
		function v() {
			let e = parseInt(fa.getItem(f.value) ?? "", 10);
			!isNaN(e) && e !== d.value && (a.debug("[NcAppContent] pane config", { listPaneSize: e }), d.value = e);
		}
		return (t, r) => (g(), K("main", {
			id: "app-content-vue",
			class: Z(["app-content no-snapper", { "app-content--has-list": !!t.$slots.list }])
		}, [
			e.pageHeading ? (g(), K("h1", la, q(e.pageHeading), 1)) : R("", !0),
			t.$slots.list ? (g(), K(O, { key: 1 }, [U(c) || e.layout === "no-split" ? (g(), K("div", {
				key: 0,
				class: Z(["app-content-wrapper app-content-wrapper--no-split", {
					"app-content-wrapper--show-details": n.value,
					"app-content-wrapper--show-list": !n.value,
					"app-content-wrapper--mobile": U(c)
				}])
			}, [
				n.value ? (g(), V(ca, {
					key: 0,
					onClick: r[0] ||= F((e) => n.value = !1, ["stop", "prevent"])
				})) : R("", !0),
				P(Y("div", ua, [Fe(t.$slots, "list", {}, void 0, !0)], 512), [[S, !n.value]]),
				n.value ? Fe(t.$slots, "default", {}, void 0, !0, 1) : R("", !0)
			], 2)) : e.layout === "vertical-split" || e.layout === "horizontal-split" ? (g(), K("div", da, [H(U(ta), {
				horizontal: e.layout === "horizontal-split",
				class: Z(["default-theme", {
					"splitpanes--horizontal": e.layout === "horizontal-split",
					"splitpanes--vertical": e.layout === "vertical-split"
				}]),
				rtl: U(at),
				onResized: ee
			}, {
				default: j(() => [H(U(na), {
					class: "splitpanes__pane-list",
					size: d.value || m.value.list.size,
					minSize: m.value.list.min,
					maxSize: m.value.list.max
				}, {
					default: j(() => [Fe(t.$slots, "list", {}, void 0, !0)]),
					_: 3
				}, 8, [
					"size",
					"minSize",
					"maxSize"
				]), H(U(na), {
					class: "splitpanes__pane-details",
					size: h.value,
					minSize: m.value.details.min,
					maxSize: m.value.details.max
				}, {
					default: j(() => [Fe(t.$slots, "default", {}, void 0, !0)]),
					_: 3
				}, 8, [
					"size",
					"minSize",
					"maxSize"
				])]),
				_: 3
			}, 8, [
				"horizontal",
				"class",
				"rtl"
			])])) : R("", !0)], 64)) : R("", !0),
			t.$slots.list ? R("", !0) : Fe(t.$slots, "default", {}, void 0, !0, 2)
		], 2));
	}
}), [["__scopeId", "data-v-5de09463"]]), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ha = {
	name: "FileDocumentIcon",
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
}, ga = ["aria-hidden", "aria-label"], _a = [
	"fill",
	"width",
	"height"
], va = { d: "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" }, ya = { key: 0 };
function ba(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-document-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", va, [n.title ? (g(), K("title", ya, q(n.title), 1)) : R("", !0)])], 8, _a))], 16, ga);
}
var xa = /*#__PURE__*/ $(ha, [["render", ba]]), Sa = {
	name: "FileDocumentOutlineIcon",
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
}, Ca = ["aria-hidden", "aria-label"], wa = [
	"fill",
	"width",
	"height"
], Ta = { d: "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" }, Ea = { key: 0 };
function Da(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-document-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ta, [n.title ? (g(), K("title", Ea, q(n.title), 1)) : R("", !0)])], 8, wa))], 16, Ca);
}
var Oa = /*#__PURE__*/ $(Sa, [["render", Da]]), ka = {
	name: "AccountGroupIcon",
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
}, Aa = ["aria-hidden", "aria-label"], ja = [
	"fill",
	"width",
	"height"
], Ma = { d: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" }, Na = { key: 0 };
function Pa(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon account-group-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ma, [n.title ? (g(), K("title", Na, q(n.title), 1)) : R("", !0)])], 8, ja))], 16, Aa);
}
var Fa = /*#__PURE__*/ $(ka, [["render", Pa]]), Ia = {
	name: "AccountIcon",
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
}, La = ["aria-hidden", "aria-label"], Ra = [
	"fill",
	"width",
	"height"
], za = { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" }, Ba = { key: 0 };
function Va(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon account-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", za, [n.title ? (g(), K("title", Ba, q(n.title), 1)) : R("", !0)])], 8, Ra))], 16, La);
}
var Ha = /*#__PURE__*/ $(Ia, [["render", Va]]), Ua = {
	name: "PackageVariantIcon",
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
}, Wa = ["aria-hidden", "aria-label"], Ga = [
	"fill",
	"width",
	"height"
], Ka = { d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" }, qa = { key: 0 };
function Ja(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon package-variant-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ka, [n.title ? (g(), K("title", qa, q(n.title), 1)) : R("", !0)])], 8, Ga))], 16, Wa);
}
var Ya = /*#__PURE__*/ $(Ua, [["render", Ja]]), Xa = {
	name: "TextBoxIcon",
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
}, Za = ["aria-hidden", "aria-label"], Qa = [
	"fill",
	"width",
	"height"
], $a = { d: "M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, eo = { key: 0 };
function to(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon text-box-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", $a, [n.title ? (g(), K("title", eo, q(n.title), 1)) : R("", !0)])], 8, Qa))], 16, Za);
}
var no = /*#__PURE__*/ $(Xa, [["render", to]]), ro = {
	name: "ChartBarIcon",
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
}, io = ["aria-hidden", "aria-label"], ao = [
	"fill",
	"width",
	"height"
], oo = { d: "M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" }, so = { key: 0 };
function co(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon chart-bar-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", oo, [n.title ? (g(), K("title", so, q(n.title), 1)) : R("", !0)])], 8, ao))], 16, io);
}
var lo = /*#__PURE__*/ $(ro, [["render", co]]), uo = {
	name: "CogIcon",
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
], mo = { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" }, ho = { key: 0 };
function go(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon cog-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", mo, [n.title ? (g(), K("title", ho, q(n.title), 1)) : R("", !0)])], 8, po))], 16, fo);
}
var _o = /*#__PURE__*/ $(uo, [["render", go]]), vo = {
	name: "LockIcon",
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
], xo = { d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" }, So = { key: 0 };
function Co(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon lock-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", xo, [n.title ? (g(), K("title", So, q(n.title), 1)) : R("", !0)])], 8, bo))], 16, yo);
}
var wo = /*#__PURE__*/ $(vo, [["render", Co]]), To = {
	name: "CounterIcon",
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
], Oo = { d: "M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z" }, ko = { key: 0 };
function Ao(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon counter-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Oo, [n.title ? (g(), K("title", ko, q(n.title), 1)) : R("", !0)])], 8, Do))], 16, Eo);
}
var jo = /*#__PURE__*/ $(To, [["render", Ao]]), Mo = {
	name: "EmailIcon",
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
], Fo = { d: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, Io = { key: 0 };
function Lo(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon email-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Fo, [n.title ? (g(), K("title", Io, q(n.title), 1)) : R("", !0)])], 8, Po))], 16, No);
}
var Ro = /*#__PURE__*/ $(Mo, [["render", Lo]]), zo = {
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
}, Bo = ["aria-hidden", "aria-label"], Vo = [
	"fill",
	"width",
	"height"
], Ho = { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" }, Uo = { key: 0 };
function Wo(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ho, [n.title ? (g(), K("title", Uo, q(n.title), 1)) : R("", !0)])], 8, Vo))], 16, Bo);
}
var Go = /*#__PURE__*/ $(zo, [["render", Wo]]), Ko = {
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
}, qo = ["aria-hidden", "aria-label"], Jo = [
	"fill",
	"width",
	"height"
], Yo = { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, Xo = { key: 0 };
function Zo(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon magnify-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Yo, [n.title ? (g(), K("title", Xo, q(n.title), 1)) : R("", !0)])], 8, Jo))], 16, qo);
}
var Qo = /*#__PURE__*/ $(Ko, [["render", Zo]]), $o = {
	name: "StarIcon",
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
}, es = ["aria-hidden", "aria-label"], ts = [
	"fill",
	"width",
	"height"
], ns = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, rs = { key: 0 };
function is(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon star-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", ns, [n.title ? (g(), K("title", rs, q(n.title), 1)) : R("", !0)])], 8, ts))], 16, es);
}
var as = /*#__PURE__*/ $($o, [["render", is]]), os = {
	name: "TranslateIcon",
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
}, ss = ["aria-hidden", "aria-label"], cs = [
	"fill",
	"width",
	"height"
], ls = { d: "M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" }, us = { key: 0 };
function ds(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon translate-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", ls, [n.title ? (g(), K("title", us, q(n.title), 1)) : R("", !0)])], 8, cs))], 16, ss);
}
var fs = /*#__PURE__*/ $(os, [["render", ds]]);
//#endregion
//#region src/api/client.ts
function ps(e) {
	return i(`/apps/rechnungswerk/api/v1${e}`);
}
function ms(e) {
	let t = e, n = t.response?.status ?? 0, r = t.response?.data?.error ?? t.message ?? "Unknown error", i = t.response?.data?.code;
	return i ? {
		status: n,
		message: r,
		code: i
	} : {
		status: n,
		message: r
	};
}
async function hs(e) {
	try {
		let { data: t } = await Ct.get(ps(e));
		return t;
	} catch (e) {
		throw ms(e);
	}
}
async function gs(e, t) {
	try {
		let { data: n } = await Ct.post(ps(e), t);
		return n;
	} catch (e) {
		throw ms(e);
	}
}
async function _s(e, t) {
	try {
		let { data: n } = await Ct.patch(ps(e), t);
		return n;
	} catch (e) {
		throw ms(e);
	}
}
async function vs(e, t) {
	try {
		let { data: n } = await Ct.put(ps(e), t);
		return n;
	} catch (e) {
		throw ms(e);
	}
}
async function ys(e) {
	try {
		let { data: t } = await Ct.delete(ps(e));
		return t;
	} catch (e) {
		throw ms(e);
	}
}
//#endregion
//#region src/api/whatsnew.ts
var bs = () => hs("/whatsnew"), xs = () => gs("/whatsnew/seen", {});
//#endregion
//#region src/utils/modalEsc.ts
function Ss(e, t) {
	e.target?.closest?.(".v-select.vs--open") || t();
}
//#endregion
//#region src/components/WhatsNewDialog.vue?vue&type=script&setup=true&lang.ts
var Cs = { class: "whatsnew" }, ws = { class: "whatsnew__version" }, Ts = { class: "whatsnew__icon" }, Es = { class: "whatsnew__body" }, Ds = { class: "whatsnew__entry-title" }, Os = {
	key: 0,
	class: "whatsnew__badge"
}, ks = { class: "whatsnew__entry-text" }, As = {
	key: 0,
	class: "whatsnew__where"
}, js = { key: 0 }, Ms = { class: "actions" }, Ns = "https://werkwolke.de", Ps = "whatsnew-title", Fs = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "WhatsNewDialog",
	setup(e) {
		let t = {
			"account-group": Fa,
			"chart-bar": lo,
			cog: _o,
			counter: jo,
			email: Ro,
			"file-document": xa,
			folder: Go,
			magnify: Qo,
			star: as,
			translate: fs
		}, n = X(!1), r = X(""), i = X([]), a = A("rechnungswerk", "Was ist neu in RechnungsWerk");
		function o(e) {
			return t[e] ?? as;
		}
		p(async () => {
			try {
				let e = await bs();
				e.entries.length > 0 && (r.value = e.version, i.value = e.entries, n.value = !0);
			} catch {}
		});
		async function s() {
			n.value = !1;
			try {
				await xs();
			} catch {}
		}
		return (e, t) => n.value ? (g(), V(U(lt), {
			key: 0,
			labelId: Ps,
			onKeydown: t[0] ||= de((e) => U(Ss)(e, s), ["esc"]),
			onClose: s
		}, {
			default: j(() => [Y("div", Cs, [
				Y("h2", { id: Ps }, q(U(a)), 1),
				Y("p", ws, q(U(A)("rechnungswerk", "Version {version}", { version: r.value })), 1),
				(g(!0), K(O, null, u(i.value, (e, t) => (g(), K("div", {
					key: t,
					class: "whatsnew__entry"
				}, [Y("div", Ts, [(g(), V(ae(o(e.icon)), { size: 22 }))]), Y("div", Es, [
					Y("h3", Ds, [z(q(e.title) + " ", 1), e.plus ? (g(), K("span", Os, "WerkPlus")) : R("", !0)]),
					Y("p", ks, q(e.text), 1),
					e.where ? (g(), K("p", As, [
						z(q(U(A)("rechnungswerk", "Zu finden unter")) + " ", 1),
						Y("b", null, q(e.where), 1),
						e.adminOnly ? (g(), K("span", js, q(" " + U(A)("rechnungswerk", "(nur für Administratoren)")), 1)) : R("", !0)
					])) : R("", !0),
					e.plus ? (g(), K("a", {
						key: 1,
						class: "whatsnew__link",
						href: Ns,
						target: "_blank",
						rel: "noreferrer noopener"
					}, q(U(A)("rechnungswerk", "Mehr zu WerkPlus")), 1)) : R("", !0)
				])]))), 128)),
				Y("div", Ms, [H(U(L), {
					variant: "primary",
					onClick: s
				}, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Alles klar")), 1)]),
					_: 1
				})])
			])]),
			_: 1
		})) : R("", !0);
	}
}), [["__scopeId", "data-v-b6c0c6dc"]]), Is = () => hs("/permission-info"), Ls = () => hs("/permissions"), Rs = (e) => vs("/permissions", e), zs = (e) => hs(`/principals/search?query=${encodeURIComponent(e)}`), Bs = sn("permissions", () => {
	let e = X(null), t = X(!1);
	async function n() {
		try {
			e.value = await Is();
		} catch {
			e.value = {
				isAdmin: !1,
				hasAccess: !1,
				canEdit: !1
			};
		} finally {
			t.value = !0;
		}
	}
	return {
		info: e,
		loaded: t,
		fetch: n
	};
}), Vs = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "App",
	setup(e) {
		let t = Bs(), n = W(() => t.info?.hasAccess ?? !1), r = W(() => t.info?.isAdmin ?? !1);
		return p(() => {
			t.fetch();
		}), (e, i) => {
			let a = T("router-view");
			return g(), V(U($r), { appName: "rechnungswerk" }, {
				default: j(() => [U(t).loaded ? n.value ? (g(), K(O, { key: 2 }, [
					H(U(ci), null, {
						footer: j(() => [H(U(ea), {
							name: U(A)("rechnungswerk", "Mein Kontakt"),
							to: { name: "my-contact" }
						}, {
							icon: j(() => [H(Ha, { size: 20 })]),
							_: 1
						}, 8, ["name"]), r.value ? (g(), V(U(ea), {
							key: 0,
							name: U(A)("rechnungswerk", "Einstellungen"),
							to: { name: "settings" }
						}, {
							icon: j(() => [H(_o, { size: 20 })]),
							_: 1
						}, 8, ["name"])) : R("", !0)]),
						default: j(() => [
							H(U(ea), {
								name: U(A)("rechnungswerk", "Rechnungen"),
								to: { name: "invoices" }
							}, {
								icon: j(() => [H(xa, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							H(U(ea), {
								name: U(A)("rechnungswerk", "Angebote"),
								to: { name: "quotes" }
							}, {
								icon: j(() => [H(Oa, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							H(U(ea), {
								name: U(A)("rechnungswerk", "Kunden"),
								to: { name: "customers" }
							}, {
								icon: j(() => [H(Fa, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							H(U(ea), {
								name: U(A)("rechnungswerk", "Produkte"),
								to: { name: "products" }
							}, {
								icon: j(() => [H(Ya, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							H(U(ea), {
								name: U(A)("rechnungswerk", "Textbausteine"),
								to: { name: "text-snippets" }
							}, {
								icon: j(() => [H(no, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							H(U(ea), {
								name: U(A)("rechnungswerk", "Berichte"),
								to: { name: "reports" }
							}, {
								icon: j(() => [H(lo, { size: 20 })]),
								_: 1
							}, 8, ["name"])
						]),
						_: 1
					}),
					H(U(ma), null, {
						default: j(() => [H(a)]),
						_: 1
					}),
					H(Fs)
				], 64)) : (g(), V(U(ma), { key: 1 }, {
					default: j(() => [H(U(St), {
						name: U(A)("rechnungswerk", "Kein Zugriff"),
						description: U(A)("rechnungswerk", "Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.")
					}, {
						icon: j(() => [H(wo, { size: 20 })]),
						_: 1
					}, 8, ["name", "description"])]),
					_: 1
				})) : (g(), V(U(ma), { key: 0 }, {
					default: j(() => [H(U(Dt), {
						class: "rw-app-loading",
						size: 44
					})]),
					_: 1
				}))]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-00d8a06e"]]), Hs = {
	name: "InformationOutlineIcon",
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
}, Us = ["aria-hidden", "aria-label"], Ws = [
	"fill",
	"width",
	"height"
], Gs = { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" }, Ks = { key: 0 };
function qs(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon information-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Gs, [n.title ? (g(), K("title", Ks, q(n.title), 1)) : R("", !0)])], 8, Ws))], 16, Us);
}
var Js = /*#__PURE__*/ $(Hs, [["render", qs]]), Ys = { class: "info-icon-wrapper" }, Xs = {
	class: "info-popup",
	tabindex: "0"
}, Zs = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "InfoIcon",
	setup(e) {
		return (e, t) => (g(), K("span", Ys, [H(U(st), {
			popupRole: "tooltip",
			noFocusTrap: ""
		}, {
			trigger: j(() => [H(Js, {
				class: "info-icon",
				size: 14,
				tabindex: "0"
			})]),
			default: j(() => [Y("div", Xs, [Fe(e.$slots, "default", {}, void 0, !0)])]),
			_: 3
		})]));
	}
}), [["__scopeId", "data-v-6c57a620"]]), Qs = {
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
}, $s = ["aria-hidden", "aria-label"], ec = [
	"fill",
	"width",
	"height"
], tc = { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, nc = { key: 0 };
function rc(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon plus-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", tc, [n.title ? (g(), K("title", nc, q(n.title), 1)) : R("", !0)])], 8, ec))], 16, $s);
}
var ic = /*#__PURE__*/ $(Qs, [["render", rc]]), ac = {
	name: "DownloadIcon",
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
}, oc = ["aria-hidden", "aria-label"], sc = [
	"fill",
	"width",
	"height"
], cc = { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" }, lc = { key: 0 };
function uc(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon download-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", cc, [n.title ? (g(), K("title", lc, q(n.title), 1)) : R("", !0)])], 8, sc))], 16, oc);
}
var dc = /*#__PURE__*/ $(ac, [["render", uc]]), fc = {
	name: "ContentCopyIcon",
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
}, pc = ["aria-hidden", "aria-label"], mc = [
	"fill",
	"width",
	"height"
], hc = { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }, gc = { key: 0 };
function _c(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon content-copy-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", hc, [n.title ? (g(), K("title", gc, q(n.title), 1)) : R("", !0)])], 8, mc))], 16, pc);
}
var vc = /*#__PURE__*/ $(fc, [["render", _c]]), yc = {
	name: "PencilOutlineIcon",
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
}, bc = ["aria-hidden", "aria-label"], xc = [
	"fill",
	"width",
	"height"
], Sc = { d: "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" }, Cc = { key: 0 };
function wc(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon pencil-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Sc, [n.title ? (g(), K("title", Cc, q(n.title), 1)) : R("", !0)])], 8, xc))], 16, bc);
}
var Tc = /*#__PURE__*/ $(yc, [["render", wc]]), Ec = {
	name: "CloseCircleIcon",
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
}, Dc = ["aria-hidden", "aria-label"], Oc = [
	"fill",
	"width",
	"height"
], kc = { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }, Ac = { key: 0 };
function jc(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon close-circle-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", kc, [n.title ? (g(), K("title", Ac, q(n.title), 1)) : R("", !0)])], 8, Oc))], 16, Dc);
}
var Mc = /*#__PURE__*/ $(Ec, [["render", jc]]), Nc = {
	name: "CheckCircleIcon",
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
}, Pc = ["aria-hidden", "aria-label"], Fc = [
	"fill",
	"width",
	"height"
], Ic = { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" }, Lc = { key: 0 };
function Rc(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon check-circle-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ic, [n.title ? (g(), K("title", Lc, q(n.title), 1)) : R("", !0)])], 8, Fc))], 16, Pc);
}
var zc = /*#__PURE__*/ $(Nc, [["render", Rc]]), Bc = {
	name: "ClockOutlineIcon",
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
}, Vc = ["aria-hidden", "aria-label"], Hc = [
	"fill",
	"width",
	"height"
], Uc = { d: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" }, Wc = { key: 0 };
function Gc(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon clock-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Uc, [n.title ? (g(), K("title", Wc, q(n.title), 1)) : R("", !0)])], 8, Hc))], 16, Vc);
}
var Kc = /*#__PURE__*/ $(Bc, [["render", Gc]]), qc = {
	name: "HelpCircleOutlineIcon",
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
}, Jc = ["aria-hidden", "aria-label"], Yc = [
	"fill",
	"width",
	"height"
], Xc = { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, Zc = { key: 0 };
function Qc(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon help-circle-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Xc, [n.title ? (g(), K("title", Zc, q(n.title), 1)) : R("", !0)])], 8, Yc))], 16, Jc);
}
var $c = /*#__PURE__*/ $(qc, [["render", Qc]]), el = {
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
}, tl = ["aria-hidden", "aria-label"], nl = [
	"fill",
	"width",
	"height"
], rl = { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, il = { key: 0 };
function al(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon checkbox-blank-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", rl, [n.title ? (g(), K("title", il, q(n.title), 1)) : R("", !0)])], 8, nl))], 16, tl);
}
var ol = /*#__PURE__*/ $(el, [["render", al]]), sl = {
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
}, cl = ["aria-hidden", "aria-label"], ll = [
	"fill",
	"width",
	"height"
], ul = { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, dl = { key: 0 };
function fl(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon checkbox-marked-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", ul, [n.title ? (g(), K("title", dl, q(n.title), 1)) : R("", !0)])], 8, ll))], 16, cl);
}
var pl = /*#__PURE__*/ $(sl, [["render", fl]]), ml = {
	name: "CheckIcon",
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
}, hl = ["aria-hidden", "aria-label"], gl = [
	"fill",
	"width",
	"height"
], _l = { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }, vl = { key: 0 };
function yl(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon check-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", _l, [n.title ? (g(), K("title", vl, q(n.title), 1)) : R("", !0)])], 8, gl))], 16, hl);
}
var bl = /*#__PURE__*/ $(ml, [["render", yl]]), xl = {
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
}, Sl = ["aria-hidden", "aria-label"], Cl = [
	"fill",
	"width",
	"height"
], wl = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, Tl = { key: 0 };
function El(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", wl, [n.title ? (g(), K("title", Tl, q(n.title), 1)) : R("", !0)])], 8, Cl))], 16, Sl);
}
var Dl = /*#__PURE__*/ $(xl, [["render", El]]), Ol = () => hs("/invoices"), kl = (e) => hs(`/invoices/${e}`), Al = (e) => gs("/invoices", { data: e }), jl = (e, t) => _s(`/invoices/${e}`, { data: t }), Ml = (e) => ys(`/invoices/${e}`), Nl = (e) => gs(`/invoices/${e}/commit`, {}), Pl = (e) => gs(`/invoices/${e}/cancel`, {}), Fl = (e) => gs(`/invoices/${e}/duplicate`, {}), Il = (e, t) => gs(`/invoices/${e}/pay`, t ? { date: t } : {}), Ll = (e) => gs(`/invoices/${e}/unpay`, {}), Rl = (e) => ps(`/invoices/${e}/pdf`), zl = (e) => ps(`/invoices/${e}/preview`) + "?t=" + Date.now(), Bl = (e) => {
	let t = document.createElement("a");
	t.href = Rl(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Vl = (e, t) => gs(`/invoices/${e}/send`, t), Hl = sn("invoice", () => {
	let e = X([]), t = X(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await Ol();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => kl(e);
	async function i(e) {
		let t = await Al(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await jl(e, t);
		return await n(), r;
	}
	async function o(t) {
		await Ml(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await Nl(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await Pl(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await Fl(e);
		return await n(), t;
	}
	async function u(e, t) {
		let r = await Il(e, t);
		return await n(), r;
	}
	async function d(e) {
		let t = await Ll(e);
		return await n(), t;
	}
	return {
		invoices: e,
		loading: t,
		fetchAll: n,
		get: r,
		create: i,
		update: a,
		remove: o,
		commit: s,
		cancel: c,
		duplicate: l,
		markPaid: u,
		markUnpaid: d
	};
}), Ul = (e) => gs("/smtp/test", e), Wl = () => hs("/settings"), Gl = (e) => vs("/settings", { data: e }), Kl = (e) => vs("/settings/logo", { path: e }), ql = () => ys("/settings/logo"), Jl = (e) => `${ps("/settings/logo")}?v=${e}`, Yl = (e) => vs("/settings/archive-folder", { path: e }), Xl = () => ys("/settings/archive-folder"), Zl = sn("settings", () => {
	let e = X(null), t = X(!1), n = X(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Wl();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		n.value = !0;
		try {
			return e.value = await Gl(t), e.value;
		} finally {
			n.value = !1;
		}
	}
	return {
		settings: e,
		loading: t,
		saving: n,
		fetch: r,
		save: i
	};
}), Ql = [
	"C62",
	"HUR",
	"DAY",
	"MON",
	"KGM",
	"LS",
	"KWH",
	"LTR",
	"MTR",
	"KMT",
	"MTK",
	"GRM",
	"TNE"
], $l = {
	C62: "Stück",
	HUR: "Stunde",
	DAY: "Tag",
	MON: "Monat",
	KGM: "kg",
	LS: "Pauschal",
	KWH: "kWh",
	LTR: "Liter",
	MTR: "Meter",
	KMT: "Kilometer",
	MTK: "m²",
	GRM: "Gramm",
	TNE: "Tonne"
}, eu = [
	1900,
	700,
	0
], tu = "Gem. § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.", nu = {
	invoice: "Rechnung",
	quote: "Angebot"
}, ru = {
	opening: "Anrede & Einleitung",
	closing: "Schlusstext"
}, iu = {
	draft: "Entwurf",
	committed: "Festgeschrieben",
	cancelled: "Storniert"
}, au = {
	invoice: "Rechnung",
	cancellation: "Storno",
	quote: "Angebot"
}, ou = {
	draft: "Entwurf",
	open: "Offen",
	expired: "Abgelaufen",
	accepted: "Angenommen",
	rejected: "Abgelehnt",
	converted: "Übernommen",
	superseded: "Revidiert"
};
function su(e) {
	return e.includes(".") ? /^\d{1,3}(\.\d{3})+$/.test(e) : /^\d*$/.test(e);
}
function cu(e, t, n) {
	if (e == null) return null;
	let r = String(e).replace(/[\s  ]+/g, "");
	if (r === "") return null;
	let i = !1;
	if (r.startsWith("-") ? (i = !0, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1)), r === "" || !/^[0-9.,]+$/.test(r)) return null;
	let a = r.indexOf(","), o, s;
	if (a >= 0) {
		if (r.includes(",", a + 1) || (o = r.slice(0, a), s = r.slice(a + 1), s.includes("."))) return null;
	} else o = r, s = "";
	if (!su(o) || (o = o.split(".").join(""), o === "" && s === "") || (o === "" && (o = "0"), !/^\d+$/.test(o)) || s !== "" && !/^\d+$/.test(s) || s.length > t || (o = o.replace(/^0+/, ""), o === "" && (o = "0"), o.length > n)) return null;
	s = s.replace(/0+$/, "");
	let c = o + (s === "" ? "" : "." + s);
	return i && c !== "0" ? "-" + c : c;
}
function lu(e) {
	return e == null || String(e).trim() === "" ? "1" : cu(e, 3, 9);
}
function uu(e) {
	return e == null || String(e).trim() === "" ? "0" : cu(e, 4, 9);
}
function du(e) {
	if (e === null) return "";
	let [t, n] = e.split("."), r = t.startsWith("-") ? "-" : "";
	return r + (r ? t.slice(1) : t).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (n ? "," + n : "");
}
function fu(e) {
	if (e == null) return "";
	let t = String(e).trim();
	if (t === "") return "";
	if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(t)) return t;
	let n = t.startsWith("-");
	(n || t.startsWith("+")) && (t = t.slice(1));
	let [r, i = ""] = t.split("."), a = r.replace(/^0+/, "") || "0", o = i.replace(/0+$/, "");
	return du((n && (a !== "0" || o !== "") ? "-" : "") + a + (o === "" ? "" : "." + o));
}
//#endregion
//#region src/utils/money.ts
function pu(e) {
	return e == null ? "" : du((e / 1e4).toFixed(4).replace(/(\.\d\d)(\d*?)0+$/, "$1$2"));
}
function mu(e) {
	let t = uu(e);
	return t === null ? 0 : Math.round(Number.parseFloat(t) * 1e4);
}
function hu(e) {
	let t = (e ?? 0) / 1e4;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	}).format(t);
}
function gu(e) {
	let t = (e ?? 0) / 100;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR"
	}).format(t);
}
function _u(e) {
	return `${e / 100} %`;
}
//#endregion
//#region src/views/InvoicesView.vue?vue&type=script&setup=true&lang.ts
var vu = { class: "rw-view" }, yu = { class: "rw-view__head" }, bu = { key: 2 }, xu = { class: "rw-filterbar" }, Su = ["onClick"], Cu = { class: "rw-chip__n" }, wu = {
	key: 0,
	class: "rw-chip rw-chip--sum"
}, Tu = { class: "rw-table-wrap" }, Eu = { class: "rw-table" }, Du = { class: "rw-th-info" }, Ou = { class: "rw-info-popup" }, ku = { class: "rw-info-popup__hint" }, Au = { class: "rw-info-popup__group" }, ju = { class: "rw-legend__label" }, Mu = { class: "rw-legend__item" }, Nu = { class: "rw-legend__item" }, Pu = { class: "rw-legend__item" }, Fu = {
	key: 0,
	class: "rw-info-popup__group"
}, Iu = { class: "rw-legend__label" }, Lu = { class: "rw-legend__item" }, Ru = { class: "rw-legend__item" }, zu = { class: "rw-legend__item" }, Bu = { class: "num" }, Vu = { class: "rw-col-paid" }, Hu = ["onClick"], Uu = { class: "rw-status-cell" }, Wu = {
	key: 0,
	class: "rw-pill"
}, Gu = { class: "num" }, Ku = ["aria-label", "onKeyup"], qu = ["title", "onClick"], Ju = { class: "rw-col-paid" }, Yu = [
	"aria-label",
	"title",
	"onClick"
], Xu = { class: "rw-col-actions" }, Zu = { class: "rw-actions" }, Qu = 864e5, $u = /* @__PURE__ */ B({
	__name: "InvoicesView",
	setup(e) {
		let t = Ae(), n = Hl(), r = Zl(), i = X(""), a = W(() => !!r.settings?.imapHost), o = W(() => n.invoices.some((e) => !!e.datevStatus)), s = W(() => a.value || o.value), c = [
			{
				key: "all",
				label: "Alle"
			},
			{
				key: "open",
				label: "Offen"
			},
			{
				key: "overdue",
				label: "Überfällig"
			},
			{
				key: "paid",
				label: "Bezahlt"
			}
		], l = X("all"), d = (e) => e.paymentStatus === "unpaid" || e.paymentStatus === "overdue", f = W(() => {
			let e = {
				all: n.invoices.length,
				open: 0,
				overdue: 0,
				paid: 0
			};
			for (let t of n.invoices) d(t) && e.open++, t.paymentStatus === "overdue" && e.overdue++, t.paymentStatus === "paid" && e.paid++;
			return e;
		}), m = W(() => n.invoices.reduce((e, t) => e + (d(t) ? t.totalCents : 0), 0)), h = W(() => {
			switch (l.value) {
				case "open": return n.invoices.filter(d);
				case "overdue": return n.invoices.filter((e) => e.paymentStatus === "overdue");
				case "paid": return n.invoices.filter((e) => e.paymentStatus === "paid");
				default: return n.invoices;
			}
		});
		function _(e) {
			return e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e);
		}
		function ee(e) {
			let t = _(e);
			t.setHours(0, 0, 0, 0);
			let n = /* @__PURE__ */ new Date();
			return n.setHours(0, 0, 0, 0), Math.round((t.getTime() - n.getTime()) / Qu);
		}
		function v(e) {
			return e ? _(e).toLocaleDateString(void 0, {
				day: "numeric",
				month: "numeric"
			}) : "";
		}
		let y = (e) => e.paymentStatus === "overdue" ? "rw-amt-overdue" : e.paymentStatus === "paid" ? "rw-amt-paid" : "";
		function te(e) {
			if (e.paymentStatus === "paid") return e.paidAt ? A("rechnungswerk", "bezahlt am {date}", { date: v(e.paidAt) }) : A("rechnungswerk", "bezahlt");
			if (!e.dueDate) return "";
			let t = ee(e.dueDate);
			if (e.paymentStatus === "overdue") {
				let e = -t;
				return e === 1 ? A("rechnungswerk", "1 Tag überfällig") : A("rechnungswerk", "{days} Tage überfällig", { days: String(e) });
			}
			return e.paymentStatus === "unpaid" ? t <= 0 ? A("rechnungswerk", "fällig heute") : t === 1 ? A("rechnungswerk", "fällig morgen ({date})", { date: v(e.dueDate) }) : A("rechnungswerk", "fällig in {days} Tagen ({date})", {
				days: String(t),
				date: v(e.dueDate)
			}) : "";
		}
		let b = (e) => e.paymentStatus === "paid" ? A("rechnungswerk", "Als unbezahlt markieren") : A("rechnungswerk", "Als bezahlt markieren");
		function x(e) {
			return e.paymentStatus === "paid" ? e.paidAt ? A("rechnungswerk", "Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen", { date: v(e.paidAt) }) : A("rechnungswerk", "Bezahlt – klicken, um die Zahlung zurückzunehmen") : A("rechnungswerk", "Als bezahlt markieren");
		}
		async function S(e) {
			i.value = "";
			try {
				e.paymentStatus === "paid" ? await n.markUnpaid(e.id) : await n.markPaid(e.id);
			} catch (e) {
				i.value = e.message ?? A("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		let C = X(null), ne = X("");
		function w(e) {
			let t = e ? _(e) : /* @__PURE__ */ new Date(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
			return `${t.getFullYear()}-${n}-${r}`;
		}
		function T(e) {
			i.value = "", ne.value = w(e.paidAt), C.value = e.id;
		}
		function E() {
			C.value = null;
		}
		async function ie(e) {
			if (!ne.value) {
				E();
				return;
			}
			i.value = "";
			try {
				await n.markPaid(e.id, ne.value), C.value = null;
			} catch (e) {
				i.value = e.message ?? A("rechnungswerk", "Zahldatum konnte nicht geändert werden");
			}
		}
		let D = {
			draft: Tc,
			committed: wo,
			cancelled: Mc
		}, oe = {
			pending: Kc,
			confirmed: zc,
			unknown: $c,
			failed: Mc
		}, se = (e) => D[e] ?? xa, k = (e) => e ? oe[e] ?? null : null, ce = {
			pending: A("rechnungswerk", "An DATEV gesendet – Bestätigung ausstehend"),
			confirmed: A("rechnungswerk", "Von DATEV bestätigt (Beleg angenommen)"),
			unknown: A("rechnungswerk", "DATEV-Antwort prüfen"),
			failed: A("rechnungswerk", "Von DATEV abgelehnt")
		}, M = (e) => ce[e] ?? "", N = (e) => A("rechnungswerk", iu[e] ?? e), le = (e) => A("rechnungswerk", au[e] ?? e), ue = (e) => e.relatedNumber ? A("rechnungswerk", "{type} zu Rechnung {number}", {
			type: le(e.invoiceType),
			number: e.relatedNumber
		}) : le(e.invoiceType);
		function I(e) {
			return e ? new Date(e).toLocaleDateString() : "—";
		}
		p(() => {
			n.fetchAll().catch((e) => {
				i.value = e.message ?? A("rechnungswerk", "Laden fehlgeschlagen");
			}), r.fetch().catch(() => {});
		});
		function fe() {
			t.push({ name: "invoice-new" });
		}
		function pe(e) {
			t.push({
				name: "invoice-detail",
				params: { id: String(e) }
			});
		}
		function me(e) {
			Bl(e);
		}
		async function he(e) {
			i.value = "";
			try {
				let r = await n.duplicate(e);
				t.push({
					name: "invoice-detail",
					params: { id: String(r.id) }
				});
			} catch (e) {
				i.value = e.message ?? A("rechnungswerk", "Duplizieren fehlgeschlagen");
			}
		}
		return (e, t) => {
			let r = re("tooltip");
			return g(), K("div", vu, [
				Y("div", yu, [Y("h2", null, q(U(A)("rechnungswerk", "Rechnungen")), 1), H(U(L), {
					variant: "primary",
					onClick: fe
				}, {
					icon: j(() => [H(ic, { size: 20 })]),
					default: j(() => [z(" " + q(U(A)("rechnungswerk", "Neue Rechnung")), 1)]),
					_: 1
				})]),
				i.value ? (g(), V(U(pt), {
					key: 0,
					type: "error",
					text: i.value
				}, null, 8, ["text"])) : R("", !0),
				!U(n).loading && U(n).invoices.length === 0 ? (g(), V(U(St), {
					key: 1,
					name: U(A)("rechnungswerk", "Noch keine Rechnungen"),
					description: U(A)("rechnungswerk", "Lege deine erste Rechnung an.")
				}, {
					icon: j(() => [H(xa, { size: 20 })]),
					_: 1
				}, 8, ["name", "description"])) : U(n).invoices.length > 0 ? (g(), K("div", bu, [Y("div", xu, [(g(), K(O, null, u(c, (e) => Y("button", {
					key: e.key,
					class: Z(["rw-chip", {
						"rw-chip--active": l.value === e.key,
						"rw-chip--overdue": e.key === "overdue"
					}]),
					onClick: (t) => l.value = e.key
				}, [z(q(U(A)("rechnungswerk", e.label)) + " ", 1), Y("span", Cu, q(f.value[e.key]), 1)], 10, Su)), 64)), m.value > 0 ? (g(), K("span", wu, [z(q(U(A)("rechnungswerk", "Offen gesamt:")) + " ", 1), Y("strong", null, q(U(gu)(m.value)), 1)])) : R("", !0)]), Y("div", Tu, [Y("table", Eu, [Y("thead", null, [Y("tr", null, [
					Y("th", null, [Y("span", Du, [z(q(U(A)("rechnungswerk", "Status")) + " ", 1), H(Zs, null, {
						default: j(() => [Y("div", Ou, [
							Y("p", ku, q(U(A)("rechnungswerk", "Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.")), 1),
							Y("div", Au, [
								Y("span", ju, q(U(A)("rechnungswerk", "Rechnung")), 1),
								Y("span", Mu, [H(wo, {
									size: 16,
									class: "rw-sicon rw-sicon--committed"
								}), z(" " + q(U(A)("rechnungswerk", "Festgeschrieben")), 1)]),
								Y("span", Nu, [H(Tc, {
									size: 16,
									class: "rw-sicon rw-sicon--draft"
								}), z(" " + q(U(A)("rechnungswerk", "Entwurf")), 1)]),
								Y("span", Pu, [H(Mc, {
									size: 16,
									class: "rw-sicon rw-sicon--cancelled"
								}), z(" " + q(U(A)("rechnungswerk", "Storniert")), 1)])
							]),
							s.value ? (g(), K("div", Fu, [
								Y("span", Iu, q(U(A)("rechnungswerk", "DATEV-Übergabe")), 1),
								Y("span", Lu, [H(zc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-confirmed"
								}), z(" " + q(U(A)("rechnungswerk", "bestätigt")), 1)]),
								Y("span", Ru, [H(Kc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-pending"
								}), z(" " + q(U(A)("rechnungswerk", "gesendet")), 1)]),
								Y("span", zu, [H($c, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-unknown"
								}), z(" " + q(U(A)("rechnungswerk", "Antwort prüfen")), 1)])
							])) : R("", !0)
						])]),
						_: 1
					})])]),
					Y("th", null, q(U(A)("rechnungswerk", "Nummer")), 1),
					Y("th", null, q(U(A)("rechnungswerk", "Empfänger")), 1),
					Y("th", null, q(U(A)("rechnungswerk", "Datum")), 1),
					Y("th", Bu, q(U(A)("rechnungswerk", "Brutto")), 1),
					Y("th", Vu, q(U(A)("rechnungswerk", "Bezahlt")), 1),
					t[2] ||= Y("th", { class: "rw-col-actions" }, null, -1)
				])]), Y("tbody", null, [(g(!0), K(O, null, u(h.value, (e) => (g(), K("tr", {
					key: e.id,
					class: Z(["rw-row-clickable", { "rw-row--overdue": e.paymentStatus === "overdue" }]),
					onClick: (t) => pe(e.id)
				}, [
					Y("td", null, [Y("span", Uu, [(g(), V(ae(se(e.status)), {
						size: 20,
						class: Z(["rw-sicon", `rw-sicon--${e.status}`]),
						title: N(e.status)
					}, null, 8, ["class", "title"])), s.value && e.datevStatus && k(e.datevStatus) ? (g(), V(ae(k(e.datevStatus)), {
						key: 0,
						size: 18,
						class: Z(["rw-sicon", `rw-sicon--datev-${e.datevStatus}`]),
						title: M(e.datevStatus)
					}, null, 8, ["class", "title"])) : R("", !0)])]),
					Y("td", null, [z(q(e.number ?? U(A)("rechnungswerk", "(Entwurf)")) + " ", 1), e.invoiceType === "invoice" ? R("", !0) : P((g(), K("span", Wu, [z(q(le(e.invoiceType)), 1)])), [[r, ue(e)]])]),
					Y("td", null, q(e.recipientName ?? "—"), 1),
					Y("td", null, q(I(e.issueDate ?? e.createdAt)), 1),
					Y("td", Gu, [Y("span", { class: Z(y(e)) }, q(U(gu)(e.totalCents)), 3), C.value === e.id ? (g(), K("div", {
						key: 0,
						class: "rw-paid-edit",
						onClick: t[1] ||= F(() => {}, ["stop"])
					}, [
						P(Y("input", {
							"onUpdate:modelValue": t[0] ||= (e) => ne.value = e,
							type: "date",
							class: "rw-input rw-paid-input",
							"aria-label": U(A)("rechnungswerk", "Zahldatum"),
							onKeyup: [de((t) => ie(e), ["enter"]), de(E, ["esc"])]
						}, null, 40, Ku), [[J, ne.value]]),
						H(U(L), {
							variant: "primary",
							"aria-label": U(A)("rechnungswerk", "Zahldatum speichern"),
							title: U(A)("rechnungswerk", "Zahldatum speichern"),
							onClick: F((t) => ie(e), ["stop"])
						}, {
							icon: j(() => [H(bl, { size: 18 })]),
							_: 1
						}, 8, [
							"aria-label",
							"title",
							"onClick"
						]),
						H(U(L), {
							variant: "tertiary",
							"aria-label": U(A)("rechnungswerk", "Abbrechen"),
							title: U(A)("rechnungswerk", "Abbrechen"),
							onClick: F(E, ["stop"])
						}, {
							icon: j(() => [H(Dl, { size: 18 })]),
							_: 1
						}, 8, ["aria-label", "title"])
					])) : e.paymentStatus === "paid" ? (g(), K("button", {
						key: 1,
						type: "button",
						class: "rw-subline rw-subline--editable",
						title: U(A)("rechnungswerk", "Zahldatum ändern"),
						onClick: F((t) => T(e), ["stop"])
					}, q(te(e)), 9, qu)) : te(e) ? (g(), K("div", {
						key: 2,
						class: Z(["rw-subline", { "rw-subline--overdue": e.paymentStatus === "overdue" }])
					}, q(te(e)), 3)) : R("", !0)]),
					Y("td", Ju, [e.paymentStatus ? (g(), K("button", {
						key: 0,
						class: Z(["rw-paybox", e.paymentStatus === "paid" ? "rw-paybox--paid" : "rw-paybox--open"]),
						"aria-label": b(e),
						title: x(e),
						onClick: F((t) => S(e), ["stop"])
					}, [(g(), V(ae(e.paymentStatus === "paid" ? pl : ol), { size: 22 }))], 10, Yu)) : R("", !0)]),
					Y("td", Xu, [Y("div", Zu, [e.invoiceType === "cancellation" ? R("", !0) : (g(), V(U(L), {
						key: 0,
						variant: "tertiary",
						"aria-label": U(A)("rechnungswerk", "Duplizieren"),
						title: U(A)("rechnungswerk", "Als Vorlage für neue Rechnung duplizieren"),
						onClick: F((t) => he(e.id), ["stop"])
					}, {
						icon: j(() => [H(vc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])), e.status === "draft" ? R("", !0) : (g(), V(U(L), {
						key: 1,
						variant: "tertiary",
						"aria-label": U(A)("rechnungswerk", "PDF herunterladen"),
						title: U(A)("rechnungswerk", "PDF herunterladen"),
						onClick: F((t) => me(e.id), ["stop"])
					}, {
						icon: j(() => [H(dc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					]))])])
				], 10, Hu))), 128))])])])])) : R("", !0)
			]);
		};
	}
}), ed = {
	name: "DeleteIcon",
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
}, td = ["aria-hidden", "aria-label"], nd = [
	"fill",
	"width",
	"height"
], rd = { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" }, id = { key: 0 };
function ad(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon delete-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", rd, [n.title ? (g(), K("title", id, q(n.title), 1)) : R("", !0)])], 8, nd))], 16, td);
}
var od = /*#__PURE__*/ $(ed, [["render", ad]]), sd = {
	name: "SendIcon",
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
}, cd = ["aria-hidden", "aria-label"], ld = [
	"fill",
	"width",
	"height"
], ud = { d: "M2,21L23,12L2,3V10L17,12L2,14V21Z" }, dd = { key: 0 };
function fd(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon send-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", ud, [n.title ? (g(), K("title", dd, q(n.title), 1)) : R("", !0)])], 8, ld))], 16, cd);
}
var pd = /*#__PURE__*/ $(sd, [["render", fd]]), md = {
	name: "EyeOutlineIcon",
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
}, hd = ["aria-hidden", "aria-label"], gd = [
	"fill",
	"width",
	"height"
], _d = { d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" }, vd = { key: 0 };
function yd(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon eye-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", _d, [n.title ? (g(), K("title", vd, q(n.title), 1)) : R("", !0)])], 8, gd))], 16, hd);
}
var bd = /*#__PURE__*/ $(md, [["render", yd]]), xd = {
	name: "FileMoveOutlineIcon",
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
}, Sd = ["aria-hidden", "aria-label"], Cd = [
	"fill",
	"width",
	"height"
], wd = { d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 20.41 4.12 20.8 4.34 21.12C4.41 21.23 4.5 21.33 4.59 21.41C4.95 21.78 5.45 22 6 22H13.53C13 21.42 12.61 20.75 12.35 20H6V4H13V9H18V12C18.7 12 19.37 12.12 20 12.34V8L14 2M18 23L23 18.5L20 15.8L18 14V17H14V20H18V23Z" }, Td = { key: 0 };
function Ed(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-move-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", wd, [n.title ? (g(), K("title", Td, q(n.title), 1)) : R("", !0)])], 8, Cd))], 16, Sd);
}
var Dd = /*#__PURE__*/ $(xd, [["render", Ed]]), Od = {
	name: "FileEditOutlineIcon",
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
}, kd = ["aria-hidden", "aria-label"], Ad = [
	"fill",
	"width",
	"height"
], jd = { d: "M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" }, Md = { key: 0 };
function Nd(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-edit-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", jd, [n.title ? (g(), K("title", Md, q(n.title), 1)) : R("", !0)])], 8, Ad))], 16, kd);
}
var Pd = /*#__PURE__*/ $(Od, [["render", Nd]]), Fd = (e) => hs(`/contacts/search?q=${encodeURIComponent(e)}`), Id = () => hs("/me"), Ld = { class: "contact-picker" }, Rd = ["value", "placeholder"], zd = {
	key: 0,
	class: "contact-picker__list"
}, Bd = ["onMousedown"], Vd = {
	key: 0,
	class: "muted"
}, Hd = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "ContactPicker",
	props: { modelValue: {} },
	emits: ["update:modelValue", "select"],
	setup(e, { emit: t }) {
		let n = t, r = X([]), i = X(!1), a = null;
		function o(e) {
			if (n("update:modelValue", e), a && clearTimeout(a), e.trim().length < 2) {
				r.value = [], i.value = !1;
				return;
			}
			a = setTimeout(async () => {
				try {
					r.value = await Fd(e.trim()), i.value = r.value.length > 0;
				} catch {
					r.value = [], i.value = !1;
				}
			}, 300);
		}
		function s(e) {
			n("update:modelValue", e.name), n("select", e), i.value = !1, r.value = [];
		}
		function c() {
			setTimeout(() => {
				i.value = !1;
			}, 150);
		}
		return $e(() => {
			a && clearTimeout(a);
		}), (t, n) => (g(), K("div", Ld, [Y("input", {
			value: e.modelValue,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: U(A)("rechnungswerk", "Name eingeben oder Kontakt wählen\xA0…"),
			onInput: n[0] ||= (e) => o(e.target.value),
			onFocus: n[1] ||= (e) => i.value = r.value.length > 0,
			onBlur: c
		}, null, 40, Rd), i.value && r.value.length > 0 ? (g(), K("ul", zd, [(g(!0), K(O, null, u(r.value, (e, t) => (g(), K("li", {
			key: t,
			class: "contact-picker__item",
			onMousedown: F((t) => s(e), ["prevent"])
		}, [Y("strong", null, q(e.name), 1), e.email ? (g(), K("span", Vd, q(e.email), 1)) : R("", !0)], 40, Bd))), 128))])) : R("", !0)]));
	}
}), [["__scopeId", "data-v-23f7f625"]]), Ud = null, Wd = () => (Ud === null && (Ud = hs("/countries").catch((e) => {
	throw Ud = null, e;
})), Ud), Gd = ["disabled", "title"], Kd = ["value"], qd = ["value"], Jd = /* @__PURE__ */ B({
	__name: "CountrySelect",
	props: /*@__PURE__*/ me({
		selectClass: { default: "rw-input" },
		disabled: {
			type: Boolean,
			default: !1
		}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = w(e, "modelValue"), n = X([]), r = W(() => {
			let e = n.value.find((e) => e.code === t.value);
			return e ? `${e.label} (${e.code})` : t.value ?? "";
		}), i = W(() => {
			let e = t.value ?? "";
			return e === "" || n.value.length === 0 ? e : n.value.some((t) => t.code === e) ? "" : e;
		});
		return p(async () => {
			try {
				n.value = await Wd();
			} catch {
				n.value = [];
			}
		}), (a, o) => P((g(), K("select", {
			"onUpdate:modelValue": o[0] ||= (e) => t.value = e,
			class: Z(e.selectClass),
			disabled: e.disabled,
			title: r.value
		}, [i.value === "" ? R("", !0) : (g(), K("option", {
			key: 0,
			value: i.value
		}, q(i.value), 9, Kd)), (g(!0), K(O, null, u(n.value, (e) => (g(), K("option", {
			key: e.code,
			value: e.code
		}, q(e.label) + " (" + q(e.code) + ")", 9, qd))), 128))], 10, Gd)), [[C, t.value]]);
	}
}), Yd = () => hs("/customers"), Xd = (e) => gs("/customers", { data: e }), Zd = (e, t) => _s(`/customers/${e}`, { data: t }), Qd = (e) => ys(`/customers/${e}`), $d = sn("customer", () => {
	let e = X([]), t = X(!1);
	function n() {
		e.value.sort((e, t) => e.name.localeCompare(t.name));
	}
	async function r() {
		t.value = !0;
		try {
			e.value = await Yd();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		let r = await Xd(t);
		return e.value.push(r), n(), r;
	}
	async function a(t, r) {
		let i = await Zd(t, r), a = e.value.findIndex((e) => e.id === t);
		return a >= 0 && (e.value[a] = i), n(), i;
	}
	async function o(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Qd(t);
		} catch (t) {
			throw r && n >= 0 && e.value.splice(n, 0, r), t;
		}
	}
	return {
		customers: e,
		loading: t,
		fetchAll: r,
		create: i,
		update: a,
		remove: o
	};
}), ef = { class: "customer-picker" }, tf = ["value", "placeholder"], nf = {
	key: 0,
	class: "customer-picker__list"
}, rf = ["onMousedown"], af = { class: "muted" }, of = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "CustomerPicker",
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = t, r = $d(), i = X(""), a = X([]), o = X(!1);
		p(() => {
			r.customers.length === 0 && r.fetchAll().catch((e) => console.error("[rechnungswerk] customer picker:", e));
		});
		function s(e) {
			i.value = e;
			let t = e.trim().toLowerCase();
			if (t === "") {
				a.value = [], o.value = !1;
				return;
			}
			a.value = r.customers.filter((e) => `${e.name} ${e.customerNumber} ${e.city ?? ""} ${e.vatId ?? ""}`.toLowerCase().includes(t)).slice(0, 20), o.value = a.value.length > 0;
		}
		function c(e) {
			i.value = "", a.value = [], o.value = !1, n("select", e);
		}
		function l() {
			setTimeout(() => {
				o.value = !1;
			}, 150);
		}
		return (e, t) => (g(), K("div", ef, [Y("input", {
			value: i.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: U(A)("rechnungswerk", "Kunde suchen oder anlegen\xA0…"),
			onInput: t[0] ||= (e) => s(e.target.value),
			onFocus: t[1] ||= (e) => o.value = a.value.length > 0,
			onBlur: l
		}, null, 40, tf), o.value && a.value.length > 0 ? (g(), K("ul", nf, [(g(!0), K(O, null, u(a.value, (e) => (g(), K("li", {
			key: e.id,
			class: "customer-picker__item",
			onMousedown: F((t) => c(e), ["prevent"])
		}, [Y("strong", null, q(e.name), 1), Y("span", af, q([
			e.customerNumber,
			[e.postalCode, e.city].filter(Boolean).join(" "),
			e.vatId
		].filter(Boolean).join(" · ")), 1)], 40, rf))), 128))])) : R("", !0)]));
	}
}), [["__scopeId", "data-v-4ad9c538"]]), sf = { class: "product-picker" }, cf = ["value", "placeholder"], lf = {
	key: 0,
	class: "product-picker__panel"
}, uf = { class: "product-picker__head" }, df = { class: "product-picker__list" }, ff = ["onMousedown"], pf = { class: "muted" }, mf = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "ProductPicker",
	props: { products: {} },
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = X(""), a = X([]), o = X(!1), s = null, c = W(() => i.value.trim() === "" ? A("rechnungswerk", "Alle Produkte ({gesamt})", { gesamt: n.products.length }) : A("rechnungswerk", "{treffer} Treffer", { treffer: a.value.length }));
		function l(e) {
			return [`${pu(e.defaultPriceE4)} €`, e.defaultUnitLabel || A("rechnungswerk", $l[e.defaultUnitCode])].filter(Boolean).join(" · ");
		}
		function d(e) {
			let t = e.trim().toLowerCase();
			return t === "" ? n.products : n.products.filter((e) => `${e.name} ${e.description ?? ""}`.toLowerCase().includes(t));
		}
		function f(e) {
			i.value = e, a.value = d(e), o.value = a.value.length > 0;
		}
		function p() {
			s !== null && (clearTimeout(s), s = null), a.value = d(i.value), o.value = a.value.length > 0;
		}
		function m(e) {
			i.value = "", a.value = [], o.value = !1, r("select", e);
		}
		function h() {
			s = window.setTimeout(() => {
				o.value = !1, s = null;
			}, 150);
		}
		return (e, t) => (g(), K("div", sf, [Y("input", {
			value: i.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: U(A)("rechnungswerk", "Produkt wählen oder suchen\xA0…"),
			onInput: t[0] ||= (e) => f(e.target.value),
			onFocus: p,
			onClick: p,
			onBlur: h
		}, null, 40, cf), o.value && a.value.length > 0 ? (g(), K("div", lf, [Y("div", uf, q(c.value), 1), Y("ul", df, [(g(!0), K(O, null, u(a.value, (e) => (g(), K("li", {
			key: e.id,
			class: "product-picker__item",
			onMousedown: F((t) => m(e), ["prevent"])
		}, [Y("strong", null, q(e.name), 1), Y("span", pf, q(l(e)), 1)], 40, ff))), 128))])])) : R("", !0)]));
	}
}), [["__scopeId", "data-v-6469714c"]]);
//#endregion
//#region src/types/editor.ts
function hf(e = 1900) {
	return {
		productId: null,
		name: "",
		description: "",
		quantity: "1",
		unitCode: "C62",
		unitLabel: "",
		priceInput: "0,00",
		taxRateBp: e
	};
}
function gf(e, t) {
	return {
		productId: e.id,
		name: e.name,
		description: e.description ?? "",
		quantity: "1",
		unitCode: e.defaultUnitCode,
		unitLabel: e.defaultUnitLabel ?? "",
		priceInput: pu(e.defaultPriceE4),
		taxRateBp: t ? 0 : e.defaultTaxRateBp
	};
}
function _f(e) {
	return {
		productId: e.productId,
		name: e.name,
		description: e.description ?? "",
		quantity: fu(e.quantity),
		unitCode: e.unitCode,
		unitLabel: e.unitLabel ?? "",
		priceInput: pu(e.unitPriceE4),
		taxRateBp: e.taxRateBp
	};
}
//#endregion
//#region src/utils/invoiceCalc.ts
function vf(e, t) {
	let n = lu(e);
	if (n === null) return 0;
	let r = Math.round(Number(n) * 1e3);
	return Math.round(r * t / 1e5);
}
function yf(e, t = !1) {
	let n = /* @__PURE__ */ new Map(), r = 0;
	for (let t of e) {
		let e = Number(t.taxRateBp), i = Number(t.lineTotalCents);
		r += i, n.set(e, (n.get(e) ?? 0) + i);
	}
	let i = [...n.entries()].sort((e, t) => e[0] - t[0]).map(([e, n]) => ({
		rateBp: e,
		netCents: n,
		taxCents: t ? 0 : Math.round(n * e / 1e4)
	})), a = i.reduce((e, t) => e + t.taxCents, 0);
	return {
		subtotalCents: r,
		taxBreakdown: i,
		totalCents: r + a
	};
}
//#endregion
//#region src/components/InvoiceItemsTable.vue?vue&type=script&setup=true&lang.ts
var bf = { class: "rw-table-wrap" }, xf = { class: "rw-table rw-table--positions" }, Sf = {
	key: 0,
	class: "rw-col-actions"
}, Cf = { class: "num" }, wf = { class: "num" }, Tf = { class: "num" }, Ef = { class: "rw-sum" }, Df = { key: 0 }, Of = { class: "rw-pos-main" }, kf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Af = { class: "num" }, jf = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], Mf = ["onUpdate:modelValue", "disabled"], Nf = ["value"], Pf = { class: "num" }, Ff = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], If = { class: "num" }, Lf = ["onUpdate:modelValue", "disabled"], Rf = ["value"], zf = { class: "rw-sum" }, Bf = {
	key: 0,
	class: "num"
}, Vf = {
	key: 0,
	class: "rw-pos-desc"
}, Hf = ["colspan"], Uf = { class: "rw-sub-row" }, Wf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder",
	"title"
], Gf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Kf = { key: 0 }, qf = ["colspan"], Jf = {
	key: 0,
	class: "rw-toolbar"
}, Yf = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "InvoiceItemsTable",
	props: /*@__PURE__*/ me({
		products: {},
		readonly: { type: Boolean },
		smallBusiness: { type: Boolean },
		defaultTaxRateBp: {}
	}, {
		items: { required: !0 },
		itemsModifiers: {}
	}),
	emits: ["update:items"],
	setup(e) {
		let t = w(e, "items"), n = e, r = (e) => vf(e.quantity, mu(e.priceInput));
		function i(e) {
			let t = lu(e.quantity);
			t !== null && (e.quantity = du(t));
		}
		function a(e) {
			uu(e.priceInput) !== null && (e.priceInput = pu(mu(e.priceInput)));
		}
		M(() => n.smallBusiness, (e) => {
			if (e) for (let e of t.value) e.taxRateBp = 0;
		}, { immediate: !0 });
		let o = Ae();
		function s() {
			o.push({ name: "products" });
		}
		function c(e) {
			return e.name.trim() === "" && e.description.trim() === "";
		}
		function l() {
			let e = t.value.length - 1;
			return e >= 0 && c(t.value[e]) ? e : -1;
		}
		function d() {
			l() === -1 && t.value.push(hf(n.smallBusiness ? 0 : n.defaultTaxRateBp ?? 1900));
		}
		function f(e) {
			let r = gf(e, n.smallBusiness ?? !1), i = l();
			if (i !== -1) {
				t.value.splice(i, 1, r);
				return;
			}
			t.value.push(r);
		}
		function p(e) {
			t.value.splice(e, 1);
		}
		return (n, o) => (g(), K("div", null, [Y("div", bf, [Y("table", xf, [
			Y("colgroup", null, [
				o[0] ||= Y("col", null, null, -1),
				o[1] ||= Y("col", { class: "rw-col-qty" }, null, -1),
				o[2] ||= Y("col", { class: "rw-col-unit" }, null, -1),
				o[3] ||= Y("col", { class: "rw-col-price" }, null, -1),
				o[4] ||= Y("col", { class: "rw-col-tax" }, null, -1),
				o[5] ||= Y("col", { class: "rw-col-sum" }, null, -1),
				e.readonly ? R("", !0) : (g(), K("col", Sf))
			]),
			Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(A)("rechnungswerk", "Bezeichnung")), 1),
				Y("th", Cf, q(U(A)("rechnungswerk", "Menge")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Einheit")), 1),
				Y("th", wf, q(U(A)("rechnungswerk", "Einzelpreis (€)")), 1),
				Y("th", Tf, q(U(A)("rechnungswerk", "USt")), 1),
				Y("th", Ef, q(U(A)("rechnungswerk", "Summe netto")), 1),
				e.readonly ? R("", !0) : (g(), K("th", Df))
			])]),
			Y("tbody", null, [(g(!0), K(O, null, u(t.value, (t, n) => (g(), K(O, { key: n }, [Y("tr", Of, [
				Y("td", null, [P(Y("input", {
					"onUpdate:modelValue": (e) => t.name = e,
					class: "rw-input",
					type: "text",
					readonly: e.readonly,
					placeholder: U(A)("rechnungswerk", "Leistung")
				}, null, 8, kf), [[J, t.name]])]),
				Y("td", Af, [P(Y("input", {
					"onUpdate:modelValue": (e) => t.quantity = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => i(t)
				}, null, 40, jf), [[J, t.quantity]])]),
				Y("td", null, [P(Y("select", {
					"onUpdate:modelValue": (e) => t.unitCode = e,
					class: "rw-input",
					disabled: e.readonly
				}, [(g(!0), K(O, null, u(U(Ql), (e) => (g(), K("option", {
					key: e,
					value: e
				}, q(U(A)("rechnungswerk", U($l)[e])), 9, Nf))), 128))], 8, Mf), [[C, t.unitCode]])]),
				Y("td", Pf, [P(Y("input", {
					"onUpdate:modelValue": (e) => t.priceInput = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => a(t)
				}, null, 40, Ff), [[J, t.priceInput]])]),
				Y("td", If, [P(Y("select", {
					"onUpdate:modelValue": (e) => t.taxRateBp = e,
					class: "rw-input",
					disabled: e.readonly || e.smallBusiness
				}, [(g(!0), K(O, null, u(U(eu), (e) => (g(), K("option", {
					key: e,
					value: e
				}, q(U(_u)(e)), 9, Rf))), 128))], 8, Lf), [[
					C,
					t.taxRateBp,
					void 0,
					{ number: !0 }
				]])]),
				Y("td", zf, q(U(gu)(r(t))), 1),
				e.readonly ? R("", !0) : (g(), K("td", Bf, [H(U(L), {
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "Position entfernen"),
					onClick: (e) => p(n)
				}, {
					icon: j(() => [H(od, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "onClick"])]))
			]), !e.readonly || t.description || t.unitLabel ? (g(), K("tr", Vf, [Y("td", { colspan: e.readonly ? 6 : 7 }, [Y("div", Uf, [!e.readonly || t.unitLabel ? P((g(), K("input", {
				key: 0,
				"onUpdate:modelValue": (e) => t.unitLabel = e,
				class: "rw-input rw-input--sub rw-unit-label",
				type: "text",
				maxlength: "64",
				readonly: e.readonly,
				placeholder: U(A)("rechnungswerk", "eigene Einheit"),
				title: U(A)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.")
			}, null, 8, Wf)), [[J, t.unitLabel]]) : R("", !0), !e.readonly || t.description ? P((g(), K("input", {
				key: 1,
				"onUpdate:modelValue": (e) => t.description = e,
				class: "rw-input rw-input--sub rw-desc",
				type: "text",
				readonly: e.readonly,
				placeholder: U(A)("rechnungswerk", "Beschreibung (optional)")
			}, null, 8, Gf)), [[J, t.description]]) : R("", !0)])], 8, Hf)])) : R("", !0)], 64))), 128)), t.value.length === 0 ? (g(), K("tr", Kf, [Y("td", {
				colspan: e.readonly ? 6 : 7,
				class: "rw-muted empty-row"
			}, q(U(A)("rechnungswerk", "Noch keine Positionen.")), 9, qf)])) : R("", !0)])
		])]), e.readonly ? R("", !0) : (g(), K("div", Jf, [H(U(L), { onClick: d }, {
			icon: j(() => [H(ic, { size: 20 })]),
			default: j(() => [z(" " + q(U(A)("rechnungswerk", "Position hinzufügen")), 1)]),
			_: 1
		}), e.products.length > 0 ? (g(), V(mf, {
			key: 0,
			products: e.products,
			onSelect: f
		}, null, 8, ["products"])) : (g(), V(U(L), {
			key: 1,
			variant: "tertiary",
			onClick: s
		}, {
			icon: j(() => [H(Ya, { size: 20 })]),
			default: j(() => [z(" " + q(U(A)("rechnungswerk", "Noch keine Produkte angelegt")), 1)]),
			_: 1
		}))]))]));
	}
}), [["__scopeId", "data-v-76deaaa6"]]), Xf = { class: "confirm-dialog" }, Zf = { class: "confirm-dialog__message" }, Qf = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "ConfirmDialog",
	props: {
		open: { type: Boolean },
		name: {},
		message: {},
		confirmLabel: {},
		cancelLabel: {},
		destructive: { type: Boolean }
	},
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			e || n("close");
		}
		return (t, n) => (g(), V(U(vt), {
			open: e.open,
			name: e.name,
			"onUpdate:open": r
		}, {
			actions: j(() => [H(U(L), {
				variant: "secondary",
				onClick: n[0] ||= (e) => t.$emit("close")
			}, {
				default: j(() => [z(q(e.cancelLabel || U(A)("rechnungswerk", "Abbrechen")), 1)]),
				_: 1
			}), H(U(L), {
				variant: e.destructive ? "error" : "primary",
				onClick: n[1] ||= (e) => t.$emit("confirm")
			}, {
				default: j(() => [z(q(e.confirmLabel || U(A)("rechnungswerk", "Bestätigen")), 1)]),
				_: 1
			}, 8, ["variant"])]),
			default: j(() => [Y("div", Xf, [Y("p", Zf, q(e.message), 1)])]),
			_: 1
		}, 8, ["open", "name"]));
	}
}), [["__scopeId", "data-v-54981555"]]), $f = { class: "send-modal" }, ep = { class: "send-modal__hint" }, tp = { class: "field" }, np = { class: "field" }, rp = { class: "field" }, ip = { class: "actions" }, ap = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "SendInvoiceDialog",
	props: {
		open: { type: Boolean },
		invoice: {},
		defaultBody: {},
		saving: { type: Boolean },
		kind: {}
	},
	emits: ["close", "send"],
	setup(e, { emit: t }) {
		let n = e, r = W(() => n.kind === "quote"), i = W(() => r.value ? A("rechnungswerk", "Angebot an Kunde senden") : A("rechnungswerk", "Rechnung an Kunde senden")), a = W(() => r.value ? A("rechnungswerk", "Das Angebot wird als PDF angehängt.") : A("rechnungswerk", "Die E-Rechnung wird als ZUGFeRD-PDF angehängt.")), o = t, c = X(null), l = s({
			to: "",
			subject: "",
			body: ""
		}), u = W(() => /\S+@\S+\.\S+/.test(l.to.trim()) && l.subject.trim() !== "");
		M(() => n.open, (e) => {
			if (!e) return;
			let t = n.invoice;
			l.to = t?.recipientEmail ?? "", r.value ? l.subject = t?.number ? A("rechnungswerk", "Angebot {number}", { number: t.number }) : A("rechnungswerk", "Ihr Angebot") : l.subject = t?.number ? A("rechnungswerk", "Rechnung {number}", { number: t.number }) : A("rechnungswerk", "Ihre Rechnung"), l.body = n.defaultBody, et(() => c.value?.focus());
		}, { immediate: !0 });
		function d() {
			u.value && o("send", {
				to: l.to.trim(),
				subject: l.subject.trim(),
				body: l.body
			});
		}
		return (t, n) => e.open ? (g(), V(U(lt), {
			key: 0,
			name: i.value,
			onKeydown: n[4] ||= de((e) => U(Ss)(e, () => t.$emit("close")), ["esc"]),
			onClose: n[5] ||= (e) => t.$emit("close")
		}, {
			default: j(() => [Y("div", $f, [
				Y("h2", null, q(i.value), 1),
				Y("p", ep, q(a.value), 1),
				Y("label", tp, [Y("span", null, q(U(A)("rechnungswerk", "Empfänger-E-Mail")) + " *", 1), P(Y("input", {
					ref_key: "toInput",
					ref: c,
					"onUpdate:modelValue": n[0] ||= (e) => l.to = e,
					class: "input",
					type: "email"
				}, null, 512), [[J, l.to]])]),
				Y("label", np, [Y("span", null, q(U(A)("rechnungswerk", "Betreff")) + " *", 1), P(Y("input", {
					"onUpdate:modelValue": n[1] ||= (e) => l.subject = e,
					class: "input",
					type: "text"
				}, null, 512), [[J, l.subject]])]),
				Y("label", rp, [Y("span", null, q(U(A)("rechnungswerk", "Nachricht")), 1), P(Y("textarea", {
					"onUpdate:modelValue": n[2] ||= (e) => l.body = e,
					class: "input",
					rows: "6"
				}, null, 512), [[J, l.body]])]),
				Y("div", ip, [H(U(L), { onClick: n[3] ||= (e) => t.$emit("close") }, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), H(U(L), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					icon: j(() => [H(pd, { size: 20 })]),
					default: j(() => [z(" " + q(U(A)("rechnungswerk", "Senden")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : R("", !0);
	}
}), [["__scopeId", "data-v-2f5a808a"]]), op = () => hs("/quotes"), sp = (e) => hs(`/quotes/${e}`), cp = (e) => gs("/quotes", { data: e }), lp = (e, t) => _s(`/quotes/${e}`, { data: t }), up = (e) => ys(`/quotes/${e}`), dp = (e) => gs(`/quotes/${e}/commit`, {}), fp = (e) => gs(`/quotes/${e}/accept`, {}), pp = (e) => gs(`/quotes/${e}/reject`, {}), mp = (e) => gs(`/quotes/${e}/convert`, {}), hp = (e) => gs(`/quotes/${e}/revise`, {}), gp = (e) => ps(`/quotes/${e}/pdf`), _p = (e) => ps(`/quotes/${e}/preview`) + "?t=" + Date.now(), vp = (e) => {
	let t = document.createElement("a");
	t.href = gp(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, yp = (e, t) => gs(`/quotes/${e}/send`, t), bp = sn("quote", () => {
	let e = X([]), t = X(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await op();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => sp(e);
	async function i(e) {
		let t = await cp(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await lp(e, t);
		return await n(), r;
	}
	async function o(t) {
		await up(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await dp(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await fp(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await pp(e);
		return await n(), t;
	}
	async function u(e) {
		let t = await mp(e);
		return await n(), t;
	}
	async function d(e) {
		let t = await hp(e);
		return await n(), t;
	}
	return {
		quotes: e,
		loading: t,
		fetchAll: n,
		get: r,
		create: i,
		update: a,
		remove: o,
		commit: s,
		accept: c,
		reject: l,
		convert: u,
		revise: d
	};
}), xp = () => hs("/products"), Sp = (e) => gs("/products", { data: e }), Cp = (e, t) => _s(`/products/${e}`, { data: t }), wp = (e) => ys(`/products/${e}`), Tp = sn("product", () => {
	let e = X([]), t = X(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await xp();
		} finally {
			t.value = !1;
		}
	}
	async function r(t) {
		let n = await Sp(t);
		return e.value.push(n), e.value.sort((e, t) => e.name.localeCompare(t.name)), n;
	}
	async function i(t, n) {
		let r = await Cp(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), e.value.sort((e, t) => e.name.localeCompare(t.name)), r;
	}
	async function a(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await wp(t);
		} catch (t) {
			throw r && n >= 0 && e.value.splice(n, 0, r), t;
		}
	}
	return {
		products: e,
		loading: t,
		fetchAll: n,
		create: r,
		update: i,
		remove: a
	};
}), Ep = () => hs("/text-snippets"), Dp = (e) => gs("/text-snippets", { data: e }), Op = (e, t) => _s(`/text-snippets/${e}`, { data: t }), kp = (e) => ys(`/text-snippets/${e}`);
//#endregion
//#region src/stores/textSnippetStore.ts
function Ap(e) {
	e.sort((e, t) => e.docType.localeCompare(t.docType) || e.slot.localeCompare(t.slot) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
}
var jp = sn("textSnippet", () => {
	let e = X([]), t = X(!1), n = X(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Ep(), n.value = !0;
		} finally {
			t.value = !1;
		}
	}
	async function i() {
		!n.value && !t.value && await r();
	}
	function a(t) {
		if (t.isDefault) for (let n of e.value) n.id !== t.id && n.docType === t.docType && n.slot === t.slot && (n.isDefault = !1);
	}
	async function o(t) {
		let n = await Dp(t);
		return e.value.push(n), a(n), Ap(e.value), n;
	}
	async function s(t, n) {
		let r = await Op(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), a(r), Ap(e.value), r;
	}
	async function c(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await kp(t);
		} catch (t) {
			throw r && n >= 0 && e.value.splice(n, 0, r), t;
		}
	}
	function l(t, n) {
		return e.value.filter((e) => e.docType === t && e.slot === n).sort((e, t) => Number(t.isDefault) - Number(e.isDefault) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
	}
	function u(t, n) {
		return e.value.find((e) => e.docType === t && e.slot === n && e.isDefault)?.content ?? "";
	}
	return {
		snippets: e,
		loading: t,
		loaded: n,
		fetchAll: r,
		ensureLoaded: i,
		create: o,
		update: s,
		remove: c,
		forSlot: l,
		defaultContent: u
	};
}), Mp = () => hs("/me/contact"), Np = (e) => vs("/me/contact", { data: e }), Pp = { class: "rw-view" }, Fp = { class: "rw-editor-head" }, Ip = {
	key: 0,
	class: "rw-status-group"
}, Lp = { class: "rw-status-tag" }, Rp = {
	key: 0,
	class: "rw-pill"
}, zp = {
	key: 1,
	class: "rw-pill"
}, Bp = ["title"], Vp = { class: "rw-section" }, Hp = { class: "rw-form-row" }, Up = { class: "rw-field invoice-no" }, Wp = ["value"], Gp = { class: "rw-field" }, Kp = ["readonly"], qp = { class: "rw-field" }, Jp = ["readonly"], Yp = { class: "rw-hint" }, Xp = { class: "more" }, Zp = { class: "rw-form-row" }, Qp = { class: "rw-field" }, $p = ["readonly"], em = { class: "rw-field" }, tm = ["readonly"], nm = {
	key: 0,
	class: "rw-field"
}, rm = ["readonly", "placeholder"], im = {
	key: 1,
	class: "rw-field",
	"aria-hidden": "true"
}, am = { class: "rw-form-row" }, om = { class: "rw-field" }, sm = ["readonly"], cm = { class: "rw-field" }, lm = ["readonly"], um = { class: "rw-section" }, dm = {
	key: 0,
	class: "rw-form-row"
}, fm = { class: "rw-field" }, pm = { class: "rw-hint" }, mm = { class: "rw-form-row" }, hm = { class: "rw-field" }, gm = ["value"], _m = { class: "rw-field" }, vm = ["readonly"], ym = { class: "rw-form-row" }, bm = { class: "rw-field" }, xm = ["readonly"], Sm = { class: "rw-hint" }, Cm = { class: "rw-form-row" }, wm = { class: "rw-field" }, Tm = ["readonly"], Em = { class: "rw-field rw-field--narrow" }, Dm = ["readonly"], Om = { class: "rw-field" }, km = ["readonly"], Am = { class: "rw-field rw-field--country" }, jm = { class: "rw-form-row" }, Mm = { class: "rw-field" }, Nm = ["readonly"], Pm = { class: "rw-field" }, Fm = ["readonly"], Im = { class: "rw-field" }, Lm = ["readonly"], Rm = { class: "rw-section" }, zm = { class: "rw-form-row" }, Bm = { class: "rw-field" }, Vm = ["readonly"], Hm = { class: "rw-field" }, Um = ["readonly"], Wm = { class: "rw-field" }, Gm = ["readonly"], Km = { class: "rw-hint" }, qm = { class: "rw-section" }, Jm = { class: "rw-section-head" }, Ym = { class: "rw-field" }, Xm = ["readonly", "placeholder"], Zm = { class: "rw-section" }, Qm = { class: "rw-section" }, $m = { class: "rw-form-row" }, eh = { class: "rw-field" }, th = ["disabled"], nh = { value: "" }, rh = { value: "reverse_charge" }, ih = { value: "intra_community" }, ah = { value: "export" }, oh = { class: "rw-totals" }, sh = { class: "rw-kpi-card" }, ch = { class: "rw-kpi-row" }, lh = { class: "rw-kpi-row rw-kpi-row--grand" }, uh = {
	key: 4,
	class: "rw-section"
}, dh = { class: "rw-form-row" }, fh = { class: "rw-field payterm-days" }, ph = ["readonly"], mh = { class: "rw-field" }, hh = ["value"], gh = { class: "rw-field" }, _h = ["readonly", "placeholder"], vh = {
	key: 5,
	class: "rw-section"
}, yh = { class: "rw-form-row" }, bh = { class: "rw-field payterm-days" }, xh = ["readonly"], Sh = { class: "rw-field rw-checkbox-field" }, Ch = { class: "rw-checkbox-row" }, wh = ["disabled"], Th = { class: "rw-hint" }, Eh = { class: "rw-section" }, Dh = { class: "rw-section-head" }, Oh = { class: "rw-field" }, kh = ["readonly", "placeholder"], Ah = {
	key: 6,
	class: "rw-section"
}, jh = [
	"onUpdate:modelValue",
	"readonly",
	"aria-label"
], Mh = { class: "rw-hint" }, Nh = { class: "rw-action-bar" }, Ph = ["src", "title"], Fh = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "InvoiceEditorView",
	props: { id: {} },
	setup(e) {
		let t = e, n = Me(), r = Ae(), i = Hl(), a = bp(), o = Tp(), c = Zl(), l = jp(), d = W(() => typeof n.name == "string" && n.name.startsWith("quote")), f = W(() => d.value ? a : i), m = W(() => d.value ? "quote" : "invoice"), h = W(() => l.forSlot(m.value, "opening")), _ = W(() => l.forSlot(m.value, "closing"));
		function v(e) {
			N.greeting = e.content ?? "";
		}
		function y(e) {
			N.extraText = e.content ?? "";
		}
		let te = W(() => d.value ? "quotes" : "invoices"), b = W(() => d.value ? "quote-detail" : "invoice-detail"), x = X(null), S = X([hf()]), ne = X([]), w = X(""), T = X(""), E = X(!1), ie = X(!1), D = X(!1), oe = X(!1), se = X(""), k = X(null), ce = () => ({
			customerId: null,
			recipientName: "",
			recipientEmail: "",
			recipientAddressAddition: "",
			recipientAddress: "",
			recipientPostalCode: "",
			recipientCity: "",
			recipientCountry: "DE",
			recipientVatId: "",
			recipientContactId: "",
			recipientContactPerson: "",
			recipientPhone: "",
			sellerContactPerson: "",
			sellerContactPhone: "",
			sellerContactEmail: "",
			performanceDate: "",
			performancePeriodStart: "",
			performancePeriodEnd: "",
			referenceNumber: "",
			orderNumber: "",
			buyerReference: "",
			contractNumber: "",
			projectReference: "",
			specialTaxCase: "",
			greeting: "",
			extraText: "",
			paymentTermDays: "",
			discountTerms: "",
			validUntil: "",
			offerFreeform: !1
		}), N = s(ce()), le = [
			"reverse_charge",
			"intra_community",
			"export"
		], ue = W(() => (c.settings?.smallBusiness ?? !1) || le.includes(N.specialTaxCase)), F = W(() => {
			let e = Number.parseInt(String(N.paymentTermDays), 10);
			if (Number.isNaN(e)) return "";
			let t = (e) => /* @__PURE__ */ new Date(`${e}T12:00:00`);
			if (x.value?.dueDate) return t(x.value.dueDate).toLocaleDateString();
			let n = x.value?.issueDate ? t(x.value.issueDate) : /* @__PURE__ */ new Date();
			return n.setDate(n.getDate() + e), n.toLocaleDateString();
		}), I = W(() => x.value !== null && x.value.status !== "draft"), de = {
			draft: Tc,
			committed: wo,
			cancelled: Mc
		}, fe = {
			pending: Kc,
			confirmed: zc,
			unknown: $c,
			failed: Mc
		}, pe = (e) => de[e] ?? Tc, me = (e) => fe[e] ?? $c, he = W(() => x.value ? d.value && x.value.quoteStatus ? A("rechnungswerk", ou[x.value.quoteStatus] ?? x.value.status) : A("rechnungswerk", iu[x.value.status]) : ""), ge = W(() => x.value ? A("rechnungswerk", au[x.value.invoiceType]) : ""), _e = W(() => {
			let e = {
				pending: A("rechnungswerk", "DATEV: gesendet"),
				confirmed: A("rechnungswerk", "DATEV: bestätigt"),
				failed: A("rechnungswerk", "DATEV: abgelehnt"),
				unknown: A("rechnungswerk", "DATEV: Antwort prüfen")
			}, t = x.value?.datevStatus;
			return t ? e[t] ?? "" : "";
		}), ve = W(() => x.value ? x.value.relatedNumber ? A("rechnungswerk", "{type} zu Rechnung {number}", {
			type: ge.value,
			number: x.value.relatedNumber
		}) : ge.value : ""), ye = W(() => {
			if (d.value) return A("rechnungswerk", "Das Angebot erhält eine endgültige Angebotsnummer und ist danach unveränderbar. Fortfahren?");
			let e = A("rechnungswerk", "Die Rechnung erhält eine endgültige Nummer und ist danach unveränderbar. Korrektur nur per Storno. Fortfahren?"), t = c.settings;
			return t?.datevAutoSend && t.datevUploadMail && (e += "\n\n" + A("rechnungswerk", "Beim Festschreiben wird automatisch eine E-Rechnung an DATEV ({mail}) gesendet.", { mail: t.datevUploadMail })), e;
		}), be = W(() => {
			let e = (x.value?.greeting ?? l.defaultContent(m.value, "opening")).trim(), t = (x.value?.extraText ?? l.defaultContent(m.value, "closing")).trim(), n = d.value ? A("rechnungswerk", "anbei erhalten Sie unser Angebot als PDF.") : A("rechnungswerk", "anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).");
			return [e === "" ? n : e, t].filter((e) => e !== "").join("\n\n");
		}), xe = W(() => x.value ? x.value.number ?? A("rechnungswerk", "Entwurf") : d.value ? A("rechnungswerk", "Neues Angebot") : A("rechnungswerk", "Neue Rechnung")), B = W(() => yf(S.value.map((e) => ({
			taxRateBp: e.taxRateBp,
			lineTotalCents: vf(e.quantity, mu(e.priceInput))
		})), ue.value)), Se = 0;
		p(async () => {
			let e = ++Se;
			try {
				if (await Promise.all([
					o.fetchAll(),
					c.fetch(),
					l.ensureLoaded()
				]), e !== Se) return;
				t.id ? await Te(Number(t.id), e) : await we(e);
			} catch (e) {
				Qe(e, A("rechnungswerk", "Laden fehlgeschlagen"));
			}
		}), M(() => [n.name, t.id], async ([, e]) => {
			let t = ++Se;
			try {
				if (!e) Ce(), await we(t);
				else {
					let n = x.value !== null && x.value.invoiceType === "quote" !== d.value;
					(x.value?.id !== Number(e) || n) && (Ce(), await Te(Number(e), t));
				}
			} catch (e) {
				Qe(e, A("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function Ce() {
			x.value = null, S.value = [hf()], ne.value = [], w.value = "", T.value = "", D.value = !1, oe.value = !1, se.value = "", k.value = null, Object.assign(N, ce());
		}
		async function we(e = Se) {
			let t = c.settings;
			N.greeting = l.defaultContent(m.value, "opening"), N.extraText = l.defaultContent(m.value, "closing"), N.paymentTermDays = d.value ? "" : t?.defaultPaymentTermDays ?? "";
			let n = {
				person: "",
				phone: "",
				email: ""
			};
			try {
				n = await Mp();
			} catch {}
			e === Se && (N.sellerContactPerson = n.person || (t?.contactPerson ?? ""), N.sellerContactPhone = n.phone || (t?.contactPhone ?? ""), N.sellerContactEmail = n.email || (t?.contactEmail ?? ""));
		}
		async function Te(e, t = Se) {
			let n = await f.value.get(e);
			t === Se && (x.value = n, N.customerId = n.customerId ?? null, N.recipientName = n.recipientName ?? "", N.recipientEmail = n.recipientEmail ?? "", N.recipientAddressAddition = n.recipientAddressAddition ?? "", N.recipientAddress = n.recipientAddress ?? "", N.recipientPostalCode = n.recipientPostalCode ?? "", N.recipientCity = n.recipientCity ?? "", N.recipientCountry = n.recipientCountry ?? "DE", N.recipientVatId = n.recipientVatId ?? "", N.recipientContactId = n.recipientContactId ?? "", N.recipientContactPerson = n.recipientContactPerson ?? "", N.recipientPhone = n.recipientPhone ?? "", N.sellerContactPerson = n.sellerContactPerson ?? "", N.sellerContactPhone = n.sellerContactPhone ?? "", N.sellerContactEmail = n.sellerContactEmail ?? "", N.performancePeriodStart = n.performancePeriodStart ?? n.performanceDate ?? "", N.performancePeriodEnd = n.performancePeriodEnd ?? "", N.referenceNumber = n.referenceNumber ?? "", N.orderNumber = n.orderNumber ?? "", N.buyerReference = n.buyerReference ?? "", N.contractNumber = n.contractNumber ?? "", N.projectReference = n.projectReference ?? "", ne.value = [...n.notes ?? []], N.specialTaxCase = n.specialTaxCase ?? "", N.greeting = n.greeting ?? "", N.extraText = n.extraText ?? "", N.paymentTermDays = n.paymentTermDays ?? "", N.discountTerms = n.discountTerms ?? "", N.validUntil = n.validUntil ?? "", N.offerFreeform = n.offerFreeform ?? !1, S.value = n.items.length > 0 ? n.items.map(_f) : [hf()]);
		}
		function Ee() {
			ne.value.push("");
		}
		function De(e) {
			ne.value.splice(e, 1);
		}
		function Oe(e) {
			N.customerId = e.id, N.recipientName = e.name, N.recipientContactId = "", N.recipientEmail = e.email ?? "", N.recipientAddressAddition = e.addressAddition ?? "", N.recipientAddress = e.address ?? "", N.recipientPostalCode = e.postalCode ?? "", N.recipientCity = e.city ?? "", N.recipientCountry = e.country ?? "DE", N.recipientVatId = e.vatId ?? "", N.recipientContactPerson = e.contactPerson ?? "", N.recipientPhone = e.phone ?? "", e.defaultPaymentTermDays != null && (N.paymentTermDays = e.defaultPaymentTermDays);
		}
		function ke(e) {
			N.customerId = null, N.recipientName = e.name, N.recipientEmail = e.email, e.phone && (N.recipientPhone = e.phone), N.recipientAddressAddition = "", N.recipientAddress = e.address, N.recipientPostalCode = e.postalCode, N.recipientCity = e.city, e.country && (N.recipientCountry = e.country);
		}
		function je() {
			let e = N.performancePeriodStart, t = N.performancePeriodEnd, n = e && t ? {
				performanceDate: "",
				performancePeriodStart: e,
				performancePeriodEnd: t
			} : {
				performanceDate: e || t || "",
				performancePeriodStart: "",
				performancePeriodEnd: ""
			}, r = {
				...N,
				...n,
				paymentTermDays: N.paymentTermDays === "" ? null : Number(N.paymentTermDays),
				notes: ne.value.map((e) => e.trim()).filter((e) => e !== ""),
				items: S.value.filter((e) => e.name.trim() !== "").map((e) => ({
					productId: e.productId,
					name: e.name.trim(),
					description: e.description.trim() === "" ? null : e.description.trim(),
					quantity: e.quantity,
					unitCode: e.unitCode,
					unitLabel: e.unitLabel.trim() === "" ? null : e.unitLabel.trim(),
					unitPriceInput: e.priceInput,
					taxRateBp: e.taxRateBp
				}))
			};
			return d.value ? (r.validUntil = N.validUntil === "" ? null : N.validUntil, r.offerFreeform = N.offerFreeform, r.paymentTermDays = null, r.discountTerms = null) : (delete r.validUntil, delete r.offerFreeform), r;
		}
		async function Ne() {
			w.value = "", E.value = !0;
			try {
				let e;
				return x.value ? e = await f.value.update(x.value.id, je()) : (e = await f.value.create(je()), r.replace({
					name: b.value,
					params: { id: String(e.id) }
				})), x.value = e, e;
			} catch (e) {
				return Qe(e, A("rechnungswerk", "Speichern fehlgeschlagen")), null;
			} finally {
				E.value = !1;
			}
		}
		async function Pe() {
			let e = await Ne();
			e && (se.value = d.value ? _p(e.id) : zl(e.id), oe.value = !0);
		}
		function Fe(e) {
			e || (oe.value = !1, se.value = "");
		}
		function Ie() {
			k.value = "finalize";
		}
		function Le() {
			k.value = "delete";
		}
		function Re() {
			k.value = "cancel";
		}
		function ze() {
			k.value = "convert";
		}
		function G() {
			k.value = "revise";
		}
		let Be = W(() => d.value && x.value?.status === "committed" && !["converted", "superseded"].includes(x.value?.quoteStatus ?? "")), Ve = W(() => d.value && x.value?.status === "committed" && [
			"open",
			"expired",
			"accepted"
		].includes(x.value?.quoteStatus ?? "")), He = W(() => d.value && x.value?.status === "committed" && ["open", "expired"].includes(x.value?.quoteStatus ?? ""));
		function Ue() {
			x.value && (d.value ? vp(x.value.id) : Bl(x.value.id));
		}
		async function We() {
			k.value = null;
			let e = await Ne();
			if (e) {
				E.value = !0;
				try {
					let t = await f.value.commit(e.id);
					if (x.value = t, T.value = "", d.value) T.value = A("rechnungswerk", "Angebot festgeschrieben.");
					else {
						let e = t.datevMailSent;
						e === !0 ? T.value = A("rechnungswerk", "Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.") : e === null && (w.value = A("rechnungswerk", "Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
					}
				} catch (e) {
					Qe(e, A("rechnungswerk", "Festschreiben fehlgeschlagen"));
				} finally {
					E.value = !1;
				}
			}
		}
		async function Ge() {
			if (x.value) {
				E.value = !0, w.value = "";
				try {
					x.value = await a.accept(x.value.id), T.value = A("rechnungswerk", "Angebot als angenommen markiert.");
				} catch (e) {
					Qe(e, A("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					E.value = !1;
				}
			}
		}
		async function Ke() {
			if (x.value) {
				E.value = !0, w.value = "";
				try {
					x.value = await a.reject(x.value.id), T.value = A("rechnungswerk", "Angebot als abgelehnt markiert.");
				} catch (e) {
					Qe(e, A("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					E.value = !1;
				}
			}
		}
		async function qe() {
			if (k.value = null, x.value) {
				E.value = !0, w.value = "";
				try {
					let e = await a.convert(x.value.id);
					r.push({
						name: "invoice-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					Qe(e, A("rechnungswerk", "Übernahme fehlgeschlagen"));
				} finally {
					E.value = !1;
				}
			}
		}
		async function Je() {
			if (k.value = null, x.value) {
				E.value = !0, w.value = "";
				try {
					let e = await a.revise(x.value.id);
					r.push({
						name: "quote-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					Qe(e, A("rechnungswerk", "Revidieren fehlgeschlagen"));
				} finally {
					E.value = !1;
				}
			}
		}
		async function Ye(e) {
			if (x.value) {
				ie.value = !0, w.value = "";
				try {
					d.value ? (await yp(x.value.id, e), D.value = !1, T.value = A("rechnungswerk", "Angebot an {to} gesendet.", { to: e.to })) : (await Vl(x.value.id, e), D.value = !1, T.value = A("rechnungswerk", "Rechnung an {to} gesendet.", { to: e.to }));
				} catch (e) {
					Qe(e, A("rechnungswerk", "Versand fehlgeschlagen"));
				} finally {
					ie.value = !1;
				}
			}
		}
		async function Xe() {
			if (k.value = null, !x.value) {
				Q();
				return;
			}
			E.value = !0;
			try {
				await f.value.remove(x.value.id), Q();
			} catch (e) {
				Qe(e, A("rechnungswerk", "Löschen fehlgeschlagen"));
			} finally {
				E.value = !1;
			}
		}
		async function Ze() {
			if (k.value = null, x.value) {
				E.value = !0;
				try {
					let e = await i.cancel(x.value.id), t = e.datevMailSent;
					await Te(e.id), T.value = "", t === !0 ? T.value = A("rechnungswerk", "Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.") : t === null && (w.value = A("rechnungswerk", "Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
				} catch (e) {
					Qe(e, A("rechnungswerk", "Stornieren fehlgeschlagen"));
				} finally {
					E.value = !1;
				}
			}
		}
		function Q() {
			r.push({ name: te.value });
		}
		function Qe(e, t) {
			w.value = e.message ?? t, console.error("[rechnungswerk] editor:", e);
		}
		return (e, t) => {
			let n = re("tooltip");
			return g(), K("div", Pp, [
				Y("div", Fp, [H(U(Et), null, {
					default: j(() => [H(U(wt), {
						name: d.value ? U(A)("rechnungswerk", "Angebote") : U(A)("rechnungswerk", "Rechnungen"),
						to: { name: te.value }
					}, null, 8, ["name", "to"]), H(U(wt), { name: xe.value }, null, 8, ["name"])]),
					_: 1
				}), x.value ? (g(), K("span", Ip, [
					Y("span", Lp, [(g(), V(ae(pe(x.value.status)), {
						size: 18,
						class: Z(["rw-sicon", `rw-sicon--${x.value.status}`])
					}, null, 8, ["class"])), z(" " + q(he.value), 1)]),
					!d.value && x.value.invoiceType !== "invoice" ? P((g(), K("span", Rp, [z(q(ge.value), 1)])), [[n, ve.value]]) : R("", !0),
					d.value && x.value.relatedQuoteNumber ? (g(), K("span", zp, q(U(A)("rechnungswerk", "Revision von {number}", { number: x.value.relatedQuoteNumber })), 1)) : R("", !0),
					x.value.datevStatus && _e.value ? (g(), K("span", {
						key: 2,
						class: "rw-status-tag",
						title: U(A)("rechnungswerk", "DATEV-Übergabe")
					}, [(g(), V(ae(me(x.value.datevStatus)), {
						size: 18,
						class: Z(["rw-sicon", `rw-sicon--datev-${x.value.datevStatus}`])
					}, null, 8, ["class"])), z(" " + q(_e.value), 1)], 8, Bp)) : R("", !0)
				])) : R("", !0)]),
				w.value ? (g(), V(U(pt), {
					key: 0,
					type: "error",
					text: w.value
				}, null, 8, ["text"])) : R("", !0),
				T.value ? (g(), V(U(pt), {
					key: 1,
					type: "success",
					text: T.value
				}, null, 8, ["text"])) : R("", !0),
				I.value ? (g(), V(U(pt), {
					key: 2,
					type: "info",
					text: d.value ? U(A)("rechnungswerk", "Dieses Angebot ist festgeschrieben und kann nicht mehr geändert werden.") : U(A)("rechnungswerk", "Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.")
				}, null, 8, ["text"])) : R("", !0),
				!d.value && x.value?.documentBackfilled ? (g(), V(U(pt), {
					key: 3,
					type: "info",
					text: U(A)("rechnungswerk", "Dieser Beleg wurde nicht beim Festschreiben abgelegt, sondern später aus dem Datensatz erzeugt. Beträge, Positionen und Steuerausweis stimmen; Firmendaten und Layout entsprechen dem heutigen Stand, nicht dem von damals.")
				}, null, 8, ["text"])) : R("", !0),
				Y("section", Vp, [
					Y("h3", null, q(d.value ? U(A)("rechnungswerk", "Angebotsdaten") : U(A)("rechnungswerk", "Rechnungsdaten")), 1),
					Y("div", Hp, [
						Y("label", Up, [Y("span", null, q(d.value ? U(A)("rechnungswerk", "Angebotsnummer") : U(A)("rechnungswerk", "Rechnungsnummer")), 1), Y("input", {
							class: "rw-input",
							type: "text",
							readonly: "",
							value: x.value?.number ?? U(A)("rechnungswerk", "(wird vergeben)")
						}, null, 8, Wp)]),
						Y("label", Gp, [Y("span", null, q(d.value ? U(A)("rechnungswerk", "Geplanter Leistungszeitraum (optional)") : U(A)("rechnungswerk", "Leistungsdatum /-zeitraum")), 1), P(Y("input", {
							"onUpdate:modelValue": t[0] ||= (e) => N.performancePeriodStart = e,
							class: "rw-input",
							type: "date",
							readonly: I.value
						}, null, 8, Kp), [[J, N.performancePeriodStart]])]),
						Y("label", qp, [Y("span", null, q(U(A)("rechnungswerk", "bis (optional)")), 1), P(Y("input", {
							"onUpdate:modelValue": t[1] ||= (e) => N.performancePeriodEnd = e,
							class: "rw-input",
							type: "date",
							readonly: I.value
						}, null, 8, Jp), [[J, N.performancePeriodEnd]])])
					]),
					Y("p", Yp, q(d.value ? U(A)("rechnungswerk", "Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.") : U(A)("rechnungswerk", "Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.")), 1),
					Y("details", Xp, [
						Y("summary", null, q(d.value ? U(A)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)") : U(A)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)")), 1),
						Y("div", Zp, [
							Y("label", Qp, [Y("span", null, q(U(A)("rechnungswerk", "Referenznummer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[2] ||= (e) => N.referenceNumber = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, $p), [[J, N.referenceNumber]])]),
							Y("label", em, [Y("span", null, q(U(A)("rechnungswerk", "Bestellnummer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[3] ||= (e) => N.orderNumber = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, tm), [[J, N.orderNumber]])]),
							d.value ? (g(), K("span", im)) : (g(), K("label", nm, [Y("span", null, q(U(A)("rechnungswerk", "Käuferreferenz / Leitweg-ID (BT-10)")), 1), P(Y("input", {
								"onUpdate:modelValue": t[4] ||= (e) => N.buyerReference = e,
								class: "rw-input",
								type: "text",
								readonly: I.value,
								placeholder: U(A)("rechnungswerk", "nur für öffentliche Auftraggeber")
							}, null, 8, rm), [[J, N.buyerReference]])]))
						]),
						Y("div", am, [
							Y("label", om, [Y("span", null, q(U(A)("rechnungswerk", "Vertragsnummer (BT-12)")), 1), P(Y("input", {
								"onUpdate:modelValue": t[5] ||= (e) => N.contractNumber = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, sm), [[J, N.contractNumber]])]),
							Y("label", cm, [Y("span", null, q(U(A)("rechnungswerk", "Objekt-/Projektkennung (BT-18)")), 1), P(Y("input", {
								"onUpdate:modelValue": t[6] ||= (e) => N.projectReference = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, lm), [[J, N.projectReference]])]),
							t[36] ||= Y("span", {
								class: "rw-field",
								"aria-hidden": "true"
							}, null, -1)
						])
					])
				]),
				Y("section", um, [
					Y("h3", null, q(U(A)("rechnungswerk", "Empfänger")), 1),
					I.value ? R("", !0) : (g(), K("div", dm, [Y("label", fm, [
						Y("span", null, q(U(A)("rechnungswerk", "Kunde übernehmen")), 1),
						H(of, { onSelect: Oe }),
						Y("span", pm, q(U(A)("rechnungswerk", "Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.")), 1)
					])])),
					Y("div", mm, [Y("label", hm, [Y("span", null, q(U(A)("rechnungswerk", "Name")), 1), I.value ? (g(), K("input", {
						key: 1,
						class: "rw-input",
						type: "text",
						readonly: "",
						value: N.recipientName
					}, null, 8, gm)) : (g(), V(Hd, {
						key: 0,
						modelValue: N.recipientName,
						"onUpdate:modelValue": t[7] ||= (e) => N.recipientName = e,
						onSelect: ke
					}, null, 8, ["modelValue"]))]), Y("label", _m, [Y("span", null, q(U(A)("rechnungswerk", "E-Mail")), 1), P(Y("input", {
						"onUpdate:modelValue": t[8] ||= (e) => N.recipientEmail = e,
						class: "rw-input",
						type: "email",
						readonly: I.value
					}, null, 8, vm), [[J, N.recipientEmail]])])]),
					Y("div", ym, [Y("label", bm, [
						Y("span", null, q(U(A)("rechnungswerk", "Adresszusatz")), 1),
						P(Y("input", {
							"onUpdate:modelValue": t[9] ||= (e) => N.recipientAddressAddition = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, xm), [[J, N.recipientAddressAddition]]),
						Y("span", Sm, q(U(A)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					])]),
					Y("div", Cm, [
						Y("label", wm, [Y("span", null, q(U(A)("rechnungswerk", "Straße")), 1), P(Y("input", {
							"onUpdate:modelValue": t[10] ||= (e) => N.recipientAddress = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Tm), [[J, N.recipientAddress]])]),
						Y("label", Em, [Y("span", null, q(U(A)("rechnungswerk", "PLZ")), 1), P(Y("input", {
							"onUpdate:modelValue": t[11] ||= (e) => N.recipientPostalCode = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Dm), [[J, N.recipientPostalCode]])]),
						Y("label", Om, [Y("span", null, q(U(A)("rechnungswerk", "Ort")), 1), P(Y("input", {
							"onUpdate:modelValue": t[12] ||= (e) => N.recipientCity = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, km), [[J, N.recipientCity]])]),
						Y("label", Am, [Y("span", null, q(U(A)("rechnungswerk", "Land")), 1), H(Jd, {
							modelValue: N.recipientCountry,
							"onUpdate:modelValue": t[13] ||= (e) => N.recipientCountry = e,
							disabled: I.value
						}, null, 8, ["modelValue", "disabled"])])
					]),
					Y("div", jm, [
						Y("label", Mm, [Y("span", null, q(U(A)("rechnungswerk", "USt-IdNr. (optional)")), 1), P(Y("input", {
							"onUpdate:modelValue": t[14] ||= (e) => N.recipientVatId = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Nm), [[J, N.recipientVatId]])]),
						Y("label", Pm, [Y("span", null, q(U(A)("rechnungswerk", "Ansprechpartner (optional)")), 1), P(Y("input", {
							"onUpdate:modelValue": t[15] ||= (e) => N.recipientContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Fm), [[J, N.recipientContactPerson]])]),
						Y("label", Im, [Y("span", null, q(U(A)("rechnungswerk", "Telefon (optional)")), 1), P(Y("input", {
							"onUpdate:modelValue": t[16] ||= (e) => N.recipientPhone = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Lm), [[J, N.recipientPhone]])])
					])
				]),
				Y("section", Rm, [
					Y("h3", null, q(d.value ? U(A)("rechnungswerk", "Ansprechpartner (für dieses Angebot)") : U(A)("rechnungswerk", "Ansprechpartner (für diese Rechnung)")), 1),
					Y("div", zm, [
						Y("label", Bm, [Y("span", null, q(U(A)("rechnungswerk", "Name")), 1), P(Y("input", {
							"onUpdate:modelValue": t[17] ||= (e) => N.sellerContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Vm), [[J, N.sellerContactPerson]])]),
						Y("label", Hm, [Y("span", null, q(U(A)("rechnungswerk", "Telefon")), 1), P(Y("input", {
							"onUpdate:modelValue": t[18] ||= (e) => N.sellerContactPhone = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Um), [[J, N.sellerContactPhone]])]),
						Y("label", Wm, [Y("span", null, q(U(A)("rechnungswerk", "E-Mail")), 1), P(Y("input", {
							"onUpdate:modelValue": t[19] ||= (e) => N.sellerContactEmail = e,
							class: "rw-input",
							type: "email",
							readonly: I.value
						}, null, 8, Gm), [[J, N.sellerContactEmail]])])
					]),
					Y("p", Km, q(d.value ? U(A)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.") : U(A)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.")), 1)
				]),
				Y("section", qm, [Y("div", Jm, [Y("h3", null, q(U(A)("rechnungswerk", "Anrede & Einleitung")), 1), !I.value && h.value.length > 0 ? (g(), V(U(ft), {
					key: 0,
					menuName: U(A)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: j(() => [H(no, { size: 18 })]),
					default: j(() => [(g(!0), K(O, null, u(h.value, (e) => (g(), V(U(Tt), {
						key: e.id,
						onClick: (t) => v(e)
					}, {
						default: j(() => [z(q(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : R("", !0)]), Y("label", Ym, [Y("span", null, q(U(A)("rechnungswerk", "Anrede & Einleitung")), 1), P(Y("textarea", {
					"onUpdate:modelValue": t[20] ||= (e) => N.greeting = e,
					class: "rw-input",
					rows: "3",
					readonly: I.value,
					placeholder: U(A)("rechnungswerk", "Anrede und Einleitung – Vorgabe aus den Textbausteinen")
				}, null, 8, Xm), [[J, N.greeting]])])]),
				Y("section", Zm, [Y("h3", null, q(U(A)("rechnungswerk", "Positionen")), 1), H(Yf, {
					items: S.value,
					"onUpdate:items": t[21] ||= (e) => S.value = e,
					products: U(o).products,
					readonly: I.value,
					smallBusiness: U(c).settings?.smallBusiness ?? !1,
					defaultTaxRateBp: U(c).settings?.defaultTaxRateBp ?? 1900
				}, null, 8, [
					"items",
					"products",
					"readonly",
					"smallBusiness",
					"defaultTaxRateBp"
				])]),
				Y("section", Qm, [
					Y("h3", null, q(U(A)("rechnungswerk", "Steuer & Summen")), 1),
					Y("div", $m, [Y("label", eh, [Y("span", null, q(U(A)("rechnungswerk", "Steuerfall")), 1), P(Y("select", {
						"onUpdate:modelValue": t[22] ||= (e) => N.specialTaxCase = e,
						class: "rw-input",
						disabled: I.value
					}, [
						Y("option", nh, q(U(A)("rechnungswerk", "Regelbesteuerung")), 1),
						Y("option", rh, q(U(A)("rechnungswerk", "Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)")), 1),
						Y("option", ih, q(U(A)("rechnungswerk", "Innergemeinschaftliche Lieferung (steuerfrei)")), 1),
						Y("option", ah, q(U(A)("rechnungswerk", "Ausfuhrlieferung Drittland (steuerfrei)")), 1)
					], 8, th), [[C, N.specialTaxCase]])]), t[37] ||= Y("span", {
						class: "rw-field",
						"aria-hidden": "true"
					}, null, -1)]),
					N.specialTaxCase === "" ? R("", !0) : (g(), V(U(pt), {
						key: 0,
						type: "info",
						text: U(A)("rechnungswerk", "Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.")
					}, null, 8, ["text"])),
					Y("div", oh, [Y("div", sh, [
						Y("div", ch, [Y("span", null, q(U(A)("rechnungswerk", "Zwischensumme (netto)")), 1), Y("strong", null, q(U(gu)(B.value.subtotalCents)), 1)]),
						(g(!0), K(O, null, u(B.value.taxBreakdown, (e) => (g(), K("div", {
							key: e.rateBp,
							class: "rw-kpi-row rw-kpi-row--muted"
						}, [Y("span", null, q(U(A)("rechnungswerk", "USt {rate}", { rate: U(_u)(e.rateBp) })) + " (" + q(U(gu)(e.netCents)) + ")", 1), Y("span", null, q(U(gu)(e.taxCents)), 1)]))), 128)),
						Y("div", lh, [Y("span", null, q(U(A)("rechnungswerk", "Gesamt (brutto)")), 1), Y("strong", null, q(U(gu)(B.value.totalCents)), 1)])
					])])
				]),
				d.value ? (g(), K("section", vh, [
					Y("h3", null, q(U(A)("rechnungswerk", "Gültigkeit")), 1),
					Y("div", yh, [Y("label", bh, [Y("span", null, q(U(A)("rechnungswerk", "Gültig bis")), 1), P(Y("input", {
						"onUpdate:modelValue": t[25] ||= (e) => N.validUntil = e,
						class: "rw-input",
						type: "date",
						readonly: I.value
					}, null, 8, xh), [[J, N.validUntil]])]), Y("label", Sh, [Y("span", Ch, [P(Y("input", {
						"onUpdate:modelValue": t[26] ||= (e) => N.offerFreeform = e,
						type: "checkbox",
						disabled: I.value
					}, null, 8, wh), [[ee, N.offerFreeform]]), z(" " + q(U(A)("rechnungswerk", "Freibleibendes Angebot (unverbindlich)")), 1)])])]),
					Y("p", Th, q(U(A)("rechnungswerk", "„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.")), 1)
				])) : (g(), K("section", uh, [Y("h3", null, q(U(A)("rechnungswerk", "Zahlungsbedingungen")), 1), Y("div", dh, [
					Y("label", fh, [Y("span", null, q(U(A)("rechnungswerk", "Zahlungsziel (Tage)")), 1), P(Y("input", {
						"onUpdate:modelValue": t[23] ||= (e) => N.paymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						readonly: I.value
					}, null, 8, ph), [[J, N.paymentTermDays]])]),
					Y("label", mh, [Y("span", null, q(U(A)("rechnungswerk", "Fällig am")), 1), Y("input", {
						class: "rw-input",
						type: "text",
						readonly: "",
						value: F.value || "—"
					}, null, 8, hh)]),
					Y("label", gh, [Y("span", null, q(U(A)("rechnungswerk", "Skonto")), 1), P(Y("input", {
						"onUpdate:modelValue": t[24] ||= (e) => N.discountTerms = e,
						class: "rw-input",
						type: "text",
						readonly: I.value,
						placeholder: U(A)("rechnungswerk", "z. B. 2 % bei Zahlung bis\xA0…")
					}, null, 8, _h), [[J, N.discountTerms]])])
				])])),
				Y("section", Eh, [Y("div", Dh, [Y("h3", null, q(U(A)("rechnungswerk", "Schlusstext")), 1), !I.value && _.value.length > 0 ? (g(), V(U(ft), {
					key: 0,
					menuName: U(A)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: j(() => [H(no, { size: 18 })]),
					default: j(() => [(g(!0), K(O, null, u(_.value, (e) => (g(), V(U(Tt), {
						key: e.id,
						onClick: (t) => y(e)
					}, {
						default: j(() => [z(q(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : R("", !0)]), Y("label", Oh, [Y("span", null, q(U(A)("rechnungswerk", "Schlusstext / Anmerkungen")), 1), P(Y("textarea", {
					"onUpdate:modelValue": t[27] ||= (e) => N.extraText = e,
					class: "rw-input",
					rows: "3",
					readonly: I.value,
					placeholder: U(A)("rechnungswerk", "Schlusstext – Vorgabe aus den Textbausteinen")
				}, null, 8, kh), [[J, N.extraText]])])]),
				!I.value || ne.value.length > 0 ? (g(), K("section", Ah, [
					Y("h3", null, q(d.value ? U(A)("rechnungswerk", "Notizen / Hinweise auf dem Angebot") : U(A)("rechnungswerk", "Notizen / Hinweise auf der Rechnung")), 1),
					(g(!0), K(O, null, u(ne.value, (e, t) => (g(), K("div", {
						key: t,
						class: "rw-note-row"
					}, [P(Y("input", {
						"onUpdate:modelValue": (e) => ne.value[t] = e,
						class: "rw-input",
						type: "text",
						readonly: I.value,
						"aria-label": U(A)("rechnungswerk", "Notiz {index}", { index: t + 1 })
					}, null, 8, jh), [[J, ne.value[t]]]), I.value ? R("", !0) : (g(), V(U(L), {
						key: 0,
						variant: "tertiary",
						"aria-label": U(A)("rechnungswerk", "Notiz entfernen"),
						onClick: (e) => De(t)
					}, {
						icon: j(() => [H(od, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"]))]))), 128)),
					I.value ? R("", !0) : (g(), V(U(L), {
						key: 0,
						variant: "tertiary",
						onClick: Ee
					}, {
						icon: j(() => [H(ic, { size: 20 })]),
						default: j(() => [z(" " + q(U(A)("rechnungswerk", "Notiz hinzufügen")), 1)]),
						_: 1
					})),
					Y("p", Mh, q(d.value ? U(A)("rechnungswerk", "Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.") : U(A)("rechnungswerk", "Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.")), 1)
				])) : R("", !0),
				Y("div", Nh, [I.value ? x.value ? (g(), K(O, { key: 1 }, [
					H(U(L), { onClick: Ue }, {
						icon: j(() => [H(dc, { size: 20 })]),
						default: j(() => [z(" " + q(U(A)("rechnungswerk", "PDF herunterladen")), 1)]),
						_: 1
					}),
					H(U(L), {
						variant: d.value ? "secondary" : "primary",
						disabled: ie.value,
						onClick: t[29] ||= (e) => D.value = !0
					}, {
						icon: j(() => [H(pd, { size: 20 })]),
						default: j(() => [z(" " + q(U(A)("rechnungswerk", "An Kunde senden")), 1)]),
						_: 1
					}, 8, ["variant", "disabled"]),
					!d.value && x.value.status === "committed" ? (g(), V(U(L), {
						key: 0,
						variant: "error",
						disabled: E.value,
						onClick: Re
					}, {
						default: j(() => [z(q(U(A)("rechnungswerk", "Stornieren")), 1)]),
						_: 1
					}, 8, ["disabled"])) : R("", !0),
					d.value ? (g(), K(O, { key: 1 }, [
						He.value ? (g(), V(U(L), {
							key: 0,
							disabled: E.value,
							onClick: Ge
						}, {
							icon: j(() => [H(bl, { size: 20 })]),
							default: j(() => [z(" " + q(U(A)("rechnungswerk", "Annehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0),
						He.value ? (g(), V(U(L), {
							key: 1,
							disabled: E.value,
							onClick: Ke
						}, {
							icon: j(() => [H(Dl, { size: 20 })]),
							default: j(() => [z(" " + q(U(A)("rechnungswerk", "Ablehnen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0),
						Be.value ? (g(), V(U(L), {
							key: 2,
							disabled: E.value,
							onClick: G
						}, {
							icon: j(() => [H(Pd, { size: 20 })]),
							default: j(() => [z(" " + q(U(A)("rechnungswerk", "Revidieren")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0),
						Ve.value ? (g(), V(U(L), {
							key: 3,
							variant: "primary",
							disabled: E.value,
							onClick: ze
						}, {
							icon: j(() => [H(Dd, { size: 20 })]),
							default: j(() => [z(" " + q(U(A)("rechnungswerk", "In Rechnung übernehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0)
					], 64)) : R("", !0)
				], 64)) : R("", !0) : (g(), K(O, { key: 0 }, [
					H(U(L), {
						disabled: E.value,
						onClick: t[28] ||= (e) => Ne()
					}, {
						default: j(() => [z(q(U(A)("rechnungswerk", "Speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					H(U(L), {
						disabled: E.value,
						onClick: Pe
					}, {
						icon: j(() => [H(bd, { size: 20 })]),
						default: j(() => [z(" " + q(U(A)("rechnungswerk", "Vorschau")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					H(U(L), {
						variant: "primary",
						disabled: E.value,
						onClick: Ie
					}, {
						icon: j(() => [H(wo, { size: 20 })]),
						default: j(() => [z(" " + q(U(A)("rechnungswerk", "Festschreiben")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					x.value ? (g(), V(U(L), {
						key: 0,
						variant: "error",
						disabled: E.value,
						onClick: Le
					}, {
						default: j(() => [z(q(U(A)("rechnungswerk", "Löschen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : R("", !0)
				], 64))]),
				H(Qf, {
					open: k.value === "finalize",
					name: d.value ? U(A)("rechnungswerk", "Angebot festschreiben") : U(A)("rechnungswerk", "Rechnung festschreiben"),
					message: ye.value,
					confirmLabel: U(A)("rechnungswerk", "Festschreiben"),
					onClose: t[30] ||= (e) => k.value = null,
					onConfirm: We
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				H(Qf, {
					open: k.value === "delete",
					name: d.value ? U(A)("rechnungswerk", "Angebot löschen") : U(A)("rechnungswerk", "Entwurf löschen"),
					message: d.value ? U(A)("rechnungswerk", "Diesen Angebots-Entwurf wirklich löschen?") : U(A)("rechnungswerk", "Diesen Entwurf wirklich löschen?"),
					confirmLabel: U(A)("rechnungswerk", "Löschen"),
					destructive: "",
					onClose: t[31] ||= (e) => k.value = null,
					onConfirm: Xe
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				H(Qf, {
					open: k.value === "cancel",
					name: U(A)("rechnungswerk", "Rechnung stornieren"),
					message: U(A)("rechnungswerk", "Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?"),
					confirmLabel: U(A)("rechnungswerk", "Stornorechnung erstellen"),
					destructive: "",
					onClose: t[32] ||= (e) => k.value = null,
					onConfirm: Ze
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				H(Qf, {
					open: k.value === "convert",
					name: U(A)("rechnungswerk", "In Rechnung übernehmen"),
					message: U(A)("rechnungswerk", "Aus diesem Angebot wird ein neuer Rechnungs-Entwurf mit denselben Positionen erstellt. Das Angebot wird als „übernommen“ markiert. Fortfahren?"),
					confirmLabel: U(A)("rechnungswerk", "Rechnung erstellen"),
					onClose: t[33] ||= (e) => k.value = null,
					onConfirm: qe
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				H(Qf, {
					open: k.value === "revise",
					name: U(A)("rechnungswerk", "Angebot revidieren"),
					message: U(A)("rechnungswerk", "Es wird eine überarbeitbare Kopie als neue Angebots-Revision erstellt. Beim Festschreiben erhält sie eine Revisionsnummer (z. B. AN-…-1) und dieses Angebot wird als „revidiert“ markiert. Fortfahren?"),
					confirmLabel: U(A)("rechnungswerk", "Revision erstellen"),
					onClose: t[34] ||= (e) => k.value = null,
					onConfirm: Je
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				H(ap, {
					open: D.value,
					invoice: x.value,
					defaultBody: be.value,
					saving: ie.value,
					kind: d.value ? "quote" : "invoice",
					onClose: t[35] ||= (e) => D.value = !1,
					onSend: Ye
				}, null, 8, [
					"open",
					"invoice",
					"defaultBody",
					"saving",
					"kind"
				]),
				H(U(vt), {
					open: oe.value,
					name: U(A)("rechnungswerk", "Vorschau (Entwurf)"),
					size: "large",
					"onUpdate:open": Fe
				}, {
					default: j(() => [se.value ? (g(), K("iframe", {
						key: 0,
						src: se.value,
						class: "preview-frame",
						title: U(A)("rechnungswerk", "Vorschau (Entwurf)")
					}, null, 8, Ph)) : R("", !0)]),
					_: 1
				}, 8, ["open", "name"])
			]);
		};
	}
}), [["__scopeId", "data-v-45e1203d"]]), Ih = {
	name: "AlertCircleOutlineIcon",
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
}, Lh = ["aria-hidden", "aria-label"], Rh = [
	"fill",
	"width",
	"height"
], zh = { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" }, Bh = { key: 0 };
function Vh(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon alert-circle-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", zh, [n.title ? (g(), K("title", Bh, q(n.title), 1)) : R("", !0)])], 8, Rh))], 16, Lh);
}
var Hh = /*#__PURE__*/ $(Ih, [["render", Vh]]), Uh = { class: "rw-view" }, Wh = { class: "rw-view__head" }, Gh = { key: 2 }, Kh = { class: "rw-filterbar" }, qh = ["onClick"], Jh = { class: "rw-chip__n" }, Yh = { class: "rw-table-wrap" }, Xh = { class: "rw-table" }, Zh = { class: "num" }, Qh = ["onClick"], $h = { class: "rw-status-cell" }, eg = { class: "rw-qstatus-text" }, tg = { class: "num" }, ng = { class: "rw-col-actions" }, rg = { class: "rw-actions" }, ig = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "QuotesView",
	setup(e) {
		let t = Ae(), n = bp(), r = X(""), i = [
			{
				key: "all",
				label: "Alle"
			},
			{
				key: "open",
				label: "Offen"
			},
			{
				key: "accepted",
				label: "Angenommen"
			},
			{
				key: "rejected",
				label: "Abgelehnt"
			},
			{
				key: "converted",
				label: "Übernommen"
			}
		], a = X("all"), o = (e) => e.quoteStatus === "open" || e.quoteStatus === "expired", s = W(() => {
			let e = {
				all: n.quotes.length,
				open: 0,
				accepted: 0,
				rejected: 0,
				converted: 0
			};
			for (let t of n.quotes) o(t) && e.open++, t.quoteStatus === "accepted" && e.accepted++, t.quoteStatus === "rejected" && e.rejected++, t.quoteStatus === "converted" && e.converted++;
			return e;
		}), c = W(() => {
			switch (a.value) {
				case "open": return n.quotes.filter(o);
				case "accepted": return n.quotes.filter((e) => e.quoteStatus === "accepted");
				case "rejected": return n.quotes.filter((e) => e.quoteStatus === "rejected");
				case "converted": return n.quotes.filter((e) => e.quoteStatus === "converted");
				default: return n.quotes;
			}
		}), l = (e) => e.status === "committed" && (e.quoteStatus === "open" || e.quoteStatus === "expired" || e.quoteStatus === "accepted"), d = {
			draft: Tc,
			open: Kc,
			expired: Hh,
			accepted: zc,
			rejected: Mc,
			converted: Dd,
			superseded: Pd
		}, f = (e) => e ? d[e] ?? Tc : Tc, m = (e) => e ? A("rechnungswerk", ou[e] ?? e) : "";
		function h(e) {
			return e ? (e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e)).toLocaleDateString() : "—";
		}
		p(() => {
			n.fetchAll().catch((e) => {
				r.value = e.message ?? A("rechnungswerk", "Laden fehlgeschlagen");
			});
		});
		function _() {
			t.push({ name: "quote-new" });
		}
		function ee(e) {
			t.push({
				name: "quote-detail",
				params: { id: String(e) }
			});
		}
		function v(e) {
			vp(e);
		}
		async function y(e) {
			r.value = "";
			try {
				let r = await n.convert(e);
				t.push({
					name: "invoice-detail",
					params: { id: String(r.id) }
				});
			} catch (e) {
				r.value = e.message ?? A("rechnungswerk", "Übernahme fehlgeschlagen");
			}
		}
		return (e, t) => (g(), K("div", Uh, [
			Y("div", Wh, [Y("h2", null, q(U(A)("rechnungswerk", "Angebote")), 1), H(U(L), {
				variant: "primary",
				onClick: _
			}, {
				icon: j(() => [H(ic, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "Neues Angebot")), 1)]),
				_: 1
			})]),
			r.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: r.value
			}, null, 8, ["text"])) : R("", !0),
			!U(n).loading && U(n).quotes.length === 0 ? (g(), V(U(St), {
				key: 1,
				name: U(A)("rechnungswerk", "Noch keine Angebote"),
				description: U(A)("rechnungswerk", "Lege dein erstes Angebot an.")
			}, {
				icon: j(() => [H(Oa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : U(n).quotes.length > 0 ? (g(), K("div", Gh, [Y("div", Kh, [(g(), K(O, null, u(i, (e) => Y("button", {
				key: e.key,
				class: Z(["rw-chip", { "rw-chip--active": a.value === e.key }]),
				onClick: (t) => a.value = e.key
			}, [z(q(U(A)("rechnungswerk", e.label)) + " ", 1), Y("span", Jh, q(s.value[e.key]), 1)], 10, qh)), 64))]), Y("div", Yh, [Y("table", Xh, [Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(A)("rechnungswerk", "Status")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Nummer")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Empfänger")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Datum")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Gültig bis")), 1),
				Y("th", Zh, q(U(A)("rechnungswerk", "Brutto")), 1),
				t[0] ||= Y("th", { class: "rw-col-actions" }, null, -1)
			])]), Y("tbody", null, [(g(!0), K(O, null, u(c.value, (e) => (g(), K("tr", {
				key: e.id,
				class: Z(["rw-row-clickable", { "rw-row--overdue": e.quoteStatus === "expired" }]),
				onClick: (t) => ee(e.id)
			}, [
				Y("td", null, [Y("span", $h, [(g(), V(ae(f(e.quoteStatus)), {
					size: 20,
					class: Z(["rw-sicon", `rw-qsicon--${e.quoteStatus}`]),
					title: m(e.quoteStatus)
				}, null, 8, ["class", "title"])), Y("span", eg, q(m(e.quoteStatus)), 1)])]),
				Y("td", null, q(e.number ?? U(A)("rechnungswerk", "(Entwurf)")), 1),
				Y("td", null, q(e.recipientName ?? "—"), 1),
				Y("td", null, q(h(e.issueDate ?? e.createdAt)), 1),
				Y("td", null, [Y("span", { class: Z({ "rw-amt-overdue": e.quoteStatus === "expired" }) }, q(h(e.validUntil)), 3)]),
				Y("td", tg, q(U(gu)(e.totalCents)), 1),
				Y("td", ng, [Y("div", rg, [l(e) ? (g(), V(U(L), {
					key: 0,
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "In Rechnung übernehmen"),
					title: U(A)("rechnungswerk", "In Rechnung übernehmen"),
					onClick: F((t) => y(e.id), ["stop"])
				}, {
					icon: j(() => [H(Dd, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])) : R("", !0), e.status === "draft" ? R("", !0) : (g(), V(U(L), {
					key: 1,
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "PDF herunterladen"),
					title: U(A)("rechnungswerk", "PDF herunterladen"),
					onClick: F((t) => v(e.id), ["stop"])
				}, {
					icon: j(() => [H(dc, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				]))])])
			], 10, Qh))), 128))])])])])) : R("", !0)
		]));
	}
}), [["__scopeId", "data-v-62bdd46f"]]), ag = {
	name: "ChevronLeftIcon",
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
}, og = ["aria-hidden", "aria-label"], sg = [
	"fill",
	"width",
	"height"
], cg = { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" }, lg = { key: 0 };
function ug(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon chevron-left-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", cg, [n.title ? (g(), K("title", lg, q(n.title), 1)) : R("", !0)])], 8, sg))], 16, og);
}
var dg = /*#__PURE__*/ $(ag, [["render", ug]]), fg = {
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
}, pg = ["aria-hidden", "aria-label"], mg = [
	"fill",
	"width",
	"height"
], hg = { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }, gg = { key: 0 };
function _g(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon chevron-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", hg, [n.title ? (g(), K("title", gg, q(n.title), 1)) : R("", !0)])], 8, mg))], 16, pg);
}
var vg = /*#__PURE__*/ $(fg, [["render", _g]]), yg = {
	name: "FileDelimitedIcon",
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
}, bg = ["aria-hidden", "aria-label"], xg = [
	"fill",
	"width",
	"height"
], Sg = { d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M15 16L13 20H10L12 16H9V11H15V16M13 9V3.5L18.5 9H13Z" }, Cg = { key: 0 };
function wg(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-delimited-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Sg, [n.title ? (g(), K("title", Cg, q(n.title), 1)) : R("", !0)])], 8, xg))], 16, bg);
}
var Tg = /*#__PURE__*/ $(yg, [["render", wg]]), Eg = {
	name: "FilePdfBoxIcon",
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
}, Dg = ["aria-hidden", "aria-label"], Og = [
	"fill",
	"width",
	"height"
], kg = { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z" }, Ag = { key: 0 };
function jg(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-pdf-box-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", kg, [n.title ? (g(), K("title", Ag, q(n.title), 1)) : R("", !0)])], 8, Og))], 16, Dg);
}
var Mg = /*#__PURE__*/ $(Eg, [["render", jg]]), Ng = (e) => "?" + new URLSearchParams({
	from: e.from,
	to: e.to,
	basis: e.basis
}).toString(), Pg = (e) => hs("/reports" + Ng(e)), Fg = (e, t) => {
	let n = document.createElement("a");
	n.href = ps(`/reports/${e}`) + Ng(t), n.download = "", n.rel = "noopener", n.style.display = "none", document.body.appendChild(n), n.click(), n.remove();
};
//#endregion
//#region src/utils/reportPeriod.ts
function Ig(e) {
	let t = String(e.getMonth() + 1).padStart(2, "0"), n = String(e.getDate()).padStart(2, "0");
	return `${String(e.getFullYear()).padStart(4, "0")}-${t}-${n}`;
}
function Lg(e) {
	let [t, n, r] = e.split("-").map(Number);
	return new Date(t, n - 1, r, 12);
}
function Rg(e, t) {
	let n = t.getFullYear(), r = t.getMonth();
	switch (e) {
		case "year": return {
			from: Ig(new Date(n, 0, 1, 12)),
			to: Ig(new Date(n, 11, 31, 12))
		};
		case "quarter": {
			let e = r - r % 3;
			return {
				from: Ig(new Date(n, e, 1, 12)),
				to: Ig(new Date(n, e + 3, 0, 12))
			};
		}
		case "month": return {
			from: Ig(new Date(n, r, 1, 12)),
			to: Ig(new Date(n, r + 1, 0, 12))
		};
		case "week": {
			let e = (t.getDay() + 6) % 7, i = new Date(n, r, t.getDate() - e, 12), a = new Date(i.getFullYear(), i.getMonth(), i.getDate() + 6, 12);
			return {
				from: Ig(i),
				to: Ig(a)
			};
		}
	}
}
function zg(e, t, n) {
	let r = Lg(t.from);
	switch (e) {
		case "year": return Rg(e, new Date(r.getFullYear() + n, 0, 1, 12));
		case "quarter": return Rg(e, new Date(r.getFullYear(), r.getMonth() + 3 * n, 1, 12));
		case "month": return Rg(e, new Date(r.getFullYear(), r.getMonth() + n, 1, 12));
		case "week": return Rg(e, new Date(r.getFullYear(), r.getMonth(), r.getDate() + 7 * n, 12));
	}
}
function Bg(e) {
	let t = new Date(e.getFullYear(), e.getMonth(), e.getDate() + 3 - (e.getDay() + 6) % 7, 12), n = t.getFullYear(), r = new Date(n, 0, 1, 12), i = Math.round((t.getTime() - r.getTime()) / 864e5);
	return {
		week: Math.floor(i / 7) + 1,
		year: n
	};
}
function Vg(e) {
	return Math.floor(e.getMonth() / 3) + 1;
}
//#endregion
//#region src/views/ReportsView.vue?vue&type=script&setup=true&lang.ts
var Hg = { class: "rw-view" }, Ug = { class: "rw-view__head" }, Wg = { class: "rw-report-export" }, Gg = { class: "rw-filterbar" }, Kg = ["onClick"], qg = {
	key: 0,
	class: "rw-report-period"
}, Jg = ["aria-label"], Yg = ["aria-label"], Xg = {
	key: 1,
	class: "rw-report-period"
}, Zg = { class: "rw-report-period__label" }, Qg = { class: "rw-muted" }, $g = { class: "rw-filterbar" }, e_ = ["onClick"], t_ = { class: "rw-chip rw-chip--sum" }, n_ = { class: "rw-report-card" }, r_ = { class: "rw-report-card__label" }, i_ = { class: "rw-report-card__value" }, a_ = { class: "rw-report-card" }, o_ = { class: "rw-report-card__label" }, s_ = { class: "rw-report-card__value" }, c_ = { class: "rw-report-card" }, l_ = { class: "rw-report-card__label" }, u_ = { class: "rw-report-card__value" }, d_ = { class: "rw-report-card" }, f_ = { class: "rw-report-card__label" }, p_ = { class: "rw-report-card__value" }, m_ = { class: "rw-report-h" }, h_ = { class: "rw-table-wrap" }, g_ = { class: "rw-table" }, __ = { class: "num" }, v_ = { class: "num" }, y_ = { class: "num" }, b_ = { class: "num" }, x_ = { class: "num" }, S_ = { class: "num" }, C_ = { class: "rw-report-sum" }, w_ = { class: "num" }, T_ = { class: "num" }, E_ = { class: "num" }, D_ = { class: "rw-report-h" }, O_ = { class: "rw-table-wrap" }, k_ = { class: "rw-table" }, A_ = { class: "num" }, j_ = { class: "num" }, M_ = { class: "num" }, N_ = { class: "num" }, P_ = { class: "num" }, F_ = { class: "num" }, I_ = { class: "num" }, L_ = { class: "num" }, R_ = { class: "rw-report-h" }, z_ = { class: "rw-table-wrap" }, B_ = { class: "rw-table" }, V_ = { class: "num" }, H_ = { class: "num" }, U_ = { class: "num" }, W_ = ["onClick"], G_ = {
	key: 0,
	class: "rw-pill"
}, K_ = {
	key: 1,
	class: "rw-pill"
}, q_ = {
	key: 0,
	class: "rw-subline"
}, J_ = { class: "num" }, Y_ = { class: "num" }, X_ = { class: "num" }, Z_ = /* @__PURE__ */ B({
	__name: "ReportsView",
	setup(e) {
		let t = [
			{
				key: "year",
				label: "Jahr"
			},
			{
				key: "quarter",
				label: "Quartal"
			},
			{
				key: "month",
				label: "Monat"
			},
			{
				key: "week",
				label: "Woche"
			},
			{
				key: "custom",
				label: "Zeitraum"
			}
		], n = [{
			key: "issue",
			label: "Nach Rechnungsdatum"
		}, {
			key: "payment",
			label: "Nach Zahlungseingang"
		}], r = Ae(), i = X("year"), a = X("issue"), o = X(Rg("year", /* @__PURE__ */ new Date())), s = X(o.value.from), c = X(o.value.to), l = X(null), d = X(!1), f = X(""), m = W(() => i.value === "custom" ? !s.value || !c.value || s.value > c.value ? null : {
			from: s.value,
			to: c.value,
			basis: a.value
		} : {
			...o.value,
			basis: a.value
		}), h = W(() => m.value !== null && !!l.value && l.value.rows.length > 0);
		function _(e) {
			e === "custom" ? i.value !== "custom" && (s.value = o.value.from, c.value = o.value.to) : o.value = Rg(e, /* @__PURE__ */ new Date()), i.value = e;
		}
		function ee(e) {
			i.value !== "custom" && (o.value = zg(i.value, o.value, e));
		}
		let v = W(() => i.value === "custom" || o.value.from === Rg(i.value, /* @__PURE__ */ new Date()).from), y = (e) => Lg(e).toLocaleDateString();
		function te(e) {
			return Lg(`${e}-01`).toLocaleDateString(void 0, {
				month: "long",
				year: "numeric"
			});
		}
		let b = W(() => {
			let e = Lg(o.value.from);
			switch (i.value) {
				case "year": return String(e.getFullYear());
				case "quarter": return A("rechnungswerk", "{quarter}. Quartal {year}", {
					quarter: String(Vg(e)),
					year: String(e.getFullYear())
				});
				case "month": return te(o.value.from.slice(0, 7));
				case "week": {
					let { week: t, year: n } = Bg(e);
					return A("rechnungswerk", "KW {week}/{year}", {
						week: String(t),
						year: String(n)
					});
				}
				default: return "";
			}
		}), x = W(() => `${y(o.value.from)} – ${y(o.value.to)}`), S = W(() => a.value === "payment" ? A("rechnungswerk", "Was im Zeitraum bezahlt wurde (Ist-Versteuerung, EÜR).") : A("rechnungswerk", "Was im Zeitraum in Rechnung gestellt wurde, Stornos abgezogen.")), C = W(() => a.value === "payment" ? A("rechnungswerk", "In diesem Zeitraum ist keine Rechnung als bezahlt markiert.") : A("rechnungswerk", "In diesem Zeitraum wurde keine Rechnung festgeschrieben.")), ne = 0;
		async function w() {
			let e = m.value;
			if (e === null) return;
			let t = ++ne;
			d.value = !0, f.value = "";
			try {
				let n = await Pg(e);
				t === ne && (l.value = n);
			} catch (e) {
				t === ne && (l.value = null, f.value = e.message ?? A("rechnungswerk", "Laden fehlgeschlagen"));
			} finally {
				t === ne && (d.value = !1);
			}
		}
		M(m, w), p(w);
		function T(e) {
			m.value !== null && Fg(e, m.value);
		}
		function re(e) {
			r.push({
				name: "invoice-detail",
				params: { id: String(e) }
			});
		}
		return (e, r) => (g(), K("div", Hg, [
			Y("div", Ug, [Y("h2", null, q(U(A)("rechnungswerk", "Berichte")), 1), Y("div", Wg, [H(U(L), {
				variant: "primary",
				disabled: !h.value,
				onClick: r[0] ||= (e) => T("csv")
			}, {
				icon: j(() => [H(Tg, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "CSV-Export")), 1)]),
				_: 1
			}, 8, ["disabled"]), H(U(L), {
				variant: "primary",
				disabled: !h.value,
				onClick: r[1] ||= (e) => T("pdf")
			}, {
				icon: j(() => [H(Mg, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "PDF-Export")), 1)]),
				_: 1
			}, 8, ["disabled"])])]),
			Y("div", Gg, [(g(), K(O, null, u(t, (e) => Y("button", {
				key: e.key,
				class: Z(["rw-chip", { "rw-chip--active": i.value === e.key }]),
				onClick: (t) => _(e.key)
			}, q(U(A)("rechnungswerk", e.label)), 11, Kg)), 64))]),
			i.value === "custom" ? (g(), K("div", qg, [
				P(Y("input", {
					"onUpdate:modelValue": r[2] ||= (e) => s.value = e,
					type: "date",
					class: "rw-input rw-report-date",
					"aria-label": U(A)("rechnungswerk", "Von")
				}, null, 8, Jg), [[J, s.value]]),
				r[7] ||= Y("span", null, "–", -1),
				P(Y("input", {
					"onUpdate:modelValue": r[3] ||= (e) => c.value = e,
					type: "date",
					class: "rw-input rw-report-date",
					"aria-label": U(A)("rechnungswerk", "Bis")
				}, null, 8, Yg), [[J, c.value]])
			])) : (g(), K("div", Xg, [
				H(U(L), {
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "Vorheriger Zeitraum"),
					title: U(A)("rechnungswerk", "Vorheriger Zeitraum"),
					onClick: r[4] ||= (e) => ee(-1)
				}, {
					icon: j(() => [H(dg, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "title"]),
				Y("div", Zg, [Y("strong", null, q(b.value), 1), Y("span", Qg, q(x.value), 1)]),
				H(U(L), {
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "Nächster Zeitraum"),
					title: U(A)("rechnungswerk", "Nächster Zeitraum"),
					onClick: r[5] ||= (e) => ee(1)
				}, {
					icon: j(() => [H(vg, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "title"]),
				v.value ? R("", !0) : (g(), V(U(L), {
					key: 0,
					variant: "tertiary",
					onClick: r[6] ||= (e) => _(i.value)
				}, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Heute")), 1)]),
					_: 1
				}))
			])),
			Y("div", $g, [(g(), K(O, null, u(n, (e) => Y("button", {
				key: e.key,
				class: Z(["rw-chip", { "rw-chip--active": a.value === e.key }]),
				onClick: (t) => a.value = e.key
			}, q(U(A)("rechnungswerk", e.label)), 11, e_)), 64)), Y("span", t_, q(S.value), 1)]),
			f.value ? (g(), V(U(pt), {
				key: 2,
				type: "error",
				text: f.value
			}, null, 8, ["text"])) : R("", !0),
			d.value && !l.value ? (g(), V(U(Dt), {
				key: 3,
				size: 44,
				class: "rw-report-loading"
			})) : R("", !0),
			l.value ? (g(), K(O, { key: 4 }, [Y("div", { class: Z(["rw-report-cards", { "rw-report--stale": d.value }]) }, [
				Y("div", n_, [Y("span", r_, q(U(A)("rechnungswerk", "Netto")), 1), Y("span", i_, q(U(gu)(l.value.totals.netCents)), 1)]),
				Y("div", a_, [Y("span", o_, q(U(A)("rechnungswerk", "USt")), 1), Y("span", s_, q(U(gu)(l.value.totals.taxCents)), 1)]),
				Y("div", c_, [Y("span", l_, q(U(A)("rechnungswerk", "Brutto")), 1), Y("span", u_, q(U(gu)(l.value.totals.grossCents)), 1)]),
				Y("div", d_, [Y("span", f_, q(U(A)("rechnungswerk", "Belege")), 1), Y("span", p_, q(l.value.totals.count), 1)])
			], 2), l.value.rows.length === 0 ? (g(), V(U(St), {
				key: 0,
				name: U(A)("rechnungswerk", "Keine Belege im Zeitraum."),
				description: C.value
			}, {
				icon: j(() => [H(lo, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : (g(), K("div", {
				key: 1,
				class: Z({ "rw-report--stale": d.value })
			}, [
				Y("h3", m_, q(U(A)("rechnungswerk", "Nach Steuersatz")), 1),
				Y("div", h_, [Y("table", g_, [Y("thead", null, [Y("tr", null, [
					Y("th", null, q(U(A)("rechnungswerk", "Steuerfall")), 1),
					Y("th", __, q(U(A)("rechnungswerk", "Netto")), 1),
					Y("th", v_, q(U(A)("rechnungswerk", "USt")), 1),
					Y("th", y_, q(U(A)("rechnungswerk", "Brutto")), 1)
				])]), Y("tbody", null, [(g(!0), K(O, null, u(l.value.taxGroups, (e) => (g(), K("tr", { key: `${e.category}:${e.rateBp}` }, [
					Y("td", null, q(e.label), 1),
					Y("td", b_, q(U(gu)(e.netCents)), 1),
					Y("td", x_, q(U(gu)(e.taxCents)), 1),
					Y("td", S_, q(U(gu)(e.netCents + e.taxCents)), 1)
				]))), 128)), Y("tr", C_, [
					Y("td", null, q(U(A)("rechnungswerk", "Summe")), 1),
					Y("td", w_, q(U(gu)(l.value.totals.netCents)), 1),
					Y("td", T_, q(U(gu)(l.value.totals.taxCents)), 1),
					Y("td", E_, q(U(gu)(l.value.totals.grossCents)), 1)
				])])])]),
				l.value.months.length > 1 ? (g(), K(O, { key: 0 }, [Y("h3", D_, q(U(A)("rechnungswerk", "Nach Monat")), 1), Y("div", O_, [Y("table", k_, [Y("thead", null, [Y("tr", null, [
					Y("th", null, q(U(A)("rechnungswerk", "Monat")), 1),
					Y("th", A_, q(U(A)("rechnungswerk", "Belege")), 1),
					Y("th", j_, q(U(A)("rechnungswerk", "Netto")), 1),
					Y("th", M_, q(U(A)("rechnungswerk", "USt")), 1),
					Y("th", N_, q(U(A)("rechnungswerk", "Brutto")), 1)
				])]), Y("tbody", null, [(g(!0), K(O, null, u(l.value.months, (e) => (g(), K("tr", { key: e.month }, [
					Y("td", null, q(te(e.month)), 1),
					Y("td", P_, q(e.count), 1),
					Y("td", F_, q(U(gu)(e.netCents)), 1),
					Y("td", I_, q(U(gu)(e.taxCents)), 1),
					Y("td", L_, q(U(gu)(e.grossCents)), 1)
				]))), 128))])])])], 64)) : R("", !0),
				Y("h3", R_, q(U(A)("rechnungswerk", "Belege")), 1),
				Y("div", z_, [Y("table", B_, [Y("thead", null, [Y("tr", null, [
					Y("th", null, q(a.value === "payment" ? U(A)("rechnungswerk", "Zahldatum") : U(A)("rechnungswerk", "Rechnungsdatum")), 1),
					Y("th", null, q(U(A)("rechnungswerk", "Nummer")), 1),
					Y("th", null, q(U(A)("rechnungswerk", "Empfänger")), 1),
					Y("th", V_, q(U(A)("rechnungswerk", "Netto")), 1),
					Y("th", H_, q(U(A)("rechnungswerk", "USt")), 1),
					Y("th", U_, q(U(A)("rechnungswerk", "Brutto")), 1)
				])]), Y("tbody", null, [(g(!0), K(O, null, u(l.value.rows, (e) => (g(), K("tr", {
					key: e.id,
					class: "rw-row-clickable",
					onClick: (t) => re(e.id)
				}, [
					Y("td", null, q(y(e.date)), 1),
					Y("td", null, [z(q(e.number) + " ", 1), e.invoiceType === "cancellation" ? (g(), K("span", G_, q(U(A)("rechnungswerk", "Storno")), 1)) : e.status === "cancelled" ? (g(), K("span", K_, q(U(A)("rechnungswerk", "Storniert")), 1)) : R("", !0)]),
					Y("td", null, [z(q(e.recipientName ?? "—") + " ", 1), e.taxLabel ? (g(), K("div", q_, q(e.taxLabel), 1)) : R("", !0)]),
					Y("td", J_, q(U(gu)(e.netCents)), 1),
					Y("td", Y_, q(U(gu)(e.taxCents)), 1),
					Y("td", X_, q(U(gu)(e.grossCents)), 1)
				], 8, W_))), 128))])])])
			], 2))], 64)) : R("", !0)
		]));
	}
}), Q_ = { class: "product-modal" }, $_ = { class: "field" }, ev = { class: "field" }, tv = { class: "field-row" }, nv = { class: "field" }, rv = ["value"], iv = { class: "field" }, av = { class: "field" }, ov = ["value"], sv = { class: "field" }, cv = ["placeholder"], lv = { class: "hint" }, uv = { class: "actions" }, dv = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "ProductEditModal",
	props: {
		open: { type: Boolean },
		product: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = X(null), a = s({
			name: "",
			description: "",
			defaultUnitCode: "C62",
			defaultUnitLabel: "",
			defaultTaxRateBp: 1900
		}), o = X("0,00");
		function c() {
			uu(o.value) !== null && (o.value = pu(mu(o.value)));
		}
		let l = W(() => n.product ? A("rechnungswerk", "Produkt bearbeiten") : A("rechnungswerk", "Produkt anlegen")), d = W(() => a.name.trim() !== "");
		M(() => n.open, (e) => {
			if (!e) return;
			let t = n.product;
			a.name = t?.name ?? "", a.description = t?.description ?? "", a.defaultUnitCode = t?.defaultUnitCode ?? "C62", a.defaultUnitLabel = t?.defaultUnitLabel ?? "", a.defaultTaxRateBp = t?.defaultTaxRateBp ?? 1900, o.value = pu(t?.defaultPriceE4 ?? 0), et(() => i.value?.focus());
		}, { immediate: !0 });
		function f() {
			d.value && r("save", {
				name: a.name.trim(),
				description: a.description.trim() === "" ? null : a.description.trim(),
				defaultUnitCode: a.defaultUnitCode,
				defaultUnitLabel: a.defaultUnitLabel.trim() === "" ? null : a.defaultUnitLabel.trim(),
				defaultPriceInput: o.value,
				defaultTaxRateBp: a.defaultTaxRateBp
			});
		}
		return (t, n) => e.open ? (g(), V(U(lt), {
			key: 0,
			name: l.value,
			onKeydown: n[7] ||= de((e) => U(Ss)(e, () => t.$emit("close")), ["esc"]),
			onClose: n[8] ||= (e) => t.$emit("close")
		}, {
			default: j(() => [Y("div", Q_, [
				Y("h2", null, q(l.value), 1),
				Y("label", $_, [Y("span", null, q(U(A)("rechnungswerk", "Name")) + " *", 1), P(Y("input", {
					ref_key: "nameInput",
					ref: i,
					"onUpdate:modelValue": n[0] ||= (e) => a.name = e,
					class: "input",
					type: "text"
				}, null, 512), [[J, a.name]])]),
				Y("label", ev, [Y("span", null, q(U(A)("rechnungswerk", "Beschreibung")), 1), P(Y("textarea", {
					"onUpdate:modelValue": n[1] ||= (e) => a.description = e,
					class: "input",
					rows: "2"
				}, null, 512), [[J, a.description]])]),
				Y("div", tv, [
					Y("label", nv, [Y("span", null, q(U(A)("rechnungswerk", "Einheit")), 1), P(Y("select", {
						"onUpdate:modelValue": n[2] ||= (e) => a.defaultUnitCode = e,
						class: "input"
					}, [(g(!0), K(O, null, u(U(Ql), (e) => (g(), K("option", {
						key: e,
						value: e
					}, q(U(A)("rechnungswerk", U($l)[e])), 9, rv))), 128))], 512), [[C, a.defaultUnitCode]])]),
					Y("label", iv, [Y("span", null, q(U(A)("rechnungswerk", "Standard-Preis (€)")), 1), P(Y("input", {
						"onUpdate:modelValue": n[3] ||= (e) => o.value = e,
						class: "input",
						type: "text",
						inputmode: "decimal",
						onBlur: c
					}, null, 544), [[J, o.value]])]),
					Y("label", av, [Y("span", null, q(U(A)("rechnungswerk", "USt-Satz")), 1), P(Y("select", {
						"onUpdate:modelValue": n[4] ||= (e) => a.defaultTaxRateBp = e,
						class: "input"
					}, [(g(!0), K(O, null, u(U(eu), (e) => (g(), K("option", {
						key: e,
						value: e
					}, q(U(_u)(e)), 9, ov))), 128))], 512), [[
						C,
						a.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])])
				]),
				Y("label", sv, [
					Y("span", null, q(U(A)("rechnungswerk", "Eigene Einheit (optional)")), 1),
					P(Y("input", {
						"onUpdate:modelValue": n[5] ||= (e) => a.defaultUnitLabel = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: U(A)("rechnungswerk", "z. B. Personen, Sitzung")
					}, null, 8, cv), [[J, a.defaultUnitLabel]]),
					Y("span", lv, q(U(A)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF. In der E-Rechnung wird die Einheit generisch (Stück) abgebildet, damit sie gültig bleibt.")), 1)
				]),
				Y("div", uv, [H(U(L), { onClick: n[6] ||= (e) => t.$emit("close") }, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), H(U(L), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : R("", !0);
	}
}), [["__scopeId", "data-v-e77e93c0"]]), fv = { class: "rw-view" }, pv = { class: "rw-view__head" }, mv = {
	key: 2,
	class: "rw-table-wrap"
}, hv = { class: "rw-table" }, gv = { class: "num" }, _v = { class: "num" }, vv = ["onClick"], yv = {
	key: 0,
	class: "rw-muted"
}, bv = { class: "num" }, xv = { class: "num" }, Sv = { class: "rw-col-actions" }, Cv = { class: "rw-actions" }, wv = /* @__PURE__ */ B({
	__name: "ProductsView",
	setup(e) {
		let t = Tp(), n = X(!1), r = X(null), i = X(null), a = X(""), o = (e) => $l[e] ?? e;
		function s(e, t) {
			let n = e.message ?? t;
			a.value = n, console.error("[rechnungswerk] products:", e);
		}
		p(() => {
			t.fetchAll().catch((e) => s(e, A("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function c() {
			r.value = null, n.value = !0;
		}
		function l(e) {
			r.value = e, n.value = !0;
		}
		async function d(e) {
			a.value = "";
			try {
				r.value ? await t.update(r.value.id, e) : await t.create(e), n.value = !1;
			} catch (e) {
				s(e, A("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function f(e) {
			i.value = e;
		}
		async function m() {
			let e = i.value;
			if (i.value = null, e) {
				a.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					s(e, A("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, s) => (g(), K("div", fv, [
			Y("div", pv, [Y("h2", null, q(U(A)("rechnungswerk", "Produkte")), 1), H(U(L), {
				variant: "primary",
				onClick: c
			}, {
				icon: j(() => [H(ic, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "Produkt anlegen")), 1)]),
				_: 1
			})]),
			a.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: a.value
			}, null, 8, ["text"])) : R("", !0),
			!U(t).loading && U(t).products.length === 0 ? (g(), V(U(St), {
				key: 1,
				name: U(A)("rechnungswerk", "Noch keine Produkte"),
				description: U(A)("rechnungswerk", "Pflege wiederkehrende Leistungen, um sie schnell in Rechnungen zu übernehmen.")
			}, {
				icon: j(() => [H(Ya, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : U(t).products.length > 0 ? (g(), K("div", mv, [Y("table", hv, [Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(A)("rechnungswerk", "Name")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Einheit")), 1),
				Y("th", gv, q(U(A)("rechnungswerk", "Preis")), 1),
				Y("th", _v, q(U(A)("rechnungswerk", "USt")), 1),
				s[2] ||= Y("th", { class: "num" }, null, -1)
			])]), Y("tbody", null, [(g(!0), K(O, null, u(U(t).products, (e) => (g(), K("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => l(e)
			}, [
				Y("td", null, [z(q(e.name) + " ", 1), e.description ? (g(), K("div", yv, q(e.description), 1)) : R("", !0)]),
				Y("td", null, q(e.defaultUnitLabel || U(A)("rechnungswerk", o(e.defaultUnitCode))), 1),
				Y("td", bv, q(U(hu)(e.defaultPriceE4)), 1),
				Y("td", xv, q(U(_u)(e.defaultTaxRateBp)), 1),
				Y("td", Sv, [Y("div", Cv, [H(U(L), {
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "Löschen"),
					title: U(A)("rechnungswerk", "Löschen"),
					onClick: F((t) => f(e), ["stop"])
				}, {
					icon: j(() => [H(od, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, vv))), 128))])])])) : R("", !0),
			H(dv, {
				open: n.value,
				product: r.value,
				saving: U(t).loading,
				onClose: s[0] ||= (e) => n.value = !1,
				onSave: d
			}, null, 8, [
				"open",
				"product",
				"saving"
			]),
			H(Qf, {
				open: i.value !== null,
				name: U(A)("rechnungswerk", "Produkt löschen"),
				message: i.value ? U(A)("rechnungswerk", "„{name}“ wirklich löschen?", { name: i.value.name }) : "",
				confirmLabel: U(A)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: s[1] ||= (e) => i.value = null,
				onConfirm: m
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), Tv = {
	name: "StarOutlineIcon",
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
}, Ev = ["aria-hidden", "aria-label"], Dv = [
	"fill",
	"width",
	"height"
], Ov = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, kv = { key: 0 };
function Av(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon star-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ov, [n.title ? (g(), K("title", kv, q(n.title), 1)) : R("", !0)])], 8, Dv))], 16, Ev);
}
var jv = /*#__PURE__*/ $(Tv, [["render", Av]]), Mv = { class: "snippet-modal" }, Nv = { class: "field" }, Pv = ["placeholder"], Fv = { class: "field-row" }, Iv = { class: "field" }, Lv = ["value"], Rv = { class: "field" }, zv = ["value"], Bv = { class: "field" }, Vv = { class: "hint" }, Hv = { class: "actions" }, Uv = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "TextSnippetEditModal",
	props: {
		open: { type: Boolean },
		snippet: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let n = ["invoice", "quote"], r = ["opening", "closing"], i = e, a = t, o = X(null), c = s({
			label: "",
			docType: "invoice",
			slot: "opening",
			content: "",
			isDefault: !1
		}), l = W(() => i.snippet ? A("rechnungswerk", "Textbaustein bearbeiten") : A("rechnungswerk", "Textbaustein anlegen")), d = W(() => c.label.trim() !== "");
		M(() => i.open, (e) => {
			if (!e) return;
			let t = i.snippet;
			c.label = t?.label ?? "", c.docType = t?.docType ?? "invoice", c.slot = t?.slot ?? "opening", c.content = t?.content ?? "", c.isDefault = t?.isDefault ?? !1, et(() => o.value?.focus());
		}, { immediate: !0 });
		function f() {
			d.value && a("save", {
				label: c.label.trim(),
				docType: c.docType,
				slot: c.slot,
				content: c.content.trim() === "" ? null : c.content,
				isDefault: c.isDefault
			});
		}
		return (t, i) => e.open ? (g(), V(U(lt), {
			key: 0,
			name: l.value,
			onKeydown: i[6] ||= de((e) => U(Ss)(e, () => t.$emit("close")), ["esc"]),
			onClose: i[7] ||= (e) => t.$emit("close")
		}, {
			default: j(() => [Y("div", Mv, [
				Y("h2", null, q(l.value), 1),
				Y("label", Nv, [Y("span", null, q(U(A)("rechnungswerk", "Name")) + " *", 1), P(Y("input", {
					ref_key: "nameInput",
					ref: o,
					"onUpdate:modelValue": i[0] ||= (e) => c.label = e,
					class: "input",
					type: "text",
					placeholder: U(A)("rechnungswerk", "z. B. Neukunde, Mahnfreundlich")
				}, null, 8, Pv), [[J, c.label]])]),
				Y("div", Fv, [Y("label", Iv, [Y("span", null, q(U(A)("rechnungswerk", "Dokument")), 1), P(Y("select", {
					"onUpdate:modelValue": i[1] ||= (e) => c.docType = e,
					class: "input"
				}, [(g(), K(O, null, u(n, (e) => Y("option", {
					key: e,
					value: e
				}, q(U(A)("rechnungswerk", U(nu)[e])), 9, Lv)), 64))], 512), [[C, c.docType]])]), Y("label", Rv, [Y("span", null, q(U(A)("rechnungswerk", "Textbereich")), 1), P(Y("select", {
					"onUpdate:modelValue": i[2] ||= (e) => c.slot = e,
					class: "input"
				}, [(g(), K(O, null, u(r, (e) => Y("option", {
					key: e,
					value: e
				}, q(U(A)("rechnungswerk", U(ru)[e])), 9, zv)), 64))], 512), [[C, c.slot]])])]),
				Y("label", Bv, [Y("span", null, q(U(A)("rechnungswerk", "Text")), 1), P(Y("textarea", {
					"onUpdate:modelValue": i[3] ||= (e) => c.content = e,
					class: "input",
					rows: "6"
				}, null, 512), [[J, c.content]])]),
				H(U(Ot), {
					modelValue: c.isDefault,
					"onUpdate:modelValue": i[4] ||= (e) => c.isDefault = e
				}, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Als Standard für neue Dokumente verwenden")), 1)]),
					_: 1
				}, 8, ["modelValue"]),
				Y("p", Vv, q(U(A)("rechnungswerk", "Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.")), 1),
				Y("div", Hv, [H(U(L), { onClick: i[5] ||= (e) => t.$emit("close") }, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), H(U(L), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : R("", !0);
	}
}), [["__scopeId", "data-v-b60fbea6"]]), Wv = { class: "rw-view" }, Gv = { class: "rw-view__head" }, Kv = { class: "rw-muted rw-intro" }, qv = {
	key: 2,
	class: "rw-snippet-groups"
}, Jv = { class: "rw-snippet-group__head" }, Yv = { class: "rw-table-wrap" }, Xv = { class: "rw-table" }, Zv = ["onClick"], Qv = {
	key: 0,
	class: "rw-muted rw-snippet-content"
}, $v = { class: "rw-snippet-actions" }, ey = { class: "rw-actions" }, ty = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "TextSnippetsView",
	setup(e) {
		let t = jp(), n = ["invoice", "quote"], r = ["opening", "closing"], i = W(() => {
			let e = [];
			for (let i of n) for (let n of r) {
				let r = t.snippets.filter((e) => e.docType === i && e.slot === n).sort((e, t) => Number(t.isDefault) - Number(e.isDefault) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
				r.length > 0 && e.push({
					key: `${i}-${n}`,
					docType: i,
					slot: n,
					items: r
				});
			}
			return e;
		}), a = X(!1), o = X(null), s = X(null), c = X("");
		function l(e, t) {
			let n = e.message ?? t;
			c.value = n, console.error("[rechnungswerk] text-snippets:", e);
		}
		p(() => {
			t.fetchAll().catch((e) => l(e, A("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function d() {
			o.value = null, a.value = !0;
		}
		function f(e) {
			o.value = e, a.value = !0;
		}
		async function m(e) {
			if (!e.isDefault) {
				c.value = "";
				try {
					await t.update(e.id, { isDefault: !0 });
				} catch (e) {
					l(e, A("rechnungswerk", "Speichern fehlgeschlagen"));
				}
			}
		}
		async function h(e) {
			c.value = "";
			try {
				o.value ? await t.update(o.value.id, e) : await t.create(e), a.value = !1;
			} catch (e) {
				l(e, A("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function _(e) {
			s.value = e;
		}
		async function ee() {
			let e = s.value;
			if (s.value = null, e) {
				c.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					l(e, A("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, n) => (g(), K("div", Wv, [
			Y("div", Gv, [Y("h2", null, q(U(A)("rechnungswerk", "Textbausteine")), 1), H(U(L), {
				variant: "primary",
				onClick: d
			}, {
				icon: j(() => [H(ic, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "Textbaustein anlegen")), 1)]),
				_: 1
			})]),
			Y("p", Kv, q(U(A)("rechnungswerk", "Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.")), 1),
			c.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: c.value
			}, null, 8, ["text"])) : R("", !0),
			!U(t).loading && U(t).snippets.length === 0 ? (g(), V(U(St), {
				key: 1,
				name: U(A)("rechnungswerk", "Noch keine Textbausteine"),
				description: U(A)("rechnungswerk", "Lege wiederkehrende Einleitungs- und Schlusstexte an, um sie schnell in Dokumente zu übernehmen.")
			}, {
				icon: j(() => [H(no, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : U(t).snippets.length > 0 ? (g(), K("div", qv, [(g(!0), K(O, null, u(i.value, (e) => (g(), K("section", {
				key: e.key,
				class: "rw-snippet-group"
			}, [Y("h3", Jv, [
				z(q(U(A)("rechnungswerk", U(nu)[e.docType])) + " ", 1),
				n[2] ||= Y("span", { class: "rw-snippet-group__sep" }, "–", -1),
				z(" " + q(U(A)("rechnungswerk", U(ru)[e.slot])), 1)
			]), Y("div", Yv, [Y("table", Xv, [Y("tbody", null, [(g(!0), K(O, null, u(e.items, (e) => (g(), K("tr", {
				key: e.id,
				class: "rw-row-clickable rw-snippet-row",
				onClick: (t) => f(e)
			}, [Y("td", null, [Y("strong", null, q(e.label), 1), e.content ? (g(), K("div", Qv, q(e.content), 1)) : R("", !0)]), Y("td", $v, [Y("div", ey, [H(U(L), {
				variant: "tertiary",
				"aria-label": e.isDefault ? U(A)("rechnungswerk", "Standard-Vorlage") : U(A)("rechnungswerk", "Als Standard festlegen"),
				title: e.isDefault ? U(A)("rechnungswerk", "Standard-Vorlage") : U(A)("rechnungswerk", "Als Standard festlegen"),
				onClick: F((t) => m(e), ["stop"])
			}, {
				icon: j(() => [e.isDefault ? (g(), V(as, {
					key: 0,
					size: 20,
					class: "rw-star rw-star--active"
				})) : (g(), V(jv, {
					key: 1,
					size: 20,
					class: "rw-star"
				}))]),
				_: 2
			}, 1032, [
				"aria-label",
				"title",
				"onClick"
			]), H(U(L), {
				variant: "tertiary",
				"aria-label": U(A)("rechnungswerk", "Löschen"),
				title: U(A)("rechnungswerk", "Löschen"),
				onClick: F((t) => _(e), ["stop"])
			}, {
				icon: j(() => [H(od, { size: 20 })]),
				_: 1
			}, 8, [
				"aria-label",
				"title",
				"onClick"
			])])])], 8, Zv))), 128))])])])]))), 128))])) : R("", !0),
			H(Uv, {
				open: a.value,
				snippet: o.value,
				saving: U(t).loading,
				onClose: n[0] ||= (e) => a.value = !1,
				onSave: h
			}, null, 8, [
				"open",
				"snippet",
				"saving"
			]),
			H(Qf, {
				open: s.value !== null,
				name: U(A)("rechnungswerk", "Textbaustein löschen"),
				message: s.value ? U(A)("rechnungswerk", "„{name}“ wirklich löschen?", { name: s.value.label }) : "",
				confirmLabel: U(A)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: n[1] ||= (e) => s.value = null,
				onConfirm: ee
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-c438c8e2"]]), ny = {
	name: "AccountArrowRightIcon",
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
}, ry = ["aria-hidden", "aria-label"], iy = [
	"fill",
	"width",
	"height"
], ay = { d: "M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14" }, oy = { key: 0 };
function sy(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon account-arrow-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", ay, [n.title ? (g(), K("title", oy, q(n.title), 1)) : R("", !0)])], 8, iy))], 16, ry);
}
var cy = /*#__PURE__*/ $(ny, [["render", sy]]), ly = { class: "customer-modal" }, uy = { class: "form-section" }, dy = { class: "row" }, fy = { class: "field" }, py = { class: "field" }, my = { class: "row" }, hy = { class: "field" }, gy = { class: "form-section" }, _y = { class: "field" }, vy = ["placeholder"], yy = { class: "hint" }, by = { class: "field" }, xy = { class: "row" }, Sy = { class: "field" }, Cy = { class: "field" }, wy = { class: "row" }, Ty = { class: "field" }, Ey = { class: "form-section" }, Dy = { class: "row" }, Oy = { class: "field" }, ky = { class: "field" }, Ay = { class: "field" }, jy = { class: "form-section" }, My = { class: "field" }, Ny = { class: "row" }, Py = { class: "field" }, Fy = { class: "field" }, Iy = { class: "field" }, Ly = { class: "form-section" }, Ry = { class: "row" }, zy = { class: "field" }, By = { class: "field" }, Vy = { value: "" }, Hy = ["value"], Uy = { class: "field" }, Wy = { class: "actions" }, Gy = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "CustomerEditModal",
	props: {
		open: { type: Boolean },
		customer: {},
		saving: { type: Boolean },
		takenNumbers: {},
		prefill: {}
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = X(null), a = () => ({
			customerNumber: "",
			name: "",
			vatId: "",
			addressAddition: "",
			address: "",
			postalCode: "",
			city: "",
			country: "DE",
			contactPerson: "",
			phone: "",
			email: "",
			bankAccountHolder: "",
			iban: "",
			bic: "",
			bankName: "",
			note: ""
		}), o = s(a()), c = X(""), l = X(""), d = W(() => n.customer ? A("rechnungswerk", "Kunde bearbeiten") : A("rechnungswerk", "Kunde anlegen")), f = W(() => {
			let e = o.customerNumber.trim().toLowerCase();
			return e !== "" && (n.takenNumbers ?? []).includes(e);
		}), p = W(() => o.customerNumber.trim() !== "" && o.name.trim() !== "" && !f.value);
		M(() => n.open, (e) => {
			if (!e) return;
			let t = n.customer;
			Object.assign(o, a()), t ? (o.customerNumber = t.customerNumber ?? "", o.name = t.name ?? "", o.vatId = t.vatId ?? "", o.addressAddition = t.addressAddition ?? "", o.address = t.address ?? "", o.postalCode = t.postalCode ?? "", o.city = t.city ?? "", o.country = t.country ?? "DE", o.contactPerson = t.contactPerson ?? "", o.phone = t.phone ?? "", o.email = t.email ?? "", o.bankAccountHolder = t.bankAccountHolder ?? "", o.iban = t.iban ?? "", o.bic = t.bic ?? "", o.bankName = t.bankName ?? "", o.note = t.note ?? "", c.value = t.defaultPaymentTermDays == null ? "" : String(t.defaultPaymentTermDays), l.value = t.defaultTaxRateBp == null ? "" : String(t.defaultTaxRateBp)) : n.prefill && Object.assign(o, {
				...a(),
				...m(n.prefill)
			}), et(() => i.value?.focus());
		}, { immediate: !0 });
		function m(e) {
			let t = {};
			for (let [n, r] of Object.entries(e)) typeof r == "string" && (t[n] = r);
			return t;
		}
		function h(e) {
			let t = e.trim();
			return t === "" ? null : t;
		}
		function _() {
			p.value && r("save", {
				customerNumber: o.customerNumber.trim(),
				name: o.name.trim(),
				vatId: h(o.vatId),
				addressAddition: h(o.addressAddition),
				address: h(o.address),
				postalCode: h(o.postalCode),
				city: h(o.city),
				country: o.country.trim() === "" ? "DE" : o.country.trim().toUpperCase(),
				contactPerson: h(o.contactPerson),
				phone: h(o.phone),
				email: h(o.email),
				bankAccountHolder: h(o.bankAccountHolder),
				iban: h(o.iban),
				bic: h(o.bic),
				bankName: h(o.bankName),
				defaultPaymentTermDays: String(c.value).trim() === "" ? null : Math.max(0, Number(c.value)),
				defaultTaxRateBp: l.value === "" ? null : Number(l.value),
				note: h(o.note)
			});
		}
		return (t, n) => e.open ? (g(), V(U(lt), {
			key: 0,
			name: d.value,
			onKeydown: n[19] ||= de((e) => U(Ss)(e, () => t.$emit("close")), ["esc"]),
			onClose: n[20] ||= (e) => t.$emit("close")
		}, {
			default: j(() => [Y("div", ly, [
				Y("h2", null, q(d.value), 1),
				Y("div", uy, [
					Y("h3", null, q(U(A)("rechnungswerk", "Stammdaten")), 1),
					Y("div", dy, [Y("label", fy, [Y("span", null, q(U(A)("rechnungswerk", "Kundennr.")) + " *", 1), P(Y("input", {
						ref_key: "numberInput",
						ref: i,
						"onUpdate:modelValue": n[0] ||= (e) => o.customerNumber = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.customerNumber]])]), Y("label", py, [Y("span", null, q(U(A)("rechnungswerk", "Name / Firma")) + " *", 1), P(Y("input", {
						"onUpdate:modelValue": n[1] ||= (e) => o.name = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.name]])])]),
					f.value ? (g(), V(U(pt), {
						key: 0,
						type: "error",
						text: U(A)("rechnungswerk", "Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.", { number: o.customerNumber.trim() })
					}, null, 8, ["text"])) : R("", !0),
					Y("div", my, [Y("label", hy, [Y("span", null, q(U(A)("rechnungswerk", "USt-IdNr.")), 1), P(Y("input", {
						"onUpdate:modelValue": n[2] ||= (e) => o.vatId = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.vatId]])])])
				]),
				Y("div", gy, [
					Y("h3", null, q(U(A)("rechnungswerk", "Anschrift")), 1),
					Y("label", _y, [
						Y("span", null, q(U(A)("rechnungswerk", "Adresszusatz")), 1),
						P(Y("input", {
							"onUpdate:modelValue": n[3] ||= (e) => o.addressAddition = e,
							class: "input",
							type: "text",
							placeholder: U(A)("rechnungswerk", "z. Hd. Frau Meyer, Gebäude B, c/o\xA0…")
						}, null, 8, vy), [[J, o.addressAddition]]),
						Y("span", yy, q(U(A)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					]),
					Y("label", by, [Y("span", null, q(U(A)("rechnungswerk", "Straße & Hausnummer")), 1), P(Y("input", {
						"onUpdate:modelValue": n[4] ||= (e) => o.address = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.address]])]),
					Y("div", xy, [Y("label", Sy, [Y("span", null, q(U(A)("rechnungswerk", "PLZ")), 1), P(Y("input", {
						"onUpdate:modelValue": n[5] ||= (e) => o.postalCode = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.postalCode]])]), Y("label", Cy, [Y("span", null, q(U(A)("rechnungswerk", "Ort")), 1), P(Y("input", {
						"onUpdate:modelValue": n[6] ||= (e) => o.city = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.city]])])]),
					Y("div", wy, [Y("label", Ty, [Y("span", null, q(U(A)("rechnungswerk", "Land")), 1), H(Jd, {
						modelValue: o.country,
						"onUpdate:modelValue": n[7] ||= (e) => o.country = e,
						selectClass: "input"
					}, null, 8, ["modelValue"])])])
				]),
				Y("div", Ey, [
					Y("h3", null, q(U(A)("rechnungswerk", "Ansprechpartner & Kontakt")), 1),
					Y("div", Dy, [Y("label", Oy, [Y("span", null, q(U(A)("rechnungswerk", "Ansprechpartner")), 1), P(Y("input", {
						"onUpdate:modelValue": n[8] ||= (e) => o.contactPerson = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.contactPerson]])]), Y("label", ky, [Y("span", null, q(U(A)("rechnungswerk", "Telefon")), 1), P(Y("input", {
						"onUpdate:modelValue": n[9] ||= (e) => o.phone = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.phone]])])]),
					Y("label", Ay, [Y("span", null, q(U(A)("rechnungswerk", "E-Mail (für Rechnungsversand)")), 1), P(Y("input", {
						"onUpdate:modelValue": n[10] ||= (e) => o.email = e,
						class: "input",
						type: "email"
					}, null, 512), [[J, o.email]])])
				]),
				Y("div", jy, [
					Y("h3", null, q(U(A)("rechnungswerk", "Bankverbindung")), 1),
					Y("label", My, [Y("span", null, q(U(A)("rechnungswerk", "Kontoinhaber")), 1), P(Y("input", {
						"onUpdate:modelValue": n[11] ||= (e) => o.bankAccountHolder = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bankAccountHolder]])]),
					Y("div", Ny, [Y("label", Py, [Y("span", null, q(U(A)("rechnungswerk", "IBAN")), 1), P(Y("input", {
						"onUpdate:modelValue": n[12] ||= (e) => o.iban = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.iban]])]), Y("label", Fy, [Y("span", null, q(U(A)("rechnungswerk", "BIC")), 1), P(Y("input", {
						"onUpdate:modelValue": n[13] ||= (e) => o.bic = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bic]])])]),
					Y("label", Iy, [Y("span", null, q(U(A)("rechnungswerk", "Bank")), 1), P(Y("input", {
						"onUpdate:modelValue": n[14] ||= (e) => o.bankName = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bankName]])])
				]),
				Y("div", Ly, [
					Y("h3", null, q(U(A)("rechnungswerk", "Vorgaben für neue Rechnungen")), 1),
					Y("div", Ry, [Y("label", zy, [Y("span", null, q(U(A)("rechnungswerk", "Zahlungsziel (Tage)")), 1), P(Y("input", {
						"onUpdate:modelValue": n[15] ||= (e) => c.value = e,
						class: "input",
						type: "number",
						min: "0",
						inputmode: "numeric"
					}, null, 512), [[J, c.value]])]), Y("label", By, [Y("span", null, q(U(A)("rechnungswerk", "Standard-Steuersatz")), 1), P(Y("select", {
						"onUpdate:modelValue": n[16] ||= (e) => l.value = e,
						class: "input"
					}, [Y("option", Vy, q(U(A)("rechnungswerk", "— keine Vorgabe —")), 1), (g(!0), K(O, null, u(U(eu), (e) => (g(), K("option", {
						key: e,
						value: String(e)
					}, q(U(_u)(e)), 9, Hy))), 128))], 512), [[C, l.value]])])]),
					Y("label", Uy, [Y("span", null, q(U(A)("rechnungswerk", "Notiz (intern, nicht auf der Rechnung)")), 1), P(Y("textarea", {
						"onUpdate:modelValue": n[17] ||= (e) => o.note = e,
						class: "input",
						rows: "2"
					}, null, 512), [[J, o.note]])])
				]),
				Y("div", Wy, [H(U(L), { onClick: n[18] ||= (e) => t.$emit("close") }, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), H(U(L), {
					variant: "primary",
					disabled: e.saving || !p.value,
					onClick: _
				}, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : R("", !0);
	}
}), [["__scopeId", "data-v-7914d0dc"]]), Ky = { class: "rw-view" }, qy = { class: "rw-view__head" }, Jy = { class: "rw-view__actions" }, Yy = {
	key: 2,
	class: "rw-table-wrap"
}, Xy = { class: "rw-table" }, Zy = ["onClick"], Qy = { class: "rw-muted" }, $y = {
	key: 0,
	class: "rw-muted"
}, eb = { class: "rw-col-actions" }, tb = { class: "rw-actions" }, nb = { class: "rw-import" }, rb = { class: "rw-muted" }, ib = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "CustomersView",
	setup(e) {
		let t = $d(), n = X(!1), r = X(null), i = X(null), a = X(null), o = X(!1), s = X(""), c = X(""), l = X(!1), d = W(() => t.customers.filter((e) => e.id !== r.value?.id).map((e) => e.customerNumber.trim().toLowerCase()));
		function f(e, t) {
			c.value = e.message ?? t, console.error("[rechnungswerk] customers:", e);
		}
		p(() => {
			t.fetchAll().catch((e) => f(e, A("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function m() {
			r.value = null, i.value = null, n.value = !0;
		}
		function h(e) {
			r.value = e, i.value = null, n.value = !0;
		}
		function _() {
			s.value = "", o.value = !0;
		}
		function ee(e) {
			o.value = !1, r.value = null, i.value = {
				name: e.name,
				email: e.email || null,
				phone: e.phone || null,
				address: e.address || null,
				postalCode: e.postalCode || null,
				city: e.city || null,
				country: e.country || "DE"
			}, n.value = !0;
		}
		async function v(e) {
			c.value = "", l.value = !0;
			try {
				r.value ? await t.update(r.value.id, e) : await t.create(e), n.value = !1, i.value = null;
			} catch (e) {
				f(e, A("rechnungswerk", "Speichern fehlgeschlagen"));
			} finally {
				l.value = !1;
			}
		}
		function y(e) {
			a.value = e;
		}
		async function te() {
			let e = a.value;
			if (a.value = null, e) {
				c.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					f(e, A("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, f) => (g(), K("div", Ky, [
			Y("div", qy, [Y("h2", null, q(U(A)("rechnungswerk", "Kunden")), 1), Y("div", Jy, [H(U(L), { onClick: _ }, {
				icon: j(() => [H(cy, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "Aus Kontakten importieren")), 1)]),
				_: 1
			}), H(U(L), {
				variant: "primary",
				onClick: m
			}, {
				icon: j(() => [H(ic, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "Neuer Kunde")), 1)]),
				_: 1
			})])]),
			c.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: c.value
			}, null, 8, ["text"])) : R("", !0),
			!U(t).loading && U(t).customers.length === 0 ? (g(), V(U(St), {
				key: 1,
				name: U(A)("rechnungswerk", "Noch keine Kunden"),
				description: U(A)("rechnungswerk", "Lege Kunden an oder übernimm sie aus deinen Nextcloud-Kontakten, um sie schnell in Rechnungen auszuwählen.")
			}, {
				icon: j(() => [H(Fa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : U(t).customers.length > 0 ? (g(), K("div", Yy, [Y("table", Xy, [Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(A)("rechnungswerk", "Kundennr.")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Kunde")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Ort")), 1),
				f[5] ||= Y("th", { class: "num" }, null, -1)
			])]), Y("tbody", null, [(g(!0), K(O, null, u(U(t).customers, (e) => (g(), K("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => h(e)
			}, [
				Y("td", Qy, q(e.customerNumber), 1),
				Y("td", null, [z(q(e.name) + " ", 1), e.contactPerson || e.vatId ? (g(), K("div", $y, q([e.contactPerson, e.vatId].filter(Boolean).join(" · ")), 1)) : R("", !0)]),
				Y("td", null, q([e.postalCode, e.city].filter(Boolean).join(" ")), 1),
				Y("td", eb, [Y("div", tb, [H(U(L), {
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "Löschen"),
					title: U(A)("rechnungswerk", "Löschen"),
					onClick: F((t) => y(e), ["stop"])
				}, {
					icon: j(() => [H(od, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, Zy))), 128))])])])) : R("", !0),
			H(Gy, {
				open: n.value,
				customer: r.value,
				saving: l.value,
				takenNumbers: d.value,
				prefill: i.value,
				onClose: f[0] ||= (e) => n.value = !1,
				onSave: v
			}, null, 8, [
				"open",
				"customer",
				"saving",
				"takenNumbers",
				"prefill"
			]),
			o.value ? (g(), V(U(lt), {
				key: 3,
				name: U(A)("rechnungswerk", "Aus Nextcloud-Kontakten übernehmen"),
				onKeydown: f[2] ||= de((e) => U(Ss)(e, () => o.value = !1), ["esc"]),
				onClose: f[3] ||= (e) => o.value = !1
			}, {
				default: j(() => [Y("div", nb, [Y("p", rb, q(U(A)("rechnungswerk", "Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.")), 1), H(Hd, {
					modelValue: s.value,
					"onUpdate:modelValue": f[1] ||= (e) => s.value = e,
					onSelect: ee
				}, null, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["name"])) : R("", !0),
			H(Qf, {
				open: a.value !== null,
				name: U(A)("rechnungswerk", "Kunde löschen"),
				message: a.value ? U(A)("rechnungswerk", "„{name}“ wirklich löschen?", { name: a.value.name }) : "",
				confirmLabel: U(A)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: f[4] ||= (e) => a.value = null,
				onConfirm: te
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-1eff74a5"]]), ab = {
	name: "ContentSaveIcon",
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
}, ob = ["aria-hidden", "aria-label"], sb = [
	"fill",
	"width",
	"height"
], cb = { d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" }, lb = { key: 0 };
function ub(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon content-save-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", cb, [n.title ? (g(), K("title", lb, q(n.title), 1)) : R("", !0)])], 8, sb))], 16, ob);
}
var db = /*#__PURE__*/ $(ab, [["render", ub]]), fb = { class: "rw-view" }, pb = {
	key: 2,
	class: "rw-section"
}, mb = { class: "rw-hint" }, hb = { class: "rw-form-row" }, gb = { class: "rw-field" }, _b = { class: "rw-field" }, vb = { class: "rw-field" }, yb = {
	key: 3,
	class: "rw-action-bar"
}, bb = /* @__PURE__ */ B({
	__name: "MyContactView",
	setup(e) {
		let t = X(null), n = X(""), r = X(""), i = X(!1);
		p(async () => {
			try {
				t.value = await Mp();
			} catch (e) {
				n.value = e.message ?? A("rechnungswerk", "Laden fehlgeschlagen");
			}
		});
		async function a() {
			n.value = "";
			try {
				let e = await Id();
				t.value = {
					person: e.person,
					phone: e.phone,
					email: e.email
				};
			} catch (e) {
				n.value = e.message ?? A("rechnungswerk", "Nextcloud-Konto konnte nicht geladen werden.");
			}
		}
		async function o() {
			if (t.value) {
				n.value = "", r.value = "", i.value = !0;
				try {
					t.value = await Np(t.value), r.value = A("rechnungswerk", "Gespeichert.");
				} catch (e) {
					n.value = e.message ?? A("rechnungswerk", "Speichern fehlgeschlagen");
				} finally {
					i.value = !1;
				}
			}
		}
		return (e, s) => (g(), K("div", fb, [
			Y("h2", null, q(U(A)("rechnungswerk", "Mein Kontakt")), 1),
			n.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: n.value
			}, null, 8, ["text"])) : R("", !0),
			r.value ? (g(), V(U(pt), {
				key: 1,
				type: "success",
				text: r.value
			}, null, 8, ["text"])) : R("", !0),
			t.value ? (g(), K("section", pb, [
				Y("h3", null, q(U(A)("rechnungswerk", "Mein Verkäufer-Ansprechpartner")), 1),
				Y("p", mb, q(U(A)("rechnungswerk", "Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.")), 1),
				Y("div", hb, [
					Y("label", gb, [Y("span", null, q(U(A)("rechnungswerk", "Name")), 1), P(Y("input", {
						"onUpdate:modelValue": s[0] ||= (e) => t.value.person = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[J, t.value.person]])]),
					Y("label", _b, [Y("span", null, q(U(A)("rechnungswerk", "Telefon")), 1), P(Y("input", {
						"onUpdate:modelValue": s[1] ||= (e) => t.value.phone = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[J, t.value.phone]])]),
					Y("label", vb, [Y("span", null, q(U(A)("rechnungswerk", "E-Mail")), 1), P(Y("input", {
						"onUpdate:modelValue": s[2] ||= (e) => t.value.email = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[J, t.value.email]])])
				]),
				H(U(L), {
					variant: "tertiary",
					onClick: a
				}, {
					icon: j(() => [H(Ha, { size: 20 })]),
					default: j(() => [z(" " + q(U(A)("rechnungswerk", "Aus meinem Nextcloud-Konto übernehmen")), 1)]),
					_: 1
				})
			])) : R("", !0),
			t.value ? (g(), K("div", yb, [H(U(L), {
				variant: "primary",
				disabled: i.value,
				onClick: o
			}, {
				icon: j(() => [H(db, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])) : R("", !0)
		]));
	}
}), xb = /* @__PURE__ */ n({ default: () => xt });
//#endregion
//#region node_modules/@ckpack/vue-color/libs/style-inject.es-746bb8ed.js
function Sb(e, t) {
	t === void 0 && (t = {});
	var n = t.insertAt;
	if (e && typeof document < "u") {
		var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
		i.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
	}
}
//#endregion
//#region node_modules/@ckpack/vue-color/libs/utils/compoent.js
var Cb = function(e, t) {
	let { componentPrefix: n = "" } = t || {};
	e.component(`${n}${this.name}`, this);
}, wb = {}, Tb = {
	name: "Checkboard",
	props: {
		size: {
			type: [Number, String],
			default: 8
		},
		white: {
			type: String,
			default: "#fff"
		},
		grey: {
			type: String,
			default: "#e6e6e6"
		}
	},
	computed: { bgStyle() {
		return { "background-image": `url(${Db(this.white, this.grey, this.size)})` };
	} }
};
function Eb(e, t, n) {
	if (typeof document > "u") return null;
	let r = document.createElement("canvas");
	r.width = r.height = n * 2;
	let i = r.getContext("2d");
	return i ? (i.fillStyle = e, i.fillRect(0, 0, r.width, r.height), i.fillStyle = t, i.fillRect(0, 0, n, n), i.translate(n, n), i.fillRect(0, 0, n, n), r.toDataURL()) : null;
}
function Db(e, t, n) {
	let r = `${e},${t},${n}`;
	if (wb[r]) return wb[r];
	let i = Eb(e, t, n);
	return wb[r] = i, i;
}
function Ob(e, t, n, r, i, a) {
	return g(), K("div", {
		class: "vc-checkerboard",
		style: Ee(a.bgStyle)
	}, null, 4);
}
Sb(".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}"), Tb.render = Ob, Tb.__file = "src/components/checkboard/checkboard.vue", Tb.install = Cb;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/alpha/index.js
var kb = {
	name: "Alpha",
	components: { Checkboard: Tb },
	props: {
		value: Object,
		onChange: Function
	},
	computed: {
		colors() {
			return this.value;
		},
		gradientColor() {
			let { rgba: e } = this.colors, t = [
				e.r,
				e.g,
				e.b
			].join(",");
			return `linear-gradient(to right, rgba(${t}, 0) 0%, rgba(${t}, 1) 100%)`;
		}
	},
	methods: {
		handleChange(e, t) {
			!t && e.preventDefault();
			let { container: n } = this.$refs;
			if (!n) return;
			let r = n.clientWidth, i = n.getBoundingClientRect().left + window.pageXOffset, a = (e.pageX || (e.touches ? e.touches[0].pageX : 0)) - i, o;
			o = a < 0 ? 0 : a > r ? 1 : Math.round(a * 100 / r) / 100, this.colors.a !== o && this.$emit("change", {
				h: this.colors.hsl.h,
				s: this.colors.hsl.s,
				l: this.colors.hsl.l,
				a: o,
				source: "rgba"
			});
		},
		handleMouseDown(e) {
			this.handleChange(e, !0), window.addEventListener("mousemove", this.handleChange), window.addEventListener("mouseup", this.handleMouseUp);
		},
		handleMouseUp() {
			this.unbindEventListeners();
		},
		unbindEventListeners() {
			window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
		}
	}
}, Ab = { class: "vc-alpha" }, jb = { class: "vc-alpha-checkboard-wrap" }, Mb = [/* @__PURE__ */ Y("div", { class: "vc-alpha-picker" }, null, -1)];
function Nb(e, t, n, r, i, a) {
	let o = T("Checkboard");
	return g(), K("div", Ab, [
		Y("div", jb, [H(o)]),
		Y("div", {
			class: "vc-alpha-gradient",
			style: Ee({ background: a.gradientColor })
		}, null, 4),
		Y("div", {
			ref: "container",
			class: "vc-alpha-container",
			onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
			onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
			onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
		}, [Y("div", {
			class: "vc-alpha-pointer",
			style: Ee({ left: `${a.colors.a * 100}%` })
		}, Mb, 4)], 544)
	]);
}
Sb(".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), kb.render = Nb, kb.__file = "src/components/alpha/alpha.vue", kb.install = Cb;
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/util.js
function Pb(e, t) {
	Ib(e) && (e = "100%");
	var n = Lb(e);
	return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (e = t === 360 ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t)), e);
}
function Fb(e) {
	return Math.min(1, Math.max(0, e));
}
function Ib(e) {
	return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Lb(e) {
	return typeof e == "string" && e.indexOf("%") !== -1;
}
function Rb(e) {
	return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function zb(e) {
	return e <= 1 ? `${Number(e) * 100}%` : e;
}
function Bb(e) {
	return e.length === 1 ? "0" + e : String(e);
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/conversion.js
function Vb(e, t, n) {
	return {
		r: Pb(e, 255) * 255,
		g: Pb(t, 255) * 255,
		b: Pb(n, 255) * 255
	};
}
function Hb(e, t, n) {
	e = Pb(e, 255), t = Pb(t, 255), n = Pb(n, 255);
	var r = Math.max(e, t, n), i = Math.min(e, t, n), a = 0, o = 0, s = (r + i) / 2;
	if (r === i) o = 0, a = 0;
	else {
		var c = r - i;
		switch (o = s > .5 ? c / (2 - r - i) : c / (r + i), r) {
			case e:
				a = (t - n) / c + (t < n ? 6 : 0);
				break;
			case t:
				a = (n - e) / c + 2;
				break;
			case n: a = (e - t) / c + 4;
		}
		a /= 6;
	}
	return {
		h: a,
		s: o,
		l: s
	};
}
function Ub(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Wb(e, t, n) {
	var r, i, a;
	if (e = Pb(e, 360), t = Pb(t, 100), n = Pb(n, 100), t === 0) i = n, a = n, r = n;
	else {
		var o = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
		r = Ub(s, o, e + 1 / 3), i = Ub(s, o, e), a = Ub(s, o, e - 1 / 3);
	}
	return {
		r: r * 255,
		g: i * 255,
		b: a * 255
	};
}
function Gb(e, t, n) {
	e = Pb(e, 255), t = Pb(t, 255), n = Pb(n, 255);
	var r = Math.max(e, t, n), i = Math.min(e, t, n), a = 0, o = r, s = r - i, c = r === 0 ? 0 : s / r;
	if (r === i) a = 0;
	else {
		switch (r) {
			case e:
				a = (t - n) / s + (t < n ? 6 : 0);
				break;
			case t:
				a = (n - e) / s + 2;
				break;
			case n: a = (e - t) / s + 4;
		}
		a /= 6;
	}
	return {
		h: a,
		s: c,
		v: o
	};
}
function Kb(e, t, n) {
	e = Pb(e, 360) * 6, t = Pb(t, 100), n = Pb(n, 100);
	var r = Math.floor(e), i = e - r, a = n * (1 - t), o = n * (1 - i * t), s = n * (1 - (1 - i) * t), c = r % 6, l = [
		n,
		o,
		a,
		a,
		s,
		n
	][c], u = [
		s,
		n,
		n,
		o,
		a,
		a
	][c], d = [
		a,
		a,
		s,
		n,
		n,
		o
	][c];
	return {
		r: l * 255,
		g: u * 255,
		b: d * 255
	};
}
function qb(e, t, n, r) {
	var i = [
		Bb(Math.round(e).toString(16)),
		Bb(Math.round(t).toString(16)),
		Bb(Math.round(n).toString(16))
	];
	return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function Jb(e, t, n, r, i) {
	var a = [
		Bb(Math.round(e).toString(16)),
		Bb(Math.round(t).toString(16)),
		Bb(Math.round(n).toString(16)),
		Bb(Yb(r))
	];
	return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Yb(e) {
	return Math.round(parseFloat(e) * 255).toString(16);
}
function Xb(e) {
	return Zb(e) / 255;
}
function Zb(e) {
	return parseInt(e, 16);
}
function Qb(e) {
	return {
		r: e >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var $b = {
	aliceblue: "#f0f8ff",
	antiquewhite: "#faebd7",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	azure: "#f0ffff",
	beige: "#f5f5dc",
	bisque: "#ffe4c4",
	black: "#000000",
	blanchedalmond: "#ffebcd",
	blue: "#0000ff",
	blueviolet: "#8a2be2",
	brown: "#a52a2a",
	burlywood: "#deb887",
	cadetblue: "#5f9ea0",
	chartreuse: "#7fff00",
	chocolate: "#d2691e",
	coral: "#ff7f50",
	cornflowerblue: "#6495ed",
	cornsilk: "#fff8dc",
	crimson: "#dc143c",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgoldenrod: "#b8860b",
	darkgray: "#a9a9a9",
	darkgreen: "#006400",
	darkgrey: "#a9a9a9",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkseagreen: "#8fbc8f",
	darkslateblue: "#483d8b",
	darkslategray: "#2f4f4f",
	darkslategrey: "#2f4f4f",
	darkturquoise: "#00ced1",
	darkviolet: "#9400d3",
	deeppink: "#ff1493",
	deepskyblue: "#00bfff",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1e90ff",
	firebrick: "#b22222",
	floralwhite: "#fffaf0",
	forestgreen: "#228b22",
	fuchsia: "#ff00ff",
	gainsboro: "#dcdcdc",
	ghostwhite: "#f8f8ff",
	goldenrod: "#daa520",
	gold: "#ffd700",
	gray: "#808080",
	green: "#008000",
	greenyellow: "#adff2f",
	grey: "#808080",
	honeydew: "#f0fff0",
	hotpink: "#ff69b4",
	indianred: "#cd5c5c",
	indigo: "#4b0082",
	ivory: "#fffff0",
	khaki: "#f0e68c",
	lavenderblush: "#fff0f5",
	lavender: "#e6e6fa",
	lawngreen: "#7cfc00",
	lemonchiffon: "#fffacd",
	lightblue: "#add8e6",
	lightcoral: "#f08080",
	lightcyan: "#e0ffff",
	lightgoldenrodyellow: "#fafad2",
	lightgray: "#d3d3d3",
	lightgreen: "#90ee90",
	lightgrey: "#d3d3d3",
	lightpink: "#ffb6c1",
	lightsalmon: "#ffa07a",
	lightseagreen: "#20b2aa",
	lightskyblue: "#87cefa",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#b0c4de",
	lightyellow: "#ffffe0",
	lime: "#00ff00",
	limegreen: "#32cd32",
	linen: "#faf0e6",
	magenta: "#ff00ff",
	maroon: "#800000",
	mediumaquamarine: "#66cdaa",
	mediumblue: "#0000cd",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370db",
	mediumseagreen: "#3cb371",
	mediumslateblue: "#7b68ee",
	mediumspringgreen: "#00fa9a",
	mediumturquoise: "#48d1cc",
	mediumvioletred: "#c71585",
	midnightblue: "#191970",
	mintcream: "#f5fffa",
	mistyrose: "#ffe4e1",
	moccasin: "#ffe4b5",
	navajowhite: "#ffdead",
	navy: "#000080",
	oldlace: "#fdf5e6",
	olive: "#808000",
	olivedrab: "#6b8e23",
	orange: "#ffa500",
	orangered: "#ff4500",
	orchid: "#da70d6",
	palegoldenrod: "#eee8aa",
	palegreen: "#98fb98",
	paleturquoise: "#afeeee",
	palevioletred: "#db7093",
	papayawhip: "#ffefd5",
	peachpuff: "#ffdab9",
	peru: "#cd853f",
	pink: "#ffc0cb",
	plum: "#dda0dd",
	powderblue: "#b0e0e6",
	purple: "#800080",
	rebeccapurple: "#663399",
	red: "#ff0000",
	rosybrown: "#bc8f8f",
	royalblue: "#4169e1",
	saddlebrown: "#8b4513",
	salmon: "#fa8072",
	sandybrown: "#f4a460",
	seagreen: "#2e8b57",
	seashell: "#fff5ee",
	sienna: "#a0522d",
	silver: "#c0c0c0",
	skyblue: "#87ceeb",
	slateblue: "#6a5acd",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#fffafa",
	springgreen: "#00ff7f",
	steelblue: "#4682b4",
	tan: "#d2b48c",
	teal: "#008080",
	thistle: "#d8bfd8",
	tomato: "#ff6347",
	turquoise: "#40e0d0",
	violet: "#ee82ee",
	wheat: "#f5deb3",
	white: "#ffffff",
	whitesmoke: "#f5f5f5",
	yellow: "#ffff00",
	yellowgreen: "#9acd32"
};
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/format-input.js
function ex(e) {
	var t = {
		r: 0,
		g: 0,
		b: 0
	}, n = 1, r = null, i = null, a = null, o = !1, s = !1;
	return typeof e == "string" && (e = ax(e)), typeof e == "object" && (ox(e.r) && ox(e.g) && ox(e.b) ? (t = Vb(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ox(e.h) && ox(e.s) && ox(e.v) ? (r = zb(e.s), i = zb(e.v), t = Kb(e.h, r, i), o = !0, s = "hsv") : ox(e.h) && ox(e.s) && ox(e.l) && (r = zb(e.s), a = zb(e.l), t = Wb(e.h, r, a), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Rb(n), {
		ok: o,
		format: e.format || s,
		r: Math.min(255, Math.max(t.r, 0)),
		g: Math.min(255, Math.max(t.g, 0)),
		b: Math.min(255, Math.max(t.b, 0)),
		a: n
	};
}
var tx = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", nx = `[\\s|\\(]+(${tx})[,|\\s]+(${tx})[,|\\s]+(${tx})\\s*\\)?`, rx = `[\\s|\\(]+(${tx})[,|\\s]+(${tx})[,|\\s]+(${tx})[,|\\s]+(${tx})\\s*\\)?`, ix = {
	CSS_UNIT: new RegExp(tx),
	rgb: RegExp("rgb" + nx),
	rgba: RegExp("rgba" + rx),
	hsl: RegExp("hsl" + nx),
	hsla: RegExp("hsla" + rx),
	hsv: RegExp("hsv" + nx),
	hsva: RegExp("hsva" + rx),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function ax(e) {
	if (e = e.trim().toLowerCase(), e.length === 0) return !1;
	var t = !1;
	if ($b[e]) e = $b[e], t = !0;
	else if (e === "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var n = ix.rgb.exec(e);
	return n ? {
		r: n[1],
		g: n[2],
		b: n[3]
	} : (n = ix.rgba.exec(e), n ? {
		r: n[1],
		g: n[2],
		b: n[3],
		a: n[4]
	} : (n = ix.hsl.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3]
	} : (n = ix.hsla.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3],
		a: n[4]
	} : (n = ix.hsv.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3]
	} : (n = ix.hsva.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3],
		a: n[4]
	} : (n = ix.hex8.exec(e), n ? {
		r: Zb(n[1]),
		g: Zb(n[2]),
		b: Zb(n[3]),
		a: Xb(n[4]),
		format: t ? "name" : "hex8"
	} : (n = ix.hex6.exec(e), n ? {
		r: Zb(n[1]),
		g: Zb(n[2]),
		b: Zb(n[3]),
		format: t ? "name" : "hex"
	} : (n = ix.hex4.exec(e), n ? {
		r: Zb(n[1] + n[1]),
		g: Zb(n[2] + n[2]),
		b: Zb(n[3] + n[3]),
		a: Xb(n[4] + n[4]),
		format: t ? "name" : "hex8"
	} : (n = ix.hex3.exec(e), n ? {
		r: Zb(n[1] + n[1]),
		g: Zb(n[2] + n[2]),
		b: Zb(n[3] + n[3]),
		format: t ? "name" : "hex"
	} : !1)))))))));
}
function ox(e) {
	return !!ix.CSS_UNIT.exec(String(e));
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/index.js
var sx = function() {
	function e(t, n) {
		if (t === void 0 && (t = ""), n === void 0 && (n = {}), t instanceof e) return t;
		typeof t == "number" && (t = Qb(t)), this.originalInput = t;
		var r = ex(t);
		this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = n.format ?? r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
	}
	return e.prototype.isDark = function() {
		return this.getBrightness() < 128;
	}, e.prototype.isLight = function() {
		return !this.isDark();
	}, e.prototype.getBrightness = function() {
		var e = this.toRgb();
		return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
	}, e.prototype.getLuminance = function() {
		var e = this.toRgb(), t, n, r, i = e.r / 255, a = e.g / 255, o = e.b / 255;
		return t = i <= .03928 ? i / 12.92 : ((i + .055) / 1.055) ** 2.4, n = a <= .03928 ? a / 12.92 : ((a + .055) / 1.055) ** 2.4, r = o <= .03928 ? o / 12.92 : ((o + .055) / 1.055) ** 2.4, .2126 * t + .7152 * n + .0722 * r;
	}, e.prototype.getAlpha = function() {
		return this.a;
	}, e.prototype.setAlpha = function(e) {
		return this.a = Rb(e), this.roundA = Math.round(100 * this.a) / 100, this;
	}, e.prototype.isMonochrome = function() {
		return this.toHsl().s === 0;
	}, e.prototype.toHsv = function() {
		var e = Gb(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			v: e.v,
			a: this.a
		};
	}, e.prototype.toHsvString = function() {
		var e = Gb(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
		return this.a === 1 ? `hsv(${t}, ${n}%, ${r}%)` : `hsva(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHsl = function() {
		var e = Hb(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			l: e.l,
			a: this.a
		};
	}, e.prototype.toHslString = function() {
		var e = Hb(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
		return this.a === 1 ? `hsl(${t}, ${n}%, ${r}%)` : `hsla(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHex = function(e) {
		return e === void 0 && (e = !1), qb(this.r, this.g, this.b, e);
	}, e.prototype.toHexString = function(e) {
		return e === void 0 && (e = !1), "#" + this.toHex(e);
	}, e.prototype.toHex8 = function(e) {
		return e === void 0 && (e = !1), Jb(this.r, this.g, this.b, this.a, e);
	}, e.prototype.toHex8String = function(e) {
		return e === void 0 && (e = !1), "#" + this.toHex8(e);
	}, e.prototype.toHexShortString = function(e) {
		return e === void 0 && (e = !1), this.a === 1 ? this.toHexString(e) : this.toHex8String(e);
	}, e.prototype.toRgb = function() {
		return {
			r: Math.round(this.r),
			g: Math.round(this.g),
			b: Math.round(this.b),
			a: this.a
		};
	}, e.prototype.toRgbString = function() {
		var e = Math.round(this.r), t = Math.round(this.g), n = Math.round(this.b);
		return this.a === 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${this.roundA})`;
	}, e.prototype.toPercentageRgb = function() {
		var e = function(e) {
			return `${Math.round(Pb(e, 255) * 100)}%`;
		};
		return {
			r: e(this.r),
			g: e(this.g),
			b: e(this.b),
			a: this.a
		};
	}, e.prototype.toPercentageRgbString = function() {
		var e = function(e) {
			return Math.round(Pb(e, 255) * 100);
		};
		return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
	}, e.prototype.toName = function() {
		if (this.a === 0) return "transparent";
		if (this.a < 1) return !1;
		for (var e = "#" + qb(this.r, this.g, this.b, !1), t = 0, n = Object.entries($b); t < n.length; t++) {
			var r = n[t], i = r[0];
			if (e === r[1]) return i;
		}
		return !1;
	}, e.prototype.toString = function(e) {
		var t = !!e;
		e ??= this.format;
		var n = !1, r = this.a < 1 && this.a >= 0;
		return !t && r && (e.startsWith("hex") || e === "name") ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (n = this.toRgbString()), e === "prgb" && (n = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (n = this.toHexString()), e === "hex3" && (n = this.toHexString(!0)), e === "hex4" && (n = this.toHex8String(!0)), e === "hex8" && (n = this.toHex8String()), e === "name" && (n = this.toName()), e === "hsl" && (n = this.toHslString()), e === "hsv" && (n = this.toHsvString()), n || this.toHexString());
	}, e.prototype.toNumber = function() {
		return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
	}, e.prototype.clone = function() {
		return new e(this.toString());
	}, e.prototype.lighten = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.l += t / 100, n.l = Fb(n.l), new e(n);
	}, e.prototype.brighten = function(t) {
		t === void 0 && (t = 10);
		var n = this.toRgb();
		return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
	}, e.prototype.darken = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.l -= t / 100, n.l = Fb(n.l), new e(n);
	}, e.prototype.tint = function(e) {
		return e === void 0 && (e = 10), this.mix("white", e);
	}, e.prototype.shade = function(e) {
		return e === void 0 && (e = 10), this.mix("black", e);
	}, e.prototype.desaturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s -= t / 100, n.s = Fb(n.s), new e(n);
	}, e.prototype.saturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s += t / 100, n.s = Fb(n.s), new e(n);
	}, e.prototype.greyscale = function() {
		return this.desaturate(100);
	}, e.prototype.spin = function(t) {
		var n = this.toHsl(), r = (n.h + t) % 360;
		return n.h = r < 0 ? 360 + r : r, new e(n);
	}, e.prototype.mix = function(t, n) {
		n === void 0 && (n = 50);
		var r = this.toRgb(), i = new e(t).toRgb(), a = n / 100;
		return new e({
			r: (i.r - r.r) * a + r.r,
			g: (i.g - r.g) * a + r.g,
			b: (i.b - r.b) * a + r.b,
			a: (i.a - r.a) * a + r.a
		});
	}, e.prototype.analogous = function(t, n) {
		t === void 0 && (t = 6), n === void 0 && (n = 30);
		var r = this.toHsl(), i = 360 / n, a = [this];
		for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) r.h = (r.h + i) % 360, a.push(new e(r));
		return a;
	}, e.prototype.complement = function() {
		var t = this.toHsl();
		return t.h = (t.h + 180) % 360, new e(t);
	}, e.prototype.monochromatic = function(t) {
		t === void 0 && (t = 6);
		for (var n = this.toHsv(), r = n.h, i = n.s, a = n.v, o = [], s = 1 / t; t--;) o.push(new e({
			h: r,
			s: i,
			v: a
		})), a = (a + s) % 1;
		return o;
	}, e.prototype.splitcomplement = function() {
		var t = this.toHsl(), n = t.h;
		return [
			this,
			new e({
				h: (n + 72) % 360,
				s: t.s,
				l: t.l
			}),
			new e({
				h: (n + 216) % 360,
				s: t.s,
				l: t.l
			})
		];
	}, e.prototype.onBackground = function(t) {
		var n = this.toRgb(), r = new e(t).toRgb(), i = n.a + r.a * (1 - n.a);
		return new e({
			r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
			g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
			b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
			a: i
		});
	}, e.prototype.triad = function() {
		return this.polyad(3);
	}, e.prototype.tetrad = function() {
		return this.polyad(4);
	}, e.prototype.polyad = function(t) {
		for (var n = this.toHsl(), r = n.h, i = [this], a = 360 / t, o = 1; o < t; o++) i.push(new e({
			h: (r + o * a) % 360,
			s: n.s,
			l: n.l
		}));
		return i;
	}, e.prototype.equals = function(t) {
		return this.toRgbString() === new e(t).toRgbString();
	}, e;
}();
//#endregion
//#region node_modules/@ckpack/vue-color/libs/mixin/color.js
function cx(...e) {
	return new sx(...e);
}
function lx(e, t) {
	let n = e && e.a, r;
	r = e && e.hsl ? cx(e.hsl) : e && e.hex && e.hex.length > 0 ? cx(e.hex) : e && e.hsv ? cx(e.hsv) : e && e.rgba ? cx(e.rgba) : e && e.rgb ? cx(e.rgb) : cx(e), r && (r._a === void 0 || r._a === null) && r.setAlpha(n || r.getAlpha());
	let i = r.toHsl(), a = r.toHsv();
	return i.s === 0 && (a.h = i.h = e.h || e.hsl && e.hsl.h || t || 0), a.v < .0164 && (a.h = e.h || e.hsv && e.hsv.h || 0, a.s = e.s || e.hsv && e.hsv.s || 0), i.l < .01 && (i.h = e.h || e.hsl && e.hsl.h || 0, i.s = e.s || e.hsl && e.hsl.s || 0), {
		hsl: i,
		hex: r.toHexString().toUpperCase(),
		hex8: r.toHex8String().toUpperCase(),
		rgba: r.toRgb(),
		hsv: a,
		oldHue: e.h || t || i.h,
		source: e.source,
		a: r.getAlpha()
	};
}
var ux = {
	model: {
		prop: "modelValue",
		event: "update:modelValue"
	},
	props: ["modelValue"],
	data() {
		return { val: lx(this.modelValue) };
	},
	computed: { colors: {
		get() {
			return this.val;
		},
		set(e) {
			this.val = e, this.$emit("update:modelValue", e);
		}
	} },
	watch: { modelValue(e) {
		this.val = lx(e);
	} },
	methods: {
		colorChange(e, t) {
			this.oldHue = this.colors.hsl.h, this.colors = lx(e, t || this.oldHue);
		},
		isValidHex(e) {
			return cx(e).isValid;
		},
		simpleCheckForValidColor(e) {
			let t = [
				"r",
				"g",
				"b",
				"a",
				"h",
				"s",
				"l",
				"v"
			], n = 0, r = 0;
			for (let i = 0; i < t.length; i++) {
				let a = t[i];
				e[a] && (n++, isNaN(e[a]) || r++);
			}
			if (n === r) return e;
		},
		paletteUpperCase(e) {
			return e.map((e) => e.toUpperCase());
		},
		isTransparent(e) {
			return cx(e).getAlpha() === 0;
		}
	}
}, dx = {
	name: "EditableInput",
	props: {
		label: String,
		labelText: String,
		desc: String,
		value: [String, Number],
		max: Number,
		min: Number,
		arrowOffset: {
			type: Number,
			default: 1
		}
	},
	computed: {
		val: {
			get() {
				return this.value;
			},
			set(e) {
				if (this.max !== void 0 && +e > this.max) this.$refs.input.value = this.max;
				else return e;
			}
		},
		labelId() {
			return `input__label__${this.label}__${Math.random().toString().slice(2, 5)}`;
		},
		labelSpanText() {
			return this.labelText || this.label;
		}
	},
	methods: {
		update(e) {
			this.handleChange(e.target.value);
		},
		handleChange(e) {
			let t = {};
			t[this.label] = e, (t.hex === void 0 && t["#"] === void 0 || e.length > 5) && this.$emit("change", t);
		},
		handleKeyDown(e) {
			let { val: t } = this, n = Number(t);
			if (n) {
				let r = this.arrowOffset || 1;
				e.keyCode === 38 && (t = n + r, this.handleChange(t), e.preventDefault()), e.keyCode === 40 && (t = n - r, this.handleChange(t), e.preventDefault());
			}
		}
	}
}, fx = { class: "vc-editable-input" }, px = ["aria-labelledby"], mx = ["id", "for"], hx = { class: "vc-input__desc" };
function gx(e, t, n, r, i, a) {
	return g(), K("div", fx, [
		P(Y("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.val = e,
			"aria-labelledby": a.labelId,
			class: "vc-input__input",
			onKeydown: t[1] ||= (...e) => a.handleKeyDown && a.handleKeyDown(...e),
			onInput: t[2] ||= (...e) => a.update && a.update(...e)
		}, null, 40, px), [[J, a.val]]),
		Y("span", {
			id: a.labelId,
			for: n.label,
			class: "vc-input__label"
		}, q(a.labelSpanText), 9, mx),
		Y("span", hx, q(n.desc), 1)
	]);
}
Sb(".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}"), dx.render = gx, dx.__file = "src/components/editable-input/editable-input.vue", dx.install = Cb;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/utils/utils.js
function _x(e, t, n) {
	return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e;
}
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/saturation/index.js
var vx = {
	name: "Saturation",
	props: { value: Object },
	computed: {
		colors() {
			return this.value;
		},
		bgColor() {
			return `hsl(${this.colors.hsv.h}, 100%, 50%)`;
		},
		pointerTop() {
			return `${-(this.colors.hsv.v * 100) + 1 + 100}%`;
		},
		pointerLeft() {
			return `${this.colors.hsv.s * 100}%`;
		}
	},
	methods: {
		handleChange(e, t) {
			!t && e.preventDefault();
			let { container: n } = this.$refs;
			if (!n) return;
			let r = n.clientWidth, i = n.clientHeight, a = n.getBoundingClientRect().left + window.pageXOffset, o = n.getBoundingClientRect().top + window.pageYOffset, s = e.pageX || (e.touches ? e.touches[0].pageX : 0), c = e.pageY || (e.touches ? e.touches[0].pageY : 0), l = _x(s - a, 0, r), u = _x(c - o, 0, i), d = l / r, f = _x(-(u / i) + 1, 0, 1);
			this.onChange({
				h: this.colors.hsv.h,
				s: d,
				v: f,
				a: this.colors.hsv.a,
				source: "hsva"
			});
		},
		onChange(e) {
			this.$emit("change", e);
		},
		handleMouseDown(e) {
			window.addEventListener("mousemove", this.handleChange), window.addEventListener("mouseup", this.handleChange), window.addEventListener("mouseup", this.handleMouseUp);
		},
		handleMouseUp(e) {
			this.unbindEventListeners();
		},
		unbindEventListeners() {
			window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
		}
	}
}, yx = /*#__PURE__*/ Y("div", { class: "vc-saturation--white" }, null, -1), bx = /*#__PURE__*/ Y("div", { class: "vc-saturation--black" }, null, -1), xx = [/* @__PURE__ */ Y("div", { class: "vc-saturation-circle" }, null, -1)];
function Sx(e, t, n, r, i, a) {
	return g(), K("div", {
		ref: "container",
		class: "vc-saturation",
		style: Ee({ background: a.bgColor }),
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [
		yx,
		bx,
		Y("div", {
			class: "vc-saturation-pointer",
			style: Ee({
				top: a.pointerTop,
				left: a.pointerLeft
			})
		}, xx, 4)
	], 36);
}
Sb(".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}"), vx.render = Sx, vx.__file = "src/components/saturation/saturation.vue", vx.install = Cb;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/hue/index.js
var Cx = {
	name: "Hue",
	props: {
		value: Object,
		direction: {
			type: String,
			default: "horizontal"
		}
	},
	data() {
		return {
			oldHue: 0,
			pullDirection: ""
		};
	},
	computed: {
		colors() {
			return this.value;
		},
		directionClass() {
			return {
				"vc-hue--horizontal": this.direction === "horizontal",
				"vc-hue--vertical": this.direction === "vertical"
			};
		},
		pointerTop() {
			return this.direction === "vertical" ? this.colors.hsl.h === 0 && this.pullDirection === "right" ? 0 : `${-(this.colors.hsl.h * 100 / 360) + 100}%` : 0;
		},
		pointerLeft() {
			return this.direction === "vertical" ? 0 : this.colors.hsl.h === 0 && this.pullDirection === "right" ? "100%" : `${this.colors.hsl.h * 100 / 360}%`;
		}
	},
	watch: { value: {
		handler(e, t) {
			let { h: n } = e.hsl;
			n !== 0 && n - this.oldHue > 0 && (this.pullDirection = "right"), n !== 0 && n - this.oldHue < 0 && (this.pullDirection = "left"), this.oldHue = n;
		},
		deep: !0,
		immediate: !0
	} },
	methods: {
		handleChange(e, t) {
			!t && e.preventDefault();
			let { container: n } = this.$refs;
			if (!n) return;
			let r = n.clientWidth, i = n.clientHeight, a = n.getBoundingClientRect().left + window.pageXOffset, o = n.getBoundingClientRect().top + window.pageYOffset, s = e.pageX || (e.touches ? e.touches[0].pageX : 0), c = e.pageY || (e.touches ? e.touches[0].pageY : 0), l = s - a, u = c - o, d, f;
			this.direction === "vertical" ? (u < 0 ? d = 360 : u > i ? d = 0 : (f = -(u * 100 / i) + 100, d = 360 * f / 100), this.colors.hsl.h !== d && this.$emit("change", {
				h: d,
				s: this.colors.hsl.s,
				l: this.colors.hsl.l,
				a: this.colors.hsl.a,
				source: "hsl"
			})) : (l < 0 ? d = 0 : l > r ? d = 360 : (f = l * 100 / r, d = 360 * f / 100), this.colors.hsl.h !== d && this.$emit("change", {
				h: d,
				s: this.colors.hsl.s,
				l: this.colors.hsl.l,
				a: this.colors.hsl.a,
				source: "hsl"
			}));
		},
		handleMouseDown(e) {
			this.handleChange(e, !0), window.addEventListener("mousemove", this.handleChange), window.addEventListener("mouseup", this.handleChange), window.addEventListener("mouseup", this.handleMouseUp);
		},
		handleMouseUp(e) {
			this.unbindEventListeners();
		},
		unbindEventListeners() {
			window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
		}
	}
}, wx = ["aria-valuenow"], Tx = [/* @__PURE__ */ Y("div", { class: "vc-hue-picker" }, null, -1)];
function Ex(e, t, n, r, i, a) {
	return g(), K("div", { class: Z(["vc-hue", [a.directionClass]]) }, [Y("div", {
		ref: "container",
		class: "vc-hue-container",
		role: "slider",
		"aria-valuenow": a.colors.hsl.h,
		"aria-valuemin": "0",
		"aria-valuemax": "360",
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [Y("div", {
		class: "vc-hue-pointer",
		style: Ee({
			top: a.pointerTop,
			left: a.pointerLeft
		}),
		role: "presentation"
	}, Tx, 4)], 40, wx)], 2);
}
Sb(".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), Cx.render = Ex, Cx.__file = "src/components/hue/hue.vue", Cx.install = Cb;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/chrome/index.js
var Dx = {
	name: "Chrome",
	components: {
		Saturation: vx,
		Hue: Cx,
		Alpha: kb,
		EdIn: dx,
		Checkboard: Tb
	},
	mixins: [ux],
	props: {
		disableAlpha: {
			type: Boolean,
			default: !1
		},
		disableFields: {
			type: Boolean,
			default: !1
		},
		format: {
			type: String,
			default: "hex"
		}
	},
	data() {
		return {
			fieldsIndex: "hex",
			highlight: !1
		};
	},
	computed: {
		hsl() {
			let { h: e, s: t, l: n } = this.colors.hsl;
			return {
				h: e.toFixed(),
				s: `${(t * 100).toFixed()}%`,
				l: `${(n * 100).toFixed()}%`
			};
		},
		activeColor() {
			let { rgba: e } = this.colors;
			return `rgba(${[
				e.r,
				e.g,
				e.b,
				e.a
			].join(",")})`;
		},
		hasAlpha() {
			return this.colors.a < 1;
		}
	},
	watch: { format: {
		handler(e) {
			this.fieldsIndex = e;
		},
		immediate: !0
	} },
	methods: {
		childChange(e) {
			this.colorChange(e);
		},
		inputChange(e) {
			if (e) {
				if (e.hex) this.isValidHex(e.hex) && this.colorChange({
					hex: e.hex,
					source: "hex"
				});
				else if (e.r || e.g || e.b || e.a) this.colorChange({
					r: e.r || this.colors.rgba.r,
					g: e.g || this.colors.rgba.g,
					b: e.b || this.colors.rgba.b,
					a: e.a || this.colors.rgba.a,
					source: "rgba"
				});
				else if (e.h || e.s || e.l) {
					let t = e.s ? e.s.replace("%", "") / 100 : this.colors.hsl.s, n = e.l ? e.l.replace("%", "") / 100 : this.colors.hsl.l;
					this.colorChange({
						h: e.h || this.colors.hsl.h,
						s: t,
						l: n,
						source: "hsl"
					});
				}
			}
		},
		toggleViews() {
			switch (this.fieldsIndex) {
				case "hex":
					this.fieldsIndex = `rgb${this.disableAlpha ? "" : "a"}`;
					break;
				case "rgb":
				case "rgba":
					this.fieldsIndex = `hsl${this.disableAlpha ? "" : "a"}`;
					break;
				default: this.fieldsIndex = "hex";
			}
			this.$emit("update:format", this.fieldsIndex);
		},
		showHighlight() {
			this.highlight = !0;
		},
		hideHighlight() {
			this.highlight = !1;
		}
	}
}, Ox = { class: "vc-chrome-saturation-wrap" }, kx = { class: "vc-chrome-body" }, Ax = { class: "vc-chrome-controls" }, jx = { class: "vc-chrome-color-wrap" }, Mx = ["aria-label"], Nx = { class: "vc-chrome-sliders" }, Px = { class: "vc-chrome-hue-wrap" }, Fx = {
	key: 0,
	class: "vc-chrome-alpha-wrap"
}, Ix = {
	key: 0,
	class: "vc-chrome-fields-wrap"
}, Lx = { class: "vc-chrome-fields" }, Rx = { class: "vc-chrome-field" }, zx = { class: "vc-chrome-fields" }, Bx = { class: "vc-chrome-field" }, Vx = { class: "vc-chrome-field" }, Hx = { class: "vc-chrome-field" }, Ux = {
	key: 0,
	class: "vc-chrome-field"
}, Wx = { class: "vc-chrome-fields" }, Gx = { class: "vc-chrome-field" }, Kx = { class: "vc-chrome-field" }, qx = { class: "vc-chrome-field" }, Jx = {
	key: 0,
	class: "vc-chrome-field"
}, Yx = { class: "vc-chrome-toggle-icon" }, Xx = [/* @__PURE__ */ Y("path", {
	fill: "#333",
	d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1)], Zx = { class: "vc-chrome-toggle-icon-highlight" };
function Qx(e, t, n, r, i, a) {
	let o = T("Saturation"), s = T("Checkboard"), c = T("Hue"), l = T("Alpha"), u = T("EdIn");
	return g(), K("div", {
		role: "application",
		"aria-label": "Chrome color picker",
		class: Z(["vc-chrome", [n.disableAlpha ? "vc-chrome__disable-alpha" : ""]])
	}, [Y("div", Ox, [H(o, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]), Y("div", kx, [Y("div", Ax, [Y("div", jx, [Y("div", {
		"aria-label": `current color is ${e.colors.hex}`,
		class: "vc-chrome-active-color",
		style: Ee({ background: a.activeColor })
	}, null, 12, Mx), n.disableAlpha ? R("v-if", !0) : (g(), V(s, { key: 0 }))]), Y("div", Nx, [Y("div", Px, [H(c, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]), n.disableAlpha ? R("v-if", !0) : (g(), K("div", Fx, [H(l, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]))])]), n.disableFields ? R("v-if", !0) : (g(), K("div", Ix, [
		P(Y("div", Lx, [R(" hex "), Y("div", Rx, [a.hasAlpha ? R("v-if", !0) : (g(), V(u, {
			key: 0,
			label: "hex",
			value: e.colors.hex,
			onChange: a.inputChange
		}, null, 8, ["value", "onChange"])), a.hasAlpha ? (g(), V(u, {
			key: 1,
			label: "hex",
			value: e.colors.hex8,
			onChange: a.inputChange
		}, null, 8, ["value", "onChange"])) : R("v-if", !0)])], 512), [[S, i.fieldsIndex === "hex"]]),
		P(Y("div", zx, [
			R(" rgba "),
			Y("div", Bx, [H(u, {
				label: "r",
				value: e.colors.rgba.r,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", Vx, [H(u, {
				label: "g",
				value: e.colors.rgba.g,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", Hx, [H(u, {
				label: "b",
				value: e.colors.rgba.b,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			n.disableAlpha ? R("v-if", !0) : (g(), K("div", Ux, [H(u, {
				label: "a",
				value: e.colors.a,
				"arrow-offset": .01,
				max: 1,
				onChange: a.inputChange
			}, null, 8, [
				"value",
				"arrow-offset",
				"onChange"
			])]))
		], 512), [[S, ["rgb", "rgba"].includes(i.fieldsIndex)]]),
		P(Y("div", Wx, [
			R(" hsla "),
			Y("div", Gx, [H(u, {
				label: "h",
				value: a.hsl.h,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", Kx, [H(u, {
				label: "s",
				value: a.hsl.s,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", qx, [H(u, {
				label: "l",
				value: a.hsl.l,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			n.disableAlpha ? R("v-if", !0) : (g(), K("div", Jx, [H(u, {
				label: "a",
				value: e.colors.a,
				"arrow-offset": .01,
				max: 1,
				onChange: a.inputChange
			}, null, 8, [
				"value",
				"arrow-offset",
				"onChange"
			])]))
		], 512), [[S, ["hsl", "hsla"].includes(i.fieldsIndex)]]),
		R(" btn "),
		Y("div", {
			class: "vc-chrome-toggle-btn",
			role: "button",
			"aria-label": "Change another color definition",
			onClick: t[3] ||= (...e) => a.toggleViews && a.toggleViews(...e)
		}, [Y("div", Yx, [(g(), K("svg", {
			style: {
				width: "24px",
				height: "24px"
			},
			viewBox: "0 0 24 24",
			onMouseover: t[0] ||= (...e) => a.showHighlight && a.showHighlight(...e),
			onMouseenter: t[1] ||= (...e) => a.showHighlight && a.showHighlight(...e),
			onMouseout: t[2] ||= (...e) => a.hideHighlight && a.hideHighlight(...e)
		}, Xx, 32))]), P(Y("div", Zx, null, 512), [[S, i.highlight]])]),
		R(" btn ")
	]))])], 2);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/colors.mjs
Sb(".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}"), Dx.render = Qx, Dx.__file = "src/components/chrome/chrome.vue", Dx.install = Cb, h(tt);
var $x = class {
	constructor(e, t, n, r) {
		this.r = e, this.g = t, this.b = n, this.name = r, this.r = Math.min(e, 255), this.g = Math.min(t, 255), this.b = Math.min(n, 255), this.name = r;
	}
	r;
	g;
	b;
	name;
	get color() {
		let e = (e) => `00${e.toString(16)}`.slice(-2);
		return `#${e(this.r)}${e(this.g)}${e(this.b)}`;
	}
}, eS = new $x(182, 70, 157, m("Purple")), tS = new $x(221, 203, 85, m("Gold")), nS = new $x(0, 130, 201, m("Nextcloud blue")), rS = new $x(0, 0, 0, m("Black")), iS = new $x(255, 255, 255, m("White")), aS = [
	eS,
	new $x(191, 103, 139, m("Rosy brown")),
	new $x(201, 136, 121, m("Feldspar")),
	new $x(211, 169, 103, m("Whiskey")),
	tS,
	new $x(165, 184, 114, m("Olivine")),
	new $x(110, 166, 143, m("Acapulco")),
	new $x(55, 148, 172, m("Boston Blue")),
	nS,
	new $x(45, 115, 190, m("Mariner")),
	new $x(91, 100, 179, m("Blue Violet")),
	new $x(136, 85, 168, m("Deluge"))
];
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcColorPicker.mjs
h(E);
var oS = ["aria-label"], sS = {
	key: 0,
	class: "color-picker__simple"
}, cS = [
	"aria-label",
	"name",
	"checked",
	"onClick"
], lS = ["title"], uS = [
	"aria-label",
	"name",
	"checked"
], dS = {
	key: 0,
	class: "color-picker__navigation"
}, fS = /* @__PURE__ */ D(/* @__PURE__ */ B({
	__name: "NcColorPicker",
	props: /* @__PURE__ */ me({
		advancedFields: { type: Boolean },
		clearable: { type: Boolean },
		container: { default: "body" },
		palette: { default: () => [] },
		paletteOnly: { type: Boolean }
	}, {
		modelValue: { required: !0 },
		modelModifiers: {},
		open: { type: Boolean },
		openModifiers: {}
	}),
	emits: /* @__PURE__ */ me(["submit", "closed"], ["update:modelValue", "update:open"]),
	setup(e, { emit: t }) {
		let n = w(e, "modelValue"), r = w(e, "open"), i = e, o = t, s = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i, c = Je(), l = X(!1), d = W(() => {
			let e = i.palette;
			for (let t of e) if (typeof t == "string" && !t.match(s) || typeof t == "object" && !t.color?.match(s)) {
				a.error("[NcColorPicker] Invalid palette passed", { color: t }), e = [];
				break;
			}
			return e.length === 0 && (e = i.clearable ? [
				...aS,
				rS,
				iS
			] : [...aS]), e.map((e) => ({
				color: typeof e == "object" ? e.color : e,
				name: typeof e == "object" && e.name ? e.name : m("A color with a HEX value {hex}", { hex: typeof e == "string" ? e : e.color })
			}));
		});
		function p(e) {
			o("submit", n.value), e(), l.value = !1;
		}
		function h(e) {
			e = typeof e == "string" ? e : e.color, i.clearable && n.value === e ? n.value = void 0 : n.value = e;
		}
		function _(e) {
			n.value = e.hex;
		}
		function ee(e) {
			return v(e) > .5 ? rS.color : iS.color;
		}
		function v(e) {
			let [t, n, r] = y(e);
			return (.2126 * t + .7152 * n + .0722 * r) / 255;
		}
		function y(e) {
			let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
			return t ? [
				parseInt(t[1], 16),
				parseInt(t[2], 16),
				parseInt(t[3], 16)
			] : [
				0,
				0,
				0
			];
		}
		return (t, i) => (g(), V(U(st), {
			shown: r.value,
			"onUpdate:shown": i[3] ||= (e) => r.value = e,
			container: e.container,
			popupRole: "dialog",
			onApplyHide: i[4] ||= (e) => o("closed")
		}, {
			trigger: j((e) => [Fe(t.$slots, "default", Se(He(e)), void 0, !0)]),
			default: j((t) => [Y("div", {
				role: "dialog",
				class: Z(["color-picker", {
					"color-picker--advanced-fields": l.value && e.advancedFields,
					"color-picker--clearable": e.clearable
				}]),
				"aria-modal": "true",
				"aria-label": U(m)("Color picker")
			}, [H(f, {
				name: "slide",
				mode: "out-in"
			}, {
				default: j(() => [l.value ? (g(), V(U(Dx), {
					key: 1,
					class: "color-picker__advanced",
					disableAlpha: "",
					disableFields: !e.advancedFields,
					modelValue: n.value ?? "#000000",
					"onUpdate:modelValue": _
				}, null, 8, ["disableFields", "modelValue"])) : (g(), K("div", sS, [(g(!0), K(O, null, u(d.value, ({ color: e, name: t }, r) => (g(), K("label", {
					key: r,
					class: Z(["color-picker__simple-color-circle", { "color-picker__simple-color-circle--active": e === n.value }]),
					style: Ee({
						backgroundColor: e,
						color: ee(e)
					})
				}, [e === n.value ? (g(), V(U(le), {
					key: 0,
					path: U(be)
				}, null, 8, ["path"])) : R("", !0), Y("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": t,
					name: `color-picker-${U(c)}`,
					checked: e === n.value,
					onClick: (t) => h(e)
				}, null, 8, cS)], 6))), 128)), e.clearable ? (g(), K("label", {
					key: 0,
					class: "color-picker__clear",
					title: U(m)("No color")
				}, [H(U(le), {
					size: n.value ? 28 : 34,
					path: U(Oe)
				}, null, 8, ["size", "path"]), Y("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": U(m)("No color"),
					name: `color-picker-${U(c)}`,
					checked: !n.value,
					onClick: i[0] ||= (e) => n.value = void 0
				}, null, 8, uS)], 8, lS)) : R("", !0)]))]),
				_: 1
			}), e.paletteOnly ? R("", !0) : (g(), K("div", dS, [l.value ? (g(), V(U(L), {
				key: 0,
				"aria-label": U(m)("Back"),
				title: U(m)("Back"),
				variant: "tertiary",
				onClick: i[1] ||= (e) => l.value = !1
			}, {
				icon: j(() => [H(U(le), {
					directional: "",
					path: U(ge)
				}, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])) : (g(), V(U(L), {
				key: 1,
				"aria-label": U(m)("More options"),
				title: U(m)("More options"),
				variant: "tertiary",
				onClick: i[2] ||= (e) => l.value = !0
			}, {
				icon: j(() => [H(U(le), { path: U(Ze) }, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])), H(U(L), {
				variant: "primary",
				onClick: (e) => p(t.hide)
			}, {
				default: j(() => [z(q(U(m)("Choose")), 1)]),
				_: 1
			}, 8, ["onClick"])]))], 10, oS)]),
			_: 3
		}, 8, ["shown", "container"]));
	}
}), [["__scopeId", "data-v-fab7cffe"]]), pS = /* @__PURE__ */ n({ default: () => fS }), mS = ["aria-label"], hS = { class: "rw-subnav__group" }, gS = ["aria-current", "onClick"], _S = /* @__PURE__ */ B({
	__name: "RwSettingsNav",
	props: {
		groups: {},
		modelValue: {},
		ariaLabel: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (g(), K("nav", {
			class: "rw-subnav",
			"aria-label": e.ariaLabel || U(A)("rechnungswerk", "Bereiche")
		}, [(g(!0), K(O, null, u(e.groups, (t) => (g(), K(O, { key: t.label }, [Y("div", hS, q(t.label), 1), (g(!0), K(O, null, u(t.items, (t) => (g(), K("button", {
			key: t.key,
			type: "button",
			class: Z(["rw-subnav__item", { "rw-subnav__item--active": e.modelValue === t.key }]),
			"aria-current": e.modelValue === t.key ? "page" : void 0,
			onClick: (e) => n("update:modelValue", t.key)
		}, [(g(), V(ae(t.icon), { size: 18 })), z(" " + q(t.label), 1)], 10, gS))), 128))], 64))), 128))], 8, mS));
	}
}), vS = {
	name: "OfficeBuildingIcon",
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
}, yS = ["aria-hidden", "aria-label"], bS = [
	"fill",
	"width",
	"height"
], xS = { d: "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" }, SS = { key: 0 };
function CS(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon office-building-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", xS, [n.title ? (g(), K("title", SS, q(n.title), 1)) : R("", !0)])], 8, bS))], 16, yS);
}
var wS = /*#__PURE__*/ $(vS, [["render", CS]]), TS = {
	name: "BankIcon",
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
}, ES = ["aria-hidden", "aria-label"], DS = [
	"fill",
	"width",
	"height"
], OS = { d: "M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" }, kS = { key: 0 };
function AS(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon bank-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", OS, [n.title ? (g(), K("title", kS, q(n.title), 1)) : R("", !0)])], 8, DS))], 16, ES);
}
var jS = /*#__PURE__*/ $(TS, [["render", AS]]), MS = {
	name: "PaletteIcon",
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
}, NS = ["aria-hidden", "aria-label"], PS = [
	"fill",
	"width",
	"height"
], FS = { d: "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z" }, IS = { key: 0 };
function LS(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon palette-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", FS, [n.title ? (g(), K("title", IS, q(n.title), 1)) : R("", !0)])], 8, PS))], 16, NS);
}
var RS = /*#__PURE__*/ $(MS, [["render", LS]]), zS = {
	name: "FileSignIcon",
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
}, BS = ["aria-hidden", "aria-label"], VS = [
	"fill",
	"width",
	"height"
], HS = { d: "M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z" }, US = { key: 0 };
function WS(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-sign-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", HS, [n.title ? (g(), K("title", US, q(n.title), 1)) : R("", !0)])], 8, VS))], 16, BS);
}
var GS = /*#__PURE__*/ $(zS, [["render", WS]]), KS = {
	name: "TextBoxOutlineIcon",
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
}, qS = ["aria-hidden", "aria-label"], JS = [
	"fill",
	"width",
	"height"
], YS = { d: "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" }, XS = { key: 0 };
function ZS(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon text-box-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", YS, [n.title ? (g(), K("title", XS, q(n.title), 1)) : R("", !0)])], 8, JS))], 16, qS);
}
var QS = /*#__PURE__*/ $(KS, [["render", ZS]]), $S = {
	name: "PercentIcon",
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
}, eC = ["aria-hidden", "aria-label"], tC = [
	"fill",
	"width",
	"height"
], nC = { d: "M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5M7,4A3,3 0 0,0 4,7A3,3 0 0,0 7,10A3,3 0 0,0 10,7A3,3 0 0,0 7,4M17,14A3,3 0 0,0 14,17A3,3 0 0,0 17,20A3,3 0 0,0 20,17A3,3 0 0,0 17,14Z" }, rC = { key: 0 };
function iC(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon percent-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", nC, [n.title ? (g(), K("title", rC, q(n.title), 1)) : R("", !0)])], 8, tC))], 16, eC);
}
var aC = /*#__PURE__*/ $($S, [["render", iC]]), oC = {
	name: "CreditCardOutlineIcon",
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
}, sC = ["aria-hidden", "aria-label"], cC = [
	"fill",
	"width",
	"height"
], lC = { d: "M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, uC = { key: 0 };
function dC(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon credit-card-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", lC, [n.title ? (g(), K("title", uC, q(n.title), 1)) : R("", !0)])], 8, cC))], 16, sC);
}
var fC = /*#__PURE__*/ $(oC, [["render", dC]]), pC = {
	name: "EmailOutlineIcon",
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
}, mC = ["aria-hidden", "aria-label"], hC = [
	"fill",
	"width",
	"height"
], gC = { d: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" }, _C = { key: 0 };
function vC(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon email-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", gC, [n.title ? (g(), K("title", _C, q(n.title), 1)) : R("", !0)])], 8, hC))], 16, mC);
}
var yC = /*#__PURE__*/ $(pC, [["render", vC]]), bC = {
	name: "ServerNetworkIcon",
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
}, xC = ["aria-hidden", "aria-label"], SC = [
	"fill",
	"width",
	"height"
], CC = { d: "M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z" }, wC = { key: 0 };
function TC(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon server-network-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", CC, [n.title ? (g(), K("title", wC, q(n.title), 1)) : R("", !0)])], 8, SC))], 16, xC);
}
var EC = /*#__PURE__*/ $(bC, [["render", TC]]), DC = {
	name: "EmailSyncOutlineIcon",
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
}, OC = ["aria-hidden", "aria-label"], kC = [
	"fill",
	"width",
	"height"
], AC = { d: "M3 4C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H13.5A6.5 6.5 0 0 1 13 18H3V8L11 13L19 8V11A6.5 6.5 0 0 1 19.5 11A6.5 6.5 0 0 1 21 11.18V6C21 4.9 20.1 4 19 4H3M3 6H19L11 11L3 6M19 12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5V12M15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29Z" }, jC = { key: 0 };
function MC(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon email-sync-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", AC, [n.title ? (g(), K("title", jC, q(n.title), 1)) : R("", !0)])], 8, kC))], 16, OC);
}
var NC = /*#__PURE__*/ $(DC, [["render", MC]]), PC = {
	name: "FolderOutlineIcon",
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
}, FC = ["aria-hidden", "aria-label"], IC = [
	"fill",
	"width",
	"height"
], LC = { d: "M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" }, RC = { key: 0 };
function zC(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon folder-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", LC, [n.title ? (g(), K("title", RC, q(n.title), 1)) : R("", !0)])], 8, IC))], 16, FC);
}
var BC = /*#__PURE__*/ $(PC, [["render", zC]]), VC = {
	name: "ShieldAccountOutlineIcon",
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
}, HC = ["aria-hidden", "aria-label"], UC = [
	"fill",
	"width",
	"height"
], WC = { d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z" }, GC = { key: 0 };
function KC(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon shield-account-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", WC, [n.title ? (g(), K("title", GC, q(n.title), 1)) : R("", !0)])], 8, UC))], 16, HC);
}
var qC = /*#__PURE__*/ $(VC, [["render", KC]]), JC = {
	name: "KeyOutlineIcon",
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
}, YC = ["aria-hidden", "aria-label"], XC = [
	"fill",
	"width",
	"height"
], ZC = { d: "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z" }, QC = { key: 0 };
function $C(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon key-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", ZC, [n.title ? (g(), K("title", QC, q(n.title), 1)) : R("", !0)])], 8, XC))], 16, YC);
}
var ew = /*#__PURE__*/ $(JC, [["render", $C]]), tw = {
	name: "RobotIcon",
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
}, nw = ["aria-hidden", "aria-label"], rw = [
	"fill",
	"width",
	"height"
], iw = { d: "M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" }, aw = { key: 0 };
function ow(e, t, n, r, i, a) {
	return g(), K("span", Q(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon robot-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(g(), K("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", iw, [n.title ? (g(), K("title", aw, q(n.title), 1)) : R("", !0)])], 8, rw))], 16, nw);
}
var sw = /*#__PURE__*/ $(tw, [["render", ow]]), cw = () => hs("/api-keys"), lw = (e, t) => gs("/api-keys", { data: {
	name: e,
	scopes: t
} }), uw = (e) => ys(`/api-keys/${e}`), dw = { class: "rw-api-keys" }, fw = { class: "rw-hint" }, pw = { class: "rw-api-keys__plaintext" }, mw = {
	key: 2,
	class: "rw-api-keys__table"
}, hw = { class: "rw-api-keys__actions-head" }, gw = { class: "rw-api-keys__scopes" }, _w = {
	key: 3,
	class: "rw-hint"
}, vw = { class: "rw-api-keys__modal" }, yw = { class: "field" }, bw = ["placeholder"], xw = { class: "field" }, Sw = ["value"], Cw = { class: "rw-api-keys__actions" }, ww = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "ApiKeysSection",
	setup(e) {
		let t = [
			"invoices:create",
			"invoices:commit",
			"invoices:send",
			"invoices:pay",
			"invoices:cancel",
			"invoices:read",
			"invoices:pdf"
		], n = {
			"invoices:create": A("rechnungswerk", "Rechnungen anlegen"),
			"invoices:commit": A("rechnungswerk", "Festschreiben"),
			"invoices:send": A("rechnungswerk", "Versenden"),
			"invoices:pay": A("rechnungswerk", "Als bezahlt markieren"),
			"invoices:cancel": A("rechnungswerk", "Stornieren"),
			"invoices:read": A("rechnungswerk", "Rechnungen lesen"),
			"invoices:pdf": A("rechnungswerk", "PDF abrufen")
		}, r = X([]), i = X(!1), a = X(""), o = X([]), s = X(!1), c = X(""), l = X(""), d = X(""), f = X(!1), m = X(null), h = X(null), _ = W(() => a.value.trim() !== "" && o.value.length > 0);
		function v(e) {
			return n[e] ?? e;
		}
		function y(e) {
			return e.map(v);
		}
		function te(e) {
			return (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString();
		}
		async function b() {
			try {
				r.value = await cw(), c.value = "";
			} catch (e) {
				c.value = e.message ?? A("rechnungswerk", "API-Schlüssel konnten nicht geladen werden.");
			}
		}
		async function x() {
			s.value = !0, l.value = "";
			try {
				let e = await lw(a.value.trim(), [...o.value]);
				d.value = e.plaintext, f.value = !1, i.value = !1, a.value = "", o.value = [], await b();
			} catch (e) {
				l.value = e.message ?? A("rechnungswerk", "Anlegen fehlgeschlagen.");
			} finally {
				s.value = !1;
			}
		}
		async function S() {
			let e = m.value;
			if (m.value = null, e !== null) {
				s.value = !0;
				try {
					await uw(e), await b();
				} catch (e) {
					c.value = e.message ?? A("rechnungswerk", "Widerrufen fehlgeschlagen.");
				} finally {
					s.value = !1;
				}
			}
		}
		async function C() {
			try {
				await navigator.clipboard.writeText(d.value);
			} catch {}
			f.value = !0;
		}
		return p(b), (e, n) => (g(), K("div", dw, [
			Y("p", fw, q(U(A)("rechnungswerk", "Ein API-Schlüssel erlaubt anderen Programmen Zugriff auf diese RechnungsWerk-Instanz, ohne eine Anmeldung. Der Schlüssel wird nur einmalig angezeigt.")), 1),
			c.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: c.value
			}, null, 8, ["text"])) : R("", !0),
			d.value ? (g(), V(U(pt), {
				key: 1,
				type: "success"
			}, {
				default: j(() => [
					Y("p", null, q(U(A)("rechnungswerk", "Das ist dein neuer API-Schlüssel:")), 1),
					Y("p", null, [Y("code", pw, q(d.value), 1)]),
					Y("p", null, q(U(A)("rechnungswerk", "Bitte bewahre ihn sicher auf. Er wird nie wieder angezeigt.")), 1),
					H(U(L), { onClick: C }, {
						default: j(() => [z(q(f.value ? U(A)("rechnungswerk", "Kopiert") : U(A)("rechnungswerk", "Kopieren")), 1)]),
						_: 1
					})
				]),
				_: 1
			})) : R("", !0),
			r.value.length > 0 ? (g(), K("table", mw, [Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(A)("rechnungswerk", "Name")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Schlüssel")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Rechte")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Zuletzt verwendet")), 1),
				Y("th", null, [Y("span", hw, q(U(A)("rechnungswerk", "Aktionen")), 1)])
			])]), Y("tbody", null, [(g(!0), K(O, null, u(r.value, (e) => (g(), K("tr", {
				key: e.id,
				class: Z({ "rw-api-keys__row--revoked": e.revokedAt !== null })
			}, [
				Y("td", null, q(e.name), 1),
				Y("td", null, [Y("code", null, q(e.keyPrefix) + "…", 1)]),
				Y("td", null, [Y("span", gw, q(y(e.scopes).join(", ")), 1)]),
				Y("td", null, [e.revokedAt === null ? e.lastUsedAt ? (g(), K(O, { key: 1 }, [z(q(te(e.lastUsedAt)), 1)], 64)) : (g(), K(O, { key: 2 }, [z(q(U(A)("rechnungswerk", "nie")), 1)], 64)) : (g(), K(O, { key: 0 }, [z(q(U(A)("rechnungswerk", "Widerrufen")), 1)], 64))]),
				Y("td", null, [e.revokedAt === null ? (g(), V(U(L), {
					key: 0,
					variant: "tertiary",
					disabled: s.value,
					onClick: (t) => m.value = e.id
				}, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Widerrufen")), 1)]),
					_: 1
				}, 8, ["disabled", "onClick"])) : R("", !0)])
			], 2))), 128))])])) : (g(), K("p", _w, q(U(A)("rechnungswerk", "Noch kein API-Schlüssel angelegt.")), 1)),
			H(U(L), {
				variant: "primary",
				disabled: s.value,
				onClick: n[0] ||= (e) => i.value = !0
			}, {
				default: j(() => [z(q(U(A)("rechnungswerk", "API-Schlüssel anlegen")), 1)]),
				_: 1
			}, 8, ["disabled"]),
			i.value ? (g(), V(U(lt), {
				key: 4,
				name: U(A)("rechnungswerk", "API-Schlüssel anlegen"),
				onClose: n[4] ||= (e) => i.value = !1
			}, {
				default: j(() => [Y("div", vw, [
					Y("h3", null, q(U(A)("rechnungswerk", "API-Schlüssel anlegen")), 1),
					Y("label", yw, [Y("span", null, q(U(A)("rechnungswerk", "Name")), 1), P(Y("input", {
						ref_key: "nameInput",
						ref: h,
						"onUpdate:modelValue": n[1] ||= (e) => a.value = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: U(A)("rechnungswerk", "z. B. WerkPlus")
					}, null, 8, bw), [[J, a.value]])]),
					Y("div", xw, [Y("span", null, q(U(A)("rechnungswerk", "Rechte")), 1), (g(), K(O, null, u(t, (e) => Y("label", {
						key: e,
						class: "rw-api-keys__scope"
					}, [P(Y("input", {
						"onUpdate:modelValue": n[2] ||= (e) => o.value = e,
						type: "checkbox",
						value: e
					}, null, 8, Sw), [[ee, o.value]]), z(" " + q(v(e)), 1)])), 64))]),
					l.value ? (g(), V(U(pt), {
						key: 0,
						type: "error",
						text: l.value
					}, null, 8, ["text"])) : R("", !0),
					Y("div", Cw, [H(U(L), { onClick: n[3] ||= (e) => i.value = !1 }, {
						default: j(() => [z(q(U(A)("rechnungswerk", "Abbrechen")), 1)]),
						_: 1
					}), H(U(L), {
						variant: "primary",
						disabled: s.value || !_.value,
						onClick: x
					}, {
						default: j(() => [z(q(U(A)("rechnungswerk", "Anlegen")), 1)]),
						_: 1
					}, 8, ["disabled"])])
				])]),
				_: 1
			}, 8, ["name"])) : R("", !0),
			H(Qf, {
				open: m.value !== null,
				name: U(A)("rechnungswerk", "API-Schlüssel widerrufen"),
				message: U(A)("rechnungswerk", "Programme mit diesem Schlüssel verlieren sofort den Zugang. Widerrufen lässt sich ein Schlüssel nicht rückgängig machen. Fortfahren?"),
				confirmLabel: U(A)("rechnungswerk", "Widerrufen"),
				onClose: n[5] ||= (e) => m.value = null,
				onConfirm: S
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-3e8a4b83"]]), Tw = [
	"1-5",
	"6-20",
	"21-50",
	"51-200",
	"200+"
], Ew = () => hs("/license"), Dw = (e, t) => vs("/license", {
	key: e,
	employeeBucket: t
}), Ow = (e) => gs("/license/trial", { employeeBucket: e }), kw = () => gs("/license/refresh", {}), Aw = () => ys("/license"), jw = { class: "rw-werkplus" }, Mw = { class: "rw-hint" }, Nw = { key: 0 }, Pw = { key: 1 }, Fw = {
	key: 5,
	class: "rw-werkplus__facts"
}, Iw = { class: "rw-form-row" }, Lw = { class: "rw-field" }, Rw = ["placeholder"], zw = { class: "rw-field rw-field--narrow" }, Bw = ["value"], Vw = { class: "rw-hint" }, Hw = { class: "rw-werkplus__actions" }, Uw = { class: "rw-werkplus__privacy" }, Ww = { class: "rw-werkplus__label" }, Gw = { class: "rw-hint" }, Kw = { class: "rw-hint" }, qw = { class: "rw-hint" }, Jw = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "WerkPlusSettings",
	setup(e) {
		let t = X(null), n = X(""), r = X(Tw[0]), i = X(!1), a = X(""), o = X(""), s = X(""), c = X(""), l = X(!1), d = X(!1), f = ["TRIAL_ALREADY_USED"], m = W(() => t.value?.state === "valid" || t.value?.state === "grace"), h = W(() => t.value?.tier === "werkplus" ? "WerkPlus" : A("rechnungswerk", "Frei")), _ = W(() => {
			let e = t.value;
			if (!e) return null;
			switch (e.state) {
				case "valid": return {
					type: "success",
					text: A("rechnungswerk", "WerkPlus ist aktiv.")
				};
				case "grace": return {
					type: "warning",
					text: A("rechnungswerk", "Die Lizenz ist abgelaufen und konnte noch nicht erneuert werden. Die Funktionen bleiben bis {date} erhalten.", { date: e.graceUntil ? ee(e.graceUntil) : "" })
				};
				case "expired": return {
					type: "error",
					text: A("rechnungswerk", "Die Lizenz ist abgelaufen. RechnungsWerk arbeitet im freien Umfang weiter.")
				};
				case "invalid": return {
					type: "error",
					text: A("rechnungswerk", "Der gespeicherte Lizenznachweis ist ungültig. Bitte prüfe die Lizenz erneut.")
				};
				default: return null;
			}
		});
		function ee(e) {
			return new Date(e).toLocaleDateString();
		}
		function v(e) {
			return new Date(e).toLocaleString();
		}
		function y(e, n = !1) {
			t.value = e, n || (r.value = e.employeeBucket);
		}
		async function te(e = !1) {
			try {
				y(await Ew(), e), a.value = "";
			} catch (e) {
				a.value = e.message ?? A("rechnungswerk", "Lizenzstatus konnte nicht geladen werden.");
			}
		}
		async function b(e) {
			i.value = !0, o.value = "", s.value = "";
			try {
				y(await e()), n.value = "";
			} catch (e) {
				let { message: t, code: n } = e, r = t ?? A("rechnungswerk", "WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut.");
				n && f.includes(n) ? s.value = r : o.value = r, await te(!0);
			} finally {
				i.value = !1;
			}
		}
		function x() {
			return c.value = "", b(() => Dw(n.value.trim(), r.value));
		}
		function S() {
			return d.value = !1, c.value = "", b(async () => {
				let e = await Ow(r.value);
				return c.value = e.key, e.status;
			});
		}
		function ne() {
			return b(kw);
		}
		function w() {
			return l.value = !1, c.value = "", b(Aw);
		}
		return p(te), (e, f) => (g(), K("div", jw, [
			Y("p", Mw, q(U(A)("rechnungswerk", "Mit einem WerkPlus-Schlüssel schaltet RechnungsWerk zusätzliche Funktionen frei. Ohne Schlüssel bleibt alles, wie es ist.")), 1),
			a.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: a.value
			}, null, 8, ["text"])) : R("", !0),
			t.value ? (g(), K(O, { key: 1 }, [
				_.value ? (g(), V(U(pt), {
					key: 0,
					type: _.value.type,
					text: _.value.text
				}, null, 8, ["type", "text"])) : R("", !0),
				c.value ? (g(), V(U(pt), {
					key: 1,
					type: "success",
					class: "rw-werkplus__trial-key"
				}, {
					default: j(() => [
						m.value ? (g(), K("p", Nw, q(U(A)("rechnungswerk", "Der Testzeitraum läuft. Das ist dein WerkPlus-Schlüssel:")), 1)) : (g(), K("p", Pw, q(U(A)("rechnungswerk", "Der Testzeitraum ist gestartet, die Lizenz konnte aber noch nicht geprüft werden. Mit „Jetzt prüfen“ versuchst du es erneut. Das ist dein WerkPlus-Schlüssel:")), 1)),
						Y("p", null, [Y("code", null, q(c.value), 1)]),
						Y("p", null, q(U(A)("rechnungswerk", "Bitte bewahre ihn sicher auf. Er ist hinterlegt, wird aber nur jetzt vollständig angezeigt.")), 1)
					]),
					_: 1
				})) : R("", !0),
				s.value ? (g(), V(U(pt), {
					key: 2,
					type: "info",
					text: s.value
				}, null, 8, ["text"])) : R("", !0),
				o.value ? (g(), V(U(pt), {
					key: 3,
					type: "error",
					text: o.value
				}, null, 8, ["text"])) : t.value.lastError ? (g(), V(U(pt), {
					key: 4,
					type: "warning",
					text: t.value.lastError.message
				}, null, 8, ["text"])) : R("", !0),
				t.value.keySet ? (g(), K("dl", Fw, [
					Y("dt", null, q(U(A)("rechnungswerk", "Tarif")), 1),
					Y("dd", null, q(h.value), 1),
					t.value.expiresAt ? (g(), K(O, { key: 0 }, [Y("dt", null, q(U(A)("rechnungswerk", "Gültig bis")), 1), Y("dd", null, q(ee(t.value.expiresAt)), 1)], 64)) : R("", !0),
					Y("dt", null, q(U(A)("rechnungswerk", "Letzte erfolgreiche Prüfung")), 1),
					Y("dd", null, q(t.value.lastCheckAt ? v(t.value.lastCheckAt) : U(A)("rechnungswerk", "noch keine")), 1),
					Y("dt", null, q(U(A)("rechnungswerk", "Schlüssel")), 1),
					Y("dd", null, q(t.value.keyHint), 1)
				])) : R("", !0),
				Y("div", Iw, [Y("label", Lw, [Y("span", null, q(U(A)("rechnungswerk", "WerkPlus-Schlüssel")), 1), P(Y("input", {
					"onUpdate:modelValue": f[0] ||= (e) => n.value = e,
					class: "rw-input",
					type: "text",
					autocomplete: "off",
					spellcheck: "false",
					placeholder: t.value.keySet ? U(A)("rechnungswerk", "gespeichert, leer lassen") : "wp_…"
				}, null, 8, Rw), [[J, n.value]])]), Y("label", zw, [Y("span", null, q(U(A)("rechnungswerk", "Mitarbeitende")), 1), P(Y("select", {
					"onUpdate:modelValue": f[1] ||= (e) => r.value = e,
					class: "rw-input"
				}, [(g(!0), K(O, null, u(U(Tw), (e) => (g(), K("option", {
					key: e,
					value: e
				}, q(e), 9, Bw))), 128))], 512), [[C, r.value]])])]),
				Y("p", Vw, q(U(A)("rechnungswerk", "Übertragen wird nur die Größenklasse, keine Mitarbeiterzahl.")), 1),
				Y("div", Hw, [
					H(U(L), {
						variant: "primary",
						disabled: i.value || !n.value.trim() && !t.value.keySet,
						onClick: x
					}, {
						default: j(() => [z(q(t.value.keySet ? U(A)("rechnungswerk", "Speichern und prüfen") : U(A)("rechnungswerk", "Schlüssel prüfen und speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					t.value.keySet ? R("", !0) : (g(), V(U(L), {
						key: 0,
						disabled: i.value,
						onClick: f[2] ||= (e) => d.value = !0
					}, {
						default: j(() => [z(q(U(A)("rechnungswerk", "30 Tage testen")), 1)]),
						_: 1
					}, 8, ["disabled"])),
					t.value.keySet ? (g(), V(U(L), {
						key: 1,
						disabled: i.value,
						onClick: ne
					}, {
						default: j(() => [z(q(U(A)("rechnungswerk", "Jetzt prüfen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : R("", !0),
					t.value.keySet ? (g(), V(U(L), {
						key: 2,
						variant: "tertiary",
						disabled: i.value,
						onClick: f[3] ||= (e) => l.value = !0
					}, {
						default: j(() => [z(q(U(A)("rechnungswerk", "Schlüssel entfernen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : R("", !0)
				]),
				Y("div", Uw, [
					Y("span", Ww, q(U(A)("rechnungswerk", "Was an WerkPlus übertragen wird")), 1),
					Y("p", Gw, q(U(A)("rechnungswerk", "Der Schlüssel, die Kennung dieser Installation, die Version von RechnungsWerk und die Größenklasse. Niemals: Rechnungen, Kunden oder andere Belegdaten, Personendaten, Nextcloud-Benutzer oder Dateien.")), 1),
					Y("p", Kw, q(U(A)("rechnungswerk", "Die Lizenz wird auf diesem Server geprüft. Ist WerkPlus nicht erreichbar, arbeitet RechnungsWerk normal weiter.")), 1),
					Y("p", qw, [z(q(U(A)("rechnungswerk", "Kennung dieser Installation:")) + " ", 1), Y("code", null, q(t.value.instanceUuid), 1)])
				])
			], 64)) : R("", !0),
			H(Qf, {
				open: d.value,
				name: U(A)("rechnungswerk", "WerkPlus 30 Tage testen"),
				message: U(A)("rechnungswerk", "Der Testzeitraum läuft 30 Tage, braucht keine Zahlungsdaten und ist je Installation nur einmal möglich. Jetzt starten?"),
				confirmLabel: U(A)("rechnungswerk", "Testzeitraum starten"),
				onClose: f[4] ||= (e) => d.value = !1,
				onConfirm: S
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			H(Qf, {
				open: l.value,
				name: U(A)("rechnungswerk", "WerkPlus-Schlüssel entfernen"),
				message: U(A)("rechnungswerk", "RechnungsWerk arbeitet danach im freien Umfang. Den Schlüssel kannst du jederzeit wieder eintragen. Fortfahren?"),
				confirmLabel: U(A)("rechnungswerk", "Entfernen"),
				onClose: f[5] ||= (e) => l.value = !1,
				onConfirm: w
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-964bd0e3"]]);
function Yw(e) {
	if (typeof e != "string") return null;
	let t = e.trim().replace(/^#/, "");
	if (t.length === 3 && (t = t.split("").map((e) => e + e).join("")), !/^[0-9a-fA-F]{6}$/.test(t)) return null;
	let n = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, r = parseInt(t, 16);
	return .2126 * n(r >> 16 & 255) + .7152 * n(r >> 8 & 255) + .0722 * n(r & 255);
}
function Xw(e, t) {
	let [n, r] = e > t ? [e, t] : [t, e];
	return (n + .05) / (r + .05);
}
function Zw(e) {
	let t = Yw(e);
	return t === null ? "#000000" : Xw(t, 1) >= Xw(t, 0) ? "#ffffff" : "#000000";
}
function Qw(e) {
	let t = Yw(e);
	return t !== null && Xw(t, 1) < 4.5;
}
//#endregion
//#region src/utils/invoiceNumber.ts
function $w(e, t, n, r, i) {
	return e.replace(/\{YYYY\}/g, String(n).padStart(4, "0")).replace(/\{YY\}/g, String(n % 100).padStart(2, "0")).replace(/\{MM\}/g, String(r).padStart(2, "0")).replace(/\{DD\}/g, String(i).padStart(2, "0")).replace(/\{(#+)\}/g, (e, n) => String(t).padStart(n.length, "0"));
}
//#endregion
//#region src/utils/fileName.ts
var eT = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue"
};
function tT(e, t) {
	let n = (e) => String(e).padStart(2, "0"), r = {
		"{nummer}": t.nummer,
		"{YYYY}": String(t.date.getFullYear()),
		"{MM}": n(t.date.getMonth() + 1),
		"{DD}": n(t.date.getDate()),
		"{kunde}": t.kunde.replace(/[äöüßÄÖÜ]/g, (e) => eT[e] ?? e),
		"{typ}": t.typ
	}, i = e.replace(/\{nummer\}|\{YYYY\}|\{MM\}|\{DD\}|\{kunde\}|\{typ\}/g, (e) => r[e]);
	return i = i.replace(/[/\\:*?"<>|]/g, "-").replace(/\s+/g, " ").replace(/^[\s.]+|[\s.]+$/g, "").slice(0, 120), (i || "rechnung-1") + ".pdf";
}
//#endregion
//#region src/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
var nT = { class: "rw-view" }, rT = { class: "rw-settings-title" }, iT = {
	key: 0,
	class: "rw-settingspage"
}, aT = { class: "rw-settingspage__content" }, oT = { class: "rw-section" }, sT = { class: "rw-field" }, cT = { class: "rw-field" }, lT = { class: "rw-form-row" }, uT = { class: "rw-field" }, dT = { class: "rw-field" }, fT = { class: "rw-form-row" }, pT = { class: "rw-field" }, mT = { class: "rw-field" }, hT = { class: "rw-field" }, gT = { class: "rw-hint" }, _T = { class: "rw-section" }, vT = { class: "rw-form-row" }, yT = { class: "rw-field" }, bT = { class: "rw-field" }, xT = { class: "rw-field" }, ST = { class: "rw-hint" }, CT = { class: "rw-section" }, wT = { class: "rw-field rw-field--inline" }, TT = { class: "rw-accent" }, ET = ["aria-label"], DT = { class: "rw-field" }, OT = { class: "rw-accent-preview" }, kT = { class: "rw-hint" }, AT = {
	key: 0,
	class: "rw-hint"
}, jT = { class: "rw-field" }, MT = { class: "rw-logo" }, NT = ["src", "alt"], PT = {
	key: 1,
	class: "rw-logo__empty"
}, FT = { class: "rw-logo__actions" }, IT = { class: "rw-hint" }, LT = { class: "rw-section" }, RT = { class: "rw-field" }, zT = { class: "rw-hint" }, BT = { class: "rw-field" }, VT = { class: "rw-hint" }, HT = { class: "rw-field rw-reset-mode" }, UT = { class: "rw-hint" }, WT = { class: "rw-section" }, GT = { class: "rw-field" }, KT = { class: "rw-hint" }, qT = { class: "rw-field rw-reset-mode" }, JT = { class: "rw-hint" }, YT = { class: "rw-section" }, XT = { class: "rw-field" }, ZT = { class: "rw-hint" }, QT = { class: "rw-section" }, $T = {
	key: 0,
	class: "rw-field"
}, eE = ["placeholder"], tE = { class: "rw-hint" }, nE = {
	key: 1,
	class: "rw-field tax-rate-field"
}, rE = ["value"], iE = { class: "rw-section" }, aE = { class: "rw-field rw-field--narrow" }, oE = { class: "rw-hint" }, sE = { class: "rw-section" }, cE = { class: "rw-field" }, lE = { class: "rw-hint" }, uE = { class: "rw-form-row" }, dE = { class: "rw-field" }, fE = { class: "rw-field" }, pE = { class: "rw-section" }, mE = { class: "rw-field" }, hE = { class: "rw-archive-folder" }, gE = {
	key: 0,
	class: "rw-archive-folder__path"
}, _E = {
	key: 1,
	class: "rw-archive-folder__empty"
}, vE = { class: "rw-field" }, yE = ["placeholder"], bE = { class: "rw-hint" }, xE = { class: "rw-section" }, SE = { class: "rw-hint" }, CE = { class: "rw-form-row" }, wE = { class: "rw-field" }, TE = { class: "rw-field rw-field--narrow" }, EE = { class: "rw-field rw-field--narrow" }, DE = { value: "none" }, OE = { class: "rw-form-row" }, kE = { class: "rw-field" }, AE = { class: "rw-field" }, jE = ["placeholder"], ME = { class: "smtp-test" }, NE = { class: "rw-section" }, PE = { class: "rw-hint" }, FE = { class: "rw-form-row" }, IE = { class: "rw-field" }, LE = { class: "rw-field rw-field--narrow" }, RE = { class: "rw-field rw-field--narrow" }, zE = { class: "rw-form-row" }, BE = { class: "rw-field" }, VE = { class: "rw-field" }, HE = ["placeholder"], UE = { class: "rw-section" }, WE = { class: "rw-hint" }, GE = { class: "rw-section" }, KE = { class: "rw-hint rw-access-intro" }, qE = { class: "rw-access-group" }, JE = { class: "rw-access-label" }, YE = { class: "rw-hint rw-access-desc" }, XE = { class: "rw-access-group" }, ZE = { class: "rw-access-label" }, QE = { class: "rw-hint rw-access-desc" }, $E = { class: "rw-section" }, eD = { class: "rw-section" }, tD = { class: "rw-action-bar" }, nD = [
	{
		path: "/",
		redirect: { name: "invoices" }
	},
	{
		path: "/invoices",
		name: "invoices",
		component: $u
	},
	{
		path: "/invoices/new",
		name: "invoice-new",
		component: Fh
	},
	{
		path: "/invoices/:id",
		name: "invoice-detail",
		component: Fh,
		props: !0
	},
	{
		path: "/quotes",
		name: "quotes",
		component: ig
	},
	{
		path: "/quotes/new",
		name: "quote-new",
		component: Fh
	},
	{
		path: "/quotes/:id",
		name: "quote-detail",
		component: Fh,
		props: !0
	},
	{
		path: "/customers",
		name: "customers",
		component: ib
	},
	{
		path: "/reports",
		name: "reports",
		component: Z_
	},
	{
		path: "/products",
		name: "products",
		component: wv
	},
	{
		path: "/text-snippets",
		name: "text-snippets",
		component: ty
	},
	{
		path: "/me",
		name: "my-contact",
		component: bb
	},
	{
		path: "/settings",
		name: "settings",
		component: /* @__PURE__ */ $(/* @__PURE__ */ B({
			__name: "SettingsView",
			setup(e) {
				let t = Ae(), n = Zl(), r = X(null), i = W(() => [
					{
						label: A("rechnungswerk", "Firma"),
						items: [
							{
								key: "firma",
								label: A("rechnungswerk", "Firma"),
								icon: wS
							},
							{
								key: "bank",
								label: A("rechnungswerk", "Bankverbindung"),
								icon: jS
							},
							{
								key: "branding",
								label: A("rechnungswerk", "Branding"),
								icon: RS
							}
						]
					},
					{
						label: A("rechnungswerk", "Belege"),
						items: [
							{
								key: "rechnungsnummer",
								label: A("rechnungswerk", "Rechnungsnummer"),
								icon: jo
							},
							{
								key: "angebotsnummer",
								label: A("rechnungswerk", "Angebotsnummer"),
								icon: GS
							},
							{
								key: "dateiname",
								label: A("rechnungswerk", "PDF-Dateiname"),
								icon: Oa
							},
							{
								key: "texte",
								label: A("rechnungswerk", "Standardtexte"),
								icon: QS
							}
						]
					},
					{
						label: A("rechnungswerk", "Buchhaltung"),
						items: [{
							key: "steuer",
							label: A("rechnungswerk", "Steuer"),
							icon: aC
						}, {
							key: "zahlung",
							label: A("rechnungswerk", "Zahlung"),
							icon: fC
						}]
					},
					{
						label: A("rechnungswerk", "Versand"),
						items: [
							{
								key: "versand",
								label: A("rechnungswerk", "Versand"),
								icon: yC
							},
							{
								key: "smtp",
								label: A("rechnungswerk", "Eigenes SMTP-Konto"),
								icon: EC
							},
							{
								key: "datev",
								label: A("rechnungswerk", "DATEV-Rückmeldung"),
								icon: NC
							}
						]
					},
					{
						label: A("rechnungswerk", "Ablage & Zugriff"),
						items: [{
							key: "ablage",
							label: A("rechnungswerk", "Ablage in Nextcloud"),
							icon: BC
						}, {
							key: "zugriff",
							label: A("rechnungswerk", "Zugriff & Administration"),
							icon: qC
						}]
					},
					{
						label: A("rechnungswerk", "Lizenz"),
						items: [{
							key: "werkplus",
							label: A("rechnungswerk", "WerkPlus"),
							icon: ew
						}, {
							key: "apikeys",
							label: A("rechnungswerk", "API-Schlüssel"),
							icon: sw
						}]
					}
				]), a = X("firma");
				function o() {
					t.push({ name: "text-snippets" });
				}
				let s = X(null), c = X(!1), l = X(""), d = X(null);
				async function f(e) {
					l.value = e, await et(), d.value?.scrollIntoView({
						behavior: "smooth",
						block: "center"
					});
				}
				let m = X(!1), h = X(!1), _ = X(!1), ee = X(!1), v = X(!1), y = X(0), te = X((/* @__PURE__ */ new Date()).getFullYear()), b = X((/* @__PURE__ */ new Date()).getMonth() + 1), x = X((/* @__PURE__ */ new Date()).getDate()), ne = X(null), w = X(0), T = X(null), re = X(null), E = W(() => r.value?.accentColor || "#2c3e50"), ie = W(() => ({
					background: E.value,
					color: Zw(E.value)
				})), ae = W(() => Qw(E.value));
				function D(e) {
					r.value && (r.value.accentColor = e ?? null);
				}
				let oe = X([]), se = X([]), k = X([]), ce = X(!1), M = X(!1), N = X(""), le = null, ue = X(""), F = X(""), I = X(!1), de = X(""), fe = X(!1), pe = X(!1), me = W(() => r.value?.logoFileId ? Jl(r.value.logoFileId) : ""), he = W(() => ce.value ? A("rechnungswerk", "Suche läuft\xA0…") : N.value.trim().length < 2 ? A("rechnungswerk", "Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.") : A("rechnungswerk", "Keine Treffer.")), ge = W(() => r.value?.numberResetMode === "continuous" || te.value === ne.value ? y.value : 0), _e = W(() => ge.value + 1), ve = W(() => {
					if (!r.value) return "";
					let e = re.value && re.value > 0 ? re.value : _e.value;
					return $w(r.value.numberFormat || "RE-{YYYY}-{####}", e, te.value, b.value, x.value);
				}), ye = W(() => {
					if (!r.value) return "";
					let e = r.value.quoteNumberResetMode === "continuous" || te.value === T.value ? w.value : 0;
					return $w(r.value.quoteNumberFormat || "AN-{YYYY}-{####}", e + 1, te.value, b.value, x.value);
				}), be = W(() => r.value ? tT(r.value.fileNameFormat || "{nummer}", {
					nummer: ve.value,
					date: /* @__PURE__ */ new Date(),
					kunde: "Muster GmbH",
					typ: "Rechnung"
				}) : "");
				p(async () => {
					try {
						await n.fetch(), Se();
						let e = await Ls();
						oe.value = xe(e.admins), se.value = xe(e.users);
					} catch (e) {
						Be(e, A("rechnungswerk", "Laden fehlgeschlagen"));
					}
				});
				function xe(e) {
					return e.map((e) => ({
						id: e,
						type: e.startsWith("group:") ? "group" : "user",
						displayName: e.replace(/^(user|group):/, "")
					}));
				}
				function B(e) {
					if (N.value = e, le && clearTimeout(le), e.trim().length < 2) {
						k.value = [], ce.value = !1;
						return;
					}
					ce.value = !0, le = setTimeout(async () => {
						try {
							k.value = await zs(e.trim());
						} catch {
							k.value = [];
						} finally {
							ce.value = !1;
						}
					}, 300);
				}
				function Se() {
					let e = n.settings;
					if (e) {
						y.value = e.numberCounter, ne.value = e.numberCounterYear, w.value = e.quoteNumberCounter, T.value = e.quoteNumberCounterYear;
						{
							let t = e.numberResetMode === "continuous" || te.value === e.numberCounterYear ? e.numberCounter : 0;
							re.value = t + 1;
						}
						s.value = e.archiveFolderPath ?? null, r.value = {
							companyName: e.companyName,
							companyAddress: e.companyAddress,
							vatId: e.vatId,
							taxNumber: e.taxNumber,
							iban: e.iban,
							bic: e.bic,
							bankName: e.bankName,
							contactPerson: e.contactPerson,
							contactPhone: e.contactPhone,
							contactEmail: e.contactEmail,
							logoFileId: e.logoFileId,
							accentColor: e.accentColor,
							numberFormat: e.numberFormat,
							numberResetMode: e.numberResetMode,
							quoteNumberFormat: e.quoteNumberFormat,
							quoteNumberResetMode: e.quoteNumberResetMode,
							fileNameFormat: e.fileNameFormat,
							archiveEnabled: e.archiveEnabled,
							archiveFolderId: e.archiveFolderId,
							archiveSubfolder: e.archiveSubfolder,
							girocodeEnabled: e.girocodeEnabled,
							smallBusiness: e.smallBusiness,
							smallBusinessNote: e.smallBusinessNote,
							defaultTaxRateBp: e.defaultTaxRateBp,
							defaultPaymentTermDays: e.defaultPaymentTermDays,
							datevUploadMail: e.datevUploadMail,
							datevAutoSend: e.datevAutoSend,
							smtpFromName: e.smtpFromName,
							smtpFromEmail: e.smtpFromEmail,
							smtpHost: e.smtpHost,
							smtpPort: e.smtpPort,
							smtpSecurity: e.smtpSecurity || "starttls",
							smtpUser: e.smtpUser,
							smtpPasswordSet: e.smtpPasswordSet,
							imapHost: e.imapHost,
							imapPort: e.imapPort,
							imapSecurity: e.imapSecurity || "ssl",
							imapUser: e.imapUser,
							imapPasswordSet: e.imapPasswordSet,
							imapCleanup: e.imapCleanup,
							greetingDefault: e.greetingDefault,
							introDefault: e.introDefault,
							closingDefault: e.closingDefault
						};
					}
				}
				function Ce(e) {
					r.value && (e ? m.value = !0 : r.value.smallBusiness = !1);
				}
				function we() {
					m.value = !1, r.value && (r.value.smallBusiness = !0);
				}
				function Te(e) {
					r.value && (e ? h.value = !0 : r.value.datevAutoSend = !1);
				}
				function De() {
					h.value = !1, r.value && (r.value.datevAutoSend = !0);
				}
				function Oe(e) {
					r.value && (e ? _.value = !0 : r.value.archiveEnabled = !1);
				}
				function ke() {
					_.value = !1, r.value && (r.value.archiveEnabled = !0);
				}
				function je(e) {
					r.value && e !== r.value.numberResetMode && (e === "continuous" ? ee.value = !0 : r.value.numberResetMode = "yearly");
				}
				function Me() {
					ee.value = !1, r.value && (r.value.numberResetMode = "continuous");
				}
				function Ne(e) {
					r.value && e !== r.value.quoteNumberResetMode && (e === "continuous" ? v.value = !0 : r.value.quoteNumberResetMode = "yearly");
				}
				function Pe() {
					v.value = !1, r.value && (r.value.quoteNumberResetMode = "continuous");
				}
				async function Fe() {
					let e;
					try {
						e = await gt(A("rechnungswerk", "Zielordner für die Ablage wählen")).setMultiSelect(!1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories(!0).addButton({
							label: A("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof _t) return;
						Be(e, A("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						c.value = !0, l.value = "";
						try {
							let t = await Yl(e);
							r.value && (r.value.archiveFolderId = t.archiveFolderId), s.value = t.archiveFolderPath;
						} catch (e) {
							Be(e, A("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						} finally {
							c.value = !1;
						}
					}
				}
				async function Ie() {
					c.value = !0, l.value = "";
					try {
						await Xl(), r.value && (r.value.archiveFolderId = null, r.value.archiveEnabled = !1), s.value = null;
					} catch (e) {
						Be(e, A("rechnungswerk", "Zielordner konnte nicht entfernt werden."));
					} finally {
						c.value = !1;
					}
				}
				async function Le() {
					let e;
					try {
						e = await gt(A("rechnungswerk", "Firmenlogo wählen")).setMultiSelect(!1).setMimeTypeFilter([
							"image/png",
							"image/jpeg",
							"image/gif"
						]).addButton({
							label: A("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof _t) return;
						Be(e, A("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						pe.value = !0, l.value = "";
						try {
							let t = await Kl(e);
							r.value && (r.value.logoFileId = t.logoFileId);
						} catch (e) {
							Be(e, A("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						} finally {
							pe.value = !1;
						}
					}
				}
				async function Re() {
					pe.value = !0, l.value = "";
					try {
						await ql(), r.value && (r.value.logoFileId = null);
					} catch (e) {
						Be(e, A("rechnungswerk", "Logo konnte nicht entfernt werden."));
					} finally {
						pe.value = !1;
					}
				}
				async function ze() {
					if (!r.value) return;
					l.value = "";
					let e = (r.value.numberFormat || "").trim();
					if (r.value.numberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(e)) {
						f(A("rechnungswerk", "Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
						return;
					}
					let t = re.value;
					if (t == null || !Number.isInteger(t) || t < 1) {
						f(A("rechnungswerk", "Die nächste Rechnungsnummer muss eine ganze Zahl ab 1 sein."));
						return;
					}
					if (t < _e.value) {
						f(A("rechnungswerk", "Die nächste Rechnungsnummer muss mindestens {min} sein, da bereits die Nummer {issued} vergeben wurde.", {
							min: _e.value,
							issued: ge.value
						}));
						return;
					}
					let i = (r.value.quoteNumberFormat || "").trim();
					if (r.value.quoteNumberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(i)) {
						f(A("rechnungswerk", "Bei jährlichem Angebots-Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
						return;
					}
					let a = (r.value.fileNameFormat || "").trim();
					if (a !== "" && !a.includes("{nummer}")) {
						f(A("rechnungswerk", "Das Dateinamen-Schema muss den Platzhalter {nummer} enthalten, damit Dateinamen eindeutig bleiben."));
						return;
					}
					let o = [
						{
							value: r.value.contactEmail,
							label: A("rechnungswerk", "Kontakt-E-Mail")
						},
						{
							value: r.value.smtpFromEmail,
							label: A("rechnungswerk", "Absender-E-Mail")
						},
						{
							value: r.value.datevUploadMail,
							label: A("rechnungswerk", "DATEV-Upload-Mail")
						}
					];
					for (let { value: e, label: t } of o) {
						let n = (e || "").trim();
						if (n !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)) {
							f(A("rechnungswerk", "Bitte eine gültige E-Mail-Adresse angeben ({field}).", { field: t }));
							return;
						}
					}
					M.value = !0;
					try {
						let e = { ...r.value };
						t > _e.value && (e.numberCounter = t - 1), delete e.logoFileId, delete e.archiveFolderId, ue.value !== "" && (e.smtpPassword = ue.value), F.value !== "" && (e.imapPassword = F.value);
						try {
							await n.save(e);
						} catch (e) {
							Be(e, A("rechnungswerk", "Speichern der Einstellungen fehlgeschlagen."));
							return;
						}
						try {
							await Rs({
								admins: oe.value.map((e) => e.id),
								users: se.value.map((e) => e.id)
							});
						} catch (e) {
							Be(e, A("rechnungswerk", "Einstellungen gespeichert, aber die Zugriffsrechte konnten nicht gespeichert werden. Bitte erneut speichern."));
							return;
						}
						ue.value = "", F.value = "", Se();
					} finally {
						M.value = !1;
					}
				}
				async function G() {
					if (r.value?.smtpHost) {
						I.value = !0, de.value = "";
						try {
							await Ul({
								host: r.value.smtpHost,
								port: r.value.smtpPort ?? 587,
								security: r.value.smtpSecurity || "starttls",
								user: r.value.smtpUser ?? "",
								password: ue.value
							}), fe.value = !0, de.value = A("rechnungswerk", "Verbindung erfolgreich.");
						} catch (e) {
							fe.value = !1, de.value = e.message ?? A("rechnungswerk", "Verbindung fehlgeschlagen.");
						} finally {
							I.value = !1;
						}
					}
				}
				function Be(e, t) {
					f(e.message ?? t), console.error("[rechnungswerk] settings:", e);
				}
				return (e, t) => (g(), K("div", nT, [
					Y("h2", rT, q(U(A)("rechnungswerk", "Einstellungen")), 1),
					Y("div", {
						ref_key: "errorAnchor",
						ref: d
					}, [l.value ? (g(), V(U(pt), {
						key: 0,
						type: "error",
						text: l.value
					}, null, 8, ["text"])) : R("", !0)], 512),
					r.value ? (g(), K("div", iT, [H(_S, {
						groups: i.value,
						modelValue: a.value,
						ariaLabel: U(A)("rechnungswerk", "Einstellungs-Navigation"),
						"onUpdate:modelValue": t[0] ||= (e) => a.value = e
					}, null, 8, [
						"groups",
						"modelValue",
						"ariaLabel"
					]), Y("div", aT, [
						P(Y("section", oT, [
							Y("h3", null, q(U(A)("rechnungswerk", "Firma")), 1),
							Y("label", sT, [Y("span", null, q(U(A)("rechnungswerk", "Firmenname")), 1), P(Y("input", {
								"onUpdate:modelValue": t[1] ||= (e) => r.value.companyName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.companyName]])]),
							Y("label", cT, [Y("span", null, q(U(A)("rechnungswerk", "Adresse")), 1), P(Y("textarea", {
								"onUpdate:modelValue": t[2] ||= (e) => r.value.companyAddress = e,
								class: "rw-input",
								rows: "3"
							}, null, 512), [[J, r.value.companyAddress]])]),
							Y("div", lT, [Y("label", uT, [Y("span", null, q(U(A)("rechnungswerk", "USt-IdNr.")), 1), P(Y("input", {
								"onUpdate:modelValue": t[3] ||= (e) => r.value.vatId = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.vatId]])]), Y("label", dT, [Y("span", null, q(U(A)("rechnungswerk", "Steuernummer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[4] ||= (e) => r.value.taxNumber = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.taxNumber]])])]),
							Y("div", fT, [
								Y("label", pT, [Y("span", null, q(U(A)("rechnungswerk", "Ansprechpartner")), 1), P(Y("input", {
									"onUpdate:modelValue": t[5] ||= (e) => r.value.contactPerson = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[J, r.value.contactPerson]])]),
								Y("label", mT, [Y("span", null, q(U(A)("rechnungswerk", "Telefon")), 1), P(Y("input", {
									"onUpdate:modelValue": t[6] ||= (e) => r.value.contactPhone = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[J, r.value.contactPhone]])]),
								Y("label", hT, [Y("span", null, q(U(A)("rechnungswerk", "Kontakt-E-Mail")), 1), P(Y("input", {
									"onUpdate:modelValue": t[7] ||= (e) => r.value.contactEmail = e,
									class: "rw-input",
									type: "email"
								}, null, 512), [[J, r.value.contactEmail]])])
							]),
							Y("p", gT, q(U(A)("rechnungswerk", "Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).")), 1)
						], 512), [[S, a.value === "firma"]]),
						P(Y("section", _T, [
							Y("h3", null, q(U(A)("rechnungswerk", "Bankverbindung")), 1),
							Y("div", vT, [Y("label", yT, [Y("span", null, q(U(A)("rechnungswerk", "IBAN")), 1), P(Y("input", {
								"onUpdate:modelValue": t[8] ||= (e) => r.value.iban = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.iban]])]), Y("label", bT, [Y("span", null, q(U(A)("rechnungswerk", "BIC")), 1), P(Y("input", {
								"onUpdate:modelValue": t[9] ||= (e) => r.value.bic = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.bic]])])]),
							Y("label", xT, [Y("span", null, q(U(A)("rechnungswerk", "Bankname")), 1), P(Y("input", {
								"onUpdate:modelValue": t[10] ||= (e) => r.value.bankName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.bankName]])]),
							H(U(Ot), {
								type: "switch",
								modelValue: r.value.girocodeEnabled,
								disabled: !r.value.iban && !r.value.girocodeEnabled,
								"onUpdate:modelValue": t[11] ||= (e) => {
									r.value && (r.value.girocodeEnabled = e);
								}
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "Girocode (Bezahl-QR-Code) auf Rechnungen anzeigen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							Y("p", ST, q(U(A)("rechnungswerk", "Druckt einen EPC-QR-Code neben die Bankverbindung: Kunden scannen ihn mit der Banking-App, Empfänger, Betrag und Verwendungszweck sind vorausgefüllt. Erscheint nur auf Rechnungen mit positivem Betrag, nicht auf Stornobelegen.")), 1)
						], 512), [[S, a.value === "bank"]]),
						P(Y("section", CT, [
							Y("h3", null, q(U(A)("rechnungswerk", "Branding")), 1),
							Y("div", wT, [Y("span", null, q(U(A)("rechnungswerk", "Akzentfarbe")), 1), Y("div", TT, [H(U(fS), {
								modelValue: E.value,
								advancedFields: "",
								"onUpdate:modelValue": D
							}, {
								default: j(() => [Y("button", {
									type: "button",
									class: "rw-accent__trigger",
									"aria-label": U(A)("rechnungswerk", "Akzentfarbe") + ": " + E.value.toUpperCase(),
									style: Ee(ie.value)
								}, q(E.value.toUpperCase()), 13, ET)]),
								_: 1
							}, 8, ["modelValue"]), r.value.accentColor ? (g(), V(U(L), {
								key: 0,
								variant: "tertiary",
								onClick: t[12] ||= (e) => r.value.accentColor = null
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "Zurücksetzen")), 1)]),
								_: 1
							})) : R("", !0)])]),
							Y("div", DT, [
								Y("table", OT, [Y("thead", null, [Y("tr", { style: Ee(ie.value) }, [...t[42] ||= [
									Y("th", null, "Beschreibung", -1),
									Y("th", { class: "num" }, "Menge", -1),
									Y("th", { class: "num" }, "Einzelpreis", -1),
									Y("th", { class: "num" }, "Betrag", -1)
								]], 4)]), t[43] ||= Y("tbody", null, [Y("tr", null, [
									Y("td", null, "Beratungsleistung"),
									Y("td", { class: "num" }, "2"),
									Y("td", { class: "num" }, "95,00 €"),
									Y("td", { class: "num" }, "190,00 €")
								])], -1)]),
								Y("p", kT, q(U(A)("rechnungswerk", "So erscheint die Kopfzeile der Positionstabelle auf der Rechnung.")), 1),
								ae.value ? (g(), K("p", AT, q(U(A)("rechnungswerk", "Auf dieser Farbe wäre weiße Schrift zu blass, deshalb steht sie schwarz auf der Rechnung. Die Farbe selbst bleibt unverändert.")), 1)) : R("", !0)
							]),
							Y("div", jT, [
								Y("span", null, q(U(A)("rechnungswerk", "Firmenlogo")), 1),
								Y("div", MT, [r.value.logoFileId ? (g(), K("img", {
									key: 0,
									src: me.value,
									alt: U(A)("rechnungswerk", "Firmenlogo"),
									class: "rw-logo__preview"
								}, null, 8, NT)) : (g(), K("span", PT, q(U(A)("rechnungswerk", "Kein Logo gewählt")), 1)), Y("div", FT, [H(U(L), {
									disabled: pe.value,
									onClick: Le
								}, {
									default: j(() => [z(q(r.value.logoFileId ? U(A)("rechnungswerk", "Logo ändern") : U(A)("rechnungswerk", "Logo wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]), r.value.logoFileId ? (g(), V(U(L), {
									key: 0,
									variant: "tertiary",
									disabled: pe.value,
									onClick: Re
								}, {
									default: j(() => [z(q(U(A)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : R("", !0)])]),
								Y("p", IT, q(U(A)("rechnungswerk", "Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.")), 1)
							])
						], 512), [[S, a.value === "branding"]]),
						P(Y("section", LT, [
							Y("h3", null, q(U(A)("rechnungswerk", "Rechnungsnummer")), 1),
							Y("label", RT, [Y("span", null, q(U(A)("rechnungswerk", "Format")), 1), P(Y("input", {
								"onUpdate:modelValue": t[13] ||= (e) => r.value.numberFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.numberFormat]])]),
							Y("p", zT, [
								z(q(U(A)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[44] ||= Y("br", null, null, -1),
								z(" " + q(U(A)("rechnungswerk", "Vorschau: {preview}", { preview: ve.value })), 1)
							]),
							Y("label", BT, [Y("span", null, q(U(A)("rechnungswerk", "Nächste Rechnungsnummer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[14] ||= (e) => re.value = e,
								class: "rw-input",
								type: "number",
								min: "1",
								step: "1"
							}, null, 512), [[
								J,
								re.value,
								void 0,
								{ number: !0 }
							]])]),
							Y("p", VT, q(U(A)("rechnungswerk", "Die laufende Nummer der nächsten Rechnung. Zum Einstieg in eine bestehende Nummernfolge hier den gewünschten Wert setzen. Nummern lassen sich nur vorwärts setzen, nie unter eine bereits vergebene.")), 1),
							Y("div", HT, [
								Y("span", null, q(U(A)("rechnungswerk", "Nummernkreis")), 1),
								H(U(Ot), {
									type: "radio",
									name: "rw-reset-mode",
									value: "yearly",
									modelValue: r.value.numberResetMode,
									"onUpdate:modelValue": je
								}, {
									default: j(() => [z(q(U(A)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								H(U(Ot), {
									type: "radio",
									name: "rw-reset-mode",
									value: "continuous",
									modelValue: r.value.numberResetMode,
									"onUpdate:modelValue": je
								}, {
									default: j(() => [z(q(U(A)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							Y("p", UT, q(U(A)("rechnungswerk", "Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.")), 1)
						], 512), [[S, a.value === "rechnungsnummer"]]),
						P(Y("section", WT, [
							Y("h3", null, q(U(A)("rechnungswerk", "Angebotsnummer")), 1),
							Y("label", GT, [Y("span", null, q(U(A)("rechnungswerk", "Format")), 1), P(Y("input", {
								"onUpdate:modelValue": t[15] ||= (e) => r.value.quoteNumberFormat = e,
								class: "rw-input",
								type: "text",
								placeholder: "AN-{YYYY}-{####}"
							}, null, 512), [[J, r.value.quoteNumberFormat]])]),
							Y("p", KT, [
								z(q(U(A)("rechnungswerk", "Eigener, von den Rechnungen unabhängiger Nummernkreis. Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[45] ||= Y("br", null, null, -1),
								z(" " + q(U(A)("rechnungswerk", "Vorschau: {preview}", { preview: ye.value })), 1)
							]),
							Y("div", qT, [
								Y("span", null, q(U(A)("rechnungswerk", "Nummernkreis")), 1),
								H(U(Ot), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "yearly",
									modelValue: r.value.quoteNumberResetMode,
									"onUpdate:modelValue": Ne
								}, {
									default: j(() => [z(q(U(A)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								H(U(Ot), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "continuous",
									modelValue: r.value.quoteNumberResetMode,
									"onUpdate:modelValue": Ne
								}, {
									default: j(() => [z(q(U(A)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							Y("p", JT, q(U(A)("rechnungswerk", "Angebote haben keine gesetzliche Nummernkreis-Pflicht; Lücken sind erlaubt. Bei „Jährlich zurücksetzen“ muss das Format dennoch eine Jahreskomponente enthalten.")), 1)
						], 512), [[S, a.value === "angebotsnummer"]]),
						P(Y("section", YT, [
							Y("h3", null, q(U(A)("rechnungswerk", "PDF-Dateiname")), 1),
							Y("label", XT, [Y("span", null, q(U(A)("rechnungswerk", "Schema")), 1), P(Y("input", {
								"onUpdate:modelValue": t[16] ||= (e) => r.value.fileNameFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.fileNameFormat]])]),
							Y("p", ZT, [
								z(q(U(A)("rechnungswerk", "Gilt für Download, Kundenmail und DATEV-Mail. Platzhalter: {nummer} Rechnungsnummer, {YYYY}/{MM}/{DD} Rechnungsdatum, {kunde} Kundenname, {typ} Rechnung/Storno. {nummer} ist Pflicht.")) + " ", 1),
								t[46] ||= Y("br", null, null, -1),
								z(" " + q(U(A)("rechnungswerk", "Vorschau: {preview}", { preview: be.value })), 1)
							])
						], 512), [[S, a.value === "dateiname"]]),
						P(Y("section", QT, [
							Y("h3", null, q(U(A)("rechnungswerk", "Steuer")), 1),
							H(U(Ot), {
								type: "switch",
								modelValue: r.value.smallBusiness,
								"onUpdate:modelValue": Ce
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "Kleinunternehmer nach §19 UStG (kein USt-Ausweis)")), 1)]),
								_: 1
							}, 8, ["modelValue"]),
							r.value.smallBusiness ? (g(), K("label", $T, [
								Y("span", null, q(U(A)("rechnungswerk", "Hinweistext auf der Rechnung (§ 19 UStG)")), 1),
								P(Y("textarea", {
									"onUpdate:modelValue": t[17] ||= (e) => r.value.smallBusinessNote = e,
									class: "rw-input",
									rows: "2",
									placeholder: U(tu)
								}, null, 8, eE), [[J, r.value.smallBusinessNote]]),
								Y("span", tE, q(U(A)("rechnungswerk", "Erscheint bei aktiviertem Kleinunternehmer-Status auf der Rechnung. Leer lassen für den Standardtext.")), 1)
							])) : R("", !0),
							r.value.smallBusiness ? R("", !0) : (g(), K("label", nE, [Y("span", null, q(U(A)("rechnungswerk", "Standard-USt-Satz")), 1), P(Y("select", {
								"onUpdate:modelValue": t[18] ||= (e) => r.value.defaultTaxRateBp = e,
								class: "rw-input"
							}, [(g(!0), K(O, null, u(U(eu), (e) => (g(), K("option", {
								key: e,
								value: e
							}, q(U(_u)(e)), 9, rE))), 128))], 512), [[
								C,
								r.value.defaultTaxRateBp,
								void 0,
								{ number: !0 }
							]])]))
						], 512), [[S, a.value === "steuer"]]),
						P(Y("section", iE, [
							Y("h3", null, q(U(A)("rechnungswerk", "Zahlung")), 1),
							Y("label", aE, [Y("span", null, q(U(A)("rechnungswerk", "Standard-Zahlungsziel (Tage)")), 1), P(Y("input", {
								"onUpdate:modelValue": t[19] ||= (e) => r.value.defaultPaymentTermDays = e,
								class: "rw-input",
								type: "number",
								min: "0",
								step: "1",
								placeholder: "14"
							}, null, 512), [[
								J,
								r.value.defaultPaymentTermDays,
								void 0,
								{ number: !0 }
							]])]),
							Y("p", oE, q(U(A)("rechnungswerk", "Wird bei neuen Rechnungen als Zahlungsziel vorbelegt. Leer lassen für kein Standardziel.")), 1)
						], 512), [[S, a.value === "zahlung"]]),
						P(Y("section", sE, [
							Y("h3", null, q(U(A)("rechnungswerk", "Versand")), 1),
							Y("label", cE, [Y("span", null, q(U(A)("rechnungswerk", "DATEV-Upload-Mail")), 1), P(Y("input", {
								"onUpdate:modelValue": t[20] ||= (e) => r.value.datevUploadMail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[J, r.value.datevUploadMail]])]),
							H(U(Ot), {
								type: "switch",
								modelValue: r.value.datevAutoSend,
								disabled: !r.value.datevUploadMail,
								"onUpdate:modelValue": Te
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "E-Rechnung beim Festschreiben automatisch an DATEV senden")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							Y("p", lE, q(U(A)("rechnungswerk", "Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.")), 1),
							Y("div", uE, [Y("label", dE, [Y("span", null, q(U(A)("rechnungswerk", "Absender-Name")), 1), P(Y("input", {
								"onUpdate:modelValue": t[21] ||= (e) => r.value.smtpFromName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.smtpFromName]])]), Y("label", fE, [Y("span", null, q(U(A)("rechnungswerk", "Absender-E-Mail")), 1), P(Y("input", {
								"onUpdate:modelValue": t[22] ||= (e) => r.value.smtpFromEmail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[J, r.value.smtpFromEmail]])])])
						], 512), [[S, a.value === "versand"]]),
						P(Y("section", pE, [
							Y("h3", null, q(U(A)("rechnungswerk", "Ablage in Nextcloud")), 1),
							Y("div", mE, [Y("span", null, q(U(A)("rechnungswerk", "Zielordner")), 1), Y("div", hE, [
								s.value ? (g(), K("span", gE, q(s.value), 1)) : (g(), K("span", _E, q(U(A)("rechnungswerk", "Kein Ordner gewählt")), 1)),
								H(U(L), {
									disabled: c.value,
									onClick: Fe
								}, {
									default: j(() => [z(q(s.value ? U(A)("rechnungswerk", "Ordner ändern") : U(A)("rechnungswerk", "Ordner wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]),
								s.value ? (g(), V(U(L), {
									key: 2,
									variant: "tertiary",
									disabled: c.value,
									onClick: Ie
								}, {
									default: j(() => [z(q(U(A)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : R("", !0)
							])]),
							H(U(Ot), {
								type: "switch",
								modelValue: r.value.archiveEnabled,
								disabled: !r.value.archiveFolderId,
								"onUpdate:modelValue": Oe
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "ZUGFeRD-PDF beim Festschreiben automatisch im Zielordner ablegen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							Y("label", vE, [Y("span", null, q(U(A)("rechnungswerk", "Unterordner (optional)")), 1), P(Y("input", {
								"onUpdate:modelValue": t[23] ||= (e) => r.value.archiveSubfolder = e,
								class: "rw-input",
								type: "text",
								placeholder: U(A)("rechnungswerk", "z. B. {YYYY}")
							}, null, 8, yE), [[J, r.value.archiveSubfolder]])]),
							Y("p", bE, [
								z(q(U(A)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {MM} Monat, {DD} Tag (Rechnungsdatum). Unterordner werden bei Bedarf angelegt. Vorhandene Dateien werden nie überschrieben.")) + " ", 1),
								t[47] ||= Y("br", null, null, -1),
								z(" " + q(U(A)("rechnungswerk", "Komfort-Ablage für den Team-Zugriff. Kein revisionssicheres Archiv, die GoBD-Archivierung erfolgt über DATEV bzw. Steuerberater.")), 1)
							])
						], 512), [[S, a.value === "ablage"]]),
						P(Y("section", xE, [
							Y("h3", null, q(U(A)("rechnungswerk", "Eigenes SMTP-Konto (optional)")), 1),
							Y("p", SE, q(U(A)("rechnungswerk", "Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).")), 1),
							Y("div", CE, [
								Y("label", wE, [Y("span", null, q(U(A)("rechnungswerk", "Server (Host)")), 1), P(Y("input", {
									"onUpdate:modelValue": t[24] ||= (e) => r.value.smtpHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "smtp.example.com"
								}, null, 512), [[J, r.value.smtpHost]])]),
								Y("label", TE, [Y("span", null, q(U(A)("rechnungswerk", "Port")), 1), P(Y("input", {
									"onUpdate:modelValue": t[25] ||= (e) => r.value.smtpPort = e,
									class: "rw-input",
									type: "number",
									placeholder: "587"
								}, null, 512), [[
									J,
									r.value.smtpPort,
									void 0,
									{ number: !0 }
								]])]),
								Y("label", EE, [Y("span", null, q(U(A)("rechnungswerk", "Verschlüsselung")), 1), P(Y("select", {
									"onUpdate:modelValue": t[26] ||= (e) => r.value.smtpSecurity = e,
									class: "rw-input"
								}, [
									t[48] ||= Y("option", { value: "starttls" }, "STARTTLS", -1),
									t[49] ||= Y("option", { value: "ssl" }, "SSL/TLS", -1),
									Y("option", DE, q(U(A)("rechnungswerk", "Keine")), 1)
								], 512), [[C, r.value.smtpSecurity]])])
							]),
							Y("div", OE, [Y("label", kE, [Y("span", null, q(U(A)("rechnungswerk", "Benutzer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[27] ||= (e) => r.value.smtpUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.smtpUser]])]), Y("label", AE, [Y("span", null, q(U(A)("rechnungswerk", "Passwort")), 1), P(Y("input", {
								"onUpdate:modelValue": t[28] ||= (e) => ue.value = e,
								class: "rw-input",
								type: "password",
								placeholder: r.value.smtpPasswordSet ? U(A)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, jE), [[J, ue.value]])])]),
							Y("div", ME, [H(U(L), {
								disabled: !r.value.smtpHost || I.value,
								onClick: G
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "Verbindung testen")), 1)]),
								_: 1
							}, 8, ["disabled"]), de.value ? (g(), K("span", {
								key: 0,
								class: Z(["smtp-test__result", fe.value ? "rw-ok" : "rw-err"])
							}, q(de.value), 3)) : R("", !0)])
						], 512), [[S, a.value === "smtp"]]),
						P(Y("section", NE, [
							Y("h3", null, q(U(A)("rechnungswerk", "DATEV-Rückmeldung (IMAP, optional)")), 1),
							Y("p", PE, q(U(A)("rechnungswerk", "DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.")), 1),
							Y("div", FE, [
								Y("label", IE, [Y("span", null, q(U(A)("rechnungswerk", "Server (Host)")), 1), P(Y("input", {
									"onUpdate:modelValue": t[29] ||= (e) => r.value.imapHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "imap.example.com"
								}, null, 512), [[J, r.value.imapHost]])]),
								Y("label", LE, [Y("span", null, q(U(A)("rechnungswerk", "Port")), 1), P(Y("input", {
									"onUpdate:modelValue": t[30] ||= (e) => r.value.imapPort = e,
									class: "rw-input",
									type: "number",
									placeholder: "993"
								}, null, 512), [[
									J,
									r.value.imapPort,
									void 0,
									{ number: !0 }
								]])]),
								Y("label", RE, [Y("span", null, q(U(A)("rechnungswerk", "Verschlüsselung")), 1), P(Y("select", {
									"onUpdate:modelValue": t[31] ||= (e) => r.value.imapSecurity = e,
									class: "rw-input"
								}, [...t[50] ||= [
									Y("option", { value: "ssl" }, "SSL/TLS", -1),
									Y("option", { value: "starttls" }, "STARTTLS", -1),
									Y("option", { value: "tls" }, "TLS", -1)
								]], 512), [[C, r.value.imapSecurity]])])
							]),
							Y("div", zE, [Y("label", BE, [Y("span", null, q(U(A)("rechnungswerk", "Benutzer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[32] ||= (e) => r.value.imapUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.imapUser]])]), Y("label", VE, [Y("span", null, q(U(A)("rechnungswerk", "Passwort")), 1), P(Y("input", {
								"onUpdate:modelValue": t[33] ||= (e) => F.value = e,
								class: "rw-input",
								type: "password",
								placeholder: r.value.imapPasswordSet ? U(A)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, HE), [[J, F.value]])])]),
							H(U(Ot), {
								modelValue: r.value.imapCleanup,
								disabled: !r.value.imapHost,
								"onUpdate:modelValue": t[34] ||= (e) => r.value.imapCleanup = e
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"])
						], 512), [[S, a.value === "datev"]]),
						P(Y("section", UE, [
							Y("h3", null, q(U(A)("rechnungswerk", "Standardtexte")), 1),
							Y("p", WE, q(U(A)("rechnungswerk", "Anrede-, Einleitungs- und Schlusstexte werden jetzt als Textbausteine verwaltet – getrennt für Rechnungen und Angebote, mit mehreren Vorlagen je Textbereich.")), 1),
							H(U(L), { onClick: o }, {
								icon: j(() => [H(no, { size: 20 })]),
								default: j(() => [z(" " + q(U(A)("rechnungswerk", "Textbausteine verwalten")), 1)]),
								_: 1
							})
						], 512), [[S, a.value === "texte"]]),
						P(Y("section", GE, [
							Y("h3", null, q(U(A)("rechnungswerk", "Zugriff & Administration")), 1),
							Y("p", KE, q(U(A)("rechnungswerk", "Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.")), 1),
							Y("div", qE, [
								Y("span", JE, q(U(A)("rechnungswerk", "App-Administratoren")), 1),
								Y("p", YE, q(U(A)("rechnungswerk", "Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.")), 1),
								H(U(xt), {
									modelValue: oe.value,
									"onUpdate:modelValue": t[35] ||= (e) => oe.value = e,
									options: k.value,
									loading: ce.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: U(A)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: B
								}, {
									"no-options": j(() => [z(q(he.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							]),
							Y("div", XE, [
								Y("span", ZE, q(U(A)("rechnungswerk", "Berechtigte Nutzer")), 1),
								Y("p", QE, q(U(A)("rechnungswerk", "Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.")), 1),
								H(U(xt), {
									modelValue: se.value,
									"onUpdate:modelValue": t[36] ||= (e) => se.value = e,
									options: k.value,
									loading: ce.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: U(A)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: B
								}, {
									"no-options": j(() => [z(q(he.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							])
						], 512), [[S, a.value === "zugriff"]]),
						P(Y("section", $E, [Y("h3", null, q(U(A)("rechnungswerk", "WerkPlus")), 1), H(Jw)], 512), [[S, a.value === "werkplus"]]),
						P(Y("section", eD, [Y("h3", null, q(U(A)("rechnungswerk", "API-Schlüssel")), 1), H(ww)], 512), [[S, a.value === "apikeys"]]),
						P(Y("div", tD, [H(U(L), {
							variant: "primary",
							disabled: U(n).saving || M.value,
							onClick: ze
						}, {
							icon: j(() => [H(db, { size: 20 })]),
							default: j(() => [z(" " + q(U(A)("rechnungswerk", "Speichern")), 1)]),
							_: 1
						}, 8, ["disabled"])], 512), [[S, a.value !== "werkplus"]])
					])])) : R("", !0),
					H(Qf, {
						open: m.value,
						name: U(A)("rechnungswerk", "Kleinunternehmer §19 aktivieren"),
						message: U(A)("rechnungswerk", "Damit werden künftige Rechnungen ohne Umsatzsteuer ausgewiesen (§19 UStG). Bestehende festgeschriebene Rechnungen bleiben unverändert. Fortfahren?"),
						confirmLabel: U(A)("rechnungswerk", "Aktivieren"),
						onClose: t[37] ||= (e) => m.value = !1,
						onConfirm: we
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					H(Qf, {
						open: h.value,
						name: U(A)("rechnungswerk", "Automatischen DATEV-Versand aktivieren"),
						message: U(A)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben automatisch eine E-Mail mit der E-Rechnung an die hinterlegte DATEV-Upload-Mail gesendet. Fortfahren?"),
						confirmLabel: U(A)("rechnungswerk", "Aktivieren"),
						onClose: t[38] ||= (e) => h.value = !1,
						onConfirm: De
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					H(Qf, {
						open: _.value,
						name: U(A)("rechnungswerk", "Automatische Ablage aktivieren"),
						message: U(A)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben die ZUGFeRD-PDF automatisch im gewählten Ordner abgelegt. Alle Personen mit Zugriff auf den Ordner können die Rechnungen sehen. Fortfahren?"),
						confirmLabel: U(A)("rechnungswerk", "Aktivieren"),
						onClose: t[39] ||= (e) => _.value = !1,
						onConfirm: ke
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					H(Qf, {
						open: ee.value,
						name: U(A)("rechnungswerk", "Nummernkreis auf „Fortlaufend“ stellen"),
						message: U(A)("rechnungswerk", "Der Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Der Modus wirkt sich auf alle künftig festgeschriebenen Rechnungen aus. Fortfahren?"),
						confirmLabel: U(A)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: t[40] ||= (e) => ee.value = !1,
						onConfirm: Me
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					H(Qf, {
						open: v.value,
						name: U(A)("rechnungswerk", "Angebots-Nummernkreis auf „Fortlaufend“ stellen"),
						message: U(A)("rechnungswerk", "Der Angebots-Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Fortfahren?"),
						confirmLabel: U(A)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: t[41] ||= (e) => v.value = !1,
						onConfirm: Pe
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					])
				]));
			}
		}), [["__scopeId", "data-v-9038d4b0"]])
	}
], rD = Gr({
	history: pr(),
	routes: nD
});
//#endregion
//#region src/main.js
document.addEventListener("DOMContentLoaded", () => {
	let e = N(Vs);
	e.use(Kt()), e.use(rD), e.use(ot, { themes: { tooltip: { delay: {
		show: 100,
		hide: 0
	} } } }), e.mount(".app-rechnungswerk");
});
//#endregion
export { xb as n, pS as t };
