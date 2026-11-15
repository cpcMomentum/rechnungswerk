import { $ as e, $n as t, $t as n, An as r, At as i, B as a, Bn as o, Bt as s, C as c, Cn as l, Ct as u, D as d, Dn as f, Dt as p, E as m, Et as h, F as g, Fn as _, G as v, Gn as y, Gt as b, H as x, Hn as S, Ht as ee, I as C, In as w, It as T, J as te, Jn as ne, Jt as E, K as D, Kn as re, Kt as O, L as k, Ln as ie, Mn as ae, Mt as oe, N as se, Nn as A, Nt as j, O as ce, Ot as le, P as ue, Pn as de, Pt as fe, Q as M, Qn as pe, Qt as N, R as me, Rn as he, Rt as P, S as ge, Sn as F, St as _e, T as ve, Tn as ye, Tt as be, U as xe, Un as Se, Ut as Ce, V as we, Vn as Te, Vt as Ee, W as De, Wn as Oe, Wt as I, X as ke, Xn as Ae, Xt as L, Y as je, Yt as Me, Z as R, Zt as z, _ as Ne, _n as Pe, _t as Fe, an as Ie, at as Le, b as Re, bn as B, bt as ze, c as Be, cn as Ve, ct as He, d as Ue, dn as V, dt as We, en as H, er as U, et as Ge, f as Ke, fn as qe, ft as Je, g as Ye, gn as Xe, gt as Ze, h as Qe, hn as $e, ht as et, in as W, it as tt, jn as nt, jt as rt, k as it, kn as at, kt as ot, l as st, ln as ct, lt as G, m as lt, mn as ut, mt as K, nn as q, nr as dt, nt as ft, on as pt, ot as mt, p as ht, pn as gt, pt as _t, q as vt, qn as yt, qt as bt, r as xt, rn as J, rr as Y, rt as St, sn as Ct, st as wt, t as Tt, tr as Et, tt as Dt, un as Ot, ut as kt, vn as At, vt as jt, w as Mt, wn as Nt, wt as Pt, x as Ft, xn as X, xt as It, yn as Z, yt as Lt, z as Rt, zn as zt, zt as Bt } from "./NcSelect-DezlyrCK.chunk.mjs";
// node_modules/pinia/dist/pinia.js
var Vt = typeof window < "u", Ht, Ut = (e) => Ht = e, Wt = Symbol();
function Gt(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Kt = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function qt(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Jt(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		$t(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Yt(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Xt(e) {
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
var Zt = typeof navigator == "object" ? navigator : { userAgent: "" }, Qt = /Macintosh/.test(Zt.userAgent) && /AppleWebKit/.test(Zt.userAgent) && !/Safari/.test(Zt.userAgent), $t = Vt ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Qt ? en : "msSaveOrOpenBlob" in Zt ? tn : nn : () => {};
function en(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Xt(r) : Yt(r.href) ? Jt(e, t, n) : (r.target = "_blank", Xt(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Xt(r);
	}, 0));
}
function tn(e, t = "download", n) {
	if (typeof e == "string") {
		if (Yt(e)) Jt(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Xt(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(qt(e, n), t);
}
function nn(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Jt(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Kt.HTMLElement)) || "safari" in Kt, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Qt) && typeof FileReader < "u") {
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
var { assign: rn } = Object;
function an() {
	let e = ie(!0), t = e.run(() => y({})), n = [], r = [], i = S({
		install(e) {
			Ut(i), i._a = e, e.provide(Wt, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var on = () => {};
function sn(e, t, n, r = on) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && he() && Se(i), i;
}
function cn(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var ln = (e) => e(), un = Symbol(), dn = Symbol();
function fn(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!Object.hasOwn(t, n)) continue;
		let r = t[n], i = e[n];
		if (Gt(i) && Gt(r) && Object.hasOwn(e, n) && !o(r) && !zt(r)) {
			e[n] = fn(i, r);
			let t = ne(e)[n];
			o(t) && Te(t) && pe(t);
		} else e[n] = r;
	}
	return e;
}
var pn = Symbol();
function mn(e) {
	return !e || typeof e != "object" || !Object.hasOwn(e, pn);
}
var { assign: hn } = Object;
function gn(e) {
	return !!(o(e) && e.effect);
}
function _n(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), hn(Ae(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = S(L(() => {
			Ut(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = vn(e, l, t, n, r, !0), c;
}
function vn(e, t, n = {}, r, i, a) {
	let s, c = hn({ actions: {} }, n), l = { deep: !0 }, u, d, f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m, h = r.state.value[e];
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
		}) : (fn(r.state.value[e], t), n = {
			type: "patch object",
			payload: t,
			storeId: e,
			events: m
		});
		let i = g = Symbol();
		qe().then(() => {
			g === i && (u = !0);
		}), d = !0, cn(f, n, r.state.value[e]);
	}
	let v = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			hn(e, t);
		});
	} : on;
	function y() {
		s.stop(), f.clear(), p.clear(), r._s.delete(e);
	}
	let b = (t, n = "") => {
		if (un in t) return t[dn] = n, t;
		let i = function() {
			Ut(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			cn(p, {
				args: n,
				name: i[dn],
				store: S,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : S, n);
			} catch (e) {
				throw cn(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (cn(a, e), e)).catch((e) => (cn(o, e), Promise.reject(e))) : (cn(a, l), l);
		};
		return i[un] = !0, i[dn] = n, i;
	}, x = {
		_p: r,
		$id: e,
		$onAction: sn.bind(null, p),
		$patch: _,
		$reset: v,
		$subscribe(t, n = {}) {
			if (f.has(t)) return on;
			let i = sn(f, t, n.detached, () => a()), a = s.run(() => A(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? d : u) && t({
					storeId: e,
					type: "direct",
					events: m
				}, r);
			}, hn({}, l, n)));
			return i;
		},
		$dispose: y
	}, S = Oe(x);
	r._s.set(e, S);
	let ee = (r._a && r._a.runWithContext || ln)(() => r._e.run(() => (s = ie()).run(() => t({ action: b }))));
	for (let t in ee) {
		let n = ee[t];
		o(n) && !gn(n) || zt(n) ? a || (h && mn(n) && (o(n) ? n.value = h[t] : ((n instanceof Set || n instanceof Map) && n.clear(), fn(n, h[t]))), r.state.value[e][t] = n) : typeof n == "function" && (ee[t] = b(n, t), c.actions[t] = n);
	}
	return hn(S, ee), hn(ne(S), ee), Object.defineProperty(S, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			_((t) => {
				hn(t, e);
			});
		}
	}), r._p.forEach((e) => {
		let t = s.run(() => e({
			store: S,
			app: r._a,
			pinia: r,
			options: c
		}));
		hn(S, t);
	}), h && a && n.hydrate && n.hydrate(S.$state, h), u = !0, d = !0, S;
}
function yn(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Ve();
		return n ||= o ? ct(Wt, null) : null, n && Ut(n), n = Ht, n._s.has(e) || (i ? vn(e, t, r, n) : _n(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// node_modules/vue-router/dist/devtools-CxgSYwGp.js
var bn = typeof document < "u", xn = /#/g, Sn = /&/g, Cn = /\//g, wn = /=/g, Tn = /\?/g, En = /\+/g, Dn = /%5B/g, On = /%5D/g, kn = /%5E/g, An = /%60/g, jn = /%7B/g, Mn = /%7C/g, Nn = /%7D/g, Pn = /%20/g;
function Fn(e) {
	return e == null ? "" : encodeURI("" + e).replace(Mn, "|").replace(Dn, "[").replace(On, "]");
}
function In(e) {
	return Fn(e).replace(jn, "{").replace(Nn, "}").replace(kn, "^");
}
function Ln(e) {
	return Fn(e).replace(En, "%2B").replace(Pn, "+").replace(xn, "%23").replace(Sn, "%26").replace(An, "`").replace(jn, "{").replace(Nn, "}").replace(kn, "^");
}
function Rn(e) {
	return Ln(e).replace(wn, "%3D");
}
function zn(e) {
	return Fn(e).replace(xn, "%23").replace(Tn, "%3F");
}
function Bn(e) {
	return zn(e).replace(Cn, "%2F");
}
function Vn(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var Hn = /\/$/, Un = (e) => e.replace(Hn, "");
function Wn(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = Qn(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Vn(o)
	};
}
function Gn(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Kn(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function qn(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Jn(t.matched[r], n.matched[i]) && Yn(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Jn(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Yn(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Xn(e[n], t[n])) return !1;
	return !0;
}
function Xn(e, t) {
	return Fe(e) ? Zn(e, t) : Fe(t) ? Zn(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Zn(e, t) {
	return Fe(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function Qn(e, t) {
	if (Ze(e)) return e;
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
var $n = {
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
function er(e) {
	if (!e) {
		if (bn) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Un(e);
}
var tr = /^[^#]+#/;
function nr(e, t) {
	return e.replace(tr, "#") + t;
}
function rr(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var ir = () => history.scrollRestoration === "manual" ? {
	left: window.scrollX,
	top: window.scrollY
} : null;
function ar(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = rr(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function or(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var sr = /* @__PURE__ */ new Map();
function cr(e) {
	sr.set(e, ir());
}
function lr(e) {
	let t = sr.get(e);
	return sr.delete(e), t;
}
function ur(e, t = !1) {
	for (let n of sr.keys()) {
		let r = parseInt(n, 10);
		(r === e || !t && r > e) && sr.delete(n);
	}
}
function dr(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function fr(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function pr(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(En, " "), i = r.indexOf("="), a = Vn(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Vn(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			Fe(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function mr(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = Rn(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (Fe(r) ? r.map((e) => e && Ln(e)) : [r && Ln(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function hr(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = Fe(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function gr() {
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
function _r(e, t, n) {
	let r = e.value;
	if (!r) return;
	let i = r, a = () => {
		i[t].delete(n);
	};
	At(a), Xe(a), gt(() => {
		let r = e.value;
		r && (i = r), i[t].add(n);
	}), i[t].add(n);
}
function vr(e) {
	_r(ct(It, {}), "leaveGuards", e);
}
function yr(e) {
	_r(ct(It, {}), "updateGuards", e);
}
function br(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(et(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : dr(e) ? c(et(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function xr(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (ze(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(br(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = jt(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && br(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function Sr(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Jn(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Jn(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.js
var Cr = () => location.protocol + "//" + location.host;
function wr(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Kn(n, "");
	}
	return Kn(n, e) + r + i;
}
function Tr(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = wr(e, location), c = n.value, l = t.value, u = 0;
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
		e.state && e.replaceState(K({}, e.state, { scroll: ir() }), "");
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
function Er(e, t, n, r = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: null
	};
}
function Dr(e) {
	let { history: t, location: n } = window, r = { value: wr(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : Cr() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			console.error(e), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		let o = K({}, t.state, Er(i.value.back, e, i.value.forward, !0), n, { position: i.value.position });
		a(e, o, !0), ur(o.position, !0), r.value = e;
	}
	function s(e, n) {
		let o = K({}, i.value, t.state, {
			forward: e,
			scroll: ir()
		});
		a(o.current, o, !0), a(e, K({}, Er(r.value, e, null), { position: o.position + 1 }, n), !1), ur(o.position), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function Or(e) {
	e = er(e);
	let t = Dr(e), n = Tr(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = K({
		location: "",
		base: e,
		go: r,
		createHref: nr.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function kr(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Or(e);
}
var Ar = {
	type: 0,
	value: ""
}, jr = /[a-zA-Z0-9_]/;
function Mr(e) {
	if (!e) return [[]];
	if (e === "/") return [[Ar]];
	if (!Ze(e)) throw Error(`Invalid path "${e}"`);
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
			c === "(" ? n = 2 : jr.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
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
var Nr = "[^/]+?", Pr = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, Fr = /[.+*?^${}()[\]/\\]/g;
function Ir(e, t) {
	let n = K({}, Pr, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(Fr, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || Nr;
				if (u !== Nr) {
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
			r && n.endsWith("/") || (n += "/"), r = !1;
			for (let e of i) if (e.type === 0) n += e.value;
			else if (e.type === 1) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (Fe(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = Fe(c) ? c.join("/") : c;
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
function Lr(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Rr(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = Lr(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (zr(r)) return 1;
		if (zr(i)) return -1;
	}
	return i.length - r.length;
}
function zr(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var Br = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function Vr(e, t, n) {
	let r = Ir(Mr(e.path), n), i = K(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function Hr(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = _e(Br, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = Wr(e);
		s.aliasOf = r && r.record;
		let l = _e(t, e), d = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) d.push(Wr(K({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let f, p;
		for (let t of d) {
			let { path: u } = t;
			if (n && !Ze(u)) {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (f = Vr(t, n, l), r ? r.alias.push(f) : (p ||= f, p !== f && p.alias.push(f), i && e.name && !Kr(f) && o(e.name)), Xr(f) && c(f), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], f, r && r.children[t]);
			}
			r ||= f;
		}
		return p ? () => {
			o(p);
		} : u;
	}
	function o(e) {
		if (fr(e)) {
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
		let t = Jr(e, n);
		n.splice(t, 0, e), e.record.name && !Kr(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw et(1, { location: e });
			s = i.record.name, a = K(Ur(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && Ur(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw et(1, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = K({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: qr(c)
		};
	}
	e.forEach((e) => a(e));
	function d() {
		n.length = 0, r.clear();
	}
	return {
		addRoute: a,
		resolve: l,
		removeRoute: o,
		clearRoutes: d,
		getRoutes: s,
		getRecordMatcher: i
	};
}
function Ur(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function Wr(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: Gr(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Gr(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function Kr(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function qr(e) {
	return e.reduce((e, t) => K(e, t.meta), {});
}
function Jr(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		Rr(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = Yr(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function Yr(e) {
	let t = e;
	for (; t = t.parent;) if (Xr(t) && Rr(e, t) === 0) return t;
}
function Xr({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Zr(e) {
	let n = ct(be), r = ct(Pt), i = L(() => {
		let r = t(e.to);
		return n.resolve(r);
	}), a = L(() => {
		let { matched: e } = i.value, { length: t } = e, n = e[t - 1], a = r.matched;
		if (!n || !a.length) return -1;
		let o = a.findIndex(Jn.bind(null, n));
		if (o > -1) return o;
		let s = ni(e[t - 2]);
		return t > 1 && ni(n) === s && a[a.length - 1].path !== s ? a.findIndex(Jn.bind(null, e[t - 2])) : o;
	}), o = L(() => a.value > -1 && ti(r.params, i.value.params)), s = L(() => a.value > -1 && a.value === r.matched.length - 1 && Yn(r.params, i.value.params));
	function c(r = {}) {
		if (ei(r)) {
			let r = n[t(e.replace) ? "replace" : "push"](t(e.to)).catch(u);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => r), r;
		}
		return Promise.resolve();
	}
	return {
		route: i,
		href: L(() => i.value.href),
		isActive: o,
		isExactActive: s,
		navigate: c
	};
}
function Qr(e) {
	return e.length === 1 ? e[0] : e;
}
var $r = /* @__PURE__ */ W({
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
	useLink: Zr,
	setup(e, { slots: t }) {
		let n = Oe(Zr(e)), { options: r } = ct(be), i = L(() => ({
			[ri(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[ri(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && Qr(t.default(n));
			return e.custom ? r : Ct("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function ei(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function ti(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (Fe(r)) {
			if (!Fe(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
		} else if (r !== i) return !1;
	}
	return !0;
}
function ni(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var ri = (e, t, n) => e ?? t ?? n, ii = /*#__PURE__*/ W({
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
	setup(e, { attrs: n, slots: r }) {
		let a = ct(h), o = L(() => e.route || a.value), s = ct(i, 0), c = L(() => {
			let e = t(s), { matched: n } = o.value, r;
			for (; (r = n[e]) && !r.components;) e++;
			return e;
		}), l = L(() => o.value.matched[c.value]);
		B(i, L(() => c.value + 1)), B(It, l), B(h, o);
		let u = /* @__PURE__ */ new Set();
		B(p, u);
		let d = y(), f = $n, { app: m } = Ie().appContext;
		return A(() => [
			d.value,
			l.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && Jn(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let t = o.value, i = e.name, a = l.value, s = a && a.components[i];
			if (!s) return ai(r.default, {
				Component: s,
				route: t
			});
			let c = a.props[i], p = c ? c === !0 ? t.params : typeof c == "function" ? c(t) : c : null, h = (e) => {
				e.component.isUnmounted && (a.instances[i] = null);
			}, g = (e) => qe(() => {
				if (f === t || o.value !== t || e.el.getRootNode() !== m._container.getRootNode()) return;
				let n = f;
				f = t;
				for (let e of u) e(t, n);
			}), _ = Ct(s, K({}, p, n, {
				onVnodeUnmounted: h,
				onVnodeMounted: g,
				onVnodeUpdated: g,
				ref: d
			}));
			return ai(r.default, {
				Component: _,
				route: t
			}) || _;
		};
	}
});
function ai(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var oi = ii;
function si(e) {
	let n = e.matcher || Hr(e.routes, e), r = e.parseQuery || pr, i = e.stringifyQuery || mr, a = e.history, o = gr(), s = gr(), c = gr(), l = yt($n), d = yt(0), f = $n;
	bn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let p = _t.bind(null, (e) => "" + e), m = _t.bind(null, Bn), g = _t.bind(null, Vn);
	function _(e, t) {
		let r, i;
		fr(e) ? (r = n.getRecordMatcher(e), i = t) : i = e;
		let a = n.addRoute(i, r);
		return d.value++, () => {
			a(), d.value++;
		};
	}
	function v(e) {
		let t = n.getRecordMatcher(e);
		t && (n.removeRoute(t), d.value++);
	}
	function y() {
		n.clearRoutes(), d.value++;
	}
	function b() {
		return n.getRoutes().map((e) => e.record);
	}
	function x(e) {
		return !!n.getRecordMatcher(e);
	}
	function S(e, t) {
		if (d.value, typeof e == "string") {
			t ||= e.startsWith("/") ? $n : l.value;
			let i = Wn(r, e, t.path), o = n.resolve({ path: i.path }, t), s = a.createHref(i.fullPath);
			return K(i, o, {
				params: g(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		t = K({}, t || (e.path != null && e.path.startsWith("/") && !("name" in e && e.name) ? $n : l.value));
		let o;
		if (e.path != null) o = K({}, e, { path: Wn(r, e.path, t.path).path });
		else {
			let n = K({}, e.params);
			for (let e in n) n[e] ?? delete n[e];
			o = K({}, e, { params: m(n) }), t.params = m(t.params);
		}
		let s = n.resolve(o, t), c = e.hash || "";
		s.params = p(g(s.params));
		let u = Gn(i, K({}, e, {
			hash: In(c),
			path: s.path
		})), f = a.createHref(u);
		return K({
			fullPath: u,
			hash: c,
			query: i === mr ? hr(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: f
		});
	}
	function ee(e) {
		return typeof e == "string" ? Wn(r, e, l.value.path) : K({}, e);
	}
	function C(e, t) {
		if (f !== e) return et(8, {
			from: t,
			to: e
		});
	}
	function w(e) {
		return ne(e);
	}
	function T(e) {
		return w(K(ee(e), { replace: !0 }));
	}
	function te(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = ee(i) : { path: i }, i.params = {}), K({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function ne(e, t) {
		let n = f = S(e), r = l.value, a = e.state, o = e.force, s = e.replace === !0, c = te(n, r);
		if (c) return ne(K(ee(c), {
			state: typeof c == "object" ? K({}, a, c.state) : a,
			force: o,
			replace: s
		}), t || n);
		let u = n;
		u.redirectedFrom = t;
		let d;
		return !o && qn(i, r, n) && (d = et(16, {
			to: u,
			from: r
		}), de(r, r, !0, !1)), (d ? Promise.resolve(d) : O(u, r)).catch((e) => Lt(e) ? Lt(e, 2) ? e : ue(e) : ce(e, u, r)).then((e) => {
			if (e) {
				if (Lt(e, 2)) return ne(K({ replace: s }, ee(e.to), {
					state: typeof e.to == "object" ? K({}, a, e.to.state) : a,
					force: o
				}), t || u);
			} else e = ie(u, r, !0, s, a);
			return k(u, r, e), e;
		});
	}
	function E(e, t) {
		let n = C(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function D(e) {
		let t = pe.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function O(e, t) {
		let n, [r, i, a] = Sr(e, t);
		n = xr(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(br(r, e, t));
		});
		let c = E.bind(null, e, t);
		return n.push(c), me(n).then(() => {
			n = [];
			for (let r of o.list()) n.push(br(r, e, t));
			return n.push(c), me(n);
		}).then(() => {
			n = xr(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(br(r, e, t));
			});
			return n.push(c), me(n);
		}).then(() => {
			n = [];
			for (let r of a) if (r.beforeEnter) {
				if (Fe(r.beforeEnter)) for (let i of r.beforeEnter) n.push(br(i, e, t));
				else n.push(br(r.beforeEnter, e, t));
			}
			return n.push(c), me(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = xr(a, "beforeRouteEnter", e, t, D), n.push(c), me(n))).then(() => {
			n = [];
			for (let r of s.list()) n.push(br(r, e, t));
			return n.push(c), me(n);
		}).catch((e) => Lt(e, 8) ? e : Promise.reject(e));
	}
	function k(e, t, n) {
		c.list().forEach((r) => D(() => r(e, t, n)));
	}
	function ie(e, t, n, r, i) {
		let o = C(e, t);
		if (o) return o;
		let s = t === $n, c = bn ? history.state : {};
		n && (r || s ? a.replace(e.fullPath, K({ scroll: s && c && c.scroll }, i)) : a.push(e.fullPath, i)), l.value = e, de(e, t, n, s), ue();
	}
	let ae;
	function oe() {
		ae ||= a.listen((e, t, n) => {
			if (!N.listening) return;
			let r = S(e), i = te(r, N.currentRoute.value);
			if (i) {
				ne(K(i, {
					replace: !0,
					force: !0
				}), r).catch(u);
				return;
			}
			f = r;
			let o = l.value;
			bn && n.delta && cr(or(o.fullPath, n.delta)), O(r, o).catch((e) => Lt(e, 12) ? e : Lt(e, 2) ? (ne(K(ee(e.to), { force: !0 }), r).then((e) => {
				Lt(e, 20) && !n.delta && n.type === "pop" && a.go(-1, !1);
			}).catch(u), Promise.reject()) : (n.delta && a.go(-n.delta, !1), ce(e, r, o))).then((e) => {
				e ||= ie(r, o, !1), e && (n.delta && !Lt(e, 8) ? a.go(-n.delta, !1) : n.type === "pop" && Lt(e, 20) && a.go(-1, !1)), k(r, o, e);
			}).catch(u);
		});
	}
	let se = gr(), A = gr(), j;
	function ce(e, t, n) {
		ue(e);
		let r = A.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function le() {
		return j && l.value !== $n ? Promise.resolve() : new Promise((e, t) => {
			se.add([e, t]);
		});
	}
	function ue(e) {
		return j || (j = !e, oe(), se.list().forEach(([t, n]) => e ? n(e) : t()), se.reset()), e;
	}
	function de(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!bn || !a) return Promise.resolve();
		let o = !r && lr(or(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return qe().then(() => a(t, n, o)).then((e) => t === l.value && e && ar(e)).catch((e) => t === l.value && ce(e, t, n));
	}
	let fe = (e) => a.go(e), M, pe = /* @__PURE__ */ new Set(), N = {
		currentRoute: l,
		listening: !0,
		addRoute: _,
		removeRoute: v,
		clearRoutes: y,
		hasRoute: x,
		getRoutes: b,
		resolve: S,
		options: e,
		push: w,
		replace: T,
		go: fe,
		back: () => fe(-1),
		forward: () => fe(1),
		beforeEach: o.add,
		beforeResolve: s.add,
		afterEach: c.add,
		onError: A.add,
		isReady: le,
		install(e) {
			e.component("RouterLink", $r), e.component("RouterView", oi), e.config.globalProperties.$router = N, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => t(l)
			}), bn && !M && l.value === $n && (M = !0, w(a.location).catch((e) => {}));
			let n = {};
			for (let e in $n) Object.defineProperty(n, e, {
				get: () => l.value[e],
				enumerable: !0
			});
			e.provide(be, N), e.provide(Pt, re(n)), e.provide(h, l);
			let r = e.unmount;
			pe.add(e), e.unmount = function() {
				pe.delete(e), pe.size < 1 && (f = $n, ae && ae(), ae = null, l.value = $n, M = !1, j = !1), r();
			};
		}
	};
	function me(e) {
		return e.reduce((e, t) => e.then(() => D(t)), Promise.resolve());
	}
	return N;
}
// node_modules/@nextcloud/vue/dist/chunks/constants2.mjs
var ci = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), li = /* @__PURE__ */ Symbol.for("NcContent:selector");
// node_modules/@nextcloud/vue/dist/chunks/NcContent.mjs
ke(Le);
var ui = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM140 44C132.268 44 126 50.268 126 58V292C126 299.732 132.268 306 140 306H372C379.732 306 386 299.732 386 292V58C386 50.268 379.732 44 372 44H140Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", di = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM112 44C119.732 44 126 50.268 126 58V292C126 299.732 119.732 306 112 306H20C12.268 306 6 299.732 6 292V58C6 50.268 12.268 44 20 44H112Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", fi = { class: "vue-skip-actions__container" }, pi = { class: "vue-skip-actions__headline" }, mi = { class: "vue-skip-actions__buttons" }, hi = /* @__PURE__ */ kt(/* @__PURE__ */ W({
	__name: "NcContent",
	props: { appName: {} },
	setup(e) {
		let n = e;
		B(ci, c), B(li, "#content-vue"), B("appName", L(() => n.appName));
		let r = wt(), i = y(!1), a = y(), o = L(() => a.value === "navigation" ? di : ui);
		ut(() => {
			let e = document.getElementById("skip-actions");
			e && (e.innerHTML = "", e.classList.add("vue-skip-actions"));
		});
		function s() {
			rt("toggle-navigation", { open: !0 }), qe(() => {
				window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
			});
		}
		function c(e) {
			i.value = e, a.value ||= "navigation";
		}
		return (n, c) => (Z(), H("div", {
			id: "content-vue",
			class: U(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": t(Je) }]])
		}, [(Z(), N(Me, { to: "#skip-actions" }, [z("div", fi, [
			z("div", pi, Y(t(R)("Keyboard navigation help")), 1),
			z("div", mi, [w(J(G, {
				href: "#app-navigation-vue",
				variant: "tertiary",
				onClick: bt(s, ["prevent"]),
				onFocusin: c[0] ||= (e) => a.value = "navigation",
				onMouseover: c[1] ||= (e) => a.value = "navigation"
			}, {
				default: _(() => [q(Y(t(R)("Skip to app navigation")), 1)]),
				_: 1
			}, 512), [[b, i.value]]), J(G, {
				href: "#app-content-vue",
				variant: "tertiary",
				onFocusin: c[2] ||= (e) => a.value = "content",
				onMouseover: c[3] ||= (e) => a.value = "content"
			}, {
				default: _(() => [q(Y(t(R)("Skip to main content")), 1)]),
				_: 1
			})]),
			w(J(He, {
				class: "vue-skip-actions__image",
				svg: o.value,
				size: "auto"
			}, null, 8, ["svg"]), [[b, !t(r)]])
		])])), F(n.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-d13dcb98"]]), gi = { name: "NcAppNavigationList" }, _i = { class: "app-navigation-list" };
function vi(e, t, n, r, i, a) {
	return Z(), H("ul", _i, [F(e.$slots, "default", {}, void 0, !0)]);
}
var yi = /* @__PURE__ */ kt(gi, [["render", vi], ["__scopeId", "data-v-d72957ed"]]);
// node_modules/@nextcloud/vue/dist/chunks/NcAppNavigation.mjs
ke(Ge);
var bi = { class: "app-navigation-toggle-wrapper" }, xi = /* @__PURE__ */ kt(/* @__PURE__ */ W({
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
		let n = at(e, "open"), r = L(() => n.value ? R("Close navigation") : R("Open navigation"));
		return (e, i) => (Z(), H("div", bi, [J(t(G), {
			class: "app-navigation-toggle",
			"aria-controls": "app-navigation-vue",
			"aria-expanded": n.value ? "true" : "false",
			"aria-label": r.value,
			title: r.value,
			variant: "tertiary",
			onClick: i[0] ||= (e) => n.value = !n.value
		}, {
			icon: _(() => [J(He, {
				path: t(D),
				directional: ""
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-expanded",
			"aria-label",
			"title"
		])]));
	}
}), [["__scopeId", "data-v-e8177cc7"]]), Si = [
	"aria-hidden",
	"aria-label",
	"aria-labelledby",
	"inert"
], Ci = { class: "app-navigation__search" }, wi = /* @__PURE__ */ kt(/* @__PURE__ */ W({
	__name: "NcAppNavigation",
	props: {
		ariaLabel: {},
		ariaLabelledby: {}
	},
	setup(e) {
		let r = e, i, a = ct(ci, () => ae("NcAppNavigation is not mounted inside NcContent, this is probably an error."), !1), o = nt("appNavigationContainer"), s = wt(), c = y(!s.value), l = L(() => s.value && c.value);
		de(() => {
			!r.ariaLabel && !r.ariaLabelledby && ae("NcAppNavigation requires either `ariaLabel` or `ariaLabelledby` to be set for accessibility.");
		}), A(s, (e) => {
			c.value = !e, rt("navigation-toggled", { open: c.value });
		}), A(l, () => {
			f();
		}), Pe(() => {
			a(!0), oe("toggle-navigation", d), rt("navigation-toggled", { open: c.value }), i = je(o.value, {
				allowOutsideClick: !0,
				clickOutsideDeactivates: () => (s.value && (i.deactivate({ returnFocus: !1 }), u(!1)), !1),
				fallbackFocus: o.value,
				trapStack: me(),
				escapeDeactivates: !1
			}), f();
		}), At(() => {
			a(!1), j("toggle-navigation", d), i.deactivate();
		});
		function u(e) {
			if (c.value === e) {
				rt("navigation-toggled", { open: c.value });
				return;
			}
			c.value = e === void 0 ? !c.value : e;
			let t = getComputedStyle(document.body), n = parseInt(t.getPropertyValue("--animation-slow")) || 200;
			setTimeout(() => {
				rt("navigation-toggled", { open: c.value });
			}, 1.5 * n);
		}
		function d({ open: e }) {
			return u(e);
		}
		function f() {
			l.value ? i.activate() : i.deactivate();
		}
		function p() {
			s.value && u(!1);
		}
		return (r, i) => (Z(), H("div", {
			ref: "appNavigationContainer",
			class: U(["app-navigation", {
				"app-navigation--closed": !c.value,
				"app-navigation--legacy": t(Je)
			}])
		}, [z("nav", {
			id: "app-navigation-vue",
			"aria-hidden": c.value ? "false" : "true",
			"aria-label": e.ariaLabel || void 0,
			"aria-labelledby": e.ariaLabelledby || void 0,
			class: "app-navigation__content",
			inert: !c.value || void 0,
			onKeydown: O(p, ["esc"])
		}, [
			z("div", Ci, [F(r.$slots, "search", {}, void 0, !0)]),
			z("div", { class: U(["app-navigation__body", { "app-navigation__body--no-list": !r.$slots.list }]) }, [F(r.$slots, "default", {}, void 0, !0)], 2),
			r.$slots.list ? (Z(), N(yi, {
				key: 0,
				class: "app-navigation__list"
			}, {
				default: _(() => [F(r.$slots, "list", {}, void 0, !0)]),
				_: 3
			})) : n("", !0),
			F(r.$slots, "footer", {}, void 0, !0)
		], 40, Si), J(xi, {
			open: c.value,
			"onUpdate:open": u
		}, null, 8, ["open"])], 2));
	}
}), [["__scopeId", "data-v-ec9c3f18"]]), Ti = {
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
}, Ei = ["aria-hidden", "aria-label"], Di = [
	"fill",
	"width",
	"height"
], Oi = { key: 0 };
function ki(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon chevron-up-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Oi, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, null, -1)], 8, Di))], 16, Ei);
}
var Ai = /* @__PURE__ */ kt(Ti, [["render", ki]]), ji = {
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
}, Mi = ["aria-hidden", "aria-label"], Ni = [
	"fill",
	"width",
	"height"
], Pi = { key: 0 };
function Fi(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon arrow-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Pi, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, null, -1)], 8, Ni))], 16, Mi);
}
var Ii = /* @__PURE__ */ kt(ji, [["render", Fi]]);
// node_modules/@nextcloud/vue/dist/chunks/NcInputConfirmCancel.mjs
ke(e);
var Li = {
	name: "NcInputConfirmCancel",
	components: {
		IconArrowRight: Ii,
		IconClose: C,
		NcButton: G
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
		return { isLegacy34: Je };
	},
	data() {
		return {
			labelConfirm: R("Confirm changes"),
			labelCancel: R("Cancel changes")
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
}, Ri = ["placeholder"];
function zi(e, t, n, r, i, a) {
	let o = l("IconArrowRight"), s = l("NcButton"), c = l("IconClose");
	return Z(), H("div", { class: U(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": r.isLegacy34 }]) }, [z("form", {
		onSubmit: t[1] ||= bt((...e) => a.confirm && a.confirm(...e), ["prevent"]),
		onKeydown: t[2] ||= O(bt((...e) => a.cancel && a.cancel(...e), [
			"exact",
			"stop",
			"prevent"
		]), ["esc"]),
		onClick: t[3] ||= bt(() => {}, ["stop", "prevent"])
	}, [
		w(z("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.valueModel = e,
			type: "text",
			class: "app-navigation-input-confirm__input",
			placeholder: n.placeholder
		}, null, 8, Ri), [[I, a.valueModel]]),
		J(s, {
			"aria-label": i.labelConfirm,
			type: "submit",
			variant: "primary",
			onClick: bt(a.confirm, ["stop", "prevent"])
		}, {
			icon: _(() => [J(o, { size: 20 })]),
			_: 1
		}, 8, ["aria-label", "onClick"]),
		J(s, {
			"aria-label": i.labelCancel,
			type: "reset",
			variant: n.primary ? "primary" : "tertiary",
			onClick: bt(a.cancel, ["stop", "prevent"])
		}, {
			icon: _(() => [J(c, { size: 20 })]),
			_: 1
		}, 8, [
			"aria-label",
			"variant",
			"onClick"
		])
	], 32)], 2);
}
var Bi = /* @__PURE__ */ kt(Li, [["render", zi], ["__scopeId", "data-v-6926a0b8"]]), Vi = W({
	name: "NcVNodes",
	props: { vnodes: {
		type: [Array, Object],
		default: null
	} },
	render() {
		return this.vnodes || this.$slots?.default?.({});
	}
}), Hi = {
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
}, Ui = ["aria-hidden", "aria-label"], Wi = [
	"fill",
	"width",
	"height"
], Gi = { key: 0 };
function Ki(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon pencil-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Gi, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, null, -1)], 8, Wi))], 16, Ui);
}
var qi = /* @__PURE__ */ kt(Hi, [["render", Ki]]), Ji = {
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
}, Yi = ["aria-hidden", "aria-label"], Xi = [
	"fill",
	"width",
	"height"
], Zi = { key: 0 };
function Qi(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon undo-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Zi, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, null, -1)], 8, Xi))], 16, Yi);
}
var $i = /* @__PURE__ */ kt(Ji, [["render", Qi]]);
ke(Dt);
var ea = {
	name: "NcAppNavigationIconCollapsible",
	components: {
		NcButton: G,
		ChevronDown: k,
		ChevronUp: Ai
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
		return { isLegacy34: Je };
	},
	computed: { labelButton() {
		return this.open ? R("Collapse menu") : R("Open menu");
	} },
	methods: { onClick(e) {
		this.$emit("click", e);
	} }
};
function ta(e, t, n, r, i, a) {
	let o = l("ChevronUp"), s = l("ChevronDown"), c = l("NcButton");
	return Z(), N(c, {
		class: U(["icon-collapse", {
			"icon-collapse--active": n.active,
			"icon-collapse--open": n.open
		}]),
		"aria-label": a.labelButton,
		variant: n.active && r.isLegacy34 ? "tertiary-on-primary" : "tertiary",
		onClick: a.onClick
	}, {
		icon: _(() => [n.open ? (Z(), N(o, {
			key: 0,
			size: 20
		})) : (Z(), N(s, {
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
var na = /* @__PURE__ */ kt(ea, [["render", ta], ["__scopeId", "data-v-cfbd3794"]]);
ke(ft, mt);
var ra = {
	name: "NcAppNavigationItem",
	components: {
		NcActions: m,
		NcActionButton: ue,
		NcAppNavigationIconCollapsible: na,
		NcInputConfirmCancel: Bi,
		NcLoadingIcon: ve,
		NcVNodes: Vi,
		Pencil: qi,
		Undo: $i
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
			default: () => g(),
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
			isMobile: wt(),
			isLegacy34: Je
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
			return this.editLabel ? this.editLabel : R("Edit item");
		},
		undoButtonAriaLabel() {
			return R("Undo changes");
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
			this.$emit("click", e), e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || n && (t?.(e), e.preventDefault(), this.isMobile && rt("toggle-navigation", { open: !1 }));
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
}, ia = ["id"], aa = [
	"aria-current",
	"aria-description",
	"aria-expanded",
	"href",
	"target",
	"title",
	"onClick"
], oa = {
	key: 0,
	class: "editingContainer"
}, sa = {
	key: 1,
	class: "app-navigation-entry__deleted"
}, ca = { class: "app-navigation-entry__deleted-description" }, la = {
	key: 0,
	class: "app-navigation-entry__counter-wrapper"
}, ua = {
	key: 0,
	class: "app-navigation-entry__children"
};
function da(e, t, r, i, a, o) {
	let s = l("NcLoadingIcon"), c = l("NcInputConfirmCancel"), u = l("Pencil"), d = l("NcActionButton"), f = l("Undo"), p = l("NcActions"), m = l("NcAppNavigationIconCollapsible");
	return Z(), H("li", {
		id: r.id,
		class: U([{
			"app-navigation-entry--opened": a.opened,
			"app-navigation-entry--pinned": r.pinned,
			"app-navigation-entry--collapsible": r.allowCollapse && !!e.$slots.default
		}, "app-navigation-entry-wrapper"])
	}, [(Z(), N(ye(o.isRouterLink ? "router-link" : "NcVNodes"), Et(pt({ ...o.isRouterLink && {
		custom: !0,
		to: r.to
	} })), {
		default: _(({ href: l, navigate: h, isActive: g }) => [z("div", { class: U(["app-navigation-entry", {
			"app-navigation-entry--editing": a.editingActive,
			"app-navigation-entry--deleted": r.undo,
			"app-navigation-entry--legacy": i.isLegacy34,
			active: r.to && g || r.active
		}]) }, [
			r.undo ? n("", !0) : (Z(), H("a", {
				key: 0,
				class: "app-navigation-entry-link",
				"aria-current": r.active || r.to && g ? "page" : void 0,
				"aria-description": r.ariaDescription,
				"aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
				href: r.href || l || "#",
				target: o.isExternal(r.href) ? "_blank" : void 0,
				title: r.title || r.name,
				onBlur: t[1] ||= (...e) => o.handleBlur && o.handleBlur(...e),
				onClick: (e) => o.onClick(e, h, l),
				onFocus: t[2] ||= (...e) => o.handleFocus && o.handleFocus(...e),
				onKeydown: t[3] ||= O(bt((...e) => o.handleTab && o.handleTab(...e), ["exact"]), ["tab"])
			}, [
				z("div", { class: U(["app-navigation-entry-icon", { [r.icon]: r.icon }]) }, [r.loading ? (Z(), N(s, { key: 0 })) : F(e.$slots, "icon", { active: r.active || r.to && g }, void 0, !0, 1)], 2),
				z("span", { class: U(["app-navigation-entry__name", { "hidden-visually": a.editingActive }]) }, Y(r.name), 3),
				a.editingActive ? (Z(), H("div", oa, [J(c, {
					ref: "editingInput",
					modelValue: a.editingValue,
					"onUpdate:modelValue": t[0] ||= (e) => a.editingValue = e,
					placeholder: r.editPlaceholder === "" ? r.name : r.editPlaceholder,
					primary: r.to && g || r.active,
					onCancel: o.cancelEditing,
					onConfirm: o.handleEditingDone
				}, null, 8, [
					"modelValue",
					"placeholder",
					"primary",
					"onCancel",
					"onConfirm"
				])])) : n("", !0)
			], 40, aa)),
			r.undo ? (Z(), H("div", sa, [z("div", ca, Y(r.name), 1)])) : n("", !0),
			(e.$slots.actions || e.$slots.counter || r.editable || r.undo) && !a.editingActive ? (Z(), H("div", {
				key: 2,
				class: U(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": r.forceDisplayActions || a.menuOpenLocalValue || r.menuOpen }])
			}, [e.$slots.counter ? (Z(), H("div", la, [F(e.$slots, "counter", {}, void 0, !0)])) : n("", !0), e.$slots.actions || r.editable && !a.editingActive || r.undo ? (Z(), N(p, {
				key: 1,
				ref: "actions",
				class: "app-navigation-entry__actions",
				container: "#app-navigation-vue",
				boundariesElement: a.actionsBoundariesElement,
				inline: r.inlineActions,
				placement: r.menuPlacement,
				open: r.menuOpen,
				forceMenu: r.forceMenu,
				defaultIcon: r.menuIcon,
				variant: "tertiary",
				"onUpdate:open": o.onMenuToggle
			}, {
				icon: _(() => [F(e.$slots, "menu-icon", {}, void 0, !0)]),
				default: _(() => [
					r.editable && !a.editingActive ? (Z(), N(d, {
						key: 0,
						"aria-label": o.editButtonAriaLabel,
						onClick: o.handleEdit
					}, {
						icon: _(() => [J(u, { size: 20 })]),
						default: _(() => [q(" " + Y(r.editLabel), 1)]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : n("", !0),
					r.undo ? (Z(), N(d, {
						key: 1,
						"aria-label": o.undoButtonAriaLabel,
						onClick: o.handleUndo
					}, {
						icon: _(() => [J(f, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : n("", !0),
					F(e.$slots, "actions", {}, void 0, !0)
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
			])) : n("", !0)], 2)) : n("", !0),
			r.allowCollapse && e.$slots.default ? (Z(), N(m, {
				key: 3,
				active: r.to && g || r.active,
				open: a.opened,
				onClick: bt(o.toggleCollapse, ["prevent", "stop"])
			}, null, 8, [
				"active",
				"open",
				"onClick"
			])) : n("", !0),
			F(e.$slots, "extra", {}, void 0, !0)
		], 2)]),
		_: 3
	}, 16)), o.canHaveChildren && e.$slots.default ? (Z(), H("ul", ua, [F(e.$slots, "default", {}, void 0, !0)])) : n("", !0)], 10, ia);
}
var fa = /* @__PURE__ */ kt(ra, [["render", da], ["__scopeId", "data-v-6cae7342"]]), pa = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		let n = t, i = e, a = f(), o = r(), s = y([]), c = L(() => s.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), l = L(() => s.value.length), u = y(null), d = y(!1), p = y({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), m = y({
			splitter: null,
			timeoutId: null
		}), h = L(() => ({
			[`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
			"splitpanes--dragging": p.value.dragging,
			"splitpanes--ready": d.value
		})), g = () => {
			document.addEventListener("mousemove", b, { passive: !1 }), document.addEventListener("mouseup", x), "ontouchstart" in window && (document.addEventListener("touchmove", b, { passive: !1 }), document.addEventListener("touchend", x));
		}, _ = () => {
			document.removeEventListener("mousemove", b, { passive: !1 }), document.removeEventListener("mouseup", x), "ontouchstart" in window && (document.removeEventListener("touchmove", b, { passive: !1 }), document.removeEventListener("touchend", x));
		}, v = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: r } = n.getBoundingClientRect(), { clientX: a, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				p.value.cursorOffset = i.horizontal ? o - r : a - t;
			}
			g(), p.value.mouseDown = !0, p.value.activeSplitter = t, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
		}, b = (e) => {
			p.value.mouseDown && (e.preventDefault(), p.value.dragging || (window.getSelection()?.removeAllRanges(), p.value.dragging = !0), requestAnimationFrame(() => {
				ne(T(e)), P("resize", { event: e }, !0);
			}));
		}, x = (e) => {
			p.value.dragging && (window.getSelection()?.removeAllRanges(), P("resized", { event: e }, !0)), p.value.mouseDown = !1, p.value.activeSplitter = null, setTimeout(() => {
				p.value.dragging = !1, _(), document.documentElement.style.cursor = "";
			}, 100);
		}, S = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), m.value.splitter === t ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, ee(e, t), m.value.splitter = null) : (m.value.splitter = t, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500))), p.value.dragging || P("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, ee = (e, t) => {
			if (P("splitter-dblclick", {
				event: e,
				index: t
			}, !0), i.maximizePanes) {
				let n = 0;
				s.value = s.value.map((e, r) => (e.size = r === t ? e.max : e.min, r !== t && (n += e.min), e)), s.value[t].size -= n, P("pane-maximize", {
					event: e,
					index: t,
					pane: s.value[t]
				}), P("resized", {
					event: e,
					index: t
				}, !0);
			}
		}, C = (e, t) => {
			if (!i.keyboardStep) return;
			let n = i.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", r = i.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !r) return;
			e.preventDefault(), p.value.activeSplitter = t;
			let a = (n ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), o = re(t) + s.value[t].size;
			E(Math.min(Math.max(o + a * i.keyboardStep, 0), 100)), P("resize", { event: e }, !0), P("resized", { event: e }, !0), p.value.activeSplitter = null;
		}, w = (e, t) => {
			let n = c.value[t];
			n && P("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, T = (e) => {
			let t = u.value.getBoundingClientRect(), { clientX: n, clientY: r } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (i.horizontal ? 0 : p.value.cursorOffset) - t.left,
				y: r - (i.horizontal ? p.value.cursorOffset : 0) - t.top
			};
		}, te = (e) => {
			e = e[i.horizontal ? "y" : "x"];
			let t = u.value[i.horizontal ? "clientHeight" : "clientWidth"];
			return i.rtl && !i.horizontal && (e = t - e), e * 100 / t;
		}, ne = (e) => {
			E(te(e));
		}, E = (e) => {
			let t = p.value.activeSplitter;
			if (t === null || t >= s.value.length - 1) return;
			let n = {
				prevPanesSize: re(t),
				nextPanesSize: O(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, r = 0 + (i.pushOtherPanes ? 0 : n.prevPanesSize), a = 100 - (i.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, a), r);
			let o = [t, t + 1], c = s.value[o[0]] || null, l = s.value[o[1]] || null, u = c !== null && c.max < 100 && e >= c.max + n.prevPanesSize, d = l !== null && l.max < 100 && e <= 100 - (l.max + O(t + 1));
			if (u || d) u ? (c.size = c.max, l.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - n.nextPanesSize, l.min), l.max)) : (c.size = Math.min(Math.max(100 - l.max - n.prevPanesSize - O(t + 1), c.min), c.max), l.size = l.max);
			else {
				if (i.pushOtherPanes) {
					let t = D(n, e);
					if (!t) return;
					({sums: n, panesToResize: o} = t), c = s.value[o[0]] || null, l = s.value[o[1]] || null;
				}
				c !== null && (c.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, c.min), c.max)), l !== null && (l.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, l.min), l.max));
			}
		}, D = (e, t) => {
			let n = p.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + s.value[r[0]].min) {
				if (r[0] = k(n).index, e.prevReachedMinPanes = 0, r[0] < n && s.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), s.value[r[1]].size = 100 - e.prevReachedMinPanes - s.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = re(r[0]);
			}
			return t > 100 - e.nextPanesSize - s.value[r[1]].min && (r[1] = ie(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && s.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : O(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, s.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (s.value[r[0]].size = 100 - e.prevPanesSize - O(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, re = (e) => s.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), O = (e) => s.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), k = (e) => [...s.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, ie = (e) => s.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, ae = () => {
			let e = Array.from(u.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, oe = (e, t, n = !1) => {
			let r = e - 1, a = document.createElement("div");
			a.classList.add("splitpanes__splitter"), n || (a.onmousedown = (e) => v(e, r), typeof window < "u" && "ontouchstart" in window && (a.ontouchstart = (e) => v(e, r)), a.onclick = (e) => S(e, r + 1), i.keyboardStep && (a.setAttribute("tabindex", "0"), a.setAttribute("role", "separator"), a.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), a.onkeydown = (e) => C(e, r))), a.ondblclick = (e) => ee(e, r + 1), t.parentNode.insertBefore(a, t);
		}, se = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, j = () => {
			let e = Array.from(u.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && se(t);
			let t = 0;
			for (let n of e) n.className.includes("splitpanes__pane") && (!t && i.firstSplitter ? oe(t, n, !0) : t && oe(t, n), t++);
		}, ce = ({ uid: e, ...t }) => {
			let n = c.value[e];
			for (let [e, r] of Object.entries(t)) n[e] = r;
		}, le = !1, ue = (e) => {
			let t = -1;
			Array.from(u.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), s.value.splice(t, 0, {
				...e,
				index: t
			}), s.value.forEach((e, t) => e.index = t), d.value && !le && (le = !0, qe(() => {
				j(), fe({ addedPane: s.value[t] }), P("pane-add", { pane: s.value[t] }), le = !1;
			}));
		}, de = (e) => {
			let t = s.value.findIndex((t) => t.id === e);
			s.value[t].el = null;
			let n = s.value.splice(t, 1)[0];
			s.value.forEach((e, t) => e.index = t), qe(() => {
				j(), P("pane-remove", { pane: n }), fe({ removedPane: {
					...n,
					index: t
				} });
			});
		}, fe = (e = {}) => {
			!e.addedPane && !e.removedPane ? pe() : s.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? me(e) : M(), d.value && P("resized");
		}, M = () => {
			let e = 100 / l.value, t = 100, n = [], r = [];
			for (let i of s.value) i.size = Math.max(Math.min(e, i.max), i.min), t -= i.size, i.size >= i.max && n.push(i.id), i.size <= i.min && r.push(i.id);
			Math.abs(t) > .1 && he(t, n, r);
		}, pe = () => {
			let e = 100, t = [], n = [], r = 0;
			for (let i of s.value) e -= i.size, i.givenSize !== null && r++, i.size >= i.max && t.push(i.id), i.size <= i.min && n.push(i.id);
			let i = 100;
			if (e > .1) {
				for (let t of s.value) t.givenSize === null && (t.size = Math.max(Math.min(e / (l.value - r), t.max), t.min)), i -= t.size;
				i > .1 && he(i, t, n);
			}
		}, me = ({ addedPane: e, removedPane: t } = {}) => {
			let n = s.value.reduce((e, t) => e + (t.givenSize === null ? 0 : t.givenSize), 0), r = s.value.filter((e) => e.givenSize === null).length, i = r > 0 ? (100 - n) / r : 0, a = 0, o = [], c = [];
			for (let e of s.value) a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && c.push(e.id);
			if (!(Math.abs(a) < .1)) {
				a = 100;
				for (let e of s.value) e.givenSize === null && (e.size = Math.max(Math.min(i, e.max), e.min)), a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && c.push(e.id);
				Math.abs(a) > .1 && he(a, o, c);
			}
		}, he = (e, t, n) => {
			let r;
			r = e > 0 ? e / (l.value - t.length) : e / (l.value - n.length), s.value.forEach((i, a) => {
				if (e > 0 && !t.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				} else if (!n.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				}
			}), Math.abs(e) > .1 && d.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
		}, P = (e, t = void 0, r = !1) => {
			let a = t?.index ?? p.value.activeSplitter ?? null;
			n(e, {
				...t,
				...a !== null && { index: a },
				...r && a !== null && {
					prevPane: s.value[a - +!!i.firstSplitter],
					nextPane: s.value[a + +!i.firstSplitter]
				},
				panes: s.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		};
		A(() => i.firstSplitter, () => j()), A(() => i.horizontal, (e) => qe(() => {
			n("direction-changed", {
				horizontal: e,
				panes: s.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), Pe(() => {
			ae(), j(), fe(), P("ready"), d.value = !0;
		}), $e(() => d.value = !1);
		let ge = () => {
			let { class: e, ...t } = a;
			return Ct("div", {
				ref: u,
				class: [h.value, e],
				...t
			}, o.default?.());
		};
		return B("panes", s), B("indexedPanes", c), B("horizontal", L(() => i.horizontal)), B("requestUpdate", ce), B("onPaneAdd", ue), B("onPaneRemove", de), B("onPaneClick", w), (e, t) => (Z(), N(ye(ge)));
	}
}), ma = {
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
		let n = e, r = ct("requestUpdate"), i = ct("onPaneAdd"), a = ct("horizontal"), o = ct("onPaneRemove"), s = ct("onPaneClick"), c = Ie()?.uid, l = ct("indexedPanes"), u = L(() => l.value[c]), d = y(null), f = L(() => {
			let e = isNaN(n.size) || n.size === void 0 ? 0 : parseFloat(n.size);
			return Math.max(Math.min(e, m.value), p.value);
		}), p = L(() => {
			let e = parseFloat(n.minSize);
			return isNaN(e) ? 0 : e;
		}), m = L(() => {
			let e = parseFloat(n.maxSize);
			return isNaN(e) ? 100 : e;
		}), h = L(() => {
			let e = u.value?.size ?? (n.size === void 0 ? void 0 : f.value);
			return e === void 0 ? "" : `${a.value ? "height" : "width"}: ${e}%`;
		});
		return A(() => f.value, (e) => r({
			uid: c,
			size: e
		})), A(() => p.value, (e) => r({
			uid: c,
			min: e
		})), A(() => m.value, (e) => r({
			uid: c,
			max: e
		})), Pe(() => {
			i({
				id: c,
				el: d.value,
				min: p.value,
				max: m.value,
				givenSize: n.size === void 0 ? null : f.value,
				size: f.value
			});
		}), $e(() => o(c)), (e, n) => (Z(), H("div", {
			ref_key: "paneEl",
			ref: d,
			class: "splitpanes__pane",
			onClick: n[0] ||= (n) => t(s)(n, e._.uid),
			style: dt(h.value)
		}, [F(e.$slots, "default")], 4));
	}
};
// node_modules/@nextcloud/vue/dist/chunks/appName.mjs
function ha(e) {
	let t = !1, n;
	return (...r) => (t || (t = !0, n = e(...r)), n);
}
var ga = "missing-app-name";
try {
	ga = "rechnungswerk";
} catch {
	it.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
var _a = ga;
function va() {
	return t(ct("appName", _a));
}
var ya = ha(() => {
	let e = ge("core", "apps", []), t = va();
	return e.find(({ id: e }) => e === t)?.name ?? t;
});
// node_modules/@nextcloud/vue/dist/chunks/NcAppContent.mjs
ke(tt);
var ba = /* @__PURE__ */ kt(/* @__PURE__ */ W({
	__name: "NcAppContentDetailsToggle",
	setup(e) {
		let n = wt();
		A(n, r), Pe(() => {
			r(n.value);
		}), $e(() => {
			n.value && r(!1);
		});
		function r(e = !0) {
			let t = document.querySelector(".app-navigation .app-navigation-toggle");
			t && (t.style.display = e ? "none" : "", e === !0 && rt("toggle-navigation", { open: !1 }));
		}
		return (e, r) => (Z(), N(t(G), {
			"aria-label": t(R)("Go back to the list"),
			class: U(["app-details-toggle", { "app-details-toggle--mobile": t(n) }]),
			title: t(R)("Go back to the list"),
			variant: "tertiary"
		}, {
			icon: _(() => [J(t(He), {
				directional: "",
				path: t(x)
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-label",
			"class",
			"title"
		]));
	}
}), [["__scopeId", "data-v-a28923a1"]]), xa = {
	key: 0,
	class: "hidden-visually"
}, Sa = { class: "app-content-wrapper__list" }, Ca = {
	key: 1,
	class: "app-content-wrapper"
}, wa = se("nextcloud").persist().build(), Ta = Ft().theming?.name ?? "Nextcloud", Ea = /* @__PURE__ */ kt(/* @__PURE__ */ W({
	__name: "NcAppContent",
	props: /* @__PURE__ */ Ot({
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
	emits: /* @__PURE__ */ Ot(["resizeList", "update:showDetails"], ["update:showDetails"]),
	setup(e, { emit: r }) {
		let i = at(e, "showDetails"), a = r, o = va(), s = ya(), l = wt(), u = c(), d = Mt(() => e.disableSwipe ? void 0 : u.value, { onSwipeEnd(e, t) {
			Math.abs(d.lengthX.value) > 70 && (d.coordsStart.x < 150 && t === "right" ? rt("toggle-navigation", { open: !0 }) : d.coordsStart.x < 450 && t === "left" && rt("toggle-navigation", { open: !1 }));
		} }), f = y(), p = L(() => e.paneConfigKey === "" ? `pane-list-size-${o}` : `pane-list-size-${e.paneConfigKey}`), m = L(() => ({
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
		})), h = L(() => f.value ? 100 - f.value : m.value.details.size), g = L(() => {
			let t = /* @__PURE__ */ new Set();
			if (e.pageTitle) for (let n of e.pageTitle.split(" - ")) t.add(n);
			else if (e.pageHeading) {
				for (let n of e.pageHeading.split(" - ")) t.add(n);
				t.size > 0 && t.add(s);
			} else return null;
			return t.add(Ta), [...t.values()].join(" - ");
		});
		A(g, () => {
			g.value !== null && (document.title = g.value);
		}, { immediate: !0 }), A(() => e.paneConfigKey, x, { immediate: !0 }), Pe(x);
		function v(e) {
			let t = Math.trunc(e.panes[0].size);
			wa.setItem(p.value, JSON.stringify(t)), f.value = t, a("resizeList", { size: t }), it.debug("[NcAppContent] pane config", { listPaneSize: t });
		}
		function x() {
			let e = parseInt(wa.getItem(p.value) ?? "", 10);
			!isNaN(e) && e !== f.value && (it.debug("[NcAppContent] pane config", { listPaneSize: e }), f.value = e);
		}
		return (r, a) => (Z(), H("main", {
			id: "app-content-vue",
			class: U(["app-content no-snapper", { "app-content--has-list": !!r.$slots.list }])
		}, [
			e.pageHeading ? (Z(), H("h1", xa, Y(e.pageHeading), 1)) : n("", !0),
			r.$slots.list ? (Z(), H(E, { key: 1 }, [t(l) || e.layout === "no-split" ? (Z(), H("div", {
				key: 0,
				class: U(["app-content-wrapper app-content-wrapper--no-split", {
					"app-content-wrapper--show-details": i.value,
					"app-content-wrapper--show-list": !i.value,
					"app-content-wrapper--mobile": t(l)
				}])
			}, [
				i.value ? (Z(), N(ba, {
					key: 0,
					onClick: a[0] ||= bt((e) => i.value = !1, ["stop", "prevent"])
				})) : n("", !0),
				w(z("div", Sa, [F(r.$slots, "list", {}, void 0, !0)], 512), [[b, !i.value]]),
				i.value ? F(r.$slots, "default", {}, void 0, !0, 1) : n("", !0)
			], 2)) : e.layout === "vertical-split" || e.layout === "horizontal-split" ? (Z(), H("div", Ca, [J(t(pa), {
				horizontal: e.layout === "horizontal-split",
				class: U(["default-theme", {
					"splitpanes--horizontal": e.layout === "horizontal-split",
					"splitpanes--vertical": e.layout === "vertical-split"
				}]),
				rtl: t(ce),
				onResized: v
			}, {
				default: _(() => [J(t(ma), {
					class: "splitpanes__pane-list",
					size: f.value || m.value.list.size,
					minSize: m.value.list.min,
					maxSize: m.value.list.max
				}, {
					default: _(() => [F(r.$slots, "list", {}, void 0, !0)]),
					_: 3
				}, 8, [
					"size",
					"minSize",
					"maxSize"
				]), J(t(ma), {
					class: "splitpanes__pane-details",
					size: h.value,
					minSize: m.value.details.min,
					maxSize: m.value.details.max
				}, {
					default: _(() => [F(r.$slots, "default", {}, void 0, !0)]),
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
			])])) : n("", !0)], 64)) : n("", !0),
			r.$slots.list ? n("", !0) : F(r.$slots, "default", {}, void 0, !0, 2)
		], 2));
	}
}), [["__scopeId", "data-v-5de09463"]]), Q = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Da = {
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
}, Oa = ["aria-hidden", "aria-label"], ka = [
	"fill",
	"width",
	"height"
], Aa = { key: 0 };
function ja(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-document-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Aa, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" }, null, -1)], 8, ka))], 16, Oa);
}
var Ma = /*#__PURE__*/ Q(Da, [["render", ja]]), Na = {
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
}, Pa = ["aria-hidden", "aria-label"], Fa = [
	"fill",
	"width",
	"height"
], Ia = { key: 0 };
function La(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-document-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Ia, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" }, null, -1)], 8, Fa))], 16, Pa);
}
var Ra = /*#__PURE__*/ Q(Na, [["render", La]]), za = {
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
}, Ba = ["aria-hidden", "aria-label"], Va = [
	"fill",
	"width",
	"height"
], Ha = { key: 0 };
function Ua(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon account-group-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Ha, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" }, null, -1)], 8, Va))], 16, Ba);
}
var Wa = /*#__PURE__*/ Q(za, [["render", Ua]]), Ga = {
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
}, Ka = ["aria-hidden", "aria-label"], qa = [
	"fill",
	"width",
	"height"
], Ja = { key: 0 };
function Ya(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon account-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Ja, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" }, null, -1)], 8, qa))], 16, Ka);
}
var Xa = /*#__PURE__*/ Q(Ga, [["render", Ya]]), Za = {
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
}, Qa = ["aria-hidden", "aria-label"], $a = [
	"fill",
	"width",
	"height"
], eo = { key: 0 };
function to(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon package-variant-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", eo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" }, null, -1)], 8, $a))], 16, Qa);
}
var no = /*#__PURE__*/ Q(Za, [["render", to]]), ro = {
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
}, io = ["aria-hidden", "aria-label"], ao = [
	"fill",
	"width",
	"height"
], oo = { key: 0 };
function so(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon text-box-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", oo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null, -1)], 8, ao))], 16, io);
}
var co = /*#__PURE__*/ Q(ro, [["render", so]]), lo = {
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
}, uo = ["aria-hidden", "aria-label"], fo = [
	"fill",
	"width",
	"height"
], po = { key: 0 };
function mo(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon cog-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", po, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" }, null, -1)], 8, fo))], 16, uo);
}
var ho = /*#__PURE__*/ Q(lo, [["render", mo]]), go = {
	name: "HistoryIcon",
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
}, _o = ["aria-hidden", "aria-label"], vo = [
	"fill",
	"width",
	"height"
], yo = { key: 0 };
function bo(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon history-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", yo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" }, null, -1)], 8, vo))], 16, _o);
}
var xo = /*#__PURE__*/ Q(go, [["render", bo]]), So = {
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
}, Co = ["aria-hidden", "aria-label"], wo = [
	"fill",
	"width",
	"height"
], To = { key: 0 };
function Eo(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon lock-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", To, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" }, null, -1)], 8, wo))], 16, Co);
}
var Do = /*#__PURE__*/ Q(So, [["render", Eo]]), Oo = {
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
}, ko = ["aria-hidden", "aria-label"], Ao = [
	"fill",
	"width",
	"height"
], jo = { key: 0 };
function Mo(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon chart-bar-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", jo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" }, null, -1)], 8, Ao))], 16, ko);
}
var No = /*#__PURE__*/ Q(Oo, [["render", Mo]]), Po = {
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
}, Fo = ["aria-hidden", "aria-label"], Io = [
	"fill",
	"width",
	"height"
], Lo = { key: 0 };
function Ro(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon counter-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Lo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z" }, null, -1)], 8, Io))], 16, Fo);
}
var zo = /*#__PURE__*/ Q(Po, [["render", Ro]]), Bo = {
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
}, Vo = ["aria-hidden", "aria-label"], Ho = [
	"fill",
	"width",
	"height"
], Uo = { key: 0 };
function Wo(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon email-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Uo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, null, -1)], 8, Ho))], 16, Vo);
}
var Go = /*#__PURE__*/ Q(Bo, [["render", Wo]]), Ko = {
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
}, qo = ["aria-hidden", "aria-label"], Jo = [
	"fill",
	"width",
	"height"
], Yo = { key: 0 };
function Xo(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Yo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" }, null, -1)], 8, Jo))], 16, qo);
}
var Zo = /*#__PURE__*/ Q(Ko, [["render", Xo]]), Qo = {
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
}, $o = ["aria-hidden", "aria-label"], es = [
	"fill",
	"width",
	"height"
], ts = { key: 0 };
function ns(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon magnify-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", ts, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, null, -1)], 8, es))], 16, $o);
}
var rs = /*#__PURE__*/ Q(Qo, [["render", ns]]), is = {
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
}, as = ["aria-hidden", "aria-label"], os = [
	"fill",
	"width",
	"height"
], ss = { key: 0 };
function cs(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon star-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", ss, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, null, -1)], 8, os))], 16, as);
}
var ls = /*#__PURE__*/ Q(is, [["render", cs]]), us = {
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
}, ds = ["aria-hidden", "aria-label"], fs = [
	"fill",
	"width",
	"height"
], ps = { key: 0 };
function ms(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon translate-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", ps, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" }, null, -1)], 8, fs))], 16, ds);
}
var hs = /*#__PURE__*/ Q(us, [["render", ms]]);
// src/api/client.ts
function gs(e) {
	return P(`/apps/rechnungswerk/api/v1${e}`);
}
function _s(e) {
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
async function vs(e) {
	try {
		let { data: t } = await Ye.get(gs(e));
		return t;
	} catch (e) {
		throw _s(e);
	}
}
async function ys(e, t) {
	try {
		let { data: n } = await Ye.post(gs(e), t);
		return n;
	} catch (e) {
		throw _s(e);
	}
}
async function bs(e, t) {
	try {
		let { data: n } = await Ye.patch(gs(e), t);
		return n;
	} catch (e) {
		throw _s(e);
	}
}
async function xs(e, t) {
	try {
		let { data: n } = await Ye.put(gs(e), t);
		return n;
	} catch (e) {
		throw _s(e);
	}
}
async function Ss(e) {
	try {
		let { data: t } = await Ye.delete(gs(e));
		return t;
	} catch (e) {
		throw _s(e);
	}
}
// src/api/whatsnew.ts
var Cs = () => vs("/whatsnew"), ws = () => ys("/whatsnew/seen", {});
// src/utils/modalEsc.ts
function Ts(e, t) {
	e.target?.closest?.(".v-select.vs--open") || t();
}
// src/components/WhatsNewDialog.vue?vue&type=script&setup=true&lang.ts
var Es = { class: "whatsnew" }, Ds = { class: "whatsnew__version" }, Os = { class: "whatsnew__icon" }, ks = { class: "whatsnew__body" }, As = { class: "whatsnew__entry-title" }, js = {
	key: 0,
	class: "whatsnew__badge"
}, Ms = { class: "whatsnew__entry-text" }, Ns = {
	key: 0,
	class: "whatsnew__where"
}, Ps = { key: 0 }, Fs = { class: "actions" }, Is = "https://werkwolke.de", Ls = "whatsnew-title", Rs = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "WhatsNewDialog",
	setup(e) {
		let r = {
			"account-group": Wa,
			"chart-bar": No,
			cog: ho,
			counter: zo,
			email: Go,
			"file-document": Ma,
			folder: Zo,
			magnify: rs,
			star: ls,
			translate: hs
		}, i = y(!1), a = y(""), o = y([]), s = T("rechnungswerk", "Was ist neu in RechnungsWerk");
		function c(e) {
			return r[e] ?? ls;
		}
		Pe(async () => {
			try {
				let e = await Cs();
				e.entries.length > 0 && (a.value = e.version, o.value = e.entries, i.value = !0);
			} catch {}
		});
		async function l() {
			i.value = !1;
			try {
				await ws();
			} catch {}
		}
		return (e, r) => i.value ? (Z(), N(t(Ne), {
			key: 0,
			labelId: Ls,
			onKeydown: r[0] ||= O((e) => t(Ts)(e, l), ["esc"]),
			onClose: l
		}, {
			default: _(() => [z("div", Es, [
				z("h2", { id: Ls }, Y(t(s)), 1),
				z("p", Ds, Y(t(T)("rechnungswerk", "Version {version}", { version: a.value })), 1),
				(Z(!0), H(E, null, X(o.value, (e, r) => (Z(), H("div", {
					key: r,
					class: "whatsnew__entry"
				}, [z("div", Os, [(Z(), N(ye(c(e.icon)), { size: 22 }))]), z("div", ks, [
					z("h3", As, [q(Y(e.title) + " ", 1), e.plus ? (Z(), H("span", js, "WerkPlus")) : n("", !0)]),
					z("p", Ms, Y(e.text), 1),
					e.where ? (Z(), H("p", Ns, [
						q(Y(t(T)("rechnungswerk", "Zu finden unter")) + " ", 1),
						z("b", null, Y(e.where), 1),
						e.adminOnly ? (Z(), H("span", Ps, Y(" " + t(T)("rechnungswerk", "(nur für Administratoren)")), 1)) : n("", !0)
					])) : n("", !0),
					e.plus ? (Z(), H("a", {
						key: 1,
						class: "whatsnew__link",
						href: Is,
						target: "_blank",
						rel: "noreferrer noopener"
					}, Y(t(T)("rechnungswerk", "Mehr zu WerkPlus")), 1)) : n("", !0)
				])]))), 128)),
				z("div", Fs, [J(t(G), {
					variant: "primary",
					onClick: l
				}, {
					default: _(() => [q(Y(t(T)("rechnungswerk", "Alles klar")), 1)]),
					_: 1
				})])
			])]),
			_: 1
		})) : n("", !0);
	}
}), [["__scopeId", "data-v-acac04e5"]]), zs = () => vs("/permission-info"), Bs = () => vs("/permissions"), Vs = (e) => xs("/permissions", e), Hs = (e) => vs(`/principals/search?query=${encodeURIComponent(e)}`), Us = yn("permissions", () => {
	let e = y(null), t = y(!1);
	async function n() {
		try {
			e.value = await zs();
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
}), Ws = (e = !1) => vs(e ? "/club-status?includeMembershipTypes=1" : "/club-status"), Gs = yn("clubStatus", () => {
	let e = y(!1), t = y(!1);
	async function n() {
		try {
			let t = await Ws();
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
}), Ks = { class: "rw-navigation-footer" }, qs = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "App",
	setup(e) {
		let r = Us(), i = Gs(), a = L(() => r.info?.hasAccess ?? !1), o = L(() => r.info?.isAdmin ?? !1), s = L(() => i.clubMode);
		return Pe(async () => {
			await r.fetch(), r.info?.hasAccess && await i.fetch();
		}), (e, i) => {
			let c = l("router-view");
			return Z(), N(t(hi), { appName: "rechnungswerk" }, {
				default: _(() => [t(r).loaded ? a.value ? (Z(), H(E, { key: 2 }, [
					J(t(wi), { "aria-label": t(T)("rechnungswerk", "RechnungsWerk Navigation") }, {
						list: _(() => [
							J(t(fa), {
								name: t(T)("rechnungswerk", "Rechnungen"),
								to: { name: "invoices" }
							}, {
								icon: _(() => [J(Ma, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							s.value ? (Z(), N(t(fa), {
								key: 0,
								name: t(T)("rechnungswerk", "Beitragsabrechnung"),
								to: { name: "membership-fees" }
							}, {
								icon: _(() => [J(Ma, { size: 20 })]),
								_: 1
							}, 8, ["name"])) : n("", !0),
							J(t(fa), {
								name: t(T)("rechnungswerk", "Angebote"),
								to: { name: "quotes" }
							}, {
								icon: _(() => [J(Ra, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							J(t(fa), {
								name: t(T)("rechnungswerk", "Kunden"),
								to: { name: "customers" }
							}, {
								icon: _(() => [J(Wa, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							J(t(fa), {
								name: t(T)("rechnungswerk", "Produkte"),
								to: { name: "products" }
							}, {
								icon: _(() => [J(no, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							J(t(fa), {
								name: t(T)("rechnungswerk", "Textbausteine"),
								to: { name: "text-snippets" }
							}, {
								icon: _(() => [J(co, { size: 20 })]),
								_: 1
							}, 8, ["name"])
						]),
						footer: _(() => [z("ul", Ks, [
							J(t(fa), {
								name: t(T)("rechnungswerk", "Protokoll"),
								to: { name: "audit" }
							}, {
								icon: _(() => [J(xo, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							J(t(fa), {
								name: t(T)("rechnungswerk", "Mein Kontakt"),
								to: { name: "my-contact" }
							}, {
								icon: _(() => [J(Xa, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							o.value ? (Z(), N(t(fa), {
								key: 0,
								name: t(T)("rechnungswerk", "Einstellungen"),
								to: { name: "settings" }
							}, {
								icon: _(() => [J(ho, { size: 20 })]),
								_: 1
							}, 8, ["name"])) : n("", !0)
						])]),
						_: 1
					}, 8, ["aria-label"]),
					J(t(Ea), null, {
						default: _(() => [J(c)]),
						_: 1
					}),
					J(Rs)
				], 64)) : (Z(), N(t(Ea), { key: 1 }, {
					default: _(() => [J(t(Re), {
						name: t(T)("rechnungswerk", "Kein Zugriff"),
						description: t(T)("rechnungswerk", "Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.")
					}, {
						icon: _(() => [J(Do, { size: 20 })]),
						_: 1
					}, 8, ["name", "description"])]),
					_: 1
				})) : (Z(), N(t(Ea), { key: 0 }, {
					default: _(() => [J(t(ve), {
						class: "rw-app-loading",
						size: 44
					})]),
					_: 1
				}))]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-2fcf6b2e"]]), Js = ["role"], Ys = {
	key: 0,
	class: "notecard__heading"
}, Xs = { class: "notecard__text" }, $ = /* @__PURE__ */ kt(/* @__PURE__ */ W({
	__name: "NcNoteCard",
	props: {
		heading: { default: void 0 },
		showAlert: { type: Boolean },
		text: { default: void 0 },
		type: { default: "warning" }
	},
	setup(e) {
		let r = e, i = L(() => r.showAlert || r.type === "error"), o = L(() => {
			switch (r.type) {
				case "error": return a;
				case "success": return De;
				case "info": return te;
				default: return Rt;
			}
		});
		return (r, a) => (Z(), H("div", {
			class: U(["notecard", {
				[`notecard--${e.type}`]: e.type,
				"notecard--legacy": t(We)
			}]),
			role: i.value ? "alert" : "note"
		}, [F(r.$slots, "icon", {}, () => [J(t(He), {
			path: o.value,
			class: U(["notecard__icon", { "notecard__icon--heading": e.heading }]),
			inline: ""
		}, null, 8, ["path", "class"])], !0), z("div", null, [e.heading ? (Z(), H("p", Ys, Y(e.heading), 1)) : n("", !0), F(r.$slots, "default", {}, () => [z("p", Xs, Y(e.text), 1)], !0)])], 10, Js));
	}
}), [["__scopeId", "data-v-6be9fa31"]]), Zs = {
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
}, Qs = ["aria-hidden", "aria-label"], $s = [
	"fill",
	"width",
	"height"
], ec = { key: 0 };
function tc(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon information-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", ec, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" }, null, -1)], 8, $s))], 16, Qs);
}
var nc = /*#__PURE__*/ Q(Zs, [["render", tc]]), rc = { class: "info-icon-wrapper" }, ic = {
	class: "info-popup",
	tabindex: "0"
}, ac = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "InfoIcon",
	setup(e) {
		return (e, n) => (Z(), H("span", rc, [J(t(d), {
			popupRole: "tooltip",
			noFocusTrap: ""
		}, {
			trigger: _(() => [J(nc, {
				class: "info-icon",
				size: 14,
				tabindex: "0"
			})]),
			default: _(() => [z("div", ic, [F(e.$slots, "default", {}, void 0, !0)])]),
			_: 3
		})]));
	}
}), [["__scopeId", "data-v-04f73240"]]), oc = {
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
}, sc = ["aria-hidden", "aria-label"], cc = [
	"fill",
	"width",
	"height"
], lc = { key: 0 };
function uc(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon plus-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", lc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, null, -1)], 8, cc))], 16, sc);
}
var dc = /*#__PURE__*/ Q(oc, [["render", uc]]), fc = {
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
}, pc = ["aria-hidden", "aria-label"], mc = [
	"fill",
	"width",
	"height"
], hc = { key: 0 };
function gc(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon download-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", hc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" }, null, -1)], 8, mc))], 16, pc);
}
var _c = /*#__PURE__*/ Q(fc, [["render", gc]]), vc = {
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
}, yc = ["aria-hidden", "aria-label"], bc = [
	"fill",
	"width",
	"height"
], xc = { key: 0 };
function Sc(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon content-copy-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", xc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }, null, -1)], 8, bc))], 16, yc);
}
var Cc = /*#__PURE__*/ Q(vc, [["render", Sc]]), wc = {
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
}, Tc = ["aria-hidden", "aria-label"], Ec = [
	"fill",
	"width",
	"height"
], Dc = { key: 0 };
function Oc(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon pencil-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Dc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" }, null, -1)], 8, Ec))], 16, Tc);
}
var kc = /*#__PURE__*/ Q(wc, [["render", Oc]]), Ac = {
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
}, jc = ["aria-hidden", "aria-label"], Mc = [
	"fill",
	"width",
	"height"
], Nc = { key: 0 };
function Pc(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon close-circle-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Nc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }, null, -1)], 8, Mc))], 16, jc);
}
var Fc = /*#__PURE__*/ Q(Ac, [["render", Pc]]), Ic = {
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
}, Lc = ["aria-hidden", "aria-label"], Rc = [
	"fill",
	"width",
	"height"
], zc = { key: 0 };
function Bc(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon check-circle-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", zc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" }, null, -1)], 8, Rc))], 16, Lc);
}
var Vc = /*#__PURE__*/ Q(Ic, [["render", Bc]]), Hc = {
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
], Gc = { key: 0 };
function Kc(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon clock-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Gc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" }, null, -1)], 8, Wc))], 16, Uc);
}
var qc = /*#__PURE__*/ Q(Hc, [["render", Kc]]), Jc = {
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
}, Yc = ["aria-hidden", "aria-label"], Xc = [
	"fill",
	"width",
	"height"
], Zc = { key: 0 };
function Qc(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon help-circle-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Zc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, null, -1)], 8, Xc))], 16, Yc);
}
var $c = /*#__PURE__*/ Q(Jc, [["render", Qc]]), el = {
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
], rl = { key: 0 };
function il(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon checkbox-blank-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", rl, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, null, -1)], 8, nl))], 16, tl);
}
var al = /*#__PURE__*/ Q(el, [["render", il]]), ol = {
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
}, sl = ["aria-hidden", "aria-label"], cl = [
	"fill",
	"width",
	"height"
], ll = { key: 0 };
function ul(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon checkbox-marked-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", ll, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null, -1)], 8, cl))], 16, sl);
}
var dl = /*#__PURE__*/ Q(ol, [["render", ul]]), fl = {
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
}, pl = ["aria-hidden", "aria-label"], ml = [
	"fill",
	"width",
	"height"
], hl = { key: 0 };
function gl(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon check-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", hl, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }, null, -1)], 8, ml))], 16, pl);
}
var _l = /*#__PURE__*/ Q(fl, [["render", gl]]), vl = {
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
}, yl = ["aria-hidden", "aria-label"], bl = [
	"fill",
	"width",
	"height"
], xl = { key: 0 };
function Sl(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", xl, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, null, -1)], 8, bl))], 16, yl);
}
var Cl = /*#__PURE__*/ Q(vl, [["render", Sl]]), wl = () => vs("/invoices"), Tl = (e) => vs(`/invoices/${e}`), El = (e) => ys("/invoices", { data: e }), Dl = (e, t) => bs(`/invoices/${e}`, { data: t }), Ol = (e) => Ss(`/invoices/${e}`), kl = (e) => ys(`/invoices/${e}/commit`, {}), Al = (e) => ys(`/invoices/${e}/cancel`, {}), jl = (e) => ys(`/invoices/${e}/duplicate`, {}), Ml = (e, t) => ys(`/invoices/${e}/pay`, t ? { date: t } : {}), Nl = (e) => ys(`/invoices/${e}/unpay`, {}), Pl = (e) => gs(`/invoices/${e}/pdf`), Fl = (e) => gs(`/invoices/${e}/preview`) + "?t=" + Date.now(), Il = (e) => {
	let t = document.createElement("a");
	t.href = Pl(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Ll = (e, t) => ys(`/invoices/${e}/send`, t), Rl = yn("invoice", () => {
	let e = y([]), t = y(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await wl();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => Tl(e);
	async function i(e) {
		let t = await El(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await Dl(e, t);
		return await n(), r;
	}
	async function o(t) {
		await Ol(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await kl(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await Al(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await jl(e);
		return await n(), t;
	}
	async function u(e, t) {
		let r = await Ml(e, t);
		return await n(), r;
	}
	async function d(e) {
		let t = await Nl(e);
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
}), zl = (e) => ys("/smtp/test", e), Bl = () => vs("/settings"), Vl = (e) => xs("/settings", { data: e }), Hl = (e) => xs("/settings/logo", { path: e }), Ul = () => Ss("/settings/logo"), Wl = (e) => `${gs("/settings/logo")}?v=${e}`, Gl = (e) => xs("/settings/archive-folder", { path: e }), Kl = () => Ss("/settings/archive-folder"), ql = yn("settings", () => {
	let e = y(null), t = y(!1), n = y(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Bl();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		n.value = !0;
		try {
			return e.value = await Vl(t), e.value;
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
}), Jl = [
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
], Yl = {
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
}, Xl = [
	1900,
	700,
	0
], Zl = "Gem. § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.", Ql = {
	invoice: "Rechnung",
	quote: "Angebot"
}, $l = {
	opening: "Anrede & Einleitung",
	closing: "Schlusstext"
}, eu = {
	draft: "Entwurf",
	committed: "Festgeschrieben",
	cancelled: "Storniert"
}, tu = {
	invoice: "Rechnung",
	cancellation: "Storno",
	quote: "Angebot"
}, nu = {
	draft: "Entwurf",
	open: "Offen",
	expired: "Abgelaufen",
	accepted: "Angenommen",
	rejected: "Abgelehnt",
	converted: "Übernommen",
	superseded: "Revidiert"
};
function ru(e) {
	return e.includes(".") ? /^\d{1,3}(\.\d{3})+$/.test(e) : /^\d*$/.test(e);
}
function iu(e, t, n) {
	if (e == null) return null;
	let r = String(e).replace(/[\s  ]+/g, "");
	if (r === "") return null;
	let i = !1;
	if (r.startsWith("-") ? (i = !0, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1)), r === "" || !/^[0-9.,]+$/.test(r)) return null;
	let a = r.indexOf(","), o, s;
	if (a >= 0) {
		if (r.includes(",", a + 1) || (o = r.slice(0, a), s = r.slice(a + 1), s.includes("."))) return null;
	} else o = r, s = "";
	if (!ru(o) || (o = o.split(".").join(""), o === "" && s === "") || (o === "" && (o = "0"), !/^\d+$/.test(o)) || s !== "" && !/^\d+$/.test(s) || s.length > t || (o = o.replace(/^0+/, ""), o === "" && (o = "0"), o.length > n)) return null;
	s = s.replace(/0+$/, "");
	let c = o + (s === "" ? "" : "." + s);
	return i && c !== "0" ? "-" + c : c;
}
function au(e) {
	return e == null || String(e).trim() === "" ? "1" : iu(e, 3, 9);
}
function ou(e) {
	return e == null || String(e).trim() === "" ? "0" : iu(e, 4, 9);
}
function su(e) {
	if (e === null) return "";
	let [t, n] = e.split("."), r = t.startsWith("-") ? "-" : "";
	return r + (r ? t.slice(1) : t).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (n ? "," + n : "");
}
function cu(e) {
	if (e == null) return "";
	let t = String(e).trim();
	if (t === "") return "";
	if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(t)) return t;
	let n = t.startsWith("-");
	(n || t.startsWith("+")) && (t = t.slice(1));
	let [r, i = ""] = t.split("."), a = r.replace(/^0+/, "") || "0", o = i.replace(/0+$/, "");
	return su((n && (a !== "0" || o !== "") ? "-" : "") + a + (o === "" ? "" : "." + o));
}
// src/utils/money.ts
function lu(e) {
	return e == null ? "" : su((e / 1e4).toFixed(4).replace(/(\.\d\d)(\d*?)0+$/, "$1$2"));
}
function uu(e) {
	let t = ou(e);
	return t === null ? 0 : Math.round(Number.parseFloat(t) * 1e4);
}
function du(e) {
	let t = (e ?? 0) / 1e4;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	}).format(t);
}
function fu(e) {
	let t = (e ?? 0) / 100;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR"
	}).format(t);
}
function pu(e) {
	return `${e / 100} %`;
}
// src/views/InvoicesView.vue?vue&type=script&setup=true&lang.ts
var mu = { class: "rw-view" }, hu = { class: "rw-view__head" }, gu = { key: 2 }, _u = { class: "rw-filterbar" }, vu = ["onClick"], yu = { class: "rw-chip__n" }, bu = {
	key: 0,
	class: "rw-chip rw-chip--sum"
}, xu = { class: "rw-table-wrap" }, Su = { class: "rw-table" }, Cu = { class: "rw-th-info" }, wu = { class: "rw-info-popup" }, Tu = { class: "rw-info-popup__hint" }, Eu = { class: "rw-info-popup__group" }, Du = { class: "rw-legend__label" }, Ou = { class: "rw-legend__item" }, ku = { class: "rw-legend__item" }, Au = { class: "rw-legend__item" }, ju = {
	key: 0,
	class: "rw-info-popup__group"
}, Mu = { class: "rw-legend__label" }, Nu = { class: "rw-legend__item" }, Pu = { class: "rw-legend__item" }, Fu = { class: "rw-legend__item" }, Iu = { class: "num" }, Lu = { class: "rw-col-paid" }, Ru = ["onClick"], zu = { class: "rw-status-cell" }, Bu = { class: "rw-nowrap" }, Vu = {
	key: 0,
	class: "rw-pill"
}, Hu = { class: "num" }, Uu = ["aria-label", "onKeyup"], Wu = ["title", "onClick"], Gu = { class: "rw-col-paid" }, Ku = [
	"aria-label",
	"title",
	"onClick"
], qu = { class: "rw-col-actions" }, Ju = { class: "rw-actions" }, Yu = 864e5, Xu = /* @__PURE__ */ W({
	__name: "InvoicesView",
	setup(e) {
		let r = ot(), i = Rl(), a = ql(), o = y(""), s = L(() => !!a.settings?.imapHost), c = L(() => i.invoices.some((e) => !!e.datevStatus)), l = L(() => s.value || c.value), u = [
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
		], d = y("all"), f = (e) => e.paymentStatus === "unpaid" || e.paymentStatus === "overdue", p = L(() => {
			let e = {
				all: i.invoices.length,
				open: 0,
				overdue: 0,
				paid: 0
			};
			for (let t of i.invoices) f(t) && e.open++, t.paymentStatus === "overdue" && e.overdue++, t.paymentStatus === "paid" && e.paid++;
			return e;
		}), m = L(() => i.invoices.reduce((e, t) => e + (f(t) ? t.totalCents : 0), 0)), h = L(() => {
			switch (d.value) {
				case "open": return i.invoices.filter(f);
				case "overdue": return i.invoices.filter((e) => e.paymentStatus === "overdue");
				case "paid": return i.invoices.filter((e) => e.paymentStatus === "paid");
				default: return i.invoices;
			}
		});
		function g(e) {
			return e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e);
		}
		function v(e) {
			let t = g(e);
			t.setHours(0, 0, 0, 0);
			let n = /* @__PURE__ */ new Date();
			return n.setHours(0, 0, 0, 0), Math.round((t.getTime() - n.getTime()) / Yu);
		}
		function b(e) {
			return e ? g(e).toLocaleDateString(void 0, {
				day: "numeric",
				month: "numeric"
			}) : "";
		}
		let x = (e) => e.paymentStatus === "overdue" ? "rw-amt-overdue" : e.paymentStatus === "paid" ? "rw-amt-paid" : "";
		function S(e) {
			if (e.paymentStatus === "paid") return e.paidAt ? T("rechnungswerk", "bezahlt am {date}", { date: b(e.paidAt) }) : T("rechnungswerk", "bezahlt");
			if (!e.dueDate) return "";
			let t = v(e.dueDate);
			if (e.paymentStatus === "overdue") {
				let e = -t;
				return e === 1 ? T("rechnungswerk", "1 Tag überfällig") : T("rechnungswerk", "{days} Tage überfällig", { days: String(e) });
			}
			return e.paymentStatus === "unpaid" ? t <= 0 ? T("rechnungswerk", "fällig heute") : t === 1 ? T("rechnungswerk", "fällig morgen ({date})", { date: b(e.dueDate) }) : T("rechnungswerk", "fällig in {days} Tagen ({date})", {
				days: String(t),
				date: b(e.dueDate)
			}) : "";
		}
		let ee = (e) => e.paymentStatus === "paid" ? T("rechnungswerk", "Als unbezahlt markieren") : T("rechnungswerk", "Als bezahlt markieren");
		function C(e) {
			return e.paymentStatus === "paid" ? e.paidAt ? T("rechnungswerk", "Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen", { date: b(e.paidAt) }) : T("rechnungswerk", "Bezahlt – klicken, um die Zahlung zurückzunehmen") : T("rechnungswerk", "Als bezahlt markieren");
		}
		async function te(e) {
			o.value = "";
			try {
				e.paymentStatus === "paid" ? await i.markUnpaid(e.id) : await i.markPaid(e.id);
			} catch (e) {
				o.value = e.message ?? T("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		let ne = y(null), D = y("");
		function re(e) {
			let t = e ? g(e) : /* @__PURE__ */ new Date(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
			return `${t.getFullYear()}-${n}-${r}`;
		}
		function k(e) {
			o.value = "", D.value = re(e.paidAt), ne.value = e.id;
		}
		function ie() {
			ne.value = null;
		}
		async function ae(e) {
			if (!D.value) ie();
			else {
				o.value = "";
				try {
					await i.markPaid(e.id, D.value), ne.value = null;
				} catch (e) {
					o.value = e.message ?? T("rechnungswerk", "Zahldatum konnte nicht geändert werden");
				}
			}
		}
		let oe = {
			draft: kc,
			committed: Do,
			cancelled: Fc
		}, se = {
			pending: qc,
			confirmed: Vc,
			unknown: $c,
			failed: Fc
		}, A = (e) => oe[e] ?? Ma, j = (e) => e ? se[e] ?? null : null, ce = {
			pending: T("rechnungswerk", "An DATEV gesendet – Bestätigung ausstehend"),
			confirmed: T("rechnungswerk", "Von DATEV bestätigt (Beleg angenommen)"),
			unknown: T("rechnungswerk", "DATEV-Antwort prüfen"),
			failed: T("rechnungswerk", "Von DATEV abgelehnt")
		}, le = (e) => ce[e] ?? "", ue = (e) => T("rechnungswerk", eu[e] ?? e), de = (e) => T("rechnungswerk", tu[e] ?? e), fe = (e) => e.relatedNumber ? T("rechnungswerk", "{type} zu Rechnung {number}", {
			type: de(e.invoiceType),
			number: e.relatedNumber
		}) : de(e.invoiceType);
		function M(e) {
			return e ? new Date(e).toLocaleDateString() : "—";
		}
		Pe(() => {
			i.fetchAll().catch((e) => {
				o.value = e.message ?? T("rechnungswerk", "Laden fehlgeschlagen");
			}), a.fetch().catch(() => {});
		});
		function pe() {
			r.push({ name: "invoice-new" });
		}
		function me(e) {
			r.push({
				name: "invoice-detail",
				params: { id: String(e) }
			});
		}
		function he(e) {
			Il(e);
		}
		async function P(e) {
			o.value = "";
			try {
				let t = await i.duplicate(e);
				r.push({
					name: "invoice-detail",
					params: { id: String(t.id) }
				});
			} catch (e) {
				o.value = e.message ?? T("rechnungswerk", "Duplizieren fehlgeschlagen");
			}
		}
		return (e, r) => {
			let a = Nt("tooltip");
			return Z(), H("div", mu, [
				z("div", hu, [z("h2", null, Y(t(T)("rechnungswerk", "Rechnungen")), 1), J(t(G), {
					variant: "primary",
					onClick: pe
				}, {
					icon: _(() => [J(dc, { size: 20 })]),
					default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Neue Rechnung")), 1)]),
					_: 1
				})]),
				o.value ? (Z(), N(t($), {
					key: 0,
					type: "error",
					text: o.value
				}, null, 8, ["text"])) : n("", !0),
				!t(i).loading && t(i).invoices.length === 0 ? (Z(), N(t(Re), {
					key: 1,
					name: t(T)("rechnungswerk", "Noch keine Rechnungen"),
					description: t(T)("rechnungswerk", "Lege deine erste Rechnung an.")
				}, {
					icon: _(() => [J(Ma, { size: 20 })]),
					_: 1
				}, 8, ["name", "description"])) : t(i).invoices.length > 0 ? (Z(), H("div", gu, [z("div", _u, [(Z(), H(E, null, X(u, (e) => z("button", {
					key: e.key,
					class: U(["rw-chip", {
						"rw-chip--active": d.value === e.key,
						"rw-chip--overdue": e.key === "overdue"
					}]),
					onClick: (t) => d.value = e.key
				}, [q(Y(t(T)("rechnungswerk", e.label)) + " ", 1), z("span", yu, Y(p.value[e.key]), 1)], 10, vu)), 64)), m.value > 0 ? (Z(), H("span", bu, [q(Y(t(T)("rechnungswerk", "Offen gesamt:")) + " ", 1), z("strong", null, Y(t(fu)(m.value)), 1)])) : n("", !0)]), z("div", xu, [z("table", Su, [z("thead", null, [z("tr", null, [
					z("th", null, [z("span", Cu, [q(Y(t(T)("rechnungswerk", "Status")) + " ", 1), J(ac, null, {
						default: _(() => [z("div", wu, [
							z("p", Tu, Y(t(T)("rechnungswerk", "Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.")), 1),
							z("div", Eu, [
								z("span", Du, Y(t(T)("rechnungswerk", "Rechnung")), 1),
								z("span", Ou, [J(Do, {
									size: 16,
									class: "rw-sicon rw-sicon--committed"
								}), q(" " + Y(t(T)("rechnungswerk", "Festgeschrieben")), 1)]),
								z("span", ku, [J(kc, {
									size: 16,
									class: "rw-sicon rw-sicon--draft"
								}), q(" " + Y(t(T)("rechnungswerk", "Entwurf")), 1)]),
								z("span", Au, [J(Fc, {
									size: 16,
									class: "rw-sicon rw-sicon--cancelled"
								}), q(" " + Y(t(T)("rechnungswerk", "Storniert")), 1)])
							]),
							l.value ? (Z(), H("div", ju, [
								z("span", Mu, Y(t(T)("rechnungswerk", "DATEV-Übergabe")), 1),
								z("span", Nu, [J(Vc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-confirmed"
								}), q(" " + Y(t(T)("rechnungswerk", "bestätigt")), 1)]),
								z("span", Pu, [J(qc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-pending"
								}), q(" " + Y(t(T)("rechnungswerk", "gesendet")), 1)]),
								z("span", Fu, [J($c, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-unknown"
								}), q(" " + Y(t(T)("rechnungswerk", "Antwort prüfen")), 1)])
							])) : n("", !0)
						])]),
						_: 1
					})])]),
					z("th", null, Y(t(T)("rechnungswerk", "Nummer")), 1),
					z("th", null, Y(t(T)("rechnungswerk", "Empfänger")), 1),
					z("th", null, Y(t(T)("rechnungswerk", "Datum")), 1),
					z("th", Iu, Y(t(T)("rechnungswerk", "Brutto")), 1),
					z("th", Lu, Y(t(T)("rechnungswerk", "Bezahlt")), 1),
					r[2] ||= z("th", { class: "rw-col-actions" }, null, -1)
				])]), z("tbody", null, [(Z(!0), H(E, null, X(h.value, (e) => (Z(), H("tr", {
					key: e.id,
					class: U(["rw-row-clickable", { "rw-row--overdue": e.paymentStatus === "overdue" }]),
					onClick: (t) => me(e.id)
				}, [
					z("td", null, [z("span", zu, [(Z(), N(ye(A(e.status)), {
						size: 20,
						class: U(["rw-sicon", `rw-sicon--${e.status}`]),
						title: ue(e.status)
					}, null, 8, ["class", "title"])), l.value && e.datevStatus && j(e.datevStatus) ? (Z(), N(ye(j(e.datevStatus)), {
						key: 0,
						size: 18,
						class: U(["rw-sicon", `rw-sicon--datev-${e.datevStatus}`]),
						title: le(e.datevStatus)
					}, null, 8, ["class", "title"])) : n("", !0)])]),
					z("td", Bu, [q(Y(e.number ?? t(T)("rechnungswerk", "(Entwurf)")) + " ", 1), e.invoiceType === "invoice" ? n("", !0) : w((Z(), H("span", Vu, [q(Y(de(e.invoiceType)), 1)])), [[a, fe(e)]])]),
					z("td", null, Y(e.recipientName ?? "—"), 1),
					z("td", null, Y(M(e.issueDate ?? e.createdAt)), 1),
					z("td", Hu, [z("span", { class: U(x(e)) }, Y(t(fu)(e.totalCents)), 3), ne.value === e.id ? (Z(), H("div", {
						key: 0,
						class: "rw-paid-edit",
						onClick: r[1] ||= bt(() => {}, ["stop"])
					}, [
						w(z("input", {
							"onUpdate:modelValue": r[0] ||= (e) => D.value = e,
							type: "date",
							class: "rw-input rw-paid-input",
							"aria-label": t(T)("rechnungswerk", "Zahldatum"),
							onKeyup: [O((t) => ae(e), ["enter"]), O(ie, ["esc"])]
						}, null, 40, Uu), [[I, D.value]]),
						J(t(G), {
							variant: "primary",
							"aria-label": t(T)("rechnungswerk", "Zahldatum speichern"),
							title: t(T)("rechnungswerk", "Zahldatum speichern"),
							onClick: bt((t) => ae(e), ["stop"])
						}, {
							icon: _(() => [J(_l, { size: 18 })]),
							_: 1
						}, 8, [
							"aria-label",
							"title",
							"onClick"
						]),
						J(t(G), {
							variant: "tertiary",
							"aria-label": t(T)("rechnungswerk", "Abbrechen"),
							title: t(T)("rechnungswerk", "Abbrechen"),
							onClick: bt(ie, ["stop"])
						}, {
							icon: _(() => [J(Cl, { size: 18 })]),
							_: 1
						}, 8, ["aria-label", "title"])
					])) : e.paymentStatus === "paid" ? (Z(), H("button", {
						key: 1,
						type: "button",
						class: "rw-subline rw-subline--editable",
						title: t(T)("rechnungswerk", "Zahldatum ändern"),
						onClick: bt((t) => k(e), ["stop"])
					}, Y(S(e)), 9, Wu)) : S(e) ? (Z(), H("div", {
						key: 2,
						class: U(["rw-subline", { "rw-subline--overdue": e.paymentStatus === "overdue" }])
					}, Y(S(e)), 3)) : n("", !0)]),
					z("td", Gu, [e.paymentStatus ? (Z(), H("button", {
						key: 0,
						class: U(["rw-paybox", e.paymentStatus === "paid" ? "rw-paybox--paid" : "rw-paybox--open"]),
						"aria-label": ee(e),
						title: C(e),
						onClick: bt((t) => te(e), ["stop"])
					}, [(Z(), N(ye(e.paymentStatus === "paid" ? dl : al), { size: 22 }))], 10, Ku)) : n("", !0)]),
					z("td", qu, [z("div", Ju, [e.invoiceType === "cancellation" ? n("", !0) : (Z(), N(t(G), {
						key: 0,
						variant: "tertiary",
						"aria-label": t(T)("rechnungswerk", "Duplizieren"),
						title: t(T)("rechnungswerk", "Als Vorlage für neue Rechnung duplizieren"),
						onClick: bt((t) => P(e.id), ["stop"])
					}, {
						icon: _(() => [J(Cc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])), e.status === "draft" ? n("", !0) : (Z(), N(t(G), {
						key: 1,
						variant: "tertiary",
						"aria-label": t(T)("rechnungswerk", "PDF herunterladen"),
						title: t(T)("rechnungswerk", "PDF herunterladen"),
						onClick: bt((t) => he(e.id), ["stop"])
					}, {
						icon: _(() => [J(_c, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					]))])])
				], 10, Ru))), 128))])])])])) : n("", !0)
			]);
		};
	}
}), Zu = {
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
}, Qu = ["aria-hidden", "aria-label"], $u = [
	"fill",
	"width",
	"height"
], ed = { key: 0 };
function td(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon delete-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", ed, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" }, null, -1)], 8, $u))], 16, Qu);
}
var nd = /*#__PURE__*/ Q(Zu, [["render", td]]), rd = {
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
}, id = ["aria-hidden", "aria-label"], ad = [
	"fill",
	"width",
	"height"
], od = { key: 0 };
function sd(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon send-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", od, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M2,21L23,12L2,3V10L17,12L2,14V21Z" }, null, -1)], 8, ad))], 16, id);
}
var cd = /*#__PURE__*/ Q(rd, [["render", sd]]), ld = {
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
}, ud = ["aria-hidden", "aria-label"], dd = [
	"fill",
	"width",
	"height"
], fd = { key: 0 };
function pd(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon eye-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", fd, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" }, null, -1)], 8, dd))], 16, ud);
}
var md = /*#__PURE__*/ Q(ld, [["render", pd]]), hd = {
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
}, gd = ["aria-hidden", "aria-label"], _d = [
	"fill",
	"width",
	"height"
], vd = { key: 0 };
function yd(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-move-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", vd, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 20.41 4.12 20.8 4.34 21.12C4.41 21.23 4.5 21.33 4.59 21.41C4.95 21.78 5.45 22 6 22H13.53C13 21.42 12.61 20.75 12.35 20H6V4H13V9H18V12C18.7 12 19.37 12.12 20 12.34V8L14 2M18 23L23 18.5L20 15.8L18 14V17H14V20H18V23Z" }, null, -1)], 8, _d))], 16, gd);
}
var bd = /*#__PURE__*/ Q(hd, [["render", yd]]), xd = {
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
}, Sd = ["aria-hidden", "aria-label"], Cd = [
	"fill",
	"width",
	"height"
], wd = { key: 0 };
function Td(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-edit-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", wd, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" }, null, -1)], 8, Cd))], 16, Sd);
}
var Ed = /*#__PURE__*/ Q(xd, [["render", Td]]), Dd = (e) => vs(`/contacts/search?q=${encodeURIComponent(e)}`), Od = () => vs("/me"), kd = { class: "contact-picker" }, Ad = ["value", "placeholder"], jd = {
	key: 0,
	class: "contact-picker__list"
}, Md = ["onMousedown"], Nd = {
	key: 0,
	class: "muted"
}, Pd = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "ContactPicker",
	props: { modelValue: {} },
	emits: ["update:modelValue", "select"],
	setup(e, { emit: r }) {
		let i = r, a = y([]), o = y(!1), s = null;
		function c(e) {
			i("update:modelValue", e), s && clearTimeout(s), e.trim().length < 2 ? (a.value = [], o.value = !1) : s = setTimeout(async () => {
				try {
					a.value = await Dd(e.trim()), o.value = a.value.length > 0;
				} catch {
					a.value = [], o.value = !1;
				}
			}, 300);
		}
		function l(e) {
			i("update:modelValue", e.name), i("select", e), o.value = !1, a.value = [];
		}
		function u() {
			setTimeout(() => {
				o.value = !1;
			}, 150);
		}
		return $e(() => {
			s && clearTimeout(s);
		}), (r, i) => (Z(), H("div", kd, [z("input", {
			value: e.modelValue,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: t(T)("rechnungswerk", "Name eingeben oder Kontakt wählen\xA0…"),
			onInput: i[0] ||= (e) => c(e.target.value),
			onFocus: i[1] ||= (e) => o.value = a.value.length > 0,
			onBlur: u
		}, null, 40, Ad), o.value && a.value.length > 0 ? (Z(), H("ul", jd, [(Z(!0), H(E, null, X(a.value, (e, t) => (Z(), H("li", {
			key: t,
			class: "contact-picker__item",
			onMousedown: bt((t) => l(e), ["prevent"])
		}, [z("strong", null, Y(e.name), 1), e.email ? (Z(), H("span", Nd, Y(e.email), 1)) : n("", !0)], 40, Md))), 128))])) : n("", !0)]));
	}
}), [["__scopeId", "data-v-090ca623"]]), Fd = null, Id = () => (Fd === null && (Fd = vs("/countries").catch((e) => {
	throw Fd = null, e;
})), Fd), Ld = ["disabled", "title"], Rd = ["value"], zd = ["value"], Bd = /* @__PURE__ */ W({
	__name: "CountrySelect",
	props: /*@__PURE__*/ Ot({
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
		let t = at(e, "modelValue"), r = y([]), i = L(() => {
			let e = r.value.find((e) => e.code === t.value);
			return e ? `${e.label} (${e.code})` : t.value ?? "";
		}), a = L(() => {
			let e = t.value ?? "";
			return e === "" || r.value.length === 0 ? e : r.value.some((t) => t.code === e) ? "" : e;
		});
		return Pe(async () => {
			try {
				r.value = await Id();
			} catch {
				r.value = [];
			}
		}), (o, s) => w((Z(), H("select", {
			"onUpdate:modelValue": s[0] ||= (e) => t.value = e,
			class: U(e.selectClass),
			disabled: e.disabled,
			title: i.value
		}, [a.value === "" ? n("", !0) : (Z(), H("option", {
			key: 0,
			value: a.value
		}, Y(a.value), 9, Rd)), (Z(!0), H(E, null, X(r.value, (e) => (Z(), H("option", {
			key: e.code,
			value: e.code
		}, Y(e.label) + " (" + Y(e.code) + ")", 9, zd))), 128))], 10, Ld)), [[Ce, t.value]]);
	}
}), Vd = () => vs("/customers"), Hd = (e) => ys("/customers", { data: e }), Ud = (e, t) => bs(`/customers/${e}`, { data: t }), Wd = (e) => Ss(`/customers/${e}`), Gd = yn("customer", () => {
	let e = y([]), t = y(!1);
	function n() {
		e.value.sort((e, t) => e.name.localeCompare(t.name));
	}
	async function r() {
		t.value = !0;
		try {
			e.value = await Vd();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		let r = await Hd(t);
		return e.value.push(r), n(), r;
	}
	async function a(t, r) {
		let i = await Ud(t, r), a = e.value.findIndex((e) => e.id === t);
		return a >= 0 && (e.value[a] = i), n(), i;
	}
	async function o(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Wd(t);
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
}), Kd = { class: "customer-picker" }, qd = ["value", "placeholder"], Jd = {
	key: 0,
	class: "customer-picker__list"
}, Yd = ["onMousedown"], Xd = { class: "muted" }, Zd = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "CustomerPicker",
	emits: ["select"],
	setup(e, { emit: r }) {
		let i = r, a = Gd(), o = y(""), s = y([]), c = y(!1);
		Pe(() => {
			a.customers.length === 0 && a.fetchAll().catch((e) => console.error("[rechnungswerk] customer picker:", e));
		});
		function l(e) {
			o.value = e;
			let t = e.trim().toLowerCase();
			t === "" ? (s.value = [], c.value = !1) : (s.value = a.customers.filter((e) => `${e.name} ${e.customerNumber} ${e.city ?? ""} ${e.vatId ?? ""}`.toLowerCase().includes(t)).slice(0, 20), c.value = s.value.length > 0);
		}
		function u(e) {
			o.value = "", s.value = [], c.value = !1, i("select", e);
		}
		function d() {
			setTimeout(() => {
				c.value = !1;
			}, 150);
		}
		return (e, r) => (Z(), H("div", Kd, [z("input", {
			value: o.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: t(T)("rechnungswerk", "Kunde suchen oder anlegen\xA0…"),
			onInput: r[0] ||= (e) => l(e.target.value),
			onFocus: r[1] ||= (e) => c.value = s.value.length > 0,
			onBlur: d
		}, null, 40, qd), c.value && s.value.length > 0 ? (Z(), H("ul", Jd, [(Z(!0), H(E, null, X(s.value, (e) => (Z(), H("li", {
			key: e.id,
			class: "customer-picker__item",
			onMousedown: bt((t) => u(e), ["prevent"])
		}, [z("strong", null, Y(e.name), 1), z("span", Xd, Y([
			e.customerNumber,
			[e.postalCode, e.city].filter(Boolean).join(" "),
			e.vatId
		].filter(Boolean).join(" · ")), 1)], 40, Yd))), 128))])) : n("", !0)]));
	}
}), [["__scopeId", "data-v-07c58316"]]), Qd = { class: "product-picker" }, $d = ["value", "placeholder"], ef = {
	key: 0,
	class: "product-picker__panel"
}, tf = { class: "product-picker__head" }, nf = { class: "product-picker__list" }, rf = ["onMousedown"], af = { class: "muted" }, of = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "ProductPicker",
	props: { products: {} },
	emits: ["select"],
	setup(e, { emit: r }) {
		let i = e, a = r, o = y(""), s = y([]), c = y(!1), l = null, u = L(() => o.value.trim() === "" ? T("rechnungswerk", "Alle Produkte ({gesamt})", { gesamt: i.products.length }) : T("rechnungswerk", "{treffer} Treffer", { treffer: s.value.length }));
		function d(e) {
			return [`${lu(e.defaultPriceE4)} €`, e.defaultUnitLabel || T("rechnungswerk", Yl[e.defaultUnitCode])].filter(Boolean).join(" · ");
		}
		function f(e) {
			let t = e.trim().toLowerCase();
			return t === "" ? i.products : i.products.filter((e) => `${e.name} ${e.description ?? ""}`.toLowerCase().includes(t));
		}
		function p(e) {
			o.value = e, s.value = f(e), c.value = s.value.length > 0;
		}
		function m() {
			l !== null && (clearTimeout(l), l = null), s.value = f(o.value), c.value = s.value.length > 0;
		}
		function h(e) {
			o.value = "", s.value = [], c.value = !1, a("select", e);
		}
		function g() {
			l = window.setTimeout(() => {
				c.value = !1, l = null;
			}, 150);
		}
		return (e, r) => (Z(), H("div", Qd, [z("input", {
			value: o.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: t(T)("rechnungswerk", "Produkt wählen oder suchen\xA0…"),
			onInput: r[0] ||= (e) => p(e.target.value),
			onFocus: m,
			onClick: m,
			onBlur: g
		}, null, 40, $d), c.value && s.value.length > 0 ? (Z(), H("div", ef, [z("div", tf, Y(u.value), 1), z("ul", nf, [(Z(!0), H(E, null, X(s.value, (e) => (Z(), H("li", {
			key: e.id,
			class: "product-picker__item",
			onMousedown: bt((t) => h(e), ["prevent"])
		}, [z("strong", null, Y(e.name), 1), z("span", af, Y(d(e)), 1)], 40, rf))), 128))])])) : n("", !0)]));
	}
}), [["__scopeId", "data-v-d7aedaf7"]]);
// src/types/editor.ts
function sf(e = 1900) {
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
function cf(e, t) {
	return {
		productId: e.id,
		name: e.name,
		description: e.description ?? "",
		quantity: "1",
		unitCode: e.defaultUnitCode,
		unitLabel: e.defaultUnitLabel ?? "",
		priceInput: lu(e.defaultPriceE4),
		taxRateBp: t ? 0 : e.defaultTaxRateBp
	};
}
function lf(e) {
	return {
		productId: e.productId,
		name: e.name,
		description: e.description ?? "",
		quantity: cu(e.quantity),
		unitCode: e.unitCode,
		unitLabel: e.unitLabel ?? "",
		priceInput: lu(e.unitPriceE4),
		taxRateBp: e.taxRateBp
	};
}
// src/utils/invoiceCalc.ts
function uf(e, t) {
	let n = au(e);
	if (n === null) return 0;
	let r = Math.round(Number(n) * 1e3);
	return Math.round(r * t / 1e5);
}
function df(e, t = !1) {
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
// src/components/InvoiceItemsTable.vue?vue&type=script&setup=true&lang.ts
var ff = { class: "rw-table-wrap" }, pf = { class: "rw-table rw-table--positions" }, mf = {
	key: 0,
	class: "rw-col-actions"
}, hf = { class: "num" }, gf = { class: "num" }, _f = { class: "num" }, vf = { class: "rw-sum" }, yf = { key: 0 }, bf = { class: "rw-pos-main" }, xf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Sf = { class: "num" }, Cf = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], wf = ["onUpdate:modelValue", "disabled"], Tf = ["value"], Ef = { class: "num" }, Df = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], Of = { class: "num" }, kf = ["onUpdate:modelValue", "disabled"], Af = ["value"], jf = { class: "rw-sum" }, Mf = {
	key: 0,
	class: "num"
}, Nf = {
	key: 0,
	class: "rw-pos-desc"
}, Pf = ["colspan"], Ff = { class: "rw-sub-row" }, If = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder",
	"title"
], Lf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Rf = { key: 0 }, zf = ["colspan"], Bf = {
	key: 0,
	class: "rw-toolbar"
}, Vf = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "InvoiceItemsTable",
	props: /*@__PURE__*/ Ot({
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
		let r = at(e, "items"), i = e, a = (e) => uf(e.quantity, uu(e.priceInput));
		function o(e) {
			let t = au(e.quantity);
			t !== null && (e.quantity = su(t));
		}
		function s(e) {
			ou(e.priceInput) !== null && (e.priceInput = lu(uu(e.priceInput)));
		}
		A(() => i.smallBusiness, (e) => {
			if (e) for (let e of r.value) e.taxRateBp = 0;
		}, { immediate: !0 });
		let c = ot();
		function l() {
			c.push({ name: "products" });
		}
		function u(e) {
			return e.name.trim() === "" && e.description.trim() === "";
		}
		function d() {
			let e = r.value.length - 1;
			return e >= 0 && u(r.value[e]) ? e : -1;
		}
		function f() {
			d() === -1 && r.value.push(sf(i.smallBusiness ? 0 : i.defaultTaxRateBp ?? 1900));
		}
		function p(e) {
			let t = cf(e, i.smallBusiness ?? !1), n = d();
			n === -1 ? r.value.push(t) : r.value.splice(n, 1, t);
		}
		function m(e) {
			r.value.splice(e, 1);
		}
		return (i, c) => (Z(), H("div", null, [z("div", ff, [z("table", pf, [
			z("colgroup", null, [
				c[0] ||= z("col", null, null, -1),
				c[1] ||= z("col", { class: "rw-col-qty" }, null, -1),
				c[2] ||= z("col", { class: "rw-col-unit" }, null, -1),
				c[3] ||= z("col", { class: "rw-col-price" }, null, -1),
				c[4] ||= z("col", { class: "rw-col-tax" }, null, -1),
				c[5] ||= z("col", { class: "rw-col-sum" }, null, -1),
				e.readonly ? n("", !0) : (Z(), H("col", mf))
			]),
			z("thead", null, [z("tr", null, [
				z("th", null, Y(t(T)("rechnungswerk", "Bezeichnung")), 1),
				z("th", hf, Y(t(T)("rechnungswerk", "Menge")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Einheit")), 1),
				z("th", gf, Y(t(T)("rechnungswerk", "Einzelpreis (€)")), 1),
				z("th", _f, Y(t(T)("rechnungswerk", "USt")), 1),
				z("th", vf, Y(t(T)("rechnungswerk", "Summe netto")), 1),
				e.readonly ? n("", !0) : (Z(), H("th", yf))
			])]),
			z("tbody", null, [(Z(!0), H(E, null, X(r.value, (r, i) => (Z(), H(E, { key: i }, [z("tr", bf, [
				z("td", null, [w(z("input", {
					"onUpdate:modelValue": (e) => r.name = e,
					class: "rw-input",
					type: "text",
					readonly: e.readonly,
					placeholder: t(T)("rechnungswerk", "Leistung")
				}, null, 8, xf), [[I, r.name]])]),
				z("td", Sf, [w(z("input", {
					"onUpdate:modelValue": (e) => r.quantity = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => o(r)
				}, null, 40, Cf), [[I, r.quantity]])]),
				z("td", null, [w(z("select", {
					"onUpdate:modelValue": (e) => r.unitCode = e,
					class: "rw-input",
					disabled: e.readonly
				}, [(Z(!0), H(E, null, X(t(Jl), (e) => (Z(), H("option", {
					key: e,
					value: e
				}, Y(t(T)("rechnungswerk", t(Yl)[e])), 9, Tf))), 128))], 8, wf), [[Ce, r.unitCode]])]),
				z("td", Ef, [w(z("input", {
					"onUpdate:modelValue": (e) => r.priceInput = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => s(r)
				}, null, 40, Df), [[I, r.priceInput]])]),
				z("td", Of, [w(z("select", {
					"onUpdate:modelValue": (e) => r.taxRateBp = e,
					class: "rw-input",
					disabled: e.readonly || e.smallBusiness
				}, [(Z(!0), H(E, null, X(t(Xl), (e) => (Z(), H("option", {
					key: e,
					value: e
				}, Y(t(pu)(e)), 9, Af))), 128))], 8, kf), [[
					Ce,
					r.taxRateBp,
					void 0,
					{ number: !0 }
				]])]),
				z("td", jf, Y(t(fu)(a(r))), 1),
				e.readonly ? n("", !0) : (Z(), H("td", Mf, [J(t(G), {
					variant: "tertiary",
					"aria-label": t(T)("rechnungswerk", "Position entfernen"),
					onClick: (e) => m(i)
				}, {
					icon: _(() => [J(nd, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "onClick"])]))
			]), !e.readonly || r.description || r.unitLabel ? (Z(), H("tr", Nf, [z("td", { colspan: e.readonly ? 6 : 7 }, [z("div", Ff, [!e.readonly || r.unitLabel ? w((Z(), H("input", {
				key: 0,
				"onUpdate:modelValue": (e) => r.unitLabel = e,
				class: "rw-input rw-input--sub rw-unit-label",
				type: "text",
				maxlength: "64",
				readonly: e.readonly,
				placeholder: t(T)("rechnungswerk", "eigene Einheit"),
				title: t(T)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.")
			}, null, 8, If)), [[I, r.unitLabel]]) : n("", !0), !e.readonly || r.description ? w((Z(), H("input", {
				key: 1,
				"onUpdate:modelValue": (e) => r.description = e,
				class: "rw-input rw-input--sub rw-desc",
				type: "text",
				readonly: e.readonly,
				placeholder: t(T)("rechnungswerk", "Beschreibung (optional)")
			}, null, 8, Lf)), [[I, r.description]]) : n("", !0)])], 8, Pf)])) : n("", !0)], 64))), 128)), r.value.length === 0 ? (Z(), H("tr", Rf, [z("td", {
				colspan: e.readonly ? 6 : 7,
				class: "rw-muted empty-row"
			}, Y(t(T)("rechnungswerk", "Noch keine Positionen.")), 9, zf)])) : n("", !0)])
		])]), e.readonly ? n("", !0) : (Z(), H("div", Bf, [J(t(G), { onClick: f }, {
			icon: _(() => [J(dc, { size: 20 })]),
			default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Position hinzufügen")), 1)]),
			_: 1
		}), e.products.length > 0 ? (Z(), N(of, {
			key: 0,
			products: e.products,
			onSelect: p
		}, null, 8, ["products"])) : (Z(), N(t(G), {
			key: 1,
			variant: "tertiary",
			onClick: l
		}, {
			icon: _(() => [J(no, { size: 20 })]),
			default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Noch keine Produkte angelegt")), 1)]),
			_: 1
		}))]))]));
	}
}), [["__scopeId", "data-v-44bb7912"]]), Hf = { class: "confirm-dialog" }, Uf = { class: "confirm-dialog__message" }, Wf = /*#__PURE__*/ Q(/* @__PURE__ */ W({
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
	setup(e, { emit: n }) {
		let r = n;
		function i(e) {
			e || r("close");
		}
		return (n, r) => (Z(), N(t(Qe), {
			open: e.open,
			name: e.name,
			"onUpdate:open": i
		}, {
			actions: _(() => [J(t(G), {
				variant: "secondary",
				onClick: r[0] ||= (e) => n.$emit("close")
			}, {
				default: _(() => [q(Y(e.cancelLabel || t(T)("rechnungswerk", "Abbrechen")), 1)]),
				_: 1
			}), J(t(G), {
				variant: e.destructive ? "error" : "primary",
				onClick: r[1] ||= (e) => n.$emit("confirm")
			}, {
				default: _(() => [q(Y(e.confirmLabel || t(T)("rechnungswerk", "Bestätigen")), 1)]),
				_: 1
			}, 8, ["variant"])]),
			default: _(() => [z("div", Hf, [z("p", Uf, Y(e.message), 1), F(n.$slots, "default", {}, void 0, !0)])]),
			_: 3
		}, 8, ["open", "name"]));
	}
}), [["__scopeId", "data-v-50c4164f"]]), Gf = {
	invoice: "Rechnung",
	quote: "Angebot",
	cancellation: "Stornorechnung"
}, Kf = {
	invoice: "Ihre Rechnung",
	quote: "Ihr Angebot",
	cancellation: "Ihre Stornorechnung"
};
function qf(e, t) {
	let n = (t ?? "").trim();
	return n === "" ? Kf[e] : `${Gf[e]} ${n}`;
}
function Jf(e) {
	return e ? "anbei erhalten Sie unser Angebot als PDF." : "anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).";
}
// src/components/SendInvoiceDialog.vue?vue&type=script&setup=true&lang.ts
var Yf = { class: "send-modal" }, Xf = { class: "send-modal__hint" }, Zf = { class: "field" }, Qf = { class: "field" }, $f = { class: "field" }, ep = { class: "actions" }, tp = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "SendInvoiceDialog",
	props: {
		open: { type: Boolean },
		invoice: {},
		defaultBody: {},
		saving: { type: Boolean },
		kind: {}
	},
	emits: ["close", "send"],
	setup(e, { emit: r }) {
		let i = e, a = L(() => i.kind === "quote"), o = L(() => a.value ? T("rechnungswerk", "Angebot an Kunde senden") : T("rechnungswerk", "Rechnung an Kunde senden")), s = L(() => a.value ? T("rechnungswerk", "Das Angebot wird als PDF angehängt.") : T("rechnungswerk", "Die E-Rechnung wird als ZUGFeRD-PDF angehängt.")), c = r, l = y(null), u = Oe({
			to: "",
			subject: "",
			body: ""
		}), d = L(() => /\S+@\S+\.\S+/.test(u.to.trim()) && u.subject.trim() !== "");
		A(() => i.open, (e) => {
			if (!e) return;
			let t = i.invoice;
			u.to = t?.recipientEmail ?? "", u.subject = qf(t?.invoiceType ?? (a.value ? "quote" : "invoice"), t?.number), u.body = i.defaultBody, qe(() => l.value?.focus());
		}, { immediate: !0 });
		function f() {
			d.value && c("send", {
				to: u.to.trim(),
				subject: u.subject.trim(),
				body: u.body
			});
		}
		return (r, i) => e.open ? (Z(), N(t(Ne), {
			key: 0,
			name: o.value,
			onKeydown: i[4] ||= O((e) => t(Ts)(e, () => r.$emit("close")), ["esc"]),
			onClose: i[5] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [z("div", Yf, [
				z("h2", null, Y(o.value), 1),
				z("p", Xf, Y(s.value), 1),
				z("label", Zf, [z("span", null, Y(t(T)("rechnungswerk", "Empfänger-E-Mail")) + " *", 1), w(z("input", {
					ref_key: "toInput",
					ref: l,
					"onUpdate:modelValue": i[0] ||= (e) => u.to = e,
					class: "input",
					type: "email"
				}, null, 512), [[I, u.to]])]),
				z("label", Qf, [z("span", null, Y(t(T)("rechnungswerk", "Betreff")) + " *", 1), w(z("input", {
					"onUpdate:modelValue": i[1] ||= (e) => u.subject = e,
					class: "input",
					type: "text"
				}, null, 512), [[I, u.subject]])]),
				z("label", $f, [z("span", null, Y(t(T)("rechnungswerk", "Nachricht")), 1), w(z("textarea", {
					"onUpdate:modelValue": i[2] ||= (e) => u.body = e,
					class: "input",
					rows: "6"
				}, null, 512), [[I, u.body]])]),
				z("div", ep, [J(t(G), { onClick: i[3] ||= (e) => r.$emit("close") }, {
					default: _(() => [q(Y(t(T)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(t(G), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					icon: _(() => [J(cd, { size: 20 })]),
					default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Senden")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-5cdf36e1"]]), np = (e) => vs(`/audit/documents/${e}`), rp = (e, t, n) => vs(`/audit?number=${encodeURIComponent(e)}&limit=${t}&offset=${n}`);
// src/utils/auditLabels.ts
function ip(e) {
	switch (e) {
		case "create": return T("rechnungswerk", "Angelegt");
		case "update": return T("rechnungswerk", "Geändert");
		case "delete": return T("rechnungswerk", "Gelöscht");
		case "commit": return T("rechnungswerk", "Festgeschrieben");
		case "send": return T("rechnungswerk", "Versendet");
		case "pay": return T("rechnungswerk", "Als bezahlt markiert");
		case "unpay": return T("rechnungswerk", "Als unbezahlt markiert");
		case "cancel": return T("rechnungswerk", "Storniert");
		case "cancel_document": return T("rechnungswerk", "Als Storno angelegt");
		case "duplicate": return T("rechnungswerk", "Als Kopie angelegt");
		case "revise": return T("rechnungswerk", "Als Überarbeitung angelegt");
		case "accept": return T("rechnungswerk", "Als angenommen markiert");
		case "reject": return T("rechnungswerk", "Als abgelehnt markiert");
		case "convert": return T("rechnungswerk", "In Rechnung übernommen");
		case "convert_document": return T("rechnungswerk", "Aus Angebot angelegt");
		case "supersede": return T("rechnungswerk", "Durch Überarbeitung ersetzt");
		case "datev_send": return T("rechnungswerk", "An DATEV gesendet");
		case "datev_send_failed": return T("rechnungswerk", "DATEV-Versand fehlgeschlagen");
		case "datev_confirm": return T("rechnungswerk", "Von DATEV bestätigt");
		case "datev_unknown": return T("rechnungswerk", "DATEV-Antwort prüfen");
		default: return e;
	}
}
function ap(e) {
	let t = e.userDisplayName ?? T("rechnungswerk", "System");
	if (e.apiKeyId === null) return t;
	let n = e.apiKeyName ?? `#${e.apiKeyId}`;
	return T("rechnungswerk", "{person} über API-Schlüssel „{key}“", {
		person: t,
		key: n
	}, void 0, { escape: !1 });
}
function op(e) {
	return e.documentNumber ? e.documentNumber : e.documentType === "quote" ? T("rechnungswerk", "Angebotsentwurf {id}", { id: e.documentId }) : T("rechnungswerk", "Rechnungsentwurf {id}", { id: e.documentId });
}
function sp(e) {
	return (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString(fe(), {
		dateStyle: "short",
		timeStyle: "short"
	});
}
// src/components/AuditTrail.vue?vue&type=script&setup=true&lang.ts
var cp = { class: "rw-audit-trail" }, lp = {
	key: 1,
	class: "rw-hint"
}, up = {
	key: 2,
	class: "rw-audit-trail__list"
}, dp = { class: "rw-audit-trail__time" }, fp = { class: "rw-audit-trail__action" }, pp = { class: "rw-muted" }, mp = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "AuditTrail",
	props: {
		documentId: {},
		refreshKey: {}
	},
	setup(e) {
		let n = e, r = y([]), i = y(!1), a = y(""), o = 0;
		async function s() {
			let e = ++o;
			a.value = "";
			try {
				let t = await np(n.documentId);
				e === o && (r.value = t);
			} catch {
				e === o && (a.value = T("rechnungswerk", "Der Verlauf konnte nicht geladen werden."));
			} finally {
				e === o && (i.value = !0);
			}
		}
		return A(() => [n.documentId, n.refreshKey], s, { immediate: !0 }), (e, n) => (Z(), H("div", cp, [a.value ? (Z(), N(t($), {
			key: 0,
			type: "error",
			text: a.value
		}, null, 8, ["text"])) : i.value && r.value.length === 0 ? (Z(), H("p", lp, Y(t(T)("rechnungswerk", "Noch keine Einträge. Vorgänge vor Einführung des Protokolls sind nicht erfasst.")), 1)) : (Z(), H("ul", up, [(Z(!0), H(E, null, X(r.value, (e) => (Z(), H("li", {
			key: e.id,
			class: "rw-audit-trail__item"
		}, [
			z("span", dp, Y(t(sp)(e.createdAt)), 1),
			z("span", fp, Y(t(ip)(e.action)), 1),
			z("span", pp, Y(t(ap)(e)), 1)
		]))), 128))]))]));
	}
}), [["__scopeId", "data-v-b4406965"]]), hp = () => vs("/quotes"), gp = (e) => vs(`/quotes/${e}`), _p = (e) => ys("/quotes", { data: e }), vp = (e, t) => bs(`/quotes/${e}`, { data: t }), yp = (e) => Ss(`/quotes/${e}`), bp = (e) => ys(`/quotes/${e}/commit`, {}), xp = (e) => ys(`/quotes/${e}/accept`, {}), Sp = (e) => ys(`/quotes/${e}/reject`, {}), Cp = (e) => ys(`/quotes/${e}/convert`, {}), wp = (e) => ys(`/quotes/${e}/revise`, {}), Tp = (e) => gs(`/quotes/${e}/pdf`), Ep = (e) => gs(`/quotes/${e}/preview`) + "?t=" + Date.now(), Dp = (e) => {
	let t = document.createElement("a");
	t.href = Tp(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Op = (e, t) => ys(`/quotes/${e}/send`, t), kp = yn("quote", () => {
	let e = y([]), t = y(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await hp();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => gp(e);
	async function i(e) {
		let t = await _p(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await vp(e, t);
		return await n(), r;
	}
	async function o(t) {
		await yp(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await bp(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await xp(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await Sp(e);
		return await n(), t;
	}
	async function u(e) {
		let t = await Cp(e);
		return await n(), t;
	}
	async function d(e) {
		let t = await wp(e);
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
}), Ap = () => vs("/products"), jp = (e) => ys("/products", { data: e }), Mp = (e, t) => bs(`/products/${e}`, { data: t }), Np = (e) => Ss(`/products/${e}`), Pp = yn("product", () => {
	let e = y([]), t = y(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await Ap();
		} finally {
			t.value = !1;
		}
	}
	async function r(t) {
		let n = await jp(t);
		return e.value.push(n), e.value.sort((e, t) => e.name.localeCompare(t.name)), n;
	}
	async function i(t, n) {
		let r = await Mp(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), e.value.sort((e, t) => e.name.localeCompare(t.name)), r;
	}
	async function a(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Np(t);
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
}), Fp = () => vs("/text-snippets"), Ip = (e) => ys("/text-snippets", { data: e }), Lp = (e, t) => bs(`/text-snippets/${e}`, { data: t }), Rp = (e) => Ss(`/text-snippets/${e}`);
// src/stores/textSnippetStore.ts
function zp(e) {
	e.sort((e, t) => e.docType.localeCompare(t.docType) || e.slot.localeCompare(t.slot) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
}
var Bp = yn("textSnippet", () => {
	let e = y([]), t = y(!1), n = y(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Fp(), n.value = !0;
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
		let n = await Ip(t);
		return e.value.push(n), a(n), zp(e.value), n;
	}
	async function s(t, n) {
		let r = await Lp(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), a(r), zp(e.value), r;
	}
	async function c(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Rp(t);
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
}), Vp = () => vs("/me/contact"), Hp = (e) => xs("/me/contact", { data: e }), Up = { class: "rw-view rw-view--narrow" }, Wp = { class: "rw-editor-head" }, Gp = {
	key: 0,
	class: "rw-status-group"
}, Kp = { class: "rw-status-tag" }, qp = {
	key: 0,
	class: "rw-pill"
}, Jp = {
	key: 1,
	class: "rw-pill"
}, Yp = ["title"], Xp = { class: "rw-section" }, Zp = { class: "rw-form-row" }, Qp = { class: "rw-field invoice-no" }, $p = ["value"], em = { class: "rw-field" }, tm = ["readonly"], nm = { class: "rw-field" }, rm = ["readonly"], im = { class: "rw-hint" }, am = ["open"], om = { class: "rw-form-row" }, sm = { class: "rw-field" }, cm = ["readonly"], lm = { class: "rw-field" }, um = ["readonly"], dm = {
	key: 0,
	class: "rw-field"
}, fm = ["readonly", "placeholder"], pm = {
	key: 1,
	class: "rw-field",
	"aria-hidden": "true"
}, mm = { class: "rw-form-row" }, hm = { class: "rw-field" }, gm = ["readonly"], _m = { class: "rw-field" }, vm = ["readonly"], ym = { class: "rw-section" }, bm = {
	key: 0,
	class: "rw-form-row"
}, xm = { class: "rw-field" }, Sm = { class: "rw-hint" }, Cm = { class: "rw-form-row" }, wm = { class: "rw-field" }, Tm = ["value"], Em = { class: "rw-field" }, Dm = ["readonly"], Om = { class: "rw-form-row" }, km = { class: "rw-field" }, Am = ["readonly"], jm = { class: "rw-hint" }, Mm = { class: "rw-form-row" }, Nm = { class: "rw-field" }, Pm = ["readonly"], Fm = { class: "rw-field rw-field--narrow" }, Im = ["readonly"], Lm = { class: "rw-field" }, Rm = ["readonly"], zm = { class: "rw-field rw-field--country" }, Bm = { class: "rw-form-row" }, Vm = { class: "rw-field" }, Hm = ["readonly"], Um = { class: "rw-field" }, Wm = ["readonly"], Gm = { class: "rw-field" }, Km = ["readonly"], qm = { class: "rw-section" }, Jm = { class: "rw-form-row" }, Ym = { class: "rw-field" }, Xm = ["readonly"], Zm = { class: "rw-field" }, Qm = ["readonly"], $m = { class: "rw-field" }, eh = ["readonly"], th = { class: "rw-hint" }, nh = { class: "rw-section" }, rh = { class: "rw-section-head" }, ih = { class: "rw-field" }, ah = ["readonly", "placeholder"], oh = { class: "rw-section" }, sh = { class: "rw-section" }, ch = { class: "rw-form-row" }, lh = { class: "rw-field" }, uh = ["disabled"], dh = { value: "" }, fh = { value: "reverse_charge" }, ph = { value: "intra_community" }, mh = { value: "export" }, hh = { class: "rw-totals" }, gh = { class: "rw-kpi-card" }, _h = { class: "rw-kpi-row" }, vh = { class: "rw-kpi-row rw-kpi-row--grand" }, yh = {
	key: 4,
	class: "rw-section"
}, bh = { class: "rw-form-row" }, xh = { class: "rw-field payterm-days" }, Sh = ["readonly"], Ch = { class: "rw-field" }, wh = ["value"], Th = { class: "rw-field" }, Eh = ["readonly", "placeholder"], Dh = {
	key: 5,
	class: "rw-section"
}, Oh = { class: "rw-form-row" }, kh = { class: "rw-field payterm-days" }, Ah = ["readonly"], jh = { class: "rw-field rw-checkbox-field" }, Mh = { class: "rw-checkbox-row" }, Nh = ["disabled"], Ph = { class: "rw-hint" }, Fh = { class: "rw-section" }, Ih = { class: "rw-section-head" }, Lh = { class: "rw-field" }, Rh = ["readonly", "placeholder"], zh = {
	key: 6,
	class: "rw-section"
}, Bh = [
	"onUpdate:modelValue",
	"readonly",
	"aria-label"
], Vh = { class: "rw-hint" }, Hh = {
	key: 7,
	class: "rw-section"
}, Uh = { class: "rw-action-bar" }, Wh = ["src", "title"], Gh = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "InvoiceEditorView",
	props: { id: {} },
	setup(e) {
		let r = e, i = le(), a = ot(), o = Rl(), s = kp(), c = Pp(), l = ql(), u = Bp(), d = L(() => typeof i.name == "string" && i.name.startsWith("quote")), f = L(() => d.value ? s : o), p = L(() => d.value ? "quote" : "invoice"), h = L(() => u.forSlot(p.value, "opening")), g = L(() => u.forSlot(p.value, "closing"));
		function v(e) {
			M.greeting = e.content ?? "";
		}
		function b(e) {
			M.extraText = e.content ?? "";
		}
		let x = L(() => d.value ? "quotes" : "invoices"), S = L(() => d.value ? "quote-detail" : "invoice-detail"), C = y(null), te = y(0);
		A(C, () => {
			te.value++;
		});
		let ne = y([sf()]), D = y([]), re = y(""), O = y(""), k = y(!1), ie = y(!1), ae = y(!1), oe = y(!1), se = y(""), j = y(null), ce = y(!1), de = null, fe = () => ({
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
		}), M = Oe(fe()), pe = [
			"reverse_charge",
			"intra_community",
			"export"
		], me = L(() => (l.settings?.smallBusiness ?? !1) || pe.includes(M.specialTaxCase)), he = L(() => {
			let e = Number.parseInt(String(M.paymentTermDays), 10);
			if (Number.isNaN(e)) return "";
			let t = (e) => /* @__PURE__ */ new Date(`${e}T12:00:00`);
			if (C.value?.dueDate) return t(C.value.dueDate).toLocaleDateString();
			let n = C.value?.issueDate ? t(C.value.issueDate) : /* @__PURE__ */ new Date();
			return n.setDate(n.getDate() + e), n.toLocaleDateString();
		}), P = L(() => C.value !== null && C.value.status !== "draft"), ge = {
			draft: kc,
			committed: Do,
			cancelled: Fc
		}, F = {
			pending: qc,
			confirmed: Vc,
			unknown: $c,
			failed: Fc
		}, _e = (e) => ge[e] ?? kc, ve = (e) => F[e] ?? $c, be = L(() => C.value ? d.value && C.value.quoteStatus ? T("rechnungswerk", nu[C.value.quoteStatus] ?? C.value.status) : T("rechnungswerk", eu[C.value.status]) : ""), xe = L(() => C.value ? T("rechnungswerk", tu[C.value.invoiceType]) : ""), Se = L(() => {
			let e = {
				pending: T("rechnungswerk", "DATEV: gesendet"),
				confirmed: T("rechnungswerk", "DATEV: bestätigt"),
				failed: T("rechnungswerk", "DATEV: abgelehnt"),
				unknown: T("rechnungswerk", "DATEV: Antwort prüfen")
			}, t = C.value?.datevStatus;
			return t ? e[t] ?? "" : "";
		}), we = L(() => C.value ? C.value.relatedNumber ? T("rechnungswerk", "{type} zu Rechnung {number}", {
			type: xe.value,
			number: C.value.relatedNumber
		}) : xe.value : ""), Te = L(() => {
			let e = l.settings;
			return !d.value && !!e && !e.vatId?.trim() && !e.registerNumber?.trim();
		}), Ee = L(() => {
			if (d.value) return T("rechnungswerk", "Das Angebot erhält seine endgültige Nummer und ist danach unveränderbar.");
			let e = T("rechnungswerk", "Die Rechnung erhält ihre endgültige Nummer und kann danach nur noch storniert werden."), t = l.settings;
			return t?.datevAutoSend && t.datevUploadMail ? e + " " + T("rechnungswerk", "Sie wird automatisch an DATEV übergeben.") : e;
		}), De = L(() => {
			let e = (C.value?.greeting ?? u.defaultContent(p.value, "opening")).trim(), t = (C.value?.extraText ?? u.defaultContent(p.value, "closing")).trim(), n = Jf(d.value);
			return [e === "" ? n : e, t].filter((e) => e !== "").join("\n\n");
		}), ke = L(() => C.value ? C.value.number ?? T("rechnungswerk", "Entwurf") : d.value ? T("rechnungswerk", "Neues Angebot") : T("rechnungswerk", "Neue Rechnung")), Ae = L(() => df(ne.value.map((e) => ({
			taxRateBp: e.taxRateBp,
			lineTotalCents: uf(e.quantity, uu(e.priceInput))
		})), me.value)), je = 0;
		Pe(async () => {
			let e = ++je;
			try {
				if (await Promise.all([
					c.fetchAll(),
					l.fetch(),
					u.ensureLoaded()
				]), e !== je) return;
				r.id ? await Ne(Number(r.id), e) : await R(e);
			} catch (e) {
				ft(e, T("rechnungswerk", "Laden fehlgeschlagen"));
			}
		}), A(() => [i.name, r.id], async ([, e]) => {
			let t = ++je;
			try {
				if (!e) Me(), await R(t);
				else {
					let n = C.value !== null && C.value.invoiceType === "quote" !== d.value;
					(C.value?.id !== Number(e) || n) && (Me(), await Ne(Number(e), t));
				}
			} catch (e) {
				ft(e, T("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function Me() {
			C.value = null, ne.value = [sf()], D.value = [], re.value = "", O.value = "", ae.value = !1, oe.value = !1, se.value = "", j.value = null, ce.value = !1, Object.assign(M, fe()), de = null;
		}
		async function R(e = je) {
			let t = l.settings;
			M.greeting = u.defaultContent(p.value, "opening"), M.extraText = u.defaultContent(p.value, "closing"), M.paymentTermDays = d.value ? "" : t?.defaultPaymentTermDays ?? "";
			let n = {
				person: "",
				phone: "",
				email: ""
			};
			try {
				n = await Vp();
			} catch {}
			e === je && (M.sellerContactPerson = n.person || (t?.contactPerson ?? ""), M.sellerContactPhone = n.phone || (t?.contactPhone ?? ""), M.sellerContactEmail = n.email || (t?.contactEmail ?? ""), Be());
		}
		async function Ne(e, t = je) {
			let n = await f.value.get(e);
			t === je && (C.value = n, M.customerId = n.customerId ?? null, M.recipientName = n.recipientName ?? "", M.recipientEmail = n.recipientEmail ?? "", M.recipientAddressAddition = n.recipientAddressAddition ?? "", M.recipientAddress = n.recipientAddress ?? "", M.recipientPostalCode = n.recipientPostalCode ?? "", M.recipientCity = n.recipientCity ?? "", M.recipientCountry = n.recipientCountry ?? "DE", M.recipientVatId = n.recipientVatId ?? "", M.recipientContactId = n.recipientContactId ?? "", M.recipientContactPerson = n.recipientContactPerson ?? "", M.recipientPhone = n.recipientPhone ?? "", M.sellerContactPerson = n.sellerContactPerson ?? "", M.sellerContactPhone = n.sellerContactPhone ?? "", M.sellerContactEmail = n.sellerContactEmail ?? "", M.performancePeriodStart = n.performancePeriodStart ?? n.performanceDate ?? "", M.performancePeriodEnd = n.performancePeriodEnd ?? "", M.referenceNumber = n.referenceNumber ?? "", M.orderNumber = n.orderNumber ?? "", M.buyerReference = n.buyerReference ?? "", M.contractNumber = n.contractNumber ?? "", M.projectReference = n.projectReference ?? "", ce.value = [
				M.referenceNumber,
				M.orderNumber,
				d.value ? "" : M.buyerReference,
				M.contractNumber,
				M.projectReference
			].some((e) => e.trim() !== ""), D.value = [...n.notes ?? []], M.specialTaxCase = n.specialTaxCase ?? "", M.greeting = n.greeting ?? "", M.extraText = n.extraText ?? "", M.paymentTermDays = n.paymentTermDays ?? "", M.discountTerms = n.discountTerms ?? "", M.validUntil = n.validUntil ?? "", M.offerFreeform = n.offerFreeform ?? !1, ne.value = n.items.length > 0 ? n.items.map(lf) : [sf()], Be());
		}
		function Fe() {
			D.value.push("");
		}
		function Ie(e) {
			D.value.splice(e, 1);
		}
		function Le(e) {
			M.customerId = e.id, M.recipientName = e.name, M.recipientContactId = "", M.recipientEmail = e.email ?? "", M.recipientAddressAddition = e.addressAddition ?? "", M.recipientAddress = e.address ?? "", M.recipientPostalCode = e.postalCode ?? "", M.recipientCity = e.city ?? "", M.recipientCountry = e.country ?? "DE", M.recipientVatId = e.vatId ?? "", M.recipientContactPerson = e.contactPerson ?? "", M.recipientPhone = e.phone ?? "", e.defaultPaymentTermDays != null && (M.paymentTermDays = e.defaultPaymentTermDays);
		}
		function Re(e) {
			M.customerId = null, M.recipientName = e.name, M.recipientEmail = e.email, e.phone && (M.recipientPhone = e.phone), M.recipientAddressAddition = "", M.recipientAddress = e.address, M.recipientPostalCode = e.postalCode, M.recipientCity = e.city, e.country && (M.recipientCountry = e.country);
		}
		function B() {
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
				notes: D.value.map((e) => e.trim()).filter((e) => e !== ""),
				items: ne.value.filter((e) => e.name.trim() !== "").map((e) => ({
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
		let ze = null;
		function Be(e = JSON.stringify(B())) {
			de = e;
		}
		function Ve() {
			return !P.value && de !== null && JSON.stringify(B()) !== de;
		}
		function He(e) {
			return !Ve() || (ze = e.fullPath, j.value = "leave", !1);
		}
		function Ue(e) {
			j.value = null;
			let t = ze;
			ze = null, e && t !== null && (de = null, a.push(t));
		}
		vr(He), yr(He);
		function V(e) {
			Ve() && e.preventDefault();
		}
		Pe(() => window.addEventListener("beforeunload", V)), At(() => window.removeEventListener("beforeunload", V));
		async function We() {
			re.value = "", k.value = !0;
			try {
				let e = B(), t = !C.value, n = C.value ? await f.value.update(C.value.id, e) : await f.value.create(e);
				return C.value = n, Be(JSON.stringify(e)), t && a.replace({
					name: S.value,
					params: { id: String(n.id) }
				}), n;
			} catch (e) {
				return ft(e, T("rechnungswerk", "Speichern fehlgeschlagen")), null;
			} finally {
				k.value = !1;
			}
		}
		async function Ge() {
			let e = await We();
			e && (se.value = d.value ? Ep(e.id) : Fl(e.id), oe.value = !0);
		}
		function Ke(e) {
			e || (oe.value = !1, se.value = "");
		}
		function qe() {
			j.value = "finalize";
		}
		function Je() {
			j.value = "delete";
		}
		function Ye() {
			j.value = "cancel";
		}
		function Xe() {
			j.value = "convert";
		}
		function Ze() {
			j.value = "revise";
		}
		let $e = L(() => d.value && C.value?.status === "committed" && !["converted", "superseded"].includes(C.value?.quoteStatus ?? "")), et = L(() => d.value && C.value?.status === "committed" && [
			"open",
			"expired",
			"accepted"
		].includes(C.value?.quoteStatus ?? "")), W = L(() => d.value && C.value?.status === "committed" && ["open", "expired"].includes(C.value?.quoteStatus ?? ""));
		function tt() {
			C.value && (d.value ? Dp(C.value.id) : Il(C.value.id));
		}
		async function nt() {
			j.value = null;
			let e = await We();
			if (e) {
				k.value = !0;
				try {
					let t = await f.value.commit(e.id);
					if (C.value = t, O.value = "", d.value) O.value = T("rechnungswerk", "Angebot festgeschrieben.");
					else {
						let e = t.datevMailSent;
						e === !0 ? O.value = T("rechnungswerk", "Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.") : e === null && (re.value = T("rechnungswerk", "Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
					}
				} catch (e) {
					ft(e, T("rechnungswerk", "Festschreiben fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		async function rt() {
			if (C.value) {
				k.value = !0, re.value = "";
				try {
					C.value = await s.accept(C.value.id), O.value = T("rechnungswerk", "Angebot als angenommen markiert.");
				} catch (e) {
					ft(e, T("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		async function it() {
			if (C.value) {
				k.value = !0, re.value = "";
				try {
					C.value = await s.reject(C.value.id), O.value = T("rechnungswerk", "Angebot als abgelehnt markiert.");
				} catch (e) {
					ft(e, T("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		async function at() {
			if (j.value = null, C.value) {
				k.value = !0, re.value = "";
				try {
					let e = await s.convert(C.value.id);
					a.push({
						name: "invoice-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					ft(e, T("rechnungswerk", "Übernahme fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		async function st() {
			if (j.value = null, C.value) {
				k.value = !0, re.value = "";
				try {
					let e = await s.revise(C.value.id);
					a.push({
						name: "quote-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					ft(e, T("rechnungswerk", "Revidieren fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		async function ct(e) {
			if (C.value) {
				ie.value = !0, re.value = "";
				try {
					d.value ? (await Op(C.value.id, e), te.value++, ae.value = !1, O.value = T("rechnungswerk", "Angebot an {to} gesendet.", { to: e.to })) : (await Ll(C.value.id, e), te.value++, ae.value = !1, O.value = T("rechnungswerk", "Rechnung an {to} gesendet.", { to: e.to }));
				} catch (e) {
					ft(e, T("rechnungswerk", "Versand fehlgeschlagen"));
				} finally {
					ie.value = !1;
				}
			}
		}
		async function ut() {
			if (j.value = null, !C.value) dt();
			else {
				k.value = !0;
				try {
					await f.value.remove(C.value.id), de = null, dt();
				} catch (e) {
					ft(e, T("rechnungswerk", "Löschen fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		async function K() {
			if (j.value = null, C.value) {
				k.value = !0;
				try {
					let e = await o.cancel(C.value.id), t = e.datevMailSent;
					await Ne(e.id), O.value = "", t === !0 ? O.value = T("rechnungswerk", "Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.") : t === null && (re.value = T("rechnungswerk", "Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
				} catch (e) {
					ft(e, T("rechnungswerk", "Stornieren fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		function dt() {
			a.push({ name: x.value });
		}
		function ft(e, t) {
			re.value = e.message ?? t, console.error("[rechnungswerk] editor:", e);
		}
		return (e, r) => {
			let i = Nt("tooltip");
			return Z(), H("div", Up, [
				z("div", Wp, [J(t(ht), null, {
					default: _(() => [J(t(lt), {
						name: d.value ? t(T)("rechnungswerk", "Angebote") : t(T)("rechnungswerk", "Rechnungen"),
						to: { name: x.value }
					}, null, 8, ["name", "to"]), J(t(lt), { name: ke.value }, null, 8, ["name"])]),
					_: 1
				}), C.value ? (Z(), H("span", Gp, [
					z("span", Kp, [(Z(), N(ye(_e(C.value.status)), {
						size: 18,
						class: U(["rw-sicon", `rw-sicon--${C.value.status}`])
					}, null, 8, ["class"])), q(" " + Y(be.value), 1)]),
					!d.value && C.value.invoiceType !== "invoice" ? w((Z(), H("span", qp, [q(Y(xe.value), 1)])), [[i, we.value]]) : n("", !0),
					d.value && C.value.relatedQuoteNumber ? (Z(), H("span", Jp, Y(t(T)("rechnungswerk", "Revision von {number}", { number: C.value.relatedQuoteNumber })), 1)) : n("", !0),
					C.value.datevStatus && Se.value ? (Z(), H("span", {
						key: 2,
						class: "rw-status-tag",
						title: t(T)("rechnungswerk", "DATEV-Übergabe")
					}, [(Z(), N(ye(ve(C.value.datevStatus)), {
						size: 18,
						class: U(["rw-sicon", `rw-sicon--datev-${C.value.datevStatus}`])
					}, null, 8, ["class"])), q(" " + Y(Se.value), 1)], 8, Yp)) : n("", !0)
				])) : n("", !0)]),
				re.value ? (Z(), N(t($), {
					key: 0,
					type: "error",
					text: re.value
				}, null, 8, ["text"])) : n("", !0),
				O.value ? (Z(), N(t($), {
					key: 1,
					type: "success",
					text: O.value
				}, null, 8, ["text"])) : n("", !0),
				P.value ? (Z(), N(t($), {
					key: 2,
					type: "info",
					text: d.value ? t(T)("rechnungswerk", "Dieses Angebot ist festgeschrieben und kann nicht mehr geändert werden.") : t(T)("rechnungswerk", "Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.")
				}, null, 8, ["text"])) : n("", !0),
				!d.value && C.value?.documentBackfilled ? (Z(), N(t($), {
					key: 3,
					type: "info",
					text: t(T)("rechnungswerk", "Dieser Beleg wurde nicht beim Festschreiben abgelegt, sondern später aus dem Datensatz erzeugt. Beträge, Positionen und Steuerausweis stimmen; Firmendaten und Layout entsprechen dem heutigen Stand, nicht dem von damals.")
				}, null, 8, ["text"])) : n("", !0),
				z("section", Xp, [
					z("h3", null, Y(d.value ? t(T)("rechnungswerk", "Angebotsdaten") : t(T)("rechnungswerk", "Rechnungsdaten")), 1),
					z("div", Zp, [
						z("label", Qp, [z("span", null, Y(d.value ? t(T)("rechnungswerk", "Angebotsnummer") : t(T)("rechnungswerk", "Rechnungsnummer")), 1), z("input", {
							class: "rw-input",
							type: "text",
							readonly: "",
							value: C.value?.number ?? t(T)("rechnungswerk", "(wird vergeben)")
						}, null, 8, $p)]),
						z("label", em, [z("span", null, Y(d.value ? t(T)("rechnungswerk", "Geplanter Leistungszeitraum (optional)") : t(T)("rechnungswerk", "Leistungsdatum /-zeitraum")), 1), w(z("input", {
							"onUpdate:modelValue": r[0] ||= (e) => M.performancePeriodStart = e,
							class: "rw-input",
							type: "date",
							readonly: P.value
						}, null, 8, tm), [[I, M.performancePeriodStart]])]),
						z("label", nm, [z("span", null, Y(t(T)("rechnungswerk", "bis (optional)")), 1), w(z("input", {
							"onUpdate:modelValue": r[1] ||= (e) => M.performancePeriodEnd = e,
							class: "rw-input",
							type: "date",
							readonly: P.value
						}, null, 8, rm), [[I, M.performancePeriodEnd]])])
					]),
					z("p", im, Y(d.value ? t(T)("rechnungswerk", "Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.") : t(T)("rechnungswerk", "Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.")), 1),
					z("details", {
						class: "more",
						open: ce.value,
						onToggle: r[7] ||= (e) => ce.value = e.target.open
					}, [
						z("summary", null, Y(d.value ? t(T)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)") : t(T)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)")), 1),
						z("div", om, [
							z("label", sm, [z("span", null, Y(t(T)("rechnungswerk", "Referenznummer")), 1), w(z("input", {
								"onUpdate:modelValue": r[2] ||= (e) => M.referenceNumber = e,
								class: "rw-input",
								type: "text",
								readonly: P.value
							}, null, 8, cm), [[I, M.referenceNumber]])]),
							z("label", lm, [z("span", null, Y(t(T)("rechnungswerk", "Bestellnummer")), 1), w(z("input", {
								"onUpdate:modelValue": r[3] ||= (e) => M.orderNumber = e,
								class: "rw-input",
								type: "text",
								readonly: P.value
							}, null, 8, um), [[I, M.orderNumber]])]),
							d.value ? (Z(), H("span", pm)) : (Z(), H("label", dm, [z("span", null, Y(t(T)("rechnungswerk", "Käuferreferenz / Leitweg-ID (BT-10)")), 1), w(z("input", {
								"onUpdate:modelValue": r[4] ||= (e) => M.buyerReference = e,
								class: "rw-input",
								type: "text",
								readonly: P.value,
								placeholder: t(T)("rechnungswerk", "nur für öffentliche Auftraggeber")
							}, null, 8, fm), [[I, M.buyerReference]])]))
						]),
						z("div", mm, [
							z("label", hm, [z("span", null, Y(t(T)("rechnungswerk", "Vertragsnummer (BT-12)")), 1), w(z("input", {
								"onUpdate:modelValue": r[5] ||= (e) => M.contractNumber = e,
								class: "rw-input",
								type: "text",
								readonly: P.value
							}, null, 8, gm), [[I, M.contractNumber]])]),
							z("label", _m, [z("span", null, Y(t(T)("rechnungswerk", "Objekt-/Projektkennung (BT-18)")), 1), w(z("input", {
								"onUpdate:modelValue": r[6] ||= (e) => M.projectReference = e,
								class: "rw-input",
								type: "text",
								readonly: P.value
							}, null, 8, vm), [[I, M.projectReference]])]),
							r[39] ||= z("span", {
								class: "rw-field",
								"aria-hidden": "true"
							}, null, -1)
						])
					], 40, am)
				]),
				z("section", ym, [
					z("h3", null, Y(t(T)("rechnungswerk", "Empfänger")), 1),
					P.value ? n("", !0) : (Z(), H("div", bm, [z("label", xm, [
						z("span", null, Y(t(T)("rechnungswerk", "Kunde übernehmen")), 1),
						J(Zd, { onSelect: Le }),
						z("span", Sm, Y(t(T)("rechnungswerk", "Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.")), 1)
					])])),
					z("div", Cm, [z("label", wm, [z("span", null, Y(t(T)("rechnungswerk", "Name")), 1), P.value ? (Z(), H("input", {
						key: 1,
						class: "rw-input",
						type: "text",
						readonly: "",
						value: M.recipientName
					}, null, 8, Tm)) : (Z(), N(Pd, {
						key: 0,
						modelValue: M.recipientName,
						"onUpdate:modelValue": r[8] ||= (e) => M.recipientName = e,
						onSelect: Re
					}, null, 8, ["modelValue"]))]), z("label", Em, [z("span", null, Y(t(T)("rechnungswerk", "E-Mail")), 1), w(z("input", {
						"onUpdate:modelValue": r[9] ||= (e) => M.recipientEmail = e,
						class: "rw-input",
						type: "email",
						readonly: P.value
					}, null, 8, Dm), [[I, M.recipientEmail]])])]),
					z("div", Om, [z("label", km, [
						z("span", null, Y(t(T)("rechnungswerk", "Adresszusatz")), 1),
						w(z("input", {
							"onUpdate:modelValue": r[10] ||= (e) => M.recipientAddressAddition = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Am), [[I, M.recipientAddressAddition]]),
						z("span", jm, Y(t(T)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					])]),
					z("div", Mm, [
						z("label", Nm, [z("span", null, Y(t(T)("rechnungswerk", "Straße")), 1), w(z("input", {
							"onUpdate:modelValue": r[11] ||= (e) => M.recipientAddress = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Pm), [[I, M.recipientAddress]])]),
						z("label", Fm, [z("span", null, Y(t(T)("rechnungswerk", "PLZ")), 1), w(z("input", {
							"onUpdate:modelValue": r[12] ||= (e) => M.recipientPostalCode = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Im), [[I, M.recipientPostalCode]])]),
						z("label", Lm, [z("span", null, Y(t(T)("rechnungswerk", "Ort")), 1), w(z("input", {
							"onUpdate:modelValue": r[13] ||= (e) => M.recipientCity = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Rm), [[I, M.recipientCity]])]),
						z("label", zm, [z("span", null, Y(t(T)("rechnungswerk", "Land")), 1), J(Bd, {
							modelValue: M.recipientCountry,
							"onUpdate:modelValue": r[14] ||= (e) => M.recipientCountry = e,
							disabled: P.value
						}, null, 8, ["modelValue", "disabled"])])
					]),
					z("div", Bm, [
						z("label", Vm, [z("span", null, Y(t(T)("rechnungswerk", "USt-IdNr. (optional)")), 1), w(z("input", {
							"onUpdate:modelValue": r[15] ||= (e) => M.recipientVatId = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Hm), [[I, M.recipientVatId]])]),
						z("label", Um, [z("span", null, Y(t(T)("rechnungswerk", "Ansprechpartner (optional)")), 1), w(z("input", {
							"onUpdate:modelValue": r[16] ||= (e) => M.recipientContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Wm), [[I, M.recipientContactPerson]])]),
						z("label", Gm, [z("span", null, Y(t(T)("rechnungswerk", "Telefon (optional)")), 1), w(z("input", {
							"onUpdate:modelValue": r[17] ||= (e) => M.recipientPhone = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Km), [[I, M.recipientPhone]])])
					])
				]),
				z("section", qm, [
					z("h3", null, Y(d.value ? t(T)("rechnungswerk", "Ansprechpartner (für dieses Angebot)") : t(T)("rechnungswerk", "Ansprechpartner (für diese Rechnung)")), 1),
					z("div", Jm, [
						z("label", Ym, [z("span", null, Y(t(T)("rechnungswerk", "Name")), 1), w(z("input", {
							"onUpdate:modelValue": r[18] ||= (e) => M.sellerContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Xm), [[I, M.sellerContactPerson]])]),
						z("label", Zm, [z("span", null, Y(t(T)("rechnungswerk", "Telefon")), 1), w(z("input", {
							"onUpdate:modelValue": r[19] ||= (e) => M.sellerContactPhone = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Qm), [[I, M.sellerContactPhone]])]),
						z("label", $m, [z("span", null, Y(t(T)("rechnungswerk", "E-Mail")), 1), w(z("input", {
							"onUpdate:modelValue": r[20] ||= (e) => M.sellerContactEmail = e,
							class: "rw-input",
							type: "email",
							readonly: P.value
						}, null, 8, eh), [[I, M.sellerContactEmail]])])
					]),
					z("p", th, Y(d.value ? t(T)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.") : t(T)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.")), 1)
				]),
				z("section", nh, [z("div", rh, [z("h3", null, Y(t(T)("rechnungswerk", "Anrede & Einleitung")), 1), !P.value && h.value.length > 0 ? (Z(), N(t(m), {
					key: 0,
					menuName: t(T)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: _(() => [J(co, { size: 18 })]),
					default: _(() => [(Z(!0), H(E, null, X(h.value, (e) => (Z(), N(t(ue), {
						key: e.id,
						onClick: (t) => v(e)
					}, {
						default: _(() => [q(Y(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : n("", !0)]), z("label", ih, [z("span", null, Y(t(T)("rechnungswerk", "Anrede & Einleitung")), 1), w(z("textarea", {
					"onUpdate:modelValue": r[21] ||= (e) => M.greeting = e,
					class: "rw-input",
					rows: "3",
					readonly: P.value,
					placeholder: t(T)("rechnungswerk", "Anrede und Einleitung – Vorgabe aus den Textbausteinen")
				}, null, 8, ah), [[I, M.greeting]])])]),
				z("section", oh, [z("h3", null, Y(t(T)("rechnungswerk", "Positionen")), 1), J(Vf, {
					items: ne.value,
					"onUpdate:items": r[22] ||= (e) => ne.value = e,
					products: t(c).products,
					readonly: P.value,
					smallBusiness: t(l).settings?.smallBusiness ?? !1,
					defaultTaxRateBp: t(l).settings?.defaultTaxRateBp ?? 1900
				}, null, 8, [
					"items",
					"products",
					"readonly",
					"smallBusiness",
					"defaultTaxRateBp"
				])]),
				z("section", sh, [
					z("h3", null, Y(t(T)("rechnungswerk", "Steuer & Summen")), 1),
					z("div", ch, [z("label", lh, [z("span", null, Y(t(T)("rechnungswerk", "Steuerfall")), 1), w(z("select", {
						"onUpdate:modelValue": r[23] ||= (e) => M.specialTaxCase = e,
						class: "rw-input",
						disabled: P.value
					}, [
						z("option", dh, Y(t(T)("rechnungswerk", "Regelbesteuerung")), 1),
						z("option", fh, Y(t(T)("rechnungswerk", "Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)")), 1),
						z("option", ph, Y(t(T)("rechnungswerk", "Innergemeinschaftliche Lieferung (steuerfrei)")), 1),
						z("option", mh, Y(t(T)("rechnungswerk", "Ausfuhrlieferung Drittland (steuerfrei)")), 1)
					], 8, uh), [[Ce, M.specialTaxCase]])]), r[40] ||= z("span", {
						class: "rw-field",
						"aria-hidden": "true"
					}, null, -1)]),
					M.specialTaxCase === "" ? n("", !0) : (Z(), N(t($), {
						key: 0,
						type: "info",
						text: t(T)("rechnungswerk", "Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.")
					}, null, 8, ["text"])),
					z("div", hh, [z("div", gh, [
						z("div", _h, [z("span", null, Y(t(T)("rechnungswerk", "Zwischensumme (netto)")), 1), z("strong", null, Y(t(fu)(Ae.value.subtotalCents)), 1)]),
						(Z(!0), H(E, null, X(Ae.value.taxBreakdown, (e) => (Z(), H("div", {
							key: e.rateBp,
							class: "rw-kpi-row rw-kpi-row--muted"
						}, [z("span", null, Y(t(T)("rechnungswerk", "USt {rate}", { rate: t(pu)(e.rateBp) })) + " (" + Y(t(fu)(e.netCents)) + ")", 1), z("span", null, Y(t(fu)(e.taxCents)), 1)]))), 128)),
						z("div", vh, [z("span", null, Y(t(T)("rechnungswerk", "Gesamt (brutto)")), 1), z("strong", null, Y(t(fu)(Ae.value.totalCents)), 1)])
					])])
				]),
				d.value ? (Z(), H("section", Dh, [
					z("h3", null, Y(t(T)("rechnungswerk", "Gültigkeit")), 1),
					z("div", Oh, [z("label", kh, [z("span", null, Y(t(T)("rechnungswerk", "Gültig bis")), 1), w(z("input", {
						"onUpdate:modelValue": r[26] ||= (e) => M.validUntil = e,
						class: "rw-input",
						type: "date",
						readonly: P.value
					}, null, 8, Ah), [[I, M.validUntil]])]), z("label", jh, [z("span", Mh, [w(z("input", {
						"onUpdate:modelValue": r[27] ||= (e) => M.offerFreeform = e,
						type: "checkbox",
						disabled: P.value
					}, null, 8, Nh), [[ee, M.offerFreeform]]), q(" " + Y(t(T)("rechnungswerk", "Freibleibendes Angebot (unverbindlich)")), 1)])])]),
					z("p", Ph, Y(t(T)("rechnungswerk", "„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.")), 1)
				])) : (Z(), H("section", yh, [z("h3", null, Y(t(T)("rechnungswerk", "Zahlungsbedingungen")), 1), z("div", bh, [
					z("label", xh, [z("span", null, Y(t(T)("rechnungswerk", "Zahlungsziel (Tage)")), 1), w(z("input", {
						"onUpdate:modelValue": r[24] ||= (e) => M.paymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						readonly: P.value
					}, null, 8, Sh), [[I, M.paymentTermDays]])]),
					z("label", Ch, [z("span", null, Y(t(T)("rechnungswerk", "Fällig am")), 1), z("input", {
						class: "rw-input",
						type: "text",
						readonly: "",
						value: he.value || "—"
					}, null, 8, wh)]),
					z("label", Th, [z("span", null, Y(t(T)("rechnungswerk", "Skonto")), 1), w(z("input", {
						"onUpdate:modelValue": r[25] ||= (e) => M.discountTerms = e,
						class: "rw-input",
						type: "text",
						readonly: P.value,
						placeholder: t(T)("rechnungswerk", "z. B. 2 % bei Zahlung bis\xA0…")
					}, null, 8, Eh), [[I, M.discountTerms]])])
				])])),
				z("section", Fh, [z("div", Ih, [z("h3", null, Y(t(T)("rechnungswerk", "Schlusstext")), 1), !P.value && g.value.length > 0 ? (Z(), N(t(m), {
					key: 0,
					menuName: t(T)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: _(() => [J(co, { size: 18 })]),
					default: _(() => [(Z(!0), H(E, null, X(g.value, (e) => (Z(), N(t(ue), {
						key: e.id,
						onClick: (t) => b(e)
					}, {
						default: _(() => [q(Y(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : n("", !0)]), z("label", Lh, [z("span", null, Y(t(T)("rechnungswerk", "Schlusstext / Anmerkungen")), 1), w(z("textarea", {
					"onUpdate:modelValue": r[28] ||= (e) => M.extraText = e,
					class: "rw-input",
					rows: "3",
					readonly: P.value,
					placeholder: t(T)("rechnungswerk", "Schlusstext – Vorgabe aus den Textbausteinen")
				}, null, 8, Rh), [[I, M.extraText]])])]),
				!P.value || D.value.length > 0 ? (Z(), H("section", zh, [
					z("h3", null, Y(d.value ? t(T)("rechnungswerk", "Notizen / Hinweise auf dem Angebot") : t(T)("rechnungswerk", "Notizen / Hinweise auf der Rechnung")), 1),
					(Z(!0), H(E, null, X(D.value, (e, r) => (Z(), H("div", {
						key: r,
						class: "rw-note-row"
					}, [w(z("input", {
						"onUpdate:modelValue": (e) => D.value[r] = e,
						class: "rw-input",
						type: "text",
						readonly: P.value,
						"aria-label": t(T)("rechnungswerk", "Notiz {index}", { index: r + 1 })
					}, null, 8, Bh), [[I, D.value[r]]]), P.value ? n("", !0) : (Z(), N(t(G), {
						key: 0,
						variant: "tertiary",
						"aria-label": t(T)("rechnungswerk", "Notiz entfernen"),
						onClick: (e) => Ie(r)
					}, {
						icon: _(() => [J(nd, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"]))]))), 128)),
					P.value ? n("", !0) : (Z(), N(t(G), {
						key: 0,
						variant: "tertiary",
						onClick: Fe
					}, {
						icon: _(() => [J(dc, { size: 20 })]),
						default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Notiz hinzufügen")), 1)]),
						_: 1
					})),
					z("p", Vh, Y(d.value ? t(T)("rechnungswerk", "Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.") : t(T)("rechnungswerk", "Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.")), 1)
				])) : n("", !0),
				C.value ? (Z(), H("section", Hh, [z("h3", null, Y(t(T)("rechnungswerk", "Verlauf")), 1), J(mp, {
					documentId: C.value.id,
					refreshKey: te.value
				}, null, 8, ["documentId", "refreshKey"])])) : n("", !0),
				z("div", Uh, [P.value ? C.value ? (Z(), H(E, { key: 1 }, [
					J(t(G), { onClick: tt }, {
						icon: _(() => [J(_c, { size: 20 })]),
						default: _(() => [q(" " + Y(t(T)("rechnungswerk", "PDF herunterladen")), 1)]),
						_: 1
					}),
					J(t(G), {
						variant: d.value ? "secondary" : "primary",
						disabled: ie.value,
						onClick: r[30] ||= (e) => ae.value = !0
					}, {
						icon: _(() => [J(cd, { size: 20 })]),
						default: _(() => [q(" " + Y(t(T)("rechnungswerk", "An Kunde senden")), 1)]),
						_: 1
					}, 8, ["variant", "disabled"]),
					C.value.invoiceType === "invoice" && C.value.status === "committed" ? (Z(), N(t(G), {
						key: 0,
						variant: "error",
						disabled: k.value,
						onClick: Ye
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Stornieren")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0),
					d.value ? (Z(), H(E, { key: 1 }, [
						W.value ? (Z(), N(t(G), {
							key: 0,
							disabled: k.value,
							onClick: rt
						}, {
							icon: _(() => [J(_l, { size: 20 })]),
							default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Annehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0),
						W.value ? (Z(), N(t(G), {
							key: 1,
							disabled: k.value,
							onClick: it
						}, {
							icon: _(() => [J(Cl, { size: 20 })]),
							default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Ablehnen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0),
						$e.value ? (Z(), N(t(G), {
							key: 2,
							disabled: k.value,
							onClick: Ze
						}, {
							icon: _(() => [J(Ed, { size: 20 })]),
							default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Revidieren")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0),
						et.value ? (Z(), N(t(G), {
							key: 3,
							variant: "primary",
							disabled: k.value,
							onClick: Xe
						}, {
							icon: _(() => [J(bd, { size: 20 })]),
							default: _(() => [q(" " + Y(t(T)("rechnungswerk", "In Rechnung übernehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0)
					], 64)) : n("", !0)
				], 64)) : n("", !0) : (Z(), H(E, { key: 0 }, [
					J(t(G), {
						disabled: k.value,
						onClick: r[29] ||= (e) => We()
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					J(t(G), {
						disabled: k.value,
						onClick: Ge
					}, {
						icon: _(() => [J(md, { size: 20 })]),
						default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Vorschau")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					J(t(G), {
						variant: "primary",
						disabled: k.value,
						onClick: qe
					}, {
						icon: _(() => [J(Do, { size: 20 })]),
						default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Festschreiben")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					C.value ? (Z(), N(t(G), {
						key: 0,
						variant: "error",
						disabled: k.value,
						onClick: Je
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Löschen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0)
				], 64))]),
				J(Wf, {
					open: j.value === "finalize",
					name: d.value ? t(T)("rechnungswerk", "Angebot festschreiben") : t(T)("rechnungswerk", "Rechnung festschreiben"),
					message: Ee.value,
					confirmLabel: t(T)("rechnungswerk", "Festschreiben"),
					onClose: r[31] ||= (e) => j.value = null,
					onConfirm: nt
				}, {
					default: _(() => [Te.value ? (Z(), N(t($), {
						key: 0,
						type: "warning",
						heading: t(T)("rechnungswerk", "Hinweis zur E-Rechnung"),
						text: t(T)("rechnungswerk", "Es ist weder eine USt-IdNr. noch eine Registernummer hinterlegt. Die Rechnung ist steuerlich in Ordnung, Prüfprogramme beim Empfänger melden aber einen Fehler und können sie zurückweisen.")
					}, null, 8, ["heading", "text"])) : n("", !0)]),
					_: 1
				}, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Wf, {
					open: j.value === "delete",
					name: d.value ? t(T)("rechnungswerk", "Angebot löschen") : t(T)("rechnungswerk", "Entwurf löschen"),
					message: d.value ? t(T)("rechnungswerk", "Diesen Angebots-Entwurf wirklich löschen?") : t(T)("rechnungswerk", "Diesen Entwurf wirklich löschen?"),
					confirmLabel: t(T)("rechnungswerk", "Löschen"),
					destructive: "",
					onClose: r[32] ||= (e) => j.value = null,
					onConfirm: ut
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Wf, {
					open: j.value === "cancel",
					name: t(T)("rechnungswerk", "Rechnung stornieren"),
					message: t(T)("rechnungswerk", "Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?"),
					confirmLabel: t(T)("rechnungswerk", "Stornorechnung erstellen"),
					destructive: "",
					onClose: r[33] ||= (e) => j.value = null,
					onConfirm: K
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Wf, {
					open: j.value === "convert",
					name: t(T)("rechnungswerk", "In Rechnung übernehmen"),
					message: t(T)("rechnungswerk", "Aus diesem Angebot wird ein neuer Rechnungs-Entwurf mit denselben Positionen erstellt. Das Angebot wird als „übernommen“ markiert. Fortfahren?"),
					confirmLabel: t(T)("rechnungswerk", "Rechnung erstellen"),
					onClose: r[34] ||= (e) => j.value = null,
					onConfirm: at
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Wf, {
					open: j.value === "revise",
					name: t(T)("rechnungswerk", "Angebot revidieren"),
					message: t(T)("rechnungswerk", "Es wird eine überarbeitbare Kopie als neue Angebots-Revision erstellt. Beim Festschreiben erhält sie eine Revisionsnummer (z. B. AN-…-1) und dieses Angebot wird als „revidiert“ markiert. Fortfahren?"),
					confirmLabel: t(T)("rechnungswerk", "Revision erstellen"),
					onClose: r[35] ||= (e) => j.value = null,
					onConfirm: st
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Wf, {
					open: j.value === "leave",
					name: t(T)("rechnungswerk", "Ungespeicherte Änderungen"),
					message: t(T)("rechnungswerk", "Deine Änderungen sind noch nicht gespeichert. Wenn du die Seite verlässt, gehen sie verloren."),
					cancelLabel: t(T)("rechnungswerk", "Weiter bearbeiten"),
					confirmLabel: t(T)("rechnungswerk", "Verwerfen"),
					destructive: "",
					onClose: r[36] ||= (e) => Ue(!1),
					onConfirm: r[37] ||= (e) => Ue(!0)
				}, null, 8, [
					"open",
					"name",
					"message",
					"cancelLabel",
					"confirmLabel"
				]),
				J(tp, {
					open: ae.value,
					invoice: C.value,
					defaultBody: De.value,
					saving: ie.value,
					kind: d.value ? "quote" : "invoice",
					onClose: r[38] ||= (e) => ae.value = !1,
					onSend: ct
				}, null, 8, [
					"open",
					"invoice",
					"defaultBody",
					"saving",
					"kind"
				]),
				J(t(Qe), {
					open: oe.value,
					name: t(T)("rechnungswerk", "Vorschau (Entwurf)"),
					size: "large",
					"onUpdate:open": Ke
				}, {
					default: _(() => [se.value ? (Z(), H("iframe", {
						key: 0,
						src: se.value,
						class: "preview-frame",
						title: t(T)("rechnungswerk", "Vorschau (Entwurf)")
					}, null, 8, Wh)) : n("", !0)]),
					_: 1
				}, 8, ["open", "name"])
			]);
		};
	}
}), [["__scopeId", "data-v-babab3d0"]]), Kh = async () => (await vs("/groups")).groups, qh = { class: "membership-fees" }, Jh = { class: "page-header" }, Yh = { class: "title-row" }, Xh = {
	key: 1,
	class: "status-badge status-badge--new"
}, Zh = {
	key: 0,
	class: "loading"
}, Qh = { class: "card" }, $h = { class: "selector-grid" }, eg = { class: "field" }, tg = { class: "field-with-button" }, ng = { class: "field" }, rg = ["value"], ig = {
	key: 0,
	class: "locked-info"
}, ag = {
	key: 1,
	class: "new-info"
}, og = { class: "card" }, sg = { class: "form-grid" }, cg = { class: "field field--wide" }, lg = ["disabled"], ug = { class: "field" }, dg = ["disabled"], fg = { class: "field" }, pg = ["disabled"], mg = { class: "field" }, hg = ["disabled"], gg = { class: "field" }, _g = ["disabled"], vg = { class: "field" }, yg = ["disabled"], bg = { class: "card" }, xg = { class: "section-header" }, Sg = { class: "table-wrapper" }, Cg = { class: "config-table" }, wg = {
	key: 0,
	class: "action-column"
}, Tg = ["onUpdate:modelValue", "disabled"], Eg = ["value"], Dg = ["value"], Og = { class: "money-input" }, kg = ["onUpdate:modelValue", "disabled"], Ag = {
	key: 0,
	class: "action-column"
}, jg = ["onClick"], Mg = { key: 0 }, Ng = { class: "card" }, Pg = { class: "section-header" }, Fg = {
	key: 0,
	class: "message message--error",
	role: "alert"
}, Ig = { class: "table-wrapper" }, Lg = { class: "config-table" }, Rg = {
	key: 0,
	class: "action-column"
}, zg = ["onUpdate:modelValue", "disabled"], Bg = ["value"], Vg = ["value"], Hg = ["onUpdate:modelValue", "disabled"], Ug = { class: "percent-input" }, Wg = ["onUpdate:modelValue", "disabled"], Gg = {
	key: 0,
	class: "action-column"
}, Kg = ["onClick"], qg = { key: 0 }, Jg = {
	key: 1,
	class: "card actions-card"
}, Yg = { class: "actions" }, Xg = { class: "actions__right" }, Zg = { class: "card" }, Qg = { class: "section-header" }, $g = { key: 0 }, e_ = { key: 1 }, t_ = {
	key: 0,
	class: "preview-loading"
}, n_ = { class: "summary-grid" }, r_ = { class: "summary-box" }, i_ = { class: "summary-box" }, a_ = { class: "summary-box" }, o_ = { class: "summary-box" }, s_ = {
	key: 0,
	class: "summary-box summary-box--error"
}, c_ = { class: "table-wrapper" }, l_ = { class: "member-table" }, u_ = { class: "member-name" }, d_ = {
	key: 0,
	class: "member-detail"
}, f_ = { class: "amount-cell" }, p_ = {
	key: 0,
	class: "member-detail"
}, m_ = { colspan: "5" }, h_ = { class: "amount-cell" }, g_ = {
	key: 0,
	class: "create-invoices"
}, __ = {
	key: 1,
	class: "processing-info"
}, v_ = {
	key: 2,
	class: "empty-preview"
}, y_ = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "MembershipFeesView",
	setup(e) {
		let r = (/* @__PURE__ */ new Date()).getFullYear(), i = y(r), a = y(""), o = y([]), s = L(() => new Map(o.value.map(({ id: e, displayName: t }) => [e, t]))), c = y(null), l = y(null), u = y(`Mitgliedsbeitrag ${r}`), d = y(14), f = y(Te(r)), p = y(""), m = y("EUR"), h = y(0), g = y([]), v = y([]), b = y([]), x = y(""), S = y(!0), ee = y(!1), C = y(!1), T = y(!1), te = y(""), ne = y("info"), D = L(() => c.value !== null), re = L(() => c.value !== null && c.value.status !== "draft"), k = L(() => re.value || C.value || T.value), ie = L(() => S.value || ee.value || C.value || T.value), ae = L(() => {
			switch (c.value?.status) {
				case "draft": return "Entwurf";
				case "processing": return "In Bearbeitung";
				case "completed": return "Abgeschlossen";
				default: return "";
			}
		}), oe = L(() => l.value ? l.value.members.reduce((e, t) => t.feeAmount ? e + je(t.feeAmount) : e, 0) : 0), se = L(() => Me(oe.value, m.value)), A = L(() => {
			if (!l.value) return 0;
			let e = l.value.summary;
			return e.incomplete + e.noFeeGroup + e.multipleFeeGroups + e.noMembershipType + e.noMembershipRule + e.zeroFee + e.profileErrors + e.feeErrors + e.createErrors;
		}), j = L(() => l.value !== null && l.value.summary.ready > 0 && A.value === 0), ce = L(() => c.value?.status === "draft");
		Pe(async () => {
			Se();
			let [e, t] = await Promise.allSettled([Ws(!0), Kh()]);
			t.status === "fulfilled" && (o.value = t.value), e.status === "rejected" ? (B(e.reason.message), S.value = !1) : (a.value = e.value.memberGroup ?? "", b.value = e.value.membershipTypes ?? [], x.value = e.value.membershipTypesError ?? (b.value.length ? "" : "Die Beitragsarten konnten nicht geladen werden."), await le());
		});
		async function le() {
			if (Le(), !a.value.trim()) B("Bitte zuerst eine Mitgliedergruppe in den Vereinseinstellungen auswählen."), S.value = !1;
			else if (!De(i.value)) B("Bitte ein gültiges Beitragsjahr angeben.");
			else {
				S.value = !0, l.value = null;
				try {
					me((await vs(we(i.value, a.value))).configuration), await ue();
				} catch (e) {
					let t = e;
					t.status === 400 || t.status === 404 ? (he(i.value), ze(`Für ${i.value} besteht noch keine Beitragsabrechnung. Du kannst einen neuen Entwurf anlegen.`)) : B(t.message);
				} finally {
					S.value = !1;
				}
			}
		}
		async function ue() {
			if (D.value) {
				ee.value = !0;
				try {
					let e = await vs(`/membership-invoices/batch-preview?group=${encodeURIComponent(a.value)}&year=${i.value}`);
					l.value = e.batch, e.batch.run && (c.value = e.batch.run);
				} catch (e) {
					B(e.message);
				} finally {
					ee.value = !1;
				}
			}
		}
		async function de() {
			if (Le(), re.value) {
				B("Diese Beitragsabrechnung ist bereits gesperrt.");
				return;
			}
			let e = xe();
			if (e) B(e);
			else {
				C.value = !0;
				try {
					me((await ys("/membership-invoices/configuration", {
						year: i.value,
						group: a.value.trim(),
						groupFees: ye(),
						membershipRules: be(),
						currency: m.value.trim().toUpperCase(),
						invoiceText: u.value.trim(),
						paymentTermDays: d.value,
						taxRateBp: h.value,
						issueDate: f.value || null,
						dueDate: p.value || null
					})).configuration), Re(`Beitragsabrechnung ${i.value} wurde gespeichert.`), await ue();
				} catch (e) {
					B(e.message);
				} finally {
					C.value = !1;
				}
			}
		}
		async function fe() {
			if (re.value) return;
			let e = i.value - 1;
			Le();
			try {
				let t = (await vs(we(e, a.value))).configuration;
				g.value = Object.entries(t.groupFees).map(([e, t]) => ({
					name: e,
					amount: Ae(t)
				})), v.value = Object.entries(t.membershipRules).map(([e, t]) => ({
					name: e,
					type: t.type,
					value: t.value
				})), m.value = t.run.currency, d.value = t.run.paymentTermDays, h.value = t.run.taxRateBp, u.value = Ee(t.run.invoiceText, e, i.value), f.value = Te(i.value), Se(), Re(`Beitragswerte aus ${e} wurden übernommen. Bitte prüfen und anschließend speichern.`);
			} catch (t) {
				let n = t;
				B(`Vorjahr ${e} konnte nicht übernommen werden: ` + n.message);
			}
		}
		async function M() {
			if (l.value && j.value && window.confirm(`Für ${l.value.summary.ready} Mitglieder werden Beitragsrechnungsentwürfe für ${i.value} erstellt.\n\nDanach wird die Beitragskonfiguration gesperrt.

Es werden noch keine E-Mails versendet und keine Rechnungen endgültig festgeschrieben.

Fortfahren?`)) {
				T.value = !0, Le();
				try {
					let e = await ys("/membership-invoices/batch-create-drafts", {
						group: a.value,
						year: i.value,
						confirm: !0
					});
					l.value = e.batch, c.value = e.batch.run;
					let t = e.batch.summary;
					Re(`Beitragslauf ${i.value} wurde gestartet. ${t.draftCreated} Rechnungsentwürfe wurden neu erstellt` + (t.alreadyExists > 0 ? `, ${t.alreadyExists} waren bereits vorhanden.` : ".")), await pe();
				} catch (e) {
					B(e.message);
				} finally {
					T.value = !1;
				}
			}
		}
		async function pe() {
			try {
				me((await vs(we(i.value, a.value))).configuration), await ue();
			} catch {}
		}
		function me(e) {
			c.value = e.run, i.value = e.run.year, a.value = e.run.memberGroup, m.value = e.run.currency, u.value = e.run.invoiceText, d.value = e.run.paymentTermDays, f.value = e.run.issueDate ?? "", p.value = e.run.dueDate ?? "", h.value = e.run.taxRateBp, g.value = Object.entries(e.groupFees).map(([e, t]) => ({
				name: e,
				amount: Ae(t)
			})), v.value = Object.entries(e.membershipRules).map(([e, t]) => ({
				name: e,
				type: t.type,
				value: t.value
			}));
		}
		function he(e) {
			c.value = null, l.value = null, u.value = `Mitgliedsbeitrag ${e}`, d.value = 14, f.value = Te(e), m.value = "EUR", h.value = 0, g.value = [], v.value = [], Se();
		}
		function P() {
			g.value.push({
				name: "",
				amount: "0,00"
			});
		}
		function ge(e) {
			g.value.splice(e, 1);
		}
		function F() {
			v.value.push({
				name: "",
				type: "percent",
				value: "100"
			});
		}
		function _e(e) {
			v.value.splice(e, 1);
		}
		function ye() {
			let e = {};
			for (let t of g.value) e[t.name.trim()] = Oe(t.amount);
			return e;
		}
		function be() {
			let e = {};
			for (let t of v.value) e[t.name.trim()] = {
				type: t.type,
				value: Oe(t.value)
			};
			return e;
		}
		function xe() {
			if (!De(i.value)) return "Bitte ein gültiges Beitragsjahr angeben.";
			if (!a.value.trim()) return "Bitte eine Vereinsgruppe angeben.";
			if (!u.value.trim()) return "Bitte einen Rechnungstext angeben.";
			if (!f.value) return "Bitte ein Rechnungsdatum angeben.";
			if (!p.value) return "Bitte ein Fälligkeitsdatum angeben.";
			if (p.value < f.value) return "Das Fälligkeitsdatum darf nicht vor dem Rechnungsdatum liegen.";
			if (!Number.isInteger(d.value) || d.value < 0) return "Das Zahlungsziel ist ungültig.";
			if (g.value.length === 0) return "Mindestens eine Beitragsgruppe ist erforderlich.";
			let e = /* @__PURE__ */ new Set();
			for (let t of g.value) {
				let n = t.name.trim();
				if (!n) return "Bitte für jeden Jahresbeitrag eine Nextcloud-Gruppe auswählen.";
				if (!s.value.has(n)) return `Bitte eine gültige Nextcloud-Gruppe für "${n}" auswählen.`;
				if (e.has(n)) return `Die Beitragsgruppe "${n}" ist doppelt vorhanden.`;
				if (e.add(n), !ke(t.amount)) return `Der Beitrag für "${n}" ist ungültig.`;
			}
			if (v.value.length === 0) return "Mindestens eine Beitragsart ist erforderlich.";
			if (x.value) return x.value;
			let t = /* @__PURE__ */ new Set();
			for (let e of v.value) {
				let n = e.name.trim();
				if (!n) return "Bitte eine Beitragsart aus dem Profilfeld auswählen.";
				if (!b.value.includes(n)) return `Bitte für "${n}" eine gültige Beitragsart auswählen.`;
				if (t.has(n)) return `Die Beitragsart "${n}" ist doppelt vorhanden.`;
				if (t.add(n), !ke(e.value)) return `Der Wert der Beitragsart "${n}" ist ungültig.`;
			}
			return null;
		}
		function Se() {
			if (!f.value) {
				p.value = "";
				return;
			}
			let e = Number(d.value);
			if (!Number.isFinite(e) || e < 0) return;
			let [t, n, r] = f.value.split("-").map(Number), i = new Date(Date.UTC(t, n - 1, r));
			i.setUTCDate(i.getUTCDate() + Math.trunc(e)), p.value = [
				i.getUTCFullYear(),
				String(i.getUTCMonth() + 1).padStart(2, "0"),
				String(i.getUTCDate()).padStart(2, "0")
			].join("-");
		}
		function we(e, t) {
			return `/membership-invoices/configuration?group=${encodeURIComponent(t.trim())}&year=${e}`;
		}
		function Te(e) {
			let t = /* @__PURE__ */ new Date();
			return e === t.getFullYear() ? [
				t.getFullYear(),
				String(t.getMonth() + 1).padStart(2, "0"),
				String(t.getDate()).padStart(2, "0")
			].join("-") : `${e}-01-01`;
		}
		function Ee(e, t, n) {
			let r = String(t);
			return e.includes(r) ? e.replaceAll(r, String(n)) : `Mitgliedsbeitrag ${n}`;
		}
		function De(e) {
			return Number.isInteger(e) && e >= 2e3 && e <= 2100;
		}
		function Oe(e) {
			let t = e.trim().replace(/\s/g, "").replace(",", "."), n = Number(t);
			return Number.isFinite(n) ? n.toFixed(2) : t;
		}
		function ke(e) {
			let t = e.trim().replace(/\s/g, "").replace(",", ".");
			return /^\d+(?:\.\d{1,4})?$/.test(t) && Number.isFinite(Number(t));
		}
		function Ae(e) {
			return Number(e).toFixed(2).replace(".", ",");
		}
		function je(e) {
			let [t = "0", n = ""] = e.replace(",", ".").split("."), r = Number(`${t}${n.padEnd(2, "0").slice(0, 2)}`);
			return Number.isFinite(r) ? r : 0;
		}
		function Me(e, t) {
			return new Intl.NumberFormat("de-DE", {
				style: "currency",
				currency: t || "EUR"
			}).format(e / 100);
		}
		function R(e) {
			return e === null ? "–" : Me(je(e), m.value);
		}
		function Ne(e) {
			return [e.firstName, e.lastName].filter(Boolean).join(" ").trim() || e.displayName || e.uid;
		}
		function Fe(e) {
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
		function Ie(e) {
			return !["ready", "fee_exempt"].includes(e.status);
		}
		function Le() {
			te.value = "";
		}
		function Re(e) {
			te.value = e, ne.value = "success";
		}
		function B(e) {
			te.value = e, ne.value = "error";
		}
		function ze(e) {
			te.value = e, ne.value = "info";
		}
		return (e, r) => (Z(), H("div", qh, [z("header", Jh, [z("div", null, [z("div", Yh, [r[7] ||= z("h2", null, "Beitragsabrechnung", -1), c.value ? (Z(), H("span", {
			key: 0,
			class: U(["status-badge", `status-badge--${c.value.status}`])
		}, Y(ae.value), 3)) : (Z(), H("span", Xh, " Neues Beitragsjahr "))]), r[8] ||= z("p", null, " Jahresbeiträge konfigurieren, prüfen und Beitragsrechnungen erstellen. ", -1)])]), S.value ? (Z(), H("div", Zh, [J(t(ve), { size: 44 })])) : (Z(), H(E, { key: 1 }, [
			te.value ? (Z(), H("div", {
				key: 0,
				class: U(["message", `message--${ne.value}`])
			}, Y(te.value), 3)) : n("", !0),
			z("section", Qh, [
				r[13] ||= z("div", { class: "section-header" }, [z("div", null, [z("h3", null, "Jahresabrechnung"), z("p", null, " Beitragsjahr und Vereinsgruppe auswählen. ")])], -1),
				z("div", $h, [z("label", eg, [r[10] ||= z("span", null, "Beitragsjahr", -1), z("div", tg, [w(z("input", {
					"onUpdate:modelValue": r[0] ||= (e) => i.value = e,
					type: "number",
					min: "2000",
					max: "2100",
					onKeyup: O(le, ["enter"])
				}, null, 544), [[
					I,
					i.value,
					void 0,
					{ number: !0 }
				]]), J(t(G), {
					variant: "secondary",
					disabled: ie.value,
					onClick: le
				}, {
					default: _(() => [...r[9] ||= [q(" Laden ", -1)]]),
					_: 1
				}, 8, ["disabled"])])]), z("label", ng, [r[11] ||= z("span", null, "Vereinsgruppe", -1), z("input", {
					value: a.value,
					type: "text",
					readonly: ""
				}, null, 8, rg)])]),
				re.value ? (Z(), H("div", ig, [...r[12] ||= [z("strong", null, "Diese Beitragsabrechnung ist gesperrt.", -1), q(" Die Rechnungsentwürfe wurden bereits erzeugt. Die Beitragskonfiguration kann deshalb nicht mehr verändert werden. ", -1)]])) : D.value ? n("", !0) : (Z(), H("div", ag, " Für " + Y(i.value) + " und die Gruppe " + Y(a.value) + " besteht noch keine Beitragsabrechnung. Du kannst jetzt einen neuen Entwurf anlegen. ", 1))
			]),
			z("section", og, [r[21] ||= z("div", { class: "section-header" }, [z("div", null, [z("h3", null, "Rechnungsdaten"), z("p", null, " Grunddaten für alle Beitragsrechnungen dieses Jahres. ")])], -1), z("div", sg, [
				z("label", cg, [r[14] ||= z("span", null, "Rechnungstext", -1), w(z("input", {
					"onUpdate:modelValue": r[1] ||= (e) => u.value = e,
					type: "text",
					disabled: k.value,
					placeholder: "Mitgliedsbeitrag 2026"
				}, null, 8, lg), [[I, u.value]])]),
				z("label", ug, [r[15] ||= z("span", null, "Rechnungsdatum", -1), w(z("input", {
					"onUpdate:modelValue": r[2] ||= (e) => f.value = e,
					type: "date",
					disabled: k.value,
					onChange: Se
				}, null, 40, dg), [[I, f.value]])]),
				z("label", fg, [r[16] ||= z("span", null, "Zahlungsziel in Tagen", -1), w(z("input", {
					"onUpdate:modelValue": r[3] ||= (e) => d.value = e,
					type: "number",
					min: "0",
					max: "365",
					disabled: k.value,
					onChange: Se
				}, null, 40, pg), [[
					I,
					d.value,
					void 0,
					{ number: !0 }
				]])]),
				z("label", mg, [r[17] ||= z("span", null, "Fällig am", -1), w(z("input", {
					"onUpdate:modelValue": r[4] ||= (e) => p.value = e,
					type: "date",
					disabled: k.value
				}, null, 8, hg), [[I, p.value]])]),
				z("label", gg, [r[18] ||= z("span", null, "Währung", -1), w(z("input", {
					"onUpdate:modelValue": r[5] ||= (e) => m.value = e,
					type: "text",
					maxlength: "3",
					disabled: k.value
				}, null, 8, _g), [[I, m.value]])]),
				z("label", vg, [r[20] ||= z("span", null, "Umsatzsteuer", -1), w(z("select", {
					"onUpdate:modelValue": r[6] ||= (e) => h.value = e,
					disabled: k.value
				}, [...r[19] ||= [
					z("option", { value: 0 }, "0 %", -1),
					z("option", { value: 700 }, "7 %", -1),
					z("option", { value: 1900 }, "19 %", -1)
				]], 8, yg), [[
					Ce,
					h.value,
					void 0,
					{ number: !0 }
				]])])
			])]),
			z("section", bg, [z("div", xg, [r[23] ||= z("div", null, [z("h3", null, "Jahresbeiträge"), z("p", null, " Grundbeitrag je Nextcloud-Beitragsgruppe. ")], -1), k.value ? n("", !0) : (Z(), N(t(G), {
				key: 0,
				variant: "secondary",
				onClick: P
			}, {
				default: _(() => [...r[22] ||= [q(" + Beitragsgruppe ", -1)]]),
				_: 1
			}))]), z("div", Sg, [z("table", Cg, [z("thead", null, [z("tr", null, [
				r[24] ||= z("th", null, "Beitragsgruppe", -1),
				r[25] ||= z("th", null, "Jahresbeitrag", -1),
				k.value ? n("", !0) : (Z(), H("th", wg))
			])]), z("tbody", null, [(Z(!0), H(E, null, X(g.value, (e, t) => (Z(), H("tr", { key: t }, [
				z("td", null, [w(z("select", {
					"onUpdate:modelValue": (t) => e.name = t,
					"aria-label": "Beitragsgruppe",
					disabled: k.value || o.value.length === 0
				}, [
					r[26] ||= z("option", {
						value: "",
						disabled: ""
					}, "Beitragsgruppe auswählen", -1),
					e.name && !s.value.has(e.name) ? (Z(), H("option", {
						key: 0,
						value: e.name,
						disabled: ""
					}, Y(e.name) + " (bisheriger Eintrag) ", 9, Eg)) : n("", !0),
					(Z(!0), H(E, null, X(o.value, (e) => (Z(), H("option", {
						key: e.id,
						value: e.id
					}, Y(e.displayName), 9, Dg))), 128))
				], 8, Tg), [[Ce, e.name]])]),
				z("td", null, [z("div", Og, [w(z("input", {
					"onUpdate:modelValue": (t) => e.amount = t,
					type: "text",
					inputmode: "decimal",
					disabled: k.value,
					placeholder: "0,00"
				}, null, 8, kg), [[I, e.amount]]), z("span", null, Y(m.value), 1)])]),
				k.value ? n("", !0) : (Z(), H("td", Ag, [z("button", {
					type: "button",
					class: "remove-button",
					title: "Beitragsgruppe entfernen",
					onClick: (e) => ge(t)
				}, " × ", 8, jg)]))
			]))), 128)), g.value.length === 0 ? (Z(), H("tr", Mg, [...r[27] ||= [z("td", {
				colspan: "3",
				class: "empty-row"
			}, " Keine Beitragsgruppen vorhanden. ", -1)]])) : n("", !0)])])])]),
			z("section", Ng, [
				z("div", Pg, [r[29] ||= z("div", null, [z("h3", null, "Beitragsarten"), z("p", null, " Prozentualer Anteil des Grundbeitrags je Mitgliedsart. ")], -1), k.value ? n("", !0) : (Z(), N(t(G), {
					key: 0,
					variant: "secondary",
					onClick: F
				}, {
					default: _(() => [...r[28] ||= [q(" + Beitragsart ", -1)]]),
					_: 1
				}))]),
				x.value ? (Z(), H("p", Fg, Y(x.value), 1)) : n("", !0),
				z("div", Ig, [z("table", Lg, [z("thead", null, [z("tr", null, [
					r[30] ||= z("th", null, "Beitragsart", -1),
					r[31] ||= z("th", null, "Berechnung", -1),
					r[32] ||= z("th", null, "Wert", -1),
					k.value ? n("", !0) : (Z(), H("th", Rg))
				])]), z("tbody", null, [(Z(!0), H(E, null, X(v.value, (e, t) => (Z(), H("tr", { key: t }, [
					z("td", null, [w(z("select", {
						"onUpdate:modelValue": (t) => e.name = t,
						"aria-label": "Beitragsart",
						disabled: k.value || b.value.length === 0
					}, [
						r[33] ||= z("option", {
							value: "",
							disabled: ""
						}, "Beitragsart auswählen", -1),
						e.name && !b.value.includes(e.name) ? (Z(), H("option", {
							key: 0,
							value: e.name,
							disabled: ""
						}, Y(e.name) + " (bisheriger Eintrag) ", 9, Bg)) : n("", !0),
						(Z(!0), H(E, null, X(b.value, (e) => (Z(), H("option", {
							key: e,
							value: e
						}, Y(e), 9, Vg))), 128))
					], 8, zg), [[Ce, e.name]])]),
					z("td", null, [w(z("select", {
						"onUpdate:modelValue": (t) => e.type = t,
						disabled: k.value
					}, [...r[34] ||= [z("option", { value: "percent" }, " Prozent ", -1)]], 8, Hg), [[Ce, e.type]])]),
					z("td", null, [z("div", Ug, [w(z("input", {
						"onUpdate:modelValue": (t) => e.value = t,
						type: "text",
						inputmode: "decimal",
						disabled: k.value,
						placeholder: "100"
					}, null, 8, Wg), [[I, e.value]]), r[35] ||= z("span", null, "%", -1)])]),
					k.value ? n("", !0) : (Z(), H("td", Gg, [z("button", {
						type: "button",
						class: "remove-button",
						title: "Beitragsart entfernen",
						onClick: (e) => _e(t)
					}, " × ", 8, Kg)]))
				]))), 128)), v.value.length === 0 ? (Z(), H("tr", qg, [...r[36] ||= [z("td", {
					colspan: "4",
					class: "empty-row"
				}, " Keine Beitragsarten vorhanden. ", -1)]])) : n("", !0)])])])
			]),
			re.value ? n("", !0) : (Z(), H("section", Jg, [z("div", Yg, [J(t(G), {
				variant: "secondary",
				disabled: ie.value,
				onClick: fe
			}, {
				default: _(() => [...r[37] ||= [q(" Vorjahr übernehmen ", -1)]]),
				_: 1
			}, 8, ["disabled"]), z("div", Xg, [J(t(G), {
				variant: "primary",
				disabled: ie.value,
				onClick: de
			}, {
				default: _(() => [q(Y(C.value ? "Speichert\xA0…" : "Speichern"), 1)]),
				_: 1
			}, 8, ["disabled"]), J(t(G), {
				variant: "secondary",
				disabled: ie.value || !D.value,
				onClick: ue
			}, {
				default: _(() => [...r[38] ||= [q(" Vorschau aktualisieren ", -1)]]),
				_: 1
			}, 8, ["disabled"])])])])),
			z("section", Zg, [z("div", Qg, [z("div", null, [r[39] ||= z("h3", null, "Mitgliedervorschau", -1), l.value ? (Z(), H("p", $g, Y(l.value.summary.total) + " Mitglieder geprüft, " + Y(l.value.summary.ready) + " beitragspflichtige Rechnungen. ", 1)) : (Z(), H("p", e_, " Nach dem Speichern kann die Beitragsberechnung geprüft werden. "))]), D.value ? (Z(), N(t(G), {
				key: 0,
				variant: "secondary",
				disabled: ie.value,
				onClick: ue
			}, {
				default: _(() => [...r[40] ||= [q(" Aktualisieren ", -1)]]),
				_: 1
			}, 8, ["disabled"])) : n("", !0)]), ee.value ? (Z(), H("div", t_, [J(t(ve), { size: 32 })])) : l.value ? (Z(), H(E, { key: 1 }, [
				z("div", n_, [
					z("div", r_, [r[41] ||= z("span", null, "Mitglieder", -1), z("strong", null, Y(l.value.summary.total), 1)]),
					z("div", i_, [r[42] ||= z("span", null, "Rechnungsbereit", -1), z("strong", null, Y(l.value.summary.ready), 1)]),
					z("div", a_, [r[43] ||= z("span", null, "Beitragsfrei", -1), z("strong", null, Y(l.value.summary.feeExempt), 1)]),
					z("div", o_, [r[44] ||= z("span", null, "Gesamtbetrag", -1), z("strong", null, Y(se.value), 1)]),
					A.value > 0 ? (Z(), H("div", s_, [r[45] ||= z("span", null, "Fehler", -1), z("strong", null, Y(A.value), 1)])) : n("", !0)
				]),
				z("div", c_, [z("table", l_, [
					r[47] ||= z("thead", null, [z("tr", null, [
						z("th", null, "Mitglied"),
						z("th", null, "Nr."),
						z("th", null, "Beitragsgruppe"),
						z("th", null, "Beitragsart"),
						z("th", null, "Grundbeitrag"),
						z("th", null, "Beitrag"),
						z("th", null, "Status")
					])], -1),
					z("tbody", null, [(Z(!0), H(E, null, X(l.value.members, (e) => (Z(), H("tr", {
						key: e.uid,
						class: U({ "member-row--error": Ie(e) })
					}, [
						z("td", null, [z("div", u_, [z("strong", null, Y(Ne(e)), 1), z("small", null, Y(e.email || e.uid), 1)])]),
						z("td", null, Y(e.memberNumber || "–"), 1),
						z("td", null, Y(e.feeGroup || "–"), 1),
						z("td", null, [q(Y(e.membershipType || "–") + " ", 1), e.adjustmentValue ? (Z(), H("small", d_, Y(e.adjustmentValue) + " % ", 1)) : n("", !0)]),
						z("td", null, Y(R(e.baseFeeAmount)), 1),
						z("td", f_, Y(R(e.feeAmount)), 1),
						z("td", null, [z("span", { class: U(["member-status", `member-status--${e.status}`]) }, Y(Fe(e)), 3), e.feeError ? (Z(), H("small", p_, Y(e.feeError), 1)) : n("", !0)])
					], 2))), 128))]),
					z("tfoot", null, [z("tr", null, [
						z("td", m_, [z("strong", null, Y(l.value.summary.ready) + " Beitragsrechnungen ", 1)]),
						z("td", h_, [z("strong", null, Y(se.value), 1)]),
						r[46] ||= z("td", null, null, -1)
					])])
				])]),
				ce.value ? (Z(), H("div", g_, [z("div", null, [
					r[48] ||= z("h4", null, "Beitragsrechnungen erstellen", -1),
					z("p", null, " Es werden Rechnungsentwürfe für alle rechnungsbereiten Mitglieder erzeugt. Danach wird die Beitragskonfiguration für " + Y(i.value) + " gesperrt. ", 1),
					r[49] ||= z("p", null, [z("strong", null, " Dabei werden noch keine E-Mails versendet und keine Rechnungen festgeschrieben. ")], -1)
				]), J(t(G), {
					variant: "primary",
					disabled: ie.value || !j.value,
					onClick: M
				}, {
					default: _(() => [q(Y(T.value ? "Erstellt\xA0…" : "Beitragsrechnungen erstellen"), 1)]),
					_: 1
				}, 8, ["disabled"])])) : re.value ? (Z(), H("div", __, [z("strong", null, " Beitragslauf " + Y(i.value) + " wurde bereits gestartet. ", 1), r[50] ||= z("span", null, " Die Beitragskonfiguration ist deshalb gesperrt. ", -1)])) : n("", !0)
			], 64)) : (Z(), H("div", v_, " Noch keine Vorschau geladen. "))])
		], 64))]));
	}
}), [["__scopeId", "data-v-ccd9dc82"]]), b_ = {
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
}, x_ = ["aria-hidden", "aria-label"], S_ = [
	"fill",
	"width",
	"height"
], C_ = { key: 0 };
function w_(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon alert-circle-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", C_, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" }, null, -1)], 8, S_))], 16, x_);
}
var T_ = /*#__PURE__*/ Q(b_, [["render", w_]]), E_ = { class: "rw-view" }, D_ = { class: "rw-view__head" }, O_ = { key: 2 }, k_ = { class: "rw-filterbar" }, A_ = ["onClick"], j_ = { class: "rw-chip__n" }, M_ = { class: "rw-table-wrap" }, N_ = { class: "rw-table" }, P_ = { class: "num" }, F_ = ["onClick"], I_ = { class: "rw-status-cell" }, L_ = { class: "rw-qstatus-text" }, R_ = { class: "rw-nowrap" }, z_ = { class: "num" }, B_ = { class: "rw-col-actions" }, V_ = { class: "rw-actions" }, H_ = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "QuotesView",
	setup(e) {
		let r = ot(), i = kp(), a = y(""), o = [
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
		], s = y("all"), c = (e) => e.quoteStatus === "open" || e.quoteStatus === "expired", l = L(() => {
			let e = {
				all: i.quotes.length,
				open: 0,
				accepted: 0,
				rejected: 0,
				converted: 0
			};
			for (let t of i.quotes) c(t) && e.open++, t.quoteStatus === "accepted" && e.accepted++, t.quoteStatus === "rejected" && e.rejected++, t.quoteStatus === "converted" && e.converted++;
			return e;
		}), u = L(() => {
			switch (s.value) {
				case "open": return i.quotes.filter(c);
				case "accepted": return i.quotes.filter((e) => e.quoteStatus === "accepted");
				case "rejected": return i.quotes.filter((e) => e.quoteStatus === "rejected");
				case "converted": return i.quotes.filter((e) => e.quoteStatus === "converted");
				default: return i.quotes;
			}
		}), d = (e) => e.status === "committed" && (e.quoteStatus === "open" || e.quoteStatus === "expired" || e.quoteStatus === "accepted"), f = {
			draft: kc,
			open: qc,
			expired: T_,
			accepted: Vc,
			rejected: Fc,
			converted: bd,
			superseded: Ed
		}, p = (e) => e ? f[e] ?? kc : kc, m = (e) => e ? T("rechnungswerk", nu[e] ?? e) : "";
		function h(e) {
			return e ? (e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e)).toLocaleDateString() : "—";
		}
		Pe(() => {
			i.fetchAll().catch((e) => {
				a.value = e.message ?? T("rechnungswerk", "Laden fehlgeschlagen");
			});
		});
		function g() {
			r.push({ name: "quote-new" });
		}
		function v(e) {
			r.push({
				name: "quote-detail",
				params: { id: String(e) }
			});
		}
		function b(e) {
			Dp(e);
		}
		async function x(e) {
			a.value = "";
			try {
				let t = await i.convert(e);
				r.push({
					name: "invoice-detail",
					params: { id: String(t.id) }
				});
			} catch (e) {
				a.value = e.message ?? T("rechnungswerk", "Übernahme fehlgeschlagen");
			}
		}
		return (e, r) => (Z(), H("div", E_, [
			z("div", D_, [z("h2", null, Y(t(T)("rechnungswerk", "Angebote")), 1), J(t(G), {
				variant: "primary",
				onClick: g
			}, {
				icon: _(() => [J(dc, { size: 20 })]),
				default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Neues Angebot")), 1)]),
				_: 1
			})]),
			a.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: a.value
			}, null, 8, ["text"])) : n("", !0),
			!t(i).loading && t(i).quotes.length === 0 ? (Z(), N(t(Re), {
				key: 1,
				name: t(T)("rechnungswerk", "Noch keine Angebote"),
				description: t(T)("rechnungswerk", "Lege dein erstes Angebot an.")
			}, {
				icon: _(() => [J(Ra, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(i).quotes.length > 0 ? (Z(), H("div", O_, [z("div", k_, [(Z(), H(E, null, X(o, (e) => z("button", {
				key: e.key,
				class: U(["rw-chip", { "rw-chip--active": s.value === e.key }]),
				onClick: (t) => s.value = e.key
			}, [q(Y(t(T)("rechnungswerk", e.label)) + " ", 1), z("span", j_, Y(l.value[e.key]), 1)], 10, A_)), 64))]), z("div", M_, [z("table", N_, [z("thead", null, [z("tr", null, [
				z("th", null, Y(t(T)("rechnungswerk", "Status")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Nummer")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Empfänger")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Datum")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Gültig bis")), 1),
				z("th", P_, Y(t(T)("rechnungswerk", "Brutto")), 1),
				r[0] ||= z("th", { class: "rw-col-actions" }, null, -1)
			])]), z("tbody", null, [(Z(!0), H(E, null, X(u.value, (e) => (Z(), H("tr", {
				key: e.id,
				class: U(["rw-row-clickable", { "rw-row--overdue": e.quoteStatus === "expired" }]),
				onClick: (t) => v(e.id)
			}, [
				z("td", null, [z("span", I_, [(Z(), N(ye(p(e.quoteStatus)), {
					size: 20,
					class: U(["rw-sicon", `rw-qsicon--${e.quoteStatus}`]),
					title: m(e.quoteStatus)
				}, null, 8, ["class", "title"])), z("span", L_, Y(m(e.quoteStatus)), 1)])]),
				z("td", R_, Y(e.number ?? t(T)("rechnungswerk", "(Entwurf)")), 1),
				z("td", null, Y(e.recipientName ?? "—"), 1),
				z("td", null, Y(h(e.issueDate ?? e.createdAt)), 1),
				z("td", null, [z("span", { class: U({ "rw-amt-overdue": e.quoteStatus === "expired" }) }, Y(h(e.validUntil)), 3)]),
				z("td", z_, Y(t(fu)(e.totalCents)), 1),
				z("td", B_, [z("div", V_, [d(e) ? (Z(), N(t(G), {
					key: 0,
					variant: "tertiary",
					"aria-label": t(T)("rechnungswerk", "In Rechnung übernehmen"),
					title: t(T)("rechnungswerk", "In Rechnung übernehmen"),
					onClick: bt((t) => x(e.id), ["stop"])
				}, {
					icon: _(() => [J(bd, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])) : n("", !0), e.status === "draft" ? n("", !0) : (Z(), N(t(G), {
					key: 1,
					variant: "tertiary",
					"aria-label": t(T)("rechnungswerk", "PDF herunterladen"),
					title: t(T)("rechnungswerk", "PDF herunterladen"),
					onClick: bt((t) => b(e.id), ["stop"])
				}, {
					icon: _(() => [J(_c, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				]))])])
			], 10, F_))), 128))])])])])) : n("", !0)
		]));
	}
}), [["__scopeId", "data-v-11203555"]]), U_ = { class: "product-modal" }, W_ = { class: "field" }, G_ = { class: "field" }, K_ = { class: "field-row" }, q_ = { class: "field" }, J_ = ["value"], Y_ = { class: "field" }, X_ = { class: "field" }, Z_ = ["value"], Q_ = { class: "field" }, $_ = ["placeholder"], ev = { class: "hint" }, tv = { class: "actions" }, nv = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "ProductEditModal",
	props: {
		open: { type: Boolean },
		product: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: r }) {
		let i = e, a = r, o = y(null), s = Oe({
			name: "",
			description: "",
			defaultUnitCode: "C62",
			defaultUnitLabel: "",
			defaultTaxRateBp: 1900
		}), c = y("0,00");
		function l() {
			ou(c.value) !== null && (c.value = lu(uu(c.value)));
		}
		let u = L(() => i.product ? T("rechnungswerk", "Produkt bearbeiten") : T("rechnungswerk", "Produkt anlegen")), d = L(() => s.name.trim() !== "");
		A(() => i.open, (e) => {
			if (!e) return;
			let t = i.product;
			s.name = t?.name ?? "", s.description = t?.description ?? "", s.defaultUnitCode = t?.defaultUnitCode ?? "C62", s.defaultUnitLabel = t?.defaultUnitLabel ?? "", s.defaultTaxRateBp = t?.defaultTaxRateBp ?? 1900, c.value = lu(t?.defaultPriceE4 ?? 0), qe(() => o.value?.focus());
		}, { immediate: !0 });
		function f() {
			d.value && a("save", {
				name: s.name.trim(),
				description: s.description.trim() === "" ? null : s.description.trim(),
				defaultUnitCode: s.defaultUnitCode,
				defaultUnitLabel: s.defaultUnitLabel.trim() === "" ? null : s.defaultUnitLabel.trim(),
				defaultPriceInput: c.value,
				defaultTaxRateBp: s.defaultTaxRateBp
			});
		}
		return (r, i) => e.open ? (Z(), N(t(Ne), {
			key: 0,
			name: u.value,
			onKeydown: i[7] ||= O((e) => t(Ts)(e, () => r.$emit("close")), ["esc"]),
			onClose: i[8] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [z("div", U_, [
				z("h2", null, Y(u.value), 1),
				z("label", W_, [z("span", null, Y(t(T)("rechnungswerk", "Name")) + " *", 1), w(z("input", {
					ref_key: "nameInput",
					ref: o,
					"onUpdate:modelValue": i[0] ||= (e) => s.name = e,
					class: "input",
					type: "text"
				}, null, 512), [[I, s.name]])]),
				z("label", G_, [z("span", null, Y(t(T)("rechnungswerk", "Beschreibung")), 1), w(z("textarea", {
					"onUpdate:modelValue": i[1] ||= (e) => s.description = e,
					class: "input",
					rows: "2"
				}, null, 512), [[I, s.description]])]),
				z("div", K_, [
					z("label", q_, [z("span", null, Y(t(T)("rechnungswerk", "Einheit")), 1), w(z("select", {
						"onUpdate:modelValue": i[2] ||= (e) => s.defaultUnitCode = e,
						class: "input"
					}, [(Z(!0), H(E, null, X(t(Jl), (e) => (Z(), H("option", {
						key: e,
						value: e
					}, Y(t(T)("rechnungswerk", t(Yl)[e])), 9, J_))), 128))], 512), [[Ce, s.defaultUnitCode]])]),
					z("label", Y_, [z("span", null, Y(t(T)("rechnungswerk", "Standard-Preis (€)")), 1), w(z("input", {
						"onUpdate:modelValue": i[3] ||= (e) => c.value = e,
						class: "input",
						type: "text",
						inputmode: "decimal",
						onBlur: l
					}, null, 544), [[I, c.value]])]),
					z("label", X_, [z("span", null, Y(t(T)("rechnungswerk", "USt-Satz")), 1), w(z("select", {
						"onUpdate:modelValue": i[4] ||= (e) => s.defaultTaxRateBp = e,
						class: "input"
					}, [(Z(!0), H(E, null, X(t(Xl), (e) => (Z(), H("option", {
						key: e,
						value: e
					}, Y(t(pu)(e)), 9, Z_))), 128))], 512), [[
						Ce,
						s.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])])
				]),
				z("label", Q_, [
					z("span", null, Y(t(T)("rechnungswerk", "Eigene Einheit (optional)")), 1),
					w(z("input", {
						"onUpdate:modelValue": i[5] ||= (e) => s.defaultUnitLabel = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: t(T)("rechnungswerk", "z. B. Personen, Sitzung")
					}, null, 8, $_), [[I, s.defaultUnitLabel]]),
					z("span", ev, Y(t(T)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF. In der E-Rechnung wird die Einheit generisch (Stück) abgebildet, damit sie gültig bleibt.")), 1)
				]),
				z("div", tv, [J(t(G), { onClick: i[6] ||= (e) => r.$emit("close") }, {
					default: _(() => [q(Y(t(T)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(t(G), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					default: _(() => [q(Y(t(T)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-b3908c2c"]]), rv = { class: "rw-view" }, iv = { class: "rw-view__head" }, av = {
	key: 2,
	class: "rw-table-wrap"
}, ov = { class: "rw-table" }, sv = { class: "num" }, cv = { class: "num" }, lv = ["onClick"], uv = {
	key: 0,
	class: "rw-muted"
}, dv = { class: "num" }, fv = { class: "num" }, pv = { class: "rw-col-actions" }, mv = { class: "rw-actions" }, hv = /* @__PURE__ */ W({
	__name: "ProductsView",
	setup(e) {
		let r = Pp(), i = y(!1), a = y(null), o = y(null), s = y(""), c = (e) => Yl[e] ?? e;
		function l(e, t) {
			let n = e.message ?? t;
			s.value = n, console.error("[rechnungswerk] products:", e);
		}
		Pe(() => {
			r.fetchAll().catch((e) => l(e, T("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function u() {
			a.value = null, i.value = !0;
		}
		function d(e) {
			a.value = e, i.value = !0;
		}
		async function f(e) {
			s.value = "";
			try {
				a.value ? await r.update(a.value.id, e) : await r.create(e), i.value = !1;
			} catch (e) {
				l(e, T("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function p(e) {
			o.value = e;
		}
		async function m() {
			let e = o.value;
			if (o.value = null, e) {
				s.value = "";
				try {
					await r.remove(e.id);
				} catch (e) {
					l(e, T("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, l) => (Z(), H("div", rv, [
			z("div", iv, [z("h2", null, Y(t(T)("rechnungswerk", "Produkte")), 1), J(t(G), {
				variant: "primary",
				onClick: u
			}, {
				icon: _(() => [J(dc, { size: 20 })]),
				default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Produkt anlegen")), 1)]),
				_: 1
			})]),
			s.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: s.value
			}, null, 8, ["text"])) : n("", !0),
			!t(r).loading && t(r).products.length === 0 ? (Z(), N(t(Re), {
				key: 1,
				name: t(T)("rechnungswerk", "Noch keine Produkte"),
				description: t(T)("rechnungswerk", "Pflege wiederkehrende Leistungen, um sie schnell in Rechnungen zu übernehmen.")
			}, {
				icon: _(() => [J(no, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(r).products.length > 0 ? (Z(), H("div", av, [z("table", ov, [z("thead", null, [z("tr", null, [
				z("th", null, Y(t(T)("rechnungswerk", "Name")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Einheit")), 1),
				z("th", sv, Y(t(T)("rechnungswerk", "Preis")), 1),
				z("th", cv, Y(t(T)("rechnungswerk", "USt")), 1),
				l[2] ||= z("th", { class: "num" }, null, -1)
			])]), z("tbody", null, [(Z(!0), H(E, null, X(t(r).products, (e) => (Z(), H("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => d(e)
			}, [
				z("td", null, [q(Y(e.name) + " ", 1), e.description ? (Z(), H("div", uv, Y(e.description), 1)) : n("", !0)]),
				z("td", null, Y(e.defaultUnitLabel || t(T)("rechnungswerk", c(e.defaultUnitCode))), 1),
				z("td", dv, Y(t(du)(e.defaultPriceE4)), 1),
				z("td", fv, Y(t(pu)(e.defaultTaxRateBp)), 1),
				z("td", pv, [z("div", mv, [J(t(G), {
					variant: "tertiary",
					"aria-label": t(T)("rechnungswerk", "Löschen"),
					title: t(T)("rechnungswerk", "Löschen"),
					onClick: bt((t) => p(e), ["stop"])
				}, {
					icon: _(() => [J(nd, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, lv))), 128))])])])) : n("", !0),
			J(nv, {
				open: i.value,
				product: a.value,
				saving: t(r).loading,
				onClose: l[0] ||= (e) => i.value = !1,
				onSave: f
			}, null, 8, [
				"open",
				"product",
				"saving"
			]),
			J(Wf, {
				open: o.value !== null,
				name: t(T)("rechnungswerk", "Produkt löschen"),
				message: o.value ? t(T)("rechnungswerk", "„{name}“ wirklich löschen?", { name: o.value.name }) : "",
				confirmLabel: t(T)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: l[1] ||= (e) => o.value = null,
				onConfirm: m
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), gv = {
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
}, _v = ["aria-hidden", "aria-label"], vv = [
	"fill",
	"width",
	"height"
], yv = { key: 0 };
function bv(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon star-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", yv, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, null, -1)], 8, vv))], 16, _v);
}
var xv = /*#__PURE__*/ Q(gv, [["render", bv]]), Sv = { class: "snippet-modal" }, Cv = { class: "field" }, wv = ["placeholder"], Tv = { class: "field-row" }, Ev = { class: "field" }, Dv = ["value"], Ov = { class: "field" }, kv = ["value"], Av = { class: "field" }, jv = { class: "hint" }, Mv = { class: "actions" }, Nv = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "TextSnippetEditModal",
	props: {
		open: { type: Boolean },
		snippet: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: r }) {
		let i = ["invoice", "quote"], a = ["opening", "closing"], o = e, s = r, c = y(null), l = Oe({
			label: "",
			docType: "invoice",
			slot: "opening",
			content: "",
			isDefault: !1
		}), u = L(() => o.snippet ? T("rechnungswerk", "Textbaustein bearbeiten") : T("rechnungswerk", "Textbaustein anlegen")), d = L(() => l.label.trim() !== "");
		A(() => o.open, (e) => {
			if (!e) return;
			let t = o.snippet;
			l.label = t?.label ?? "", l.docType = t?.docType ?? "invoice", l.slot = t?.slot ?? "opening", l.content = t?.content ?? "", l.isDefault = t?.isDefault ?? !1, qe(() => c.value?.focus());
		}, { immediate: !0 });
		function f() {
			d.value && s("save", {
				label: l.label.trim(),
				docType: l.docType,
				slot: l.slot,
				content: l.content.trim() === "" ? null : l.content,
				isDefault: l.isDefault
			});
		}
		return (r, o) => e.open ? (Z(), N(t(Ne), {
			key: 0,
			name: u.value,
			onKeydown: o[6] ||= O((e) => t(Ts)(e, () => r.$emit("close")), ["esc"]),
			onClose: o[7] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [z("div", Sv, [
				z("h2", null, Y(u.value), 1),
				z("label", Cv, [z("span", null, Y(t(T)("rechnungswerk", "Name")) + " *", 1), w(z("input", {
					ref_key: "nameInput",
					ref: c,
					"onUpdate:modelValue": o[0] ||= (e) => l.label = e,
					class: "input",
					type: "text",
					placeholder: t(T)("rechnungswerk", "z. B. Neukunde, Mahnfreundlich")
				}, null, 8, wv), [[I, l.label]])]),
				z("div", Tv, [z("label", Ev, [z("span", null, Y(t(T)("rechnungswerk", "Dokument")), 1), w(z("select", {
					"onUpdate:modelValue": o[1] ||= (e) => l.docType = e,
					class: "input"
				}, [(Z(), H(E, null, X(i, (e) => z("option", {
					key: e,
					value: e
				}, Y(t(T)("rechnungswerk", t(Ql)[e])), 9, Dv)), 64))], 512), [[Ce, l.docType]])]), z("label", Ov, [z("span", null, Y(t(T)("rechnungswerk", "Textbereich")), 1), w(z("select", {
					"onUpdate:modelValue": o[2] ||= (e) => l.slot = e,
					class: "input"
				}, [(Z(), H(E, null, X(a, (e) => z("option", {
					key: e,
					value: e
				}, Y(t(T)("rechnungswerk", t($l)[e])), 9, kv)), 64))], 512), [[Ce, l.slot]])])]),
				z("label", Av, [z("span", null, Y(t(T)("rechnungswerk", "Text")), 1), w(z("textarea", {
					"onUpdate:modelValue": o[3] ||= (e) => l.content = e,
					class: "input",
					rows: "6"
				}, null, 512), [[I, l.content]])]),
				J(t(Ke), {
					modelValue: l.isDefault,
					"onUpdate:modelValue": o[4] ||= (e) => l.isDefault = e
				}, {
					default: _(() => [q(Y(t(T)("rechnungswerk", "Als Standard für neue Dokumente verwenden")), 1)]),
					_: 1
				}, 8, ["modelValue"]),
				z("p", jv, Y(t(T)("rechnungswerk", "Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.")), 1),
				z("div", Mv, [J(t(G), { onClick: o[5] ||= (e) => r.$emit("close") }, {
					default: _(() => [q(Y(t(T)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(t(G), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					default: _(() => [q(Y(t(T)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-ae47764f"]]), Pv = { class: "rw-view" }, Fv = { class: "rw-view__head" }, Iv = { class: "rw-muted rw-intro" }, Lv = {
	key: 2,
	class: "rw-snippet-groups"
}, Rv = { class: "rw-snippet-group__head" }, zv = { class: "rw-table-wrap" }, Bv = { class: "rw-table" }, Vv = ["onClick"], Hv = {
	key: 0,
	class: "rw-muted rw-snippet-content"
}, Uv = { class: "rw-snippet-actions" }, Wv = { class: "rw-actions" }, Gv = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "TextSnippetsView",
	setup(e) {
		let r = Bp(), i = ["invoice", "quote"], a = ["opening", "closing"], o = L(() => {
			let e = [];
			for (let t of i) for (let n of a) {
				let i = r.snippets.filter((e) => e.docType === t && e.slot === n).sort((e, t) => Number(t.isDefault) - Number(e.isDefault) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
				i.length > 0 && e.push({
					key: `${t}-${n}`,
					docType: t,
					slot: n,
					items: i
				});
			}
			return e;
		}), s = y(!1), c = y(null), l = y(null), u = y("");
		function d(e, t) {
			let n = e.message ?? t;
			u.value = n, console.error("[rechnungswerk] text-snippets:", e);
		}
		Pe(() => {
			r.fetchAll().catch((e) => d(e, T("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function f() {
			c.value = null, s.value = !0;
		}
		function p(e) {
			c.value = e, s.value = !0;
		}
		async function m(e) {
			if (!e.isDefault) {
				u.value = "";
				try {
					await r.update(e.id, { isDefault: !0 });
				} catch (e) {
					d(e, T("rechnungswerk", "Speichern fehlgeschlagen"));
				}
			}
		}
		async function h(e) {
			u.value = "";
			try {
				c.value ? await r.update(c.value.id, e) : await r.create(e), s.value = !1;
			} catch (e) {
				d(e, T("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function g(e) {
			l.value = e;
		}
		async function v() {
			let e = l.value;
			if (l.value = null, e) {
				u.value = "";
				try {
					await r.remove(e.id);
				} catch (e) {
					d(e, T("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, i) => (Z(), H("div", Pv, [
			z("div", Fv, [z("h2", null, Y(t(T)("rechnungswerk", "Textbausteine")), 1), J(t(G), {
				variant: "primary",
				onClick: f
			}, {
				icon: _(() => [J(dc, { size: 20 })]),
				default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Textbaustein anlegen")), 1)]),
				_: 1
			})]),
			z("p", Iv, Y(t(T)("rechnungswerk", "Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.")), 1),
			u.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : n("", !0),
			!t(r).loading && t(r).snippets.length === 0 ? (Z(), N(t(Re), {
				key: 1,
				name: t(T)("rechnungswerk", "Noch keine Textbausteine"),
				description: t(T)("rechnungswerk", "Lege wiederkehrende Einleitungs- und Schlusstexte an, um sie schnell in Dokumente zu übernehmen.")
			}, {
				icon: _(() => [J(co, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(r).snippets.length > 0 ? (Z(), H("div", Lv, [(Z(!0), H(E, null, X(o.value, (e) => (Z(), H("section", {
				key: e.key,
				class: "rw-snippet-group"
			}, [z("h3", Rv, [
				q(Y(t(T)("rechnungswerk", t(Ql)[e.docType])) + " ", 1),
				i[2] ||= z("span", { class: "rw-snippet-group__sep" }, "–", -1),
				q(" " + Y(t(T)("rechnungswerk", t($l)[e.slot])), 1)
			]), z("div", zv, [z("table", Bv, [z("tbody", null, [(Z(!0), H(E, null, X(e.items, (e) => (Z(), H("tr", {
				key: e.id,
				class: "rw-row-clickable rw-snippet-row",
				onClick: (t) => p(e)
			}, [z("td", null, [z("strong", null, Y(e.label), 1), e.content ? (Z(), H("div", Hv, Y(e.content), 1)) : n("", !0)]), z("td", Uv, [z("div", Wv, [J(t(G), {
				variant: "tertiary",
				"aria-label": e.isDefault ? t(T)("rechnungswerk", "Standard-Vorlage") : t(T)("rechnungswerk", "Als Standard festlegen"),
				title: e.isDefault ? t(T)("rechnungswerk", "Standard-Vorlage") : t(T)("rechnungswerk", "Als Standard festlegen"),
				onClick: bt((t) => m(e), ["stop"])
			}, {
				icon: _(() => [e.isDefault ? (Z(), N(ls, {
					key: 0,
					size: 20,
					class: "rw-star rw-star--active"
				})) : (Z(), N(xv, {
					key: 1,
					size: 20,
					class: "rw-star"
				}))]),
				_: 2
			}, 1032, [
				"aria-label",
				"title",
				"onClick"
			]), J(t(G), {
				variant: "tertiary",
				"aria-label": t(T)("rechnungswerk", "Löschen"),
				title: t(T)("rechnungswerk", "Löschen"),
				onClick: bt((t) => g(e), ["stop"])
			}, {
				icon: _(() => [J(nd, { size: 20 })]),
				_: 1
			}, 8, [
				"aria-label",
				"title",
				"onClick"
			])])])], 8, Vv))), 128))])])])]))), 128))])) : n("", !0),
			J(Nv, {
				open: s.value,
				snippet: c.value,
				saving: t(r).loading,
				onClose: i[0] ||= (e) => s.value = !1,
				onSave: h
			}, null, 8, [
				"open",
				"snippet",
				"saving"
			]),
			J(Wf, {
				open: l.value !== null,
				name: t(T)("rechnungswerk", "Textbaustein löschen"),
				message: l.value ? t(T)("rechnungswerk", "„{name}“ wirklich löschen?", { name: l.value.label }) : "",
				confirmLabel: t(T)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: i[1] ||= (e) => l.value = null,
				onConfirm: v
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-e218386d"]]), Kv = {
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
}, qv = ["aria-hidden", "aria-label"], Jv = [
	"fill",
	"width",
	"height"
], Yv = { key: 0 };
function Xv(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon account-arrow-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Yv, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14" }, null, -1)], 8, Jv))], 16, qv);
}
var Zv = /*#__PURE__*/ Q(Kv, [["render", Xv]]), Qv = { class: "customer-modal" }, $v = { class: "form-section" }, ey = { class: "row" }, ty = { class: "field" }, ny = { class: "field" }, ry = { class: "row" }, iy = { class: "field" }, ay = { class: "form-section" }, oy = { class: "field" }, sy = ["placeholder"], cy = { class: "hint" }, ly = { class: "field" }, uy = { class: "row" }, dy = { class: "field" }, fy = { class: "field" }, py = { class: "row" }, my = { class: "field" }, hy = { class: "form-section" }, gy = { class: "row" }, _y = { class: "field" }, vy = { class: "field" }, yy = { class: "field" }, by = { class: "form-section" }, xy = { class: "field" }, Sy = { class: "row" }, Cy = { class: "field" }, wy = { class: "field" }, Ty = { class: "field" }, Ey = { class: "form-section" }, Dy = { class: "row" }, Oy = { class: "field" }, ky = { class: "field" }, Ay = { value: "" }, jy = ["value"], My = { class: "field" }, Ny = { class: "actions" }, Py = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "CustomerEditModal",
	props: {
		open: { type: Boolean },
		customer: {},
		saving: { type: Boolean },
		takenNumbers: {},
		prefill: {}
	},
	emits: ["close", "save"],
	setup(e, { emit: r }) {
		let i = e, a = r, o = y(null), s = () => ({
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
		}), c = Oe(s()), l = y(""), u = y(""), d = L(() => i.customer ? T("rechnungswerk", "Kunde bearbeiten") : T("rechnungswerk", "Kunde anlegen")), f = L(() => {
			let e = c.customerNumber.trim().toLowerCase();
			return e !== "" && (i.takenNumbers ?? []).includes(e);
		}), p = L(() => c.customerNumber.trim() !== "" && c.name.trim() !== "" && !f.value);
		A(() => i.open, (e) => {
			if (!e) return;
			let t = i.customer;
			Object.assign(c, s()), t ? (c.customerNumber = t.customerNumber ?? "", c.name = t.name ?? "", c.vatId = t.vatId ?? "", c.addressAddition = t.addressAddition ?? "", c.address = t.address ?? "", c.postalCode = t.postalCode ?? "", c.city = t.city ?? "", c.country = t.country ?? "DE", c.contactPerson = t.contactPerson ?? "", c.phone = t.phone ?? "", c.email = t.email ?? "", c.bankAccountHolder = t.bankAccountHolder ?? "", c.iban = t.iban ?? "", c.bic = t.bic ?? "", c.bankName = t.bankName ?? "", c.note = t.note ?? "", l.value = t.defaultPaymentTermDays == null ? "" : String(t.defaultPaymentTermDays), u.value = t.defaultTaxRateBp == null ? "" : String(t.defaultTaxRateBp)) : i.prefill && Object.assign(c, {
				...s(),
				...m(i.prefill)
			}), qe(() => o.value?.focus());
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
		function g() {
			p.value && a("save", {
				customerNumber: c.customerNumber.trim(),
				name: c.name.trim(),
				vatId: h(c.vatId),
				addressAddition: h(c.addressAddition),
				address: h(c.address),
				postalCode: h(c.postalCode),
				city: h(c.city),
				country: c.country.trim() === "" ? "DE" : c.country.trim().toUpperCase(),
				contactPerson: h(c.contactPerson),
				phone: h(c.phone),
				email: h(c.email),
				bankAccountHolder: h(c.bankAccountHolder),
				iban: h(c.iban),
				bic: h(c.bic),
				bankName: h(c.bankName),
				defaultPaymentTermDays: String(l.value).trim() === "" ? null : Math.max(0, Number(l.value)),
				defaultTaxRateBp: u.value === "" ? null : Number(u.value),
				note: h(c.note)
			});
		}
		return (r, i) => e.open ? (Z(), N(t(Ne), {
			key: 0,
			name: d.value,
			onKeydown: i[19] ||= O((e) => t(Ts)(e, () => r.$emit("close")), ["esc"]),
			onClose: i[20] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [z("div", Qv, [
				z("h2", null, Y(d.value), 1),
				z("div", $v, [
					z("h3", null, Y(t(T)("rechnungswerk", "Stammdaten")), 1),
					z("div", ey, [z("label", ty, [z("span", null, Y(t(T)("rechnungswerk", "Kundennr.")) + " *", 1), w(z("input", {
						ref_key: "numberInput",
						ref: o,
						"onUpdate:modelValue": i[0] ||= (e) => c.customerNumber = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.customerNumber]])]), z("label", ny, [z("span", null, Y(t(T)("rechnungswerk", "Name / Firma")) + " *", 1), w(z("input", {
						"onUpdate:modelValue": i[1] ||= (e) => c.name = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.name]])])]),
					f.value ? (Z(), N(t($), {
						key: 0,
						type: "error",
						text: t(T)("rechnungswerk", "Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.", { number: c.customerNumber.trim() })
					}, null, 8, ["text"])) : n("", !0),
					z("div", ry, [z("label", iy, [z("span", null, Y(t(T)("rechnungswerk", "USt-IdNr.")), 1), w(z("input", {
						"onUpdate:modelValue": i[2] ||= (e) => c.vatId = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.vatId]])])])
				]),
				z("div", ay, [
					z("h3", null, Y(t(T)("rechnungswerk", "Anschrift")), 1),
					z("label", oy, [
						z("span", null, Y(t(T)("rechnungswerk", "Adresszusatz")), 1),
						w(z("input", {
							"onUpdate:modelValue": i[3] ||= (e) => c.addressAddition = e,
							class: "input",
							type: "text",
							placeholder: t(T)("rechnungswerk", "z. Hd. Frau Meyer, Gebäude B, c/o\xA0…")
						}, null, 8, sy), [[I, c.addressAddition]]),
						z("span", cy, Y(t(T)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					]),
					z("label", ly, [z("span", null, Y(t(T)("rechnungswerk", "Straße & Hausnummer")), 1), w(z("input", {
						"onUpdate:modelValue": i[4] ||= (e) => c.address = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.address]])]),
					z("div", uy, [z("label", dy, [z("span", null, Y(t(T)("rechnungswerk", "PLZ")), 1), w(z("input", {
						"onUpdate:modelValue": i[5] ||= (e) => c.postalCode = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.postalCode]])]), z("label", fy, [z("span", null, Y(t(T)("rechnungswerk", "Ort")), 1), w(z("input", {
						"onUpdate:modelValue": i[6] ||= (e) => c.city = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.city]])])]),
					z("div", py, [z("label", my, [z("span", null, Y(t(T)("rechnungswerk", "Land")), 1), J(Bd, {
						modelValue: c.country,
						"onUpdate:modelValue": i[7] ||= (e) => c.country = e,
						selectClass: "input"
					}, null, 8, ["modelValue"])])])
				]),
				z("div", hy, [
					z("h3", null, Y(t(T)("rechnungswerk", "Ansprechpartner & Kontakt")), 1),
					z("div", gy, [z("label", _y, [z("span", null, Y(t(T)("rechnungswerk", "Ansprechpartner")), 1), w(z("input", {
						"onUpdate:modelValue": i[8] ||= (e) => c.contactPerson = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.contactPerson]])]), z("label", vy, [z("span", null, Y(t(T)("rechnungswerk", "Telefon")), 1), w(z("input", {
						"onUpdate:modelValue": i[9] ||= (e) => c.phone = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.phone]])])]),
					z("label", yy, [z("span", null, Y(t(T)("rechnungswerk", "E-Mail (für Rechnungsversand)")), 1), w(z("input", {
						"onUpdate:modelValue": i[10] ||= (e) => c.email = e,
						class: "input",
						type: "email"
					}, null, 512), [[I, c.email]])])
				]),
				z("div", by, [
					z("h3", null, Y(t(T)("rechnungswerk", "Bankverbindung")), 1),
					z("label", xy, [z("span", null, Y(t(T)("rechnungswerk", "Kontoinhaber")), 1), w(z("input", {
						"onUpdate:modelValue": i[11] ||= (e) => c.bankAccountHolder = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.bankAccountHolder]])]),
					z("div", Sy, [z("label", Cy, [z("span", null, Y(t(T)("rechnungswerk", "IBAN")), 1), w(z("input", {
						"onUpdate:modelValue": i[12] ||= (e) => c.iban = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.iban]])]), z("label", wy, [z("span", null, Y(t(T)("rechnungswerk", "BIC")), 1), w(z("input", {
						"onUpdate:modelValue": i[13] ||= (e) => c.bic = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.bic]])])]),
					z("label", Ty, [z("span", null, Y(t(T)("rechnungswerk", "Bank")), 1), w(z("input", {
						"onUpdate:modelValue": i[14] ||= (e) => c.bankName = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.bankName]])])
				]),
				z("div", Ey, [
					z("h3", null, Y(t(T)("rechnungswerk", "Vorgaben für neue Rechnungen")), 1),
					z("div", Dy, [z("label", Oy, [z("span", null, Y(t(T)("rechnungswerk", "Zahlungsziel (Tage)")), 1), w(z("input", {
						"onUpdate:modelValue": i[15] ||= (e) => l.value = e,
						class: "input",
						type: "number",
						min: "0",
						inputmode: "numeric"
					}, null, 512), [[I, l.value]])]), z("label", ky, [z("span", null, Y(t(T)("rechnungswerk", "Standard-Steuersatz")), 1), w(z("select", {
						"onUpdate:modelValue": i[16] ||= (e) => u.value = e,
						class: "input"
					}, [z("option", Ay, Y(t(T)("rechnungswerk", "— keine Vorgabe —")), 1), (Z(!0), H(E, null, X(t(Xl), (e) => (Z(), H("option", {
						key: e,
						value: String(e)
					}, Y(t(pu)(e)), 9, jy))), 128))], 512), [[Ce, u.value]])])]),
					z("label", My, [z("span", null, Y(t(T)("rechnungswerk", "Notiz (intern, nicht auf der Rechnung)")), 1), w(z("textarea", {
						"onUpdate:modelValue": i[17] ||= (e) => c.note = e,
						class: "input",
						rows: "2"
					}, null, 512), [[I, c.note]])])
				]),
				z("div", Ny, [J(t(G), { onClick: i[18] ||= (e) => r.$emit("close") }, {
					default: _(() => [q(Y(t(T)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(t(G), {
					variant: "primary",
					disabled: e.saving || !p.value,
					onClick: g
				}, {
					default: _(() => [q(Y(t(T)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-f77cf557"]]), Fy = { class: "rw-view" }, Iy = { class: "rw-view__head" }, Ly = { class: "rw-view__actions" }, Ry = {
	key: 2,
	class: "rw-table-wrap"
}, zy = { class: "rw-table" }, By = ["onClick"], Vy = { class: "rw-muted" }, Hy = {
	key: 0,
	class: "rw-muted"
}, Uy = { class: "rw-col-actions" }, Wy = { class: "rw-actions" }, Gy = { class: "rw-import" }, Ky = { class: "rw-muted" }, qy = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "CustomersView",
	setup(e) {
		let r = Gd(), i = y(!1), a = y(null), o = y(null), s = y(null), c = y(!1), l = y(""), u = y(""), d = y(!1), f = L(() => r.customers.filter((e) => e.id !== a.value?.id).map((e) => e.customerNumber.trim().toLowerCase()));
		function p(e, t) {
			u.value = e.message ?? t, console.error("[rechnungswerk] customers:", e);
		}
		Pe(() => {
			r.fetchAll().catch((e) => p(e, T("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function m() {
			a.value = null, o.value = null, i.value = !0;
		}
		function h(e) {
			a.value = e, o.value = null, i.value = !0;
		}
		function g() {
			l.value = "", c.value = !0;
		}
		function v(e) {
			c.value = !1, a.value = null, o.value = {
				name: e.name,
				email: e.email || null,
				phone: e.phone || null,
				address: e.address || null,
				postalCode: e.postalCode || null,
				city: e.city || null,
				country: e.country || "DE"
			}, i.value = !0;
		}
		async function b(e) {
			u.value = "", d.value = !0;
			try {
				a.value ? await r.update(a.value.id, e) : await r.create(e), i.value = !1, o.value = null;
			} catch (e) {
				p(e, T("rechnungswerk", "Speichern fehlgeschlagen"));
			} finally {
				d.value = !1;
			}
		}
		function x(e) {
			s.value = e;
		}
		async function S() {
			let e = s.value;
			if (s.value = null, e) {
				u.value = "";
				try {
					await r.remove(e.id);
				} catch (e) {
					p(e, T("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, p) => (Z(), H("div", Fy, [
			z("div", Iy, [z("h2", null, Y(t(T)("rechnungswerk", "Kunden")), 1), z("div", Ly, [J(t(G), { onClick: g }, {
				icon: _(() => [J(Zv, { size: 20 })]),
				default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Aus Kontakten importieren")), 1)]),
				_: 1
			}), J(t(G), {
				variant: "primary",
				onClick: m
			}, {
				icon: _(() => [J(dc, { size: 20 })]),
				default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Neuer Kunde")), 1)]),
				_: 1
			})])]),
			u.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : n("", !0),
			!t(r).loading && t(r).customers.length === 0 ? (Z(), N(t(Re), {
				key: 1,
				name: t(T)("rechnungswerk", "Noch keine Kunden"),
				description: t(T)("rechnungswerk", "Lege Kunden an oder übernimm sie aus deinen Nextcloud-Kontakten, um sie schnell in Rechnungen auszuwählen.")
			}, {
				icon: _(() => [J(Wa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(r).customers.length > 0 ? (Z(), H("div", Ry, [z("table", zy, [z("thead", null, [z("tr", null, [
				z("th", null, Y(t(T)("rechnungswerk", "Kundennr.")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Kunde")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Ort")), 1),
				p[5] ||= z("th", { class: "num" }, null, -1)
			])]), z("tbody", null, [(Z(!0), H(E, null, X(t(r).customers, (e) => (Z(), H("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => h(e)
			}, [
				z("td", Vy, Y(e.customerNumber), 1),
				z("td", null, [q(Y(e.name) + " ", 1), e.contactPerson || e.vatId ? (Z(), H("div", Hy, Y([e.contactPerson, e.vatId].filter(Boolean).join(" · ")), 1)) : n("", !0)]),
				z("td", null, Y([e.postalCode, e.city].filter(Boolean).join(" ")), 1),
				z("td", Uy, [z("div", Wy, [J(t(G), {
					variant: "tertiary",
					"aria-label": t(T)("rechnungswerk", "Löschen"),
					title: t(T)("rechnungswerk", "Löschen"),
					onClick: bt((t) => x(e), ["stop"])
				}, {
					icon: _(() => [J(nd, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, By))), 128))])])])) : n("", !0),
			J(Py, {
				open: i.value,
				customer: a.value,
				saving: d.value,
				takenNumbers: f.value,
				prefill: o.value,
				onClose: p[0] ||= (e) => i.value = !1,
				onSave: b
			}, null, 8, [
				"open",
				"customer",
				"saving",
				"takenNumbers",
				"prefill"
			]),
			c.value ? (Z(), N(t(Ne), {
				key: 3,
				name: t(T)("rechnungswerk", "Aus Nextcloud-Kontakten übernehmen"),
				onKeydown: p[2] ||= O((e) => t(Ts)(e, () => c.value = !1), ["esc"]),
				onClose: p[3] ||= (e) => c.value = !1
			}, {
				default: _(() => [z("div", Gy, [z("p", Ky, Y(t(T)("rechnungswerk", "Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.")), 1), J(Pd, {
					modelValue: l.value,
					"onUpdate:modelValue": p[1] ||= (e) => l.value = e,
					onSelect: v
				}, null, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["name"])) : n("", !0),
			J(Wf, {
				open: s.value !== null,
				name: t(T)("rechnungswerk", "Kunde löschen"),
				message: s.value ? t(T)("rechnungswerk", "„{name}“ wirklich löschen?", { name: s.value.name }) : "",
				confirmLabel: t(T)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: p[4] ||= (e) => s.value = null,
				onConfirm: S
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-b579e3bc"]]), Jy = {
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
}, Yy = ["aria-hidden", "aria-label"], Xy = [
	"fill",
	"width",
	"height"
], Zy = { key: 0 };
function Qy(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon content-save-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", Zy, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" }, null, -1)], 8, Xy))], 16, Yy);
}
var $y = /*#__PURE__*/ Q(Jy, [["render", Qy]]), eb = { class: "rw-view rw-view--narrow" }, tb = {
	key: 2,
	class: "rw-section"
}, nb = { class: "rw-hint" }, rb = { class: "rw-form-row" }, ib = { class: "rw-field" }, ab = { class: "rw-field" }, ob = { class: "rw-field" }, sb = {
	key: 3,
	class: "rw-action-bar"
}, cb = /* @__PURE__ */ W({
	__name: "MyContactView",
	setup(e) {
		let r = y(null), i = y(""), a = y(""), o = y(!1);
		Pe(async () => {
			try {
				r.value = await Vp();
			} catch (e) {
				i.value = e.message ?? T("rechnungswerk", "Laden fehlgeschlagen");
			}
		});
		async function s() {
			i.value = "";
			try {
				let e = await Od();
				r.value = {
					person: e.person,
					phone: e.phone,
					email: e.email
				};
			} catch (e) {
				i.value = e.message ?? T("rechnungswerk", "Nextcloud-Konto konnte nicht geladen werden.");
			}
		}
		async function c() {
			if (r.value) {
				i.value = "", a.value = "", o.value = !0;
				try {
					r.value = await Hp(r.value), a.value = T("rechnungswerk", "Gespeichert.");
				} catch (e) {
					i.value = e.message ?? T("rechnungswerk", "Speichern fehlgeschlagen");
				} finally {
					o.value = !1;
				}
			}
		}
		return (e, l) => (Z(), H("div", eb, [
			z("h2", null, Y(t(T)("rechnungswerk", "Mein Kontakt")), 1),
			i.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: i.value
			}, null, 8, ["text"])) : n("", !0),
			a.value ? (Z(), N(t($), {
				key: 1,
				type: "success",
				text: a.value
			}, null, 8, ["text"])) : n("", !0),
			r.value ? (Z(), H("section", tb, [
				z("h3", null, Y(t(T)("rechnungswerk", "Mein Verkäufer-Ansprechpartner")), 1),
				z("p", nb, Y(t(T)("rechnungswerk", "Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.")), 1),
				z("div", rb, [
					z("label", ib, [z("span", null, Y(t(T)("rechnungswerk", "Name")), 1), w(z("input", {
						"onUpdate:modelValue": l[0] ||= (e) => r.value.person = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, r.value.person]])]),
					z("label", ab, [z("span", null, Y(t(T)("rechnungswerk", "Telefon")), 1), w(z("input", {
						"onUpdate:modelValue": l[1] ||= (e) => r.value.phone = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, r.value.phone]])]),
					z("label", ob, [z("span", null, Y(t(T)("rechnungswerk", "E-Mail")), 1), w(z("input", {
						"onUpdate:modelValue": l[2] ||= (e) => r.value.email = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[I, r.value.email]])])
				]),
				J(t(G), {
					variant: "tertiary",
					onClick: s
				}, {
					icon: _(() => [J(Xa, { size: 20 })]),
					default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Aus meinem Nextcloud-Konto übernehmen")), 1)]),
					_: 1
				})
			])) : n("", !0),
			r.value ? (Z(), H("div", sb, [J(t(G), {
				variant: "primary",
				disabled: o.value,
				onClick: c
			}, {
				icon: _(() => [J($y, { size: 20 })]),
				default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])) : n("", !0)
		]));
	}
});
// node_modules/@nextcloud/vue/dist/functions/dialog/index.mjs
function lb(e, t = {}, n = {}) {
	let { container: r } = n;
	"container" in t && typeof t.container == "string" && (r ??= t.container);
	let i = (typeof r == "string" && document.querySelector(r) || document.body).appendChild(document.createElement("div"));
	return new Promise((n, r) => {
		let a = Ee(e, {
			...t,
			container: null,
			onClose(...e) {
				let t = e.length > 1 ? e : e[0];
				a.unmount(), i.remove(), n(t);
			},
			"onVue:unmounted": () => {
				a.unmount(), i.remove(), r(/* @__PURE__ */ Error("Dialog was unmounted without close event"));
			}
		});
		a.mount(i);
	});
}
// node_modules/@nextcloud/dialogs/dist/index.mjs
var ub = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-folder-move\" viewBox=\"0 0 24 24\"><path d=\"M14,18V15H10V11H14V8L19,13M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z\" /></svg>", db = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-folder-multiple\" viewBox=\"0 0 24 24\"><path d=\"M22,4H14L12,2H6A2,2 0 0,0 4,4V16A2,2 0 0,0 6,18H22A2,2 0 0,0 24,16V6A2,2 0 0,0 22,4M2,6H0V11H0V20A2,2 0 0,0 2,22H20V20H2V6Z\" /></svg>", fb = class extends Error {}, pb = class {
	title;
	multiSelect;
	mimeTypeFilter;
	directoriesAllowed;
	noMenu;
	buttons;
	path;
	filter;
	canPick;
	container;
	disabledNavigation;
	constructor(e, t, n, r, i, a, o, s, c, l, u = !1) {
		this.title = e, this.multiSelect = t, this.mimeTypeFilter = n, this.directoriesAllowed = r, this.noMenu = i, this.path = o, this.filter = s, this.canPick = c, this.buttons = a, this.container = l, this.disabledNavigation = u;
	}
	async pickNodes() {
		let { default: e } = await import("./FilePicker-qWi4RBGN-BLZD6uIW.chunk.mjs"), t = await lb(e, {
			allowPickDirectory: this.directoriesAllowed,
			noMenu: this.noMenu,
			buttons: this.buttons,
			name: this.title,
			path: this.path,
			mimetypeFilter: this.mimeTypeFilter,
			multiselect: this.multiSelect,
			filterFn: this.filter,
			canPickFn: this.canPick,
			disabledNavigation: this.disabledNavigation
		}, { container: this.container });
		if (!Array.isArray(t) || t.length === 0) throw new fb("FilePicker: No nodes selected");
		return t;
	}
	async pick() {
		let e = await this.pickNodes();
		return this.multiSelect ? e.map((e) => e.path) : e[0]?.path ?? "/";
	}
}, mb = class {
	title;
	multiSelect = !1;
	mimeTypeFilter = [];
	directoriesAllowed = !1;
	noMenu = !1;
	path;
	filter;
	canPick;
	buttons = [];
	container;
	disabledNavigation = !1;
	constructor(e) {
		this.title = e;
	}
	setContainer(e) {
		return this.container = e, this;
	}
	setMultiSelect(e) {
		return this.multiSelect = e, this;
	}
	addMimeTypeFilter(e) {
		return this.mimeTypeFilter.push(e), this;
	}
	setMimeTypeFilter(e) {
		return this.mimeTypeFilter = e, this;
	}
	addButton(e) {
		return typeof this.buttons == "function" && (Be.warn("FilePicker buttons were set to factory, now overwritten with button object."), this.buttons = []), this.buttons.push(e), this;
	}
	setButtonFactory(e) {
		return this.buttons = e, this;
	}
	setType(e) {
		return this.buttons = (t, n) => {
			let r = [], i = t[0]?.displayname || xt(n);
			if (e === 1) {
				let e = Ue("Choose");
				t.length === 1 ? e = Ue("Choose {file}", { file: i }) : this.multiSelect && (e = st("Choose %n file", "Choose %n files", t.length)), r.push({
					callback: () => {},
					label: e,
					variant: "primary"
				});
			}
			return (e === 4 || e === 3) && r.push({
				callback: () => {},
				label: i ? Ue("Copy to {target}", { target: i }) : Ue("Copy"),
				icon: db,
				variant: e === 3 ? "primary" : "secondary"
			}), (e === 4 || e === 2) && r.push({
				callback: () => {},
				label: i ? Ue("Move to {target}", { target: i }) : Ue("Move"),
				icon: ub,
				variant: "primary"
			}), r;
		}, this;
	}
	allowDirectories(e = !0) {
		return this.directoriesAllowed = e, this;
	}
	setNoMenu(e = !0) {
		return this.noMenu = e, this;
	}
	startAt(e) {
		return this.path = e, this;
	}
	setFilter(e) {
		return this.filter = e, this;
	}
	setCanPick(e) {
		return this.canPick = e, this;
	}
	disableNavigation() {
		return this.disabledNavigation = !0, this;
	}
	build() {
		return new pb(this.title, this.multiSelect, this.mimeTypeFilter, this.directoriesAllowed, this.noMenu, this.buttons, this.path, this.filter, this.canPick, this.container, this.disabledNavigation);
	}
};
function hb(e) {
	return new mb(e);
}
// node_modules/@ckpack/vue-color/libs/style-inject.es-746bb8ed.js
function gb(e, t) {
	t === void 0 && (t = {});
	var n = t.insertAt;
	if (e && typeof document < "u") {
		var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
		i.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
	}
}
// node_modules/@ckpack/vue-color/libs/utils/compoent.js
var _b = function(e, t) {
	let { componentPrefix: n = "" } = t || {};
	e.component(`${n}${this.name}`, this);
}, vb = {}, yb = {
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
		return { "background-image": `url(${xb(this.white, this.grey, this.size)})` };
	} }
};
function bb(e, t, n) {
	if (typeof document > "u") return null;
	let r = document.createElement("canvas");
	r.width = r.height = n * 2;
	let i = r.getContext("2d");
	return i ? (i.fillStyle = e, i.fillRect(0, 0, r.width, r.height), i.fillStyle = t, i.fillRect(0, 0, n, n), i.translate(n, n), i.fillRect(0, 0, n, n), r.toDataURL()) : null;
}
function xb(e, t, n) {
	let r = `${e},${t},${n}`;
	if (vb[r]) return vb[r];
	let i = bb(e, t, n);
	return vb[r] = i, i;
}
function Sb(e, t, n, r, i, a) {
	return Z(), H("div", {
		class: "vc-checkerboard",
		style: dt(a.bgStyle)
	}, null, 4);
}
gb(".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}"), yb.render = Sb, yb.__file = "src/components/checkboard/checkboard.vue", yb.install = _b;
// node_modules/@ckpack/vue-color/libs/components/alpha/index.js
var Cb = {
	name: "Alpha",
	components: { Checkboard: yb },
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
}, wb = { class: "vc-alpha" }, Tb = { class: "vc-alpha-checkboard-wrap" }, Eb = [/* @__PURE__ */ z("div", { class: "vc-alpha-picker" }, null, -1)];
function Db(e, t, n, r, i, a) {
	let o = l("Checkboard");
	return Z(), H("div", wb, [
		z("div", Tb, [J(o)]),
		z("div", {
			class: "vc-alpha-gradient",
			style: dt({ background: a.gradientColor })
		}, null, 4),
		z("div", {
			ref: "container",
			class: "vc-alpha-container",
			onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
			onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
			onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
		}, [z("div", {
			class: "vc-alpha-pointer",
			style: dt({ left: `${a.colors.a * 100}%` })
		}, Eb, 4)], 544)
	]);
}
gb(".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), Cb.render = Db, Cb.__file = "src/components/alpha/alpha.vue", Cb.install = _b;
// node_modules/@ctrl/tinycolor/dist/module/util.js
function Ob(e, t) {
	Ab(e) && (e = "100%");
	var n = jb(e);
	return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (e = t === 360 ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t)), e);
}
function kb(e) {
	return Math.min(1, Math.max(0, e));
}
function Ab(e) {
	return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function jb(e) {
	return typeof e == "string" && e.indexOf("%") !== -1;
}
function Mb(e) {
	return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Nb(e) {
	return e <= 1 ? `${Number(e) * 100}%` : e;
}
function Pb(e) {
	return e.length === 1 ? "0" + e : String(e);
}
// node_modules/@ctrl/tinycolor/dist/module/conversion.js
function Fb(e, t, n) {
	return {
		r: Ob(e, 255) * 255,
		g: Ob(t, 255) * 255,
		b: Ob(n, 255) * 255
	};
}
function Ib(e, t, n) {
	e = Ob(e, 255), t = Ob(t, 255), n = Ob(n, 255);
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
function Lb(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Rb(e, t, n) {
	var r, i, a;
	if (e = Ob(e, 360), t = Ob(t, 100), n = Ob(n, 100), t === 0) i = n, a = n, r = n;
	else {
		var o = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
		r = Lb(s, o, e + 1 / 3), i = Lb(s, o, e), a = Lb(s, o, e - 1 / 3);
	}
	return {
		r: r * 255,
		g: i * 255,
		b: a * 255
	};
}
function zb(e, t, n) {
	e = Ob(e, 255), t = Ob(t, 255), n = Ob(n, 255);
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
function Bb(e, t, n) {
	e = Ob(e, 360) * 6, t = Ob(t, 100), n = Ob(n, 100);
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
function Vb(e, t, n, r) {
	var i = [
		Pb(Math.round(e).toString(16)),
		Pb(Math.round(t).toString(16)),
		Pb(Math.round(n).toString(16))
	];
	return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function Hb(e, t, n, r, i) {
	var a = [
		Pb(Math.round(e).toString(16)),
		Pb(Math.round(t).toString(16)),
		Pb(Math.round(n).toString(16)),
		Pb(Ub(r))
	];
	return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Ub(e) {
	return Math.round(parseFloat(e) * 255).toString(16);
}
function Wb(e) {
	return Gb(e) / 255;
}
function Gb(e) {
	return parseInt(e, 16);
}
function Kb(e) {
	return {
		r: e >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
}
// node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var qb = {
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
// node_modules/@ctrl/tinycolor/dist/module/format-input.js
function Jb(e) {
	var t = {
		r: 0,
		g: 0,
		b: 0
	}, n = 1, r = null, i = null, a = null, o = !1, s = !1;
	return typeof e == "string" && (e = $b(e)), typeof e == "object" && (ex(e.r) && ex(e.g) && ex(e.b) ? (t = Fb(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ex(e.h) && ex(e.s) && ex(e.v) ? (r = Nb(e.s), i = Nb(e.v), t = Bb(e.h, r, i), o = !0, s = "hsv") : ex(e.h) && ex(e.s) && ex(e.l) && (r = Nb(e.s), a = Nb(e.l), t = Rb(e.h, r, a), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Mb(n), {
		ok: o,
		format: e.format || s,
		r: Math.min(255, Math.max(t.r, 0)),
		g: Math.min(255, Math.max(t.g, 0)),
		b: Math.min(255, Math.max(t.b, 0)),
		a: n
	};
}
var Yb = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", Xb = `[\\s|\\(]+(${Yb})[,|\\s]+(${Yb})[,|\\s]+(${Yb})\\s*\\)?`, Zb = `[\\s|\\(]+(${Yb})[,|\\s]+(${Yb})[,|\\s]+(${Yb})[,|\\s]+(${Yb})\\s*\\)?`, Qb = {
	CSS_UNIT: new RegExp(Yb),
	rgb: RegExp("rgb" + Xb),
	rgba: RegExp("rgba" + Zb),
	hsl: RegExp("hsl" + Xb),
	hsla: RegExp("hsla" + Zb),
	hsv: RegExp("hsv" + Xb),
	hsva: RegExp("hsva" + Zb),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function $b(e) {
	if (e = e.trim().toLowerCase(), e.length === 0) return !1;
	var t = !1;
	if (qb[e]) e = qb[e], t = !0;
	else if (e === "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var n = Qb.rgb.exec(e);
	return n ? {
		r: n[1],
		g: n[2],
		b: n[3]
	} : (n = Qb.rgba.exec(e), n ? {
		r: n[1],
		g: n[2],
		b: n[3],
		a: n[4]
	} : (n = Qb.hsl.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3]
	} : (n = Qb.hsla.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3],
		a: n[4]
	} : (n = Qb.hsv.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3]
	} : (n = Qb.hsva.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3],
		a: n[4]
	} : (n = Qb.hex8.exec(e), n ? {
		r: Gb(n[1]),
		g: Gb(n[2]),
		b: Gb(n[3]),
		a: Wb(n[4]),
		format: t ? "name" : "hex8"
	} : (n = Qb.hex6.exec(e), n ? {
		r: Gb(n[1]),
		g: Gb(n[2]),
		b: Gb(n[3]),
		format: t ? "name" : "hex"
	} : (n = Qb.hex4.exec(e), n ? {
		r: Gb(n[1] + n[1]),
		g: Gb(n[2] + n[2]),
		b: Gb(n[3] + n[3]),
		a: Wb(n[4] + n[4]),
		format: t ? "name" : "hex8"
	} : (n = Qb.hex3.exec(e), n ? {
		r: Gb(n[1] + n[1]),
		g: Gb(n[2] + n[2]),
		b: Gb(n[3] + n[3]),
		format: t ? "name" : "hex"
	} : !1)))))))));
}
function ex(e) {
	return !!Qb.CSS_UNIT.exec(String(e));
}
// node_modules/@ctrl/tinycolor/dist/module/index.js
var tx = function() {
	function e(t, n) {
		if (t === void 0 && (t = ""), n === void 0 && (n = {}), t instanceof e) return t;
		typeof t == "number" && (t = Kb(t)), this.originalInput = t;
		var r = Jb(t);
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
		return this.a = Mb(e), this.roundA = Math.round(100 * this.a) / 100, this;
	}, e.prototype.isMonochrome = function() {
		return this.toHsl().s === 0;
	}, e.prototype.toHsv = function() {
		var e = zb(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			v: e.v,
			a: this.a
		};
	}, e.prototype.toHsvString = function() {
		var e = zb(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
		return this.a === 1 ? `hsv(${t}, ${n}%, ${r}%)` : `hsva(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHsl = function() {
		var e = Ib(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			l: e.l,
			a: this.a
		};
	}, e.prototype.toHslString = function() {
		var e = Ib(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
		return this.a === 1 ? `hsl(${t}, ${n}%, ${r}%)` : `hsla(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHex = function(e) {
		return e === void 0 && (e = !1), Vb(this.r, this.g, this.b, e);
	}, e.prototype.toHexString = function(e) {
		return e === void 0 && (e = !1), "#" + this.toHex(e);
	}, e.prototype.toHex8 = function(e) {
		return e === void 0 && (e = !1), Hb(this.r, this.g, this.b, this.a, e);
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
			return `${Math.round(Ob(e, 255) * 100)}%`;
		};
		return {
			r: e(this.r),
			g: e(this.g),
			b: e(this.b),
			a: this.a
		};
	}, e.prototype.toPercentageRgbString = function() {
		var e = function(e) {
			return Math.round(Ob(e, 255) * 100);
		};
		return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
	}, e.prototype.toName = function() {
		if (this.a === 0) return "transparent";
		if (this.a < 1) return !1;
		for (var e = "#" + Vb(this.r, this.g, this.b, !1), t = 0, n = Object.entries(qb); t < n.length; t++) {
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
		return n.l += t / 100, n.l = kb(n.l), new e(n);
	}, e.prototype.brighten = function(t) {
		t === void 0 && (t = 10);
		var n = this.toRgb();
		return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
	}, e.prototype.darken = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.l -= t / 100, n.l = kb(n.l), new e(n);
	}, e.prototype.tint = function(e) {
		return e === void 0 && (e = 10), this.mix("white", e);
	}, e.prototype.shade = function(e) {
		return e === void 0 && (e = 10), this.mix("black", e);
	}, e.prototype.desaturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s -= t / 100, n.s = kb(n.s), new e(n);
	}, e.prototype.saturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s += t / 100, n.s = kb(n.s), new e(n);
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
// node_modules/@ckpack/vue-color/libs/mixin/color.js
function nx(...e) {
	return new tx(...e);
}
function rx(e, t) {
	let n = e && e.a, r;
	r = e && e.hsl ? nx(e.hsl) : e && e.hex && e.hex.length > 0 ? nx(e.hex) : e && e.hsv ? nx(e.hsv) : e && e.rgba ? nx(e.rgba) : e && e.rgb ? nx(e.rgb) : nx(e), r && (r._a === void 0 || r._a === null) && r.setAlpha(n || r.getAlpha());
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
var ix = {
	model: {
		prop: "modelValue",
		event: "update:modelValue"
	},
	props: ["modelValue"],
	data() {
		return { val: rx(this.modelValue) };
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
		this.val = rx(e);
	} },
	methods: {
		colorChange(e, t) {
			this.oldHue = this.colors.hsl.h, this.colors = rx(e, t || this.oldHue);
		},
		isValidHex(e) {
			return nx(e).isValid;
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
			return nx(e).getAlpha() === 0;
		}
	}
}, ax = {
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
}, ox = { class: "vc-editable-input" }, sx = ["aria-labelledby"], cx = ["id", "for"], lx = { class: "vc-input__desc" };
function ux(e, t, n, r, i, a) {
	return Z(), H("div", ox, [
		w(z("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.val = e,
			"aria-labelledby": a.labelId,
			class: "vc-input__input",
			onKeydown: t[1] ||= (...e) => a.handleKeyDown && a.handleKeyDown(...e),
			onInput: t[2] ||= (...e) => a.update && a.update(...e)
		}, null, 40, sx), [[I, a.val]]),
		z("span", {
			id: a.labelId,
			for: n.label,
			class: "vc-input__label"
		}, Y(a.labelSpanText), 9, cx),
		z("span", lx, Y(n.desc), 1)
	]);
}
gb(".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}"), ax.render = ux, ax.__file = "src/components/editable-input/editable-input.vue", ax.install = _b;
// node_modules/@ckpack/vue-color/libs/utils/utils.js
function dx(e, t, n) {
	return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e;
}
// node_modules/@ckpack/vue-color/libs/components/saturation/index.js
var fx = {
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
			let r = n.clientWidth, i = n.clientHeight, a = n.getBoundingClientRect().left + window.pageXOffset, o = n.getBoundingClientRect().top + window.pageYOffset, s = e.pageX || (e.touches ? e.touches[0].pageX : 0), c = e.pageY || (e.touches ? e.touches[0].pageY : 0), l = dx(s - a, 0, r), u = dx(c - o, 0, i), d = l / r, f = dx(-(u / i) + 1, 0, 1);
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
}, px = /*#__PURE__*/ z("div", { class: "vc-saturation--white" }, null, -1), mx = /*#__PURE__*/ z("div", { class: "vc-saturation--black" }, null, -1), hx = [/* @__PURE__ */ z("div", { class: "vc-saturation-circle" }, null, -1)];
function gx(e, t, n, r, i, a) {
	return Z(), H("div", {
		ref: "container",
		class: "vc-saturation",
		style: dt({ background: a.bgColor }),
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [
		px,
		mx,
		z("div", {
			class: "vc-saturation-pointer",
			style: dt({
				top: a.pointerTop,
				left: a.pointerLeft
			})
		}, hx, 4)
	], 36);
}
gb(".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}"), fx.render = gx, fx.__file = "src/components/saturation/saturation.vue", fx.install = _b;
// node_modules/@ckpack/vue-color/libs/components/hue/index.js
var _x = {
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
}, vx = ["aria-valuenow"], yx = [/* @__PURE__ */ z("div", { class: "vc-hue-picker" }, null, -1)];
function bx(e, t, n, r, i, a) {
	return Z(), H("div", { class: U(["vc-hue", [a.directionClass]]) }, [z("div", {
		ref: "container",
		class: "vc-hue-container",
		role: "slider",
		"aria-valuenow": a.colors.hsl.h,
		"aria-valuemin": "0",
		"aria-valuemax": "360",
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [z("div", {
		class: "vc-hue-pointer",
		style: dt({
			top: a.pointerTop,
			left: a.pointerLeft
		}),
		role: "presentation"
	}, yx, 4)], 40, vx)], 2);
}
gb(".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), _x.render = bx, _x.__file = "src/components/hue/hue.vue", _x.install = _b;
// node_modules/@ckpack/vue-color/libs/components/chrome/index.js
var xx = {
	name: "Chrome",
	components: {
		Saturation: fx,
		Hue: _x,
		Alpha: Cb,
		EdIn: ax,
		Checkboard: yb
	},
	mixins: [ix],
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
}, Sx = { class: "vc-chrome-saturation-wrap" }, Cx = { class: "vc-chrome-body" }, wx = { class: "vc-chrome-controls" }, Tx = { class: "vc-chrome-color-wrap" }, Ex = ["aria-label"], Dx = { class: "vc-chrome-sliders" }, Ox = { class: "vc-chrome-hue-wrap" }, kx = {
	key: 0,
	class: "vc-chrome-alpha-wrap"
}, Ax = {
	key: 0,
	class: "vc-chrome-fields-wrap"
}, jx = { class: "vc-chrome-fields" }, Mx = { class: "vc-chrome-field" }, Nx = { class: "vc-chrome-fields" }, Px = { class: "vc-chrome-field" }, Fx = { class: "vc-chrome-field" }, Ix = { class: "vc-chrome-field" }, Lx = {
	key: 0,
	class: "vc-chrome-field"
}, Rx = { class: "vc-chrome-fields" }, zx = { class: "vc-chrome-field" }, Bx = { class: "vc-chrome-field" }, Vx = { class: "vc-chrome-field" }, Hx = {
	key: 0,
	class: "vc-chrome-field"
}, Ux = { class: "vc-chrome-toggle-icon" }, Wx = [/* @__PURE__ */ z("path", {
	fill: "#333",
	d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1)], Gx = { class: "vc-chrome-toggle-icon-highlight" };
function Kx(e, t, r, i, a, o) {
	let s = l("Saturation"), c = l("Checkboard"), u = l("Hue"), d = l("Alpha"), f = l("EdIn");
	return Z(), H("div", {
		role: "application",
		"aria-label": "Chrome color picker",
		class: U(["vc-chrome", [r.disableAlpha ? "vc-chrome__disable-alpha" : ""]])
	}, [z("div", Sx, [J(s, {
		value: e.colors,
		onChange: o.childChange
	}, null, 8, ["value", "onChange"])]), z("div", Cx, [z("div", wx, [z("div", Tx, [z("div", {
		"aria-label": `current color is ${e.colors.hex}`,
		class: "vc-chrome-active-color",
		style: dt({ background: o.activeColor })
	}, null, 12, Ex), r.disableAlpha ? n("v-if", !0) : (Z(), N(c, { key: 0 }))]), z("div", Dx, [z("div", Ox, [J(u, {
		value: e.colors,
		onChange: o.childChange
	}, null, 8, ["value", "onChange"])]), r.disableAlpha ? n("v-if", !0) : (Z(), H("div", kx, [J(d, {
		value: e.colors,
		onChange: o.childChange
	}, null, 8, ["value", "onChange"])]))])]), r.disableFields ? n("v-if", !0) : (Z(), H("div", Ax, [
		w(z("div", jx, [n(" hex "), z("div", Mx, [o.hasAlpha ? n("v-if", !0) : (Z(), N(f, {
			key: 0,
			label: "hex",
			value: e.colors.hex,
			onChange: o.inputChange
		}, null, 8, ["value", "onChange"])), o.hasAlpha ? (Z(), N(f, {
			key: 1,
			label: "hex",
			value: e.colors.hex8,
			onChange: o.inputChange
		}, null, 8, ["value", "onChange"])) : n("v-if", !0)])], 512), [[b, a.fieldsIndex === "hex"]]),
		w(z("div", Nx, [
			n(" rgba "),
			z("div", Px, [J(f, {
				label: "r",
				value: e.colors.rgba.r,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			z("div", Fx, [J(f, {
				label: "g",
				value: e.colors.rgba.g,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			z("div", Ix, [J(f, {
				label: "b",
				value: e.colors.rgba.b,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			r.disableAlpha ? n("v-if", !0) : (Z(), H("div", Lx, [J(f, {
				label: "a",
				value: e.colors.a,
				"arrow-offset": .01,
				max: 1,
				onChange: o.inputChange
			}, null, 8, [
				"value",
				"arrow-offset",
				"onChange"
			])]))
		], 512), [[b, ["rgb", "rgba"].includes(a.fieldsIndex)]]),
		w(z("div", Rx, [
			n(" hsla "),
			z("div", zx, [J(f, {
				label: "h",
				value: o.hsl.h,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			z("div", Bx, [J(f, {
				label: "s",
				value: o.hsl.s,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			z("div", Vx, [J(f, {
				label: "l",
				value: o.hsl.l,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			r.disableAlpha ? n("v-if", !0) : (Z(), H("div", Hx, [J(f, {
				label: "a",
				value: e.colors.a,
				"arrow-offset": .01,
				max: 1,
				onChange: o.inputChange
			}, null, 8, [
				"value",
				"arrow-offset",
				"onChange"
			])]))
		], 512), [[b, ["hsl", "hsla"].includes(a.fieldsIndex)]]),
		n(" btn "),
		z("div", {
			class: "vc-chrome-toggle-btn",
			role: "button",
			"aria-label": "Change another color definition",
			onClick: t[3] ||= (...e) => o.toggleViews && o.toggleViews(...e)
		}, [z("div", Ux, [(Z(), H("svg", {
			style: {
				width: "24px",
				height: "24px"
			},
			viewBox: "0 0 24 24",
			onMouseover: t[0] ||= (...e) => o.showHighlight && o.showHighlight(...e),
			onMouseenter: t[1] ||= (...e) => o.showHighlight && o.showHighlight(...e),
			onMouseout: t[2] ||= (...e) => o.hideHighlight && o.hideHighlight(...e)
		}, Wx, 32))]), w(z("div", Gx, null, 512), [[b, a.highlight]])]),
		n(" btn ")
	]))])], 2);
}
// node_modules/@nextcloud/vue/dist/chunks/colors.mjs
gb(".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}"), xx.render = Kx, xx.__file = "src/components/chrome/chrome.vue", xx.install = _b, ke(St);
var qx = class {
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
}, Jx = new qx(182, 70, 157, R("Purple")), Yx = new qx(221, 203, 85, R("Gold")), Xx = new qx(0, 130, 201, R("Nextcloud blue")), Zx = new qx(0, 0, 0, R("Black")), Qx = new qx(255, 255, 255, R("White")), $x = [
	Jx,
	new qx(191, 103, 139, R("Rosy brown")),
	new qx(201, 136, 121, R("Feldspar")),
	new qx(211, 169, 103, R("Whiskey")),
	Yx,
	new qx(165, 184, 114, R("Olivine")),
	new qx(110, 166, 143, R("Acapulco")),
	new qx(55, 148, 172, R("Boston Blue")),
	Xx,
	new qx(45, 115, 190, R("Mariner")),
	new qx(91, 100, 179, R("Blue Violet")),
	new qx(136, 85, 168, R("Deluge"))
];
// node_modules/@nextcloud/vue/dist/chunks/NcColorPicker.mjs
ke(M);
var eS = ["aria-label"], tS = {
	key: 0,
	class: "color-picker__simple"
}, nS = [
	"aria-label",
	"name",
	"checked",
	"onClick"
], rS = ["title"], iS = [
	"aria-label",
	"name",
	"checked"
], aS = {
	key: 0,
	class: "color-picker__navigation"
}, oS = /* @__PURE__ */ kt(/* @__PURE__ */ W({
	__name: "NcColorPicker",
	props: /* @__PURE__ */ Ot({
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
	emits: /* @__PURE__ */ Ot(["submit", "closed"], ["update:modelValue", "update:open"]),
	setup(e, { emit: r }) {
		let i = at(e, "modelValue"), a = at(e, "open"), o = e, c = r, l = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i, u = g(), f = y(!1), p = L(() => {
			let e = o.palette;
			for (let t of e) if (typeof t == "string" && !t.match(l) || typeof t == "object" && !t.color?.match(l)) {
				it.error("[NcColorPicker] Invalid palette passed", { color: t }), e = [];
				break;
			}
			return e.length === 0 && (e = o.clearable ? [
				...$x,
				Zx,
				Qx
			] : [...$x]), e.map((e) => ({
				color: typeof e == "object" ? e.color : e,
				name: typeof e == "object" && e.name ? e.name : R("A color with a HEX value {hex}", { hex: typeof e == "string" ? e : e.color })
			}));
		});
		function m(e) {
			c("submit", i.value), e(), f.value = !1;
		}
		function h(e) {
			e = typeof e == "string" ? e : e.color, o.clearable && i.value === e ? i.value = void 0 : i.value = e;
		}
		function b(e) {
			i.value = e.hex;
		}
		function x(e) {
			return S(e) > .5 ? Zx.color : Qx.color;
		}
		function S(e) {
			let [t, n, r] = ee(e);
			return (.2126 * t + .7152 * n + .0722 * r) / 255;
		}
		function ee(e) {
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
		return (r, o) => (Z(), N(t(d), {
			shown: a.value,
			"onUpdate:shown": o[3] ||= (e) => a.value = e,
			container: e.container,
			popupRole: "dialog",
			onApplyHide: o[4] ||= (e) => c("closed")
		}, {
			trigger: _((e) => [F(r.$slots, "default", Et(pt(e)), void 0, !0)]),
			default: _((r) => [z("div", {
				role: "dialog",
				class: U(["color-picker", {
					"color-picker--advanced-fields": f.value && e.advancedFields,
					"color-picker--clearable": e.clearable
				}]),
				"aria-modal": "true",
				"aria-label": t(R)("Color picker")
			}, [J(s, {
				name: "slide",
				mode: "out-in"
			}, {
				default: _(() => [f.value ? (Z(), N(t(xx), {
					key: 1,
					class: "color-picker__advanced",
					disableAlpha: "",
					disableFields: !e.advancedFields,
					modelValue: i.value ?? "#000000",
					"onUpdate:modelValue": b
				}, null, 8, ["disableFields", "modelValue"])) : (Z(), H("div", tS, [(Z(!0), H(E, null, X(p.value, ({ color: e, name: r }, a) => (Z(), H("label", {
					key: a,
					class: U(["color-picker__simple-color-circle", { "color-picker__simple-color-circle--active": e === i.value }]),
					style: dt({
						backgroundColor: e,
						color: x(e)
					})
				}, [e === i.value ? (Z(), N(t(He), {
					key: 0,
					path: t(xe)
				}, null, 8, ["path"])) : n("", !0), z("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": r,
					name: `color-picker-${t(u)}`,
					checked: e === i.value,
					onClick: (t) => h(e)
				}, null, 8, nS)], 6))), 128)), e.clearable ? (Z(), H("label", {
					key: 0,
					class: "color-picker__clear",
					title: t(R)("No color")
				}, [J(t(He), {
					size: i.value ? 28 : 34,
					path: t(v)
				}, null, 8, ["size", "path"]), z("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": t(R)("No color"),
					name: `color-picker-${t(u)}`,
					checked: !i.value,
					onClick: o[0] ||= (e) => i.value = void 0
				}, null, 8, iS)], 8, rS)) : n("", !0)]))]),
				_: 1
			}), e.paletteOnly ? n("", !0) : (Z(), H("div", aS, [f.value ? (Z(), N(t(G), {
				key: 0,
				"aria-label": t(R)("Back"),
				title: t(R)("Back"),
				variant: "tertiary",
				onClick: o[1] ||= (e) => f.value = !1
			}, {
				icon: _(() => [J(t(He), {
					directional: "",
					path: t(we)
				}, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])) : (Z(), N(t(G), {
				key: 1,
				"aria-label": t(R)("More options"),
				title: t(R)("More options"),
				variant: "tertiary",
				onClick: o[2] ||= (e) => f.value = !0
			}, {
				icon: _(() => [J(t(He), { path: t(vt) }, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])), J(t(G), {
				variant: "primary",
				onClick: (e) => m(r.hide)
			}, {
				default: _(() => [q(Y(t(R)("Choose")), 1)]),
				_: 1
			}, 8, ["onClick"])]))], 10, eS)]),
			_: 3
		}, 8, ["shown", "container"]));
	}
}), [["__scopeId", "data-v-fab7cffe"]]), sS = ["aria-label"], cS = { class: "rw-subnav__group" }, lS = ["aria-current", "onClick"], uS = /* @__PURE__ */ W({
	__name: "RwSettingsNav",
	props: {
		groups: {},
		modelValue: {},
		ariaLabel: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: n }) {
		let r = n;
		return (n, i) => (Z(), H("nav", {
			class: "rw-subnav",
			"aria-label": e.ariaLabel || t(T)("rechnungswerk", "Bereiche")
		}, [(Z(!0), H(E, null, X(e.groups, (t) => (Z(), H(E, { key: t.label }, [z("div", cS, Y(t.label), 1), (Z(!0), H(E, null, X(t.items, (t) => (Z(), H("button", {
			key: t.key,
			type: "button",
			class: U(["rw-subnav__item", { "rw-subnav__item--active": e.modelValue === t.key }]),
			"aria-current": e.modelValue === t.key ? "page" : void 0,
			onClick: (e) => r("update:modelValue", t.key)
		}, [(Z(), N(ye(t.icon), { size: 18 })), q(" " + Y(t.label), 1)], 10, lS))), 128))], 64))), 128))], 8, sS));
	}
}), dS = {
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
}, fS = ["aria-hidden", "aria-label"], pS = [
	"fill",
	"width",
	"height"
], mS = { key: 0 };
function hS(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon office-building-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", mS, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" }, null, -1)], 8, pS))], 16, fS);
}
var gS = /*#__PURE__*/ Q(dS, [["render", hS]]), _S = {
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
}, vS = ["aria-hidden", "aria-label"], yS = [
	"fill",
	"width",
	"height"
], bS = { key: 0 };
function xS(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon bank-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", bS, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" }, null, -1)], 8, yS))], 16, vS);
}
var SS = /*#__PURE__*/ Q(_S, [["render", xS]]), CS = {
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
}, wS = ["aria-hidden", "aria-label"], TS = [
	"fill",
	"width",
	"height"
], ES = { key: 0 };
function DS(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon palette-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", ES, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z" }, null, -1)], 8, TS))], 16, wS);
}
var OS = /*#__PURE__*/ Q(CS, [["render", DS]]), kS = {
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
}, AS = ["aria-hidden", "aria-label"], jS = [
	"fill",
	"width",
	"height"
], MS = { key: 0 };
function NS(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-sign-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", MS, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z" }, null, -1)], 8, jS))], 16, AS);
}
var PS = /*#__PURE__*/ Q(kS, [["render", NS]]), FS = {
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
}, IS = ["aria-hidden", "aria-label"], LS = [
	"fill",
	"width",
	"height"
], RS = { key: 0 };
function zS(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon text-box-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", RS, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" }, null, -1)], 8, LS))], 16, IS);
}
var BS = /*#__PURE__*/ Q(FS, [["render", zS]]), VS = {
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
}, HS = ["aria-hidden", "aria-label"], US = [
	"fill",
	"width",
	"height"
], WS = { key: 0 };
function GS(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon percent-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", WS, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5M7,4A3,3 0 0,0 4,7A3,3 0 0,0 7,10A3,3 0 0,0 10,7A3,3 0 0,0 7,4M17,14A3,3 0 0,0 14,17A3,3 0 0,0 17,20A3,3 0 0,0 20,17A3,3 0 0,0 17,14Z" }, null, -1)], 8, US))], 16, HS);
}
var KS = /*#__PURE__*/ Q(VS, [["render", GS]]), qS = {
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
}, JS = ["aria-hidden", "aria-label"], YS = [
	"fill",
	"width",
	"height"
], XS = { key: 0 };
function ZS(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon credit-card-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", XS, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, null, -1)], 8, YS))], 16, JS);
}
var QS = /*#__PURE__*/ Q(qS, [["render", ZS]]), $S = {
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
}, eC = ["aria-hidden", "aria-label"], tC = [
	"fill",
	"width",
	"height"
], nC = { key: 0 };
function rC(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon email-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", nC, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" }, null, -1)], 8, tC))], 16, eC);
}
var iC = /*#__PURE__*/ Q($S, [["render", rC]]), aC = {
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
}, oC = ["aria-hidden", "aria-label"], sC = [
	"fill",
	"width",
	"height"
], cC = { key: 0 };
function lC(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon server-network-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", cC, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z" }, null, -1)], 8, sC))], 16, oC);
}
var uC = /*#__PURE__*/ Q(aC, [["render", lC]]), dC = {
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
}, fC = ["aria-hidden", "aria-label"], pC = [
	"fill",
	"width",
	"height"
], mC = { key: 0 };
function hC(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon email-sync-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", mC, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M3 4C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H13.5A6.5 6.5 0 0 1 13 18H3V8L11 13L19 8V11A6.5 6.5 0 0 1 19.5 11A6.5 6.5 0 0 1 21 11.18V6C21 4.9 20.1 4 19 4H3M3 6H19L11 11L3 6M19 12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5V12M15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29Z" }, null, -1)], 8, pC))], 16, fC);
}
var gC = /*#__PURE__*/ Q(dC, [["render", hC]]), _C = {
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
}, vC = ["aria-hidden", "aria-label"], yC = [
	"fill",
	"width",
	"height"
], bC = { key: 0 };
function xC(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon folder-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", bC, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" }, null, -1)], 8, yC))], 16, vC);
}
var SC = /*#__PURE__*/ Q(_C, [["render", xC]]), CC = {
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
}, wC = ["aria-hidden", "aria-label"], TC = [
	"fill",
	"width",
	"height"
], EC = { key: 0 };
function DC(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon shield-account-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", EC, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z" }, null, -1)], 8, TC))], 16, wC);
}
var OC = /*#__PURE__*/ Q(CC, [["render", DC]]), kC = {
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
}, AC = ["aria-hidden", "aria-label"], jC = [
	"fill",
	"width",
	"height"
], MC = { key: 0 };
function NC(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon key-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", MC, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z" }, null, -1)], 8, jC))], 16, AC);
}
var PC = /*#__PURE__*/ Q(kC, [["render", NC]]), FC = {
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
}, IC = ["aria-hidden", "aria-label"], LC = [
	"fill",
	"width",
	"height"
], RC = { key: 0 };
function zC(e, t, r, i, a, o) {
	return Z(), H("span", V(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon robot-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), H("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), H("title", RC, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" }, null, -1)], 8, LC))], 16, IC);
}
var BC = /*#__PURE__*/ Q(FC, [["render", zC]]), VC = () => vs("/api-keys"), HC = (e, t, n = null) => ys("/api-keys", { data: {
	name: e,
	scopes: t,
	rateLimit: n
} }), UC = (e) => Ss(`/api-keys/${e}`), WC = { class: "rw-api-keys" }, GC = { class: "rw-hint" }, KC = { class: "rw-api-keys__plaintext" }, qC = {
	key: 2,
	class: "rw-api-keys__table"
}, JC = { class: "rw-api-keys__actions-head" }, YC = { class: "rw-api-keys__scopes" }, XC = {
	key: 3,
	class: "rw-hint"
}, ZC = { class: "rw-api-keys__modal" }, QC = { class: "field" }, $C = ["placeholder"], ew = { class: "rw-hint" }, tw = { class: "field" }, nw = ["value"], rw = { class: "field" }, iw = ["placeholder"], aw = { class: "rw-api-keys__actions" }, ow = 1e4, sw = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "ApiKeysSection",
	setup(e) {
		let r = [
			"invoices:create",
			"invoices:commit",
			"invoices:send",
			"invoices:pay",
			"invoices:cancel",
			"invoices:read",
			"invoices:pdf",
			"invoices:delete"
		], i = {
			"invoices:create": T("rechnungswerk", "Rechnungen anlegen"),
			"invoices:commit": T("rechnungswerk", "Festschreiben"),
			"invoices:send": T("rechnungswerk", "Versenden"),
			"invoices:pay": T("rechnungswerk", "Als bezahlt markieren"),
			"invoices:cancel": T("rechnungswerk", "Stornieren"),
			"invoices:read": T("rechnungswerk", "Rechnungen lesen"),
			"invoices:pdf": T("rechnungswerk", "PDF abrufen"),
			"invoices:delete": T("rechnungswerk", "Eigene Entwürfe löschen")
		}, a = y([]), o = y(!1), s = y(""), c = y([]), l = y(""), u = y(!1), d = y(""), f = y(""), p = y(""), m = y(!1), h = y(null), g = y(null), v = L(() => s.value.trim() !== "" && c.value.length > 0);
		function b(e) {
			return i[e] ?? e;
		}
		function x(e) {
			return e.map(b);
		}
		function S(e) {
			return (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString();
		}
		async function C() {
			try {
				a.value = await VC(), d.value = "";
			} catch (e) {
				d.value = e.message ?? T("rechnungswerk", "API-Schlüssel konnten nicht geladen werden.");
			}
		}
		async function te() {
			u.value = !0, f.value = "";
			try {
				let e = l.value === "" ? null : Number(l.value), t = await HC(s.value.trim(), [...c.value], e);
				p.value = t.plaintext, m.value = !1, o.value = !1, s.value = "", c.value = [], l.value = "", await C();
			} catch (e) {
				f.value = e.message ?? T("rechnungswerk", "Anlegen fehlgeschlagen.");
			} finally {
				u.value = !1;
			}
		}
		async function ne() {
			let e = h.value;
			if (h.value = null, e !== null) {
				u.value = !0;
				try {
					await UC(e), await C();
				} catch (e) {
					d.value = e.message ?? T("rechnungswerk", "Widerrufen fehlgeschlagen.");
				} finally {
					u.value = !1;
				}
			}
		}
		async function D() {
			try {
				await navigator.clipboard.writeText(p.value);
			} catch {}
			m.value = !0;
		}
		return Pe(C), (e, i) => (Z(), H("div", WC, [
			z("p", GC, Y(t(T)("rechnungswerk", "Ein API-Schlüssel erlaubt anderen Programmen Zugriff auf diese RechnungsWerk-Instanz, ohne eine Anmeldung. Der Schlüssel wird nur einmalig angezeigt.")), 1),
			d.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: d.value
			}, null, 8, ["text"])) : n("", !0),
			p.value ? (Z(), N(t($), {
				key: 1,
				type: "success"
			}, {
				default: _(() => [
					z("p", null, Y(t(T)("rechnungswerk", "Das ist dein neuer API-Schlüssel:")), 1),
					z("p", null, [z("code", KC, Y(p.value), 1)]),
					z("p", null, Y(t(T)("rechnungswerk", "Bitte bewahre ihn sicher auf. Er wird nie wieder angezeigt.")), 1),
					J(t(G), { onClick: D }, {
						default: _(() => [q(Y(m.value ? t(T)("rechnungswerk", "Kopiert") : t(T)("rechnungswerk", "Kopieren")), 1)]),
						_: 1
					})
				]),
				_: 1
			})) : n("", !0),
			a.value.length > 0 ? (Z(), H("table", qC, [z("thead", null, [z("tr", null, [
				z("th", null, Y(t(T)("rechnungswerk", "Name")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Schlüssel")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Rechte")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Anfragen pro Minute")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Zuletzt verwendet")), 1),
				z("th", null, [z("span", JC, Y(t(T)("rechnungswerk", "Aktionen")), 1)])
			])]), z("tbody", null, [(Z(!0), H(E, null, X(a.value, (e) => (Z(), H("tr", {
				key: e.id,
				class: U({ "rw-api-keys__row--revoked": e.revokedAt !== null })
			}, [
				z("td", null, Y(e.name), 1),
				z("td", null, [z("code", null, Y(e.keyPrefix) + "…", 1)]),
				z("td", null, [z("span", YC, Y(x(e.scopes).join(", ")), 1)]),
				z("td", null, Y(e.rateLimit ?? t(T)("rechnungswerk", "Standard (60)")), 1),
				z("td", null, [e.revokedAt === null ? e.lastUsedAt ? (Z(), H(E, { key: 1 }, [q(Y(S(e.lastUsedAt)), 1)], 64)) : (Z(), H(E, { key: 2 }, [q(Y(t(T)("rechnungswerk", "nie")), 1)], 64)) : (Z(), H(E, { key: 0 }, [q(Y(t(T)("rechnungswerk", "Widerrufen")), 1)], 64))]),
				z("td", null, [e.revokedAt === null ? (Z(), N(t(G), {
					key: 0,
					variant: "tertiary",
					disabled: u.value,
					onClick: (t) => h.value = e.id
				}, {
					default: _(() => [q(Y(t(T)("rechnungswerk", "Widerrufen")), 1)]),
					_: 1
				}, 8, ["disabled", "onClick"])) : n("", !0)])
			], 2))), 128))])])) : (Z(), H("p", XC, Y(t(T)("rechnungswerk", "Noch kein API-Schlüssel angelegt.")), 1)),
			J(t(G), {
				variant: "primary",
				disabled: u.value,
				onClick: i[0] ||= (e) => o.value = !0
			}, {
				default: _(() => [q(Y(t(T)("rechnungswerk", "API-Schlüssel anlegen")), 1)]),
				_: 1
			}, 8, ["disabled"]),
			o.value ? (Z(), N(t(Ne), {
				key: 4,
				name: t(T)("rechnungswerk", "API-Schlüssel anlegen"),
				onClose: i[5] ||= (e) => o.value = !1
			}, {
				default: _(() => [z("div", ZC, [
					z("h3", null, Y(t(T)("rechnungswerk", "API-Schlüssel anlegen")), 1),
					z("label", QC, [
						z("span", null, Y(t(T)("rechnungswerk", "Name")), 1),
						w(z("input", {
							ref_key: "nameInput",
							ref: g,
							"onUpdate:modelValue": i[1] ||= (e) => s.value = e,
							class: "input",
							type: "text",
							maxlength: "64",
							placeholder: t(T)("rechnungswerk", "z. B. WerkPlus")
						}, null, 8, $C), [[I, s.value]]),
						z("span", ew, Y(t(T)("rechnungswerk", "Der Name ist im Protokoll für alle App-Nutzer sichtbar.")), 1)
					]),
					z("div", tw, [z("span", null, Y(t(T)("rechnungswerk", "Rechte")), 1), (Z(), H(E, null, X(r, (e) => z("label", {
						key: e,
						class: "rw-api-keys__scope"
					}, [w(z("input", {
						"onUpdate:modelValue": i[2] ||= (e) => c.value = e,
						type: "checkbox",
						value: e
					}, null, 8, nw), [[ee, c.value]]), q(" " + Y(b(e)), 1)])), 64))]),
					z("label", rw, [z("span", null, Y(t(T)("rechnungswerk", "Anfragen pro Minute")), 1), w(z("input", {
						"onUpdate:modelValue": i[3] ||= (e) => l.value = e,
						class: "input",
						type: "number",
						min: "1",
						max: ow,
						placeholder: t(T)("rechnungswerk", "Standard: 60")
					}, null, 8, iw), [[I, l.value]])]),
					f.value ? (Z(), N(t($), {
						key: 0,
						type: "error",
						text: f.value
					}, null, 8, ["text"])) : n("", !0),
					z("div", aw, [J(t(G), { onClick: i[4] ||= (e) => o.value = !1 }, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Abbrechen")), 1)]),
						_: 1
					}), J(t(G), {
						variant: "primary",
						disabled: u.value || !v.value,
						onClick: te
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Anlegen")), 1)]),
						_: 1
					}, 8, ["disabled"])])
				])]),
				_: 1
			}, 8, ["name"])) : n("", !0),
			J(Wf, {
				open: h.value !== null,
				name: t(T)("rechnungswerk", "API-Schlüssel widerrufen"),
				message: t(T)("rechnungswerk", "Programme mit diesem Schlüssel verlieren sofort den Zugang. Widerrufen lässt sich ein Schlüssel nicht rückgängig machen. Fortfahren?"),
				confirmLabel: t(T)("rechnungswerk", "Widerrufen"),
				onClose: i[6] ||= (e) => h.value = null,
				onConfirm: ne
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-c6711252"]]), cw = () => vs("/license"), lw = (e) => xs("/license", { key: e }), uw = () => ys("/license/trial", {}), dw = () => ys("/license/refresh", {}), fw = () => Ss("/license"), pw = { class: "rw-werkplus" }, mw = { class: "rw-hint" }, hw = { key: 0 }, gw = { key: 1 }, _w = {
	key: 5,
	class: "rw-werkplus__facts"
}, vw = { class: "rw-field" }, yw = ["placeholder"], bw = { class: "rw-werkplus__actions" }, xw = { class: "rw-werkplus__privacy" }, Sw = { class: "rw-werkplus__label" }, Cw = { class: "rw-hint" }, ww = { class: "rw-hint" }, Tw = { class: "rw-hint" }, Ew = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "WerkPlusSettings",
	setup(e) {
		let r = y(null), i = y(""), a = y(!1), o = y(""), s = y(""), c = y(""), l = y(""), u = y(!1), d = y(!1), f = ["TRIAL_ALREADY_USED"], p = L(() => r.value?.state === "valid" || r.value?.state === "grace"), m = L(() => r.value?.tier === "werkplus" ? "WerkPlus" : T("rechnungswerk", "Frei")), h = L(() => {
			let e = r.value;
			if (!e) return null;
			switch (e.state) {
				case "valid": return {
					type: "success",
					text: T("rechnungswerk", "WerkPlus ist aktiv.")
				};
				case "grace": return {
					type: "warning",
					text: T("rechnungswerk", "Die Lizenz ist abgelaufen und konnte noch nicht erneuert werden. Die Funktionen bleiben bis {date} erhalten.", { date: e.graceUntil ? g(e.graceUntil) : "" })
				};
				case "expired": return {
					type: "error",
					text: T("rechnungswerk", "Die Lizenz ist abgelaufen. RechnungsWerk arbeitet im freien Umfang weiter.")
				};
				case "invalid": return {
					type: "error",
					text: T("rechnungswerk", "Der gespeicherte Lizenznachweis ist ungültig. Bitte prüfe die Lizenz erneut.")
				};
				default: return null;
			}
		});
		function g(e) {
			return new Date(e).toLocaleDateString();
		}
		function v(e) {
			return new Date(e).toLocaleString();
		}
		async function b() {
			try {
				r.value = await cw(), o.value = "";
			} catch (e) {
				o.value = e.message ?? T("rechnungswerk", "Lizenzstatus konnte nicht geladen werden.");
			}
		}
		async function x(e) {
			a.value = !0, s.value = "", c.value = "";
			try {
				r.value = await e(), i.value = "";
			} catch (e) {
				let { message: t, code: n } = e, r = t ?? T("rechnungswerk", "WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut.");
				n && f.includes(n) ? c.value = r : s.value = r, await b();
			} finally {
				a.value = !1;
			}
		}
		function S() {
			return l.value = "", x(() => lw(i.value.trim()));
		}
		function ee() {
			return d.value = !1, l.value = "", x(async () => {
				let e = await uw();
				return l.value = e.key, e.status;
			});
		}
		function C() {
			return x(dw);
		}
		function te() {
			return u.value = !1, l.value = "", x(fw);
		}
		return Pe(b), (e, f) => (Z(), H("div", pw, [
			z("p", mw, Y(t(T)("rechnungswerk", "Mit einem WerkPlus-Schlüssel schaltet RechnungsWerk zusätzliche Funktionen frei. Ohne Schlüssel bleibt alles, wie es ist.")), 1),
			o.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: o.value
			}, null, 8, ["text"])) : n("", !0),
			r.value ? (Z(), H(E, { key: 1 }, [
				h.value ? (Z(), N(t($), {
					key: 0,
					type: h.value.type,
					text: h.value.text
				}, null, 8, ["type", "text"])) : n("", !0),
				l.value ? (Z(), N(t($), {
					key: 1,
					type: "success",
					class: "rw-werkplus__trial-key"
				}, {
					default: _(() => [
						p.value ? (Z(), H("p", hw, Y(t(T)("rechnungswerk", "Der Testzeitraum läuft. Das ist dein WerkPlus-Schlüssel:")), 1)) : (Z(), H("p", gw, Y(t(T)("rechnungswerk", "Der Testzeitraum ist gestartet, die Lizenz konnte aber noch nicht geprüft werden. Mit „Jetzt prüfen“ versuchst du es erneut. Das ist dein WerkPlus-Schlüssel:")), 1)),
						z("p", null, [z("code", null, Y(l.value), 1)]),
						z("p", null, Y(t(T)("rechnungswerk", "Bitte bewahre ihn sicher auf. Er ist hinterlegt, wird aber nur jetzt vollständig angezeigt.")), 1)
					]),
					_: 1
				})) : n("", !0),
				c.value ? (Z(), N(t($), {
					key: 2,
					type: "info",
					text: c.value
				}, null, 8, ["text"])) : n("", !0),
				s.value ? (Z(), N(t($), {
					key: 3,
					type: "error",
					text: s.value
				}, null, 8, ["text"])) : r.value.lastError ? (Z(), N(t($), {
					key: 4,
					type: "warning",
					text: r.value.lastError.message
				}, null, 8, ["text"])) : n("", !0),
				r.value.keySet ? (Z(), H("dl", _w, [
					z("dt", null, Y(t(T)("rechnungswerk", "Tarif")), 1),
					z("dd", null, Y(m.value), 1),
					r.value.licensedEmployees ? (Z(), H(E, { key: 0 }, [z("dt", null, Y(t(T)("rechnungswerk", "Lizenzierte Mitarbeitende")), 1), z("dd", null, Y(r.value.licensedEmployees), 1)], 64)) : n("", !0),
					r.value.expiresAt ? (Z(), H(E, { key: 1 }, [z("dt", null, Y(t(T)("rechnungswerk", "Gültig bis")), 1), z("dd", null, Y(g(r.value.expiresAt)), 1)], 64)) : n("", !0),
					z("dt", null, Y(t(T)("rechnungswerk", "Letzte erfolgreiche Prüfung")), 1),
					z("dd", null, Y(r.value.lastCheckAt ? v(r.value.lastCheckAt) : t(T)("rechnungswerk", "noch keine")), 1),
					z("dt", null, Y(t(T)("rechnungswerk", "Schlüssel")), 1),
					z("dd", null, Y(r.value.keyHint), 1)
				])) : n("", !0),
				z("label", vw, [z("span", null, Y(t(T)("rechnungswerk", "WerkPlus-Schlüssel")), 1), w(z("input", {
					"onUpdate:modelValue": f[0] ||= (e) => i.value = e,
					class: "rw-input",
					type: "text",
					autocomplete: "off",
					spellcheck: "false",
					placeholder: r.value.keySet ? t(T)("rechnungswerk", "gespeichert, leer lassen") : "wp_…"
				}, null, 8, yw), [[I, i.value]])]),
				z("div", bw, [
					J(t(G), {
						variant: "primary",
						disabled: a.value || !i.value.trim() && !r.value.keySet,
						onClick: S
					}, {
						default: _(() => [q(Y(r.value.keySet ? t(T)("rechnungswerk", "Speichern und prüfen") : t(T)("rechnungswerk", "Schlüssel prüfen und speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					r.value.keySet ? n("", !0) : (Z(), N(t(G), {
						key: 0,
						disabled: a.value,
						onClick: f[1] ||= (e) => d.value = !0
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "30 Tage testen")), 1)]),
						_: 1
					}, 8, ["disabled"])),
					r.value.keySet ? (Z(), N(t(G), {
						key: 1,
						disabled: a.value,
						onClick: C
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Jetzt prüfen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0),
					r.value.keySet ? (Z(), N(t(G), {
						key: 2,
						variant: "tertiary",
						disabled: a.value,
						onClick: f[2] ||= (e) => u.value = !0
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Schlüssel entfernen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0)
				]),
				z("div", xw, [
					z("span", Sw, Y(t(T)("rechnungswerk", "Was an WerkPlus übertragen wird")), 1),
					z("p", Cw, Y(t(T)("rechnungswerk", "Die Kennung dieser Installation, die Version von RechnungsWerk und, sobald vorhanden, der Schlüssel. Nicht übertragen werden Rechnungen, Kunden oder andere Belegdaten, Personendaten, Nextcloud-Benutzer oder Dateien.")), 1),
					z("p", ww, Y(t(T)("rechnungswerk", "Die Lizenz wird auf diesem Server geprüft. Ist WerkPlus nicht erreichbar, arbeitet RechnungsWerk normal weiter.")), 1),
					z("p", Tw, [q(Y(t(T)("rechnungswerk", "Kennung dieser Installation:")) + " ", 1), z("code", null, Y(r.value.instanceUuid), 1)])
				])
			], 64)) : n("", !0),
			J(Wf, {
				open: d.value,
				name: t(T)("rechnungswerk", "WerkPlus 30 Tage testen"),
				message: t(T)("rechnungswerk", "Der Testzeitraum läuft 30 Tage, braucht keine Zahlungsdaten und ist je Installation nur einmal möglich. Jetzt starten?"),
				confirmLabel: t(T)("rechnungswerk", "Testzeitraum starten"),
				onClose: f[3] ||= (e) => d.value = !1,
				onConfirm: ee
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			J(Wf, {
				open: u.value,
				name: t(T)("rechnungswerk", "WerkPlus-Schlüssel entfernen"),
				message: t(T)("rechnungswerk", "RechnungsWerk arbeitet danach im freien Umfang. Den Schlüssel kannst du jederzeit wieder eintragen. Fortfahren?"),
				confirmLabel: t(T)("rechnungswerk", "Entfernen"),
				onClose: f[4] ||= (e) => u.value = !1,
				onConfirm: te
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-4c414d2f"]]), Dw = () => vs("/club-settings"), Ow = (e) => xs("/club-settings", e), kw = { class: "rw-section" }, Aw = {
	key: 1,
	class: "rw-field rw-club-group"
}, jw = { class: "rw-club-actions" }, Mw = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "ClubSettingsSection",
	setup(e) {
		let r = Gs(), i = y(!1), a = y(!1), o = y(null), s = y([]), c = y(!1), l = y(!1), u = y(!1), d = y(""), f = L(() => a.value ? T("rechnungswerk", "Wähle hier die Mitgliedergruppe. Lege die Nextcloud-Beitragsgruppen und die Beitragsarten anschließend unter Beitragsabrechnung fest. Die verfügbaren Beitragsarten stammen aus dem Profilfeld „Beitragsart“.") : T("rechnungswerk", "Installiere und aktiviere in Nextcloud die App „Profile fields“. Wähle danach hier die Mitgliedergruppe und konfiguriere unter Beitragsabrechnung die Beitragsgruppen und Beitragsarten. Die verfügbaren Beitragsarten stammen aus dem Profilfeld „Beitragsart“.")), p = L({
			get() {
				return o.value ? s.value.find((e) => e.id === o.value) ?? {
					id: o.value,
					displayName: o.value
				} : null;
			},
			set(e) {
				o.value = e?.id ?? null;
			}
		}), m = L(() => a.value ? !i.value || o.value !== null : !1);
		function h(e) {
			i.value = e;
		}
		async function g() {
			c.value = !0, d.value = "";
			try {
				let e = await Dw();
				i.value = e.clubMode, o.value = e.memberGroup, a.value = e.profileFieldsAvailable, r.setClubMode(e.clubMode);
			} catch (e) {
				d.value = e.message ?? T("rechnungswerk", "Laden fehlgeschlagen");
			} finally {
				c.value = !1;
			}
		}
		async function v() {
			l.value = !0;
			try {
				s.value = await Kh();
			} catch (e) {
				s.value = [], console.error("[rechnungswerk] loading groups:", e);
			} finally {
				l.value = !1;
			}
		}
		async function b() {
			u.value = !0, d.value = "";
			try {
				let e = await Ow({
					clubMode: i.value,
					memberGroup: o.value
				});
				i.value = e.clubMode, o.value = e.memberGroup, a.value = e.profileFieldsAvailable, r.setClubMode(e.clubMode);
			} catch (e) {
				d.value = e.message ?? T("rechnungswerk", "Speichern fehlgeschlagen");
			} finally {
				u.value = !1;
			}
		}
		return Pe(async () => {
			await Promise.all([g(), v()]);
		}), (e, r) => (Z(), H("section", kw, [
			z("h3", null, Y(t(T)("rechnungswerk", "Verein")), 1),
			J(t(Ke), {
				type: "switch",
				modelValue: i.value,
				disabled: c.value || u.value || !a.value,
				"onUpdate:modelValue": h
			}, {
				default: _(() => [q(Y(t(T)("rechnungswerk", "Vereinsmodus aktivieren")), 1)]),
				_: 1
			}, 8, ["modelValue", "disabled"]),
			c.value ? n("", !0) : (Z(), N(t($), {
				key: 0,
				type: "info",
				text: f.value
			}, null, 8, ["text"])),
			i.value ? (Z(), H("label", Aw, [z("span", null, Y(t(T)("rechnungswerk", "Mitgliedergruppe")), 1), J(t(Tt), {
				modelValue: p.value,
				"onUpdate:modelValue": r[0] ||= (e) => p.value = e,
				options: s.value,
				loading: l.value,
				disabled: c.value || u.value,
				label: "displayName",
				clearable: !0
			}, null, 8, [
				"modelValue",
				"options",
				"loading",
				"disabled"
			])])) : n("", !0),
			d.value ? (Z(), N(t($), {
				key: 2,
				type: "error",
				text: d.value
			}, null, 8, ["text"])) : n("", !0),
			z("div", jw, [J(t(G), {
				variant: "primary",
				disabled: c.value || u.value || !m.value,
				onClick: b
			}, {
				default: _(() => [q(Y(t(T)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])
		]));
	}
}), [["__scopeId", "data-v-2277fe75"]]);
function Nw(e) {
	if (typeof e != "string") return null;
	let t = e.trim().replace(/^#/, "");
	if (t.length === 3 && (t = t.split("").map((e) => e + e).join("")), !/^[0-9a-fA-F]{6}$/.test(t)) return null;
	let n = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, r = parseInt(t, 16);
	return .2126 * n(r >> 16 & 255) + .7152 * n(r >> 8 & 255) + .0722 * n(r & 255);
}
function Pw(e, t) {
	let [n, r] = e > t ? [e, t] : [t, e];
	return (n + .05) / (r + .05);
}
function Fw(e) {
	let t = Nw(e);
	return t === null ? "#000000" : Pw(t, 1) >= Pw(t, 0) ? "#ffffff" : "#000000";
}
function Iw(e) {
	let t = Nw(e);
	return t !== null && Pw(t, 1) < 4.5;
}
// src/utils/invoiceNumber.ts
function Lw(e, t, n, r, i) {
	return e.replace(/\{YYYY\}/g, String(n).padStart(4, "0")).replace(/\{YY\}/g, String(n % 100).padStart(2, "0")).replace(/\{MM\}/g, String(r).padStart(2, "0")).replace(/\{DD\}/g, String(i).padStart(2, "0")).replace(/\{(#+)\}/g, (e, n) => String(t).padStart(n.length, "0"));
}
// src/utils/fileName.ts
var Rw = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue"
};
function zw(e, t) {
	let n = (e) => String(e).padStart(2, "0"), r = {
		"{nummer}": t.nummer,
		"{YYYY}": String(t.date.getFullYear()),
		"{MM}": n(t.date.getMonth() + 1),
		"{DD}": n(t.date.getDate()),
		"{kunde}": t.kunde.replace(/[äöüßÄÖÜ]/g, (e) => Rw[e] ?? e),
		"{typ}": t.typ
	}, i = e.replace(/\{nummer\}|\{YYYY\}|\{MM\}|\{DD\}|\{kunde\}|\{typ\}/g, (e) => r[e]);
	return i = i.replace(/[/\\:*?"<>|]/g, "-").replace(/\s+/g, " ").replace(/^[\s.]+|[\s.]+$/g, "").slice(0, 120), (i || "rechnung-1") + ".pdf";
}
// src/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
var Bw = { class: "rw-view rw-view--narrow" }, Vw = { class: "rw-settings-title" }, Hw = {
	key: 0,
	class: "rw-settingspage"
}, Uw = { class: "rw-settingspage__content" }, Ww = { class: "rw-section" }, Gw = { class: "rw-field" }, Kw = { class: "rw-field" }, qw = { class: "rw-form-row" }, Jw = { class: "rw-field" }, Yw = { class: "rw-field" }, Xw = { class: "rw-field" }, Zw = ["placeholder"], Qw = { class: "rw-form-row" }, $w = { class: "rw-field" }, eT = { class: "rw-field" }, tT = { class: "rw-field" }, nT = { class: "rw-hint" }, rT = { class: "rw-field" }, iT = ["value"], aT = { class: "rw-hint" }, oT = { class: "rw-section" }, sT = { class: "rw-form-row" }, cT = { class: "rw-field" }, lT = { class: "rw-field" }, uT = { class: "rw-field" }, dT = { class: "rw-hint" }, fT = { class: "rw-section" }, pT = { class: "rw-field rw-field--inline" }, mT = { class: "rw-accent" }, hT = ["aria-label"], gT = { class: "rw-field" }, _T = { class: "rw-accent-preview" }, vT = { class: "rw-hint" }, yT = {
	key: 0,
	class: "rw-hint"
}, bT = { class: "rw-field" }, xT = { class: "rw-logo" }, ST = ["src", "alt"], CT = {
	key: 1,
	class: "rw-logo__empty"
}, wT = { class: "rw-logo__actions" }, TT = { class: "rw-hint" }, ET = { class: "rw-section" }, DT = { class: "rw-field" }, OT = { class: "rw-hint" }, kT = { class: "rw-field" }, AT = { class: "rw-hint" }, jT = { class: "rw-field rw-reset-mode" }, MT = { class: "rw-hint" }, NT = { class: "rw-section" }, PT = { class: "rw-field" }, FT = { class: "rw-hint" }, IT = { class: "rw-field rw-reset-mode" }, LT = { class: "rw-hint" }, RT = { class: "rw-section" }, zT = { class: "rw-field" }, BT = { class: "rw-hint" }, VT = { class: "rw-section" }, HT = {
	key: 0,
	class: "rw-field"
}, UT = ["placeholder"], WT = { class: "rw-hint" }, GT = {
	key: 1,
	class: "rw-field tax-rate-field"
}, KT = ["value"], qT = { class: "rw-section" }, JT = { class: "rw-field rw-field--narrow" }, YT = { class: "rw-hint" }, XT = { class: "rw-section" }, ZT = { class: "rw-field" }, QT = { class: "rw-hint" }, $T = { class: "rw-form-row" }, eE = { class: "rw-field" }, tE = { class: "rw-field" }, nE = { class: "rw-section" }, rE = { class: "rw-field" }, iE = { class: "rw-archive-folder" }, aE = {
	key: 0,
	class: "rw-archive-folder__path"
}, oE = {
	key: 1,
	class: "rw-archive-folder__empty"
}, sE = { class: "rw-field" }, cE = ["placeholder"], lE = { class: "rw-hint" }, uE = { class: "rw-section" }, dE = { class: "rw-hint" }, fE = { class: "rw-form-row" }, pE = { class: "rw-field" }, mE = { class: "rw-field rw-field--narrow" }, hE = { class: "rw-field rw-field--narrow" }, gE = { value: "none" }, _E = { class: "rw-form-row" }, vE = { class: "rw-field" }, yE = { class: "rw-field" }, bE = ["placeholder"], xE = { class: "smtp-test" }, SE = { class: "rw-section" }, CE = { class: "rw-hint" }, wE = { class: "rw-form-row" }, TE = { class: "rw-field" }, EE = { class: "rw-field rw-field--narrow" }, DE = { class: "rw-field rw-field--narrow" }, OE = { class: "rw-form-row" }, kE = { class: "rw-field" }, AE = { class: "rw-field" }, jE = ["placeholder"], ME = { class: "rw-section" }, NE = { class: "rw-hint" }, PE = { class: "rw-section" }, FE = { class: "rw-hint rw-access-intro" }, IE = { class: "rw-access-group" }, LE = { class: "rw-access-label" }, RE = { class: "rw-hint rw-access-desc" }, zE = { class: "rw-access-group" }, BE = { class: "rw-access-label" }, VE = { class: "rw-hint rw-access-desc" }, HE = { class: "rw-section" }, UE = { class: "rw-section" }, WE = { class: "rw-action-bar" }, GE = /*#__PURE__*/ Q(/* @__PURE__ */ W({
	__name: "SettingsView",
	setup(e) {
		let r = ot(), i = ql(), a = y(null), o = y([]), s = L(() => {
			let e = o.value, t = a.value?.timezone ?? "";
			return t !== "" && !e.includes(t) && (e = [t, ...e]), [{
				id: "",
				label: T("rechnungswerk", "Automatisch")
			}, ...e.map((e) => ({
				id: e,
				label: e
			}))];
		}), c = L({
			get: () => a.value?.timezone ?? "",
			set(e) {
				a.value && (a.value.timezone = e || null);
			}
		}), l = L(() => !!a.value?.vatId?.trim() || !!a.value?.registerNumber?.trim()), u = L(() => [
			{
				label: T("rechnungswerk", "Firma"),
				items: [
					{
						key: "firma",
						label: T("rechnungswerk", "Firma"),
						icon: gS
					},
					{
						key: "bank",
						label: T("rechnungswerk", "Bankverbindung"),
						icon: SS
					},
					{
						key: "branding",
						label: T("rechnungswerk", "Branding"),
						icon: OS
					}
				]
			},
			{
				label: T("rechnungswerk", "Belege"),
				items: [
					{
						key: "rechnungsnummer",
						label: T("rechnungswerk", "Rechnungsnummer"),
						icon: zo
					},
					{
						key: "angebotsnummer",
						label: T("rechnungswerk", "Angebotsnummer"),
						icon: PS
					},
					{
						key: "dateiname",
						label: T("rechnungswerk", "PDF-Dateiname"),
						icon: Ra
					},
					{
						key: "texte",
						label: T("rechnungswerk", "Standardtexte"),
						icon: BS
					}
				]
			},
			{
				label: T("rechnungswerk", "Buchhaltung"),
				items: [{
					key: "steuer",
					label: T("rechnungswerk", "Steuer"),
					icon: KS
				}, {
					key: "zahlung",
					label: T("rechnungswerk", "Zahlung"),
					icon: QS
				}]
			},
			{
				label: T("rechnungswerk", "Versand"),
				items: [
					{
						key: "versand",
						label: T("rechnungswerk", "Versand"),
						icon: iC
					},
					{
						key: "smtp",
						label: T("rechnungswerk", "Eigenes SMTP-Konto"),
						icon: uC
					},
					{
						key: "datev",
						label: T("rechnungswerk", "DATEV-Rückmeldung"),
						icon: gC
					}
				]
			},
			{
				label: T("rechnungswerk", "Ablage & Zugriff"),
				items: [{
					key: "ablage",
					label: T("rechnungswerk", "Ablage in Nextcloud"),
					icon: SC
				}, {
					key: "zugriff",
					label: T("rechnungswerk", "Zugriff & Administration"),
					icon: OC
				}]
			},
			{
				label: T("rechnungswerk", "Verein"),
				items: [{
					key: "verein",
					label: T("rechnungswerk", "Verein"),
					icon: OC
				}]
			},
			{
				label: T("rechnungswerk", "Lizenz"),
				items: [{
					key: "werkplus",
					label: T("rechnungswerk", "WerkPlus"),
					icon: PC
				}, {
					key: "apikeys",
					label: T("rechnungswerk", "API-Schlüssel"),
					icon: BC
				}]
			}
		]), d = y("firma");
		function f() {
			r.push({ name: "text-snippets" });
		}
		let p = y(null), m = y(!1), h = y(""), g = y(null);
		async function v(e) {
			h.value = e, await qe(), g.value?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}
		let x = y(!1), S = y(!1), ee = y(!1), C = y(!1), te = y(!1), ne = y(0), D = y((/* @__PURE__ */ new Date()).getFullYear()), re = y((/* @__PURE__ */ new Date()).getMonth() + 1), O = y((/* @__PURE__ */ new Date()).getDate()), k = y(null), ie = y(0), ae = y(null), oe = y(null), se = L(() => a.value?.accentColor || "#2c3e50"), A = L(() => ({
			background: se.value,
			color: Fw(se.value)
		})), j = L(() => Iw(se.value));
		function ce(e) {
			a.value && (a.value.accentColor = e ?? null);
		}
		let le = y([]), ue = y([]), de = y([]), fe = y(!1), M = y(!1), pe = y(""), me = null, he = y(""), P = y(""), ge = y(!1), F = y(""), _e = y(!1), ve = y(!1), ye = L(() => a.value?.logoFileId ? Wl(a.value.logoFileId) : ""), be = L(() => fe.value ? T("rechnungswerk", "Suche läuft\xA0…") : pe.value.trim().length < 2 ? T("rechnungswerk", "Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.") : T("rechnungswerk", "Keine Treffer.")), xe = L(() => a.value?.numberResetMode === "continuous" || D.value === k.value ? ne.value : 0), Se = L(() => xe.value + 1), we = L(() => {
			if (!a.value) return "";
			let e = oe.value && oe.value > 0 ? oe.value : Se.value;
			return Lw(a.value.numberFormat || "RE-{YYYY}-{####}", e, D.value, re.value, O.value);
		}), Te = L(() => {
			if (!a.value) return "";
			let e = a.value.quoteNumberResetMode === "continuous" || D.value === ae.value ? ie.value : 0;
			return Lw(a.value.quoteNumberFormat || "AN-{YYYY}-{####}", e + 1, D.value, re.value, O.value);
		}), Ee = L(() => a.value ? zw(a.value.fileNameFormat || "{nummer}", {
			nummer: we.value,
			date: /* @__PURE__ */ new Date(),
			kunde: "Muster GmbH",
			typ: "Rechnung"
		}) : "");
		Pe(async () => {
			try {
				await i.fetch(), ke();
				let e = await Bs();
				le.value = De(e.admins), ue.value = De(e.users);
			} catch (e) {
				We(e, T("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function De(e) {
			return e.map((e) => ({
				id: e,
				type: e.startsWith("group:") ? "group" : "user",
				displayName: e.replace(/^(user|group):/, "")
			}));
		}
		function Oe(e) {
			pe.value = e, me && clearTimeout(me), e.trim().length < 2 ? (de.value = [], fe.value = !1) : (fe.value = !0, me = setTimeout(async () => {
				try {
					de.value = await Hs(e.trim());
				} catch {
					de.value = [];
				} finally {
					fe.value = !1;
				}
			}, 300));
		}
		function ke() {
			let e = i.settings;
			if (e) {
				ne.value = e.numberCounter, k.value = e.numberCounterYear, ie.value = e.quoteNumberCounter, ae.value = e.quoteNumberCounterYear;
				{
					let t = e.numberResetMode === "continuous" || D.value === e.numberCounterYear ? e.numberCounter : 0;
					oe.value = t + 1;
				}
				p.value = e.archiveFolderPath ?? null, o.value = e.timezones ?? [], a.value = {
					companyName: e.companyName,
					companyAddress: e.companyAddress,
					vatId: e.vatId,
					taxNumber: e.taxNumber,
					registerNumber: e.registerNumber,
					timezone: e.timezone,
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
		function Ae(e) {
			a.value && (e ? x.value = !0 : a.value.smallBusiness = !1);
		}
		function je() {
			x.value = !1, a.value && (a.value.smallBusiness = !0);
		}
		function Me(e) {
			a.value && (e ? S.value = !0 : a.value.datevAutoSend = !1);
		}
		function R() {
			S.value = !1, a.value && (a.value.datevAutoSend = !0);
		}
		function Ne(e) {
			a.value && (e ? ee.value = !0 : a.value.archiveEnabled = !1);
		}
		function Fe() {
			ee.value = !1, a.value && (a.value.archiveEnabled = !0);
		}
		function Ie(e) {
			a.value && e !== a.value.numberResetMode && (e === "continuous" ? C.value = !0 : a.value.numberResetMode = "yearly");
		}
		function Le() {
			C.value = !1, a.value && (a.value.numberResetMode = "continuous");
		}
		function Re(e) {
			a.value && e !== a.value.quoteNumberResetMode && (e === "continuous" ? te.value = !0 : a.value.quoteNumberResetMode = "yearly");
		}
		function B() {
			te.value = !1, a.value && (a.value.quoteNumberResetMode = "continuous");
		}
		async function ze() {
			let e;
			try {
				e = await hb(T("rechnungswerk", "Zielordner für die Ablage wählen")).setMultiSelect(!1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories(!0).addButton({
					label: T("rechnungswerk", "Auswählen"),
					variant: "primary",
					callback: () => {}
				}).build().pick();
			} catch (e) {
				if (e instanceof fb) return;
				We(e, T("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
				return;
			}
			if (e) {
				m.value = !0, h.value = "";
				try {
					let t = await Gl(e);
					a.value && (a.value.archiveFolderId = t.archiveFolderId), p.value = t.archiveFolderPath;
				} catch (e) {
					We(e, T("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
				} finally {
					m.value = !1;
				}
			}
		}
		async function Be() {
			m.value = !0, h.value = "";
			try {
				await Kl(), a.value && (a.value.archiveFolderId = null, a.value.archiveEnabled = !1), p.value = null;
			} catch (e) {
				We(e, T("rechnungswerk", "Zielordner konnte nicht entfernt werden."));
			} finally {
				m.value = !1;
			}
		}
		async function Ve() {
			let e;
			try {
				e = await hb(T("rechnungswerk", "Firmenlogo wählen")).setMultiSelect(!1).setMimeTypeFilter([
					"image/png",
					"image/jpeg",
					"image/gif"
				]).addButton({
					label: T("rechnungswerk", "Auswählen"),
					variant: "primary",
					callback: () => {}
				}).build().pick();
			} catch (e) {
				if (e instanceof fb) return;
				We(e, T("rechnungswerk", "Logo konnte nicht gesetzt werden."));
				return;
			}
			if (e) {
				ve.value = !0, h.value = "";
				try {
					let t = await Hl(e);
					a.value && (a.value.logoFileId = t.logoFileId);
				} catch (e) {
					We(e, T("rechnungswerk", "Logo konnte nicht gesetzt werden."));
				} finally {
					ve.value = !1;
				}
			}
		}
		async function He() {
			ve.value = !0, h.value = "";
			try {
				await Ul(), a.value && (a.value.logoFileId = null);
			} catch (e) {
				We(e, T("rechnungswerk", "Logo konnte nicht entfernt werden."));
			} finally {
				ve.value = !1;
			}
		}
		async function Ue() {
			if (!a.value) return;
			h.value = "";
			let e = (a.value.numberFormat || "").trim();
			if (a.value.numberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(e)) {
				v(T("rechnungswerk", "Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
				return;
			}
			let t = oe.value;
			if (t == null || !Number.isInteger(t) || t < 1) {
				v(T("rechnungswerk", "Die nächste Rechnungsnummer muss eine ganze Zahl ab 1 sein."));
				return;
			}
			if (t < Se.value) {
				v(T("rechnungswerk", "Die nächste Rechnungsnummer muss mindestens {min} sein, da bereits die Nummer {issued} vergeben wurde.", {
					min: Se.value,
					issued: xe.value
				}));
				return;
			}
			let n = (a.value.quoteNumberFormat || "").trim();
			if (a.value.quoteNumberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(n)) {
				v(T("rechnungswerk", "Bei jährlichem Angebots-Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
				return;
			}
			let r = (a.value.fileNameFormat || "").trim();
			if (r !== "" && !r.includes("{nummer}")) {
				v(T("rechnungswerk", "Das Dateinamen-Schema muss den Platzhalter {nummer} enthalten, damit Dateinamen eindeutig bleiben."));
				return;
			}
			let o = [
				{
					value: a.value.contactEmail,
					label: T("rechnungswerk", "Kontakt-E-Mail")
				},
				{
					value: a.value.smtpFromEmail,
					label: T("rechnungswerk", "Absender-E-Mail")
				},
				{
					value: a.value.datevUploadMail,
					label: T("rechnungswerk", "DATEV-Upload-Mail")
				}
			];
			for (let { value: e, label: t } of o) {
				let n = (e || "").trim();
				if (n !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)) {
					v(T("rechnungswerk", "Bitte eine gültige E-Mail-Adresse angeben ({field}).", { field: t }));
					return;
				}
			}
			M.value = !0;
			try {
				let e = { ...a.value };
				t > Se.value && (e.numberCounter = t - 1), delete e.logoFileId, delete e.archiveFolderId, he.value !== "" && (e.smtpPassword = he.value), P.value !== "" && (e.imapPassword = P.value);
				try {
					await i.save(e);
				} catch (e) {
					We(e, T("rechnungswerk", "Speichern der Einstellungen fehlgeschlagen."));
					return;
				}
				try {
					await Vs({
						admins: le.value.map((e) => e.id),
						users: ue.value.map((e) => e.id)
					});
				} catch (e) {
					We(e, T("rechnungswerk", "Einstellungen gespeichert, aber die Zugriffsrechte konnten nicht gespeichert werden. Bitte erneut speichern."));
					return;
				}
				he.value = "", P.value = "", ke();
			} finally {
				M.value = !1;
			}
		}
		async function V() {
			if (a.value?.smtpHost) {
				ge.value = !0, F.value = "";
				try {
					await zl({
						host: a.value.smtpHost,
						port: a.value.smtpPort ?? 587,
						security: a.value.smtpSecurity || "starttls",
						user: a.value.smtpUser ?? "",
						password: he.value
					}), _e.value = !0, F.value = T("rechnungswerk", "Verbindung erfolgreich.");
				} catch (e) {
					_e.value = !1, F.value = e.message ?? T("rechnungswerk", "Verbindung fehlgeschlagen.");
				} finally {
					ge.value = !1;
				}
			}
		}
		function We(e, t) {
			v(e.message ?? t), console.error("[rechnungswerk] settings:", e);
		}
		return (e, r) => (Z(), H("div", Bw, [
			z("h2", Vw, Y(t(T)("rechnungswerk", "Einstellungen")), 1),
			z("div", {
				ref_key: "errorAnchor",
				ref: g
			}, [h.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: h.value
			}, null, 8, ["text"])) : n("", !0)], 512),
			a.value ? (Z(), H("div", Hw, [J(uS, {
				groups: u.value,
				modelValue: d.value,
				ariaLabel: t(T)("rechnungswerk", "Einstellungs-Navigation"),
				"onUpdate:modelValue": r[0] ||= (e) => d.value = e
			}, null, 8, [
				"groups",
				"modelValue",
				"ariaLabel"
			]), z("div", Uw, [
				w(z("section", Ww, [
					z("h3", null, Y(t(T)("rechnungswerk", "Firma")), 1),
					z("label", Gw, [z("span", null, Y(t(T)("rechnungswerk", "Firmenname")), 1), w(z("input", {
						"onUpdate:modelValue": r[1] ||= (e) => a.value.companyName = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.companyName]])]),
					z("label", Kw, [z("span", null, Y(t(T)("rechnungswerk", "Adresse")), 1), w(z("textarea", {
						"onUpdate:modelValue": r[2] ||= (e) => a.value.companyAddress = e,
						class: "rw-input",
						rows: "3"
					}, null, 512), [[I, a.value.companyAddress]])]),
					z("div", qw, [z("label", Jw, [z("span", null, Y(t(T)("rechnungswerk", "USt-IdNr.")), 1), w(z("input", {
						"onUpdate:modelValue": r[3] ||= (e) => a.value.vatId = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.vatId]])]), z("label", Yw, [z("span", null, Y(t(T)("rechnungswerk", "Steuernummer")), 1), w(z("input", {
						"onUpdate:modelValue": r[4] ||= (e) => a.value.taxNumber = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.taxNumber]])])]),
					z("label", Xw, [z("span", null, Y(t(T)("rechnungswerk", "Registernummer")), 1), w(z("input", {
						"onUpdate:modelValue": r[5] ||= (e) => a.value.registerNumber = e,
						class: "rw-input",
						type: "text",
						placeholder: t(T)("rechnungswerk", "z. B. HRB 12345, Amtsgericht Stuttgart")
					}, null, 8, Zw), [[I, a.value.registerNumber]])]),
					l.value ? n("", !0) : (Z(), N(t($), {
						key: 0,
						type: "warning",
						heading: t(T)("rechnungswerk", "Deine E-Rechnungen lösen bei Prüfprogrammen einen Fehler aus."),
						text: t(T)("rechnungswerk", "Ohne USt-IdNr. oder Registernummer (z. B. Handelsregister) meldet die Prüfung nach EN 16931 einen Fehler. Steuerlich ist das unschädlich, die Steuernummer reicht als Pflichtangabe. Manche Unternehmen weisen solche Rechnungen aber automatisch zurück. Trage für Rechnungen an Unternehmen deshalb eines der beiden Felder ein. Eine USt-IdNr. kannst du kostenlos beim Bundeszentralamt für Steuern beantragen, auch als Kleinunternehmer.")
					}, null, 8, ["heading", "text"])),
					z("div", Qw, [
						z("label", $w, [z("span", null, Y(t(T)("rechnungswerk", "Ansprechpartner")), 1), w(z("input", {
							"onUpdate:modelValue": r[6] ||= (e) => a.value.contactPerson = e,
							class: "rw-input",
							type: "text"
						}, null, 512), [[I, a.value.contactPerson]])]),
						z("label", eT, [z("span", null, Y(t(T)("rechnungswerk", "Telefon")), 1), w(z("input", {
							"onUpdate:modelValue": r[7] ||= (e) => a.value.contactPhone = e,
							class: "rw-input",
							type: "text"
						}, null, 512), [[I, a.value.contactPhone]])]),
						z("label", tT, [z("span", null, Y(t(T)("rechnungswerk", "Kontakt-E-Mail")), 1), w(z("input", {
							"onUpdate:modelValue": r[8] ||= (e) => a.value.contactEmail = e,
							class: "rw-input",
							type: "email"
						}, null, 512), [[I, a.value.contactEmail]])])
					]),
					z("p", nT, Y(t(T)("rechnungswerk", "Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).")), 1),
					z("label", rT, [z("span", null, Y(t(T)("rechnungswerk", "Zeitzone")), 1), w(z("select", {
						"onUpdate:modelValue": r[9] ||= (e) => c.value = e,
						class: "rw-input"
					}, [(Z(!0), H(E, null, X(s.value, (e) => (Z(), H("option", {
						key: e.id,
						value: e.id
					}, Y(e.label), 9, iT))), 128))], 512), [[Ce, c.value]])]),
					z("p", aT, Y(t(T)("rechnungswerk", "Bestimmt, welcher Tag „heute“ ist: Rechnungsdatum, Jahr der Rechnungsnummer, Fälligkeit und Zahlungsdatum. Automatisch nimmt die Zeitzone des Servers, ist dort keine eingestellt, Europe/Berlin.")), 1)
				], 512), [[b, d.value === "firma"]]),
				w(z("section", oT, [
					z("h3", null, Y(t(T)("rechnungswerk", "Bankverbindung")), 1),
					z("div", sT, [z("label", cT, [z("span", null, Y(t(T)("rechnungswerk", "IBAN")), 1), w(z("input", {
						"onUpdate:modelValue": r[10] ||= (e) => a.value.iban = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.iban]])]), z("label", lT, [z("span", null, Y(t(T)("rechnungswerk", "BIC")), 1), w(z("input", {
						"onUpdate:modelValue": r[11] ||= (e) => a.value.bic = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.bic]])])]),
					z("label", uT, [z("span", null, Y(t(T)("rechnungswerk", "Bankname")), 1), w(z("input", {
						"onUpdate:modelValue": r[12] ||= (e) => a.value.bankName = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.bankName]])]),
					J(t(Ke), {
						type: "switch",
						modelValue: a.value.girocodeEnabled,
						disabled: !a.value.iban && !a.value.girocodeEnabled,
						"onUpdate:modelValue": r[13] ||= (e) => {
							a.value && (a.value.girocodeEnabled = e);
						}
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Girocode (Bezahl-QR-Code) auf Rechnungen anzeigen")), 1)]),
						_: 1
					}, 8, ["modelValue", "disabled"]),
					z("p", dT, Y(t(T)("rechnungswerk", "Druckt einen EPC-QR-Code neben die Bankverbindung: Kunden scannen ihn mit der Banking-App, Empfänger, Betrag und Verwendungszweck sind vorausgefüllt. Erscheint nur auf Rechnungen mit positivem Betrag, nicht auf Stornobelegen.")), 1)
				], 512), [[b, d.value === "bank"]]),
				w(z("section", fT, [
					z("h3", null, Y(t(T)("rechnungswerk", "Branding")), 1),
					z("div", pT, [z("span", null, Y(t(T)("rechnungswerk", "Akzentfarbe")), 1), z("div", mT, [J(t(oS), {
						modelValue: se.value,
						advancedFields: "",
						"onUpdate:modelValue": ce
					}, {
						default: _(() => [z("button", {
							type: "button",
							class: "rw-accent__trigger",
							"aria-label": t(T)("rechnungswerk", "Akzentfarbe") + ": " + se.value.toUpperCase(),
							style: dt(A.value)
						}, Y(se.value.toUpperCase()), 13, hT)]),
						_: 1
					}, 8, ["modelValue"]), a.value.accentColor ? (Z(), N(t(G), {
						key: 0,
						variant: "tertiary",
						onClick: r[14] ||= (e) => a.value.accentColor = null
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Zurücksetzen")), 1)]),
						_: 1
					})) : n("", !0)])]),
					z("div", gT, [
						z("table", _T, [z("thead", null, [z("tr", { style: dt(A.value) }, [...r[44] ||= [
							z("th", null, "Beschreibung", -1),
							z("th", { class: "num" }, "Menge", -1),
							z("th", { class: "num" }, "Einzelpreis", -1),
							z("th", { class: "num" }, "Betrag", -1)
						]], 4)]), r[45] ||= z("tbody", null, [z("tr", null, [
							z("td", null, "Beratungsleistung"),
							z("td", { class: "num" }, "2"),
							z("td", { class: "num" }, "95,00 €"),
							z("td", { class: "num" }, "190,00 €")
						])], -1)]),
						z("p", vT, Y(t(T)("rechnungswerk", "So erscheint die Kopfzeile der Positionstabelle auf der Rechnung.")), 1),
						j.value ? (Z(), H("p", yT, Y(t(T)("rechnungswerk", "Auf dieser Farbe wäre weiße Schrift zu blass, deshalb steht sie schwarz auf der Rechnung. Die Farbe selbst bleibt unverändert.")), 1)) : n("", !0)
					]),
					z("div", bT, [
						z("span", null, Y(t(T)("rechnungswerk", "Firmenlogo")), 1),
						z("div", xT, [a.value.logoFileId ? (Z(), H("img", {
							key: 0,
							src: ye.value,
							alt: t(T)("rechnungswerk", "Firmenlogo"),
							class: "rw-logo__preview"
						}, null, 8, ST)) : (Z(), H("span", CT, Y(t(T)("rechnungswerk", "Kein Logo gewählt")), 1)), z("div", wT, [J(t(G), {
							disabled: ve.value,
							onClick: Ve
						}, {
							default: _(() => [q(Y(a.value.logoFileId ? t(T)("rechnungswerk", "Logo ändern") : t(T)("rechnungswerk", "Logo wählen")), 1)]),
							_: 1
						}, 8, ["disabled"]), a.value.logoFileId ? (Z(), N(t(G), {
							key: 0,
							variant: "tertiary",
							disabled: ve.value,
							onClick: He
						}, {
							default: _(() => [q(Y(t(T)("rechnungswerk", "Entfernen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0)])]),
						z("p", TT, Y(t(T)("rechnungswerk", "Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.")), 1)
					])
				], 512), [[b, d.value === "branding"]]),
				w(z("section", ET, [
					z("h3", null, Y(t(T)("rechnungswerk", "Rechnungsnummer")), 1),
					z("label", DT, [z("span", null, Y(t(T)("rechnungswerk", "Format")), 1), w(z("input", {
						"onUpdate:modelValue": r[15] ||= (e) => a.value.numberFormat = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.numberFormat]])]),
					z("p", OT, [
						q(Y(t(T)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
						r[46] ||= z("br", null, null, -1),
						q(" " + Y(t(T)("rechnungswerk", "Vorschau: {preview}", { preview: we.value })), 1)
					]),
					z("label", kT, [z("span", null, Y(t(T)("rechnungswerk", "Nächste Rechnungsnummer")), 1), w(z("input", {
						"onUpdate:modelValue": r[16] ||= (e) => oe.value = e,
						class: "rw-input",
						type: "number",
						min: "1",
						step: "1"
					}, null, 512), [[
						I,
						oe.value,
						void 0,
						{ number: !0 }
					]])]),
					z("p", AT, Y(t(T)("rechnungswerk", "Die laufende Nummer der nächsten Rechnung. Zum Einstieg in eine bestehende Nummernfolge hier den gewünschten Wert setzen. Nummern lassen sich nur vorwärts setzen, nie unter eine bereits vergebene.")), 1),
					z("div", jT, [
						z("span", null, Y(t(T)("rechnungswerk", "Nummernkreis")), 1),
						J(t(Ke), {
							type: "radio",
							name: "rw-reset-mode",
							value: "yearly",
							modelValue: a.value.numberResetMode,
							"onUpdate:modelValue": Ie
						}, {
							default: _(() => [q(Y(t(T)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
							_: 1
						}, 8, ["modelValue"]),
						J(t(Ke), {
							type: "radio",
							name: "rw-reset-mode",
							value: "continuous",
							modelValue: a.value.numberResetMode,
							"onUpdate:modelValue": Ie
						}, {
							default: _(() => [q(Y(t(T)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
							_: 1
						}, 8, ["modelValue"])
					]),
					z("p", MT, Y(t(T)("rechnungswerk", "Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.")), 1)
				], 512), [[b, d.value === "rechnungsnummer"]]),
				w(z("section", NT, [
					z("h3", null, Y(t(T)("rechnungswerk", "Angebotsnummer")), 1),
					z("label", PT, [z("span", null, Y(t(T)("rechnungswerk", "Format")), 1), w(z("input", {
						"onUpdate:modelValue": r[17] ||= (e) => a.value.quoteNumberFormat = e,
						class: "rw-input",
						type: "text",
						placeholder: "AN-{YYYY}-{####}"
					}, null, 512), [[I, a.value.quoteNumberFormat]])]),
					z("p", FT, [
						q(Y(t(T)("rechnungswerk", "Eigener, von den Rechnungen unabhängiger Nummernkreis. Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
						r[47] ||= z("br", null, null, -1),
						q(" " + Y(t(T)("rechnungswerk", "Vorschau: {preview}", { preview: Te.value })), 1)
					]),
					z("div", IT, [
						z("span", null, Y(t(T)("rechnungswerk", "Nummernkreis")), 1),
						J(t(Ke), {
							type: "radio",
							name: "rw-quote-reset-mode",
							value: "yearly",
							modelValue: a.value.quoteNumberResetMode,
							"onUpdate:modelValue": Re
						}, {
							default: _(() => [q(Y(t(T)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
							_: 1
						}, 8, ["modelValue"]),
						J(t(Ke), {
							type: "radio",
							name: "rw-quote-reset-mode",
							value: "continuous",
							modelValue: a.value.quoteNumberResetMode,
							"onUpdate:modelValue": Re
						}, {
							default: _(() => [q(Y(t(T)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
							_: 1
						}, 8, ["modelValue"])
					]),
					z("p", LT, Y(t(T)("rechnungswerk", "Angebote haben keine gesetzliche Nummernkreis-Pflicht; Lücken sind erlaubt. Bei „Jährlich zurücksetzen“ muss das Format dennoch eine Jahreskomponente enthalten.")), 1)
				], 512), [[b, d.value === "angebotsnummer"]]),
				w(z("section", RT, [
					z("h3", null, Y(t(T)("rechnungswerk", "PDF-Dateiname")), 1),
					z("label", zT, [z("span", null, Y(t(T)("rechnungswerk", "Schema")), 1), w(z("input", {
						"onUpdate:modelValue": r[18] ||= (e) => a.value.fileNameFormat = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.fileNameFormat]])]),
					z("p", BT, [
						q(Y(t(T)("rechnungswerk", "Gilt für Download, Kundenmail und DATEV-Mail. Platzhalter: {nummer} Rechnungsnummer, {YYYY}/{MM}/{DD} Rechnungsdatum, {kunde} Kundenname, {typ} Rechnung/Storno. {nummer} ist Pflicht.")) + " ", 1),
						r[48] ||= z("br", null, null, -1),
						q(" " + Y(t(T)("rechnungswerk", "Vorschau: {preview}", { preview: Ee.value })), 1)
					])
				], 512), [[b, d.value === "dateiname"]]),
				w(z("section", VT, [
					z("h3", null, Y(t(T)("rechnungswerk", "Steuer")), 1),
					J(t(Ke), {
						type: "switch",
						modelValue: a.value.smallBusiness,
						"onUpdate:modelValue": Ae
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Kleinunternehmer nach §19 UStG (kein USt-Ausweis)")), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					a.value.smallBusiness ? (Z(), H("label", HT, [
						z("span", null, Y(t(T)("rechnungswerk", "Hinweistext auf der Rechnung (§ 19 UStG)")), 1),
						w(z("textarea", {
							"onUpdate:modelValue": r[19] ||= (e) => a.value.smallBusinessNote = e,
							class: "rw-input",
							rows: "2",
							placeholder: t(Zl)
						}, null, 8, UT), [[I, a.value.smallBusinessNote]]),
						z("span", WT, Y(t(T)("rechnungswerk", "Erscheint bei aktiviertem Kleinunternehmer-Status auf der Rechnung. Leer lassen für den Standardtext.")), 1)
					])) : n("", !0),
					a.value.smallBusiness ? n("", !0) : (Z(), H("label", GT, [z("span", null, Y(t(T)("rechnungswerk", "Standard-USt-Satz")), 1), w(z("select", {
						"onUpdate:modelValue": r[20] ||= (e) => a.value.defaultTaxRateBp = e,
						class: "rw-input"
					}, [(Z(!0), H(E, null, X(t(Xl), (e) => (Z(), H("option", {
						key: e,
						value: e
					}, Y(t(pu)(e)), 9, KT))), 128))], 512), [[
						Ce,
						a.value.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])]))
				], 512), [[b, d.value === "steuer"]]),
				w(z("section", qT, [
					z("h3", null, Y(t(T)("rechnungswerk", "Zahlung")), 1),
					z("label", JT, [z("span", null, Y(t(T)("rechnungswerk", "Standard-Zahlungsziel (Tage)")), 1), w(z("input", {
						"onUpdate:modelValue": r[21] ||= (e) => a.value.defaultPaymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						placeholder: "14"
					}, null, 512), [[
						I,
						a.value.defaultPaymentTermDays,
						void 0,
						{ number: !0 }
					]])]),
					z("p", YT, Y(t(T)("rechnungswerk", "Wird bei neuen Rechnungen als Zahlungsziel vorbelegt. Leer lassen für kein Standardziel.")), 1)
				], 512), [[b, d.value === "zahlung"]]),
				w(z("section", XT, [
					z("h3", null, Y(t(T)("rechnungswerk", "Versand")), 1),
					z("label", ZT, [z("span", null, Y(t(T)("rechnungswerk", "DATEV-Upload-Mail")), 1), w(z("input", {
						"onUpdate:modelValue": r[22] ||= (e) => a.value.datevUploadMail = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[I, a.value.datevUploadMail]])]),
					J(t(Ke), {
						type: "switch",
						modelValue: a.value.datevAutoSend,
						disabled: !a.value.datevUploadMail,
						"onUpdate:modelValue": Me
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "E-Rechnung beim Festschreiben automatisch an DATEV senden")), 1)]),
						_: 1
					}, 8, ["modelValue", "disabled"]),
					z("p", QT, Y(t(T)("rechnungswerk", "Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.")), 1),
					z("div", $T, [z("label", eE, [z("span", null, Y(t(T)("rechnungswerk", "Absender-Name")), 1), w(z("input", {
						"onUpdate:modelValue": r[23] ||= (e) => a.value.smtpFromName = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.smtpFromName]])]), z("label", tE, [z("span", null, Y(t(T)("rechnungswerk", "Absender-E-Mail")), 1), w(z("input", {
						"onUpdate:modelValue": r[24] ||= (e) => a.value.smtpFromEmail = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[I, a.value.smtpFromEmail]])])])
				], 512), [[b, d.value === "versand"]]),
				w(z("section", nE, [
					z("h3", null, Y(t(T)("rechnungswerk", "Ablage in Nextcloud")), 1),
					z("div", rE, [z("span", null, Y(t(T)("rechnungswerk", "Zielordner")), 1), z("div", iE, [
						p.value ? (Z(), H("span", aE, Y(p.value), 1)) : (Z(), H("span", oE, Y(t(T)("rechnungswerk", "Kein Ordner gewählt")), 1)),
						J(t(G), {
							disabled: m.value,
							onClick: ze
						}, {
							default: _(() => [q(Y(p.value ? t(T)("rechnungswerk", "Ordner ändern") : t(T)("rechnungswerk", "Ordner wählen")), 1)]),
							_: 1
						}, 8, ["disabled"]),
						p.value ? (Z(), N(t(G), {
							key: 2,
							variant: "tertiary",
							disabled: m.value,
							onClick: Be
						}, {
							default: _(() => [q(Y(t(T)("rechnungswerk", "Entfernen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0)
					])]),
					J(t(Ke), {
						type: "switch",
						modelValue: a.value.archiveEnabled,
						disabled: !a.value.archiveFolderId,
						"onUpdate:modelValue": Ne
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "ZUGFeRD-PDF beim Festschreiben automatisch im Zielordner ablegen")), 1)]),
						_: 1
					}, 8, ["modelValue", "disabled"]),
					z("label", sE, [z("span", null, Y(t(T)("rechnungswerk", "Unterordner (optional)")), 1), w(z("input", {
						"onUpdate:modelValue": r[25] ||= (e) => a.value.archiveSubfolder = e,
						class: "rw-input",
						type: "text",
						placeholder: t(T)("rechnungswerk", "z. B. {YYYY}")
					}, null, 8, cE), [[I, a.value.archiveSubfolder]])]),
					z("p", lE, [
						q(Y(t(T)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {MM} Monat, {DD} Tag (Rechnungsdatum). Unterordner werden bei Bedarf angelegt. Vorhandene Dateien werden nie überschrieben.")) + " ", 1),
						r[49] ||= z("br", null, null, -1),
						q(" " + Y(t(T)("rechnungswerk", "Komfort-Ablage für den Team-Zugriff. Kein revisionssicheres Archiv, die GoBD-Archivierung erfolgt über DATEV bzw. Steuerberater.")), 1)
					])
				], 512), [[b, d.value === "ablage"]]),
				w(z("section", uE, [
					z("h3", null, Y(t(T)("rechnungswerk", "Eigenes SMTP-Konto (optional)")), 1),
					z("p", dE, Y(t(T)("rechnungswerk", "Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).")), 1),
					z("div", fE, [
						z("label", pE, [z("span", null, Y(t(T)("rechnungswerk", "Server (Host)")), 1), w(z("input", {
							"onUpdate:modelValue": r[26] ||= (e) => a.value.smtpHost = e,
							class: "rw-input",
							type: "text",
							placeholder: "smtp.example.com"
						}, null, 512), [[I, a.value.smtpHost]])]),
						z("label", mE, [z("span", null, Y(t(T)("rechnungswerk", "Port")), 1), w(z("input", {
							"onUpdate:modelValue": r[27] ||= (e) => a.value.smtpPort = e,
							class: "rw-input",
							type: "number",
							placeholder: "587"
						}, null, 512), [[
							I,
							a.value.smtpPort,
							void 0,
							{ number: !0 }
						]])]),
						z("label", hE, [z("span", null, Y(t(T)("rechnungswerk", "Verschlüsselung")), 1), w(z("select", {
							"onUpdate:modelValue": r[28] ||= (e) => a.value.smtpSecurity = e,
							class: "rw-input"
						}, [
							r[50] ||= z("option", { value: "starttls" }, "STARTTLS", -1),
							r[51] ||= z("option", { value: "ssl" }, "SSL/TLS", -1),
							z("option", gE, Y(t(T)("rechnungswerk", "Keine")), 1)
						], 512), [[Ce, a.value.smtpSecurity]])])
					]),
					z("div", _E, [z("label", vE, [z("span", null, Y(t(T)("rechnungswerk", "Benutzer")), 1), w(z("input", {
						"onUpdate:modelValue": r[29] ||= (e) => a.value.smtpUser = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.smtpUser]])]), z("label", yE, [z("span", null, Y(t(T)("rechnungswerk", "Passwort")), 1), w(z("input", {
						"onUpdate:modelValue": r[30] ||= (e) => he.value = e,
						class: "rw-input",
						type: "password",
						placeholder: a.value.smtpPasswordSet ? t(T)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
					}, null, 8, bE), [[I, he.value]])])]),
					z("div", xE, [J(t(G), {
						disabled: !a.value.smtpHost || ge.value,
						onClick: V
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Verbindung testen")), 1)]),
						_: 1
					}, 8, ["disabled"]), F.value ? (Z(), H("span", {
						key: 0,
						class: U(["smtp-test__result", _e.value ? "rw-ok" : "rw-err"])
					}, Y(F.value), 3)) : n("", !0)])
				], 512), [[b, d.value === "smtp"]]),
				w(z("section", SE, [
					z("h3", null, Y(t(T)("rechnungswerk", "DATEV-Rückmeldung (IMAP, optional)")), 1),
					z("p", CE, Y(t(T)("rechnungswerk", "DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.")), 1),
					z("div", wE, [
						z("label", TE, [z("span", null, Y(t(T)("rechnungswerk", "Server (Host)")), 1), w(z("input", {
							"onUpdate:modelValue": r[31] ||= (e) => a.value.imapHost = e,
							class: "rw-input",
							type: "text",
							placeholder: "imap.example.com"
						}, null, 512), [[I, a.value.imapHost]])]),
						z("label", EE, [z("span", null, Y(t(T)("rechnungswerk", "Port")), 1), w(z("input", {
							"onUpdate:modelValue": r[32] ||= (e) => a.value.imapPort = e,
							class: "rw-input",
							type: "number",
							placeholder: "993"
						}, null, 512), [[
							I,
							a.value.imapPort,
							void 0,
							{ number: !0 }
						]])]),
						z("label", DE, [z("span", null, Y(t(T)("rechnungswerk", "Verschlüsselung")), 1), w(z("select", {
							"onUpdate:modelValue": r[33] ||= (e) => a.value.imapSecurity = e,
							class: "rw-input"
						}, [...r[52] ||= [
							z("option", { value: "ssl" }, "SSL/TLS", -1),
							z("option", { value: "starttls" }, "STARTTLS", -1),
							z("option", { value: "tls" }, "TLS", -1)
						]], 512), [[Ce, a.value.imapSecurity]])])
					]),
					z("div", OE, [z("label", kE, [z("span", null, Y(t(T)("rechnungswerk", "Benutzer")), 1), w(z("input", {
						"onUpdate:modelValue": r[34] ||= (e) => a.value.imapUser = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, a.value.imapUser]])]), z("label", AE, [z("span", null, Y(t(T)("rechnungswerk", "Passwort")), 1), w(z("input", {
						"onUpdate:modelValue": r[35] ||= (e) => P.value = e,
						class: "rw-input",
						type: "password",
						placeholder: a.value.imapPasswordSet ? t(T)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
					}, null, 8, jE), [[I, P.value]])])]),
					J(t(Ke), {
						modelValue: a.value.imapCleanup,
						disabled: !a.value.imapHost,
						"onUpdate:modelValue": r[36] ||= (e) => a.value.imapCleanup = e
					}, {
						default: _(() => [q(Y(t(T)("rechnungswerk", "Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)")), 1)]),
						_: 1
					}, 8, ["modelValue", "disabled"])
				], 512), [[b, d.value === "datev"]]),
				w(z("section", ME, [
					z("h3", null, Y(t(T)("rechnungswerk", "Standardtexte")), 1),
					z("p", NE, Y(t(T)("rechnungswerk", "Anrede-, Einleitungs- und Schlusstexte werden jetzt als Textbausteine verwaltet – getrennt für Rechnungen und Angebote, mit mehreren Vorlagen je Textbereich.")), 1),
					J(t(G), { onClick: f }, {
						icon: _(() => [J(co, { size: 20 })]),
						default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Textbausteine verwalten")), 1)]),
						_: 1
					})
				], 512), [[b, d.value === "texte"]]),
				w(z("section", PE, [
					z("h3", null, Y(t(T)("rechnungswerk", "Zugriff & Administration")), 1),
					z("p", FE, Y(t(T)("rechnungswerk", "Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.")), 1),
					z("div", IE, [
						z("span", LE, Y(t(T)("rechnungswerk", "App-Administratoren")), 1),
						z("p", RE, Y(t(T)("rechnungswerk", "Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.")), 1),
						J(t(Tt), {
							modelValue: le.value,
							"onUpdate:modelValue": r[37] ||= (e) => le.value = e,
							options: de.value,
							loading: fe.value,
							multiple: !0,
							keepOpen: "",
							label: "displayName",
							placeholder: t(T)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
							onSearch: Oe
						}, {
							"no-options": _(() => [q(Y(be.value), 1)]),
							_: 1
						}, 8, [
							"modelValue",
							"options",
							"loading",
							"placeholder"
						])
					]),
					z("div", zE, [
						z("span", BE, Y(t(T)("rechnungswerk", "Berechtigte Nutzer")), 1),
						z("p", VE, Y(t(T)("rechnungswerk", "Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.")), 1),
						J(t(Tt), {
							modelValue: ue.value,
							"onUpdate:modelValue": r[38] ||= (e) => ue.value = e,
							options: de.value,
							loading: fe.value,
							multiple: !0,
							keepOpen: "",
							label: "displayName",
							placeholder: t(T)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
							onSearch: Oe
						}, {
							"no-options": _(() => [q(Y(be.value), 1)]),
							_: 1
						}, 8, [
							"modelValue",
							"options",
							"loading",
							"placeholder"
						])
					])
				], 512), [[b, d.value === "zugriff"]]),
				w(z("div", null, [J(Mw)], 512), [[b, d.value === "verein"]]),
				w(z("section", HE, [z("h3", null, Y(t(T)("rechnungswerk", "WerkPlus")), 1), J(Ew)], 512), [[b, d.value === "werkplus"]]),
				w(z("section", UE, [z("h3", null, Y(t(T)("rechnungswerk", "API-Schlüssel")), 1), J(sw)], 512), [[b, d.value === "apikeys"]]),
				w(z("div", WE, [J(t(G), {
					variant: "primary",
					disabled: t(i).saving || M.value,
					onClick: Ue
				}, {
					icon: _(() => [J($y, { size: 20 })]),
					default: _(() => [q(" " + Y(t(T)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])], 512), [[b, d.value !== "werkplus" && d.value !== "verein"]])
			])])) : n("", !0),
			J(Wf, {
				open: x.value,
				name: t(T)("rechnungswerk", "Kleinunternehmer §19 aktivieren"),
				message: t(T)("rechnungswerk", "Damit werden künftige Rechnungen ohne Umsatzsteuer ausgewiesen (§19 UStG). Bestehende festgeschriebene Rechnungen bleiben unverändert. Fortfahren?"),
				confirmLabel: t(T)("rechnungswerk", "Aktivieren"),
				onClose: r[39] ||= (e) => x.value = !1,
				onConfirm: je
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			J(Wf, {
				open: S.value,
				name: t(T)("rechnungswerk", "Automatischen DATEV-Versand aktivieren"),
				message: t(T)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben automatisch eine E-Mail mit der E-Rechnung an die hinterlegte DATEV-Upload-Mail gesendet. Fortfahren?"),
				confirmLabel: t(T)("rechnungswerk", "Aktivieren"),
				onClose: r[40] ||= (e) => S.value = !1,
				onConfirm: R
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			J(Wf, {
				open: ee.value,
				name: t(T)("rechnungswerk", "Automatische Ablage aktivieren"),
				message: t(T)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben die ZUGFeRD-PDF automatisch im gewählten Ordner abgelegt. Alle Personen mit Zugriff auf den Ordner können die Rechnungen sehen. Fortfahren?"),
				confirmLabel: t(T)("rechnungswerk", "Aktivieren"),
				onClose: r[41] ||= (e) => ee.value = !1,
				onConfirm: Fe
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			J(Wf, {
				open: C.value,
				name: t(T)("rechnungswerk", "Nummernkreis auf „Fortlaufend“ stellen"),
				message: t(T)("rechnungswerk", "Der Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Der Modus wirkt sich auf alle künftig festgeschriebenen Rechnungen aus. Fortfahren?"),
				confirmLabel: t(T)("rechnungswerk", "Fortlaufend aktivieren"),
				onClose: r[42] ||= (e) => C.value = !1,
				onConfirm: Le
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			J(Wf, {
				open: te.value,
				name: t(T)("rechnungswerk", "Angebots-Nummernkreis auf „Fortlaufend“ stellen"),
				message: t(T)("rechnungswerk", "Der Angebots-Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Fortfahren?"),
				confirmLabel: t(T)("rechnungswerk", "Fortlaufend aktivieren"),
				onClose: r[43] ||= (e) => te.value = !1,
				onConfirm: B
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-555facc6"]]), KE = { class: "rw-view" }, qE = { class: "rw-view__head" }, JE = { class: "rw-view__actions" }, YE = ["placeholder", "aria-label"], XE = { class: "rw-hint" }, ZE = {
	key: 2,
	class: "rw-table-wrap"
}, QE = { class: "rw-table" }, $E = { class: "rw-muted" }, eD = 50, tD = [
	{
		path: "/",
		redirect: { name: "invoices" }
	},
	{
		path: "/invoices",
		name: "invoices",
		component: Xu
	},
	{
		path: "/invoices/new",
		name: "invoice-new",
		component: Gh
	},
	{
		path: "/invoices/:id",
		name: "invoice-detail",
		component: Gh,
		props: !0
	},
	{
		path: "/membership-fees",
		name: "membership-fees",
		component: y_
	},
	{
		path: "/quotes",
		name: "quotes",
		component: H_
	},
	{
		path: "/quotes/new",
		name: "quote-new",
		component: Gh
	},
	{
		path: "/quotes/:id",
		name: "quote-detail",
		component: Gh,
		props: !0
	},
	{
		path: "/customers",
		name: "customers",
		component: qy
	},
	{
		path: "/products",
		name: "products",
		component: hv
	},
	{
		path: "/text-snippets",
		name: "text-snippets",
		component: Gv
	},
	{
		path: "/me",
		name: "my-contact",
		component: cb
	},
	{
		path: "/audit",
		name: "audit",
		component: /* @__PURE__ */ W({
			__name: "AuditView",
			setup(e) {
				let r = y([]), i = y(""), a = y(!1), o = y(!1), s = y(!1), c = y("");
				function u(e) {
					return {
						name: e.documentType === "quote" ? "quote-detail" : "invoice-detail",
						params: { id: String(e.documentId) }
					};
				}
				let d = 0;
				async function f(e) {
					let t = ++d;
					a.value = !0, c.value = "";
					try {
						let n = await rp(i.value.trim(), eD, e);
						if (t !== d) return;
						let a = new Set(r.value.map((e) => e.id));
						r.value = e === 0 ? n : [...r.value, ...n.filter((e) => !a.has(e.id))], s.value = n.length === eD;
					} catch {
						t === d && (c.value = T("rechnungswerk", "Das Protokoll konnte nicht geladen werden."));
					} finally {
						t === d && (a.value = !1, o.value = !0);
					}
				}
				function p() {
					f(r.value.length);
				}
				let m;
				return A(i, () => {
					clearTimeout(m), m = setTimeout(() => f(0), 300);
				}), Pe(() => f(0)), (e, d) => {
					let f = l("router-link");
					return Z(), H("div", KE, [
						z("div", qE, [z("h2", null, Y(t(T)("rechnungswerk", "Protokoll")), 1), z("div", JE, [w(z("input", {
							"onUpdate:modelValue": d[0] ||= (e) => i.value = e,
							class: "rw-input",
							type: "search",
							placeholder: t(T)("rechnungswerk", "Nach Nummer filtern"),
							"aria-label": t(T)("rechnungswerk", "Nach Nummer filtern")
						}, null, 8, YE), [[I, i.value]])])]),
						z("p", XE, Y(t(T)("rechnungswerk", "Wer was an Rechnungen und Angeboten getan hat, auch über API-Schlüssel. Vorgänge vor Einführung des Protokolls sind nicht erfasst.")), 1),
						c.value ? (Z(), N(t($), {
							key: 0,
							type: "error",
							text: c.value
						}, null, 8, ["text"])) : n("", !0),
						o.value && r.value.length === 0 && !c.value ? (Z(), N(t(Re), {
							key: 1,
							name: t(T)("rechnungswerk", "Keine Einträge")
						}, {
							icon: _(() => [J(xo, { size: 20 })]),
							_: 1
						}, 8, ["name"])) : r.value.length > 0 ? (Z(), H("div", ZE, [z("table", QE, [z("thead", null, [z("tr", null, [
							z("th", null, Y(t(T)("rechnungswerk", "Zeitpunkt")), 1),
							z("th", null, Y(t(T)("rechnungswerk", "Beleg")), 1),
							z("th", null, Y(t(T)("rechnungswerk", "Vorgang")), 1),
							z("th", null, Y(t(T)("rechnungswerk", "Durch")), 1)
						])]), z("tbody", null, [(Z(!0), H(E, null, X(r.value, (e) => (Z(), H("tr", { key: e.id }, [
							z("td", $E, Y(t(sp)(e.createdAt)), 1),
							z("td", null, [e.documentExists ? (Z(), N(f, {
								key: 0,
								to: u(e)
							}, {
								default: _(() => [q(Y(t(op)(e)), 1)]),
								_: 2
							}, 1032, ["to"])) : (Z(), H(E, { key: 1 }, [q(Y(t(op)(e)), 1)], 64))]),
							z("td", null, Y(t(ip)(e.action)), 1),
							z("td", null, Y(t(ap)(e)), 1)
						]))), 128))])])])) : n("", !0),
						s.value ? (Z(), N(t(G), {
							key: 3,
							disabled: a.value,
							onClick: p
						}, {
							default: _(() => [q(Y(t(T)("rechnungswerk", "Mehr laden")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0)
					]);
				};
			}
		})
	},
	{
		path: "/settings",
		name: "settings",
		component: GE
	}
], nD = si({
	history: kr(),
	routes: tD
});
// src/main.js
nD.beforeEach(async (e) => {
	if (e.name !== "membership-fees") return !0;
	let t = Gs();
	return t.loaded || await t.fetch(), t.clubMode ? !0 : { name: "invoices" };
}), document.addEventListener("DOMContentLoaded", () => {
	let e = Ee(qs);
	e.use(an()), e.use(nD), e.use(Bt, { themes: { tooltip: { delay: {
		show: 100,
		hide: 0
	} } } }), e.mount(".app-rechnungswerk");
});
