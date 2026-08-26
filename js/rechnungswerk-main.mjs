import { $t as e, At as t, Cn as n, Ct as r, D as i, Dt as a, Et as o, Ft as s, Gt as c, Ht as l, It as u, Jt as d, L as f, Lt as p, Mt as m, Nt as h, Ot as g, Qt as _, Sn as v, T as y, Tt as b, Ut as x, Vt as S, Wt as C, Xt as ee, Yt as te, Zt as w, _n as T, _t as E, an as D, at as O, bn as k, bt as A, cn as j, ct as M, dn as N, dt as P, en as F, et as ne, f as re, fn as ie, gt as I, h as L, hn as R, ht as z, i as B, in as V, it as ae, jt as oe, k as se, kt as ce, ln as le, m as H, mn as ue, mt as U, on as de, ot as W, p as fe, qt as pe, r as me, rn as he, rt as ge, s as _e, sn as ve, st as ye, t as be, tn as G, ut as K, v as xe, vt as q, wt as Se, xn as Ce, xt as J, yn as Y, zt as we } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { b as Te, f as Ee, g as De, h as Oe, m as ke, n as Ae, p as je, r as Me, t as Ne, u as Pe, y as Fe } from "./NcPopover-B87bEPLq-Bfc7fZbF.chunk.mjs";
import { A as Ie, B as Le, D as Re, E as X, F as ze, H as Be, I as Ve, L as He, M as Ue, N as We, O as Z, P as Ge, R as Ke, T as qe, V as Je, a as Ye, b as Xe, j as Ze, k as Qe, x as $e, z as et } from "./mdi-CpchYUUV-BlQjFBKG.chunk.mjs";
import { _ as tt, b as nt, f as rt, g as it, n as at, p as ot, t as st, v as ct, w as lt, y as ut } from "./chunks-tk4b0tDJ.chunk.mjs";
import { n as dt, r as ft, t as pt } from "./NcSelect--kERLlBK-CgY601vH.chunk.mjs";
import { a as mt, i as ht, n as gt, o as _t, t as vt } from "./NcActions-BW7oJgs-.chunk.mjs";
import { t as yt } from "./NcLoadingIcon-BOVpFVQz-B0B1cMOR.chunk.mjs";
import { t as bt } from "./NcCheckboxRadioSwitch-b1krvMyn.chunk.mjs";
import "./NcSelect-_-6PKSP3.chunk.mjs";
import { n as xt } from "./NcColorPicker-Bn1Xhz-9.chunk.mjs";
//#region node_modules/pinia/dist/pinia.js
var St = typeof window < "u", Ct, wt = (e) => Ct = e, Tt = Symbol();
function Et(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Dt = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Ot(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function kt(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Pt(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function At(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function jt(e) {
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
var Mt = typeof navigator == "object" ? navigator : { userAgent: "" }, Nt = /Macintosh/.test(Mt.userAgent) && /AppleWebKit/.test(Mt.userAgent) && !/Safari/.test(Mt.userAgent), Pt = St ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Nt ? Ft : "msSaveOrOpenBlob" in Mt ? It : Lt : () => {};
function Ft(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? jt(r) : At(r.href) ? kt(e, t, n) : (r.target = "_blank", jt(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		jt(r);
	}, 0));
}
function It(e, t = "download", n) {
	if (typeof e == "string") {
		if (At(e)) kt(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				jt(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Ot(e, n), t);
}
function Lt(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return kt(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Dt.HTMLElement)) || "safari" in Dt, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Nt) && typeof FileReader < "u") {
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
var { assign: Rt } = Object;
function zt() {
	let e = he(!0), t = e.run(() => N({})), n = [], r = [], i = ve({
		install(e) {
			wt(i), i._a = e, e.provide(Tt, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Bt = () => {};
function Vt(e, t, n, r = Bt) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && V() && j(i), i;
}
function Ht(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Ut = (e) => e(), Wt = Symbol(), Gt = Symbol();
function Kt(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!Object.hasOwn(t, n)) continue;
		let r = t[n], i = e[n];
		e[n] = Et(i) && Et(r) && Object.hasOwn(e, n) && !de(r) && !D(r) ? Kt(i, r) : r;
	}
	return e;
}
var qt = Symbol();
function Jt(e) {
	return !e || typeof e != "object" || !Object.hasOwn(e, qt);
}
var { assign: Yt } = Object;
function Xt(e) {
	return !!(de(e) && e.effect);
}
function Zt(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), Yt(T(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = ve(U(() => {
			wt(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Qt(e, l, t, n, r, !0), c;
}
function Qt(e, t, n = {}, r, i, a) {
	let o, s = Yt({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: "patch function",
			storeId: e,
			events: p
		}) : (Kt(r.state.value[e], t), n = {
			type: "patch object",
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		oe().then(() => {
			h === i && (l = !0);
		}), u = !0, Ht(d, n, r.state.value[e]);
	}
	let v = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Yt(e, t);
		});
	} : Bt;
	function y() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let b = (t, n = "") => {
		if (Wt in t) return t[Gt] = n, t;
		let i = function() {
			wt(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Ht(f, {
				args: n,
				name: i[Gt],
				store: S,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : S, n);
			} catch (e) {
				throw Ht(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Ht(a, e), e)).catch((e) => (Ht(o, e), Promise.reject(e))) : (Ht(a, l), l);
		};
		return i[Wt] = !0, i[Gt] = n, i;
	}, x = {
		_p: r,
		$id: e,
		$onAction: Vt.bind(null, f),
		$patch: g,
		$reset: v,
		$subscribe(t, n = {}) {
			if (d.has(t)) return Bt;
			let i = Vt(d, t, n.detached, () => a()), a = o.run(() => _(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: "direct",
					events: p
				}, r);
			}, Yt({}, c, n)));
			return i;
		},
		$dispose: y
	}, S = le(x);
	r._s.set(e, S);
	let C = (r._a && r._a.runWithContext || Ut)(() => r._e.run(() => (o = he()).run(() => t({ action: b }))));
	for (let t in C) {
		let n = C[t];
		de(n) && !Xt(n) || D(n) ? a || (m && Jt(n) && (de(n) ? n.value = m[t] : Kt(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (C[t] = b(n, t), s.actions[t] = n);
	}
	return Yt(S, C), Yt(R(S), C), Object.defineProperty(S, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Yt(t, e);
			});
		}
	}), r._p.forEach((e) => {
		let t = o.run(() => e({
			store: S,
			app: r._a,
			pinia: r,
			options: s
		}));
		Yt(S, t);
	}), m && a && n.hydrate && n.hydrate(S.$state, m), l = !0, u = !0, S;
}
function $t(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function o(n, o) {
		let s = a();
		return n ||= s ? g(Tt, null) : null, n && wt(n), n = Ct, n._s.has(e) || (i ? Qt(e, t, r, n) : Zt(e, r, n)), n._s.get(e);
	}
	return o.$id = e, o;
}
//#endregion
//#region node_modules/vue-router/dist/devtools-Bpr7ZAVB.js
var en = typeof document < "u", tn = /#/g, nn = /&/g, rn = /\//g, an = /=/g, on = /\?/g, sn = /\+/g, cn = /%5B/g, ln = /%5D/g, un = /%5E/g, dn = /%60/g, fn = /%7B/g, pn = /%7C/g, mn = /%7D/g, hn = /%20/g;
function gn(e) {
	return e == null ? "" : encodeURI("" + e).replace(pn, "|").replace(cn, "[").replace(ln, "]");
}
function _n(e) {
	return gn(e).replace(fn, "{").replace(mn, "}").replace(un, "^");
}
function vn(e) {
	return gn(e).replace(sn, "%2B").replace(hn, "+").replace(tn, "%23").replace(nn, "%26").replace(dn, "`").replace(fn, "{").replace(mn, "}").replace(un, "^");
}
function yn(e) {
	return vn(e).replace(an, "%3D");
}
function bn(e) {
	return gn(e).replace(tn, "%23").replace(on, "%3F");
}
function xn(e) {
	return bn(e).replace(rn, "%2F");
}
function Sn(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var Cn = /\/$/, wn = (e) => e.replace(Cn, "");
function Tn(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = Nn(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Sn(o)
	};
}
function En(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Dn(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function On(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && kn(t.matched[r], n.matched[i]) && An(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function kn(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function An(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!jn(e[n], t[n])) return !1;
	return !0;
}
function jn(e, t) {
	return Ie(e) ? Mn(e, t) : Ie(t) ? Mn(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Mn(e, t) {
	return Ie(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function Nn(e, t) {
	if (e.startsWith("/")) return e;
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
var Pn = {
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
function Fn(e) {
	if (!e) {
		if (en) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), wn(e);
}
var In = /^[^#]+#/;
function Ln(e, t) {
	return e.replace(In, "#") + t;
}
function Rn(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var zn = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function Bn(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = Rn(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Vn(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var Hn = /* @__PURE__ */ new Map();
function Un(e, t) {
	Hn.set(e, t);
}
function Wn(e) {
	let t = Hn.get(e);
	return Hn.delete(e), t;
}
function Gn(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function Kn(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function qn(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(sn, " "), i = r.indexOf("="), a = Sn(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Sn(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			Ie(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function Jn(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (n = yn(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(Ie(r) ? r.map((e) => e && vn(e)) : [r && vn(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function Yn(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = Ie(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function Xn() {
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
function Zn(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(Qe(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : Gn(e) ? c(Qe(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function Qn(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (!(t !== "beforeRouteEnter" && !o.instances[e])) {
			if (We(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(Zn(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Ze(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && Zn(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function $n(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => kn(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => kn(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
var er = () => location.protocol + "//" + location.host;
function tr(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Dn(n, "");
	}
	return Dn(n, e) + r + i;
}
function nr(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = tr(e, location), c = n.value, l = t.value, u = 0;
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
		if (document.visibilityState === "hidden") {
			let { history: e } = window;
			if (!e.state) return;
			e.replaceState(Z({}, e.state, { scroll: zn() }), "");
		}
	}
	function d() {
		for (let e of a) e();
		a = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u);
	}
	return window.addEventListener("popstate", s), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
		pauseListeners: c,
		listen: l,
		destroy: d
	};
}
function rr(e, t, n, r = !1, i = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: i ? zn() : null
	};
}
function ir(e) {
	let { history: t, location: n } = window, r = { value: tr(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : er() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			console.error(e), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, Z({}, t.state, rr(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = Z({}, i.value, t.state, {
			forward: e,
			scroll: zn()
		});
		a(o.current, o, !0), a(e, Z({}, rr(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function ar(e) {
	e = Fn(e);
	let t = ir(e), n = nr(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = Z({
		location: "",
		base: e,
		go: r,
		createHref: Ln.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function or(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), ar(e);
}
var sr = {
	type: 0,
	value: ""
}, cr = /[a-zA-Z0-9_]/;
function lr(e) {
	if (!e) return [[]];
	if (e === "/") return [[sr]];
	if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
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
			c === "(" ? n = 2 : cr.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
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
var ur = "[^/]+?", dr = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, fr = /[.+*?^${}()[\]/\\]/g;
function pr(e, t) {
	let n = Z({}, dr, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(fr, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || ur;
				if (u !== ur) {
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
function mr(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function hr(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = mr(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (gr(r)) return 1;
		if (gr(i)) return -1;
	}
	return i.length - r.length;
}
function gr(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var _r = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function vr(e, t, n) {
	let r = pr(lr(e.path), n), i = Z(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function yr(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = ze(_r, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = xr(e);
		s.aliasOf = r && r.record;
		let l = ze(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(xr(Z({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let d, f;
		for (let t of u) {
			let { path: u } = t;
			if (n && u[0] !== "/") {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (d = vr(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !Cr(d) && o(e.name)), Dr(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Ve;
	}
	function o(e) {
		if (Kn(e)) {
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
		let t = Tr(e, n);
		n.splice(t, 0, e), e.record.name && !Cr(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw Qe(1, { location: e });
			s = i.record.name, a = Z(br(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && br(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw Qe(1, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = Z({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: wr(c)
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
function br(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function xr(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: Sr(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Sr(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function Cr(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function wr(e) {
	return e.reduce((e, t) => Z(e, t.meta), {});
}
function Tr(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		hr(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = Er(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function Er(e) {
	let t = e;
	for (; t = t.parent;) if (Dr(t) && hr(e, t) === 0) return t;
}
function Dr({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Or(e) {
	let t = g(Ke), n = g(He), r = U(() => {
		let n = Y(e.to);
		return t.resolve(n);
	}), i = U(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(kn.bind(null, i));
		if (o > -1) return o;
		let s = Nr(e[t - 2]);
		return t > 1 && Nr(i) === s && a[a.length - 1].path !== s ? a.findIndex(kn.bind(null, e[t - 2])) : o;
	}), a = U(() => i.value > -1 && Mr(n.params, r.value.params)), o = U(() => i.value > -1 && i.value === n.matched.length - 1 && An(n.params, r.value.params));
	function s(n = {}) {
		if (jr(n)) {
			let n = t[Y(e.replace) ? "replace" : "push"](Y(e.to)).catch(Ve);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	return {
		route: r,
		href: U(() => r.value.href),
		isActive: a,
		isExactActive: o,
		navigate: s
	};
}
function kr(e) {
	return e.length === 1 ? e[0] : e;
}
var Ar = /* @__PURE__ */ r({
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
	useLink: Or,
	setup(e, { slots: t }) {
		let n = le(Or(e)), { options: r } = g(Ke), i = U(() => ({
			[Pr(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Pr(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && kr(t.default(n));
			return e.custom ? r : o("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function jr(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Mr(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!Ie(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function Nr(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Pr = (e, t, n) => e ?? t ?? n, Fr = /*#__PURE__*/ r({
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
		let r = g(et), i = U(() => e.route || r.value), a = g(Be, 0), s = U(() => {
			let e = Y(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), c = U(() => i.value.matched[s.value]);
		we(Be, U(() => s.value + 1)), we(Ge, c), we(et, i);
		let l = N();
		return _(() => [
			l.value,
			c.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !kn(t, i) || !r) && (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, s = c.value, u = s && s.components[a];
			if (!u) return Ir(n.default, {
				Component: u,
				route: r
			});
			let d = s.props[a], f = d ? d === !0 ? r.params : typeof d == "function" ? d(r) : d : null, p = o(u, Z({}, f, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (s.instances[a] = null);
				},
				ref: l
			}));
			return Ir(n.default, {
				Component: p,
				route: r
			}) || p;
		};
	}
});
function Ir(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Lr = Fr;
function Rr(e) {
	let t = yr(e.routes, e), n = e.parseQuery || qn, r = e.stringifyQuery || Jn, i = e.history, a = Xn(), o = Xn(), s = Xn(), c = ue(Pn), l = Pn;
	en && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = Re.bind(null, (e) => "" + e), d = Re.bind(null, xn), f = Re.bind(null, Sn);
	function p(e, n) {
		let r, i;
		return Kn(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
	}
	function m(e) {
		let n = t.getRecordMatcher(e);
		n && t.removeRoute(n);
	}
	function h() {
		return t.getRoutes().map((e) => e.record);
	}
	function g(e) {
		return !!t.getRecordMatcher(e);
	}
	function _(e, a) {
		if (a = Z({}, a || c.value), typeof e == "string") {
			let r = Tn(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return Z(r, o, {
				params: f(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = Z({}, e, { path: Tn(n, e.path, a.path).path });
		else {
			let t = Z({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = Z({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = En(r, Z({}, e, {
			hash: _n(l),
			path: s.path
		})), m = i.createHref(p);
		return Z({
			fullPath: p,
			hash: l,
			query: r === Jn ? Yn(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? Tn(n, e, c.value.path) : Z({}, e);
	}
	function y(e, t) {
		if (l !== e) return Qe(8, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return C(e);
	}
	function x(e) {
		return b(Z(v(e), { replace: !0 }));
	}
	function S(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = v(i) : { path: i }, i.params = {}), Z({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function C(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = S(n, i);
		if (u) return C(Z(v(u), {
			state: typeof u == "object" ? Z({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && On(r, i, n) && (f = Qe(16, {
			to: d,
			from: i
		}), F(i, i, !0, !1)), (f ? Promise.resolve(f) : w(d, i)).catch((e) => Ue(e) ? Ue(e, 2) ? e : P(e) : M(e, d, i)).then((e) => {
			if (e) {
				if (Ue(e, 2)) return C(Z({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? Z({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = E(d, i, !0, s, a);
			return T(d, i, e), e;
		});
	}
	function ee(e, t) {
		let n = y(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function te(e) {
		let t = I.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function w(e, t) {
		let n, [r, i, s] = $n(e, t);
		n = Qn(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(Zn(r, e, t));
		});
		let c = ee.bind(null, e, t);
		return n.push(c), R(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(Zn(r, e, t));
			return n.push(c), R(n);
		}).then(() => {
			n = Qn(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(Zn(r, e, t));
			});
			return n.push(c), R(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (Ie(r.beforeEnter)) for (let i of r.beforeEnter) n.push(Zn(i, e, t));
				else n.push(Zn(r.beforeEnter, e, t));
			}
			return n.push(c), R(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Qn(s, "beforeRouteEnter", e, t, te), n.push(c), R(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(Zn(r, e, t));
			return n.push(c), R(n);
		}).catch((e) => Ue(e, 8) ? e : Promise.reject(e));
	}
	function T(e, t, n) {
		s.list().forEach((r) => te(() => r(e, t, n)));
	}
	function E(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === Pn, l = en ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, Z({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, F(e, t, n, s), P();
	}
	let D;
	function O() {
		D ||= i.listen((e, t, n) => {
			if (!L.listening) return;
			let r = _(e), a = S(r, L.currentRoute.value);
			if (a) {
				C(Z(a, {
					replace: !0,
					force: !0
				}), r).catch(Ve);
				return;
			}
			l = r;
			let o = c.value;
			en && Un(Vn(o.fullPath, n.delta), zn()), w(r, o).catch((e) => Ue(e, 12) ? e : Ue(e, 2) ? (C(Z(v(e.to), { force: !0 }), r).then((e) => {
				Ue(e, 20) && !n.delta && n.type === "pop" && i.go(-1, !1);
			}).catch(Ve), Promise.reject()) : (n.delta && i.go(-n.delta, !1), M(e, r, o))).then((e) => {
				e ||= E(r, o, !1), e && (n.delta && !Ue(e, 8) ? i.go(-n.delta, !1) : n.type === "pop" && Ue(e, 20) && i.go(-1, !1)), T(r, o, e);
			}).catch(Ve);
		});
	}
	let k = Xn(), A = Xn(), j;
	function M(e, t, n) {
		P(e);
		let r = A.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function N() {
		return j && c.value !== Pn ? Promise.resolve() : new Promise((e, t) => {
			k.add([e, t]);
		});
	}
	function P(e) {
		return j || (j = !e, O(), k.list().forEach(([t, n]) => e ? n(e) : t()), k.reset()), e;
	}
	function F(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!en || !a) return Promise.resolve();
		let o = !r && Wn(Vn(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return oe().then(() => a(t, n, o)).then((e) => t === c.value && e && Bn(e)).catch((e) => t === c.value && M(e, t, n));
	}
	let ne = (e) => i.go(e), re, I = /* @__PURE__ */ new Set(), L = {
		currentRoute: c,
		listening: !0,
		addRoute: p,
		removeRoute: m,
		clearRoutes: t.clearRoutes,
		hasRoute: g,
		getRoutes: h,
		resolve: _,
		options: e,
		push: b,
		replace: x,
		go: ne,
		back: () => ne(-1),
		forward: () => ne(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: A.add,
		isReady: N,
		install(e) {
			e.component("RouterLink", Ar), e.component("RouterView", Lr), e.config.globalProperties.$router = L, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => Y(c)
			}), en && !re && c.value === Pn && (re = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in Pn) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Ke, L), e.provide(He, ie(t)), e.provide(et, c);
			let n = e.unmount;
			I.add(e), e.unmount = function() {
				I.delete(e), I.size < 1 && (l = Pn, D && D(), D = null, c.value = Pn, re = !1, j = !1), n();
			};
		}
	};
	function R(e) {
		return e.reduce((e, t) => e.then(() => te(t)), Promise.resolve());
	}
	return L;
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/constants-Ciwvl5xb.mjs
var zr = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Br = /* @__PURE__ */ Symbol.for("NcContent:selector");
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcContent-BYh5hWDN.mjs
me(xe);
var Vr = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM140 44C132.268 44 126 50.268 126 58V292C126 299.732 132.268 306 140 306H372C379.732 306 386 299.732 386 292V58C386 50.268 379.732 44 372 44H140Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", Hr = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM112 44C119.732 44 126 50.268 126 58V292C126 299.732 119.732 306 112 306H20C12.268 306 6 299.732 6 292V58C6 50.268 12.268 44 20 44H112Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", Ur = { class: "vue-skip-actions__container" }, Wr = { class: "vue-skip-actions__headline" }, Gr = { class: "vue-skip-actions__buttons" }, Kr = /* @__PURE__ */ i(/* @__PURE__ */ r({
	__name: "NcContent",
	props: { appName: {} },
	setup(e) {
		let t = e;
		we(zr, c), we(Br, "#content-vue"), we("appName", U(() => t.appName));
		let r = lt(), i = N(!1), a = N(), o = U(() => a.value === "navigation" ? Hr : Vr);
		m(() => {
			let e = document.getElementById("skip-actions");
			e && (e.innerHTML = "", e.classList.add("vue-skip-actions"));
		});
		function s() {
			ke("toggle-navigation", { open: !0 }), oe(() => {
				window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
			});
		}
		function c(e) {
			i.value = e, a.value ||= "navigation";
		}
		return (t, c) => (p(), q("div", {
			id: "content-vue",
			class: k(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": Y(se) }]])
		}, [(p(), I(P, { to: "#skip-actions" }, [z("div", Ur, [
			z("div", Wr, n(Y(B)("Keyboard navigation help")), 1),
			z("div", Gr, [G(J(X, {
				href: "#app-navigation-vue",
				variant: "tertiary",
				onClick: M(s, ["prevent"]),
				onFocusin: c[0] ||= (e) => a.value = "navigation",
				onMouseover: c[1] ||= (e) => a.value = "navigation"
			}, {
				default: F(() => [A(n(Y(B)("Skip to app navigation")), 1)]),
				_: 1
			}, 512), [[W, i.value]]), J(X, {
				href: "#app-content-vue",
				variant: "tertiary",
				onFocusin: c[2] ||= (e) => a.value = "content",
				onMouseover: c[3] ||= (e) => a.value = "content"
			}, {
				default: F(() => [A(n(Y(B)("Skip to main content")), 1)]),
				_: 1
			})]),
			G(J(qe, {
				class: "vue-skip-actions__image",
				svg: o.value,
				size: "auto"
			}, null, 8, ["svg"]), [[W, !Y(r)]])
		])])), l(t.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-d13dcb98"]]), qr = { name: "NcAppNavigationList" }, Jr = { class: "app-navigation-list" };
function Yr(e, t, n, r, i, a) {
	return p(), q("ul", Jr, [l(e.$slots, "default", {}, void 0, !0)]);
}
var Xr = /* @__PURE__ */ i(qr, [["render", Yr], ["__scopeId", "data-v-d72957ed"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcAppNavigation-g57j16pB.mjs
me(re);
var Zr = { class: "app-navigation-toggle-wrapper" }, Qr = /* @__PURE__ */ i(/* @__PURE__ */ r({
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
		let t = d(e, "open"), n = U(() => t.value ? B("Close navigation") : B("Open navigation"));
		return (e, r) => (p(), q("div", Zr, [J(Y(X), {
			class: "app-navigation-toggle",
			"aria-controls": "app-navigation-vue",
			"aria-expanded": t.value ? "true" : "false",
			"aria-label": n.value,
			title: n.value,
			variant: "tertiary",
			onClick: r[0] ||= (e) => t.value = !t.value
		}, {
			icon: F(() => [J(qe, { path: t.value ? Y($e) : Y(Xe) }, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-expanded",
			"aria-label",
			"title"
		])]));
	}
}), [["__scopeId", "data-v-5a15295d"]]), $r = [
	"aria-hidden",
	"aria-label",
	"aria-labelledby",
	"inert"
], ei = { class: "app-navigation__search" }, ti = /* @__PURE__ */ i(/* @__PURE__ */ r({
	__name: "NcAppNavigation",
	props: {
		ariaLabel: {},
		ariaLabelledby: {}
	},
	setup(t) {
		let n = t, r, i = g(zr, () => w("NcAppNavigation is not mounted inside NcContent, this is probably an error."), !1), a = ee("appNavigationContainer"), o = lt(), c = N(!o.value), d = U(() => o.value && c.value);
		e(() => {
			!n.ariaLabel && !n.ariaLabelledby && w("NcAppNavigation requires either `ariaLabel` or `ariaLabelledby` to be set for accessibility.");
		}), _(o, () => {
			c.value = !o.value;
		}), _(d, () => {
			h();
		}), s(() => {
			i(!0), Oe("toggle-navigation", m), ke("navigation-toggled", { open: c.value }), r = je(a.value, {
				allowOutsideClick: !0,
				clickOutsideDeactivates: () => (o.value && (r.deactivate({ returnFocus: !1 }), f(!1)), !1),
				fallbackFocus: a.value,
				trapStack: Ee(),
				escapeDeactivates: !1
			}), h();
		}), u(() => {
			i(!1), De("toggle-navigation", m), r.deactivate();
		});
		function f(e) {
			if (c.value === e) {
				ke("navigation-toggled", { open: c.value });
				return;
			}
			c.value = e === void 0 ? !c.value : e;
			let t = getComputedStyle(document.body), n = parseInt(t.getPropertyValue("--animation-quick")) || 100;
			setTimeout(() => {
				ke("navigation-toggled", { open: c.value });
			}, 1.5 * n);
		}
		function m({ open: e }) {
			return f(e);
		}
		function h() {
			d.value ? r.activate() : r.deactivate();
		}
		function v() {
			o.value && f(!1);
		}
		return (e, n) => (p(), q("div", {
			ref: "appNavigationContainer",
			class: k(["app-navigation", {
				"app-navigation--closed": !c.value,
				"app-navigation--legacy": Y(se)
			}])
		}, [z("nav", {
			id: "app-navigation-vue",
			"aria-hidden": c.value ? "false" : "true",
			"aria-label": t.ariaLabel || void 0,
			"aria-labelledby": t.ariaLabelledby || void 0,
			class: "app-navigation__content",
			inert: !c.value || void 0,
			onKeydown: ye(v, ["esc"])
		}, [
			z("div", ei, [l(e.$slots, "search", {}, void 0, !0)]),
			z("div", { class: k(["app-navigation__body", { "app-navigation__body--no-list": !e.$slots.list }]) }, [l(e.$slots, "default", {}, void 0, !0)], 2),
			e.$slots.list ? (p(), I(Xr, {
				key: 0,
				class: "app-navigation__list"
			}, {
				default: F(() => [l(e.$slots, "list", {}, void 0, !0)]),
				_: 3
			})) : E("", !0),
			l(e.$slots, "footer", {}, void 0, !0)
		], 40, $r), J(Qr, {
			open: c.value,
			"onUpdate:open": f
		}, null, 8, ["open"])], 2));
	}
}), [["__scopeId", "data-v-1344f70d"]]), ni = {
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
}, ri = ["aria-hidden", "aria-label"], ii = [
	"fill",
	"width",
	"height"
], ai = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, oi = { key: 0 };
function si(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon chevron-up-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", ai, [i.title ? (p(), q("title", oi, n(i.title), 1)) : E("", !0)])], 8, ii))], 16, ri);
}
var ci = /* @__PURE__ */ i(ni, [["render", si]]), li = {
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
}, ui = ["aria-hidden", "aria-label"], di = [
	"fill",
	"width",
	"height"
], fi = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, pi = { key: 0 };
function mi(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon arrow-right-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", fi, [i.title ? (p(), q("title", pi, n(i.title), 1)) : E("", !0)])], 8, di))], 16, ui);
}
var hi = /* @__PURE__ */ i(li, [["render", mi]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcInputConfirmCancel-CGTllrXj.mjs
me(_e);
var gi = {
	name: "NcInputConfirmCancel",
	components: {
		IconArrowRight: hi,
		IconClose: dt,
		NcButton: X
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
		return { isLegacy34: se };
	},
	data() {
		return {
			labelConfirm: B("Confirm changes"),
			labelCancel: B("Cancel changes")
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
}, _i = ["placeholder"];
function vi(e, t, n, r, i, a) {
	let o = x("IconArrowRight"), s = x("NcButton"), c = x("IconClose");
	return p(), q("div", { class: k(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": r.isLegacy34 }]) }, [z("form", {
		onSubmit: t[1] ||= M((...e) => a.confirm && a.confirm(...e), ["prevent"]),
		onKeydown: t[2] ||= ye(M((...e) => a.cancel && a.cancel(...e), [
			"exact",
			"stop",
			"prevent"
		]), ["esc"]),
		onClick: t[3] ||= M(() => {}, ["stop", "prevent"])
	}, [
		G(z("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.valueModel = e,
			type: "text",
			class: "app-navigation-input-confirm__input",
			placeholder: n.placeholder
		}, null, 8, _i), [[O, a.valueModel]]),
		J(s, {
			"aria-label": i.labelConfirm,
			type: "submit",
			variant: "primary",
			onClick: M(a.confirm, ["stop", "prevent"])
		}, {
			icon: F(() => [J(o, { size: 20 })]),
			_: 1
		}, 8, ["aria-label", "onClick"]),
		J(s, {
			"aria-label": i.labelCancel,
			type: "reset",
			variant: n.primary ? "primary" : "tertiary",
			onClick: M(a.cancel, ["stop", "prevent"])
		}, {
			icon: F(() => [J(c, { size: 20 })]),
			_: 1
		}, 8, [
			"aria-label",
			"variant",
			"onClick"
		])
	], 32)], 2);
}
var yi = /* @__PURE__ */ i(gi, [["render", vi], ["__scopeId", "data-v-6926a0b8"]]), bi = r({
	name: "NcVNodes",
	props: { vnodes: {
		type: [Array, Object],
		default: null
	} },
	render() {
		return this.vnodes || this.$slots?.default?.({});
	}
}), xi = {
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
}, Si = ["aria-hidden", "aria-label"], Ci = [
	"fill",
	"width",
	"height"
], wi = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, Ti = { key: 0 };
function Ei(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon pencil-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", wi, [i.title ? (p(), q("title", Ti, n(i.title), 1)) : E("", !0)])], 8, Ci))], 16, Si);
}
var Di = /* @__PURE__ */ i(xi, [["render", Ei]]), Oi = {
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
}, ki = ["aria-hidden", "aria-label"], Ai = [
	"fill",
	"width",
	"height"
], ji = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, Mi = { key: 0 };
function Ni(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon undo-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", ji, [i.title ? (p(), q("title", Mi, n(i.title), 1)) : E("", !0)])], 8, Ai))], 16, ki);
}
var Pi = /* @__PURE__ */ i(Oi, [["render", Ni]]);
me(fe);
var Fi = {
	name: "NcAppNavigationIconCollapsible",
	components: {
		NcButton: X,
		ChevronDown: ft,
		ChevronUp: ci
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
		return { isLegacy34: se };
	},
	computed: { labelButton() {
		return this.open ? B("Collapse menu") : B("Open menu");
	} },
	methods: { onClick(e) {
		this.$emit("click", e);
	} }
};
function Ii(e, t, n, r, i, a) {
	let o = x("ChevronUp"), s = x("ChevronDown"), c = x("NcButton");
	return p(), I(c, {
		class: k(["icon-collapse", {
			"icon-collapse--active": n.active,
			"icon-collapse--open": n.open
		}]),
		"aria-label": a.labelButton,
		variant: n.active && r.isLegacy34 ? "tertiary-on-primary" : "tertiary",
		onClick: a.onClick
	}, {
		icon: F(() => [n.open ? (p(), I(o, {
			key: 0,
			size: 20
		})) : (p(), I(s, {
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
var Li = /* @__PURE__ */ i(Fi, [["render", Ii], ["__scopeId", "data-v-cfbd3794"]]);
me(H, y);
var Ri = {
	name: "NcAppNavigationItem",
	components: {
		NcActions: nt,
		NcActionButton: _t,
		NcAppNavigationIconCollapsible: Li,
		NcInputConfirmCancel: yi,
		NcLoadingIcon: yt,
		NcVNodes: bi,
		Pencil: Di,
		Undo: Pi
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
			default: () => be(),
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
			isMobile: lt(),
			isLegacy34: se
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
			return this.editLabel ? this.editLabel : B("Edit item");
		},
		undoButtonAriaLabel() {
			return B("Undo changes");
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
			this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault());
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
			this.$refs.actions && (this.focused ? (e.preventDefault(), this.$refs.actions.$refs.triggerButton.$el.focus(), this.focused = !1) : this.$refs.actions.$refs.triggerButton.$el.blur());
		},
		isExternal(e) {
			return e && e.match(/[a-z]+:\/\//i);
		}
	}
}, zi = ["id"], Bi = [
	"aria-current",
	"aria-description",
	"aria-expanded",
	"href",
	"target",
	"title",
	"onClick"
], Vi = {
	key: 0,
	class: "editingContainer"
}, Hi = {
	key: 1,
	class: "app-navigation-entry__deleted"
}, Ui = { class: "app-navigation-entry__deleted-description" }, Wi = {
	key: 0,
	class: "app-navigation-entry__counter-wrapper"
}, Gi = {
	key: 0,
	class: "app-navigation-entry__children"
};
function Ki(e, t, r, i, a, o) {
	let s = x("NcLoadingIcon"), u = x("NcInputConfirmCancel"), d = x("Pencil"), f = x("NcActionButton"), m = x("Undo"), h = x("NcActions"), g = x("NcAppNavigationIconCollapsible");
	return p(), q("li", {
		id: r.id,
		class: k([{
			"app-navigation-entry--opened": a.opened,
			"app-navigation-entry--pinned": r.pinned,
			"app-navigation-entry--collapsible": r.allowCollapse && !!e.$slots.default
		}, "app-navigation-entry-wrapper"])
	}, [(p(), I(c(o.isRouterLink ? "router-link" : "NcVNodes"), Ce(b({ ...o.isRouterLink && {
		custom: !0,
		to: r.to
	} })), {
		default: F(({ href: c, navigate: _, isActive: v }) => [z("div", { class: k(["app-navigation-entry", {
			"app-navigation-entry--editing": a.editingActive,
			"app-navigation-entry--deleted": r.undo,
			"app-navigation-entry--legacy": i.isLegacy34,
			active: r.to && v || r.active
		}]) }, [
			r.undo ? E("", !0) : (p(), q("a", {
				key: 0,
				class: "app-navigation-entry-link",
				"aria-current": r.active || r.to && v ? "page" : void 0,
				"aria-description": r.ariaDescription,
				"aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
				href: r.href || c || "#",
				target: o.isExternal(r.href) ? "_blank" : void 0,
				title: r.title || r.name,
				onBlur: t[1] ||= (...e) => o.handleBlur && o.handleBlur(...e),
				onClick: (e) => o.onClick(e, _, c),
				onFocus: t[2] ||= (...e) => o.handleFocus && o.handleFocus(...e),
				onKeydown: t[3] ||= ye(M((...e) => o.handleTab && o.handleTab(...e), ["exact"]), ["tab"])
			}, [
				z("div", { class: k(["app-navigation-entry-icon", { [r.icon]: r.icon }]) }, [r.loading ? (p(), I(s, { key: 0 })) : l(e.$slots, "icon", {
					key: 1,
					active: r.active || r.to && v
				}, void 0, !0)], 2),
				z("span", { class: k(["app-navigation-entry__name", { "hidden-visually": a.editingActive }]) }, n(r.name), 3),
				a.editingActive ? (p(), q("div", Vi, [J(u, {
					ref: "editingInput",
					modelValue: a.editingValue,
					"onUpdate:modelValue": t[0] ||= (e) => a.editingValue = e,
					placeholder: r.editPlaceholder === "" ? r.name : r.editPlaceholder,
					primary: r.to && v || r.active,
					onCancel: o.cancelEditing,
					onConfirm: o.handleEditingDone
				}, null, 8, [
					"modelValue",
					"placeholder",
					"primary",
					"onCancel",
					"onConfirm"
				])])) : E("", !0)
			], 40, Bi)),
			r.undo ? (p(), q("div", Hi, [z("div", Ui, n(r.name), 1)])) : E("", !0),
			(e.$slots.actions || e.$slots.counter || r.editable || r.undo) && !a.editingActive ? (p(), q("div", {
				key: 2,
				class: k(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": r.forceDisplayActions || a.menuOpenLocalValue || r.menuOpen }])
			}, [e.$slots.counter ? (p(), q("div", Wi, [l(e.$slots, "counter", {}, void 0, !0)])) : E("", !0), e.$slots.actions || r.editable && !a.editingActive || r.undo ? (p(), I(h, {
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
				icon: F(() => [l(e.$slots, "menu-icon", {}, void 0, !0)]),
				default: F(() => [
					r.editable && !a.editingActive ? (p(), I(f, {
						key: 0,
						"aria-label": o.editButtonAriaLabel,
						onClick: o.handleEdit
					}, {
						icon: F(() => [J(d, { size: 20 })]),
						default: F(() => [A(" " + n(r.editLabel), 1)]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : E("", !0),
					r.undo ? (p(), I(f, {
						key: 1,
						"aria-label": o.undoButtonAriaLabel,
						onClick: o.handleUndo
					}, {
						icon: F(() => [J(m, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : E("", !0),
					l(e.$slots, "actions", {}, void 0, !0)
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
			])) : E("", !0)], 2)) : E("", !0),
			r.allowCollapse && e.$slots.default ? (p(), I(g, {
				key: 3,
				active: r.to && v || r.active,
				open: a.opened,
				onClick: M(o.toggleCollapse, ["prevent", "stop"])
			}, null, 8, [
				"active",
				"open",
				"onClick"
			])) : E("", !0),
			l(e.$slots, "extra", {}, void 0, !0)
		], 2)]),
		_: 3
	}, 16)), o.canHaveChildren && e.$slots.default ? (p(), q("ul", Gi, [l(e.$slots, "default", {}, void 0, !0)])) : E("", !0)], 10, zi);
}
var qi = /* @__PURE__ */ i(Ri, [["render", Ki], ["__scopeId", "data-v-fcab058b"]]), Ji = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		let n = t, r = e, i = pe(), a = te(), l = N([]), u = U(() => l.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), d = U(() => l.value.length), f = N(null), m = N(!1), g = N({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), v = N({
			splitter: null,
			timeoutId: null
		}), y = U(() => ({
			[`splitpanes splitpanes--${r.horizontal ? "horizontal" : "vertical"}`]: !0,
			"splitpanes--dragging": g.value.dragging,
			"splitpanes--ready": m.value
		})), b = () => {
			document.addEventListener("mousemove", C, { passive: !1 }), document.addEventListener("mouseup", ee), "ontouchstart" in window && (document.addEventListener("touchmove", C, { passive: !1 }), document.addEventListener("touchend", ee));
		}, x = () => {
			document.removeEventListener("mousemove", C, { passive: !1 }), document.removeEventListener("mouseup", ee), "ontouchstart" in window && (document.removeEventListener("touchmove", C, { passive: !1 }), document.removeEventListener("touchend", ee));
		}, S = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: i } = n.getBoundingClientRect(), { clientX: a, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				g.value.cursorOffset = r.horizontal ? o - i : a - t;
			}
			b(), g.value.mouseDown = !0, g.value.activeSplitter = t, document.documentElement.style.cursor = r.horizontal ? "row-resize" : "col-resize";
		}, C = (e) => {
			g.value.mouseDown && (e.preventDefault(), g.value.dragging || (window.getSelection()?.removeAllRanges(), g.value.dragging = !0), requestAnimationFrame(() => {
				A(O(e)), W("resize", { event: e }, !0);
			}));
		}, ee = (e) => {
			g.value.dragging && (window.getSelection()?.removeAllRanges(), W("resized", { event: e }, !0)), g.value.mouseDown = !1, g.value.activeSplitter = null, setTimeout(() => {
				g.value.dragging = !1, x(), document.documentElement.style.cursor = "";
			}, 100);
		}, w = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), v.value.splitter === t ? (clearTimeout(v.value.timeoutId), v.value.timeoutId = null, T(e, t), v.value.splitter = null) : (v.value.splitter = t, v.value.timeoutId = setTimeout(() => v.value.splitter = null, 500))), g.value.dragging || W("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, T = (e, t) => {
			if (W("splitter-dblclick", {
				event: e,
				index: t
			}, !0), r.maximizePanes) {
				let n = 0;
				l.value = l.value.map((e, r) => (e.size = r === t ? e.max : e.min, r !== t && (n += e.min), e)), l.value[t].size -= n, W("pane-maximize", {
					event: e,
					index: t,
					pane: l.value[t]
				}), W("resized", {
					event: e,
					index: t
				}, !0);
			}
		}, E = (e, t) => {
			if (!r.keyboardStep) return;
			let n = r.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", i = r.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !i) return;
			e.preventDefault(), g.value.activeSplitter = t;
			let a = (n ? 1 : -1) * (r.rtl && !r.horizontal ? -1 : 1), o = P(t) + l.value[t].size;
			j(Math.min(Math.max(o + a * r.keyboardStep, 0), 100)), W("resize", { event: e }, !0), W("resized", { event: e }, !0), g.value.activeSplitter = null;
		}, D = (e, t) => {
			let n = u.value[t];
			n && W("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, O = (e) => {
			let t = f.value.getBoundingClientRect(), { clientX: n, clientY: i } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (r.horizontal ? 0 : g.value.cursorOffset) - t.left,
				y: i - (r.horizontal ? g.value.cursorOffset : 0) - t.top
			};
		}, k = (e) => {
			e = e[r.horizontal ? "y" : "x"];
			let t = f.value[r.horizontal ? "clientHeight" : "clientWidth"];
			return r.rtl && !r.horizontal && (e = t - e), e * 100 / t;
		}, A = (e) => {
			j(k(e));
		}, j = (e) => {
			let t = g.value.activeSplitter;
			if (t === null || t >= l.value.length - 1) return;
			let n = {
				prevPanesSize: P(t),
				nextPanesSize: F(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, i = 0 + (r.pushOtherPanes ? 0 : n.prevPanesSize), a = 100 - (r.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, a), i);
			let o = [t, t + 1], s = l.value[o[0]] || null, c = l.value[o[1]] || null, u = s !== null && s.max < 100 && e >= s.max + n.prevPanesSize, d = c !== null && c.max < 100 && e <= 100 - (c.max + F(t + 1));
			if (u || d) {
				u ? (s.size = s.max, c.size = Math.min(Math.max(100 - s.max - n.prevPanesSize - n.nextPanesSize, c.min), c.max)) : (s.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - F(t + 1), s.min), s.max), c.size = c.max);
				return;
			}
			if (r.pushOtherPanes) {
				let t = M(n, e);
				if (!t) return;
				({sums: n, panesToResize: o} = t), s = l.value[o[0]] || null, c = l.value[o[1]] || null;
			}
			s !== null && (s.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, s.min), s.max)), c !== null && (c.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, c.min), c.max));
		}, M = (e, t) => {
			let n = g.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + l.value[r[0]].min) {
				if (r[0] = ne(n).index, e.prevReachedMinPanes = 0, r[0] < n && l.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, l.value[0].size = l.value[0].min, l.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), l.value[r[1]].size = 100 - e.prevReachedMinPanes - l.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = P(r[0]);
			}
			return t > 100 - e.nextPanesSize - l.value[r[1]].min && (r[1] = re(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && l.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : F(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, l.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (l.value[r[0]].size = 100 - e.prevPanesSize - F(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, P = (e) => l.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), F = (e) => l.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), ne = (e) => [...l.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, re = (e) => l.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, ie = () => {
			let e = Array.from(f.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, L = (e, t, n = !1) => {
			let i = e - 1, a = document.createElement("div");
			a.classList.add("splitpanes__splitter"), n || (a.onmousedown = (e) => S(e, i), typeof window < "u" && "ontouchstart" in window && (a.ontouchstart = (e) => S(e, i)), a.onclick = (e) => w(e, i + 1), r.keyboardStep && (a.setAttribute("tabindex", "0"), a.setAttribute("role", "separator"), a.setAttribute("aria-orientation", r.horizontal ? "horizontal" : "vertical"), a.onkeydown = (e) => E(e, i))), a.ondblclick = (e) => T(e, i + 1), t.parentNode.insertBefore(a, t);
		}, R = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, z = () => {
			let e = Array.from(f.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && R(t);
			let t = 0;
			for (let n of e) n.className.includes("splitpanes__pane") && (!t && r.firstSplitter ? L(t, n, !0) : t && L(t, n), t++);
		}, B = ({ uid: e, ...t }) => {
			let n = u.value[e];
			for (let [e, r] of Object.entries(t)) n[e] = r;
		}, V = !1, ae = (e) => {
			let t = -1;
			Array.from(f.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), l.value.splice(t, 0, {
				...e,
				index: t
			}), l.value.forEach((e, t) => e.index = t), m.value && !V && (V = !0, oe(() => {
				z(), ce({ addedPane: l.value[t] }), W("pane-add", { pane: l.value[t] }), V = !1;
			}));
		}, se = (e) => {
			let t = l.value.findIndex((t) => t.id === e);
			l.value[t].el = null;
			let n = l.value.splice(t, 1)[0];
			l.value.forEach((e, t) => e.index = t), oe(() => {
				z(), W("pane-remove", { pane: n }), ce({ removedPane: {
					...n,
					index: t
				} });
			});
		}, ce = (e = {}) => {
			!e.addedPane && !e.removedPane ? H() : l.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? ue(e) : le(), m.value && W("resized");
		}, le = () => {
			let e = 100 / d.value, t = 100, n = [], r = [];
			for (let i of l.value) i.size = Math.max(Math.min(e, i.max), i.min), t -= i.size, i.size >= i.max && n.push(i.id), i.size <= i.min && r.push(i.id);
			Math.abs(t) > .1 && de(t, n, r);
		}, H = () => {
			let e = 100, t = [], n = [], r = 0;
			for (let i of l.value) e -= i.size, i.givenSize !== null && r++, i.size >= i.max && t.push(i.id), i.size <= i.min && n.push(i.id);
			let i = 100;
			if (e > .1) {
				for (let t of l.value) t.givenSize === null && (t.size = Math.max(Math.min(e / (d.value - r), t.max), t.min)), i -= t.size;
				i > .1 && de(i, t, n);
			}
		}, ue = ({ addedPane: e, removedPane: t } = {}) => {
			let n = l.value.reduce((e, t) => e + (t.givenSize === null ? 0 : t.givenSize), 0), r = l.value.filter((e) => e.givenSize === null).length, i = r > 0 ? (100 - n) / r : 0, a = 0, o = [], s = [];
			for (let e of l.value) a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && s.push(e.id);
			if (!(Math.abs(a) < .1)) {
				a = 100;
				for (let e of l.value) e.givenSize === null && (e.size = Math.max(Math.min(i, e.max), e.min)), a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && s.push(e.id);
				Math.abs(a) > .1 && de(a, o, s);
			}
		}, de = (e, t, n) => {
			let r;
			r = e > 0 ? e / (d.value - t.length) : e / (d.value - n.length), l.value.forEach((i, a) => {
				if (e > 0 && !t.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				} else if (!n.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				}
			}), Math.abs(e) > .1 && m.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
		}, W = (e, t = void 0, i = !1) => {
			let a = t?.index ?? g.value.activeSplitter ?? null;
			n(e, {
				...t,
				...a !== null && { index: a },
				...i && a !== null && {
					prevPane: l.value[a - +!!r.firstSplitter],
					nextPane: l.value[a + +!r.firstSplitter]
				},
				panes: l.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		};
		_(() => r.firstSplitter, () => z()), _(() => r.horizontal, (e) => oe(() => {
			n("direction-changed", {
				horizontal: e,
				panes: l.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), s(() => {
			ie(), z(), ce(), W("ready"), m.value = !0;
		}), h(() => m.value = !1);
		let fe = () => {
			let { class: e, ...t } = i;
			return o("div", {
				ref: f,
				class: [y.value, e],
				...t
			}, a.default?.());
		};
		return we("panes", l), we("indexedPanes", u), we("horizontal", U(() => r.horizontal)), we("requestUpdate", B), we("onPaneAdd", ae), we("onPaneRemove", se), we("onPaneClick", D), (e, t) => (p(), I(c(fe)));
	}
}), Yi = {
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
		let t = e, n = g("requestUpdate"), r = g("onPaneAdd"), i = g("horizontal"), a = g("onPaneRemove"), o = g("onPaneClick"), c = Se()?.uid, u = g("indexedPanes"), d = U(() => u.value[c]), f = N(null), m = U(() => {
			let e = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
			return Math.max(Math.min(e, b.value), y.value);
		}), y = U(() => {
			let e = parseFloat(t.minSize);
			return isNaN(e) ? 0 : e;
		}), b = U(() => {
			let e = parseFloat(t.maxSize);
			return isNaN(e) ? 100 : e;
		}), x = U(() => {
			let e = d.value?.size ?? (t.size === void 0 ? void 0 : m.value);
			return e === void 0 ? "" : `${i.value ? "height" : "width"}: ${e}%`;
		});
		return _(() => m.value, (e) => n({
			uid: c,
			size: e
		})), _(() => y.value, (e) => n({
			uid: c,
			min: e
		})), _(() => b.value, (e) => n({
			uid: c,
			max: e
		})), s(() => {
			r({
				id: c,
				el: f.value,
				min: y.value,
				max: b.value,
				givenSize: t.size === void 0 ? null : m.value,
				size: m.value
			});
		}), h(() => a(c)), (e, t) => (p(), q("div", {
			ref_key: "paneEl",
			ref: f,
			class: "splitpanes__pane",
			onClick: t[0] ||= (t) => Y(o)(t, e._.uid),
			style: v(x.value)
		}, [l(e.$slots, "default")], 4));
	}
};
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/appName-DyNMVZpX.mjs
function Xi(e) {
	let t = !1, n;
	return (...r) => (t || (t = !0, n = e(...r)), n);
}
var Zi = "missing-app-name";
try {
	Zi = "RECHNUNGSWERK";
} catch {
	Me.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
var Qi = Zi;
function $i() {
	return g("appName", Qi);
}
var ea = Xi(() => {
	let e = ut("core", "apps", []), t = $i();
	return e.find(({ id: e }) => e === t)?.name ?? t;
});
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcAppContent-DavgjaFX.mjs
me(L);
var ta = /* @__PURE__ */ i(/* @__PURE__ */ r({
	__name: "NcAppContentDetailsToggle",
	setup(e) {
		let t = lt();
		_(t, n), s(() => {
			n(t.value);
		}), h(() => {
			t.value && n(!1);
		});
		function n(e = !0) {
			let t = document.querySelector(".app-navigation .app-navigation-toggle");
			t && (t.style.display = e ? "none" : "", e === !0 && ke("toggle-navigation", { open: !1 }));
		}
		return (e, n) => (p(), I(Y(X), {
			"aria-label": Y(B)("Go back to the list"),
			class: k(["app-details-toggle", { "app-details-toggle--mobile": Y(t) }]),
			title: Y(B)("Go back to the list"),
			variant: "tertiary"
		}, {
			icon: F(() => [J(Y(qe), {
				directional: "",
				path: Y(Ye)
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-label",
			"class",
			"title"
		]));
	}
}), [["__scopeId", "data-v-a28923a1"]]), na = Pe("nextcloud").persist().build(), ra = ct().theming?.name ?? "Nextcloud", ia = {
	name: "NcAppContent",
	components: {
		NcAppContentDetailsToggle: ta,
		Pane: Yi,
		Splitpanes: Ji
	},
	props: {
		disableSwipe: {
			type: Boolean,
			default: !1
		},
		listSize: {
			type: Number,
			default: 20
		},
		listMinWidth: {
			type: Number,
			default: 15
		},
		listMaxWidth: {
			type: Number,
			default: 40
		},
		paneConfigKey: {
			type: String,
			default: ""
		},
		showDetails: {
			type: Boolean,
			default: !0
		},
		layout: {
			type: String,
			default: "vertical-split",
			validator(e) {
				return [
					"no-split",
					"vertical-split",
					"horizontal-split"
				].includes(e);
			}
		},
		pageHeading: {
			type: String,
			default: null
		},
		pageTitle: {
			type: String,
			default: null
		}
	},
	emits: ["update:showDetails", "resizeList"],
	setup() {
		return {
			appName: $i(),
			localizedAppName: ea(),
			isMobile: lt(),
			isRtl: Ae
		};
	},
	data() {
		return {
			contentHeight: 0,
			swiping: {},
			listPaneSize: this.restorePaneConfig()
		};
	},
	computed: {
		paneConfigID() {
			if (this.paneConfigKey !== "") return `pane-list-size-${this.paneConfigKey}`;
			try {
				return `pane-list-size-${this.appName}`;
			} catch {
				return Me.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
			}
		},
		detailsPaneSize() {
			return this.listPaneSize ? 100 - this.listPaneSize : this.paneDefaults.details.size;
		},
		paneDefaults() {
			return {
				list: {
					size: this.listSize,
					min: this.listMinWidth,
					max: this.listMaxWidth
				},
				details: {
					size: 100 - this.listSize,
					min: 100 - this.listMaxWidth,
					max: 100 - this.listMinWidth
				}
			};
		},
		realPageTitle() {
			let e = /* @__PURE__ */ new Set();
			if (this.pageTitle) for (let t of this.pageTitle.split(" - ")) e.add(t);
			else if (this.pageHeading) {
				for (let t of this.pageHeading.split(" - ")) e.add(t);
				e.size > 0 && e.add(this.localizedAppName);
			} else return null;
			return e.add(ra), [...e.values()].join(" - ");
		}
	},
	watch: {
		realPageTitle: {
			immediate: !0,
			handler() {
				this.realPageTitle !== null && (document.title = this.realPageTitle);
			}
		},
		paneConfigKey: {
			immediate: !0,
			handler() {
				this.restorePaneConfig();
			}
		}
	},
	mounted() {
		this.disableSwipe || (this.swiping = tt(this.$el, { onSwipeEnd: this.handleSwipe })), this.restorePaneConfig();
	},
	methods: {
		handleSwipe(e, t) {
			Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 150 && t === "right" ? ke("toggle-navigation", { open: !0 }) : this.swiping.coordsStart.x < 450 && t === "left" && ke("toggle-navigation", { open: !1 }));
		},
		handlePaneResize(e) {
			let t = parseInt(e.panes[0].size, 10);
			na.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), Me.debug("[NcAppContent] pane config", { listPaneSize: t });
		},
		restorePaneConfig() {
			let e = parseInt(na.getItem(this.paneConfigID), 10);
			if (!isNaN(e) && e !== this.listPaneSize) return Me.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
		},
		hideDetails() {
			this.$emit("update:showDetails", !1);
		}
	}
}, aa = {
	key: 0,
	class: "hidden-visually"
}, oa = { class: "app-content-wrapper__list" }, sa = {
	key: 1,
	class: "app-content-wrapper"
};
function ca(e, t, r, i, a, o) {
	let s = x("NcAppContentDetailsToggle"), c = x("Pane"), u = x("Splitpanes");
	return p(), q("main", {
		id: "app-content-vue",
		class: k(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
	}, [
		r.pageHeading ? (p(), q("h1", aa, n(r.pageHeading), 1)) : E("", !0),
		e.$slots.list ? (p(), q(K, { key: 1 }, [i.isMobile || r.layout === "no-split" ? (p(), q("div", {
			key: 0,
			class: k(["app-content-wrapper app-content-wrapper--no-split", {
				"app-content-wrapper--show-details": r.showDetails,
				"app-content-wrapper--show-list": !r.showDetails,
				"app-content-wrapper--mobile": i.isMobile
			}])
		}, [
			r.showDetails ? (p(), I(s, {
				key: 0,
				onClick: M(o.hideDetails, ["stop", "prevent"])
			}, null, 8, ["onClick"])) : E("", !0),
			G(z("div", oa, [l(e.$slots, "list", {}, void 0, !0)], 512), [[W, !r.showDetails]]),
			r.showDetails ? l(e.$slots, "default", { key: 1 }, void 0, !0) : E("", !0)
		], 2)) : r.layout === "vertical-split" || r.layout === "horizontal-split" ? (p(), q("div", sa, [J(u, {
			horizontal: r.layout === "horizontal-split",
			class: k(["default-theme", {
				"splitpanes--horizontal": r.layout === "horizontal-split",
				"splitpanes--vertical": r.layout === "vertical-split"
			}]),
			rtl: i.isRtl,
			onResized: o.handlePaneResize
		}, {
			default: F(() => [J(c, {
				class: "splitpanes__pane-list",
				size: a.listPaneSize || o.paneDefaults.list.size,
				minSize: o.paneDefaults.list.min,
				maxSize: o.paneDefaults.list.max
			}, {
				default: F(() => [l(e.$slots, "list", {}, void 0, !0)]),
				_: 3
			}, 8, [
				"size",
				"minSize",
				"maxSize"
			]), J(c, {
				class: "splitpanes__pane-details",
				size: o.detailsPaneSize,
				minSize: o.paneDefaults.details.min,
				maxSize: o.paneDefaults.details.max
			}, {
				default: F(() => [l(e.$slots, "default", {}, void 0, !0)]),
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
			"rtl",
			"onResized"
		])])) : E("", !0)], 64)) : E("", !0),
		e.$slots.list ? E("", !0) : l(e.$slots, "default", { key: 2 }, void 0, !0)
	], 2);
}
var la = /* @__PURE__ */ i(ia, [["render", ca], ["__scopeId", "data-v-51427d61"]]), Q = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ua = {
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
}, da = ["aria-hidden", "aria-label"], fa = [
	"fill",
	"width",
	"height"
], pa = { d: "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" }, ma = { key: 0 };
function ha(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon file-document-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", pa, [i.title ? (p(), q("title", ma, n(i.title), 1)) : E("", !0)])], 8, fa))], 16, da);
}
var ga = /*#__PURE__*/ Q(ua, [["render", ha]]), _a = {
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
}, va = ["aria-hidden", "aria-label"], ya = [
	"fill",
	"width",
	"height"
], ba = { d: "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" }, xa = { key: 0 };
function Sa(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon file-document-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", ba, [i.title ? (p(), q("title", xa, n(i.title), 1)) : E("", !0)])], 8, ya))], 16, va);
}
var Ca = /*#__PURE__*/ Q(_a, [["render", Sa]]), wa = {
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
}, Ta = ["aria-hidden", "aria-label"], Ea = [
	"fill",
	"width",
	"height"
], Da = { d: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" }, Oa = { key: 0 };
function ka(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon account-group-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Da, [i.title ? (p(), q("title", Oa, n(i.title), 1)) : E("", !0)])], 8, Ea))], 16, Ta);
}
var Aa = /*#__PURE__*/ Q(wa, [["render", ka]]), ja = {
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
}, Ma = ["aria-hidden", "aria-label"], Na = [
	"fill",
	"width",
	"height"
], Pa = { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" }, Fa = { key: 0 };
function Ia(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon account-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Pa, [i.title ? (p(), q("title", Fa, n(i.title), 1)) : E("", !0)])], 8, Na))], 16, Ma);
}
var La = /*#__PURE__*/ Q(ja, [["render", Ia]]), Ra = {
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
}, za = ["aria-hidden", "aria-label"], Ba = [
	"fill",
	"width",
	"height"
], Va = { d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" }, Ha = { key: 0 };
function Ua(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon package-variant-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Va, [i.title ? (p(), q("title", Ha, n(i.title), 1)) : E("", !0)])], 8, Ba))], 16, za);
}
var Wa = /*#__PURE__*/ Q(Ra, [["render", Ua]]), Ga = {
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
}, Ka = ["aria-hidden", "aria-label"], qa = [
	"fill",
	"width",
	"height"
], Ja = { d: "M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, Ya = { key: 0 };
function Xa(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon text-box-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Ja, [i.title ? (p(), q("title", Ya, n(i.title), 1)) : E("", !0)])], 8, qa))], 16, Ka);
}
var Za = /*#__PURE__*/ Q(Ga, [["render", Xa]]), Qa = {
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
}, $a = ["aria-hidden", "aria-label"], eo = [
	"fill",
	"width",
	"height"
], to = { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" }, no = { key: 0 };
function ro(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon cog-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", to, [i.title ? (p(), q("title", no, n(i.title), 1)) : E("", !0)])], 8, eo))], 16, $a);
}
var io = /*#__PURE__*/ Q(Qa, [["render", ro]]), ao = {
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
}, oo = ["aria-hidden", "aria-label"], so = [
	"fill",
	"width",
	"height"
], co = { d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" }, lo = { key: 0 };
function uo(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon lock-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", co, [i.title ? (p(), q("title", lo, n(i.title), 1)) : E("", !0)])], 8, so))], 16, oo);
}
var fo = /*#__PURE__*/ Q(ao, [["render", uo]]);
//#endregion
//#region src/api/client.ts
function po(e) {
	return Fe(`/apps/rechnungswerk/api/v1${e}`);
}
function mo(e) {
	let t = e;
	return {
		status: t.response?.status ?? 0,
		message: t.response?.data?.error ?? t.message ?? "Unknown error"
	};
}
async function $(e) {
	try {
		let { data: t } = await ht.get(po(e));
		return t;
	} catch (e) {
		throw mo(e);
	}
}
async function ho(e, t) {
	try {
		let { data: n } = await ht.post(po(e), t);
		return n;
	} catch (e) {
		throw mo(e);
	}
}
async function go(e, t) {
	try {
		let { data: n } = await ht.patch(po(e), t);
		return n;
	} catch (e) {
		throw mo(e);
	}
}
async function _o(e, t) {
	try {
		let { data: n } = await ht.put(po(e), t);
		return n;
	} catch (e) {
		throw mo(e);
	}
}
async function vo(e) {
	try {
		let { data: t } = await ht.delete(po(e));
		return t;
	} catch (e) {
		throw mo(e);
	}
}
//#endregion
//#region src/api/permissions.ts
var yo = () => $("/permission-info"), bo = () => $("/permissions"), xo = (e) => _o("/permissions", e), So = (e) => $(`/principals/search?query=${encodeURIComponent(e)}`), Co = $t("permissions", () => {
	let e = N(null), t = N(!1);
	async function n() {
		try {
			e.value = await yo();
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
}), wo = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "App",
	setup(e) {
		let t = Co(), n = U(() => t.info?.hasAccess ?? !1), r = U(() => t.info?.isAdmin ?? !1);
		return s(() => {
			t.fetch();
		}), (e, i) => {
			let a = x("router-view");
			return p(), I(Y(Kr), { appName: "rechnungswerk" }, {
				default: F(() => [Y(t).loaded ? n.value ? (p(), q(K, { key: 2 }, [J(Y(ti), null, {
					footer: F(() => [J(Y(qi), {
						name: Y(f)("rechnungswerk", "Mein Kontakt"),
						to: { name: "my-contact" }
					}, {
						icon: F(() => [J(La, { size: 20 })]),
						_: 1
					}, 8, ["name"]), r.value ? (p(), I(Y(qi), {
						key: 0,
						name: Y(f)("rechnungswerk", "Einstellungen"),
						to: { name: "settings" }
					}, {
						icon: F(() => [J(io, { size: 20 })]),
						_: 1
					}, 8, ["name"])) : E("", !0)]),
					default: F(() => [
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Rechnungen"),
							to: { name: "invoices" }
						}, {
							icon: F(() => [J(ga, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Beitragsabrechnung"),
							to: { name: "membership-fees" }
						}, {
							icon: F(() => [J(ga, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Angebote"),
							to: { name: "quotes" }
						}, {
							icon: F(() => [J(Ca, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Kunden"),
							to: { name: "customers" }
						}, {
							icon: F(() => [J(Aa, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Produkte"),
							to: { name: "products" }
						}, {
							icon: F(() => [J(Wa, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Textbausteine"),
							to: { name: "text-snippets" }
						}, {
							icon: F(() => [J(Za, { size: 20 })]),
							_: 1
						}, 8, ["name"])
					]),
					_: 1
				}), J(Y(la), null, {
					default: F(() => [J(a)]),
					_: 1
				})], 64)) : (p(), I(Y(la), { key: 1 }, {
					default: F(() => [J(Y(mt), {
						name: Y(f)("rechnungswerk", "Kein Zugriff"),
						description: Y(f)("rechnungswerk", "Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.")
					}, {
						icon: F(() => [J(fo, { size: 20 })]),
						_: 1
					}, 8, ["name", "description"])]),
					_: 1
				})) : (p(), I(Y(la), { key: 0 }, {
					default: F(() => [J(Y(yt), {
						class: "rw-app-loading",
						size: 44
					})]),
					_: 1
				}))]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-9de912de"]]), To = {
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
}, Eo = ["aria-hidden", "aria-label"], Do = [
	"fill",
	"width",
	"height"
], Oo = { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" }, ko = { key: 0 };
function Ao(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon information-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Oo, [i.title ? (p(), q("title", ko, n(i.title), 1)) : E("", !0)])], 8, Do))], 16, Eo);
}
var jo = /*#__PURE__*/ Q(To, [["render", Ao]]), Mo = { class: "info-icon-wrapper" }, No = {
	class: "info-popup",
	tabindex: "0"
}, Po = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "InfoIcon",
	setup(e) {
		return (e, t) => (p(), q("span", Mo, [J(Y(Ne), {
			popupRole: "tooltip",
			noFocusTrap: ""
		}, {
			trigger: F(() => [J(jo, {
				class: "info-icon",
				size: 14,
				tabindex: "0"
			})]),
			default: F(() => [z("div", No, [l(e.$slots, "default", {}, void 0, !0)])]),
			_: 3
		})]));
	}
}), [["__scopeId", "data-v-6c57a620"]]), Fo = {
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
}, Io = ["aria-hidden", "aria-label"], Lo = [
	"fill",
	"width",
	"height"
], Ro = { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, zo = { key: 0 };
function Bo(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon plus-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Ro, [i.title ? (p(), q("title", zo, n(i.title), 1)) : E("", !0)])], 8, Lo))], 16, Io);
}
var Vo = /*#__PURE__*/ Q(Fo, [["render", Bo]]), Ho = {
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
}, Uo = ["aria-hidden", "aria-label"], Wo = [
	"fill",
	"width",
	"height"
], Go = { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" }, Ko = { key: 0 };
function qo(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon download-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Go, [i.title ? (p(), q("title", Ko, n(i.title), 1)) : E("", !0)])], 8, Wo))], 16, Uo);
}
var Jo = /*#__PURE__*/ Q(Ho, [["render", qo]]), Yo = {
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
}, Xo = ["aria-hidden", "aria-label"], Zo = [
	"fill",
	"width",
	"height"
], Qo = { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }, $o = { key: 0 };
function es(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon content-copy-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Qo, [i.title ? (p(), q("title", $o, n(i.title), 1)) : E("", !0)])], 8, Zo))], 16, Xo);
}
var ts = /*#__PURE__*/ Q(Yo, [["render", es]]), ns = {
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
}, rs = ["aria-hidden", "aria-label"], is = [
	"fill",
	"width",
	"height"
], as = { d: "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" }, os = { key: 0 };
function ss(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon pencil-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", as, [i.title ? (p(), q("title", os, n(i.title), 1)) : E("", !0)])], 8, is))], 16, rs);
}
var cs = /*#__PURE__*/ Q(ns, [["render", ss]]), ls = {
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
}, us = ["aria-hidden", "aria-label"], ds = [
	"fill",
	"width",
	"height"
], fs = { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }, ps = { key: 0 };
function ms(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon close-circle-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", fs, [i.title ? (p(), q("title", ps, n(i.title), 1)) : E("", !0)])], 8, ds))], 16, us);
}
var hs = /*#__PURE__*/ Q(ls, [["render", ms]]), gs = {
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
}, _s = ["aria-hidden", "aria-label"], vs = [
	"fill",
	"width",
	"height"
], ys = { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" }, bs = { key: 0 };
function xs(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon check-circle-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", ys, [i.title ? (p(), q("title", bs, n(i.title), 1)) : E("", !0)])], 8, vs))], 16, _s);
}
var Ss = /*#__PURE__*/ Q(gs, [["render", xs]]), Cs = {
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
}, ws = ["aria-hidden", "aria-label"], Ts = [
	"fill",
	"width",
	"height"
], Es = { d: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" }, Ds = { key: 0 };
function Os(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon clock-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Es, [i.title ? (p(), q("title", Ds, n(i.title), 1)) : E("", !0)])], 8, Ts))], 16, ws);
}
var ks = /*#__PURE__*/ Q(Cs, [["render", Os]]), As = {
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
}, js = ["aria-hidden", "aria-label"], Ms = [
	"fill",
	"width",
	"height"
], Ns = { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, Ps = { key: 0 };
function Fs(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon help-circle-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Ns, [i.title ? (p(), q("title", Ps, n(i.title), 1)) : E("", !0)])], 8, Ms))], 16, js);
}
var Is = /*#__PURE__*/ Q(As, [["render", Fs]]), Ls = {
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
}, Rs = ["aria-hidden", "aria-label"], zs = [
	"fill",
	"width",
	"height"
], Bs = { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, Vs = { key: 0 };
function Hs(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon checkbox-blank-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Bs, [i.title ? (p(), q("title", Vs, n(i.title), 1)) : E("", !0)])], 8, zs))], 16, Rs);
}
var Us = /*#__PURE__*/ Q(Ls, [["render", Hs]]), Ws = {
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
}, Gs = ["aria-hidden", "aria-label"], Ks = [
	"fill",
	"width",
	"height"
], qs = { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, Js = { key: 0 };
function Ys(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon checkbox-marked-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", qs, [i.title ? (p(), q("title", Js, n(i.title), 1)) : E("", !0)])], 8, Ks))], 16, Gs);
}
var Xs = /*#__PURE__*/ Q(Ws, [["render", Ys]]), Zs = {
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
}, Qs = ["aria-hidden", "aria-label"], $s = [
	"fill",
	"width",
	"height"
], ec = { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }, tc = { key: 0 };
function nc(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon check-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", ec, [i.title ? (p(), q("title", tc, n(i.title), 1)) : E("", !0)])], 8, $s))], 16, Qs);
}
var rc = /*#__PURE__*/ Q(Zs, [["render", nc]]), ic = {
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
}, ac = ["aria-hidden", "aria-label"], oc = [
	"fill",
	"width",
	"height"
], sc = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, cc = { key: 0 };
function lc(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", sc, [i.title ? (p(), q("title", cc, n(i.title), 1)) : E("", !0)])], 8, oc))], 16, ac);
}
var uc = /*#__PURE__*/ Q(ic, [["render", lc]]), dc = () => $("/invoices"), fc = (e) => $(`/invoices/${e}`), pc = (e) => ho("/invoices", { data: e }), mc = (e, t) => go(`/invoices/${e}`, { data: t }), hc = (e) => vo(`/invoices/${e}`), gc = (e) => ho(`/invoices/${e}/commit`, {}), _c = (e) => ho(`/invoices/${e}/cancel`, {}), vc = (e) => ho(`/invoices/${e}/duplicate`, {}), yc = (e, t) => ho(`/invoices/${e}/pay`, t ? { date: t } : {}), bc = (e) => ho(`/invoices/${e}/unpay`, {}), xc = (e) => po(`/invoices/${e}/pdf`), Sc = (e) => po(`/invoices/${e}/preview`) + "?t=" + Date.now(), Cc = (e) => {
	let t = document.createElement("a");
	t.href = xc(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, wc = (e, t) => ho(`/invoices/${e}/send`, t), Tc = $t("invoice", () => {
	let e = N([]), t = N(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await dc();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => fc(e);
	async function i(e) {
		let t = await pc(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await mc(e, t);
		return await n(), r;
	}
	async function o(t) {
		await hc(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await gc(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await _c(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await vc(e);
		return await n(), t;
	}
	async function u(e, t) {
		let r = await yc(e, t);
		return await n(), r;
	}
	async function d(e) {
		let t = await bc(e);
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
}), Ec = (e) => ho("/smtp/test", e), Dc = () => $("/settings"), Oc = (e) => _o("/settings", { data: e }), kc = (e) => _o("/settings/logo", { path: e }), Ac = () => vo("/settings/logo"), jc = (e) => `${po("/settings/logo")}?v=${e}`, Mc = (e) => _o("/settings/archive-folder", { path: e }), Nc = () => vo("/settings/archive-folder"), Pc = $t("settings", () => {
	let e = N(null), t = N(!1), n = N(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await Dc();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		n.value = !0;
		try {
			return e.value = await Oc(t), e.value;
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
}), Fc = [
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
], Ic = {
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
}, Lc = [
	1900,
	700,
	0
], Rc = "Gem. § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.", zc = {
	invoice: "Rechnung",
	quote: "Angebot"
}, Bc = {
	opening: "Anrede & Einleitung",
	closing: "Schlusstext"
}, Vc = {
	draft: "Entwurf",
	committed: "Festgeschrieben",
	cancelled: "Storniert"
}, Hc = {
	invoice: "Rechnung",
	cancellation: "Storno",
	quote: "Angebot"
}, Uc = {
	draft: "Entwurf",
	open: "Offen",
	expired: "Abgelaufen",
	accepted: "Angenommen",
	rejected: "Abgelehnt",
	converted: "Übernommen",
	superseded: "Revidiert"
};
function Wc(e) {
	return e.includes(".") ? /^\d{1,3}(\.\d{3})+$/.test(e) : /^\d*$/.test(e);
}
function Gc(e, t, n) {
	if (e == null) return null;
	let r = String(e).replace(/[\s  ]+/g, "");
	if (r === "") return null;
	let i = !1;
	if (r.startsWith("-") ? (i = !0, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1)), r === "" || !/^[0-9.,]+$/.test(r)) return null;
	let a = r.indexOf(","), o, s;
	if (a >= 0) {
		if (r.includes(",", a + 1) || (o = r.slice(0, a), s = r.slice(a + 1), s.includes("."))) return null;
	} else o = r, s = "";
	if (!Wc(o) || (o = o.split(".").join(""), o === "" && s === "") || (o === "" && (o = "0"), !/^\d+$/.test(o)) || s !== "" && !/^\d+$/.test(s) || s.length > t || (o = o.replace(/^0+/, ""), o === "" && (o = "0"), o.length > n)) return null;
	s = s.replace(/0+$/, "");
	let c = o + (s === "" ? "" : "." + s);
	return i && c !== "0" ? "-" + c : c;
}
function Kc(e) {
	return e == null || String(e).trim() === "" ? "1" : Gc(e, 3, 9);
}
function qc(e) {
	return e == null || String(e).trim() === "" ? "0" : Gc(e, 4, 9);
}
function Jc(e) {
	if (e === null) return "";
	let [t, n] = e.split("."), r = t.startsWith("-") ? "-" : "";
	return r + (r ? t.slice(1) : t).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (n ? "," + n : "");
}
function Yc(e) {
	if (e == null) return "";
	let t = String(e).trim();
	if (t === "") return "";
	if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(t)) return t;
	let n = t.startsWith("-");
	(n || t.startsWith("+")) && (t = t.slice(1));
	let [r, i = ""] = t.split("."), a = r.replace(/^0+/, "") || "0", o = i.replace(/0+$/, "");
	return Jc((n && (a !== "0" || o !== "") ? "-" : "") + a + (o === "" ? "" : "." + o));
}
//#endregion
//#region src/utils/money.ts
function Xc(e) {
	return e == null ? "" : Jc((e / 1e4).toFixed(4).replace(/(\.\d\d)(\d*?)0+$/, "$1$2"));
}
function Zc(e) {
	let t = qc(e);
	return t === null ? 0 : Math.round(Number.parseFloat(t) * 1e4);
}
function Qc(e) {
	let t = (e ?? 0) / 1e4;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	}).format(t);
}
function $c(e) {
	let t = (e ?? 0) / 100;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR"
	}).format(t);
}
function el(e) {
	return `${e / 100} %`;
}
//#endregion
//#region src/views/InvoicesView.vue?vue&type=script&setup=true&lang.ts
var tl = { class: "rw-view" }, nl = { class: "rw-view__head" }, rl = { key: 2 }, il = { class: "rw-filterbar" }, al = ["onClick"], ol = { class: "rw-chip__n" }, sl = {
	key: 0,
	class: "rw-chip rw-chip--sum"
}, cl = { class: "rw-table-wrap" }, ll = { class: "rw-table" }, ul = { class: "rw-th-info" }, dl = { class: "rw-info-popup" }, fl = { class: "rw-info-popup__hint" }, pl = { class: "rw-info-popup__group" }, ml = { class: "rw-legend__label" }, hl = { class: "rw-legend__item" }, gl = { class: "rw-legend__item" }, _l = { class: "rw-legend__item" }, vl = {
	key: 0,
	class: "rw-info-popup__group"
}, yl = { class: "rw-legend__label" }, bl = { class: "rw-legend__item" }, xl = { class: "rw-legend__item" }, Sl = { class: "rw-legend__item" }, Cl = { class: "num" }, wl = { class: "rw-col-paid" }, Tl = ["onClick"], El = { class: "rw-status-cell" }, Dl = {
	key: 0,
	class: "rw-pill"
}, Ol = { class: "num" }, kl = ["aria-label", "onKeyup"], Al = ["title", "onClick"], jl = { class: "rw-col-paid" }, Ml = [
	"aria-label",
	"title",
	"onClick"
], Nl = { class: "rw-col-actions" }, Pl = { class: "rw-actions" }, Fl = 864e5, Il = /* @__PURE__ */ r({
	__name: "InvoicesView",
	setup(e) {
		let t = Je(), r = Tc(), i = Pc(), a = N(""), o = U(() => !!i.settings?.imapHost), l = U(() => r.invoices.some((e) => !!e.datevStatus)), u = U(() => o.value || l.value), d = [
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
		], m = N("all"), h = (e) => e.paymentStatus === "unpaid" || e.paymentStatus === "overdue", g = U(() => {
			let e = {
				all: r.invoices.length,
				open: 0,
				overdue: 0,
				paid: 0
			};
			for (let t of r.invoices) h(t) && e.open++, t.paymentStatus === "overdue" && e.overdue++, t.paymentStatus === "paid" && e.paid++;
			return e;
		}), _ = U(() => r.invoices.reduce((e, t) => e + (h(t) ? t.totalCents : 0), 0)), v = U(() => {
			switch (m.value) {
				case "open": return r.invoices.filter(h);
				case "overdue": return r.invoices.filter((e) => e.paymentStatus === "overdue");
				case "paid": return r.invoices.filter((e) => e.paymentStatus === "paid");
				default: return r.invoices;
			}
		});
		function y(e) {
			return e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e);
		}
		function b(e) {
			let t = y(e);
			t.setHours(0, 0, 0, 0);
			let n = /* @__PURE__ */ new Date();
			return n.setHours(0, 0, 0, 0), Math.round((t.getTime() - n.getTime()) / Fl);
		}
		function x(e) {
			return e ? y(e).toLocaleDateString(void 0, {
				day: "numeric",
				month: "numeric"
			}) : "";
		}
		let ee = (e) => e.paymentStatus === "overdue" ? "rw-amt-overdue" : e.paymentStatus === "paid" ? "rw-amt-paid" : "";
		function te(e) {
			if (e.paymentStatus === "paid") return e.paidAt ? f("rechnungswerk", "bezahlt am {date}", { date: x(e.paidAt) }) : f("rechnungswerk", "bezahlt");
			if (!e.dueDate) return "";
			let t = b(e.dueDate);
			if (e.paymentStatus === "overdue") {
				let e = -t;
				return e === 1 ? f("rechnungswerk", "1 Tag überfällig") : f("rechnungswerk", "{days} Tage überfällig", { days: String(e) });
			}
			return e.paymentStatus === "unpaid" ? t <= 0 ? f("rechnungswerk", "fällig heute") : t === 1 ? f("rechnungswerk", "fällig morgen ({date})", { date: x(e.dueDate) }) : f("rechnungswerk", "fällig in {days} Tagen ({date})", {
				days: String(t),
				date: x(e.dueDate)
			}) : "";
		}
		let w = (e) => e.paymentStatus === "paid" ? f("rechnungswerk", "Als unbezahlt markieren") : f("rechnungswerk", "Als bezahlt markieren");
		function T(e) {
			return e.paymentStatus === "paid" ? e.paidAt ? f("rechnungswerk", "Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen", { date: x(e.paidAt) }) : f("rechnungswerk", "Bezahlt – klicken, um die Zahlung zurückzunehmen") : f("rechnungswerk", "Als bezahlt markieren");
		}
		async function D(e) {
			a.value = "";
			try {
				e.paymentStatus === "paid" ? await r.markUnpaid(e.id) : await r.markPaid(e.id);
			} catch (e) {
				a.value = e.message ?? f("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		let j = N(null), P = N("");
		function ne(e) {
			let t = e ? y(e) : /* @__PURE__ */ new Date(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
			return `${t.getFullYear()}-${n}-${r}`;
		}
		function re(e) {
			a.value = "", P.value = ne(e.paidAt), j.value = e.id;
		}
		function ie() {
			j.value = null;
		}
		async function L(e) {
			if (!P.value) {
				ie();
				return;
			}
			a.value = "";
			try {
				await r.markPaid(e.id, P.value), j.value = null;
			} catch (e) {
				a.value = e.message ?? f("rechnungswerk", "Zahldatum konnte nicht geändert werden");
			}
		}
		let R = {
			draft: cs,
			committed: fo,
			cancelled: hs
		}, B = {
			pending: ks,
			confirmed: Ss,
			unknown: Is,
			failed: hs
		}, V = (e) => R[e] ?? ga, ae = (e) => e ? B[e] ?? null : null, oe = {
			pending: f("rechnungswerk", "An DATEV gesendet – Bestätigung ausstehend"),
			confirmed: f("rechnungswerk", "Von DATEV bestätigt (Beleg angenommen)"),
			unknown: f("rechnungswerk", "DATEV-Antwort prüfen"),
			failed: f("rechnungswerk", "Von DATEV abgelehnt")
		}, se = (e) => oe[e] ?? "", ce = (e) => f("rechnungswerk", Vc[e] ?? e), le = (e) => f("rechnungswerk", Hc[e] ?? e), H = (e) => e.relatedNumber ? f("rechnungswerk", "{type} zu Rechnung {number}", {
			type: le(e.invoiceType),
			number: e.relatedNumber
		}) : le(e.invoiceType);
		function ue(e) {
			return e ? new Date(e).toLocaleDateString() : "—";
		}
		s(() => {
			r.fetchAll().catch((e) => {
				a.value = e.message ?? f("rechnungswerk", "Laden fehlgeschlagen");
			}), i.fetch().catch(() => {});
		});
		function de() {
			t.push({ name: "invoice-new" });
		}
		function W(e) {
			t.push({
				name: "invoice-detail",
				params: { id: String(e) }
			});
		}
		function fe(e) {
			Cc(e);
		}
		async function pe(e) {
			a.value = "";
			try {
				let n = await r.duplicate(e);
				t.push({
					name: "invoice-detail",
					params: { id: String(n.id) }
				});
			} catch (e) {
				a.value = e.message ?? f("rechnungswerk", "Duplizieren fehlgeschlagen");
			}
		}
		return (e, t) => {
			let i = C("tooltip");
			return p(), q("div", tl, [
				z("div", nl, [z("h2", null, n(Y(f)("rechnungswerk", "Rechnungen")), 1), J(Y(X), {
					variant: "primary",
					onClick: de
				}, {
					icon: F(() => [J(Vo, { size: 20 })]),
					default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Neue Rechnung")), 1)]),
					_: 1
				})]),
				a.value ? (p(), I(Y(it), {
					key: 0,
					type: "error",
					text: a.value
				}, null, 8, ["text"])) : E("", !0),
				!Y(r).loading && Y(r).invoices.length === 0 ? (p(), I(Y(mt), {
					key: 1,
					name: Y(f)("rechnungswerk", "Noch keine Rechnungen"),
					description: Y(f)("rechnungswerk", "Lege deine erste Rechnung an.")
				}, {
					icon: F(() => [J(ga, { size: 20 })]),
					_: 1
				}, 8, ["name", "description"])) : Y(r).invoices.length > 0 ? (p(), q("div", rl, [z("div", il, [(p(), q(K, null, S(d, (e) => z("button", {
					key: e.key,
					class: k(["rw-chip", {
						"rw-chip--active": m.value === e.key,
						"rw-chip--overdue": e.key === "overdue"
					}]),
					onClick: (t) => m.value = e.key
				}, [A(n(Y(f)("rechnungswerk", e.label)) + " ", 1), z("span", ol, n(g.value[e.key]), 1)], 10, al)), 64)), _.value > 0 ? (p(), q("span", sl, [A(n(Y(f)("rechnungswerk", "Offen gesamt:")) + " ", 1), z("strong", null, n(Y($c)(_.value)), 1)])) : E("", !0)]), z("div", cl, [z("table", ll, [z("thead", null, [z("tr", null, [
					z("th", null, [z("span", ul, [A(n(Y(f)("rechnungswerk", "Status")) + " ", 1), J(Po, null, {
						default: F(() => [z("div", dl, [
							z("p", fl, n(Y(f)("rechnungswerk", "Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.")), 1),
							z("div", pl, [
								z("span", ml, n(Y(f)("rechnungswerk", "Rechnung")), 1),
								z("span", hl, [J(fo, {
									size: 16,
									class: "rw-sicon rw-sicon--committed"
								}), A(" " + n(Y(f)("rechnungswerk", "Festgeschrieben")), 1)]),
								z("span", gl, [J(cs, {
									size: 16,
									class: "rw-sicon rw-sicon--draft"
								}), A(" " + n(Y(f)("rechnungswerk", "Entwurf")), 1)]),
								z("span", _l, [J(hs, {
									size: 16,
									class: "rw-sicon rw-sicon--cancelled"
								}), A(" " + n(Y(f)("rechnungswerk", "Storniert")), 1)])
							]),
							u.value ? (p(), q("div", vl, [
								z("span", yl, n(Y(f)("rechnungswerk", "DATEV-Übergabe")), 1),
								z("span", bl, [J(Ss, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-confirmed"
								}), A(" " + n(Y(f)("rechnungswerk", "bestätigt")), 1)]),
								z("span", xl, [J(ks, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-pending"
								}), A(" " + n(Y(f)("rechnungswerk", "gesendet")), 1)]),
								z("span", Sl, [J(Is, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-unknown"
								}), A(" " + n(Y(f)("rechnungswerk", "Antwort prüfen")), 1)])
							])) : E("", !0)
						])]),
						_: 1
					})])]),
					z("th", null, n(Y(f)("rechnungswerk", "Nummer")), 1),
					z("th", null, n(Y(f)("rechnungswerk", "Empfänger")), 1),
					z("th", null, n(Y(f)("rechnungswerk", "Datum")), 1),
					z("th", Cl, n(Y(f)("rechnungswerk", "Brutto")), 1),
					z("th", wl, n(Y(f)("rechnungswerk", "Bezahlt")), 1),
					t[2] ||= z("th", { class: "rw-col-actions" }, null, -1)
				])]), z("tbody", null, [(p(!0), q(K, null, S(v.value, (e) => (p(), q("tr", {
					key: e.id,
					class: k(["rw-row-clickable", { "rw-row--overdue": e.paymentStatus === "overdue" }]),
					onClick: (t) => W(e.id)
				}, [
					z("td", null, [z("span", El, [(p(), I(c(V(e.status)), {
						size: 20,
						class: k(["rw-sicon", `rw-sicon--${e.status}`]),
						title: ce(e.status)
					}, null, 8, ["class", "title"])), u.value && e.datevStatus && ae(e.datevStatus) ? (p(), I(c(ae(e.datevStatus)), {
						key: 0,
						size: 18,
						class: k(["rw-sicon", `rw-sicon--datev-${e.datevStatus}`]),
						title: se(e.datevStatus)
					}, null, 8, ["class", "title"])) : E("", !0)])]),
					z("td", null, [A(n(e.number ?? Y(f)("rechnungswerk", "(Entwurf)")) + " ", 1), e.invoiceType === "invoice" ? E("", !0) : G((p(), q("span", Dl, [A(n(le(e.invoiceType)), 1)])), [[i, H(e)]])]),
					z("td", null, n(e.recipientName ?? "—"), 1),
					z("td", null, n(ue(e.issueDate ?? e.createdAt)), 1),
					z("td", Ol, [z("span", { class: k(ee(e)) }, n(Y($c)(e.totalCents)), 3), j.value === e.id ? (p(), q("div", {
						key: 0,
						class: "rw-paid-edit",
						onClick: t[1] ||= M(() => {}, ["stop"])
					}, [
						G(z("input", {
							"onUpdate:modelValue": t[0] ||= (e) => P.value = e,
							type: "date",
							class: "rw-input rw-paid-input",
							"aria-label": Y(f)("rechnungswerk", "Zahldatum"),
							onKeyup: [ye((t) => L(e), ["enter"]), ye(ie, ["esc"])]
						}, null, 40, kl), [[O, P.value]]),
						J(Y(X), {
							variant: "primary",
							"aria-label": Y(f)("rechnungswerk", "Zahldatum speichern"),
							title: Y(f)("rechnungswerk", "Zahldatum speichern"),
							onClick: M((t) => L(e), ["stop"])
						}, {
							icon: F(() => [J(rc, { size: 18 })]),
							_: 1
						}, 8, [
							"aria-label",
							"title",
							"onClick"
						]),
						J(Y(X), {
							variant: "tertiary",
							"aria-label": Y(f)("rechnungswerk", "Abbrechen"),
							title: Y(f)("rechnungswerk", "Abbrechen"),
							onClick: M(ie, ["stop"])
						}, {
							icon: F(() => [J(uc, { size: 18 })]),
							_: 1
						}, 8, ["aria-label", "title"])
					])) : e.paymentStatus === "paid" ? (p(), q("button", {
						key: 1,
						type: "button",
						class: "rw-subline rw-subline--editable",
						title: Y(f)("rechnungswerk", "Zahldatum ändern"),
						onClick: M((t) => re(e), ["stop"])
					}, n(te(e)), 9, Al)) : te(e) ? (p(), q("div", {
						key: 2,
						class: k(["rw-subline", { "rw-subline--overdue": e.paymentStatus === "overdue" }])
					}, n(te(e)), 3)) : E("", !0)]),
					z("td", jl, [e.paymentStatus ? (p(), q("button", {
						key: 0,
						class: k(["rw-paybox", e.paymentStatus === "paid" ? "rw-paybox--paid" : "rw-paybox--open"]),
						"aria-label": w(e),
						title: T(e),
						onClick: M((t) => D(e), ["stop"])
					}, [(p(), I(c(e.paymentStatus === "paid" ? Xs : Us), { size: 22 }))], 10, Ml)) : E("", !0)]),
					z("td", Nl, [z("div", Pl, [e.invoiceType === "cancellation" ? E("", !0) : (p(), I(Y(X), {
						key: 0,
						variant: "tertiary",
						"aria-label": Y(f)("rechnungswerk", "Duplizieren"),
						title: Y(f)("rechnungswerk", "Als Vorlage für neue Rechnung duplizieren"),
						onClick: M((t) => pe(e.id), ["stop"])
					}, {
						icon: F(() => [J(ts, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])), e.status === "draft" ? E("", !0) : (p(), I(Y(X), {
						key: 1,
						variant: "tertiary",
						"aria-label": Y(f)("rechnungswerk", "PDF herunterladen"),
						title: Y(f)("rechnungswerk", "PDF herunterladen"),
						onClick: M((t) => fe(e.id), ["stop"])
					}, {
						icon: F(() => [J(Jo, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					]))])])
				], 10, Tl))), 128))])])])])) : E("", !0)
			]);
		};
	}
}), Ll = {
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
}, Rl = ["aria-hidden", "aria-label"], zl = [
	"fill",
	"width",
	"height"
], Bl = { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" }, Vl = { key: 0 };
function Hl(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon delete-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Bl, [i.title ? (p(), q("title", Vl, n(i.title), 1)) : E("", !0)])], 8, zl))], 16, Rl);
}
var Ul = /*#__PURE__*/ Q(Ll, [["render", Hl]]), Wl = {
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
}, Gl = ["aria-hidden", "aria-label"], Kl = [
	"fill",
	"width",
	"height"
], ql = { d: "M2,21L23,12L2,3V10L17,12L2,14V21Z" }, Jl = { key: 0 };
function Yl(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon send-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", ql, [i.title ? (p(), q("title", Jl, n(i.title), 1)) : E("", !0)])], 8, Kl))], 16, Gl);
}
var Xl = /*#__PURE__*/ Q(Wl, [["render", Yl]]), Zl = {
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
}, Ql = ["aria-hidden", "aria-label"], $l = [
	"fill",
	"width",
	"height"
], eu = { d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" }, tu = { key: 0 };
function nu(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon eye-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", eu, [i.title ? (p(), q("title", tu, n(i.title), 1)) : E("", !0)])], 8, $l))], 16, Ql);
}
var ru = /*#__PURE__*/ Q(Zl, [["render", nu]]), iu = {
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
}, au = ["aria-hidden", "aria-label"], ou = [
	"fill",
	"width",
	"height"
], su = { d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 20.41 4.12 20.8 4.34 21.12C4.41 21.23 4.5 21.33 4.59 21.41C4.95 21.78 5.45 22 6 22H13.53C13 21.42 12.61 20.75 12.35 20H6V4H13V9H18V12C18.7 12 19.37 12.12 20 12.34V8L14 2M18 23L23 18.5L20 15.8L18 14V17H14V20H18V23Z" }, cu = { key: 0 };
function lu(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon file-move-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", su, [i.title ? (p(), q("title", cu, n(i.title), 1)) : E("", !0)])], 8, ou))], 16, au);
}
var uu = /*#__PURE__*/ Q(iu, [["render", lu]]), du = {
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
}, fu = ["aria-hidden", "aria-label"], pu = [
	"fill",
	"width",
	"height"
], mu = { d: "M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" }, hu = { key: 0 };
function gu(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon file-edit-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", mu, [i.title ? (p(), q("title", hu, n(i.title), 1)) : E("", !0)])], 8, pu))], 16, fu);
}
var _u = /*#__PURE__*/ Q(du, [["render", gu]]), vu = (e) => $(`/contacts/search?q=${encodeURIComponent(e)}`), yu = () => $("/me"), bu = { class: "contact-picker" }, xu = ["value", "placeholder"], Su = {
	key: 0,
	class: "contact-picker__list"
}, Cu = ["onMousedown"], wu = {
	key: 0,
	class: "muted"
}, Tu = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "ContactPicker",
	props: { modelValue: {} },
	emits: ["update:modelValue", "select"],
	setup(e, { emit: t }) {
		let r = t, i = N([]), a = N(!1), o = null;
		function s(e) {
			if (r("update:modelValue", e), o && clearTimeout(o), e.trim().length < 2) {
				i.value = [], a.value = !1;
				return;
			}
			o = setTimeout(async () => {
				try {
					i.value = await vu(e.trim()), a.value = i.value.length > 0;
				} catch {
					i.value = [], a.value = !1;
				}
			}, 300);
		}
		function c(e) {
			r("update:modelValue", e.name), r("select", e), a.value = !1, i.value = [];
		}
		function l() {
			setTimeout(() => {
				a.value = !1;
			}, 150);
		}
		return h(() => {
			o && clearTimeout(o);
		}), (t, r) => (p(), q("div", bu, [z("input", {
			value: e.modelValue,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: Y(f)("rechnungswerk", "Name eingeben oder Kontakt wählen\xA0…"),
			onInput: r[0] ||= (e) => s(e.target.value),
			onFocus: r[1] ||= (e) => a.value = i.value.length > 0,
			onBlur: l
		}, null, 40, xu), a.value && i.value.length > 0 ? (p(), q("ul", Su, [(p(!0), q(K, null, S(i.value, (e, t) => (p(), q("li", {
			key: t,
			class: "contact-picker__item",
			onMousedown: M((t) => c(e), ["prevent"])
		}, [z("strong", null, n(e.name), 1), e.email ? (p(), q("span", wu, n(e.email), 1)) : E("", !0)], 40, Cu))), 128))])) : E("", !0)]));
	}
}), [["__scopeId", "data-v-23f7f625"]]), Eu = null, Du = () => (Eu === null && (Eu = $("/countries").catch((e) => {
	throw Eu = null, e;
})), Eu), Ou = ["disabled", "title"], ku = ["value"], Au = ["value"], ju = /* @__PURE__ */ r({
	__name: "CountrySelect",
	props: /*@__PURE__*/ ce({
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
		let t = d(e, "modelValue"), r = N([]), i = U(() => {
			let e = r.value.find((e) => e.code === t.value);
			return e ? `${e.label} (${e.code})` : t.value ?? "";
		}), a = U(() => {
			let e = t.value ?? "";
			return e === "" || r.value.length === 0 ? e : r.value.some((t) => t.code === e) ? "" : e;
		});
		return s(async () => {
			try {
				r.value = await Du();
			} catch {
				r.value = [];
			}
		}), (o, s) => G((p(), q("select", {
			"onUpdate:modelValue": s[0] ||= (e) => t.value = e,
			class: k(e.selectClass),
			disabled: e.disabled,
			title: i.value
		}, [a.value === "" ? E("", !0) : (p(), q("option", {
			key: 0,
			value: a.value
		}, n(a.value), 9, ku)), (p(!0), q(K, null, S(r.value, (e) => (p(), q("option", {
			key: e.code,
			value: e.code
		}, n(e.label) + " (" + n(e.code) + ")", 9, Au))), 128))], 10, Ou)), [[ae, t.value]]);
	}
}), Mu = () => $("/customers"), Nu = (e) => ho("/customers", { data: e }), Pu = (e, t) => go(`/customers/${e}`, { data: t }), Fu = (e) => vo(`/customers/${e}`), Iu = $t("customer", () => {
	let e = N([]), t = N(!1);
	function n() {
		e.value.sort((e, t) => e.name.localeCompare(t.name));
	}
	async function r() {
		t.value = !0;
		try {
			e.value = await Mu();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		let r = await Nu(t);
		return e.value.push(r), n(), r;
	}
	async function a(t, r) {
		let i = await Pu(t, r), a = e.value.findIndex((e) => e.id === t);
		return a >= 0 && (e.value[a] = i), n(), i;
	}
	async function o(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Fu(t);
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
}), Lu = { class: "customer-picker" }, Ru = ["value", "placeholder"], zu = {
	key: 0,
	class: "customer-picker__list"
}, Bu = ["onMousedown"], Vu = { class: "muted" }, Hu = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "CustomerPicker",
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = t, i = Iu(), a = N(""), o = N([]), c = N(!1);
		s(() => {
			i.customers.length === 0 && i.fetchAll().catch((e) => console.error("[rechnungswerk] customer picker:", e));
		});
		function l(e) {
			a.value = e;
			let t = e.trim().toLowerCase();
			if (t === "") {
				o.value = [], c.value = !1;
				return;
			}
			o.value = i.customers.filter((e) => `${e.name} ${e.customerNumber} ${e.city ?? ""} ${e.vatId ?? ""}`.toLowerCase().includes(t)).slice(0, 20), c.value = o.value.length > 0;
		}
		function u(e) {
			a.value = "", o.value = [], c.value = !1, r("select", e);
		}
		function d() {
			setTimeout(() => {
				c.value = !1;
			}, 150);
		}
		return (e, t) => (p(), q("div", Lu, [z("input", {
			value: a.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: Y(f)("rechnungswerk", "Kunde suchen oder anlegen\xA0…"),
			onInput: t[0] ||= (e) => l(e.target.value),
			onFocus: t[1] ||= (e) => c.value = o.value.length > 0,
			onBlur: d
		}, null, 40, Ru), c.value && o.value.length > 0 ? (p(), q("ul", zu, [(p(!0), q(K, null, S(o.value, (e) => (p(), q("li", {
			key: e.id,
			class: "customer-picker__item",
			onMousedown: M((t) => u(e), ["prevent"])
		}, [z("strong", null, n(e.name), 1), z("span", Vu, n([
			e.customerNumber,
			[e.postalCode, e.city].filter(Boolean).join(" "),
			e.vatId
		].filter(Boolean).join(" · ")), 1)], 40, Bu))), 128))])) : E("", !0)]));
	}
}), [["__scopeId", "data-v-4ad9c538"]]);
//#endregion
//#region src/types/editor.ts
function Uu(e = 1900) {
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
function Wu(e, t) {
	return {
		productId: e.id,
		name: e.name,
		description: e.description ?? "",
		quantity: "1",
		unitCode: e.defaultUnitCode,
		unitLabel: e.defaultUnitLabel ?? "",
		priceInput: Xc(e.defaultPriceE4),
		taxRateBp: t ? 0 : e.defaultTaxRateBp
	};
}
function Gu(e) {
	return {
		productId: e.productId,
		name: e.name,
		description: e.description ?? "",
		quantity: Yc(e.quantity),
		unitCode: e.unitCode,
		unitLabel: e.unitLabel ?? "",
		priceInput: Xc(e.unitPriceE4),
		taxRateBp: e.taxRateBp
	};
}
//#endregion
//#region src/utils/invoiceCalc.ts
function Ku(e, t) {
	let n = Kc(e);
	if (n === null) return 0;
	let r = Math.round(Number(n) * 1e3);
	return Math.round(r * t / 1e5);
}
function qu(e, t = !1) {
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
var Ju = { class: "rw-table-wrap" }, Yu = { class: "rw-table rw-table--positions" }, Xu = {
	key: 0,
	class: "rw-col-actions"
}, Zu = { class: "num" }, Qu = { class: "num" }, $u = { class: "num" }, ed = { class: "rw-sum" }, td = { key: 0 }, nd = { class: "rw-pos-main" }, rd = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], id = { class: "num" }, ad = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], od = ["onUpdate:modelValue", "disabled"], sd = ["value"], cd = { class: "num" }, ld = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], ud = { class: "num" }, dd = ["onUpdate:modelValue", "disabled"], fd = ["value"], pd = { class: "rw-sum" }, md = {
	key: 0,
	class: "num"
}, hd = {
	key: 0,
	class: "rw-pos-desc"
}, gd = ["colspan"], _d = { class: "rw-sub-row" }, vd = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder",
	"title"
], yd = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], bd = { key: 0 }, xd = ["colspan"], Sd = {
	key: 0,
	class: "rw-toolbar"
}, Cd = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "InvoiceItemsTable",
	props: /*@__PURE__*/ ce({
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
		let t = d(e, "items"), r = e, i = (e) => Ku(e.quantity, Zc(e.priceInput));
		function a(e) {
			let t = Kc(e.quantity);
			t !== null && (e.quantity = Jc(t));
		}
		function o(e) {
			qc(e.priceInput) !== null && (e.priceInput = Xc(Zc(e.priceInput)));
		}
		_(() => r.smallBusiness, (e) => {
			if (e) for (let e of t.value) e.taxRateBp = 0;
		}, { immediate: !0 });
		function s() {
			t.value.push(Uu(r.smallBusiness ? 0 : r.defaultTaxRateBp ?? 1900));
		}
		function c(e) {
			t.value.push(Wu(e, r.smallBusiness ?? !1));
		}
		function l(e) {
			t.value.splice(e, 1);
		}
		return (r, u) => (p(), q("div", null, [z("div", Ju, [z("table", Yu, [
			z("colgroup", null, [
				u[0] ||= z("col", null, null, -1),
				u[1] ||= z("col", { class: "rw-col-qty" }, null, -1),
				u[2] ||= z("col", { class: "rw-col-unit" }, null, -1),
				u[3] ||= z("col", { class: "rw-col-price" }, null, -1),
				u[4] ||= z("col", { class: "rw-col-tax" }, null, -1),
				u[5] ||= z("col", { class: "rw-col-sum" }, null, -1),
				e.readonly ? E("", !0) : (p(), q("col", Xu))
			]),
			z("thead", null, [z("tr", null, [
				z("th", null, n(Y(f)("rechnungswerk", "Bezeichnung")), 1),
				z("th", Zu, n(Y(f)("rechnungswerk", "Menge")), 1),
				z("th", null, n(Y(f)("rechnungswerk", "Einheit")), 1),
				z("th", Qu, n(Y(f)("rechnungswerk", "Einzelpreis (€)")), 1),
				z("th", $u, n(Y(f)("rechnungswerk", "USt")), 1),
				z("th", ed, n(Y(f)("rechnungswerk", "Summe netto")), 1),
				e.readonly ? E("", !0) : (p(), q("th", td))
			])]),
			z("tbody", null, [(p(!0), q(K, null, S(t.value, (t, r) => (p(), q(K, { key: r }, [z("tr", nd, [
				z("td", null, [G(z("input", {
					"onUpdate:modelValue": (e) => t.name = e,
					class: "rw-input",
					type: "text",
					readonly: e.readonly,
					placeholder: Y(f)("rechnungswerk", "Leistung")
				}, null, 8, rd), [[O, t.name]])]),
				z("td", id, [G(z("input", {
					"onUpdate:modelValue": (e) => t.quantity = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => a(t)
				}, null, 40, ad), [[O, t.quantity]])]),
				z("td", null, [G(z("select", {
					"onUpdate:modelValue": (e) => t.unitCode = e,
					class: "rw-input",
					disabled: e.readonly
				}, [(p(!0), q(K, null, S(Y(Fc), (e) => (p(), q("option", {
					key: e,
					value: e
				}, n(Y(f)("rechnungswerk", Y(Ic)[e])), 9, sd))), 128))], 8, od), [[ae, t.unitCode]])]),
				z("td", cd, [G(z("input", {
					"onUpdate:modelValue": (e) => t.priceInput = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => o(t)
				}, null, 40, ld), [[O, t.priceInput]])]),
				z("td", ud, [G(z("select", {
					"onUpdate:modelValue": (e) => t.taxRateBp = e,
					class: "rw-input",
					disabled: e.readonly || e.smallBusiness
				}, [(p(!0), q(K, null, S(Y(Lc), (e) => (p(), q("option", {
					key: e,
					value: e
				}, n(Y(el)(e)), 9, fd))), 128))], 8, dd), [[
					ae,
					t.taxRateBp,
					void 0,
					{ number: !0 }
				]])]),
				z("td", pd, n(Y($c)(i(t))), 1),
				e.readonly ? E("", !0) : (p(), q("td", md, [J(Y(X), {
					variant: "tertiary",
					"aria-label": Y(f)("rechnungswerk", "Position entfernen"),
					onClick: (e) => l(r)
				}, {
					icon: F(() => [J(Ul, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "onClick"])]))
			]), !e.readonly || t.description || t.unitLabel ? (p(), q("tr", hd, [z("td", { colspan: e.readonly ? 6 : 7 }, [z("div", _d, [!e.readonly || t.unitLabel ? G((p(), q("input", {
				key: 0,
				"onUpdate:modelValue": (e) => t.unitLabel = e,
				class: "rw-input rw-input--sub rw-unit-label",
				type: "text",
				maxlength: "64",
				readonly: e.readonly,
				placeholder: Y(f)("rechnungswerk", "eigene Einheit"),
				title: Y(f)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.")
			}, null, 8, vd)), [[O, t.unitLabel]]) : E("", !0), !e.readonly || t.description ? G((p(), q("input", {
				key: 1,
				"onUpdate:modelValue": (e) => t.description = e,
				class: "rw-input rw-input--sub rw-desc",
				type: "text",
				readonly: e.readonly,
				placeholder: Y(f)("rechnungswerk", "Beschreibung (optional)")
			}, null, 8, yd)), [[O, t.description]]) : E("", !0)])], 8, gd)])) : E("", !0)], 64))), 128)), t.value.length === 0 ? (p(), q("tr", bd, [z("td", {
				colspan: e.readonly ? 6 : 7,
				class: "rw-muted empty-row"
			}, n(Y(f)("rechnungswerk", "Noch keine Positionen.")), 9, xd)])) : E("", !0)])
		])]), e.readonly ? E("", !0) : (p(), q("div", Sd, [J(Y(X), { onClick: s }, {
			icon: F(() => [J(Vo, { size: 20 })]),
			default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Position hinzufügen")), 1)]),
			_: 1
		}), e.products.length > 0 ? (p(), I(Y(nt), {
			key: 0,
			menuName: Y(f)("rechnungswerk", "Aus Produkt")
		}, {
			icon: F(() => [J(Wa, { size: 20 })]),
			default: F(() => [(p(!0), q(K, null, S(e.products, (e) => (p(), I(Y(_t), {
				key: e.id,
				onClick: (t) => c(e)
			}, {
				default: F(() => [A(n(e.name), 1)]),
				_: 2
			}, 1032, ["onClick"]))), 128))]),
			_: 1
		}, 8, ["menuName"])) : E("", !0)]))]));
	}
}), [["__scopeId", "data-v-04862899"]]), wd = { class: "confirm-dialog" }, Td = { class: "confirm-dialog__message" }, Ed = /*#__PURE__*/ Q(/* @__PURE__ */ r({
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
		let r = t;
		function i(e) {
			e || r("close");
		}
		return (t, r) => (p(), I(Y(rt), {
			open: e.open,
			name: e.name,
			"onUpdate:open": i
		}, {
			actions: F(() => [J(Y(X), {
				variant: "secondary",
				onClick: r[0] ||= (e) => t.$emit("close")
			}, {
				default: F(() => [A(n(e.cancelLabel || Y(f)("rechnungswerk", "Abbrechen")), 1)]),
				_: 1
			}), J(Y(X), {
				variant: e.destructive ? "error" : "primary",
				onClick: r[1] ||= (e) => t.$emit("confirm")
			}, {
				default: F(() => [A(n(e.confirmLabel || Y(f)("rechnungswerk", "Bestätigen")), 1)]),
				_: 1
			}, 8, ["variant"])]),
			default: F(() => [z("div", wd, [z("p", Td, n(e.message), 1)])]),
			_: 1
		}, 8, ["open", "name"]));
	}
}), [["__scopeId", "data-v-54981555"]]);
//#endregion
//#region src/utils/modalEsc.ts
function Dd(e, t) {
	e.target?.closest?.(".v-select.vs--open") || t();
}
//#endregion
//#region src/components/SendInvoiceDialog.vue?vue&type=script&setup=true&lang.ts
var Od = { class: "send-modal" }, kd = { class: "send-modal__hint" }, Ad = { class: "field" }, jd = { class: "field" }, Md = { class: "field" }, Nd = { class: "actions" }, Pd = /*#__PURE__*/ Q(/* @__PURE__ */ r({
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
		let r = e, i = U(() => r.kind === "quote"), a = U(() => i.value ? f("rechnungswerk", "Angebot an Kunde senden") : f("rechnungswerk", "Rechnung an Kunde senden")), o = U(() => i.value ? f("rechnungswerk", "Das Angebot wird als PDF angehängt.") : f("rechnungswerk", "Die E-Rechnung wird als ZUGFeRD-PDF angehängt.")), s = t, c = N(null), l = le({
			to: "",
			subject: "",
			body: ""
		}), u = U(() => /\S+@\S+\.\S+/.test(l.to.trim()) && l.subject.trim() !== "");
		_(() => r.open, (e) => {
			if (!e) return;
			let t = r.invoice;
			l.to = t?.recipientEmail ?? "", i.value ? l.subject = t?.number ? f("rechnungswerk", "Angebot {number}", { number: t.number }) : f("rechnungswerk", "Ihr Angebot") : l.subject = t?.number ? f("rechnungswerk", "Rechnung {number}", { number: t.number }) : f("rechnungswerk", "Ihre Rechnung"), l.body = r.defaultBody, oe(() => c.value?.focus());
		}, { immediate: !0 });
		function d() {
			u.value && s("send", {
				to: l.to.trim(),
				subject: l.subject.trim(),
				body: l.body
			});
		}
		return (t, r) => e.open ? (p(), I(Y(ot), {
			key: 0,
			name: a.value,
			onKeydown: r[4] ||= ye((e) => Y(Dd)(e, () => t.$emit("close")), ["esc"]),
			onClose: r[5] ||= (e) => t.$emit("close")
		}, {
			default: F(() => [z("div", Od, [
				z("h2", null, n(a.value), 1),
				z("p", kd, n(o.value), 1),
				z("label", Ad, [z("span", null, n(Y(f)("rechnungswerk", "Empfänger-E-Mail")) + " *", 1), G(z("input", {
					ref_key: "toInput",
					ref: c,
					"onUpdate:modelValue": r[0] ||= (e) => l.to = e,
					class: "input",
					type: "email"
				}, null, 512), [[O, l.to]])]),
				z("label", jd, [z("span", null, n(Y(f)("rechnungswerk", "Betreff")) + " *", 1), G(z("input", {
					"onUpdate:modelValue": r[1] ||= (e) => l.subject = e,
					class: "input",
					type: "text"
				}, null, 512), [[O, l.subject]])]),
				z("label", Md, [z("span", null, n(Y(f)("rechnungswerk", "Nachricht")), 1), G(z("textarea", {
					"onUpdate:modelValue": r[2] ||= (e) => l.body = e,
					class: "input",
					rows: "6"
				}, null, 512), [[O, l.body]])]),
				z("div", Nd, [J(Y(X), { onClick: r[3] ||= (e) => t.$emit("close") }, {
					default: F(() => [A(n(Y(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(Y(X), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					icon: F(() => [J(Xl, { size: 20 })]),
					default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Senden")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : E("", !0);
	}
}), [["__scopeId", "data-v-2f5a808a"]]), Fd = () => $("/quotes"), Id = (e) => $(`/quotes/${e}`), Ld = (e) => ho("/quotes", { data: e }), Rd = (e, t) => go(`/quotes/${e}`, { data: t }), zd = (e) => vo(`/quotes/${e}`), Bd = (e) => ho(`/quotes/${e}/commit`, {}), Vd = (e) => ho(`/quotes/${e}/accept`, {}), Hd = (e) => ho(`/quotes/${e}/reject`, {}), Ud = (e) => ho(`/quotes/${e}/convert`, {}), Wd = (e) => ho(`/quotes/${e}/revise`, {}), Gd = (e) => po(`/quotes/${e}/pdf`), Kd = (e) => po(`/quotes/${e}/preview`) + "?t=" + Date.now(), qd = (e) => {
	let t = document.createElement("a");
	t.href = Gd(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Jd = (e, t) => ho(`/quotes/${e}/send`, t), Yd = $t("quote", () => {
	let e = N([]), t = N(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await Fd();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => Id(e);
	async function i(e) {
		let t = await Ld(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await Rd(e, t);
		return await n(), r;
	}
	async function o(t) {
		await zd(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await Bd(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await Vd(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await Hd(e);
		return await n(), t;
	}
	async function u(e) {
		let t = await Ud(e);
		return await n(), t;
	}
	async function d(e) {
		let t = await Wd(e);
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
}), Xd = () => $("/products"), Zd = (e) => ho("/products", { data: e }), Qd = (e, t) => go(`/products/${e}`, { data: t }), $d = (e) => vo(`/products/${e}`), ef = $t("product", () => {
	let e = N([]), t = N(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await Xd();
		} finally {
			t.value = !1;
		}
	}
	async function r(t) {
		let n = await Zd(t);
		return e.value.push(n), e.value.sort((e, t) => e.name.localeCompare(t.name)), n;
	}
	async function i(t, n) {
		let r = await Qd(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), e.value.sort((e, t) => e.name.localeCompare(t.name)), r;
	}
	async function a(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await $d(t);
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
}), tf = () => $("/text-snippets"), nf = (e) => ho("/text-snippets", { data: e }), rf = (e, t) => go(`/text-snippets/${e}`, { data: t }), af = (e) => vo(`/text-snippets/${e}`);
//#endregion
//#region src/stores/textSnippetStore.ts
function of(e) {
	e.sort((e, t) => e.docType.localeCompare(t.docType) || e.slot.localeCompare(t.slot) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
}
var sf = $t("textSnippet", () => {
	let e = N([]), t = N(!1), n = N(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await tf(), n.value = !0;
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
		let n = await nf(t);
		return e.value.push(n), a(n), of(e.value), n;
	}
	async function s(t, n) {
		let r = await rf(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), a(r), of(e.value), r;
	}
	async function c(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await af(t);
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
}), cf = () => $("/me/contact"), lf = (e) => _o("/me/contact", { data: e }), uf = { class: "rw-view" }, df = { class: "rw-editor-head" }, ff = {
	key: 0,
	class: "rw-status-group"
}, pf = { class: "rw-status-tag" }, mf = {
	key: 0,
	class: "rw-pill"
}, hf = {
	key: 1,
	class: "rw-pill"
}, gf = ["title"], _f = { class: "rw-section" }, vf = { class: "rw-form-row" }, yf = { class: "rw-field invoice-no" }, bf = ["value"], xf = { class: "rw-field" }, Sf = ["readonly"], Cf = { class: "rw-field" }, wf = ["readonly"], Tf = { class: "rw-hint" }, Ef = { class: "more" }, Df = { class: "rw-form-row" }, Of = { class: "rw-field" }, kf = ["readonly"], Af = { class: "rw-field" }, jf = ["readonly"], Mf = {
	key: 0,
	class: "rw-field"
}, Nf = ["readonly", "placeholder"], Pf = {
	key: 1,
	class: "rw-field",
	"aria-hidden": "true"
}, Ff = { class: "rw-form-row" }, If = { class: "rw-field" }, Lf = ["readonly"], Rf = { class: "rw-field" }, zf = ["readonly"], Bf = { class: "rw-section" }, Vf = {
	key: 0,
	class: "rw-form-row"
}, Hf = { class: "rw-field" }, Uf = { class: "rw-hint" }, Wf = { class: "rw-form-row" }, Gf = { class: "rw-field" }, Kf = ["value"], qf = { class: "rw-field" }, Jf = ["readonly"], Yf = { class: "rw-form-row" }, Xf = { class: "rw-field" }, Zf = ["readonly"], Qf = { class: "rw-field rw-field--narrow" }, $f = ["readonly"], ep = { class: "rw-field" }, tp = ["readonly"], np = { class: "rw-field rw-field--country" }, rp = { class: "rw-form-row" }, ip = { class: "rw-field" }, ap = ["readonly"], op = { class: "rw-field" }, sp = ["readonly"], cp = { class: "rw-field" }, lp = ["readonly"], up = { class: "rw-section" }, dp = { class: "rw-form-row" }, fp = { class: "rw-field" }, pp = ["readonly"], mp = { class: "rw-field" }, hp = ["readonly"], gp = { class: "rw-field" }, _p = ["readonly"], vp = { class: "rw-hint" }, yp = { class: "rw-section" }, bp = { class: "rw-section-head" }, xp = { class: "rw-field" }, Sp = ["readonly", "placeholder"], Cp = { class: "rw-section" }, wp = { class: "rw-section" }, Tp = { class: "rw-form-row" }, Ep = { class: "rw-field" }, Dp = ["disabled"], Op = { value: "" }, kp = { value: "reverse_charge" }, Ap = { value: "intra_community" }, jp = { value: "export" }, Mp = { class: "rw-totals" }, Np = { class: "rw-kpi-card" }, Pp = { class: "rw-kpi-row" }, Fp = { class: "rw-kpi-row rw-kpi-row--grand" }, Ip = {
	key: 4,
	class: "rw-section"
}, Lp = { class: "rw-form-row" }, Rp = { class: "rw-field payterm-days" }, zp = ["readonly"], Bp = { class: "rw-field" }, Vp = ["value"], Hp = { class: "rw-field" }, Up = ["readonly", "placeholder"], Wp = {
	key: 5,
	class: "rw-section"
}, Gp = { class: "rw-form-row" }, Kp = { class: "rw-field payterm-days" }, qp = ["readonly"], Jp = { class: "rw-field rw-checkbox-field" }, Yp = { class: "rw-checkbox-row" }, Xp = ["disabled"], Zp = { class: "rw-hint" }, Qp = { class: "rw-section" }, $p = { class: "rw-section-head" }, em = { class: "rw-field" }, tm = ["readonly", "placeholder"], nm = {
	key: 6,
	class: "rw-section"
}, rm = [
	"onUpdate:modelValue",
	"readonly",
	"aria-label"
], im = { class: "rw-hint" }, am = { class: "rw-action-bar" }, om = ["src", "title"], sm = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "InvoiceEditorView",
	props: { id: {} },
	setup(e) {
		let t = e, r = Le(), i = Je(), a = Tc(), o = Yd(), l = ef(), u = Pc(), d = sf(), m = U(() => typeof r.name == "string" && r.name.startsWith("quote")), h = U(() => m.value ? o : a), g = U(() => m.value ? "quote" : "invoice"), v = U(() => d.forSlot(g.value, "opening")), y = U(() => d.forSlot(g.value, "closing"));
		function b(e) {
			V.greeting = e.content ?? "";
		}
		function x(e) {
			V.extraText = e.content ?? "";
		}
		let ee = U(() => m.value ? "quotes" : "invoices"), te = U(() => m.value ? "quote-detail" : "invoice-detail"), w = N(null), T = N([Uu()]), D = N([]), j = N(""), M = N(""), P = N(!1), ne = N(!1), re = N(!1), ie = N(!1), L = N(""), R = N(null), B = () => ({
			customerId: null,
			recipientName: "",
			recipientEmail: "",
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
		}), V = le(B()), oe = [
			"reverse_charge",
			"intra_community",
			"export"
		], se = U(() => (u.settings?.smallBusiness ?? !1) || oe.includes(V.specialTaxCase)), ce = U(() => {
			let e = Number.parseInt(String(V.paymentTermDays), 10);
			if (Number.isNaN(e)) return "";
			let t = (e) => /* @__PURE__ */ new Date(`${e}T12:00:00`);
			if (w.value?.dueDate) return t(w.value.dueDate).toLocaleDateString();
			let n = w.value?.issueDate ? t(w.value.issueDate) : /* @__PURE__ */ new Date();
			return n.setDate(n.getDate() + e), n.toLocaleDateString();
		}), H = U(() => w.value !== null && w.value.status !== "draft"), ue = {
			draft: cs,
			committed: fo,
			cancelled: hs
		}, de = {
			pending: ks,
			confirmed: Ss,
			unknown: Is,
			failed: hs
		}, W = (e) => ue[e] ?? cs, fe = (e) => de[e] ?? Is, pe = U(() => w.value ? m.value && w.value.quoteStatus ? f("rechnungswerk", Uc[w.value.quoteStatus] ?? w.value.status) : f("rechnungswerk", Vc[w.value.status]) : ""), me = U(() => w.value ? f("rechnungswerk", Hc[w.value.invoiceType]) : ""), he = U(() => {
			let e = {
				pending: f("rechnungswerk", "DATEV: gesendet"),
				confirmed: f("rechnungswerk", "DATEV: bestätigt"),
				failed: f("rechnungswerk", "DATEV: abgelehnt"),
				unknown: f("rechnungswerk", "DATEV: Antwort prüfen")
			}, t = w.value?.datevStatus;
			return t ? e[t] ?? "" : "";
		}), _e = U(() => w.value ? w.value.relatedNumber ? f("rechnungswerk", "{type} zu Rechnung {number}", {
			type: me.value,
			number: w.value.relatedNumber
		}) : me.value : ""), ve = U(() => {
			if (m.value) return f("rechnungswerk", "Das Angebot erhält eine endgültige Angebotsnummer und ist danach unveränderbar. Fortfahren?");
			let e = f("rechnungswerk", "Die Rechnung erhält eine endgültige Nummer und ist danach unveränderbar. Korrektur nur per Storno. Fortfahren?"), t = u.settings;
			return t?.datevAutoSend && t.datevUploadMail && (e += "\n\n" + f("rechnungswerk", "Beim Festschreiben wird automatisch eine E-Rechnung an DATEV ({mail}) gesendet.", { mail: t.datevUploadMail })), e;
		}), ye = U(() => {
			let e = (w.value?.greeting ?? d.defaultContent(g.value, "opening")).trim(), t = (w.value?.extraText ?? d.defaultContent(g.value, "closing")).trim(), n = m.value ? f("rechnungswerk", "anbei erhalten Sie unser Angebot als PDF.") : f("rechnungswerk", "anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).");
			return [e === "" ? n : e, t].filter((e) => e !== "").join("\n\n");
		}), be = U(() => w.value ? w.value.number ?? f("rechnungswerk", "Entwurf") : m.value ? f("rechnungswerk", "Neues Angebot") : f("rechnungswerk", "Neue Rechnung")), xe = U(() => qu(T.value.map((e) => ({
			taxRateBp: e.taxRateBp,
			lineTotalCents: Ku(e.quantity, Zc(e.priceInput))
		})), se.value)), Se = 0;
		s(async () => {
			let e = ++Se;
			try {
				if (await Promise.all([
					l.fetchAll(),
					u.fetch(),
					d.ensureLoaded()
				]), e !== Se) return;
				t.id ? await Te(Number(t.id), e) : await we(e);
			} catch (e) {
				$e(e, f("rechnungswerk", "Laden fehlgeschlagen"));
			}
		}), _(() => [r.name, t.id], async ([, e]) => {
			let t = ++Se;
			try {
				if (!e) Ce(), await we(t);
				else {
					let n = w.value !== null && w.value.invoiceType === "quote" !== m.value;
					(w.value?.id !== Number(e) || n) && (Ce(), await Te(Number(e), t));
				}
			} catch (e) {
				$e(e, f("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function Ce() {
			w.value = null, T.value = [Uu()], D.value = [], j.value = "", M.value = "", re.value = !1, ie.value = !1, L.value = "", R.value = null, Object.assign(V, B());
		}
		async function we(e = Se) {
			let t = u.settings;
			V.greeting = d.defaultContent(g.value, "opening"), V.extraText = d.defaultContent(g.value, "closing"), V.paymentTermDays = m.value ? "" : t?.defaultPaymentTermDays ?? "";
			let n = {
				person: "",
				phone: "",
				email: ""
			};
			try {
				n = await cf();
			} catch {}
			e === Se && (V.sellerContactPerson = n.person || (t?.contactPerson ?? ""), V.sellerContactPhone = n.phone || (t?.contactPhone ?? ""), V.sellerContactEmail = n.email || (t?.contactEmail ?? ""));
		}
		async function Te(e, t = Se) {
			let n = await h.value.get(e);
			t === Se && (w.value = n, V.customerId = n.customerId ?? null, V.recipientName = n.recipientName ?? "", V.recipientEmail = n.recipientEmail ?? "", V.recipientAddress = n.recipientAddress ?? "", V.recipientPostalCode = n.recipientPostalCode ?? "", V.recipientCity = n.recipientCity ?? "", V.recipientCountry = n.recipientCountry ?? "DE", V.recipientVatId = n.recipientVatId ?? "", V.recipientContactId = n.recipientContactId ?? "", V.recipientContactPerson = n.recipientContactPerson ?? "", V.recipientPhone = n.recipientPhone ?? "", V.sellerContactPerson = n.sellerContactPerson ?? "", V.sellerContactPhone = n.sellerContactPhone ?? "", V.sellerContactEmail = n.sellerContactEmail ?? "", V.performancePeriodStart = n.performancePeriodStart ?? n.performanceDate ?? "", V.performancePeriodEnd = n.performancePeriodEnd ?? "", V.referenceNumber = n.referenceNumber ?? "", V.orderNumber = n.orderNumber ?? "", V.buyerReference = n.buyerReference ?? "", V.contractNumber = n.contractNumber ?? "", V.projectReference = n.projectReference ?? "", D.value = [...n.notes ?? []], V.specialTaxCase = n.specialTaxCase ?? "", V.greeting = n.greeting ?? "", V.extraText = n.extraText ?? "", V.paymentTermDays = n.paymentTermDays ?? "", V.discountTerms = n.discountTerms ?? "", V.validUntil = n.validUntil ?? "", V.offerFreeform = n.offerFreeform ?? !1, T.value = n.items.length > 0 ? n.items.map(Gu) : [Uu()]);
		}
		function Ee() {
			D.value.push("");
		}
		function De(e) {
			D.value.splice(e, 1);
		}
		function Oe(e) {
			V.customerId = e.id, V.recipientName = e.name, V.recipientContactId = "", V.recipientEmail = e.email ?? "", V.recipientAddress = e.address ?? "", V.recipientPostalCode = e.postalCode ?? "", V.recipientCity = e.city ?? "", V.recipientCountry = e.country ?? "DE", V.recipientVatId = e.vatId ?? "", V.recipientContactPerson = e.contactPerson ?? "", V.recipientPhone = e.phone ?? "", e.defaultPaymentTermDays != null && (V.paymentTermDays = e.defaultPaymentTermDays);
		}
		function ke(e) {
			V.customerId = null, V.recipientName = e.name, V.recipientEmail = e.email, e.phone && (V.recipientPhone = e.phone), V.recipientAddress = e.address, V.recipientPostalCode = e.postalCode, V.recipientCity = e.city, e.country && (V.recipientCountry = e.country);
		}
		function Ae() {
			let e = V.performancePeriodStart, t = V.performancePeriodEnd, n = e && t ? {
				performanceDate: "",
				performancePeriodStart: e,
				performancePeriodEnd: t
			} : {
				performanceDate: e || t || "",
				performancePeriodStart: "",
				performancePeriodEnd: ""
			}, r = {
				...V,
				...n,
				paymentTermDays: V.paymentTermDays === "" ? null : Number(V.paymentTermDays),
				notes: D.value.map((e) => e.trim()).filter((e) => e !== ""),
				items: T.value.filter((e) => e.name.trim() !== "").map((e) => ({
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
			return m.value ? (r.validUntil = V.validUntil === "" ? null : V.validUntil, r.offerFreeform = V.offerFreeform, r.paymentTermDays = null, r.discountTerms = null) : (delete r.validUntil, delete r.offerFreeform), r;
		}
		async function je() {
			j.value = "", P.value = !0;
			try {
				let e;
				return w.value ? e = await h.value.update(w.value.id, Ae()) : (e = await h.value.create(Ae()), i.replace({
					name: te.value,
					params: { id: String(e.id) }
				})), w.value = e, e;
			} catch (e) {
				return $e(e, f("rechnungswerk", "Speichern fehlgeschlagen")), null;
			} finally {
				P.value = !1;
			}
		}
		async function Me() {
			let e = await je();
			e && (L.value = m.value ? Kd(e.id) : Sc(e.id), ie.value = !0);
		}
		function Ne(e) {
			e || (ie.value = !1, L.value = "");
		}
		function Pe() {
			R.value = "finalize";
		}
		function Fe() {
			R.value = "delete";
		}
		function Ie() {
			R.value = "cancel";
		}
		function Re() {
			R.value = "convert";
		}
		function ze() {
			R.value = "revise";
		}
		let Be = U(() => m.value && w.value?.status === "committed" && !["converted", "superseded"].includes(w.value?.quoteStatus ?? "")), Ve = U(() => m.value && w.value?.status === "committed" && [
			"open",
			"expired",
			"accepted"
		].includes(w.value?.quoteStatus ?? "")), He = U(() => m.value && w.value?.status === "committed" && ["open", "expired"].includes(w.value?.quoteStatus ?? ""));
		function Ue() {
			w.value && (m.value ? qd(w.value.id) : Cc(w.value.id));
		}
		async function We() {
			R.value = null;
			let e = await je();
			if (e) {
				P.value = !0;
				try {
					let t = await h.value.commit(e.id);
					if (w.value = t, M.value = "", m.value) M.value = f("rechnungswerk", "Angebot festgeschrieben.");
					else {
						let e = t.datevMailSent;
						e === !0 ? M.value = f("rechnungswerk", "Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.") : e === null && (j.value = f("rechnungswerk", "Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
					}
				} catch (e) {
					$e(e, f("rechnungswerk", "Festschreiben fehlgeschlagen"));
				} finally {
					P.value = !1;
				}
			}
		}
		async function Z() {
			if (w.value) {
				P.value = !0, j.value = "";
				try {
					w.value = await o.accept(w.value.id), M.value = f("rechnungswerk", "Angebot als angenommen markiert.");
				} catch (e) {
					$e(e, f("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					P.value = !1;
				}
			}
		}
		async function Ge() {
			if (w.value) {
				P.value = !0, j.value = "";
				try {
					w.value = await o.reject(w.value.id), M.value = f("rechnungswerk", "Angebot als abgelehnt markiert.");
				} catch (e) {
					$e(e, f("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					P.value = !1;
				}
			}
		}
		async function Ke() {
			if (R.value = null, w.value) {
				P.value = !0, j.value = "";
				try {
					let e = await o.convert(w.value.id);
					i.push({
						name: "invoice-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					$e(e, f("rechnungswerk", "Übernahme fehlgeschlagen"));
				} finally {
					P.value = !1;
				}
			}
		}
		async function qe() {
			if (R.value = null, w.value) {
				P.value = !0, j.value = "";
				try {
					let e = await o.revise(w.value.id);
					i.push({
						name: "quote-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					$e(e, f("rechnungswerk", "Revidieren fehlgeschlagen"));
				} finally {
					P.value = !1;
				}
			}
		}
		async function Ye(e) {
			if (w.value) {
				ne.value = !0, j.value = "";
				try {
					m.value ? (await Jd(w.value.id, e), re.value = !1, M.value = f("rechnungswerk", "Angebot an {to} gesendet.", { to: e.to })) : (await wc(w.value.id, e), re.value = !1, M.value = f("rechnungswerk", "Rechnung an {to} gesendet.", { to: e.to }));
				} catch (e) {
					$e(e, f("rechnungswerk", "Versand fehlgeschlagen"));
				} finally {
					ne.value = !1;
				}
			}
		}
		async function Xe() {
			if (R.value = null, !w.value) {
				Qe();
				return;
			}
			P.value = !0;
			try {
				await h.value.remove(w.value.id), Qe();
			} catch (e) {
				$e(e, f("rechnungswerk", "Löschen fehlgeschlagen"));
			} finally {
				P.value = !1;
			}
		}
		async function Ze() {
			if (R.value = null, w.value) {
				P.value = !0;
				try {
					let e = await a.cancel(w.value.id), t = e.datevMailSent;
					await Te(e.id), M.value = "", t === !0 ? M.value = f("rechnungswerk", "Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.") : t === null && (j.value = f("rechnungswerk", "Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
				} catch (e) {
					$e(e, f("rechnungswerk", "Stornieren fehlgeschlagen"));
				} finally {
					P.value = !1;
				}
			}
		}
		function Qe() {
			i.push({ name: ee.value });
		}
		function $e(e, t) {
			j.value = e.message ?? t, console.error("[rechnungswerk] editor:", e);
		}
		return (e, t) => {
			let r = C("tooltip");
			return p(), q("div", uf, [
				z("div", df, [J(Y(vt), null, {
					default: F(() => [J(Y(gt), {
						name: m.value ? Y(f)("rechnungswerk", "Angebote") : Y(f)("rechnungswerk", "Rechnungen"),
						to: { name: ee.value }
					}, null, 8, ["name", "to"]), J(Y(gt), { name: be.value }, null, 8, ["name"])]),
					_: 1
				}), w.value ? (p(), q("span", ff, [
					z("span", pf, [(p(), I(c(W(w.value.status)), {
						size: 18,
						class: k(["rw-sicon", `rw-sicon--${w.value.status}`])
					}, null, 8, ["class"])), A(" " + n(pe.value), 1)]),
					!m.value && w.value.invoiceType !== "invoice" ? G((p(), q("span", mf, [A(n(me.value), 1)])), [[r, _e.value]]) : E("", !0),
					m.value && w.value.relatedQuoteNumber ? (p(), q("span", hf, n(Y(f)("rechnungswerk", "Revision von {number}", { number: w.value.relatedQuoteNumber })), 1)) : E("", !0),
					w.value.datevStatus && he.value ? (p(), q("span", {
						key: 2,
						class: "rw-status-tag",
						title: Y(f)("rechnungswerk", "DATEV-Übergabe")
					}, [(p(), I(c(fe(w.value.datevStatus)), {
						size: 18,
						class: k(["rw-sicon", `rw-sicon--datev-${w.value.datevStatus}`])
					}, null, 8, ["class"])), A(" " + n(he.value), 1)], 8, gf)) : E("", !0)
				])) : E("", !0)]),
				j.value ? (p(), I(Y(it), {
					key: 0,
					type: "error",
					text: j.value
				}, null, 8, ["text"])) : E("", !0),
				M.value ? (p(), I(Y(it), {
					key: 1,
					type: "success",
					text: M.value
				}, null, 8, ["text"])) : E("", !0),
				H.value ? (p(), I(Y(it), {
					key: 2,
					type: "info",
					text: m.value ? Y(f)("rechnungswerk", "Dieses Angebot ist festgeschrieben und kann nicht mehr geändert werden.") : Y(f)("rechnungswerk", "Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.")
				}, null, 8, ["text"])) : E("", !0),
				!m.value && w.value?.documentBackfilled ? (p(), I(Y(it), {
					key: 3,
					type: "info",
					text: Y(f)("rechnungswerk", "Dieser Beleg wurde nicht beim Festschreiben abgelegt, sondern später aus dem Datensatz erzeugt. Beträge, Positionen und Steuerausweis stimmen; Firmendaten und Layout entsprechen dem heutigen Stand, nicht dem von damals.")
				}, null, 8, ["text"])) : E("", !0),
				z("section", _f, [
					z("h3", null, n(m.value ? Y(f)("rechnungswerk", "Angebotsdaten") : Y(f)("rechnungswerk", "Rechnungsdaten")), 1),
					z("div", vf, [
						z("label", yf, [z("span", null, n(m.value ? Y(f)("rechnungswerk", "Angebotsnummer") : Y(f)("rechnungswerk", "Rechnungsnummer")), 1), z("input", {
							class: "rw-input",
							type: "text",
							readonly: "",
							value: w.value?.number ?? Y(f)("rechnungswerk", "(wird vergeben)")
						}, null, 8, bf)]),
						z("label", xf, [z("span", null, n(m.value ? Y(f)("rechnungswerk", "Geplanter Leistungszeitraum (optional)") : Y(f)("rechnungswerk", "Leistungsdatum /-zeitraum")), 1), G(z("input", {
							"onUpdate:modelValue": t[0] ||= (e) => V.performancePeriodStart = e,
							class: "rw-input",
							type: "date",
							readonly: H.value
						}, null, 8, Sf), [[O, V.performancePeriodStart]])]),
						z("label", Cf, [z("span", null, n(Y(f)("rechnungswerk", "bis (optional)")), 1), G(z("input", {
							"onUpdate:modelValue": t[1] ||= (e) => V.performancePeriodEnd = e,
							class: "rw-input",
							type: "date",
							readonly: H.value
						}, null, 8, wf), [[O, V.performancePeriodEnd]])])
					]),
					z("p", Tf, n(m.value ? Y(f)("rechnungswerk", "Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.") : Y(f)("rechnungswerk", "Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.")), 1),
					z("details", Ef, [
						z("summary", null, n(m.value ? Y(f)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)") : Y(f)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)")), 1),
						z("div", Df, [
							z("label", Of, [z("span", null, n(Y(f)("rechnungswerk", "Referenznummer")), 1), G(z("input", {
								"onUpdate:modelValue": t[2] ||= (e) => V.referenceNumber = e,
								class: "rw-input",
								type: "text",
								readonly: H.value
							}, null, 8, kf), [[O, V.referenceNumber]])]),
							z("label", Af, [z("span", null, n(Y(f)("rechnungswerk", "Bestellnummer")), 1), G(z("input", {
								"onUpdate:modelValue": t[3] ||= (e) => V.orderNumber = e,
								class: "rw-input",
								type: "text",
								readonly: H.value
							}, null, 8, jf), [[O, V.orderNumber]])]),
							m.value ? (p(), q("span", Pf)) : (p(), q("label", Mf, [z("span", null, n(Y(f)("rechnungswerk", "Käuferreferenz / Leitweg-ID (BT-10)")), 1), G(z("input", {
								"onUpdate:modelValue": t[4] ||= (e) => V.buyerReference = e,
								class: "rw-input",
								type: "text",
								readonly: H.value,
								placeholder: Y(f)("rechnungswerk", "nur für öffentliche Auftraggeber")
							}, null, 8, Nf), [[O, V.buyerReference]])]))
						]),
						z("div", Ff, [
							z("label", If, [z("span", null, n(Y(f)("rechnungswerk", "Vertragsnummer (BT-12)")), 1), G(z("input", {
								"onUpdate:modelValue": t[5] ||= (e) => V.contractNumber = e,
								class: "rw-input",
								type: "text",
								readonly: H.value
							}, null, 8, Lf), [[O, V.contractNumber]])]),
							z("label", Rf, [z("span", null, n(Y(f)("rechnungswerk", "Objekt-/Projektkennung (BT-18)")), 1), G(z("input", {
								"onUpdate:modelValue": t[6] ||= (e) => V.projectReference = e,
								class: "rw-input",
								type: "text",
								readonly: H.value
							}, null, 8, zf), [[O, V.projectReference]])]),
							t[35] ||= z("span", {
								class: "rw-field",
								"aria-hidden": "true"
							}, null, -1)
						])
					])
				]),
				z("section", Bf, [
					z("h3", null, n(Y(f)("rechnungswerk", "Empfänger")), 1),
					H.value ? E("", !0) : (p(), q("div", Vf, [z("label", Hf, [
						z("span", null, n(Y(f)("rechnungswerk", "Kunde übernehmen")), 1),
						J(Hu, { onSelect: Oe }),
						z("span", Uf, n(Y(f)("rechnungswerk", "Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.")), 1)
					])])),
					z("div", Wf, [z("label", Gf, [z("span", null, n(Y(f)("rechnungswerk", "Name")), 1), H.value ? (p(), q("input", {
						key: 1,
						class: "rw-input",
						type: "text",
						readonly: "",
						value: V.recipientName
					}, null, 8, Kf)) : (p(), I(Tu, {
						key: 0,
						modelValue: V.recipientName,
						"onUpdate:modelValue": t[7] ||= (e) => V.recipientName = e,
						onSelect: ke
					}, null, 8, ["modelValue"]))]), z("label", qf, [z("span", null, n(Y(f)("rechnungswerk", "E-Mail")), 1), G(z("input", {
						"onUpdate:modelValue": t[8] ||= (e) => V.recipientEmail = e,
						class: "rw-input",
						type: "email",
						readonly: H.value
					}, null, 8, Jf), [[O, V.recipientEmail]])])]),
					z("div", Yf, [
						z("label", Xf, [z("span", null, n(Y(f)("rechnungswerk", "Straße")), 1), G(z("input", {
							"onUpdate:modelValue": t[9] ||= (e) => V.recipientAddress = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, Zf), [[O, V.recipientAddress]])]),
						z("label", Qf, [z("span", null, n(Y(f)("rechnungswerk", "PLZ")), 1), G(z("input", {
							"onUpdate:modelValue": t[10] ||= (e) => V.recipientPostalCode = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, $f), [[O, V.recipientPostalCode]])]),
						z("label", ep, [z("span", null, n(Y(f)("rechnungswerk", "Ort")), 1), G(z("input", {
							"onUpdate:modelValue": t[11] ||= (e) => V.recipientCity = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, tp), [[O, V.recipientCity]])]),
						z("label", np, [z("span", null, n(Y(f)("rechnungswerk", "Land")), 1), J(ju, {
							modelValue: V.recipientCountry,
							"onUpdate:modelValue": t[12] ||= (e) => V.recipientCountry = e,
							disabled: H.value
						}, null, 8, ["modelValue", "disabled"])])
					]),
					z("div", rp, [
						z("label", ip, [z("span", null, n(Y(f)("rechnungswerk", "USt-IdNr. (optional)")), 1), G(z("input", {
							"onUpdate:modelValue": t[13] ||= (e) => V.recipientVatId = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, ap), [[O, V.recipientVatId]])]),
						z("label", op, [z("span", null, n(Y(f)("rechnungswerk", "Ansprechpartner (optional)")), 1), G(z("input", {
							"onUpdate:modelValue": t[14] ||= (e) => V.recipientContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, sp), [[O, V.recipientContactPerson]])]),
						z("label", cp, [z("span", null, n(Y(f)("rechnungswerk", "Telefon (optional)")), 1), G(z("input", {
							"onUpdate:modelValue": t[15] ||= (e) => V.recipientPhone = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, lp), [[O, V.recipientPhone]])])
					])
				]),
				z("section", up, [
					z("h3", null, n(m.value ? Y(f)("rechnungswerk", "Ansprechpartner (für dieses Angebot)") : Y(f)("rechnungswerk", "Ansprechpartner (für diese Rechnung)")), 1),
					z("div", dp, [
						z("label", fp, [z("span", null, n(Y(f)("rechnungswerk", "Name")), 1), G(z("input", {
							"onUpdate:modelValue": t[16] ||= (e) => V.sellerContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, pp), [[O, V.sellerContactPerson]])]),
						z("label", mp, [z("span", null, n(Y(f)("rechnungswerk", "Telefon")), 1), G(z("input", {
							"onUpdate:modelValue": t[17] ||= (e) => V.sellerContactPhone = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, hp), [[O, V.sellerContactPhone]])]),
						z("label", gp, [z("span", null, n(Y(f)("rechnungswerk", "E-Mail")), 1), G(z("input", {
							"onUpdate:modelValue": t[18] ||= (e) => V.sellerContactEmail = e,
							class: "rw-input",
							type: "email",
							readonly: H.value
						}, null, 8, _p), [[O, V.sellerContactEmail]])])
					]),
					z("p", vp, n(m.value ? Y(f)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.") : Y(f)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.")), 1)
				]),
				z("section", yp, [z("div", bp, [z("h3", null, n(Y(f)("rechnungswerk", "Anrede & Einleitung")), 1), !H.value && v.value.length > 0 ? (p(), I(Y(nt), {
					key: 0,
					menuName: Y(f)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: F(() => [J(Za, { size: 18 })]),
					default: F(() => [(p(!0), q(K, null, S(v.value, (e) => (p(), I(Y(_t), {
						key: e.id,
						onClick: (t) => b(e)
					}, {
						default: F(() => [A(n(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : E("", !0)]), z("label", xp, [z("span", null, n(Y(f)("rechnungswerk", "Anrede & Einleitung")), 1), G(z("textarea", {
					"onUpdate:modelValue": t[19] ||= (e) => V.greeting = e,
					class: "rw-input",
					rows: "3",
					readonly: H.value,
					placeholder: Y(f)("rechnungswerk", "Anrede und Einleitung – Vorgabe aus den Textbausteinen")
				}, null, 8, Sp), [[O, V.greeting]])])]),
				z("section", Cp, [z("h3", null, n(Y(f)("rechnungswerk", "Positionen")), 1), J(Cd, {
					items: T.value,
					"onUpdate:items": t[20] ||= (e) => T.value = e,
					products: Y(l).products,
					readonly: H.value,
					smallBusiness: Y(u).settings?.smallBusiness ?? !1,
					defaultTaxRateBp: Y(u).settings?.defaultTaxRateBp ?? 1900
				}, null, 8, [
					"items",
					"products",
					"readonly",
					"smallBusiness",
					"defaultTaxRateBp"
				])]),
				z("section", wp, [
					z("h3", null, n(Y(f)("rechnungswerk", "Steuer & Summen")), 1),
					z("div", Tp, [z("label", Ep, [z("span", null, n(Y(f)("rechnungswerk", "Steuerfall")), 1), G(z("select", {
						"onUpdate:modelValue": t[21] ||= (e) => V.specialTaxCase = e,
						class: "rw-input",
						disabled: H.value
					}, [
						z("option", Op, n(Y(f)("rechnungswerk", "Regelbesteuerung")), 1),
						z("option", kp, n(Y(f)("rechnungswerk", "Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)")), 1),
						z("option", Ap, n(Y(f)("rechnungswerk", "Innergemeinschaftliche Lieferung (steuerfrei)")), 1),
						z("option", jp, n(Y(f)("rechnungswerk", "Ausfuhrlieferung Drittland (steuerfrei)")), 1)
					], 8, Dp), [[ae, V.specialTaxCase]])]), t[36] ||= z("span", {
						class: "rw-field",
						"aria-hidden": "true"
					}, null, -1)]),
					V.specialTaxCase === "" ? E("", !0) : (p(), I(Y(it), {
						key: 0,
						type: "info",
						text: Y(f)("rechnungswerk", "Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.")
					}, null, 8, ["text"])),
					z("div", Mp, [z("div", Np, [
						z("div", Pp, [z("span", null, n(Y(f)("rechnungswerk", "Zwischensumme (netto)")), 1), z("strong", null, n(Y($c)(xe.value.subtotalCents)), 1)]),
						(p(!0), q(K, null, S(xe.value.taxBreakdown, (e) => (p(), q("div", {
							key: e.rateBp,
							class: "rw-kpi-row rw-kpi-row--muted"
						}, [z("span", null, n(Y(f)("rechnungswerk", "USt {rate}", { rate: Y(el)(e.rateBp) })) + " (" + n(Y($c)(e.netCents)) + ")", 1), z("span", null, n(Y($c)(e.taxCents)), 1)]))), 128)),
						z("div", Fp, [z("span", null, n(Y(f)("rechnungswerk", "Gesamt (brutto)")), 1), z("strong", null, n(Y($c)(xe.value.totalCents)), 1)])
					])])
				]),
				m.value ? (p(), q("section", Wp, [
					z("h3", null, n(Y(f)("rechnungswerk", "Gültigkeit")), 1),
					z("div", Gp, [z("label", Kp, [z("span", null, n(Y(f)("rechnungswerk", "Gültig bis")), 1), G(z("input", {
						"onUpdate:modelValue": t[24] ||= (e) => V.validUntil = e,
						class: "rw-input",
						type: "date",
						readonly: H.value
					}, null, 8, qp), [[O, V.validUntil]])]), z("label", Jp, [z("span", Yp, [G(z("input", {
						"onUpdate:modelValue": t[25] ||= (e) => V.offerFreeform = e,
						type: "checkbox",
						disabled: H.value
					}, null, 8, Xp), [[ge, V.offerFreeform]]), A(" " + n(Y(f)("rechnungswerk", "Freibleibendes Angebot (unverbindlich)")), 1)])])]),
					z("p", Zp, n(Y(f)("rechnungswerk", "„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.")), 1)
				])) : (p(), q("section", Ip, [z("h3", null, n(Y(f)("rechnungswerk", "Zahlungsbedingungen")), 1), z("div", Lp, [
					z("label", Rp, [z("span", null, n(Y(f)("rechnungswerk", "Zahlungsziel (Tage)")), 1), G(z("input", {
						"onUpdate:modelValue": t[22] ||= (e) => V.paymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						readonly: H.value
					}, null, 8, zp), [[O, V.paymentTermDays]])]),
					z("label", Bp, [z("span", null, n(Y(f)("rechnungswerk", "Fällig am")), 1), z("input", {
						class: "rw-input",
						type: "text",
						readonly: "",
						value: ce.value || "—"
					}, null, 8, Vp)]),
					z("label", Hp, [z("span", null, n(Y(f)("rechnungswerk", "Skonto")), 1), G(z("input", {
						"onUpdate:modelValue": t[23] ||= (e) => V.discountTerms = e,
						class: "rw-input",
						type: "text",
						readonly: H.value,
						placeholder: Y(f)("rechnungswerk", "z. B. 2 % bei Zahlung bis\xA0…")
					}, null, 8, Up), [[O, V.discountTerms]])])
				])])),
				z("section", Qp, [z("div", $p, [z("h3", null, n(Y(f)("rechnungswerk", "Schlusstext")), 1), !H.value && y.value.length > 0 ? (p(), I(Y(nt), {
					key: 0,
					menuName: Y(f)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: F(() => [J(Za, { size: 18 })]),
					default: F(() => [(p(!0), q(K, null, S(y.value, (e) => (p(), I(Y(_t), {
						key: e.id,
						onClick: (t) => x(e)
					}, {
						default: F(() => [A(n(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : E("", !0)]), z("label", em, [z("span", null, n(Y(f)("rechnungswerk", "Schlusstext / Anmerkungen")), 1), G(z("textarea", {
					"onUpdate:modelValue": t[26] ||= (e) => V.extraText = e,
					class: "rw-input",
					rows: "3",
					readonly: H.value,
					placeholder: Y(f)("rechnungswerk", "Schlusstext – Vorgabe aus den Textbausteinen")
				}, null, 8, tm), [[O, V.extraText]])])]),
				!H.value || D.value.length > 0 ? (p(), q("section", nm, [
					z("h3", null, n(m.value ? Y(f)("rechnungswerk", "Notizen / Hinweise auf dem Angebot") : Y(f)("rechnungswerk", "Notizen / Hinweise auf der Rechnung")), 1),
					(p(!0), q(K, null, S(D.value, (e, t) => (p(), q("div", {
						key: t,
						class: "rw-note-row"
					}, [G(z("input", {
						"onUpdate:modelValue": (e) => D.value[t] = e,
						class: "rw-input",
						type: "text",
						readonly: H.value,
						"aria-label": Y(f)("rechnungswerk", "Notiz {index}", { index: t + 1 })
					}, null, 8, rm), [[O, D.value[t]]]), H.value ? E("", !0) : (p(), I(Y(X), {
						key: 0,
						variant: "tertiary",
						"aria-label": Y(f)("rechnungswerk", "Notiz entfernen"),
						onClick: (e) => De(t)
					}, {
						icon: F(() => [J(Ul, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"]))]))), 128)),
					H.value ? E("", !0) : (p(), I(Y(X), {
						key: 0,
						variant: "tertiary",
						onClick: Ee
					}, {
						icon: F(() => [J(Vo, { size: 20 })]),
						default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Notiz hinzufügen")), 1)]),
						_: 1
					})),
					z("p", im, n(m.value ? Y(f)("rechnungswerk", "Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.") : Y(f)("rechnungswerk", "Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.")), 1)
				])) : E("", !0),
				z("div", am, [H.value ? w.value ? (p(), q(K, { key: 1 }, [
					J(Y(X), { onClick: Ue }, {
						icon: F(() => [J(Jo, { size: 20 })]),
						default: F(() => [A(" " + n(Y(f)("rechnungswerk", "PDF herunterladen")), 1)]),
						_: 1
					}),
					J(Y(X), {
						variant: m.value ? "secondary" : "primary",
						disabled: ne.value,
						onClick: t[28] ||= (e) => re.value = !0
					}, {
						icon: F(() => [J(Xl, { size: 20 })]),
						default: F(() => [A(" " + n(Y(f)("rechnungswerk", "An Kunde senden")), 1)]),
						_: 1
					}, 8, ["variant", "disabled"]),
					!m.value && w.value.status === "committed" ? (p(), I(Y(X), {
						key: 0,
						variant: "error",
						disabled: P.value,
						onClick: Ie
					}, {
						default: F(() => [A(n(Y(f)("rechnungswerk", "Stornieren")), 1)]),
						_: 1
					}, 8, ["disabled"])) : E("", !0),
					m.value ? (p(), q(K, { key: 1 }, [
						He.value ? (p(), I(Y(X), {
							key: 0,
							disabled: P.value,
							onClick: Z
						}, {
							icon: F(() => [J(rc, { size: 20 })]),
							default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Annehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : E("", !0),
						He.value ? (p(), I(Y(X), {
							key: 1,
							disabled: P.value,
							onClick: Ge
						}, {
							icon: F(() => [J(uc, { size: 20 })]),
							default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Ablehnen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : E("", !0),
						Be.value ? (p(), I(Y(X), {
							key: 2,
							disabled: P.value,
							onClick: ze
						}, {
							icon: F(() => [J(_u, { size: 20 })]),
							default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Revidieren")), 1)]),
							_: 1
						}, 8, ["disabled"])) : E("", !0),
						Ve.value ? (p(), I(Y(X), {
							key: 3,
							variant: "primary",
							disabled: P.value,
							onClick: Re
						}, {
							icon: F(() => [J(uu, { size: 20 })]),
							default: F(() => [A(" " + n(Y(f)("rechnungswerk", "In Rechnung übernehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : E("", !0)
					], 64)) : E("", !0)
				], 64)) : E("", !0) : (p(), q(K, { key: 0 }, [
					J(Y(X), {
						disabled: P.value,
						onClick: t[27] ||= (e) => je()
					}, {
						default: F(() => [A(n(Y(f)("rechnungswerk", "Speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					J(Y(X), {
						disabled: P.value,
						onClick: Me
					}, {
						icon: F(() => [J(ru, { size: 20 })]),
						default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Vorschau")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					J(Y(X), {
						variant: "primary",
						disabled: P.value,
						onClick: Pe
					}, {
						icon: F(() => [J(fo, { size: 20 })]),
						default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Festschreiben")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					w.value ? (p(), I(Y(X), {
						key: 0,
						variant: "error",
						disabled: P.value,
						onClick: Fe
					}, {
						default: F(() => [A(n(Y(f)("rechnungswerk", "Löschen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : E("", !0)
				], 64))]),
				J(Ed, {
					open: R.value === "finalize",
					name: m.value ? Y(f)("rechnungswerk", "Angebot festschreiben") : Y(f)("rechnungswerk", "Rechnung festschreiben"),
					message: ve.value,
					confirmLabel: Y(f)("rechnungswerk", "Festschreiben"),
					onClose: t[29] ||= (e) => R.value = null,
					onConfirm: We
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Ed, {
					open: R.value === "delete",
					name: m.value ? Y(f)("rechnungswerk", "Angebot löschen") : Y(f)("rechnungswerk", "Entwurf löschen"),
					message: m.value ? Y(f)("rechnungswerk", "Diesen Angebots-Entwurf wirklich löschen?") : Y(f)("rechnungswerk", "Diesen Entwurf wirklich löschen?"),
					confirmLabel: Y(f)("rechnungswerk", "Löschen"),
					destructive: "",
					onClose: t[30] ||= (e) => R.value = null,
					onConfirm: Xe
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Ed, {
					open: R.value === "cancel",
					name: Y(f)("rechnungswerk", "Rechnung stornieren"),
					message: Y(f)("rechnungswerk", "Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?"),
					confirmLabel: Y(f)("rechnungswerk", "Stornorechnung erstellen"),
					destructive: "",
					onClose: t[31] ||= (e) => R.value = null,
					onConfirm: Ze
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Ed, {
					open: R.value === "convert",
					name: Y(f)("rechnungswerk", "In Rechnung übernehmen"),
					message: Y(f)("rechnungswerk", "Aus diesem Angebot wird ein neuer Rechnungs-Entwurf mit denselben Positionen erstellt. Das Angebot wird als „übernommen“ markiert. Fortfahren?"),
					confirmLabel: Y(f)("rechnungswerk", "Rechnung erstellen"),
					onClose: t[32] ||= (e) => R.value = null,
					onConfirm: Ke
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Ed, {
					open: R.value === "revise",
					name: Y(f)("rechnungswerk", "Angebot revidieren"),
					message: Y(f)("rechnungswerk", "Es wird eine überarbeitbare Kopie als neue Angebots-Revision erstellt. Beim Festschreiben erhält sie eine Revisionsnummer (z. B. AN-…-1) und dieses Angebot wird als „revidiert“ markiert. Fortfahren?"),
					confirmLabel: Y(f)("rechnungswerk", "Revision erstellen"),
					onClose: t[33] ||= (e) => R.value = null,
					onConfirm: qe
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Pd, {
					open: re.value,
					invoice: w.value,
					defaultBody: ye.value,
					saving: ne.value,
					kind: m.value ? "quote" : "invoice",
					onClose: t[34] ||= (e) => re.value = !1,
					onSend: Ye
				}, null, 8, [
					"open",
					"invoice",
					"defaultBody",
					"saving",
					"kind"
				]),
				J(Y(rt), {
					open: ie.value,
					name: Y(f)("rechnungswerk", "Vorschau (Entwurf)"),
					size: "large",
					"onUpdate:open": Ne
				}, {
					default: F(() => [L.value ? (p(), q("iframe", {
						key: 0,
						src: L.value,
						class: "preview-frame",
						title: Y(f)("rechnungswerk", "Vorschau (Entwurf)")
					}, null, 8, om)) : E("", !0)]),
					_: 1
				}, 8, ["open", "name"])
			]);
		};
	}
}), [["__scopeId", "data-v-7576b8a3"]]), cm = { class: "membership-fees" }, lm = { class: "page-header" }, um = { class: "title-row" }, dm = {
	key: 1,
	class: "status-badge status-badge--new"
}, fm = {
	key: 0,
	class: "loading"
}, pm = { class: "card" }, mm = { class: "selector-grid" }, hm = { class: "field" }, gm = { class: "field-with-button" }, _m = { class: "field" }, vm = ["disabled"], ym = {
	key: 0,
	class: "locked-info"
}, bm = {
	key: 1,
	class: "new-info"
}, xm = { class: "card" }, Sm = { class: "form-grid" }, Cm = { class: "field field--wide" }, wm = ["disabled"], Tm = { class: "field" }, Em = ["disabled"], Dm = { class: "field" }, Om = ["disabled"], km = { class: "field" }, Am = ["disabled"], jm = { class: "field" }, Mm = ["disabled"], Nm = { class: "field" }, Pm = ["disabled"], Fm = { class: "card" }, Im = { class: "section-header" }, Lm = { class: "table-wrapper" }, Rm = { class: "config-table" }, zm = {
	key: 0,
	class: "action-column"
}, Bm = ["onUpdate:modelValue", "disabled"], Vm = { class: "money-input" }, Hm = ["onUpdate:modelValue", "disabled"], Um = {
	key: 0,
	class: "action-column"
}, Wm = ["onClick"], Gm = { key: 0 }, Km = { class: "card" }, qm = { class: "section-header" }, Jm = { class: "table-wrapper" }, Ym = { class: "config-table" }, Xm = {
	key: 0,
	class: "action-column"
}, Zm = ["onUpdate:modelValue", "disabled"], Qm = ["onUpdate:modelValue", "disabled"], $m = { class: "percent-input" }, eh = ["onUpdate:modelValue", "disabled"], th = {
	key: 0,
	class: "action-column"
}, nh = ["onClick"], rh = { key: 0 }, ih = {
	key: 1,
	class: "card actions-card"
}, ah = { class: "actions" }, oh = { class: "actions__right" }, sh = { class: "card" }, ch = { class: "section-header" }, lh = { key: 0 }, uh = { key: 1 }, dh = {
	key: 0,
	class: "preview-loading"
}, fh = { class: "summary-grid" }, ph = { class: "summary-box" }, mh = { class: "summary-box" }, hh = { class: "summary-box" }, gh = { class: "summary-box" }, _h = {
	key: 0,
	class: "summary-box summary-box--error"
}, vh = { class: "table-wrapper" }, yh = { class: "member-table" }, bh = { class: "member-name" }, xh = {
	key: 0,
	class: "member-detail"
}, Sh = { class: "amount-cell" }, Ch = { colspan: "5" }, wh = { class: "amount-cell" }, Th = {
	key: 0,
	class: "create-invoices"
}, Eh = {
	key: 1,
	class: "processing-info"
}, Dh = {
	key: 2,
	class: "empty-preview"
}, Oh = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "MembershipFeesView",
	setup(e) {
		let t = (/* @__PURE__ */ new Date()).getFullYear(), r = N(t), i = N("LHReV"), a = N(null), o = N(null), c = N(`Mitgliedsbeitrag ${t}`), l = N(14), u = N(ge(t)), d = N(""), f = N("EUR"), m = N(0), h = N([]), g = N([]), _ = N(!0), v = N(!1), y = N(!1), b = N(!1), x = N(""), C = N("info"), ee = U(() => a.value !== null), te = U(() => a.value !== null && a.value.status !== "draft"), w = U(() => te.value || y.value || b.value), T = U(() => _.value || v.value || y.value || b.value), D = U(() => {
			switch (a.value?.status) {
				case "draft": return "Entwurf";
				case "processing": return "In Bearbeitung";
				case "completed": return "Abgeschlossen";
				default: return "";
			}
		}), j = U(() => o.value ? o.value.members.reduce((e, t) => t.feeAmount ? e + Ce(t.feeAmount) : e, 0) : 0), M = U(() => we(j.value, f.value)), P = U(() => {
			if (!o.value) return 0;
			let e = o.value.summary;
			return e.incomplete + e.noFeeGroup + e.multipleFeeGroups + e.noMembershipType + e.noMembershipRule + e.zeroFee + e.profileErrors + e.feeErrors + e.createErrors;
		}), ne = U(() => o.value !== null && o.value.summary.ready > 0 && P.value === 0), re = U(() => a.value?.status === "draft");
		s(async () => {
			me(), await ie();
		});
		async function ie() {
			if (ke(), !i.value.trim()) {
				je("Bitte eine Vereinsgruppe angeben.");
				return;
			}
			if (!ve(r.value)) {
				je("Bitte ein gültiges Beitragsjahr angeben.");
				return;
			}
			_.value = !0, o.value = null;
			try {
				se((await $(he(r.value, i.value))).configuration), await L();
			} catch (e) {
				let t = e;
				t.status === 400 || t.status === 404 ? (ce(r.value), Me(`Für ${r.value} besteht noch keine Beitragsabrechnung. Du kannst einen neuen Entwurf anlegen.`)) : je(t.message);
			} finally {
				_.value = !1;
			}
		}
		async function L() {
			if (ee.value) {
				v.value = !0;
				try {
					let e = await $(`/membership-invoices/batch-preview?group=${encodeURIComponent(i.value)}&year=${r.value}`);
					o.value = e.batch, e.batch.run && (a.value = e.batch.run);
				} catch (e) {
					je(e.message);
				} finally {
					v.value = !1;
				}
			}
		}
		async function R() {
			if (ke(), te.value) {
				je("Diese Beitragsabrechnung ist bereits gesperrt.");
				return;
			}
			let e = pe();
			if (e) {
				je(e);
				return;
			}
			y.value = !0;
			try {
				se((await ho("/membership-invoices/configuration", {
					year: r.value,
					group: i.value.trim(),
					groupFees: W(),
					membershipRules: fe(),
					currency: f.value.trim().toUpperCase(),
					invoiceText: c.value.trim(),
					paymentTermDays: l.value,
					taxRateBp: m.value,
					issueDate: u.value || null,
					dueDate: d.value || null
				})).configuration), Ae(`Beitragsabrechnung ${r.value} wurde gespeichert.`), await L();
			} catch (e) {
				je(e.message);
			} finally {
				y.value = !1;
			}
		}
		async function B() {
			if (te.value) return;
			let e = r.value - 1;
			ke();
			try {
				let t = (await $(he(e, i.value))).configuration;
				h.value = Object.entries(t.groupFees).map(([e, t]) => ({
					name: e,
					amount: Se(t)
				})), g.value = Object.entries(t.membershipRules).map(([e, t]) => ({
					name: e,
					type: t.type,
					value: t.value
				})), f.value = t.run.currency, l.value = t.run.paymentTermDays, m.value = t.run.taxRateBp, c.value = _e(t.run.invoiceText, e, r.value), u.value = ge(r.value), me(), Ae(`Beitragswerte aus ${e} wurden übernommen. Bitte prüfen und anschließend speichern.`);
			} catch (t) {
				let n = t;
				je(`Vorjahr ${e} konnte nicht übernommen werden: ` + n.message);
			}
		}
		async function V() {
			if (!(!o.value || !ne.value) && window.confirm(`Für ${o.value.summary.ready} Mitglieder werden Beitragsrechnungsentwürfe für ${r.value} erstellt.\n\nDanach wird die Beitragskonfiguration gesperrt.

Es werden noch keine E-Mails versendet und keine Rechnungen endgültig festgeschrieben.

Fortfahren?`)) {
				b.value = !0, ke();
				try {
					let e = await ho("/membership-invoices/batch-create-drafts", {
						group: i.value,
						year: r.value,
						confirm: !0
					});
					o.value = e.batch, a.value = e.batch.run;
					let t = e.batch.summary;
					Ae(`Beitragslauf ${r.value} wurde gestartet. ${t.draftCreated} Rechnungsentwürfe wurden neu erstellt` + (t.alreadyExists > 0 ? `, ${t.alreadyExists} waren bereits vorhanden.` : ".")), await oe();
				} catch (e) {
					je(e.message);
				} finally {
					b.value = !1;
				}
			}
		}
		async function oe() {
			try {
				se((await $(he(r.value, i.value))).configuration), await L();
			} catch {}
		}
		function se(e) {
			a.value = e.run, r.value = e.run.year, i.value = e.run.memberGroup, f.value = e.run.currency, c.value = e.run.invoiceText, l.value = e.run.paymentTermDays, u.value = e.run.issueDate ?? "", d.value = e.run.dueDate ?? "", m.value = e.run.taxRateBp, h.value = Object.entries(e.groupFees).map(([e, t]) => ({
				name: e,
				amount: Se(t)
			})), g.value = Object.entries(e.membershipRules).map(([e, t]) => ({
				name: e,
				type: t.type,
				value: t.value
			}));
		}
		function ce(e) {
			a.value = null, o.value = null, c.value = `Mitgliedsbeitrag ${e}`, l.value = 14, u.value = ge(e), f.value = "EUR", m.value = 0, h.value = [], g.value = [], me();
		}
		function le() {
			h.value.push({
				name: "",
				amount: "0,00"
			});
		}
		function H(e) {
			h.value.splice(e, 1);
		}
		function ue() {
			g.value.push({
				name: "",
				type: "percent",
				value: "100"
			});
		}
		function de(e) {
			g.value.splice(e, 1);
		}
		function W() {
			let e = {};
			for (let t of h.value) e[t.name.trim()] = be(t.amount);
			return e;
		}
		function fe() {
			let e = {};
			for (let t of g.value) e[t.name.trim()] = {
				type: t.type,
				value: be(t.value)
			};
			return e;
		}
		function pe() {
			if (!ve(r.value)) return "Bitte ein gültiges Beitragsjahr angeben.";
			if (!i.value.trim()) return "Bitte eine Vereinsgruppe angeben.";
			if (!c.value.trim()) return "Bitte einen Rechnungstext angeben.";
			if (!u.value) return "Bitte ein Rechnungsdatum angeben.";
			if (!d.value) return "Bitte ein Fälligkeitsdatum angeben.";
			if (d.value < u.value) return "Das Fälligkeitsdatum darf nicht vor dem Rechnungsdatum liegen.";
			if (!Number.isInteger(l.value) || l.value < 0) return "Das Zahlungsziel ist ungültig.";
			if (h.value.length === 0) return "Mindestens eine Beitragsgruppe ist erforderlich.";
			let e = /* @__PURE__ */ new Set();
			for (let t of h.value) {
				let n = t.name.trim();
				if (!n) return "Eine Beitragsgruppe hat keinen Namen.";
				if (e.has(n)) return `Die Beitragsgruppe "${n}" ist doppelt vorhanden.`;
				if (e.add(n), !xe(t.amount)) return `Der Beitrag für "${n}" ist ungültig.`;
			}
			if (g.value.length === 0) return "Mindestens eine Beitragsart ist erforderlich.";
			let t = /* @__PURE__ */ new Set();
			for (let e of g.value) {
				let n = e.name.trim();
				if (!n) return "Eine Beitragsart hat keinen Namen.";
				if (t.has(n)) return `Die Beitragsart "${n}" ist doppelt vorhanden.`;
				if (t.add(n), !xe(e.value)) return `Der Wert der Beitragsart "${n}" ist ungültig.`;
			}
			return null;
		}
		function me() {
			if (!u.value) {
				d.value = "";
				return;
			}
			let e = Number(l.value);
			if (!Number.isFinite(e) || e < 0) return;
			let [t, n, r] = u.value.split("-").map(Number), i = new Date(Date.UTC(t, n - 1, r));
			i.setUTCDate(i.getUTCDate() + Math.trunc(e)), d.value = [
				i.getUTCFullYear(),
				String(i.getUTCMonth() + 1).padStart(2, "0"),
				String(i.getUTCDate()).padStart(2, "0")
			].join("-");
		}
		function he(e, t) {
			return `/membership-invoices/configuration?group=${encodeURIComponent(t.trim())}&year=${e}`;
		}
		function ge(e) {
			let t = /* @__PURE__ */ new Date();
			return e === t.getFullYear() ? [
				t.getFullYear(),
				String(t.getMonth() + 1).padStart(2, "0"),
				String(t.getDate()).padStart(2, "0")
			].join("-") : `${e}-01-01`;
		}
		function _e(e, t, n) {
			let r = String(t);
			return e.includes(r) ? e.replaceAll(r, String(n)) : `Mitgliedsbeitrag ${n}`;
		}
		function ve(e) {
			return Number.isInteger(e) && e >= 2e3 && e <= 2100;
		}
		function be(e) {
			let t = e.trim().replace(/\s/g, "").replace(",", "."), n = Number(t);
			return Number.isFinite(n) ? n.toFixed(2) : t;
		}
		function xe(e) {
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
			return e === null ? "–" : we(Ce(e), f.value);
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
			x.value = "";
		}
		function Ae(e) {
			x.value = e, C.value = "success";
		}
		function je(e) {
			x.value = e, C.value = "error";
		}
		function Me(e) {
			x.value = e, C.value = "info";
		}
		return (e, t) => (p(), q("div", cm, [z("header", lm, [z("div", null, [z("div", um, [t[8] ||= z("h2", null, "Beitragsabrechnung", -1), a.value ? (p(), q("span", {
			key: 0,
			class: k(["status-badge", `status-badge--${a.value.status}`])
		}, n(D.value), 3)) : (p(), q("span", dm, " Neues Beitragsjahr "))]), t[9] ||= z("p", null, " Jahresbeiträge konfigurieren, prüfen und Beitragsrechnungen erstellen. ", -1)])]), _.value ? (p(), q("div", fm, [J(Y(yt), { size: 44 })])) : (p(), q(K, { key: 1 }, [
			x.value ? (p(), q("div", {
				key: 0,
				class: k(["message", `message--${C.value}`])
			}, n(x.value), 3)) : E("", !0),
			z("section", pm, [
				t[14] ||= z("div", { class: "section-header" }, [z("div", null, [z("h3", null, "Jahresabrechnung"), z("p", null, " Beitragsjahr und Vereinsgruppe auswählen. ")])], -1),
				z("div", mm, [z("label", hm, [t[11] ||= z("span", null, "Beitragsjahr", -1), z("div", gm, [G(z("input", {
					"onUpdate:modelValue": t[0] ||= (e) => r.value = e,
					type: "number",
					min: "2000",
					max: "2100",
					onKeyup: ye(ie, ["enter"])
				}, null, 544), [[
					O,
					r.value,
					void 0,
					{ number: !0 }
				]]), J(Y(X), {
					variant: "secondary",
					disabled: T.value,
					onClick: ie
				}, {
					default: F(() => [...t[10] ||= [A(" Laden ", -1)]]),
					_: 1
				}, 8, ["disabled"])])]), z("label", _m, [t[12] ||= z("span", null, "Vereinsgruppe", -1), G(z("input", {
					"onUpdate:modelValue": t[1] ||= (e) => i.value = e,
					type: "text",
					disabled: T.value,
					onKeyup: ye(ie, ["enter"])
				}, null, 40, vm), [[
					O,
					i.value,
					void 0,
					{ trim: !0 }
				]])])]),
				te.value ? (p(), q("div", ym, [...t[13] ||= [z("strong", null, "Diese Beitragsabrechnung ist gesperrt.", -1), A(" Die Rechnungsentwürfe wurden bereits erzeugt. Die Beitragskonfiguration kann deshalb nicht mehr verändert werden. ", -1)]])) : ee.value ? E("", !0) : (p(), q("div", bm, " Für " + n(r.value) + " und die Gruppe " + n(i.value) + " besteht noch keine Beitragsabrechnung. Du kannst jetzt einen neuen Entwurf anlegen. ", 1))
			]),
			z("section", xm, [t[22] ||= z("div", { class: "section-header" }, [z("div", null, [z("h3", null, "Rechnungsdaten"), z("p", null, " Grunddaten für alle Beitragsrechnungen dieses Jahres. ")])], -1), z("div", Sm, [
				z("label", Cm, [t[15] ||= z("span", null, "Rechnungstext", -1), G(z("input", {
					"onUpdate:modelValue": t[2] ||= (e) => c.value = e,
					type: "text",
					disabled: w.value,
					placeholder: "Mitgliedsbeitrag 2026"
				}, null, 8, wm), [[O, c.value]])]),
				z("label", Tm, [t[16] ||= z("span", null, "Rechnungsdatum", -1), G(z("input", {
					"onUpdate:modelValue": t[3] ||= (e) => u.value = e,
					type: "date",
					disabled: w.value,
					onChange: me
				}, null, 40, Em), [[O, u.value]])]),
				z("label", Dm, [t[17] ||= z("span", null, "Zahlungsziel in Tagen", -1), G(z("input", {
					"onUpdate:modelValue": t[4] ||= (e) => l.value = e,
					type: "number",
					min: "0",
					max: "365",
					disabled: w.value,
					onChange: me
				}, null, 40, Om), [[
					O,
					l.value,
					void 0,
					{ number: !0 }
				]])]),
				z("label", km, [t[18] ||= z("span", null, "Fällig am", -1), G(z("input", {
					"onUpdate:modelValue": t[5] ||= (e) => d.value = e,
					type: "date",
					disabled: w.value
				}, null, 8, Am), [[O, d.value]])]),
				z("label", jm, [t[19] ||= z("span", null, "Währung", -1), G(z("input", {
					"onUpdate:modelValue": t[6] ||= (e) => f.value = e,
					type: "text",
					maxlength: "3",
					disabled: w.value
				}, null, 8, Mm), [[O, f.value]])]),
				z("label", Nm, [t[21] ||= z("span", null, "Umsatzsteuer", -1), G(z("select", {
					"onUpdate:modelValue": t[7] ||= (e) => m.value = e,
					disabled: w.value
				}, [...t[20] ||= [
					z("option", { value: 0 }, "0 %", -1),
					z("option", { value: 700 }, "7 %", -1),
					z("option", { value: 1900 }, "19 %", -1)
				]], 8, Pm), [[
					ae,
					m.value,
					void 0,
					{ number: !0 }
				]])])
			])]),
			z("section", Fm, [z("div", Im, [t[24] ||= z("div", null, [z("h3", null, "Jahresbeiträge"), z("p", null, " Grundbeitrag je Nextcloud-Beitragsgruppe. ")], -1), w.value ? E("", !0) : (p(), I(Y(X), {
				key: 0,
				variant: "secondary",
				onClick: le
			}, {
				default: F(() => [...t[23] ||= [A(" + Beitragsgruppe ", -1)]]),
				_: 1
			}))]), z("div", Lm, [z("table", Rm, [z("thead", null, [z("tr", null, [
				t[25] ||= z("th", null, "Beitragsgruppe", -1),
				t[26] ||= z("th", null, "Jahresbeitrag", -1),
				w.value ? E("", !0) : (p(), q("th", zm))
			])]), z("tbody", null, [(p(!0), q(K, null, S(h.value, (e, t) => (p(), q("tr", { key: t }, [
				z("td", null, [G(z("input", {
					"onUpdate:modelValue": (t) => e.name = t,
					type: "text",
					disabled: w.value,
					placeholder: "z. B. 50nY"
				}, null, 8, Bm), [[
					O,
					e.name,
					void 0,
					{ trim: !0 }
				]])]),
				z("td", null, [z("div", Vm, [G(z("input", {
					"onUpdate:modelValue": (t) => e.amount = t,
					type: "text",
					inputmode: "decimal",
					disabled: w.value,
					placeholder: "0,00"
				}, null, 8, Hm), [[O, e.amount]]), z("span", null, n(f.value), 1)])]),
				w.value ? E("", !0) : (p(), q("td", Um, [z("button", {
					type: "button",
					class: "remove-button",
					title: "Beitragsgruppe entfernen",
					onClick: (e) => H(t)
				}, " × ", 8, Wm)]))
			]))), 128)), h.value.length === 0 ? (p(), q("tr", Gm, [...t[27] ||= [z("td", {
				colspan: "3",
				class: "empty-row"
			}, " Keine Beitragsgruppen vorhanden. ", -1)]])) : E("", !0)])])])]),
			z("section", Km, [z("div", qm, [t[29] ||= z("div", null, [z("h3", null, "Beitragsarten"), z("p", null, " Prozentualer Anteil des Grundbeitrags je Mitgliedsart. ")], -1), w.value ? E("", !0) : (p(), I(Y(X), {
				key: 0,
				variant: "secondary",
				onClick: ue
			}, {
				default: F(() => [...t[28] ||= [A(" + Beitragsart ", -1)]]),
				_: 1
			}))]), z("div", Jm, [z("table", Ym, [z("thead", null, [z("tr", null, [
				t[30] ||= z("th", null, "Beitragsart", -1),
				t[31] ||= z("th", null, "Berechnung", -1),
				t[32] ||= z("th", null, "Wert", -1),
				w.value ? E("", !0) : (p(), q("th", Xm))
			])]), z("tbody", null, [(p(!0), q(K, null, S(g.value, (e, n) => (p(), q("tr", { key: n }, [
				z("td", null, [G(z("input", {
					"onUpdate:modelValue": (t) => e.name = t,
					type: "text",
					disabled: w.value,
					placeholder: "z. B. Vollmitglied"
				}, null, 8, Zm), [[
					O,
					e.name,
					void 0,
					{ trim: !0 }
				]])]),
				z("td", null, [G(z("select", {
					"onUpdate:modelValue": (t) => e.type = t,
					disabled: w.value
				}, [...t[33] ||= [z("option", { value: "percent" }, " Prozent ", -1)]], 8, Qm), [[ae, e.type]])]),
				z("td", null, [z("div", $m, [G(z("input", {
					"onUpdate:modelValue": (t) => e.value = t,
					type: "text",
					inputmode: "decimal",
					disabled: w.value,
					placeholder: "100"
				}, null, 8, eh), [[O, e.value]]), t[34] ||= z("span", null, "%", -1)])]),
				w.value ? E("", !0) : (p(), q("td", th, [z("button", {
					type: "button",
					class: "remove-button",
					title: "Beitragsart entfernen",
					onClick: (e) => de(n)
				}, " × ", 8, nh)]))
			]))), 128)), g.value.length === 0 ? (p(), q("tr", rh, [...t[35] ||= [z("td", {
				colspan: "4",
				class: "empty-row"
			}, " Keine Beitragsarten vorhanden. ", -1)]])) : E("", !0)])])])]),
			te.value ? E("", !0) : (p(), q("section", ih, [z("div", ah, [J(Y(X), {
				variant: "secondary",
				disabled: T.value,
				onClick: B
			}, {
				default: F(() => [...t[36] ||= [A(" Vorjahr übernehmen ", -1)]]),
				_: 1
			}, 8, ["disabled"]), z("div", oh, [J(Y(X), {
				variant: "primary",
				disabled: T.value,
				onClick: R
			}, {
				default: F(() => [A(n(y.value ? "Speichert\xA0…" : "Speichern"), 1)]),
				_: 1
			}, 8, ["disabled"]), J(Y(X), {
				variant: "secondary",
				disabled: T.value || !ee.value,
				onClick: L
			}, {
				default: F(() => [...t[37] ||= [A(" Vorschau aktualisieren ", -1)]]),
				_: 1
			}, 8, ["disabled"])])])])),
			z("section", sh, [z("div", ch, [z("div", null, [t[38] ||= z("h3", null, "Mitgliedervorschau", -1), o.value ? (p(), q("p", lh, n(o.value.summary.total) + " Mitglieder geprüft, " + n(o.value.summary.ready) + " beitragspflichtige Rechnungen. ", 1)) : (p(), q("p", uh, " Nach dem Speichern kann die Beitragsberechnung geprüft werden. "))]), ee.value ? (p(), I(Y(X), {
				key: 0,
				variant: "secondary",
				disabled: T.value,
				onClick: L
			}, {
				default: F(() => [...t[39] ||= [A(" Aktualisieren ", -1)]]),
				_: 1
			}, 8, ["disabled"])) : E("", !0)]), v.value ? (p(), q("div", dh, [J(Y(yt), { size: 32 })])) : o.value ? (p(), q(K, { key: 1 }, [
				z("div", fh, [
					z("div", ph, [t[40] ||= z("span", null, "Mitglieder", -1), z("strong", null, n(o.value.summary.total), 1)]),
					z("div", mh, [t[41] ||= z("span", null, "Rechnungsbereit", -1), z("strong", null, n(o.value.summary.ready), 1)]),
					z("div", hh, [t[42] ||= z("span", null, "Beitragsfrei", -1), z("strong", null, n(o.value.summary.feeExempt), 1)]),
					z("div", gh, [t[43] ||= z("span", null, "Gesamtbetrag", -1), z("strong", null, n(M.value), 1)]),
					P.value > 0 ? (p(), q("div", _h, [t[44] ||= z("span", null, "Fehler", -1), z("strong", null, n(P.value), 1)])) : E("", !0)
				]),
				z("div", vh, [z("table", yh, [
					t[46] ||= z("thead", null, [z("tr", null, [
						z("th", null, "Mitglied"),
						z("th", null, "Nr."),
						z("th", null, "Beitragsgruppe"),
						z("th", null, "Beitragsart"),
						z("th", null, "Grundbeitrag"),
						z("th", null, "Beitrag"),
						z("th", null, "Status")
					])], -1),
					z("tbody", null, [(p(!0), q(K, null, S(o.value.members, (e) => (p(), q("tr", {
						key: e.uid,
						class: k({ "member-row--error": Oe(e) })
					}, [
						z("td", null, [z("div", bh, [z("strong", null, n(Ee(e)), 1), z("small", null, n(e.email || e.uid), 1)])]),
						z("td", null, n(e.memberNumber || "–"), 1),
						z("td", null, n(e.feeGroup || "–"), 1),
						z("td", null, [A(n(e.membershipType || "–") + " ", 1), e.adjustmentValue ? (p(), q("small", xh, n(e.adjustmentValue) + " % ", 1)) : E("", !0)]),
						z("td", null, n(Te(e.baseFeeAmount)), 1),
						z("td", Sh, n(Te(e.feeAmount)), 1),
						z("td", null, [z("span", { class: k(["member-status", `member-status--${e.status}`]) }, n(De(e)), 3)])
					], 2))), 128))]),
					z("tfoot", null, [z("tr", null, [
						z("td", Ch, [z("strong", null, n(o.value.summary.ready) + " Beitragsrechnungen ", 1)]),
						z("td", wh, [z("strong", null, n(M.value), 1)]),
						t[45] ||= z("td", null, null, -1)
					])])
				])]),
				re.value ? (p(), q("div", Th, [z("div", null, [
					t[47] ||= z("h4", null, "Beitragsrechnungen erstellen", -1),
					z("p", null, " Es werden Rechnungsentwürfe für alle rechnungsbereiten Mitglieder erzeugt. Danach wird die Beitragskonfiguration für " + n(r.value) + " gesperrt. ", 1),
					t[48] ||= z("p", null, [z("strong", null, " Dabei werden noch keine E-Mails versendet und keine Rechnungen festgeschrieben. ")], -1)
				]), J(Y(X), {
					variant: "primary",
					disabled: T.value || !ne.value,
					onClick: V
				}, {
					default: F(() => [A(n(b.value ? "Erstellt\xA0…" : "Beitragsrechnungen erstellen"), 1)]),
					_: 1
				}, 8, ["disabled"])])) : te.value ? (p(), q("div", Eh, [z("strong", null, " Beitragslauf " + n(r.value) + " wurde bereits gestartet. ", 1), t[49] ||= z("span", null, " Die Beitragskonfiguration ist deshalb gesperrt. ", -1)])) : E("", !0)
			], 64)) : (p(), q("div", Dh, " Noch keine Vorschau geladen. "))])
		], 64))]));
	}
}), [["__scopeId", "data-v-a3d9d7c6"]]), kh = {
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
}, Ah = ["aria-hidden", "aria-label"], jh = [
	"fill",
	"width",
	"height"
], Mh = { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" }, Nh = { key: 0 };
function Ph(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon alert-circle-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Mh, [i.title ? (p(), q("title", Nh, n(i.title), 1)) : E("", !0)])], 8, jh))], 16, Ah);
}
var Fh = /*#__PURE__*/ Q(kh, [["render", Ph]]), Ih = { class: "rw-view" }, Lh = { class: "rw-view__head" }, Rh = { key: 2 }, zh = { class: "rw-filterbar" }, Bh = ["onClick"], Vh = { class: "rw-chip__n" }, Hh = { class: "rw-table-wrap" }, Uh = { class: "rw-table" }, Wh = { class: "num" }, Gh = ["onClick"], Kh = { class: "rw-status-cell" }, qh = { class: "rw-qstatus-text" }, Jh = { class: "num" }, Yh = { class: "rw-col-actions" }, Xh = { class: "rw-actions" }, Zh = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "QuotesView",
	setup(e) {
		let t = Je(), r = Yd(), i = N(""), a = [
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
		], o = N("all"), l = (e) => e.quoteStatus === "open" || e.quoteStatus === "expired", u = U(() => {
			let e = {
				all: r.quotes.length,
				open: 0,
				accepted: 0,
				rejected: 0,
				converted: 0
			};
			for (let t of r.quotes) l(t) && e.open++, t.quoteStatus === "accepted" && e.accepted++, t.quoteStatus === "rejected" && e.rejected++, t.quoteStatus === "converted" && e.converted++;
			return e;
		}), d = U(() => {
			switch (o.value) {
				case "open": return r.quotes.filter(l);
				case "accepted": return r.quotes.filter((e) => e.quoteStatus === "accepted");
				case "rejected": return r.quotes.filter((e) => e.quoteStatus === "rejected");
				case "converted": return r.quotes.filter((e) => e.quoteStatus === "converted");
				default: return r.quotes;
			}
		}), m = (e) => e.status === "committed" && (e.quoteStatus === "open" || e.quoteStatus === "expired" || e.quoteStatus === "accepted"), h = {
			draft: cs,
			open: ks,
			expired: Fh,
			accepted: Ss,
			rejected: hs,
			converted: uu,
			superseded: _u
		}, g = (e) => e ? h[e] ?? cs : cs, _ = (e) => e ? f("rechnungswerk", Uc[e] ?? e) : "";
		function v(e) {
			return e ? (e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e)).toLocaleDateString() : "—";
		}
		s(() => {
			r.fetchAll().catch((e) => {
				i.value = e.message ?? f("rechnungswerk", "Laden fehlgeschlagen");
			});
		});
		function y() {
			t.push({ name: "quote-new" });
		}
		function b(e) {
			t.push({
				name: "quote-detail",
				params: { id: String(e) }
			});
		}
		function x(e) {
			qd(e);
		}
		async function C(e) {
			i.value = "";
			try {
				let n = await r.convert(e);
				t.push({
					name: "invoice-detail",
					params: { id: String(n.id) }
				});
			} catch (e) {
				i.value = e.message ?? f("rechnungswerk", "Übernahme fehlgeschlagen");
			}
		}
		return (e, t) => (p(), q("div", Ih, [
			z("div", Lh, [z("h2", null, n(Y(f)("rechnungswerk", "Angebote")), 1), J(Y(X), {
				variant: "primary",
				onClick: y
			}, {
				icon: F(() => [J(Vo, { size: 20 })]),
				default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Neues Angebot")), 1)]),
				_: 1
			})]),
			i.value ? (p(), I(Y(it), {
				key: 0,
				type: "error",
				text: i.value
			}, null, 8, ["text"])) : E("", !0),
			!Y(r).loading && Y(r).quotes.length === 0 ? (p(), I(Y(mt), {
				key: 1,
				name: Y(f)("rechnungswerk", "Noch keine Angebote"),
				description: Y(f)("rechnungswerk", "Lege dein erstes Angebot an.")
			}, {
				icon: F(() => [J(Ca, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : Y(r).quotes.length > 0 ? (p(), q("div", Rh, [z("div", zh, [(p(), q(K, null, S(a, (e) => z("button", {
				key: e.key,
				class: k(["rw-chip", { "rw-chip--active": o.value === e.key }]),
				onClick: (t) => o.value = e.key
			}, [A(n(Y(f)("rechnungswerk", e.label)) + " ", 1), z("span", Vh, n(u.value[e.key]), 1)], 10, Bh)), 64))]), z("div", Hh, [z("table", Uh, [z("thead", null, [z("tr", null, [
				z("th", null, n(Y(f)("rechnungswerk", "Status")), 1),
				z("th", null, n(Y(f)("rechnungswerk", "Nummer")), 1),
				z("th", null, n(Y(f)("rechnungswerk", "Empfänger")), 1),
				z("th", null, n(Y(f)("rechnungswerk", "Datum")), 1),
				z("th", null, n(Y(f)("rechnungswerk", "Gültig bis")), 1),
				z("th", Wh, n(Y(f)("rechnungswerk", "Brutto")), 1),
				t[0] ||= z("th", { class: "rw-col-actions" }, null, -1)
			])]), z("tbody", null, [(p(!0), q(K, null, S(d.value, (e) => (p(), q("tr", {
				key: e.id,
				class: k(["rw-row-clickable", { "rw-row--overdue": e.quoteStatus === "expired" }]),
				onClick: (t) => b(e.id)
			}, [
				z("td", null, [z("span", Kh, [(p(), I(c(g(e.quoteStatus)), {
					size: 20,
					class: k(["rw-sicon", `rw-qsicon--${e.quoteStatus}`]),
					title: _(e.quoteStatus)
				}, null, 8, ["class", "title"])), z("span", qh, n(_(e.quoteStatus)), 1)])]),
				z("td", null, n(e.number ?? Y(f)("rechnungswerk", "(Entwurf)")), 1),
				z("td", null, n(e.recipientName ?? "—"), 1),
				z("td", null, n(v(e.issueDate ?? e.createdAt)), 1),
				z("td", null, [z("span", { class: k({ "rw-amt-overdue": e.quoteStatus === "expired" }) }, n(v(e.validUntil)), 3)]),
				z("td", Jh, n(Y($c)(e.totalCents)), 1),
				z("td", Yh, [z("div", Xh, [m(e) ? (p(), I(Y(X), {
					key: 0,
					variant: "tertiary",
					"aria-label": Y(f)("rechnungswerk", "In Rechnung übernehmen"),
					title: Y(f)("rechnungswerk", "In Rechnung übernehmen"),
					onClick: M((t) => C(e.id), ["stop"])
				}, {
					icon: F(() => [J(uu, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])) : E("", !0), e.status === "draft" ? E("", !0) : (p(), I(Y(X), {
					key: 1,
					variant: "tertiary",
					"aria-label": Y(f)("rechnungswerk", "PDF herunterladen"),
					title: Y(f)("rechnungswerk", "PDF herunterladen"),
					onClick: M((t) => x(e.id), ["stop"])
				}, {
					icon: F(() => [J(Jo, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				]))])])
			], 10, Gh))), 128))])])])])) : E("", !0)
		]));
	}
}), [["__scopeId", "data-v-62bdd46f"]]), Qh = { class: "product-modal" }, $h = { class: "field" }, eg = { class: "field" }, tg = { class: "field-row" }, ng = { class: "field" }, rg = ["value"], ig = { class: "field" }, ag = { class: "field" }, og = ["value"], sg = { class: "field" }, cg = ["placeholder"], lg = { class: "hint" }, ug = { class: "actions" }, dg = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "ProductEditModal",
	props: {
		open: { type: Boolean },
		product: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = N(null), o = le({
			name: "",
			description: "",
			defaultUnitCode: "C62",
			defaultUnitLabel: "",
			defaultTaxRateBp: 1900
		}), s = N("0,00");
		function c() {
			qc(s.value) !== null && (s.value = Xc(Zc(s.value)));
		}
		let l = U(() => r.product ? f("rechnungswerk", "Produkt bearbeiten") : f("rechnungswerk", "Produkt anlegen")), u = U(() => o.name.trim() !== "");
		_(() => r.open, (e) => {
			if (!e) return;
			let t = r.product;
			o.name = t?.name ?? "", o.description = t?.description ?? "", o.defaultUnitCode = t?.defaultUnitCode ?? "C62", o.defaultUnitLabel = t?.defaultUnitLabel ?? "", o.defaultTaxRateBp = t?.defaultTaxRateBp ?? 1900, s.value = Xc(t?.defaultPriceE4 ?? 0), oe(() => a.value?.focus());
		}, { immediate: !0 });
		function d() {
			u.value && i("save", {
				name: o.name.trim(),
				description: o.description.trim() === "" ? null : o.description.trim(),
				defaultUnitCode: o.defaultUnitCode,
				defaultUnitLabel: o.defaultUnitLabel.trim() === "" ? null : o.defaultUnitLabel.trim(),
				defaultPriceInput: s.value,
				defaultTaxRateBp: o.defaultTaxRateBp
			});
		}
		return (t, r) => e.open ? (p(), I(Y(ot), {
			key: 0,
			name: l.value,
			onKeydown: r[7] ||= ye((e) => Y(Dd)(e, () => t.$emit("close")), ["esc"]),
			onClose: r[8] ||= (e) => t.$emit("close")
		}, {
			default: F(() => [z("div", Qh, [
				z("h2", null, n(l.value), 1),
				z("label", $h, [z("span", null, n(Y(f)("rechnungswerk", "Name")) + " *", 1), G(z("input", {
					ref_key: "nameInput",
					ref: a,
					"onUpdate:modelValue": r[0] ||= (e) => o.name = e,
					class: "input",
					type: "text"
				}, null, 512), [[O, o.name]])]),
				z("label", eg, [z("span", null, n(Y(f)("rechnungswerk", "Beschreibung")), 1), G(z("textarea", {
					"onUpdate:modelValue": r[1] ||= (e) => o.description = e,
					class: "input",
					rows: "2"
				}, null, 512), [[O, o.description]])]),
				z("div", tg, [
					z("label", ng, [z("span", null, n(Y(f)("rechnungswerk", "Einheit")), 1), G(z("select", {
						"onUpdate:modelValue": r[2] ||= (e) => o.defaultUnitCode = e,
						class: "input"
					}, [(p(!0), q(K, null, S(Y(Fc), (e) => (p(), q("option", {
						key: e,
						value: e
					}, n(Y(f)("rechnungswerk", Y(Ic)[e])), 9, rg))), 128))], 512), [[ae, o.defaultUnitCode]])]),
					z("label", ig, [z("span", null, n(Y(f)("rechnungswerk", "Standard-Preis (€)")), 1), G(z("input", {
						"onUpdate:modelValue": r[3] ||= (e) => s.value = e,
						class: "input",
						type: "text",
						inputmode: "decimal",
						onBlur: c
					}, null, 544), [[O, s.value]])]),
					z("label", ag, [z("span", null, n(Y(f)("rechnungswerk", "USt-Satz")), 1), G(z("select", {
						"onUpdate:modelValue": r[4] ||= (e) => o.defaultTaxRateBp = e,
						class: "input"
					}, [(p(!0), q(K, null, S(Y(Lc), (e) => (p(), q("option", {
						key: e,
						value: e
					}, n(Y(el)(e)), 9, og))), 128))], 512), [[
						ae,
						o.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])])
				]),
				z("label", sg, [
					z("span", null, n(Y(f)("rechnungswerk", "Eigene Einheit (optional)")), 1),
					G(z("input", {
						"onUpdate:modelValue": r[5] ||= (e) => o.defaultUnitLabel = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: Y(f)("rechnungswerk", "z. B. Personen, Sitzung")
					}, null, 8, cg), [[O, o.defaultUnitLabel]]),
					z("span", lg, n(Y(f)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF. In der E-Rechnung wird die Einheit generisch (Stück) abgebildet, damit sie gültig bleibt.")), 1)
				]),
				z("div", ug, [J(Y(X), { onClick: r[6] ||= (e) => t.$emit("close") }, {
					default: F(() => [A(n(Y(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(Y(X), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					default: F(() => [A(n(Y(f)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : E("", !0);
	}
}), [["__scopeId", "data-v-e77e93c0"]]), fg = { class: "rw-view" }, pg = { class: "rw-view__head" }, mg = {
	key: 2,
	class: "rw-table-wrap"
}, hg = { class: "rw-table" }, gg = { class: "num" }, _g = { class: "num" }, vg = ["onClick"], yg = {
	key: 0,
	class: "rw-muted"
}, bg = { class: "num" }, xg = { class: "num" }, Sg = { class: "rw-col-actions" }, Cg = { class: "rw-actions" }, wg = /* @__PURE__ */ r({
	__name: "ProductsView",
	setup(e) {
		let t = ef(), r = N(!1), i = N(null), a = N(null), o = N(""), c = (e) => Ic[e] ?? e;
		function l(e, t) {
			let n = e.message ?? t;
			o.value = n, console.error("[rechnungswerk] products:", e);
		}
		s(() => {
			t.fetchAll().catch((e) => l(e, f("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function u() {
			i.value = null, r.value = !0;
		}
		function d(e) {
			i.value = e, r.value = !0;
		}
		async function m(e) {
			o.value = "";
			try {
				i.value ? await t.update(i.value.id, e) : await t.create(e), r.value = !1;
			} catch (e) {
				l(e, f("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function h(e) {
			a.value = e;
		}
		async function g() {
			let e = a.value;
			if (a.value = null, e) {
				o.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					l(e, f("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, s) => (p(), q("div", fg, [
			z("div", pg, [z("h2", null, n(Y(f)("rechnungswerk", "Produkte")), 1), J(Y(X), {
				variant: "primary",
				onClick: u
			}, {
				icon: F(() => [J(Vo, { size: 20 })]),
				default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Produkt anlegen")), 1)]),
				_: 1
			})]),
			o.value ? (p(), I(Y(it), {
				key: 0,
				type: "error",
				text: o.value
			}, null, 8, ["text"])) : E("", !0),
			!Y(t).loading && Y(t).products.length === 0 ? (p(), I(Y(mt), {
				key: 1,
				name: Y(f)("rechnungswerk", "Noch keine Produkte"),
				description: Y(f)("rechnungswerk", "Pflege wiederkehrende Leistungen, um sie schnell in Rechnungen zu übernehmen.")
			}, {
				icon: F(() => [J(Wa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : Y(t).products.length > 0 ? (p(), q("div", mg, [z("table", hg, [z("thead", null, [z("tr", null, [
				z("th", null, n(Y(f)("rechnungswerk", "Name")), 1),
				z("th", null, n(Y(f)("rechnungswerk", "Einheit")), 1),
				z("th", gg, n(Y(f)("rechnungswerk", "Preis")), 1),
				z("th", _g, n(Y(f)("rechnungswerk", "USt")), 1),
				s[2] ||= z("th", { class: "num" }, null, -1)
			])]), z("tbody", null, [(p(!0), q(K, null, S(Y(t).products, (e) => (p(), q("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => d(e)
			}, [
				z("td", null, [A(n(e.name) + " ", 1), e.description ? (p(), q("div", yg, n(e.description), 1)) : E("", !0)]),
				z("td", null, n(e.defaultUnitLabel || Y(f)("rechnungswerk", c(e.defaultUnitCode))), 1),
				z("td", bg, n(Y(Qc)(e.defaultPriceE4)), 1),
				z("td", xg, n(Y(el)(e.defaultTaxRateBp)), 1),
				z("td", Sg, [z("div", Cg, [J(Y(X), {
					variant: "tertiary",
					"aria-label": Y(f)("rechnungswerk", "Löschen"),
					title: Y(f)("rechnungswerk", "Löschen"),
					onClick: M((t) => h(e), ["stop"])
				}, {
					icon: F(() => [J(Ul, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, vg))), 128))])])])) : E("", !0),
			J(dg, {
				open: r.value,
				product: i.value,
				saving: Y(t).loading,
				onClose: s[0] ||= (e) => r.value = !1,
				onSave: m
			}, null, 8, [
				"open",
				"product",
				"saving"
			]),
			J(Ed, {
				open: a.value !== null,
				name: Y(f)("rechnungswerk", "Produkt löschen"),
				message: a.value ? Y(f)("rechnungswerk", "„{name}“ wirklich löschen?", { name: a.value.name }) : "",
				confirmLabel: Y(f)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: s[1] ||= (e) => a.value = null,
				onConfirm: g
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), Tg = {
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
}, Eg = ["aria-hidden", "aria-label"], Dg = [
	"fill",
	"width",
	"height"
], Og = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, kg = { key: 0 };
function Ag(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon star-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Og, [i.title ? (p(), q("title", kg, n(i.title), 1)) : E("", !0)])], 8, Dg))], 16, Eg);
}
var jg = /*#__PURE__*/ Q(Tg, [["render", Ag]]), Mg = {
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
function Lg(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon star-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", Fg, [i.title ? (p(), q("title", Ig, n(i.title), 1)) : E("", !0)])], 8, Pg))], 16, Ng);
}
var Rg = /*#__PURE__*/ Q(Mg, [["render", Lg]]), zg = { class: "snippet-modal" }, Bg = { class: "field" }, Vg = ["placeholder"], Hg = { class: "field-row" }, Ug = { class: "field" }, Wg = ["value"], Gg = { class: "field" }, Kg = ["value"], qg = { class: "field" }, Jg = { class: "hint" }, Yg = { class: "actions" }, Xg = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "TextSnippetEditModal",
	props: {
		open: { type: Boolean },
		snippet: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let r = ["invoice", "quote"], i = ["opening", "closing"], a = e, o = t, s = N(null), c = le({
			label: "",
			docType: "invoice",
			slot: "opening",
			content: "",
			isDefault: !1
		}), l = U(() => a.snippet ? f("rechnungswerk", "Textbaustein bearbeiten") : f("rechnungswerk", "Textbaustein anlegen")), u = U(() => c.label.trim() !== "");
		_(() => a.open, (e) => {
			if (!e) return;
			let t = a.snippet;
			c.label = t?.label ?? "", c.docType = t?.docType ?? "invoice", c.slot = t?.slot ?? "opening", c.content = t?.content ?? "", c.isDefault = t?.isDefault ?? !1, oe(() => s.value?.focus());
		}, { immediate: !0 });
		function d() {
			u.value && o("save", {
				label: c.label.trim(),
				docType: c.docType,
				slot: c.slot,
				content: c.content.trim() === "" ? null : c.content,
				isDefault: c.isDefault
			});
		}
		return (t, a) => e.open ? (p(), I(Y(ot), {
			key: 0,
			name: l.value,
			onKeydown: a[6] ||= ye((e) => Y(Dd)(e, () => t.$emit("close")), ["esc"]),
			onClose: a[7] ||= (e) => t.$emit("close")
		}, {
			default: F(() => [z("div", zg, [
				z("h2", null, n(l.value), 1),
				z("label", Bg, [z("span", null, n(Y(f)("rechnungswerk", "Name")) + " *", 1), G(z("input", {
					ref_key: "nameInput",
					ref: s,
					"onUpdate:modelValue": a[0] ||= (e) => c.label = e,
					class: "input",
					type: "text",
					placeholder: Y(f)("rechnungswerk", "z. B. Neukunde, Mahnfreundlich")
				}, null, 8, Vg), [[O, c.label]])]),
				z("div", Hg, [z("label", Ug, [z("span", null, n(Y(f)("rechnungswerk", "Dokument")), 1), G(z("select", {
					"onUpdate:modelValue": a[1] ||= (e) => c.docType = e,
					class: "input"
				}, [(p(), q(K, null, S(r, (e) => z("option", {
					key: e,
					value: e
				}, n(Y(f)("rechnungswerk", Y(zc)[e])), 9, Wg)), 64))], 512), [[ae, c.docType]])]), z("label", Gg, [z("span", null, n(Y(f)("rechnungswerk", "Textbereich")), 1), G(z("select", {
					"onUpdate:modelValue": a[2] ||= (e) => c.slot = e,
					class: "input"
				}, [(p(), q(K, null, S(i, (e) => z("option", {
					key: e,
					value: e
				}, n(Y(f)("rechnungswerk", Y(Bc)[e])), 9, Kg)), 64))], 512), [[ae, c.slot]])])]),
				z("label", qg, [z("span", null, n(Y(f)("rechnungswerk", "Text")), 1), G(z("textarea", {
					"onUpdate:modelValue": a[3] ||= (e) => c.content = e,
					class: "input",
					rows: "6"
				}, null, 512), [[O, c.content]])]),
				J(Y(bt), {
					modelValue: c.isDefault,
					"onUpdate:modelValue": a[4] ||= (e) => c.isDefault = e
				}, {
					default: F(() => [A(n(Y(f)("rechnungswerk", "Als Standard für neue Dokumente verwenden")), 1)]),
					_: 1
				}, 8, ["modelValue"]),
				z("p", Jg, n(Y(f)("rechnungswerk", "Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.")), 1),
				z("div", Yg, [J(Y(X), { onClick: a[5] ||= (e) => t.$emit("close") }, {
					default: F(() => [A(n(Y(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(Y(X), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					default: F(() => [A(n(Y(f)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : E("", !0);
	}
}), [["__scopeId", "data-v-b60fbea6"]]), Zg = { class: "rw-view" }, Qg = { class: "rw-view__head" }, $g = { class: "rw-muted rw-intro" }, e_ = {
	key: 2,
	class: "rw-snippet-groups"
}, t_ = { class: "rw-snippet-group__head" }, n_ = { class: "rw-table-wrap" }, r_ = { class: "rw-table" }, i_ = ["onClick"], a_ = {
	key: 0,
	class: "rw-muted rw-snippet-content"
}, o_ = { class: "rw-snippet-actions" }, s_ = { class: "rw-actions" }, c_ = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "TextSnippetsView",
	setup(e) {
		let t = sf(), r = ["invoice", "quote"], i = ["opening", "closing"], a = U(() => {
			let e = [];
			for (let n of r) for (let r of i) {
				let i = t.snippets.filter((e) => e.docType === n && e.slot === r).sort((e, t) => Number(t.isDefault) - Number(e.isDefault) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
				i.length > 0 && e.push({
					key: `${n}-${r}`,
					docType: n,
					slot: r,
					items: i
				});
			}
			return e;
		}), o = N(!1), c = N(null), l = N(null), u = N("");
		function d(e, t) {
			let n = e.message ?? t;
			u.value = n, console.error("[rechnungswerk] text-snippets:", e);
		}
		s(() => {
			t.fetchAll().catch((e) => d(e, f("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function m() {
			c.value = null, o.value = !0;
		}
		function h(e) {
			c.value = e, o.value = !0;
		}
		async function g(e) {
			if (!e.isDefault) {
				u.value = "";
				try {
					await t.update(e.id, { isDefault: !0 });
				} catch (e) {
					d(e, f("rechnungswerk", "Speichern fehlgeschlagen"));
				}
			}
		}
		async function _(e) {
			u.value = "";
			try {
				c.value ? await t.update(c.value.id, e) : await t.create(e), o.value = !1;
			} catch (e) {
				d(e, f("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function v(e) {
			l.value = e;
		}
		async function y() {
			let e = l.value;
			if (l.value = null, e) {
				u.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					d(e, f("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, r) => (p(), q("div", Zg, [
			z("div", Qg, [z("h2", null, n(Y(f)("rechnungswerk", "Textbausteine")), 1), J(Y(X), {
				variant: "primary",
				onClick: m
			}, {
				icon: F(() => [J(Vo, { size: 20 })]),
				default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Textbaustein anlegen")), 1)]),
				_: 1
			})]),
			z("p", $g, n(Y(f)("rechnungswerk", "Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.")), 1),
			u.value ? (p(), I(Y(it), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : E("", !0),
			!Y(t).loading && Y(t).snippets.length === 0 ? (p(), I(Y(mt), {
				key: 1,
				name: Y(f)("rechnungswerk", "Noch keine Textbausteine"),
				description: Y(f)("rechnungswerk", "Lege wiederkehrende Einleitungs- und Schlusstexte an, um sie schnell in Dokumente zu übernehmen.")
			}, {
				icon: F(() => [J(Za, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : Y(t).snippets.length > 0 ? (p(), q("div", e_, [(p(!0), q(K, null, S(a.value, (e) => (p(), q("section", {
				key: e.key,
				class: "rw-snippet-group"
			}, [z("h3", t_, [
				A(n(Y(f)("rechnungswerk", Y(zc)[e.docType])) + " ", 1),
				r[2] ||= z("span", { class: "rw-snippet-group__sep" }, "–", -1),
				A(" " + n(Y(f)("rechnungswerk", Y(Bc)[e.slot])), 1)
			]), z("div", n_, [z("table", r_, [z("tbody", null, [(p(!0), q(K, null, S(e.items, (e) => (p(), q("tr", {
				key: e.id,
				class: "rw-row-clickable rw-snippet-row",
				onClick: (t) => h(e)
			}, [z("td", null, [z("strong", null, n(e.label), 1), e.content ? (p(), q("div", a_, n(e.content), 1)) : E("", !0)]), z("td", o_, [z("div", s_, [J(Y(X), {
				variant: "tertiary",
				"aria-label": e.isDefault ? Y(f)("rechnungswerk", "Standard-Vorlage") : Y(f)("rechnungswerk", "Als Standard festlegen"),
				title: e.isDefault ? Y(f)("rechnungswerk", "Standard-Vorlage") : Y(f)("rechnungswerk", "Als Standard festlegen"),
				onClick: M((t) => g(e), ["stop"])
			}, {
				icon: F(() => [e.isDefault ? (p(), I(jg, {
					key: 0,
					size: 20,
					class: "rw-star rw-star--active"
				})) : (p(), I(Rg, {
					key: 1,
					size: 20,
					class: "rw-star"
				}))]),
				_: 2
			}, 1032, [
				"aria-label",
				"title",
				"onClick"
			]), J(Y(X), {
				variant: "tertiary",
				"aria-label": Y(f)("rechnungswerk", "Löschen"),
				title: Y(f)("rechnungswerk", "Löschen"),
				onClick: M((t) => v(e), ["stop"])
			}, {
				icon: F(() => [J(Ul, { size: 20 })]),
				_: 1
			}, 8, [
				"aria-label",
				"title",
				"onClick"
			])])])], 8, i_))), 128))])])])]))), 128))])) : E("", !0),
			J(Xg, {
				open: o.value,
				snippet: c.value,
				saving: Y(t).loading,
				onClose: r[0] ||= (e) => o.value = !1,
				onSave: _
			}, null, 8, [
				"open",
				"snippet",
				"saving"
			]),
			J(Ed, {
				open: l.value !== null,
				name: Y(f)("rechnungswerk", "Textbaustein löschen"),
				message: l.value ? Y(f)("rechnungswerk", "„{name}“ wirklich löschen?", { name: l.value.label }) : "",
				confirmLabel: Y(f)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: r[1] ||= (e) => l.value = null,
				onConfirm: y
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
function m_(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon account-arrow-right-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", f_, [i.title ? (p(), q("title", p_, n(i.title), 1)) : E("", !0)])], 8, d_))], 16, u_);
}
var h_ = /*#__PURE__*/ Q(l_, [["render", m_]]), g_ = { class: "customer-modal" }, __ = { class: "form-section" }, v_ = { class: "row" }, y_ = { class: "field" }, b_ = { class: "field" }, x_ = { class: "row" }, S_ = { class: "field" }, C_ = { class: "form-section" }, w_ = { class: "field" }, T_ = { class: "row" }, E_ = { class: "field" }, D_ = { class: "field" }, O_ = { class: "row" }, k_ = { class: "field" }, A_ = { class: "form-section" }, j_ = { class: "row" }, M_ = { class: "field" }, N_ = { class: "field" }, P_ = { class: "field" }, F_ = { class: "form-section" }, I_ = { class: "field" }, L_ = { class: "row" }, R_ = { class: "field" }, z_ = { class: "field" }, B_ = { class: "field" }, V_ = { class: "form-section" }, H_ = { class: "row" }, U_ = { class: "field" }, W_ = { class: "field" }, G_ = { value: "" }, K_ = ["value"], q_ = { class: "field" }, J_ = { class: "actions" }, Y_ = /*#__PURE__*/ Q(/* @__PURE__ */ r({
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
		let r = e, i = t, a = N(null), o = () => ({
			customerNumber: "",
			name: "",
			vatId: "",
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
		}), s = le(o()), c = N(""), l = N(""), u = U(() => r.customer ? f("rechnungswerk", "Kunde bearbeiten") : f("rechnungswerk", "Kunde anlegen")), d = U(() => {
			let e = s.customerNumber.trim().toLowerCase();
			return e !== "" && (r.takenNumbers ?? []).includes(e);
		}), m = U(() => s.customerNumber.trim() !== "" && s.name.trim() !== "" && !d.value);
		_(() => r.open, (e) => {
			if (!e) return;
			let t = r.customer;
			Object.assign(s, o()), t ? (s.customerNumber = t.customerNumber ?? "", s.name = t.name ?? "", s.vatId = t.vatId ?? "", s.address = t.address ?? "", s.postalCode = t.postalCode ?? "", s.city = t.city ?? "", s.country = t.country ?? "DE", s.contactPerson = t.contactPerson ?? "", s.phone = t.phone ?? "", s.email = t.email ?? "", s.bankAccountHolder = t.bankAccountHolder ?? "", s.iban = t.iban ?? "", s.bic = t.bic ?? "", s.bankName = t.bankName ?? "", s.note = t.note ?? "", c.value = t.defaultPaymentTermDays == null ? "" : String(t.defaultPaymentTermDays), l.value = t.defaultTaxRateBp == null ? "" : String(t.defaultTaxRateBp)) : r.prefill && Object.assign(s, {
				...o(),
				...h(r.prefill)
			}), oe(() => a.value?.focus());
		}, { immediate: !0 });
		function h(e) {
			let t = {};
			for (let [n, r] of Object.entries(e)) typeof r == "string" && (t[n] = r);
			return t;
		}
		function g(e) {
			let t = e.trim();
			return t === "" ? null : t;
		}
		function v() {
			m.value && i("save", {
				customerNumber: s.customerNumber.trim(),
				name: s.name.trim(),
				vatId: g(s.vatId),
				address: g(s.address),
				postalCode: g(s.postalCode),
				city: g(s.city),
				country: s.country.trim() === "" ? "DE" : s.country.trim().toUpperCase(),
				contactPerson: g(s.contactPerson),
				phone: g(s.phone),
				email: g(s.email),
				bankAccountHolder: g(s.bankAccountHolder),
				iban: g(s.iban),
				bic: g(s.bic),
				bankName: g(s.bankName),
				defaultPaymentTermDays: String(c.value).trim() === "" ? null : Math.max(0, Number(c.value)),
				defaultTaxRateBp: l.value === "" ? null : Number(l.value),
				note: g(s.note)
			});
		}
		return (t, r) => e.open ? (p(), I(Y(ot), {
			key: 0,
			name: u.value,
			onKeydown: r[18] ||= ye((e) => Y(Dd)(e, () => t.$emit("close")), ["esc"]),
			onClose: r[19] ||= (e) => t.$emit("close")
		}, {
			default: F(() => [z("div", g_, [
				z("h2", null, n(u.value), 1),
				z("div", __, [
					z("h3", null, n(Y(f)("rechnungswerk", "Stammdaten")), 1),
					z("div", v_, [z("label", y_, [z("span", null, n(Y(f)("rechnungswerk", "Kundennr.")) + " *", 1), G(z("input", {
						ref_key: "numberInput",
						ref: a,
						"onUpdate:modelValue": r[0] ||= (e) => s.customerNumber = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.customerNumber]])]), z("label", b_, [z("span", null, n(Y(f)("rechnungswerk", "Name / Firma")) + " *", 1), G(z("input", {
						"onUpdate:modelValue": r[1] ||= (e) => s.name = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.name]])])]),
					d.value ? (p(), I(Y(it), {
						key: 0,
						type: "error",
						text: Y(f)("rechnungswerk", "Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.", { number: s.customerNumber.trim() })
					}, null, 8, ["text"])) : E("", !0),
					z("div", x_, [z("label", S_, [z("span", null, n(Y(f)("rechnungswerk", "USt-IdNr.")), 1), G(z("input", {
						"onUpdate:modelValue": r[2] ||= (e) => s.vatId = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.vatId]])])])
				]),
				z("div", C_, [
					z("h3", null, n(Y(f)("rechnungswerk", "Anschrift")), 1),
					z("label", w_, [z("span", null, n(Y(f)("rechnungswerk", "Straße & Hausnummer")), 1), G(z("input", {
						"onUpdate:modelValue": r[3] ||= (e) => s.address = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.address]])]),
					z("div", T_, [z("label", E_, [z("span", null, n(Y(f)("rechnungswerk", "PLZ")), 1), G(z("input", {
						"onUpdate:modelValue": r[4] ||= (e) => s.postalCode = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.postalCode]])]), z("label", D_, [z("span", null, n(Y(f)("rechnungswerk", "Ort")), 1), G(z("input", {
						"onUpdate:modelValue": r[5] ||= (e) => s.city = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.city]])])]),
					z("div", O_, [z("label", k_, [z("span", null, n(Y(f)("rechnungswerk", "Land")), 1), J(ju, {
						modelValue: s.country,
						"onUpdate:modelValue": r[6] ||= (e) => s.country = e,
						selectClass: "input"
					}, null, 8, ["modelValue"])])])
				]),
				z("div", A_, [
					z("h3", null, n(Y(f)("rechnungswerk", "Ansprechpartner & Kontakt")), 1),
					z("div", j_, [z("label", M_, [z("span", null, n(Y(f)("rechnungswerk", "Ansprechpartner")), 1), G(z("input", {
						"onUpdate:modelValue": r[7] ||= (e) => s.contactPerson = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.contactPerson]])]), z("label", N_, [z("span", null, n(Y(f)("rechnungswerk", "Telefon")), 1), G(z("input", {
						"onUpdate:modelValue": r[8] ||= (e) => s.phone = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.phone]])])]),
					z("label", P_, [z("span", null, n(Y(f)("rechnungswerk", "E-Mail (für Rechnungsversand)")), 1), G(z("input", {
						"onUpdate:modelValue": r[9] ||= (e) => s.email = e,
						class: "input",
						type: "email"
					}, null, 512), [[O, s.email]])])
				]),
				z("div", F_, [
					z("h3", null, n(Y(f)("rechnungswerk", "Bankverbindung")), 1),
					z("label", I_, [z("span", null, n(Y(f)("rechnungswerk", "Kontoinhaber")), 1), G(z("input", {
						"onUpdate:modelValue": r[10] ||= (e) => s.bankAccountHolder = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.bankAccountHolder]])]),
					z("div", L_, [z("label", R_, [z("span", null, n(Y(f)("rechnungswerk", "IBAN")), 1), G(z("input", {
						"onUpdate:modelValue": r[11] ||= (e) => s.iban = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.iban]])]), z("label", z_, [z("span", null, n(Y(f)("rechnungswerk", "BIC")), 1), G(z("input", {
						"onUpdate:modelValue": r[12] ||= (e) => s.bic = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.bic]])])]),
					z("label", B_, [z("span", null, n(Y(f)("rechnungswerk", "Bank")), 1), G(z("input", {
						"onUpdate:modelValue": r[13] ||= (e) => s.bankName = e,
						class: "input",
						type: "text"
					}, null, 512), [[O, s.bankName]])])
				]),
				z("div", V_, [
					z("h3", null, n(Y(f)("rechnungswerk", "Vorgaben für neue Rechnungen")), 1),
					z("div", H_, [z("label", U_, [z("span", null, n(Y(f)("rechnungswerk", "Zahlungsziel (Tage)")), 1), G(z("input", {
						"onUpdate:modelValue": r[14] ||= (e) => c.value = e,
						class: "input",
						type: "number",
						min: "0",
						inputmode: "numeric"
					}, null, 512), [[O, c.value]])]), z("label", W_, [z("span", null, n(Y(f)("rechnungswerk", "Standard-Steuersatz")), 1), G(z("select", {
						"onUpdate:modelValue": r[15] ||= (e) => l.value = e,
						class: "input"
					}, [z("option", G_, n(Y(f)("rechnungswerk", "— keine Vorgabe —")), 1), (p(!0), q(K, null, S(Y(Lc), (e) => (p(), q("option", {
						key: e,
						value: String(e)
					}, n(Y(el)(e)), 9, K_))), 128))], 512), [[ae, l.value]])])]),
					z("label", q_, [z("span", null, n(Y(f)("rechnungswerk", "Notiz (intern, nicht auf der Rechnung)")), 1), G(z("textarea", {
						"onUpdate:modelValue": r[16] ||= (e) => s.note = e,
						class: "input",
						rows: "2"
					}, null, 512), [[O, s.note]])])
				]),
				z("div", J_, [J(Y(X), { onClick: r[17] ||= (e) => t.$emit("close") }, {
					default: F(() => [A(n(Y(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(Y(X), {
					variant: "primary",
					disabled: e.saving || !m.value,
					onClick: v
				}, {
					default: F(() => [A(n(Y(f)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : E("", !0);
	}
}), [["__scopeId", "data-v-2d237eab"]]), X_ = { class: "rw-view" }, Z_ = { class: "rw-view__head" }, Q_ = { class: "rw-view__actions" }, $_ = {
	key: 2,
	class: "rw-table-wrap"
}, ev = { class: "rw-table" }, tv = ["onClick"], nv = { class: "rw-muted" }, rv = {
	key: 0,
	class: "rw-muted"
}, iv = { class: "rw-col-actions" }, av = { class: "rw-actions" }, ov = { class: "rw-import" }, sv = { class: "rw-muted" }, cv = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "CustomersView",
	setup(e) {
		let t = Iu(), r = N(!1), i = N(null), a = N(null), o = N(null), c = N(!1), l = N(""), u = N(""), d = N(!1), m = U(() => t.customers.filter((e) => e.id !== i.value?.id).map((e) => e.customerNumber.trim().toLowerCase()));
		function h(e, t) {
			u.value = e.message ?? t, console.error("[rechnungswerk] customers:", e);
		}
		s(() => {
			t.fetchAll().catch((e) => h(e, f("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function g() {
			i.value = null, a.value = null, r.value = !0;
		}
		function _(e) {
			i.value = e, a.value = null, r.value = !0;
		}
		function v() {
			l.value = "", c.value = !0;
		}
		function y(e) {
			c.value = !1, i.value = null, a.value = {
				name: e.name,
				email: e.email || null,
				phone: e.phone || null,
				address: e.address || null,
				postalCode: e.postalCode || null,
				city: e.city || null,
				country: e.country || "DE"
			}, r.value = !0;
		}
		async function b(e) {
			u.value = "", d.value = !0;
			try {
				i.value ? await t.update(i.value.id, e) : await t.create(e), r.value = !1, a.value = null;
			} catch (e) {
				h(e, f("rechnungswerk", "Speichern fehlgeschlagen"));
			} finally {
				d.value = !1;
			}
		}
		function x(e) {
			o.value = e;
		}
		async function C() {
			let e = o.value;
			if (o.value = null, e) {
				u.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					h(e, f("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, s) => (p(), q("div", X_, [
			z("div", Z_, [z("h2", null, n(Y(f)("rechnungswerk", "Kunden")), 1), z("div", Q_, [J(Y(X), { onClick: v }, {
				icon: F(() => [J(h_, { size: 20 })]),
				default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Aus Kontakten importieren")), 1)]),
				_: 1
			}), J(Y(X), {
				variant: "primary",
				onClick: g
			}, {
				icon: F(() => [J(Vo, { size: 20 })]),
				default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Neuer Kunde")), 1)]),
				_: 1
			})])]),
			u.value ? (p(), I(Y(it), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : E("", !0),
			!Y(t).loading && Y(t).customers.length === 0 ? (p(), I(Y(mt), {
				key: 1,
				name: Y(f)("rechnungswerk", "Noch keine Kunden"),
				description: Y(f)("rechnungswerk", "Lege Kunden an oder übernimm sie aus deinen Nextcloud-Kontakten, um sie schnell in Rechnungen auszuwählen.")
			}, {
				icon: F(() => [J(Aa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : Y(t).customers.length > 0 ? (p(), q("div", $_, [z("table", ev, [z("thead", null, [z("tr", null, [
				z("th", null, n(Y(f)("rechnungswerk", "Kundennr.")), 1),
				z("th", null, n(Y(f)("rechnungswerk", "Kunde")), 1),
				z("th", null, n(Y(f)("rechnungswerk", "Ort")), 1),
				s[5] ||= z("th", { class: "num" }, null, -1)
			])]), z("tbody", null, [(p(!0), q(K, null, S(Y(t).customers, (e) => (p(), q("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => _(e)
			}, [
				z("td", nv, n(e.customerNumber), 1),
				z("td", null, [A(n(e.name) + " ", 1), e.contactPerson || e.vatId ? (p(), q("div", rv, n([e.contactPerson, e.vatId].filter(Boolean).join(" · ")), 1)) : E("", !0)]),
				z("td", null, n([e.postalCode, e.city].filter(Boolean).join(" ")), 1),
				z("td", iv, [z("div", av, [J(Y(X), {
					variant: "tertiary",
					"aria-label": Y(f)("rechnungswerk", "Löschen"),
					title: Y(f)("rechnungswerk", "Löschen"),
					onClick: M((t) => x(e), ["stop"])
				}, {
					icon: F(() => [J(Ul, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, tv))), 128))])])])) : E("", !0),
			J(Y_, {
				open: r.value,
				customer: i.value,
				saving: d.value,
				takenNumbers: m.value,
				prefill: a.value,
				onClose: s[0] ||= (e) => r.value = !1,
				onSave: b
			}, null, 8, [
				"open",
				"customer",
				"saving",
				"takenNumbers",
				"prefill"
			]),
			c.value ? (p(), I(Y(ot), {
				key: 3,
				name: Y(f)("rechnungswerk", "Aus Nextcloud-Kontakten übernehmen"),
				onKeydown: s[2] ||= ye((e) => Y(Dd)(e, () => c.value = !1), ["esc"]),
				onClose: s[3] ||= (e) => c.value = !1
			}, {
				default: F(() => [z("div", ov, [z("p", sv, n(Y(f)("rechnungswerk", "Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.")), 1), J(Tu, {
					modelValue: l.value,
					"onUpdate:modelValue": s[1] ||= (e) => l.value = e,
					onSelect: y
				}, null, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["name"])) : E("", !0),
			J(Ed, {
				open: o.value !== null,
				name: Y(f)("rechnungswerk", "Kunde löschen"),
				message: o.value ? Y(f)("rechnungswerk", "„{name}“ wirklich löschen?", { name: o.value.name }) : "",
				confirmLabel: Y(f)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: s[4] ||= (e) => o.value = null,
				onConfirm: C
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-1eff74a5"]]), lv = {
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
}, uv = ["aria-hidden", "aria-label"], dv = [
	"fill",
	"width",
	"height"
], fv = { d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" }, pv = { key: 0 };
function mv(e, r, i, a, o, s) {
	return p(), q("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon content-save-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), q("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [z("path", fv, [i.title ? (p(), q("title", pv, n(i.title), 1)) : E("", !0)])], 8, dv))], 16, uv);
}
var hv = /*#__PURE__*/ Q(lv, [["render", mv]]), gv = { class: "rw-view" }, _v = {
	key: 2,
	class: "rw-section"
}, vv = { class: "rw-hint" }, yv = { class: "rw-form-row" }, bv = { class: "rw-field" }, xv = { class: "rw-field" }, Sv = { class: "rw-field" }, Cv = {
	key: 3,
	class: "rw-action-bar"
}, wv = /* @__PURE__ */ r({
	__name: "MyContactView",
	setup(e) {
		let t = N(null), r = N(""), i = N(""), a = N(!1);
		s(async () => {
			try {
				t.value = await cf();
			} catch (e) {
				r.value = e.message ?? f("rechnungswerk", "Laden fehlgeschlagen");
			}
		});
		async function o() {
			r.value = "";
			try {
				let e = await yu();
				t.value = {
					person: e.person,
					phone: e.phone,
					email: e.email
				};
			} catch (e) {
				r.value = e.message ?? f("rechnungswerk", "Nextcloud-Konto konnte nicht geladen werden.");
			}
		}
		async function c() {
			if (t.value) {
				r.value = "", i.value = "", a.value = !0;
				try {
					t.value = await lf(t.value), i.value = f("rechnungswerk", "Gespeichert.");
				} catch (e) {
					r.value = e.message ?? f("rechnungswerk", "Speichern fehlgeschlagen");
				} finally {
					a.value = !1;
				}
			}
		}
		return (e, s) => (p(), q("div", gv, [
			z("h2", null, n(Y(f)("rechnungswerk", "Mein Kontakt")), 1),
			r.value ? (p(), I(Y(it), {
				key: 0,
				type: "error",
				text: r.value
			}, null, 8, ["text"])) : E("", !0),
			i.value ? (p(), I(Y(it), {
				key: 1,
				type: "success",
				text: i.value
			}, null, 8, ["text"])) : E("", !0),
			t.value ? (p(), q("section", _v, [
				z("h3", null, n(Y(f)("rechnungswerk", "Mein Verkäufer-Ansprechpartner")), 1),
				z("p", vv, n(Y(f)("rechnungswerk", "Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.")), 1),
				z("div", yv, [
					z("label", bv, [z("span", null, n(Y(f)("rechnungswerk", "Name")), 1), G(z("input", {
						"onUpdate:modelValue": s[0] ||= (e) => t.value.person = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[O, t.value.person]])]),
					z("label", xv, [z("span", null, n(Y(f)("rechnungswerk", "Telefon")), 1), G(z("input", {
						"onUpdate:modelValue": s[1] ||= (e) => t.value.phone = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[O, t.value.phone]])]),
					z("label", Sv, [z("span", null, n(Y(f)("rechnungswerk", "E-Mail")), 1), G(z("input", {
						"onUpdate:modelValue": s[2] ||= (e) => t.value.email = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[O, t.value.email]])])
				]),
				J(Y(X), {
					variant: "tertiary",
					onClick: o
				}, {
					icon: F(() => [J(La, { size: 20 })]),
					default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Aus meinem Nextcloud-Konto übernehmen")), 1)]),
					_: 1
				})
			])) : E("", !0),
			t.value ? (p(), q("div", Cv, [J(Y(X), {
				variant: "primary",
				disabled: a.value,
				onClick: c
			}, {
				icon: F(() => [J(hv, { size: 20 })]),
				default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])) : E("", !0)
		]));
	}
}), Tv = () => $("/club-settings"), Ev = (e) => _o("/club-settings", e), Dv = async () => (await $("/groups")).groups, Ov = { class: "rw-section" }, kv = {
	key: 0,
	class: "rw-field rw-club-group"
}, Av = { class: "rw-club-actions" }, jv = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "ClubSettingsSection",
	setup(e) {
		let t = N(!1), r = N(null), i = N([]), a = N(!1), o = N(!1), c = N(!1), l = N(""), u = U({
			get() {
				return r.value ? i.value.find((e) => e.id === r.value) ?? {
					id: r.value,
					displayName: r.value
				} : null;
			},
			set(e) {
				r.value = e?.id ?? null;
			}
		}), d = U(() => !t.value || r.value !== null);
		function m(e) {
			t.value = e;
		}
		async function h() {
			a.value = !0, l.value = "";
			try {
				let e = await Tv();
				t.value = e.clubMode, r.value = e.memberGroup;
			} catch (e) {
				l.value = e.message ?? f("rechnungswerk", "Laden fehlgeschlagen");
			} finally {
				a.value = !1;
			}
		}
		async function g() {
			o.value = !0;
			try {
				i.value = await Dv();
			} catch (e) {
				i.value = [], console.error("[rechnungswerk] loading groups:", e);
			} finally {
				o.value = !1;
			}
		}
		async function _() {
			c.value = !0, l.value = "";
			try {
				let e = await Ev({
					clubMode: t.value,
					memberGroup: r.value
				});
				t.value = e.clubMode, r.value = e.memberGroup;
			} catch (e) {
				l.value = e.message ?? f("rechnungswerk", "Speichern fehlgeschlagen");
			} finally {
				c.value = !1;
			}
		}
		return s(async () => {
			await Promise.all([h(), g()]);
		}), (e, r) => (p(), q("section", Ov, [
			z("h3", null, n(Y(f)("rechnungswerk", "Verein")), 1),
			J(Y(bt), {
				type: "switch",
				modelValue: t.value,
				disabled: a.value || c.value,
				"onUpdate:modelValue": m
			}, {
				default: F(() => [A(n(Y(f)("rechnungswerk", "Vereinsmodus aktivieren")), 1)]),
				_: 1
			}, 8, ["modelValue", "disabled"]),
			t.value ? (p(), q("label", kv, [z("span", null, n(Y(f)("rechnungswerk", "Mitgliedergruppe")), 1), J(Y(pt), {
				modelValue: u.value,
				"onUpdate:modelValue": r[0] ||= (e) => u.value = e,
				options: i.value,
				loading: o.value,
				disabled: a.value || c.value,
				label: "displayName",
				clearable: !0
			}, null, 8, [
				"modelValue",
				"options",
				"loading",
				"disabled"
			])])) : E("", !0),
			l.value ? (p(), I(Y(it), {
				key: 1,
				type: "error",
				text: l.value
			}, null, 8, ["text"])) : E("", !0),
			z("div", Av, [J(Y(X), {
				variant: "primary",
				disabled: a.value || c.value || !d.value,
				onClick: _
			}, {
				default: F(() => [A(n(Y(f)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])
		]));
	}
}), [["__scopeId", "data-v-b1017837"]]);
function Mv(e) {
	if (typeof e != "string") return null;
	let t = e.trim().replace(/^#/, "");
	if (t.length === 3 && (t = t.split("").map((e) => e + e).join("")), !/^[0-9a-fA-F]{6}$/.test(t)) return null;
	let n = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, r = parseInt(t, 16);
	return .2126 * n(r >> 16 & 255) + .7152 * n(r >> 8 & 255) + .0722 * n(r & 255);
}
function Nv(e, t) {
	let [n, r] = e > t ? [e, t] : [t, e];
	return (n + .05) / (r + .05);
}
function Pv(e) {
	let t = Mv(e);
	return t === null ? "#000000" : Nv(t, 1) >= Nv(t, 0) ? "#ffffff" : "#000000";
}
function Fv(e) {
	let t = Mv(e);
	return t !== null && Nv(t, 1) < 4.5;
}
//#endregion
//#region src/utils/invoiceNumber.ts
function Iv(e, t, n, r, i) {
	return e.replace(/\{YYYY\}/g, String(n).padStart(4, "0")).replace(/\{YY\}/g, String(n % 100).padStart(2, "0")).replace(/\{MM\}/g, String(r).padStart(2, "0")).replace(/\{DD\}/g, String(i).padStart(2, "0")).replace(/\{(#+)\}/g, (e, n) => String(t).padStart(n.length, "0"));
}
//#endregion
//#region src/utils/fileName.ts
var Lv = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue"
};
function Rv(e, t) {
	let n = (e) => String(e).padStart(2, "0"), r = {
		"{nummer}": t.nummer,
		"{YYYY}": String(t.date.getFullYear()),
		"{MM}": n(t.date.getMonth() + 1),
		"{DD}": n(t.date.getDate()),
		"{kunde}": t.kunde.replace(/[äöüßÄÖÜ]/g, (e) => Lv[e] ?? e),
		"{typ}": t.typ
	}, i = e.replace(/\{nummer\}|\{YYYY\}|\{MM\}|\{DD\}|\{kunde\}|\{typ\}/g, (e) => r[e]);
	return i = i.replace(/[/\\:*?"<>|]/g, "-").replace(/\s+/g, " ").replace(/^[\s.]+|[\s.]+$/g, "").slice(0, 120), (i || "rechnung-1") + ".pdf";
}
//#endregion
//#region src/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
var zv = { class: "rw-view" }, Bv = { class: "rw-settings-title" }, Vv = {
	key: 0,
	class: "settings-form"
}, Hv = { class: "rw-section" }, Uv = { class: "rw-field" }, Wv = { class: "rw-field" }, Gv = { class: "rw-form-row" }, Kv = { class: "rw-field" }, qv = { class: "rw-field" }, Jv = { class: "rw-form-row" }, Yv = { class: "rw-field" }, Xv = { class: "rw-field" }, Zv = { class: "rw-field" }, Qv = { class: "rw-hint" }, $v = { class: "rw-section" }, ey = { class: "rw-form-row" }, ty = { class: "rw-field" }, ny = { class: "rw-field" }, ry = { class: "rw-field" }, iy = { class: "rw-hint" }, ay = { class: "rw-section" }, oy = { class: "rw-field rw-field--inline" }, sy = { class: "rw-accent" }, cy = ["aria-label"], ly = { class: "rw-field" }, uy = { class: "rw-accent-preview" }, dy = { class: "rw-hint" }, fy = {
	key: 0,
	class: "rw-hint"
}, py = { class: "rw-field" }, my = { class: "rw-logo" }, hy = ["src", "alt"], gy = {
	key: 1,
	class: "rw-logo__empty"
}, _y = { class: "rw-logo__actions" }, vy = { class: "rw-hint" }, yy = { class: "rw-section" }, by = { class: "rw-field" }, xy = { class: "rw-hint" }, Sy = { class: "rw-field rw-reset-mode" }, Cy = { class: "rw-hint" }, wy = { class: "rw-section" }, Ty = { class: "rw-field" }, Ey = { class: "rw-hint" }, Dy = { class: "rw-field rw-reset-mode" }, Oy = { class: "rw-hint" }, ky = { class: "rw-section" }, Ay = { class: "rw-field" }, jy = { class: "rw-hint" }, My = { class: "rw-section" }, Ny = {
	key: 0,
	class: "rw-field"
}, Py = ["placeholder"], Fy = { class: "rw-hint" }, Iy = {
	key: 1,
	class: "rw-field tax-rate-field"
}, Ly = ["value"], Ry = { class: "rw-section" }, zy = { class: "rw-field rw-field--narrow" }, By = { class: "rw-hint" }, Vy = { class: "rw-section" }, Hy = { class: "rw-field" }, Uy = { class: "rw-hint" }, Wy = { class: "rw-form-row" }, Gy = { class: "rw-field" }, Ky = { class: "rw-field" }, qy = { class: "rw-section" }, Jy = { class: "rw-field" }, Yy = { class: "rw-archive-folder" }, Xy = {
	key: 0,
	class: "rw-archive-folder__path"
}, Zy = {
	key: 1,
	class: "rw-archive-folder__empty"
}, Qy = { class: "rw-field" }, $y = ["placeholder"], eb = { class: "rw-hint" }, tb = { class: "rw-section" }, nb = { class: "rw-hint" }, rb = { class: "rw-form-row" }, ib = { class: "rw-field" }, ab = { class: "rw-field rw-field--narrow" }, ob = { class: "rw-field rw-field--narrow" }, sb = { value: "none" }, cb = { class: "rw-form-row" }, lb = { class: "rw-field" }, ub = { class: "rw-field" }, db = ["placeholder"], fb = { class: "smtp-test" }, pb = { class: "rw-section" }, mb = { class: "rw-hint" }, hb = { class: "rw-form-row" }, gb = { class: "rw-field" }, _b = { class: "rw-field rw-field--narrow" }, vb = { class: "rw-field rw-field--narrow" }, yb = { class: "rw-form-row" }, bb = { class: "rw-field" }, xb = { class: "rw-field" }, Sb = ["placeholder"], Cb = { class: "rw-section" }, wb = { class: "rw-hint" }, Tb = { class: "rw-section" }, Eb = { class: "rw-hint rw-access-intro" }, Db = { class: "rw-access-group" }, Ob = { class: "rw-access-label" }, kb = { class: "rw-hint rw-access-desc" }, Ab = { class: "rw-access-group" }, jb = { class: "rw-access-label" }, Mb = { class: "rw-hint rw-access-desc" }, Nb = { class: "rw-action-bar" }, Pb = [
	{
		path: "/",
		redirect: { name: "invoices" }
	},
	{
		path: "/invoices",
		name: "invoices",
		component: Il
	},
	{
		path: "/invoices/new",
		name: "invoice-new",
		component: sm
	},
	{
		path: "/invoices/:id",
		name: "invoice-detail",
		component: sm,
		props: !0
	},
	{
		path: "/membership-fees",
		name: "membership-fees",
		component: Oh
	},
	{
		path: "/quotes",
		name: "quotes",
		component: Zh
	},
	{
		path: "/quotes/new",
		name: "quote-new",
		component: sm
	},
	{
		path: "/quotes/:id",
		name: "quote-detail",
		component: sm,
		props: !0
	},
	{
		path: "/customers",
		name: "customers",
		component: cv
	},
	{
		path: "/products",
		name: "products",
		component: wg
	},
	{
		path: "/text-snippets",
		name: "text-snippets",
		component: c_
	},
	{
		path: "/me",
		name: "my-contact",
		component: wv
	},
	{
		path: "/settings",
		name: "settings",
		component: /* @__PURE__ */ Q(/* @__PURE__ */ r({
			__name: "SettingsView",
			setup(e) {
				let t = Je(), r = Pc(), i = N(null);
				function a() {
					t.push({ name: "text-snippets" });
				}
				let o = N(null), c = N(!1), l = N(""), u = N(null);
				async function d(e) {
					l.value = e, await oe(), u.value?.scrollIntoView({
						behavior: "smooth",
						block: "center"
					});
				}
				let m = N(!1), h = N(!1), g = N(!1), _ = N(!1), y = N(!1), b = N(0), x = N((/* @__PURE__ */ new Date()).getFullYear()), C = N((/* @__PURE__ */ new Date()).getMonth() + 1), ee = N((/* @__PURE__ */ new Date()).getDate()), te = N(null), w = N(0), T = N(null), D = U(() => i.value?.accentColor || "#2c3e50"), j = U(() => ({
					background: D.value,
					color: Pv(D.value)
				})), M = U(() => Fv(D.value));
				function P(e) {
					i.value && (i.value.accentColor = e ?? null);
				}
				let ne = N([]), re = N([]), ie = N([]), L = N(!1), R = N(!1), B = N(""), V = null, se = N(""), ce = N(""), le = N(!1), H = N(""), ue = N(!1), de = N(!1), W = U(() => i.value?.logoFileId ? jc(i.value.logoFileId) : ""), fe = U(() => L.value ? f("rechnungswerk", "Suche läuft\xA0…") : B.value.trim().length < 2 ? f("rechnungswerk", "Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.") : f("rechnungswerk", "Keine Treffer.")), pe = U(() => {
					if (!i.value) return "";
					let e = i.value.numberResetMode === "continuous" || x.value === te.value ? b.value : 0;
					return Iv(i.value.numberFormat || "RE-{YYYY}-{####}", e + 1, x.value, C.value, ee.value);
				}), me = U(() => {
					if (!i.value) return "";
					let e = i.value.quoteNumberResetMode === "continuous" || x.value === T.value ? w.value : 0;
					return Iv(i.value.quoteNumberFormat || "AN-{YYYY}-{####}", e + 1, x.value, C.value, ee.value);
				}), he = U(() => i.value ? Rv(i.value.fileNameFormat || "{nummer}", {
					nummer: pe.value,
					date: /* @__PURE__ */ new Date(),
					kunde: "Muster GmbH",
					typ: "Rechnung"
				}) : "");
				s(async () => {
					try {
						await r.fetch(), ve();
						let e = await bo();
						ne.value = ge(e.admins), re.value = ge(e.users);
					} catch (e) {
						Fe(e, f("rechnungswerk", "Laden fehlgeschlagen"));
					}
				});
				function ge(e) {
					return e.map((e) => ({
						id: e,
						type: e.startsWith("group:") ? "group" : "user",
						displayName: e.replace(/^(user|group):/, "")
					}));
				}
				function _e(e) {
					if (B.value = e, V && clearTimeout(V), e.trim().length < 2) {
						ie.value = [], L.value = !1;
						return;
					}
					L.value = !0, V = setTimeout(async () => {
						try {
							ie.value = await So(e.trim());
						} catch {
							ie.value = [];
						} finally {
							L.value = !1;
						}
					}, 300);
				}
				function ve() {
					let e = r.settings;
					e && (b.value = e.numberCounter, te.value = e.numberCounterYear, w.value = e.quoteNumberCounter, T.value = e.quoteNumberCounterYear, o.value = e.archiveFolderPath ?? null, i.value = {
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
					});
				}
				function ye(e) {
					i.value && (e ? m.value = !0 : i.value.smallBusiness = !1);
				}
				function be() {
					m.value = !1, i.value && (i.value.smallBusiness = !0);
				}
				function xe(e) {
					i.value && (e ? h.value = !0 : i.value.datevAutoSend = !1);
				}
				function Se() {
					h.value = !1, i.value && (i.value.datevAutoSend = !0);
				}
				function Ce(e) {
					i.value && (e ? g.value = !0 : i.value.archiveEnabled = !1);
				}
				function we() {
					g.value = !1, i.value && (i.value.archiveEnabled = !0);
				}
				function Te(e) {
					!i.value || e === i.value.numberResetMode || (e === "continuous" ? _.value = !0 : i.value.numberResetMode = "yearly");
				}
				function Ee() {
					_.value = !1, i.value && (i.value.numberResetMode = "continuous");
				}
				function De(e) {
					!i.value || e === i.value.quoteNumberResetMode || (e === "continuous" ? y.value = !0 : i.value.quoteNumberResetMode = "yearly");
				}
				function Oe() {
					y.value = !1, i.value && (i.value.quoteNumberResetMode = "continuous");
				}
				async function ke() {
					let e;
					try {
						e = await at(f("rechnungswerk", "Zielordner für die Ablage wählen")).setMultiSelect(!1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories(!0).addButton({
							label: f("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof st) return;
						Fe(e, f("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						c.value = !0, l.value = "";
						try {
							let t = await Mc(e);
							i.value && (i.value.archiveFolderId = t.archiveFolderId), o.value = t.archiveFolderPath;
						} catch (e) {
							Fe(e, f("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						} finally {
							c.value = !1;
						}
					}
				}
				async function Ae() {
					c.value = !0, l.value = "";
					try {
						await Nc(), i.value && (i.value.archiveFolderId = null, i.value.archiveEnabled = !1), o.value = null;
					} catch (e) {
						Fe(e, f("rechnungswerk", "Zielordner konnte nicht entfernt werden."));
					} finally {
						c.value = !1;
					}
				}
				async function je() {
					let e;
					try {
						e = await at(f("rechnungswerk", "Firmenlogo wählen")).setMultiSelect(!1).setMimeTypeFilter([
							"image/png",
							"image/jpeg",
							"image/gif"
						]).addButton({
							label: f("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof st) return;
						Fe(e, f("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						de.value = !0, l.value = "";
						try {
							let t = await kc(e);
							i.value && (i.value.logoFileId = t.logoFileId);
						} catch (e) {
							Fe(e, f("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						} finally {
							de.value = !1;
						}
					}
				}
				async function Me() {
					de.value = !0, l.value = "";
					try {
						await Ac(), i.value && (i.value.logoFileId = null);
					} catch (e) {
						Fe(e, f("rechnungswerk", "Logo konnte nicht entfernt werden."));
					} finally {
						de.value = !1;
					}
				}
				async function Ne() {
					if (!i.value) return;
					l.value = "";
					let e = (i.value.numberFormat || "").trim();
					if (i.value.numberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(e)) {
						d(f("rechnungswerk", "Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
						return;
					}
					let t = (i.value.quoteNumberFormat || "").trim();
					if (i.value.quoteNumberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(t)) {
						d(f("rechnungswerk", "Bei jährlichem Angebots-Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen."));
						return;
					}
					let n = (i.value.fileNameFormat || "").trim();
					if (n !== "" && !n.includes("{nummer}")) {
						d(f("rechnungswerk", "Das Dateinamen-Schema muss den Platzhalter {nummer} enthalten, damit Dateinamen eindeutig bleiben."));
						return;
					}
					let a = [
						{
							value: i.value.contactEmail,
							label: f("rechnungswerk", "Kontakt-E-Mail")
						},
						{
							value: i.value.smtpFromEmail,
							label: f("rechnungswerk", "Absender-E-Mail")
						},
						{
							value: i.value.datevUploadMail,
							label: f("rechnungswerk", "DATEV-Upload-Mail")
						}
					];
					for (let { value: e, label: t } of a) {
						let n = (e || "").trim();
						if (n !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)) {
							d(f("rechnungswerk", "Bitte eine gültige E-Mail-Adresse angeben ({field}).", { field: t }));
							return;
						}
					}
					R.value = !0;
					try {
						let e = { ...i.value };
						delete e.logoFileId, delete e.archiveFolderId, se.value !== "" && (e.smtpPassword = se.value), ce.value !== "" && (e.imapPassword = ce.value);
						try {
							await r.save(e);
						} catch (e) {
							Fe(e, f("rechnungswerk", "Speichern der Einstellungen fehlgeschlagen."));
							return;
						}
						try {
							await xo({
								admins: ne.value.map((e) => e.id),
								users: re.value.map((e) => e.id)
							});
						} catch (e) {
							Fe(e, f("rechnungswerk", "Einstellungen gespeichert, aber die Zugriffsrechte konnten nicht gespeichert werden. Bitte erneut speichern."));
							return;
						}
						se.value = "", ce.value = "", ve();
					} finally {
						R.value = !1;
					}
				}
				async function Pe() {
					if (i.value?.smtpHost) {
						le.value = !0, H.value = "";
						try {
							await Ec({
								host: i.value.smtpHost,
								port: i.value.smtpPort ?? 587,
								security: i.value.smtpSecurity || "starttls",
								user: i.value.smtpUser ?? "",
								password: se.value
							}), ue.value = !0, H.value = f("rechnungswerk", "Verbindung erfolgreich.");
						} catch (e) {
							ue.value = !1, H.value = e.message ?? f("rechnungswerk", "Verbindung fehlgeschlagen.");
						} finally {
							le.value = !1;
						}
					}
				}
				function Fe(e, t) {
					d(e.message ?? t), console.error("[rechnungswerk] settings:", e);
				}
				return (e, t) => (p(), q("div", zv, [
					z("h2", Bv, n(Y(f)("rechnungswerk", "Einstellungen")), 1),
					z("div", {
						ref_key: "errorAnchor",
						ref: u
					}, [l.value ? (p(), I(Y(it), {
						key: 0,
						type: "error",
						text: l.value
					}, null, 8, ["text"])) : E("", !0)], 512),
					i.value ? (p(), q("div", Vv, [
						z("section", Hv, [
							z("h3", null, n(Y(f)("rechnungswerk", "Firma")), 1),
							z("label", Uv, [z("span", null, n(Y(f)("rechnungswerk", "Firmenname")), 1), G(z("input", {
								"onUpdate:modelValue": t[0] ||= (e) => i.value.companyName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.companyName]])]),
							z("label", Wv, [z("span", null, n(Y(f)("rechnungswerk", "Adresse")), 1), G(z("textarea", {
								"onUpdate:modelValue": t[1] ||= (e) => i.value.companyAddress = e,
								class: "rw-input",
								rows: "3"
							}, null, 512), [[O, i.value.companyAddress]])]),
							z("div", Gv, [z("label", Kv, [z("span", null, n(Y(f)("rechnungswerk", "USt-IdNr.")), 1), G(z("input", {
								"onUpdate:modelValue": t[2] ||= (e) => i.value.vatId = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.vatId]])]), z("label", qv, [z("span", null, n(Y(f)("rechnungswerk", "Steuernummer")), 1), G(z("input", {
								"onUpdate:modelValue": t[3] ||= (e) => i.value.taxNumber = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.taxNumber]])])]),
							z("div", Jv, [
								z("label", Yv, [z("span", null, n(Y(f)("rechnungswerk", "Ansprechpartner")), 1), G(z("input", {
									"onUpdate:modelValue": t[4] ||= (e) => i.value.contactPerson = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[O, i.value.contactPerson]])]),
								z("label", Xv, [z("span", null, n(Y(f)("rechnungswerk", "Telefon")), 1), G(z("input", {
									"onUpdate:modelValue": t[5] ||= (e) => i.value.contactPhone = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[O, i.value.contactPhone]])]),
								z("label", Zv, [z("span", null, n(Y(f)("rechnungswerk", "Kontakt-E-Mail")), 1), G(z("input", {
									"onUpdate:modelValue": t[6] ||= (e) => i.value.contactEmail = e,
									class: "rw-input",
									type: "email"
								}, null, 512), [[O, i.value.contactEmail]])])
							]),
							z("p", Qv, n(Y(f)("rechnungswerk", "Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).")), 1)
						]),
						z("section", $v, [
							z("h3", null, n(Y(f)("rechnungswerk", "Bankverbindung")), 1),
							z("div", ey, [z("label", ty, [z("span", null, n(Y(f)("rechnungswerk", "IBAN")), 1), G(z("input", {
								"onUpdate:modelValue": t[7] ||= (e) => i.value.iban = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.iban]])]), z("label", ny, [z("span", null, n(Y(f)("rechnungswerk", "BIC")), 1), G(z("input", {
								"onUpdate:modelValue": t[8] ||= (e) => i.value.bic = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.bic]])])]),
							z("label", ry, [z("span", null, n(Y(f)("rechnungswerk", "Bankname")), 1), G(z("input", {
								"onUpdate:modelValue": t[9] ||= (e) => i.value.bankName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.bankName]])]),
							J(Y(bt), {
								type: "switch",
								modelValue: i.value.girocodeEnabled,
								disabled: !i.value.iban && !i.value.girocodeEnabled,
								"onUpdate:modelValue": t[10] ||= (e) => {
									i.value && (i.value.girocodeEnabled = e);
								}
							}, {
								default: F(() => [A(n(Y(f)("rechnungswerk", "Girocode (Bezahl-QR-Code) auf Rechnungen anzeigen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							z("p", iy, n(Y(f)("rechnungswerk", "Druckt einen EPC-QR-Code neben die Bankverbindung: Kunden scannen ihn mit der Banking-App, Empfänger, Betrag und Verwendungszweck sind vorausgefüllt. Erscheint nur auf Rechnungen mit positivem Betrag, nicht auf Stornobelegen.")), 1)
						]),
						z("section", ay, [
							z("h3", null, n(Y(f)("rechnungswerk", "Branding")), 1),
							z("div", oy, [z("span", null, n(Y(f)("rechnungswerk", "Akzentfarbe")), 1), z("div", sy, [J(Y(xt), {
								modelValue: D.value,
								advancedFields: "",
								"onUpdate:modelValue": P
							}, {
								default: F(() => [z("button", {
									type: "button",
									class: "rw-accent__trigger",
									"aria-label": Y(f)("rechnungswerk", "Akzentfarbe") + ": " + D.value.toUpperCase(),
									style: v(j.value)
								}, n(D.value.toUpperCase()), 13, cy)]),
								_: 1
							}, 8, ["modelValue"]), i.value.accentColor ? (p(), I(Y(X), {
								key: 0,
								variant: "tertiary",
								onClick: t[11] ||= (e) => i.value.accentColor = null
							}, {
								default: F(() => [A(n(Y(f)("rechnungswerk", "Zurücksetzen")), 1)]),
								_: 1
							})) : E("", !0)])]),
							z("div", ly, [
								z("table", uy, [z("thead", null, [z("tr", { style: v(j.value) }, [...t[40] ||= [
									z("th", null, "Beschreibung", -1),
									z("th", { class: "num" }, "Menge", -1),
									z("th", { class: "num" }, "Einzelpreis", -1),
									z("th", { class: "num" }, "Betrag", -1)
								]], 4)]), t[41] ||= z("tbody", null, [z("tr", null, [
									z("td", null, "Beratungsleistung"),
									z("td", { class: "num" }, "2"),
									z("td", { class: "num" }, "95,00 €"),
									z("td", { class: "num" }, "190,00 €")
								])], -1)]),
								z("p", dy, n(Y(f)("rechnungswerk", "So erscheint die Kopfzeile der Positionstabelle auf der Rechnung.")), 1),
								M.value ? (p(), q("p", fy, n(Y(f)("rechnungswerk", "Auf dieser Farbe wäre weiße Schrift zu blass, deshalb steht sie schwarz auf der Rechnung. Die Farbe selbst bleibt unverändert.")), 1)) : E("", !0)
							]),
							z("div", py, [
								z("span", null, n(Y(f)("rechnungswerk", "Firmenlogo")), 1),
								z("div", my, [i.value.logoFileId ? (p(), q("img", {
									key: 0,
									src: W.value,
									alt: Y(f)("rechnungswerk", "Firmenlogo"),
									class: "rw-logo__preview"
								}, null, 8, hy)) : (p(), q("span", gy, n(Y(f)("rechnungswerk", "Kein Logo gewählt")), 1)), z("div", _y, [J(Y(X), {
									disabled: de.value,
									onClick: je
								}, {
									default: F(() => [A(n(i.value.logoFileId ? Y(f)("rechnungswerk", "Logo ändern") : Y(f)("rechnungswerk", "Logo wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]), i.value.logoFileId ? (p(), I(Y(X), {
									key: 0,
									variant: "tertiary",
									disabled: de.value,
									onClick: Me
								}, {
									default: F(() => [A(n(Y(f)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : E("", !0)])]),
								z("p", vy, n(Y(f)("rechnungswerk", "Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.")), 1)
							])
						]),
						z("section", yy, [
							z("h3", null, n(Y(f)("rechnungswerk", "Rechnungsnummer")), 1),
							z("label", by, [z("span", null, n(Y(f)("rechnungswerk", "Format")), 1), G(z("input", {
								"onUpdate:modelValue": t[12] ||= (e) => i.value.numberFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.numberFormat]])]),
							z("p", xy, [
								A(n(Y(f)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[42] ||= z("br", null, null, -1),
								A(" " + n(Y(f)("rechnungswerk", "Vorschau: {preview}", { preview: pe.value })), 1)
							]),
							z("div", Sy, [
								z("span", null, n(Y(f)("rechnungswerk", "Nummernkreis")), 1),
								J(Y(bt), {
									type: "radio",
									name: "rw-reset-mode",
									value: "yearly",
									modelValue: i.value.numberResetMode,
									"onUpdate:modelValue": Te
								}, {
									default: F(() => [A(n(Y(f)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								J(Y(bt), {
									type: "radio",
									name: "rw-reset-mode",
									value: "continuous",
									modelValue: i.value.numberResetMode,
									"onUpdate:modelValue": Te
								}, {
									default: F(() => [A(n(Y(f)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							z("p", Cy, n(Y(f)("rechnungswerk", "Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.")), 1)
						]),
						z("section", wy, [
							z("h3", null, n(Y(f)("rechnungswerk", "Angebotsnummer")), 1),
							z("label", Ty, [z("span", null, n(Y(f)("rechnungswerk", "Format")), 1), G(z("input", {
								"onUpdate:modelValue": t[13] ||= (e) => i.value.quoteNumberFormat = e,
								class: "rw-input",
								type: "text",
								placeholder: "AN-{YYYY}-{####}"
							}, null, 512), [[O, i.value.quoteNumberFormat]])]),
							z("p", Ey, [
								A(n(Y(f)("rechnungswerk", "Eigener, von den Rechnungen unabhängiger Nummernkreis. Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[43] ||= z("br", null, null, -1),
								A(" " + n(Y(f)("rechnungswerk", "Vorschau: {preview}", { preview: me.value })), 1)
							]),
							z("div", Dy, [
								z("span", null, n(Y(f)("rechnungswerk", "Nummernkreis")), 1),
								J(Y(bt), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "yearly",
									modelValue: i.value.quoteNumberResetMode,
									"onUpdate:modelValue": De
								}, {
									default: F(() => [A(n(Y(f)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								J(Y(bt), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "continuous",
									modelValue: i.value.quoteNumberResetMode,
									"onUpdate:modelValue": De
								}, {
									default: F(() => [A(n(Y(f)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							z("p", Oy, n(Y(f)("rechnungswerk", "Angebote haben keine gesetzliche Nummernkreis-Pflicht; Lücken sind erlaubt. Bei „Jährlich zurücksetzen“ muss das Format dennoch eine Jahreskomponente enthalten.")), 1)
						]),
						z("section", ky, [
							z("h3", null, n(Y(f)("rechnungswerk", "PDF-Dateiname")), 1),
							z("label", Ay, [z("span", null, n(Y(f)("rechnungswerk", "Schema")), 1), G(z("input", {
								"onUpdate:modelValue": t[14] ||= (e) => i.value.fileNameFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.fileNameFormat]])]),
							z("p", jy, [
								A(n(Y(f)("rechnungswerk", "Gilt für Download, Kundenmail und DATEV-Mail. Platzhalter: {nummer} Rechnungsnummer, {YYYY}/{MM}/{DD} Rechnungsdatum, {kunde} Kundenname, {typ} Rechnung/Storno. {nummer} ist Pflicht.")) + " ", 1),
								t[44] ||= z("br", null, null, -1),
								A(" " + n(Y(f)("rechnungswerk", "Vorschau: {preview}", { preview: he.value })), 1)
							])
						]),
						z("section", My, [
							z("h3", null, n(Y(f)("rechnungswerk", "Steuer")), 1),
							J(Y(bt), {
								type: "switch",
								modelValue: i.value.smallBusiness,
								"onUpdate:modelValue": ye
							}, {
								default: F(() => [A(n(Y(f)("rechnungswerk", "Kleinunternehmer nach §19 UStG (kein USt-Ausweis)")), 1)]),
								_: 1
							}, 8, ["modelValue"]),
							i.value.smallBusiness ? (p(), q("label", Ny, [
								z("span", null, n(Y(f)("rechnungswerk", "Hinweistext auf der Rechnung (§ 19 UStG)")), 1),
								G(z("textarea", {
									"onUpdate:modelValue": t[15] ||= (e) => i.value.smallBusinessNote = e,
									class: "rw-input",
									rows: "2",
									placeholder: Y(Rc)
								}, null, 8, Py), [[O, i.value.smallBusinessNote]]),
								z("span", Fy, n(Y(f)("rechnungswerk", "Erscheint bei aktiviertem Kleinunternehmer-Status auf der Rechnung. Leer lassen für den Standardtext.")), 1)
							])) : E("", !0),
							i.value.smallBusiness ? E("", !0) : (p(), q("label", Iy, [z("span", null, n(Y(f)("rechnungswerk", "Standard-USt-Satz")), 1), G(z("select", {
								"onUpdate:modelValue": t[16] ||= (e) => i.value.defaultTaxRateBp = e,
								class: "rw-input"
							}, [(p(!0), q(K, null, S(Y(Lc), (e) => (p(), q("option", {
								key: e,
								value: e
							}, n(Y(el)(e)), 9, Ly))), 128))], 512), [[
								ae,
								i.value.defaultTaxRateBp,
								void 0,
								{ number: !0 }
							]])]))
						]),
						z("section", Ry, [
							z("h3", null, n(Y(f)("rechnungswerk", "Zahlung")), 1),
							z("label", zy, [z("span", null, n(Y(f)("rechnungswerk", "Standard-Zahlungsziel (Tage)")), 1), G(z("input", {
								"onUpdate:modelValue": t[17] ||= (e) => i.value.defaultPaymentTermDays = e,
								class: "rw-input",
								type: "number",
								min: "0",
								step: "1",
								placeholder: "14"
							}, null, 512), [[
								O,
								i.value.defaultPaymentTermDays,
								void 0,
								{ number: !0 }
							]])]),
							z("p", By, n(Y(f)("rechnungswerk", "Wird bei neuen Rechnungen als Zahlungsziel vorbelegt. Leer lassen für kein Standardziel.")), 1)
						]),
						z("section", Vy, [
							z("h3", null, n(Y(f)("rechnungswerk", "Versand")), 1),
							z("label", Hy, [z("span", null, n(Y(f)("rechnungswerk", "DATEV-Upload-Mail")), 1), G(z("input", {
								"onUpdate:modelValue": t[18] ||= (e) => i.value.datevUploadMail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[O, i.value.datevUploadMail]])]),
							J(Y(bt), {
								type: "switch",
								modelValue: i.value.datevAutoSend,
								disabled: !i.value.datevUploadMail,
								"onUpdate:modelValue": xe
							}, {
								default: F(() => [A(n(Y(f)("rechnungswerk", "E-Rechnung beim Festschreiben automatisch an DATEV senden")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							z("p", Uy, n(Y(f)("rechnungswerk", "Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.")), 1),
							z("div", Wy, [z("label", Gy, [z("span", null, n(Y(f)("rechnungswerk", "Absender-Name")), 1), G(z("input", {
								"onUpdate:modelValue": t[19] ||= (e) => i.value.smtpFromName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.smtpFromName]])]), z("label", Ky, [z("span", null, n(Y(f)("rechnungswerk", "Absender-E-Mail")), 1), G(z("input", {
								"onUpdate:modelValue": t[20] ||= (e) => i.value.smtpFromEmail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[O, i.value.smtpFromEmail]])])])
						]),
						z("section", qy, [
							z("h3", null, n(Y(f)("rechnungswerk", "Ablage in Nextcloud")), 1),
							z("div", Jy, [z("span", null, n(Y(f)("rechnungswerk", "Zielordner")), 1), z("div", Yy, [
								o.value ? (p(), q("span", Xy, n(o.value), 1)) : (p(), q("span", Zy, n(Y(f)("rechnungswerk", "Kein Ordner gewählt")), 1)),
								J(Y(X), {
									disabled: c.value,
									onClick: ke
								}, {
									default: F(() => [A(n(o.value ? Y(f)("rechnungswerk", "Ordner ändern") : Y(f)("rechnungswerk", "Ordner wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]),
								o.value ? (p(), I(Y(X), {
									key: 2,
									variant: "tertiary",
									disabled: c.value,
									onClick: Ae
								}, {
									default: F(() => [A(n(Y(f)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : E("", !0)
							])]),
							J(Y(bt), {
								type: "switch",
								modelValue: i.value.archiveEnabled,
								disabled: !i.value.archiveFolderId,
								"onUpdate:modelValue": Ce
							}, {
								default: F(() => [A(n(Y(f)("rechnungswerk", "ZUGFeRD-PDF beim Festschreiben automatisch im Zielordner ablegen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							z("label", Qy, [z("span", null, n(Y(f)("rechnungswerk", "Unterordner (optional)")), 1), G(z("input", {
								"onUpdate:modelValue": t[21] ||= (e) => i.value.archiveSubfolder = e,
								class: "rw-input",
								type: "text",
								placeholder: Y(f)("rechnungswerk", "z. B. {YYYY}")
							}, null, 8, $y), [[O, i.value.archiveSubfolder]])]),
							z("p", eb, [
								A(n(Y(f)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {MM} Monat, {DD} Tag (Rechnungsdatum). Unterordner werden bei Bedarf angelegt. Vorhandene Dateien werden nie überschrieben.")) + " ", 1),
								t[45] ||= z("br", null, null, -1),
								A(" " + n(Y(f)("rechnungswerk", "Komfort-Ablage für den Team-Zugriff. Kein revisionssicheres Archiv, die GoBD-Archivierung erfolgt über DATEV bzw. Steuerberater.")), 1)
							])
						]),
						z("section", tb, [
							z("h3", null, n(Y(f)("rechnungswerk", "Eigenes SMTP-Konto (optional)")), 1),
							z("p", nb, n(Y(f)("rechnungswerk", "Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).")), 1),
							z("div", rb, [
								z("label", ib, [z("span", null, n(Y(f)("rechnungswerk", "Server (Host)")), 1), G(z("input", {
									"onUpdate:modelValue": t[22] ||= (e) => i.value.smtpHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "smtp.example.com"
								}, null, 512), [[O, i.value.smtpHost]])]),
								z("label", ab, [z("span", null, n(Y(f)("rechnungswerk", "Port")), 1), G(z("input", {
									"onUpdate:modelValue": t[23] ||= (e) => i.value.smtpPort = e,
									class: "rw-input",
									type: "number",
									placeholder: "587"
								}, null, 512), [[
									O,
									i.value.smtpPort,
									void 0,
									{ number: !0 }
								]])]),
								z("label", ob, [z("span", null, n(Y(f)("rechnungswerk", "Verschlüsselung")), 1), G(z("select", {
									"onUpdate:modelValue": t[24] ||= (e) => i.value.smtpSecurity = e,
									class: "rw-input"
								}, [
									t[46] ||= z("option", { value: "starttls" }, "STARTTLS", -1),
									t[47] ||= z("option", { value: "ssl" }, "SSL/TLS", -1),
									z("option", sb, n(Y(f)("rechnungswerk", "Keine")), 1)
								], 512), [[ae, i.value.smtpSecurity]])])
							]),
							z("div", cb, [z("label", lb, [z("span", null, n(Y(f)("rechnungswerk", "Benutzer")), 1), G(z("input", {
								"onUpdate:modelValue": t[25] ||= (e) => i.value.smtpUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.smtpUser]])]), z("label", ub, [z("span", null, n(Y(f)("rechnungswerk", "Passwort")), 1), G(z("input", {
								"onUpdate:modelValue": t[26] ||= (e) => se.value = e,
								class: "rw-input",
								type: "password",
								placeholder: i.value.smtpPasswordSet ? Y(f)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, db), [[O, se.value]])])]),
							z("div", fb, [J(Y(X), {
								disabled: !i.value.smtpHost || le.value,
								onClick: Pe
							}, {
								default: F(() => [A(n(Y(f)("rechnungswerk", "Verbindung testen")), 1)]),
								_: 1
							}, 8, ["disabled"]), H.value ? (p(), q("span", {
								key: 0,
								class: k(["smtp-test__result", ue.value ? "rw-ok" : "rw-err"])
							}, n(H.value), 3)) : E("", !0)])
						]),
						z("section", pb, [
							z("h3", null, n(Y(f)("rechnungswerk", "DATEV-Rückmeldung (IMAP, optional)")), 1),
							z("p", mb, n(Y(f)("rechnungswerk", "DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.")), 1),
							z("div", hb, [
								z("label", gb, [z("span", null, n(Y(f)("rechnungswerk", "Server (Host)")), 1), G(z("input", {
									"onUpdate:modelValue": t[27] ||= (e) => i.value.imapHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "imap.example.com"
								}, null, 512), [[O, i.value.imapHost]])]),
								z("label", _b, [z("span", null, n(Y(f)("rechnungswerk", "Port")), 1), G(z("input", {
									"onUpdate:modelValue": t[28] ||= (e) => i.value.imapPort = e,
									class: "rw-input",
									type: "number",
									placeholder: "993"
								}, null, 512), [[
									O,
									i.value.imapPort,
									void 0,
									{ number: !0 }
								]])]),
								z("label", vb, [z("span", null, n(Y(f)("rechnungswerk", "Verschlüsselung")), 1), G(z("select", {
									"onUpdate:modelValue": t[29] ||= (e) => i.value.imapSecurity = e,
									class: "rw-input"
								}, [...t[48] ||= [
									z("option", { value: "ssl" }, "SSL/TLS", -1),
									z("option", { value: "starttls" }, "STARTTLS", -1),
									z("option", { value: "tls" }, "TLS", -1)
								]], 512), [[ae, i.value.imapSecurity]])])
							]),
							z("div", yb, [z("label", bb, [z("span", null, n(Y(f)("rechnungswerk", "Benutzer")), 1), G(z("input", {
								"onUpdate:modelValue": t[30] ||= (e) => i.value.imapUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[O, i.value.imapUser]])]), z("label", xb, [z("span", null, n(Y(f)("rechnungswerk", "Passwort")), 1), G(z("input", {
								"onUpdate:modelValue": t[31] ||= (e) => ce.value = e,
								class: "rw-input",
								type: "password",
								placeholder: i.value.imapPasswordSet ? Y(f)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, Sb), [[O, ce.value]])])]),
							J(Y(bt), {
								modelValue: i.value.imapCleanup,
								disabled: !i.value.imapHost,
								"onUpdate:modelValue": t[32] ||= (e) => i.value.imapCleanup = e
							}, {
								default: F(() => [A(n(Y(f)("rechnungswerk", "Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"])
						]),
						z("section", Cb, [
							z("h3", null, n(Y(f)("rechnungswerk", "Standardtexte")), 1),
							z("p", wb, n(Y(f)("rechnungswerk", "Anrede-, Einleitungs- und Schlusstexte werden jetzt als Textbausteine verwaltet – getrennt für Rechnungen und Angebote, mit mehreren Vorlagen je Textbereich.")), 1),
							J(Y(X), { onClick: a }, {
								icon: F(() => [J(Za, { size: 20 })]),
								default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Textbausteine verwalten")), 1)]),
								_: 1
							})
						]),
						J(jv),
						z("section", Tb, [
							z("h3", null, n(Y(f)("rechnungswerk", "Zugriff & Administration")), 1),
							z("p", Eb, n(Y(f)("rechnungswerk", "Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.")), 1),
							z("div", Db, [
								z("span", Ob, n(Y(f)("rechnungswerk", "App-Administratoren")), 1),
								z("p", kb, n(Y(f)("rechnungswerk", "Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.")), 1),
								J(Y(pt), {
									modelValue: ne.value,
									"onUpdate:modelValue": t[33] ||= (e) => ne.value = e,
									options: ie.value,
									loading: L.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: Y(f)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: _e
								}, {
									"no-options": F(() => [A(n(fe.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							]),
							z("div", Ab, [
								z("span", jb, n(Y(f)("rechnungswerk", "Berechtigte Nutzer")), 1),
								z("p", Mb, n(Y(f)("rechnungswerk", "Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.")), 1),
								J(Y(pt), {
									modelValue: re.value,
									"onUpdate:modelValue": t[34] ||= (e) => re.value = e,
									options: ie.value,
									loading: L.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: Y(f)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: _e
								}, {
									"no-options": F(() => [A(n(fe.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							])
						]),
						z("div", Nb, [J(Y(X), {
							variant: "primary",
							disabled: Y(r).saving || R.value,
							onClick: Ne
						}, {
							icon: F(() => [J(hv, { size: 20 })]),
							default: F(() => [A(" " + n(Y(f)("rechnungswerk", "Speichern")), 1)]),
							_: 1
						}, 8, ["disabled"])])
					])) : E("", !0),
					J(Ed, {
						open: m.value,
						name: Y(f)("rechnungswerk", "Kleinunternehmer §19 aktivieren"),
						message: Y(f)("rechnungswerk", "Damit werden künftige Rechnungen ohne Umsatzsteuer ausgewiesen (§19 UStG). Bestehende festgeschriebene Rechnungen bleiben unverändert. Fortfahren?"),
						confirmLabel: Y(f)("rechnungswerk", "Aktivieren"),
						onClose: t[35] ||= (e) => m.value = !1,
						onConfirm: be
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Ed, {
						open: h.value,
						name: Y(f)("rechnungswerk", "Automatischen DATEV-Versand aktivieren"),
						message: Y(f)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben automatisch eine E-Mail mit der E-Rechnung an die hinterlegte DATEV-Upload-Mail gesendet. Fortfahren?"),
						confirmLabel: Y(f)("rechnungswerk", "Aktivieren"),
						onClose: t[36] ||= (e) => h.value = !1,
						onConfirm: Se
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Ed, {
						open: g.value,
						name: Y(f)("rechnungswerk", "Automatische Ablage aktivieren"),
						message: Y(f)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben die ZUGFeRD-PDF automatisch im gewählten Ordner abgelegt. Alle Personen mit Zugriff auf den Ordner können die Rechnungen sehen. Fortfahren?"),
						confirmLabel: Y(f)("rechnungswerk", "Aktivieren"),
						onClose: t[37] ||= (e) => g.value = !1,
						onConfirm: we
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Ed, {
						open: _.value,
						name: Y(f)("rechnungswerk", "Nummernkreis auf „Fortlaufend“ stellen"),
						message: Y(f)("rechnungswerk", "Der Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Der Modus wirkt sich auf alle künftig festgeschriebenen Rechnungen aus. Fortfahren?"),
						confirmLabel: Y(f)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: t[38] ||= (e) => _.value = !1,
						onConfirm: Ee
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Ed, {
						open: y.value,
						name: Y(f)("rechnungswerk", "Angebots-Nummernkreis auf „Fortlaufend“ stellen"),
						message: Y(f)("rechnungswerk", "Der Angebots-Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Fortfahren?"),
						confirmLabel: Y(f)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: t[39] ||= (e) => y.value = !1,
						onConfirm: Oe
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					])
				]));
			}
		}), [["__scopeId", "data-v-d13b27ad"]])
	}
], Fb = Rr({
	history: or(),
	routes: Pb
});
//#endregion
//#region src/main.js
document.addEventListener("DOMContentLoaded", () => {
	let e = ne(wo);
	e.use(zt()), e.use(Fb), e.use(Te, { themes: { tooltip: { delay: {
		show: 100,
		hide: 0
	} } } }), e.mount(".app-rechnungswerk");
});
//#endregion
