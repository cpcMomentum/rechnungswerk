import { c as e, d as t, g as n, l as r, m as i, t as a, u as o } from "./logger-Dmvqkkgn.chunk.mjs";
import { $n as s, $t as c, A as l, An as u, Bn as d, Bt as f, Cn as p, D as m, E as h, En as g, F as _, Gt as ee, Hn as v, I as te, In as ne, J as y, Jn as b, Jt as x, Kt as re, L as S, Ln as C, Mn as w, Nn as ie, O as T, On as E, Pn as ae, Q as D, Qn as oe, Qt as O, R as se, Rn as k, Tt as A, Un as j, V as ce, Vn as M, Vt as N, Wn as P, X as le, Xn as ue, Xt as F, Yn as I, Yt as de, Z as L, Zn as fe, _ as pe, _n as me, _t as he, a as ge, an as R, ar as _e, at as ve, bn as ye, c as be, cn as z, ct as xe, dn as B, dr as Se, dt as Ce, et as we, fn as Te, fr as Ee, ft as De, g as Oe, gn as ke, gt as Ae, hn as je, ht as Me, in as V, ir as Ne, it as Pe, jn as Fe, ln as H, lr as U, lt as Ie, mn as Le, mt as Re, nn as W, nr as ze, nt as G, o as Be, on as K, ot as Ve, pn as He, pr as q, pt as Ue, qn as We, qt as J, rn as Y, rt as Ge, sr as Ke, st as qe, t as Je, tr as X, tt as Ye, ur as Z, ut as Xe, v as Ze, vn as Q, wn as Qe, xn as $e, yn as et, z as tt, zn as nt } from "./createElementId-B15WSLm8.chunk.mjs";
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
	return !n && b() && oe(i), i;
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
	let te = (t, n = "") => {
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
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Yt(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Yt(a, e), e)).catch((e) => (Yt(o, e), Promise.reject(e))) : (Yt(a, l), l);
		};
		return i[Zt] = !0, i[Qt] = n, i;
	}, ne = {
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
	}, y = s(ne);
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Xt)(() => r._e.run(() => (o = We()).run(() => t({ action: te }))));
	for (let t in b) {
		let n = b[t];
		ue(n) && !rn(n) || I(n) ? a || (h && tn(n) && (ue(n) ? n.value = h[t] : ((n instanceof Set || n instanceof Map) && n.clear(), $t(n, h[t]))), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = te(n, t), c.actions[t] = n);
	}
	return nn(y, b), nn(_e(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			_((t) => {
				nn(t, e);
			});
		}
	}), r._p.forEach((e) => {
		let t = o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: c
		}));
		nn(y, t);
	}), h && a && n.hydrate && n.hydrate(y.$state, h), u = !0, d = !0, y;
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
		E(he, W(() => o.value + 1)), E(Ie, s), E(Re, i);
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
	function te(e) {
		return typeof e == "string" ? Mn(n, e, c.value.path) : G({}, e);
	}
	function ne(e, t) {
		if (u !== e) return Ge(8, {
			from: t,
			to: e
		});
	}
	function y(e) {
		return re(e);
	}
	function b(e) {
		return y(G(te(e), { replace: !0 }));
	}
	function x(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = te(i) : { path: i }, i.params = {}), G({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function re(e, t) {
		let n = u = v(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, l = x(n, i);
		if (l) return re(G(te(l), {
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
		}), j(i, i, !0, !1)), (f ? Promise.resolve(f) : w(d, i)).catch((e) => qe(e) ? qe(e, 2) ? e : A(e) : se(e, d, i)).then((e) => {
			if (e) {
				if (qe(e, 2)) return re(G({ replace: s }, te(e.to), {
					state: typeof e.to == "object" ? G({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = T(d, i, !0, s, a);
			return ie(d, i, e), e;
		});
	}
	function S(e, t) {
		let n = ne(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function C(e) {
		let t = N.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function w(e, t) {
		let n, [r, i, s] = or(e, t);
		n = ar(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(ir(r, e, t));
		});
		let c = S.bind(null, e, t);
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
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = ar(s, "beforeRouteEnter", e, t, C), n.push(c), le(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(ir(r, e, t));
			return n.push(c), le(n);
		}).catch((e) => qe(e, 8) ? e : Promise.reject(e));
	}
	function ie(e, t, n) {
		s.list().forEach((r) => C(() => r(e, t, n)));
	}
	function T(e, t, n, r, a) {
		let o = ne(e, t);
		if (o) return o;
		let s = t === Vn, l = cn ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, G({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, j(e, t, n, s), A();
	}
	let E;
	function ae() {
		E ||= i.listen((e, t, n) => {
			if (!P.listening) return;
			let r = v(e), a = x(r, P.currentRoute.value);
			if (a) {
				re(G(a, {
					replace: !0,
					force: !0
				}), r).catch(Ce);
				return;
			}
			u = r;
			let o = c.value;
			cn && n.delta && Xn(Jn(o.fullPath, n.delta)), w(r, o).catch((e) => qe(e, 12) ? e : qe(e, 2) ? (re(G(te(e.to), { force: !0 }), r).then((e) => {
				qe(e, 20) && !n.delta && n.type === "pop" && i.go(-1, !1);
			}).catch(Ce), Promise.reject()) : (n.delta && i.go(-n.delta, !1), se(e, r, o))).then((e) => {
				e ||= T(r, o, !1), e && (n.delta && !qe(e, 8) ? i.go(-n.delta, !1) : n.type === "pop" && qe(e, 20) && i.go(-1, !1)), ie(r, o, e);
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
		push: y,
		replace: b,
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
			}), cn && !M && c.value === Vn && (M = !0, y(i.location).catch((e) => {}));
			let t = {};
			for (let e in Vn) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Ue, P), e.provide(De, ze(t)), e.provide(Re, c);
			let n = e.unmount;
			N.add(e), e.unmount = function() {
				N.delete(e), N.size < 1 && (u = Vn, E && E(), E = null, c.value = Vn, M = !1, O = !1), n();
			};
		}
	};
	function le(e) {
		return e.reduce((e, t) => e.then(() => C(t)), Promise.resolve());
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
		E(Kr, l), E(qr, "#content-vue"), E("appName", W(() => t.appName));
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
			}, 512), [[x, i.value]]), H(L, {
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
			}, null, 8, ["svg"]), [[x, !U(n)]])
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
		let t = C(e, "open"), n = W(() => t.value ? m("Close navigation") : m("Open navigation"));
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
	let o = w("IconArrowRight"), s = w("NcButton"), c = w("IconClose");
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
h(te);
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
	let o = w("ChevronUp"), s = w("ChevronDown"), c = w("NcButton");
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
h(S, y);
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
	let o = w("NcLoadingIcon"), s = w("NcInputConfirmCancel"), c = w("Pencil"), l = w("NcActionButton"), u = w("Undo"), d = w("NcActions"), f = w("NcAppNavigationIconCollapsible");
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
		let n = t, r = e, i = ne(), a = k(), o = X([]), s = W(() => o.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), c = W(() => o.value.length), l = X(null), u = X(!1), d = X({
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
			document.addEventListener("mousemove", v, { passive: !1 }), document.addEventListener("mouseup", te), "ontouchstart" in window && (document.addEventListener("touchmove", v, { passive: !1 }), document.addEventListener("touchend", te));
		}, _ = () => {
			document.removeEventListener("mousemove", v, { passive: !1 }), document.removeEventListener("mouseup", te), "ontouchstart" in window && (document.removeEventListener("touchmove", v, { passive: !1 }), document.removeEventListener("touchend", te));
		}, ee = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: i } = n.getBoundingClientRect(), { clientX: a, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				d.value.cursorOffset = r.horizontal ? o - i : a - t;
			}
			h(), d.value.mouseDown = !0, d.value.activeSplitter = t, document.documentElement.style.cursor = r.horizontal ? "row-resize" : "col-resize";
		}, v = (e) => {
			d.value.mouseDown && (e.preventDefault(), d.value.dragging || (window.getSelection()?.removeAllRanges(), d.value.dragging = !0), requestAnimationFrame(() => {
				w(S(e)), me("resize", { event: e }, !0);
			}));
		}, te = (e) => {
			d.value.dragging && (window.getSelection()?.removeAllRanges(), me("resized", { event: e }, !0)), d.value.mouseDown = !1, d.value.activeSplitter = null, setTimeout(() => {
				d.value.dragging = !1, _(), document.documentElement.style.cursor = "";
			}, 100);
		}, y = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), f.value.splitter === t ? (clearTimeout(f.value.timeoutId), f.value.timeoutId = null, b(e, t), f.value.splitter = null) : (f.value.splitter = t, f.value.timeoutId = setTimeout(() => f.value.splitter = null, 500))), d.value.dragging || me("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, b = (e, t) => {
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
		}, x = (e, t) => {
			if (!r.keyboardStep) return;
			let n = r.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", i = r.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !i) return;
			e.preventDefault(), d.value.activeSplitter = t;
			let a = (n ? 1 : -1) * (r.rtl && !r.horizontal ? -1 : 1), s = D(t) + o.value[t].size;
			ie(Math.min(Math.max(s + a * r.keyboardStep, 0), 100)), me("resize", { event: e }, !0), me("resized", { event: e }, !0), d.value.activeSplitter = null;
		}, re = (e, t) => {
			let n = s.value[t];
			n && me("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, S = (e) => {
			let t = l.value.getBoundingClientRect(), { clientX: n, clientY: i } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (r.horizontal ? 0 : d.value.cursorOffset) - t.left,
				y: i - (r.horizontal ? d.value.cursorOffset : 0) - t.top
			};
		}, C = (e) => {
			e = e[r.horizontal ? "y" : "x"];
			let t = l.value[r.horizontal ? "clientHeight" : "clientWidth"];
			return r.rtl && !r.horizontal && (e = t - e), e * 100 / t;
		}, w = (e) => {
			ie(C(e));
		}, ie = (e) => {
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
				let t = T(n, e);
				if (!t) return;
				({sums: n, panesToResize: s} = t), c = o.value[s[0]] || null, l = o.value[s[1]] || null;
			}
			c !== null && (c.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, c.min), c.max)), l !== null && (l.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, l.min), l.max));
		}, T = (e, t) => {
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
			a.classList.add("splitpanes__splitter"), n || (a.onmousedown = (e) => ee(e, i), typeof window < "u" && "ontouchstart" in window && (a.ontouchstart = (e) => ee(e, i)), a.onclick = (e) => y(e, i + 1), r.keyboardStep && (a.setAttribute("tabindex", "0"), a.setAttribute("role", "separator"), a.setAttribute("aria-orientation", r.horizontal ? "horizontal" : "vertical"), a.onkeydown = (e) => x(e, i))), a.ondblclick = (e) => b(e, i + 1), t.parentNode.insertBefore(a, t);
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
		return E("panes", o), E("indexedPanes", s), E("horizontal", W(() => r.horizontal)), E("requestUpdate", P), E("onPaneAdd", ue), E("onPaneRemove", F), E("onPaneClick", re), (e, t) => (g(), V(ae(he)));
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
		let n = C(e, "showDetails"), i = t, o = oa(), s = sa(), c = ut(), l = mt(), u = dt(() => e.disableSwipe ? void 0 : l.value, { onSwipeEnd(e, t) {
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
				P(Y("div", ua, [Fe(t.$slots, "list", {}, void 0, !0)], 512), [[x, !n.value]]),
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
}, io = ["aria-hidden", "aria-label"], ao = [
	"fill",
	"width",
	"height"
], oo = { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" }, so = { key: 0 };
function co(e, t, n, r, i, a) {
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
	}, [Y("path", oo, [n.title ? (g(), K("title", so, q(n.title), 1)) : R("", !0)])], 8, ao))], 16, io);
}
var lo = /*#__PURE__*/ $(ro, [["render", co]]), uo = {
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
}, fo = ["aria-hidden", "aria-label"], po = [
	"fill",
	"width",
	"height"
], mo = { d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" }, ho = { key: 0 };
function go(e, t, n, r, i, a) {
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
	}, [Y("path", mo, [n.title ? (g(), K("title", ho, q(n.title), 1)) : R("", !0)])], 8, po))], 16, fo);
}
var _o = /*#__PURE__*/ $(uo, [["render", go]]), vo = {
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
}, yo = ["aria-hidden", "aria-label"], bo = [
	"fill",
	"width",
	"height"
], xo = { d: "M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" }, So = { key: 0 };
function Co(e, t, n, r, i, a) {
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
			"chart-bar": wo,
			cog: lo,
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
}), Vs = () => hs("/club-status"), Hs = sn("clubStatus", () => {
	let e = X(!1), t = X(!1);
	async function n() {
		try {
			let t = await Vs();
			e.value = t.clubMode;
		} catch {
			e.value = !1;
		} finally {
			t.value = !0;
		}
	}
	function r(n) {
		e.value = n, t.value = !0;
	}
	return {
		clubMode: e,
		loaded: t,
		fetch: n,
		setClubMode: r
	};
}), Us = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "App",
	setup(e) {
		let t = Bs(), n = Hs(), r = W(() => t.info?.hasAccess ?? !1), i = W(() => t.info?.isAdmin ?? !1), a = W(() => n.clubMode);
		return p(async () => {
			await t.fetch(), t.info?.hasAccess && await n.fetch();
		}), (e, n) => {
			let o = w("router-view");
			return g(), V(U($r), { appName: "rechnungswerk" }, {
				default: j(() => [U(t).loaded ? r.value ? (g(), K(O, { key: 2 }, [
					H(U(ci), null, {
						footer: j(() => [H(U(ea), {
							name: U(A)("rechnungswerk", "Mein Kontakt"),
							to: { name: "my-contact" }
						}, {
							icon: j(() => [H(Ha, { size: 20 })]),
							_: 1
						}, 8, ["name"]), i.value ? (g(), V(U(ea), {
							key: 0,
							name: U(A)("rechnungswerk", "Einstellungen"),
							to: { name: "settings" }
						}, {
							icon: j(() => [H(lo, { size: 20 })]),
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
							a.value ? (g(), V(U(ea), {
								key: 0,
								name: U(A)("rechnungswerk", "Beitragsabrechnung"),
								to: { name: "membership-fees" }
							}, {
								icon: j(() => [H(xa, { size: 20 })]),
								_: 1
							}, 8, ["name"])) : R("", !0),
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
							}, 8, ["name"])
						]),
						_: 1
					}),
					H(U(ma), null, {
						default: j(() => [H(o)]),
						_: 1
					}),
					H(Fs)
				], 64)) : (g(), V(U(ma), { key: 1 }, {
					default: j(() => [H(U(St), {
						name: U(A)("rechnungswerk", "Kein Zugriff"),
						description: U(A)("rechnungswerk", "Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.")
					}, {
						icon: j(() => [H(_o, { size: 20 })]),
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
}), [["__scopeId", "data-v-7234d8f0"]]), Ws = {
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
}, Gs = ["aria-hidden", "aria-label"], Ks = [
	"fill",
	"width",
	"height"
], qs = { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" }, Js = { key: 0 };
function Ys(e, t, n, r, i, a) {
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
	}, [Y("path", qs, [n.title ? (g(), K("title", Js, q(n.title), 1)) : R("", !0)])], 8, Ks))], 16, Gs);
}
var Xs = /*#__PURE__*/ $(Ws, [["render", Ys]]), Zs = { class: "info-icon-wrapper" }, Qs = {
	class: "info-popup",
	tabindex: "0"
}, $s = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "InfoIcon",
	setup(e) {
		return (e, t) => (g(), K("span", Zs, [H(U(st), {
			popupRole: "tooltip",
			noFocusTrap: ""
		}, {
			trigger: j(() => [H(Xs, {
				class: "info-icon",
				size: 14,
				tabindex: "0"
			})]),
			default: j(() => [Y("div", Qs, [Fe(e.$slots, "default", {}, void 0, !0)])]),
			_: 3
		})]));
	}
}), [["__scopeId", "data-v-6c57a620"]]), ec = {
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
}, tc = ["aria-hidden", "aria-label"], nc = [
	"fill",
	"width",
	"height"
], rc = { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, ic = { key: 0 };
function ac(e, t, n, r, i, a) {
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
	}, [Y("path", rc, [n.title ? (g(), K("title", ic, q(n.title), 1)) : R("", !0)])], 8, nc))], 16, tc);
}
var oc = /*#__PURE__*/ $(ec, [["render", ac]]), sc = {
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
}, cc = ["aria-hidden", "aria-label"], lc = [
	"fill",
	"width",
	"height"
], uc = { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" }, dc = { key: 0 };
function fc(e, t, n, r, i, a) {
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
	}, [Y("path", uc, [n.title ? (g(), K("title", dc, q(n.title), 1)) : R("", !0)])], 8, lc))], 16, cc);
}
var pc = /*#__PURE__*/ $(sc, [["render", fc]]), mc = {
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
}, hc = ["aria-hidden", "aria-label"], gc = [
	"fill",
	"width",
	"height"
], _c = { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }, vc = { key: 0 };
function yc(e, t, n, r, i, a) {
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
	}, [Y("path", _c, [n.title ? (g(), K("title", vc, q(n.title), 1)) : R("", !0)])], 8, gc))], 16, hc);
}
var bc = /*#__PURE__*/ $(mc, [["render", yc]]), xc = {
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
}, Sc = ["aria-hidden", "aria-label"], Cc = [
	"fill",
	"width",
	"height"
], wc = { d: "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" }, Tc = { key: 0 };
function Ec(e, t, n, r, i, a) {
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
	}, [Y("path", wc, [n.title ? (g(), K("title", Tc, q(n.title), 1)) : R("", !0)])], 8, Cc))], 16, Sc);
}
var Dc = /*#__PURE__*/ $(xc, [["render", Ec]]), Oc = {
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
}, kc = ["aria-hidden", "aria-label"], Ac = [
	"fill",
	"width",
	"height"
], jc = { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }, Mc = { key: 0 };
function Nc(e, t, n, r, i, a) {
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
	}, [Y("path", jc, [n.title ? (g(), K("title", Mc, q(n.title), 1)) : R("", !0)])], 8, Ac))], 16, kc);
}
var Pc = /*#__PURE__*/ $(Oc, [["render", Nc]]), Fc = {
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
}, Ic = ["aria-hidden", "aria-label"], Lc = [
	"fill",
	"width",
	"height"
], Rc = { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" }, zc = { key: 0 };
function Bc(e, t, n, r, i, a) {
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
	}, [Y("path", Rc, [n.title ? (g(), K("title", zc, q(n.title), 1)) : R("", !0)])], 8, Lc))], 16, Ic);
}
var Vc = /*#__PURE__*/ $(Fc, [["render", Bc]]), Hc = {
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
}, Uc = ["aria-hidden", "aria-label"], Wc = [
	"fill",
	"width",
	"height"
], Gc = { d: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" }, Kc = { key: 0 };
function qc(e, t, n, r, i, a) {
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
	}, [Y("path", Gc, [n.title ? (g(), K("title", Kc, q(n.title), 1)) : R("", !0)])], 8, Wc))], 16, Uc);
}
var Jc = /*#__PURE__*/ $(Hc, [["render", qc]]), Yc = {
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
}, Xc = ["aria-hidden", "aria-label"], Zc = [
	"fill",
	"width",
	"height"
], Qc = { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, $c = { key: 0 };
function el(e, t, n, r, i, a) {
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
	}, [Y("path", Qc, [n.title ? (g(), K("title", $c, q(n.title), 1)) : R("", !0)])], 8, Zc))], 16, Xc);
}
var tl = /*#__PURE__*/ $(Yc, [["render", el]]), nl = {
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
}, rl = ["aria-hidden", "aria-label"], il = [
	"fill",
	"width",
	"height"
], al = { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, ol = { key: 0 };
function sl(e, t, n, r, i, a) {
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
	}, [Y("path", al, [n.title ? (g(), K("title", ol, q(n.title), 1)) : R("", !0)])], 8, il))], 16, rl);
}
var cl = /*#__PURE__*/ $(nl, [["render", sl]]), ll = {
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
}, ul = ["aria-hidden", "aria-label"], dl = [
	"fill",
	"width",
	"height"
], fl = { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, pl = { key: 0 };
function ml(e, t, n, r, i, a) {
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
	}, [Y("path", fl, [n.title ? (g(), K("title", pl, q(n.title), 1)) : R("", !0)])], 8, dl))], 16, ul);
}
var hl = /*#__PURE__*/ $(ll, [["render", ml]]), gl = {
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
}, _l = ["aria-hidden", "aria-label"], vl = [
	"fill",
	"width",
	"height"
], yl = { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }, bl = { key: 0 };
function xl(e, t, n, r, i, a) {
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
	}, [Y("path", yl, [n.title ? (g(), K("title", bl, q(n.title), 1)) : R("", !0)])], 8, vl))], 16, _l);
}
var Sl = /*#__PURE__*/ $(gl, [["render", xl]]), Cl = {
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
}, wl = ["aria-hidden", "aria-label"], Tl = [
	"fill",
	"width",
	"height"
], El = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, Dl = { key: 0 };
function Ol(e, t, n, r, i, a) {
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
	}, [Y("path", El, [n.title ? (g(), K("title", Dl, q(n.title), 1)) : R("", !0)])], 8, Tl))], 16, wl);
}
var kl = /*#__PURE__*/ $(Cl, [["render", Ol]]), Al = () => hs("/invoices"), jl = (e) => hs(`/invoices/${e}`), Ml = (e) => gs("/invoices", { data: e }), Nl = (e, t) => _s(`/invoices/${e}`, { data: t }), Pl = (e) => ys(`/invoices/${e}`), Fl = (e) => gs(`/invoices/${e}/commit`, {}), Il = (e) => gs(`/invoices/${e}/cancel`, {}), Ll = (e) => gs(`/invoices/${e}/duplicate`, {}), Rl = (e, t) => gs(`/invoices/${e}/pay`, t ? { date: t } : {}), zl = (e) => gs(`/invoices/${e}/unpay`, {}), Bl = (e) => ps(`/invoices/${e}/pdf`), Vl = (e) => ps(`/invoices/${e}/preview`) + "?t=" + Date.now(), Hl = (e) => {
	let t = document.createElement("a");
	t.href = Bl(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Ul = (e, t) => gs(`/invoices/${e}/send`, t), Wl = sn("invoice", () => {
	let e = X([]), t = X(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await Al();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => jl(e);
	async function i(e) {
		let t = await Ml(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await Nl(e, t);
		return await n(), r;
	}
	async function o(t) {
		await Pl(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await Fl(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await Il(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await Ll(e);
		return await n(), t;
	}
	async function u(e, t) {
		let r = await Rl(e, t);
		return await n(), r;
	}
	async function d(e) {
		let t = await zl(e);
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
}), Gl = (e) => gs("/smtp/test", e), Kl = () => hs("/settings"), ql = (e) => vs("/settings", { data: e }), Jl = (e) => vs("/settings/logo", { path: e }), Yl = () => ys("/settings/logo"), Xl = (e) => `${ps("/settings/logo")}?v=${e}`, Zl = (e) => vs("/settings/archive-folder", { path: e }), Ql = () => ys("/settings/archive-folder"), $l = sn("settings", () => {
	let e = X(null), t = X(!1), n = X(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Kl();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		n.value = !0;
		try {
			return e.value = await ql(t), e.value;
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
}), eu = [
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
], tu = {
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
}, nu = [
	1900,
	700,
	0
], ru = "Gem. § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.", iu = {
	invoice: "Rechnung",
	quote: "Angebot"
}, au = {
	opening: "Anrede & Einleitung",
	closing: "Schlusstext"
}, ou = {
	draft: "Entwurf",
	committed: "Festgeschrieben",
	cancelled: "Storniert"
}, su = {
	invoice: "Rechnung",
	cancellation: "Storno",
	quote: "Angebot"
}, cu = {
	draft: "Entwurf",
	open: "Offen",
	expired: "Abgelaufen",
	accepted: "Angenommen",
	rejected: "Abgelehnt",
	converted: "Übernommen",
	superseded: "Revidiert"
};
function lu(e) {
	return e.includes(".") ? /^\d{1,3}(\.\d{3})+$/.test(e) : /^\d*$/.test(e);
}
function uu(e, t, n) {
	if (e == null) return null;
	let r = String(e).replace(/[\s  ]+/g, "");
	if (r === "") return null;
	let i = !1;
	if (r.startsWith("-") ? (i = !0, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1)), r === "" || !/^[0-9.,]+$/.test(r)) return null;
	let a = r.indexOf(","), o, s;
	if (a >= 0) {
		if (r.includes(",", a + 1) || (o = r.slice(0, a), s = r.slice(a + 1), s.includes("."))) return null;
	} else o = r, s = "";
	if (!lu(o) || (o = o.split(".").join(""), o === "" && s === "") || (o === "" && (o = "0"), !/^\d+$/.test(o)) || s !== "" && !/^\d+$/.test(s) || s.length > t || (o = o.replace(/^0+/, ""), o === "" && (o = "0"), o.length > n)) return null;
	s = s.replace(/0+$/, "");
	let c = o + (s === "" ? "" : "." + s);
	return i && c !== "0" ? "-" + c : c;
}
function du(e) {
	return e == null || String(e).trim() === "" ? "1" : uu(e, 3, 9);
}
function fu(e) {
	return e == null || String(e).trim() === "" ? "0" : uu(e, 4, 9);
}
function pu(e) {
	if (e === null) return "";
	let [t, n] = e.split("."), r = t.startsWith("-") ? "-" : "";
	return r + (r ? t.slice(1) : t).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (n ? "," + n : "");
}
function mu(e) {
	if (e == null) return "";
	let t = String(e).trim();
	if (t === "") return "";
	if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(t)) return t;
	let n = t.startsWith("-");
	(n || t.startsWith("+")) && (t = t.slice(1));
	let [r, i = ""] = t.split("."), a = r.replace(/^0+/, "") || "0", o = i.replace(/0+$/, "");
	return pu((n && (a !== "0" || o !== "") ? "-" : "") + a + (o === "" ? "" : "." + o));
}
//#endregion
//#region src/utils/money.ts
function hu(e) {
	return e == null ? "" : pu((e / 1e4).toFixed(4).replace(/(\.\d\d)(\d*?)0+$/, "$1$2"));
}
function gu(e) {
	let t = fu(e);
	return t === null ? 0 : Math.round(Number.parseFloat(t) * 1e4);
}
function _u(e) {
	let t = (e ?? 0) / 1e4;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	}).format(t);
}
function vu(e) {
	let t = (e ?? 0) / 100;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR"
	}).format(t);
}
function yu(e) {
	return `${e / 100} %`;
}
//#endregion
//#region src/views/InvoicesView.vue?vue&type=script&setup=true&lang.ts
var bu = { class: "rw-view" }, xu = { class: "rw-view__head" }, Su = { key: 2 }, Cu = { class: "rw-filterbar" }, wu = ["onClick"], Tu = { class: "rw-chip__n" }, Eu = {
	key: 0,
	class: "rw-chip rw-chip--sum"
}, Du = { class: "rw-table-wrap" }, Ou = { class: "rw-table" }, ku = { class: "rw-th-info" }, Au = { class: "rw-info-popup" }, ju = { class: "rw-info-popup__hint" }, Mu = { class: "rw-info-popup__group" }, Nu = { class: "rw-legend__label" }, Pu = { class: "rw-legend__item" }, Fu = { class: "rw-legend__item" }, Iu = { class: "rw-legend__item" }, Lu = {
	key: 0,
	class: "rw-info-popup__group"
}, Ru = { class: "rw-legend__label" }, zu = { class: "rw-legend__item" }, Bu = { class: "rw-legend__item" }, Vu = { class: "rw-legend__item" }, Hu = { class: "num" }, Uu = { class: "rw-col-paid" }, Wu = ["onClick"], Gu = { class: "rw-status-cell" }, Ku = {
	key: 0,
	class: "rw-pill"
}, qu = { class: "num" }, Ju = ["aria-label", "onKeyup"], Yu = ["title", "onClick"], Xu = { class: "rw-col-paid" }, Zu = [
	"aria-label",
	"title",
	"onClick"
], Qu = { class: "rw-col-actions" }, $u = { class: "rw-actions" }, ed = 864e5, td = /* @__PURE__ */ B({
	__name: "InvoicesView",
	setup(e) {
		let t = Ae(), n = Wl(), r = $l(), i = X(""), a = W(() => !!r.settings?.imapHost), o = W(() => n.invoices.some((e) => !!e.datevStatus)), s = W(() => a.value || o.value), c = [
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
			return n.setHours(0, 0, 0, 0), Math.round((t.getTime() - n.getTime()) / ed);
		}
		function v(e) {
			return e ? _(e).toLocaleDateString(void 0, {
				day: "numeric",
				month: "numeric"
			}) : "";
		}
		let te = (e) => e.paymentStatus === "overdue" ? "rw-amt-overdue" : e.paymentStatus === "paid" ? "rw-amt-paid" : "";
		function ne(e) {
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
		let y = (e) => e.paymentStatus === "paid" ? A("rechnungswerk", "Als unbezahlt markieren") : A("rechnungswerk", "Als bezahlt markieren");
		function b(e) {
			return e.paymentStatus === "paid" ? e.paidAt ? A("rechnungswerk", "Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen", { date: v(e.paidAt) }) : A("rechnungswerk", "Bezahlt – klicken, um die Zahlung zurückzunehmen") : A("rechnungswerk", "Als bezahlt markieren");
		}
		async function x(e) {
			i.value = "";
			try {
				e.paymentStatus === "paid" ? await n.markUnpaid(e.id) : await n.markPaid(e.id);
			} catch (e) {
				i.value = e.message ?? A("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		let re = X(null), S = X("");
		function C(e) {
			let t = e ? _(e) : /* @__PURE__ */ new Date(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
			return `${t.getFullYear()}-${n}-${r}`;
		}
		function w(e) {
			i.value = "", S.value = C(e.paidAt), re.value = e.id;
		}
		function T() {
			re.value = null;
		}
		async function E(e) {
			if (!S.value) {
				T();
				return;
			}
			i.value = "";
			try {
				await n.markPaid(e.id, S.value), re.value = null;
			} catch (e) {
				i.value = e.message ?? A("rechnungswerk", "Zahldatum konnte nicht geändert werden");
			}
		}
		let D = {
			draft: Dc,
			committed: _o,
			cancelled: Pc
		}, oe = {
			pending: Jc,
			confirmed: Vc,
			unknown: tl,
			failed: Pc
		}, se = (e) => D[e] ?? xa, k = (e) => e ? oe[e] ?? null : null, ce = {
			pending: A("rechnungswerk", "An DATEV gesendet – Bestätigung ausstehend"),
			confirmed: A("rechnungswerk", "Von DATEV bestätigt (Beleg angenommen)"),
			unknown: A("rechnungswerk", "DATEV-Antwort prüfen"),
			failed: A("rechnungswerk", "Von DATEV abgelehnt")
		}, M = (e) => ce[e] ?? "", N = (e) => A("rechnungswerk", ou[e] ?? e), le = (e) => A("rechnungswerk", su[e] ?? e), ue = (e) => e.relatedNumber ? A("rechnungswerk", "{type} zu Rechnung {number}", {
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
			Hl(e);
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
			let r = ie("tooltip");
			return g(), K("div", bu, [
				Y("div", xu, [Y("h2", null, q(U(A)("rechnungswerk", "Rechnungen")), 1), H(U(L), {
					variant: "primary",
					onClick: fe
				}, {
					icon: j(() => [H(oc, { size: 20 })]),
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
				}, 8, ["name", "description"])) : U(n).invoices.length > 0 ? (g(), K("div", Su, [Y("div", Cu, [(g(), K(O, null, u(c, (e) => Y("button", {
					key: e.key,
					class: Z(["rw-chip", {
						"rw-chip--active": l.value === e.key,
						"rw-chip--overdue": e.key === "overdue"
					}]),
					onClick: (t) => l.value = e.key
				}, [z(q(U(A)("rechnungswerk", e.label)) + " ", 1), Y("span", Tu, q(f.value[e.key]), 1)], 10, wu)), 64)), m.value > 0 ? (g(), K("span", Eu, [z(q(U(A)("rechnungswerk", "Offen gesamt:")) + " ", 1), Y("strong", null, q(U(vu)(m.value)), 1)])) : R("", !0)]), Y("div", Du, [Y("table", Ou, [Y("thead", null, [Y("tr", null, [
					Y("th", null, [Y("span", ku, [z(q(U(A)("rechnungswerk", "Status")) + " ", 1), H($s, null, {
						default: j(() => [Y("div", Au, [
							Y("p", ju, q(U(A)("rechnungswerk", "Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.")), 1),
							Y("div", Mu, [
								Y("span", Nu, q(U(A)("rechnungswerk", "Rechnung")), 1),
								Y("span", Pu, [H(_o, {
									size: 16,
									class: "rw-sicon rw-sicon--committed"
								}), z(" " + q(U(A)("rechnungswerk", "Festgeschrieben")), 1)]),
								Y("span", Fu, [H(Dc, {
									size: 16,
									class: "rw-sicon rw-sicon--draft"
								}), z(" " + q(U(A)("rechnungswerk", "Entwurf")), 1)]),
								Y("span", Iu, [H(Pc, {
									size: 16,
									class: "rw-sicon rw-sicon--cancelled"
								}), z(" " + q(U(A)("rechnungswerk", "Storniert")), 1)])
							]),
							s.value ? (g(), K("div", Lu, [
								Y("span", Ru, q(U(A)("rechnungswerk", "DATEV-Übergabe")), 1),
								Y("span", zu, [H(Vc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-confirmed"
								}), z(" " + q(U(A)("rechnungswerk", "bestätigt")), 1)]),
								Y("span", Bu, [H(Jc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-pending"
								}), z(" " + q(U(A)("rechnungswerk", "gesendet")), 1)]),
								Y("span", Vu, [H(tl, {
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
					Y("th", Hu, q(U(A)("rechnungswerk", "Brutto")), 1),
					Y("th", Uu, q(U(A)("rechnungswerk", "Bezahlt")), 1),
					t[2] ||= Y("th", { class: "rw-col-actions" }, null, -1)
				])]), Y("tbody", null, [(g(!0), K(O, null, u(h.value, (e) => (g(), K("tr", {
					key: e.id,
					class: Z(["rw-row-clickable", { "rw-row--overdue": e.paymentStatus === "overdue" }]),
					onClick: (t) => pe(e.id)
				}, [
					Y("td", null, [Y("span", Gu, [(g(), V(ae(se(e.status)), {
						size: 20,
						class: Z(["rw-sicon", `rw-sicon--${e.status}`]),
						title: N(e.status)
					}, null, 8, ["class", "title"])), s.value && e.datevStatus && k(e.datevStatus) ? (g(), V(ae(k(e.datevStatus)), {
						key: 0,
						size: 18,
						class: Z(["rw-sicon", `rw-sicon--datev-${e.datevStatus}`]),
						title: M(e.datevStatus)
					}, null, 8, ["class", "title"])) : R("", !0)])]),
					Y("td", null, [z(q(e.number ?? U(A)("rechnungswerk", "(Entwurf)")) + " ", 1), e.invoiceType === "invoice" ? R("", !0) : P((g(), K("span", Ku, [z(q(le(e.invoiceType)), 1)])), [[r, ue(e)]])]),
					Y("td", null, q(e.recipientName ?? "—"), 1),
					Y("td", null, q(I(e.issueDate ?? e.createdAt)), 1),
					Y("td", qu, [Y("span", { class: Z(te(e)) }, q(U(vu)(e.totalCents)), 3), re.value === e.id ? (g(), K("div", {
						key: 0,
						class: "rw-paid-edit",
						onClick: t[1] ||= F(() => {}, ["stop"])
					}, [
						P(Y("input", {
							"onUpdate:modelValue": t[0] ||= (e) => S.value = e,
							type: "date",
							class: "rw-input rw-paid-input",
							"aria-label": U(A)("rechnungswerk", "Zahldatum"),
							onKeyup: [de((t) => E(e), ["enter"]), de(T, ["esc"])]
						}, null, 40, Ju), [[J, S.value]]),
						H(U(L), {
							variant: "primary",
							"aria-label": U(A)("rechnungswerk", "Zahldatum speichern"),
							title: U(A)("rechnungswerk", "Zahldatum speichern"),
							onClick: F((t) => E(e), ["stop"])
						}, {
							icon: j(() => [H(Sl, { size: 18 })]),
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
							onClick: F(T, ["stop"])
						}, {
							icon: j(() => [H(kl, { size: 18 })]),
							_: 1
						}, 8, ["aria-label", "title"])
					])) : e.paymentStatus === "paid" ? (g(), K("button", {
						key: 1,
						type: "button",
						class: "rw-subline rw-subline--editable",
						title: U(A)("rechnungswerk", "Zahldatum ändern"),
						onClick: F((t) => w(e), ["stop"])
					}, q(ne(e)), 9, Yu)) : ne(e) ? (g(), K("div", {
						key: 2,
						class: Z(["rw-subline", { "rw-subline--overdue": e.paymentStatus === "overdue" }])
					}, q(ne(e)), 3)) : R("", !0)]),
					Y("td", Xu, [e.paymentStatus ? (g(), K("button", {
						key: 0,
						class: Z(["rw-paybox", e.paymentStatus === "paid" ? "rw-paybox--paid" : "rw-paybox--open"]),
						"aria-label": y(e),
						title: b(e),
						onClick: F((t) => x(e), ["stop"])
					}, [(g(), V(ae(e.paymentStatus === "paid" ? hl : cl), { size: 22 }))], 10, Zu)) : R("", !0)]),
					Y("td", Qu, [Y("div", $u, [e.invoiceType === "cancellation" ? R("", !0) : (g(), V(U(L), {
						key: 0,
						variant: "tertiary",
						"aria-label": U(A)("rechnungswerk", "Duplizieren"),
						title: U(A)("rechnungswerk", "Als Vorlage für neue Rechnung duplizieren"),
						onClick: F((t) => he(e.id), ["stop"])
					}, {
						icon: j(() => [H(bc, { size: 20 })]),
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
						icon: j(() => [H(pc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					]))])])
				], 10, Wu))), 128))])])])])) : R("", !0)
			]);
		};
	}
}), nd = {
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
}, rd = ["aria-hidden", "aria-label"], id = [
	"fill",
	"width",
	"height"
], ad = { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" }, od = { key: 0 };
function sd(e, t, n, r, i, a) {
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
	}, [Y("path", ad, [n.title ? (g(), K("title", od, q(n.title), 1)) : R("", !0)])], 8, id))], 16, rd);
}
var cd = /*#__PURE__*/ $(nd, [["render", sd]]), ld = {
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
}, ud = ["aria-hidden", "aria-label"], dd = [
	"fill",
	"width",
	"height"
], fd = { d: "M2,21L23,12L2,3V10L17,12L2,14V21Z" }, pd = { key: 0 };
function md(e, t, n, r, i, a) {
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
	}, [Y("path", fd, [n.title ? (g(), K("title", pd, q(n.title), 1)) : R("", !0)])], 8, dd))], 16, ud);
}
var hd = /*#__PURE__*/ $(ld, [["render", md]]), gd = {
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
}, _d = ["aria-hidden", "aria-label"], vd = [
	"fill",
	"width",
	"height"
], yd = { d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" }, bd = { key: 0 };
function xd(e, t, n, r, i, a) {
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
	}, [Y("path", yd, [n.title ? (g(), K("title", bd, q(n.title), 1)) : R("", !0)])], 8, vd))], 16, _d);
}
var Sd = /*#__PURE__*/ $(gd, [["render", xd]]), Cd = {
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
}, wd = ["aria-hidden", "aria-label"], Td = [
	"fill",
	"width",
	"height"
], Ed = { d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 20.41 4.12 20.8 4.34 21.12C4.41 21.23 4.5 21.33 4.59 21.41C4.95 21.78 5.45 22 6 22H13.53C13 21.42 12.61 20.75 12.35 20H6V4H13V9H18V12C18.7 12 19.37 12.12 20 12.34V8L14 2M18 23L23 18.5L20 15.8L18 14V17H14V20H18V23Z" }, Dd = { key: 0 };
function Od(e, t, n, r, i, a) {
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
	}, [Y("path", Ed, [n.title ? (g(), K("title", Dd, q(n.title), 1)) : R("", !0)])], 8, Td))], 16, wd);
}
var kd = /*#__PURE__*/ $(Cd, [["render", Od]]), Ad = {
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
}, jd = ["aria-hidden", "aria-label"], Md = [
	"fill",
	"width",
	"height"
], Nd = { d: "M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" }, Pd = { key: 0 };
function Fd(e, t, n, r, i, a) {
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
	}, [Y("path", Nd, [n.title ? (g(), K("title", Pd, q(n.title), 1)) : R("", !0)])], 8, Md))], 16, jd);
}
var Id = /*#__PURE__*/ $(Ad, [["render", Fd]]), Ld = (e) => hs(`/contacts/search?q=${encodeURIComponent(e)}`), Rd = () => hs("/me"), zd = { class: "contact-picker" }, Bd = ["value", "placeholder"], Vd = {
	key: 0,
	class: "contact-picker__list"
}, Hd = ["onMousedown"], Ud = {
	key: 0,
	class: "muted"
}, Wd = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
					r.value = await Ld(e.trim()), i.value = r.value.length > 0;
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
		}), (t, n) => (g(), K("div", zd, [Y("input", {
			value: e.modelValue,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: U(A)("rechnungswerk", "Name eingeben oder Kontakt wählen\xA0…"),
			onInput: n[0] ||= (e) => o(e.target.value),
			onFocus: n[1] ||= (e) => i.value = r.value.length > 0,
			onBlur: c
		}, null, 40, Bd), i.value && r.value.length > 0 ? (g(), K("ul", Vd, [(g(!0), K(O, null, u(r.value, (e, t) => (g(), K("li", {
			key: t,
			class: "contact-picker__item",
			onMousedown: F((t) => s(e), ["prevent"])
		}, [Y("strong", null, q(e.name), 1), e.email ? (g(), K("span", Ud, q(e.email), 1)) : R("", !0)], 40, Hd))), 128))])) : R("", !0)]));
	}
}), [["__scopeId", "data-v-23f7f625"]]), Gd = null, Kd = () => (Gd === null && (Gd = hs("/countries").catch((e) => {
	throw Gd = null, e;
})), Gd), qd = ["disabled", "title"], Jd = ["value"], Yd = ["value"], Xd = /* @__PURE__ */ B({
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
		let t = C(e, "modelValue"), n = X([]), r = W(() => {
			let e = n.value.find((e) => e.code === t.value);
			return e ? `${e.label} (${e.code})` : t.value ?? "";
		}), i = W(() => {
			let e = t.value ?? "";
			return e === "" || n.value.length === 0 ? e : n.value.some((t) => t.code === e) ? "" : e;
		});
		return p(async () => {
			try {
				n.value = await Kd();
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
		}, q(i.value), 9, Jd)), (g(!0), K(O, null, u(n.value, (e) => (g(), K("option", {
			key: e.code,
			value: e.code
		}, q(e.label) + " (" + q(e.code) + ")", 9, Yd))), 128))], 10, qd)), [[re, t.value]]);
	}
}), Zd = () => hs("/customers"), Qd = (e) => gs("/customers", { data: e }), $d = (e, t) => _s(`/customers/${e}`, { data: t }), ef = (e) => ys(`/customers/${e}`), tf = sn("customer", () => {
	let e = X([]), t = X(!1);
	function n() {
		e.value.sort((e, t) => e.name.localeCompare(t.name));
	}
	async function r() {
		t.value = !0;
		try {
			e.value = await Zd();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		let r = await Qd(t);
		return e.value.push(r), n(), r;
	}
	async function a(t, r) {
		let i = await $d(t, r), a = e.value.findIndex((e) => e.id === t);
		return a >= 0 && (e.value[a] = i), n(), i;
	}
	async function o(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await ef(t);
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
}), nf = { class: "customer-picker" }, rf = ["value", "placeholder"], af = {
	key: 0,
	class: "customer-picker__list"
}, of = ["onMousedown"], sf = { class: "muted" }, cf = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "CustomerPicker",
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = t, r = tf(), i = X(""), a = X([]), o = X(!1);
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
		return (e, t) => (g(), K("div", nf, [Y("input", {
			value: i.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: U(A)("rechnungswerk", "Kunde suchen oder anlegen\xA0…"),
			onInput: t[0] ||= (e) => s(e.target.value),
			onFocus: t[1] ||= (e) => o.value = a.value.length > 0,
			onBlur: l
		}, null, 40, rf), o.value && a.value.length > 0 ? (g(), K("ul", af, [(g(!0), K(O, null, u(a.value, (e) => (g(), K("li", {
			key: e.id,
			class: "customer-picker__item",
			onMousedown: F((t) => c(e), ["prevent"])
		}, [Y("strong", null, q(e.name), 1), Y("span", sf, q([
			e.customerNumber,
			[e.postalCode, e.city].filter(Boolean).join(" "),
			e.vatId
		].filter(Boolean).join(" · ")), 1)], 40, of))), 128))])) : R("", !0)]));
	}
}), [["__scopeId", "data-v-4ad9c538"]]), lf = { class: "product-picker" }, uf = ["value", "placeholder"], df = {
	key: 0,
	class: "product-picker__panel"
}, ff = { class: "product-picker__head" }, pf = { class: "product-picker__list" }, mf = ["onMousedown"], hf = { class: "muted" }, gf = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "ProductPicker",
	props: { products: {} },
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = X(""), a = X([]), o = X(!1), s = null, c = W(() => i.value.trim() === "" ? A("rechnungswerk", "Alle Produkte ({gesamt})", { gesamt: n.products.length }) : A("rechnungswerk", "{treffer} Treffer", { treffer: a.value.length }));
		function l(e) {
			return [`${hu(e.defaultPriceE4)} €`, e.defaultUnitLabel || A("rechnungswerk", tu[e.defaultUnitCode])].filter(Boolean).join(" · ");
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
		return (e, t) => (g(), K("div", lf, [Y("input", {
			value: i.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: U(A)("rechnungswerk", "Produkt wählen oder suchen\xA0…"),
			onInput: t[0] ||= (e) => f(e.target.value),
			onFocus: p,
			onClick: p,
			onBlur: h
		}, null, 40, uf), o.value && a.value.length > 0 ? (g(), K("div", df, [Y("div", ff, q(c.value), 1), Y("ul", pf, [(g(!0), K(O, null, u(a.value, (e) => (g(), K("li", {
			key: e.id,
			class: "product-picker__item",
			onMousedown: F((t) => m(e), ["prevent"])
		}, [Y("strong", null, q(e.name), 1), Y("span", hf, q(l(e)), 1)], 40, mf))), 128))])])) : R("", !0)]));
	}
}), [["__scopeId", "data-v-6469714c"]]);
//#endregion
//#region src/types/editor.ts
function _f(e = 1900) {
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
function vf(e, t) {
	return {
		productId: e.id,
		name: e.name,
		description: e.description ?? "",
		quantity: "1",
		unitCode: e.defaultUnitCode,
		unitLabel: e.defaultUnitLabel ?? "",
		priceInput: hu(e.defaultPriceE4),
		taxRateBp: t ? 0 : e.defaultTaxRateBp
	};
}
function yf(e) {
	return {
		productId: e.productId,
		name: e.name,
		description: e.description ?? "",
		quantity: mu(e.quantity),
		unitCode: e.unitCode,
		unitLabel: e.unitLabel ?? "",
		priceInput: hu(e.unitPriceE4),
		taxRateBp: e.taxRateBp
	};
}
//#endregion
//#region src/utils/invoiceCalc.ts
function bf(e, t) {
	let n = du(e);
	if (n === null) return 0;
	let r = Math.round(Number(n) * 1e3);
	return Math.round(r * t / 1e5);
}
function xf(e, t = !1) {
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
var Sf = { class: "rw-table-wrap" }, Cf = { class: "rw-table rw-table--positions" }, wf = {
	key: 0,
	class: "rw-col-actions"
}, Tf = { class: "num" }, Ef = { class: "num" }, Df = { class: "num" }, Of = { class: "rw-sum" }, kf = { key: 0 }, Af = { class: "rw-pos-main" }, jf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Mf = { class: "num" }, Nf = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], Pf = ["onUpdate:modelValue", "disabled"], Ff = ["value"], If = { class: "num" }, Lf = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], Rf = { class: "num" }, zf = ["onUpdate:modelValue", "disabled"], Bf = ["value"], Vf = { class: "rw-sum" }, Hf = {
	key: 0,
	class: "num"
}, Uf = {
	key: 0,
	class: "rw-pos-desc"
}, Wf = ["colspan"], Gf = { class: "rw-sub-row" }, Kf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder",
	"title"
], qf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Jf = { key: 0 }, Yf = ["colspan"], Xf = {
	key: 0,
	class: "rw-toolbar"
}, Zf = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
		let t = C(e, "items"), n = e, r = (e) => bf(e.quantity, gu(e.priceInput));
		function i(e) {
			let t = du(e.quantity);
			t !== null && (e.quantity = pu(t));
		}
		function a(e) {
			fu(e.priceInput) !== null && (e.priceInput = hu(gu(e.priceInput)));
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
			l() === -1 && t.value.push(_f(n.smallBusiness ? 0 : n.defaultTaxRateBp ?? 1900));
		}
		function f(e) {
			let r = vf(e, n.smallBusiness ?? !1), i = l();
			if (i !== -1) {
				t.value.splice(i, 1, r);
				return;
			}
			t.value.push(r);
		}
		function p(e) {
			t.value.splice(e, 1);
		}
		return (n, o) => (g(), K("div", null, [Y("div", Sf, [Y("table", Cf, [
			Y("colgroup", null, [
				o[0] ||= Y("col", null, null, -1),
				o[1] ||= Y("col", { class: "rw-col-qty" }, null, -1),
				o[2] ||= Y("col", { class: "rw-col-unit" }, null, -1),
				o[3] ||= Y("col", { class: "rw-col-price" }, null, -1),
				o[4] ||= Y("col", { class: "rw-col-tax" }, null, -1),
				o[5] ||= Y("col", { class: "rw-col-sum" }, null, -1),
				e.readonly ? R("", !0) : (g(), K("col", wf))
			]),
			Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(A)("rechnungswerk", "Bezeichnung")), 1),
				Y("th", Tf, q(U(A)("rechnungswerk", "Menge")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Einheit")), 1),
				Y("th", Ef, q(U(A)("rechnungswerk", "Einzelpreis (€)")), 1),
				Y("th", Df, q(U(A)("rechnungswerk", "USt")), 1),
				Y("th", Of, q(U(A)("rechnungswerk", "Summe netto")), 1),
				e.readonly ? R("", !0) : (g(), K("th", kf))
			])]),
			Y("tbody", null, [(g(!0), K(O, null, u(t.value, (t, n) => (g(), K(O, { key: n }, [Y("tr", Af, [
				Y("td", null, [P(Y("input", {
					"onUpdate:modelValue": (e) => t.name = e,
					class: "rw-input",
					type: "text",
					readonly: e.readonly,
					placeholder: U(A)("rechnungswerk", "Leistung")
				}, null, 8, jf), [[J, t.name]])]),
				Y("td", Mf, [P(Y("input", {
					"onUpdate:modelValue": (e) => t.quantity = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => i(t)
				}, null, 40, Nf), [[J, t.quantity]])]),
				Y("td", null, [P(Y("select", {
					"onUpdate:modelValue": (e) => t.unitCode = e,
					class: "rw-input",
					disabled: e.readonly
				}, [(g(!0), K(O, null, u(U(eu), (e) => (g(), K("option", {
					key: e,
					value: e
				}, q(U(A)("rechnungswerk", U(tu)[e])), 9, Ff))), 128))], 8, Pf), [[re, t.unitCode]])]),
				Y("td", If, [P(Y("input", {
					"onUpdate:modelValue": (e) => t.priceInput = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => a(t)
				}, null, 40, Lf), [[J, t.priceInput]])]),
				Y("td", Rf, [P(Y("select", {
					"onUpdate:modelValue": (e) => t.taxRateBp = e,
					class: "rw-input",
					disabled: e.readonly || e.smallBusiness
				}, [(g(!0), K(O, null, u(U(nu), (e) => (g(), K("option", {
					key: e,
					value: e
				}, q(U(yu)(e)), 9, Bf))), 128))], 8, zf), [[
					re,
					t.taxRateBp,
					void 0,
					{ number: !0 }
				]])]),
				Y("td", Vf, q(U(vu)(r(t))), 1),
				e.readonly ? R("", !0) : (g(), K("td", Hf, [H(U(L), {
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "Position entfernen"),
					onClick: (e) => p(n)
				}, {
					icon: j(() => [H(cd, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "onClick"])]))
			]), !e.readonly || t.description || t.unitLabel ? (g(), K("tr", Uf, [Y("td", { colspan: e.readonly ? 6 : 7 }, [Y("div", Gf, [!e.readonly || t.unitLabel ? P((g(), K("input", {
				key: 0,
				"onUpdate:modelValue": (e) => t.unitLabel = e,
				class: "rw-input rw-input--sub rw-unit-label",
				type: "text",
				maxlength: "64",
				readonly: e.readonly,
				placeholder: U(A)("rechnungswerk", "eigene Einheit"),
				title: U(A)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.")
			}, null, 8, Kf)), [[J, t.unitLabel]]) : R("", !0), !e.readonly || t.description ? P((g(), K("input", {
				key: 1,
				"onUpdate:modelValue": (e) => t.description = e,
				class: "rw-input rw-input--sub rw-desc",
				type: "text",
				readonly: e.readonly,
				placeholder: U(A)("rechnungswerk", "Beschreibung (optional)")
			}, null, 8, qf)), [[J, t.description]]) : R("", !0)])], 8, Wf)])) : R("", !0)], 64))), 128)), t.value.length === 0 ? (g(), K("tr", Jf, [Y("td", {
				colspan: e.readonly ? 6 : 7,
				class: "rw-muted empty-row"
			}, q(U(A)("rechnungswerk", "Noch keine Positionen.")), 9, Yf)])) : R("", !0)])
		])]), e.readonly ? R("", !0) : (g(), K("div", Xf, [H(U(L), { onClick: d }, {
			icon: j(() => [H(oc, { size: 20 })]),
			default: j(() => [z(" " + q(U(A)("rechnungswerk", "Position hinzufügen")), 1)]),
			_: 1
		}), e.products.length > 0 ? (g(), V(gf, {
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
}), [["__scopeId", "data-v-76deaaa6"]]), Qf = { class: "confirm-dialog" }, $f = { class: "confirm-dialog__message" }, ep = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
			default: j(() => [Y("div", Qf, [Y("p", $f, q(e.message), 1)])]),
			_: 1
		}, 8, ["open", "name"]));
	}
}), [["__scopeId", "data-v-54981555"]]), tp = { class: "send-modal" }, np = { class: "send-modal__hint" }, rp = { class: "field" }, ip = { class: "field" }, ap = { class: "field" }, op = { class: "actions" }, sp = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
			default: j(() => [Y("div", tp, [
				Y("h2", null, q(i.value), 1),
				Y("p", np, q(a.value), 1),
				Y("label", rp, [Y("span", null, q(U(A)("rechnungswerk", "Empfänger-E-Mail")) + " *", 1), P(Y("input", {
					ref_key: "toInput",
					ref: c,
					"onUpdate:modelValue": n[0] ||= (e) => l.to = e,
					class: "input",
					type: "email"
				}, null, 512), [[J, l.to]])]),
				Y("label", ip, [Y("span", null, q(U(A)("rechnungswerk", "Betreff")) + " *", 1), P(Y("input", {
					"onUpdate:modelValue": n[1] ||= (e) => l.subject = e,
					class: "input",
					type: "text"
				}, null, 512), [[J, l.subject]])]),
				Y("label", ap, [Y("span", null, q(U(A)("rechnungswerk", "Nachricht")), 1), P(Y("textarea", {
					"onUpdate:modelValue": n[2] ||= (e) => l.body = e,
					class: "input",
					rows: "6"
				}, null, 512), [[J, l.body]])]),
				Y("div", op, [H(U(L), { onClick: n[3] ||= (e) => t.$emit("close") }, {
					default: j(() => [z(q(U(A)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), H(U(L), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					icon: j(() => [H(hd, { size: 20 })]),
					default: j(() => [z(" " + q(U(A)("rechnungswerk", "Senden")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : R("", !0);
	}
}), [["__scopeId", "data-v-2f5a808a"]]), cp = () => hs("/quotes"), lp = (e) => hs(`/quotes/${e}`), up = (e) => gs("/quotes", { data: e }), dp = (e, t) => _s(`/quotes/${e}`, { data: t }), fp = (e) => ys(`/quotes/${e}`), pp = (e) => gs(`/quotes/${e}/commit`, {}), mp = (e) => gs(`/quotes/${e}/accept`, {}), hp = (e) => gs(`/quotes/${e}/reject`, {}), gp = (e) => gs(`/quotes/${e}/convert`, {}), _p = (e) => gs(`/quotes/${e}/revise`, {}), vp = (e) => ps(`/quotes/${e}/pdf`), yp = (e) => ps(`/quotes/${e}/preview`) + "?t=" + Date.now(), bp = (e) => {
	let t = document.createElement("a");
	t.href = vp(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, xp = (e, t) => gs(`/quotes/${e}/send`, t), Sp = sn("quote", () => {
	let e = X([]), t = X(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await cp();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => lp(e);
	async function i(e) {
		let t = await up(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await dp(e, t);
		return await n(), r;
	}
	async function o(t) {
		await fp(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await pp(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await mp(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await hp(e);
		return await n(), t;
	}
	async function u(e) {
		let t = await gp(e);
		return await n(), t;
	}
	async function d(e) {
		let t = await _p(e);
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
}), Cp = () => hs("/products"), wp = (e) => gs("/products", { data: e }), Tp = (e, t) => _s(`/products/${e}`, { data: t }), Ep = (e) => ys(`/products/${e}`), Dp = sn("product", () => {
	let e = X([]), t = X(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await Cp();
		} finally {
			t.value = !1;
		}
	}
	async function r(t) {
		let n = await wp(t);
		return e.value.push(n), e.value.sort((e, t) => e.name.localeCompare(t.name)), n;
	}
	async function i(t, n) {
		let r = await Tp(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), e.value.sort((e, t) => e.name.localeCompare(t.name)), r;
	}
	async function a(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Ep(t);
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
}), Op = () => hs("/text-snippets"), kp = (e) => gs("/text-snippets", { data: e }), Ap = (e, t) => _s(`/text-snippets/${e}`, { data: t }), jp = (e) => ys(`/text-snippets/${e}`);
//#endregion
//#region src/stores/textSnippetStore.ts
function Mp(e) {
	e.sort((e, t) => e.docType.localeCompare(t.docType) || e.slot.localeCompare(t.slot) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
}
var Np = sn("textSnippet", () => {
	let e = X([]), t = X(!1), n = X(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Op(), n.value = !0;
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
		let n = await kp(t);
		return e.value.push(n), a(n), Mp(e.value), n;
	}
	async function s(t, n) {
		let r = await Ap(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), a(r), Mp(e.value), r;
	}
	async function c(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await jp(t);
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
}), Pp = () => hs("/me/contact"), Fp = (e) => vs("/me/contact", { data: e }), Ip = { class: "rw-view" }, Lp = { class: "rw-editor-head" }, Rp = {
	key: 0,
	class: "rw-status-group"
}, zp = { class: "rw-status-tag" }, Bp = {
	key: 0,
	class: "rw-pill"
}, Vp = {
	key: 1,
	class: "rw-pill"
}, Hp = ["title"], Up = { class: "rw-section" }, Wp = { class: "rw-form-row" }, Gp = { class: "rw-field invoice-no" }, Kp = ["value"], qp = { class: "rw-field" }, Jp = ["readonly"], Yp = { class: "rw-field" }, Xp = ["readonly"], Zp = { class: "rw-hint" }, Qp = { class: "more" }, $p = { class: "rw-form-row" }, em = { class: "rw-field" }, tm = ["readonly"], nm = { class: "rw-field" }, rm = ["readonly"], im = {
	key: 0,
	class: "rw-field"
}, am = ["readonly", "placeholder"], om = {
	key: 1,
	class: "rw-field",
	"aria-hidden": "true"
}, sm = { class: "rw-form-row" }, cm = { class: "rw-field" }, lm = ["readonly"], um = { class: "rw-field" }, dm = ["readonly"], fm = { class: "rw-section" }, pm = {
	key: 0,
	class: "rw-form-row"
}, mm = { class: "rw-field" }, hm = { class: "rw-hint" }, gm = { class: "rw-form-row" }, _m = { class: "rw-field" }, vm = ["value"], ym = { class: "rw-field" }, bm = ["readonly"], xm = { class: "rw-form-row" }, Sm = { class: "rw-field" }, Cm = ["readonly"], wm = { class: "rw-hint" }, Tm = { class: "rw-form-row" }, Em = { class: "rw-field" }, Dm = ["readonly"], Om = { class: "rw-field rw-field--narrow" }, km = ["readonly"], Am = { class: "rw-field" }, jm = ["readonly"], Mm = { class: "rw-field rw-field--country" }, Nm = { class: "rw-form-row" }, Pm = { class: "rw-field" }, Fm = ["readonly"], Im = { class: "rw-field" }, Lm = ["readonly"], Rm = { class: "rw-field" }, zm = ["readonly"], Bm = { class: "rw-section" }, Vm = { class: "rw-form-row" }, Hm = { class: "rw-field" }, Um = ["readonly"], Wm = { class: "rw-field" }, Gm = ["readonly"], Km = { class: "rw-field" }, qm = ["readonly"], Jm = { class: "rw-hint" }, Ym = { class: "rw-section" }, Xm = { class: "rw-section-head" }, Zm = { class: "rw-field" }, Qm = ["readonly", "placeholder"], $m = { class: "rw-section" }, eh = { class: "rw-section" }, th = { class: "rw-form-row" }, nh = { class: "rw-field" }, rh = ["disabled"], ih = { value: "" }, ah = { value: "reverse_charge" }, oh = { value: "intra_community" }, sh = { value: "export" }, ch = { class: "rw-totals" }, lh = { class: "rw-kpi-card" }, uh = { class: "rw-kpi-row" }, dh = { class: "rw-kpi-row rw-kpi-row--grand" }, fh = {
	key: 4,
	class: "rw-section"
}, ph = { class: "rw-form-row" }, mh = { class: "rw-field payterm-days" }, hh = ["readonly"], gh = { class: "rw-field" }, _h = ["value"], vh = { class: "rw-field" }, yh = ["readonly", "placeholder"], bh = {
	key: 5,
	class: "rw-section"
}, xh = { class: "rw-form-row" }, Sh = { class: "rw-field payterm-days" }, Ch = ["readonly"], wh = { class: "rw-field rw-checkbox-field" }, Th = { class: "rw-checkbox-row" }, Eh = ["disabled"], Dh = { class: "rw-hint" }, Oh = { class: "rw-section" }, kh = { class: "rw-section-head" }, Ah = { class: "rw-field" }, jh = ["readonly", "placeholder"], Mh = {
	key: 6,
	class: "rw-section"
}, Nh = [
	"onUpdate:modelValue",
	"readonly",
	"aria-label"
], Ph = { class: "rw-hint" }, Fh = { class: "rw-action-bar" }, Ih = ["src", "title"], Lh = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "InvoiceEditorView",
	props: { id: {} },
	setup(e) {
		let t = e, n = Me(), r = Ae(), i = Wl(), a = Sp(), o = Dp(), c = $l(), l = Np(), d = W(() => typeof n.name == "string" && n.name.startsWith("quote")), f = W(() => d.value ? a : i), m = W(() => d.value ? "quote" : "invoice"), h = W(() => l.forSlot(m.value, "opening")), _ = W(() => l.forSlot(m.value, "closing"));
		function v(e) {
			N.greeting = e.content ?? "";
		}
		function te(e) {
			N.extraText = e.content ?? "";
		}
		let ne = W(() => d.value ? "quotes" : "invoices"), y = W(() => d.value ? "quote-detail" : "invoice-detail"), b = X(null), x = X([_f()]), S = X([]), C = X(""), w = X(""), T = X(!1), E = X(!1), D = X(!1), oe = X(!1), se = X(""), k = X(null), ce = () => ({
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
			if (b.value?.dueDate) return t(b.value.dueDate).toLocaleDateString();
			let n = b.value?.issueDate ? t(b.value.issueDate) : /* @__PURE__ */ new Date();
			return n.setDate(n.getDate() + e), n.toLocaleDateString();
		}), I = W(() => b.value !== null && b.value.status !== "draft"), de = {
			draft: Dc,
			committed: _o,
			cancelled: Pc
		}, fe = {
			pending: Jc,
			confirmed: Vc,
			unknown: tl,
			failed: Pc
		}, pe = (e) => de[e] ?? Dc, me = (e) => fe[e] ?? tl, he = W(() => b.value ? d.value && b.value.quoteStatus ? A("rechnungswerk", cu[b.value.quoteStatus] ?? b.value.status) : A("rechnungswerk", ou[b.value.status]) : ""), ge = W(() => b.value ? A("rechnungswerk", su[b.value.invoiceType]) : ""), _e = W(() => {
			let e = {
				pending: A("rechnungswerk", "DATEV: gesendet"),
				confirmed: A("rechnungswerk", "DATEV: bestätigt"),
				failed: A("rechnungswerk", "DATEV: abgelehnt"),
				unknown: A("rechnungswerk", "DATEV: Antwort prüfen")
			}, t = b.value?.datevStatus;
			return t ? e[t] ?? "" : "";
		}), ve = W(() => b.value ? b.value.relatedNumber ? A("rechnungswerk", "{type} zu Rechnung {number}", {
			type: ge.value,
			number: b.value.relatedNumber
		}) : ge.value : ""), ye = W(() => {
			if (d.value) return A("rechnungswerk", "Das Angebot erhält eine endgültige Angebotsnummer und ist danach unveränderbar. Fortfahren?");
			let e = A("rechnungswerk", "Die Rechnung erhält eine endgültige Nummer und ist danach unveränderbar. Korrektur nur per Storno. Fortfahren?"), t = c.settings;
			return t?.datevAutoSend && t.datevUploadMail && (e += "\n\n" + A("rechnungswerk", "Beim Festschreiben wird automatisch eine E-Rechnung an DATEV ({mail}) gesendet.", { mail: t.datevUploadMail })), e;
		}), be = W(() => {
			let e = (b.value?.greeting ?? l.defaultContent(m.value, "opening")).trim(), t = (b.value?.extraText ?? l.defaultContent(m.value, "closing")).trim(), n = d.value ? A("rechnungswerk", "anbei erhalten Sie unser Angebot als PDF.") : A("rechnungswerk", "anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).");
			return [e === "" ? n : e, t].filter((e) => e !== "").join("\n\n");
		}), xe = W(() => b.value ? b.value.number ?? A("rechnungswerk", "Entwurf") : d.value ? A("rechnungswerk", "Neues Angebot") : A("rechnungswerk", "Neue Rechnung")), B = W(() => xf(x.value.map((e) => ({
			taxRateBp: e.taxRateBp,
			lineTotalCents: bf(e.quantity, gu(e.priceInput))
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
					let n = b.value !== null && b.value.invoiceType === "quote" !== d.value;
					(b.value?.id !== Number(e) || n) && (Ce(), await Te(Number(e), t));
				}
			} catch (e) {
				Qe(e, A("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function Ce() {
			b.value = null, x.value = [_f()], S.value = [], C.value = "", w.value = "", D.value = !1, oe.value = !1, se.value = "", k.value = null, Object.assign(N, ce());
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
				n = await Pp();
			} catch {}
			e === Se && (N.sellerContactPerson = n.person || (t?.contactPerson ?? ""), N.sellerContactPhone = n.phone || (t?.contactPhone ?? ""), N.sellerContactEmail = n.email || (t?.contactEmail ?? ""));
		}
		async function Te(e, t = Se) {
			let n = await f.value.get(e);
			t === Se && (b.value = n, N.customerId = n.customerId ?? null, N.recipientName = n.recipientName ?? "", N.recipientEmail = n.recipientEmail ?? "", N.recipientAddressAddition = n.recipientAddressAddition ?? "", N.recipientAddress = n.recipientAddress ?? "", N.recipientPostalCode = n.recipientPostalCode ?? "", N.recipientCity = n.recipientCity ?? "", N.recipientCountry = n.recipientCountry ?? "DE", N.recipientVatId = n.recipientVatId ?? "", N.recipientContactId = n.recipientContactId ?? "", N.recipientContactPerson = n.recipientContactPerson ?? "", N.recipientPhone = n.recipientPhone ?? "", N.sellerContactPerson = n.sellerContactPerson ?? "", N.sellerContactPhone = n.sellerContactPhone ?? "", N.sellerContactEmail = n.sellerContactEmail ?? "", N.performancePeriodStart = n.performancePeriodStart ?? n.performanceDate ?? "", N.performancePeriodEnd = n.performancePeriodEnd ?? "", N.referenceNumber = n.referenceNumber ?? "", N.orderNumber = n.orderNumber ?? "", N.buyerReference = n.buyerReference ?? "", N.contractNumber = n.contractNumber ?? "", N.projectReference = n.projectReference ?? "", S.value = [...n.notes ?? []], N.specialTaxCase = n.specialTaxCase ?? "", N.greeting = n.greeting ?? "", N.extraText = n.extraText ?? "", N.paymentTermDays = n.paymentTermDays ?? "", N.discountTerms = n.discountTerms ?? "", N.validUntil = n.validUntil ?? "", N.offerFreeform = n.offerFreeform ?? !1, x.value = n.items.length > 0 ? n.items.map(yf) : [_f()]);
		}
		function Ee() {
			S.value.push("");
		}
		function De(e) {
			S.value.splice(e, 1);
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
				notes: S.value.map((e) => e.trim()).filter((e) => e !== ""),
				items: x.value.filter((e) => e.name.trim() !== "").map((e) => ({
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
			C.value = "", T.value = !0;
			try {
				let e;
				return b.value ? e = await f.value.update(b.value.id, je()) : (e = await f.value.create(je()), r.replace({
					name: y.value,
					params: { id: String(e.id) }
				})), b.value = e, e;
			} catch (e) {
				return Qe(e, A("rechnungswerk", "Speichern fehlgeschlagen")), null;
			} finally {
				T.value = !1;
			}
		}
		async function Pe() {
			let e = await Ne();
			e && (se.value = d.value ? yp(e.id) : Vl(e.id), oe.value = !0);
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
		let Be = W(() => d.value && b.value?.status === "committed" && !["converted", "superseded"].includes(b.value?.quoteStatus ?? "")), Ve = W(() => d.value && b.value?.status === "committed" && [
			"open",
			"expired",
			"accepted"
		].includes(b.value?.quoteStatus ?? "")), He = W(() => d.value && b.value?.status === "committed" && ["open", "expired"].includes(b.value?.quoteStatus ?? ""));
		function Ue() {
			b.value && (d.value ? bp(b.value.id) : Hl(b.value.id));
		}
		async function We() {
			k.value = null;
			let e = await Ne();
			if (e) {
				T.value = !0;
				try {
					let t = await f.value.commit(e.id);
					if (b.value = t, w.value = "", d.value) w.value = A("rechnungswerk", "Angebot festgeschrieben.");
					else {
						let e = t.datevMailSent;
						e === !0 ? w.value = A("rechnungswerk", "Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.") : e === null && (C.value = A("rechnungswerk", "Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
					}
				} catch (e) {
					Qe(e, A("rechnungswerk", "Festschreiben fehlgeschlagen"));
				} finally {
					T.value = !1;
				}
			}
		}
		async function Ge() {
			if (b.value) {
				T.value = !0, C.value = "";
				try {
					b.value = await a.accept(b.value.id), w.value = A("rechnungswerk", "Angebot als angenommen markiert.");
				} catch (e) {
					Qe(e, A("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					T.value = !1;
				}
			}
		}
		async function Ke() {
			if (b.value) {
				T.value = !0, C.value = "";
				try {
					b.value = await a.reject(b.value.id), w.value = A("rechnungswerk", "Angebot als abgelehnt markiert.");
				} catch (e) {
					Qe(e, A("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					T.value = !1;
				}
			}
		}
		async function qe() {
			if (k.value = null, b.value) {
				T.value = !0, C.value = "";
				try {
					let e = await a.convert(b.value.id);
					r.push({
						name: "invoice-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					Qe(e, A("rechnungswerk", "Übernahme fehlgeschlagen"));
				} finally {
					T.value = !1;
				}
			}
		}
		async function Je() {
			if (k.value = null, b.value) {
				T.value = !0, C.value = "";
				try {
					let e = await a.revise(b.value.id);
					r.push({
						name: "quote-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					Qe(e, A("rechnungswerk", "Revidieren fehlgeschlagen"));
				} finally {
					T.value = !1;
				}
			}
		}
		async function Ye(e) {
			if (b.value) {
				E.value = !0, C.value = "";
				try {
					d.value ? (await xp(b.value.id, e), D.value = !1, w.value = A("rechnungswerk", "Angebot an {to} gesendet.", { to: e.to })) : (await Ul(b.value.id, e), D.value = !1, w.value = A("rechnungswerk", "Rechnung an {to} gesendet.", { to: e.to }));
				} catch (e) {
					Qe(e, A("rechnungswerk", "Versand fehlgeschlagen"));
				} finally {
					E.value = !1;
				}
			}
		}
		async function Xe() {
			if (k.value = null, !b.value) {
				Q();
				return;
			}
			T.value = !0;
			try {
				await f.value.remove(b.value.id), Q();
			} catch (e) {
				Qe(e, A("rechnungswerk", "Löschen fehlgeschlagen"));
			} finally {
				T.value = !1;
			}
		}
		async function Ze() {
			if (k.value = null, b.value) {
				T.value = !0;
				try {
					let e = await i.cancel(b.value.id), t = e.datevMailSent;
					await Te(e.id), w.value = "", t === !0 ? w.value = A("rechnungswerk", "Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.") : t === null && (C.value = A("rechnungswerk", "Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
				} catch (e) {
					Qe(e, A("rechnungswerk", "Stornieren fehlgeschlagen"));
				} finally {
					T.value = !1;
				}
			}
		}
		function Q() {
			r.push({ name: ne.value });
		}
		function Qe(e, t) {
			C.value = e.message ?? t, console.error("[rechnungswerk] editor:", e);
		}
		return (e, t) => {
			let n = ie("tooltip");
			return g(), K("div", Ip, [
				Y("div", Lp, [H(U(Et), null, {
					default: j(() => [H(U(wt), {
						name: d.value ? U(A)("rechnungswerk", "Angebote") : U(A)("rechnungswerk", "Rechnungen"),
						to: { name: ne.value }
					}, null, 8, ["name", "to"]), H(U(wt), { name: xe.value }, null, 8, ["name"])]),
					_: 1
				}), b.value ? (g(), K("span", Rp, [
					Y("span", zp, [(g(), V(ae(pe(b.value.status)), {
						size: 18,
						class: Z(["rw-sicon", `rw-sicon--${b.value.status}`])
					}, null, 8, ["class"])), z(" " + q(he.value), 1)]),
					!d.value && b.value.invoiceType !== "invoice" ? P((g(), K("span", Bp, [z(q(ge.value), 1)])), [[n, ve.value]]) : R("", !0),
					d.value && b.value.relatedQuoteNumber ? (g(), K("span", Vp, q(U(A)("rechnungswerk", "Revision von {number}", { number: b.value.relatedQuoteNumber })), 1)) : R("", !0),
					b.value.datevStatus && _e.value ? (g(), K("span", {
						key: 2,
						class: "rw-status-tag",
						title: U(A)("rechnungswerk", "DATEV-Übergabe")
					}, [(g(), V(ae(me(b.value.datevStatus)), {
						size: 18,
						class: Z(["rw-sicon", `rw-sicon--datev-${b.value.datevStatus}`])
					}, null, 8, ["class"])), z(" " + q(_e.value), 1)], 8, Hp)) : R("", !0)
				])) : R("", !0)]),
				C.value ? (g(), V(U(pt), {
					key: 0,
					type: "error",
					text: C.value
				}, null, 8, ["text"])) : R("", !0),
				w.value ? (g(), V(U(pt), {
					key: 1,
					type: "success",
					text: w.value
				}, null, 8, ["text"])) : R("", !0),
				I.value ? (g(), V(U(pt), {
					key: 2,
					type: "info",
					text: d.value ? U(A)("rechnungswerk", "Dieses Angebot ist festgeschrieben und kann nicht mehr geändert werden.") : U(A)("rechnungswerk", "Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.")
				}, null, 8, ["text"])) : R("", !0),
				!d.value && b.value?.documentBackfilled ? (g(), V(U(pt), {
					key: 3,
					type: "info",
					text: U(A)("rechnungswerk", "Dieser Beleg wurde nicht beim Festschreiben abgelegt, sondern später aus dem Datensatz erzeugt. Beträge, Positionen und Steuerausweis stimmen; Firmendaten und Layout entsprechen dem heutigen Stand, nicht dem von damals.")
				}, null, 8, ["text"])) : R("", !0),
				Y("section", Up, [
					Y("h3", null, q(d.value ? U(A)("rechnungswerk", "Angebotsdaten") : U(A)("rechnungswerk", "Rechnungsdaten")), 1),
					Y("div", Wp, [
						Y("label", Gp, [Y("span", null, q(d.value ? U(A)("rechnungswerk", "Angebotsnummer") : U(A)("rechnungswerk", "Rechnungsnummer")), 1), Y("input", {
							class: "rw-input",
							type: "text",
							readonly: "",
							value: b.value?.number ?? U(A)("rechnungswerk", "(wird vergeben)")
						}, null, 8, Kp)]),
						Y("label", qp, [Y("span", null, q(d.value ? U(A)("rechnungswerk", "Geplanter Leistungszeitraum (optional)") : U(A)("rechnungswerk", "Leistungsdatum /-zeitraum")), 1), P(Y("input", {
							"onUpdate:modelValue": t[0] ||= (e) => N.performancePeriodStart = e,
							class: "rw-input",
							type: "date",
							readonly: I.value
						}, null, 8, Jp), [[J, N.performancePeriodStart]])]),
						Y("label", Yp, [Y("span", null, q(U(A)("rechnungswerk", "bis (optional)")), 1), P(Y("input", {
							"onUpdate:modelValue": t[1] ||= (e) => N.performancePeriodEnd = e,
							class: "rw-input",
							type: "date",
							readonly: I.value
						}, null, 8, Xp), [[J, N.performancePeriodEnd]])])
					]),
					Y("p", Zp, q(d.value ? U(A)("rechnungswerk", "Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.") : U(A)("rechnungswerk", "Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.")), 1),
					Y("details", Qp, [
						Y("summary", null, q(d.value ? U(A)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)") : U(A)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)")), 1),
						Y("div", $p, [
							Y("label", em, [Y("span", null, q(U(A)("rechnungswerk", "Referenznummer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[2] ||= (e) => N.referenceNumber = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, tm), [[J, N.referenceNumber]])]),
							Y("label", nm, [Y("span", null, q(U(A)("rechnungswerk", "Bestellnummer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[3] ||= (e) => N.orderNumber = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, rm), [[J, N.orderNumber]])]),
							d.value ? (g(), K("span", om)) : (g(), K("label", im, [Y("span", null, q(U(A)("rechnungswerk", "Käuferreferenz / Leitweg-ID (BT-10)")), 1), P(Y("input", {
								"onUpdate:modelValue": t[4] ||= (e) => N.buyerReference = e,
								class: "rw-input",
								type: "text",
								readonly: I.value,
								placeholder: U(A)("rechnungswerk", "nur für öffentliche Auftraggeber")
							}, null, 8, am), [[J, N.buyerReference]])]))
						]),
						Y("div", sm, [
							Y("label", cm, [Y("span", null, q(U(A)("rechnungswerk", "Vertragsnummer (BT-12)")), 1), P(Y("input", {
								"onUpdate:modelValue": t[5] ||= (e) => N.contractNumber = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, lm), [[J, N.contractNumber]])]),
							Y("label", um, [Y("span", null, q(U(A)("rechnungswerk", "Objekt-/Projektkennung (BT-18)")), 1), P(Y("input", {
								"onUpdate:modelValue": t[6] ||= (e) => N.projectReference = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, dm), [[J, N.projectReference]])]),
							t[36] ||= Y("span", {
								class: "rw-field",
								"aria-hidden": "true"
							}, null, -1)
						])
					])
				]),
				Y("section", fm, [
					Y("h3", null, q(U(A)("rechnungswerk", "Empfänger")), 1),
					I.value ? R("", !0) : (g(), K("div", pm, [Y("label", mm, [
						Y("span", null, q(U(A)("rechnungswerk", "Kunde übernehmen")), 1),
						H(cf, { onSelect: Oe }),
						Y("span", hm, q(U(A)("rechnungswerk", "Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.")), 1)
					])])),
					Y("div", gm, [Y("label", _m, [Y("span", null, q(U(A)("rechnungswerk", "Name")), 1), I.value ? (g(), K("input", {
						key: 1,
						class: "rw-input",
						type: "text",
						readonly: "",
						value: N.recipientName
					}, null, 8, vm)) : (g(), V(Wd, {
						key: 0,
						modelValue: N.recipientName,
						"onUpdate:modelValue": t[7] ||= (e) => N.recipientName = e,
						onSelect: ke
					}, null, 8, ["modelValue"]))]), Y("label", ym, [Y("span", null, q(U(A)("rechnungswerk", "E-Mail")), 1), P(Y("input", {
						"onUpdate:modelValue": t[8] ||= (e) => N.recipientEmail = e,
						class: "rw-input",
						type: "email",
						readonly: I.value
					}, null, 8, bm), [[J, N.recipientEmail]])])]),
					Y("div", xm, [Y("label", Sm, [
						Y("span", null, q(U(A)("rechnungswerk", "Adresszusatz")), 1),
						P(Y("input", {
							"onUpdate:modelValue": t[9] ||= (e) => N.recipientAddressAddition = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Cm), [[J, N.recipientAddressAddition]]),
						Y("span", wm, q(U(A)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					])]),
					Y("div", Tm, [
						Y("label", Em, [Y("span", null, q(U(A)("rechnungswerk", "Straße")), 1), P(Y("input", {
							"onUpdate:modelValue": t[10] ||= (e) => N.recipientAddress = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Dm), [[J, N.recipientAddress]])]),
						Y("label", Om, [Y("span", null, q(U(A)("rechnungswerk", "PLZ")), 1), P(Y("input", {
							"onUpdate:modelValue": t[11] ||= (e) => N.recipientPostalCode = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, km), [[J, N.recipientPostalCode]])]),
						Y("label", Am, [Y("span", null, q(U(A)("rechnungswerk", "Ort")), 1), P(Y("input", {
							"onUpdate:modelValue": t[12] ||= (e) => N.recipientCity = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, jm), [[J, N.recipientCity]])]),
						Y("label", Mm, [Y("span", null, q(U(A)("rechnungswerk", "Land")), 1), H(Xd, {
							modelValue: N.recipientCountry,
							"onUpdate:modelValue": t[13] ||= (e) => N.recipientCountry = e,
							disabled: I.value
						}, null, 8, ["modelValue", "disabled"])])
					]),
					Y("div", Nm, [
						Y("label", Pm, [Y("span", null, q(U(A)("rechnungswerk", "USt-IdNr. (optional)")), 1), P(Y("input", {
							"onUpdate:modelValue": t[14] ||= (e) => N.recipientVatId = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Fm), [[J, N.recipientVatId]])]),
						Y("label", Im, [Y("span", null, q(U(A)("rechnungswerk", "Ansprechpartner (optional)")), 1), P(Y("input", {
							"onUpdate:modelValue": t[15] ||= (e) => N.recipientContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Lm), [[J, N.recipientContactPerson]])]),
						Y("label", Rm, [Y("span", null, q(U(A)("rechnungswerk", "Telefon (optional)")), 1), P(Y("input", {
							"onUpdate:modelValue": t[16] ||= (e) => N.recipientPhone = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, zm), [[J, N.recipientPhone]])])
					])
				]),
				Y("section", Bm, [
					Y("h3", null, q(d.value ? U(A)("rechnungswerk", "Ansprechpartner (für dieses Angebot)") : U(A)("rechnungswerk", "Ansprechpartner (für diese Rechnung)")), 1),
					Y("div", Vm, [
						Y("label", Hm, [Y("span", null, q(U(A)("rechnungswerk", "Name")), 1), P(Y("input", {
							"onUpdate:modelValue": t[17] ||= (e) => N.sellerContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Um), [[J, N.sellerContactPerson]])]),
						Y("label", Wm, [Y("span", null, q(U(A)("rechnungswerk", "Telefon")), 1), P(Y("input", {
							"onUpdate:modelValue": t[18] ||= (e) => N.sellerContactPhone = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Gm), [[J, N.sellerContactPhone]])]),
						Y("label", Km, [Y("span", null, q(U(A)("rechnungswerk", "E-Mail")), 1), P(Y("input", {
							"onUpdate:modelValue": t[19] ||= (e) => N.sellerContactEmail = e,
							class: "rw-input",
							type: "email",
							readonly: I.value
						}, null, 8, qm), [[J, N.sellerContactEmail]])])
					]),
					Y("p", Jm, q(d.value ? U(A)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.") : U(A)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.")), 1)
				]),
				Y("section", Ym, [Y("div", Xm, [Y("h3", null, q(U(A)("rechnungswerk", "Anrede & Einleitung")), 1), !I.value && h.value.length > 0 ? (g(), V(U(ft), {
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
				}, 8, ["menuName"])) : R("", !0)]), Y("label", Zm, [Y("span", null, q(U(A)("rechnungswerk", "Anrede & Einleitung")), 1), P(Y("textarea", {
					"onUpdate:modelValue": t[20] ||= (e) => N.greeting = e,
					class: "rw-input",
					rows: "3",
					readonly: I.value,
					placeholder: U(A)("rechnungswerk", "Anrede und Einleitung – Vorgabe aus den Textbausteinen")
				}, null, 8, Qm), [[J, N.greeting]])])]),
				Y("section", $m, [Y("h3", null, q(U(A)("rechnungswerk", "Positionen")), 1), H(Zf, {
					items: x.value,
					"onUpdate:items": t[21] ||= (e) => x.value = e,
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
				Y("section", eh, [
					Y("h3", null, q(U(A)("rechnungswerk", "Steuer & Summen")), 1),
					Y("div", th, [Y("label", nh, [Y("span", null, q(U(A)("rechnungswerk", "Steuerfall")), 1), P(Y("select", {
						"onUpdate:modelValue": t[22] ||= (e) => N.specialTaxCase = e,
						class: "rw-input",
						disabled: I.value
					}, [
						Y("option", ih, q(U(A)("rechnungswerk", "Regelbesteuerung")), 1),
						Y("option", ah, q(U(A)("rechnungswerk", "Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)")), 1),
						Y("option", oh, q(U(A)("rechnungswerk", "Innergemeinschaftliche Lieferung (steuerfrei)")), 1),
						Y("option", sh, q(U(A)("rechnungswerk", "Ausfuhrlieferung Drittland (steuerfrei)")), 1)
					], 8, rh), [[re, N.specialTaxCase]])]), t[37] ||= Y("span", {
						class: "rw-field",
						"aria-hidden": "true"
					}, null, -1)]),
					N.specialTaxCase === "" ? R("", !0) : (g(), V(U(pt), {
						key: 0,
						type: "info",
						text: U(A)("rechnungswerk", "Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.")
					}, null, 8, ["text"])),
					Y("div", ch, [Y("div", lh, [
						Y("div", uh, [Y("span", null, q(U(A)("rechnungswerk", "Zwischensumme (netto)")), 1), Y("strong", null, q(U(vu)(B.value.subtotalCents)), 1)]),
						(g(!0), K(O, null, u(B.value.taxBreakdown, (e) => (g(), K("div", {
							key: e.rateBp,
							class: "rw-kpi-row rw-kpi-row--muted"
						}, [Y("span", null, q(U(A)("rechnungswerk", "USt {rate}", { rate: U(yu)(e.rateBp) })) + " (" + q(U(vu)(e.netCents)) + ")", 1), Y("span", null, q(U(vu)(e.taxCents)), 1)]))), 128)),
						Y("div", dh, [Y("span", null, q(U(A)("rechnungswerk", "Gesamt (brutto)")), 1), Y("strong", null, q(U(vu)(B.value.totalCents)), 1)])
					])])
				]),
				d.value ? (g(), K("section", bh, [
					Y("h3", null, q(U(A)("rechnungswerk", "Gültigkeit")), 1),
					Y("div", xh, [Y("label", Sh, [Y("span", null, q(U(A)("rechnungswerk", "Gültig bis")), 1), P(Y("input", {
						"onUpdate:modelValue": t[25] ||= (e) => N.validUntil = e,
						class: "rw-input",
						type: "date",
						readonly: I.value
					}, null, 8, Ch), [[J, N.validUntil]])]), Y("label", wh, [Y("span", Th, [P(Y("input", {
						"onUpdate:modelValue": t[26] ||= (e) => N.offerFreeform = e,
						type: "checkbox",
						disabled: I.value
					}, null, 8, Eh), [[ee, N.offerFreeform]]), z(" " + q(U(A)("rechnungswerk", "Freibleibendes Angebot (unverbindlich)")), 1)])])]),
					Y("p", Dh, q(U(A)("rechnungswerk", "„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.")), 1)
				])) : (g(), K("section", fh, [Y("h3", null, q(U(A)("rechnungswerk", "Zahlungsbedingungen")), 1), Y("div", ph, [
					Y("label", mh, [Y("span", null, q(U(A)("rechnungswerk", "Zahlungsziel (Tage)")), 1), P(Y("input", {
						"onUpdate:modelValue": t[23] ||= (e) => N.paymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						readonly: I.value
					}, null, 8, hh), [[J, N.paymentTermDays]])]),
					Y("label", gh, [Y("span", null, q(U(A)("rechnungswerk", "Fällig am")), 1), Y("input", {
						class: "rw-input",
						type: "text",
						readonly: "",
						value: F.value || "—"
					}, null, 8, _h)]),
					Y("label", vh, [Y("span", null, q(U(A)("rechnungswerk", "Skonto")), 1), P(Y("input", {
						"onUpdate:modelValue": t[24] ||= (e) => N.discountTerms = e,
						class: "rw-input",
						type: "text",
						readonly: I.value,
						placeholder: U(A)("rechnungswerk", "z. B. 2 % bei Zahlung bis\xA0…")
					}, null, 8, yh), [[J, N.discountTerms]])])
				])])),
				Y("section", Oh, [Y("div", kh, [Y("h3", null, q(U(A)("rechnungswerk", "Schlusstext")), 1), !I.value && _.value.length > 0 ? (g(), V(U(ft), {
					key: 0,
					menuName: U(A)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: j(() => [H(no, { size: 18 })]),
					default: j(() => [(g(!0), K(O, null, u(_.value, (e) => (g(), V(U(Tt), {
						key: e.id,
						onClick: (t) => te(e)
					}, {
						default: j(() => [z(q(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : R("", !0)]), Y("label", Ah, [Y("span", null, q(U(A)("rechnungswerk", "Schlusstext / Anmerkungen")), 1), P(Y("textarea", {
					"onUpdate:modelValue": t[27] ||= (e) => N.extraText = e,
					class: "rw-input",
					rows: "3",
					readonly: I.value,
					placeholder: U(A)("rechnungswerk", "Schlusstext – Vorgabe aus den Textbausteinen")
				}, null, 8, jh), [[J, N.extraText]])])]),
				!I.value || S.value.length > 0 ? (g(), K("section", Mh, [
					Y("h3", null, q(d.value ? U(A)("rechnungswerk", "Notizen / Hinweise auf dem Angebot") : U(A)("rechnungswerk", "Notizen / Hinweise auf der Rechnung")), 1),
					(g(!0), K(O, null, u(S.value, (e, t) => (g(), K("div", {
						key: t,
						class: "rw-note-row"
					}, [P(Y("input", {
						"onUpdate:modelValue": (e) => S.value[t] = e,
						class: "rw-input",
						type: "text",
						readonly: I.value,
						"aria-label": U(A)("rechnungswerk", "Notiz {index}", { index: t + 1 })
					}, null, 8, Nh), [[J, S.value[t]]]), I.value ? R("", !0) : (g(), V(U(L), {
						key: 0,
						variant: "tertiary",
						"aria-label": U(A)("rechnungswerk", "Notiz entfernen"),
						onClick: (e) => De(t)
					}, {
						icon: j(() => [H(cd, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"]))]))), 128)),
					I.value ? R("", !0) : (g(), V(U(L), {
						key: 0,
						variant: "tertiary",
						onClick: Ee
					}, {
						icon: j(() => [H(oc, { size: 20 })]),
						default: j(() => [z(" " + q(U(A)("rechnungswerk", "Notiz hinzufügen")), 1)]),
						_: 1
					})),
					Y("p", Ph, q(d.value ? U(A)("rechnungswerk", "Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.") : U(A)("rechnungswerk", "Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.")), 1)
				])) : R("", !0),
				Y("div", Fh, [I.value ? b.value ? (g(), K(O, { key: 1 }, [
					H(U(L), { onClick: Ue }, {
						icon: j(() => [H(pc, { size: 20 })]),
						default: j(() => [z(" " + q(U(A)("rechnungswerk", "PDF herunterladen")), 1)]),
						_: 1
					}),
					H(U(L), {
						variant: d.value ? "secondary" : "primary",
						disabled: E.value,
						onClick: t[29] ||= (e) => D.value = !0
					}, {
						icon: j(() => [H(hd, { size: 20 })]),
						default: j(() => [z(" " + q(U(A)("rechnungswerk", "An Kunde senden")), 1)]),
						_: 1
					}, 8, ["variant", "disabled"]),
					!d.value && b.value.status === "committed" ? (g(), V(U(L), {
						key: 0,
						variant: "error",
						disabled: T.value,
						onClick: Re
					}, {
						default: j(() => [z(q(U(A)("rechnungswerk", "Stornieren")), 1)]),
						_: 1
					}, 8, ["disabled"])) : R("", !0),
					d.value ? (g(), K(O, { key: 1 }, [
						He.value ? (g(), V(U(L), {
							key: 0,
							disabled: T.value,
							onClick: Ge
						}, {
							icon: j(() => [H(Sl, { size: 20 })]),
							default: j(() => [z(" " + q(U(A)("rechnungswerk", "Annehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0),
						He.value ? (g(), V(U(L), {
							key: 1,
							disabled: T.value,
							onClick: Ke
						}, {
							icon: j(() => [H(kl, { size: 20 })]),
							default: j(() => [z(" " + q(U(A)("rechnungswerk", "Ablehnen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0),
						Be.value ? (g(), V(U(L), {
							key: 2,
							disabled: T.value,
							onClick: G
						}, {
							icon: j(() => [H(Id, { size: 20 })]),
							default: j(() => [z(" " + q(U(A)("rechnungswerk", "Revidieren")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0),
						Ve.value ? (g(), V(U(L), {
							key: 3,
							variant: "primary",
							disabled: T.value,
							onClick: ze
						}, {
							icon: j(() => [H(kd, { size: 20 })]),
							default: j(() => [z(" " + q(U(A)("rechnungswerk", "In Rechnung übernehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0)
					], 64)) : R("", !0)
				], 64)) : R("", !0) : (g(), K(O, { key: 0 }, [
					H(U(L), {
						disabled: T.value,
						onClick: t[28] ||= (e) => Ne()
					}, {
						default: j(() => [z(q(U(A)("rechnungswerk", "Speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					H(U(L), {
						disabled: T.value,
						onClick: Pe
					}, {
						icon: j(() => [H(Sd, { size: 20 })]),
						default: j(() => [z(" " + q(U(A)("rechnungswerk", "Vorschau")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					H(U(L), {
						variant: "primary",
						disabled: T.value,
						onClick: Ie
					}, {
						icon: j(() => [H(_o, { size: 20 })]),
						default: j(() => [z(" " + q(U(A)("rechnungswerk", "Festschreiben")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					b.value ? (g(), V(U(L), {
						key: 0,
						variant: "error",
						disabled: T.value,
						onClick: Le
					}, {
						default: j(() => [z(q(U(A)("rechnungswerk", "Löschen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : R("", !0)
				], 64))]),
				H(ep, {
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
				H(ep, {
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
				H(ep, {
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
				H(ep, {
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
				H(ep, {
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
				H(sp, {
					open: D.value,
					invoice: b.value,
					defaultBody: be.value,
					saving: E.value,
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
					}, null, 8, Ih)) : R("", !0)]),
					_: 1
				}, 8, ["open", "name"])
			]);
		};
	}
}), [["__scopeId", "data-v-45e1203d"]]), Rh = { class: "membership-fees" }, zh = { class: "page-header" }, Bh = { class: "title-row" }, Vh = {
	key: 1,
	class: "status-badge status-badge--new"
}, Hh = {
	key: 0,
	class: "loading"
}, Uh = { class: "card" }, Wh = { class: "selector-grid" }, Gh = { class: "field" }, Kh = { class: "field-with-button" }, qh = { class: "field" }, Jh = ["disabled"], Yh = {
	key: 0,
	class: "locked-info"
}, Xh = {
	key: 1,
	class: "new-info"
}, Zh = { class: "card" }, Qh = { class: "form-grid" }, $h = { class: "field field--wide" }, eg = ["disabled"], tg = { class: "field" }, ng = ["disabled"], rg = { class: "field" }, ig = ["disabled"], ag = { class: "field" }, og = ["disabled"], sg = { class: "field" }, cg = ["disabled"], lg = { class: "field" }, ug = ["disabled"], dg = { class: "card" }, fg = { class: "section-header" }, pg = { class: "table-wrapper" }, mg = { class: "config-table" }, hg = {
	key: 0,
	class: "action-column"
}, gg = ["onUpdate:modelValue", "disabled"], _g = { class: "money-input" }, vg = ["onUpdate:modelValue", "disabled"], yg = {
	key: 0,
	class: "action-column"
}, bg = ["onClick"], xg = { key: 0 }, Sg = { class: "card" }, Cg = { class: "section-header" }, wg = { class: "table-wrapper" }, Tg = { class: "config-table" }, Eg = {
	key: 0,
	class: "action-column"
}, Dg = ["onUpdate:modelValue", "disabled"], Og = ["onUpdate:modelValue", "disabled"], kg = { class: "percent-input" }, Ag = ["onUpdate:modelValue", "disabled"], jg = {
	key: 0,
	class: "action-column"
}, Mg = ["onClick"], Ng = { key: 0 }, Pg = {
	key: 1,
	class: "card actions-card"
}, Fg = { class: "actions" }, Ig = { class: "actions__right" }, Lg = { class: "card" }, Rg = { class: "section-header" }, zg = { key: 0 }, Bg = { key: 1 }, Vg = {
	key: 0,
	class: "preview-loading"
}, Hg = { class: "summary-grid" }, Ug = { class: "summary-box" }, Wg = { class: "summary-box" }, Gg = { class: "summary-box" }, Kg = { class: "summary-box" }, qg = {
	key: 0,
	class: "summary-box summary-box--error"
}, Jg = { class: "table-wrapper" }, Yg = { class: "member-table" }, Xg = { class: "member-name" }, Zg = {
	key: 0,
	class: "member-detail"
}, Qg = { class: "amount-cell" }, $g = { colspan: "5" }, e_ = { class: "amount-cell" }, t_ = {
	key: 0,
	class: "create-invoices"
}, n_ = {
	key: 1,
	class: "processing-info"
}, r_ = {
	key: 2,
	class: "empty-preview"
}, i_ = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "MembershipFeesView",
	setup(e) {
		let t = (/* @__PURE__ */ new Date()).getFullYear(), n = X(t), r = X("LHReV"), i = X(null), a = X(null), o = X(`Mitgliedsbeitrag ${t}`), s = X(14), c = X(ve(t)), l = X(""), d = X("EUR"), f = X(0), m = X([]), h = X([]), _ = X(!0), ee = X(!1), v = X(!1), te = X(!1), ne = X(""), y = X("info"), b = W(() => i.value !== null), x = W(() => i.value !== null && i.value.status !== "draft"), S = W(() => x.value || v.value || te.value), C = W(() => _.value || ee.value || v.value || te.value), w = W(() => {
			switch (i.value?.status) {
				case "draft": return "Entwurf";
				case "processing": return "In Bearbeitung";
				case "completed": return "Abgeschlossen";
				default: return "";
			}
		}), ie = W(() => a.value ? a.value.members.reduce((e, t) => t.feeAmount ? e + Ce(t.feeAmount) : e, 0) : 0), T = W(() => we(ie.value, d.value)), E = W(() => {
			if (!a.value) return 0;
			let e = a.value.summary;
			return e.incomplete + e.noFeeGroup + e.multipleFeeGroups + e.noMembershipType + e.noMembershipRule + e.zeroFee + e.profileErrors + e.feeErrors + e.createErrors;
		}), ae = W(() => a.value !== null && a.value.summary.ready > 0 && E.value === 0), D = W(() => i.value?.status === "draft");
		p(async () => {
			ge(), await oe();
		});
		async function oe() {
			if (ke(), !r.value.trim()) {
				je("Bitte eine Vereinsgruppe angeben.");
				return;
			}
			if (!be(n.value)) {
				je("Bitte ein gültiges Beitragsjahr angeben.");
				return;
			}
			_.value = !0, a.value = null;
			try {
				N((await hs(_e(n.value, r.value))).configuration), await se();
			} catch (e) {
				let t = e;
				t.status === 400 || t.status === 404 ? (le(n.value), Me(`Für ${n.value} besteht noch keine Beitragsabrechnung. Du kannst einen neuen Entwurf anlegen.`)) : je(t.message);
			} finally {
				_.value = !1;
			}
		}
		async function se() {
			if (b.value) {
				ee.value = !0;
				try {
					let e = await hs(`/membership-invoices/batch-preview?group=${encodeURIComponent(r.value)}&year=${n.value}`);
					a.value = e.batch, e.batch.run && (i.value = e.batch.run);
				} catch (e) {
					je(e.message);
				} finally {
					ee.value = !1;
				}
			}
		}
		async function k() {
			if (ke(), x.value) {
				je("Diese Beitragsabrechnung ist bereits gesperrt.");
				return;
			}
			let e = he();
			if (e) {
				je(e);
				return;
			}
			v.value = !0;
			try {
				N((await gs("/membership-invoices/configuration", {
					year: n.value,
					group: r.value.trim(),
					groupFees: pe(),
					membershipRules: me(),
					currency: d.value.trim().toUpperCase(),
					invoiceText: o.value.trim(),
					paymentTermDays: s.value,
					taxRateBp: f.value,
					issueDate: c.value || null,
					dueDate: l.value || null
				})).configuration), Ae(`Beitragsabrechnung ${n.value} wurde gespeichert.`), await se();
			} catch (e) {
				je(e.message);
			} finally {
				v.value = !1;
			}
		}
		async function A() {
			if (x.value) return;
			let e = n.value - 1;
			ke();
			try {
				let t = (await hs(_e(e, r.value))).configuration;
				m.value = Object.entries(t.groupFees).map(([e, t]) => ({
					name: e,
					amount: Se(t)
				})), h.value = Object.entries(t.membershipRules).map(([e, t]) => ({
					name: e,
					type: t.type,
					value: t.value
				})), d.value = t.run.currency, s.value = t.run.paymentTermDays, f.value = t.run.taxRateBp, o.value = ye(t.run.invoiceText, e, n.value), c.value = ve(n.value), ge(), Ae(`Beitragswerte aus ${e} wurden übernommen. Bitte prüfen und anschließend speichern.`);
			} catch (t) {
				let n = t;
				je(`Vorjahr ${e} konnte nicht übernommen werden: ` + n.message);
			}
		}
		async function ce() {
			if (a.value && ae.value && window.confirm(`Für ${a.value.summary.ready} Mitglieder werden Beitragsrechnungsentwürfe für ${n.value} erstellt.\n\nDanach wird die Beitragskonfiguration gesperrt.

Es werden noch keine E-Mails versendet und keine Rechnungen endgültig festgeschrieben.

Fortfahren?`)) {
				te.value = !0, ke();
				try {
					let e = await gs("/membership-invoices/batch-create-drafts", {
						group: r.value,
						year: n.value,
						confirm: !0
					});
					a.value = e.batch, i.value = e.batch.run;
					let t = e.batch.summary;
					Ae(`Beitragslauf ${n.value} wurde gestartet. ${t.draftCreated} Rechnungsentwürfe wurden neu erstellt` + (t.alreadyExists > 0 ? `, ${t.alreadyExists} waren bereits vorhanden.` : ".")), await M();
				} catch (e) {
					je(e.message);
				} finally {
					te.value = !1;
				}
			}
		}
		async function M() {
			try {
				N((await hs(_e(n.value, r.value))).configuration), await se();
			} catch {}
		}
		function N(e) {
			i.value = e.run, n.value = e.run.year, r.value = e.run.memberGroup, d.value = e.run.currency, o.value = e.run.invoiceText, s.value = e.run.paymentTermDays, c.value = e.run.issueDate ?? "", l.value = e.run.dueDate ?? "", f.value = e.run.taxRateBp, m.value = Object.entries(e.groupFees).map(([e, t]) => ({
				name: e,
				amount: Se(t)
			})), h.value = Object.entries(e.membershipRules).map(([e, t]) => ({
				name: e,
				type: t.type,
				value: t.value
			}));
		}
		function le(e) {
			i.value = null, a.value = null, o.value = `Mitgliedsbeitrag ${e}`, s.value = 14, c.value = ve(e), d.value = "EUR", f.value = 0, m.value = [], h.value = [], ge();
		}
		function ue() {
			m.value.push({
				name: "",
				amount: "0,00"
			});
		}
		function F(e) {
			m.value.splice(e, 1);
		}
		function I() {
			h.value.push({
				name: "",
				type: "percent",
				value: "100"
			});
		}
		function fe(e) {
			h.value.splice(e, 1);
		}
		function pe() {
			let e = {};
			for (let t of m.value) e[t.name.trim()] = xe(t.amount);
			return e;
		}
		function me() {
			let e = {};
			for (let t of h.value) e[t.name.trim()] = {
				type: t.type,
				value: xe(t.value)
			};
			return e;
		}
		function he() {
			if (!be(n.value)) return "Bitte ein gültiges Beitragsjahr angeben.";
			if (!r.value.trim()) return "Bitte eine Vereinsgruppe angeben.";
			if (!o.value.trim()) return "Bitte einen Rechnungstext angeben.";
			if (!c.value) return "Bitte ein Rechnungsdatum angeben.";
			if (!l.value) return "Bitte ein Fälligkeitsdatum angeben.";
			if (l.value < c.value) return "Das Fälligkeitsdatum darf nicht vor dem Rechnungsdatum liegen.";
			if (!Number.isInteger(s.value) || s.value < 0) return "Das Zahlungsziel ist ungültig.";
			if (m.value.length === 0) return "Mindestens eine Beitragsgruppe ist erforderlich.";
			let e = /* @__PURE__ */ new Set();
			for (let t of m.value) {
				let n = t.name.trim();
				if (!n) return "Eine Beitragsgruppe hat keinen Namen.";
				if (e.has(n)) return `Die Beitragsgruppe "${n}" ist doppelt vorhanden.`;
				if (e.add(n), !B(t.amount)) return `Der Beitrag für "${n}" ist ungültig.`;
			}
			if (h.value.length === 0) return "Mindestens eine Beitragsart ist erforderlich.";
			let t = /* @__PURE__ */ new Set();
			for (let e of h.value) {
				let n = e.name.trim();
				if (!n) return "Eine Beitragsart hat keinen Namen.";
				if (t.has(n)) return `Die Beitragsart "${n}" ist doppelt vorhanden.`;
				if (t.add(n), !B(e.value)) return `Der Wert der Beitragsart "${n}" ist ungültig.`;
			}
			return null;
		}
		function ge() {
			if (!c.value) {
				l.value = "";
				return;
			}
			let e = Number(s.value);
			if (!Number.isFinite(e) || e < 0) return;
			let [t, n, r] = c.value.split("-").map(Number), i = new Date(Date.UTC(t, n - 1, r));
			i.setUTCDate(i.getUTCDate() + Math.trunc(e)), l.value = [
				i.getUTCFullYear(),
				String(i.getUTCMonth() + 1).padStart(2, "0"),
				String(i.getUTCDate()).padStart(2, "0")
			].join("-");
		}
		function _e(e, t) {
			return `/membership-invoices/configuration?group=${encodeURIComponent(t.trim())}&year=${e}`;
		}
		function ve(e) {
			let t = /* @__PURE__ */ new Date();
			return e === t.getFullYear() ? [
				t.getFullYear(),
				String(t.getMonth() + 1).padStart(2, "0"),
				String(t.getDate()).padStart(2, "0")
			].join("-") : `${e}-01-01`;
		}
		function ye(e, t, n) {
			let r = String(t);
			return e.includes(r) ? e.replaceAll(r, String(n)) : `Mitgliedsbeitrag ${n}`;
		}
		function be(e) {
			return Number.isInteger(e) && e >= 2e3 && e <= 2100;
		}
		function xe(e) {
			let t = e.trim().replace(/\s/g, "").replace(",", "."), n = Number(t);
			return Number.isFinite(n) ? n.toFixed(2) : t;
		}
		function B(e) {
			let t = e.trim().replace(/\s/g, "").replace(",", ".");
			return /^\d+(?:\.\d{1,4})?$/.test(t) && Number.isFinite(Number(t));
		}
		function Se(e) {
			return Number(e).toFixed(2).replace(".", ",");
		}
		function Ce(e) {
			let [t = "0", n = ""] = e.replace(",", ".").split("."), r = Number(`${t}${n.padEnd(2, "0").slice(0, 2)}`);
			return Number.isFinite(r) ? r : 0;
		}
		function we(e, t) {
			return new Intl.NumberFormat("de-DE", {
				style: "currency",
				currency: t || "EUR"
			}).format(e / 100);
		}
		function Te(e) {
			return e === null ? "–" : we(Ce(e), d.value);
		}
		function Ee(e) {
			return [e.firstName, e.lastName].filter(Boolean).join(" ").trim() || e.displayName || e.uid;
		}
		function De(e) {
			switch (e.status) {
				case "ready": return "Bereit";
				case "fee_exempt": return "Beitragsfrei";
				case "incomplete": return "Unvollständig";
				case "no_fee_group": return "Keine Beitragsgruppe";
				case "multiple_fee_groups": return "Mehrere Beitragsgruppen";
				case "no_membership_type": return "Keine Beitragsart";
				case "no_membership_rule": return "Keine Beitragsregel";
				case "zero_fee": return "Beitrag 0,00 €";
				case "profile_error": return "Profilfehler";
				case "fee_error": return "Beitragsfehler";
				default: return e.status || "Unbekannt";
			}
		}
		function Oe(e) {
			return !["ready", "fee_exempt"].includes(e.status);
		}
		function ke() {
			ne.value = "";
		}
		function Ae(e) {
			ne.value = e, y.value = "success";
		}
		function je(e) {
			ne.value = e, y.value = "error";
		}
		function Me(e) {
			ne.value = e, y.value = "info";
		}
		return (e, t) => (g(), K("div", Rh, [Y("header", zh, [Y("div", null, [Y("div", Bh, [t[8] ||= Y("h2", null, "Beitragsabrechnung", -1), i.value ? (g(), K("span", {
			key: 0,
			class: Z(["status-badge", `status-badge--${i.value.status}`])
		}, q(w.value), 3)) : (g(), K("span", Vh, " Neues Beitragsjahr "))]), t[9] ||= Y("p", null, " Jahresbeiträge konfigurieren, prüfen und Beitragsrechnungen erstellen. ", -1)])]), _.value ? (g(), K("div", Hh, [H(U(Dt), { size: 44 })])) : (g(), K(O, { key: 1 }, [
			ne.value ? (g(), K("div", {
				key: 0,
				class: Z(["message", `message--${y.value}`])
			}, q(ne.value), 3)) : R("", !0),
			Y("section", Uh, [
				t[14] ||= Y("div", { class: "section-header" }, [Y("div", null, [Y("h3", null, "Jahresabrechnung"), Y("p", null, " Beitragsjahr und Vereinsgruppe auswählen. ")])], -1),
				Y("div", Wh, [Y("label", Gh, [t[11] ||= Y("span", null, "Beitragsjahr", -1), Y("div", Kh, [P(Y("input", {
					"onUpdate:modelValue": t[0] ||= (e) => n.value = e,
					type: "number",
					min: "2000",
					max: "2100",
					onKeyup: de(oe, ["enter"])
				}, null, 544), [[
					J,
					n.value,
					void 0,
					{ number: !0 }
				]]), H(U(L), {
					variant: "secondary",
					disabled: C.value,
					onClick: oe
				}, {
					default: j(() => [...t[10] ||= [z(" Laden ", -1)]]),
					_: 1
				}, 8, ["disabled"])])]), Y("label", qh, [t[12] ||= Y("span", null, "Vereinsgruppe", -1), P(Y("input", {
					"onUpdate:modelValue": t[1] ||= (e) => r.value = e,
					type: "text",
					disabled: C.value,
					onKeyup: de(oe, ["enter"])
				}, null, 40, Jh), [[
					J,
					r.value,
					void 0,
					{ trim: !0 }
				]])])]),
				x.value ? (g(), K("div", Yh, [...t[13] ||= [Y("strong", null, "Diese Beitragsabrechnung ist gesperrt.", -1), z(" Die Rechnungsentwürfe wurden bereits erzeugt. Die Beitragskonfiguration kann deshalb nicht mehr verändert werden. ", -1)]])) : b.value ? R("", !0) : (g(), K("div", Xh, " Für " + q(n.value) + " und die Gruppe " + q(r.value) + " besteht noch keine Beitragsabrechnung. Du kannst jetzt einen neuen Entwurf anlegen. ", 1))
			]),
			Y("section", Zh, [t[22] ||= Y("div", { class: "section-header" }, [Y("div", null, [Y("h3", null, "Rechnungsdaten"), Y("p", null, " Grunddaten für alle Beitragsrechnungen dieses Jahres. ")])], -1), Y("div", Qh, [
				Y("label", $h, [t[15] ||= Y("span", null, "Rechnungstext", -1), P(Y("input", {
					"onUpdate:modelValue": t[2] ||= (e) => o.value = e,
					type: "text",
					disabled: S.value,
					placeholder: "Mitgliedsbeitrag 2026"
				}, null, 8, eg), [[J, o.value]])]),
				Y("label", tg, [t[16] ||= Y("span", null, "Rechnungsdatum", -1), P(Y("input", {
					"onUpdate:modelValue": t[3] ||= (e) => c.value = e,
					type: "date",
					disabled: S.value,
					onChange: ge
				}, null, 40, ng), [[J, c.value]])]),
				Y("label", rg, [t[17] ||= Y("span", null, "Zahlungsziel in Tagen", -1), P(Y("input", {
					"onUpdate:modelValue": t[4] ||= (e) => s.value = e,
					type: "number",
					min: "0",
					max: "365",
					disabled: S.value,
					onChange: ge
				}, null, 40, ig), [[
					J,
					s.value,
					void 0,
					{ number: !0 }
				]])]),
				Y("label", ag, [t[18] ||= Y("span", null, "Fällig am", -1), P(Y("input", {
					"onUpdate:modelValue": t[5] ||= (e) => l.value = e,
					type: "date",
					disabled: S.value
				}, null, 8, og), [[J, l.value]])]),
				Y("label", sg, [t[19] ||= Y("span", null, "Währung", -1), P(Y("input", {
					"onUpdate:modelValue": t[6] ||= (e) => d.value = e,
					type: "text",
					maxlength: "3",
					disabled: S.value
				}, null, 8, cg), [[J, d.value]])]),
				Y("label", lg, [t[21] ||= Y("span", null, "Umsatzsteuer", -1), P(Y("select", {
					"onUpdate:modelValue": t[7] ||= (e) => f.value = e,
					disabled: S.value
				}, [...t[20] ||= [
					Y("option", { value: 0 }, "0 %", -1),
					Y("option", { value: 700 }, "7 %", -1),
					Y("option", { value: 1900 }, "19 %", -1)
				]], 8, ug), [[
					re,
					f.value,
					void 0,
					{ number: !0 }
				]])])
			])]),
			Y("section", dg, [Y("div", fg, [t[24] ||= Y("div", null, [Y("h3", null, "Jahresbeiträge"), Y("p", null, " Grundbeitrag je Nextcloud-Beitragsgruppe. ")], -1), S.value ? R("", !0) : (g(), V(U(L), {
				key: 0,
				variant: "secondary",
				onClick: ue
			}, {
				default: j(() => [...t[23] ||= [z(" + Beitragsgruppe ", -1)]]),
				_: 1
			}))]), Y("div", pg, [Y("table", mg, [Y("thead", null, [Y("tr", null, [
				t[25] ||= Y("th", null, "Beitragsgruppe", -1),
				t[26] ||= Y("th", null, "Jahresbeitrag", -1),
				S.value ? R("", !0) : (g(), K("th", hg))
			])]), Y("tbody", null, [(g(!0), K(O, null, u(m.value, (e, t) => (g(), K("tr", { key: t }, [
				Y("td", null, [P(Y("input", {
					"onUpdate:modelValue": (t) => e.name = t,
					type: "text",
					disabled: S.value,
					placeholder: "z. B. 50nY"
				}, null, 8, gg), [[
					J,
					e.name,
					void 0,
					{ trim: !0 }
				]])]),
				Y("td", null, [Y("div", _g, [P(Y("input", {
					"onUpdate:modelValue": (t) => e.amount = t,
					type: "text",
					inputmode: "decimal",
					disabled: S.value,
					placeholder: "0,00"
				}, null, 8, vg), [[J, e.amount]]), Y("span", null, q(d.value), 1)])]),
				S.value ? R("", !0) : (g(), K("td", yg, [Y("button", {
					type: "button",
					class: "remove-button",
					title: "Beitragsgruppe entfernen",
					onClick: (e) => F(t)
				}, " × ", 8, bg)]))
			]))), 128)), m.value.length === 0 ? (g(), K("tr", xg, [...t[27] ||= [Y("td", {
				colspan: "3",
				class: "empty-row"
			}, " Keine Beitragsgruppen vorhanden. ", -1)]])) : R("", !0)])])])]),
			Y("section", Sg, [Y("div", Cg, [t[29] ||= Y("div", null, [Y("h3", null, "Beitragsarten"), Y("p", null, " Prozentualer Anteil des Grundbeitrags je Mitgliedsart. ")], -1), S.value ? R("", !0) : (g(), V(U(L), {
				key: 0,
				variant: "secondary",
				onClick: I
			}, {
				default: j(() => [...t[28] ||= [z(" + Beitragsart ", -1)]]),
				_: 1
			}))]), Y("div", wg, [Y("table", Tg, [Y("thead", null, [Y("tr", null, [
				t[30] ||= Y("th", null, "Beitragsart", -1),
				t[31] ||= Y("th", null, "Berechnung", -1),
				t[32] ||= Y("th", null, "Wert", -1),
				S.value ? R("", !0) : (g(), K("th", Eg))
			])]), Y("tbody", null, [(g(!0), K(O, null, u(h.value, (e, n) => (g(), K("tr", { key: n }, [
				Y("td", null, [P(Y("input", {
					"onUpdate:modelValue": (t) => e.name = t,
					type: "text",
					disabled: S.value,
					placeholder: "z. B. Vollmitglied"
				}, null, 8, Dg), [[
					J,
					e.name,
					void 0,
					{ trim: !0 }
				]])]),
				Y("td", null, [P(Y("select", {
					"onUpdate:modelValue": (t) => e.type = t,
					disabled: S.value
				}, [...t[33] ||= [Y("option", { value: "percent" }, " Prozent ", -1)]], 8, Og), [[re, e.type]])]),
				Y("td", null, [Y("div", kg, [P(Y("input", {
					"onUpdate:modelValue": (t) => e.value = t,
					type: "text",
					inputmode: "decimal",
					disabled: S.value,
					placeholder: "100"
				}, null, 8, Ag), [[J, e.value]]), t[34] ||= Y("span", null, "%", -1)])]),
				S.value ? R("", !0) : (g(), K("td", jg, [Y("button", {
					type: "button",
					class: "remove-button",
					title: "Beitragsart entfernen",
					onClick: (e) => fe(n)
				}, " × ", 8, Mg)]))
			]))), 128)), h.value.length === 0 ? (g(), K("tr", Ng, [...t[35] ||= [Y("td", {
				colspan: "4",
				class: "empty-row"
			}, " Keine Beitragsarten vorhanden. ", -1)]])) : R("", !0)])])])]),
			x.value ? R("", !0) : (g(), K("section", Pg, [Y("div", Fg, [H(U(L), {
				variant: "secondary",
				disabled: C.value,
				onClick: A
			}, {
				default: j(() => [...t[36] ||= [z(" Vorjahr übernehmen ", -1)]]),
				_: 1
			}, 8, ["disabled"]), Y("div", Ig, [H(U(L), {
				variant: "primary",
				disabled: C.value,
				onClick: k
			}, {
				default: j(() => [z(q(v.value ? "Speichert\xA0…" : "Speichern"), 1)]),
				_: 1
			}, 8, ["disabled"]), H(U(L), {
				variant: "secondary",
				disabled: C.value || !b.value,
				onClick: se
			}, {
				default: j(() => [...t[37] ||= [z(" Vorschau aktualisieren ", -1)]]),
				_: 1
			}, 8, ["disabled"])])])])),
			Y("section", Lg, [Y("div", Rg, [Y("div", null, [t[38] ||= Y("h3", null, "Mitgliedervorschau", -1), a.value ? (g(), K("p", zg, q(a.value.summary.total) + " Mitglieder geprüft, " + q(a.value.summary.ready) + " beitragspflichtige Rechnungen. ", 1)) : (g(), K("p", Bg, " Nach dem Speichern kann die Beitragsberechnung geprüft werden. "))]), b.value ? (g(), V(U(L), {
				key: 0,
				variant: "secondary",
				disabled: C.value,
				onClick: se
			}, {
				default: j(() => [...t[39] ||= [z(" Aktualisieren ", -1)]]),
				_: 1
			}, 8, ["disabled"])) : R("", !0)]), ee.value ? (g(), K("div", Vg, [H(U(Dt), { size: 32 })])) : a.value ? (g(), K(O, { key: 1 }, [
				Y("div", Hg, [
					Y("div", Ug, [t[40] ||= Y("span", null, "Mitglieder", -1), Y("strong", null, q(a.value.summary.total), 1)]),
					Y("div", Wg, [t[41] ||= Y("span", null, "Rechnungsbereit", -1), Y("strong", null, q(a.value.summary.ready), 1)]),
					Y("div", Gg, [t[42] ||= Y("span", null, "Beitragsfrei", -1), Y("strong", null, q(a.value.summary.feeExempt), 1)]),
					Y("div", Kg, [t[43] ||= Y("span", null, "Gesamtbetrag", -1), Y("strong", null, q(T.value), 1)]),
					E.value > 0 ? (g(), K("div", qg, [t[44] ||= Y("span", null, "Fehler", -1), Y("strong", null, q(E.value), 1)])) : R("", !0)
				]),
				Y("div", Jg, [Y("table", Yg, [
					t[46] ||= Y("thead", null, [Y("tr", null, [
						Y("th", null, "Mitglied"),
						Y("th", null, "Nr."),
						Y("th", null, "Beitragsgruppe"),
						Y("th", null, "Beitragsart"),
						Y("th", null, "Grundbeitrag"),
						Y("th", null, "Beitrag"),
						Y("th", null, "Status")
					])], -1),
					Y("tbody", null, [(g(!0), K(O, null, u(a.value.members, (e) => (g(), K("tr", {
						key: e.uid,
						class: Z({ "member-row--error": Oe(e) })
					}, [
						Y("td", null, [Y("div", Xg, [Y("strong", null, q(Ee(e)), 1), Y("small", null, q(e.email || e.uid), 1)])]),
						Y("td", null, q(e.memberNumber || "–"), 1),
						Y("td", null, q(e.feeGroup || "–"), 1),
						Y("td", null, [z(q(e.membershipType || "–") + " ", 1), e.adjustmentValue ? (g(), K("small", Zg, q(e.adjustmentValue) + " % ", 1)) : R("", !0)]),
						Y("td", null, q(Te(e.baseFeeAmount)), 1),
						Y("td", Qg, q(Te(e.feeAmount)), 1),
						Y("td", null, [Y("span", { class: Z(["member-status", `member-status--${e.status}`]) }, q(De(e)), 3)])
					], 2))), 128))]),
					Y("tfoot", null, [Y("tr", null, [
						Y("td", $g, [Y("strong", null, q(a.value.summary.ready) + " Beitragsrechnungen ", 1)]),
						Y("td", e_, [Y("strong", null, q(T.value), 1)]),
						t[45] ||= Y("td", null, null, -1)
					])])
				])]),
				D.value ? (g(), K("div", t_, [Y("div", null, [
					t[47] ||= Y("h4", null, "Beitragsrechnungen erstellen", -1),
					Y("p", null, " Es werden Rechnungsentwürfe für alle rechnungsbereiten Mitglieder erzeugt. Danach wird die Beitragskonfiguration für " + q(n.value) + " gesperrt. ", 1),
					t[48] ||= Y("p", null, [Y("strong", null, " Dabei werden noch keine E-Mails versendet und keine Rechnungen festgeschrieben. ")], -1)
				]), H(U(L), {
					variant: "primary",
					disabled: C.value || !ae.value,
					onClick: ce
				}, {
					default: j(() => [z(q(te.value ? "Erstellt\xA0…" : "Beitragsrechnungen erstellen"), 1)]),
					_: 1
				}, 8, ["disabled"])])) : x.value ? (g(), K("div", n_, [Y("strong", null, " Beitragslauf " + q(n.value) + " wurde bereits gestartet. ", 1), t[49] ||= Y("span", null, " Die Beitragskonfiguration ist deshalb gesperrt. ", -1)])) : R("", !0)
			], 64)) : (g(), K("div", r_, " Noch keine Vorschau geladen. "))])
		], 64))]));
	}
}), [["__scopeId", "data-v-a3d9d7c6"]]), a_ = {
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
}, o_ = ["aria-hidden", "aria-label"], s_ = [
	"fill",
	"width",
	"height"
], c_ = { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" }, l_ = { key: 0 };
function u_(e, t, n, r, i, a) {
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
	}, [Y("path", c_, [n.title ? (g(), K("title", l_, q(n.title), 1)) : R("", !0)])], 8, s_))], 16, o_);
}
var d_ = /*#__PURE__*/ $(a_, [["render", u_]]), f_ = { class: "rw-view" }, p_ = { class: "rw-view__head" }, m_ = { key: 2 }, h_ = { class: "rw-filterbar" }, g_ = ["onClick"], __ = { class: "rw-chip__n" }, v_ = { class: "rw-table-wrap" }, y_ = { class: "rw-table" }, b_ = { class: "num" }, x_ = ["onClick"], S_ = { class: "rw-status-cell" }, C_ = { class: "rw-qstatus-text" }, w_ = { class: "num" }, T_ = { class: "rw-col-actions" }, E_ = { class: "rw-actions" }, D_ = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "QuotesView",
	setup(e) {
		let t = Ae(), n = Sp(), r = X(""), i = [
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
			draft: Dc,
			open: Jc,
			expired: d_,
			accepted: Vc,
			rejected: Pc,
			converted: kd,
			superseded: Id
		}, f = (e) => e ? d[e] ?? Dc : Dc, m = (e) => e ? A("rechnungswerk", cu[e] ?? e) : "";
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
			bp(e);
		}
		async function te(e) {
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
		return (e, t) => (g(), K("div", f_, [
			Y("div", p_, [Y("h2", null, q(U(A)("rechnungswerk", "Angebote")), 1), H(U(L), {
				variant: "primary",
				onClick: _
			}, {
				icon: j(() => [H(oc, { size: 20 })]),
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
			}, 8, ["name", "description"])) : U(n).quotes.length > 0 ? (g(), K("div", m_, [Y("div", h_, [(g(), K(O, null, u(i, (e) => Y("button", {
				key: e.key,
				class: Z(["rw-chip", { "rw-chip--active": a.value === e.key }]),
				onClick: (t) => a.value = e.key
			}, [z(q(U(A)("rechnungswerk", e.label)) + " ", 1), Y("span", __, q(s.value[e.key]), 1)], 10, g_)), 64))]), Y("div", v_, [Y("table", y_, [Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(A)("rechnungswerk", "Status")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Nummer")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Empfänger")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Datum")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Gültig bis")), 1),
				Y("th", b_, q(U(A)("rechnungswerk", "Brutto")), 1),
				t[0] ||= Y("th", { class: "rw-col-actions" }, null, -1)
			])]), Y("tbody", null, [(g(!0), K(O, null, u(c.value, (e) => (g(), K("tr", {
				key: e.id,
				class: Z(["rw-row-clickable", { "rw-row--overdue": e.quoteStatus === "expired" }]),
				onClick: (t) => ee(e.id)
			}, [
				Y("td", null, [Y("span", S_, [(g(), V(ae(f(e.quoteStatus)), {
					size: 20,
					class: Z(["rw-sicon", `rw-qsicon--${e.quoteStatus}`]),
					title: m(e.quoteStatus)
				}, null, 8, ["class", "title"])), Y("span", C_, q(m(e.quoteStatus)), 1)])]),
				Y("td", null, q(e.number ?? U(A)("rechnungswerk", "(Entwurf)")), 1),
				Y("td", null, q(e.recipientName ?? "—"), 1),
				Y("td", null, q(h(e.issueDate ?? e.createdAt)), 1),
				Y("td", null, [Y("span", { class: Z({ "rw-amt-overdue": e.quoteStatus === "expired" }) }, q(h(e.validUntil)), 3)]),
				Y("td", w_, q(U(vu)(e.totalCents)), 1),
				Y("td", T_, [Y("div", E_, [l(e) ? (g(), V(U(L), {
					key: 0,
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "In Rechnung übernehmen"),
					title: U(A)("rechnungswerk", "In Rechnung übernehmen"),
					onClick: F((t) => te(e.id), ["stop"])
				}, {
					icon: j(() => [H(kd, { size: 20 })]),
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
					icon: j(() => [H(pc, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				]))])])
			], 10, x_))), 128))])])])])) : R("", !0)
		]));
	}
}), [["__scopeId", "data-v-62bdd46f"]]), O_ = { class: "product-modal" }, k_ = { class: "field" }, A_ = { class: "field" }, j_ = { class: "field-row" }, M_ = { class: "field" }, N_ = ["value"], P_ = { class: "field" }, F_ = { class: "field" }, I_ = ["value"], L_ = { class: "field" }, R_ = ["placeholder"], z_ = { class: "hint" }, B_ = { class: "actions" }, V_ = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
			fu(o.value) !== null && (o.value = hu(gu(o.value)));
		}
		let l = W(() => n.product ? A("rechnungswerk", "Produkt bearbeiten") : A("rechnungswerk", "Produkt anlegen")), d = W(() => a.name.trim() !== "");
		M(() => n.open, (e) => {
			if (!e) return;
			let t = n.product;
			a.name = t?.name ?? "", a.description = t?.description ?? "", a.defaultUnitCode = t?.defaultUnitCode ?? "C62", a.defaultUnitLabel = t?.defaultUnitLabel ?? "", a.defaultTaxRateBp = t?.defaultTaxRateBp ?? 1900, o.value = hu(t?.defaultPriceE4 ?? 0), et(() => i.value?.focus());
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
			default: j(() => [Y("div", O_, [
				Y("h2", null, q(l.value), 1),
				Y("label", k_, [Y("span", null, q(U(A)("rechnungswerk", "Name")) + " *", 1), P(Y("input", {
					ref_key: "nameInput",
					ref: i,
					"onUpdate:modelValue": n[0] ||= (e) => a.name = e,
					class: "input",
					type: "text"
				}, null, 512), [[J, a.name]])]),
				Y("label", A_, [Y("span", null, q(U(A)("rechnungswerk", "Beschreibung")), 1), P(Y("textarea", {
					"onUpdate:modelValue": n[1] ||= (e) => a.description = e,
					class: "input",
					rows: "2"
				}, null, 512), [[J, a.description]])]),
				Y("div", j_, [
					Y("label", M_, [Y("span", null, q(U(A)("rechnungswerk", "Einheit")), 1), P(Y("select", {
						"onUpdate:modelValue": n[2] ||= (e) => a.defaultUnitCode = e,
						class: "input"
					}, [(g(!0), K(O, null, u(U(eu), (e) => (g(), K("option", {
						key: e,
						value: e
					}, q(U(A)("rechnungswerk", U(tu)[e])), 9, N_))), 128))], 512), [[re, a.defaultUnitCode]])]),
					Y("label", P_, [Y("span", null, q(U(A)("rechnungswerk", "Standard-Preis (€)")), 1), P(Y("input", {
						"onUpdate:modelValue": n[3] ||= (e) => o.value = e,
						class: "input",
						type: "text",
						inputmode: "decimal",
						onBlur: c
					}, null, 544), [[J, o.value]])]),
					Y("label", F_, [Y("span", null, q(U(A)("rechnungswerk", "USt-Satz")), 1), P(Y("select", {
						"onUpdate:modelValue": n[4] ||= (e) => a.defaultTaxRateBp = e,
						class: "input"
					}, [(g(!0), K(O, null, u(U(nu), (e) => (g(), K("option", {
						key: e,
						value: e
					}, q(U(yu)(e)), 9, I_))), 128))], 512), [[
						re,
						a.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])])
				]),
				Y("label", L_, [
					Y("span", null, q(U(A)("rechnungswerk", "Eigene Einheit (optional)")), 1),
					P(Y("input", {
						"onUpdate:modelValue": n[5] ||= (e) => a.defaultUnitLabel = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: U(A)("rechnungswerk", "z. B. Personen, Sitzung")
					}, null, 8, R_), [[J, a.defaultUnitLabel]]),
					Y("span", z_, q(U(A)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF. In der E-Rechnung wird die Einheit generisch (Stück) abgebildet, damit sie gültig bleibt.")), 1)
				]),
				Y("div", B_, [H(U(L), { onClick: n[6] ||= (e) => t.$emit("close") }, {
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
}), [["__scopeId", "data-v-e77e93c0"]]), H_ = { class: "rw-view" }, U_ = { class: "rw-view__head" }, W_ = {
	key: 2,
	class: "rw-table-wrap"
}, G_ = { class: "rw-table" }, K_ = { class: "num" }, q_ = { class: "num" }, J_ = ["onClick"], Y_ = {
	key: 0,
	class: "rw-muted"
}, X_ = { class: "num" }, Z_ = { class: "num" }, Q_ = { class: "rw-col-actions" }, $_ = { class: "rw-actions" }, ev = /* @__PURE__ */ B({
	__name: "ProductsView",
	setup(e) {
		let t = Dp(), n = X(!1), r = X(null), i = X(null), a = X(""), o = (e) => tu[e] ?? e;
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
		return (e, s) => (g(), K("div", H_, [
			Y("div", U_, [Y("h2", null, q(U(A)("rechnungswerk", "Produkte")), 1), H(U(L), {
				variant: "primary",
				onClick: c
			}, {
				icon: j(() => [H(oc, { size: 20 })]),
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
			}, 8, ["name", "description"])) : U(t).products.length > 0 ? (g(), K("div", W_, [Y("table", G_, [Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(A)("rechnungswerk", "Name")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Einheit")), 1),
				Y("th", K_, q(U(A)("rechnungswerk", "Preis")), 1),
				Y("th", q_, q(U(A)("rechnungswerk", "USt")), 1),
				s[2] ||= Y("th", { class: "num" }, null, -1)
			])]), Y("tbody", null, [(g(!0), K(O, null, u(U(t).products, (e) => (g(), K("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => l(e)
			}, [
				Y("td", null, [z(q(e.name) + " ", 1), e.description ? (g(), K("div", Y_, q(e.description), 1)) : R("", !0)]),
				Y("td", null, q(e.defaultUnitLabel || U(A)("rechnungswerk", o(e.defaultUnitCode))), 1),
				Y("td", X_, q(U(_u)(e.defaultPriceE4)), 1),
				Y("td", Z_, q(U(yu)(e.defaultTaxRateBp)), 1),
				Y("td", Q_, [Y("div", $_, [H(U(L), {
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "Löschen"),
					title: U(A)("rechnungswerk", "Löschen"),
					onClick: F((t) => f(e), ["stop"])
				}, {
					icon: j(() => [H(cd, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, J_))), 128))])])])) : R("", !0),
			H(V_, {
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
			H(ep, {
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
}), tv = {
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
}, nv = ["aria-hidden", "aria-label"], rv = [
	"fill",
	"width",
	"height"
], iv = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, av = { key: 0 };
function ov(e, t, n, r, i, a) {
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
	}, [Y("path", iv, [n.title ? (g(), K("title", av, q(n.title), 1)) : R("", !0)])], 8, rv))], 16, nv);
}
var sv = /*#__PURE__*/ $(tv, [["render", ov]]), cv = { class: "snippet-modal" }, lv = { class: "field" }, uv = ["placeholder"], dv = { class: "field-row" }, fv = { class: "field" }, pv = ["value"], mv = { class: "field" }, hv = ["value"], gv = { class: "field" }, _v = { class: "hint" }, vv = { class: "actions" }, yv = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
			default: j(() => [Y("div", cv, [
				Y("h2", null, q(l.value), 1),
				Y("label", lv, [Y("span", null, q(U(A)("rechnungswerk", "Name")) + " *", 1), P(Y("input", {
					ref_key: "nameInput",
					ref: o,
					"onUpdate:modelValue": i[0] ||= (e) => c.label = e,
					class: "input",
					type: "text",
					placeholder: U(A)("rechnungswerk", "z. B. Neukunde, Mahnfreundlich")
				}, null, 8, uv), [[J, c.label]])]),
				Y("div", dv, [Y("label", fv, [Y("span", null, q(U(A)("rechnungswerk", "Dokument")), 1), P(Y("select", {
					"onUpdate:modelValue": i[1] ||= (e) => c.docType = e,
					class: "input"
				}, [(g(), K(O, null, u(n, (e) => Y("option", {
					key: e,
					value: e
				}, q(U(A)("rechnungswerk", U(iu)[e])), 9, pv)), 64))], 512), [[re, c.docType]])]), Y("label", mv, [Y("span", null, q(U(A)("rechnungswerk", "Textbereich")), 1), P(Y("select", {
					"onUpdate:modelValue": i[2] ||= (e) => c.slot = e,
					class: "input"
				}, [(g(), K(O, null, u(r, (e) => Y("option", {
					key: e,
					value: e
				}, q(U(A)("rechnungswerk", U(au)[e])), 9, hv)), 64))], 512), [[re, c.slot]])])]),
				Y("label", gv, [Y("span", null, q(U(A)("rechnungswerk", "Text")), 1), P(Y("textarea", {
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
				Y("p", _v, q(U(A)("rechnungswerk", "Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.")), 1),
				Y("div", vv, [H(U(L), { onClick: i[5] ||= (e) => t.$emit("close") }, {
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
}), [["__scopeId", "data-v-b60fbea6"]]), bv = { class: "rw-view" }, xv = { class: "rw-view__head" }, Sv = { class: "rw-muted rw-intro" }, Cv = {
	key: 2,
	class: "rw-snippet-groups"
}, wv = { class: "rw-snippet-group__head" }, Tv = { class: "rw-table-wrap" }, Ev = { class: "rw-table" }, Dv = ["onClick"], Ov = {
	key: 0,
	class: "rw-muted rw-snippet-content"
}, kv = { class: "rw-snippet-actions" }, Av = { class: "rw-actions" }, jv = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "TextSnippetsView",
	setup(e) {
		let t = Np(), n = ["invoice", "quote"], r = ["opening", "closing"], i = W(() => {
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
		return (e, n) => (g(), K("div", bv, [
			Y("div", xv, [Y("h2", null, q(U(A)("rechnungswerk", "Textbausteine")), 1), H(U(L), {
				variant: "primary",
				onClick: d
			}, {
				icon: j(() => [H(oc, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "Textbaustein anlegen")), 1)]),
				_: 1
			})]),
			Y("p", Sv, q(U(A)("rechnungswerk", "Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.")), 1),
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
			}, 8, ["name", "description"])) : U(t).snippets.length > 0 ? (g(), K("div", Cv, [(g(!0), K(O, null, u(i.value, (e) => (g(), K("section", {
				key: e.key,
				class: "rw-snippet-group"
			}, [Y("h3", wv, [
				z(q(U(A)("rechnungswerk", U(iu)[e.docType])) + " ", 1),
				n[2] ||= Y("span", { class: "rw-snippet-group__sep" }, "–", -1),
				z(" " + q(U(A)("rechnungswerk", U(au)[e.slot])), 1)
			]), Y("div", Tv, [Y("table", Ev, [Y("tbody", null, [(g(!0), K(O, null, u(e.items, (e) => (g(), K("tr", {
				key: e.id,
				class: "rw-row-clickable rw-snippet-row",
				onClick: (t) => f(e)
			}, [Y("td", null, [Y("strong", null, q(e.label), 1), e.content ? (g(), K("div", Ov, q(e.content), 1)) : R("", !0)]), Y("td", kv, [Y("div", Av, [H(U(L), {
				variant: "tertiary",
				"aria-label": e.isDefault ? U(A)("rechnungswerk", "Standard-Vorlage") : U(A)("rechnungswerk", "Als Standard festlegen"),
				title: e.isDefault ? U(A)("rechnungswerk", "Standard-Vorlage") : U(A)("rechnungswerk", "Als Standard festlegen"),
				onClick: F((t) => m(e), ["stop"])
			}, {
				icon: j(() => [e.isDefault ? (g(), V(as, {
					key: 0,
					size: 20,
					class: "rw-star rw-star--active"
				})) : (g(), V(sv, {
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
				icon: j(() => [H(cd, { size: 20 })]),
				_: 1
			}, 8, [
				"aria-label",
				"title",
				"onClick"
			])])])], 8, Dv))), 128))])])])]))), 128))])) : R("", !0),
			H(yv, {
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
			H(ep, {
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
}), [["__scopeId", "data-v-c438c8e2"]]), Mv = {
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
}, Nv = ["aria-hidden", "aria-label"], Pv = [
	"fill",
	"width",
	"height"
], Fv = { d: "M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14" }, Iv = { key: 0 };
function Lv(e, t, n, r, i, a) {
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
	}, [Y("path", Fv, [n.title ? (g(), K("title", Iv, q(n.title), 1)) : R("", !0)])], 8, Pv))], 16, Nv);
}
var Rv = /*#__PURE__*/ $(Mv, [["render", Lv]]), zv = { class: "customer-modal" }, Bv = { class: "form-section" }, Vv = { class: "row" }, Hv = { class: "field" }, Uv = { class: "field" }, Wv = { class: "row" }, Gv = { class: "field" }, Kv = { class: "form-section" }, qv = { class: "field" }, Jv = ["placeholder"], Yv = { class: "hint" }, Xv = { class: "field" }, Zv = { class: "row" }, Qv = { class: "field" }, $v = { class: "field" }, ey = { class: "row" }, ty = { class: "field" }, ny = { class: "form-section" }, ry = { class: "row" }, iy = { class: "field" }, ay = { class: "field" }, oy = { class: "field" }, sy = { class: "form-section" }, cy = { class: "field" }, ly = { class: "row" }, uy = { class: "field" }, dy = { class: "field" }, fy = { class: "field" }, py = { class: "form-section" }, my = { class: "row" }, hy = { class: "field" }, gy = { class: "field" }, _y = { value: "" }, vy = ["value"], yy = { class: "field" }, by = { class: "actions" }, xy = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
			default: j(() => [Y("div", zv, [
				Y("h2", null, q(d.value), 1),
				Y("div", Bv, [
					Y("h3", null, q(U(A)("rechnungswerk", "Stammdaten")), 1),
					Y("div", Vv, [Y("label", Hv, [Y("span", null, q(U(A)("rechnungswerk", "Kundennr.")) + " *", 1), P(Y("input", {
						ref_key: "numberInput",
						ref: i,
						"onUpdate:modelValue": n[0] ||= (e) => o.customerNumber = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.customerNumber]])]), Y("label", Uv, [Y("span", null, q(U(A)("rechnungswerk", "Name / Firma")) + " *", 1), P(Y("input", {
						"onUpdate:modelValue": n[1] ||= (e) => o.name = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.name]])])]),
					f.value ? (g(), V(U(pt), {
						key: 0,
						type: "error",
						text: U(A)("rechnungswerk", "Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.", { number: o.customerNumber.trim() })
					}, null, 8, ["text"])) : R("", !0),
					Y("div", Wv, [Y("label", Gv, [Y("span", null, q(U(A)("rechnungswerk", "USt-IdNr.")), 1), P(Y("input", {
						"onUpdate:modelValue": n[2] ||= (e) => o.vatId = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.vatId]])])])
				]),
				Y("div", Kv, [
					Y("h3", null, q(U(A)("rechnungswerk", "Anschrift")), 1),
					Y("label", qv, [
						Y("span", null, q(U(A)("rechnungswerk", "Adresszusatz")), 1),
						P(Y("input", {
							"onUpdate:modelValue": n[3] ||= (e) => o.addressAddition = e,
							class: "input",
							type: "text",
							placeholder: U(A)("rechnungswerk", "z. Hd. Frau Meyer, Gebäude B, c/o\xA0…")
						}, null, 8, Jv), [[J, o.addressAddition]]),
						Y("span", Yv, q(U(A)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					]),
					Y("label", Xv, [Y("span", null, q(U(A)("rechnungswerk", "Straße & Hausnummer")), 1), P(Y("input", {
						"onUpdate:modelValue": n[4] ||= (e) => o.address = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.address]])]),
					Y("div", Zv, [Y("label", Qv, [Y("span", null, q(U(A)("rechnungswerk", "PLZ")), 1), P(Y("input", {
						"onUpdate:modelValue": n[5] ||= (e) => o.postalCode = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.postalCode]])]), Y("label", $v, [Y("span", null, q(U(A)("rechnungswerk", "Ort")), 1), P(Y("input", {
						"onUpdate:modelValue": n[6] ||= (e) => o.city = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.city]])])]),
					Y("div", ey, [Y("label", ty, [Y("span", null, q(U(A)("rechnungswerk", "Land")), 1), H(Xd, {
						modelValue: o.country,
						"onUpdate:modelValue": n[7] ||= (e) => o.country = e,
						selectClass: "input"
					}, null, 8, ["modelValue"])])])
				]),
				Y("div", ny, [
					Y("h3", null, q(U(A)("rechnungswerk", "Ansprechpartner & Kontakt")), 1),
					Y("div", ry, [Y("label", iy, [Y("span", null, q(U(A)("rechnungswerk", "Ansprechpartner")), 1), P(Y("input", {
						"onUpdate:modelValue": n[8] ||= (e) => o.contactPerson = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.contactPerson]])]), Y("label", ay, [Y("span", null, q(U(A)("rechnungswerk", "Telefon")), 1), P(Y("input", {
						"onUpdate:modelValue": n[9] ||= (e) => o.phone = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.phone]])])]),
					Y("label", oy, [Y("span", null, q(U(A)("rechnungswerk", "E-Mail (für Rechnungsversand)")), 1), P(Y("input", {
						"onUpdate:modelValue": n[10] ||= (e) => o.email = e,
						class: "input",
						type: "email"
					}, null, 512), [[J, o.email]])])
				]),
				Y("div", sy, [
					Y("h3", null, q(U(A)("rechnungswerk", "Bankverbindung")), 1),
					Y("label", cy, [Y("span", null, q(U(A)("rechnungswerk", "Kontoinhaber")), 1), P(Y("input", {
						"onUpdate:modelValue": n[11] ||= (e) => o.bankAccountHolder = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bankAccountHolder]])]),
					Y("div", ly, [Y("label", uy, [Y("span", null, q(U(A)("rechnungswerk", "IBAN")), 1), P(Y("input", {
						"onUpdate:modelValue": n[12] ||= (e) => o.iban = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.iban]])]), Y("label", dy, [Y("span", null, q(U(A)("rechnungswerk", "BIC")), 1), P(Y("input", {
						"onUpdate:modelValue": n[13] ||= (e) => o.bic = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bic]])])]),
					Y("label", fy, [Y("span", null, q(U(A)("rechnungswerk", "Bank")), 1), P(Y("input", {
						"onUpdate:modelValue": n[14] ||= (e) => o.bankName = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bankName]])])
				]),
				Y("div", py, [
					Y("h3", null, q(U(A)("rechnungswerk", "Vorgaben für neue Rechnungen")), 1),
					Y("div", my, [Y("label", hy, [Y("span", null, q(U(A)("rechnungswerk", "Zahlungsziel (Tage)")), 1), P(Y("input", {
						"onUpdate:modelValue": n[15] ||= (e) => c.value = e,
						class: "input",
						type: "number",
						min: "0",
						inputmode: "numeric"
					}, null, 512), [[J, c.value]])]), Y("label", gy, [Y("span", null, q(U(A)("rechnungswerk", "Standard-Steuersatz")), 1), P(Y("select", {
						"onUpdate:modelValue": n[16] ||= (e) => l.value = e,
						class: "input"
					}, [Y("option", _y, q(U(A)("rechnungswerk", "— keine Vorgabe —")), 1), (g(!0), K(O, null, u(U(nu), (e) => (g(), K("option", {
						key: e,
						value: String(e)
					}, q(U(yu)(e)), 9, vy))), 128))], 512), [[re, l.value]])])]),
					Y("label", yy, [Y("span", null, q(U(A)("rechnungswerk", "Notiz (intern, nicht auf der Rechnung)")), 1), P(Y("textarea", {
						"onUpdate:modelValue": n[17] ||= (e) => o.note = e,
						class: "input",
						rows: "2"
					}, null, 512), [[J, o.note]])])
				]),
				Y("div", by, [H(U(L), { onClick: n[18] ||= (e) => t.$emit("close") }, {
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
}), [["__scopeId", "data-v-7914d0dc"]]), Sy = { class: "rw-view" }, Cy = { class: "rw-view__head" }, wy = { class: "rw-view__actions" }, Ty = {
	key: 2,
	class: "rw-table-wrap"
}, Ey = { class: "rw-table" }, Dy = ["onClick"], Oy = { class: "rw-muted" }, ky = {
	key: 0,
	class: "rw-muted"
}, Ay = { class: "rw-col-actions" }, jy = { class: "rw-actions" }, My = { class: "rw-import" }, Ny = { class: "rw-muted" }, Py = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "CustomersView",
	setup(e) {
		let t = tf(), n = X(!1), r = X(null), i = X(null), a = X(null), o = X(!1), s = X(""), c = X(""), l = X(!1), d = W(() => t.customers.filter((e) => e.id !== r.value?.id).map((e) => e.customerNumber.trim().toLowerCase()));
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
		function te(e) {
			a.value = e;
		}
		async function ne() {
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
		return (e, f) => (g(), K("div", Sy, [
			Y("div", Cy, [Y("h2", null, q(U(A)("rechnungswerk", "Kunden")), 1), Y("div", wy, [H(U(L), { onClick: _ }, {
				icon: j(() => [H(Rv, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "Aus Kontakten importieren")), 1)]),
				_: 1
			}), H(U(L), {
				variant: "primary",
				onClick: m
			}, {
				icon: j(() => [H(oc, { size: 20 })]),
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
			}, 8, ["name", "description"])) : U(t).customers.length > 0 ? (g(), K("div", Ty, [Y("table", Ey, [Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(A)("rechnungswerk", "Kundennr.")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Kunde")), 1),
				Y("th", null, q(U(A)("rechnungswerk", "Ort")), 1),
				f[5] ||= Y("th", { class: "num" }, null, -1)
			])]), Y("tbody", null, [(g(!0), K(O, null, u(U(t).customers, (e) => (g(), K("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => h(e)
			}, [
				Y("td", Oy, q(e.customerNumber), 1),
				Y("td", null, [z(q(e.name) + " ", 1), e.contactPerson || e.vatId ? (g(), K("div", ky, q([e.contactPerson, e.vatId].filter(Boolean).join(" · ")), 1)) : R("", !0)]),
				Y("td", null, q([e.postalCode, e.city].filter(Boolean).join(" ")), 1),
				Y("td", Ay, [Y("div", jy, [H(U(L), {
					variant: "tertiary",
					"aria-label": U(A)("rechnungswerk", "Löschen"),
					title: U(A)("rechnungswerk", "Löschen"),
					onClick: F((t) => te(e), ["stop"])
				}, {
					icon: j(() => [H(cd, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, Dy))), 128))])])])) : R("", !0),
			H(xy, {
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
				default: j(() => [Y("div", My, [Y("p", Ny, q(U(A)("rechnungswerk", "Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.")), 1), H(Wd, {
					modelValue: s.value,
					"onUpdate:modelValue": f[1] ||= (e) => s.value = e,
					onSelect: ee
				}, null, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["name"])) : R("", !0),
			H(ep, {
				open: a.value !== null,
				name: U(A)("rechnungswerk", "Kunde löschen"),
				message: a.value ? U(A)("rechnungswerk", "„{name}“ wirklich löschen?", { name: a.value.name }) : "",
				confirmLabel: U(A)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: f[4] ||= (e) => a.value = null,
				onConfirm: ne
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-1eff74a5"]]), Fy = {
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
}, Iy = ["aria-hidden", "aria-label"], Ly = [
	"fill",
	"width",
	"height"
], Ry = { d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" }, zy = { key: 0 };
function By(e, t, n, r, i, a) {
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
	}, [Y("path", Ry, [n.title ? (g(), K("title", zy, q(n.title), 1)) : R("", !0)])], 8, Ly))], 16, Iy);
}
var Vy = /*#__PURE__*/ $(Fy, [["render", By]]), Hy = { class: "rw-view" }, Uy = {
	key: 2,
	class: "rw-section"
}, Wy = { class: "rw-hint" }, Gy = { class: "rw-form-row" }, Ky = { class: "rw-field" }, qy = { class: "rw-field" }, Jy = { class: "rw-field" }, Yy = {
	key: 3,
	class: "rw-action-bar"
}, Xy = /* @__PURE__ */ B({
	__name: "MyContactView",
	setup(e) {
		let t = X(null), n = X(""), r = X(""), i = X(!1);
		p(async () => {
			try {
				t.value = await Pp();
			} catch (e) {
				n.value = e.message ?? A("rechnungswerk", "Laden fehlgeschlagen");
			}
		});
		async function a() {
			n.value = "";
			try {
				let e = await Rd();
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
					t.value = await Fp(t.value), r.value = A("rechnungswerk", "Gespeichert.");
				} catch (e) {
					n.value = e.message ?? A("rechnungswerk", "Speichern fehlgeschlagen");
				} finally {
					i.value = !1;
				}
			}
		}
		return (e, s) => (g(), K("div", Hy, [
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
			t.value ? (g(), K("section", Uy, [
				Y("h3", null, q(U(A)("rechnungswerk", "Mein Verkäufer-Ansprechpartner")), 1),
				Y("p", Wy, q(U(A)("rechnungswerk", "Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.")), 1),
				Y("div", Gy, [
					Y("label", Ky, [Y("span", null, q(U(A)("rechnungswerk", "Name")), 1), P(Y("input", {
						"onUpdate:modelValue": s[0] ||= (e) => t.value.person = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[J, t.value.person]])]),
					Y("label", qy, [Y("span", null, q(U(A)("rechnungswerk", "Telefon")), 1), P(Y("input", {
						"onUpdate:modelValue": s[1] ||= (e) => t.value.phone = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[J, t.value.phone]])]),
					Y("label", Jy, [Y("span", null, q(U(A)("rechnungswerk", "E-Mail")), 1), P(Y("input", {
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
			t.value ? (g(), K("div", Yy, [H(U(L), {
				variant: "primary",
				disabled: i.value,
				onClick: o
			}, {
				icon: j(() => [H(Vy, { size: 20 })]),
				default: j(() => [z(" " + q(U(A)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])) : R("", !0)
		]));
	}
}), Zy = /* @__PURE__ */ n({ default: () => xt });
//#endregion
//#region node_modules/@ckpack/vue-color/libs/style-inject.es-746bb8ed.js
function Qy(e, t) {
	t === void 0 && (t = {});
	var n = t.insertAt;
	if (e && typeof document < "u") {
		var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
		i.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
	}
}
//#endregion
//#region node_modules/@ckpack/vue-color/libs/utils/compoent.js
var $y = function(e, t) {
	let { componentPrefix: n = "" } = t || {};
	e.component(`${n}${this.name}`, this);
}, eb = {}, tb = {
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
		return { "background-image": `url(${rb(this.white, this.grey, this.size)})` };
	} }
};
function nb(e, t, n) {
	if (typeof document > "u") return null;
	let r = document.createElement("canvas");
	r.width = r.height = n * 2;
	let i = r.getContext("2d");
	return i ? (i.fillStyle = e, i.fillRect(0, 0, r.width, r.height), i.fillStyle = t, i.fillRect(0, 0, n, n), i.translate(n, n), i.fillRect(0, 0, n, n), r.toDataURL()) : null;
}
function rb(e, t, n) {
	let r = `${e},${t},${n}`;
	if (eb[r]) return eb[r];
	let i = nb(e, t, n);
	return eb[r] = i, i;
}
function ib(e, t, n, r, i, a) {
	return g(), K("div", {
		class: "vc-checkerboard",
		style: Ee(a.bgStyle)
	}, null, 4);
}
Qy(".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}"), tb.render = ib, tb.__file = "src/components/checkboard/checkboard.vue", tb.install = $y;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/alpha/index.js
var ab = {
	name: "Alpha",
	components: { Checkboard: tb },
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
}, ob = { class: "vc-alpha" }, sb = { class: "vc-alpha-checkboard-wrap" }, cb = [/* @__PURE__ */ Y("div", { class: "vc-alpha-picker" }, null, -1)];
function lb(e, t, n, r, i, a) {
	let o = w("Checkboard");
	return g(), K("div", ob, [
		Y("div", sb, [H(o)]),
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
		}, cb, 4)], 544)
	]);
}
Qy(".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), ab.render = lb, ab.__file = "src/components/alpha/alpha.vue", ab.install = $y;
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/util.js
function ub(e, t) {
	fb(e) && (e = "100%");
	var n = pb(e);
	return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (e = t === 360 ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t)), e);
}
function db(e) {
	return Math.min(1, Math.max(0, e));
}
function fb(e) {
	return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function pb(e) {
	return typeof e == "string" && e.indexOf("%") !== -1;
}
function mb(e) {
	return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function hb(e) {
	return e <= 1 ? `${Number(e) * 100}%` : e;
}
function gb(e) {
	return e.length === 1 ? "0" + e : String(e);
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/conversion.js
function _b(e, t, n) {
	return {
		r: ub(e, 255) * 255,
		g: ub(t, 255) * 255,
		b: ub(n, 255) * 255
	};
}
function vb(e, t, n) {
	e = ub(e, 255), t = ub(t, 255), n = ub(n, 255);
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
function yb(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function bb(e, t, n) {
	var r, i, a;
	if (e = ub(e, 360), t = ub(t, 100), n = ub(n, 100), t === 0) i = n, a = n, r = n;
	else {
		var o = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
		r = yb(s, o, e + 1 / 3), i = yb(s, o, e), a = yb(s, o, e - 1 / 3);
	}
	return {
		r: r * 255,
		g: i * 255,
		b: a * 255
	};
}
function xb(e, t, n) {
	e = ub(e, 255), t = ub(t, 255), n = ub(n, 255);
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
function Sb(e, t, n) {
	e = ub(e, 360) * 6, t = ub(t, 100), n = ub(n, 100);
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
function Cb(e, t, n, r) {
	var i = [
		gb(Math.round(e).toString(16)),
		gb(Math.round(t).toString(16)),
		gb(Math.round(n).toString(16))
	];
	return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function wb(e, t, n, r, i) {
	var a = [
		gb(Math.round(e).toString(16)),
		gb(Math.round(t).toString(16)),
		gb(Math.round(n).toString(16)),
		gb(Tb(r))
	];
	return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Tb(e) {
	return Math.round(parseFloat(e) * 255).toString(16);
}
function Eb(e) {
	return Db(e) / 255;
}
function Db(e) {
	return parseInt(e, 16);
}
function Ob(e) {
	return {
		r: e >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var kb = {
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
function Ab(e) {
	var t = {
		r: 0,
		g: 0,
		b: 0
	}, n = 1, r = null, i = null, a = null, o = !1, s = !1;
	return typeof e == "string" && (e = Fb(e)), typeof e == "object" && (Ib(e.r) && Ib(e.g) && Ib(e.b) ? (t = _b(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ib(e.h) && Ib(e.s) && Ib(e.v) ? (r = hb(e.s), i = hb(e.v), t = Sb(e.h, r, i), o = !0, s = "hsv") : Ib(e.h) && Ib(e.s) && Ib(e.l) && (r = hb(e.s), a = hb(e.l), t = bb(e.h, r, a), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = mb(n), {
		ok: o,
		format: e.format || s,
		r: Math.min(255, Math.max(t.r, 0)),
		g: Math.min(255, Math.max(t.g, 0)),
		b: Math.min(255, Math.max(t.b, 0)),
		a: n
	};
}
var jb = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", Mb = `[\\s|\\(]+(${jb})[,|\\s]+(${jb})[,|\\s]+(${jb})\\s*\\)?`, Nb = `[\\s|\\(]+(${jb})[,|\\s]+(${jb})[,|\\s]+(${jb})[,|\\s]+(${jb})\\s*\\)?`, Pb = {
	CSS_UNIT: new RegExp(jb),
	rgb: RegExp("rgb" + Mb),
	rgba: RegExp("rgba" + Nb),
	hsl: RegExp("hsl" + Mb),
	hsla: RegExp("hsla" + Nb),
	hsv: RegExp("hsv" + Mb),
	hsva: RegExp("hsva" + Nb),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Fb(e) {
	if (e = e.trim().toLowerCase(), e.length === 0) return !1;
	var t = !1;
	if (kb[e]) e = kb[e], t = !0;
	else if (e === "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var n = Pb.rgb.exec(e);
	return n ? {
		r: n[1],
		g: n[2],
		b: n[3]
	} : (n = Pb.rgba.exec(e), n ? {
		r: n[1],
		g: n[2],
		b: n[3],
		a: n[4]
	} : (n = Pb.hsl.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3]
	} : (n = Pb.hsla.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3],
		a: n[4]
	} : (n = Pb.hsv.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3]
	} : (n = Pb.hsva.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3],
		a: n[4]
	} : (n = Pb.hex8.exec(e), n ? {
		r: Db(n[1]),
		g: Db(n[2]),
		b: Db(n[3]),
		a: Eb(n[4]),
		format: t ? "name" : "hex8"
	} : (n = Pb.hex6.exec(e), n ? {
		r: Db(n[1]),
		g: Db(n[2]),
		b: Db(n[3]),
		format: t ? "name" : "hex"
	} : (n = Pb.hex4.exec(e), n ? {
		r: Db(n[1] + n[1]),
		g: Db(n[2] + n[2]),
		b: Db(n[3] + n[3]),
		a: Eb(n[4] + n[4]),
		format: t ? "name" : "hex8"
	} : (n = Pb.hex3.exec(e), n ? {
		r: Db(n[1] + n[1]),
		g: Db(n[2] + n[2]),
		b: Db(n[3] + n[3]),
		format: t ? "name" : "hex"
	} : !1)))))))));
}
function Ib(e) {
	return !!Pb.CSS_UNIT.exec(String(e));
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/index.js
var Lb = function() {
	function e(t, n) {
		if (t === void 0 && (t = ""), n === void 0 && (n = {}), t instanceof e) return t;
		typeof t == "number" && (t = Ob(t)), this.originalInput = t;
		var r = Ab(t);
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
		return this.a = mb(e), this.roundA = Math.round(100 * this.a) / 100, this;
	}, e.prototype.isMonochrome = function() {
		return this.toHsl().s === 0;
	}, e.prototype.toHsv = function() {
		var e = xb(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			v: e.v,
			a: this.a
		};
	}, e.prototype.toHsvString = function() {
		var e = xb(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
		return this.a === 1 ? `hsv(${t}, ${n}%, ${r}%)` : `hsva(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHsl = function() {
		var e = vb(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			l: e.l,
			a: this.a
		};
	}, e.prototype.toHslString = function() {
		var e = vb(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
		return this.a === 1 ? `hsl(${t}, ${n}%, ${r}%)` : `hsla(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHex = function(e) {
		return e === void 0 && (e = !1), Cb(this.r, this.g, this.b, e);
	}, e.prototype.toHexString = function(e) {
		return e === void 0 && (e = !1), "#" + this.toHex(e);
	}, e.prototype.toHex8 = function(e) {
		return e === void 0 && (e = !1), wb(this.r, this.g, this.b, this.a, e);
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
			return `${Math.round(ub(e, 255) * 100)}%`;
		};
		return {
			r: e(this.r),
			g: e(this.g),
			b: e(this.b),
			a: this.a
		};
	}, e.prototype.toPercentageRgbString = function() {
		var e = function(e) {
			return Math.round(ub(e, 255) * 100);
		};
		return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
	}, e.prototype.toName = function() {
		if (this.a === 0) return "transparent";
		if (this.a < 1) return !1;
		for (var e = "#" + Cb(this.r, this.g, this.b, !1), t = 0, n = Object.entries(kb); t < n.length; t++) {
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
		return n.l += t / 100, n.l = db(n.l), new e(n);
	}, e.prototype.brighten = function(t) {
		t === void 0 && (t = 10);
		var n = this.toRgb();
		return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
	}, e.prototype.darken = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.l -= t / 100, n.l = db(n.l), new e(n);
	}, e.prototype.tint = function(e) {
		return e === void 0 && (e = 10), this.mix("white", e);
	}, e.prototype.shade = function(e) {
		return e === void 0 && (e = 10), this.mix("black", e);
	}, e.prototype.desaturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s -= t / 100, n.s = db(n.s), new e(n);
	}, e.prototype.saturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s += t / 100, n.s = db(n.s), new e(n);
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
function Rb(...e) {
	return new Lb(...e);
}
function zb(e, t) {
	let n = e && e.a, r;
	r = e && e.hsl ? Rb(e.hsl) : e && e.hex && e.hex.length > 0 ? Rb(e.hex) : e && e.hsv ? Rb(e.hsv) : e && e.rgba ? Rb(e.rgba) : e && e.rgb ? Rb(e.rgb) : Rb(e), r && (r._a === void 0 || r._a === null) && r.setAlpha(n || r.getAlpha());
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
var Bb = {
	model: {
		prop: "modelValue",
		event: "update:modelValue"
	},
	props: ["modelValue"],
	data() {
		return { val: zb(this.modelValue) };
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
		this.val = zb(e);
	} },
	methods: {
		colorChange(e, t) {
			this.oldHue = this.colors.hsl.h, this.colors = zb(e, t || this.oldHue);
		},
		isValidHex(e) {
			return Rb(e).isValid;
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
			return Rb(e).getAlpha() === 0;
		}
	}
}, Vb = {
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
}, Hb = { class: "vc-editable-input" }, Ub = ["aria-labelledby"], Wb = ["id", "for"], Gb = { class: "vc-input__desc" };
function Kb(e, t, n, r, i, a) {
	return g(), K("div", Hb, [
		P(Y("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.val = e,
			"aria-labelledby": a.labelId,
			class: "vc-input__input",
			onKeydown: t[1] ||= (...e) => a.handleKeyDown && a.handleKeyDown(...e),
			onInput: t[2] ||= (...e) => a.update && a.update(...e)
		}, null, 40, Ub), [[J, a.val]]),
		Y("span", {
			id: a.labelId,
			for: n.label,
			class: "vc-input__label"
		}, q(a.labelSpanText), 9, Wb),
		Y("span", Gb, q(n.desc), 1)
	]);
}
Qy(".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}"), Vb.render = Kb, Vb.__file = "src/components/editable-input/editable-input.vue", Vb.install = $y;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/utils/utils.js
function qb(e, t, n) {
	return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e;
}
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/saturation/index.js
var Jb = {
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
			let r = n.clientWidth, i = n.clientHeight, a = n.getBoundingClientRect().left + window.pageXOffset, o = n.getBoundingClientRect().top + window.pageYOffset, s = e.pageX || (e.touches ? e.touches[0].pageX : 0), c = e.pageY || (e.touches ? e.touches[0].pageY : 0), l = qb(s - a, 0, r), u = qb(c - o, 0, i), d = l / r, f = qb(-(u / i) + 1, 0, 1);
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
}, Yb = /*#__PURE__*/ Y("div", { class: "vc-saturation--white" }, null, -1), Xb = /*#__PURE__*/ Y("div", { class: "vc-saturation--black" }, null, -1), Zb = [/* @__PURE__ */ Y("div", { class: "vc-saturation-circle" }, null, -1)];
function Qb(e, t, n, r, i, a) {
	return g(), K("div", {
		ref: "container",
		class: "vc-saturation",
		style: Ee({ background: a.bgColor }),
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [
		Yb,
		Xb,
		Y("div", {
			class: "vc-saturation-pointer",
			style: Ee({
				top: a.pointerTop,
				left: a.pointerLeft
			})
		}, Zb, 4)
	], 36);
}
Qy(".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}"), Jb.render = Qb, Jb.__file = "src/components/saturation/saturation.vue", Jb.install = $y;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/hue/index.js
var $b = {
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
}, ex = ["aria-valuenow"], tx = [/* @__PURE__ */ Y("div", { class: "vc-hue-picker" }, null, -1)];
function nx(e, t, n, r, i, a) {
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
	}, tx, 4)], 40, ex)], 2);
}
Qy(".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), $b.render = nx, $b.__file = "src/components/hue/hue.vue", $b.install = $y;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/chrome/index.js
var rx = {
	name: "Chrome",
	components: {
		Saturation: Jb,
		Hue: $b,
		Alpha: ab,
		EdIn: Vb,
		Checkboard: tb
	},
	mixins: [Bb],
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
}, ix = { class: "vc-chrome-saturation-wrap" }, ax = { class: "vc-chrome-body" }, ox = { class: "vc-chrome-controls" }, sx = { class: "vc-chrome-color-wrap" }, cx = ["aria-label"], lx = { class: "vc-chrome-sliders" }, ux = { class: "vc-chrome-hue-wrap" }, dx = {
	key: 0,
	class: "vc-chrome-alpha-wrap"
}, fx = {
	key: 0,
	class: "vc-chrome-fields-wrap"
}, px = { class: "vc-chrome-fields" }, mx = { class: "vc-chrome-field" }, hx = { class: "vc-chrome-fields" }, gx = { class: "vc-chrome-field" }, _x = { class: "vc-chrome-field" }, vx = { class: "vc-chrome-field" }, yx = {
	key: 0,
	class: "vc-chrome-field"
}, bx = { class: "vc-chrome-fields" }, xx = { class: "vc-chrome-field" }, Sx = { class: "vc-chrome-field" }, Cx = { class: "vc-chrome-field" }, wx = {
	key: 0,
	class: "vc-chrome-field"
}, Tx = { class: "vc-chrome-toggle-icon" }, Ex = [/* @__PURE__ */ Y("path", {
	fill: "#333",
	d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1)], Dx = { class: "vc-chrome-toggle-icon-highlight" };
function Ox(e, t, n, r, i, a) {
	let o = w("Saturation"), s = w("Checkboard"), c = w("Hue"), l = w("Alpha"), u = w("EdIn");
	return g(), K("div", {
		role: "application",
		"aria-label": "Chrome color picker",
		class: Z(["vc-chrome", [n.disableAlpha ? "vc-chrome__disable-alpha" : ""]])
	}, [Y("div", ix, [H(o, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]), Y("div", ax, [Y("div", ox, [Y("div", sx, [Y("div", {
		"aria-label": `current color is ${e.colors.hex}`,
		class: "vc-chrome-active-color",
		style: Ee({ background: a.activeColor })
	}, null, 12, cx), n.disableAlpha ? R("v-if", !0) : (g(), V(s, { key: 0 }))]), Y("div", lx, [Y("div", ux, [H(c, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]), n.disableAlpha ? R("v-if", !0) : (g(), K("div", dx, [H(l, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]))])]), n.disableFields ? R("v-if", !0) : (g(), K("div", fx, [
		P(Y("div", px, [R(" hex "), Y("div", mx, [a.hasAlpha ? R("v-if", !0) : (g(), V(u, {
			key: 0,
			label: "hex",
			value: e.colors.hex,
			onChange: a.inputChange
		}, null, 8, ["value", "onChange"])), a.hasAlpha ? (g(), V(u, {
			key: 1,
			label: "hex",
			value: e.colors.hex8,
			onChange: a.inputChange
		}, null, 8, ["value", "onChange"])) : R("v-if", !0)])], 512), [[x, i.fieldsIndex === "hex"]]),
		P(Y("div", hx, [
			R(" rgba "),
			Y("div", gx, [H(u, {
				label: "r",
				value: e.colors.rgba.r,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", _x, [H(u, {
				label: "g",
				value: e.colors.rgba.g,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", vx, [H(u, {
				label: "b",
				value: e.colors.rgba.b,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			n.disableAlpha ? R("v-if", !0) : (g(), K("div", yx, [H(u, {
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
		], 512), [[x, ["rgb", "rgba"].includes(i.fieldsIndex)]]),
		P(Y("div", bx, [
			R(" hsla "),
			Y("div", xx, [H(u, {
				label: "h",
				value: a.hsl.h,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", Sx, [H(u, {
				label: "s",
				value: a.hsl.s,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", Cx, [H(u, {
				label: "l",
				value: a.hsl.l,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			n.disableAlpha ? R("v-if", !0) : (g(), K("div", wx, [H(u, {
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
		], 512), [[x, ["hsl", "hsla"].includes(i.fieldsIndex)]]),
		R(" btn "),
		Y("div", {
			class: "vc-chrome-toggle-btn",
			role: "button",
			"aria-label": "Change another color definition",
			onClick: t[3] ||= (...e) => a.toggleViews && a.toggleViews(...e)
		}, [Y("div", Tx, [(g(), K("svg", {
			style: {
				width: "24px",
				height: "24px"
			},
			viewBox: "0 0 24 24",
			onMouseover: t[0] ||= (...e) => a.showHighlight && a.showHighlight(...e),
			onMouseenter: t[1] ||= (...e) => a.showHighlight && a.showHighlight(...e),
			onMouseout: t[2] ||= (...e) => a.hideHighlight && a.hideHighlight(...e)
		}, Ex, 32))]), P(Y("div", Dx, null, 512), [[x, i.highlight]])]),
		R(" btn ")
	]))])], 2);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/colors.mjs
Qy(".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}"), rx.render = Ox, rx.__file = "src/components/chrome/chrome.vue", rx.install = $y, h(tt);
var kx = class {
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
}, Ax = new kx(182, 70, 157, m("Purple")), jx = new kx(221, 203, 85, m("Gold")), Mx = new kx(0, 130, 201, m("Nextcloud blue")), Nx = new kx(0, 0, 0, m("Black")), Px = new kx(255, 255, 255, m("White")), Fx = [
	Ax,
	new kx(191, 103, 139, m("Rosy brown")),
	new kx(201, 136, 121, m("Feldspar")),
	new kx(211, 169, 103, m("Whiskey")),
	jx,
	new kx(165, 184, 114, m("Olivine")),
	new kx(110, 166, 143, m("Acapulco")),
	new kx(55, 148, 172, m("Boston Blue")),
	Mx,
	new kx(45, 115, 190, m("Mariner")),
	new kx(91, 100, 179, m("Blue Violet")),
	new kx(136, 85, 168, m("Deluge"))
];
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcColorPicker.mjs
h(T);
var Ix = ["aria-label"], Lx = {
	key: 0,
	class: "color-picker__simple"
}, Rx = [
	"aria-label",
	"name",
	"checked",
	"onClick"
], zx = ["title"], Bx = [
	"aria-label",
	"name",
	"checked"
], Vx = {
	key: 0,
	class: "color-picker__navigation"
}, Hx = /* @__PURE__ */ D(/* @__PURE__ */ B({
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
		let n = C(e, "modelValue"), r = C(e, "open"), i = e, o = t, s = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i, c = Je(), l = X(!1), d = W(() => {
			let e = i.palette;
			for (let t of e) if (typeof t == "string" && !t.match(s) || typeof t == "object" && !t.color?.match(s)) {
				a.error("[NcColorPicker] Invalid palette passed", { color: t }), e = [];
				break;
			}
			return e.length === 0 && (e = i.clearable ? [
				...Fx,
				Nx,
				Px
			] : [...Fx]), e.map((e) => ({
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
			return v(e) > .5 ? Nx.color : Px.color;
		}
		function v(e) {
			let [t, n, r] = te(e);
			return (.2126 * t + .7152 * n + .0722 * r) / 255;
		}
		function te(e) {
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
				default: j(() => [l.value ? (g(), V(U(rx), {
					key: 1,
					class: "color-picker__advanced",
					disableAlpha: "",
					disableFields: !e.advancedFields,
					modelValue: n.value ?? "#000000",
					"onUpdate:modelValue": _
				}, null, 8, ["disableFields", "modelValue"])) : (g(), K("div", Lx, [(g(!0), K(O, null, u(d.value, ({ color: e, name: t }, r) => (g(), K("label", {
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
				}, null, 8, Rx)], 6))), 128)), e.clearable ? (g(), K("label", {
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
				}, null, 8, Bx)], 8, zx)) : R("", !0)]))]),
				_: 1
			}), e.paletteOnly ? R("", !0) : (g(), K("div", Vx, [l.value ? (g(), V(U(L), {
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
			}, 8, ["onClick"])]))], 10, Ix)]),
			_: 3
		}, 8, ["shown", "container"]));
	}
}), [["__scopeId", "data-v-fab7cffe"]]), Ux = /* @__PURE__ */ n({ default: () => Hx }), Wx = ["aria-label"], Gx = { class: "rw-subnav__group" }, Kx = ["aria-current", "onClick"], qx = /* @__PURE__ */ B({
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
		}, [(g(!0), K(O, null, u(e.groups, (t) => (g(), K(O, { key: t.label }, [Y("div", Gx, q(t.label), 1), (g(!0), K(O, null, u(t.items, (t) => (g(), K("button", {
			key: t.key,
			type: "button",
			class: Z(["rw-subnav__item", { "rw-subnav__item--active": e.modelValue === t.key }]),
			"aria-current": e.modelValue === t.key ? "page" : void 0,
			onClick: (e) => n("update:modelValue", t.key)
		}, [(g(), V(ae(t.icon), { size: 18 })), z(" " + q(t.label), 1)], 10, Kx))), 128))], 64))), 128))], 8, Wx));
	}
}), Jx = {
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
}, Yx = ["aria-hidden", "aria-label"], Xx = [
	"fill",
	"width",
	"height"
], Zx = { d: "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" }, Qx = { key: 0 };
function $x(e, t, n, r, i, a) {
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
	}, [Y("path", Zx, [n.title ? (g(), K("title", Qx, q(n.title), 1)) : R("", !0)])], 8, Xx))], 16, Yx);
}
var eS = /*#__PURE__*/ $(Jx, [["render", $x]]), tS = {
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
}, nS = ["aria-hidden", "aria-label"], rS = [
	"fill",
	"width",
	"height"
], iS = { d: "M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" }, aS = { key: 0 };
function oS(e, t, n, r, i, a) {
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
	}, [Y("path", iS, [n.title ? (g(), K("title", aS, q(n.title), 1)) : R("", !0)])], 8, rS))], 16, nS);
}
var sS = /*#__PURE__*/ $(tS, [["render", oS]]), cS = {
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
}, lS = ["aria-hidden", "aria-label"], uS = [
	"fill",
	"width",
	"height"
], dS = { d: "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z" }, fS = { key: 0 };
function pS(e, t, n, r, i, a) {
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
	}, [Y("path", dS, [n.title ? (g(), K("title", fS, q(n.title), 1)) : R("", !0)])], 8, uS))], 16, lS);
}
var mS = /*#__PURE__*/ $(cS, [["render", pS]]), hS = {
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
}, gS = ["aria-hidden", "aria-label"], _S = [
	"fill",
	"width",
	"height"
], vS = { d: "M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z" }, yS = { key: 0 };
function bS(e, t, n, r, i, a) {
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
	}, [Y("path", vS, [n.title ? (g(), K("title", yS, q(n.title), 1)) : R("", !0)])], 8, _S))], 16, gS);
}
var xS = /*#__PURE__*/ $(hS, [["render", bS]]), SS = {
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
}, CS = ["aria-hidden", "aria-label"], wS = [
	"fill",
	"width",
	"height"
], TS = { d: "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" }, ES = { key: 0 };
function DS(e, t, n, r, i, a) {
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
	}, [Y("path", TS, [n.title ? (g(), K("title", ES, q(n.title), 1)) : R("", !0)])], 8, wS))], 16, CS);
}
var OS = /*#__PURE__*/ $(SS, [["render", DS]]), kS = {
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
}, AS = ["aria-hidden", "aria-label"], jS = [
	"fill",
	"width",
	"height"
], MS = { d: "M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5M7,4A3,3 0 0,0 4,7A3,3 0 0,0 7,10A3,3 0 0,0 10,7A3,3 0 0,0 7,4M17,14A3,3 0 0,0 14,17A3,3 0 0,0 17,20A3,3 0 0,0 20,17A3,3 0 0,0 17,14Z" }, NS = { key: 0 };
function PS(e, t, n, r, i, a) {
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
	}, [Y("path", MS, [n.title ? (g(), K("title", NS, q(n.title), 1)) : R("", !0)])], 8, jS))], 16, AS);
}
var FS = /*#__PURE__*/ $(kS, [["render", PS]]), IS = {
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
}, LS = ["aria-hidden", "aria-label"], RS = [
	"fill",
	"width",
	"height"
], zS = { d: "M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, BS = { key: 0 };
function VS(e, t, n, r, i, a) {
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
	}, [Y("path", zS, [n.title ? (g(), K("title", BS, q(n.title), 1)) : R("", !0)])], 8, RS))], 16, LS);
}
var HS = /*#__PURE__*/ $(IS, [["render", VS]]), US = {
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
}, WS = ["aria-hidden", "aria-label"], GS = [
	"fill",
	"width",
	"height"
], KS = { d: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" }, qS = { key: 0 };
function JS(e, t, n, r, i, a) {
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
	}, [Y("path", KS, [n.title ? (g(), K("title", qS, q(n.title), 1)) : R("", !0)])], 8, GS))], 16, WS);
}
var YS = /*#__PURE__*/ $(US, [["render", JS]]), XS = {
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
}, ZS = ["aria-hidden", "aria-label"], QS = [
	"fill",
	"width",
	"height"
], $S = { d: "M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z" }, eC = { key: 0 };
function tC(e, t, n, r, i, a) {
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
	}, [Y("path", $S, [n.title ? (g(), K("title", eC, q(n.title), 1)) : R("", !0)])], 8, QS))], 16, ZS);
}
var nC = /*#__PURE__*/ $(XS, [["render", tC]]), rC = {
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
}, iC = ["aria-hidden", "aria-label"], aC = [
	"fill",
	"width",
	"height"
], oC = { d: "M3 4C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H13.5A6.5 6.5 0 0 1 13 18H3V8L11 13L19 8V11A6.5 6.5 0 0 1 19.5 11A6.5 6.5 0 0 1 21 11.18V6C21 4.9 20.1 4 19 4H3M3 6H19L11 11L3 6M19 12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5V12M15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29Z" }, sC = { key: 0 };
function cC(e, t, n, r, i, a) {
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
	}, [Y("path", oC, [n.title ? (g(), K("title", sC, q(n.title), 1)) : R("", !0)])], 8, aC))], 16, iC);
}
var lC = /*#__PURE__*/ $(rC, [["render", cC]]), uC = {
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
}, dC = ["aria-hidden", "aria-label"], fC = [
	"fill",
	"width",
	"height"
], pC = { d: "M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" }, mC = { key: 0 };
function hC(e, t, n, r, i, a) {
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
	}, [Y("path", pC, [n.title ? (g(), K("title", mC, q(n.title), 1)) : R("", !0)])], 8, fC))], 16, dC);
}
var gC = /*#__PURE__*/ $(uC, [["render", hC]]), _C = {
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
}, vC = ["aria-hidden", "aria-label"], yC = [
	"fill",
	"width",
	"height"
], bC = { d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z" }, xC = { key: 0 };
function SC(e, t, n, r, i, a) {
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
	}, [Y("path", bC, [n.title ? (g(), K("title", xC, q(n.title), 1)) : R("", !0)])], 8, yC))], 16, vC);
}
var CC = /*#__PURE__*/ $(_C, [["render", SC]]), wC = {
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
}, TC = ["aria-hidden", "aria-label"], EC = [
	"fill",
	"width",
	"height"
], DC = { d: "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z" }, OC = { key: 0 };
function kC(e, t, n, r, i, a) {
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
	}, [Y("path", DC, [n.title ? (g(), K("title", OC, q(n.title), 1)) : R("", !0)])], 8, EC))], 16, TC);
}
var AC = /*#__PURE__*/ $(wC, [["render", kC]]), jC = [
	"1-5",
	"6-20",
	"21-50",
	"51-200",
	"200+"
], MC = () => hs("/license"), NC = (e, t) => vs("/license", {
	key: e,
	employeeBucket: t
}), PC = (e) => gs("/license/trial", { employeeBucket: e }), FC = () => gs("/license/refresh", {}), IC = () => ys("/license"), LC = { class: "rw-werkplus" }, RC = { class: "rw-hint" }, zC = { key: 0 }, BC = { key: 1 }, VC = {
	key: 5,
	class: "rw-werkplus__facts"
}, HC = { class: "rw-form-row" }, UC = { class: "rw-field" }, WC = ["placeholder"], GC = { class: "rw-field rw-field--narrow" }, KC = ["value"], qC = { class: "rw-hint" }, JC = { class: "rw-werkplus__actions" }, YC = { class: "rw-werkplus__privacy" }, XC = { class: "rw-werkplus__label" }, ZC = { class: "rw-hint" }, QC = { class: "rw-hint" }, $C = { class: "rw-hint" }, ew = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "WerkPlusSettings",
	setup(e) {
		let t = X(null), n = X(""), r = X(jC[0]), i = X(!1), a = X(""), o = X(""), s = X(""), c = X(""), l = X(!1), d = X(!1), f = ["TRIAL_ALREADY_USED"], m = W(() => t.value?.state === "valid" || t.value?.state === "grace"), h = W(() => t.value?.tier === "werkplus" ? "WerkPlus" : A("rechnungswerk", "Frei")), _ = W(() => {
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
		function te(e, n = !1) {
			t.value = e, n || (r.value = e.employeeBucket);
		}
		async function ne(e = !1) {
			try {
				te(await MC(), e), a.value = "";
			} catch (e) {
				a.value = e.message ?? A("rechnungswerk", "Lizenzstatus konnte nicht geladen werden.");
			}
		}
		async function y(e) {
			i.value = !0, o.value = "", s.value = "";
			try {
				te(await e()), n.value = "";
			} catch (e) {
				let { message: t, code: n } = e, r = t ?? A("rechnungswerk", "WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut.");
				n && f.includes(n) ? s.value = r : o.value = r, await ne(!0);
			} finally {
				i.value = !1;
			}
		}
		function b() {
			return c.value = "", y(() => NC(n.value.trim(), r.value));
		}
		function x() {
			return d.value = !1, c.value = "", y(async () => {
				let e = await PC(r.value);
				return c.value = e.key, e.status;
			});
		}
		function S() {
			return y(FC);
		}
		function C() {
			return l.value = !1, c.value = "", y(IC);
		}
		return p(ne), (e, f) => (g(), K("div", LC, [
			Y("p", RC, q(U(A)("rechnungswerk", "Mit einem WerkPlus-Schlüssel schaltet RechnungsWerk zusätzliche Funktionen frei. Ohne Schlüssel bleibt alles, wie es ist.")), 1),
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
						m.value ? (g(), K("p", zC, q(U(A)("rechnungswerk", "Der Testzeitraum läuft. Das ist dein WerkPlus-Schlüssel:")), 1)) : (g(), K("p", BC, q(U(A)("rechnungswerk", "Der Testzeitraum ist gestartet, die Lizenz konnte aber noch nicht geprüft werden. Mit „Jetzt prüfen“ versuchst du es erneut. Das ist dein WerkPlus-Schlüssel:")), 1)),
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
				t.value.keySet ? (g(), K("dl", VC, [
					Y("dt", null, q(U(A)("rechnungswerk", "Tarif")), 1),
					Y("dd", null, q(h.value), 1),
					t.value.expiresAt ? (g(), K(O, { key: 0 }, [Y("dt", null, q(U(A)("rechnungswerk", "Gültig bis")), 1), Y("dd", null, q(ee(t.value.expiresAt)), 1)], 64)) : R("", !0),
					Y("dt", null, q(U(A)("rechnungswerk", "Letzte erfolgreiche Prüfung")), 1),
					Y("dd", null, q(t.value.lastCheckAt ? v(t.value.lastCheckAt) : U(A)("rechnungswerk", "noch keine")), 1),
					Y("dt", null, q(U(A)("rechnungswerk", "Schlüssel")), 1),
					Y("dd", null, q(t.value.keyHint), 1)
				])) : R("", !0),
				Y("div", HC, [Y("label", UC, [Y("span", null, q(U(A)("rechnungswerk", "WerkPlus-Schlüssel")), 1), P(Y("input", {
					"onUpdate:modelValue": f[0] ||= (e) => n.value = e,
					class: "rw-input",
					type: "text",
					autocomplete: "off",
					spellcheck: "false",
					placeholder: t.value.keySet ? U(A)("rechnungswerk", "gespeichert, leer lassen") : "wp_…"
				}, null, 8, WC), [[J, n.value]])]), Y("label", GC, [Y("span", null, q(U(A)("rechnungswerk", "Mitarbeitende")), 1), P(Y("select", {
					"onUpdate:modelValue": f[1] ||= (e) => r.value = e,
					class: "rw-input"
				}, [(g(!0), K(O, null, u(U(jC), (e) => (g(), K("option", {
					key: e,
					value: e
				}, q(e), 9, KC))), 128))], 512), [[re, r.value]])])]),
				Y("p", qC, q(U(A)("rechnungswerk", "Übertragen wird nur die Größenklasse, keine Mitarbeiterzahl.")), 1),
				Y("div", JC, [
					H(U(L), {
						variant: "primary",
						disabled: i.value || !n.value.trim() && !t.value.keySet,
						onClick: b
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
						onClick: S
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
				Y("div", YC, [
					Y("span", XC, q(U(A)("rechnungswerk", "Was an WerkPlus übertragen wird")), 1),
					Y("p", ZC, q(U(A)("rechnungswerk", "Der Schlüssel, die Kennung dieser Installation, die Version von RechnungsWerk und die Größenklasse. Niemals: Rechnungen, Kunden oder andere Belegdaten, Personendaten, Nextcloud-Benutzer oder Dateien.")), 1),
					Y("p", QC, q(U(A)("rechnungswerk", "Die Lizenz wird auf diesem Server geprüft. Ist WerkPlus nicht erreichbar, arbeitet RechnungsWerk normal weiter.")), 1),
					Y("p", $C, [z(q(U(A)("rechnungswerk", "Kennung dieser Installation:")) + " ", 1), Y("code", null, q(t.value.instanceUuid), 1)])
				])
			], 64)) : R("", !0),
			H(ep, {
				open: d.value,
				name: U(A)("rechnungswerk", "WerkPlus 30 Tage testen"),
				message: U(A)("rechnungswerk", "Der Testzeitraum läuft 30 Tage, braucht keine Zahlungsdaten und ist je Installation nur einmal möglich. Jetzt starten?"),
				confirmLabel: U(A)("rechnungswerk", "Testzeitraum starten"),
				onClose: f[4] ||= (e) => d.value = !1,
				onConfirm: x
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			H(ep, {
				open: l.value,
				name: U(A)("rechnungswerk", "WerkPlus-Schlüssel entfernen"),
				message: U(A)("rechnungswerk", "RechnungsWerk arbeitet danach im freien Umfang. Den Schlüssel kannst du jederzeit wieder eintragen. Fortfahren?"),
				confirmLabel: U(A)("rechnungswerk", "Entfernen"),
				onClose: f[5] ||= (e) => l.value = !1,
				onConfirm: C
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-964bd0e3"]]), tw = () => hs("/club-settings"), nw = (e) => vs("/club-settings", e), rw = async () => (await hs("/groups")).groups, iw = { class: "rw-section" }, aw = {
	key: 0,
	class: "rw-field rw-club-group"
}, ow = { class: "rw-club-actions" }, sw = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "ClubSettingsSection",
	setup(e) {
		let t = Hs(), n = X(!1), r = X(null), i = X([]), a = X(!1), o = X(!1), s = X(!1), c = X(""), l = W({
			get() {
				return r.value ? i.value.find((e) => e.id === r.value) ?? {
					id: r.value,
					displayName: r.value
				} : null;
			},
			set(e) {
				r.value = e?.id ?? null;
			}
		}), u = W(() => !n.value || r.value !== null);
		function d(e) {
			n.value = e;
		}
		async function f() {
			a.value = !0, c.value = "";
			try {
				let e = await tw();
				n.value = e.clubMode, r.value = e.memberGroup, t.setClubMode(e.clubMode);
			} catch (e) {
				c.value = e.message ?? A("rechnungswerk", "Laden fehlgeschlagen");
			} finally {
				a.value = !1;
			}
		}
		async function m() {
			o.value = !0;
			try {
				i.value = await rw();
			} catch (e) {
				i.value = [], console.error("[rechnungswerk] loading groups:", e);
			} finally {
				o.value = !1;
			}
		}
		async function h() {
			s.value = !0, c.value = "";
			try {
				let e = await nw({
					clubMode: n.value,
					memberGroup: r.value
				});
				n.value = e.clubMode, r.value = e.memberGroup, t.setClubMode(e.clubMode);
			} catch (e) {
				c.value = e.message ?? A("rechnungswerk", "Speichern fehlgeschlagen");
			} finally {
				s.value = !1;
			}
		}
		return p(async () => {
			await Promise.all([f(), m()]);
		}), (e, t) => (g(), K("section", iw, [
			Y("h3", null, q(U(A)("rechnungswerk", "Verein")), 1),
			H(U(Ot), {
				type: "switch",
				modelValue: n.value,
				disabled: a.value || s.value,
				"onUpdate:modelValue": d
			}, {
				default: j(() => [z(q(U(A)("rechnungswerk", "Vereinsmodus aktivieren")), 1)]),
				_: 1
			}, 8, ["modelValue", "disabled"]),
			n.value ? (g(), K("label", aw, [Y("span", null, q(U(A)("rechnungswerk", "Mitgliedergruppe")), 1), H(U(xt), {
				modelValue: l.value,
				"onUpdate:modelValue": t[0] ||= (e) => l.value = e,
				options: i.value,
				loading: o.value,
				disabled: a.value || s.value,
				label: "displayName",
				clearable: !0
			}, null, 8, [
				"modelValue",
				"options",
				"loading",
				"disabled"
			])])) : R("", !0),
			c.value ? (g(), V(U(pt), {
				key: 1,
				type: "error",
				text: c.value
			}, null, 8, ["text"])) : R("", !0),
			Y("div", ow, [H(U(L), {
				variant: "primary",
				disabled: a.value || s.value || !u.value,
				onClick: h
			}, {
				default: j(() => [z(q(U(A)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])
		]));
	}
}), [["__scopeId", "data-v-f817dcb2"]]);
function cw(e) {
	if (typeof e != "string") return null;
	let t = e.trim().replace(/^#/, "");
	if (t.length === 3 && (t = t.split("").map((e) => e + e).join("")), !/^[0-9a-fA-F]{6}$/.test(t)) return null;
	let n = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, r = parseInt(t, 16);
	return .2126 * n(r >> 16 & 255) + .7152 * n(r >> 8 & 255) + .0722 * n(r & 255);
}
function lw(e, t) {
	let [n, r] = e > t ? [e, t] : [t, e];
	return (n + .05) / (r + .05);
}
function uw(e) {
	let t = cw(e);
	return t === null ? "#000000" : lw(t, 1) >= lw(t, 0) ? "#ffffff" : "#000000";
}
function dw(e) {
	let t = cw(e);
	return t !== null && lw(t, 1) < 4.5;
}
//#endregion
//#region src/utils/invoiceNumber.ts
function fw(e, t, n, r, i) {
	return e.replace(/\{YYYY\}/g, String(n).padStart(4, "0")).replace(/\{YY\}/g, String(n % 100).padStart(2, "0")).replace(/\{MM\}/g, String(r).padStart(2, "0")).replace(/\{DD\}/g, String(i).padStart(2, "0")).replace(/\{(#+)\}/g, (e, n) => String(t).padStart(n.length, "0"));
}
//#endregion
//#region src/utils/fileName.ts
var pw = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue"
};
function mw(e, t) {
	let n = (e) => String(e).padStart(2, "0"), r = {
		"{nummer}": t.nummer,
		"{YYYY}": String(t.date.getFullYear()),
		"{MM}": n(t.date.getMonth() + 1),
		"{DD}": n(t.date.getDate()),
		"{kunde}": t.kunde.replace(/[äöüßÄÖÜ]/g, (e) => pw[e] ?? e),
		"{typ}": t.typ
	}, i = e.replace(/\{nummer\}|\{YYYY\}|\{MM\}|\{DD\}|\{kunde\}|\{typ\}/g, (e) => r[e]);
	return i = i.replace(/[/\\:*?"<>|]/g, "-").replace(/\s+/g, " ").replace(/^[\s.]+|[\s.]+$/g, "").slice(0, 120), (i || "rechnung-1") + ".pdf";
}
//#endregion
//#region src/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
var hw = { class: "rw-view" }, gw = { class: "rw-settings-title" }, _w = {
	key: 0,
	class: "rw-settingspage"
}, vw = { class: "rw-settingspage__content" }, yw = { class: "rw-section" }, bw = { class: "rw-field" }, xw = { class: "rw-field" }, Sw = { class: "rw-form-row" }, Cw = { class: "rw-field" }, ww = { class: "rw-field" }, Tw = { class: "rw-form-row" }, Ew = { class: "rw-field" }, Dw = { class: "rw-field" }, Ow = { class: "rw-field" }, kw = { class: "rw-hint" }, Aw = { class: "rw-section" }, jw = { class: "rw-form-row" }, Mw = { class: "rw-field" }, Nw = { class: "rw-field" }, Pw = { class: "rw-field" }, Fw = { class: "rw-hint" }, Iw = { class: "rw-section" }, Lw = { class: "rw-field rw-field--inline" }, Rw = { class: "rw-accent" }, zw = ["aria-label"], Bw = { class: "rw-field" }, Vw = { class: "rw-accent-preview" }, Hw = { class: "rw-hint" }, Uw = {
	key: 0,
	class: "rw-hint"
}, Ww = { class: "rw-field" }, Gw = { class: "rw-logo" }, Kw = ["src", "alt"], qw = {
	key: 1,
	class: "rw-logo__empty"
}, Jw = { class: "rw-logo__actions" }, Yw = { class: "rw-hint" }, Xw = { class: "rw-section" }, Zw = { class: "rw-field" }, Qw = { class: "rw-hint" }, $w = { class: "rw-field" }, eT = { class: "rw-hint" }, tT = { class: "rw-field rw-reset-mode" }, nT = { class: "rw-hint" }, rT = { class: "rw-section" }, iT = { class: "rw-field" }, aT = { class: "rw-hint" }, oT = { class: "rw-field rw-reset-mode" }, sT = { class: "rw-hint" }, cT = { class: "rw-section" }, lT = { class: "rw-field" }, uT = { class: "rw-hint" }, dT = { class: "rw-section" }, fT = {
	key: 0,
	class: "rw-field"
}, pT = ["placeholder"], mT = { class: "rw-hint" }, hT = {
	key: 1,
	class: "rw-field tax-rate-field"
}, gT = ["value"], _T = { class: "rw-section" }, vT = { class: "rw-field rw-field--narrow" }, yT = { class: "rw-hint" }, bT = { class: "rw-section" }, xT = { class: "rw-field" }, ST = { class: "rw-hint" }, CT = { class: "rw-form-row" }, wT = { class: "rw-field" }, TT = { class: "rw-field" }, ET = { class: "rw-section" }, DT = { class: "rw-field" }, OT = { class: "rw-archive-folder" }, kT = {
	key: 0,
	class: "rw-archive-folder__path"
}, AT = {
	key: 1,
	class: "rw-archive-folder__empty"
}, jT = { class: "rw-field" }, MT = ["placeholder"], NT = { class: "rw-hint" }, PT = { class: "rw-section" }, FT = { class: "rw-hint" }, IT = { class: "rw-form-row" }, LT = { class: "rw-field" }, RT = { class: "rw-field rw-field--narrow" }, zT = { class: "rw-field rw-field--narrow" }, BT = { value: "none" }, VT = { class: "rw-form-row" }, HT = { class: "rw-field" }, UT = { class: "rw-field" }, WT = ["placeholder"], GT = { class: "smtp-test" }, KT = { class: "rw-section" }, qT = { class: "rw-hint" }, JT = { class: "rw-form-row" }, YT = { class: "rw-field" }, XT = { class: "rw-field rw-field--narrow" }, ZT = { class: "rw-field rw-field--narrow" }, QT = { class: "rw-form-row" }, $T = { class: "rw-field" }, eE = { class: "rw-field" }, tE = ["placeholder"], nE = { class: "rw-section" }, rE = { class: "rw-hint" }, iE = { class: "rw-section" }, aE = { class: "rw-hint rw-access-intro" }, oE = { class: "rw-access-group" }, sE = { class: "rw-access-label" }, cE = { class: "rw-hint rw-access-desc" }, lE = { class: "rw-access-group" }, uE = { class: "rw-access-label" }, dE = { class: "rw-hint rw-access-desc" }, fE = { class: "rw-section" }, pE = { class: "rw-action-bar" }, mE = [
	{
		path: "/",
		redirect: { name: "invoices" }
	},
	{
		path: "/invoices",
		name: "invoices",
		component: td
	},
	{
		path: "/invoices/new",
		name: "invoice-new",
		component: Lh
	},
	{
		path: "/invoices/:id",
		name: "invoice-detail",
		component: Lh,
		props: !0
	},
	{
		path: "/membership-fees",
		name: "membership-fees",
		component: i_
	},
	{
		path: "/quotes",
		name: "quotes",
		component: D_
	},
	{
		path: "/quotes/new",
		name: "quote-new",
		component: Lh
	},
	{
		path: "/quotes/:id",
		name: "quote-detail",
		component: Lh,
		props: !0
	},
	{
		path: "/customers",
		name: "customers",
		component: Py
	},
	{
		path: "/products",
		name: "products",
		component: ev
	},
	{
		path: "/text-snippets",
		name: "text-snippets",
		component: jv
	},
	{
		path: "/me",
		name: "my-contact",
		component: Xy
	},
	{
		path: "/settings",
		name: "settings",
		component: /* @__PURE__ */ $(/* @__PURE__ */ B({
			__name: "SettingsView",
			setup(e) {
				let t = Ae(), n = $l(), r = X(null), i = W(() => [
					{
						label: A("rechnungswerk", "Firma"),
						items: [
							{
								key: "firma",
								label: A("rechnungswerk", "Firma"),
								icon: eS
							},
							{
								key: "bank",
								label: A("rechnungswerk", "Bankverbindung"),
								icon: sS
							},
							{
								key: "branding",
								label: A("rechnungswerk", "Branding"),
								icon: mS
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
								icon: xS
							},
							{
								key: "dateiname",
								label: A("rechnungswerk", "PDF-Dateiname"),
								icon: Oa
							},
							{
								key: "texte",
								label: A("rechnungswerk", "Standardtexte"),
								icon: OS
							}
						]
					},
					{
						label: A("rechnungswerk", "Buchhaltung"),
						items: [{
							key: "steuer",
							label: A("rechnungswerk", "Steuer"),
							icon: FS
						}, {
							key: "zahlung",
							label: A("rechnungswerk", "Zahlung"),
							icon: HS
						}]
					},
					{
						label: A("rechnungswerk", "Versand"),
						items: [
							{
								key: "versand",
								label: A("rechnungswerk", "Versand"),
								icon: YS
							},
							{
								key: "smtp",
								label: A("rechnungswerk", "Eigenes SMTP-Konto"),
								icon: nC
							},
							{
								key: "datev",
								label: A("rechnungswerk", "DATEV-Rückmeldung"),
								icon: lC
							}
						]
					},
					{
						label: A("rechnungswerk", "Ablage & Zugriff"),
						items: [{
							key: "ablage",
							label: A("rechnungswerk", "Ablage in Nextcloud"),
							icon: gC
						}, {
							key: "zugriff",
							label: A("rechnungswerk", "Zugriff & Administration"),
							icon: CC
						}]
					},
					{
						label: A("rechnungswerk", "Verein"),
						items: [{
							key: "verein",
							label: A("rechnungswerk", "Verein"),
							icon: CC
						}]
					},
					{
						label: A("rechnungswerk", "Lizenz"),
						items: [{
							key: "werkplus",
							label: A("rechnungswerk", "WerkPlus"),
							icon: AC
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
				let m = X(!1), h = X(!1), _ = X(!1), ee = X(!1), v = X(!1), te = X(0), ne = X((/* @__PURE__ */ new Date()).getFullYear()), y = X((/* @__PURE__ */ new Date()).getMonth() + 1), b = X((/* @__PURE__ */ new Date()).getDate()), S = X(null), C = X(0), w = X(null), ie = X(null), T = W(() => r.value?.accentColor || "#2c3e50"), E = W(() => ({
					background: T.value,
					color: uw(T.value)
				})), ae = W(() => dw(T.value));
				function D(e) {
					r.value && (r.value.accentColor = e ?? null);
				}
				let oe = X([]), se = X([]), k = X([]), ce = X(!1), M = X(!1), N = X(""), le = null, ue = X(""), F = X(""), I = X(!1), de = X(""), fe = X(!1), pe = X(!1), me = W(() => r.value?.logoFileId ? Xl(r.value.logoFileId) : ""), he = W(() => ce.value ? A("rechnungswerk", "Suche läuft\xA0…") : N.value.trim().length < 2 ? A("rechnungswerk", "Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.") : A("rechnungswerk", "Keine Treffer.")), ge = W(() => r.value?.numberResetMode === "continuous" || ne.value === S.value ? te.value : 0), _e = W(() => ge.value + 1), ve = W(() => {
					if (!r.value) return "";
					let e = ie.value && ie.value > 0 ? ie.value : _e.value;
					return fw(r.value.numberFormat || "RE-{YYYY}-{####}", e, ne.value, y.value, b.value);
				}), ye = W(() => {
					if (!r.value) return "";
					let e = r.value.quoteNumberResetMode === "continuous" || ne.value === w.value ? C.value : 0;
					return fw(r.value.quoteNumberFormat || "AN-{YYYY}-{####}", e + 1, ne.value, y.value, b.value);
				}), be = W(() => r.value ? mw(r.value.fileNameFormat || "{nummer}", {
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
						te.value = e.numberCounter, S.value = e.numberCounterYear, C.value = e.quoteNumberCounter, w.value = e.quoteNumberCounterYear;
						{
							let t = e.numberResetMode === "continuous" || ne.value === e.numberCounterYear ? e.numberCounter : 0;
							ie.value = t + 1;
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
							let t = await Zl(e);
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
						await Ql(), r.value && (r.value.archiveFolderId = null, r.value.archiveEnabled = !1), s.value = null;
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
							let t = await Jl(e);
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
						await Yl(), r.value && (r.value.logoFileId = null);
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
					let t = ie.value;
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
							await Gl({
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
				return (e, t) => (g(), K("div", hw, [
					Y("h2", gw, q(U(A)("rechnungswerk", "Einstellungen")), 1),
					Y("div", {
						ref_key: "errorAnchor",
						ref: d
					}, [l.value ? (g(), V(U(pt), {
						key: 0,
						type: "error",
						text: l.value
					}, null, 8, ["text"])) : R("", !0)], 512),
					r.value ? (g(), K("div", _w, [H(qx, {
						groups: i.value,
						modelValue: a.value,
						ariaLabel: U(A)("rechnungswerk", "Einstellungs-Navigation"),
						"onUpdate:modelValue": t[0] ||= (e) => a.value = e
					}, null, 8, [
						"groups",
						"modelValue",
						"ariaLabel"
					]), Y("div", vw, [
						P(Y("section", yw, [
							Y("h3", null, q(U(A)("rechnungswerk", "Firma")), 1),
							Y("label", bw, [Y("span", null, q(U(A)("rechnungswerk", "Firmenname")), 1), P(Y("input", {
								"onUpdate:modelValue": t[1] ||= (e) => r.value.companyName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.companyName]])]),
							Y("label", xw, [Y("span", null, q(U(A)("rechnungswerk", "Adresse")), 1), P(Y("textarea", {
								"onUpdate:modelValue": t[2] ||= (e) => r.value.companyAddress = e,
								class: "rw-input",
								rows: "3"
							}, null, 512), [[J, r.value.companyAddress]])]),
							Y("div", Sw, [Y("label", Cw, [Y("span", null, q(U(A)("rechnungswerk", "USt-IdNr.")), 1), P(Y("input", {
								"onUpdate:modelValue": t[3] ||= (e) => r.value.vatId = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.vatId]])]), Y("label", ww, [Y("span", null, q(U(A)("rechnungswerk", "Steuernummer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[4] ||= (e) => r.value.taxNumber = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.taxNumber]])])]),
							Y("div", Tw, [
								Y("label", Ew, [Y("span", null, q(U(A)("rechnungswerk", "Ansprechpartner")), 1), P(Y("input", {
									"onUpdate:modelValue": t[5] ||= (e) => r.value.contactPerson = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[J, r.value.contactPerson]])]),
								Y("label", Dw, [Y("span", null, q(U(A)("rechnungswerk", "Telefon")), 1), P(Y("input", {
									"onUpdate:modelValue": t[6] ||= (e) => r.value.contactPhone = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[J, r.value.contactPhone]])]),
								Y("label", Ow, [Y("span", null, q(U(A)("rechnungswerk", "Kontakt-E-Mail")), 1), P(Y("input", {
									"onUpdate:modelValue": t[7] ||= (e) => r.value.contactEmail = e,
									class: "rw-input",
									type: "email"
								}, null, 512), [[J, r.value.contactEmail]])])
							]),
							Y("p", kw, q(U(A)("rechnungswerk", "Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).")), 1)
						], 512), [[x, a.value === "firma"]]),
						P(Y("section", Aw, [
							Y("h3", null, q(U(A)("rechnungswerk", "Bankverbindung")), 1),
							Y("div", jw, [Y("label", Mw, [Y("span", null, q(U(A)("rechnungswerk", "IBAN")), 1), P(Y("input", {
								"onUpdate:modelValue": t[8] ||= (e) => r.value.iban = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.iban]])]), Y("label", Nw, [Y("span", null, q(U(A)("rechnungswerk", "BIC")), 1), P(Y("input", {
								"onUpdate:modelValue": t[9] ||= (e) => r.value.bic = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.bic]])])]),
							Y("label", Pw, [Y("span", null, q(U(A)("rechnungswerk", "Bankname")), 1), P(Y("input", {
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
							Y("p", Fw, q(U(A)("rechnungswerk", "Druckt einen EPC-QR-Code neben die Bankverbindung: Kunden scannen ihn mit der Banking-App, Empfänger, Betrag und Verwendungszweck sind vorausgefüllt. Erscheint nur auf Rechnungen mit positivem Betrag, nicht auf Stornobelegen.")), 1)
						], 512), [[x, a.value === "bank"]]),
						P(Y("section", Iw, [
							Y("h3", null, q(U(A)("rechnungswerk", "Branding")), 1),
							Y("div", Lw, [Y("span", null, q(U(A)("rechnungswerk", "Akzentfarbe")), 1), Y("div", Rw, [H(U(Hx), {
								modelValue: T.value,
								advancedFields: "",
								"onUpdate:modelValue": D
							}, {
								default: j(() => [Y("button", {
									type: "button",
									class: "rw-accent__trigger",
									"aria-label": U(A)("rechnungswerk", "Akzentfarbe") + ": " + T.value.toUpperCase(),
									style: Ee(E.value)
								}, q(T.value.toUpperCase()), 13, zw)]),
								_: 1
							}, 8, ["modelValue"]), r.value.accentColor ? (g(), V(U(L), {
								key: 0,
								variant: "tertiary",
								onClick: t[12] ||= (e) => r.value.accentColor = null
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "Zurücksetzen")), 1)]),
								_: 1
							})) : R("", !0)])]),
							Y("div", Bw, [
								Y("table", Vw, [Y("thead", null, [Y("tr", { style: Ee(E.value) }, [...t[42] ||= [
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
								Y("p", Hw, q(U(A)("rechnungswerk", "So erscheint die Kopfzeile der Positionstabelle auf der Rechnung.")), 1),
								ae.value ? (g(), K("p", Uw, q(U(A)("rechnungswerk", "Auf dieser Farbe wäre weiße Schrift zu blass, deshalb steht sie schwarz auf der Rechnung. Die Farbe selbst bleibt unverändert.")), 1)) : R("", !0)
							]),
							Y("div", Ww, [
								Y("span", null, q(U(A)("rechnungswerk", "Firmenlogo")), 1),
								Y("div", Gw, [r.value.logoFileId ? (g(), K("img", {
									key: 0,
									src: me.value,
									alt: U(A)("rechnungswerk", "Firmenlogo"),
									class: "rw-logo__preview"
								}, null, 8, Kw)) : (g(), K("span", qw, q(U(A)("rechnungswerk", "Kein Logo gewählt")), 1)), Y("div", Jw, [H(U(L), {
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
								Y("p", Yw, q(U(A)("rechnungswerk", "Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.")), 1)
							])
						], 512), [[x, a.value === "branding"]]),
						P(Y("section", Xw, [
							Y("h3", null, q(U(A)("rechnungswerk", "Rechnungsnummer")), 1),
							Y("label", Zw, [Y("span", null, q(U(A)("rechnungswerk", "Format")), 1), P(Y("input", {
								"onUpdate:modelValue": t[13] ||= (e) => r.value.numberFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.numberFormat]])]),
							Y("p", Qw, [
								z(q(U(A)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[44] ||= Y("br", null, null, -1),
								z(" " + q(U(A)("rechnungswerk", "Vorschau: {preview}", { preview: ve.value })), 1)
							]),
							Y("label", $w, [Y("span", null, q(U(A)("rechnungswerk", "Nächste Rechnungsnummer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[14] ||= (e) => ie.value = e,
								class: "rw-input",
								type: "number",
								min: "1",
								step: "1"
							}, null, 512), [[
								J,
								ie.value,
								void 0,
								{ number: !0 }
							]])]),
							Y("p", eT, q(U(A)("rechnungswerk", "Die laufende Nummer der nächsten Rechnung. Zum Einstieg in eine bestehende Nummernfolge hier den gewünschten Wert setzen. Nummern lassen sich nur vorwärts setzen, nie unter eine bereits vergebene.")), 1),
							Y("div", tT, [
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
							Y("p", nT, q(U(A)("rechnungswerk", "Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.")), 1)
						], 512), [[x, a.value === "rechnungsnummer"]]),
						P(Y("section", rT, [
							Y("h3", null, q(U(A)("rechnungswerk", "Angebotsnummer")), 1),
							Y("label", iT, [Y("span", null, q(U(A)("rechnungswerk", "Format")), 1), P(Y("input", {
								"onUpdate:modelValue": t[15] ||= (e) => r.value.quoteNumberFormat = e,
								class: "rw-input",
								type: "text",
								placeholder: "AN-{YYYY}-{####}"
							}, null, 512), [[J, r.value.quoteNumberFormat]])]),
							Y("p", aT, [
								z(q(U(A)("rechnungswerk", "Eigener, von den Rechnungen unabhängiger Nummernkreis. Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[45] ||= Y("br", null, null, -1),
								z(" " + q(U(A)("rechnungswerk", "Vorschau: {preview}", { preview: ye.value })), 1)
							]),
							Y("div", oT, [
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
							Y("p", sT, q(U(A)("rechnungswerk", "Angebote haben keine gesetzliche Nummernkreis-Pflicht; Lücken sind erlaubt. Bei „Jährlich zurücksetzen“ muss das Format dennoch eine Jahreskomponente enthalten.")), 1)
						], 512), [[x, a.value === "angebotsnummer"]]),
						P(Y("section", cT, [
							Y("h3", null, q(U(A)("rechnungswerk", "PDF-Dateiname")), 1),
							Y("label", lT, [Y("span", null, q(U(A)("rechnungswerk", "Schema")), 1), P(Y("input", {
								"onUpdate:modelValue": t[16] ||= (e) => r.value.fileNameFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.fileNameFormat]])]),
							Y("p", uT, [
								z(q(U(A)("rechnungswerk", "Gilt für Download, Kundenmail und DATEV-Mail. Platzhalter: {nummer} Rechnungsnummer, {YYYY}/{MM}/{DD} Rechnungsdatum, {kunde} Kundenname, {typ} Rechnung/Storno. {nummer} ist Pflicht.")) + " ", 1),
								t[46] ||= Y("br", null, null, -1),
								z(" " + q(U(A)("rechnungswerk", "Vorschau: {preview}", { preview: be.value })), 1)
							])
						], 512), [[x, a.value === "dateiname"]]),
						P(Y("section", dT, [
							Y("h3", null, q(U(A)("rechnungswerk", "Steuer")), 1),
							H(U(Ot), {
								type: "switch",
								modelValue: r.value.smallBusiness,
								"onUpdate:modelValue": Ce
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "Kleinunternehmer nach §19 UStG (kein USt-Ausweis)")), 1)]),
								_: 1
							}, 8, ["modelValue"]),
							r.value.smallBusiness ? (g(), K("label", fT, [
								Y("span", null, q(U(A)("rechnungswerk", "Hinweistext auf der Rechnung (§ 19 UStG)")), 1),
								P(Y("textarea", {
									"onUpdate:modelValue": t[17] ||= (e) => r.value.smallBusinessNote = e,
									class: "rw-input",
									rows: "2",
									placeholder: U(ru)
								}, null, 8, pT), [[J, r.value.smallBusinessNote]]),
								Y("span", mT, q(U(A)("rechnungswerk", "Erscheint bei aktiviertem Kleinunternehmer-Status auf der Rechnung. Leer lassen für den Standardtext.")), 1)
							])) : R("", !0),
							r.value.smallBusiness ? R("", !0) : (g(), K("label", hT, [Y("span", null, q(U(A)("rechnungswerk", "Standard-USt-Satz")), 1), P(Y("select", {
								"onUpdate:modelValue": t[18] ||= (e) => r.value.defaultTaxRateBp = e,
								class: "rw-input"
							}, [(g(!0), K(O, null, u(U(nu), (e) => (g(), K("option", {
								key: e,
								value: e
							}, q(U(yu)(e)), 9, gT))), 128))], 512), [[
								re,
								r.value.defaultTaxRateBp,
								void 0,
								{ number: !0 }
							]])]))
						], 512), [[x, a.value === "steuer"]]),
						P(Y("section", _T, [
							Y("h3", null, q(U(A)("rechnungswerk", "Zahlung")), 1),
							Y("label", vT, [Y("span", null, q(U(A)("rechnungswerk", "Standard-Zahlungsziel (Tage)")), 1), P(Y("input", {
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
							Y("p", yT, q(U(A)("rechnungswerk", "Wird bei neuen Rechnungen als Zahlungsziel vorbelegt. Leer lassen für kein Standardziel.")), 1)
						], 512), [[x, a.value === "zahlung"]]),
						P(Y("section", bT, [
							Y("h3", null, q(U(A)("rechnungswerk", "Versand")), 1),
							Y("label", xT, [Y("span", null, q(U(A)("rechnungswerk", "DATEV-Upload-Mail")), 1), P(Y("input", {
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
							Y("p", ST, q(U(A)("rechnungswerk", "Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.")), 1),
							Y("div", CT, [Y("label", wT, [Y("span", null, q(U(A)("rechnungswerk", "Absender-Name")), 1), P(Y("input", {
								"onUpdate:modelValue": t[21] ||= (e) => r.value.smtpFromName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.smtpFromName]])]), Y("label", TT, [Y("span", null, q(U(A)("rechnungswerk", "Absender-E-Mail")), 1), P(Y("input", {
								"onUpdate:modelValue": t[22] ||= (e) => r.value.smtpFromEmail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[J, r.value.smtpFromEmail]])])])
						], 512), [[x, a.value === "versand"]]),
						P(Y("section", ET, [
							Y("h3", null, q(U(A)("rechnungswerk", "Ablage in Nextcloud")), 1),
							Y("div", DT, [Y("span", null, q(U(A)("rechnungswerk", "Zielordner")), 1), Y("div", OT, [
								s.value ? (g(), K("span", kT, q(s.value), 1)) : (g(), K("span", AT, q(U(A)("rechnungswerk", "Kein Ordner gewählt")), 1)),
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
							Y("label", jT, [Y("span", null, q(U(A)("rechnungswerk", "Unterordner (optional)")), 1), P(Y("input", {
								"onUpdate:modelValue": t[23] ||= (e) => r.value.archiveSubfolder = e,
								class: "rw-input",
								type: "text",
								placeholder: U(A)("rechnungswerk", "z. B. {YYYY}")
							}, null, 8, MT), [[J, r.value.archiveSubfolder]])]),
							Y("p", NT, [
								z(q(U(A)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {MM} Monat, {DD} Tag (Rechnungsdatum). Unterordner werden bei Bedarf angelegt. Vorhandene Dateien werden nie überschrieben.")) + " ", 1),
								t[47] ||= Y("br", null, null, -1),
								z(" " + q(U(A)("rechnungswerk", "Komfort-Ablage für den Team-Zugriff. Kein revisionssicheres Archiv, die GoBD-Archivierung erfolgt über DATEV bzw. Steuerberater.")), 1)
							])
						], 512), [[x, a.value === "ablage"]]),
						P(Y("section", PT, [
							Y("h3", null, q(U(A)("rechnungswerk", "Eigenes SMTP-Konto (optional)")), 1),
							Y("p", FT, q(U(A)("rechnungswerk", "Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).")), 1),
							Y("div", IT, [
								Y("label", LT, [Y("span", null, q(U(A)("rechnungswerk", "Server (Host)")), 1), P(Y("input", {
									"onUpdate:modelValue": t[24] ||= (e) => r.value.smtpHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "smtp.example.com"
								}, null, 512), [[J, r.value.smtpHost]])]),
								Y("label", RT, [Y("span", null, q(U(A)("rechnungswerk", "Port")), 1), P(Y("input", {
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
								Y("label", zT, [Y("span", null, q(U(A)("rechnungswerk", "Verschlüsselung")), 1), P(Y("select", {
									"onUpdate:modelValue": t[26] ||= (e) => r.value.smtpSecurity = e,
									class: "rw-input"
								}, [
									t[48] ||= Y("option", { value: "starttls" }, "STARTTLS", -1),
									t[49] ||= Y("option", { value: "ssl" }, "SSL/TLS", -1),
									Y("option", BT, q(U(A)("rechnungswerk", "Keine")), 1)
								], 512), [[re, r.value.smtpSecurity]])])
							]),
							Y("div", VT, [Y("label", HT, [Y("span", null, q(U(A)("rechnungswerk", "Benutzer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[27] ||= (e) => r.value.smtpUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.smtpUser]])]), Y("label", UT, [Y("span", null, q(U(A)("rechnungswerk", "Passwort")), 1), P(Y("input", {
								"onUpdate:modelValue": t[28] ||= (e) => ue.value = e,
								class: "rw-input",
								type: "password",
								placeholder: r.value.smtpPasswordSet ? U(A)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, WT), [[J, ue.value]])])]),
							Y("div", GT, [H(U(L), {
								disabled: !r.value.smtpHost || I.value,
								onClick: G
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "Verbindung testen")), 1)]),
								_: 1
							}, 8, ["disabled"]), de.value ? (g(), K("span", {
								key: 0,
								class: Z(["smtp-test__result", fe.value ? "rw-ok" : "rw-err"])
							}, q(de.value), 3)) : R("", !0)])
						], 512), [[x, a.value === "smtp"]]),
						P(Y("section", KT, [
							Y("h3", null, q(U(A)("rechnungswerk", "DATEV-Rückmeldung (IMAP, optional)")), 1),
							Y("p", qT, q(U(A)("rechnungswerk", "DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.")), 1),
							Y("div", JT, [
								Y("label", YT, [Y("span", null, q(U(A)("rechnungswerk", "Server (Host)")), 1), P(Y("input", {
									"onUpdate:modelValue": t[29] ||= (e) => r.value.imapHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "imap.example.com"
								}, null, 512), [[J, r.value.imapHost]])]),
								Y("label", XT, [Y("span", null, q(U(A)("rechnungswerk", "Port")), 1), P(Y("input", {
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
								Y("label", ZT, [Y("span", null, q(U(A)("rechnungswerk", "Verschlüsselung")), 1), P(Y("select", {
									"onUpdate:modelValue": t[31] ||= (e) => r.value.imapSecurity = e,
									class: "rw-input"
								}, [...t[50] ||= [
									Y("option", { value: "ssl" }, "SSL/TLS", -1),
									Y("option", { value: "starttls" }, "STARTTLS", -1),
									Y("option", { value: "tls" }, "TLS", -1)
								]], 512), [[re, r.value.imapSecurity]])])
							]),
							Y("div", QT, [Y("label", $T, [Y("span", null, q(U(A)("rechnungswerk", "Benutzer")), 1), P(Y("input", {
								"onUpdate:modelValue": t[32] ||= (e) => r.value.imapUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.imapUser]])]), Y("label", eE, [Y("span", null, q(U(A)("rechnungswerk", "Passwort")), 1), P(Y("input", {
								"onUpdate:modelValue": t[33] ||= (e) => F.value = e,
								class: "rw-input",
								type: "password",
								placeholder: r.value.imapPasswordSet ? U(A)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, tE), [[J, F.value]])])]),
							H(U(Ot), {
								modelValue: r.value.imapCleanup,
								disabled: !r.value.imapHost,
								"onUpdate:modelValue": t[34] ||= (e) => r.value.imapCleanup = e
							}, {
								default: j(() => [z(q(U(A)("rechnungswerk", "Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"])
						], 512), [[x, a.value === "datev"]]),
						P(Y("section", nE, [
							Y("h3", null, q(U(A)("rechnungswerk", "Standardtexte")), 1),
							Y("p", rE, q(U(A)("rechnungswerk", "Anrede-, Einleitungs- und Schlusstexte werden jetzt als Textbausteine verwaltet – getrennt für Rechnungen und Angebote, mit mehreren Vorlagen je Textbereich.")), 1),
							H(U(L), { onClick: o }, {
								icon: j(() => [H(no, { size: 20 })]),
								default: j(() => [z(" " + q(U(A)("rechnungswerk", "Textbausteine verwalten")), 1)]),
								_: 1
							})
						], 512), [[x, a.value === "texte"]]),
						P(Y("section", iE, [
							Y("h3", null, q(U(A)("rechnungswerk", "Zugriff & Administration")), 1),
							Y("p", aE, q(U(A)("rechnungswerk", "Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.")), 1),
							Y("div", oE, [
								Y("span", sE, q(U(A)("rechnungswerk", "App-Administratoren")), 1),
								Y("p", cE, q(U(A)("rechnungswerk", "Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.")), 1),
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
							Y("div", lE, [
								Y("span", uE, q(U(A)("rechnungswerk", "Berechtigte Nutzer")), 1),
								Y("p", dE, q(U(A)("rechnungswerk", "Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.")), 1),
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
						], 512), [[x, a.value === "zugriff"]]),
						P(Y("div", null, [H(sw)], 512), [[x, a.value === "verein"]]),
						P(Y("section", fE, [Y("h3", null, q(U(A)("rechnungswerk", "WerkPlus")), 1), H(ew)], 512), [[x, a.value === "werkplus"]]),
						P(Y("div", pE, [H(U(L), {
							variant: "primary",
							disabled: U(n).saving || M.value,
							onClick: ze
						}, {
							icon: j(() => [H(Vy, { size: 20 })]),
							default: j(() => [z(" " + q(U(A)("rechnungswerk", "Speichern")), 1)]),
							_: 1
						}, 8, ["disabled"])], 512), [[x, a.value !== "werkplus" && a.value !== "verein"]])
					])])) : R("", !0),
					H(ep, {
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
					H(ep, {
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
					H(ep, {
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
					H(ep, {
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
					H(ep, {
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
		}), [["__scopeId", "data-v-b6b5cf34"]])
	}
], hE = Gr({
	history: pr(),
	routes: mE
});
//#endregion
//#region src/main.js
hE.beforeEach(async (e) => {
	if (e.name !== "membership-fees") return !0;
	let t = Hs();
	return t.loaded || await t.fetch(), t.clubMode ? !0 : { name: "invoices" };
}), document.addEventListener("DOMContentLoaded", () => {
	let e = N(Us);
	e.use(Kt()), e.use(hE), e.use(ot, { themes: { tooltip: { delay: {
		show: 100,
		hide: 0
	} } } }), e.mount(".app-rechnungswerk");
});
//#endregion
export { Zy as n, Ux as t };
