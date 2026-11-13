import { $ as e, $n as t, $t as n, An as r, At as i, B as a, Bn as o, Bt as s, C as c, Cn as l, Ct as u, D as d, Dn as f, Dt as p, E as m, Et as h, F as g, Fn as _, G as ee, Gn as v, Gt as y, H as b, Hn as x, Ht as te, I as S, In as C, It as w, J as ne, Jn as re, Jt as T, K as E, Kn as ie, Kt as D, L as O, Ln as ae, Mn as oe, Mt as se, N as ce, Nn as k, Nt as A, O as le, Ot as ue, P as de, Pn as fe, Pt as pe, Q as j, Qn as me, Qt as M, R as he, Rn as ge, Rt as N, S as _e, Sn as P, St as ve, T as ye, Tn as be, Tt as xe, U as Se, Un as Ce, Ut as we, V as Te, Vn as Ee, Vt as De, W as Oe, Wn as ke, Wt as F, X as Ae, Xn as je, Xt as I, Y as Me, Yt as Ne, Z as L, Zt as R, _ as Pe, _n as Fe, _t as Ie, an as Le, at as Re, b as ze, bn as Be, bt as Ve, c as He, cn as Ue, ct as We, d as Ge, dn as z, dt as Ke, en as B, er as V, et as qe, f as Je, fn as Ye, ft as Xe, g as Ze, gn as Qe, gt as $e, h as et, hn as tt, ht as nt, in as H, it as rt, jn as it, jt as at, k as ot, kn as st, kt as ct, l as lt, ln as ut, lt as U, m as dt, mn as ft, mt as W, nn as G, nr as pt, nt as mt, on as ht, ot as gt, p as _t, pn as vt, pt as yt, q as bt, qn as xt, qt as K, r as St, rn as q, rr as J, rt as Ct, sn as wt, st as Tt, t as Et, tr as Dt, tt as Ot, un as kt, ut as At, vn as jt, vt as Mt, w as Nt, wn as Pt, wt as Ft, x as It, xn as Y, xt as Lt, yn as X, yt as Rt, z as zt, zn as Bt, zt as Vt } from "./NcSelect-DezlyrCK.chunk.mjs";
// node_modules/pinia/dist/pinia.js
var Ht = typeof window < "u", Ut, Wt = (e) => Ut = e, Gt = Symbol();
function Kt(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var qt = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Jt(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Yt(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		en(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Xt(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Zt(e) {
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
var Qt = typeof navigator == "object" ? navigator : { userAgent: "" }, $t = /Macintosh/.test(Qt.userAgent) && /AppleWebKit/.test(Qt.userAgent) && !/Safari/.test(Qt.userAgent), en = Ht ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !$t ? tn : "msSaveOrOpenBlob" in Qt ? nn : rn : () => {};
function tn(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Zt(r) : Xt(r.href) ? Yt(e, t, n) : (r.target = "_blank", Zt(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Zt(r);
	}, 0));
}
function nn(e, t = "download", n) {
	if (typeof e == "string") {
		if (Xt(e)) Yt(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Zt(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Jt(e, n), t);
}
function rn(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Yt(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(qt.HTMLElement)) || "safari" in qt, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || $t) && typeof FileReader < "u") {
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
var { assign: an } = Object;
function on() {
	let e = ae(!0), t = e.run(() => v({})), n = [], r = [], i = x({
		install(e) {
			Wt(i), i._a = e, e.provide(Gt, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var sn = () => {};
function cn(e, t, n, r = sn) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && ge() && Ce(i), i;
}
function ln(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var un = (e) => e(), dn = Symbol(), fn = Symbol();
function pn(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!Object.hasOwn(t, n)) continue;
		let r = t[n], i = e[n];
		if (Kt(i) && Kt(r) && Object.hasOwn(e, n) && !o(r) && !Bt(r)) {
			e[n] = pn(i, r);
			let t = re(e)[n];
			o(t) && Ee(t) && me(t);
		} else e[n] = r;
	}
	return e;
}
var mn = Symbol();
function hn(e) {
	return !e || typeof e != "object" || !Object.hasOwn(e, mn);
}
var { assign: gn } = Object;
function _n(e) {
	return !!(o(e) && e.effect);
}
function vn(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), gn(je(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = x(I(() => {
			Wt(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = yn(e, l, t, n, r, !0), c;
}
function yn(e, t, n = {}, r, i, a) {
	let s, c = gn({ actions: {} }, n), l = { deep: !0 }, u, d, f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m, h = r.state.value[e];
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
		}) : (pn(r.state.value[e], t), n = {
			type: "patch object",
			payload: t,
			storeId: e,
			events: m
		});
		let i = g = Symbol();
		Ye().then(() => {
			g === i && (u = !0);
		}), d = !0, ln(f, n, r.state.value[e]);
	}
	let ee = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			gn(e, t);
		});
	} : sn;
	function v() {
		s.stop(), f.clear(), p.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (dn in t) return t[fn] = n, t;
		let i = function() {
			Wt(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			ln(p, {
				args: n,
				name: i[fn],
				store: x,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : x, n);
			} catch (e) {
				throw ln(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (ln(a, e), e)).catch((e) => (ln(o, e), Promise.reject(e))) : (ln(a, l), l);
		};
		return i[dn] = !0, i[fn] = n, i;
	}, b = {
		_p: r,
		$id: e,
		$onAction: cn.bind(null, p),
		$patch: _,
		$reset: ee,
		$subscribe(t, n = {}) {
			if (f.has(t)) return sn;
			let i = cn(f, t, n.detached, () => a()), a = s.run(() => k(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? d : u) && t({
					storeId: e,
					type: "direct",
					events: m
				}, r);
			}, gn({}, l, n)));
			return i;
		},
		$dispose: v
	}, x = ke(b);
	r._s.set(e, x);
	let te = (r._a && r._a.runWithContext || un)(() => r._e.run(() => (s = ae()).run(() => t({ action: y }))));
	for (let t in te) {
		let n = te[t];
		o(n) && !_n(n) || Bt(n) ? a || (h && hn(n) && (o(n) ? n.value = h[t] : ((n instanceof Set || n instanceof Map) && n.clear(), pn(n, h[t]))), r.state.value[e][t] = n) : typeof n == "function" && (te[t] = y(n, t), c.actions[t] = n);
	}
	return gn(x, te), gn(re(x), te), Object.defineProperty(x, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			_((t) => {
				gn(t, e);
			});
		}
	}), r._p.forEach((e) => {
		let t = s.run(() => e({
			store: x,
			app: r._a,
			pinia: r,
			options: c
		}));
		gn(x, t);
	}), h && a && n.hydrate && n.hydrate(x.$state, h), u = !0, d = !0, x;
}
function bn(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Ue();
		return n ||= o ? ut(Gt, null) : null, n && Wt(n), n = Ut, n._s.has(e) || (i ? yn(e, t, r, n) : vn(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// node_modules/vue-router/dist/devtools-CxgSYwGp.js
var xn = typeof document < "u", Sn = /#/g, Cn = /&/g, wn = /\//g, Tn = /=/g, En = /\?/g, Dn = /\+/g, On = /%5B/g, kn = /%5D/g, An = /%5E/g, jn = /%60/g, Mn = /%7B/g, Nn = /%7C/g, Pn = /%7D/g, Fn = /%20/g;
function In(e) {
	return e == null ? "" : encodeURI("" + e).replace(Nn, "|").replace(On, "[").replace(kn, "]");
}
function Ln(e) {
	return In(e).replace(Mn, "{").replace(Pn, "}").replace(An, "^");
}
function Rn(e) {
	return In(e).replace(Dn, "%2B").replace(Fn, "+").replace(Sn, "%23").replace(Cn, "%26").replace(jn, "`").replace(Mn, "{").replace(Pn, "}").replace(An, "^");
}
function zn(e) {
	return Rn(e).replace(Tn, "%3D");
}
function Bn(e) {
	return In(e).replace(Sn, "%23").replace(En, "%3F");
}
function Vn(e) {
	return Bn(e).replace(wn, "%2F");
}
function Hn(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var Un = /\/$/, Wn = (e) => e.replace(Un, "");
function Gn(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = $n(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Hn(o)
	};
}
function Kn(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function qn(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Jn(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Yn(t.matched[r], n.matched[i]) && Xn(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Yn(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Xn(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Zn(e[n], t[n])) return !1;
	return !0;
}
function Zn(e, t) {
	return Ie(e) ? Qn(e, t) : Ie(t) ? Qn(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Qn(e, t) {
	return Ie(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function $n(e, t) {
	if ($e(e)) return e;
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
var er = {
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
function tr(e) {
	if (!e) {
		if (xn) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Wn(e);
}
var nr = /^[^#]+#/;
function rr(e, t) {
	return e.replace(nr, "#") + t;
}
function ir(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var ar = () => history.scrollRestoration === "manual" ? {
	left: window.scrollX,
	top: window.scrollY
} : null;
function or(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = ir(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function sr(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var cr = /* @__PURE__ */ new Map();
function lr(e) {
	cr.set(e, ar());
}
function ur(e) {
	let t = cr.get(e);
	return cr.delete(e), t;
}
function dr(e, t = !1) {
	for (let n of cr.keys()) {
		let r = parseInt(n, 10);
		(r === e || !t && r > e) && cr.delete(n);
	}
}
function fr(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function pr(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function mr(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(Dn, " "), i = r.indexOf("="), a = Hn(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Hn(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			Ie(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function hr(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = zn(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (Ie(r) ? r.map((e) => e && Rn(e)) : [r && Rn(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function gr(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = Ie(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function _r() {
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
function vr(e, t, n) {
	let r = e.value;
	if (!r) return;
	let i = r, a = () => {
		i[t].delete(n);
	};
	jt(a), Qe(a), vt(() => {
		let r = e.value;
		r && (i = r), i[t].add(n);
	}), i[t].add(n);
}
function yr(e) {
	vr(ut(Lt, {}), "leaveGuards", e);
}
function br(e) {
	vr(ut(Lt, {}), "updateGuards", e);
}
function xr(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(nt(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : fr(e) ? c(nt(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function Sr(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (Ve(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(xr(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Mt(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && xr(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function Cr(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Yn(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Yn(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.js
var wr = () => location.protocol + "//" + location.host;
function Tr(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), qn(n, "");
	}
	return qn(n, e) + r + i;
}
function Er(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = Tr(e, location), c = n.value, l = t.value, u = 0;
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
		e.state && e.replaceState(W({}, e.state, { scroll: ar() }), "");
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
function Dr(e, t, n, r = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: null
	};
}
function Or(e) {
	let { history: t, location: n } = window, r = { value: Tr(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : wr() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			console.error(e), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		let o = W({}, t.state, Dr(i.value.back, e, i.value.forward, !0), n, { position: i.value.position });
		a(e, o, !0), dr(o.position, !0), r.value = e;
	}
	function s(e, n) {
		let o = W({}, i.value, t.state, {
			forward: e,
			scroll: ar()
		});
		a(o.current, o, !0), a(e, W({}, Dr(r.value, e, null), { position: o.position + 1 }, n), !1), dr(o.position), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function kr(e) {
	e = tr(e);
	let t = Or(e), n = Er(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = W({
		location: "",
		base: e,
		go: r,
		createHref: rr.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function Ar(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), kr(e);
}
var jr = {
	type: 0,
	value: ""
}, Mr = /[a-zA-Z0-9_]/;
function Nr(e) {
	if (!e) return [[]];
	if (e === "/") return [[jr]];
	if (!$e(e)) throw Error(`Invalid path "${e}"`);
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
			c === "(" ? n = 2 : Mr.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
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
var Pr = "[^/]+?", Fr = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, Ir = /[.+*?^${}()[\]/\\]/g;
function Lr(e, t) {
	let n = W({}, Fr, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(Ir, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || Pr;
				if (u !== Pr) {
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
				if (Ie(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = Ie(c) ? c.join("/") : c;
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
function Rr(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function zr(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = Rr(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (Br(r)) return 1;
		if (Br(i)) return -1;
	}
	return i.length - r.length;
}
function Br(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var Vr = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function Hr(e, t, n) {
	let r = Lr(Nr(e.path), n), i = W(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function Ur(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = ve(Vr, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = Gr(e);
		s.aliasOf = r && r.record;
		let l = ve(t, e), d = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) d.push(Gr(W({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let f, p;
		for (let t of d) {
			let { path: u } = t;
			if (n && !$e(u)) {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (f = Hr(t, n, l), r ? r.alias.push(f) : (p ||= f, p !== f && p.alias.push(f), i && e.name && !qr(f) && o(e.name)), Zr(f) && c(f), s.children) {
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
		if (pr(e)) {
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
		let t = Yr(e, n);
		n.splice(t, 0, e), e.record.name && !qr(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw nt(1, { location: e });
			s = i.record.name, a = W(Wr(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && Wr(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw nt(1, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = W({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: Jr(c)
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
function Wr(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function Gr(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: Kr(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Kr(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function qr(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Jr(e) {
	return e.reduce((e, t) => W(e, t.meta), {});
}
function Yr(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		zr(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = Xr(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function Xr(e) {
	let t = e;
	for (; t = t.parent;) if (Zr(t) && zr(e, t) === 0) return t;
}
function Zr({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Qr(e) {
	let n = ut(xe), r = ut(Ft), i = I(() => {
		let r = t(e.to);
		return n.resolve(r);
	}), a = I(() => {
		let { matched: e } = i.value, { length: t } = e, n = e[t - 1], a = r.matched;
		if (!n || !a.length) return -1;
		let o = a.findIndex(Yn.bind(null, n));
		if (o > -1) return o;
		let s = ri(e[t - 2]);
		return t > 1 && ri(n) === s && a[a.length - 1].path !== s ? a.findIndex(Yn.bind(null, e[t - 2])) : o;
	}), o = I(() => a.value > -1 && ni(r.params, i.value.params)), s = I(() => a.value > -1 && a.value === r.matched.length - 1 && Xn(r.params, i.value.params));
	function c(r = {}) {
		if (ti(r)) {
			let r = n[t(e.replace) ? "replace" : "push"](t(e.to)).catch(u);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => r), r;
		}
		return Promise.resolve();
	}
	return {
		route: i,
		href: I(() => i.value.href),
		isActive: o,
		isExactActive: s,
		navigate: c
	};
}
function $r(e) {
	return e.length === 1 ? e[0] : e;
}
var ei = /* @__PURE__ */ H({
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
	useLink: Qr,
	setup(e, { slots: t }) {
		let n = ke(Qr(e)), { options: r } = ut(xe), i = I(() => ({
			[ii(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[ii(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && $r(t.default(n));
			return e.custom ? r : wt("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function ti(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function ni(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (Ie(r)) {
			if (!Ie(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
		} else if (r !== i) return !1;
	}
	return !0;
}
function ri(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var ii = (e, t, n) => e ?? t ?? n, ai = /*#__PURE__*/ H({
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
		let a = ut(h), o = I(() => e.route || a.value), s = ut(i, 0), c = I(() => {
			let e = t(s), { matched: n } = o.value, r;
			for (; (r = n[e]) && !r.components;) e++;
			return e;
		}), l = I(() => o.value.matched[c.value]);
		Be(i, I(() => c.value + 1)), Be(Lt, l), Be(h, o);
		let u = /* @__PURE__ */ new Set();
		Be(p, u);
		let d = v(), f = er, { app: m } = Le().appContext;
		return k(() => [
			d.value,
			l.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && Yn(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let t = o.value, i = e.name, a = l.value, s = a && a.components[i];
			if (!s) return oi(r.default, {
				Component: s,
				route: t
			});
			let c = a.props[i], p = c ? c === !0 ? t.params : typeof c == "function" ? c(t) : c : null, h = (e) => {
				e.component.isUnmounted && (a.instances[i] = null);
			}, g = (e) => Ye(() => {
				if (f === t || o.value !== t || e.el.getRootNode() !== m._container.getRootNode()) return;
				let n = f;
				f = t;
				for (let e of u) e(t, n);
			}), _ = wt(s, W({}, p, n, {
				onVnodeUnmounted: h,
				onVnodeMounted: g,
				onVnodeUpdated: g,
				ref: d
			}));
			return oi(r.default, {
				Component: _,
				route: t
			}) || _;
		};
	}
});
function oi(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var si = ai;
function ci(e) {
	let n = e.matcher || Ur(e.routes, e), r = e.parseQuery || mr, i = e.stringifyQuery || hr, a = e.history, o = _r(), s = _r(), c = _r(), l = xt(er), d = xt(0), f = er;
	xn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let p = yt.bind(null, (e) => "" + e), m = yt.bind(null, Vn), g = yt.bind(null, Hn);
	function _(e, t) {
		let r, i;
		pr(e) ? (r = n.getRecordMatcher(e), i = t) : i = e;
		let a = n.addRoute(i, r);
		return d.value++, () => {
			a(), d.value++;
		};
	}
	function ee(e) {
		let t = n.getRecordMatcher(e);
		t && (n.removeRoute(t), d.value++);
	}
	function v() {
		n.clearRoutes(), d.value++;
	}
	function y() {
		return n.getRoutes().map((e) => e.record);
	}
	function b(e) {
		return !!n.getRecordMatcher(e);
	}
	function x(e, t) {
		if (d.value, typeof e == "string") {
			t ||= e.startsWith("/") ? er : l.value;
			let i = Gn(r, e, t.path), o = n.resolve({ path: i.path }, t), s = a.createHref(i.fullPath);
			return W(i, o, {
				params: g(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		t = W({}, t || (e.path != null && e.path.startsWith("/") && !("name" in e && e.name) ? er : l.value));
		let o;
		if (e.path != null) o = W({}, e, { path: Gn(r, e.path, t.path).path });
		else {
			let n = W({}, e.params);
			for (let e in n) n[e] ?? delete n[e];
			o = W({}, e, { params: m(n) }), t.params = m(t.params);
		}
		let s = n.resolve(o, t), c = e.hash || "";
		s.params = p(g(s.params));
		let u = Kn(i, W({}, e, {
			hash: Ln(c),
			path: s.path
		})), f = a.createHref(u);
		return W({
			fullPath: u,
			hash: c,
			query: i === hr ? gr(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: f
		});
	}
	function te(e) {
		return typeof e == "string" ? Gn(r, e, l.value.path) : W({}, e);
	}
	function S(e, t) {
		if (f !== e) return nt(8, {
			from: t,
			to: e
		});
	}
	function C(e) {
		return re(e);
	}
	function w(e) {
		return C(W(te(e), { replace: !0 }));
	}
	function ne(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = te(i) : { path: i }, i.params = {}), W({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function re(e, t) {
		let n = f = x(e), r = l.value, a = e.state, o = e.force, s = e.replace === !0, c = ne(n, r);
		if (c) return re(W(te(c), {
			state: typeof c == "object" ? W({}, a, c.state) : a,
			force: o,
			replace: s
		}), t || n);
		let u = n;
		u.redirectedFrom = t;
		let d;
		return !o && Jn(i, r, n) && (d = nt(16, {
			to: u,
			from: r
		}), fe(r, r, !0, !1)), (d ? Promise.resolve(d) : D(u, r)).catch((e) => Rt(e) ? Rt(e, 2) ? e : de(e) : le(e, u, r)).then((e) => {
			if (e) {
				if (Rt(e, 2)) return re(W({ replace: s }, te(e.to), {
					state: typeof e.to == "object" ? W({}, a, e.to.state) : a,
					force: o
				}), t || u);
			} else e = ae(u, r, !0, s, a);
			return O(u, r, e), e;
		});
	}
	function T(e, t) {
		let n = S(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function E(e) {
		let t = me.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function D(e, t) {
		let n, [r, i, a] = Cr(e, t);
		n = Sr(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(xr(r, e, t));
		});
		let c = T.bind(null, e, t);
		return n.push(c), he(n).then(() => {
			n = [];
			for (let r of o.list()) n.push(xr(r, e, t));
			return n.push(c), he(n);
		}).then(() => {
			n = Sr(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(xr(r, e, t));
			});
			return n.push(c), he(n);
		}).then(() => {
			n = [];
			for (let r of a) if (r.beforeEnter) {
				if (Ie(r.beforeEnter)) for (let i of r.beforeEnter) n.push(xr(i, e, t));
				else n.push(xr(r.beforeEnter, e, t));
			}
			return n.push(c), he(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Sr(a, "beforeRouteEnter", e, t, E), n.push(c), he(n))).then(() => {
			n = [];
			for (let r of s.list()) n.push(xr(r, e, t));
			return n.push(c), he(n);
		}).catch((e) => Rt(e, 8) ? e : Promise.reject(e));
	}
	function O(e, t, n) {
		c.list().forEach((r) => E(() => r(e, t, n)));
	}
	function ae(e, t, n, r, i) {
		let o = S(e, t);
		if (o) return o;
		let s = t === er, c = xn ? history.state : {};
		n && (r || s ? a.replace(e.fullPath, W({ scroll: s && c && c.scroll }, i)) : a.push(e.fullPath, i)), l.value = e, fe(e, t, n, s), de();
	}
	let oe;
	function se() {
		oe ||= a.listen((e, t, n) => {
			if (!M.listening) return;
			let r = x(e), i = ne(r, M.currentRoute.value);
			if (i) {
				re(W(i, {
					replace: !0,
					force: !0
				}), r).catch(u);
				return;
			}
			f = r;
			let o = l.value;
			xn && n.delta && lr(sr(o.fullPath, n.delta)), D(r, o).catch((e) => Rt(e, 12) ? e : Rt(e, 2) ? (re(W(te(e.to), { force: !0 }), r).then((e) => {
				Rt(e, 20) && !n.delta && n.type === "pop" && a.go(-1, !1);
			}).catch(u), Promise.reject()) : (n.delta && a.go(-n.delta, !1), le(e, r, o))).then((e) => {
				e ||= ae(r, o, !1), e && (n.delta && !Rt(e, 8) ? a.go(-n.delta, !1) : n.type === "pop" && Rt(e, 20) && a.go(-1, !1)), O(r, o, e);
			}).catch(u);
		});
	}
	let ce = _r(), k = _r(), A;
	function le(e, t, n) {
		de(e);
		let r = k.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function ue() {
		return A && l.value !== er ? Promise.resolve() : new Promise((e, t) => {
			ce.add([e, t]);
		});
	}
	function de(e) {
		return A || (A = !e, se(), ce.list().forEach(([t, n]) => e ? n(e) : t()), ce.reset()), e;
	}
	function fe(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!xn || !a) return Promise.resolve();
		let o = !r && ur(sr(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return Ye().then(() => a(t, n, o)).then((e) => t === l.value && e && or(e)).catch((e) => t === l.value && le(e, t, n));
	}
	let pe = (e) => a.go(e), j, me = /* @__PURE__ */ new Set(), M = {
		currentRoute: l,
		listening: !0,
		addRoute: _,
		removeRoute: ee,
		clearRoutes: v,
		hasRoute: b,
		getRoutes: y,
		resolve: x,
		options: e,
		push: C,
		replace: w,
		go: pe,
		back: () => pe(-1),
		forward: () => pe(1),
		beforeEach: o.add,
		beforeResolve: s.add,
		afterEach: c.add,
		onError: k.add,
		isReady: ue,
		install(e) {
			e.component("RouterLink", ei), e.component("RouterView", si), e.config.globalProperties.$router = M, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => t(l)
			}), xn && !j && l.value === er && (j = !0, C(a.location).catch((e) => {}));
			let n = {};
			for (let e in er) Object.defineProperty(n, e, {
				get: () => l.value[e],
				enumerable: !0
			});
			e.provide(xe, M), e.provide(Ft, ie(n)), e.provide(h, l);
			let r = e.unmount;
			me.add(e), e.unmount = function() {
				me.delete(e), me.size < 1 && (f = er, oe && oe(), oe = null, l.value = er, j = !1, A = !1), r();
			};
		}
	};
	function he(e) {
		return e.reduce((e, t) => e.then(() => E(t)), Promise.resolve());
	}
	return M;
}
// node_modules/@nextcloud/vue/dist/chunks/constants2.mjs
var li = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), ui = /* @__PURE__ */ Symbol.for("NcContent:selector");
// node_modules/@nextcloud/vue/dist/chunks/NcContent.mjs
Ae(Re);
var di = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM140 44C132.268 44 126 50.268 126 58V292C126 299.732 132.268 306 140 306H372C379.732 306 386 299.732 386 292V58C386 50.268 379.732 44 372 44H140Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", fi = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM112 44C119.732 44 126 50.268 126 58V292C126 299.732 119.732 306 112 306H20C12.268 306 6 299.732 6 292V58C6 50.268 12.268 44 20 44H112Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", pi = { class: "vue-skip-actions__container" }, mi = { class: "vue-skip-actions__headline" }, hi = { class: "vue-skip-actions__buttons" }, gi = /* @__PURE__ */ At(/* @__PURE__ */ H({
	__name: "NcContent",
	props: { appName: {} },
	setup(e) {
		let n = e;
		Be(li, c), Be(ui, "#content-vue"), Be("appName", I(() => n.appName));
		let r = Tt(), i = v(!1), a = v(), o = I(() => a.value === "navigation" ? fi : di);
		ft(() => {
			let e = document.getElementById("skip-actions");
			e && (e.innerHTML = "", e.classList.add("vue-skip-actions"));
		});
		function s() {
			at("toggle-navigation", { open: !0 }), Ye(() => {
				window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
			});
		}
		function c(e) {
			i.value = e, a.value ||= "navigation";
		}
		return (n, c) => (X(), B("div", {
			id: "content-vue",
			class: V(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": t(Xe) }]])
		}, [(X(), M(Ne, { to: "#skip-actions" }, [R("div", pi, [
			R("div", mi, J(t(L)("Keyboard navigation help")), 1),
			R("div", hi, [C(q(U, {
				href: "#app-navigation-vue",
				variant: "tertiary",
				onClick: K(s, ["prevent"]),
				onFocusin: c[0] ||= (e) => a.value = "navigation",
				onMouseover: c[1] ||= (e) => a.value = "navigation"
			}, {
				default: _(() => [G(J(t(L)("Skip to app navigation")), 1)]),
				_: 1
			}, 512), [[y, i.value]]), q(U, {
				href: "#app-content-vue",
				variant: "tertiary",
				onFocusin: c[2] ||= (e) => a.value = "content",
				onMouseover: c[3] ||= (e) => a.value = "content"
			}, {
				default: _(() => [G(J(t(L)("Skip to main content")), 1)]),
				_: 1
			})]),
			C(q(We, {
				class: "vue-skip-actions__image",
				svg: o.value,
				size: "auto"
			}, null, 8, ["svg"]), [[y, !t(r)]])
		])])), P(n.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-d13dcb98"]]), _i = { name: "NcAppNavigationList" }, vi = { class: "app-navigation-list" };
function yi(e, t, n, r, i, a) {
	return X(), B("ul", vi, [P(e.$slots, "default", {}, void 0, !0)]);
}
var bi = /* @__PURE__ */ At(_i, [["render", yi], ["__scopeId", "data-v-d72957ed"]]);
// node_modules/@nextcloud/vue/dist/chunks/NcAppNavigation.mjs
Ae(qe);
var xi = { class: "app-navigation-toggle-wrapper" }, Si = /* @__PURE__ */ At(/* @__PURE__ */ H({
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
		let n = st(e, "open"), r = I(() => n.value ? L("Close navigation") : L("Open navigation"));
		return (e, i) => (X(), B("div", xi, [q(t(U), {
			class: "app-navigation-toggle",
			"aria-controls": "app-navigation-vue",
			"aria-expanded": n.value ? "true" : "false",
			"aria-label": r.value,
			title: r.value,
			variant: "tertiary",
			onClick: i[0] ||= (e) => n.value = !n.value
		}, {
			icon: _(() => [q(We, {
				path: t(E),
				directional: ""
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-expanded",
			"aria-label",
			"title"
		])]));
	}
}), [["__scopeId", "data-v-e8177cc7"]]), Ci = [
	"aria-hidden",
	"aria-label",
	"aria-labelledby",
	"inert"
], wi = { class: "app-navigation__search" }, Ti = /* @__PURE__ */ At(/* @__PURE__ */ H({
	__name: "NcAppNavigation",
	props: {
		ariaLabel: {},
		ariaLabelledby: {}
	},
	setup(e) {
		let r = e, i, a = ut(li, () => oe("NcAppNavigation is not mounted inside NcContent, this is probably an error."), !1), o = it("appNavigationContainer"), s = Tt(), c = v(!s.value), l = I(() => s.value && c.value);
		fe(() => {
			!r.ariaLabel && !r.ariaLabelledby && oe("NcAppNavigation requires either `ariaLabel` or `ariaLabelledby` to be set for accessibility.");
		}), k(s, (e) => {
			c.value = !e, at("navigation-toggled", { open: c.value });
		}), k(l, () => {
			f();
		}), Fe(() => {
			a(!0), se("toggle-navigation", d), at("navigation-toggled", { open: c.value }), i = Me(o.value, {
				allowOutsideClick: !0,
				clickOutsideDeactivates: () => (s.value && (i.deactivate({ returnFocus: !1 }), u(!1)), !1),
				fallbackFocus: o.value,
				trapStack: he(),
				escapeDeactivates: !1
			}), f();
		}), jt(() => {
			a(!1), A("toggle-navigation", d), i.deactivate();
		});
		function u(e) {
			if (c.value === e) {
				at("navigation-toggled", { open: c.value });
				return;
			}
			c.value = e === void 0 ? !c.value : e;
			let t = getComputedStyle(document.body), n = parseInt(t.getPropertyValue("--animation-slow")) || 200;
			setTimeout(() => {
				at("navigation-toggled", { open: c.value });
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
		return (r, i) => (X(), B("div", {
			ref: "appNavigationContainer",
			class: V(["app-navigation", {
				"app-navigation--closed": !c.value,
				"app-navigation--legacy": t(Xe)
			}])
		}, [R("nav", {
			id: "app-navigation-vue",
			"aria-hidden": c.value ? "false" : "true",
			"aria-label": e.ariaLabel || void 0,
			"aria-labelledby": e.ariaLabelledby || void 0,
			class: "app-navigation__content",
			inert: !c.value || void 0,
			onKeydown: D(p, ["esc"])
		}, [
			R("div", wi, [P(r.$slots, "search", {}, void 0, !0)]),
			R("div", { class: V(["app-navigation__body", { "app-navigation__body--no-list": !r.$slots.list }]) }, [P(r.$slots, "default", {}, void 0, !0)], 2),
			r.$slots.list ? (X(), M(bi, {
				key: 0,
				class: "app-navigation__list"
			}, {
				default: _(() => [P(r.$slots, "list", {}, void 0, !0)]),
				_: 3
			})) : n("", !0),
			P(r.$slots, "footer", {}, void 0, !0)
		], 40, Ci), q(Si, {
			open: c.value,
			"onUpdate:open": u
		}, null, 8, ["open"])], 2));
	}
}), [["__scopeId", "data-v-ec9c3f18"]]), Ei = {
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
}, Di = ["aria-hidden", "aria-label"], Oi = [
	"fill",
	"width",
	"height"
], ki = { key: 0 };
function Ai(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon chevron-up-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", ki, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, null, -1)], 8, Oi))], 16, Di);
}
var ji = /* @__PURE__ */ At(Ei, [["render", Ai]]), Mi = {
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
}, Ni = ["aria-hidden", "aria-label"], Pi = [
	"fill",
	"width",
	"height"
], Fi = { key: 0 };
function Ii(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon arrow-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Fi, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, null, -1)], 8, Pi))], 16, Ni);
}
var Li = /* @__PURE__ */ At(Mi, [["render", Ii]]);
// node_modules/@nextcloud/vue/dist/chunks/NcInputConfirmCancel.mjs
Ae(e);
var Ri = {
	name: "NcInputConfirmCancel",
	components: {
		IconArrowRight: Li,
		IconClose: S,
		NcButton: U
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
		return { isLegacy34: Xe };
	},
	data() {
		return {
			labelConfirm: L("Confirm changes"),
			labelCancel: L("Cancel changes")
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
}, zi = ["placeholder"];
function Bi(e, t, n, r, i, a) {
	let o = l("IconArrowRight"), s = l("NcButton"), c = l("IconClose");
	return X(), B("div", { class: V(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": r.isLegacy34 }]) }, [R("form", {
		onSubmit: t[1] ||= K((...e) => a.confirm && a.confirm(...e), ["prevent"]),
		onKeydown: t[2] ||= D(K((...e) => a.cancel && a.cancel(...e), [
			"exact",
			"stop",
			"prevent"
		]), ["esc"]),
		onClick: t[3] ||= K(() => {}, ["stop", "prevent"])
	}, [
		C(R("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.valueModel = e,
			type: "text",
			class: "app-navigation-input-confirm__input",
			placeholder: n.placeholder
		}, null, 8, zi), [[F, a.valueModel]]),
		q(s, {
			"aria-label": i.labelConfirm,
			type: "submit",
			variant: "primary",
			onClick: K(a.confirm, ["stop", "prevent"])
		}, {
			icon: _(() => [q(o, { size: 20 })]),
			_: 1
		}, 8, ["aria-label", "onClick"]),
		q(s, {
			"aria-label": i.labelCancel,
			type: "reset",
			variant: n.primary ? "primary" : "tertiary",
			onClick: K(a.cancel, ["stop", "prevent"])
		}, {
			icon: _(() => [q(c, { size: 20 })]),
			_: 1
		}, 8, [
			"aria-label",
			"variant",
			"onClick"
		])
	], 32)], 2);
}
var Vi = /* @__PURE__ */ At(Ri, [["render", Bi], ["__scopeId", "data-v-6926a0b8"]]), Hi = H({
	name: "NcVNodes",
	props: { vnodes: {
		type: [Array, Object],
		default: null
	} },
	render() {
		return this.vnodes || this.$slots?.default?.({});
	}
}), Ui = {
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
}, Wi = ["aria-hidden", "aria-label"], Gi = [
	"fill",
	"width",
	"height"
], Ki = { key: 0 };
function qi(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon pencil-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Ki, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, null, -1)], 8, Gi))], 16, Wi);
}
var Ji = /* @__PURE__ */ At(Ui, [["render", qi]]), Yi = {
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
}, Xi = ["aria-hidden", "aria-label"], Zi = [
	"fill",
	"width",
	"height"
], Qi = { key: 0 };
function $i(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon undo-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Qi, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, null, -1)], 8, Zi))], 16, Xi);
}
var ea = /* @__PURE__ */ At(Yi, [["render", $i]]);
Ae(Ot);
var ta = {
	name: "NcAppNavigationIconCollapsible",
	components: {
		NcButton: U,
		ChevronDown: O,
		ChevronUp: ji
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
		return { isLegacy34: Xe };
	},
	computed: { labelButton() {
		return this.open ? L("Collapse menu") : L("Open menu");
	} },
	methods: { onClick(e) {
		this.$emit("click", e);
	} }
};
function na(e, t, n, r, i, a) {
	let o = l("ChevronUp"), s = l("ChevronDown"), c = l("NcButton");
	return X(), M(c, {
		class: V(["icon-collapse", {
			"icon-collapse--active": n.active,
			"icon-collapse--open": n.open
		}]),
		"aria-label": a.labelButton,
		variant: n.active && r.isLegacy34 ? "tertiary-on-primary" : "tertiary",
		onClick: a.onClick
	}, {
		icon: _(() => [n.open ? (X(), M(o, {
			key: 0,
			size: 20
		})) : (X(), M(s, {
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
var ra = /* @__PURE__ */ At(ta, [["render", na], ["__scopeId", "data-v-cfbd3794"]]);
Ae(mt, gt);
var ia = {
	name: "NcAppNavigationItem",
	components: {
		NcActions: m,
		NcActionButton: de,
		NcAppNavigationIconCollapsible: ra,
		NcInputConfirmCancel: Vi,
		NcLoadingIcon: ye,
		NcVNodes: Hi,
		Pencil: Ji,
		Undo: ea
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
			isMobile: Tt(),
			isLegacy34: Xe
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
			return this.editLabel ? this.editLabel : L("Edit item");
		},
		undoButtonAriaLabel() {
			return L("Undo changes");
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
			this.$emit("click", e), e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || n && (t?.(e), e.preventDefault(), this.isMobile && at("toggle-navigation", { open: !1 }));
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
}, aa = ["id"], oa = [
	"aria-current",
	"aria-description",
	"aria-expanded",
	"href",
	"target",
	"title",
	"onClick"
], sa = {
	key: 0,
	class: "editingContainer"
}, ca = {
	key: 1,
	class: "app-navigation-entry__deleted"
}, la = { class: "app-navigation-entry__deleted-description" }, ua = {
	key: 0,
	class: "app-navigation-entry__counter-wrapper"
}, da = {
	key: 0,
	class: "app-navigation-entry__children"
};
function fa(e, t, r, i, a, o) {
	let s = l("NcLoadingIcon"), c = l("NcInputConfirmCancel"), u = l("Pencil"), d = l("NcActionButton"), f = l("Undo"), p = l("NcActions"), m = l("NcAppNavigationIconCollapsible");
	return X(), B("li", {
		id: r.id,
		class: V([{
			"app-navigation-entry--opened": a.opened,
			"app-navigation-entry--pinned": r.pinned,
			"app-navigation-entry--collapsible": r.allowCollapse && !!e.$slots.default
		}, "app-navigation-entry-wrapper"])
	}, [(X(), M(be(o.isRouterLink ? "router-link" : "NcVNodes"), Dt(ht({ ...o.isRouterLink && {
		custom: !0,
		to: r.to
	} })), {
		default: _(({ href: l, navigate: h, isActive: g }) => [R("div", { class: V(["app-navigation-entry", {
			"app-navigation-entry--editing": a.editingActive,
			"app-navigation-entry--deleted": r.undo,
			"app-navigation-entry--legacy": i.isLegacy34,
			active: r.to && g || r.active
		}]) }, [
			r.undo ? n("", !0) : (X(), B("a", {
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
				onKeydown: t[3] ||= D(K((...e) => o.handleTab && o.handleTab(...e), ["exact"]), ["tab"])
			}, [
				R("div", { class: V(["app-navigation-entry-icon", { [r.icon]: r.icon }]) }, [r.loading ? (X(), M(s, { key: 0 })) : P(e.$slots, "icon", { active: r.active || r.to && g }, void 0, !0, 1)], 2),
				R("span", { class: V(["app-navigation-entry__name", { "hidden-visually": a.editingActive }]) }, J(r.name), 3),
				a.editingActive ? (X(), B("div", sa, [q(c, {
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
			], 40, oa)),
			r.undo ? (X(), B("div", ca, [R("div", la, J(r.name), 1)])) : n("", !0),
			(e.$slots.actions || e.$slots.counter || r.editable || r.undo) && !a.editingActive ? (X(), B("div", {
				key: 2,
				class: V(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": r.forceDisplayActions || a.menuOpenLocalValue || r.menuOpen }])
			}, [e.$slots.counter ? (X(), B("div", ua, [P(e.$slots, "counter", {}, void 0, !0)])) : n("", !0), e.$slots.actions || r.editable && !a.editingActive || r.undo ? (X(), M(p, {
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
				icon: _(() => [P(e.$slots, "menu-icon", {}, void 0, !0)]),
				default: _(() => [
					r.editable && !a.editingActive ? (X(), M(d, {
						key: 0,
						"aria-label": o.editButtonAriaLabel,
						onClick: o.handleEdit
					}, {
						icon: _(() => [q(u, { size: 20 })]),
						default: _(() => [G(" " + J(r.editLabel), 1)]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : n("", !0),
					r.undo ? (X(), M(d, {
						key: 1,
						"aria-label": o.undoButtonAriaLabel,
						onClick: o.handleUndo
					}, {
						icon: _(() => [q(f, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : n("", !0),
					P(e.$slots, "actions", {}, void 0, !0)
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
			r.allowCollapse && e.$slots.default ? (X(), M(m, {
				key: 3,
				active: r.to && g || r.active,
				open: a.opened,
				onClick: K(o.toggleCollapse, ["prevent", "stop"])
			}, null, 8, [
				"active",
				"open",
				"onClick"
			])) : n("", !0),
			P(e.$slots, "extra", {}, void 0, !0)
		], 2)]),
		_: 3
	}, 16)), o.canHaveChildren && e.$slots.default ? (X(), B("ul", da, [P(e.$slots, "default", {}, void 0, !0)])) : n("", !0)], 10, aa);
}
var pa = /* @__PURE__ */ At(ia, [["render", fa], ["__scopeId", "data-v-6cae7342"]]), ma = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		let n = t, i = e, a = f(), o = r(), s = v([]), c = I(() => s.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), l = I(() => s.value.length), u = v(null), d = v(!1), p = v({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), m = v({
			splitter: null,
			timeoutId: null
		}), h = I(() => ({
			[`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
			"splitpanes--dragging": p.value.dragging,
			"splitpanes--ready": d.value
		})), g = () => {
			document.addEventListener("mousemove", y, { passive: !1 }), document.addEventListener("mouseup", b), "ontouchstart" in window && (document.addEventListener("touchmove", y, { passive: !1 }), document.addEventListener("touchend", b));
		}, _ = () => {
			document.removeEventListener("mousemove", y, { passive: !1 }), document.removeEventListener("mouseup", b), "ontouchstart" in window && (document.removeEventListener("touchmove", y, { passive: !1 }), document.removeEventListener("touchend", b));
		}, ee = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: r } = n.getBoundingClientRect(), { clientX: a, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				p.value.cursorOffset = i.horizontal ? o - r : a - t;
			}
			g(), p.value.mouseDown = !0, p.value.activeSplitter = t, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
		}, y = (e) => {
			p.value.mouseDown && (e.preventDefault(), p.value.dragging || (window.getSelection()?.removeAllRanges(), p.value.dragging = !0), requestAnimationFrame(() => {
				re(w(e)), N("resize", { event: e }, !0);
			}));
		}, b = (e) => {
			p.value.dragging && (window.getSelection()?.removeAllRanges(), N("resized", { event: e }, !0)), p.value.mouseDown = !1, p.value.activeSplitter = null, setTimeout(() => {
				p.value.dragging = !1, _(), document.documentElement.style.cursor = "";
			}, 100);
		}, x = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), m.value.splitter === t ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, te(e, t), m.value.splitter = null) : (m.value.splitter = t, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500))), p.value.dragging || N("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, te = (e, t) => {
			if (N("splitter-dblclick", {
				event: e,
				index: t
			}, !0), i.maximizePanes) {
				let n = 0;
				s.value = s.value.map((e, r) => (e.size = r === t ? e.max : e.min, r !== t && (n += e.min), e)), s.value[t].size -= n, N("pane-maximize", {
					event: e,
					index: t,
					pane: s.value[t]
				}), N("resized", {
					event: e,
					index: t
				}, !0);
			}
		}, S = (e, t) => {
			if (!i.keyboardStep) return;
			let n = i.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", r = i.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !r) return;
			e.preventDefault(), p.value.activeSplitter = t;
			let a = (n ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), o = ie(t) + s.value[t].size;
			T(Math.min(Math.max(o + a * i.keyboardStep, 0), 100)), N("resize", { event: e }, !0), N("resized", { event: e }, !0), p.value.activeSplitter = null;
		}, C = (e, t) => {
			let n = c.value[t];
			n && N("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, w = (e) => {
			let t = u.value.getBoundingClientRect(), { clientX: n, clientY: r } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (i.horizontal ? 0 : p.value.cursorOffset) - t.left,
				y: r - (i.horizontal ? p.value.cursorOffset : 0) - t.top
			};
		}, ne = (e) => {
			e = e[i.horizontal ? "y" : "x"];
			let t = u.value[i.horizontal ? "clientHeight" : "clientWidth"];
			return i.rtl && !i.horizontal && (e = t - e), e * 100 / t;
		}, re = (e) => {
			T(ne(e));
		}, T = (e) => {
			let t = p.value.activeSplitter;
			if (t === null || t >= s.value.length - 1) return;
			let n = {
				prevPanesSize: ie(t),
				nextPanesSize: D(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, r = 0 + (i.pushOtherPanes ? 0 : n.prevPanesSize), a = 100 - (i.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, a), r);
			let o = [t, t + 1], c = s.value[o[0]] || null, l = s.value[o[1]] || null, u = c !== null && c.max < 100 && e >= c.max + n.prevPanesSize, d = l !== null && l.max < 100 && e <= 100 - (l.max + D(t + 1));
			if (u || d) u ? (c.size = c.max, l.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - n.nextPanesSize, l.min), l.max)) : (c.size = Math.min(Math.max(100 - l.max - n.prevPanesSize - D(t + 1), c.min), c.max), l.size = l.max);
			else {
				if (i.pushOtherPanes) {
					let t = E(n, e);
					if (!t) return;
					({sums: n, panesToResize: o} = t), c = s.value[o[0]] || null, l = s.value[o[1]] || null;
				}
				c !== null && (c.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, c.min), c.max)), l !== null && (l.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, l.min), l.max));
			}
		}, E = (e, t) => {
			let n = p.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + s.value[r[0]].min) {
				if (r[0] = O(n).index, e.prevReachedMinPanes = 0, r[0] < n && s.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), s.value[r[1]].size = 100 - e.prevReachedMinPanes - s.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = ie(r[0]);
			}
			return t > 100 - e.nextPanesSize - s.value[r[1]].min && (r[1] = ae(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && s.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : D(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, s.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (s.value[r[0]].size = 100 - e.prevPanesSize - D(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, ie = (e) => s.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), D = (e) => s.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), O = (e) => [...s.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, ae = (e) => s.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, oe = () => {
			let e = Array.from(u.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, se = (e, t, n = !1) => {
			let r = e - 1, a = document.createElement("div");
			a.classList.add("splitpanes__splitter"), n || (a.onmousedown = (e) => ee(e, r), typeof window < "u" && "ontouchstart" in window && (a.ontouchstart = (e) => ee(e, r)), a.onclick = (e) => x(e, r + 1), i.keyboardStep && (a.setAttribute("tabindex", "0"), a.setAttribute("role", "separator"), a.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), a.onkeydown = (e) => S(e, r))), a.ondblclick = (e) => te(e, r + 1), t.parentNode.insertBefore(a, t);
		}, ce = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, A = () => {
			let e = Array.from(u.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && ce(t);
			let t = 0;
			for (let n of e) n.className.includes("splitpanes__pane") && (!t && i.firstSplitter ? se(t, n, !0) : t && se(t, n), t++);
		}, le = ({ uid: e, ...t }) => {
			let n = c.value[e];
			for (let [e, r] of Object.entries(t)) n[e] = r;
		}, ue = !1, de = (e) => {
			let t = -1;
			Array.from(u.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), s.value.splice(t, 0, {
				...e,
				index: t
			}), s.value.forEach((e, t) => e.index = t), d.value && !ue && (ue = !0, Ye(() => {
				A(), pe({ addedPane: s.value[t] }), N("pane-add", { pane: s.value[t] }), ue = !1;
			}));
		}, fe = (e) => {
			let t = s.value.findIndex((t) => t.id === e);
			s.value[t].el = null;
			let n = s.value.splice(t, 1)[0];
			s.value.forEach((e, t) => e.index = t), Ye(() => {
				A(), N("pane-remove", { pane: n }), pe({ removedPane: {
					...n,
					index: t
				} });
			});
		}, pe = (e = {}) => {
			!e.addedPane && !e.removedPane ? me() : s.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? he(e) : j(), d.value && N("resized");
		}, j = () => {
			let e = 100 / l.value, t = 100, n = [], r = [];
			for (let i of s.value) i.size = Math.max(Math.min(e, i.max), i.min), t -= i.size, i.size >= i.max && n.push(i.id), i.size <= i.min && r.push(i.id);
			Math.abs(t) > .1 && ge(t, n, r);
		}, me = () => {
			let e = 100, t = [], n = [], r = 0;
			for (let i of s.value) e -= i.size, i.givenSize !== null && r++, i.size >= i.max && t.push(i.id), i.size <= i.min && n.push(i.id);
			let i = 100;
			if (e > .1) {
				for (let t of s.value) t.givenSize === null && (t.size = Math.max(Math.min(e / (l.value - r), t.max), t.min)), i -= t.size;
				i > .1 && ge(i, t, n);
			}
		}, he = ({ addedPane: e, removedPane: t } = {}) => {
			let n = s.value.reduce((e, t) => e + (t.givenSize === null ? 0 : t.givenSize), 0), r = s.value.filter((e) => e.givenSize === null).length, i = r > 0 ? (100 - n) / r : 0, a = 0, o = [], c = [];
			for (let e of s.value) a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && c.push(e.id);
			if (!(Math.abs(a) < .1)) {
				a = 100;
				for (let e of s.value) e.givenSize === null && (e.size = Math.max(Math.min(i, e.max), e.min)), a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && c.push(e.id);
				Math.abs(a) > .1 && ge(a, o, c);
			}
		}, ge = (e, t, n) => {
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
		}, N = (e, t = void 0, r = !1) => {
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
		k(() => i.firstSplitter, () => A()), k(() => i.horizontal, (e) => Ye(() => {
			n("direction-changed", {
				horizontal: e,
				panes: s.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), Fe(() => {
			oe(), A(), pe(), N("ready"), d.value = !0;
		}), tt(() => d.value = !1);
		let _e = () => {
			let { class: e, ...t } = a;
			return wt("div", {
				ref: u,
				class: [h.value, e],
				...t
			}, o.default?.());
		};
		return Be("panes", s), Be("indexedPanes", c), Be("horizontal", I(() => i.horizontal)), Be("requestUpdate", le), Be("onPaneAdd", de), Be("onPaneRemove", fe), Be("onPaneClick", C), (e, t) => (X(), M(be(_e)));
	}
}), ha = {
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
		let n = e, r = ut("requestUpdate"), i = ut("onPaneAdd"), a = ut("horizontal"), o = ut("onPaneRemove"), s = ut("onPaneClick"), c = Le()?.uid, l = ut("indexedPanes"), u = I(() => l.value[c]), d = v(null), f = I(() => {
			let e = isNaN(n.size) || n.size === void 0 ? 0 : parseFloat(n.size);
			return Math.max(Math.min(e, m.value), p.value);
		}), p = I(() => {
			let e = parseFloat(n.minSize);
			return isNaN(e) ? 0 : e;
		}), m = I(() => {
			let e = parseFloat(n.maxSize);
			return isNaN(e) ? 100 : e;
		}), h = I(() => {
			let e = u.value?.size ?? (n.size === void 0 ? void 0 : f.value);
			return e === void 0 ? "" : `${a.value ? "height" : "width"}: ${e}%`;
		});
		return k(() => f.value, (e) => r({
			uid: c,
			size: e
		})), k(() => p.value, (e) => r({
			uid: c,
			min: e
		})), k(() => m.value, (e) => r({
			uid: c,
			max: e
		})), Fe(() => {
			i({
				id: c,
				el: d.value,
				min: p.value,
				max: m.value,
				givenSize: n.size === void 0 ? null : f.value,
				size: f.value
			});
		}), tt(() => o(c)), (e, n) => (X(), B("div", {
			ref_key: "paneEl",
			ref: d,
			class: "splitpanes__pane",
			onClick: n[0] ||= (n) => t(s)(n, e._.uid),
			style: pt(h.value)
		}, [P(e.$slots, "default")], 4));
	}
};
// node_modules/@nextcloud/vue/dist/chunks/appName.mjs
function ga(e) {
	let t = !1, n;
	return (...r) => (t || (t = !0, n = e(...r)), n);
}
var _a = "missing-app-name";
try {
	_a = "rechnungswerk";
} catch {
	ot.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
var va = _a;
function ya() {
	return t(ut("appName", va));
}
var ba = ga(() => {
	let e = _e("core", "apps", []), t = ya();
	return e.find(({ id: e }) => e === t)?.name ?? t;
});
// node_modules/@nextcloud/vue/dist/chunks/NcAppContent.mjs
Ae(rt);
var xa = /* @__PURE__ */ At(/* @__PURE__ */ H({
	__name: "NcAppContentDetailsToggle",
	setup(e) {
		let n = Tt();
		k(n, r), Fe(() => {
			r(n.value);
		}), tt(() => {
			n.value && r(!1);
		});
		function r(e = !0) {
			let t = document.querySelector(".app-navigation .app-navigation-toggle");
			t && (t.style.display = e ? "none" : "", e === !0 && at("toggle-navigation", { open: !1 }));
		}
		return (e, r) => (X(), M(t(U), {
			"aria-label": t(L)("Go back to the list"),
			class: V(["app-details-toggle", { "app-details-toggle--mobile": t(n) }]),
			title: t(L)("Go back to the list"),
			variant: "tertiary"
		}, {
			icon: _(() => [q(t(We), {
				directional: "",
				path: t(b)
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-label",
			"class",
			"title"
		]));
	}
}), [["__scopeId", "data-v-a28923a1"]]), Sa = {
	key: 0,
	class: "hidden-visually"
}, Ca = { class: "app-content-wrapper__list" }, wa = {
	key: 1,
	class: "app-content-wrapper"
}, Ta = ce("nextcloud").persist().build(), Ea = It().theming?.name ?? "Nextcloud", Da = /* @__PURE__ */ At(/* @__PURE__ */ H({
	__name: "NcAppContent",
	props: /* @__PURE__ */ kt({
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
	emits: /* @__PURE__ */ kt(["resizeList", "update:showDetails"], ["update:showDetails"]),
	setup(e, { emit: r }) {
		let i = st(e, "showDetails"), a = r, o = ya(), s = ba(), l = Tt(), u = c(), d = Nt(() => e.disableSwipe ? void 0 : u.value, { onSwipeEnd(e, t) {
			Math.abs(d.lengthX.value) > 70 && (d.coordsStart.x < 150 && t === "right" ? at("toggle-navigation", { open: !0 }) : d.coordsStart.x < 450 && t === "left" && at("toggle-navigation", { open: !1 }));
		} }), f = v(), p = I(() => e.paneConfigKey === "" ? `pane-list-size-${o}` : `pane-list-size-${e.paneConfigKey}`), m = I(() => ({
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
		})), h = I(() => f.value ? 100 - f.value : m.value.details.size), g = I(() => {
			let t = /* @__PURE__ */ new Set();
			if (e.pageTitle) for (let n of e.pageTitle.split(" - ")) t.add(n);
			else if (e.pageHeading) {
				for (let n of e.pageHeading.split(" - ")) t.add(n);
				t.size > 0 && t.add(s);
			} else return null;
			return t.add(Ea), [...t.values()].join(" - ");
		});
		k(g, () => {
			g.value !== null && (document.title = g.value);
		}, { immediate: !0 }), k(() => e.paneConfigKey, b, { immediate: !0 }), Fe(b);
		function ee(e) {
			let t = Math.trunc(e.panes[0].size);
			Ta.setItem(p.value, JSON.stringify(t)), f.value = t, a("resizeList", { size: t }), ot.debug("[NcAppContent] pane config", { listPaneSize: t });
		}
		function b() {
			let e = parseInt(Ta.getItem(p.value) ?? "", 10);
			!isNaN(e) && e !== f.value && (ot.debug("[NcAppContent] pane config", { listPaneSize: e }), f.value = e);
		}
		return (r, a) => (X(), B("main", {
			id: "app-content-vue",
			class: V(["app-content no-snapper", { "app-content--has-list": !!r.$slots.list }])
		}, [
			e.pageHeading ? (X(), B("h1", Sa, J(e.pageHeading), 1)) : n("", !0),
			r.$slots.list ? (X(), B(T, { key: 1 }, [t(l) || e.layout === "no-split" ? (X(), B("div", {
				key: 0,
				class: V(["app-content-wrapper app-content-wrapper--no-split", {
					"app-content-wrapper--show-details": i.value,
					"app-content-wrapper--show-list": !i.value,
					"app-content-wrapper--mobile": t(l)
				}])
			}, [
				i.value ? (X(), M(xa, {
					key: 0,
					onClick: a[0] ||= K((e) => i.value = !1, ["stop", "prevent"])
				})) : n("", !0),
				C(R("div", Ca, [P(r.$slots, "list", {}, void 0, !0)], 512), [[y, !i.value]]),
				i.value ? P(r.$slots, "default", {}, void 0, !0, 1) : n("", !0)
			], 2)) : e.layout === "vertical-split" || e.layout === "horizontal-split" ? (X(), B("div", wa, [q(t(ma), {
				horizontal: e.layout === "horizontal-split",
				class: V(["default-theme", {
					"splitpanes--horizontal": e.layout === "horizontal-split",
					"splitpanes--vertical": e.layout === "vertical-split"
				}]),
				rtl: t(le),
				onResized: ee
			}, {
				default: _(() => [q(t(ha), {
					class: "splitpanes__pane-list",
					size: f.value || m.value.list.size,
					minSize: m.value.list.min,
					maxSize: m.value.list.max
				}, {
					default: _(() => [P(r.$slots, "list", {}, void 0, !0)]),
					_: 3
				}, 8, [
					"size",
					"minSize",
					"maxSize"
				]), q(t(ha), {
					class: "splitpanes__pane-details",
					size: h.value,
					minSize: m.value.details.min,
					maxSize: m.value.details.max
				}, {
					default: _(() => [P(r.$slots, "default", {}, void 0, !0)]),
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
			r.$slots.list ? n("", !0) : P(r.$slots, "default", {}, void 0, !0, 2)
		], 2));
	}
}), [["__scopeId", "data-v-5de09463"]]), Z = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Oa = {
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
}, ka = ["aria-hidden", "aria-label"], Aa = [
	"fill",
	"width",
	"height"
], ja = { key: 0 };
function Ma(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-document-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", ja, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" }, null, -1)], 8, Aa))], 16, ka);
}
var Na = /*#__PURE__*/ Z(Oa, [["render", Ma]]), Pa = {
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
}, Fa = ["aria-hidden", "aria-label"], Ia = [
	"fill",
	"width",
	"height"
], La = { key: 0 };
function Ra(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-document-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", La, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" }, null, -1)], 8, Ia))], 16, Fa);
}
var za = /*#__PURE__*/ Z(Pa, [["render", Ra]]), Ba = {
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
}, Va = ["aria-hidden", "aria-label"], Ha = [
	"fill",
	"width",
	"height"
], Ua = { key: 0 };
function Wa(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon account-group-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Ua, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" }, null, -1)], 8, Ha))], 16, Va);
}
var Ga = /*#__PURE__*/ Z(Ba, [["render", Wa]]), Ka = {
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
}, qa = ["aria-hidden", "aria-label"], Ja = [
	"fill",
	"width",
	"height"
], Ya = { key: 0 };
function Xa(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon account-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Ya, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" }, null, -1)], 8, Ja))], 16, qa);
}
var Za = /*#__PURE__*/ Z(Ka, [["render", Xa]]), Qa = {
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
}, $a = ["aria-hidden", "aria-label"], eo = [
	"fill",
	"width",
	"height"
], to = { key: 0 };
function no(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon package-variant-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", to, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" }, null, -1)], 8, eo))], 16, $a);
}
var ro = /*#__PURE__*/ Z(Qa, [["render", no]]), io = {
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
}, ao = ["aria-hidden", "aria-label"], oo = [
	"fill",
	"width",
	"height"
], so = { key: 0 };
function co(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon text-box-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", so, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null, -1)], 8, oo))], 16, ao);
}
var lo = /*#__PURE__*/ Z(io, [["render", co]]), uo = {
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
], mo = { key: 0 };
function ho(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon cog-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", mo, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" }, null, -1)], 8, po))], 16, fo);
}
var go = /*#__PURE__*/ Z(uo, [["render", ho]]), _o = {
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
}, vo = ["aria-hidden", "aria-label"], yo = [
	"fill",
	"width",
	"height"
], bo = { key: 0 };
function xo(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon history-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", bo, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" }, null, -1)], 8, yo))], 16, vo);
}
var So = /*#__PURE__*/ Z(_o, [["render", xo]]), Co = {
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
}, wo = ["aria-hidden", "aria-label"], To = [
	"fill",
	"width",
	"height"
], Eo = { key: 0 };
function Do(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon lock-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Eo, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" }, null, -1)], 8, To))], 16, wo);
}
var Oo = /*#__PURE__*/ Z(Co, [["render", Do]]), ko = {
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
}, Ao = ["aria-hidden", "aria-label"], jo = [
	"fill",
	"width",
	"height"
], Mo = { key: 0 };
function No(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon chart-bar-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Mo, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" }, null, -1)], 8, jo))], 16, Ao);
}
var Po = /*#__PURE__*/ Z(ko, [["render", No]]), Fo = {
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
}, Io = ["aria-hidden", "aria-label"], Lo = [
	"fill",
	"width",
	"height"
], Ro = { key: 0 };
function zo(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon counter-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Ro, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z" }, null, -1)], 8, Lo))], 16, Io);
}
var Bo = /*#__PURE__*/ Z(Fo, [["render", zo]]), Vo = {
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
}, Ho = ["aria-hidden", "aria-label"], Uo = [
	"fill",
	"width",
	"height"
], Wo = { key: 0 };
function Go(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon email-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Wo, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, null, -1)], 8, Uo))], 16, Ho);
}
var Ko = /*#__PURE__*/ Z(Vo, [["render", Go]]), qo = {
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
}, Jo = ["aria-hidden", "aria-label"], Yo = [
	"fill",
	"width",
	"height"
], Xo = { key: 0 };
function Zo(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Xo, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" }, null, -1)], 8, Yo))], 16, Jo);
}
var Qo = /*#__PURE__*/ Z(qo, [["render", Zo]]), $o = {
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
}, es = ["aria-hidden", "aria-label"], ts = [
	"fill",
	"width",
	"height"
], ns = { key: 0 };
function rs(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon magnify-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", ns, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, null, -1)], 8, ts))], 16, es);
}
var is = /*#__PURE__*/ Z($o, [["render", rs]]), as = {
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
}, os = ["aria-hidden", "aria-label"], ss = [
	"fill",
	"width",
	"height"
], cs = { key: 0 };
function ls(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon star-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", cs, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, null, -1)], 8, ss))], 16, os);
}
var us = /*#__PURE__*/ Z(as, [["render", ls]]), ds = {
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
}, fs = ["aria-hidden", "aria-label"], ps = [
	"fill",
	"width",
	"height"
], ms = { key: 0 };
function hs(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon translate-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", ms, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" }, null, -1)], 8, ps))], 16, fs);
}
var gs = /*#__PURE__*/ Z(ds, [["render", hs]]);
// src/api/client.ts
function _s(e) {
	return N(`/apps/rechnungswerk/api/v1${e}`);
}
function vs(e) {
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
async function ys(e) {
	try {
		let { data: t } = await Ze.get(_s(e));
		return t;
	} catch (e) {
		throw vs(e);
	}
}
async function Q(e, t) {
	try {
		let { data: n } = await Ze.post(_s(e), t);
		return n;
	} catch (e) {
		throw vs(e);
	}
}
async function bs(e, t) {
	try {
		let { data: n } = await Ze.patch(_s(e), t);
		return n;
	} catch (e) {
		throw vs(e);
	}
}
async function xs(e, t) {
	try {
		let { data: n } = await Ze.put(_s(e), t);
		return n;
	} catch (e) {
		throw vs(e);
	}
}
async function Ss(e) {
	try {
		let { data: t } = await Ze.delete(_s(e));
		return t;
	} catch (e) {
		throw vs(e);
	}
}
// src/api/whatsnew.ts
var Cs = () => ys("/whatsnew"), ws = () => Q("/whatsnew/seen", {});
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
}, Ps = { key: 0 }, Fs = { class: "actions" }, Is = "https://werkwolke.de", Ls = "whatsnew-title", Rs = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "WhatsNewDialog",
	setup(e) {
		let r = {
			"account-group": Ga,
			"chart-bar": Po,
			cog: go,
			counter: Bo,
			email: Ko,
			"file-document": Na,
			folder: Qo,
			magnify: is,
			star: us,
			translate: gs
		}, i = v(!1), a = v(""), o = v([]), s = w("rechnungswerk", "Was ist neu in RechnungsWerk");
		function c(e) {
			return r[e] ?? us;
		}
		Fe(async () => {
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
		return (e, r) => i.value ? (X(), M(t(Pe), {
			key: 0,
			labelId: Ls,
			onKeydown: r[0] ||= D((e) => t(Ts)(e, l), ["esc"]),
			onClose: l
		}, {
			default: _(() => [R("div", Es, [
				R("h2", { id: Ls }, J(t(s)), 1),
				R("p", Ds, J(t(w)("rechnungswerk", "Version {version}", { version: a.value })), 1),
				(X(!0), B(T, null, Y(o.value, (e, r) => (X(), B("div", {
					key: r,
					class: "whatsnew__entry"
				}, [R("div", Os, [(X(), M(be(c(e.icon)), { size: 22 }))]), R("div", ks, [
					R("h3", As, [G(J(e.title) + " ", 1), e.plus ? (X(), B("span", js, "WerkPlus")) : n("", !0)]),
					R("p", Ms, J(e.text), 1),
					e.where ? (X(), B("p", Ns, [
						G(J(t(w)("rechnungswerk", "Zu finden unter")) + " ", 1),
						R("b", null, J(e.where), 1),
						e.adminOnly ? (X(), B("span", Ps, J(" " + t(w)("rechnungswerk", "(nur für Administratoren)")), 1)) : n("", !0)
					])) : n("", !0),
					e.plus ? (X(), B("a", {
						key: 1,
						class: "whatsnew__link",
						href: Is,
						target: "_blank",
						rel: "noreferrer noopener"
					}, J(t(w)("rechnungswerk", "Mehr zu WerkPlus")), 1)) : n("", !0)
				])]))), 128)),
				R("div", Fs, [q(t(U), {
					variant: "primary",
					onClick: l
				}, {
					default: _(() => [G(J(t(w)("rechnungswerk", "Alles klar")), 1)]),
					_: 1
				})])
			])]),
			_: 1
		})) : n("", !0);
	}
}), [["__scopeId", "data-v-b6c0c6dc"]]), zs = () => ys("/permission-info"), Bs = () => ys("/permissions"), Vs = (e) => xs("/permissions", e), Hs = (e) => ys(`/principals/search?query=${encodeURIComponent(e)}`), Us = bn("permissions", () => {
	let e = v(null), t = v(!1);
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
}), Ws = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "App",
	setup(e) {
		let r = Us(), i = I(() => r.info?.hasAccess ?? !1), a = I(() => r.info?.isAdmin ?? !1);
		return Fe(() => {
			r.fetch();
		}), (e, o) => {
			let s = l("router-view");
			return X(), M(t(gi), { appName: "rechnungswerk" }, {
				default: _(() => [t(r).loaded ? i.value ? (X(), B(T, { key: 2 }, [
					q(t(Ti), null, {
						footer: _(() => [
							q(t(pa), {
								name: t(w)("rechnungswerk", "Protokoll"),
								to: { name: "audit" }
							}, {
								icon: _(() => [q(So, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							q(t(pa), {
								name: t(w)("rechnungswerk", "Mein Kontakt"),
								to: { name: "my-contact" }
							}, {
								icon: _(() => [q(Za, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							a.value ? (X(), M(t(pa), {
								key: 0,
								name: t(w)("rechnungswerk", "Einstellungen"),
								to: { name: "settings" }
							}, {
								icon: _(() => [q(go, { size: 20 })]),
								_: 1
							}, 8, ["name"])) : n("", !0)
						]),
						default: _(() => [
							q(t(pa), {
								name: t(w)("rechnungswerk", "Rechnungen"),
								to: { name: "invoices" }
							}, {
								icon: _(() => [q(Na, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							q(t(pa), {
								name: t(w)("rechnungswerk", "Angebote"),
								to: { name: "quotes" }
							}, {
								icon: _(() => [q(za, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							q(t(pa), {
								name: t(w)("rechnungswerk", "Kunden"),
								to: { name: "customers" }
							}, {
								icon: _(() => [q(Ga, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							q(t(pa), {
								name: t(w)("rechnungswerk", "Produkte"),
								to: { name: "products" }
							}, {
								icon: _(() => [q(ro, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							q(t(pa), {
								name: t(w)("rechnungswerk", "Textbausteine"),
								to: { name: "text-snippets" }
							}, {
								icon: _(() => [q(lo, { size: 20 })]),
								_: 1
							}, 8, ["name"])
						]),
						_: 1
					}),
					q(t(Da), null, {
						default: _(() => [q(s)]),
						_: 1
					}),
					q(Rs)
				], 64)) : (X(), M(t(Da), { key: 1 }, {
					default: _(() => [q(t(ze), {
						name: t(w)("rechnungswerk", "Kein Zugriff"),
						description: t(w)("rechnungswerk", "Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.")
					}, {
						icon: _(() => [q(Oo, { size: 20 })]),
						_: 1
					}, 8, ["name", "description"])]),
					_: 1
				})) : (X(), M(t(Da), { key: 0 }, {
					default: _(() => [q(t(ye), {
						class: "rw-app-loading",
						size: 44
					})]),
					_: 1
				}))]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-e925a539"]]), Gs = ["role"], Ks = {
	key: 0,
	class: "notecard__heading"
}, qs = { class: "notecard__text" }, $ = /* @__PURE__ */ At(/* @__PURE__ */ H({
	__name: "NcNoteCard",
	props: {
		heading: { default: void 0 },
		showAlert: { type: Boolean },
		text: { default: void 0 },
		type: { default: "warning" }
	},
	setup(e) {
		let r = e, i = I(() => r.showAlert || r.type === "error"), o = I(() => {
			switch (r.type) {
				case "error": return a;
				case "success": return Oe;
				case "info": return ne;
				default: return zt;
			}
		});
		return (r, a) => (X(), B("div", {
			class: V(["notecard", {
				[`notecard--${e.type}`]: e.type,
				"notecard--legacy": t(Ke)
			}]),
			role: i.value ? "alert" : "note"
		}, [P(r.$slots, "icon", {}, () => [q(t(We), {
			path: o.value,
			class: V(["notecard__icon", { "notecard__icon--heading": e.heading }]),
			inline: ""
		}, null, 8, ["path", "class"])], !0), R("div", null, [e.heading ? (X(), B("p", Ks, J(e.heading), 1)) : n("", !0), P(r.$slots, "default", {}, () => [R("p", qs, J(e.text), 1)], !0)])], 10, Gs));
	}
}), [["__scopeId", "data-v-6be9fa31"]]), Js = {
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
}, Ys = ["aria-hidden", "aria-label"], Xs = [
	"fill",
	"width",
	"height"
], Zs = { key: 0 };
function Qs(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon information-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Zs, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" }, null, -1)], 8, Xs))], 16, Ys);
}
var $s = /*#__PURE__*/ Z(Js, [["render", Qs]]), ec = { class: "info-icon-wrapper" }, tc = {
	class: "info-popup",
	tabindex: "0"
}, nc = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "InfoIcon",
	setup(e) {
		return (e, n) => (X(), B("span", ec, [q(t(d), {
			popupRole: "tooltip",
			noFocusTrap: ""
		}, {
			trigger: _(() => [q($s, {
				class: "info-icon",
				size: 14,
				tabindex: "0"
			})]),
			default: _(() => [R("div", tc, [P(e.$slots, "default", {}, void 0, !0)])]),
			_: 3
		})]));
	}
}), [["__scopeId", "data-v-6c57a620"]]), rc = {
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
}, ic = ["aria-hidden", "aria-label"], ac = [
	"fill",
	"width",
	"height"
], oc = { key: 0 };
function sc(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon plus-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", oc, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, null, -1)], 8, ac))], 16, ic);
}
var cc = /*#__PURE__*/ Z(rc, [["render", sc]]), lc = {
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
}, uc = ["aria-hidden", "aria-label"], dc = [
	"fill",
	"width",
	"height"
], fc = { key: 0 };
function pc(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon download-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", fc, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" }, null, -1)], 8, dc))], 16, uc);
}
var mc = /*#__PURE__*/ Z(lc, [["render", pc]]), hc = {
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
}, gc = ["aria-hidden", "aria-label"], _c = [
	"fill",
	"width",
	"height"
], vc = { key: 0 };
function yc(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon content-copy-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", vc, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }, null, -1)], 8, _c))], 16, gc);
}
var bc = /*#__PURE__*/ Z(hc, [["render", yc]]), xc = {
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
], wc = { key: 0 };
function Tc(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon pencil-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", wc, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" }, null, -1)], 8, Cc))], 16, Sc);
}
var Ec = /*#__PURE__*/ Z(xc, [["render", Tc]]), Dc = {
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
}, Oc = ["aria-hidden", "aria-label"], kc = [
	"fill",
	"width",
	"height"
], Ac = { key: 0 };
function jc(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon close-circle-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Ac, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }, null, -1)], 8, kc))], 16, Oc);
}
var Mc = /*#__PURE__*/ Z(Dc, [["render", jc]]), Nc = {
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
], Ic = { key: 0 };
function Lc(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon check-circle-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Ic, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" }, null, -1)], 8, Fc))], 16, Pc);
}
var Rc = /*#__PURE__*/ Z(Nc, [["render", Lc]]), zc = {
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
}, Bc = ["aria-hidden", "aria-label"], Vc = [
	"fill",
	"width",
	"height"
], Hc = { key: 0 };
function Uc(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon clock-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Hc, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" }, null, -1)], 8, Vc))], 16, Bc);
}
var Wc = /*#__PURE__*/ Z(zc, [["render", Uc]]), Gc = {
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
}, Kc = ["aria-hidden", "aria-label"], qc = [
	"fill",
	"width",
	"height"
], Jc = { key: 0 };
function Yc(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon help-circle-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Jc, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, null, -1)], 8, qc))], 16, Kc);
}
var Xc = /*#__PURE__*/ Z(Gc, [["render", Yc]]), Zc = {
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
}, Qc = ["aria-hidden", "aria-label"], $c = [
	"fill",
	"width",
	"height"
], el = { key: 0 };
function tl(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon checkbox-blank-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", el, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, null, -1)], 8, $c))], 16, Qc);
}
var nl = /*#__PURE__*/ Z(Zc, [["render", tl]]), rl = {
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
}, il = ["aria-hidden", "aria-label"], al = [
	"fill",
	"width",
	"height"
], ol = { key: 0 };
function sl(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon checkbox-marked-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", ol, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null, -1)], 8, al))], 16, il);
}
var cl = /*#__PURE__*/ Z(rl, [["render", sl]]), ll = {
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
}, ul = ["aria-hidden", "aria-label"], dl = [
	"fill",
	"width",
	"height"
], fl = { key: 0 };
function pl(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon check-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", fl, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }, null, -1)], 8, dl))], 16, ul);
}
var ml = /*#__PURE__*/ Z(ll, [["render", pl]]), hl = {
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
}, gl = ["aria-hidden", "aria-label"], _l = [
	"fill",
	"width",
	"height"
], vl = { key: 0 };
function yl(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", vl, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, null, -1)], 8, _l))], 16, gl);
}
var bl = /*#__PURE__*/ Z(hl, [["render", yl]]), xl = () => ys("/invoices"), Sl = (e) => ys(`/invoices/${e}`), Cl = (e) => Q("/invoices", { data: e }), wl = (e, t) => bs(`/invoices/${e}`, { data: t }), Tl = (e) => Ss(`/invoices/${e}`), El = (e) => Q(`/invoices/${e}/commit`, {}), Dl = (e) => Q(`/invoices/${e}/cancel`, {}), Ol = (e) => Q(`/invoices/${e}/duplicate`, {}), kl = (e, t) => Q(`/invoices/${e}/pay`, t ? { date: t } : {}), Al = (e) => Q(`/invoices/${e}/unpay`, {}), jl = (e) => _s(`/invoices/${e}/pdf`), Ml = (e) => _s(`/invoices/${e}/preview`) + "?t=" + Date.now(), Nl = (e) => {
	let t = document.createElement("a");
	t.href = jl(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Pl = (e, t) => Q(`/invoices/${e}/send`, t), Fl = bn("invoice", () => {
	let e = v([]), t = v(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await xl();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => Sl(e);
	async function i(e) {
		let t = await Cl(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await wl(e, t);
		return await n(), r;
	}
	async function o(t) {
		await Tl(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await El(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await Dl(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await Ol(e);
		return await n(), t;
	}
	async function u(e, t) {
		let r = await kl(e, t);
		return await n(), r;
	}
	async function d(e) {
		let t = await Al(e);
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
}), Il = (e) => Q("/smtp/test", e), Ll = () => ys("/settings"), Rl = (e) => xs("/settings", { data: e }), zl = (e) => xs("/settings/logo", { path: e }), Bl = () => Ss("/settings/logo"), Vl = (e) => `${_s("/settings/logo")}?v=${e}`, Hl = (e) => xs("/settings/archive-folder", { path: e }), Ul = () => Ss("/settings/archive-folder"), Wl = bn("settings", () => {
	let e = v(null), t = v(!1), n = v(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Ll();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		n.value = !0;
		try {
			return e.value = await Rl(t), e.value;
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
}), Gl = [
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
], Kl = {
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
}, ql = [
	1900,
	700,
	0
], Jl = "Gem. § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.", Yl = {
	invoice: "Rechnung",
	quote: "Angebot"
}, Xl = {
	opening: "Anrede & Einleitung",
	closing: "Schlusstext"
}, Zl = {
	draft: "Entwurf",
	committed: "Festgeschrieben",
	cancelled: "Storniert"
}, Ql = {
	invoice: "Rechnung",
	cancellation: "Storno",
	quote: "Angebot"
}, $l = {
	draft: "Entwurf",
	open: "Offen",
	expired: "Abgelaufen",
	accepted: "Angenommen",
	rejected: "Abgelehnt",
	converted: "Übernommen",
	superseded: "Revidiert"
};
function eu(e) {
	return e.includes(".") ? /^\d{1,3}(\.\d{3})+$/.test(e) : /^\d*$/.test(e);
}
function tu(e, t, n) {
	if (e == null) return null;
	let r = String(e).replace(/[\s  ]+/g, "");
	if (r === "") return null;
	let i = !1;
	if (r.startsWith("-") ? (i = !0, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1)), r === "" || !/^[0-9.,]+$/.test(r)) return null;
	let a = r.indexOf(","), o, s;
	if (a >= 0) {
		if (r.includes(",", a + 1) || (o = r.slice(0, a), s = r.slice(a + 1), s.includes("."))) return null;
	} else o = r, s = "";
	if (!eu(o) || (o = o.split(".").join(""), o === "" && s === "") || (o === "" && (o = "0"), !/^\d+$/.test(o)) || s !== "" && !/^\d+$/.test(s) || s.length > t || (o = o.replace(/^0+/, ""), o === "" && (o = "0"), o.length > n)) return null;
	s = s.replace(/0+$/, "");
	let c = o + (s === "" ? "" : "." + s);
	return i && c !== "0" ? "-" + c : c;
}
function nu(e) {
	return e == null || String(e).trim() === "" ? "1" : tu(e, 3, 9);
}
function ru(e) {
	return e == null || String(e).trim() === "" ? "0" : tu(e, 4, 9);
}
function iu(e) {
	if (e === null) return "";
	let [t, n] = e.split("."), r = t.startsWith("-") ? "-" : "";
	return r + (r ? t.slice(1) : t).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (n ? "," + n : "");
}
function au(e) {
	if (e == null) return "";
	let t = String(e).trim();
	if (t === "") return "";
	if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(t)) return t;
	let n = t.startsWith("-");
	(n || t.startsWith("+")) && (t = t.slice(1));
	let [r, i = ""] = t.split("."), a = r.replace(/^0+/, "") || "0", o = i.replace(/0+$/, "");
	return iu((n && (a !== "0" || o !== "") ? "-" : "") + a + (o === "" ? "" : "." + o));
}
// src/utils/money.ts
function ou(e) {
	return e == null ? "" : iu((e / 1e4).toFixed(4).replace(/(\.\d\d)(\d*?)0+$/, "$1$2"));
}
function su(e) {
	let t = ru(e);
	return t === null ? 0 : Math.round(Number.parseFloat(t) * 1e4);
}
function cu(e) {
	let t = (e ?? 0) / 1e4;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	}).format(t);
}
function lu(e) {
	let t = (e ?? 0) / 100;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR"
	}).format(t);
}
function uu(e) {
	return `${e / 100} %`;
}
// src/views/InvoicesView.vue?vue&type=script&setup=true&lang.ts
var du = { class: "rw-view" }, fu = { class: "rw-view__head" }, pu = { key: 2 }, mu = { class: "rw-filterbar" }, hu = ["onClick"], gu = { class: "rw-chip__n" }, _u = {
	key: 0,
	class: "rw-chip rw-chip--sum"
}, vu = { class: "rw-table-wrap" }, yu = { class: "rw-table" }, bu = { class: "rw-th-info" }, xu = { class: "rw-info-popup" }, Su = { class: "rw-info-popup__hint" }, Cu = { class: "rw-info-popup__group" }, wu = { class: "rw-legend__label" }, Tu = { class: "rw-legend__item" }, Eu = { class: "rw-legend__item" }, Du = { class: "rw-legend__item" }, Ou = {
	key: 0,
	class: "rw-info-popup__group"
}, ku = { class: "rw-legend__label" }, Au = { class: "rw-legend__item" }, ju = { class: "rw-legend__item" }, Mu = { class: "rw-legend__item" }, Nu = { class: "num" }, Pu = { class: "rw-col-paid" }, Fu = ["onClick"], Iu = { class: "rw-status-cell" }, Lu = { class: "rw-nowrap" }, Ru = {
	key: 0,
	class: "rw-pill"
}, zu = { class: "num" }, Bu = ["aria-label", "onKeyup"], Vu = ["title", "onClick"], Hu = { class: "rw-col-paid" }, Uu = [
	"aria-label",
	"title",
	"onClick"
], Wu = { class: "rw-col-actions" }, Gu = { class: "rw-actions" }, Ku = 864e5, qu = /* @__PURE__ */ H({
	__name: "InvoicesView",
	setup(e) {
		let r = ct(), i = Fl(), a = Wl(), o = v(""), s = I(() => !!a.settings?.imapHost), c = I(() => i.invoices.some((e) => !!e.datevStatus)), l = I(() => s.value || c.value), u = [
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
		], d = v("all"), f = (e) => e.paymentStatus === "unpaid" || e.paymentStatus === "overdue", p = I(() => {
			let e = {
				all: i.invoices.length,
				open: 0,
				overdue: 0,
				paid: 0
			};
			for (let t of i.invoices) f(t) && e.open++, t.paymentStatus === "overdue" && e.overdue++, t.paymentStatus === "paid" && e.paid++;
			return e;
		}), m = I(() => i.invoices.reduce((e, t) => e + (f(t) ? t.totalCents : 0), 0)), h = I(() => {
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
		function ee(e) {
			let t = g(e);
			t.setHours(0, 0, 0, 0);
			let n = /* @__PURE__ */ new Date();
			return n.setHours(0, 0, 0, 0), Math.round((t.getTime() - n.getTime()) / Ku);
		}
		function y(e) {
			return e ? g(e).toLocaleDateString(void 0, {
				day: "numeric",
				month: "numeric"
			}) : "";
		}
		let b = (e) => e.paymentStatus === "overdue" ? "rw-amt-overdue" : e.paymentStatus === "paid" ? "rw-amt-paid" : "";
		function x(e) {
			if (e.paymentStatus === "paid") return e.paidAt ? w("rechnungswerk", "bezahlt am {date}", { date: y(e.paidAt) }) : w("rechnungswerk", "bezahlt");
			if (!e.dueDate) return "";
			let t = ee(e.dueDate);
			if (e.paymentStatus === "overdue") {
				let e = -t;
				return e === 1 ? w("rechnungswerk", "1 Tag überfällig") : w("rechnungswerk", "{days} Tage überfällig", { days: String(e) });
			}
			return e.paymentStatus === "unpaid" ? t <= 0 ? w("rechnungswerk", "fällig heute") : t === 1 ? w("rechnungswerk", "fällig morgen ({date})", { date: y(e.dueDate) }) : w("rechnungswerk", "fällig in {days} Tagen ({date})", {
				days: String(t),
				date: y(e.dueDate)
			}) : "";
		}
		let te = (e) => e.paymentStatus === "paid" ? w("rechnungswerk", "Als unbezahlt markieren") : w("rechnungswerk", "Als bezahlt markieren");
		function S(e) {
			return e.paymentStatus === "paid" ? e.paidAt ? w("rechnungswerk", "Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen", { date: y(e.paidAt) }) : w("rechnungswerk", "Bezahlt – klicken, um die Zahlung zurückzunehmen") : w("rechnungswerk", "Als bezahlt markieren");
		}
		async function ne(e) {
			o.value = "";
			try {
				e.paymentStatus === "paid" ? await i.markUnpaid(e.id) : await i.markPaid(e.id);
			} catch (e) {
				o.value = e.message ?? w("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		let re = v(null), E = v("");
		function ie(e) {
			let t = e ? g(e) : /* @__PURE__ */ new Date(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
			return `${t.getFullYear()}-${n}-${r}`;
		}
		function O(e) {
			o.value = "", E.value = ie(e.paidAt), re.value = e.id;
		}
		function ae() {
			re.value = null;
		}
		async function oe(e) {
			if (!E.value) ae();
			else {
				o.value = "";
				try {
					await i.markPaid(e.id, E.value), re.value = null;
				} catch (e) {
					o.value = e.message ?? w("rechnungswerk", "Zahldatum konnte nicht geändert werden");
				}
			}
		}
		let se = {
			draft: Ec,
			committed: Oo,
			cancelled: Mc
		}, ce = {
			pending: Wc,
			confirmed: Rc,
			unknown: Xc,
			failed: Mc
		}, k = (e) => se[e] ?? Na, A = (e) => e ? ce[e] ?? null : null, le = {
			pending: w("rechnungswerk", "An DATEV gesendet – Bestätigung ausstehend"),
			confirmed: w("rechnungswerk", "Von DATEV bestätigt (Beleg angenommen)"),
			unknown: w("rechnungswerk", "DATEV-Antwort prüfen"),
			failed: w("rechnungswerk", "Von DATEV abgelehnt")
		}, ue = (e) => le[e] ?? "", de = (e) => w("rechnungswerk", Zl[e] ?? e), fe = (e) => w("rechnungswerk", Ql[e] ?? e), pe = (e) => e.relatedNumber ? w("rechnungswerk", "{type} zu Rechnung {number}", {
			type: fe(e.invoiceType),
			number: e.relatedNumber
		}) : fe(e.invoiceType);
		function j(e) {
			return e ? new Date(e).toLocaleDateString() : "—";
		}
		Fe(() => {
			i.fetchAll().catch((e) => {
				o.value = e.message ?? w("rechnungswerk", "Laden fehlgeschlagen");
			}), a.fetch().catch(() => {});
		});
		function me() {
			r.push({ name: "invoice-new" });
		}
		function he(e) {
			r.push({
				name: "invoice-detail",
				params: { id: String(e) }
			});
		}
		function ge(e) {
			Nl(e);
		}
		async function N(e) {
			o.value = "";
			try {
				let t = await i.duplicate(e);
				r.push({
					name: "invoice-detail",
					params: { id: String(t.id) }
				});
			} catch (e) {
				o.value = e.message ?? w("rechnungswerk", "Duplizieren fehlgeschlagen");
			}
		}
		return (e, r) => {
			let a = Pt("tooltip");
			return X(), B("div", du, [
				R("div", fu, [R("h2", null, J(t(w)("rechnungswerk", "Rechnungen")), 1), q(t(U), {
					variant: "primary",
					onClick: me
				}, {
					icon: _(() => [q(cc, { size: 20 })]),
					default: _(() => [G(" " + J(t(w)("rechnungswerk", "Neue Rechnung")), 1)]),
					_: 1
				})]),
				o.value ? (X(), M(t($), {
					key: 0,
					type: "error",
					text: o.value
				}, null, 8, ["text"])) : n("", !0),
				!t(i).loading && t(i).invoices.length === 0 ? (X(), M(t(ze), {
					key: 1,
					name: t(w)("rechnungswerk", "Noch keine Rechnungen"),
					description: t(w)("rechnungswerk", "Lege deine erste Rechnung an.")
				}, {
					icon: _(() => [q(Na, { size: 20 })]),
					_: 1
				}, 8, ["name", "description"])) : t(i).invoices.length > 0 ? (X(), B("div", pu, [R("div", mu, [(X(), B(T, null, Y(u, (e) => R("button", {
					key: e.key,
					class: V(["rw-chip", {
						"rw-chip--active": d.value === e.key,
						"rw-chip--overdue": e.key === "overdue"
					}]),
					onClick: (t) => d.value = e.key
				}, [G(J(t(w)("rechnungswerk", e.label)) + " ", 1), R("span", gu, J(p.value[e.key]), 1)], 10, hu)), 64)), m.value > 0 ? (X(), B("span", _u, [G(J(t(w)("rechnungswerk", "Offen gesamt:")) + " ", 1), R("strong", null, J(t(lu)(m.value)), 1)])) : n("", !0)]), R("div", vu, [R("table", yu, [R("thead", null, [R("tr", null, [
					R("th", null, [R("span", bu, [G(J(t(w)("rechnungswerk", "Status")) + " ", 1), q(nc, null, {
						default: _(() => [R("div", xu, [
							R("p", Su, J(t(w)("rechnungswerk", "Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.")), 1),
							R("div", Cu, [
								R("span", wu, J(t(w)("rechnungswerk", "Rechnung")), 1),
								R("span", Tu, [q(Oo, {
									size: 16,
									class: "rw-sicon rw-sicon--committed"
								}), G(" " + J(t(w)("rechnungswerk", "Festgeschrieben")), 1)]),
								R("span", Eu, [q(Ec, {
									size: 16,
									class: "rw-sicon rw-sicon--draft"
								}), G(" " + J(t(w)("rechnungswerk", "Entwurf")), 1)]),
								R("span", Du, [q(Mc, {
									size: 16,
									class: "rw-sicon rw-sicon--cancelled"
								}), G(" " + J(t(w)("rechnungswerk", "Storniert")), 1)])
							]),
							l.value ? (X(), B("div", Ou, [
								R("span", ku, J(t(w)("rechnungswerk", "DATEV-Übergabe")), 1),
								R("span", Au, [q(Rc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-confirmed"
								}), G(" " + J(t(w)("rechnungswerk", "bestätigt")), 1)]),
								R("span", ju, [q(Wc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-pending"
								}), G(" " + J(t(w)("rechnungswerk", "gesendet")), 1)]),
								R("span", Mu, [q(Xc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-unknown"
								}), G(" " + J(t(w)("rechnungswerk", "Antwort prüfen")), 1)])
							])) : n("", !0)
						])]),
						_: 1
					})])]),
					R("th", null, J(t(w)("rechnungswerk", "Nummer")), 1),
					R("th", null, J(t(w)("rechnungswerk", "Empfänger")), 1),
					R("th", null, J(t(w)("rechnungswerk", "Datum")), 1),
					R("th", Nu, J(t(w)("rechnungswerk", "Brutto")), 1),
					R("th", Pu, J(t(w)("rechnungswerk", "Bezahlt")), 1),
					r[2] ||= R("th", { class: "rw-col-actions" }, null, -1)
				])]), R("tbody", null, [(X(!0), B(T, null, Y(h.value, (e) => (X(), B("tr", {
					key: e.id,
					class: V(["rw-row-clickable", { "rw-row--overdue": e.paymentStatus === "overdue" }]),
					onClick: (t) => he(e.id)
				}, [
					R("td", null, [R("span", Iu, [(X(), M(be(k(e.status)), {
						size: 20,
						class: V(["rw-sicon", `rw-sicon--${e.status}`]),
						title: de(e.status)
					}, null, 8, ["class", "title"])), l.value && e.datevStatus && A(e.datevStatus) ? (X(), M(be(A(e.datevStatus)), {
						key: 0,
						size: 18,
						class: V(["rw-sicon", `rw-sicon--datev-${e.datevStatus}`]),
						title: ue(e.datevStatus)
					}, null, 8, ["class", "title"])) : n("", !0)])]),
					R("td", Lu, [G(J(e.number ?? t(w)("rechnungswerk", "(Entwurf)")) + " ", 1), e.invoiceType === "invoice" ? n("", !0) : C((X(), B("span", Ru, [G(J(fe(e.invoiceType)), 1)])), [[a, pe(e)]])]),
					R("td", null, J(e.recipientName ?? "—"), 1),
					R("td", null, J(j(e.issueDate ?? e.createdAt)), 1),
					R("td", zu, [R("span", { class: V(b(e)) }, J(t(lu)(e.totalCents)), 3), re.value === e.id ? (X(), B("div", {
						key: 0,
						class: "rw-paid-edit",
						onClick: r[1] ||= K(() => {}, ["stop"])
					}, [
						C(R("input", {
							"onUpdate:modelValue": r[0] ||= (e) => E.value = e,
							type: "date",
							class: "rw-input rw-paid-input",
							"aria-label": t(w)("rechnungswerk", "Zahldatum"),
							onKeyup: [D((t) => oe(e), ["enter"]), D(ae, ["esc"])]
						}, null, 40, Bu), [[F, E.value]]),
						q(t(U), {
							variant: "primary",
							"aria-label": t(w)("rechnungswerk", "Zahldatum speichern"),
							title: t(w)("rechnungswerk", "Zahldatum speichern"),
							onClick: K((t) => oe(e), ["stop"])
						}, {
							icon: _(() => [q(ml, { size: 18 })]),
							_: 1
						}, 8, [
							"aria-label",
							"title",
							"onClick"
						]),
						q(t(U), {
							variant: "tertiary",
							"aria-label": t(w)("rechnungswerk", "Abbrechen"),
							title: t(w)("rechnungswerk", "Abbrechen"),
							onClick: K(ae, ["stop"])
						}, {
							icon: _(() => [q(bl, { size: 18 })]),
							_: 1
						}, 8, ["aria-label", "title"])
					])) : e.paymentStatus === "paid" ? (X(), B("button", {
						key: 1,
						type: "button",
						class: "rw-subline rw-subline--editable",
						title: t(w)("rechnungswerk", "Zahldatum ändern"),
						onClick: K((t) => O(e), ["stop"])
					}, J(x(e)), 9, Vu)) : x(e) ? (X(), B("div", {
						key: 2,
						class: V(["rw-subline", { "rw-subline--overdue": e.paymentStatus === "overdue" }])
					}, J(x(e)), 3)) : n("", !0)]),
					R("td", Hu, [e.paymentStatus ? (X(), B("button", {
						key: 0,
						class: V(["rw-paybox", e.paymentStatus === "paid" ? "rw-paybox--paid" : "rw-paybox--open"]),
						"aria-label": te(e),
						title: S(e),
						onClick: K((t) => ne(e), ["stop"])
					}, [(X(), M(be(e.paymentStatus === "paid" ? cl : nl), { size: 22 }))], 10, Uu)) : n("", !0)]),
					R("td", Wu, [R("div", Gu, [e.invoiceType === "cancellation" ? n("", !0) : (X(), M(t(U), {
						key: 0,
						variant: "tertiary",
						"aria-label": t(w)("rechnungswerk", "Duplizieren"),
						title: t(w)("rechnungswerk", "Als Vorlage für neue Rechnung duplizieren"),
						onClick: K((t) => N(e.id), ["stop"])
					}, {
						icon: _(() => [q(bc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])), e.status === "draft" ? n("", !0) : (X(), M(t(U), {
						key: 1,
						variant: "tertiary",
						"aria-label": t(w)("rechnungswerk", "PDF herunterladen"),
						title: t(w)("rechnungswerk", "PDF herunterladen"),
						onClick: K((t) => ge(e.id), ["stop"])
					}, {
						icon: _(() => [q(mc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					]))])])
				], 10, Fu))), 128))])])])])) : n("", !0)
			]);
		};
	}
}), Ju = {
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
}, Yu = ["aria-hidden", "aria-label"], Xu = [
	"fill",
	"width",
	"height"
], Zu = { key: 0 };
function Qu(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon delete-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Zu, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" }, null, -1)], 8, Xu))], 16, Yu);
}
var $u = /*#__PURE__*/ Z(Ju, [["render", Qu]]), ed = {
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
}, td = ["aria-hidden", "aria-label"], nd = [
	"fill",
	"width",
	"height"
], rd = { key: 0 };
function id(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon send-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", rd, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M2,21L23,12L2,3V10L17,12L2,14V21Z" }, null, -1)], 8, nd))], 16, td);
}
var ad = /*#__PURE__*/ Z(ed, [["render", id]]), od = {
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
}, sd = ["aria-hidden", "aria-label"], cd = [
	"fill",
	"width",
	"height"
], ld = { key: 0 };
function ud(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon eye-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", ld, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" }, null, -1)], 8, cd))], 16, sd);
}
var dd = /*#__PURE__*/ Z(od, [["render", ud]]), fd = {
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
}, pd = ["aria-hidden", "aria-label"], md = [
	"fill",
	"width",
	"height"
], hd = { key: 0 };
function gd(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-move-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", hd, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 20.41 4.12 20.8 4.34 21.12C4.41 21.23 4.5 21.33 4.59 21.41C4.95 21.78 5.45 22 6 22H13.53C13 21.42 12.61 20.75 12.35 20H6V4H13V9H18V12C18.7 12 19.37 12.12 20 12.34V8L14 2M18 23L23 18.5L20 15.8L18 14V17H14V20H18V23Z" }, null, -1)], 8, md))], 16, pd);
}
var _d = /*#__PURE__*/ Z(fd, [["render", gd]]), vd = {
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
}, yd = ["aria-hidden", "aria-label"], bd = [
	"fill",
	"width",
	"height"
], xd = { key: 0 };
function Sd(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-edit-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", xd, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" }, null, -1)], 8, bd))], 16, yd);
}
var Cd = /*#__PURE__*/ Z(vd, [["render", Sd]]), wd = (e) => ys(`/contacts/search?q=${encodeURIComponent(e)}`), Td = () => ys("/me"), Ed = { class: "contact-picker" }, Dd = ["value", "placeholder"], Od = {
	key: 0,
	class: "contact-picker__list"
}, kd = ["onMousedown"], Ad = {
	key: 0,
	class: "muted"
}, jd = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "ContactPicker",
	props: { modelValue: {} },
	emits: ["update:modelValue", "select"],
	setup(e, { emit: r }) {
		let i = r, a = v([]), o = v(!1), s = null;
		function c(e) {
			i("update:modelValue", e), s && clearTimeout(s), e.trim().length < 2 ? (a.value = [], o.value = !1) : s = setTimeout(async () => {
				try {
					a.value = await wd(e.trim()), o.value = a.value.length > 0;
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
		return tt(() => {
			s && clearTimeout(s);
		}), (r, i) => (X(), B("div", Ed, [R("input", {
			value: e.modelValue,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: t(w)("rechnungswerk", "Name eingeben oder Kontakt wählen\xA0…"),
			onInput: i[0] ||= (e) => c(e.target.value),
			onFocus: i[1] ||= (e) => o.value = a.value.length > 0,
			onBlur: u
		}, null, 40, Dd), o.value && a.value.length > 0 ? (X(), B("ul", Od, [(X(!0), B(T, null, Y(a.value, (e, t) => (X(), B("li", {
			key: t,
			class: "contact-picker__item",
			onMousedown: K((t) => l(e), ["prevent"])
		}, [R("strong", null, J(e.name), 1), e.email ? (X(), B("span", Ad, J(e.email), 1)) : n("", !0)], 40, kd))), 128))])) : n("", !0)]));
	}
}), [["__scopeId", "data-v-23f7f625"]]), Md = null, Nd = () => (Md === null && (Md = ys("/countries").catch((e) => {
	throw Md = null, e;
})), Md), Pd = ["disabled", "title"], Fd = ["value"], Id = ["value"], Ld = /* @__PURE__ */ H({
	__name: "CountrySelect",
	props: /*@__PURE__*/ kt({
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
		let t = st(e, "modelValue"), r = v([]), i = I(() => {
			let e = r.value.find((e) => e.code === t.value);
			return e ? `${e.label} (${e.code})` : t.value ?? "";
		}), a = I(() => {
			let e = t.value ?? "";
			return e === "" || r.value.length === 0 ? e : r.value.some((t) => t.code === e) ? "" : e;
		});
		return Fe(async () => {
			try {
				r.value = await Nd();
			} catch {
				r.value = [];
			}
		}), (o, s) => C((X(), B("select", {
			"onUpdate:modelValue": s[0] ||= (e) => t.value = e,
			class: V(e.selectClass),
			disabled: e.disabled,
			title: i.value
		}, [a.value === "" ? n("", !0) : (X(), B("option", {
			key: 0,
			value: a.value
		}, J(a.value), 9, Fd)), (X(!0), B(T, null, Y(r.value, (e) => (X(), B("option", {
			key: e.code,
			value: e.code
		}, J(e.label) + " (" + J(e.code) + ")", 9, Id))), 128))], 10, Pd)), [[we, t.value]]);
	}
}), Rd = () => ys("/customers"), zd = (e) => Q("/customers", { data: e }), Bd = (e, t) => bs(`/customers/${e}`, { data: t }), Vd = (e) => Ss(`/customers/${e}`), Hd = bn("customer", () => {
	let e = v([]), t = v(!1);
	function n() {
		e.value.sort((e, t) => e.name.localeCompare(t.name));
	}
	async function r() {
		t.value = !0;
		try {
			e.value = await Rd();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		let r = await zd(t);
		return e.value.push(r), n(), r;
	}
	async function a(t, r) {
		let i = await Bd(t, r), a = e.value.findIndex((e) => e.id === t);
		return a >= 0 && (e.value[a] = i), n(), i;
	}
	async function o(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Vd(t);
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
}), Ud = { class: "customer-picker" }, Wd = ["value", "placeholder"], Gd = {
	key: 0,
	class: "customer-picker__list"
}, Kd = ["onMousedown"], qd = { class: "muted" }, Jd = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "CustomerPicker",
	emits: ["select"],
	setup(e, { emit: r }) {
		let i = r, a = Hd(), o = v(""), s = v([]), c = v(!1);
		Fe(() => {
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
		return (e, r) => (X(), B("div", Ud, [R("input", {
			value: o.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: t(w)("rechnungswerk", "Kunde suchen oder anlegen\xA0…"),
			onInput: r[0] ||= (e) => l(e.target.value),
			onFocus: r[1] ||= (e) => c.value = s.value.length > 0,
			onBlur: d
		}, null, 40, Wd), c.value && s.value.length > 0 ? (X(), B("ul", Gd, [(X(!0), B(T, null, Y(s.value, (e) => (X(), B("li", {
			key: e.id,
			class: "customer-picker__item",
			onMousedown: K((t) => u(e), ["prevent"])
		}, [R("strong", null, J(e.name), 1), R("span", qd, J([
			e.customerNumber,
			[e.postalCode, e.city].filter(Boolean).join(" "),
			e.vatId
		].filter(Boolean).join(" · ")), 1)], 40, Kd))), 128))])) : n("", !0)]));
	}
}), [["__scopeId", "data-v-4ad9c538"]]), Yd = { class: "product-picker" }, Xd = ["value", "placeholder"], Zd = {
	key: 0,
	class: "product-picker__panel"
}, Qd = { class: "product-picker__head" }, $d = { class: "product-picker__list" }, ef = ["onMousedown"], tf = { class: "muted" }, nf = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "ProductPicker",
	props: { products: {} },
	emits: ["select"],
	setup(e, { emit: r }) {
		let i = e, a = r, o = v(""), s = v([]), c = v(!1), l = null, u = I(() => o.value.trim() === "" ? w("rechnungswerk", "Alle Produkte ({gesamt})", { gesamt: i.products.length }) : w("rechnungswerk", "{treffer} Treffer", { treffer: s.value.length }));
		function d(e) {
			return [`${ou(e.defaultPriceE4)} €`, e.defaultUnitLabel || w("rechnungswerk", Kl[e.defaultUnitCode])].filter(Boolean).join(" · ");
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
		return (e, r) => (X(), B("div", Yd, [R("input", {
			value: o.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: t(w)("rechnungswerk", "Produkt wählen oder suchen\xA0…"),
			onInput: r[0] ||= (e) => p(e.target.value),
			onFocus: m,
			onClick: m,
			onBlur: g
		}, null, 40, Xd), c.value && s.value.length > 0 ? (X(), B("div", Zd, [R("div", Qd, J(u.value), 1), R("ul", $d, [(X(!0), B(T, null, Y(s.value, (e) => (X(), B("li", {
			key: e.id,
			class: "product-picker__item",
			onMousedown: K((t) => h(e), ["prevent"])
		}, [R("strong", null, J(e.name), 1), R("span", tf, J(d(e)), 1)], 40, ef))), 128))])])) : n("", !0)]));
	}
}), [["__scopeId", "data-v-6469714c"]]);
// src/types/editor.ts
function rf(e = 1900) {
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
function af(e, t) {
	return {
		productId: e.id,
		name: e.name,
		description: e.description ?? "",
		quantity: "1",
		unitCode: e.defaultUnitCode,
		unitLabel: e.defaultUnitLabel ?? "",
		priceInput: ou(e.defaultPriceE4),
		taxRateBp: t ? 0 : e.defaultTaxRateBp
	};
}
function of(e) {
	return {
		productId: e.productId,
		name: e.name,
		description: e.description ?? "",
		quantity: au(e.quantity),
		unitCode: e.unitCode,
		unitLabel: e.unitLabel ?? "",
		priceInput: ou(e.unitPriceE4),
		taxRateBp: e.taxRateBp
	};
}
// src/utils/invoiceCalc.ts
function sf(e, t) {
	let n = nu(e);
	if (n === null) return 0;
	let r = Math.round(Number(n) * 1e3);
	return Math.round(r * t / 1e5);
}
function cf(e, t = !1) {
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
var lf = { class: "rw-table-wrap" }, uf = { class: "rw-table rw-table--positions" }, df = {
	key: 0,
	class: "rw-col-actions"
}, ff = { class: "num" }, pf = { class: "num" }, mf = { class: "num" }, hf = { class: "rw-sum" }, gf = { key: 0 }, _f = { class: "rw-pos-main" }, vf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], yf = { class: "num" }, bf = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], xf = ["onUpdate:modelValue", "disabled"], Sf = ["value"], Cf = { class: "num" }, wf = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], Tf = { class: "num" }, Ef = ["onUpdate:modelValue", "disabled"], Df = ["value"], Of = { class: "rw-sum" }, kf = {
	key: 0,
	class: "num"
}, Af = {
	key: 0,
	class: "rw-pos-desc"
}, jf = ["colspan"], Mf = { class: "rw-sub-row" }, Nf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder",
	"title"
], Pf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Ff = { key: 0 }, If = ["colspan"], Lf = {
	key: 0,
	class: "rw-toolbar"
}, Rf = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "InvoiceItemsTable",
	props: /*@__PURE__*/ kt({
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
		let r = st(e, "items"), i = e, a = (e) => sf(e.quantity, su(e.priceInput));
		function o(e) {
			let t = nu(e.quantity);
			t !== null && (e.quantity = iu(t));
		}
		function s(e) {
			ru(e.priceInput) !== null && (e.priceInput = ou(su(e.priceInput)));
		}
		k(() => i.smallBusiness, (e) => {
			if (e) for (let e of r.value) e.taxRateBp = 0;
		}, { immediate: !0 });
		let c = ct();
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
			d() === -1 && r.value.push(rf(i.smallBusiness ? 0 : i.defaultTaxRateBp ?? 1900));
		}
		function p(e) {
			let t = af(e, i.smallBusiness ?? !1), n = d();
			n === -1 ? r.value.push(t) : r.value.splice(n, 1, t);
		}
		function m(e) {
			r.value.splice(e, 1);
		}
		return (i, c) => (X(), B("div", null, [R("div", lf, [R("table", uf, [
			R("colgroup", null, [
				c[0] ||= R("col", null, null, -1),
				c[1] ||= R("col", { class: "rw-col-qty" }, null, -1),
				c[2] ||= R("col", { class: "rw-col-unit" }, null, -1),
				c[3] ||= R("col", { class: "rw-col-price" }, null, -1),
				c[4] ||= R("col", { class: "rw-col-tax" }, null, -1),
				c[5] ||= R("col", { class: "rw-col-sum" }, null, -1),
				e.readonly ? n("", !0) : (X(), B("col", df))
			]),
			R("thead", null, [R("tr", null, [
				R("th", null, J(t(w)("rechnungswerk", "Bezeichnung")), 1),
				R("th", ff, J(t(w)("rechnungswerk", "Menge")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Einheit")), 1),
				R("th", pf, J(t(w)("rechnungswerk", "Einzelpreis (€)")), 1),
				R("th", mf, J(t(w)("rechnungswerk", "USt")), 1),
				R("th", hf, J(t(w)("rechnungswerk", "Summe netto")), 1),
				e.readonly ? n("", !0) : (X(), B("th", gf))
			])]),
			R("tbody", null, [(X(!0), B(T, null, Y(r.value, (r, i) => (X(), B(T, { key: i }, [R("tr", _f, [
				R("td", null, [C(R("input", {
					"onUpdate:modelValue": (e) => r.name = e,
					class: "rw-input",
					type: "text",
					readonly: e.readonly,
					placeholder: t(w)("rechnungswerk", "Leistung")
				}, null, 8, vf), [[F, r.name]])]),
				R("td", yf, [C(R("input", {
					"onUpdate:modelValue": (e) => r.quantity = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => o(r)
				}, null, 40, bf), [[F, r.quantity]])]),
				R("td", null, [C(R("select", {
					"onUpdate:modelValue": (e) => r.unitCode = e,
					class: "rw-input",
					disabled: e.readonly
				}, [(X(!0), B(T, null, Y(t(Gl), (e) => (X(), B("option", {
					key: e,
					value: e
				}, J(t(w)("rechnungswerk", t(Kl)[e])), 9, Sf))), 128))], 8, xf), [[we, r.unitCode]])]),
				R("td", Cf, [C(R("input", {
					"onUpdate:modelValue": (e) => r.priceInput = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => s(r)
				}, null, 40, wf), [[F, r.priceInput]])]),
				R("td", Tf, [C(R("select", {
					"onUpdate:modelValue": (e) => r.taxRateBp = e,
					class: "rw-input",
					disabled: e.readonly || e.smallBusiness
				}, [(X(!0), B(T, null, Y(t(ql), (e) => (X(), B("option", {
					key: e,
					value: e
				}, J(t(uu)(e)), 9, Df))), 128))], 8, Ef), [[
					we,
					r.taxRateBp,
					void 0,
					{ number: !0 }
				]])]),
				R("td", Of, J(t(lu)(a(r))), 1),
				e.readonly ? n("", !0) : (X(), B("td", kf, [q(t(U), {
					variant: "tertiary",
					"aria-label": t(w)("rechnungswerk", "Position entfernen"),
					onClick: (e) => m(i)
				}, {
					icon: _(() => [q($u, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "onClick"])]))
			]), !e.readonly || r.description || r.unitLabel ? (X(), B("tr", Af, [R("td", { colspan: e.readonly ? 6 : 7 }, [R("div", Mf, [!e.readonly || r.unitLabel ? C((X(), B("input", {
				key: 0,
				"onUpdate:modelValue": (e) => r.unitLabel = e,
				class: "rw-input rw-input--sub rw-unit-label",
				type: "text",
				maxlength: "64",
				readonly: e.readonly,
				placeholder: t(w)("rechnungswerk", "eigene Einheit"),
				title: t(w)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.")
			}, null, 8, Nf)), [[F, r.unitLabel]]) : n("", !0), !e.readonly || r.description ? C((X(), B("input", {
				key: 1,
				"onUpdate:modelValue": (e) => r.description = e,
				class: "rw-input rw-input--sub rw-desc",
				type: "text",
				readonly: e.readonly,
				placeholder: t(w)("rechnungswerk", "Beschreibung (optional)")
			}, null, 8, Pf)), [[F, r.description]]) : n("", !0)])], 8, jf)])) : n("", !0)], 64))), 128)), r.value.length === 0 ? (X(), B("tr", Ff, [R("td", {
				colspan: e.readonly ? 6 : 7,
				class: "rw-muted empty-row"
			}, J(t(w)("rechnungswerk", "Noch keine Positionen.")), 9, If)])) : n("", !0)])
		])]), e.readonly ? n("", !0) : (X(), B("div", Lf, [q(t(U), { onClick: f }, {
			icon: _(() => [q(cc, { size: 20 })]),
			default: _(() => [G(" " + J(t(w)("rechnungswerk", "Position hinzufügen")), 1)]),
			_: 1
		}), e.products.length > 0 ? (X(), M(nf, {
			key: 0,
			products: e.products,
			onSelect: p
		}, null, 8, ["products"])) : (X(), M(t(U), {
			key: 1,
			variant: "tertiary",
			onClick: l
		}, {
			icon: _(() => [q(ro, { size: 20 })]),
			default: _(() => [G(" " + J(t(w)("rechnungswerk", "Noch keine Produkte angelegt")), 1)]),
			_: 1
		}))]))]));
	}
}), [["__scopeId", "data-v-76deaaa6"]]), zf = { class: "confirm-dialog" }, Bf = { class: "confirm-dialog__message" }, Vf = /*#__PURE__*/ Z(/* @__PURE__ */ H({
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
		return (n, r) => (X(), M(t(et), {
			open: e.open,
			name: e.name,
			"onUpdate:open": i
		}, {
			actions: _(() => [q(t(U), {
				variant: "secondary",
				onClick: r[0] ||= (e) => n.$emit("close")
			}, {
				default: _(() => [G(J(e.cancelLabel || t(w)("rechnungswerk", "Abbrechen")), 1)]),
				_: 1
			}), q(t(U), {
				variant: e.destructive ? "error" : "primary",
				onClick: r[1] ||= (e) => n.$emit("confirm")
			}, {
				default: _(() => [G(J(e.confirmLabel || t(w)("rechnungswerk", "Bestätigen")), 1)]),
				_: 1
			}, 8, ["variant"])]),
			default: _(() => [R("div", zf, [R("p", Bf, J(e.message), 1), P(n.$slots, "default", {}, void 0, !0)])]),
			_: 3
		}, 8, ["open", "name"]));
	}
}), [["__scopeId", "data-v-aa305e87"]]), Hf = { class: "send-modal" }, Uf = { class: "send-modal__hint" }, Wf = { class: "field" }, Gf = { class: "field" }, Kf = { class: "field" }, qf = { class: "actions" }, Jf = /*#__PURE__*/ Z(/* @__PURE__ */ H({
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
		let i = e, a = I(() => i.kind === "quote"), o = I(() => a.value ? w("rechnungswerk", "Angebot an Kunde senden") : w("rechnungswerk", "Rechnung an Kunde senden")), s = I(() => a.value ? w("rechnungswerk", "Das Angebot wird als PDF angehängt.") : w("rechnungswerk", "Die E-Rechnung wird als ZUGFeRD-PDF angehängt.")), c = r, l = v(null), u = ke({
			to: "",
			subject: "",
			body: ""
		}), d = I(() => /\S+@\S+\.\S+/.test(u.to.trim()) && u.subject.trim() !== "");
		k(() => i.open, (e) => {
			if (!e) return;
			let t = i.invoice;
			u.to = t?.recipientEmail ?? "", a.value ? u.subject = t?.number ? w("rechnungswerk", "Angebot {number}", { number: t.number }) : w("rechnungswerk", "Ihr Angebot") : u.subject = t?.number ? w("rechnungswerk", "Rechnung {number}", { number: t.number }) : w("rechnungswerk", "Ihre Rechnung"), u.body = i.defaultBody, Ye(() => l.value?.focus());
		}, { immediate: !0 });
		function f() {
			d.value && c("send", {
				to: u.to.trim(),
				subject: u.subject.trim(),
				body: u.body
			});
		}
		return (r, i) => e.open ? (X(), M(t(Pe), {
			key: 0,
			name: o.value,
			onKeydown: i[4] ||= D((e) => t(Ts)(e, () => r.$emit("close")), ["esc"]),
			onClose: i[5] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [R("div", Hf, [
				R("h2", null, J(o.value), 1),
				R("p", Uf, J(s.value), 1),
				R("label", Wf, [R("span", null, J(t(w)("rechnungswerk", "Empfänger-E-Mail")) + " *", 1), C(R("input", {
					ref_key: "toInput",
					ref: l,
					"onUpdate:modelValue": i[0] ||= (e) => u.to = e,
					class: "input",
					type: "email"
				}, null, 512), [[F, u.to]])]),
				R("label", Gf, [R("span", null, J(t(w)("rechnungswerk", "Betreff")) + " *", 1), C(R("input", {
					"onUpdate:modelValue": i[1] ||= (e) => u.subject = e,
					class: "input",
					type: "text"
				}, null, 512), [[F, u.subject]])]),
				R("label", Kf, [R("span", null, J(t(w)("rechnungswerk", "Nachricht")), 1), C(R("textarea", {
					"onUpdate:modelValue": i[2] ||= (e) => u.body = e,
					class: "input",
					rows: "6"
				}, null, 512), [[F, u.body]])]),
				R("div", qf, [q(t(U), { onClick: i[3] ||= (e) => r.$emit("close") }, {
					default: _(() => [G(J(t(w)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), q(t(U), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					icon: _(() => [q(ad, { size: 20 })]),
					default: _(() => [G(" " + J(t(w)("rechnungswerk", "Senden")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-89fbe141"]]), Yf = (e) => ys(`/audit/documents/${e}`), Xf = (e, t, n) => ys(`/audit?number=${encodeURIComponent(e)}&limit=${t}&offset=${n}`);
// src/utils/auditLabels.ts
function Zf(e) {
	switch (e) {
		case "create": return w("rechnungswerk", "Angelegt");
		case "update": return w("rechnungswerk", "Geändert");
		case "delete": return w("rechnungswerk", "Gelöscht");
		case "commit": return w("rechnungswerk", "Festgeschrieben");
		case "send": return w("rechnungswerk", "Versendet");
		case "pay": return w("rechnungswerk", "Als bezahlt markiert");
		case "unpay": return w("rechnungswerk", "Als unbezahlt markiert");
		case "cancel": return w("rechnungswerk", "Storniert");
		case "cancel_document": return w("rechnungswerk", "Als Storno angelegt");
		case "duplicate": return w("rechnungswerk", "Als Kopie angelegt");
		case "revise": return w("rechnungswerk", "Als Überarbeitung angelegt");
		case "accept": return w("rechnungswerk", "Als angenommen markiert");
		case "reject": return w("rechnungswerk", "Als abgelehnt markiert");
		case "convert": return w("rechnungswerk", "In Rechnung übernommen");
		case "convert_document": return w("rechnungswerk", "Aus Angebot angelegt");
		case "supersede": return w("rechnungswerk", "Durch Überarbeitung ersetzt");
		case "datev_send": return w("rechnungswerk", "An DATEV gesendet");
		case "datev_send_failed": return w("rechnungswerk", "DATEV-Versand fehlgeschlagen");
		case "datev_confirm": return w("rechnungswerk", "Von DATEV bestätigt");
		case "datev_unknown": return w("rechnungswerk", "DATEV-Antwort prüfen");
		default: return e;
	}
}
function Qf(e) {
	let t = e.userDisplayName ?? w("rechnungswerk", "System");
	if (e.apiKeyId === null) return t;
	let n = e.apiKeyName ?? `#${e.apiKeyId}`;
	return w("rechnungswerk", "{person} über API-Schlüssel „{key}“", {
		person: t,
		key: n
	}, void 0, { escape: !1 });
}
function $f(e) {
	return e.documentNumber ? e.documentNumber : e.documentType === "quote" ? w("rechnungswerk", "Angebotsentwurf {id}", { id: e.documentId }) : w("rechnungswerk", "Rechnungsentwurf {id}", { id: e.documentId });
}
function ep(e) {
	return (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString(pe(), {
		dateStyle: "short",
		timeStyle: "short"
	});
}
// src/components/AuditTrail.vue?vue&type=script&setup=true&lang.ts
var tp = { class: "rw-audit-trail" }, np = {
	key: 1,
	class: "rw-hint"
}, rp = {
	key: 2,
	class: "rw-audit-trail__list"
}, ip = { class: "rw-audit-trail__time" }, ap = { class: "rw-audit-trail__action" }, op = { class: "rw-muted" }, sp = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "AuditTrail",
	props: {
		documentId: {},
		refreshKey: {}
	},
	setup(e) {
		let n = e, r = v([]), i = v(!1), a = v(""), o = 0;
		async function s() {
			let e = ++o;
			a.value = "";
			try {
				let t = await Yf(n.documentId);
				e === o && (r.value = t);
			} catch {
				e === o && (a.value = w("rechnungswerk", "Der Verlauf konnte nicht geladen werden."));
			} finally {
				e === o && (i.value = !0);
			}
		}
		return k(() => [n.documentId, n.refreshKey], s, { immediate: !0 }), (e, n) => (X(), B("div", tp, [a.value ? (X(), M(t($), {
			key: 0,
			type: "error",
			text: a.value
		}, null, 8, ["text"])) : i.value && r.value.length === 0 ? (X(), B("p", np, J(t(w)("rechnungswerk", "Noch keine Einträge. Vorgänge vor Einführung des Protokolls sind nicht erfasst.")), 1)) : (X(), B("ul", rp, [(X(!0), B(T, null, Y(r.value, (e) => (X(), B("li", {
			key: e.id,
			class: "rw-audit-trail__item"
		}, [
			R("span", ip, J(t(ep)(e.createdAt)), 1),
			R("span", ap, J(t(Zf)(e.action)), 1),
			R("span", op, J(t(Qf)(e)), 1)
		]))), 128))]))]));
	}
}), [["__scopeId", "data-v-080f49f3"]]), cp = () => ys("/quotes"), lp = (e) => ys(`/quotes/${e}`), up = (e) => Q("/quotes", { data: e }), dp = (e, t) => bs(`/quotes/${e}`, { data: t }), fp = (e) => Ss(`/quotes/${e}`), pp = (e) => Q(`/quotes/${e}/commit`, {}), mp = (e) => Q(`/quotes/${e}/accept`, {}), hp = (e) => Q(`/quotes/${e}/reject`, {}), gp = (e) => Q(`/quotes/${e}/convert`, {}), _p = (e) => Q(`/quotes/${e}/revise`, {}), vp = (e) => _s(`/quotes/${e}/pdf`), yp = (e) => _s(`/quotes/${e}/preview`) + "?t=" + Date.now(), bp = (e) => {
	let t = document.createElement("a");
	t.href = vp(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, xp = (e, t) => Q(`/quotes/${e}/send`, t), Sp = bn("quote", () => {
	let e = v([]), t = v(!1);
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
}), Cp = () => ys("/products"), wp = (e) => Q("/products", { data: e }), Tp = (e, t) => bs(`/products/${e}`, { data: t }), Ep = (e) => Ss(`/products/${e}`), Dp = bn("product", () => {
	let e = v([]), t = v(!1);
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
}), Op = () => ys("/text-snippets"), kp = (e) => Q("/text-snippets", { data: e }), Ap = (e, t) => bs(`/text-snippets/${e}`, { data: t }), jp = (e) => Ss(`/text-snippets/${e}`);
// src/stores/textSnippetStore.ts
function Mp(e) {
	e.sort((e, t) => e.docType.localeCompare(t.docType) || e.slot.localeCompare(t.slot) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
}
var Np = bn("textSnippet", () => {
	let e = v([]), t = v(!1), n = v(!1);
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
}), Pp = () => ys("/me/contact"), Fp = (e) => xs("/me/contact", { data: e }), Ip = { class: "rw-view rw-view--narrow" }, Lp = { class: "rw-editor-head" }, Rp = {
	key: 0,
	class: "rw-status-group"
}, zp = { class: "rw-status-tag" }, Bp = {
	key: 0,
	class: "rw-pill"
}, Vp = {
	key: 1,
	class: "rw-pill"
}, Hp = ["title"], Up = { class: "rw-section" }, Wp = { class: "rw-form-row" }, Gp = { class: "rw-field invoice-no" }, Kp = ["value"], qp = { class: "rw-field" }, Jp = ["readonly"], Yp = { class: "rw-field" }, Xp = ["readonly"], Zp = { class: "rw-hint" }, Qp = ["open"], $p = { class: "rw-form-row" }, em = { class: "rw-field" }, tm = ["readonly"], nm = { class: "rw-field" }, rm = ["readonly"], im = {
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
], Ph = { class: "rw-hint" }, Fh = {
	key: 7,
	class: "rw-section"
}, Ih = { class: "rw-action-bar" }, Lh = ["src", "title"], Rh = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "InvoiceEditorView",
	props: { id: {} },
	setup(e) {
		let r = e, i = ue(), a = ct(), o = Fl(), s = Sp(), c = Dp(), l = Wl(), u = Np(), d = I(() => typeof i.name == "string" && i.name.startsWith("quote")), f = I(() => d.value ? s : o), p = I(() => d.value ? "quote" : "invoice"), h = I(() => u.forSlot(p.value, "opening")), g = I(() => u.forSlot(p.value, "closing"));
		function ee(e) {
			j.greeting = e.content ?? "";
		}
		function y(e) {
			j.extraText = e.content ?? "";
		}
		let b = I(() => d.value ? "quotes" : "invoices"), x = I(() => d.value ? "quote-detail" : "invoice-detail"), S = v(null), ne = v(0);
		k(S, () => {
			ne.value++;
		});
		let re = v([rf()]), E = v([]), ie = v(""), D = v(""), O = v(!1), ae = v(!1), oe = v(!1), se = v(!1), ce = v(""), A = v(null), le = v(!1), fe = null, pe = () => ({
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
		}), j = ke(pe()), me = [
			"reverse_charge",
			"intra_community",
			"export"
		], he = I(() => (l.settings?.smallBusiness ?? !1) || me.includes(j.specialTaxCase)), ge = I(() => {
			let e = Number.parseInt(String(j.paymentTermDays), 10);
			if (Number.isNaN(e)) return "";
			let t = (e) => /* @__PURE__ */ new Date(`${e}T12:00:00`);
			if (S.value?.dueDate) return t(S.value.dueDate).toLocaleDateString();
			let n = S.value?.issueDate ? t(S.value.issueDate) : /* @__PURE__ */ new Date();
			return n.setDate(n.getDate() + e), n.toLocaleDateString();
		}), N = I(() => S.value !== null && S.value.status !== "draft"), _e = {
			draft: Ec,
			committed: Oo,
			cancelled: Mc
		}, P = {
			pending: Wc,
			confirmed: Rc,
			unknown: Xc,
			failed: Mc
		}, ve = (e) => _e[e] ?? Ec, ye = (e) => P[e] ?? Xc, xe = I(() => S.value ? d.value && S.value.quoteStatus ? w("rechnungswerk", $l[S.value.quoteStatus] ?? S.value.status) : w("rechnungswerk", Zl[S.value.status]) : ""), Se = I(() => S.value ? w("rechnungswerk", Ql[S.value.invoiceType]) : ""), Ce = I(() => {
			let e = {
				pending: w("rechnungswerk", "DATEV: gesendet"),
				confirmed: w("rechnungswerk", "DATEV: bestätigt"),
				failed: w("rechnungswerk", "DATEV: abgelehnt"),
				unknown: w("rechnungswerk", "DATEV: Antwort prüfen")
			}, t = S.value?.datevStatus;
			return t ? e[t] ?? "" : "";
		}), Te = I(() => S.value ? S.value.relatedNumber ? w("rechnungswerk", "{type} zu Rechnung {number}", {
			type: Se.value,
			number: S.value.relatedNumber
		}) : Se.value : ""), Ee = I(() => {
			let e = l.settings;
			return !d.value && !!e && !e.vatId?.trim() && !e.registerNumber?.trim();
		}), De = I(() => {
			if (d.value) return w("rechnungswerk", "Das Angebot erhält seine endgültige Nummer und ist danach unveränderbar.");
			let e = w("rechnungswerk", "Die Rechnung erhält ihre endgültige Nummer und kann danach nur noch storniert werden."), t = l.settings;
			return t?.datevAutoSend && t.datevUploadMail ? e + " " + w("rechnungswerk", "Sie wird automatisch an DATEV übergeben.") : e;
		}), Oe = I(() => {
			let e = (S.value?.greeting ?? u.defaultContent(p.value, "opening")).trim(), t = (S.value?.extraText ?? u.defaultContent(p.value, "closing")).trim(), n = d.value ? w("rechnungswerk", "anbei erhalten Sie unser Angebot als PDF.") : w("rechnungswerk", "anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).");
			return [e === "" ? n : e, t].filter((e) => e !== "").join("\n\n");
		}), Ae = I(() => S.value ? S.value.number ?? w("rechnungswerk", "Entwurf") : d.value ? w("rechnungswerk", "Neues Angebot") : w("rechnungswerk", "Neue Rechnung")), je = I(() => cf(re.value.map((e) => ({
			taxRateBp: e.taxRateBp,
			lineTotalCents: sf(e.quantity, su(e.priceInput))
		})), he.value)), Me = 0;
		Fe(async () => {
			let e = ++Me;
			try {
				if (await Promise.all([
					c.fetchAll(),
					l.fetch(),
					u.ensureLoaded()
				]), e !== Me) return;
				r.id ? await Pe(Number(r.id), e) : await L(e);
			} catch (e) {
				mt(e, w("rechnungswerk", "Laden fehlgeschlagen"));
			}
		}), k(() => [i.name, r.id], async ([, e]) => {
			let t = ++Me;
			try {
				if (!e) Ne(), await L(t);
				else {
					let n = S.value !== null && S.value.invoiceType === "quote" !== d.value;
					(S.value?.id !== Number(e) || n) && (Ne(), await Pe(Number(e), t));
				}
			} catch (e) {
				mt(e, w("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function Ne() {
			S.value = null, re.value = [rf()], E.value = [], ie.value = "", D.value = "", oe.value = !1, se.value = !1, ce.value = "", A.value = null, le.value = !1, Object.assign(j, pe()), fe = null;
		}
		async function L(e = Me) {
			let t = l.settings;
			j.greeting = u.defaultContent(p.value, "opening"), j.extraText = u.defaultContent(p.value, "closing"), j.paymentTermDays = d.value ? "" : t?.defaultPaymentTermDays ?? "";
			let n = {
				person: "",
				phone: "",
				email: ""
			};
			try {
				n = await Pp();
			} catch {}
			e === Me && (j.sellerContactPerson = n.person || (t?.contactPerson ?? ""), j.sellerContactPhone = n.phone || (t?.contactPhone ?? ""), j.sellerContactEmail = n.email || (t?.contactEmail ?? ""), He());
		}
		async function Pe(e, t = Me) {
			let n = await f.value.get(e);
			t === Me && (S.value = n, j.customerId = n.customerId ?? null, j.recipientName = n.recipientName ?? "", j.recipientEmail = n.recipientEmail ?? "", j.recipientAddressAddition = n.recipientAddressAddition ?? "", j.recipientAddress = n.recipientAddress ?? "", j.recipientPostalCode = n.recipientPostalCode ?? "", j.recipientCity = n.recipientCity ?? "", j.recipientCountry = n.recipientCountry ?? "DE", j.recipientVatId = n.recipientVatId ?? "", j.recipientContactId = n.recipientContactId ?? "", j.recipientContactPerson = n.recipientContactPerson ?? "", j.recipientPhone = n.recipientPhone ?? "", j.sellerContactPerson = n.sellerContactPerson ?? "", j.sellerContactPhone = n.sellerContactPhone ?? "", j.sellerContactEmail = n.sellerContactEmail ?? "", j.performancePeriodStart = n.performancePeriodStart ?? n.performanceDate ?? "", j.performancePeriodEnd = n.performancePeriodEnd ?? "", j.referenceNumber = n.referenceNumber ?? "", j.orderNumber = n.orderNumber ?? "", j.buyerReference = n.buyerReference ?? "", j.contractNumber = n.contractNumber ?? "", j.projectReference = n.projectReference ?? "", le.value = [
				j.referenceNumber,
				j.orderNumber,
				d.value ? "" : j.buyerReference,
				j.contractNumber,
				j.projectReference
			].some((e) => e.trim() !== ""), E.value = [...n.notes ?? []], j.specialTaxCase = n.specialTaxCase ?? "", j.greeting = n.greeting ?? "", j.extraText = n.extraText ?? "", j.paymentTermDays = n.paymentTermDays ?? "", j.discountTerms = n.discountTerms ?? "", j.validUntil = n.validUntil ?? "", j.offerFreeform = n.offerFreeform ?? !1, re.value = n.items.length > 0 ? n.items.map(of) : [rf()], He());
		}
		function Ie() {
			E.value.push("");
		}
		function Le(e) {
			E.value.splice(e, 1);
		}
		function Re(e) {
			j.customerId = e.id, j.recipientName = e.name, j.recipientContactId = "", j.recipientEmail = e.email ?? "", j.recipientAddressAddition = e.addressAddition ?? "", j.recipientAddress = e.address ?? "", j.recipientPostalCode = e.postalCode ?? "", j.recipientCity = e.city ?? "", j.recipientCountry = e.country ?? "DE", j.recipientVatId = e.vatId ?? "", j.recipientContactPerson = e.contactPerson ?? "", j.recipientPhone = e.phone ?? "", e.defaultPaymentTermDays != null && (j.paymentTermDays = e.defaultPaymentTermDays);
		}
		function ze(e) {
			j.customerId = null, j.recipientName = e.name, j.recipientEmail = e.email, e.phone && (j.recipientPhone = e.phone), j.recipientAddressAddition = "", j.recipientAddress = e.address, j.recipientPostalCode = e.postalCode, j.recipientCity = e.city, e.country && (j.recipientCountry = e.country);
		}
		function Be() {
			let e = j.performancePeriodStart, t = j.performancePeriodEnd, n = e && t ? {
				performanceDate: "",
				performancePeriodStart: e,
				performancePeriodEnd: t
			} : {
				performanceDate: e || t || "",
				performancePeriodStart: "",
				performancePeriodEnd: ""
			}, r = {
				...j,
				...n,
				paymentTermDays: j.paymentTermDays === "" ? null : Number(j.paymentTermDays),
				notes: E.value.map((e) => e.trim()).filter((e) => e !== ""),
				items: re.value.filter((e) => e.name.trim() !== "").map((e) => ({
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
			return d.value ? (r.validUntil = j.validUntil === "" ? null : j.validUntil, r.offerFreeform = j.offerFreeform, r.paymentTermDays = null, r.discountTerms = null) : (delete r.validUntil, delete r.offerFreeform), r;
		}
		let Ve = null;
		function He(e = JSON.stringify(Be())) {
			fe = e;
		}
		function Ue() {
			return !N.value && fe !== null && JSON.stringify(Be()) !== fe;
		}
		function We(e) {
			return !Ue() || (Ve = e.fullPath, A.value = "leave", !1);
		}
		function Ge(e) {
			A.value = null;
			let t = Ve;
			Ve = null, e && t !== null && (fe = null, a.push(t));
		}
		yr(We), br(We);
		function z(e) {
			Ue() && e.preventDefault();
		}
		Fe(() => window.addEventListener("beforeunload", z)), jt(() => window.removeEventListener("beforeunload", z));
		async function Ke() {
			ie.value = "", O.value = !0;
			try {
				let e = Be(), t = !S.value, n = S.value ? await f.value.update(S.value.id, e) : await f.value.create(e);
				return S.value = n, He(JSON.stringify(e)), t && a.replace({
					name: x.value,
					params: { id: String(n.id) }
				}), n;
			} catch (e) {
				return mt(e, w("rechnungswerk", "Speichern fehlgeschlagen")), null;
			} finally {
				O.value = !1;
			}
		}
		async function qe() {
			let e = await Ke();
			e && (ce.value = d.value ? yp(e.id) : Ml(e.id), se.value = !0);
		}
		function Je(e) {
			e || (se.value = !1, ce.value = "");
		}
		function Ye() {
			A.value = "finalize";
		}
		function Xe() {
			A.value = "delete";
		}
		function Ze() {
			A.value = "cancel";
		}
		function Qe() {
			A.value = "convert";
		}
		function $e() {
			A.value = "revise";
		}
		let tt = I(() => d.value && S.value?.status === "committed" && !["converted", "superseded"].includes(S.value?.quoteStatus ?? "")), nt = I(() => d.value && S.value?.status === "committed" && [
			"open",
			"expired",
			"accepted"
		].includes(S.value?.quoteStatus ?? "")), H = I(() => d.value && S.value?.status === "committed" && ["open", "expired"].includes(S.value?.quoteStatus ?? ""));
		function rt() {
			S.value && (d.value ? bp(S.value.id) : Nl(S.value.id));
		}
		async function it() {
			A.value = null;
			let e = await Ke();
			if (e) {
				O.value = !0;
				try {
					let t = await f.value.commit(e.id);
					if (S.value = t, D.value = "", d.value) D.value = w("rechnungswerk", "Angebot festgeschrieben.");
					else {
						let e = t.datevMailSent;
						e === !0 ? D.value = w("rechnungswerk", "Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.") : e === null && (ie.value = w("rechnungswerk", "Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
					}
				} catch (e) {
					mt(e, w("rechnungswerk", "Festschreiben fehlgeschlagen"));
				} finally {
					O.value = !1;
				}
			}
		}
		async function at() {
			if (S.value) {
				O.value = !0, ie.value = "";
				try {
					S.value = await s.accept(S.value.id), D.value = w("rechnungswerk", "Angebot als angenommen markiert.");
				} catch (e) {
					mt(e, w("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					O.value = !1;
				}
			}
		}
		async function ot() {
			if (S.value) {
				O.value = !0, ie.value = "";
				try {
					S.value = await s.reject(S.value.id), D.value = w("rechnungswerk", "Angebot als abgelehnt markiert.");
				} catch (e) {
					mt(e, w("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					O.value = !1;
				}
			}
		}
		async function st() {
			if (A.value = null, S.value) {
				O.value = !0, ie.value = "";
				try {
					let e = await s.convert(S.value.id);
					a.push({
						name: "invoice-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					mt(e, w("rechnungswerk", "Übernahme fehlgeschlagen"));
				} finally {
					O.value = !1;
				}
			}
		}
		async function lt() {
			if (A.value = null, S.value) {
				O.value = !0, ie.value = "";
				try {
					let e = await s.revise(S.value.id);
					a.push({
						name: "quote-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					mt(e, w("rechnungswerk", "Revidieren fehlgeschlagen"));
				} finally {
					O.value = !1;
				}
			}
		}
		async function ut(e) {
			if (S.value) {
				ae.value = !0, ie.value = "";
				try {
					d.value ? (await xp(S.value.id, e), ne.value++, oe.value = !1, D.value = w("rechnungswerk", "Angebot an {to} gesendet.", { to: e.to })) : (await Pl(S.value.id, e), ne.value++, oe.value = !1, D.value = w("rechnungswerk", "Rechnung an {to} gesendet.", { to: e.to }));
				} catch (e) {
					mt(e, w("rechnungswerk", "Versand fehlgeschlagen"));
				} finally {
					ae.value = !1;
				}
			}
		}
		async function ft() {
			if (A.value = null, !S.value) pt();
			else {
				O.value = !0;
				try {
					await f.value.remove(S.value.id), fe = null, pt();
				} catch (e) {
					mt(e, w("rechnungswerk", "Löschen fehlgeschlagen"));
				} finally {
					O.value = !1;
				}
			}
		}
		async function W() {
			if (A.value = null, S.value) {
				O.value = !0;
				try {
					let e = await o.cancel(S.value.id), t = e.datevMailSent;
					await Pe(e.id), D.value = "", t === !0 ? D.value = w("rechnungswerk", "Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.") : t === null && (ie.value = w("rechnungswerk", "Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
				} catch (e) {
					mt(e, w("rechnungswerk", "Stornieren fehlgeschlagen"));
				} finally {
					O.value = !1;
				}
			}
		}
		function pt() {
			a.push({ name: b.value });
		}
		function mt(e, t) {
			ie.value = e.message ?? t, console.error("[rechnungswerk] editor:", e);
		}
		return (e, r) => {
			let i = Pt("tooltip");
			return X(), B("div", Ip, [
				R("div", Lp, [q(t(_t), null, {
					default: _(() => [q(t(dt), {
						name: d.value ? t(w)("rechnungswerk", "Angebote") : t(w)("rechnungswerk", "Rechnungen"),
						to: { name: b.value }
					}, null, 8, ["name", "to"]), q(t(dt), { name: Ae.value }, null, 8, ["name"])]),
					_: 1
				}), S.value ? (X(), B("span", Rp, [
					R("span", zp, [(X(), M(be(ve(S.value.status)), {
						size: 18,
						class: V(["rw-sicon", `rw-sicon--${S.value.status}`])
					}, null, 8, ["class"])), G(" " + J(xe.value), 1)]),
					!d.value && S.value.invoiceType !== "invoice" ? C((X(), B("span", Bp, [G(J(Se.value), 1)])), [[i, Te.value]]) : n("", !0),
					d.value && S.value.relatedQuoteNumber ? (X(), B("span", Vp, J(t(w)("rechnungswerk", "Revision von {number}", { number: S.value.relatedQuoteNumber })), 1)) : n("", !0),
					S.value.datevStatus && Ce.value ? (X(), B("span", {
						key: 2,
						class: "rw-status-tag",
						title: t(w)("rechnungswerk", "DATEV-Übergabe")
					}, [(X(), M(be(ye(S.value.datevStatus)), {
						size: 18,
						class: V(["rw-sicon", `rw-sicon--datev-${S.value.datevStatus}`])
					}, null, 8, ["class"])), G(" " + J(Ce.value), 1)], 8, Hp)) : n("", !0)
				])) : n("", !0)]),
				ie.value ? (X(), M(t($), {
					key: 0,
					type: "error",
					text: ie.value
				}, null, 8, ["text"])) : n("", !0),
				D.value ? (X(), M(t($), {
					key: 1,
					type: "success",
					text: D.value
				}, null, 8, ["text"])) : n("", !0),
				N.value ? (X(), M(t($), {
					key: 2,
					type: "info",
					text: d.value ? t(w)("rechnungswerk", "Dieses Angebot ist festgeschrieben und kann nicht mehr geändert werden.") : t(w)("rechnungswerk", "Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.")
				}, null, 8, ["text"])) : n("", !0),
				!d.value && S.value?.documentBackfilled ? (X(), M(t($), {
					key: 3,
					type: "info",
					text: t(w)("rechnungswerk", "Dieser Beleg wurde nicht beim Festschreiben abgelegt, sondern später aus dem Datensatz erzeugt. Beträge, Positionen und Steuerausweis stimmen; Firmendaten und Layout entsprechen dem heutigen Stand, nicht dem von damals.")
				}, null, 8, ["text"])) : n("", !0),
				R("section", Up, [
					R("h3", null, J(d.value ? t(w)("rechnungswerk", "Angebotsdaten") : t(w)("rechnungswerk", "Rechnungsdaten")), 1),
					R("div", Wp, [
						R("label", Gp, [R("span", null, J(d.value ? t(w)("rechnungswerk", "Angebotsnummer") : t(w)("rechnungswerk", "Rechnungsnummer")), 1), R("input", {
							class: "rw-input",
							type: "text",
							readonly: "",
							value: S.value?.number ?? t(w)("rechnungswerk", "(wird vergeben)")
						}, null, 8, Kp)]),
						R("label", qp, [R("span", null, J(d.value ? t(w)("rechnungswerk", "Geplanter Leistungszeitraum (optional)") : t(w)("rechnungswerk", "Leistungsdatum /-zeitraum")), 1), C(R("input", {
							"onUpdate:modelValue": r[0] ||= (e) => j.performancePeriodStart = e,
							class: "rw-input",
							type: "date",
							readonly: N.value
						}, null, 8, Jp), [[F, j.performancePeriodStart]])]),
						R("label", Yp, [R("span", null, J(t(w)("rechnungswerk", "bis (optional)")), 1), C(R("input", {
							"onUpdate:modelValue": r[1] ||= (e) => j.performancePeriodEnd = e,
							class: "rw-input",
							type: "date",
							readonly: N.value
						}, null, 8, Xp), [[F, j.performancePeriodEnd]])])
					]),
					R("p", Zp, J(d.value ? t(w)("rechnungswerk", "Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.") : t(w)("rechnungswerk", "Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.")), 1),
					R("details", {
						class: "more",
						open: le.value,
						onToggle: r[7] ||= (e) => le.value = e.target.open
					}, [
						R("summary", null, J(d.value ? t(w)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)") : t(w)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)")), 1),
						R("div", $p, [
							R("label", em, [R("span", null, J(t(w)("rechnungswerk", "Referenznummer")), 1), C(R("input", {
								"onUpdate:modelValue": r[2] ||= (e) => j.referenceNumber = e,
								class: "rw-input",
								type: "text",
								readonly: N.value
							}, null, 8, tm), [[F, j.referenceNumber]])]),
							R("label", nm, [R("span", null, J(t(w)("rechnungswerk", "Bestellnummer")), 1), C(R("input", {
								"onUpdate:modelValue": r[3] ||= (e) => j.orderNumber = e,
								class: "rw-input",
								type: "text",
								readonly: N.value
							}, null, 8, rm), [[F, j.orderNumber]])]),
							d.value ? (X(), B("span", om)) : (X(), B("label", im, [R("span", null, J(t(w)("rechnungswerk", "Käuferreferenz / Leitweg-ID (BT-10)")), 1), C(R("input", {
								"onUpdate:modelValue": r[4] ||= (e) => j.buyerReference = e,
								class: "rw-input",
								type: "text",
								readonly: N.value,
								placeholder: t(w)("rechnungswerk", "nur für öffentliche Auftraggeber")
							}, null, 8, am), [[F, j.buyerReference]])]))
						]),
						R("div", sm, [
							R("label", cm, [R("span", null, J(t(w)("rechnungswerk", "Vertragsnummer (BT-12)")), 1), C(R("input", {
								"onUpdate:modelValue": r[5] ||= (e) => j.contractNumber = e,
								class: "rw-input",
								type: "text",
								readonly: N.value
							}, null, 8, lm), [[F, j.contractNumber]])]),
							R("label", um, [R("span", null, J(t(w)("rechnungswerk", "Objekt-/Projektkennung (BT-18)")), 1), C(R("input", {
								"onUpdate:modelValue": r[6] ||= (e) => j.projectReference = e,
								class: "rw-input",
								type: "text",
								readonly: N.value
							}, null, 8, dm), [[F, j.projectReference]])]),
							r[39] ||= R("span", {
								class: "rw-field",
								"aria-hidden": "true"
							}, null, -1)
						])
					], 40, Qp)
				]),
				R("section", fm, [
					R("h3", null, J(t(w)("rechnungswerk", "Empfänger")), 1),
					N.value ? n("", !0) : (X(), B("div", pm, [R("label", mm, [
						R("span", null, J(t(w)("rechnungswerk", "Kunde übernehmen")), 1),
						q(Jd, { onSelect: Re }),
						R("span", hm, J(t(w)("rechnungswerk", "Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.")), 1)
					])])),
					R("div", gm, [R("label", _m, [R("span", null, J(t(w)("rechnungswerk", "Name")), 1), N.value ? (X(), B("input", {
						key: 1,
						class: "rw-input",
						type: "text",
						readonly: "",
						value: j.recipientName
					}, null, 8, vm)) : (X(), M(jd, {
						key: 0,
						modelValue: j.recipientName,
						"onUpdate:modelValue": r[8] ||= (e) => j.recipientName = e,
						onSelect: ze
					}, null, 8, ["modelValue"]))]), R("label", ym, [R("span", null, J(t(w)("rechnungswerk", "E-Mail")), 1), C(R("input", {
						"onUpdate:modelValue": r[9] ||= (e) => j.recipientEmail = e,
						class: "rw-input",
						type: "email",
						readonly: N.value
					}, null, 8, bm), [[F, j.recipientEmail]])])]),
					R("div", xm, [R("label", Sm, [
						R("span", null, J(t(w)("rechnungswerk", "Adresszusatz")), 1),
						C(R("input", {
							"onUpdate:modelValue": r[10] ||= (e) => j.recipientAddressAddition = e,
							class: "rw-input",
							type: "text",
							readonly: N.value
						}, null, 8, Cm), [[F, j.recipientAddressAddition]]),
						R("span", wm, J(t(w)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					])]),
					R("div", Tm, [
						R("label", Em, [R("span", null, J(t(w)("rechnungswerk", "Straße")), 1), C(R("input", {
							"onUpdate:modelValue": r[11] ||= (e) => j.recipientAddress = e,
							class: "rw-input",
							type: "text",
							readonly: N.value
						}, null, 8, Dm), [[F, j.recipientAddress]])]),
						R("label", Om, [R("span", null, J(t(w)("rechnungswerk", "PLZ")), 1), C(R("input", {
							"onUpdate:modelValue": r[12] ||= (e) => j.recipientPostalCode = e,
							class: "rw-input",
							type: "text",
							readonly: N.value
						}, null, 8, km), [[F, j.recipientPostalCode]])]),
						R("label", Am, [R("span", null, J(t(w)("rechnungswerk", "Ort")), 1), C(R("input", {
							"onUpdate:modelValue": r[13] ||= (e) => j.recipientCity = e,
							class: "rw-input",
							type: "text",
							readonly: N.value
						}, null, 8, jm), [[F, j.recipientCity]])]),
						R("label", Mm, [R("span", null, J(t(w)("rechnungswerk", "Land")), 1), q(Ld, {
							modelValue: j.recipientCountry,
							"onUpdate:modelValue": r[14] ||= (e) => j.recipientCountry = e,
							disabled: N.value
						}, null, 8, ["modelValue", "disabled"])])
					]),
					R("div", Nm, [
						R("label", Pm, [R("span", null, J(t(w)("rechnungswerk", "USt-IdNr. (optional)")), 1), C(R("input", {
							"onUpdate:modelValue": r[15] ||= (e) => j.recipientVatId = e,
							class: "rw-input",
							type: "text",
							readonly: N.value
						}, null, 8, Fm), [[F, j.recipientVatId]])]),
						R("label", Im, [R("span", null, J(t(w)("rechnungswerk", "Ansprechpartner (optional)")), 1), C(R("input", {
							"onUpdate:modelValue": r[16] ||= (e) => j.recipientContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: N.value
						}, null, 8, Lm), [[F, j.recipientContactPerson]])]),
						R("label", Rm, [R("span", null, J(t(w)("rechnungswerk", "Telefon (optional)")), 1), C(R("input", {
							"onUpdate:modelValue": r[17] ||= (e) => j.recipientPhone = e,
							class: "rw-input",
							type: "text",
							readonly: N.value
						}, null, 8, zm), [[F, j.recipientPhone]])])
					])
				]),
				R("section", Bm, [
					R("h3", null, J(d.value ? t(w)("rechnungswerk", "Ansprechpartner (für dieses Angebot)") : t(w)("rechnungswerk", "Ansprechpartner (für diese Rechnung)")), 1),
					R("div", Vm, [
						R("label", Hm, [R("span", null, J(t(w)("rechnungswerk", "Name")), 1), C(R("input", {
							"onUpdate:modelValue": r[18] ||= (e) => j.sellerContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: N.value
						}, null, 8, Um), [[F, j.sellerContactPerson]])]),
						R("label", Wm, [R("span", null, J(t(w)("rechnungswerk", "Telefon")), 1), C(R("input", {
							"onUpdate:modelValue": r[19] ||= (e) => j.sellerContactPhone = e,
							class: "rw-input",
							type: "text",
							readonly: N.value
						}, null, 8, Gm), [[F, j.sellerContactPhone]])]),
						R("label", Km, [R("span", null, J(t(w)("rechnungswerk", "E-Mail")), 1), C(R("input", {
							"onUpdate:modelValue": r[20] ||= (e) => j.sellerContactEmail = e,
							class: "rw-input",
							type: "email",
							readonly: N.value
						}, null, 8, qm), [[F, j.sellerContactEmail]])])
					]),
					R("p", Jm, J(d.value ? t(w)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.") : t(w)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.")), 1)
				]),
				R("section", Ym, [R("div", Xm, [R("h3", null, J(t(w)("rechnungswerk", "Anrede & Einleitung")), 1), !N.value && h.value.length > 0 ? (X(), M(t(m), {
					key: 0,
					menuName: t(w)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: _(() => [q(lo, { size: 18 })]),
					default: _(() => [(X(!0), B(T, null, Y(h.value, (e) => (X(), M(t(de), {
						key: e.id,
						onClick: (t) => ee(e)
					}, {
						default: _(() => [G(J(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : n("", !0)]), R("label", Zm, [R("span", null, J(t(w)("rechnungswerk", "Anrede & Einleitung")), 1), C(R("textarea", {
					"onUpdate:modelValue": r[21] ||= (e) => j.greeting = e,
					class: "rw-input",
					rows: "3",
					readonly: N.value,
					placeholder: t(w)("rechnungswerk", "Anrede und Einleitung – Vorgabe aus den Textbausteinen")
				}, null, 8, Qm), [[F, j.greeting]])])]),
				R("section", $m, [R("h3", null, J(t(w)("rechnungswerk", "Positionen")), 1), q(Rf, {
					items: re.value,
					"onUpdate:items": r[22] ||= (e) => re.value = e,
					products: t(c).products,
					readonly: N.value,
					smallBusiness: t(l).settings?.smallBusiness ?? !1,
					defaultTaxRateBp: t(l).settings?.defaultTaxRateBp ?? 1900
				}, null, 8, [
					"items",
					"products",
					"readonly",
					"smallBusiness",
					"defaultTaxRateBp"
				])]),
				R("section", eh, [
					R("h3", null, J(t(w)("rechnungswerk", "Steuer & Summen")), 1),
					R("div", th, [R("label", nh, [R("span", null, J(t(w)("rechnungswerk", "Steuerfall")), 1), C(R("select", {
						"onUpdate:modelValue": r[23] ||= (e) => j.specialTaxCase = e,
						class: "rw-input",
						disabled: N.value
					}, [
						R("option", ih, J(t(w)("rechnungswerk", "Regelbesteuerung")), 1),
						R("option", ah, J(t(w)("rechnungswerk", "Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)")), 1),
						R("option", oh, J(t(w)("rechnungswerk", "Innergemeinschaftliche Lieferung (steuerfrei)")), 1),
						R("option", sh, J(t(w)("rechnungswerk", "Ausfuhrlieferung Drittland (steuerfrei)")), 1)
					], 8, rh), [[we, j.specialTaxCase]])]), r[40] ||= R("span", {
						class: "rw-field",
						"aria-hidden": "true"
					}, null, -1)]),
					j.specialTaxCase === "" ? n("", !0) : (X(), M(t($), {
						key: 0,
						type: "info",
						text: t(w)("rechnungswerk", "Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.")
					}, null, 8, ["text"])),
					R("div", ch, [R("div", lh, [
						R("div", uh, [R("span", null, J(t(w)("rechnungswerk", "Zwischensumme (netto)")), 1), R("strong", null, J(t(lu)(je.value.subtotalCents)), 1)]),
						(X(!0), B(T, null, Y(je.value.taxBreakdown, (e) => (X(), B("div", {
							key: e.rateBp,
							class: "rw-kpi-row rw-kpi-row--muted"
						}, [R("span", null, J(t(w)("rechnungswerk", "USt {rate}", { rate: t(uu)(e.rateBp) })) + " (" + J(t(lu)(e.netCents)) + ")", 1), R("span", null, J(t(lu)(e.taxCents)), 1)]))), 128)),
						R("div", dh, [R("span", null, J(t(w)("rechnungswerk", "Gesamt (brutto)")), 1), R("strong", null, J(t(lu)(je.value.totalCents)), 1)])
					])])
				]),
				d.value ? (X(), B("section", bh, [
					R("h3", null, J(t(w)("rechnungswerk", "Gültigkeit")), 1),
					R("div", xh, [R("label", Sh, [R("span", null, J(t(w)("rechnungswerk", "Gültig bis")), 1), C(R("input", {
						"onUpdate:modelValue": r[26] ||= (e) => j.validUntil = e,
						class: "rw-input",
						type: "date",
						readonly: N.value
					}, null, 8, Ch), [[F, j.validUntil]])]), R("label", wh, [R("span", Th, [C(R("input", {
						"onUpdate:modelValue": r[27] ||= (e) => j.offerFreeform = e,
						type: "checkbox",
						disabled: N.value
					}, null, 8, Eh), [[te, j.offerFreeform]]), G(" " + J(t(w)("rechnungswerk", "Freibleibendes Angebot (unverbindlich)")), 1)])])]),
					R("p", Dh, J(t(w)("rechnungswerk", "„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.")), 1)
				])) : (X(), B("section", fh, [R("h3", null, J(t(w)("rechnungswerk", "Zahlungsbedingungen")), 1), R("div", ph, [
					R("label", mh, [R("span", null, J(t(w)("rechnungswerk", "Zahlungsziel (Tage)")), 1), C(R("input", {
						"onUpdate:modelValue": r[24] ||= (e) => j.paymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						readonly: N.value
					}, null, 8, hh), [[F, j.paymentTermDays]])]),
					R("label", gh, [R("span", null, J(t(w)("rechnungswerk", "Fällig am")), 1), R("input", {
						class: "rw-input",
						type: "text",
						readonly: "",
						value: ge.value || "—"
					}, null, 8, _h)]),
					R("label", vh, [R("span", null, J(t(w)("rechnungswerk", "Skonto")), 1), C(R("input", {
						"onUpdate:modelValue": r[25] ||= (e) => j.discountTerms = e,
						class: "rw-input",
						type: "text",
						readonly: N.value,
						placeholder: t(w)("rechnungswerk", "z. B. 2 % bei Zahlung bis\xA0…")
					}, null, 8, yh), [[F, j.discountTerms]])])
				])])),
				R("section", Oh, [R("div", kh, [R("h3", null, J(t(w)("rechnungswerk", "Schlusstext")), 1), !N.value && g.value.length > 0 ? (X(), M(t(m), {
					key: 0,
					menuName: t(w)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: _(() => [q(lo, { size: 18 })]),
					default: _(() => [(X(!0), B(T, null, Y(g.value, (e) => (X(), M(t(de), {
						key: e.id,
						onClick: (t) => y(e)
					}, {
						default: _(() => [G(J(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : n("", !0)]), R("label", Ah, [R("span", null, J(t(w)("rechnungswerk", "Schlusstext / Anmerkungen")), 1), C(R("textarea", {
					"onUpdate:modelValue": r[28] ||= (e) => j.extraText = e,
					class: "rw-input",
					rows: "3",
					readonly: N.value,
					placeholder: t(w)("rechnungswerk", "Schlusstext – Vorgabe aus den Textbausteinen")
				}, null, 8, jh), [[F, j.extraText]])])]),
				!N.value || E.value.length > 0 ? (X(), B("section", Mh, [
					R("h3", null, J(d.value ? t(w)("rechnungswerk", "Notizen / Hinweise auf dem Angebot") : t(w)("rechnungswerk", "Notizen / Hinweise auf der Rechnung")), 1),
					(X(!0), B(T, null, Y(E.value, (e, r) => (X(), B("div", {
						key: r,
						class: "rw-note-row"
					}, [C(R("input", {
						"onUpdate:modelValue": (e) => E.value[r] = e,
						class: "rw-input",
						type: "text",
						readonly: N.value,
						"aria-label": t(w)("rechnungswerk", "Notiz {index}", { index: r + 1 })
					}, null, 8, Nh), [[F, E.value[r]]]), N.value ? n("", !0) : (X(), M(t(U), {
						key: 0,
						variant: "tertiary",
						"aria-label": t(w)("rechnungswerk", "Notiz entfernen"),
						onClick: (e) => Le(r)
					}, {
						icon: _(() => [q($u, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"]))]))), 128)),
					N.value ? n("", !0) : (X(), M(t(U), {
						key: 0,
						variant: "tertiary",
						onClick: Ie
					}, {
						icon: _(() => [q(cc, { size: 20 })]),
						default: _(() => [G(" " + J(t(w)("rechnungswerk", "Notiz hinzufügen")), 1)]),
						_: 1
					})),
					R("p", Ph, J(d.value ? t(w)("rechnungswerk", "Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.") : t(w)("rechnungswerk", "Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.")), 1)
				])) : n("", !0),
				S.value ? (X(), B("section", Fh, [R("h3", null, J(t(w)("rechnungswerk", "Verlauf")), 1), q(sp, {
					documentId: S.value.id,
					refreshKey: ne.value
				}, null, 8, ["documentId", "refreshKey"])])) : n("", !0),
				R("div", Ih, [N.value ? S.value ? (X(), B(T, { key: 1 }, [
					q(t(U), { onClick: rt }, {
						icon: _(() => [q(mc, { size: 20 })]),
						default: _(() => [G(" " + J(t(w)("rechnungswerk", "PDF herunterladen")), 1)]),
						_: 1
					}),
					q(t(U), {
						variant: d.value ? "secondary" : "primary",
						disabled: ae.value,
						onClick: r[30] ||= (e) => oe.value = !0
					}, {
						icon: _(() => [q(ad, { size: 20 })]),
						default: _(() => [G(" " + J(t(w)("rechnungswerk", "An Kunde senden")), 1)]),
						_: 1
					}, 8, ["variant", "disabled"]),
					S.value.invoiceType === "invoice" && S.value.status === "committed" ? (X(), M(t(U), {
						key: 0,
						variant: "error",
						disabled: O.value,
						onClick: Ze
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Stornieren")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0),
					d.value ? (X(), B(T, { key: 1 }, [
						H.value ? (X(), M(t(U), {
							key: 0,
							disabled: O.value,
							onClick: at
						}, {
							icon: _(() => [q(ml, { size: 20 })]),
							default: _(() => [G(" " + J(t(w)("rechnungswerk", "Annehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0),
						H.value ? (X(), M(t(U), {
							key: 1,
							disabled: O.value,
							onClick: ot
						}, {
							icon: _(() => [q(bl, { size: 20 })]),
							default: _(() => [G(" " + J(t(w)("rechnungswerk", "Ablehnen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0),
						tt.value ? (X(), M(t(U), {
							key: 2,
							disabled: O.value,
							onClick: $e
						}, {
							icon: _(() => [q(Cd, { size: 20 })]),
							default: _(() => [G(" " + J(t(w)("rechnungswerk", "Revidieren")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0),
						nt.value ? (X(), M(t(U), {
							key: 3,
							variant: "primary",
							disabled: O.value,
							onClick: Qe
						}, {
							icon: _(() => [q(_d, { size: 20 })]),
							default: _(() => [G(" " + J(t(w)("rechnungswerk", "In Rechnung übernehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0)
					], 64)) : n("", !0)
				], 64)) : n("", !0) : (X(), B(T, { key: 0 }, [
					q(t(U), {
						disabled: O.value,
						onClick: r[29] ||= (e) => Ke()
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					q(t(U), {
						disabled: O.value,
						onClick: qe
					}, {
						icon: _(() => [q(dd, { size: 20 })]),
						default: _(() => [G(" " + J(t(w)("rechnungswerk", "Vorschau")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					q(t(U), {
						variant: "primary",
						disabled: O.value,
						onClick: Ye
					}, {
						icon: _(() => [q(Oo, { size: 20 })]),
						default: _(() => [G(" " + J(t(w)("rechnungswerk", "Festschreiben")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					S.value ? (X(), M(t(U), {
						key: 0,
						variant: "error",
						disabled: O.value,
						onClick: Xe
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Löschen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0)
				], 64))]),
				q(Vf, {
					open: A.value === "finalize",
					name: d.value ? t(w)("rechnungswerk", "Angebot festschreiben") : t(w)("rechnungswerk", "Rechnung festschreiben"),
					message: De.value,
					confirmLabel: t(w)("rechnungswerk", "Festschreiben"),
					onClose: r[31] ||= (e) => A.value = null,
					onConfirm: it
				}, {
					default: _(() => [Ee.value ? (X(), M(t($), {
						key: 0,
						type: "warning",
						heading: t(w)("rechnungswerk", "Hinweis zur E-Rechnung"),
						text: t(w)("rechnungswerk", "Es ist weder eine USt-IdNr. noch eine Registernummer hinterlegt. Die Rechnung ist steuerlich in Ordnung, Prüfprogramme beim Empfänger melden aber einen Fehler und können sie zurückweisen.")
					}, null, 8, ["heading", "text"])) : n("", !0)]),
					_: 1
				}, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				q(Vf, {
					open: A.value === "delete",
					name: d.value ? t(w)("rechnungswerk", "Angebot löschen") : t(w)("rechnungswerk", "Entwurf löschen"),
					message: d.value ? t(w)("rechnungswerk", "Diesen Angebots-Entwurf wirklich löschen?") : t(w)("rechnungswerk", "Diesen Entwurf wirklich löschen?"),
					confirmLabel: t(w)("rechnungswerk", "Löschen"),
					destructive: "",
					onClose: r[32] ||= (e) => A.value = null,
					onConfirm: ft
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				q(Vf, {
					open: A.value === "cancel",
					name: t(w)("rechnungswerk", "Rechnung stornieren"),
					message: t(w)("rechnungswerk", "Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?"),
					confirmLabel: t(w)("rechnungswerk", "Stornorechnung erstellen"),
					destructive: "",
					onClose: r[33] ||= (e) => A.value = null,
					onConfirm: W
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				q(Vf, {
					open: A.value === "convert",
					name: t(w)("rechnungswerk", "In Rechnung übernehmen"),
					message: t(w)("rechnungswerk", "Aus diesem Angebot wird ein neuer Rechnungs-Entwurf mit denselben Positionen erstellt. Das Angebot wird als „übernommen“ markiert. Fortfahren?"),
					confirmLabel: t(w)("rechnungswerk", "Rechnung erstellen"),
					onClose: r[34] ||= (e) => A.value = null,
					onConfirm: st
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				q(Vf, {
					open: A.value === "revise",
					name: t(w)("rechnungswerk", "Angebot revidieren"),
					message: t(w)("rechnungswerk", "Es wird eine überarbeitbare Kopie als neue Angebots-Revision erstellt. Beim Festschreiben erhält sie eine Revisionsnummer (z. B. AN-…-1) und dieses Angebot wird als „revidiert“ markiert. Fortfahren?"),
					confirmLabel: t(w)("rechnungswerk", "Revision erstellen"),
					onClose: r[35] ||= (e) => A.value = null,
					onConfirm: lt
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				q(Vf, {
					open: A.value === "leave",
					name: t(w)("rechnungswerk", "Ungespeicherte Änderungen"),
					message: t(w)("rechnungswerk", "Deine Änderungen sind noch nicht gespeichert. Wenn du die Seite verlässt, gehen sie verloren."),
					cancelLabel: t(w)("rechnungswerk", "Weiter bearbeiten"),
					confirmLabel: t(w)("rechnungswerk", "Verwerfen"),
					destructive: "",
					onClose: r[36] ||= (e) => Ge(!1),
					onConfirm: r[37] ||= (e) => Ge(!0)
				}, null, 8, [
					"open",
					"name",
					"message",
					"cancelLabel",
					"confirmLabel"
				]),
				q(Jf, {
					open: oe.value,
					invoice: S.value,
					defaultBody: Oe.value,
					saving: ae.value,
					kind: d.value ? "quote" : "invoice",
					onClose: r[38] ||= (e) => oe.value = !1,
					onSend: ut
				}, null, 8, [
					"open",
					"invoice",
					"defaultBody",
					"saving",
					"kind"
				]),
				q(t(et), {
					open: se.value,
					name: t(w)("rechnungswerk", "Vorschau (Entwurf)"),
					size: "large",
					"onUpdate:open": Je
				}, {
					default: _(() => [ce.value ? (X(), B("iframe", {
						key: 0,
						src: ce.value,
						class: "preview-frame",
						title: t(w)("rechnungswerk", "Vorschau (Entwurf)")
					}, null, 8, Lh)) : n("", !0)]),
					_: 1
				}, 8, ["open", "name"])
			]);
		};
	}
}), [["__scopeId", "data-v-d2bd521e"]]), zh = {
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
}, Bh = ["aria-hidden", "aria-label"], Vh = [
	"fill",
	"width",
	"height"
], Hh = { key: 0 };
function Uh(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon alert-circle-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Hh, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" }, null, -1)], 8, Vh))], 16, Bh);
}
var Wh = /*#__PURE__*/ Z(zh, [["render", Uh]]), Gh = { class: "rw-view" }, Kh = { class: "rw-view__head" }, qh = { key: 2 }, Jh = { class: "rw-filterbar" }, Yh = ["onClick"], Xh = { class: "rw-chip__n" }, Zh = { class: "rw-table-wrap" }, Qh = { class: "rw-table" }, $h = { class: "num" }, eg = ["onClick"], tg = { class: "rw-status-cell" }, ng = { class: "rw-qstatus-text" }, rg = { class: "rw-nowrap" }, ig = { class: "num" }, ag = { class: "rw-col-actions" }, og = { class: "rw-actions" }, sg = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "QuotesView",
	setup(e) {
		let r = ct(), i = Sp(), a = v(""), o = [
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
		], s = v("all"), c = (e) => e.quoteStatus === "open" || e.quoteStatus === "expired", l = I(() => {
			let e = {
				all: i.quotes.length,
				open: 0,
				accepted: 0,
				rejected: 0,
				converted: 0
			};
			for (let t of i.quotes) c(t) && e.open++, t.quoteStatus === "accepted" && e.accepted++, t.quoteStatus === "rejected" && e.rejected++, t.quoteStatus === "converted" && e.converted++;
			return e;
		}), u = I(() => {
			switch (s.value) {
				case "open": return i.quotes.filter(c);
				case "accepted": return i.quotes.filter((e) => e.quoteStatus === "accepted");
				case "rejected": return i.quotes.filter((e) => e.quoteStatus === "rejected");
				case "converted": return i.quotes.filter((e) => e.quoteStatus === "converted");
				default: return i.quotes;
			}
		}), d = (e) => e.status === "committed" && (e.quoteStatus === "open" || e.quoteStatus === "expired" || e.quoteStatus === "accepted"), f = {
			draft: Ec,
			open: Wc,
			expired: Wh,
			accepted: Rc,
			rejected: Mc,
			converted: _d,
			superseded: Cd
		}, p = (e) => e ? f[e] ?? Ec : Ec, m = (e) => e ? w("rechnungswerk", $l[e] ?? e) : "";
		function h(e) {
			return e ? (e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e)).toLocaleDateString() : "—";
		}
		Fe(() => {
			i.fetchAll().catch((e) => {
				a.value = e.message ?? w("rechnungswerk", "Laden fehlgeschlagen");
			});
		});
		function g() {
			r.push({ name: "quote-new" });
		}
		function ee(e) {
			r.push({
				name: "quote-detail",
				params: { id: String(e) }
			});
		}
		function y(e) {
			bp(e);
		}
		async function b(e) {
			a.value = "";
			try {
				let t = await i.convert(e);
				r.push({
					name: "invoice-detail",
					params: { id: String(t.id) }
				});
			} catch (e) {
				a.value = e.message ?? w("rechnungswerk", "Übernahme fehlgeschlagen");
			}
		}
		return (e, r) => (X(), B("div", Gh, [
			R("div", Kh, [R("h2", null, J(t(w)("rechnungswerk", "Angebote")), 1), q(t(U), {
				variant: "primary",
				onClick: g
			}, {
				icon: _(() => [q(cc, { size: 20 })]),
				default: _(() => [G(" " + J(t(w)("rechnungswerk", "Neues Angebot")), 1)]),
				_: 1
			})]),
			a.value ? (X(), M(t($), {
				key: 0,
				type: "error",
				text: a.value
			}, null, 8, ["text"])) : n("", !0),
			!t(i).loading && t(i).quotes.length === 0 ? (X(), M(t(ze), {
				key: 1,
				name: t(w)("rechnungswerk", "Noch keine Angebote"),
				description: t(w)("rechnungswerk", "Lege dein erstes Angebot an.")
			}, {
				icon: _(() => [q(za, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(i).quotes.length > 0 ? (X(), B("div", qh, [R("div", Jh, [(X(), B(T, null, Y(o, (e) => R("button", {
				key: e.key,
				class: V(["rw-chip", { "rw-chip--active": s.value === e.key }]),
				onClick: (t) => s.value = e.key
			}, [G(J(t(w)("rechnungswerk", e.label)) + " ", 1), R("span", Xh, J(l.value[e.key]), 1)], 10, Yh)), 64))]), R("div", Zh, [R("table", Qh, [R("thead", null, [R("tr", null, [
				R("th", null, J(t(w)("rechnungswerk", "Status")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Nummer")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Empfänger")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Datum")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Gültig bis")), 1),
				R("th", $h, J(t(w)("rechnungswerk", "Brutto")), 1),
				r[0] ||= R("th", { class: "rw-col-actions" }, null, -1)
			])]), R("tbody", null, [(X(!0), B(T, null, Y(u.value, (e) => (X(), B("tr", {
				key: e.id,
				class: V(["rw-row-clickable", { "rw-row--overdue": e.quoteStatus === "expired" }]),
				onClick: (t) => ee(e.id)
			}, [
				R("td", null, [R("span", tg, [(X(), M(be(p(e.quoteStatus)), {
					size: 20,
					class: V(["rw-sicon", `rw-qsicon--${e.quoteStatus}`]),
					title: m(e.quoteStatus)
				}, null, 8, ["class", "title"])), R("span", ng, J(m(e.quoteStatus)), 1)])]),
				R("td", rg, J(e.number ?? t(w)("rechnungswerk", "(Entwurf)")), 1),
				R("td", null, J(e.recipientName ?? "—"), 1),
				R("td", null, J(h(e.issueDate ?? e.createdAt)), 1),
				R("td", null, [R("span", { class: V({ "rw-amt-overdue": e.quoteStatus === "expired" }) }, J(h(e.validUntil)), 3)]),
				R("td", ig, J(t(lu)(e.totalCents)), 1),
				R("td", ag, [R("div", og, [d(e) ? (X(), M(t(U), {
					key: 0,
					variant: "tertiary",
					"aria-label": t(w)("rechnungswerk", "In Rechnung übernehmen"),
					title: t(w)("rechnungswerk", "In Rechnung übernehmen"),
					onClick: K((t) => b(e.id), ["stop"])
				}, {
					icon: _(() => [q(_d, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])) : n("", !0), e.status === "draft" ? n("", !0) : (X(), M(t(U), {
					key: 1,
					variant: "tertiary",
					"aria-label": t(w)("rechnungswerk", "PDF herunterladen"),
					title: t(w)("rechnungswerk", "PDF herunterladen"),
					onClick: K((t) => y(e.id), ["stop"])
				}, {
					icon: _(() => [q(mc, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				]))])])
			], 10, eg))), 128))])])])])) : n("", !0)
		]));
	}
}), [["__scopeId", "data-v-c26e3d67"]]), cg = { class: "product-modal" }, lg = { class: "field" }, ug = { class: "field" }, dg = { class: "field-row" }, fg = { class: "field" }, pg = ["value"], mg = { class: "field" }, hg = { class: "field" }, gg = ["value"], _g = { class: "field" }, vg = ["placeholder"], yg = { class: "hint" }, bg = { class: "actions" }, xg = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "ProductEditModal",
	props: {
		open: { type: Boolean },
		product: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: r }) {
		let i = e, a = r, o = v(null), s = ke({
			name: "",
			description: "",
			defaultUnitCode: "C62",
			defaultUnitLabel: "",
			defaultTaxRateBp: 1900
		}), c = v("0,00");
		function l() {
			ru(c.value) !== null && (c.value = ou(su(c.value)));
		}
		let u = I(() => i.product ? w("rechnungswerk", "Produkt bearbeiten") : w("rechnungswerk", "Produkt anlegen")), d = I(() => s.name.trim() !== "");
		k(() => i.open, (e) => {
			if (!e) return;
			let t = i.product;
			s.name = t?.name ?? "", s.description = t?.description ?? "", s.defaultUnitCode = t?.defaultUnitCode ?? "C62", s.defaultUnitLabel = t?.defaultUnitLabel ?? "", s.defaultTaxRateBp = t?.defaultTaxRateBp ?? 1900, c.value = ou(t?.defaultPriceE4 ?? 0), Ye(() => o.value?.focus());
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
		return (r, i) => e.open ? (X(), M(t(Pe), {
			key: 0,
			name: u.value,
			onKeydown: i[7] ||= D((e) => t(Ts)(e, () => r.$emit("close")), ["esc"]),
			onClose: i[8] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [R("div", cg, [
				R("h2", null, J(u.value), 1),
				R("label", lg, [R("span", null, J(t(w)("rechnungswerk", "Name")) + " *", 1), C(R("input", {
					ref_key: "nameInput",
					ref: o,
					"onUpdate:modelValue": i[0] ||= (e) => s.name = e,
					class: "input",
					type: "text"
				}, null, 512), [[F, s.name]])]),
				R("label", ug, [R("span", null, J(t(w)("rechnungswerk", "Beschreibung")), 1), C(R("textarea", {
					"onUpdate:modelValue": i[1] ||= (e) => s.description = e,
					class: "input",
					rows: "2"
				}, null, 512), [[F, s.description]])]),
				R("div", dg, [
					R("label", fg, [R("span", null, J(t(w)("rechnungswerk", "Einheit")), 1), C(R("select", {
						"onUpdate:modelValue": i[2] ||= (e) => s.defaultUnitCode = e,
						class: "input"
					}, [(X(!0), B(T, null, Y(t(Gl), (e) => (X(), B("option", {
						key: e,
						value: e
					}, J(t(w)("rechnungswerk", t(Kl)[e])), 9, pg))), 128))], 512), [[we, s.defaultUnitCode]])]),
					R("label", mg, [R("span", null, J(t(w)("rechnungswerk", "Standard-Preis (€)")), 1), C(R("input", {
						"onUpdate:modelValue": i[3] ||= (e) => c.value = e,
						class: "input",
						type: "text",
						inputmode: "decimal",
						onBlur: l
					}, null, 544), [[F, c.value]])]),
					R("label", hg, [R("span", null, J(t(w)("rechnungswerk", "USt-Satz")), 1), C(R("select", {
						"onUpdate:modelValue": i[4] ||= (e) => s.defaultTaxRateBp = e,
						class: "input"
					}, [(X(!0), B(T, null, Y(t(ql), (e) => (X(), B("option", {
						key: e,
						value: e
					}, J(t(uu)(e)), 9, gg))), 128))], 512), [[
						we,
						s.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])])
				]),
				R("label", _g, [
					R("span", null, J(t(w)("rechnungswerk", "Eigene Einheit (optional)")), 1),
					C(R("input", {
						"onUpdate:modelValue": i[5] ||= (e) => s.defaultUnitLabel = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: t(w)("rechnungswerk", "z. B. Personen, Sitzung")
					}, null, 8, vg), [[F, s.defaultUnitLabel]]),
					R("span", yg, J(t(w)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF. In der E-Rechnung wird die Einheit generisch (Stück) abgebildet, damit sie gültig bleibt.")), 1)
				]),
				R("div", bg, [q(t(U), { onClick: i[6] ||= (e) => r.$emit("close") }, {
					default: _(() => [G(J(t(w)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), q(t(U), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					default: _(() => [G(J(t(w)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-e77e93c0"]]), Sg = { class: "rw-view" }, Cg = { class: "rw-view__head" }, wg = {
	key: 2,
	class: "rw-table-wrap"
}, Tg = { class: "rw-table" }, Eg = { class: "num" }, Dg = { class: "num" }, Og = ["onClick"], kg = {
	key: 0,
	class: "rw-muted"
}, Ag = { class: "num" }, jg = { class: "num" }, Mg = { class: "rw-col-actions" }, Ng = { class: "rw-actions" }, Pg = /* @__PURE__ */ H({
	__name: "ProductsView",
	setup(e) {
		let r = Dp(), i = v(!1), a = v(null), o = v(null), s = v(""), c = (e) => Kl[e] ?? e;
		function l(e, t) {
			let n = e.message ?? t;
			s.value = n, console.error("[rechnungswerk] products:", e);
		}
		Fe(() => {
			r.fetchAll().catch((e) => l(e, w("rechnungswerk", "Laden fehlgeschlagen")));
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
				l(e, w("rechnungswerk", "Speichern fehlgeschlagen"));
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
					l(e, w("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, l) => (X(), B("div", Sg, [
			R("div", Cg, [R("h2", null, J(t(w)("rechnungswerk", "Produkte")), 1), q(t(U), {
				variant: "primary",
				onClick: u
			}, {
				icon: _(() => [q(cc, { size: 20 })]),
				default: _(() => [G(" " + J(t(w)("rechnungswerk", "Produkt anlegen")), 1)]),
				_: 1
			})]),
			s.value ? (X(), M(t($), {
				key: 0,
				type: "error",
				text: s.value
			}, null, 8, ["text"])) : n("", !0),
			!t(r).loading && t(r).products.length === 0 ? (X(), M(t(ze), {
				key: 1,
				name: t(w)("rechnungswerk", "Noch keine Produkte"),
				description: t(w)("rechnungswerk", "Pflege wiederkehrende Leistungen, um sie schnell in Rechnungen zu übernehmen.")
			}, {
				icon: _(() => [q(ro, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(r).products.length > 0 ? (X(), B("div", wg, [R("table", Tg, [R("thead", null, [R("tr", null, [
				R("th", null, J(t(w)("rechnungswerk", "Name")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Einheit")), 1),
				R("th", Eg, J(t(w)("rechnungswerk", "Preis")), 1),
				R("th", Dg, J(t(w)("rechnungswerk", "USt")), 1),
				l[2] ||= R("th", { class: "num" }, null, -1)
			])]), R("tbody", null, [(X(!0), B(T, null, Y(t(r).products, (e) => (X(), B("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => d(e)
			}, [
				R("td", null, [G(J(e.name) + " ", 1), e.description ? (X(), B("div", kg, J(e.description), 1)) : n("", !0)]),
				R("td", null, J(e.defaultUnitLabel || t(w)("rechnungswerk", c(e.defaultUnitCode))), 1),
				R("td", Ag, J(t(cu)(e.defaultPriceE4)), 1),
				R("td", jg, J(t(uu)(e.defaultTaxRateBp)), 1),
				R("td", Mg, [R("div", Ng, [q(t(U), {
					variant: "tertiary",
					"aria-label": t(w)("rechnungswerk", "Löschen"),
					title: t(w)("rechnungswerk", "Löschen"),
					onClick: K((t) => p(e), ["stop"])
				}, {
					icon: _(() => [q($u, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, Og))), 128))])])])) : n("", !0),
			q(xg, {
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
			q(Vf, {
				open: o.value !== null,
				name: t(w)("rechnungswerk", "Produkt löschen"),
				message: o.value ? t(w)("rechnungswerk", "„{name}“ wirklich löschen?", { name: o.value.name }) : "",
				confirmLabel: t(w)("rechnungswerk", "Löschen"),
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
}), Fg = {
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
}, Ig = ["aria-hidden", "aria-label"], Lg = [
	"fill",
	"width",
	"height"
], Rg = { key: 0 };
function zg(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon star-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Rg, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, null, -1)], 8, Lg))], 16, Ig);
}
var Bg = /*#__PURE__*/ Z(Fg, [["render", zg]]), Vg = { class: "snippet-modal" }, Hg = { class: "field" }, Ug = ["placeholder"], Wg = { class: "field-row" }, Gg = { class: "field" }, Kg = ["value"], qg = { class: "field" }, Jg = ["value"], Yg = { class: "field" }, Xg = { class: "hint" }, Zg = { class: "actions" }, Qg = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "TextSnippetEditModal",
	props: {
		open: { type: Boolean },
		snippet: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: r }) {
		let i = ["invoice", "quote"], a = ["opening", "closing"], o = e, s = r, c = v(null), l = ke({
			label: "",
			docType: "invoice",
			slot: "opening",
			content: "",
			isDefault: !1
		}), u = I(() => o.snippet ? w("rechnungswerk", "Textbaustein bearbeiten") : w("rechnungswerk", "Textbaustein anlegen")), d = I(() => l.label.trim() !== "");
		k(() => o.open, (e) => {
			if (!e) return;
			let t = o.snippet;
			l.label = t?.label ?? "", l.docType = t?.docType ?? "invoice", l.slot = t?.slot ?? "opening", l.content = t?.content ?? "", l.isDefault = t?.isDefault ?? !1, Ye(() => c.value?.focus());
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
		return (r, o) => e.open ? (X(), M(t(Pe), {
			key: 0,
			name: u.value,
			onKeydown: o[6] ||= D((e) => t(Ts)(e, () => r.$emit("close")), ["esc"]),
			onClose: o[7] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [R("div", Vg, [
				R("h2", null, J(u.value), 1),
				R("label", Hg, [R("span", null, J(t(w)("rechnungswerk", "Name")) + " *", 1), C(R("input", {
					ref_key: "nameInput",
					ref: c,
					"onUpdate:modelValue": o[0] ||= (e) => l.label = e,
					class: "input",
					type: "text",
					placeholder: t(w)("rechnungswerk", "z. B. Neukunde, Mahnfreundlich")
				}, null, 8, Ug), [[F, l.label]])]),
				R("div", Wg, [R("label", Gg, [R("span", null, J(t(w)("rechnungswerk", "Dokument")), 1), C(R("select", {
					"onUpdate:modelValue": o[1] ||= (e) => l.docType = e,
					class: "input"
				}, [(X(), B(T, null, Y(i, (e) => R("option", {
					key: e,
					value: e
				}, J(t(w)("rechnungswerk", t(Yl)[e])), 9, Kg)), 64))], 512), [[we, l.docType]])]), R("label", qg, [R("span", null, J(t(w)("rechnungswerk", "Textbereich")), 1), C(R("select", {
					"onUpdate:modelValue": o[2] ||= (e) => l.slot = e,
					class: "input"
				}, [(X(), B(T, null, Y(a, (e) => R("option", {
					key: e,
					value: e
				}, J(t(w)("rechnungswerk", t(Xl)[e])), 9, Jg)), 64))], 512), [[we, l.slot]])])]),
				R("label", Yg, [R("span", null, J(t(w)("rechnungswerk", "Text")), 1), C(R("textarea", {
					"onUpdate:modelValue": o[3] ||= (e) => l.content = e,
					class: "input",
					rows: "6"
				}, null, 512), [[F, l.content]])]),
				q(t(Je), {
					modelValue: l.isDefault,
					"onUpdate:modelValue": o[4] ||= (e) => l.isDefault = e
				}, {
					default: _(() => [G(J(t(w)("rechnungswerk", "Als Standard für neue Dokumente verwenden")), 1)]),
					_: 1
				}, 8, ["modelValue"]),
				R("p", Xg, J(t(w)("rechnungswerk", "Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.")), 1),
				R("div", Zg, [q(t(U), { onClick: o[5] ||= (e) => r.$emit("close") }, {
					default: _(() => [G(J(t(w)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), q(t(U), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					default: _(() => [G(J(t(w)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-b60fbea6"]]), $g = { class: "rw-view" }, e_ = { class: "rw-view__head" }, t_ = { class: "rw-muted rw-intro" }, n_ = {
	key: 2,
	class: "rw-snippet-groups"
}, r_ = { class: "rw-snippet-group__head" }, i_ = { class: "rw-table-wrap" }, a_ = { class: "rw-table" }, o_ = ["onClick"], s_ = {
	key: 0,
	class: "rw-muted rw-snippet-content"
}, c_ = { class: "rw-snippet-actions" }, l_ = { class: "rw-actions" }, u_ = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "TextSnippetsView",
	setup(e) {
		let r = Np(), i = ["invoice", "quote"], a = ["opening", "closing"], o = I(() => {
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
		}), s = v(!1), c = v(null), l = v(null), u = v("");
		function d(e, t) {
			let n = e.message ?? t;
			u.value = n, console.error("[rechnungswerk] text-snippets:", e);
		}
		Fe(() => {
			r.fetchAll().catch((e) => d(e, w("rechnungswerk", "Laden fehlgeschlagen")));
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
					d(e, w("rechnungswerk", "Speichern fehlgeschlagen"));
				}
			}
		}
		async function h(e) {
			u.value = "";
			try {
				c.value ? await r.update(c.value.id, e) : await r.create(e), s.value = !1;
			} catch (e) {
				d(e, w("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function g(e) {
			l.value = e;
		}
		async function ee() {
			let e = l.value;
			if (l.value = null, e) {
				u.value = "";
				try {
					await r.remove(e.id);
				} catch (e) {
					d(e, w("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, i) => (X(), B("div", $g, [
			R("div", e_, [R("h2", null, J(t(w)("rechnungswerk", "Textbausteine")), 1), q(t(U), {
				variant: "primary",
				onClick: f
			}, {
				icon: _(() => [q(cc, { size: 20 })]),
				default: _(() => [G(" " + J(t(w)("rechnungswerk", "Textbaustein anlegen")), 1)]),
				_: 1
			})]),
			R("p", t_, J(t(w)("rechnungswerk", "Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.")), 1),
			u.value ? (X(), M(t($), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : n("", !0),
			!t(r).loading && t(r).snippets.length === 0 ? (X(), M(t(ze), {
				key: 1,
				name: t(w)("rechnungswerk", "Noch keine Textbausteine"),
				description: t(w)("rechnungswerk", "Lege wiederkehrende Einleitungs- und Schlusstexte an, um sie schnell in Dokumente zu übernehmen.")
			}, {
				icon: _(() => [q(lo, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(r).snippets.length > 0 ? (X(), B("div", n_, [(X(!0), B(T, null, Y(o.value, (e) => (X(), B("section", {
				key: e.key,
				class: "rw-snippet-group"
			}, [R("h3", r_, [
				G(J(t(w)("rechnungswerk", t(Yl)[e.docType])) + " ", 1),
				i[2] ||= R("span", { class: "rw-snippet-group__sep" }, "–", -1),
				G(" " + J(t(w)("rechnungswerk", t(Xl)[e.slot])), 1)
			]), R("div", i_, [R("table", a_, [R("tbody", null, [(X(!0), B(T, null, Y(e.items, (e) => (X(), B("tr", {
				key: e.id,
				class: "rw-row-clickable rw-snippet-row",
				onClick: (t) => p(e)
			}, [R("td", null, [R("strong", null, J(e.label), 1), e.content ? (X(), B("div", s_, J(e.content), 1)) : n("", !0)]), R("td", c_, [R("div", l_, [q(t(U), {
				variant: "tertiary",
				"aria-label": e.isDefault ? t(w)("rechnungswerk", "Standard-Vorlage") : t(w)("rechnungswerk", "Als Standard festlegen"),
				title: e.isDefault ? t(w)("rechnungswerk", "Standard-Vorlage") : t(w)("rechnungswerk", "Als Standard festlegen"),
				onClick: K((t) => m(e), ["stop"])
			}, {
				icon: _(() => [e.isDefault ? (X(), M(us, {
					key: 0,
					size: 20,
					class: "rw-star rw-star--active"
				})) : (X(), M(Bg, {
					key: 1,
					size: 20,
					class: "rw-star"
				}))]),
				_: 2
			}, 1032, [
				"aria-label",
				"title",
				"onClick"
			]), q(t(U), {
				variant: "tertiary",
				"aria-label": t(w)("rechnungswerk", "Löschen"),
				title: t(w)("rechnungswerk", "Löschen"),
				onClick: K((t) => g(e), ["stop"])
			}, {
				icon: _(() => [q($u, { size: 20 })]),
				_: 1
			}, 8, [
				"aria-label",
				"title",
				"onClick"
			])])])], 8, o_))), 128))])])])]))), 128))])) : n("", !0),
			q(Qg, {
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
			q(Vf, {
				open: l.value !== null,
				name: t(w)("rechnungswerk", "Textbaustein löschen"),
				message: l.value ? t(w)("rechnungswerk", "„{name}“ wirklich löschen?", { name: l.value.label }) : "",
				confirmLabel: t(w)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: i[1] ||= (e) => l.value = null,
				onConfirm: ee
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-c438c8e2"]]), d_ = {
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
}, f_ = ["aria-hidden", "aria-label"], p_ = [
	"fill",
	"width",
	"height"
], m_ = { key: 0 };
function h_(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon account-arrow-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", m_, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14" }, null, -1)], 8, p_))], 16, f_);
}
var g_ = /*#__PURE__*/ Z(d_, [["render", h_]]), __ = { class: "customer-modal" }, v_ = { class: "form-section" }, y_ = { class: "row" }, b_ = { class: "field" }, x_ = { class: "field" }, S_ = { class: "row" }, C_ = { class: "field" }, w_ = { class: "form-section" }, T_ = { class: "field" }, E_ = ["placeholder"], D_ = { class: "hint" }, O_ = { class: "field" }, k_ = { class: "row" }, A_ = { class: "field" }, j_ = { class: "field" }, M_ = { class: "row" }, N_ = { class: "field" }, P_ = { class: "form-section" }, F_ = { class: "row" }, I_ = { class: "field" }, L_ = { class: "field" }, R_ = { class: "field" }, z_ = { class: "form-section" }, B_ = { class: "field" }, V_ = { class: "row" }, H_ = { class: "field" }, U_ = { class: "field" }, W_ = { class: "field" }, G_ = { class: "form-section" }, K_ = { class: "row" }, q_ = { class: "field" }, J_ = { class: "field" }, Y_ = { value: "" }, X_ = ["value"], Z_ = { class: "field" }, Q_ = { class: "actions" }, $_ = /*#__PURE__*/ Z(/* @__PURE__ */ H({
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
		let i = e, a = r, o = v(null), s = () => ({
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
		}), c = ke(s()), l = v(""), u = v(""), d = I(() => i.customer ? w("rechnungswerk", "Kunde bearbeiten") : w("rechnungswerk", "Kunde anlegen")), f = I(() => {
			let e = c.customerNumber.trim().toLowerCase();
			return e !== "" && (i.takenNumbers ?? []).includes(e);
		}), p = I(() => c.customerNumber.trim() !== "" && c.name.trim() !== "" && !f.value);
		k(() => i.open, (e) => {
			if (!e) return;
			let t = i.customer;
			Object.assign(c, s()), t ? (c.customerNumber = t.customerNumber ?? "", c.name = t.name ?? "", c.vatId = t.vatId ?? "", c.addressAddition = t.addressAddition ?? "", c.address = t.address ?? "", c.postalCode = t.postalCode ?? "", c.city = t.city ?? "", c.country = t.country ?? "DE", c.contactPerson = t.contactPerson ?? "", c.phone = t.phone ?? "", c.email = t.email ?? "", c.bankAccountHolder = t.bankAccountHolder ?? "", c.iban = t.iban ?? "", c.bic = t.bic ?? "", c.bankName = t.bankName ?? "", c.note = t.note ?? "", l.value = t.defaultPaymentTermDays == null ? "" : String(t.defaultPaymentTermDays), u.value = t.defaultTaxRateBp == null ? "" : String(t.defaultTaxRateBp)) : i.prefill && Object.assign(c, {
				...s(),
				...m(i.prefill)
			}), Ye(() => o.value?.focus());
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
		return (r, i) => e.open ? (X(), M(t(Pe), {
			key: 0,
			name: d.value,
			onKeydown: i[19] ||= D((e) => t(Ts)(e, () => r.$emit("close")), ["esc"]),
			onClose: i[20] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [R("div", __, [
				R("h2", null, J(d.value), 1),
				R("div", v_, [
					R("h3", null, J(t(w)("rechnungswerk", "Stammdaten")), 1),
					R("div", y_, [R("label", b_, [R("span", null, J(t(w)("rechnungswerk", "Kundennr.")) + " *", 1), C(R("input", {
						ref_key: "numberInput",
						ref: o,
						"onUpdate:modelValue": i[0] ||= (e) => c.customerNumber = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.customerNumber]])]), R("label", x_, [R("span", null, J(t(w)("rechnungswerk", "Name / Firma")) + " *", 1), C(R("input", {
						"onUpdate:modelValue": i[1] ||= (e) => c.name = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.name]])])]),
					f.value ? (X(), M(t($), {
						key: 0,
						type: "error",
						text: t(w)("rechnungswerk", "Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.", { number: c.customerNumber.trim() })
					}, null, 8, ["text"])) : n("", !0),
					R("div", S_, [R("label", C_, [R("span", null, J(t(w)("rechnungswerk", "USt-IdNr.")), 1), C(R("input", {
						"onUpdate:modelValue": i[2] ||= (e) => c.vatId = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.vatId]])])])
				]),
				R("div", w_, [
					R("h3", null, J(t(w)("rechnungswerk", "Anschrift")), 1),
					R("label", T_, [
						R("span", null, J(t(w)("rechnungswerk", "Adresszusatz")), 1),
						C(R("input", {
							"onUpdate:modelValue": i[3] ||= (e) => c.addressAddition = e,
							class: "input",
							type: "text",
							placeholder: t(w)("rechnungswerk", "z. Hd. Frau Meyer, Gebäude B, c/o\xA0…")
						}, null, 8, E_), [[F, c.addressAddition]]),
						R("span", D_, J(t(w)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					]),
					R("label", O_, [R("span", null, J(t(w)("rechnungswerk", "Straße & Hausnummer")), 1), C(R("input", {
						"onUpdate:modelValue": i[4] ||= (e) => c.address = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.address]])]),
					R("div", k_, [R("label", A_, [R("span", null, J(t(w)("rechnungswerk", "PLZ")), 1), C(R("input", {
						"onUpdate:modelValue": i[5] ||= (e) => c.postalCode = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.postalCode]])]), R("label", j_, [R("span", null, J(t(w)("rechnungswerk", "Ort")), 1), C(R("input", {
						"onUpdate:modelValue": i[6] ||= (e) => c.city = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.city]])])]),
					R("div", M_, [R("label", N_, [R("span", null, J(t(w)("rechnungswerk", "Land")), 1), q(Ld, {
						modelValue: c.country,
						"onUpdate:modelValue": i[7] ||= (e) => c.country = e,
						selectClass: "input"
					}, null, 8, ["modelValue"])])])
				]),
				R("div", P_, [
					R("h3", null, J(t(w)("rechnungswerk", "Ansprechpartner & Kontakt")), 1),
					R("div", F_, [R("label", I_, [R("span", null, J(t(w)("rechnungswerk", "Ansprechpartner")), 1), C(R("input", {
						"onUpdate:modelValue": i[8] ||= (e) => c.contactPerson = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.contactPerson]])]), R("label", L_, [R("span", null, J(t(w)("rechnungswerk", "Telefon")), 1), C(R("input", {
						"onUpdate:modelValue": i[9] ||= (e) => c.phone = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.phone]])])]),
					R("label", R_, [R("span", null, J(t(w)("rechnungswerk", "E-Mail (für Rechnungsversand)")), 1), C(R("input", {
						"onUpdate:modelValue": i[10] ||= (e) => c.email = e,
						class: "input",
						type: "email"
					}, null, 512), [[F, c.email]])])
				]),
				R("div", z_, [
					R("h3", null, J(t(w)("rechnungswerk", "Bankverbindung")), 1),
					R("label", B_, [R("span", null, J(t(w)("rechnungswerk", "Kontoinhaber")), 1), C(R("input", {
						"onUpdate:modelValue": i[11] ||= (e) => c.bankAccountHolder = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.bankAccountHolder]])]),
					R("div", V_, [R("label", H_, [R("span", null, J(t(w)("rechnungswerk", "IBAN")), 1), C(R("input", {
						"onUpdate:modelValue": i[12] ||= (e) => c.iban = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.iban]])]), R("label", U_, [R("span", null, J(t(w)("rechnungswerk", "BIC")), 1), C(R("input", {
						"onUpdate:modelValue": i[13] ||= (e) => c.bic = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.bic]])])]),
					R("label", W_, [R("span", null, J(t(w)("rechnungswerk", "Bank")), 1), C(R("input", {
						"onUpdate:modelValue": i[14] ||= (e) => c.bankName = e,
						class: "input",
						type: "text"
					}, null, 512), [[F, c.bankName]])])
				]),
				R("div", G_, [
					R("h3", null, J(t(w)("rechnungswerk", "Vorgaben für neue Rechnungen")), 1),
					R("div", K_, [R("label", q_, [R("span", null, J(t(w)("rechnungswerk", "Zahlungsziel (Tage)")), 1), C(R("input", {
						"onUpdate:modelValue": i[15] ||= (e) => l.value = e,
						class: "input",
						type: "number",
						min: "0",
						inputmode: "numeric"
					}, null, 512), [[F, l.value]])]), R("label", J_, [R("span", null, J(t(w)("rechnungswerk", "Standard-Steuersatz")), 1), C(R("select", {
						"onUpdate:modelValue": i[16] ||= (e) => u.value = e,
						class: "input"
					}, [R("option", Y_, J(t(w)("rechnungswerk", "— keine Vorgabe —")), 1), (X(!0), B(T, null, Y(t(ql), (e) => (X(), B("option", {
						key: e,
						value: String(e)
					}, J(t(uu)(e)), 9, X_))), 128))], 512), [[we, u.value]])])]),
					R("label", Z_, [R("span", null, J(t(w)("rechnungswerk", "Notiz (intern, nicht auf der Rechnung)")), 1), C(R("textarea", {
						"onUpdate:modelValue": i[17] ||= (e) => c.note = e,
						class: "input",
						rows: "2"
					}, null, 512), [[F, c.note]])])
				]),
				R("div", Q_, [q(t(U), { onClick: i[18] ||= (e) => r.$emit("close") }, {
					default: _(() => [G(J(t(w)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), q(t(U), {
					variant: "primary",
					disabled: e.saving || !p.value,
					onClick: g
				}, {
					default: _(() => [G(J(t(w)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-7914d0dc"]]), ev = { class: "rw-view" }, tv = { class: "rw-view__head" }, nv = { class: "rw-view__actions" }, rv = {
	key: 2,
	class: "rw-table-wrap"
}, iv = { class: "rw-table" }, av = ["onClick"], ov = { class: "rw-muted" }, sv = {
	key: 0,
	class: "rw-muted"
}, cv = { class: "rw-col-actions" }, lv = { class: "rw-actions" }, uv = { class: "rw-import" }, dv = { class: "rw-muted" }, fv = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "CustomersView",
	setup(e) {
		let r = Hd(), i = v(!1), a = v(null), o = v(null), s = v(null), c = v(!1), l = v(""), u = v(""), d = v(!1), f = I(() => r.customers.filter((e) => e.id !== a.value?.id).map((e) => e.customerNumber.trim().toLowerCase()));
		function p(e, t) {
			u.value = e.message ?? t, console.error("[rechnungswerk] customers:", e);
		}
		Fe(() => {
			r.fetchAll().catch((e) => p(e, w("rechnungswerk", "Laden fehlgeschlagen")));
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
		function ee(e) {
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
		async function y(e) {
			u.value = "", d.value = !0;
			try {
				a.value ? await r.update(a.value.id, e) : await r.create(e), i.value = !1, o.value = null;
			} catch (e) {
				p(e, w("rechnungswerk", "Speichern fehlgeschlagen"));
			} finally {
				d.value = !1;
			}
		}
		function b(e) {
			s.value = e;
		}
		async function x() {
			let e = s.value;
			if (s.value = null, e) {
				u.value = "";
				try {
					await r.remove(e.id);
				} catch (e) {
					p(e, w("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, p) => (X(), B("div", ev, [
			R("div", tv, [R("h2", null, J(t(w)("rechnungswerk", "Kunden")), 1), R("div", nv, [q(t(U), { onClick: g }, {
				icon: _(() => [q(g_, { size: 20 })]),
				default: _(() => [G(" " + J(t(w)("rechnungswerk", "Aus Kontakten importieren")), 1)]),
				_: 1
			}), q(t(U), {
				variant: "primary",
				onClick: m
			}, {
				icon: _(() => [q(cc, { size: 20 })]),
				default: _(() => [G(" " + J(t(w)("rechnungswerk", "Neuer Kunde")), 1)]),
				_: 1
			})])]),
			u.value ? (X(), M(t($), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : n("", !0),
			!t(r).loading && t(r).customers.length === 0 ? (X(), M(t(ze), {
				key: 1,
				name: t(w)("rechnungswerk", "Noch keine Kunden"),
				description: t(w)("rechnungswerk", "Lege Kunden an oder übernimm sie aus deinen Nextcloud-Kontakten, um sie schnell in Rechnungen auszuwählen.")
			}, {
				icon: _(() => [q(Ga, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(r).customers.length > 0 ? (X(), B("div", rv, [R("table", iv, [R("thead", null, [R("tr", null, [
				R("th", null, J(t(w)("rechnungswerk", "Kundennr.")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Kunde")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Ort")), 1),
				p[5] ||= R("th", { class: "num" }, null, -1)
			])]), R("tbody", null, [(X(!0), B(T, null, Y(t(r).customers, (e) => (X(), B("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => h(e)
			}, [
				R("td", ov, J(e.customerNumber), 1),
				R("td", null, [G(J(e.name) + " ", 1), e.contactPerson || e.vatId ? (X(), B("div", sv, J([e.contactPerson, e.vatId].filter(Boolean).join(" · ")), 1)) : n("", !0)]),
				R("td", null, J([e.postalCode, e.city].filter(Boolean).join(" ")), 1),
				R("td", cv, [R("div", lv, [q(t(U), {
					variant: "tertiary",
					"aria-label": t(w)("rechnungswerk", "Löschen"),
					title: t(w)("rechnungswerk", "Löschen"),
					onClick: K((t) => b(e), ["stop"])
				}, {
					icon: _(() => [q($u, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, av))), 128))])])])) : n("", !0),
			q($_, {
				open: i.value,
				customer: a.value,
				saving: d.value,
				takenNumbers: f.value,
				prefill: o.value,
				onClose: p[0] ||= (e) => i.value = !1,
				onSave: y
			}, null, 8, [
				"open",
				"customer",
				"saving",
				"takenNumbers",
				"prefill"
			]),
			c.value ? (X(), M(t(Pe), {
				key: 3,
				name: t(w)("rechnungswerk", "Aus Nextcloud-Kontakten übernehmen"),
				onKeydown: p[2] ||= D((e) => t(Ts)(e, () => c.value = !1), ["esc"]),
				onClose: p[3] ||= (e) => c.value = !1
			}, {
				default: _(() => [R("div", uv, [R("p", dv, J(t(w)("rechnungswerk", "Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.")), 1), q(jd, {
					modelValue: l.value,
					"onUpdate:modelValue": p[1] ||= (e) => l.value = e,
					onSelect: ee
				}, null, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["name"])) : n("", !0),
			q(Vf, {
				open: s.value !== null,
				name: t(w)("rechnungswerk", "Kunde löschen"),
				message: s.value ? t(w)("rechnungswerk", "„{name}“ wirklich löschen?", { name: s.value.name }) : "",
				confirmLabel: t(w)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: p[4] ||= (e) => s.value = null,
				onConfirm: x
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-1eff74a5"]]), pv = {
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
}, mv = ["aria-hidden", "aria-label"], hv = [
	"fill",
	"width",
	"height"
], gv = { key: 0 };
function _v(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon content-save-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", gv, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" }, null, -1)], 8, hv))], 16, mv);
}
var vv = /*#__PURE__*/ Z(pv, [["render", _v]]), yv = { class: "rw-view rw-view--narrow" }, bv = {
	key: 2,
	class: "rw-section"
}, xv = { class: "rw-hint" }, Sv = { class: "rw-form-row" }, Cv = { class: "rw-field" }, wv = { class: "rw-field" }, Tv = { class: "rw-field" }, Ev = {
	key: 3,
	class: "rw-action-bar"
}, Dv = /* @__PURE__ */ H({
	__name: "MyContactView",
	setup(e) {
		let r = v(null), i = v(""), a = v(""), o = v(!1);
		Fe(async () => {
			try {
				r.value = await Pp();
			} catch (e) {
				i.value = e.message ?? w("rechnungswerk", "Laden fehlgeschlagen");
			}
		});
		async function s() {
			i.value = "";
			try {
				let e = await Td();
				r.value = {
					person: e.person,
					phone: e.phone,
					email: e.email
				};
			} catch (e) {
				i.value = e.message ?? w("rechnungswerk", "Nextcloud-Konto konnte nicht geladen werden.");
			}
		}
		async function c() {
			if (r.value) {
				i.value = "", a.value = "", o.value = !0;
				try {
					r.value = await Fp(r.value), a.value = w("rechnungswerk", "Gespeichert.");
				} catch (e) {
					i.value = e.message ?? w("rechnungswerk", "Speichern fehlgeschlagen");
				} finally {
					o.value = !1;
				}
			}
		}
		return (e, l) => (X(), B("div", yv, [
			R("h2", null, J(t(w)("rechnungswerk", "Mein Kontakt")), 1),
			i.value ? (X(), M(t($), {
				key: 0,
				type: "error",
				text: i.value
			}, null, 8, ["text"])) : n("", !0),
			a.value ? (X(), M(t($), {
				key: 1,
				type: "success",
				text: a.value
			}, null, 8, ["text"])) : n("", !0),
			r.value ? (X(), B("section", bv, [
				R("h3", null, J(t(w)("rechnungswerk", "Mein Verkäufer-Ansprechpartner")), 1),
				R("p", xv, J(t(w)("rechnungswerk", "Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.")), 1),
				R("div", Sv, [
					R("label", Cv, [R("span", null, J(t(w)("rechnungswerk", "Name")), 1), C(R("input", {
						"onUpdate:modelValue": l[0] ||= (e) => r.value.person = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, r.value.person]])]),
					R("label", wv, [R("span", null, J(t(w)("rechnungswerk", "Telefon")), 1), C(R("input", {
						"onUpdate:modelValue": l[1] ||= (e) => r.value.phone = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, r.value.phone]])]),
					R("label", Tv, [R("span", null, J(t(w)("rechnungswerk", "E-Mail")), 1), C(R("input", {
						"onUpdate:modelValue": l[2] ||= (e) => r.value.email = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[F, r.value.email]])])
				]),
				q(t(U), {
					variant: "tertiary",
					onClick: s
				}, {
					icon: _(() => [q(Za, { size: 20 })]),
					default: _(() => [G(" " + J(t(w)("rechnungswerk", "Aus meinem Nextcloud-Konto übernehmen")), 1)]),
					_: 1
				})
			])) : n("", !0),
			r.value ? (X(), B("div", Ev, [q(t(U), {
				variant: "primary",
				disabled: o.value,
				onClick: c
			}, {
				icon: _(() => [q(vv, { size: 20 })]),
				default: _(() => [G(" " + J(t(w)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])) : n("", !0)
		]));
	}
});
// node_modules/@nextcloud/vue/dist/functions/dialog/index.mjs
function Ov(e, t = {}, n = {}) {
	let { container: r } = n;
	"container" in t && typeof t.container == "string" && (r ??= t.container);
	let i = (typeof r == "string" && document.querySelector(r) || document.body).appendChild(document.createElement("div"));
	return new Promise((n, r) => {
		let a = De(e, {
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
var kv = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-folder-move\" viewBox=\"0 0 24 24\"><path d=\"M14,18V15H10V11H14V8L19,13M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z\" /></svg>", Av = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-folder-multiple\" viewBox=\"0 0 24 24\"><path d=\"M22,4H14L12,2H6A2,2 0 0,0 4,4V16A2,2 0 0,0 6,18H22A2,2 0 0,0 24,16V6A2,2 0 0,0 22,4M2,6H0V11H0V20A2,2 0 0,0 2,22H20V20H2V6Z\" /></svg>", jv = class extends Error {}, Mv = class {
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
		let { default: e } = await import("./FilePicker-qWi4RBGN-BLZD6uIW.chunk.mjs"), t = await Ov(e, {
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
		if (!Array.isArray(t) || t.length === 0) throw new jv("FilePicker: No nodes selected");
		return t;
	}
	async pick() {
		let e = await this.pickNodes();
		return this.multiSelect ? e.map((e) => e.path) : e[0]?.path ?? "/";
	}
}, Nv = class {
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
		return typeof this.buttons == "function" && (He.warn("FilePicker buttons were set to factory, now overwritten with button object."), this.buttons = []), this.buttons.push(e), this;
	}
	setButtonFactory(e) {
		return this.buttons = e, this;
	}
	setType(e) {
		return this.buttons = (t, n) => {
			let r = [], i = t[0]?.displayname || St(n);
			if (e === 1) {
				let e = Ge("Choose");
				t.length === 1 ? e = Ge("Choose {file}", { file: i }) : this.multiSelect && (e = lt("Choose %n file", "Choose %n files", t.length)), r.push({
					callback: () => {},
					label: e,
					variant: "primary"
				});
			}
			return (e === 4 || e === 3) && r.push({
				callback: () => {},
				label: i ? Ge("Copy to {target}", { target: i }) : Ge("Copy"),
				icon: Av,
				variant: e === 3 ? "primary" : "secondary"
			}), (e === 4 || e === 2) && r.push({
				callback: () => {},
				label: i ? Ge("Move to {target}", { target: i }) : Ge("Move"),
				icon: kv,
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
		return new Mv(this.title, this.multiSelect, this.mimeTypeFilter, this.directoriesAllowed, this.noMenu, this.buttons, this.path, this.filter, this.canPick, this.container, this.disabledNavigation);
	}
};
function Pv(e) {
	return new Nv(e);
}
// node_modules/@ckpack/vue-color/libs/style-inject.es-746bb8ed.js
function Fv(e, t) {
	t === void 0 && (t = {});
	var n = t.insertAt;
	if (e && typeof document < "u") {
		var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
		i.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
	}
}
// node_modules/@ckpack/vue-color/libs/utils/compoent.js
var Iv = function(e, t) {
	let { componentPrefix: n = "" } = t || {};
	e.component(`${n}${this.name}`, this);
}, Lv = {}, Rv = {
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
		return { "background-image": `url(${Bv(this.white, this.grey, this.size)})` };
	} }
};
function zv(e, t, n) {
	if (typeof document > "u") return null;
	let r = document.createElement("canvas");
	r.width = r.height = n * 2;
	let i = r.getContext("2d");
	return i ? (i.fillStyle = e, i.fillRect(0, 0, r.width, r.height), i.fillStyle = t, i.fillRect(0, 0, n, n), i.translate(n, n), i.fillRect(0, 0, n, n), r.toDataURL()) : null;
}
function Bv(e, t, n) {
	let r = `${e},${t},${n}`;
	if (Lv[r]) return Lv[r];
	let i = zv(e, t, n);
	return Lv[r] = i, i;
}
function Vv(e, t, n, r, i, a) {
	return X(), B("div", {
		class: "vc-checkerboard",
		style: pt(a.bgStyle)
	}, null, 4);
}
Fv(".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}"), Rv.render = Vv, Rv.__file = "src/components/checkboard/checkboard.vue", Rv.install = Iv;
// node_modules/@ckpack/vue-color/libs/components/alpha/index.js
var Hv = {
	name: "Alpha",
	components: { Checkboard: Rv },
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
}, Uv = { class: "vc-alpha" }, Wv = { class: "vc-alpha-checkboard-wrap" }, Gv = [/* @__PURE__ */ R("div", { class: "vc-alpha-picker" }, null, -1)];
function Kv(e, t, n, r, i, a) {
	let o = l("Checkboard");
	return X(), B("div", Uv, [
		R("div", Wv, [q(o)]),
		R("div", {
			class: "vc-alpha-gradient",
			style: pt({ background: a.gradientColor })
		}, null, 4),
		R("div", {
			ref: "container",
			class: "vc-alpha-container",
			onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
			onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
			onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
		}, [R("div", {
			class: "vc-alpha-pointer",
			style: pt({ left: `${a.colors.a * 100}%` })
		}, Gv, 4)], 544)
	]);
}
Fv(".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), Hv.render = Kv, Hv.__file = "src/components/alpha/alpha.vue", Hv.install = Iv;
// node_modules/@ctrl/tinycolor/dist/module/util.js
function qv(e, t) {
	Yv(e) && (e = "100%");
	var n = Xv(e);
	return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (e = t === 360 ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t)), e);
}
function Jv(e) {
	return Math.min(1, Math.max(0, e));
}
function Yv(e) {
	return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Xv(e) {
	return typeof e == "string" && e.indexOf("%") !== -1;
}
function Zv(e) {
	return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Qv(e) {
	return e <= 1 ? `${Number(e) * 100}%` : e;
}
function $v(e) {
	return e.length === 1 ? "0" + e : String(e);
}
// node_modules/@ctrl/tinycolor/dist/module/conversion.js
function ey(e, t, n) {
	return {
		r: qv(e, 255) * 255,
		g: qv(t, 255) * 255,
		b: qv(n, 255) * 255
	};
}
function ty(e, t, n) {
	e = qv(e, 255), t = qv(t, 255), n = qv(n, 255);
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
function ny(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ry(e, t, n) {
	var r, i, a;
	if (e = qv(e, 360), t = qv(t, 100), n = qv(n, 100), t === 0) i = n, a = n, r = n;
	else {
		var o = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
		r = ny(s, o, e + 1 / 3), i = ny(s, o, e), a = ny(s, o, e - 1 / 3);
	}
	return {
		r: r * 255,
		g: i * 255,
		b: a * 255
	};
}
function iy(e, t, n) {
	e = qv(e, 255), t = qv(t, 255), n = qv(n, 255);
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
function ay(e, t, n) {
	e = qv(e, 360) * 6, t = qv(t, 100), n = qv(n, 100);
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
function oy(e, t, n, r) {
	var i = [
		$v(Math.round(e).toString(16)),
		$v(Math.round(t).toString(16)),
		$v(Math.round(n).toString(16))
	];
	return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function sy(e, t, n, r, i) {
	var a = [
		$v(Math.round(e).toString(16)),
		$v(Math.round(t).toString(16)),
		$v(Math.round(n).toString(16)),
		$v(cy(r))
	];
	return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function cy(e) {
	return Math.round(parseFloat(e) * 255).toString(16);
}
function ly(e) {
	return uy(e) / 255;
}
function uy(e) {
	return parseInt(e, 16);
}
function dy(e) {
	return {
		r: e >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
}
// node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var fy = {
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
function py(e) {
	var t = {
		r: 0,
		g: 0,
		b: 0
	}, n = 1, r = null, i = null, a = null, o = !1, s = !1;
	return typeof e == "string" && (e = vy(e)), typeof e == "object" && (yy(e.r) && yy(e.g) && yy(e.b) ? (t = ey(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : yy(e.h) && yy(e.s) && yy(e.v) ? (r = Qv(e.s), i = Qv(e.v), t = ay(e.h, r, i), o = !0, s = "hsv") : yy(e.h) && yy(e.s) && yy(e.l) && (r = Qv(e.s), a = Qv(e.l), t = ry(e.h, r, a), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Zv(n), {
		ok: o,
		format: e.format || s,
		r: Math.min(255, Math.max(t.r, 0)),
		g: Math.min(255, Math.max(t.g, 0)),
		b: Math.min(255, Math.max(t.b, 0)),
		a: n
	};
}
var my = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", hy = `[\\s|\\(]+(${my})[,|\\s]+(${my})[,|\\s]+(${my})\\s*\\)?`, gy = `[\\s|\\(]+(${my})[,|\\s]+(${my})[,|\\s]+(${my})[,|\\s]+(${my})\\s*\\)?`, _y = {
	CSS_UNIT: new RegExp(my),
	rgb: RegExp("rgb" + hy),
	rgba: RegExp("rgba" + gy),
	hsl: RegExp("hsl" + hy),
	hsla: RegExp("hsla" + gy),
	hsv: RegExp("hsv" + hy),
	hsva: RegExp("hsva" + gy),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function vy(e) {
	if (e = e.trim().toLowerCase(), e.length === 0) return !1;
	var t = !1;
	if (fy[e]) e = fy[e], t = !0;
	else if (e === "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var n = _y.rgb.exec(e);
	return n ? {
		r: n[1],
		g: n[2],
		b: n[3]
	} : (n = _y.rgba.exec(e), n ? {
		r: n[1],
		g: n[2],
		b: n[3],
		a: n[4]
	} : (n = _y.hsl.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3]
	} : (n = _y.hsla.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3],
		a: n[4]
	} : (n = _y.hsv.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3]
	} : (n = _y.hsva.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3],
		a: n[4]
	} : (n = _y.hex8.exec(e), n ? {
		r: uy(n[1]),
		g: uy(n[2]),
		b: uy(n[3]),
		a: ly(n[4]),
		format: t ? "name" : "hex8"
	} : (n = _y.hex6.exec(e), n ? {
		r: uy(n[1]),
		g: uy(n[2]),
		b: uy(n[3]),
		format: t ? "name" : "hex"
	} : (n = _y.hex4.exec(e), n ? {
		r: uy(n[1] + n[1]),
		g: uy(n[2] + n[2]),
		b: uy(n[3] + n[3]),
		a: ly(n[4] + n[4]),
		format: t ? "name" : "hex8"
	} : (n = _y.hex3.exec(e), n ? {
		r: uy(n[1] + n[1]),
		g: uy(n[2] + n[2]),
		b: uy(n[3] + n[3]),
		format: t ? "name" : "hex"
	} : !1)))))))));
}
function yy(e) {
	return !!_y.CSS_UNIT.exec(String(e));
}
// node_modules/@ctrl/tinycolor/dist/module/index.js
var by = function() {
	function e(t, n) {
		if (t === void 0 && (t = ""), n === void 0 && (n = {}), t instanceof e) return t;
		typeof t == "number" && (t = dy(t)), this.originalInput = t;
		var r = py(t);
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
		return this.a = Zv(e), this.roundA = Math.round(100 * this.a) / 100, this;
	}, e.prototype.isMonochrome = function() {
		return this.toHsl().s === 0;
	}, e.prototype.toHsv = function() {
		var e = iy(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			v: e.v,
			a: this.a
		};
	}, e.prototype.toHsvString = function() {
		var e = iy(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
		return this.a === 1 ? `hsv(${t}, ${n}%, ${r}%)` : `hsva(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHsl = function() {
		var e = ty(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			l: e.l,
			a: this.a
		};
	}, e.prototype.toHslString = function() {
		var e = ty(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
		return this.a === 1 ? `hsl(${t}, ${n}%, ${r}%)` : `hsla(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHex = function(e) {
		return e === void 0 && (e = !1), oy(this.r, this.g, this.b, e);
	}, e.prototype.toHexString = function(e) {
		return e === void 0 && (e = !1), "#" + this.toHex(e);
	}, e.prototype.toHex8 = function(e) {
		return e === void 0 && (e = !1), sy(this.r, this.g, this.b, this.a, e);
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
			return `${Math.round(qv(e, 255) * 100)}%`;
		};
		return {
			r: e(this.r),
			g: e(this.g),
			b: e(this.b),
			a: this.a
		};
	}, e.prototype.toPercentageRgbString = function() {
		var e = function(e) {
			return Math.round(qv(e, 255) * 100);
		};
		return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
	}, e.prototype.toName = function() {
		if (this.a === 0) return "transparent";
		if (this.a < 1) return !1;
		for (var e = "#" + oy(this.r, this.g, this.b, !1), t = 0, n = Object.entries(fy); t < n.length; t++) {
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
		return n.l += t / 100, n.l = Jv(n.l), new e(n);
	}, e.prototype.brighten = function(t) {
		t === void 0 && (t = 10);
		var n = this.toRgb();
		return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
	}, e.prototype.darken = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.l -= t / 100, n.l = Jv(n.l), new e(n);
	}, e.prototype.tint = function(e) {
		return e === void 0 && (e = 10), this.mix("white", e);
	}, e.prototype.shade = function(e) {
		return e === void 0 && (e = 10), this.mix("black", e);
	}, e.prototype.desaturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s -= t / 100, n.s = Jv(n.s), new e(n);
	}, e.prototype.saturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s += t / 100, n.s = Jv(n.s), new e(n);
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
function xy(...e) {
	return new by(...e);
}
function Sy(e, t) {
	let n = e && e.a, r;
	r = e && e.hsl ? xy(e.hsl) : e && e.hex && e.hex.length > 0 ? xy(e.hex) : e && e.hsv ? xy(e.hsv) : e && e.rgba ? xy(e.rgba) : e && e.rgb ? xy(e.rgb) : xy(e), r && (r._a === void 0 || r._a === null) && r.setAlpha(n || r.getAlpha());
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
var Cy = {
	model: {
		prop: "modelValue",
		event: "update:modelValue"
	},
	props: ["modelValue"],
	data() {
		return { val: Sy(this.modelValue) };
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
		this.val = Sy(e);
	} },
	methods: {
		colorChange(e, t) {
			this.oldHue = this.colors.hsl.h, this.colors = Sy(e, t || this.oldHue);
		},
		isValidHex(e) {
			return xy(e).isValid;
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
			return xy(e).getAlpha() === 0;
		}
	}
}, wy = {
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
}, Ty = { class: "vc-editable-input" }, Ey = ["aria-labelledby"], Dy = ["id", "for"], Oy = { class: "vc-input__desc" };
function ky(e, t, n, r, i, a) {
	return X(), B("div", Ty, [
		C(R("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.val = e,
			"aria-labelledby": a.labelId,
			class: "vc-input__input",
			onKeydown: t[1] ||= (...e) => a.handleKeyDown && a.handleKeyDown(...e),
			onInput: t[2] ||= (...e) => a.update && a.update(...e)
		}, null, 40, Ey), [[F, a.val]]),
		R("span", {
			id: a.labelId,
			for: n.label,
			class: "vc-input__label"
		}, J(a.labelSpanText), 9, Dy),
		R("span", Oy, J(n.desc), 1)
	]);
}
Fv(".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}"), wy.render = ky, wy.__file = "src/components/editable-input/editable-input.vue", wy.install = Iv;
// node_modules/@ckpack/vue-color/libs/utils/utils.js
function Ay(e, t, n) {
	return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e;
}
// node_modules/@ckpack/vue-color/libs/components/saturation/index.js
var jy = {
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
			let r = n.clientWidth, i = n.clientHeight, a = n.getBoundingClientRect().left + window.pageXOffset, o = n.getBoundingClientRect().top + window.pageYOffset, s = e.pageX || (e.touches ? e.touches[0].pageX : 0), c = e.pageY || (e.touches ? e.touches[0].pageY : 0), l = Ay(s - a, 0, r), u = Ay(c - o, 0, i), d = l / r, f = Ay(-(u / i) + 1, 0, 1);
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
}, My = /*#__PURE__*/ R("div", { class: "vc-saturation--white" }, null, -1), Ny = /*#__PURE__*/ R("div", { class: "vc-saturation--black" }, null, -1), Py = [/* @__PURE__ */ R("div", { class: "vc-saturation-circle" }, null, -1)];
function Fy(e, t, n, r, i, a) {
	return X(), B("div", {
		ref: "container",
		class: "vc-saturation",
		style: pt({ background: a.bgColor }),
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [
		My,
		Ny,
		R("div", {
			class: "vc-saturation-pointer",
			style: pt({
				top: a.pointerTop,
				left: a.pointerLeft
			})
		}, Py, 4)
	], 36);
}
Fv(".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}"), jy.render = Fy, jy.__file = "src/components/saturation/saturation.vue", jy.install = Iv;
// node_modules/@ckpack/vue-color/libs/components/hue/index.js
var Iy = {
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
}, Ly = ["aria-valuenow"], Ry = [/* @__PURE__ */ R("div", { class: "vc-hue-picker" }, null, -1)];
function zy(e, t, n, r, i, a) {
	return X(), B("div", { class: V(["vc-hue", [a.directionClass]]) }, [R("div", {
		ref: "container",
		class: "vc-hue-container",
		role: "slider",
		"aria-valuenow": a.colors.hsl.h,
		"aria-valuemin": "0",
		"aria-valuemax": "360",
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [R("div", {
		class: "vc-hue-pointer",
		style: pt({
			top: a.pointerTop,
			left: a.pointerLeft
		}),
		role: "presentation"
	}, Ry, 4)], 40, Ly)], 2);
}
Fv(".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), Iy.render = zy, Iy.__file = "src/components/hue/hue.vue", Iy.install = Iv;
// node_modules/@ckpack/vue-color/libs/components/chrome/index.js
var By = {
	name: "Chrome",
	components: {
		Saturation: jy,
		Hue: Iy,
		Alpha: Hv,
		EdIn: wy,
		Checkboard: Rv
	},
	mixins: [Cy],
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
}, Vy = { class: "vc-chrome-saturation-wrap" }, Hy = { class: "vc-chrome-body" }, Uy = { class: "vc-chrome-controls" }, Wy = { class: "vc-chrome-color-wrap" }, Gy = ["aria-label"], Ky = { class: "vc-chrome-sliders" }, qy = { class: "vc-chrome-hue-wrap" }, Jy = {
	key: 0,
	class: "vc-chrome-alpha-wrap"
}, Yy = {
	key: 0,
	class: "vc-chrome-fields-wrap"
}, Xy = { class: "vc-chrome-fields" }, Zy = { class: "vc-chrome-field" }, Qy = { class: "vc-chrome-fields" }, $y = { class: "vc-chrome-field" }, eb = { class: "vc-chrome-field" }, tb = { class: "vc-chrome-field" }, nb = {
	key: 0,
	class: "vc-chrome-field"
}, rb = { class: "vc-chrome-fields" }, ib = { class: "vc-chrome-field" }, ab = { class: "vc-chrome-field" }, ob = { class: "vc-chrome-field" }, sb = {
	key: 0,
	class: "vc-chrome-field"
}, cb = { class: "vc-chrome-toggle-icon" }, lb = [/* @__PURE__ */ R("path", {
	fill: "#333",
	d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1)], ub = { class: "vc-chrome-toggle-icon-highlight" };
function db(e, t, r, i, a, o) {
	let s = l("Saturation"), c = l("Checkboard"), u = l("Hue"), d = l("Alpha"), f = l("EdIn");
	return X(), B("div", {
		role: "application",
		"aria-label": "Chrome color picker",
		class: V(["vc-chrome", [r.disableAlpha ? "vc-chrome__disable-alpha" : ""]])
	}, [R("div", Vy, [q(s, {
		value: e.colors,
		onChange: o.childChange
	}, null, 8, ["value", "onChange"])]), R("div", Hy, [R("div", Uy, [R("div", Wy, [R("div", {
		"aria-label": `current color is ${e.colors.hex}`,
		class: "vc-chrome-active-color",
		style: pt({ background: o.activeColor })
	}, null, 12, Gy), r.disableAlpha ? n("v-if", !0) : (X(), M(c, { key: 0 }))]), R("div", Ky, [R("div", qy, [q(u, {
		value: e.colors,
		onChange: o.childChange
	}, null, 8, ["value", "onChange"])]), r.disableAlpha ? n("v-if", !0) : (X(), B("div", Jy, [q(d, {
		value: e.colors,
		onChange: o.childChange
	}, null, 8, ["value", "onChange"])]))])]), r.disableFields ? n("v-if", !0) : (X(), B("div", Yy, [
		C(R("div", Xy, [n(" hex "), R("div", Zy, [o.hasAlpha ? n("v-if", !0) : (X(), M(f, {
			key: 0,
			label: "hex",
			value: e.colors.hex,
			onChange: o.inputChange
		}, null, 8, ["value", "onChange"])), o.hasAlpha ? (X(), M(f, {
			key: 1,
			label: "hex",
			value: e.colors.hex8,
			onChange: o.inputChange
		}, null, 8, ["value", "onChange"])) : n("v-if", !0)])], 512), [[y, a.fieldsIndex === "hex"]]),
		C(R("div", Qy, [
			n(" rgba "),
			R("div", $y, [q(f, {
				label: "r",
				value: e.colors.rgba.r,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			R("div", eb, [q(f, {
				label: "g",
				value: e.colors.rgba.g,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			R("div", tb, [q(f, {
				label: "b",
				value: e.colors.rgba.b,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			r.disableAlpha ? n("v-if", !0) : (X(), B("div", nb, [q(f, {
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
		], 512), [[y, ["rgb", "rgba"].includes(a.fieldsIndex)]]),
		C(R("div", rb, [
			n(" hsla "),
			R("div", ib, [q(f, {
				label: "h",
				value: o.hsl.h,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			R("div", ab, [q(f, {
				label: "s",
				value: o.hsl.s,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			R("div", ob, [q(f, {
				label: "l",
				value: o.hsl.l,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			r.disableAlpha ? n("v-if", !0) : (X(), B("div", sb, [q(f, {
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
		], 512), [[y, ["hsl", "hsla"].includes(a.fieldsIndex)]]),
		n(" btn "),
		R("div", {
			class: "vc-chrome-toggle-btn",
			role: "button",
			"aria-label": "Change another color definition",
			onClick: t[3] ||= (...e) => o.toggleViews && o.toggleViews(...e)
		}, [R("div", cb, [(X(), B("svg", {
			style: {
				width: "24px",
				height: "24px"
			},
			viewBox: "0 0 24 24",
			onMouseover: t[0] ||= (...e) => o.showHighlight && o.showHighlight(...e),
			onMouseenter: t[1] ||= (...e) => o.showHighlight && o.showHighlight(...e),
			onMouseout: t[2] ||= (...e) => o.hideHighlight && o.hideHighlight(...e)
		}, lb, 32))]), C(R("div", ub, null, 512), [[y, a.highlight]])]),
		n(" btn ")
	]))])], 2);
}
// node_modules/@nextcloud/vue/dist/chunks/colors.mjs
Fv(".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}"), By.render = db, By.__file = "src/components/chrome/chrome.vue", By.install = Iv, Ae(Ct);
var fb = class {
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
}, pb = new fb(182, 70, 157, L("Purple")), mb = new fb(221, 203, 85, L("Gold")), hb = new fb(0, 130, 201, L("Nextcloud blue")), gb = new fb(0, 0, 0, L("Black")), _b = new fb(255, 255, 255, L("White")), vb = [
	pb,
	new fb(191, 103, 139, L("Rosy brown")),
	new fb(201, 136, 121, L("Feldspar")),
	new fb(211, 169, 103, L("Whiskey")),
	mb,
	new fb(165, 184, 114, L("Olivine")),
	new fb(110, 166, 143, L("Acapulco")),
	new fb(55, 148, 172, L("Boston Blue")),
	hb,
	new fb(45, 115, 190, L("Mariner")),
	new fb(91, 100, 179, L("Blue Violet")),
	new fb(136, 85, 168, L("Deluge"))
];
// node_modules/@nextcloud/vue/dist/chunks/NcColorPicker.mjs
Ae(j);
var yb = ["aria-label"], bb = {
	key: 0,
	class: "color-picker__simple"
}, xb = [
	"aria-label",
	"name",
	"checked",
	"onClick"
], Sb = ["title"], Cb = [
	"aria-label",
	"name",
	"checked"
], wb = {
	key: 0,
	class: "color-picker__navigation"
}, Tb = /* @__PURE__ */ At(/* @__PURE__ */ H({
	__name: "NcColorPicker",
	props: /* @__PURE__ */ kt({
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
	emits: /* @__PURE__ */ kt(["submit", "closed"], ["update:modelValue", "update:open"]),
	setup(e, { emit: r }) {
		let i = st(e, "modelValue"), a = st(e, "open"), o = e, c = r, l = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i, u = g(), f = v(!1), p = I(() => {
			let e = o.palette;
			for (let t of e) if (typeof t == "string" && !t.match(l) || typeof t == "object" && !t.color?.match(l)) {
				ot.error("[NcColorPicker] Invalid palette passed", { color: t }), e = [];
				break;
			}
			return e.length === 0 && (e = o.clearable ? [
				...vb,
				gb,
				_b
			] : [...vb]), e.map((e) => ({
				color: typeof e == "object" ? e.color : e,
				name: typeof e == "object" && e.name ? e.name : L("A color with a HEX value {hex}", { hex: typeof e == "string" ? e : e.color })
			}));
		});
		function m(e) {
			c("submit", i.value), e(), f.value = !1;
		}
		function h(e) {
			e = typeof e == "string" ? e : e.color, o.clearable && i.value === e ? i.value = void 0 : i.value = e;
		}
		function y(e) {
			i.value = e.hex;
		}
		function b(e) {
			return x(e) > .5 ? gb.color : _b.color;
		}
		function x(e) {
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
		return (r, o) => (X(), M(t(d), {
			shown: a.value,
			"onUpdate:shown": o[3] ||= (e) => a.value = e,
			container: e.container,
			popupRole: "dialog",
			onApplyHide: o[4] ||= (e) => c("closed")
		}, {
			trigger: _((e) => [P(r.$slots, "default", Dt(ht(e)), void 0, !0)]),
			default: _((r) => [R("div", {
				role: "dialog",
				class: V(["color-picker", {
					"color-picker--advanced-fields": f.value && e.advancedFields,
					"color-picker--clearable": e.clearable
				}]),
				"aria-modal": "true",
				"aria-label": t(L)("Color picker")
			}, [q(s, {
				name: "slide",
				mode: "out-in"
			}, {
				default: _(() => [f.value ? (X(), M(t(By), {
					key: 1,
					class: "color-picker__advanced",
					disableAlpha: "",
					disableFields: !e.advancedFields,
					modelValue: i.value ?? "#000000",
					"onUpdate:modelValue": y
				}, null, 8, ["disableFields", "modelValue"])) : (X(), B("div", bb, [(X(!0), B(T, null, Y(p.value, ({ color: e, name: r }, a) => (X(), B("label", {
					key: a,
					class: V(["color-picker__simple-color-circle", { "color-picker__simple-color-circle--active": e === i.value }]),
					style: pt({
						backgroundColor: e,
						color: b(e)
					})
				}, [e === i.value ? (X(), M(t(We), {
					key: 0,
					path: t(Se)
				}, null, 8, ["path"])) : n("", !0), R("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": r,
					name: `color-picker-${t(u)}`,
					checked: e === i.value,
					onClick: (t) => h(e)
				}, null, 8, xb)], 6))), 128)), e.clearable ? (X(), B("label", {
					key: 0,
					class: "color-picker__clear",
					title: t(L)("No color")
				}, [q(t(We), {
					size: i.value ? 28 : 34,
					path: t(ee)
				}, null, 8, ["size", "path"]), R("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": t(L)("No color"),
					name: `color-picker-${t(u)}`,
					checked: !i.value,
					onClick: o[0] ||= (e) => i.value = void 0
				}, null, 8, Cb)], 8, Sb)) : n("", !0)]))]),
				_: 1
			}), e.paletteOnly ? n("", !0) : (X(), B("div", wb, [f.value ? (X(), M(t(U), {
				key: 0,
				"aria-label": t(L)("Back"),
				title: t(L)("Back"),
				variant: "tertiary",
				onClick: o[1] ||= (e) => f.value = !1
			}, {
				icon: _(() => [q(t(We), {
					directional: "",
					path: t(Te)
				}, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])) : (X(), M(t(U), {
				key: 1,
				"aria-label": t(L)("More options"),
				title: t(L)("More options"),
				variant: "tertiary",
				onClick: o[2] ||= (e) => f.value = !0
			}, {
				icon: _(() => [q(t(We), { path: t(bt) }, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])), q(t(U), {
				variant: "primary",
				onClick: (e) => m(r.hide)
			}, {
				default: _(() => [G(J(t(L)("Choose")), 1)]),
				_: 1
			}, 8, ["onClick"])]))], 10, yb)]),
			_: 3
		}, 8, ["shown", "container"]));
	}
}), [["__scopeId", "data-v-fab7cffe"]]), Eb = ["aria-label"], Db = { class: "rw-subnav__group" }, Ob = ["aria-current", "onClick"], kb = /* @__PURE__ */ H({
	__name: "RwSettingsNav",
	props: {
		groups: {},
		modelValue: {},
		ariaLabel: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: n }) {
		let r = n;
		return (n, i) => (X(), B("nav", {
			class: "rw-subnav",
			"aria-label": e.ariaLabel || t(w)("rechnungswerk", "Bereiche")
		}, [(X(!0), B(T, null, Y(e.groups, (t) => (X(), B(T, { key: t.label }, [R("div", Db, J(t.label), 1), (X(!0), B(T, null, Y(t.items, (t) => (X(), B("button", {
			key: t.key,
			type: "button",
			class: V(["rw-subnav__item", { "rw-subnav__item--active": e.modelValue === t.key }]),
			"aria-current": e.modelValue === t.key ? "page" : void 0,
			onClick: (e) => r("update:modelValue", t.key)
		}, [(X(), M(be(t.icon), { size: 18 })), G(" " + J(t.label), 1)], 10, Ob))), 128))], 64))), 128))], 8, Eb));
	}
}), Ab = {
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
}, jb = ["aria-hidden", "aria-label"], Mb = [
	"fill",
	"width",
	"height"
], Nb = { key: 0 };
function Pb(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon office-building-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Nb, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" }, null, -1)], 8, Mb))], 16, jb);
}
var Fb = /*#__PURE__*/ Z(Ab, [["render", Pb]]), Ib = {
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
}, Lb = ["aria-hidden", "aria-label"], Rb = [
	"fill",
	"width",
	"height"
], zb = { key: 0 };
function Bb(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon bank-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", zb, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" }, null, -1)], 8, Rb))], 16, Lb);
}
var Vb = /*#__PURE__*/ Z(Ib, [["render", Bb]]), Hb = {
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
}, Ub = ["aria-hidden", "aria-label"], Wb = [
	"fill",
	"width",
	"height"
], Gb = { key: 0 };
function Kb(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon palette-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Gb, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z" }, null, -1)], 8, Wb))], 16, Ub);
}
var qb = /*#__PURE__*/ Z(Hb, [["render", Kb]]), Jb = {
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
}, Yb = ["aria-hidden", "aria-label"], Xb = [
	"fill",
	"width",
	"height"
], Zb = { key: 0 };
function Qb(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-sign-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Zb, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z" }, null, -1)], 8, Xb))], 16, Yb);
}
var $b = /*#__PURE__*/ Z(Jb, [["render", Qb]]), ex = {
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
}, tx = ["aria-hidden", "aria-label"], nx = [
	"fill",
	"width",
	"height"
], rx = { key: 0 };
function ix(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon text-box-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", rx, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" }, null, -1)], 8, nx))], 16, tx);
}
var ax = /*#__PURE__*/ Z(ex, [["render", ix]]), ox = {
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
], lx = { key: 0 };
function ux(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon percent-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", lx, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5M7,4A3,3 0 0,0 4,7A3,3 0 0,0 7,10A3,3 0 0,0 10,7A3,3 0 0,0 7,4M17,14A3,3 0 0,0 14,17A3,3 0 0,0 17,20A3,3 0 0,0 20,17A3,3 0 0,0 17,14Z" }, null, -1)], 8, cx))], 16, sx);
}
var dx = /*#__PURE__*/ Z(ox, [["render", ux]]), fx = {
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
}, px = ["aria-hidden", "aria-label"], mx = [
	"fill",
	"width",
	"height"
], hx = { key: 0 };
function gx(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon credit-card-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", hx, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, null, -1)], 8, mx))], 16, px);
}
var _x = /*#__PURE__*/ Z(fx, [["render", gx]]), vx = {
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
}, yx = ["aria-hidden", "aria-label"], bx = [
	"fill",
	"width",
	"height"
], xx = { key: 0 };
function Sx(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon email-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", xx, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" }, null, -1)], 8, bx))], 16, yx);
}
var Cx = /*#__PURE__*/ Z(vx, [["render", Sx]]), wx = {
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
}, Tx = ["aria-hidden", "aria-label"], Ex = [
	"fill",
	"width",
	"height"
], Dx = { key: 0 };
function Ox(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon server-network-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Dx, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z" }, null, -1)], 8, Ex))], 16, Tx);
}
var kx = /*#__PURE__*/ Z(wx, [["render", Ox]]), Ax = {
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
}, jx = ["aria-hidden", "aria-label"], Mx = [
	"fill",
	"width",
	"height"
], Nx = { key: 0 };
function Px(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon email-sync-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Nx, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M3 4C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H13.5A6.5 6.5 0 0 1 13 18H3V8L11 13L19 8V11A6.5 6.5 0 0 1 19.5 11A6.5 6.5 0 0 1 21 11.18V6C21 4.9 20.1 4 19 4H3M3 6H19L11 11L3 6M19 12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5V12M15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29Z" }, null, -1)], 8, Mx))], 16, jx);
}
var Fx = /*#__PURE__*/ Z(Ax, [["render", Px]]), Ix = {
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
}, Lx = ["aria-hidden", "aria-label"], Rx = [
	"fill",
	"width",
	"height"
], zx = { key: 0 };
function Bx(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon folder-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", zx, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" }, null, -1)], 8, Rx))], 16, Lx);
}
var Vx = /*#__PURE__*/ Z(Ix, [["render", Bx]]), Hx = {
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
}, Ux = ["aria-hidden", "aria-label"], Wx = [
	"fill",
	"width",
	"height"
], Gx = { key: 0 };
function Kx(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon shield-account-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Gx, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z" }, null, -1)], 8, Wx))], 16, Ux);
}
var qx = /*#__PURE__*/ Z(Hx, [["render", Kx]]), Jx = {
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
}, Yx = ["aria-hidden", "aria-label"], Xx = [
	"fill",
	"width",
	"height"
], Zx = { key: 0 };
function Qx(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon key-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", Zx, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z" }, null, -1)], 8, Xx))], 16, Yx);
}
var $x = /*#__PURE__*/ Z(Jx, [["render", Qx]]), eS = {
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
}, tS = ["aria-hidden", "aria-label"], nS = [
	"fill",
	"width",
	"height"
], rS = { key: 0 };
function iS(e, t, r, i, a, o) {
	return X(), B("span", z(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon robot-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(X(), B("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (X(), B("title", rS, J(r.title), 1)) : n("", !0), t[1] ||= R("path", { d: "M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" }, null, -1)], 8, nS))], 16, tS);
}
var aS = /*#__PURE__*/ Z(eS, [["render", iS]]), oS = () => ys("/api-keys"), sS = (e, t, n = null) => Q("/api-keys", { data: {
	name: e,
	scopes: t,
	rateLimit: n
} }), cS = (e) => Ss(`/api-keys/${e}`), lS = { class: "rw-api-keys" }, uS = { class: "rw-hint" }, dS = { class: "rw-api-keys__plaintext" }, fS = {
	key: 2,
	class: "rw-api-keys__table"
}, pS = { class: "rw-api-keys__actions-head" }, mS = { class: "rw-api-keys__scopes" }, hS = {
	key: 3,
	class: "rw-hint"
}, gS = { class: "rw-api-keys__modal" }, _S = { class: "field" }, vS = ["placeholder"], yS = { class: "rw-hint" }, bS = { class: "field" }, xS = ["value"], SS = { class: "field" }, CS = ["placeholder"], wS = { class: "rw-api-keys__actions" }, TS = 1e4, ES = /*#__PURE__*/ Z(/* @__PURE__ */ H({
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
			"invoices:create": w("rechnungswerk", "Rechnungen anlegen"),
			"invoices:commit": w("rechnungswerk", "Festschreiben"),
			"invoices:send": w("rechnungswerk", "Versenden"),
			"invoices:pay": w("rechnungswerk", "Als bezahlt markieren"),
			"invoices:cancel": w("rechnungswerk", "Stornieren"),
			"invoices:read": w("rechnungswerk", "Rechnungen lesen"),
			"invoices:pdf": w("rechnungswerk", "PDF abrufen"),
			"invoices:delete": w("rechnungswerk", "Eigene Entwürfe löschen")
		}, a = v([]), o = v(!1), s = v(""), c = v([]), l = v(""), u = v(!1), d = v(""), f = v(""), p = v(""), m = v(!1), h = v(null), g = v(null), ee = I(() => s.value.trim() !== "" && c.value.length > 0);
		function y(e) {
			return i[e] ?? e;
		}
		function b(e) {
			return e.map(y);
		}
		function x(e) {
			return (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString();
		}
		async function S() {
			try {
				a.value = await oS(), d.value = "";
			} catch (e) {
				d.value = e.message ?? w("rechnungswerk", "API-Schlüssel konnten nicht geladen werden.");
			}
		}
		async function ne() {
			u.value = !0, f.value = "";
			try {
				let e = l.value === "" ? null : Number(l.value), t = await sS(s.value.trim(), [...c.value], e);
				p.value = t.plaintext, m.value = !1, o.value = !1, s.value = "", c.value = [], l.value = "", await S();
			} catch (e) {
				f.value = e.message ?? w("rechnungswerk", "Anlegen fehlgeschlagen.");
			} finally {
				u.value = !1;
			}
		}
		async function re() {
			let e = h.value;
			if (h.value = null, e !== null) {
				u.value = !0;
				try {
					await cS(e), await S();
				} catch (e) {
					d.value = e.message ?? w("rechnungswerk", "Widerrufen fehlgeschlagen.");
				} finally {
					u.value = !1;
				}
			}
		}
		async function E() {
			try {
				await navigator.clipboard.writeText(p.value);
			} catch {}
			m.value = !0;
		}
		return Fe(S), (e, i) => (X(), B("div", lS, [
			R("p", uS, J(t(w)("rechnungswerk", "Ein API-Schlüssel erlaubt anderen Programmen Zugriff auf diese RechnungsWerk-Instanz, ohne eine Anmeldung. Der Schlüssel wird nur einmalig angezeigt.")), 1),
			d.value ? (X(), M(t($), {
				key: 0,
				type: "error",
				text: d.value
			}, null, 8, ["text"])) : n("", !0),
			p.value ? (X(), M(t($), {
				key: 1,
				type: "success"
			}, {
				default: _(() => [
					R("p", null, J(t(w)("rechnungswerk", "Das ist dein neuer API-Schlüssel:")), 1),
					R("p", null, [R("code", dS, J(p.value), 1)]),
					R("p", null, J(t(w)("rechnungswerk", "Bitte bewahre ihn sicher auf. Er wird nie wieder angezeigt.")), 1),
					q(t(U), { onClick: E }, {
						default: _(() => [G(J(m.value ? t(w)("rechnungswerk", "Kopiert") : t(w)("rechnungswerk", "Kopieren")), 1)]),
						_: 1
					})
				]),
				_: 1
			})) : n("", !0),
			a.value.length > 0 ? (X(), B("table", fS, [R("thead", null, [R("tr", null, [
				R("th", null, J(t(w)("rechnungswerk", "Name")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Schlüssel")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Rechte")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Anfragen pro Minute")), 1),
				R("th", null, J(t(w)("rechnungswerk", "Zuletzt verwendet")), 1),
				R("th", null, [R("span", pS, J(t(w)("rechnungswerk", "Aktionen")), 1)])
			])]), R("tbody", null, [(X(!0), B(T, null, Y(a.value, (e) => (X(), B("tr", {
				key: e.id,
				class: V({ "rw-api-keys__row--revoked": e.revokedAt !== null })
			}, [
				R("td", null, J(e.name), 1),
				R("td", null, [R("code", null, J(e.keyPrefix) + "…", 1)]),
				R("td", null, [R("span", mS, J(b(e.scopes).join(", ")), 1)]),
				R("td", null, J(e.rateLimit ?? t(w)("rechnungswerk", "Standard (60)")), 1),
				R("td", null, [e.revokedAt === null ? e.lastUsedAt ? (X(), B(T, { key: 1 }, [G(J(x(e.lastUsedAt)), 1)], 64)) : (X(), B(T, { key: 2 }, [G(J(t(w)("rechnungswerk", "nie")), 1)], 64)) : (X(), B(T, { key: 0 }, [G(J(t(w)("rechnungswerk", "Widerrufen")), 1)], 64))]),
				R("td", null, [e.revokedAt === null ? (X(), M(t(U), {
					key: 0,
					variant: "tertiary",
					disabled: u.value,
					onClick: (t) => h.value = e.id
				}, {
					default: _(() => [G(J(t(w)("rechnungswerk", "Widerrufen")), 1)]),
					_: 1
				}, 8, ["disabled", "onClick"])) : n("", !0)])
			], 2))), 128))])])) : (X(), B("p", hS, J(t(w)("rechnungswerk", "Noch kein API-Schlüssel angelegt.")), 1)),
			q(t(U), {
				variant: "primary",
				disabled: u.value,
				onClick: i[0] ||= (e) => o.value = !0
			}, {
				default: _(() => [G(J(t(w)("rechnungswerk", "API-Schlüssel anlegen")), 1)]),
				_: 1
			}, 8, ["disabled"]),
			o.value ? (X(), M(t(Pe), {
				key: 4,
				name: t(w)("rechnungswerk", "API-Schlüssel anlegen"),
				onClose: i[5] ||= (e) => o.value = !1
			}, {
				default: _(() => [R("div", gS, [
					R("h3", null, J(t(w)("rechnungswerk", "API-Schlüssel anlegen")), 1),
					R("label", _S, [
						R("span", null, J(t(w)("rechnungswerk", "Name")), 1),
						C(R("input", {
							ref_key: "nameInput",
							ref: g,
							"onUpdate:modelValue": i[1] ||= (e) => s.value = e,
							class: "input",
							type: "text",
							maxlength: "64",
							placeholder: t(w)("rechnungswerk", "z. B. WerkPlus")
						}, null, 8, vS), [[F, s.value]]),
						R("span", yS, J(t(w)("rechnungswerk", "Der Name ist im Protokoll für alle App-Nutzer sichtbar.")), 1)
					]),
					R("div", bS, [R("span", null, J(t(w)("rechnungswerk", "Rechte")), 1), (X(), B(T, null, Y(r, (e) => R("label", {
						key: e,
						class: "rw-api-keys__scope"
					}, [C(R("input", {
						"onUpdate:modelValue": i[2] ||= (e) => c.value = e,
						type: "checkbox",
						value: e
					}, null, 8, xS), [[te, c.value]]), G(" " + J(y(e)), 1)])), 64))]),
					R("label", SS, [R("span", null, J(t(w)("rechnungswerk", "Anfragen pro Minute")), 1), C(R("input", {
						"onUpdate:modelValue": i[3] ||= (e) => l.value = e,
						class: "input",
						type: "number",
						min: "1",
						max: TS,
						placeholder: t(w)("rechnungswerk", "Standard: 60")
					}, null, 8, CS), [[F, l.value]])]),
					f.value ? (X(), M(t($), {
						key: 0,
						type: "error",
						text: f.value
					}, null, 8, ["text"])) : n("", !0),
					R("div", wS, [q(t(U), { onClick: i[4] ||= (e) => o.value = !1 }, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Abbrechen")), 1)]),
						_: 1
					}), q(t(U), {
						variant: "primary",
						disabled: u.value || !ee.value,
						onClick: ne
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Anlegen")), 1)]),
						_: 1
					}, 8, ["disabled"])])
				])]),
				_: 1
			}, 8, ["name"])) : n("", !0),
			q(Vf, {
				open: h.value !== null,
				name: t(w)("rechnungswerk", "API-Schlüssel widerrufen"),
				message: t(w)("rechnungswerk", "Programme mit diesem Schlüssel verlieren sofort den Zugang. Widerrufen lässt sich ein Schlüssel nicht rückgängig machen. Fortfahren?"),
				confirmLabel: t(w)("rechnungswerk", "Widerrufen"),
				onClose: i[6] ||= (e) => h.value = null,
				onConfirm: re
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-a2a88d6b"]]), DS = () => ys("/license"), OS = (e) => xs("/license", { key: e }), kS = () => Q("/license/trial", {}), AS = () => Q("/license/refresh", {}), jS = () => Ss("/license"), MS = { class: "rw-werkplus" }, NS = { class: "rw-hint" }, PS = { key: 0 }, FS = { key: 1 }, IS = {
	key: 5,
	class: "rw-werkplus__facts"
}, LS = { class: "rw-field" }, RS = ["placeholder"], zS = { class: "rw-werkplus__actions" }, BS = { class: "rw-werkplus__privacy" }, VS = { class: "rw-werkplus__label" }, HS = { class: "rw-hint" }, US = { class: "rw-hint" }, WS = { class: "rw-hint" }, GS = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "WerkPlusSettings",
	setup(e) {
		let r = v(null), i = v(""), a = v(!1), o = v(""), s = v(""), c = v(""), l = v(""), u = v(!1), d = v(!1), f = ["TRIAL_ALREADY_USED"], p = I(() => r.value?.state === "valid" || r.value?.state === "grace"), m = I(() => r.value?.tier === "werkplus" ? "WerkPlus" : w("rechnungswerk", "Frei")), h = I(() => {
			let e = r.value;
			if (!e) return null;
			switch (e.state) {
				case "valid": return {
					type: "success",
					text: w("rechnungswerk", "WerkPlus ist aktiv.")
				};
				case "grace": return {
					type: "warning",
					text: w("rechnungswerk", "Die Lizenz ist abgelaufen und konnte noch nicht erneuert werden. Die Funktionen bleiben bis {date} erhalten.", { date: e.graceUntil ? g(e.graceUntil) : "" })
				};
				case "expired": return {
					type: "error",
					text: w("rechnungswerk", "Die Lizenz ist abgelaufen. RechnungsWerk arbeitet im freien Umfang weiter.")
				};
				case "invalid": return {
					type: "error",
					text: w("rechnungswerk", "Der gespeicherte Lizenznachweis ist ungültig. Bitte prüfe die Lizenz erneut.")
				};
				default: return null;
			}
		});
		function g(e) {
			return new Date(e).toLocaleDateString();
		}
		function ee(e) {
			return new Date(e).toLocaleString();
		}
		async function y() {
			try {
				r.value = await DS(), o.value = "";
			} catch (e) {
				o.value = e.message ?? w("rechnungswerk", "Lizenzstatus konnte nicht geladen werden.");
			}
		}
		async function b(e) {
			a.value = !0, s.value = "", c.value = "";
			try {
				r.value = await e(), i.value = "";
			} catch (e) {
				let { message: t, code: n } = e, r = t ?? w("rechnungswerk", "WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut.");
				n && f.includes(n) ? c.value = r : s.value = r, await y();
			} finally {
				a.value = !1;
			}
		}
		function x() {
			return l.value = "", b(() => OS(i.value.trim()));
		}
		function te() {
			return d.value = !1, l.value = "", b(async () => {
				let e = await kS();
				return l.value = e.key, e.status;
			});
		}
		function S() {
			return b(AS);
		}
		function ne() {
			return u.value = !1, l.value = "", b(jS);
		}
		return Fe(y), (e, f) => (X(), B("div", MS, [
			R("p", NS, J(t(w)("rechnungswerk", "Mit einem WerkPlus-Schlüssel schaltet RechnungsWerk zusätzliche Funktionen frei. Ohne Schlüssel bleibt alles, wie es ist.")), 1),
			o.value ? (X(), M(t($), {
				key: 0,
				type: "error",
				text: o.value
			}, null, 8, ["text"])) : n("", !0),
			r.value ? (X(), B(T, { key: 1 }, [
				h.value ? (X(), M(t($), {
					key: 0,
					type: h.value.type,
					text: h.value.text
				}, null, 8, ["type", "text"])) : n("", !0),
				l.value ? (X(), M(t($), {
					key: 1,
					type: "success",
					class: "rw-werkplus__trial-key"
				}, {
					default: _(() => [
						p.value ? (X(), B("p", PS, J(t(w)("rechnungswerk", "Der Testzeitraum läuft. Das ist dein WerkPlus-Schlüssel:")), 1)) : (X(), B("p", FS, J(t(w)("rechnungswerk", "Der Testzeitraum ist gestartet, die Lizenz konnte aber noch nicht geprüft werden. Mit „Jetzt prüfen“ versuchst du es erneut. Das ist dein WerkPlus-Schlüssel:")), 1)),
						R("p", null, [R("code", null, J(l.value), 1)]),
						R("p", null, J(t(w)("rechnungswerk", "Bitte bewahre ihn sicher auf. Er ist hinterlegt, wird aber nur jetzt vollständig angezeigt.")), 1)
					]),
					_: 1
				})) : n("", !0),
				c.value ? (X(), M(t($), {
					key: 2,
					type: "info",
					text: c.value
				}, null, 8, ["text"])) : n("", !0),
				s.value ? (X(), M(t($), {
					key: 3,
					type: "error",
					text: s.value
				}, null, 8, ["text"])) : r.value.lastError ? (X(), M(t($), {
					key: 4,
					type: "warning",
					text: r.value.lastError.message
				}, null, 8, ["text"])) : n("", !0),
				r.value.keySet ? (X(), B("dl", IS, [
					R("dt", null, J(t(w)("rechnungswerk", "Tarif")), 1),
					R("dd", null, J(m.value), 1),
					r.value.licensedEmployees ? (X(), B(T, { key: 0 }, [R("dt", null, J(t(w)("rechnungswerk", "Lizenzierte Mitarbeitende")), 1), R("dd", null, J(r.value.licensedEmployees), 1)], 64)) : n("", !0),
					r.value.expiresAt ? (X(), B(T, { key: 1 }, [R("dt", null, J(t(w)("rechnungswerk", "Gültig bis")), 1), R("dd", null, J(g(r.value.expiresAt)), 1)], 64)) : n("", !0),
					R("dt", null, J(t(w)("rechnungswerk", "Letzte erfolgreiche Prüfung")), 1),
					R("dd", null, J(r.value.lastCheckAt ? ee(r.value.lastCheckAt) : t(w)("rechnungswerk", "noch keine")), 1),
					R("dt", null, J(t(w)("rechnungswerk", "Schlüssel")), 1),
					R("dd", null, J(r.value.keyHint), 1)
				])) : n("", !0),
				R("label", LS, [R("span", null, J(t(w)("rechnungswerk", "WerkPlus-Schlüssel")), 1), C(R("input", {
					"onUpdate:modelValue": f[0] ||= (e) => i.value = e,
					class: "rw-input",
					type: "text",
					autocomplete: "off",
					spellcheck: "false",
					placeholder: r.value.keySet ? t(w)("rechnungswerk", "gespeichert, leer lassen") : "wp_…"
				}, null, 8, RS), [[F, i.value]])]),
				R("div", zS, [
					q(t(U), {
						variant: "primary",
						disabled: a.value || !i.value.trim() && !r.value.keySet,
						onClick: x
					}, {
						default: _(() => [G(J(r.value.keySet ? t(w)("rechnungswerk", "Speichern und prüfen") : t(w)("rechnungswerk", "Schlüssel prüfen und speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					r.value.keySet ? n("", !0) : (X(), M(t(U), {
						key: 0,
						disabled: a.value,
						onClick: f[1] ||= (e) => d.value = !0
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "30 Tage testen")), 1)]),
						_: 1
					}, 8, ["disabled"])),
					r.value.keySet ? (X(), M(t(U), {
						key: 1,
						disabled: a.value,
						onClick: S
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Jetzt prüfen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0),
					r.value.keySet ? (X(), M(t(U), {
						key: 2,
						variant: "tertiary",
						disabled: a.value,
						onClick: f[2] ||= (e) => u.value = !0
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Schlüssel entfernen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0)
				]),
				R("div", BS, [
					R("span", VS, J(t(w)("rechnungswerk", "Was an WerkPlus übertragen wird")), 1),
					R("p", HS, J(t(w)("rechnungswerk", "Die Kennung dieser Installation, die Version von RechnungsWerk und, sobald vorhanden, der Schlüssel. Nicht übertragen werden Rechnungen, Kunden oder andere Belegdaten, Personendaten, Nextcloud-Benutzer oder Dateien.")), 1),
					R("p", US, J(t(w)("rechnungswerk", "Die Lizenz wird auf diesem Server geprüft. Ist WerkPlus nicht erreichbar, arbeitet RechnungsWerk normal weiter.")), 1),
					R("p", WS, [G(J(t(w)("rechnungswerk", "Kennung dieser Installation:")) + " ", 1), R("code", null, J(r.value.instanceUuid), 1)])
				])
			], 64)) : n("", !0),
			q(Vf, {
				open: d.value,
				name: t(w)("rechnungswerk", "WerkPlus 30 Tage testen"),
				message: t(w)("rechnungswerk", "Der Testzeitraum läuft 30 Tage, braucht keine Zahlungsdaten und ist je Installation nur einmal möglich. Jetzt starten?"),
				confirmLabel: t(w)("rechnungswerk", "Testzeitraum starten"),
				onClose: f[3] ||= (e) => d.value = !1,
				onConfirm: te
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			q(Vf, {
				open: u.value,
				name: t(w)("rechnungswerk", "WerkPlus-Schlüssel entfernen"),
				message: t(w)("rechnungswerk", "RechnungsWerk arbeitet danach im freien Umfang. Den Schlüssel kannst du jederzeit wieder eintragen. Fortfahren?"),
				confirmLabel: t(w)("rechnungswerk", "Entfernen"),
				onClose: f[4] ||= (e) => u.value = !1,
				onConfirm: ne
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-bac67bb5"]]);
function KS(e) {
	if (typeof e != "string") return null;
	let t = e.trim().replace(/^#/, "");
	if (t.length === 3 && (t = t.split("").map((e) => e + e).join("")), !/^[0-9a-fA-F]{6}$/.test(t)) return null;
	let n = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, r = parseInt(t, 16);
	return .2126 * n(r >> 16 & 255) + .7152 * n(r >> 8 & 255) + .0722 * n(r & 255);
}
function qS(e, t) {
	let [n, r] = e > t ? [e, t] : [t, e];
	return (n + .05) / (r + .05);
}
function JS(e) {
	let t = KS(e);
	return t === null ? "#000000" : qS(t, 1) >= qS(t, 0) ? "#ffffff" : "#000000";
}
function YS(e) {
	let t = KS(e);
	return t !== null && qS(t, 1) < 4.5;
}
// src/utils/invoiceNumber.ts
function XS(e, t, n, r, i) {
	return e.replace(/\{YYYY\}/g, String(n).padStart(4, "0")).replace(/\{YY\}/g, String(n % 100).padStart(2, "0")).replace(/\{MM\}/g, String(r).padStart(2, "0")).replace(/\{DD\}/g, String(i).padStart(2, "0")).replace(/\{(#+)\}/g, (e, n) => String(t).padStart(n.length, "0"));
}
// src/utils/fileName.ts
var ZS = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue"
};
function QS(e, t) {
	let n = (e) => String(e).padStart(2, "0"), r = {
		"{nummer}": t.nummer,
		"{YYYY}": String(t.date.getFullYear()),
		"{MM}": n(t.date.getMonth() + 1),
		"{DD}": n(t.date.getDate()),
		"{kunde}": t.kunde.replace(/[äöüßÄÖÜ]/g, (e) => ZS[e] ?? e),
		"{typ}": t.typ
	}, i = e.replace(/\{nummer\}|\{YYYY\}|\{MM\}|\{DD\}|\{kunde\}|\{typ\}/g, (e) => r[e]);
	return i = i.replace(/[/\\:*?"<>|]/g, "-").replace(/\s+/g, " ").replace(/^[\s.]+|[\s.]+$/g, "").slice(0, 120), (i || "rechnung-1") + ".pdf";
}
// src/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
var $S = { class: "rw-view rw-view--narrow" }, eC = { class: "rw-settings-title" }, tC = {
	key: 0,
	class: "rw-settingspage"
}, nC = { class: "rw-settingspage__content" }, rC = { class: "rw-section" }, iC = { class: "rw-field" }, aC = { class: "rw-field" }, oC = { class: "rw-form-row" }, sC = { class: "rw-field" }, cC = { class: "rw-field" }, lC = { class: "rw-field" }, uC = ["placeholder"], dC = { class: "rw-form-row" }, fC = { class: "rw-field" }, pC = { class: "rw-field" }, mC = { class: "rw-field" }, hC = { class: "rw-hint" }, gC = { class: "rw-field" }, _C = ["value"], vC = { class: "rw-hint" }, yC = { class: "rw-section" }, bC = { class: "rw-form-row" }, xC = { class: "rw-field" }, SC = { class: "rw-field" }, CC = { class: "rw-field" }, wC = { class: "rw-hint" }, TC = { class: "rw-section" }, EC = { class: "rw-field rw-field--inline" }, DC = { class: "rw-accent" }, OC = ["aria-label"], kC = { class: "rw-field" }, AC = { class: "rw-accent-preview" }, jC = { class: "rw-hint" }, MC = {
	key: 0,
	class: "rw-hint"
}, NC = { class: "rw-field" }, PC = { class: "rw-logo" }, FC = ["src", "alt"], IC = {
	key: 1,
	class: "rw-logo__empty"
}, LC = { class: "rw-logo__actions" }, RC = { class: "rw-hint" }, zC = { class: "rw-section" }, BC = { class: "rw-field" }, VC = { class: "rw-hint" }, HC = { class: "rw-field" }, UC = { class: "rw-hint" }, WC = { class: "rw-field rw-reset-mode" }, GC = { class: "rw-hint" }, KC = { class: "rw-section" }, qC = { class: "rw-field" }, JC = { class: "rw-hint" }, YC = { class: "rw-field rw-reset-mode" }, XC = { class: "rw-hint" }, ZC = { class: "rw-section" }, QC = { class: "rw-field" }, $C = { class: "rw-hint" }, ew = { class: "rw-section" }, tw = {
	key: 0,
	class: "rw-field"
}, nw = ["placeholder"], rw = { class: "rw-hint" }, iw = {
	key: 1,
	class: "rw-field tax-rate-field"
}, aw = ["value"], ow = { class: "rw-section" }, sw = { class: "rw-field rw-field--narrow" }, cw = { class: "rw-hint" }, lw = { class: "rw-section" }, uw = { class: "rw-field" }, dw = { class: "rw-hint" }, fw = { class: "rw-form-row" }, pw = { class: "rw-field" }, mw = { class: "rw-field" }, hw = { class: "rw-section" }, gw = { class: "rw-field" }, _w = { class: "rw-archive-folder" }, vw = {
	key: 0,
	class: "rw-archive-folder__path"
}, yw = {
	key: 1,
	class: "rw-archive-folder__empty"
}, bw = { class: "rw-field" }, xw = ["placeholder"], Sw = { class: "rw-hint" }, Cw = { class: "rw-section" }, ww = { class: "rw-hint" }, Tw = { class: "rw-form-row" }, Ew = { class: "rw-field" }, Dw = { class: "rw-field rw-field--narrow" }, Ow = { class: "rw-field rw-field--narrow" }, kw = { value: "none" }, Aw = { class: "rw-form-row" }, jw = { class: "rw-field" }, Mw = { class: "rw-field" }, Nw = ["placeholder"], Pw = { class: "smtp-test" }, Fw = { class: "rw-section" }, Iw = { class: "rw-hint" }, Lw = { class: "rw-form-row" }, Rw = { class: "rw-field" }, zw = { class: "rw-field rw-field--narrow" }, Bw = { class: "rw-field rw-field--narrow" }, Vw = { class: "rw-form-row" }, Hw = { class: "rw-field" }, Uw = { class: "rw-field" }, Ww = ["placeholder"], Gw = { class: "rw-section" }, Kw = { class: "rw-hint" }, qw = { class: "rw-section" }, Jw = { class: "rw-hint rw-access-intro" }, Yw = { class: "rw-access-group" }, Xw = { class: "rw-access-label" }, Zw = { class: "rw-hint rw-access-desc" }, Qw = { class: "rw-access-group" }, $w = { class: "rw-access-label" }, eT = { class: "rw-hint rw-access-desc" }, tT = { class: "rw-section" }, nT = { class: "rw-section" }, rT = { class: "rw-action-bar" }, iT = /*#__PURE__*/ Z(/* @__PURE__ */ H({
	__name: "SettingsView",
	setup(e) {
		let r = ct(), i = Wl(), a = v(null), o = v([]), s = I(() => {
			let e = o.value, t = a.value?.timezone ?? "";
			return t !== "" && !e.includes(t) && (e = [t, ...e]), [{
				id: "",
				label: w("rechnungswerk", "Automatisch")
			}, ...e.map((e) => ({
				id: e,
				label: e
			}))];
		}), c = I({
			get: () => a.value?.timezone ?? "",
			set(e) {
				a.value && (a.value.timezone = e || null);
			}
		}), l = I(() => !!a.value?.vatId?.trim() || !!a.value?.registerNumber?.trim()), u = I(() => [
			{
				label: w("rechnungswerk", "Firma"),
				items: [
					{
						key: "firma",
						label: w("rechnungswerk", "Firma"),
						icon: Fb
					},
					{
						key: "bank",
						label: w("rechnungswerk", "Bankverbindung"),
						icon: Vb
					},
					{
						key: "branding",
						label: w("rechnungswerk", "Branding"),
						icon: qb
					}
				]
			},
			{
				label: w("rechnungswerk", "Belege"),
				items: [
					{
						key: "rechnungsnummer",
						label: w("rechnungswerk", "Rechnungsnummer"),
						icon: Bo
					},
					{
						key: "angebotsnummer",
						label: w("rechnungswerk", "Angebotsnummer"),
						icon: $b
					},
					{
						key: "dateiname",
						label: w("rechnungswerk", "PDF-Dateiname"),
						icon: za
					},
					{
						key: "texte",
						label: w("rechnungswerk", "Standardtexte"),
						icon: ax
					}
				]
			},
			{
				label: w("rechnungswerk", "Buchhaltung"),
				items: [{
					key: "steuer",
					label: w("rechnungswerk", "Steuer"),
					icon: dx
				}, {
					key: "zahlung",
					label: w("rechnungswerk", "Zahlung"),
					icon: _x
				}]
			},
			{
				label: w("rechnungswerk", "Versand"),
				items: [
					{
						key: "versand",
						label: w("rechnungswerk", "Versand"),
						icon: Cx
					},
					{
						key: "smtp",
						label: w("rechnungswerk", "Eigenes SMTP-Konto"),
						icon: kx
					},
					{
						key: "datev",
						label: w("rechnungswerk", "DATEV-Rückmeldung"),
						icon: Fx
					}
				]
			},
			{
				label: w("rechnungswerk", "Ablage & Zugriff"),
				items: [{
					key: "ablage",
					label: w("rechnungswerk", "Ablage in Nextcloud"),
					icon: Vx
				}, {
					key: "zugriff",
					label: w("rechnungswerk", "Zugriff & Administration"),
					icon: qx
				}]
			},
			{
				label: w("rechnungswerk", "Lizenz"),
				items: [{
					key: "werkplus",
					label: w("rechnungswerk", "WerkPlus"),
					icon: $x
				}, {
					key: "apikeys",
					label: w("rechnungswerk", "API-Schlüssel"),
					icon: aS
				}]
			}
		]), d = v("firma");
		function f() {
			r.push({ name: "text-snippets" });
		}
		let p = v(null), m = v(!1), h = v(""), g = v(null);
		async function ee(e) {
			h.value = e, await Ye(), g.value?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}
		let b = v(!1), x = v(!1), te = v(!1), S = v(!1), ne = v(!1), re = v(0), E = v((/* @__PURE__ */ new Date()).getFullYear()), ie = v((/* @__PURE__ */ new Date()).getMonth() + 1), D = v((/* @__PURE__ */ new Date()).getDate()), O = v(null), ae = v(0), oe = v(null), se = v(null), ce = I(() => a.value?.accentColor || "#2c3e50"), k = I(() => ({
			background: ce.value,
			color: JS(ce.value)
		})), A = I(() => YS(ce.value));
		function le(e) {
			a.value && (a.value.accentColor = e ?? null);
		}
		let ue = v([]), de = v([]), fe = v([]), pe = v(!1), j = v(!1), me = v(""), he = null, ge = v(""), N = v(""), _e = v(!1), P = v(""), ve = v(!1), ye = v(!1), be = I(() => a.value?.logoFileId ? Vl(a.value.logoFileId) : ""), xe = I(() => pe.value ? w("rechnungswerk", "Suche läuft\xA0…") : me.value.trim().length < 2 ? w("rechnungswerk", "Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.") : w("rechnungswerk", "Keine Treffer.")), Se = I(() => a.value?.numberResetMode === "continuous" || E.value === O.value ? re.value : 0), Ce = I(() => Se.value + 1), Te = I(() => {
			if (!a.value) return "";
			let e = se.value && se.value > 0 ? se.value : Ce.value;
			return XS(a.value.numberFormat || "RE-{YYYY}-{####}", e, E.value, ie.value, D.value);
		}), Ee = I(() => {
			if (!a.value) return "";
			let e = a.value.quoteNumberResetMode === "continuous" || E.value === oe.value ? ae.value : 0;
			return XS(a.value.quoteNumberFormat || "AN-{YYYY}-{####}", e + 1, E.value, ie.value, D.value);
		}), De = I(() => a.value ? QS(a.value.fileNameFormat || "{nummer}", {
			nummer: Te.value,
			date: /* @__PURE__ */ new Date(),
			kunde: "Muster GmbH",
			typ: "Rechnung"
		}) : "");
		Fe(async () => {
			try {
				await i.fetch(), Ae();
				let e = await Bs();
				ue.value = Oe(e.admins), de.value = Oe(e.users);
			} catch (e) {
				Ke(e, w("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function Oe(e) {
			return e.map((e) => ({
				id: e,
				type: e.startsWith("group:") ? "group" : "user",
				displayName: e.replace(/^(user|group):/, "")
			}));
		}
		function ke(e) {
			me.value = e, he && clearTimeout(he), e.trim().length < 2 ? (fe.value = [], pe.value = !1) : (pe.value = !0, he = setTimeout(async () => {
				try {
					fe.value = await Hs(e.trim());
				} catch {
					fe.value = [];
				} finally {
					pe.value = !1;
				}
			}, 300));
		}
		function Ae() {
			let e = i.settings;
			if (e) {
				re.value = e.numberCounter, O.value = e.numberCounterYear, ae.value = e.quoteNumberCounter, oe.value = e.quoteNumberCounterYear;
				{
					let t = e.numberResetMode === "continuous" || E.value === e.numberCounterYear ? e.numberCounter : 0;
					se.value = t + 1;
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
		function je(e) {
			a.value && (e ? b.value = !0 : a.value.smallBusiness = !1);
		}
		function Me() {
			b.value = !1, a.value && (a.value.smallBusiness = !0);
		}
		function Ne(e) {
			a.value && (e ? x.value = !0 : a.value.datevAutoSend = !1);
		}
		function L() {
			x.value = !1, a.value && (a.value.datevAutoSend = !0);
		}
		function Pe(e) {
			a.value && (e ? te.value = !0 : a.value.archiveEnabled = !1);
		}
		function Ie() {
			te.value = !1, a.value && (a.value.archiveEnabled = !0);
		}
		function Le(e) {
			a.value && e !== a.value.numberResetMode && (e === "continuous" ? S.value = !0 : a.value.numberResetMode = "yearly");
		}
		function Re() {
			S.value = !1, a.value && (a.value.numberResetMode = "continuous");
		}
		function ze(e) {
			a.value && e !== a.value.quoteNumberResetMode && (e === "continuous" ? ne.value = !0 : a.value.quoteNumberResetMode = "yearly");
		}
		function Be() {
			ne.value = !1, a.value && (a.value.quoteNumberResetMode = "continuous");
		}
		async function Ve() {
			let e;
			try {
				e = await Pv(w("rechnungswerk", "Zielordner für die Ablage wählen")).setMultiSelect(!1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories(!0).addButton({
					label: w("rechnungswerk", "Auswählen"),
					variant: "primary",
					callback: () => {}
				}).build().pick();
			} catch (e) {
				if (e instanceof jv) return;
				Ke(e, w("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
				return;
			}
			if (e) {
				m.value = !0, h.value = "";
				try {
					let t = await Hl(e);
					a.value && (a.value.archiveFolderId = t.archiveFolderId), p.value = t.archiveFolderPath;
				} catch (e) {
					Ke(e, w("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
				} finally {
					m.value = !1;
				}
			}
		}
		async function He() {
			m.value = !0, h.value = "";
			try {
				await Ul(), a.value && (a.value.archiveFolderId = null, a.value.archiveEnabled = !1), p.value = null;
			} catch (e) {
				Ke(e, w("rechnungswerk", "Zielordner konnte nicht entfernt werden."));
			} finally {
				m.value = !1;
			}
		}
		async function Ue() {
			let e;
			try {
				e = await Pv(w("rechnungswerk", "Firmenlogo wählen")).setMultiSelect(!1).setMimeTypeFilter([
					"image/png",
					"image/jpeg",
					"image/gif"
				]).addButton({
					label: w("rechnungswerk", "Auswählen"),
					variant: "primary",
					callback: () => {}
				}).build().pick();
			} catch (e) {
				if (e instanceof jv) return;
				Ke(e, w("rechnungswerk", "Logo konnte nicht gesetzt werden."));
				return;
			}
			if (e) {
				ye.value = !0, h.value = "";
				try {
					let t = await zl(e);
					a.value && (a.value.logoFileId = t.logoFileId);
				} catch (e) {
					Ke(e, w("rechnungswerk", "Logo konnte nicht gesetzt werden."));
				} finally {
					ye.value = !1;
				}
			}
		}
		async function We() {
			ye.value = !0, h.value = "";
			try {
				await Bl(), a.value && (a.value.logoFileId = null);
			} catch (e) {
				Ke(e, w("rechnungswerk", "Logo konnte nicht entfernt werden."));
			} finally {
				ye.value = !1;
			}
		}
		async function Ge() {
			if (!a.value) return;
			h.value = "";
			let e = (a.value.numberFormat || "").trim();
			if (a.value.numberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(e)) {
				ee(w("rechnungswerk", "Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
				return;
			}
			let t = se.value;
			if (t == null || !Number.isInteger(t) || t < 1) {
				ee(w("rechnungswerk", "Die nächste Rechnungsnummer muss eine ganze Zahl ab 1 sein."));
				return;
			}
			if (t < Ce.value) {
				ee(w("rechnungswerk", "Die nächste Rechnungsnummer muss mindestens {min} sein, da bereits die Nummer {issued} vergeben wurde.", {
					min: Ce.value,
					issued: Se.value
				}));
				return;
			}
			let n = (a.value.quoteNumberFormat || "").trim();
			if (a.value.quoteNumberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(n)) {
				ee(w("rechnungswerk", "Bei jährlichem Angebots-Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
				return;
			}
			let r = (a.value.fileNameFormat || "").trim();
			if (r !== "" && !r.includes("{nummer}")) {
				ee(w("rechnungswerk", "Das Dateinamen-Schema muss den Platzhalter {nummer} enthalten, damit Dateinamen eindeutig bleiben."));
				return;
			}
			let o = [
				{
					value: a.value.contactEmail,
					label: w("rechnungswerk", "Kontakt-E-Mail")
				},
				{
					value: a.value.smtpFromEmail,
					label: w("rechnungswerk", "Absender-E-Mail")
				},
				{
					value: a.value.datevUploadMail,
					label: w("rechnungswerk", "DATEV-Upload-Mail")
				}
			];
			for (let { value: e, label: t } of o) {
				let n = (e || "").trim();
				if (n !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)) {
					ee(w("rechnungswerk", "Bitte eine gültige E-Mail-Adresse angeben ({field}).", { field: t }));
					return;
				}
			}
			j.value = !0;
			try {
				let e = { ...a.value };
				t > Ce.value && (e.numberCounter = t - 1), delete e.logoFileId, delete e.archiveFolderId, ge.value !== "" && (e.smtpPassword = ge.value), N.value !== "" && (e.imapPassword = N.value);
				try {
					await i.save(e);
				} catch (e) {
					Ke(e, w("rechnungswerk", "Speichern der Einstellungen fehlgeschlagen."));
					return;
				}
				try {
					await Vs({
						admins: ue.value.map((e) => e.id),
						users: de.value.map((e) => e.id)
					});
				} catch (e) {
					Ke(e, w("rechnungswerk", "Einstellungen gespeichert, aber die Zugriffsrechte konnten nicht gespeichert werden. Bitte erneut speichern."));
					return;
				}
				ge.value = "", N.value = "", Ae();
			} finally {
				j.value = !1;
			}
		}
		async function z() {
			if (a.value?.smtpHost) {
				_e.value = !0, P.value = "";
				try {
					await Il({
						host: a.value.smtpHost,
						port: a.value.smtpPort ?? 587,
						security: a.value.smtpSecurity || "starttls",
						user: a.value.smtpUser ?? "",
						password: ge.value
					}), ve.value = !0, P.value = w("rechnungswerk", "Verbindung erfolgreich.");
				} catch (e) {
					ve.value = !1, P.value = e.message ?? w("rechnungswerk", "Verbindung fehlgeschlagen.");
				} finally {
					_e.value = !1;
				}
			}
		}
		function Ke(e, t) {
			ee(e.message ?? t), console.error("[rechnungswerk] settings:", e);
		}
		return (e, r) => (X(), B("div", $S, [
			R("h2", eC, J(t(w)("rechnungswerk", "Einstellungen")), 1),
			R("div", {
				ref_key: "errorAnchor",
				ref: g
			}, [h.value ? (X(), M(t($), {
				key: 0,
				type: "error",
				text: h.value
			}, null, 8, ["text"])) : n("", !0)], 512),
			a.value ? (X(), B("div", tC, [q(kb, {
				groups: u.value,
				modelValue: d.value,
				ariaLabel: t(w)("rechnungswerk", "Einstellungs-Navigation"),
				"onUpdate:modelValue": r[0] ||= (e) => d.value = e
			}, null, 8, [
				"groups",
				"modelValue",
				"ariaLabel"
			]), R("div", nC, [
				C(R("section", rC, [
					R("h3", null, J(t(w)("rechnungswerk", "Firma")), 1),
					R("label", iC, [R("span", null, J(t(w)("rechnungswerk", "Firmenname")), 1), C(R("input", {
						"onUpdate:modelValue": r[1] ||= (e) => a.value.companyName = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.companyName]])]),
					R("label", aC, [R("span", null, J(t(w)("rechnungswerk", "Adresse")), 1), C(R("textarea", {
						"onUpdate:modelValue": r[2] ||= (e) => a.value.companyAddress = e,
						class: "rw-input",
						rows: "3"
					}, null, 512), [[F, a.value.companyAddress]])]),
					R("div", oC, [R("label", sC, [R("span", null, J(t(w)("rechnungswerk", "USt-IdNr.")), 1), C(R("input", {
						"onUpdate:modelValue": r[3] ||= (e) => a.value.vatId = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.vatId]])]), R("label", cC, [R("span", null, J(t(w)("rechnungswerk", "Steuernummer")), 1), C(R("input", {
						"onUpdate:modelValue": r[4] ||= (e) => a.value.taxNumber = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.taxNumber]])])]),
					R("label", lC, [R("span", null, J(t(w)("rechnungswerk", "Registernummer")), 1), C(R("input", {
						"onUpdate:modelValue": r[5] ||= (e) => a.value.registerNumber = e,
						class: "rw-input",
						type: "text",
						placeholder: t(w)("rechnungswerk", "z. B. HRB 12345, Amtsgericht Stuttgart")
					}, null, 8, uC), [[F, a.value.registerNumber]])]),
					l.value ? n("", !0) : (X(), M(t($), {
						key: 0,
						type: "warning",
						heading: t(w)("rechnungswerk", "Deine E-Rechnungen lösen bei Prüfprogrammen einen Fehler aus."),
						text: t(w)("rechnungswerk", "Ohne USt-IdNr. oder Registernummer (z. B. Handelsregister) meldet die Prüfung nach EN 16931 einen Fehler. Steuerlich ist das unschädlich, die Steuernummer reicht als Pflichtangabe. Manche Unternehmen weisen solche Rechnungen aber automatisch zurück. Trage für Rechnungen an Unternehmen deshalb eines der beiden Felder ein. Eine USt-IdNr. kannst du kostenlos beim Bundeszentralamt für Steuern beantragen, auch als Kleinunternehmer.")
					}, null, 8, ["heading", "text"])),
					R("div", dC, [
						R("label", fC, [R("span", null, J(t(w)("rechnungswerk", "Ansprechpartner")), 1), C(R("input", {
							"onUpdate:modelValue": r[6] ||= (e) => a.value.contactPerson = e,
							class: "rw-input",
							type: "text"
						}, null, 512), [[F, a.value.contactPerson]])]),
						R("label", pC, [R("span", null, J(t(w)("rechnungswerk", "Telefon")), 1), C(R("input", {
							"onUpdate:modelValue": r[7] ||= (e) => a.value.contactPhone = e,
							class: "rw-input",
							type: "text"
						}, null, 512), [[F, a.value.contactPhone]])]),
						R("label", mC, [R("span", null, J(t(w)("rechnungswerk", "Kontakt-E-Mail")), 1), C(R("input", {
							"onUpdate:modelValue": r[8] ||= (e) => a.value.contactEmail = e,
							class: "rw-input",
							type: "email"
						}, null, 512), [[F, a.value.contactEmail]])])
					]),
					R("p", hC, J(t(w)("rechnungswerk", "Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).")), 1),
					R("label", gC, [R("span", null, J(t(w)("rechnungswerk", "Zeitzone")), 1), C(R("select", {
						"onUpdate:modelValue": r[9] ||= (e) => c.value = e,
						class: "rw-input"
					}, [(X(!0), B(T, null, Y(s.value, (e) => (X(), B("option", {
						key: e.id,
						value: e.id
					}, J(e.label), 9, _C))), 128))], 512), [[we, c.value]])]),
					R("p", vC, J(t(w)("rechnungswerk", "Bestimmt, welcher Tag „heute“ ist: Rechnungsdatum, Jahr der Rechnungsnummer, Fälligkeit und Zahlungsdatum. Automatisch nimmt die Zeitzone des Servers, ist dort keine eingestellt, Europe/Berlin.")), 1)
				], 512), [[y, d.value === "firma"]]),
				C(R("section", yC, [
					R("h3", null, J(t(w)("rechnungswerk", "Bankverbindung")), 1),
					R("div", bC, [R("label", xC, [R("span", null, J(t(w)("rechnungswerk", "IBAN")), 1), C(R("input", {
						"onUpdate:modelValue": r[10] ||= (e) => a.value.iban = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.iban]])]), R("label", SC, [R("span", null, J(t(w)("rechnungswerk", "BIC")), 1), C(R("input", {
						"onUpdate:modelValue": r[11] ||= (e) => a.value.bic = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.bic]])])]),
					R("label", CC, [R("span", null, J(t(w)("rechnungswerk", "Bankname")), 1), C(R("input", {
						"onUpdate:modelValue": r[12] ||= (e) => a.value.bankName = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.bankName]])]),
					q(t(Je), {
						type: "switch",
						modelValue: a.value.girocodeEnabled,
						disabled: !a.value.iban && !a.value.girocodeEnabled,
						"onUpdate:modelValue": r[13] ||= (e) => {
							a.value && (a.value.girocodeEnabled = e);
						}
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Girocode (Bezahl-QR-Code) auf Rechnungen anzeigen")), 1)]),
						_: 1
					}, 8, ["modelValue", "disabled"]),
					R("p", wC, J(t(w)("rechnungswerk", "Druckt einen EPC-QR-Code neben die Bankverbindung: Kunden scannen ihn mit der Banking-App, Empfänger, Betrag und Verwendungszweck sind vorausgefüllt. Erscheint nur auf Rechnungen mit positivem Betrag, nicht auf Stornobelegen.")), 1)
				], 512), [[y, d.value === "bank"]]),
				C(R("section", TC, [
					R("h3", null, J(t(w)("rechnungswerk", "Branding")), 1),
					R("div", EC, [R("span", null, J(t(w)("rechnungswerk", "Akzentfarbe")), 1), R("div", DC, [q(t(Tb), {
						modelValue: ce.value,
						advancedFields: "",
						"onUpdate:modelValue": le
					}, {
						default: _(() => [R("button", {
							type: "button",
							class: "rw-accent__trigger",
							"aria-label": t(w)("rechnungswerk", "Akzentfarbe") + ": " + ce.value.toUpperCase(),
							style: pt(k.value)
						}, J(ce.value.toUpperCase()), 13, OC)]),
						_: 1
					}, 8, ["modelValue"]), a.value.accentColor ? (X(), M(t(U), {
						key: 0,
						variant: "tertiary",
						onClick: r[14] ||= (e) => a.value.accentColor = null
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Zurücksetzen")), 1)]),
						_: 1
					})) : n("", !0)])]),
					R("div", kC, [
						R("table", AC, [R("thead", null, [R("tr", { style: pt(k.value) }, [...r[44] ||= [
							R("th", null, "Beschreibung", -1),
							R("th", { class: "num" }, "Menge", -1),
							R("th", { class: "num" }, "Einzelpreis", -1),
							R("th", { class: "num" }, "Betrag", -1)
						]], 4)]), r[45] ||= R("tbody", null, [R("tr", null, [
							R("td", null, "Beratungsleistung"),
							R("td", { class: "num" }, "2"),
							R("td", { class: "num" }, "95,00 €"),
							R("td", { class: "num" }, "190,00 €")
						])], -1)]),
						R("p", jC, J(t(w)("rechnungswerk", "So erscheint die Kopfzeile der Positionstabelle auf der Rechnung.")), 1),
						A.value ? (X(), B("p", MC, J(t(w)("rechnungswerk", "Auf dieser Farbe wäre weiße Schrift zu blass, deshalb steht sie schwarz auf der Rechnung. Die Farbe selbst bleibt unverändert.")), 1)) : n("", !0)
					]),
					R("div", NC, [
						R("span", null, J(t(w)("rechnungswerk", "Firmenlogo")), 1),
						R("div", PC, [a.value.logoFileId ? (X(), B("img", {
							key: 0,
							src: be.value,
							alt: t(w)("rechnungswerk", "Firmenlogo"),
							class: "rw-logo__preview"
						}, null, 8, FC)) : (X(), B("span", IC, J(t(w)("rechnungswerk", "Kein Logo gewählt")), 1)), R("div", LC, [q(t(U), {
							disabled: ye.value,
							onClick: Ue
						}, {
							default: _(() => [G(J(a.value.logoFileId ? t(w)("rechnungswerk", "Logo ändern") : t(w)("rechnungswerk", "Logo wählen")), 1)]),
							_: 1
						}, 8, ["disabled"]), a.value.logoFileId ? (X(), M(t(U), {
							key: 0,
							variant: "tertiary",
							disabled: ye.value,
							onClick: We
						}, {
							default: _(() => [G(J(t(w)("rechnungswerk", "Entfernen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0)])]),
						R("p", RC, J(t(w)("rechnungswerk", "Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.")), 1)
					])
				], 512), [[y, d.value === "branding"]]),
				C(R("section", zC, [
					R("h3", null, J(t(w)("rechnungswerk", "Rechnungsnummer")), 1),
					R("label", BC, [R("span", null, J(t(w)("rechnungswerk", "Format")), 1), C(R("input", {
						"onUpdate:modelValue": r[15] ||= (e) => a.value.numberFormat = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.numberFormat]])]),
					R("p", VC, [
						G(J(t(w)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
						r[46] ||= R("br", null, null, -1),
						G(" " + J(t(w)("rechnungswerk", "Vorschau: {preview}", { preview: Te.value })), 1)
					]),
					R("label", HC, [R("span", null, J(t(w)("rechnungswerk", "Nächste Rechnungsnummer")), 1), C(R("input", {
						"onUpdate:modelValue": r[16] ||= (e) => se.value = e,
						class: "rw-input",
						type: "number",
						min: "1",
						step: "1"
					}, null, 512), [[
						F,
						se.value,
						void 0,
						{ number: !0 }
					]])]),
					R("p", UC, J(t(w)("rechnungswerk", "Die laufende Nummer der nächsten Rechnung. Zum Einstieg in eine bestehende Nummernfolge hier den gewünschten Wert setzen. Nummern lassen sich nur vorwärts setzen, nie unter eine bereits vergebene.")), 1),
					R("div", WC, [
						R("span", null, J(t(w)("rechnungswerk", "Nummernkreis")), 1),
						q(t(Je), {
							type: "radio",
							name: "rw-reset-mode",
							value: "yearly",
							modelValue: a.value.numberResetMode,
							"onUpdate:modelValue": Le
						}, {
							default: _(() => [G(J(t(w)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
							_: 1
						}, 8, ["modelValue"]),
						q(t(Je), {
							type: "radio",
							name: "rw-reset-mode",
							value: "continuous",
							modelValue: a.value.numberResetMode,
							"onUpdate:modelValue": Le
						}, {
							default: _(() => [G(J(t(w)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
							_: 1
						}, 8, ["modelValue"])
					]),
					R("p", GC, J(t(w)("rechnungswerk", "Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.")), 1)
				], 512), [[y, d.value === "rechnungsnummer"]]),
				C(R("section", KC, [
					R("h3", null, J(t(w)("rechnungswerk", "Angebotsnummer")), 1),
					R("label", qC, [R("span", null, J(t(w)("rechnungswerk", "Format")), 1), C(R("input", {
						"onUpdate:modelValue": r[17] ||= (e) => a.value.quoteNumberFormat = e,
						class: "rw-input",
						type: "text",
						placeholder: "AN-{YYYY}-{####}"
					}, null, 512), [[F, a.value.quoteNumberFormat]])]),
					R("p", JC, [
						G(J(t(w)("rechnungswerk", "Eigener, von den Rechnungen unabhängiger Nummernkreis. Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
						r[47] ||= R("br", null, null, -1),
						G(" " + J(t(w)("rechnungswerk", "Vorschau: {preview}", { preview: Ee.value })), 1)
					]),
					R("div", YC, [
						R("span", null, J(t(w)("rechnungswerk", "Nummernkreis")), 1),
						q(t(Je), {
							type: "radio",
							name: "rw-quote-reset-mode",
							value: "yearly",
							modelValue: a.value.quoteNumberResetMode,
							"onUpdate:modelValue": ze
						}, {
							default: _(() => [G(J(t(w)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
							_: 1
						}, 8, ["modelValue"]),
						q(t(Je), {
							type: "radio",
							name: "rw-quote-reset-mode",
							value: "continuous",
							modelValue: a.value.quoteNumberResetMode,
							"onUpdate:modelValue": ze
						}, {
							default: _(() => [G(J(t(w)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
							_: 1
						}, 8, ["modelValue"])
					]),
					R("p", XC, J(t(w)("rechnungswerk", "Angebote haben keine gesetzliche Nummernkreis-Pflicht; Lücken sind erlaubt. Bei „Jährlich zurücksetzen“ muss das Format dennoch eine Jahreskomponente enthalten.")), 1)
				], 512), [[y, d.value === "angebotsnummer"]]),
				C(R("section", ZC, [
					R("h3", null, J(t(w)("rechnungswerk", "PDF-Dateiname")), 1),
					R("label", QC, [R("span", null, J(t(w)("rechnungswerk", "Schema")), 1), C(R("input", {
						"onUpdate:modelValue": r[18] ||= (e) => a.value.fileNameFormat = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.fileNameFormat]])]),
					R("p", $C, [
						G(J(t(w)("rechnungswerk", "Gilt für Download, Kundenmail und DATEV-Mail. Platzhalter: {nummer} Rechnungsnummer, {YYYY}/{MM}/{DD} Rechnungsdatum, {kunde} Kundenname, {typ} Rechnung/Storno. {nummer} ist Pflicht.")) + " ", 1),
						r[48] ||= R("br", null, null, -1),
						G(" " + J(t(w)("rechnungswerk", "Vorschau: {preview}", { preview: De.value })), 1)
					])
				], 512), [[y, d.value === "dateiname"]]),
				C(R("section", ew, [
					R("h3", null, J(t(w)("rechnungswerk", "Steuer")), 1),
					q(t(Je), {
						type: "switch",
						modelValue: a.value.smallBusiness,
						"onUpdate:modelValue": je
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Kleinunternehmer nach §19 UStG (kein USt-Ausweis)")), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					a.value.smallBusiness ? (X(), B("label", tw, [
						R("span", null, J(t(w)("rechnungswerk", "Hinweistext auf der Rechnung (§ 19 UStG)")), 1),
						C(R("textarea", {
							"onUpdate:modelValue": r[19] ||= (e) => a.value.smallBusinessNote = e,
							class: "rw-input",
							rows: "2",
							placeholder: t(Jl)
						}, null, 8, nw), [[F, a.value.smallBusinessNote]]),
						R("span", rw, J(t(w)("rechnungswerk", "Erscheint bei aktiviertem Kleinunternehmer-Status auf der Rechnung. Leer lassen für den Standardtext.")), 1)
					])) : n("", !0),
					a.value.smallBusiness ? n("", !0) : (X(), B("label", iw, [R("span", null, J(t(w)("rechnungswerk", "Standard-USt-Satz")), 1), C(R("select", {
						"onUpdate:modelValue": r[20] ||= (e) => a.value.defaultTaxRateBp = e,
						class: "rw-input"
					}, [(X(!0), B(T, null, Y(t(ql), (e) => (X(), B("option", {
						key: e,
						value: e
					}, J(t(uu)(e)), 9, aw))), 128))], 512), [[
						we,
						a.value.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])]))
				], 512), [[y, d.value === "steuer"]]),
				C(R("section", ow, [
					R("h3", null, J(t(w)("rechnungswerk", "Zahlung")), 1),
					R("label", sw, [R("span", null, J(t(w)("rechnungswerk", "Standard-Zahlungsziel (Tage)")), 1), C(R("input", {
						"onUpdate:modelValue": r[21] ||= (e) => a.value.defaultPaymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						placeholder: "14"
					}, null, 512), [[
						F,
						a.value.defaultPaymentTermDays,
						void 0,
						{ number: !0 }
					]])]),
					R("p", cw, J(t(w)("rechnungswerk", "Wird bei neuen Rechnungen als Zahlungsziel vorbelegt. Leer lassen für kein Standardziel.")), 1)
				], 512), [[y, d.value === "zahlung"]]),
				C(R("section", lw, [
					R("h3", null, J(t(w)("rechnungswerk", "Versand")), 1),
					R("label", uw, [R("span", null, J(t(w)("rechnungswerk", "DATEV-Upload-Mail")), 1), C(R("input", {
						"onUpdate:modelValue": r[22] ||= (e) => a.value.datevUploadMail = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[F, a.value.datevUploadMail]])]),
					q(t(Je), {
						type: "switch",
						modelValue: a.value.datevAutoSend,
						disabled: !a.value.datevUploadMail,
						"onUpdate:modelValue": Ne
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "E-Rechnung beim Festschreiben automatisch an DATEV senden")), 1)]),
						_: 1
					}, 8, ["modelValue", "disabled"]),
					R("p", dw, J(t(w)("rechnungswerk", "Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.")), 1),
					R("div", fw, [R("label", pw, [R("span", null, J(t(w)("rechnungswerk", "Absender-Name")), 1), C(R("input", {
						"onUpdate:modelValue": r[23] ||= (e) => a.value.smtpFromName = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.smtpFromName]])]), R("label", mw, [R("span", null, J(t(w)("rechnungswerk", "Absender-E-Mail")), 1), C(R("input", {
						"onUpdate:modelValue": r[24] ||= (e) => a.value.smtpFromEmail = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[F, a.value.smtpFromEmail]])])])
				], 512), [[y, d.value === "versand"]]),
				C(R("section", hw, [
					R("h3", null, J(t(w)("rechnungswerk", "Ablage in Nextcloud")), 1),
					R("div", gw, [R("span", null, J(t(w)("rechnungswerk", "Zielordner")), 1), R("div", _w, [
						p.value ? (X(), B("span", vw, J(p.value), 1)) : (X(), B("span", yw, J(t(w)("rechnungswerk", "Kein Ordner gewählt")), 1)),
						q(t(U), {
							disabled: m.value,
							onClick: Ve
						}, {
							default: _(() => [G(J(p.value ? t(w)("rechnungswerk", "Ordner ändern") : t(w)("rechnungswerk", "Ordner wählen")), 1)]),
							_: 1
						}, 8, ["disabled"]),
						p.value ? (X(), M(t(U), {
							key: 2,
							variant: "tertiary",
							disabled: m.value,
							onClick: He
						}, {
							default: _(() => [G(J(t(w)("rechnungswerk", "Entfernen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0)
					])]),
					q(t(Je), {
						type: "switch",
						modelValue: a.value.archiveEnabled,
						disabled: !a.value.archiveFolderId,
						"onUpdate:modelValue": Pe
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "ZUGFeRD-PDF beim Festschreiben automatisch im Zielordner ablegen")), 1)]),
						_: 1
					}, 8, ["modelValue", "disabled"]),
					R("label", bw, [R("span", null, J(t(w)("rechnungswerk", "Unterordner (optional)")), 1), C(R("input", {
						"onUpdate:modelValue": r[25] ||= (e) => a.value.archiveSubfolder = e,
						class: "rw-input",
						type: "text",
						placeholder: t(w)("rechnungswerk", "z. B. {YYYY}")
					}, null, 8, xw), [[F, a.value.archiveSubfolder]])]),
					R("p", Sw, [
						G(J(t(w)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {MM} Monat, {DD} Tag (Rechnungsdatum). Unterordner werden bei Bedarf angelegt. Vorhandene Dateien werden nie überschrieben.")) + " ", 1),
						r[49] ||= R("br", null, null, -1),
						G(" " + J(t(w)("rechnungswerk", "Komfort-Ablage für den Team-Zugriff. Kein revisionssicheres Archiv, die GoBD-Archivierung erfolgt über DATEV bzw. Steuerberater.")), 1)
					])
				], 512), [[y, d.value === "ablage"]]),
				C(R("section", Cw, [
					R("h3", null, J(t(w)("rechnungswerk", "Eigenes SMTP-Konto (optional)")), 1),
					R("p", ww, J(t(w)("rechnungswerk", "Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).")), 1),
					R("div", Tw, [
						R("label", Ew, [R("span", null, J(t(w)("rechnungswerk", "Server (Host)")), 1), C(R("input", {
							"onUpdate:modelValue": r[26] ||= (e) => a.value.smtpHost = e,
							class: "rw-input",
							type: "text",
							placeholder: "smtp.example.com"
						}, null, 512), [[F, a.value.smtpHost]])]),
						R("label", Dw, [R("span", null, J(t(w)("rechnungswerk", "Port")), 1), C(R("input", {
							"onUpdate:modelValue": r[27] ||= (e) => a.value.smtpPort = e,
							class: "rw-input",
							type: "number",
							placeholder: "587"
						}, null, 512), [[
							F,
							a.value.smtpPort,
							void 0,
							{ number: !0 }
						]])]),
						R("label", Ow, [R("span", null, J(t(w)("rechnungswerk", "Verschlüsselung")), 1), C(R("select", {
							"onUpdate:modelValue": r[28] ||= (e) => a.value.smtpSecurity = e,
							class: "rw-input"
						}, [
							r[50] ||= R("option", { value: "starttls" }, "STARTTLS", -1),
							r[51] ||= R("option", { value: "ssl" }, "SSL/TLS", -1),
							R("option", kw, J(t(w)("rechnungswerk", "Keine")), 1)
						], 512), [[we, a.value.smtpSecurity]])])
					]),
					R("div", Aw, [R("label", jw, [R("span", null, J(t(w)("rechnungswerk", "Benutzer")), 1), C(R("input", {
						"onUpdate:modelValue": r[29] ||= (e) => a.value.smtpUser = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.smtpUser]])]), R("label", Mw, [R("span", null, J(t(w)("rechnungswerk", "Passwort")), 1), C(R("input", {
						"onUpdate:modelValue": r[30] ||= (e) => ge.value = e,
						class: "rw-input",
						type: "password",
						placeholder: a.value.smtpPasswordSet ? t(w)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
					}, null, 8, Nw), [[F, ge.value]])])]),
					R("div", Pw, [q(t(U), {
						disabled: !a.value.smtpHost || _e.value,
						onClick: z
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Verbindung testen")), 1)]),
						_: 1
					}, 8, ["disabled"]), P.value ? (X(), B("span", {
						key: 0,
						class: V(["smtp-test__result", ve.value ? "rw-ok" : "rw-err"])
					}, J(P.value), 3)) : n("", !0)])
				], 512), [[y, d.value === "smtp"]]),
				C(R("section", Fw, [
					R("h3", null, J(t(w)("rechnungswerk", "DATEV-Rückmeldung (IMAP, optional)")), 1),
					R("p", Iw, J(t(w)("rechnungswerk", "DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.")), 1),
					R("div", Lw, [
						R("label", Rw, [R("span", null, J(t(w)("rechnungswerk", "Server (Host)")), 1), C(R("input", {
							"onUpdate:modelValue": r[31] ||= (e) => a.value.imapHost = e,
							class: "rw-input",
							type: "text",
							placeholder: "imap.example.com"
						}, null, 512), [[F, a.value.imapHost]])]),
						R("label", zw, [R("span", null, J(t(w)("rechnungswerk", "Port")), 1), C(R("input", {
							"onUpdate:modelValue": r[32] ||= (e) => a.value.imapPort = e,
							class: "rw-input",
							type: "number",
							placeholder: "993"
						}, null, 512), [[
							F,
							a.value.imapPort,
							void 0,
							{ number: !0 }
						]])]),
						R("label", Bw, [R("span", null, J(t(w)("rechnungswerk", "Verschlüsselung")), 1), C(R("select", {
							"onUpdate:modelValue": r[33] ||= (e) => a.value.imapSecurity = e,
							class: "rw-input"
						}, [...r[52] ||= [
							R("option", { value: "ssl" }, "SSL/TLS", -1),
							R("option", { value: "starttls" }, "STARTTLS", -1),
							R("option", { value: "tls" }, "TLS", -1)
						]], 512), [[we, a.value.imapSecurity]])])
					]),
					R("div", Vw, [R("label", Hw, [R("span", null, J(t(w)("rechnungswerk", "Benutzer")), 1), C(R("input", {
						"onUpdate:modelValue": r[34] ||= (e) => a.value.imapUser = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[F, a.value.imapUser]])]), R("label", Uw, [R("span", null, J(t(w)("rechnungswerk", "Passwort")), 1), C(R("input", {
						"onUpdate:modelValue": r[35] ||= (e) => N.value = e,
						class: "rw-input",
						type: "password",
						placeholder: a.value.imapPasswordSet ? t(w)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
					}, null, 8, Ww), [[F, N.value]])])]),
					q(t(Je), {
						modelValue: a.value.imapCleanup,
						disabled: !a.value.imapHost,
						"onUpdate:modelValue": r[36] ||= (e) => a.value.imapCleanup = e
					}, {
						default: _(() => [G(J(t(w)("rechnungswerk", "Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)")), 1)]),
						_: 1
					}, 8, ["modelValue", "disabled"])
				], 512), [[y, d.value === "datev"]]),
				C(R("section", Gw, [
					R("h3", null, J(t(w)("rechnungswerk", "Standardtexte")), 1),
					R("p", Kw, J(t(w)("rechnungswerk", "Anrede-, Einleitungs- und Schlusstexte werden jetzt als Textbausteine verwaltet – getrennt für Rechnungen und Angebote, mit mehreren Vorlagen je Textbereich.")), 1),
					q(t(U), { onClick: f }, {
						icon: _(() => [q(lo, { size: 20 })]),
						default: _(() => [G(" " + J(t(w)("rechnungswerk", "Textbausteine verwalten")), 1)]),
						_: 1
					})
				], 512), [[y, d.value === "texte"]]),
				C(R("section", qw, [
					R("h3", null, J(t(w)("rechnungswerk", "Zugriff & Administration")), 1),
					R("p", Jw, J(t(w)("rechnungswerk", "Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.")), 1),
					R("div", Yw, [
						R("span", Xw, J(t(w)("rechnungswerk", "App-Administratoren")), 1),
						R("p", Zw, J(t(w)("rechnungswerk", "Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.")), 1),
						q(t(Et), {
							modelValue: ue.value,
							"onUpdate:modelValue": r[37] ||= (e) => ue.value = e,
							options: fe.value,
							loading: pe.value,
							multiple: !0,
							keepOpen: "",
							label: "displayName",
							placeholder: t(w)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
							onSearch: ke
						}, {
							"no-options": _(() => [G(J(xe.value), 1)]),
							_: 1
						}, 8, [
							"modelValue",
							"options",
							"loading",
							"placeholder"
						])
					]),
					R("div", Qw, [
						R("span", $w, J(t(w)("rechnungswerk", "Berechtigte Nutzer")), 1),
						R("p", eT, J(t(w)("rechnungswerk", "Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.")), 1),
						q(t(Et), {
							modelValue: de.value,
							"onUpdate:modelValue": r[38] ||= (e) => de.value = e,
							options: fe.value,
							loading: pe.value,
							multiple: !0,
							keepOpen: "",
							label: "displayName",
							placeholder: t(w)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
							onSearch: ke
						}, {
							"no-options": _(() => [G(J(xe.value), 1)]),
							_: 1
						}, 8, [
							"modelValue",
							"options",
							"loading",
							"placeholder"
						])
					])
				], 512), [[y, d.value === "zugriff"]]),
				C(R("section", tT, [R("h3", null, J(t(w)("rechnungswerk", "WerkPlus")), 1), q(GS)], 512), [[y, d.value === "werkplus"]]),
				C(R("section", nT, [R("h3", null, J(t(w)("rechnungswerk", "API-Schlüssel")), 1), q(ES)], 512), [[y, d.value === "apikeys"]]),
				C(R("div", rT, [q(t(U), {
					variant: "primary",
					disabled: t(i).saving || j.value,
					onClick: Ge
				}, {
					icon: _(() => [q(vv, { size: 20 })]),
					default: _(() => [G(" " + J(t(w)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])], 512), [[y, d.value !== "werkplus"]])
			])])) : n("", !0),
			q(Vf, {
				open: b.value,
				name: t(w)("rechnungswerk", "Kleinunternehmer §19 aktivieren"),
				message: t(w)("rechnungswerk", "Damit werden künftige Rechnungen ohne Umsatzsteuer ausgewiesen (§19 UStG). Bestehende festgeschriebene Rechnungen bleiben unverändert. Fortfahren?"),
				confirmLabel: t(w)("rechnungswerk", "Aktivieren"),
				onClose: r[39] ||= (e) => b.value = !1,
				onConfirm: Me
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			q(Vf, {
				open: x.value,
				name: t(w)("rechnungswerk", "Automatischen DATEV-Versand aktivieren"),
				message: t(w)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben automatisch eine E-Mail mit der E-Rechnung an die hinterlegte DATEV-Upload-Mail gesendet. Fortfahren?"),
				confirmLabel: t(w)("rechnungswerk", "Aktivieren"),
				onClose: r[40] ||= (e) => x.value = !1,
				onConfirm: L
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			q(Vf, {
				open: te.value,
				name: t(w)("rechnungswerk", "Automatische Ablage aktivieren"),
				message: t(w)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben die ZUGFeRD-PDF automatisch im gewählten Ordner abgelegt. Alle Personen mit Zugriff auf den Ordner können die Rechnungen sehen. Fortfahren?"),
				confirmLabel: t(w)("rechnungswerk", "Aktivieren"),
				onClose: r[41] ||= (e) => te.value = !1,
				onConfirm: Ie
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			q(Vf, {
				open: S.value,
				name: t(w)("rechnungswerk", "Nummernkreis auf „Fortlaufend“ stellen"),
				message: t(w)("rechnungswerk", "Der Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Der Modus wirkt sich auf alle künftig festgeschriebenen Rechnungen aus. Fortfahren?"),
				confirmLabel: t(w)("rechnungswerk", "Fortlaufend aktivieren"),
				onClose: r[42] ||= (e) => S.value = !1,
				onConfirm: Re
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			q(Vf, {
				open: ne.value,
				name: t(w)("rechnungswerk", "Angebots-Nummernkreis auf „Fortlaufend“ stellen"),
				message: t(w)("rechnungswerk", "Der Angebots-Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Fortfahren?"),
				confirmLabel: t(w)("rechnungswerk", "Fortlaufend aktivieren"),
				onClose: r[43] ||= (e) => ne.value = !1,
				onConfirm: Be
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-a3c5051a"]]), aT = { class: "rw-view" }, oT = { class: "rw-view__head" }, sT = { class: "rw-view__actions" }, cT = ["placeholder", "aria-label"], lT = { class: "rw-hint" }, uT = {
	key: 2,
	class: "rw-table-wrap"
}, dT = { class: "rw-table" }, fT = { class: "rw-muted" }, pT = 50, mT = [
	{
		path: "/",
		redirect: { name: "invoices" }
	},
	{
		path: "/invoices",
		name: "invoices",
		component: qu
	},
	{
		path: "/invoices/new",
		name: "invoice-new",
		component: Rh
	},
	{
		path: "/invoices/:id",
		name: "invoice-detail",
		component: Rh,
		props: !0
	},
	{
		path: "/quotes",
		name: "quotes",
		component: sg
	},
	{
		path: "/quotes/new",
		name: "quote-new",
		component: Rh
	},
	{
		path: "/quotes/:id",
		name: "quote-detail",
		component: Rh,
		props: !0
	},
	{
		path: "/customers",
		name: "customers",
		component: fv
	},
	{
		path: "/products",
		name: "products",
		component: Pg
	},
	{
		path: "/text-snippets",
		name: "text-snippets",
		component: u_
	},
	{
		path: "/me",
		name: "my-contact",
		component: Dv
	},
	{
		path: "/audit",
		name: "audit",
		component: /* @__PURE__ */ H({
			__name: "AuditView",
			setup(e) {
				let r = v([]), i = v(""), a = v(!1), o = v(!1), s = v(!1), c = v("");
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
						let n = await Xf(i.value.trim(), pT, e);
						if (t !== d) return;
						let a = new Set(r.value.map((e) => e.id));
						r.value = e === 0 ? n : [...r.value, ...n.filter((e) => !a.has(e.id))], s.value = n.length === pT;
					} catch {
						t === d && (c.value = w("rechnungswerk", "Das Protokoll konnte nicht geladen werden."));
					} finally {
						t === d && (a.value = !1, o.value = !0);
					}
				}
				function p() {
					f(r.value.length);
				}
				let m;
				return k(i, () => {
					clearTimeout(m), m = setTimeout(() => f(0), 300);
				}), Fe(() => f(0)), (e, d) => {
					let f = l("router-link");
					return X(), B("div", aT, [
						R("div", oT, [R("h2", null, J(t(w)("rechnungswerk", "Protokoll")), 1), R("div", sT, [C(R("input", {
							"onUpdate:modelValue": d[0] ||= (e) => i.value = e,
							class: "rw-input",
							type: "search",
							placeholder: t(w)("rechnungswerk", "Nach Nummer filtern"),
							"aria-label": t(w)("rechnungswerk", "Nach Nummer filtern")
						}, null, 8, cT), [[F, i.value]])])]),
						R("p", lT, J(t(w)("rechnungswerk", "Wer was an Rechnungen und Angeboten getan hat, auch über API-Schlüssel. Vorgänge vor Einführung des Protokolls sind nicht erfasst.")), 1),
						c.value ? (X(), M(t($), {
							key: 0,
							type: "error",
							text: c.value
						}, null, 8, ["text"])) : n("", !0),
						o.value && r.value.length === 0 && !c.value ? (X(), M(t(ze), {
							key: 1,
							name: t(w)("rechnungswerk", "Keine Einträge")
						}, {
							icon: _(() => [q(So, { size: 20 })]),
							_: 1
						}, 8, ["name"])) : r.value.length > 0 ? (X(), B("div", uT, [R("table", dT, [R("thead", null, [R("tr", null, [
							R("th", null, J(t(w)("rechnungswerk", "Zeitpunkt")), 1),
							R("th", null, J(t(w)("rechnungswerk", "Beleg")), 1),
							R("th", null, J(t(w)("rechnungswerk", "Vorgang")), 1),
							R("th", null, J(t(w)("rechnungswerk", "Durch")), 1)
						])]), R("tbody", null, [(X(!0), B(T, null, Y(r.value, (e) => (X(), B("tr", { key: e.id }, [
							R("td", fT, J(t(ep)(e.createdAt)), 1),
							R("td", null, [e.documentExists ? (X(), M(f, {
								key: 0,
								to: u(e)
							}, {
								default: _(() => [G(J(t($f)(e)), 1)]),
								_: 2
							}, 1032, ["to"])) : (X(), B(T, { key: 1 }, [G(J(t($f)(e)), 1)], 64))]),
							R("td", null, J(t(Zf)(e.action)), 1),
							R("td", null, J(t(Qf)(e)), 1)
						]))), 128))])])])) : n("", !0),
						s.value ? (X(), M(t(U), {
							key: 3,
							disabled: a.value,
							onClick: p
						}, {
							default: _(() => [G(J(t(w)("rechnungswerk", "Mehr laden")), 1)]),
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
		component: iT
	}
], hT = ci({
	history: Ar(),
	routes: mT
});
// src/main.js
document.addEventListener("DOMContentLoaded", () => {
	let e = De(Ws);
	e.use(on()), e.use(hT), e.use(Vt, { themes: { tooltip: { delay: {
		show: 100,
		hide: 0
	} } } }), e.mount(".app-rechnungswerk");
});
