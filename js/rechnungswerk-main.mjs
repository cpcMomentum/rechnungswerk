import { c as e, d as t, g as n, l as r, m as i, t as a, u as o } from "./logger-Dmvqkkgn.chunk.mjs";
import { $n as s, $t as c, A as l, An as u, Bn as d, Bt as f, D as p, E as m, En as h, F as ee, Fn as te, Gn as g, Gt as ne, Hn as _, I as v, In as y, J as b, Jt as x, Kn as S, Kt as re, L as ie, Mn as C, Nn as w, O as T, On as E, Pn as D, Q as O, Qn as ae, Qt as k, R as oe, Rn as se, Sn as A, Tn as ce, Tt as j, Un as M, V as le, Vn as ue, Vt as de, Wn as N, X as fe, Xn as pe, Xt as P, Yn as F, Yt as me, Z as I, Zn as he, _ as ge, _n as _e, _t as ve, a as ye, an as L, at as be, bn as xe, c as Se, cn as R, ct as Ce, dn as z, dr as B, dt as we, er as Te, et as Ee, fn as De, fr as V, ft as Oe, g as ke, gn as Ae, gt as je, hn as Me, hr as H, ht as Ne, in as U, ir as Pe, it as Fe, ln as W, lr as Ie, lt as Le, mn as Re, mr as ze, mt as Be, nn as G, nt as K, o as Ve, on as q, or as He, ot as Ue, pn as We, pr as Ge, pt as Ke, qt as J, rn as Y, rr as X, rt as qe, sr as Je, st as Ye, t as Xe, tr as Ze, tt as Qe, ut as $e, v as et, vn as Z, wn as tt, xn as nt, yn as rt, z as it, zn as at } from "./createElementId-BhyzukIw.chunk.mjs";
import { a as ot, i as st, n as ct, o as lt, t as ut } from "./NcPopover-BZDxBRj1.chunk.mjs";
import { A as dt, E as ft, L as pt, M as mt, N as ht, T as Q, j as gt, k as _t, r as vt, t as yt, w as bt } from "./chunks-DROf82q0.chunk.mjs";
import { n as xt, r as St, t as Ct } from "./NcSelect-C6R5-Zbo.chunk.mjs";
import { a as wt, i as Tt, n as Et, o as Dt, t as Ot } from "./NcActions-f4mtXgM6.chunk.mjs";
import { t as kt } from "./NcLoadingIcon-C4if0V8M.chunk.mjs";
import { t as At } from "./NcCheckboxRadioSwitch-CxW6DNxG.chunk.mjs";
//#region node_modules/pinia/dist/pinia.js
var jt = typeof window < "u", Mt, Nt = (e) => Mt = e, Pt = Symbol();
function Ft(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var It = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Lt(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Rt(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Ut(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function zt(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Bt(e) {
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
var Vt = typeof navigator == "object" ? navigator : { userAgent: "" }, Ht = /Macintosh/.test(Vt.userAgent) && /AppleWebKit/.test(Vt.userAgent) && !/Safari/.test(Vt.userAgent), Ut = jt ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Ht ? Wt : "msSaveOrOpenBlob" in Vt ? Gt : Kt : () => {};
function Wt(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Bt(r) : zt(r.href) ? Rt(e, t, n) : (r.target = "_blank", Bt(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Bt(r);
	}, 0));
}
function Gt(e, t = "download", n) {
	if (typeof e == "string") {
		if (zt(e)) Rt(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Bt(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Lt(e, n), t);
}
function Kt(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Rt(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(It.HTMLElement)) || "safari" in It, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Ht) && typeof FileReader < "u") {
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
var { assign: qt } = Object;
function Jt() {
	let e = F(!0), t = e.run(() => X({})), n = [], r = [], i = s({
		install(e) {
			Nt(i), i._a = e, e.provide(Pt, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Yt = () => {};
function Xt(e, t, n, r = Yt) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && pe() && Te(i), i;
}
function Zt(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Qt = (e) => e(), $t = Symbol(), en = Symbol();
function tn(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!Object.hasOwn(t, n)) continue;
		let r = t[n], i = e[n];
		e[n] = Ft(i) && Ft(r) && Object.hasOwn(e, n) && !ae(r) && !he(r) ? tn(i, r) : r;
	}
	return e;
}
var nn = Symbol();
function rn(e) {
	return !e || typeof e != "object" || !Object.hasOwn(e, nn);
}
var { assign: an } = Object;
function on(e) {
	return !!(ae(e) && e.effect);
}
function sn(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, c = n.state.value[e], l;
	function u() {
		return c || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), an(Ie(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = s(G(() => {
			Nt(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return l = cn(e, u, t, n, r, !0), l;
}
function cn(e, t, n = {}, r, i, a) {
	let o, s = an({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function ee(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: "patch function",
			storeId: e,
			events: p
		}) : (tn(r.state.value[e], t), n = {
			type: "patch object",
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		rt().then(() => {
			h === i && (l = !0);
		}), u = !0, Zt(d, n, r.state.value[e]);
	}
	let te = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			an(e, t);
		});
	} : Yt;
	function g() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let ne = (t, n = "") => {
		if ($t in t) return t[en] = n, t;
		let i = function() {
			Nt(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Zt(f, {
				args: n,
				name: i[en],
				store: v,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : v, n);
			} catch (e) {
				throw Zt(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Zt(a, e), e)).catch((e) => (Zt(o, e), Promise.reject(e))) : (Zt(a, l), l);
		};
		return i[$t] = !0, i[en] = n, i;
	}, _ = {
		_p: r,
		$id: e,
		$onAction: Xt.bind(null, f),
		$patch: ee,
		$reset: te,
		$subscribe(t, n = {}) {
			if (d.has(t)) return Yt;
			let i = Xt(d, t, n.detached, () => a()), a = o.run(() => M(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: "direct",
					events: p
				}, r);
			}, an({}, c, n)));
			return i;
		},
		$dispose: g
	}, v = Ze(_);
	r._s.set(e, v);
	let y = (r._a && r._a.runWithContext || Qt)(() => r._e.run(() => (o = F()).run(() => t({ action: ne }))));
	for (let t in y) {
		let n = y[t];
		ae(n) && !on(n) || he(n) ? a || (m && rn(n) && (ae(n) ? n.value = m[t] : ((n instanceof Set || n instanceof Map) && n.clear(), tn(n, m[t]))), r.state.value[e][t] = n) : typeof n == "function" && (y[t] = ne(n, t), s.actions[t] = n);
	}
	return an(v, y), an(Je(v), y), Object.defineProperty(v, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			ee((t) => {
				an(t, e);
			});
		}
	}), r._p.forEach((e) => {
		let t = o.run(() => e({
			store: v,
			app: r._a,
			pinia: r,
			options: s
		}));
		an(v, t);
	}), m && a && n.hydrate && n.hydrate(v.$state, m), l = !0, u = !0, v;
}
function ln(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Me();
		return n ||= o ? Ae(Pt, null) : null, n && Nt(n), n = Mt, n._s.has(e) || (i ? cn(e, t, r, n) : sn(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
//#endregion
//#region node_modules/vue-router/dist/devtools-CN5uWJaH.js
var un = typeof document < "u", dn = /#/g, fn = /&/g, pn = /\//g, mn = /=/g, hn = /\?/g, gn = /\+/g, _n = /%5B/g, vn = /%5D/g, yn = /%5E/g, bn = /%60/g, xn = /%7B/g, Sn = /%7C/g, Cn = /%7D/g, wn = /%20/g;
function Tn(e) {
	return e == null ? "" : encodeURI("" + e).replace(Sn, "|").replace(_n, "[").replace(vn, "]");
}
function En(e) {
	return Tn(e).replace(xn, "{").replace(Cn, "}").replace(yn, "^");
}
function Dn(e) {
	return Tn(e).replace(gn, "%2B").replace(wn, "+").replace(dn, "%23").replace(fn, "%26").replace(bn, "`").replace(xn, "{").replace(Cn, "}").replace(yn, "^");
}
function On(e) {
	return Dn(e).replace(mn, "%3D");
}
function kn(e) {
	return Tn(e).replace(dn, "%23").replace(hn, "%3F");
}
function An(e) {
	return kn(e).replace(pn, "%2F");
}
function jn(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var Mn = /\/$/, Nn = (e) => e.replace(Mn, "");
function Pn(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = Hn(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: jn(o)
	};
}
function Fn(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function In(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Ln(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Rn(t.matched[r], n.matched[i]) && zn(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Rn(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function zn(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Bn(e[n], t[n])) return !1;
	return !0;
}
function Bn(e, t) {
	return be(e) ? Vn(e, t) : be(t) ? Vn(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Vn(e, t) {
	return be(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function Hn(e, t) {
	if (Fe(e)) return e;
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
var Un = {
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
function Wn(e) {
	if (!e) {
		if (un) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Nn(e);
}
var Gn = /^[^#]+#/;
function Kn(e, t) {
	return e.replace(Gn, "#") + t;
}
function qn(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var Jn = () => history.scrollRestoration === "manual" ? {
	left: window.scrollX,
	top: window.scrollY
} : null;
function Yn(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = qn(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Xn(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var Zn = /* @__PURE__ */ new Map();
function Qn(e) {
	Zn.set(e, Jn());
}
function $n(e) {
	let t = Zn.get(e);
	return Zn.delete(e), t;
}
function er(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function tr(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function nr(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(gn, " "), i = r.indexOf("="), a = jn(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : jn(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			be(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function rr(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (n = On(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(be(r) ? r.map((e) => e && Dn(e)) : [r && Dn(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function ir(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = be(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function ar() {
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
function or(e, t, n) {
	let r = e.value;
	if (!r) return;
	let i = r, a = () => {
		i[t].delete(n);
	};
	h(a), tt(a), xe(() => {
		let r = e.value;
		r && (i = r), i[t].add(n);
	}), i[t].add(n);
}
function sr(e) {
	or(Ae(Le, {}), "leaveGuards", e);
}
function cr(e) {
	or(Ae(Le, {}), "updateGuards", e);
}
function lr(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(qe(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : er(e) ? c(qe(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function ur(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (Ce(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(lr(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Ue(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && lr(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function dr(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Rn(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Rn(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
var fr = () => location.protocol + "//" + location.host;
function pr(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), In(n, "");
	}
	return In(n, e) + r + i;
}
function mr(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = pr(e, location), c = n.value, l = t.value, u = 0;
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
		e.state && e.replaceState(K({}, e.state, { scroll: Jn() }), "");
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
function hr(e, t, n, r = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: null
	};
}
function gr(e) {
	let { history: t, location: n } = window, r = { value: pr(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : fr() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			console.error(e), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, K({}, t.state, hr(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = K({}, i.value, t.state, {
			forward: e,
			scroll: Jn()
		});
		a(o.current, o, !0), a(e, K({}, hr(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function _r(e) {
	e = Wn(e);
	let t = gr(e), n = mr(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = K({
		location: "",
		base: e,
		go: r,
		createHref: Kn.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function vr(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), _r(e);
}
var yr = {
	type: 0,
	value: ""
}, br = /[a-zA-Z0-9_]/;
function xr(e) {
	if (!e) return [[]];
	if (e === "/") return [[yr]];
	if (!Fe(e)) throw Error(`Invalid path "${e}"`);
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
			c === "(" ? n = 2 : br.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
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
var Sr = "[^/]+?", Cr = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, wr = /[.+*?^${}()[\]/\\]/g;
function Tr(e, t) {
	let n = K({}, Cr, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(wr, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || Sr;
				if (u !== Sr) {
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
				if (be(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = be(c) ? c.join("/") : c;
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
function Er(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Dr(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = Er(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (Or(r)) return 1;
		if (Or(i)) return -1;
	}
	return i.length - r.length;
}
function Or(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var kr = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function Ar(e, t, n) {
	let r = Tr(xr(e.path), n), i = K(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function jr(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = $e(kr, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = Nr(e);
		s.aliasOf = r && r.record;
		let l = $e(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(Nr(K({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let d, f;
		for (let t of u) {
			let { path: u } = t;
			if (n && !Fe(u)) {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (d = Ar(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !Fr(d) && o(e.name)), zr(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : we;
	}
	function o(e) {
		if (tr(e)) {
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
		let t = Lr(e, n);
		n.splice(t, 0, e), e.record.name && !Fr(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw qe(1, { location: e });
			s = i.record.name, a = K(Mr(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && Mr(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw qe(1, {
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
			meta: Ir(c)
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
function Mr(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function Nr(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: Pr(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Pr(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function Fr(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Ir(e) {
	return e.reduce((e, t) => K(e, t.meta), {});
}
function Lr(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		Dr(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = Rr(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function Rr(e) {
	let t = e;
	for (; t = t.parent;) if (zr(t) && Dr(e, t) === 0) return t;
}
function zr({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Br(e) {
	let t = Ae(Ke), n = Ae(Oe), r = G(() => {
		let n = B(e.to);
		return t.resolve(n);
	}), i = G(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(Rn.bind(null, i));
		if (o > -1) return o;
		let s = Gr(e[t - 2]);
		return t > 1 && Gr(i) === s && a[a.length - 1].path !== s ? a.findIndex(Rn.bind(null, e[t - 2])) : o;
	}), a = G(() => i.value > -1 && Wr(n.params, r.value.params)), o = G(() => i.value > -1 && i.value === n.matched.length - 1 && zn(n.params, r.value.params));
	function s(n = {}) {
		if (Ur(n)) {
			let n = t[B(e.replace) ? "replace" : "push"](B(e.to)).catch(we);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	return {
		route: r,
		href: G(() => r.value.href),
		isActive: a,
		isExactActive: o,
		navigate: s
	};
}
function Vr(e) {
	return e.length === 1 ? e[0] : e;
}
var Hr = /* @__PURE__ */ z({
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
	useLink: Br,
	setup(e, { slots: t }) {
		let n = Ze(Br(e)), { options: r } = Ae(Ke), i = G(() => ({
			[Kr(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Kr(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && Vr(t.default(n));
			return e.custom ? r : Re("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function Ur(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Wr(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (be(r)) {
			if (!be(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
		} else if (r !== i) return !1;
	}
	return !0;
}
function Gr(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Kr = (e, t, n) => e ?? t ?? n, qr = /*#__PURE__*/ z({
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
		let r = Ae(Be), i = G(() => e.route || r.value), a = Ae(ve, 0), o = G(() => {
			let e = B(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = G(() => i.value.matched[o.value]);
		u(ve, G(() => o.value + 1)), u(Le, s), u(Be, i);
		let c = X();
		return M(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !Rn(t, i) || !r) && (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return Jr(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, f = Re(l, K({}, d, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return Jr(n.default, {
				Component: f,
				route: r
			}) || f;
		};
	}
});
function Jr(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Yr = qr;
function Xr(e) {
	let t = jr(e.routes, e), n = e.parseQuery || nr, r = e.stringifyQuery || rr, i = e.history, a = ar(), o = ar(), s = ar(), c = He(Un), l = He(0), u = Un;
	un && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let d = Qe.bind(null, (e) => "" + e), f = Qe.bind(null, An), p = Qe.bind(null, jn);
	function m(e, n) {
		let r, i;
		tr(e) ? (r = t.getRecordMatcher(e), i = n) : i = e;
		let a = t.addRoute(i, r);
		return l.value++, () => {
			a(), l.value++;
		};
	}
	function h(e) {
		let n = t.getRecordMatcher(e);
		n && (t.removeRoute(n), l.value++);
	}
	function ee() {
		t.clearRoutes(), l.value++;
	}
	function te() {
		return t.getRoutes().map((e) => e.record);
	}
	function g(e) {
		return !!t.getRecordMatcher(e);
	}
	function ne(e, a) {
		if (l.value, typeof e == "string") {
			a ||= e.startsWith("/") ? Un : c.value;
			let r = Pn(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return K(r, o, {
				params: p(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		a = K({}, a || (e.path != null && e.path.startsWith("/") && !("name" in e && e.name) ? Un : c.value));
		let o;
		if (e.path != null) o = K({}, e, { path: Pn(n, e.path, a.path).path });
		else {
			let t = K({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = K({}, e, { params: f(t) }), a.params = f(a.params);
		}
		let s = t.resolve(o, a), u = e.hash || "";
		s.params = d(p(s.params));
		let m = Fn(r, K({}, e, {
			hash: En(u),
			path: s.path
		})), h = i.createHref(m);
		return K({
			fullPath: m,
			hash: u,
			query: r === rr ? ir(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: h
		});
	}
	function _(e) {
		return typeof e == "string" ? Pn(n, e, c.value.path) : K({}, e);
	}
	function v(e, t) {
		if (u !== e) return qe(8, {
			from: t,
			to: e
		});
	}
	function y(e) {
		return S(e);
	}
	function b(e) {
		return y(K(_(e), { replace: !0 }));
	}
	function x(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = _(i) : { path: i }, i.params = {}), K({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function S(e, t) {
		let n = u = ne(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, l = x(n, i);
		if (l) return S(K(_(l), {
			state: typeof l == "object" ? K({}, a, l.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && Ln(r, i, n) && (f = qe(16, {
			to: d,
			from: i
		}), ce(i, i, !0, !1)), (f ? Promise.resolve(f) : C(d, i)).catch((e) => Ye(e) ? Ye(e, 2) ? e : A(e) : oe(e, d, i)).then((e) => {
			if (e) {
				if (Ye(e, 2)) return S(K({ replace: s }, _(e.to), {
					state: typeof e.to == "object" ? K({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = T(d, i, !0, s, a);
			return w(d, i, e), e;
		});
	}
	function re(e, t) {
		let n = v(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function ie(e) {
		let t = le.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function C(e, t) {
		let n, [r, i, s] = dr(e, t);
		n = ur(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(lr(r, e, t));
		});
		let c = re.bind(null, e, t);
		return n.push(c), de(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(lr(r, e, t));
			return n.push(c), de(n);
		}).then(() => {
			n = ur(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(lr(r, e, t));
			});
			return n.push(c), de(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (be(r.beforeEnter)) for (let i of r.beforeEnter) n.push(lr(i, e, t));
				else n.push(lr(r.beforeEnter, e, t));
			}
			return n.push(c), de(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = ur(s, "beforeRouteEnter", e, t, ie), n.push(c), de(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(lr(r, e, t));
			return n.push(c), de(n);
		}).catch((e) => Ye(e, 8) ? e : Promise.reject(e));
	}
	function w(e, t, n) {
		s.list().forEach((r) => ie(() => r(e, t, n)));
	}
	function T(e, t, n, r, a) {
		let o = v(e, t);
		if (o) return o;
		let s = t === Un, l = un ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, K({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, ce(e, t, n, s), A();
	}
	let E;
	function D() {
		E ||= i.listen((e, t, n) => {
			if (!ue.listening) return;
			let r = ne(e), a = x(r, ue.currentRoute.value);
			if (a) {
				S(K(a, {
					replace: !0,
					force: !0
				}), r).catch(we);
				return;
			}
			u = r;
			let o = c.value;
			un && n.delta && Qn(Xn(o.fullPath, n.delta)), C(r, o).catch((e) => Ye(e, 12) ? e : Ye(e, 2) ? (S(K(_(e.to), { force: !0 }), r).then((e) => {
				Ye(e, 20) && !n.delta && n.type === "pop" && i.go(-1, !1);
			}).catch(we), Promise.reject()) : (n.delta && i.go(-n.delta, !1), oe(e, r, o))).then((e) => {
				e ||= T(r, o, !1), e && (n.delta && !Ye(e, 8) ? i.go(-n.delta, !1) : n.type === "pop" && Ye(e, 20) && i.go(-1, !1)), w(r, o, e);
			}).catch(we);
		});
	}
	let O = ar(), ae = ar(), k;
	function oe(e, t, n) {
		A(e);
		let r = ae.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function se() {
		return k && c.value !== Un ? Promise.resolve() : new Promise((e, t) => {
			O.add([e, t]);
		});
	}
	function A(e) {
		return k || (k = !e, D(), O.list().forEach(([t, n]) => e ? n(e) : t()), O.reset()), e;
	}
	function ce(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!un || !a) return Promise.resolve();
		let o = !r && $n(Xn(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return rt().then(() => a(t, n, o)).then((e) => t === c.value && e && Yn(e)).catch((e) => t === c.value && oe(e, t, n));
	}
	let j = (e) => i.go(e), M, le = /* @__PURE__ */ new Set(), ue = {
		currentRoute: c,
		listening: !0,
		addRoute: m,
		removeRoute: h,
		clearRoutes: ee,
		hasRoute: g,
		getRoutes: te,
		resolve: ne,
		options: e,
		push: y,
		replace: b,
		go: j,
		back: () => j(-1),
		forward: () => j(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: ae.add,
		isReady: se,
		install(e) {
			e.component("RouterLink", Hr), e.component("RouterView", Yr), e.config.globalProperties.$router = ue, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => B(c)
			}), un && !M && c.value === Un && (M = !0, y(i.location).catch((e) => {}));
			let t = {};
			for (let e in Un) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Ke, ue), e.provide(Oe, Pe(t)), e.provide(Be, c);
			let n = e.unmount;
			le.add(e), e.unmount = function() {
				le.delete(e), le.size < 1 && (u = Un, E && E(), E = null, c.value = Un, M = !1, k = !1), n();
			};
		}
	};
	function de(e) {
		return e.reduce((e, t) => e.then(() => ie(t)), Promise.resolve());
	}
	return ue;
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/constants2.mjs
var Zr = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Qr = /* @__PURE__ */ Symbol.for("NcContent:selector");
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcContent.mjs
m(le);
var $r = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM140 44C132.268 44 126 50.268 126 58V292C126 299.732 132.268 306 140 306H372C379.732 306 386 299.732 386 292V58C386 50.268 379.732 44 372 44H140Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", ei = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM112 44C119.732 44 126 50.268 126 58V292C126 299.732 119.732 306 112 306H20C12.268 306 6 299.732 6 292V58C6 50.268 12.268 44 20 44H112Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", ti = { class: "vue-skip-actions__container" }, ni = { class: "vue-skip-actions__headline" }, ri = { class: "vue-skip-actions__buttons" }, ii = /* @__PURE__ */ O(/* @__PURE__ */ z({
	__name: "NcContent",
	props: { appName: {} },
	setup(e) {
		let t = e;
		u(Zr, l), u(Qr, "#content-vue"), u("appName", G(() => t.appName));
		let n = pt(), i = X(!1), a = X(), o = G(() => a.value === "navigation" ? ei : $r);
		nt(() => {
			let e = document.getElementById("skip-actions");
			e && (e.innerHTML = "", e.classList.add("vue-skip-actions"));
		});
		function s() {
			r("toggle-navigation", { open: !0 }), rt(() => {
				window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
			});
		}
		function l(e) {
			i.value = e, a.value ||= "navigation";
		}
		return (t, r) => (E(), q("div", {
			id: "content-vue",
			class: V(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": B(Ee) }]])
		}, [(E(), U(c, { to: "#skip-actions" }, [Y("div", ti, [
			Y("div", ni, H(B(p)("Keyboard navigation help")), 1),
			Y("div", ri, [S(W(I, {
				href: "#app-navigation-vue",
				variant: "tertiary",
				onClick: P(s, ["prevent"]),
				onFocusin: r[0] ||= (e) => a.value = "navigation",
				onMouseover: r[1] ||= (e) => a.value = "navigation"
			}, {
				default: g(() => [R(H(B(p)("Skip to app navigation")), 1)]),
				_: 1
			}, 512), [[x, i.value]]), W(I, {
				href: "#app-content-vue",
				variant: "tertiary",
				onFocusin: r[2] ||= (e) => a.value = "content",
				onMouseover: r[3] ||= (e) => a.value = "content"
			}, {
				default: g(() => [R(H(B(p)("Skip to main content")), 1)]),
				_: 1
			})]),
			S(W(fe, {
				class: "vue-skip-actions__image",
				svg: o.value,
				size: "auto"
			}, null, 8, ["svg"]), [[x, !B(n)]])
		])])), w(t.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-d13dcb98"]]), ai = { name: "NcAppNavigationList" }, oi = { class: "app-navigation-list" };
function si(e, t, n, r, i, a) {
	return E(), q("ul", oi, [w(e.$slots, "default", {}, void 0, !0)]);
}
var ci = /* @__PURE__ */ O(ai, [["render", si], ["__scopeId", "data-v-d72957ed"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcAppNavigation.mjs
m(ee);
var li = { class: "app-navigation-toggle-wrapper" }, ui = /* @__PURE__ */ O(/* @__PURE__ */ z({
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
		let t = at(e, "open"), n = G(() => t.value ? p("Close navigation") : p("Open navigation"));
		return (e, r) => (E(), q("div", li, [W(B(I), {
			class: "app-navigation-toggle",
			"aria-controls": "app-navigation-vue",
			"aria-expanded": t.value ? "true" : "false",
			"aria-label": n.value,
			title: n.value,
			variant: "tertiary",
			onClick: r[0] ||= (e) => t.value = !t.value
		}, {
			icon: g(() => [W(fe, {
				path: B(ge),
				directional: ""
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-expanded",
			"aria-label",
			"title"
		])]));
	}
}), [["__scopeId", "data-v-e8177cc7"]]), di = [
	"aria-hidden",
	"aria-label",
	"aria-labelledby",
	"inert"
], fi = { class: "app-navigation__search" }, pi = /* @__PURE__ */ O(/* @__PURE__ */ z({
	__name: "NcAppNavigation",
	props: {
		ariaLabel: {},
		ariaLabelledby: {}
	},
	setup(e) {
		let n = e, i, a = Ae(Zr, () => _("NcAppNavigation is not mounted inside NcContent, this is probably an error."), !1), s = ue("appNavigationContainer"), c = pt(), l = X(!c.value), u = G(() => c.value && l.value);
		N(() => {
			!n.ariaLabel && !n.ariaLabelledby && _("NcAppNavigation requires either `ariaLabel` or `ariaLabelledby` to be set for accessibility.");
		}), M(c, (e) => {
			l.value = !e, r("navigation-toggled", { open: l.value });
		}), M(u, () => {
			p();
		}), ce(() => {
			a(!0), o("toggle-navigation", f), r("navigation-toggled", { open: l.value }), i = ot(s.value, {
				allowOutsideClick: !0,
				clickOutsideDeactivates: () => (c.value && (i.deactivate({ returnFocus: !1 }), d(!1)), !1),
				fallbackFocus: s.value,
				trapStack: st(),
				escapeDeactivates: !1
			}), p();
		}), h(() => {
			a(!1), t("toggle-navigation", f), i.deactivate();
		});
		function d(e) {
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
		function f({ open: e }) {
			return d(e);
		}
		function p() {
			u.value ? i.activate() : i.deactivate();
		}
		function m() {
			c.value && d(!1);
		}
		return (t, n) => (E(), q("div", {
			ref: "appNavigationContainer",
			class: V(["app-navigation", {
				"app-navigation--closed": !l.value,
				"app-navigation--legacy": B(Ee)
			}])
		}, [Y("nav", {
			id: "app-navigation-vue",
			"aria-hidden": l.value ? "false" : "true",
			"aria-label": e.ariaLabel || void 0,
			"aria-labelledby": e.ariaLabelledby || void 0,
			class: "app-navigation__content",
			inert: !l.value || void 0,
			onKeydown: me(m, ["esc"])
		}, [
			Y("div", fi, [w(t.$slots, "search", {}, void 0, !0)]),
			Y("div", { class: V(["app-navigation__body", { "app-navigation__body--no-list": !t.$slots.list }]) }, [w(t.$slots, "default", {}, void 0, !0)], 2),
			t.$slots.list ? (E(), U(ci, {
				key: 0,
				class: "app-navigation__list"
			}, {
				default: g(() => [w(t.$slots, "list", {}, void 0, !0)]),
				_: 3
			})) : L("", !0),
			w(t.$slots, "footer", {}, void 0, !0)
		], 40, di), W(ui, {
			open: l.value,
			"onUpdate:open": d
		}, null, 8, ["open"])], 2));
	}
}), [["__scopeId", "data-v-ec9c3f18"]]), mi = {
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
}, hi = ["aria-hidden", "aria-label"], gi = [
	"fill",
	"width",
	"height"
], _i = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, vi = { key: 0 };
function yi(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon chevron-up-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", _i, [n.title ? (E(), q("title", vi, H(n.title), 1)) : L("", !0)])], 8, gi))], 16, hi);
}
var bi = /* @__PURE__ */ O(mi, [["render", yi]]), xi = {
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
}, Si = ["aria-hidden", "aria-label"], Ci = [
	"fill",
	"width",
	"height"
], wi = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, Ti = { key: 0 };
function Ei(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon arrow-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", wi, [n.title ? (E(), q("title", Ti, H(n.title), 1)) : L("", !0)])], 8, Ci))], 16, Si);
}
var Di = /* @__PURE__ */ O(xi, [["render", Ei]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcInputConfirmCancel.mjs
m(l);
var Oi = {
	name: "NcInputConfirmCancel",
	components: {
		IconArrowRight: Di,
		IconClose: xt,
		NcButton: I
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
		return { isLegacy34: Ee };
	},
	data() {
		return {
			labelConfirm: p("Confirm changes"),
			labelCancel: p("Cancel changes")
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
}, ki = ["placeholder"];
function Ai(e, t, n, r, i, a) {
	let o = D("IconArrowRight"), s = D("NcButton"), c = D("IconClose");
	return E(), q("div", { class: V(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": r.isLegacy34 }]) }, [Y("form", {
		onSubmit: t[1] ||= P((...e) => a.confirm && a.confirm(...e), ["prevent"]),
		onKeydown: t[2] ||= me(P((...e) => a.cancel && a.cancel(...e), [
			"exact",
			"stop",
			"prevent"
		]), ["esc"]),
		onClick: t[3] ||= P(() => {}, ["stop", "prevent"])
	}, [
		S(Y("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.valueModel = e,
			type: "text",
			class: "app-navigation-input-confirm__input",
			placeholder: n.placeholder
		}, null, 8, ki), [[J, a.valueModel]]),
		W(s, {
			"aria-label": i.labelConfirm,
			type: "submit",
			variant: "primary",
			onClick: P(a.confirm, ["stop", "prevent"])
		}, {
			icon: g(() => [W(o, { size: 20 })]),
			_: 1
		}, 8, ["aria-label", "onClick"]),
		W(s, {
			"aria-label": i.labelCancel,
			type: "reset",
			variant: n.primary ? "primary" : "tertiary",
			onClick: P(a.cancel, ["stop", "prevent"])
		}, {
			icon: g(() => [W(c, { size: 20 })]),
			_: 1
		}, 8, [
			"aria-label",
			"variant",
			"onClick"
		])
	], 32)], 2);
}
var ji = /* @__PURE__ */ O(Oi, [["render", Ai], ["__scopeId", "data-v-6926a0b8"]]), Mi = z({
	name: "NcVNodes",
	props: { vnodes: {
		type: [Array, Object],
		default: null
	} },
	render() {
		return this.vnodes || this.$slots?.default?.({});
	}
}), Ni = {
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
}, Pi = ["aria-hidden", "aria-label"], Fi = [
	"fill",
	"width",
	"height"
], Ii = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, Li = { key: 0 };
function Ri(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon pencil-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ii, [n.title ? (E(), q("title", Li, H(n.title), 1)) : L("", !0)])], 8, Fi))], 16, Pi);
}
var zi = /* @__PURE__ */ O(Ni, [["render", Ri]]), Bi = {
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
}, Vi = ["aria-hidden", "aria-label"], Hi = [
	"fill",
	"width",
	"height"
], Ui = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, Wi = { key: 0 };
function Gi(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon undo-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ui, [n.title ? (E(), q("title", Wi, H(n.title), 1)) : L("", !0)])], 8, Hi))], 16, Vi);
}
var Ki = /* @__PURE__ */ O(Bi, [["render", Gi]]);
m(v);
var qi = {
	name: "NcAppNavigationIconCollapsible",
	components: {
		NcButton: I,
		ChevronDown: St,
		ChevronUp: bi
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
		return { isLegacy34: Ee };
	},
	computed: { labelButton() {
		return this.open ? p("Collapse menu") : p("Open menu");
	} },
	methods: { onClick(e) {
		this.$emit("click", e);
	} }
};
function Ji(e, t, n, r, i, a) {
	let o = D("ChevronUp"), s = D("ChevronDown"), c = D("NcButton");
	return E(), U(c, {
		class: V(["icon-collapse", {
			"icon-collapse--active": n.active,
			"icon-collapse--open": n.open
		}]),
		"aria-label": a.labelButton,
		variant: n.active && r.isLegacy34 ? "tertiary-on-primary" : "tertiary",
		onClick: a.onClick
	}, {
		icon: g(() => [n.open ? (E(), U(o, {
			key: 0,
			size: 20
		})) : (E(), U(s, {
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
var Yi = /* @__PURE__ */ O(qi, [["render", Ji], ["__scopeId", "data-v-cfbd3794"]]);
m(ie, b);
var Xi = {
	name: "NcAppNavigationItem",
	components: {
		NcActions: ht,
		NcActionButton: Dt,
		NcAppNavigationIconCollapsible: Yi,
		NcInputConfirmCancel: ji,
		NcLoadingIcon: kt,
		NcVNodes: Mi,
		Pencil: zi,
		Undo: Ki
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
			default: () => Xe(),
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
			isMobile: pt(),
			isLegacy34: Ee
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
			return this.editLabel ? this.editLabel : p("Edit item");
		},
		undoButtonAriaLabel() {
			return p("Undo changes");
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
}, Zi = ["id"], Qi = [
	"aria-current",
	"aria-description",
	"aria-expanded",
	"href",
	"target",
	"title",
	"onClick"
], $i = {
	key: 0,
	class: "editingContainer"
}, ea = {
	key: 1,
	class: "app-navigation-entry__deleted"
}, ta = { class: "app-navigation-entry__deleted-description" }, na = {
	key: 0,
	class: "app-navigation-entry__counter-wrapper"
}, ra = {
	key: 0,
	class: "app-navigation-entry__children"
};
function ia(e, t, n, r, i, a) {
	let o = D("NcLoadingIcon"), s = D("NcInputConfirmCancel"), c = D("Pencil"), l = D("NcActionButton"), u = D("Undo"), d = D("NcActions"), f = D("NcAppNavigationIconCollapsible");
	return E(), q("li", {
		id: n.id,
		class: V([{
			"app-navigation-entry--opened": i.opened,
			"app-navigation-entry--pinned": n.pinned,
			"app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
		}, "app-navigation-entry-wrapper"])
	}, [(E(), U(y(a.isRouterLink ? "router-link" : "NcVNodes"), Ge(We({ ...a.isRouterLink && {
		custom: !0,
		to: n.to
	} })), {
		default: g(({ href: p, navigate: m, isActive: h }) => [Y("div", { class: V(["app-navigation-entry", {
			"app-navigation-entry--editing": i.editingActive,
			"app-navigation-entry--deleted": n.undo,
			"app-navigation-entry--legacy": r.isLegacy34,
			active: n.to && h || n.active
		}]) }, [
			n.undo ? L("", !0) : (E(), q("a", {
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
				onKeydown: t[3] ||= me(P((...e) => a.handleTab && a.handleTab(...e), ["exact"]), ["tab"])
			}, [
				Y("div", { class: V(["app-navigation-entry-icon", { [n.icon]: n.icon }]) }, [n.loading ? (E(), U(o, { key: 0 })) : w(e.$slots, "icon", { active: n.active || n.to && h }, void 0, !0, 1)], 2),
				Y("span", { class: V(["app-navigation-entry__name", { "hidden-visually": i.editingActive }]) }, H(n.name), 3),
				i.editingActive ? (E(), q("div", $i, [W(s, {
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
				])])) : L("", !0)
			], 40, Qi)),
			n.undo ? (E(), q("div", ea, [Y("div", ta, H(n.name), 1)])) : L("", !0),
			(e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !i.editingActive ? (E(), q("div", {
				key: 2,
				class: V(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || i.menuOpenLocalValue || n.menuOpen }])
			}, [e.$slots.counter ? (E(), q("div", na, [w(e.$slots, "counter", {}, void 0, !0)])) : L("", !0), e.$slots.actions || n.editable && !i.editingActive || n.undo ? (E(), U(d, {
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
				icon: g(() => [w(e.$slots, "menu-icon", {}, void 0, !0)]),
				default: g(() => [
					n.editable && !i.editingActive ? (E(), U(l, {
						key: 0,
						"aria-label": a.editButtonAriaLabel,
						onClick: a.handleEdit
					}, {
						icon: g(() => [W(c, { size: 20 })]),
						default: g(() => [R(" " + H(n.editLabel), 1)]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : L("", !0),
					n.undo ? (E(), U(l, {
						key: 1,
						"aria-label": a.undoButtonAriaLabel,
						onClick: a.handleUndo
					}, {
						icon: g(() => [W(u, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : L("", !0),
					w(e.$slots, "actions", {}, void 0, !0)
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
			])) : L("", !0)], 2)) : L("", !0),
			n.allowCollapse && e.$slots.default ? (E(), U(f, {
				key: 3,
				active: n.to && h || n.active,
				open: i.opened,
				onClick: P(a.toggleCollapse, ["prevent", "stop"])
			}, null, 8, [
				"active",
				"open",
				"onClick"
			])) : L("", !0),
			w(e.$slots, "extra", {}, void 0, !0)
		], 2)]),
		_: 3
	}, 16)), a.canHaveChildren && e.$slots.default ? (E(), q("ul", ra, [w(e.$slots, "default", {}, void 0, !0)])) : L("", !0)], 10, Zi);
}
var aa = /* @__PURE__ */ O(Xi, [["render", ia], ["__scopeId", "data-v-6cae7342"]]), oa = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		let n = t, r = e, i = se(), a = d(), o = X([]), s = G(() => o.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), c = G(() => o.value.length), l = X(null), f = X(!1), p = X({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), m = X({
			splitter: null,
			timeoutId: null
		}), h = G(() => ({
			[`splitpanes splitpanes--${r.horizontal ? "horizontal" : "vertical"}`]: !0,
			"splitpanes--dragging": p.value.dragging,
			"splitpanes--ready": f.value
		})), ee = () => {
			document.addEventListener("mousemove", ne, { passive: !1 }), document.addEventListener("mouseup", _), "ontouchstart" in window && (document.addEventListener("touchmove", ne, { passive: !1 }), document.addEventListener("touchend", _));
		}, te = () => {
			document.removeEventListener("mousemove", ne, { passive: !1 }), document.removeEventListener("mouseup", _), "ontouchstart" in window && (document.removeEventListener("touchmove", ne, { passive: !1 }), document.removeEventListener("touchend", _));
		}, g = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: i } = n.getBoundingClientRect(), { clientX: a, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				p.value.cursorOffset = r.horizontal ? o - i : a - t;
			}
			ee(), p.value.mouseDown = !0, p.value.activeSplitter = t, document.documentElement.style.cursor = r.horizontal ? "row-resize" : "col-resize";
		}, ne = (e) => {
			p.value.mouseDown && (e.preventDefault(), p.value.dragging || (window.getSelection()?.removeAllRanges(), p.value.dragging = !0), requestAnimationFrame(() => {
				C(re(e)), ge("resize", { event: e }, !0);
			}));
		}, _ = (e) => {
			p.value.dragging && (window.getSelection()?.removeAllRanges(), ge("resized", { event: e }, !0)), p.value.mouseDown = !1, p.value.activeSplitter = null, setTimeout(() => {
				p.value.dragging = !1, te(), document.documentElement.style.cursor = "";
			}, 100);
		}, v = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), m.value.splitter === t ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, b(e, t), m.value.splitter = null) : (m.value.splitter = t, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500))), p.value.dragging || ge("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, b = (e, t) => {
			if (ge("splitter-dblclick", {
				event: e,
				index: t
			}, !0), r.maximizePanes) {
				let n = 0;
				o.value = o.value.map((e, r) => (e.size = r === t ? e.max : e.min, r !== t && (n += e.min), e)), o.value[t].size -= n, ge("pane-maximize", {
					event: e,
					index: t,
					pane: o.value[t]
				}), ge("resized", {
					event: e,
					index: t
				}, !0);
			}
		}, x = (e, t) => {
			if (!r.keyboardStep) return;
			let n = r.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", i = r.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !i) return;
			e.preventDefault(), p.value.activeSplitter = t;
			let a = (n ? 1 : -1) * (r.rtl && !r.horizontal ? -1 : 1), s = D(t) + o.value[t].size;
			w(Math.min(Math.max(s + a * r.keyboardStep, 0), 100)), ge("resize", { event: e }, !0), ge("resized", { event: e }, !0), p.value.activeSplitter = null;
		}, S = (e, t) => {
			let n = s.value[t];
			n && ge("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, re = (e) => {
			let t = l.value.getBoundingClientRect(), { clientX: n, clientY: i } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (r.horizontal ? 0 : p.value.cursorOffset) - t.left,
				y: i - (r.horizontal ? p.value.cursorOffset : 0) - t.top
			};
		}, ie = (e) => {
			e = e[r.horizontal ? "y" : "x"];
			let t = l.value[r.horizontal ? "clientHeight" : "clientWidth"];
			return r.rtl && !r.horizontal && (e = t - e), e * 100 / t;
		}, C = (e) => {
			w(ie(e));
		}, w = (e) => {
			let t = p.value.activeSplitter;
			if (t === null || t >= o.value.length - 1) return;
			let n = {
				prevPanesSize: D(t),
				nextPanesSize: O(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, i = 0 + (r.pushOtherPanes ? 0 : n.prevPanesSize), a = 100 - (r.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, a), i);
			let s = [t, t + 1], c = o.value[s[0]] || null, l = o.value[s[1]] || null, u = c !== null && c.max < 100 && e >= c.max + n.prevPanesSize, d = l !== null && l.max < 100 && e <= 100 - (l.max + O(t + 1));
			if (u || d) {
				u ? (c.size = c.max, l.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - n.nextPanesSize, l.min), l.max)) : (c.size = Math.min(Math.max(100 - l.max - n.prevPanesSize - O(t + 1), c.min), c.max), l.size = l.max);
				return;
			}
			if (r.pushOtherPanes) {
				let t = T(n, e);
				if (!t) return;
				({sums: n, panesToResize: s} = t), c = o.value[s[0]] || null, l = o.value[s[1]] || null;
			}
			c !== null && (c.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, c.min), c.max)), l !== null && (l.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, l.min), l.max));
		}, T = (e, t) => {
			let n = p.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + o.value[r[0]].min) {
				if (r[0] = ae(n).index, e.prevReachedMinPanes = 0, r[0] < n && o.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), o.value[r[1]].size = 100 - e.prevReachedMinPanes - o.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = D(r[0]);
			}
			return t > 100 - e.nextPanesSize - o.value[r[1]].min && (r[1] = k(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && o.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : O(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, o.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (o.value[r[0]].size = 100 - e.prevPanesSize - O(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, D = (e) => o.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), O = (e) => o.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), ae = (e) => [...o.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, k = (e) => o.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, oe = () => {
			let e = Array.from(l.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, j = (e, t, n = !1) => {
			let i = e - 1, a = document.createElement("div");
			a.classList.add("splitpanes__splitter"), n || (a.onmousedown = (e) => g(e, i), typeof window < "u" && "ontouchstart" in window && (a.ontouchstart = (e) => g(e, i)), a.onclick = (e) => v(e, i + 1), r.keyboardStep && (a.setAttribute("tabindex", "0"), a.setAttribute("role", "separator"), a.setAttribute("aria-orientation", r.horizontal ? "horizontal" : "vertical"), a.onkeydown = (e) => x(e, i))), a.ondblclick = (e) => b(e, i + 1), t.parentNode.insertBefore(a, t);
		}, le = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, ue = () => {
			let e = Array.from(l.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && le(t);
			let t = 0;
			for (let n of e) n.className.includes("splitpanes__pane") && (!t && r.firstSplitter ? j(t, n, !0) : t && j(t, n), t++);
		}, de = ({ uid: e, ...t }) => {
			let n = s.value[e];
			for (let [e, r] of Object.entries(t)) n[e] = r;
		}, N = !1, fe = (e) => {
			let t = -1;
			Array.from(l.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), o.value.splice(t, 0, {
				...e,
				index: t
			}), o.value.forEach((e, t) => e.index = t), f.value && !N && (N = !0, rt(() => {
				ue(), P({ addedPane: o.value[t] }), ge("pane-add", { pane: o.value[t] }), N = !1;
			}));
		}, pe = (e) => {
			let t = o.value.findIndex((t) => t.id === e);
			o.value[t].el = null;
			let n = o.value.splice(t, 1)[0];
			o.value.forEach((e, t) => e.index = t), rt(() => {
				ue(), ge("pane-remove", { pane: n }), P({ removedPane: {
					...n,
					index: t
				} });
			});
		}, P = (e = {}) => {
			!e.addedPane && !e.removedPane ? me() : o.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? I(e) : F(), f.value && ge("resized");
		}, F = () => {
			let e = 100 / c.value, t = 100, n = [], r = [];
			for (let i of o.value) i.size = Math.max(Math.min(e, i.max), i.min), t -= i.size, i.size >= i.max && n.push(i.id), i.size <= i.min && r.push(i.id);
			Math.abs(t) > .1 && he(t, n, r);
		}, me = () => {
			let e = 100, t = [], n = [], r = 0;
			for (let i of o.value) e -= i.size, i.givenSize !== null && r++, i.size >= i.max && t.push(i.id), i.size <= i.min && n.push(i.id);
			let i = 100;
			if (e > .1) {
				for (let t of o.value) t.givenSize === null && (t.size = Math.max(Math.min(e / (c.value - r), t.max), t.min)), i -= t.size;
				i > .1 && he(i, t, n);
			}
		}, I = ({ addedPane: e, removedPane: t } = {}) => {
			let n = o.value.reduce((e, t) => e + (t.givenSize === null ? 0 : t.givenSize), 0), r = o.value.filter((e) => e.givenSize === null).length, i = r > 0 ? (100 - n) / r : 0, a = 0, s = [], c = [];
			for (let e of o.value) a -= e.size, e.size >= e.max && s.push(e.id), e.size <= e.min && c.push(e.id);
			if (!(Math.abs(a) < .1)) {
				a = 100;
				for (let e of o.value) e.givenSize === null && (e.size = Math.max(Math.min(i, e.max), e.min)), a -= e.size, e.size >= e.max && s.push(e.id), e.size <= e.min && c.push(e.id);
				Math.abs(a) > .1 && he(a, s, c);
			}
		}, he = (e, t, n) => {
			let r;
			r = e > 0 ? e / (c.value - t.length) : e / (c.value - n.length), o.value.forEach((i, a) => {
				if (e > 0 && !t.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				} else if (!n.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				}
			}), Math.abs(e) > .1 && f.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
		}, ge = (e, t = void 0, i = !1) => {
			let a = t?.index ?? p.value.activeSplitter ?? null;
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
		M(() => r.firstSplitter, () => ue()), M(() => r.horizontal, (e) => rt(() => {
			n("direction-changed", {
				horizontal: e,
				panes: o.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), ce(() => {
			oe(), ue(), P(), ge("ready"), f.value = !0;
		}), A(() => f.value = !1);
		let _e = () => {
			let { class: e, ...t } = i;
			return Re("div", {
				ref: l,
				class: [h.value, e],
				...t
			}, a.default?.());
		};
		return u("panes", o), u("indexedPanes", s), u("horizontal", G(() => r.horizontal)), u("requestUpdate", de), u("onPaneAdd", fe), u("onPaneRemove", pe), u("onPaneClick", S), (e, t) => (E(), U(y(_e)));
	}
}), sa = {
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
		let t = e, n = Ae("requestUpdate"), r = Ae("onPaneAdd"), i = Ae("horizontal"), a = Ae("onPaneRemove"), o = Ae("onPaneClick"), s = De()?.uid, c = Ae("indexedPanes"), l = G(() => c.value[s]), u = X(null), d = G(() => {
			let e = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
			return Math.max(Math.min(e, p.value), f.value);
		}), f = G(() => {
			let e = parseFloat(t.minSize);
			return isNaN(e) ? 0 : e;
		}), p = G(() => {
			let e = parseFloat(t.maxSize);
			return isNaN(e) ? 100 : e;
		}), m = G(() => {
			let e = l.value?.size ?? (t.size === void 0 ? void 0 : d.value);
			return e === void 0 ? "" : `${i.value ? "height" : "width"}: ${e}%`;
		});
		return M(() => d.value, (e) => n({
			uid: s,
			size: e
		})), M(() => f.value, (e) => n({
			uid: s,
			min: e
		})), M(() => p.value, (e) => n({
			uid: s,
			max: e
		})), ce(() => {
			r({
				id: s,
				el: u.value,
				min: f.value,
				max: p.value,
				givenSize: t.size === void 0 ? null : d.value,
				size: d.value
			});
		}), A(() => a(s)), (e, t) => (E(), q("div", {
			ref_key: "paneEl",
			ref: u,
			class: "splitpanes__pane",
			onClick: t[0] ||= (t) => B(o)(t, e._.uid),
			style: ze(m.value)
		}, [w(e.$slots, "default")], 4));
	}
};
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/appName.mjs
function ca(e) {
	let t = !1, n;
	return (...r) => (t || (t = !0, n = e(...r)), n);
}
var la = "missing-app-name";
try {
	la = "rechnungswerk";
} catch {
	a.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
var ua = la;
function da() {
	return Ae("appName", ua);
}
var fa = ca(() => {
	let e = dt("core", "apps", []), t = da();
	return e.find(({ id: e }) => e === t)?.name ?? t;
});
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcAppContent.mjs
m(oe);
var pa = /* @__PURE__ */ O(/* @__PURE__ */ z({
	__name: "NcAppContentDetailsToggle",
	setup(e) {
		let t = pt();
		M(t, n), ce(() => {
			n(t.value);
		}), A(() => {
			t.value && n(!1);
		});
		function n(e = !0) {
			let t = document.querySelector(".app-navigation .app-navigation-toggle");
			t && (t.style.display = e ? "none" : "", e === !0 && r("toggle-navigation", { open: !1 }));
		}
		return (e, n) => (E(), U(B(I), {
			"aria-label": B(p)("Go back to the list"),
			class: V(["app-details-toggle", { "app-details-toggle--mobile": B(t) }]),
			title: B(p)("Go back to the list"),
			variant: "tertiary"
		}, {
			icon: g(() => [W(B(fe), {
				directional: "",
				path: B(Ve)
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-label",
			"class",
			"title"
		]));
	}
}), [["__scopeId", "data-v-a28923a1"]]), ma = {
	key: 0,
	class: "hidden-visually"
}, ha = { class: "app-content-wrapper__list" }, ga = {
	key: 1,
	class: "app-content-wrapper"
}, _a = e("nextcloud").persist().build(), va = _t().theming?.name ?? "Nextcloud", ya = /* @__PURE__ */ O(/* @__PURE__ */ z({
	__name: "NcAppContent",
	props: /* @__PURE__ */ _e({
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
	emits: /* @__PURE__ */ _e(["resizeList", "update:showDetails"], ["update:showDetails"]),
	setup(e, { emit: t }) {
		let n = at(e, "showDetails"), i = t, o = da(), s = fa(), c = pt(), l = gt(), u = mt(() => e.disableSwipe ? void 0 : l.value, { onSwipeEnd(e, t) {
			Math.abs(u.lengthX.value) > 70 && (u.coordsStart.x < 150 && t === "right" ? r("toggle-navigation", { open: !0 }) : u.coordsStart.x < 450 && t === "left" && r("toggle-navigation", { open: !1 }));
		} }), d = X(), f = G(() => e.paneConfigKey === "" ? `pane-list-size-${o}` : `pane-list-size-${e.paneConfigKey}`), p = G(() => ({
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
		})), m = G(() => d.value ? 100 - d.value : p.value.details.size), h = G(() => {
			let t = /* @__PURE__ */ new Set();
			if (e.pageTitle) for (let n of e.pageTitle.split(" - ")) t.add(n);
			else if (e.pageHeading) {
				for (let n of e.pageHeading.split(" - ")) t.add(n);
				t.size > 0 && t.add(s);
			} else return null;
			return t.add(va), [...t.values()].join(" - ");
		});
		M(h, () => {
			h.value !== null && (document.title = h.value);
		}, { immediate: !0 }), M(() => e.paneConfigKey, te, { immediate: !0 }), ce(te);
		function ee(e) {
			let t = Math.trunc(e.panes[0].size);
			_a.setItem(f.value, JSON.stringify(t)), d.value = t, i("resizeList", { size: t }), a.debug("[NcAppContent] pane config", { listPaneSize: t });
		}
		function te() {
			let e = parseInt(_a.getItem(f.value) ?? "", 10);
			!isNaN(e) && e !== d.value && (a.debug("[NcAppContent] pane config", { listPaneSize: e }), d.value = e);
		}
		return (t, r) => (E(), q("main", {
			id: "app-content-vue",
			class: V(["app-content no-snapper", { "app-content--has-list": !!t.$slots.list }])
		}, [
			e.pageHeading ? (E(), q("h1", ma, H(e.pageHeading), 1)) : L("", !0),
			t.$slots.list ? (E(), q(k, { key: 1 }, [B(c) || e.layout === "no-split" ? (E(), q("div", {
				key: 0,
				class: V(["app-content-wrapper app-content-wrapper--no-split", {
					"app-content-wrapper--show-details": n.value,
					"app-content-wrapper--show-list": !n.value,
					"app-content-wrapper--mobile": B(c)
				}])
			}, [
				n.value ? (E(), U(pa, {
					key: 0,
					onClick: r[0] ||= P((e) => n.value = !1, ["stop", "prevent"])
				})) : L("", !0),
				S(Y("div", ha, [w(t.$slots, "list", {}, void 0, !0)], 512), [[x, !n.value]]),
				n.value ? w(t.$slots, "default", {}, void 0, !0, 1) : L("", !0)
			], 2)) : e.layout === "vertical-split" || e.layout === "horizontal-split" ? (E(), q("div", ga, [W(B(oa), {
				horizontal: e.layout === "horizontal-split",
				class: V(["default-theme", {
					"splitpanes--horizontal": e.layout === "horizontal-split",
					"splitpanes--vertical": e.layout === "vertical-split"
				}]),
				rtl: B(ct),
				onResized: ee
			}, {
				default: g(() => [W(B(sa), {
					class: "splitpanes__pane-list",
					size: d.value || p.value.list.size,
					minSize: p.value.list.min,
					maxSize: p.value.list.max
				}, {
					default: g(() => [w(t.$slots, "list", {}, void 0, !0)]),
					_: 3
				}, 8, [
					"size",
					"minSize",
					"maxSize"
				]), W(B(sa), {
					class: "splitpanes__pane-details",
					size: m.value,
					minSize: p.value.details.min,
					maxSize: p.value.details.max
				}, {
					default: g(() => [w(t.$slots, "default", {}, void 0, !0)]),
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
			])])) : L("", !0)], 64)) : L("", !0),
			t.$slots.list ? L("", !0) : w(t.$slots, "default", {}, void 0, !0, 2)
		], 2));
	}
}), [["__scopeId", "data-v-5de09463"]]), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ba = {
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
}, xa = ["aria-hidden", "aria-label"], Sa = [
	"fill",
	"width",
	"height"
], Ca = { d: "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" }, wa = { key: 0 };
function Ta(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-document-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ca, [n.title ? (E(), q("title", wa, H(n.title), 1)) : L("", !0)])], 8, Sa))], 16, xa);
}
var Ea = /*#__PURE__*/ $(ba, [["render", Ta]]), Da = {
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
}, Oa = ["aria-hidden", "aria-label"], ka = [
	"fill",
	"width",
	"height"
], Aa = { d: "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" }, ja = { key: 0 };
function Ma(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-document-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Aa, [n.title ? (E(), q("title", ja, H(n.title), 1)) : L("", !0)])], 8, ka))], 16, Oa);
}
var Na = /*#__PURE__*/ $(Da, [["render", Ma]]), Pa = {
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
}, Fa = ["aria-hidden", "aria-label"], Ia = [
	"fill",
	"width",
	"height"
], La = { d: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" }, Ra = { key: 0 };
function za(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon account-group-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", La, [n.title ? (E(), q("title", Ra, H(n.title), 1)) : L("", !0)])], 8, Ia))], 16, Fa);
}
var Ba = /*#__PURE__*/ $(Pa, [["render", za]]), Va = {
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
}, Ha = ["aria-hidden", "aria-label"], Ua = [
	"fill",
	"width",
	"height"
], Wa = { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" }, Ga = { key: 0 };
function Ka(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon account-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Wa, [n.title ? (E(), q("title", Ga, H(n.title), 1)) : L("", !0)])], 8, Ua))], 16, Ha);
}
var qa = /*#__PURE__*/ $(Va, [["render", Ka]]), Ja = {
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
}, Ya = ["aria-hidden", "aria-label"], Xa = [
	"fill",
	"width",
	"height"
], Za = { d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" }, Qa = { key: 0 };
function $a(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon package-variant-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Za, [n.title ? (E(), q("title", Qa, H(n.title), 1)) : L("", !0)])], 8, Xa))], 16, Ya);
}
var eo = /*#__PURE__*/ $(Ja, [["render", $a]]), to = {
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
}, no = ["aria-hidden", "aria-label"], ro = [
	"fill",
	"width",
	"height"
], io = { d: "M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, ao = { key: 0 };
function oo(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon text-box-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", io, [n.title ? (E(), q("title", ao, H(n.title), 1)) : L("", !0)])], 8, ro))], 16, no);
}
var so = /*#__PURE__*/ $(to, [["render", oo]]), co = {
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
], fo = { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" }, po = { key: 0 };
function mo(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon cog-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", fo, [n.title ? (E(), q("title", po, H(n.title), 1)) : L("", !0)])], 8, uo))], 16, lo);
}
var ho = /*#__PURE__*/ $(co, [["render", mo]]), go = {
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
}, _o = ["aria-hidden", "aria-label"], vo = [
	"fill",
	"width",
	"height"
], yo = { d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" }, bo = { key: 0 };
function xo(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon lock-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", yo, [n.title ? (E(), q("title", bo, H(n.title), 1)) : L("", !0)])], 8, vo))], 16, _o);
}
var So = /*#__PURE__*/ $(go, [["render", xo]]), Co = {
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
}, wo = ["aria-hidden", "aria-label"], To = [
	"fill",
	"width",
	"height"
], Eo = { d: "M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" }, Do = { key: 0 };
function Oo(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon chart-bar-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Eo, [n.title ? (E(), q("title", Do, H(n.title), 1)) : L("", !0)])], 8, To))], 16, wo);
}
var ko = /*#__PURE__*/ $(Co, [["render", Oo]]), Ao = {
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
}, jo = ["aria-hidden", "aria-label"], Mo = [
	"fill",
	"width",
	"height"
], No = { d: "M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z" }, Po = { key: 0 };
function Fo(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon counter-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", No, [n.title ? (E(), q("title", Po, H(n.title), 1)) : L("", !0)])], 8, Mo))], 16, jo);
}
var Io = /*#__PURE__*/ $(Ao, [["render", Fo]]), Lo = {
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
}, Ro = ["aria-hidden", "aria-label"], zo = [
	"fill",
	"width",
	"height"
], Bo = { d: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, Vo = { key: 0 };
function Ho(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon email-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Bo, [n.title ? (E(), q("title", Vo, H(n.title), 1)) : L("", !0)])], 8, zo))], 16, Ro);
}
var Uo = /*#__PURE__*/ $(Lo, [["render", Ho]]), Wo = {
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
}, Go = ["aria-hidden", "aria-label"], Ko = [
	"fill",
	"width",
	"height"
], qo = { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" }, Jo = { key: 0 };
function Yo(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", qo, [n.title ? (E(), q("title", Jo, H(n.title), 1)) : L("", !0)])], 8, Ko))], 16, Go);
}
var Xo = /*#__PURE__*/ $(Wo, [["render", Yo]]), Zo = {
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
}, Qo = ["aria-hidden", "aria-label"], $o = [
	"fill",
	"width",
	"height"
], es = { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, ts = { key: 0 };
function ns(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon magnify-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", es, [n.title ? (E(), q("title", ts, H(n.title), 1)) : L("", !0)])], 8, $o))], 16, Qo);
}
var rs = /*#__PURE__*/ $(Zo, [["render", ns]]), is = {
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
], ss = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, cs = { key: 0 };
function ls(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon star-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", ss, [n.title ? (E(), q("title", cs, H(n.title), 1)) : L("", !0)])], 8, os))], 16, as);
}
var us = /*#__PURE__*/ $(is, [["render", ls]]), ds = {
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
], ms = { d: "M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" }, hs = { key: 0 };
function gs(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon translate-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", ms, [n.title ? (E(), q("title", hs, H(n.title), 1)) : L("", !0)])], 8, ps))], 16, fs);
}
var _s = /*#__PURE__*/ $(ds, [["render", gs]]);
//#endregion
//#region src/api/client.ts
function vs(e) {
	return i(`/apps/rechnungswerk/api/v1${e}`);
}
function ys(e) {
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
async function bs(e) {
	try {
		let { data: t } = await Tt.get(vs(e));
		return t;
	} catch (e) {
		throw ys(e);
	}
}
async function xs(e, t) {
	try {
		let { data: n } = await Tt.post(vs(e), t);
		return n;
	} catch (e) {
		throw ys(e);
	}
}
async function Ss(e, t) {
	try {
		let { data: n } = await Tt.patch(vs(e), t);
		return n;
	} catch (e) {
		throw ys(e);
	}
}
async function Cs(e, t) {
	try {
		let { data: n } = await Tt.put(vs(e), t);
		return n;
	} catch (e) {
		throw ys(e);
	}
}
async function ws(e) {
	try {
		let { data: t } = await Tt.delete(vs(e));
		return t;
	} catch (e) {
		throw ys(e);
	}
}
//#endregion
//#region src/api/whatsnew.ts
var Ts = () => bs("/whatsnew"), Es = () => xs("/whatsnew/seen", {});
//#endregion
//#region src/utils/modalEsc.ts
function Ds(e, t) {
	e.target?.closest?.(".v-select.vs--open") || t();
}
//#endregion
//#region src/components/WhatsNewDialog.vue?vue&type=script&setup=true&lang.ts
var Os = { class: "whatsnew" }, ks = { class: "whatsnew__version" }, As = { class: "whatsnew__icon" }, js = { class: "whatsnew__body" }, Ms = { class: "whatsnew__entry-title" }, Ns = {
	key: 0,
	class: "whatsnew__badge"
}, Ps = { class: "whatsnew__entry-text" }, Fs = {
	key: 0,
	class: "whatsnew__where"
}, Is = { key: 0 }, Ls = { class: "actions" }, Rs = "https://werkwolke.de", zs = "whatsnew-title", Bs = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "WhatsNewDialog",
	setup(e) {
		let t = {
			"account-group": Ba,
			"chart-bar": ko,
			cog: ho,
			counter: Io,
			email: Uo,
			"file-document": Ea,
			folder: Xo,
			magnify: rs,
			star: us,
			translate: _s
		}, n = X(!1), r = X(""), i = X([]), a = j("rechnungswerk", "Was ist neu in RechnungsWerk");
		function o(e) {
			return t[e] ?? us;
		}
		ce(async () => {
			try {
				let e = await Ts();
				e.entries.length > 0 && (r.value = e.version, i.value = e.entries, n.value = !0);
			} catch {}
		});
		async function s() {
			n.value = !1;
			try {
				await Es();
			} catch {}
		}
		return (e, t) => n.value ? (E(), U(B(ft), {
			key: 0,
			labelId: zs,
			onKeydown: t[0] ||= me((e) => B(Ds)(e, s), ["esc"]),
			onClose: s
		}, {
			default: g(() => [Y("div", Os, [
				Y("h2", { id: zs }, H(B(a)), 1),
				Y("p", ks, H(B(j)("rechnungswerk", "Version {version}", { version: r.value })), 1),
				(E(!0), q(k, null, C(i.value, (e, t) => (E(), q("div", {
					key: t,
					class: "whatsnew__entry"
				}, [Y("div", As, [(E(), U(y(o(e.icon)), { size: 22 }))]), Y("div", js, [
					Y("h3", Ms, [R(H(e.title) + " ", 1), e.plus ? (E(), q("span", Ns, "WerkPlus")) : L("", !0)]),
					Y("p", Ps, H(e.text), 1),
					e.where ? (E(), q("p", Fs, [
						R(H(B(j)("rechnungswerk", "Zu finden unter")) + " ", 1),
						Y("b", null, H(e.where), 1),
						e.adminOnly ? (E(), q("span", Is, H(" " + B(j)("rechnungswerk", "(nur für Administratoren)")), 1)) : L("", !0)
					])) : L("", !0),
					e.plus ? (E(), q("a", {
						key: 1,
						class: "whatsnew__link",
						href: Rs,
						target: "_blank",
						rel: "noreferrer noopener"
					}, H(B(j)("rechnungswerk", "Mehr zu WerkPlus")), 1)) : L("", !0)
				])]))), 128)),
				Y("div", Ls, [W(B(I), {
					variant: "primary",
					onClick: s
				}, {
					default: g(() => [R(H(B(j)("rechnungswerk", "Alles klar")), 1)]),
					_: 1
				})])
			])]),
			_: 1
		})) : L("", !0);
	}
}), [["__scopeId", "data-v-b6c0c6dc"]]), Vs = () => bs("/permission-info"), Hs = () => bs("/permissions"), Us = (e) => Cs("/permissions", e), Ws = (e) => bs(`/principals/search?query=${encodeURIComponent(e)}`), Gs = ln("permissions", () => {
	let e = X(null), t = X(!1);
	async function n() {
		try {
			e.value = await Vs();
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
}), Ks = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "App",
	setup(e) {
		let t = Gs(), n = G(() => t.info?.hasAccess ?? !1), r = G(() => t.info?.isAdmin ?? !1);
		return ce(() => {
			t.fetch();
		}), (e, i) => {
			let a = D("router-view");
			return E(), U(B(ii), { appName: "rechnungswerk" }, {
				default: g(() => [B(t).loaded ? n.value ? (E(), q(k, { key: 2 }, [
					W(B(pi), null, {
						footer: g(() => [W(B(aa), {
							name: B(j)("rechnungswerk", "Mein Kontakt"),
							to: { name: "my-contact" }
						}, {
							icon: g(() => [W(qa, { size: 20 })]),
							_: 1
						}, 8, ["name"]), r.value ? (E(), U(B(aa), {
							key: 0,
							name: B(j)("rechnungswerk", "Einstellungen"),
							to: { name: "settings" }
						}, {
							icon: g(() => [W(ho, { size: 20 })]),
							_: 1
						}, 8, ["name"])) : L("", !0)]),
						default: g(() => [
							W(B(aa), {
								name: B(j)("rechnungswerk", "Rechnungen"),
								to: { name: "invoices" }
							}, {
								icon: g(() => [W(Ea, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							W(B(aa), {
								name: B(j)("rechnungswerk", "Angebote"),
								to: { name: "quotes" }
							}, {
								icon: g(() => [W(Na, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							W(B(aa), {
								name: B(j)("rechnungswerk", "Kunden"),
								to: { name: "customers" }
							}, {
								icon: g(() => [W(Ba, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							W(B(aa), {
								name: B(j)("rechnungswerk", "Produkte"),
								to: { name: "products" }
							}, {
								icon: g(() => [W(eo, { size: 20 })]),
								_: 1
							}, 8, ["name"]),
							W(B(aa), {
								name: B(j)("rechnungswerk", "Textbausteine"),
								to: { name: "text-snippets" }
							}, {
								icon: g(() => [W(so, { size: 20 })]),
								_: 1
							}, 8, ["name"])
						]),
						_: 1
					}),
					W(B(ya), null, {
						default: g(() => [W(a)]),
						_: 1
					}),
					W(Bs)
				], 64)) : (E(), U(B(ya), { key: 1 }, {
					default: g(() => [W(B(wt), {
						name: B(j)("rechnungswerk", "Kein Zugriff"),
						description: B(j)("rechnungswerk", "Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.")
					}, {
						icon: g(() => [W(So, { size: 20 })]),
						_: 1
					}, 8, ["name", "description"])]),
					_: 1
				})) : (E(), U(B(ya), { key: 0 }, {
					default: g(() => [W(B(kt), {
						class: "rw-app-loading",
						size: 44
					})]),
					_: 1
				}))]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-a99a62d0"]]), qs = {
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
}, Js = ["aria-hidden", "aria-label"], Ys = [
	"fill",
	"width",
	"height"
], Xs = { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" }, Zs = { key: 0 };
function Qs(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon information-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Xs, [n.title ? (E(), q("title", Zs, H(n.title), 1)) : L("", !0)])], 8, Ys))], 16, Js);
}
var $s = /*#__PURE__*/ $(qs, [["render", Qs]]), ec = { class: "info-icon-wrapper" }, tc = {
	class: "info-popup",
	tabindex: "0"
}, nc = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "InfoIcon",
	setup(e) {
		return (e, t) => (E(), q("span", ec, [W(B(ut), {
			popupRole: "tooltip",
			noFocusTrap: ""
		}, {
			trigger: g(() => [W($s, {
				class: "info-icon",
				size: 14,
				tabindex: "0"
			})]),
			default: g(() => [Y("div", tc, [w(e.$slots, "default", {}, void 0, !0)])]),
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
], oc = { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, sc = { key: 0 };
function cc(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon plus-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", oc, [n.title ? (E(), q("title", sc, H(n.title), 1)) : L("", !0)])], 8, ac))], 16, ic);
}
var lc = /*#__PURE__*/ $(rc, [["render", cc]]), uc = {
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
}, dc = ["aria-hidden", "aria-label"], fc = [
	"fill",
	"width",
	"height"
], pc = { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" }, mc = { key: 0 };
function hc(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon download-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", pc, [n.title ? (E(), q("title", mc, H(n.title), 1)) : L("", !0)])], 8, fc))], 16, dc);
}
var gc = /*#__PURE__*/ $(uc, [["render", hc]]), _c = {
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
}, vc = ["aria-hidden", "aria-label"], yc = [
	"fill",
	"width",
	"height"
], bc = { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }, xc = { key: 0 };
function Sc(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon content-copy-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", bc, [n.title ? (E(), q("title", xc, H(n.title), 1)) : L("", !0)])], 8, yc))], 16, vc);
}
var Cc = /*#__PURE__*/ $(_c, [["render", Sc]]), wc = {
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
], Dc = { d: "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" }, Oc = { key: 0 };
function kc(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon pencil-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Dc, [n.title ? (E(), q("title", Oc, H(n.title), 1)) : L("", !0)])], 8, Ec))], 16, Tc);
}
var Ac = /*#__PURE__*/ $(wc, [["render", kc]]), jc = {
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
}, Mc = ["aria-hidden", "aria-label"], Nc = [
	"fill",
	"width",
	"height"
], Pc = { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }, Fc = { key: 0 };
function Ic(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon close-circle-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Pc, [n.title ? (E(), q("title", Fc, H(n.title), 1)) : L("", !0)])], 8, Nc))], 16, Mc);
}
var Lc = /*#__PURE__*/ $(jc, [["render", Ic]]), Rc = {
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
}, zc = ["aria-hidden", "aria-label"], Bc = [
	"fill",
	"width",
	"height"
], Vc = { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" }, Hc = { key: 0 };
function Uc(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon check-circle-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Vc, [n.title ? (E(), q("title", Hc, H(n.title), 1)) : L("", !0)])], 8, Bc))], 16, zc);
}
var Wc = /*#__PURE__*/ $(Rc, [["render", Uc]]), Gc = {
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
}, Kc = ["aria-hidden", "aria-label"], qc = [
	"fill",
	"width",
	"height"
], Jc = { d: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" }, Yc = { key: 0 };
function Xc(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon clock-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Jc, [n.title ? (E(), q("title", Yc, H(n.title), 1)) : L("", !0)])], 8, qc))], 16, Kc);
}
var Zc = /*#__PURE__*/ $(Gc, [["render", Xc]]), Qc = {
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
}, $c = ["aria-hidden", "aria-label"], el = [
	"fill",
	"width",
	"height"
], tl = { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, nl = { key: 0 };
function rl(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon help-circle-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", tl, [n.title ? (E(), q("title", nl, H(n.title), 1)) : L("", !0)])], 8, el))], 16, $c);
}
var il = /*#__PURE__*/ $(Qc, [["render", rl]]), al = {
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
}, ol = ["aria-hidden", "aria-label"], sl = [
	"fill",
	"width",
	"height"
], cl = { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, ll = { key: 0 };
function ul(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon checkbox-blank-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", cl, [n.title ? (E(), q("title", ll, H(n.title), 1)) : L("", !0)])], 8, sl))], 16, ol);
}
var dl = /*#__PURE__*/ $(al, [["render", ul]]), fl = {
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
}, pl = ["aria-hidden", "aria-label"], ml = [
	"fill",
	"width",
	"height"
], hl = { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, gl = { key: 0 };
function _l(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon checkbox-marked-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", hl, [n.title ? (E(), q("title", gl, H(n.title), 1)) : L("", !0)])], 8, ml))], 16, pl);
}
var vl = /*#__PURE__*/ $(fl, [["render", _l]]), yl = {
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
}, bl = ["aria-hidden", "aria-label"], xl = [
	"fill",
	"width",
	"height"
], Sl = { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }, Cl = { key: 0 };
function wl(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon check-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Sl, [n.title ? (E(), q("title", Cl, H(n.title), 1)) : L("", !0)])], 8, xl))], 16, bl);
}
var Tl = /*#__PURE__*/ $(yl, [["render", wl]]), El = {
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
}, Dl = ["aria-hidden", "aria-label"], Ol = [
	"fill",
	"width",
	"height"
], kl = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, Al = { key: 0 };
function jl(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", kl, [n.title ? (E(), q("title", Al, H(n.title), 1)) : L("", !0)])], 8, Ol))], 16, Dl);
}
var Ml = /*#__PURE__*/ $(El, [["render", jl]]), Nl = () => bs("/invoices"), Pl = (e) => bs(`/invoices/${e}`), Fl = (e) => xs("/invoices", { data: e }), Il = (e, t) => Ss(`/invoices/${e}`, { data: t }), Ll = (e) => ws(`/invoices/${e}`), Rl = (e) => xs(`/invoices/${e}/commit`, {}), zl = (e) => xs(`/invoices/${e}/cancel`, {}), Bl = (e) => xs(`/invoices/${e}/duplicate`, {}), Vl = (e, t) => xs(`/invoices/${e}/pay`, t ? { date: t } : {}), Hl = (e) => xs(`/invoices/${e}/unpay`, {}), Ul = (e) => vs(`/invoices/${e}/pdf`), Wl = (e) => vs(`/invoices/${e}/preview`) + "?t=" + Date.now(), Gl = (e) => {
	let t = document.createElement("a");
	t.href = Ul(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Kl = (e, t) => xs(`/invoices/${e}/send`, t), ql = ln("invoice", () => {
	let e = X([]), t = X(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await Nl();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => Pl(e);
	async function i(e) {
		let t = await Fl(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await Il(e, t);
		return await n(), r;
	}
	async function o(t) {
		await Ll(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await Rl(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await zl(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await Bl(e);
		return await n(), t;
	}
	async function u(e, t) {
		let r = await Vl(e, t);
		return await n(), r;
	}
	async function d(e) {
		let t = await Hl(e);
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
}), Jl = (e) => xs("/smtp/test", e), Yl = () => bs("/settings"), Xl = (e) => Cs("/settings", { data: e }), Zl = (e) => Cs("/settings/logo", { path: e }), Ql = () => ws("/settings/logo"), $l = (e) => `${vs("/settings/logo")}?v=${e}`, eu = (e) => Cs("/settings/archive-folder", { path: e }), tu = () => ws("/settings/archive-folder"), nu = ln("settings", () => {
	let e = X(null), t = X(!1), n = X(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Yl();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		n.value = !0;
		try {
			return e.value = await Xl(t), e.value;
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
}), ru = [
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
], iu = {
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
}, au = [
	1900,
	700,
	0
], ou = "Gem. § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.", su = {
	invoice: "Rechnung",
	quote: "Angebot"
}, cu = {
	opening: "Anrede & Einleitung",
	closing: "Schlusstext"
}, lu = {
	draft: "Entwurf",
	committed: "Festgeschrieben",
	cancelled: "Storniert"
}, uu = {
	invoice: "Rechnung",
	cancellation: "Storno",
	quote: "Angebot"
}, du = {
	draft: "Entwurf",
	open: "Offen",
	expired: "Abgelaufen",
	accepted: "Angenommen",
	rejected: "Abgelehnt",
	converted: "Übernommen",
	superseded: "Revidiert"
};
function fu(e) {
	return e.includes(".") ? /^\d{1,3}(\.\d{3})+$/.test(e) : /^\d*$/.test(e);
}
function pu(e, t, n) {
	if (e == null) return null;
	let r = String(e).replace(/[\s  ]+/g, "");
	if (r === "") return null;
	let i = !1;
	if (r.startsWith("-") ? (i = !0, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1)), r === "" || !/^[0-9.,]+$/.test(r)) return null;
	let a = r.indexOf(","), o, s;
	if (a >= 0) {
		if (r.includes(",", a + 1) || (o = r.slice(0, a), s = r.slice(a + 1), s.includes("."))) return null;
	} else o = r, s = "";
	if (!fu(o) || (o = o.split(".").join(""), o === "" && s === "") || (o === "" && (o = "0"), !/^\d+$/.test(o)) || s !== "" && !/^\d+$/.test(s) || s.length > t || (o = o.replace(/^0+/, ""), o === "" && (o = "0"), o.length > n)) return null;
	s = s.replace(/0+$/, "");
	let c = o + (s === "" ? "" : "." + s);
	return i && c !== "0" ? "-" + c : c;
}
function mu(e) {
	return e == null || String(e).trim() === "" ? "1" : pu(e, 3, 9);
}
function hu(e) {
	return e == null || String(e).trim() === "" ? "0" : pu(e, 4, 9);
}
function gu(e) {
	if (e === null) return "";
	let [t, n] = e.split("."), r = t.startsWith("-") ? "-" : "";
	return r + (r ? t.slice(1) : t).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (n ? "," + n : "");
}
function _u(e) {
	if (e == null) return "";
	let t = String(e).trim();
	if (t === "") return "";
	if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(t)) return t;
	let n = t.startsWith("-");
	(n || t.startsWith("+")) && (t = t.slice(1));
	let [r, i = ""] = t.split("."), a = r.replace(/^0+/, "") || "0", o = i.replace(/0+$/, "");
	return gu((n && (a !== "0" || o !== "") ? "-" : "") + a + (o === "" ? "" : "." + o));
}
//#endregion
//#region src/utils/money.ts
function vu(e) {
	return e == null ? "" : gu((e / 1e4).toFixed(4).replace(/(\.\d\d)(\d*?)0+$/, "$1$2"));
}
function yu(e) {
	let t = hu(e);
	return t === null ? 0 : Math.round(Number.parseFloat(t) * 1e4);
}
function bu(e) {
	let t = (e ?? 0) / 1e4;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	}).format(t);
}
function xu(e) {
	let t = (e ?? 0) / 100;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR"
	}).format(t);
}
function Su(e) {
	return `${e / 100} %`;
}
//#endregion
//#region src/views/InvoicesView.vue?vue&type=script&setup=true&lang.ts
var Cu = { class: "rw-view" }, wu = { class: "rw-view__head" }, Tu = { key: 2 }, Eu = { class: "rw-filterbar" }, Du = ["onClick"], Ou = { class: "rw-chip__n" }, ku = {
	key: 0,
	class: "rw-chip rw-chip--sum"
}, Au = { class: "rw-table-wrap" }, ju = { class: "rw-table" }, Mu = { class: "rw-th-info" }, Nu = { class: "rw-info-popup" }, Pu = { class: "rw-info-popup__hint" }, Fu = { class: "rw-info-popup__group" }, Iu = { class: "rw-legend__label" }, Lu = { class: "rw-legend__item" }, Ru = { class: "rw-legend__item" }, zu = { class: "rw-legend__item" }, Bu = {
	key: 0,
	class: "rw-info-popup__group"
}, Vu = { class: "rw-legend__label" }, Hu = { class: "rw-legend__item" }, Uu = { class: "rw-legend__item" }, Wu = { class: "rw-legend__item" }, Gu = { class: "num" }, Ku = { class: "rw-col-paid" }, qu = ["onClick"], Ju = { class: "rw-status-cell" }, Yu = { class: "rw-nowrap" }, Xu = {
	key: 0,
	class: "rw-pill"
}, Zu = { class: "num" }, Qu = ["aria-label", "onKeyup"], $u = ["title", "onClick"], ed = { class: "rw-col-paid" }, td = [
	"aria-label",
	"title",
	"onClick"
], nd = { class: "rw-col-actions" }, rd = { class: "rw-actions" }, id = 864e5, ad = /* @__PURE__ */ z({
	__name: "InvoicesView",
	setup(e) {
		let t = je(), n = ql(), r = nu(), i = X(""), a = G(() => !!r.settings?.imapHost), o = G(() => n.invoices.some((e) => !!e.datevStatus)), s = G(() => a.value || o.value), c = [
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
		], l = X("all"), u = (e) => e.paymentStatus === "unpaid" || e.paymentStatus === "overdue", d = G(() => {
			let e = {
				all: n.invoices.length,
				open: 0,
				overdue: 0,
				paid: 0
			};
			for (let t of n.invoices) u(t) && e.open++, t.paymentStatus === "overdue" && e.overdue++, t.paymentStatus === "paid" && e.paid++;
			return e;
		}), f = G(() => n.invoices.reduce((e, t) => e + (u(t) ? t.totalCents : 0), 0)), p = G(() => {
			switch (l.value) {
				case "open": return n.invoices.filter(u);
				case "overdue": return n.invoices.filter((e) => e.paymentStatus === "overdue");
				case "paid": return n.invoices.filter((e) => e.paymentStatus === "paid");
				default: return n.invoices;
			}
		});
		function m(e) {
			return e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e);
		}
		function h(e) {
			let t = m(e);
			t.setHours(0, 0, 0, 0);
			let n = /* @__PURE__ */ new Date();
			return n.setHours(0, 0, 0, 0), Math.round((t.getTime() - n.getTime()) / id);
		}
		function ee(e) {
			return e ? m(e).toLocaleDateString(void 0, {
				day: "numeric",
				month: "numeric"
			}) : "";
		}
		let ne = (e) => e.paymentStatus === "overdue" ? "rw-amt-overdue" : e.paymentStatus === "paid" ? "rw-amt-paid" : "";
		function _(e) {
			if (e.paymentStatus === "paid") return e.paidAt ? j("rechnungswerk", "bezahlt am {date}", { date: ee(e.paidAt) }) : j("rechnungswerk", "bezahlt");
			if (!e.dueDate) return "";
			let t = h(e.dueDate);
			if (e.paymentStatus === "overdue") {
				let e = -t;
				return e === 1 ? j("rechnungswerk", "1 Tag überfällig") : j("rechnungswerk", "{days} Tage überfällig", { days: String(e) });
			}
			return e.paymentStatus === "unpaid" ? t <= 0 ? j("rechnungswerk", "fällig heute") : t === 1 ? j("rechnungswerk", "fällig morgen ({date})", { date: ee(e.dueDate) }) : j("rechnungswerk", "fällig in {days} Tagen ({date})", {
				days: String(t),
				date: ee(e.dueDate)
			}) : "";
		}
		let v = (e) => e.paymentStatus === "paid" ? j("rechnungswerk", "Als unbezahlt markieren") : j("rechnungswerk", "Als bezahlt markieren");
		function b(e) {
			return e.paymentStatus === "paid" ? e.paidAt ? j("rechnungswerk", "Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen", { date: ee(e.paidAt) }) : j("rechnungswerk", "Bezahlt – klicken, um die Zahlung zurückzunehmen") : j("rechnungswerk", "Als bezahlt markieren");
		}
		async function x(e) {
			i.value = "";
			try {
				e.paymentStatus === "paid" ? await n.markUnpaid(e.id) : await n.markPaid(e.id);
			} catch (e) {
				i.value = e.message ?? j("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		let re = X(null), ie = X("");
		function w(e) {
			let t = e ? m(e) : /* @__PURE__ */ new Date(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
			return `${t.getFullYear()}-${n}-${r}`;
		}
		function T(e) {
			i.value = "", ie.value = w(e.paidAt), re.value = e.id;
		}
		function D() {
			re.value = null;
		}
		async function O(e) {
			if (!ie.value) {
				D();
				return;
			}
			i.value = "";
			try {
				await n.markPaid(e.id, ie.value), re.value = null;
			} catch (e) {
				i.value = e.message ?? j("rechnungswerk", "Zahldatum konnte nicht geändert werden");
			}
		}
		let ae = {
			draft: Ac,
			committed: So,
			cancelled: Lc
		}, oe = {
			pending: Zc,
			confirmed: Wc,
			unknown: il,
			failed: Lc
		}, se = (e) => ae[e] ?? Ea, A = (e) => e ? oe[e] ?? null : null, M = {
			pending: j("rechnungswerk", "An DATEV gesendet – Bestätigung ausstehend"),
			confirmed: j("rechnungswerk", "Von DATEV bestätigt (Beleg angenommen)"),
			unknown: j("rechnungswerk", "DATEV-Antwort prüfen"),
			failed: j("rechnungswerk", "Von DATEV abgelehnt")
		}, le = (e) => M[e] ?? "", ue = (e) => j("rechnungswerk", lu[e] ?? e), de = (e) => j("rechnungswerk", uu[e] ?? e), N = (e) => e.relatedNumber ? j("rechnungswerk", "{type} zu Rechnung {number}", {
			type: de(e.invoiceType),
			number: e.relatedNumber
		}) : de(e.invoiceType);
		function fe(e) {
			return e ? new Date(e).toLocaleDateString() : "—";
		}
		ce(() => {
			n.fetchAll().catch((e) => {
				i.value = e.message ?? j("rechnungswerk", "Laden fehlgeschlagen");
			}), r.fetch().catch(() => {});
		});
		function pe() {
			t.push({ name: "invoice-new" });
		}
		function F(e) {
			t.push({
				name: "invoice-detail",
				params: { id: String(e) }
			});
		}
		function he(e) {
			Gl(e);
		}
		async function ge(e) {
			i.value = "";
			try {
				let r = await n.duplicate(e);
				t.push({
					name: "invoice-detail",
					params: { id: String(r.id) }
				});
			} catch (e) {
				i.value = e.message ?? j("rechnungswerk", "Duplizieren fehlgeschlagen");
			}
		}
		return (e, t) => {
			let r = te("tooltip");
			return E(), q("div", Cu, [
				Y("div", wu, [Y("h2", null, H(B(j)("rechnungswerk", "Rechnungen")), 1), W(B(I), {
					variant: "primary",
					onClick: pe
				}, {
					icon: g(() => [W(lc, { size: 20 })]),
					default: g(() => [R(" " + H(B(j)("rechnungswerk", "Neue Rechnung")), 1)]),
					_: 1
				})]),
				i.value ? (E(), U(B(Q), {
					key: 0,
					type: "error",
					text: i.value
				}, null, 8, ["text"])) : L("", !0),
				!B(n).loading && B(n).invoices.length === 0 ? (E(), U(B(wt), {
					key: 1,
					name: B(j)("rechnungswerk", "Noch keine Rechnungen"),
					description: B(j)("rechnungswerk", "Lege deine erste Rechnung an.")
				}, {
					icon: g(() => [W(Ea, { size: 20 })]),
					_: 1
				}, 8, ["name", "description"])) : B(n).invoices.length > 0 ? (E(), q("div", Tu, [Y("div", Eu, [(E(), q(k, null, C(c, (e) => Y("button", {
					key: e.key,
					class: V(["rw-chip", {
						"rw-chip--active": l.value === e.key,
						"rw-chip--overdue": e.key === "overdue"
					}]),
					onClick: (t) => l.value = e.key
				}, [R(H(B(j)("rechnungswerk", e.label)) + " ", 1), Y("span", Ou, H(d.value[e.key]), 1)], 10, Du)), 64)), f.value > 0 ? (E(), q("span", ku, [R(H(B(j)("rechnungswerk", "Offen gesamt:")) + " ", 1), Y("strong", null, H(B(xu)(f.value)), 1)])) : L("", !0)]), Y("div", Au, [Y("table", ju, [Y("thead", null, [Y("tr", null, [
					Y("th", null, [Y("span", Mu, [R(H(B(j)("rechnungswerk", "Status")) + " ", 1), W(nc, null, {
						default: g(() => [Y("div", Nu, [
							Y("p", Pu, H(B(j)("rechnungswerk", "Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.")), 1),
							Y("div", Fu, [
								Y("span", Iu, H(B(j)("rechnungswerk", "Rechnung")), 1),
								Y("span", Lu, [W(So, {
									size: 16,
									class: "rw-sicon rw-sicon--committed"
								}), R(" " + H(B(j)("rechnungswerk", "Festgeschrieben")), 1)]),
								Y("span", Ru, [W(Ac, {
									size: 16,
									class: "rw-sicon rw-sicon--draft"
								}), R(" " + H(B(j)("rechnungswerk", "Entwurf")), 1)]),
								Y("span", zu, [W(Lc, {
									size: 16,
									class: "rw-sicon rw-sicon--cancelled"
								}), R(" " + H(B(j)("rechnungswerk", "Storniert")), 1)])
							]),
							s.value ? (E(), q("div", Bu, [
								Y("span", Vu, H(B(j)("rechnungswerk", "DATEV-Übergabe")), 1),
								Y("span", Hu, [W(Wc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-confirmed"
								}), R(" " + H(B(j)("rechnungswerk", "bestätigt")), 1)]),
								Y("span", Uu, [W(Zc, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-pending"
								}), R(" " + H(B(j)("rechnungswerk", "gesendet")), 1)]),
								Y("span", Wu, [W(il, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-unknown"
								}), R(" " + H(B(j)("rechnungswerk", "Antwort prüfen")), 1)])
							])) : L("", !0)
						])]),
						_: 1
					})])]),
					Y("th", null, H(B(j)("rechnungswerk", "Nummer")), 1),
					Y("th", null, H(B(j)("rechnungswerk", "Empfänger")), 1),
					Y("th", null, H(B(j)("rechnungswerk", "Datum")), 1),
					Y("th", Gu, H(B(j)("rechnungswerk", "Brutto")), 1),
					Y("th", Ku, H(B(j)("rechnungswerk", "Bezahlt")), 1),
					t[2] ||= Y("th", { class: "rw-col-actions" }, null, -1)
				])]), Y("tbody", null, [(E(!0), q(k, null, C(p.value, (e) => (E(), q("tr", {
					key: e.id,
					class: V(["rw-row-clickable", { "rw-row--overdue": e.paymentStatus === "overdue" }]),
					onClick: (t) => F(e.id)
				}, [
					Y("td", null, [Y("span", Ju, [(E(), U(y(se(e.status)), {
						size: 20,
						class: V(["rw-sicon", `rw-sicon--${e.status}`]),
						title: ue(e.status)
					}, null, 8, ["class", "title"])), s.value && e.datevStatus && A(e.datevStatus) ? (E(), U(y(A(e.datevStatus)), {
						key: 0,
						size: 18,
						class: V(["rw-sicon", `rw-sicon--datev-${e.datevStatus}`]),
						title: le(e.datevStatus)
					}, null, 8, ["class", "title"])) : L("", !0)])]),
					Y("td", Yu, [R(H(e.number ?? B(j)("rechnungswerk", "(Entwurf)")) + " ", 1), e.invoiceType === "invoice" ? L("", !0) : S((E(), q("span", Xu, [R(H(de(e.invoiceType)), 1)])), [[r, N(e)]])]),
					Y("td", null, H(e.recipientName ?? "—"), 1),
					Y("td", null, H(fe(e.issueDate ?? e.createdAt)), 1),
					Y("td", Zu, [Y("span", { class: V(ne(e)) }, H(B(xu)(e.totalCents)), 3), re.value === e.id ? (E(), q("div", {
						key: 0,
						class: "rw-paid-edit",
						onClick: t[1] ||= P(() => {}, ["stop"])
					}, [
						S(Y("input", {
							"onUpdate:modelValue": t[0] ||= (e) => ie.value = e,
							type: "date",
							class: "rw-input rw-paid-input",
							"aria-label": B(j)("rechnungswerk", "Zahldatum"),
							onKeyup: [me((t) => O(e), ["enter"]), me(D, ["esc"])]
						}, null, 40, Qu), [[J, ie.value]]),
						W(B(I), {
							variant: "primary",
							"aria-label": B(j)("rechnungswerk", "Zahldatum speichern"),
							title: B(j)("rechnungswerk", "Zahldatum speichern"),
							onClick: P((t) => O(e), ["stop"])
						}, {
							icon: g(() => [W(Tl, { size: 18 })]),
							_: 1
						}, 8, [
							"aria-label",
							"title",
							"onClick"
						]),
						W(B(I), {
							variant: "tertiary",
							"aria-label": B(j)("rechnungswerk", "Abbrechen"),
							title: B(j)("rechnungswerk", "Abbrechen"),
							onClick: P(D, ["stop"])
						}, {
							icon: g(() => [W(Ml, { size: 18 })]),
							_: 1
						}, 8, ["aria-label", "title"])
					])) : e.paymentStatus === "paid" ? (E(), q("button", {
						key: 1,
						type: "button",
						class: "rw-subline rw-subline--editable",
						title: B(j)("rechnungswerk", "Zahldatum ändern"),
						onClick: P((t) => T(e), ["stop"])
					}, H(_(e)), 9, $u)) : _(e) ? (E(), q("div", {
						key: 2,
						class: V(["rw-subline", { "rw-subline--overdue": e.paymentStatus === "overdue" }])
					}, H(_(e)), 3)) : L("", !0)]),
					Y("td", ed, [e.paymentStatus ? (E(), q("button", {
						key: 0,
						class: V(["rw-paybox", e.paymentStatus === "paid" ? "rw-paybox--paid" : "rw-paybox--open"]),
						"aria-label": v(e),
						title: b(e),
						onClick: P((t) => x(e), ["stop"])
					}, [(E(), U(y(e.paymentStatus === "paid" ? vl : dl), { size: 22 }))], 10, td)) : L("", !0)]),
					Y("td", nd, [Y("div", rd, [e.invoiceType === "cancellation" ? L("", !0) : (E(), U(B(I), {
						key: 0,
						variant: "tertiary",
						"aria-label": B(j)("rechnungswerk", "Duplizieren"),
						title: B(j)("rechnungswerk", "Als Vorlage für neue Rechnung duplizieren"),
						onClick: P((t) => ge(e.id), ["stop"])
					}, {
						icon: g(() => [W(Cc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])), e.status === "draft" ? L("", !0) : (E(), U(B(I), {
						key: 1,
						variant: "tertiary",
						"aria-label": B(j)("rechnungswerk", "PDF herunterladen"),
						title: B(j)("rechnungswerk", "PDF herunterladen"),
						onClick: P((t) => he(e.id), ["stop"])
					}, {
						icon: g(() => [W(gc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					]))])])
				], 10, qu))), 128))])])])])) : L("", !0)
			]);
		};
	}
}), od = {
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
}, sd = ["aria-hidden", "aria-label"], cd = [
	"fill",
	"width",
	"height"
], ld = { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" }, ud = { key: 0 };
function dd(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon delete-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", ld, [n.title ? (E(), q("title", ud, H(n.title), 1)) : L("", !0)])], 8, cd))], 16, sd);
}
var fd = /*#__PURE__*/ $(od, [["render", dd]]), pd = {
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
}, md = ["aria-hidden", "aria-label"], hd = [
	"fill",
	"width",
	"height"
], gd = { d: "M2,21L23,12L2,3V10L17,12L2,14V21Z" }, _d = { key: 0 };
function vd(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon send-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", gd, [n.title ? (E(), q("title", _d, H(n.title), 1)) : L("", !0)])], 8, hd))], 16, md);
}
var yd = /*#__PURE__*/ $(pd, [["render", vd]]), bd = {
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
}, xd = ["aria-hidden", "aria-label"], Sd = [
	"fill",
	"width",
	"height"
], Cd = { d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" }, wd = { key: 0 };
function Td(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon eye-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Cd, [n.title ? (E(), q("title", wd, H(n.title), 1)) : L("", !0)])], 8, Sd))], 16, xd);
}
var Ed = /*#__PURE__*/ $(bd, [["render", Td]]), Dd = {
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
}, Od = ["aria-hidden", "aria-label"], kd = [
	"fill",
	"width",
	"height"
], Ad = { d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 20.41 4.12 20.8 4.34 21.12C4.41 21.23 4.5 21.33 4.59 21.41C4.95 21.78 5.45 22 6 22H13.53C13 21.42 12.61 20.75 12.35 20H6V4H13V9H18V12C18.7 12 19.37 12.12 20 12.34V8L14 2M18 23L23 18.5L20 15.8L18 14V17H14V20H18V23Z" }, jd = { key: 0 };
function Md(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-move-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ad, [n.title ? (E(), q("title", jd, H(n.title), 1)) : L("", !0)])], 8, kd))], 16, Od);
}
var Nd = /*#__PURE__*/ $(Dd, [["render", Md]]), Pd = {
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
}, Fd = ["aria-hidden", "aria-label"], Id = [
	"fill",
	"width",
	"height"
], Ld = { d: "M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" }, Rd = { key: 0 };
function zd(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-edit-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ld, [n.title ? (E(), q("title", Rd, H(n.title), 1)) : L("", !0)])], 8, Id))], 16, Fd);
}
var Bd = /*#__PURE__*/ $(Pd, [["render", zd]]), Vd = (e) => bs(`/contacts/search?q=${encodeURIComponent(e)}`), Hd = () => bs("/me"), Ud = { class: "contact-picker" }, Wd = ["value", "placeholder"], Gd = {
	key: 0,
	class: "contact-picker__list"
}, Kd = ["onMousedown"], qd = {
	key: 0,
	class: "muted"
}, Jd = /*#__PURE__*/ $(/* @__PURE__ */ z({
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
					r.value = await Vd(e.trim()), i.value = r.value.length > 0;
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
		return A(() => {
			a && clearTimeout(a);
		}), (t, n) => (E(), q("div", Ud, [Y("input", {
			value: e.modelValue,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: B(j)("rechnungswerk", "Name eingeben oder Kontakt wählen\xA0…"),
			onInput: n[0] ||= (e) => o(e.target.value),
			onFocus: n[1] ||= (e) => i.value = r.value.length > 0,
			onBlur: c
		}, null, 40, Wd), i.value && r.value.length > 0 ? (E(), q("ul", Gd, [(E(!0), q(k, null, C(r.value, (e, t) => (E(), q("li", {
			key: t,
			class: "contact-picker__item",
			onMousedown: P((t) => s(e), ["prevent"])
		}, [Y("strong", null, H(e.name), 1), e.email ? (E(), q("span", qd, H(e.email), 1)) : L("", !0)], 40, Kd))), 128))])) : L("", !0)]));
	}
}), [["__scopeId", "data-v-23f7f625"]]), Yd = null, Xd = () => (Yd === null && (Yd = bs("/countries").catch((e) => {
	throw Yd = null, e;
})), Yd), Zd = ["disabled", "title"], Qd = ["value"], $d = ["value"], ef = /* @__PURE__ */ z({
	__name: "CountrySelect",
	props: /*@__PURE__*/ _e({
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
		let t = at(e, "modelValue"), n = X([]), r = G(() => {
			let e = n.value.find((e) => e.code === t.value);
			return e ? `${e.label} (${e.code})` : t.value ?? "";
		}), i = G(() => {
			let e = t.value ?? "";
			return e === "" || n.value.length === 0 ? e : n.value.some((t) => t.code === e) ? "" : e;
		});
		return ce(async () => {
			try {
				n.value = await Xd();
			} catch {
				n.value = [];
			}
		}), (a, o) => S((E(), q("select", {
			"onUpdate:modelValue": o[0] ||= (e) => t.value = e,
			class: V(e.selectClass),
			disabled: e.disabled,
			title: r.value
		}, [i.value === "" ? L("", !0) : (E(), q("option", {
			key: 0,
			value: i.value
		}, H(i.value), 9, Qd)), (E(!0), q(k, null, C(n.value, (e) => (E(), q("option", {
			key: e.code,
			value: e.code
		}, H(e.label) + " (" + H(e.code) + ")", 9, $d))), 128))], 10, Zd)), [[re, t.value]]);
	}
}), tf = () => bs("/customers"), nf = (e) => xs("/customers", { data: e }), rf = (e, t) => Ss(`/customers/${e}`, { data: t }), af = (e) => ws(`/customers/${e}`), of = ln("customer", () => {
	let e = X([]), t = X(!1);
	function n() {
		e.value.sort((e, t) => e.name.localeCompare(t.name));
	}
	async function r() {
		t.value = !0;
		try {
			e.value = await tf();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		let r = await nf(t);
		return e.value.push(r), n(), r;
	}
	async function a(t, r) {
		let i = await rf(t, r), a = e.value.findIndex((e) => e.id === t);
		return a >= 0 && (e.value[a] = i), n(), i;
	}
	async function o(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await af(t);
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
}), sf = { class: "customer-picker" }, cf = ["value", "placeholder"], lf = {
	key: 0,
	class: "customer-picker__list"
}, uf = ["onMousedown"], df = { class: "muted" }, ff = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "CustomerPicker",
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = t, r = of(), i = X(""), a = X([]), o = X(!1);
		ce(() => {
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
		return (e, t) => (E(), q("div", sf, [Y("input", {
			value: i.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: B(j)("rechnungswerk", "Kunde suchen oder anlegen\xA0…"),
			onInput: t[0] ||= (e) => s(e.target.value),
			onFocus: t[1] ||= (e) => o.value = a.value.length > 0,
			onBlur: l
		}, null, 40, cf), o.value && a.value.length > 0 ? (E(), q("ul", lf, [(E(!0), q(k, null, C(a.value, (e) => (E(), q("li", {
			key: e.id,
			class: "customer-picker__item",
			onMousedown: P((t) => c(e), ["prevent"])
		}, [Y("strong", null, H(e.name), 1), Y("span", df, H([
			e.customerNumber,
			[e.postalCode, e.city].filter(Boolean).join(" "),
			e.vatId
		].filter(Boolean).join(" · ")), 1)], 40, uf))), 128))])) : L("", !0)]));
	}
}), [["__scopeId", "data-v-4ad9c538"]]), pf = { class: "product-picker" }, mf = ["value", "placeholder"], hf = {
	key: 0,
	class: "product-picker__panel"
}, gf = { class: "product-picker__head" }, _f = { class: "product-picker__list" }, vf = ["onMousedown"], yf = { class: "muted" }, bf = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "ProductPicker",
	props: { products: {} },
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = X(""), a = X([]), o = X(!1), s = null, c = G(() => i.value.trim() === "" ? j("rechnungswerk", "Alle Produkte ({gesamt})", { gesamt: n.products.length }) : j("rechnungswerk", "{treffer} Treffer", { treffer: a.value.length }));
		function l(e) {
			return [`${vu(e.defaultPriceE4)} €`, e.defaultUnitLabel || j("rechnungswerk", iu[e.defaultUnitCode])].filter(Boolean).join(" · ");
		}
		function u(e) {
			let t = e.trim().toLowerCase();
			return t === "" ? n.products : n.products.filter((e) => `${e.name} ${e.description ?? ""}`.toLowerCase().includes(t));
		}
		function d(e) {
			i.value = e, a.value = u(e), o.value = a.value.length > 0;
		}
		function f() {
			s !== null && (clearTimeout(s), s = null), a.value = u(i.value), o.value = a.value.length > 0;
		}
		function p(e) {
			i.value = "", a.value = [], o.value = !1, r("select", e);
		}
		function m() {
			s = window.setTimeout(() => {
				o.value = !1, s = null;
			}, 150);
		}
		return (e, t) => (E(), q("div", pf, [Y("input", {
			value: i.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: B(j)("rechnungswerk", "Produkt wählen oder suchen\xA0…"),
			onInput: t[0] ||= (e) => d(e.target.value),
			onFocus: f,
			onClick: f,
			onBlur: m
		}, null, 40, mf), o.value && a.value.length > 0 ? (E(), q("div", hf, [Y("div", gf, H(c.value), 1), Y("ul", _f, [(E(!0), q(k, null, C(a.value, (e) => (E(), q("li", {
			key: e.id,
			class: "product-picker__item",
			onMousedown: P((t) => p(e), ["prevent"])
		}, [Y("strong", null, H(e.name), 1), Y("span", yf, H(l(e)), 1)], 40, vf))), 128))])])) : L("", !0)]));
	}
}), [["__scopeId", "data-v-6469714c"]]);
//#endregion
//#region src/types/editor.ts
function xf(e = 1900) {
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
function Sf(e, t) {
	return {
		productId: e.id,
		name: e.name,
		description: e.description ?? "",
		quantity: "1",
		unitCode: e.defaultUnitCode,
		unitLabel: e.defaultUnitLabel ?? "",
		priceInput: vu(e.defaultPriceE4),
		taxRateBp: t ? 0 : e.defaultTaxRateBp
	};
}
function Cf(e) {
	return {
		productId: e.productId,
		name: e.name,
		description: e.description ?? "",
		quantity: _u(e.quantity),
		unitCode: e.unitCode,
		unitLabel: e.unitLabel ?? "",
		priceInput: vu(e.unitPriceE4),
		taxRateBp: e.taxRateBp
	};
}
//#endregion
//#region src/utils/invoiceCalc.ts
function wf(e, t) {
	let n = mu(e);
	if (n === null) return 0;
	let r = Math.round(Number(n) * 1e3);
	return Math.round(r * t / 1e5);
}
function Tf(e, t = !1) {
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
var Ef = { class: "rw-table-wrap" }, Df = { class: "rw-table rw-table--positions" }, Of = {
	key: 0,
	class: "rw-col-actions"
}, kf = { class: "num" }, Af = { class: "num" }, jf = { class: "num" }, Mf = { class: "rw-sum" }, Nf = { key: 0 }, Pf = { class: "rw-pos-main" }, Ff = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], If = { class: "num" }, Lf = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], Rf = ["onUpdate:modelValue", "disabled"], zf = ["value"], Bf = { class: "num" }, Vf = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], Hf = { class: "num" }, Uf = ["onUpdate:modelValue", "disabled"], Wf = ["value"], Gf = { class: "rw-sum" }, Kf = {
	key: 0,
	class: "num"
}, qf = {
	key: 0,
	class: "rw-pos-desc"
}, Jf = ["colspan"], Yf = { class: "rw-sub-row" }, Xf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder",
	"title"
], Zf = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Qf = { key: 0 }, $f = ["colspan"], ep = {
	key: 0,
	class: "rw-toolbar"
}, tp = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "InvoiceItemsTable",
	props: /*@__PURE__*/ _e({
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
		let t = at(e, "items"), n = e, r = (e) => wf(e.quantity, yu(e.priceInput));
		function i(e) {
			let t = mu(e.quantity);
			t !== null && (e.quantity = gu(t));
		}
		function a(e) {
			hu(e.priceInput) !== null && (e.priceInput = vu(yu(e.priceInput)));
		}
		M(() => n.smallBusiness, (e) => {
			if (e) for (let e of t.value) e.taxRateBp = 0;
		}, { immediate: !0 });
		let o = je();
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
		function u() {
			l() === -1 && t.value.push(xf(n.smallBusiness ? 0 : n.defaultTaxRateBp ?? 1900));
		}
		function d(e) {
			let r = Sf(e, n.smallBusiness ?? !1), i = l();
			if (i !== -1) {
				t.value.splice(i, 1, r);
				return;
			}
			t.value.push(r);
		}
		function f(e) {
			t.value.splice(e, 1);
		}
		return (n, o) => (E(), q("div", null, [Y("div", Ef, [Y("table", Df, [
			Y("colgroup", null, [
				o[0] ||= Y("col", null, null, -1),
				o[1] ||= Y("col", { class: "rw-col-qty" }, null, -1),
				o[2] ||= Y("col", { class: "rw-col-unit" }, null, -1),
				o[3] ||= Y("col", { class: "rw-col-price" }, null, -1),
				o[4] ||= Y("col", { class: "rw-col-tax" }, null, -1),
				o[5] ||= Y("col", { class: "rw-col-sum" }, null, -1),
				e.readonly ? L("", !0) : (E(), q("col", Of))
			]),
			Y("thead", null, [Y("tr", null, [
				Y("th", null, H(B(j)("rechnungswerk", "Bezeichnung")), 1),
				Y("th", kf, H(B(j)("rechnungswerk", "Menge")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Einheit")), 1),
				Y("th", Af, H(B(j)("rechnungswerk", "Einzelpreis (€)")), 1),
				Y("th", jf, H(B(j)("rechnungswerk", "USt")), 1),
				Y("th", Mf, H(B(j)("rechnungswerk", "Summe netto")), 1),
				e.readonly ? L("", !0) : (E(), q("th", Nf))
			])]),
			Y("tbody", null, [(E(!0), q(k, null, C(t.value, (t, n) => (E(), q(k, { key: n }, [Y("tr", Pf, [
				Y("td", null, [S(Y("input", {
					"onUpdate:modelValue": (e) => t.name = e,
					class: "rw-input",
					type: "text",
					readonly: e.readonly,
					placeholder: B(j)("rechnungswerk", "Leistung")
				}, null, 8, Ff), [[J, t.name]])]),
				Y("td", If, [S(Y("input", {
					"onUpdate:modelValue": (e) => t.quantity = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => i(t)
				}, null, 40, Lf), [[J, t.quantity]])]),
				Y("td", null, [S(Y("select", {
					"onUpdate:modelValue": (e) => t.unitCode = e,
					class: "rw-input",
					disabled: e.readonly
				}, [(E(!0), q(k, null, C(B(ru), (e) => (E(), q("option", {
					key: e,
					value: e
				}, H(B(j)("rechnungswerk", B(iu)[e])), 9, zf))), 128))], 8, Rf), [[re, t.unitCode]])]),
				Y("td", Bf, [S(Y("input", {
					"onUpdate:modelValue": (e) => t.priceInput = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => a(t)
				}, null, 40, Vf), [[J, t.priceInput]])]),
				Y("td", Hf, [S(Y("select", {
					"onUpdate:modelValue": (e) => t.taxRateBp = e,
					class: "rw-input",
					disabled: e.readonly || e.smallBusiness
				}, [(E(!0), q(k, null, C(B(au), (e) => (E(), q("option", {
					key: e,
					value: e
				}, H(B(Su)(e)), 9, Wf))), 128))], 8, Uf), [[
					re,
					t.taxRateBp,
					void 0,
					{ number: !0 }
				]])]),
				Y("td", Gf, H(B(xu)(r(t))), 1),
				e.readonly ? L("", !0) : (E(), q("td", Kf, [W(B(I), {
					variant: "tertiary",
					"aria-label": B(j)("rechnungswerk", "Position entfernen"),
					onClick: (e) => f(n)
				}, {
					icon: g(() => [W(fd, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "onClick"])]))
			]), !e.readonly || t.description || t.unitLabel ? (E(), q("tr", qf, [Y("td", { colspan: e.readonly ? 6 : 7 }, [Y("div", Yf, [!e.readonly || t.unitLabel ? S((E(), q("input", {
				key: 0,
				"onUpdate:modelValue": (e) => t.unitLabel = e,
				class: "rw-input rw-input--sub rw-unit-label",
				type: "text",
				maxlength: "64",
				readonly: e.readonly,
				placeholder: B(j)("rechnungswerk", "eigene Einheit"),
				title: B(j)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.")
			}, null, 8, Xf)), [[J, t.unitLabel]]) : L("", !0), !e.readonly || t.description ? S((E(), q("input", {
				key: 1,
				"onUpdate:modelValue": (e) => t.description = e,
				class: "rw-input rw-input--sub rw-desc",
				type: "text",
				readonly: e.readonly,
				placeholder: B(j)("rechnungswerk", "Beschreibung (optional)")
			}, null, 8, Zf)), [[J, t.description]]) : L("", !0)])], 8, Jf)])) : L("", !0)], 64))), 128)), t.value.length === 0 ? (E(), q("tr", Qf, [Y("td", {
				colspan: e.readonly ? 6 : 7,
				class: "rw-muted empty-row"
			}, H(B(j)("rechnungswerk", "Noch keine Positionen.")), 9, $f)])) : L("", !0)])
		])]), e.readonly ? L("", !0) : (E(), q("div", ep, [W(B(I), { onClick: u }, {
			icon: g(() => [W(lc, { size: 20 })]),
			default: g(() => [R(" " + H(B(j)("rechnungswerk", "Position hinzufügen")), 1)]),
			_: 1
		}), e.products.length > 0 ? (E(), U(bf, {
			key: 0,
			products: e.products,
			onSelect: d
		}, null, 8, ["products"])) : (E(), U(B(I), {
			key: 1,
			variant: "tertiary",
			onClick: s
		}, {
			icon: g(() => [W(eo, { size: 20 })]),
			default: g(() => [R(" " + H(B(j)("rechnungswerk", "Noch keine Produkte angelegt")), 1)]),
			_: 1
		}))]))]));
	}
}), [["__scopeId", "data-v-76deaaa6"]]), np = { class: "confirm-dialog" }, rp = { class: "confirm-dialog__message" }, ip = /*#__PURE__*/ $(/* @__PURE__ */ z({
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
		return (t, n) => (E(), U(B(bt), {
			open: e.open,
			name: e.name,
			"onUpdate:open": r
		}, {
			actions: g(() => [W(B(I), {
				variant: "secondary",
				onClick: n[0] ||= (e) => t.$emit("close")
			}, {
				default: g(() => [R(H(e.cancelLabel || B(j)("rechnungswerk", "Abbrechen")), 1)]),
				_: 1
			}), W(B(I), {
				variant: e.destructive ? "error" : "primary",
				onClick: n[1] ||= (e) => t.$emit("confirm")
			}, {
				default: g(() => [R(H(e.confirmLabel || B(j)("rechnungswerk", "Bestätigen")), 1)]),
				_: 1
			}, 8, ["variant"])]),
			default: g(() => [Y("div", np, [Y("p", rp, H(e.message), 1)])]),
			_: 1
		}, 8, ["open", "name"]));
	}
}), [["__scopeId", "data-v-54981555"]]), ap = { class: "send-modal" }, op = { class: "send-modal__hint" }, sp = { class: "field" }, cp = { class: "field" }, lp = { class: "field" }, up = { class: "actions" }, dp = /*#__PURE__*/ $(/* @__PURE__ */ z({
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
		let n = e, r = G(() => n.kind === "quote"), i = G(() => r.value ? j("rechnungswerk", "Angebot an Kunde senden") : j("rechnungswerk", "Rechnung an Kunde senden")), a = G(() => r.value ? j("rechnungswerk", "Das Angebot wird als PDF angehängt.") : j("rechnungswerk", "Die E-Rechnung wird als ZUGFeRD-PDF angehängt.")), o = t, s = X(null), c = Ze({
			to: "",
			subject: "",
			body: ""
		}), l = G(() => /\S+@\S+\.\S+/.test(c.to.trim()) && c.subject.trim() !== "");
		M(() => n.open, (e) => {
			if (!e) return;
			let t = n.invoice;
			c.to = t?.recipientEmail ?? "", r.value ? c.subject = t?.number ? j("rechnungswerk", "Angebot {number}", { number: t.number }) : j("rechnungswerk", "Ihr Angebot") : c.subject = t?.number ? j("rechnungswerk", "Rechnung {number}", { number: t.number }) : j("rechnungswerk", "Ihre Rechnung"), c.body = n.defaultBody, rt(() => s.value?.focus());
		}, { immediate: !0 });
		function u() {
			l.value && o("send", {
				to: c.to.trim(),
				subject: c.subject.trim(),
				body: c.body
			});
		}
		return (t, n) => e.open ? (E(), U(B(ft), {
			key: 0,
			name: i.value,
			onKeydown: n[4] ||= me((e) => B(Ds)(e, () => t.$emit("close")), ["esc"]),
			onClose: n[5] ||= (e) => t.$emit("close")
		}, {
			default: g(() => [Y("div", ap, [
				Y("h2", null, H(i.value), 1),
				Y("p", op, H(a.value), 1),
				Y("label", sp, [Y("span", null, H(B(j)("rechnungswerk", "Empfänger-E-Mail")) + " *", 1), S(Y("input", {
					ref_key: "toInput",
					ref: s,
					"onUpdate:modelValue": n[0] ||= (e) => c.to = e,
					class: "input",
					type: "email"
				}, null, 512), [[J, c.to]])]),
				Y("label", cp, [Y("span", null, H(B(j)("rechnungswerk", "Betreff")) + " *", 1), S(Y("input", {
					"onUpdate:modelValue": n[1] ||= (e) => c.subject = e,
					class: "input",
					type: "text"
				}, null, 512), [[J, c.subject]])]),
				Y("label", lp, [Y("span", null, H(B(j)("rechnungswerk", "Nachricht")), 1), S(Y("textarea", {
					"onUpdate:modelValue": n[2] ||= (e) => c.body = e,
					class: "input",
					rows: "6"
				}, null, 512), [[J, c.body]])]),
				Y("div", up, [W(B(I), { onClick: n[3] ||= (e) => t.$emit("close") }, {
					default: g(() => [R(H(B(j)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), W(B(I), {
					variant: "primary",
					disabled: e.saving || !l.value,
					onClick: u
				}, {
					icon: g(() => [W(yd, { size: 20 })]),
					default: g(() => [R(" " + H(B(j)("rechnungswerk", "Senden")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : L("", !0);
	}
}), [["__scopeId", "data-v-2f5a808a"]]), fp = () => bs("/quotes"), pp = (e) => bs(`/quotes/${e}`), mp = (e) => xs("/quotes", { data: e }), hp = (e, t) => Ss(`/quotes/${e}`, { data: t }), gp = (e) => ws(`/quotes/${e}`), _p = (e) => xs(`/quotes/${e}/commit`, {}), vp = (e) => xs(`/quotes/${e}/accept`, {}), yp = (e) => xs(`/quotes/${e}/reject`, {}), bp = (e) => xs(`/quotes/${e}/convert`, {}), xp = (e) => xs(`/quotes/${e}/revise`, {}), Sp = (e) => vs(`/quotes/${e}/pdf`), Cp = (e) => vs(`/quotes/${e}/preview`) + "?t=" + Date.now(), wp = (e) => {
	let t = document.createElement("a");
	t.href = Sp(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Tp = (e, t) => xs(`/quotes/${e}/send`, t), Ep = ln("quote", () => {
	let e = X([]), t = X(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await fp();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => pp(e);
	async function i(e) {
		let t = await mp(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await hp(e, t);
		return await n(), r;
	}
	async function o(t) {
		await gp(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await _p(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await vp(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await yp(e);
		return await n(), t;
	}
	async function u(e) {
		let t = await bp(e);
		return await n(), t;
	}
	async function d(e) {
		let t = await xp(e);
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
}), Dp = () => bs("/products"), Op = (e) => xs("/products", { data: e }), kp = (e, t) => Ss(`/products/${e}`, { data: t }), Ap = (e) => ws(`/products/${e}`), jp = ln("product", () => {
	let e = X([]), t = X(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await Dp();
		} finally {
			t.value = !1;
		}
	}
	async function r(t) {
		let n = await Op(t);
		return e.value.push(n), e.value.sort((e, t) => e.name.localeCompare(t.name)), n;
	}
	async function i(t, n) {
		let r = await kp(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), e.value.sort((e, t) => e.name.localeCompare(t.name)), r;
	}
	async function a(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Ap(t);
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
}), Mp = () => bs("/text-snippets"), Np = (e) => xs("/text-snippets", { data: e }), Pp = (e, t) => Ss(`/text-snippets/${e}`, { data: t }), Fp = (e) => ws(`/text-snippets/${e}`);
//#endregion
//#region src/stores/textSnippetStore.ts
function Ip(e) {
	e.sort((e, t) => e.docType.localeCompare(t.docType) || e.slot.localeCompare(t.slot) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
}
var Lp = ln("textSnippet", () => {
	let e = X([]), t = X(!1), n = X(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Mp(), n.value = !0;
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
		let n = await Np(t);
		return e.value.push(n), a(n), Ip(e.value), n;
	}
	async function s(t, n) {
		let r = await Pp(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), a(r), Ip(e.value), r;
	}
	async function c(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Fp(t);
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
}), Rp = () => bs("/me/contact"), zp = (e) => Cs("/me/contact", { data: e }), Bp = { class: "rw-view rw-view--narrow" }, Vp = { class: "rw-editor-head" }, Hp = {
	key: 0,
	class: "rw-status-group"
}, Up = { class: "rw-status-tag" }, Wp = {
	key: 0,
	class: "rw-pill"
}, Gp = {
	key: 1,
	class: "rw-pill"
}, Kp = ["title"], qp = { class: "rw-section" }, Jp = { class: "rw-form-row" }, Yp = { class: "rw-field invoice-no" }, Xp = ["value"], Zp = { class: "rw-field" }, Qp = ["readonly"], $p = { class: "rw-field" }, em = ["readonly"], tm = { class: "rw-hint" }, nm = ["open"], rm = { class: "rw-form-row" }, im = { class: "rw-field" }, am = ["readonly"], om = { class: "rw-field" }, sm = ["readonly"], cm = {
	key: 0,
	class: "rw-field"
}, lm = ["readonly", "placeholder"], um = {
	key: 1,
	class: "rw-field",
	"aria-hidden": "true"
}, dm = { class: "rw-form-row" }, fm = { class: "rw-field" }, pm = ["readonly"], mm = { class: "rw-field" }, hm = ["readonly"], gm = { class: "rw-section" }, _m = {
	key: 0,
	class: "rw-form-row"
}, vm = { class: "rw-field" }, ym = { class: "rw-hint" }, bm = { class: "rw-form-row" }, xm = { class: "rw-field" }, Sm = ["value"], Cm = { class: "rw-field" }, wm = ["readonly"], Tm = { class: "rw-form-row" }, Em = { class: "rw-field" }, Dm = ["readonly"], Om = { class: "rw-hint" }, km = { class: "rw-form-row" }, Am = { class: "rw-field" }, jm = ["readonly"], Mm = { class: "rw-field rw-field--narrow" }, Nm = ["readonly"], Pm = { class: "rw-field" }, Fm = ["readonly"], Im = { class: "rw-field rw-field--country" }, Lm = { class: "rw-form-row" }, Rm = { class: "rw-field" }, zm = ["readonly"], Bm = { class: "rw-field" }, Vm = ["readonly"], Hm = { class: "rw-field" }, Um = ["readonly"], Wm = { class: "rw-section" }, Gm = { class: "rw-form-row" }, Km = { class: "rw-field" }, qm = ["readonly"], Jm = { class: "rw-field" }, Ym = ["readonly"], Xm = { class: "rw-field" }, Zm = ["readonly"], Qm = { class: "rw-hint" }, $m = { class: "rw-section" }, eh = { class: "rw-section-head" }, th = { class: "rw-field" }, nh = ["readonly", "placeholder"], rh = { class: "rw-section" }, ih = { class: "rw-section" }, ah = { class: "rw-form-row" }, oh = { class: "rw-field" }, sh = ["disabled"], ch = { value: "" }, lh = { value: "reverse_charge" }, uh = { value: "intra_community" }, dh = { value: "export" }, fh = { class: "rw-totals" }, ph = { class: "rw-kpi-card" }, mh = { class: "rw-kpi-row" }, hh = { class: "rw-kpi-row rw-kpi-row--grand" }, gh = {
	key: 4,
	class: "rw-section"
}, _h = { class: "rw-form-row" }, vh = { class: "rw-field payterm-days" }, yh = ["readonly"], bh = { class: "rw-field" }, xh = ["value"], Sh = { class: "rw-field" }, Ch = ["readonly", "placeholder"], wh = {
	key: 5,
	class: "rw-section"
}, Th = { class: "rw-form-row" }, Eh = { class: "rw-field payterm-days" }, Dh = ["readonly"], Oh = { class: "rw-field rw-checkbox-field" }, kh = { class: "rw-checkbox-row" }, Ah = ["disabled"], jh = { class: "rw-hint" }, Mh = { class: "rw-section" }, Nh = { class: "rw-section-head" }, Ph = { class: "rw-field" }, Fh = ["readonly", "placeholder"], Ih = {
	key: 6,
	class: "rw-section"
}, Lh = [
	"onUpdate:modelValue",
	"readonly",
	"aria-label"
], Rh = { class: "rw-hint" }, zh = { class: "rw-action-bar" }, Bh = ["src", "title"], Vh = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "InvoiceEditorView",
	props: { id: {} },
	setup(e) {
		let t = e, n = Ne(), r = je(), i = ql(), a = Ep(), o = jp(), s = nu(), c = Lp(), l = G(() => typeof n.name == "string" && n.name.startsWith("quote")), u = G(() => l.value ? a : i), d = G(() => l.value ? "quote" : "invoice"), f = G(() => c.forSlot(d.value, "opening")), p = G(() => c.forSlot(d.value, "closing"));
		function m(e) {
			N.greeting = e.content ?? "";
		}
		function ee(e) {
			N.extraText = e.content ?? "";
		}
		let _ = G(() => l.value ? "quotes" : "invoices"), v = G(() => l.value ? "quote-detail" : "invoice-detail"), b = X(null), x = X([xf()]), ie = X([]), w = X(""), T = X(""), D = X(!1), O = X(!1), ae = X(!1), oe = X(!1), se = X(""), A = X(null), le = X(!1), ue = null, de = () => ({
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
		}), N = Ze(de()), fe = [
			"reverse_charge",
			"intra_community",
			"export"
		], pe = G(() => (s.settings?.smallBusiness ?? !1) || fe.includes(N.specialTaxCase)), P = G(() => {
			let e = Number.parseInt(String(N.paymentTermDays), 10);
			if (Number.isNaN(e)) return "";
			let t = (e) => /* @__PURE__ */ new Date(`${e}T12:00:00`);
			if (b.value?.dueDate) return t(b.value.dueDate).toLocaleDateString();
			let n = b.value?.issueDate ? t(b.value.issueDate) : /* @__PURE__ */ new Date();
			return n.setDate(n.getDate() + e), n.toLocaleDateString();
		}), F = G(() => b.value !== null && b.value.status !== "draft"), me = {
			draft: Ac,
			committed: So,
			cancelled: Lc
		}, he = {
			pending: Zc,
			confirmed: Wc,
			unknown: il,
			failed: Lc
		}, ge = (e) => me[e] ?? Ac, _e = (e) => he[e] ?? il, ve = G(() => b.value ? l.value && b.value.quoteStatus ? j("rechnungswerk", du[b.value.quoteStatus] ?? b.value.status) : j("rechnungswerk", lu[b.value.status]) : ""), ye = G(() => b.value ? j("rechnungswerk", uu[b.value.invoiceType]) : ""), be = G(() => {
			let e = {
				pending: j("rechnungswerk", "DATEV: gesendet"),
				confirmed: j("rechnungswerk", "DATEV: bestätigt"),
				failed: j("rechnungswerk", "DATEV: abgelehnt"),
				unknown: j("rechnungswerk", "DATEV: Antwort prüfen")
			}, t = b.value?.datevStatus;
			return t ? e[t] ?? "" : "";
		}), xe = G(() => b.value ? b.value.relatedNumber ? j("rechnungswerk", "{type} zu Rechnung {number}", {
			type: ye.value,
			number: b.value.relatedNumber
		}) : ye.value : ""), Se = G(() => {
			if (l.value) return j("rechnungswerk", "Das Angebot erhält seine endgültige Nummer und ist danach unveränderbar.");
			let e = j("rechnungswerk", "Die Rechnung erhält ihre endgültige Nummer und kann danach nur noch storniert werden."), t = s.settings;
			return t?.datevAutoSend && t.datevUploadMail ? e + " " + j("rechnungswerk", "Sie wird automatisch an DATEV übergeben.") : e;
		}), Ce = G(() => {
			let e = (b.value?.greeting ?? c.defaultContent(d.value, "opening")).trim(), t = (b.value?.extraText ?? c.defaultContent(d.value, "closing")).trim(), n = l.value ? j("rechnungswerk", "anbei erhalten Sie unser Angebot als PDF.") : j("rechnungswerk", "anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).");
			return [e === "" ? n : e, t].filter((e) => e !== "").join("\n\n");
		}), z = G(() => b.value ? b.value.number ?? j("rechnungswerk", "Entwurf") : l.value ? j("rechnungswerk", "Neues Angebot") : j("rechnungswerk", "Neue Rechnung")), we = G(() => Tf(x.value.map((e) => ({
			taxRateBp: e.taxRateBp,
			lineTotalCents: wf(e.quantity, yu(e.priceInput))
		})), pe.value)), Te = 0;
		ce(async () => {
			let e = ++Te;
			try {
				if (await Promise.all([
					o.fetchAll(),
					s.fetch(),
					c.ensureLoaded()
				]), e !== Te) return;
				t.id ? await Oe(Number(t.id), e) : await De(e);
			} catch (e) {
				ct(e, j("rechnungswerk", "Laden fehlgeschlagen"));
			}
		}), M(() => [n.name, t.id], async ([, e]) => {
			let t = ++Te;
			try {
				if (!e) Ee(), await De(t);
				else {
					let n = b.value !== null && b.value.invoiceType === "quote" !== l.value;
					(b.value?.id !== Number(e) || n) && (Ee(), await Oe(Number(e), t));
				}
			} catch (e) {
				ct(e, j("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function Ee() {
			b.value = null, x.value = [xf()], ie.value = [], w.value = "", T.value = "", ae.value = !1, oe.value = !1, se.value = "", A.value = null, le.value = !1, Object.assign(N, de()), ue = null;
		}
		async function De(e = Te) {
			let t = s.settings;
			N.greeting = c.defaultContent(d.value, "opening"), N.extraText = c.defaultContent(d.value, "closing"), N.paymentTermDays = l.value ? "" : t?.defaultPaymentTermDays ?? "";
			let n = {
				person: "",
				phone: "",
				email: ""
			};
			try {
				n = await Rp();
			} catch {}
			e === Te && (N.sellerContactPerson = n.person || (t?.contactPerson ?? ""), N.sellerContactPhone = n.phone || (t?.contactPhone ?? ""), N.sellerContactEmail = n.email || (t?.contactEmail ?? ""), Le());
		}
		async function Oe(e, t = Te) {
			let n = await u.value.get(e);
			t === Te && (b.value = n, N.customerId = n.customerId ?? null, N.recipientName = n.recipientName ?? "", N.recipientEmail = n.recipientEmail ?? "", N.recipientAddressAddition = n.recipientAddressAddition ?? "", N.recipientAddress = n.recipientAddress ?? "", N.recipientPostalCode = n.recipientPostalCode ?? "", N.recipientCity = n.recipientCity ?? "", N.recipientCountry = n.recipientCountry ?? "DE", N.recipientVatId = n.recipientVatId ?? "", N.recipientContactId = n.recipientContactId ?? "", N.recipientContactPerson = n.recipientContactPerson ?? "", N.recipientPhone = n.recipientPhone ?? "", N.sellerContactPerson = n.sellerContactPerson ?? "", N.sellerContactPhone = n.sellerContactPhone ?? "", N.sellerContactEmail = n.sellerContactEmail ?? "", N.performancePeriodStart = n.performancePeriodStart ?? n.performanceDate ?? "", N.performancePeriodEnd = n.performancePeriodEnd ?? "", N.referenceNumber = n.referenceNumber ?? "", N.orderNumber = n.orderNumber ?? "", N.buyerReference = n.buyerReference ?? "", N.contractNumber = n.contractNumber ?? "", N.projectReference = n.projectReference ?? "", le.value = [
				N.referenceNumber,
				N.orderNumber,
				l.value ? "" : N.buyerReference,
				N.contractNumber,
				N.projectReference
			].some((e) => e.trim() !== ""), ie.value = [...n.notes ?? []], N.specialTaxCase = n.specialTaxCase ?? "", N.greeting = n.greeting ?? "", N.extraText = n.extraText ?? "", N.paymentTermDays = n.paymentTermDays ?? "", N.discountTerms = n.discountTerms ?? "", N.validUntil = n.validUntil ?? "", N.offerFreeform = n.offerFreeform ?? !1, x.value = n.items.length > 0 ? n.items.map(Cf) : [xf()], Le());
		}
		function ke() {
			ie.value.push("");
		}
		function Ae(e) {
			ie.value.splice(e, 1);
		}
		function Me(e) {
			N.customerId = e.id, N.recipientName = e.name, N.recipientContactId = "", N.recipientEmail = e.email ?? "", N.recipientAddressAddition = e.addressAddition ?? "", N.recipientAddress = e.address ?? "", N.recipientPostalCode = e.postalCode ?? "", N.recipientCity = e.city ?? "", N.recipientCountry = e.country ?? "DE", N.recipientVatId = e.vatId ?? "", N.recipientContactPerson = e.contactPerson ?? "", N.recipientPhone = e.phone ?? "", e.defaultPaymentTermDays != null && (N.paymentTermDays = e.defaultPaymentTermDays);
		}
		function Pe(e) {
			N.customerId = null, N.recipientName = e.name, N.recipientEmail = e.email, e.phone && (N.recipientPhone = e.phone), N.recipientAddressAddition = "", N.recipientAddress = e.address, N.recipientPostalCode = e.postalCode, N.recipientCity = e.city, e.country && (N.recipientCountry = e.country);
		}
		function Fe() {
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
				notes: ie.value.map((e) => e.trim()).filter((e) => e !== ""),
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
			return l.value ? (r.validUntil = N.validUntil === "" ? null : N.validUntil, r.offerFreeform = N.offerFreeform, r.paymentTermDays = null, r.discountTerms = null) : (delete r.validUntil, delete r.offerFreeform), r;
		}
		let Ie = null;
		function Le(e = JSON.stringify(Fe())) {
			ue = e;
		}
		function Re() {
			return !F.value && ue !== null && JSON.stringify(Fe()) !== ue;
		}
		function ze(e) {
			return !Re() || (Ie = e.fullPath, A.value = "leave", !1);
		}
		function Be(e) {
			A.value = null;
			let t = Ie;
			Ie = null, e && t !== null && (ue = null, r.push(t));
		}
		sr(ze), cr(ze);
		function K(e) {
			Re() && e.preventDefault();
		}
		ce(() => window.addEventListener("beforeunload", K)), h(() => window.removeEventListener("beforeunload", K));
		async function Ve() {
			w.value = "", D.value = !0;
			try {
				let e = Fe(), t = !b.value, n = b.value ? await u.value.update(b.value.id, e) : await u.value.create(e);
				return b.value = n, Le(JSON.stringify(e)), t && r.replace({
					name: v.value,
					params: { id: String(n.id) }
				}), n;
			} catch (e) {
				return ct(e, j("rechnungswerk", "Speichern fehlgeschlagen")), null;
			} finally {
				D.value = !1;
			}
		}
		async function He() {
			let e = await Ve();
			e && (se.value = l.value ? Cp(e.id) : Wl(e.id), oe.value = !0);
		}
		function Ue(e) {
			e || (oe.value = !1, se.value = "");
		}
		function We() {
			A.value = "finalize";
		}
		function Ge() {
			A.value = "delete";
		}
		function Ke() {
			A.value = "cancel";
		}
		function qe() {
			A.value = "convert";
		}
		function Je() {
			A.value = "revise";
		}
		let Ye = G(() => l.value && b.value?.status === "committed" && !["converted", "superseded"].includes(b.value?.quoteStatus ?? "")), Xe = G(() => l.value && b.value?.status === "committed" && [
			"open",
			"expired",
			"accepted"
		].includes(b.value?.quoteStatus ?? "")), Qe = G(() => l.value && b.value?.status === "committed" && ["open", "expired"].includes(b.value?.quoteStatus ?? ""));
		function $e() {
			b.value && (l.value ? wp(b.value.id) : Gl(b.value.id));
		}
		async function et() {
			A.value = null;
			let e = await Ve();
			if (e) {
				D.value = !0;
				try {
					let t = await u.value.commit(e.id);
					if (b.value = t, T.value = "", l.value) T.value = j("rechnungswerk", "Angebot festgeschrieben.");
					else {
						let e = t.datevMailSent;
						e === !0 ? T.value = j("rechnungswerk", "Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.") : e === null && (w.value = j("rechnungswerk", "Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
					}
				} catch (e) {
					ct(e, j("rechnungswerk", "Festschreiben fehlgeschlagen"));
				} finally {
					D.value = !1;
				}
			}
		}
		async function Z() {
			if (b.value) {
				D.value = !0, w.value = "";
				try {
					b.value = await a.accept(b.value.id), T.value = j("rechnungswerk", "Angebot als angenommen markiert.");
				} catch (e) {
					ct(e, j("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					D.value = !1;
				}
			}
		}
		async function tt() {
			if (b.value) {
				D.value = !0, w.value = "";
				try {
					b.value = await a.reject(b.value.id), T.value = j("rechnungswerk", "Angebot als abgelehnt markiert.");
				} catch (e) {
					ct(e, j("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					D.value = !1;
				}
			}
		}
		async function nt() {
			if (A.value = null, b.value) {
				D.value = !0, w.value = "";
				try {
					let e = await a.convert(b.value.id);
					r.push({
						name: "invoice-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					ct(e, j("rechnungswerk", "Übernahme fehlgeschlagen"));
				} finally {
					D.value = !1;
				}
			}
		}
		async function rt() {
			if (A.value = null, b.value) {
				D.value = !0, w.value = "";
				try {
					let e = await a.revise(b.value.id);
					r.push({
						name: "quote-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					ct(e, j("rechnungswerk", "Revidieren fehlgeschlagen"));
				} finally {
					D.value = !1;
				}
			}
		}
		async function it(e) {
			if (b.value) {
				O.value = !0, w.value = "";
				try {
					l.value ? (await Tp(b.value.id, e), ae.value = !1, T.value = j("rechnungswerk", "Angebot an {to} gesendet.", { to: e.to })) : (await Kl(b.value.id, e), ae.value = !1, T.value = j("rechnungswerk", "Rechnung an {to} gesendet.", { to: e.to }));
				} catch (e) {
					ct(e, j("rechnungswerk", "Versand fehlgeschlagen"));
				} finally {
					O.value = !1;
				}
			}
		}
		async function at() {
			if (A.value = null, !b.value) {
				st();
				return;
			}
			D.value = !0;
			try {
				await u.value.remove(b.value.id), ue = null, st();
			} catch (e) {
				ct(e, j("rechnungswerk", "Löschen fehlgeschlagen"));
			} finally {
				D.value = !1;
			}
		}
		async function ot() {
			if (A.value = null, b.value) {
				D.value = !0;
				try {
					let e = await i.cancel(b.value.id), t = e.datevMailSent;
					await Oe(e.id), T.value = "", t === !0 ? T.value = j("rechnungswerk", "Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.") : t === null && (w.value = j("rechnungswerk", "Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
				} catch (e) {
					ct(e, j("rechnungswerk", "Stornieren fehlgeschlagen"));
				} finally {
					D.value = !1;
				}
			}
		}
		function st() {
			r.push({ name: _.value });
		}
		function ct(e, t) {
			w.value = e.message ?? t, console.error("[rechnungswerk] editor:", e);
		}
		return (e, t) => {
			let n = te("tooltip");
			return E(), q("div", Bp, [
				Y("div", Vp, [W(B(Ot), null, {
					default: g(() => [W(B(Et), {
						name: l.value ? B(j)("rechnungswerk", "Angebote") : B(j)("rechnungswerk", "Rechnungen"),
						to: { name: _.value }
					}, null, 8, ["name", "to"]), W(B(Et), { name: z.value }, null, 8, ["name"])]),
					_: 1
				}), b.value ? (E(), q("span", Hp, [
					Y("span", Up, [(E(), U(y(ge(b.value.status)), {
						size: 18,
						class: V(["rw-sicon", `rw-sicon--${b.value.status}`])
					}, null, 8, ["class"])), R(" " + H(ve.value), 1)]),
					!l.value && b.value.invoiceType !== "invoice" ? S((E(), q("span", Wp, [R(H(ye.value), 1)])), [[n, xe.value]]) : L("", !0),
					l.value && b.value.relatedQuoteNumber ? (E(), q("span", Gp, H(B(j)("rechnungswerk", "Revision von {number}", { number: b.value.relatedQuoteNumber })), 1)) : L("", !0),
					b.value.datevStatus && be.value ? (E(), q("span", {
						key: 2,
						class: "rw-status-tag",
						title: B(j)("rechnungswerk", "DATEV-Übergabe")
					}, [(E(), U(y(_e(b.value.datevStatus)), {
						size: 18,
						class: V(["rw-sicon", `rw-sicon--datev-${b.value.datevStatus}`])
					}, null, 8, ["class"])), R(" " + H(be.value), 1)], 8, Kp)) : L("", !0)
				])) : L("", !0)]),
				w.value ? (E(), U(B(Q), {
					key: 0,
					type: "error",
					text: w.value
				}, null, 8, ["text"])) : L("", !0),
				T.value ? (E(), U(B(Q), {
					key: 1,
					type: "success",
					text: T.value
				}, null, 8, ["text"])) : L("", !0),
				F.value ? (E(), U(B(Q), {
					key: 2,
					type: "info",
					text: l.value ? B(j)("rechnungswerk", "Dieses Angebot ist festgeschrieben und kann nicht mehr geändert werden.") : B(j)("rechnungswerk", "Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.")
				}, null, 8, ["text"])) : L("", !0),
				!l.value && b.value?.documentBackfilled ? (E(), U(B(Q), {
					key: 3,
					type: "info",
					text: B(j)("rechnungswerk", "Dieser Beleg wurde nicht beim Festschreiben abgelegt, sondern später aus dem Datensatz erzeugt. Beträge, Positionen und Steuerausweis stimmen; Firmendaten und Layout entsprechen dem heutigen Stand, nicht dem von damals.")
				}, null, 8, ["text"])) : L("", !0),
				Y("section", qp, [
					Y("h3", null, H(l.value ? B(j)("rechnungswerk", "Angebotsdaten") : B(j)("rechnungswerk", "Rechnungsdaten")), 1),
					Y("div", Jp, [
						Y("label", Yp, [Y("span", null, H(l.value ? B(j)("rechnungswerk", "Angebotsnummer") : B(j)("rechnungswerk", "Rechnungsnummer")), 1), Y("input", {
							class: "rw-input",
							type: "text",
							readonly: "",
							value: b.value?.number ?? B(j)("rechnungswerk", "(wird vergeben)")
						}, null, 8, Xp)]),
						Y("label", Zp, [Y("span", null, H(l.value ? B(j)("rechnungswerk", "Geplanter Leistungszeitraum (optional)") : B(j)("rechnungswerk", "Leistungsdatum /-zeitraum")), 1), S(Y("input", {
							"onUpdate:modelValue": t[0] ||= (e) => N.performancePeriodStart = e,
							class: "rw-input",
							type: "date",
							readonly: F.value
						}, null, 8, Qp), [[J, N.performancePeriodStart]])]),
						Y("label", $p, [Y("span", null, H(B(j)("rechnungswerk", "bis (optional)")), 1), S(Y("input", {
							"onUpdate:modelValue": t[1] ||= (e) => N.performancePeriodEnd = e,
							class: "rw-input",
							type: "date",
							readonly: F.value
						}, null, 8, em), [[J, N.performancePeriodEnd]])])
					]),
					Y("p", tm, H(l.value ? B(j)("rechnungswerk", "Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.") : B(j)("rechnungswerk", "Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.")), 1),
					Y("details", {
						class: "more",
						open: le.value,
						onToggle: t[7] ||= (e) => le.value = e.target.open
					}, [
						Y("summary", null, H(l.value ? B(j)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)") : B(j)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)")), 1),
						Y("div", rm, [
							Y("label", im, [Y("span", null, H(B(j)("rechnungswerk", "Referenznummer")), 1), S(Y("input", {
								"onUpdate:modelValue": t[2] ||= (e) => N.referenceNumber = e,
								class: "rw-input",
								type: "text",
								readonly: F.value
							}, null, 8, am), [[J, N.referenceNumber]])]),
							Y("label", om, [Y("span", null, H(B(j)("rechnungswerk", "Bestellnummer")), 1), S(Y("input", {
								"onUpdate:modelValue": t[3] ||= (e) => N.orderNumber = e,
								class: "rw-input",
								type: "text",
								readonly: F.value
							}, null, 8, sm), [[J, N.orderNumber]])]),
							l.value ? (E(), q("span", um)) : (E(), q("label", cm, [Y("span", null, H(B(j)("rechnungswerk", "Käuferreferenz / Leitweg-ID (BT-10)")), 1), S(Y("input", {
								"onUpdate:modelValue": t[4] ||= (e) => N.buyerReference = e,
								class: "rw-input",
								type: "text",
								readonly: F.value,
								placeholder: B(j)("rechnungswerk", "nur für öffentliche Auftraggeber")
							}, null, 8, lm), [[J, N.buyerReference]])]))
						]),
						Y("div", dm, [
							Y("label", fm, [Y("span", null, H(B(j)("rechnungswerk", "Vertragsnummer (BT-12)")), 1), S(Y("input", {
								"onUpdate:modelValue": t[5] ||= (e) => N.contractNumber = e,
								class: "rw-input",
								type: "text",
								readonly: F.value
							}, null, 8, pm), [[J, N.contractNumber]])]),
							Y("label", mm, [Y("span", null, H(B(j)("rechnungswerk", "Objekt-/Projektkennung (BT-18)")), 1), S(Y("input", {
								"onUpdate:modelValue": t[6] ||= (e) => N.projectReference = e,
								class: "rw-input",
								type: "text",
								readonly: F.value
							}, null, 8, hm), [[J, N.projectReference]])]),
							t[39] ||= Y("span", {
								class: "rw-field",
								"aria-hidden": "true"
							}, null, -1)
						])
					], 40, nm)
				]),
				Y("section", gm, [
					Y("h3", null, H(B(j)("rechnungswerk", "Empfänger")), 1),
					F.value ? L("", !0) : (E(), q("div", _m, [Y("label", vm, [
						Y("span", null, H(B(j)("rechnungswerk", "Kunde übernehmen")), 1),
						W(ff, { onSelect: Me }),
						Y("span", ym, H(B(j)("rechnungswerk", "Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.")), 1)
					])])),
					Y("div", bm, [Y("label", xm, [Y("span", null, H(B(j)("rechnungswerk", "Name")), 1), F.value ? (E(), q("input", {
						key: 1,
						class: "rw-input",
						type: "text",
						readonly: "",
						value: N.recipientName
					}, null, 8, Sm)) : (E(), U(Jd, {
						key: 0,
						modelValue: N.recipientName,
						"onUpdate:modelValue": t[8] ||= (e) => N.recipientName = e,
						onSelect: Pe
					}, null, 8, ["modelValue"]))]), Y("label", Cm, [Y("span", null, H(B(j)("rechnungswerk", "E-Mail")), 1), S(Y("input", {
						"onUpdate:modelValue": t[9] ||= (e) => N.recipientEmail = e,
						class: "rw-input",
						type: "email",
						readonly: F.value
					}, null, 8, wm), [[J, N.recipientEmail]])])]),
					Y("div", Tm, [Y("label", Em, [
						Y("span", null, H(B(j)("rechnungswerk", "Adresszusatz")), 1),
						S(Y("input", {
							"onUpdate:modelValue": t[10] ||= (e) => N.recipientAddressAddition = e,
							class: "rw-input",
							type: "text",
							readonly: F.value
						}, null, 8, Dm), [[J, N.recipientAddressAddition]]),
						Y("span", Om, H(B(j)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					])]),
					Y("div", km, [
						Y("label", Am, [Y("span", null, H(B(j)("rechnungswerk", "Straße")), 1), S(Y("input", {
							"onUpdate:modelValue": t[11] ||= (e) => N.recipientAddress = e,
							class: "rw-input",
							type: "text",
							readonly: F.value
						}, null, 8, jm), [[J, N.recipientAddress]])]),
						Y("label", Mm, [Y("span", null, H(B(j)("rechnungswerk", "PLZ")), 1), S(Y("input", {
							"onUpdate:modelValue": t[12] ||= (e) => N.recipientPostalCode = e,
							class: "rw-input",
							type: "text",
							readonly: F.value
						}, null, 8, Nm), [[J, N.recipientPostalCode]])]),
						Y("label", Pm, [Y("span", null, H(B(j)("rechnungswerk", "Ort")), 1), S(Y("input", {
							"onUpdate:modelValue": t[13] ||= (e) => N.recipientCity = e,
							class: "rw-input",
							type: "text",
							readonly: F.value
						}, null, 8, Fm), [[J, N.recipientCity]])]),
						Y("label", Im, [Y("span", null, H(B(j)("rechnungswerk", "Land")), 1), W(ef, {
							modelValue: N.recipientCountry,
							"onUpdate:modelValue": t[14] ||= (e) => N.recipientCountry = e,
							disabled: F.value
						}, null, 8, ["modelValue", "disabled"])])
					]),
					Y("div", Lm, [
						Y("label", Rm, [Y("span", null, H(B(j)("rechnungswerk", "USt-IdNr. (optional)")), 1), S(Y("input", {
							"onUpdate:modelValue": t[15] ||= (e) => N.recipientVatId = e,
							class: "rw-input",
							type: "text",
							readonly: F.value
						}, null, 8, zm), [[J, N.recipientVatId]])]),
						Y("label", Bm, [Y("span", null, H(B(j)("rechnungswerk", "Ansprechpartner (optional)")), 1), S(Y("input", {
							"onUpdate:modelValue": t[16] ||= (e) => N.recipientContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: F.value
						}, null, 8, Vm), [[J, N.recipientContactPerson]])]),
						Y("label", Hm, [Y("span", null, H(B(j)("rechnungswerk", "Telefon (optional)")), 1), S(Y("input", {
							"onUpdate:modelValue": t[17] ||= (e) => N.recipientPhone = e,
							class: "rw-input",
							type: "text",
							readonly: F.value
						}, null, 8, Um), [[J, N.recipientPhone]])])
					])
				]),
				Y("section", Wm, [
					Y("h3", null, H(l.value ? B(j)("rechnungswerk", "Ansprechpartner (für dieses Angebot)") : B(j)("rechnungswerk", "Ansprechpartner (für diese Rechnung)")), 1),
					Y("div", Gm, [
						Y("label", Km, [Y("span", null, H(B(j)("rechnungswerk", "Name")), 1), S(Y("input", {
							"onUpdate:modelValue": t[18] ||= (e) => N.sellerContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: F.value
						}, null, 8, qm), [[J, N.sellerContactPerson]])]),
						Y("label", Jm, [Y("span", null, H(B(j)("rechnungswerk", "Telefon")), 1), S(Y("input", {
							"onUpdate:modelValue": t[19] ||= (e) => N.sellerContactPhone = e,
							class: "rw-input",
							type: "text",
							readonly: F.value
						}, null, 8, Ym), [[J, N.sellerContactPhone]])]),
						Y("label", Xm, [Y("span", null, H(B(j)("rechnungswerk", "E-Mail")), 1), S(Y("input", {
							"onUpdate:modelValue": t[20] ||= (e) => N.sellerContactEmail = e,
							class: "rw-input",
							type: "email",
							readonly: F.value
						}, null, 8, Zm), [[J, N.sellerContactEmail]])])
					]),
					Y("p", Qm, H(l.value ? B(j)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.") : B(j)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.")), 1)
				]),
				Y("section", $m, [Y("div", eh, [Y("h3", null, H(B(j)("rechnungswerk", "Anrede & Einleitung")), 1), !F.value && f.value.length > 0 ? (E(), U(B(ht), {
					key: 0,
					menuName: B(j)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: g(() => [W(so, { size: 18 })]),
					default: g(() => [(E(!0), q(k, null, C(f.value, (e) => (E(), U(B(Dt), {
						key: e.id,
						onClick: (t) => m(e)
					}, {
						default: g(() => [R(H(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : L("", !0)]), Y("label", th, [Y("span", null, H(B(j)("rechnungswerk", "Anrede & Einleitung")), 1), S(Y("textarea", {
					"onUpdate:modelValue": t[21] ||= (e) => N.greeting = e,
					class: "rw-input",
					rows: "3",
					readonly: F.value,
					placeholder: B(j)("rechnungswerk", "Anrede und Einleitung – Vorgabe aus den Textbausteinen")
				}, null, 8, nh), [[J, N.greeting]])])]),
				Y("section", rh, [Y("h3", null, H(B(j)("rechnungswerk", "Positionen")), 1), W(tp, {
					items: x.value,
					"onUpdate:items": t[22] ||= (e) => x.value = e,
					products: B(o).products,
					readonly: F.value,
					smallBusiness: B(s).settings?.smallBusiness ?? !1,
					defaultTaxRateBp: B(s).settings?.defaultTaxRateBp ?? 1900
				}, null, 8, [
					"items",
					"products",
					"readonly",
					"smallBusiness",
					"defaultTaxRateBp"
				])]),
				Y("section", ih, [
					Y("h3", null, H(B(j)("rechnungswerk", "Steuer & Summen")), 1),
					Y("div", ah, [Y("label", oh, [Y("span", null, H(B(j)("rechnungswerk", "Steuerfall")), 1), S(Y("select", {
						"onUpdate:modelValue": t[23] ||= (e) => N.specialTaxCase = e,
						class: "rw-input",
						disabled: F.value
					}, [
						Y("option", ch, H(B(j)("rechnungswerk", "Regelbesteuerung")), 1),
						Y("option", lh, H(B(j)("rechnungswerk", "Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)")), 1),
						Y("option", uh, H(B(j)("rechnungswerk", "Innergemeinschaftliche Lieferung (steuerfrei)")), 1),
						Y("option", dh, H(B(j)("rechnungswerk", "Ausfuhrlieferung Drittland (steuerfrei)")), 1)
					], 8, sh), [[re, N.specialTaxCase]])]), t[40] ||= Y("span", {
						class: "rw-field",
						"aria-hidden": "true"
					}, null, -1)]),
					N.specialTaxCase === "" ? L("", !0) : (E(), U(B(Q), {
						key: 0,
						type: "info",
						text: B(j)("rechnungswerk", "Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.")
					}, null, 8, ["text"])),
					Y("div", fh, [Y("div", ph, [
						Y("div", mh, [Y("span", null, H(B(j)("rechnungswerk", "Zwischensumme (netto)")), 1), Y("strong", null, H(B(xu)(we.value.subtotalCents)), 1)]),
						(E(!0), q(k, null, C(we.value.taxBreakdown, (e) => (E(), q("div", {
							key: e.rateBp,
							class: "rw-kpi-row rw-kpi-row--muted"
						}, [Y("span", null, H(B(j)("rechnungswerk", "USt {rate}", { rate: B(Su)(e.rateBp) })) + " (" + H(B(xu)(e.netCents)) + ")", 1), Y("span", null, H(B(xu)(e.taxCents)), 1)]))), 128)),
						Y("div", hh, [Y("span", null, H(B(j)("rechnungswerk", "Gesamt (brutto)")), 1), Y("strong", null, H(B(xu)(we.value.totalCents)), 1)])
					])])
				]),
				l.value ? (E(), q("section", wh, [
					Y("h3", null, H(B(j)("rechnungswerk", "Gültigkeit")), 1),
					Y("div", Th, [Y("label", Eh, [Y("span", null, H(B(j)("rechnungswerk", "Gültig bis")), 1), S(Y("input", {
						"onUpdate:modelValue": t[26] ||= (e) => N.validUntil = e,
						class: "rw-input",
						type: "date",
						readonly: F.value
					}, null, 8, Dh), [[J, N.validUntil]])]), Y("label", Oh, [Y("span", kh, [S(Y("input", {
						"onUpdate:modelValue": t[27] ||= (e) => N.offerFreeform = e,
						type: "checkbox",
						disabled: F.value
					}, null, 8, Ah), [[ne, N.offerFreeform]]), R(" " + H(B(j)("rechnungswerk", "Freibleibendes Angebot (unverbindlich)")), 1)])])]),
					Y("p", jh, H(B(j)("rechnungswerk", "„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.")), 1)
				])) : (E(), q("section", gh, [Y("h3", null, H(B(j)("rechnungswerk", "Zahlungsbedingungen")), 1), Y("div", _h, [
					Y("label", vh, [Y("span", null, H(B(j)("rechnungswerk", "Zahlungsziel (Tage)")), 1), S(Y("input", {
						"onUpdate:modelValue": t[24] ||= (e) => N.paymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						readonly: F.value
					}, null, 8, yh), [[J, N.paymentTermDays]])]),
					Y("label", bh, [Y("span", null, H(B(j)("rechnungswerk", "Fällig am")), 1), Y("input", {
						class: "rw-input",
						type: "text",
						readonly: "",
						value: P.value || "—"
					}, null, 8, xh)]),
					Y("label", Sh, [Y("span", null, H(B(j)("rechnungswerk", "Skonto")), 1), S(Y("input", {
						"onUpdate:modelValue": t[25] ||= (e) => N.discountTerms = e,
						class: "rw-input",
						type: "text",
						readonly: F.value,
						placeholder: B(j)("rechnungswerk", "z. B. 2 % bei Zahlung bis\xA0…")
					}, null, 8, Ch), [[J, N.discountTerms]])])
				])])),
				Y("section", Mh, [Y("div", Nh, [Y("h3", null, H(B(j)("rechnungswerk", "Schlusstext")), 1), !F.value && p.value.length > 0 ? (E(), U(B(ht), {
					key: 0,
					menuName: B(j)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: g(() => [W(so, { size: 18 })]),
					default: g(() => [(E(!0), q(k, null, C(p.value, (e) => (E(), U(B(Dt), {
						key: e.id,
						onClick: (t) => ee(e)
					}, {
						default: g(() => [R(H(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : L("", !0)]), Y("label", Ph, [Y("span", null, H(B(j)("rechnungswerk", "Schlusstext / Anmerkungen")), 1), S(Y("textarea", {
					"onUpdate:modelValue": t[28] ||= (e) => N.extraText = e,
					class: "rw-input",
					rows: "3",
					readonly: F.value,
					placeholder: B(j)("rechnungswerk", "Schlusstext – Vorgabe aus den Textbausteinen")
				}, null, 8, Fh), [[J, N.extraText]])])]),
				!F.value || ie.value.length > 0 ? (E(), q("section", Ih, [
					Y("h3", null, H(l.value ? B(j)("rechnungswerk", "Notizen / Hinweise auf dem Angebot") : B(j)("rechnungswerk", "Notizen / Hinweise auf der Rechnung")), 1),
					(E(!0), q(k, null, C(ie.value, (e, t) => (E(), q("div", {
						key: t,
						class: "rw-note-row"
					}, [S(Y("input", {
						"onUpdate:modelValue": (e) => ie.value[t] = e,
						class: "rw-input",
						type: "text",
						readonly: F.value,
						"aria-label": B(j)("rechnungswerk", "Notiz {index}", { index: t + 1 })
					}, null, 8, Lh), [[J, ie.value[t]]]), F.value ? L("", !0) : (E(), U(B(I), {
						key: 0,
						variant: "tertiary",
						"aria-label": B(j)("rechnungswerk", "Notiz entfernen"),
						onClick: (e) => Ae(t)
					}, {
						icon: g(() => [W(fd, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"]))]))), 128)),
					F.value ? L("", !0) : (E(), U(B(I), {
						key: 0,
						variant: "tertiary",
						onClick: ke
					}, {
						icon: g(() => [W(lc, { size: 20 })]),
						default: g(() => [R(" " + H(B(j)("rechnungswerk", "Notiz hinzufügen")), 1)]),
						_: 1
					})),
					Y("p", Rh, H(l.value ? B(j)("rechnungswerk", "Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.") : B(j)("rechnungswerk", "Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.")), 1)
				])) : L("", !0),
				Y("div", zh, [F.value ? b.value ? (E(), q(k, { key: 1 }, [
					W(B(I), { onClick: $e }, {
						icon: g(() => [W(gc, { size: 20 })]),
						default: g(() => [R(" " + H(B(j)("rechnungswerk", "PDF herunterladen")), 1)]),
						_: 1
					}),
					W(B(I), {
						variant: l.value ? "secondary" : "primary",
						disabled: O.value,
						onClick: t[30] ||= (e) => ae.value = !0
					}, {
						icon: g(() => [W(yd, { size: 20 })]),
						default: g(() => [R(" " + H(B(j)("rechnungswerk", "An Kunde senden")), 1)]),
						_: 1
					}, 8, ["variant", "disabled"]),
					!l.value && b.value.status === "committed" ? (E(), U(B(I), {
						key: 0,
						variant: "error",
						disabled: D.value,
						onClick: Ke
					}, {
						default: g(() => [R(H(B(j)("rechnungswerk", "Stornieren")), 1)]),
						_: 1
					}, 8, ["disabled"])) : L("", !0),
					l.value ? (E(), q(k, { key: 1 }, [
						Qe.value ? (E(), U(B(I), {
							key: 0,
							disabled: D.value,
							onClick: Z
						}, {
							icon: g(() => [W(Tl, { size: 20 })]),
							default: g(() => [R(" " + H(B(j)("rechnungswerk", "Annehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : L("", !0),
						Qe.value ? (E(), U(B(I), {
							key: 1,
							disabled: D.value,
							onClick: tt
						}, {
							icon: g(() => [W(Ml, { size: 20 })]),
							default: g(() => [R(" " + H(B(j)("rechnungswerk", "Ablehnen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : L("", !0),
						Ye.value ? (E(), U(B(I), {
							key: 2,
							disabled: D.value,
							onClick: Je
						}, {
							icon: g(() => [W(Bd, { size: 20 })]),
							default: g(() => [R(" " + H(B(j)("rechnungswerk", "Revidieren")), 1)]),
							_: 1
						}, 8, ["disabled"])) : L("", !0),
						Xe.value ? (E(), U(B(I), {
							key: 3,
							variant: "primary",
							disabled: D.value,
							onClick: qe
						}, {
							icon: g(() => [W(Nd, { size: 20 })]),
							default: g(() => [R(" " + H(B(j)("rechnungswerk", "In Rechnung übernehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : L("", !0)
					], 64)) : L("", !0)
				], 64)) : L("", !0) : (E(), q(k, { key: 0 }, [
					W(B(I), {
						disabled: D.value,
						onClick: t[29] ||= (e) => Ve()
					}, {
						default: g(() => [R(H(B(j)("rechnungswerk", "Speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					W(B(I), {
						disabled: D.value,
						onClick: He
					}, {
						icon: g(() => [W(Ed, { size: 20 })]),
						default: g(() => [R(" " + H(B(j)("rechnungswerk", "Vorschau")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					W(B(I), {
						variant: "primary",
						disabled: D.value,
						onClick: We
					}, {
						icon: g(() => [W(So, { size: 20 })]),
						default: g(() => [R(" " + H(B(j)("rechnungswerk", "Festschreiben")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					b.value ? (E(), U(B(I), {
						key: 0,
						variant: "error",
						disabled: D.value,
						onClick: Ge
					}, {
						default: g(() => [R(H(B(j)("rechnungswerk", "Löschen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : L("", !0)
				], 64))]),
				W(ip, {
					open: A.value === "finalize",
					name: l.value ? B(j)("rechnungswerk", "Angebot festschreiben") : B(j)("rechnungswerk", "Rechnung festschreiben"),
					message: Se.value,
					confirmLabel: B(j)("rechnungswerk", "Festschreiben"),
					onClose: t[31] ||= (e) => A.value = null,
					onConfirm: et
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				W(ip, {
					open: A.value === "delete",
					name: l.value ? B(j)("rechnungswerk", "Angebot löschen") : B(j)("rechnungswerk", "Entwurf löschen"),
					message: l.value ? B(j)("rechnungswerk", "Diesen Angebots-Entwurf wirklich löschen?") : B(j)("rechnungswerk", "Diesen Entwurf wirklich löschen?"),
					confirmLabel: B(j)("rechnungswerk", "Löschen"),
					destructive: "",
					onClose: t[32] ||= (e) => A.value = null,
					onConfirm: at
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				W(ip, {
					open: A.value === "cancel",
					name: B(j)("rechnungswerk", "Rechnung stornieren"),
					message: B(j)("rechnungswerk", "Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?"),
					confirmLabel: B(j)("rechnungswerk", "Stornorechnung erstellen"),
					destructive: "",
					onClose: t[33] ||= (e) => A.value = null,
					onConfirm: ot
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				W(ip, {
					open: A.value === "convert",
					name: B(j)("rechnungswerk", "In Rechnung übernehmen"),
					message: B(j)("rechnungswerk", "Aus diesem Angebot wird ein neuer Rechnungs-Entwurf mit denselben Positionen erstellt. Das Angebot wird als „übernommen“ markiert. Fortfahren?"),
					confirmLabel: B(j)("rechnungswerk", "Rechnung erstellen"),
					onClose: t[34] ||= (e) => A.value = null,
					onConfirm: nt
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				W(ip, {
					open: A.value === "revise",
					name: B(j)("rechnungswerk", "Angebot revidieren"),
					message: B(j)("rechnungswerk", "Es wird eine überarbeitbare Kopie als neue Angebots-Revision erstellt. Beim Festschreiben erhält sie eine Revisionsnummer (z. B. AN-…-1) und dieses Angebot wird als „revidiert“ markiert. Fortfahren?"),
					confirmLabel: B(j)("rechnungswerk", "Revision erstellen"),
					onClose: t[35] ||= (e) => A.value = null,
					onConfirm: rt
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				W(ip, {
					open: A.value === "leave",
					name: B(j)("rechnungswerk", "Ungespeicherte Änderungen"),
					message: B(j)("rechnungswerk", "Deine Änderungen sind noch nicht gespeichert. Wenn du die Seite verlässt, gehen sie verloren."),
					cancelLabel: B(j)("rechnungswerk", "Weiter bearbeiten"),
					confirmLabel: B(j)("rechnungswerk", "Verwerfen"),
					destructive: "",
					onClose: t[36] ||= (e) => Be(!1),
					onConfirm: t[37] ||= (e) => Be(!0)
				}, null, 8, [
					"open",
					"name",
					"message",
					"cancelLabel",
					"confirmLabel"
				]),
				W(dp, {
					open: ae.value,
					invoice: b.value,
					defaultBody: Ce.value,
					saving: O.value,
					kind: l.value ? "quote" : "invoice",
					onClose: t[38] ||= (e) => ae.value = !1,
					onSend: it
				}, null, 8, [
					"open",
					"invoice",
					"defaultBody",
					"saving",
					"kind"
				]),
				W(B(bt), {
					open: oe.value,
					name: B(j)("rechnungswerk", "Vorschau (Entwurf)"),
					size: "large",
					"onUpdate:open": Ue
				}, {
					default: g(() => [se.value ? (E(), q("iframe", {
						key: 0,
						src: se.value,
						class: "preview-frame",
						title: B(j)("rechnungswerk", "Vorschau (Entwurf)")
					}, null, 8, Bh)) : L("", !0)]),
					_: 1
				}, 8, ["open", "name"])
			]);
		};
	}
}), [["__scopeId", "data-v-199a5627"]]), Hh = {
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
}, Uh = ["aria-hidden", "aria-label"], Wh = [
	"fill",
	"width",
	"height"
], Gh = { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" }, Kh = { key: 0 };
function qh(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon alert-circle-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Gh, [n.title ? (E(), q("title", Kh, H(n.title), 1)) : L("", !0)])], 8, Wh))], 16, Uh);
}
var Jh = /*#__PURE__*/ $(Hh, [["render", qh]]), Yh = { class: "rw-view" }, Xh = { class: "rw-view__head" }, Zh = { key: 2 }, Qh = { class: "rw-filterbar" }, $h = ["onClick"], eg = { class: "rw-chip__n" }, tg = { class: "rw-table-wrap" }, ng = { class: "rw-table" }, rg = { class: "num" }, ig = ["onClick"], ag = { class: "rw-status-cell" }, og = { class: "rw-qstatus-text" }, sg = { class: "rw-nowrap" }, cg = { class: "num" }, lg = { class: "rw-col-actions" }, ug = { class: "rw-actions" }, dg = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "QuotesView",
	setup(e) {
		let t = je(), n = Ep(), r = X(""), i = [
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
		], a = X("all"), o = (e) => e.quoteStatus === "open" || e.quoteStatus === "expired", s = G(() => {
			let e = {
				all: n.quotes.length,
				open: 0,
				accepted: 0,
				rejected: 0,
				converted: 0
			};
			for (let t of n.quotes) o(t) && e.open++, t.quoteStatus === "accepted" && e.accepted++, t.quoteStatus === "rejected" && e.rejected++, t.quoteStatus === "converted" && e.converted++;
			return e;
		}), c = G(() => {
			switch (a.value) {
				case "open": return n.quotes.filter(o);
				case "accepted": return n.quotes.filter((e) => e.quoteStatus === "accepted");
				case "rejected": return n.quotes.filter((e) => e.quoteStatus === "rejected");
				case "converted": return n.quotes.filter((e) => e.quoteStatus === "converted");
				default: return n.quotes;
			}
		}), l = (e) => e.status === "committed" && (e.quoteStatus === "open" || e.quoteStatus === "expired" || e.quoteStatus === "accepted"), u = {
			draft: Ac,
			open: Zc,
			expired: Jh,
			accepted: Wc,
			rejected: Lc,
			converted: Nd,
			superseded: Bd
		}, d = (e) => e ? u[e] ?? Ac : Ac, f = (e) => e ? j("rechnungswerk", du[e] ?? e) : "";
		function p(e) {
			return e ? (e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e)).toLocaleDateString() : "—";
		}
		ce(() => {
			n.fetchAll().catch((e) => {
				r.value = e.message ?? j("rechnungswerk", "Laden fehlgeschlagen");
			});
		});
		function m() {
			t.push({ name: "quote-new" });
		}
		function h(e) {
			t.push({
				name: "quote-detail",
				params: { id: String(e) }
			});
		}
		function ee(e) {
			wp(e);
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
				r.value = e.message ?? j("rechnungswerk", "Übernahme fehlgeschlagen");
			}
		}
		return (e, t) => (E(), q("div", Yh, [
			Y("div", Xh, [Y("h2", null, H(B(j)("rechnungswerk", "Angebote")), 1), W(B(I), {
				variant: "primary",
				onClick: m
			}, {
				icon: g(() => [W(lc, { size: 20 })]),
				default: g(() => [R(" " + H(B(j)("rechnungswerk", "Neues Angebot")), 1)]),
				_: 1
			})]),
			r.value ? (E(), U(B(Q), {
				key: 0,
				type: "error",
				text: r.value
			}, null, 8, ["text"])) : L("", !0),
			!B(n).loading && B(n).quotes.length === 0 ? (E(), U(B(wt), {
				key: 1,
				name: B(j)("rechnungswerk", "Noch keine Angebote"),
				description: B(j)("rechnungswerk", "Lege dein erstes Angebot an.")
			}, {
				icon: g(() => [W(Na, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : B(n).quotes.length > 0 ? (E(), q("div", Zh, [Y("div", Qh, [(E(), q(k, null, C(i, (e) => Y("button", {
				key: e.key,
				class: V(["rw-chip", { "rw-chip--active": a.value === e.key }]),
				onClick: (t) => a.value = e.key
			}, [R(H(B(j)("rechnungswerk", e.label)) + " ", 1), Y("span", eg, H(s.value[e.key]), 1)], 10, $h)), 64))]), Y("div", tg, [Y("table", ng, [Y("thead", null, [Y("tr", null, [
				Y("th", null, H(B(j)("rechnungswerk", "Status")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Nummer")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Empfänger")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Datum")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Gültig bis")), 1),
				Y("th", rg, H(B(j)("rechnungswerk", "Brutto")), 1),
				t[0] ||= Y("th", { class: "rw-col-actions" }, null, -1)
			])]), Y("tbody", null, [(E(!0), q(k, null, C(c.value, (e) => (E(), q("tr", {
				key: e.id,
				class: V(["rw-row-clickable", { "rw-row--overdue": e.quoteStatus === "expired" }]),
				onClick: (t) => h(e.id)
			}, [
				Y("td", null, [Y("span", ag, [(E(), U(y(d(e.quoteStatus)), {
					size: 20,
					class: V(["rw-sicon", `rw-qsicon--${e.quoteStatus}`]),
					title: f(e.quoteStatus)
				}, null, 8, ["class", "title"])), Y("span", og, H(f(e.quoteStatus)), 1)])]),
				Y("td", sg, H(e.number ?? B(j)("rechnungswerk", "(Entwurf)")), 1),
				Y("td", null, H(e.recipientName ?? "—"), 1),
				Y("td", null, H(p(e.issueDate ?? e.createdAt)), 1),
				Y("td", null, [Y("span", { class: V({ "rw-amt-overdue": e.quoteStatus === "expired" }) }, H(p(e.validUntil)), 3)]),
				Y("td", cg, H(B(xu)(e.totalCents)), 1),
				Y("td", lg, [Y("div", ug, [l(e) ? (E(), U(B(I), {
					key: 0,
					variant: "tertiary",
					"aria-label": B(j)("rechnungswerk", "In Rechnung übernehmen"),
					title: B(j)("rechnungswerk", "In Rechnung übernehmen"),
					onClick: P((t) => te(e.id), ["stop"])
				}, {
					icon: g(() => [W(Nd, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])) : L("", !0), e.status === "draft" ? L("", !0) : (E(), U(B(I), {
					key: 1,
					variant: "tertiary",
					"aria-label": B(j)("rechnungswerk", "PDF herunterladen"),
					title: B(j)("rechnungswerk", "PDF herunterladen"),
					onClick: P((t) => ee(e.id), ["stop"])
				}, {
					icon: g(() => [W(gc, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				]))])])
			], 10, ig))), 128))])])])])) : L("", !0)
		]));
	}
}), [["__scopeId", "data-v-c26e3d67"]]), fg = { class: "product-modal" }, pg = { class: "field" }, mg = { class: "field" }, hg = { class: "field-row" }, gg = { class: "field" }, _g = ["value"], vg = { class: "field" }, yg = { class: "field" }, bg = ["value"], xg = { class: "field" }, Sg = ["placeholder"], Cg = { class: "hint" }, wg = { class: "actions" }, Tg = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "ProductEditModal",
	props: {
		open: { type: Boolean },
		product: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = X(null), a = Ze({
			name: "",
			description: "",
			defaultUnitCode: "C62",
			defaultUnitLabel: "",
			defaultTaxRateBp: 1900
		}), o = X("0,00");
		function s() {
			hu(o.value) !== null && (o.value = vu(yu(o.value)));
		}
		let c = G(() => n.product ? j("rechnungswerk", "Produkt bearbeiten") : j("rechnungswerk", "Produkt anlegen")), l = G(() => a.name.trim() !== "");
		M(() => n.open, (e) => {
			if (!e) return;
			let t = n.product;
			a.name = t?.name ?? "", a.description = t?.description ?? "", a.defaultUnitCode = t?.defaultUnitCode ?? "C62", a.defaultUnitLabel = t?.defaultUnitLabel ?? "", a.defaultTaxRateBp = t?.defaultTaxRateBp ?? 1900, o.value = vu(t?.defaultPriceE4 ?? 0), rt(() => i.value?.focus());
		}, { immediate: !0 });
		function u() {
			l.value && r("save", {
				name: a.name.trim(),
				description: a.description.trim() === "" ? null : a.description.trim(),
				defaultUnitCode: a.defaultUnitCode,
				defaultUnitLabel: a.defaultUnitLabel.trim() === "" ? null : a.defaultUnitLabel.trim(),
				defaultPriceInput: o.value,
				defaultTaxRateBp: a.defaultTaxRateBp
			});
		}
		return (t, n) => e.open ? (E(), U(B(ft), {
			key: 0,
			name: c.value,
			onKeydown: n[7] ||= me((e) => B(Ds)(e, () => t.$emit("close")), ["esc"]),
			onClose: n[8] ||= (e) => t.$emit("close")
		}, {
			default: g(() => [Y("div", fg, [
				Y("h2", null, H(c.value), 1),
				Y("label", pg, [Y("span", null, H(B(j)("rechnungswerk", "Name")) + " *", 1), S(Y("input", {
					ref_key: "nameInput",
					ref: i,
					"onUpdate:modelValue": n[0] ||= (e) => a.name = e,
					class: "input",
					type: "text"
				}, null, 512), [[J, a.name]])]),
				Y("label", mg, [Y("span", null, H(B(j)("rechnungswerk", "Beschreibung")), 1), S(Y("textarea", {
					"onUpdate:modelValue": n[1] ||= (e) => a.description = e,
					class: "input",
					rows: "2"
				}, null, 512), [[J, a.description]])]),
				Y("div", hg, [
					Y("label", gg, [Y("span", null, H(B(j)("rechnungswerk", "Einheit")), 1), S(Y("select", {
						"onUpdate:modelValue": n[2] ||= (e) => a.defaultUnitCode = e,
						class: "input"
					}, [(E(!0), q(k, null, C(B(ru), (e) => (E(), q("option", {
						key: e,
						value: e
					}, H(B(j)("rechnungswerk", B(iu)[e])), 9, _g))), 128))], 512), [[re, a.defaultUnitCode]])]),
					Y("label", vg, [Y("span", null, H(B(j)("rechnungswerk", "Standard-Preis (€)")), 1), S(Y("input", {
						"onUpdate:modelValue": n[3] ||= (e) => o.value = e,
						class: "input",
						type: "text",
						inputmode: "decimal",
						onBlur: s
					}, null, 544), [[J, o.value]])]),
					Y("label", yg, [Y("span", null, H(B(j)("rechnungswerk", "USt-Satz")), 1), S(Y("select", {
						"onUpdate:modelValue": n[4] ||= (e) => a.defaultTaxRateBp = e,
						class: "input"
					}, [(E(!0), q(k, null, C(B(au), (e) => (E(), q("option", {
						key: e,
						value: e
					}, H(B(Su)(e)), 9, bg))), 128))], 512), [[
						re,
						a.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])])
				]),
				Y("label", xg, [
					Y("span", null, H(B(j)("rechnungswerk", "Eigene Einheit (optional)")), 1),
					S(Y("input", {
						"onUpdate:modelValue": n[5] ||= (e) => a.defaultUnitLabel = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: B(j)("rechnungswerk", "z. B. Personen, Sitzung")
					}, null, 8, Sg), [[J, a.defaultUnitLabel]]),
					Y("span", Cg, H(B(j)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF. In der E-Rechnung wird die Einheit generisch (Stück) abgebildet, damit sie gültig bleibt.")), 1)
				]),
				Y("div", wg, [W(B(I), { onClick: n[6] ||= (e) => t.$emit("close") }, {
					default: g(() => [R(H(B(j)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), W(B(I), {
					variant: "primary",
					disabled: e.saving || !l.value,
					onClick: u
				}, {
					default: g(() => [R(H(B(j)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : L("", !0);
	}
}), [["__scopeId", "data-v-e77e93c0"]]), Eg = { class: "rw-view" }, Dg = { class: "rw-view__head" }, Og = {
	key: 2,
	class: "rw-table-wrap"
}, kg = { class: "rw-table" }, Ag = { class: "num" }, jg = { class: "num" }, Mg = ["onClick"], Ng = {
	key: 0,
	class: "rw-muted"
}, Pg = { class: "num" }, Fg = { class: "num" }, Ig = { class: "rw-col-actions" }, Lg = { class: "rw-actions" }, Rg = /* @__PURE__ */ z({
	__name: "ProductsView",
	setup(e) {
		let t = jp(), n = X(!1), r = X(null), i = X(null), a = X(""), o = (e) => iu[e] ?? e;
		function s(e, t) {
			let n = e.message ?? t;
			a.value = n, console.error("[rechnungswerk] products:", e);
		}
		ce(() => {
			t.fetchAll().catch((e) => s(e, j("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function c() {
			r.value = null, n.value = !0;
		}
		function l(e) {
			r.value = e, n.value = !0;
		}
		async function u(e) {
			a.value = "";
			try {
				r.value ? await t.update(r.value.id, e) : await t.create(e), n.value = !1;
			} catch (e) {
				s(e, j("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function d(e) {
			i.value = e;
		}
		async function f() {
			let e = i.value;
			if (i.value = null, e) {
				a.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					s(e, j("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, s) => (E(), q("div", Eg, [
			Y("div", Dg, [Y("h2", null, H(B(j)("rechnungswerk", "Produkte")), 1), W(B(I), {
				variant: "primary",
				onClick: c
			}, {
				icon: g(() => [W(lc, { size: 20 })]),
				default: g(() => [R(" " + H(B(j)("rechnungswerk", "Produkt anlegen")), 1)]),
				_: 1
			})]),
			a.value ? (E(), U(B(Q), {
				key: 0,
				type: "error",
				text: a.value
			}, null, 8, ["text"])) : L("", !0),
			!B(t).loading && B(t).products.length === 0 ? (E(), U(B(wt), {
				key: 1,
				name: B(j)("rechnungswerk", "Noch keine Produkte"),
				description: B(j)("rechnungswerk", "Pflege wiederkehrende Leistungen, um sie schnell in Rechnungen zu übernehmen.")
			}, {
				icon: g(() => [W(eo, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : B(t).products.length > 0 ? (E(), q("div", Og, [Y("table", kg, [Y("thead", null, [Y("tr", null, [
				Y("th", null, H(B(j)("rechnungswerk", "Name")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Einheit")), 1),
				Y("th", Ag, H(B(j)("rechnungswerk", "Preis")), 1),
				Y("th", jg, H(B(j)("rechnungswerk", "USt")), 1),
				s[2] ||= Y("th", { class: "num" }, null, -1)
			])]), Y("tbody", null, [(E(!0), q(k, null, C(B(t).products, (e) => (E(), q("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => l(e)
			}, [
				Y("td", null, [R(H(e.name) + " ", 1), e.description ? (E(), q("div", Ng, H(e.description), 1)) : L("", !0)]),
				Y("td", null, H(e.defaultUnitLabel || B(j)("rechnungswerk", o(e.defaultUnitCode))), 1),
				Y("td", Pg, H(B(bu)(e.defaultPriceE4)), 1),
				Y("td", Fg, H(B(Su)(e.defaultTaxRateBp)), 1),
				Y("td", Ig, [Y("div", Lg, [W(B(I), {
					variant: "tertiary",
					"aria-label": B(j)("rechnungswerk", "Löschen"),
					title: B(j)("rechnungswerk", "Löschen"),
					onClick: P((t) => d(e), ["stop"])
				}, {
					icon: g(() => [W(fd, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, Mg))), 128))])])])) : L("", !0),
			W(Tg, {
				open: n.value,
				product: r.value,
				saving: B(t).loading,
				onClose: s[0] ||= (e) => n.value = !1,
				onSave: u
			}, null, 8, [
				"open",
				"product",
				"saving"
			]),
			W(ip, {
				open: i.value !== null,
				name: B(j)("rechnungswerk", "Produkt löschen"),
				message: i.value ? B(j)("rechnungswerk", "„{name}“ wirklich löschen?", { name: i.value.name }) : "",
				confirmLabel: B(j)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: s[1] ||= (e) => i.value = null,
				onConfirm: f
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), zg = {
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
}, Bg = ["aria-hidden", "aria-label"], Vg = [
	"fill",
	"width",
	"height"
], Hg = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, Ug = { key: 0 };
function Wg(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon star-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Hg, [n.title ? (E(), q("title", Ug, H(n.title), 1)) : L("", !0)])], 8, Vg))], 16, Bg);
}
var Gg = /*#__PURE__*/ $(zg, [["render", Wg]]), Kg = { class: "snippet-modal" }, qg = { class: "field" }, Jg = ["placeholder"], Yg = { class: "field-row" }, Xg = { class: "field" }, Zg = ["value"], Qg = { class: "field" }, $g = ["value"], e_ = { class: "field" }, t_ = { class: "hint" }, n_ = { class: "actions" }, r_ = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "TextSnippetEditModal",
	props: {
		open: { type: Boolean },
		snippet: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let n = ["invoice", "quote"], r = ["opening", "closing"], i = e, a = t, o = X(null), s = Ze({
			label: "",
			docType: "invoice",
			slot: "opening",
			content: "",
			isDefault: !1
		}), c = G(() => i.snippet ? j("rechnungswerk", "Textbaustein bearbeiten") : j("rechnungswerk", "Textbaustein anlegen")), l = G(() => s.label.trim() !== "");
		M(() => i.open, (e) => {
			if (!e) return;
			let t = i.snippet;
			s.label = t?.label ?? "", s.docType = t?.docType ?? "invoice", s.slot = t?.slot ?? "opening", s.content = t?.content ?? "", s.isDefault = t?.isDefault ?? !1, rt(() => o.value?.focus());
		}, { immediate: !0 });
		function u() {
			l.value && a("save", {
				label: s.label.trim(),
				docType: s.docType,
				slot: s.slot,
				content: s.content.trim() === "" ? null : s.content,
				isDefault: s.isDefault
			});
		}
		return (t, i) => e.open ? (E(), U(B(ft), {
			key: 0,
			name: c.value,
			onKeydown: i[6] ||= me((e) => B(Ds)(e, () => t.$emit("close")), ["esc"]),
			onClose: i[7] ||= (e) => t.$emit("close")
		}, {
			default: g(() => [Y("div", Kg, [
				Y("h2", null, H(c.value), 1),
				Y("label", qg, [Y("span", null, H(B(j)("rechnungswerk", "Name")) + " *", 1), S(Y("input", {
					ref_key: "nameInput",
					ref: o,
					"onUpdate:modelValue": i[0] ||= (e) => s.label = e,
					class: "input",
					type: "text",
					placeholder: B(j)("rechnungswerk", "z. B. Neukunde, Mahnfreundlich")
				}, null, 8, Jg), [[J, s.label]])]),
				Y("div", Yg, [Y("label", Xg, [Y("span", null, H(B(j)("rechnungswerk", "Dokument")), 1), S(Y("select", {
					"onUpdate:modelValue": i[1] ||= (e) => s.docType = e,
					class: "input"
				}, [(E(), q(k, null, C(n, (e) => Y("option", {
					key: e,
					value: e
				}, H(B(j)("rechnungswerk", B(su)[e])), 9, Zg)), 64))], 512), [[re, s.docType]])]), Y("label", Qg, [Y("span", null, H(B(j)("rechnungswerk", "Textbereich")), 1), S(Y("select", {
					"onUpdate:modelValue": i[2] ||= (e) => s.slot = e,
					class: "input"
				}, [(E(), q(k, null, C(r, (e) => Y("option", {
					key: e,
					value: e
				}, H(B(j)("rechnungswerk", B(cu)[e])), 9, $g)), 64))], 512), [[re, s.slot]])])]),
				Y("label", e_, [Y("span", null, H(B(j)("rechnungswerk", "Text")), 1), S(Y("textarea", {
					"onUpdate:modelValue": i[3] ||= (e) => s.content = e,
					class: "input",
					rows: "6"
				}, null, 512), [[J, s.content]])]),
				W(B(At), {
					modelValue: s.isDefault,
					"onUpdate:modelValue": i[4] ||= (e) => s.isDefault = e
				}, {
					default: g(() => [R(H(B(j)("rechnungswerk", "Als Standard für neue Dokumente verwenden")), 1)]),
					_: 1
				}, 8, ["modelValue"]),
				Y("p", t_, H(B(j)("rechnungswerk", "Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.")), 1),
				Y("div", n_, [W(B(I), { onClick: i[5] ||= (e) => t.$emit("close") }, {
					default: g(() => [R(H(B(j)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), W(B(I), {
					variant: "primary",
					disabled: e.saving || !l.value,
					onClick: u
				}, {
					default: g(() => [R(H(B(j)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : L("", !0);
	}
}), [["__scopeId", "data-v-b60fbea6"]]), i_ = { class: "rw-view" }, a_ = { class: "rw-view__head" }, o_ = { class: "rw-muted rw-intro" }, s_ = {
	key: 2,
	class: "rw-snippet-groups"
}, c_ = { class: "rw-snippet-group__head" }, l_ = { class: "rw-table-wrap" }, u_ = { class: "rw-table" }, d_ = ["onClick"], f_ = {
	key: 0,
	class: "rw-muted rw-snippet-content"
}, p_ = { class: "rw-snippet-actions" }, m_ = { class: "rw-actions" }, h_ = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "TextSnippetsView",
	setup(e) {
		let t = Lp(), n = ["invoice", "quote"], r = ["opening", "closing"], i = G(() => {
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
		ce(() => {
			t.fetchAll().catch((e) => l(e, j("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function u() {
			o.value = null, a.value = !0;
		}
		function d(e) {
			o.value = e, a.value = !0;
		}
		async function f(e) {
			if (!e.isDefault) {
				c.value = "";
				try {
					await t.update(e.id, { isDefault: !0 });
				} catch (e) {
					l(e, j("rechnungswerk", "Speichern fehlgeschlagen"));
				}
			}
		}
		async function p(e) {
			c.value = "";
			try {
				o.value ? await t.update(o.value.id, e) : await t.create(e), a.value = !1;
			} catch (e) {
				l(e, j("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function m(e) {
			s.value = e;
		}
		async function h() {
			let e = s.value;
			if (s.value = null, e) {
				c.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					l(e, j("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, n) => (E(), q("div", i_, [
			Y("div", a_, [Y("h2", null, H(B(j)("rechnungswerk", "Textbausteine")), 1), W(B(I), {
				variant: "primary",
				onClick: u
			}, {
				icon: g(() => [W(lc, { size: 20 })]),
				default: g(() => [R(" " + H(B(j)("rechnungswerk", "Textbaustein anlegen")), 1)]),
				_: 1
			})]),
			Y("p", o_, H(B(j)("rechnungswerk", "Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.")), 1),
			c.value ? (E(), U(B(Q), {
				key: 0,
				type: "error",
				text: c.value
			}, null, 8, ["text"])) : L("", !0),
			!B(t).loading && B(t).snippets.length === 0 ? (E(), U(B(wt), {
				key: 1,
				name: B(j)("rechnungswerk", "Noch keine Textbausteine"),
				description: B(j)("rechnungswerk", "Lege wiederkehrende Einleitungs- und Schlusstexte an, um sie schnell in Dokumente zu übernehmen.")
			}, {
				icon: g(() => [W(so, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : B(t).snippets.length > 0 ? (E(), q("div", s_, [(E(!0), q(k, null, C(i.value, (e) => (E(), q("section", {
				key: e.key,
				class: "rw-snippet-group"
			}, [Y("h3", c_, [
				R(H(B(j)("rechnungswerk", B(su)[e.docType])) + " ", 1),
				n[2] ||= Y("span", { class: "rw-snippet-group__sep" }, "–", -1),
				R(" " + H(B(j)("rechnungswerk", B(cu)[e.slot])), 1)
			]), Y("div", l_, [Y("table", u_, [Y("tbody", null, [(E(!0), q(k, null, C(e.items, (e) => (E(), q("tr", {
				key: e.id,
				class: "rw-row-clickable rw-snippet-row",
				onClick: (t) => d(e)
			}, [Y("td", null, [Y("strong", null, H(e.label), 1), e.content ? (E(), q("div", f_, H(e.content), 1)) : L("", !0)]), Y("td", p_, [Y("div", m_, [W(B(I), {
				variant: "tertiary",
				"aria-label": e.isDefault ? B(j)("rechnungswerk", "Standard-Vorlage") : B(j)("rechnungswerk", "Als Standard festlegen"),
				title: e.isDefault ? B(j)("rechnungswerk", "Standard-Vorlage") : B(j)("rechnungswerk", "Als Standard festlegen"),
				onClick: P((t) => f(e), ["stop"])
			}, {
				icon: g(() => [e.isDefault ? (E(), U(us, {
					key: 0,
					size: 20,
					class: "rw-star rw-star--active"
				})) : (E(), U(Gg, {
					key: 1,
					size: 20,
					class: "rw-star"
				}))]),
				_: 2
			}, 1032, [
				"aria-label",
				"title",
				"onClick"
			]), W(B(I), {
				variant: "tertiary",
				"aria-label": B(j)("rechnungswerk", "Löschen"),
				title: B(j)("rechnungswerk", "Löschen"),
				onClick: P((t) => m(e), ["stop"])
			}, {
				icon: g(() => [W(fd, { size: 20 })]),
				_: 1
			}, 8, [
				"aria-label",
				"title",
				"onClick"
			])])])], 8, d_))), 128))])])])]))), 128))])) : L("", !0),
			W(r_, {
				open: a.value,
				snippet: o.value,
				saving: B(t).loading,
				onClose: n[0] ||= (e) => a.value = !1,
				onSave: p
			}, null, 8, [
				"open",
				"snippet",
				"saving"
			]),
			W(ip, {
				open: s.value !== null,
				name: B(j)("rechnungswerk", "Textbaustein löschen"),
				message: s.value ? B(j)("rechnungswerk", "„{name}“ wirklich löschen?", { name: s.value.label }) : "",
				confirmLabel: B(j)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: n[1] ||= (e) => s.value = null,
				onConfirm: h
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-c438c8e2"]]), g_ = {
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
}, __ = ["aria-hidden", "aria-label"], v_ = [
	"fill",
	"width",
	"height"
], y_ = { d: "M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14" }, b_ = { key: 0 };
function x_(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon account-arrow-right-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", y_, [n.title ? (E(), q("title", b_, H(n.title), 1)) : L("", !0)])], 8, v_))], 16, __);
}
var S_ = /*#__PURE__*/ $(g_, [["render", x_]]), C_ = { class: "customer-modal" }, w_ = { class: "form-section" }, T_ = { class: "row" }, E_ = { class: "field" }, D_ = { class: "field" }, O_ = { class: "row" }, k_ = { class: "field" }, A_ = { class: "form-section" }, j_ = { class: "field" }, M_ = ["placeholder"], N_ = { class: "hint" }, P_ = { class: "field" }, F_ = { class: "row" }, I_ = { class: "field" }, L_ = { class: "field" }, R_ = { class: "row" }, z_ = { class: "field" }, B_ = { class: "form-section" }, V_ = { class: "row" }, H_ = { class: "field" }, U_ = { class: "field" }, W_ = { class: "field" }, G_ = { class: "form-section" }, K_ = { class: "field" }, q_ = { class: "row" }, J_ = { class: "field" }, Y_ = { class: "field" }, X_ = { class: "field" }, Z_ = { class: "form-section" }, Q_ = { class: "row" }, $_ = { class: "field" }, ev = { class: "field" }, tv = { value: "" }, nv = ["value"], rv = { class: "field" }, iv = { class: "actions" }, av = /*#__PURE__*/ $(/* @__PURE__ */ z({
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
		}), o = Ze(a()), s = X(""), c = X(""), l = G(() => n.customer ? j("rechnungswerk", "Kunde bearbeiten") : j("rechnungswerk", "Kunde anlegen")), u = G(() => {
			let e = o.customerNumber.trim().toLowerCase();
			return e !== "" && (n.takenNumbers ?? []).includes(e);
		}), d = G(() => o.customerNumber.trim() !== "" && o.name.trim() !== "" && !u.value);
		M(() => n.open, (e) => {
			if (!e) return;
			let t = n.customer;
			Object.assign(o, a()), t ? (o.customerNumber = t.customerNumber ?? "", o.name = t.name ?? "", o.vatId = t.vatId ?? "", o.addressAddition = t.addressAddition ?? "", o.address = t.address ?? "", o.postalCode = t.postalCode ?? "", o.city = t.city ?? "", o.country = t.country ?? "DE", o.contactPerson = t.contactPerson ?? "", o.phone = t.phone ?? "", o.email = t.email ?? "", o.bankAccountHolder = t.bankAccountHolder ?? "", o.iban = t.iban ?? "", o.bic = t.bic ?? "", o.bankName = t.bankName ?? "", o.note = t.note ?? "", s.value = t.defaultPaymentTermDays == null ? "" : String(t.defaultPaymentTermDays), c.value = t.defaultTaxRateBp == null ? "" : String(t.defaultTaxRateBp)) : n.prefill && Object.assign(o, {
				...a(),
				...f(n.prefill)
			}), rt(() => i.value?.focus());
		}, { immediate: !0 });
		function f(e) {
			let t = {};
			for (let [n, r] of Object.entries(e)) typeof r == "string" && (t[n] = r);
			return t;
		}
		function p(e) {
			let t = e.trim();
			return t === "" ? null : t;
		}
		function m() {
			d.value && r("save", {
				customerNumber: o.customerNumber.trim(),
				name: o.name.trim(),
				vatId: p(o.vatId),
				addressAddition: p(o.addressAddition),
				address: p(o.address),
				postalCode: p(o.postalCode),
				city: p(o.city),
				country: o.country.trim() === "" ? "DE" : o.country.trim().toUpperCase(),
				contactPerson: p(o.contactPerson),
				phone: p(o.phone),
				email: p(o.email),
				bankAccountHolder: p(o.bankAccountHolder),
				iban: p(o.iban),
				bic: p(o.bic),
				bankName: p(o.bankName),
				defaultPaymentTermDays: String(s.value).trim() === "" ? null : Math.max(0, Number(s.value)),
				defaultTaxRateBp: c.value === "" ? null : Number(c.value),
				note: p(o.note)
			});
		}
		return (t, n) => e.open ? (E(), U(B(ft), {
			key: 0,
			name: l.value,
			onKeydown: n[19] ||= me((e) => B(Ds)(e, () => t.$emit("close")), ["esc"]),
			onClose: n[20] ||= (e) => t.$emit("close")
		}, {
			default: g(() => [Y("div", C_, [
				Y("h2", null, H(l.value), 1),
				Y("div", w_, [
					Y("h3", null, H(B(j)("rechnungswerk", "Stammdaten")), 1),
					Y("div", T_, [Y("label", E_, [Y("span", null, H(B(j)("rechnungswerk", "Kundennr.")) + " *", 1), S(Y("input", {
						ref_key: "numberInput",
						ref: i,
						"onUpdate:modelValue": n[0] ||= (e) => o.customerNumber = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.customerNumber]])]), Y("label", D_, [Y("span", null, H(B(j)("rechnungswerk", "Name / Firma")) + " *", 1), S(Y("input", {
						"onUpdate:modelValue": n[1] ||= (e) => o.name = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.name]])])]),
					u.value ? (E(), U(B(Q), {
						key: 0,
						type: "error",
						text: B(j)("rechnungswerk", "Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.", { number: o.customerNumber.trim() })
					}, null, 8, ["text"])) : L("", !0),
					Y("div", O_, [Y("label", k_, [Y("span", null, H(B(j)("rechnungswerk", "USt-IdNr.")), 1), S(Y("input", {
						"onUpdate:modelValue": n[2] ||= (e) => o.vatId = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.vatId]])])])
				]),
				Y("div", A_, [
					Y("h3", null, H(B(j)("rechnungswerk", "Anschrift")), 1),
					Y("label", j_, [
						Y("span", null, H(B(j)("rechnungswerk", "Adresszusatz")), 1),
						S(Y("input", {
							"onUpdate:modelValue": n[3] ||= (e) => o.addressAddition = e,
							class: "input",
							type: "text",
							placeholder: B(j)("rechnungswerk", "z. Hd. Frau Meyer, Gebäude B, c/o\xA0…")
						}, null, 8, M_), [[J, o.addressAddition]]),
						Y("span", N_, H(B(j)("rechnungswerk", "Erscheint im Beleg direkt unter dem Firmennamen. Hier kann auch „z. Hd. Frau Meyer“ stehen — der Ansprechpartner erscheint nur in der E-Rechnung, nicht in der Anschrift.")), 1)
					]),
					Y("label", P_, [Y("span", null, H(B(j)("rechnungswerk", "Straße & Hausnummer")), 1), S(Y("input", {
						"onUpdate:modelValue": n[4] ||= (e) => o.address = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.address]])]),
					Y("div", F_, [Y("label", I_, [Y("span", null, H(B(j)("rechnungswerk", "PLZ")), 1), S(Y("input", {
						"onUpdate:modelValue": n[5] ||= (e) => o.postalCode = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.postalCode]])]), Y("label", L_, [Y("span", null, H(B(j)("rechnungswerk", "Ort")), 1), S(Y("input", {
						"onUpdate:modelValue": n[6] ||= (e) => o.city = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.city]])])]),
					Y("div", R_, [Y("label", z_, [Y("span", null, H(B(j)("rechnungswerk", "Land")), 1), W(ef, {
						modelValue: o.country,
						"onUpdate:modelValue": n[7] ||= (e) => o.country = e,
						selectClass: "input"
					}, null, 8, ["modelValue"])])])
				]),
				Y("div", B_, [
					Y("h3", null, H(B(j)("rechnungswerk", "Ansprechpartner & Kontakt")), 1),
					Y("div", V_, [Y("label", H_, [Y("span", null, H(B(j)("rechnungswerk", "Ansprechpartner")), 1), S(Y("input", {
						"onUpdate:modelValue": n[8] ||= (e) => o.contactPerson = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.contactPerson]])]), Y("label", U_, [Y("span", null, H(B(j)("rechnungswerk", "Telefon")), 1), S(Y("input", {
						"onUpdate:modelValue": n[9] ||= (e) => o.phone = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.phone]])])]),
					Y("label", W_, [Y("span", null, H(B(j)("rechnungswerk", "E-Mail (für Rechnungsversand)")), 1), S(Y("input", {
						"onUpdate:modelValue": n[10] ||= (e) => o.email = e,
						class: "input",
						type: "email"
					}, null, 512), [[J, o.email]])])
				]),
				Y("div", G_, [
					Y("h3", null, H(B(j)("rechnungswerk", "Bankverbindung")), 1),
					Y("label", K_, [Y("span", null, H(B(j)("rechnungswerk", "Kontoinhaber")), 1), S(Y("input", {
						"onUpdate:modelValue": n[11] ||= (e) => o.bankAccountHolder = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bankAccountHolder]])]),
					Y("div", q_, [Y("label", J_, [Y("span", null, H(B(j)("rechnungswerk", "IBAN")), 1), S(Y("input", {
						"onUpdate:modelValue": n[12] ||= (e) => o.iban = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.iban]])]), Y("label", Y_, [Y("span", null, H(B(j)("rechnungswerk", "BIC")), 1), S(Y("input", {
						"onUpdate:modelValue": n[13] ||= (e) => o.bic = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bic]])])]),
					Y("label", X_, [Y("span", null, H(B(j)("rechnungswerk", "Bank")), 1), S(Y("input", {
						"onUpdate:modelValue": n[14] ||= (e) => o.bankName = e,
						class: "input",
						type: "text"
					}, null, 512), [[J, o.bankName]])])
				]),
				Y("div", Z_, [
					Y("h3", null, H(B(j)("rechnungswerk", "Vorgaben für neue Rechnungen")), 1),
					Y("div", Q_, [Y("label", $_, [Y("span", null, H(B(j)("rechnungswerk", "Zahlungsziel (Tage)")), 1), S(Y("input", {
						"onUpdate:modelValue": n[15] ||= (e) => s.value = e,
						class: "input",
						type: "number",
						min: "0",
						inputmode: "numeric"
					}, null, 512), [[J, s.value]])]), Y("label", ev, [Y("span", null, H(B(j)("rechnungswerk", "Standard-Steuersatz")), 1), S(Y("select", {
						"onUpdate:modelValue": n[16] ||= (e) => c.value = e,
						class: "input"
					}, [Y("option", tv, H(B(j)("rechnungswerk", "— keine Vorgabe —")), 1), (E(!0), q(k, null, C(B(au), (e) => (E(), q("option", {
						key: e,
						value: String(e)
					}, H(B(Su)(e)), 9, nv))), 128))], 512), [[re, c.value]])])]),
					Y("label", rv, [Y("span", null, H(B(j)("rechnungswerk", "Notiz (intern, nicht auf der Rechnung)")), 1), S(Y("textarea", {
						"onUpdate:modelValue": n[17] ||= (e) => o.note = e,
						class: "input",
						rows: "2"
					}, null, 512), [[J, o.note]])])
				]),
				Y("div", iv, [W(B(I), { onClick: n[18] ||= (e) => t.$emit("close") }, {
					default: g(() => [R(H(B(j)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), W(B(I), {
					variant: "primary",
					disabled: e.saving || !d.value,
					onClick: m
				}, {
					default: g(() => [R(H(B(j)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : L("", !0);
	}
}), [["__scopeId", "data-v-7914d0dc"]]), ov = { class: "rw-view" }, sv = { class: "rw-view__head" }, cv = { class: "rw-view__actions" }, lv = {
	key: 2,
	class: "rw-table-wrap"
}, uv = { class: "rw-table" }, dv = ["onClick"], fv = { class: "rw-muted" }, pv = {
	key: 0,
	class: "rw-muted"
}, mv = { class: "rw-col-actions" }, hv = { class: "rw-actions" }, gv = { class: "rw-import" }, _v = { class: "rw-muted" }, vv = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "CustomersView",
	setup(e) {
		let t = of(), n = X(!1), r = X(null), i = X(null), a = X(null), o = X(!1), s = X(""), c = X(""), l = X(!1), u = G(() => t.customers.filter((e) => e.id !== r.value?.id).map((e) => e.customerNumber.trim().toLowerCase()));
		function d(e, t) {
			c.value = e.message ?? t, console.error("[rechnungswerk] customers:", e);
		}
		ce(() => {
			t.fetchAll().catch((e) => d(e, j("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function f() {
			r.value = null, i.value = null, n.value = !0;
		}
		function p(e) {
			r.value = e, i.value = null, n.value = !0;
		}
		function m() {
			s.value = "", o.value = !0;
		}
		function h(e) {
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
		async function ee(e) {
			c.value = "", l.value = !0;
			try {
				r.value ? await t.update(r.value.id, e) : await t.create(e), n.value = !1, i.value = null;
			} catch (e) {
				d(e, j("rechnungswerk", "Speichern fehlgeschlagen"));
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
					d(e, j("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, d) => (E(), q("div", ov, [
			Y("div", sv, [Y("h2", null, H(B(j)("rechnungswerk", "Kunden")), 1), Y("div", cv, [W(B(I), { onClick: m }, {
				icon: g(() => [W(S_, { size: 20 })]),
				default: g(() => [R(" " + H(B(j)("rechnungswerk", "Aus Kontakten importieren")), 1)]),
				_: 1
			}), W(B(I), {
				variant: "primary",
				onClick: f
			}, {
				icon: g(() => [W(lc, { size: 20 })]),
				default: g(() => [R(" " + H(B(j)("rechnungswerk", "Neuer Kunde")), 1)]),
				_: 1
			})])]),
			c.value ? (E(), U(B(Q), {
				key: 0,
				type: "error",
				text: c.value
			}, null, 8, ["text"])) : L("", !0),
			!B(t).loading && B(t).customers.length === 0 ? (E(), U(B(wt), {
				key: 1,
				name: B(j)("rechnungswerk", "Noch keine Kunden"),
				description: B(j)("rechnungswerk", "Lege Kunden an oder übernimm sie aus deinen Nextcloud-Kontakten, um sie schnell in Rechnungen auszuwählen.")
			}, {
				icon: g(() => [W(Ba, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : B(t).customers.length > 0 ? (E(), q("div", lv, [Y("table", uv, [Y("thead", null, [Y("tr", null, [
				Y("th", null, H(B(j)("rechnungswerk", "Kundennr.")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Kunde")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Ort")), 1),
				d[5] ||= Y("th", { class: "num" }, null, -1)
			])]), Y("tbody", null, [(E(!0), q(k, null, C(B(t).customers, (e) => (E(), q("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => p(e)
			}, [
				Y("td", fv, H(e.customerNumber), 1),
				Y("td", null, [R(H(e.name) + " ", 1), e.contactPerson || e.vatId ? (E(), q("div", pv, H([e.contactPerson, e.vatId].filter(Boolean).join(" · ")), 1)) : L("", !0)]),
				Y("td", null, H([e.postalCode, e.city].filter(Boolean).join(" ")), 1),
				Y("td", mv, [Y("div", hv, [W(B(I), {
					variant: "tertiary",
					"aria-label": B(j)("rechnungswerk", "Löschen"),
					title: B(j)("rechnungswerk", "Löschen"),
					onClick: P((t) => te(e), ["stop"])
				}, {
					icon: g(() => [W(fd, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, dv))), 128))])])])) : L("", !0),
			W(av, {
				open: n.value,
				customer: r.value,
				saving: l.value,
				takenNumbers: u.value,
				prefill: i.value,
				onClose: d[0] ||= (e) => n.value = !1,
				onSave: ee
			}, null, 8, [
				"open",
				"customer",
				"saving",
				"takenNumbers",
				"prefill"
			]),
			o.value ? (E(), U(B(ft), {
				key: 3,
				name: B(j)("rechnungswerk", "Aus Nextcloud-Kontakten übernehmen"),
				onKeydown: d[2] ||= me((e) => B(Ds)(e, () => o.value = !1), ["esc"]),
				onClose: d[3] ||= (e) => o.value = !1
			}, {
				default: g(() => [Y("div", gv, [Y("p", _v, H(B(j)("rechnungswerk", "Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.")), 1), W(Jd, {
					modelValue: s.value,
					"onUpdate:modelValue": d[1] ||= (e) => s.value = e,
					onSelect: h
				}, null, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["name"])) : L("", !0),
			W(ip, {
				open: a.value !== null,
				name: B(j)("rechnungswerk", "Kunde löschen"),
				message: a.value ? B(j)("rechnungswerk", "„{name}“ wirklich löschen?", { name: a.value.name }) : "",
				confirmLabel: B(j)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: d[4] ||= (e) => a.value = null,
				onConfirm: ne
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-1eff74a5"]]), yv = {
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
}, bv = ["aria-hidden", "aria-label"], xv = [
	"fill",
	"width",
	"height"
], Sv = { d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" }, Cv = { key: 0 };
function wv(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon content-save-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Sv, [n.title ? (E(), q("title", Cv, H(n.title), 1)) : L("", !0)])], 8, xv))], 16, bv);
}
var Tv = /*#__PURE__*/ $(yv, [["render", wv]]), Ev = { class: "rw-view rw-view--narrow" }, Dv = {
	key: 2,
	class: "rw-section"
}, Ov = { class: "rw-hint" }, kv = { class: "rw-form-row" }, Av = { class: "rw-field" }, jv = { class: "rw-field" }, Mv = { class: "rw-field" }, Nv = {
	key: 3,
	class: "rw-action-bar"
}, Pv = /* @__PURE__ */ z({
	__name: "MyContactView",
	setup(e) {
		let t = X(null), n = X(""), r = X(""), i = X(!1);
		ce(async () => {
			try {
				t.value = await Rp();
			} catch (e) {
				n.value = e.message ?? j("rechnungswerk", "Laden fehlgeschlagen");
			}
		});
		async function a() {
			n.value = "";
			try {
				let e = await Hd();
				t.value = {
					person: e.person,
					phone: e.phone,
					email: e.email
				};
			} catch (e) {
				n.value = e.message ?? j("rechnungswerk", "Nextcloud-Konto konnte nicht geladen werden.");
			}
		}
		async function o() {
			if (t.value) {
				n.value = "", r.value = "", i.value = !0;
				try {
					t.value = await zp(t.value), r.value = j("rechnungswerk", "Gespeichert.");
				} catch (e) {
					n.value = e.message ?? j("rechnungswerk", "Speichern fehlgeschlagen");
				} finally {
					i.value = !1;
				}
			}
		}
		return (e, s) => (E(), q("div", Ev, [
			Y("h2", null, H(B(j)("rechnungswerk", "Mein Kontakt")), 1),
			n.value ? (E(), U(B(Q), {
				key: 0,
				type: "error",
				text: n.value
			}, null, 8, ["text"])) : L("", !0),
			r.value ? (E(), U(B(Q), {
				key: 1,
				type: "success",
				text: r.value
			}, null, 8, ["text"])) : L("", !0),
			t.value ? (E(), q("section", Dv, [
				Y("h3", null, H(B(j)("rechnungswerk", "Mein Verkäufer-Ansprechpartner")), 1),
				Y("p", Ov, H(B(j)("rechnungswerk", "Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.")), 1),
				Y("div", kv, [
					Y("label", Av, [Y("span", null, H(B(j)("rechnungswerk", "Name")), 1), S(Y("input", {
						"onUpdate:modelValue": s[0] ||= (e) => t.value.person = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[J, t.value.person]])]),
					Y("label", jv, [Y("span", null, H(B(j)("rechnungswerk", "Telefon")), 1), S(Y("input", {
						"onUpdate:modelValue": s[1] ||= (e) => t.value.phone = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[J, t.value.phone]])]),
					Y("label", Mv, [Y("span", null, H(B(j)("rechnungswerk", "E-Mail")), 1), S(Y("input", {
						"onUpdate:modelValue": s[2] ||= (e) => t.value.email = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[J, t.value.email]])])
				]),
				W(B(I), {
					variant: "tertiary",
					onClick: a
				}, {
					icon: g(() => [W(qa, { size: 20 })]),
					default: g(() => [R(" " + H(B(j)("rechnungswerk", "Aus meinem Nextcloud-Konto übernehmen")), 1)]),
					_: 1
				})
			])) : L("", !0),
			t.value ? (E(), q("div", Nv, [W(B(I), {
				variant: "primary",
				disabled: i.value,
				onClick: o
			}, {
				icon: g(() => [W(Tv, { size: 20 })]),
				default: g(() => [R(" " + H(B(j)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])) : L("", !0)
		]));
	}
}), Fv = /* @__PURE__ */ n({ default: () => Ct });
//#endregion
//#region node_modules/@ckpack/vue-color/libs/style-inject.es-746bb8ed.js
function Iv(e, t) {
	t === void 0 && (t = {});
	var n = t.insertAt;
	if (e && typeof document < "u") {
		var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
		i.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
	}
}
//#endregion
//#region node_modules/@ckpack/vue-color/libs/utils/compoent.js
var Lv = function(e, t) {
	let { componentPrefix: n = "" } = t || {};
	e.component(`${n}${this.name}`, this);
}, Rv = {}, zv = {
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
		return { "background-image": `url(${Vv(this.white, this.grey, this.size)})` };
	} }
};
function Bv(e, t, n) {
	if (typeof document > "u") return null;
	let r = document.createElement("canvas");
	r.width = r.height = n * 2;
	let i = r.getContext("2d");
	return i ? (i.fillStyle = e, i.fillRect(0, 0, r.width, r.height), i.fillStyle = t, i.fillRect(0, 0, n, n), i.translate(n, n), i.fillRect(0, 0, n, n), r.toDataURL()) : null;
}
function Vv(e, t, n) {
	let r = `${e},${t},${n}`;
	if (Rv[r]) return Rv[r];
	let i = Bv(e, t, n);
	return Rv[r] = i, i;
}
function Hv(e, t, n, r, i, a) {
	return E(), q("div", {
		class: "vc-checkerboard",
		style: ze(a.bgStyle)
	}, null, 4);
}
Iv(".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}"), zv.render = Hv, zv.__file = "src/components/checkboard/checkboard.vue", zv.install = Lv;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/alpha/index.js
var Uv = {
	name: "Alpha",
	components: { Checkboard: zv },
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
}, Wv = { class: "vc-alpha" }, Gv = { class: "vc-alpha-checkboard-wrap" }, Kv = [/* @__PURE__ */ Y("div", { class: "vc-alpha-picker" }, null, -1)];
function qv(e, t, n, r, i, a) {
	let o = D("Checkboard");
	return E(), q("div", Wv, [
		Y("div", Gv, [W(o)]),
		Y("div", {
			class: "vc-alpha-gradient",
			style: ze({ background: a.gradientColor })
		}, null, 4),
		Y("div", {
			ref: "container",
			class: "vc-alpha-container",
			onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
			onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
			onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
		}, [Y("div", {
			class: "vc-alpha-pointer",
			style: ze({ left: `${a.colors.a * 100}%` })
		}, Kv, 4)], 544)
	]);
}
Iv(".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), Uv.render = qv, Uv.__file = "src/components/alpha/alpha.vue", Uv.install = Lv;
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/util.js
function Jv(e, t) {
	Xv(e) && (e = "100%");
	var n = Zv(e);
	return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (e = t === 360 ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t)), e);
}
function Yv(e) {
	return Math.min(1, Math.max(0, e));
}
function Xv(e) {
	return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Zv(e) {
	return typeof e == "string" && e.indexOf("%") !== -1;
}
function Qv(e) {
	return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function $v(e) {
	return e <= 1 ? `${Number(e) * 100}%` : e;
}
function ey(e) {
	return e.length === 1 ? "0" + e : String(e);
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/conversion.js
function ty(e, t, n) {
	return {
		r: Jv(e, 255) * 255,
		g: Jv(t, 255) * 255,
		b: Jv(n, 255) * 255
	};
}
function ny(e, t, n) {
	e = Jv(e, 255), t = Jv(t, 255), n = Jv(n, 255);
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
function ry(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function iy(e, t, n) {
	var r, i, a;
	if (e = Jv(e, 360), t = Jv(t, 100), n = Jv(n, 100), t === 0) i = n, a = n, r = n;
	else {
		var o = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
		r = ry(s, o, e + 1 / 3), i = ry(s, o, e), a = ry(s, o, e - 1 / 3);
	}
	return {
		r: r * 255,
		g: i * 255,
		b: a * 255
	};
}
function ay(e, t, n) {
	e = Jv(e, 255), t = Jv(t, 255), n = Jv(n, 255);
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
function oy(e, t, n) {
	e = Jv(e, 360) * 6, t = Jv(t, 100), n = Jv(n, 100);
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
function sy(e, t, n, r) {
	var i = [
		ey(Math.round(e).toString(16)),
		ey(Math.round(t).toString(16)),
		ey(Math.round(n).toString(16))
	];
	return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function cy(e, t, n, r, i) {
	var a = [
		ey(Math.round(e).toString(16)),
		ey(Math.round(t).toString(16)),
		ey(Math.round(n).toString(16)),
		ey(ly(r))
	];
	return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function ly(e) {
	return Math.round(parseFloat(e) * 255).toString(16);
}
function uy(e) {
	return dy(e) / 255;
}
function dy(e) {
	return parseInt(e, 16);
}
function fy(e) {
	return {
		r: e >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var py = {
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
function my(e) {
	var t = {
		r: 0,
		g: 0,
		b: 0
	}, n = 1, r = null, i = null, a = null, o = !1, s = !1;
	return typeof e == "string" && (e = yy(e)), typeof e == "object" && (by(e.r) && by(e.g) && by(e.b) ? (t = ty(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : by(e.h) && by(e.s) && by(e.v) ? (r = $v(e.s), i = $v(e.v), t = oy(e.h, r, i), o = !0, s = "hsv") : by(e.h) && by(e.s) && by(e.l) && (r = $v(e.s), a = $v(e.l), t = iy(e.h, r, a), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Qv(n), {
		ok: o,
		format: e.format || s,
		r: Math.min(255, Math.max(t.r, 0)),
		g: Math.min(255, Math.max(t.g, 0)),
		b: Math.min(255, Math.max(t.b, 0)),
		a: n
	};
}
var hy = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", gy = `[\\s|\\(]+(${hy})[,|\\s]+(${hy})[,|\\s]+(${hy})\\s*\\)?`, _y = `[\\s|\\(]+(${hy})[,|\\s]+(${hy})[,|\\s]+(${hy})[,|\\s]+(${hy})\\s*\\)?`, vy = {
	CSS_UNIT: new RegExp(hy),
	rgb: RegExp("rgb" + gy),
	rgba: RegExp("rgba" + _y),
	hsl: RegExp("hsl" + gy),
	hsla: RegExp("hsla" + _y),
	hsv: RegExp("hsv" + gy),
	hsva: RegExp("hsva" + _y),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function yy(e) {
	if (e = e.trim().toLowerCase(), e.length === 0) return !1;
	var t = !1;
	if (py[e]) e = py[e], t = !0;
	else if (e === "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var n = vy.rgb.exec(e);
	return n ? {
		r: n[1],
		g: n[2],
		b: n[3]
	} : (n = vy.rgba.exec(e), n ? {
		r: n[1],
		g: n[2],
		b: n[3],
		a: n[4]
	} : (n = vy.hsl.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3]
	} : (n = vy.hsla.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3],
		a: n[4]
	} : (n = vy.hsv.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3]
	} : (n = vy.hsva.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3],
		a: n[4]
	} : (n = vy.hex8.exec(e), n ? {
		r: dy(n[1]),
		g: dy(n[2]),
		b: dy(n[3]),
		a: uy(n[4]),
		format: t ? "name" : "hex8"
	} : (n = vy.hex6.exec(e), n ? {
		r: dy(n[1]),
		g: dy(n[2]),
		b: dy(n[3]),
		format: t ? "name" : "hex"
	} : (n = vy.hex4.exec(e), n ? {
		r: dy(n[1] + n[1]),
		g: dy(n[2] + n[2]),
		b: dy(n[3] + n[3]),
		a: uy(n[4] + n[4]),
		format: t ? "name" : "hex8"
	} : (n = vy.hex3.exec(e), n ? {
		r: dy(n[1] + n[1]),
		g: dy(n[2] + n[2]),
		b: dy(n[3] + n[3]),
		format: t ? "name" : "hex"
	} : !1)))))))));
}
function by(e) {
	return !!vy.CSS_UNIT.exec(String(e));
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/index.js
var xy = function() {
	function e(t, n) {
		if (t === void 0 && (t = ""), n === void 0 && (n = {}), t instanceof e) return t;
		typeof t == "number" && (t = fy(t)), this.originalInput = t;
		var r = my(t);
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
		return this.a = Qv(e), this.roundA = Math.round(100 * this.a) / 100, this;
	}, e.prototype.isMonochrome = function() {
		return this.toHsl().s === 0;
	}, e.prototype.toHsv = function() {
		var e = ay(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			v: e.v,
			a: this.a
		};
	}, e.prototype.toHsvString = function() {
		var e = ay(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
		return this.a === 1 ? `hsv(${t}, ${n}%, ${r}%)` : `hsva(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHsl = function() {
		var e = ny(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			l: e.l,
			a: this.a
		};
	}, e.prototype.toHslString = function() {
		var e = ny(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
		return this.a === 1 ? `hsl(${t}, ${n}%, ${r}%)` : `hsla(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHex = function(e) {
		return e === void 0 && (e = !1), sy(this.r, this.g, this.b, e);
	}, e.prototype.toHexString = function(e) {
		return e === void 0 && (e = !1), "#" + this.toHex(e);
	}, e.prototype.toHex8 = function(e) {
		return e === void 0 && (e = !1), cy(this.r, this.g, this.b, this.a, e);
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
			return `${Math.round(Jv(e, 255) * 100)}%`;
		};
		return {
			r: e(this.r),
			g: e(this.g),
			b: e(this.b),
			a: this.a
		};
	}, e.prototype.toPercentageRgbString = function() {
		var e = function(e) {
			return Math.round(Jv(e, 255) * 100);
		};
		return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
	}, e.prototype.toName = function() {
		if (this.a === 0) return "transparent";
		if (this.a < 1) return !1;
		for (var e = "#" + sy(this.r, this.g, this.b, !1), t = 0, n = Object.entries(py); t < n.length; t++) {
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
		return n.l += t / 100, n.l = Yv(n.l), new e(n);
	}, e.prototype.brighten = function(t) {
		t === void 0 && (t = 10);
		var n = this.toRgb();
		return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
	}, e.prototype.darken = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.l -= t / 100, n.l = Yv(n.l), new e(n);
	}, e.prototype.tint = function(e) {
		return e === void 0 && (e = 10), this.mix("white", e);
	}, e.prototype.shade = function(e) {
		return e === void 0 && (e = 10), this.mix("black", e);
	}, e.prototype.desaturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s -= t / 100, n.s = Yv(n.s), new e(n);
	}, e.prototype.saturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s += t / 100, n.s = Yv(n.s), new e(n);
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
function Sy(...e) {
	return new xy(...e);
}
function Cy(e, t) {
	let n = e && e.a, r;
	r = e && e.hsl ? Sy(e.hsl) : e && e.hex && e.hex.length > 0 ? Sy(e.hex) : e && e.hsv ? Sy(e.hsv) : e && e.rgba ? Sy(e.rgba) : e && e.rgb ? Sy(e.rgb) : Sy(e), r && (r._a === void 0 || r._a === null) && r.setAlpha(n || r.getAlpha());
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
var wy = {
	model: {
		prop: "modelValue",
		event: "update:modelValue"
	},
	props: ["modelValue"],
	data() {
		return { val: Cy(this.modelValue) };
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
		this.val = Cy(e);
	} },
	methods: {
		colorChange(e, t) {
			this.oldHue = this.colors.hsl.h, this.colors = Cy(e, t || this.oldHue);
		},
		isValidHex(e) {
			return Sy(e).isValid;
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
			return Sy(e).getAlpha() === 0;
		}
	}
}, Ty = {
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
}, Ey = { class: "vc-editable-input" }, Dy = ["aria-labelledby"], Oy = ["id", "for"], ky = { class: "vc-input__desc" };
function Ay(e, t, n, r, i, a) {
	return E(), q("div", Ey, [
		S(Y("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.val = e,
			"aria-labelledby": a.labelId,
			class: "vc-input__input",
			onKeydown: t[1] ||= (...e) => a.handleKeyDown && a.handleKeyDown(...e),
			onInput: t[2] ||= (...e) => a.update && a.update(...e)
		}, null, 40, Dy), [[J, a.val]]),
		Y("span", {
			id: a.labelId,
			for: n.label,
			class: "vc-input__label"
		}, H(a.labelSpanText), 9, Oy),
		Y("span", ky, H(n.desc), 1)
	]);
}
Iv(".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}"), Ty.render = Ay, Ty.__file = "src/components/editable-input/editable-input.vue", Ty.install = Lv;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/utils/utils.js
function jy(e, t, n) {
	return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e;
}
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/saturation/index.js
var My = {
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
			let r = n.clientWidth, i = n.clientHeight, a = n.getBoundingClientRect().left + window.pageXOffset, o = n.getBoundingClientRect().top + window.pageYOffset, s = e.pageX || (e.touches ? e.touches[0].pageX : 0), c = e.pageY || (e.touches ? e.touches[0].pageY : 0), l = jy(s - a, 0, r), u = jy(c - o, 0, i), d = l / r, f = jy(-(u / i) + 1, 0, 1);
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
}, Ny = /*#__PURE__*/ Y("div", { class: "vc-saturation--white" }, null, -1), Py = /*#__PURE__*/ Y("div", { class: "vc-saturation--black" }, null, -1), Fy = [/* @__PURE__ */ Y("div", { class: "vc-saturation-circle" }, null, -1)];
function Iy(e, t, n, r, i, a) {
	return E(), q("div", {
		ref: "container",
		class: "vc-saturation",
		style: ze({ background: a.bgColor }),
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [
		Ny,
		Py,
		Y("div", {
			class: "vc-saturation-pointer",
			style: ze({
				top: a.pointerTop,
				left: a.pointerLeft
			})
		}, Fy, 4)
	], 36);
}
Iv(".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}"), My.render = Iy, My.__file = "src/components/saturation/saturation.vue", My.install = Lv;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/hue/index.js
var Ly = {
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
}, Ry = ["aria-valuenow"], zy = [/* @__PURE__ */ Y("div", { class: "vc-hue-picker" }, null, -1)];
function By(e, t, n, r, i, a) {
	return E(), q("div", { class: V(["vc-hue", [a.directionClass]]) }, [Y("div", {
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
		style: ze({
			top: a.pointerTop,
			left: a.pointerLeft
		}),
		role: "presentation"
	}, zy, 4)], 40, Ry)], 2);
}
Iv(".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), Ly.render = By, Ly.__file = "src/components/hue/hue.vue", Ly.install = Lv;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/chrome/index.js
var Vy = {
	name: "Chrome",
	components: {
		Saturation: My,
		Hue: Ly,
		Alpha: Uv,
		EdIn: Ty,
		Checkboard: zv
	},
	mixins: [wy],
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
}, Hy = { class: "vc-chrome-saturation-wrap" }, Uy = { class: "vc-chrome-body" }, Wy = { class: "vc-chrome-controls" }, Gy = { class: "vc-chrome-color-wrap" }, Ky = ["aria-label"], qy = { class: "vc-chrome-sliders" }, Jy = { class: "vc-chrome-hue-wrap" }, Yy = {
	key: 0,
	class: "vc-chrome-alpha-wrap"
}, Xy = {
	key: 0,
	class: "vc-chrome-fields-wrap"
}, Zy = { class: "vc-chrome-fields" }, Qy = { class: "vc-chrome-field" }, $y = { class: "vc-chrome-fields" }, eb = { class: "vc-chrome-field" }, tb = { class: "vc-chrome-field" }, nb = { class: "vc-chrome-field" }, rb = {
	key: 0,
	class: "vc-chrome-field"
}, ib = { class: "vc-chrome-fields" }, ab = { class: "vc-chrome-field" }, ob = { class: "vc-chrome-field" }, sb = { class: "vc-chrome-field" }, cb = {
	key: 0,
	class: "vc-chrome-field"
}, lb = { class: "vc-chrome-toggle-icon" }, ub = [/* @__PURE__ */ Y("path", {
	fill: "#333",
	d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1)], db = { class: "vc-chrome-toggle-icon-highlight" };
function fb(e, t, n, r, i, a) {
	let o = D("Saturation"), s = D("Checkboard"), c = D("Hue"), l = D("Alpha"), u = D("EdIn");
	return E(), q("div", {
		role: "application",
		"aria-label": "Chrome color picker",
		class: V(["vc-chrome", [n.disableAlpha ? "vc-chrome__disable-alpha" : ""]])
	}, [Y("div", Hy, [W(o, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]), Y("div", Uy, [Y("div", Wy, [Y("div", Gy, [Y("div", {
		"aria-label": `current color is ${e.colors.hex}`,
		class: "vc-chrome-active-color",
		style: ze({ background: a.activeColor })
	}, null, 12, Ky), n.disableAlpha ? L("v-if", !0) : (E(), U(s, { key: 0 }))]), Y("div", qy, [Y("div", Jy, [W(c, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]), n.disableAlpha ? L("v-if", !0) : (E(), q("div", Yy, [W(l, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]))])]), n.disableFields ? L("v-if", !0) : (E(), q("div", Xy, [
		S(Y("div", Zy, [L(" hex "), Y("div", Qy, [a.hasAlpha ? L("v-if", !0) : (E(), U(u, {
			key: 0,
			label: "hex",
			value: e.colors.hex,
			onChange: a.inputChange
		}, null, 8, ["value", "onChange"])), a.hasAlpha ? (E(), U(u, {
			key: 1,
			label: "hex",
			value: e.colors.hex8,
			onChange: a.inputChange
		}, null, 8, ["value", "onChange"])) : L("v-if", !0)])], 512), [[x, i.fieldsIndex === "hex"]]),
		S(Y("div", $y, [
			L(" rgba "),
			Y("div", eb, [W(u, {
				label: "r",
				value: e.colors.rgba.r,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", tb, [W(u, {
				label: "g",
				value: e.colors.rgba.g,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", nb, [W(u, {
				label: "b",
				value: e.colors.rgba.b,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			n.disableAlpha ? L("v-if", !0) : (E(), q("div", rb, [W(u, {
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
		S(Y("div", ib, [
			L(" hsla "),
			Y("div", ab, [W(u, {
				label: "h",
				value: a.hsl.h,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", ob, [W(u, {
				label: "s",
				value: a.hsl.s,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			Y("div", sb, [W(u, {
				label: "l",
				value: a.hsl.l,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			n.disableAlpha ? L("v-if", !0) : (E(), q("div", cb, [W(u, {
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
		L(" btn "),
		Y("div", {
			class: "vc-chrome-toggle-btn",
			role: "button",
			"aria-label": "Change another color definition",
			onClick: t[3] ||= (...e) => a.toggleViews && a.toggleViews(...e)
		}, [Y("div", lb, [(E(), q("svg", {
			style: {
				width: "24px",
				height: "24px"
			},
			viewBox: "0 0 24 24",
			onMouseover: t[0] ||= (...e) => a.showHighlight && a.showHighlight(...e),
			onMouseenter: t[1] ||= (...e) => a.showHighlight && a.showHighlight(...e),
			onMouseout: t[2] ||= (...e) => a.hideHighlight && a.hideHighlight(...e)
		}, ub, 32))]), S(Y("div", db, null, 512), [[x, i.highlight]])]),
		L(" btn ")
	]))])], 2);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/colors.mjs
Iv(".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}"), Vy.render = fb, Vy.__file = "src/components/chrome/chrome.vue", Vy.install = Lv, m(it);
var pb = class {
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
}, mb = new pb(182, 70, 157, p("Purple")), hb = new pb(221, 203, 85, p("Gold")), gb = new pb(0, 130, 201, p("Nextcloud blue")), _b = new pb(0, 0, 0, p("Black")), vb = new pb(255, 255, 255, p("White")), yb = [
	mb,
	new pb(191, 103, 139, p("Rosy brown")),
	new pb(201, 136, 121, p("Feldspar")),
	new pb(211, 169, 103, p("Whiskey")),
	hb,
	new pb(165, 184, 114, p("Olivine")),
	new pb(110, 166, 143, p("Acapulco")),
	new pb(55, 148, 172, p("Boston Blue")),
	gb,
	new pb(45, 115, 190, p("Mariner")),
	new pb(91, 100, 179, p("Blue Violet")),
	new pb(136, 85, 168, p("Deluge"))
];
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcColorPicker.mjs
m(T);
var bb = ["aria-label"], xb = {
	key: 0,
	class: "color-picker__simple"
}, Sb = [
	"aria-label",
	"name",
	"checked",
	"onClick"
], Cb = ["title"], wb = [
	"aria-label",
	"name",
	"checked"
], Tb = {
	key: 0,
	class: "color-picker__navigation"
}, Eb = /* @__PURE__ */ O(/* @__PURE__ */ z({
	__name: "NcColorPicker",
	props: /* @__PURE__ */ _e({
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
	emits: /* @__PURE__ */ _e(["submit", "closed"], ["update:modelValue", "update:open"]),
	setup(e, { emit: t }) {
		let n = at(e, "modelValue"), r = at(e, "open"), i = e, o = t, s = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i, c = Xe(), l = X(!1), u = G(() => {
			let e = i.palette;
			for (let t of e) if (typeof t == "string" && !t.match(s) || typeof t == "object" && !t.color?.match(s)) {
				a.error("[NcColorPicker] Invalid palette passed", { color: t }), e = [];
				break;
			}
			return e.length === 0 && (e = i.clearable ? [
				...yb,
				_b,
				vb
			] : [...yb]), e.map((e) => ({
				color: typeof e == "object" ? e.color : e,
				name: typeof e == "object" && e.name ? e.name : p("A color with a HEX value {hex}", { hex: typeof e == "string" ? e : e.color })
			}));
		});
		function d(e) {
			o("submit", n.value), e(), l.value = !1;
		}
		function m(e) {
			e = typeof e == "string" ? e : e.color, i.clearable && n.value === e ? n.value = void 0 : n.value = e;
		}
		function h(e) {
			n.value = e.hex;
		}
		function ee(e) {
			return te(e) > .5 ? _b.color : vb.color;
		}
		function te(e) {
			let [t, n, r] = ne(e);
			return (.2126 * t + .7152 * n + .0722 * r) / 255;
		}
		function ne(e) {
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
		return (t, i) => (E(), U(B(ut), {
			shown: r.value,
			"onUpdate:shown": i[3] ||= (e) => r.value = e,
			container: e.container,
			popupRole: "dialog",
			onApplyHide: i[4] ||= (e) => o("closed")
		}, {
			trigger: g((e) => [w(t.$slots, "default", Ge(We(e)), void 0, !0)]),
			default: g((t) => [Y("div", {
				role: "dialog",
				class: V(["color-picker", {
					"color-picker--advanced-fields": l.value && e.advancedFields,
					"color-picker--clearable": e.clearable
				}]),
				"aria-modal": "true",
				"aria-label": B(p)("Color picker")
			}, [W(f, {
				name: "slide",
				mode: "out-in"
			}, {
				default: g(() => [l.value ? (E(), U(B(Vy), {
					key: 1,
					class: "color-picker__advanced",
					disableAlpha: "",
					disableFields: !e.advancedFields,
					modelValue: n.value ?? "#000000",
					"onUpdate:modelValue": h
				}, null, 8, ["disableFields", "modelValue"])) : (E(), q("div", xb, [(E(!0), q(k, null, C(u.value, ({ color: e, name: t }, r) => (E(), q("label", {
					key: r,
					class: V(["color-picker__simple-color-circle", { "color-picker__simple-color-circle--active": e === n.value }]),
					style: ze({
						backgroundColor: e,
						color: ee(e)
					})
				}, [e === n.value ? (E(), U(B(fe), {
					key: 0,
					path: B(Se)
				}, null, 8, ["path"])) : L("", !0), Y("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": t,
					name: `color-picker-${B(c)}`,
					checked: e === n.value,
					onClick: (t) => m(e)
				}, null, 8, Sb)], 6))), 128)), e.clearable ? (E(), q("label", {
					key: 0,
					class: "color-picker__clear",
					title: B(p)("No color")
				}, [W(B(fe), {
					size: n.value ? 28 : 34,
					path: B(ke)
				}, null, 8, ["size", "path"]), Y("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": B(p)("No color"),
					name: `color-picker-${B(c)}`,
					checked: !n.value,
					onClick: i[0] ||= (e) => n.value = void 0
				}, null, 8, wb)], 8, Cb)) : L("", !0)]))]),
				_: 1
			}), e.paletteOnly ? L("", !0) : (E(), q("div", Tb, [l.value ? (E(), U(B(I), {
				key: 0,
				"aria-label": B(p)("Back"),
				title: B(p)("Back"),
				variant: "tertiary",
				onClick: i[1] ||= (e) => l.value = !1
			}, {
				icon: g(() => [W(B(fe), {
					directional: "",
					path: B(ye)
				}, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])) : (E(), U(B(I), {
				key: 1,
				"aria-label": B(p)("More options"),
				title: B(p)("More options"),
				variant: "tertiary",
				onClick: i[2] ||= (e) => l.value = !0
			}, {
				icon: g(() => [W(B(fe), { path: B(et) }, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])), W(B(I), {
				variant: "primary",
				onClick: (e) => d(t.hide)
			}, {
				default: g(() => [R(H(B(p)("Choose")), 1)]),
				_: 1
			}, 8, ["onClick"])]))], 10, bb)]),
			_: 3
		}, 8, ["shown", "container"]));
	}
}), [["__scopeId", "data-v-fab7cffe"]]), Db = /* @__PURE__ */ n({ default: () => Eb }), Ob = ["aria-label"], kb = { class: "rw-subnav__group" }, Ab = ["aria-current", "onClick"], jb = /* @__PURE__ */ z({
	__name: "RwSettingsNav",
	props: {
		groups: {},
		modelValue: {},
		ariaLabel: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (E(), q("nav", {
			class: "rw-subnav",
			"aria-label": e.ariaLabel || B(j)("rechnungswerk", "Bereiche")
		}, [(E(!0), q(k, null, C(e.groups, (t) => (E(), q(k, { key: t.label }, [Y("div", kb, H(t.label), 1), (E(!0), q(k, null, C(t.items, (t) => (E(), q("button", {
			key: t.key,
			type: "button",
			class: V(["rw-subnav__item", { "rw-subnav__item--active": e.modelValue === t.key }]),
			"aria-current": e.modelValue === t.key ? "page" : void 0,
			onClick: (e) => n("update:modelValue", t.key)
		}, [(E(), U(y(t.icon), { size: 18 })), R(" " + H(t.label), 1)], 10, Ab))), 128))], 64))), 128))], 8, Ob));
	}
}), Mb = {
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
}, Nb = ["aria-hidden", "aria-label"], Pb = [
	"fill",
	"width",
	"height"
], Fb = { d: "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" }, Ib = { key: 0 };
function Lb(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon office-building-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Fb, [n.title ? (E(), q("title", Ib, H(n.title), 1)) : L("", !0)])], 8, Pb))], 16, Nb);
}
var Rb = /*#__PURE__*/ $(Mb, [["render", Lb]]), zb = {
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
}, Bb = ["aria-hidden", "aria-label"], Vb = [
	"fill",
	"width",
	"height"
], Hb = { d: "M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" }, Ub = { key: 0 };
function Wb(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon bank-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Hb, [n.title ? (E(), q("title", Ub, H(n.title), 1)) : L("", !0)])], 8, Vb))], 16, Bb);
}
var Gb = /*#__PURE__*/ $(zb, [["render", Wb]]), Kb = {
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
}, qb = ["aria-hidden", "aria-label"], Jb = [
	"fill",
	"width",
	"height"
], Yb = { d: "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z" }, Xb = { key: 0 };
function Zb(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon palette-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Yb, [n.title ? (E(), q("title", Xb, H(n.title), 1)) : L("", !0)])], 8, Jb))], 16, qb);
}
var Qb = /*#__PURE__*/ $(Kb, [["render", Zb]]), $b = {
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
}, ex = ["aria-hidden", "aria-label"], tx = [
	"fill",
	"width",
	"height"
], nx = { d: "M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z" }, rx = { key: 0 };
function ix(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-sign-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", nx, [n.title ? (E(), q("title", rx, H(n.title), 1)) : L("", !0)])], 8, tx))], 16, ex);
}
var ax = /*#__PURE__*/ $($b, [["render", ix]]), ox = {
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
}, sx = ["aria-hidden", "aria-label"], cx = [
	"fill",
	"width",
	"height"
], lx = { d: "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" }, ux = { key: 0 };
function dx(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon text-box-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", lx, [n.title ? (E(), q("title", ux, H(n.title), 1)) : L("", !0)])], 8, cx))], 16, sx);
}
var fx = /*#__PURE__*/ $(ox, [["render", dx]]), px = {
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
}, mx = ["aria-hidden", "aria-label"], hx = [
	"fill",
	"width",
	"height"
], gx = { d: "M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5M7,4A3,3 0 0,0 4,7A3,3 0 0,0 7,10A3,3 0 0,0 10,7A3,3 0 0,0 7,4M17,14A3,3 0 0,0 14,17A3,3 0 0,0 17,20A3,3 0 0,0 20,17A3,3 0 0,0 17,14Z" }, _x = { key: 0 };
function vx(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon percent-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", gx, [n.title ? (E(), q("title", _x, H(n.title), 1)) : L("", !0)])], 8, hx))], 16, mx);
}
var yx = /*#__PURE__*/ $(px, [["render", vx]]), bx = {
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
}, xx = ["aria-hidden", "aria-label"], Sx = [
	"fill",
	"width",
	"height"
], Cx = { d: "M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" }, wx = { key: 0 };
function Tx(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon credit-card-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Cx, [n.title ? (E(), q("title", wx, H(n.title), 1)) : L("", !0)])], 8, Sx))], 16, xx);
}
var Ex = /*#__PURE__*/ $(bx, [["render", Tx]]), Dx = {
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
}, Ox = ["aria-hidden", "aria-label"], kx = [
	"fill",
	"width",
	"height"
], Ax = { d: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" }, jx = { key: 0 };
function Mx(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon email-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Ax, [n.title ? (E(), q("title", jx, H(n.title), 1)) : L("", !0)])], 8, kx))], 16, Ox);
}
var Nx = /*#__PURE__*/ $(Dx, [["render", Mx]]), Px = {
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
}, Fx = ["aria-hidden", "aria-label"], Ix = [
	"fill",
	"width",
	"height"
], Lx = { d: "M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z" }, Rx = { key: 0 };
function zx(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon server-network-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Lx, [n.title ? (E(), q("title", Rx, H(n.title), 1)) : L("", !0)])], 8, Ix))], 16, Fx);
}
var Bx = /*#__PURE__*/ $(Px, [["render", zx]]), Vx = {
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
}, Hx = ["aria-hidden", "aria-label"], Ux = [
	"fill",
	"width",
	"height"
], Wx = { d: "M3 4C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H13.5A6.5 6.5 0 0 1 13 18H3V8L11 13L19 8V11A6.5 6.5 0 0 1 19.5 11A6.5 6.5 0 0 1 21 11.18V6C21 4.9 20.1 4 19 4H3M3 6H19L11 11L3 6M19 12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5V12M15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29Z" }, Gx = { key: 0 };
function Kx(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon email-sync-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Wx, [n.title ? (E(), q("title", Gx, H(n.title), 1)) : L("", !0)])], 8, Ux))], 16, Hx);
}
var qx = /*#__PURE__*/ $(Vx, [["render", Kx]]), Jx = {
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
}, Yx = ["aria-hidden", "aria-label"], Xx = [
	"fill",
	"width",
	"height"
], Zx = { d: "M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" }, Qx = { key: 0 };
function $x(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon folder-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", Zx, [n.title ? (E(), q("title", Qx, H(n.title), 1)) : L("", !0)])], 8, Xx))], 16, Yx);
}
var eS = /*#__PURE__*/ $(Jx, [["render", $x]]), tS = {
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
}, nS = ["aria-hidden", "aria-label"], rS = [
	"fill",
	"width",
	"height"
], iS = { d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z" }, aS = { key: 0 };
function oS(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon shield-account-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", iS, [n.title ? (E(), q("title", aS, H(n.title), 1)) : L("", !0)])], 8, rS))], 16, nS);
}
var sS = /*#__PURE__*/ $(tS, [["render", oS]]), cS = {
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
}, lS = ["aria-hidden", "aria-label"], uS = [
	"fill",
	"width",
	"height"
], dS = { d: "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z" }, fS = { key: 0 };
function pS(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon key-outline-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", dS, [n.title ? (E(), q("title", fS, H(n.title), 1)) : L("", !0)])], 8, uS))], 16, lS);
}
var mS = /*#__PURE__*/ $(cS, [["render", pS]]), hS = {
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
}, gS = ["aria-hidden", "aria-label"], _S = [
	"fill",
	"width",
	"height"
], vS = { d: "M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" }, yS = { key: 0 };
function bS(e, t, n, r, i, a) {
	return E(), q("span", Z(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon robot-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(E(), q("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [Y("path", vS, [n.title ? (E(), q("title", yS, H(n.title), 1)) : L("", !0)])], 8, _S))], 16, gS);
}
var xS = /*#__PURE__*/ $(hS, [["render", bS]]), SS = () => bs("/api-keys"), CS = (e, t, n = null) => xs("/api-keys", { data: {
	name: e,
	scopes: t,
	rateLimit: n
} }), wS = (e) => ws(`/api-keys/${e}`), TS = { class: "rw-api-keys" }, ES = { class: "rw-hint" }, DS = { class: "rw-api-keys__plaintext" }, OS = {
	key: 2,
	class: "rw-api-keys__table"
}, kS = { class: "rw-api-keys__actions-head" }, AS = { class: "rw-api-keys__scopes" }, jS = {
	key: 3,
	class: "rw-hint"
}, MS = { class: "rw-api-keys__modal" }, NS = { class: "field" }, PS = ["placeholder"], FS = { class: "field" }, IS = ["value"], LS = { class: "field" }, RS = ["placeholder"], zS = { class: "rw-api-keys__actions" }, BS = 1e4, VS = /*#__PURE__*/ $(/* @__PURE__ */ z({
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
			"invoices:create": j("rechnungswerk", "Rechnungen anlegen"),
			"invoices:commit": j("rechnungswerk", "Festschreiben"),
			"invoices:send": j("rechnungswerk", "Versenden"),
			"invoices:pay": j("rechnungswerk", "Als bezahlt markieren"),
			"invoices:cancel": j("rechnungswerk", "Stornieren"),
			"invoices:read": j("rechnungswerk", "Rechnungen lesen"),
			"invoices:pdf": j("rechnungswerk", "PDF abrufen")
		}, r = X([]), i = X(!1), a = X(""), o = X([]), s = X(""), c = X(!1), l = X(""), u = X(""), d = X(""), f = X(!1), p = X(null), m = X(null), h = G(() => a.value.trim() !== "" && o.value.length > 0);
		function ee(e) {
			return n[e] ?? e;
		}
		function te(e) {
			return e.map(ee);
		}
		function _(e) {
			return (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString();
		}
		async function v() {
			try {
				r.value = await SS(), l.value = "";
			} catch (e) {
				l.value = e.message ?? j("rechnungswerk", "API-Schlüssel konnten nicht geladen werden.");
			}
		}
		async function y() {
			c.value = !0, u.value = "";
			try {
				let e = s.value === "" ? null : Number(s.value), t = await CS(a.value.trim(), [...o.value], e);
				d.value = t.plaintext, f.value = !1, i.value = !1, a.value = "", o.value = [], s.value = "", await v();
			} catch (e) {
				u.value = e.message ?? j("rechnungswerk", "Anlegen fehlgeschlagen.");
			} finally {
				c.value = !1;
			}
		}
		async function b() {
			let e = p.value;
			if (p.value = null, e !== null) {
				c.value = !0;
				try {
					await wS(e), await v();
				} catch (e) {
					l.value = e.message ?? j("rechnungswerk", "Widerrufen fehlgeschlagen.");
				} finally {
					c.value = !1;
				}
			}
		}
		async function x() {
			try {
				await navigator.clipboard.writeText(d.value);
			} catch {}
			f.value = !0;
		}
		return ce(v), (e, n) => (E(), q("div", TS, [
			Y("p", ES, H(B(j)("rechnungswerk", "Ein API-Schlüssel erlaubt anderen Programmen Zugriff auf diese RechnungsWerk-Instanz, ohne eine Anmeldung. Der Schlüssel wird nur einmalig angezeigt.")), 1),
			l.value ? (E(), U(B(Q), {
				key: 0,
				type: "error",
				text: l.value
			}, null, 8, ["text"])) : L("", !0),
			d.value ? (E(), U(B(Q), {
				key: 1,
				type: "success"
			}, {
				default: g(() => [
					Y("p", null, H(B(j)("rechnungswerk", "Das ist dein neuer API-Schlüssel:")), 1),
					Y("p", null, [Y("code", DS, H(d.value), 1)]),
					Y("p", null, H(B(j)("rechnungswerk", "Bitte bewahre ihn sicher auf. Er wird nie wieder angezeigt.")), 1),
					W(B(I), { onClick: x }, {
						default: g(() => [R(H(f.value ? B(j)("rechnungswerk", "Kopiert") : B(j)("rechnungswerk", "Kopieren")), 1)]),
						_: 1
					})
				]),
				_: 1
			})) : L("", !0),
			r.value.length > 0 ? (E(), q("table", OS, [Y("thead", null, [Y("tr", null, [
				Y("th", null, H(B(j)("rechnungswerk", "Name")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Schlüssel")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Rechte")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Anfragen pro Minute")), 1),
				Y("th", null, H(B(j)("rechnungswerk", "Zuletzt verwendet")), 1),
				Y("th", null, [Y("span", kS, H(B(j)("rechnungswerk", "Aktionen")), 1)])
			])]), Y("tbody", null, [(E(!0), q(k, null, C(r.value, (e) => (E(), q("tr", {
				key: e.id,
				class: V({ "rw-api-keys__row--revoked": e.revokedAt !== null })
			}, [
				Y("td", null, H(e.name), 1),
				Y("td", null, [Y("code", null, H(e.keyPrefix) + "…", 1)]),
				Y("td", null, [Y("span", AS, H(te(e.scopes).join(", ")), 1)]),
				Y("td", null, H(e.rateLimit ?? B(j)("rechnungswerk", "Standard (60)")), 1),
				Y("td", null, [e.revokedAt === null ? e.lastUsedAt ? (E(), q(k, { key: 1 }, [R(H(_(e.lastUsedAt)), 1)], 64)) : (E(), q(k, { key: 2 }, [R(H(B(j)("rechnungswerk", "nie")), 1)], 64)) : (E(), q(k, { key: 0 }, [R(H(B(j)("rechnungswerk", "Widerrufen")), 1)], 64))]),
				Y("td", null, [e.revokedAt === null ? (E(), U(B(I), {
					key: 0,
					variant: "tertiary",
					disabled: c.value,
					onClick: (t) => p.value = e.id
				}, {
					default: g(() => [R(H(B(j)("rechnungswerk", "Widerrufen")), 1)]),
					_: 1
				}, 8, ["disabled", "onClick"])) : L("", !0)])
			], 2))), 128))])])) : (E(), q("p", jS, H(B(j)("rechnungswerk", "Noch kein API-Schlüssel angelegt.")), 1)),
			W(B(I), {
				variant: "primary",
				disabled: c.value,
				onClick: n[0] ||= (e) => i.value = !0
			}, {
				default: g(() => [R(H(B(j)("rechnungswerk", "API-Schlüssel anlegen")), 1)]),
				_: 1
			}, 8, ["disabled"]),
			i.value ? (E(), U(B(ft), {
				key: 4,
				name: B(j)("rechnungswerk", "API-Schlüssel anlegen"),
				onClose: n[5] ||= (e) => i.value = !1
			}, {
				default: g(() => [Y("div", MS, [
					Y("h3", null, H(B(j)("rechnungswerk", "API-Schlüssel anlegen")), 1),
					Y("label", NS, [Y("span", null, H(B(j)("rechnungswerk", "Name")), 1), S(Y("input", {
						ref_key: "nameInput",
						ref: m,
						"onUpdate:modelValue": n[1] ||= (e) => a.value = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: B(j)("rechnungswerk", "z. B. WerkPlus")
					}, null, 8, PS), [[J, a.value]])]),
					Y("div", FS, [Y("span", null, H(B(j)("rechnungswerk", "Rechte")), 1), (E(), q(k, null, C(t, (e) => Y("label", {
						key: e,
						class: "rw-api-keys__scope"
					}, [S(Y("input", {
						"onUpdate:modelValue": n[2] ||= (e) => o.value = e,
						type: "checkbox",
						value: e
					}, null, 8, IS), [[ne, o.value]]), R(" " + H(ee(e)), 1)])), 64))]),
					Y("label", LS, [Y("span", null, H(B(j)("rechnungswerk", "Anfragen pro Minute")), 1), S(Y("input", {
						"onUpdate:modelValue": n[3] ||= (e) => s.value = e,
						class: "input",
						type: "number",
						min: "1",
						max: BS,
						placeholder: B(j)("rechnungswerk", "Standard: 60")
					}, null, 8, RS), [[J, s.value]])]),
					u.value ? (E(), U(B(Q), {
						key: 0,
						type: "error",
						text: u.value
					}, null, 8, ["text"])) : L("", !0),
					Y("div", zS, [W(B(I), { onClick: n[4] ||= (e) => i.value = !1 }, {
						default: g(() => [R(H(B(j)("rechnungswerk", "Abbrechen")), 1)]),
						_: 1
					}), W(B(I), {
						variant: "primary",
						disabled: c.value || !h.value,
						onClick: y
					}, {
						default: g(() => [R(H(B(j)("rechnungswerk", "Anlegen")), 1)]),
						_: 1
					}, 8, ["disabled"])])
				])]),
				_: 1
			}, 8, ["name"])) : L("", !0),
			W(ip, {
				open: p.value !== null,
				name: B(j)("rechnungswerk", "API-Schlüssel widerrufen"),
				message: B(j)("rechnungswerk", "Programme mit diesem Schlüssel verlieren sofort den Zugang. Widerrufen lässt sich ein Schlüssel nicht rückgängig machen. Fortfahren?"),
				confirmLabel: B(j)("rechnungswerk", "Widerrufen"),
				onClose: n[6] ||= (e) => p.value = null,
				onConfirm: b
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-5528b34f"]]), HS = [
	"1-5",
	"6-20",
	"21-50",
	"51-200",
	"200+"
], US = () => bs("/license"), WS = (e, t) => Cs("/license", {
	key: e,
	employeeBucket: t
}), GS = (e) => xs("/license/trial", { employeeBucket: e }), KS = () => xs("/license/refresh", {}), qS = () => ws("/license"), JS = { class: "rw-werkplus" }, YS = { class: "rw-hint" }, XS = { key: 0 }, ZS = { key: 1 }, QS = {
	key: 5,
	class: "rw-werkplus__facts"
}, $S = { class: "rw-form-row" }, eC = { class: "rw-field" }, tC = ["placeholder"], nC = { class: "rw-field rw-field--narrow" }, rC = ["value"], iC = { class: "rw-hint" }, aC = { class: "rw-werkplus__actions" }, oC = { class: "rw-werkplus__privacy" }, sC = { class: "rw-werkplus__label" }, cC = { class: "rw-hint" }, lC = { class: "rw-hint" }, uC = { class: "rw-hint" }, dC = /*#__PURE__*/ $(/* @__PURE__ */ z({
	__name: "WerkPlusSettings",
	setup(e) {
		let t = X(null), n = X(""), r = X(HS[0]), i = X(!1), a = X(""), o = X(""), s = X(""), c = X(""), l = X(!1), u = X(!1), d = ["TRIAL_ALREADY_USED"], f = G(() => t.value?.state === "valid" || t.value?.state === "grace"), p = G(() => t.value?.tier === "werkplus" ? "WerkPlus" : j("rechnungswerk", "Frei")), m = G(() => {
			let e = t.value;
			if (!e) return null;
			switch (e.state) {
				case "valid": return {
					type: "success",
					text: j("rechnungswerk", "WerkPlus ist aktiv.")
				};
				case "grace": return {
					type: "warning",
					text: j("rechnungswerk", "Die Lizenz ist abgelaufen und konnte noch nicht erneuert werden. Die Funktionen bleiben bis {date} erhalten.", { date: e.graceUntil ? h(e.graceUntil) : "" })
				};
				case "expired": return {
					type: "error",
					text: j("rechnungswerk", "Die Lizenz ist abgelaufen. RechnungsWerk arbeitet im freien Umfang weiter.")
				};
				case "invalid": return {
					type: "error",
					text: j("rechnungswerk", "Der gespeicherte Lizenznachweis ist ungültig. Bitte prüfe die Lizenz erneut.")
				};
				default: return null;
			}
		});
		function h(e) {
			return new Date(e).toLocaleDateString();
		}
		function ee(e) {
			return new Date(e).toLocaleString();
		}
		function te(e, n = !1) {
			t.value = e, n || (r.value = e.employeeBucket);
		}
		async function ne(e = !1) {
			try {
				te(await US(), e), a.value = "";
			} catch (e) {
				a.value = e.message ?? j("rechnungswerk", "Lizenzstatus konnte nicht geladen werden.");
			}
		}
		async function _(e) {
			i.value = !0, o.value = "", s.value = "";
			try {
				te(await e()), n.value = "";
			} catch (e) {
				let { message: t, code: n } = e, r = t ?? j("rechnungswerk", "WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut.");
				n && d.includes(n) ? s.value = r : o.value = r, await ne(!0);
			} finally {
				i.value = !1;
			}
		}
		function v() {
			return c.value = "", _(() => WS(n.value.trim(), r.value));
		}
		function y() {
			return u.value = !1, c.value = "", _(async () => {
				let e = await GS(r.value);
				return c.value = e.key, e.status;
			});
		}
		function b() {
			return _(KS);
		}
		function x() {
			return l.value = !1, c.value = "", _(qS);
		}
		return ce(ne), (e, d) => (E(), q("div", JS, [
			Y("p", YS, H(B(j)("rechnungswerk", "Mit einem WerkPlus-Schlüssel schaltet RechnungsWerk zusätzliche Funktionen frei. Ohne Schlüssel bleibt alles, wie es ist.")), 1),
			a.value ? (E(), U(B(Q), {
				key: 0,
				type: "error",
				text: a.value
			}, null, 8, ["text"])) : L("", !0),
			t.value ? (E(), q(k, { key: 1 }, [
				m.value ? (E(), U(B(Q), {
					key: 0,
					type: m.value.type,
					text: m.value.text
				}, null, 8, ["type", "text"])) : L("", !0),
				c.value ? (E(), U(B(Q), {
					key: 1,
					type: "success",
					class: "rw-werkplus__trial-key"
				}, {
					default: g(() => [
						f.value ? (E(), q("p", XS, H(B(j)("rechnungswerk", "Der Testzeitraum läuft. Das ist dein WerkPlus-Schlüssel:")), 1)) : (E(), q("p", ZS, H(B(j)("rechnungswerk", "Der Testzeitraum ist gestartet, die Lizenz konnte aber noch nicht geprüft werden. Mit „Jetzt prüfen“ versuchst du es erneut. Das ist dein WerkPlus-Schlüssel:")), 1)),
						Y("p", null, [Y("code", null, H(c.value), 1)]),
						Y("p", null, H(B(j)("rechnungswerk", "Bitte bewahre ihn sicher auf. Er ist hinterlegt, wird aber nur jetzt vollständig angezeigt.")), 1)
					]),
					_: 1
				})) : L("", !0),
				s.value ? (E(), U(B(Q), {
					key: 2,
					type: "info",
					text: s.value
				}, null, 8, ["text"])) : L("", !0),
				o.value ? (E(), U(B(Q), {
					key: 3,
					type: "error",
					text: o.value
				}, null, 8, ["text"])) : t.value.lastError ? (E(), U(B(Q), {
					key: 4,
					type: "warning",
					text: t.value.lastError.message
				}, null, 8, ["text"])) : L("", !0),
				t.value.keySet ? (E(), q("dl", QS, [
					Y("dt", null, H(B(j)("rechnungswerk", "Tarif")), 1),
					Y("dd", null, H(p.value), 1),
					t.value.expiresAt ? (E(), q(k, { key: 0 }, [Y("dt", null, H(B(j)("rechnungswerk", "Gültig bis")), 1), Y("dd", null, H(h(t.value.expiresAt)), 1)], 64)) : L("", !0),
					Y("dt", null, H(B(j)("rechnungswerk", "Letzte erfolgreiche Prüfung")), 1),
					Y("dd", null, H(t.value.lastCheckAt ? ee(t.value.lastCheckAt) : B(j)("rechnungswerk", "noch keine")), 1),
					Y("dt", null, H(B(j)("rechnungswerk", "Schlüssel")), 1),
					Y("dd", null, H(t.value.keyHint), 1)
				])) : L("", !0),
				Y("div", $S, [Y("label", eC, [Y("span", null, H(B(j)("rechnungswerk", "WerkPlus-Schlüssel")), 1), S(Y("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.value = e,
					class: "rw-input",
					type: "text",
					autocomplete: "off",
					spellcheck: "false",
					placeholder: t.value.keySet ? B(j)("rechnungswerk", "gespeichert, leer lassen") : "wp_…"
				}, null, 8, tC), [[J, n.value]])]), Y("label", nC, [Y("span", null, H(B(j)("rechnungswerk", "Mitarbeitende")), 1), S(Y("select", {
					"onUpdate:modelValue": d[1] ||= (e) => r.value = e,
					class: "rw-input"
				}, [(E(!0), q(k, null, C(B(HS), (e) => (E(), q("option", {
					key: e,
					value: e
				}, H(e), 9, rC))), 128))], 512), [[re, r.value]])])]),
				Y("p", iC, H(B(j)("rechnungswerk", "Übertragen wird nur die Größenklasse, keine Mitarbeiterzahl.")), 1),
				Y("div", aC, [
					W(B(I), {
						variant: "primary",
						disabled: i.value || !n.value.trim() && !t.value.keySet,
						onClick: v
					}, {
						default: g(() => [R(H(t.value.keySet ? B(j)("rechnungswerk", "Speichern und prüfen") : B(j)("rechnungswerk", "Schlüssel prüfen und speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					t.value.keySet ? L("", !0) : (E(), U(B(I), {
						key: 0,
						disabled: i.value,
						onClick: d[2] ||= (e) => u.value = !0
					}, {
						default: g(() => [R(H(B(j)("rechnungswerk", "30 Tage testen")), 1)]),
						_: 1
					}, 8, ["disabled"])),
					t.value.keySet ? (E(), U(B(I), {
						key: 1,
						disabled: i.value,
						onClick: b
					}, {
						default: g(() => [R(H(B(j)("rechnungswerk", "Jetzt prüfen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : L("", !0),
					t.value.keySet ? (E(), U(B(I), {
						key: 2,
						variant: "tertiary",
						disabled: i.value,
						onClick: d[3] ||= (e) => l.value = !0
					}, {
						default: g(() => [R(H(B(j)("rechnungswerk", "Schlüssel entfernen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : L("", !0)
				]),
				Y("div", oC, [
					Y("span", sC, H(B(j)("rechnungswerk", "Was an WerkPlus übertragen wird")), 1),
					Y("p", cC, H(B(j)("rechnungswerk", "Der Schlüssel, die Kennung dieser Installation, die Version von RechnungsWerk und die Größenklasse. Niemals: Rechnungen, Kunden oder andere Belegdaten, Personendaten, Nextcloud-Benutzer oder Dateien.")), 1),
					Y("p", lC, H(B(j)("rechnungswerk", "Die Lizenz wird auf diesem Server geprüft. Ist WerkPlus nicht erreichbar, arbeitet RechnungsWerk normal weiter.")), 1),
					Y("p", uC, [R(H(B(j)("rechnungswerk", "Kennung dieser Installation:")) + " ", 1), Y("code", null, H(t.value.instanceUuid), 1)])
				])
			], 64)) : L("", !0),
			W(ip, {
				open: u.value,
				name: B(j)("rechnungswerk", "WerkPlus 30 Tage testen"),
				message: B(j)("rechnungswerk", "Der Testzeitraum läuft 30 Tage, braucht keine Zahlungsdaten und ist je Installation nur einmal möglich. Jetzt starten?"),
				confirmLabel: B(j)("rechnungswerk", "Testzeitraum starten"),
				onClose: d[4] ||= (e) => u.value = !1,
				onConfirm: y
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			]),
			W(ip, {
				open: l.value,
				name: B(j)("rechnungswerk", "WerkPlus-Schlüssel entfernen"),
				message: B(j)("rechnungswerk", "RechnungsWerk arbeitet danach im freien Umfang. Den Schlüssel kannst du jederzeit wieder eintragen. Fortfahren?"),
				confirmLabel: B(j)("rechnungswerk", "Entfernen"),
				onClose: d[5] ||= (e) => l.value = !1,
				onConfirm: x
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-964bd0e3"]]);
function fC(e) {
	if (typeof e != "string") return null;
	let t = e.trim().replace(/^#/, "");
	if (t.length === 3 && (t = t.split("").map((e) => e + e).join("")), !/^[0-9a-fA-F]{6}$/.test(t)) return null;
	let n = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, r = parseInt(t, 16);
	return .2126 * n(r >> 16 & 255) + .7152 * n(r >> 8 & 255) + .0722 * n(r & 255);
}
function pC(e, t) {
	let [n, r] = e > t ? [e, t] : [t, e];
	return (n + .05) / (r + .05);
}
function mC(e) {
	let t = fC(e);
	return t === null ? "#000000" : pC(t, 1) >= pC(t, 0) ? "#ffffff" : "#000000";
}
function hC(e) {
	let t = fC(e);
	return t !== null && pC(t, 1) < 4.5;
}
//#endregion
//#region src/utils/invoiceNumber.ts
function gC(e, t, n, r, i) {
	return e.replace(/\{YYYY\}/g, String(n).padStart(4, "0")).replace(/\{YY\}/g, String(n % 100).padStart(2, "0")).replace(/\{MM\}/g, String(r).padStart(2, "0")).replace(/\{DD\}/g, String(i).padStart(2, "0")).replace(/\{(#+)\}/g, (e, n) => String(t).padStart(n.length, "0"));
}
//#endregion
//#region src/utils/fileName.ts
var _C = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue"
};
function vC(e, t) {
	let n = (e) => String(e).padStart(2, "0"), r = {
		"{nummer}": t.nummer,
		"{YYYY}": String(t.date.getFullYear()),
		"{MM}": n(t.date.getMonth() + 1),
		"{DD}": n(t.date.getDate()),
		"{kunde}": t.kunde.replace(/[äöüßÄÖÜ]/g, (e) => _C[e] ?? e),
		"{typ}": t.typ
	}, i = e.replace(/\{nummer\}|\{YYYY\}|\{MM\}|\{DD\}|\{kunde\}|\{typ\}/g, (e) => r[e]);
	return i = i.replace(/[/\\:*?"<>|]/g, "-").replace(/\s+/g, " ").replace(/^[\s.]+|[\s.]+$/g, "").slice(0, 120), (i || "rechnung-1") + ".pdf";
}
//#endregion
//#region src/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
var yC = { class: "rw-view rw-view--narrow" }, bC = { class: "rw-settings-title" }, xC = {
	key: 0,
	class: "rw-settingspage"
}, SC = { class: "rw-settingspage__content" }, CC = { class: "rw-section" }, wC = { class: "rw-field" }, TC = { class: "rw-field" }, EC = { class: "rw-form-row" }, DC = { class: "rw-field" }, OC = { class: "rw-field" }, kC = { class: "rw-form-row" }, AC = { class: "rw-field" }, jC = { class: "rw-field" }, MC = { class: "rw-field" }, NC = { class: "rw-hint" }, PC = { class: "rw-section" }, FC = { class: "rw-form-row" }, IC = { class: "rw-field" }, LC = { class: "rw-field" }, RC = { class: "rw-field" }, zC = { class: "rw-hint" }, BC = { class: "rw-section" }, VC = { class: "rw-field rw-field--inline" }, HC = { class: "rw-accent" }, UC = ["aria-label"], WC = { class: "rw-field" }, GC = { class: "rw-accent-preview" }, KC = { class: "rw-hint" }, qC = {
	key: 0,
	class: "rw-hint"
}, JC = { class: "rw-field" }, YC = { class: "rw-logo" }, XC = ["src", "alt"], ZC = {
	key: 1,
	class: "rw-logo__empty"
}, QC = { class: "rw-logo__actions" }, $C = { class: "rw-hint" }, ew = { class: "rw-section" }, tw = { class: "rw-field" }, nw = { class: "rw-hint" }, rw = { class: "rw-field" }, iw = { class: "rw-hint" }, aw = { class: "rw-field rw-reset-mode" }, ow = { class: "rw-hint" }, sw = { class: "rw-section" }, cw = { class: "rw-field" }, lw = { class: "rw-hint" }, uw = { class: "rw-field rw-reset-mode" }, dw = { class: "rw-hint" }, fw = { class: "rw-section" }, pw = { class: "rw-field" }, mw = { class: "rw-hint" }, hw = { class: "rw-section" }, gw = {
	key: 0,
	class: "rw-field"
}, _w = ["placeholder"], vw = { class: "rw-hint" }, yw = {
	key: 1,
	class: "rw-field tax-rate-field"
}, bw = ["value"], xw = { class: "rw-section" }, Sw = { class: "rw-field rw-field--narrow" }, Cw = { class: "rw-hint" }, ww = { class: "rw-section" }, Tw = { class: "rw-field" }, Ew = { class: "rw-hint" }, Dw = { class: "rw-form-row" }, Ow = { class: "rw-field" }, kw = { class: "rw-field" }, Aw = { class: "rw-section" }, jw = { class: "rw-field" }, Mw = { class: "rw-archive-folder" }, Nw = {
	key: 0,
	class: "rw-archive-folder__path"
}, Pw = {
	key: 1,
	class: "rw-archive-folder__empty"
}, Fw = { class: "rw-field" }, Iw = ["placeholder"], Lw = { class: "rw-hint" }, Rw = { class: "rw-section" }, zw = { class: "rw-hint" }, Bw = { class: "rw-form-row" }, Vw = { class: "rw-field" }, Hw = { class: "rw-field rw-field--narrow" }, Uw = { class: "rw-field rw-field--narrow" }, Ww = { value: "none" }, Gw = { class: "rw-form-row" }, Kw = { class: "rw-field" }, qw = { class: "rw-field" }, Jw = ["placeholder"], Yw = { class: "smtp-test" }, Xw = { class: "rw-section" }, Zw = { class: "rw-hint" }, Qw = { class: "rw-form-row" }, $w = { class: "rw-field" }, eT = { class: "rw-field rw-field--narrow" }, tT = { class: "rw-field rw-field--narrow" }, nT = { class: "rw-form-row" }, rT = { class: "rw-field" }, iT = { class: "rw-field" }, aT = ["placeholder"], oT = { class: "rw-section" }, sT = { class: "rw-hint" }, cT = { class: "rw-section" }, lT = { class: "rw-hint rw-access-intro" }, uT = { class: "rw-access-group" }, dT = { class: "rw-access-label" }, fT = { class: "rw-hint rw-access-desc" }, pT = { class: "rw-access-group" }, mT = { class: "rw-access-label" }, hT = { class: "rw-hint rw-access-desc" }, gT = { class: "rw-section" }, _T = { class: "rw-section" }, vT = { class: "rw-action-bar" }, yT = [
	{
		path: "/",
		redirect: { name: "invoices" }
	},
	{
		path: "/invoices",
		name: "invoices",
		component: ad
	},
	{
		path: "/invoices/new",
		name: "invoice-new",
		component: Vh
	},
	{
		path: "/invoices/:id",
		name: "invoice-detail",
		component: Vh,
		props: !0
	},
	{
		path: "/quotes",
		name: "quotes",
		component: dg
	},
	{
		path: "/quotes/new",
		name: "quote-new",
		component: Vh
	},
	{
		path: "/quotes/:id",
		name: "quote-detail",
		component: Vh,
		props: !0
	},
	{
		path: "/customers",
		name: "customers",
		component: vv
	},
	{
		path: "/products",
		name: "products",
		component: Rg
	},
	{
		path: "/text-snippets",
		name: "text-snippets",
		component: h_
	},
	{
		path: "/me",
		name: "my-contact",
		component: Pv
	},
	{
		path: "/settings",
		name: "settings",
		component: /* @__PURE__ */ $(/* @__PURE__ */ z({
			__name: "SettingsView",
			setup(e) {
				let t = je(), n = nu(), r = X(null), i = G(() => [
					{
						label: j("rechnungswerk", "Firma"),
						items: [
							{
								key: "firma",
								label: j("rechnungswerk", "Firma"),
								icon: Rb
							},
							{
								key: "bank",
								label: j("rechnungswerk", "Bankverbindung"),
								icon: Gb
							},
							{
								key: "branding",
								label: j("rechnungswerk", "Branding"),
								icon: Qb
							}
						]
					},
					{
						label: j("rechnungswerk", "Belege"),
						items: [
							{
								key: "rechnungsnummer",
								label: j("rechnungswerk", "Rechnungsnummer"),
								icon: Io
							},
							{
								key: "angebotsnummer",
								label: j("rechnungswerk", "Angebotsnummer"),
								icon: ax
							},
							{
								key: "dateiname",
								label: j("rechnungswerk", "PDF-Dateiname"),
								icon: Na
							},
							{
								key: "texte",
								label: j("rechnungswerk", "Standardtexte"),
								icon: fx
							}
						]
					},
					{
						label: j("rechnungswerk", "Buchhaltung"),
						items: [{
							key: "steuer",
							label: j("rechnungswerk", "Steuer"),
							icon: yx
						}, {
							key: "zahlung",
							label: j("rechnungswerk", "Zahlung"),
							icon: Ex
						}]
					},
					{
						label: j("rechnungswerk", "Versand"),
						items: [
							{
								key: "versand",
								label: j("rechnungswerk", "Versand"),
								icon: Nx
							},
							{
								key: "smtp",
								label: j("rechnungswerk", "Eigenes SMTP-Konto"),
								icon: Bx
							},
							{
								key: "datev",
								label: j("rechnungswerk", "DATEV-Rückmeldung"),
								icon: qx
							}
						]
					},
					{
						label: j("rechnungswerk", "Ablage & Zugriff"),
						items: [{
							key: "ablage",
							label: j("rechnungswerk", "Ablage in Nextcloud"),
							icon: eS
						}, {
							key: "zugriff",
							label: j("rechnungswerk", "Zugriff & Administration"),
							icon: sS
						}]
					},
					{
						label: j("rechnungswerk", "Lizenz"),
						items: [{
							key: "werkplus",
							label: j("rechnungswerk", "WerkPlus"),
							icon: mS
						}, {
							key: "apikeys",
							label: j("rechnungswerk", "API-Schlüssel"),
							icon: xS
						}]
					}
				]), a = X("firma");
				function o() {
					t.push({ name: "text-snippets" });
				}
				let s = X(null), c = X(!1), l = X(""), u = X(null);
				async function d(e) {
					l.value = e, await rt(), u.value?.scrollIntoView({
						behavior: "smooth",
						block: "center"
					});
				}
				let f = X(!1), p = X(!1), m = X(!1), h = X(!1), ee = X(!1), te = X(0), ne = X((/* @__PURE__ */ new Date()).getFullYear()), _ = X((/* @__PURE__ */ new Date()).getMonth() + 1), v = X((/* @__PURE__ */ new Date()).getDate()), y = X(null), b = X(0), ie = X(null), w = X(null), T = G(() => r.value?.accentColor || "#2c3e50"), D = G(() => ({
					background: T.value,
					color: mC(T.value)
				})), O = G(() => hC(T.value));
				function ae(e) {
					r.value && (r.value.accentColor = e ?? null);
				}
				let oe = X([]), se = X([]), A = X([]), M = X(!1), le = X(!1), ue = X(""), de = null, N = X(""), fe = X(""), pe = X(!1), P = X(""), F = X(!1), me = X(!1), he = G(() => r.value?.logoFileId ? $l(r.value.logoFileId) : ""), ge = G(() => M.value ? j("rechnungswerk", "Suche läuft\xA0…") : ue.value.trim().length < 2 ? j("rechnungswerk", "Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.") : j("rechnungswerk", "Keine Treffer.")), _e = G(() => r.value?.numberResetMode === "continuous" || ne.value === y.value ? te.value : 0), ve = G(() => _e.value + 1), ye = G(() => {
					if (!r.value) return "";
					let e = w.value && w.value > 0 ? w.value : ve.value;
					return gC(r.value.numberFormat || "RE-{YYYY}-{####}", e, ne.value, _.value, v.value);
				}), be = G(() => {
					if (!r.value) return "";
					let e = r.value.quoteNumberResetMode === "continuous" || ne.value === ie.value ? b.value : 0;
					return gC(r.value.quoteNumberFormat || "AN-{YYYY}-{####}", e + 1, ne.value, _.value, v.value);
				}), xe = G(() => r.value ? vC(r.value.fileNameFormat || "{nummer}", {
					nummer: ye.value,
					date: /* @__PURE__ */ new Date(),
					kunde: "Muster GmbH",
					typ: "Rechnung"
				}) : "");
				ce(async () => {
					try {
						await n.fetch(), z();
						let e = await Hs();
						oe.value = Se(e.admins), se.value = Se(e.users);
					} catch (e) {
						Ve(e, j("rechnungswerk", "Laden fehlgeschlagen"));
					}
				});
				function Se(e) {
					return e.map((e) => ({
						id: e,
						type: e.startsWith("group:") ? "group" : "user",
						displayName: e.replace(/^(user|group):/, "")
					}));
				}
				function Ce(e) {
					if (ue.value = e, de && clearTimeout(de), e.trim().length < 2) {
						A.value = [], M.value = !1;
						return;
					}
					M.value = !0, de = setTimeout(async () => {
						try {
							A.value = await Ws(e.trim());
						} catch {
							A.value = [];
						} finally {
							M.value = !1;
						}
					}, 300);
				}
				function z() {
					let e = n.settings;
					if (e) {
						te.value = e.numberCounter, y.value = e.numberCounterYear, b.value = e.quoteNumberCounter, ie.value = e.quoteNumberCounterYear;
						{
							let t = e.numberResetMode === "continuous" || ne.value === e.numberCounterYear ? e.numberCounter : 0;
							w.value = t + 1;
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
				function we(e) {
					r.value && (e ? f.value = !0 : r.value.smallBusiness = !1);
				}
				function Te() {
					f.value = !1, r.value && (r.value.smallBusiness = !0);
				}
				function Ee(e) {
					r.value && (e ? p.value = !0 : r.value.datevAutoSend = !1);
				}
				function De() {
					p.value = !1, r.value && (r.value.datevAutoSend = !0);
				}
				function Oe(e) {
					r.value && (e ? m.value = !0 : r.value.archiveEnabled = !1);
				}
				function ke() {
					m.value = !1, r.value && (r.value.archiveEnabled = !0);
				}
				function Ae(e) {
					r.value && e !== r.value.numberResetMode && (e === "continuous" ? h.value = !0 : r.value.numberResetMode = "yearly");
				}
				function Me() {
					h.value = !1, r.value && (r.value.numberResetMode = "continuous");
				}
				function Ne(e) {
					r.value && e !== r.value.quoteNumberResetMode && (e === "continuous" ? ee.value = !0 : r.value.quoteNumberResetMode = "yearly");
				}
				function Pe() {
					ee.value = !1, r.value && (r.value.quoteNumberResetMode = "continuous");
				}
				async function Fe() {
					let e;
					try {
						e = await vt(j("rechnungswerk", "Zielordner für die Ablage wählen")).setMultiSelect(!1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories(!0).addButton({
							label: j("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof yt) return;
						Ve(e, j("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						c.value = !0, l.value = "";
						try {
							let t = await eu(e);
							r.value && (r.value.archiveFolderId = t.archiveFolderId), s.value = t.archiveFolderPath;
						} catch (e) {
							Ve(e, j("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						} finally {
							c.value = !1;
						}
					}
				}
				async function Ie() {
					c.value = !0, l.value = "";
					try {
						await tu(), r.value && (r.value.archiveFolderId = null, r.value.archiveEnabled = !1), s.value = null;
					} catch (e) {
						Ve(e, j("rechnungswerk", "Zielordner konnte nicht entfernt werden."));
					} finally {
						c.value = !1;
					}
				}
				async function Le() {
					let e;
					try {
						e = await vt(j("rechnungswerk", "Firmenlogo wählen")).setMultiSelect(!1).setMimeTypeFilter([
							"image/png",
							"image/jpeg",
							"image/gif"
						]).addButton({
							label: j("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof yt) return;
						Ve(e, j("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						me.value = !0, l.value = "";
						try {
							let t = await Zl(e);
							r.value && (r.value.logoFileId = t.logoFileId);
						} catch (e) {
							Ve(e, j("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						} finally {
							me.value = !1;
						}
					}
				}
				async function Re() {
					me.value = !0, l.value = "";
					try {
						await Ql(), r.value && (r.value.logoFileId = null);
					} catch (e) {
						Ve(e, j("rechnungswerk", "Logo konnte nicht entfernt werden."));
					} finally {
						me.value = !1;
					}
				}
				async function Be() {
					if (!r.value) return;
					l.value = "";
					let e = (r.value.numberFormat || "").trim();
					if (r.value.numberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(e)) {
						d(j("rechnungswerk", "Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
						return;
					}
					let t = w.value;
					if (t == null || !Number.isInteger(t) || t < 1) {
						d(j("rechnungswerk", "Die nächste Rechnungsnummer muss eine ganze Zahl ab 1 sein."));
						return;
					}
					if (t < ve.value) {
						d(j("rechnungswerk", "Die nächste Rechnungsnummer muss mindestens {min} sein, da bereits die Nummer {issued} vergeben wurde.", {
							min: ve.value,
							issued: _e.value
						}));
						return;
					}
					let i = (r.value.quoteNumberFormat || "").trim();
					if (r.value.quoteNumberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(i)) {
						d(j("rechnungswerk", "Bei jährlichem Angebots-Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
						return;
					}
					let a = (r.value.fileNameFormat || "").trim();
					if (a !== "" && !a.includes("{nummer}")) {
						d(j("rechnungswerk", "Das Dateinamen-Schema muss den Platzhalter {nummer} enthalten, damit Dateinamen eindeutig bleiben."));
						return;
					}
					let o = [
						{
							value: r.value.contactEmail,
							label: j("rechnungswerk", "Kontakt-E-Mail")
						},
						{
							value: r.value.smtpFromEmail,
							label: j("rechnungswerk", "Absender-E-Mail")
						},
						{
							value: r.value.datevUploadMail,
							label: j("rechnungswerk", "DATEV-Upload-Mail")
						}
					];
					for (let { value: e, label: t } of o) {
						let n = (e || "").trim();
						if (n !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)) {
							d(j("rechnungswerk", "Bitte eine gültige E-Mail-Adresse angeben ({field}).", { field: t }));
							return;
						}
					}
					le.value = !0;
					try {
						let e = { ...r.value };
						t > ve.value && (e.numberCounter = t - 1), delete e.logoFileId, delete e.archiveFolderId, N.value !== "" && (e.smtpPassword = N.value), fe.value !== "" && (e.imapPassword = fe.value);
						try {
							await n.save(e);
						} catch (e) {
							Ve(e, j("rechnungswerk", "Speichern der Einstellungen fehlgeschlagen."));
							return;
						}
						try {
							await Us({
								admins: oe.value.map((e) => e.id),
								users: se.value.map((e) => e.id)
							});
						} catch (e) {
							Ve(e, j("rechnungswerk", "Einstellungen gespeichert, aber die Zugriffsrechte konnten nicht gespeichert werden. Bitte erneut speichern."));
							return;
						}
						N.value = "", fe.value = "", z();
					} finally {
						le.value = !1;
					}
				}
				async function K() {
					if (r.value?.smtpHost) {
						pe.value = !0, P.value = "";
						try {
							await Jl({
								host: r.value.smtpHost,
								port: r.value.smtpPort ?? 587,
								security: r.value.smtpSecurity || "starttls",
								user: r.value.smtpUser ?? "",
								password: N.value
							}), F.value = !0, P.value = j("rechnungswerk", "Verbindung erfolgreich.");
						} catch (e) {
							F.value = !1, P.value = e.message ?? j("rechnungswerk", "Verbindung fehlgeschlagen.");
						} finally {
							pe.value = !1;
						}
					}
				}
				function Ve(e, t) {
					d(e.message ?? t), console.error("[rechnungswerk] settings:", e);
				}
				return (e, t) => (E(), q("div", yC, [
					Y("h2", bC, H(B(j)("rechnungswerk", "Einstellungen")), 1),
					Y("div", {
						ref_key: "errorAnchor",
						ref: u
					}, [l.value ? (E(), U(B(Q), {
						key: 0,
						type: "error",
						text: l.value
					}, null, 8, ["text"])) : L("", !0)], 512),
					r.value ? (E(), q("div", xC, [W(jb, {
						groups: i.value,
						modelValue: a.value,
						ariaLabel: B(j)("rechnungswerk", "Einstellungs-Navigation"),
						"onUpdate:modelValue": t[0] ||= (e) => a.value = e
					}, null, 8, [
						"groups",
						"modelValue",
						"ariaLabel"
					]), Y("div", SC, [
						S(Y("section", CC, [
							Y("h3", null, H(B(j)("rechnungswerk", "Firma")), 1),
							Y("label", wC, [Y("span", null, H(B(j)("rechnungswerk", "Firmenname")), 1), S(Y("input", {
								"onUpdate:modelValue": t[1] ||= (e) => r.value.companyName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.companyName]])]),
							Y("label", TC, [Y("span", null, H(B(j)("rechnungswerk", "Adresse")), 1), S(Y("textarea", {
								"onUpdate:modelValue": t[2] ||= (e) => r.value.companyAddress = e,
								class: "rw-input",
								rows: "3"
							}, null, 512), [[J, r.value.companyAddress]])]),
							Y("div", EC, [Y("label", DC, [Y("span", null, H(B(j)("rechnungswerk", "USt-IdNr.")), 1), S(Y("input", {
								"onUpdate:modelValue": t[3] ||= (e) => r.value.vatId = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.vatId]])]), Y("label", OC, [Y("span", null, H(B(j)("rechnungswerk", "Steuernummer")), 1), S(Y("input", {
								"onUpdate:modelValue": t[4] ||= (e) => r.value.taxNumber = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.taxNumber]])])]),
							Y("div", kC, [
								Y("label", AC, [Y("span", null, H(B(j)("rechnungswerk", "Ansprechpartner")), 1), S(Y("input", {
									"onUpdate:modelValue": t[5] ||= (e) => r.value.contactPerson = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[J, r.value.contactPerson]])]),
								Y("label", jC, [Y("span", null, H(B(j)("rechnungswerk", "Telefon")), 1), S(Y("input", {
									"onUpdate:modelValue": t[6] ||= (e) => r.value.contactPhone = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[J, r.value.contactPhone]])]),
								Y("label", MC, [Y("span", null, H(B(j)("rechnungswerk", "Kontakt-E-Mail")), 1), S(Y("input", {
									"onUpdate:modelValue": t[7] ||= (e) => r.value.contactEmail = e,
									class: "rw-input",
									type: "email"
								}, null, 512), [[J, r.value.contactEmail]])])
							]),
							Y("p", NC, H(B(j)("rechnungswerk", "Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).")), 1)
						], 512), [[x, a.value === "firma"]]),
						S(Y("section", PC, [
							Y("h3", null, H(B(j)("rechnungswerk", "Bankverbindung")), 1),
							Y("div", FC, [Y("label", IC, [Y("span", null, H(B(j)("rechnungswerk", "IBAN")), 1), S(Y("input", {
								"onUpdate:modelValue": t[8] ||= (e) => r.value.iban = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.iban]])]), Y("label", LC, [Y("span", null, H(B(j)("rechnungswerk", "BIC")), 1), S(Y("input", {
								"onUpdate:modelValue": t[9] ||= (e) => r.value.bic = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.bic]])])]),
							Y("label", RC, [Y("span", null, H(B(j)("rechnungswerk", "Bankname")), 1), S(Y("input", {
								"onUpdate:modelValue": t[10] ||= (e) => r.value.bankName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.bankName]])]),
							W(B(At), {
								type: "switch",
								modelValue: r.value.girocodeEnabled,
								disabled: !r.value.iban && !r.value.girocodeEnabled,
								"onUpdate:modelValue": t[11] ||= (e) => {
									r.value && (r.value.girocodeEnabled = e);
								}
							}, {
								default: g(() => [R(H(B(j)("rechnungswerk", "Girocode (Bezahl-QR-Code) auf Rechnungen anzeigen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							Y("p", zC, H(B(j)("rechnungswerk", "Druckt einen EPC-QR-Code neben die Bankverbindung: Kunden scannen ihn mit der Banking-App, Empfänger, Betrag und Verwendungszweck sind vorausgefüllt. Erscheint nur auf Rechnungen mit positivem Betrag, nicht auf Stornobelegen.")), 1)
						], 512), [[x, a.value === "bank"]]),
						S(Y("section", BC, [
							Y("h3", null, H(B(j)("rechnungswerk", "Branding")), 1),
							Y("div", VC, [Y("span", null, H(B(j)("rechnungswerk", "Akzentfarbe")), 1), Y("div", HC, [W(B(Eb), {
								modelValue: T.value,
								advancedFields: "",
								"onUpdate:modelValue": ae
							}, {
								default: g(() => [Y("button", {
									type: "button",
									class: "rw-accent__trigger",
									"aria-label": B(j)("rechnungswerk", "Akzentfarbe") + ": " + T.value.toUpperCase(),
									style: ze(D.value)
								}, H(T.value.toUpperCase()), 13, UC)]),
								_: 1
							}, 8, ["modelValue"]), r.value.accentColor ? (E(), U(B(I), {
								key: 0,
								variant: "tertiary",
								onClick: t[12] ||= (e) => r.value.accentColor = null
							}, {
								default: g(() => [R(H(B(j)("rechnungswerk", "Zurücksetzen")), 1)]),
								_: 1
							})) : L("", !0)])]),
							Y("div", WC, [
								Y("table", GC, [Y("thead", null, [Y("tr", { style: ze(D.value) }, [...t[42] ||= [
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
								Y("p", KC, H(B(j)("rechnungswerk", "So erscheint die Kopfzeile der Positionstabelle auf der Rechnung.")), 1),
								O.value ? (E(), q("p", qC, H(B(j)("rechnungswerk", "Auf dieser Farbe wäre weiße Schrift zu blass, deshalb steht sie schwarz auf der Rechnung. Die Farbe selbst bleibt unverändert.")), 1)) : L("", !0)
							]),
							Y("div", JC, [
								Y("span", null, H(B(j)("rechnungswerk", "Firmenlogo")), 1),
								Y("div", YC, [r.value.logoFileId ? (E(), q("img", {
									key: 0,
									src: he.value,
									alt: B(j)("rechnungswerk", "Firmenlogo"),
									class: "rw-logo__preview"
								}, null, 8, XC)) : (E(), q("span", ZC, H(B(j)("rechnungswerk", "Kein Logo gewählt")), 1)), Y("div", QC, [W(B(I), {
									disabled: me.value,
									onClick: Le
								}, {
									default: g(() => [R(H(r.value.logoFileId ? B(j)("rechnungswerk", "Logo ändern") : B(j)("rechnungswerk", "Logo wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]), r.value.logoFileId ? (E(), U(B(I), {
									key: 0,
									variant: "tertiary",
									disabled: me.value,
									onClick: Re
								}, {
									default: g(() => [R(H(B(j)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : L("", !0)])]),
								Y("p", $C, H(B(j)("rechnungswerk", "Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.")), 1)
							])
						], 512), [[x, a.value === "branding"]]),
						S(Y("section", ew, [
							Y("h3", null, H(B(j)("rechnungswerk", "Rechnungsnummer")), 1),
							Y("label", tw, [Y("span", null, H(B(j)("rechnungswerk", "Format")), 1), S(Y("input", {
								"onUpdate:modelValue": t[13] ||= (e) => r.value.numberFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.numberFormat]])]),
							Y("p", nw, [
								R(H(B(j)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[44] ||= Y("br", null, null, -1),
								R(" " + H(B(j)("rechnungswerk", "Vorschau: {preview}", { preview: ye.value })), 1)
							]),
							Y("label", rw, [Y("span", null, H(B(j)("rechnungswerk", "Nächste Rechnungsnummer")), 1), S(Y("input", {
								"onUpdate:modelValue": t[14] ||= (e) => w.value = e,
								class: "rw-input",
								type: "number",
								min: "1",
								step: "1"
							}, null, 512), [[
								J,
								w.value,
								void 0,
								{ number: !0 }
							]])]),
							Y("p", iw, H(B(j)("rechnungswerk", "Die laufende Nummer der nächsten Rechnung. Zum Einstieg in eine bestehende Nummernfolge hier den gewünschten Wert setzen. Nummern lassen sich nur vorwärts setzen, nie unter eine bereits vergebene.")), 1),
							Y("div", aw, [
								Y("span", null, H(B(j)("rechnungswerk", "Nummernkreis")), 1),
								W(B(At), {
									type: "radio",
									name: "rw-reset-mode",
									value: "yearly",
									modelValue: r.value.numberResetMode,
									"onUpdate:modelValue": Ae
								}, {
									default: g(() => [R(H(B(j)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								W(B(At), {
									type: "radio",
									name: "rw-reset-mode",
									value: "continuous",
									modelValue: r.value.numberResetMode,
									"onUpdate:modelValue": Ae
								}, {
									default: g(() => [R(H(B(j)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							Y("p", ow, H(B(j)("rechnungswerk", "Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.")), 1)
						], 512), [[x, a.value === "rechnungsnummer"]]),
						S(Y("section", sw, [
							Y("h3", null, H(B(j)("rechnungswerk", "Angebotsnummer")), 1),
							Y("label", cw, [Y("span", null, H(B(j)("rechnungswerk", "Format")), 1), S(Y("input", {
								"onUpdate:modelValue": t[15] ||= (e) => r.value.quoteNumberFormat = e,
								class: "rw-input",
								type: "text",
								placeholder: "AN-{YYYY}-{####}"
							}, null, 512), [[J, r.value.quoteNumberFormat]])]),
							Y("p", lw, [
								R(H(B(j)("rechnungswerk", "Eigener, von den Rechnungen unabhängiger Nummernkreis. Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[45] ||= Y("br", null, null, -1),
								R(" " + H(B(j)("rechnungswerk", "Vorschau: {preview}", { preview: be.value })), 1)
							]),
							Y("div", uw, [
								Y("span", null, H(B(j)("rechnungswerk", "Nummernkreis")), 1),
								W(B(At), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "yearly",
									modelValue: r.value.quoteNumberResetMode,
									"onUpdate:modelValue": Ne
								}, {
									default: g(() => [R(H(B(j)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								W(B(At), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "continuous",
									modelValue: r.value.quoteNumberResetMode,
									"onUpdate:modelValue": Ne
								}, {
									default: g(() => [R(H(B(j)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							Y("p", dw, H(B(j)("rechnungswerk", "Angebote haben keine gesetzliche Nummernkreis-Pflicht; Lücken sind erlaubt. Bei „Jährlich zurücksetzen“ muss das Format dennoch eine Jahreskomponente enthalten.")), 1)
						], 512), [[x, a.value === "angebotsnummer"]]),
						S(Y("section", fw, [
							Y("h3", null, H(B(j)("rechnungswerk", "PDF-Dateiname")), 1),
							Y("label", pw, [Y("span", null, H(B(j)("rechnungswerk", "Schema")), 1), S(Y("input", {
								"onUpdate:modelValue": t[16] ||= (e) => r.value.fileNameFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.fileNameFormat]])]),
							Y("p", mw, [
								R(H(B(j)("rechnungswerk", "Gilt für Download, Kundenmail und DATEV-Mail. Platzhalter: {nummer} Rechnungsnummer, {YYYY}/{MM}/{DD} Rechnungsdatum, {kunde} Kundenname, {typ} Rechnung/Storno. {nummer} ist Pflicht.")) + " ", 1),
								t[46] ||= Y("br", null, null, -1),
								R(" " + H(B(j)("rechnungswerk", "Vorschau: {preview}", { preview: xe.value })), 1)
							])
						], 512), [[x, a.value === "dateiname"]]),
						S(Y("section", hw, [
							Y("h3", null, H(B(j)("rechnungswerk", "Steuer")), 1),
							W(B(At), {
								type: "switch",
								modelValue: r.value.smallBusiness,
								"onUpdate:modelValue": we
							}, {
								default: g(() => [R(H(B(j)("rechnungswerk", "Kleinunternehmer nach §19 UStG (kein USt-Ausweis)")), 1)]),
								_: 1
							}, 8, ["modelValue"]),
							r.value.smallBusiness ? (E(), q("label", gw, [
								Y("span", null, H(B(j)("rechnungswerk", "Hinweistext auf der Rechnung (§ 19 UStG)")), 1),
								S(Y("textarea", {
									"onUpdate:modelValue": t[17] ||= (e) => r.value.smallBusinessNote = e,
									class: "rw-input",
									rows: "2",
									placeholder: B(ou)
								}, null, 8, _w), [[J, r.value.smallBusinessNote]]),
								Y("span", vw, H(B(j)("rechnungswerk", "Erscheint bei aktiviertem Kleinunternehmer-Status auf der Rechnung. Leer lassen für den Standardtext.")), 1)
							])) : L("", !0),
							r.value.smallBusiness ? L("", !0) : (E(), q("label", yw, [Y("span", null, H(B(j)("rechnungswerk", "Standard-USt-Satz")), 1), S(Y("select", {
								"onUpdate:modelValue": t[18] ||= (e) => r.value.defaultTaxRateBp = e,
								class: "rw-input"
							}, [(E(!0), q(k, null, C(B(au), (e) => (E(), q("option", {
								key: e,
								value: e
							}, H(B(Su)(e)), 9, bw))), 128))], 512), [[
								re,
								r.value.defaultTaxRateBp,
								void 0,
								{ number: !0 }
							]])]))
						], 512), [[x, a.value === "steuer"]]),
						S(Y("section", xw, [
							Y("h3", null, H(B(j)("rechnungswerk", "Zahlung")), 1),
							Y("label", Sw, [Y("span", null, H(B(j)("rechnungswerk", "Standard-Zahlungsziel (Tage)")), 1), S(Y("input", {
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
							Y("p", Cw, H(B(j)("rechnungswerk", "Wird bei neuen Rechnungen als Zahlungsziel vorbelegt. Leer lassen für kein Standardziel.")), 1)
						], 512), [[x, a.value === "zahlung"]]),
						S(Y("section", ww, [
							Y("h3", null, H(B(j)("rechnungswerk", "Versand")), 1),
							Y("label", Tw, [Y("span", null, H(B(j)("rechnungswerk", "DATEV-Upload-Mail")), 1), S(Y("input", {
								"onUpdate:modelValue": t[20] ||= (e) => r.value.datevUploadMail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[J, r.value.datevUploadMail]])]),
							W(B(At), {
								type: "switch",
								modelValue: r.value.datevAutoSend,
								disabled: !r.value.datevUploadMail,
								"onUpdate:modelValue": Ee
							}, {
								default: g(() => [R(H(B(j)("rechnungswerk", "E-Rechnung beim Festschreiben automatisch an DATEV senden")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							Y("p", Ew, H(B(j)("rechnungswerk", "Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.")), 1),
							Y("div", Dw, [Y("label", Ow, [Y("span", null, H(B(j)("rechnungswerk", "Absender-Name")), 1), S(Y("input", {
								"onUpdate:modelValue": t[21] ||= (e) => r.value.smtpFromName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.smtpFromName]])]), Y("label", kw, [Y("span", null, H(B(j)("rechnungswerk", "Absender-E-Mail")), 1), S(Y("input", {
								"onUpdate:modelValue": t[22] ||= (e) => r.value.smtpFromEmail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[J, r.value.smtpFromEmail]])])])
						], 512), [[x, a.value === "versand"]]),
						S(Y("section", Aw, [
							Y("h3", null, H(B(j)("rechnungswerk", "Ablage in Nextcloud")), 1),
							Y("div", jw, [Y("span", null, H(B(j)("rechnungswerk", "Zielordner")), 1), Y("div", Mw, [
								s.value ? (E(), q("span", Nw, H(s.value), 1)) : (E(), q("span", Pw, H(B(j)("rechnungswerk", "Kein Ordner gewählt")), 1)),
								W(B(I), {
									disabled: c.value,
									onClick: Fe
								}, {
									default: g(() => [R(H(s.value ? B(j)("rechnungswerk", "Ordner ändern") : B(j)("rechnungswerk", "Ordner wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]),
								s.value ? (E(), U(B(I), {
									key: 2,
									variant: "tertiary",
									disabled: c.value,
									onClick: Ie
								}, {
									default: g(() => [R(H(B(j)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : L("", !0)
							])]),
							W(B(At), {
								type: "switch",
								modelValue: r.value.archiveEnabled,
								disabled: !r.value.archiveFolderId,
								"onUpdate:modelValue": Oe
							}, {
								default: g(() => [R(H(B(j)("rechnungswerk", "ZUGFeRD-PDF beim Festschreiben automatisch im Zielordner ablegen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							Y("label", Fw, [Y("span", null, H(B(j)("rechnungswerk", "Unterordner (optional)")), 1), S(Y("input", {
								"onUpdate:modelValue": t[23] ||= (e) => r.value.archiveSubfolder = e,
								class: "rw-input",
								type: "text",
								placeholder: B(j)("rechnungswerk", "z. B. {YYYY}")
							}, null, 8, Iw), [[J, r.value.archiveSubfolder]])]),
							Y("p", Lw, [
								R(H(B(j)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {MM} Monat, {DD} Tag (Rechnungsdatum). Unterordner werden bei Bedarf angelegt. Vorhandene Dateien werden nie überschrieben.")) + " ", 1),
								t[47] ||= Y("br", null, null, -1),
								R(" " + H(B(j)("rechnungswerk", "Komfort-Ablage für den Team-Zugriff. Kein revisionssicheres Archiv, die GoBD-Archivierung erfolgt über DATEV bzw. Steuerberater.")), 1)
							])
						], 512), [[x, a.value === "ablage"]]),
						S(Y("section", Rw, [
							Y("h3", null, H(B(j)("rechnungswerk", "Eigenes SMTP-Konto (optional)")), 1),
							Y("p", zw, H(B(j)("rechnungswerk", "Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).")), 1),
							Y("div", Bw, [
								Y("label", Vw, [Y("span", null, H(B(j)("rechnungswerk", "Server (Host)")), 1), S(Y("input", {
									"onUpdate:modelValue": t[24] ||= (e) => r.value.smtpHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "smtp.example.com"
								}, null, 512), [[J, r.value.smtpHost]])]),
								Y("label", Hw, [Y("span", null, H(B(j)("rechnungswerk", "Port")), 1), S(Y("input", {
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
								Y("label", Uw, [Y("span", null, H(B(j)("rechnungswerk", "Verschlüsselung")), 1), S(Y("select", {
									"onUpdate:modelValue": t[26] ||= (e) => r.value.smtpSecurity = e,
									class: "rw-input"
								}, [
									t[48] ||= Y("option", { value: "starttls" }, "STARTTLS", -1),
									t[49] ||= Y("option", { value: "ssl" }, "SSL/TLS", -1),
									Y("option", Ww, H(B(j)("rechnungswerk", "Keine")), 1)
								], 512), [[re, r.value.smtpSecurity]])])
							]),
							Y("div", Gw, [Y("label", Kw, [Y("span", null, H(B(j)("rechnungswerk", "Benutzer")), 1), S(Y("input", {
								"onUpdate:modelValue": t[27] ||= (e) => r.value.smtpUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.smtpUser]])]), Y("label", qw, [Y("span", null, H(B(j)("rechnungswerk", "Passwort")), 1), S(Y("input", {
								"onUpdate:modelValue": t[28] ||= (e) => N.value = e,
								class: "rw-input",
								type: "password",
								placeholder: r.value.smtpPasswordSet ? B(j)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, Jw), [[J, N.value]])])]),
							Y("div", Yw, [W(B(I), {
								disabled: !r.value.smtpHost || pe.value,
								onClick: K
							}, {
								default: g(() => [R(H(B(j)("rechnungswerk", "Verbindung testen")), 1)]),
								_: 1
							}, 8, ["disabled"]), P.value ? (E(), q("span", {
								key: 0,
								class: V(["smtp-test__result", F.value ? "rw-ok" : "rw-err"])
							}, H(P.value), 3)) : L("", !0)])
						], 512), [[x, a.value === "smtp"]]),
						S(Y("section", Xw, [
							Y("h3", null, H(B(j)("rechnungswerk", "DATEV-Rückmeldung (IMAP, optional)")), 1),
							Y("p", Zw, H(B(j)("rechnungswerk", "DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.")), 1),
							Y("div", Qw, [
								Y("label", $w, [Y("span", null, H(B(j)("rechnungswerk", "Server (Host)")), 1), S(Y("input", {
									"onUpdate:modelValue": t[29] ||= (e) => r.value.imapHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "imap.example.com"
								}, null, 512), [[J, r.value.imapHost]])]),
								Y("label", eT, [Y("span", null, H(B(j)("rechnungswerk", "Port")), 1), S(Y("input", {
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
								Y("label", tT, [Y("span", null, H(B(j)("rechnungswerk", "Verschlüsselung")), 1), S(Y("select", {
									"onUpdate:modelValue": t[31] ||= (e) => r.value.imapSecurity = e,
									class: "rw-input"
								}, [...t[50] ||= [
									Y("option", { value: "ssl" }, "SSL/TLS", -1),
									Y("option", { value: "starttls" }, "STARTTLS", -1),
									Y("option", { value: "tls" }, "TLS", -1)
								]], 512), [[re, r.value.imapSecurity]])])
							]),
							Y("div", nT, [Y("label", rT, [Y("span", null, H(B(j)("rechnungswerk", "Benutzer")), 1), S(Y("input", {
								"onUpdate:modelValue": t[32] ||= (e) => r.value.imapUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[J, r.value.imapUser]])]), Y("label", iT, [Y("span", null, H(B(j)("rechnungswerk", "Passwort")), 1), S(Y("input", {
								"onUpdate:modelValue": t[33] ||= (e) => fe.value = e,
								class: "rw-input",
								type: "password",
								placeholder: r.value.imapPasswordSet ? B(j)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, aT), [[J, fe.value]])])]),
							W(B(At), {
								modelValue: r.value.imapCleanup,
								disabled: !r.value.imapHost,
								"onUpdate:modelValue": t[34] ||= (e) => r.value.imapCleanup = e
							}, {
								default: g(() => [R(H(B(j)("rechnungswerk", "Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"])
						], 512), [[x, a.value === "datev"]]),
						S(Y("section", oT, [
							Y("h3", null, H(B(j)("rechnungswerk", "Standardtexte")), 1),
							Y("p", sT, H(B(j)("rechnungswerk", "Anrede-, Einleitungs- und Schlusstexte werden jetzt als Textbausteine verwaltet – getrennt für Rechnungen und Angebote, mit mehreren Vorlagen je Textbereich.")), 1),
							W(B(I), { onClick: o }, {
								icon: g(() => [W(so, { size: 20 })]),
								default: g(() => [R(" " + H(B(j)("rechnungswerk", "Textbausteine verwalten")), 1)]),
								_: 1
							})
						], 512), [[x, a.value === "texte"]]),
						S(Y("section", cT, [
							Y("h3", null, H(B(j)("rechnungswerk", "Zugriff & Administration")), 1),
							Y("p", lT, H(B(j)("rechnungswerk", "Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.")), 1),
							Y("div", uT, [
								Y("span", dT, H(B(j)("rechnungswerk", "App-Administratoren")), 1),
								Y("p", fT, H(B(j)("rechnungswerk", "Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.")), 1),
								W(B(Ct), {
									modelValue: oe.value,
									"onUpdate:modelValue": t[35] ||= (e) => oe.value = e,
									options: A.value,
									loading: M.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: B(j)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: Ce
								}, {
									"no-options": g(() => [R(H(ge.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							]),
							Y("div", pT, [
								Y("span", mT, H(B(j)("rechnungswerk", "Berechtigte Nutzer")), 1),
								Y("p", hT, H(B(j)("rechnungswerk", "Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.")), 1),
								W(B(Ct), {
									modelValue: se.value,
									"onUpdate:modelValue": t[36] ||= (e) => se.value = e,
									options: A.value,
									loading: M.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: B(j)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: Ce
								}, {
									"no-options": g(() => [R(H(ge.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							])
						], 512), [[x, a.value === "zugriff"]]),
						S(Y("section", gT, [Y("h3", null, H(B(j)("rechnungswerk", "WerkPlus")), 1), W(dC)], 512), [[x, a.value === "werkplus"]]),
						S(Y("section", _T, [Y("h3", null, H(B(j)("rechnungswerk", "API-Schlüssel")), 1), W(VS)], 512), [[x, a.value === "apikeys"]]),
						S(Y("div", vT, [W(B(I), {
							variant: "primary",
							disabled: B(n).saving || le.value,
							onClick: Be
						}, {
							icon: g(() => [W(Tv, { size: 20 })]),
							default: g(() => [R(" " + H(B(j)("rechnungswerk", "Speichern")), 1)]),
							_: 1
						}, 8, ["disabled"])], 512), [[x, a.value !== "werkplus"]])
					])])) : L("", !0),
					W(ip, {
						open: f.value,
						name: B(j)("rechnungswerk", "Kleinunternehmer §19 aktivieren"),
						message: B(j)("rechnungswerk", "Damit werden künftige Rechnungen ohne Umsatzsteuer ausgewiesen (§19 UStG). Bestehende festgeschriebene Rechnungen bleiben unverändert. Fortfahren?"),
						confirmLabel: B(j)("rechnungswerk", "Aktivieren"),
						onClose: t[37] ||= (e) => f.value = !1,
						onConfirm: Te
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					W(ip, {
						open: p.value,
						name: B(j)("rechnungswerk", "Automatischen DATEV-Versand aktivieren"),
						message: B(j)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben automatisch eine E-Mail mit der E-Rechnung an die hinterlegte DATEV-Upload-Mail gesendet. Fortfahren?"),
						confirmLabel: B(j)("rechnungswerk", "Aktivieren"),
						onClose: t[38] ||= (e) => p.value = !1,
						onConfirm: De
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					W(ip, {
						open: m.value,
						name: B(j)("rechnungswerk", "Automatische Ablage aktivieren"),
						message: B(j)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben die ZUGFeRD-PDF automatisch im gewählten Ordner abgelegt. Alle Personen mit Zugriff auf den Ordner können die Rechnungen sehen. Fortfahren?"),
						confirmLabel: B(j)("rechnungswerk", "Aktivieren"),
						onClose: t[39] ||= (e) => m.value = !1,
						onConfirm: ke
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					W(ip, {
						open: h.value,
						name: B(j)("rechnungswerk", "Nummernkreis auf „Fortlaufend“ stellen"),
						message: B(j)("rechnungswerk", "Der Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Der Modus wirkt sich auf alle künftig festgeschriebenen Rechnungen aus. Fortfahren?"),
						confirmLabel: B(j)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: t[40] ||= (e) => h.value = !1,
						onConfirm: Me
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					W(ip, {
						open: ee.value,
						name: B(j)("rechnungswerk", "Angebots-Nummernkreis auf „Fortlaufend“ stellen"),
						message: B(j)("rechnungswerk", "Der Angebots-Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Fortfahren?"),
						confirmLabel: B(j)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: t[41] ||= (e) => ee.value = !1,
						onConfirm: Pe
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					])
				]));
			}
		}), [["__scopeId", "data-v-2dfca1a7"]])
	}
], bT = Xr({
	history: vr(),
	routes: yT
});
//#endregion
//#region src/main.js
document.addEventListener("DOMContentLoaded", () => {
	let e = de(Ks);
	e.use(Jt()), e.use(bT), e.use(lt, { themes: { tooltip: { delay: {
		show: 100,
		hide: 0
	} } } }), e.mount(".app-rechnungswerk");
});
//#endregion
export { Fv as n, Db as t };
