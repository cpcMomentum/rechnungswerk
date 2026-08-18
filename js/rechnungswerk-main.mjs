import { $t as e, At as t, Cn as n, Ct as r, D as i, Dt as a, Et as o, Ft as s, Gt as c, Ht as l, It as u, Jt as d, L as f, Lt as p, Mt as m, Nt as h, Ot as g, Qt as _, Sn as v, T as y, Tt as ee, Ut as b, Vt as x, Wt as S, Xt as te, Yt as ne, Zt as C, _n as re, _t as w, an as T, at as E, bn as D, bt as O, cn as k, ct as A, dn as j, dt as M, en as N, et as ie, f as P, fn as ae, gt as F, h as I, hn as L, ht as R, i as z, in as B, it as oe, jt as se, k as ce, kt as le, ln as V, m as H, mn as ue, mt as U, on as de, ot as W, p as fe, qt as pe, r as me, rn as he, rt as ge, s as _e, sn as ve, st as ye, t as be, tn as G, ut as K, v as xe, vt as q, wt as Se, xn as Ce, xt as J, yn as Y, zt as we } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
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
	let e = he(!0), t = e.run(() => j({})), n = [], r = [], i = ve({
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
	return !n && B() && k(i), i;
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
		e[n] = Et(i) && Et(r) && Object.hasOwn(e, n) && !de(r) && !T(r) ? Kt(i, r) : r;
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
		(n.state.value[e] = i ? i() : {}), Yt(re(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = ve(U(() => {
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
		se().then(() => {
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
	let ee = (t, n = "") => {
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
				store: x,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : x, n);
			} catch (e) {
				throw Ht(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Ht(a, e), e)).catch((e) => (Ht(o, e), Promise.reject(e))) : (Ht(a, l), l);
		};
		return i[Wt] = !0, i[Gt] = n, i;
	}, b = {
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
	}, x = V(b);
	r._s.set(e, x);
	let S = (r._a && r._a.runWithContext || Ut)(() => r._e.run(() => (o = he()).run(() => t({ action: ee }))));
	for (let t in S) {
		let n = S[t];
		de(n) && !Xt(n) || T(n) ? a || (m && Jt(n) && (de(n) ? n.value = m[t] : Kt(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (S[t] = ee(n, t), s.actions[t] = n);
	}
	return Yt(x, S), Yt(L(x), S), Object.defineProperty(x, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Yt(t, e);
			});
		}
	}), r._p.forEach((e) => {
		let t = o.run(() => e({
			store: x,
			app: r._a,
			pinia: r,
			options: s
		}));
		Yt(x, t);
	}), m && a && n.hydrate && n.hydrate(x.$state, m), l = !0, u = !0, x;
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
		let n = V(Or(e)), { options: r } = g(Ke), i = U(() => ({
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
		let l = j();
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
	function ee(e) {
		return S(e);
	}
	function b(e) {
		return ee(Z(v(e), { replace: !0 }));
	}
	function x(e, t) {
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
	function S(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = x(n, i);
		if (u) return S(Z(v(u), {
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
		}), N(i, i, !0, !1)), (f ? Promise.resolve(f) : C(d, i)).catch((e) => Ue(e) ? Ue(e, 2) ? e : M(e) : A(e, d, i)).then((e) => {
			if (e) {
				if (Ue(e, 2)) return S(Z({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? Z({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = w(d, i, !0, s, a);
			return re(d, i, e), e;
		});
	}
	function te(e, t) {
		let n = y(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function ne(e) {
		let t = F.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function C(e, t) {
		let n, [r, i, s] = $n(e, t);
		n = Qn(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(Zn(r, e, t));
		});
		let c = te.bind(null, e, t);
		return n.push(c), L(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(Zn(r, e, t));
			return n.push(c), L(n);
		}).then(() => {
			n = Qn(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(Zn(r, e, t));
			});
			return n.push(c), L(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (Ie(r.beforeEnter)) for (let i of r.beforeEnter) n.push(Zn(i, e, t));
				else n.push(Zn(r.beforeEnter, e, t));
			}
			return n.push(c), L(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Qn(s, "beforeRouteEnter", e, t, ne), n.push(c), L(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(Zn(r, e, t));
			return n.push(c), L(n);
		}).catch((e) => Ue(e, 8) ? e : Promise.reject(e));
	}
	function re(e, t, n) {
		s.list().forEach((r) => ne(() => r(e, t, n)));
	}
	function w(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === Pn, l = en ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, Z({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, N(e, t, n, s), M();
	}
	let T;
	function E() {
		T ||= i.listen((e, t, n) => {
			if (!I.listening) return;
			let r = _(e), a = x(r, I.currentRoute.value);
			if (a) {
				S(Z(a, {
					replace: !0,
					force: !0
				}), r).catch(Ve);
				return;
			}
			l = r;
			let o = c.value;
			en && Un(Vn(o.fullPath, n.delta), zn()), C(r, o).catch((e) => Ue(e, 12) ? e : Ue(e, 2) ? (S(Z(v(e.to), { force: !0 }), r).then((e) => {
				Ue(e, 20) && !n.delta && n.type === "pop" && i.go(-1, !1);
			}).catch(Ve), Promise.reject()) : (n.delta && i.go(-n.delta, !1), A(e, r, o))).then((e) => {
				e ||= w(r, o, !1), e && (n.delta && !Ue(e, 8) ? i.go(-n.delta, !1) : n.type === "pop" && Ue(e, 20) && i.go(-1, !1)), re(r, o, e);
			}).catch(Ve);
		});
	}
	let D = Xn(), O = Xn(), k;
	function A(e, t, n) {
		M(e);
		let r = O.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function j() {
		return k && c.value !== Pn ? Promise.resolve() : new Promise((e, t) => {
			D.add([e, t]);
		});
	}
	function M(e) {
		return k || (k = !e, E(), D.list().forEach(([t, n]) => e ? n(e) : t()), D.reset()), e;
	}
	function N(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!en || !a) return Promise.resolve();
		let o = !r && Wn(Vn(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return se().then(() => a(t, n, o)).then((e) => t === c.value && e && Bn(e)).catch((e) => t === c.value && A(e, t, n));
	}
	let ie = (e) => i.go(e), P, F = /* @__PURE__ */ new Set(), I = {
		currentRoute: c,
		listening: !0,
		addRoute: p,
		removeRoute: m,
		clearRoutes: t.clearRoutes,
		hasRoute: g,
		getRoutes: h,
		resolve: _,
		options: e,
		push: ee,
		replace: b,
		go: ie,
		back: () => ie(-1),
		forward: () => ie(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: O.add,
		isReady: j,
		install(e) {
			e.component("RouterLink", Ar), e.component("RouterView", Lr), e.config.globalProperties.$router = I, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => Y(c)
			}), en && !P && c.value === Pn && (P = !0, ee(i.location).catch((e) => {}));
			let t = {};
			for (let e in Pn) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Ke, I), e.provide(He, ae(t)), e.provide(et, c);
			let n = e.unmount;
			F.add(e), e.unmount = function() {
				F.delete(e), F.size < 1 && (l = Pn, T && T(), T = null, c.value = Pn, P = !1, k = !1), n();
			};
		}
	};
	function L(e) {
		return e.reduce((e, t) => e.then(() => ne(t)), Promise.resolve());
	}
	return I;
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
		let r = lt(), i = j(!1), a = j(), o = U(() => a.value === "navigation" ? Hr : Vr);
		m(() => {
			let e = document.getElementById("skip-actions");
			e && (e.innerHTML = "", e.classList.add("vue-skip-actions"));
		});
		function s() {
			ke("toggle-navigation", { open: !0 }), se(() => {
				window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
			});
		}
		function c(e) {
			i.value = e, a.value ||= "navigation";
		}
		return (t, c) => (p(), q("div", {
			id: "content-vue",
			class: D(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": Y(ce) }]])
		}, [(p(), F(M, { to: "#skip-actions" }, [R("div", Ur, [
			R("div", Wr, n(Y(z)("Keyboard navigation help")), 1),
			R("div", Gr, [G(J(X, {
				href: "#app-navigation-vue",
				variant: "tertiary",
				onClick: A(s, ["prevent"]),
				onFocusin: c[0] ||= (e) => a.value = "navigation",
				onMouseover: c[1] ||= (e) => a.value = "navigation"
			}, {
				default: N(() => [O(n(Y(z)("Skip to app navigation")), 1)]),
				_: 1
			}, 512), [[W, i.value]]), J(X, {
				href: "#app-content-vue",
				variant: "tertiary",
				onFocusin: c[2] ||= (e) => a.value = "content",
				onMouseover: c[3] ||= (e) => a.value = "content"
			}, {
				default: N(() => [O(n(Y(z)("Skip to main content")), 1)]),
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
me(P);
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
		let t = d(e, "open"), n = U(() => t.value ? z("Close navigation") : z("Open navigation"));
		return (e, r) => (p(), q("div", Zr, [J(Y(X), {
			class: "app-navigation-toggle",
			"aria-controls": "app-navigation-vue",
			"aria-expanded": t.value ? "true" : "false",
			"aria-label": n.value,
			title: n.value,
			variant: "tertiary",
			onClick: r[0] ||= (e) => t.value = !t.value
		}, {
			icon: N(() => [J(qe, { path: t.value ? Y($e) : Y(Xe) }, null, 8, ["path"])]),
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
		let n = t, r, i = g(zr, () => C("NcAppNavigation is not mounted inside NcContent, this is probably an error."), !1), a = te("appNavigationContainer"), o = lt(), c = j(!o.value), d = U(() => o.value && c.value);
		e(() => {
			!n.ariaLabel && !n.ariaLabelledby && C("NcAppNavigation requires either `ariaLabel` or `ariaLabelledby` to be set for accessibility.");
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
			class: D(["app-navigation", {
				"app-navigation--closed": !c.value,
				"app-navigation--legacy": Y(ce)
			}])
		}, [R("nav", {
			id: "app-navigation-vue",
			"aria-hidden": c.value ? "false" : "true",
			"aria-label": t.ariaLabel || void 0,
			"aria-labelledby": t.ariaLabelledby || void 0,
			class: "app-navigation__content",
			inert: !c.value || void 0,
			onKeydown: ye(v, ["esc"])
		}, [
			R("div", ei, [l(e.$slots, "search", {}, void 0, !0)]),
			R("div", { class: D(["app-navigation__body", { "app-navigation__body--no-list": !e.$slots.list }]) }, [l(e.$slots, "default", {}, void 0, !0)], 2),
			e.$slots.list ? (p(), F(Xr, {
				key: 0,
				class: "app-navigation__list"
			}, {
				default: N(() => [l(e.$slots, "list", {}, void 0, !0)]),
				_: 3
			})) : w("", !0),
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
	}, [R("path", ai, [i.title ? (p(), q("title", oi, n(i.title), 1)) : w("", !0)])], 8, ii))], 16, ri);
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
	}, [R("path", fi, [i.title ? (p(), q("title", pi, n(i.title), 1)) : w("", !0)])], 8, di))], 16, ui);
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
		return { isLegacy34: ce };
	},
	data() {
		return {
			labelConfirm: z("Confirm changes"),
			labelCancel: z("Cancel changes")
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
	let o = b("IconArrowRight"), s = b("NcButton"), c = b("IconClose");
	return p(), q("div", { class: D(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": r.isLegacy34 }]) }, [R("form", {
		onSubmit: t[1] ||= A((...e) => a.confirm && a.confirm(...e), ["prevent"]),
		onKeydown: t[2] ||= ye(A((...e) => a.cancel && a.cancel(...e), [
			"exact",
			"stop",
			"prevent"
		]), ["esc"]),
		onClick: t[3] ||= A(() => {}, ["stop", "prevent"])
	}, [
		G(R("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.valueModel = e,
			type: "text",
			class: "app-navigation-input-confirm__input",
			placeholder: n.placeholder
		}, null, 8, _i), [[E, a.valueModel]]),
		J(s, {
			"aria-label": i.labelConfirm,
			type: "submit",
			variant: "primary",
			onClick: A(a.confirm, ["stop", "prevent"])
		}, {
			icon: N(() => [J(o, { size: 20 })]),
			_: 1
		}, 8, ["aria-label", "onClick"]),
		J(s, {
			"aria-label": i.labelCancel,
			type: "reset",
			variant: n.primary ? "primary" : "tertiary",
			onClick: A(a.cancel, ["stop", "prevent"])
		}, {
			icon: N(() => [J(c, { size: 20 })]),
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
	}, [R("path", wi, [i.title ? (p(), q("title", Ti, n(i.title), 1)) : w("", !0)])], 8, Ci))], 16, Si);
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
	}, [R("path", ji, [i.title ? (p(), q("title", Mi, n(i.title), 1)) : w("", !0)])], 8, Ai))], 16, ki);
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
		return { isLegacy34: ce };
	},
	computed: { labelButton() {
		return this.open ? z("Collapse menu") : z("Open menu");
	} },
	methods: { onClick(e) {
		this.$emit("click", e);
	} }
};
function Ii(e, t, n, r, i, a) {
	let o = b("ChevronUp"), s = b("ChevronDown"), c = b("NcButton");
	return p(), F(c, {
		class: D(["icon-collapse", {
			"icon-collapse--active": n.active,
			"icon-collapse--open": n.open
		}]),
		"aria-label": a.labelButton,
		variant: n.active && r.isLegacy34 ? "tertiary-on-primary" : "tertiary",
		onClick: a.onClick
	}, {
		icon: N(() => [n.open ? (p(), F(o, {
			key: 0,
			size: 20
		})) : (p(), F(s, {
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
			isLegacy34: ce
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
			return this.editLabel ? this.editLabel : z("Edit item");
		},
		undoButtonAriaLabel() {
			return z("Undo changes");
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
	let s = b("NcLoadingIcon"), u = b("NcInputConfirmCancel"), d = b("Pencil"), f = b("NcActionButton"), m = b("Undo"), h = b("NcActions"), g = b("NcAppNavigationIconCollapsible");
	return p(), q("li", {
		id: r.id,
		class: D([{
			"app-navigation-entry--opened": a.opened,
			"app-navigation-entry--pinned": r.pinned,
			"app-navigation-entry--collapsible": r.allowCollapse && !!e.$slots.default
		}, "app-navigation-entry-wrapper"])
	}, [(p(), F(c(o.isRouterLink ? "router-link" : "NcVNodes"), Ce(ee({ ...o.isRouterLink && {
		custom: !0,
		to: r.to
	} })), {
		default: N(({ href: c, navigate: _, isActive: v }) => [R("div", { class: D(["app-navigation-entry", {
			"app-navigation-entry--editing": a.editingActive,
			"app-navigation-entry--deleted": r.undo,
			"app-navigation-entry--legacy": i.isLegacy34,
			active: r.to && v || r.active
		}]) }, [
			r.undo ? w("", !0) : (p(), q("a", {
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
				onKeydown: t[3] ||= ye(A((...e) => o.handleTab && o.handleTab(...e), ["exact"]), ["tab"])
			}, [
				R("div", { class: D(["app-navigation-entry-icon", { [r.icon]: r.icon }]) }, [r.loading ? (p(), F(s, { key: 0 })) : l(e.$slots, "icon", {
					key: 1,
					active: r.active || r.to && v
				}, void 0, !0)], 2),
				R("span", { class: D(["app-navigation-entry__name", { "hidden-visually": a.editingActive }]) }, n(r.name), 3),
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
				])])) : w("", !0)
			], 40, Bi)),
			r.undo ? (p(), q("div", Hi, [R("div", Ui, n(r.name), 1)])) : w("", !0),
			(e.$slots.actions || e.$slots.counter || r.editable || r.undo) && !a.editingActive ? (p(), q("div", {
				key: 2,
				class: D(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": r.forceDisplayActions || a.menuOpenLocalValue || r.menuOpen }])
			}, [e.$slots.counter ? (p(), q("div", Wi, [l(e.$slots, "counter", {}, void 0, !0)])) : w("", !0), e.$slots.actions || r.editable && !a.editingActive || r.undo ? (p(), F(h, {
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
				icon: N(() => [l(e.$slots, "menu-icon", {}, void 0, !0)]),
				default: N(() => [
					r.editable && !a.editingActive ? (p(), F(f, {
						key: 0,
						"aria-label": o.editButtonAriaLabel,
						onClick: o.handleEdit
					}, {
						icon: N(() => [J(d, { size: 20 })]),
						default: N(() => [O(" " + n(r.editLabel), 1)]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : w("", !0),
					r.undo ? (p(), F(f, {
						key: 1,
						"aria-label": o.undoButtonAriaLabel,
						onClick: o.handleUndo
					}, {
						icon: N(() => [J(m, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : w("", !0),
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
			])) : w("", !0)], 2)) : w("", !0),
			r.allowCollapse && e.$slots.default ? (p(), F(g, {
				key: 3,
				active: r.to && v || r.active,
				open: a.opened,
				onClick: A(o.toggleCollapse, ["prevent", "stop"])
			}, null, 8, [
				"active",
				"open",
				"onClick"
			])) : w("", !0),
			l(e.$slots, "extra", {}, void 0, !0)
		], 2)]),
		_: 3
	}, 16)), o.canHaveChildren && e.$slots.default ? (p(), q("ul", Gi, [l(e.$slots, "default", {}, void 0, !0)])) : w("", !0)], 10, zi);
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
		let n = t, r = e, i = pe(), a = ne(), l = j([]), u = U(() => l.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), d = U(() => l.value.length), f = j(null), m = j(!1), g = j({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), v = j({
			splitter: null,
			timeoutId: null
		}), y = U(() => ({
			[`splitpanes splitpanes--${r.horizontal ? "horizontal" : "vertical"}`]: !0,
			"splitpanes--dragging": g.value.dragging,
			"splitpanes--ready": m.value
		})), ee = () => {
			document.addEventListener("mousemove", S, { passive: !1 }), document.addEventListener("mouseup", te), "ontouchstart" in window && (document.addEventListener("touchmove", S, { passive: !1 }), document.addEventListener("touchend", te));
		}, b = () => {
			document.removeEventListener("mousemove", S, { passive: !1 }), document.removeEventListener("mouseup", te), "ontouchstart" in window && (document.removeEventListener("touchmove", S, { passive: !1 }), document.removeEventListener("touchend", te));
		}, x = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: i } = n.getBoundingClientRect(), { clientX: a, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				g.value.cursorOffset = r.horizontal ? o - i : a - t;
			}
			ee(), g.value.mouseDown = !0, g.value.activeSplitter = t, document.documentElement.style.cursor = r.horizontal ? "row-resize" : "col-resize";
		}, S = (e) => {
			g.value.mouseDown && (e.preventDefault(), g.value.dragging || (window.getSelection()?.removeAllRanges(), g.value.dragging = !0), requestAnimationFrame(() => {
				O(E(e)), W("resize", { event: e }, !0);
			}));
		}, te = (e) => {
			g.value.dragging && (window.getSelection()?.removeAllRanges(), W("resized", { event: e }, !0)), g.value.mouseDown = !1, g.value.activeSplitter = null, setTimeout(() => {
				g.value.dragging = !1, b(), document.documentElement.style.cursor = "";
			}, 100);
		}, C = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), v.value.splitter === t ? (clearTimeout(v.value.timeoutId), v.value.timeoutId = null, re(e, t), v.value.splitter = null) : (v.value.splitter = t, v.value.timeoutId = setTimeout(() => v.value.splitter = null, 500))), g.value.dragging || W("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, re = (e, t) => {
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
		}, w = (e, t) => {
			if (!r.keyboardStep) return;
			let n = r.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", i = r.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !i) return;
			e.preventDefault(), g.value.activeSplitter = t;
			let a = (n ? 1 : -1) * (r.rtl && !r.horizontal ? -1 : 1), o = M(t) + l.value[t].size;
			k(Math.min(Math.max(o + a * r.keyboardStep, 0), 100)), W("resize", { event: e }, !0), W("resized", { event: e }, !0), g.value.activeSplitter = null;
		}, T = (e, t) => {
			let n = u.value[t];
			n && W("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, E = (e) => {
			let t = f.value.getBoundingClientRect(), { clientX: n, clientY: i } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (r.horizontal ? 0 : g.value.cursorOffset) - t.left,
				y: i - (r.horizontal ? g.value.cursorOffset : 0) - t.top
			};
		}, D = (e) => {
			e = e[r.horizontal ? "y" : "x"];
			let t = f.value[r.horizontal ? "clientHeight" : "clientWidth"];
			return r.rtl && !r.horizontal && (e = t - e), e * 100 / t;
		}, O = (e) => {
			k(D(e));
		}, k = (e) => {
			let t = g.value.activeSplitter;
			if (t === null || t >= l.value.length - 1) return;
			let n = {
				prevPanesSize: M(t),
				nextPanesSize: N(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, i = 0 + (r.pushOtherPanes ? 0 : n.prevPanesSize), a = 100 - (r.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, a), i);
			let o = [t, t + 1], s = l.value[o[0]] || null, c = l.value[o[1]] || null, u = s !== null && s.max < 100 && e >= s.max + n.prevPanesSize, d = c !== null && c.max < 100 && e <= 100 - (c.max + N(t + 1));
			if (u || d) {
				u ? (s.size = s.max, c.size = Math.min(Math.max(100 - s.max - n.prevPanesSize - n.nextPanesSize, c.min), c.max)) : (s.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - N(t + 1), s.min), s.max), c.size = c.max);
				return;
			}
			if (r.pushOtherPanes) {
				let t = A(n, e);
				if (!t) return;
				({sums: n, panesToResize: o} = t), s = l.value[o[0]] || null, c = l.value[o[1]] || null;
			}
			s !== null && (s.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, s.min), s.max)), c !== null && (c.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, c.min), c.max));
		}, A = (e, t) => {
			let n = g.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + l.value[r[0]].min) {
				if (r[0] = ie(n).index, e.prevReachedMinPanes = 0, r[0] < n && l.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, l.value[0].size = l.value[0].min, l.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), l.value[r[1]].size = 100 - e.prevReachedMinPanes - l.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = M(r[0]);
			}
			return t > 100 - e.nextPanesSize - l.value[r[1]].min && (r[1] = P(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && l.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : N(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, l.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (l.value[r[0]].size = 100 - e.prevPanesSize - N(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, M = (e) => l.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), N = (e) => l.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), ie = (e) => [...l.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, P = (e) => l.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, ae = () => {
			let e = Array.from(f.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, I = (e, t, n = !1) => {
			let i = e - 1, a = document.createElement("div");
			a.classList.add("splitpanes__splitter"), n || (a.onmousedown = (e) => x(e, i), typeof window < "u" && "ontouchstart" in window && (a.ontouchstart = (e) => x(e, i)), a.onclick = (e) => C(e, i + 1), r.keyboardStep && (a.setAttribute("tabindex", "0"), a.setAttribute("role", "separator"), a.setAttribute("aria-orientation", r.horizontal ? "horizontal" : "vertical"), a.onkeydown = (e) => w(e, i))), a.ondblclick = (e) => re(e, i + 1), t.parentNode.insertBefore(a, t);
		}, L = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, R = () => {
			let e = Array.from(f.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && L(t);
			let t = 0;
			for (let n of e) n.className.includes("splitpanes__pane") && (!t && r.firstSplitter ? I(t, n, !0) : t && I(t, n), t++);
		}, z = ({ uid: e, ...t }) => {
			let n = u.value[e];
			for (let [e, r] of Object.entries(t)) n[e] = r;
		}, B = !1, oe = (e) => {
			let t = -1;
			Array.from(f.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), l.value.splice(t, 0, {
				...e,
				index: t
			}), l.value.forEach((e, t) => e.index = t), m.value && !B && (B = !0, se(() => {
				R(), le({ addedPane: l.value[t] }), W("pane-add", { pane: l.value[t] }), B = !1;
			}));
		}, ce = (e) => {
			let t = l.value.findIndex((t) => t.id === e);
			l.value[t].el = null;
			let n = l.value.splice(t, 1)[0];
			l.value.forEach((e, t) => e.index = t), se(() => {
				R(), W("pane-remove", { pane: n }), le({ removedPane: {
					...n,
					index: t
				} });
			});
		}, le = (e = {}) => {
			!e.addedPane && !e.removedPane ? H() : l.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? ue(e) : V(), m.value && W("resized");
		}, V = () => {
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
		_(() => r.firstSplitter, () => R()), _(() => r.horizontal, (e) => se(() => {
			n("direction-changed", {
				horizontal: e,
				panes: l.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), s(() => {
			ae(), R(), le(), W("ready"), m.value = !0;
		}), h(() => m.value = !1);
		let fe = () => {
			let { class: e, ...t } = i;
			return o("div", {
				ref: f,
				class: [y.value, e],
				...t
			}, a.default?.());
		};
		return we("panes", l), we("indexedPanes", u), we("horizontal", U(() => r.horizontal)), we("requestUpdate", z), we("onPaneAdd", oe), we("onPaneRemove", ce), we("onPaneClick", T), (e, t) => (p(), F(c(fe)));
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
		let t = e, n = g("requestUpdate"), r = g("onPaneAdd"), i = g("horizontal"), a = g("onPaneRemove"), o = g("onPaneClick"), c = Se()?.uid, u = g("indexedPanes"), d = U(() => u.value[c]), f = j(null), m = U(() => {
			let e = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
			return Math.max(Math.min(e, ee.value), y.value);
		}), y = U(() => {
			let e = parseFloat(t.minSize);
			return isNaN(e) ? 0 : e;
		}), ee = U(() => {
			let e = parseFloat(t.maxSize);
			return isNaN(e) ? 100 : e;
		}), b = U(() => {
			let e = d.value?.size ?? (t.size === void 0 ? void 0 : m.value);
			return e === void 0 ? "" : `${i.value ? "height" : "width"}: ${e}%`;
		});
		return _(() => m.value, (e) => n({
			uid: c,
			size: e
		})), _(() => y.value, (e) => n({
			uid: c,
			min: e
		})), _(() => ee.value, (e) => n({
			uid: c,
			max: e
		})), s(() => {
			r({
				id: c,
				el: f.value,
				min: y.value,
				max: ee.value,
				givenSize: t.size === void 0 ? null : m.value,
				size: m.value
			});
		}), h(() => a(c)), (e, t) => (p(), q("div", {
			ref_key: "paneEl",
			ref: f,
			class: "splitpanes__pane",
			onClick: t[0] ||= (t) => Y(o)(t, e._.uid),
			style: v(b.value)
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
me(I);
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
		return (e, n) => (p(), F(Y(X), {
			"aria-label": Y(z)("Go back to the list"),
			class: D(["app-details-toggle", { "app-details-toggle--mobile": Y(t) }]),
			title: Y(z)("Go back to the list"),
			variant: "tertiary"
		}, {
			icon: N(() => [J(Y(qe), {
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
	let s = b("NcAppContentDetailsToggle"), c = b("Pane"), u = b("Splitpanes");
	return p(), q("main", {
		id: "app-content-vue",
		class: D(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
	}, [
		r.pageHeading ? (p(), q("h1", aa, n(r.pageHeading), 1)) : w("", !0),
		e.$slots.list ? (p(), q(K, { key: 1 }, [i.isMobile || r.layout === "no-split" ? (p(), q("div", {
			key: 0,
			class: D(["app-content-wrapper app-content-wrapper--no-split", {
				"app-content-wrapper--show-details": r.showDetails,
				"app-content-wrapper--show-list": !r.showDetails,
				"app-content-wrapper--mobile": i.isMobile
			}])
		}, [
			r.showDetails ? (p(), F(s, {
				key: 0,
				onClick: A(o.hideDetails, ["stop", "prevent"])
			}, null, 8, ["onClick"])) : w("", !0),
			G(R("div", oa, [l(e.$slots, "list", {}, void 0, !0)], 512), [[W, !r.showDetails]]),
			r.showDetails ? l(e.$slots, "default", { key: 1 }, void 0, !0) : w("", !0)
		], 2)) : r.layout === "vertical-split" || r.layout === "horizontal-split" ? (p(), q("div", sa, [J(u, {
			horizontal: r.layout === "horizontal-split",
			class: D(["default-theme", {
				"splitpanes--horizontal": r.layout === "horizontal-split",
				"splitpanes--vertical": r.layout === "vertical-split"
			}]),
			rtl: i.isRtl,
			onResized: o.handlePaneResize
		}, {
			default: N(() => [J(c, {
				class: "splitpanes__pane-list",
				size: a.listPaneSize || o.paneDefaults.list.size,
				minSize: o.paneDefaults.list.min,
				maxSize: o.paneDefaults.list.max
			}, {
				default: N(() => [l(e.$slots, "list", {}, void 0, !0)]),
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
				default: N(() => [l(e.$slots, "default", {}, void 0, !0)]),
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
		])])) : w("", !0)], 64)) : w("", !0),
		e.$slots.list ? w("", !0) : l(e.$slots, "default", { key: 2 }, void 0, !0)
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
	}, [R("path", pa, [i.title ? (p(), q("title", ma, n(i.title), 1)) : w("", !0)])], 8, fa))], 16, da);
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
	}, [R("path", ba, [i.title ? (p(), q("title", xa, n(i.title), 1)) : w("", !0)])], 8, ya))], 16, va);
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
	}, [R("path", Da, [i.title ? (p(), q("title", Oa, n(i.title), 1)) : w("", !0)])], 8, Ea))], 16, Ta);
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
	}, [R("path", Pa, [i.title ? (p(), q("title", Fa, n(i.title), 1)) : w("", !0)])], 8, Na))], 16, Ma);
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
	}, [R("path", Va, [i.title ? (p(), q("title", Ha, n(i.title), 1)) : w("", !0)])], 8, Ba))], 16, za);
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
	}, [R("path", Ja, [i.title ? (p(), q("title", Ya, n(i.title), 1)) : w("", !0)])], 8, qa))], 16, Ka);
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
	}, [R("path", to, [i.title ? (p(), q("title", no, n(i.title), 1)) : w("", !0)])], 8, eo))], 16, $a);
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
	}, [R("path", co, [i.title ? (p(), q("title", lo, n(i.title), 1)) : w("", !0)])], 8, so))], 16, oo);
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
async function ho(e) {
	try {
		let { data: t } = await ht.get(po(e));
		return t;
	} catch (e) {
		throw mo(e);
	}
}
async function $(e, t) {
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
var yo = () => ho("/permission-info"), bo = () => ho("/permissions"), xo = (e) => _o("/permissions", e), So = (e) => ho(`/principals/search?query=${encodeURIComponent(e)}`), Co = $t("permissions", () => {
	let e = j(null), t = j(!1);
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
			let a = b("router-view");
			return p(), F(Y(Kr), { appName: "rechnungswerk" }, {
				default: N(() => [Y(t).loaded ? n.value ? (p(), q(K, { key: 2 }, [J(Y(ti), null, {
					footer: N(() => [J(Y(qi), {
						name: Y(f)("rechnungswerk", "Mein Kontakt"),
						to: { name: "my-contact" }
					}, {
						icon: N(() => [J(La, { size: 20 })]),
						_: 1
					}, 8, ["name"]), r.value ? (p(), F(Y(qi), {
						key: 0,
						name: Y(f)("rechnungswerk", "Einstellungen"),
						to: { name: "settings" }
					}, {
						icon: N(() => [J(io, { size: 20 })]),
						_: 1
					}, 8, ["name"])) : w("", !0)]),
					default: N(() => [
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Rechnungen"),
							to: { name: "invoices" }
						}, {
							icon: N(() => [J(ga, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Angebote"),
							to: { name: "quotes" }
						}, {
							icon: N(() => [J(Ca, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Kunden"),
							to: { name: "customers" }
						}, {
							icon: N(() => [J(Aa, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Produkte"),
							to: { name: "products" }
						}, {
							icon: N(() => [J(Wa, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						J(Y(qi), {
							name: Y(f)("rechnungswerk", "Textbausteine"),
							to: { name: "text-snippets" }
						}, {
							icon: N(() => [J(Za, { size: 20 })]),
							_: 1
						}, 8, ["name"])
					]),
					_: 1
				}), J(Y(la), null, {
					default: N(() => [J(a)]),
					_: 1
				})], 64)) : (p(), F(Y(la), { key: 1 }, {
					default: N(() => [J(Y(mt), {
						name: Y(f)("rechnungswerk", "Kein Zugriff"),
						description: Y(f)("rechnungswerk", "Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.")
					}, {
						icon: N(() => [J(fo, { size: 20 })]),
						_: 1
					}, 8, ["name", "description"])]),
					_: 1
				})) : (p(), F(Y(la), { key: 0 }, {
					default: N(() => [J(Y(yt), {
						class: "rw-app-loading",
						size: 44
					})]),
					_: 1
				}))]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-98075d39"]]), To = {
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
	}, [R("path", Oo, [i.title ? (p(), q("title", ko, n(i.title), 1)) : w("", !0)])], 8, Do))], 16, Eo);
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
			trigger: N(() => [J(jo, {
				class: "info-icon",
				size: 14,
				tabindex: "0"
			})]),
			default: N(() => [R("div", No, [l(e.$slots, "default", {}, void 0, !0)])]),
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
	}, [R("path", Ro, [i.title ? (p(), q("title", zo, n(i.title), 1)) : w("", !0)])], 8, Lo))], 16, Io);
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
	}, [R("path", Go, [i.title ? (p(), q("title", Ko, n(i.title), 1)) : w("", !0)])], 8, Wo))], 16, Uo);
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
	}, [R("path", Qo, [i.title ? (p(), q("title", $o, n(i.title), 1)) : w("", !0)])], 8, Zo))], 16, Xo);
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
	}, [R("path", as, [i.title ? (p(), q("title", os, n(i.title), 1)) : w("", !0)])], 8, is))], 16, rs);
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
	}, [R("path", fs, [i.title ? (p(), q("title", ps, n(i.title), 1)) : w("", !0)])], 8, ds))], 16, us);
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
	}, [R("path", ys, [i.title ? (p(), q("title", bs, n(i.title), 1)) : w("", !0)])], 8, vs))], 16, _s);
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
	}, [R("path", Es, [i.title ? (p(), q("title", Ds, n(i.title), 1)) : w("", !0)])], 8, Ts))], 16, ws);
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
	}, [R("path", Ns, [i.title ? (p(), q("title", Ps, n(i.title), 1)) : w("", !0)])], 8, Ms))], 16, js);
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
	}, [R("path", Bs, [i.title ? (p(), q("title", Vs, n(i.title), 1)) : w("", !0)])], 8, zs))], 16, Rs);
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
	}, [R("path", qs, [i.title ? (p(), q("title", Js, n(i.title), 1)) : w("", !0)])], 8, Ks))], 16, Gs);
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
	}, [R("path", ec, [i.title ? (p(), q("title", tc, n(i.title), 1)) : w("", !0)])], 8, $s))], 16, Qs);
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
	}, [R("path", sc, [i.title ? (p(), q("title", cc, n(i.title), 1)) : w("", !0)])], 8, oc))], 16, ac);
}
var uc = /*#__PURE__*/ Q(ic, [["render", lc]]), dc = () => ho("/invoices"), fc = (e) => ho(`/invoices/${e}`), pc = (e) => $("/invoices", { data: e }), mc = (e, t) => go(`/invoices/${e}`, { data: t }), hc = (e) => vo(`/invoices/${e}`), gc = (e) => $(`/invoices/${e}/commit`, {}), _c = (e) => $(`/invoices/${e}/cancel`, {}), vc = (e) => $(`/invoices/${e}/duplicate`, {}), yc = (e, t) => $(`/invoices/${e}/pay`, t ? { date: t } : {}), bc = (e) => $(`/invoices/${e}/unpay`, {}), xc = (e) => po(`/invoices/${e}/pdf`), Sc = (e) => po(`/invoices/${e}/preview`) + "?t=" + Date.now(), Cc = (e) => {
	let t = document.createElement("a");
	t.href = xc(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, wc = (e, t) => $(`/invoices/${e}/send`, t), Tc = $t("invoice", () => {
	let e = j([]), t = j(!1);
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
}), Ec = (e) => $("/smtp/test", e), Dc = () => ho("/settings"), Oc = (e) => _o("/settings", { data: e }), kc = (e) => _o("/settings/logo", { path: e }), Ac = () => vo("/settings/logo"), jc = (e) => `${po("/settings/logo")}?v=${e}`, Mc = (e) => _o("/settings/archive-folder", { path: e }), Nc = () => vo("/settings/archive-folder"), Pc = $t("settings", () => {
	let e = j(null), t = j(!1), n = j(!1);
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
		let t = Je(), r = Tc(), i = Pc(), a = j(""), o = U(() => !!i.settings?.imapHost), l = U(() => r.invoices.some((e) => !!e.datevStatus)), u = U(() => o.value || l.value), d = [
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
		], m = j("all"), h = (e) => e.paymentStatus === "unpaid" || e.paymentStatus === "overdue", g = U(() => {
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
		function ee(e) {
			let t = y(e);
			t.setHours(0, 0, 0, 0);
			let n = /* @__PURE__ */ new Date();
			return n.setHours(0, 0, 0, 0), Math.round((t.getTime() - n.getTime()) / Fl);
		}
		function b(e) {
			return e ? y(e).toLocaleDateString(void 0, {
				day: "numeric",
				month: "numeric"
			}) : "";
		}
		let te = (e) => e.paymentStatus === "overdue" ? "rw-amt-overdue" : e.paymentStatus === "paid" ? "rw-amt-paid" : "";
		function ne(e) {
			if (e.paymentStatus === "paid") return e.paidAt ? f("rechnungswerk", "bezahlt am {date}", { date: b(e.paidAt) }) : f("rechnungswerk", "bezahlt");
			if (!e.dueDate) return "";
			let t = ee(e.dueDate);
			if (e.paymentStatus === "overdue") {
				let e = -t;
				return e === 1 ? f("rechnungswerk", "1 Tag überfällig") : f("rechnungswerk", "{days} Tage überfällig", { days: String(e) });
			}
			return e.paymentStatus === "unpaid" ? t <= 0 ? f("rechnungswerk", "fällig heute") : t === 1 ? f("rechnungswerk", "fällig morgen ({date})", { date: b(e.dueDate) }) : f("rechnungswerk", "fällig in {days} Tagen ({date})", {
				days: String(t),
				date: b(e.dueDate)
			}) : "";
		}
		let C = (e) => e.paymentStatus === "paid" ? f("rechnungswerk", "Als unbezahlt markieren") : f("rechnungswerk", "Als bezahlt markieren");
		function re(e) {
			return e.paymentStatus === "paid" ? e.paidAt ? f("rechnungswerk", "Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen", { date: b(e.paidAt) }) : f("rechnungswerk", "Bezahlt – klicken, um die Zahlung zurückzunehmen") : f("rechnungswerk", "Als bezahlt markieren");
		}
		async function T(e) {
			a.value = "";
			try {
				e.paymentStatus === "paid" ? await r.markUnpaid(e.id) : await r.markPaid(e.id);
			} catch (e) {
				a.value = e.message ?? f("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		let k = j(null), M = j("");
		function ie(e) {
			let t = e ? y(e) : /* @__PURE__ */ new Date(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
			return `${t.getFullYear()}-${n}-${r}`;
		}
		function P(e) {
			a.value = "", M.value = ie(e.paidAt), k.value = e.id;
		}
		function ae() {
			k.value = null;
		}
		async function I(e) {
			if (!M.value) {
				ae();
				return;
			}
			a.value = "";
			try {
				await r.markPaid(e.id, M.value), k.value = null;
			} catch (e) {
				a.value = e.message ?? f("rechnungswerk", "Zahldatum konnte nicht geändert werden");
			}
		}
		let L = {
			draft: cs,
			committed: fo,
			cancelled: hs
		}, z = {
			pending: ks,
			confirmed: Ss,
			unknown: Is,
			failed: hs
		}, B = (e) => L[e] ?? ga, oe = (e) => e ? z[e] ?? null : null, se = {
			pending: f("rechnungswerk", "An DATEV gesendet – Bestätigung ausstehend"),
			confirmed: f("rechnungswerk", "Von DATEV bestätigt (Beleg angenommen)"),
			unknown: f("rechnungswerk", "DATEV-Antwort prüfen"),
			failed: f("rechnungswerk", "Von DATEV abgelehnt")
		}, ce = (e) => se[e] ?? "", le = (e) => f("rechnungswerk", Vc[e] ?? e), V = (e) => f("rechnungswerk", Hc[e] ?? e), H = (e) => e.relatedNumber ? f("rechnungswerk", "{type} zu Rechnung {number}", {
			type: V(e.invoiceType),
			number: e.relatedNumber
		}) : V(e.invoiceType);
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
			let i = S("tooltip");
			return p(), q("div", tl, [
				R("div", nl, [R("h2", null, n(Y(f)("rechnungswerk", "Rechnungen")), 1), J(Y(X), {
					variant: "primary",
					onClick: de
				}, {
					icon: N(() => [J(Vo, { size: 20 })]),
					default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Neue Rechnung")), 1)]),
					_: 1
				})]),
				a.value ? (p(), F(Y(it), {
					key: 0,
					type: "error",
					text: a.value
				}, null, 8, ["text"])) : w("", !0),
				!Y(r).loading && Y(r).invoices.length === 0 ? (p(), F(Y(mt), {
					key: 1,
					name: Y(f)("rechnungswerk", "Noch keine Rechnungen"),
					description: Y(f)("rechnungswerk", "Lege deine erste Rechnung an.")
				}, {
					icon: N(() => [J(ga, { size: 20 })]),
					_: 1
				}, 8, ["name", "description"])) : Y(r).invoices.length > 0 ? (p(), q("div", rl, [R("div", il, [(p(), q(K, null, x(d, (e) => R("button", {
					key: e.key,
					class: D(["rw-chip", {
						"rw-chip--active": m.value === e.key,
						"rw-chip--overdue": e.key === "overdue"
					}]),
					onClick: (t) => m.value = e.key
				}, [O(n(Y(f)("rechnungswerk", e.label)) + " ", 1), R("span", ol, n(g.value[e.key]), 1)], 10, al)), 64)), _.value > 0 ? (p(), q("span", sl, [O(n(Y(f)("rechnungswerk", "Offen gesamt:")) + " ", 1), R("strong", null, n(Y($c)(_.value)), 1)])) : w("", !0)]), R("div", cl, [R("table", ll, [R("thead", null, [R("tr", null, [
					R("th", null, [R("span", ul, [O(n(Y(f)("rechnungswerk", "Status")) + " ", 1), J(Po, null, {
						default: N(() => [R("div", dl, [
							R("p", fl, n(Y(f)("rechnungswerk", "Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.")), 1),
							R("div", pl, [
								R("span", ml, n(Y(f)("rechnungswerk", "Rechnung")), 1),
								R("span", hl, [J(fo, {
									size: 16,
									class: "rw-sicon rw-sicon--committed"
								}), O(" " + n(Y(f)("rechnungswerk", "Festgeschrieben")), 1)]),
								R("span", gl, [J(cs, {
									size: 16,
									class: "rw-sicon rw-sicon--draft"
								}), O(" " + n(Y(f)("rechnungswerk", "Entwurf")), 1)]),
								R("span", _l, [J(hs, {
									size: 16,
									class: "rw-sicon rw-sicon--cancelled"
								}), O(" " + n(Y(f)("rechnungswerk", "Storniert")), 1)])
							]),
							u.value ? (p(), q("div", vl, [
								R("span", yl, n(Y(f)("rechnungswerk", "DATEV-Übergabe")), 1),
								R("span", bl, [J(Ss, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-confirmed"
								}), O(" " + n(Y(f)("rechnungswerk", "bestätigt")), 1)]),
								R("span", xl, [J(ks, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-pending"
								}), O(" " + n(Y(f)("rechnungswerk", "gesendet")), 1)]),
								R("span", Sl, [J(Is, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-unknown"
								}), O(" " + n(Y(f)("rechnungswerk", "Antwort prüfen")), 1)])
							])) : w("", !0)
						])]),
						_: 1
					})])]),
					R("th", null, n(Y(f)("rechnungswerk", "Nummer")), 1),
					R("th", null, n(Y(f)("rechnungswerk", "Empfänger")), 1),
					R("th", null, n(Y(f)("rechnungswerk", "Datum")), 1),
					R("th", Cl, n(Y(f)("rechnungswerk", "Brutto")), 1),
					R("th", wl, n(Y(f)("rechnungswerk", "Bezahlt")), 1),
					t[2] ||= R("th", { class: "rw-col-actions" }, null, -1)
				])]), R("tbody", null, [(p(!0), q(K, null, x(v.value, (e) => (p(), q("tr", {
					key: e.id,
					class: D(["rw-row-clickable", { "rw-row--overdue": e.paymentStatus === "overdue" }]),
					onClick: (t) => W(e.id)
				}, [
					R("td", null, [R("span", El, [(p(), F(c(B(e.status)), {
						size: 20,
						class: D(["rw-sicon", `rw-sicon--${e.status}`]),
						title: le(e.status)
					}, null, 8, ["class", "title"])), u.value && e.datevStatus && oe(e.datevStatus) ? (p(), F(c(oe(e.datevStatus)), {
						key: 0,
						size: 18,
						class: D(["rw-sicon", `rw-sicon--datev-${e.datevStatus}`]),
						title: ce(e.datevStatus)
					}, null, 8, ["class", "title"])) : w("", !0)])]),
					R("td", null, [O(n(e.number ?? Y(f)("rechnungswerk", "(Entwurf)")) + " ", 1), e.invoiceType === "invoice" ? w("", !0) : G((p(), q("span", Dl, [O(n(V(e.invoiceType)), 1)])), [[i, H(e)]])]),
					R("td", null, n(e.recipientName ?? "—"), 1),
					R("td", null, n(ue(e.issueDate ?? e.createdAt)), 1),
					R("td", Ol, [R("span", { class: D(te(e)) }, n(Y($c)(e.totalCents)), 3), k.value === e.id ? (p(), q("div", {
						key: 0,
						class: "rw-paid-edit",
						onClick: t[1] ||= A(() => {}, ["stop"])
					}, [
						G(R("input", {
							"onUpdate:modelValue": t[0] ||= (e) => M.value = e,
							type: "date",
							class: "rw-input rw-paid-input",
							"aria-label": Y(f)("rechnungswerk", "Zahldatum"),
							onKeyup: [ye((t) => I(e), ["enter"]), ye(ae, ["esc"])]
						}, null, 40, kl), [[E, M.value]]),
						J(Y(X), {
							variant: "primary",
							"aria-label": Y(f)("rechnungswerk", "Zahldatum speichern"),
							title: Y(f)("rechnungswerk", "Zahldatum speichern"),
							onClick: A((t) => I(e), ["stop"])
						}, {
							icon: N(() => [J(rc, { size: 18 })]),
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
							onClick: A(ae, ["stop"])
						}, {
							icon: N(() => [J(uc, { size: 18 })]),
							_: 1
						}, 8, ["aria-label", "title"])
					])) : e.paymentStatus === "paid" ? (p(), q("button", {
						key: 1,
						type: "button",
						class: "rw-subline rw-subline--editable",
						title: Y(f)("rechnungswerk", "Zahldatum ändern"),
						onClick: A((t) => P(e), ["stop"])
					}, n(ne(e)), 9, Al)) : ne(e) ? (p(), q("div", {
						key: 2,
						class: D(["rw-subline", { "rw-subline--overdue": e.paymentStatus === "overdue" }])
					}, n(ne(e)), 3)) : w("", !0)]),
					R("td", jl, [e.paymentStatus ? (p(), q("button", {
						key: 0,
						class: D(["rw-paybox", e.paymentStatus === "paid" ? "rw-paybox--paid" : "rw-paybox--open"]),
						"aria-label": C(e),
						title: re(e),
						onClick: A((t) => T(e), ["stop"])
					}, [(p(), F(c(e.paymentStatus === "paid" ? Xs : Us), { size: 22 }))], 10, Ml)) : w("", !0)]),
					R("td", Nl, [R("div", Pl, [e.invoiceType === "cancellation" ? w("", !0) : (p(), F(Y(X), {
						key: 0,
						variant: "tertiary",
						"aria-label": Y(f)("rechnungswerk", "Duplizieren"),
						title: Y(f)("rechnungswerk", "Als Vorlage für neue Rechnung duplizieren"),
						onClick: A((t) => pe(e.id), ["stop"])
					}, {
						icon: N(() => [J(ts, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])), e.status === "draft" ? w("", !0) : (p(), F(Y(X), {
						key: 1,
						variant: "tertiary",
						"aria-label": Y(f)("rechnungswerk", "PDF herunterladen"),
						title: Y(f)("rechnungswerk", "PDF herunterladen"),
						onClick: A((t) => fe(e.id), ["stop"])
					}, {
						icon: N(() => [J(Jo, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					]))])])
				], 10, Tl))), 128))])])])])) : w("", !0)
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
	}, [R("path", Bl, [i.title ? (p(), q("title", Vl, n(i.title), 1)) : w("", !0)])], 8, zl))], 16, Rl);
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
	}, [R("path", ql, [i.title ? (p(), q("title", Jl, n(i.title), 1)) : w("", !0)])], 8, Kl))], 16, Gl);
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
	}, [R("path", eu, [i.title ? (p(), q("title", tu, n(i.title), 1)) : w("", !0)])], 8, $l))], 16, Ql);
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
	}, [R("path", su, [i.title ? (p(), q("title", cu, n(i.title), 1)) : w("", !0)])], 8, ou))], 16, au);
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
	}, [R("path", mu, [i.title ? (p(), q("title", hu, n(i.title), 1)) : w("", !0)])], 8, pu))], 16, fu);
}
var _u = /*#__PURE__*/ Q(du, [["render", gu]]), vu = (e) => ho(`/contacts/search?q=${encodeURIComponent(e)}`), yu = () => ho("/me"), bu = { class: "contact-picker" }, xu = ["value", "placeholder"], Su = {
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
		let r = t, i = j([]), a = j(!1), o = null;
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
		}), (t, r) => (p(), q("div", bu, [R("input", {
			value: e.modelValue,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: Y(f)("rechnungswerk", "Name eingeben oder Kontakt wählen\xA0…"),
			onInput: r[0] ||= (e) => s(e.target.value),
			onFocus: r[1] ||= (e) => a.value = i.value.length > 0,
			onBlur: l
		}, null, 40, xu), a.value && i.value.length > 0 ? (p(), q("ul", Su, [(p(!0), q(K, null, x(i.value, (e, t) => (p(), q("li", {
			key: t,
			class: "contact-picker__item",
			onMousedown: A((t) => c(e), ["prevent"])
		}, [R("strong", null, n(e.name), 1), e.email ? (p(), q("span", wu, n(e.email), 1)) : w("", !0)], 40, Cu))), 128))])) : w("", !0)]));
	}
}), [["__scopeId", "data-v-23f7f625"]]), Eu = null, Du = () => (Eu === null && (Eu = ho("/countries").catch((e) => {
	throw Eu = null, e;
})), Eu), Ou = ["disabled", "title"], ku = ["value"], Au = ["value"], ju = /* @__PURE__ */ r({
	__name: "CountrySelect",
	props: /*@__PURE__*/ le({
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
		let t = d(e, "modelValue"), r = j([]), i = U(() => {
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
			class: D(e.selectClass),
			disabled: e.disabled,
			title: i.value
		}, [a.value === "" ? w("", !0) : (p(), q("option", {
			key: 0,
			value: a.value
		}, n(a.value), 9, ku)), (p(!0), q(K, null, x(r.value, (e) => (p(), q("option", {
			key: e.code,
			value: e.code
		}, n(e.label) + " (" + n(e.code) + ")", 9, Au))), 128))], 10, Ou)), [[oe, t.value]]);
	}
}), Mu = () => ho("/customers"), Nu = (e) => $("/customers", { data: e }), Pu = (e, t) => go(`/customers/${e}`, { data: t }), Fu = (e) => vo(`/customers/${e}`), Iu = $t("customer", () => {
	let e = j([]), t = j(!1);
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
		let r = t, i = Iu(), a = j(""), o = j([]), c = j(!1);
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
		return (e, t) => (p(), q("div", Lu, [R("input", {
			value: a.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: Y(f)("rechnungswerk", "Kunde suchen oder anlegen\xA0…"),
			onInput: t[0] ||= (e) => l(e.target.value),
			onFocus: t[1] ||= (e) => c.value = o.value.length > 0,
			onBlur: d
		}, null, 40, Ru), c.value && o.value.length > 0 ? (p(), q("ul", zu, [(p(!0), q(K, null, x(o.value, (e) => (p(), q("li", {
			key: e.id,
			class: "customer-picker__item",
			onMousedown: A((t) => u(e), ["prevent"])
		}, [R("strong", null, n(e.name), 1), R("span", Vu, n([
			e.customerNumber,
			[e.postalCode, e.city].filter(Boolean).join(" "),
			e.vatId
		].filter(Boolean).join(" · ")), 1)], 40, Bu))), 128))])) : w("", !0)]));
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
	props: /*@__PURE__*/ le({
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
		return (r, u) => (p(), q("div", null, [R("div", Ju, [R("table", Yu, [
			R("colgroup", null, [
				u[0] ||= R("col", null, null, -1),
				u[1] ||= R("col", { class: "rw-col-qty" }, null, -1),
				u[2] ||= R("col", { class: "rw-col-unit" }, null, -1),
				u[3] ||= R("col", { class: "rw-col-price" }, null, -1),
				u[4] ||= R("col", { class: "rw-col-tax" }, null, -1),
				u[5] ||= R("col", { class: "rw-col-sum" }, null, -1),
				e.readonly ? w("", !0) : (p(), q("col", Xu))
			]),
			R("thead", null, [R("tr", null, [
				R("th", null, n(Y(f)("rechnungswerk", "Bezeichnung")), 1),
				R("th", Zu, n(Y(f)("rechnungswerk", "Menge")), 1),
				R("th", null, n(Y(f)("rechnungswerk", "Einheit")), 1),
				R("th", Qu, n(Y(f)("rechnungswerk", "Einzelpreis (€)")), 1),
				R("th", $u, n(Y(f)("rechnungswerk", "USt")), 1),
				R("th", ed, n(Y(f)("rechnungswerk", "Summe netto")), 1),
				e.readonly ? w("", !0) : (p(), q("th", td))
			])]),
			R("tbody", null, [(p(!0), q(K, null, x(t.value, (t, r) => (p(), q(K, { key: r }, [R("tr", nd, [
				R("td", null, [G(R("input", {
					"onUpdate:modelValue": (e) => t.name = e,
					class: "rw-input",
					type: "text",
					readonly: e.readonly,
					placeholder: Y(f)("rechnungswerk", "Leistung")
				}, null, 8, rd), [[E, t.name]])]),
				R("td", id, [G(R("input", {
					"onUpdate:modelValue": (e) => t.quantity = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => a(t)
				}, null, 40, ad), [[E, t.quantity]])]),
				R("td", null, [G(R("select", {
					"onUpdate:modelValue": (e) => t.unitCode = e,
					class: "rw-input",
					disabled: e.readonly
				}, [(p(!0), q(K, null, x(Y(Fc), (e) => (p(), q("option", {
					key: e,
					value: e
				}, n(Y(f)("rechnungswerk", Y(Ic)[e])), 9, sd))), 128))], 8, od), [[oe, t.unitCode]])]),
				R("td", cd, [G(R("input", {
					"onUpdate:modelValue": (e) => t.priceInput = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => o(t)
				}, null, 40, ld), [[E, t.priceInput]])]),
				R("td", ud, [G(R("select", {
					"onUpdate:modelValue": (e) => t.taxRateBp = e,
					class: "rw-input",
					disabled: e.readonly || e.smallBusiness
				}, [(p(!0), q(K, null, x(Y(Lc), (e) => (p(), q("option", {
					key: e,
					value: e
				}, n(Y(el)(e)), 9, fd))), 128))], 8, dd), [[
					oe,
					t.taxRateBp,
					void 0,
					{ number: !0 }
				]])]),
				R("td", pd, n(Y($c)(i(t))), 1),
				e.readonly ? w("", !0) : (p(), q("td", md, [J(Y(X), {
					variant: "tertiary",
					"aria-label": Y(f)("rechnungswerk", "Position entfernen"),
					onClick: (e) => l(r)
				}, {
					icon: N(() => [J(Ul, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "onClick"])]))
			]), !e.readonly || t.description || t.unitLabel ? (p(), q("tr", hd, [R("td", { colspan: e.readonly ? 6 : 7 }, [R("div", _d, [!e.readonly || t.unitLabel ? G((p(), q("input", {
				key: 0,
				"onUpdate:modelValue": (e) => t.unitLabel = e,
				class: "rw-input rw-input--sub rw-unit-label",
				type: "text",
				maxlength: "64",
				readonly: e.readonly,
				placeholder: Y(f)("rechnungswerk", "eigene Einheit"),
				title: Y(f)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.")
			}, null, 8, vd)), [[E, t.unitLabel]]) : w("", !0), !e.readonly || t.description ? G((p(), q("input", {
				key: 1,
				"onUpdate:modelValue": (e) => t.description = e,
				class: "rw-input rw-input--sub rw-desc",
				type: "text",
				readonly: e.readonly,
				placeholder: Y(f)("rechnungswerk", "Beschreibung (optional)")
			}, null, 8, yd)), [[E, t.description]]) : w("", !0)])], 8, gd)])) : w("", !0)], 64))), 128)), t.value.length === 0 ? (p(), q("tr", bd, [R("td", {
				colspan: e.readonly ? 6 : 7,
				class: "rw-muted empty-row"
			}, n(Y(f)("rechnungswerk", "Noch keine Positionen.")), 9, xd)])) : w("", !0)])
		])]), e.readonly ? w("", !0) : (p(), q("div", Sd, [J(Y(X), { onClick: s }, {
			icon: N(() => [J(Vo, { size: 20 })]),
			default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Position hinzufügen")), 1)]),
			_: 1
		}), e.products.length > 0 ? (p(), F(Y(nt), {
			key: 0,
			menuName: Y(f)("rechnungswerk", "Aus Produkt")
		}, {
			icon: N(() => [J(Wa, { size: 20 })]),
			default: N(() => [(p(!0), q(K, null, x(e.products, (e) => (p(), F(Y(_t), {
				key: e.id,
				onClick: (t) => c(e)
			}, {
				default: N(() => [O(n(e.name), 1)]),
				_: 2
			}, 1032, ["onClick"]))), 128))]),
			_: 1
		}, 8, ["menuName"])) : w("", !0)]))]));
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
		return (t, r) => (p(), F(Y(rt), {
			open: e.open,
			name: e.name,
			"onUpdate:open": i
		}, {
			actions: N(() => [J(Y(X), {
				variant: "secondary",
				onClick: r[0] ||= (e) => t.$emit("close")
			}, {
				default: N(() => [O(n(e.cancelLabel || Y(f)("rechnungswerk", "Abbrechen")), 1)]),
				_: 1
			}), J(Y(X), {
				variant: e.destructive ? "error" : "primary",
				onClick: r[1] ||= (e) => t.$emit("confirm")
			}, {
				default: N(() => [O(n(e.confirmLabel || Y(f)("rechnungswerk", "Bestätigen")), 1)]),
				_: 1
			}, 8, ["variant"])]),
			default: N(() => [R("div", wd, [R("p", Td, n(e.message), 1)])]),
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
		let r = e, i = U(() => r.kind === "quote"), a = U(() => i.value ? f("rechnungswerk", "Angebot an Kunde senden") : f("rechnungswerk", "Rechnung an Kunde senden")), o = U(() => i.value ? f("rechnungswerk", "Das Angebot wird als PDF angehängt.") : f("rechnungswerk", "Die E-Rechnung wird als ZUGFeRD-PDF angehängt.")), s = t, c = j(null), l = V({
			to: "",
			subject: "",
			body: ""
		}), u = U(() => /\S+@\S+\.\S+/.test(l.to.trim()) && l.subject.trim() !== "");
		_(() => r.open, (e) => {
			if (!e) return;
			let t = r.invoice;
			l.to = t?.recipientEmail ?? "", i.value ? l.subject = t?.number ? f("rechnungswerk", "Angebot {number}", { number: t.number }) : f("rechnungswerk", "Ihr Angebot") : l.subject = t?.number ? f("rechnungswerk", "Rechnung {number}", { number: t.number }) : f("rechnungswerk", "Ihre Rechnung"), l.body = r.defaultBody, se(() => c.value?.focus());
		}, { immediate: !0 });
		function d() {
			u.value && s("send", {
				to: l.to.trim(),
				subject: l.subject.trim(),
				body: l.body
			});
		}
		return (t, r) => e.open ? (p(), F(Y(ot), {
			key: 0,
			name: a.value,
			onKeydown: r[4] ||= ye((e) => Y(Dd)(e, () => t.$emit("close")), ["esc"]),
			onClose: r[5] ||= (e) => t.$emit("close")
		}, {
			default: N(() => [R("div", Od, [
				R("h2", null, n(a.value), 1),
				R("p", kd, n(o.value), 1),
				R("label", Ad, [R("span", null, n(Y(f)("rechnungswerk", "Empfänger-E-Mail")) + " *", 1), G(R("input", {
					ref_key: "toInput",
					ref: c,
					"onUpdate:modelValue": r[0] ||= (e) => l.to = e,
					class: "input",
					type: "email"
				}, null, 512), [[E, l.to]])]),
				R("label", jd, [R("span", null, n(Y(f)("rechnungswerk", "Betreff")) + " *", 1), G(R("input", {
					"onUpdate:modelValue": r[1] ||= (e) => l.subject = e,
					class: "input",
					type: "text"
				}, null, 512), [[E, l.subject]])]),
				R("label", Md, [R("span", null, n(Y(f)("rechnungswerk", "Nachricht")), 1), G(R("textarea", {
					"onUpdate:modelValue": r[2] ||= (e) => l.body = e,
					class: "input",
					rows: "6"
				}, null, 512), [[E, l.body]])]),
				R("div", Nd, [J(Y(X), { onClick: r[3] ||= (e) => t.$emit("close") }, {
					default: N(() => [O(n(Y(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(Y(X), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					icon: N(() => [J(Xl, { size: 20 })]),
					default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Senden")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : w("", !0);
	}
}), [["__scopeId", "data-v-2f5a808a"]]), Fd = () => ho("/quotes"), Id = (e) => ho(`/quotes/${e}`), Ld = (e) => $("/quotes", { data: e }), Rd = (e, t) => go(`/quotes/${e}`, { data: t }), zd = (e) => vo(`/quotes/${e}`), Bd = (e) => $(`/quotes/${e}/commit`, {}), Vd = (e) => $(`/quotes/${e}/accept`, {}), Hd = (e) => $(`/quotes/${e}/reject`, {}), Ud = (e) => $(`/quotes/${e}/convert`, {}), Wd = (e) => $(`/quotes/${e}/revise`, {}), Gd = (e) => po(`/quotes/${e}/pdf`), Kd = (e) => po(`/quotes/${e}/preview`) + "?t=" + Date.now(), qd = (e) => {
	let t = document.createElement("a");
	t.href = Gd(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Jd = (e, t) => $(`/quotes/${e}/send`, t), Yd = $t("quote", () => {
	let e = j([]), t = j(!1);
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
}), Xd = () => ho("/products"), Zd = (e) => $("/products", { data: e }), Qd = (e, t) => go(`/products/${e}`, { data: t }), $d = (e) => vo(`/products/${e}`), ef = $t("product", () => {
	let e = j([]), t = j(!1);
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
}), tf = () => ho("/text-snippets"), nf = (e) => $("/text-snippets", { data: e }), rf = (e, t) => go(`/text-snippets/${e}`, { data: t }), af = (e) => vo(`/text-snippets/${e}`);
//#endregion
//#region src/stores/textSnippetStore.ts
function of(e) {
	e.sort((e, t) => e.docType.localeCompare(t.docType) || e.slot.localeCompare(t.slot) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
}
var sf = $t("textSnippet", () => {
	let e = j([]), t = j(!1), n = j(!1);
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
}), cf = () => ho("/me/contact"), lf = (e) => _o("/me/contact", { data: e }), uf = { class: "rw-view" }, df = { class: "rw-editor-head" }, ff = {
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
		function ee(e) {
			B.greeting = e.content ?? "";
		}
		function b(e) {
			B.extraText = e.content ?? "";
		}
		let te = U(() => m.value ? "quotes" : "invoices"), ne = U(() => m.value ? "quote-detail" : "invoice-detail"), C = j(null), re = j([Uu()]), T = j([]), k = j(""), A = j(""), M = j(!1), ie = j(!1), P = j(!1), ae = j(!1), I = j(""), L = j(null), z = () => ({
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
		}), B = V(z()), se = [
			"reverse_charge",
			"intra_community",
			"export"
		], ce = U(() => (u.settings?.smallBusiness ?? !1) || se.includes(B.specialTaxCase)), le = U(() => {
			let e = Number.parseInt(String(B.paymentTermDays), 10);
			if (Number.isNaN(e)) return "";
			let t = (e) => /* @__PURE__ */ new Date(`${e}T12:00:00`);
			if (C.value?.dueDate) return t(C.value.dueDate).toLocaleDateString();
			let n = C.value?.issueDate ? t(C.value.issueDate) : /* @__PURE__ */ new Date();
			return n.setDate(n.getDate() + e), n.toLocaleDateString();
		}), H = U(() => C.value !== null && C.value.status !== "draft"), ue = {
			draft: cs,
			committed: fo,
			cancelled: hs
		}, de = {
			pending: ks,
			confirmed: Ss,
			unknown: Is,
			failed: hs
		}, W = (e) => ue[e] ?? cs, fe = (e) => de[e] ?? Is, pe = U(() => C.value ? m.value && C.value.quoteStatus ? f("rechnungswerk", Uc[C.value.quoteStatus] ?? C.value.status) : f("rechnungswerk", Vc[C.value.status]) : ""), me = U(() => C.value ? f("rechnungswerk", Hc[C.value.invoiceType]) : ""), he = U(() => {
			let e = {
				pending: f("rechnungswerk", "DATEV: gesendet"),
				confirmed: f("rechnungswerk", "DATEV: bestätigt"),
				failed: f("rechnungswerk", "DATEV: abgelehnt"),
				unknown: f("rechnungswerk", "DATEV: Antwort prüfen")
			}, t = C.value?.datevStatus;
			return t ? e[t] ?? "" : "";
		}), _e = U(() => C.value ? C.value.relatedNumber ? f("rechnungswerk", "{type} zu Rechnung {number}", {
			type: me.value,
			number: C.value.relatedNumber
		}) : me.value : ""), ve = U(() => {
			if (m.value) return f("rechnungswerk", "Das Angebot erhält eine endgültige Angebotsnummer und ist danach unveränderbar. Fortfahren?");
			let e = f("rechnungswerk", "Die Rechnung erhält eine endgültige Nummer und ist danach unveränderbar. Korrektur nur per Storno. Fortfahren?"), t = u.settings;
			return t?.datevAutoSend && t.datevUploadMail && (e += "\n\n" + f("rechnungswerk", "Beim Festschreiben wird automatisch eine E-Rechnung an DATEV ({mail}) gesendet.", { mail: t.datevUploadMail })), e;
		}), ye = U(() => {
			let e = (C.value?.greeting ?? d.defaultContent(g.value, "opening")).trim(), t = (C.value?.extraText ?? d.defaultContent(g.value, "closing")).trim(), n = m.value ? f("rechnungswerk", "anbei erhalten Sie unser Angebot als PDF.") : f("rechnungswerk", "anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).");
			return [e === "" ? n : e, t].filter((e) => e !== "").join("\n\n");
		}), be = U(() => C.value ? C.value.number ?? f("rechnungswerk", "Entwurf") : m.value ? f("rechnungswerk", "Neues Angebot") : f("rechnungswerk", "Neue Rechnung")), xe = U(() => qu(re.value.map((e) => ({
			taxRateBp: e.taxRateBp,
			lineTotalCents: Ku(e.quantity, Zc(e.priceInput))
		})), ce.value)), Se = 0;
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
					let n = C.value !== null && C.value.invoiceType === "quote" !== m.value;
					(C.value?.id !== Number(e) || n) && (Ce(), await Te(Number(e), t));
				}
			} catch (e) {
				$e(e, f("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function Ce() {
			C.value = null, re.value = [Uu()], T.value = [], k.value = "", A.value = "", P.value = !1, ae.value = !1, I.value = "", L.value = null, Object.assign(B, z());
		}
		async function we(e = Se) {
			let t = u.settings;
			B.greeting = d.defaultContent(g.value, "opening"), B.extraText = d.defaultContent(g.value, "closing"), B.paymentTermDays = m.value ? "" : t?.defaultPaymentTermDays ?? "";
			let n = {
				person: "",
				phone: "",
				email: ""
			};
			try {
				n = await cf();
			} catch {}
			e === Se && (B.sellerContactPerson = n.person || (t?.contactPerson ?? ""), B.sellerContactPhone = n.phone || (t?.contactPhone ?? ""), B.sellerContactEmail = n.email || (t?.contactEmail ?? ""));
		}
		async function Te(e, t = Se) {
			let n = await h.value.get(e);
			t === Se && (C.value = n, B.customerId = n.customerId ?? null, B.recipientName = n.recipientName ?? "", B.recipientEmail = n.recipientEmail ?? "", B.recipientAddress = n.recipientAddress ?? "", B.recipientPostalCode = n.recipientPostalCode ?? "", B.recipientCity = n.recipientCity ?? "", B.recipientCountry = n.recipientCountry ?? "DE", B.recipientVatId = n.recipientVatId ?? "", B.recipientContactId = n.recipientContactId ?? "", B.recipientContactPerson = n.recipientContactPerson ?? "", B.recipientPhone = n.recipientPhone ?? "", B.sellerContactPerson = n.sellerContactPerson ?? "", B.sellerContactPhone = n.sellerContactPhone ?? "", B.sellerContactEmail = n.sellerContactEmail ?? "", B.performancePeriodStart = n.performancePeriodStart ?? n.performanceDate ?? "", B.performancePeriodEnd = n.performancePeriodEnd ?? "", B.referenceNumber = n.referenceNumber ?? "", B.orderNumber = n.orderNumber ?? "", B.buyerReference = n.buyerReference ?? "", B.contractNumber = n.contractNumber ?? "", B.projectReference = n.projectReference ?? "", T.value = [...n.notes ?? []], B.specialTaxCase = n.specialTaxCase ?? "", B.greeting = n.greeting ?? "", B.extraText = n.extraText ?? "", B.paymentTermDays = n.paymentTermDays ?? "", B.discountTerms = n.discountTerms ?? "", B.validUntil = n.validUntil ?? "", B.offerFreeform = n.offerFreeform ?? !1, re.value = n.items.length > 0 ? n.items.map(Gu) : [Uu()]);
		}
		function Ee() {
			T.value.push("");
		}
		function De(e) {
			T.value.splice(e, 1);
		}
		function Oe(e) {
			B.customerId = e.id, B.recipientName = e.name, B.recipientContactId = "", B.recipientEmail = e.email ?? "", B.recipientAddress = e.address ?? "", B.recipientPostalCode = e.postalCode ?? "", B.recipientCity = e.city ?? "", B.recipientCountry = e.country ?? "DE", B.recipientVatId = e.vatId ?? "", B.recipientContactPerson = e.contactPerson ?? "", B.recipientPhone = e.phone ?? "", e.defaultPaymentTermDays != null && (B.paymentTermDays = e.defaultPaymentTermDays);
		}
		function ke(e) {
			B.customerId = null, B.recipientName = e.name, B.recipientEmail = e.email, e.phone && (B.recipientPhone = e.phone), B.recipientAddress = e.address, B.recipientPostalCode = e.postalCode, B.recipientCity = e.city, e.country && (B.recipientCountry = e.country);
		}
		function Ae() {
			let e = B.performancePeriodStart, t = B.performancePeriodEnd, n = e && t ? {
				performanceDate: "",
				performancePeriodStart: e,
				performancePeriodEnd: t
			} : {
				performanceDate: e || t || "",
				performancePeriodStart: "",
				performancePeriodEnd: ""
			}, r = {
				...B,
				...n,
				paymentTermDays: B.paymentTermDays === "" ? null : Number(B.paymentTermDays),
				notes: T.value.map((e) => e.trim()).filter((e) => e !== ""),
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
			return m.value ? (r.validUntil = B.validUntil === "" ? null : B.validUntil, r.offerFreeform = B.offerFreeform, r.paymentTermDays = null, r.discountTerms = null) : (delete r.validUntil, delete r.offerFreeform), r;
		}
		async function je() {
			k.value = "", M.value = !0;
			try {
				let e;
				return C.value ? e = await h.value.update(C.value.id, Ae()) : (e = await h.value.create(Ae()), i.replace({
					name: ne.value,
					params: { id: String(e.id) }
				})), C.value = e, e;
			} catch (e) {
				return $e(e, f("rechnungswerk", "Speichern fehlgeschlagen")), null;
			} finally {
				M.value = !1;
			}
		}
		async function Me() {
			let e = await je();
			e && (I.value = m.value ? Kd(e.id) : Sc(e.id), ae.value = !0);
		}
		function Ne(e) {
			e || (ae.value = !1, I.value = "");
		}
		function Pe() {
			L.value = "finalize";
		}
		function Fe() {
			L.value = "delete";
		}
		function Ie() {
			L.value = "cancel";
		}
		function Re() {
			L.value = "convert";
		}
		function ze() {
			L.value = "revise";
		}
		let Be = U(() => m.value && C.value?.status === "committed" && !["converted", "superseded"].includes(C.value?.quoteStatus ?? "")), Ve = U(() => m.value && C.value?.status === "committed" && [
			"open",
			"expired",
			"accepted"
		].includes(C.value?.quoteStatus ?? "")), He = U(() => m.value && C.value?.status === "committed" && ["open", "expired"].includes(C.value?.quoteStatus ?? ""));
		function Ue() {
			C.value && (m.value ? qd(C.value.id) : Cc(C.value.id));
		}
		async function We() {
			L.value = null;
			let e = await je();
			if (e) {
				M.value = !0;
				try {
					let t = await h.value.commit(e.id);
					if (C.value = t, A.value = "", m.value) A.value = f("rechnungswerk", "Angebot festgeschrieben.");
					else {
						let e = t.datevMailSent;
						e === !0 ? A.value = f("rechnungswerk", "Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.") : e === null && (k.value = f("rechnungswerk", "Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
					}
				} catch (e) {
					$e(e, f("rechnungswerk", "Festschreiben fehlgeschlagen"));
				} finally {
					M.value = !1;
				}
			}
		}
		async function Z() {
			if (C.value) {
				M.value = !0, k.value = "";
				try {
					C.value = await o.accept(C.value.id), A.value = f("rechnungswerk", "Angebot als angenommen markiert.");
				} catch (e) {
					$e(e, f("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					M.value = !1;
				}
			}
		}
		async function Ge() {
			if (C.value) {
				M.value = !0, k.value = "";
				try {
					C.value = await o.reject(C.value.id), A.value = f("rechnungswerk", "Angebot als abgelehnt markiert.");
				} catch (e) {
					$e(e, f("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					M.value = !1;
				}
			}
		}
		async function Ke() {
			if (L.value = null, C.value) {
				M.value = !0, k.value = "";
				try {
					let e = await o.convert(C.value.id);
					i.push({
						name: "invoice-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					$e(e, f("rechnungswerk", "Übernahme fehlgeschlagen"));
				} finally {
					M.value = !1;
				}
			}
		}
		async function qe() {
			if (L.value = null, C.value) {
				M.value = !0, k.value = "";
				try {
					let e = await o.revise(C.value.id);
					i.push({
						name: "quote-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					$e(e, f("rechnungswerk", "Revidieren fehlgeschlagen"));
				} finally {
					M.value = !1;
				}
			}
		}
		async function Ye(e) {
			if (C.value) {
				ie.value = !0, k.value = "";
				try {
					m.value ? (await Jd(C.value.id, e), P.value = !1, A.value = f("rechnungswerk", "Angebot an {to} gesendet.", { to: e.to })) : (await wc(C.value.id, e), P.value = !1, A.value = f("rechnungswerk", "Rechnung an {to} gesendet.", { to: e.to }));
				} catch (e) {
					$e(e, f("rechnungswerk", "Versand fehlgeschlagen"));
				} finally {
					ie.value = !1;
				}
			}
		}
		async function Xe() {
			if (L.value = null, !C.value) {
				Qe();
				return;
			}
			M.value = !0;
			try {
				await h.value.remove(C.value.id), Qe();
			} catch (e) {
				$e(e, f("rechnungswerk", "Löschen fehlgeschlagen"));
			} finally {
				M.value = !1;
			}
		}
		async function Ze() {
			if (L.value = null, C.value) {
				M.value = !0;
				try {
					let e = await a.cancel(C.value.id), t = e.datevMailSent;
					await Te(e.id), A.value = "", t === !0 ? A.value = f("rechnungswerk", "Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.") : t === null && (k.value = f("rechnungswerk", "Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
				} catch (e) {
					$e(e, f("rechnungswerk", "Stornieren fehlgeschlagen"));
				} finally {
					M.value = !1;
				}
			}
		}
		function Qe() {
			i.push({ name: te.value });
		}
		function $e(e, t) {
			k.value = e.message ?? t, console.error("[rechnungswerk] editor:", e);
		}
		return (e, t) => {
			let r = S("tooltip");
			return p(), q("div", uf, [
				R("div", df, [J(Y(vt), null, {
					default: N(() => [J(Y(gt), {
						name: m.value ? Y(f)("rechnungswerk", "Angebote") : Y(f)("rechnungswerk", "Rechnungen"),
						to: { name: te.value }
					}, null, 8, ["name", "to"]), J(Y(gt), { name: be.value }, null, 8, ["name"])]),
					_: 1
				}), C.value ? (p(), q("span", ff, [
					R("span", pf, [(p(), F(c(W(C.value.status)), {
						size: 18,
						class: D(["rw-sicon", `rw-sicon--${C.value.status}`])
					}, null, 8, ["class"])), O(" " + n(pe.value), 1)]),
					!m.value && C.value.invoiceType !== "invoice" ? G((p(), q("span", mf, [O(n(me.value), 1)])), [[r, _e.value]]) : w("", !0),
					m.value && C.value.relatedQuoteNumber ? (p(), q("span", hf, n(Y(f)("rechnungswerk", "Revision von {number}", { number: C.value.relatedQuoteNumber })), 1)) : w("", !0),
					C.value.datevStatus && he.value ? (p(), q("span", {
						key: 2,
						class: "rw-status-tag",
						title: Y(f)("rechnungswerk", "DATEV-Übergabe")
					}, [(p(), F(c(fe(C.value.datevStatus)), {
						size: 18,
						class: D(["rw-sicon", `rw-sicon--datev-${C.value.datevStatus}`])
					}, null, 8, ["class"])), O(" " + n(he.value), 1)], 8, gf)) : w("", !0)
				])) : w("", !0)]),
				k.value ? (p(), F(Y(it), {
					key: 0,
					type: "error",
					text: k.value
				}, null, 8, ["text"])) : w("", !0),
				A.value ? (p(), F(Y(it), {
					key: 1,
					type: "success",
					text: A.value
				}, null, 8, ["text"])) : w("", !0),
				H.value ? (p(), F(Y(it), {
					key: 2,
					type: "info",
					text: m.value ? Y(f)("rechnungswerk", "Dieses Angebot ist festgeschrieben und kann nicht mehr geändert werden.") : Y(f)("rechnungswerk", "Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.")
				}, null, 8, ["text"])) : w("", !0),
				!m.value && C.value?.documentBackfilled ? (p(), F(Y(it), {
					key: 3,
					type: "info",
					text: Y(f)("rechnungswerk", "Dieser Beleg wurde nicht beim Festschreiben abgelegt, sondern später aus dem Datensatz erzeugt. Beträge, Positionen und Steuerausweis stimmen; Firmendaten und Layout entsprechen dem heutigen Stand, nicht dem von damals.")
				}, null, 8, ["text"])) : w("", !0),
				R("section", _f, [
					R("h3", null, n(m.value ? Y(f)("rechnungswerk", "Angebotsdaten") : Y(f)("rechnungswerk", "Rechnungsdaten")), 1),
					R("div", vf, [
						R("label", yf, [R("span", null, n(m.value ? Y(f)("rechnungswerk", "Angebotsnummer") : Y(f)("rechnungswerk", "Rechnungsnummer")), 1), R("input", {
							class: "rw-input",
							type: "text",
							readonly: "",
							value: C.value?.number ?? Y(f)("rechnungswerk", "(wird vergeben)")
						}, null, 8, bf)]),
						R("label", xf, [R("span", null, n(m.value ? Y(f)("rechnungswerk", "Geplanter Leistungszeitraum (optional)") : Y(f)("rechnungswerk", "Leistungsdatum /-zeitraum")), 1), G(R("input", {
							"onUpdate:modelValue": t[0] ||= (e) => B.performancePeriodStart = e,
							class: "rw-input",
							type: "date",
							readonly: H.value
						}, null, 8, Sf), [[E, B.performancePeriodStart]])]),
						R("label", Cf, [R("span", null, n(Y(f)("rechnungswerk", "bis (optional)")), 1), G(R("input", {
							"onUpdate:modelValue": t[1] ||= (e) => B.performancePeriodEnd = e,
							class: "rw-input",
							type: "date",
							readonly: H.value
						}, null, 8, wf), [[E, B.performancePeriodEnd]])])
					]),
					R("p", Tf, n(m.value ? Y(f)("rechnungswerk", "Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.") : Y(f)("rechnungswerk", "Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.")), 1),
					R("details", Ef, [
						R("summary", null, n(m.value ? Y(f)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)") : Y(f)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)")), 1),
						R("div", Df, [
							R("label", Of, [R("span", null, n(Y(f)("rechnungswerk", "Referenznummer")), 1), G(R("input", {
								"onUpdate:modelValue": t[2] ||= (e) => B.referenceNumber = e,
								class: "rw-input",
								type: "text",
								readonly: H.value
							}, null, 8, kf), [[E, B.referenceNumber]])]),
							R("label", Af, [R("span", null, n(Y(f)("rechnungswerk", "Bestellnummer")), 1), G(R("input", {
								"onUpdate:modelValue": t[3] ||= (e) => B.orderNumber = e,
								class: "rw-input",
								type: "text",
								readonly: H.value
							}, null, 8, jf), [[E, B.orderNumber]])]),
							m.value ? (p(), q("span", Pf)) : (p(), q("label", Mf, [R("span", null, n(Y(f)("rechnungswerk", "Käuferreferenz / Leitweg-ID (BT-10)")), 1), G(R("input", {
								"onUpdate:modelValue": t[4] ||= (e) => B.buyerReference = e,
								class: "rw-input",
								type: "text",
								readonly: H.value,
								placeholder: Y(f)("rechnungswerk", "nur für öffentliche Auftraggeber")
							}, null, 8, Nf), [[E, B.buyerReference]])]))
						]),
						R("div", Ff, [
							R("label", If, [R("span", null, n(Y(f)("rechnungswerk", "Vertragsnummer (BT-12)")), 1), G(R("input", {
								"onUpdate:modelValue": t[5] ||= (e) => B.contractNumber = e,
								class: "rw-input",
								type: "text",
								readonly: H.value
							}, null, 8, Lf), [[E, B.contractNumber]])]),
							R("label", Rf, [R("span", null, n(Y(f)("rechnungswerk", "Objekt-/Projektkennung (BT-18)")), 1), G(R("input", {
								"onUpdate:modelValue": t[6] ||= (e) => B.projectReference = e,
								class: "rw-input",
								type: "text",
								readonly: H.value
							}, null, 8, zf), [[E, B.projectReference]])]),
							t[35] ||= R("span", {
								class: "rw-field",
								"aria-hidden": "true"
							}, null, -1)
						])
					])
				]),
				R("section", Bf, [
					R("h3", null, n(Y(f)("rechnungswerk", "Empfänger")), 1),
					H.value ? w("", !0) : (p(), q("div", Vf, [R("label", Hf, [
						R("span", null, n(Y(f)("rechnungswerk", "Kunde übernehmen")), 1),
						J(Hu, { onSelect: Oe }),
						R("span", Uf, n(Y(f)("rechnungswerk", "Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.")), 1)
					])])),
					R("div", Wf, [R("label", Gf, [R("span", null, n(Y(f)("rechnungswerk", "Name")), 1), H.value ? (p(), q("input", {
						key: 1,
						class: "rw-input",
						type: "text",
						readonly: "",
						value: B.recipientName
					}, null, 8, Kf)) : (p(), F(Tu, {
						key: 0,
						modelValue: B.recipientName,
						"onUpdate:modelValue": t[7] ||= (e) => B.recipientName = e,
						onSelect: ke
					}, null, 8, ["modelValue"]))]), R("label", qf, [R("span", null, n(Y(f)("rechnungswerk", "E-Mail")), 1), G(R("input", {
						"onUpdate:modelValue": t[8] ||= (e) => B.recipientEmail = e,
						class: "rw-input",
						type: "email",
						readonly: H.value
					}, null, 8, Jf), [[E, B.recipientEmail]])])]),
					R("div", Yf, [
						R("label", Xf, [R("span", null, n(Y(f)("rechnungswerk", "Straße")), 1), G(R("input", {
							"onUpdate:modelValue": t[9] ||= (e) => B.recipientAddress = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, Zf), [[E, B.recipientAddress]])]),
						R("label", Qf, [R("span", null, n(Y(f)("rechnungswerk", "PLZ")), 1), G(R("input", {
							"onUpdate:modelValue": t[10] ||= (e) => B.recipientPostalCode = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, $f), [[E, B.recipientPostalCode]])]),
						R("label", ep, [R("span", null, n(Y(f)("rechnungswerk", "Ort")), 1), G(R("input", {
							"onUpdate:modelValue": t[11] ||= (e) => B.recipientCity = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, tp), [[E, B.recipientCity]])]),
						R("label", np, [R("span", null, n(Y(f)("rechnungswerk", "Land")), 1), J(ju, {
							modelValue: B.recipientCountry,
							"onUpdate:modelValue": t[12] ||= (e) => B.recipientCountry = e,
							disabled: H.value
						}, null, 8, ["modelValue", "disabled"])])
					]),
					R("div", rp, [
						R("label", ip, [R("span", null, n(Y(f)("rechnungswerk", "USt-IdNr. (optional)")), 1), G(R("input", {
							"onUpdate:modelValue": t[13] ||= (e) => B.recipientVatId = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, ap), [[E, B.recipientVatId]])]),
						R("label", op, [R("span", null, n(Y(f)("rechnungswerk", "Ansprechpartner (optional)")), 1), G(R("input", {
							"onUpdate:modelValue": t[14] ||= (e) => B.recipientContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, sp), [[E, B.recipientContactPerson]])]),
						R("label", cp, [R("span", null, n(Y(f)("rechnungswerk", "Telefon (optional)")), 1), G(R("input", {
							"onUpdate:modelValue": t[15] ||= (e) => B.recipientPhone = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, lp), [[E, B.recipientPhone]])])
					])
				]),
				R("section", up, [
					R("h3", null, n(m.value ? Y(f)("rechnungswerk", "Ansprechpartner (für dieses Angebot)") : Y(f)("rechnungswerk", "Ansprechpartner (für diese Rechnung)")), 1),
					R("div", dp, [
						R("label", fp, [R("span", null, n(Y(f)("rechnungswerk", "Name")), 1), G(R("input", {
							"onUpdate:modelValue": t[16] ||= (e) => B.sellerContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, pp), [[E, B.sellerContactPerson]])]),
						R("label", mp, [R("span", null, n(Y(f)("rechnungswerk", "Telefon")), 1), G(R("input", {
							"onUpdate:modelValue": t[17] ||= (e) => B.sellerContactPhone = e,
							class: "rw-input",
							type: "text",
							readonly: H.value
						}, null, 8, hp), [[E, B.sellerContactPhone]])]),
						R("label", gp, [R("span", null, n(Y(f)("rechnungswerk", "E-Mail")), 1), G(R("input", {
							"onUpdate:modelValue": t[18] ||= (e) => B.sellerContactEmail = e,
							class: "rw-input",
							type: "email",
							readonly: H.value
						}, null, 8, _p), [[E, B.sellerContactEmail]])])
					]),
					R("p", vp, n(m.value ? Y(f)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.") : Y(f)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.")), 1)
				]),
				R("section", yp, [R("div", bp, [R("h3", null, n(Y(f)("rechnungswerk", "Anrede & Einleitung")), 1), !H.value && v.value.length > 0 ? (p(), F(Y(nt), {
					key: 0,
					menuName: Y(f)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: N(() => [J(Za, { size: 18 })]),
					default: N(() => [(p(!0), q(K, null, x(v.value, (e) => (p(), F(Y(_t), {
						key: e.id,
						onClick: (t) => ee(e)
					}, {
						default: N(() => [O(n(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : w("", !0)]), R("label", xp, [R("span", null, n(Y(f)("rechnungswerk", "Anrede & Einleitung")), 1), G(R("textarea", {
					"onUpdate:modelValue": t[19] ||= (e) => B.greeting = e,
					class: "rw-input",
					rows: "3",
					readonly: H.value,
					placeholder: Y(f)("rechnungswerk", "Anrede und Einleitung – Vorgabe aus den Textbausteinen")
				}, null, 8, Sp), [[E, B.greeting]])])]),
				R("section", Cp, [R("h3", null, n(Y(f)("rechnungswerk", "Positionen")), 1), J(Cd, {
					items: re.value,
					"onUpdate:items": t[20] ||= (e) => re.value = e,
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
				R("section", wp, [
					R("h3", null, n(Y(f)("rechnungswerk", "Steuer & Summen")), 1),
					R("div", Tp, [R("label", Ep, [R("span", null, n(Y(f)("rechnungswerk", "Steuerfall")), 1), G(R("select", {
						"onUpdate:modelValue": t[21] ||= (e) => B.specialTaxCase = e,
						class: "rw-input",
						disabled: H.value
					}, [
						R("option", Op, n(Y(f)("rechnungswerk", "Regelbesteuerung")), 1),
						R("option", kp, n(Y(f)("rechnungswerk", "Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)")), 1),
						R("option", Ap, n(Y(f)("rechnungswerk", "Innergemeinschaftliche Lieferung (steuerfrei)")), 1),
						R("option", jp, n(Y(f)("rechnungswerk", "Ausfuhrlieferung Drittland (steuerfrei)")), 1)
					], 8, Dp), [[oe, B.specialTaxCase]])]), t[36] ||= R("span", {
						class: "rw-field",
						"aria-hidden": "true"
					}, null, -1)]),
					B.specialTaxCase === "" ? w("", !0) : (p(), F(Y(it), {
						key: 0,
						type: "info",
						text: Y(f)("rechnungswerk", "Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.")
					}, null, 8, ["text"])),
					R("div", Mp, [R("div", Np, [
						R("div", Pp, [R("span", null, n(Y(f)("rechnungswerk", "Zwischensumme (netto)")), 1), R("strong", null, n(Y($c)(xe.value.subtotalCents)), 1)]),
						(p(!0), q(K, null, x(xe.value.taxBreakdown, (e) => (p(), q("div", {
							key: e.rateBp,
							class: "rw-kpi-row rw-kpi-row--muted"
						}, [R("span", null, n(Y(f)("rechnungswerk", "USt {rate}", { rate: Y(el)(e.rateBp) })) + " (" + n(Y($c)(e.netCents)) + ")", 1), R("span", null, n(Y($c)(e.taxCents)), 1)]))), 128)),
						R("div", Fp, [R("span", null, n(Y(f)("rechnungswerk", "Gesamt (brutto)")), 1), R("strong", null, n(Y($c)(xe.value.totalCents)), 1)])
					])])
				]),
				m.value ? (p(), q("section", Wp, [
					R("h3", null, n(Y(f)("rechnungswerk", "Gültigkeit")), 1),
					R("div", Gp, [R("label", Kp, [R("span", null, n(Y(f)("rechnungswerk", "Gültig bis")), 1), G(R("input", {
						"onUpdate:modelValue": t[24] ||= (e) => B.validUntil = e,
						class: "rw-input",
						type: "date",
						readonly: H.value
					}, null, 8, qp), [[E, B.validUntil]])]), R("label", Jp, [R("span", Yp, [G(R("input", {
						"onUpdate:modelValue": t[25] ||= (e) => B.offerFreeform = e,
						type: "checkbox",
						disabled: H.value
					}, null, 8, Xp), [[ge, B.offerFreeform]]), O(" " + n(Y(f)("rechnungswerk", "Freibleibendes Angebot (unverbindlich)")), 1)])])]),
					R("p", Zp, n(Y(f)("rechnungswerk", "„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.")), 1)
				])) : (p(), q("section", Ip, [R("h3", null, n(Y(f)("rechnungswerk", "Zahlungsbedingungen")), 1), R("div", Lp, [
					R("label", Rp, [R("span", null, n(Y(f)("rechnungswerk", "Zahlungsziel (Tage)")), 1), G(R("input", {
						"onUpdate:modelValue": t[22] ||= (e) => B.paymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						readonly: H.value
					}, null, 8, zp), [[E, B.paymentTermDays]])]),
					R("label", Bp, [R("span", null, n(Y(f)("rechnungswerk", "Fällig am")), 1), R("input", {
						class: "rw-input",
						type: "text",
						readonly: "",
						value: le.value || "—"
					}, null, 8, Vp)]),
					R("label", Hp, [R("span", null, n(Y(f)("rechnungswerk", "Skonto")), 1), G(R("input", {
						"onUpdate:modelValue": t[23] ||= (e) => B.discountTerms = e,
						class: "rw-input",
						type: "text",
						readonly: H.value,
						placeholder: Y(f)("rechnungswerk", "z. B. 2 % bei Zahlung bis\xA0…")
					}, null, 8, Up), [[E, B.discountTerms]])])
				])])),
				R("section", Qp, [R("div", $p, [R("h3", null, n(Y(f)("rechnungswerk", "Schlusstext")), 1), !H.value && y.value.length > 0 ? (p(), F(Y(nt), {
					key: 0,
					menuName: Y(f)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: N(() => [J(Za, { size: 18 })]),
					default: N(() => [(p(!0), q(K, null, x(y.value, (e) => (p(), F(Y(_t), {
						key: e.id,
						onClick: (t) => b(e)
					}, {
						default: N(() => [O(n(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : w("", !0)]), R("label", em, [R("span", null, n(Y(f)("rechnungswerk", "Schlusstext / Anmerkungen")), 1), G(R("textarea", {
					"onUpdate:modelValue": t[26] ||= (e) => B.extraText = e,
					class: "rw-input",
					rows: "3",
					readonly: H.value,
					placeholder: Y(f)("rechnungswerk", "Schlusstext – Vorgabe aus den Textbausteinen")
				}, null, 8, tm), [[E, B.extraText]])])]),
				!H.value || T.value.length > 0 ? (p(), q("section", nm, [
					R("h3", null, n(m.value ? Y(f)("rechnungswerk", "Notizen / Hinweise auf dem Angebot") : Y(f)("rechnungswerk", "Notizen / Hinweise auf der Rechnung")), 1),
					(p(!0), q(K, null, x(T.value, (e, t) => (p(), q("div", {
						key: t,
						class: "rw-note-row"
					}, [G(R("input", {
						"onUpdate:modelValue": (e) => T.value[t] = e,
						class: "rw-input",
						type: "text",
						readonly: H.value,
						"aria-label": Y(f)("rechnungswerk", "Notiz {index}", { index: t + 1 })
					}, null, 8, rm), [[E, T.value[t]]]), H.value ? w("", !0) : (p(), F(Y(X), {
						key: 0,
						variant: "tertiary",
						"aria-label": Y(f)("rechnungswerk", "Notiz entfernen"),
						onClick: (e) => De(t)
					}, {
						icon: N(() => [J(Ul, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"]))]))), 128)),
					H.value ? w("", !0) : (p(), F(Y(X), {
						key: 0,
						variant: "tertiary",
						onClick: Ee
					}, {
						icon: N(() => [J(Vo, { size: 20 })]),
						default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Notiz hinzufügen")), 1)]),
						_: 1
					})),
					R("p", im, n(m.value ? Y(f)("rechnungswerk", "Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.") : Y(f)("rechnungswerk", "Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.")), 1)
				])) : w("", !0),
				R("div", am, [H.value ? C.value ? (p(), q(K, { key: 1 }, [
					J(Y(X), { onClick: Ue }, {
						icon: N(() => [J(Jo, { size: 20 })]),
						default: N(() => [O(" " + n(Y(f)("rechnungswerk", "PDF herunterladen")), 1)]),
						_: 1
					}),
					J(Y(X), {
						variant: m.value ? "secondary" : "primary",
						disabled: ie.value,
						onClick: t[28] ||= (e) => P.value = !0
					}, {
						icon: N(() => [J(Xl, { size: 20 })]),
						default: N(() => [O(" " + n(Y(f)("rechnungswerk", "An Kunde senden")), 1)]),
						_: 1
					}, 8, ["variant", "disabled"]),
					!m.value && C.value.status === "committed" ? (p(), F(Y(X), {
						key: 0,
						variant: "error",
						disabled: M.value,
						onClick: Ie
					}, {
						default: N(() => [O(n(Y(f)("rechnungswerk", "Stornieren")), 1)]),
						_: 1
					}, 8, ["disabled"])) : w("", !0),
					m.value ? (p(), q(K, { key: 1 }, [
						He.value ? (p(), F(Y(X), {
							key: 0,
							disabled: M.value,
							onClick: Z
						}, {
							icon: N(() => [J(rc, { size: 20 })]),
							default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Annehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : w("", !0),
						He.value ? (p(), F(Y(X), {
							key: 1,
							disabled: M.value,
							onClick: Ge
						}, {
							icon: N(() => [J(uc, { size: 20 })]),
							default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Ablehnen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : w("", !0),
						Be.value ? (p(), F(Y(X), {
							key: 2,
							disabled: M.value,
							onClick: ze
						}, {
							icon: N(() => [J(_u, { size: 20 })]),
							default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Revidieren")), 1)]),
							_: 1
						}, 8, ["disabled"])) : w("", !0),
						Ve.value ? (p(), F(Y(X), {
							key: 3,
							variant: "primary",
							disabled: M.value,
							onClick: Re
						}, {
							icon: N(() => [J(uu, { size: 20 })]),
							default: N(() => [O(" " + n(Y(f)("rechnungswerk", "In Rechnung übernehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : w("", !0)
					], 64)) : w("", !0)
				], 64)) : w("", !0) : (p(), q(K, { key: 0 }, [
					J(Y(X), {
						disabled: M.value,
						onClick: t[27] ||= (e) => je()
					}, {
						default: N(() => [O(n(Y(f)("rechnungswerk", "Speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					J(Y(X), {
						disabled: M.value,
						onClick: Me
					}, {
						icon: N(() => [J(ru, { size: 20 })]),
						default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Vorschau")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					J(Y(X), {
						variant: "primary",
						disabled: M.value,
						onClick: Pe
					}, {
						icon: N(() => [J(fo, { size: 20 })]),
						default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Festschreiben")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					C.value ? (p(), F(Y(X), {
						key: 0,
						variant: "error",
						disabled: M.value,
						onClick: Fe
					}, {
						default: N(() => [O(n(Y(f)("rechnungswerk", "Löschen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : w("", !0)
				], 64))]),
				J(Ed, {
					open: L.value === "finalize",
					name: m.value ? Y(f)("rechnungswerk", "Angebot festschreiben") : Y(f)("rechnungswerk", "Rechnung festschreiben"),
					message: ve.value,
					confirmLabel: Y(f)("rechnungswerk", "Festschreiben"),
					onClose: t[29] ||= (e) => L.value = null,
					onConfirm: We
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Ed, {
					open: L.value === "delete",
					name: m.value ? Y(f)("rechnungswerk", "Angebot löschen") : Y(f)("rechnungswerk", "Entwurf löschen"),
					message: m.value ? Y(f)("rechnungswerk", "Diesen Angebots-Entwurf wirklich löschen?") : Y(f)("rechnungswerk", "Diesen Entwurf wirklich löschen?"),
					confirmLabel: Y(f)("rechnungswerk", "Löschen"),
					destructive: "",
					onClose: t[30] ||= (e) => L.value = null,
					onConfirm: Xe
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Ed, {
					open: L.value === "cancel",
					name: Y(f)("rechnungswerk", "Rechnung stornieren"),
					message: Y(f)("rechnungswerk", "Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?"),
					confirmLabel: Y(f)("rechnungswerk", "Stornorechnung erstellen"),
					destructive: "",
					onClose: t[31] ||= (e) => L.value = null,
					onConfirm: Ze
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Ed, {
					open: L.value === "convert",
					name: Y(f)("rechnungswerk", "In Rechnung übernehmen"),
					message: Y(f)("rechnungswerk", "Aus diesem Angebot wird ein neuer Rechnungs-Entwurf mit denselben Positionen erstellt. Das Angebot wird als „übernommen“ markiert. Fortfahren?"),
					confirmLabel: Y(f)("rechnungswerk", "Rechnung erstellen"),
					onClose: t[32] ||= (e) => L.value = null,
					onConfirm: Ke
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Ed, {
					open: L.value === "revise",
					name: Y(f)("rechnungswerk", "Angebot revidieren"),
					message: Y(f)("rechnungswerk", "Es wird eine überarbeitbare Kopie als neue Angebots-Revision erstellt. Beim Festschreiben erhält sie eine Revisionsnummer (z. B. AN-…-1) und dieses Angebot wird als „revidiert“ markiert. Fortfahren?"),
					confirmLabel: Y(f)("rechnungswerk", "Revision erstellen"),
					onClose: t[33] ||= (e) => L.value = null,
					onConfirm: qe
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				J(Pd, {
					open: P.value,
					invoice: C.value,
					defaultBody: ye.value,
					saving: ie.value,
					kind: m.value ? "quote" : "invoice",
					onClose: t[34] ||= (e) => P.value = !1,
					onSend: Ye
				}, null, 8, [
					"open",
					"invoice",
					"defaultBody",
					"saving",
					"kind"
				]),
				J(Y(rt), {
					open: ae.value,
					name: Y(f)("rechnungswerk", "Vorschau (Entwurf)"),
					size: "large",
					"onUpdate:open": Ne
				}, {
					default: N(() => [I.value ? (p(), q("iframe", {
						key: 0,
						src: I.value,
						class: "preview-frame",
						title: Y(f)("rechnungswerk", "Vorschau (Entwurf)")
					}, null, 8, om)) : w("", !0)]),
					_: 1
				}, 8, ["open", "name"])
			]);
		};
	}
}), [["__scopeId", "data-v-7576b8a3"]]), cm = {
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
}, lm = ["aria-hidden", "aria-label"], um = [
	"fill",
	"width",
	"height"
], dm = { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" }, fm = { key: 0 };
function pm(e, r, i, a, o, s) {
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
	}, [R("path", dm, [i.title ? (p(), q("title", fm, n(i.title), 1)) : w("", !0)])], 8, um))], 16, lm);
}
var mm = /*#__PURE__*/ Q(cm, [["render", pm]]), hm = { class: "rw-view" }, gm = { class: "rw-view__head" }, _m = { key: 2 }, vm = { class: "rw-filterbar" }, ym = ["onClick"], bm = { class: "rw-chip__n" }, xm = { class: "rw-table-wrap" }, Sm = { class: "rw-table" }, Cm = { class: "num" }, wm = ["onClick"], Tm = { class: "rw-status-cell" }, Em = { class: "rw-qstatus-text" }, Dm = { class: "num" }, Om = { class: "rw-col-actions" }, km = { class: "rw-actions" }, Am = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "QuotesView",
	setup(e) {
		let t = Je(), r = Yd(), i = j(""), a = [
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
		], o = j("all"), l = (e) => e.quoteStatus === "open" || e.quoteStatus === "expired", u = U(() => {
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
			expired: mm,
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
		function ee(e) {
			t.push({
				name: "quote-detail",
				params: { id: String(e) }
			});
		}
		function b(e) {
			qd(e);
		}
		async function S(e) {
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
		return (e, t) => (p(), q("div", hm, [
			R("div", gm, [R("h2", null, n(Y(f)("rechnungswerk", "Angebote")), 1), J(Y(X), {
				variant: "primary",
				onClick: y
			}, {
				icon: N(() => [J(Vo, { size: 20 })]),
				default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Neues Angebot")), 1)]),
				_: 1
			})]),
			i.value ? (p(), F(Y(it), {
				key: 0,
				type: "error",
				text: i.value
			}, null, 8, ["text"])) : w("", !0),
			!Y(r).loading && Y(r).quotes.length === 0 ? (p(), F(Y(mt), {
				key: 1,
				name: Y(f)("rechnungswerk", "Noch keine Angebote"),
				description: Y(f)("rechnungswerk", "Lege dein erstes Angebot an.")
			}, {
				icon: N(() => [J(Ca, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : Y(r).quotes.length > 0 ? (p(), q("div", _m, [R("div", vm, [(p(), q(K, null, x(a, (e) => R("button", {
				key: e.key,
				class: D(["rw-chip", { "rw-chip--active": o.value === e.key }]),
				onClick: (t) => o.value = e.key
			}, [O(n(Y(f)("rechnungswerk", e.label)) + " ", 1), R("span", bm, n(u.value[e.key]), 1)], 10, ym)), 64))]), R("div", xm, [R("table", Sm, [R("thead", null, [R("tr", null, [
				R("th", null, n(Y(f)("rechnungswerk", "Status")), 1),
				R("th", null, n(Y(f)("rechnungswerk", "Nummer")), 1),
				R("th", null, n(Y(f)("rechnungswerk", "Empfänger")), 1),
				R("th", null, n(Y(f)("rechnungswerk", "Datum")), 1),
				R("th", null, n(Y(f)("rechnungswerk", "Gültig bis")), 1),
				R("th", Cm, n(Y(f)("rechnungswerk", "Brutto")), 1),
				t[0] ||= R("th", { class: "rw-col-actions" }, null, -1)
			])]), R("tbody", null, [(p(!0), q(K, null, x(d.value, (e) => (p(), q("tr", {
				key: e.id,
				class: D(["rw-row-clickable", { "rw-row--overdue": e.quoteStatus === "expired" }]),
				onClick: (t) => ee(e.id)
			}, [
				R("td", null, [R("span", Tm, [(p(), F(c(g(e.quoteStatus)), {
					size: 20,
					class: D(["rw-sicon", `rw-qsicon--${e.quoteStatus}`]),
					title: _(e.quoteStatus)
				}, null, 8, ["class", "title"])), R("span", Em, n(_(e.quoteStatus)), 1)])]),
				R("td", null, n(e.number ?? Y(f)("rechnungswerk", "(Entwurf)")), 1),
				R("td", null, n(e.recipientName ?? "—"), 1),
				R("td", null, n(v(e.issueDate ?? e.createdAt)), 1),
				R("td", null, [R("span", { class: D({ "rw-amt-overdue": e.quoteStatus === "expired" }) }, n(v(e.validUntil)), 3)]),
				R("td", Dm, n(Y($c)(e.totalCents)), 1),
				R("td", Om, [R("div", km, [m(e) ? (p(), F(Y(X), {
					key: 0,
					variant: "tertiary",
					"aria-label": Y(f)("rechnungswerk", "In Rechnung übernehmen"),
					title: Y(f)("rechnungswerk", "In Rechnung übernehmen"),
					onClick: A((t) => S(e.id), ["stop"])
				}, {
					icon: N(() => [J(uu, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])) : w("", !0), e.status === "draft" ? w("", !0) : (p(), F(Y(X), {
					key: 1,
					variant: "tertiary",
					"aria-label": Y(f)("rechnungswerk", "PDF herunterladen"),
					title: Y(f)("rechnungswerk", "PDF herunterladen"),
					onClick: A((t) => b(e.id), ["stop"])
				}, {
					icon: N(() => [J(Jo, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				]))])])
			], 10, wm))), 128))])])])])) : w("", !0)
		]));
	}
}), [["__scopeId", "data-v-62bdd46f"]]), jm = { class: "product-modal" }, Mm = { class: "field" }, Nm = { class: "field" }, Pm = { class: "field-row" }, Fm = { class: "field" }, Im = ["value"], Lm = { class: "field" }, Rm = { class: "field" }, zm = ["value"], Bm = { class: "field" }, Vm = ["placeholder"], Hm = { class: "hint" }, Um = { class: "actions" }, Wm = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "ProductEditModal",
	props: {
		open: { type: Boolean },
		product: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = j(null), o = V({
			name: "",
			description: "",
			defaultUnitCode: "C62",
			defaultUnitLabel: "",
			defaultTaxRateBp: 1900
		}), s = j("0,00");
		function c() {
			qc(s.value) !== null && (s.value = Xc(Zc(s.value)));
		}
		let l = U(() => r.product ? f("rechnungswerk", "Produkt bearbeiten") : f("rechnungswerk", "Produkt anlegen")), u = U(() => o.name.trim() !== "");
		_(() => r.open, (e) => {
			if (!e) return;
			let t = r.product;
			o.name = t?.name ?? "", o.description = t?.description ?? "", o.defaultUnitCode = t?.defaultUnitCode ?? "C62", o.defaultUnitLabel = t?.defaultUnitLabel ?? "", o.defaultTaxRateBp = t?.defaultTaxRateBp ?? 1900, s.value = Xc(t?.defaultPriceE4 ?? 0), se(() => a.value?.focus());
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
		return (t, r) => e.open ? (p(), F(Y(ot), {
			key: 0,
			name: l.value,
			onKeydown: r[7] ||= ye((e) => Y(Dd)(e, () => t.$emit("close")), ["esc"]),
			onClose: r[8] ||= (e) => t.$emit("close")
		}, {
			default: N(() => [R("div", jm, [
				R("h2", null, n(l.value), 1),
				R("label", Mm, [R("span", null, n(Y(f)("rechnungswerk", "Name")) + " *", 1), G(R("input", {
					ref_key: "nameInput",
					ref: a,
					"onUpdate:modelValue": r[0] ||= (e) => o.name = e,
					class: "input",
					type: "text"
				}, null, 512), [[E, o.name]])]),
				R("label", Nm, [R("span", null, n(Y(f)("rechnungswerk", "Beschreibung")), 1), G(R("textarea", {
					"onUpdate:modelValue": r[1] ||= (e) => o.description = e,
					class: "input",
					rows: "2"
				}, null, 512), [[E, o.description]])]),
				R("div", Pm, [
					R("label", Fm, [R("span", null, n(Y(f)("rechnungswerk", "Einheit")), 1), G(R("select", {
						"onUpdate:modelValue": r[2] ||= (e) => o.defaultUnitCode = e,
						class: "input"
					}, [(p(!0), q(K, null, x(Y(Fc), (e) => (p(), q("option", {
						key: e,
						value: e
					}, n(Y(f)("rechnungswerk", Y(Ic)[e])), 9, Im))), 128))], 512), [[oe, o.defaultUnitCode]])]),
					R("label", Lm, [R("span", null, n(Y(f)("rechnungswerk", "Standard-Preis (€)")), 1), G(R("input", {
						"onUpdate:modelValue": r[3] ||= (e) => s.value = e,
						class: "input",
						type: "text",
						inputmode: "decimal",
						onBlur: c
					}, null, 544), [[E, s.value]])]),
					R("label", Rm, [R("span", null, n(Y(f)("rechnungswerk", "USt-Satz")), 1), G(R("select", {
						"onUpdate:modelValue": r[4] ||= (e) => o.defaultTaxRateBp = e,
						class: "input"
					}, [(p(!0), q(K, null, x(Y(Lc), (e) => (p(), q("option", {
						key: e,
						value: e
					}, n(Y(el)(e)), 9, zm))), 128))], 512), [[
						oe,
						o.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])])
				]),
				R("label", Bm, [
					R("span", null, n(Y(f)("rechnungswerk", "Eigene Einheit (optional)")), 1),
					G(R("input", {
						"onUpdate:modelValue": r[5] ||= (e) => o.defaultUnitLabel = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: Y(f)("rechnungswerk", "z. B. Personen, Sitzung")
					}, null, 8, Vm), [[E, o.defaultUnitLabel]]),
					R("span", Hm, n(Y(f)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF. In der E-Rechnung wird die Einheit generisch (Stück) abgebildet, damit sie gültig bleibt.")), 1)
				]),
				R("div", Um, [J(Y(X), { onClick: r[6] ||= (e) => t.$emit("close") }, {
					default: N(() => [O(n(Y(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(Y(X), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					default: N(() => [O(n(Y(f)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : w("", !0);
	}
}), [["__scopeId", "data-v-e77e93c0"]]), Gm = { class: "rw-view" }, Km = { class: "rw-view__head" }, qm = {
	key: 2,
	class: "rw-table-wrap"
}, Jm = { class: "rw-table" }, Ym = { class: "num" }, Xm = { class: "num" }, Zm = ["onClick"], Qm = {
	key: 0,
	class: "rw-muted"
}, $m = { class: "num" }, eh = { class: "num" }, th = { class: "rw-col-actions" }, nh = { class: "rw-actions" }, rh = /* @__PURE__ */ r({
	__name: "ProductsView",
	setup(e) {
		let t = ef(), r = j(!1), i = j(null), a = j(null), o = j(""), c = (e) => Ic[e] ?? e;
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
		return (e, s) => (p(), q("div", Gm, [
			R("div", Km, [R("h2", null, n(Y(f)("rechnungswerk", "Produkte")), 1), J(Y(X), {
				variant: "primary",
				onClick: u
			}, {
				icon: N(() => [J(Vo, { size: 20 })]),
				default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Produkt anlegen")), 1)]),
				_: 1
			})]),
			o.value ? (p(), F(Y(it), {
				key: 0,
				type: "error",
				text: o.value
			}, null, 8, ["text"])) : w("", !0),
			!Y(t).loading && Y(t).products.length === 0 ? (p(), F(Y(mt), {
				key: 1,
				name: Y(f)("rechnungswerk", "Noch keine Produkte"),
				description: Y(f)("rechnungswerk", "Pflege wiederkehrende Leistungen, um sie schnell in Rechnungen zu übernehmen.")
			}, {
				icon: N(() => [J(Wa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : Y(t).products.length > 0 ? (p(), q("div", qm, [R("table", Jm, [R("thead", null, [R("tr", null, [
				R("th", null, n(Y(f)("rechnungswerk", "Name")), 1),
				R("th", null, n(Y(f)("rechnungswerk", "Einheit")), 1),
				R("th", Ym, n(Y(f)("rechnungswerk", "Preis")), 1),
				R("th", Xm, n(Y(f)("rechnungswerk", "USt")), 1),
				s[2] ||= R("th", { class: "num" }, null, -1)
			])]), R("tbody", null, [(p(!0), q(K, null, x(Y(t).products, (e) => (p(), q("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => d(e)
			}, [
				R("td", null, [O(n(e.name) + " ", 1), e.description ? (p(), q("div", Qm, n(e.description), 1)) : w("", !0)]),
				R("td", null, n(e.defaultUnitLabel || Y(f)("rechnungswerk", c(e.defaultUnitCode))), 1),
				R("td", $m, n(Y(Qc)(e.defaultPriceE4)), 1),
				R("td", eh, n(Y(el)(e.defaultTaxRateBp)), 1),
				R("td", th, [R("div", nh, [J(Y(X), {
					variant: "tertiary",
					"aria-label": Y(f)("rechnungswerk", "Löschen"),
					title: Y(f)("rechnungswerk", "Löschen"),
					onClick: A((t) => h(e), ["stop"])
				}, {
					icon: N(() => [J(Ul, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, Zm))), 128))])])])) : w("", !0),
			J(Wm, {
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
}), ih = {
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
}, ah = ["aria-hidden", "aria-label"], oh = [
	"fill",
	"width",
	"height"
], sh = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, ch = { key: 0 };
function lh(e, r, i, a, o, s) {
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
	}, [R("path", sh, [i.title ? (p(), q("title", ch, n(i.title), 1)) : w("", !0)])], 8, oh))], 16, ah);
}
var uh = /*#__PURE__*/ Q(ih, [["render", lh]]), dh = {
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
}, fh = ["aria-hidden", "aria-label"], ph = [
	"fill",
	"width",
	"height"
], mh = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, hh = { key: 0 };
function gh(e, r, i, a, o, s) {
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
	}, [R("path", mh, [i.title ? (p(), q("title", hh, n(i.title), 1)) : w("", !0)])], 8, ph))], 16, fh);
}
var _h = /*#__PURE__*/ Q(dh, [["render", gh]]), vh = { class: "snippet-modal" }, yh = { class: "field" }, bh = ["placeholder"], xh = { class: "field-row" }, Sh = { class: "field" }, Ch = ["value"], wh = { class: "field" }, Th = ["value"], Eh = { class: "field" }, Dh = { class: "hint" }, Oh = { class: "actions" }, kh = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "TextSnippetEditModal",
	props: {
		open: { type: Boolean },
		snippet: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let r = ["invoice", "quote"], i = ["opening", "closing"], a = e, o = t, s = j(null), c = V({
			label: "",
			docType: "invoice",
			slot: "opening",
			content: "",
			isDefault: !1
		}), l = U(() => a.snippet ? f("rechnungswerk", "Textbaustein bearbeiten") : f("rechnungswerk", "Textbaustein anlegen")), u = U(() => c.label.trim() !== "");
		_(() => a.open, (e) => {
			if (!e) return;
			let t = a.snippet;
			c.label = t?.label ?? "", c.docType = t?.docType ?? "invoice", c.slot = t?.slot ?? "opening", c.content = t?.content ?? "", c.isDefault = t?.isDefault ?? !1, se(() => s.value?.focus());
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
		return (t, a) => e.open ? (p(), F(Y(ot), {
			key: 0,
			name: l.value,
			onKeydown: a[6] ||= ye((e) => Y(Dd)(e, () => t.$emit("close")), ["esc"]),
			onClose: a[7] ||= (e) => t.$emit("close")
		}, {
			default: N(() => [R("div", vh, [
				R("h2", null, n(l.value), 1),
				R("label", yh, [R("span", null, n(Y(f)("rechnungswerk", "Name")) + " *", 1), G(R("input", {
					ref_key: "nameInput",
					ref: s,
					"onUpdate:modelValue": a[0] ||= (e) => c.label = e,
					class: "input",
					type: "text",
					placeholder: Y(f)("rechnungswerk", "z. B. Neukunde, Mahnfreundlich")
				}, null, 8, bh), [[E, c.label]])]),
				R("div", xh, [R("label", Sh, [R("span", null, n(Y(f)("rechnungswerk", "Dokument")), 1), G(R("select", {
					"onUpdate:modelValue": a[1] ||= (e) => c.docType = e,
					class: "input"
				}, [(p(), q(K, null, x(r, (e) => R("option", {
					key: e,
					value: e
				}, n(Y(f)("rechnungswerk", Y(zc)[e])), 9, Ch)), 64))], 512), [[oe, c.docType]])]), R("label", wh, [R("span", null, n(Y(f)("rechnungswerk", "Textbereich")), 1), G(R("select", {
					"onUpdate:modelValue": a[2] ||= (e) => c.slot = e,
					class: "input"
				}, [(p(), q(K, null, x(i, (e) => R("option", {
					key: e,
					value: e
				}, n(Y(f)("rechnungswerk", Y(Bc)[e])), 9, Th)), 64))], 512), [[oe, c.slot]])])]),
				R("label", Eh, [R("span", null, n(Y(f)("rechnungswerk", "Text")), 1), G(R("textarea", {
					"onUpdate:modelValue": a[3] ||= (e) => c.content = e,
					class: "input",
					rows: "6"
				}, null, 512), [[E, c.content]])]),
				J(Y(bt), {
					modelValue: c.isDefault,
					"onUpdate:modelValue": a[4] ||= (e) => c.isDefault = e
				}, {
					default: N(() => [O(n(Y(f)("rechnungswerk", "Als Standard für neue Dokumente verwenden")), 1)]),
					_: 1
				}, 8, ["modelValue"]),
				R("p", Dh, n(Y(f)("rechnungswerk", "Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.")), 1),
				R("div", Oh, [J(Y(X), { onClick: a[5] ||= (e) => t.$emit("close") }, {
					default: N(() => [O(n(Y(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(Y(X), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					default: N(() => [O(n(Y(f)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : w("", !0);
	}
}), [["__scopeId", "data-v-b60fbea6"]]), Ah = { class: "rw-view" }, jh = { class: "rw-view__head" }, Mh = { class: "rw-muted rw-intro" }, Nh = {
	key: 2,
	class: "rw-snippet-groups"
}, Ph = { class: "rw-snippet-group__head" }, Fh = { class: "rw-table-wrap" }, Ih = { class: "rw-table" }, Lh = ["onClick"], Rh = {
	key: 0,
	class: "rw-muted rw-snippet-content"
}, zh = { class: "rw-snippet-actions" }, Bh = { class: "rw-actions" }, Vh = /*#__PURE__*/ Q(/* @__PURE__ */ r({
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
		}), o = j(!1), c = j(null), l = j(null), u = j("");
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
		return (e, r) => (p(), q("div", Ah, [
			R("div", jh, [R("h2", null, n(Y(f)("rechnungswerk", "Textbausteine")), 1), J(Y(X), {
				variant: "primary",
				onClick: m
			}, {
				icon: N(() => [J(Vo, { size: 20 })]),
				default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Textbaustein anlegen")), 1)]),
				_: 1
			})]),
			R("p", Mh, n(Y(f)("rechnungswerk", "Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.")), 1),
			u.value ? (p(), F(Y(it), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : w("", !0),
			!Y(t).loading && Y(t).snippets.length === 0 ? (p(), F(Y(mt), {
				key: 1,
				name: Y(f)("rechnungswerk", "Noch keine Textbausteine"),
				description: Y(f)("rechnungswerk", "Lege wiederkehrende Einleitungs- und Schlusstexte an, um sie schnell in Dokumente zu übernehmen.")
			}, {
				icon: N(() => [J(Za, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : Y(t).snippets.length > 0 ? (p(), q("div", Nh, [(p(!0), q(K, null, x(a.value, (e) => (p(), q("section", {
				key: e.key,
				class: "rw-snippet-group"
			}, [R("h3", Ph, [
				O(n(Y(f)("rechnungswerk", Y(zc)[e.docType])) + " ", 1),
				r[2] ||= R("span", { class: "rw-snippet-group__sep" }, "–", -1),
				O(" " + n(Y(f)("rechnungswerk", Y(Bc)[e.slot])), 1)
			]), R("div", Fh, [R("table", Ih, [R("tbody", null, [(p(!0), q(K, null, x(e.items, (e) => (p(), q("tr", {
				key: e.id,
				class: "rw-row-clickable rw-snippet-row",
				onClick: (t) => h(e)
			}, [R("td", null, [R("strong", null, n(e.label), 1), e.content ? (p(), q("div", Rh, n(e.content), 1)) : w("", !0)]), R("td", zh, [R("div", Bh, [J(Y(X), {
				variant: "tertiary",
				"aria-label": e.isDefault ? Y(f)("rechnungswerk", "Standard-Vorlage") : Y(f)("rechnungswerk", "Als Standard festlegen"),
				title: e.isDefault ? Y(f)("rechnungswerk", "Standard-Vorlage") : Y(f)("rechnungswerk", "Als Standard festlegen"),
				onClick: A((t) => g(e), ["stop"])
			}, {
				icon: N(() => [e.isDefault ? (p(), F(uh, {
					key: 0,
					size: 20,
					class: "rw-star rw-star--active"
				})) : (p(), F(_h, {
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
				onClick: A((t) => v(e), ["stop"])
			}, {
				icon: N(() => [J(Ul, { size: 20 })]),
				_: 1
			}, 8, [
				"aria-label",
				"title",
				"onClick"
			])])])], 8, Lh))), 128))])])])]))), 128))])) : w("", !0),
			J(kh, {
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
}), [["__scopeId", "data-v-c438c8e2"]]), Hh = {
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
}, Uh = ["aria-hidden", "aria-label"], Wh = [
	"fill",
	"width",
	"height"
], Gh = { d: "M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14" }, Kh = { key: 0 };
function qh(e, r, i, a, o, s) {
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
	}, [R("path", Gh, [i.title ? (p(), q("title", Kh, n(i.title), 1)) : w("", !0)])], 8, Wh))], 16, Uh);
}
var Jh = /*#__PURE__*/ Q(Hh, [["render", qh]]), Yh = { class: "customer-modal" }, Xh = { class: "form-section" }, Zh = { class: "row" }, Qh = { class: "field" }, $h = { class: "field" }, eg = { class: "row" }, tg = { class: "field" }, ng = { class: "form-section" }, rg = { class: "field" }, ig = { class: "row" }, ag = { class: "field" }, og = { class: "field" }, sg = { class: "row" }, cg = { class: "field" }, lg = { class: "form-section" }, ug = { class: "row" }, dg = { class: "field" }, fg = { class: "field" }, pg = { class: "field" }, mg = { class: "form-section" }, hg = { class: "field" }, gg = { class: "row" }, _g = { class: "field" }, vg = { class: "field" }, yg = { class: "field" }, bg = { class: "form-section" }, xg = { class: "row" }, Sg = { class: "field" }, Cg = { class: "field" }, wg = { value: "" }, Tg = ["value"], Eg = { class: "field" }, Dg = { class: "actions" }, Og = /*#__PURE__*/ Q(/* @__PURE__ */ r({
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
		let r = e, i = t, a = j(null), o = () => ({
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
		}), s = V(o()), c = j(""), l = j(""), u = U(() => r.customer ? f("rechnungswerk", "Kunde bearbeiten") : f("rechnungswerk", "Kunde anlegen")), d = U(() => {
			let e = s.customerNumber.trim().toLowerCase();
			return e !== "" && (r.takenNumbers ?? []).includes(e);
		}), m = U(() => s.customerNumber.trim() !== "" && s.name.trim() !== "" && !d.value);
		_(() => r.open, (e) => {
			if (!e) return;
			let t = r.customer;
			Object.assign(s, o()), t ? (s.customerNumber = t.customerNumber ?? "", s.name = t.name ?? "", s.vatId = t.vatId ?? "", s.address = t.address ?? "", s.postalCode = t.postalCode ?? "", s.city = t.city ?? "", s.country = t.country ?? "DE", s.contactPerson = t.contactPerson ?? "", s.phone = t.phone ?? "", s.email = t.email ?? "", s.bankAccountHolder = t.bankAccountHolder ?? "", s.iban = t.iban ?? "", s.bic = t.bic ?? "", s.bankName = t.bankName ?? "", s.note = t.note ?? "", c.value = t.defaultPaymentTermDays == null ? "" : String(t.defaultPaymentTermDays), l.value = t.defaultTaxRateBp == null ? "" : String(t.defaultTaxRateBp)) : r.prefill && Object.assign(s, {
				...o(),
				...h(r.prefill)
			}), se(() => a.value?.focus());
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
		return (t, r) => e.open ? (p(), F(Y(ot), {
			key: 0,
			name: u.value,
			onKeydown: r[18] ||= ye((e) => Y(Dd)(e, () => t.$emit("close")), ["esc"]),
			onClose: r[19] ||= (e) => t.$emit("close")
		}, {
			default: N(() => [R("div", Yh, [
				R("h2", null, n(u.value), 1),
				R("div", Xh, [
					R("h3", null, n(Y(f)("rechnungswerk", "Stammdaten")), 1),
					R("div", Zh, [R("label", Qh, [R("span", null, n(Y(f)("rechnungswerk", "Kundennr.")) + " *", 1), G(R("input", {
						ref_key: "numberInput",
						ref: a,
						"onUpdate:modelValue": r[0] ||= (e) => s.customerNumber = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.customerNumber]])]), R("label", $h, [R("span", null, n(Y(f)("rechnungswerk", "Name / Firma")) + " *", 1), G(R("input", {
						"onUpdate:modelValue": r[1] ||= (e) => s.name = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.name]])])]),
					d.value ? (p(), F(Y(it), {
						key: 0,
						type: "error",
						text: Y(f)("rechnungswerk", "Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.", { number: s.customerNumber.trim() })
					}, null, 8, ["text"])) : w("", !0),
					R("div", eg, [R("label", tg, [R("span", null, n(Y(f)("rechnungswerk", "USt-IdNr.")), 1), G(R("input", {
						"onUpdate:modelValue": r[2] ||= (e) => s.vatId = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.vatId]])])])
				]),
				R("div", ng, [
					R("h3", null, n(Y(f)("rechnungswerk", "Anschrift")), 1),
					R("label", rg, [R("span", null, n(Y(f)("rechnungswerk", "Straße & Hausnummer")), 1), G(R("input", {
						"onUpdate:modelValue": r[3] ||= (e) => s.address = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.address]])]),
					R("div", ig, [R("label", ag, [R("span", null, n(Y(f)("rechnungswerk", "PLZ")), 1), G(R("input", {
						"onUpdate:modelValue": r[4] ||= (e) => s.postalCode = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.postalCode]])]), R("label", og, [R("span", null, n(Y(f)("rechnungswerk", "Ort")), 1), G(R("input", {
						"onUpdate:modelValue": r[5] ||= (e) => s.city = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.city]])])]),
					R("div", sg, [R("label", cg, [R("span", null, n(Y(f)("rechnungswerk", "Land")), 1), J(ju, {
						modelValue: s.country,
						"onUpdate:modelValue": r[6] ||= (e) => s.country = e,
						selectClass: "input"
					}, null, 8, ["modelValue"])])])
				]),
				R("div", lg, [
					R("h3", null, n(Y(f)("rechnungswerk", "Ansprechpartner & Kontakt")), 1),
					R("div", ug, [R("label", dg, [R("span", null, n(Y(f)("rechnungswerk", "Ansprechpartner")), 1), G(R("input", {
						"onUpdate:modelValue": r[7] ||= (e) => s.contactPerson = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.contactPerson]])]), R("label", fg, [R("span", null, n(Y(f)("rechnungswerk", "Telefon")), 1), G(R("input", {
						"onUpdate:modelValue": r[8] ||= (e) => s.phone = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.phone]])])]),
					R("label", pg, [R("span", null, n(Y(f)("rechnungswerk", "E-Mail (für Rechnungsversand)")), 1), G(R("input", {
						"onUpdate:modelValue": r[9] ||= (e) => s.email = e,
						class: "input",
						type: "email"
					}, null, 512), [[E, s.email]])])
				]),
				R("div", mg, [
					R("h3", null, n(Y(f)("rechnungswerk", "Bankverbindung")), 1),
					R("label", hg, [R("span", null, n(Y(f)("rechnungswerk", "Kontoinhaber")), 1), G(R("input", {
						"onUpdate:modelValue": r[10] ||= (e) => s.bankAccountHolder = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.bankAccountHolder]])]),
					R("div", gg, [R("label", _g, [R("span", null, n(Y(f)("rechnungswerk", "IBAN")), 1), G(R("input", {
						"onUpdate:modelValue": r[11] ||= (e) => s.iban = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.iban]])]), R("label", vg, [R("span", null, n(Y(f)("rechnungswerk", "BIC")), 1), G(R("input", {
						"onUpdate:modelValue": r[12] ||= (e) => s.bic = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.bic]])])]),
					R("label", yg, [R("span", null, n(Y(f)("rechnungswerk", "Bank")), 1), G(R("input", {
						"onUpdate:modelValue": r[13] ||= (e) => s.bankName = e,
						class: "input",
						type: "text"
					}, null, 512), [[E, s.bankName]])])
				]),
				R("div", bg, [
					R("h3", null, n(Y(f)("rechnungswerk", "Vorgaben für neue Rechnungen")), 1),
					R("div", xg, [R("label", Sg, [R("span", null, n(Y(f)("rechnungswerk", "Zahlungsziel (Tage)")), 1), G(R("input", {
						"onUpdate:modelValue": r[14] ||= (e) => c.value = e,
						class: "input",
						type: "number",
						min: "0",
						inputmode: "numeric"
					}, null, 512), [[E, c.value]])]), R("label", Cg, [R("span", null, n(Y(f)("rechnungswerk", "Standard-Steuersatz")), 1), G(R("select", {
						"onUpdate:modelValue": r[15] ||= (e) => l.value = e,
						class: "input"
					}, [R("option", wg, n(Y(f)("rechnungswerk", "— keine Vorgabe —")), 1), (p(!0), q(K, null, x(Y(Lc), (e) => (p(), q("option", {
						key: e,
						value: String(e)
					}, n(Y(el)(e)), 9, Tg))), 128))], 512), [[oe, l.value]])])]),
					R("label", Eg, [R("span", null, n(Y(f)("rechnungswerk", "Notiz (intern, nicht auf der Rechnung)")), 1), G(R("textarea", {
						"onUpdate:modelValue": r[16] ||= (e) => s.note = e,
						class: "input",
						rows: "2"
					}, null, 512), [[E, s.note]])])
				]),
				R("div", Dg, [J(Y(X), { onClick: r[17] ||= (e) => t.$emit("close") }, {
					default: N(() => [O(n(Y(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), J(Y(X), {
					variant: "primary",
					disabled: e.saving || !m.value,
					onClick: v
				}, {
					default: N(() => [O(n(Y(f)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : w("", !0);
	}
}), [["__scopeId", "data-v-2d237eab"]]), kg = { class: "rw-view" }, Ag = { class: "rw-view__head" }, jg = { class: "rw-view__actions" }, Mg = {
	key: 2,
	class: "rw-table-wrap"
}, Ng = { class: "rw-table" }, Pg = ["onClick"], Fg = { class: "rw-muted" }, Ig = {
	key: 0,
	class: "rw-muted"
}, Lg = { class: "rw-col-actions" }, Rg = { class: "rw-actions" }, zg = { class: "rw-import" }, Bg = { class: "rw-muted" }, Vg = /*#__PURE__*/ Q(/* @__PURE__ */ r({
	__name: "CustomersView",
	setup(e) {
		let t = Iu(), r = j(!1), i = j(null), a = j(null), o = j(null), c = j(!1), l = j(""), u = j(""), d = j(!1), m = U(() => t.customers.filter((e) => e.id !== i.value?.id).map((e) => e.customerNumber.trim().toLowerCase()));
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
		async function ee(e) {
			u.value = "", d.value = !0;
			try {
				i.value ? await t.update(i.value.id, e) : await t.create(e), r.value = !1, a.value = null;
			} catch (e) {
				h(e, f("rechnungswerk", "Speichern fehlgeschlagen"));
			} finally {
				d.value = !1;
			}
		}
		function b(e) {
			o.value = e;
		}
		async function S() {
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
		return (e, s) => (p(), q("div", kg, [
			R("div", Ag, [R("h2", null, n(Y(f)("rechnungswerk", "Kunden")), 1), R("div", jg, [J(Y(X), { onClick: v }, {
				icon: N(() => [J(Jh, { size: 20 })]),
				default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Aus Kontakten importieren")), 1)]),
				_: 1
			}), J(Y(X), {
				variant: "primary",
				onClick: g
			}, {
				icon: N(() => [J(Vo, { size: 20 })]),
				default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Neuer Kunde")), 1)]),
				_: 1
			})])]),
			u.value ? (p(), F(Y(it), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : w("", !0),
			!Y(t).loading && Y(t).customers.length === 0 ? (p(), F(Y(mt), {
				key: 1,
				name: Y(f)("rechnungswerk", "Noch keine Kunden"),
				description: Y(f)("rechnungswerk", "Lege Kunden an oder übernimm sie aus deinen Nextcloud-Kontakten, um sie schnell in Rechnungen auszuwählen.")
			}, {
				icon: N(() => [J(Aa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : Y(t).customers.length > 0 ? (p(), q("div", Mg, [R("table", Ng, [R("thead", null, [R("tr", null, [
				R("th", null, n(Y(f)("rechnungswerk", "Kundennr.")), 1),
				R("th", null, n(Y(f)("rechnungswerk", "Kunde")), 1),
				R("th", null, n(Y(f)("rechnungswerk", "Ort")), 1),
				s[5] ||= R("th", { class: "num" }, null, -1)
			])]), R("tbody", null, [(p(!0), q(K, null, x(Y(t).customers, (e) => (p(), q("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => _(e)
			}, [
				R("td", Fg, n(e.customerNumber), 1),
				R("td", null, [O(n(e.name) + " ", 1), e.contactPerson || e.vatId ? (p(), q("div", Ig, n([e.contactPerson, e.vatId].filter(Boolean).join(" · ")), 1)) : w("", !0)]),
				R("td", null, n([e.postalCode, e.city].filter(Boolean).join(" ")), 1),
				R("td", Lg, [R("div", Rg, [J(Y(X), {
					variant: "tertiary",
					"aria-label": Y(f)("rechnungswerk", "Löschen"),
					title: Y(f)("rechnungswerk", "Löschen"),
					onClick: A((t) => b(e), ["stop"])
				}, {
					icon: N(() => [J(Ul, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, Pg))), 128))])])])) : w("", !0),
			J(Og, {
				open: r.value,
				customer: i.value,
				saving: d.value,
				takenNumbers: m.value,
				prefill: a.value,
				onClose: s[0] ||= (e) => r.value = !1,
				onSave: ee
			}, null, 8, [
				"open",
				"customer",
				"saving",
				"takenNumbers",
				"prefill"
			]),
			c.value ? (p(), F(Y(ot), {
				key: 3,
				name: Y(f)("rechnungswerk", "Aus Nextcloud-Kontakten übernehmen"),
				onKeydown: s[2] ||= ye((e) => Y(Dd)(e, () => c.value = !1), ["esc"]),
				onClose: s[3] ||= (e) => c.value = !1
			}, {
				default: N(() => [R("div", zg, [R("p", Bg, n(Y(f)("rechnungswerk", "Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.")), 1), J(Tu, {
					modelValue: l.value,
					"onUpdate:modelValue": s[1] ||= (e) => l.value = e,
					onSelect: y
				}, null, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["name"])) : w("", !0),
			J(Ed, {
				open: o.value !== null,
				name: Y(f)("rechnungswerk", "Kunde löschen"),
				message: o.value ? Y(f)("rechnungswerk", "„{name}“ wirklich löschen?", { name: o.value.name }) : "",
				confirmLabel: Y(f)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: s[4] ||= (e) => o.value = null,
				onConfirm: S
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-1eff74a5"]]), Hg = {
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
}, Ug = ["aria-hidden", "aria-label"], Wg = [
	"fill",
	"width",
	"height"
], Gg = { d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" }, Kg = { key: 0 };
function qg(e, r, i, a, o, s) {
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
	}, [R("path", Gg, [i.title ? (p(), q("title", Kg, n(i.title), 1)) : w("", !0)])], 8, Wg))], 16, Ug);
}
var Jg = /*#__PURE__*/ Q(Hg, [["render", qg]]), Yg = { class: "rw-view" }, Xg = {
	key: 2,
	class: "rw-section"
}, Zg = { class: "rw-hint" }, Qg = { class: "rw-form-row" }, $g = { class: "rw-field" }, e_ = { class: "rw-field" }, t_ = { class: "rw-field" }, n_ = {
	key: 3,
	class: "rw-action-bar"
}, r_ = /* @__PURE__ */ r({
	__name: "MyContactView",
	setup(e) {
		let t = j(null), r = j(""), i = j(""), a = j(!1);
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
		return (e, s) => (p(), q("div", Yg, [
			R("h2", null, n(Y(f)("rechnungswerk", "Mein Kontakt")), 1),
			r.value ? (p(), F(Y(it), {
				key: 0,
				type: "error",
				text: r.value
			}, null, 8, ["text"])) : w("", !0),
			i.value ? (p(), F(Y(it), {
				key: 1,
				type: "success",
				text: i.value
			}, null, 8, ["text"])) : w("", !0),
			t.value ? (p(), q("section", Xg, [
				R("h3", null, n(Y(f)("rechnungswerk", "Mein Verkäufer-Ansprechpartner")), 1),
				R("p", Zg, n(Y(f)("rechnungswerk", "Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.")), 1),
				R("div", Qg, [
					R("label", $g, [R("span", null, n(Y(f)("rechnungswerk", "Name")), 1), G(R("input", {
						"onUpdate:modelValue": s[0] ||= (e) => t.value.person = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[E, t.value.person]])]),
					R("label", e_, [R("span", null, n(Y(f)("rechnungswerk", "Telefon")), 1), G(R("input", {
						"onUpdate:modelValue": s[1] ||= (e) => t.value.phone = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[E, t.value.phone]])]),
					R("label", t_, [R("span", null, n(Y(f)("rechnungswerk", "E-Mail")), 1), G(R("input", {
						"onUpdate:modelValue": s[2] ||= (e) => t.value.email = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[E, t.value.email]])])
				]),
				J(Y(X), {
					variant: "tertiary",
					onClick: o
				}, {
					icon: N(() => [J(La, { size: 20 })]),
					default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Aus meinem Nextcloud-Konto übernehmen")), 1)]),
					_: 1
				})
			])) : w("", !0),
			t.value ? (p(), q("div", n_, [J(Y(X), {
				variant: "primary",
				disabled: a.value,
				onClick: c
			}, {
				icon: N(() => [J(Jg, { size: 20 })]),
				default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])) : w("", !0)
		]));
	}
});
function i_(e) {
	if (typeof e != "string") return null;
	let t = e.trim().replace(/^#/, "");
	if (t.length === 3 && (t = t.split("").map((e) => e + e).join("")), !/^[0-9a-fA-F]{6}$/.test(t)) return null;
	let n = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, r = parseInt(t, 16);
	return .2126 * n(r >> 16 & 255) + .7152 * n(r >> 8 & 255) + .0722 * n(r & 255);
}
function a_(e, t) {
	let [n, r] = e > t ? [e, t] : [t, e];
	return (n + .05) / (r + .05);
}
function o_(e) {
	let t = i_(e);
	return t === null ? "#000000" : a_(t, 1) >= a_(t, 0) ? "#ffffff" : "#000000";
}
function s_(e) {
	let t = i_(e);
	return t !== null && a_(t, 1) < 4.5;
}
//#endregion
//#region src/utils/invoiceNumber.ts
function c_(e, t, n, r, i) {
	return e.replace(/\{YYYY\}/g, String(n).padStart(4, "0")).replace(/\{YY\}/g, String(n % 100).padStart(2, "0")).replace(/\{MM\}/g, String(r).padStart(2, "0")).replace(/\{DD\}/g, String(i).padStart(2, "0")).replace(/\{(#+)\}/g, (e, n) => String(t).padStart(n.length, "0"));
}
//#endregion
//#region src/utils/fileName.ts
var l_ = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue"
};
function u_(e, t) {
	let n = (e) => String(e).padStart(2, "0"), r = {
		"{nummer}": t.nummer,
		"{YYYY}": String(t.date.getFullYear()),
		"{MM}": n(t.date.getMonth() + 1),
		"{DD}": n(t.date.getDate()),
		"{kunde}": t.kunde.replace(/[äöüßÄÖÜ]/g, (e) => l_[e] ?? e),
		"{typ}": t.typ
	}, i = e.replace(/\{nummer\}|\{YYYY\}|\{MM\}|\{DD\}|\{kunde\}|\{typ\}/g, (e) => r[e]);
	return i = i.replace(/[/\\:*?"<>|]/g, "-").replace(/\s+/g, " ").replace(/^[\s.]+|[\s.]+$/g, "").slice(0, 120), (i || "rechnung-1") + ".pdf";
}
//#endregion
//#region src/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
var d_ = { class: "rw-view" }, f_ = { class: "rw-settings-title" }, p_ = {
	key: 1,
	class: "settings-form"
}, m_ = { class: "rw-section" }, h_ = { class: "rw-field" }, g_ = { class: "rw-field" }, __ = { class: "rw-form-row" }, v_ = { class: "rw-field" }, y_ = { class: "rw-field" }, b_ = { class: "rw-form-row" }, x_ = { class: "rw-field" }, S_ = { class: "rw-field" }, C_ = { class: "rw-field" }, w_ = { class: "rw-hint" }, T_ = { class: "rw-section" }, E_ = { class: "rw-form-row" }, D_ = { class: "rw-field" }, O_ = { class: "rw-field" }, k_ = { class: "rw-field" }, A_ = { class: "rw-hint" }, j_ = { class: "rw-section" }, M_ = { class: "rw-field rw-field--inline" }, N_ = { class: "rw-accent" }, P_ = ["aria-label"], F_ = { class: "rw-field" }, I_ = { class: "rw-accent-preview" }, L_ = { class: "rw-hint" }, R_ = {
	key: 0,
	class: "rw-hint"
}, z_ = { class: "rw-field" }, B_ = { class: "rw-logo" }, V_ = ["src", "alt"], H_ = {
	key: 1,
	class: "rw-logo__empty"
}, U_ = { class: "rw-logo__actions" }, W_ = { class: "rw-hint" }, G_ = { class: "rw-section" }, K_ = { class: "rw-field" }, q_ = { class: "rw-hint" }, J_ = { class: "rw-field rw-reset-mode" }, Y_ = { class: "rw-hint" }, X_ = { class: "rw-section" }, Z_ = { class: "rw-field" }, Q_ = { class: "rw-hint" }, $_ = { class: "rw-field rw-reset-mode" }, ev = { class: "rw-hint" }, tv = { class: "rw-section" }, nv = { class: "rw-field" }, rv = { class: "rw-hint" }, iv = { class: "rw-section" }, av = {
	key: 0,
	class: "rw-field"
}, ov = ["placeholder"], sv = { class: "rw-hint" }, cv = {
	key: 1,
	class: "rw-field tax-rate-field"
}, lv = ["value"], uv = { class: "rw-section" }, dv = { class: "rw-field rw-field--narrow" }, fv = { class: "rw-hint" }, pv = { class: "rw-section" }, mv = { class: "rw-field" }, hv = { class: "rw-hint" }, gv = { class: "rw-form-row" }, _v = { class: "rw-field" }, vv = { class: "rw-field" }, yv = { class: "rw-section" }, bv = { class: "rw-field" }, xv = { class: "rw-archive-folder" }, Sv = {
	key: 0,
	class: "rw-archive-folder__path"
}, Cv = {
	key: 1,
	class: "rw-archive-folder__empty"
}, wv = { class: "rw-field" }, Tv = ["placeholder"], Ev = { class: "rw-hint" }, Dv = { class: "rw-section" }, Ov = { class: "rw-hint" }, kv = { class: "rw-form-row" }, Av = { class: "rw-field" }, jv = { class: "rw-field rw-field--narrow" }, Mv = { class: "rw-field rw-field--narrow" }, Nv = { value: "none" }, Pv = { class: "rw-form-row" }, Fv = { class: "rw-field" }, Iv = { class: "rw-field" }, Lv = ["placeholder"], Rv = { class: "smtp-test" }, zv = { class: "rw-section" }, Bv = { class: "rw-hint" }, Vv = { class: "rw-form-row" }, Hv = { class: "rw-field" }, Uv = { class: "rw-field rw-field--narrow" }, Wv = { class: "rw-field rw-field--narrow" }, Gv = { class: "rw-form-row" }, Kv = { class: "rw-field" }, qv = { class: "rw-field" }, Jv = ["placeholder"], Yv = { class: "rw-section" }, Xv = { class: "rw-hint" }, Zv = { class: "rw-section" }, Qv = { class: "rw-hint rw-access-intro" }, $v = { class: "rw-access-group" }, ey = { class: "rw-access-label" }, ty = { class: "rw-hint rw-access-desc" }, ny = { class: "rw-access-group" }, ry = { class: "rw-access-label" }, iy = { class: "rw-hint rw-access-desc" }, ay = { class: "rw-action-bar" }, oy = [
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
		path: "/quotes",
		name: "quotes",
		component: Am
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
		component: Vg
	},
	{
		path: "/products",
		name: "products",
		component: rh
	},
	{
		path: "/text-snippets",
		name: "text-snippets",
		component: Vh
	},
	{
		path: "/me",
		name: "my-contact",
		component: r_
	},
	{
		path: "/settings",
		name: "settings",
		component: /* @__PURE__ */ Q(/* @__PURE__ */ r({
			__name: "SettingsView",
			setup(e) {
				let t = Je(), r = Pc(), i = j(null);
				function a() {
					t.push({ name: "text-snippets" });
				}
				let o = j(null), c = j(!1), l = j(""), u = j(!1), d = j(!1), m = j(!1), h = j(!1), g = j(!1), _ = j(0), y = j((/* @__PURE__ */ new Date()).getFullYear()), ee = j((/* @__PURE__ */ new Date()).getMonth() + 1), b = j((/* @__PURE__ */ new Date()).getDate()), S = j(null), te = j(0), ne = j(null), C = U(() => i.value?.accentColor || "#2c3e50"), re = U(() => ({
					background: C.value,
					color: o_(C.value)
				})), T = U(() => s_(C.value));
				function k(e) {
					i.value && (i.value.accentColor = e ?? null);
				}
				let A = j([]), M = j([]), ie = j([]), P = j(!1), ae = j(!1), I = j(""), L = null, z = j(""), B = j(""), se = j(!1), ce = j(""), le = j(!1), V = j(!1), H = U(() => i.value?.logoFileId ? jc(i.value.logoFileId) : ""), ue = U(() => P.value ? f("rechnungswerk", "Suche läuft\xA0…") : I.value.trim().length < 2 ? f("rechnungswerk", "Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.") : f("rechnungswerk", "Keine Treffer.")), de = U(() => {
					if (!i.value) return "";
					let e = i.value.numberResetMode === "continuous" || y.value === S.value ? _.value : 0;
					return c_(i.value.numberFormat || "RE-{YYYY}-{####}", e + 1, y.value, ee.value, b.value);
				}), W = U(() => {
					if (!i.value) return "";
					let e = i.value.quoteNumberResetMode === "continuous" || y.value === ne.value ? te.value : 0;
					return c_(i.value.quoteNumberFormat || "AN-{YYYY}-{####}", e + 1, y.value, ee.value, b.value);
				}), fe = U(() => i.value ? u_(i.value.fileNameFormat || "{nummer}", {
					nummer: de.value,
					date: /* @__PURE__ */ new Date(),
					kunde: "Muster GmbH",
					typ: "Rechnung"
				}) : "");
				s(async () => {
					try {
						await r.fetch(), he();
						let e = await bo();
						A.value = pe(e.admins), M.value = pe(e.users);
					} catch (e) {
						Me(e, f("rechnungswerk", "Laden fehlgeschlagen"));
					}
				});
				function pe(e) {
					return e.map((e) => ({
						id: e,
						type: e.startsWith("group:") ? "group" : "user",
						displayName: e.replace(/^(user|group):/, "")
					}));
				}
				function me(e) {
					if (I.value = e, L && clearTimeout(L), e.trim().length < 2) {
						ie.value = [], P.value = !1;
						return;
					}
					P.value = !0, L = setTimeout(async () => {
						try {
							ie.value = await So(e.trim());
						} catch {
							ie.value = [];
						} finally {
							P.value = !1;
						}
					}, 300);
				}
				function he() {
					let e = r.settings;
					e && (_.value = e.numberCounter, S.value = e.numberCounterYear, te.value = e.quoteNumberCounter, ne.value = e.quoteNumberCounterYear, o.value = e.archiveFolderPath ?? null, i.value = {
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
				function ge(e) {
					i.value && (e ? u.value = !0 : i.value.smallBusiness = !1);
				}
				function _e() {
					u.value = !1, i.value && (i.value.smallBusiness = !0);
				}
				function ve(e) {
					i.value && (e ? d.value = !0 : i.value.datevAutoSend = !1);
				}
				function ye() {
					d.value = !1, i.value && (i.value.datevAutoSend = !0);
				}
				function be(e) {
					i.value && (e ? m.value = !0 : i.value.archiveEnabled = !1);
				}
				function xe() {
					m.value = !1, i.value && (i.value.archiveEnabled = !0);
				}
				function Se(e) {
					!i.value || e === i.value.numberResetMode || (e === "continuous" ? h.value = !0 : i.value.numberResetMode = "yearly");
				}
				function Ce() {
					h.value = !1, i.value && (i.value.numberResetMode = "continuous");
				}
				function we(e) {
					!i.value || e === i.value.quoteNumberResetMode || (e === "continuous" ? g.value = !0 : i.value.quoteNumberResetMode = "yearly");
				}
				function Te() {
					g.value = !1, i.value && (i.value.quoteNumberResetMode = "continuous");
				}
				async function Ee() {
					let e;
					try {
						e = await at(f("rechnungswerk", "Zielordner für die Ablage wählen")).setMultiSelect(!1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories(!0).addButton({
							label: f("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof st) return;
						Me(e, f("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						c.value = !0, l.value = "";
						try {
							let t = await Mc(e);
							i.value && (i.value.archiveFolderId = t.archiveFolderId), o.value = t.archiveFolderPath;
						} catch (e) {
							Me(e, f("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						} finally {
							c.value = !1;
						}
					}
				}
				async function De() {
					c.value = !0, l.value = "";
					try {
						await Nc(), i.value && (i.value.archiveFolderId = null, i.value.archiveEnabled = !1), o.value = null;
					} catch (e) {
						Me(e, f("rechnungswerk", "Zielordner konnte nicht entfernt werden."));
					} finally {
						c.value = !1;
					}
				}
				async function Oe() {
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
						Me(e, f("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						V.value = !0, l.value = "";
						try {
							let t = await kc(e);
							i.value && (i.value.logoFileId = t.logoFileId);
						} catch (e) {
							Me(e, f("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						} finally {
							V.value = !1;
						}
					}
				}
				async function ke() {
					V.value = !0, l.value = "";
					try {
						await Ac(), i.value && (i.value.logoFileId = null);
					} catch (e) {
						Me(e, f("rechnungswerk", "Logo konnte nicht entfernt werden."));
					} finally {
						V.value = !1;
					}
				}
				async function Ae() {
					if (!i.value) return;
					l.value = "";
					let e = (i.value.numberFormat || "").trim();
					if (i.value.numberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(e)) {
						l.value = f("rechnungswerk", "Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen.");
						return;
					}
					let t = (i.value.quoteNumberFormat || "").trim();
					if (i.value.quoteNumberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(t)) {
						l.value = f("rechnungswerk", "Bei jährlichem Angebots-Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen.");
						return;
					}
					let n = (i.value.fileNameFormat || "").trim();
					if (n !== "" && !n.includes("{nummer}")) {
						l.value = f("rechnungswerk", "Das Dateinamen-Schema muss den Platzhalter {nummer} enthalten, damit Dateinamen eindeutig bleiben.");
						return;
					}
					ae.value = !0;
					try {
						let e = { ...i.value };
						delete e.logoFileId, delete e.archiveFolderId, z.value !== "" && (e.smtpPassword = z.value), B.value !== "" && (e.imapPassword = B.value);
						try {
							await r.save(e);
						} catch (e) {
							Me(e, f("rechnungswerk", "Speichern der Einstellungen fehlgeschlagen."));
							return;
						}
						try {
							await xo({
								admins: A.value.map((e) => e.id),
								users: M.value.map((e) => e.id)
							});
						} catch (e) {
							Me(e, f("rechnungswerk", "Einstellungen gespeichert, aber die Zugriffsrechte konnten nicht gespeichert werden. Bitte erneut speichern."));
							return;
						}
						z.value = "", B.value = "", he();
					} finally {
						ae.value = !1;
					}
				}
				async function je() {
					if (i.value?.smtpHost) {
						se.value = !0, ce.value = "";
						try {
							await Ec({
								host: i.value.smtpHost,
								port: i.value.smtpPort ?? 587,
								security: i.value.smtpSecurity || "starttls",
								user: i.value.smtpUser ?? "",
								password: z.value
							}), le.value = !0, ce.value = f("rechnungswerk", "Verbindung erfolgreich.");
						} catch (e) {
							le.value = !1, ce.value = e.message ?? f("rechnungswerk", "Verbindung fehlgeschlagen.");
						} finally {
							se.value = !1;
						}
					}
				}
				function Me(e, t) {
					l.value = e.message ?? t, console.error("[rechnungswerk] settings:", e);
				}
				return (e, t) => (p(), q("div", d_, [
					R("h2", f_, n(Y(f)("rechnungswerk", "Einstellungen")), 1),
					l.value ? (p(), F(Y(it), {
						key: 0,
						type: "error",
						text: l.value
					}, null, 8, ["text"])) : w("", !0),
					i.value ? (p(), q("div", p_, [
						R("section", m_, [
							R("h3", null, n(Y(f)("rechnungswerk", "Firma")), 1),
							R("label", h_, [R("span", null, n(Y(f)("rechnungswerk", "Firmenname")), 1), G(R("input", {
								"onUpdate:modelValue": t[0] ||= (e) => i.value.companyName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.companyName]])]),
							R("label", g_, [R("span", null, n(Y(f)("rechnungswerk", "Adresse")), 1), G(R("textarea", {
								"onUpdate:modelValue": t[1] ||= (e) => i.value.companyAddress = e,
								class: "rw-input",
								rows: "3"
							}, null, 512), [[E, i.value.companyAddress]])]),
							R("div", __, [R("label", v_, [R("span", null, n(Y(f)("rechnungswerk", "USt-IdNr.")), 1), G(R("input", {
								"onUpdate:modelValue": t[2] ||= (e) => i.value.vatId = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.vatId]])]), R("label", y_, [R("span", null, n(Y(f)("rechnungswerk", "Steuernummer")), 1), G(R("input", {
								"onUpdate:modelValue": t[3] ||= (e) => i.value.taxNumber = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.taxNumber]])])]),
							R("div", b_, [
								R("label", x_, [R("span", null, n(Y(f)("rechnungswerk", "Ansprechpartner")), 1), G(R("input", {
									"onUpdate:modelValue": t[4] ||= (e) => i.value.contactPerson = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[E, i.value.contactPerson]])]),
								R("label", S_, [R("span", null, n(Y(f)("rechnungswerk", "Telefon")), 1), G(R("input", {
									"onUpdate:modelValue": t[5] ||= (e) => i.value.contactPhone = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[E, i.value.contactPhone]])]),
								R("label", C_, [R("span", null, n(Y(f)("rechnungswerk", "Kontakt-E-Mail")), 1), G(R("input", {
									"onUpdate:modelValue": t[6] ||= (e) => i.value.contactEmail = e,
									class: "rw-input",
									type: "email"
								}, null, 512), [[E, i.value.contactEmail]])])
							]),
							R("p", w_, n(Y(f)("rechnungswerk", "Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).")), 1)
						]),
						R("section", T_, [
							R("h3", null, n(Y(f)("rechnungswerk", "Bankverbindung")), 1),
							R("div", E_, [R("label", D_, [R("span", null, n(Y(f)("rechnungswerk", "IBAN")), 1), G(R("input", {
								"onUpdate:modelValue": t[7] ||= (e) => i.value.iban = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.iban]])]), R("label", O_, [R("span", null, n(Y(f)("rechnungswerk", "BIC")), 1), G(R("input", {
								"onUpdate:modelValue": t[8] ||= (e) => i.value.bic = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.bic]])])]),
							R("label", k_, [R("span", null, n(Y(f)("rechnungswerk", "Bankname")), 1), G(R("input", {
								"onUpdate:modelValue": t[9] ||= (e) => i.value.bankName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.bankName]])]),
							J(Y(bt), {
								type: "switch",
								modelValue: i.value.girocodeEnabled,
								disabled: !i.value.iban && !i.value.girocodeEnabled,
								"onUpdate:modelValue": t[10] ||= (e) => {
									i.value && (i.value.girocodeEnabled = e);
								}
							}, {
								default: N(() => [O(n(Y(f)("rechnungswerk", "Girocode (Bezahl-QR-Code) auf Rechnungen anzeigen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							R("p", A_, n(Y(f)("rechnungswerk", "Druckt einen EPC-QR-Code neben die Bankverbindung: Kunden scannen ihn mit der Banking-App, Empfänger, Betrag und Verwendungszweck sind vorausgefüllt. Erscheint nur auf Rechnungen mit positivem Betrag, nicht auf Stornobelegen.")), 1)
						]),
						R("section", j_, [
							R("h3", null, n(Y(f)("rechnungswerk", "Branding")), 1),
							R("div", M_, [R("span", null, n(Y(f)("rechnungswerk", "Akzentfarbe")), 1), R("div", N_, [J(Y(xt), {
								modelValue: C.value,
								advancedFields: "",
								"onUpdate:modelValue": k
							}, {
								default: N(() => [R("button", {
									type: "button",
									class: "rw-accent__trigger",
									"aria-label": Y(f)("rechnungswerk", "Akzentfarbe") + ": " + C.value.toUpperCase(),
									style: v(re.value)
								}, n(C.value.toUpperCase()), 13, P_)]),
								_: 1
							}, 8, ["modelValue"]), i.value.accentColor ? (p(), F(Y(X), {
								key: 0,
								variant: "tertiary",
								onClick: t[11] ||= (e) => i.value.accentColor = null
							}, {
								default: N(() => [O(n(Y(f)("rechnungswerk", "Zurücksetzen")), 1)]),
								_: 1
							})) : w("", !0)])]),
							R("div", F_, [
								R("table", I_, [R("thead", null, [R("tr", { style: v(re.value) }, [...t[40] ||= [
									R("th", null, "Beschreibung", -1),
									R("th", { class: "num" }, "Menge", -1),
									R("th", { class: "num" }, "Einzelpreis", -1),
									R("th", { class: "num" }, "Betrag", -1)
								]], 4)]), t[41] ||= R("tbody", null, [R("tr", null, [
									R("td", null, "Beratungsleistung"),
									R("td", { class: "num" }, "2"),
									R("td", { class: "num" }, "95,00 €"),
									R("td", { class: "num" }, "190,00 €")
								])], -1)]),
								R("p", L_, n(Y(f)("rechnungswerk", "So erscheint die Kopfzeile der Positionstabelle auf der Rechnung.")), 1),
								T.value ? (p(), q("p", R_, n(Y(f)("rechnungswerk", "Auf dieser Farbe wäre weiße Schrift zu blass, deshalb steht sie schwarz auf der Rechnung. Die Farbe selbst bleibt unverändert.")), 1)) : w("", !0)
							]),
							R("div", z_, [
								R("span", null, n(Y(f)("rechnungswerk", "Firmenlogo")), 1),
								R("div", B_, [i.value.logoFileId ? (p(), q("img", {
									key: 0,
									src: H.value,
									alt: Y(f)("rechnungswerk", "Firmenlogo"),
									class: "rw-logo__preview"
								}, null, 8, V_)) : (p(), q("span", H_, n(Y(f)("rechnungswerk", "Kein Logo gewählt")), 1)), R("div", U_, [J(Y(X), {
									disabled: V.value,
									onClick: Oe
								}, {
									default: N(() => [O(n(i.value.logoFileId ? Y(f)("rechnungswerk", "Logo ändern") : Y(f)("rechnungswerk", "Logo wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]), i.value.logoFileId ? (p(), F(Y(X), {
									key: 0,
									variant: "tertiary",
									disabled: V.value,
									onClick: ke
								}, {
									default: N(() => [O(n(Y(f)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : w("", !0)])]),
								R("p", W_, n(Y(f)("rechnungswerk", "Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.")), 1)
							])
						]),
						R("section", G_, [
							R("h3", null, n(Y(f)("rechnungswerk", "Rechnungsnummer")), 1),
							R("label", K_, [R("span", null, n(Y(f)("rechnungswerk", "Format")), 1), G(R("input", {
								"onUpdate:modelValue": t[12] ||= (e) => i.value.numberFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.numberFormat]])]),
							R("p", q_, [
								O(n(Y(f)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[42] ||= R("br", null, null, -1),
								O(" " + n(Y(f)("rechnungswerk", "Vorschau: {preview}", { preview: de.value })), 1)
							]),
							R("div", J_, [
								R("span", null, n(Y(f)("rechnungswerk", "Nummernkreis")), 1),
								J(Y(bt), {
									type: "radio",
									name: "rw-reset-mode",
									value: "yearly",
									modelValue: i.value.numberResetMode,
									"onUpdate:modelValue": Se
								}, {
									default: N(() => [O(n(Y(f)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								J(Y(bt), {
									type: "radio",
									name: "rw-reset-mode",
									value: "continuous",
									modelValue: i.value.numberResetMode,
									"onUpdate:modelValue": Se
								}, {
									default: N(() => [O(n(Y(f)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							R("p", Y_, n(Y(f)("rechnungswerk", "Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.")), 1)
						]),
						R("section", X_, [
							R("h3", null, n(Y(f)("rechnungswerk", "Angebotsnummer")), 1),
							R("label", Z_, [R("span", null, n(Y(f)("rechnungswerk", "Format")), 1), G(R("input", {
								"onUpdate:modelValue": t[13] ||= (e) => i.value.quoteNumberFormat = e,
								class: "rw-input",
								type: "text",
								placeholder: "AN-{YYYY}-{####}"
							}, null, 512), [[E, i.value.quoteNumberFormat]])]),
							R("p", Q_, [
								O(n(Y(f)("rechnungswerk", "Eigener, von den Rechnungen unabhängiger Nummernkreis. Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[43] ||= R("br", null, null, -1),
								O(" " + n(Y(f)("rechnungswerk", "Vorschau: {preview}", { preview: W.value })), 1)
							]),
							R("div", $_, [
								R("span", null, n(Y(f)("rechnungswerk", "Nummernkreis")), 1),
								J(Y(bt), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "yearly",
									modelValue: i.value.quoteNumberResetMode,
									"onUpdate:modelValue": we
								}, {
									default: N(() => [O(n(Y(f)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								J(Y(bt), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "continuous",
									modelValue: i.value.quoteNumberResetMode,
									"onUpdate:modelValue": we
								}, {
									default: N(() => [O(n(Y(f)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							R("p", ev, n(Y(f)("rechnungswerk", "Angebote haben keine gesetzliche Nummernkreis-Pflicht; Lücken sind erlaubt. Bei „Jährlich zurücksetzen“ muss das Format dennoch eine Jahreskomponente enthalten.")), 1)
						]),
						R("section", tv, [
							R("h3", null, n(Y(f)("rechnungswerk", "PDF-Dateiname")), 1),
							R("label", nv, [R("span", null, n(Y(f)("rechnungswerk", "Schema")), 1), G(R("input", {
								"onUpdate:modelValue": t[14] ||= (e) => i.value.fileNameFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.fileNameFormat]])]),
							R("p", rv, [
								O(n(Y(f)("rechnungswerk", "Gilt für Download, Kundenmail und DATEV-Mail. Platzhalter: {nummer} Rechnungsnummer, {YYYY}/{MM}/{DD} Rechnungsdatum, {kunde} Kundenname, {typ} Rechnung/Storno. {nummer} ist Pflicht.")) + " ", 1),
								t[44] ||= R("br", null, null, -1),
								O(" " + n(Y(f)("rechnungswerk", "Vorschau: {preview}", { preview: fe.value })), 1)
							])
						]),
						R("section", iv, [
							R("h3", null, n(Y(f)("rechnungswerk", "Steuer")), 1),
							J(Y(bt), {
								type: "switch",
								modelValue: i.value.smallBusiness,
								"onUpdate:modelValue": ge
							}, {
								default: N(() => [O(n(Y(f)("rechnungswerk", "Kleinunternehmer nach §19 UStG (kein USt-Ausweis)")), 1)]),
								_: 1
							}, 8, ["modelValue"]),
							i.value.smallBusiness ? (p(), q("label", av, [
								R("span", null, n(Y(f)("rechnungswerk", "Hinweistext auf der Rechnung (§ 19 UStG)")), 1),
								G(R("textarea", {
									"onUpdate:modelValue": t[15] ||= (e) => i.value.smallBusinessNote = e,
									class: "rw-input",
									rows: "2",
									placeholder: Y(Rc)
								}, null, 8, ov), [[E, i.value.smallBusinessNote]]),
								R("span", sv, n(Y(f)("rechnungswerk", "Erscheint bei aktiviertem Kleinunternehmer-Status auf der Rechnung. Leer lassen für den Standardtext.")), 1)
							])) : w("", !0),
							i.value.smallBusiness ? w("", !0) : (p(), q("label", cv, [R("span", null, n(Y(f)("rechnungswerk", "Standard-USt-Satz")), 1), G(R("select", {
								"onUpdate:modelValue": t[16] ||= (e) => i.value.defaultTaxRateBp = e,
								class: "rw-input"
							}, [(p(!0), q(K, null, x(Y(Lc), (e) => (p(), q("option", {
								key: e,
								value: e
							}, n(Y(el)(e)), 9, lv))), 128))], 512), [[
								oe,
								i.value.defaultTaxRateBp,
								void 0,
								{ number: !0 }
							]])]))
						]),
						R("section", uv, [
							R("h3", null, n(Y(f)("rechnungswerk", "Zahlung")), 1),
							R("label", dv, [R("span", null, n(Y(f)("rechnungswerk", "Standard-Zahlungsziel (Tage)")), 1), G(R("input", {
								"onUpdate:modelValue": t[17] ||= (e) => i.value.defaultPaymentTermDays = e,
								class: "rw-input",
								type: "number",
								min: "0",
								step: "1",
								placeholder: "14"
							}, null, 512), [[
								E,
								i.value.defaultPaymentTermDays,
								void 0,
								{ number: !0 }
							]])]),
							R("p", fv, n(Y(f)("rechnungswerk", "Wird bei neuen Rechnungen als Zahlungsziel vorbelegt. Leer lassen für kein Standardziel.")), 1)
						]),
						R("section", pv, [
							R("h3", null, n(Y(f)("rechnungswerk", "Versand")), 1),
							R("label", mv, [R("span", null, n(Y(f)("rechnungswerk", "DATEV-Upload-Mail")), 1), G(R("input", {
								"onUpdate:modelValue": t[18] ||= (e) => i.value.datevUploadMail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[E, i.value.datevUploadMail]])]),
							J(Y(bt), {
								type: "switch",
								modelValue: i.value.datevAutoSend,
								disabled: !i.value.datevUploadMail,
								"onUpdate:modelValue": ve
							}, {
								default: N(() => [O(n(Y(f)("rechnungswerk", "E-Rechnung beim Festschreiben automatisch an DATEV senden")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							R("p", hv, n(Y(f)("rechnungswerk", "Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.")), 1),
							R("div", gv, [R("label", _v, [R("span", null, n(Y(f)("rechnungswerk", "Absender-Name")), 1), G(R("input", {
								"onUpdate:modelValue": t[19] ||= (e) => i.value.smtpFromName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.smtpFromName]])]), R("label", vv, [R("span", null, n(Y(f)("rechnungswerk", "Absender-E-Mail")), 1), G(R("input", {
								"onUpdate:modelValue": t[20] ||= (e) => i.value.smtpFromEmail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[E, i.value.smtpFromEmail]])])])
						]),
						R("section", yv, [
							R("h3", null, n(Y(f)("rechnungswerk", "Ablage in Nextcloud")), 1),
							R("div", bv, [R("span", null, n(Y(f)("rechnungswerk", "Zielordner")), 1), R("div", xv, [
								o.value ? (p(), q("span", Sv, n(o.value), 1)) : (p(), q("span", Cv, n(Y(f)("rechnungswerk", "Kein Ordner gewählt")), 1)),
								J(Y(X), {
									disabled: c.value,
									onClick: Ee
								}, {
									default: N(() => [O(n(o.value ? Y(f)("rechnungswerk", "Ordner ändern") : Y(f)("rechnungswerk", "Ordner wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]),
								o.value ? (p(), F(Y(X), {
									key: 2,
									variant: "tertiary",
									disabled: c.value,
									onClick: De
								}, {
									default: N(() => [O(n(Y(f)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : w("", !0)
							])]),
							J(Y(bt), {
								type: "switch",
								modelValue: i.value.archiveEnabled,
								disabled: !i.value.archiveFolderId,
								"onUpdate:modelValue": be
							}, {
								default: N(() => [O(n(Y(f)("rechnungswerk", "ZUGFeRD-PDF beim Festschreiben automatisch im Zielordner ablegen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							R("label", wv, [R("span", null, n(Y(f)("rechnungswerk", "Unterordner (optional)")), 1), G(R("input", {
								"onUpdate:modelValue": t[21] ||= (e) => i.value.archiveSubfolder = e,
								class: "rw-input",
								type: "text",
								placeholder: Y(f)("rechnungswerk", "z. B. {YYYY}")
							}, null, 8, Tv), [[E, i.value.archiveSubfolder]])]),
							R("p", Ev, [
								O(n(Y(f)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {MM} Monat, {DD} Tag (Rechnungsdatum). Unterordner werden bei Bedarf angelegt. Vorhandene Dateien werden nie überschrieben.")) + " ", 1),
								t[45] ||= R("br", null, null, -1),
								O(" " + n(Y(f)("rechnungswerk", "Komfort-Ablage für den Team-Zugriff. Kein revisionssicheres Archiv, die GoBD-Archivierung erfolgt über DATEV bzw. Steuerberater.")), 1)
							])
						]),
						R("section", Dv, [
							R("h3", null, n(Y(f)("rechnungswerk", "Eigenes SMTP-Konto (optional)")), 1),
							R("p", Ov, n(Y(f)("rechnungswerk", "Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).")), 1),
							R("div", kv, [
								R("label", Av, [R("span", null, n(Y(f)("rechnungswerk", "Server (Host)")), 1), G(R("input", {
									"onUpdate:modelValue": t[22] ||= (e) => i.value.smtpHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "smtp.example.com"
								}, null, 512), [[E, i.value.smtpHost]])]),
								R("label", jv, [R("span", null, n(Y(f)("rechnungswerk", "Port")), 1), G(R("input", {
									"onUpdate:modelValue": t[23] ||= (e) => i.value.smtpPort = e,
									class: "rw-input",
									type: "number",
									placeholder: "587"
								}, null, 512), [[
									E,
									i.value.smtpPort,
									void 0,
									{ number: !0 }
								]])]),
								R("label", Mv, [R("span", null, n(Y(f)("rechnungswerk", "Verschlüsselung")), 1), G(R("select", {
									"onUpdate:modelValue": t[24] ||= (e) => i.value.smtpSecurity = e,
									class: "rw-input"
								}, [
									t[46] ||= R("option", { value: "starttls" }, "STARTTLS", -1),
									t[47] ||= R("option", { value: "ssl" }, "SSL/TLS", -1),
									R("option", Nv, n(Y(f)("rechnungswerk", "Keine")), 1)
								], 512), [[oe, i.value.smtpSecurity]])])
							]),
							R("div", Pv, [R("label", Fv, [R("span", null, n(Y(f)("rechnungswerk", "Benutzer")), 1), G(R("input", {
								"onUpdate:modelValue": t[25] ||= (e) => i.value.smtpUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.smtpUser]])]), R("label", Iv, [R("span", null, n(Y(f)("rechnungswerk", "Passwort")), 1), G(R("input", {
								"onUpdate:modelValue": t[26] ||= (e) => z.value = e,
								class: "rw-input",
								type: "password",
								placeholder: i.value.smtpPasswordSet ? Y(f)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, Lv), [[E, z.value]])])]),
							R("div", Rv, [J(Y(X), {
								disabled: !i.value.smtpHost || se.value,
								onClick: je
							}, {
								default: N(() => [O(n(Y(f)("rechnungswerk", "Verbindung testen")), 1)]),
								_: 1
							}, 8, ["disabled"]), ce.value ? (p(), q("span", {
								key: 0,
								class: D(["smtp-test__result", le.value ? "rw-ok" : "rw-err"])
							}, n(ce.value), 3)) : w("", !0)])
						]),
						R("section", zv, [
							R("h3", null, n(Y(f)("rechnungswerk", "DATEV-Rückmeldung (IMAP, optional)")), 1),
							R("p", Bv, n(Y(f)("rechnungswerk", "DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.")), 1),
							R("div", Vv, [
								R("label", Hv, [R("span", null, n(Y(f)("rechnungswerk", "Server (Host)")), 1), G(R("input", {
									"onUpdate:modelValue": t[27] ||= (e) => i.value.imapHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "imap.example.com"
								}, null, 512), [[E, i.value.imapHost]])]),
								R("label", Uv, [R("span", null, n(Y(f)("rechnungswerk", "Port")), 1), G(R("input", {
									"onUpdate:modelValue": t[28] ||= (e) => i.value.imapPort = e,
									class: "rw-input",
									type: "number",
									placeholder: "993"
								}, null, 512), [[
									E,
									i.value.imapPort,
									void 0,
									{ number: !0 }
								]])]),
								R("label", Wv, [R("span", null, n(Y(f)("rechnungswerk", "Verschlüsselung")), 1), G(R("select", {
									"onUpdate:modelValue": t[29] ||= (e) => i.value.imapSecurity = e,
									class: "rw-input"
								}, [...t[48] ||= [
									R("option", { value: "ssl" }, "SSL/TLS", -1),
									R("option", { value: "starttls" }, "STARTTLS", -1),
									R("option", { value: "tls" }, "TLS", -1)
								]], 512), [[oe, i.value.imapSecurity]])])
							]),
							R("div", Gv, [R("label", Kv, [R("span", null, n(Y(f)("rechnungswerk", "Benutzer")), 1), G(R("input", {
								"onUpdate:modelValue": t[30] ||= (e) => i.value.imapUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[E, i.value.imapUser]])]), R("label", qv, [R("span", null, n(Y(f)("rechnungswerk", "Passwort")), 1), G(R("input", {
								"onUpdate:modelValue": t[31] ||= (e) => B.value = e,
								class: "rw-input",
								type: "password",
								placeholder: i.value.imapPasswordSet ? Y(f)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, Jv), [[E, B.value]])])]),
							J(Y(bt), {
								modelValue: i.value.imapCleanup,
								disabled: !i.value.imapHost,
								"onUpdate:modelValue": t[32] ||= (e) => i.value.imapCleanup = e
							}, {
								default: N(() => [O(n(Y(f)("rechnungswerk", "Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"])
						]),
						R("section", Yv, [
							R("h3", null, n(Y(f)("rechnungswerk", "Standardtexte")), 1),
							R("p", Xv, n(Y(f)("rechnungswerk", "Anrede-, Einleitungs- und Schlusstexte werden jetzt als Textbausteine verwaltet – getrennt für Rechnungen und Angebote, mit mehreren Vorlagen je Textbereich.")), 1),
							J(Y(X), { onClick: a }, {
								icon: N(() => [J(Za, { size: 20 })]),
								default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Textbausteine verwalten")), 1)]),
								_: 1
							})
						]),
						R("section", Zv, [
							R("h3", null, n(Y(f)("rechnungswerk", "Zugriff & Administration")), 1),
							R("p", Qv, n(Y(f)("rechnungswerk", "Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.")), 1),
							R("div", $v, [
								R("span", ey, n(Y(f)("rechnungswerk", "App-Administratoren")), 1),
								R("p", ty, n(Y(f)("rechnungswerk", "Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.")), 1),
								J(Y(pt), {
									modelValue: A.value,
									"onUpdate:modelValue": t[33] ||= (e) => A.value = e,
									options: ie.value,
									loading: P.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: Y(f)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: me
								}, {
									"no-options": N(() => [O(n(ue.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							]),
							R("div", ny, [
								R("span", ry, n(Y(f)("rechnungswerk", "Berechtigte Nutzer")), 1),
								R("p", iy, n(Y(f)("rechnungswerk", "Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.")), 1),
								J(Y(pt), {
									modelValue: M.value,
									"onUpdate:modelValue": t[34] ||= (e) => M.value = e,
									options: ie.value,
									loading: P.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: Y(f)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: me
								}, {
									"no-options": N(() => [O(n(ue.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							])
						]),
						R("div", ay, [J(Y(X), {
							variant: "primary",
							disabled: Y(r).saving || ae.value,
							onClick: Ae
						}, {
							icon: N(() => [J(Jg, { size: 20 })]),
							default: N(() => [O(" " + n(Y(f)("rechnungswerk", "Speichern")), 1)]),
							_: 1
						}, 8, ["disabled"])])
					])) : w("", !0),
					J(Ed, {
						open: u.value,
						name: Y(f)("rechnungswerk", "Kleinunternehmer §19 aktivieren"),
						message: Y(f)("rechnungswerk", "Damit werden künftige Rechnungen ohne Umsatzsteuer ausgewiesen (§19 UStG). Bestehende festgeschriebene Rechnungen bleiben unverändert. Fortfahren?"),
						confirmLabel: Y(f)("rechnungswerk", "Aktivieren"),
						onClose: t[35] ||= (e) => u.value = !1,
						onConfirm: _e
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Ed, {
						open: d.value,
						name: Y(f)("rechnungswerk", "Automatischen DATEV-Versand aktivieren"),
						message: Y(f)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben automatisch eine E-Mail mit der E-Rechnung an die hinterlegte DATEV-Upload-Mail gesendet. Fortfahren?"),
						confirmLabel: Y(f)("rechnungswerk", "Aktivieren"),
						onClose: t[36] ||= (e) => d.value = !1,
						onConfirm: ye
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Ed, {
						open: m.value,
						name: Y(f)("rechnungswerk", "Automatische Ablage aktivieren"),
						message: Y(f)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben die ZUGFeRD-PDF automatisch im gewählten Ordner abgelegt. Alle Personen mit Zugriff auf den Ordner können die Rechnungen sehen. Fortfahren?"),
						confirmLabel: Y(f)("rechnungswerk", "Aktivieren"),
						onClose: t[37] ||= (e) => m.value = !1,
						onConfirm: xe
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Ed, {
						open: h.value,
						name: Y(f)("rechnungswerk", "Nummernkreis auf „Fortlaufend“ stellen"),
						message: Y(f)("rechnungswerk", "Der Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Der Modus wirkt sich auf alle künftig festgeschriebenen Rechnungen aus. Fortfahren?"),
						confirmLabel: Y(f)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: t[38] ||= (e) => h.value = !1,
						onConfirm: Ce
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					J(Ed, {
						open: g.value,
						name: Y(f)("rechnungswerk", "Angebots-Nummernkreis auf „Fortlaufend“ stellen"),
						message: Y(f)("rechnungswerk", "Der Angebots-Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Fortfahren?"),
						confirmLabel: Y(f)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: t[39] ||= (e) => g.value = !1,
						onConfirm: Te
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					])
				]));
			}
		}), [["__scopeId", "data-v-81f38fd1"]])
	}
], sy = Rr({
	history: or(),
	routes: oy
});
//#endregion
//#region src/main.js
document.addEventListener("DOMContentLoaded", () => {
	let e = ie(wo);
	e.use(zt()), e.use(sy), e.use(Te, { themes: { tooltip: { delay: {
		show: 100,
		hide: 0
	} } } }), e.mount(".app-rechnungswerk");
});
//#endregion
