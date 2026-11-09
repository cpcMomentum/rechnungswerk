import { $ as e, $n as t, $t as n, An as r, At as i, B as a, Bn as o, Bt as s, C as c, Cn as l, Ct as u, D as d, Dn as f, Dt as p, E as m, Et as h, F as g, Fn as _, G as ee, Gn as v, Gt as y, H as b, Hn as x, Ht as S, I as C, In as w, It as T, J as te, Jn as E, Jt as D, K as O, Kn as ne, Kt as k, L as re, Ln as ie, Mn as ae, Mt as oe, N as A, Nn as j, Nt as se, O as ce, Ot as le, P as ue, Pn as de, Q as M, Qn as fe, Qt as N, R as pe, Rn as me, Rt as P, S as he, Sn as F, St as ge, T as _e, Tn as ve, Tt as ye, U as be, Un as xe, Ut as Se, V as Ce, Vn as we, Vt as Te, W as Ee, Wn as De, Wt as I, X as Oe, Xn as ke, Xt as L, Y as Ae, Yt as je, Z as R, Zt as z, _ as Me, _n as Ne, _t as Pe, an as Fe, at as Ie, b as Le, bn as Re, bt as ze, c as Be, cn as Ve, ct as He, d as Ue, dn as B, dt as We, en as V, er as H, et as Ge, f as Ke, fn as qe, ft as Je, g as Ye, gn as Xe, gt as Ze, h as Qe, hn as $e, ht as et, in as U, it as tt, jn as nt, jt as rt, k as it, kn as at, kt as ot, l as st, ln as ct, lt as W, m as lt, mn as ut, mt as G, nn as K, nr as dt, nt as ft, on as pt, ot as mt, p as ht, pn as gt, pt as _t, q as vt, qn as yt, qt as q, r as bt, rn as J, rr as Y, rt as xt, sn as St, st as Ct, t as wt, tr as Tt, tt as Et, un as Dt, ut as Ot, vn as kt, vt as At, w as jt, wn as Mt, wt as Nt, x as Pt, xn as X, xt as Ft, yn as Z, yt as It, z as Lt, zn as Rt, zt } from "./NcSelect-DezlyrCK.chunk.mjs";
// node_modules/pinia/dist/pinia.js
var Bt = typeof window < "u", Vt, Ht = (e) => Vt = e, Ut = Symbol();
function Wt(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Gt = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Kt(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function qt(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Qt(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Jt(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Yt(e) {
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
var Xt = typeof navigator == "object" ? navigator : { userAgent: "" }, Zt = /Macintosh/.test(Xt.userAgent) && /AppleWebKit/.test(Xt.userAgent) && !/Safari/.test(Xt.userAgent), Qt = Bt ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Zt ? $t : "msSaveOrOpenBlob" in Xt ? en : tn : () => {};
function $t(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Yt(r) : Jt(r.href) ? qt(e, t, n) : (r.target = "_blank", Yt(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Yt(r);
	}, 0));
}
function en(e, t = "download", n) {
	if (typeof e == "string") {
		if (Jt(e)) qt(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Yt(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Kt(e, n), t);
}
function tn(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return qt(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Gt.HTMLElement)) || "safari" in Gt, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Zt) && typeof FileReader < "u") {
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
var { assign: nn } = Object;
function rn() {
	let e = ie(!0), t = e.run(() => v({})), n = [], r = [], i = x({
		install(e) {
			Ht(i), i._a = e, e.provide(Ut, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var an = () => {};
function on(e, t, n, r = an) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && me() && xe(i), i;
}
function sn(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var cn = (e) => e(), ln = Symbol(), un = Symbol();
function dn(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!Object.hasOwn(t, n)) continue;
		let r = t[n], i = e[n];
		if (Wt(i) && Wt(r) && Object.hasOwn(e, n) && !o(r) && !Rt(r)) {
			e[n] = dn(i, r);
			let t = E(e)[n];
			o(t) && we(t) && fe(t);
		} else e[n] = r;
	}
	return e;
}
var fn = Symbol();
function pn(e) {
	return !e || typeof e != "object" || !Object.hasOwn(e, fn);
}
var { assign: mn } = Object;
function hn(e) {
	return !!(o(e) && e.effect);
}
function gn(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), mn(ke(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = x(L(() => {
			Ht(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = _n(e, l, t, n, r, !0), c;
}
function _n(e, t, n = {}, r, i, a) {
	let s, c = mn({ actions: {} }, n), l = { deep: !0 }, u, d, f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m, h = r.state.value[e];
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
		}) : (dn(r.state.value[e], t), n = {
			type: "patch object",
			payload: t,
			storeId: e,
			events: m
		});
		let i = g = Symbol();
		qe().then(() => {
			g === i && (u = !0);
		}), d = !0, sn(f, n, r.state.value[e]);
	}
	let ee = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			mn(e, t);
		});
	} : an;
	function v() {
		s.stop(), f.clear(), p.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (ln in t) return t[un] = n, t;
		let i = function() {
			Ht(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			sn(p, {
				args: n,
				name: i[un],
				store: x,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : x, n);
			} catch (e) {
				throw sn(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (sn(a, e), e)).catch((e) => (sn(o, e), Promise.reject(e))) : (sn(a, l), l);
		};
		return i[ln] = !0, i[un] = n, i;
	}, b = {
		_p: r,
		$id: e,
		$onAction: on.bind(null, p),
		$patch: _,
		$reset: ee,
		$subscribe(t, n = {}) {
			if (f.has(t)) return an;
			let i = on(f, t, n.detached, () => a()), a = s.run(() => j(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? d : u) && t({
					storeId: e,
					type: "direct",
					events: m
				}, r);
			}, mn({}, l, n)));
			return i;
		},
		$dispose: v
	}, x = De(b);
	r._s.set(e, x);
	let S = (r._a && r._a.runWithContext || cn)(() => r._e.run(() => (s = ie()).run(() => t({ action: y }))));
	for (let t in S) {
		let n = S[t];
		o(n) && !hn(n) || Rt(n) ? a || (h && pn(n) && (o(n) ? n.value = h[t] : ((n instanceof Set || n instanceof Map) && n.clear(), dn(n, h[t]))), r.state.value[e][t] = n) : typeof n == "function" && (S[t] = y(n, t), c.actions[t] = n);
	}
	return mn(x, S), mn(E(x), S), Object.defineProperty(x, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			_((t) => {
				mn(t, e);
			});
		}
	}), r._p.forEach((e) => {
		let t = s.run(() => e({
			store: x,
			app: r._a,
			pinia: r,
			options: c
		}));
		mn(x, t);
	}), h && a && n.hydrate && n.hydrate(x.$state, h), u = !0, d = !0, x;
}
function vn(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Ve();
		return n ||= o ? ct(Ut, null) : null, n && Ht(n), n = Vt, n._s.has(e) || (i ? _n(e, t, r, n) : gn(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// node_modules/vue-router/dist/devtools-CxgSYwGp.js
var yn = typeof document < "u", bn = /#/g, xn = /&/g, Sn = /\//g, Cn = /=/g, wn = /\?/g, Tn = /\+/g, En = /%5B/g, Dn = /%5D/g, On = /%5E/g, kn = /%60/g, An = /%7B/g, jn = /%7C/g, Mn = /%7D/g, Nn = /%20/g;
function Pn(e) {
	return e == null ? "" : encodeURI("" + e).replace(jn, "|").replace(En, "[").replace(Dn, "]");
}
function Fn(e) {
	return Pn(e).replace(An, "{").replace(Mn, "}").replace(On, "^");
}
function In(e) {
	return Pn(e).replace(Tn, "%2B").replace(Nn, "+").replace(bn, "%23").replace(xn, "%26").replace(kn, "`").replace(An, "{").replace(Mn, "}").replace(On, "^");
}
function Ln(e) {
	return In(e).replace(Cn, "%3D");
}
function Rn(e) {
	return Pn(e).replace(bn, "%23").replace(wn, "%3F");
}
function zn(e) {
	return Rn(e).replace(Sn, "%2F");
}
function Bn(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var Vn = /\/$/, Hn = (e) => e.replace(Vn, "");
function Un(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = Zn(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Bn(o)
	};
}
function Wn(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Gn(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Kn(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && qn(t.matched[r], n.matched[i]) && Jn(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function qn(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Jn(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Yn(e[n], t[n])) return !1;
	return !0;
}
function Yn(e, t) {
	return Pe(e) ? Xn(e, t) : Pe(t) ? Xn(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Xn(e, t) {
	return Pe(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function Zn(e, t) {
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
var Qn = {
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
function $n(e) {
	if (!e) {
		if (yn) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Hn(e);
}
var er = /^[^#]+#/;
function tr(e, t) {
	return e.replace(er, "#") + t;
}
function nr(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var rr = () => history.scrollRestoration === "manual" ? {
	left: window.scrollX,
	top: window.scrollY
} : null;
function ir(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = nr(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function ar(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var or = /* @__PURE__ */ new Map();
function sr(e) {
	or.set(e, rr());
}
function cr(e) {
	let t = or.get(e);
	return or.delete(e), t;
}
function lr(e, t = !1) {
	for (let n of or.keys()) {
		let r = parseInt(n, 10);
		(r === e || !t && r > e) && or.delete(n);
	}
}
function ur(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function dr(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function fr(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(Tn, " "), i = r.indexOf("="), a = Bn(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Bn(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			Pe(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function pr(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = Ln(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (Pe(r) ? r.map((e) => e && In(e)) : [r && In(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function mr(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = Pe(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function hr() {
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
function gr(e, t, n) {
	let r = e.value;
	if (!r) return;
	let i = r, a = () => {
		i[t].delete(n);
	};
	kt(a), Xe(a), gt(() => {
		let r = e.value;
		r && (i = r), i[t].add(n);
	}), i[t].add(n);
}
function _r(e) {
	gr(ct(Ft, {}), "leaveGuards", e);
}
function vr(e) {
	gr(ct(Ft, {}), "updateGuards", e);
}
function yr(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(et(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : ur(e) ? c(et(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function br(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (ze(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(yr(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = At(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && yr(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function xr(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => qn(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => qn(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.js
var Sr = () => location.protocol + "//" + location.host;
function Cr(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Gn(n, "");
	}
	return Gn(n, e) + r + i;
}
function wr(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = Cr(e, location), c = n.value, l = t.value, u = 0;
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
		e.state && e.replaceState(G({}, e.state, { scroll: rr() }), "");
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
function Tr(e, t, n, r = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: null
	};
}
function Er(e) {
	let { history: t, location: n } = window, r = { value: Cr(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : Sr() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			console.error(e), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		let o = G({}, t.state, Tr(i.value.back, e, i.value.forward, !0), n, { position: i.value.position });
		a(e, o, !0), lr(o.position, !0), r.value = e;
	}
	function s(e, n) {
		let o = G({}, i.value, t.state, {
			forward: e,
			scroll: rr()
		});
		a(o.current, o, !0), a(e, G({}, Tr(r.value, e, null), { position: o.position + 1 }, n), !1), lr(o.position), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function Dr(e) {
	e = $n(e);
	let t = Er(e), n = wr(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = G({
		location: "",
		base: e,
		go: r,
		createHref: tr.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function Or(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Dr(e);
}
var kr = {
	type: 0,
	value: ""
}, Ar = /[a-zA-Z0-9_]/;
function jr(e) {
	if (!e) return [[]];
	if (e === "/") return [[kr]];
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
			c === "(" ? n = 2 : Ar.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
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
var Mr = "[^/]+?", Nr = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, Pr = /[.+*?^${}()[\]/\\]/g;
function Fr(e, t) {
	let n = G({}, Nr, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(Pr, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || Mr;
				if (u !== Mr) {
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
				if (Pe(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = Pe(c) ? c.join("/") : c;
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
function Ir(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Lr(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = Ir(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (Rr(r)) return 1;
		if (Rr(i)) return -1;
	}
	return i.length - r.length;
}
function Rr(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var zr = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function Br(e, t, n) {
	let r = Fr(jr(e.path), n), i = G(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function Vr(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = ge(zr, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = Ur(e);
		s.aliasOf = r && r.record;
		let l = ge(t, e), d = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) d.push(Ur(G({}, s, {
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
			if (f = Br(t, n, l), r ? r.alias.push(f) : (p ||= f, p !== f && p.alias.push(f), i && e.name && !Gr(f) && o(e.name)), Yr(f) && c(f), s.children) {
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
		if (dr(e)) {
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
		let t = qr(e, n);
		n.splice(t, 0, e), e.record.name && !Gr(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw et(1, { location: e });
			s = i.record.name, a = G(Hr(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && Hr(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw et(1, {
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
			meta: Kr(c)
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
function Hr(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function Ur(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: Wr(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Wr(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function Gr(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Kr(e) {
	return e.reduce((e, t) => G(e, t.meta), {});
}
function qr(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		Lr(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = Jr(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function Jr(e) {
	let t = e;
	for (; t = t.parent;) if (Yr(t) && Lr(e, t) === 0) return t;
}
function Yr({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Xr(e) {
	let n = ct(ye), r = ct(Nt), i = L(() => {
		let r = t(e.to);
		return n.resolve(r);
	}), a = L(() => {
		let { matched: e } = i.value, { length: t } = e, n = e[t - 1], a = r.matched;
		if (!n || !a.length) return -1;
		let o = a.findIndex(qn.bind(null, n));
		if (o > -1) return o;
		let s = ti(e[t - 2]);
		return t > 1 && ti(n) === s && a[a.length - 1].path !== s ? a.findIndex(qn.bind(null, e[t - 2])) : o;
	}), o = L(() => a.value > -1 && ei(r.params, i.value.params)), s = L(() => a.value > -1 && a.value === r.matched.length - 1 && Jn(r.params, i.value.params));
	function c(r = {}) {
		if ($r(r)) {
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
function Zr(e) {
	return e.length === 1 ? e[0] : e;
}
var Qr = /* @__PURE__ */ U({
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
	useLink: Xr,
	setup(e, { slots: t }) {
		let n = De(Xr(e)), { options: r } = ct(ye), i = L(() => ({
			[ni(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[ni(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && Zr(t.default(n));
			return e.custom ? r : St("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function $r(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function ei(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (Pe(r)) {
			if (!Pe(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
		} else if (r !== i) return !1;
	}
	return !0;
}
function ti(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var ni = (e, t, n) => e ?? t ?? n, ri = /*#__PURE__*/ U({
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
		Re(i, L(() => c.value + 1)), Re(Ft, l), Re(h, o);
		let u = /* @__PURE__ */ new Set();
		Re(p, u);
		let d = v(), f = Qn, { app: m } = Fe().appContext;
		return j(() => [
			d.value,
			l.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && qn(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let t = o.value, i = e.name, a = l.value, s = a && a.components[i];
			if (!s) return ii(r.default, {
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
			}), _ = St(s, G({}, p, n, {
				onVnodeUnmounted: h,
				onVnodeMounted: g,
				onVnodeUpdated: g,
				ref: d
			}));
			return ii(r.default, {
				Component: _,
				route: t
			}) || _;
		};
	}
});
function ii(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var ai = ri;
function oi(e) {
	let n = e.matcher || Vr(e.routes, e), r = e.parseQuery || fr, i = e.stringifyQuery || pr, a = e.history, o = hr(), s = hr(), c = hr(), l = yt(Qn), d = yt(0), f = Qn;
	yn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let p = _t.bind(null, (e) => "" + e), m = _t.bind(null, zn), g = _t.bind(null, Bn);
	function _(e, t) {
		let r, i;
		dr(e) ? (r = n.getRecordMatcher(e), i = t) : i = e;
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
			t ||= e.startsWith("/") ? Qn : l.value;
			let i = Un(r, e, t.path), o = n.resolve({ path: i.path }, t), s = a.createHref(i.fullPath);
			return G(i, o, {
				params: g(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		t = G({}, t || (e.path != null && e.path.startsWith("/") && !("name" in e && e.name) ? Qn : l.value));
		let o;
		if (e.path != null) o = G({}, e, { path: Un(r, e.path, t.path).path });
		else {
			let n = G({}, e.params);
			for (let e in n) n[e] ?? delete n[e];
			o = G({}, e, { params: m(n) }), t.params = m(t.params);
		}
		let s = n.resolve(o, t), c = e.hash || "";
		s.params = p(g(s.params));
		let u = Wn(i, G({}, e, {
			hash: Fn(c),
			path: s.path
		})), f = a.createHref(u);
		return G({
			fullPath: u,
			hash: c,
			query: i === pr ? mr(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: f
		});
	}
	function S(e) {
		return typeof e == "string" ? Un(r, e, l.value.path) : G({}, e);
	}
	function C(e, t) {
		if (f !== e) return et(8, {
			from: t,
			to: e
		});
	}
	function w(e) {
		return E(e);
	}
	function T(e) {
		return w(G(S(e), { replace: !0 }));
	}
	function te(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = S(i) : { path: i }, i.params = {}), G({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function E(e, t) {
		let n = f = x(e), r = l.value, a = e.state, o = e.force, s = e.replace === !0, c = te(n, r);
		if (c) return E(G(S(c), {
			state: typeof c == "object" ? G({}, a, c.state) : a,
			force: o,
			replace: s
		}), t || n);
		let u = n;
		u.redirectedFrom = t;
		let d;
		return !o && Kn(i, r, n) && (d = et(16, {
			to: u,
			from: r
		}), de(r, r, !0, !1)), (d ? Promise.resolve(d) : k(u, r)).catch((e) => It(e) ? It(e, 2) ? e : ue(e) : ce(e, u, r)).then((e) => {
			if (e) {
				if (It(e, 2)) return E(G({ replace: s }, S(e.to), {
					state: typeof e.to == "object" ? G({}, a, e.to.state) : a,
					force: o
				}), t || u);
			} else e = ie(u, r, !0, s, a);
			return re(u, r, e), e;
		});
	}
	function D(e, t) {
		let n = C(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function O(e) {
		let t = N.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function k(e, t) {
		let n, [r, i, a] = xr(e, t);
		n = br(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(yr(r, e, t));
		});
		let c = D.bind(null, e, t);
		return n.push(c), me(n).then(() => {
			n = [];
			for (let r of o.list()) n.push(yr(r, e, t));
			return n.push(c), me(n);
		}).then(() => {
			n = br(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(yr(r, e, t));
			});
			return n.push(c), me(n);
		}).then(() => {
			n = [];
			for (let r of a) if (r.beforeEnter) {
				if (Pe(r.beforeEnter)) for (let i of r.beforeEnter) n.push(yr(i, e, t));
				else n.push(yr(r.beforeEnter, e, t));
			}
			return n.push(c), me(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = br(a, "beforeRouteEnter", e, t, O), n.push(c), me(n))).then(() => {
			n = [];
			for (let r of s.list()) n.push(yr(r, e, t));
			return n.push(c), me(n);
		}).catch((e) => It(e, 8) ? e : Promise.reject(e));
	}
	function re(e, t, n) {
		c.list().forEach((r) => O(() => r(e, t, n)));
	}
	function ie(e, t, n, r, i) {
		let o = C(e, t);
		if (o) return o;
		let s = t === Qn, c = yn ? history.state : {};
		n && (r || s ? a.replace(e.fullPath, G({ scroll: s && c && c.scroll }, i)) : a.push(e.fullPath, i)), l.value = e, de(e, t, n, s), ue();
	}
	let ae;
	function oe() {
		ae ||= a.listen((e, t, n) => {
			if (!pe.listening) return;
			let r = x(e), i = te(r, pe.currentRoute.value);
			if (i) {
				E(G(i, {
					replace: !0,
					force: !0
				}), r).catch(u);
				return;
			}
			f = r;
			let o = l.value;
			yn && n.delta && sr(ar(o.fullPath, n.delta)), k(r, o).catch((e) => It(e, 12) ? e : It(e, 2) ? (E(G(S(e.to), { force: !0 }), r).then((e) => {
				It(e, 20) && !n.delta && n.type === "pop" && a.go(-1, !1);
			}).catch(u), Promise.reject()) : (n.delta && a.go(-n.delta, !1), ce(e, r, o))).then((e) => {
				e ||= ie(r, o, !1), e && (n.delta && !It(e, 8) ? a.go(-n.delta, !1) : n.type === "pop" && It(e, 20) && a.go(-1, !1)), re(r, o, e);
			}).catch(u);
		});
	}
	let A = hr(), j = hr(), se;
	function ce(e, t, n) {
		ue(e);
		let r = j.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function le() {
		return se && l.value !== Qn ? Promise.resolve() : new Promise((e, t) => {
			A.add([e, t]);
		});
	}
	function ue(e) {
		return se || (se = !e, oe(), A.list().forEach(([t, n]) => e ? n(e) : t()), A.reset()), e;
	}
	function de(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!yn || !a) return Promise.resolve();
		let o = !r && cr(ar(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return qe().then(() => a(t, n, o)).then((e) => t === l.value && e && ir(e)).catch((e) => t === l.value && ce(e, t, n));
	}
	let M = (e) => a.go(e), fe, N = /* @__PURE__ */ new Set(), pe = {
		currentRoute: l,
		listening: !0,
		addRoute: _,
		removeRoute: ee,
		clearRoutes: v,
		hasRoute: b,
		getRoutes: y,
		resolve: x,
		options: e,
		push: w,
		replace: T,
		go: M,
		back: () => M(-1),
		forward: () => M(1),
		beforeEach: o.add,
		beforeResolve: s.add,
		afterEach: c.add,
		onError: j.add,
		isReady: le,
		install(e) {
			e.component("RouterLink", Qr), e.component("RouterView", ai), e.config.globalProperties.$router = pe, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => t(l)
			}), yn && !fe && l.value === Qn && (fe = !0, w(a.location).catch((e) => {}));
			let n = {};
			for (let e in Qn) Object.defineProperty(n, e, {
				get: () => l.value[e],
				enumerable: !0
			});
			e.provide(ye, pe), e.provide(Nt, ne(n)), e.provide(h, l);
			let r = e.unmount;
			N.add(e), e.unmount = function() {
				N.delete(e), N.size < 1 && (f = Qn, ae && ae(), ae = null, l.value = Qn, fe = !1, se = !1), r();
			};
		}
	};
	function me(e) {
		return e.reduce((e, t) => e.then(() => O(t)), Promise.resolve());
	}
	return pe;
}
// node_modules/@nextcloud/vue/dist/chunks/constants2.mjs
var si = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), ci = /* @__PURE__ */ Symbol.for("NcContent:selector");
// node_modules/@nextcloud/vue/dist/chunks/NcContent.mjs
Oe(Ie);
var li = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM140 44C132.268 44 126 50.268 126 58V292C126 299.732 132.268 306 140 306H372C379.732 306 386 299.732 386 292V58C386 50.268 379.732 44 372 44H140Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", ui = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM112 44C119.732 44 126 50.268 126 58V292C126 299.732 119.732 306 112 306H20C12.268 306 6 299.732 6 292V58C6 50.268 12.268 44 20 44H112Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", di = { class: "vue-skip-actions__container" }, fi = { class: "vue-skip-actions__headline" }, pi = { class: "vue-skip-actions__buttons" }, mi = /* @__PURE__ */ Ot(/* @__PURE__ */ U({
	__name: "NcContent",
	props: { appName: {} },
	setup(e) {
		let n = e;
		Re(si, c), Re(ci, "#content-vue"), Re("appName", L(() => n.appName));
		let r = Ct(), i = v(!1), a = v(), o = L(() => a.value === "navigation" ? ui : li);
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
		return (n, c) => (Z(), V("div", {
			id: "content-vue",
			class: H(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": t(Je) }]])
		}, [(Z(), N(je, { to: "#skip-actions" }, [z("div", di, [
			z("div", fi, Y(t(R)("Keyboard navigation help")), 1),
			z("div", pi, [w(J(W, {
				href: "#app-navigation-vue",
				variant: "tertiary",
				onClick: q(s, ["prevent"]),
				onFocusin: c[0] ||= (e) => a.value = "navigation",
				onMouseover: c[1] ||= (e) => a.value = "navigation"
			}, {
				default: _(() => [K(Y(t(R)("Skip to app navigation")), 1)]),
				_: 1
			}, 512), [[y, i.value]]), J(W, {
				href: "#app-content-vue",
				variant: "tertiary",
				onFocusin: c[2] ||= (e) => a.value = "content",
				onMouseover: c[3] ||= (e) => a.value = "content"
			}, {
				default: _(() => [K(Y(t(R)("Skip to main content")), 1)]),
				_: 1
			})]),
			w(J(He, {
				class: "vue-skip-actions__image",
				svg: o.value,
				size: "auto"
			}, null, 8, ["svg"]), [[y, !t(r)]])
		])])), F(n.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-d13dcb98"]]), hi = { name: "NcAppNavigationList" }, gi = { class: "app-navigation-list" };
function _i(e, t, n, r, i, a) {
	return Z(), V("ul", gi, [F(e.$slots, "default", {}, void 0, !0)]);
}
var vi = /* @__PURE__ */ Ot(hi, [["render", _i], ["__scopeId", "data-v-d72957ed"]]);
// node_modules/@nextcloud/vue/dist/chunks/NcAppNavigation.mjs
Oe(Ge);
var yi = { class: "app-navigation-toggle-wrapper" }, bi = /* @__PURE__ */ Ot(/* @__PURE__ */ U({
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
		return (e, i) => (Z(), V("div", yi, [J(t(W), {
			class: "app-navigation-toggle",
			"aria-controls": "app-navigation-vue",
			"aria-expanded": n.value ? "true" : "false",
			"aria-label": r.value,
			title: r.value,
			variant: "tertiary",
			onClick: i[0] ||= (e) => n.value = !n.value
		}, {
			icon: _(() => [J(He, {
				path: t(O),
				directional: ""
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-expanded",
			"aria-label",
			"title"
		])]));
	}
}), [["__scopeId", "data-v-e8177cc7"]]), xi = [
	"aria-hidden",
	"aria-label",
	"aria-labelledby",
	"inert"
], Si = { class: "app-navigation__search" }, Ci = /* @__PURE__ */ Ot(/* @__PURE__ */ U({
	__name: "NcAppNavigation",
	props: {
		ariaLabel: {},
		ariaLabelledby: {}
	},
	setup(e) {
		let r = e, i, a = ct(si, () => ae("NcAppNavigation is not mounted inside NcContent, this is probably an error."), !1), o = nt("appNavigationContainer"), s = Ct(), c = v(!s.value), l = L(() => s.value && c.value);
		de(() => {
			!r.ariaLabel && !r.ariaLabelledby && ae("NcAppNavigation requires either `ariaLabel` or `ariaLabelledby` to be set for accessibility.");
		}), j(s, (e) => {
			c.value = !e, rt("navigation-toggled", { open: c.value });
		}), j(l, () => {
			f();
		}), Ne(() => {
			a(!0), oe("toggle-navigation", d), rt("navigation-toggled", { open: c.value }), i = Ae(o.value, {
				allowOutsideClick: !0,
				clickOutsideDeactivates: () => (s.value && (i.deactivate({ returnFocus: !1 }), u(!1)), !1),
				fallbackFocus: o.value,
				trapStack: pe(),
				escapeDeactivates: !1
			}), f();
		}), kt(() => {
			a(!1), se("toggle-navigation", d), i.deactivate();
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
		return (r, i) => (Z(), V("div", {
			ref: "appNavigationContainer",
			class: H(["app-navigation", {
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
			onKeydown: k(p, ["esc"])
		}, [
			z("div", Si, [F(r.$slots, "search", {}, void 0, !0)]),
			z("div", { class: H(["app-navigation__body", { "app-navigation__body--no-list": !r.$slots.list }]) }, [F(r.$slots, "default", {}, void 0, !0)], 2),
			r.$slots.list ? (Z(), N(vi, {
				key: 0,
				class: "app-navigation__list"
			}, {
				default: _(() => [F(r.$slots, "list", {}, void 0, !0)]),
				_: 3
			})) : n("", !0),
			F(r.$slots, "footer", {}, void 0, !0)
		], 40, xi), J(bi, {
			open: c.value,
			"onUpdate:open": u
		}, null, 8, ["open"])], 2));
	}
}), [["__scopeId", "data-v-ec9c3f18"]]), wi = {
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
}, Ti = ["aria-hidden", "aria-label"], Ei = [
	"fill",
	"width",
	"height"
], Di = { key: 0 };
function Oi(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon chevron-up-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Di, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, null, -1)], 8, Ei))], 16, Ti);
}
var ki = /* @__PURE__ */ Ot(wi, [["render", Oi]]), Ai = {
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
}, ji = ["aria-hidden", "aria-label"], Mi = [
	"fill",
	"width",
	"height"
], Ni = { key: 0 };
function Pi(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon arrow-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Ni, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, null, -1)], 8, Mi))], 16, ji);
}
var Fi = /* @__PURE__ */ Ot(Ai, [["render", Pi]]);
// node_modules/@nextcloud/vue/dist/chunks/NcInputConfirmCancel.mjs
Oe(e);
var Ii = {
	name: "NcInputConfirmCancel",
	components: {
		IconArrowRight: Fi,
		IconClose: C,
		NcButton: W
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
}, Li = ["placeholder"];
function Ri(e, t, n, r, i, a) {
	let o = l("IconArrowRight"), s = l("NcButton"), c = l("IconClose");
	return Z(), V("div", { class: H(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": r.isLegacy34 }]) }, [z("form", {
		onSubmit: t[1] ||= q((...e) => a.confirm && a.confirm(...e), ["prevent"]),
		onKeydown: t[2] ||= k(q((...e) => a.cancel && a.cancel(...e), [
			"exact",
			"stop",
			"prevent"
		]), ["esc"]),
		onClick: t[3] ||= q(() => {}, ["stop", "prevent"])
	}, [
		w(z("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.valueModel = e,
			type: "text",
			class: "app-navigation-input-confirm__input",
			placeholder: n.placeholder
		}, null, 8, Li), [[I, a.valueModel]]),
		J(s, {
			"aria-label": i.labelConfirm,
			type: "submit",
			variant: "primary",
			onClick: q(a.confirm, ["stop", "prevent"])
		}, {
			icon: _(() => [J(o, { size: 20 })]),
			_: 1
		}, 8, ["aria-label", "onClick"]),
		J(s, {
			"aria-label": i.labelCancel,
			type: "reset",
			variant: n.primary ? "primary" : "tertiary",
			onClick: q(a.cancel, ["stop", "prevent"])
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
var zi = /* @__PURE__ */ Ot(Ii, [["render", Ri], ["__scopeId", "data-v-6926a0b8"]]), Bi = U({
	name: "NcVNodes",
	props: { vnodes: {
		type: [Array, Object],
		default: null
	} },
	render() {
		return this.vnodes || this.$slots?.default?.({});
	}
}), Vi = {
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
}, Hi = ["aria-hidden", "aria-label"], Ui = [
	"fill",
	"width",
	"height"
], Wi = { key: 0 };
function Gi(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon pencil-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Wi, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, null, -1)], 8, Ui))], 16, Hi);
}
var Ki = /* @__PURE__ */ Ot(Vi, [["render", Gi]]), qi = {
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
}, Ji = ["aria-hidden", "aria-label"], Yi = [
	"fill",
	"width",
	"height"
], Xi = { key: 0 };
function Zi(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon undo-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Xi, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, null, -1)], 8, Yi))], 16, Ji);
}
var Qi = /* @__PURE__ */ Ot(qi, [["render", Zi]]);
Oe(Et);
var $i = {
	name: "NcAppNavigationIconCollapsible",
	components: {
		NcButton: W,
		ChevronDown: re,
		ChevronUp: ki
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
function ea(e, t, n, r, i, a) {
	let o = l("ChevronUp"), s = l("ChevronDown"), c = l("NcButton");
	return Z(), N(c, {
		class: H(["icon-collapse", {
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
var ta = /* @__PURE__ */ Ot($i, [["render", ea], ["__scopeId", "data-v-cfbd3794"]]);
Oe(ft, mt);
var na = {
	name: "NcAppNavigationItem",
	components: {
		NcActions: m,
		NcActionButton: ue,
		NcAppNavigationIconCollapsible: ta,
		NcInputConfirmCancel: zi,
		NcLoadingIcon: _e,
		NcVNodes: Bi,
		Pencil: Ki,
		Undo: Qi
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
			isMobile: Ct(),
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
}, ra = ["id"], ia = [
	"aria-current",
	"aria-description",
	"aria-expanded",
	"href",
	"target",
	"title",
	"onClick"
], aa = {
	key: 0,
	class: "editingContainer"
}, oa = {
	key: 1,
	class: "app-navigation-entry__deleted"
}, sa = { class: "app-navigation-entry__deleted-description" }, ca = {
	key: 0,
	class: "app-navigation-entry__counter-wrapper"
}, la = {
	key: 0,
	class: "app-navigation-entry__children"
};
function ua(e, t, r, i, a, o) {
	let s = l("NcLoadingIcon"), c = l("NcInputConfirmCancel"), u = l("Pencil"), d = l("NcActionButton"), f = l("Undo"), p = l("NcActions"), m = l("NcAppNavigationIconCollapsible");
	return Z(), V("li", {
		id: r.id,
		class: H([{
			"app-navigation-entry--opened": a.opened,
			"app-navigation-entry--pinned": r.pinned,
			"app-navigation-entry--collapsible": r.allowCollapse && !!e.$slots.default
		}, "app-navigation-entry-wrapper"])
	}, [(Z(), N(ve(o.isRouterLink ? "router-link" : "NcVNodes"), Tt(pt({ ...o.isRouterLink && {
		custom: !0,
		to: r.to
	} })), {
		default: _(({ href: l, navigate: h, isActive: g }) => [z("div", { class: H(["app-navigation-entry", {
			"app-navigation-entry--editing": a.editingActive,
			"app-navigation-entry--deleted": r.undo,
			"app-navigation-entry--legacy": i.isLegacy34,
			active: r.to && g || r.active
		}]) }, [
			r.undo ? n("", !0) : (Z(), V("a", {
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
				onKeydown: t[3] ||= k(q((...e) => o.handleTab && o.handleTab(...e), ["exact"]), ["tab"])
			}, [
				z("div", { class: H(["app-navigation-entry-icon", { [r.icon]: r.icon }]) }, [r.loading ? (Z(), N(s, { key: 0 })) : F(e.$slots, "icon", { active: r.active || r.to && g }, void 0, !0, 1)], 2),
				z("span", { class: H(["app-navigation-entry__name", { "hidden-visually": a.editingActive }]) }, Y(r.name), 3),
				a.editingActive ? (Z(), V("div", aa, [J(c, {
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
			], 40, ia)),
			r.undo ? (Z(), V("div", oa, [z("div", sa, Y(r.name), 1)])) : n("", !0),
			(e.$slots.actions || e.$slots.counter || r.editable || r.undo) && !a.editingActive ? (Z(), V("div", {
				key: 2,
				class: H(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": r.forceDisplayActions || a.menuOpenLocalValue || r.menuOpen }])
			}, [e.$slots.counter ? (Z(), V("div", ca, [F(e.$slots, "counter", {}, void 0, !0)])) : n("", !0), e.$slots.actions || r.editable && !a.editingActive || r.undo ? (Z(), N(p, {
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
						default: _(() => [K(" " + Y(r.editLabel), 1)]),
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
				onClick: q(o.toggleCollapse, ["prevent", "stop"])
			}, null, 8, [
				"active",
				"open",
				"onClick"
			])) : n("", !0),
			F(e.$slots, "extra", {}, void 0, !0)
		], 2)]),
		_: 3
	}, 16)), o.canHaveChildren && e.$slots.default ? (Z(), V("ul", la, [F(e.$slots, "default", {}, void 0, !0)])) : n("", !0)], 10, ra);
}
var da = /* @__PURE__ */ Ot(na, [["render", ua], ["__scopeId", "data-v-6cae7342"]]), fa = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		let n = t, i = e, a = f(), o = r(), s = v([]), c = L(() => s.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), l = L(() => s.value.length), u = v(null), d = v(!1), p = v({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), m = v({
			splitter: null,
			timeoutId: null
		}), h = L(() => ({
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
				E(T(e)), he("resize", { event: e }, !0);
			}));
		}, b = (e) => {
			p.value.dragging && (window.getSelection()?.removeAllRanges(), he("resized", { event: e }, !0)), p.value.mouseDown = !1, p.value.activeSplitter = null, setTimeout(() => {
				p.value.dragging = !1, _(), document.documentElement.style.cursor = "";
			}, 100);
		}, x = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), m.value.splitter === t ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, S(e, t), m.value.splitter = null) : (m.value.splitter = t, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500))), p.value.dragging || he("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, S = (e, t) => {
			if (he("splitter-dblclick", {
				event: e,
				index: t
			}, !0), i.maximizePanes) {
				let n = 0;
				s.value = s.value.map((e, r) => (e.size = r === t ? e.max : e.min, r !== t && (n += e.min), e)), s.value[t].size -= n, he("pane-maximize", {
					event: e,
					index: t,
					pane: s.value[t]
				}), he("resized", {
					event: e,
					index: t
				}, !0);
			}
		}, C = (e, t) => {
			if (!i.keyboardStep) return;
			let n = i.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", r = i.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !r) return;
			e.preventDefault(), p.value.activeSplitter = t;
			let a = (n ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), o = ne(t) + s.value[t].size;
			D(Math.min(Math.max(o + a * i.keyboardStep, 0), 100)), he("resize", { event: e }, !0), he("resized", { event: e }, !0), p.value.activeSplitter = null;
		}, w = (e, t) => {
			let n = c.value[t];
			n && he("pane-click", {
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
		}, E = (e) => {
			D(te(e));
		}, D = (e) => {
			let t = p.value.activeSplitter;
			if (t === null || t >= s.value.length - 1) return;
			let n = {
				prevPanesSize: ne(t),
				nextPanesSize: k(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, r = 0 + (i.pushOtherPanes ? 0 : n.prevPanesSize), a = 100 - (i.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, a), r);
			let o = [t, t + 1], c = s.value[o[0]] || null, l = s.value[o[1]] || null, u = c !== null && c.max < 100 && e >= c.max + n.prevPanesSize, d = l !== null && l.max < 100 && e <= 100 - (l.max + k(t + 1));
			if (u || d) u ? (c.size = c.max, l.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - n.nextPanesSize, l.min), l.max)) : (c.size = Math.min(Math.max(100 - l.max - n.prevPanesSize - k(t + 1), c.min), c.max), l.size = l.max);
			else {
				if (i.pushOtherPanes) {
					let t = O(n, e);
					if (!t) return;
					({sums: n, panesToResize: o} = t), c = s.value[o[0]] || null, l = s.value[o[1]] || null;
				}
				c !== null && (c.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, c.min), c.max)), l !== null && (l.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, l.min), l.max));
			}
		}, O = (e, t) => {
			let n = p.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + s.value[r[0]].min) {
				if (r[0] = re(n).index, e.prevReachedMinPanes = 0, r[0] < n && s.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), s.value[r[1]].size = 100 - e.prevReachedMinPanes - s.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = ne(r[0]);
			}
			return t > 100 - e.nextPanesSize - s.value[r[1]].min && (r[1] = ie(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && s.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : k(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, s.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (s.value[r[0]].size = 100 - e.prevPanesSize - k(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, ne = (e) => s.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), k = (e) => s.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), re = (e) => [...s.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, ie = (e) => s.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, ae = () => {
			let e = Array.from(u.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, oe = (e, t, n = !1) => {
			let r = e - 1, a = document.createElement("div");
			a.classList.add("splitpanes__splitter"), n || (a.onmousedown = (e) => ee(e, r), typeof window < "u" && "ontouchstart" in window && (a.ontouchstart = (e) => ee(e, r)), a.onclick = (e) => x(e, r + 1), i.keyboardStep && (a.setAttribute("tabindex", "0"), a.setAttribute("role", "separator"), a.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), a.onkeydown = (e) => C(e, r))), a.ondblclick = (e) => S(e, r + 1), t.parentNode.insertBefore(a, t);
		}, A = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, se = () => {
			let e = Array.from(u.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && A(t);
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
				se(), M({ addedPane: s.value[t] }), he("pane-add", { pane: s.value[t] }), le = !1;
			}));
		}, de = (e) => {
			let t = s.value.findIndex((t) => t.id === e);
			s.value[t].el = null;
			let n = s.value.splice(t, 1)[0];
			s.value.forEach((e, t) => e.index = t), qe(() => {
				se(), he("pane-remove", { pane: n }), M({ removedPane: {
					...n,
					index: t
				} });
			});
		}, M = (e = {}) => {
			!e.addedPane && !e.removedPane ? pe() : s.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? me(e) : fe(), d.value && he("resized");
		}, fe = () => {
			let e = 100 / l.value, t = 100, n = [], r = [];
			for (let i of s.value) i.size = Math.max(Math.min(e, i.max), i.min), t -= i.size, i.size >= i.max && n.push(i.id), i.size <= i.min && r.push(i.id);
			Math.abs(t) > .1 && P(t, n, r);
		}, pe = () => {
			let e = 100, t = [], n = [], r = 0;
			for (let i of s.value) e -= i.size, i.givenSize !== null && r++, i.size >= i.max && t.push(i.id), i.size <= i.min && n.push(i.id);
			let i = 100;
			if (e > .1) {
				for (let t of s.value) t.givenSize === null && (t.size = Math.max(Math.min(e / (l.value - r), t.max), t.min)), i -= t.size;
				i > .1 && P(i, t, n);
			}
		}, me = ({ addedPane: e, removedPane: t } = {}) => {
			let n = s.value.reduce((e, t) => e + (t.givenSize === null ? 0 : t.givenSize), 0), r = s.value.filter((e) => e.givenSize === null).length, i = r > 0 ? (100 - n) / r : 0, a = 0, o = [], c = [];
			for (let e of s.value) a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && c.push(e.id);
			if (!(Math.abs(a) < .1)) {
				a = 100;
				for (let e of s.value) e.givenSize === null && (e.size = Math.max(Math.min(i, e.max), e.min)), a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && c.push(e.id);
				Math.abs(a) > .1 && P(a, o, c);
			}
		}, P = (e, t, n) => {
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
		}, he = (e, t = void 0, r = !1) => {
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
		j(() => i.firstSplitter, () => se()), j(() => i.horizontal, (e) => qe(() => {
			n("direction-changed", {
				horizontal: e,
				panes: s.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), Ne(() => {
			ae(), se(), M(), he("ready"), d.value = !0;
		}), $e(() => d.value = !1);
		let F = () => {
			let { class: e, ...t } = a;
			return St("div", {
				ref: u,
				class: [h.value, e],
				...t
			}, o.default?.());
		};
		return Re("panes", s), Re("indexedPanes", c), Re("horizontal", L(() => i.horizontal)), Re("requestUpdate", ce), Re("onPaneAdd", ue), Re("onPaneRemove", de), Re("onPaneClick", w), (e, t) => (Z(), N(ve(F)));
	}
}), pa = {
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
		let n = e, r = ct("requestUpdate"), i = ct("onPaneAdd"), a = ct("horizontal"), o = ct("onPaneRemove"), s = ct("onPaneClick"), c = Fe()?.uid, l = ct("indexedPanes"), u = L(() => l.value[c]), d = v(null), f = L(() => {
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
		return j(() => f.value, (e) => r({
			uid: c,
			size: e
		})), j(() => p.value, (e) => r({
			uid: c,
			min: e
		})), j(() => m.value, (e) => r({
			uid: c,
			max: e
		})), Ne(() => {
			i({
				id: c,
				el: d.value,
				min: p.value,
				max: m.value,
				givenSize: n.size === void 0 ? null : f.value,
				size: f.value
			});
		}), $e(() => o(c)), (e, n) => (Z(), V("div", {
			ref_key: "paneEl",
			ref: d,
			class: "splitpanes__pane",
			onClick: n[0] ||= (n) => t(s)(n, e._.uid),
			style: dt(h.value)
		}, [F(e.$slots, "default")], 4));
	}
};
// node_modules/@nextcloud/vue/dist/chunks/appName.mjs
function ma(e) {
	let t = !1, n;
	return (...r) => (t || (t = !0, n = e(...r)), n);
}
var ha = "missing-app-name";
try {
	ha = "rechnungswerk";
} catch {
	it.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
var ga = ha;
function _a() {
	return t(ct("appName", ga));
}
var va = ma(() => {
	let e = he("core", "apps", []), t = _a();
	return e.find(({ id: e }) => e === t)?.name ?? t;
});
// node_modules/@nextcloud/vue/dist/chunks/NcAppContent.mjs
Oe(tt);
var ya = /* @__PURE__ */ Ot(/* @__PURE__ */ U({
	__name: "NcAppContentDetailsToggle",
	setup(e) {
		let n = Ct();
		j(n, r), Ne(() => {
			r(n.value);
		}), $e(() => {
			n.value && r(!1);
		});
		function r(e = !0) {
			let t = document.querySelector(".app-navigation .app-navigation-toggle");
			t && (t.style.display = e ? "none" : "", e === !0 && rt("toggle-navigation", { open: !1 }));
		}
		return (e, r) => (Z(), N(t(W), {
			"aria-label": t(R)("Go back to the list"),
			class: H(["app-details-toggle", { "app-details-toggle--mobile": t(n) }]),
			title: t(R)("Go back to the list"),
			variant: "tertiary"
		}, {
			icon: _(() => [J(t(He), {
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
}), [["__scopeId", "data-v-a28923a1"]]), ba = {
	key: 0,
	class: "hidden-visually"
}, xa = { class: "app-content-wrapper__list" }, Sa = {
	key: 1,
	class: "app-content-wrapper"
}, Ca = A("nextcloud").persist().build(), wa = Pt().theming?.name ?? "Nextcloud", Ta = /* @__PURE__ */ Ot(/* @__PURE__ */ U({
	__name: "NcAppContent",
	props: /* @__PURE__ */ Dt({
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
	emits: /* @__PURE__ */ Dt(["resizeList", "update:showDetails"], ["update:showDetails"]),
	setup(e, { emit: r }) {
		let i = at(e, "showDetails"), a = r, o = _a(), s = va(), l = Ct(), u = c(), d = jt(() => e.disableSwipe ? void 0 : u.value, { onSwipeEnd(e, t) {
			Math.abs(d.lengthX.value) > 70 && (d.coordsStart.x < 150 && t === "right" ? rt("toggle-navigation", { open: !0 }) : d.coordsStart.x < 450 && t === "left" && rt("toggle-navigation", { open: !1 }));
		} }), f = v(), p = L(() => e.paneConfigKey === "" ? `pane-list-size-${o}` : `pane-list-size-${e.paneConfigKey}`), m = L(() => ({
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
			return t.add(wa), [...t.values()].join(" - ");
		});
		j(g, () => {
			g.value !== null && (document.title = g.value);
		}, { immediate: !0 }), j(() => e.paneConfigKey, b, { immediate: !0 }), Ne(b);
		function ee(e) {
			let t = Math.trunc(e.panes[0].size);
			Ca.setItem(p.value, JSON.stringify(t)), f.value = t, a("resizeList", { size: t }), it.debug("[NcAppContent] pane config", { listPaneSize: t });
		}
		function b() {
			let e = parseInt(Ca.getItem(p.value) ?? "", 10);
			!isNaN(e) && e !== f.value && (it.debug("[NcAppContent] pane config", { listPaneSize: e }), f.value = e);
		}
		return (r, a) => (Z(), V("main", {
			id: "app-content-vue",
			class: H(["app-content no-snapper", { "app-content--has-list": !!r.$slots.list }])
		}, [
			e.pageHeading ? (Z(), V("h1", ba, Y(e.pageHeading), 1)) : n("", !0),
			r.$slots.list ? (Z(), V(D, { key: 1 }, [t(l) || e.layout === "no-split" ? (Z(), V("div", {
				key: 0,
				class: H(["app-content-wrapper app-content-wrapper--no-split", {
					"app-content-wrapper--show-details": i.value,
					"app-content-wrapper--show-list": !i.value,
					"app-content-wrapper--mobile": t(l)
				}])
			}, [
				i.value ? (Z(), N(ya, {
					key: 0,
					onClick: a[0] ||= q((e) => i.value = !1, ["stop", "prevent"])
				})) : n("", !0),
				w(z("div", xa, [F(r.$slots, "list", {}, void 0, !0)], 512), [[y, !i.value]]),
				i.value ? F(r.$slots, "default", {}, void 0, !0, 1) : n("", !0)
			], 2)) : e.layout === "vertical-split" || e.layout === "horizontal-split" ? (Z(), V("div", Sa, [J(t(fa), {
				horizontal: e.layout === "horizontal-split",
				class: H(["default-theme", {
					"splitpanes--horizontal": e.layout === "horizontal-split",
					"splitpanes--vertical": e.layout === "vertical-split"
				}]),
				rtl: t(ce),
				onResized: ee
			}, {
				default: _(() => [J(t(pa), {
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
				]), J(t(pa), {
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
}, Ea = {
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
}, Da = ["aria-hidden", "aria-label"], Oa = [
	"fill",
	"width",
	"height"
], ka = { key: 0 };
function Aa(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-document-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", ka, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" }, null, -1)], 8, Oa))], 16, Da);
}
var ja = /*#__PURE__*/ Q(Ea, [["render", Aa]]), Ma = {
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
}, Na = ["aria-hidden", "aria-label"], Pa = [
	"fill",
	"width",
	"height"
], Fa = { key: 0 };
function Ia(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-document-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Fa, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" }, null, -1)], 8, Pa))], 16, Na);
}
var La = /*#__PURE__*/ Q(Ma, [["render", Ia]]), Ra = {
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
}, za = ["aria-hidden", "aria-label"], Ba = [
	"fill",
	"width",
	"height"
], Va = { key: 0 };
function Ha(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon account-group-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Va, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" }, null, -1)], 8, Ba))], 16, za);
}
var Ua = /*#__PURE__*/ Q(Ra, [["render", Ha]]), Wa = {
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
}, Ga = ["aria-hidden", "aria-label"], Ka = [
	"fill",
	"width",
	"height"
], qa = { key: 0 };
function Ja(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon account-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", qa, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" }, null, -1)], 8, Ka))], 16, Ga);
}
var Ya = /*#__PURE__*/ Q(Wa, [["render", Ja]]), Xa = {
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
}, Za = ["aria-hidden", "aria-label"], Qa = [
	"fill",
	"width",
	"height"
], $a = { key: 0 };
function eo(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon package-variant-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", $a, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" }, null, -1)], 8, Qa))], 16, Za);
}
var to = /*#__PURE__*/ Q(Xa, [["render", eo]]), no = {
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
}, ro = ["aria-hidden", "aria-label"], io = [
	"fill",
	"width",
	"height"
], ao = { key: 0 };
function oo(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon text-box-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", ao, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null, -1)], 8, io))], 16, ro);
}
var so = /*#__PURE__*/ Q(no, [["render", oo]]), co = {
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
}, lo = ["aria-hidden", "aria-label"], uo = [
	"fill",
	"width",
	"height"
], fo = { key: 0 };
function po(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon cog-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", fo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" }, null, -1)], 8, uo))], 16, lo);
}
var mo = /*#__PURE__*/ Q(co, [["render", po]]), ho = {
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
}, go = ["aria-hidden", "aria-label"], _o = [
	"fill",
	"width",
	"height"
], vo = { key: 0 };
function yo(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon lock-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", vo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" }, null, -1)], 8, _o))], 16, go);
}
var bo = /*#__PURE__*/ Q(ho, [["render", yo]]), xo = {
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
}, So = ["aria-hidden", "aria-label"], Co = [
	"fill",
	"width",
	"height"
], wo = { key: 0 };
function To(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon chart-bar-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", wo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" }, null, -1)], 8, Co))], 16, So);
}
var Eo = /*#__PURE__*/ Q(xo, [["render", To]]), Do = {
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
}, Oo = ["aria-hidden", "aria-label"], ko = [
	"fill",
	"width",
	"height"
], Ao = { key: 0 };
function jo(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon counter-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Ao, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z" }, null, -1)], 8, ko))], 16, Oo);
}
var Mo = /*#__PURE__*/ Q(Do, [["render", jo]]), No = {
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
}, Po = ["aria-hidden", "aria-label"], Fo = [
	"fill",
	"width",
	"height"
], Io = { key: 0 };
function Lo(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon email-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Io, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, null, -1)], 8, Fo))], 16, Po);
}
var Ro = /*#__PURE__*/ Q(No, [["render", Lo]]), zo = {
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
], Ho = { key: 0 };
function Uo(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Ho, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" }, null, -1)], 8, Vo))], 16, Bo);
}
var Wo = /*#__PURE__*/ Q(zo, [["render", Uo]]), Go = {
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
}, Ko = ["aria-hidden", "aria-label"], qo = [
	"fill",
	"width",
	"height"
], Jo = { key: 0 };
function Yo(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon magnify-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Jo, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, null, -1)], 8, qo))], 16, Ko);
}
var Xo = /*#__PURE__*/ Q(Go, [["render", Yo]]), Zo = {
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
}, Qo = ["aria-hidden", "aria-label"], $o = [
	"fill",
	"width",
	"height"
], es = { key: 0 };
function ts(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon star-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", es, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, null, -1)], 8, $o))], 16, Qo);
}
var ns = /*#__PURE__*/ Q(Zo, [["render", ts]]), rs = {
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
}, is = ["aria-hidden", "aria-label"], as = [
	"fill",
	"width",
	"height"
], os = { key: 0 };
function ss(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon translate-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", os, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" }, null, -1)], 8, as))], 16, is);
}
var cs = /*#__PURE__*/ Q(rs, [["render", ss]]);
// src/api/client.ts
function ls(e) {
	return P(`/apps/rechnungswerk/api/v1${e}`);
}
function us(e) {
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
async function ds(e) {
	try {
		let { data: t } = await Ye.get(ls(e));
		return t;
	} catch (e) {
		throw us(e);
	}
}
async function fs(e, t) {
	try {
		let { data: n } = await Ye.post(ls(e), t);
		return n;
	} catch (e) {
		throw us(e);
	}
}
async function ps(e, t) {
	try {
		let { data: n } = await Ye.patch(ls(e), t);
		return n;
	} catch (e) {
		throw us(e);
	}
}
async function ms(e, t) {
	try {
		let { data: n } = await Ye.put(ls(e), t);
		return n;
	} catch (e) {
		throw us(e);
	}
}
async function hs(e) {
	try {
		let { data: t } = await Ye.delete(ls(e));
		return t;
	} catch (e) {
		throw us(e);
	}
}
// src/api/whatsnew.ts
var gs = () => ds("/whatsnew"), _s = () => fs("/whatsnew/seen", {});
// src/utils/modalEsc.ts
function vs(e, t) {
	e.target?.closest?.(".v-select.vs--open") || t();
}
// src/components/WhatsNewDialog.vue?vue&type=script&setup=true&lang.ts
var ys = { class: "whatsnew" }, bs = { class: "whatsnew__version" }, xs = { class: "whatsnew__icon" }, Ss = { class: "whatsnew__body" }, Cs = { class: "whatsnew__entry-title" }, ws = {
	key: 0,
	class: "whatsnew__badge"
}, Ts = { class: "whatsnew__entry-text" }, Es = {
	key: 0,
	class: "whatsnew__where"
}, Ds = { key: 0 }, Os = { class: "actions" }, ks = "https://werkwolke.de", As = "whatsnew-title", js = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "WhatsNewDialog",
	setup(e) {
		let r = {
			"account-group": Ua,
			"chart-bar": Eo,
			cog: mo,
			counter: Mo,
			email: Ro,
			"file-document": ja,
			folder: Wo,
			magnify: Xo,
			star: ns,
			translate: cs
		}, i = v(!1), a = v(""), o = v([]), s = T("rechnungswerk", "Was ist neu in RechnungsWerk");
		function c(e) {
			return r[e] ?? ns;
		}
		Ne(async () => {
			try {
				let e = await gs();
				e.entries.length > 0 && (a.value = e.version, o.value = e.entries, i.value = !0);
			} catch {}
		});
		async function l() {
			i.value = !1;
			try {
				await _s();
			} catch {}
		}
		return (e, r) => i.value ? (Z(), N(t(Me), {
			key: 0,
			labelId: As,
			onKeydown: r[0] ||= k((e) => t(vs)(e, l), ["esc"]),
			onClose: l
		}, {
			default: _(() => [z("div", ys, [
				z("h2", { id: As }, Y(t(s)), 1),
				z("p", bs, Y(t(T)("rechnungswerk", "Version {version}", { version: a.value })), 1),
				(Z(!0), V(D, null, X(o.value, (e, r) => (Z(), V("div", {
					key: r,
					class: "whatsnew__entry"
				}, [z("div", xs, [(Z(), N(ve(c(e.icon)), { size: 22 }))]), z("div", Ss, [
					z("h3", Cs, [K(Y(e.title) + " ", 1), e.plus ? (Z(), V("span", ws, "WerkPlus")) : n("", !0)]),
					z("p", Ts, Y(e.text), 1),
					e.where ? (Z(), V("p", Es, [
						K(Y(t(T)("rechnungswerk", "Zu finden unter")) + " ", 1),
						z("b", null, Y(e.where), 1),
						e.adminOnly ? (Z(), V("span", Ds, Y(" " + t(T)("rechnungswerk", "(nur für Administratoren)")), 1)) : n("", !0)
					])) : n("", !0),
					e.plus ? (Z(), V("a", {
						key: 1,
						class: "whatsnew__link",
						href: ks,
						target: "_blank",
						rel: "noreferrer noopener"
					}, Y(t(T)("rechnungswerk", "Mehr zu WerkPlus")), 1)) : n("", !0)
				])]))), 128)),
				z("div", Os, [J(t(W), {
					variant: "primary",
					onClick: l
				}, {
					default: _(() => [K(Y(t(T)("rechnungswerk", "Alles klar")), 1)]),
					_: 1
				})])
			])]),
			_: 1
		})) : n("", !0);
	}
}), [["__scopeId", "data-v-b6c0c6dc"]]), Ms = () => ds("/permission-info"), Ns = () => ds("/permissions"), Ps = (e) => ms("/permissions", e), Fs = (e) => ds(`/principals/search?query=${encodeURIComponent(e)}`), Is = vn("permissions", () => {
	let e = v(null), t = v(!1);
	async function n() {
		try {
			e.value = await Ms();
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
}), Ls = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "App",
	setup(e) {
		let r = Is(), i = L(() => r.info?.hasAccess ?? !1), a = L(() => r.info?.isAdmin ?? !1);
		return Ne(() => {
			r.fetch();
		}), (e, o) => {
			let s = l("router-view");
			return Z(), N(t(mi), { appName: "rechnungswerk" }, {
				default: _(() => [t(r).loaded ? i.value ? (Z(), V(D, { key: 2 }, [
					J(t(Ci), null, {
						footer: _(() => [J(t(da), {
							name: t(T)("rechnungswerk", "Mein Kontakt"),
							to: { name: "my-contact" }
						}, {
							icon: _(() => [J(Ya, { size: 20 })]),
							_: 1
						}, 8, ["name"]), a.value ? (Z(), N(t(da), {
							key: 0,
							name: t(T)("rechnungswerk", "Einstellungen"),
							to: { name: "settings" }
						}, {
							icon: _(() => [J(mo, { size: 20 })]),
							_: 1
						}, 8, ["name"])) : n("", !0)]),
						default: _(() => [
							J(t(da), {
								name: t(T)("rechnungswerk", "Rechnungen"),
								to: { name: "invoices" }
							}, {
								icon: _(() => [J(ja, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							J(t(da), {
								name: t(T)("rechnungswerk", "Angebote"),
								to: { name: "quotes" }
							}, {
								icon: _(() => [J(La, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							J(t(da), {
								name: t(T)("rechnungswerk", "Kunden"),
								to: { name: "customers" }
							}, {
								icon: _(() => [J(Ua, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							J(t(da), {
								name: t(T)("rechnungswerk", "Produkte"),
								to: { name: "products" }
							}, {
								icon: _(() => [J(to, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							J(t(da), {
								name: t(T)("rechnungswerk", "Textbausteine"),
								to: { name: "text-snippets" }
							}, {
								icon: _(() => [J(so, { size: 20 })]),
								_: 1
							}, 8, ["name"])
						]),
						_: 1
					}),
					J(t(Ta), null, {
						default: _(() => [J(s)]),
						_: 1
					}),
					J(js)
				], 64)) : (Z(), N(t(Ta), { key: 1 }, {
					default: _(() => [J(t(Le), {
						name: t(T)("rechnungswerk", "Kein Zugriff"),
						description: t(T)("rechnungswerk", "Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.")
					}, {
						icon: _(() => [J(bo, { size: 20 })]),
						_: 1
					}, 8, ["name", "description"])]),
					_: 1
				})) : (Z(), N(t(Ta), { key: 0 }, {
					default: _(() => [J(t(_e), {
						class: "rw-app-loading",
						size: 44
					})]),
					_: 1
				}))]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-a99a62d0"]]), Rs = ["role"], zs = {
	key: 0,
	class: "notecard__heading"
}, Bs = { class: "notecard__text" }, $ = /* @__PURE__ */ Ot(/* @__PURE__ */ U({
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
				case "success": return Ee;
				case "info": return te;
				default: return Lt;
			}
		});
		return (r, a) => (Z(), V("div", {
			class: H(["notecard", {
				[`notecard--${e.type}`]: e.type,
				"notecard--legacy": t(We)
			}]),
			role: i.value ? "alert" : "note"
		}, [F(r.$slots, "icon", {}, () => [J(t(He), {
			path: o.value,
			class: H(["notecard__icon", { "notecard__icon--heading": e.heading }]),
			inline: ""
		}, null, 8, ["path", "class"])], !0), z("div", null, [e.heading ? (Z(), V("p", zs, Y(e.heading), 1)) : n("", !0), F(r.$slots, "default", {}, () => [z("p", Bs, Y(e.text), 1)], !0)])], 10, Rs));
	}
}), [["__scopeId", "data-v-6be9fa31"]]), Vs = {
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
}, Hs = ["aria-hidden", "aria-label"], Us = [
	"fill",
	"width",
	"height"
], Ws = { key: 0 };
function Gs(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon information-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Ws, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" }, null, -1)], 8, Us))], 16, Hs);
}
var Ks = /*#__PURE__*/ Q(Vs, [["render", Gs]]), qs = { class: "info-icon-wrapper" }, Js = {
	class: "info-popup",
	tabindex: "0"
}, Ys = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "InfoIcon",
	setup(e) {
		return (e, n) => (Z(), V("span", qs, [J(t(d), {
			popupRole: "tooltip",
			noFocusTrap: ""
		}, {
			trigger: _(() => [J(Ks, {
				class: "info-icon",
				size: 14,
				tabindex: "0"
			})]),
			default: _(() => [z("div", Js, [F(e.$slots, "default", {}, void 0, !0)])]),
			_: 3
		})]));
	}
}), [["__scopeId", "data-v-6c57a620"]]), Xs = {
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
}, Zs = ["aria-hidden", "aria-label"], Qs = [
	"fill",
	"width",
	"height"
], $s = { key: 0 };
function ec(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon plus-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", $s, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, null, -1)], 8, Qs))], 16, Zs);
}
var tc = /*#__PURE__*/ Q(Xs, [["render", ec]]), nc = {
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
}, rc = ["aria-hidden", "aria-label"], ic = [
	"fill",
	"width",
	"height"
], ac = { key: 0 };
function oc(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon download-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", ac, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" }, null, -1)], 8, ic))], 16, rc);
}
var sc = /*#__PURE__*/ Q(nc, [["render", oc]]), cc = {
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
}, lc = ["aria-hidden", "aria-label"], uc = [
	"fill",
	"width",
	"height"
], dc = { key: 0 };
function fc(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon content-copy-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", dc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }, null, -1)], 8, uc))], 16, lc);
}
var pc = /*#__PURE__*/ Q(cc, [["render", fc]]), mc = {
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
}, hc = ["aria-hidden", "aria-label"], gc = [
	"fill",
	"width",
	"height"
], _c = { key: 0 };
function vc(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon pencil-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", _c, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" }, null, -1)], 8, gc))], 16, hc);
}
var yc = /*#__PURE__*/ Q(mc, [["render", vc]]), bc = {
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
}, xc = ["aria-hidden", "aria-label"], Sc = [
	"fill",
	"width",
	"height"
], Cc = { key: 0 };
function wc(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon close-circle-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Cc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }, null, -1)], 8, Sc))], 16, xc);
}
var Tc = /*#__PURE__*/ Q(bc, [["render", wc]]), Ec = {
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
}, Dc = ["aria-hidden", "aria-label"], Oc = [
	"fill",
	"width",
	"height"
], kc = { key: 0 };
function Ac(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon check-circle-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", kc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" }, null, -1)], 8, Oc))], 16, Dc);
}
var jc = /*#__PURE__*/ Q(Ec, [["render", Ac]]), Mc = {
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
}, Nc = ["aria-hidden", "aria-label"], Pc = [
	"fill",
	"width",
	"height"
], Fc = { key: 0 };
function Ic(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon clock-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Fc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" }, null, -1)], 8, Pc))], 16, Nc);
}
var Lc = /*#__PURE__*/ Q(Mc, [["render", Ic]]), Rc = {
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
}, zc = ["aria-hidden", "aria-label"], Bc = [
	"fill",
	"width",
	"height"
], Vc = { key: 0 };
function Hc(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon help-circle-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Vc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, null, -1)], 8, Bc))], 16, zc);
}
var Uc = /*#__PURE__*/ Q(Rc, [["render", Hc]]), Wc = {
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
}, Gc = ["aria-hidden", "aria-label"], Kc = [
	"fill",
	"width",
	"height"
], qc = { key: 0 };
function Jc(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon checkbox-blank-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", qc, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, null, -1)], 8, Kc))], 16, Gc);
}
var Yc = /*#__PURE__*/ Q(Wc, [["render", Jc]]), Xc = {
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
}, Zc = ["aria-hidden", "aria-label"], Qc = [
	"fill",
	"width",
	"height"
], $c = { key: 0 };
function el(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon checkbox-marked-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", $c, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null, -1)], 8, Qc))], 16, Zc);
}
var tl = /*#__PURE__*/ Q(Xc, [["render", el]]), nl = {
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
}, rl = ["aria-hidden", "aria-label"], il = [
	"fill",
	"width",
	"height"
], al = { key: 0 };
function ol(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon check-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", al, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }, null, -1)], 8, il))], 16, rl);
}
var sl = /*#__PURE__*/ Q(nl, [["render", ol]]), cl = {
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
}, ll = ["aria-hidden", "aria-label"], ul = [
	"fill",
	"width",
	"height"
], dl = { key: 0 };
function fl(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", dl, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, null, -1)], 8, ul))], 16, ll);
}
var pl = /*#__PURE__*/ Q(cl, [["render", fl]]), ml = () => ds("/invoices"), hl = (e) => ds(`/invoices/${e}`), gl = (e) => fs("/invoices", { data: e }), _l = (e, t) => ps(`/invoices/${e}`, { data: t }), vl = (e) => hs(`/invoices/${e}`), yl = (e) => fs(`/invoices/${e}/commit`, {}), bl = (e) => fs(`/invoices/${e}/cancel`, {}), xl = (e) => fs(`/invoices/${e}/duplicate`, {}), Sl = (e, t) => fs(`/invoices/${e}/pay`, t ? { date: t } : {}), Cl = (e) => fs(`/invoices/${e}/unpay`, {}), wl = (e) => ls(`/invoices/${e}/pdf`), Tl = (e) => ls(`/invoices/${e}/preview`) + "?t=" + Date.now(), El = (e) => {
	let t = document.createElement("a");
	t.href = wl(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Dl = (e, t) => fs(`/invoices/${e}/send`, t), Ol = vn("invoice", () => {
	let e = v([]), t = v(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await ml();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => hl(e);
	async function i(e) {
		let t = await gl(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await _l(e, t);
		return await n(), r;
	}
	async function o(t) {
		await vl(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await yl(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await bl(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await xl(e);
		return await n(), t;
	}
	async function u(e, t) {
		let r = await Sl(e, t);
		return await n(), r;
	}
	async function d(e) {
		let t = await Cl(e);
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
}), kl = (e) => fs("/smtp/test", e), Al = () => ds("/settings"), jl = (e) => ms("/settings", { data: e }), Ml = (e) => ms("/settings/logo", { path: e }), Nl = () => hs("/settings/logo"), Pl = (e) => `${ls("/settings/logo")}?v=${e}`, Fl = (e) => ms("/settings/archive-folder", { path: e }), Il = () => hs("/settings/archive-folder"), Ll = vn("settings", () => {
	let e = v(null), t = v(!1), n = v(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Al();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		n.value = !0;
		try {
			return e.value = await jl(t), e.value;
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
}), Rl = [
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
], zl = {
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
}, Bl = [
	1900,
	700,
	0
], Vl = "Gem. § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.", Hl = {
	invoice: "Rechnung",
	quote: "Angebot"
}, Ul = {
	opening: "Anrede & Einleitung",
	closing: "Schlusstext"
}, Wl = {
	draft: "Entwurf",
	committed: "Festgeschrieben",
	cancelled: "Storniert"
}, Gl = {
	invoice: "Rechnung",
	cancellation: "Storno",
	quote: "Angebot"
}, Kl = {
	draft: "Entwurf",
	open: "Offen",
	expired: "Abgelaufen",
	accepted: "Angenommen",
	rejected: "Abgelehnt",
	converted: "Übernommen",
	superseded: "Revidiert"
};
function ql(e) {
	return e.includes(".") ? /^\d{1,3}(\.\d{3})+$/.test(e) : /^\d*$/.test(e);
}
function Jl(e, t, n) {
	if (e == null) return null;
	let r = String(e).replace(/[\s  ]+/g, "");
	if (r === "") return null;
	let i = !1;
	if (r.startsWith("-") ? (i = !0, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1)), r === "" || !/^[0-9.,]+$/.test(r)) return null;
	let a = r.indexOf(","), o, s;
	if (a >= 0) {
		if (r.includes(",", a + 1) || (o = r.slice(0, a), s = r.slice(a + 1), s.includes("."))) return null;
	} else o = r, s = "";
	if (!ql(o) || (o = o.split(".").join(""), o === "" && s === "") || (o === "" && (o = "0"), !/^\d+$/.test(o)) || s !== "" && !/^\d+$/.test(s) || s.length > t || (o = o.replace(/^0+/, ""), o === "" && (o = "0"), o.length > n)) return null;
	s = s.replace(/0+$/, "");
	let c = o + (s === "" ? "" : "." + s);
	return i && c !== "0" ? "-" + c : c;
}
function Yl(e) {
	return e == null || String(e).trim() === "" ? "1" : Jl(e, 3, 9);
}
function Xl(e) {
	return e == null || String(e).trim() === "" ? "0" : Jl(e, 4, 9);
}
function Zl(e) {
	if (e === null) return "";
	let [t, n] = e.split("."), r = t.startsWith("-") ? "-" : "";
	return r + (r ? t.slice(1) : t).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (n ? "," + n : "");
}
function Ql(e) {
	if (e == null) return "";
	let t = String(e).trim();
	if (t === "") return "";
	if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(t)) return t;
	let n = t.startsWith("-");
	(n || t.startsWith("+")) && (t = t.slice(1));
	let [r, i = ""] = t.split("."), a = r.replace(/^0+/, "") || "0", o = i.replace(/0+$/, "");
	return Zl((n && (a !== "0" || o !== "") ? "-" : "") + a + (o === "" ? "" : "." + o));
}
// src/utils/money.ts
function $l(e) {
	return e == null ? "" : Zl((e / 1e4).toFixed(4).replace(/(\.\d\d)(\d*?)0+$/, "$1$2"));
}
function eu(e) {
	let t = Xl(e);
	return t === null ? 0 : Math.round(Number.parseFloat(t) * 1e4);
}
function tu(e) {
	let t = (e ?? 0) / 1e4;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	}).format(t);
}
function nu(e) {
	let t = (e ?? 0) / 100;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR"
	}).format(t);
}
function ru(e) {
	return `${e / 100} %`;
}
// src/views/InvoicesView.vue?vue&type=script&setup=true&lang.ts
var iu = { class: "rw-view" }, au = { class: "rw-view__head" }, ou = { key: 2 }, su = { class: "rw-filterbar" }, cu = ["onClick"], lu = { class: "rw-chip__n" }, uu = {
	key: 0,
	class: "rw-chip rw-chip--sum"
}, du = { class: "rw-table-wrap" }, fu = { class: "rw-table" }, pu = { class: "rw-th-info" }, mu = { class: "rw-info-popup" }, hu = { class: "rw-info-popup__hint" }, gu = { class: "rw-info-popup__group" }, _u = { class: "rw-legend__label" }, vu = { class: "rw-legend__item" }, yu = { class: "rw-legend__item" }, bu = { class: "rw-legend__item" }, xu = {
	key: 0,
	class: "rw-info-popup__group"
}, Su = { class: "rw-legend__label" }, Cu = { class: "rw-legend__item" }, wu = { class: "rw-legend__item" }, Tu = { class: "rw-legend__item" }, Eu = { class: "num" }, Du = { class: "rw-col-paid" }, Ou = ["onClick"], ku = { class: "rw-status-cell" }, Au = { class: "rw-nowrap" }, ju = {
	key: 0,
	class: "rw-pill"
}, Mu = { class: "num" }, Nu = ["aria-label", "onKeyup"], Pu = ["title", "onClick"], Fu = { class: "rw-col-paid" }, Iu = [
	"aria-label",
	"title",
	"onClick"
], Lu = { class: "rw-col-actions" }, Ru = { class: "rw-actions" }, zu = 864e5, Bu = /* @__PURE__ */ U({
	__name: "InvoicesView",
	setup(e) {
		let r = ot(), i = Ol(), a = Ll(), o = v(""), s = L(() => !!a.settings?.imapHost), c = L(() => i.invoices.some((e) => !!e.datevStatus)), l = L(() => s.value || c.value), u = [
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
		], d = v("all"), f = (e) => e.paymentStatus === "unpaid" || e.paymentStatus === "overdue", p = L(() => {
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
		function ee(e) {
			let t = g(e);
			t.setHours(0, 0, 0, 0);
			let n = /* @__PURE__ */ new Date();
			return n.setHours(0, 0, 0, 0), Math.round((t.getTime() - n.getTime()) / zu);
		}
		function y(e) {
			return e ? g(e).toLocaleDateString(void 0, {
				day: "numeric",
				month: "numeric"
			}) : "";
		}
		let b = (e) => e.paymentStatus === "overdue" ? "rw-amt-overdue" : e.paymentStatus === "paid" ? "rw-amt-paid" : "";
		function x(e) {
			if (e.paymentStatus === "paid") return e.paidAt ? T("rechnungswerk", "bezahlt am {date}", { date: y(e.paidAt) }) : T("rechnungswerk", "bezahlt");
			if (!e.dueDate) return "";
			let t = ee(e.dueDate);
			if (e.paymentStatus === "overdue") {
				let e = -t;
				return e === 1 ? T("rechnungswerk", "1 Tag überfällig") : T("rechnungswerk", "{days} Tage überfällig", { days: String(e) });
			}
			return e.paymentStatus === "unpaid" ? t <= 0 ? T("rechnungswerk", "fällig heute") : t === 1 ? T("rechnungswerk", "fällig morgen ({date})", { date: y(e.dueDate) }) : T("rechnungswerk", "fällig in {days} Tagen ({date})", {
				days: String(t),
				date: y(e.dueDate)
			}) : "";
		}
		let S = (e) => e.paymentStatus === "paid" ? T("rechnungswerk", "Als unbezahlt markieren") : T("rechnungswerk", "Als bezahlt markieren");
		function C(e) {
			return e.paymentStatus === "paid" ? e.paidAt ? T("rechnungswerk", "Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen", { date: y(e.paidAt) }) : T("rechnungswerk", "Bezahlt – klicken, um die Zahlung zurückzunehmen") : T("rechnungswerk", "Als bezahlt markieren");
		}
		async function te(e) {
			o.value = "";
			try {
				e.paymentStatus === "paid" ? await i.markUnpaid(e.id) : await i.markPaid(e.id);
			} catch (e) {
				o.value = e.message ?? T("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		let E = v(null), O = v("");
		function ne(e) {
			let t = e ? g(e) : /* @__PURE__ */ new Date(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
			return `${t.getFullYear()}-${n}-${r}`;
		}
		function re(e) {
			o.value = "", O.value = ne(e.paidAt), E.value = e.id;
		}
		function ie() {
			E.value = null;
		}
		async function ae(e) {
			if (!O.value) ie();
			else {
				o.value = "";
				try {
					await i.markPaid(e.id, O.value), E.value = null;
				} catch (e) {
					o.value = e.message ?? T("rechnungswerk", "Zahldatum konnte nicht geändert werden");
				}
			}
		}
		let oe = {
			draft: yc,
			committed: bo,
			cancelled: Tc
		}, A = {
			pending: Lc,
			confirmed: jc,
			unknown: Uc,
			failed: Tc
		}, j = (e) => oe[e] ?? ja, se = (e) => e ? A[e] ?? null : null, ce = {
			pending: T("rechnungswerk", "An DATEV gesendet – Bestätigung ausstehend"),
			confirmed: T("rechnungswerk", "Von DATEV bestätigt (Beleg angenommen)"),
			unknown: T("rechnungswerk", "DATEV-Antwort prüfen"),
			failed: T("rechnungswerk", "Von DATEV abgelehnt")
		}, le = (e) => ce[e] ?? "", ue = (e) => T("rechnungswerk", Wl[e] ?? e), de = (e) => T("rechnungswerk", Gl[e] ?? e), M = (e) => e.relatedNumber ? T("rechnungswerk", "{type} zu Rechnung {number}", {
			type: de(e.invoiceType),
			number: e.relatedNumber
		}) : de(e.invoiceType);
		function fe(e) {
			return e ? new Date(e).toLocaleDateString() : "—";
		}
		Ne(() => {
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
		function P(e) {
			El(e);
		}
		async function he(e) {
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
			let a = Mt("tooltip");
			return Z(), V("div", iu, [
				z("div", au, [z("h2", null, Y(t(T)("rechnungswerk", "Rechnungen")), 1), J(t(W), {
					variant: "primary",
					onClick: pe
				}, {
					icon: _(() => [J(tc, { size: 20 })]),
					default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Neue Rechnung")), 1)]),
					_: 1
				})]),
				o.value ? (Z(), N(t($), {
					key: 0,
					type: "error",
					text: o.value
				}, null, 8, ["text"])) : n("", !0),
				!t(i).loading && t(i).invoices.length === 0 ? (Z(), N(t(Le), {
					key: 1,
					name: t(T)("rechnungswerk", "Noch keine Rechnungen"),
					description: t(T)("rechnungswerk", "Lege deine erste Rechnung an.")
				}, {
					icon: _(() => [J(ja, { size: 20 })]),
					_: 1
				}, 8, ["name", "description"])) : t(i).invoices.length > 0 ? (Z(), V("div", ou, [z("div", su, [(Z(), V(D, null, X(u, (e) => z("button", {
					key: e.key,
					class: H(["rw-chip", {
						"rw-chip--active": d.value === e.key,
						"rw-chip--overdue": e.key === "overdue"
					}]),
					onClick: (t) => d.value = e.key
				}, [K(Y(t(T)("rechnungswerk", e.label)) + " ", 1), z("span", lu, Y(p.value[e.key]), 1)], 10, cu)), 64)), m.value > 0 ? (Z(), V("span", uu, [K(Y(t(T)("rechnungswerk", "Offen gesamt:")) + " ", 1), z("strong", null, Y(t(nu)(m.value)), 1)])) : n("", !0)]), z("div", du, [z("table", fu, [z("thead", null, [z("tr", null, [
					z("th", null, [z("span", pu, [K(Y(t(T)("rechnungswerk", "Status")) + " ", 1), J(Ys, null, {
						default: _(() => [z("div", mu, [
							z("p", hu, Y(t(T)("rechnungswerk", "Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.")), 1),
							z("div", gu, [
								z("span", _u, Y(t(T)("rechnungswerk", "Rechnung")), 1),
								z("span", vu, [J(bo, {
									size: 16,
									class: "rw-sicon rw-sicon--committed"
								}), K(" " + Y(t(T)("rechnungswerk", "Festgeschrieben")), 1)]),
								z("span", yu, [J(yc, {
									size: 16,
									class: "rw-sicon rw-sicon--draft"
								}), K(" " + Y(t(T)("rechnungswerk", "Entwurf")), 1)]),
								z("span", bu, [J(Tc, {
									size: 16,
									class: "rw-sicon rw-sicon--cancelled"
								}), K(" " + Y(t(T)("rechnungswerk", "Storniert")), 1)])
							]),
							l.value ? (Z(), V("div", xu, [
								z("span", Su, Y(t(T)("rechnungswerk", "DATEV-Übergabe")), 1),
								z("span", Cu, [J(jc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-confirmed"
								}), K(" " + Y(t(T)("rechnungswerk", "bestätigt")), 1)]),
								z("span", wu, [J(Lc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-pending"
								}), K(" " + Y(t(T)("rechnungswerk", "gesendet")), 1)]),
								z("span", Tu, [J(Uc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-unknown"
								}), K(" " + Y(t(T)("rechnungswerk", "Antwort prüfen")), 1)])
							])) : n("", !0)
						])]),
						_: 1
					})])]),
					z("th", null, Y(t(T)("rechnungswerk", "Nummer")), 1),
					z("th", null, Y(t(T)("rechnungswerk", "Empfänger")), 1),
					z("th", null, Y(t(T)("rechnungswerk", "Datum")), 1),
					z("th", Eu, Y(t(T)("rechnungswerk", "Brutto")), 1),
					z("th", Du, Y(t(T)("rechnungswerk", "Bezahlt")), 1),
					r[2] ||= z("th", { class: "rw-col-actions" }, null, -1)
				])]), z("tbody", null, [(Z(!0), V(D, null, X(h.value, (e) => (Z(), V("tr", {
					key: e.id,
					class: H(["rw-row-clickable", { "rw-row--overdue": e.paymentStatus === "overdue" }]),
					onClick: (t) => me(e.id)
				}, [
					z("td", null, [z("span", ku, [(Z(), N(ve(j(e.status)), {
						size: 20,
						class: H(["rw-sicon", `rw-sicon--${e.status}`]),
						title: ue(e.status)
					}, null, 8, ["class", "title"])), l.value && e.datevStatus && se(e.datevStatus) ? (Z(), N(ve(se(e.datevStatus)), {
						key: 0,
						size: 18,
						class: H(["rw-sicon", `rw-sicon--datev-${e.datevStatus}`]),
						title: le(e.datevStatus)
					}, null, 8, ["class", "title"])) : n("", !0)])]),
					z("td", Au, [K(Y(e.number ?? t(T)("rechnungswerk", "(Entwurf)")) + " ", 1), e.invoiceType === "invoice" ? n("", !0) : w((Z(), V("span", ju, [K(Y(de(e.invoiceType)), 1)])), [[a, M(e)]])]),
					z("td", null, Y(e.recipientName ?? "—"), 1),
					z("td", null, Y(fe(e.issueDate ?? e.createdAt)), 1),
					z("td", Mu, [z("span", { class: H(b(e)) }, Y(t(nu)(e.totalCents)), 3), E.value === e.id ? (Z(), V("div", {
						key: 0,
						class: "rw-paid-edit",
						onClick: r[1] ||= q(() => {}, ["stop"])
					}, [
						w(z("input", {
							"onUpdate:modelValue": r[0] ||= (e) => O.value = e,
							type: "date",
							class: "rw-input rw-paid-input",
							"aria-label": t(T)("rechnungswerk", "Zahldatum"),
							onKeyup: [k((t) => ae(e), ["enter"]), k(ie, ["esc"])]
						}, null, 40, Nu), [[I, O.value]]),
						J(t(W), {
							variant: "primary",
							"aria-label": t(T)("rechnungswerk", "Zahldatum speichern"),
							title: t(T)("rechnungswerk", "Zahldatum speichern"),
							onClick: q((t) => ae(e), ["stop"])
						}, {
							icon: _(() => [J(sl, { size: 18 })]),
							_: 1
						}, 8, [
							"aria-label",
							"title",
							"onClick"
						]),
						J(t(W), {
							variant: "tertiary",
							"aria-label": t(T)("rechnungswerk", "Abbrechen"),
							title: t(T)("rechnungswerk", "Abbrechen"),
							onClick: q(ie, ["stop"])
						}, {
							icon: _(() => [J(pl, { size: 18 })]),
							_: 1
						}, 8, ["aria-label", "title"])
					])) : e.paymentStatus === "paid" ? (Z(), V("button", {
						key: 1,
						type: "button",
						class: "rw-subline rw-subline--editable",
						title: t(T)("rechnungswerk", "Zahldatum ändern"),
						onClick: q((t) => re(e), ["stop"])
					}, Y(x(e)), 9, Pu)) : x(e) ? (Z(), V("div", {
						key: 2,
						class: H(["rw-subline", { "rw-subline--overdue": e.paymentStatus === "overdue" }])
					}, Y(x(e)), 3)) : n("", !0)]),
					z("td", Fu, [e.paymentStatus ? (Z(), V("button", {
						key: 0,
						class: H(["rw-paybox", e.paymentStatus === "paid" ? "rw-paybox--paid" : "rw-paybox--open"]),
						"aria-label": S(e),
						title: C(e),
						onClick: q((t) => te(e), ["stop"])
					}, [(Z(), N(ve(e.paymentStatus === "paid" ? tl : Yc), { size: 22 }))], 10, Iu)) : n("", !0)]),
					z("td", Lu, [z("div", Ru, [e.invoiceType === "cancellation" ? n("", !0) : (Z(), N(t(W), {
						key: 0,
						variant: "tertiary",
						"aria-label": t(T)("rechnungswerk", "Duplizieren"),
						title: t(T)("rechnungswerk", "Als Vorlage für neue Rechnung duplizieren"),
						onClick: q((t) => he(e.id), ["stop"])
					}, {
						icon: _(() => [J(pc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])), e.status === "draft" ? n("", !0) : (Z(), N(t(W), {
						key: 1,
						variant: "tertiary",
						"aria-label": t(T)("rechnungswerk", "PDF herunterladen"),
						title: t(T)("rechnungswerk", "PDF herunterladen"),
						onClick: q((t) => P(e.id), ["stop"])
					}, {
						icon: _(() => [J(sc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					]))])])
				], 10, Ou))), 128))])])])])) : n("", !0)
			]);
		};
	}
}), Vu = {
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
}, Hu = ["aria-hidden", "aria-label"], Uu = [
	"fill",
	"width",
	"height"
], Wu = { key: 0 };
function Gu(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon delete-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Wu, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" }, null, -1)], 8, Uu))], 16, Hu);
}
var Ku = /*#__PURE__*/ Q(Vu, [["render", Gu]]), qu = {
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
}, Ju = ["aria-hidden", "aria-label"], Yu = [
	"fill",
	"width",
	"height"
], Xu = { key: 0 };
function Zu(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon send-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Xu, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M2,21L23,12L2,3V10L17,12L2,14V21Z" }, null, -1)], 8, Yu))], 16, Ju);
}
var Qu = /*#__PURE__*/ Q(qu, [["render", Zu]]), $u = {
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
}, ed = ["aria-hidden", "aria-label"], td = [
	"fill",
	"width",
	"height"
], nd = { key: 0 };
function rd(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon eye-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", nd, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" }, null, -1)], 8, td))], 16, ed);
}
var id = /*#__PURE__*/ Q($u, [["render", rd]]), ad = {
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
}, od = ["aria-hidden", "aria-label"], sd = [
	"fill",
	"width",
	"height"
], cd = { key: 0 };
function ld(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-move-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", cd, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 20.41 4.12 20.8 4.34 21.12C4.41 21.23 4.5 21.33 4.59 21.41C4.95 21.78 5.45 22 6 22H13.53C13 21.42 12.61 20.75 12.35 20H6V4H13V9H18V12C18.7 12 19.37 12.12 20 12.34V8L14 2M18 23L23 18.5L20 15.8L18 14V17H14V20H18V23Z" }, null, -1)], 8, sd))], 16, od);
}
var ud = /*#__PURE__*/ Q(ad, [["render", ld]]), dd = {
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
}, fd = ["aria-hidden", "aria-label"], pd = [
	"fill",
	"width",
	"height"
], md = { key: 0 };
function hd(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-edit-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", md, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" }, null, -1)], 8, pd))], 16, fd);
}
var gd = /*#__PURE__*/ Q(dd, [["render", hd]]), _d = (e) => ds(`/contacts/search?q=${encodeURIComponent(e)}`), vd = () => ds("/me"), yd = { class: "contact-picker" }, bd = ["value", "placeholder"], xd = {
	key: 0,
	class: "contact-picker__list"
}, Sd = ["onMousedown"], Cd = {
	key: 0,
	class: "muted"
}, wd = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "ContactPicker",
	props: { modelValue: {} },
	emits: ["update:modelValue", "select"],
	setup(e, { emit: r }) {
		let i = r, a = v([]), o = v(!1), s = null;
		function c(e) {
			i("update:modelValue", e), s && clearTimeout(s), e.trim().length < 2 ? (a.value = [], o.value = !1) : s = setTimeout(async () => {
				try {
					a.value = await _d(e.trim()), o.value = a.value.length > 0;
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
		}), (r, i) => (Z(), V("div", yd, [z("input", {
			value: e.modelValue,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: t(T)("rechnungswerk", "Name eingeben oder Kontakt wählen\xA0…"),
			onInput: i[0] ||= (e) => c(e.target.value),
			onFocus: i[1] ||= (e) => o.value = a.value.length > 0,
			onBlur: u
		}, null, 40, bd), o.value && a.value.length > 0 ? (Z(), V("ul", xd, [(Z(!0), V(D, null, X(a.value, (e, t) => (Z(), V("li", {
			key: t,
			class: "contact-picker__item",
			onMousedown: q((t) => l(e), ["prevent"])
		}, [z("strong", null, Y(e.name), 1), e.email ? (Z(), V("span", Cd, Y(e.email), 1)) : n("", !0)], 40, Sd))), 128))])) : n("", !0)]));
	}
}), [["__scopeId", "data-v-23f7f625"]]), Td = null, Ed = () => (Td === null && (Td = ds("/countries").catch((e) => {
	throw Td = null, e;
})), Td), Dd = ["disabled", "title"], Od = ["value"], kd = ["value"], Ad = /* @__PURE__ */ U({
	__name: "CountrySelect",
	props: /*@__PURE__*/ Dt({
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
		let t = at(e, "modelValue"), r = v([]), i = L(() => {
			let e = r.value.find((e) => e.code === t.value);
			return e ? `${e.label} (${e.code})` : t.value ?? "";
		}), a = L(() => {
			let e = t.value ?? "";
			return e === "" || r.value.length === 0 ? e : r.value.some((t) => t.code === e) ? "" : e;
		});
		return Ne(async () => {
			try {
				r.value = await Ed();
			} catch {
				r.value = [];
			}
		}), (o, s) => w((Z(), V("select", {
			"onUpdate:modelValue": s[0] ||= (e) => t.value = e,
			class: H(e.selectClass),
			disabled: e.disabled,
			title: i.value
		}, [a.value === "" ? n("", !0) : (Z(), V("option", {
			key: 0,
			value: a.value
		}, Y(a.value), 9, Od)), (Z(!0), V(D, null, X(r.value, (e) => (Z(), V("option", {
			key: e.code,
			value: e.code
		}, Y(e.label) + " (" + Y(e.code) + ")", 9, kd))), 128))], 10, Dd)), [[Se, t.value]]);
	}
}), jd = () => ds("/customers"), Md = (e) => fs("/customers", { data: e }), Nd = (e, t) => ps(`/customers/${e}`, { data: t }), Pd = (e) => hs(`/customers/${e}`), Fd = vn("customer", () => {
	let e = v([]), t = v(!1);
	function n() {
		e.value.sort((e, t) => e.name.localeCompare(t.name));
	}
	async function r() {
		t.value = !0;
		try {
			e.value = await jd();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		let r = await Md(t);
		return e.value.push(r), n(), r;
	}
	async function a(t, r) {
		let i = await Nd(t, r), a = e.value.findIndex((e) => e.id === t);
		return a >= 0 && (e.value[a] = i), n(), i;
	}
	async function o(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Pd(t);
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
}), Id = { class: "customer-picker" }, Ld = ["value", "placeholder"], Rd = {
	key: 0,
	class: "customer-picker__list"
}, zd = ["onMousedown"], Bd = { class: "muted" }, Vd = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "CustomerPicker",
	emits: ["select"],
	setup(e, { emit: r }) {
		let i = r, a = Fd(), o = v(""), s = v([]), c = v(!1);
		Ne(() => {
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
		return (e, r) => (Z(), V("div", Id, [z("input", {
			value: o.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: t(T)("rechnungswerk", "Kunde suchen oder anlegen\xA0…"),
			onInput: r[0] ||= (e) => l(e.target.value),
			onFocus: r[1] ||= (e) => c.value = s.value.length > 0,
			onBlur: d
		}, null, 40, Ld), c.value && s.value.length > 0 ? (Z(), V("ul", Rd, [(Z(!0), V(D, null, X(s.value, (e) => (Z(), V("li", {
			key: e.id,
			class: "customer-picker__item",
			onMousedown: q((t) => u(e), ["prevent"])
		}, [z("strong", null, Y(e.name), 1), z("span", Bd, Y([
			e.customerNumber,
			[e.postalCode, e.city].filter(Boolean).join(" "),
			e.vatId
		].filter(Boolean).join(" · ")), 1)], 40, zd))), 128))])) : n("", !0)]));
	}
}), [["__scopeId", "data-v-4ad9c538"]]), Hd = { class: "product-picker" }, Ud = ["value", "placeholder"], Wd = {
	key: 0,
	class: "product-picker__panel"
}, Gd = { class: "product-picker__head" }, Kd = { class: "product-picker__list" }, qd = ["onMousedown"], Jd = { class: "muted" }, Yd = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "ProductPicker",
	props: { products: {} },
	emits: ["select"],
	setup(e, { emit: r }) {
		let i = e, a = r, o = v(""), s = v([]), c = v(!1), l = null, u = L(() => o.value.trim() === "" ? T("rechnungswerk", "Alle Produkte ({gesamt})", { gesamt: i.products.length }) : T("rechnungswerk", "{treffer} Treffer", { treffer: s.value.length }));
		function d(e) {
			return [`${$l(e.defaultPriceE4)} €`, e.defaultUnitLabel || T("rechnungswerk", zl[e.defaultUnitCode])].filter(Boolean).join(" · ");
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
		return (e, r) => (Z(), V("div", Hd, [z("input", {
			value: o.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: t(T)("rechnungswerk", "Produkt wählen oder suchen\xA0…"),
			onInput: r[0] ||= (e) => p(e.target.value),
			onFocus: m,
			onClick: m,
			onBlur: g
		}, null, 40, Ud), c.value && s.value.length > 0 ? (Z(), V("div", Wd, [z("div", Gd, Y(u.value), 1), z("ul", Kd, [(Z(!0), V(D, null, X(s.value, (e) => (Z(), V("li", {
			key: e.id,
			class: "product-picker__item",
			onMousedown: q((t) => h(e), ["prevent"])
		}, [z("strong", null, Y(e.name), 1), z("span", Jd, Y(d(e)), 1)], 40, qd))), 128))])])) : n("", !0)]));
	}
}), [["__scopeId", "data-v-6469714c"]]);
// src/types/editor.ts
function Xd(e = 1900) {
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
function Zd(e, t) {
	return {
		productId: e.id,
		name: e.name,
		description: e.description ?? "",
		quantity: "1",
		unitCode: e.defaultUnitCode,
		unitLabel: e.defaultUnitLabel ?? "",
		priceInput: $l(e.defaultPriceE4),
		taxRateBp: t ? 0 : e.defaultTaxRateBp
	};
}
function Qd(e) {
	return {
		productId: e.productId,
		name: e.name,
		description: e.description ?? "",
		quantity: Ql(e.quantity),
		unitCode: e.unitCode,
		unitLabel: e.unitLabel ?? "",
		priceInput: $l(e.unitPriceE4),
		taxRateBp: e.taxRateBp
	};
}
// src/utils/invoiceCalc.ts
function $d(e, t) {
	let n = Yl(e);
	if (n === null) return 0;
	let r = Math.round(Number(n) * 1e3);
	return Math.round(r * t / 1e5);
}
function ef(e, t = !1) {
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
var tf = { class: "rw-table-wrap" }, nf = { class: "rw-table rw-table--positions" }, rf = {
	key: 0,
	class: "rw-col-actions"
}, af = { class: "num" }, of = { class: "num" }, sf = { class: "num" }, cf = { class: "rw-sum" }, lf = { key: 0 }, uf = { class: "rw-pos-main" }, df = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], ff = { class: "num" }, pf = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], mf = ["onUpdate:modelValue", "disabled"], hf = ["value"], gf = { class: "num" }, _f = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], vf = { class: "num" }, yf = ["onUpdate:modelValue", "disabled"], bf = ["value"], xf = { class: "rw-sum" }, Sf = {
	key: 0,
	class: "num"
}, Cf = {
	key: 0,
	class: "rw-pos-desc"
}, wf = ["colspan"], Tf = { class: "rw-sub-row" }, Ef = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder",
	"title"
], Df = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Of = { key: 0 }, kf = ["colspan"], Af = {
	key: 0,
	class: "rw-toolbar"
}, jf = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "InvoiceItemsTable",
	props: /*@__PURE__*/ Dt({
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
		let r = at(e, "items"), i = e, a = (e) => $d(e.quantity, eu(e.priceInput));
		function o(e) {
			let t = Yl(e.quantity);
			t !== null && (e.quantity = Zl(t));
		}
		function s(e) {
			Xl(e.priceInput) !== null && (e.priceInput = $l(eu(e.priceInput)));
		}
		j(() => i.smallBusiness, (e) => {
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
			d() === -1 && r.value.push(Xd(i.smallBusiness ? 0 : i.defaultTaxRateBp ?? 1900));
		}
		function p(e) {
			let t = Zd(e, i.smallBusiness ?? !1), n = d();
			n === -1 ? r.value.push(t) : r.value.splice(n, 1, t);
		}
		function m(e) {
			r.value.splice(e, 1);
		}
		return (i, c) => (Z(), V("div", null, [z("div", tf, [z("table", nf, [
			z("colgroup", null, [
				c[0] ||= z("col", null, null, -1),
				c[1] ||= z("col", { class: "rw-col-qty" }, null, -1),
				c[2] ||= z("col", { class: "rw-col-unit" }, null, -1),
				c[3] ||= z("col", { class: "rw-col-price" }, null, -1),
				c[4] ||= z("col", { class: "rw-col-tax" }, null, -1),
				c[5] ||= z("col", { class: "rw-col-sum" }, null, -1),
				e.readonly ? n("", !0) : (Z(), V("col", rf))
			]),
			z("thead", null, [z("tr", null, [
				z("th", null, Y(t(T)("rechnungswerk", "Bezeichnung")), 1),
				z("th", af, Y(t(T)("rechnungswerk", "Menge")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Einheit")), 1),
				z("th", of, Y(t(T)("rechnungswerk", "Einzelpreis (€)")), 1),
				z("th", sf, Y(t(T)("rechnungswerk", "USt")), 1),
				z("th", cf, Y(t(T)("rechnungswerk", "Summe netto")), 1),
				e.readonly ? n("", !0) : (Z(), V("th", lf))
			])]),
			z("tbody", null, [(Z(!0), V(D, null, X(r.value, (r, i) => (Z(), V(D, { key: i }, [z("tr", uf, [
				z("td", null, [w(z("input", {
					"onUpdate:modelValue": (e) => r.name = e,
					class: "rw-input",
					type: "text",
					readonly: e.readonly,
					placeholder: t(T)("rechnungswerk", "Leistung")
				}, null, 8, df), [[I, r.name]])]),
				z("td", ff, [w(z("input", {
					"onUpdate:modelValue": (e) => r.quantity = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => o(r)
				}, null, 40, pf), [[I, r.quantity]])]),
				z("td", null, [w(z("select", {
					"onUpdate:modelValue": (e) => r.unitCode = e,
					class: "rw-input",
					disabled: e.readonly
				}, [(Z(!0), V(D, null, X(t(Rl), (e) => (Z(), V("option", {
					key: e,
					value: e
				}, Y(t(T)("rechnungswerk", t(zl)[e])), 9, hf))), 128))], 8, mf), [[Se, r.unitCode]])]),
				z("td", gf, [w(z("input", {
					"onUpdate:modelValue": (e) => r.priceInput = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => s(r)
				}, null, 40, _f), [[I, r.priceInput]])]),
				z("td", vf, [w(z("select", {
					"onUpdate:modelValue": (e) => r.taxRateBp = e,
					class: "rw-input",
					disabled: e.readonly || e.smallBusiness
				}, [(Z(!0), V(D, null, X(t(Bl), (e) => (Z(), V("option", {
					key: e,
					value: e
				}, Y(t(ru)(e)), 9, bf))), 128))], 8, yf), [[
					Se,
					r.taxRateBp,
					void 0,
					{ number: !0 }
				]])]),
				z("td", xf, Y(t(nu)(a(r))), 1),
				e.readonly ? n("", !0) : (Z(), V("td", Sf, [J(t(W), {
					variant: "tertiary",
					"aria-label": t(T)("rechnungswerk", "Position entfernen"),
					onClick: (e) => m(i)
				}, {
					icon: _(() => [J(Ku, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "onClick"])]))
			]), !e.readonly || r.description || r.unitLabel ? (Z(), V("tr", Cf, [z("td", { colspan: e.readonly ? 6 : 7 }, [z("div", Tf, [!e.readonly || r.unitLabel ? w((Z(), V("input", {
				key: 0,
				"onUpdate:modelValue": (e) => r.unitLabel = e,
				class: "rw-input rw-input--sub rw-unit-label",
				type: "text",
				maxlength: "64",
				readonly: e.readonly,
				placeholder: t(T)("rechnungswerk", "eigene Einheit"),
				title: t(T)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.")
			}, null, 8, Ef)), [[I, r.unitLabel]]) : n("", !0), !e.readonly || r.description ? w((Z(), V("input", {
				key: 1,
				"onUpdate:modelValue": (e) => r.description = e,
				class: "rw-input rw-input--sub rw-desc",
				type: "text",
				readonly: e.readonly,
				placeholder: t(T)("rechnungswerk", "Beschreibung (optional)")
			}, null, 8, Df)), [[I, r.description]]) : n("", !0)])], 8, wf)])) : n("", !0)], 64))), 128)), r.value.length === 0 ? (Z(), V("tr", Of, [z("td", {
				colspan: e.readonly ? 6 : 7,
				class: "rw-muted empty-row"
			}, Y(t(T)("rechnungswerk", "Noch keine Positionen.")), 9, kf)])) : n("", !0)])
		])]), e.readonly ? n("", !0) : (Z(), V("div", Af, [J(t(W), { onClick: f }, {
			icon: _(() => [J(tc, { size: 20 })]),
			default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Position hinzufügen")), 1)]),
			_: 1
		}), e.products.length > 0 ? (Z(), N(Yd, {
			key: 0,
			products: e.products,
			onSelect: p
		}, null, 8, ["products"])) : (Z(), N(t(W), {
			key: 1,
			variant: "tertiary",
			onClick: l
		}, {
			icon: _(() => [J(to, { size: 20 })]),
			default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Noch keine Produkte angelegt")), 1)]),
			_: 1
		}))]))]));
	}
}), [["__scopeId", "data-v-76deaaa6"]]), Mf = { class: "confirm-dialog" }, Nf = { class: "confirm-dialog__message" }, Pf = /*#__PURE__*/ Q(/* @__PURE__ */ U({
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
			actions: _(() => [J(t(W), {
				variant: "secondary",
				onClick: r[0] ||= (e) => n.$emit("close")
			}, {
				default: _(() => [K(Y(e.cancelLabel || t(T)("rechnungswerk", "Abbrechen")), 1)]),
				_: 1
			}), J(t(W), {
				variant: e.destructive ? "error" : "primary",
				onClick: r[1] ||= (e) => n.$emit("confirm")
			}, {
				default: _(() => [K(Y(e.confirmLabel || t(T)("rechnungswerk", "Bestätigen")), 1)]),
				_: 1
			}, 8, ["variant"])]),
			default: _(() => [z("div", Mf, [z("p", Nf, Y(e.message), 1), F(n.$slots, "default", {}, void 0, !0)])]),
			_: 3
		}, 8, ["open", "name"]));
	}
}), [["__scopeId", "data-v-aa305e87"]]), Ff = { class: "send-modal" }, If = { class: "send-modal__hint" }, Lf = { class: "field" }, Rf = { class: "field" }, zf = { class: "field" }, Bf = { class: "actions" }, Vf = /*#__PURE__*/ Q(/* @__PURE__ */ U({
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
		let i = e, a = L(() => i.kind === "quote"), o = L(() => a.value ? T("rechnungswerk", "Angebot an Kunde senden") : T("rechnungswerk", "Rechnung an Kunde senden")), s = L(() => a.value ? T("rechnungswerk", "Das Angebot wird als PDF angehängt.") : T("rechnungswerk", "Die E-Rechnung wird als ZUGFeRD-PDF angehängt.")), c = r, l = v(null), u = De({
			to: "",
			subject: "",
			body: ""
		}), d = L(() => /\S+@\S+\.\S+/.test(u.to.trim()) && u.subject.trim() !== "");
		j(() => i.open, (e) => {
			if (!e) return;
			let t = i.invoice;
			u.to = t?.recipientEmail ?? "", a.value ? u.subject = t?.number ? T("rechnungswerk", "Angebot {number}", { number: t.number }) : T("rechnungswerk", "Ihr Angebot") : u.subject = t?.number ? T("rechnungswerk", "Rechnung {number}", { number: t.number }) : T("rechnungswerk", "Ihre Rechnung"), u.body = i.defaultBody, qe(() => l.value?.focus());
		}, { immediate: !0 });
		function f() {
			d.value && c("send", {
				to: u.to.trim(),
				subject: u.subject.trim(),
				body: u.body
			});
		}
		return (r, i) => e.open ? (Z(), N(t(Me), {
			key: 0,
			name: o.value,
			onKeydown: i[4] ||= k((e) => t(vs)(e, () => r.$emit("close")), ["esc"]),
			onClose: i[5] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [z("div", Ff, [
				z("h2", null, Y(o.value), 1),
				z("p", If, Y(s.value), 1),
				z("label", Lf, [z("span", null, Y(t(T)("rechnungswerk", "Empfänger-E-Mail")) + " *", 1), w(z("input", {
					ref_key: "toInput",
					ref: l,
					"onUpdate:modelValue": i[0] ||= (e) => u.to = e,
					class: "input",
					type: "email"
				}, null, 512), [[I, u.to]])]),
				z("label", Rf, [z("span", null, Y(t(T)("rechnungswerk", "Betreff")) + " *", 1), w(z("input", {
					"onUpdate:modelValue": i[1] ||= (e) => u.subject = e,
					class: "input",
					type: "text"
				}, null, 512), [[I, u.subject]])]),
				z("label", zf, [z("span", null, Y(t(T)("rechnungswerk", "Nachricht")), 1), w(z("textarea", {
					"onUpdate:modelValue": i[2] ||= (e) => u.body = e,
					class: "input",
					rows: "6"
				}, null, 512), [[I, u.body]])]),
				z("div", Bf, [J(t(W), { onClick: i[3] ||= (e) => r.$emit("close") }, {
					default: _(() => [K(Y(t(T)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(t(W), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					icon: _(() => [J(Qu, { size: 20 })]),
					default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Senden")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-2f5a808a"]]), Hf = () => ds("/quotes"), Uf = (e) => ds(`/quotes/${e}`), Wf = (e) => fs("/quotes", { data: e }), Gf = (e, t) => ps(`/quotes/${e}`, { data: t }), Kf = (e) => hs(`/quotes/${e}`), qf = (e) => fs(`/quotes/${e}/commit`, {}), Jf = (e) => fs(`/quotes/${e}/accept`, {}), Yf = (e) => fs(`/quotes/${e}/reject`, {}), Xf = (e) => fs(`/quotes/${e}/convert`, {}), Zf = (e) => fs(`/quotes/${e}/revise`, {}), Qf = (e) => ls(`/quotes/${e}/pdf`), $f = (e) => ls(`/quotes/${e}/preview`) + "?t=" + Date.now(), ep = (e) => {
	let t = document.createElement("a");
	t.href = Qf(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, tp = (e, t) => fs(`/quotes/${e}/send`, t), np = vn("quote", () => {
	let e = v([]), t = v(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await Hf();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => Uf(e);
	async function i(e) {
		let t = await Wf(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await Gf(e, t);
		return await n(), r;
	}
	async function o(t) {
		await Kf(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await qf(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await Jf(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await Yf(e);
		return await n(), t;
	}
	async function u(e) {
		let t = await Xf(e);
		return await n(), t;
	}
	async function d(e) {
		let t = await Zf(e);
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
}), rp = () => ds("/products"), ip = (e) => fs("/products", { data: e }), ap = (e, t) => ps(`/products/${e}`, { data: t }), op = (e) => hs(`/products/${e}`), sp = vn("product", () => {
	let e = v([]), t = v(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await rp();
		} finally {
			t.value = !1;
		}
	}
	async function r(t) {
		let n = await ip(t);
		return e.value.push(n), e.value.sort((e, t) => e.name.localeCompare(t.name)), n;
	}
	async function i(t, n) {
		let r = await ap(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), e.value.sort((e, t) => e.name.localeCompare(t.name)), r;
	}
	async function a(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await op(t);
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
}), cp = () => ds("/text-snippets"), lp = (e) => fs("/text-snippets", { data: e }), up = (e, t) => ps(`/text-snippets/${e}`, { data: t }), dp = (e) => hs(`/text-snippets/${e}`);
// src/stores/textSnippetStore.ts
function fp(e) {
	e.sort((e, t) => e.docType.localeCompare(t.docType) || e.slot.localeCompare(t.slot) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
}
var pp = vn("textSnippet", () => {
	let e = v([]), t = v(!1), n = v(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await cp(), n.value = !0;
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
		let n = await lp(t);
		return e.value.push(n), a(n), fp(e.value), n;
	}
	async function s(t, n) {
		let r = await up(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), a(r), fp(e.value), r;
	}
	async function c(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await dp(t);
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
}), mp = () => ds("/me/contact"), hp = (e) => ms("/me/contact", { data: e }), gp = { class: "rw-view rw-view--narrow" }, _p = { class: "rw-editor-head" }, vp = {
	key: 0,
	class: "rw-status-group"
}, yp = { class: "rw-status-tag" }, bp = {
	key: 0,
	class: "rw-pill"
}, xp = {
	key: 1,
	class: "rw-pill"
}, Sp = ["title"], Cp = { class: "rw-section" }, wp = { class: "rw-form-row" }, Tp = { class: "rw-field invoice-no" }, Ep = ["value"], Dp = { class: "rw-field" }, Op = ["readonly"], kp = { class: "rw-field" }, Ap = ["readonly"], jp = { class: "rw-hint" }, Mp = ["open"], Np = { class: "rw-form-row" }, Pp = { class: "rw-field" }, Fp = ["readonly"], Ip = { class: "rw-field" }, Lp = ["readonly"], Rp = {
	key: 0,
	class: "rw-field"
}, zp = ["readonly", "placeholder"], Bp = {
	key: 1,
	class: "rw-field",
	"aria-hidden": "true"
}, Vp = { class: "rw-form-row" }, Hp = { class: "rw-field" }, Up = ["readonly"], Wp = { class: "rw-field" }, Gp = ["readonly"], Kp = { class: "rw-section" }, qp = {
	key: 0,
	class: "rw-form-row"
}, Jp = { class: "rw-field" }, Yp = { class: "rw-hint" }, Xp = { class: "rw-form-row" }, Zp = { class: "rw-field" }, Qp = ["value"], $p = { class: "rw-field" }, em = ["readonly"], tm = { class: "rw-form-row" }, nm = { class: "rw-field" }, rm = ["readonly"], im = { class: "rw-hint" }, am = { class: "rw-form-row" }, om = { class: "rw-field" }, sm = ["readonly"], cm = { class: "rw-field rw-field--narrow" }, lm = ["readonly"], um = { class: "rw-field" }, dm = ["readonly"], fm = { class: "rw-field rw-field--country" }, pm = { class: "rw-form-row" }, mm = { class: "rw-field" }, hm = ["readonly"], gm = { class: "rw-field" }, _m = ["readonly"], vm = { class: "rw-field" }, ym = ["readonly"], bm = { class: "rw-section" }, xm = { class: "rw-form-row" }, Sm = { class: "rw-field" }, Cm = ["readonly"], wm = { class: "rw-field" }, Tm = ["readonly"], Em = { class: "rw-field" }, Dm = ["readonly"], Om = { class: "rw-hint" }, km = { class: "rw-section" }, Am = { class: "rw-section-head" }, jm = { class: "rw-field" }, Mm = ["readonly", "placeholder"], Nm = { class: "rw-section" }, Pm = { class: "rw-section" }, Fm = { class: "rw-form-row" }, Im = { class: "rw-field" }, Lm = ["disabled"], Rm = { value: "" }, zm = { value: "reverse_charge" }, Bm = { value: "intra_community" }, Vm = { value: "export" }, Hm = { class: "rw-totals" }, Um = { class: "rw-kpi-card" }, Wm = { class: "rw-kpi-row" }, Gm = { class: "rw-kpi-row rw-kpi-row--grand" }, Km = {
	key: 4,
	class: "rw-section"
}, qm = { class: "rw-form-row" }, Jm = { class: "rw-field payterm-days" }, Ym = ["readonly"], Xm = { class: "rw-field" }, Zm = ["value"], Qm = { class: "rw-field" }, $m = ["readonly", "placeholder"], eh = {
	key: 5,
	class: "rw-section"
}, th = { class: "rw-form-row" }, nh = { class: "rw-field payterm-days" }, rh = ["readonly"], ih = { class: "rw-field rw-checkbox-field" }, ah = { class: "rw-checkbox-row" }, oh = ["disabled"], sh = { class: "rw-hint" }, ch = { class: "rw-section" }, lh = { class: "rw-section-head" }, uh = { class: "rw-field" }, dh = ["readonly", "placeholder"], fh = {
	key: 6,
	class: "rw-section"
}, ph = [
	"onUpdate:modelValue",
	"readonly",
	"aria-label"
], mh = { class: "rw-hint" }, hh = { class: "rw-action-bar" }, gh = ["src", "title"], _h = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "InvoiceEditorView",
	props: { id: {} },
	setup(e) {
		let r = e, i = le(), a = ot(), o = Ol(), s = np(), c = sp(), l = Ll(), u = pp(), d = L(() => typeof i.name == "string" && i.name.startsWith("quote")), f = L(() => d.value ? s : o), p = L(() => d.value ? "quote" : "invoice"), h = L(() => u.forSlot(p.value, "opening")), g = L(() => u.forSlot(p.value, "closing"));
		function ee(e) {
			M.greeting = e.content ?? "";
		}
		function y(e) {
			M.extraText = e.content ?? "";
		}
		let b = L(() => d.value ? "quotes" : "invoices"), x = L(() => d.value ? "quote-detail" : "invoice-detail"), C = v(null), te = v([Xd()]), E = v([]), O = v(""), ne = v(""), k = v(!1), re = v(!1), ie = v(!1), ae = v(!1), oe = v(""), A = v(null), se = v(!1), ce = null, de = () => ({
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
		}), M = De(de()), fe = [
			"reverse_charge",
			"intra_community",
			"export"
		], pe = L(() => (l.settings?.smallBusiness ?? !1) || fe.includes(M.specialTaxCase)), me = L(() => {
			let e = Number.parseInt(String(M.paymentTermDays), 10);
			if (Number.isNaN(e)) return "";
			let t = (e) => /* @__PURE__ */ new Date(`${e}T12:00:00`);
			if (C.value?.dueDate) return t(C.value.dueDate).toLocaleDateString();
			let n = C.value?.issueDate ? t(C.value.issueDate) : /* @__PURE__ */ new Date();
			return n.setDate(n.getDate() + e), n.toLocaleDateString();
		}), P = L(() => C.value !== null && C.value.status !== "draft"), he = {
			draft: yc,
			committed: bo,
			cancelled: Tc
		}, F = {
			pending: Lc,
			confirmed: jc,
			unknown: Uc,
			failed: Tc
		}, ge = (e) => he[e] ?? yc, _e = (e) => F[e] ?? Uc, ye = L(() => C.value ? d.value && C.value.quoteStatus ? T("rechnungswerk", Kl[C.value.quoteStatus] ?? C.value.status) : T("rechnungswerk", Wl[C.value.status]) : ""), be = L(() => C.value ? T("rechnungswerk", Gl[C.value.invoiceType]) : ""), xe = L(() => {
			let e = {
				pending: T("rechnungswerk", "DATEV: gesendet"),
				confirmed: T("rechnungswerk", "DATEV: bestätigt"),
				failed: T("rechnungswerk", "DATEV: abgelehnt"),
				unknown: T("rechnungswerk", "DATEV: Antwort prüfen")
			}, t = C.value?.datevStatus;
			return t ? e[t] ?? "" : "";
		}), Ce = L(() => C.value ? C.value.relatedNumber ? T("rechnungswerk", "{type} zu Rechnung {number}", {
			type: be.value,
			number: C.value.relatedNumber
		}) : be.value : ""), we = L(() => {
			let e = l.settings;
			return !d.value && !!e && !e.vatId?.trim() && !e.registerNumber?.trim();
		}), Te = L(() => {
			if (d.value) return T("rechnungswerk", "Das Angebot erhält seine endgültige Nummer und ist danach unveränderbar.");
			let e = T("rechnungswerk", "Die Rechnung erhält ihre endgültige Nummer und kann danach nur noch storniert werden."), t = l.settings;
			return t?.datevAutoSend && t.datevUploadMail ? e + " " + T("rechnungswerk", "Sie wird automatisch an DATEV übergeben.") : e;
		}), Ee = L(() => {
			let e = (C.value?.greeting ?? u.defaultContent(p.value, "opening")).trim(), t = (C.value?.extraText ?? u.defaultContent(p.value, "closing")).trim(), n = d.value ? T("rechnungswerk", "anbei erhalten Sie unser Angebot als PDF.") : T("rechnungswerk", "anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).");
			return [e === "" ? n : e, t].filter((e) => e !== "").join("\n\n");
		}), Oe = L(() => C.value ? C.value.number ?? T("rechnungswerk", "Entwurf") : d.value ? T("rechnungswerk", "Neues Angebot") : T("rechnungswerk", "Neue Rechnung")), ke = L(() => ef(te.value.map((e) => ({
			taxRateBp: e.taxRateBp,
			lineTotalCents: $d(e.quantity, eu(e.priceInput))
		})), pe.value)), Ae = 0;
		Ne(async () => {
			let e = ++Ae;
			try {
				if (await Promise.all([
					c.fetchAll(),
					l.fetch(),
					u.ensureLoaded()
				]), e !== Ae) return;
				r.id ? await Me(Number(r.id), e) : await R(e);
			} catch (e) {
				ft(e, T("rechnungswerk", "Laden fehlgeschlagen"));
			}
		}), j(() => [i.name, r.id], async ([, e]) => {
			let t = ++Ae;
			try {
				if (!e) je(), await R(t);
				else {
					let n = C.value !== null && C.value.invoiceType === "quote" !== d.value;
					(C.value?.id !== Number(e) || n) && (je(), await Me(Number(e), t));
				}
			} catch (e) {
				ft(e, T("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function je() {
			C.value = null, te.value = [Xd()], E.value = [], O.value = "", ne.value = "", ie.value = !1, ae.value = !1, oe.value = "", A.value = null, se.value = !1, Object.assign(M, de()), ce = null;
		}
		async function R(e = Ae) {
			let t = l.settings;
			M.greeting = u.defaultContent(p.value, "opening"), M.extraText = u.defaultContent(p.value, "closing"), M.paymentTermDays = d.value ? "" : t?.defaultPaymentTermDays ?? "";
			let n = {
				person: "",
				phone: "",
				email: ""
			};
			try {
				n = await mp();
			} catch {}
			e === Ae && (M.sellerContactPerson = n.person || (t?.contactPerson ?? ""), M.sellerContactPhone = n.phone || (t?.contactPhone ?? ""), M.sellerContactEmail = n.email || (t?.contactEmail ?? ""), Be());
		}
		async function Me(e, t = Ae) {
			let n = await f.value.get(e);
			t === Ae && (C.value = n, M.customerId = n.customerId ?? null, M.recipientName = n.recipientName ?? "", M.recipientEmail = n.recipientEmail ?? "", M.recipientAddressAddition = n.recipientAddressAddition ?? "", M.recipientAddress = n.recipientAddress ?? "", M.recipientPostalCode = n.recipientPostalCode ?? "", M.recipientCity = n.recipientCity ?? "", M.recipientCountry = n.recipientCountry ?? "DE", M.recipientVatId = n.recipientVatId ?? "", M.recipientContactId = n.recipientContactId ?? "", M.recipientContactPerson = n.recipientContactPerson ?? "", M.recipientPhone = n.recipientPhone ?? "", M.sellerContactPerson = n.sellerContactPerson ?? "", M.sellerContactPhone = n.sellerContactPhone ?? "", M.sellerContactEmail = n.sellerContactEmail ?? "", M.performancePeriodStart = n.performancePeriodStart ?? n.performanceDate ?? "", M.performancePeriodEnd = n.performancePeriodEnd ?? "", M.referenceNumber = n.referenceNumber ?? "", M.orderNumber = n.orderNumber ?? "", M.buyerReference = n.buyerReference ?? "", M.contractNumber = n.contractNumber ?? "", M.projectReference = n.projectReference ?? "", se.value = [
				M.referenceNumber,
				M.orderNumber,
				d.value ? "" : M.buyerReference,
				M.contractNumber,
				M.projectReference
			].some((e) => e.trim() !== ""), E.value = [...n.notes ?? []], M.specialTaxCase = n.specialTaxCase ?? "", M.greeting = n.greeting ?? "", M.extraText = n.extraText ?? "", M.paymentTermDays = n.paymentTermDays ?? "", M.discountTerms = n.discountTerms ?? "", M.validUntil = n.validUntil ?? "", M.offerFreeform = n.offerFreeform ?? !1, te.value = n.items.length > 0 ? n.items.map(Qd) : [Xd()], Be());
		}
		function Pe() {
			E.value.push("");
		}
		function Fe(e) {
			E.value.splice(e, 1);
		}
		function Ie(e) {
			M.customerId = e.id, M.recipientName = e.name, M.recipientContactId = "", M.recipientEmail = e.email ?? "", M.recipientAddressAddition = e.addressAddition ?? "", M.recipientAddress = e.address ?? "", M.recipientPostalCode = e.postalCode ?? "", M.recipientCity = e.city ?? "", M.recipientCountry = e.country ?? "DE", M.recipientVatId = e.vatId ?? "", M.recipientContactPerson = e.contactPerson ?? "", M.recipientPhone = e.phone ?? "", e.defaultPaymentTermDays != null && (M.paymentTermDays = e.defaultPaymentTermDays);
		}
		function Le(e) {
			M.customerId = null, M.recipientName = e.name, M.recipientEmail = e.email, e.phone && (M.recipientPhone = e.phone), M.recipientAddressAddition = "", M.recipientAddress = e.address, M.recipientPostalCode = e.postalCode, M.recipientCity = e.city, e.country && (M.recipientCountry = e.country);
		}
		function Re() {
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
				notes: E.value.map((e) => e.trim()).filter((e) => e !== ""),
				items: te.value.filter((e) => e.name.trim() !== "").map((e) => ({
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
		function Be(e = JSON.stringify(Re())) {
			ce = e;
		}
		function Ve() {
			return !P.value && ce !== null && JSON.stringify(Re()) !== ce;
		}
		function He(e) {
			return !Ve() || (ze = e.fullPath, A.value = "leave", !1);
		}
		function Ue(e) {
			A.value = null;
			let t = ze;
			ze = null, e && t !== null && (ce = null, a.push(t));
		}
		_r(He), vr(He);
		function B(e) {
			Ve() && e.preventDefault();
		}
		Ne(() => window.addEventListener("beforeunload", B)), kt(() => window.removeEventListener("beforeunload", B));
		async function We() {
			O.value = "", k.value = !0;
			try {
				let e = Re(), t = !C.value, n = C.value ? await f.value.update(C.value.id, e) : await f.value.create(e);
				return C.value = n, Be(JSON.stringify(e)), t && a.replace({
					name: x.value,
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
			e && (oe.value = d.value ? $f(e.id) : Tl(e.id), ae.value = !0);
		}
		function Ke(e) {
			e || (ae.value = !1, oe.value = "");
		}
		function qe() {
			A.value = "finalize";
		}
		function Je() {
			A.value = "delete";
		}
		function Ye() {
			A.value = "cancel";
		}
		function Xe() {
			A.value = "convert";
		}
		function Ze() {
			A.value = "revise";
		}
		let $e = L(() => d.value && C.value?.status === "committed" && !["converted", "superseded"].includes(C.value?.quoteStatus ?? "")), et = L(() => d.value && C.value?.status === "committed" && [
			"open",
			"expired",
			"accepted"
		].includes(C.value?.quoteStatus ?? "")), U = L(() => d.value && C.value?.status === "committed" && ["open", "expired"].includes(C.value?.quoteStatus ?? ""));
		function tt() {
			C.value && (d.value ? ep(C.value.id) : El(C.value.id));
		}
		async function nt() {
			A.value = null;
			let e = await We();
			if (e) {
				k.value = !0;
				try {
					let t = await f.value.commit(e.id);
					if (C.value = t, ne.value = "", d.value) ne.value = T("rechnungswerk", "Angebot festgeschrieben.");
					else {
						let e = t.datevMailSent;
						e === !0 ? ne.value = T("rechnungswerk", "Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.") : e === null && (O.value = T("rechnungswerk", "Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
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
				k.value = !0, O.value = "";
				try {
					C.value = await s.accept(C.value.id), ne.value = T("rechnungswerk", "Angebot als angenommen markiert.");
				} catch (e) {
					ft(e, T("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		async function it() {
			if (C.value) {
				k.value = !0, O.value = "";
				try {
					C.value = await s.reject(C.value.id), ne.value = T("rechnungswerk", "Angebot als abgelehnt markiert.");
				} catch (e) {
					ft(e, T("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		async function at() {
			if (A.value = null, C.value) {
				k.value = !0, O.value = "";
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
			if (A.value = null, C.value) {
				k.value = !0, O.value = "";
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
				re.value = !0, O.value = "";
				try {
					d.value ? (await tp(C.value.id, e), ie.value = !1, ne.value = T("rechnungswerk", "Angebot an {to} gesendet.", { to: e.to })) : (await Dl(C.value.id, e), ie.value = !1, ne.value = T("rechnungswerk", "Rechnung an {to} gesendet.", { to: e.to }));
				} catch (e) {
					ft(e, T("rechnungswerk", "Versand fehlgeschlagen"));
				} finally {
					re.value = !1;
				}
			}
		}
		async function ut() {
			if (A.value = null, !C.value) dt();
			else {
				k.value = !0;
				try {
					await f.value.remove(C.value.id), ce = null, dt();
				} catch (e) {
					ft(e, T("rechnungswerk", "Löschen fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		async function G() {
			if (A.value = null, C.value) {
				k.value = !0;
				try {
					let e = await o.cancel(C.value.id), t = e.datevMailSent;
					await Me(e.id), ne.value = "", t === !0 ? ne.value = T("rechnungswerk", "Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.") : t === null && (O.value = T("rechnungswerk", "Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
				} catch (e) {
					ft(e, T("rechnungswerk", "Stornieren fehlgeschlagen"));
				} finally {
					k.value = !1;
				}
			}
		}
		function dt() {
			a.push({ name: b.value });
		}
		function ft(e, t) {
			O.value = e.message ?? t, console.error("[rechnungswerk] editor:", e);
		}
		return (e, r) => {
			let i = Mt("tooltip");
			return Z(), V("div", gp, [
				z("div", _p, [J(t(ht), null, {
					default: _(() => [J(t(lt), {
						name: d.value ? t(T)("rechnungswerk", "Angebote") : t(T)("rechnungswerk", "Rechnungen"),
						to: { name: b.value }
					}, null, 8, ["name", "to"]), J(t(lt), { name: Oe.value }, null, 8, ["name"])]),
					_: 1
				}), C.value ? (Z(), V("span", vp, [
					z("span", yp, [(Z(), N(ve(ge(C.value.status)), {
						size: 18,
						class: H(["rw-sicon", `rw-sicon--${C.value.status}`])
					}, null, 8, ["class"])), K(" " + Y(ye.value), 1)]),
					!d.value && C.value.invoiceType !== "invoice" ? w((Z(), V("span", bp, [K(Y(be.value), 1)])), [[i, Ce.value]]) : n("", !0),
					d.value && C.value.relatedQuoteNumber ? (Z(), V("span", xp, Y(t(T)("rechnungswerk", "Revision von {number}", { number: C.value.relatedQuoteNumber })), 1)) : n("", !0),
					C.value.datevStatus && xe.value ? (Z(), V("span", {
						key: 2,
						class: "rw-status-tag",
						title: t(T)("rechnungswerk", "DATEV-Übergabe")
					}, [(Z(), N(ve(_e(C.value.datevStatus)), {
						size: 18,
						class: H(["rw-sicon", `rw-sicon--datev-${C.value.datevStatus}`])
					}, null, 8, ["class"])), K(" " + Y(xe.value), 1)], 8, Sp)) : n("", !0)
				])) : n("", !0)]),
				O.value ? (Z(), N(t($), {
					key: 0,
					type: "error",
					text: O.value
				}, null, 8, ["text"])) : n("", !0),
				ne.value ? (Z(), N(t($), {
					key: 1,
					type: "success",
					text: ne.value
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
				z("section", Cp, [
					z("h3", null, Y(d.value ? t(T)("rechnungswerk", "Angebotsdaten") : t(T)("rechnungswerk", "Rechnungsdaten")), 1),
					z("div", wp, [
						z("label", Tp, [z("span", null, Y(d.value ? t(T)("rechnungswerk", "Angebotsnummer") : t(T)("rechnungswerk", "Rechnungsnummer")), 1), z("input", {
							class: "rw-input",
							type: "text",
							readonly: "",
							value: C.value?.number ?? t(T)("rechnungswerk", "(wird vergeben)")
						}, null, 8, Ep)]),
						z("label", Dp, [z("span", null, Y(d.value ? t(T)("rechnungswerk", "Geplanter Leistungszeitraum (optional)") : t(T)("rechnungswerk", "Leistungsdatum /-zeitraum")), 1), w(z("input", {
							"onUpdate:modelValue": r[0] ||= (e) => M.performancePeriodStart = e,
							class: "rw-input",
							type: "date",
							readonly: P.value
						}, null, 8, Op), [[I, M.performancePeriodStart]])]),
						z("label", kp, [z("span", null, Y(t(T)("rechnungswerk", "bis (optional)")), 1), w(z("input", {
							"onUpdate:modelValue": r[1] ||= (e) => M.performancePeriodEnd = e,
							class: "rw-input",
							type: "date",
							readonly: P.value
						}, null, 8, Ap), [[I, M.performancePeriodEnd]])])
					]),
					z("p", jp, Y(d.value ? t(T)("rechnungswerk", "Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.") : t(T)("rechnungswerk", "Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.")), 1),
					z("details", {
						class: "more",
						open: se.value,
						onToggle: r[7] ||= (e) => se.value = e.target.open
					}, [
						z("summary", null, Y(d.value ? t(T)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)") : t(T)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)")), 1),
						z("div", Np, [
							z("label", Pp, [z("span", null, Y(t(T)("rechnungswerk", "Referenznummer")), 1), w(z("input", {
								"onUpdate:modelValue": r[2] ||= (e) => M.referenceNumber = e,
								class: "rw-input",
								type: "text",
								readonly: P.value
							}, null, 8, Fp), [[I, M.referenceNumber]])]),
							z("label", Ip, [z("span", null, Y(t(T)("rechnungswerk", "Bestellnummer")), 1), w(z("input", {
								"onUpdate:modelValue": r[3] ||= (e) => M.orderNumber = e,
								class: "rw-input",
								type: "text",
								readonly: P.value
							}, null, 8, Lp), [[I, M.orderNumber]])]),
							d.value ? (Z(), V("span", Bp)) : (Z(), V("label", Rp, [z("span", null, Y(t(T)("rechnungswerk", "Käuferreferenz / Leitweg-ID (BT-10)")), 1), w(z("input", {
								"onUpdate:modelValue": r[4] ||= (e) => M.buyerReference = e,
								class: "rw-input",
								type: "text",
								readonly: P.value,
								placeholder: t(T)("rechnungswerk", "nur für öffentliche Auftraggeber")
							}, null, 8, zp), [[I, M.buyerReference]])]))
						]),
						z("div", Vp, [
							z("label", Hp, [z("span", null, Y(t(T)("rechnungswerk", "Vertragsnummer (BT-12)")), 1), w(z("input", {
								"onUpdate:modelValue": r[5] ||= (e) => M.contractNumber = e,
								class: "rw-input",
								type: "text",
								readonly: P.value
							}, null, 8, Up), [[I, M.contractNumber]])]),
							z("label", Wp, [z("span", null, Y(t(T)("rechnungswerk", "Objekt-/Projektkennung (BT-18)")), 1), w(z("input", {
								"onUpdate:modelValue": r[6] ||= (e) => M.projectReference = e,
								class: "rw-input",
								type: "text",
								readonly: P.value
							}, null, 8, Gp), [[I, M.projectReference]])]),
							r[39] ||= z("span", {
								class: "rw-field",
								"aria-hidden": "true"
							}, null, -1)
						])
					], 40, Mp)
				]),
				z("section", Kp, [
					z("h3", null, Y(t(T)("rechnungswerk", "Empfänger")), 1),
					P.value ? n("", !0) : (Z(), V("div", qp, [z("label", Jp, [
						z("span", null, Y(t(T)("rechnungswerk", "Kunde übernehmen")), 1),
						J(Vd, { onSelect: Ie }),
						z("span", Yp, Y(t(T)("rechnungswerk", "Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.")), 1)
					])])),
					z("div", Xp, [z("label", Zp, [z("span", null, Y(t(T)("rechnungswerk", "Name")), 1), P.value ? (Z(), V("input", {
						key: 1,
						class: "rw-input",
						type: "text",
						readonly: "",
						value: M.recipientName
					}, null, 8, Qp)) : (Z(), N(wd, {
						key: 0,
						modelValue: M.recipientName,
						"onUpdate:modelValue": r[8] ||= (e) => M.recipientName = e,
						onSelect: Le
					}, null, 8, ["modelValue"]))]), z("label", $p, [z("span", null, Y(t(T)("rechnungswerk", "E-Mail")), 1), w(z("input", {
						"onUpdate:modelValue": r[9] ||= (e) => M.recipientEmail = e,
						class: "rw-input",
						type: "email",
						readonly: P.value
					}, null, 8, em), [[I, M.recipientEmail]])])]),
					z("div", tm, [z("label", nm, [
						z("span", null, Y(t(T)("rechnungswerk", "Adresszusatz")), 1),
						w(z("input", {
							"onUpdate:modelValue": r[10] ||= (e) => M.recipientAddressAddition = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, rm), [[I, M.recipientAddressAddition]]),
						z("span", im, Y(t(T)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					])]),
					z("div", am, [
						z("label", om, [z("span", null, Y(t(T)("rechnungswerk", "Straße")), 1), w(z("input", {
							"onUpdate:modelValue": r[11] ||= (e) => M.recipientAddress = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, sm), [[I, M.recipientAddress]])]),
						z("label", cm, [z("span", null, Y(t(T)("rechnungswerk", "PLZ")), 1), w(z("input", {
							"onUpdate:modelValue": r[12] ||= (e) => M.recipientPostalCode = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, lm), [[I, M.recipientPostalCode]])]),
						z("label", um, [z("span", null, Y(t(T)("rechnungswerk", "Ort")), 1), w(z("input", {
							"onUpdate:modelValue": r[13] ||= (e) => M.recipientCity = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, dm), [[I, M.recipientCity]])]),
						z("label", fm, [z("span", null, Y(t(T)("rechnungswerk", "Land")), 1), J(Ad, {
							modelValue: M.recipientCountry,
							"onUpdate:modelValue": r[14] ||= (e) => M.recipientCountry = e,
							disabled: P.value
						}, null, 8, ["modelValue", "disabled"])])
					]),
					z("div", pm, [
						z("label", mm, [z("span", null, Y(t(T)("rechnungswerk", "USt-IdNr. (optional)")), 1), w(z("input", {
							"onUpdate:modelValue": r[15] ||= (e) => M.recipientVatId = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, hm), [[I, M.recipientVatId]])]),
						z("label", gm, [z("span", null, Y(t(T)("rechnungswerk", "Ansprechpartner (optional)")), 1), w(z("input", {
							"onUpdate:modelValue": r[16] ||= (e) => M.recipientContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, _m), [[I, M.recipientContactPerson]])]),
						z("label", vm, [z("span", null, Y(t(T)("rechnungswerk", "Telefon (optional)")), 1), w(z("input", {
							"onUpdate:modelValue": r[17] ||= (e) => M.recipientPhone = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, ym), [[I, M.recipientPhone]])])
					])
				]),
				z("section", bm, [
					z("h3", null, Y(d.value ? t(T)("rechnungswerk", "Ansprechpartner (für dieses Angebot)") : t(T)("rechnungswerk", "Ansprechpartner (für diese Rechnung)")), 1),
					z("div", xm, [
						z("label", Sm, [z("span", null, Y(t(T)("rechnungswerk", "Name")), 1), w(z("input", {
							"onUpdate:modelValue": r[18] ||= (e) => M.sellerContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Cm), [[I, M.sellerContactPerson]])]),
						z("label", wm, [z("span", null, Y(t(T)("rechnungswerk", "Telefon")), 1), w(z("input", {
							"onUpdate:modelValue": r[19] ||= (e) => M.sellerContactPhone = e,
							class: "rw-input",
							type: "text",
							readonly: P.value
						}, null, 8, Tm), [[I, M.sellerContactPhone]])]),
						z("label", Em, [z("span", null, Y(t(T)("rechnungswerk", "E-Mail")), 1), w(z("input", {
							"onUpdate:modelValue": r[20] ||= (e) => M.sellerContactEmail = e,
							class: "rw-input",
							type: "email",
							readonly: P.value
						}, null, 8, Dm), [[I, M.sellerContactEmail]])])
					]),
					z("p", Om, Y(d.value ? t(T)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.") : t(T)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.")), 1)
				]),
				z("section", km, [z("div", Am, [z("h3", null, Y(t(T)("rechnungswerk", "Anrede & Einleitung")), 1), !P.value && h.value.length > 0 ? (Z(), N(t(m), {
					key: 0,
					menuName: t(T)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: _(() => [J(so, { size: 18 })]),
					default: _(() => [(Z(!0), V(D, null, X(h.value, (e) => (Z(), N(t(ue), {
						key: e.id,
						onClick: (t) => ee(e)
					}, {
						default: _(() => [K(Y(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : n("", !0)]), z("label", jm, [z("span", null, Y(t(T)("rechnungswerk", "Anrede & Einleitung")), 1), w(z("textarea", {
					"onUpdate:modelValue": r[21] ||= (e) => M.greeting = e,
					class: "rw-input",
					rows: "3",
					readonly: P.value,
					placeholder: t(T)("rechnungswerk", "Anrede und Einleitung – Vorgabe aus den Textbausteinen")
				}, null, 8, Mm), [[I, M.greeting]])])]),
				z("section", Nm, [z("h3", null, Y(t(T)("rechnungswerk", "Positionen")), 1), J(jf, {
					items: te.value,
					"onUpdate:items": r[22] ||= (e) => te.value = e,
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
				z("section", Pm, [
					z("h3", null, Y(t(T)("rechnungswerk", "Steuer & Summen")), 1),
					z("div", Fm, [z("label", Im, [z("span", null, Y(t(T)("rechnungswerk", "Steuerfall")), 1), w(z("select", {
						"onUpdate:modelValue": r[23] ||= (e) => M.specialTaxCase = e,
						class: "rw-input",
						disabled: P.value
					}, [
						z("option", Rm, Y(t(T)("rechnungswerk", "Regelbesteuerung")), 1),
						z("option", zm, Y(t(T)("rechnungswerk", "Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)")), 1),
						z("option", Bm, Y(t(T)("rechnungswerk", "Innergemeinschaftliche Lieferung (steuerfrei)")), 1),
						z("option", Vm, Y(t(T)("rechnungswerk", "Ausfuhrlieferung Drittland (steuerfrei)")), 1)
					], 8, Lm), [[Se, M.specialTaxCase]])]), r[40] ||= z("span", {
						class: "rw-field",
						"aria-hidden": "true"
					}, null, -1)]),
					M.specialTaxCase === "" ? n("", !0) : (Z(), N(t($), {
						key: 0,
						type: "info",
						text: t(T)("rechnungswerk", "Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.")
					}, null, 8, ["text"])),
					z("div", Hm, [z("div", Um, [
						z("div", Wm, [z("span", null, Y(t(T)("rechnungswerk", "Zwischensumme (netto)")), 1), z("strong", null, Y(t(nu)(ke.value.subtotalCents)), 1)]),
						(Z(!0), V(D, null, X(ke.value.taxBreakdown, (e) => (Z(), V("div", {
							key: e.rateBp,
							class: "rw-kpi-row rw-kpi-row--muted"
						}, [z("span", null, Y(t(T)("rechnungswerk", "USt {rate}", { rate: t(ru)(e.rateBp) })) + " (" + Y(t(nu)(e.netCents)) + ")", 1), z("span", null, Y(t(nu)(e.taxCents)), 1)]))), 128)),
						z("div", Gm, [z("span", null, Y(t(T)("rechnungswerk", "Gesamt (brutto)")), 1), z("strong", null, Y(t(nu)(ke.value.totalCents)), 1)])
					])])
				]),
				d.value ? (Z(), V("section", eh, [
					z("h3", null, Y(t(T)("rechnungswerk", "Gültigkeit")), 1),
					z("div", th, [z("label", nh, [z("span", null, Y(t(T)("rechnungswerk", "Gültig bis")), 1), w(z("input", {
						"onUpdate:modelValue": r[26] ||= (e) => M.validUntil = e,
						class: "rw-input",
						type: "date",
						readonly: P.value
					}, null, 8, rh), [[I, M.validUntil]])]), z("label", ih, [z("span", ah, [w(z("input", {
						"onUpdate:modelValue": r[27] ||= (e) => M.offerFreeform = e,
						type: "checkbox",
						disabled: P.value
					}, null, 8, oh), [[S, M.offerFreeform]]), K(" " + Y(t(T)("rechnungswerk", "Freibleibendes Angebot (unverbindlich)")), 1)])])]),
					z("p", sh, Y(t(T)("rechnungswerk", "„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.")), 1)
				])) : (Z(), V("section", Km, [z("h3", null, Y(t(T)("rechnungswerk", "Zahlungsbedingungen")), 1), z("div", qm, [
					z("label", Jm, [z("span", null, Y(t(T)("rechnungswerk", "Zahlungsziel (Tage)")), 1), w(z("input", {
						"onUpdate:modelValue": r[24] ||= (e) => M.paymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						readonly: P.value
					}, null, 8, Ym), [[I, M.paymentTermDays]])]),
					z("label", Xm, [z("span", null, Y(t(T)("rechnungswerk", "Fällig am")), 1), z("input", {
						class: "rw-input",
						type: "text",
						readonly: "",
						value: me.value || "—"
					}, null, 8, Zm)]),
					z("label", Qm, [z("span", null, Y(t(T)("rechnungswerk", "Skonto")), 1), w(z("input", {
						"onUpdate:modelValue": r[25] ||= (e) => M.discountTerms = e,
						class: "rw-input",
						type: "text",
						readonly: P.value,
						placeholder: t(T)("rechnungswerk", "z. B. 2 % bei Zahlung bis\xA0…")
					}, null, 8, $m), [[I, M.discountTerms]])])
				])])),
				z("section", ch, [z("div", lh, [z("h3", null, Y(t(T)("rechnungswerk", "Schlusstext")), 1), !P.value && g.value.length > 0 ? (Z(), N(t(m), {
					key: 0,
					menuName: t(T)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: _(() => [J(so, { size: 18 })]),
					default: _(() => [(Z(!0), V(D, null, X(g.value, (e) => (Z(), N(t(ue), {
						key: e.id,
						onClick: (t) => y(e)
					}, {
						default: _(() => [K(Y(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : n("", !0)]), z("label", uh, [z("span", null, Y(t(T)("rechnungswerk", "Schlusstext / Anmerkungen")), 1), w(z("textarea", {
					"onUpdate:modelValue": r[28] ||= (e) => M.extraText = e,
					class: "rw-input",
					rows: "3",
					readonly: P.value,
					placeholder: t(T)("rechnungswerk", "Schlusstext – Vorgabe aus den Textbausteinen")
				}, null, 8, dh), [[I, M.extraText]])])]),
				!P.value || E.value.length > 0 ? (Z(), V("section", fh, [
					z("h3", null, Y(d.value ? t(T)("rechnungswerk", "Notizen / Hinweise auf dem Angebot") : t(T)("rechnungswerk", "Notizen / Hinweise auf der Rechnung")), 1),
					(Z(!0), V(D, null, X(E.value, (e, r) => (Z(), V("div", {
						key: r,
						class: "rw-note-row"
					}, [w(z("input", {
						"onUpdate:modelValue": (e) => E.value[r] = e,
						class: "rw-input",
						type: "text",
						readonly: P.value,
						"aria-label": t(T)("rechnungswerk", "Notiz {index}", { index: r + 1 })
					}, null, 8, ph), [[I, E.value[r]]]), P.value ? n("", !0) : (Z(), N(t(W), {
						key: 0,
						variant: "tertiary",
						"aria-label": t(T)("rechnungswerk", "Notiz entfernen"),
						onClick: (e) => Fe(r)
					}, {
						icon: _(() => [J(Ku, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"]))]))), 128)),
					P.value ? n("", !0) : (Z(), N(t(W), {
						key: 0,
						variant: "tertiary",
						onClick: Pe
					}, {
						icon: _(() => [J(tc, { size: 20 })]),
						default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Notiz hinzufügen")), 1)]),
						_: 1
					})),
					z("p", mh, Y(d.value ? t(T)("rechnungswerk", "Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.") : t(T)("rechnungswerk", "Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.")), 1)
				])) : n("", !0),
				z("div", hh, [P.value ? C.value ? (Z(), V(D, { key: 1 }, [
					J(t(W), { onClick: tt }, {
						icon: _(() => [J(sc, { size: 20 })]),
						default: _(() => [K(" " + Y(t(T)("rechnungswerk", "PDF herunterladen")), 1)]),
						_: 1
					}),
					J(t(W), {
						variant: d.value ? "secondary" : "primary",
						disabled: re.value,
						onClick: r[30] ||= (e) => ie.value = !0
					}, {
						icon: _(() => [J(Qu, { size: 20 })]),
						default: _(() => [K(" " + Y(t(T)("rechnungswerk", "An Kunde senden")), 1)]),
						_: 1
					}, 8, ["variant", "disabled"]),
					!d.value && C.value.status === "committed" ? (Z(), N(t(W), {
						key: 0,
						variant: "error",
						disabled: k.value,
						onClick: Ye
					}, {
						default: _(() => [K(Y(t(T)("rechnungswerk", "Stornieren")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0),
					d.value ? (Z(), V(D, { key: 1 }, [
						U.value ? (Z(), N(t(W), {
							key: 0,
							disabled: k.value,
							onClick: rt
						}, {
							icon: _(() => [J(sl, { size: 20 })]),
							default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Annehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0),
						U.value ? (Z(), N(t(W), {
							key: 1,
							disabled: k.value,
							onClick: it
						}, {
							icon: _(() => [J(pl, { size: 20 })]),
							default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Ablehnen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0),
						$e.value ? (Z(), N(t(W), {
							key: 2,
							disabled: k.value,
							onClick: Ze
						}, {
							icon: _(() => [J(gd, { size: 20 })]),
							default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Revidieren")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0),
						et.value ? (Z(), N(t(W), {
							key: 3,
							variant: "primary",
							disabled: k.value,
							onClick: Xe
						}, {
							icon: _(() => [J(ud, { size: 20 })]),
							default: _(() => [K(" " + Y(t(T)("rechnungswerk", "In Rechnung übernehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : n("", !0)
					], 64)) : n("", !0)
				], 64)) : n("", !0) : (Z(), V(D, { key: 0 }, [
					J(t(W), {
						disabled: k.value,
						onClick: r[29] ||= (e) => We()
					}, {
						default: _(() => [K(Y(t(T)("rechnungswerk", "Speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					J(t(W), {
						disabled: k.value,
						onClick: Ge
					}, {
						icon: _(() => [J(id, { size: 20 })]),
						default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Vorschau")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					J(t(W), {
						variant: "primary",
						disabled: k.value,
						onClick: qe
					}, {
						icon: _(() => [J(bo, { size: 20 })]),
						default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Festschreiben")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					C.value ? (Z(), N(t(W), {
						key: 0,
						variant: "error",
						disabled: k.value,
						onClick: Je
					}, {
						default: _(() => [K(Y(t(T)("rechnungswerk", "Löschen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0)
				], 64))]),
				J(Pf, {
					open: A.value === "finalize",
					name: d.value ? t(T)("rechnungswerk", "Angebot festschreiben") : t(T)("rechnungswerk", "Rechnung festschreiben"),
					message: Te.value,
					confirmLabel: t(T)("rechnungswerk", "Festschreiben"),
					onClose: r[31] ||= (e) => A.value = null,
					onConfirm: nt
				}, {
					default: _(() => [we.value ? (Z(), N(t($), {
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
				J(Pf, {
					open: A.value === "delete",
					name: d.value ? t(T)("rechnungswerk", "Angebot löschen") : t(T)("rechnungswerk", "Entwurf löschen"),
					message: d.value ? t(T)("rechnungswerk", "Diesen Angebots-Entwurf wirklich löschen?") : t(T)("rechnungswerk", "Diesen Entwurf wirklich löschen?"),
					confirmLabel: t(T)("rechnungswerk", "Löschen"),
					destructive: "",
					onClose: r[32] ||= (e) => A.value = null,
					onConfirm: ut
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Pf, {
					open: A.value === "cancel",
					name: t(T)("rechnungswerk", "Rechnung stornieren"),
					message: t(T)("rechnungswerk", "Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?"),
					confirmLabel: t(T)("rechnungswerk", "Stornorechnung erstellen"),
					destructive: "",
					onClose: r[33] ||= (e) => A.value = null,
					onConfirm: G
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Pf, {
					open: A.value === "convert",
					name: t(T)("rechnungswerk", "In Rechnung übernehmen"),
					message: t(T)("rechnungswerk", "Aus diesem Angebot wird ein neuer Rechnungs-Entwurf mit denselben Positionen erstellt. Das Angebot wird als „übernommen“ markiert. Fortfahren?"),
					confirmLabel: t(T)("rechnungswerk", "Rechnung erstellen"),
					onClose: r[34] ||= (e) => A.value = null,
					onConfirm: at
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Pf, {
					open: A.value === "revise",
					name: t(T)("rechnungswerk", "Angebot revidieren"),
					message: t(T)("rechnungswerk", "Es wird eine überarbeitbare Kopie als neue Angebots-Revision erstellt. Beim Festschreiben erhält sie eine Revisionsnummer (z. B. AN-…-1) und dieses Angebot wird als „revidiert“ markiert. Fortfahren?"),
					confirmLabel: t(T)("rechnungswerk", "Revision erstellen"),
					onClose: r[35] ||= (e) => A.value = null,
					onConfirm: st
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Pf, {
					open: A.value === "leave",
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
				J(Vf, {
					open: ie.value,
					invoice: C.value,
					defaultBody: Ee.value,
					saving: re.value,
					kind: d.value ? "quote" : "invoice",
					onClose: r[38] ||= (e) => ie.value = !1,
					onSend: ct
				}, null, 8, [
					"open",
					"invoice",
					"defaultBody",
					"saving",
					"kind"
				]),
				J(t(Qe), {
					open: ae.value,
					name: t(T)("rechnungswerk", "Vorschau (Entwurf)"),
					size: "large",
					"onUpdate:open": Ke
				}, {
					default: _(() => [oe.value ? (Z(), V("iframe", {
						key: 0,
						src: oe.value,
						class: "preview-frame",
						title: t(T)("rechnungswerk", "Vorschau (Entwurf)")
					}, null, 8, gh)) : n("", !0)]),
					_: 1
				}, 8, ["open", "name"])
			]);
		};
	}
}), [["__scopeId", "data-v-54fc456f"]]), vh = {
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
}, yh = ["aria-hidden", "aria-label"], bh = [
	"fill",
	"width",
	"height"
], xh = { key: 0 };
function Sh(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon alert-circle-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", xh, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" }, null, -1)], 8, bh))], 16, yh);
}
var Ch = /*#__PURE__*/ Q(vh, [["render", Sh]]), wh = { class: "rw-view" }, Th = { class: "rw-view__head" }, Eh = { key: 2 }, Dh = { class: "rw-filterbar" }, Oh = ["onClick"], kh = { class: "rw-chip__n" }, Ah = { class: "rw-table-wrap" }, jh = { class: "rw-table" }, Mh = { class: "num" }, Nh = ["onClick"], Ph = { class: "rw-status-cell" }, Fh = { class: "rw-qstatus-text" }, Ih = { class: "rw-nowrap" }, Lh = { class: "num" }, Rh = { class: "rw-col-actions" }, zh = { class: "rw-actions" }, Bh = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "QuotesView",
	setup(e) {
		let r = ot(), i = np(), a = v(""), o = [
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
		], s = v("all"), c = (e) => e.quoteStatus === "open" || e.quoteStatus === "expired", l = L(() => {
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
			draft: yc,
			open: Lc,
			expired: Ch,
			accepted: jc,
			rejected: Tc,
			converted: ud,
			superseded: gd
		}, p = (e) => e ? f[e] ?? yc : yc, m = (e) => e ? T("rechnungswerk", Kl[e] ?? e) : "";
		function h(e) {
			return e ? (e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e)).toLocaleDateString() : "—";
		}
		Ne(() => {
			i.fetchAll().catch((e) => {
				a.value = e.message ?? T("rechnungswerk", "Laden fehlgeschlagen");
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
			ep(e);
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
				a.value = e.message ?? T("rechnungswerk", "Übernahme fehlgeschlagen");
			}
		}
		return (e, r) => (Z(), V("div", wh, [
			z("div", Th, [z("h2", null, Y(t(T)("rechnungswerk", "Angebote")), 1), J(t(W), {
				variant: "primary",
				onClick: g
			}, {
				icon: _(() => [J(tc, { size: 20 })]),
				default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Neues Angebot")), 1)]),
				_: 1
			})]),
			a.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: a.value
			}, null, 8, ["text"])) : n("", !0),
			!t(i).loading && t(i).quotes.length === 0 ? (Z(), N(t(Le), {
				key: 1,
				name: t(T)("rechnungswerk", "Noch keine Angebote"),
				description: t(T)("rechnungswerk", "Lege dein erstes Angebot an.")
			}, {
				icon: _(() => [J(La, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(i).quotes.length > 0 ? (Z(), V("div", Eh, [z("div", Dh, [(Z(), V(D, null, X(o, (e) => z("button", {
				key: e.key,
				class: H(["rw-chip", { "rw-chip--active": s.value === e.key }]),
				onClick: (t) => s.value = e.key
			}, [K(Y(t(T)("rechnungswerk", e.label)) + " ", 1), z("span", kh, Y(l.value[e.key]), 1)], 10, Oh)), 64))]), z("div", Ah, [z("table", jh, [z("thead", null, [z("tr", null, [
				z("th", null, Y(t(T)("rechnungswerk", "Status")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Nummer")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Empfänger")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Datum")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Gültig bis")), 1),
				z("th", Mh, Y(t(T)("rechnungswerk", "Brutto")), 1),
				r[0] ||= z("th", { class: "rw-col-actions" }, null, -1)
			])]), z("tbody", null, [(Z(!0), V(D, null, X(u.value, (e) => (Z(), V("tr", {
				key: e.id,
				class: H(["rw-row-clickable", { "rw-row--overdue": e.quoteStatus === "expired" }]),
				onClick: (t) => ee(e.id)
			}, [
				z("td", null, [z("span", Ph, [(Z(), N(ve(p(e.quoteStatus)), {
					size: 20,
					class: H(["rw-sicon", `rw-qsicon--${e.quoteStatus}`]),
					title: m(e.quoteStatus)
				}, null, 8, ["class", "title"])), z("span", Fh, Y(m(e.quoteStatus)), 1)])]),
				z("td", Ih, Y(e.number ?? t(T)("rechnungswerk", "(Entwurf)")), 1),
				z("td", null, Y(e.recipientName ?? "—"), 1),
				z("td", null, Y(h(e.issueDate ?? e.createdAt)), 1),
				z("td", null, [z("span", { class: H({ "rw-amt-overdue": e.quoteStatus === "expired" }) }, Y(h(e.validUntil)), 3)]),
				z("td", Lh, Y(t(nu)(e.totalCents)), 1),
				z("td", Rh, [z("div", zh, [d(e) ? (Z(), N(t(W), {
					key: 0,
					variant: "tertiary",
					"aria-label": t(T)("rechnungswerk", "In Rechnung übernehmen"),
					title: t(T)("rechnungswerk", "In Rechnung übernehmen"),
					onClick: q((t) => b(e.id), ["stop"])
				}, {
					icon: _(() => [J(ud, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])) : n("", !0), e.status === "draft" ? n("", !0) : (Z(), N(t(W), {
					key: 1,
					variant: "tertiary",
					"aria-label": t(T)("rechnungswerk", "PDF herunterladen"),
					title: t(T)("rechnungswerk", "PDF herunterladen"),
					onClick: q((t) => y(e.id), ["stop"])
				}, {
					icon: _(() => [J(sc, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				]))])])
			], 10, Nh))), 128))])])])])) : n("", !0)
		]));
	}
}), [["__scopeId", "data-v-c26e3d67"]]), Vh = { class: "product-modal" }, Hh = { class: "field" }, Uh = { class: "field" }, Wh = { class: "field-row" }, Gh = { class: "field" }, Kh = ["value"], qh = { class: "field" }, Jh = { class: "field" }, Yh = ["value"], Xh = { class: "field" }, Zh = ["placeholder"], Qh = { class: "hint" }, $h = { class: "actions" }, eg = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "ProductEditModal",
	props: {
		open: { type: Boolean },
		product: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: r }) {
		let i = e, a = r, o = v(null), s = De({
			name: "",
			description: "",
			defaultUnitCode: "C62",
			defaultUnitLabel: "",
			defaultTaxRateBp: 1900
		}), c = v("0,00");
		function l() {
			Xl(c.value) !== null && (c.value = $l(eu(c.value)));
		}
		let u = L(() => i.product ? T("rechnungswerk", "Produkt bearbeiten") : T("rechnungswerk", "Produkt anlegen")), d = L(() => s.name.trim() !== "");
		j(() => i.open, (e) => {
			if (!e) return;
			let t = i.product;
			s.name = t?.name ?? "", s.description = t?.description ?? "", s.defaultUnitCode = t?.defaultUnitCode ?? "C62", s.defaultUnitLabel = t?.defaultUnitLabel ?? "", s.defaultTaxRateBp = t?.defaultTaxRateBp ?? 1900, c.value = $l(t?.defaultPriceE4 ?? 0), qe(() => o.value?.focus());
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
		return (r, i) => e.open ? (Z(), N(t(Me), {
			key: 0,
			name: u.value,
			onKeydown: i[7] ||= k((e) => t(vs)(e, () => r.$emit("close")), ["esc"]),
			onClose: i[8] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [z("div", Vh, [
				z("h2", null, Y(u.value), 1),
				z("label", Hh, [z("span", null, Y(t(T)("rechnungswerk", "Name")) + " *", 1), w(z("input", {
					ref_key: "nameInput",
					ref: o,
					"onUpdate:modelValue": i[0] ||= (e) => s.name = e,
					class: "input",
					type: "text"
				}, null, 512), [[I, s.name]])]),
				z("label", Uh, [z("span", null, Y(t(T)("rechnungswerk", "Beschreibung")), 1), w(z("textarea", {
					"onUpdate:modelValue": i[1] ||= (e) => s.description = e,
					class: "input",
					rows: "2"
				}, null, 512), [[I, s.description]])]),
				z("div", Wh, [
					z("label", Gh, [z("span", null, Y(t(T)("rechnungswerk", "Einheit")), 1), w(z("select", {
						"onUpdate:modelValue": i[2] ||= (e) => s.defaultUnitCode = e,
						class: "input"
					}, [(Z(!0), V(D, null, X(t(Rl), (e) => (Z(), V("option", {
						key: e,
						value: e
					}, Y(t(T)("rechnungswerk", t(zl)[e])), 9, Kh))), 128))], 512), [[Se, s.defaultUnitCode]])]),
					z("label", qh, [z("span", null, Y(t(T)("rechnungswerk", "Standard-Preis (€)")), 1), w(z("input", {
						"onUpdate:modelValue": i[3] ||= (e) => c.value = e,
						class: "input",
						type: "text",
						inputmode: "decimal",
						onBlur: l
					}, null, 544), [[I, c.value]])]),
					z("label", Jh, [z("span", null, Y(t(T)("rechnungswerk", "USt-Satz")), 1), w(z("select", {
						"onUpdate:modelValue": i[4] ||= (e) => s.defaultTaxRateBp = e,
						class: "input"
					}, [(Z(!0), V(D, null, X(t(Bl), (e) => (Z(), V("option", {
						key: e,
						value: e
					}, Y(t(ru)(e)), 9, Yh))), 128))], 512), [[
						Se,
						s.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])])
				]),
				z("label", Xh, [
					z("span", null, Y(t(T)("rechnungswerk", "Eigene Einheit (optional)")), 1),
					w(z("input", {
						"onUpdate:modelValue": i[5] ||= (e) => s.defaultUnitLabel = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: t(T)("rechnungswerk", "z. B. Personen, Sitzung")
					}, null, 8, Zh), [[I, s.defaultUnitLabel]]),
					z("span", Qh, Y(t(T)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF. In der E-Rechnung wird die Einheit generisch (Stück) abgebildet, damit sie gültig bleibt.")), 1)
				]),
				z("div", $h, [J(t(W), { onClick: i[6] ||= (e) => r.$emit("close") }, {
					default: _(() => [K(Y(t(T)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(t(W), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					default: _(() => [K(Y(t(T)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-e77e93c0"]]), tg = { class: "rw-view" }, ng = { class: "rw-view__head" }, rg = {
	key: 2,
	class: "rw-table-wrap"
}, ig = { class: "rw-table" }, ag = { class: "num" }, og = { class: "num" }, sg = ["onClick"], cg = {
	key: 0,
	class: "rw-muted"
}, lg = { class: "num" }, ug = { class: "num" }, dg = { class: "rw-col-actions" }, fg = { class: "rw-actions" }, pg = /* @__PURE__ */ U({
	__name: "ProductsView",
	setup(e) {
		let r = sp(), i = v(!1), a = v(null), o = v(null), s = v(""), c = (e) => zl[e] ?? e;
		function l(e, t) {
			let n = e.message ?? t;
			s.value = n, console.error("[rechnungswerk] products:", e);
		}
		Ne(() => {
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
		return (e, l) => (Z(), V("div", tg, [
			z("div", ng, [z("h2", null, Y(t(T)("rechnungswerk", "Produkte")), 1), J(t(W), {
				variant: "primary",
				onClick: u
			}, {
				icon: _(() => [J(tc, { size: 20 })]),
				default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Produkt anlegen")), 1)]),
				_: 1
			})]),
			s.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: s.value
			}, null, 8, ["text"])) : n("", !0),
			!t(r).loading && t(r).products.length === 0 ? (Z(), N(t(Le), {
				key: 1,
				name: t(T)("rechnungswerk", "Noch keine Produkte"),
				description: t(T)("rechnungswerk", "Pflege wiederkehrende Leistungen, um sie schnell in Rechnungen zu übernehmen.")
			}, {
				icon: _(() => [J(to, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(r).products.length > 0 ? (Z(), V("div", rg, [z("table", ig, [z("thead", null, [z("tr", null, [
				z("th", null, Y(t(T)("rechnungswerk", "Name")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Einheit")), 1),
				z("th", ag, Y(t(T)("rechnungswerk", "Preis")), 1),
				z("th", og, Y(t(T)("rechnungswerk", "USt")), 1),
				l[2] ||= z("th", { class: "num" }, null, -1)
			])]), z("tbody", null, [(Z(!0), V(D, null, X(t(r).products, (e) => (Z(), V("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => d(e)
			}, [
				z("td", null, [K(Y(e.name) + " ", 1), e.description ? (Z(), V("div", cg, Y(e.description), 1)) : n("", !0)]),
				z("td", null, Y(e.defaultUnitLabel || t(T)("rechnungswerk", c(e.defaultUnitCode))), 1),
				z("td", lg, Y(t(tu)(e.defaultPriceE4)), 1),
				z("td", ug, Y(t(ru)(e.defaultTaxRateBp)), 1),
				z("td", dg, [z("div", fg, [J(t(W), {
					variant: "tertiary",
					"aria-label": t(T)("rechnungswerk", "Löschen"),
					title: t(T)("rechnungswerk", "Löschen"),
					onClick: q((t) => p(e), ["stop"])
				}, {
					icon: _(() => [J(Ku, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, sg))), 128))])])])) : n("", !0),
			J(eg, {
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
			J(Pf, {
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
}), mg = {
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
}, hg = ["aria-hidden", "aria-label"], gg = [
	"fill",
	"width",
	"height"
], _g = { key: 0 };
function vg(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon star-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", _g, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, null, -1)], 8, gg))], 16, hg);
}
var yg = /*#__PURE__*/ Q(mg, [["render", vg]]), bg = { class: "snippet-modal" }, xg = { class: "field" }, Sg = ["placeholder"], Cg = { class: "field-row" }, wg = { class: "field" }, Tg = ["value"], Eg = { class: "field" }, Dg = ["value"], Og = { class: "field" }, kg = { class: "hint" }, Ag = { class: "actions" }, jg = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "TextSnippetEditModal",
	props: {
		open: { type: Boolean },
		snippet: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: r }) {
		let i = ["invoice", "quote"], a = ["opening", "closing"], o = e, s = r, c = v(null), l = De({
			label: "",
			docType: "invoice",
			slot: "opening",
			content: "",
			isDefault: !1
		}), u = L(() => o.snippet ? T("rechnungswerk", "Textbaustein bearbeiten") : T("rechnungswerk", "Textbaustein anlegen")), d = L(() => l.label.trim() !== "");
		j(() => o.open, (e) => {
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
		return (r, o) => e.open ? (Z(), N(t(Me), {
			key: 0,
			name: u.value,
			onKeydown: o[6] ||= k((e) => t(vs)(e, () => r.$emit("close")), ["esc"]),
			onClose: o[7] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [z("div", bg, [
				z("h2", null, Y(u.value), 1),
				z("label", xg, [z("span", null, Y(t(T)("rechnungswerk", "Name")) + " *", 1), w(z("input", {
					ref_key: "nameInput",
					ref: c,
					"onUpdate:modelValue": o[0] ||= (e) => l.label = e,
					class: "input",
					type: "text",
					placeholder: t(T)("rechnungswerk", "z. B. Neukunde, Mahnfreundlich")
				}, null, 8, Sg), [[I, l.label]])]),
				z("div", Cg, [z("label", wg, [z("span", null, Y(t(T)("rechnungswerk", "Dokument")), 1), w(z("select", {
					"onUpdate:modelValue": o[1] ||= (e) => l.docType = e,
					class: "input"
				}, [(Z(), V(D, null, X(i, (e) => z("option", {
					key: e,
					value: e
				}, Y(t(T)("rechnungswerk", t(Hl)[e])), 9, Tg)), 64))], 512), [[Se, l.docType]])]), z("label", Eg, [z("span", null, Y(t(T)("rechnungswerk", "Textbereich")), 1), w(z("select", {
					"onUpdate:modelValue": o[2] ||= (e) => l.slot = e,
					class: "input"
				}, [(Z(), V(D, null, X(a, (e) => z("option", {
					key: e,
					value: e
				}, Y(t(T)("rechnungswerk", t(Ul)[e])), 9, Dg)), 64))], 512), [[Se, l.slot]])])]),
				z("label", Og, [z("span", null, Y(t(T)("rechnungswerk", "Text")), 1), w(z("textarea", {
					"onUpdate:modelValue": o[3] ||= (e) => l.content = e,
					class: "input",
					rows: "6"
				}, null, 512), [[I, l.content]])]),
				J(t(Ke), {
					modelValue: l.isDefault,
					"onUpdate:modelValue": o[4] ||= (e) => l.isDefault = e
				}, {
					default: _(() => [K(Y(t(T)("rechnungswerk", "Als Standard für neue Dokumente verwenden")), 1)]),
					_: 1
				}, 8, ["modelValue"]),
				z("p", kg, Y(t(T)("rechnungswerk", "Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.")), 1),
				z("div", Ag, [J(t(W), { onClick: o[5] ||= (e) => r.$emit("close") }, {
					default: _(() => [K(Y(t(T)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(t(W), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: f
				}, {
					default: _(() => [K(Y(t(T)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-b60fbea6"]]), Mg = { class: "rw-view" }, Ng = { class: "rw-view__head" }, Pg = { class: "rw-muted rw-intro" }, Fg = {
	key: 2,
	class: "rw-snippet-groups"
}, Ig = { class: "rw-snippet-group__head" }, Lg = { class: "rw-table-wrap" }, Rg = { class: "rw-table" }, zg = ["onClick"], Bg = {
	key: 0,
	class: "rw-muted rw-snippet-content"
}, Vg = { class: "rw-snippet-actions" }, Hg = { class: "rw-actions" }, Ug = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "TextSnippetsView",
	setup(e) {
		let r = pp(), i = ["invoice", "quote"], a = ["opening", "closing"], o = L(() => {
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
		Ne(() => {
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
		async function ee() {
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
		return (e, i) => (Z(), V("div", Mg, [
			z("div", Ng, [z("h2", null, Y(t(T)("rechnungswerk", "Textbausteine")), 1), J(t(W), {
				variant: "primary",
				onClick: f
			}, {
				icon: _(() => [J(tc, { size: 20 })]),
				default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Textbaustein anlegen")), 1)]),
				_: 1
			})]),
			z("p", Pg, Y(t(T)("rechnungswerk", "Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.")), 1),
			u.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : n("", !0),
			!t(r).loading && t(r).snippets.length === 0 ? (Z(), N(t(Le), {
				key: 1,
				name: t(T)("rechnungswerk", "Noch keine Textbausteine"),
				description: t(T)("rechnungswerk", "Lege wiederkehrende Einleitungs- und Schlusstexte an, um sie schnell in Dokumente zu übernehmen.")
			}, {
				icon: _(() => [J(so, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(r).snippets.length > 0 ? (Z(), V("div", Fg, [(Z(!0), V(D, null, X(o.value, (e) => (Z(), V("section", {
				key: e.key,
				class: "rw-snippet-group"
			}, [z("h3", Ig, [
				K(Y(t(T)("rechnungswerk", t(Hl)[e.docType])) + " ", 1),
				i[2] ||= z("span", { class: "rw-snippet-group__sep" }, "–", -1),
				K(" " + Y(t(T)("rechnungswerk", t(Ul)[e.slot])), 1)
			]), z("div", Lg, [z("table", Rg, [z("tbody", null, [(Z(!0), V(D, null, X(e.items, (e) => (Z(), V("tr", {
				key: e.id,
				class: "rw-row-clickable rw-snippet-row",
				onClick: (t) => p(e)
			}, [z("td", null, [z("strong", null, Y(e.label), 1), e.content ? (Z(), V("div", Bg, Y(e.content), 1)) : n("", !0)]), z("td", Vg, [z("div", Hg, [J(t(W), {
				variant: "tertiary",
				"aria-label": e.isDefault ? t(T)("rechnungswerk", "Standard-Vorlage") : t(T)("rechnungswerk", "Als Standard festlegen"),
				title: e.isDefault ? t(T)("rechnungswerk", "Standard-Vorlage") : t(T)("rechnungswerk", "Als Standard festlegen"),
				onClick: q((t) => m(e), ["stop"])
			}, {
				icon: _(() => [e.isDefault ? (Z(), N(ns, {
					key: 0,
					size: 20,
					class: "rw-star rw-star--active"
				})) : (Z(), N(yg, {
					key: 1,
					size: 20,
					class: "rw-star"
				}))]),
				_: 2
			}, 1032, [
				"aria-label",
				"title",
				"onClick"
			]), J(t(W), {
				variant: "tertiary",
				"aria-label": t(T)("rechnungswerk", "Löschen"),
				title: t(T)("rechnungswerk", "Löschen"),
				onClick: q((t) => g(e), ["stop"])
			}, {
				icon: _(() => [J(Ku, { size: 20 })]),
				_: 1
			}, 8, [
				"aria-label",
				"title",
				"onClick"
			])])])], 8, zg))), 128))])])])]))), 128))])) : n("", !0),
			J(jg, {
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
			J(Pf, {
				open: l.value !== null,
				name: t(T)("rechnungswerk", "Textbaustein löschen"),
				message: l.value ? t(T)("rechnungswerk", "„{name}“ wirklich löschen?", { name: l.value.label }) : "",
				confirmLabel: t(T)("rechnungswerk", "Löschen"),
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
}), [["__scopeId", "data-v-c438c8e2"]]), Wg = {
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
}, Gg = ["aria-hidden", "aria-label"], Kg = [
	"fill",
	"width",
	"height"
], qg = { key: 0 };
function Jg(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon account-arrow-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", qg, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14" }, null, -1)], 8, Kg))], 16, Gg);
}
var Yg = /*#__PURE__*/ Q(Wg, [["render", Jg]]), Xg = { class: "customer-modal" }, Zg = { class: "form-section" }, Qg = { class: "row" }, $g = { class: "field" }, e_ = { class: "field" }, t_ = { class: "row" }, n_ = { class: "field" }, r_ = { class: "form-section" }, i_ = { class: "field" }, a_ = ["placeholder"], o_ = { class: "hint" }, s_ = { class: "field" }, c_ = { class: "row" }, l_ = { class: "field" }, u_ = { class: "field" }, d_ = { class: "row" }, f_ = { class: "field" }, p_ = { class: "form-section" }, m_ = { class: "row" }, h_ = { class: "field" }, g_ = { class: "field" }, __ = { class: "field" }, v_ = { class: "form-section" }, y_ = { class: "field" }, b_ = { class: "row" }, x_ = { class: "field" }, S_ = { class: "field" }, C_ = { class: "field" }, w_ = { class: "form-section" }, T_ = { class: "row" }, E_ = { class: "field" }, D_ = { class: "field" }, O_ = { value: "" }, k_ = ["value"], A_ = { class: "field" }, j_ = { class: "actions" }, M_ = /*#__PURE__*/ Q(/* @__PURE__ */ U({
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
		}), c = De(s()), l = v(""), u = v(""), d = L(() => i.customer ? T("rechnungswerk", "Kunde bearbeiten") : T("rechnungswerk", "Kunde anlegen")), f = L(() => {
			let e = c.customerNumber.trim().toLowerCase();
			return e !== "" && (i.takenNumbers ?? []).includes(e);
		}), p = L(() => c.customerNumber.trim() !== "" && c.name.trim() !== "" && !f.value);
		j(() => i.open, (e) => {
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
		return (r, i) => e.open ? (Z(), N(t(Me), {
			key: 0,
			name: d.value,
			onKeydown: i[19] ||= k((e) => t(vs)(e, () => r.$emit("close")), ["esc"]),
			onClose: i[20] ||= (e) => r.$emit("close")
		}, {
			default: _(() => [z("div", Xg, [
				z("h2", null, Y(d.value), 1),
				z("div", Zg, [
					z("h3", null, Y(t(T)("rechnungswerk", "Stammdaten")), 1),
					z("div", Qg, [z("label", $g, [z("span", null, Y(t(T)("rechnungswerk", "Kundennr.")) + " *", 1), w(z("input", {
						ref_key: "numberInput",
						ref: o,
						"onUpdate:modelValue": i[0] ||= (e) => c.customerNumber = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.customerNumber]])]), z("label", e_, [z("span", null, Y(t(T)("rechnungswerk", "Name / Firma")) + " *", 1), w(z("input", {
						"onUpdate:modelValue": i[1] ||= (e) => c.name = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.name]])])]),
					f.value ? (Z(), N(t($), {
						key: 0,
						type: "error",
						text: t(T)("rechnungswerk", "Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.", { number: c.customerNumber.trim() })
					}, null, 8, ["text"])) : n("", !0),
					z("div", t_, [z("label", n_, [z("span", null, Y(t(T)("rechnungswerk", "USt-IdNr.")), 1), w(z("input", {
						"onUpdate:modelValue": i[2] ||= (e) => c.vatId = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.vatId]])])])
				]),
				z("div", r_, [
					z("h3", null, Y(t(T)("rechnungswerk", "Anschrift")), 1),
					z("label", i_, [
						z("span", null, Y(t(T)("rechnungswerk", "Adresszusatz")), 1),
						w(z("input", {
							"onUpdate:modelValue": i[3] ||= (e) => c.addressAddition = e,
							class: "input",
							type: "text",
							placeholder: t(T)("rechnungswerk", "z. Hd. Frau Meyer, Gebäude B, c/o\xA0…")
						}, null, 8, a_), [[I, c.addressAddition]]),
						z("span", o_, Y(t(T)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					]),
					z("label", s_, [z("span", null, Y(t(T)("rechnungswerk", "Straße & Hausnummer")), 1), w(z("input", {
						"onUpdate:modelValue": i[4] ||= (e) => c.address = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.address]])]),
					z("div", c_, [z("label", l_, [z("span", null, Y(t(T)("rechnungswerk", "PLZ")), 1), w(z("input", {
						"onUpdate:modelValue": i[5] ||= (e) => c.postalCode = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.postalCode]])]), z("label", u_, [z("span", null, Y(t(T)("rechnungswerk", "Ort")), 1), w(z("input", {
						"onUpdate:modelValue": i[6] ||= (e) => c.city = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.city]])])]),
					z("div", d_, [z("label", f_, [z("span", null, Y(t(T)("rechnungswerk", "Land")), 1), J(Ad, {
						modelValue: c.country,
						"onUpdate:modelValue": i[7] ||= (e) => c.country = e,
						selectClass: "input"
					}, null, 8, ["modelValue"])])])
				]),
				z("div", p_, [
					z("h3", null, Y(t(T)("rechnungswerk", "Ansprechpartner & Kontakt")), 1),
					z("div", m_, [z("label", h_, [z("span", null, Y(t(T)("rechnungswerk", "Ansprechpartner")), 1), w(z("input", {
						"onUpdate:modelValue": i[8] ||= (e) => c.contactPerson = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.contactPerson]])]), z("label", g_, [z("span", null, Y(t(T)("rechnungswerk", "Telefon")), 1), w(z("input", {
						"onUpdate:modelValue": i[9] ||= (e) => c.phone = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.phone]])])]),
					z("label", __, [z("span", null, Y(t(T)("rechnungswerk", "E-Mail (für Rechnungsversand)")), 1), w(z("input", {
						"onUpdate:modelValue": i[10] ||= (e) => c.email = e,
						class: "input",
						type: "email"
					}, null, 512), [[I, c.email]])])
				]),
				z("div", v_, [
					z("h3", null, Y(t(T)("rechnungswerk", "Bankverbindung")), 1),
					z("label", y_, [z("span", null, Y(t(T)("rechnungswerk", "Kontoinhaber")), 1), w(z("input", {
						"onUpdate:modelValue": i[11] ||= (e) => c.bankAccountHolder = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.bankAccountHolder]])]),
					z("div", b_, [z("label", x_, [z("span", null, Y(t(T)("rechnungswerk", "IBAN")), 1), w(z("input", {
						"onUpdate:modelValue": i[12] ||= (e) => c.iban = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.iban]])]), z("label", S_, [z("span", null, Y(t(T)("rechnungswerk", "BIC")), 1), w(z("input", {
						"onUpdate:modelValue": i[13] ||= (e) => c.bic = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.bic]])])]),
					z("label", C_, [z("span", null, Y(t(T)("rechnungswerk", "Bank")), 1), w(z("input", {
						"onUpdate:modelValue": i[14] ||= (e) => c.bankName = e,
						class: "input",
						type: "text"
					}, null, 512), [[I, c.bankName]])])
				]),
				z("div", w_, [
					z("h3", null, Y(t(T)("rechnungswerk", "Vorgaben für neue Rechnungen")), 1),
					z("div", T_, [z("label", E_, [z("span", null, Y(t(T)("rechnungswerk", "Zahlungsziel (Tage)")), 1), w(z("input", {
						"onUpdate:modelValue": i[15] ||= (e) => l.value = e,
						class: "input",
						type: "number",
						min: "0",
						inputmode: "numeric"
					}, null, 512), [[I, l.value]])]), z("label", D_, [z("span", null, Y(t(T)("rechnungswerk", "Standard-Steuersatz")), 1), w(z("select", {
						"onUpdate:modelValue": i[16] ||= (e) => u.value = e,
						class: "input"
					}, [z("option", O_, Y(t(T)("rechnungswerk", "— keine Vorgabe —")), 1), (Z(!0), V(D, null, X(t(Bl), (e) => (Z(), V("option", {
						key: e,
						value: String(e)
					}, Y(t(ru)(e)), 9, k_))), 128))], 512), [[Se, u.value]])])]),
					z("label", A_, [z("span", null, Y(t(T)("rechnungswerk", "Notiz (intern, nicht auf der Rechnung)")), 1), w(z("textarea", {
						"onUpdate:modelValue": i[17] ||= (e) => c.note = e,
						class: "input",
						rows: "2"
					}, null, 512), [[I, c.note]])])
				]),
				z("div", j_, [J(t(W), { onClick: i[18] ||= (e) => r.$emit("close") }, {
					default: _(() => [K(Y(t(T)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(t(W), {
					variant: "primary",
					disabled: e.saving || !p.value,
					onClick: g
				}, {
					default: _(() => [K(Y(t(T)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : n("", !0);
	}
}), [["__scopeId", "data-v-7914d0dc"]]), N_ = { class: "rw-view" }, P_ = { class: "rw-view__head" }, F_ = { class: "rw-view__actions" }, I_ = {
	key: 2,
	class: "rw-table-wrap"
}, L_ = { class: "rw-table" }, R_ = ["onClick"], z_ = { class: "rw-muted" }, B_ = {
	key: 0,
	class: "rw-muted"
}, V_ = { class: "rw-col-actions" }, H_ = { class: "rw-actions" }, U_ = { class: "rw-import" }, W_ = { class: "rw-muted" }, G_ = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "CustomersView",
	setup(e) {
		let r = Fd(), i = v(!1), a = v(null), o = v(null), s = v(null), c = v(!1), l = v(""), u = v(""), d = v(!1), f = L(() => r.customers.filter((e) => e.id !== a.value?.id).map((e) => e.customerNumber.trim().toLowerCase()));
		function p(e, t) {
			u.value = e.message ?? t, console.error("[rechnungswerk] customers:", e);
		}
		Ne(() => {
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
				p(e, T("rechnungswerk", "Speichern fehlgeschlagen"));
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
					p(e, T("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, p) => (Z(), V("div", N_, [
			z("div", P_, [z("h2", null, Y(t(T)("rechnungswerk", "Kunden")), 1), z("div", F_, [J(t(W), { onClick: g }, {
				icon: _(() => [J(Yg, { size: 20 })]),
				default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Aus Kontakten importieren")), 1)]),
				_: 1
			}), J(t(W), {
				variant: "primary",
				onClick: m
			}, {
				icon: _(() => [J(tc, { size: 20 })]),
				default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Neuer Kunde")), 1)]),
				_: 1
			})])]),
			u.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : n("", !0),
			!t(r).loading && t(r).customers.length === 0 ? (Z(), N(t(Le), {
				key: 1,
				name: t(T)("rechnungswerk", "Noch keine Kunden"),
				description: t(T)("rechnungswerk", "Lege Kunden an oder übernimm sie aus deinen Nextcloud-Kontakten, um sie schnell in Rechnungen auszuwählen.")
			}, {
				icon: _(() => [J(Ua, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : t(r).customers.length > 0 ? (Z(), V("div", I_, [z("table", L_, [z("thead", null, [z("tr", null, [
				z("th", null, Y(t(T)("rechnungswerk", "Kundennr.")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Kunde")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Ort")), 1),
				p[5] ||= z("th", { class: "num" }, null, -1)
			])]), z("tbody", null, [(Z(!0), V(D, null, X(t(r).customers, (e) => (Z(), V("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => h(e)
			}, [
				z("td", z_, Y(e.customerNumber), 1),
				z("td", null, [K(Y(e.name) + " ", 1), e.contactPerson || e.vatId ? (Z(), V("div", B_, Y([e.contactPerson, e.vatId].filter(Boolean).join(" · ")), 1)) : n("", !0)]),
				z("td", null, Y([e.postalCode, e.city].filter(Boolean).join(" ")), 1),
				z("td", V_, [z("div", H_, [J(t(W), {
					variant: "tertiary",
					"aria-label": t(T)("rechnungswerk", "Löschen"),
					title: t(T)("rechnungswerk", "Löschen"),
					onClick: q((t) => b(e), ["stop"])
				}, {
					icon: _(() => [J(Ku, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, R_))), 128))])])])) : n("", !0),
			J(M_, {
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
			c.value ? (Z(), N(t(Me), {
				key: 3,
				name: t(T)("rechnungswerk", "Aus Nextcloud-Kontakten übernehmen"),
				onKeydown: p[2] ||= k((e) => t(vs)(e, () => c.value = !1), ["esc"]),
				onClose: p[3] ||= (e) => c.value = !1
			}, {
				default: _(() => [z("div", U_, [z("p", W_, Y(t(T)("rechnungswerk", "Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.")), 1), J(wd, {
					modelValue: l.value,
					"onUpdate:modelValue": p[1] ||= (e) => l.value = e,
					onSelect: ee
				}, null, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["name"])) : n("", !0),
			J(Pf, {
				open: s.value !== null,
				name: t(T)("rechnungswerk", "Kunde löschen"),
				message: s.value ? t(T)("rechnungswerk", "„{name}“ wirklich löschen?", { name: s.value.name }) : "",
				confirmLabel: t(T)("rechnungswerk", "Löschen"),
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
}), [["__scopeId", "data-v-1eff74a5"]]), K_ = {
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
}, q_ = ["aria-hidden", "aria-label"], J_ = [
	"fill",
	"width",
	"height"
], Y_ = { key: 0 };
function X_(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon content-save-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Y_, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" }, null, -1)], 8, J_))], 16, q_);
}
var Z_ = /*#__PURE__*/ Q(K_, [["render", X_]]), Q_ = { class: "rw-view rw-view--narrow" }, $_ = {
	key: 2,
	class: "rw-section"
}, ev = { class: "rw-hint" }, tv = { class: "rw-form-row" }, nv = { class: "rw-field" }, rv = { class: "rw-field" }, iv = { class: "rw-field" }, av = {
	key: 3,
	class: "rw-action-bar"
}, ov = /* @__PURE__ */ U({
	__name: "MyContactView",
	setup(e) {
		let r = v(null), i = v(""), a = v(""), o = v(!1);
		Ne(async () => {
			try {
				r.value = await mp();
			} catch (e) {
				i.value = e.message ?? T("rechnungswerk", "Laden fehlgeschlagen");
			}
		});
		async function s() {
			i.value = "";
			try {
				let e = await vd();
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
					r.value = await hp(r.value), a.value = T("rechnungswerk", "Gespeichert.");
				} catch (e) {
					i.value = e.message ?? T("rechnungswerk", "Speichern fehlgeschlagen");
				} finally {
					o.value = !1;
				}
			}
		}
		return (e, l) => (Z(), V("div", Q_, [
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
			r.value ? (Z(), V("section", $_, [
				z("h3", null, Y(t(T)("rechnungswerk", "Mein Verkäufer-Ansprechpartner")), 1),
				z("p", ev, Y(t(T)("rechnungswerk", "Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.")), 1),
				z("div", tv, [
					z("label", nv, [z("span", null, Y(t(T)("rechnungswerk", "Name")), 1), w(z("input", {
						"onUpdate:modelValue": l[0] ||= (e) => r.value.person = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, r.value.person]])]),
					z("label", rv, [z("span", null, Y(t(T)("rechnungswerk", "Telefon")), 1), w(z("input", {
						"onUpdate:modelValue": l[1] ||= (e) => r.value.phone = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[I, r.value.phone]])]),
					z("label", iv, [z("span", null, Y(t(T)("rechnungswerk", "E-Mail")), 1), w(z("input", {
						"onUpdate:modelValue": l[2] ||= (e) => r.value.email = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[I, r.value.email]])])
				]),
				J(t(W), {
					variant: "tertiary",
					onClick: s
				}, {
					icon: _(() => [J(Ya, { size: 20 })]),
					default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Aus meinem Nextcloud-Konto übernehmen")), 1)]),
					_: 1
				})
			])) : n("", !0),
			r.value ? (Z(), V("div", av, [J(t(W), {
				variant: "primary",
				disabled: o.value,
				onClick: c
			}, {
				icon: _(() => [J(Z_, { size: 20 })]),
				default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])) : n("", !0)
		]));
	}
});
// node_modules/@nextcloud/vue/dist/functions/dialog/index.mjs
function sv(e, t = {}, n = {}) {
	let { container: r } = n;
	"container" in t && typeof t.container == "string" && (r ??= t.container);
	let i = (typeof r == "string" && document.querySelector(r) || document.body).appendChild(document.createElement("div"));
	return new Promise((n, r) => {
		let a = Te(e, {
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
var cv = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-folder-move\" viewBox=\"0 0 24 24\"><path d=\"M14,18V15H10V11H14V8L19,13M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z\" /></svg>", lv = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-folder-multiple\" viewBox=\"0 0 24 24\"><path d=\"M22,4H14L12,2H6A2,2 0 0,0 4,4V16A2,2 0 0,0 6,18H22A2,2 0 0,0 24,16V6A2,2 0 0,0 22,4M2,6H0V11H0V20A2,2 0 0,0 2,22H20V20H2V6Z\" /></svg>", uv = class extends Error {}, dv = class {
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
		let { default: e } = await import("./FilePicker-qWi4RBGN-BLZD6uIW.chunk.mjs"), t = await sv(e, {
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
		if (!Array.isArray(t) || t.length === 0) throw new uv("FilePicker: No nodes selected");
		return t;
	}
	async pick() {
		let e = await this.pickNodes();
		return this.multiSelect ? e.map((e) => e.path) : e[0]?.path ?? "/";
	}
}, fv = class {
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
			let r = [], i = t[0]?.displayname || bt(n);
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
				icon: lv,
				variant: e === 3 ? "primary" : "secondary"
			}), (e === 4 || e === 2) && r.push({
				callback: () => {},
				label: i ? Ue("Move to {target}", { target: i }) : Ue("Move"),
				icon: cv,
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
		return new dv(this.title, this.multiSelect, this.mimeTypeFilter, this.directoriesAllowed, this.noMenu, this.buttons, this.path, this.filter, this.canPick, this.container, this.disabledNavigation);
	}
};
function pv(e) {
	return new fv(e);
}
// node_modules/@ckpack/vue-color/libs/style-inject.es-746bb8ed.js
function mv(e, t) {
	t === void 0 && (t = {});
	var n = t.insertAt;
	if (e && typeof document < "u") {
		var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
		i.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
	}
}
// node_modules/@ckpack/vue-color/libs/utils/compoent.js
var hv = function(e, t) {
	let { componentPrefix: n = "" } = t || {};
	e.component(`${n}${this.name}`, this);
}, gv = {}, _v = {
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
		return { "background-image": `url(${yv(this.white, this.grey, this.size)})` };
	} }
};
function vv(e, t, n) {
	if (typeof document > "u") return null;
	let r = document.createElement("canvas");
	r.width = r.height = n * 2;
	let i = r.getContext("2d");
	return i ? (i.fillStyle = e, i.fillRect(0, 0, r.width, r.height), i.fillStyle = t, i.fillRect(0, 0, n, n), i.translate(n, n), i.fillRect(0, 0, n, n), r.toDataURL()) : null;
}
function yv(e, t, n) {
	let r = `${e},${t},${n}`;
	if (gv[r]) return gv[r];
	let i = vv(e, t, n);
	return gv[r] = i, i;
}
function bv(e, t, n, r, i, a) {
	return Z(), V("div", {
		class: "vc-checkerboard",
		style: dt(a.bgStyle)
	}, null, 4);
}
mv(".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}"), _v.render = bv, _v.__file = "src/components/checkboard/checkboard.vue", _v.install = hv;
// node_modules/@ckpack/vue-color/libs/components/alpha/index.js
var xv = {
	name: "Alpha",
	components: { Checkboard: _v },
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
}, Sv = { class: "vc-alpha" }, Cv = { class: "vc-alpha-checkboard-wrap" }, wv = [/* @__PURE__ */ z("div", { class: "vc-alpha-picker" }, null, -1)];
function Tv(e, t, n, r, i, a) {
	let o = l("Checkboard");
	return Z(), V("div", Sv, [
		z("div", Cv, [J(o)]),
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
		}, wv, 4)], 544)
	]);
}
mv(".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), xv.render = Tv, xv.__file = "src/components/alpha/alpha.vue", xv.install = hv;
// node_modules/@ctrl/tinycolor/dist/module/util.js
function Ev(e, t) {
	Ov(e) && (e = "100%");
	var n = kv(e);
	return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (e = t === 360 ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t)), e);
}
function Dv(e) {
	return Math.min(1, Math.max(0, e));
}
function Ov(e) {
	return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function kv(e) {
	return typeof e == "string" && e.indexOf("%") !== -1;
}
function Av(e) {
	return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function jv(e) {
	return e <= 1 ? `${Number(e) * 100}%` : e;
}
function Mv(e) {
	return e.length === 1 ? "0" + e : String(e);
}
// node_modules/@ctrl/tinycolor/dist/module/conversion.js
function Nv(e, t, n) {
	return {
		r: Ev(e, 255) * 255,
		g: Ev(t, 255) * 255,
		b: Ev(n, 255) * 255
	};
}
function Pv(e, t, n) {
	e = Ev(e, 255), t = Ev(t, 255), n = Ev(n, 255);
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
function Fv(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Iv(e, t, n) {
	var r, i, a;
	if (e = Ev(e, 360), t = Ev(t, 100), n = Ev(n, 100), t === 0) i = n, a = n, r = n;
	else {
		var o = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
		r = Fv(s, o, e + 1 / 3), i = Fv(s, o, e), a = Fv(s, o, e - 1 / 3);
	}
	return {
		r: r * 255,
		g: i * 255,
		b: a * 255
	};
}
function Lv(e, t, n) {
	e = Ev(e, 255), t = Ev(t, 255), n = Ev(n, 255);
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
function Rv(e, t, n) {
	e = Ev(e, 360) * 6, t = Ev(t, 100), n = Ev(n, 100);
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
function zv(e, t, n, r) {
	var i = [
		Mv(Math.round(e).toString(16)),
		Mv(Math.round(t).toString(16)),
		Mv(Math.round(n).toString(16))
	];
	return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function Bv(e, t, n, r, i) {
	var a = [
		Mv(Math.round(e).toString(16)),
		Mv(Math.round(t).toString(16)),
		Mv(Math.round(n).toString(16)),
		Mv(Vv(r))
	];
	return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Vv(e) {
	return Math.round(parseFloat(e) * 255).toString(16);
}
function Hv(e) {
	return Uv(e) / 255;
}
function Uv(e) {
	return parseInt(e, 16);
}
function Wv(e) {
	return {
		r: e >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
}
// node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var Gv = {
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
function Kv(e) {
	var t = {
		r: 0,
		g: 0,
		b: 0
	}, n = 1, r = null, i = null, a = null, o = !1, s = !1;
	return typeof e == "string" && (e = Zv(e)), typeof e == "object" && (Qv(e.r) && Qv(e.g) && Qv(e.b) ? (t = Nv(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Qv(e.h) && Qv(e.s) && Qv(e.v) ? (r = jv(e.s), i = jv(e.v), t = Rv(e.h, r, i), o = !0, s = "hsv") : Qv(e.h) && Qv(e.s) && Qv(e.l) && (r = jv(e.s), a = jv(e.l), t = Iv(e.h, r, a), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Av(n), {
		ok: o,
		format: e.format || s,
		r: Math.min(255, Math.max(t.r, 0)),
		g: Math.min(255, Math.max(t.g, 0)),
		b: Math.min(255, Math.max(t.b, 0)),
		a: n
	};
}
var qv = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", Jv = `[\\s|\\(]+(${qv})[,|\\s]+(${qv})[,|\\s]+(${qv})\\s*\\)?`, Yv = `[\\s|\\(]+(${qv})[,|\\s]+(${qv})[,|\\s]+(${qv})[,|\\s]+(${qv})\\s*\\)?`, Xv = {
	CSS_UNIT: new RegExp(qv),
	rgb: RegExp("rgb" + Jv),
	rgba: RegExp("rgba" + Yv),
	hsl: RegExp("hsl" + Jv),
	hsla: RegExp("hsla" + Yv),
	hsv: RegExp("hsv" + Jv),
	hsva: RegExp("hsva" + Yv),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Zv(e) {
	if (e = e.trim().toLowerCase(), e.length === 0) return !1;
	var t = !1;
	if (Gv[e]) e = Gv[e], t = !0;
	else if (e === "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var n = Xv.rgb.exec(e);
	return n ? {
		r: n[1],
		g: n[2],
		b: n[3]
	} : (n = Xv.rgba.exec(e), n ? {
		r: n[1],
		g: n[2],
		b: n[3],
		a: n[4]
	} : (n = Xv.hsl.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3]
	} : (n = Xv.hsla.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3],
		a: n[4]
	} : (n = Xv.hsv.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3]
	} : (n = Xv.hsva.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3],
		a: n[4]
	} : (n = Xv.hex8.exec(e), n ? {
		r: Uv(n[1]),
		g: Uv(n[2]),
		b: Uv(n[3]),
		a: Hv(n[4]),
		format: t ? "name" : "hex8"
	} : (n = Xv.hex6.exec(e), n ? {
		r: Uv(n[1]),
		g: Uv(n[2]),
		b: Uv(n[3]),
		format: t ? "name" : "hex"
	} : (n = Xv.hex4.exec(e), n ? {
		r: Uv(n[1] + n[1]),
		g: Uv(n[2] + n[2]),
		b: Uv(n[3] + n[3]),
		a: Hv(n[4] + n[4]),
		format: t ? "name" : "hex8"
	} : (n = Xv.hex3.exec(e), n ? {
		r: Uv(n[1] + n[1]),
		g: Uv(n[2] + n[2]),
		b: Uv(n[3] + n[3]),
		format: t ? "name" : "hex"
	} : !1)))))))));
}
function Qv(e) {
	return !!Xv.CSS_UNIT.exec(String(e));
}
// node_modules/@ctrl/tinycolor/dist/module/index.js
var $v = function() {
	function e(t, n) {
		if (t === void 0 && (t = ""), n === void 0 && (n = {}), t instanceof e) return t;
		typeof t == "number" && (t = Wv(t)), this.originalInput = t;
		var r = Kv(t);
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
		return this.a = Av(e), this.roundA = Math.round(100 * this.a) / 100, this;
	}, e.prototype.isMonochrome = function() {
		return this.toHsl().s === 0;
	}, e.prototype.toHsv = function() {
		var e = Lv(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			v: e.v,
			a: this.a
		};
	}, e.prototype.toHsvString = function() {
		var e = Lv(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
		return this.a === 1 ? `hsv(${t}, ${n}%, ${r}%)` : `hsva(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHsl = function() {
		var e = Pv(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			l: e.l,
			a: this.a
		};
	}, e.prototype.toHslString = function() {
		var e = Pv(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
		return this.a === 1 ? `hsl(${t}, ${n}%, ${r}%)` : `hsla(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHex = function(e) {
		return e === void 0 && (e = !1), zv(this.r, this.g, this.b, e);
	}, e.prototype.toHexString = function(e) {
		return e === void 0 && (e = !1), "#" + this.toHex(e);
	}, e.prototype.toHex8 = function(e) {
		return e === void 0 && (e = !1), Bv(this.r, this.g, this.b, this.a, e);
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
			return `${Math.round(Ev(e, 255) * 100)}%`;
		};
		return {
			r: e(this.r),
			g: e(this.g),
			b: e(this.b),
			a: this.a
		};
	}, e.prototype.toPercentageRgbString = function() {
		var e = function(e) {
			return Math.round(Ev(e, 255) * 100);
		};
		return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
	}, e.prototype.toName = function() {
		if (this.a === 0) return "transparent";
		if (this.a < 1) return !1;
		for (var e = "#" + zv(this.r, this.g, this.b, !1), t = 0, n = Object.entries(Gv); t < n.length; t++) {
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
		return n.l += t / 100, n.l = Dv(n.l), new e(n);
	}, e.prototype.brighten = function(t) {
		t === void 0 && (t = 10);
		var n = this.toRgb();
		return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
	}, e.prototype.darken = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.l -= t / 100, n.l = Dv(n.l), new e(n);
	}, e.prototype.tint = function(e) {
		return e === void 0 && (e = 10), this.mix("white", e);
	}, e.prototype.shade = function(e) {
		return e === void 0 && (e = 10), this.mix("black", e);
	}, e.prototype.desaturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s -= t / 100, n.s = Dv(n.s), new e(n);
	}, e.prototype.saturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s += t / 100, n.s = Dv(n.s), new e(n);
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
function ey(...e) {
	return new $v(...e);
}
function ty(e, t) {
	let n = e && e.a, r;
	r = e && e.hsl ? ey(e.hsl) : e && e.hex && e.hex.length > 0 ? ey(e.hex) : e && e.hsv ? ey(e.hsv) : e && e.rgba ? ey(e.rgba) : e && e.rgb ? ey(e.rgb) : ey(e), r && (r._a === void 0 || r._a === null) && r.setAlpha(n || r.getAlpha());
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
var ny = {
	model: {
		prop: "modelValue",
		event: "update:modelValue"
	},
	props: ["modelValue"],
	data() {
		return { val: ty(this.modelValue) };
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
		this.val = ty(e);
	} },
	methods: {
		colorChange(e, t) {
			this.oldHue = this.colors.hsl.h, this.colors = ty(e, t || this.oldHue);
		},
		isValidHex(e) {
			return ey(e).isValid;
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
			return ey(e).getAlpha() === 0;
		}
	}
}, ry = {
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
}, iy = { class: "vc-editable-input" }, ay = ["aria-labelledby"], oy = ["id", "for"], sy = { class: "vc-input__desc" };
function cy(e, t, n, r, i, a) {
	return Z(), V("div", iy, [
		w(z("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.val = e,
			"aria-labelledby": a.labelId,
			class: "vc-input__input",
			onKeydown: t[1] ||= (...e) => a.handleKeyDown && a.handleKeyDown(...e),
			onInput: t[2] ||= (...e) => a.update && a.update(...e)
		}, null, 40, ay), [[I, a.val]]),
		z("span", {
			id: a.labelId,
			for: n.label,
			class: "vc-input__label"
		}, Y(a.labelSpanText), 9, oy),
		z("span", sy, Y(n.desc), 1)
	]);
}
mv(".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}"), ry.render = cy, ry.__file = "src/components/editable-input/editable-input.vue", ry.install = hv;
// node_modules/@ckpack/vue-color/libs/utils/utils.js
function ly(e, t, n) {
	return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e;
}
// node_modules/@ckpack/vue-color/libs/components/saturation/index.js
var uy = {
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
			let r = n.clientWidth, i = n.clientHeight, a = n.getBoundingClientRect().left + window.pageXOffset, o = n.getBoundingClientRect().top + window.pageYOffset, s = e.pageX || (e.touches ? e.touches[0].pageX : 0), c = e.pageY || (e.touches ? e.touches[0].pageY : 0), l = ly(s - a, 0, r), u = ly(c - o, 0, i), d = l / r, f = ly(-(u / i) + 1, 0, 1);
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
}, dy = /*#__PURE__*/ z("div", { class: "vc-saturation--white" }, null, -1), fy = /*#__PURE__*/ z("div", { class: "vc-saturation--black" }, null, -1), py = [/* @__PURE__ */ z("div", { class: "vc-saturation-circle" }, null, -1)];
function my(e, t, n, r, i, a) {
	return Z(), V("div", {
		ref: "container",
		class: "vc-saturation",
		style: dt({ background: a.bgColor }),
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [
		dy,
		fy,
		z("div", {
			class: "vc-saturation-pointer",
			style: dt({
				top: a.pointerTop,
				left: a.pointerLeft
			})
		}, py, 4)
	], 36);
}
mv(".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}"), uy.render = my, uy.__file = "src/components/saturation/saturation.vue", uy.install = hv;
// node_modules/@ckpack/vue-color/libs/components/hue/index.js
var hy = {
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
}, gy = ["aria-valuenow"], _y = [/* @__PURE__ */ z("div", { class: "vc-hue-picker" }, null, -1)];
function vy(e, t, n, r, i, a) {
	return Z(), V("div", { class: H(["vc-hue", [a.directionClass]]) }, [z("div", {
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
	}, _y, 4)], 40, gy)], 2);
}
mv(".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), hy.render = vy, hy.__file = "src/components/hue/hue.vue", hy.install = hv;
// node_modules/@ckpack/vue-color/libs/components/chrome/index.js
var yy = {
	name: "Chrome",
	components: {
		Saturation: uy,
		Hue: hy,
		Alpha: xv,
		EdIn: ry,
		Checkboard: _v
	},
	mixins: [ny],
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
}, by = { class: "vc-chrome-saturation-wrap" }, xy = { class: "vc-chrome-body" }, Sy = { class: "vc-chrome-controls" }, Cy = { class: "vc-chrome-color-wrap" }, wy = ["aria-label"], Ty = { class: "vc-chrome-sliders" }, Ey = { class: "vc-chrome-hue-wrap" }, Dy = {
	key: 0,
	class: "vc-chrome-alpha-wrap"
}, Oy = {
	key: 0,
	class: "vc-chrome-fields-wrap"
}, ky = { class: "vc-chrome-fields" }, Ay = { class: "vc-chrome-field" }, jy = { class: "vc-chrome-fields" }, My = { class: "vc-chrome-field" }, Ny = { class: "vc-chrome-field" }, Py = { class: "vc-chrome-field" }, Fy = {
	key: 0,
	class: "vc-chrome-field"
}, Iy = { class: "vc-chrome-fields" }, Ly = { class: "vc-chrome-field" }, Ry = { class: "vc-chrome-field" }, zy = { class: "vc-chrome-field" }, By = {
	key: 0,
	class: "vc-chrome-field"
}, Vy = { class: "vc-chrome-toggle-icon" }, Hy = [/* @__PURE__ */ z("path", {
	fill: "#333",
	d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1)], Uy = { class: "vc-chrome-toggle-icon-highlight" };
function Wy(e, t, r, i, a, o) {
	let s = l("Saturation"), c = l("Checkboard"), u = l("Hue"), d = l("Alpha"), f = l("EdIn");
	return Z(), V("div", {
		role: "application",
		"aria-label": "Chrome color picker",
		class: H(["vc-chrome", [r.disableAlpha ? "vc-chrome__disable-alpha" : ""]])
	}, [z("div", by, [J(s, {
		value: e.colors,
		onChange: o.childChange
	}, null, 8, ["value", "onChange"])]), z("div", xy, [z("div", Sy, [z("div", Cy, [z("div", {
		"aria-label": `current color is ${e.colors.hex}`,
		class: "vc-chrome-active-color",
		style: dt({ background: o.activeColor })
	}, null, 12, wy), r.disableAlpha ? n("v-if", !0) : (Z(), N(c, { key: 0 }))]), z("div", Ty, [z("div", Ey, [J(u, {
		value: e.colors,
		onChange: o.childChange
	}, null, 8, ["value", "onChange"])]), r.disableAlpha ? n("v-if", !0) : (Z(), V("div", Dy, [J(d, {
		value: e.colors,
		onChange: o.childChange
	}, null, 8, ["value", "onChange"])]))])]), r.disableFields ? n("v-if", !0) : (Z(), V("div", Oy, [
		w(z("div", ky, [n(" hex "), z("div", Ay, [o.hasAlpha ? n("v-if", !0) : (Z(), N(f, {
			key: 0,
			label: "hex",
			value: e.colors.hex,
			onChange: o.inputChange
		}, null, 8, ["value", "onChange"])), o.hasAlpha ? (Z(), N(f, {
			key: 1,
			label: "hex",
			value: e.colors.hex8,
			onChange: o.inputChange
		}, null, 8, ["value", "onChange"])) : n("v-if", !0)])], 512), [[y, a.fieldsIndex === "hex"]]),
		w(z("div", jy, [
			n(" rgba "),
			z("div", My, [J(f, {
				label: "r",
				value: e.colors.rgba.r,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			z("div", Ny, [J(f, {
				label: "g",
				value: e.colors.rgba.g,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			z("div", Py, [J(f, {
				label: "b",
				value: e.colors.rgba.b,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			r.disableAlpha ? n("v-if", !0) : (Z(), V("div", Fy, [J(f, {
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
		w(z("div", Iy, [
			n(" hsla "),
			z("div", Ly, [J(f, {
				label: "h",
				value: o.hsl.h,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			z("div", Ry, [J(f, {
				label: "s",
				value: o.hsl.s,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			z("div", zy, [J(f, {
				label: "l",
				value: o.hsl.l,
				onChange: o.inputChange
			}, null, 8, ["value", "onChange"])]),
			r.disableAlpha ? n("v-if", !0) : (Z(), V("div", By, [J(f, {
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
		z("div", {
			class: "vc-chrome-toggle-btn",
			role: "button",
			"aria-label": "Change another color definition",
			onClick: t[3] ||= (...e) => o.toggleViews && o.toggleViews(...e)
		}, [z("div", Vy, [(Z(), V("svg", {
			style: {
				width: "24px",
				height: "24px"
			},
			viewBox: "0 0 24 24",
			onMouseover: t[0] ||= (...e) => o.showHighlight && o.showHighlight(...e),
			onMouseenter: t[1] ||= (...e) => o.showHighlight && o.showHighlight(...e),
			onMouseout: t[2] ||= (...e) => o.hideHighlight && o.hideHighlight(...e)
		}, Hy, 32))]), w(z("div", Uy, null, 512), [[y, a.highlight]])]),
		n(" btn ")
	]))])], 2);
}
// node_modules/@nextcloud/vue/dist/chunks/colors.mjs
mv(".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}"), yy.render = Wy, yy.__file = "src/components/chrome/chrome.vue", yy.install = hv, Oe(xt);
var Gy = class {
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
}, Ky = new Gy(182, 70, 157, R("Purple")), qy = new Gy(221, 203, 85, R("Gold")), Jy = new Gy(0, 130, 201, R("Nextcloud blue")), Yy = new Gy(0, 0, 0, R("Black")), Xy = new Gy(255, 255, 255, R("White")), Zy = [
	Ky,
	new Gy(191, 103, 139, R("Rosy brown")),
	new Gy(201, 136, 121, R("Feldspar")),
	new Gy(211, 169, 103, R("Whiskey")),
	qy,
	new Gy(165, 184, 114, R("Olivine")),
	new Gy(110, 166, 143, R("Acapulco")),
	new Gy(55, 148, 172, R("Boston Blue")),
	Jy,
	new Gy(45, 115, 190, R("Mariner")),
	new Gy(91, 100, 179, R("Blue Violet")),
	new Gy(136, 85, 168, R("Deluge"))
];
// node_modules/@nextcloud/vue/dist/chunks/NcColorPicker.mjs
Oe(M);
var Qy = ["aria-label"], $y = {
	key: 0,
	class: "color-picker__simple"
}, eb = [
	"aria-label",
	"name",
	"checked",
	"onClick"
], tb = ["title"], nb = [
	"aria-label",
	"name",
	"checked"
], rb = {
	key: 0,
	class: "color-picker__navigation"
}, ib = /* @__PURE__ */ Ot(/* @__PURE__ */ U({
	__name: "NcColorPicker",
	props: /* @__PURE__ */ Dt({
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
	emits: /* @__PURE__ */ Dt(["submit", "closed"], ["update:modelValue", "update:open"]),
	setup(e, { emit: r }) {
		let i = at(e, "modelValue"), a = at(e, "open"), o = e, c = r, l = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i, u = g(), f = v(!1), p = L(() => {
			let e = o.palette;
			for (let t of e) if (typeof t == "string" && !t.match(l) || typeof t == "object" && !t.color?.match(l)) {
				it.error("[NcColorPicker] Invalid palette passed", { color: t }), e = [];
				break;
			}
			return e.length === 0 && (e = o.clearable ? [
				...Zy,
				Yy,
				Xy
			] : [...Zy]), e.map((e) => ({
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
		function y(e) {
			i.value = e.hex;
		}
		function b(e) {
			return x(e) > .5 ? Yy.color : Xy.color;
		}
		function x(e) {
			let [t, n, r] = S(e);
			return (.2126 * t + .7152 * n + .0722 * r) / 255;
		}
		function S(e) {
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
			trigger: _((e) => [F(r.$slots, "default", Tt(pt(e)), void 0, !0)]),
			default: _((r) => [z("div", {
				role: "dialog",
				class: H(["color-picker", {
					"color-picker--advanced-fields": f.value && e.advancedFields,
					"color-picker--clearable": e.clearable
				}]),
				"aria-modal": "true",
				"aria-label": t(R)("Color picker")
			}, [J(s, {
				name: "slide",
				mode: "out-in"
			}, {
				default: _(() => [f.value ? (Z(), N(t(yy), {
					key: 1,
					class: "color-picker__advanced",
					disableAlpha: "",
					disableFields: !e.advancedFields,
					modelValue: i.value ?? "#000000",
					"onUpdate:modelValue": y
				}, null, 8, ["disableFields", "modelValue"])) : (Z(), V("div", $y, [(Z(!0), V(D, null, X(p.value, ({ color: e, name: r }, a) => (Z(), V("label", {
					key: a,
					class: H(["color-picker__simple-color-circle", { "color-picker__simple-color-circle--active": e === i.value }]),
					style: dt({
						backgroundColor: e,
						color: b(e)
					})
				}, [e === i.value ? (Z(), N(t(He), {
					key: 0,
					path: t(be)
				}, null, 8, ["path"])) : n("", !0), z("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": r,
					name: `color-picker-${t(u)}`,
					checked: e === i.value,
					onClick: (t) => h(e)
				}, null, 8, eb)], 6))), 128)), e.clearable ? (Z(), V("label", {
					key: 0,
					class: "color-picker__clear",
					title: t(R)("No color")
				}, [J(t(He), {
					size: i.value ? 28 : 34,
					path: t(ee)
				}, null, 8, ["size", "path"]), z("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": t(R)("No color"),
					name: `color-picker-${t(u)}`,
					checked: !i.value,
					onClick: o[0] ||= (e) => i.value = void 0
				}, null, 8, nb)], 8, tb)) : n("", !0)]))]),
				_: 1
			}), e.paletteOnly ? n("", !0) : (Z(), V("div", rb, [f.value ? (Z(), N(t(W), {
				key: 0,
				"aria-label": t(R)("Back"),
				title: t(R)("Back"),
				variant: "tertiary",
				onClick: o[1] ||= (e) => f.value = !1
			}, {
				icon: _(() => [J(t(He), {
					directional: "",
					path: t(Ce)
				}, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])) : (Z(), N(t(W), {
				key: 1,
				"aria-label": t(R)("More options"),
				title: t(R)("More options"),
				variant: "tertiary",
				onClick: o[2] ||= (e) => f.value = !0
			}, {
				icon: _(() => [J(t(He), { path: t(vt) }, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])), J(t(W), {
				variant: "primary",
				onClick: (e) => m(r.hide)
			}, {
				default: _(() => [K(Y(t(R)("Choose")), 1)]),
				_: 1
			}, 8, ["onClick"])]))], 10, Qy)]),
			_: 3
		}, 8, ["shown", "container"]));
	}
}), [["__scopeId", "data-v-fab7cffe"]]), ab = ["aria-label"], ob = { class: "rw-subnav__group" }, sb = ["aria-current", "onClick"], cb = /* @__PURE__ */ U({
	__name: "RwSettingsNav",
	props: {
		groups: {},
		modelValue: {},
		ariaLabel: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: n }) {
		let r = n;
		return (n, i) => (Z(), V("nav", {
			class: "rw-subnav",
			"aria-label": e.ariaLabel || t(T)("rechnungswerk", "Bereiche")
		}, [(Z(!0), V(D, null, X(e.groups, (t) => (Z(), V(D, { key: t.label }, [z("div", ob, Y(t.label), 1), (Z(!0), V(D, null, X(t.items, (t) => (Z(), V("button", {
			key: t.key,
			type: "button",
			class: H(["rw-subnav__item", { "rw-subnav__item--active": e.modelValue === t.key }]),
			"aria-current": e.modelValue === t.key ? "page" : void 0,
			onClick: (e) => r("update:modelValue", t.key)
		}, [(Z(), N(ve(t.icon), { size: 18 })), K(" " + Y(t.label), 1)], 10, sb))), 128))], 64))), 128))], 8, ab));
	}
}), lb = {
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
}, ub = ["aria-hidden", "aria-label"], db = [
	"fill",
	"width",
	"height"
], fb = { key: 0 };
function pb(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon office-building-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", fb, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" }, null, -1)], 8, db))], 16, ub);
}
var mb = /*#__PURE__*/ Q(lb, [["render", pb]]), hb = {
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
}, gb = ["aria-hidden", "aria-label"], _b = [
	"fill",
	"width",
	"height"
], vb = { key: 0 };
function yb(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon bank-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", vb, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" }, null, -1)], 8, _b))], 16, gb);
}
var bb = /*#__PURE__*/ Q(hb, [["render", yb]]), xb = {
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
}, Sb = ["aria-hidden", "aria-label"], Cb = [
	"fill",
	"width",
	"height"
], wb = { key: 0 };
function Tb(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon palette-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", wb, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z" }, null, -1)], 8, Cb))], 16, Sb);
}
var Eb = /*#__PURE__*/ Q(xb, [["render", Tb]]), Db = {
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
}, Ob = ["aria-hidden", "aria-label"], kb = [
	"fill",
	"width",
	"height"
], Ab = { key: 0 };
function jb(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-sign-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Ab, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z" }, null, -1)], 8, kb))], 16, Ob);
}
var Mb = /*#__PURE__*/ Q(Db, [["render", jb]]), Nb = {
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
}, Pb = ["aria-hidden", "aria-label"], Fb = [
	"fill",
	"width",
	"height"
], Ib = { key: 0 };
function Lb(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon text-box-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Ib, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" }, null, -1)], 8, Fb))], 16, Pb);
}
var Rb = /*#__PURE__*/ Q(Nb, [["render", Lb]]), zb = {
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
}, Bb = ["aria-hidden", "aria-label"], Vb = [
	"fill",
	"width",
	"height"
], Hb = { key: 0 };
function Ub(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon percent-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Hb, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5M7,4A3,3 0 0,0 4,7A3,3 0 0,0 7,10A3,3 0 0,0 10,7A3,3 0 0,0 7,4M17,14A3,3 0 0,0 14,17A3,3 0 0,0 17,20A3,3 0 0,0 20,17A3,3 0 0,0 17,14Z" }, null, -1)], 8, Vb))], 16, Bb);
}
var Wb = /*#__PURE__*/ Q(zb, [["render", Ub]]), Gb = {
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
}, Kb = ["aria-hidden", "aria-label"], qb = [
	"fill",
	"width",
	"height"
], Jb = { key: 0 };
function Yb(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon credit-card-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Jb, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, null, -1)], 8, qb))], 16, Kb);
}
var Xb = /*#__PURE__*/ Q(Gb, [["render", Yb]]), Zb = {
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
}, Qb = ["aria-hidden", "aria-label"], $b = [
	"fill",
	"width",
	"height"
], ex = { key: 0 };
function tx(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon email-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", ex, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" }, null, -1)], 8, $b))], 16, Qb);
}
var nx = /*#__PURE__*/ Q(Zb, [["render", tx]]), rx = {
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
}, ix = ["aria-hidden", "aria-label"], ax = [
	"fill",
	"width",
	"height"
], ox = { key: 0 };
function sx(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon server-network-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", ox, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z" }, null, -1)], 8, ax))], 16, ix);
}
var cx = /*#__PURE__*/ Q(rx, [["render", sx]]), lx = {
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
}, ux = ["aria-hidden", "aria-label"], dx = [
	"fill",
	"width",
	"height"
], fx = { key: 0 };
function px(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon email-sync-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", fx, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M3 4C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H13.5A6.5 6.5 0 0 1 13 18H3V8L11 13L19 8V11A6.5 6.5 0 0 1 19.5 11A6.5 6.5 0 0 1 21 11.18V6C21 4.9 20.1 4 19 4H3M3 6H19L11 11L3 6M19 12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5V12M15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29Z" }, null, -1)], 8, dx))], 16, ux);
}
var mx = /*#__PURE__*/ Q(lx, [["render", px]]), hx = {
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
}, gx = ["aria-hidden", "aria-label"], _x = [
	"fill",
	"width",
	"height"
], vx = { key: 0 };
function yx(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon folder-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", vx, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" }, null, -1)], 8, _x))], 16, gx);
}
var bx = /*#__PURE__*/ Q(hx, [["render", yx]]), xx = {
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
}, Sx = ["aria-hidden", "aria-label"], Cx = [
	"fill",
	"width",
	"height"
], wx = { key: 0 };
function Tx(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon shield-account-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", wx, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z" }, null, -1)], 8, Cx))], 16, Sx);
}
var Ex = /*#__PURE__*/ Q(xx, [["render", Tx]]), Dx = {
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
}, Ox = ["aria-hidden", "aria-label"], kx = [
	"fill",
	"width",
	"height"
], Ax = { key: 0 };
function jx(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon key-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Ax, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z" }, null, -1)], 8, kx))], 16, Ox);
}
var Mx = /*#__PURE__*/ Q(Dx, [["render", jx]]), Nx = {
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
}, Px = ["aria-hidden", "aria-label"], Fx = [
	"fill",
	"width",
	"height"
], Ix = { key: 0 };
function Lx(e, t, r, i, a, o) {
	return Z(), V("span", B(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon robot-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(Z(), V("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (Z(), V("title", Ix, Y(r.title), 1)) : n("", !0), t[1] ||= z("path", { d: "M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" }, null, -1)], 8, Fx))], 16, Px);
}
var Rx = /*#__PURE__*/ Q(Nx, [["render", Lx]]), zx = () => ds("/api-keys"), Bx = (e, t, n = null) => fs("/api-keys", { data: {
	name: e,
	scopes: t,
	rateLimit: n
} }), Vx = (e) => hs(`/api-keys/${e}`), Hx = { class: "rw-api-keys" }, Ux = { class: "rw-hint" }, Wx = { class: "rw-api-keys__plaintext" }, Gx = {
	key: 2,
	class: "rw-api-keys__table"
}, Kx = { class: "rw-api-keys__actions-head" }, qx = { class: "rw-api-keys__scopes" }, Jx = {
	key: 3,
	class: "rw-hint"
}, Yx = { class: "rw-api-keys__modal" }, Xx = { class: "field" }, Zx = ["placeholder"], Qx = { class: "field" }, $x = ["value"], eS = { class: "field" }, tS = ["placeholder"], nS = { class: "rw-api-keys__actions" }, rS = 1e4, iS = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "ApiKeysSection",
	setup(e) {
		let r = [
			"invoices:create",
			"invoices:commit",
			"invoices:send",
			"invoices:pay",
			"invoices:cancel",
			"invoices:read",
			"invoices:pdf"
		], i = {
			"invoices:create": T("rechnungswerk", "Rechnungen anlegen"),
			"invoices:commit": T("rechnungswerk", "Festschreiben"),
			"invoices:send": T("rechnungswerk", "Versenden"),
			"invoices:pay": T("rechnungswerk", "Als bezahlt markieren"),
			"invoices:cancel": T("rechnungswerk", "Stornieren"),
			"invoices:read": T("rechnungswerk", "Rechnungen lesen"),
			"invoices:pdf": T("rechnungswerk", "PDF abrufen")
		}, a = v([]), o = v(!1), s = v(""), c = v([]), l = v(""), u = v(!1), d = v(""), f = v(""), p = v(""), m = v(!1), h = v(null), g = v(null), ee = L(() => s.value.trim() !== "" && c.value.length > 0);
		function y(e) {
			return i[e] ?? e;
		}
		function b(e) {
			return e.map(y);
		}
		function x(e) {
			return (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString();
		}
		async function C() {
			try {
				a.value = await zx(), d.value = "";
			} catch (e) {
				d.value = e.message ?? T("rechnungswerk", "API-Schlüssel konnten nicht geladen werden.");
			}
		}
		async function te() {
			u.value = !0, f.value = "";
			try {
				let e = l.value === "" ? null : Number(l.value), t = await Bx(s.value.trim(), [...c.value], e);
				p.value = t.plaintext, m.value = !1, o.value = !1, s.value = "", c.value = [], l.value = "", await C();
			} catch (e) {
				f.value = e.message ?? T("rechnungswerk", "Anlegen fehlgeschlagen.");
			} finally {
				u.value = !1;
			}
		}
		async function E() {
			let e = h.value;
			if (h.value = null, e !== null) {
				u.value = !0;
				try {
					await Vx(e), await C();
				} catch (e) {
					d.value = e.message ?? T("rechnungswerk", "Widerrufen fehlgeschlagen.");
				} finally {
					u.value = !1;
				}
			}
		}
		async function O() {
			try {
				await navigator.clipboard.writeText(p.value);
			} catch {}
			m.value = !0;
		}
		return Ne(C), (e, i) => (Z(), V("div", Hx, [
			z("p", Ux, Y(t(T)("rechnungswerk", "Ein API-Schlüssel erlaubt anderen Programmen Zugriff auf diese RechnungsWerk-Instanz, ohne eine Anmeldung. Der Schlüssel wird nur einmalig angezeigt.")), 1),
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
					z("p", null, [z("code", Wx, Y(p.value), 1)]),
					z("p", null, Y(t(T)("rechnungswerk", "Bitte bewahre ihn sicher auf. Er wird nie wieder angezeigt.")), 1),
					J(t(W), { onClick: O }, {
						default: _(() => [K(Y(m.value ? t(T)("rechnungswerk", "Kopiert") : t(T)("rechnungswerk", "Kopieren")), 1)]),
						_: 1
					})
				]),
				_: 1
			})) : n("", !0),
			a.value.length > 0 ? (Z(), V("table", Gx, [z("thead", null, [z("tr", null, [
				z("th", null, Y(t(T)("rechnungswerk", "Name")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Schlüssel")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Rechte")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Anfragen pro Minute")), 1),
				z("th", null, Y(t(T)("rechnungswerk", "Zuletzt verwendet")), 1),
				z("th", null, [z("span", Kx, Y(t(T)("rechnungswerk", "Aktionen")), 1)])
			])]), z("tbody", null, [(Z(!0), V(D, null, X(a.value, (e) => (Z(), V("tr", {
				key: e.id,
				class: H({ "rw-api-keys__row--revoked": e.revokedAt !== null })
			}, [
				z("td", null, Y(e.name), 1),
				z("td", null, [z("code", null, Y(e.keyPrefix) + "…", 1)]),
				z("td", null, [z("span", qx, Y(b(e.scopes).join(", ")), 1)]),
				z("td", null, Y(e.rateLimit ?? t(T)("rechnungswerk", "Standard (60)")), 1),
				z("td", null, [e.revokedAt === null ? e.lastUsedAt ? (Z(), V(D, { key: 1 }, [K(Y(x(e.lastUsedAt)), 1)], 64)) : (Z(), V(D, { key: 2 }, [K(Y(t(T)("rechnungswerk", "nie")), 1)], 64)) : (Z(), V(D, { key: 0 }, [K(Y(t(T)("rechnungswerk", "Widerrufen")), 1)], 64))]),
				z("td", null, [e.revokedAt === null ? (Z(), N(t(W), {
					key: 0,
					variant: "tertiary",
					disabled: u.value,
					onClick: (t) => h.value = e.id
				}, {
					default: _(() => [K(Y(t(T)("rechnungswerk", "Widerrufen")), 1)]),
					_: 1
				}, 8, ["disabled", "onClick"])) : n("", !0)])
			], 2))), 128))])])) : (Z(), V("p", Jx, Y(t(T)("rechnungswerk", "Noch kein API-Schlüssel angelegt.")), 1)),
			J(t(W), {
				variant: "primary",
				disabled: u.value,
				onClick: i[0] ||= (e) => o.value = !0
			}, {
				default: _(() => [K(Y(t(T)("rechnungswerk", "API-Schlüssel anlegen")), 1)]),
				_: 1
			}, 8, ["disabled"]),
			o.value ? (Z(), N(t(Me), {
				key: 4,
				name: t(T)("rechnungswerk", "API-Schlüssel anlegen"),
				onClose: i[5] ||= (e) => o.value = !1
			}, {
				default: _(() => [z("div", Yx, [
					z("h3", null, Y(t(T)("rechnungswerk", "API-Schlüssel anlegen")), 1),
					z("label", Xx, [z("span", null, Y(t(T)("rechnungswerk", "Name")), 1), w(z("input", {
						ref_key: "nameInput",
						ref: g,
						"onUpdate:modelValue": i[1] ||= (e) => s.value = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: t(T)("rechnungswerk", "z. B. WerkPlus")
					}, null, 8, Zx), [[I, s.value]])]),
					z("div", Qx, [z("span", null, Y(t(T)("rechnungswerk", "Rechte")), 1), (Z(), V(D, null, X(r, (e) => z("label", {
						key: e,
						class: "rw-api-keys__scope"
					}, [w(z("input", {
						"onUpdate:modelValue": i[2] ||= (e) => c.value = e,
						type: "checkbox",
						value: e
					}, null, 8, $x), [[S, c.value]]), K(" " + Y(y(e)), 1)])), 64))]),
					z("label", eS, [z("span", null, Y(t(T)("rechnungswerk", "Anfragen pro Minute")), 1), w(z("input", {
						"onUpdate:modelValue": i[3] ||= (e) => l.value = e,
						class: "input",
						type: "number",
						min: "1",
						max: rS,
						placeholder: t(T)("rechnungswerk", "Standard: 60")
					}, null, 8, tS), [[I, l.value]])]),
					f.value ? (Z(), N(t($), {
						key: 0,
						type: "error",
						text: f.value
					}, null, 8, ["text"])) : n("", !0),
					z("div", nS, [J(t(W), { onClick: i[4] ||= (e) => o.value = !1 }, {
						default: _(() => [K(Y(t(T)("rechnungswerk", "Abbrechen")), 1)]),
						_: 1
					}), J(t(W), {
						variant: "primary",
						disabled: u.value || !ee.value,
						onClick: te
					}, {
						default: _(() => [K(Y(t(T)("rechnungswerk", "Anlegen")), 1)]),
						_: 1
					}, 8, ["disabled"])])
				])]),
				_: 1
			}, 8, ["name"])) : n("", !0),
			J(Pf, {
				open: h.value !== null,
				name: t(T)("rechnungswerk", "API-Schlüssel widerrufen"),
				message: t(T)("rechnungswerk", "Programme mit diesem Schlüssel verlieren sofort den Zugang. Widerrufen lässt sich ein Schlüssel nicht rückgängig machen. Fortfahren?"),
				confirmLabel: t(T)("rechnungswerk", "Widerrufen"),
				onClose: i[6] ||= (e) => h.value = null,
				onConfirm: E
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-5528b34f"]]), aS = [
	"1-5",
	"6-20",
	"21-50",
	"51-200",
	"200+"
], oS = () => ds("/license"), sS = (e, t) => ms("/license", {
	key: e,
	employeeBucket: t
}), cS = (e) => fs("/license/trial", { employeeBucket: e }), lS = () => fs("/license/refresh", {}), uS = () => hs("/license"), dS = { class: "rw-werkplus" }, fS = { class: "rw-hint" }, pS = { key: 0 }, mS = { key: 1 }, hS = {
	key: 5,
	class: "rw-werkplus__facts"
}, gS = { class: "rw-form-row" }, _S = { class: "rw-field" }, vS = ["placeholder"], yS = { class: "rw-field rw-field--narrow" }, bS = ["value"], xS = { class: "rw-hint" }, SS = { class: "rw-werkplus__actions" }, CS = { class: "rw-werkplus__privacy" }, wS = { class: "rw-werkplus__label" }, TS = { class: "rw-hint" }, ES = { class: "rw-hint" }, DS = { class: "rw-hint" }, OS = /*#__PURE__*/ Q(/* @__PURE__ */ U({
	__name: "WerkPlusSettings",
	setup(e) {
		let r = v(null), i = v(""), a = v(aS[0]), o = v(!1), s = v(""), c = v(""), l = v(""), u = v(""), d = v(!1), f = v(!1), p = ["TRIAL_ALREADY_USED"], m = L(() => r.value?.state === "valid" || r.value?.state === "grace"), h = L(() => r.value?.tier === "werkplus" ? "WerkPlus" : T("rechnungswerk", "Frei")), g = L(() => {
			let e = r.value;
			if (!e) return null;
			switch (e.state) {
				case "valid": return {
					type: "success",
					text: T("rechnungswerk", "WerkPlus ist aktiv.")
				};
				case "grace": return {
					type: "warning",
					text: T("rechnungswerk", "Die Lizenz ist abgelaufen und konnte noch nicht erneuert werden. Die Funktionen bleiben bis {date} erhalten.", { date: e.graceUntil ? ee(e.graceUntil) : "" })
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
		function ee(e) {
			return new Date(e).toLocaleDateString();
		}
		function y(e) {
			return new Date(e).toLocaleString();
		}
		function b(e, t = !1) {
			r.value = e, t || (a.value = e.employeeBucket);
		}
		async function x(e = !1) {
			try {
				b(await oS(), e), s.value = "";
			} catch (e) {
				s.value = e.message ?? T("rechnungswerk", "Lizenzstatus konnte nicht geladen werden.");
			}
		}
		async function S(e) {
			o.value = !0, c.value = "", l.value = "";
			try {
				b(await e()), i.value = "";
			} catch (e) {
				let { message: t, code: n } = e, r = t ?? T("rechnungswerk", "WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut.");
				n && p.includes(n) ? l.value = r : c.value = r, await x(!0);
			} finally {
				o.value = !1;
			}
		}
		function C() {
			return u.value = "", S(() => sS(i.value.trim(), a.value));
		}
		function te() {
			return f.value = !1, u.value = "", S(async () => {
				let e = await cS(a.value);
				return u.value = e.key, e.status;
			});
		}
		function E() {
			return S(lS);
		}
		function O() {
			return d.value = !1, u.value = "", S(uS);
		}
		return Ne(x), (e, p) => (Z(), V("div", dS, [
			z("p", fS, Y(t(T)("rechnungswerk", "Mit einem WerkPlus-Schlüssel schaltet RechnungsWerk zusätzliche Funktionen frei. Ohne Schlüssel bleibt alles, wie es ist.")), 1),
			s.value ? (Z(), N(t($), {
				key: 0,
				type: "error",
				text: s.value
			}, null, 8, ["text"])) : n("", !0),
			r.value ? (Z(), V(D, { key: 1 }, [
				g.value ? (Z(), N(t($), {
					key: 0,
					type: g.value.type,
					text: g.value.text
				}, null, 8, ["type", "text"])) : n("", !0),
				u.value ? (Z(), N(t($), {
					key: 1,
					type: "success",
					class: "rw-werkplus__trial-key"
				}, {
					default: _(() => [
						m.value ? (Z(), V("p", pS, Y(t(T)("rechnungswerk", "Der Testzeitraum läuft. Das ist dein WerkPlus-Schlüssel:")), 1)) : (Z(), V("p", mS, Y(t(T)("rechnungswerk", "Der Testzeitraum ist gestartet, die Lizenz konnte aber noch nicht geprüft werden. Mit „Jetzt prüfen“ versuchst du es erneut. Das ist dein WerkPlus-Schlüssel:")), 1)),
						z("p", null, [z("code", null, Y(u.value), 1)]),
						z("p", null, Y(t(T)("rechnungswerk", "Bitte bewahre ihn sicher auf. Er ist hinterlegt, wird aber nur jetzt vollständig angezeigt.")), 1)
					]),
					_: 1
				})) : n("", !0),
				l.value ? (Z(), N(t($), {
					key: 2,
					type: "info",
					text: l.value
				}, null, 8, ["text"])) : n("", !0),
				c.value ? (Z(), N(t($), {
					key: 3,
					type: "error",
					text: c.value
				}, null, 8, ["text"])) : r.value.lastError ? (Z(), N(t($), {
					key: 4,
					type: "warning",
					text: r.value.lastError.message
				}, null, 8, ["text"])) : n("", !0),
				r.value.keySet ? (Z(), V("dl", hS, [
					z("dt", null, Y(t(T)("rechnungswerk", "Tarif")), 1),
					z("dd", null, Y(h.value), 1),
					r.value.expiresAt ? (Z(), V(D, { key: 0 }, [z("dt", null, Y(t(T)("rechnungswerk", "Gültig bis")), 1), z("dd", null, Y(ee(r.value.expiresAt)), 1)], 64)) : n("", !0),
					z("dt", null, Y(t(T)("rechnungswerk", "Letzte erfolgreiche Prüfung")), 1),
					z("dd", null, Y(r.value.lastCheckAt ? y(r.value.lastCheckAt) : t(T)("rechnungswerk", "noch keine")), 1),
					z("dt", null, Y(t(T)("rechnungswerk", "Schlüssel")), 1),
					z("dd", null, Y(r.value.keyHint), 1)
				])) : n("", !0),
				z("div", gS, [z("label", _S, [z("span", null, Y(t(T)("rechnungswerk", "WerkPlus-Schlüssel")), 1), w(z("input", {
					"onUpdate:modelValue": p[0] ||= (e) => i.value = e,
					class: "rw-input",
					type: "text",
					autocomplete: "off",
					spellcheck: "false",
					placeholder: r.value.keySet ? t(T)("rechnungswerk", "gespeichert, leer lassen") : "wp_…"
				}, null, 8, vS), [[I, i.value]])]), z("label", yS, [z("span", null, Y(t(T)("rechnungswerk", "Mitarbeitende")), 1), w(z("select", {
					"onUpdate:modelValue": p[1] ||= (e) => a.value = e,
					class: "rw-input"
				}, [(Z(!0), V(D, null, X(t(aS), (e) => (Z(), V("option", {
					key: e,
					value: e
				}, Y(e), 9, bS))), 128))], 512), [[Se, a.value]])])]),
				z("p", xS, Y(t(T)("rechnungswerk", "Übertragen wird nur die Größenklasse, keine Mitarbeiterzahl.")), 1),
				z("div", SS, [
					J(t(W), {
						variant: "primary",
						disabled: o.value || !i.value.trim() && !r.value.keySet,
						onClick: C
					}, {
						default: _(() => [K(Y(r.value.keySet ? t(T)("rechnungswerk", "Speichern und prüfen") : t(T)("rechnungswerk", "Schlüssel prüfen und speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					r.value.keySet ? n("", !0) : (Z(), N(t(W), {
						key: 0,
						disabled: o.value,
						onClick: p[2] ||= (e) => f.value = !0
					}, {
						default: _(() => [K(Y(t(T)("rechnungswerk", "30 Tage testen")), 1)]),
						_: 1
					}, 8, ["disabled"])),
					r.value.keySet ? (Z(), N(t(W), {
						key: 1,
						disabled: o.value,
						onClick: E
					}, {
						default: _(() => [K(Y(t(T)("rechnungswerk", "Jetzt prüfen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0),
					r.value.keySet ? (Z(), N(t(W), {
						key: 2,
						variant: "tertiary",
						disabled: o.value,
						onClick: p[3] ||= (e) => d.value = !0
					}, {
						default: _(() => [K(Y(t(T)("rechnungswerk", "Schlüssel entfernen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : n("", !0)
				]),
				z("div", CS, [
					z("span", wS, Y(t(T)("rechnungswerk", "Was an WerkPlus übertragen wird")), 1),
					z("p", TS, Y(t(T)("rechnungswerk", "Die Kennung dieser Installation, die Version von RechnungsWerk, die Größenklasse und, sobald vorhanden, der Schlüssel. Nicht übertragen werden Rechnungen, Kunden oder andere Belegdaten, Personendaten, Nextcloud-Benutzer oder Dateien.")), 1),
					z("p", ES, Y(t(T)("rechnungswerk", "Die Lizenz wird auf diesem Server geprüft. Ist WerkPlus nicht erreichbar, arbeitet RechnungsWerk normal weiter.")), 1),
					z("p", DS, [K(Y(t(T)("rechnungswerk", "Kennung dieser Installation:")) + " ", 1), z("code", null, Y(r.value.instanceUuid), 1)])
				])
			], 64)) : n("", !0),
			J(Pf, {
				open: f.value,
				name: t(T)("rechnungswerk", "WerkPlus 30 Tage testen"),
				message: t(T)("rechnungswerk", "Der Testzeitraum läuft 30 Tage, braucht keine Zahlungsdaten und ist je Installation nur einmal möglich. Jetzt starten?"),
				confirmLabel: t(T)("rechnungswerk", "Testzeitraum starten"),
				onClose: p[4] ||= (e) => f.value = !1,
				onConfirm: te
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			J(Pf, {
				open: d.value,
				name: t(T)("rechnungswerk", "WerkPlus-Schlüssel entfernen"),
				message: t(T)("rechnungswerk", "RechnungsWerk arbeitet danach im freien Umfang. Den Schlüssel kannst du jederzeit wieder eintragen. Fortfahren?"),
				confirmLabel: t(T)("rechnungswerk", "Entfernen"),
				onClose: p[5] ||= (e) => d.value = !1,
				onConfirm: O
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-db5333d3"]]);
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
// src/utils/invoiceNumber.ts
function NS(e, t, n, r, i) {
	return e.replace(/\{YYYY\}/g, String(n).padStart(4, "0")).replace(/\{YY\}/g, String(n % 100).padStart(2, "0")).replace(/\{MM\}/g, String(r).padStart(2, "0")).replace(/\{DD\}/g, String(i).padStart(2, "0")).replace(/\{(#+)\}/g, (e, n) => String(t).padStart(n.length, "0"));
}
// src/utils/fileName.ts
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
// src/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
var IS = { class: "rw-view rw-view--narrow" }, LS = { class: "rw-settings-title" }, RS = {
	key: 0,
	class: "rw-settingspage"
}, zS = { class: "rw-settingspage__content" }, BS = { class: "rw-section" }, VS = { class: "rw-field" }, HS = { class: "rw-field" }, US = { class: "rw-form-row" }, WS = { class: "rw-field" }, GS = { class: "rw-field" }, KS = { class: "rw-field" }, qS = ["placeholder"], JS = { class: "rw-form-row" }, YS = { class: "rw-field" }, XS = { class: "rw-field" }, ZS = { class: "rw-field" }, QS = { class: "rw-hint" }, $S = { class: "rw-section" }, eC = { class: "rw-form-row" }, tC = { class: "rw-field" }, nC = { class: "rw-field" }, rC = { class: "rw-field" }, iC = { class: "rw-hint" }, aC = { class: "rw-section" }, oC = { class: "rw-field rw-field--inline" }, sC = { class: "rw-accent" }, cC = ["aria-label"], lC = { class: "rw-field" }, uC = { class: "rw-accent-preview" }, dC = { class: "rw-hint" }, fC = {
	key: 0,
	class: "rw-hint"
}, pC = { class: "rw-field" }, mC = { class: "rw-logo" }, hC = ["src", "alt"], gC = {
	key: 1,
	class: "rw-logo__empty"
}, _C = { class: "rw-logo__actions" }, vC = { class: "rw-hint" }, yC = { class: "rw-section" }, bC = { class: "rw-field" }, xC = { class: "rw-hint" }, SC = { class: "rw-field" }, CC = { class: "rw-hint" }, wC = { class: "rw-field rw-reset-mode" }, TC = { class: "rw-hint" }, EC = { class: "rw-section" }, DC = { class: "rw-field" }, OC = { class: "rw-hint" }, kC = { class: "rw-field rw-reset-mode" }, AC = { class: "rw-hint" }, jC = { class: "rw-section" }, MC = { class: "rw-field" }, NC = { class: "rw-hint" }, PC = { class: "rw-section" }, FC = {
	key: 0,
	class: "rw-field"
}, IC = ["placeholder"], LC = { class: "rw-hint" }, RC = {
	key: 1,
	class: "rw-field tax-rate-field"
}, zC = ["value"], BC = { class: "rw-section" }, VC = { class: "rw-field rw-field--narrow" }, HC = { class: "rw-hint" }, UC = { class: "rw-section" }, WC = { class: "rw-field" }, GC = { class: "rw-hint" }, KC = { class: "rw-form-row" }, qC = { class: "rw-field" }, JC = { class: "rw-field" }, YC = { class: "rw-section" }, XC = { class: "rw-field" }, ZC = { class: "rw-archive-folder" }, QC = {
	key: 0,
	class: "rw-archive-folder__path"
}, $C = {
	key: 1,
	class: "rw-archive-folder__empty"
}, ew = { class: "rw-field" }, tw = ["placeholder"], nw = { class: "rw-hint" }, rw = { class: "rw-section" }, iw = { class: "rw-hint" }, aw = { class: "rw-form-row" }, ow = { class: "rw-field" }, sw = { class: "rw-field rw-field--narrow" }, cw = { class: "rw-field rw-field--narrow" }, lw = { value: "none" }, uw = { class: "rw-form-row" }, dw = { class: "rw-field" }, fw = { class: "rw-field" }, pw = ["placeholder"], mw = { class: "smtp-test" }, hw = { class: "rw-section" }, gw = { class: "rw-hint" }, _w = { class: "rw-form-row" }, vw = { class: "rw-field" }, yw = { class: "rw-field rw-field--narrow" }, bw = { class: "rw-field rw-field--narrow" }, xw = { class: "rw-form-row" }, Sw = { class: "rw-field" }, Cw = { class: "rw-field" }, ww = ["placeholder"], Tw = { class: "rw-section" }, Ew = { class: "rw-hint" }, Dw = { class: "rw-section" }, Ow = { class: "rw-hint rw-access-intro" }, kw = { class: "rw-access-group" }, Aw = { class: "rw-access-label" }, jw = { class: "rw-hint rw-access-desc" }, Mw = { class: "rw-access-group" }, Nw = { class: "rw-access-label" }, Pw = { class: "rw-hint rw-access-desc" }, Fw = { class: "rw-section" }, Iw = { class: "rw-section" }, Lw = { class: "rw-action-bar" }, Rw = [
	{
		path: "/",
		redirect: { name: "invoices" }
	},
	{
		path: "/invoices",
		name: "invoices",
		component: Bu
	},
	{
		path: "/invoices/new",
		name: "invoice-new",
		component: _h
	},
	{
		path: "/invoices/:id",
		name: "invoice-detail",
		component: _h,
		props: !0
	},
	{
		path: "/quotes",
		name: "quotes",
		component: Bh
	},
	{
		path: "/quotes/new",
		name: "quote-new",
		component: _h
	},
	{
		path: "/quotes/:id",
		name: "quote-detail",
		component: _h,
		props: !0
	},
	{
		path: "/customers",
		name: "customers",
		component: G_
	},
	{
		path: "/products",
		name: "products",
		component: pg
	},
	{
		path: "/text-snippets",
		name: "text-snippets",
		component: Ug
	},
	{
		path: "/me",
		name: "my-contact",
		component: ov
	},
	{
		path: "/settings",
		name: "settings",
		component: /* @__PURE__ */ Q(/* @__PURE__ */ U({
			__name: "SettingsView",
			setup(e) {
				let r = ot(), i = Ll(), a = v(null), o = L(() => !!a.value?.vatId?.trim() || !!a.value?.registerNumber?.trim()), s = L(() => [
					{
						label: T("rechnungswerk", "Firma"),
						items: [
							{
								key: "firma",
								label: T("rechnungswerk", "Firma"),
								icon: mb
							},
							{
								key: "bank",
								label: T("rechnungswerk", "Bankverbindung"),
								icon: bb
							},
							{
								key: "branding",
								label: T("rechnungswerk", "Branding"),
								icon: Eb
							}
						]
					},
					{
						label: T("rechnungswerk", "Belege"),
						items: [
							{
								key: "rechnungsnummer",
								label: T("rechnungswerk", "Rechnungsnummer"),
								icon: Mo
							},
							{
								key: "angebotsnummer",
								label: T("rechnungswerk", "Angebotsnummer"),
								icon: Mb
							},
							{
								key: "dateiname",
								label: T("rechnungswerk", "PDF-Dateiname"),
								icon: La
							},
							{
								key: "texte",
								label: T("rechnungswerk", "Standardtexte"),
								icon: Rb
							}
						]
					},
					{
						label: T("rechnungswerk", "Buchhaltung"),
						items: [{
							key: "steuer",
							label: T("rechnungswerk", "Steuer"),
							icon: Wb
						}, {
							key: "zahlung",
							label: T("rechnungswerk", "Zahlung"),
							icon: Xb
						}]
					},
					{
						label: T("rechnungswerk", "Versand"),
						items: [
							{
								key: "versand",
								label: T("rechnungswerk", "Versand"),
								icon: nx
							},
							{
								key: "smtp",
								label: T("rechnungswerk", "Eigenes SMTP-Konto"),
								icon: cx
							},
							{
								key: "datev",
								label: T("rechnungswerk", "DATEV-Rückmeldung"),
								icon: mx
							}
						]
					},
					{
						label: T("rechnungswerk", "Ablage & Zugriff"),
						items: [{
							key: "ablage",
							label: T("rechnungswerk", "Ablage in Nextcloud"),
							icon: bx
						}, {
							key: "zugriff",
							label: T("rechnungswerk", "Zugriff & Administration"),
							icon: Ex
						}]
					},
					{
						label: T("rechnungswerk", "Lizenz"),
						items: [{
							key: "werkplus",
							label: T("rechnungswerk", "WerkPlus"),
							icon: Mx
						}, {
							key: "apikeys",
							label: T("rechnungswerk", "API-Schlüssel"),
							icon: Rx
						}]
					}
				]), c = v("firma");
				function l() {
					r.push({ name: "text-snippets" });
				}
				let u = v(null), d = v(!1), f = v(""), p = v(null);
				async function m(e) {
					f.value = e, await qe(), p.value?.scrollIntoView({
						behavior: "smooth",
						block: "center"
					});
				}
				let h = v(!1), g = v(!1), ee = v(!1), b = v(!1), x = v(!1), S = v(0), C = v((/* @__PURE__ */ new Date()).getFullYear()), te = v((/* @__PURE__ */ new Date()).getMonth() + 1), E = v((/* @__PURE__ */ new Date()).getDate()), O = v(null), ne = v(0), k = v(null), re = v(null), ie = L(() => a.value?.accentColor || "#2c3e50"), ae = L(() => ({
					background: ie.value,
					color: jS(ie.value)
				})), oe = L(() => MS(ie.value));
				function A(e) {
					a.value && (a.value.accentColor = e ?? null);
				}
				let j = v([]), se = v([]), ce = v([]), le = v(!1), ue = v(!1), de = v(""), M = null, fe = v(""), pe = v(""), me = v(!1), P = v(""), he = v(!1), F = v(!1), ge = L(() => a.value?.logoFileId ? Pl(a.value.logoFileId) : ""), _e = L(() => le.value ? T("rechnungswerk", "Suche läuft\xA0…") : de.value.trim().length < 2 ? T("rechnungswerk", "Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.") : T("rechnungswerk", "Keine Treffer.")), ve = L(() => a.value?.numberResetMode === "continuous" || C.value === O.value ? S.value : 0), ye = L(() => ve.value + 1), be = L(() => {
					if (!a.value) return "";
					let e = re.value && re.value > 0 ? re.value : ye.value;
					return NS(a.value.numberFormat || "RE-{YYYY}-{####}", e, C.value, te.value, E.value);
				}), xe = L(() => {
					if (!a.value) return "";
					let e = a.value.quoteNumberResetMode === "continuous" || C.value === k.value ? ne.value : 0;
					return NS(a.value.quoteNumberFormat || "AN-{YYYY}-{####}", e + 1, C.value, te.value, E.value);
				}), Ce = L(() => a.value ? FS(a.value.fileNameFormat || "{nummer}", {
					nummer: be.value,
					date: /* @__PURE__ */ new Date(),
					kunde: "Muster GmbH",
					typ: "Rechnung"
				}) : "");
				Ne(async () => {
					try {
						await i.fetch(), Ee();
						let e = await Ns();
						j.value = we(e.admins), se.value = we(e.users);
					} catch (e) {
						Ue(e, T("rechnungswerk", "Laden fehlgeschlagen"));
					}
				});
				function we(e) {
					return e.map((e) => ({
						id: e,
						type: e.startsWith("group:") ? "group" : "user",
						displayName: e.replace(/^(user|group):/, "")
					}));
				}
				function Te(e) {
					de.value = e, M && clearTimeout(M), e.trim().length < 2 ? (ce.value = [], le.value = !1) : (le.value = !0, M = setTimeout(async () => {
						try {
							ce.value = await Fs(e.trim());
						} catch {
							ce.value = [];
						} finally {
							le.value = !1;
						}
					}, 300));
				}
				function Ee() {
					let e = i.settings;
					if (e) {
						S.value = e.numberCounter, O.value = e.numberCounterYear, ne.value = e.quoteNumberCounter, k.value = e.quoteNumberCounterYear;
						{
							let t = e.numberResetMode === "continuous" || C.value === e.numberCounterYear ? e.numberCounter : 0;
							re.value = t + 1;
						}
						u.value = e.archiveFolderPath ?? null, a.value = {
							companyName: e.companyName,
							companyAddress: e.companyAddress,
							vatId: e.vatId,
							taxNumber: e.taxNumber,
							registerNumber: e.registerNumber,
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
				function De(e) {
					a.value && (e ? h.value = !0 : a.value.smallBusiness = !1);
				}
				function Oe() {
					h.value = !1, a.value && (a.value.smallBusiness = !0);
				}
				function ke(e) {
					a.value && (e ? g.value = !0 : a.value.datevAutoSend = !1);
				}
				function Ae() {
					g.value = !1, a.value && (a.value.datevAutoSend = !0);
				}
				function je(e) {
					a.value && (e ? ee.value = !0 : a.value.archiveEnabled = !1);
				}
				function R() {
					ee.value = !1, a.value && (a.value.archiveEnabled = !0);
				}
				function Me(e) {
					a.value && e !== a.value.numberResetMode && (e === "continuous" ? b.value = !0 : a.value.numberResetMode = "yearly");
				}
				function Pe() {
					b.value = !1, a.value && (a.value.numberResetMode = "continuous");
				}
				function Fe(e) {
					a.value && e !== a.value.quoteNumberResetMode && (e === "continuous" ? x.value = !0 : a.value.quoteNumberResetMode = "yearly");
				}
				function Ie() {
					x.value = !1, a.value && (a.value.quoteNumberResetMode = "continuous");
				}
				async function Le() {
					let e;
					try {
						e = await pv(T("rechnungswerk", "Zielordner für die Ablage wählen")).setMultiSelect(!1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories(!0).addButton({
							label: T("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof uv) return;
						Ue(e, T("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						d.value = !0, f.value = "";
						try {
							let t = await Fl(e);
							a.value && (a.value.archiveFolderId = t.archiveFolderId), u.value = t.archiveFolderPath;
						} catch (e) {
							Ue(e, T("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						} finally {
							d.value = !1;
						}
					}
				}
				async function Re() {
					d.value = !0, f.value = "";
					try {
						await Il(), a.value && (a.value.archiveFolderId = null, a.value.archiveEnabled = !1), u.value = null;
					} catch (e) {
						Ue(e, T("rechnungswerk", "Zielordner konnte nicht entfernt werden."));
					} finally {
						d.value = !1;
					}
				}
				async function ze() {
					let e;
					try {
						e = await pv(T("rechnungswerk", "Firmenlogo wählen")).setMultiSelect(!1).setMimeTypeFilter([
							"image/png",
							"image/jpeg",
							"image/gif"
						]).addButton({
							label: T("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof uv) return;
						Ue(e, T("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						F.value = !0, f.value = "";
						try {
							let t = await Ml(e);
							a.value && (a.value.logoFileId = t.logoFileId);
						} catch (e) {
							Ue(e, T("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						} finally {
							F.value = !1;
						}
					}
				}
				async function Be() {
					F.value = !0, f.value = "";
					try {
						await Nl(), a.value && (a.value.logoFileId = null);
					} catch (e) {
						Ue(e, T("rechnungswerk", "Logo konnte nicht entfernt werden."));
					} finally {
						F.value = !1;
					}
				}
				async function Ve() {
					if (!a.value) return;
					f.value = "";
					let e = (a.value.numberFormat || "").trim();
					if (a.value.numberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(e)) {
						m(T("rechnungswerk", "Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
						return;
					}
					let t = re.value;
					if (t == null || !Number.isInteger(t) || t < 1) {
						m(T("rechnungswerk", "Die nächste Rechnungsnummer muss eine ganze Zahl ab 1 sein."));
						return;
					}
					if (t < ye.value) {
						m(T("rechnungswerk", "Die nächste Rechnungsnummer muss mindestens {min} sein, da bereits die Nummer {issued} vergeben wurde.", {
							min: ye.value,
							issued: ve.value
						}));
						return;
					}
					let n = (a.value.quoteNumberFormat || "").trim();
					if (a.value.quoteNumberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(n)) {
						m(T("rechnungswerk", "Bei jährlichem Angebots-Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
						return;
					}
					let r = (a.value.fileNameFormat || "").trim();
					if (r !== "" && !r.includes("{nummer}")) {
						m(T("rechnungswerk", "Das Dateinamen-Schema muss den Platzhalter {nummer} enthalten, damit Dateinamen eindeutig bleiben."));
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
							m(T("rechnungswerk", "Bitte eine gültige E-Mail-Adresse angeben ({field}).", { field: t }));
							return;
						}
					}
					ue.value = !0;
					try {
						let e = { ...a.value };
						t > ye.value && (e.numberCounter = t - 1), delete e.logoFileId, delete e.archiveFolderId, fe.value !== "" && (e.smtpPassword = fe.value), pe.value !== "" && (e.imapPassword = pe.value);
						try {
							await i.save(e);
						} catch (e) {
							Ue(e, T("rechnungswerk", "Speichern der Einstellungen fehlgeschlagen."));
							return;
						}
						try {
							await Ps({
								admins: j.value.map((e) => e.id),
								users: se.value.map((e) => e.id)
							});
						} catch (e) {
							Ue(e, T("rechnungswerk", "Einstellungen gespeichert, aber die Zugriffsrechte konnten nicht gespeichert werden. Bitte erneut speichern."));
							return;
						}
						fe.value = "", pe.value = "", Ee();
					} finally {
						ue.value = !1;
					}
				}
				async function He() {
					if (a.value?.smtpHost) {
						me.value = !0, P.value = "";
						try {
							await kl({
								host: a.value.smtpHost,
								port: a.value.smtpPort ?? 587,
								security: a.value.smtpSecurity || "starttls",
								user: a.value.smtpUser ?? "",
								password: fe.value
							}), he.value = !0, P.value = T("rechnungswerk", "Verbindung erfolgreich.");
						} catch (e) {
							he.value = !1, P.value = e.message ?? T("rechnungswerk", "Verbindung fehlgeschlagen.");
						} finally {
							me.value = !1;
						}
					}
				}
				function Ue(e, t) {
					m(e.message ?? t), console.error("[rechnungswerk] settings:", e);
				}
				return (e, r) => (Z(), V("div", IS, [
					z("h2", LS, Y(t(T)("rechnungswerk", "Einstellungen")), 1),
					z("div", {
						ref_key: "errorAnchor",
						ref: p
					}, [f.value ? (Z(), N(t($), {
						key: 0,
						type: "error",
						text: f.value
					}, null, 8, ["text"])) : n("", !0)], 512),
					a.value ? (Z(), V("div", RS, [J(cb, {
						groups: s.value,
						modelValue: c.value,
						ariaLabel: t(T)("rechnungswerk", "Einstellungs-Navigation"),
						"onUpdate:modelValue": r[0] ||= (e) => c.value = e
					}, null, 8, [
						"groups",
						"modelValue",
						"ariaLabel"
					]), z("div", zS, [
						w(z("section", BS, [
							z("h3", null, Y(t(T)("rechnungswerk", "Firma")), 1),
							z("label", VS, [z("span", null, Y(t(T)("rechnungswerk", "Firmenname")), 1), w(z("input", {
								"onUpdate:modelValue": r[1] ||= (e) => a.value.companyName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.companyName]])]),
							z("label", HS, [z("span", null, Y(t(T)("rechnungswerk", "Adresse")), 1), w(z("textarea", {
								"onUpdate:modelValue": r[2] ||= (e) => a.value.companyAddress = e,
								class: "rw-input",
								rows: "3"
							}, null, 512), [[I, a.value.companyAddress]])]),
							z("div", US, [z("label", WS, [z("span", null, Y(t(T)("rechnungswerk", "USt-IdNr.")), 1), w(z("input", {
								"onUpdate:modelValue": r[3] ||= (e) => a.value.vatId = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.vatId]])]), z("label", GS, [z("span", null, Y(t(T)("rechnungswerk", "Steuernummer")), 1), w(z("input", {
								"onUpdate:modelValue": r[4] ||= (e) => a.value.taxNumber = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.taxNumber]])])]),
							z("label", KS, [z("span", null, Y(t(T)("rechnungswerk", "Registernummer")), 1), w(z("input", {
								"onUpdate:modelValue": r[5] ||= (e) => a.value.registerNumber = e,
								class: "rw-input",
								type: "text",
								placeholder: t(T)("rechnungswerk", "z. B. HRB 12345, Amtsgericht Stuttgart")
							}, null, 8, qS), [[I, a.value.registerNumber]])]),
							o.value ? n("", !0) : (Z(), N(t($), {
								key: 0,
								type: "warning",
								heading: t(T)("rechnungswerk", "Deine E-Rechnungen lösen bei Prüfprogrammen einen Fehler aus."),
								text: t(T)("rechnungswerk", "Ohne USt-IdNr. oder Registernummer (z. B. Handelsregister) meldet die Prüfung nach EN 16931 einen Fehler. Steuerlich ist das unschädlich, die Steuernummer reicht als Pflichtangabe. Manche Unternehmen weisen solche Rechnungen aber automatisch zurück. Trage für Rechnungen an Unternehmen deshalb eines der beiden Felder ein. Eine USt-IdNr. kannst du kostenlos beim Bundeszentralamt für Steuern beantragen, auch als Kleinunternehmer.")
							}, null, 8, ["heading", "text"])),
							z("div", JS, [
								z("label", YS, [z("span", null, Y(t(T)("rechnungswerk", "Ansprechpartner")), 1), w(z("input", {
									"onUpdate:modelValue": r[6] ||= (e) => a.value.contactPerson = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[I, a.value.contactPerson]])]),
								z("label", XS, [z("span", null, Y(t(T)("rechnungswerk", "Telefon")), 1), w(z("input", {
									"onUpdate:modelValue": r[7] ||= (e) => a.value.contactPhone = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[I, a.value.contactPhone]])]),
								z("label", ZS, [z("span", null, Y(t(T)("rechnungswerk", "Kontakt-E-Mail")), 1), w(z("input", {
									"onUpdate:modelValue": r[8] ||= (e) => a.value.contactEmail = e,
									class: "rw-input",
									type: "email"
								}, null, 512), [[I, a.value.contactEmail]])])
							]),
							z("p", QS, Y(t(T)("rechnungswerk", "Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).")), 1)
						], 512), [[y, c.value === "firma"]]),
						w(z("section", $S, [
							z("h3", null, Y(t(T)("rechnungswerk", "Bankverbindung")), 1),
							z("div", eC, [z("label", tC, [z("span", null, Y(t(T)("rechnungswerk", "IBAN")), 1), w(z("input", {
								"onUpdate:modelValue": r[9] ||= (e) => a.value.iban = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.iban]])]), z("label", nC, [z("span", null, Y(t(T)("rechnungswerk", "BIC")), 1), w(z("input", {
								"onUpdate:modelValue": r[10] ||= (e) => a.value.bic = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.bic]])])]),
							z("label", rC, [z("span", null, Y(t(T)("rechnungswerk", "Bankname")), 1), w(z("input", {
								"onUpdate:modelValue": r[11] ||= (e) => a.value.bankName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.bankName]])]),
							J(t(Ke), {
								type: "switch",
								modelValue: a.value.girocodeEnabled,
								disabled: !a.value.iban && !a.value.girocodeEnabled,
								"onUpdate:modelValue": r[12] ||= (e) => {
									a.value && (a.value.girocodeEnabled = e);
								}
							}, {
								default: _(() => [K(Y(t(T)("rechnungswerk", "Girocode (Bezahl-QR-Code) auf Rechnungen anzeigen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							z("p", iC, Y(t(T)("rechnungswerk", "Druckt einen EPC-QR-Code neben die Bankverbindung: Kunden scannen ihn mit der Banking-App, Empfänger, Betrag und Verwendungszweck sind vorausgefüllt. Erscheint nur auf Rechnungen mit positivem Betrag, nicht auf Stornobelegen.")), 1)
						], 512), [[y, c.value === "bank"]]),
						w(z("section", aC, [
							z("h3", null, Y(t(T)("rechnungswerk", "Branding")), 1),
							z("div", oC, [z("span", null, Y(t(T)("rechnungswerk", "Akzentfarbe")), 1), z("div", sC, [J(t(ib), {
								modelValue: ie.value,
								advancedFields: "",
								"onUpdate:modelValue": A
							}, {
								default: _(() => [z("button", {
									type: "button",
									class: "rw-accent__trigger",
									"aria-label": t(T)("rechnungswerk", "Akzentfarbe") + ": " + ie.value.toUpperCase(),
									style: dt(ae.value)
								}, Y(ie.value.toUpperCase()), 13, cC)]),
								_: 1
							}, 8, ["modelValue"]), a.value.accentColor ? (Z(), N(t(W), {
								key: 0,
								variant: "tertiary",
								onClick: r[13] ||= (e) => a.value.accentColor = null
							}, {
								default: _(() => [K(Y(t(T)("rechnungswerk", "Zurücksetzen")), 1)]),
								_: 1
							})) : n("", !0)])]),
							z("div", lC, [
								z("table", uC, [z("thead", null, [z("tr", { style: dt(ae.value) }, [...r[43] ||= [
									z("th", null, "Beschreibung", -1),
									z("th", { class: "num" }, "Menge", -1),
									z("th", { class: "num" }, "Einzelpreis", -1),
									z("th", { class: "num" }, "Betrag", -1)
								]], 4)]), r[44] ||= z("tbody", null, [z("tr", null, [
									z("td", null, "Beratungsleistung"),
									z("td", { class: "num" }, "2"),
									z("td", { class: "num" }, "95,00 €"),
									z("td", { class: "num" }, "190,00 €")
								])], -1)]),
								z("p", dC, Y(t(T)("rechnungswerk", "So erscheint die Kopfzeile der Positionstabelle auf der Rechnung.")), 1),
								oe.value ? (Z(), V("p", fC, Y(t(T)("rechnungswerk", "Auf dieser Farbe wäre weiße Schrift zu blass, deshalb steht sie schwarz auf der Rechnung. Die Farbe selbst bleibt unverändert.")), 1)) : n("", !0)
							]),
							z("div", pC, [
								z("span", null, Y(t(T)("rechnungswerk", "Firmenlogo")), 1),
								z("div", mC, [a.value.logoFileId ? (Z(), V("img", {
									key: 0,
									src: ge.value,
									alt: t(T)("rechnungswerk", "Firmenlogo"),
									class: "rw-logo__preview"
								}, null, 8, hC)) : (Z(), V("span", gC, Y(t(T)("rechnungswerk", "Kein Logo gewählt")), 1)), z("div", _C, [J(t(W), {
									disabled: F.value,
									onClick: ze
								}, {
									default: _(() => [K(Y(a.value.logoFileId ? t(T)("rechnungswerk", "Logo ändern") : t(T)("rechnungswerk", "Logo wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]), a.value.logoFileId ? (Z(), N(t(W), {
									key: 0,
									variant: "tertiary",
									disabled: F.value,
									onClick: Be
								}, {
									default: _(() => [K(Y(t(T)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : n("", !0)])]),
								z("p", vC, Y(t(T)("rechnungswerk", "Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.")), 1)
							])
						], 512), [[y, c.value === "branding"]]),
						w(z("section", yC, [
							z("h3", null, Y(t(T)("rechnungswerk", "Rechnungsnummer")), 1),
							z("label", bC, [z("span", null, Y(t(T)("rechnungswerk", "Format")), 1), w(z("input", {
								"onUpdate:modelValue": r[14] ||= (e) => a.value.numberFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.numberFormat]])]),
							z("p", xC, [
								K(Y(t(T)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								r[45] ||= z("br", null, null, -1),
								K(" " + Y(t(T)("rechnungswerk", "Vorschau: {preview}", { preview: be.value })), 1)
							]),
							z("label", SC, [z("span", null, Y(t(T)("rechnungswerk", "Nächste Rechnungsnummer")), 1), w(z("input", {
								"onUpdate:modelValue": r[15] ||= (e) => re.value = e,
								class: "rw-input",
								type: "number",
								min: "1",
								step: "1"
							}, null, 512), [[
								I,
								re.value,
								void 0,
								{ number: !0 }
							]])]),
							z("p", CC, Y(t(T)("rechnungswerk", "Die laufende Nummer der nächsten Rechnung. Zum Einstieg in eine bestehende Nummernfolge hier den gewünschten Wert setzen. Nummern lassen sich nur vorwärts setzen, nie unter eine bereits vergebene.")), 1),
							z("div", wC, [
								z("span", null, Y(t(T)("rechnungswerk", "Nummernkreis")), 1),
								J(t(Ke), {
									type: "radio",
									name: "rw-reset-mode",
									value: "yearly",
									modelValue: a.value.numberResetMode,
									"onUpdate:modelValue": Me
								}, {
									default: _(() => [K(Y(t(T)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								J(t(Ke), {
									type: "radio",
									name: "rw-reset-mode",
									value: "continuous",
									modelValue: a.value.numberResetMode,
									"onUpdate:modelValue": Me
								}, {
									default: _(() => [K(Y(t(T)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							z("p", TC, Y(t(T)("rechnungswerk", "Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.")), 1)
						], 512), [[y, c.value === "rechnungsnummer"]]),
						w(z("section", EC, [
							z("h3", null, Y(t(T)("rechnungswerk", "Angebotsnummer")), 1),
							z("label", DC, [z("span", null, Y(t(T)("rechnungswerk", "Format")), 1), w(z("input", {
								"onUpdate:modelValue": r[16] ||= (e) => a.value.quoteNumberFormat = e,
								class: "rw-input",
								type: "text",
								placeholder: "AN-{YYYY}-{####}"
							}, null, 512), [[I, a.value.quoteNumberFormat]])]),
							z("p", OC, [
								K(Y(t(T)("rechnungswerk", "Eigener, von den Rechnungen unabhängiger Nummernkreis. Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								r[46] ||= z("br", null, null, -1),
								K(" " + Y(t(T)("rechnungswerk", "Vorschau: {preview}", { preview: xe.value })), 1)
							]),
							z("div", kC, [
								z("span", null, Y(t(T)("rechnungswerk", "Nummernkreis")), 1),
								J(t(Ke), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "yearly",
									modelValue: a.value.quoteNumberResetMode,
									"onUpdate:modelValue": Fe
								}, {
									default: _(() => [K(Y(t(T)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								J(t(Ke), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "continuous",
									modelValue: a.value.quoteNumberResetMode,
									"onUpdate:modelValue": Fe
								}, {
									default: _(() => [K(Y(t(T)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							z("p", AC, Y(t(T)("rechnungswerk", "Angebote haben keine gesetzliche Nummernkreis-Pflicht; Lücken sind erlaubt. Bei „Jährlich zurücksetzen“ muss das Format dennoch eine Jahreskomponente enthalten.")), 1)
						], 512), [[y, c.value === "angebotsnummer"]]),
						w(z("section", jC, [
							z("h3", null, Y(t(T)("rechnungswerk", "PDF-Dateiname")), 1),
							z("label", MC, [z("span", null, Y(t(T)("rechnungswerk", "Schema")), 1), w(z("input", {
								"onUpdate:modelValue": r[17] ||= (e) => a.value.fileNameFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.fileNameFormat]])]),
							z("p", NC, [
								K(Y(t(T)("rechnungswerk", "Gilt für Download, Kundenmail und DATEV-Mail. Platzhalter: {nummer} Rechnungsnummer, {YYYY}/{MM}/{DD} Rechnungsdatum, {kunde} Kundenname, {typ} Rechnung/Storno. {nummer} ist Pflicht.")) + " ", 1),
								r[47] ||= z("br", null, null, -1),
								K(" " + Y(t(T)("rechnungswerk", "Vorschau: {preview}", { preview: Ce.value })), 1)
							])
						], 512), [[y, c.value === "dateiname"]]),
						w(z("section", PC, [
							z("h3", null, Y(t(T)("rechnungswerk", "Steuer")), 1),
							J(t(Ke), {
								type: "switch",
								modelValue: a.value.smallBusiness,
								"onUpdate:modelValue": De
							}, {
								default: _(() => [K(Y(t(T)("rechnungswerk", "Kleinunternehmer nach §19 UStG (kein USt-Ausweis)")), 1)]),
								_: 1
							}, 8, ["modelValue"]),
							a.value.smallBusiness ? (Z(), V("label", FC, [
								z("span", null, Y(t(T)("rechnungswerk", "Hinweistext auf der Rechnung (§ 19 UStG)")), 1),
								w(z("textarea", {
									"onUpdate:modelValue": r[18] ||= (e) => a.value.smallBusinessNote = e,
									class: "rw-input",
									rows: "2",
									placeholder: t(Vl)
								}, null, 8, IC), [[I, a.value.smallBusinessNote]]),
								z("span", LC, Y(t(T)("rechnungswerk", "Erscheint bei aktiviertem Kleinunternehmer-Status auf der Rechnung. Leer lassen für den Standardtext.")), 1)
							])) : n("", !0),
							a.value.smallBusiness ? n("", !0) : (Z(), V("label", RC, [z("span", null, Y(t(T)("rechnungswerk", "Standard-USt-Satz")), 1), w(z("select", {
								"onUpdate:modelValue": r[19] ||= (e) => a.value.defaultTaxRateBp = e,
								class: "rw-input"
							}, [(Z(!0), V(D, null, X(t(Bl), (e) => (Z(), V("option", {
								key: e,
								value: e
							}, Y(t(ru)(e)), 9, zC))), 128))], 512), [[
								Se,
								a.value.defaultTaxRateBp,
								void 0,
								{ number: !0 }
							]])]))
						], 512), [[y, c.value === "steuer"]]),
						w(z("section", BC, [
							z("h3", null, Y(t(T)("rechnungswerk", "Zahlung")), 1),
							z("label", VC, [z("span", null, Y(t(T)("rechnungswerk", "Standard-Zahlungsziel (Tage)")), 1), w(z("input", {
								"onUpdate:modelValue": r[20] ||= (e) => a.value.defaultPaymentTermDays = e,
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
							z("p", HC, Y(t(T)("rechnungswerk", "Wird bei neuen Rechnungen als Zahlungsziel vorbelegt. Leer lassen für kein Standardziel.")), 1)
						], 512), [[y, c.value === "zahlung"]]),
						w(z("section", UC, [
							z("h3", null, Y(t(T)("rechnungswerk", "Versand")), 1),
							z("label", WC, [z("span", null, Y(t(T)("rechnungswerk", "DATEV-Upload-Mail")), 1), w(z("input", {
								"onUpdate:modelValue": r[21] ||= (e) => a.value.datevUploadMail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[I, a.value.datevUploadMail]])]),
							J(t(Ke), {
								type: "switch",
								modelValue: a.value.datevAutoSend,
								disabled: !a.value.datevUploadMail,
								"onUpdate:modelValue": ke
							}, {
								default: _(() => [K(Y(t(T)("rechnungswerk", "E-Rechnung beim Festschreiben automatisch an DATEV senden")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							z("p", GC, Y(t(T)("rechnungswerk", "Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.")), 1),
							z("div", KC, [z("label", qC, [z("span", null, Y(t(T)("rechnungswerk", "Absender-Name")), 1), w(z("input", {
								"onUpdate:modelValue": r[22] ||= (e) => a.value.smtpFromName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.smtpFromName]])]), z("label", JC, [z("span", null, Y(t(T)("rechnungswerk", "Absender-E-Mail")), 1), w(z("input", {
								"onUpdate:modelValue": r[23] ||= (e) => a.value.smtpFromEmail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[I, a.value.smtpFromEmail]])])])
						], 512), [[y, c.value === "versand"]]),
						w(z("section", YC, [
							z("h3", null, Y(t(T)("rechnungswerk", "Ablage in Nextcloud")), 1),
							z("div", XC, [z("span", null, Y(t(T)("rechnungswerk", "Zielordner")), 1), z("div", ZC, [
								u.value ? (Z(), V("span", QC, Y(u.value), 1)) : (Z(), V("span", $C, Y(t(T)("rechnungswerk", "Kein Ordner gewählt")), 1)),
								J(t(W), {
									disabled: d.value,
									onClick: Le
								}, {
									default: _(() => [K(Y(u.value ? t(T)("rechnungswerk", "Ordner ändern") : t(T)("rechnungswerk", "Ordner wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]),
								u.value ? (Z(), N(t(W), {
									key: 2,
									variant: "tertiary",
									disabled: d.value,
									onClick: Re
								}, {
									default: _(() => [K(Y(t(T)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : n("", !0)
							])]),
							J(t(Ke), {
								type: "switch",
								modelValue: a.value.archiveEnabled,
								disabled: !a.value.archiveFolderId,
								"onUpdate:modelValue": je
							}, {
								default: _(() => [K(Y(t(T)("rechnungswerk", "ZUGFeRD-PDF beim Festschreiben automatisch im Zielordner ablegen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							z("label", ew, [z("span", null, Y(t(T)("rechnungswerk", "Unterordner (optional)")), 1), w(z("input", {
								"onUpdate:modelValue": r[24] ||= (e) => a.value.archiveSubfolder = e,
								class: "rw-input",
								type: "text",
								placeholder: t(T)("rechnungswerk", "z. B. {YYYY}")
							}, null, 8, tw), [[I, a.value.archiveSubfolder]])]),
							z("p", nw, [
								K(Y(t(T)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {MM} Monat, {DD} Tag (Rechnungsdatum). Unterordner werden bei Bedarf angelegt. Vorhandene Dateien werden nie überschrieben.")) + " ", 1),
								r[48] ||= z("br", null, null, -1),
								K(" " + Y(t(T)("rechnungswerk", "Komfort-Ablage für den Team-Zugriff. Kein revisionssicheres Archiv, die GoBD-Archivierung erfolgt über DATEV bzw. Steuerberater.")), 1)
							])
						], 512), [[y, c.value === "ablage"]]),
						w(z("section", rw, [
							z("h3", null, Y(t(T)("rechnungswerk", "Eigenes SMTP-Konto (optional)")), 1),
							z("p", iw, Y(t(T)("rechnungswerk", "Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).")), 1),
							z("div", aw, [
								z("label", ow, [z("span", null, Y(t(T)("rechnungswerk", "Server (Host)")), 1), w(z("input", {
									"onUpdate:modelValue": r[25] ||= (e) => a.value.smtpHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "smtp.example.com"
								}, null, 512), [[I, a.value.smtpHost]])]),
								z("label", sw, [z("span", null, Y(t(T)("rechnungswerk", "Port")), 1), w(z("input", {
									"onUpdate:modelValue": r[26] ||= (e) => a.value.smtpPort = e,
									class: "rw-input",
									type: "number",
									placeholder: "587"
								}, null, 512), [[
									I,
									a.value.smtpPort,
									void 0,
									{ number: !0 }
								]])]),
								z("label", cw, [z("span", null, Y(t(T)("rechnungswerk", "Verschlüsselung")), 1), w(z("select", {
									"onUpdate:modelValue": r[27] ||= (e) => a.value.smtpSecurity = e,
									class: "rw-input"
								}, [
									r[49] ||= z("option", { value: "starttls" }, "STARTTLS", -1),
									r[50] ||= z("option", { value: "ssl" }, "SSL/TLS", -1),
									z("option", lw, Y(t(T)("rechnungswerk", "Keine")), 1)
								], 512), [[Se, a.value.smtpSecurity]])])
							]),
							z("div", uw, [z("label", dw, [z("span", null, Y(t(T)("rechnungswerk", "Benutzer")), 1), w(z("input", {
								"onUpdate:modelValue": r[28] ||= (e) => a.value.smtpUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.smtpUser]])]), z("label", fw, [z("span", null, Y(t(T)("rechnungswerk", "Passwort")), 1), w(z("input", {
								"onUpdate:modelValue": r[29] ||= (e) => fe.value = e,
								class: "rw-input",
								type: "password",
								placeholder: a.value.smtpPasswordSet ? t(T)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, pw), [[I, fe.value]])])]),
							z("div", mw, [J(t(W), {
								disabled: !a.value.smtpHost || me.value,
								onClick: He
							}, {
								default: _(() => [K(Y(t(T)("rechnungswerk", "Verbindung testen")), 1)]),
								_: 1
							}, 8, ["disabled"]), P.value ? (Z(), V("span", {
								key: 0,
								class: H(["smtp-test__result", he.value ? "rw-ok" : "rw-err"])
							}, Y(P.value), 3)) : n("", !0)])
						], 512), [[y, c.value === "smtp"]]),
						w(z("section", hw, [
							z("h3", null, Y(t(T)("rechnungswerk", "DATEV-Rückmeldung (IMAP, optional)")), 1),
							z("p", gw, Y(t(T)("rechnungswerk", "DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.")), 1),
							z("div", _w, [
								z("label", vw, [z("span", null, Y(t(T)("rechnungswerk", "Server (Host)")), 1), w(z("input", {
									"onUpdate:modelValue": r[30] ||= (e) => a.value.imapHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "imap.example.com"
								}, null, 512), [[I, a.value.imapHost]])]),
								z("label", yw, [z("span", null, Y(t(T)("rechnungswerk", "Port")), 1), w(z("input", {
									"onUpdate:modelValue": r[31] ||= (e) => a.value.imapPort = e,
									class: "rw-input",
									type: "number",
									placeholder: "993"
								}, null, 512), [[
									I,
									a.value.imapPort,
									void 0,
									{ number: !0 }
								]])]),
								z("label", bw, [z("span", null, Y(t(T)("rechnungswerk", "Verschlüsselung")), 1), w(z("select", {
									"onUpdate:modelValue": r[32] ||= (e) => a.value.imapSecurity = e,
									class: "rw-input"
								}, [...r[51] ||= [
									z("option", { value: "ssl" }, "SSL/TLS", -1),
									z("option", { value: "starttls" }, "STARTTLS", -1),
									z("option", { value: "tls" }, "TLS", -1)
								]], 512), [[Se, a.value.imapSecurity]])])
							]),
							z("div", xw, [z("label", Sw, [z("span", null, Y(t(T)("rechnungswerk", "Benutzer")), 1), w(z("input", {
								"onUpdate:modelValue": r[33] ||= (e) => a.value.imapUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[I, a.value.imapUser]])]), z("label", Cw, [z("span", null, Y(t(T)("rechnungswerk", "Passwort")), 1), w(z("input", {
								"onUpdate:modelValue": r[34] ||= (e) => pe.value = e,
								class: "rw-input",
								type: "password",
								placeholder: a.value.imapPasswordSet ? t(T)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, ww), [[I, pe.value]])])]),
							J(t(Ke), {
								modelValue: a.value.imapCleanup,
								disabled: !a.value.imapHost,
								"onUpdate:modelValue": r[35] ||= (e) => a.value.imapCleanup = e
							}, {
								default: _(() => [K(Y(t(T)("rechnungswerk", "Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"])
						], 512), [[y, c.value === "datev"]]),
						w(z("section", Tw, [
							z("h3", null, Y(t(T)("rechnungswerk", "Standardtexte")), 1),
							z("p", Ew, Y(t(T)("rechnungswerk", "Anrede-, Einleitungs- und Schlusstexte werden jetzt als Textbausteine verwaltet – getrennt für Rechnungen und Angebote, mit mehreren Vorlagen je Textbereich.")), 1),
							J(t(W), { onClick: l }, {
								icon: _(() => [J(so, { size: 20 })]),
								default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Textbausteine verwalten")), 1)]),
								_: 1
							})
						], 512), [[y, c.value === "texte"]]),
						w(z("section", Dw, [
							z("h3", null, Y(t(T)("rechnungswerk", "Zugriff & Administration")), 1),
							z("p", Ow, Y(t(T)("rechnungswerk", "Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.")), 1),
							z("div", kw, [
								z("span", Aw, Y(t(T)("rechnungswerk", "App-Administratoren")), 1),
								z("p", jw, Y(t(T)("rechnungswerk", "Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.")), 1),
								J(t(wt), {
									modelValue: j.value,
									"onUpdate:modelValue": r[36] ||= (e) => j.value = e,
									options: ce.value,
									loading: le.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: t(T)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: Te
								}, {
									"no-options": _(() => [K(Y(_e.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							]),
							z("div", Mw, [
								z("span", Nw, Y(t(T)("rechnungswerk", "Berechtigte Nutzer")), 1),
								z("p", Pw, Y(t(T)("rechnungswerk", "Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.")), 1),
								J(t(wt), {
									modelValue: se.value,
									"onUpdate:modelValue": r[37] ||= (e) => se.value = e,
									options: ce.value,
									loading: le.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: t(T)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: Te
								}, {
									"no-options": _(() => [K(Y(_e.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							])
						], 512), [[y, c.value === "zugriff"]]),
						w(z("section", Fw, [z("h3", null, Y(t(T)("rechnungswerk", "WerkPlus")), 1), J(OS)], 512), [[y, c.value === "werkplus"]]),
						w(z("section", Iw, [z("h3", null, Y(t(T)("rechnungswerk", "API-Schlüssel")), 1), J(iS)], 512), [[y, c.value === "apikeys"]]),
						w(z("div", Lw, [J(t(W), {
							variant: "primary",
							disabled: t(i).saving || ue.value,
							onClick: Ve
						}, {
							icon: _(() => [J(Z_, { size: 20 })]),
							default: _(() => [K(" " + Y(t(T)("rechnungswerk", "Speichern")), 1)]),
							_: 1
						}, 8, ["disabled"])], 512), [[y, c.value !== "werkplus"]])
					])])) : n("", !0),
					J(Pf, {
						open: h.value,
						name: t(T)("rechnungswerk", "Kleinunternehmer §19 aktivieren"),
						message: t(T)("rechnungswerk", "Damit werden künftige Rechnungen ohne Umsatzsteuer ausgewiesen (§19 UStG). Bestehende festgeschriebene Rechnungen bleiben unverändert. Fortfahren?"),
						confirmLabel: t(T)("rechnungswerk", "Aktivieren"),
						onClose: r[38] ||= (e) => h.value = !1,
						onConfirm: Oe
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Pf, {
						open: g.value,
						name: t(T)("rechnungswerk", "Automatischen DATEV-Versand aktivieren"),
						message: t(T)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben automatisch eine E-Mail mit der E-Rechnung an die hinterlegte DATEV-Upload-Mail gesendet. Fortfahren?"),
						confirmLabel: t(T)("rechnungswerk", "Aktivieren"),
						onClose: r[39] ||= (e) => g.value = !1,
						onConfirm: Ae
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Pf, {
						open: ee.value,
						name: t(T)("rechnungswerk", "Automatische Ablage aktivieren"),
						message: t(T)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben die ZUGFeRD-PDF automatisch im gewählten Ordner abgelegt. Alle Personen mit Zugriff auf den Ordner können die Rechnungen sehen. Fortfahren?"),
						confirmLabel: t(T)("rechnungswerk", "Aktivieren"),
						onClose: r[40] ||= (e) => ee.value = !1,
						onConfirm: R
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Pf, {
						open: b.value,
						name: t(T)("rechnungswerk", "Nummernkreis auf „Fortlaufend“ stellen"),
						message: t(T)("rechnungswerk", "Der Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Der Modus wirkt sich auf alle künftig festgeschriebenen Rechnungen aus. Fortfahren?"),
						confirmLabel: t(T)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: r[41] ||= (e) => b.value = !1,
						onConfirm: Pe
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Pf, {
						open: x.value,
						name: t(T)("rechnungswerk", "Angebots-Nummernkreis auf „Fortlaufend“ stellen"),
						message: t(T)("rechnungswerk", "Der Angebots-Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Fortfahren?"),
						confirmLabel: t(T)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: r[42] ||= (e) => x.value = !1,
						onConfirm: Ie
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					])
				]));
			}
		}), [["__scopeId", "data-v-c4294ef4"]])
	}
], zw = oi({
	history: Or(),
	routes: Rw
});
// src/main.js
document.addEventListener("DOMContentLoaded", () => {
	let e = Te(Ls);
	e.use(rn()), e.use(zw), e.use(zt, { themes: { tooltip: { delay: {
		show: 100,
		hide: 0
	} } } }), e.mount(".app-rechnungswerk");
});
