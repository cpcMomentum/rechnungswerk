import { _ as e, a as t, f as n, h as r, i, l as a, m as o, o as s, p as c, t as l } from "./logger-Dmvqkkgn.chunk.mjs";
import { An as u, B as d, Cn as f, D as p, E as m, En as h, Fn as g, G as _, Hn as v, Ln as y, Mn as b, Q as x, Qt as S, Un as C, Vn as ee, X as te, Xt as ne, Z as re, _n as ie, an as w, b as ae, cn as T, cr as oe, dn as E, fr as se, in as D, ir as ce, jn as le, ln as O, lr as k, nn as A, on as j, or as ue, pr as M, q as de, rn as N, sn as fe, t as pe, tr as P, un as me, ur as he, vn as F, wn as ge, y as _e, yn as ve, zn as ye } from "./createElementId-XLh0NVJk.chunk.mjs";
import { A as be, C as xe, D as Se, N as Ce, O as we, S as Te, _ as Ee, c as De, d as Oe, g as ke, h as Ae, i as je, k as Me, l as Ne, m as Pe, n as I, o as Fe, p as Ie, s as L, v as Le, w as Re } from "./chunks-DrYk3xeN.chunk.mjs";
import { t as ze } from "./NcSelect-Be1FMmY2.chunk.mjs";
import { a as Be, i as Ve, n as He, r as Ue, s as We, t as Ge } from "./NcActions-CKt3CO5b.chunk.mjs";
import { t as Ke } from "./NcCheckboxRadioSwitch-BdRECR9E.chunk.mjs";
import { n as qe, t as Je } from "./NcTextField.vue_vue_type_script_setup_true_lang-C2t_3wGw.chunk.mjs";
import "./rechnungswerk-main.mjs";
import { a as Ye, c as Xe, d as Ze, i as Qe, l as $e, n as et, o as tt, r as nt, s as rt, t as it, u as at } from "./dist-oESYOil-.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/NcDateTime.vue_vue_type_script_setup_true_lang.mjs
var ot = [
	"data-timestamp",
	"title",
	"textContent"
], st = /* @__PURE__ */ E({
	__name: "NcDateTime",
	props: {
		timestamp: {},
		format: { default: () => ({
			timeStyle: "medium",
			dateStyle: "short"
		}) },
		relativeTime: {
			type: [Boolean, String],
			default: "long"
		},
		ignoreSeconds: { type: Boolean }
	},
	setup(e) {
		let t = e, n = A(() => ({ format: t.format })), r = A(() => ({
			ignoreSeconds: t.ignoreSeconds,
			relativeTime: t.relativeTime || "long",
			update: t.relativeTime !== !1
		})), i = we(ue(() => t.timestamp), n), a = Se(ue(() => t.timestamp), r), o = A(() => t.relativeTime ? a.value : i.value);
		return (t, n) => (h(), j("span", {
			class: "nc-datetime",
			dir: "auto",
			"data-timestamp": e.timestamp,
			title: k(i),
			textContent: M(o.value)
		}, null, 8, ot));
	}
}), ct = /* @__PURE__ */ e((/* @__PURE__ */ r(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = "~";
	function i() {}
	Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));
	function a(e, t, n) {
		this.fn = e, this.context = t, this.once = n || !1;
	}
	function o(e, t, n, i, o) {
		if (typeof n != "function") throw TypeError("The listener must be a function");
		var s = new a(n, i || e, o), c = r ? r + t : t;
		return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e;
	}
	function s(e, t) {
		--e._eventsCount === 0 ? e._events = new i() : delete e._events[t];
	}
	function c() {
		this._events = new i(), this._eventsCount = 0;
	}
	c.prototype.eventNames = function() {
		var e = [], t, i;
		if (this._eventsCount === 0) return e;
		for (i in t = this._events) n.call(t, i) && e.push(r ? i.slice(1) : i);
		return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
	}, c.prototype.listeners = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		if (!n) return [];
		if (n.fn) return [n.fn];
		for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
		return o;
	}, c.prototype.listenerCount = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		return n ? n.fn ? 1 : n.length : 0;
	}, c.prototype.emit = function(e, t, n, i, a, o) {
		var s = r ? r + e : e;
		if (!this._events[s]) return !1;
		var c = this._events[s], l = arguments.length, u, d;
		if (c.fn) {
			switch (c.once && this.removeListener(e, c.fn, void 0, !0), l) {
				case 1: return c.fn.call(c.context), !0;
				case 2: return c.fn.call(c.context, t), !0;
				case 3: return c.fn.call(c.context, t, n), !0;
				case 4: return c.fn.call(c.context, t, n, i), !0;
				case 5: return c.fn.call(c.context, t, n, i, a), !0;
				case 6: return c.fn.call(c.context, t, n, i, a, o), !0;
			}
			for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
			c.fn.apply(c.context, u);
		} else {
			var f = c.length, p;
			for (d = 0; d < f; d++) switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l) {
				case 1:
					c[d].fn.call(c[d].context);
					break;
				case 2:
					c[d].fn.call(c[d].context, t);
					break;
				case 3:
					c[d].fn.call(c[d].context, t, n);
					break;
				case 4:
					c[d].fn.call(c[d].context, t, n, i);
					break;
				default:
					if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
					c[d].fn.apply(c[d].context, u);
			}
		}
		return !0;
	}, c.prototype.on = function(e, t, n) {
		return o(this, e, t, n, !1);
	}, c.prototype.once = function(e, t, n) {
		return o(this, e, t, n, !0);
	}, c.prototype.removeListener = function(e, t, n, i) {
		var a = r ? r + e : e;
		if (!this._events[a]) return this;
		if (!t) return s(this, a), this;
		var o = this._events[a];
		if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
		else {
			for (var c = 0, l = [], u = o.length; c < u; c++) (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
			l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a);
		}
		return this;
	}, c.prototype.removeAllListeners = function(e) {
		var t;
		return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i(), this._eventsCount = 0), this;
	}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t !== void 0 && (t.exports = c);
})))(), 1), lt = class e extends Error {
	name = "TimeoutError";
	constructor(t, n) {
		super(t, n), Error.captureStackTrace?.(this, e);
	}
}, ut = (e) => e.reason ?? new DOMException("This operation was aborted.", "AbortError");
function dt(e, t) {
	let { milliseconds: n, fallback: r, message: i, customTimers: a = {
		setTimeout,
		clearTimeout
	}, signal: o } = t, s, c, l = new Promise((t, l) => {
		if (typeof n != "number" || Math.sign(n) !== 1) throw TypeError(`Expected \`milliseconds\` to be a positive number, got \`${n}\``);
		if (o?.aborted) {
			l(ut(o));
			return;
		}
		if (o && (c = () => {
			l(ut(o));
		}, o.addEventListener("abort", c, { once: !0 })), e.then(t, l), n === Infinity) return;
		let u = new lt();
		s = a.setTimeout.call(void 0, () => {
			if (r) {
				try {
					t(r());
				} catch (e) {
					l(e);
				}
				return;
			}
			typeof e.cancel == "function" && e.cancel(), i === !1 ? t() : i instanceof Error ? l(i) : (u.message = i ?? `Promise timed out after ${n} milliseconds`, l(u));
		}, n);
	}).finally(() => {
		l.clear(), c && o && o.removeEventListener("abort", c);
	});
	return l.clear = () => {
		a.clearTimeout.call(void 0, s), s = void 0;
	}, l;
}
//#endregion
//#region node_modules/p-queue/dist/lower-bound.js
function ft(e, t, n) {
	let r = 0, i = e.length;
	for (; i > 0;) {
		let a = Math.trunc(i / 2), o = r + a;
		n(e[o], t) <= 0 ? (r = ++o, i -= a + 1) : i = a;
	}
	return r;
}
//#endregion
//#region node_modules/p-queue/dist/priority-queue.js
var pt = 100, mt = class {
	#e = [];
	#t = 0;
	enqueue(e, t) {
		let { priority: n = 0, id: r } = t ?? {}, { size: i } = this, a = {
			priority: n,
			id: r,
			run: e
		};
		if (i === 0) {
			this.#e.length = 0, this.#t = 0, this.#e.push(a);
			return;
		}
		if (this.#e.at(-1).priority >= n) {
			this.#e.push(a);
			return;
		}
		this.#n();
		let o = ft(this.#e, a, (e, t) => t.priority - e.priority);
		this.#e.splice(o, 0, a);
	}
	setPriority(e, t) {
		let n = this.#e.findIndex((t, n) => n >= this.#t && t.id === e);
		if (n === -1) throw ReferenceError(`No promise function with the id "${e}" exists in the queue.`);
		let [r] = this.#e.splice(n, 1);
		this.enqueue(r.run, {
			priority: t,
			id: e
		});
	}
	remove(e) {
		let t = this.#e.findIndex((t, n) => n < this.#t ? !1 : typeof e == "string" ? t.id === e : t.run === e);
		t !== -1 && this.#e.splice(t, 1);
	}
	dequeue() {
		if (this.#t === this.#e.length) return;
		let e = this.#e[this.#t];
		return this.#t++, this.#t === this.#e.length ? (this.#e.length = 0, this.#t = 0) : this.#t > pt && this.#t > this.#e.length / 2 && this.#n(), e?.run;
	}
	filter(e) {
		let t = [];
		for (let n = this.#t; n < this.#e.length; n++) {
			let r = this.#e[n];
			r.priority === e.priority && t.push(r.run);
		}
		return t;
	}
	get size() {
		return this.#e.length - this.#t;
	}
	#n() {
		this.#t !== 0 && (this.#e.splice(0, this.#t), this.#t = 0);
	}
}, ht = new class extends ct.default {
	#e;
	#t;
	#n = 0;
	#r;
	#i = !1;
	#a = !1;
	#o;
	#s = 0;
	#c;
	#l;
	#u;
	#d = [];
	#f = 0;
	#p;
	#m;
	#h = 0;
	#g;
	#_;
	#v = 1n;
	#y = /* @__PURE__ */ new Map();
	#b = /* @__PURE__ */ new Set();
	timeout;
	constructor(e) {
		if (super(), e = {
			carryoverIntervalCount: !1,
			intervalCap: Infinity,
			interval: 0,
			concurrency: Infinity,
			autoStart: !0,
			queueClass: mt,
			strict: !1,
			...e
		}, !(typeof e.intervalCap == "number" && e.intervalCap >= 1)) throw TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${e.intervalCap?.toString() ?? ""}\` (${typeof e.intervalCap})`);
		if (e.interval === void 0 || !(Number.isFinite(e.interval) && e.interval >= 0)) throw TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${e.interval?.toString() ?? ""}\` (${typeof e.interval})`);
		if (e.strict && e.interval === 0) throw TypeError("The `strict` option requires a non-zero `interval`");
		if (e.strict && e.intervalCap === Infinity) throw TypeError("The `strict` option requires a finite `intervalCap`");
		if (this.#e = e.carryoverIntervalCount ?? e.carryoverConcurrencyCount ?? !1, this.#t = e.intervalCap === Infinity || e.interval === 0, this.#r = e.intervalCap, this.#o = e.interval, this.#u = e.strict, this.#p = new e.queueClass(), this.#m = e.queueClass, this.concurrency = e.concurrency, e.timeout !== void 0 && !(Number.isFinite(e.timeout) && e.timeout > 0)) throw TypeError(`Expected \`timeout\` to be a positive finite number, got \`${e.timeout}\` (${typeof e.timeout})`);
		this.timeout = e.timeout, this.#_ = e.autoStart === !1, this.#R();
	}
	#x(e) {
		for (; this.#f < this.#d.length;) {
			let t = this.#d[this.#f];
			if (t !== void 0 && e - t >= this.#o) this.#f++;
			else break;
		}
		(this.#f > 100 && this.#f > this.#d.length / 2 || this.#f === this.#d.length) && (this.#d = this.#d.slice(this.#f), this.#f = 0);
	}
	#S(e) {
		this.#u ? this.#d.push(e) : this.#n++;
	}
	#C() {
		this.#u ? this.#d.length > this.#f && this.#d.pop() : this.#n > 0 && this.#n--;
	}
	#w() {
		return this.#d.length - this.#f;
	}
	get #T() {
		return this.#t ? !0 : this.#u ? this.#w() < this.#r : this.#n < this.#r;
	}
	get #E() {
		return this.#h < this.#g;
	}
	#D() {
		this.#h--, this.#h === 0 && this.emit("pendingZero"), this.#N(), this.emit("next");
	}
	#O() {
		this.#l = void 0, this.#F(), this.#P();
	}
	#k(e) {
		if (this.#u) {
			if (this.#x(e), this.#w() >= this.#r) {
				let t = this.#d[this.#f], n = this.#o - (e - t);
				return this.#A(n), !0;
			}
			return !1;
		}
		if (this.#c === void 0) {
			let t = this.#s - e;
			if (t < 0) this.#n = this.#e ? this.#h : 0;
			else return this.#A(t), !0;
		}
		return !1;
	}
	#A(e) {
		this.#l === void 0 && (this.#l = setTimeout(() => {
			this.#O();
		}, e));
	}
	#j() {
		this.#c &&= (clearInterval(this.#c), void 0);
	}
	#M() {
		this.#l &&= (clearTimeout(this.#l), void 0);
	}
	#N() {
		if (this.#p.size === 0) {
			if (this.#j(), this.emit("empty"), this.#h === 0) {
				if (this.#M(), this.#u && this.#f > 0) {
					let e = Date.now();
					this.#x(e);
				}
				this.emit("idle");
			}
			return !1;
		}
		let e = !1;
		if (!this.#_) {
			let t = Date.now(), n = !this.#k(t);
			if (this.#T && this.#E) {
				let r = this.#p.dequeue();
				this.#t || (this.#S(t), this.#z()), n && this.#P(), this.emit("active"), r(), e = !0;
			}
		}
		return e;
	}
	#P() {
		this.#t || this.#c !== void 0 || this.#u || (this.#c = setInterval(() => {
			this.#F();
		}, this.#o), this.#s = Date.now() + this.#o);
	}
	#F() {
		this.#u || (this.#c !== void 0 && (this.#n === 0 && this.#h === 0 ? this.#j() : this.#s = Date.now() + this.#o), this.#n = this.#e ? this.#h : 0), this.#I(), this.#z();
	}
	#I() {
		for (; this.#N(););
	}
	get concurrency() {
		return this.#g;
	}
	set concurrency(e) {
		if (!(typeof e == "number" && e >= 1)) throw TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);
		this.#g = e, this.#I();
	}
	setPriority(e, t) {
		if (typeof t != "number" || !Number.isFinite(t)) throw TypeError(`Expected \`priority\` to be a finite number, got \`${t}\` (${typeof t})`);
		this.#p.setPriority(e, t);
	}
	async add(e, t = {}) {
		if (t = {
			timeout: this.timeout,
			...t,
			id: t.id ?? (this.#v++).toString()
		}, t.timeout !== void 0 && !(Number.isFinite(t.timeout) && t.timeout > 0)) throw TypeError(`Expected \`timeout\` to be a positive finite number, got \`${t.timeout}\` (${typeof t.timeout})`);
		return new Promise((n, r) => {
			let i = Symbol(`task-${t.id}`), a = () => void 0, o = async () => {
				a(), this.#h++, this.#y.set(i, {
					id: t.id,
					priority: t.priority ?? 0,
					startTime: Date.now(),
					timeout: t.timeout
				});
				let o;
				try {
					try {
						t.signal?.throwIfAborted();
					} catch (e) {
						throw this.#B(), this.#y.delete(i), e;
					}
					let r = e({ signal: t.signal });
					if (t.timeout !== void 0 && (r = dt(Promise.resolve(r), {
						milliseconds: t.timeout,
						message: `Task timed out after ${t.timeout}ms (queue has ${this.#h} running, ${this.#p.size} waiting)`
					})), t.signal) {
						let { signal: e } = t;
						r = Promise.race([r, new Promise((t, n) => {
							o = () => {
								n(e.reason);
							}, e.addEventListener("abort", o, { once: !0 });
						})]);
					}
					let a = await r;
					n(a), this.emit("completed", a);
				} catch (e) {
					r(e), this.emit("error", e);
				} finally {
					o && t.signal?.removeEventListener("abort", o), this.#y.delete(i), queueMicrotask(() => {
						this.#D();
					});
				}
			};
			this.#p.enqueue(o, t);
			let s = () => {
				if (this.#p instanceof mt) {
					this.#p.remove(o);
					return;
				}
				this.#p.remove?.(t.id);
			};
			if (t.signal) {
				let { signal: e } = t, n = () => {
					a(), s(), r(e.reason), this.#N(), this.emit("next");
				};
				if (a = () => {
					e.removeEventListener("abort", n), this.#b.delete(a);
				}, e.aborted) {
					n();
					return;
				}
				e.addEventListener("abort", n, { once: !0 }), this.#b.add(a);
			}
			this.emit("add"), this.#N();
		});
	}
	async addAll(e, t) {
		return Promise.all(e.map(async (e) => this.add(e, t)));
	}
	start() {
		return this.#_ ? (this.#_ = !1, this.#I(), this) : this;
	}
	pause() {
		this.#_ = !0;
	}
	clear() {
		for (let e of this.#b) e();
		this.#p = new this.#m(), this.#j(), this.#V(), this.emit("empty"), this.#h === 0 && (this.#M(), this.emit("idle")), this.emit("next");
	}
	async onEmpty() {
		this.#p.size !== 0 && await this.#L("empty");
	}
	async onSizeLessThan(e) {
		this.#p.size < e || await this.#L(["next", "active"], () => this.#p.size < e);
	}
	async onIdle() {
		(this.#h !== 0 || this.#p.size !== 0) && await this.#L("idle");
	}
	async onPendingZero() {
		this.#h !== 0 && await this.#L("pendingZero");
	}
	async onRateLimit() {
		this.isRateLimited || await this.#L("rateLimit");
	}
	async onRateLimitCleared() {
		this.isRateLimited && await this.#L("rateLimitCleared");
	}
	onError() {
		return new Promise((e, t) => {
			let n = (e) => {
				this.off("error", n), t(e);
			};
			this.on("error", n);
		});
	}
	async #L(e, t) {
		let n = Array.isArray(e) ? e : [e];
		return new Promise((e) => {
			let r = () => {
				if (!t || t()) {
					for (let e of n) this.off(e, r);
					e();
				}
			};
			for (let e of n) this.on(e, r);
		});
	}
	get size() {
		return this.#p.size;
	}
	sizeBy(e) {
		return this.#p.filter(e).length;
	}
	get pending() {
		return this.#h;
	}
	get isPaused() {
		return this.#_;
	}
	#R() {
		this.#t || (this.on("add", () => {
			this.#p.size > 0 && this.#z();
		}), this.on("next", () => {
			this.#z();
		}));
	}
	#z() {
		this.#t || this.#a || (this.#a = !0, queueMicrotask(() => {
			this.#a = !1, this.#V();
		}));
	}
	#B() {
		this.#t || (this.#C(), this.#z());
	}
	#V() {
		let e = this.#i;
		if (this.#t || this.#p.size === 0) {
			e && (this.#i = !1, this.emit("rateLimitCleared"));
			return;
		}
		let t;
		if (this.#u) {
			let e = Date.now();
			this.#x(e), t = this.#w();
		} else t = this.#n;
		let n = t >= this.#r;
		n !== e && (this.#i = n, this.emit(n ? "rateLimit" : "rateLimitCleared"));
	}
	get isRateLimited() {
		return this.#i;
	}
	get isSaturated() {
		return this.#h === this.#g && this.#p.size > 0 || this.isRateLimited && this.#p.size > 0;
	}
	get runningTasks() {
		return [...this.#y.values()].map((e) => ({
			...e,
			timeoutRemaining: e.timeout ? Math.max(0, e.startTime + e.timeout - Date.now()) : void 0
		}));
	}
}({ concurrency: 5 });
function gt(e) {
	let { resolve: t, promise: n } = Promise.withResolvers();
	return ht.add(() => {
		let r = new Image();
		return r.onerror = () => t(!1), r.onload = () => t(!0), r.src = e, n;
	}), n;
}
function _t(e, t = {}) {
	t = {
		size: 32,
		cropPreview: !1,
		mimeFallback: !0,
		...t
	};
	try {
		let n = e.attributes?.previewUrl || o("/core/preview?fileId={fileid}", { fileid: e.fileid }), r;
		try {
			r = new URL(n);
		} catch {
			r = new URL(n, window.location.origin);
		}
		return r.searchParams.set("x", `${t.size}`), r.searchParams.set("y", `${t.size}`), r.searchParams.set("mimeFallback", `${t.mimeFallback}`), r.searchParams.set("a", t.cropPreview === !0 ? "0" : "1"), r.searchParams.set("c", `${e.attributes.etag}`), r;
	} catch {
		return null;
	}
}
function vt(e, t) {
	let n = P(null), r = P(!1);
	return v(() => {
		r.value = !1, n.value = _t(oe(e), oe(t || {})), n.value && oe(e).type === rt.File && gt(n.value.href).then((e) => {
			r.value = e;
		});
	}), {
		previewURL: n,
		previewLoaded: r
	};
}
//#endregion
//#region node_modules/@nextcloud/sharing/dist/share/ShareType.js
var yt;
(function(e) {
	e[e.User = 0] = "User", e[e.Group = 1] = "Group", e[e.Link = 3] = "Link", e[e.Email = 4] = "Email", e[e.Remote = 6] = "Remote", e[e.Team = 7] = "Team", e[e.Guest = 8] = "Guest", e[e.RemoteGroup = 9] = "RemoteGroup", e[e.Room = 10] = "Room", e[e.Deck = 12] = "Deck", e[e.FederatedGroup = 14] = "FederatedGroup", e[e.ScienceMesh = 15] = "ScienceMesh";
})(yt ||= {});
//#endregion
//#region node_modules/@nextcloud/sharing/dist/public.js
function bt() {
	return be("files_sharing", "isPublic", null) ?? document.querySelector("input#isPublic[type=\"hidden\"][name=\"isPublic\"][value=\"1\"]") !== null;
}
function xt() {
	return be("files_sharing", "sharingToken", null) ?? document.querySelector("input#sharingToken[type=\"hidden\"]")?.value ?? null;
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcDateTimePickerNative.mjs
m(_);
var St = /* @__PURE__ */ x(/* @__PURE__ */ E({
	inheritAttrs: !1,
	__name: "NcDateTimePickerNative",
	props: /* @__PURE__ */ ie({
		class: { default: void 0 },
		id: { default: () => pe() },
		inputClass: { default: "" },
		type: { default: "date" },
		label: { default: () => p("Please choose a date") },
		min: { default: null },
		max: { default: null },
		hideLabel: { type: Boolean }
	}, {
		modelValue: { default: null },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = y(e, "modelValue"), n = e, r = A(() => t.value ? l(t.value) : ""), i = A(() => n.max ? l(n.max) : void 0), a = A(() => n.min ? l(n.min) : void 0), o = new Set(Object.keys(qe.props)), s = A(() => Object.fromEntries(Object.entries(n).filter(([e]) => o.has(e))));
		function c(e) {
			return {
				yyyy: e.getFullYear().toString().padStart(4, "0"),
				MM: (e.getMonth() + 1).toString().padStart(2, "0"),
				dd: e.getDate().toString().padStart(2, "0"),
				hh: e.getHours().toString().padStart(2, "0"),
				mm: e.getMinutes().toString().padStart(2, "0")
			};
		}
		function l(e) {
			let { yyyy: t, MM: r, dd: i, hh: a, mm: o } = c(e);
			if (n.type === "datetime-local") return `${t}-${r}-${i}T${a}:${o}`;
			if (n.type === "date") return `${t}-${r}-${i}`;
			if (n.type === "month") return `${t}-${r}`;
			if (n.type === "time") return `${a}:${o}`;
			if (n.type === "week") {
				let n = new Date(Number.parseInt(t), 0, 1), r = Math.floor((e.getTime() - n.getTime()) / 864e5);
				return `${t}-W${Math.ceil(r / 7)}`;
			}
			return "";
		}
		function u(e) {
			let r = e.target;
			if (!r || isNaN(r.valueAsNumber)) t.value = null;
			else if (n.type === "time") {
				let e = r.value, { yyyy: n, MM: i, dd: a } = c(t.value || /* @__PURE__ */ new Date());
				t.value = /* @__PURE__ */ new Date(`${n}-${i}-${a}T${e}`);
			} else if (n.type === "month") {
				let e = (new Date(r.value).getMonth() + 1).toString().padStart(2, "0"), { yyyy: n, dd: i, hh: a, mm: o } = c(t.value || /* @__PURE__ */ new Date());
				t.value = /* @__PURE__ */ new Date(`${n}-${e}-${i}T${a}:${o}`);
			} else {
				let e = new Date(r.valueAsNumber).getTimezoneOffset() * 1e3 * 60, n = r.valueAsNumber + e;
				t.value = new Date(n);
			}
		}
		return (t, n) => (h(), D(qe, F({
			...t.$attrs,
			...s.value
		}, {
			class: "native-datetime-picker",
			label: e.hideLabel ? void 0 : e.label,
			labelOutside: e.hideLabel,
			"aria-label": e.hideLabel ? e.label : void 0,
			modelValue: r.value,
			min: a.value,
			max: i.value,
			onInput: u
		}), null, 16, [
			"label",
			"labelOutside",
			"aria-label",
			"modelValue",
			"min",
			"max"
		]));
	}
}), [["__scopeId", "data-v-7639cce1"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcPasswordField.mjs
m(d);
var Ct = /* @__PURE__ */ x(/* @__PURE__ */ E({
	__name: "NcPasswordField",
	props: /* @__PURE__ */ ie({
		class: {},
		inputClass: { default: "" },
		id: {},
		label: {},
		labelOutside: { type: Boolean },
		placeholder: {},
		showTrailingButton: {
			type: Boolean,
			default: !0
		},
		success: { type: Boolean },
		error: { type: Boolean },
		helperText: {},
		disabled: { type: Boolean },
		pill: { type: Boolean },
		checkPasswordStrength: { type: Boolean },
		minlength: { default: void 0 },
		asText: { type: Boolean }
	}, {
		modelValue: { default: "" },
		modelModifiers: {},
		visible: {
			type: Boolean,
			default: !1
		},
		visibleModifiers: {}
	}),
	emits: /* @__PURE__ */ ie(["valid", "invalid"], ["update:modelValue", "update:visible"]),
	setup(e, { expose: t, emit: r }) {
		let i = y(e, "modelValue"), a = y(e, "visible"), o = e, s = r;
		t({
			focus: b,
			select: x
		});
		let { password_policy: c } = Me(), u = ye("inputField"), d = P(""), f = P(), m = A(() => {
			let e = { ...o };
			return delete e.checkPasswordStrength, delete e.minlength, delete e.asText, delete e.error, delete e.helperText, delete e.inputClass, delete e.success, e;
		}), g = A(() => o.minlength ?? (o.checkPasswordStrength ? c?.minLength : void 0) ?? void 0);
		ee(i, () => {
			f.value = void 0, d.value = "";
		}), ee(i, Ue(_, 500));
		async function _() {
			if (o.checkPasswordStrength && i.value) try {
				let { data: e } = await Ve.post(n("apps/password_policy/api/v1/validate"), { password: i.value });
				if (f.value = e.ocs.data.passed, e.ocs.data.passed) {
					d.value = p("Password is secure"), s("valid");
					return;
				}
				d.value = e.ocs.data.reason, s("invalid");
			} catch (e) {
				l.error("Password policy returned an error", { error: e });
			}
		}
		function v() {
			a.value = !a.value;
		}
		function b(e) {
			u.value.focus(e);
		}
		function x() {
			u.value.select();
		}
		return (t, n) => (h(), D(qe, F(m.value, {
			ref: "inputField",
			modelValue: i.value,
			"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
			error: e.error || f.value === !1,
			helperText: e.helperText || d.value,
			inputClass: [e.inputClass, { "password-field__input--secure-text": !a.value && e.asText }],
			minlength: g.value,
			success: e.success || f.value === !0,
			trailingButtonLabel: a.value ? k(p)("Hide password") : k(p)("Show password"),
			type: a.value || e.asText ? "text" : "password",
			onTrailingButtonClick: v
		}), fe({
			"trailing-button-icon": C(() => [O(te, { path: a.value ? k(ae) : k(_e) }, null, 8, ["path"])]),
			_: 2
		}, [t.$slots.icon ? {
			name: "icon",
			fn: C(() => [le(t.$slots, "icon", {}, void 0, !0)]),
			key: "0"
		} : void 0]), 1040, [
			"modelValue",
			"error",
			"helperText",
			"inputClass",
			"minlength",
			"success",
			"trailingButtonLabel",
			"type"
		]));
	}
}), [["__scopeId", "data-v-cb828737"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcActionInput.mjs
m(de);
var wt = {
	name: "NcActionInput",
	components: {
		NcDateTimePickerNative: St,
		NcPasswordField: Ct,
		NcTextField: Je,
		NcColorPicker: me(() => import("./rechnungswerk-main.mjs").then((e) => e.t)),
		NcDateTimePicker: me(() => import("./NcDateTimePicker-B_QaJ-Jw.chunk.mjs").then((e) => e.t)),
		NcSelect: me(() => import("./rechnungswerk-main.mjs").then((e) => e.n))
	},
	mixins: [We],
	inheritAttrs: !1,
	props: {
		id: {
			type: String,
			default: () => "action-" + pe(),
			validator: (e) => e.trim() !== ""
		},
		inputId: {
			type: String,
			default: () => "action-input-" + pe(),
			validator: (e) => e.trim() !== ""
		},
		icon: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: "text",
			validator(e) {
				return [
					"date",
					"datetime-local",
					"month",
					"multiselect",
					"number",
					"password",
					"search",
					"tel",
					"text",
					"time",
					"url",
					"week",
					"color",
					"email"
				].includes(e);
			}
		},
		idNativeDateTimePicker: {
			type: String,
			default: "date-time-picker_id"
		},
		isNativePicker: {
			type: Boolean,
			default: !1
		},
		label: {
			type: String,
			default: null
		},
		labelOutside: {
			type: Boolean,
			default: !0
		},
		modelValue: {
			type: [
				String,
				Date,
				Number,
				Array
			],
			default: ""
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		showTrailingButton: {
			type: Boolean,
			default: !0
		},
		trailingButtonLabel: {
			type: String,
			default: p("Submit")
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
	emits: ["submit", "update:modelValue"],
	computed: {
		isIconUrl() {
			try {
				return new URL(this.icon);
			} catch {
				return !1;
			}
		},
		isMultiselectType() {
			return this.type === "multiselect";
		},
		nativeDatePickerType() {
			switch (this.type) {
				case "date":
				case "month":
				case "time":
				case "week":
				case "datetime-local": return this.type;
			}
			return !1;
		},
		datePickerType() {
			if (!this.isNativePicker) switch (this.type) {
				case "date":
				case "month":
				case "time": return this.type;
				case "datetime-local": return "datetime";
			}
			return !1;
		},
		isFocusable() {
			return !this.disabled;
		}
	},
	methods: {
		onLeave() {
			this.$refs.datetimepicker && this.$refs.datetimepicker.$refs.datepicker && this.$refs.datetimepicker.$refs.datepicker.closePopup();
		},
		onSubmit(e) {
			if (e.preventDefault(), e.stopPropagation(), !this.disabled) this.$emit("submit", e);
			else return !1;
		},
		onUpdateModelValue(e) {
			this.$emit("update:modelValue", e);
		}
	}
}, Tt = { class: "action-input__icon-wrapper" }, Et = ["disabled"], Dt = { class: "action-input__container" }, Ot = ["for"], kt = { class: "action-input__input-container" }, At = {
	key: 4,
	class: "action-input__container"
}, jt = ["for"], Mt = { class: "action-input__input-container" };
function Nt(e, t, n, r, i, a) {
	let o = b("NcDateTimePicker"), s = b("NcDateTimePickerNative"), c = b("NcSelect"), l = b("NcPasswordField"), u = b("NcColorPicker"), d = b("NcTextField");
	return h(), j("li", { class: he(["action", [{ "action--disabled": n.disabled }, e.$props.class]]) }, [N("span", {
		class: he(["action-input", {
			"action-input-picker--disabled": n.disabled,
			"action-input--visible-label": n.labelOutside && n.label,
			"action-input--tight-label": n.isNativePicker || a.isMultiselectType
		}]),
		onMouseleave: t[3] ||= (...e) => a.onLeave && a.onLeave(...e)
	}, [N("span", Tt, [le(e.$slots, "icon", {}, () => [N("span", {
		"aria-hidden": "true",
		class: he(["action-input__icon", [a.isIconUrl ? "action-input__icon--url" : n.icon]]),
		style: se({ backgroundImage: a.isIconUrl ? `url(${n.icon})` : null })
	}, null, 6)], !0)]), N("form", {
		ref: "form",
		class: "action-input__form",
		disabled: n.disabled,
		onSubmit: t[2] ||= ne((...e) => a.onSubmit && a.onSubmit(...e), ["prevent"])
	}, [N("div", Dt, [n.label && n.labelOutside && !n.isNativePicker ? (h(), j("label", {
		key: 0,
		class: he(["action-input__text-label", { "action-input__text-label--hidden": !n.labelOutside }]),
		for: n.inputId
	}, M(n.label), 11, Ot)) : w("", !0), N("div", kt, [a.datePickerType ? (h(), D(o, F({
		key: 0,
		ref: "datetimepicker",
		modelValue: n.modelValue,
		style: { "z-index": "99999999999" },
		placeholder: e.text,
		disabled: n.disabled,
		type: a.datePickerType,
		inputClass: ["mx-input", { focusable: a.isFocusable }],
		class: "action-input__datetimepicker",
		appendToBody: ""
	}, e.$attrs, { "onUpdate:modelValue": a.onUpdateModelValue }), null, 16, [
		"modelValue",
		"placeholder",
		"disabled",
		"type",
		"inputClass",
		"onUpdate:modelValue"
	])) : n.isNativePicker ? (h(), D(s, F({
		key: 1,
		id: n.idNativeDateTimePicker,
		modelValue: n.modelValue,
		label: n.label,
		type: a.nativeDatePickerType,
		inputClass: { focusable: a.isFocusable },
		class: "action-input__datetimepicker"
	}, e.$attrs, { "onUpdate:modelValue": a.onUpdateModelValue }), null, 16, [
		"id",
		"modelValue",
		"label",
		"type",
		"inputClass",
		"onUpdate:modelValue"
	])) : a.isMultiselectType ? (h(), D(c, F({
		key: 2,
		modelValue: n.modelValue,
		placeholder: e.text,
		disabled: n.disabled,
		appendToBody: !1,
		inputClass: { focusable: a.isFocusable },
		class: "action-input__multi"
	}, e.$attrs, { "onUpdate:modelValue": a.onUpdateModelValue }), null, 16, [
		"modelValue",
		"placeholder",
		"disabled",
		"inputClass",
		"onUpdate:modelValue"
	])) : n.type === "password" ? (h(), D(l, F({
		key: 3,
		id: n.inputId,
		modelValue: n.modelValue,
		label: n.label,
		labelOutside: !n.label || n.labelOutside,
		placeholder: e.text,
		disabled: n.disabled,
		inputClass: { focusable: a.isFocusable },
		showTrailingButton: n.showTrailingButton && !n.disabled
	}, e.$attrs, { "onUpdate:modelValue": a.onUpdateModelValue }), null, 16, [
		"id",
		"modelValue",
		"label",
		"labelOutside",
		"placeholder",
		"disabled",
		"inputClass",
		"showTrailingButton",
		"onUpdate:modelValue"
	])) : n.type === "color" ? (h(), j("div", At, [n.label && n.type === "color" ? (h(), j("label", {
		key: 0,
		class: he(["action-input__text-label", { "action-input__text-label--hidden": !n.labelOutside }]),
		for: n.inputId
	}, M(n.label), 11, jt)) : w("", !0), N("div", Mt, [O(u, F({
		id: "inputId",
		modelValue: n.modelValue,
		class: "colorpicker__trigger"
	}, e.$attrs, {
		"onUpdate:modelValue": a.onUpdateModelValue,
		onSubmit: t[0] ||= (t) => e.$refs.form.requestSubmit()
	}), {
		default: C(() => [N("button", {
			class: he(["colorpicker__preview", { focusable: a.isFocusable }]),
			style: se({ "background-color": n.modelValue })
		}, null, 6)]),
		_: 1
	}, 16, ["modelValue", "onUpdate:modelValue"])])])) : (h(), D(d, F({
		key: 5,
		id: n.inputId,
		modelValue: n.modelValue,
		label: n.label,
		labelOutside: !n.label || n.labelOutside,
		placeholder: e.text,
		disabled: n.disabled,
		inputClass: { focusable: a.isFocusable },
		type: n.type,
		trailingButtonIcon: "arrowEnd",
		trailingButtonLabel: n.trailingButtonLabel,
		showTrailingButton: n.showTrailingButton && !n.disabled
	}, e.$attrs, {
		onTrailingButtonClick: t[1] ||= (t) => e.$refs.form.requestSubmit(),
		"onUpdate:modelValue": a.onUpdateModelValue
	}), null, 16, [
		"id",
		"modelValue",
		"label",
		"labelOutside",
		"placeholder",
		"disabled",
		"inputClass",
		"type",
		"trailingButtonLabel",
		"showTrailingButton",
		"onUpdate:modelValue"
	]))])])], 40, Et)], 34)], 2);
}
var Pt = /* @__PURE__ */ x(wt, [["render", Nt], ["__scopeId", "data-v-7720ab60"]]), Ft = {
	2(e) {
		function t(e, t, i) {
			e instanceof RegExp && (e = n(e, i)), t instanceof RegExp && (t = n(t, i));
			var a = r(e, t, i);
			return a && {
				start: a[0],
				end: a[1],
				pre: i.slice(0, a[0]),
				body: i.slice(a[0] + e.length, a[1]),
				post: i.slice(a[1] + t.length)
			};
		}
		function n(e, t) {
			var n = t.match(e);
			return n ? n[0] : null;
		}
		function r(e, t, n) {
			var r, i, a, o, s, c = n.indexOf(e), l = n.indexOf(t, c + 1), u = c;
			if (c >= 0 && l > 0) {
				for (r = [], a = n.length; u >= 0 && !s;) u == c ? (r.push(u), c = n.indexOf(e, u + 1)) : r.length == 1 ? s = [r.pop(), l] : ((i = r.pop()) < a && (a = i, o = l), l = n.indexOf(t, u + 1)), u = c < l && c >= 0 ? c : l;
				r.length && (s = [a, o]);
			}
			return s;
		}
		e.exports = t, t.range = r;
	},
	101(e, t, n) {
		var r;
		e = n.nmd(e), function() {
			var i = (e && e.exports, typeof global == "object" && global);
			i.global !== i && i.window;
			var a = function(e) {
				this.message = e;
			};
			(a.prototype = /* @__PURE__ */ Error()).name = "InvalidCharacterError";
			var o = function(e) {
				throw new a(e);
			}, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = /[\t\n\f\r ]/g, l = {
				encode: function(e) {
					e = String(e), /[^\0-\xFF]/.test(e) && o("The string to be encoded contains characters outside of the Latin1 range.");
					for (var t, n, r, i, a = e.length % 3, c = "", l = -1, u = e.length - a; ++l < u;) t = e.charCodeAt(l) << 16, n = e.charCodeAt(++l) << 8, r = e.charCodeAt(++l), c += s.charAt((i = t + n + r) >> 18 & 63) + s.charAt(i >> 12 & 63) + s.charAt(i >> 6 & 63) + s.charAt(63 & i);
					return a == 2 ? (t = e.charCodeAt(l) << 8, n = e.charCodeAt(++l), c += s.charAt((i = t + n) >> 10) + s.charAt(i >> 4 & 63) + s.charAt(i << 2 & 63) + "=") : a == 1 && (i = e.charCodeAt(l), c += s.charAt(i >> 2) + s.charAt(i << 4 & 63) + "=="), c;
				},
				decode: function(e) {
					var t = (e = String(e).replace(c, "")).length;
					t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length), (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && o("Invalid character: the string to be decoded is not correctly encoded.");
					for (var n, r, i = 0, a = "", l = -1; ++l < t;) r = s.indexOf(e.charAt(l)), n = i % 4 ? 64 * n + r : r, i++ % 4 && (a += String.fromCharCode(255 & n >> (-2 * i & 6)));
					return a;
				},
				version: "1.0.0"
			};
			(r = function() {
				return l;
			}.call(t, n, t, e)) === void 0 || (e.exports = r);
		}();
	},
	172(e, t) {
		t.d = function(e) {
			if (!e) return 0;
			for (var t = (e = e.toString()).length, n = e.length; n--;) {
				var r = e.charCodeAt(n);
				56320 <= r && r <= 57343 && n--, 127 < r && r <= 2047 ? t++ : 2047 < r && r <= 65535 && (t += 2);
			}
			return t;
		};
	},
	526(e) {
		var t = {
			utf8: {
				stringToBytes: function(e) {
					return t.bin.stringToBytes(unescape(encodeURIComponent(e)));
				},
				bytesToString: function(e) {
					return decodeURIComponent(escape(t.bin.bytesToString(e)));
				}
			},
			bin: {
				stringToBytes: function(e) {
					for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
					return t;
				},
				bytesToString: function(e) {
					for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
					return t.join("");
				}
			}
		};
		e.exports = t;
	},
	298(e) {
		var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
			rotl: function(e, t) {
				return e << t | e >>> 32 - t;
			},
			rotr: function(e, t) {
				return e << 32 - t | e >>> t;
			},
			endian: function(e) {
				if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
				for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
				return e;
			},
			randomBytes: function(e) {
				for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
				return t;
			},
			bytesToWords: function(e) {
				for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
				return t;
			},
			wordsToBytes: function(e) {
				for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
				return t;
			},
			bytesToHex: function(e) {
				for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
				return t.join("");
			},
			hexToBytes: function(e) {
				for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
				return t;
			},
			bytesToBase64: function(e) {
				for (var n = [], r = 0; r < e.length; r += 3) for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], a = 0; a < 4; a++) 8 * r + 6 * a <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - a) & 63)) : n.push("=");
				return n.join("");
			},
			base64ToBytes: function(e) {
				e = e.replace(/[^A-Z0-9+\/]/gi, "");
				for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) i != 0 && n.push((t.indexOf(e.charAt(r - 1)) & 2 ** (-2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
				return n;
			}
		};
		e.exports = n;
	},
	135(e) {
		function t(e) {
			return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
		}
		e.exports = function(e) {
			return e != null && (t(e) || function(e) {
				return typeof e.readFloatLE == "function" && typeof e.slice == "function" && t(e.slice(0, 0));
			}(e) || !!e._isBuffer);
		};
	},
	542(e, t, n) {
		(function() {
			var t = n(298), r = n(526).utf8, i = n(135), a = n(526).bin, o = function(e, n) {
				e.constructor == String ? e = n && n.encoding === "binary" ? a.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
				for (var s = t.bytesToWords(e), c = 8 * e.length, l = 1732584193, u = -271733879, d = -1732584194, f = 271733878, p = 0; p < s.length; p++) s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
				s[c >>> 5] |= 128 << c % 32, s[14 + (c + 64 >>> 9 << 4)] = c;
				var m = o._ff, h = o._gg, g = o._hh, _ = o._ii;
				for (p = 0; p < s.length; p += 16) {
					var v = l, y = u, b = d, x = f;
					l = m(l, u, d, f, s[p + 0], 7, -680876936), f = m(f, l, u, d, s[p + 1], 12, -389564586), d = m(d, f, l, u, s[p + 2], 17, 606105819), u = m(u, d, f, l, s[p + 3], 22, -1044525330), l = m(l, u, d, f, s[p + 4], 7, -176418897), f = m(f, l, u, d, s[p + 5], 12, 1200080426), d = m(d, f, l, u, s[p + 6], 17, -1473231341), u = m(u, d, f, l, s[p + 7], 22, -45705983), l = m(l, u, d, f, s[p + 8], 7, 1770035416), f = m(f, l, u, d, s[p + 9], 12, -1958414417), d = m(d, f, l, u, s[p + 10], 17, -42063), u = m(u, d, f, l, s[p + 11], 22, -1990404162), l = m(l, u, d, f, s[p + 12], 7, 1804603682), f = m(f, l, u, d, s[p + 13], 12, -40341101), d = m(d, f, l, u, s[p + 14], 17, -1502002290), l = h(l, u = m(u, d, f, l, s[p + 15], 22, 1236535329), d, f, s[p + 1], 5, -165796510), f = h(f, l, u, d, s[p + 6], 9, -1069501632), d = h(d, f, l, u, s[p + 11], 14, 643717713), u = h(u, d, f, l, s[p + 0], 20, -373897302), l = h(l, u, d, f, s[p + 5], 5, -701558691), f = h(f, l, u, d, s[p + 10], 9, 38016083), d = h(d, f, l, u, s[p + 15], 14, -660478335), u = h(u, d, f, l, s[p + 4], 20, -405537848), l = h(l, u, d, f, s[p + 9], 5, 568446438), f = h(f, l, u, d, s[p + 14], 9, -1019803690), d = h(d, f, l, u, s[p + 3], 14, -187363961), u = h(u, d, f, l, s[p + 8], 20, 1163531501), l = h(l, u, d, f, s[p + 13], 5, -1444681467), f = h(f, l, u, d, s[p + 2], 9, -51403784), d = h(d, f, l, u, s[p + 7], 14, 1735328473), l = g(l, u = h(u, d, f, l, s[p + 12], 20, -1926607734), d, f, s[p + 5], 4, -378558), f = g(f, l, u, d, s[p + 8], 11, -2022574463), d = g(d, f, l, u, s[p + 11], 16, 1839030562), u = g(u, d, f, l, s[p + 14], 23, -35309556), l = g(l, u, d, f, s[p + 1], 4, -1530992060), f = g(f, l, u, d, s[p + 4], 11, 1272893353), d = g(d, f, l, u, s[p + 7], 16, -155497632), u = g(u, d, f, l, s[p + 10], 23, -1094730640), l = g(l, u, d, f, s[p + 13], 4, 681279174), f = g(f, l, u, d, s[p + 0], 11, -358537222), d = g(d, f, l, u, s[p + 3], 16, -722521979), u = g(u, d, f, l, s[p + 6], 23, 76029189), l = g(l, u, d, f, s[p + 9], 4, -640364487), f = g(f, l, u, d, s[p + 12], 11, -421815835), d = g(d, f, l, u, s[p + 15], 16, 530742520), l = _(l, u = g(u, d, f, l, s[p + 2], 23, -995338651), d, f, s[p + 0], 6, -198630844), f = _(f, l, u, d, s[p + 7], 10, 1126891415), d = _(d, f, l, u, s[p + 14], 15, -1416354905), u = _(u, d, f, l, s[p + 5], 21, -57434055), l = _(l, u, d, f, s[p + 12], 6, 1700485571), f = _(f, l, u, d, s[p + 3], 10, -1894986606), d = _(d, f, l, u, s[p + 10], 15, -1051523), u = _(u, d, f, l, s[p + 1], 21, -2054922799), l = _(l, u, d, f, s[p + 8], 6, 1873313359), f = _(f, l, u, d, s[p + 15], 10, -30611744), d = _(d, f, l, u, s[p + 6], 15, -1560198380), u = _(u, d, f, l, s[p + 13], 21, 1309151649), l = _(l, u, d, f, s[p + 4], 6, -145523070), f = _(f, l, u, d, s[p + 11], 10, -1120210379), d = _(d, f, l, u, s[p + 2], 15, 718787259), u = _(u, d, f, l, s[p + 9], 21, -343485551), l = l + v >>> 0, u = u + y >>> 0, d = d + b >>> 0, f = f + x >>> 0;
				}
				return t.endian([
					l,
					u,
					d,
					f
				]);
			};
			o._ff = function(e, t, n, r, i, a, o) {
				var s = e + (t & n | ~t & r) + (i >>> 0) + o;
				return (s << a | s >>> 32 - a) + t;
			}, o._gg = function(e, t, n, r, i, a, o) {
				var s = e + (t & r | n & ~r) + (i >>> 0) + o;
				return (s << a | s >>> 32 - a) + t;
			}, o._hh = function(e, t, n, r, i, a, o) {
				var s = e + (t ^ n ^ r) + (i >>> 0) + o;
				return (s << a | s >>> 32 - a) + t;
			}, o._ii = function(e, t, n, r, i, a, o) {
				var s = e + (n ^ (t | ~r)) + (i >>> 0) + o;
				return (s << a | s >>> 32 - a) + t;
			}, o._blocksize = 16, o._digestsize = 16, e.exports = function(e, n) {
				if (e == null) throw Error("Illegal argument " + e);
				var r = t.wordsToBytes(o(e, n));
				return n && n.asBytes ? r : n && n.asString ? a.bytesToString(r) : t.bytesToHex(r);
			};
		})();
	},
	285(e, t, n) {
		var r = n(2);
		e.exports = function(e, t) {
			if (!e) return [];
			var n = (t ||= {}).max == null ? 1 / 0 : t.max;
			return e.substr(0, 2) === "{}" && (e = "\\{\\}" + e.substr(2)), g(function(e) {
				return e.split("\\\\").join(i).split("\\{").join(a).split("\\}").join(o).split("\\,").join(s).split("\\.").join(c);
			}(e), n, !0).map(u);
		};
		var i = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", o = "\0CLOSE" + Math.random() + "\0", s = "\0COMMA" + Math.random() + "\0", c = "\0PERIOD" + Math.random() + "\0";
		function l(e) {
			return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
		}
		function u(e) {
			return e.split(i).join("\\").split(a).join("{").split(o).join("}").split(s).join(",").split(c).join(".");
		}
		function d(e) {
			if (!e) return [""];
			var t = [], n = r("{", "}", e);
			if (!n) return e.split(",");
			var i = n.pre, a = n.body, o = n.post, s = i.split(",");
			s[s.length - 1] += "{" + a + "}";
			var c = d(o);
			return o.length && (s[s.length - 1] += c.shift(), s.push.apply(s, c)), t.push.apply(t, s), t;
		}
		function f(e) {
			return "{" + e + "}";
		}
		function p(e) {
			return /^-?0\d/.test(e);
		}
		function m(e, t) {
			return e <= t;
		}
		function h(e, t) {
			return e >= t;
		}
		function g(e, t, n) {
			var i = [], a = r("{", "}", e);
			if (!a) return [e];
			var s = a.pre, c = a.post.length ? g(a.post, t, !1) : [""];
			if (/\$$/.test(a.pre)) for (var u = 0; u < c.length && u < t; u++) {
				var _ = s + "{" + a.body + "}" + c[u];
				i.push(_);
			}
			else {
				var v, y, b = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body), x = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body), S = b || x, C = a.body.indexOf(",") >= 0;
				if (!S && !C) return a.post.match(/,(?!,).*\}/) ? g(e = a.pre + "{" + a.body + o + a.post, t, !0) : [e];
				if (S) v = a.body.split(/\.\./);
				else if ((v = d(a.body)).length === 1 && (v = g(v[0], t, !1).map(f)).length === 1) return c.map((function(e) {
					return a.pre + v[0] + e;
				}));
				if (S) {
					var ee = l(v[0]), te = l(v[1]), ne = Math.max(v[0].length, v[1].length), re = v.length == 3 ? Math.max(Math.abs(l(v[2])), 1) : 1, ie = m;
					te < ee && (re *= -1, ie = h);
					var w = v.some(p);
					y = [];
					for (var ae = ee; ie(ae, te); ae += re) {
						var T;
						if (x) (T = String.fromCharCode(ae)) === "\\" && (T = "");
						else if (T = String(ae), w) {
							var oe = ne - T.length;
							if (oe > 0) {
								var E = Array(oe + 1).join("0");
								T = ae < 0 ? "-" + E + T.slice(1) : E + T;
							}
						}
						y.push(T);
					}
				} else {
					y = [];
					for (var se = 0; se < v.length; se++) y.push.apply(y, g(v[se], t, !1));
				}
				for (se = 0; se < y.length; se++) for (u = 0; u < c.length && i.length < t; u++) _ = s + y[se] + c[u], (!n || S || _) && i.push(_);
			}
			return i;
		}
	},
	829(e) {
		function t(e) {
			return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
				return typeof e;
			} : function(e) {
				return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			}, t(e);
		}
		function n(e) {
			var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
			return n = function(e) {
				if (e === null || (n = e, Function.toString.call(n).indexOf("[native code]") === -1)) return e;
				var n;
				if (typeof e != "function") throw TypeError("Super expression must either be null or a function");
				if (t !== void 0) {
					if (t.has(e)) return t.get(e);
					t.set(e, o);
				}
				function o() {
					return r(e, arguments, a(this).constructor);
				}
				return o.prototype = Object.create(e.prototype, { constructor: {
					value: o,
					enumerable: !1,
					writable: !0,
					configurable: !0
				} }), i(o, e);
			}, n(e);
		}
		function r(e, t, n) {
			return r = function() {
				if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
				if (typeof Proxy == "function") return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0;
				} catch {
					return !1;
				}
			}() ? Reflect.construct : function(e, t, n) {
				var r = [null];
				r.push.apply(r, t);
				var a = new (Function.bind.apply(e, r))();
				return n && i(a, n.prototype), a;
			}, r.apply(null, arguments);
		}
		function i(e, t) {
			return i = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e;
			}, i(e, t);
		}
		function a(e) {
			return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e);
			}, a(e);
		}
		var o = function(e) {
			function n(e) {
				var r;
				return function(e, t) {
					if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
				}(this, n), (r = function(e, n) {
					return !n || t(n) !== "object" && typeof n != "function" ? function(e) {
						if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					}(e) : n;
				}(this, a(n).call(this, e))).name = "ObjectPrototypeMutationError", r;
			}
			return function(e, t) {
				if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, { constructor: {
					value: e,
					writable: !0,
					configurable: !0
				} }), t && i(e, t);
			}(n, e), n;
		}(n(Error));
		function s(e, n) {
			for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {}, i = n.split("."), a = i.length, o = function(t) {
				var n = i[t];
				if (!e) return { v: void 0 };
				if (n === "+") {
					if (Array.isArray(e)) return { v: e.map((function(n, a) {
						var o = i.slice(t + 1);
						return o.length > 0 ? s(n, o.join("."), r) : r(e, a, i, t);
					})) };
					var a = i.slice(0, t).join(".");
					throw Error(`Object at wildcard (${a}) is not an array`);
				}
				e = r(e, n, i, t);
			}, c = 0; c < a; c++) {
				var l = o(c);
				if (t(l) === "object") return l.v;
			}
			return e;
		}
		function c(e, t) {
			return e.length === t + 1;
		}
		e.exports = {
			set: function(e, n, r) {
				if (t(e) != "object" || e === null || n === void 0) return e;
				if (typeof n == "number") return e[n] = r, e[n];
				try {
					return s(e, n, (function(e, t, n, i) {
						if (e === Reflect.getPrototypeOf({})) throw new o("Attempting to mutate Object.prototype");
						if (!e[t]) {
							var a = Number.isInteger(Number(n[i + 1])), s = n[i + 1] === "+";
							e[t] = a || s ? [] : {};
						}
						return c(n, i) && (e[t] = r), e[t];
					}));
				} catch (t) {
					if (t instanceof o) throw t;
					return e;
				}
			},
			get: function(e, n) {
				if (t(e) != "object" || e === null || n === void 0) return e;
				if (typeof n == "number") return e[n];
				try {
					return s(e, n, (function(e, t) {
						return e[t];
					}));
				} catch {
					return e;
				}
			},
			has: function(e, n) {
				var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
				if (t(e) != "object" || e === null || n === void 0) return !1;
				if (typeof n == "number") return n in e;
				try {
					var i = !1;
					return s(e, n, (function(e, t, n, a) {
						if (!c(n, a)) return e && e[t];
						i = r.own ? e.hasOwnProperty(t) : t in e;
					})), i;
				} catch {
					return !1;
				}
			},
			hasOwn: function(e, t, n) {
				return this.has(e, t, n || { own: !0 });
			},
			isIn: function(e, n, r) {
				var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
				if (t(e) != "object" || e === null || n === void 0) return !1;
				try {
					var a = !1, o = !1;
					return s(e, n, (function(e, n, i, s) {
						return a = a || e === r || !!e && e[n] === r, o = c(i, s) && t(e) === "object" && n in e, e && e[n];
					})), i.validPath ? a && o : a;
				} catch {
					return !1;
				}
			},
			ObjectPrototypeMutationError: o
		};
	},
	47(e, t, n) {
		var r = n(410), i = function(e) {
			return typeof e == "string";
		};
		function a(e, t) {
			for (var n = [], r = 0; r < e.length; r++) {
				var i = e[r];
				i && i !== "." && (i === ".." ? n.length && n[n.length - 1] !== ".." ? n.pop() : t && n.push("..") : n.push(i));
			}
			return n;
		}
		var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, s = {};
		function c(e) {
			return o.exec(e).slice(1);
		}
		s.resolve = function() {
			for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
				var r = n >= 0 ? arguments[n] : process.cwd();
				if (!i(r)) throw TypeError("Arguments to path.resolve must be strings");
				r && (e = r + "/" + e, t = r.charAt(0) === "/");
			}
			return (t ? "/" : "") + (e = a(e.split("/"), !t).join("/")) || ".";
		}, s.normalize = function(e) {
			var t = s.isAbsolute(e), n = e.substr(-1) === "/";
			return (e = a(e.split("/"), !t).join("/")) || t || (e = "."), e && n && (e += "/"), (t ? "/" : "") + e;
		}, s.isAbsolute = function(e) {
			return e.charAt(0) === "/";
		}, s.join = function() {
			for (var e = "", t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				if (!i(n)) throw TypeError("Arguments to path.join must be strings");
				n && (e += e ? "/" + n : n);
			}
			return s.normalize(e);
		}, s.relative = function(e, t) {
			function n(e) {
				for (var t = 0; t < e.length && e[t] === ""; t++);
				for (var n = e.length - 1; n >= 0 && e[n] === ""; n--);
				return t > n ? [] : e.slice(t, n + 1);
			}
			e = s.resolve(e).substr(1), t = s.resolve(t).substr(1);
			for (var r = n(e.split("/")), i = n(t.split("/")), a = Math.min(r.length, i.length), o = a, c = 0; c < a; c++) if (r[c] !== i[c]) {
				o = c;
				break;
			}
			var l = [];
			for (c = o; c < r.length; c++) l.push("..");
			return (l = l.concat(i.slice(o))).join("/");
		}, s._makeLong = function(e) {
			return e;
		}, s.dirname = function(e) {
			var t = c(e), n = t[0], r = t[1];
			return n || r ? (r &&= r.substr(0, r.length - 1), n + r) : ".";
		}, s.basename = function(e, t) {
			var n = c(e)[2];
			return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
		}, s.extname = function(e) {
			return c(e)[3];
		}, s.format = function(e) {
			if (!r.isObject(e)) throw TypeError("Parameter 'pathObject' must be an object, not " + typeof e);
			if (!i(e.root || "")) throw TypeError("'pathObject.root' must be a string or undefined, not " + typeof e.root);
			return (e.dir ? e.dir + s.sep : "") + (e.base || "");
		}, s.parse = function(e) {
			if (!i(e)) throw TypeError("Parameter 'pathString' must be a string, not " + typeof e);
			var t = c(e);
			if (!t || t.length !== 4) throw TypeError("Invalid path '" + e + "'");
			return t[1] = t[1] || "", t[2] = t[2] || "", t[3] = t[3] || "", {
				root: t[0],
				dir: t[0] + t[1].slice(0, t[1].length - 1),
				base: t[2],
				ext: t[3],
				name: t[2].slice(0, t[2].length - t[3].length)
			};
		}, s.sep = "/", s.delimiter = ":", e.exports = s;
	},
	647(e, t) {
		var n = Object.prototype.hasOwnProperty;
		function r(e) {
			try {
				return decodeURIComponent(e.replace(/\+/g, " "));
			} catch {
				return null;
			}
		}
		function i(e) {
			try {
				return encodeURIComponent(e);
			} catch {
				return null;
			}
		}
		t.stringify = function(e, t) {
			t ||= "";
			var r, a, o = [];
			for (a in typeof t != "string" && (t = "?"), e) if (n.call(e, a)) {
				if ((r = e[a]) || r != null && !isNaN(r) || (r = ""), a = i(a), r = i(r), a === null || r === null) continue;
				o.push(a + "=" + r);
			}
			return o.length ? t + o.join("&") : "";
		}, t.parse = function(e) {
			for (var t, n = /([^=?#&]+)=?([^&]*)/g, i = {}; t = n.exec(e);) {
				var a = r(t[1]), o = r(t[2]);
				a === null || o === null || a in i || (i[a] = o);
			}
			return i;
		};
	},
	670(e) {
		e.exports = function(e, t) {
			if (t = t.split(":")[0], !(e = +e)) return !1;
			switch (t) {
				case "http":
				case "ws": return e !== 80;
				case "https":
				case "wss": return e !== 443;
				case "ftp": return e !== 21;
				case "gopher": return e !== 70;
				case "file": return !1;
			}
			return e !== 0;
		};
	},
	737(e, t, n) {
		var r = n(670), i = n(647), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, o = /[\n\r\t]/g, s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, c = /:\d+$/, l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, u = /^[a-zA-Z]:/;
		function d(e) {
			return (e || "").toString().replace(a, "");
		}
		var f = [
			["#", "hash"],
			["?", "query"],
			function(e, t) {
				return h(t.protocol) ? e.replace(/\\/g, "/") : e;
			},
			["/", "pathname"],
			[
				"@",
				"auth",
				1
			],
			[
				NaN,
				"host",
				void 0,
				1,
				1
			],
			[
				/:(\d*)$/,
				"port",
				void 0,
				1
			],
			[
				NaN,
				"hostname",
				void 0,
				1,
				1
			]
		], p = {
			hash: 1,
			query: 1
		};
		function m(e) {
			var t, n = (typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}).location || {}, r = {}, i = typeof (e ||= n);
			if (e.protocol === "blob:") r = new _(unescape(e.pathname), {});
			else if (i === "string") for (t in r = new _(e, {}), p) delete r[t];
			else if (i === "object") {
				for (t in e) t in p || (r[t] = e[t]);
				r.slashes === void 0 && (r.slashes = s.test(e.href));
			}
			return r;
		}
		function h(e) {
			return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
		}
		function g(e, t) {
			e = (e = d(e)).replace(o, ""), t ||= {};
			var n, r = l.exec(e), i = r[1] ? r[1].toLowerCase() : "", a = !!r[2], s = !!r[3], c = 0;
			return a ? s ? (n = r[2] + r[3] + r[4], c = r[2].length + r[3].length) : (n = r[2] + r[4], c = r[2].length) : s ? (n = r[3] + r[4], c = r[3].length) : n = r[4], i === "file:" ? c >= 2 && (n = n.slice(2)) : h(i) ? n = r[4] : i ? a && (n = n.slice(2)) : c >= 2 && h(t.protocol) && (n = r[4]), {
				protocol: i,
				slashes: a || h(i),
				slashesCount: c,
				rest: n
			};
		}
		function _(e, t, n) {
			if (e = (e = d(e)).replace(o, ""), !(this instanceof _)) return new _(e, t, n);
			var a, s, c, l, p, v, y = f.slice(), b = typeof t, x = this, S = 0;
			for (b !== "object" && b !== "string" && (n = t, t = null), n && typeof n != "function" && (n = i.parse), a = !(s = g(e || "", t = m(t))).protocol && !s.slashes, x.slashes = s.slashes || a && t.slashes, x.protocol = s.protocol || t.protocol || "", e = s.rest, (s.protocol === "file:" && (s.slashesCount !== 2 || u.test(e)) || !s.slashes && (s.protocol || s.slashesCount < 2 || !h(x.protocol))) && (y[3] = [/(.*)/, "pathname"]); S < y.length; S++) typeof (l = y[S]) == "function" ? e = l(e, x) : (c = l[0], v = l[1], c == c ? typeof c == "string" ? ~(p = c === "@" ? e.lastIndexOf(c) : e.indexOf(c)) && (typeof l[2] == "number" ? (x[v] = e.slice(0, p), e = e.slice(p + l[2])) : (x[v] = e.slice(p), e = e.slice(0, p))) : (p = c.exec(e)) && (x[v] = p[1], e = e.slice(0, p.index)) : x[v] = e, x[v] = x[v] || a && l[3] && t[v] || "", l[4] && (x[v] = x[v].toLowerCase()));
			n && (x.query = n(x.query)), a && t.slashes && x.pathname.charAt(0) !== "/" && (x.pathname !== "" || t.pathname !== "") && (x.pathname = function(e, t) {
				if (e === "") return t;
				for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, i = n[r - 1], a = !1, o = 0; r--;) n[r] === "." ? n.splice(r, 1) : n[r] === ".." ? (n.splice(r, 1), o++) : o && (r === 0 && (a = !0), n.splice(r, 1), o--);
				return a && n.unshift(""), i !== "." && i !== ".." || n.push(""), n.join("/");
			}(x.pathname, t.pathname)), x.pathname.charAt(0) !== "/" && h(x.protocol) && (x.pathname = "/" + x.pathname), r(x.port, x.protocol) || (x.host = x.hostname, x.port = ""), x.username = x.password = "", x.auth &&= (~(p = x.auth.indexOf(":")) ? (x.username = x.auth.slice(0, p), x.username = encodeURIComponent(decodeURIComponent(x.username)), x.password = x.auth.slice(p + 1), x.password = encodeURIComponent(decodeURIComponent(x.password))) : x.username = encodeURIComponent(decodeURIComponent(x.auth)), x.password ? x.username + ":" + x.password : x.username), x.origin = x.protocol !== "file:" && h(x.protocol) && x.host ? x.protocol + "//" + x.host : "null", x.href = x.toString();
		}
		_.prototype = {
			set: function(e, t, n) {
				var a = this;
				switch (e) {
					case "query":
						typeof t == "string" && t.length && (t = (n || i.parse)(t)), a[e] = t;
						break;
					case "port":
						a[e] = t, r(t, a.protocol) ? t && (a.host = a.hostname + ":" + t) : (a.host = a.hostname, a[e] = "");
						break;
					case "hostname":
						a[e] = t, a.port && (t += ":" + a.port), a.host = t;
						break;
					case "host":
						a[e] = t, c.test(t) ? (t = t.split(":"), a.port = t.pop(), a.hostname = t.join(":")) : (a.hostname = t, a.port = "");
						break;
					case "protocol":
						a.protocol = t.toLowerCase(), a.slashes = !n;
						break;
					case "pathname":
					case "hash":
						if (t) {
							var o = e === "pathname" ? "/" : "#";
							a[e] = t.charAt(0) === o ? t : o + t;
						} else a[e] = t;
						break;
					case "username":
					case "password":
						a[e] = encodeURIComponent(t);
						break;
					case "auth":
						var s = t.indexOf(":");
						~s ? (a.username = t.slice(0, s), a.username = encodeURIComponent(decodeURIComponent(a.username)), a.password = t.slice(s + 1), a.password = encodeURIComponent(decodeURIComponent(a.password))) : a.username = encodeURIComponent(decodeURIComponent(t));
				}
				for (var l = 0; l < f.length; l++) {
					var u = f[l];
					u[4] && (a[u[1]] = a[u[1]].toLowerCase());
				}
				return a.auth = a.password ? a.username + ":" + a.password : a.username, a.origin = a.protocol !== "file:" && h(a.protocol) && a.host ? a.protocol + "//" + a.host : "null", a.href = a.toString(), a;
			},
			toString: function(e) {
				e && typeof e == "function" || (e = i.stringify);
				var t, n = this, r = n.host, a = n.protocol;
				a && a.charAt(a.length - 1) !== ":" && (a += ":");
				var o = a + (n.protocol && n.slashes || h(n.protocol) ? "//" : "");
				return n.username ? (o += n.username, n.password && (o += ":" + n.password), o += "@") : n.password ? (o += ":" + n.password, o += "@") : n.protocol !== "file:" && h(n.protocol) && !r && n.pathname !== "/" && (o += "@"), (r[r.length - 1] === ":" || c.test(n.hostname) && !n.port) && (r += ":"), o += r + n.pathname, (t = typeof n.query == "object" ? e(n.query) : n.query) && (o += t.charAt(0) === "?" ? t : "?" + t), n.hash && (o += n.hash), o;
			}
		}, _.extractProtocol = g, _.location = m, _.trimLeft = d, _.qs = i, e.exports = _;
	},
	410() {},
	388() {},
	805() {},
	345() {},
	800() {}
}, It = {};
function R(e) {
	var t = It[e];
	if (t !== void 0) return t.exports;
	var n = It[e] = {
		id: e,
		loaded: !1,
		exports: {}
	};
	return Ft[e].call(n.exports, n, n.exports, R), n.loaded = !0, n.exports;
}
R.n = (e) => {
	var t = e && e.__esModule ? () => e.default : () => e;
	return R.d(t, { a: t }), t;
}, R.d = (e, t) => {
	for (var n in t) R.o(t, n) && !R.o(e, n) && Object.defineProperty(e, n, {
		enumerable: !0,
		get: t[n]
	});
}, R.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), R.nmd = (e) => (e.paths = [], e.children ||= [], e);
var Lt = R(737), Rt = R.n(Lt);
function zt(e) {
	if (!Bt(e)) throw Error("Parameter was not an error");
}
function Bt(e) {
	return !!e && typeof e == "object" && (t = e, Object.prototype.toString.call(t) === "[object Error]") || e instanceof Error;
	var t;
}
var Vt = class e extends Error {
	constructor(e, t) {
		let { options: n, shortMessage: r } = function(e) {
			let t, n = "";
			if (e.length === 0) t = {};
			else if (Bt(e[0])) t = { cause: e[0] }, n = e.slice(1).join(" ") || "";
			else if (e[0] && typeof e[0] == "object") t = Object.assign({}, e[0]), n = e.slice(1).join(" ") || "";
			else {
				if (typeof e[0] != "string") throw Error("Invalid arguments passed to Layerr");
				t = {}, n = n = e.join(" ") || "";
			}
			return {
				options: t,
				shortMessage: n
			};
		}([...arguments]), i = r;
		if (n.cause && (i = `${i}: ${n.cause.message}`), super(i), this.message = i, n.name && typeof n.name == "string" ? this.name = n.name : this.name = "Layerr", n.cause && Object.defineProperty(this, "_cause", { value: n.cause }), Object.defineProperty(this, "_info", { value: {} }), n.info && typeof n.info == "object" && Object.assign(this._info, n.info), Error.captureStackTrace) {
			let e = n.constructorOpt || this.constructor;
			Error.captureStackTrace(this, e);
		}
	}
	static cause(e) {
		return zt(e), e._cause && Bt(e._cause) ? e._cause : null;
	}
	static fullStack(t) {
		zt(t);
		let n = e.cause(t);
		return n ? `${t.stack}\ncaused by: ${e.fullStack(n)}` : t.stack ?? "";
	}
	static info(t) {
		zt(t);
		let n = {}, r = e.cause(t);
		return r && Object.assign(n, e.info(r)), t._info && Object.assign(n, t._info), n;
	}
	toString() {
		let e = this.name || this.constructor.name || this.constructor.prototype.name;
		return this.message && (e = `${e}: ${this.message}`), e;
	}
}, Ht = R(47), Ut = R.n(Ht), Wt = "__PATH_SEPARATOR_POSIX__", Gt = "__PATH_SEPARATOR_WINDOWS__";
function z(e) {
	try {
		let t = e.replace(/\//g, Wt).replace(/\\\\/g, Gt);
		return encodeURIComponent(t).split(Gt).join("\\\\").split(Wt).join("/");
	} catch (e) {
		throw new Vt(e, "Failed encoding path");
	}
}
function Kt(e) {
	return e.startsWith("/") ? e : "/" + e;
}
function qt(e) {
	let t = e;
	return t[0] !== "/" && (t = "/" + t), /^.+\/$/.test(t) && (t = t.substr(0, t.length - 1)), t;
}
function Jt(e) {
	let t = new (Rt())(e).pathname;
	return t.length <= 0 && (t = "/"), qt(t);
}
function B() {
	return function() {
		return function(e) {
			var t = [];
			if (e.length === 0) return "";
			if (typeof e[0] != "string") throw TypeError("Url must be a string. Received " + e[0]);
			e[0].match(/^[^/:]+:\/*$/) && e.length > 1 && (e[0] = e.shift() + e[0]), e[0] = e[0].match(/^file:\/\/\//) ? e[0].replace(/^([^/:]+):\/*/, "$1:///") : e[0].replace(/^([^/:]+):\/*/, "$1://");
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (typeof r != "string") throw TypeError("Url must be a string. Received " + r);
				r !== "" && (n > 0 && (r = r.replace(/^[\/]+/, "")), r = n < e.length - 1 ? r.replace(/[\/]+$/, "") : r.replace(/[\/]+$/, "/"), t.push(r));
			}
			var i = t.join("/"), a = (i = i.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
			return a.shift() + (a.length > 0 ? "?" : "") + a.join("&");
		}(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
	}([...arguments].reduce(((e, t, n) => ((n === 0 || t !== "/" || t === "/" && e[e.length - 1] !== "/") && e.push(t), e)), []));
}
var Yt = R(542), Xt = R.n(Yt);
function Zt(e, t) {
	let n = e.url.replace("//", ""), r = n.indexOf("/") == -1 ? "/" : n.slice(n.indexOf("/")), i = e.method ? e.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(t.qop) && "auth", o = `00000000${t.nc}`.slice(-8), s = function(e, t, n, r, i, a, o) {
		let s = o || Xt()(`${t}:${n}:${r}`);
		return e && e.toLowerCase() === "md5-sess" ? Xt()(`${s}:${i}:${a}`) : s;
	}(t.algorithm, t.username, t.realm, t.password, t.nonce, t.cnonce, t.ha1), c = Xt()(`${i}:${r}`), l = a ? Xt()(`${s}:${t.nonce}:${o}:${t.cnonce}:${a}:${c}`) : Xt()(`${s}:${t.nonce}:${c}`), u = {
		username: t.username,
		realm: t.realm,
		nonce: t.nonce,
		uri: r,
		qop: a,
		response: l,
		nc: o,
		cnonce: t.cnonce,
		algorithm: t.algorithm,
		opaque: t.opaque
	}, d = [];
	for (let e in u) u[e] && (e === "qop" || e === "nc" || e === "algorithm" ? d.push(`${e}=${u[e]}`) : d.push(`${e}="${u[e]}"`));
	return `Digest ${d.join(", ")}`;
}
function Qt(e) {
	return (e.headers && e.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var $t = R(101), en = R.n($t);
function tn(e) {
	return en().decode(e);
}
function nn(e, t) {
	var n;
	return `Basic ${n = `${e}:${t}`, en().encode(n)}`;
}
var rn = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, an = rn.fetch.bind(rn);
rn.Headers, rn.Request, rn.Response;
var V = function(e) {
	return e.Auto = "auto", e.Digest = "digest", e.None = "none", e.Password = "password", e.Token = "token", e;
}({}), on = function(e) {
	return e.DataTypeNoLength = "data-type-no-length", e.InvalidAuthType = "invalid-auth-type", e.InvalidOutputFormat = "invalid-output-format", e.LinkUnsupportedAuthType = "link-unsupported-auth", e.InvalidUpdateRange = "invalid-update-range", e.NotSupported = "not-supported", e;
}({});
function sn(e, t, n, r, i) {
	switch (e.authType) {
		case V.Auto:
			t && n && (e.headers.Authorization = nn(t, n));
			break;
		case V.Digest:
			e.digest = function(e, t, n) {
				return {
					username: e,
					password: t,
					ha1: n,
					nc: 0,
					algorithm: "md5",
					hasDigestAuth: !1
				};
			}(t, n, i);
			break;
		case V.None: break;
		case V.Password:
			e.headers.Authorization = nn(t, n);
			break;
		case V.Token:
			e.headers.Authorization = `${(a = r).token_type} ${a.access_token}`;
			break;
		default: throw new Vt({ info: { code: on.InvalidAuthType } }, `Invalid auth type: ${e.authType}`);
	}
	var a;
}
R(345), R(800);
var cn = "@@HOTPATCHER", ln = () => {};
function un(e) {
	return {
		original: e,
		methods: [e],
		final: !1
	};
}
var dn = class {
	constructor() {
		this._configuration = {
			registry: {},
			getEmptyAction: "null"
		}, this.__type__ = cn;
	}
	get configuration() {
		return this._configuration;
	}
	get getEmptyAction() {
		return this.configuration.getEmptyAction;
	}
	set getEmptyAction(e) {
		this.configuration.getEmptyAction = e;
	}
	control(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		if (!e || e.__type__ !== cn) throw Error("Failed taking control of target HotPatcher instance: Invalid type or object");
		return Object.keys(e.configuration.registry).forEach(((n) => {
			this.configuration.registry.hasOwnProperty(n) ? t && (this.configuration.registry[n] = Object.assign({}, e.configuration.registry[n])) : this.configuration.registry[n] = Object.assign({}, e.configuration.registry[n]);
		})), e._configuration = this.configuration, this;
	}
	execute(e) {
		return (this.get(e) || ln)(...[...arguments].slice(1));
	}
	get(e) {
		let t = this.configuration.registry[e];
		if (!t) switch (this.getEmptyAction) {
			case "null": return null;
			case "throw": throw Error(`Failed handling method request: No method provided for override: ${e}`);
			default: throw Error(`Failed handling request which resulted in an empty method: Invalid empty-action specified: ${this.getEmptyAction}`);
		}
		return function() {
			var e = [...arguments];
			if (e.length === 0) throw Error("Failed creating sequence: No functions provided");
			return function() {
				let t = [...arguments], n = this;
				for (; e.length > 0;) t = [e.shift().apply(n, t)];
				return t[0];
			};
		}(...t.methods);
	}
	isPatched(e) {
		return !!this.configuration.registry[e];
	}
	patch(e, t) {
		let { chain: n = !1 } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		if (this.configuration.registry[e] && this.configuration.registry[e].final) throw Error(`Failed patching '${e}': Method marked as being final`);
		if (typeof t != "function") throw Error(`Failed patching '${e}': Provided method is not a function`);
		if (n) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(t) : this.configuration.registry[e] = un(t);
		else if (this.isPatched(e)) {
			let { original: n } = this.configuration.registry[e];
			this.configuration.registry[e] = Object.assign(un(t), { original: n });
		} else this.configuration.registry[e] = un(t);
		return this;
	}
	patchInline(e, t) {
		this.isPatched(e) || this.patch(e, t);
		var n = [...arguments].slice(2);
		return this.execute(e, ...n);
	}
	plugin(e) {
		return [...arguments].slice(1).forEach(((t) => {
			this.patch(e, t, { chain: !0 });
		})), this;
	}
	restore(e) {
		if (!this.isPatched(e)) throw Error(`Failed restoring method: No method present for key: ${e}`);
		if (typeof this.configuration.registry[e].original != "function") throw Error(`Failed restoring method: Original method not found or of invalid type for key: ${e}`);
		return this.configuration.registry[e].methods = [this.configuration.registry[e].original], this;
	}
	setFinal(e) {
		if (!this.configuration.registry.hasOwnProperty(e)) throw Error(`Failed marking '${e}' as final: No method found for key`);
		return this.configuration.registry[e].final = !0, this;
	}
}, fn = null;
function pn() {
	return fn ||= new dn(), fn;
}
function mn(e) {
	return function(e) {
		if (typeof e != "object" || !e || Object.prototype.toString.call(e) != "[object Object]") return !1;
		if (Object.getPrototypeOf(e) === null) return !0;
		let t = e;
		for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
		return Object.getPrototypeOf(e) === t;
	}(e) ? Object.assign({}, e) : Object.setPrototypeOf(Object.assign({}, e), Object.getPrototypeOf(e));
}
function hn() {
	var e = [...arguments];
	let t = null, n = [...e];
	for (; n.length > 0;) {
		let e = n.shift();
		t = t ? gn(t, e) : mn(e);
	}
	return t;
}
function gn(e, t) {
	let n = mn(e);
	return Object.keys(t).forEach(((e) => {
		n.hasOwnProperty(e) ? Array.isArray(t[e]) ? n[e] = Array.isArray(n[e]) ? [...n[e], ...t[e]] : [...t[e]] : typeof t[e] == "object" && t[e] ? n[e] = typeof n[e] == "object" && n[e] ? gn(n[e], t[e]) : mn(t[e]) : n[e] = t[e] : n[e] = t[e];
	})), n;
}
function _n(e) {
	let t = {};
	for (let n of e.keys()) t[n] = e.get(n);
	return t;
}
function vn() {
	var e = [...arguments];
	if (e.length === 0) return {};
	let t = {};
	return e.reduce(((e, n) => (Object.keys(n).forEach(((r) => {
		let i = r.toLowerCase();
		t.hasOwnProperty(i) ? e[t[i]] = n[r] : (t[i] = r, e[r] = n[r]);
	})), e)), {});
}
R(805);
var yn = typeof ArrayBuffer == "function", { toString: bn } = Object.prototype;
function xn(e) {
	return yn && (e instanceof ArrayBuffer || bn.call(e) === "[object ArrayBuffer]");
}
function Sn(e) {
	return e != null && e.constructor != null && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function Cn(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
function wn(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Tn = Cn((function(e) {
	let t = e._digest;
	return delete e._digest, t.hasDigestAuth && (e = hn(e, { headers: { Authorization: Zt(e, t) } })), wn(Dn(e), (function(n) {
		let r = !1;
		return i = function(e) {
			return r ? e : n;
		}, (a = function() {
			if (n.status == 401) return t.hasDigestAuth = function(e, t) {
				if (!Qt(e)) return !1;
				let n = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
				for (;;) {
					let r = e.headers && e.headers.get("www-authenticate") || "", i = n.exec(r);
					if (!i) break;
					t[i[1]] = i[2] || i[3];
				}
				return t.nc += 1, t.cnonce = function() {
					let e = "";
					for (let t = 0; t < 32; ++t) e = `${e}${"abcdef0123456789"[Math.floor(16 * Math.random())]}`;
					return e;
				}(), !0;
			}(n, t), function() {
				if (t.hasDigestAuth) return wn(Dn(e = hn(e, { headers: { Authorization: Zt(e, t) } })), (function(e) {
					return e.status == 401 ? t.hasDigestAuth = !1 : t.nc++, r = !0, e;
				}));
			}();
			t.nc++;
		}()) && a.then ? a.then(i) : i(a);
		var i, a;
	}));
})), En = Cn((function(e, t) {
	return wn(Dn(e), (function(n) {
		return n.ok ? (t.authType = V.Password, n) : n.status == 401 && Qt(n) ? (t.authType = V.Digest, sn(t, t.username, t.password, void 0, void 0), e._digest = t.digest, Tn(e)) : n;
	}));
})), H = Cn((function(e, t) {
	return t.authType === V.Auto ? En(e, t) : e._digest ? Tn(e) : Dn(e);
}));
function U(e, t, n) {
	let r = mn(e);
	return r.headers = vn(t.headers, r.headers || {}, n.headers || {}), n.data !== void 0 && (r.data = n.data), n.signal && (r.signal = n.signal), t.httpAgent && (r.httpAgent = t.httpAgent), t.httpsAgent && (r.httpsAgent = t.httpsAgent), t.digest && (r._digest = t.digest), typeof t.withCredentials == "boolean" && (r.withCredentials = t.withCredentials), r;
}
function Dn(e) {
	let t = pn();
	return t.patchInline("request", ((e) => t.patchInline("fetch", an, e.url, function(e) {
		let t = {}, n = { method: e.method };
		if (e.headers && (t = vn(t, e.headers)), e.data !== void 0) {
			let [r, i] = function(e) {
				if (typeof e == "string" || Sn(e) || xn(e)) return [e, {}];
				if (e && typeof e == "object") return [JSON.stringify(e), { "content-type": "application/json" }];
				throw Error("Unable to convert request body: Unexpected body type: " + typeof e);
			}(e.data);
			n.body = r, t = vn(t, i);
		}
		return e.signal && (n.signal = e.signal), e.withCredentials && (n.credentials = "include"), n.headers = t, n;
	}(e))), e);
}
var On = R(285), kn = (e) => {
	if (typeof e != "string") throw TypeError("invalid pattern");
	if (e.length > 65536) throw TypeError("pattern is too long");
}, An = {
	"[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0],
	"[:alpha:]": ["\\p{L}\\p{Nl}", !0],
	"[:ascii:]": ["\\x00-\\x7f", !1],
	"[:blank:]": ["\\p{Zs}\\t", !0],
	"[:cntrl:]": ["\\p{Cc}", !0],
	"[:digit:]": ["\\p{Nd}", !0],
	"[:graph:]": [
		"\\p{Z}\\p{C}",
		!0,
		!0
	],
	"[:lower:]": ["\\p{Ll}", !0],
	"[:print:]": ["\\p{C}", !0],
	"[:punct:]": ["\\p{P}", !0],
	"[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0],
	"[:upper:]": ["\\p{Lu}", !0],
	"[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0],
	"[:xdigit:]": ["A-Fa-f0-9", !1]
}, jn = (e) => e.replace(/[[\]\\-]/g, "\\$&"), Mn = (e) => e.join(""), Nn = (e, t) => {
	let n = t;
	if (e.charAt(n) !== "[") throw Error("not in a brace expression");
	let r = [], i = [], a = n + 1, o = !1, s = !1, c = !1, l = !1, u = n, d = "";
	t: for (; a < e.length;) {
		let t = e.charAt(a);
		if (t !== "!" && t !== "^" || a !== n + 1) {
			if (t === "]" && o && !c) {
				u = a + 1;
				break;
			}
			if (o = !0, t !== "\\" || c) {
				if (t === "[" && !c) {
					for (let [t, [o, c, l]] of Object.entries(An)) if (e.startsWith(t, a)) {
						if (d) return [
							"$.",
							!1,
							e.length - n,
							!0
						];
						a += t.length, l ? i.push(o) : r.push(o), s ||= c;
						continue t;
					}
				}
				c = !1, d ? (t > d ? r.push(jn(d) + "-" + jn(t)) : t === d && r.push(jn(t)), d = "", a++) : e.startsWith("-]", a + 1) ? (r.push(jn(t + "-")), a += 2) : e.startsWith("-", a + 1) ? (d = t, a += 2) : (r.push(jn(t)), a++);
			} else c = !0, a++;
		} else l = !0, a++;
	}
	if (u < a) return [
		"",
		!1,
		0,
		!1
	];
	if (!r.length && !i.length) return [
		"$.",
		!1,
		e.length - n,
		!0
	];
	if (i.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !l) return [
		(f = r[0].length === 2 ? r[0].slice(-1) : r[0], f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")),
		!1,
		u - n,
		!1
	];
	var f;
	let p = "[" + (l ? "^" : "") + Mn(r) + "]", m = "[" + (l ? "" : "^") + Mn(i) + "]";
	return [
		r.length && i.length ? "(" + p + "|" + m + ")" : r.length ? p : m,
		s,
		u - n,
		!0
	];
}, Pn = function(e) {
	let { windowsPathsNoEscape: t = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return t ? e.replace(/\[([^\/\\])\]/g, "$1") : e.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, W, Fn = /* @__PURE__ */ new Set([
	"!",
	"?",
	"+",
	"*",
	"@"
]), In = (e) => Fn.has(e), Ln = (e) => In(e.type), Rn = /* @__PURE__ */ new Map([
	["!", ["@"]],
	["?", ["?", "@"]],
	["@", ["@"]],
	["*", [
		"*",
		"+",
		"?",
		"@"
	]],
	["+", ["+", "@"]]
]), zn = /* @__PURE__ */ new Map([
	["!", ["?"]],
	["@", ["?"]],
	["+", ["?", "*"]]
]), Bn = /* @__PURE__ */ new Map([
	["!", ["?", "@"]],
	["?", ["?", "@"]],
	["@", ["?", "@"]],
	["*", [
		"*",
		"+",
		"?",
		"@"
	]],
	["+", [
		"+",
		"@",
		"?",
		"*"
	]]
]), Vn = /* @__PURE__ */ new Map([
	["!", /* @__PURE__ */ new Map([["!", "@"]])],
	["?", /* @__PURE__ */ new Map([["*", "*"], ["+", "*"]])],
	["@", /* @__PURE__ */ new Map([
		["!", "!"],
		["?", "?"],
		["@", "@"],
		["*", "*"],
		["+", "+"]
	])],
	["+", /* @__PURE__ */ new Map([["?", "*"], ["*", "*"]])]
]), Hn = "(?!\\.)", Un = /* @__PURE__ */ new Set(["[", "."]), Wn = /* @__PURE__ */ new Set(["..", "."]), Gn = /* @__PURE__ */ new Set("().*{}+?[]^$\\!"), Kn = "[^/]", qn = Kn + "*?", Jn = Kn + "+?", Yn = class {
	type;
	#e;
	#t;
	#n = !1;
	#r = [];
	#i;
	#a;
	#o;
	#s = !1;
	#c;
	#l;
	#u = !1;
	constructor(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		this.type = e, e && (this.#t = !0), this.#i = t, this.#e = this.#i ? this.#i.#e : this, this.#c = this.#e === this ? n : this.#e.#c, this.#o = this.#e === this ? [] : this.#e.#o, e !== "!" || this.#e.#s || this.#o.push(this), this.#a = this.#i ? this.#i.#r.length : 0;
	}
	get hasMagic() {
		if (this.#t !== void 0) return this.#t;
		for (let e of this.#r) if (typeof e != "string" && (e.type || e.hasMagic)) return this.#t = !0;
		return this.#t;
	}
	toString() {
		return this.#l === void 0 ? this.#l = this.type ? this.type + "(" + this.#r.map(((e) => String(e))).join("|") + ")" : this.#r.map(((e) => String(e))).join("") : this.#l;
	}
	#d() {
		if (this !== this.#e) throw Error("should only call on root");
		if (this.#s) return this;
		let e;
		for (this.toString(), this.#s = !0; e = this.#o.pop();) {
			if (e.type !== "!") continue;
			let t = e, n = t.#i;
			for (; n;) {
				for (let r = t.#a + 1; !n.type && r < n.#r.length; r++) for (let t of e.#r) {
					if (typeof t == "string") throw Error("string part in extglob AST??");
					t.copyIn(n.#r[r]);
				}
				t = n, n = t.#i;
			}
		}
		return this;
	}
	push() {
		var e = [...arguments];
		for (let t of e) if (t !== "") {
			if (typeof t != "string" && !(t instanceof W && t.#i === this)) throw Error("invalid part: " + t);
			this.#r.push(t);
		}
	}
	toJSON() {
		let e = this.type === null ? this.#r.slice().map(((e) => typeof e == "string" ? e : e.toJSON())) : [this.type, ...this.#r.map(((e) => e.toJSON()))];
		return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === this.#e || this.#e.#s && this.#i?.type === "!") && e.push({}), e;
	}
	isStart() {
		if (this.#e === this) return !0;
		if (!this.#i?.isStart()) return !1;
		if (this.#a === 0) return !0;
		let e = this.#i;
		for (let t = 0; t < this.#a; t++) {
			let n = e.#r[t];
			if (!(n instanceof W && n.type === "!")) return !1;
		}
		return !0;
	}
	isEnd() {
		if (this.#e === this || this.#i?.type === "!") return !0;
		if (!this.#i?.isEnd()) return !1;
		if (!this.type) return this.#i?.isEnd();
		let e = this.#i ? this.#i.#r.length : 0;
		return this.#a === e - 1;
	}
	copyIn(e) {
		typeof e == "string" ? this.push(e) : this.push(e.clone(this));
	}
	clone(e) {
		let t = new W(this.type, e);
		for (let e of this.#r) t.copyIn(e);
		return t;
	}
	static #f(e, t, n, r, i) {
		let a = r.maxExtglobRecursion ?? 2, o = !1, s = !1, c = -1, l = !1;
		if (t.type === null) {
			let u = n, d = "";
			for (; u < e.length;) {
				let n = e.charAt(u++);
				if (o || n === "\\") o = !o, d += n;
				else if (s) u === c + 1 ? n !== "^" && n !== "!" || (l = !0) : n !== "]" || u === c + 2 && l || (s = !1), d += n;
				else if (n !== "[") {
					if (!r.noext && In(n) && e.charAt(u) === "(" && i <= a) {
						t.push(d), d = "";
						let a = new W(n, t);
						u = W.#f(e, a, u, r, i + 1), t.push(a);
					} else d += n;
				} else s = !0, c = u, l = !1, d += n;
			}
			return t.push(d), u;
		}
		let u = n + 1, d = new W(null, t), f = [], p = "";
		for (; u < e.length;) {
			let n = e.charAt(u++);
			if (o || n === "\\") o = !o, p += n;
			else if (s) u === c + 1 ? n !== "^" && n !== "!" || (l = !0) : n !== "]" || u === c + 2 && l || (s = !1), p += n;
			else if (n !== "[") {
				if (In(n) && e.charAt(u) === "(" && (i <= a || t && t.#h(n))) {
					let a = t && t.#h(n) ? 0 : 1;
					d.push(p), p = "";
					let o = new W(n, d);
					d.push(o), u = W.#f(e, o, u, r, i + a);
				} else if (n !== "|") {
					if (n === ")") return p === "" && t.#r.length === 0 && (t.#u = !0), d.push(p), p = "", t.push(...f, d), u;
					p += n;
				} else d.push(p), p = "", f.push(d), d = new W(null, t);
			} else s = !0, c = u, l = !1, p += n;
		}
		return t.type = null, t.#t = void 0, t.#r = [e.substring(n - 1)], u;
	}
	#p(e) {
		return this.#m(e, zn);
	}
	#m(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rn;
		if (!e || typeof e != "object" || e.type !== null || e.#r.length !== 1 || this.type === null) return !1;
		let n = e.#r[0];
		return !(!n || typeof n != "object" || n.type === null) && this.#h(n.type, t);
	}
	#h(e) {
		return !!(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Bn).get(this.type)?.includes(e);
	}
	#g(e, t) {
		let n = e.#r[0], r = new W(null, n, this.options);
		r.#r.push(""), n.push(r), this.#_(e, t);
	}
	#_(e, t) {
		let n = e.#r[0];
		this.#r.splice(t, 1, ...n.#r);
		for (let e of n.#r) typeof e == "object" && (e.#i = this);
		this.#l = void 0;
	}
	#v(e) {
		return !!Vn.get(this.type)?.has(e);
	}
	#y(e) {
		if (!e || typeof e != "object" || e.type !== null || e.#r.length !== 1 || this.type === null || this.#r.length !== 1) return !1;
		let t = e.#r[0];
		return !(!t || typeof t != "object" || t.type === null) && this.#v(t.type);
	}
	#b(e) {
		let t = Vn.get(this.type), n = e.#r[0], r = t?.get(n.type);
		if (!r) return !1;
		this.#r = n.#r;
		for (let e of this.#r) typeof e == "object" && (e.#i = this);
		this.type = r, this.#l = void 0, this.#u = !1;
	}
	#x() {
		if (Ln(this)) {
			let e = 0, t = !1;
			do {
				t = !0;
				for (let e = 0; e < this.#r.length; e++) {
					let n = this.#r[e];
					typeof n == "object" && (n.#x(), this.#m(n) ? (t = !1, this.#_(n, e)) : this.#p(n) ? (t = !1, this.#g(n, e)) : this.#y(n) && (t = !1, this.#b(n)));
				}
			} while (!t && ++e < 10);
		} else for (let e of this.#r) typeof e == "object" && e.#x();
		this.#l = void 0;
	}
	static fromGlob(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = new W(null, void 0, t);
		return W.#f(e, n, 0, t, 0), n;
	}
	toMMPattern() {
		if (this !== this.#e) return this.#e.toMMPattern();
		let e = this.toString(), [t, n, r, i] = this.toRegExpSource();
		if (!(r || this.#t || this.#c.nocase && !this.#c.nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return n;
		let a = (this.#c.nocase ? "i" : "") + (i ? "u" : "");
		return Object.assign(RegExp(`^${t}$`, a), {
			_src: t,
			_glob: e
		});
	}
	get options() {
		return this.#c;
	}
	toRegExpSource(e) {
		let t = e ?? !!this.#c.dot;
		if (this.#e === this && (this.#x(), this.#d()), !Ln(this)) {
			let n = this.isStart() && this.isEnd(), r = this.#r.map(((t) => {
				let [r, i, a, o] = typeof t == "string" ? W.#C(t, this.#t, n) : t.toRegExpSource(e);
				return this.#t = this.#t || a, this.#n = this.#n || o, r;
			})).join(""), i = "";
			if (this.isStart() && typeof this.#r[0] == "string" && (this.#r.length !== 1 || !Wn.has(this.#r[0]))) {
				let n = Un, a = t && n.has(r.charAt(0)) || r.startsWith("\\.") && n.has(r.charAt(2)) || r.startsWith("\\.\\.") && n.has(r.charAt(4)), o = !t && !e && n.has(r.charAt(0));
				i = a ? "(?!(?:^|/)\\.\\.?(?:$|/))" : o ? Hn : "";
			}
			let a = "";
			return this.isEnd() && this.#e.#s && this.#i?.type === "!" && (a = "(?:$|\\/)"), [
				i + r + a,
				Pn(r),
				this.#t = !!this.#t,
				this.#n
			];
		}
		let n = this.type === "*" || this.type === "+", r = this.type === "!" ? "(?:(?!(?:" : "(?:", i = this.#S(t);
		if (this.isStart() && this.isEnd() && !i && this.type !== "!") {
			let e = this.toString(), t = this;
			return t.#r = [e], t.type = null, t.#t = void 0, [
				e,
				Pn(this.toString()),
				!1,
				!1
			];
		}
		let a = !n || e || t ? "" : this.#S(!0);
		a === i && (a = ""), a && (i = `(?:${i})(?:${a})*?`);
		let o = "";
		return o = this.type === "!" && this.#u ? (this.isStart() && !t ? Hn : "") + Jn : r + i + (this.type === "!" ? "))" + (!this.isStart() || t || e ? "" : Hn) + "[^/]*?)" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && a ? ")" : this.type === "*" && a ? ")?" : `)${this.type}`), [
			o,
			Pn(i),
			this.#t = !!this.#t,
			this.#n
		];
	}
	#S(e) {
		return this.#r.map(((t) => {
			if (typeof t == "string") throw Error("string type in extglob ast??");
			let [n, r, i, a] = t.toRegExpSource(e);
			return this.#n = this.#n || a, n;
		})).filter(((e) => !(this.isStart() && this.isEnd() && !e))).join("|");
	}
	static #C(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = !1, i = "", a = !1, o = !1;
		for (let s = 0; s < e.length; s++) {
			let c = e.charAt(s);
			if (r) r = !1, i += (Gn.has(c) ? "\\" : "") + c, o = !1;
			else if (c !== "\\") {
				if (c === "[") {
					let [n, r, c, l] = Nn(e, s);
					if (c) {
						i += n, a ||= r, s += c - 1, t ||= l, o = !1;
						continue;
					}
				}
				if (c !== "*") o = !1, c === "?" ? (i += Kn, t = !0) : i += c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
				else {
					if (o) continue;
					o = !0, i += n && /^[*]+$/.test(e) ? Jn : qn, t = !0;
				}
			} else s === e.length - 1 ? i += "\\\\" : r = !0;
		}
		return [
			i,
			Pn(e),
			!!t,
			a
		];
	}
};
W = Yn;
var G = function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return kn(t), !(!n.nocomment && t.charAt(0) === "#") && new br(t, n).match(e);
}, Xn = /^\*+([^+@!?\*\[\(]*)$/, Zn = (e) => (t) => !t.startsWith(".") && t.endsWith(e), Qn = (e) => (t) => t.endsWith(e), $n = (e) => (e = e.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(e)), er = (e) => (e = e.toLowerCase(), (t) => t.toLowerCase().endsWith(e)), tr = /^\*+\.\*+$/, nr = (e) => !e.startsWith(".") && e.includes("."), rr = (e) => e !== "." && e !== ".." && e.includes("."), ir = /^\.\*+$/, ar = (e) => e !== "." && e !== ".." && e.startsWith("."), or = /^\*+$/, sr = (e) => e.length !== 0 && !e.startsWith("."), cr = (e) => e.length !== 0 && e !== "." && e !== "..", lr = /^\?+([^+@!?\*\[\(]*)?$/, ur = (e) => {
	let [t, n = ""] = e, r = mr([t]);
	return n ? (n = n.toLowerCase(), (e) => r(e) && e.toLowerCase().endsWith(n)) : r;
}, dr = (e) => {
	let [t, n = ""] = e, r = hr([t]);
	return n ? (n = n.toLowerCase(), (e) => r(e) && e.toLowerCase().endsWith(n)) : r;
}, fr = (e) => {
	let [t, n = ""] = e, r = hr([t]);
	return n ? (e) => r(e) && e.endsWith(n) : r;
}, pr = (e) => {
	let [t, n = ""] = e, r = mr([t]);
	return n ? (e) => r(e) && e.endsWith(n) : r;
}, mr = (e) => {
	let [t] = e, n = t.length;
	return (e) => e.length === n && !e.startsWith(".");
}, hr = (e) => {
	let [t] = e, n = t.length;
	return (e) => e.length === n && e !== "." && e !== "..";
}, gr = typeof process == "object" && process ? {}.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
G.sep = gr === "win32" ? "\\" : "/";
var K = Symbol("globstar **");
G.GLOBSTAR = K, G.filter = function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return (n) => G(n, e, t);
};
var _r = function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return Object.assign({}, e, t);
};
G.defaults = (e) => {
	if (!e || typeof e != "object" || !Object.keys(e).length) return G;
	let t = G;
	return Object.assign((function(n, r) {
		return t(n, r, _r(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
	}), {
		Minimatch: class extends t.Minimatch {
			constructor(t) {
				super(t, _r(e, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
			}
			static defaults(n) {
				return t.defaults(_r(e, n)).Minimatch;
			}
		},
		AST: class extends t.AST {
			constructor(t, n) {
				super(t, n, _r(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
			}
			static fromGlob(n) {
				let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				return t.AST.fromGlob(n, _r(e, r));
			}
		},
		unescape: function(n) {
			let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return t.unescape(n, _r(e, r));
		},
		escape: function(n) {
			let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return t.escape(n, _r(e, r));
		},
		filter: function(n) {
			let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return t.filter(n, _r(e, r));
		},
		defaults: (n) => t.defaults(_r(e, n)),
		makeRe: function(n) {
			let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return t.makeRe(n, _r(e, r));
		},
		braceExpand: function(n) {
			let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return t.braceExpand(n, _r(e, r));
		},
		match: function(n, r) {
			let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
			return t.match(n, r, _r(e, i));
		},
		sep: t.sep,
		GLOBSTAR: K
	});
};
var vr = function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return kn(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : On(e);
};
G.braceExpand = vr, G.makeRe = function(e) {
	return new br(e, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, G.match = function(e, t) {
	let n = new br(t, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
	return e = e.filter(((e) => n.match(e))), n.options.nonull && !e.length && e.push(t), e;
};
var yr = /[?*]|[+@!]\(.*?\)|\[|\]/, br = class {
	options;
	set;
	pattern;
	windowsPathsNoEscape;
	nonegate;
	negate;
	comment;
	empty;
	preserveMultipleSlashes;
	partial;
	globSet;
	globParts;
	nocase;
	isWindows;
	platform;
	windowsNoMagicRoot;
	maxGlobstarRecursion;
	regexp;
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		kn(e), t ||= {}, this.options = t, this.maxGlobstarRecursion = t.maxGlobstarRecursion ?? 200, this.pattern = e, this.platform = t.platform || gr, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!t.windowsPathsNoEscape || !1 === t.allowWindowsEscape, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!t.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!t.nonegate, this.comment = !1, this.empty = !1, this.partial = !!t.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = t.windowsNoMagicRoot === void 0 ? !(!this.isWindows || !this.nocase) : t.windowsNoMagicRoot, this.globSet = [], this.globParts = [], this.set = [], this.make();
	}
	hasMagic() {
		if (this.options.magicalBraces && this.set.length > 1) return !0;
		for (let e of this.set) for (let t of e) if (typeof t != "string") return !0;
		return !1;
	}
	debug() {}
	make() {
		let e = this.pattern, t = this.options;
		if (!t.nocomment && e.charAt(0) === "#") return void (this.comment = !0);
		if (!e) return void (this.empty = !0);
		this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], t.debug && (this.debug = function() {
			return console.error(...arguments);
		}), this.debug(this.pattern, this.globSet);
		let n = this.globSet.map(((e) => this.slashSplit(e)));
		this.globParts = this.preprocess(n), this.debug(this.pattern, this.globParts);
		let r = this.globParts.map(((e, t, n) => {
			if (this.isWindows && this.windowsNoMagicRoot) {
				let t = !(e[0] !== "" || e[1] !== "" || e[2] !== "?" && yr.test(e[2]) || yr.test(e[3])), n = /^[a-z]:/i.test(e[0]);
				if (t) return [...e.slice(0, 4), ...e.slice(4).map(((e) => this.parse(e)))];
				if (n) return [e[0], ...e.slice(1).map(((e) => this.parse(e)))];
			}
			return e.map(((e) => this.parse(e)));
		}));
		if (this.debug(this.pattern, r), this.set = r.filter(((e) => e.indexOf(!1) === -1)), this.isWindows) for (let e = 0; e < this.set.length; e++) {
			let t = this.set[e];
			t[0] === "" && t[1] === "" && this.globParts[e][2] === "?" && typeof t[3] == "string" && /^[a-z]:$/i.test(t[3]) && (t[2] = "?");
		}
		this.debug(this.pattern, this.set);
	}
	preprocess(e) {
		if (this.options.noglobstar) for (let t = 0; t < e.length; t++) for (let n = 0; n < e[t].length; n++) e[t][n] === "**" && (e[t][n] = "*");
		let { optimizationLevel: t = 1 } = this.options;
		return t >= 2 ? (e = this.firstPhasePreProcess(e), e = this.secondPhasePreProcess(e)) : e = t >= 1 ? this.levelOneOptimize(e) : this.adjascentGlobstarOptimize(e), e;
	}
	adjascentGlobstarOptimize(e) {
		return e.map(((e) => {
			let t = -1;
			for (; (t = e.indexOf("**", t + 1)) !== -1;) {
				let n = t;
				for (; e[n + 1] === "**";) n++;
				n !== t && e.splice(t, n - t);
			}
			return e;
		}));
	}
	levelOneOptimize(e) {
		return e.map(((e) => (e = e.reduce(((e, t) => {
			let n = e[e.length - 1];
			return t === "**" && n === "**" ? e : t === ".." && n && n !== ".." && n !== "." && n !== "**" ? (e.pop(), e) : (e.push(t), e);
		}), [])).length === 0 ? [""] : e));
	}
	levelTwoFileOptimize(e) {
		Array.isArray(e) || (e = this.slashSplit(e));
		let t = !1;
		do {
			if (t = !1, !this.preserveMultipleSlashes) {
				for (let n = 1; n < e.length - 1; n++) {
					let r = e[n];
					n === 1 && r === "" && e[0] === "" || r !== "." && r !== "" || (t = !0, e.splice(n, 1), n--);
				}
				e[0] !== "." || e.length !== 2 || e[1] !== "." && e[1] !== "" || (t = !0, e.pop());
			}
			let n = 0;
			for (; (n = e.indexOf("..", n + 1)) !== -1;) {
				let r = e[n - 1];
				r && r !== "." && r !== ".." && r !== "**" && (t = !0, e.splice(n - 1, 2), n -= 2);
			}
		} while (t);
		return e.length === 0 ? [""] : e;
	}
	firstPhasePreProcess(e) {
		let t = !1;
		do {
			t = !1;
			for (let n of e) {
				let r = -1;
				for (; (r = n.indexOf("**", r + 1)) !== -1;) {
					let i = r;
					for (; n[i + 1] === "**";) i++;
					i > r && n.splice(r + 1, i - r);
					let a = n[r + 1], o = n[r + 2], s = n[r + 3];
					if (a !== ".." || !o || o === "." || o === ".." || !s || s === "." || s === "..") continue;
					t = !0, n.splice(r, 1);
					let c = n.slice(0);
					c[r] = "**", e.push(c), r--;
				}
				if (!this.preserveMultipleSlashes) {
					for (let e = 1; e < n.length - 1; e++) {
						let r = n[e];
						e === 1 && r === "" && n[0] === "" || r !== "." && r !== "" || (t = !0, n.splice(e, 1), e--);
					}
					n[0] !== "." || n.length !== 2 || n[1] !== "." && n[1] !== "" || (t = !0, n.pop());
				}
				let i = 0;
				for (; (i = n.indexOf("..", i + 1)) !== -1;) {
					let e = n[i - 1];
					if (e && e !== "." && e !== ".." && e !== "**") {
						t = !0;
						let e = i === 1 && n[i + 1] === "**" ? ["."] : [];
						n.splice(i - 1, 2, ...e), n.length === 0 && n.push(""), i -= 2;
					}
				}
			}
		} while (t);
		return e;
	}
	secondPhasePreProcess(e) {
		for (let t = 0; t < e.length - 1; t++) for (let n = t + 1; n < e.length; n++) {
			let r = this.partsMatch(e[t], e[n], !this.preserveMultipleSlashes);
			if (r) {
				e[t] = [], e[n] = r;
				break;
			}
		}
		return e.filter(((e) => e.length));
	}
	partsMatch(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = 0, i = 0, a = [], o = "";
		for (; r < e.length && i < t.length;) if (e[r] === t[i]) a.push(o === "b" ? t[i] : e[r]), r++, i++;
		else if (n && e[r] === "**" && t[i] === e[r + 1]) a.push(e[r]), r++;
		else if (n && t[i] === "**" && e[r] === t[i + 1]) a.push(t[i]), i++;
		else if (e[r] !== "*" || !t[i] || !this.options.dot && t[i].startsWith(".") || t[i] === "**") {
			if (t[i] !== "*" || !e[r] || !this.options.dot && e[r].startsWith(".") || e[r] === "**" || o === "a") return !1;
			o = "b", a.push(t[i]), r++, i++;
		} else {
			if (o === "b") return !1;
			o = "a", a.push(e[r]), r++, i++;
		}
		return e.length === t.length && a;
	}
	parseNegate() {
		if (this.nonegate) return;
		let e = this.pattern, t = !1, n = 0;
		for (let r = 0; r < e.length && e.charAt(r) === "!"; r++) t = !t, n++;
		n && (this.pattern = e.slice(n)), this.negate = t;
	}
	matchOne(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = 0, i = 0;
		if (this.isWindows) {
			let n = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), a = !n && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), o = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), s = a ? 3 : n ? 0 : void 0, c = !o && t[0] === "" && t[1] === "" && t[2] === "?" && typeof t[3] == "string" && /^[a-z]:$/i.test(t[3]) ? 3 : o ? 0 : void 0;
			if (typeof s == "number" && typeof c == "number") {
				let [n, a] = [e[s], t[c]];
				n.toLowerCase() === a.toLowerCase() && (t[c] = n, i = c, r = s);
			}
		}
		let { optimizationLevel: a = 1 } = this.options;
		return a >= 2 && (e = this.levelTwoFileOptimize(e)), t.includes(K) ? this.#e(e, t, n, r, i) : this.#n(e, t, n, r, i);
	}
	#e(e, t, n, r, i) {
		let a = t.indexOf(K, i), o = t.lastIndexOf(K), [s, c, l] = n ? [
			t.slice(i, a),
			t.slice(a + 1),
			[]
		] : [
			t.slice(i, a),
			t.slice(a + 1, o),
			t.slice(o + 1)
		];
		if (s.length) {
			let t = e.slice(r, r + s.length);
			if (!this.#n(t, s, n, 0, 0)) return !1;
			r += s.length;
		}
		let u = 0;
		if (l.length) {
			if (l.length + r > e.length) return !1;
			let t = e.length - l.length;
			if (this.#n(e, l, n, t, 0)) u = l.length;
			else {
				if (e[e.length - 1] !== "" || r + l.length === e.length || (t--, !this.#n(e, l, n, t, 0))) return !1;
				u = l.length + 1;
			}
		}
		if (!c.length) {
			let t = !!u;
			for (let n = r; n < e.length - u; n++) {
				let r = String(e[n]);
				if (t = !0, r === "." || r === ".." || !this.options.dot && r.startsWith(".")) return !1;
			}
			return n || t;
		}
		let d = [[[], 0]], f = d[0], p = 0, m = [0];
		for (let e of c) e === K ? (m.push(p), f = [[], 0], d.push(f)) : (f[0].push(e), p++);
		let h = d.length - 1, g = e.length - u;
		for (let e of d) e[1] = g - (m[h--] + e[0].length);
		return !!this.#t(e, d, r, 0, n, 0, !!u);
	}
	#t(e, t, n, r, i, a, o) {
		let s = t[r];
		if (!s) {
			for (let t = n; t < e.length; t++) {
				o = !0;
				let n = e[t];
				if (n === "." || n === ".." || !this.options.dot && n.startsWith(".")) return !1;
			}
			return o;
		}
		let [c, l] = s;
		for (; n <= l;) {
			if (this.#n(e.slice(0, n + c.length), c, i, n, 0) && a < this.maxGlobstarRecursion) {
				let s = this.#t(e, t, n + c.length, r + 1, i, a + 1, o);
				if (!1 !== s) return s;
			}
			let s = e[n];
			if (s === "." || s === ".." || !this.options.dot && s.startsWith(".")) return !1;
			n++;
		}
		return i || null;
	}
	#n(e, t, n, r, i) {
		let a, o, s, c;
		for (a = r, o = i, c = e.length, s = t.length; a < c && o < s; a++, o++) {
			this.debug("matchOne loop");
			let n, r = t[o], i = e[a];
			if (this.debug(t, r, i), !1 === r || r === K || (typeof r == "string" ? (n = i === r, this.debug("string match", r, i, n)) : (n = r.test(i), this.debug("pattern match", r, i, n)), !n)) return !1;
		}
		if (a === c && o === s) return !0;
		if (a === c) return n;
		if (o === s) return a === c - 1 && e[a] === "";
		throw Error("wtf?");
	}
	braceExpand() {
		return vr(this.pattern, this.options);
	}
	parse(e) {
		kn(e);
		let t = this.options;
		if (e === "**") return K;
		if (e === "") return "";
		let n, r = null;
		(n = e.match(or)) ? r = t.dot ? cr : sr : (n = e.match(Xn)) ? r = (t.nocase ? t.dot ? er : $n : t.dot ? Qn : Zn)(n[1]) : (n = e.match(lr)) ? r = (t.nocase ? t.dot ? dr : ur : t.dot ? fr : pr)(n) : (n = e.match(tr)) ? r = t.dot ? rr : nr : (n = e.match(ir)) && (r = ar);
		let i = Yn.fromGlob(e, this.options).toMMPattern();
		return r && typeof i == "object" && Reflect.defineProperty(i, "test", { value: r }), i;
	}
	makeRe() {
		if (this.regexp || !1 === this.regexp) return this.regexp;
		let e = this.set;
		if (!e.length) return this.regexp = !1, this.regexp;
		let t = this.options, n = t.noglobstar ? "[^/]*?" : t.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", r = new Set(t.nocase ? ["i"] : []), i = e.map(((e) => {
			let t = e.map(((e) => {
				if (e instanceof RegExp) for (let t of e.flags.split("")) r.add(t);
				return typeof e == "string" ? e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : e === K ? K : e._src;
			}));
			return t.forEach(((e, r) => {
				let i = t[r + 1], a = t[r - 1];
				e === K && a !== K && (a === void 0 ? i !== void 0 && i !== K ? t[r + 1] = "(?:\\/|" + n + "\\/)?" + i : t[r] = n : i === void 0 ? t[r - 1] = a + "(?:\\/|" + n + ")?" : i !== K && (t[r - 1] = a + "(?:\\/|\\/" + n + "\\/)" + i, t[r + 1] = K));
			})), t.filter(((e) => e !== K)).join("/");
		})).join("|"), [a, o] = e.length > 1 ? ["(?:", ")"] : ["", ""];
		i = "^" + a + i + o + "$", this.negate && (i = "^(?!" + i + ").+$");
		try {
			this.regexp = new RegExp(i, [...r].join(""));
		} catch {
			this.regexp = !1;
		}
		return this.regexp;
	}
	slashSplit(e) {
		return this.preserveMultipleSlashes ? e.split("/") : this.isWindows && /^\/\/[^\/]+/.test(e) ? ["", ...e.split(/\/+/)] : e.split(/\/+/);
	}
	match(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.partial;
		if (this.debug("match", e, this.pattern), this.comment) return !1;
		if (this.empty) return e === "";
		if (e === "/" && t) return !0;
		let n = this.options;
		this.isWindows && (e = e.split("\\").join("/"));
		let r = this.slashSplit(e);
		this.debug(this.pattern, "split", r);
		let i = this.set;
		this.debug(this.pattern, "set", i);
		let a = r[r.length - 1];
		if (!a) for (let e = r.length - 2; !a && e >= 0; e--) a = r[e];
		for (let e = 0; e < i.length; e++) {
			let o = i[e], s = r;
			if (n.matchBase && o.length === 1 && (s = [a]), this.matchOne(s, o, t)) return !!n.flipNegate || !this.negate;
		}
		return !n.flipNegate && this.negate;
	}
	static defaults(e) {
		return G.defaults(e).Minimatch;
	}
};
function xr(e) {
	let t = /* @__PURE__ */ Error(`${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""}Invalid response: ${e.status} ${e.statusText}`);
	return t.status = e.status, t.response = e, t;
}
function q(e, t) {
	let { status: n } = t;
	if (n === 401 && e.digest) return t;
	if (n >= 400) throw xr(t);
	return t;
}
function Sr(e, t) {
	return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? {
		data: t,
		headers: e.headers ? _n(e.headers) : {},
		status: e.status,
		statusText: e.statusText
	} : t;
}
G.AST = Yn, G.Minimatch = br, G.escape = function(e) {
	let { windowsPathsNoEscape: t = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return t ? e.replace(/[?*()[\]]/g, "[$&]") : e.replace(/[?*()[\]\\]/g, "\\$&");
}, G.unescape = Pn;
var Cr = (wr = function(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = U({
		url: B(e.remoteURL, z(t)),
		method: "COPY",
		headers: {
			Destination: B(e.remoteURL, z(n)),
			Overwrite: !1 === r.overwrite ? "F" : "T",
			Depth: r.shallow ? "0" : "infinity"
		}
	}, e, r);
	return o = function(t) {
		q(e, t);
	}, (a = H(i, e)) && a.then || (a = Promise.resolve(a)), o ? a.then(o) : a;
	var a, o;
}, function() {
	var e = [...arguments];
	try {
		return Promise.resolve(wr.apply(this, e));
	} catch (e) {
		return Promise.reject(e);
	}
}), wr, Tr = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Er = RegExp("^[" + Tr + "][" + Tr + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
function Dr(e, t) {
	let n = [], r = t.exec(e);
	for (; r;) {
		let i = [];
		i.startIndex = t.lastIndex - r[0].length;
		let a = r.length;
		for (let e = 0; e < a; e++) i.push(r[e]);
		n.push(i), r = t.exec(e);
	}
	return n;
}
var Or = function(e) {
	return Er.exec(e) != null;
}, kr = [
	"hasOwnProperty",
	"toString",
	"valueOf",
	"__defineGetter__",
	"__defineSetter__",
	"__lookupGetter__",
	"__lookupSetter__"
], Ar = [
	"__proto__",
	"constructor",
	"prototype"
], jr = (e) => kr.includes(e) ? "__" + e : e, Mr = {
	preserveOrder: !1,
	attributeNamePrefix: "@_",
	attributesGroupName: !1,
	textNodeName: "#text",
	ignoreAttributes: !0,
	removeNSPrefix: !1,
	allowBooleanAttributes: !1,
	parseTagValue: !0,
	parseAttributeValue: !1,
	trimValues: !0,
	cdataPropName: !1,
	numberParseOptions: {
		hex: !0,
		leadingZeros: !0,
		eNotation: !0
	},
	tagValueProcessor: function(e, t) {
		return t;
	},
	attributeValueProcessor: function(e, t) {
		return t;
	},
	stopNodes: [],
	alwaysCreateTextNode: !1,
	isArray: () => !1,
	commentPropName: !1,
	unpairedTags: [],
	processEntities: !0,
	htmlEntities: !1,
	entityDecoder: null,
	ignoreDeclaration: !1,
	ignorePiTags: !1,
	transformTagName: !1,
	transformAttributeName: !1,
	updateTag: function(e, t, n) {
		return e;
	},
	captureMetaData: !1,
	maxNestedTags: 100,
	strictReservedNames: !0,
	jPath: !0,
	onDangerousProperty: jr
};
function Nr(e, t) {
	if (typeof e != "string") return;
	let n = e.toLowerCase();
	if (kr.some(((e) => n === e.toLowerCase())) || Ar.some(((e) => n === e.toLowerCase()))) throw Error(`[SECURITY] Invalid ${t}: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
}
function Pr(e, t) {
	return typeof e == "boolean" ? {
		enabled: e,
		maxEntitySize: 1e4,
		maxExpansionDepth: 1e4,
		maxTotalExpansions: 1 / 0,
		maxExpandedLength: 1e5,
		maxEntityCount: 1e3,
		allowedTags: null,
		tagFilter: null,
		appliesTo: "all"
	} : typeof e == "object" && e ? {
		enabled: !1 !== e.enabled,
		maxEntitySize: Math.max(1, e.maxEntitySize ?? 1e4),
		maxExpansionDepth: Math.max(1, e.maxExpansionDepth ?? 1e4),
		maxTotalExpansions: Math.max(1, e.maxTotalExpansions ?? 1 / 0),
		maxExpandedLength: Math.max(1, e.maxExpandedLength ?? 1e5),
		maxEntityCount: Math.max(1, e.maxEntityCount ?? 1e3),
		allowedTags: e.allowedTags ?? null,
		tagFilter: e.tagFilter ?? null,
		appliesTo: e.appliesTo ?? "all"
	} : Pr(!0);
}
var Fr = function(e) {
	let t = Object.assign({}, Mr, e), n = [
		{
			value: t.attributeNamePrefix,
			name: "attributeNamePrefix"
		},
		{
			value: t.attributesGroupName,
			name: "attributesGroupName"
		},
		{
			value: t.textNodeName,
			name: "textNodeName"
		},
		{
			value: t.cdataPropName,
			name: "cdataPropName"
		},
		{
			value: t.commentPropName,
			name: "commentPropName"
		}
	];
	for (let { value: e, name: t } of n) e && Nr(e, t);
	return t.onDangerousProperty === null && (t.onDangerousProperty = jr), t.processEntities = Pr(t.processEntities, t.htmlEntities), t.unpairedTagsSet = new Set(t.unpairedTags), t.stopNodes && Array.isArray(t.stopNodes) && (t.stopNodes = t.stopNodes.map(((e) => typeof e == "string" && e.startsWith("*.") ? ".." + e.substring(2) : e))), t;
}, Ir = typeof Symbol == "function" ? Symbol("XML Node Metadata") : "@@xmlMetadata", Lr = class {
	constructor(e) {
		this.tagname = e, this.child = [], this[":@"] = Object.create(null);
	}
	add(e, t) {
		e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: t });
	}
	addChild(e, t) {
		e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({
			[e.tagname]: e.child,
			":@": e[":@"]
		}) : this.child.push({ [e.tagname]: e.child }), t !== void 0 && (this.child[this.child.length - 1][Ir] = { startIndex: t });
	}
	static getMetaDataSymbol() {
		return Ir;
	}
}, Rr = class {
	constructor(e) {
		this.suppressValidationErr = !e, this.options = e;
	}
	readDocType(e, t) {
		let n = Object.create(null), r = 0;
		if (e[t + 3] !== "O" || e[t + 4] !== "C" || e[t + 5] !== "T" || e[t + 6] !== "Y" || e[t + 7] !== "P" || e[t + 8] !== "E") throw Error("Invalid Tag instead of DOCTYPE");
		{
			t += 9;
			let i = 1, a = !1, o = !1, s = "";
			for (; t < e.length; t++) if (e[t] !== "<" || o) {
				if (e[t] === ">") {
					if (o ? e[t - 1] === "-" && e[t - 2] === "-" && (o = !1, i--) : i--, i === 0) break;
				} else e[t] === "[" ? a = !0 : s += e[t];
			} else {
				if (a && zr(e, "!ENTITY", t)) {
					let i, a;
					if (t += 7, [i, a, t] = this.readEntityExp(e, t + 1, this.suppressValidationErr), a.indexOf("&") === -1) {
						if (!1 !== this.options.enabled && this.options.maxEntityCount != null && r >= this.options.maxEntityCount) throw Error(`Entity count (${r + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
						n[i] = a, r++;
					}
				} else if (a && zr(e, "!ELEMENT", t)) {
					t += 8;
					let { index: n } = this.readElementExp(e, t + 1);
					t = n;
				} else if (a && zr(e, "!ATTLIST", t)) t += 8;
				else if (a && zr(e, "!NOTATION", t)) {
					t += 9;
					let { index: n } = this.readNotationExp(e, t + 1, this.suppressValidationErr);
					t = n;
				} else {
					if (!zr(e, "!--", t)) throw Error("Invalid DOCTYPE");
					o = !0;
				}
				i++, s = "";
			}
			if (i !== 0) throw Error("Unclosed DOCTYPE");
		}
		return {
			entities: n,
			i: t
		};
	}
	readEntityExp(e, t) {
		let n = t = J(e, t);
		for (; t < e.length && !/\s/.test(e[t]) && e[t] !== "\"" && e[t] !== "'";) t++;
		let r = e.substring(n, t);
		if (Br(r), t = J(e, t), !this.suppressValidationErr) {
			if (e.substring(t, t + 6).toUpperCase() === "SYSTEM") throw Error("External entities are not supported");
			if (e[t] === "%") throw Error("Parameter entities are not supported");
		}
		let i = "";
		if ([t, i] = this.readIdentifierVal(e, t, "entity"), !1 !== this.options.enabled && this.options.maxEntitySize != null && i.length > this.options.maxEntitySize) throw Error(`Entity "${r}" size (${i.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
		return [
			r,
			i,
			--t
		];
	}
	readNotationExp(e, t) {
		let n = t = J(e, t);
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		!this.suppressValidationErr && Br(r), t = J(e, t);
		let i = e.substring(t, t + 6).toUpperCase();
		if (!this.suppressValidationErr && i !== "SYSTEM" && i !== "PUBLIC") throw Error(`Expected SYSTEM or PUBLIC, found "${i}"`);
		t += i.length, t = J(e, t);
		let a = null, o = null;
		if (i === "PUBLIC") [t, a] = this.readIdentifierVal(e, t, "publicIdentifier"), e[t = J(e, t)] !== "\"" && e[t] !== "'" || ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier"));
		else if (i === "SYSTEM" && ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier"), !this.suppressValidationErr && !o)) throw Error("Missing mandatory system identifier for SYSTEM notation");
		return {
			notationName: r,
			publicIdentifier: a,
			systemIdentifier: o,
			index: --t
		};
	}
	readIdentifierVal(e, t, n) {
		let r = "", i = e[t];
		if (i !== "\"" && i !== "'") throw Error(`Expected quoted string, found "${i}"`);
		let a = ++t;
		for (; t < e.length && e[t] !== i;) t++;
		if (r = e.substring(a, t), e[t] !== i) throw Error(`Unterminated ${n} value`);
		return [++t, r];
	}
	readElementExp(e, t) {
		let n = t = J(e, t);
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		if (!this.suppressValidationErr && !Or(r)) throw Error(`Invalid element name: "${r}"`);
		let i = "";
		if (e[t = J(e, t)] === "E" && zr(e, "MPTY", t)) t += 4;
		else if (e[t] === "A" && zr(e, "NY", t)) t += 2;
		else if (e[t] === "(") {
			let n = ++t;
			for (; t < e.length && e[t] !== ")";) t++;
			if (i = e.substring(n, t), e[t] !== ")") throw Error("Unterminated content model");
		} else if (!this.suppressValidationErr) throw Error(`Invalid Element Expression, found "${e[t]}"`);
		return {
			elementName: r,
			contentModel: i.trim(),
			index: t
		};
	}
	readAttlistExp(e, t) {
		let n = t = J(e, t);
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		for (Br(r), n = t = J(e, t); t < e.length && !/\s/.test(e[t]);) t++;
		let i = e.substring(n, t);
		if (!Br(i)) throw Error(`Invalid attribute name: "${i}"`);
		t = J(e, t);
		let a = "";
		if (e.substring(t, t + 8).toUpperCase() === "NOTATION") {
			if (a = "NOTATION", e[t = J(e, t += 8)] !== "(") throw Error(`Expected '(', found "${e[t]}"`);
			t++;
			let n = [];
			for (; t < e.length && e[t] !== ")";) {
				let r = t;
				for (; t < e.length && e[t] !== "|" && e[t] !== ")";) t++;
				let i = e.substring(r, t);
				if (i = i.trim(), !Br(i)) throw Error(`Invalid notation name: "${i}"`);
				n.push(i), e[t] === "|" && (t++, t = J(e, t));
			}
			if (e[t] !== ")") throw Error("Unterminated list of notations");
			t++, a += " (" + n.join("|") + ")";
		} else {
			let n = t;
			for (; t < e.length && !/\s/.test(e[t]);) t++;
			if (a += e.substring(n, t), !this.suppressValidationErr && ![
				"CDATA",
				"ID",
				"IDREF",
				"IDREFS",
				"ENTITY",
				"ENTITIES",
				"NMTOKEN",
				"NMTOKENS"
			].includes(a.toUpperCase())) throw Error(`Invalid attribute type: "${a}"`);
		}
		t = J(e, t);
		let o = "";
		return e.substring(t, t + 8).toUpperCase() === "#REQUIRED" ? (o = "#REQUIRED", t += 8) : e.substring(t, t + 7).toUpperCase() === "#IMPLIED" ? (o = "#IMPLIED", t += 7) : [t, o] = this.readIdentifierVal(e, t, "ATTLIST"), {
			elementName: r,
			attributeName: i,
			attributeType: a,
			defaultValue: o,
			index: t
		};
	}
}, J = (e, t) => {
	for (; t < e.length && /\s/.test(e[t]);) t++;
	return t;
};
function zr(e, t, n) {
	for (let r = 0; r < t.length; r++) if (t[r] !== e[n + r + 1]) return !1;
	return !0;
}
function Br(e) {
	if (Or(e)) return e;
	throw Error(`Invalid entity name ${e}`);
}
var Vr = /^[-+]?0x[a-fA-F0-9]+$/, Hr = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Ur = {
	hex: !0,
	leadingZeros: !0,
	decimalPoint: ".",
	eNotation: !0,
	infinity: "original"
}, Wr = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/, Gr = class {
	constructor(e) {
		this._matcher = e;
	}
	get separator() {
		return this._matcher.separator;
	}
	getCurrentTag() {
		let e = this._matcher.path;
		return e.length > 0 ? e[e.length - 1].tag : void 0;
	}
	getCurrentNamespace() {
		let e = this._matcher.path;
		return e.length > 0 ? e[e.length - 1].namespace : void 0;
	}
	getAttrValue(e) {
		let t = this._matcher.path;
		if (t.length !== 0) return t[t.length - 1].values?.[e];
	}
	hasAttr(e) {
		let t = this._matcher.path;
		if (t.length === 0) return !1;
		let n = t[t.length - 1];
		return n.values !== void 0 && e in n.values;
	}
	getPosition() {
		let e = this._matcher.path;
		return e.length === 0 ? -1 : e[e.length - 1].position ?? 0;
	}
	getCounter() {
		let e = this._matcher.path;
		return e.length === 0 ? -1 : e[e.length - 1].counter ?? 0;
	}
	getIndex() {
		return this.getPosition();
	}
	getDepth() {
		return this._matcher.path.length;
	}
	toString(e) {
		let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
		return this._matcher.toString(e, t);
	}
	toArray() {
		return this._matcher.path.map(((e) => e.tag));
	}
	matches(e) {
		return this._matcher.matches(e);
	}
	matchesAny(e) {
		return e.matchesAny(this._matcher);
	}
}, Kr = class {
	constructor() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		this.separator = e.separator || ".", this.path = [], this.siblingStacks = [], this._pathStringCache = null, this._view = new Gr(this);
	}
	push(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
		this._pathStringCache = null, this.path.length > 0 && (this.path[this.path.length - 1].values = void 0);
		let r = this.path.length;
		this.siblingStacks[r] || (this.siblingStacks[r] = /* @__PURE__ */ new Map());
		let i = this.siblingStacks[r], a = n ? `${n}:${e}` : e, o = i.get(a) || 0, s = 0;
		for (let e of i.values()) s += e;
		i.set(a, o + 1);
		let c = {
			tag: e,
			position: s,
			counter: o
		};
		n != null && (c.namespace = n), t != null && (c.values = t), this.path.push(c);
	}
	pop() {
		if (this.path.length === 0) return;
		this._pathStringCache = null;
		let e = this.path.pop();
		return this.siblingStacks.length > this.path.length + 1 && (this.siblingStacks.length = this.path.length + 1), e;
	}
	updateCurrent(e) {
		if (this.path.length > 0) {
			let t = this.path[this.path.length - 1];
			e != null && (t.values = e);
		}
	}
	getCurrentTag() {
		return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
	}
	getCurrentNamespace() {
		return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
	}
	getAttrValue(e) {
		if (this.path.length !== 0) return this.path[this.path.length - 1].values?.[e];
	}
	hasAttr(e) {
		if (this.path.length === 0) return !1;
		let t = this.path[this.path.length - 1];
		return t.values !== void 0 && e in t.values;
	}
	getPosition() {
		return this.path.length === 0 ? -1 : this.path[this.path.length - 1].position ?? 0;
	}
	getCounter() {
		return this.path.length === 0 ? -1 : this.path[this.path.length - 1].counter ?? 0;
	}
	getIndex() {
		return this.getPosition();
	}
	getDepth() {
		return this.path.length;
	}
	toString(e) {
		let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], n = e || this.separator;
		if (n === this.separator && !0 === t) {
			if (this._pathStringCache !== null) return this._pathStringCache;
			let e = this.path.map(((e) => e.namespace ? `${e.namespace}:${e.tag}` : e.tag)).join(n);
			return this._pathStringCache = e, e;
		}
		return this.path.map(((e) => t && e.namespace ? `${e.namespace}:${e.tag}` : e.tag)).join(n);
	}
	toArray() {
		return this.path.map(((e) => e.tag));
	}
	reset() {
		this._pathStringCache = null, this.path = [], this.siblingStacks = [];
	}
	matches(e) {
		let t = e.segments;
		return t.length !== 0 && (e.hasDeepWildcard() ? this._matchWithDeepWildcard(t) : this._matchSimple(t));
	}
	_matchSimple(e) {
		if (this.path.length !== e.length) return !1;
		for (let t = 0; t < e.length; t++) if (!this._matchSegment(e[t], this.path[t], t === this.path.length - 1)) return !1;
		return !0;
	}
	_matchWithDeepWildcard(e) {
		let t = this.path.length - 1, n = e.length - 1;
		for (; n >= 0 && t >= 0;) {
			let r = e[n];
			if (r.type === "deep-wildcard") {
				if (n--, n < 0) return !0;
				let r = e[n], i = !1;
				for (let e = t; e >= 0; e--) if (this._matchSegment(r, this.path[e], e === this.path.length - 1)) {
					t = e - 1, n--, i = !0;
					break;
				}
				if (!i) return !1;
			} else {
				if (!this._matchSegment(r, this.path[t], t === this.path.length - 1)) return !1;
				t--, n--;
			}
		}
		return n < 0;
	}
	_matchSegment(e, t, n) {
		if (e.tag !== "*" && e.tag !== t.tag || e.namespace !== void 0 && e.namespace !== "*" && e.namespace !== t.namespace || e.attrName !== void 0 && (!n || !t.values || !(e.attrName in t.values) || e.attrValue !== void 0 && String(t.values[e.attrName]) !== String(e.attrValue))) return !1;
		if (e.position !== void 0) {
			if (!n) return !1;
			let r = t.counter ?? 0;
			if (e.position === "first" && r !== 0 || e.position === "odd" && r % 2 != 1 || e.position === "even" && r % 2 != 0 || e.position === "nth" && r !== e.positionValue) return !1;
		}
		return !0;
	}
	matchesAny(e) {
		return e.matchesAny(this);
	}
	snapshot() {
		return {
			path: this.path.map(((e) => ({ ...e }))),
			siblingStacks: this.siblingStacks.map(((e) => new Map(e)))
		};
	}
	restore(e) {
		this._pathStringCache = null, this.path = e.path.map(((e) => ({ ...e }))), this.siblingStacks = e.siblingStacks.map(((e) => new Map(e)));
	}
	readOnly() {
		return this._view;
	}
}, qr = class {
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
		this.pattern = e, this.separator = t.separator || ".", this.segments = this._parse(e), this.data = n, this._hasDeepWildcard = this.segments.some(((e) => e.type === "deep-wildcard")), this._hasAttributeCondition = this.segments.some(((e) => e.attrName !== void 0)), this._hasPositionSelector = this.segments.some(((e) => e.position !== void 0));
	}
	_parse(e) {
		let t = [], n = 0, r = "";
		for (; n < e.length;) e[n] === this.separator ? n + 1 < e.length && e[n + 1] === this.separator ? (r.trim() && (t.push(this._parseSegment(r.trim())), r = ""), t.push({ type: "deep-wildcard" }), n += 2) : (r.trim() && t.push(this._parseSegment(r.trim())), r = "", n++) : (r += e[n], n++);
		return r.trim() && t.push(this._parseSegment(r.trim())), t;
	}
	_parseSegment(e) {
		let t = { type: "tag" }, n = null, r = e, i = e.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
		if (i && (r = i[1] + i[3], i[2])) {
			let e = i[2].slice(1, -1);
			e && (n = e);
		}
		let a, o, s = r;
		if (r.includes("::")) {
			let t = r.indexOf("::");
			if (a = r.substring(0, t).trim(), s = r.substring(t + 2).trim(), !a) throw Error(`Invalid namespace in pattern: ${e}`);
		}
		let c = null;
		if (s.includes(":")) {
			let e = s.lastIndexOf(":"), t = s.substring(0, e).trim(), n = s.substring(e + 1).trim();
			[
				"first",
				"last",
				"odd",
				"even"
			].includes(n) || /^nth\(\d+\)$/.test(n) ? (o = t, c = n) : o = s;
		} else o = s;
		if (!o) throw Error(`Invalid segment pattern: ${e}`);
		if (t.tag = o, a && (t.namespace = a), n) {
			if (n.includes("=")) {
				let e = n.indexOf("=");
				t.attrName = n.substring(0, e).trim(), t.attrValue = n.substring(e + 1).trim();
			} else t.attrName = n.trim();
		}
		if (c) {
			let e = c.match(/^nth\((\d+)\)$/);
			e ? (t.position = "nth", t.positionValue = parseInt(e[1], 10)) : t.position = c;
		}
		return t;
	}
	get length() {
		return this.segments.length;
	}
	hasDeepWildcard() {
		return this._hasDeepWildcard;
	}
	hasAttributeCondition() {
		return this._hasAttributeCondition;
	}
	hasPositionSelector() {
		return this._hasPositionSelector;
	}
	toString() {
		return this.pattern;
	}
}, Jr = class {
	constructor() {
		this._byDepthAndTag = /* @__PURE__ */ new Map(), this._wildcardByDepth = /* @__PURE__ */ new Map(), this._deepWildcards = [], this._patterns = /* @__PURE__ */ new Set(), this._sealed = !1;
	}
	add(e) {
		if (this._sealed) throw TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");
		if (this._patterns.has(e.pattern)) return this;
		if (this._patterns.add(e.pattern), e.hasDeepWildcard()) return this._deepWildcards.push(e), this;
		let t = e.length, n = e.segments[e.segments.length - 1]?.tag;
		if (n && n !== "*") {
			let r = `${t}:${n}`;
			this._byDepthAndTag.has(r) || this._byDepthAndTag.set(r, []), this._byDepthAndTag.get(r).push(e);
		} else this._wildcardByDepth.has(t) || this._wildcardByDepth.set(t, []), this._wildcardByDepth.get(t).push(e);
		return this;
	}
	addAll(e) {
		for (let t of e) this.add(t);
		return this;
	}
	has(e) {
		return this._patterns.has(e.pattern);
	}
	get size() {
		return this._patterns.size;
	}
	seal() {
		return this._sealed = !0, this;
	}
	get isSealed() {
		return this._sealed;
	}
	matchesAny(e) {
		return this.findMatch(e) !== null;
	}
	findMatch(e) {
		let t = e.getDepth(), n = `${t}:${e.getCurrentTag()}`, r = this._byDepthAndTag.get(n);
		if (r) {
			for (let t = 0; t < r.length; t++) if (e.matches(r[t])) return r[t];
		}
		let i = this._wildcardByDepth.get(t);
		if (i) {
			for (let t = 0; t < i.length; t++) if (e.matches(i[t])) return i[t];
		}
		for (let t = 0; t < this._deepWildcards.length; t++) if (e.matches(this._deepWildcards[t])) return this._deepWildcards[t];
		return null;
	}
}, Yr = {
	cent: "¢",
	pound: "£",
	curren: "¤",
	yen: "¥",
	euro: "€",
	dollar: "$",
	euro: "€",
	fnof: "ƒ",
	inr: "₹",
	af: "؋",
	birr: "ብር",
	peso: "₱",
	rub: "₽",
	won: "₩",
	yuan: "¥",
	cedil: "¸"
}, Xr = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	quot: "\""
}, Zr = {
	nbsp: "\xA0",
	copy: "©",
	reg: "®",
	trade: "™",
	mdash: "—",
	ndash: "–",
	hellip: "…",
	laquo: "«",
	raquo: "»",
	lsquo: "‘",
	rsquo: "’",
	ldquo: "“",
	rdquo: "”",
	bull: "•",
	para: "¶",
	sect: "§",
	deg: "°",
	frac12: "½",
	frac14: "¼",
	frac34: "¾"
}, Qr = /* @__PURE__ */ new Set("!?\\\\/[]$%{}^&*()<>|+");
function $r(e) {
	if (e[0] === "#") throw Error(`[EntityReplacer] Invalid character '#' in entity name: "${e}"`);
	for (let t of e) if (Qr.has(t)) throw Error(`[EntityReplacer] Invalid character '${t}' in entity name: "${e}"`);
	return e;
}
function ei() {
	let e = Object.create(null);
	var t = [...arguments];
	for (let n of t) if (n) for (let t of Object.keys(n)) {
		let r = n[t];
		if (typeof r == "string") e[t] = r;
		else if (r && typeof r == "object" && r.val !== void 0) {
			let n = r.val;
			typeof n == "string" && (e[t] = n);
		}
	}
	return e;
}
var ti = "external", ni = "base", ri = "all", Y = Object.freeze({
	allow: 0,
	leave: 1,
	remove: 2,
	throw: 3
}), ii = /* @__PURE__ */ new Set([
	9,
	10,
	13
]), ai = class {
	constructor() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		var t;
		this._limit = e.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = typeof e.postCheck == "function" ? e.postCheck : (e) => e, this._limitTiers = (t = this._limit.applyLimitsTo ?? ti) && t !== ti ? t === ri ? /* @__PURE__ */ new Set([ri]) : t === ni ? /* @__PURE__ */ new Set([ni]) : Array.isArray(t) ? new Set(t) : /* @__PURE__ */ new Set([ti]) : /* @__PURE__ */ new Set([ti]), this._numericAllowed = e.numericAllowed ?? !0, this._baseMap = ei(Xr, e.namedEntities || null), this._externalMap = Object.create(null), this._inputMap = Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(e.remove && Array.isArray(e.remove) ? e.remove : []), this._leaveSet = new Set(e.leave && Array.isArray(e.leave) ? e.leave : []);
		let n = function(e) {
			if (!e) return {
				xmlVersion: 1,
				onLevel: Y.allow,
				nullLevel: Y.remove
			};
			let t = e.xmlVersion === 1.1 ? 1.1 : 1, n = Y[e.onNCR] ?? Y.allow, r = Y[e.nullNCR] ?? Y.remove;
			return {
				xmlVersion: t,
				onLevel: n,
				nullLevel: Math.max(r, Y.remove)
			};
		}(e.ncr);
		this._ncrXmlVersion = n.xmlVersion, this._ncrOnLevel = n.onLevel, this._ncrNullLevel = n.nullLevel;
	}
	setExternalEntities(e) {
		if (e) for (let t of Object.keys(e)) $r(t);
		this._externalMap = ei(e);
	}
	addExternalEntity(e, t) {
		$r(e), typeof t == "string" && t.indexOf("&") === -1 && (this._externalMap[e] = t);
	}
	addInputEntities(e) {
		this._totalExpansions = 0, this._expandedLength = 0, this._inputMap = ei(e);
	}
	reset() {
		return this._inputMap = Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this;
	}
	setXmlVersion(e) {
		this._ncrXmlVersion = e === 1.1 ? 1.1 : 1;
	}
	decode(e) {
		if (typeof e != "string" || e.length === 0) return e;
		let t = e, n = [], r = e.length, i = 0, a = 0, o = this._maxTotalExpansions > 0, s = this._maxExpandedLength > 0, c = o || s;
		for (; a < r;) {
			if (e.charCodeAt(a) !== 38) {
				a++;
				continue;
			}
			let t = a + 1;
			for (; t < r && e.charCodeAt(t) !== 59 && t - a <= 32;) t++;
			if (t >= r || e.charCodeAt(t) !== 59) {
				a++;
				continue;
			}
			let l = e.slice(a + 1, t);
			if (l.length === 0) {
				a++;
				continue;
			}
			let u, d;
			if (this._removeSet.has(l)) u = "", d === void 0 && (d = ti);
			else {
				if (this._leaveSet.has(l)) {
					a++;
					continue;
				}
				if (l.charCodeAt(0) === 35) {
					let e = this._resolveNCR(l);
					if (e === void 0) {
						a++;
						continue;
					}
					u = e, d = ni;
				} else {
					let e = this._resolveName(l);
					u = e?.value, d = e?.tier;
				}
			}
			if (u !== void 0) {
				if (a > i && n.push(e.slice(i, a)), n.push(u), i = t + 1, a = i, c && this._tierCounts(d)) {
					if (o && (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions)) throw Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);
					if (s) {
						let e = u.length - (l.length + 2);
						if (e > 0 && (this._expandedLength += e, this._expandedLength > this._maxExpandedLength)) throw Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`);
					}
				}
			} else a++;
		}
		i < r && n.push(e.slice(i));
		let l = n.length === 0 ? e : n.join("");
		return this._postCheck(l, t);
	}
	_tierCounts(e) {
		return !!this._limitTiers.has(ri) || this._limitTiers.has(e);
	}
	_resolveName(e) {
		return e in this._inputMap ? {
			value: this._inputMap[e],
			tier: ti
		} : e in this._externalMap ? {
			value: this._externalMap[e],
			tier: ti
		} : e in this._baseMap ? {
			value: this._baseMap[e],
			tier: ni
		} : void 0;
	}
	_classifyNCR(e) {
		return e === 0 ? this._ncrNullLevel : e >= 55296 && e <= 57343 || this._ncrXmlVersion === 1 && e >= 1 && e <= 31 && !ii.has(e) ? Y.remove : -1;
	}
	_applyNCRAction(e, t, n) {
		switch (e) {
			case Y.allow: return String.fromCodePoint(n);
			case Y.remove: return "";
			case Y.leave: return;
			case Y.throw: throw Error(`[EntityDecoder] Prohibited numeric character reference &${t}; (U+${n.toString(16).toUpperCase().padStart(4, "0")})`);
			default: return String.fromCodePoint(n);
		}
	}
	_resolveNCR(e) {
		let t = e.charCodeAt(1), n;
		if (n = t === 120 || t === 88 ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), Number.isNaN(n) || n < 0 || n > 1114111) return;
		let r = this._classifyNCR(n);
		if (!this._numericAllowed && r < Y.remove) return;
		let i = r === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, r);
		return this._applyNCRAction(i, e, n);
	}
};
function oi(e, t) {
	if (!e) return {};
	let n = t.attributesGroupName ? e[t.attributesGroupName] : e;
	if (!n) return {};
	let r = {};
	for (let e in n) e.startsWith(t.attributeNamePrefix) ? r[e.substring(t.attributeNamePrefix.length)] = n[e] : r[e] = n[e];
	return r;
}
function si(e) {
	if (!e || typeof e != "string") return;
	let t = e.indexOf(":");
	if (t !== -1 && t > 0) {
		let n = e.substring(0, t);
		if (n !== "xmlns") return n;
	}
}
var ci = class {
	constructor(e, t) {
		var n;
		this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.parseXml = pi, this.parseTextData = li, this.resolveNameSpace = ui, this.buildAttributesMap = fi, this.isItStopNode = _i, this.replaceEntitiesValue = hi, this.readStopNodeData = xi, this.saveTextToParentTag = gi, this.addChild = mi, this.ignoreAttributesFn = typeof (n = this.options.ignoreAttributes) == "function" ? n : Array.isArray(n) ? (e) => {
			for (let t of n) if (typeof t == "string" && e === t || t instanceof RegExp && t.test(e)) return !0;
		} : () => !1, this.entityExpansionCount = 0, this.currentExpandedLength = 0;
		let r = { ...Xr };
		this.options.entityDecoder ? this.entityDecoder = this.options.entityDecoder : (typeof this.options.htmlEntities == "object" ? r = this.options.htmlEntities : !0 === this.options.htmlEntities && (r = {
			...Zr,
			...Yr
		}), this.entityDecoder = new ai({
			namedEntities: {
				...r,
				...t
			},
			numericAllowed: this.options.htmlEntities,
			limit: {
				maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
				maxExpandedLength: this.options.processEntities.maxExpandedLength,
				applyLimitsTo: this.options.processEntities.appliesTo
			}
		})), this.matcher = new Kr(), this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = !1, this.stopNodeExpressionsSet = new Jr();
		let i = this.options.stopNodes;
		if (i && i.length > 0) {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "string" ? this.stopNodeExpressionsSet.add(new qr(t)) : t instanceof qr && this.stopNodeExpressionsSet.add(t);
			}
			this.stopNodeExpressionsSet.seal();
		}
	}
};
function li(e, t, n, r, i, a, o) {
	let s = this.options;
	if (e !== void 0 && (s.trimValues && !r && (e = e.trim()), e.length > 0)) {
		o || (e = this.replaceEntitiesValue(e, t, n));
		let r = s.jPath ? n.toString() : n, c = s.tagValueProcessor(t, e, r, i, a);
		return c == null ? e : typeof c != typeof e || c !== e ? c : s.trimValues || e.trim() === e ? Si(e, s.parseTagValue, s.numberParseOptions) : e;
	}
}
function ui(e) {
	if (this.options.removeNSPrefix) {
		let t = e.split(":"), n = e.charAt(0) === "/" ? "/" : "";
		if (t[0] === "xmlns") return "";
		t.length === 2 && (e = n + t[1]);
	}
	return e;
}
var di = /* @__PURE__ */ RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
function fi(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], i = this.options;
	if (!0 === r || !0 !== i.ignoreAttributes && typeof e == "string") {
		let r = Dr(e, di), a = r.length, o = {}, s = Array(a), c = !1, l = {};
		for (let e = 0; e < a; e++) {
			let t = this.resolveNameSpace(r[e][1]), a = r[e][4];
			if (t.length && a !== void 0) {
				let r = a;
				i.trimValues && (r = r.trim()), r = this.replaceEntitiesValue(r, n, this.readonlyMatcher), s[e] = r, l[t] = r, c = !0;
			}
		}
		c && typeof t == "object" && t.updateCurrent && t.updateCurrent(l);
		let u = i.jPath ? t.toString() : this.readonlyMatcher, d = !1;
		for (let e = 0; e < a; e++) {
			let t = this.resolveNameSpace(r[e][1]);
			if (this.ignoreAttributesFn(t, u)) continue;
			let n = i.attributeNamePrefix + t;
			if (t.length) {
				if (i.transformAttributeName && (n = i.transformAttributeName(n)), n = wi(n, i), r[e][4] !== void 0) {
					let r = s[e], a = i.attributeValueProcessor(t, r, u);
					o[n] = a == null ? r : typeof a != typeof r || a !== r ? a : Si(r, i.parseAttributeValue, i.numberParseOptions), d = !0;
				} else i.allowBooleanAttributes && (o[n] = !0, d = !0);
			}
		}
		if (!d) return;
		if (i.attributesGroupName && !i.preserveOrder) {
			let e = {};
			return e[i.attributesGroupName] = o, e;
		}
		return o;
	}
}
var pi = function(e) {
	e = e.replace(/\r\n?/g, "\n");
	let t = new Lr("!xml"), n = t, r = "";
	this.matcher.reset(), this.entityDecoder.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0;
	let i = this.options, a = new Rr(i.processEntities), o = e.length;
	for (let s = 0; s < o; s++) if (e[s] === "<") {
		let c = e.charCodeAt(s + 1);
		if (c === 47) {
			let t = vi(e, ">", s, "Closing Tag is not closed."), a = e.substring(s + 2, t).trim();
			if (i.removeNSPrefix) {
				let e = a.indexOf(":");
				e !== -1 && (a = a.substr(e + 1));
			}
			a = Ci(i.transformTagName, a, "", i).tagName, n && (r = this.saveTextToParentTag(r, n, this.readonlyMatcher));
			let o = this.matcher.getCurrentTag();
			if (a && i.unpairedTagsSet.has(a)) throw Error(`Unpaired tag can not be used as closing tag: </${a}>`);
			o && i.unpairedTagsSet.has(o) && (this.matcher.pop(), this.tagsNodeStack.pop()), this.matcher.pop(), this.isCurrentNodeStopNode = !1, n = this.tagsNodeStack.pop(), r = "", s = t;
		} else if (c === 63) {
			let t = bi(e, s, !1, "?>");
			if (!t) throw Error("Pi Tag is not closed.");
			r = this.saveTextToParentTag(r, n, this.readonlyMatcher);
			let a = this.buildAttributesMap(t.tagExp, this.matcher, t.tagName, !0);
			if (a) {
				let e = a[this.options.attributeNamePrefix + "version"];
				this.entityDecoder.setXmlVersion(Number(e) || 1);
			}
			if (!(i.ignoreDeclaration && t.tagName === "?xml" || i.ignorePiTags)) {
				let e = new Lr(t.tagName);
				e.add(i.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && !0 !== i.ignoreAttributes && (e[":@"] = a), this.addChild(n, e, this.readonlyMatcher, s);
			}
			s = t.closeIndex + 1;
		} else if (c === 33 && e.charCodeAt(s + 2) === 45 && e.charCodeAt(s + 3) === 45) {
			let t = vi(e, "-->", s + 4, "Comment is not closed.");
			if (i.commentPropName) {
				let a = e.substring(s + 4, t - 2);
				r = this.saveTextToParentTag(r, n, this.readonlyMatcher), n.add(i.commentPropName, [{ [i.textNodeName]: a }]);
			}
			s = t;
		} else if (c === 33 && e.charCodeAt(s + 2) === 68) {
			let t = a.readDocType(e, s);
			this.entityDecoder.addInputEntities(t.entities), s = t.i;
		} else if (c === 33 && e.charCodeAt(s + 2) === 91) {
			let t = vi(e, "]]>", s, "CDATA is not closed.") - 2, a = e.substring(s + 9, t);
			r = this.saveTextToParentTag(r, n, this.readonlyMatcher);
			let o = this.parseTextData(a, n.tagname, this.readonlyMatcher, !0, !1, !0, !0);
			o ??= "", i.cdataPropName ? n.add(i.cdataPropName, [{ [i.textNodeName]: a }]) : n.add(i.textNodeName, o), s = t + 2;
		} else {
			let a = bi(e, s, i.removeNSPrefix);
			if (!a) {
				let t = e.substring(Math.max(0, s - 50), Math.min(o, s + 50));
				throw Error(`readTagExp returned undefined at position ${s}. Context: "${t}"`);
			}
			let c = a.tagName, l = a.rawTagName, u = a.tagExp, d = a.attrExpPresent, f = a.closeIndex;
			if ({tagName: c, tagExp: u} = Ci(i.transformTagName, c, u, i), i.strictReservedNames && (c === i.commentPropName || c === i.cdataPropName || c === i.textNodeName || c === i.attributesGroupName)) throw Error(`Invalid tag name: ${c}`);
			n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, this.readonlyMatcher, !1));
			let p = n;
			p && i.unpairedTagsSet.has(p.tagname) && (n = this.tagsNodeStack.pop(), this.matcher.pop());
			let m = !1;
			u.length > 0 && u.lastIndexOf("/") === u.length - 1 && (m = !0, c[c.length - 1] === "/" ? (c = c.substr(0, c.length - 1), u = c) : u = u.substr(0, u.length - 1), d = c !== u);
			let h, g = null;
			h = si(l), c !== t.tagname && this.matcher.push(c, {}, h), c !== u && d && (g = this.buildAttributesMap(u, this.matcher, c), g && oi(g, i)), c !== t.tagname && (this.isCurrentNodeStopNode = this.isItStopNode());
			let _ = s;
			if (this.isCurrentNodeStopNode) {
				let t = "";
				if (m) s = a.closeIndex;
				else if (i.unpairedTagsSet.has(c)) s = a.closeIndex;
				else {
					let n = this.readStopNodeData(e, l, f + 1);
					if (!n) throw Error(`Unexpected end of ${l}`);
					s = n.i, t = n.tagContent;
				}
				let r = new Lr(c);
				g && (r[":@"] = g), r.add(i.textNodeName, t), this.matcher.pop(), this.isCurrentNodeStopNode = !1, this.addChild(n, r, this.readonlyMatcher, _);
			} else {
				if (m) {
					({tagName: c, tagExp: u} = Ci(i.transformTagName, c, u, i));
					let e = new Lr(c);
					g && (e[":@"] = g), this.addChild(n, e, this.readonlyMatcher, _), this.matcher.pop(), this.isCurrentNodeStopNode = !1;
				} else {
					if (i.unpairedTagsSet.has(c)) {
						let e = new Lr(c);
						g && (e[":@"] = g), this.addChild(n, e, this.readonlyMatcher, _), this.matcher.pop(), this.isCurrentNodeStopNode = !1, s = a.closeIndex;
						continue;
					}
					{
						let e = new Lr(c);
						if (this.tagsNodeStack.length > i.maxNestedTags) throw Error("Maximum nested tags exceeded");
						this.tagsNodeStack.push(n), g && (e[":@"] = g), this.addChild(n, e, this.readonlyMatcher, _), n = e;
					}
				}
				r = "", s = f;
			}
		}
	} else r += e[s];
	return t.child;
};
function mi(e, t, n, r) {
	this.options.captureMetaData || (r = void 0);
	let i = this.options.jPath ? n.toString() : n, a = this.options.updateTag(t.tagname, i, t[":@"]);
	!1 === a || (typeof a == "string" && (t.tagname = a), e.addChild(t, r));
}
function hi(e, t, n) {
	let r = this.options.processEntities;
	if (!r || !r.enabled) return e;
	if (r.allowedTags) {
		let i = this.options.jPath ? n.toString() : n;
		if (!(Array.isArray(r.allowedTags) ? r.allowedTags.includes(t) : r.allowedTags(t, i))) return e;
	}
	if (r.tagFilter) {
		let i = this.options.jPath ? n.toString() : n;
		if (!r.tagFilter(t, i)) return e;
	}
	return this.entityDecoder.decode(e);
}
function gi(e, t, n, r) {
	return e &&= (r === void 0 && (r = t.child.length === 0), (e = this.parseTextData(e, t.tagname, n, !1, !!t[":@"] && Object.keys(t[":@"]).length !== 0, r)) !== void 0 && e !== "" && t.add(this.options.textNodeName, e), ""), e;
}
function _i() {
	return this.stopNodeExpressionsSet.size !== 0 && this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
function vi(e, t, n, r) {
	let i = e.indexOf(t, n);
	if (i === -1) throw Error(r);
	return i + t.length - 1;
}
function yi(e, t, n, r) {
	let i = e.indexOf(t, n);
	if (i === -1) throw Error(r);
	return i;
}
function bi(e, t, n) {
	let r = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", r = 0, i = e.length, a = n.charCodeAt(0), o = n.length > 1 ? n.charCodeAt(1) : -1, s = "", c = t;
		for (let n = t; n < i; n++) {
			let t = e.charCodeAt(n);
			if (r) t === r && (r = 0);
			else if (t === 34 || t === 39) r = t;
			else if (t === a) {
				if (o === -1 || e.charCodeAt(n + 1) === o) return s += e.substring(c, n), {
					data: s,
					index: n
				};
			} else t !== 9 || r || (s += e.substring(c, n) + " ", c = n + 1);
		}
	}(e, t + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
	if (!r) return;
	let i = r.data, a = r.index, o = i.search(/\s/), s = i, c = !0;
	o !== -1 && (s = i.substring(0, o), i = i.substring(o + 1).trimStart());
	let l = s;
	if (n) {
		let e = s.indexOf(":");
		e !== -1 && (s = s.substr(e + 1), c = s !== r.data.substr(e + 1));
	}
	return {
		tagName: s,
		tagExp: i,
		closeIndex: a,
		attrExpPresent: c,
		rawTagName: l
	};
}
function xi(e, t, n) {
	let r = n, i = 1, a = e.length;
	for (; n < a; n++) if (e[n] === "<") {
		let a = e.charCodeAt(n + 1);
		if (a === 47) {
			let a = yi(e, ">", n, `${t} is not closed`);
			if (e.substring(n + 2, a).trim() === t && (i--, i === 0)) return {
				tagContent: e.substring(r, n),
				i: a
			};
			n = a;
		} else if (a === 63) n = vi(e, "?>", n + 1, "StopNode is not closed.");
		else if (a === 33 && e.charCodeAt(n + 2) === 45 && e.charCodeAt(n + 3) === 45) n = vi(e, "-->", n + 3, "StopNode is not closed.");
		else if (a === 33 && e.charCodeAt(n + 2) === 91) n = vi(e, "]]>", n, "StopNode is not closed.") - 2;
		else {
			let r = bi(e, n, ">");
			r && ((r && r.tagName) === t && r.tagExp[r.tagExp.length - 1] !== "/" && i++, n = r.closeIndex);
		}
	}
}
function Si(e, t, n) {
	if (t && typeof e == "string") {
		let t = e.trim();
		return t === "true" || t !== "false" && function(e) {
			let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			if (t = Object.assign({}, Ur, t), !e || typeof e != "string") return e;
			let n = e.trim();
			if (n.length === 0 || t.skipLike !== void 0 && t.skipLike.test(n)) return e;
			if (n === "0") return 0;
			if (t.hex && Vr.test(n)) return function(e) {
				if (parseInt) return parseInt(e, 16);
				if (Number.parseInt) return Number.parseInt(e, 16);
				if (window && window.parseInt) return window.parseInt(e, 16);
				throw Error("parseInt, Number.parseInt, window.parseInt are not supported");
			}(n);
			if (isFinite(n)) {
				if (n.includes("e") || n.includes("E")) return function(e, t, n) {
					if (!n.eNotation) return e;
					let r = t.match(Wr);
					if (r) {
						let i = r[1] || "", a = r[3].indexOf("e") === -1 ? "E" : "e", o = r[2], s = i ? e[o.length + 1] === a : e[o.length] === a;
						return o.length > 1 && s ? e : (o.length !== 1 || !r[3].startsWith(`.${a}`) && r[3][0] !== a) && o.length > 0 ? n.leadingZeros && !s ? (t = (r[1] || "") + r[3], Number(t)) : e : Number(t);
					}
					return e;
				}(e, n, t);
				{
					let i = Hr.exec(n);
					if (i) {
						let a = i[1] || "", o = i[2], s = ((r = i[3]) && r.indexOf(".") !== -1 && ((r = r.replace(/0+$/, "")) === "." ? r = "0" : r[0] === "." ? r = "0" + r : r[r.length - 1] === "." && (r = r.substring(0, r.length - 1))), r), c = a ? e[o.length + 1] === "." : e[o.length] === ".";
						if (!t.leadingZeros && (o.length > 1 || o.length === 1 && !c)) return e;
						{
							let r = Number(n), i = String(r);
							if (r === 0) return r;
							if (i.search(/[eE]/) !== -1) return t.eNotation ? r : e;
							if (n.indexOf(".") !== -1) return i === "0" || i === s || i === `${a}${s}` ? r : e;
							let c = o ? s : n;
							return o ? c === i || a + c === i ? r : e : c === i || c === a + i ? r : e;
						}
					}
					return e;
				}
			}
			var r;
			return function(e, t, n) {
				let r = t === 1 / 0;
				switch (n.infinity.toLowerCase()) {
					case "null": return null;
					case "infinity": return t;
					case "string": return r ? "Infinity" : "-Infinity";
					default: return e;
				}
			}(e, Number(n), t);
		}(e, n);
	}
	return e === void 0 ? "" : e;
}
function Ci(e, t, n, r) {
	if (e) {
		let r = e(t);
		n === t && (n = r), t = r;
	}
	return {
		tagName: t = wi(t, r),
		tagExp: n
	};
}
function wi(e, t) {
	if (Ar.includes(e)) throw Error(`[SECURITY] Invalid name: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
	return kr.includes(e) ? t.onDangerousProperty(e) : e;
}
var Ti = Lr.getMetaDataSymbol();
function Ei(e, t) {
	if (!e || typeof e != "object") return {};
	if (!t) return e;
	let n = {};
	for (let r in e) r.startsWith(t) ? n[r.substring(t.length)] = e[r] : n[r] = e[r];
	return n;
}
function Di(e, t, n, r) {
	return Oi(e, t, n, r);
}
function Oi(e, t, n, r) {
	let i, a = {};
	for (let o = 0; o < e.length; o++) {
		let s = e[o], c = ki(s);
		if (c !== void 0 && c !== t.textNodeName) {
			let e = Ei(s[":@"] || {}, t.attributeNamePrefix);
			n.push(c, e);
		}
		if (c === t.textNodeName) i === void 0 ? i = s[c] : i += "" + s[c];
		else {
			if (c === void 0) continue;
			if (s[c]) {
				let e = Oi(s[c], t, n, r), i = ji(e, t);
				if (s[":@"] ? Ai(e, s[":@"], r, t) : Object.keys(e).length !== 1 || e[t.textNodeName] === void 0 || t.alwaysCreateTextNode ? Object.keys(e).length === 0 && (t.alwaysCreateTextNode ? e[t.textNodeName] = "" : e = "") : e = e[t.textNodeName], s[Ti] !== void 0 && typeof e == "object" && e && (e[Ti] = s[Ti]), a[c] !== void 0 && Object.prototype.hasOwnProperty.call(a, c)) Array.isArray(a[c]) || (a[c] = [a[c]]), a[c].push(e);
				else {
					let n = t.jPath ? r.toString() : r;
					a[c] = t.isArray(c, n, i) ? [e] : e;
				}
				c !== void 0 && c !== t.textNodeName && n.pop();
			}
		}
	}
	return typeof i == "string" ? i.length > 0 && (a[t.textNodeName] = i) : i !== void 0 && (a[t.textNodeName] = i), a;
}
function ki(e) {
	let t = Object.keys(e);
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (n !== ":@") return n;
	}
}
function Ai(e, t, n, r) {
	if (t) {
		let i = Object.keys(t), a = i.length;
		for (let o = 0; o < a; o++) {
			let a = i[o], s = a.startsWith(r.attributeNamePrefix) ? a.substring(r.attributeNamePrefix.length) : a, c = r.jPath ? n.toString() + "." + s : n;
			e[a] = r.isArray(a, c, !0, !0) ? [t[a]] : t[a];
		}
	}
}
function ji(e, t) {
	let { textNodeName: n } = t, r = Object.keys(e).length;
	return r === 0 || !(r !== 1 || !e[n] && typeof e[n] != "boolean" && e[n] !== 0);
}
var Mi = {
	allowBooleanAttributes: !1,
	unpairedTags: []
};
function Ni(e) {
	return e === " " || e === "	" || e === "\n" || e === "\r";
}
function Pi(e, t) {
	let n = t;
	for (; t < e.length; t++) if (e[t] == "?" || e[t] == " ") {
		let r = e.substr(n, t - n);
		if (t > 5 && r === "xml") return X("InvalidXml", "XML declaration allowed only at the start of the document.", Z(e, t));
		if (e[t] == "?" && e[t + 1] == ">") {
			t++;
			break;
		}
	}
	return t;
}
function Fi(e, t) {
	if (e.length > t + 5 && e[t + 1] === "-" && e[t + 2] === "-") {
		for (t += 3; t < e.length; t++) if (e[t] === "-" && e[t + 1] === "-" && e[t + 2] === ">") {
			t += 2;
			break;
		}
	} else if (e.length > t + 8 && e[t + 1] === "D" && e[t + 2] === "O" && e[t + 3] === "C" && e[t + 4] === "T" && e[t + 5] === "Y" && e[t + 6] === "P" && e[t + 7] === "E") {
		let n = 1;
		for (t += 8; t < e.length; t++) if (e[t] === "<") n++;
		else if (e[t] === ">" && (n--, n === 0)) break;
	} else if (e.length > t + 9 && e[t + 1] === "[" && e[t + 2] === "C" && e[t + 3] === "D" && e[t + 4] === "A" && e[t + 5] === "T" && e[t + 6] === "A" && e[t + 7] === "[") {
		for (t += 8; t < e.length; t++) if (e[t] === "]" && e[t + 1] === "]" && e[t + 2] === ">") {
			t += 2;
			break;
		}
	}
	return t;
}
function Ii(e, t) {
	let n = "", r = "", i = !1;
	for (; t < e.length; t++) {
		if (e[t] === "\"" || e[t] === "'") r === "" ? r = e[t] : r !== e[t] || (r = "");
		else if (e[t] === ">" && r === "") {
			i = !0;
			break;
		}
		n += e[t];
	}
	return r === "" && {
		value: n,
		index: t,
		tagClosed: i
	};
}
var Li = /* @__PURE__ */ RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
function Ri(e, t) {
	let n = Dr(e, Li), r = {};
	for (let e = 0; e < n.length; e++) {
		if (n[e][1].length === 0) return X("InvalidAttr", "Attribute '" + n[e][2] + "' has no space in starting.", Vi(n[e]));
		if (n[e][3] !== void 0 && n[e][4] === void 0) return X("InvalidAttr", "Attribute '" + n[e][2] + "' is without value.", Vi(n[e]));
		if (n[e][3] === void 0 && !t.allowBooleanAttributes) return X("InvalidAttr", "boolean attribute '" + n[e][2] + "' is not allowed.", Vi(n[e]));
		let i = n[e][2];
		if (!Bi(i)) return X("InvalidAttr", "Attribute '" + i + "' is an invalid name.", Vi(n[e]));
		if (Object.prototype.hasOwnProperty.call(r, i)) return X("InvalidAttr", "Attribute '" + i + "' is repeated.", Vi(n[e]));
		r[i] = 1;
	}
	return !0;
}
function zi(e, t) {
	if (e[++t] === ";") return -1;
	if (e[t] === "#") return function(e, t) {
		let n = /\d/;
		for (e[t] === "x" && (t++, n = /[\da-fA-F]/); t < e.length; t++) {
			if (e[t] === ";") return t;
			if (!e[t].match(n)) break;
		}
		return -1;
	}(e, ++t);
	let n = 0;
	for (; t < e.length; t++, n++) if (!(e[t].match(/\w/) && n < 20)) {
		if (e[t] === ";") break;
		return -1;
	}
	return t;
}
function X(e, t, n) {
	return { err: {
		code: e,
		msg: t,
		line: n.line || n,
		col: n.col
	} };
}
function Bi(e) {
	return Or(e);
}
function Z(e, t) {
	let n = e.substring(0, t).split(/\r?\n/);
	return {
		line: n.length,
		col: n[n.length - 1].length + 1
	};
}
function Vi(e) {
	return e.startIndex + e[1].length;
}
var Hi = class {
	constructor(e) {
		this.externalEntities = {}, this.options = Fr(e);
	}
	parse(e, t) {
		if (typeof e != "string" && e.toString) e = e.toString();
		else if (typeof e != "string") throw Error("XML data is accepted in String or Bytes[] form.");
		if (t) {
			!0 === t && (t = {});
			let n = function(e, t) {
				t = Object.assign({}, Mi, t);
				let n = [], r = !1, i = !1;
				e[0] === "﻿" && (e = e.substr(1));
				for (let a = 0; a < e.length; a++) if (e[a] === "<" && e[a + 1] === "?") {
					if (a += 2, a = Pi(e, a), a.err) return a;
				} else {
					if (e[a] !== "<") {
						if (Ni(e[a])) continue;
						return X("InvalidChar", "char '" + e[a] + "' is not expected.", Z(e, a));
					}
					{
						let o = a;
						if (a++, e[a] === "!") {
							a = Fi(e, a);
							continue;
						}
						{
							let s = !1;
							e[a] === "/" && (s = !0, a++);
							let c = "";
							for (; a < e.length && e[a] !== ">" && e[a] !== " " && e[a] !== "	" && e[a] !== "\n" && e[a] !== "\r"; a++) c += e[a];
							if (c = c.trim(), c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1), a--), !Or(c)) {
								let t;
								return t = c.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + c + "' is an invalid name.", X("InvalidTag", t, Z(e, a));
							}
							let l = Ii(e, a);
							if (!1 === l) return X("InvalidAttr", "Attributes for '" + c + "' have open quote.", Z(e, a));
							let u = l.value;
							if (a = l.index, u[u.length - 1] === "/") {
								let n = a - u.length;
								u = u.substring(0, u.length - 1);
								let i = Ri(u, t);
								if (!0 !== i) return X(i.err.code, i.err.msg, Z(e, n + i.err.line));
								r = !0;
							} else if (s) {
								if (!l.tagClosed) return X("InvalidTag", "Closing tag '" + c + "' doesn't have proper closing.", Z(e, a));
								if (u.trim().length > 0) return X("InvalidTag", "Closing tag '" + c + "' can't have attributes or invalid starting.", Z(e, o));
								if (n.length === 0) return X("InvalidTag", "Closing tag '" + c + "' has not been opened.", Z(e, o));
								{
									let t = n.pop();
									if (c !== t.tagName) {
										let n = Z(e, t.tagStartPos);
										return X("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + n.line + ", col " + n.col + ") instead of closing tag '" + c + "'.", Z(e, o));
									}
									n.length == 0 && (i = !0);
								}
							} else {
								let s = Ri(u, t);
								if (!0 !== s) return X(s.err.code, s.err.msg, Z(e, a - u.length + s.err.line));
								if (!0 === i) return X("InvalidXml", "Multiple possible root nodes found.", Z(e, a));
								t.unpairedTags.indexOf(c) !== -1 || n.push({
									tagName: c,
									tagStartPos: o
								}), r = !0;
							}
							for (a++; a < e.length; a++) if (e[a] === "<") {
								if (e[a + 1] === "!") {
									a++, a = Fi(e, a);
									continue;
								}
								if (e[a + 1] !== "?") break;
								if (a = Pi(e, ++a), a.err) return a;
							} else if (e[a] === "&") {
								let t = zi(e, a);
								if (t == -1) return X("InvalidChar", "char '&' is not expected.", Z(e, a));
								a = t;
							} else if (!0 === i && !Ni(e[a])) return X("InvalidXml", "Extra text at the end", Z(e, a));
							e[a] === "<" && a--;
						}
					}
				}
				return r ? n.length == 1 ? X("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", Z(e, n[0].tagStartPos)) : !(n.length > 0) || X("InvalidXml", "Invalid '" + JSON.stringify(n.map(((e) => e.tagName)), null, 4).replace(/\r?\n/g, "") + "' found.", {
					line: 1,
					col: 1
				}) : X("InvalidXml", "Start tag expected.", 1);
			}(e, t);
			if (!0 !== n) throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`);
		}
		let n = new ci(this.options, this.externalEntities), r = n.parseXml(e);
		return this.options.preserveOrder || r === void 0 ? r : Di(r, this.options, n.matcher, n.readonlyMatcher);
	}
	addEntity(e, t) {
		if (t.indexOf("&") !== -1) throw Error("Entity value can't have '&'");
		if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
		if (t === "&") throw Error("An entity with value '&' is not permitted");
		this.externalEntities[e] = t;
	}
	static getMetaDataSymbol() {
		return Lr.getMetaDataSymbol();
	}
}, Ui = R(829), Wi = R.n(Ui), Gi = function(e) {
	return e.Array = "array", e.Object = "object", e.Original = "original", e;
}(Gi || {});
function Ki(e) {
	return typeof e == "string" ? e : e.toString(".", !1);
}
function qi(e, t) {
	if (!e.endsWith("propstat.prop.displayname")) return t;
}
function Ji(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gi.Original, r = Wi().get(e, t);
	return n === "array" && !1 === Array.isArray(r) ? [r] : n === "object" && Array.isArray(r) ? r[0] : r;
}
function Yi(e, t) {
	return t ??= {
		attributeNamePrefix: "@",
		attributeParsers: [],
		tagParsers: [qi]
	}, new Promise(((n) => {
		n(function(e) {
			let { multistatus: t } = e;
			if (t === "") return { multistatus: { response: [] } };
			if (!t) throw Error("Invalid response: No root multistatus found");
			let n = { multistatus: Array.isArray(t) ? t[0] : t };
			return Wi().set(n, "multistatus.response", Ji(n, "multistatus.response", Gi.Array)), Wi().set(n, "multistatus.response", Wi().get(n, "multistatus.response").map(((e) => function(e) {
				let t = Object.assign({}, e);
				return t.status ? Wi().set(t, "status", Ji(t, "status", Gi.Object)) : (Wi().set(t, "propstat", Ji(t, "propstat", Gi.Object)), Wi().set(t, "propstat.prop", Ji(t, "propstat.prop", Gi.Object))), t;
			}(e)))), n;
		}(function(e) {
			let { attributeNamePrefix: t, attributeParsers: n, entityDecoder: r, tagParsers: i } = e, a = {
				allowBooleanAttributes: !0,
				attributeNamePrefix: t,
				textNodeName: "text",
				ignoreAttributes: !1,
				removeNSPrefix: !0,
				jPath: !1,
				numberParseOptions: {
					hex: !0,
					leadingZeros: !1
				},
				attributeValueProcessor(e, t, r) {
					let i = Ki(r);
					for (let e of n) try {
						let n = e(i, t);
						if (n !== t) return n;
					} catch {}
					return t;
				},
				tagValueProcessor(e, t, n) {
					let r = Ki(n);
					for (let e of i) try {
						let n = e(r, t);
						if (n !== t) return n;
					} catch {}
					return t;
				}
			};
			return r && (a.entityDecoder = new ai({ limit: {
				maxTotalExpansions: r.limit?.maxTotalExpansions ?? 0,
				maxExpandedLength: r.limit?.maxExpandedLength ?? 0
			} })), new Hi(a);
		}(t).parse(e)));
	}));
}
function Xi(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], { getlastmodified: r = null, getcontentlength: i = "0", resourcetype: a = null, getcontenttype: o = null, getetag: s = null } = e, c = a && typeof a == "object" && a.collection !== void 0 ? "directory" : "file", l = {
		filename: t,
		basename: Ut().basename(t),
		lastmod: r,
		size: parseInt(i, 10),
		type: c,
		etag: typeof s == "string" ? s.replace(/"/g, "") : null
	};
	return c === "file" && (l.mime = o && typeof o == "string" ? o.split(";")[0] : ""), n && (e.displayname !== void 0 && (e.displayname = String(e.displayname)), l.props = e), l;
}
function Zi(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = null;
	try {
		e.multistatus.response[0].propstat && (r = e.multistatus.response[0]);
	} catch {}
	if (!r) throw Error("Failed getting item stat: bad response");
	let { propstat: { prop: i, status: a } } = r, [o, s, c] = a.split(" ", 3), l = parseInt(s, 10);
	if (l >= 400) {
		let e = /* @__PURE__ */ Error(`Invalid response: ${l} ${c}`);
		throw e.status = l, e;
	}
	return Xi(i, qt(t), n);
}
function Qi(e) {
	switch (String(e)) {
		case "-3": return "unlimited";
		case "-2":
		case "-1": return "unknown";
		default: return parseInt(String(e), 10);
	}
}
function $i(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var ea = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, { details: r = !1 } = n;
	return $i(H(U({
		url: B(e.remoteURL, z(t)),
		method: "PROPFIND",
		headers: {
			Accept: "text/plain,application/xml",
			Depth: "0"
		}
	}, e, n), e), (function(n) {
		return q(e, n), $i(n.text(), (function(i) {
			return $i(Yi(i, e.parsing), (function(e) {
				return Sr(n, Zi(e, t, r), r);
			}));
		}));
	}));
}));
function ta(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var na = ra((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = function(e) {
		if (!e || e === "/") return [];
		let t = e, n = [];
		do
			n.push(t), t = Ut().dirname(t);
		while (t && t !== "/");
		return n;
	}(qt(t));
	r.sort(((e, t) => e.length > t.length ? 1 : t.length > e.length ? -1 : 0));
	let i = !1;
	return function(e, t, n) {
		if (typeof e[oa] == "function") {
			var r, i, a, o = e[oa]();
			function n(e) {
				try {
					for (; !(r = o.next()).done;) if ((e = t(r.value)) && e.then) {
						if (!ca(e)) return void e.then(n, a ||= Q.bind(null, i = new sa(), 2));
						e = e.v;
					}
					i ? Q(i, 1, e) : i = e;
				} catch (e) {
					Q(i ||= new sa(), 2, e);
				}
			}
			if (n(), o.return) {
				var s = function(e) {
					try {
						r.done || o.return();
					} catch {}
					return e;
				};
				if (i && i.then) return i.then(s, (function(e) {
					throw s(e);
				}));
				s();
			}
			return i;
		}
		if (!("length" in e)) throw TypeError("Object is not iterable");
		for (var c = [], l = 0; l < e.length; l++) c.push(e[l]);
		return function(e, t, n) {
			var r, i, a = -1;
			return function o(s) {
				try {
					for (; ++a < e.length && (!n || !n());) if ((s = t(a)) && s.then) {
						if (!ca(s)) return void s.then(o, i ||= Q.bind(null, r = new sa(), 2));
						s = s.v;
					}
					r ? Q(r, 1, s) : r = s;
				} catch (e) {
					Q(r ||= new sa(), 2, e);
				}
			}(), r;
		}(c, (function(e) {
			return t(c[e]);
		}), n);
	}(r, (function(r) {
		return a = function() {
			return function(n, i) {
				try {
					var a = ta(ea(e, r), (function(e) {
						if (e.type !== "directory") throw Error(`Path includes a file: ${t}`);
					}));
				} catch (e) {
					return i(e);
				}
				return a && a.then ? a.then(void 0, i) : a;
			}(0, (function(t) {
				let a = t;
				return function() {
					if (a.status === 404) return i = !0, aa(la(e, r, {
						...n,
						recursive: !1
					}));
					throw t;
				}();
			}));
		}, (o = function() {
			if (i) return aa(la(e, r, {
				...n,
				recursive: !1
			}));
		}()) && o.then ? o.then(a) : a();
		var a, o;
	}), (function() {
		return !1;
	}));
}));
function ra(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
function ia() {}
function aa(e, t) {
	if (!t) return e && e.then ? e.then(ia) : Promise.resolve();
}
var oa = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Q(e, t, n) {
	if (!e.s) {
		if (n instanceof sa) {
			if (!n.s) return void (n.o = Q.bind(null, e, t));
			1 & t && (t = n.s), n = n.v;
		}
		if (n && n.then) return void n.then(Q.bind(null, e, t), Q.bind(null, e, 2));
		e.s = t, e.v = n;
		let r = e.o;
		r && r(e);
	}
}
var sa = function() {
	function e() {}
	return e.prototype.then = function(t, n) {
		let r = new e(), i = this.s;
		if (i) {
			let e = 1 & i ? t : n;
			if (e) {
				try {
					Q(r, 1, e(this.v));
				} catch (e) {
					Q(r, 2, e);
				}
				return r;
			}
			return this;
		}
		return this.o = function(e) {
			try {
				let i = e.v;
				1 & e.s ? Q(r, 1, t ? t(i) : i) : n ? Q(r, 1, n(i)) : Q(r, 2, i);
			} catch (e) {
				Q(r, 2, e);
			}
		}, r;
	}, e;
}();
function ca(e) {
	return e instanceof sa && 1 & e.s;
}
var la = ra((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	if (!0 === n.recursive) return na(e, t, n);
	let r = U({
		url: B(e.remoteURL, (i = z(t), i.endsWith("/") ? i : i + "/")),
		method: "MKCOL"
	}, e, n);
	var i;
	return ta(H(r, e), (function(t) {
		q(e, t);
	}));
})), ua = R(388), da = R.n(ua), fa = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = {};
	if (typeof n.range == "object" && typeof n.range.start == "number") {
		let e = `bytes=${n.range.start}-`;
		typeof n.range.end == "number" && (e = `${e}${n.range.end}`), r.Range = e;
	}
	let i = U({
		url: B(e.remoteURL, z(t)),
		method: "GET",
		headers: r
	}, e, n);
	return o = function(t) {
		if (q(e, t), r.Range && t.status !== 206) {
			let e = /* @__PURE__ */ Error(`Invalid response code for partial request: ${t.status}`);
			throw e.status = t.status, e;
		}
		return n.callback && setTimeout((() => {
			n.callback(t);
		}), 0), t.body;
	}, (a = H(i, e)) && a.then || (a = Promise.resolve(a)), o ? a.then(o) : a;
	var a, o;
})), pa = () => {}, ma = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n) {
	n.url ||= B(e.remoteURL, z(t));
	let r = U(n, e, {});
	return a = function(t) {
		return q(e, t), t;
	}, (i = H(r, e)) && i.then || (i = Promise.resolve(i)), a ? i.then(a) : i;
	var i, a;
})), ha = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = U({
		url: B(e.remoteURL, z(t)),
		method: "DELETE"
	}, e, n);
	return a = function(t) {
		q(e, t);
	}, (i = H(r, e)) && i.then || (i = Promise.resolve(i)), a ? i.then(a) : i;
	var i, a;
})), ga = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return function(r, i) {
		try {
			var a = (o = ea(e, t, n), s = function() {
				return !0;
			}, c ? s ? s(o) : o : (o && o.then || (o = Promise.resolve(o)), s ? o.then(s) : o));
		} catch (e) {
			return i(e);
		}
		var o, s, c;
		return a && a.then ? a.then(void 0, i) : a;
	}(0, (function(e) {
		if (e.status === 404) return !1;
		throw e;
	}));
}));
function _a(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var va = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return _a(H(U({
		url: B(e.remoteURL, z(t), "/"),
		method: "PROPFIND",
		headers: {
			Accept: "text/plain,application/xml",
			Depth: n.deep ? "infinity" : "1"
		}
	}, e, n), e), (function(r) {
		return q(e, r), _a(r.text(), (function(i) {
			if (!i) throw Error("Failed parsing directory contents: Empty response");
			return _a(Yi(i, e.parsing), (function(i) {
				let a = Kt(t), o = function(e, t, n) {
					let r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], i = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], a = Ut().join(t, "/"), { multistatus: { response: o } } = e, s = o.map(((e) => {
						let t = function(e) {
							try {
								return e.replace(/^https?:\/\/[^\/]+/, "");
							} catch (e) {
								throw new Vt(e, "Failed normalising HREF");
							}
						}(e.href), { propstat: { prop: n } } = e;
						return Xi(n, a === "/" ? decodeURIComponent(qt(t)) : qt(Ut().relative(decodeURIComponent(a), decodeURIComponent(t))), r);
					}));
					return i ? s : s.filter(((e) => e.basename && (e.type === "file" || e.filename !== n.replace(/\/$/, ""))));
				}(i, Kt(e.remoteBasePath || e.remotePath), a, n.details, n.includeSelf);
				return n.glob && (o = function(e, t) {
					return e.filter(((e) => G(e.filename, t, { matchBase: !0 })));
				}(o, n.glob)), Sr(r, o, n.details);
			}));
		}));
	}));
}));
function ya(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
var ba = ya((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return xa(H(U({
		url: B(e.remoteURL, z(t)),
		method: "GET",
		headers: { Accept: "text/plain" },
		transformResponse: [wa]
	}, e, n), e), (function(t) {
		return q(e, t), xa(t.text(), (function(e) {
			return Sr(t, e, n.details);
		}));
	}));
}));
function xa(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Sa = ya((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return xa(H(U({
		url: B(e.remoteURL, z(t)),
		method: "GET"
	}, e, n), e), (function(t) {
		let r;
		return q(e, t), function(e, t) {
			var n = e();
			return n && n.then ? n.then(t) : t();
		}((function() {
			return xa(t.arrayBuffer(), (function(e) {
				r = e;
			}));
		}), (function() {
			return Sr(t, r, n.details);
		}));
	}));
})), Ca = ya((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, { format: r = "binary" } = n;
	if (r !== "binary" && r !== "text") throw new Vt({ info: { code: on.InvalidOutputFormat } }, `Invalid output format: ${r}`);
	return r === "text" ? ba(e, t, n) : Sa(e, t, n);
})), wa = (e) => e;
function Ta(e, t) {
	let n = "";
	t.format && t.indentBy.length > 0 && (n = "\n");
	let r = [];
	if (t.stopNodes && Array.isArray(t.stopNodes)) for (let e = 0; e < t.stopNodes.length; e++) {
		let n = t.stopNodes[e];
		typeof n == "string" ? r.push(new qr(n)) : n instanceof qr && r.push(n);
	}
	return Ea(e, t, n, new Kr(), r);
}
function Ea(e, t, n, r, i) {
	let a = "", o = !1;
	if (t.maxNestedTags && r.getDepth() > t.maxNestedTags) throw Error("Maximum nested tags exceeded");
	if (!Array.isArray(e)) {
		if (e != null) {
			let n = e.toString();
			return n = Na(n, t), n;
		}
		return "";
	}
	for (let s = 0; s < e.length; s++) {
		let c = e[s], l = Aa(c);
		if (l === void 0) continue;
		let u = Da(c[":@"], t);
		r.push(l, u);
		let d = Ma(r, i);
		if (l === t.textNodeName) {
			let e = c[l];
			d || (e = t.tagValueProcessor(l, e), e = Na(e, t)), o && (a += n), a += e, o = !1, r.pop();
			continue;
		}
		if (l === t.cdataPropName) {
			o && (a += n);
			let e = c[l][0][t.textNodeName];
			a += `<![CDATA[${String(e).replace(/\]\]>/g, "]]]]><![CDATA[>")}]]>`, o = !1, r.pop();
			continue;
		}
		if (l === t.commentPropName) {
			let e = c[l][0][t.textNodeName];
			a += n + `\x3c!--${String(e).replace(/--/g, "- -").replace(/-$/, "- ")}--\x3e`, o = !0, r.pop();
			continue;
		}
		if (l[0] === "?") {
			let e = ja(c[":@"], t, d), i = l === "?xml" ? "" : n, s = c[l][0][t.textNodeName];
			s = s.length === 0 ? "" : " " + s, a += i + `<${l}${s}${e}?>`, o = !0, r.pop();
			continue;
		}
		let f = n;
		f !== "" && (f += t.indentBy);
		let p = n + `<${l}${ja(c[":@"], t, d)}`, m;
		m = d ? Oa(c[l], t) : Ea(c[l], t, f, r, i), t.unpairedTags.indexOf(l) === -1 ? m && m.length !== 0 || !t.suppressEmptyNode ? m && m.endsWith(">") ? a += p + `>${m}${n}</${l}>` : (a += p + ">", m && n !== "" && (m.includes("/>") || m.includes("</")) ? a += n + t.indentBy + m + n : a += m, a += `</${l}>`) : a += p + "/>" : t.suppressUnpairedNode ? a += p + ">" : a += p + "/>", o = !0, r.pop();
	}
	return a;
}
function Da(e, t) {
	if (!e || t.ignoreAttributes) return null;
	let n = {}, r = !1;
	for (let i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i.startsWith(t.attributeNamePrefix) ? i.substr(t.attributeNamePrefix.length) : i] = e[i], r = !0);
	return r ? n : null;
}
function Oa(e, t) {
	if (!Array.isArray(e)) return e == null ? "" : e.toString();
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e[r], a = Aa(i);
		if (a === t.textNodeName) n += i[a];
		else if (a === t.cdataPropName) n += i[a][0][t.textNodeName];
		else if (a === t.commentPropName) n += i[a][0][t.textNodeName];
		else {
			if (a && a[0] === "?") continue;
			if (a) {
				let e = ka(i[":@"], t), r = Oa(i[a], t);
				r && r.length !== 0 ? n += `<${a}${e}>${r}</${a}>` : n += `<${a}${e}/>`;
			}
		}
	}
	return n;
}
function ka(e, t) {
	let n = "";
	if (e && !t.ignoreAttributes) for (let r in e) {
		if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
		let i = e[r];
		!0 === i && t.suppressBooleanAttributes ? n += ` ${r.substr(t.attributeNamePrefix.length)}` : n += ` ${r.substr(t.attributeNamePrefix.length)}="${i}"`;
	}
	return n;
}
function Aa(e) {
	let t = Object.keys(e);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (Object.prototype.hasOwnProperty.call(e, r) && r !== ":@") return r;
	}
}
function ja(e, t, n) {
	let r = "";
	if (e && !t.ignoreAttributes) for (let i in e) {
		if (!Object.prototype.hasOwnProperty.call(e, i)) continue;
		let a;
		n ? a = e[i] : (a = t.attributeValueProcessor(i, e[i]), a = Na(a, t)), !0 === a && t.suppressBooleanAttributes ? r += ` ${i.substr(t.attributeNamePrefix.length)}` : r += ` ${i.substr(t.attributeNamePrefix.length)}="${a}"`;
	}
	return r;
}
function Ma(e, t) {
	if (!t || t.length === 0) return !1;
	for (let n = 0; n < t.length; n++) if (e.matches(t[n])) return !0;
	return !1;
}
function Na(e, t) {
	if (e && e.length > 0 && t.processEntities) for (let n = 0; n < t.entities.length; n++) {
		let r = t.entities[n];
		e = e.replace(r.regex, r.val);
	}
	return e;
}
var Pa = {
	attributeNamePrefix: "@_",
	attributesGroupName: !1,
	textNodeName: "#text",
	ignoreAttributes: !0,
	cdataPropName: !1,
	format: !1,
	indentBy: "  ",
	suppressEmptyNode: !1,
	suppressUnpairedNode: !0,
	suppressBooleanAttributes: !0,
	tagValueProcessor: function(e, t) {
		return t;
	},
	attributeValueProcessor: function(e, t) {
		return t;
	},
	preserveOrder: !1,
	commentPropName: !1,
	unpairedTags: [],
	entities: [
		{
			regex: /* @__PURE__ */ RegExp("&", "g"),
			val: "&amp;"
		},
		{
			regex: /* @__PURE__ */ RegExp(">", "g"),
			val: "&gt;"
		},
		{
			regex: /* @__PURE__ */ RegExp("<", "g"),
			val: "&lt;"
		},
		{
			regex: /* @__PURE__ */ RegExp("'", "g"),
			val: "&apos;"
		},
		{
			regex: /* @__PURE__ */ RegExp("\"", "g"),
			val: "&quot;"
		}
	],
	processEntities: !0,
	stopNodes: [],
	oneListGroup: !1,
	maxNestedTags: 100,
	jPath: !0
};
function $(e) {
	if (this.options = Object.assign({}, Pa, e), this.options.stopNodes && Array.isArray(this.options.stopNodes) && (this.options.stopNodes = this.options.stopNodes.map(((e) => typeof e == "string" && e.startsWith("*.") ? ".." + e.substring(2) : e))), this.stopNodeExpressions = [], this.options.stopNodes && Array.isArray(this.options.stopNodes)) for (let e = 0; e < this.options.stopNodes.length; e++) {
		let t = this.options.stopNodes[e];
		typeof t == "string" ? this.stopNodeExpressions.push(new qr(t)) : t instanceof qr && this.stopNodeExpressions.push(t);
	}
	var t;
	!0 === this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
		return !1;
	} : (this.ignoreAttributesFn = typeof (t = this.options.ignoreAttributes) == "function" ? t : Array.isArray(t) ? (e) => {
		for (let n of t) if (typeof n == "string" && e === n || n instanceof RegExp && n.test(e)) return !0;
	} : () => !1, this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = La), this.processTextOrObjNode = Fa, this.options.format ? (this.indentate = Ia, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
		return "";
	}, this.tagEndChar = ">", this.newLine = "");
}
function Fa(e, t, n, r) {
	let i = this.extractAttributes(e);
	if (r.push(t, i), this.checkStopNode(r)) {
		let i = this.buildRawContent(e), a = this.buildAttributesForStopNode(e);
		return r.pop(), this.buildObjectNode(i, t, a, n);
	}
	let a = this.j2x(e, n + 1, r);
	return r.pop(), e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1 ? this.buildTextValNode(e[this.options.textNodeName], t, a.attrStr, n, r) : this.buildObjectNode(a.val, t, a.attrStr, n);
}
function Ia(e) {
	return this.options.indentBy.repeat(e);
}
function La(e) {
	return !(!e.startsWith(this.options.attributeNamePrefix) || e === this.options.textNodeName) && e.substr(this.attrPrefixLen);
}
$.prototype.build = function(e) {
	if (this.options.preserveOrder) return Ta(e, this.options);
	{
		Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = { [this.options.arrayNodeName]: e });
		let t = new Kr();
		return this.j2x(e, 0, t).val;
	}
}, $.prototype.j2x = function(e, t, n) {
	let r = "", i = "";
	if (this.options.maxNestedTags && n.getDepth() >= this.options.maxNestedTags) throw Error("Maximum nested tags exceeded");
	let a = this.options.jPath ? n.toString() : n, o = this.checkStopNode(n);
	for (let s in e) if (Object.prototype.hasOwnProperty.call(e, s)) {
		if (e[s] === void 0) this.isAttribute(s) && (i += "");
		else if (e[s] === null) this.isAttribute(s) || s === this.options.cdataPropName ? i += "" : s[0] === "?" ? i += this.indentate(t) + "<" + s + "?" + this.tagEndChar : i += this.indentate(t) + "<" + s + "/" + this.tagEndChar;
		else if (e[s] instanceof Date) i += this.buildTextValNode(e[s], s, "", t, n);
		else if (typeof e[s] != "object") {
			let c = this.isAttribute(s);
			if (c && !this.ignoreAttributesFn(c, a)) r += this.buildAttrPairStr(c, "" + e[s], o);
			else if (!c) {
				if (s === this.options.textNodeName) {
					let t = this.options.tagValueProcessor(s, "" + e[s]);
					i += this.replaceEntitiesValue(t);
				} else {
					n.push(s);
					let r = this.checkStopNode(n);
					if (n.pop(), r) {
						let n = "" + e[s];
						i += n === "" ? this.indentate(t) + "<" + s + this.closeTag(s) + this.tagEndChar : this.indentate(t) + "<" + s + ">" + n + "</" + s + this.tagEndChar;
					} else i += this.buildTextValNode(e[s], s, "", t, n);
				}
			}
		} else if (Array.isArray(e[s])) {
			let r = e[s].length, a = "", o = "";
			for (let c = 0; c < r; c++) {
				let r = e[s][c];
				if (r !== void 0) {
					if (r === null) s[0] === "?" ? i += this.indentate(t) + "<" + s + "?" + this.tagEndChar : i += this.indentate(t) + "<" + s + "/" + this.tagEndChar;
					else if (typeof r == "object") {
						if (this.options.oneListGroup) {
							n.push(s);
							let e = this.j2x(r, t + 1, n);
							n.pop(), a += e.val, this.options.attributesGroupName && r.hasOwnProperty(this.options.attributesGroupName) && (o += e.attrStr);
						} else a += this.processTextOrObjNode(r, s, t, n);
					} else if (this.options.oneListGroup) {
						let e = this.options.tagValueProcessor(s, r);
						e = this.replaceEntitiesValue(e), a += e;
					} else {
						n.push(s);
						let e = this.checkStopNode(n);
						if (n.pop(), e) {
							let e = "" + r;
							a += e === "" ? this.indentate(t) + "<" + s + this.closeTag(s) + this.tagEndChar : this.indentate(t) + "<" + s + ">" + e + "</" + s + this.tagEndChar;
						} else a += this.buildTextValNode(r, s, "", t, n);
					}
				}
			}
			this.options.oneListGroup && (a = this.buildObjectNode(a, s, o, t)), i += a;
		} else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
			let t = Object.keys(e[s]), n = t.length;
			for (let i = 0; i < n; i++) r += this.buildAttrPairStr(t[i], "" + e[s][t[i]], o);
		} else i += this.processTextOrObjNode(e[s], s, t, n);
	}
	return {
		attrStr: r,
		val: i
	};
}, $.prototype.buildAttrPairStr = function(e, t, n) {
	return n || (t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t)), this.options.suppressBooleanAttributes && t === "true" ? " " + e : " " + e + "=\"" + t + "\"";
}, $.prototype.extractAttributes = function(e) {
	if (!e || typeof e != "object") return null;
	let t = {}, n = !1;
	if (this.options.attributesGroupName && e[this.options.attributesGroupName]) {
		let r = e[this.options.attributesGroupName];
		for (let e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e.startsWith(this.options.attributeNamePrefix) ? e.substring(this.options.attributeNamePrefix.length) : e] = r[e], n = !0);
	} else for (let r in e) {
		if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
		let i = this.isAttribute(r);
		i && (t[i] = e[r], n = !0);
	}
	return n ? t : null;
}, $.prototype.buildRawContent = function(e) {
	if (typeof e == "string") return e;
	if (typeof e != "object" || !e) return String(e);
	if (e[this.options.textNodeName] !== void 0) return e[this.options.textNodeName];
	let t = "";
	for (let n in e) {
		if (!Object.prototype.hasOwnProperty.call(e, n) || this.isAttribute(n) || this.options.attributesGroupName && n === this.options.attributesGroupName) continue;
		let r = e[n];
		if (n === this.options.textNodeName) t += r;
		else if (Array.isArray(r)) {
			for (let e of r) if (typeof e == "string" || typeof e == "number") t += `<${n}>${e}</${n}>`;
			else if (typeof e == "object" && e) {
				let r = this.buildRawContent(e), i = this.buildAttributesForStopNode(e);
				t += r === "" ? `<${n}${i}/>` : `<${n}${i}>${r}</${n}>`;
			}
		} else if (typeof r == "object" && r) {
			let e = this.buildRawContent(r), i = this.buildAttributesForStopNode(r);
			t += e === "" ? `<${n}${i}/>` : `<${n}${i}>${e}</${n}>`;
		} else t += `<${n}>${r}</${n}>`;
	}
	return t;
}, $.prototype.buildAttributesForStopNode = function(e) {
	if (!e || typeof e != "object") return "";
	let t = "";
	if (this.options.attributesGroupName && e[this.options.attributesGroupName]) {
		let n = e[this.options.attributesGroupName];
		for (let e in n) {
			if (!Object.prototype.hasOwnProperty.call(n, e)) continue;
			let r = e.startsWith(this.options.attributeNamePrefix) ? e.substring(this.options.attributeNamePrefix.length) : e, i = n[e];
			!0 === i && this.options.suppressBooleanAttributes ? t += " " + r : t += " " + r + "=\"" + i + "\"";
		}
	} else for (let n in e) {
		if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
		let r = this.isAttribute(n);
		if (r) {
			let i = e[n];
			!0 === i && this.options.suppressBooleanAttributes ? t += " " + r : t += " " + r + "=\"" + i + "\"";
		}
	}
	return t;
}, $.prototype.buildObjectNode = function(e, t, n, r) {
	if (e === "") return t[0] === "?" ? this.indentate(r) + "<" + t + n + "?" + this.tagEndChar : this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
	{
		let i = "</" + t + this.tagEndChar, a = "";
		return t[0] === "?" && (a = "?", i = ""), !n && n !== "" || e.indexOf("<") !== -1 ? !1 !== this.options.commentPropName && t === this.options.commentPropName && a.length === 0 ? this.indentate(r) + `\x3c!--${e}--\x3e` + this.newLine : this.indentate(r) + "<" + t + n + a + this.tagEndChar + e + this.indentate(r) + i : this.indentate(r) + "<" + t + n + a + ">" + e + i;
	}
}, $.prototype.closeTag = function(e) {
	let t = "";
	return this.options.unpairedTags.indexOf(e) === -1 ? t = this.options.suppressEmptyNode ? "/" : `></${e}` : this.options.suppressUnpairedNode || (t = "/"), t;
}, $.prototype.checkStopNode = function(e) {
	if (!this.stopNodeExpressions || this.stopNodeExpressions.length === 0) return !1;
	for (let t = 0; t < this.stopNodeExpressions.length; t++) if (e.matches(this.stopNodeExpressions[t])) return !0;
	return !1;
}, $.prototype.buildTextValNode = function(e, t, n, r, i) {
	if (!1 !== this.options.cdataPropName && t === this.options.cdataPropName) {
		let t = String(e).replace(/\]\]>/g, "]]]]><![CDATA[>");
		return this.indentate(r) + `<![CDATA[${t}]]>` + this.newLine;
	}
	if (!1 !== this.options.commentPropName && t === this.options.commentPropName) {
		let t = String(e).replace(/--/g, "- -").replace(/-$/, "- ");
		return this.indentate(r) + `\x3c!--${t}--\x3e` + this.newLine;
	}
	if (t[0] === "?") return this.indentate(r) + "<" + t + n + "?" + this.tagEndChar;
	{
		let i = this.options.tagValueProcessor(t, e);
		return i = this.replaceEntitiesValue(i), i === "" ? this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(r) + "<" + t + n + ">" + i + "</" + t + this.tagEndChar;
	}
}, $.prototype.replaceEntitiesValue = function(e) {
	if (e && e.length > 0 && this.options.processEntities) for (let t = 0; t < this.options.entities.length; t++) {
		let n = this.options.entities[t];
		e = e.replace(n.regex, n.val);
	}
	return e;
};
var Ra = $;
function za(e) {
	return new Ra({
		attributeNamePrefix: "@_",
		format: !0,
		ignoreAttributes: !1,
		suppressEmptyNode: !0
	}).build(Ba({ lockinfo: {
		"@_xmlns:d": "DAV:",
		lockscope: { exclusive: {} },
		locktype: { write: {} },
		owner: { href: e }
	} }, "d"));
}
function Ba(e, t) {
	let n = { ...e };
	for (let e in n) n.hasOwnProperty(e) && (n[e] && typeof n[e] == "object" && e.indexOf(":") === -1 ? (n[`${t}:${e}`] = Ba(n[e], t), delete n[e]) : !1 === /^@_/.test(e) && (n[`${t}:${e}`] = n[e], delete n[e]));
	return n;
}
function Va(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
function Ha(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
var Ua = Ha((function(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
	return Va(H(U({
		url: B(e.remoteURL, z(t)),
		method: "UNLOCK",
		headers: { "Lock-Token": n }
	}, e, r), e), (function(t) {
		if (q(e, t), t.status !== 204 && t.status !== 200) throw xr(t);
	}));
})), Wa = Ha((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, { refreshToken: r, timeout: i = Ga } = n, a = {
		Accept: "text/plain,application/xml",
		Timeout: i
	};
	return r && (a.If = r), Va(H(U({
		url: B(e.remoteURL, z(t)),
		method: "LOCK",
		headers: a,
		data: za(e.contactHref)
	}, e, n), e), (function(t) {
		return q(e, t), Va(t.text(), (function(e) {
			let n = (a = e, new Hi({
				removeNSPrefix: !0,
				parseAttributeValue: !0,
				parseTagValue: !0
			}).parse(a)), r = Wi().get(n, "prop.lockdiscovery.activelock.locktoken.href"), i = Wi().get(n, "prop.lockdiscovery.activelock.timeout");
			var a;
			if (!r) throw xr(t, "No lock token received: ");
			return {
				token: r,
				serverTimeout: i
			};
		}));
	}));
})), Ga = "Infinite, Second-4100000000";
function Ka(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var qa = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.path || "/";
	return Ka(H(U({
		url: B(e.remoteURL, n),
		method: "PROPFIND",
		headers: {
			Accept: "text/plain,application/xml",
			Depth: "0"
		}
	}, e, t), e), (function(n) {
		return q(e, n), Ka(n.text(), (function(r) {
			return Ka(Yi(r, e.parsing), (function(e) {
				return Sr(n, function(e) {
					try {
						let [t] = e.multistatus.response, { propstat: { prop: { "quota-used-bytes": n, "quota-available-bytes": r } } } = t;
						return n !== void 0 && r !== void 0 ? {
							used: parseInt(String(n), 10),
							available: Qi(r)
						} : null;
					} catch {}
					return null;
				}(e), t.details);
			}));
		}));
	}));
}));
function Ja(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Ya = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, { details: r = !1 } = n;
	return Ja(H(U({
		url: B(e.remoteURL, z(t)),
		method: "SEARCH",
		headers: {
			Accept: "text/plain,application/xml",
			"Content-Type": e.headers["Content-Type"] || "application/xml; charset=utf-8"
		}
	}, e, n), e), (function(n) {
		return q(e, n), Ja(n.text(), (function(i) {
			return Ja(Yi(i, e.parsing), (function(e) {
				return Sr(n, function(e, t, n) {
					let r = {
						truncated: !1,
						results: []
					};
					return r.truncated = e.multistatus.response.some(((e) => (e.status || e.propstat?.status).split(" ", 3)?.[1] === "507" && e.href.replace(/\/$/, "").endsWith(z(t).replace(/\/$/, "")))), e.multistatus.response.forEach(((e) => {
						if (e.propstat === void 0) return;
						let t = e.href.split("/").map(decodeURIComponent).join("/");
						r.results.push(Xi(e.propstat.prop, t, n));
					})), r;
				}(e, t, r), r);
			}));
		}));
	}));
})), Xa = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = U({
		url: B(e.remoteURL, z(t)),
		method: "MOVE",
		headers: {
			Destination: B(e.remoteURL, z(n)),
			Overwrite: !1 === r.overwrite ? "F" : "T"
		}
	}, e, r);
	return o = function(t) {
		q(e, t);
	}, (a = H(i, e)) && a.then || (a = Promise.resolve(a)), o ? a.then(o) : a;
	var a, o;
})), Za = R(172);
function Qa(e) {
	if (xn(e)) return e.byteLength;
	if (Sn(e)) return e.length;
	if (typeof e == "string") return (0, Za.d)(e);
	throw new Vt({ info: { code: on.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
}
var $a = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, { contentLength: i = !0, overwrite: a = !0 } = r, o = { "Content-Type": "application/octet-stream" };
	!1 === i || (o["Content-Length"] = typeof i == "number" ? `${i}` : `${Qa(n)}`), a || (o["If-None-Match"] = "*");
	let s = U({
		url: B(e.remoteURL, z(t)),
		method: "PUT",
		headers: o,
		data: n
	}, e, r);
	return l = function(t) {
		try {
			q(e, t);
		} catch (e) {
			let t = e;
			if (t.status !== 412 || a) throw t;
			return !1;
		}
		return !0;
	}, (c = H(s, e)) && c.then || (c = Promise.resolve(c)), l ? c.then(l) : c;
	var c, l;
})), eo = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = U({
		url: B(e.remoteURL, z(t)),
		method: "OPTIONS"
	}, e, n);
	return a = function(t) {
		try {
			q(e, t);
		} catch (e) {
			throw e;
		}
		return {
			compliance: (t.headers.get("DAV") ?? "").split(",").map(((e) => e.trim())),
			server: t.headers.get("Server") ?? ""
		};
	}, (i = H(r, e)) && i.then || (i = Promise.resolve(i)), a ? i.then(a) : i;
	var i, a;
}));
function to(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var no = ao((function(e, t, n, r, i) {
	let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
	if (n > r || n < 0) throw new Vt({ info: { code: on.InvalidUpdateRange } }, `Invalid update range ${n} for partial update`);
	let o = {
		"Content-Type": "application/octet-stream",
		"Content-Length": "" + (r - n + 1),
		"Content-Range": `bytes ${n}-${r}/*`
	};
	return to(H(U({
		url: B(e.remoteURL, z(t)),
		method: "PUT",
		headers: o,
		data: i
	}, e, a), e), (function(t) {
		q(e, t);
	}));
}));
function ro(e, t) {
	var n = e();
	return n && n.then ? n.then(t) : t(n);
}
var io = ao((function(e, t, n, r, i) {
	let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
	if (n > r || n < 0) throw new Vt({ info: { code: on.InvalidUpdateRange } }, `Invalid update range ${n} for partial update`);
	let o = {
		"Content-Type": "application/x-sabredav-partialupdate",
		"Content-Length": "" + (r - n + 1),
		"X-Update-Range": `bytes=${n}-${r}`
	};
	return to(H(U({
		url: B(e.remoteURL, z(t)),
		method: "PATCH",
		headers: o,
		data: i
	}, e, a), e), (function(t) {
		q(e, t);
	}));
}));
function ao(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
var oo = ao((function(e, t, n, r, i) {
	let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
	return to(eo(e, t, a), (function(o) {
		let s = !1;
		return ro((function() {
			if (o.compliance.includes("sabredav-partialupdate")) return to(io(e, t, n, r, i, a), (function(e) {
				return s = !0, e;
			}));
		}), (function(c) {
			let l = !1;
			return s ? c : ro((function() {
				if (o.server.includes("Apache") && o.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return to(no(e, t, n, r, i, a), (function(e) {
					return l = !0, e;
				}));
			}), (function(e) {
				if (l) return e;
				throw new Vt({ info: { code: on.NotSupported } }, "Not supported");
			}));
		}));
	}));
})), so = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function co(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { authType: n = null, remoteBasePath: r, contactHref: i = so, entityDecoder: a, ha1: o, headers: s = {}, httpAgent: c, httpsAgent: l, password: u, token: d, username: f, withCredentials: p } = t, m = n;
	m ||= f || u ? V.Password : V.None;
	let h = {
		authType: m,
		remoteBasePath: r,
		contactHref: i,
		ha1: o,
		headers: Object.assign({}, s),
		httpAgent: c,
		httpsAgent: l,
		password: u,
		parsing: {
			attributeNamePrefix: t.attributeNamePrefix ?? "@",
			attributeParsers: [],
			entityDecoder: a,
			tagParsers: [qi]
		},
		remotePath: Jt(e),
		remoteURL: e,
		token: d,
		username: f,
		withCredentials: p
	};
	return sn(h, f, u, d, o), {
		copyFile: (e, t, n) => Cr(h, e, t, n),
		createDirectory: (e, t) => la(h, e, t),
		createReadStream: (e, t) => function(e, t) {
			let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = new (da()).PassThrough();
			return fa(e, t, n).then(((e) => {
				e.pipe(r);
			})).catch(((e) => {
				r.emit("error", e);
			})), r;
		}(h, e, t),
		createWriteStream: (e, t, n) => function(e, t) {
			let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : pa, i = new (da()).PassThrough(), a = {};
			return !1 === n.overwrite && (a["If-None-Match"] = "*"), H(U({
				url: B(e.remoteURL, z(t)),
				method: "PUT",
				headers: a,
				data: i,
				maxRedirects: 0
			}, e, n), e).then(((t) => q(e, t))).then(((e) => {
				setTimeout((() => {
					r(e);
				}), 0);
			})).catch(((e) => {
				i.emit("error", e);
			})), i;
		}(h, e, t, n),
		customRequest: (e, t) => ma(h, e, t),
		deleteFile: (e, t) => ha(h, e, t),
		exists: (e, t) => ga(h, e, t),
		getDirectoryContents: (e, t) => va(h, e, t),
		getFileContents: (e, t) => Ca(h, e, t),
		getFileDownloadLink: (e) => function(e, t) {
			let n = B(e.remoteURL, z(t)), r = /^https:/i.test(n) ? "https" : "http";
			switch (e.authType) {
				case V.None: break;
				case V.Password: {
					let t = tn(e.headers.Authorization.replace(/^Basic /i, "").trim());
					n = n.replace(/^https?:\/\//, `${r}://${t}@`);
					break;
				}
				default: throw new Vt({ info: { code: on.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${e.authType}`);
			}
			return n;
		}(h, e),
		getFileUploadLink: (e) => function(e, t) {
			let n = `${B(e.remoteURL, z(t))}?Content-Type=application/octet-stream`, r = /^https:/i.test(n) ? "https" : "http";
			switch (e.authType) {
				case V.None: break;
				case V.Password: {
					let t = tn(e.headers.Authorization.replace(/^Basic /i, "").trim());
					n = n.replace(/^https?:\/\//, `${r}://${t}@`);
					break;
				}
				default: throw new Vt({ info: { code: on.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${e.authType}`);
			}
			return n;
		}(h, e),
		getHeaders: () => Object.assign({}, h.headers),
		getQuota: (e) => qa(h, e),
		lock: (e, t) => Wa(h, e, t),
		moveFile: (e, t, n) => Xa(h, e, t, n),
		putFileContents: (e, t, n) => $a(h, e, t, n),
		partialUpdateFileContents: (e, t, n, r, i) => oo(h, e, t, n, r, i),
		getDAVCompliance: (e) => eo(h, e),
		search: (e, t) => Ya(h, e, t),
		setHeaders: (e) => {
			h.headers = Object.assign({}, e);
		},
		stat: (e, t) => ea(h, e, t),
		unlock: (e, t, n) => Ua(h, e, t, n),
		registerAttributeParser: (e) => {
			h.parsing.attributeParsers.push(e);
		},
		registerTagParser: (e) => {
			h.parsing.tagParsers.push(e);
		}
	};
}
//#endregion
//#region node_modules/@nextcloud/files/dist/chunks/dav.mjs
function lo(e = "") {
	let t = at.NONE;
	return e ? (e.includes("G") && (t |= at.READ), e.includes("W") && (t |= at.WRITE), e.includes("CK") && (t |= at.CREATE), e.includes("NV") && (t |= at.UPDATE), e.includes("D") && (t |= at.DELETE), e.includes("R") && (t |= at.SHARE), t) : t;
}
var uo = [
	"d:getcontentlength",
	"d:getcontenttype",
	"d:getetag",
	"d:getlastmodified",
	"d:creationdate",
	"d:displayname",
	"d:quota-available-bytes",
	"d:resourcetype",
	"nc:has-preview",
	"nc:is-encrypted",
	"nc:mount-type",
	"oc:comments-unread",
	"oc:favorite",
	"oc:fileid",
	"oc:owner-display-name",
	"oc:owner-id",
	"oc:permissions",
	"oc:size",
	"nc:upload_time"
], fo = {
	d: "DAV:",
	nc: "http://nextcloud.org/ns",
	oc: "http://owncloud.org/ns",
	ocs: "http://open-collaboration-services.org/ns"
};
function po() {
	return Ze.davProperties ??= [...uo], Ze.davProperties.map((e) => `<${e} />`).join(" ");
}
function mo() {
	return Ze.davNamespaces ??= { ...fo }, Object.keys(Ze.davNamespaces).map((e) => `xmlns:${e}="${Ze.davNamespaces?.[e]}"`).join(" ");
}
function ho() {
	return `<?xml version="1.0"?>
		<d:propfind ${mo()}>
			<d:prop>
				${po()}
			</d:prop>
		</d:propfind>`;
}
function go() {
	return `<?xml version="1.0"?>
		<oc:filter-files ${mo()}>
			<d:prop>
				${po()}
			</d:prop>
			<oc:filter-rules>
				<oc:favorite>1</oc:favorite>
			</oc:filter-rules>
		</oc:filter-files>`;
}
function _o(e, t = 100) {
	let n = Me(), r = n.dav?.search_supports_upload_time, a = n.dav?.search_supports_last_activity ? "<nc:last_activity/>" : "<d:getlastmodified/>";
	return `<?xml version="1.0" encoding="UTF-8"?>
<d:searchrequest ${mo()}
	xmlns:ns="https://github.com/icewind1991/SearchDAV/ns">
	<d:basicsearch>
		<d:select>
			<d:prop>
				${po()}
			</d:prop>
		</d:select>
		<d:from>
			<d:scope>
				<d:href>/files/${i()?.uid}/</d:href>
				<d:depth>infinity</d:depth>
			</d:scope>
		</d:from>
		<d:where>
			<d:and>
				<d:or>
					<d:not>
						<d:eq>
							<d:prop>
								<d:getcontenttype/>
							</d:prop>
							<d:literal>httpd/unix-directory</d:literal>
						</d:eq>
					</d:not>
					<d:eq>
						<d:prop>
							<oc:size/>
						</d:prop>
						<d:literal>0</d:literal>
					</d:eq>
				</d:or>
				${r ? `
						<d:or>
							<d:gt>
								<d:prop>
									<d:getlastmodified/>
								</d:prop>
								<d:literal>${e}</d:literal>
							</d:gt>
							<d:gt>
								<d:prop>
									<nc:upload_time/>
								</d:prop>
								<d:literal>${e}</d:literal>
							</d:gt>
						</d:or>
				` : `
					<d:gt>
						<d:prop>
							<d:getlastmodified/>
						</d:prop>
						<d:literal>${e}</d:literal>
					</d:gt>
				`}
			</d:and>
		</d:where>
		<d:orderby>
			<d:order>
				<d:prop>
					${a}
				</d:prop>
				<d:descending/>
			</d:order>
		</d:orderby>
		<d:limit>
			<d:nresults>${t}</d:nresults>
			<ns:firstresult>0</ns:firstresult>
		</d:limit>
	</d:basicsearch>
</d:searchrequest>`;
}
function vo() {
	return bt() ? `/files/${xt()}` : `/files/${i()?.uid}`;
}
var yo = vo();
function bo() {
	let e = c("dav");
	return bt() ? e.replace("remote.php", "public.php") : e;
}
var xo = bo();
function So(e = xo, n = {}) {
	let r = co(e, { headers: n });
	function i(e) {
		r.setHeaders({
			...n,
			"X-Requested-With": "XMLHttpRequest",
			requesttoken: e ?? ""
		});
	}
	return s(i), i(t()), pn().patch("fetch", (e, t) => {
		let n = t.headers;
		return n?.method && (t.method = n.method, delete n.method), fetch(e, t);
	}), r;
}
async function Co(e = {}) {
	let t = e.client ?? So(), n = e.path ?? "/", r = e.davRoot ?? yo;
	return (await t.getDirectoryContents(`${r}${n}`, {
		signal: e.signal,
		details: !0,
		data: go(),
		headers: { method: "REPORT" },
		includeSelf: !0
	})).data.filter((e) => e.filename !== n).map((e) => wo(e, r));
}
function wo(e, t = yo, n = xo) {
	let r = i()?.uid;
	if (bt()) r ??= "anonymous";
	else if (!r) throw Error("No user id found");
	let a = e.props, o = lo(a?.permissions), s = String(a?.["owner-id"] || r), c = a.fileid || 0, l = new Date(Date.parse(e.lastmod)), u = new Date(Date.parse(a.creationdate)), d = {
		id: c,
		source: `${n}${e.filename}`,
		mtime: !isNaN(l.getTime()) && l.getTime() !== 0 ? l : void 0,
		crtime: !isNaN(u.getTime()) && u.getTime() !== 0 ? u : void 0,
		mime: e.mime || "application/octet-stream",
		displayname: a.displayname === void 0 ? void 0 : String(a.displayname),
		size: a?.size || Number.parseInt(a.getcontentlength || "0"),
		status: c < 0 ? $e.FAILED : void 0,
		permissions: o,
		owner: s,
		root: t,
		attributes: {
			...e,
			...a,
			hasPreview: a?.["has-preview"]
		}
	};
	return delete d.attributes?.props, e.type === "file" ? new tt(d) : new Xe(d);
}
//#endregion
//#region node_modules/@nextcloud/dialogs/dist/chunks/FilePicker.mjs
var To = {
	name: "FileIcon",
	emits: ["click"],
	props: {
		title: { type: String },
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
], Oo = { d: "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" }, ko = { key: 0 };
function Ao(e, t, n, r, i, a) {
	return h(), j("span", F(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon file-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(h(), j("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [N("path", Oo, [n.title ? (h(), j("title", ko, M(n.title), 1)) : w("", !0)])], 8, Do))], 16, Eo);
}
var jo = /* @__PURE__ */ I(To, [["render", Ao]]), Mo = {
	name: "MenuDownIcon",
	emits: ["click"],
	props: {
		title: { type: String },
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
], Fo = { d: "M7,10L12,15L17,10H7Z" }, Io = { key: 0 };
function Lo(e, t, n, r, i, a) {
	return h(), j("span", F(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon menu-down-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(h(), j("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [N("path", Fo, [n.title ? (h(), j("title", Io, M(n.title), 1)) : w("", !0)])], 8, Po))], 16, No);
}
var Ro = /* @__PURE__ */ I(Mo, [["render", Lo]]), zo = {
	name: "MenuUpIcon",
	emits: ["click"],
	props: {
		title: { type: String },
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
], Ho = { d: "M7,15L12,10L17,15H7Z" }, Uo = { key: 0 };
function Wo(e, t, n, r, i, a) {
	return h(), j("span", F(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon menu-up-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(h(), j("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [N("path", Ho, [n.title ? (h(), j("title", Uo, M(n.title), 1)) : w("", !0)])], 8, Vo))], 16, Bo);
}
var Go = /* @__PURE__ */ I(zo, [["render", Wo]]), Ko = {
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
], Yo = { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" }, Xo = { key: 0 };
function Zo(e, t, n, r, i, a) {
	return h(), j("span", F(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(h(), j("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [N("path", Yo, [n.title ? (h(), j("title", Xo, M(n.title), 1)) : w("", !0)])], 8, Jo))], 16, qo);
}
var Qo = /* @__PURE__ */ I(Ko, [["render", Zo]]), $o = {
	"file-picker__file-icon": "_file-picker__file-icon_1aykw_9",
	"file-picker__file-icon--primary": "_file-picker__file-icon--primary_1aykw_22",
	"file-picker__file-icon-overlay": "_file-picker__file-icon-overlay_1aykw_26"
}, es = /* @__PURE__ */ E({
	__name: "FilePreview",
	props: {
		node: {},
		cropImagePreviews: { type: Boolean }
	},
	setup(e) {
		let t = e, n = P($o), { previewURL: r, previewLoaded: i } = vt(ue(t, "node"), A(() => ({ cropPreview: t.cropImagePreviews }))), a = A(() => t.node.type === rt.File), o = A(() => {
			if (t.node.type !== rt.Folder) return null;
			if (t.node.attributes?.["is-encrypted"] === 1) return Pe;
			if (t.node.attributes?.["is-tag"]) return Le;
			let e = Object.values(t.node.attributes?.["share-types"] || {}).flat();
			if (e.some((e) => e === yt.Link || e === yt.Email)) return Ae;
			if (e.length > 0) return Ne;
			switch (t.node.attributes?.["mount-type"]) {
				case "external":
				case "external-session": return ke;
				case "group": return De;
				case "shared": return Ne;
			}
			return null;
		});
		return (e, t) => (h(), j("div", {
			style: se(k(i) ? { backgroundImage: `url(${k(r)})` } : void 0),
			class: he(n.value["file-picker__file-icon"])
		}, [k(i) ? w("", !0) : (h(), j(S, { key: 0 }, [a.value ? (h(), D(jo, {
			key: 0,
			size: 32
		})) : (h(), j(S, { key: 1 }, [o.value ? (h(), D(k(te), {
			key: 0,
			class: he(n.value["file-picker__file-icon-overlay"]),
			inline: "",
			path: o.value,
			size: 16
		}, null, 8, ["class", "path"])) : w("", !0), O(Qo, {
			class: he(n.value["file-picker__file-icon--primary"]),
			size: 32
		}, null, 8, ["class"])], 64))], 64))], 6));
	}
}), ts = [
	"tabindex",
	"aria-selected",
	"data-filename"
], ns = { class: "row-name" }, rs = {
	class: "file-picker__name-container",
	"data-testid": "row-name"
}, is = ["title", "textContent"], as = ["textContent"], os = { class: "row-size" }, ss = { class: "row-modified" }, cs = /* @__PURE__ */ I(/* @__PURE__ */ E({
	__name: "FileListRow",
	props: {
		allowPickDirectory: { type: Boolean },
		selected: { type: Boolean },
		showCheckbox: { type: Boolean },
		canPick: { type: Boolean },
		node: {},
		cropImagePreviews: { type: Boolean }
	},
	emits: ["update:selected", "enterDirectory"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = A(() => n.node.mtime ?? 0), a = A(() => Te(n.node.displayname)), o = A(() => n.node.displayname.slice(0, a.value ? -a.value.length : void 0)), s = A(() => n.node.type === rt.Folder), c = A(() => n.canPick && (n.allowPickDirectory || !s.value)), l = A(() => (n.node.permissions & at.READ) === at.READ);
		function u() {
			c.value && r("update:selected", !n.selected);
		}
		function d() {
			s.value ? l.value && r("enterDirectory", n.node) : u();
		}
		function f(e) {
			e.key === "Enter" && d();
		}
		return (t, n) => (h(), j("tr", F({
			tabindex: e.showCheckbox && !s.value ? void 0 : 0,
			"aria-selected": c.value ? e.selected : void 0,
			class: ["file-picker__row", [{
				"file-picker__row--selected": e.selected && !e.showCheckbox,
				"file-picker__row--not-navigatable": s.value && !l.value,
				"file-picker__row--not-pickable": !c.value
			}]],
			"data-filename": e.node.basename,
			"data-testid": "file-list-row"
		}, g({
			click: d,
			...!e.showCheckbox || s.value ? { keydown: f } : {}
		}, !0)), [
			e.showCheckbox ? (h(), j("td", {
				key: 0,
				class: "row-checkbox",
				onClick: ne(() => {}, ["stop"])
			}, [O(k(Ke), {
				"aria-label": k(L)("Select the row for {nodename}", { nodename: o.value }),
				disabled: !c.value,
				"data-testid": "row-checkbox",
				modelValue: e.selected,
				"onUpdate:modelValue": u
			}, null, 8, [
				"aria-label",
				"disabled",
				"modelValue"
			])])) : w("", !0),
			N("td", ns, [N("div", rs, [
				O(es, {
					node: e.node,
					cropImagePreviews: e.cropImagePreviews
				}, null, 8, ["node", "cropImagePreviews"]),
				N("div", {
					class: "file-picker__file-name",
					title: o.value,
					textContent: M(o.value)
				}, null, 8, is),
				N("div", {
					class: "file-picker__file-extension",
					textContent: M(a.value)
				}, null, 8, as)
			])]),
			N("td", os, M(k(Ye)(e.node.size || 0)), 1),
			N("td", ss, [O(k(st), {
				timestamp: i.value,
				ignoreSeconds: ""
			}, null, 8, ["timestamp"])])
		], 16, ts));
	}
}), [["__scopeId", "data-v-7857e8bd"]]), ls = {
	"aria-hidden": "true",
	class: "file-picker__row loading-row"
}, us = {
	key: 0,
	class: "row-checkbox"
}, ds = { class: "row-name" }, fs = { class: "row-wrapper" }, ps = /* @__PURE__ */ I(/* @__PURE__ */ E({
	__name: "LoadingTableRow",
	props: { showCheckbox: { type: Boolean } },
	setup(e) {
		return (t, n) => (h(), j("tr", ls, [
			e.showCheckbox ? (h(), j("td", us, [...n[0] ||= [N("span", null, null, -1)]])) : w("", !0),
			N("td", ds, [N("div", fs, [N("span", { class: he(k($o)["file-picker__file-icon"]) }, null, 2), n[1] ||= N("span", null, null, -1)])]),
			n[2] ||= N("td", { class: "row-size" }, [N("span")], -1),
			n[3] ||= N("td", { class: "row-modified" }, [N("span")], -1)
		]));
	}
}), [["__scopeId", "data-v-1f96131b"]]);
function ms() {
	let e = be("files", "config", null), t = P(e?.show_hidden ?? !0), n = P(e?.sort_favorites_first ?? !0), r = P(e?.crop_image_previews ?? !0);
	return f(async () => {
		if (bt()) je.debug("Skip loading files settings - currently on public share");
		else try {
			let { data: e } = await Ve.get(o("/apps/files/api/v1/configs"));
			t.value = e?.data?.show_hidden ?? !1, n.value = e?.data?.sort_favorites_first ?? !0, r.value = e?.data?.crop_image_previews ?? !0;
		} catch (e) {
			je.error("Could not load files settings", { error: e }), Fe(L("Could not load files settings"));
		}
	}), {
		showHiddenFiles: t,
		sortFavoritesFirst: n,
		cropImagePreviews: r
	};
}
function hs(e) {
	let t = (e) => e === "asc" ? "ascending" : e === "desc" ? "descending" : "none", n = be("files", "viewConfigs", null), r = P({
		sortBy: n?.files?.sorting_mode ?? "basename",
		order: t(n?.files?.sorting_direction ?? "asc")
	}), i = P({
		sortBy: n?.recent?.sorting_mode ?? "basename",
		order: t(n?.recent?.sorting_direction ?? "asc")
	}), a = P({
		sortBy: n?.favorites?.sorting_mode ?? "basename",
		order: t(n?.favorites?.sorting_direction ?? "asc")
	});
	f(async () => {
		if (bt()) je.debug("Skip loading files views - currently on public share");
		else try {
			let { data: e } = await Ve.get(o("/apps/files/api/v1/views"));
			r.value = {
				sortBy: e?.data?.files?.sorting_mode ?? "basename",
				order: t(e?.data?.files?.sorting_direction)
			}, a.value = {
				sortBy: e?.data?.favorites?.sorting_mode ?? "basename",
				order: t(e?.data?.favorites?.sorting_direction)
			}, i.value = {
				sortBy: e?.data?.recent?.sorting_mode ?? "basename",
				order: t(e?.data?.recent?.sorting_direction)
			};
		} catch (e) {
			je.error("Could not load files views", { error: e }), Fe(L("Could not load files views"));
		}
	});
	let s = A(() => oe(e || "files") === "files" ? r.value : oe(e) === "recent" ? i.value : a.value);
	return {
		filesViewConfig: r,
		favoritesViewConfig: a,
		recentViewConfig: i,
		currentConfig: s,
		sortBy: A(() => s.value.sortBy),
		order: A(() => s.value.order)
	};
}
var gs = {
	key: 0,
	class: "row-checkbox"
}, _s = { class: "hidden-visually" }, vs = ["aria-sort"], ys = { class: "header-wrapper" }, bs = {
	key: 2,
	style: { width: "44px" }
}, xs = ["aria-sort"], Ss = {
	key: 2,
	style: { width: "44px" }
}, Cs = ["aria-sort"], ws = {
	key: 2,
	style: { width: "44px" }
}, Ts = /* @__PURE__ */ I(/* @__PURE__ */ E({
	__name: "FileList",
	props: /* @__PURE__ */ ie({
		currentView: {},
		multiselect: { type: Boolean },
		allowPickDirectory: { type: Boolean },
		loading: { type: Boolean },
		files: {},
		canPick: { type: Function }
	}, {
		path: { required: !0 },
		pathModifiers: {},
		selectedFiles: { required: !0 },
		selectedFilesModifiers: {}
	}),
	emits: ["update:path", "update:selectedFiles"],
	setup(e) {
		let t = y(e, "path"), n = y(e, "selectedFiles"), r = e, i = P(), { currentConfig: a } = hs(r.currentView), o = A(() => i.value ?? a.value), s = A(() => o.value.sortBy === "basename" ? o.value.order === "none" ? void 0 : o.value.order : void 0), c = A(() => o.value.sortBy === "size" ? o.value.order === "none" ? void 0 : o.value.order : void 0), l = A(() => o.value.sortBy === "mtime" ? o.value.order === "none" ? void 0 : o.value.order : void 0);
		function d(e) {
			o.value.sortBy === e ? o.value.order === "ascending" ? i.value = {
				sortBy: o.value.sortBy,
				order: "descending"
			} : i.value = {
				sortBy: o.value.sortBy,
				order: "ascending"
			} : i.value = {
				sortBy: e,
				order: "ascending"
			};
		}
		let { sortFavoritesFirst: p, cropImagePreviews: m } = ms(), g = A(() => nt(r.files, {
			sortFoldersFirst: !0,
			sortFavoritesFirst: p.value,
			sortingOrder: o.value.order === "descending" ? "desc" : "asc",
			sortingMode: o.value.sortBy
		})), _ = A(() => r.files.filter((e) => r.allowPickDirectory || e.type !== rt.Folder)), v = A(() => !r.loading && n.value.length > 0 && n.value.length >= _.value.length);
		function b() {
			n.value.length < _.value.length ? n.value = [..._.value] : n.value = [];
		}
		function x(e) {
			n.value.includes(e) ? n.value = n.value.filter((t) => t.path !== e.path) : r.multiselect ? n.value = [...n.value, e] : n.value = [e];
		}
		function ee(e) {
			t.value = e.path;
		}
		let te = P(4), ne = P();
		{
			let e = () => ve(() => {
				let e = ne.value?.parentElement?.children || [], t = ne.value?.parentElement?.clientHeight || 450;
				for (let n = 0; n < e.length; n++) ne.value?.isSameNode(e[n]) || (t -= e[n].clientHeight);
				te.value = Math.max(1, Math.floor((t - 50) / 50));
			});
			f(() => {
				window.addEventListener("resize", e), e();
			}), ge(() => {
				window.removeEventListener("resize", e);
			});
		}
		return (t, r) => (h(), j("div", {
			ref_key: "fileContainer",
			ref: ne,
			class: "file-picker__files"
		}, [N("table", null, [N("thead", null, [N("tr", null, [
			e.multiselect ? (h(), j("th", gs, [N("span", _s, M(k(L)("Select entry")), 1), e.multiselect ? (h(), D(k(Ke), {
				key: 0,
				"aria-label": k(L)("Select all entries"),
				"data-testid": "select-all-checkbox",
				modelValue: v.value,
				"onUpdate:modelValue": b
			}, null, 8, ["aria-label", "modelValue"])) : w("", !0)])) : w("", !0),
			N("th", {
				"aria-sort": s.value,
				class: "row-name"
			}, [N("div", ys, [r[3] ||= N("span", { class: "file-picker__header-preview" }, null, -1), O(k(re), {
				"data-test": "file-picker_sort-name",
				variant: "tertiary",
				wide: "",
				onClick: r[0] ||= (e) => d("basename")
			}, {
				icon: C(() => [s.value === "ascending" ? (h(), D(Go, {
					key: 0,
					size: 20
				})) : s.value === "descending" ? (h(), D(Ro, {
					key: 1,
					size: 20
				})) : (h(), j("span", bs))]),
				default: C(() => [T(" " + M(k(L)("Name")), 1)]),
				_: 1
			})])], 8, vs),
			N("th", {
				"aria-sort": c.value,
				class: "row-size"
			}, [O(k(re), {
				variant: "tertiary",
				wide: "",
				onClick: r[1] ||= (e) => d("size")
			}, {
				icon: C(() => [c.value === "ascending" ? (h(), D(Go, {
					key: 0,
					size: 20
				})) : c.value === "descending" ? (h(), D(Ro, {
					key: 1,
					size: 20
				})) : (h(), j("span", Ss))]),
				default: C(() => [T(" " + M(k(L)("Size")), 1)]),
				_: 1
			})], 8, xs),
			N("th", {
				"aria-sort": l.value,
				class: "row-modified"
			}, [O(k(re), {
				variant: "tertiary",
				wide: "",
				onClick: r[2] ||= (e) => d("mtime")
			}, {
				icon: C(() => [l.value === "ascending" ? (h(), D(Go, {
					key: 0,
					size: 20
				})) : l.value === "descending" ? (h(), D(Ro, {
					key: 1,
					size: 20
				})) : (h(), j("span", ws))]),
				default: C(() => [T(" " + M(k(L)("Modified")), 1)]),
				_: 1
			})], 8, Cs)
		])]), N("tbody", null, [e.loading ? (h(!0), j(S, { key: 0 }, u(te.value, (t) => (h(), D(ps, {
			key: t,
			showCheckbox: e.multiselect
		}, null, 8, ["showCheckbox"]))), 128)) : (h(!0), j(S, { key: 1 }, u(g.value, (t) => (h(), D(cs, {
			key: t.fileid || t.path,
			allowPickDirectory: e.allowPickDirectory,
			showCheckbox: e.multiselect,
			canPick: (e.multiselect || n.value.length === 0 || n.value.includes(t)) && (e.canPick === void 0 || e.canPick(t)),
			selected: n.value.includes(t),
			node: t,
			cropImagePreviews: k(m),
			"onUpdate:selected": (e) => x(t),
			onEnterDirectory: ee
		}, null, 8, [
			"allowPickDirectory",
			"showCheckbox",
			"canPick",
			"selected",
			"node",
			"cropImagePreviews",
			"onUpdate:selected"
		]))), 128))])])], 512));
	}
}), [["__scopeId", "data-v-412efd5c"]]), Es = {
	name: "HomeIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Ds = ["aria-hidden", "aria-label"], Os = [
	"fill",
	"width",
	"height"
], ks = { d: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" }, As = { key: 0 };
function js(e, t, n, r, i, a) {
	return h(), j("span", F(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon home-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(h(), j("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [N("path", ks, [n.title ? (h(), j("title", As, M(n.title), 1)) : w("", !0)])], 8, Os))], 16, Ds);
}
var Ms = /* @__PURE__ */ I(Es, [["render", js]]), Ns = {
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
}, Ps = ["aria-hidden", "aria-label"], Fs = [
	"fill",
	"width",
	"height"
], Is = { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, Ls = { key: 0 };
function Rs(e, t, n, r, i, a) {
	return h(), j("span", F(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon plus-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(h(), j("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [N("path", Is, [n.title ? (h(), j("title", Ls, M(n.title), 1)) : w("", !0)])], 8, Fs))], 16, Ps);
}
var zs = /* @__PURE__ */ I(Ns, [["render", Rs]]), Bs = /* @__PURE__ */ I(/* @__PURE__ */ E({
	__name: "FilePickerBreadcrumbs",
	props: /* @__PURE__ */ ie({ showMenu: { type: Boolean } }, {
		path: { required: !0 },
		pathModifiers: {}
	}),
	emits: /* @__PURE__ */ ie(["createNode"], ["update:path"]),
	setup(e, { emit: t }) {
		let n = y(e, "path"), r = t, i = P(!1), a = P(""), o = ye("nameInput");
		function s() {
			let e = a.value.trim(), t = o.value?.$el?.querySelector("input"), n = "";
			try {
				Qe(e);
			} catch (e) {
				if (!(e instanceof it)) throw e;
				switch (e.reason) {
					case et.Character:
						n = L("\"{char}\" is not allowed inside a folder name.", { char: e.segment });
						break;
					case et.ReservedName:
						n = L("\"{segment}\" is a reserved name and not allowed for folder names.", { segment: e.segment });
						break;
					case et.Extension:
						n = L("Folder names must not end with \"{extension}\".", { extension: e.segment });
						break;
					default: n = L("Invalid folder name.");
				}
			}
			return t && t.setCustomValidity(n), n === "";
		}
		function c() {
			let e = a.value.trim();
			s() && (i.value = !1, r("createNode", e), a.value = "");
		}
		let l = A(() => n.value.split("/").filter((e) => e !== "").map((e, t, n) => ({
			name: e,
			path: "/" + n.slice(0, t + 1).join("/")
		})));
		return (t, r) => (h(), D(k(Ge), { class: "file-picker__breadcrumbs" }, fe({
			default: C(() => [O(k(He), {
				name: k(L)("All files"),
				title: k(L)("Home"),
				onClick: r[0] ||= (e) => n.value = "/"
			}, {
				icon: C(() => [O(Ms, { size: 20 })]),
				_: 1
			}, 8, ["name", "title"]), (h(!0), j(S, null, u(l.value, (e) => (h(), D(k(He), {
				key: e.path,
				name: e.name,
				title: e.path,
				onClick: (t) => n.value = e.path
			}, null, 8, [
				"name",
				"title",
				"onClick"
			]))), 128))]),
			_: 2
		}, [e.showMenu ? {
			name: "actions",
			fn: C(() => [O(k(Ce), {
				open: i.value,
				"onUpdate:open": r[2] ||= (e) => i.value = e,
				"aria-label": k(L)("Create directory"),
				forceMenu: !0,
				forceName: !0,
				menuName: k(L)("New"),
				variant: "secondary",
				onClose: r[3] ||= (e) => a.value = ""
			}, {
				icon: C(() => [O(zs, { size: 20 })]),
				default: C(() => [O(k(Pt), {
					ref_key: "nameInput",
					ref: o,
					modelValue: a.value,
					"onUpdate:modelValue": [r[1] ||= (e) => a.value = e, s],
					label: k(L)("New folder"),
					placeholder: k(L)("New folder name"),
					onSubmit: c
				}, {
					icon: C(() => [O(Qo, { size: 20 })]),
					_: 1
				}, 8, [
					"modelValue",
					"label",
					"placeholder"
				])]),
				_: 1
			}, 8, [
				"open",
				"aria-label",
				"menuName"
			])]),
			key: "0"
		} : void 0]), 1024));
	}
}), [["__scopeId", "data-v-b448b141"]]), Vs = {
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
}, Hs = ["aria-hidden", "aria-label"], Us = [
	"fill",
	"width",
	"height"
], Ws = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, Gs = { key: 0 };
function Ks(e, t, n, r, i, a) {
	return h(), j("span", F(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(h(), j("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [N("path", Ws, [n.title ? (h(), j("title", Gs, M(n.title), 1)) : w("", !0)])], 8, Us))], 16, Hs);
}
var qs = /* @__PURE__ */ I(Vs, [["render", Ks]]), Js = {
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
}, Ys = ["aria-hidden", "aria-label"], Xs = [
	"fill",
	"width",
	"height"
], Zs = { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, Qs = { key: 0 };
function $s(e, t, n, r, i, a) {
	return h(), j("span", F(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon magnify-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(h(), j("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [N("path", Zs, [n.title ? (h(), j("title", Qs, M(n.title), 1)) : w("", !0)])], 8, Xs))], 16, Ys);
}
var ec = /* @__PURE__ */ I(Js, [["render", $s]]);
function tc(e) {
	let t = [
		{
			id: "files",
			label: L("All files"),
			icon: Ie
		},
		{
			id: "recent",
			label: L("Recent"),
			icon: Oe
		},
		{
			id: "favorites",
			label: L("Favorites"),
			icon: Ee
		}
	];
	return {
		allViews: t,
		availableViews: e.value ? t.filter(({ id: e }) => e === "files") : t
	};
}
var nc = {
	key: 0,
	class: "file-picker__side"
}, rc = /* @__PURE__ */ I(/* @__PURE__ */ E({
	__name: "FilePickerNavigation",
	props: {
		currentView: {},
		filterString: {},
		isCollapsed: { type: Boolean },
		disabledNavigation: { type: Boolean }
	},
	emits: ["update:currentView", "update:filterString"],
	setup(e, { emit: t }) {
		let n = e, r = t, { availableViews: a } = tc(P(i() === null)), o = A(() => a.filter((e) => e.id === n.currentView)[0] ?? a[0]), s = (e) => r("update:filterString", e.toString());
		return (t, n) => (h(), j(S, null, [O(k(Je), {
			class: "file-picker__filter-input",
			label: k(L)("Filter file list"),
			showTrailingButton: !!e.filterString,
			modelValue: e.filterString,
			"onUpdate:modelValue": s,
			onTrailingButtonClick: n[0] ||= (e) => s("")
		}, {
			"trailing-button-icon": C(() => [O(qs, { size: 16 })]),
			default: C(() => [O(ec, { size: 16 })]),
			_: 1
		}, 8, [
			"label",
			"showTrailingButton",
			"modelValue"
		]), k(a).length > 1 && !e.disabledNavigation ? (h(), j(S, { key: 0 }, [e.isCollapsed ? (h(), D(k(ze), {
			key: 1,
			"aria-label": k(L)("Current view selector"),
			clearable: !1,
			searchable: !1,
			options: k(a),
			modelValue: o.value,
			"onUpdate:modelValue": n[1] ||= (e) => r("update:currentView", e.id)
		}, null, 8, [
			"aria-label",
			"options",
			"modelValue"
		])) : (h(), j("ul", nc, [(h(!0), j(S, null, u(k(a), (n) => (h(), j("li", { key: n.id }, [O(k(re), {
			variant: e.currentView === n.id ? "primary" : "tertiary",
			wide: !0,
			onClick: (e) => t.$emit("update:currentView", n.id)
		}, {
			icon: C(() => [O(k(te), {
				path: n.icon,
				size: 20
			}, null, 8, ["path"])]),
			default: C(() => [T(" " + M(n.label), 1)]),
			_: 2
		}, 1032, ["variant", "onClick"])]))), 128))]))], 64)) : w("", !0)], 64));
	}
}), [["__scopeId", "data-v-e1c54e23"]]);
async function ic({ client: e, signal: t }) {
	let n = Math.round(Date.now() / 1e3) - 1209600, { data: r } = await e.search("/", {
		signal: t,
		details: !0,
		data: _o(n)
	});
	return r.results.map((e) => wo(e));
}
async function ac({ client: e, path: t, signal: n }) {
	let r = (await e.getDirectoryContents(xe(yo, t), {
		signal: n,
		details: !0,
		includeSelf: !0,
		data: ho()
	})).data.map((e) => wo(e));
	return {
		contents: r.filter(({ path: e }) => e !== t),
		folder: r.find(({ path: e }) => t === e)
	};
}
async function oc(e, t) {
	let { data: n } = await e.stat(xe(yo, t), {
		details: !0,
		data: ho()
	});
	return wo(n);
}
function sc(e, t) {
	let n = So(), r = ce([]), i = ce(null), a = P(!0), o;
	async function s(e) {
		let i = xe(t.value, e);
		await n.createDirectory(xe(yo, i));
		let a = await oc(n, i);
		return r.value = [...r.value, a], a;
	}
	async function c() {
		o &&= (o.abort(), void 0), o = new AbortController(), a.value = !0;
		try {
			if (e.value === "favorites") r.value = await Co({
				client: n,
				path: t.value,
				signal: o.signal
			}), i.value = null;
			else if (e.value === "recent") r.value = await ic({
				client: n,
				signal: o.signal
			}), i.value = null;
			else {
				let e = await ac({
					client: n,
					path: t.value,
					signal: o.signal
				});
				i.value = e.folder, r.value = e.contents;
			}
		} catch (e) {
			if (e instanceof Error && e.name === "AbortError") return;
			throw e;
		} finally {
			o = void 0, a.value = !1;
		}
	}
	return ee([e, t], () => c()), f(() => c()), {
		isLoading: a,
		files: r,
		folder: i,
		loadFiles: c,
		createDirectory: s
	};
}
function cc(e) {
	let t = A(() => e.value.map((e) => e.split("/")));
	return { isSupportedMimeType: (e) => {
		let n = e.split("/");
		return t.value.some(([e, t]) => (n[0] === e || e === "*") && (n[1] === t || t === "*"));
	} };
}
var lc = { class: "file-picker__main" }, uc = {
	key: 1,
	class: "file-picker__view"
}, dc = /* @__PURE__ */ I(/* @__PURE__ */ E({
	__name: "FilePicker",
	props: {
		buttons: {},
		name: {},
		allowPickDirectory: {
			type: Boolean,
			default: !1
		},
		noMenu: {
			type: Boolean,
			default: !1
		},
		disabledNavigation: {
			type: Boolean,
			default: !1
		},
		filterFn: {
			type: Function,
			default: void 0
		},
		canPickFn: {
			type: Function,
			default: void 0
		},
		mimetypeFilter: { default: () => [] },
		multiselect: {
			type: Boolean,
			default: !1
		},
		path: { default: void 0 }
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = P(!0), o = P("files"), s = P(window?.sessionStorage.getItem("NC.FilePicker.LastPath") || "/"), c = P(""), l = A({
			get: () => o.value === "files" ? c.value || n.path || s.value : "/",
			set: (e) => {
				c.value = e;
			}
		}), u = ce([]), d = P(""), { files: p, folder: m, isLoading: g, loadFiles: _, createDirectory: v } = sc(o, l);
		ee([c], () => {
			n.path === void 0 && c.value && window.sessionStorage.setItem("NC.FilePicker.LastPath", c.value), u.value = [], d.value = "";
		});
		let y = !1, b = A(() => {
			let e = u.value.length === 0 && n.allowPickDirectory && m.value && (!n.canPickFn || n.canPickFn(m.value)) ? [m.value] : u.value;
			return (typeof n.buttons == "function" ? n.buttons(e, l.value, o.value) : n.buttons).map((t) => ({
				...t,
				disabled: t.disabled || g.value,
				callback: () => {
					y = !0, x(t.callback, e);
				}
			}));
		});
		async function x(e, t) {
			await e(t), r("close", t), y = !1;
		}
		let S = A(() => o.value === "favorites" ? L("Favorites") : o.value === "recent" ? L("Recent") : ""), { isSupportedMimeType: te } = cc(ue(n, "mimetypeFilter"));
		f(() => _());
		let { showHiddenFiles: ne } = ms(), re = A(() => {
			let e = p.value;
			return ne.value || (e = e.filter((e) => !e.basename.startsWith("."))), n.mimetypeFilter.length > 0 && (e = e.filter((e) => e.type === "folder" || e.mime && te(e.mime))), d.value && (e = e.filter((e) => e.basename.toLowerCase().includes(d.value.toLowerCase()))), n.filterFn && (e = e.filter((e) => n.filterFn(e))), e;
		}), ie = A(() => o.value === "files" ? L("Upload some content or sync with your devices!") : o.value === "recent" ? L("Files and folders you recently modified will show up here.") : L("Files and folders you mark as favorite will show up here."));
		async function w(e) {
			try {
				let t = await v(e);
				c.value = t.path, a("files:node:created", p.value.filter((t) => t.basename === e)[0]);
			} catch (t) {
				je.warn("Could not create new folder", {
					name: e,
					error: t
				}), Fe(L("Could not create the new folder"));
			}
		}
		function ae(e) {
			!e && !y && r("close");
		}
		return (t, n) => (h(), D(k(Re), {
			open: i.value,
			"onUpdate:open": [n[6] ||= (e) => i.value = e, ae],
			buttons: b.value,
			name: e.name,
			size: "large",
			contentClasses: "file-picker__content",
			dialogClasses: "file-picker",
			navigationClasses: "file-picker__navigation"
		}, {
			navigation: C(({ isCollapsed: t }) => [O(rc, {
				currentView: o.value,
				"onUpdate:currentView": n[0] ||= (e) => o.value = e,
				filterString: d.value,
				"onUpdate:filterString": n[1] ||= (e) => d.value = e,
				isCollapsed: t,
				disabledNavigation: e.disabledNavigation
			}, null, 8, [
				"currentView",
				"filterString",
				"isCollapsed",
				"disabledNavigation"
			])]),
			default: C(() => [N("div", lc, [o.value === "files" ? (h(), D(Bs, {
				key: 0,
				path: l.value,
				"onUpdate:path": n[2] ||= (e) => l.value = e,
				showMenu: !e.noMenu,
				onCreateNode: w
			}, null, 8, ["path", "showMenu"])) : (h(), j("div", uc, [N("h3", null, M(S.value), 1)])), k(g) || re.value.length > 0 ? (h(), D(Ts, {
				key: 2,
				path: l.value,
				"onUpdate:path": [n[3] ||= (e) => l.value = e, n[5] ||= (e) => o.value = "files"],
				selectedFiles: u.value,
				"onUpdate:selectedFiles": n[4] ||= (e) => u.value = e,
				allowPickDirectory: e.allowPickDirectory,
				currentView: o.value,
				files: re.value,
				multiselect: e.multiselect,
				loading: k(g),
				name: S.value,
				canPick: e.canPickFn
			}, null, 8, [
				"path",
				"selectedFiles",
				"allowPickDirectory",
				"currentView",
				"files",
				"multiselect",
				"loading",
				"name",
				"canPick"
			])) : d.value ? (h(), D(k(Be), {
				key: 3,
				name: k(L)("No matching files"),
				description: k(L)("No files matching your filter were found.")
			}, {
				icon: C(() => [O(jo)]),
				_: 1
			}, 8, ["name", "description"])) : (h(), D(k(Be), {
				key: 4,
				name: k(L)("No files in here"),
				description: ie.value
			}, {
				icon: C(() => [O(jo)]),
				_: 1
			}, 8, ["name", "description"]))])]),
			_: 1
		}, 8, [
			"open",
			"buttons",
			"name"
		]));
	}
}), [["__scopeId", "data-v-39182aaf"]]);
//#endregion
export { dc as default, st as n, _t as t };
