import { c as e, d as t, g as n, l as r, m as i, t as a, u as o } from "./logger-Dmvqkkgn.chunk.mjs";
import { $n as s, $t as c, A as l, An as u, Bn as d, Bt as f, Cn as p, D as m, E as h, En as g, F as _, Gt as ee, Hn as v, I as te, In as ne, J as re, Jn as y, Jt as b, Kt as x, L as ie, Ln as S, Mn as C, Nn as ae, O as w, On as T, Pn as oe, Q as E, Qn as se, Qt as D, R as ce, Rn as O, Tt as k, Un as A, V as le, Vn as j, Vt as M, Wn as N, X as P, Xn as ue, Xt as F, Yn as I, Yt as de, Z as L, Zn as fe, _ as pe, _n as me, _t as he, a as ge, an as R, ar as _e, at as ve, bn as ye, c as be, cn as z, ct as xe, dn as B, dr as Se, dt as Ce, et as we, fn as Te, fr as Ee, ft as De, g as Oe, gn as ke, gt as Ae, hn as je, ht as Me, in as V, ir as Ne, it as Pe, jn as Fe, ln as H, lr as U, lt as Ie, mn as Le, mt as Re, nn as W, nr as ze, nt as G, o as Be, on as K, ot as Ve, pn as He, pr as q, pt as Ue, qn as We, qt as J, rn as Y, rt as Ge, sr as Ke, st as qe, t as Je, tr as X, tt as Ye, ur as Z, ut as Xe, v as Ze, vn as Q, wn as Qe, xn as $e, yn as et, z as tt, zn as nt } from "./createElementId-XLh0NVJk.chunk.mjs";
import { a as rt, i as it, n as at, o as ot, t as st } from "./NcPopover-JJh7IT1g.chunk.mjs";
import { A as ct, E as lt, L as ut, M as dt, N as ft, T as pt, j as mt, k as ht, r as gt, t as _t, w as vt } from "./chunks-DrYk3xeN.chunk.mjs";
import { n as yt, r as bt, t as xt } from "./NcSelect-Be1FMmY2.chunk.mjs";
import { a as St, i as Ct, n as wt, o as Tt, t as Et } from "./NcActions-CKt3CO5b.chunk.mjs";
import { t as Dt } from "./NcLoadingIcon-RK5ACPqk.chunk.mjs";
import { t as Ot } from "./NcCheckboxRadioSwitch-BdRECR9E.chunk.mjs";
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
	return !n && y() && se(i), i;
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
				store: re,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : re, n);
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
			let i = Jt(f, t, n.detached, () => a()), a = o.run(() => j(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? d : u) && t({
					storeId: e,
					type: "direct",
					events: m
				}, r);
			}, nn({}, l, n)));
			return i;
		},
		$dispose: v
	}, re = s(ne);
	r._s.set(e, re);
	let y = (r._a && r._a.runWithContext || Xt)(() => r._e.run(() => (o = We()).run(() => t({ action: te }))));
	for (let t in y) {
		let n = y[t];
		ue(n) && !rn(n) || I(n) ? a || (h && tn(n) && (ue(n) ? n.value = h[t] : ((n instanceof Set || n instanceof Map) && n.clear(), $t(n, h[t]))), r.state.value[e][t] = n) : typeof n == "function" && (y[t] = te(n, t), c.actions[t] = n);
	}
	return nn(re, y), nn(_e(re), y), Object.defineProperty(re, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			_((t) => {
				nn(t, e);
			});
		}
	}), r._p.forEach((e) => {
		let t = o.run(() => e({
			store: re,
			app: r._a,
			pinia: r,
			options: c
		}));
		nn(re, t);
	}), h && a && n.hydrate && n.hydrate(re.$state, h), u = !0, d = !0, re;
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
		T(he, W(() => o.value + 1)), T(Ie, s), T(Re, i);
		let c = X();
		return j(() => [
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
	function re(e) {
		return x(e);
	}
	function y(e) {
		return re(G(te(e), { replace: !0 }));
	}
	function b(e, t) {
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
	function x(e, t) {
		let n = u = v(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, l = b(n, i);
		if (l) return x(G(te(l), {
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
		}), A(i, i, !0, !1)), (f ? Promise.resolve(f) : C(d, i)).catch((e) => qe(e) ? qe(e, 2) ? e : k(e) : ce(e, d, i)).then((e) => {
			if (e) {
				if (qe(e, 2)) return x(G({ replace: s }, te(e.to), {
					state: typeof e.to == "object" ? G({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = w(d, i, !0, s, a);
			return ae(d, i, e), e;
		});
	}
	function ie(e, t) {
		let n = ne(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function S(e) {
		let t = M.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function C(e, t) {
		let n, [r, i, s] = or(e, t);
		n = ar(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(ir(r, e, t));
		});
		let c = ie.bind(null, e, t);
		return n.push(c), P(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(ir(r, e, t));
			return n.push(c), P(n);
		}).then(() => {
			n = ar(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(ir(r, e, t));
			});
			return n.push(c), P(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (ve(r.beforeEnter)) for (let i of r.beforeEnter) n.push(ir(i, e, t));
				else n.push(ir(r.beforeEnter, e, t));
			}
			return n.push(c), P(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = ar(s, "beforeRouteEnter", e, t, S), n.push(c), P(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(ir(r, e, t));
			return n.push(c), P(n);
		}).catch((e) => qe(e, 8) ? e : Promise.reject(e));
	}
	function ae(e, t, n) {
		s.list().forEach((r) => S(() => r(e, t, n)));
	}
	function w(e, t, n, r, a) {
		let o = ne(e, t);
		if (o) return o;
		let s = t === Vn, l = cn ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, G({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, A(e, t, n, s), k();
	}
	let T;
	function oe() {
		T ||= i.listen((e, t, n) => {
			if (!N.listening) return;
			let r = v(e), a = b(r, N.currentRoute.value);
			if (a) {
				x(G(a, {
					replace: !0,
					force: !0
				}), r).catch(Ce);
				return;
			}
			u = r;
			let o = c.value;
			cn && n.delta && Xn(Jn(o.fullPath, n.delta)), C(r, o).catch((e) => qe(e, 12) ? e : qe(e, 2) ? (x(G(te(e.to), { force: !0 }), r).then((e) => {
				qe(e, 20) && !n.delta && n.type === "pop" && i.go(-1, !1);
			}).catch(Ce), Promise.reject()) : (n.delta && i.go(-n.delta, !1), ce(e, r, o))).then((e) => {
				e ||= w(r, o, !1), e && (n.delta && !qe(e, 8) ? i.go(-n.delta, !1) : n.type === "pop" && qe(e, 20) && i.go(-1, !1)), ae(r, o, e);
			}).catch(Ce);
		});
	}
	let E = rr(), se = rr(), D;
	function ce(e, t, n) {
		k(e);
		let r = se.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function O() {
		return D && c.value !== Vn ? Promise.resolve() : new Promise((e, t) => {
			E.add([e, t]);
		});
	}
	function k(e) {
		return D || (D = !e, oe(), E.list().forEach(([t, n]) => e ? n(e) : t()), E.reset()), e;
	}
	function A(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!cn || !a) return Promise.resolve();
		let o = !r && Zn(Jn(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return et().then(() => a(t, n, o)).then((e) => t === c.value && e && qn(e)).catch((e) => t === c.value && ce(e, t, n));
	}
	let le = (e) => i.go(e), j, M = /* @__PURE__ */ new Set(), N = {
		currentRoute: c,
		listening: !0,
		addRoute: m,
		removeRoute: h,
		clearRoutes: g,
		hasRoute: ee,
		getRoutes: _,
		resolve: v,
		options: e,
		push: re,
		replace: y,
		go: le,
		back: () => le(-1),
		forward: () => le(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: se.add,
		isReady: O,
		install(e) {
			e.component("RouterLink", Lr), e.component("RouterView", Wr), e.config.globalProperties.$router = N, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => U(c)
			}), cn && !j && c.value === Vn && (j = !0, re(i.location).catch((e) => {}));
			let t = {};
			for (let e in Vn) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Ue, N), e.provide(De, ze(t)), e.provide(Re, c);
			let n = e.unmount;
			M.add(e), e.unmount = function() {
				M.delete(e), M.size < 1 && (u = Vn, T && T(), T = null, c.value = Vn, j = !1, D = !1), n();
			};
		}
	};
	function P(e) {
		return e.reduce((e, t) => e.then(() => S(t)), Promise.resolve());
	}
	return N;
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/constants2.mjs
var Kr = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), qr = /* @__PURE__ */ Symbol.for("NcContent:selector");
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcContent.mjs
h(le);
var Jr = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM140 44C132.268 44 126 50.268 126 58V292C126 299.732 132.268 306 140 306H372C379.732 306 386 299.732 386 292V58C386 50.268 379.732 44 372 44H140Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", Yr = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM112 44C119.732 44 126 50.268 126 58V292C126 299.732 119.732 306 112 306H20C12.268 306 6 299.732 6 292V58C6 50.268 12.268 44 20 44H112Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", Xr = { class: "vue-skip-actions__container" }, Zr = { class: "vue-skip-actions__headline" }, Qr = { class: "vue-skip-actions__buttons" }, $r = /* @__PURE__ */ E(/* @__PURE__ */ B({
	__name: "NcContent",
	props: { appName: {} },
	setup(e) {
		let t = e;
		T(Kr, l), T(qr, "#content-vue"), T("appName", W(() => t.appName));
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
			Y("div", Qr, [N(H(L, {
				href: "#app-navigation-vue",
				variant: "tertiary",
				onClick: F(s, ["prevent"]),
				onFocusin: r[0] ||= (e) => a.value = "navigation",
				onMouseover: r[1] ||= (e) => a.value = "navigation"
			}, {
				default: A(() => [z(q(U(m)("Skip to app navigation")), 1)]),
				_: 1
			}, 512), [[b, i.value]]), H(L, {
				href: "#app-content-vue",
				variant: "tertiary",
				onFocusin: r[2] ||= (e) => a.value = "content",
				onMouseover: r[3] ||= (e) => a.value = "content"
			}, {
				default: A(() => [z(q(U(m)("Skip to main content")), 1)]),
				_: 1
			})]),
			N(H(P, {
				class: "vue-skip-actions__image",
				svg: o.value,
				size: "auto"
			}, null, 8, ["svg"]), [[b, !U(n)]])
		])])), Fe(t.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-d13dcb98"]]), ei = { name: "NcAppNavigationList" }, ti = { class: "app-navigation-list" };
function ni(e, t, n, r, i, a) {
	return g(), K("ul", ti, [Fe(e.$slots, "default", {}, void 0, !0)]);
}
var ri = /* @__PURE__ */ E(ei, [["render", ni], ["__scopeId", "data-v-d72957ed"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcAppNavigation.mjs
h(_);
var ii = { class: "app-navigation-toggle-wrapper" }, ai = /* @__PURE__ */ E(/* @__PURE__ */ B({
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
		let t = S(e, "open"), n = W(() => t.value ? m("Close navigation") : m("Open navigation"));
		return (e, r) => (g(), K("div", ii, [H(U(L), {
			class: "app-navigation-toggle",
			"aria-controls": "app-navigation-vue",
			"aria-expanded": t.value ? "true" : "false",
			"aria-label": n.value,
			title: n.value,
			variant: "tertiary",
			onClick: r[0] ||= (e) => t.value = !t.value
		}, {
			icon: A(() => [H(P, {
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
], si = { class: "app-navigation__search" }, ci = /* @__PURE__ */ E(/* @__PURE__ */ B({
	__name: "NcAppNavigation",
	props: {
		ariaLabel: {},
		ariaLabelledby: {}
	},
	setup(e) {
		let n = e, i, a = ke(Kr, () => d("NcAppNavigation is not mounted inside NcContent, this is probably an error."), !1), s = nt("appNavigationContainer"), c = ut(), l = X(!c.value), u = W(() => c.value && l.value);
		v(() => {
			!n.ariaLabel && !n.ariaLabelledby && d("NcAppNavigation requires either `ariaLabel` or `ariaLabelledby` to be set for accessibility.");
		}), j(c, (e) => {
			l.value = !e, r("navigation-toggled", { open: l.value });
		}), j(u, () => {
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
				default: A(() => [Fe(t.$slots, "list", {}, void 0, !0)]),
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
var hi = /* @__PURE__ */ E(li, [["render", mi]]), gi = {
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
var Si = /* @__PURE__ */ E(gi, [["render", xi]]);
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
	let o = C("IconArrowRight"), s = C("NcButton"), c = C("IconClose");
	return g(), K("div", { class: Z(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": r.isLegacy34 }]) }, [Y("form", {
		onSubmit: t[1] ||= F((...e) => a.confirm && a.confirm(...e), ["prevent"]),
		onKeydown: t[2] ||= de(F((...e) => a.cancel && a.cancel(...e), [
			"exact",
			"stop",
			"prevent"
		]), ["esc"]),
		onClick: t[3] ||= F(() => {}, ["stop", "prevent"])
	}, [
		N(Y("input", {
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
			icon: A(() => [H(o, { size: 20 })]),
			_: 1
		}, 8, ["aria-label", "onClick"]),
		H(s, {
			"aria-label": i.labelCancel,
			type: "reset",
			variant: n.primary ? "primary" : "tertiary",
			onClick: F(a.cancel, ["stop", "prevent"])
		}, {
			icon: A(() => [H(c, { size: 20 })]),
			_: 1
		}, 8, [
			"aria-label",
			"variant",
			"onClick"
		])
	], 32)], 2);
}
var Ei = /* @__PURE__ */ E(Ci, [["render", Ti], ["__scopeId", "data-v-6926a0b8"]]), Di = B({
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
var Pi = /* @__PURE__ */ E(Oi, [["render", Ni]]), Fi = {
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
var Vi = /* @__PURE__ */ E(Fi, [["render", Bi]]);
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
	let o = C("ChevronUp"), s = C("ChevronDown"), c = C("NcButton");
	return g(), V(c, {
		class: Z(["icon-collapse", {
			"icon-collapse--active": n.active,
			"icon-collapse--open": n.open
		}]),
		"aria-label": a.labelButton,
		variant: n.active && r.isLegacy34 ? "tertiary-on-primary" : "tertiary",
		onClick: a.onClick
	}, {
		icon: A(() => [n.open ? (g(), V(o, {
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
var Wi = /* @__PURE__ */ E(Hi, [["render", Ui], ["__scopeId", "data-v-cfbd3794"]]);
h(ie, re);
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
	let o = C("NcLoadingIcon"), s = C("NcInputConfirmCancel"), c = C("Pencil"), l = C("NcActionButton"), u = C("Undo"), d = C("NcActions"), f = C("NcAppNavigationIconCollapsible");
	return g(), K("li", {
		id: n.id,
		class: Z([{
			"app-navigation-entry--opened": i.opened,
			"app-navigation-entry--pinned": n.pinned,
			"app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
		}, "app-navigation-entry-wrapper"])
	}, [(g(), V(oe(a.isRouterLink ? "router-link" : "NcVNodes"), Se(He({ ...a.isRouterLink && {
		custom: !0,
		to: n.to
	} })), {
		default: A(({ href: p, navigate: m, isActive: h }) => [Y("div", { class: Z(["app-navigation-entry", {
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
				icon: A(() => [Fe(e.$slots, "menu-icon", {}, void 0, !0)]),
				default: A(() => [
					n.editable && !i.editingActive ? (g(), V(l, {
						key: 0,
						"aria-label": a.editButtonAriaLabel,
						onClick: a.handleEdit
					}, {
						icon: A(() => [H(c, { size: 20 })]),
						default: A(() => [z(" " + q(n.editLabel), 1)]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : R("", !0),
					n.undo ? (g(), V(l, {
						key: 1,
						"aria-label": a.undoButtonAriaLabel,
						onClick: a.handleUndo
					}, {
						icon: A(() => [H(u, { size: 20 })]),
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
var ea = /* @__PURE__ */ E(Gi, [["render", $i], ["__scopeId", "data-v-6cae7342"]]), ta = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		let n = t, r = e, i = ne(), a = O(), o = X([]), s = W(() => o.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), c = W(() => o.value.length), l = X(null), u = X(!1), d = X({
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
				C(ie(e)), me("resize", { event: e }, !0);
			}));
		}, te = (e) => {
			d.value.dragging && (window.getSelection()?.removeAllRanges(), me("resized", { event: e }, !0)), d.value.mouseDown = !1, d.value.activeSplitter = null, setTimeout(() => {
				d.value.dragging = !1, _(), document.documentElement.style.cursor = "";
			}, 100);
		}, re = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), f.value.splitter === t ? (clearTimeout(f.value.timeoutId), f.value.timeoutId = null, y(e, t), f.value.splitter = null) : (f.value.splitter = t, f.value.timeoutId = setTimeout(() => f.value.splitter = null, 500))), d.value.dragging || me("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, y = (e, t) => {
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
		}, b = (e, t) => {
			if (!r.keyboardStep) return;
			let n = r.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", i = r.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !i) return;
			e.preventDefault(), d.value.activeSplitter = t;
			let a = (n ? 1 : -1) * (r.rtl && !r.horizontal ? -1 : 1), s = E(t) + o.value[t].size;
			ae(Math.min(Math.max(s + a * r.keyboardStep, 0), 100)), me("resize", { event: e }, !0), me("resized", { event: e }, !0), d.value.activeSplitter = null;
		}, x = (e, t) => {
			let n = s.value[t];
			n && me("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, ie = (e) => {
			let t = l.value.getBoundingClientRect(), { clientX: n, clientY: i } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (r.horizontal ? 0 : d.value.cursorOffset) - t.left,
				y: i - (r.horizontal ? d.value.cursorOffset : 0) - t.top
			};
		}, S = (e) => {
			e = e[r.horizontal ? "y" : "x"];
			let t = l.value[r.horizontal ? "clientHeight" : "clientWidth"];
			return r.rtl && !r.horizontal && (e = t - e), e * 100 / t;
		}, C = (e) => {
			ae(S(e));
		}, ae = (e) => {
			let t = d.value.activeSplitter;
			if (t === null || t >= o.value.length - 1) return;
			let n = {
				prevPanesSize: E(t),
				nextPanesSize: se(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, i = 0 + (r.pushOtherPanes ? 0 : n.prevPanesSize), a = 100 - (r.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, a), i);
			let s = [t, t + 1], c = o.value[s[0]] || null, l = o.value[s[1]] || null, u = c !== null && c.max < 100 && e >= c.max + n.prevPanesSize, f = l !== null && l.max < 100 && e <= 100 - (l.max + se(t + 1));
			if (u || f) {
				u ? (c.size = c.max, l.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - n.nextPanesSize, l.min), l.max)) : (c.size = Math.min(Math.max(100 - l.max - n.prevPanesSize - se(t + 1), c.min), c.max), l.size = l.max);
				return;
			}
			if (r.pushOtherPanes) {
				let t = w(n, e);
				if (!t) return;
				({sums: n, panesToResize: s} = t), c = o.value[s[0]] || null, l = o.value[s[1]] || null;
			}
			c !== null && (c.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, c.min), c.max)), l !== null && (l.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, l.min), l.max));
		}, w = (e, t) => {
			let n = d.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + o.value[r[0]].min) {
				if (r[0] = D(n).index, e.prevReachedMinPanes = 0, r[0] < n && o.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), o.value[r[1]].size = 100 - e.prevReachedMinPanes - o.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = E(r[0]);
			}
			return t > 100 - e.nextPanesSize - o.value[r[1]].min && (r[1] = ce(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && o.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : se(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, o.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (o.value[r[0]].size = 100 - e.prevPanesSize - se(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, E = (e) => o.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), se = (e) => o.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), D = (e) => [...o.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, ce = (e) => o.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, k = () => {
			let e = Array.from(l.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, A = (e, t, n = !1) => {
			let i = e - 1, a = document.createElement("div");
			a.classList.add("splitpanes__splitter"), n || (a.onmousedown = (e) => ee(e, i), typeof window < "u" && "ontouchstart" in window && (a.ontouchstart = (e) => ee(e, i)), a.onclick = (e) => re(e, i + 1), r.keyboardStep && (a.setAttribute("tabindex", "0"), a.setAttribute("role", "separator"), a.setAttribute("aria-orientation", r.horizontal ? "horizontal" : "vertical"), a.onkeydown = (e) => b(e, i))), a.ondblclick = (e) => y(e, i + 1), t.parentNode.insertBefore(a, t);
		}, le = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, M = () => {
			let e = Array.from(l.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && le(t);
			let t = 0;
			for (let n of e) n.className.includes("splitpanes__pane") && (!t && r.firstSplitter ? A(t, n, !0) : t && A(t, n), t++);
		}, N = ({ uid: e, ...t }) => {
			let n = s.value[e];
			for (let [e, r] of Object.entries(t)) n[e] = r;
		}, P = !1, ue = (e) => {
			let t = -1;
			Array.from(l.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), o.value.splice(t, 0, {
				...e,
				index: t
			}), o.value.forEach((e, t) => e.index = t), u.value && !P && (P = !0, et(() => {
				M(), I({ addedPane: o.value[t] }), me("pane-add", { pane: o.value[t] }), P = !1;
			}));
		}, F = (e) => {
			let t = o.value.findIndex((t) => t.id === e);
			o.value[t].el = null;
			let n = o.value.splice(t, 1)[0];
			o.value.forEach((e, t) => e.index = t), et(() => {
				M(), me("pane-remove", { pane: n }), I({ removedPane: {
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
		j(() => r.firstSplitter, () => M()), j(() => r.horizontal, (e) => et(() => {
			n("direction-changed", {
				horizontal: e,
				panes: o.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), p(() => {
			k(), M(), I(), me("ready"), u.value = !0;
		}), $e(() => u.value = !1);
		let he = () => {
			let { class: e, ...t } = i;
			return Le("div", {
				ref: l,
				class: [m.value, e],
				...t
			}, a.default?.());
		};
		return T("panes", o), T("indexedPanes", s), T("horizontal", W(() => r.horizontal)), T("requestUpdate", N), T("onPaneAdd", ue), T("onPaneRemove", F), T("onPaneClick", x), (e, t) => (g(), V(oe(he)));
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
		return j(() => d.value, (e) => n({
			uid: s,
			size: e
		})), j(() => f.value, (e) => n({
			uid: s,
			min: e
		})), j(() => m.value, (e) => n({
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
h(ce);
var ca = /* @__PURE__ */ E(/* @__PURE__ */ B({
	__name: "NcAppContentDetailsToggle",
	setup(e) {
		let t = ut();
		j(t, n), p(() => {
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
			icon: A(() => [H(U(P), {
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
}, fa = e("nextcloud").persist().build(), pa = ht().theming?.name ?? "Nextcloud", ma = /* @__PURE__ */ E(/* @__PURE__ */ B({
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
		let n = S(e, "showDetails"), i = t, o = oa(), s = sa(), c = ut(), l = mt(), u = dt(() => e.disableSwipe ? void 0 : l.value, { onSwipeEnd(e, t) {
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
		j(_, () => {
			_.value !== null && (document.title = _.value);
		}, { immediate: !0 }), j(() => e.paneConfigKey, v, { immediate: !0 }), p(v);
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
			t.$slots.list ? (g(), K(D, { key: 1 }, [U(c) || e.layout === "no-split" ? (g(), K("div", {
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
				N(Y("div", ua, [Fe(t.$slots, "list", {}, void 0, !0)], 512), [[b, !n.value]]),
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
				default: A(() => [H(U(na), {
					class: "splitpanes__pane-list",
					size: d.value || m.value.list.size,
					minSize: m.value.list.min,
					maxSize: m.value.list.max
				}, {
					default: A(() => [Fe(t.$slots, "list", {}, void 0, !0)]),
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
					default: A(() => [Fe(t.$slots, "default", {}, void 0, !0)]),
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
	let t = e;
	return {
		status: t.response?.status ?? 0,
		message: t.response?.data?.error ?? t.message ?? "Unknown error"
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
		}, n = X(!1), r = X(""), i = X([]), a = k("rechnungswerk", "Was ist neu in RechnungsWerk");
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
			default: A(() => [Y("div", Cs, [
				Y("h2", { id: Ps }, q(U(a)), 1),
				Y("p", ws, q(U(k)("rechnungswerk", "Version {version}", { version: r.value })), 1),
				(g(!0), K(D, null, u(i.value, (e, t) => (g(), K("div", {
					key: t,
					class: "whatsnew__entry"
				}, [Y("div", Ts, [(g(), V(oe(o(e.icon)), { size: 22 }))]), Y("div", Es, [
					Y("h3", Ds, [z(q(e.title) + " ", 1), e.plus ? (g(), K("span", Os, "WerkPlus")) : R("", !0)]),
					Y("p", ks, q(e.text), 1),
					e.where ? (g(), K("p", As, [
						z(q(U(k)("rechnungswerk", "Zu finden unter")) + " ", 1),
						Y("b", null, q(e.where), 1),
						e.adminOnly ? (g(), K("span", js, q(" " + U(k)("rechnungswerk", "(nur für Administratoren)")), 1)) : R("", !0)
					])) : R("", !0),
					e.plus ? (g(), K("a", {
						key: 1,
						class: "whatsnew__link",
						href: Ns,
						target: "_blank",
						rel: "noreferrer noopener"
					}, q(U(k)("rechnungswerk", "Mehr zu WerkPlus")), 1)) : R("", !0)
				])]))), 128)),
				Y("div", Ms, [H(U(L), {
					variant: "primary",
					onClick: s
				}, {
					default: A(() => [z(q(U(k)("rechnungswerk", "Alles klar")), 1)]),
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
			let a = C("router-view");
			return g(), V(U($r), { appName: "rechnungswerk" }, {
				default: A(() => [U(t).loaded ? n.value ? (g(), K(D, { key: 2 }, [
					H(U(ci), null, {
						footer: A(() => [H(U(ea), {
							name: U(k)("rechnungswerk", "Mein Kontakt"),
							to: { name: "my-contact" }
						}, {
							icon: A(() => [H(Ha, { size: 20 })]),
							_: 1
						}, 8, ["name"]), r.value ? (g(), V(U(ea), {
							key: 0,
							name: U(k)("rechnungswerk", "Einstellungen"),
							to: { name: "settings" }
						}, {
							icon: A(() => [H(lo, { size: 20 })]),
							_: 1
						}, 8, ["name"])) : R("", !0)]),
						default: A(() => [
							H(U(ea), {
								name: U(k)("rechnungswerk", "Rechnungen"),
								to: { name: "invoices" }
							}, {
								icon: A(() => [H(xa, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							H(U(ea), {
								name: U(k)("rechnungswerk", "Angebote"),
								to: { name: "quotes" }
							}, {
								icon: A(() => [H(Oa, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							H(U(ea), {
								name: U(k)("rechnungswerk", "Kunden"),
								to: { name: "customers" }
							}, {
								icon: A(() => [H(Fa, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							H(U(ea), {
								name: U(k)("rechnungswerk", "Produkte"),
								to: { name: "products" }
							}, {
								icon: A(() => [H(Ya, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							H(U(ea), {
								name: U(k)("rechnungswerk", "Textbausteine"),
								to: { name: "text-snippets" }
							}, {
								icon: A(() => [H(no, { size: 20 })]),
								_: 1
							}, 8, ["name"])
						]),
						_: 1
					}),
					H(U(ma), null, {
						default: A(() => [H(a)]),
						_: 1
					}),
					H(Fs)
				], 64)) : (g(), V(U(ma), { key: 1 }, {
					default: A(() => [H(U(St), {
						name: U(k)("rechnungswerk", "Kein Zugriff"),
						description: U(k)("rechnungswerk", "Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.")
					}, {
						icon: A(() => [H(_o, { size: 20 })]),
						_: 1
					}, 8, ["name", "description"])]),
					_: 1
				})) : (g(), V(U(ma), { key: 0 }, {
					default: A(() => [H(U(Dt), {
						class: "rw-app-loading",
						size: 44
					})]),
					_: 1
				}))]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-a99a62d0"]]), Hs = {
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
			trigger: A(() => [H(Js, {
				class: "info-icon",
				size: 14,
				tabindex: "0"
			})]),
			default: A(() => [Y("div", Xs, [Fe(e.$slots, "default", {}, void 0, !0)])]),
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
		let te = (e) => e.paymentStatus === "overdue" ? "rw-amt-overdue" : e.paymentStatus === "paid" ? "rw-amt-paid" : "";
		function ne(e) {
			if (e.paymentStatus === "paid") return e.paidAt ? k("rechnungswerk", "bezahlt am {date}", { date: v(e.paidAt) }) : k("rechnungswerk", "bezahlt");
			if (!e.dueDate) return "";
			let t = ee(e.dueDate);
			if (e.paymentStatus === "overdue") {
				let e = -t;
				return e === 1 ? k("rechnungswerk", "1 Tag überfällig") : k("rechnungswerk", "{days} Tage überfällig", { days: String(e) });
			}
			return e.paymentStatus === "unpaid" ? t <= 0 ? k("rechnungswerk", "fällig heute") : t === 1 ? k("rechnungswerk", "fällig morgen ({date})", { date: v(e.dueDate) }) : k("rechnungswerk", "fällig in {days} Tagen ({date})", {
				days: String(t),
				date: v(e.dueDate)
			}) : "";
		}
		let re = (e) => e.paymentStatus === "paid" ? k("rechnungswerk", "Als unbezahlt markieren") : k("rechnungswerk", "Als bezahlt markieren");
		function y(e) {
			return e.paymentStatus === "paid" ? e.paidAt ? k("rechnungswerk", "Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen", { date: v(e.paidAt) }) : k("rechnungswerk", "Bezahlt – klicken, um die Zahlung zurückzunehmen") : k("rechnungswerk", "Als bezahlt markieren");
		}
		async function b(e) {
			i.value = "";
			try {
				e.paymentStatus === "paid" ? await n.markUnpaid(e.id) : await n.markPaid(e.id);
			} catch (e) {
				i.value = e.message ?? k("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		let x = X(null), ie = X("");
		function S(e) {
			let t = e ? _(e) : /* @__PURE__ */ new Date(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
			return `${t.getFullYear()}-${n}-${r}`;
		}
		function C(e) {
			i.value = "", ie.value = S(e.paidAt), x.value = e.id;
		}
		function w() {
			x.value = null;
		}
		async function T(e) {
			if (!ie.value) {
				w();
				return;
			}
			i.value = "";
			try {
				await n.markPaid(e.id, ie.value), x.value = null;
			} catch (e) {
				i.value = e.message ?? k("rechnungswerk", "Zahldatum konnte nicht geändert werden");
			}
		}
		let E = {
			draft: Tc,
			committed: _o,
			cancelled: Mc
		}, se = {
			pending: Kc,
			confirmed: zc,
			unknown: $c,
			failed: Mc
		}, ce = (e) => E[e] ?? xa, O = (e) => e ? se[e] ?? null : null, le = {
			pending: k("rechnungswerk", "An DATEV gesendet – Bestätigung ausstehend"),
			confirmed: k("rechnungswerk", "Von DATEV bestätigt (Beleg angenommen)"),
			unknown: k("rechnungswerk", "DATEV-Antwort prüfen"),
			failed: k("rechnungswerk", "Von DATEV abgelehnt")
		}, j = (e) => le[e] ?? "", M = (e) => k("rechnungswerk", iu[e] ?? e), P = (e) => k("rechnungswerk", au[e] ?? e), ue = (e) => e.relatedNumber ? k("rechnungswerk", "{type} zu Rechnung {number}", {
			type: P(e.invoiceType),
			number: e.relatedNumber
		}) : P(e.invoiceType);
		function I(e) {
			return e ? new Date(e).toLocaleDateString() : "—";
		}
		p(() => {
			n.fetchAll().catch((e) => {
				i.value = e.message ?? k("rechnungswerk", "Laden fehlgeschlagen");
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
				i.value = e.message ?? k("rechnungswerk", "Duplizieren fehlgeschlagen");
			}
		}
		return (e, t) => {
			let r = ae("tooltip");
			return g(), K("div", vu, [
				Y("div", yu, [Y("h2", null, q(U(k)("rechnungswerk", "Rechnungen")), 1), H(U(L), {
					variant: "primary",
					onClick: fe
				}, {
					icon: A(() => [H(ic, { size: 20 })]),
					default: A(() => [z(" " + q(U(k)("rechnungswerk", "Neue Rechnung")), 1)]),
					_: 1
				})]),
				i.value ? (g(), V(U(pt), {
					key: 0,
					type: "error",
					text: i.value
				}, null, 8, ["text"])) : R("", !0),
				!U(n).loading && U(n).invoices.length === 0 ? (g(), V(U(St), {
					key: 1,
					name: U(k)("rechnungswerk", "Noch keine Rechnungen"),
					description: U(k)("rechnungswerk", "Lege deine erste Rechnung an.")
				}, {
					icon: A(() => [H(xa, { size: 20 })]),
					_: 1
				}, 8, ["name", "description"])) : U(n).invoices.length > 0 ? (g(), K("div", bu, [Y("div", xu, [(g(), K(D, null, u(c, (e) => Y("button", {
					key: e.key,
					class: Z(["rw-chip", {
						"rw-chip--active": l.value === e.key,
						"rw-chip--overdue": e.key === "overdue"
					}]),
					onClick: (t) => l.value = e.key
				}, [z(q(U(k)("rechnungswerk", e.label)) + " ", 1), Y("span", Cu, q(f.value[e.key]), 1)], 10, Su)), 64)), m.value > 0 ? (g(), K("span", wu, [z(q(U(k)("rechnungswerk", "Offen gesamt:")) + " ", 1), Y("strong", null, q(U(gu)(m.value)), 1)])) : R("", !0)]), Y("div", Tu, [Y("table", Eu, [Y("thead", null, [Y("tr", null, [
					Y("th", null, [Y("span", Du, [z(q(U(k)("rechnungswerk", "Status")) + " ", 1), H(Zs, null, {
						default: A(() => [Y("div", Ou, [
							Y("p", ku, q(U(k)("rechnungswerk", "Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.")), 1),
							Y("div", Au, [
								Y("span", ju, q(U(k)("rechnungswerk", "Rechnung")), 1),
								Y("span", Mu, [H(_o, {
									size: 16,
									class: "rw-sicon rw-sicon--committed"
								}), z(" " + q(U(k)("rechnungswerk", "Festgeschrieben")), 1)]),
								Y("span", Nu, [H(Tc, {
									size: 16,
									class: "rw-sicon rw-sicon--draft"
								}), z(" " + q(U(k)("rechnungswerk", "Entwurf")), 1)]),
								Y("span", Pu, [H(Mc, {
									size: 16,
									class: "rw-sicon rw-sicon--cancelled"
								}), z(" " + q(U(k)("rechnungswerk", "Storniert")), 1)])
							]),
							s.value ? (g(), K("div", Fu, [
								Y("span", Iu, q(U(k)("rechnungswerk", "DATEV-Übergabe")), 1),
								Y("span", Lu, [H(zc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-confirmed"
								}), z(" " + q(U(k)("rechnungswerk", "bestätigt")), 1)]),
								Y("span", Ru, [H(Kc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-pending"
								}), z(" " + q(U(k)("rechnungswerk", "gesendet")), 1)]),
								Y("span", zu, [H($c, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-unknown"
								}), z(" " + q(U(k)("rechnungswerk", "Antwort prüfen")), 1)])
							])) : R("", !0)
						])]),
						_: 1
					})])]),
					Y("th", null, q(U(k)("rechnungswerk", "Nummer")), 1),
					Y("th", null, q(U(k)("rechnungswerk", "Empfänger")), 1),
					Y("th", null, q(U(k)("rechnungswerk", "Datum")), 1),
					Y("th", Bu, q(U(k)("rechnungswerk", "Brutto")), 1),
					Y("th", Vu, q(U(k)("rechnungswerk", "Bezahlt")), 1),
					t[2] ||= Y("th", { class: "rw-col-actions" }, null, -1)
				])]), Y("tbody", null, [(g(!0), K(D, null, u(h.value, (e) => (g(), K("tr", {
					key: e.id,
					class: Z(["rw-row-clickable", { "rw-row--overdue": e.paymentStatus === "overdue" }]),
					onClick: (t) => pe(e.id)
				}, [
					Y("td", null, [Y("span", Uu, [(g(), V(oe(ce(e.status)), {
						size: 20,
						class: Z(["rw-sicon", `rw-sicon--${e.status}`]),
						title: M(e.status)
					}, null, 8, ["class", "title"])), s.value && e.datevStatus && O(e.datevStatus) ? (g(), V(oe(O(e.datevStatus)), {
						key: 0,
						size: 18,
						class: Z(["rw-sicon", `rw-sicon--datev-${e.datevStatus}`]),
						title: j(e.datevStatus)
					}, null, 8, ["class", "title"])) : R("", !0)])]),
					Y("td", null, [z(q(e.number ?? U(k)("rechnungswerk", "(Entwurf)")) + " ", 1), e.invoiceType === "invoice" ? R("", !0) : N((g(), K("span", Wu, [z(q(P(e.invoiceType)), 1)])), [[r, ue(e)]])]),
					Y("td", null, q(e.recipientName ?? "—"), 1),
					Y("td", null, q(I(e.issueDate ?? e.createdAt)), 1),
					Y("td", Gu, [Y("span", { class: Z(te(e)) }, q(U(gu)(e.totalCents)), 3), x.value === e.id ? (g(), K("div", {
						key: 0,
						class: "rw-paid-edit",
						onClick: t[1] ||= F(() => {}, ["stop"])
					}, [
						N(Y("input", {
							"onUpdate:modelValue": t[0] ||= (e) => ie.value = e,
							type: "date",
							class: "rw-input rw-paid-input",
							"aria-label": U(k)("rechnungswerk", "Zahldatum"),
							onKeyup: [de((t) => T(e), ["enter"]), de(w, ["esc"])]
						}, null, 40, Ku), [[J, ie.value]]),
						H(U(L), {
							variant: "primary",
							"aria-label": U(k)("rechnungswerk", "Zahldatum speichern"),
							title: U(k)("rechnungswerk", "Zahldatum speichern"),
							onClick: F((t) => T(e), ["stop"])
						}, {
							icon: A(() => [H(bl, { size: 18 })]),
							_: 1
						}, 8, [
							"aria-label",
							"title",
							"onClick"
						]),
						H(U(L), {
							variant: "tertiary",
							"aria-label": U(k)("rechnungswerk", "Abbrechen"),
							title: U(k)("rechnungswerk", "Abbrechen"),
							onClick: F(w, ["stop"])
						}, {
							icon: A(() => [H(Dl, { size: 18 })]),
							_: 1
						}, 8, ["aria-label", "title"])
					])) : e.paymentStatus === "paid" ? (g(), K("button", {
						key: 1,
						type: "button",
						class: "rw-subline rw-subline--editable",
						title: U(k)("rechnungswerk", "Zahldatum ändern"),
						onClick: F((t) => C(e), ["stop"])
					}, q(ne(e)), 9, qu)) : ne(e) ? (g(), K("div", {
						key: 2,
						class: Z(["rw-subline", { "rw-subline--overdue": e.paymentStatus === "overdue" }])
					}, q(ne(e)), 3)) : R("", !0)]),
					Y("td", Ju, [e.paymentStatus ? (g(), K("button", {
						key: 0,
						class: Z(["rw-paybox", e.paymentStatus === "paid" ? "rw-paybox--paid" : "rw-paybox--open"]),
						"aria-label": re(e),
						title: y(e),
						onClick: F((t) => b(e), ["stop"])
					}, [(g(), V(oe(e.paymentStatus === "paid" ? pl : ol), { size: 22 }))], 10, Yu)) : R("", !0)]),
					Y("td", Xu, [Y("div", Zu, [e.invoiceType === "cancellation" ? R("", !0) : (g(), V(U(L), {
						key: 0,
						variant: "tertiary",
						"aria-label": U(k)("rechnungswerk", "Duplizieren"),
						title: U(k)("rechnungswerk", "Als Vorlage für neue Rechnung duplizieren"),
						onClick: F((t) => he(e.id), ["stop"])
					}, {
						icon: A(() => [H(vc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])), e.status === "draft" ? R("", !0) : (g(), V(U(L), {
						key: 1,
						variant: "tertiary",
						"aria-label": U(k)("rechnungswerk", "PDF herunterladen"),
						title: U(k)("rechnungswerk", "PDF herunterladen"),
						onClick: F((t) => me(e.id), ["stop"])
					}, {
						icon: A(() => [H(dc, { size: 20 })]),
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
			placeholder: U(k)("rechnungswerk", "Name eingeben oder Kontakt wählen\xA0…"),
			onInput: n[0] ||= (e) => o(e.target.value),
			onFocus: n[1] ||= (e) => i.value = r.value.length > 0,
			onBlur: c
		}, null, 40, Rd), i.value && r.value.length > 0 ? (g(), K("ul", zd, [(g(!0), K(D, null, u(r.value, (e, t) => (g(), K("li", {
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
		let t = S(e, "modelValue"), n = X([]), r = W(() => {
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
		}), (a, o) => N((g(), K("select", {
			"onUpdate:modelValue": o[0] ||= (e) => t.value = e,
			class: Z(e.selectClass),
			disabled: e.disabled,
			title: r.value
		}, [i.value === "" ? R("", !0) : (g(), K("option", {
			key: 0,
			value: i.value
		}, q(i.value), 9, Kd)), (g(!0), K(D, null, u(n.value, (e) => (g(), K("option", {
			key: e.code,
			value: e.code
		}, q(e.label) + " (" + q(e.code) + ")", 9, qd))), 128))], 10, Gd)), [[x, t.value]]);
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
			placeholder: U(k)("rechnungswerk", "Kunde suchen oder anlegen\xA0…"),
			onInput: t[0] ||= (e) => s(e.target.value),
			onFocus: t[1] ||= (e) => o.value = a.value.length > 0,
			onBlur: l
		}, null, 40, tf), o.value && a.value.length > 0 ? (g(), K("ul", nf, [(g(!0), K(D, null, u(a.value, (e) => (g(), K("li", {
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
		let n = e, r = t, i = X(""), a = X([]), o = X(!1), s = null, c = W(() => i.value.trim() === "" ? k("rechnungswerk", "Alle Produkte ({gesamt})", { gesamt: n.products.length }) : k("rechnungswerk", "{treffer} Treffer", { treffer: a.value.length }));
		function l(e) {
			return [`${pu(e.defaultPriceE4)} €`, e.defaultUnitLabel || k("rechnungswerk", $l[e.defaultUnitCode])].filter(Boolean).join(" · ");
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
			placeholder: U(k)("rechnungswerk", "Produkt wählen oder suchen\xA0…"),
			onInput: t[0] ||= (e) => f(e.target.value),
			onFocus: p,
			onClick: p,
			onBlur: h
		}, null, 40, cf), o.value && a.value.length > 0 ? (g(), K("div", lf, [Y("div", uf, q(c.value), 1), Y("ul", df, [(g(!0), K(D, null, u(a.value, (e) => (g(), K("li", {
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
		let t = S(e, "items"), n = e, r = (e) => vf(e.quantity, mu(e.priceInput));
		function i(e) {
			let t = lu(e.quantity);
			t !== null && (e.quantity = du(t));
		}
		function a(e) {
			uu(e.priceInput) !== null && (e.priceInput = pu(mu(e.priceInput)));
		}
		j(() => n.smallBusiness, (e) => {
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
				Y("th", null, q(U(k)("rechnungswerk", "Bezeichnung")), 1),
				Y("th", Cf, q(U(k)("rechnungswerk", "Menge")), 1),
				Y("th", null, q(U(k)("rechnungswerk", "Einheit")), 1),
				Y("th", wf, q(U(k)("rechnungswerk", "Einzelpreis (€)")), 1),
				Y("th", Tf, q(U(k)("rechnungswerk", "USt")), 1),
				Y("th", Ef, q(U(k)("rechnungswerk", "Summe netto")), 1),
				e.readonly ? R("", !0) : (g(), K("th", Df))
			])]),
			Y("tbody", null, [(g(!0), K(D, null, u(t.value, (t, n) => (g(), K(D, { key: n }, [Y("tr", Of, [
				Y("td", null, [N(Y("input", {
					"onUpdate:modelValue": (e) => t.name = e,
					class: "rw-input",
					type: "text",
					readonly: e.readonly,
					placeholder: U(k)("rechnungswerk", "Leistung")
				}, null, 8, kf), [[J, t.name]])]),
				Y("td", Af, [N(Y("input", {
					"onUpdate:modelValue": (e) => t.quantity = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => i(t)
				}, null, 40, jf), [[J, t.quantity]])]),
				Y("td", null, [N(Y("select", {
					"onUpdate:modelValue": (e) => t.unitCode = e,
					class: "rw-input",
					disabled: e.readonly
				}, [(g(!0), K(D, null, u(U(Ql), (e) => (g(), K("option", {
					key: e,
					value: e
				}, q(U(k)("rechnungswerk", U($l)[e])), 9, Nf))), 128))], 8, Mf), [[x, t.unitCode]])]),
				Y("td", Pf, [N(Y("input", {
					"onUpdate:modelValue": (e) => t.priceInput = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => a(t)
				}, null, 40, Ff), [[J, t.priceInput]])]),
				Y("td", If, [N(Y("select", {
					"onUpdate:modelValue": (e) => t.taxRateBp = e,
					class: "rw-input",
					disabled: e.readonly || e.smallBusiness
				}, [(g(!0), K(D, null, u(U(eu), (e) => (g(), K("option", {
					key: e,
					value: e
				}, q(U(_u)(e)), 9, Rf))), 128))], 8, Lf), [[
					x,
					t.taxRateBp,
					void 0,
					{ number: !0 }
				]])]),
				Y("td", zf, q(U(gu)(r(t))), 1),
				e.readonly ? R("", !0) : (g(), K("td", Bf, [H(U(L), {
					variant: "tertiary",
					"aria-label": U(k)("rechnungswerk", "Position entfernen"),
					onClick: (e) => p(n)
				}, {
					icon: A(() => [H(od, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "onClick"])]))
			]), !e.readonly || t.description || t.unitLabel ? (g(), K("tr", Vf, [Y("td", { colspan: e.readonly ? 6 : 7 }, [Y("div", Uf, [!e.readonly || t.unitLabel ? N((g(), K("input", {
				key: 0,
				"onUpdate:modelValue": (e) => t.unitLabel = e,
				class: "rw-input rw-input--sub rw-unit-label",
				type: "text",
				maxlength: "64",
				readonly: e.readonly,
				placeholder: U(k)("rechnungswerk", "eigene Einheit"),
				title: U(k)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.")
			}, null, 8, Wf)), [[J, t.unitLabel]]) : R("", !0), !e.readonly || t.description ? N((g(), K("input", {
				key: 1,
				"onUpdate:modelValue": (e) => t.description = e,
				class: "rw-input rw-input--sub rw-desc",
				type: "text",
				readonly: e.readonly,
				placeholder: U(k)("rechnungswerk", "Beschreibung (optional)")
			}, null, 8, Gf)), [[J, t.description]]) : R("", !0)])], 8, Hf)])) : R("", !0)], 64))), 128)), t.value.length === 0 ? (g(), K("tr", Kf, [Y("td", {
				colspan: e.readonly ? 6 : 7,
				class: "rw-muted empty-row"
			}, q(U(k)("rechnungswerk", "Noch keine Positionen.")), 9, qf)])) : R("", !0)])
		])]), e.readonly ? R("", !0) : (g(), K("div", Jf, [H(U(L), { onClick: d }, {
			icon: A(() => [H(ic, { size: 20 })]),
			default: A(() => [z(" " + q(U(k)("rechnungswerk", "Position hinzufügen")), 1)]),
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
			icon: A(() => [H(Ya, { size: 20 })]),
			default: A(() => [z(" " + q(U(k)("rechnungswerk", "Noch keine Produkte angelegt")), 1)]),
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
			actions: A(() => [H(U(L), {
				variant: "secondary",
				onClick: n[0] ||= (e) => t.$emit("close")
			}, {
				default: A(() => [z(q(e.cancelLabel || U(k)("rechnungswerk", "Abbrechen")), 1)]),
				_: 1
			}), H(U(L), {
				variant: e.destructive ? "error" : "primary",
				onClick: n[1] ||= (e) => t.$emit("confirm")
			}, {
				default: A(() => [z(q(e.confirmLabel || U(k)("rechnungswerk", "Bestätigen")), 1)]),
				_: 1
			}, 8, ["variant"])]),
			default: A(() => [Y("div", Xf, [Y("p", Zf, q(e.message), 1)])]),
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
		let n = e, r = W(() => n.kind === "quote"), i = W(() => r.value ? k("rechnungswerk", "Angebot an Kunde senden") : k("rechnungswerk", "Rechnung an Kunde senden")), a = W(() => r.value ? k("rechnungswerk", "Das Angebot wird als PDF angehängt.") : k("rechnungswerk", "Die E-Rechnung wird als ZUGFeRD-PDF angehängt.")), o = t, c = X(null), l = s({
			to: "",
			subject: "",
			body: ""
		}), u = W(() => /\S+@\S+\.\S+/.test(l.to.trim()) && l.subject.trim() !== "");
		j(() => n.open, (e) => {
			if (!e) return;
			let t = n.invoice;
			l.to = t?.recipientEmail ?? "", r.value ? l.subject = t?.number ? k("rechnungswerk", "Angebot {number}", { number: t.number }) : k("rechnungswerk", "Ihr Angebot") : l.subject = t?.number ? k("rechnungswerk", "Rechnung {number}", { number: t.number }) : k("rechnungswerk", "Ihre Rechnung"), l.body = n.defaultBody, et(() => c.value?.focus());
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
			default: A(() => [Y("div", $f, [
				Y("h2", null, q(i.value), 1),
				Y("p", ep, q(a.value), 1),
				Y("label", tp, [Y("span", null, q(U(k)("rechnungswerk", "Empfänger-E-Mail")) + " *", 1), N(Y("input", {
					ref_key: "toInput",
					ref: c,
					"onUpdate:modelValue": n[0] ||= (e) => l.to = e,
					class: "input",
					type: "email"
				}, null, 512), [[J, l.to]])]),
				Y("label", np, [Y("span", null, q(U(k)("rechnungswerk", "Betreff")) + " *", 1), N(Y("input", {
					"onUpdate:modelValue": n[1] ||= (e) => l.subject = e,
					class: "input",
					type: "text"
				}, null, 512), [[J, l.subject]])]),
				Y("label", rp, [Y("span", null, q(U(k)("rechnungswerk", "Nachricht")), 1), N(Y("textarea", {
					"onUpdate:modelValue": n[2] ||= (e) => l.body = e,
					class: "input",
					rows: "6"
				}, null, 512), [[J, l.body]])]),
				Y("div", ip, [H(U(L), { onClick: n[3] ||= (e) => t.$emit("close") }, {
					default: A(() => [z(q(U(k)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), H(U(L), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					icon: A(() => [H(pd, { size: 20 })]),
					default: A(() => [z(" " + q(U(k)("rechnungswerk", "Senden")), 1)]),
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
			M.greeting = e.content ?? "";
		}
		function te(e) {
			M.extraText = e.content ?? "";
		}
		let ne = W(() => d.value ? "quotes" : "invoices"), re = W(() => d.value ? "quote-detail" : "invoice-detail"), y = X(null), b = X([hf()]), ie = X([]), S = X(""), C = X(""), w = X(!1), T = X(!1), E = X(!1), se = X(!1), ce = X(""), O = X(null), le = () => ({
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
		}), M = s(le()), P = [
			"reverse_charge",
			"intra_community",
			"export"
		], ue = W(() => (c.settings?.smallBusiness ?? !1) || P.includes(M.specialTaxCase)), F = W(() => {
			let e = Number.parseInt(String(M.paymentTermDays), 10);
			if (Number.isNaN(e)) return "";
			let t = (e) => /* @__PURE__ */ new Date(`${e}T12:00:00`);
			if (y.value?.dueDate) return t(y.value.dueDate).toLocaleDateString();
			let n = y.value?.issueDate ? t(y.value.issueDate) : /* @__PURE__ */ new Date();
			return n.setDate(n.getDate() + e), n.toLocaleDateString();
		}), I = W(() => y.value !== null && y.value.status !== "draft"), de = {
			draft: Tc,
			committed: _o,
			cancelled: Mc
		}, fe = {
			pending: Kc,
			confirmed: zc,
			unknown: $c,
			failed: Mc
		}, pe = (e) => de[e] ?? Tc, me = (e) => fe[e] ?? $c, he = W(() => y.value ? d.value && y.value.quoteStatus ? k("rechnungswerk", ou[y.value.quoteStatus] ?? y.value.status) : k("rechnungswerk", iu[y.value.status]) : ""), ge = W(() => y.value ? k("rechnungswerk", au[y.value.invoiceType]) : ""), _e = W(() => {
			let e = {
				pending: k("rechnungswerk", "DATEV: gesendet"),
				confirmed: k("rechnungswerk", "DATEV: bestätigt"),
				failed: k("rechnungswerk", "DATEV: abgelehnt"),
				unknown: k("rechnungswerk", "DATEV: Antwort prüfen")
			}, t = y.value?.datevStatus;
			return t ? e[t] ?? "" : "";
		}), ve = W(() => y.value ? y.value.relatedNumber ? k("rechnungswerk", "{type} zu Rechnung {number}", {
			type: ge.value,
			number: y.value.relatedNumber
		}) : ge.value : ""), ye = W(() => {
			if (d.value) return k("rechnungswerk", "Das Angebot erhält eine endgültige Angebotsnummer und ist danach unveränderbar. Fortfahren?");
			let e = k("rechnungswerk", "Die Rechnung erhält eine endgültige Nummer und ist danach unveränderbar. Korrektur nur per Storno. Fortfahren?"), t = c.settings;
			return t?.datevAutoSend && t.datevUploadMail && (e += "\n\n" + k("rechnungswerk", "Beim Festschreiben wird automatisch eine E-Rechnung an DATEV ({mail}) gesendet.", { mail: t.datevUploadMail })), e;
		}), be = W(() => {
			let e = (y.value?.greeting ?? l.defaultContent(m.value, "opening")).trim(), t = (y.value?.extraText ?? l.defaultContent(m.value, "closing")).trim(), n = d.value ? k("rechnungswerk", "anbei erhalten Sie unser Angebot als PDF.") : k("rechnungswerk", "anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).");
			return [e === "" ? n : e, t].filter((e) => e !== "").join("\n\n");
		}), xe = W(() => y.value ? y.value.number ?? k("rechnungswerk", "Entwurf") : d.value ? k("rechnungswerk", "Neues Angebot") : k("rechnungswerk", "Neue Rechnung")), B = W(() => yf(b.value.map((e) => ({
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
				Qe(e, k("rechnungswerk", "Laden fehlgeschlagen"));
			}
		}), j(() => [n.name, t.id], async ([, e]) => {
			let t = ++Se;
			try {
				if (!e) Ce(), await we(t);
				else {
					let n = y.value !== null && y.value.invoiceType === "quote" !== d.value;
					(y.value?.id !== Number(e) || n) && (Ce(), await Te(Number(e), t));
				}
			} catch (e) {
				Qe(e, k("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function Ce() {
			y.value = null, b.value = [hf()], ie.value = [], S.value = "", C.value = "", E.value = !1, se.value = !1, ce.value = "", O.value = null, Object.assign(M, le());
		}
		async function we(e = Se) {
			let t = c.settings;
			M.greeting = l.defaultContent(m.value, "opening"), M.extraText = l.defaultContent(m.value, "closing"), M.paymentTermDays = d.value ? "" : t?.defaultPaymentTermDays ?? "";
			let n = {
				person: "",
				phone: "",
				email: ""
			};
			try {
				n = await Mp();
			} catch {}
			e === Se && (M.sellerContactPerson = n.person || (t?.contactPerson ?? ""), M.sellerContactPhone = n.phone || (t?.contactPhone ?? ""), M.sellerContactEmail = n.email || (t?.contactEmail ?? ""));
		}
		async function Te(e, t = Se) {
			let n = await f.value.get(e);
			t === Se && (y.value = n, M.customerId = n.customerId ?? null, M.recipientName = n.recipientName ?? "", M.recipientEmail = n.recipientEmail ?? "", M.recipientAddressAddition = n.recipientAddressAddition ?? "", M.recipientAddress = n.recipientAddress ?? "", M.recipientPostalCode = n.recipientPostalCode ?? "", M.recipientCity = n.recipientCity ?? "", M.recipientCountry = n.recipientCountry ?? "DE", M.recipientVatId = n.recipientVatId ?? "", M.recipientContactId = n.recipientContactId ?? "", M.recipientContactPerson = n.recipientContactPerson ?? "", M.recipientPhone = n.recipientPhone ?? "", M.sellerContactPerson = n.sellerContactPerson ?? "", M.sellerContactPhone = n.sellerContactPhone ?? "", M.sellerContactEmail = n.sellerContactEmail ?? "", M.performancePeriodStart = n.performancePeriodStart ?? n.performanceDate ?? "", M.performancePeriodEnd = n.performancePeriodEnd ?? "", M.referenceNumber = n.referenceNumber ?? "", M.orderNumber = n.orderNumber ?? "", M.buyerReference = n.buyerReference ?? "", M.contractNumber = n.contractNumber ?? "", M.projectReference = n.projectReference ?? "", ie.value = [...n.notes ?? []], M.specialTaxCase = n.specialTaxCase ?? "", M.greeting = n.greeting ?? "", M.extraText = n.extraText ?? "", M.paymentTermDays = n.paymentTermDays ?? "", M.discountTerms = n.discountTerms ?? "", M.validUntil = n.validUntil ?? "", M.offerFreeform = n.offerFreeform ?? !1, b.value = n.items.length > 0 ? n.items.map(_f) : [hf()]);
		}
		function Ee() {
			ie.value.push("");
		}
		function De(e) {
			ie.value.splice(e, 1);
		}
		function Oe(e) {
			M.customerId = e.id, M.recipientName = e.name, M.recipientContactId = "", M.recipientEmail = e.email ?? "", M.recipientAddressAddition = e.addressAddition ?? "", M.recipientAddress = e.address ?? "", M.recipientPostalCode = e.postalCode ?? "", M.recipientCity = e.city ?? "", M.recipientCountry = e.country ?? "DE", M.recipientVatId = e.vatId ?? "", M.recipientContactPerson = e.contactPerson ?? "", M.recipientPhone = e.phone ?? "", e.defaultPaymentTermDays != null && (M.paymentTermDays = e.defaultPaymentTermDays);
		}
		function ke(e) {
			M.customerId = null, M.recipientName = e.name, M.recipientEmail = e.email, e.phone && (M.recipientPhone = e.phone), M.recipientAddressAddition = "", M.recipientAddress = e.address, M.recipientPostalCode = e.postalCode, M.recipientCity = e.city, e.country && (M.recipientCountry = e.country);
		}
		function je() {
			let e = M.performancePeriodStart, t = M.performancePeriodEnd, n = e && t ? {
				performanceDate: "",
				performancePeriodStart: e,
				performancePeriodEnd: t
			} : {
				performanceDate: e || t || "",
				performancePeriodStart: "",
				performancePeriodEnd: ""
			}, r = {
				...M,
				...n,
				paymentTermDays: M.paymentTermDays === "" ? null : Number(M.paymentTermDays),
				notes: ie.value.map((e) => e.trim()).filter((e) => e !== ""),
				items: b.value.filter((e) => e.name.trim() !== "").map((e) => ({
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
			return d.value ? (r.validUntil = M.validUntil === "" ? null : M.validUntil, r.offerFreeform = M.offerFreeform, r.paymentTermDays = null, r.discountTerms = null) : (delete r.validUntil, delete r.offerFreeform), r;
		}
		async function Ne() {
			S.value = "", w.value = !0;
			try {
				let e;
				return y.value ? e = await f.value.update(y.value.id, je()) : (e = await f.value.create(je()), r.replace({
					name: re.value,
					params: { id: String(e.id) }
				})), y.value = e, e;
			} catch (e) {
				return Qe(e, k("rechnungswerk", "Speichern fehlgeschlagen")), null;
			} finally {
				w.value = !1;
			}
		}
		async function Pe() {
			let e = await Ne();
			e && (ce.value = d.value ? _p(e.id) : zl(e.id), se.value = !0);
		}
		function Fe(e) {
			e || (se.value = !1, ce.value = "");
		}
		function Ie() {
			O.value = "finalize";
		}
		function Le() {
			O.value = "delete";
		}
		function Re() {
			O.value = "cancel";
		}
		function ze() {
			O.value = "convert";
		}
		function G() {
			O.value = "revise";
		}
		let Be = W(() => d.value && y.value?.status === "committed" && !["converted", "superseded"].includes(y.value?.quoteStatus ?? "")), Ve = W(() => d.value && y.value?.status === "committed" && [
			"open",
			"expired",
			"accepted"
		].includes(y.value?.quoteStatus ?? "")), He = W(() => d.value && y.value?.status === "committed" && ["open", "expired"].includes(y.value?.quoteStatus ?? ""));
		function Ue() {
			y.value && (d.value ? vp(y.value.id) : Bl(y.value.id));
		}
		async function We() {
			O.value = null;
			let e = await Ne();
			if (e) {
				w.value = !0;
				try {
					let t = await f.value.commit(e.id);
					if (y.value = t, C.value = "", d.value) C.value = k("rechnungswerk", "Angebot festgeschrieben.");
					else {
						let e = t.datevMailSent;
						e === !0 ? C.value = k("rechnungswerk", "Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.") : e === null && (S.value = k("rechnungswerk", "Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
					}
				} catch (e) {
					Qe(e, k("rechnungswerk", "Festschreiben fehlgeschlagen"));
				} finally {
					w.value = !1;
				}
			}
		}
		async function Ge() {
			if (y.value) {
				w.value = !0, S.value = "";
				try {
					y.value = await a.accept(y.value.id), C.value = k("rechnungswerk", "Angebot als angenommen markiert.");
				} catch (e) {
					Qe(e, k("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					w.value = !1;
				}
			}
		}
		async function Ke() {
			if (y.value) {
				w.value = !0, S.value = "";
				try {
					y.value = await a.reject(y.value.id), C.value = k("rechnungswerk", "Angebot als abgelehnt markiert.");
				} catch (e) {
					Qe(e, k("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					w.value = !1;
				}
			}
		}
		async function qe() {
			if (O.value = null, y.value) {
				w.value = !0, S.value = "";
				try {
					let e = await a.convert(y.value.id);
					r.push({
						name: "invoice-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					Qe(e, k("rechnungswerk", "Übernahme fehlgeschlagen"));
				} finally {
					w.value = !1;
				}
			}
		}
		async function Je() {
			if (O.value = null, y.value) {
				w.value = !0, S.value = "";
				try {
					let e = await a.revise(y.value.id);
					r.push({
						name: "quote-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					Qe(e, k("rechnungswerk", "Revidieren fehlgeschlagen"));
				} finally {
					w.value = !1;
				}
			}
		}
		async function Ye(e) {
			if (y.value) {
				T.value = !0, S.value = "";
				try {
					d.value ? (await yp(y.value.id, e), E.value = !1, C.value = k("rechnungswerk", "Angebot an {to} gesendet.", { to: e.to })) : (await Vl(y.value.id, e), E.value = !1, C.value = k("rechnungswerk", "Rechnung an {to} gesendet.", { to: e.to }));
				} catch (e) {
					Qe(e, k("rechnungswerk", "Versand fehlgeschlagen"));
				} finally {
					T.value = !1;
				}
			}
		}
		async function Xe() {
			if (O.value = null, !y.value) {
				Q();
				return;
			}
			w.value = !0;
			try {
				await f.value.remove(y.value.id), Q();
			} catch (e) {
				Qe(e, k("rechnungswerk", "Löschen fehlgeschlagen"));
			} finally {
				w.value = !1;
			}
		}
		async function Ze() {
			if (O.value = null, y.value) {
				w.value = !0;
				try {
					let e = await i.cancel(y.value.id), t = e.datevMailSent;
					await Te(e.id), C.value = "", t === !0 ? C.value = k("rechnungswerk", "Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.") : t === null && (S.value = k("rechnungswerk", "Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
				} catch (e) {
					Qe(e, k("rechnungswerk", "Stornieren fehlgeschlagen"));
				} finally {
					w.value = !1;
				}
			}
		}
		function Q() {
			r.push({ name: ne.value });
		}
		function Qe(e, t) {
			S.value = e.message ?? t, console.error("[rechnungswerk] editor:", e);
		}
		return (e, t) => {
			let n = ae("tooltip");
			return g(), K("div", Pp, [
				Y("div", Fp, [H(U(Et), null, {
					default: A(() => [H(U(wt), {
						name: d.value ? U(k)("rechnungswerk", "Angebote") : U(k)("rechnungswerk", "Rechnungen"),
						to: { name: ne.value }
					}, null, 8, ["name", "to"]), H(U(wt), { name: xe.value }, null, 8, ["name"])]),
					_: 1
				}), y.value ? (g(), K("span", Ip, [
					Y("span", Lp, [(g(), V(oe(pe(y.value.status)), {
						size: 18,
						class: Z(["rw-sicon", `rw-sicon--${y.value.status}`])
					}, null, 8, ["class"])), z(" " + q(he.value), 1)]),
					!d.value && y.value.invoiceType !== "invoice" ? N((g(), K("span", Rp, [z(q(ge.value), 1)])), [[n, ve.value]]) : R("", !0),
					d.value && y.value.relatedQuoteNumber ? (g(), K("span", zp, q(U(k)("rechnungswerk", "Revision von {number}", { number: y.value.relatedQuoteNumber })), 1)) : R("", !0),
					y.value.datevStatus && _e.value ? (g(), K("span", {
						key: 2,
						class: "rw-status-tag",
						title: U(k)("rechnungswerk", "DATEV-Übergabe")
					}, [(g(), V(oe(me(y.value.datevStatus)), {
						size: 18,
						class: Z(["rw-sicon", `rw-sicon--datev-${y.value.datevStatus}`])
					}, null, 8, ["class"])), z(" " + q(_e.value), 1)], 8, Bp)) : R("", !0)
				])) : R("", !0)]),
				S.value ? (g(), V(U(pt), {
					key: 0,
					type: "error",
					text: S.value
				}, null, 8, ["text"])) : R("", !0),
				C.value ? (g(), V(U(pt), {
					key: 1,
					type: "success",
					text: C.value
				}, null, 8, ["text"])) : R("", !0),
				I.value ? (g(), V(U(pt), {
					key: 2,
					type: "info",
					text: d.value ? U(k)("rechnungswerk", "Dieses Angebot ist festgeschrieben und kann nicht mehr geändert werden.") : U(k)("rechnungswerk", "Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.")
				}, null, 8, ["text"])) : R("", !0),
				!d.value && y.value?.documentBackfilled ? (g(), V(U(pt), {
					key: 3,
					type: "info",
					text: U(k)("rechnungswerk", "Dieser Beleg wurde nicht beim Festschreiben abgelegt, sondern später aus dem Datensatz erzeugt. Beträge, Positionen und Steuerausweis stimmen; Firmendaten und Layout entsprechen dem heutigen Stand, nicht dem von damals.")
				}, null, 8, ["text"])) : R("", !0),
				Y("section", Vp, [
					Y("h3", null, q(d.value ? U(k)("rechnungswerk", "Angebotsdaten") : U(k)("rechnungswerk", "Rechnungsdaten")), 1),
					Y("div", Hp, [
						Y("label", Up, [Y("span", null, q(d.value ? U(k)("rechnungswerk", "Angebotsnummer") : U(k)("rechnungswerk", "Rechnungsnummer")), 1), Y("input", {
							class: "rw-input",
							type: "text",
							readonly: "",
							value: y.value?.number ?? U(k)("rechnungswerk", "(wird vergeben)")
						}, null, 8, Wp)]),
						Y("label", Gp, [Y("span", null, q(d.value ? U(k)("rechnungswerk", "Geplanter Leistungszeitraum (optional)") : U(k)("rechnungswerk", "Leistungsdatum /-zeitraum")), 1), N(Y("input", {
							"onUpdate:modelValue": t[0] ||= (e) => M.performancePeriodStart = e,
							class: "rw-input",
							type: "date",
							readonly: I.value
						}, null, 8, Kp), [[J, M.performancePeriodStart]])]),
						Y("label", qp, [Y("span", null, q(U(k)("rechnungswerk", "bis (optional)")), 1), N(Y("input", {
							"onUpdate:modelValue": t[1] ||= (e) => M.performancePeriodEnd = e,
							class: "rw-input",
							type: "date",
							readonly: I.value
						}, null, 8, Jp), [[J, M.performancePeriodEnd]])])
					]),
					Y("p", Yp, q(d.value ? U(k)("rechnungswerk", "Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.") : U(k)("rechnungswerk", "Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.")), 1),
					Y("details", Xp, [
						Y("summary", null, q(d.value ? U(k)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)") : U(k)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)")), 1),
						Y("div", Zp, [
							Y("label", Qp, [Y("span", null, q(U(k)("rechnungswerk", "Referenznummer")), 1), N(Y("input", {
								"onUpdate:modelValue": t[2] ||= (e) => M.referenceNumber = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, $p), [[J, M.referenceNumber]])]),
							Y("label", em, [Y("span", null, q(U(k)("rechnungswerk", "Bestellnummer")), 1), N(Y("input", {
								"onUpdate:modelValue": t[3] ||= (e) => M.orderNumber = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, tm), [[J, M.orderNumber]])]),
							d.value ? (g(), K("span", im)) : (g(), K("label", nm, [Y("span", null, q(U(k)("rechnungswerk", "Käuferreferenz / Leitweg-ID (BT-10)")), 1), N(Y("input", {
								"onUpdate:modelValue": t[4] ||= (e) => M.buyerReference = e,
								class: "rw-input",
								type: "text",
								readonly: I.value,
								placeholder: U(k)("rechnungswerk", "nur für öffentliche Auftraggeber")
							}, null, 8, rm), [[J, M.buyerReference]])]))
						]),
						Y("div", am, [
							Y("label", om, [Y("span", null, q(U(k)("rechnungswerk", "Vertragsnummer (BT-12)")), 1), N(Y("input", {
								"onUpdate:modelValue": t[5] ||= (e) => M.contractNumber = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, sm), [[J, M.contractNumber]])]),
							Y("label", cm, [Y("span", null, q(U(k)("rechnungswerk", "Objekt-/Projektkennung (BT-18)")), 1), N(Y("input", {
								"onUpdate:modelValue": t[6] ||= (e) => M.projectReference = e,
								class: "rw-input",
								type: "text",
								readonly: I.value
							}, null, 8, lm), [[J, M.projectReference]])]),
							t[36] ||= Y("span", {
								class: "rw-field",
								"aria-hidden": "true"
							}, null, -1)
						])
					])
				]),
				Y("section", um, [
					Y("h3", null, q(U(k)("rechnungswerk", "Empfänger")), 1),
					I.value ? R("", !0) : (g(), K("div", dm, [Y("label", fm, [
						Y("span", null, q(U(k)("rechnungswerk", "Kunde übernehmen")), 1),
						H(of, { onSelect: Oe }),
						Y("span", pm, q(U(k)("rechnungswerk", "Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.")), 1)
					])])),
					Y("div", mm, [Y("label", hm, [Y("span", null, q(U(k)("rechnungswerk", "Name")), 1), I.value ? (g(), K("input", {
						key: 1,
						class: "rw-input",
						type: "text",
						readonly: "",
						value: M.recipientName
					}, null, 8, gm)) : (g(), V(Hd, {
						key: 0,
						modelValue: M.recipientName,
						"onUpdate:modelValue": t[7] ||= (e) => M.recipientName = e,
						onSelect: ke
					}, null, 8, ["modelValue"]))]), Y("label", _m, [Y("span", null, q(U(k)("rechnungswerk", "E-Mail")), 1), N(Y("input", {
						"onUpdate:modelValue": t[8] ||= (e) => M.recipientEmail = e,
						class: "rw-input",
						type: "email",
						readonly: I.value
					}, null, 8, vm), [[J, M.recipientEmail]])])]),
					Y("div", ym, [Y("label", bm, [
						Y("span", null, q(U(k)("rechnungswerk", "Adresszusatz")), 1),
						N(Y("input", {
							"onUpdate:modelValue": t[9] ||= (e) => M.recipientAddressAddition = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, xm), [[J, M.recipientAddressAddition]]),
						Y("span", Sm, q(U(k)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					])]),
					Y("div", Cm, [
						Y("label", wm, [Y("span", null, q(U(k)("rechnungswerk", "Straße")), 1), N(Y("input", {
							"onUpdate:modelValue": t[10] ||= (e) => M.recipientAddress = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Tm), [[J, M.recipientAddress]])]),
						Y("label", Em, [Y("span", null, q(U(k)("rechnungswerk", "PLZ")), 1), N(Y("input", {
							"onUpdate:modelValue": t[11] ||= (e) => M.recipientPostalCode = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Dm), [[J, M.recipientPostalCode]])]),
						Y("label", Om, [Y("span", null, q(U(k)("rechnungswerk", "Ort")), 1), N(Y("input", {
							"onUpdate:modelValue": t[12] ||= (e) => M.recipientCity = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, km), [[J, M.recipientCity]])]),
						Y("label", Am, [Y("span", null, q(U(k)("rechnungswerk", "Land")), 1), H(Jd, {
							modelValue: M.recipientCountry,
							"onUpdate:modelValue": t[13] ||= (e) => M.recipientCountry = e,
							disabled: I.value
						}, null, 8, ["modelValue", "disabled"])])
					]),
					Y("div", jm, [
						Y("label", Mm, [Y("span", null, q(U(k)("rechnungswerk", "USt-IdNr. (optional)")), 1), N(Y("input", {
							"onUpdate:modelValue": t[14] ||= (e) => M.recipientVatId = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Nm), [[J, M.recipientVatId]])]),
						Y("label", Pm, [Y("span", null, q(U(k)("rechnungswerk", "Ansprechpartner (optional)")), 1), N(Y("input", {
							"onUpdate:modelValue": t[15] ||= (e) => M.recipientContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Fm), [[J, M.recipientContactPerson]])]),
						Y("label", Im, [Y("span", null, q(U(k)("rechnungswerk", "Telefon (optional)")), 1), N(Y("input", {
							"onUpdate:modelValue": t[16] ||= (e) => M.recipientPhone = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Lm), [[J, M.recipientPhone]])])
					])
				]),
				Y("section", Rm, [
					Y("h3", null, q(d.value ? U(k)("rechnungswerk", "Ansprechpartner (für dieses Angebot)") : U(k)("rechnungswerk", "Ansprechpartner (für diese Rechnung)")), 1),
					Y("div", zm, [
						Y("label", Bm, [Y("span", null, q(U(k)("rechnungswerk", "Name")), 1), N(Y("input", {
							"onUpdate:modelValue": t[17] ||= (e) => M.sellerContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Vm), [[J, M.sellerContactPerson]])]),
						Y("label", Hm, [Y("span", null, q(U(k)("rechnungswerk", "Telefon")), 1), N(Y("input", {
							"onUpdate:modelValue": t[18] ||= (e) => M.sellerContactPhone = e,
							class: "rw-input",
							type: "text",
							readonly: I.value
						}, null, 8, Um), [[J, M.sellerContactPhone]])]),
						Y("label", Wm, [Y("span", null, q(U(k)("rechnungswerk", "E-Mail")), 1), N(Y("input", {
							"onUpdate:modelValue": t[19] ||= (e) => M.sellerContactEmail = e,
							class: "rw-input",
							type: "email",
							readonly: I.value
						}, null, 8, Gm), [[J, M.sellerContactEmail]])])
					]),
					Y("p", Km, q(d.value ? U(k)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.") : U(k)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.")), 1)
				]),
				Y("section", qm, [Y("div", Jm, [Y("h3", null, q(U(k)("rechnungswerk", "Anrede & Einleitung")), 1), !I.value && h.value.length > 0 ? (g(), V(U(ft), {
					key: 0,
					menuName: U(k)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: A(() => [H(no, { size: 18 })]),
					default: A(() => [(g(!0), K(D, null, u(h.value, (e) => (g(), V(U(Tt), {
						key: e.id,
						onClick: (t) => v(e)
					}, {
						default: A(() => [z(q(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : R("", !0)]), Y("label", Ym, [Y("span", null, q(U(k)("rechnungswerk", "Anrede & Einleitung")), 1), N(Y("textarea", {
					"onUpdate:modelValue": t[20] ||= (e) => M.greeting = e,
					class: "rw-input",
					rows: "3",
					readonly: I.value,
					placeholder: U(k)("rechnungswerk", "Anrede und Einleitung – Vorgabe aus den Textbausteinen")
				}, null, 8, Xm), [[J, M.greeting]])])]),
				Y("section", Zm, [Y("h3", null, q(U(k)("rechnungswerk", "Positionen")), 1), H(Yf, {
					items: b.value,
					"onUpdate:items": t[21] ||= (e) => b.value = e,
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
					Y("h3", null, q(U(k)("rechnungswerk", "Steuer & Summen")), 1),
					Y("div", $m, [Y("label", eh, [Y("span", null, q(U(k)("rechnungswerk", "Steuerfall")), 1), N(Y("select", {
						"onUpdate:modelValue": t[22] ||= (e) => M.specialTaxCase = e,
						class: "rw-input",
						disabled: I.value
					}, [
						Y("option", nh, q(U(k)("rechnungswerk", "Regelbesteuerung")), 1),
						Y("option", rh, q(U(k)("rechnungswerk", "Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)")), 1),
						Y("option", ih, q(U(k)("rechnungswerk", "Innergemeinschaftliche Lieferung (steuerfrei)")), 1),
						Y("option", ah, q(U(k)("rechnungswerk", "Ausfuhrlieferung Drittland (steuerfrei)")), 1)
					], 8, th), [[x, M.specialTaxCase]])]), t[37] ||= Y("span", {
						class: "rw-field",
						"aria-hidden": "true"
					}, null, -1)]),
					M.specialTaxCase === "" ? R("", !0) : (g(), V(U(pt), {
						key: 0,
						type: "info",
						text: U(k)("rechnungswerk", "Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.")
					}, null, 8, ["text"])),
					Y("div", oh, [Y("div", sh, [
						Y("div", ch, [Y("span", null, q(U(k)("rechnungswerk", "Zwischensumme (netto)")), 1), Y("strong", null, q(U(gu)(B.value.subtotalCents)), 1)]),
						(g(!0), K(D, null, u(B.value.taxBreakdown, (e) => (g(), K("div", {
							key: e.rateBp,
							class: "rw-kpi-row rw-kpi-row--muted"
						}, [Y("span", null, q(U(k)("rechnungswerk", "USt {rate}", { rate: U(_u)(e.rateBp) })) + " (" + q(U(gu)(e.netCents)) + ")", 1), Y("span", null, q(U(gu)(e.taxCents)), 1)]))), 128)),
						Y("div", lh, [Y("span", null, q(U(k)("rechnungswerk", "Gesamt (brutto)")), 1), Y("strong", null, q(U(gu)(B.value.totalCents)), 1)])
					])])
				]),
				d.value ? (g(), K("section", vh, [
					Y("h3", null, q(U(k)("rechnungswerk", "Gültigkeit")), 1),
					Y("div", yh, [Y("label", bh, [Y("span", null, q(U(k)("rechnungswerk", "Gültig bis")), 1), N(Y("input", {
						"onUpdate:modelValue": t[25] ||= (e) => M.validUntil = e,
						class: "rw-input",
						type: "date",
						readonly: I.value
					}, null, 8, xh), [[J, M.validUntil]])]), Y("label", Sh, [Y("span", Ch, [N(Y("input", {
						"onUpdate:modelValue": t[26] ||= (e) => M.offerFreeform = e,
						type: "checkbox",
						disabled: I.value
					}, null, 8, wh), [[ee, M.offerFreeform]]), z(" " + q(U(k)("rechnungswerk", "Freibleibendes Angebot (unverbindlich)")), 1)])])]),
					Y("p", Th, q(U(k)("rechnungswerk", "„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.")), 1)
				])) : (g(), K("section", uh, [Y("h3", null, q(U(k)("rechnungswerk", "Zahlungsbedingungen")), 1), Y("div", dh, [
					Y("label", fh, [Y("span", null, q(U(k)("rechnungswerk", "Zahlungsziel (Tage)")), 1), N(Y("input", {
						"onUpdate:modelValue": t[23] ||= (e) => M.paymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						readonly: I.value
					}, null, 8, ph), [[J, M.paymentTermDays]])]),
					Y("label", mh, [Y("span", null, q(U(k)("rechnungswerk", "Fällig am")), 1), Y("input", {
						class: "rw-input",
						type: "text",
						readonly: "",
						value: F.value || "—"
					}, null, 8, hh)]),
					Y("label", gh, [Y("span", null, q(U(k)("rechnungswerk", "Skonto")), 1), N(Y("input", {
						"onUpdate:modelValue": t[24] ||= (e) => M.discountTerms = e,
						class: "rw-input",
						type: "text",
						readonly: I.value,
						placeholder: U(k)("rechnungswerk", "z. B. 2 % bei Zahlung bis\xA0…")
					}, null, 8, _h), [[J, M.discountTerms]])])
				])])),
				Y("section", Eh, [Y("div", Dh, [Y("h3", null, q(U(k)("rechnungswerk", "Schlusstext")), 1), !I.value && _.value.length > 0 ? (g(), V(U(ft), {
					key: 0,
					menuName: U(k)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: A(() => [H(no, { size: 18 })]),
					default: A(() => [(g(!0), K(D, null, u(_.value, (e) => (g(), V(U(Tt), {
						key: e.id,
						onClick: (t) => te(e)
					}, {
						default: A(() => [z(q(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : R("", !0)]), Y("label", Oh, [Y("span", null, q(U(k)("rechnungswerk", "Schlusstext / Anmerkungen")), 1), N(Y("textarea", {
					"onUpdate:modelValue": t[27] ||= (e) => M.extraText = e,
					class: "rw-input",
					rows: "3",
					readonly: I.value,
					placeholder: U(k)("rechnungswerk", "Schlusstext – Vorgabe aus den Textbausteinen")
				}, null, 8, kh), [[J, M.extraText]])])]),
				!I.value || ie.value.length > 0 ? (g(), K("section", Ah, [
					Y("h3", null, q(d.value ? U(k)("rechnungswerk", "Notizen / Hinweise auf dem Angebot") : U(k)("rechnungswerk", "Notizen / Hinweise auf der Rechnung")), 1),
					(g(!0), K(D, null, u(ie.value, (e, t) => (g(), K("div", {
						key: t,
						class: "rw-note-row"
					}, [N(Y("input", {
						"onUpdate:modelValue": (e) => ie.value[t] = e,
						class: "rw-input",
						type: "text",
						readonly: I.value,
						"aria-label": U(k)("rechnungswerk", "Notiz {index}", { index: t + 1 })
					}, null, 8, jh), [[J, ie.value[t]]]), I.value ? R("", !0) : (g(), V(U(L), {
						key: 0,
						variant: "tertiary",
						"aria-label": U(k)("rechnungswerk", "Notiz entfernen"),
						onClick: (e) => De(t)
					}, {
						icon: A(() => [H(od, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"]))]))), 128)),
					I.value ? R("", !0) : (g(), V(U(L), {
						key: 0,
						variant: "tertiary",
						onClick: Ee
					}, {
						icon: A(() => [H(ic, { size: 20 })]),
						default: A(() => [z(" " + q(U(k)("rechnungswerk", "Notiz hinzufügen")), 1)]),
						_: 1
					})),
					Y("p", Mh, q(d.value ? U(k)("rechnungswerk", "Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.") : U(k)("rechnungswerk", "Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.")), 1)
				])) : R("", !0),
				Y("div", Nh, [I.value ? y.value ? (g(), K(D, { key: 1 }, [
					H(U(L), { onClick: Ue }, {
						icon: A(() => [H(dc, { size: 20 })]),
						default: A(() => [z(" " + q(U(k)("rechnungswerk", "PDF herunterladen")), 1)]),
						_: 1
					}),
					H(U(L), {
						variant: d.value ? "secondary" : "primary",
						disabled: T.value,
						onClick: t[29] ||= (e) => E.value = !0
					}, {
						icon: A(() => [H(pd, { size: 20 })]),
						default: A(() => [z(" " + q(U(k)("rechnungswerk", "An Kunde senden")), 1)]),
						_: 1
					}, 8, ["variant", "disabled"]),
					!d.value && y.value.status === "committed" ? (g(), V(U(L), {
						key: 0,
						variant: "error",
						disabled: w.value,
						onClick: Re
					}, {
						default: A(() => [z(q(U(k)("rechnungswerk", "Stornieren")), 1)]),
						_: 1
					}, 8, ["disabled"])) : R("", !0),
					d.value ? (g(), K(D, { key: 1 }, [
						He.value ? (g(), V(U(L), {
							key: 0,
							disabled: w.value,
							onClick: Ge
						}, {
							icon: A(() => [H(bl, { size: 20 })]),
							default: A(() => [z(" " + q(U(k)("rechnungswerk", "Annehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0),
						He.value ? (g(), V(U(L), {
							key: 1,
							disabled: w.value,
							onClick: Ke
						}, {
							icon: A(() => [H(Dl, { size: 20 })]),
							default: A(() => [z(" " + q(U(k)("rechnungswerk", "Ablehnen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0),
						Be.value ? (g(), V(U(L), {
							key: 2,
							disabled: w.value,
							onClick: G
						}, {
							icon: A(() => [H(Pd, { size: 20 })]),
							default: A(() => [z(" " + q(U(k)("rechnungswerk", "Revidieren")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0),
						Ve.value ? (g(), V(U(L), {
							key: 3,
							variant: "primary",
							disabled: w.value,
							onClick: ze
						}, {
							icon: A(() => [H(Dd, { size: 20 })]),
							default: A(() => [z(" " + q(U(k)("rechnungswerk", "In Rechnung übernehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : R("", !0)
					], 64)) : R("", !0)
				], 64)) : R("", !0) : (g(), K(D, { key: 0 }, [
					H(U(L), {
						disabled: w.value,
						onClick: t[28] ||= (e) => Ne()
					}, {
						default: A(() => [z(q(U(k)("rechnungswerk", "Speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					H(U(L), {
						disabled: w.value,
						onClick: Pe
					}, {
						icon: A(() => [H(bd, { size: 20 })]),
						default: A(() => [z(" " + q(U(k)("rechnungswerk", "Vorschau")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					H(U(L), {
						variant: "primary",
						disabled: w.value,
						onClick: Ie
					}, {
						icon: A(() => [H(_o, { size: 20 })]),
						default: A(() => [z(" " + q(U(k)("rechnungswerk", "Festschreiben")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					y.value ? (g(), V(U(L), {
						key: 0,
						variant: "error",
						disabled: w.value,
						onClick: Le
					}, {
						default: A(() => [z(q(U(k)("rechnungswerk", "Löschen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : R("", !0)
				], 64))]),
				H(Qf, {
					open: O.value === "finalize",
					name: d.value ? U(k)("rechnungswerk", "Angebot festschreiben") : U(k)("rechnungswerk", "Rechnung festschreiben"),
					message: ye.value,
					confirmLabel: U(k)("rechnungswerk", "Festschreiben"),
					onClose: t[30] ||= (e) => O.value = null,
					onConfirm: We
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				H(Qf, {
					open: O.value === "delete",
					name: d.value ? U(k)("rechnungswerk", "Angebot löschen") : U(k)("rechnungswerk", "Entwurf löschen"),
					message: d.value ? U(k)("rechnungswerk", "Diesen Angebots-Entwurf wirklich löschen?") : U(k)("rechnungswerk", "Diesen Entwurf wirklich löschen?"),
					confirmLabel: U(k)("rechnungswerk", "Löschen"),
					destructive: "",
					onClose: t[31] ||= (e) => O.value = null,
					onConfirm: Xe
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				H(Qf, {
					open: O.value === "cancel",
					name: U(k)("rechnungswerk", "Rechnung stornieren"),
					message: U(k)("rechnungswerk", "Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?"),
					confirmLabel: U(k)("rechnungswerk", "Stornorechnung erstellen"),
					destructive: "",
					onClose: t[32] ||= (e) => O.value = null,
					onConfirm: Ze
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				H(Qf, {
					open: O.value === "convert",
					name: U(k)("rechnungswerk", "In Rechnung übernehmen"),
					message: U(k)("rechnungswerk", "Aus diesem Angebot wird ein neuer Rechnungs-Entwurf mit denselben Positionen erstellt. Das Angebot wird als „übernommen“ markiert. Fortfahren?"),
					confirmLabel: U(k)("rechnungswerk", "Rechnung erstellen"),
					onClose: t[33] ||= (e) => O.value = null,
					onConfirm: qe
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				H(Qf, {
					open: O.value === "revise",
					name: U(k)("rechnungswerk", "Angebot revidieren"),
					message: U(k)("rechnungswerk", "Es wird eine überarbeitbare Kopie als neue Angebots-Revision erstellt. Beim Festschreiben erhält sie eine Revisionsnummer (z. B. AN-…-1) und dieses Angebot wird als „revidiert“ markiert. Fortfahren?"),
					confirmLabel: U(k)("rechnungswerk", "Revision erstellen"),
					onClose: t[34] ||= (e) => O.value = null,
					onConfirm: Je
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				H(ap, {
					open: E.value,
					invoice: y.value,
					defaultBody: be.value,
					saving: T.value,
					kind: d.value ? "quote" : "invoice",
					onClose: t[35] ||= (e) => E.value = !1,
					onSend: Ye
				}, null, 8, [
					"open",
					"invoice",
					"defaultBody",
					"saving",
					"kind"
				]),
				H(U(vt), {
					open: se.value,
					name: U(k)("rechnungswerk", "Vorschau (Entwurf)"),
					size: "large",
					"onUpdate:open": Fe
				}, {
					default: A(() => [ce.value ? (g(), K("iframe", {
						key: 0,
						src: ce.value,
						class: "preview-frame",
						title: U(k)("rechnungswerk", "Vorschau (Entwurf)")
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
		}, f = (e) => e ? d[e] ?? Tc : Tc, m = (e) => e ? k("rechnungswerk", ou[e] ?? e) : "";
		function h(e) {
			return e ? (e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e)).toLocaleDateString() : "—";
		}
		p(() => {
			n.fetchAll().catch((e) => {
				r.value = e.message ?? k("rechnungswerk", "Laden fehlgeschlagen");
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
		async function te(e) {
			r.value = "";
			try {
				let r = await n.convert(e);
				t.push({
					name: "invoice-detail",
					params: { id: String(r.id) }
				});
			} catch (e) {
				r.value = e.message ?? k("rechnungswerk", "Übernahme fehlgeschlagen");
			}
		}
		return (e, t) => (g(), K("div", Uh, [
			Y("div", Wh, [Y("h2", null, q(U(k)("rechnungswerk", "Angebote")), 1), H(U(L), {
				variant: "primary",
				onClick: _
			}, {
				icon: A(() => [H(ic, { size: 20 })]),
				default: A(() => [z(" " + q(U(k)("rechnungswerk", "Neues Angebot")), 1)]),
				_: 1
			})]),
			r.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: r.value
			}, null, 8, ["text"])) : R("", !0),
			!U(n).loading && U(n).quotes.length === 0 ? (g(), V(U(St), {
				key: 1,
				name: U(k)("rechnungswerk", "Noch keine Angebote"),
				description: U(k)("rechnungswerk", "Lege dein erstes Angebot an.")
			}, {
				icon: A(() => [H(Oa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : U(n).quotes.length > 0 ? (g(), K("div", Gh, [Y("div", Kh, [(g(), K(D, null, u(i, (e) => Y("button", {
				key: e.key,
				class: Z(["rw-chip", { "rw-chip--active": a.value === e.key }]),
				onClick: (t) => a.value = e.key
			}, [z(q(U(k)("rechnungswerk", e.label)) + " ", 1), Y("span", Jh, q(s.value[e.key]), 1)], 10, qh)), 64))]), Y("div", Yh, [Y("table", Xh, [Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(k)("rechnungswerk", "Status")), 1),
				Y("th", null, q(U(k)("rechnungswerk", "Nummer")), 1),
				Y("th", null, q(U(k)("rechnungswerk", "Empfänger")), 1),
				Y("th", null, q(U(k)("rechnungswerk", "Datum")), 1),
				Y("th", null, q(U(k)("rechnungswerk", "Gültig bis")), 1),
				Y("th", Zh, q(U(k)("rechnungswerk", "Brutto")), 1),
				t[0] ||= Y("th", { class: "rw-col-actions" }, null, -1)
			])]), Y("tbody", null, [(g(!0), K(D, null, u(c.value, (e) => (g(), K("tr", {
				key: e.id,
				class: Z(["rw-row-clickable", { "rw-row--overdue": e.quoteStatus === "expired" }]),
				onClick: (t) => ee(e.id)
			}, [
				Y("td", null, [Y("span", $h, [(g(), V(oe(f(e.quoteStatus)), {
					size: 20,
					class: Z(["rw-sicon", `rw-qsicon--${e.quoteStatus}`]),
					title: m(e.quoteStatus)
				}, null, 8, ["class", "title"])), Y("span", eg, q(m(e.quoteStatus)), 1)])]),
				Y("td", null, q(e.number ?? U(k)("rechnungswerk", "(Entwurf)")), 1),
				Y("td", null, q(e.recipientName ?? "—"), 1),
				Y("td", null, q(h(e.issueDate ?? e.createdAt)), 1),
				Y("td", null, [Y("span", { class: Z({ "rw-amt-overdue": e.quoteStatus === "expired" }) }, q(h(e.validUntil)), 3)]),
				Y("td", tg, q(U(gu)(e.totalCents)), 1),
				Y("td", ng, [Y("div", rg, [l(e) ? (g(), V(U(L), {
					key: 0,
					variant: "tertiary",
					"aria-label": U(k)("rechnungswerk", "In Rechnung übernehmen"),
					title: U(k)("rechnungswerk", "In Rechnung übernehmen"),
					onClick: F((t) => te(e.id), ["stop"])
				}, {
					icon: A(() => [H(Dd, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])) : R("", !0), e.status === "draft" ? R("", !0) : (g(), V(U(L), {
					key: 1,
					variant: "tertiary",
					"aria-label": U(k)("rechnungswerk", "PDF herunterladen"),
					title: U(k)("rechnungswerk", "PDF herunterladen"),
					onClick: F((t) => v(e.id), ["stop"])
				}, {
					icon: A(() => [H(dc, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				]))])])
			], 10, Qh))), 128))])])])])) : R("", !0)
		]));
	}
}), [["__scopeId", "data-v-62bdd46f"]]), ag = { class: "product-modal" }, og = { class: "field" }, sg = { class: "field" }, cg = { class: "field-row" }, lg = { class: "field" }, ug = ["value"], dg = { class: "field" }, fg = { class: "field" }, pg = ["value"], mg = { class: "field" }, hg = ["placeholder"], gg = { class: "hint" }, _g = { class: "actions" }, vg = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
		let l = W(() => n.product ? k("rechnungswerk", "Produkt bearbeiten") : k("rechnungswerk", "Produkt anlegen")), d = W(() => a.name.trim() !== "");
		j(() => n.open, (e) => {
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
			default: A(() => [Y("div", ag, [
				Y("h2", null, q(l.value), 1),
				Y("label", og, [Y("span", null, q(U(k)("rechnungswerk", "Name")) + " *", 1), N(Y("input", {
					ref_key: "nameInput",
					ref: i,
					"onUpdate:modelValue": n[0] ||= (e) => a.name = e,
					class: "input",
					type: "text"
				}, null, 512), [[J, a.name]])]),
				Y("label", sg, [Y("span", null, q(U(k)("rechnungswerk", "Beschreibung")), 1), N(Y("textarea", {
					"onUpdate:modelValue": n[1] ||= (e) => a.description = e,
					class: "input",
					rows: "2"
				}, null, 512), [[J, a.description]])]),
				Y("div", cg, [
					Y("label", lg, [Y("span", null, q(U(k)("rechnungswerk", "Einheit")), 1), N(Y("select", {
						"onUpdate:modelValue": n[2] ||= (e) => a.defaultUnitCode = e,
						class: "input"
					}, [(g(!0), K(D, null, u(U(Ql), (e) => (g(), K("option", {
						key: e,
						value: e
					}, q(U(k)("rechnungswerk", U($l)[e])), 9, ug))), 128))], 512), [[x, a.defaultUnitCode]])]),
					Y("label", dg, [Y("span", null, q(U(k)("rechnungswerk", "Standard-Preis (€)")), 1), N(Y("input", {
						"onUpdate:modelValue": n[3] ||= (e) => o.value = e,
						class: "input",
						type: "text",
						inputmode: "decimal",
						onBlur: c
					}, null, 544), [[J, o.value]])]),
					Y("label", fg, [Y("span", null, q(U(k)("rechnungswerk", "USt-Satz")), 1), N(Y("select", {
						"onUpdate:modelValue": n[4] ||= (e) => a.defaultTaxRateBp = e,
						class: "input"
					}, [(g(!0), K(D, null, u(U(eu), (e) => (g(), K("option", {
						key: e,
						value: e
					}, q(U(_u)(e)), 9, pg))), 128))], 512), [[
						x,
						a.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])])
				]),
				Y("label", mg, [
					Y("span", null, q(U(k)("rechnungswerk", "Eigene Einheit (optional)")), 1),
					N(Y("input", {
						"onUpdate:modelValue": n[5] ||= (e) => a.defaultUnitLabel = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: U(k)("rechnungswerk", "z. B. Personen, Sitzung")
					}, null, 8, hg), [[J, a.defaultUnitLabel]]),
					Y("span", gg, q(U(k)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF. In der E-Rechnung wird die Einheit generisch (Stück) abgebildet, damit sie gültig bleibt.")), 1)
				]),
				Y("div", _g, [H(U(L), { onClick: n[6] ||= (e) => t.$emit("close") }, {
					default: A(() => [z(q(U(k)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), H(U(L), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					default: A(() => [z(q(U(k)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : R("", !0);
	}
}), [["__scopeId", "data-v-e77e93c0"]]), yg = { class: "rw-view" }, bg = { class: "rw-view__head" }, xg = {
	key: 2,
	class: "rw-table-wrap"
}, Sg = { class: "rw-table" }, Cg = { class: "num" }, wg = { class: "num" }, Tg = ["onClick"], Eg = {
	key: 0,
	class: "rw-muted"
}, Dg = { class: "num" }, Og = { class: "num" }, kg = { class: "rw-col-actions" }, Ag = { class: "rw-actions" }, jg = /* @__PURE__ */ B({
	__name: "ProductsView",
	setup(e) {
		let t = Tp(), n = X(!1), r = X(null), i = X(null), a = X(""), o = (e) => $l[e] ?? e;
		function s(e, t) {
			let n = e.message ?? t;
			a.value = n, console.error("[rechnungswerk] products:", e);
		}
		p(() => {
			t.fetchAll().catch((e) => s(e, k("rechnungswerk", "Laden fehlgeschlagen")));
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
				s(e, k("rechnungswerk", "Speichern fehlgeschlagen"));
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
					s(e, k("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, s) => (g(), K("div", yg, [
			Y("div", bg, [Y("h2", null, q(U(k)("rechnungswerk", "Produkte")), 1), H(U(L), {
				variant: "primary",
				onClick: c
			}, {
				icon: A(() => [H(ic, { size: 20 })]),
				default: A(() => [z(" " + q(U(k)("rechnungswerk", "Produkt anlegen")), 1)]),
				_: 1
			})]),
			a.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: a.value
			}, null, 8, ["text"])) : R("", !0),
			!U(t).loading && U(t).products.length === 0 ? (g(), V(U(St), {
				key: 1,
				name: U(k)("rechnungswerk", "Noch keine Produkte"),
				description: U(k)("rechnungswerk", "Pflege wiederkehrende Leistungen, um sie schnell in Rechnungen zu übernehmen.")
			}, {
				icon: A(() => [H(Ya, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : U(t).products.length > 0 ? (g(), K("div", xg, [Y("table", Sg, [Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(k)("rechnungswerk", "Name")), 1),
				Y("th", null, q(U(k)("rechnungswerk", "Einheit")), 1),
				Y("th", Cg, q(U(k)("rechnungswerk", "Preis")), 1),
				Y("th", wg, q(U(k)("rechnungswerk", "USt")), 1),
				s[2] ||= Y("th", { class: "num" }, null, -1)
			])]), Y("tbody", null, [(g(!0), K(D, null, u(U(t).products, (e) => (g(), K("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => l(e)
			}, [
				Y("td", null, [z(q(e.name) + " ", 1), e.description ? (g(), K("div", Eg, q(e.description), 1)) : R("", !0)]),
				Y("td", null, q(e.defaultUnitLabel || U(k)("rechnungswerk", o(e.defaultUnitCode))), 1),
				Y("td", Dg, q(U(hu)(e.defaultPriceE4)), 1),
				Y("td", Og, q(U(_u)(e.defaultTaxRateBp)), 1),
				Y("td", kg, [Y("div", Ag, [H(U(L), {
					variant: "tertiary",
					"aria-label": U(k)("rechnungswerk", "Löschen"),
					title: U(k)("rechnungswerk", "Löschen"),
					onClick: F((t) => f(e), ["stop"])
				}, {
					icon: A(() => [H(od, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, Tg))), 128))])])])) : R("", !0),
			H(vg, {
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
				name: U(k)("rechnungswerk", "Produkt löschen"),
				message: i.value ? U(k)("rechnungswerk", "„{name}“ wirklich löschen?", { name: i.value.name }) : "",
				confirmLabel: U(k)("rechnungswerk", "Löschen"),
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
}), Mg = {
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
}, Ng = ["aria-hidden", "aria-label"], Pg = [
	"fill",
	"width",
	"height"
], Fg = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, Ig = { key: 0 };
function Lg(e, t, n, r, i, a) {
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
	}, [Y("path", Fg, [n.title ? (g(), K("title", Ig, q(n.title), 1)) : R("", !0)])], 8, Pg))], 16, Ng);
}
var Rg = /*#__PURE__*/ $(Mg, [["render", Lg]]), zg = { class: "snippet-modal" }, Bg = { class: "field" }, Vg = ["placeholder"], Hg = { class: "field-row" }, Ug = { class: "field" }, Wg = ["value"], Gg = { class: "field" }, Kg = ["value"], qg = { class: "field" }, Jg = { class: "hint" }, Yg = { class: "actions" }, Xg = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
		}), l = W(() => i.snippet ? k("rechnungswerk", "Textbaustein bearbeiten") : k("rechnungswerk", "Textbaustein anlegen")), d = W(() => c.label.trim() !== "");
		j(() => i.open, (e) => {
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
			default: A(() => [Y("div", zg, [
				Y("h2", null, q(l.value), 1),
				Y("label", Bg, [Y("span", null, q(U(k)("rechnungswerk", "Name")) + " *", 1), N(Y("input", {
					ref_key: "nameInput",
					ref: o,
					"onUpdate:modelValue": i[0] ||= (e) => c.label = e,
					class: "input",
					type: "text",
					placeholder: U(k)("rechnungswerk", "z. B. Neukunde, Mahnfreundlich")
				}, null, 8, Vg), [[J, c.label]])]),
				Y("div", Hg, [Y("label", Ug, [Y("span", null, q(U(k)("rechnungswerk", "Dokument")), 1), N(Y("select", {
					"onUpdate:modelValue": i[1] ||= (e) => c.docType = e,
					class: "input"
				}, [(g(), K(D, null, u(n, (e) => Y("option", {
					key: e,
					value: e
				}, q(U(k)("rechnungswerk", U(nu)[e])), 9, Wg)), 64))], 512), [[x, c.docType]])]), Y("label", Gg, [Y("span", null, q(U(k)("rechnungswerk", "Textbereich")), 1), N(Y("select", {
					"onUpdate:modelValue": i[2] ||= (e) => c.slot = e,
					class: "input"
				}, [(g(), K(D, null, u(r, (e) => Y("option", {
					key: e,
					value: e
				}, q(U(k)("rechnungswerk", U(ru)[e])), 9, Kg)), 64))], 512), [[x, c.slot]])])]),
				Y("label", qg, [Y("span", null, q(U(k)("rechnungswerk", "Text")), 1), N(Y("textarea", {
					"onUpdate:modelValue": i[3] ||= (e) => c.content = e,
					class: "input",
					rows: "6"
				}, null, 512), [[J, c.content]])]),
				H(U(Ot), {
					modelValue: c.isDefault,
					"onUpdate:modelValue": i[4] ||= (e) => c.isDefault = e
				}, {
					default: A(() => [z(q(U(k)("rechnungswerk", "Als Standard für neue Dokumente verwenden")), 1)]),
					_: 1
				}, 8, ["modelValue"]),
				Y("p", Jg, q(U(k)("rechnungswerk", "Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.")), 1),
				Y("div", Yg, [H(U(L), { onClick: i[5] ||= (e) => t.$emit("close") }, {
					default: A(() => [z(q(U(k)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), H(U(L), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					default: A(() => [z(q(U(k)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : R("", !0);
	}
}), [["__scopeId", "data-v-b60fbea6"]]), Zg = { class: "rw-view" }, Qg = { class: "rw-view__head" }, $g = { class: "rw-muted rw-intro" }, e_ = {
	key: 2,
	class: "rw-snippet-groups"
}, t_ = { class: "rw-snippet-group__head" }, n_ = { class: "rw-table-wrap" }, r_ = { class: "rw-table" }, i_ = ["onClick"], a_ = {
	key: 0,
	class: "rw-muted rw-snippet-content"
}, o_ = { class: "rw-snippet-actions" }, s_ = { class: "rw-actions" }, c_ = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
			t.fetchAll().catch((e) => l(e, k("rechnungswerk", "Laden fehlgeschlagen")));
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
					l(e, k("rechnungswerk", "Speichern fehlgeschlagen"));
				}
			}
		}
		async function h(e) {
			c.value = "";
			try {
				o.value ? await t.update(o.value.id, e) : await t.create(e), a.value = !1;
			} catch (e) {
				l(e, k("rechnungswerk", "Speichern fehlgeschlagen"));
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
					l(e, k("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, n) => (g(), K("div", Zg, [
			Y("div", Qg, [Y("h2", null, q(U(k)("rechnungswerk", "Textbausteine")), 1), H(U(L), {
				variant: "primary",
				onClick: d
			}, {
				icon: A(() => [H(ic, { size: 20 })]),
				default: A(() => [z(" " + q(U(k)("rechnungswerk", "Textbaustein anlegen")), 1)]),
				_: 1
			})]),
			Y("p", $g, q(U(k)("rechnungswerk", "Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.")), 1),
			c.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: c.value
			}, null, 8, ["text"])) : R("", !0),
			!U(t).loading && U(t).snippets.length === 0 ? (g(), V(U(St), {
				key: 1,
				name: U(k)("rechnungswerk", "Noch keine Textbausteine"),
				description: U(k)("rechnungswerk", "Lege wiederkehrende Einleitungs- und Schlusstexte an, um sie schnell in Dokumente zu übernehmen.")
			}, {
				icon: A(() => [H(no, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : U(t).snippets.length > 0 ? (g(), K("div", e_, [(g(!0), K(D, null, u(i.value, (e) => (g(), K("section", {
				key: e.key,
				class: "rw-snippet-group"
			}, [Y("h3", t_, [
				z(q(U(k)("rechnungswerk", U(nu)[e.docType])) + " ", 1),
				n[2] ||= Y("span", { class: "rw-snippet-group__sep" }, "–", -1),
				z(" " + q(U(k)("rechnungswerk", U(ru)[e.slot])), 1)
			]), Y("div", n_, [Y("table", r_, [Y("tbody", null, [(g(!0), K(D, null, u(e.items, (e) => (g(), K("tr", {
				key: e.id,
				class: "rw-row-clickable rw-snippet-row",
				onClick: (t) => f(e)
			}, [Y("td", null, [Y("strong", null, q(e.label), 1), e.content ? (g(), K("div", a_, q(e.content), 1)) : R("", !0)]), Y("td", o_, [Y("div", s_, [H(U(L), {
				variant: "tertiary",
				"aria-label": e.isDefault ? U(k)("rechnungswerk", "Standard-Vorlage") : U(k)("rechnungswerk", "Als Standard festlegen"),
				title: e.isDefault ? U(k)("rechnungswerk", "Standard-Vorlage") : U(k)("rechnungswerk", "Als Standard festlegen"),
				onClick: F((t) => m(e), ["stop"])
			}, {
				icon: A(() => [e.isDefault ? (g(), V(as, {
					key: 0,
					size: 20,
					class: "rw-star rw-star--active"
				})) : (g(), V(Rg, {
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
				"aria-label": U(k)("rechnungswerk", "Löschen"),
				title: U(k)("rechnungswerk", "Löschen"),
				onClick: F((t) => _(e), ["stop"])
			}, {
				icon: A(() => [H(od, { size: 20 })]),
				_: 1
			}, 8, [
				"aria-label",
				"title",
				"onClick"
			])])])], 8, i_))), 128))])])])]))), 128))])) : R("", !0),
			H(Xg, {
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
				name: U(k)("rechnungswerk", "Textbaustein löschen"),
				message: s.value ? U(k)("rechnungswerk", "„{name}“ wirklich löschen?", { name: s.value.label }) : "",
				confirmLabel: U(k)("rechnungswerk", "Löschen"),
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
}), [["__scopeId", "data-v-c438c8e2"]]), l_ = {
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
}, u_ = ["aria-hidden", "aria-label"], d_ = [
	"fill",
	"width",
	"height"
], f_ = { d: "M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14" }, p_ = { key: 0 };
function m_(e, t, n, r, i, a) {
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
	}, [Y("path", f_, [n.title ? (g(), K("title", p_, q(n.title), 1)) : R("", !0)])], 8, d_))], 16, u_);
}
var h_ = /*#__PURE__*/ $(l_, [["render", m_]]), g_ = { class: "customer-modal" }, __ = { class: "form-section" }, v_ = { class: "row" }, y_ = { class: "field" }, b_ = { class: "field" }, x_ = { class: "row" }, S_ = { class: "field" }, C_ = { class: "form-section" }, w_ = { class: "field" }, T_ = ["placeholder"], E_ = { class: "hint" }, D_ = { class: "field" }, O_ = { class: "row" }, k_ = { class: "field" }, A_ = { class: "field" }, j_ = { class: "row" }, M_ = { class: "field" }, N_ = { class: "form-section" }, P_ = { class: "row" }, F_ = { class: "field" }, I_ = { class: "field" }, L_ = { class: "field" }, R_ = { class: "form-section" }, z_ = { class: "field" }, B_ = { class: "row" }, V_ = { class: "field" }, H_ = { class: "field" }, U_ = { class: "field" }, W_ = { class: "form-section" }, G_ = { class: "row" }, K_ = { class: "field" }, q_ = { class: "field" }, J_ = { value: "" }, Y_ = ["value"], X_ = { class: "field" }, Z_ = { class: "actions" }, Q_ = /*#__PURE__*/ $(/* @__PURE__ */ B({
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
		}), o = s(a()), c = X(""), l = X(""), d = W(() => n.customer ? k("rechnungswerk", "Kunde bearbeiten") : k("rechnungswerk", "Kunde anlegen")), f = W(() => {
			let e = o.customerNumber.trim().toLowerCase();
			return e !== "" && (n.takenNumbers ?? []).includes(e);
		}), p = W(() => o.customerNumber.trim() !== "" && o.name.trim() !== "" && !f.value);
		j(() => n.open, (e) => {
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
			default: A(() => [Y("div", g_, [
				Y("h2", null, q(d.value), 1),
				Y("div", __, [
					Y("h3", null, q(U(k)("rechnungswerk", "Stammdaten")), 1),
					Y("div", v_, [Y("label", y_, [Y("span", null, q(U(k)("rechnungswerk", "Kundennr.")) + " *", 1), N(Y("input", {
						ref_key: "numberInput",
						ref: i,
						"onUpdate:modelValue": n[0] ||= (e) => o.customerNumber = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.customerNumber]])]), Y("label", b_, [Y("span", null, q(U(k)("rechnungswerk", "Name / Firma")) + " *", 1), N(Y("input", {
						"onUpdate:modelValue": n[1] ||= (e) => o.name = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.name]])])]),
					f.value ? (g(), V(U(pt), {
						key: 0,
						type: "error",
						text: U(k)("rechnungswerk", "Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.", { number: o.customerNumber.trim() })
					}, null, 8, ["text"])) : R("", !0),
					Y("div", x_, [Y("label", S_, [Y("span", null, q(U(k)("rechnungswerk", "USt-IdNr.")), 1), N(Y("input", {
						"onUpdate:modelValue": n[2] ||= (e) => o.vatId = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.vatId]])])])
				]),
				Y("div", C_, [
					Y("h3", null, q(U(k)("rechnungswerk", "Anschrift")), 1),
					Y("label", w_, [
						Y("span", null, q(U(k)("rechnungswerk", "Adresszusatz")), 1),
						N(Y("input", {
							"onUpdate:modelValue": n[3] ||= (e) => o.addressAddition = e,
							class: "input",
							type: "text",
							placeholder: U(k)("rechnungswerk", "z. Hd. Frau Meyer, Gebäude B, c/o\xA0…")
						}, null, 8, T_), [[J, o.addressAddition]]),
						Y("span", E_, q(U(k)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					]),
					Y("label", D_, [Y("span", null, q(U(k)("rechnungswerk", "Straße & Hausnummer")), 1), N(Y("input", {
						"onUpdate:modelValue": n[4] ||= (e) => o.address = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.address]])]),
					Y("div", O_, [Y("label", k_, [Y("span", null, q(U(k)("rechnungswerk", "PLZ")), 1), N(Y("input", {
						"onUpdate:modelValue": n[5] ||= (e) => o.postalCode = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.postalCode]])]), Y("label", A_, [Y("span", null, q(U(k)("rechnungswerk", "Ort")), 1), N(Y("input", {
						"onUpdate:modelValue": n[6] ||= (e) => o.city = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.city]])])]),
					Y("div", j_, [Y("label", M_, [Y("span", null, q(U(k)("rechnungswerk", "Land")), 1), H(Jd, {
						modelValue: o.country,
						"onUpdate:modelValue": n[7] ||= (e) => o.country = e,
						selectClass: "input"
					}, null, 8, ["modelValue"])])])
				]),
				Y("div", N_, [
					Y("h3", null, q(U(k)("rechnungswerk", "Ansprechpartner & Kontakt")), 1),
					Y("div", P_, [Y("label", F_, [Y("span", null, q(U(k)("rechnungswerk", "Ansprechpartner")), 1), N(Y("input", {
						"onUpdate:modelValue": n[8] ||= (e) => o.contactPerson = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.contactPerson]])]), Y("label", I_, [Y("span", null, q(U(k)("rechnungswerk", "Telefon")), 1), N(Y("input", {
						"onUpdate:modelValue": n[9] ||= (e) => o.phone = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.phone]])])]),
					Y("label", L_, [Y("span", null, q(U(k)("rechnungswerk", "E-Mail (für Rechnungsversand)")), 1), N(Y("input", {
						"onUpdate:modelValue": n[10] ||= (e) => o.email = e,
						class: "input",
						type: "email"
					}, null, 512), [[J, o.email]])])
				]),
				Y("div", R_, [
					Y("h3", null, q(U(k)("rechnungswerk", "Bankverbindung")), 1),
					Y("label", z_, [Y("span", null, q(U(k)("rechnungswerk", "Kontoinhaber")), 1), N(Y("input", {
						"onUpdate:modelValue": n[11] ||= (e) => o.bankAccountHolder = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bankAccountHolder]])]),
					Y("div", B_, [Y("label", V_, [Y("span", null, q(U(k)("rechnungswerk", "IBAN")), 1), N(Y("input", {
						"onUpdate:modelValue": n[12] ||= (e) => o.iban = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.iban]])]), Y("label", H_, [Y("span", null, q(U(k)("rechnungswerk", "BIC")), 1), N(Y("input", {
						"onUpdate:modelValue": n[13] ||= (e) => o.bic = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bic]])])]),
					Y("label", U_, [Y("span", null, q(U(k)("rechnungswerk", "Bank")), 1), N(Y("input", {
						"onUpdate:modelValue": n[14] ||= (e) => o.bankName = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bankName]])])
				]),
				Y("div", W_, [
					Y("h3", null, q(U(k)("rechnungswerk", "Vorgaben für neue Rechnungen")), 1),
					Y("div", G_, [Y("label", K_, [Y("span", null, q(U(k)("rechnungswerk", "Zahlungsziel (Tage)")), 1), N(Y("input", {
						"onUpdate:modelValue": n[15] ||= (e) => c.value = e,
						class: "input",
						type: "number",
						min: "0",
						inputmode: "numeric"
					}, null, 512), [[J, c.value]])]), Y("label", q_, [Y("span", null, q(U(k)("rechnungswerk", "Standard-Steuersatz")), 1), N(Y("select", {
						"onUpdate:modelValue": n[16] ||= (e) => l.value = e,
						class: "input"
					}, [Y("option", J_, q(U(k)("rechnungswerk", "— keine Vorgabe —")), 1), (g(!0), K(D, null, u(U(eu), (e) => (g(), K("option", {
						key: e,
						value: String(e)
					}, q(U(_u)(e)), 9, Y_))), 128))], 512), [[x, l.value]])])]),
					Y("label", X_, [Y("span", null, q(U(k)("rechnungswerk", "Notiz (intern, nicht auf der Rechnung)")), 1), N(Y("textarea", {
						"onUpdate:modelValue": n[17] ||= (e) => o.note = e,
						class: "input",
						rows: "2"
					}, null, 512), [[J, o.note]])])
				]),
				Y("div", Z_, [H(U(L), { onClick: n[18] ||= (e) => t.$emit("close") }, {
					default: A(() => [z(q(U(k)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), H(U(L), {
					variant: "primary",
					disabled: e.saving || !p.value,
					onClick: _
				}, {
					default: A(() => [z(q(U(k)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : R("", !0);
	}
}), [["__scopeId", "data-v-7914d0dc"]]), $_ = { class: "rw-view" }, ev = { class: "rw-view__head" }, tv = { class: "rw-view__actions" }, nv = {
	key: 2,
	class: "rw-table-wrap"
}, rv = { class: "rw-table" }, iv = ["onClick"], av = { class: "rw-muted" }, ov = {
	key: 0,
	class: "rw-muted"
}, sv = { class: "rw-col-actions" }, cv = { class: "rw-actions" }, lv = { class: "rw-import" }, uv = { class: "rw-muted" }, dv = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "CustomersView",
	setup(e) {
		let t = $d(), n = X(!1), r = X(null), i = X(null), a = X(null), o = X(!1), s = X(""), c = X(""), l = X(!1), d = W(() => t.customers.filter((e) => e.id !== r.value?.id).map((e) => e.customerNumber.trim().toLowerCase()));
		function f(e, t) {
			c.value = e.message ?? t, console.error("[rechnungswerk] customers:", e);
		}
		p(() => {
			t.fetchAll().catch((e) => f(e, k("rechnungswerk", "Laden fehlgeschlagen")));
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
				f(e, k("rechnungswerk", "Speichern fehlgeschlagen"));
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
					f(e, k("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, f) => (g(), K("div", $_, [
			Y("div", ev, [Y("h2", null, q(U(k)("rechnungswerk", "Kunden")), 1), Y("div", tv, [H(U(L), { onClick: _ }, {
				icon: A(() => [H(h_, { size: 20 })]),
				default: A(() => [z(" " + q(U(k)("rechnungswerk", "Aus Kontakten importieren")), 1)]),
				_: 1
			}), H(U(L), {
				variant: "primary",
				onClick: m
			}, {
				icon: A(() => [H(ic, { size: 20 })]),
				default: A(() => [z(" " + q(U(k)("rechnungswerk", "Neuer Kunde")), 1)]),
				_: 1
			})])]),
			c.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: c.value
			}, null, 8, ["text"])) : R("", !0),
			!U(t).loading && U(t).customers.length === 0 ? (g(), V(U(St), {
				key: 1,
				name: U(k)("rechnungswerk", "Noch keine Kunden"),
				description: U(k)("rechnungswerk", "Lege Kunden an oder übernimm sie aus deinen Nextcloud-Kontakten, um sie schnell in Rechnungen auszuwählen.")
			}, {
				icon: A(() => [H(Fa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : U(t).customers.length > 0 ? (g(), K("div", nv, [Y("table", rv, [Y("thead", null, [Y("tr", null, [
				Y("th", null, q(U(k)("rechnungswerk", "Kundennr.")), 1),
				Y("th", null, q(U(k)("rechnungswerk", "Kunde")), 1),
				Y("th", null, q(U(k)("rechnungswerk", "Ort")), 1),
				f[5] ||= Y("th", { class: "num" }, null, -1)
			])]), Y("tbody", null, [(g(!0), K(D, null, u(U(t).customers, (e) => (g(), K("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => h(e)
			}, [
				Y("td", av, q(e.customerNumber), 1),
				Y("td", null, [z(q(e.name) + " ", 1), e.contactPerson || e.vatId ? (g(), K("div", ov, q([e.contactPerson, e.vatId].filter(Boolean).join(" · ")), 1)) : R("", !0)]),
				Y("td", null, q([e.postalCode, e.city].filter(Boolean).join(" ")), 1),
				Y("td", sv, [Y("div", cv, [H(U(L), {
					variant: "tertiary",
					"aria-label": U(k)("rechnungswerk", "Löschen"),
					title: U(k)("rechnungswerk", "Löschen"),
					onClick: F((t) => te(e), ["stop"])
				}, {
					icon: A(() => [H(od, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, iv))), 128))])])])) : R("", !0),
			H(Q_, {
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
				name: U(k)("rechnungswerk", "Aus Nextcloud-Kontakten übernehmen"),
				onKeydown: f[2] ||= de((e) => U(Ss)(e, () => o.value = !1), ["esc"]),
				onClose: f[3] ||= (e) => o.value = !1
			}, {
				default: A(() => [Y("div", lv, [Y("p", uv, q(U(k)("rechnungswerk", "Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.")), 1), H(Hd, {
					modelValue: s.value,
					"onUpdate:modelValue": f[1] ||= (e) => s.value = e,
					onSelect: ee
				}, null, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["name"])) : R("", !0),
			H(Qf, {
				open: a.value !== null,
				name: U(k)("rechnungswerk", "Kunde löschen"),
				message: a.value ? U(k)("rechnungswerk", "„{name}“ wirklich löschen?", { name: a.value.name }) : "",
				confirmLabel: U(k)("rechnungswerk", "Löschen"),
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
}), [["__scopeId", "data-v-1eff74a5"]]), fv = {
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
}, pv = ["aria-hidden", "aria-label"], mv = [
	"fill",
	"width",
	"height"
], hv = { d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" }, gv = { key: 0 };
function _v(e, t, n, r, i, a) {
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
	}, [Y("path", hv, [n.title ? (g(), K("title", gv, q(n.title), 1)) : R("", !0)])], 8, mv))], 16, pv);
}
var vv = /*#__PURE__*/ $(fv, [["render", _v]]), yv = { class: "rw-view" }, bv = {
	key: 2,
	class: "rw-section"
}, xv = { class: "rw-hint" }, Sv = { class: "rw-form-row" }, Cv = { class: "rw-field" }, wv = { class: "rw-field" }, Tv = { class: "rw-field" }, Ev = {
	key: 3,
	class: "rw-action-bar"
}, Dv = /* @__PURE__ */ B({
	__name: "MyContactView",
	setup(e) {
		let t = X(null), n = X(""), r = X(""), i = X(!1);
		p(async () => {
			try {
				t.value = await Mp();
			} catch (e) {
				n.value = e.message ?? k("rechnungswerk", "Laden fehlgeschlagen");
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
				n.value = e.message ?? k("rechnungswerk", "Nextcloud-Konto konnte nicht geladen werden.");
			}
		}
		async function o() {
			if (t.value) {
				n.value = "", r.value = "", i.value = !0;
				try {
					t.value = await Np(t.value), r.value = k("rechnungswerk", "Gespeichert.");
				} catch (e) {
					n.value = e.message ?? k("rechnungswerk", "Speichern fehlgeschlagen");
				} finally {
					i.value = !1;
				}
			}
		}
		return (e, s) => (g(), K("div", yv, [
			Y("h2", null, q(U(k)("rechnungswerk", "Mein Kontakt")), 1),
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
			t.value ? (g(), K("section", bv, [
				Y("h3", null, q(U(k)("rechnungswerk", "Mein Verkäufer-Ansprechpartner")), 1),
				Y("p", xv, q(U(k)("rechnungswerk", "Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.")), 1),
				Y("div", Sv, [
					Y("label", Cv, [Y("span", null, q(U(k)("rechnungswerk", "Name")), 1), N(Y("input", {
						"onUpdate:modelValue": s[0] ||= (e) => t.value.person = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[J, t.value.person]])]),
					Y("label", wv, [Y("span", null, q(U(k)("rechnungswerk", "Telefon")), 1), N(Y("input", {
						"onUpdate:modelValue": s[1] ||= (e) => t.value.phone = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[J, t.value.phone]])]),
					Y("label", Tv, [Y("span", null, q(U(k)("rechnungswerk", "E-Mail")), 1), N(Y("input", {
						"onUpdate:modelValue": s[2] ||= (e) => t.value.email = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[J, t.value.email]])])
				]),
				H(U(L), {
					variant: "tertiary",
					onClick: a
				}, {
					icon: A(() => [H(Ha, { size: 20 })]),
					default: A(() => [z(" " + q(U(k)("rechnungswerk", "Aus meinem Nextcloud-Konto übernehmen")), 1)]),
					_: 1
				})
			])) : R("", !0),
			t.value ? (g(), K("div", Ev, [H(U(L), {
				variant: "primary",
				disabled: i.value,
				onClick: o
			}, {
				icon: A(() => [H(vv, { size: 20 })]),
				default: A(() => [z(" " + q(U(k)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])) : R("", !0)
		]));
	}
}), Ov = /* @__PURE__ */ n({ default: () => xt });
//#endregion
//#region node_modules/@ckpack/vue-color/libs/style-inject.es-746bb8ed.js
function kv(e, t) {
	t === void 0 && (t = {});
	var n = t.insertAt;
	if (e && typeof document < "u") {
		var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
		i.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
	}
}
//#endregion
//#region node_modules/@ckpack/vue-color/libs/utils/compoent.js
var Av = function(e, t) {
	let { componentPrefix: n = "" } = t || {};
	e.component(`${n}${this.name}`, this);
}, jv = {}, Mv = {
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
		return { "background-image": `url(${Pv(this.white, this.grey, this.size)})` };
	} }
};
function Nv(e, t, n) {
	if (typeof document > "u") return null;
	let r = document.createElement("canvas");
	r.width = r.height = n * 2;
	let i = r.getContext("2d");
	return i ? (i.fillStyle = e, i.fillRect(0, 0, r.width, r.height), i.fillStyle = t, i.fillRect(0, 0, n, n), i.translate(n, n), i.fillRect(0, 0, n, n), r.toDataURL()) : null;
}
function Pv(e, t, n) {
	let r = `${e},${t},${n}`;
	if (jv[r]) return jv[r];
	let i = Nv(e, t, n);
	return jv[r] = i, i;
}
function Fv(e, t, n, r, i, a) {
	return g(), K("div", {
		class: "vc-checkerboard",
		style: Ee(a.bgStyle)
	}, null, 4);
}
kv(".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}"), Mv.render = Fv, Mv.__file = "src/components/checkboard/checkboard.vue", Mv.install = Av;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/alpha/index.js
var Iv = {
	name: "Alpha",
	components: { Checkboard: Mv },
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
}, Lv = { class: "vc-alpha" }, Rv = { class: "vc-alpha-checkboard-wrap" }, zv = [/* @__PURE__ */ Y("div", { class: "vc-alpha-picker" }, null, -1)];
function Bv(e, t, n, r, i, a) {
	let o = C("Checkboard");
	return g(), K("div", Lv, [
		Y("div", Rv, [H(o)]),
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
		}, zv, 4)], 544)
	]);
}
kv(".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), Iv.render = Bv, Iv.__file = "src/components/alpha/alpha.vue", Iv.install = Av;
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/util.js
function Vv(e, t) {
	Uv(e) && (e = "100%");
	var n = Wv(e);
	return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (e = t === 360 ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t)), e);
}
function Hv(e) {
	return Math.min(1, Math.max(0, e));
}
function Uv(e) {
	return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Wv(e) {
	return typeof e == "string" && e.indexOf("%") !== -1;
}
function Gv(e) {
	return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Kv(e) {
	return e <= 1 ? `${Number(e) * 100}%` : e;
}
function qv(e) {
	return e.length === 1 ? "0" + e : String(e);
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/conversion.js
function Jv(e, t, n) {
	return {
		r: Vv(e, 255) * 255,
		g: Vv(t, 255) * 255,
		b: Vv(n, 255) * 255
	};
}
function Yv(e, t, n) {
	e = Vv(e, 255), t = Vv(t, 255), n = Vv(n, 255);
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
function Xv(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Zv(e, t, n) {
	var r, i, a;
	if (e = Vv(e, 360), t = Vv(t, 100), n = Vv(n, 100), t === 0) i = n, a = n, r = n;
	else {
		var o = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
		r = Xv(s, o, e + 1 / 3), i = Xv(s, o, e), a = Xv(s, o, e - 1 / 3);
	}
	return {
		r: r * 255,
		g: i * 255,
		b: a * 255
	};
}
function Qv(e, t, n) {
	e = Vv(e, 255), t = Vv(t, 255), n = Vv(n, 255);
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
function $v(e, t, n) {
	e = Vv(e, 360) * 6, t = Vv(t, 100), n = Vv(n, 100);
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
function ey(e, t, n, r) {
	var i = [
		qv(Math.round(e).toString(16)),
		qv(Math.round(t).toString(16)),
		qv(Math.round(n).toString(16))
	];
	return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function ty(e, t, n, r, i) {
	var a = [
		qv(Math.round(e).toString(16)),
		qv(Math.round(t).toString(16)),
		qv(Math.round(n).toString(16)),
		qv(ny(r))
	];
	return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function ny(e) {
	return Math.round(parseFloat(e) * 255).toString(16);
}
function ry(e) {
	return iy(e) / 255;
}
function iy(e) {
	return parseInt(e, 16);
}
function ay(e) {
	return {
		r: e >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var oy = {
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
function sy(e) {
	var t = {
		r: 0,
		g: 0,
		b: 0
	}, n = 1, r = null, i = null, a = null, o = !1, s = !1;
	return typeof e == "string" && (e = fy(e)), typeof e == "object" && (py(e.r) && py(e.g) && py(e.b) ? (t = Jv(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : py(e.h) && py(e.s) && py(e.v) ? (r = Kv(e.s), i = Kv(e.v), t = $v(e.h, r, i), o = !0, s = "hsv") : py(e.h) && py(e.s) && py(e.l) && (r = Kv(e.s), a = Kv(e.l), t = Zv(e.h, r, a), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Gv(n), {
		ok: o,
		format: e.format || s,
		r: Math.min(255, Math.max(t.r, 0)),
		g: Math.min(255, Math.max(t.g, 0)),
		b: Math.min(255, Math.max(t.b, 0)),
		a: n
	};
}
var cy = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", ly = `[\\s|\\(]+(${cy})[,|\\s]+(${cy})[,|\\s]+(${cy})\\s*\\)?`, uy = `[\\s|\\(]+(${cy})[,|\\s]+(${cy})[,|\\s]+(${cy})[,|\\s]+(${cy})\\s*\\)?`, dy = {
	CSS_UNIT: new RegExp(cy),
	rgb: RegExp("rgb" + ly),
	rgba: RegExp("rgba" + uy),
	hsl: RegExp("hsl" + ly),
	hsla: RegExp("hsla" + uy),
	hsv: RegExp("hsv" + ly),
	hsva: RegExp("hsva" + uy),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function fy(e) {
	if (e = e.trim().toLowerCase(), e.length === 0) return !1;
	var t = !1;
	if (oy[e]) e = oy[e], t = !0;
	else if (e === "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var n = dy.rgb.exec(e);
	return n ? {
		r: n[1],
		g: n[2],
		b: n[3]
	} : (n = dy.rgba.exec(e), n ? {
		r: n[1],
		g: n[2],
		b: n[3],
		a: n[4]
	} : (n = dy.hsl.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3]
	} : (n = dy.hsla.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3],
		a: n[4]
	} : (n = dy.hsv.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3]
	} : (n = dy.hsva.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3],
		a: n[4]
	} : (n = dy.hex8.exec(e), n ? {
		r: iy(n[1]),
		g: iy(n[2]),
		b: iy(n[3]),
		a: ry(n[4]),
		format: t ? "name" : "hex8"
	} : (n = dy.hex6.exec(e), n ? {
		r: iy(n[1]),
		g: iy(n[2]),
		b: iy(n[3]),
		format: t ? "name" : "hex"
	} : (n = dy.hex4.exec(e), n ? {
		r: iy(n[1] + n[1]),
		g: iy(n[2] + n[2]),
		b: iy(n[3] + n[3]),
		a: ry(n[4] + n[4]),
		format: t ? "name" : "hex8"
	} : (n = dy.hex3.exec(e), n ? {
		r: iy(n[1] + n[1]),
		g: iy(n[2] + n[2]),
		b: iy(n[3] + n[3]),
		format: t ? "name" : "hex"
	} : !1)))))))));
}
function py(e) {
	return !!dy.CSS_UNIT.exec(String(e));
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/index.js
var my = function() {
	function e(t, n) {
		if (t === void 0 && (t = ""), n === void 0 && (n = {}), t instanceof e) return t;
		typeof t == "number" && (t = ay(t)), this.originalInput = t;
		var r = sy(t);
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
		return this.a = Gv(e), this.roundA = Math.round(100 * this.a) / 100, this;
	}, e.prototype.isMonochrome = function() {
		return this.toHsl().s === 0;
	}, e.prototype.toHsv = function() {
		var e = Qv(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			v: e.v,
			a: this.a
		};
	}, e.prototype.toHsvString = function() {
		var e = Qv(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
		return this.a === 1 ? `hsv(${t}, ${n}%, ${r}%)` : `hsva(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHsl = function() {
		var e = Yv(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			l: e.l,
			a: this.a
		};
	}, e.prototype.toHslString = function() {
		var e = Yv(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
		return this.a === 1 ? `hsl(${t}, ${n}%, ${r}%)` : `hsla(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHex = function(e) {
		return e === void 0 && (e = !1), ey(this.r, this.g, this.b, e);
	}, e.prototype.toHexString = function(e) {
		return e === void 0 && (e = !1), "#" + this.toHex(e);
	}, e.prototype.toHex8 = function(e) {
		return e === void 0 && (e = !1), ty(this.r, this.g, this.b, this.a, e);
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
			return `${Math.round(Vv(e, 255) * 100)}%`;
		};
		return {
			r: e(this.r),
			g: e(this.g),
			b: e(this.b),
			a: this.a
		};
	}, e.prototype.toPercentageRgbString = function() {
		var e = function(e) {
			return Math.round(Vv(e, 255) * 100);
		};
		return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
	}, e.prototype.toName = function() {
		if (this.a === 0) return "transparent";
		if (this.a < 1) return !1;
		for (var e = "#" + ey(this.r, this.g, this.b, !1), t = 0, n = Object.entries(oy); t < n.length; t++) {
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
		return n.l += t / 100, n.l = Hv(n.l), new e(n);
	}, e.prototype.brighten = function(t) {
		t === void 0 && (t = 10);
		var n = this.toRgb();
		return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
	}, e.prototype.darken = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.l -= t / 100, n.l = Hv(n.l), new e(n);
	}, e.prototype.tint = function(e) {
		return e === void 0 && (e = 10), this.mix("white", e);
	}, e.prototype.shade = function(e) {
		return e === void 0 && (e = 10), this.mix("black", e);
	}, e.prototype.desaturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s -= t / 100, n.s = Hv(n.s), new e(n);
	}, e.prototype.saturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s += t / 100, n.s = Hv(n.s), new e(n);
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
function hy(...e) {
	return new my(...e);
}
function gy(e, t) {
	let n = e && e.a, r;
	r = e && e.hsl ? hy(e.hsl) : e && e.hex && e.hex.length > 0 ? hy(e.hex) : e && e.hsv ? hy(e.hsv) : e && e.rgba ? hy(e.rgba) : e && e.rgb ? hy(e.rgb) : hy(e), r && (r._a === void 0 || r._a === null) && r.setAlpha(n || r.getAlpha());
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
var _y = {
	model: {
		prop: "modelValue",
		event: "update:modelValue"
	},
	props: ["modelValue"],
	data() {
		return { val: gy(this.modelValue) };
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
		this.val = gy(e);
	} },
	methods: {
		colorChange(e, t) {
			this.oldHue = this.colors.hsl.h, this.colors = gy(e, t || this.oldHue);
		},
		isValidHex(e) {
			return hy(e).isValid;
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
			return hy(e).getAlpha() === 0;
		}
	}
}, vy = {
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
}, yy = { class: "vc-editable-input" }, by = ["aria-labelledby"], xy = ["id", "for"], Sy = { class: "vc-input__desc" };
function Cy(e, t, n, r, i, a) {
	return g(), K("div", yy, [
		N(Y("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.val = e,
			"aria-labelledby": a.labelId,
			class: "vc-input__input",
			onKeydown: t[1] ||= (...e) => a.handleKeyDown && a.handleKeyDown(...e),
			onInput: t[2] ||= (...e) => a.update && a.update(...e)
		}, null, 40, by), [[J, a.val]]),
		Y("span", {
			id: a.labelId,
			for: n.label,
			class: "vc-input__label"
		}, q(a.labelSpanText), 9, xy),
		Y("span", Sy, q(n.desc), 1)
	]);
}
kv(".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}"), vy.render = Cy, vy.__file = "src/components/editable-input/editable-input.vue", vy.install = Av;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/utils/utils.js
function wy(e, t, n) {
	return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e;
}
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/saturation/index.js
var Ty = {
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
			let r = n.clientWidth, i = n.clientHeight, a = n.getBoundingClientRect().left + window.pageXOffset, o = n.getBoundingClientRect().top + window.pageYOffset, s = e.pageX || (e.touches ? e.touches[0].pageX : 0), c = e.pageY || (e.touches ? e.touches[0].pageY : 0), l = wy(s - a, 0, r), u = wy(c - o, 0, i), d = l / r, f = wy(-(u / i) + 1, 0, 1);
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
}, Ey = /*#__PURE__*/ Y("div", { class: "vc-saturation--white" }, null, -1), Dy = /*#__PURE__*/ Y("div", { class: "vc-saturation--black" }, null, -1), Oy = [/* @__PURE__ */ Y("div", { class: "vc-saturation-circle" }, null, -1)];
function ky(e, t, n, r, i, a) {
	return g(), K("div", {
		ref: "container",
		class: "vc-saturation",
		style: Ee({ background: a.bgColor }),
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [
		Ey,
		Dy,
		Y("div", {
			class: "vc-saturation-pointer",
			style: Ee({
				top: a.pointerTop,
				left: a.pointerLeft
			})
		}, Oy, 4)
	], 36);
}
kv(".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}"), Ty.render = ky, Ty.__file = "src/components/saturation/saturation.vue", Ty.install = Av;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/hue/index.js
var Ay = {
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
}, jy = ["aria-valuenow"], My = [/* @__PURE__ */ Y("div", { class: "vc-hue-picker" }, null, -1)];
function Ny(e, t, n, r, i, a) {
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
	}, My, 4)], 40, jy)], 2);
}
kv(".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), Ay.render = Ny, Ay.__file = "src/components/hue/hue.vue", Ay.install = Av;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/chrome/index.js
var Py = {
	name: "Chrome",
	components: {
		Saturation: Ty,
		Hue: Ay,
		Alpha: Iv,
		EdIn: vy,
		Checkboard: Mv
	},
	mixins: [_y],
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
}, Fy = { class: "vc-chrome-saturation-wrap" }, Iy = { class: "vc-chrome-body" }, Ly = { class: "vc-chrome-controls" }, Ry = { class: "vc-chrome-color-wrap" }, zy = ["aria-label"], By = { class: "vc-chrome-sliders" }, Vy = { class: "vc-chrome-hue-wrap" }, Hy = {
	key: 0,
	class: "vc-chrome-alpha-wrap"
}, Uy = {
	key: 0,
	class: "vc-chrome-fields-wrap"
}, Wy = { class: "vc-chrome-fields" }, Gy = { class: "vc-chrome-field" }, Ky = { class: "vc-chrome-fields" }, qy = { class: "vc-chrome-field" }, Jy = { class: "vc-chrome-field" }, Yy = { class: "vc-chrome-field" }, Xy = {
	key: 0,
	class: "vc-chrome-field"
}, Zy = { class: "vc-chrome-fields" }, Qy = { class: "vc-chrome-field" }, $y = { class: "vc-chrome-field" }, eb = { class: "vc-chrome-field" }, tb = {
	key: 0,
	class: "vc-chrome-field"
}, nb = { class: "vc-chrome-toggle-icon" }, rb = [/* @__PURE__ */ Y("path", {
	fill: "#333",
	d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1)], ib = { class: "vc-chrome-toggle-icon-highlight" };
function ab(e, t, n, r, i, a) {
	let o = C("Saturation"), s = C("Checkboard"), c = C("Hue"), l = C("Alpha"), u = C("EdIn");
	return g(), K("div", {
		role: "application",
		"aria-label": "Chrome color picker",
		class: Z(["vc-chrome", [n.disableAlpha ? "vc-chrome__disable-alpha" : ""]])
	}, [Y("div", Fy, [H(o, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]), Y("div", Iy, [Y("div", Ly, [Y("div", Ry, [Y("div", {
		"aria-label": `current color is ${e.colors.hex}`,
		class: "vc-chrome-active-color",
		style: Ee({ background: a.activeColor })
	}, null, 12, zy), n.disableAlpha ? R("v-if", !0) : (g(), V(s, { key: 0 }))]), Y("div", By, [Y("div", Vy, [H(c, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]), n.disableAlpha ? R("v-if", !0) : (g(), K("div", Hy, [H(l, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]))])]), n.disableFields ? R("v-if", !0) : (g(), K("div", Uy, [
		N(Y("div", Wy, [R(" hex "), Y("div", Gy, [a.hasAlpha ? R("v-if", !0) : (g(), V(u, {
			key: 0,
			label: "hex",
			value: e.colors.hex,
			onChange: a.inputChange
		}, null, 8, ["value", "onChange"])), a.hasAlpha ? (g(), V(u, {
			key: 1,
			label: "hex",
			value: e.colors.hex8,
			onChange: a.inputChange
		}, null, 8, ["value", "onChange"])) : R("v-if", !0)])], 512), [[b, i.fieldsIndex === "hex"]]),
		N(Y("div", Ky, [
			R(" rgba "),
			Y("div", qy, [H(u, {
				label: "r",
				value: e.colors.rgba.r,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", Jy, [H(u, {
				label: "g",
				value: e.colors.rgba.g,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", Yy, [H(u, {
				label: "b",
				value: e.colors.rgba.b,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			n.disableAlpha ? R("v-if", !0) : (g(), K("div", Xy, [H(u, {
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
		], 512), [[b, ["rgb", "rgba"].includes(i.fieldsIndex)]]),
		N(Y("div", Zy, [
			R(" hsla "),
			Y("div", Qy, [H(u, {
				label: "h",
				value: a.hsl.h,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", $y, [H(u, {
				label: "s",
				value: a.hsl.s,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", eb, [H(u, {
				label: "l",
				value: a.hsl.l,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			n.disableAlpha ? R("v-if", !0) : (g(), K("div", tb, [H(u, {
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
		], 512), [[b, ["hsl", "hsla"].includes(i.fieldsIndex)]]),
		R(" btn "),
		Y("div", {
			class: "vc-chrome-toggle-btn",
			role: "button",
			"aria-label": "Change another color definition",
			onClick: t[3] ||= (...e) => a.toggleViews && a.toggleViews(...e)
		}, [Y("div", nb, [(g(), K("svg", {
			style: {
				width: "24px",
				height: "24px"
			},
			viewBox: "0 0 24 24",
			onMouseover: t[0] ||= (...e) => a.showHighlight && a.showHighlight(...e),
			onMouseenter: t[1] ||= (...e) => a.showHighlight && a.showHighlight(...e),
			onMouseout: t[2] ||= (...e) => a.hideHighlight && a.hideHighlight(...e)
		}, rb, 32))]), N(Y("div", ib, null, 512), [[b, i.highlight]])]),
		R(" btn ")
	]))])], 2);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/colors.mjs
kv(".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}"), Py.render = ab, Py.__file = "src/components/chrome/chrome.vue", Py.install = Av, h(tt);
var ob = class {
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
}, sb = new ob(182, 70, 157, m("Purple")), cb = new ob(221, 203, 85, m("Gold")), lb = new ob(0, 130, 201, m("Nextcloud blue")), ub = new ob(0, 0, 0, m("Black")), db = new ob(255, 255, 255, m("White")), fb = [
	sb,
	new ob(191, 103, 139, m("Rosy brown")),
	new ob(201, 136, 121, m("Feldspar")),
	new ob(211, 169, 103, m("Whiskey")),
	cb,
	new ob(165, 184, 114, m("Olivine")),
	new ob(110, 166, 143, m("Acapulco")),
	new ob(55, 148, 172, m("Boston Blue")),
	lb,
	new ob(45, 115, 190, m("Mariner")),
	new ob(91, 100, 179, m("Blue Violet")),
	new ob(136, 85, 168, m("Deluge"))
];
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcColorPicker.mjs
h(w);
var pb = ["aria-label"], mb = {
	key: 0,
	class: "color-picker__simple"
}, hb = [
	"aria-label",
	"name",
	"checked",
	"onClick"
], gb = ["title"], _b = [
	"aria-label",
	"name",
	"checked"
], vb = {
	key: 0,
	class: "color-picker__navigation"
}, yb = /* @__PURE__ */ E(/* @__PURE__ */ B({
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
		let n = S(e, "modelValue"), r = S(e, "open"), i = e, o = t, s = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i, c = Je(), l = X(!1), d = W(() => {
			let e = i.palette;
			for (let t of e) if (typeof t == "string" && !t.match(s) || typeof t == "object" && !t.color?.match(s)) {
				a.error("[NcColorPicker] Invalid palette passed", { color: t }), e = [];
				break;
			}
			return e.length === 0 && (e = i.clearable ? [
				...fb,
				ub,
				db
			] : [...fb]), e.map((e) => ({
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
			return v(e) > .5 ? ub.color : db.color;
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
			trigger: A((e) => [Fe(t.$slots, "default", Se(He(e)), void 0, !0)]),
			default: A((t) => [Y("div", {
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
				default: A(() => [l.value ? (g(), V(U(Py), {
					key: 1,
					class: "color-picker__advanced",
					disableAlpha: "",
					disableFields: !e.advancedFields,
					modelValue: n.value ?? "#000000",
					"onUpdate:modelValue": _
				}, null, 8, ["disableFields", "modelValue"])) : (g(), K("div", mb, [(g(!0), K(D, null, u(d.value, ({ color: e, name: t }, r) => (g(), K("label", {
					key: r,
					class: Z(["color-picker__simple-color-circle", { "color-picker__simple-color-circle--active": e === n.value }]),
					style: Ee({
						backgroundColor: e,
						color: ee(e)
					})
				}, [e === n.value ? (g(), V(U(P), {
					key: 0,
					path: U(be)
				}, null, 8, ["path"])) : R("", !0), Y("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": t,
					name: `color-picker-${U(c)}`,
					checked: e === n.value,
					onClick: (t) => h(e)
				}, null, 8, hb)], 6))), 128)), e.clearable ? (g(), K("label", {
					key: 0,
					class: "color-picker__clear",
					title: U(m)("No color")
				}, [H(U(P), {
					size: n.value ? 28 : 34,
					path: U(Oe)
				}, null, 8, ["size", "path"]), Y("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": U(m)("No color"),
					name: `color-picker-${U(c)}`,
					checked: !n.value,
					onClick: i[0] ||= (e) => n.value = void 0
				}, null, 8, _b)], 8, gb)) : R("", !0)]))]),
				_: 1
			}), e.paletteOnly ? R("", !0) : (g(), K("div", vb, [l.value ? (g(), V(U(L), {
				key: 0,
				"aria-label": U(m)("Back"),
				title: U(m)("Back"),
				variant: "tertiary",
				onClick: i[1] ||= (e) => l.value = !1
			}, {
				icon: A(() => [H(U(P), {
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
				icon: A(() => [H(U(P), { path: U(Ze) }, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])), H(U(L), {
				variant: "primary",
				onClick: (e) => p(t.hide)
			}, {
				default: A(() => [z(q(U(m)("Choose")), 1)]),
				_: 1
			}, 8, ["onClick"])]))], 10, pb)]),
			_: 3
		}, 8, ["shown", "container"]));
	}
}), [["__scopeId", "data-v-fab7cffe"]]), bb = /* @__PURE__ */ n({ default: () => yb }), xb = ["aria-label"], Sb = { class: "rw-subnav__group" }, Cb = ["aria-current", "onClick"], wb = /* @__PURE__ */ B({
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
			"aria-label": e.ariaLabel || U(k)("rechnungswerk", "Bereiche")
		}, [(g(!0), K(D, null, u(e.groups, (t) => (g(), K(D, { key: t.label }, [Y("div", Sb, q(t.label), 1), (g(!0), K(D, null, u(t.items, (t) => (g(), K("button", {
			key: t.key,
			type: "button",
			class: Z(["rw-subnav__item", { "rw-subnav__item--active": e.modelValue === t.key }]),
			"aria-current": e.modelValue === t.key ? "page" : void 0,
			onClick: (e) => n("update:modelValue", t.key)
		}, [(g(), V(oe(t.icon), { size: 18 })), z(" " + q(t.label), 1)], 10, Cb))), 128))], 64))), 128))], 8, xb));
	}
}), Tb = {
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
}, Eb = ["aria-hidden", "aria-label"], Db = [
	"fill",
	"width",
	"height"
], Ob = { d: "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" }, kb = { key: 0 };
function Ab(e, t, n, r, i, a) {
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
	}, [Y("path", Ob, [n.title ? (g(), K("title", kb, q(n.title), 1)) : R("", !0)])], 8, Db))], 16, Eb);
}
var jb = /*#__PURE__*/ $(Tb, [["render", Ab]]), Mb = {
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
}, Nb = ["aria-hidden", "aria-label"], Pb = [
	"fill",
	"width",
	"height"
], Fb = { d: "M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" }, Ib = { key: 0 };
function Lb(e, t, n, r, i, a) {
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
	}, [Y("path", Fb, [n.title ? (g(), K("title", Ib, q(n.title), 1)) : R("", !0)])], 8, Pb))], 16, Nb);
}
var Rb = /*#__PURE__*/ $(Mb, [["render", Lb]]), zb = {
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
}, Bb = ["aria-hidden", "aria-label"], Vb = [
	"fill",
	"width",
	"height"
], Hb = { d: "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z" }, Ub = { key: 0 };
function Wb(e, t, n, r, i, a) {
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
	}, [Y("path", Hb, [n.title ? (g(), K("title", Ub, q(n.title), 1)) : R("", !0)])], 8, Vb))], 16, Bb);
}
var Gb = /*#__PURE__*/ $(zb, [["render", Wb]]), Kb = {
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
}, qb = ["aria-hidden", "aria-label"], Jb = [
	"fill",
	"width",
	"height"
], Yb = { d: "M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z" }, Xb = { key: 0 };
function Zb(e, t, n, r, i, a) {
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
	}, [Y("path", Yb, [n.title ? (g(), K("title", Xb, q(n.title), 1)) : R("", !0)])], 8, Jb))], 16, qb);
}
var Qb = /*#__PURE__*/ $(Kb, [["render", Zb]]), $b = {
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
}, ex = ["aria-hidden", "aria-label"], tx = [
	"fill",
	"width",
	"height"
], nx = { d: "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" }, rx = { key: 0 };
function ix(e, t, n, r, i, a) {
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
	}, [Y("path", nx, [n.title ? (g(), K("title", rx, q(n.title), 1)) : R("", !0)])], 8, tx))], 16, ex);
}
var ax = /*#__PURE__*/ $($b, [["render", ix]]), ox = {
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
}, sx = ["aria-hidden", "aria-label"], cx = [
	"fill",
	"width",
	"height"
], lx = { d: "M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5M7,4A3,3 0 0,0 4,7A3,3 0 0,0 7,10A3,3 0 0,0 10,7A3,3 0 0,0 7,4M17,14A3,3 0 0,0 14,17A3,3 0 0,0 17,20A3,3 0 0,0 20,17A3,3 0 0,0 17,14Z" }, ux = { key: 0 };
function dx(e, t, n, r, i, a) {
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
	}, [Y("path", lx, [n.title ? (g(), K("title", ux, q(n.title), 1)) : R("", !0)])], 8, cx))], 16, sx);
}
var fx = /*#__PURE__*/ $(ox, [["render", dx]]), px = {
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
}, mx = ["aria-hidden", "aria-label"], hx = [
	"fill",
	"width",
	"height"
], gx = { d: "M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, _x = { key: 0 };
function vx(e, t, n, r, i, a) {
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
	}, [Y("path", gx, [n.title ? (g(), K("title", _x, q(n.title), 1)) : R("", !0)])], 8, hx))], 16, mx);
}
var yx = /*#__PURE__*/ $(px, [["render", vx]]), bx = {
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
}, xx = ["aria-hidden", "aria-label"], Sx = [
	"fill",
	"width",
	"height"
], Cx = { d: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" }, wx = { key: 0 };
function Tx(e, t, n, r, i, a) {
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
	}, [Y("path", Cx, [n.title ? (g(), K("title", wx, q(n.title), 1)) : R("", !0)])], 8, Sx))], 16, xx);
}
var Ex = /*#__PURE__*/ $(bx, [["render", Tx]]), Dx = {
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
}, Ox = ["aria-hidden", "aria-label"], kx = [
	"fill",
	"width",
	"height"
], Ax = { d: "M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z" }, jx = { key: 0 };
function Mx(e, t, n, r, i, a) {
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
	}, [Y("path", Ax, [n.title ? (g(), K("title", jx, q(n.title), 1)) : R("", !0)])], 8, kx))], 16, Ox);
}
var Nx = /*#__PURE__*/ $(Dx, [["render", Mx]]), Px = {
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
}, Fx = ["aria-hidden", "aria-label"], Ix = [
	"fill",
	"width",
	"height"
], Lx = { d: "M3 4C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H13.5A6.5 6.5 0 0 1 13 18H3V8L11 13L19 8V11A6.5 6.5 0 0 1 19.5 11A6.5 6.5 0 0 1 21 11.18V6C21 4.9 20.1 4 19 4H3M3 6H19L11 11L3 6M19 12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5V12M15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29Z" }, Rx = { key: 0 };
function zx(e, t, n, r, i, a) {
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
	}, [Y("path", Lx, [n.title ? (g(), K("title", Rx, q(n.title), 1)) : R("", !0)])], 8, Ix))], 16, Fx);
}
var Bx = /*#__PURE__*/ $(Px, [["render", zx]]), Vx = {
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
}, Hx = ["aria-hidden", "aria-label"], Ux = [
	"fill",
	"width",
	"height"
], Wx = { d: "M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" }, Gx = { key: 0 };
function Kx(e, t, n, r, i, a) {
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
	}, [Y("path", Wx, [n.title ? (g(), K("title", Gx, q(n.title), 1)) : R("", !0)])], 8, Ux))], 16, Hx);
}
var qx = /*#__PURE__*/ $(Vx, [["render", Kx]]), Jx = {
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
}, Yx = ["aria-hidden", "aria-label"], Xx = [
	"fill",
	"width",
	"height"
], Zx = { d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z" }, Qx = { key: 0 };
function $x(e, t, n, r, i, a) {
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
	}, [Y("path", Zx, [n.title ? (g(), K("title", Qx, q(n.title), 1)) : R("", !0)])], 8, Xx))], 16, Yx);
}
var eS = /*#__PURE__*/ $(Jx, [["render", $x]]), tS = {
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
}, nS = ["aria-hidden", "aria-label"], rS = [
	"fill",
	"width",
	"height"
], iS = { d: "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z" }, aS = { key: 0 };
function oS(e, t, n, r, i, a) {
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
	}, [Y("path", iS, [n.title ? (g(), K("title", aS, q(n.title), 1)) : R("", !0)])], 8, rS))], 16, nS);
}
var sS = /*#__PURE__*/ $(tS, [["render", oS]]), cS = [
	"1-5",
	"6-20",
	"21-50",
	"51-200",
	"200+"
], lS = () => hs("/license"), uS = (e, t) => vs("/license", {
	key: e,
	employeeBucket: t
}), dS = () => gs("/license/refresh", {}), fS = () => ys("/license"), pS = { class: "rw-werkplus" }, mS = { class: "rw-hint" }, hS = {
	key: 3,
	class: "rw-werkplus__facts"
}, gS = { class: "rw-form-row" }, _S = { class: "rw-field" }, vS = ["placeholder"], yS = { class: "rw-field rw-field--narrow" }, bS = ["value"], xS = { class: "rw-hint" }, SS = { class: "rw-werkplus__actions" }, CS = { class: "rw-werkplus__privacy" }, wS = { class: "rw-werkplus__label" }, TS = { class: "rw-hint" }, ES = { class: "rw-hint" }, DS = { class: "rw-hint" }, OS = /*#__PURE__*/ $(/* @__PURE__ */ B({
	__name: "WerkPlusSettings",
	setup(e) {
		let t = X(null), n = X(""), r = X(cS[0]), i = X(!1), a = X(""), o = X(""), s = X(!1), c = W(() => t.value?.tier === "werkplus" ? "WerkPlus" : k("rechnungswerk", "Frei")), l = W(() => {
			let e = t.value;
			if (!e) return null;
			switch (e.state) {
				case "valid": return {
					type: "success",
					text: k("rechnungswerk", "WerkPlus ist aktiv.")
				};
				case "grace": return {
					type: "warning",
					text: k("rechnungswerk", "Die Lizenz ist abgelaufen und konnte noch nicht erneuert werden. Die Funktionen bleiben bis {date} erhalten.", { date: e.graceUntil ? d(e.graceUntil) : "" })
				};
				case "expired": return {
					type: "error",
					text: k("rechnungswerk", "Die Lizenz ist abgelaufen. RechnungsWerk arbeitet im freien Umfang weiter.")
				};
				case "invalid": return {
					type: "error",
					text: k("rechnungswerk", "Der gespeicherte Lizenznachweis ist ungültig. Bitte prüfe die Lizenz erneut.")
				};
				default: return null;
			}
		});
		function d(e) {
			return new Date(e).toLocaleDateString();
		}
		function f(e) {
			return new Date(e).toLocaleString();
		}
		function m(e, n = !1) {
			t.value = e, n || (r.value = e.employeeBucket);
		}
		async function h(e = !1) {
			try {
				m(await lS(), e), a.value = "";
			} catch (e) {
				a.value = e.message ?? k("rechnungswerk", "Lizenzstatus konnte nicht geladen werden.");
			}
		}
		async function _(e) {
			i.value = !0, o.value = "";
			try {
				m(await e()), n.value = "";
			} catch (e) {
				o.value = e.message ?? k("rechnungswerk", "WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut."), await h(!0);
			} finally {
				i.value = !1;
			}
		}
		function ee() {
			return _(() => uS(n.value.trim(), r.value));
		}
		function v() {
			return _(dS);
		}
		function te() {
			return s.value = !1, _(fS);
		}
		return p(h), (e, p) => (g(), K("div", pS, [
			Y("p", mS, q(U(k)("rechnungswerk", "Mit einem WerkPlus-Schlüssel schaltet RechnungsWerk zusätzliche Funktionen frei. Ohne Schlüssel bleibt alles, wie es ist.")), 1),
			a.value ? (g(), V(U(pt), {
				key: 0,
				type: "error",
				text: a.value
			}, null, 8, ["text"])) : R("", !0),
			t.value ? (g(), K(D, { key: 1 }, [
				l.value ? (g(), V(U(pt), {
					key: 0,
					type: l.value.type,
					text: l.value.text
				}, null, 8, ["type", "text"])) : R("", !0),
				o.value ? (g(), V(U(pt), {
					key: 1,
					type: "error",
					text: o.value
				}, null, 8, ["text"])) : t.value.lastError ? (g(), V(U(pt), {
					key: 2,
					type: "warning",
					text: t.value.lastError.message
				}, null, 8, ["text"])) : R("", !0),
				t.value.keySet ? (g(), K("dl", hS, [
					Y("dt", null, q(U(k)("rechnungswerk", "Tarif")), 1),
					Y("dd", null, q(c.value), 1),
					t.value.expiresAt ? (g(), K(D, { key: 0 }, [Y("dt", null, q(U(k)("rechnungswerk", "Gültig bis")), 1), Y("dd", null, q(d(t.value.expiresAt)), 1)], 64)) : R("", !0),
					Y("dt", null, q(U(k)("rechnungswerk", "Letzte erfolgreiche Prüfung")), 1),
					Y("dd", null, q(t.value.lastCheckAt ? f(t.value.lastCheckAt) : U(k)("rechnungswerk", "noch keine")), 1),
					Y("dt", null, q(U(k)("rechnungswerk", "Schlüssel")), 1),
					Y("dd", null, q(t.value.keyHint), 1)
				])) : R("", !0),
				Y("div", gS, [Y("label", _S, [Y("span", null, q(U(k)("rechnungswerk", "WerkPlus-Schlüssel")), 1), N(Y("input", {
					"onUpdate:modelValue": p[0] ||= (e) => n.value = e,
					class: "rw-input",
					type: "text",
					autocomplete: "off",
					spellcheck: "false",
					placeholder: t.value.keySet ? U(k)("rechnungswerk", "gespeichert, leer lassen") : "wp_…"
				}, null, 8, vS), [[J, n.value]])]), Y("label", yS, [Y("span", null, q(U(k)("rechnungswerk", "Mitarbeitende")), 1), N(Y("select", {
					"onUpdate:modelValue": p[1] ||= (e) => r.value = e,
					class: "rw-input"
				}, [(g(!0), K(D, null, u(U(cS), (e) => (g(), K("option", {
					key: e,
					value: e
				}, q(e), 9, bS))), 128))], 512), [[x, r.value]])])]),
				Y("p", xS, q(U(k)("rechnungswerk", "Übertragen wird nur die Größenklasse, keine Mitarbeiterzahl.")), 1),
				Y("div", SS, [
					H(U(L), {
						variant: "primary",
						disabled: i.value || !n.value.trim() && !t.value.keySet,
						onClick: ee
					}, {
						default: A(() => [z(q(t.value.keySet ? U(k)("rechnungswerk", "Speichern und prüfen") : U(k)("rechnungswerk", "Schlüssel prüfen und speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					t.value.keySet ? (g(), V(U(L), {
						key: 0,
						disabled: i.value,
						onClick: v
					}, {
						default: A(() => [z(q(U(k)("rechnungswerk", "Jetzt prüfen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : R("", !0),
					t.value.keySet ? (g(), V(U(L), {
						key: 1,
						variant: "tertiary",
						disabled: i.value,
						onClick: p[2] ||= (e) => s.value = !0
					}, {
						default: A(() => [z(q(U(k)("rechnungswerk", "Schlüssel entfernen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : R("", !0)
				]),
				Y("div", CS, [
					Y("span", wS, q(U(k)("rechnungswerk", "Was an WerkPlus übertragen wird")), 1),
					Y("p", TS, q(U(k)("rechnungswerk", "Der Schlüssel, die Kennung dieser Installation, die Version von RechnungsWerk und die Größenklasse. Niemals: Rechnungen, Kunden oder andere Belegdaten, Personendaten, Nextcloud-Benutzer oder Dateien.")), 1),
					Y("p", ES, q(U(k)("rechnungswerk", "Die Lizenz wird auf diesem Server geprüft. Ist WerkPlus nicht erreichbar, arbeitet RechnungsWerk normal weiter.")), 1),
					Y("p", DS, [z(q(U(k)("rechnungswerk", "Kennung dieser Installation:")) + " ", 1), Y("code", null, q(t.value.instanceUuid), 1)])
				])
			], 64)) : R("", !0),
			H(Qf, {
				open: s.value,
				name: U(k)("rechnungswerk", "WerkPlus-Schlüssel entfernen"),
				message: U(k)("rechnungswerk", "RechnungsWerk arbeitet danach im freien Umfang. Den Schlüssel kannst du jederzeit wieder eintragen. Fortfahren?"),
				confirmLabel: U(k)("rechnungswerk", "Entfernen"),
				onClose: p[3] ||= (e) => s.value = !1,
				onConfirm: te
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-23d4be1d"]]);
function kS(e) {
	if (typeof e != "string") return null;
	let t = e.trim().replace(/^#/, "");
	if (t.length === 3 && (t = t.split("").map((e) => e + e).join("")), !/^[0-9a-fA-F]{6}$/.test(t)) return null;
	let n = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, r = parseInt(t, 16);
	return .2126 * n(r >> 16 & 255) + .7152 * n(r >> 8 & 255) + .0722 * n(r & 255);
}
function AS(e, t) {
	let [n, r] = e > t ? [e, t] : [t, e];
	return (n + .05) / (r + .05);
}
function jS(e) {
	let t = kS(e);
	return t === null ? "#000000" : AS(t, 1) >= AS(t, 0) ? "#ffffff" : "#000000";
}
function MS(e) {
	let t = kS(e);
	return t !== null && AS(t, 1) < 4.5;
}
//#endregion
//#region src/utils/invoiceNumber.ts
function NS(e, t, n, r, i) {
	return e.replace(/\{YYYY\}/g, String(n).padStart(4, "0")).replace(/\{YY\}/g, String(n % 100).padStart(2, "0")).replace(/\{MM\}/g, String(r).padStart(2, "0")).replace(/\{DD\}/g, String(i).padStart(2, "0")).replace(/\{(#+)\}/g, (e, n) => String(t).padStart(n.length, "0"));
}
//#endregion
//#region src/utils/fileName.ts
var PS = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue"
};
function FS(e, t) {
	let n = (e) => String(e).padStart(2, "0"), r = {
		"{nummer}": t.nummer,
		"{YYYY}": String(t.date.getFullYear()),
		"{MM}": n(t.date.getMonth() + 1),
		"{DD}": n(t.date.getDate()),
		"{kunde}": t.kunde.replace(/[äöüßÄÖÜ]/g, (e) => PS[e] ?? e),
		"{typ}": t.typ
	}, i = e.replace(/\{nummer\}|\{YYYY\}|\{MM\}|\{DD\}|\{kunde\}|\{typ\}/g, (e) => r[e]);
	return i = i.replace(/[/\\:*?"<>|]/g, "-").replace(/\s+/g, " ").replace(/^[\s.]+|[\s.]+$/g, "").slice(0, 120), (i || "rechnung-1") + ".pdf";
}
//#endregion
//#region src/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
var IS = { class: "rw-view" }, LS = { class: "rw-settings-title" }, RS = {
	key: 0,
	class: "rw-settingspage"
}, zS = { class: "rw-settingspage__content" }, BS = { class: "rw-section" }, VS = { class: "rw-field" }, HS = { class: "rw-field" }, US = { class: "rw-form-row" }, WS = { class: "rw-field" }, GS = { class: "rw-field" }, KS = { class: "rw-form-row" }, qS = { class: "rw-field" }, JS = { class: "rw-field" }, YS = { class: "rw-field" }, XS = { class: "rw-hint" }, ZS = { class: "rw-section" }, QS = { class: "rw-form-row" }, $S = { class: "rw-field" }, eC = { class: "rw-field" }, tC = { class: "rw-field" }, nC = { class: "rw-hint" }, rC = { class: "rw-section" }, iC = { class: "rw-field rw-field--inline" }, aC = { class: "rw-accent" }, oC = ["aria-label"], sC = { class: "rw-field" }, cC = { class: "rw-accent-preview" }, lC = { class: "rw-hint" }, uC = {
	key: 0,
	class: "rw-hint"
}, dC = { class: "rw-field" }, fC = { class: "rw-logo" }, pC = ["src", "alt"], mC = {
	key: 1,
	class: "rw-logo__empty"
}, hC = { class: "rw-logo__actions" }, gC = { class: "rw-hint" }, _C = { class: "rw-section" }, vC = { class: "rw-field" }, yC = { class: "rw-hint" }, bC = { class: "rw-field" }, xC = { class: "rw-hint" }, SC = { class: "rw-field rw-reset-mode" }, CC = { class: "rw-hint" }, wC = { class: "rw-section" }, TC = { class: "rw-field" }, EC = { class: "rw-hint" }, DC = { class: "rw-field rw-reset-mode" }, OC = { class: "rw-hint" }, kC = { class: "rw-section" }, AC = { class: "rw-field" }, jC = { class: "rw-hint" }, MC = { class: "rw-section" }, NC = {
	key: 0,
	class: "rw-field"
}, PC = ["placeholder"], FC = { class: "rw-hint" }, IC = {
	key: 1,
	class: "rw-field tax-rate-field"
}, LC = ["value"], RC = { class: "rw-section" }, zC = { class: "rw-field rw-field--narrow" }, BC = { class: "rw-hint" }, VC = { class: "rw-section" }, HC = { class: "rw-field" }, UC = { class: "rw-hint" }, WC = { class: "rw-form-row" }, GC = { class: "rw-field" }, KC = { class: "rw-field" }, qC = { class: "rw-section" }, JC = { class: "rw-field" }, YC = { class: "rw-archive-folder" }, XC = {
	key: 0,
	class: "rw-archive-folder__path"
}, ZC = {
	key: 1,
	class: "rw-archive-folder__empty"
}, QC = { class: "rw-field" }, $C = ["placeholder"], ew = { class: "rw-hint" }, tw = { class: "rw-section" }, nw = { class: "rw-hint" }, rw = { class: "rw-form-row" }, iw = { class: "rw-field" }, aw = { class: "rw-field rw-field--narrow" }, ow = { class: "rw-field rw-field--narrow" }, sw = { value: "none" }, cw = { class: "rw-form-row" }, lw = { class: "rw-field" }, uw = { class: "rw-field" }, dw = ["placeholder"], fw = { class: "smtp-test" }, pw = { class: "rw-section" }, mw = { class: "rw-hint" }, hw = { class: "rw-form-row" }, gw = { class: "rw-field" }, _w = { class: "rw-field rw-field--narrow" }, vw = { class: "rw-field rw-field--narrow" }, yw = { class: "rw-form-row" }, bw = { class: "rw-field" }, xw = { class: "rw-field" }, Sw = ["placeholder"], Cw = { class: "rw-section" }, ww = { class: "rw-hint" }, Tw = { class: "rw-section" }, Ew = { class: "rw-hint rw-access-intro" }, Dw = { class: "rw-access-group" }, Ow = { class: "rw-access-label" }, kw = { class: "rw-hint rw-access-desc" }, Aw = { class: "rw-access-group" }, jw = { class: "rw-access-label" }, Mw = { class: "rw-hint rw-access-desc" }, Nw = { class: "rw-section" }, Pw = { class: "rw-action-bar" }, Fw = [
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
		component: dv
	},
	{
		path: "/products",
		name: "products",
		component: jg
	},
	{
		path: "/text-snippets",
		name: "text-snippets",
		component: c_
	},
	{
		path: "/me",
		name: "my-contact",
		component: Dv
	},
	{
		path: "/settings",
		name: "settings",
		component: /* @__PURE__ */ $(/* @__PURE__ */ B({
			__name: "SettingsView",
			setup(e) {
				let t = Ae(), n = Zl(), r = X(null), i = W(() => [
					{
						label: k("rechnungswerk", "Firma"),
						items: [
							{
								key: "firma",
								label: k("rechnungswerk", "Firma"),
								icon: jb
							},
							{
								key: "bank",
								label: k("rechnungswerk", "Bankverbindung"),
								icon: Rb
							},
							{
								key: "branding",
								label: k("rechnungswerk", "Branding"),
								icon: Gb
							}
						]
					},
					{
						label: k("rechnungswerk", "Belege"),
						items: [
							{
								key: "rechnungsnummer",
								label: k("rechnungswerk", "Rechnungsnummer"),
								icon: jo
							},
							{
								key: "angebotsnummer",
								label: k("rechnungswerk", "Angebotsnummer"),
								icon: Qb
							},
							{
								key: "dateiname",
								label: k("rechnungswerk", "PDF-Dateiname"),
								icon: Oa
							},
							{
								key: "texte",
								label: k("rechnungswerk", "Standardtexte"),
								icon: ax
							}
						]
					},
					{
						label: k("rechnungswerk", "Buchhaltung"),
						items: [{
							key: "steuer",
							label: k("rechnungswerk", "Steuer"),
							icon: fx
						}, {
							key: "zahlung",
							label: k("rechnungswerk", "Zahlung"),
							icon: yx
						}]
					},
					{
						label: k("rechnungswerk", "Versand"),
						items: [
							{
								key: "versand",
								label: k("rechnungswerk", "Versand"),
								icon: Ex
							},
							{
								key: "smtp",
								label: k("rechnungswerk", "Eigenes SMTP-Konto"),
								icon: Nx
							},
							{
								key: "datev",
								label: k("rechnungswerk", "DATEV-Rückmeldung"),
								icon: Bx
							}
						]
					},
					{
						label: k("rechnungswerk", "Ablage & Zugriff"),
						items: [{
							key: "ablage",
							label: k("rechnungswerk", "Ablage in Nextcloud"),
							icon: qx
						}, {
							key: "zugriff",
							label: k("rechnungswerk", "Zugriff & Administration"),
							icon: eS
						}]
					},
					{
						label: k("rechnungswerk", "Lizenz"),
						items: [{
							key: "werkplus",
							label: k("rechnungswerk", "WerkPlus"),
							icon: sS
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
				let m = X(!1), h = X(!1), _ = X(!1), ee = X(!1), v = X(!1), te = X(0), ne = X((/* @__PURE__ */ new Date()).getFullYear()), re = X((/* @__PURE__ */ new Date()).getMonth() + 1), y = X((/* @__PURE__ */ new Date()).getDate()), ie = X(null), S = X(0), C = X(null), ae = X(null), w = W(() => r.value?.accentColor || "#2c3e50"), T = W(() => ({
					background: w.value,
					color: jS(w.value)
				})), oe = W(() => MS(w.value));
				function E(e) {
					r.value && (r.value.accentColor = e ?? null);
				}
				let se = X([]), ce = X([]), O = X([]), le = X(!1), j = X(!1), M = X(""), P = null, ue = X(""), F = X(""), I = X(!1), de = X(""), fe = X(!1), pe = X(!1), me = W(() => r.value?.logoFileId ? Jl(r.value.logoFileId) : ""), he = W(() => le.value ? k("rechnungswerk", "Suche läuft\xA0…") : M.value.trim().length < 2 ? k("rechnungswerk", "Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.") : k("rechnungswerk", "Keine Treffer.")), ge = W(() => r.value?.numberResetMode === "continuous" || ne.value === ie.value ? te.value : 0), _e = W(() => ge.value + 1), ve = W(() => {
					if (!r.value) return "";
					let e = ae.value && ae.value > 0 ? ae.value : _e.value;
					return NS(r.value.numberFormat || "RE-{YYYY}-{####}", e, ne.value, re.value, y.value);
				}), ye = W(() => {
					if (!r.value) return "";
					let e = r.value.quoteNumberResetMode === "continuous" || ne.value === C.value ? S.value : 0;
					return NS(r.value.quoteNumberFormat || "AN-{YYYY}-{####}", e + 1, ne.value, re.value, y.value);
				}), be = W(() => r.value ? FS(r.value.fileNameFormat || "{nummer}", {
					nummer: ve.value,
					date: /* @__PURE__ */ new Date(),
					kunde: "Muster GmbH",
					typ: "Rechnung"
				}) : "");
				p(async () => {
					try {
						await n.fetch(), Se();
						let e = await Ls();
						se.value = xe(e.admins), ce.value = xe(e.users);
					} catch (e) {
						Be(e, k("rechnungswerk", "Laden fehlgeschlagen"));
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
					if (M.value = e, P && clearTimeout(P), e.trim().length < 2) {
						O.value = [], le.value = !1;
						return;
					}
					le.value = !0, P = setTimeout(async () => {
						try {
							O.value = await zs(e.trim());
						} catch {
							O.value = [];
						} finally {
							le.value = !1;
						}
					}, 300);
				}
				function Se() {
					let e = n.settings;
					if (e) {
						te.value = e.numberCounter, ie.value = e.numberCounterYear, S.value = e.quoteNumberCounter, C.value = e.quoteNumberCounterYear;
						{
							let t = e.numberResetMode === "continuous" || ne.value === e.numberCounterYear ? e.numberCounter : 0;
							ae.value = t + 1;
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
						e = await gt(k("rechnungswerk", "Zielordner für die Ablage wählen")).setMultiSelect(!1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories(!0).addButton({
							label: k("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof _t) return;
						Be(e, k("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						c.value = !0, l.value = "";
						try {
							let t = await Yl(e);
							r.value && (r.value.archiveFolderId = t.archiveFolderId), s.value = t.archiveFolderPath;
						} catch (e) {
							Be(e, k("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
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
						Be(e, k("rechnungswerk", "Zielordner konnte nicht entfernt werden."));
					} finally {
						c.value = !1;
					}
				}
				async function Le() {
					let e;
					try {
						e = await gt(k("rechnungswerk", "Firmenlogo wählen")).setMultiSelect(!1).setMimeTypeFilter([
							"image/png",
							"image/jpeg",
							"image/gif"
						]).addButton({
							label: k("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof _t) return;
						Be(e, k("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						pe.value = !0, l.value = "";
						try {
							let t = await Kl(e);
							r.value && (r.value.logoFileId = t.logoFileId);
						} catch (e) {
							Be(e, k("rechnungswerk", "Logo konnte nicht gesetzt werden."));
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
						Be(e, k("rechnungswerk", "Logo konnte nicht entfernt werden."));
					} finally {
						pe.value = !1;
					}
				}
				async function ze() {
					if (!r.value) return;
					l.value = "";
					let e = (r.value.numberFormat || "").trim();
					if (r.value.numberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(e)) {
						f(k("rechnungswerk", "Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
						return;
					}
					let t = ae.value;
					if (t == null || !Number.isInteger(t) || t < 1) {
						f(k("rechnungswerk", "Die nächste Rechnungsnummer muss eine ganze Zahl ab 1 sein."));
						return;
					}
					if (t < _e.value) {
						f(k("rechnungswerk", "Die nächste Rechnungsnummer muss mindestens {min} sein, da bereits die Nummer {issued} vergeben wurde.", {
							min: _e.value,
							issued: ge.value
						}));
						return;
					}
					let i = (r.value.quoteNumberFormat || "").trim();
					if (r.value.quoteNumberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(i)) {
						f(k("rechnungswerk", "Bei jährlichem Angebots-Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
						return;
					}
					let a = (r.value.fileNameFormat || "").trim();
					if (a !== "" && !a.includes("{nummer}")) {
						f(k("rechnungswerk", "Das Dateinamen-Schema muss den Platzhalter {nummer} enthalten, damit Dateinamen eindeutig bleiben."));
						return;
					}
					let o = [
						{
							value: r.value.contactEmail,
							label: k("rechnungswerk", "Kontakt-E-Mail")
						},
						{
							value: r.value.smtpFromEmail,
							label: k("rechnungswerk", "Absender-E-Mail")
						},
						{
							value: r.value.datevUploadMail,
							label: k("rechnungswerk", "DATEV-Upload-Mail")
						}
					];
					for (let { value: e, label: t } of o) {
						let n = (e || "").trim();
						if (n !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)) {
							f(k("rechnungswerk", "Bitte eine gültige E-Mail-Adresse angeben ({field}).", { field: t }));
							return;
						}
					}
					j.value = !0;
					try {
						let e = { ...r.value };
						t > _e.value && (e.numberCounter = t - 1), delete e.logoFileId, delete e.archiveFolderId, ue.value !== "" && (e.smtpPassword = ue.value), F.value !== "" && (e.imapPassword = F.value);
						try {
							await n.save(e);
						} catch (e) {
							Be(e, k("rechnungswerk", "Speichern der Einstellungen fehlgeschlagen."));
							return;
						}
						try {
							await Rs({
								admins: se.value.map((e) => e.id),
								users: ce.value.map((e) => e.id)
							});
						} catch (e) {
							Be(e, k("rechnungswerk", "Einstellungen gespeichert, aber die Zugriffsrechte konnten nicht gespeichert werden. Bitte erneut speichern."));
							return;
						}
						ue.value = "", F.value = "", Se();
					} finally {
						j.value = !1;
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
							}), fe.value = !0, de.value = k("rechnungswerk", "Verbindung erfolgreich.");
						} catch (e) {
							fe.value = !1, de.value = e.message ?? k("rechnungswerk", "Verbindung fehlgeschlagen.");
						} finally {
							I.value = !1;
						}
					}
				}
				function Be(e, t) {
					f(e.message ?? t), console.error("[rechnungswerk] settings:", e);
				}
				return (e, t) => (g(), K("div", IS, [
					Y("h2", LS, q(U(k)("rechnungswerk", "Einstellungen")), 1),
					Y("div", {
						ref_key: "errorAnchor",
						ref: d
					}, [l.value ? (g(), V(U(pt), {
						key: 0,
						type: "error",
						text: l.value
					}, null, 8, ["text"])) : R("", !0)], 512),
					r.value ? (g(), K("div", RS, [H(wb, {
						groups: i.value,
						modelValue: a.value,
						ariaLabel: U(k)("rechnungswerk", "Einstellungs-Navigation"),
						"onUpdate:modelValue": t[0] ||= (e) => a.value = e
					}, null, 8, [
						"groups",
						"modelValue",
						"ariaLabel"
					]), Y("div", zS, [
						N(Y("section", BS, [
							Y("h3", null, q(U(k)("rechnungswerk", "Firma")), 1),
							Y("label", VS, [Y("span", null, q(U(k)("rechnungswerk", "Firmenname")), 1), N(Y("input", {
								"onUpdate:modelValue": t[1] ||= (e) => r.value.companyName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.companyName]])]),
							Y("label", HS, [Y("span", null, q(U(k)("rechnungswerk", "Adresse")), 1), N(Y("textarea", {
								"onUpdate:modelValue": t[2] ||= (e) => r.value.companyAddress = e,
								class: "rw-input",
								rows: "3"
							}, null, 512), [[J, r.value.companyAddress]])]),
							Y("div", US, [Y("label", WS, [Y("span", null, q(U(k)("rechnungswerk", "USt-IdNr.")), 1), N(Y("input", {
								"onUpdate:modelValue": t[3] ||= (e) => r.value.vatId = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.vatId]])]), Y("label", GS, [Y("span", null, q(U(k)("rechnungswerk", "Steuernummer")), 1), N(Y("input", {
								"onUpdate:modelValue": t[4] ||= (e) => r.value.taxNumber = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.taxNumber]])])]),
							Y("div", KS, [
								Y("label", qS, [Y("span", null, q(U(k)("rechnungswerk", "Ansprechpartner")), 1), N(Y("input", {
									"onUpdate:modelValue": t[5] ||= (e) => r.value.contactPerson = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[J, r.value.contactPerson]])]),
								Y("label", JS, [Y("span", null, q(U(k)("rechnungswerk", "Telefon")), 1), N(Y("input", {
									"onUpdate:modelValue": t[6] ||= (e) => r.value.contactPhone = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[J, r.value.contactPhone]])]),
								Y("label", YS, [Y("span", null, q(U(k)("rechnungswerk", "Kontakt-E-Mail")), 1), N(Y("input", {
									"onUpdate:modelValue": t[7] ||= (e) => r.value.contactEmail = e,
									class: "rw-input",
									type: "email"
								}, null, 512), [[J, r.value.contactEmail]])])
							]),
							Y("p", XS, q(U(k)("rechnungswerk", "Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).")), 1)
						], 512), [[b, a.value === "firma"]]),
						N(Y("section", ZS, [
							Y("h3", null, q(U(k)("rechnungswerk", "Bankverbindung")), 1),
							Y("div", QS, [Y("label", $S, [Y("span", null, q(U(k)("rechnungswerk", "IBAN")), 1), N(Y("input", {
								"onUpdate:modelValue": t[8] ||= (e) => r.value.iban = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.iban]])]), Y("label", eC, [Y("span", null, q(U(k)("rechnungswerk", "BIC")), 1), N(Y("input", {
								"onUpdate:modelValue": t[9] ||= (e) => r.value.bic = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.bic]])])]),
							Y("label", tC, [Y("span", null, q(U(k)("rechnungswerk", "Bankname")), 1), N(Y("input", {
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
								default: A(() => [z(q(U(k)("rechnungswerk", "Girocode (Bezahl-QR-Code) auf Rechnungen anzeigen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							Y("p", nC, q(U(k)("rechnungswerk", "Druckt einen EPC-QR-Code neben die Bankverbindung: Kunden scannen ihn mit der Banking-App, Empfänger, Betrag und Verwendungszweck sind vorausgefüllt. Erscheint nur auf Rechnungen mit positivem Betrag, nicht auf Stornobelegen.")), 1)
						], 512), [[b, a.value === "bank"]]),
						N(Y("section", rC, [
							Y("h3", null, q(U(k)("rechnungswerk", "Branding")), 1),
							Y("div", iC, [Y("span", null, q(U(k)("rechnungswerk", "Akzentfarbe")), 1), Y("div", aC, [H(U(yb), {
								modelValue: w.value,
								advancedFields: "",
								"onUpdate:modelValue": E
							}, {
								default: A(() => [Y("button", {
									type: "button",
									class: "rw-accent__trigger",
									"aria-label": U(k)("rechnungswerk", "Akzentfarbe") + ": " + w.value.toUpperCase(),
									style: Ee(T.value)
								}, q(w.value.toUpperCase()), 13, oC)]),
								_: 1
							}, 8, ["modelValue"]), r.value.accentColor ? (g(), V(U(L), {
								key: 0,
								variant: "tertiary",
								onClick: t[12] ||= (e) => r.value.accentColor = null
							}, {
								default: A(() => [z(q(U(k)("rechnungswerk", "Zurücksetzen")), 1)]),
								_: 1
							})) : R("", !0)])]),
							Y("div", sC, [
								Y("table", cC, [Y("thead", null, [Y("tr", { style: Ee(T.value) }, [...t[42] ||= [
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
								Y("p", lC, q(U(k)("rechnungswerk", "So erscheint die Kopfzeile der Positionstabelle auf der Rechnung.")), 1),
								oe.value ? (g(), K("p", uC, q(U(k)("rechnungswerk", "Auf dieser Farbe wäre weiße Schrift zu blass, deshalb steht sie schwarz auf der Rechnung. Die Farbe selbst bleibt unverändert.")), 1)) : R("", !0)
							]),
							Y("div", dC, [
								Y("span", null, q(U(k)("rechnungswerk", "Firmenlogo")), 1),
								Y("div", fC, [r.value.logoFileId ? (g(), K("img", {
									key: 0,
									src: me.value,
									alt: U(k)("rechnungswerk", "Firmenlogo"),
									class: "rw-logo__preview"
								}, null, 8, pC)) : (g(), K("span", mC, q(U(k)("rechnungswerk", "Kein Logo gewählt")), 1)), Y("div", hC, [H(U(L), {
									disabled: pe.value,
									onClick: Le
								}, {
									default: A(() => [z(q(r.value.logoFileId ? U(k)("rechnungswerk", "Logo ändern") : U(k)("rechnungswerk", "Logo wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]), r.value.logoFileId ? (g(), V(U(L), {
									key: 0,
									variant: "tertiary",
									disabled: pe.value,
									onClick: Re
								}, {
									default: A(() => [z(q(U(k)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : R("", !0)])]),
								Y("p", gC, q(U(k)("rechnungswerk", "Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.")), 1)
							])
						], 512), [[b, a.value === "branding"]]),
						N(Y("section", _C, [
							Y("h3", null, q(U(k)("rechnungswerk", "Rechnungsnummer")), 1),
							Y("label", vC, [Y("span", null, q(U(k)("rechnungswerk", "Format")), 1), N(Y("input", {
								"onUpdate:modelValue": t[13] ||= (e) => r.value.numberFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.numberFormat]])]),
							Y("p", yC, [
								z(q(U(k)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[44] ||= Y("br", null, null, -1),
								z(" " + q(U(k)("rechnungswerk", "Vorschau: {preview}", { preview: ve.value })), 1)
							]),
							Y("label", bC, [Y("span", null, q(U(k)("rechnungswerk", "Nächste Rechnungsnummer")), 1), N(Y("input", {
								"onUpdate:modelValue": t[14] ||= (e) => ae.value = e,
								class: "rw-input",
								type: "number",
								min: "1",
								step: "1"
							}, null, 512), [[
								J,
								ae.value,
								void 0,
								{ number: !0 }
							]])]),
							Y("p", xC, q(U(k)("rechnungswerk", "Die laufende Nummer der nächsten Rechnung. Zum Einstieg in eine bestehende Nummernfolge hier den gewünschten Wert setzen. Nummern lassen sich nur vorwärts setzen, nie unter eine bereits vergebene.")), 1),
							Y("div", SC, [
								Y("span", null, q(U(k)("rechnungswerk", "Nummernkreis")), 1),
								H(U(Ot), {
									type: "radio",
									name: "rw-reset-mode",
									value: "yearly",
									modelValue: r.value.numberResetMode,
									"onUpdate:modelValue": je
								}, {
									default: A(() => [z(q(U(k)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								H(U(Ot), {
									type: "radio",
									name: "rw-reset-mode",
									value: "continuous",
									modelValue: r.value.numberResetMode,
									"onUpdate:modelValue": je
								}, {
									default: A(() => [z(q(U(k)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							Y("p", CC, q(U(k)("rechnungswerk", "Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.")), 1)
						], 512), [[b, a.value === "rechnungsnummer"]]),
						N(Y("section", wC, [
							Y("h3", null, q(U(k)("rechnungswerk", "Angebotsnummer")), 1),
							Y("label", TC, [Y("span", null, q(U(k)("rechnungswerk", "Format")), 1), N(Y("input", {
								"onUpdate:modelValue": t[15] ||= (e) => r.value.quoteNumberFormat = e,
								class: "rw-input",
								type: "text",
								placeholder: "AN-{YYYY}-{####}"
							}, null, 512), [[J, r.value.quoteNumberFormat]])]),
							Y("p", EC, [
								z(q(U(k)("rechnungswerk", "Eigener, von den Rechnungen unabhängiger Nummernkreis. Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[45] ||= Y("br", null, null, -1),
								z(" " + q(U(k)("rechnungswerk", "Vorschau: {preview}", { preview: ye.value })), 1)
							]),
							Y("div", DC, [
								Y("span", null, q(U(k)("rechnungswerk", "Nummernkreis")), 1),
								H(U(Ot), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "yearly",
									modelValue: r.value.quoteNumberResetMode,
									"onUpdate:modelValue": Ne
								}, {
									default: A(() => [z(q(U(k)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								H(U(Ot), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "continuous",
									modelValue: r.value.quoteNumberResetMode,
									"onUpdate:modelValue": Ne
								}, {
									default: A(() => [z(q(U(k)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							Y("p", OC, q(U(k)("rechnungswerk", "Angebote haben keine gesetzliche Nummernkreis-Pflicht; Lücken sind erlaubt. Bei „Jährlich zurücksetzen“ muss das Format dennoch eine Jahreskomponente enthalten.")), 1)
						], 512), [[b, a.value === "angebotsnummer"]]),
						N(Y("section", kC, [
							Y("h3", null, q(U(k)("rechnungswerk", "PDF-Dateiname")), 1),
							Y("label", AC, [Y("span", null, q(U(k)("rechnungswerk", "Schema")), 1), N(Y("input", {
								"onUpdate:modelValue": t[16] ||= (e) => r.value.fileNameFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.fileNameFormat]])]),
							Y("p", jC, [
								z(q(U(k)("rechnungswerk", "Gilt für Download, Kundenmail und DATEV-Mail. Platzhalter: {nummer} Rechnungsnummer, {YYYY}/{MM}/{DD} Rechnungsdatum, {kunde} Kundenname, {typ} Rechnung/Storno. {nummer} ist Pflicht.")) + " ", 1),
								t[46] ||= Y("br", null, null, -1),
								z(" " + q(U(k)("rechnungswerk", "Vorschau: {preview}", { preview: be.value })), 1)
							])
						], 512), [[b, a.value === "dateiname"]]),
						N(Y("section", MC, [
							Y("h3", null, q(U(k)("rechnungswerk", "Steuer")), 1),
							H(U(Ot), {
								type: "switch",
								modelValue: r.value.smallBusiness,
								"onUpdate:modelValue": Ce
							}, {
								default: A(() => [z(q(U(k)("rechnungswerk", "Kleinunternehmer nach §19 UStG (kein USt-Ausweis)")), 1)]),
								_: 1
							}, 8, ["modelValue"]),
							r.value.smallBusiness ? (g(), K("label", NC, [
								Y("span", null, q(U(k)("rechnungswerk", "Hinweistext auf der Rechnung (§ 19 UStG)")), 1),
								N(Y("textarea", {
									"onUpdate:modelValue": t[17] ||= (e) => r.value.smallBusinessNote = e,
									class: "rw-input",
									rows: "2",
									placeholder: U(tu)
								}, null, 8, PC), [[J, r.value.smallBusinessNote]]),
								Y("span", FC, q(U(k)("rechnungswerk", "Erscheint bei aktiviertem Kleinunternehmer-Status auf der Rechnung. Leer lassen für den Standardtext.")), 1)
							])) : R("", !0),
							r.value.smallBusiness ? R("", !0) : (g(), K("label", IC, [Y("span", null, q(U(k)("rechnungswerk", "Standard-USt-Satz")), 1), N(Y("select", {
								"onUpdate:modelValue": t[18] ||= (e) => r.value.defaultTaxRateBp = e,
								class: "rw-input"
							}, [(g(!0), K(D, null, u(U(eu), (e) => (g(), K("option", {
								key: e,
								value: e
							}, q(U(_u)(e)), 9, LC))), 128))], 512), [[
								x,
								r.value.defaultTaxRateBp,
								void 0,
								{ number: !0 }
							]])]))
						], 512), [[b, a.value === "steuer"]]),
						N(Y("section", RC, [
							Y("h3", null, q(U(k)("rechnungswerk", "Zahlung")), 1),
							Y("label", zC, [Y("span", null, q(U(k)("rechnungswerk", "Standard-Zahlungsziel (Tage)")), 1), N(Y("input", {
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
							Y("p", BC, q(U(k)("rechnungswerk", "Wird bei neuen Rechnungen als Zahlungsziel vorbelegt. Leer lassen für kein Standardziel.")), 1)
						], 512), [[b, a.value === "zahlung"]]),
						N(Y("section", VC, [
							Y("h3", null, q(U(k)("rechnungswerk", "Versand")), 1),
							Y("label", HC, [Y("span", null, q(U(k)("rechnungswerk", "DATEV-Upload-Mail")), 1), N(Y("input", {
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
								default: A(() => [z(q(U(k)("rechnungswerk", "E-Rechnung beim Festschreiben automatisch an DATEV senden")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							Y("p", UC, q(U(k)("rechnungswerk", "Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.")), 1),
							Y("div", WC, [Y("label", GC, [Y("span", null, q(U(k)("rechnungswerk", "Absender-Name")), 1), N(Y("input", {
								"onUpdate:modelValue": t[21] ||= (e) => r.value.smtpFromName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.smtpFromName]])]), Y("label", KC, [Y("span", null, q(U(k)("rechnungswerk", "Absender-E-Mail")), 1), N(Y("input", {
								"onUpdate:modelValue": t[22] ||= (e) => r.value.smtpFromEmail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[J, r.value.smtpFromEmail]])])])
						], 512), [[b, a.value === "versand"]]),
						N(Y("section", qC, [
							Y("h3", null, q(U(k)("rechnungswerk", "Ablage in Nextcloud")), 1),
							Y("div", JC, [Y("span", null, q(U(k)("rechnungswerk", "Zielordner")), 1), Y("div", YC, [
								s.value ? (g(), K("span", XC, q(s.value), 1)) : (g(), K("span", ZC, q(U(k)("rechnungswerk", "Kein Ordner gewählt")), 1)),
								H(U(L), {
									disabled: c.value,
									onClick: Fe
								}, {
									default: A(() => [z(q(s.value ? U(k)("rechnungswerk", "Ordner ändern") : U(k)("rechnungswerk", "Ordner wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]),
								s.value ? (g(), V(U(L), {
									key: 2,
									variant: "tertiary",
									disabled: c.value,
									onClick: Ie
								}, {
									default: A(() => [z(q(U(k)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : R("", !0)
							])]),
							H(U(Ot), {
								type: "switch",
								modelValue: r.value.archiveEnabled,
								disabled: !r.value.archiveFolderId,
								"onUpdate:modelValue": Oe
							}, {
								default: A(() => [z(q(U(k)("rechnungswerk", "ZUGFeRD-PDF beim Festschreiben automatisch im Zielordner ablegen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							Y("label", QC, [Y("span", null, q(U(k)("rechnungswerk", "Unterordner (optional)")), 1), N(Y("input", {
								"onUpdate:modelValue": t[23] ||= (e) => r.value.archiveSubfolder = e,
								class: "rw-input",
								type: "text",
								placeholder: U(k)("rechnungswerk", "z. B. {YYYY}")
							}, null, 8, $C), [[J, r.value.archiveSubfolder]])]),
							Y("p", ew, [
								z(q(U(k)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {MM} Monat, {DD} Tag (Rechnungsdatum). Unterordner werden bei Bedarf angelegt. Vorhandene Dateien werden nie überschrieben.")) + " ", 1),
								t[47] ||= Y("br", null, null, -1),
								z(" " + q(U(k)("rechnungswerk", "Komfort-Ablage für den Team-Zugriff. Kein revisionssicheres Archiv, die GoBD-Archivierung erfolgt über DATEV bzw. Steuerberater.")), 1)
							])
						], 512), [[b, a.value === "ablage"]]),
						N(Y("section", tw, [
							Y("h3", null, q(U(k)("rechnungswerk", "Eigenes SMTP-Konto (optional)")), 1),
							Y("p", nw, q(U(k)("rechnungswerk", "Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).")), 1),
							Y("div", rw, [
								Y("label", iw, [Y("span", null, q(U(k)("rechnungswerk", "Server (Host)")), 1), N(Y("input", {
									"onUpdate:modelValue": t[24] ||= (e) => r.value.smtpHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "smtp.example.com"
								}, null, 512), [[J, r.value.smtpHost]])]),
								Y("label", aw, [Y("span", null, q(U(k)("rechnungswerk", "Port")), 1), N(Y("input", {
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
								Y("label", ow, [Y("span", null, q(U(k)("rechnungswerk", "Verschlüsselung")), 1), N(Y("select", {
									"onUpdate:modelValue": t[26] ||= (e) => r.value.smtpSecurity = e,
									class: "rw-input"
								}, [
									t[48] ||= Y("option", { value: "starttls" }, "STARTTLS", -1),
									t[49] ||= Y("option", { value: "ssl" }, "SSL/TLS", -1),
									Y("option", sw, q(U(k)("rechnungswerk", "Keine")), 1)
								], 512), [[x, r.value.smtpSecurity]])])
							]),
							Y("div", cw, [Y("label", lw, [Y("span", null, q(U(k)("rechnungswerk", "Benutzer")), 1), N(Y("input", {
								"onUpdate:modelValue": t[27] ||= (e) => r.value.smtpUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.smtpUser]])]), Y("label", uw, [Y("span", null, q(U(k)("rechnungswerk", "Passwort")), 1), N(Y("input", {
								"onUpdate:modelValue": t[28] ||= (e) => ue.value = e,
								class: "rw-input",
								type: "password",
								placeholder: r.value.smtpPasswordSet ? U(k)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, dw), [[J, ue.value]])])]),
							Y("div", fw, [H(U(L), {
								disabled: !r.value.smtpHost || I.value,
								onClick: G
							}, {
								default: A(() => [z(q(U(k)("rechnungswerk", "Verbindung testen")), 1)]),
								_: 1
							}, 8, ["disabled"]), de.value ? (g(), K("span", {
								key: 0,
								class: Z(["smtp-test__result", fe.value ? "rw-ok" : "rw-err"])
							}, q(de.value), 3)) : R("", !0)])
						], 512), [[b, a.value === "smtp"]]),
						N(Y("section", pw, [
							Y("h3", null, q(U(k)("rechnungswerk", "DATEV-Rückmeldung (IMAP, optional)")), 1),
							Y("p", mw, q(U(k)("rechnungswerk", "DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.")), 1),
							Y("div", hw, [
								Y("label", gw, [Y("span", null, q(U(k)("rechnungswerk", "Server (Host)")), 1), N(Y("input", {
									"onUpdate:modelValue": t[29] ||= (e) => r.value.imapHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "imap.example.com"
								}, null, 512), [[J, r.value.imapHost]])]),
								Y("label", _w, [Y("span", null, q(U(k)("rechnungswerk", "Port")), 1), N(Y("input", {
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
								Y("label", vw, [Y("span", null, q(U(k)("rechnungswerk", "Verschlüsselung")), 1), N(Y("select", {
									"onUpdate:modelValue": t[31] ||= (e) => r.value.imapSecurity = e,
									class: "rw-input"
								}, [...t[50] ||= [
									Y("option", { value: "ssl" }, "SSL/TLS", -1),
									Y("option", { value: "starttls" }, "STARTTLS", -1),
									Y("option", { value: "tls" }, "TLS", -1)
								]], 512), [[x, r.value.imapSecurity]])])
							]),
							Y("div", yw, [Y("label", bw, [Y("span", null, q(U(k)("rechnungswerk", "Benutzer")), 1), N(Y("input", {
								"onUpdate:modelValue": t[32] ||= (e) => r.value.imapUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.imapUser]])]), Y("label", xw, [Y("span", null, q(U(k)("rechnungswerk", "Passwort")), 1), N(Y("input", {
								"onUpdate:modelValue": t[33] ||= (e) => F.value = e,
								class: "rw-input",
								type: "password",
								placeholder: r.value.imapPasswordSet ? U(k)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, Sw), [[J, F.value]])])]),
							H(U(Ot), {
								modelValue: r.value.imapCleanup,
								disabled: !r.value.imapHost,
								"onUpdate:modelValue": t[34] ||= (e) => r.value.imapCleanup = e
							}, {
								default: A(() => [z(q(U(k)("rechnungswerk", "Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"])
						], 512), [[b, a.value === "datev"]]),
						N(Y("section", Cw, [
							Y("h3", null, q(U(k)("rechnungswerk", "Standardtexte")), 1),
							Y("p", ww, q(U(k)("rechnungswerk", "Anrede-, Einleitungs- und Schlusstexte werden jetzt als Textbausteine verwaltet – getrennt für Rechnungen und Angebote, mit mehreren Vorlagen je Textbereich.")), 1),
							H(U(L), { onClick: o }, {
								icon: A(() => [H(no, { size: 20 })]),
								default: A(() => [z(" " + q(U(k)("rechnungswerk", "Textbausteine verwalten")), 1)]),
								_: 1
							})
						], 512), [[b, a.value === "texte"]]),
						N(Y("section", Tw, [
							Y("h3", null, q(U(k)("rechnungswerk", "Zugriff & Administration")), 1),
							Y("p", Ew, q(U(k)("rechnungswerk", "Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.")), 1),
							Y("div", Dw, [
								Y("span", Ow, q(U(k)("rechnungswerk", "App-Administratoren")), 1),
								Y("p", kw, q(U(k)("rechnungswerk", "Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.")), 1),
								H(U(xt), {
									modelValue: se.value,
									"onUpdate:modelValue": t[35] ||= (e) => se.value = e,
									options: O.value,
									loading: le.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: U(k)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: B
								}, {
									"no-options": A(() => [z(q(he.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							]),
							Y("div", Aw, [
								Y("span", jw, q(U(k)("rechnungswerk", "Berechtigte Nutzer")), 1),
								Y("p", Mw, q(U(k)("rechnungswerk", "Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.")), 1),
								H(U(xt), {
									modelValue: ce.value,
									"onUpdate:modelValue": t[36] ||= (e) => ce.value = e,
									options: O.value,
									loading: le.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: U(k)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: B
								}, {
									"no-options": A(() => [z(q(he.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							])
						], 512), [[b, a.value === "zugriff"]]),
						N(Y("section", Nw, [Y("h3", null, q(U(k)("rechnungswerk", "WerkPlus")), 1), H(OS)], 512), [[b, a.value === "werkplus"]]),
						N(Y("div", Pw, [H(U(L), {
							variant: "primary",
							disabled: U(n).saving || j.value,
							onClick: ze
						}, {
							icon: A(() => [H(vv, { size: 20 })]),
							default: A(() => [z(" " + q(U(k)("rechnungswerk", "Speichern")), 1)]),
							_: 1
						}, 8, ["disabled"])], 512), [[b, a.value !== "werkplus"]])
					])])) : R("", !0),
					H(Qf, {
						open: m.value,
						name: U(k)("rechnungswerk", "Kleinunternehmer §19 aktivieren"),
						message: U(k)("rechnungswerk", "Damit werden künftige Rechnungen ohne Umsatzsteuer ausgewiesen (§19 UStG). Bestehende festgeschriebene Rechnungen bleiben unverändert. Fortfahren?"),
						confirmLabel: U(k)("rechnungswerk", "Aktivieren"),
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
						name: U(k)("rechnungswerk", "Automatischen DATEV-Versand aktivieren"),
						message: U(k)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben automatisch eine E-Mail mit der E-Rechnung an die hinterlegte DATEV-Upload-Mail gesendet. Fortfahren?"),
						confirmLabel: U(k)("rechnungswerk", "Aktivieren"),
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
						name: U(k)("rechnungswerk", "Automatische Ablage aktivieren"),
						message: U(k)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben die ZUGFeRD-PDF automatisch im gewählten Ordner abgelegt. Alle Personen mit Zugriff auf den Ordner können die Rechnungen sehen. Fortfahren?"),
						confirmLabel: U(k)("rechnungswerk", "Aktivieren"),
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
						name: U(k)("rechnungswerk", "Nummernkreis auf „Fortlaufend“ stellen"),
						message: U(k)("rechnungswerk", "Der Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Der Modus wirkt sich auf alle künftig festgeschriebenen Rechnungen aus. Fortfahren?"),
						confirmLabel: U(k)("rechnungswerk", "Fortlaufend aktivieren"),
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
						name: U(k)("rechnungswerk", "Angebots-Nummernkreis auf „Fortlaufend“ stellen"),
						message: U(k)("rechnungswerk", "Der Angebots-Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Fortfahren?"),
						confirmLabel: U(k)("rechnungswerk", "Fortlaufend aktivieren"),
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
		}), [["__scopeId", "data-v-74e055a8"]])
	}
], Iw = Gr({
	history: pr(),
	routes: Fw
});
//#endregion
//#region src/main.js
document.addEventListener("DOMContentLoaded", () => {
	let e = M(Vs);
	e.use(Kt()), e.use(Iw), e.use(ot, { themes: { tooltip: { delay: {
		show: 100,
		hide: 0
	} } } }), e.mount(".app-rechnungswerk");
});
//#endregion
export { Ov as n, bb as t };
