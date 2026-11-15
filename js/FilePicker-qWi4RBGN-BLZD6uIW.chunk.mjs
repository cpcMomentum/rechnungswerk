import { $n as e, $t as t, A as n, D as r, En as i, Fn as a, Ft as o, Gn as s, Jt as c, Kt as l, Lt as u, M as d, Nn as f, On as p, Pn as m, Pt as h, Qt as g, Rt as _, S as v, Xt as y, Yn as b, Zn as x, Zt as S, _n as ee, a as te, ar as ne, b as re, c as C, ct as w, d as T, dn as E, en as D, er as ie, f as ae, fn as oe, g as se, h as ce, i as le, in as ue, ir as de, j as fe, jn as pe, jt as me, kn as he, lt as ge, m as _e, n as ve, nn as ye, nr as be, o as xe, p as Se, qn as Ce, qt as we, r as Te, rn as O, rr as k, s as Ee, t as De, tn as Oe, u as ke, un as Ae, v as je, vn as Me, x as Ne, xn as Pe, y as Fe, yn as A } from "./NcSelect-DezlyrCK.chunk.mjs";
// node_modules/@nextcloud/dialogs/dist/chunks/_plugin-vue_export-helper-BOaGB7Aw.js
var j = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, M = Object.freeze({
	NONE: 0,
	READ: 1,
	UPDATE: 2,
	CREATE: 4,
	WRITE: 4,
	DELETE: 8,
	SHARE: 16,
	ALL: 31
});
window._nc_files_scope ??= {}, window._nc_files_scope.v4_0 ??= {};
var Ie = window._nc_files_scope.v4_0, Le = Object.freeze({
	Folder: "folder",
	File: "file"
}), Re = Object.freeze({
	NEW: "new",
	FAILED: "failed",
	LOADING: "loading",
	LOCKED: "locked"
});
function ze(e, t) {
	return e.match(t) !== null;
}
function Be(e, t) {
	if (e.id && typeof e.id != "number" && typeof e.id != "string") throw Error("Invalid id type of value");
	if (!e.source) throw Error("Missing mandatory source");
	try {
		new URL(e.source);
	} catch {
		throw Error("Invalid source format, source must be a valid URL");
	}
	if (!e.source.startsWith("http")) throw Error("Invalid source format, only http(s) is supported");
	if (!e.root) throw Error("Missing mandatory root");
	if (typeof e.root != "string") throw Error("Invalid root type");
	if (!e.root.startsWith("/")) throw Error("Root must start with a leading slash");
	if (!e.source.includes(e.root)) throw Error("Root must be part of the source");
	if (ze(e.source, t)) {
		let n = e.source.match(t)[0];
		if (!e.source.includes(Ee(n, e.root))) throw Error("The root must be relative to the service. e.g /files/emma");
	}
	if (e.displayname && typeof e.displayname != "string") throw Error("Invalid displayname type");
	if (e.mtime && !(e.mtime instanceof Date)) throw Error("Invalid mtime type");
	if (e.crtime && !(e.crtime instanceof Date)) throw Error("Invalid crtime type");
	if (!e.mime || typeof e.mime != "string" || !e.mime.match(/^[-\w.]+\/[-+\w.]+$/gi)) throw Error("Missing or invalid mandatory mime");
	if ("size" in e && typeof e.size != "number" && e.size !== void 0) throw Error("Invalid size type");
	if ("permissions" in e && e.permissions !== void 0 && !(typeof e.permissions == "number" && e.permissions >= M.NONE && e.permissions <= M.ALL)) throw Error("Invalid permissions");
	if (e.owner && e.owner !== null && typeof e.owner != "string") throw Error("Invalid owner type");
	if (e.attributes && typeof e.attributes != "object") throw Error("Invalid attributes type");
	if (e.status && !Object.values(Re).includes(e.status)) throw Error("Status must be a valid NodeStatus");
}
function Ve(e) {
	e.mtime && typeof e.mtime == "string" && !isNaN(Date.parse(e.mtime)) && JSON.stringify(new Date(e.mtime)) === JSON.stringify(e.mtime) && (e.mtime = new Date(e.mtime)), e.crtime && typeof e.crtime == "string" && !isNaN(Date.parse(e.crtime)) && JSON.stringify(new Date(e.crtime)) === JSON.stringify(e.crtime) && (e.crtime = new Date(e.crtime));
}
function He(e) {
	if (e instanceof RegExp) return e;
	let t = e.match(/(\/?)(.+)\1([a-z]*)/i);
	if (!t) throw Error("Invalid regular expression format.");
	let n = Array.from(new Set(t[3])).filter((e) => "gimsuy".includes(e)).join("");
	return new RegExp(t[2], n);
}
// node_modules/@nextcloud/files/dist/node/node.mjs
var Ue = class e {
	_attributes;
	_data;
	_knownDavService = /(remote|public)\.php\/(web)?dav/i;
	readonlyAttributes = Object.entries(Object.getOwnPropertyDescriptors(e.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]);
	handler = {
		set: (e, t, n) => !this.readonlyAttributes.includes(t) && Reflect.set(e, t, n),
		deleteProperty: (e, t) => !this.readonlyAttributes.includes(t) && Reflect.deleteProperty(e, t)
	};
	constructor(...[e, t]) {
		e.mime ||= "application/octet-stream", Ve(e), t = He(t || this._knownDavService), Be(e, t), this._data = {
			...e,
			attributes: {}
		}, this._attributes = new Proxy(this._data.attributes, this.handler), this.update(e.attributes ?? {}), t && (this._knownDavService = t);
	}
	get source() {
		return this._data.source.replace(/\/$/i, "");
	}
	get encodedSource() {
		let { origin: e } = new URL(this.source);
		return e + te(this.source.slice(e.length));
	}
	get basename() {
		return Te(this.source);
	}
	get displayname() {
		return this._data.displayname || this.basename;
	}
	set displayname(e) {
		Be({
			...this._data,
			displayname: e
		}, this._knownDavService), this._data.displayname = e;
	}
	get extension() {
		return xe(this.source);
	}
	get dirname() {
		return le(this.path);
	}
	get mime() {
		return this._data.mime || "application/octet-stream";
	}
	set mime(e) {
		e ??= "application/octet-stream", Be({
			...this._data,
			mime: e
		}, this._knownDavService), this._data.mime = e;
	}
	get mtime() {
		return this._data.mtime;
	}
	set mtime(e) {
		Be({
			...this._data,
			mtime: e
		}, this._knownDavService), this._data.mtime = e;
	}
	get crtime() {
		return this._data.crtime;
	}
	get size() {
		return this._data.size;
	}
	set size(e) {
		Be({
			...this._data,
			size: e
		}, this._knownDavService), this.updateMtime(), this._data.size = e;
	}
	get attributes() {
		return this._attributes;
	}
	get permissions() {
		return this.owner === null && !this.isDavResource ? M.READ : this._data.permissions === void 0 ? M.NONE : this._data.permissions;
	}
	set permissions(e) {
		Be({
			...this._data,
			permissions: e
		}, this._knownDavService), this.updateMtime(), this._data.permissions = e;
	}
	get owner() {
		return this.isDavResource ? this._data.owner : null;
	}
	get isDavResource() {
		return ze(this.source, this._knownDavService);
	}
	get root() {
		return this._data.root.replace(/^(.+)\/$/, "$1");
	}
	get path() {
		let e = this.source.indexOf("://"), t = this.source.slice(0, e), n = this.source.slice(e + 3), r = n.indexOf("/"), i = n.slice(0, r), a = n.slice(r), o = `${t}://${i}${te(a)}`, s = new URL(o), c = decodeURIComponent(s.pathname);
		this.isDavResource && (c = c.split(this._knownDavService).pop());
		let l = c.indexOf(this.root), u = this.root.replace(/\/$/, "");
		return c.slice(l + u.length) || "/";
	}
	get fileid() {
		return typeof this._data?.id == "number" ? this._data.id : void 0;
	}
	get id() {
		if (!(this._data?.id === void 0 || typeof this._data.id == "number" && this._data.id < 0)) return String(this._data.id);
	}
	get status() {
		return this._data?.status;
	}
	set status(e) {
		Be({
			...this._data,
			status: e
		}, this._knownDavService), this._data.status = e;
	}
	move(e) {
		Be({
			...this._data,
			source: e
		}, this._knownDavService);
		let t = this.basename;
		this._data.source = e, this.displayname === t && this.basename !== t && (this.displayname = this.basename);
	}
	rename(e) {
		if (e.includes("/")) throw Error("Invalid basename");
		this.move(le(this.source) + "/" + e);
	}
	updateMtime() {
		this._data.mtime && (this._data.mtime = /* @__PURE__ */ new Date());
	}
	update(e) {
		for (let [t, n] of Object.entries(e)) try {
			n === void 0 ? delete this.attributes[t] : this.attributes[t] = n;
		} catch (e) {
			if (e instanceof TypeError) continue;
			throw e;
		}
	}
	clone() {
		return new this.constructor(structuredClone(this._data), this._knownDavService);
	}
	toJSON() {
		return JSON.stringify([structuredClone(this._data), this._knownDavService.toString()]);
	}
}, We = class extends Ue {
	constructor(...[e, t]) {
		super(e, t);
	}
	get type() {
		return Le.File;
	}
};
// node_modules/@nextcloud/files/dist/utils/sorting.mjs
function Ge(e) {
	return e instanceof Date ? e.toISOString() : String(e);
}
function Ke(e, t, n) {
	t ??= [(e) => e], n ??= [];
	let r = t.map((e, t) => (n[t] ?? "asc") === "asc" ? 1 : -1), i = Intl.Collator([o(), h()], {
		numeric: !0,
		usage: "sort"
	});
	return [...e].sort((e, n) => {
		for (let [a, o] of t.entries()) {
			let t = i.compare(Ge(o(e)), Ge(o(n)));
			if (t !== 0) return t * r[a];
		}
		return 0;
	});
}
// node_modules/@nextcloud/files/dist/utils/fileSorting.mjs
var qe = Object.freeze({
	Name: "basename",
	Modified: "mtime",
	Size: "size"
});
function Je(e, t = {}) {
	let n = {
		sortingMode: qe.Name,
		sortingOrder: "asc",
		...t
	};
	function r(e) {
		let t = e.displayname || e.attributes?.displayname || e.basename || "";
		return e.type === Le.Folder ? t : t.lastIndexOf(".") > 0 ? t.slice(0, t.lastIndexOf(".")) : t;
	}
	return Ke(e, [
		...n.sortFavoritesFirst ? [(e) => e.attributes?.favorite !== 1] : [],
		...n.sortFoldersFirst ? [(e) => e.type !== "folder"] : [],
		...n.sortingMode === qe.Name ? [] : [(e) => e[n.sortingMode] ?? e.attributes[n.sortingMode]],
		(e) => r(e),
		(e) => e.basename
	], [
		...n.sortFavoritesFirst ? ["asc"] : [],
		...n.sortFoldersFirst ? ["asc"] : [],
		...n.sortingMode === qe.Modified ? [n.sortingOrder === "asc" ? "desc" : "asc"] : [],
		...n.sortingMode !== qe.Modified && n.sortingMode !== qe.Name ? [n.sortingOrder] : [],
		n.sortingOrder,
		n.sortingOrder
	]);
}
// node_modules/@nextcloud/files/dist/node/folder.mjs
var Ye = class extends Ue {
	constructor(...[e, t]) {
		super({
			...e,
			mime: "httpd/unix-directory"
		}, t);
	}
	get type() {
		return Le.Folder;
	}
	get extension() {
		return null;
	}
	get mime() {
		return "httpd/unix-directory";
	}
}, Xe = Object.freeze({
	ReservedName: "reserved name",
	Character: "character",
	Extension: "extension"
}), Ze = class extends Error {
	constructor(e) {
		super(`Invalid ${e.reason} '${e.segment}' in filename '${e.filename}'`, { cause: e });
	}
	get filename() {
		return this.cause.filename;
	}
	get reason() {
		return this.cause.reason;
	}
	get segment() {
		return this.cause.segment;
	}
};
function Qe(e) {
	let t = Ne().files, n = t.forbidden_filename_characters ?? ["/", "\\"];
	for (let t of n) if (e.includes(t)) throw new Ze({
		segment: t,
		reason: Xe.Character,
		filename: e
	});
	if (e = e.toLocaleLowerCase(), (t.forbidden_filenames ?? [".htaccess"]).includes(e)) throw new Ze({
		filename: e,
		segment: e,
		reason: Xe.ReservedName
	});
	let r = e.indexOf(".", 1), i = e.substring(0, r === -1 ? void 0 : r);
	if ((t.forbidden_filename_basenames ?? []).includes(i)) throw new Ze({
		filename: e,
		segment: i,
		reason: Xe.ReservedName
	});
	let a = t.forbidden_filename_extensions ?? [];
	for (let t of a) if (e.length > t.length && e.endsWith(t)) throw new Ze({
		segment: t,
		reason: Xe.Extension,
		filename: e
	});
}
// node_modules/@nextcloud/files/dist/utils/fileSize.mjs
var $e = [
	"B",
	"KB",
	"MB",
	"GB",
	"TB",
	"PB"
], et = [
	"B",
	"KiB",
	"MiB",
	"GiB",
	"TiB",
	"PiB"
];
function tt(e, t = !1, n = !1, r = !1) {
	n &&= !r, typeof e == "string" && (e = Number(e));
	let i = e > 0 ? Math.floor(Math.log(e) / Math.log(r ? 1e3 : 1024)) : 0;
	i = Math.min((n ? et.length : $e.length) - 1, i);
	let a = n ? et[i] : $e[i], o = (e / (r ? 1e3 : 1024) ** i).toFixed(1);
	return t === !0 && i === 0 ? (o === "0.0" ? "0 " : "< 1 ") + (n ? et[1] : $e[1]) : (o = i < 2 ? parseFloat(o).toFixed(0) : parseFloat(o).toLocaleString(h()), o + " " + a);
}
// node_modules/eventemitter3/index.mjs
var nt = /* @__PURE__ */ ne((/* @__PURE__ */ de(((e, t) => {
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
		if (o.fn) o.fn !== t || i && !o.once || n && o.context !== n || s(this, a);
		else {
			for (var c = 0, l = [], u = o.length; c < u; c++) (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
			l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a);
		}
		return this;
	}, c.prototype.removeAllListeners = function(e) {
		var t;
		return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i(), this._eventsCount = 0), this;
	}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t !== void 0 && (t.exports = c);
})))(), 1), rt = class e extends Error {
	name = "TimeoutError";
	constructor(t, n) {
		super(t, n), Error.captureStackTrace?.(this, e);
	}
}, it = (e) => e.reason ?? new DOMException("This operation was aborted.", "AbortError");
function at(e, t) {
	let { milliseconds: n, fallback: r, message: i, customTimers: a = {
		setTimeout,
		clearTimeout
	}, signal: o } = t, s, c, l = new Promise((t, l) => {
		if (typeof n != "number" || Math.sign(n) !== 1) throw TypeError(`Expected \`milliseconds\` to be a positive number, got \`${n}\``);
		if (o?.aborted) {
			l(it(o));
			return;
		}
		if (o && (c = () => {
			l(it(o));
		}, o.addEventListener("abort", c, { once: !0 })), e.then(t, l), n === Infinity) return;
		let u = new rt();
		s = a.setTimeout.call(void 0, () => {
			if (r) try {
				t(r());
			} catch (e) {
				l(e);
			}
			else typeof e.cancel == "function" && e.cancel(), i === !1 ? t() : i instanceof Error ? l(i) : (u.message = i ?? `Promise timed out after ${n} milliseconds`, l(u));
		}, n);
	}).finally(() => {
		l.clear(), c && o && o.removeEventListener("abort", c);
	});
	return l.clear = () => {
		a.clearTimeout.call(void 0, s), s = void 0;
	}, l;
}
// node_modules/p-queue/dist/lower-bound.js
function ot(e, t, n) {
	let r = 0, i = e.length;
	for (; i > 0;) {
		let a = Math.trunc(i / 2), o = r + a;
		n(e[o], t) <= 0 ? (r = ++o, i -= a + 1) : i = a;
	}
	return r;
}
// node_modules/p-queue/dist/priority-queue.js
var st = 100, ct = class {
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
		let o = ot(this.#e, a, (e, t) => t.priority - e.priority);
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
		return this.#t++, this.#t === this.#e.length ? (this.#e.length = 0, this.#t = 0) : this.#t > st && this.#t > this.#e.length / 2 && this.#n(), e?.run;
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
}, lt = new class extends nt.default {
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
			queueClass: ct,
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
					if (t.timeout !== void 0 && (r = at(Promise.resolve(r), {
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
				this.#p instanceof ct ? this.#p.remove(o) : this.#p.remove?.(t.id);
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
		return this.#_ && (this.#_ = !1, this.#I()), this;
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
function ut(e) {
	let { resolve: t, promise: n } = Promise.withResolvers();
	return lt.add(() => {
		let r = new Image();
		return r.onerror = () => t(!1), r.onload = () => t(!0), r.src = e, n;
	}), n;
}
function dt(e, t = {}) {
	t = {
		cropPreview: !1,
		mimeFallback: !0,
		...t,
		size: _t(t.size ?? vt())
	};
	try {
		let n = e.attributes?.previewUrl || _("/core/preview?fileId={fileid}", { fileid: e.fileid }), r;
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
function ft(e, t) {
	let n = s(null), r = s(!1);
	return m(() => {
		r.value = !1, n.value = dt(x(e), x(t || {})), n.value && x(e).type === Le.File && ut(n.value.href).then((e) => {
			r.value = e;
		});
	}), {
		previewURL: n,
		previewLoaded: r
	};
}
var pt = "--file-picker-preview-size", mt = 64, ht = 256, gt;
function _t(e) {
	return e <= mt ? mt : ht;
}
function vt() {
	if (gt !== void 0) return gt;
	let e = getComputedStyle(document.documentElement).getPropertyValue(pt).trim(), t = Number.parseFloat(e);
	return gt = _t(Number.isFinite(t) && t > 0 ? Math.round(t) : mt), gt;
}
// node_modules/@mdi/js/mdi.js
var yt = "M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z", bt = "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z", xt = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z", St = "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z", Ct = "M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z", wt = "M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z", Tt = "M15,20A1,1 0 0,0 14,19H13V17H17A2,2 0 0,0 19,15V5A2,2 0 0,0 17,3H7A2,2 0 0,0 5,5V15A2,2 0 0,0 7,17H11V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H22V20H15M7,15V5H17V15H7Z", Et = "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z", Dt = "M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.42L11.59 21.42A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M13 20L4 11V4H11L20 13M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5Z", Ot = [
	"data-timestamp",
	"title",
	"textContent"
], kt = /* @__PURE__ */ ue({
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
	setup(t) {
		let n = t, r = y(() => ({ format: n.format })), i = y(() => ({
			ignoreSeconds: n.ignoreSeconds,
			relativeTime: n.relativeTime || "long",
			update: n.relativeTime !== !1
		})), a = Fe(b(() => n.timestamp), r), o = je(b(() => n.timestamp), i), s = y(() => n.relativeTime ? o.value : a.value);
		return (n, r) => (A(), D("span", {
			class: "nc-datetime",
			dir: "auto",
			"data-timestamp": t.timestamp,
			title: e(a),
			textContent: k(s.value)
		}, null, 8, Ot));
	}
}), At;
(function(e) {
	e[e.User = 0] = "User", e[e.Group = 1] = "Group", e[e.Link = 3] = "Link", e[e.Email = 4] = "Email", e[e.Remote = 6] = "Remote", e[e.Team = 7] = "Team", e[e.Guest = 8] = "Guest", e[e.RemoteGroup = 9] = "RemoteGroup", e[e.Room = 10] = "Room", e[e.Deck = 12] = "Deck", e[e.FederatedGroup = 14] = "FederatedGroup", e[e.ScienceMesh = 15] = "ScienceMesh";
})(At ||= {});
// node_modules/@nextcloud/sharing/dist/public.js
function jt() {
	return v("files_sharing", "isPublic", null) ?? document.querySelector("input#isPublic[type=\"hidden\"][name=\"isPublic\"][value=\"1\"]") !== null;
}
function Mt() {
	return v("files_sharing", "sharingToken", null) ?? document.querySelector("input#sharingToken[type=\"hidden\"]")?.value ?? null;
}
// node_modules/webdav/dist/web/index.js
var Nt = {
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
			var n = (t ||= {}).max == null ? 1e5 : t.max, r = t.maxLength == null ? 4e6 : t.maxLength;
			return e.substr(0, 2) === "{}" && (e = "\\{\\}" + e.substr(2)), v(function(e) {
				return e.split("\\\\").join(i).split("\\{").join(a).split("\\}").join(o).split("\\,").join(s).split("\\.").join(c);
			}(e), n, r, !0).map(u);
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
		function g(e, t, n, r, i, a) {
			for (var o = [], s = 0, c = 0; c < e.length; c++) for (var l = 0; l < n.length; l++) {
				if (o.length >= r) return o;
				var u = e[c] + t + n[l];
				if (!a || u) {
					if (s + u.length > i) return o;
					o.push(u), s += u.length;
				}
			}
			return o;
		}
		function _(e, t, n, r) {
			var i = e.split(/\.\./), a = [];
			if (i[0] === void 0 || i[1] === void 0) return a;
			var o = l(i[0]), s = l(i[1]), c = Math.max(i[0].length, i[1].length), u = i.length === 3 && i[2] !== void 0 ? Math.max(Math.abs(l(i[2])), 1) : 1, d = m;
			s < o && (u *= -1, d = h);
			for (var f = i.some(p), g = 0, _ = o; d(_, s) && a.length < n; _ += u) {
				var v;
				if (t) (v = String.fromCharCode(_)) === "\\" && (v = "");
				else if (v = String(_), f) {
					var y = c - v.length;
					if (y > 0) {
						var b = Array(y + 1).join("0");
						v = _ < 0 ? "-" + b + v.slice(1) : b + v;
					}
				}
				if (g + v.length > r) break;
				a.push(v), g += v.length;
			}
			return a;
		}
		function v(e, t, n, i) {
			for (var a = [""], s = !1, c = !0;;) {
				let C = r("{", "}", e);
				if (!C) return g(a, e, [""], t, n, s);
				let w = C.pre;
				if (/\$$/.test(w)) {
					if (a = g(a, w + "{" + C.body + "}", [""], t, n, s && !C.post.length), c = !1, !C.post.length) break;
					e = C.post;
				} else {
					var l, u = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(C.body), p = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(C.body), m = u || p, h = C.body.indexOf(",") >= 0;
					if (!m && !h) {
						if (C.post.match(/,(?!,).*\}/)) {
							e = C.pre + "{" + C.body + o + C.post, i = !0;
							continue;
						}
						return g(a, w + "{" + C.body + "}" + C.post, [""], t, n, s);
					}
					if (c &&= (s = i && !m, !1), m) l = _(C.body, p, t, n);
					else {
						var y = d(C.body);
						if (y.length === 1 && y[0] !== void 0 && (y = v(y[0], t, n, !1).map(f)).length === 1) {
							if (a = g(a, w + y[0], [""], t, n, s && !C.post.length), !C.post.length) break;
							e = C.post;
							continue;
						}
						for (var b = s && !C.post.length && !w, x = 0; b && x < a.length; x++) a[x] && (b = !1);
						l = [];
						var S = 0;
						t: for (var ee = 0; ee < y.length; ee++) for (var te = v(y[ee], t, n, !1), ne = 0; ne < te.length; ne++) {
							var re = te[ne];
							if (!b || re) {
								if (l.length >= t || S + re.length > n) break t;
								l.push(re), S += re.length;
							}
						}
					}
					if (a = g(a, w, l, t, n, s && !C.post.length), !C.post.length) break;
					e = C.post;
				}
			}
			return a;
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
}, Pt = {};
function N(e) {
	var t = Pt[e];
	if (t !== void 0) return t.exports;
	var n = Pt[e] = {
		id: e,
		loaded: !1,
		exports: {}
	};
	return Nt[e].call(n.exports, n, n.exports, N), n.loaded = !0, n.exports;
}
N.n = (e) => {
	var t = e && e.__esModule ? () => e.default : () => e;
	return N.d(t, { a: t }), t;
}, N.d = (e, t) => {
	for (var n in t) N.o(t, n) && !N.o(e, n) && Object.defineProperty(e, n, {
		enumerable: !0,
		get: t[n]
	});
}, N.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), N.nmd = (e) => (e.paths = [], e.children ||= [], e);
var Ft = N(737), It = N.n(Ft);
function Lt(e) {
	if (!Rt(e)) throw Error("Parameter was not an error");
}
function Rt(e) {
	return !!e && typeof e == "object" && (t = e, Object.prototype.toString.call(t) === "[object Error]") || e instanceof Error;
	var t;
}
var P = class e extends Error {
	constructor(e, t) {
		let { options: n, shortMessage: r } = function(e) {
			let t, n = "";
			if (e.length === 0) t = {};
			else if (Rt(e[0])) t = { cause: e[0] }, n = e.slice(1).join(" ") || "";
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
		return Lt(e), e._cause && Rt(e._cause) ? e._cause : null;
	}
	static fullStack(t) {
		Lt(t);
		let n = e.cause(t);
		return n ? `${t.stack}\ncaused by: ${e.fullStack(n)}` : t.stack ?? "";
	}
	static info(t) {
		Lt(t);
		let n = {}, r = e.cause(t);
		return r && Object.assign(n, e.info(r)), t._info && Object.assign(n, t._info), n;
	}
	toString() {
		let e = this.name || this.constructor.name || this.constructor.prototype.name;
		return this.message && (e = `${e}: ${this.message}`), e;
	}
}, zt = N(47), Bt = N.n(zt), Vt = "__PATH_SEPARATOR_POSIX__", Ht = "__PATH_SEPARATOR_WINDOWS__";
function F(e) {
	try {
		let t = e.replace(/\//g, Vt).replace(/\\\\/g, Ht);
		return encodeURIComponent(t).split(Ht).join("\\\\").split(Vt).join("/");
	} catch (e) {
		throw new P(e, "Failed encoding path");
	}
}
function Ut(e) {
	return e.startsWith("/") ? e : "/" + e;
}
function Wt(e) {
	let t = e;
	return t[0] !== "/" && (t = "/" + t), /^.+\/$/.test(t) && (t = t.substr(0, t.length - 1)), t;
}
function Gt(e) {
	let t = new (It())(e).pathname;
	return t.length <= 0 && (t = "/"), Wt(t);
}
function I(...e) {
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
	}(e.reduce(((e, t, n) => ((n === 0 || t !== "/" || t === "/" && e[e.length - 1] !== "/") && e.push(t), e)), []));
}
var Kt = N(542), qt = N.n(Kt);
function Jt(e, t) {
	let n = e.url.replace("//", ""), r = n.indexOf("/") == -1 ? "/" : n.slice(n.indexOf("/")), i = e.method ? e.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(t.qop) && "auth", o = `00000000${t.nc}`.slice(-8), s = function(e, t, n, r, i, a, o) {
		let s = o || qt()(`${t}:${n}:${r}`);
		return e && e.toLowerCase() === "md5-sess" ? qt()(`${s}:${i}:${a}`) : s;
	}(t.algorithm, t.username, t.realm, t.password, t.nonce, t.cnonce, t.ha1), c = qt()(`${i}:${r}`), l = a ? qt()(`${s}:${t.nonce}:${o}:${t.cnonce}:${a}:${c}`) : qt()(`${s}:${t.nonce}:${c}`), u = {
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
function Yt(e) {
	return (e.headers && e.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var Xt = N(101), Zt = N.n(Xt);
function Qt(e) {
	return Zt().decode(e);
}
function $t(e, t) {
	var n;
	return `Basic ${n = `${e}:${t}`, Zt().encode(n)}`;
}
var L = function(e) {
	return e.Auto = "auto", e.Digest = "digest", e.None = "none", e.Password = "password", e.Token = "token", e;
}({}), en = function(e) {
	return e.DataTypeNoLength = "data-type-no-length", e.InvalidAuthType = "invalid-auth-type", e.InvalidOutputFormat = "invalid-output-format", e.LinkUnsupportedAuthType = "link-unsupported-auth", e.InvalidUpdateRange = "invalid-update-range", e.NotSupported = "not-supported", e;
}({});
function tn(e, t, n, r, i) {
	switch (e.authType) {
		case L.Auto:
			t && n && (e.headers.Authorization = $t(t, n));
			break;
		case L.Digest:
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
		case L.None: break;
		case L.Password:
			e.headers.Authorization = $t(t, n);
			break;
		case L.Token:
			e.headers.Authorization = `${(a = r).token_type} ${a.access_token}`;
			break;
		default: throw new P({ info: { code: en.InvalidAuthType } }, `Invalid auth type: ${e.authType}`);
	}
	var a;
}
N(345), N(800);
var nn = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, rn = nn.fetch.bind(nn);
nn.Headers, nn.Request, nn.Response;
var an = "@@HOTPATCHER", on = () => {};
function sn(e) {
	return {
		original: e,
		methods: [e],
		final: !1
	};
}
var cn = class {
	constructor() {
		this._configuration = {
			registry: {},
			getEmptyAction: "null"
		}, this.__type__ = an;
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
	control(e, t = !1) {
		if (!e || e.__type__ !== an) throw Error("Failed taking control of target HotPatcher instance: Invalid type or object");
		return Object.keys(e.configuration.registry).forEach(((n) => {
			this.configuration.registry.hasOwnProperty(n) ? t && (this.configuration.registry[n] = Object.assign({}, e.configuration.registry[n])) : this.configuration.registry[n] = Object.assign({}, e.configuration.registry[n]);
		})), e._configuration = this.configuration, this;
	}
	execute(e, ...t) {
		return (this.get(e) || on)(...t);
	}
	get(e) {
		let t = this.configuration.registry[e];
		if (!t) switch (this.getEmptyAction) {
			case "null": return null;
			case "throw": throw Error(`Failed handling method request: No method provided for override: ${e}`);
			default: throw Error(`Failed handling request which resulted in an empty method: Invalid empty-action specified: ${this.getEmptyAction}`);
		}
		return function(...e) {
			if (e.length === 0) throw Error("Failed creating sequence: No functions provided");
			return function(...t) {
				let n = t, r = this;
				for (; e.length > 0;) n = [e.shift().apply(r, n)];
				return n[0];
			};
		}(...t.methods);
	}
	isPatched(e) {
		return !!this.configuration.registry[e];
	}
	patch(e, t, n = {}) {
		let { chain: r = !1 } = n;
		if (this.configuration.registry[e] && this.configuration.registry[e].final) throw Error(`Failed patching '${e}': Method marked as being final`);
		if (typeof t != "function") throw Error(`Failed patching '${e}': Provided method is not a function`);
		if (r) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(t) : this.configuration.registry[e] = sn(t);
		else if (this.isPatched(e)) {
			let { original: n } = this.configuration.registry[e];
			this.configuration.registry[e] = Object.assign(sn(t), { original: n });
		} else this.configuration.registry[e] = sn(t);
		return this;
	}
	patchInline(e, t, ...n) {
		return this.isPatched(e) || this.patch(e, t), this.execute(e, ...n);
	}
	plugin(e, ...t) {
		return t.forEach(((t) => {
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
}, ln = null;
function un() {
	return ln ||= new cn(), ln;
}
function dn(e) {
	return function(e) {
		if (typeof e != "object" || !e || Object.prototype.toString.call(e) != "[object Object]") return !1;
		if (Object.getPrototypeOf(e) === null) return !0;
		let t = e;
		for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
		return Object.getPrototypeOf(e) === t;
	}(e) ? Object.assign({}, e) : Object.setPrototypeOf(Object.assign({}, e), Object.getPrototypeOf(e));
}
function fn(...e) {
	let t = null, n = [...e];
	for (; n.length > 0;) {
		let e = n.shift();
		t = t ? pn(t, e) : dn(e);
	}
	return t;
}
function pn(e, t) {
	let n = dn(e);
	return Object.keys(t).forEach(((e) => {
		n.hasOwnProperty(e) ? Array.isArray(t[e]) ? n[e] = Array.isArray(n[e]) ? [...n[e], ...t[e]] : [...t[e]] : typeof t[e] == "object" && t[e] ? n[e] = typeof n[e] == "object" && n[e] ? pn(n[e], t[e]) : dn(t[e]) : n[e] = t[e] : n[e] = t[e];
	})), n;
}
function mn(e) {
	let t = {};
	return e.forEach(((e, n) => {
		t[n] = e;
	})), t;
}
function hn(...e) {
	if (e.length === 0) return {};
	let t = {};
	return e.reduce(((e, n) => (Object.keys(n).forEach(((r) => {
		let i = r.toLowerCase();
		t.hasOwnProperty(i) ? e[t[i]] = n[r] : (t[i] = r, e[r] = n[r]);
	})), e)), {});
}
N(805);
var gn = typeof ArrayBuffer == "function", { toString: _n } = Object.prototype;
function vn(e) {
	return gn && (e instanceof ArrayBuffer || _n.call(e) === "[object ArrayBuffer]");
}
function yn(e) {
	return e != null && e.constructor != null && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function bn(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
function xn(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Sn = bn((function(e) {
	let t = e._digest;
	return delete e._digest, t.hasDigestAuth && (e = fn(e, { headers: { Authorization: Jt(e, t) } })), xn(wn(e), (function(n) {
		let r = !1;
		return i = function(e) {
			return r ? e : n;
		}, (a = function() {
			if (n.status == 401) return t.hasDigestAuth = function(e, t) {
				if (!Yt(e)) return !1;
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
				if (t.hasDigestAuth) return xn(wn(e = fn(e, { headers: { Authorization: Jt(e, t) } })), (function(e) {
					return e.status == 401 ? t.hasDigestAuth = !1 : t.nc++, r = !0, e;
				}));
			}();
			t.nc++;
		}()) && a.then ? a.then(i) : i(a);
		var i, a;
	}));
})), Cn = bn((function(e, t) {
	return xn(wn(e), (function(n) {
		return n.ok ? (t.authType = L.Password, n) : n.status == 401 && Yt(n) ? (t.authType = L.Digest, tn(t, t.username, t.password, void 0, void 0), e._digest = t.digest, Sn(e)) : n;
	}));
})), R = bn((function(e, t) {
	return t.authType === L.Auto ? Cn(e, t) : e._digest ? Sn(e) : wn(e);
}));
function z(e, t, n) {
	let r = dn(e);
	return r.headers = hn(t.headers, r.headers || {}, n.headers || {}), n.data !== void 0 && (r.data = n.data), n.signal && (r.signal = n.signal), t.httpAgent && (r.httpAgent = t.httpAgent), t.httpsAgent && (r.httpsAgent = t.httpsAgent), t.digest && (r._digest = t.digest), typeof t.withCredentials == "boolean" && (r.withCredentials = t.withCredentials), r;
}
function wn(e) {
	let t = un();
	return t.patchInline("request", ((e) => t.patchInline("fetch", rn, e.url, function(e) {
		let t = {}, n = { method: e.method };
		if (e.headers && (t = hn(t, e.headers)), e.data !== void 0) {
			let [r, i] = function(e) {
				if (typeof e == "string" || yn(e) || vn(e)) return [e, {}];
				if (e && typeof e == "object") return [JSON.stringify(e), { "content-type": "application/json" }];
				throw Error("Unable to convert request body: Unexpected body type: " + typeof e);
			}(e.data);
			n.body = r, t = hn(t, i);
		}
		return e.signal && (n.signal = e.signal), e.withCredentials && (n.credentials = "include"), n.headers = t, n;
	}(e))), e);
}
var Tn = N(285), En = (e) => {
	if (typeof e != "string") throw TypeError("invalid pattern");
	if (e.length > 65536) throw TypeError("pattern is too long");
}, Dn = {
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
}, On = (e) => e.replace(/[[\]\\-]/g, "\\$&"), kn = (e) => e.join(""), An = (e, t) => {
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
					for (let [t, [o, c, l]] of Object.entries(Dn)) if (e.startsWith(t, a)) {
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
				c = !1, d ? (t > d ? r.push(On(d) + "-" + On(t)) : t === d && r.push(On(t)), d = "", a++) : e.startsWith("-]", a + 1) ? (r.push(On(t + "-")), a += 2) : e.startsWith("-", a + 1) ? (d = t, a += 2) : (r.push(On(t)), a++);
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
	let p = "[" + (l ? "^" : "") + kn(r) + "]", m = "[" + (l ? "" : "^") + kn(i) + "]";
	return [
		r.length && i.length ? "(" + p + "|" + m + ")" : r.length ? p : m,
		s,
		u - n,
		!0
	];
}, jn = (e, { windowsPathsNoEscape: t = !1 } = {}) => t ? e.replace(/\[([^\/\\])\]/g, "$1") : e.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), B, Mn = /* @__PURE__ */ new Set([
	"!",
	"?",
	"+",
	"*",
	"@"
]), Nn = (e) => Mn.has(e), Pn = (e) => Nn(e.type), Fn = /* @__PURE__ */ new Map([
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
]), In = /* @__PURE__ */ new Map([
	["!", ["?"]],
	["@", ["?"]],
	["+", ["?", "*"]]
]), Ln = /* @__PURE__ */ new Map([
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
]), Rn = /* @__PURE__ */ new Map([
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
]), zn = "(?!\\.)", Bn = /* @__PURE__ */ new Set(["[", "."]), Vn = /* @__PURE__ */ new Set(["..", "."]), Hn = /* @__PURE__ */ new Set("().*{}+?[]^$\\!"), Un = "[^/]", Wn = Un + "*?", Gn = Un + "+?", Kn = class {
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
	constructor(e, t, n = {}) {
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
	push(...e) {
		for (let t of e) if (t !== "") {
			if (typeof t != "string" && !(t instanceof B && t.#i === this)) throw Error("invalid part: " + t);
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
			if (!(n instanceof B && n.type === "!")) return !1;
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
		let t = new B(this.type, e);
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
					if (!r.noext && Nn(n) && e.charAt(u) === "(" && i <= a) {
						t.push(d), d = "";
						let a = new B(n, t);
						u = B.#f(e, a, u, r, i + 1), t.push(a);
					} else d += n;
				} else s = !0, c = u, l = !1, d += n;
			}
			return t.push(d), u;
		}
		let u = n + 1, d = new B(null, t), f = [], p = "";
		for (; u < e.length;) {
			let n = e.charAt(u++);
			if (o || n === "\\") o = !o, p += n;
			else if (s) u === c + 1 ? n !== "^" && n !== "!" || (l = !0) : n !== "]" || u === c + 2 && l || (s = !1), p += n;
			else if (n !== "[") {
				if (Nn(n) && e.charAt(u) === "(" && (i <= a || t && t.#h(n))) {
					let a = t && t.#h(n) ? 0 : 1;
					d.push(p), p = "";
					let o = new B(n, d);
					d.push(o), u = B.#f(e, o, u, r, i + a);
				} else if (n !== "|") {
					if (n === ")") return p === "" && t.#r.length === 0 && (t.#u = !0), d.push(p), p = "", t.push(...f, d), u;
					p += n;
				} else d.push(p), p = "", f.push(d), d = new B(null, t);
			} else s = !0, c = u, l = !1, p += n;
		}
		return t.type = null, t.#t = void 0, t.#r = [e.substring(n - 1)], u;
	}
	#p(e) {
		return this.#m(e, In);
	}
	#m(e, t = Fn) {
		if (!e || typeof e != "object" || e.type !== null || e.#r.length !== 1 || this.type === null) return !1;
		let n = e.#r[0];
		return !(!n || typeof n != "object" || n.type === null) && this.#h(n.type, t);
	}
	#h(e, t = Ln) {
		return !!t.get(this.type)?.includes(e);
	}
	#g(e, t) {
		let n = e.#r[0], r = new B(null, n, this.options);
		r.#r.push(""), n.push(r), this.#_(e, t);
	}
	#_(e, t) {
		let n = e.#r[0];
		this.#r.splice(t, 1, ...n.#r);
		for (let e of n.#r) typeof e == "object" && (e.#i = this);
		this.#l = void 0;
	}
	#v(e) {
		return !!Rn.get(this.type)?.has(e);
	}
	#y(e) {
		if (!e || typeof e != "object" || e.type !== null || e.#r.length !== 1 || this.type === null || this.#r.length !== 1) return !1;
		let t = e.#r[0];
		return !(!t || typeof t != "object" || t.type === null) && this.#v(t.type);
	}
	#b(e) {
		let t = Rn.get(this.type), n = e.#r[0], r = t?.get(n.type);
		if (!r) return !1;
		this.#r = n.#r;
		for (let e of this.#r) typeof e == "object" && (e.#i = this);
		this.type = r, this.#l = void 0, this.#u = !1;
	}
	#x() {
		if (Pn(this)) {
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
	static fromGlob(e, t = {}) {
		let n = new B(null, void 0, t);
		return B.#f(e, n, 0, t, 0), n;
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
		if (this.#e === this && (this.#x(), this.#d()), !Pn(this)) {
			let n = this.isStart() && this.isEnd(), r = this.#r.map(((t) => {
				let [r, i, a, o] = typeof t == "string" ? B.#C(t, this.#t, n) : t.toRegExpSource(e);
				return this.#t = this.#t || a, this.#n = this.#n || o, r;
			})).join(""), i = "";
			if (this.isStart() && typeof this.#r[0] == "string" && (this.#r.length !== 1 || !Vn.has(this.#r[0]))) {
				let n = Bn, a = t && n.has(r.charAt(0)) || r.startsWith("\\.") && n.has(r.charAt(2)) || r.startsWith("\\.\\.") && n.has(r.charAt(4)), o = !t && !e && n.has(r.charAt(0));
				i = a ? "(?!(?:^|/)\\.\\.?(?:$|/))" : o ? zn : "";
			}
			let a = "";
			return this.isEnd() && this.#e.#s && this.#i?.type === "!" && (a = "(?:$|\\/)"), [
				i + r + a,
				jn(r),
				this.#t = !!this.#t,
				this.#n
			];
		}
		let n = this.type === "*" || this.type === "+", r = this.type === "!" ? "(?:(?!(?:" : "(?:", i = this.#S(t);
		if (this.isStart() && this.isEnd() && !i && this.type !== "!") {
			let e = this.toString(), t = this;
			return t.#r = [e], t.type = null, t.#t = void 0, [
				e,
				jn(this.toString()),
				!1,
				!1
			];
		}
		let a = !n || e || t ? "" : this.#S(!0);
		a === i && (a = ""), a && (i = `(?:${i})(?:${a})*?`);
		let o = "";
		return o = this.type === "!" && this.#u ? (this.isStart() && !t ? zn : "") + Gn : r + i + (this.type === "!" ? "))" + (!this.isStart() || t || e ? "" : zn) + "[^/]*?)" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && a ? ")" : this.type === "*" && a ? ")?" : `)${this.type}`), [
			o,
			jn(i),
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
	static #C(e, t, n = !1) {
		let r = !1, i = "", a = !1, o = !1;
		for (let s = 0; s < e.length; s++) {
			let c = e.charAt(s);
			if (r) r = !1, i += (Hn.has(c) ? "\\" : "") + c, o = !1;
			else if (c !== "\\") {
				if (c === "[") {
					let [n, r, c, l] = An(e, s);
					if (c) {
						i += n, a ||= r, s += c - 1, t ||= l, o = !1;
						continue;
					}
				}
				if (c !== "*") o = !1, c === "?" ? (i += Un, t = !0) : i += c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
				else {
					if (o) continue;
					o = !0, i += n && /^[*]+$/.test(e) ? Gn : Wn, t = !0;
				}
			} else s === e.length - 1 ? i += "\\\\" : r = !0;
		}
		return [
			i,
			jn(e),
			!!t,
			a
		];
	}
};
B = Kn;
var V = (e, t, n = {}) => (En(t), !(!n.nocomment && t.charAt(0) === "#") && new gr(t, n).match(e)), qn = /^\*+([^+@!?\*\[\(]*)$/, Jn = (e) => (t) => !t.startsWith(".") && t.endsWith(e), Yn = (e) => (t) => t.endsWith(e), Xn = (e) => (e = e.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(e)), Zn = (e) => (e = e.toLowerCase(), (t) => t.toLowerCase().endsWith(e)), Qn = /^\*+\.\*+$/, $n = (e) => !e.startsWith(".") && e.includes("."), er = (e) => e !== "." && e !== ".." && e.includes("."), tr = /^\.\*+$/, nr = (e) => e !== "." && e !== ".." && e.startsWith("."), rr = /^\*+$/, ir = (e) => e.length !== 0 && !e.startsWith("."), ar = (e) => e.length !== 0 && e !== "." && e !== "..", or = /^\?+([^+@!?\*\[\(]*)?$/, sr = ([e, t = ""]) => {
	let n = dr([e]);
	return t ? (t = t.toLowerCase(), (e) => n(e) && e.toLowerCase().endsWith(t)) : n;
}, cr = ([e, t = ""]) => {
	let n = fr([e]);
	return t ? (t = t.toLowerCase(), (e) => n(e) && e.toLowerCase().endsWith(t)) : n;
}, lr = ([e, t = ""]) => {
	let n = fr([e]);
	return t ? (e) => n(e) && e.endsWith(t) : n;
}, ur = ([e, t = ""]) => {
	let n = dr([e]);
	return t ? (e) => n(e) && e.endsWith(t) : n;
}, dr = ([e]) => {
	let t = e.length;
	return (e) => e.length === t && !e.startsWith(".");
}, fr = ([e]) => {
	let t = e.length;
	return (e) => e.length === t && e !== "." && e !== "..";
}, pr = typeof process == "object" && process ? {}.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
V.sep = pr === "win32" ? "\\" : "/";
var H = Symbol("globstar **");
V.GLOBSTAR = H, V.filter = (e, t = {}) => (n) => V(n, e, t);
var U = (e, t = {}) => Object.assign({}, e, t);
V.defaults = (e) => {
	if (!e || typeof e != "object" || !Object.keys(e).length) return V;
	let t = V;
	return Object.assign(((n, r, i = {}) => t(n, r, U(e, i))), {
		Minimatch: class extends t.Minimatch {
			constructor(t, n = {}) {
				super(t, U(e, n));
			}
			static defaults(n) {
				return t.defaults(U(e, n)).Minimatch;
			}
		},
		AST: class extends t.AST {
			constructor(t, n, r = {}) {
				super(t, n, U(e, r));
			}
			static fromGlob(n, r = {}) {
				return t.AST.fromGlob(n, U(e, r));
			}
		},
		unescape: (n, r = {}) => t.unescape(n, U(e, r)),
		escape: (n, r = {}) => t.escape(n, U(e, r)),
		filter: (n, r = {}) => t.filter(n, U(e, r)),
		defaults: (n) => t.defaults(U(e, n)),
		makeRe: (n, r = {}) => t.makeRe(n, U(e, r)),
		braceExpand: (n, r = {}) => t.braceExpand(n, U(e, r)),
		match: (n, r, i = {}) => t.match(n, r, U(e, i)),
		sep: t.sep,
		GLOBSTAR: H
	});
};
var mr = (e, t = {}) => (En(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : Tn(e));
V.braceExpand = mr, V.makeRe = (e, t = {}) => new gr(e, t).makeRe(), V.match = (e, t, n = {}) => {
	let r = new gr(t, n);
	return e = e.filter(((e) => r.match(e))), r.options.nonull && !e.length && e.push(t), e;
};
var hr = /[?*]|[+@!]\(.*?\)|\[|\]/, gr = class {
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
	constructor(e, t = {}) {
		En(e), t ||= {}, this.options = t, this.maxGlobstarRecursion = t.maxGlobstarRecursion ?? 200, this.pattern = e, this.platform = t.platform || pr, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!t.windowsPathsNoEscape || !1 === t.allowWindowsEscape, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!t.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!t.nonegate, this.comment = !1, this.empty = !1, this.partial = !!t.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = t.windowsNoMagicRoot === void 0 ? !(!this.isWindows || !this.nocase) : t.windowsNoMagicRoot, this.globSet = [], this.globParts = [], this.set = [], this.make();
	}
	hasMagic() {
		if (this.options.magicalBraces && this.set.length > 1) return !0;
		for (let e of this.set) for (let t of e) if (typeof t != "string") return !0;
		return !1;
	}
	debug(...e) {}
	make() {
		let e = this.pattern, t = this.options;
		if (!t.nocomment && e.charAt(0) === "#") return void (this.comment = !0);
		if (!e) return void (this.empty = !0);
		this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], t.debug && (this.debug = (...e) => console.error(...e)), this.debug(this.pattern, this.globSet);
		let n = this.globSet.map(((e) => this.slashSplit(e)));
		this.globParts = this.preprocess(n), this.debug(this.pattern, this.globParts);
		let r = this.globParts.map(((e, t, n) => {
			if (this.isWindows && this.windowsNoMagicRoot) {
				let t = !(e[0] !== "" || e[1] !== "" || e[2] !== "?" && hr.test(e[2]) || hr.test(e[3])), n = /^[a-z]:/i.test(e[0]);
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
	partsMatch(e, t, n = !1) {
		let r = 0, i = 0, a = [], o = "";
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
	matchOne(e, t, n = !1) {
		let r = 0, i = 0;
		if (this.isWindows) {
			let n = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), a = !n && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), o = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), s = a ? 3 : n ? 0 : void 0, c = !o && t[0] === "" && t[1] === "" && t[2] === "?" && typeof t[3] == "string" && /^[a-z]:$/i.test(t[3]) ? 3 : o ? 0 : void 0;
			if (typeof s == "number" && typeof c == "number") {
				let [n, a] = [e[s], t[c]];
				n.toLowerCase() === a.toLowerCase() && (t[c] = n, i = c, r = s);
			}
		}
		let { optimizationLevel: a = 1 } = this.options;
		return a >= 2 && (e = this.levelTwoFileOptimize(e)), t.includes(H) ? this.#e(e, t, n, r, i) : this.#n(e, t, n, r, i);
	}
	#e(e, t, n, r, i) {
		let a = t.indexOf(H, i), o = t.lastIndexOf(H), [s, c, l] = n ? [
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
		for (let e of c) e === H ? (m.push(p), f = [[], 0], d.push(f)) : (f[0].push(e), p++);
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
			if (this.debug(t, r, i), !1 === r || r === H || (typeof r == "string" ? (n = i === r, this.debug("string match", r, i, n)) : (n = r.test(i), this.debug("pattern match", r, i, n)), !n)) return !1;
		}
		if (a === c && o === s) return !0;
		if (a === c) return n;
		if (o === s) return a === c - 1 && e[a] === "";
		throw Error("wtf?");
	}
	braceExpand() {
		return mr(this.pattern, this.options);
	}
	parse(e) {
		En(e);
		let t = this.options;
		if (e === "**") return H;
		if (e === "") return "";
		let n, r = null;
		(n = e.match(rr)) ? r = t.dot ? ar : ir : (n = e.match(qn)) ? r = (t.nocase ? t.dot ? Zn : Xn : t.dot ? Yn : Jn)(n[1]) : (n = e.match(or)) ? r = (t.nocase ? t.dot ? cr : sr : t.dot ? lr : ur)(n) : (n = e.match(Qn)) ? r = t.dot ? er : $n : (n = e.match(tr)) && (r = nr);
		let i = Kn.fromGlob(e, this.options).toMMPattern();
		return r && typeof i == "object" && Reflect.defineProperty(i, "test", { value: r }), i;
	}
	makeRe() {
		if (this.regexp || !1 === this.regexp) return this.regexp;
		let e = this.set;
		if (!e.length) return this.regexp = !1, this.regexp;
		let t = this.options, n = t.noglobstar ? "[^/]*?" : t.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", r = new Set(t.nocase ? ["i"] : []), i = e.map(((e) => {
			let t = e.map(((e) => {
				if (e instanceof RegExp) for (let t of e.flags.split("")) r.add(t);
				return typeof e == "string" ? e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : e === H ? H : e._src;
			}));
			return t.forEach(((e, r) => {
				let i = t[r + 1], a = t[r - 1];
				e === H && a !== H && (a === void 0 ? i !== void 0 && i !== H ? t[r + 1] = "(?:\\/|" + n + "\\/)?" + i : t[r] = n : i === void 0 ? t[r - 1] = a + "(?:\\/|" + n + ")?" : i !== H && (t[r - 1] = a + "(?:\\/|\\/" + n + "\\/)" + i, t[r + 1] = H));
			})), t.filter(((e) => e !== H)).join("/");
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
	match(e, t = this.partial) {
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
		return V.defaults(e).Minimatch;
	}
};
function _r(e, t = "") {
	let n = /* @__PURE__ */ Error(`${t}Invalid response: ${e.status} ${e.statusText}`);
	return n.status = e.status, n.response = e, n;
}
function W(e, t) {
	let { status: n } = t;
	if (n === 401 && e.digest) return t;
	if (n >= 400) throw _r(t);
	return t;
}
function vr(e, t, n = !1) {
	return n ? {
		data: t,
		headers: e.headers ? mn(e.headers) : {},
		status: e.status,
		statusText: e.statusText
	} : t;
}
V.AST = Kn, V.Minimatch = gr, V.escape = (e, { windowsPathsNoEscape: t = !1 } = {}) => t ? e.replace(/[?*()[\]]/g, "[$&]") : e.replace(/[?*()[\]\\]/g, "\\$&"), V.unescape = jn;
var yr = (br = function(e, t, n, r = {}) {
	let i = z({
		url: I(e.remoteURL, F(t)),
		method: "COPY",
		headers: {
			Destination: I(e.remoteURL, F(n)),
			Overwrite: !1 === r.overwrite ? "F" : "T",
			Depth: r.shallow ? "0" : "infinity"
		}
	}, e, r);
	return o = function(t) {
		W(e, t);
	}, (a = R(i, e)) && a.then || (a = Promise.resolve(a)), o ? a.then(o) : a;
	var a, o;
}, function() {
	var e = [...arguments];
	try {
		return Promise.resolve(br.apply(this, e));
	} catch (e) {
		return Promise.reject(e);
	}
}), br, xr = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Sr = RegExp("^[" + xr + "][" + xr + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Cr = function(e) {
	return Sr.exec(e) != null;
}, wr = [
	"hasOwnProperty",
	"toString",
	"valueOf",
	"__defineGetter__",
	"__defineSetter__",
	"__lookupGetter__",
	"__lookupSetter__"
], Tr = [
	"__proto__",
	"constructor",
	"prototype"
], Er = (e) => wr.includes(e) ? "__" + e : e, Dr = {
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
		eNotation: !0,
		unicode: !1
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
	onDangerousProperty: Er
};
function Or(e, t) {
	if (typeof e != "string") return;
	let n = e.toLowerCase();
	if (wr.some(((e) => n === e.toLowerCase())) || Tr.some(((e) => n === e.toLowerCase()))) throw Error(`[SECURITY] Invalid ${t}: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
}
function kr(e, t) {
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
	} : kr(!0);
}
var Ar = function(e) {
	let t = Object.assign({}, Dr, e), n = [
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
	for (let { value: e, name: t } of n) e && Or(e, t);
	return t.onDangerousProperty === null && (t.onDangerousProperty = Er), t.processEntities = kr(t.processEntities, t.htmlEntities), t.unpairedTagsSet = new Set(t.unpairedTags), t.stopNodes && Array.isArray(t.stopNodes) && (t.stopNodes = t.stopNodes.map(((e) => typeof e == "string" && e.startsWith("*.") ? ".." + e.substring(2) : e))), t;
}, jr = typeof Symbol == "function" ? Symbol("XML Node Metadata") : "@@xmlMetadata", Mr = class {
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
		}) : this.child.push({ [e.tagname]: e.child }), this.addStartIndex(t);
	}
	addStartIndex(e) {
		e !== void 0 && (this.child[this.child.length - 1][jr] = { startIndex: e });
	}
	addEndIndex(e) {
		let t = this.child[this.child.length - 1];
		t !== void 0 && t[jr] !== void 0 && t[jr].endIndex === void 0 && (t[jr].endIndex = e);
	}
	static getMetaDataSymbol() {
		return jr;
	}
}, Nr = ":A-Za-z_À-ÖØ-öø-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�", Pr = ":A-Za-z_À-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿", Fr = Pr + "\\-\\.\\d·̀-ͯ҇‿-⁀", Ir = (e, t, n = "") => {
	let r = `[${e.replace(":", "")}][${t.replace(":", "")}]*`;
	return {
		name: RegExp(`^[${e}][${t}]*$`, n),
		ncName: RegExp(`^${r}$`, n),
		qName: RegExp(`^${r}(?::${r})?$`, n),
		nmToken: RegExp(`^[${t}]+$`, n),
		nmTokens: RegExp(`^[${t}]+(?:\\s+[${t}]+)*$`, n)
	};
}, Lr = Ir(Nr, Nr + "\\-\\.\\d·̀-ͯ‿-⁀"), Rr = Ir(Pr, Fr, "u"), zr = ":A-Za-z_", Br = Ir(zr, zr + "\\-\\.\\d"), Vr = (e = "1.0", t = !1) => t ? Br : e === "1.1" ? Rr : Lr, Hr = (e, { xmlVersion: t = "1.0", asciiOnly: n = !1 } = {}) => Vr(t, n).qName.test(e), Ur = [
	"name",
	"ncName",
	"qName",
	"nmToken",
	"nmTokens"
], Wr = (e, { xmlVersion: t = "1.0", asciiOnly: n = !1, maxCacheSize: r = 2048 } = {}) => {
	if (!Ur.includes(e)) throw TypeError(`Unknown production "${e}". Must be one of: ${Ur.join(", ")}`);
	let i = Vr(t, n)[e], a = /* @__PURE__ */ new Map(), o = (e) => {
		let t = a.get(e);
		if (t !== void 0) return t;
		let n = i.test(e);
		return a.size < r && a.set(e, n), n;
	};
	return o.reset = () => {
		a = /* @__PURE__ */ new Map();
	}, o;
}, Gr = class {
	constructor(e, t) {
		this.suppressValidationErr = !e, this.options = e, this.xmlVersion = t || 1;
	}
	setXmlVersion(e = 1) {
		this.xmlVersion = e;
	}
	readDocType(e, t) {
		let n = Object.create(null), r = 0;
		if (e[t + 3] !== "O" || e[t + 4] !== "C" || e[t + 5] !== "T" || e[t + 6] !== "Y" || e[t + 7] !== "P" || e[t + 8] !== "E") throw Error("Invalid Tag instead of DOCTYPE");
		{
			t += 9;
			let i = 1, a = !1, o = !1, s = null, c = "";
			for (; t < e.length; t++) if (s === null) {
				if (a || o || e[t] !== "\"" && e[t] !== "'") {
					if (e[t] !== "<" || o) {
						if (e[t] === ">") {
							if (o ? e[t - 1] === "-" && e[t - 2] === "-" && (o = !1, i--) : i--, i === 0) break;
						} else e[t] === "[" ? a = !0 : c += e[t];
					} else {
						if (a && Kr(e, "!ENTITY", t)) {
							let i, a;
							if (t += 7, [i, a, t] = this.readEntityExp(e, t + 1, this.suppressValidationErr), a.indexOf("&") === -1) {
								if (!1 !== this.options.enabled && this.options.maxEntityCount != null && r >= this.options.maxEntityCount) throw Error(`Entity count (${r + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
								n[i] = a, r++;
							}
						} else if (a && Kr(e, "!ELEMENT", t)) {
							t += 8;
							let { index: n } = this.readElementExp(e, t + 1);
							t = n;
						} else if (a && Kr(e, "!ATTLIST", t)) t += 8;
						else if (a && Kr(e, "!NOTATION", t)) {
							t += 9;
							let { index: n } = this.readNotationExp(e, t + 1, this.suppressValidationErr);
							t = n;
						} else {
							if (!Kr(e, "!--", t)) throw Error("Invalid DOCTYPE");
							o = !0;
						}
						i++, c = "";
					}
				} else s = e[t], c += e[t];
			} else e[t] === s && (s = null), c += e[t];
			if (s !== null || i !== 0) throw Error("Unclosed DOCTYPE");
		}
		return {
			entities: n,
			i: t
		};
	}
	readEntityExp(e, t) {
		let n = t = G(e, t);
		for (; t < e.length && !/\s/.test(e[t]) && e[t] !== "\"" && e[t] !== "'";) t++;
		let r = e.substring(n, t);
		if (qr(r, { xmlVersion: this.xmlVersion }), t = G(e, t), !this.suppressValidationErr) {
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
		let n = t = G(e, t);
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		!this.suppressValidationErr && qr(r, { xmlVersion: this.xmlVersion }), t = G(e, t);
		let i = e.substring(t, t + 6).toUpperCase();
		if (!this.suppressValidationErr && i !== "SYSTEM" && i !== "PUBLIC") throw Error(`Expected SYSTEM or PUBLIC, found "${i}"`);
		t += i.length, t = G(e, t);
		let a = null, o = null;
		if (i === "PUBLIC") [t, a] = this.readIdentifierVal(e, t, "publicIdentifier"), e[t = G(e, t)] !== "\"" && e[t] !== "'" || ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier"));
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
		let n = t = G(e, t);
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		if (!this.suppressValidationErr && !Hr(r, { xmlVersion: this.xmlVersion })) throw Error(`Invalid element name: "${r}"`);
		let i = "";
		if (e[t = G(e, t)] === "E" && Kr(e, "MPTY", t)) t += 4;
		else if (e[t] === "A" && Kr(e, "NY", t)) t += 2;
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
		let n = t = G(e, t);
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		for (qr(r, { xmlVersion: this.xmlVersion }), n = t = G(e, t); t < e.length && !/\s/.test(e[t]);) t++;
		let i = e.substring(n, t);
		if (!qr(i, { xmlVersion: this.xmlVersion })) throw Error(`Invalid attribute name: "${i}"`);
		t = G(e, t);
		let a = "";
		if (e.substring(t, t + 8).toUpperCase() === "NOTATION") {
			if (a = "NOTATION", e[t = G(e, t += 8)] !== "(") throw Error(`Expected '(', found "${e[t]}"`);
			t++;
			let n = [];
			for (; t < e.length && e[t] !== ")";) {
				let r = t;
				for (; t < e.length && e[t] !== "|" && e[t] !== ")";) t++;
				let i = e.substring(r, t);
				if (i = i.trim(), !qr(i, { xmlVersion: this.xmlVersion })) throw Error(`Invalid notation name: "${i}"`);
				n.push(i), e[t] === "|" && (t++, t = G(e, t));
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
		t = G(e, t);
		let o = "";
		return e.substring(t, t + 8).toUpperCase() === "#REQUIRED" ? (o = "#REQUIRED", t += 8) : e.substring(t, t + 7).toUpperCase() === "#IMPLIED" ? (o = "#IMPLIED", t += 7) : [t, o] = this.readIdentifierVal(e, t, "ATTLIST"), {
			elementName: r,
			attributeName: i,
			attributeType: a,
			defaultValue: o,
			index: t
		};
	}
}, G = (e, t) => {
	for (; t < e.length && /\s/.test(e[t]);) t++;
	return t;
};
function Kr(e, t, n) {
	for (let r = 0; r < t.length; r++) if (t[r] !== e[n + r + 1]) return !1;
	return !0;
}
function qr(e, t) {
	if (Hr(e, { xmlVersion: t })) return e;
	throw Error(`Invalid entity name ${e}`);
}
var Jr = [
	48,
	1632,
	1776,
	2406,
	2534,
	2662,
	2790,
	2918,
	3046,
	3174,
	3302,
	3430,
	3558,
	3664,
	3792,
	3872,
	4160,
	4240,
	6112,
	6160,
	6470,
	6608,
	6784,
	6800,
	6992,
	7088,
	7232,
	7248,
	65296,
	120782,
	120792,
	120802,
	120812,
	120822,
	66720,
	68912,
	69734,
	69872,
	69942,
	70096,
	70384,
	70736,
	70864,
	71248,
	71360,
	71472,
	71904,
	72016,
	72688,
	72784,
	73040,
	73120,
	73552,
	92768,
	92864,
	93008,
	123200,
	123632,
	124144,
	125264,
	130032
], Yr = /* @__PURE__ */ new Map(), Xr = 1632, Zr = (/* @__PURE__ */ new Uint8Array(63904)).fill(255);
for (let e of Jr) for (let t = 0; t < 10; t++) {
	let n = e + t;
	n <= 65535 ? Zr[n - Xr] = t : Yr.set(n, t);
}
var Qr = /* @__PURE__ */ new Set([
	8722,
	65293,
	65123
]), $r = /^[-+]?0x[a-fA-F0-9]+$/, ei = /^0b[01]+$/, ti = /^0o[0-7]+$/, ni = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, ri = {
	hex: !0,
	binary: !1,
	octal: !1,
	leadingZeros: !0,
	decimalPoint: ".",
	eNotation: !0,
	infinity: "original",
	unicode: !1
};
function ii(e, t = {}) {
	if (t = Object.assign({}, ri, t), !e || typeof e != "string") return e;
	let n = e.trim();
	if (n.length === 0 || t.skipLike !== void 0 && t.skipLike.test(n)) return e;
	if (n === "0" || t.unicode && (n = function(e) {
		if (typeof e != "string") return e;
		let t = e.length;
		if (t === 0) return e;
		let n = -1;
		for (let r = 0; r < t; r++) {
			let i = e.charCodeAt(r);
			if (!(i >= 48 && i <= 57 || i === 45)) {
				if (i < Xr) {
					if (Qr.has(i)) {
						n = r;
						break;
					}
				} else if (i >= 55296 && i <= 56319) {
					if (r + 1 < t) {
						let t = e.charCodeAt(r + 1);
						if (t >= 56320 && t <= 57343) {
							let e = 65536 + (i - 55296 << 10) + (t - 56320);
							if (Yr.has(e)) {
								n = r;
								break;
							}
						}
					}
				} else if (Zr[i - Xr] !== 255 || Qr.has(i)) {
					n = r;
					break;
				}
			}
		}
		if (n === -1) return e;
		let r = [];
		n > 0 && r.push(e.slice(0, n));
		for (let i = n; i < t; i++) {
			let n = e.charCodeAt(i);
			if (n >= 48 && n <= 57 || n === 45) {
				r.push(e[i]);
				continue;
			}
			if (n < Xr) {
				r.push(Qr.has(n) ? "-" : e[i]);
				continue;
			}
			if (n >= 55296 && n <= 56319) {
				if (i + 1 < t) {
					let t = e.charCodeAt(i + 1);
					if (t >= 56320 && t <= 57343) {
						let e = 65536 + (n - 55296 << 10) + (t - 56320), a = Yr.get(e);
						if (a !== void 0) {
							r.push(String.fromCharCode(a + 48)), i++;
							continue;
						}
					}
				}
				r.push(e[i]);
				continue;
			}
			if (Qr.has(n)) {
				r.push("-");
				continue;
			}
			let a = Zr[n - Xr];
			r.push(a === 255 ? e[i] : String.fromCharCode(a + 48));
		}
		return r.join("");
	}(n), n === "0")) return 0;
	if (t.hex && $r.test(n)) return oi(n, 16);
	if (t.binary && ei.test(n)) return oi(n, 2);
	if (t.octal && ti.test(n)) return oi(n, 8);
	if (isFinite(n)) {
		if (n.includes("e") || n.includes("E")) return function(e, t, n) {
			if (!n.eNotation) return e;
			let r = t.match(ai);
			if (r) {
				let i = r[1] || "", a = r[3].indexOf("e") === -1 ? "E" : "e", o = r[2], s = i ? e[o.length + 1] === a : e[o.length] === a;
				return o.length > 1 && s ? e : (o.length !== 1 || !r[3].startsWith(`.${a}`) && r[3][0] !== a) && o.length > 0 ? n.leadingZeros && !s ? (t = (r[1] || "") + r[3], Number(t)) : e : Number(t);
			}
			return e;
		}(e, n, t);
		{
			let r = ni.exec(n);
			if (r) {
				let i = r[1] || "", a = r[2], o = function(e) {
					if (e && e.indexOf(".") !== -1) {
						let t = e.length;
						for (; t > 0 && e.charCodeAt(t - 1) === 48;) t--;
						return (e = e.slice(0, t)) === "." ? e = "0" : e[0] === "." ? e = "0" + e : e[e.length - 1] === "." && (e = e.substring(0, e.length - 1)), e;
					}
					return e;
				}(r[3]), s = i ? e[a.length + 1] === "." : e[a.length] === ".";
				if (!t.leadingZeros && (a.length > 1 || a.length === 1 && !s)) return e;
				{
					let r = Number(n), s = String(r);
					if (r === 0) return r;
					if (s.search(/[eE]/) !== -1) return t.eNotation ? r : e;
					if (n.indexOf(".") !== -1) return s === "0" || s === o || s === `${i}${o}` ? r : e;
					let c = a ? o : n;
					return a ? c === s || i + c === s ? r : e : c === s || c === i + s ? r : e;
				}
			}
			return e;
		}
	}
	return function(e, t, n) {
		let r = t === 1 / 0;
		switch (n.infinity.toLowerCase()) {
			case "null": return null;
			case "infinity": return t;
			case "string": return r ? "Infinity" : "-Infinity";
			default: return e;
		}
	}(e, Number(n), t);
}
var ai = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function oi(e, t) {
	let n = e.trim();
	if (t !== 2 && t !== 8 || (e = n.substring(2)), parseInt) return parseInt(e, t);
	if (Number.parseInt) return Number.parseInt(e, t);
	if (window && window.parseInt) return window.parseInt(e, t);
	throw Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
var si = class {
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
	getAnyParentAttr(e) {
		return this._matcher.getAnyParentAttr(e);
	}
	hasAnyParentAttr(e) {
		return this._matcher.hasAnyParentAttr(e);
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
	toString(e, t = !0) {
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
}, ci = class {
	constructor(e = {}) {
		this.separator = e.separator || ".", this.path = [], this.siblingStacks = [], this._pathStringCache = null, this._view = new si(this), this._keptAttrs = [];
	}
	push(e, t = null, n = null, r = null) {
		this._pathStringCache = null, this.path.length > 0 && (this.path[this.path.length - 1].values = void 0);
		let i = this.path.length, a = this.siblingStacks[i];
		a || (a = {
			counts: /* @__PURE__ */ new Map(),
			total: 0
		}, this.siblingStacks[i] = a);
		let o = n ? `${n}:${e}` : e, s = a.counts.get(o) || 0, c = a.total;
		a.counts.set(o, s + 1), a.total++;
		let l = {
			tag: e,
			position: c,
			counter: s
		};
		n != null && (l.namespace = n), t != null && (l.values = t), this.path.push(l);
		let u = this.path.length, d = r === null ? null : r.keep;
		if (d != null && d.length > 0 && t) for (let e = 0; e < d.length; e++) {
			let n = d[e];
			t[n] !== void 0 && this._keptAttrs.push({
				depth: u,
				name: n,
				value: t[n]
			});
		}
	}
	pop() {
		if (this.path.length === 0) return;
		this._pathStringCache = null;
		let e = this.path.pop();
		this.siblingStacks.length > this.path.length + 1 && (this.siblingStacks.length = this.path.length + 1);
		let t = this.path.length + 1;
		for (; this._keptAttrs.length > 0 && this._keptAttrs[this._keptAttrs.length - 1].depth >= t;) this._keptAttrs.pop();
		return e;
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
	getAnyParentAttr(e) {
		let t = this._keptAttrs;
		for (let n = t.length - 1; n >= 0; n--) if (t[n].name === e) return t[n].value;
	}
	hasAnyParentAttr(e) {
		let t = this._keptAttrs;
		for (let n = t.length - 1; n >= 0; n--) if (t[n].name === e) return !0;
		return !1;
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
	toString(e, t = !0) {
		let n = e || this.separator;
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
		this._pathStringCache = null, this.path = [], this.siblingStacks = [], this._keptAttrs = [];
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
			siblingStacks: this.siblingStacks.map(((e) => e && {
				counts: new Map(e.counts),
				total: e.total
			})),
			keptAttrs: this._keptAttrs.map(((e) => ({ ...e })))
		};
	}
	restore(e) {
		this._pathStringCache = null, this.path = e.path.map(((e) => ({ ...e }))), this.siblingStacks = e.siblingStacks.map(((e) => e && {
			counts: new Map(e.counts),
			total: e.total
		})), this._keptAttrs = (e.keptAttrs || []).map(((e) => ({ ...e })));
	}
	readOnly() {
		return this._view;
	}
}, li = class {
	constructor(e, t = {}, n) {
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
}, ui = class {
	constructor() {
		this._byDepthAndTag = /* @__PURE__ */ new Map(), this._wildcardByDepth = /* @__PURE__ */ new Map(), this._deepWildcards = [], this._deepByTerminalTag = /* @__PURE__ */ new Map(), this._patterns = /* @__PURE__ */ new Set(), this._sealed = !1;
	}
	add(e) {
		if (this._sealed) throw TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");
		if (this._patterns.has(e.pattern)) return this;
		if (this._patterns.add(e.pattern), e.hasDeepWildcard()) {
			let t = e.segments[e.segments.length - 1];
			if (t && t.type !== "deep-wildcard" && t.tag !== "*") {
				let n = t.tag;
				this._deepByTerminalTag.has(n) || this._deepByTerminalTag.set(n, []), this._deepByTerminalTag.get(n).push(e);
			} else this._deepWildcards.push(e);
			return this;
		}
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
		let t = e.getDepth(), n = e.getCurrentTag(), r = `${t}:${n}`, i = this._byDepthAndTag.get(r);
		if (i) {
			for (let t = 0; t < i.length; t++) if (e.matches(i[t])) return i[t];
		}
		let a = this._wildcardByDepth.get(t);
		if (a) {
			for (let t = 0; t < a.length; t++) if (e.matches(a[t])) return a[t];
		}
		let o = this._deepByTerminalTag.get(n);
		if (o) {
			for (let t = 0; t < o.length; t++) if (e.matches(o[t])) return o[t];
		}
		for (let t = 0; t < this._deepWildcards.length; t++) if (e.matches(this._deepWildcards[t])) return this._deepWildcards[t];
		return null;
	}
}, di = {
	cent: "¢",
	pound: "£",
	curren: "¤",
	yen: "¥",
	euro: "€",
	dollar: "$",
	fnof: "ƒ",
	inr: "₹",
	af: "؋",
	birr: "ብር",
	peso: "₱",
	rub: "₽",
	won: "₩",
	yuan: "¥",
	cedil: "¸"
}, fi = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	quot: "\""
}, pi = {
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
}, mi = Object.freeze({
	ALLOW: "allow",
	BLOCK: "block",
	THROW: "throw"
}), hi = /* @__PURE__ */ new Set("!?\\\\/[]$%{}^&*()<>|+");
function gi(e) {
	if (e[0] === "#") throw Error(`[EntityReplacer] Invalid character '#' in entity name: "${e}"`);
	for (let t of e) if (hi.has(t)) throw Error(`[EntityReplacer] Invalid character '${t}' in entity name: "${e}"`);
	return e;
}
function _i(...e) {
	let t = Object.create(null);
	for (let n of e) if (n) for (let e of Object.keys(n)) {
		let r = n[e];
		if (typeof r == "string") t[e] = r;
		else if (r && typeof r == "object" && r.val !== void 0) {
			let n = r.val;
			typeof n == "string" && (t[e] = n);
		}
	}
	return t;
}
var vi = "external", yi = "base", bi = "all", K = Object.freeze({
	allow: 0,
	leave: 1,
	remove: 2,
	throw: 3
}), xi = /* @__PURE__ */ new Set([
	9,
	10,
	13
]), Si = class {
	constructor(e = {}) {
		var t;
		this._limit = e.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = typeof e.postCheck == "function" ? e.postCheck : (e) => e, this._limitTiers = (t = this._limit.applyLimitsTo ?? vi) && t !== vi ? t === bi ? /* @__PURE__ */ new Set([bi]) : t === yi ? /* @__PURE__ */ new Set([yi]) : Array.isArray(t) ? new Set(t) : /* @__PURE__ */ new Set([vi]) : /* @__PURE__ */ new Set([vi]), this._numericAllowed = e.numericAllowed ?? !0, this._baseMap = _i(fi, e.namedEntities || null), this._externalMap = Object.create(null), this._inputMap = Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(e.remove && Array.isArray(e.remove) ? e.remove : []), this._leaveSet = new Set(e.leave && Array.isArray(e.leave) ? e.leave : []);
		let n = function(e) {
			if (!e) return {
				xmlVersion: 1,
				onLevel: K.allow,
				nullLevel: K.remove
			};
			let t = e.xmlVersion === 1.1 ? 1.1 : 1, n = K[e.onNCR] ?? K.allow, r = K[e.nullNCR] ?? K.remove;
			return {
				xmlVersion: t,
				onLevel: n,
				nullLevel: Math.max(r, K.remove)
			};
		}(e.ncr);
		this._ncrXmlVersion = n.xmlVersion, this._ncrOnLevel = n.onLevel, this._ncrNullLevel = n.nullLevel, this._onExternalEntity = typeof e.onExternalEntity == "function" ? e.onExternalEntity : null, this._onInputEntity = typeof e.onInputEntity == "function" ? e.onInputEntity : null;
	}
	_applyRegistrationHook(e, t, n, r) {
		if (!e) return !0;
		let i = e(t, n);
		if (i === mi.BLOCK) return !1;
		if (i === mi.THROW) throw Error(`[EntityDecoder] Registration of ${r} entity "&${t};" was rejected by hook`);
		return !0;
	}
	setExternalEntities(e) {
		if (e) for (let t of Object.keys(e)) gi(t);
		if (!this._onExternalEntity) return void (this._externalMap = _i(e));
		let t = _i(e), n = Object.create(null);
		for (let [e, r] of Object.entries(t)) this._applyRegistrationHook(this._onExternalEntity, e, r, "external") && (n[e] = r);
		this._externalMap = n;
	}
	addExternalEntity(e, t) {
		gi(e), typeof t == "string" && t.indexOf("&") === -1 && this._applyRegistrationHook(this._onExternalEntity, e, t, "external") && (this._externalMap[e] = t);
	}
	addInputEntities(e) {
		if (this._totalExpansions = 0, this._expandedLength = 0, !this._onInputEntity) return void (this._inputMap = _i(e));
		let t = _i(e), n = Object.create(null);
		for (let [e, r] of Object.entries(t)) this._applyRegistrationHook(this._onInputEntity, e, r, "input") && (n[e] = r);
		this._inputMap = n;
	}
	reset() {
		return this._inputMap = Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this;
	}
	setXmlVersion(e) {
		this._ncrXmlVersion = e === 1.1 ? 1.1 : 1;
	}
	decode(e) {
		if (typeof e != "string" || e.length === 0 || e.indexOf("&") === -1) return e;
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
			if (this._removeSet.has(l)) u = "", d === void 0 && (d = vi);
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
					u = e, d = yi;
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
		return !!this._limitTiers.has(bi) || this._limitTiers.has(e);
	}
	_resolveName(e) {
		return e in this._inputMap ? {
			value: this._inputMap[e],
			tier: vi
		} : e in this._externalMap ? {
			value: this._externalMap[e],
			tier: vi
		} : e in this._baseMap ? {
			value: this._baseMap[e],
			tier: yi
		} : void 0;
	}
	_classifyNCR(e) {
		return e === 0 ? this._ncrNullLevel : e >= 55296 && e <= 57343 || this._ncrXmlVersion === 1 && e >= 1 && e <= 31 && !xi.has(e) ? K.remove : -1;
	}
	_applyNCRAction(e, t, n) {
		switch (e) {
			case K.allow: return String.fromCodePoint(n);
			case K.remove: return "";
			case K.leave: return;
			case K.throw: throw Error(`[EntityDecoder] Prohibited numeric character reference &${t}; (U+${n.toString(16).toUpperCase().padStart(4, "0")})`);
			default: return String.fromCodePoint(n);
		}
	}
	_resolveNCR(e) {
		let t = e.charCodeAt(1), n;
		if (n = t === 120 || t === 88 ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), Number.isNaN(n) || n < 0 || n > 1114111) return;
		let r = this._classifyNCR(n);
		if (!this._numericAllowed && r < K.remove) return;
		let i = r === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, r);
		return this._applyNCRAction(i, e, n);
	}
}, Ci = [
	{
		id: "sql-block-comment-open",
		description: "SQL block comment open: /* ... */ — unusual in legitimate user text",
		pattern: /\/\*/
	},
	{
		id: "sql-union-select",
		description: "UNION SELECT — most common SQL injection aggregation attack",
		pattern: /\bUNION\s{1,20}(?:ALL\s{1,20})?SELECT\b/i
	},
	{
		id: "sql-drop-table",
		description: "DROP TABLE — destructive DDL injection",
		pattern: /\bDROP\s{1,20}TABLE\b/i
	},
	{
		id: "sql-drop-database",
		description: "DROP DATABASE — destructive DDL injection",
		pattern: /\bDROP\s{1,20}DATABASE\b/i
	},
	{
		id: "sql-insert-into",
		description: "INSERT INTO — data injection",
		pattern: /\bINSERT\s{1,20}INTO\b/i
	},
	{
		id: "sql-delete-from",
		description: "DELETE FROM — data deletion injection",
		pattern: /\bDELETE\s{1,20}FROM\b/i
	},
	{
		id: "sql-update-set",
		description: "UPDATE ... SET — data modification injection",
		pattern: /\bUPDATE\b[\s\S]{1,60}\bSET\b/i
	},
	{
		id: "sql-exec-xp",
		description: "EXEC xp_ — MSSQL extended stored procedure execution",
		pattern: /\bEXEC(?:UTE)?\s{1,20}xp_/i
	},
	{
		id: "sql-tautology-string",
		description: "Classic string tautology: ' OR '1'='1 or \" OR \"1\"=\"1\"",
		pattern: /'\s{0,10}OR\s{0,10}'[^']{0,20}'\s*=\s*'[^']{0,20}/i
	},
	{
		id: "sql-tautology-numeric",
		description: "Numeric tautology: OR 1=1",
		pattern: /\bOR\s{1,10}1\s*=\s*1\b/i
	},
	{
		id: "sql-always-true-zero",
		description: "Numeric tautology: OR 0=0",
		pattern: /\bOR\s{1,10}0\s*=\s*0\b/i
	},
	{
		id: "sql-sleep-benchmark",
		description: "Time-based blind injection: SLEEP() or BENCHMARK()",
		pattern: /\b(?:SLEEP|BENCHMARK)\s*\(/i
	},
	{
		id: "sql-waitfor-delay",
		description: "MSSQL time-based blind injection: WAITFOR DELAY",
		pattern: /\bWAITFOR\s{1,20}DELAY\b/i
	},
	{
		id: "sql-char-function",
		description: "CHAR() function — used to obfuscate injected strings",
		pattern: /\bCHAR\s*\(\s*\d{1,3}/i
	},
	{
		id: "sql-information-schema",
		description: "INFORMATION_SCHEMA — reconnaissance query for table/column enumeration",
		pattern: /\bINFORMATION_SCHEMA\b/i
	}
], wi = [
	...Ci,
	{
		id: "sql-line-comment",
		description: "SQL line comment: -- followed by whitespace or end of string",
		pattern: /--(?:\s|$)/
	},
	{
		id: "sql-stacked-query",
		description: "Stacked queries: semicolon immediately followed by a SQL keyword",
		pattern: /;\s{0,10}(?:SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b/i
	},
	{
		id: "sql-hex-encoding",
		description: "Hex-encoded string injection: 0x41414141 style (MySQL)",
		pattern: /\b0x[0-9a-f]{4,}/i
	}
], Ti = [
	{
		id: "html-script-open",
		description: "<script opening tag",
		pattern: /<script[\s>/]/i
	},
	{
		id: "html-script-close",
		description: "<\/script closing tag",
		pattern: /<\/script[\s>]/i
	},
	{
		id: "html-javascript-protocol",
		description: "javascript: URI scheme (with optional whitespace/encoding)",
		pattern: /j[\t\n\r ]*a[\t\n\r ]*v[\t\n\r ]*a[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/i
	},
	{
		id: "html-vbscript-protocol",
		description: "vbscript: URI scheme",
		pattern: /vbscript[\t\n\r ]*:/i
	},
	{
		id: "html-data-html",
		description: "data:text/html URI — can execute scripts in browsers",
		pattern: /data[\t\n\r ]*:[\t\n\r ]*text\/html/i
	},
	{
		id: "html-data-xhtml",
		description: "data:application/xhtml+xml URI",
		pattern: /data[\t\n\r ]*:[\t\n\r ]*application\/xhtml/i
	},
	{
		id: "html-data-svg",
		description: "data:image/svg+xml URI — can execute scripts",
		pattern: /data[\t\n\r ]*:[\t\n\r ]*image\/svg\+xml/i
	},
	{
		id: "html-inline-event-handler",
		description: "Inline event handler attributes: onclick=, onerror=, onload=, etc.",
		pattern: /\bon\w{1,30}\s*=/i
	},
	{
		id: "html-entity-obfuscated-script",
		description: "HTML-entity-encoded <script (e.g. &#x3C;script or &lt;script)",
		pattern: /(?:&#x0*3[Cc];?|&#0*60;?|&lt;)\s*script/i
	},
	{
		id: "html-entity-obfuscated-javascript",
		description: "HTML-entity-encoded javascript: (partial — catches common &#106; or &#x6a; for \"j\")",
		pattern: /(?:&#x0*6[Aa];?|&#0*106;?)\s*(?:&#x0*61;?|a)[\s\S]{0,80}script\s*:/i
	},
	{
		id: "html-style-expression",
		description: "CSS expression() — IE-era code execution in style attributes",
		pattern: /style[\s\S]{0,20}expression\s*\(/i
	},
	{
		id: "html-object-embed",
		description: "<object or <embed tags that can load active content",
		pattern: /<(?:object|embed)[\s>/]/i
	},
	{
		id: "html-base-tag",
		description: "<base href= — can hijack all relative URLs on a page",
		pattern: /<base[\s>]/i
	},
	{
		id: "html-meta-refresh",
		description: "<meta http-equiv=\"refresh\" — can redirect users",
		pattern: /<meta[\s\S]{0,40}http-equiv[\s\S]{0,20}refresh/i
	},
	{
		id: "html-srcdoc",
		description: "srcdoc= attribute on iframes — embeds HTML that can run scripts",
		pattern: /srcdoc\s*=/i
	},
	{
		id: "html-iframe",
		description: "<iframe tag",
		pattern: /<iframe[\s>/]/i
	},
	{
		id: "html-form",
		description: "<form tag — can be used for phishing / credential harvesting injection",
		pattern: /<form[\s>/]/i
	}
], Ei = [
	{
		id: "xml-cdata-injection",
		description: "CDATA section injection: <![CDATA[ breaks out of text node context",
		pattern: /<!\[CDATA\[/i
	},
	{
		id: "xml-cdata-close",
		description: "CDATA close sequence: ]]> can terminate an enclosing CDATA section",
		pattern: /\]\]>/
	},
	{
		id: "xml-processing-instruction",
		description: "XML processing instruction: <?xml-stylesheet or <?php etc.",
		pattern: /<\?(?:xml[\- ]|php|asp)/i
	},
	{
		id: "xml-doctype-injection",
		description: "DOCTYPE declaration embedded in content — can define entities",
		pattern: /<!DOCTYPE(?:[\s[]|$)/i
	},
	{
		id: "xml-entity-system",
		description: "SYSTEM keyword — used in external entity declarations (XXE)",
		pattern: /\bSYSTEM\s+["']/i
	},
	{
		id: "xml-entity-public",
		description: "PUBLIC keyword — used in external entity declarations (XXE)",
		pattern: /\bPUBLIC\s+["']/i
	},
	{
		id: "xml-entity-declaration",
		description: "<!ENTITY declaration — defines entities, potential XXE or entity expansion",
		pattern: /<!ENTITY[\s%]/i
	},
	{
		id: "xml-billion-laughs",
		description: "Entity reference chaining / billion laughs: repeated &eX; style references",
		pattern: /(?:&\w{1,20};){3,}/
	},
	{
		id: "xml-namespace-confusion",
		description: "xmlns: attribute injection — can redefine namespaces to confuse parsers",
		pattern: /\bxmlns(?::\w{1,40})?\s*=/i
	},
	{
		id: "xml-comment-injection",
		description: "<!-- comment injection — can hide content from some parsers",
		pattern: /<!--/
	},
	{
		id: "xml-comment-close",
		description: "--> closes an enclosing XML comment",
		pattern: /-->/
	},
	{
		id: "xml-pi-close",
		description: "?> closes an enclosing processing instruction",
		pattern: /\?>/
	}
], Di = [
	{
		id: "svg-script-element",
		description: "<script element inside SVG executes JavaScript",
		pattern: /<script[\s>/]/i
	},
	{
		id: "svg-xlink-href-javascript",
		description: "xlink:href with javascript: — classic SVG XSS via <a> or <use>",
		pattern: /xlink\s*:\s*href\s*=\s*["']?\s*javascript\s*:/i
	},
	{
		id: "svg-href-javascript",
		description: "href= with javascript: in SVG context (<a>, <animate>, etc.)",
		pattern: /href\s*=\s*["']?\s*javascript\s*:/i
	},
	{
		id: "svg-foreignobject",
		description: "<foreignObject embeds HTML inside SVG — can execute scripts",
		pattern: /<foreignObject[\s>/]/i
	},
	{
		id: "svg-use-external",
		description: "<use xlink:href or href pointing to external resource (non-fragment URL)",
		pattern: /<use[\s\S]{0,60}(?:xlink\s*:\s*)?href\s*=\s*(?:["'][^#]|[^"'#\s>])/i
	},
	{
		id: "svg-animate-href",
		description: "<animate attributeName=\"href\" — can dynamically change href to javascript:",
		pattern: /<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*href["']/i
	},
	{
		id: "svg-animate-xlinkhref",
		description: "<animate attributeName=\"xlink:href\"",
		pattern: /<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*xlink\s*:\s*href["']/i
	},
	{
		id: "svg-set-javascript",
		description: "<set to=\"javascript:...\" — sets an attribute to a javascript: URI",
		pattern: /<set[\s\S]{0,80}to\s*=\s*["']?\s*javascript\s*:/i
	},
	{
		id: "svg-event-handler",
		description: "SVG-specific event handler attributes: onload=, onerror=, onactivate=, etc.",
		pattern: /\bon(?:load|error|activate|begin|end|repeat|focus|blur|click|mouse\w{1,20}|key\w{1,20})\s*=/i
	},
	{
		id: "svg-handler-generic",
		description: "Generic on* handler catch-all for SVG attributes",
		pattern: /\bon\w{1,30}\s*=/i
	},
	{
		id: "svg-filter-feimage",
		description: "<feImage href= — filter primitive that can load external resources",
		pattern: /<feImage[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=/i
	},
	{
		id: "svg-image-external",
		description: "<image xlink:href with http/https or javascript protocol",
		pattern: /<image[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=\s*["']?\s*(?:https?|javascript)\s*:/i
	},
	{
		id: "svg-style-javascript",
		description: "style= attribute containing javascript: (e.g. background:url(javascript:...))",
		pattern: /style\s*=[\s\S]{0,60}javascript\s*:/i
	}
], Oi = [
	{
		id: "shell-path-traversal-unix",
		description: "Unix path traversal: ../  — climbing the directory tree",
		pattern: /\.\.\//
	},
	{
		id: "shell-path-traversal-windows",
		description: "Windows path traversal: ..\\ — climbing the directory tree",
		pattern: /\.\.\\/
	},
	{
		id: "shell-path-traversal-encoded",
		description: "URL-encoded path traversal: %2e%2e or %2f variants",
		pattern: /%2e%2e|%2f\.\.|\.\.%2f/i
	},
	{
		id: "shell-null-byte",
		description: "Null byte injection: \\x00 or %00 — truncates strings in C-backed functions",
		pattern: /\x00|%00/
	},
	{
		id: "shell-semicolon",
		description: "Semicolon command separator: cmd1; cmd2",
		pattern: /;/
	},
	{
		id: "shell-pipe",
		description: "Pipe operator: cmd1 | cmd2",
		pattern: /\|/
	},
	{
		id: "shell-and-operator",
		description: "AND operator: cmd1 && cmd2",
		pattern: /&&/
	},
	{
		id: "shell-or-operator",
		description: "OR operator: cmd1 || cmd2",
		pattern: /\|\|/
	},
	{
		id: "shell-backtick",
		description: "Backtick command substitution: `cmd`",
		pattern: /`/
	},
	{
		id: "shell-dollar-paren",
		description: "Dollar-paren command substitution: $(cmd)",
		pattern: /\$\(/
	},
	{
		id: "shell-dollar-brace",
		description: "Dollar-brace variable expansion: ${var} — can be abused for injection",
		pattern: /\$\{/
	},
	{
		id: "shell-redirect-out",
		description: "Output redirection: cmd > file or cmd >> file",
		pattern: />{1,2}/
	},
	{
		id: "shell-redirect-in",
		description: "Input redirection: cmd < file",
		pattern: /</
	},
	{
		id: "shell-newline-injection",
		description: "Newline injection: \\n or \\r — can inject new shell commands",
		pattern: /[\n\r]/
	},
	{
		id: "shell-glob-star",
		description: "Glob expansion: * or ? — can expand to unintended files",
		pattern: /[/\\][*?]/
	},
	{
		id: "shell-absolute-root",
		description: "Absolute root path injection: string starting with / or \\ (Windows UNC)",
		pattern: /^(?:\/|\\\\)/
	},
	{
		id: "shell-windows-drive",
		description: "Windows drive letter path injection: C:\\ or D:/",
		pattern: /^[a-zA-Z]:[/\\]/
	},
	{
		id: "shell-curl-wget",
		description: "curl/wget with URL or flags — can exfiltrate data or download payloads",
		pattern: /\b(?:curl|wget)\s+(?:https?:\/\/|ftp:\/\/|-)/i
	}
], ki = [
	{
		id: "redos-nested-quantifier-plus",
		description: "Nested + quantifier inside a group with outer quantifier: (a+)+, (.+b)*, etc.",
		pattern: /\([^)]*\+[^)]*\)[+*]/
	},
	{
		id: "redos-nested-quantifier-star",
		description: "Nested * quantifier: (a*)* or (a*)+ — catastrophic backtracking",
		pattern: /\([^)]*\*[^)]*\)[*+]/
	},
	{
		id: "redos-nested-groups",
		description: "Doubly nested quantified groups: ((a+)+) — guaranteed catastrophic",
		pattern: /\(\([^)]{0,40}\)[+*]\)[+*]/
	},
	{
		id: "redos-alternation-overlap",
		description: "Overlapping alternation under quantifier: (a|a)+ — ambiguous NFA paths",
		pattern: /\(([^|()]{1,20})\|(?:\1)(?:\|[^|()]{1,20}){0,5}\)[+*?]{1,2}/
	},
	{
		id: "redos-star-plus-concat",
		description: "(x*x)+ pattern — triggers super-linear backtracking",
		pattern: /\([^)]{0,10}\*[^)]{0,10}\)[+*]/
	},
	{
		id: "redos-dot-star-greedy",
		description: "(.*){n,} or (.+){n,} — repeated greedy dot quantifiers",
		pattern: /\(\.[*+]\)\{?\d/
	},
	{
		id: "redos-large-repetition",
		description: "Very large fixed or range repetition count {1000,} or {1000,n} — denial of service via backtracking",
		pattern: /\{\d{4,}(?:,\d*)?\}/
	},
	{
		id: "redos-catastrophic-alternation",
		description: "Long alternation with many similar branches — polynomial backtracking risk",
		pattern: /\([^)]{0,200}(?:\|[^|)]{0,50}){9,}\)/
	}
], q = "[\"'\\s]*:", Ai = [
	{
		id: "nosql-where-operator",
		description: "$where — executes arbitrary JavaScript server-side in MongoDB",
		pattern: RegExp(`\\$where${q}`, "i")
	},
	{
		id: "nosql-ne-operator",
		description: "$ne — \"not equal\" operator used to bypass equality checks",
		pattern: RegExp(`\\$ne${q}`, "i")
	},
	{
		id: "nosql-gt-operator",
		description: "$gt — \"greater than\" used to bypass password/value checks",
		pattern: RegExp(`\\$gte?${q}`, "i")
	},
	{
		id: "nosql-lt-operator",
		description: "$lt / $lte — \"less than\" bypass variants",
		pattern: RegExp(`\\$lte?${q}`, "i")
	},
	{
		id: "nosql-regex-operator",
		description: "$regex — can be used to extract data character by character (blind injection)",
		pattern: RegExp(`\\$regex${q}`, "i")
	},
	{
		id: "nosql-or-operator",
		description: "$or — logical OR; used to create always-true conditions",
		pattern: RegExp(`\\$or${q}\\s*\\[`, "i")
	},
	{
		id: "nosql-and-operator",
		description: "$and — logical AND operator injection",
		pattern: RegExp(`\\$and${q}\\s*\\[`, "i")
	},
	{
		id: "nosql-nor-operator",
		description: "$nor — logical NOR operator injection",
		pattern: RegExp(`\\$nor${q}\\s*\\[`, "i")
	},
	{
		id: "nosql-exists-operator",
		description: "$exists — can enumerate fields to determine schema",
		pattern: RegExp(`\\$exists${q}`, "i")
	},
	{
		id: "nosql-in-operator",
		description: "$in — matches any value in a list; can enumerate values",
		pattern: RegExp(`\\$in${q}\\s*\\[`, "i")
	},
	{
		id: "nosql-expr-operator",
		description: "$expr — allows aggregation expressions in queries (MongoDB 3.6+)",
		pattern: RegExp(`\\$expr${q}`, "i")
	},
	{
		id: "nosql-function-operator",
		description: "$function — executes arbitrary JavaScript in MongoDB 4.4+",
		pattern: RegExp(`\\$function${q}`, "i")
	},
	{
		id: "nosql-accumulator-operator",
		description: "$accumulator — custom aggregation with arbitrary JS execution",
		pattern: RegExp(`\\$accumulator${q}`, "i")
	},
	{
		id: "nosql-proto-pollution",
		description: "__proto__ — prototype pollution via object key injection",
		pattern: /__proto__/
	},
	{
		id: "nosql-constructor-prototype",
		description: "constructor.prototype — alternative prototype pollution vector (dot notation or JSON key)",
		pattern: /constructor[\s"':.,{\[]*prototype/i
	},
	{
		id: "nosql-proto-bracket",
		description: "[\"__proto__\"] — bracket-notation prototype pollution",
		pattern: /\[["']__proto__["']\]/
	}
], ji = [
	{
		id: "log-crlf-injection",
		description: "CRLF injection: literal \\r or \\n embeds fake log lines",
		pattern: /[\r\n]/
	},
	{
		id: "log-url-encoded-crlf",
		description: "URL-encoded CRLF: %0d, %0a, %0D, %0A — decoded by some log parsers",
		pattern: /%0[dDaA]/
	},
	{
		id: "log-unicode-newline",
		description: "Unicode newline variants: U+2028 (line separator), U+2029 (paragraph separator)",
		pattern: /[\u2028\u2029]/
	},
	{
		id: "log-log4shell-jndi",
		description: "Log4Shell: ${jndi:...} triggers remote code execution in Apache Log4j",
		pattern: /\$\{jndi\s*:/i
	},
	{
		id: "log-log4shell-obfuscated",
		description: "Obfuscated Log4Shell: ${::-j}... lookup-bypass prefix used to evade WAF detection",
		pattern: /\$\{::-/
	},
	{
		id: "log-log4j-lookup",
		description: "Log4j lookup syntax: ${env:...}, ${sys:...}, ${ctx:...} — data exfiltration",
		pattern: /\$\{(?:env|sys|ctx|main|map|sd|web|docker|k8s|spring)\s*:/i
	},
	{
		id: "log-ssti-double-brace",
		description: "SSTI double-brace: {{expression}} — Jinja2, Twig, Handlebars, etc.",
		pattern: /\{\{[\s\S]{0,80}\}\}/
	},
	{
		id: "log-ssti-hash-brace",
		description: "SSTI hash-brace: #{expression} — Thymeleaf, Velocity, Ruby ERB",
		pattern: /#\{[\s\S]{0,80}\}/
	},
	{
		id: "log-ssti-dollar-brace",
		description: "SSTI/EL injection: ${expression with operators or method calls} — JSP EL, Freemarker, SpEL",
		pattern: /\$\{[^}]*(?:\.|\(|\*|\+|\bclass\b|\bruntime\b|\bprocess\b|\bexec\b)[^}]{0,80}\}/i
	},
	{
		id: "log-ssti-percent-tag",
		description: "SSTI ERB/ASP tag: <%= expression %> — Ruby ERB, ASP",
		pattern: /<%=[\s\S]{0,80}%>/
	},
	{
		id: "log-null-byte",
		description: "Null byte: \\x00 or %00 — can truncate log entries in C-backed loggers",
		pattern: /\x00|%00/
	},
	{
		id: "log-ansi-escape",
		description: "ANSI escape sequence: ESC[ — can manipulate terminal output when logs are tailed",
		pattern: /\x1b\[/
	}
];
function Mi(e, t) {
	let n = t.label ?? "CUSTOM";
	for (let r of t) if (r.pattern.test(e)) return {
		context: n,
		id: r.id,
		description: r.description,
		pattern: r.pattern
	};
	return null;
}
function Ni(e, t) {
	(function(e) {
		if (typeof e != "string") throw TypeError("is-unsafe: first argument must be a string, got " + typeof e);
	})(e), function(e) {
		if (!(e instanceof RegExp)) {
			if (!Array.isArray(e)) throw TypeError("is-unsafe: second argument must be a PatternList (e.g. HTML), an array of PatternLists (e.g. [HTML, XML]), or a RegExp. Got: " + typeof e);
			if (e.length === 0) throw TypeError("is-unsafe: context must not be an empty array");
			if (Array.isArray(e[0])) {
				for (let t of e) if (!Array.isArray(t) || t.length === 0) throw TypeError("is-unsafe: each context in the array must be a non-empty pattern array (PatternList)");
			}
		}
	}(t);
	let { lists: n, regex: r } = function(e) {
		return e instanceof RegExp ? {
			lists: null,
			regex: e
		} : Array.isArray(e[0]) ? {
			lists: e,
			regex: null
		} : {
			lists: [e],
			regex: null
		};
	}(t);
	if (r) return r.test(e);
	for (let t of n) if (Mi(e, t) !== null) return !0;
	return !1;
}
function Pi(e, t) {
	if (!e) return {};
	let n = t.attributesGroupName ? e[t.attributesGroupName] : e;
	if (!n) return {};
	let r = {};
	for (let e in n) e.startsWith(t.attributeNamePrefix) ? r[e.substring(t.attributeNamePrefix.length)] = n[e] : r[e] = n[e];
	return r;
}
function Fi(e) {
	if (!e || typeof e != "string") return;
	let t = e.indexOf(":");
	if (t !== -1 && t > 0) {
		let n = e.substring(0, t);
		if (n !== "xmlns") return n;
	}
}
Ti.label = "HTML", Ei.label = "XML", Di.label = "SVG", Ci.label = "SQL", wi.label = "SQL-STRICT", Oi.label = "SHELL", ki.label = "REDOS", Ai.label = "NOSQL", ji.label = "LOG", Object.freeze({
	HTML: Ti,
	XML: Ei,
	SVG: Di,
	SQL: Ci,
	"SQL-STRICT": wi,
	SHELL: Oi,
	REDOS: ki,
	NOSQL: Ai,
	LOG: ji
});
var Ii = class {
	constructor(e, t) {
		var n;
		this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.parseXml = Vi, this.parseTextData = Li, this.resolveNameSpace = Ri, this.buildAttributesMap = Bi, this.isItStopNode = Gi, this.replaceEntitiesValue = Ui, this.readStopNodeData = Yi, this.saveTextToParentTag = Wi, this.addChild = Hi, this.ignoreAttributesFn = typeof (n = this.options.ignoreAttributes) == "function" ? n : Array.isArray(n) ? (e) => {
			for (let t of n) if (typeof t == "string" && e === t || t instanceof RegExp && t.test(e)) return !0;
		} : () => !1, this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.doctypefound = !1;
		let r = { ...fi };
		this.options.entityDecoder ? this.entityDecoder = this.options.entityDecoder : (typeof this.options.htmlEntities == "object" ? r = this.options.htmlEntities : !0 === this.options.htmlEntities && (r = {
			...pi,
			...di
		}), this.entityDecoder = new Si({
			namedEntities: {
				...r,
				...t
			},
			numericAllowed: this.options.htmlEntities,
			limit: {
				maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
				maxExpandedLength: this.options.processEntities.maxExpandedLength,
				applyLimitsTo: this.options.processEntities.appliesTo
			},
			onInputEntity: (e, t) => Ni(t, [Ti, Ei]) ? mi.BLOCK : mi.ALLOW
		})), this.matcher = new ci(), this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = !1, this.stopNodeExpressionsSet = new ui();
		let i = this.options.stopNodes;
		if (i && i.length > 0) {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "string" ? this.stopNodeExpressionsSet.add(new li(t)) : t instanceof li && this.stopNodeExpressionsSet.add(t);
			}
			this.stopNodeExpressionsSet.seal();
		}
	}
};
function Li(e, t, n, r, i, a, o) {
	let s = this.options;
	if (e !== void 0 && (s.trimValues && !r && (e = e.trim()), e.length > 0)) {
		o || (e = this.replaceEntitiesValue(e, t, n));
		let r = s.jPath ? n.toString() : n, c = s.tagValueProcessor(t, e, r, i, a);
		return c == null ? e : typeof c != typeof e || c !== e ? c : s.trimValues || e.trim() === e ? Xi(e, s.parseTagValue, s.numberParseOptions) : e;
	}
}
function Ri(e) {
	if (this.options.removeNSPrefix) {
		let t = e.split(":"), n = e.charAt(0) === "/" ? "/" : "";
		if (t[0] === "xmlns") return "";
		t.length === 2 && (e = n + t[1]);
	}
	return e;
}
var zi = /* @__PURE__ */ RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
function Bi(e, t, n, r = !1) {
	let i = this.options;
	if (!0 === r || !0 !== i.ignoreAttributes && typeof e == "string") {
		let r = function(e, t) {
			let n = [], r = t.exec(e);
			for (; r;) {
				let i = [];
				i.startIndex = t.lastIndex - r[0].length;
				let a = r.length;
				for (let e = 0; e < a; e++) i.push(r[e]);
				n.push(i), r = t.exec(e);
			}
			return n;
		}(e, zi), a = r.length, o = {}, s = Array(a), c = !1, l = {};
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
				if (i.transformAttributeName && (n = i.transformAttributeName(n)), n = Qi(n, i), r[e][4] !== void 0) {
					let r = s[e], a = i.attributeValueProcessor(t, r, u);
					o[n] = a == null ? r : typeof a != typeof r || a !== r ? a : Xi(r, i.parseAttributeValue, i.numberParseOptions), d = !0;
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
var Vi = function(e) {
	e = e.replace(/\r\n?/g, "\n");
	let t = new Mr("!xml"), n = t, r = "";
	this.matcher.reset(), this.entityDecoder.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.doctypefound = !1;
	let i = this.options, a = new Gr(i.processEntities), o = e.length;
	for (let s = 0; s < o; s++) if (e[s] === "<") {
		let c = e.charCodeAt(s + 1);
		if (c === 47) {
			let a = Ki(e, ">", s, "Closing Tag is not closed."), o = e.substring(s + 2, a).trim();
			if (i.removeNSPrefix) {
				let e = o.indexOf(":");
				e !== -1 && (o = o.substr(e + 1));
			}
			o = Zi(i.transformTagName, o, "", i).tagName, n && (r = this.saveTextToParentTag(r, n, this.readonlyMatcher));
			let c = this.matcher.getCurrentTag();
			if (o && i.unpairedTagsSet.has(o)) throw Error(`Unpaired tag can not be used as closing tag: </${o}>`);
			c && i.unpairedTagsSet.has(c) && (this.matcher.pop(), this.tagsNodeStack.pop()), this.matcher.pop(), this.isCurrentNodeStopNode = !1, n = this.tagsNodeStack.pop() || t, i.captureMetaData && n && n.addEndIndex(a + 1), r = "", s = a;
		} else if (c === 63) {
			let t = Ji(e, s, !1, "?>");
			if (!t) throw Error("Pi Tag is not closed.");
			r = this.saveTextToParentTag(r, n, this.readonlyMatcher);
			let o = this.buildAttributesMap(t.tagExp, this.matcher, t.tagName, !0);
			if (o) {
				let e = o[this.options.attributeNamePrefix + "version"];
				this.entityDecoder.setXmlVersion(Number(e) || 1), a.setXmlVersion(Number(e) || 1);
			}
			if (!(i.ignoreDeclaration && t.tagName === "?xml" || i.ignorePiTags)) {
				let e = new Mr(t.tagName);
				e.add(i.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && !0 !== i.ignoreAttributes && (e[":@"] = o), this.addChild(n, e, this.readonlyMatcher, s), i.captureMetaData && n.addEndIndex(t.closeIndex + 2);
			}
			s = t.closeIndex + 1;
		} else if (c === 33 && e.charCodeAt(s + 2) === 45 && e.charCodeAt(s + 3) === 45) {
			let t = Ki(e, "-->", s + 4, "Comment is not closed.");
			if (i.commentPropName) {
				let a = e.substring(s + 4, t - 2);
				r = this.saveTextToParentTag(r, n, this.readonlyMatcher), n.add(i.commentPropName, [{ [i.textNodeName]: a }]);
			}
			s = t;
		} else if (c === 33 && e.charCodeAt(s + 2) === 68) {
			if (this.doctypefound) throw Error("Multiple DOCTYPE declarations found.");
			this.doctypefound = !0;
			let t = a.readDocType(e, s);
			this.entityDecoder.addInputEntities(t.entities), s = t.i;
		} else if (c === 33 && e.charCodeAt(s + 2) === 91) {
			let t = Ki(e, "]]>", s, "CDATA is not closed.") - 2, a = e.substring(s + 9, t);
			r = this.saveTextToParentTag(r, n, this.readonlyMatcher);
			let o = this.parseTextData(a, n.tagname, this.readonlyMatcher, !0, !1, !0, !0);
			o ??= "", i.cdataPropName ? n.add(i.cdataPropName, [{ [i.textNodeName]: a }]) : n.add(i.textNodeName, o), s = t + 2;
		} else {
			let a = Ji(e, s, i.removeNSPrefix);
			if (!a) {
				let t = e.substring(Math.max(0, s - 50), Math.min(o, s + 50));
				throw Error(`readTagExp returned undefined at position ${s}. Context: "${t}"`);
			}
			let c = a.tagName, l = a.rawTagName, u = a.tagExp, d = a.attrExpPresent, f = a.closeIndex;
			if ({tagName: c, tagExp: u} = Zi(i.transformTagName, c, u, i), i.strictReservedNames && (c === i.commentPropName || c === i.cdataPropName || c === i.textNodeName || c === i.attributesGroupName)) throw Error(`Invalid tag name: ${c}`);
			n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, this.readonlyMatcher, !1));
			let p = n;
			p && i.unpairedTagsSet.has(p.tagname) && (n = this.tagsNodeStack.pop(), this.matcher.pop());
			let m = !1;
			u.length > 0 && u.lastIndexOf("/") === u.length - 1 && (m = !0, c[c.length - 1] === "/" ? (c = c.substr(0, c.length - 1), u = c) : u = u.substr(0, u.length - 1), d = c !== u);
			let h, g = null;
			h = Fi(l), c !== t.tagname && this.matcher.push(c, {}, h), c !== u && d && (g = this.buildAttributesMap(u, this.matcher, c), g && Pi(g, i)), c !== t.tagname && (this.isCurrentNodeStopNode = this.isItStopNode());
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
				let r = new Mr(c);
				g && (r[":@"] = g), r.add(i.textNodeName, t), this.matcher.pop(), this.isCurrentNodeStopNode = !1, this.addChild(n, r, this.readonlyMatcher, _), i.captureMetaData && n.addEndIndex(s + 1);
			} else {
				if (m) {
					({tagName: c, tagExp: u} = Zi(i.transformTagName, c, u, i));
					let e = new Mr(c);
					g && (e[":@"] = g), this.addChild(n, e, this.readonlyMatcher, _), i.captureMetaData && n.addEndIndex(f + 1), this.matcher.pop(), this.isCurrentNodeStopNode = !1;
				} else {
					if (i.unpairedTagsSet.has(c)) {
						let e = new Mr(c);
						g && (e[":@"] = g), this.addChild(n, e, this.readonlyMatcher, _), i.captureMetaData && n.addEndIndex(a.closeIndex + 1), this.matcher.pop(), this.isCurrentNodeStopNode = !1, s = a.closeIndex;
						continue;
					}
					{
						let e = new Mr(c);
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
function Hi(e, t, n, r) {
	this.options.captureMetaData || (r = void 0);
	let i = this.options.jPath ? n.toString() : n, a = this.options.updateTag(t.tagname, i, t[":@"]);
	!1 === a || (typeof a == "string" && (t.tagname = a), e.addChild(t, r));
}
function Ui(e, t, n) {
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
function Wi(e, t, n, r) {
	return e &&= (r === void 0 && (r = t.child.length === 0), (e = this.parseTextData(e, t.tagname, n, !1, !!t[":@"] && Object.keys(t[":@"]).length !== 0, r)) !== void 0 && e !== "" && t.add(this.options.textNodeName, e), ""), e;
}
function Gi() {
	return this.stopNodeExpressionsSet.size !== 0 && this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
function Ki(e, t, n, r) {
	let i = e.indexOf(t, n);
	if (i === -1) throw Error(r);
	return i + t.length - 1;
}
function qi(e, t, n, r) {
	let i = e.indexOf(t, n);
	if (i === -1) throw Error(r);
	return i;
}
function Ji(e, t, n, r = ">") {
	let i = function(e, t, n = ">") {
		let r = 0, i = e.length, a = n.charCodeAt(0), o = n.length > 1 ? n.charCodeAt(1) : -1, s = "", c = t;
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
	}(e, t + 1, r);
	if (!i) return;
	let a = i.data, o = i.index, s = a.search(/\s/), c = a, l = !0;
	s !== -1 && (c = a.substring(0, s), a = a.substring(s + 1).trimStart());
	let u = c;
	if (n) {
		let e = c.indexOf(":");
		e !== -1 && (c = c.substr(e + 1), l = c !== i.data.substr(e + 1));
	}
	return {
		tagName: c,
		tagExp: a,
		closeIndex: o,
		attrExpPresent: l,
		rawTagName: u
	};
}
function Yi(e, t, n) {
	let r = n, i = 1, a = e.length;
	for (; n < a; n++) if (e[n] === "<") {
		let a = e.charCodeAt(n + 1);
		if (a === 47) {
			let a = qi(e, ">", n, `${t} is not closed`);
			if (e.substring(n + 2, a).trim() === t && (i--, i === 0)) return {
				tagContent: e.substring(r, n),
				i: a
			};
			n = a;
		} else if (a === 63) n = Ki(e, "?>", n + 1, "StopNode is not closed.");
		else if (a === 33 && e.charCodeAt(n + 2) === 45 && e.charCodeAt(n + 3) === 45) n = Ki(e, "-->", n + 3, "StopNode is not closed.");
		else if (a === 33 && e.charCodeAt(n + 2) === 91) n = Ki(e, "]]>", n, "StopNode is not closed.") - 2;
		else {
			let r = Ji(e, n, !1);
			r && ((r && r.tagName) === t && r.tagExp[r.tagExp.length - 1] !== "/" && i++, n = r.closeIndex);
		}
	}
}
function Xi(e, t, n) {
	if (t && typeof e == "string") {
		let t = e.trim();
		return t === "true" || t !== "false" && ii(e, n);
	}
	return e === void 0 ? "" : e;
}
function Zi(e, t, n, r) {
	if (e) {
		let r = e(t);
		n === t && (n = r), t = r;
	}
	return {
		tagName: t = Qi(t, r),
		tagExp: n
	};
}
function Qi(e, t) {
	if (Tr.includes(e)) throw Error(`[SECURITY] Invalid name: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
	return wr.includes(e) ? t.onDangerousProperty(e) : e;
}
var $i = Mr.getMetaDataSymbol();
function ea(e, t) {
	if (!e || typeof e != "object") return {};
	if (!t) return e;
	let n = {};
	for (let r in e) r.startsWith(t) ? n[r.substring(t.length)] = e[r] : n[r] = e[r];
	return n;
}
function ta(e, t, n, r) {
	return na(e, t, n, r);
}
function na(e, t, n, r) {
	let i, a = {};
	for (let o = 0; o < e.length; o++) {
		let s = e[o], c = ra(s);
		if (c !== void 0 && c !== t.textNodeName) {
			let e = ea(s[":@"] || {}, t.attributeNamePrefix);
			n.push(c, e);
		}
		if (c === t.textNodeName) i === void 0 ? i = s[c] : i += "" + s[c];
		else {
			if (c === void 0) continue;
			if (s[c]) {
				let e = na(s[c], t, n, r), i = aa(e, t);
				if (Object.keys(e).length === 0 && t.alwaysCreateTextNode && (e[t.textNodeName] = ""), s[":@"] ? ia(e, s[":@"], r, t) : Object.keys(e).length !== 1 || e[t.textNodeName] === void 0 || t.alwaysCreateTextNode ? Object.keys(e).length === 0 && (t.alwaysCreateTextNode ? e[t.textNodeName] = "" : e = "") : e = e[t.textNodeName], s[$i] !== void 0 && typeof e == "object" && e && (e[$i] = s[$i]), a[c] !== void 0 && Object.prototype.hasOwnProperty.call(a, c)) Array.isArray(a[c]) || (a[c] = [a[c]]), a[c].push(e);
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
function ra(e) {
	let t = Object.keys(e);
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (n !== ":@") return n;
	}
}
function ia(e, t, n, r) {
	if (t) {
		let i = Object.keys(t), a = i.length;
		for (let o = 0; o < a; o++) {
			let a = i[o], s = a.startsWith(r.attributeNamePrefix) ? a.substring(r.attributeNamePrefix.length) : a, c = r.jPath ? n.toString() + "." + s : n;
			e[a] = r.isArray(a, c, !0, !0) ? [t[a]] : t[a];
		}
	}
}
function aa(e, t) {
	let { textNodeName: n } = t, r = Object.keys(e).length;
	return r === 0 || !(r !== 1 || !e[n] && typeof e[n] != "boolean" && e[n] !== 0);
}
var oa = {
	allowBooleanAttributes: !1,
	unpairedTags: []
};
function sa(e) {
	return e === " " || e === "	" || e === "\n" || e === "\r";
}
function ca(e, t) {
	let n = t;
	for (; t < e.length; t++) if (e[t] == "?" || e[t] == " ") {
		let r = e.substr(n, t - n);
		if (t > 5 && r === "xml") return J("InvalidXml", "XML declaration allowed only at the start of the document.", Y(e, t));
		if (e[t] == "?" && e[t + 1] == ">") {
			t++;
			break;
		}
	}
	return t;
}
function la(e, t) {
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
function ua(e, t) {
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
function da(e, t) {
	let n = function(e) {
		let t = [], n = e.length, r = 0;
		for (; r < n;) {
			let i = r;
			for (; r < n && sa(e[r]);) r++;
			if (r >= n) break;
			if (e[r] === "=") {
				r = i + 1;
				continue;
			}
			let a = e.slice(i, r), o = r;
			for (; r < n && !sa(e[r]) && e[r] !== "=";) r++;
			let s = e.slice(o, r), c, l, u, d = r;
			for (; d < n && sa(e[d]);) d++;
			d < n && e[d] === "=" && (c = e.slice(r, d + 1), r = d + 1);
			let f = r;
			for (; f < n && sa(e[f]);) f++;
			if (f < n && (e[f] === "\"" || e[f] === "'")) {
				let t = f + 1, n = e.indexOf(e[f], t);
				n !== -1 && (l = e[f], u = e.slice(t, n), r = n + 1);
			}
			let p = { startIndex: i };
			p[1] = a, p[2] = s, p[3] = c, p[4] = l !== void 0 || void 0, p[5] = l, p[6] = u, t.push(p);
		}
		return t;
	}(e), r = {};
	for (let e = 0; e < n.length; e++) {
		if (n[e][1].length === 0) return J("InvalidAttr", "Attribute '" + n[e][2] + "' has no space in starting.", ma(n[e]));
		if (n[e][3] !== void 0 && n[e][4] === void 0) return J("InvalidAttr", "Attribute '" + n[e][2] + "' is without value.", ma(n[e]));
		if (n[e][3] === void 0 && !t.allowBooleanAttributes) return J("InvalidAttr", "boolean attribute '" + n[e][2] + "' is not allowed.", ma(n[e]));
		let i = n[e][2];
		if (!pa(i)) return J("InvalidAttr", "Attribute '" + i + "' is an invalid name.", ma(n[e]));
		if (Object.prototype.hasOwnProperty.call(r, i)) return J("InvalidAttr", "Attribute '" + i + "' is repeated.", ma(n[e]));
		r[i] = 1;
	}
	return !0;
}
function fa(e, t) {
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
function J(e, t, n) {
	return { err: {
		code: e,
		msg: t,
		line: n.line || n,
		col: n.col
	} };
}
function pa(e) {
	return Cr(e);
}
function Y(e, t) {
	let n = e.substring(0, t).split(/\r?\n/);
	return {
		line: n.length,
		col: n[n.length - 1].length + 1
	};
}
function ma(e) {
	return e.startIndex + e[1].length;
}
var ha = class {
	constructor(e) {
		this.externalEntities = {}, this.options = Ar(e);
	}
	parse(e, t) {
		if (typeof e != "string" && e.toString) e = e.toString();
		else if (typeof e != "string") throw Error("XML data is accepted in String or Bytes[] form.");
		if (t) {
			!0 === t && (t = {});
			let n = function(e, t) {
				t = Object.assign({}, oa, t);
				let n = [], r = !1, i = !1;
				e[0] === "﻿" && (e = e.substr(1));
				for (let a = 0; a < e.length; a++) if (e[a] === "<" && e[a + 1] === "?") {
					if (a += 2, a = ca(e, a), a.err) return a;
				} else {
					if (e[a] !== "<") {
						if (sa(e[a])) continue;
						return J("InvalidChar", "char '" + e[a] + "' is not expected.", Y(e, a));
					}
					{
						let o = a;
						if (a++, e[a] === "!") {
							a = la(e, a);
							continue;
						}
						{
							let s = !1;
							e[a] === "/" && (s = !0, a++);
							let c = "";
							for (; a < e.length && e[a] !== ">" && e[a] !== " " && e[a] !== "	" && e[a] !== "\n" && e[a] !== "\r"; a++) c += e[a];
							if (c = c.trim(), c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1), a--), !Cr(c)) {
								let t;
								return t = c.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + c + "' is an invalid name.", J("InvalidTag", t, Y(e, a));
							}
							let l = ua(e, a);
							if (!1 === l) return J("InvalidAttr", "Attributes for '" + c + "' have open quote.", Y(e, a));
							let u = l.value;
							if (a = l.index, u[u.length - 1] === "/") {
								let n = a - u.length;
								u = u.substring(0, u.length - 1);
								let i = da(u, t);
								if (!0 !== i) return J(i.err.code, i.err.msg, Y(e, n + i.err.line));
								r = !0;
							} else if (s) {
								if (!l.tagClosed) return J("InvalidTag", "Closing tag '" + c + "' doesn't have proper closing.", Y(e, a));
								if (u.trim().length > 0) return J("InvalidTag", "Closing tag '" + c + "' can't have attributes or invalid starting.", Y(e, o));
								if (n.length === 0) return J("InvalidTag", "Closing tag '" + c + "' has not been opened.", Y(e, o));
								{
									let t = n.pop();
									if (c !== t.tagName) {
										let n = Y(e, t.tagStartPos);
										return J("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + n.line + ", col " + n.col + ") instead of closing tag '" + c + "'.", Y(e, o));
									}
									n.length == 0 && (i = !0);
								}
							} else {
								let s = da(u, t);
								if (!0 !== s) return J(s.err.code, s.err.msg, Y(e, a - u.length + s.err.line));
								if (!0 === i) return J("InvalidXml", "Multiple possible root nodes found.", Y(e, a));
								t.unpairedTags.indexOf(c) !== -1 || n.push({
									tagName: c,
									tagStartPos: o
								}), r = !0;
							}
							for (a++; a < e.length; a++) if (e[a] === "<") {
								if (e[a + 1] === "!") {
									a++, a = la(e, a);
									continue;
								}
								if (e[a + 1] !== "?") break;
								if (a = ca(e, ++a), a.err) return a;
							} else if (e[a] === "&") {
								let t = fa(e, a);
								if (t == -1) return J("InvalidChar", "char '&' is not expected.", Y(e, a));
								a = t;
							} else if (!0 === i && !sa(e[a])) return J("InvalidXml", "Extra text at the end", Y(e, a));
							e[a] === "<" && a--;
						}
					}
				}
				return r ? n.length == 1 ? J("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", Y(e, n[0].tagStartPos)) : !(n.length > 0) || J("InvalidXml", "Invalid '" + JSON.stringify(n.map(((e) => e.tagName)), null, 4).replace(/\r?\n/g, "") + "' found.", {
					line: 1,
					col: 1
				}) : J("InvalidXml", "Start tag expected.", 1);
			}(e, t);
			if (!0 !== n) throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`);
		}
		let n = new Ii(this.options, this.externalEntities), r = n.parseXml(e);
		return this.options.preserveOrder || r === void 0 ? r : ta(r, this.options, n.matcher, n.readonlyMatcher);
	}
	addEntity(e, t) {
		if (t.indexOf("&") !== -1) throw Error("Entity value can't have '&'");
		if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
		if (t === "&") throw Error("An entity with value '&' is not permitted");
		this.externalEntities[e] = t;
	}
	static getMetaDataSymbol() {
		return Mr.getMetaDataSymbol();
	}
}, ga = N(829), X = N.n(ga), _a = function(e) {
	return e.Array = "array", e.Object = "object", e.Original = "original", e;
}(_a || {});
function va(e) {
	let t = e.indexOf(":");
	return t === -1 ? e : e.slice(t + 1);
}
function ya(e) {
	return typeof e == "string" ? e : e.toArray().map(va).join(".");
}
function ba(e, t) {
	if (!e.endsWith("propstat.prop.displayname")) return t;
}
function xa(e, t, n = _a.Original) {
	let r = X().get(e, t);
	return n === "array" && !1 === Array.isArray(r) ? [r] : n === "object" && Array.isArray(r) ? r[0] : r;
}
var Sa = /* @__PURE__ */ new Set([
	"multistatus",
	"response",
	"propstat",
	"prop",
	"status",
	"href",
	"responsedescription"
]);
function Ca(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function wa(e, t) {
	return t ??= {
		attributeNamePrefix: "@",
		attributeParsers: [],
		tagParsers: [ba]
	}, new Promise(((n) => {
		let r = function({ attributeNamePrefix: e, attributeParsers: t, clarkNotationProps: n, entityDecoder: r, tagParsers: i }) {
			let a = {
				allowBooleanAttributes: !0,
				attributeNamePrefix: e,
				textNodeName: "text",
				ignoreAttributes: !1,
				removeNSPrefix: !n,
				jPath: !1,
				numberParseOptions: {
					hex: !0,
					leadingZeros: !1
				},
				attributeValueProcessor(e, n, r) {
					if (t.length === 0 || (i = e) === "xmlns" || i.startsWith("xmlns:")) return n;
					var i;
					let a = ya(r);
					for (let e of t) try {
						let t = e(a, n);
						if (t !== n) return t;
					} catch {}
					return n;
				},
				tagValueProcessor(e, t, n) {
					if (i.length === 0) return t;
					let r = ya(n);
					for (let e of i) try {
						let n = e(r, t);
						if (n !== t) return n;
					} catch {}
					return t;
				}
			};
			return r && (a.entityDecoder = new Si({ limit: {
				maxTotalExpansions: r.limit?.maxTotalExpansions ?? 0,
				maxExpandedLength: r.limit?.maxExpandedLength ?? 0
			} })), new ha(a);
		}(t).parse(e);
		t.clarkNotationProps && function(e, t) {
			if (!Ca(e) && !Array.isArray(e)) return;
			let n = `${t}xmlns`, r = `${n}:`, i = r.length, a = "text";
			function o(e) {
				return e === n || e.length > i && e.startsWith(r);
			}
			function s(e, t) {
				let a = null;
				for (let o of Object.keys(e)) o === n ? (a ||= new Map(t), a.set("", e[o])) : o.length > i && o.startsWith(r) && (a ||= new Map(t), a.set(o.slice(i), e[o]));
				return a ?? t;
			}
			function c(e) {
				if (Array.isArray(e)) return e.map(c);
				if (!Ca(e)) return e;
				let t = {};
				for (let n of Object.keys(e)) o(n) || (t[n] = c(e[n]));
				let n = Object.keys(t);
				return n.length === 0 ? "" : n.length === 1 && n[0] === a ? t[a] : t;
			}
			function l(e, t, n, r) {
				let i = e.indexOf(":"), a = i === -1 ? "" : e.slice(0, i), o = i === -1 ? e : e.slice(i + 1), l = (e) => (Ca(e) ? s(e, n) : n).get(a) ?? "", u = (e, t) => {
					let n = e ? `{${e}}${o}` : o, i = r[n];
					i === void 0 ? r[n] = t : Array.isArray(i) ? i.push(t) : r[n] = [i, t];
				};
				if (Array.isArray(t)) for (let e of t) u(l(e), c(e));
				else u(l(t), c(t));
			}
			function u(e, t) {
				if (!Ca(e)) return e;
				let n = function(e, t) {
					let n = s(e, t), r = {};
					for (let t of Object.keys(e)) o(t) || l(t, e[t], n, r);
					return r;
				}(e, t);
				return Object.keys(n).length === 0 ? "" : n;
			}
			(function e(t, n) {
				if (Array.isArray(t)) {
					for (let r = 0; r < t.length; r += 1) t[r] = e(t[r], n);
					return t;
				}
				if (!Ca(t)) return t;
				let r = s(t, n);
				for (let n of Object.keys(t)) {
					if (o(n)) {
						delete t[n];
						continue;
					}
					let i = n.indexOf(":"), a = i === -1 ? n : n.slice(i + 1), s = t[n], c = n;
					Sa.has(a) && a !== n && (delete t[n], t[a] = s, c = a), t[c] = a === "prop" ? Array.isArray(s) ? s.map(((e) => u(e, r))) : u(s, r) : e(s, r);
				}
				return Object.keys(t).length === 0 ? "" : t;
			})(e, /* @__PURE__ */ new Map());
		}(r, t.attributeNamePrefix ?? "@"), n(function(e) {
			let { multistatus: t } = e;
			if (t === "") return { multistatus: { response: [] } };
			if (!t) throw Error("Invalid response: No root multistatus found");
			let n = { multistatus: Array.isArray(t) ? t[0] : t };
			return X().set(n, "multistatus.response", xa(n, "multistatus.response", _a.Array)), X().set(n, "multistatus.response", X().get(n, "multistatus.response").map(((e) => function(e) {
				let t = Object.assign({}, e);
				return t.status ? X().set(t, "status", xa(t, "status", _a.Object)) : (X().set(t, "propstat", xa(t, "propstat", _a.Object)), X().set(t, "propstat.prop", xa(t, "propstat.prop", _a.Object))), t;
			}(e)))), n;
		}(r));
	}));
}
function Ta(e, t, n = !1) {
	let { getlastmodified: r = null, getcontentlength: i = "0", resourcetype: a = null, getcontenttype: o = null, getetag: s = null } = e, c = a && typeof a == "object" && a.collection !== void 0 ? "directory" : "file", l = {
		filename: t,
		basename: Bt().basename(t),
		lastmod: r,
		size: parseInt(i, 10),
		type: c,
		etag: typeof s == "string" ? s.replace(/"/g, "") : null
	};
	return c === "file" && (l.mime = o && typeof o == "string" ? o.split(";")[0] : ""), n && (e.displayname !== void 0 && (e.displayname = String(e.displayname)), l.props = e), l;
}
function Ea(e, t, n = !1) {
	let r = null;
	try {
		e.multistatus.response[0].propstat && (r = e.multistatus.response[0]);
	} catch {}
	if (!r) throw Error("Failed getting item stat: bad response");
	let { propstat: { prop: i, status: a } } = r, [o, s, c] = a.split(" ", 3), l = parseInt(s, 10);
	if (l >= 400) {
		let e = /* @__PURE__ */ Error(`Invalid response: ${l} ${c}`);
		throw e.status = l, e;
	}
	return Ta(i, Wt(t), n);
}
function Da(e) {
	switch (String(e)) {
		case "-3": return "unlimited";
		case "-2":
		case "-1": return "unknown";
		default: return parseInt(String(e), 10);
	}
}
function Oa(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var ka = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n = {}) {
	let { details: r = !1 } = n;
	return Oa(R(z({
		url: I(e.remoteURL, F(t)),
		method: "PROPFIND",
		headers: {
			Accept: "text/plain,application/xml",
			Depth: "0"
		}
	}, e, n), e), (function(n) {
		return W(e, n), Oa(n.text(), (function(i) {
			return Oa(wa(i, e.parsing), (function(e) {
				return vr(n, Ea(e, t, r), r);
			}));
		}));
	}));
}));
function Aa(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var ja = Ma((function(e, t, n = {}) {
	let r = function(e) {
		if (!e || e === "/") return [];
		let t = e, n = [];
		do
			n.push(t), t = Bt().dirname(t);
		while (t && t !== "/");
		return n;
	}(Wt(t));
	r.sort(((e, t) => e.length > t.length ? 1 : t.length > e.length ? -1 : 0));
	let i = !1;
	return function(e, t, n) {
		if (typeof e[Fa] == "function") {
			var r, i, a, o = e[Fa]();
			function n(e) {
				try {
					for (; !(r = o.next()).done;) if ((e = t(r.value)) && e.then) {
						if (!La(e)) return void e.then(n, a ||= Z.bind(null, i = new Ia(), 2));
						e = e.v;
					}
					i ? Z(i, 1, e) : i = e;
				} catch (e) {
					Z(i ||= new Ia(), 2, e);
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
						if (!La(s)) return void s.then(o, i ||= Z.bind(null, r = new Ia(), 2));
						s = s.v;
					}
					r ? Z(r, 1, s) : r = s;
				} catch (e) {
					Z(r ||= new Ia(), 2, e);
				}
			}(), r;
		}(c, (function(e) {
			return t(c[e]);
		}), n);
	}(r, (function(r) {
		return a = function() {
			return function(n, i) {
				try {
					var a = Aa(ka(e, r), (function(e) {
						if (e.type !== "directory") throw Error(`Path includes a file: ${t}`);
					}));
				} catch (e) {
					return i(e);
				}
				return a && a.then ? a.then(void 0, i) : a;
			}(0, (function(t) {
				let a = t;
				return function() {
					if (a.status === 404) return i = !0, Pa(Ra(e, r, {
						...n,
						recursive: !1
					}));
					throw t;
				}();
			}));
		}, (o = function() {
			if (i) return Pa(Ra(e, r, {
				...n,
				recursive: !1
			}));
		}()) && o.then ? o.then(a) : a();
		var a, o;
	}), (function() {
		return !1;
	}));
}));
function Ma(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
function Na() {}
function Pa(e, t) {
	if (!t) return e && e.then ? e.then(Na) : Promise.resolve();
}
var Fa = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Z(e, t, n) {
	if (!e.s) {
		if (n instanceof Ia) {
			if (!n.s) return void (n.o = Z.bind(null, e, t));
			1 & t && (t = n.s), n = n.v;
		}
		if (n && n.then) return void n.then(Z.bind(null, e, t), Z.bind(null, e, 2));
		e.s = t, e.v = n;
		let r = e.o;
		r && r(e);
	}
}
var Ia = function() {
	function e() {}
	return e.prototype.then = function(t, n) {
		let r = new e(), i = this.s;
		if (i) {
			let e = 1 & i ? t : n;
			if (e) {
				try {
					Z(r, 1, e(this.v));
				} catch (e) {
					Z(r, 2, e);
				}
				return r;
			}
			return this;
		}
		return this.o = function(e) {
			try {
				let i = e.v;
				1 & e.s ? Z(r, 1, t ? t(i) : i) : n ? Z(r, 1, n(i)) : Z(r, 2, i);
			} catch (e) {
				Z(r, 2, e);
			}
		}, r;
	}, e;
}();
function La(e) {
	return e instanceof Ia && 1 & e.s;
}
var Ra = Ma((function(e, t, n = {}) {
	if (!0 === n.recursive) return ja(e, t, n);
	let r = z({
		url: I(e.remoteURL, (i = F(t), i.endsWith("/") ? i : i + "/")),
		method: "MKCOL"
	}, e, n);
	var i;
	return Aa(R(r, e), (function(t) {
		W(e, t);
	}));
})), za = N(388), Ba = N.n(za), Va = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n = {}) {
	let r = {};
	if (typeof n.range == "object" && typeof n.range.start == "number") {
		let e = `bytes=${n.range.start}-`;
		typeof n.range.end == "number" && (e = `${e}${n.range.end}`), r.Range = e;
	}
	let i = z({
		url: I(e.remoteURL, F(t)),
		method: "GET",
		headers: r
	}, e, n);
	return o = function(t) {
		if (W(e, t), r.Range && t.status !== 206) {
			let e = /* @__PURE__ */ Error(`Invalid response code for partial request: ${t.status}`);
			throw e.status = t.status, e;
		}
		return n.callback && setTimeout((() => {
			n.callback(t);
		}), 0), t.body;
	}, (a = R(i, e)) && a.then || (a = Promise.resolve(a)), o ? a.then(o) : a;
	var a, o;
})), Ha = () => {}, Ua = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n) {
	n.url ||= I(e.remoteURL, F(t));
	let r = z(n, e, {});
	return a = function(t) {
		return W(e, t), t;
	}, (i = R(r, e)) && i.then || (i = Promise.resolve(i)), a ? i.then(a) : i;
	var i, a;
})), Wa = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n = {}) {
	let r = z({
		url: I(e.remoteURL, F(t)),
		method: "DELETE"
	}, e, n);
	return a = function(t) {
		W(e, t);
	}, (i = R(r, e)) && i.then || (i = Promise.resolve(i)), a ? i.then(a) : i;
	var i, a;
})), Ga = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n = {}) {
	return function(r, i) {
		try {
			var a = (o = ka(e, t, n), s = function() {
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
}((function(e, t, n = {}) {
	return Ka(R(z({
		url: I(e.remoteURL, F(t), "/"),
		method: "PROPFIND",
		headers: {
			Accept: "text/plain,application/xml",
			Depth: n.deep ? "infinity" : "1"
		}
	}, e, n), e), (function(r) {
		return W(e, r), Ka(r.text(), (function(i) {
			if (!i) throw Error("Failed parsing directory contents: Empty response");
			return Ka(wa(i, e.parsing), (function(i) {
				let a = Ut(t), o = function(e, t, n, r = !1, i = !1) {
					let a = Bt().join(t, "/"), { multistatus: { response: o } } = e, s = o.map(((e) => {
						let t = function(e) {
							try {
								return e.replace(/^https?:\/\/[^\/]+/, "");
							} catch (e) {
								throw new P(e, "Failed normalising HREF");
							}
						}(e.href), { propstat: { prop: n } } = e;
						return Ta(n, a === "/" ? decodeURIComponent(Wt(t)) : Wt(Bt().relative(decodeURIComponent(a), decodeURIComponent(t))), r);
					}));
					return i ? s : s.filter(((e) => e.basename && (e.type === "file" || e.filename !== n.replace(/\/$/, ""))));
				}(i, Ut(e.remoteBasePath || e.remotePath), a, n.details, n.includeSelf);
				return n.glob && (o = function(e, t) {
					return e.filter(((e) => V(e.filename, t, { matchBase: !0 })));
				}(o, n.glob)), vr(r, o, n.details);
			}));
		}));
	}));
}));
function Ja(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
var Ya = Ja((function(e, t, n = {}) {
	return Xa(R(z({
		url: I(e.remoteURL, F(t)),
		method: "GET",
		headers: { Accept: "text/plain" },
		transformResponse: [$a]
	}, e, n), e), (function(t) {
		return W(e, t), Xa(t.text(), (function(e) {
			return vr(t, e, n.details);
		}));
	}));
}));
function Xa(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Za = Ja((function(e, t, n = {}) {
	return Xa(R(z({
		url: I(e.remoteURL, F(t)),
		method: "GET"
	}, e, n), e), (function(t) {
		let r;
		return W(e, t), function(e, t) {
			var n = e();
			return n && n.then ? n.then(t) : t();
		}((function() {
			return Xa(t.arrayBuffer(), (function(e) {
				r = e;
			}));
		}), (function() {
			return vr(t, r, n.details);
		}));
	}));
})), Qa = Ja((function(e, t, n = {}) {
	let { format: r = "binary" } = n;
	if (r !== "binary" && r !== "text") throw new P({ info: { code: en.InvalidOutputFormat } }, `Invalid output format: ${r}`);
	return r === "text" ? Ya(e, t, n) : Za(e, t, n);
})), $a = (e) => e;
function Q(e) {
	return typeof e == "number" && Object.is(e, -0) ? "-0" : String(e);
}
function eo(e) {
	return Q(e).replace(/--/g, "- -").replace(/--/g, "- -").replace(/-$/, "- ");
}
function to(e) {
	return Q(e).replace(/\]\]>/g, "]]]]><![CDATA[>");
}
function no(e) {
	return Q(e).replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function ro(e, t, n, r, i) {
	return n.sanitizeName ? i(e) ? e : n.sanitizeName(e, {
		isAttribute: t,
		matcher: r.readOnly()
	}) : e;
}
function io(e, t) {
	let n = "";
	t.format && (n = "\n");
	let r = [];
	if (t.stopNodes && Array.isArray(t.stopNodes)) for (let e = 0; e < t.stopNodes.length; e++) {
		let n = t.stopNodes[e];
		typeof n == "string" ? r.push(new li(n)) : n instanceof li && r.push(n);
	}
	let i = Wr("qName", { xmlVersion: function(e, t) {
		if (!Array.isArray(e) || e.length === 0) return "1.0";
		let n = e[0];
		if (lo(n) === "?xml") {
			let e = n[":@"];
			if (e) {
				let n = t.attributeNamePrefix + "version";
				if (e[n]) return e[n];
			}
		}
		return "1.0";
	}(e, t) });
	return ao(e, t, n, new ci(), r, i);
}
function ao(e, t, n, r, i, a) {
	let o = "", s = !1;
	if (t.maxNestedTags && r.getDepth() > t.maxNestedTags) throw Error("Maximum nested tags exceeded");
	if (!Array.isArray(e)) {
		if (e != null) {
			let n = Q(e);
			return n = po(n, t), n;
		}
		return "";
	}
	for (let c = 0; c < e.length; c++) {
		let l = e[c], u = lo(l);
		if (u === void 0) continue;
		let d = u === t.textNodeName || u === t.cdataPropName || u === t.commentPropName || u[0] === "?" ? u : ro(u, !1, t, r, a), f = oo(l[":@"], t);
		r.push(d, f);
		let p = fo(r, i);
		if (d === t.textNodeName) {
			let e = l[u];
			p || (e = t.tagValueProcessor(d, e), e = po(e, t)), e = Q(e), s && (o += n), o += e, s = !1, r.pop();
			continue;
		}
		if (d === t.cdataPropName) {
			s && (o += n), o += `<![CDATA[${to(l[u][0][t.textNodeName])}]]>`, s = !1, r.pop();
			continue;
		}
		if (d === t.commentPropName) {
			o += n + `\x3c!--${eo(l[u][0][t.textNodeName])}--\x3e`, s = !0, r.pop();
			continue;
		}
		if (d[0] === "?") {
			o += (d === "?xml" ? "" : n) + `<${d}${uo(l[":@"], t, p, r, a)}?>`, s = !0, r.pop();
			continue;
		}
		let m = n;
		m !== "" && (m += t.indentBy);
		let h = n + `<${d}${uo(l[":@"], t, p, r, a)}`, g;
		g = p ? so(l[u], t) : ao(l[u], t, m, r, i, a), t.unpairedTags.indexOf(d) === -1 ? g && g.length !== 0 || !t.suppressEmptyNode ? g && g.endsWith(">") ? o += h + `>${g}${n}</${d}>` : (o += h + ">", g && n !== "" && (g.includes("/>") || g.includes("</")) ? o += n + t.indentBy + g + n : o += g, o += `</${d}>`) : o += h + "/>" : t.suppressUnpairedNode ? o += h + ">" : o += h + "/>", s = !0, r.pop();
	}
	return o;
}
function oo(e, t) {
	if (!e || t.ignoreAttributes) return null;
	let n = {}, r = !1;
	for (let i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i.startsWith(t.attributeNamePrefix) ? i.substr(t.attributeNamePrefix.length) : i] = no(e[i]), r = !0);
	return r ? n : null;
}
function so(e, t) {
	if (!Array.isArray(e)) return e == null ? "" : Q(e);
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e[r], a = lo(i);
		if (a === t.textNodeName) n += Q(i[a]);
		else if (a === t.cdataPropName) n += i[a][0][t.textNodeName];
		else if (a === t.commentPropName) n += i[a][0][t.textNodeName];
		else {
			if (a && a[0] === "?") continue;
			if (a) {
				let e = co(i[":@"], t), r = so(i[a], t);
				r && r.length !== 0 ? n += `<${a}${e}>${r}</${a}>` : n += `<${a}${e}/>`;
			}
		}
	}
	return n;
}
function co(e, t) {
	let n = "";
	if (e && !t.ignoreAttributes) for (let r in e) {
		if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
		let i = e[r];
		!0 === i && t.suppressBooleanAttributes ? n += ` ${r.substr(t.attributeNamePrefix.length)}` : n += ` ${r.substr(t.attributeNamePrefix.length)}="${no(i)}"`;
	}
	return n;
}
function lo(e) {
	let t = Object.keys(e);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (Object.prototype.hasOwnProperty.call(e, r) && r !== ":@") return r;
	}
}
function uo(e, t, n, r, i) {
	let a = "";
	if (e && !t.ignoreAttributes) for (let o in e) {
		if (!Object.prototype.hasOwnProperty.call(e, o)) continue;
		let s = o.substr(t.attributeNamePrefix.length), c = n ? s : ro(s, !0, t, r, i), l;
		n ? l = e[o] : (l = t.attributeValueProcessor(o, e[o]), l = po(l, t)), !0 === l && t.suppressBooleanAttributes ? a += ` ${c}` : a += ` ${c}="${no(l)}"`;
	}
	return a;
}
function fo(e, t) {
	if (!t || t.length === 0) return !1;
	for (let n = 0; n < t.length; n++) if (e.matches(t[n])) return !0;
	return !1;
}
function po(e, t) {
	if (e && e.length > 0 && t.processEntities) for (let n = 0; n < t.entities.length; n++) {
		let r = t.entities[n];
		e = e.replace(r.regex, r.val);
	}
	return e;
}
var mo = {
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
	jPath: !0,
	sanitizeName: !1
};
function $(e) {
	if (this.options = Object.assign({}, mo, e), this.options.stopNodes && Array.isArray(this.options.stopNodes) && (this.options.stopNodes = this.options.stopNodes.map(((e) => typeof e == "string" && e.startsWith("*.") ? ".." + e.substring(2) : e))), this.stopNodeExpressions = [], this.options.stopNodes && Array.isArray(this.options.stopNodes)) for (let e = 0; e < this.options.stopNodes.length; e++) {
		let t = this.options.stopNodes[e];
		typeof t == "string" ? this.stopNodeExpressions.push(new li(t)) : t instanceof li && this.stopNodeExpressions.push(t);
	}
	var t;
	!0 === this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
		return !1;
	} : (this.ignoreAttributesFn = typeof (t = this.options.ignoreAttributes) == "function" ? t : Array.isArray(t) ? (e) => {
		for (let n of t) if (typeof n == "string" && e === n || n instanceof RegExp && n.test(e)) return !0;
	} : () => !1, this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = vo), this.processTextOrObjNode = go, this.options.format ? (this.indentate = _o, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
		return "";
	}, this.tagEndChar = ">", this.newLine = "");
}
function ho(e, t, n, r, i) {
	return n.sanitizeName ? i(e) ? e : n.sanitizeName(e, {
		isAttribute: t,
		matcher: r.readOnly()
	}) : e;
}
function go(e, t, n, r, i) {
	let a = this.extractAttributes(e);
	if (r.push(t, a), this.checkStopNode(r)) {
		let i = this.buildRawContent(e), a = this.buildAttributesForStopNode(e);
		return r.pop(), this.buildObjectNode(i, t, a, n);
	}
	let o = this.j2x(e, n + 1, r, i);
	return r.pop(), t[0] === "?" ? this.buildTextValNode("", t, o.attrStr, n, r) : e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1 ? this.buildTextValNode(e[this.options.textNodeName], t, o.attrStr, n, r) : this.buildObjectNode(o.val, t, o.attrStr, n);
}
function _o(e) {
	return this.options.indentBy.repeat(e);
}
function vo(e) {
	return !(!e.startsWith(this.options.attributeNamePrefix) || e === this.options.textNodeName) && e.substr(this.attrPrefixLen);
}
$.prototype.build = function(e) {
	if (this.options.preserveOrder) return io(e, this.options);
	{
		Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = { [this.options.arrayNodeName]: e });
		let t = new ci(), n = Wr("qName", { xmlVersion: function(e, t) {
			let n = e["?xml"];
			if (n && typeof n == "object") {
				if (t.attributesGroupName && n[t.attributesGroupName]) {
					let e = n[t.attributesGroupName][t.attributeNamePrefix + "version"];
					if (e) return e;
				}
				let e = n[t.attributeNamePrefix + "version"];
				if (e) return e;
			}
			return "1.0";
		}(e, this.options) });
		return this.j2x(e, 0, t, n).val;
	}
}, $.prototype.j2x = function(e, t, n, r) {
	let i = "", a = "";
	if (this.options.maxNestedTags && n.getDepth() >= this.options.maxNestedTags) throw Error("Maximum nested tags exceeded");
	let o = this.options.jPath ? n.toString() : n, s = this.checkStopNode(n);
	for (let c in e) {
		if (!Object.prototype.hasOwnProperty.call(e, c)) continue;
		let l = c === this.options.textNodeName || c === this.options.cdataPropName || c === this.options.commentPropName || this.options.attributesGroupName && c === this.options.attributesGroupName || this.isAttribute(c) || c[0] === "?" ? c : ho(c, !1, this.options, n, r);
		if (e[c] === void 0) this.isAttribute(c) && (a += "");
		else if (e[c] === null) this.isAttribute(c) || l === this.options.cdataPropName || l === this.options.commentPropName ? a += "" : l[0] === "?" ? a += this.indentate(t) + "<" + l + "?" + this.tagEndChar : a += this.indentate(t) + "<" + l + "/" + this.tagEndChar;
		else if (e[c] instanceof Date) a += this.buildTextValNode(e[c], l, "", t, n);
		else if (typeof e[c] != "object") {
			let u = this.isAttribute(c);
			if (u && !this.ignoreAttributesFn(u, o)) {
				let t = ho(u, !0, this.options, n, r);
				i += this.buildAttrPairStr(t, Q(e[c]), s);
			} else if (!u) {
				if (c === this.options.textNodeName) {
					let t = this.options.tagValueProcessor(c, Q(e[c]));
					a += this.replaceEntitiesValue(t);
				} else {
					n.push(l);
					let r = this.checkStopNode(n);
					if (n.pop(), r) {
						let n = Q(e[c]);
						a += n === "" ? this.indentate(t) + "<" + l + this.closeTag(l) + this.tagEndChar : this.indentate(t) + "<" + l + ">" + n + "</" + l + this.tagEndChar;
					} else a += this.buildTextValNode(e[c], l, "", t, n);
				}
			}
		} else if (Array.isArray(e[c])) {
			let i = e[c].length, o = "", s = "";
			for (let u = 0; u < i; u++) {
				let i = e[c][u];
				if (i !== void 0) {
					if (i === null) l[0] === "?" ? a += this.indentate(t) + "<" + l + "?" + this.tagEndChar : a += this.indentate(t) + "<" + l + "/" + this.tagEndChar;
					else if (typeof i == "object") {
						if (this.options.oneListGroup) {
							n.push(l);
							let e = this.j2x(i, t + 1, n, r);
							n.pop(), o += e.val, this.options.attributesGroupName && i.hasOwnProperty(this.options.attributesGroupName) && (s += e.attrStr);
						} else o += this.processTextOrObjNode(i, l, t, n, r);
					} else if (this.options.oneListGroup) {
						let e = this.options.tagValueProcessor(l, i);
						e = this.replaceEntitiesValue(e), e = Q(e), o += e;
					} else {
						n.push(l);
						let e = this.checkStopNode(n);
						if (n.pop(), e) {
							let e = Q(i);
							o += e === "" ? this.indentate(t) + "<" + l + this.closeTag(l) + this.tagEndChar : this.indentate(t) + "<" + l + ">" + e + "</" + l + this.tagEndChar;
						} else o += this.buildTextValNode(i, l, "", t, n);
					}
				}
			}
			this.options.oneListGroup && (o = this.buildObjectNode(o, l, s, t)), a += o;
		} else if (this.options.attributesGroupName && c === this.options.attributesGroupName) {
			let t = Object.keys(e[c]), a = t.length;
			for (let o = 0; o < a; o++) {
				let a = ho(t[o], !0, this.options, n, r);
				i += this.buildAttrPairStr(a, Q(e[c][t[o]]), s);
			}
		} else a += this.processTextOrObjNode(e[c], l, t, n, r);
	}
	return {
		attrStr: i,
		val: a
	};
}, $.prototype.buildAttrPairStr = function(e, t, n) {
	return n || (t = this.options.attributeValueProcessor(e, Q(t)), t = this.replaceEntitiesValue(t)), this.options.suppressBooleanAttributes && t === "true" ? " " + e : " " + e + "=\"" + no(t) + "\"";
}, $.prototype.extractAttributes = function(e) {
	if (!e || typeof e != "object") return null;
	let t = {}, n = !1;
	if (this.options.attributesGroupName && e[this.options.attributesGroupName]) {
		let r = e[this.options.attributesGroupName];
		for (let e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e.startsWith(this.options.attributeNamePrefix) ? e.substring(this.options.attributeNamePrefix.length) : e] = no(r[e]), n = !0);
	} else for (let r in e) {
		if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
		let i = this.isAttribute(r);
		i && (t[i] = no(e[r]), n = !0);
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
			!0 === i && this.options.suppressBooleanAttributes ? t += " " + r : t += " " + r + "=\"" + no(i) + "\"";
		}
	} else for (let n in e) {
		if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
		let r = this.isAttribute(n);
		if (r) {
			let i = e[n];
			!0 === i && this.options.suppressBooleanAttributes ? t += " " + r : t += " " + r + "=\"" + no(i) + "\"";
		}
	}
	return t;
}, $.prototype.buildObjectNode = function(e, t, n, r) {
	if (e === "") return t[0] === "?" ? this.indentate(r) + "<" + t + n + "?" + this.tagEndChar : this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
	if (t[0] === "?") return this.indentate(r) + "<" + t + n + "?" + this.tagEndChar;
	{
		let i = "</" + t + this.tagEndChar, a = "";
		return t[0] === "?" && (a = "?", i = ""), !n && n !== "" || e.indexOf("<") !== -1 ? !1 !== this.options.commentPropName && t === this.options.commentPropName && a.length === 0 ? this.indentate(r) + `\x3c!--${eo(e)}--\x3e` + this.newLine : this.indentate(r) + "<" + t + n + a + this.tagEndChar + e + this.indentate(r) + i : this.indentate(r) + "<" + t + n + a + ">" + e + i;
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
		let t = to(e);
		return this.indentate(r) + `<![CDATA[${t}]]>` + this.newLine;
	}
	if (!1 !== this.options.commentPropName && t === this.options.commentPropName) {
		let t = eo(e);
		return this.indentate(r) + `\x3c!--${t}--\x3e` + this.newLine;
	}
	if (t[0] === "?") return this.indentate(r) + "<" + t + n + "?" + this.tagEndChar;
	{
		let i = this.options.tagValueProcessor(t, e);
		return i = this.replaceEntitiesValue(i), i = Q(i), i === "" ? this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(r) + "<" + t + n + ">" + i + "</" + t + this.tagEndChar;
	}
}, $.prototype.replaceEntitiesValue = function(e) {
	if (e && e.length > 0 && this.options.processEntities) for (let t = 0; t < this.options.entities.length; t++) {
		let n = this.options.entities[t];
		e = e.replace(n.regex, n.val);
	}
	return e;
};
var yo = $;
function bo(e) {
	return new yo({
		attributeNamePrefix: "@_",
		format: !0,
		ignoreAttributes: !1,
		suppressEmptyNode: !0
	}).build(xo({ lockinfo: {
		"@_xmlns:d": "DAV:",
		lockscope: { exclusive: {} },
		locktype: { write: {} },
		owner: { href: e }
	} }, "d"));
}
function xo(e, t) {
	let n = { ...e };
	for (let e in n) n.hasOwnProperty(e) && (n[e] && typeof n[e] == "object" && e.indexOf(":") === -1 ? (n[`${t}:${e}`] = xo(n[e], t), delete n[e]) : !1 === /^@_/.test(e) && (n[`${t}:${e}`] = n[e], delete n[e]));
	return n;
}
function So(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
function Co(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
var wo = Co((function(e, t, n, r = {}) {
	return So(R(z({
		url: I(e.remoteURL, F(t)),
		method: "UNLOCK",
		headers: { "Lock-Token": n }
	}, e, r), e), (function(t) {
		if (W(e, t), t.status !== 204 && t.status !== 200) throw _r(t);
	}));
})), To = Co((function(e, t, n = {}) {
	let { refreshToken: r, timeout: i = Eo } = n, a = {
		Accept: "text/plain,application/xml",
		Timeout: i
	};
	return r && (a.If = r), So(R(z({
		url: I(e.remoteURL, F(t)),
		method: "LOCK",
		headers: a,
		data: bo(e.contactHref)
	}, e, n), e), (function(t) {
		return W(e, t), So(t.text(), (function(e) {
			let n = function(e) {
				return new ha({
					removeNSPrefix: !0,
					parseAttributeValue: !0,
					parseTagValue: !0
				}).parse(e);
			}(e), r = X().get(n, "prop.lockdiscovery.activelock.locktoken.href"), i = X().get(n, "prop.lockdiscovery.activelock.timeout");
			if (!r) throw _r(t, "No lock token received: ");
			return {
				token: r,
				serverTimeout: i
			};
		}));
	}));
})), Eo = "Infinite, Second-4100000000";
function Do(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Oo = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t = {}) {
	let n = t.path || "/";
	return Do(R(z({
		url: I(e.remoteURL, n),
		method: "PROPFIND",
		headers: {
			Accept: "text/plain,application/xml",
			Depth: "0"
		}
	}, e, t), e), (function(n) {
		return W(e, n), Do(n.text(), (function(r) {
			return Do(wa(r, e.parsing), (function(e) {
				return vr(n, function(e) {
					try {
						let [t] = e.multistatus.response, { propstat: { prop: { "quota-used-bytes": n, "quota-available-bytes": r } } } = t;
						return n !== void 0 && r !== void 0 ? {
							used: parseInt(String(n), 10),
							available: Da(r)
						} : null;
					} catch {}
					return null;
				}(e), t.details);
			}));
		}));
	}));
}));
function ko(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Ao = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n = {}) {
	let { details: r = !1 } = n;
	return ko(R(z({
		url: I(e.remoteURL, F(t)),
		method: "SEARCH",
		headers: {
			Accept: "text/plain,application/xml",
			"Content-Type": e.headers["Content-Type"] || "application/xml; charset=utf-8"
		}
	}, e, n), e), (function(n) {
		return W(e, n), ko(n.text(), (function(i) {
			return ko(wa(i, e.parsing), (function(e) {
				return vr(n, function(e, t, n) {
					let r = {
						truncated: !1,
						results: []
					};
					return r.truncated = e.multistatus.response.some(((e) => (e.status || e.propstat?.status).split(" ", 3)?.[1] === "507" && e.href.replace(/\/$/, "").endsWith(F(t).replace(/\/$/, "")))), e.multistatus.response.forEach(((e) => {
						if (e.propstat === void 0) return;
						let t = e.href.split("/").map(decodeURIComponent).join("/");
						r.results.push(Ta(e.propstat.prop, t, n));
					})), r;
				}(e, t, r), r);
			}));
		}));
	}));
})), jo = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n, r = {}) {
	let i = z({
		url: I(e.remoteURL, F(t)),
		method: "MOVE",
		headers: {
			Destination: I(e.remoteURL, F(n)),
			Overwrite: !1 === r.overwrite ? "F" : "T"
		}
	}, e, r);
	return o = function(t) {
		W(e, t);
	}, (a = R(i, e)) && a.then || (a = Promise.resolve(a)), o ? a.then(o) : a;
	var a, o;
})), Mo = N(172);
function No(e) {
	if (vn(e)) return e.byteLength;
	if (yn(e)) return e.length;
	if (typeof e == "string") return (0, Mo.d)(e);
	throw new P({ info: { code: en.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
}
var Po = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n, r = {}) {
	let { contentLength: i = !0, overwrite: a = !0 } = r, o = { "Content-Type": "application/octet-stream" };
	!1 === i || (o["Content-Length"] = typeof i == "number" ? `${i}` : `${No(n)}`), a || (o["If-None-Match"] = "*");
	let s = z({
		url: I(e.remoteURL, F(t)),
		method: "PUT",
		headers: o,
		data: n
	}, e, r);
	return l = function(t) {
		try {
			W(e, t);
		} catch (e) {
			let t = e;
			if (t.status !== 412 || a) throw t;
			return !1;
		}
		return !0;
	}, (c = R(s, e)) && c.then || (c = Promise.resolve(c)), l ? c.then(l) : c;
	var c, l;
})), Fo = function(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}((function(e, t, n = {}) {
	let r = z({
		url: I(e.remoteURL, F(t)),
		method: "OPTIONS"
	}, e, n);
	return a = function(t) {
		try {
			W(e, t);
		} catch (e) {
			throw e;
		}
		return {
			compliance: (t.headers.get("DAV") ?? "").split(",").map(((e) => e.trim())),
			server: t.headers.get("Server") ?? ""
		};
	}, (i = R(r, e)) && i.then || (i = Promise.resolve(i)), a ? i.then(a) : i;
	var i, a;
}));
function Io(e, t, n) {
	return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
var Lo = Bo((function(e, t, n, r, i, a = {}) {
	if (n > r || n < 0) throw new P({ info: { code: en.InvalidUpdateRange } }, `Invalid update range ${n} for partial update`);
	let o = {
		"Content-Type": "application/octet-stream",
		"Content-Length": "" + (r - n + 1),
		"Content-Range": `bytes ${n}-${r}/*`
	};
	return Io(R(z({
		url: I(e.remoteURL, F(t)),
		method: "PUT",
		headers: o,
		data: i
	}, e, a), e), (function(t) {
		W(e, t);
	}));
}));
function Ro(e, t) {
	var n = e();
	return n && n.then ? n.then(t) : t(n);
}
var zo = Bo((function(e, t, n, r, i, a = {}) {
	if (n > r || n < 0) throw new P({ info: { code: en.InvalidUpdateRange } }, `Invalid update range ${n} for partial update`);
	let o = {
		"Content-Type": "application/x-sabredav-partialupdate",
		"Content-Length": "" + (r - n + 1),
		"X-Update-Range": `bytes=${n}-${r}`
	};
	return Io(R(z({
		url: I(e.remoteURL, F(t)),
		method: "PATCH",
		headers: o,
		data: i
	}, e, a), e), (function(t) {
		W(e, t);
	}));
}));
function Bo(e) {
	return function() {
		var t = [...arguments];
		try {
			return Promise.resolve(e.apply(this, t));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
var Vo = Bo((function(e, t, n, r, i, a = {}) {
	return Io(Fo(e, t, a), (function(o) {
		let s = !1;
		return Ro((function() {
			if (o.compliance.includes("sabredav-partialupdate")) return Io(zo(e, t, n, r, i, a), (function(e) {
				return s = !0, e;
			}));
		}), (function(c) {
			let l = !1;
			return s ? c : Ro((function() {
				if (o.server.includes("Apache") && o.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Io(Lo(e, t, n, r, i, a), (function(e) {
					return l = !0, e;
				}));
			}), (function(e) {
				if (l) return e;
				throw new P({ info: { code: en.NotSupported } }, "Not supported");
			}));
		}));
	}));
})), Ho = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function Uo(e, t = {}) {
	let { authType: n = null, remoteBasePath: r, contactHref: i = Ho, entityDecoder: a, ha1: o, headers: s = {}, httpAgent: c, httpsAgent: l, password: u, token: d, username: f, withCredentials: p } = t, m = n;
	m ||= f || u ? L.Password : L.None;
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
			tagParsers: [ba]
		},
		remotePath: Gt(e),
		remoteURL: e,
		token: d,
		username: f,
		withCredentials: p
	};
	return tn(h, f, u, d, o), {
		copyFile: (e, t, n) => yr(h, e, t, n),
		createDirectory: (e, t) => Ra(h, e, t),
		createReadStream: (e, t) => function(e, t, n = {}) {
			let r = new (Ba()).PassThrough();
			return Va(e, t, n).then(((e) => {
				e.pipe(r);
			})).catch(((e) => {
				r.emit("error", e);
			})), r;
		}(h, e, t),
		createWriteStream: (e, t, n) => function(e, t, n = {}, r = Ha) {
			let i = new (Ba()).PassThrough(), a = {};
			return !1 === n.overwrite && (a["If-None-Match"] = "*"), R(z({
				url: I(e.remoteURL, F(t)),
				method: "PUT",
				headers: a,
				data: i,
				maxRedirects: 0
			}, e, n), e).then(((t) => W(e, t))).then(((e) => {
				setTimeout((() => {
					r(e);
				}), 0);
			})).catch(((e) => {
				i.emit("error", e);
			})), i;
		}(h, e, t, n),
		customRequest: (e, t) => Ua(h, e, t),
		deleteFile: (e, t) => Wa(h, e, t),
		exists: (e, t) => Ga(h, e, t),
		getDirectoryContents: (e, t) => qa(h, e, t),
		getFileContents: (e, t) => Qa(h, e, t),
		getFileDownloadLink: (e) => function(e, t) {
			let n = I(e.remoteURL, F(t)), r = /^https:/i.test(n) ? "https" : "http";
			switch (e.authType) {
				case L.None: break;
				case L.Password: {
					let t = Qt(e.headers.Authorization.replace(/^Basic /i, "").trim());
					n = n.replace(/^https?:\/\//, `${r}://${t}@`);
					break;
				}
				default: throw new P({ info: { code: en.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${e.authType}`);
			}
			return n;
		}(h, e),
		getFileUploadLink: (e) => function(e, t) {
			let n = `${I(e.remoteURL, F(t))}?Content-Type=application/octet-stream`, r = /^https:/i.test(n) ? "https" : "http";
			switch (e.authType) {
				case L.None: break;
				case L.Password: {
					let t = Qt(e.headers.Authorization.replace(/^Basic /i, "").trim());
					n = n.replace(/^https?:\/\//, `${r}://${t}@`);
					break;
				}
				default: throw new P({ info: { code: en.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${e.authType}`);
			}
			return n;
		}(h, e),
		getHeaders: () => Object.assign({}, h.headers),
		getQuota: (e) => Oo(h, e),
		lock: (e, t) => To(h, e, t),
		moveFile: (e, t, n) => jo(h, e, t, n),
		putFileContents: (e, t, n) => Po(h, e, t, n),
		partialUpdateFileContents: (e, t, n, r, i) => Vo(h, e, t, n, r, i),
		getDAVCompliance: (e) => Fo(h, e),
		search: (e, t) => Ao(h, e, t),
		setHeaders: (e) => {
			h.headers = Object.assign({}, e);
		},
		stat: (e, t) => ka(h, e, t),
		unlock: (e, t, n) => wo(h, e, t, n),
		registerAttributeParser: (e) => {
			h.parsing.attributeParsers.push(e);
		},
		registerTagParser: (e) => {
			h.parsing.tagParsers.push(e);
		}
	};
}
// node_modules/@nextcloud/files/dist/dav/davPermissions.mjs
function Wo(e = "") {
	let t = M.NONE;
	return e && (e.includes("G") && (t |= M.READ), e.includes("W") && (t |= M.WRITE), e.includes("CK") && (t |= M.CREATE), e.includes("NV") && (t |= M.UPDATE), e.includes("D") && (t |= M.DELETE), e.includes("R") && (t |= M.SHARE)), t;
}
// node_modules/@nextcloud/files/dist/dav/davProperties.mjs
var Go = [
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
], Ko = {
	d: "DAV:",
	nc: "http://nextcloud.org/ns",
	oc: "http://owncloud.org/ns",
	ocs: "http://open-collaboration-services.org/ns"
};
function qo() {
	return Ie.davProperties ??= [...Go], Ie.davProperties.map((e) => `<${e} />`).join(" ");
}
function Jo() {
	return Ie.davNamespaces ??= { ...Ko }, Object.keys(Ie.davNamespaces).map((e) => `xmlns:${e}="${Ie.davNamespaces?.[e]}"`).join(" ");
}
function Yo() {
	return `<?xml version="1.0"?>
		<d:propfind ${Jo()}>
			<d:prop>
				${qo()}
			</d:prop>
		</d:propfind>`;
}
function Xo() {
	return `<?xml version="1.0"?>
		<oc:filter-files ${Jo()}>
			<d:prop>
				${qo()}
			</d:prop>
			<oc:filter-rules>
				<oc:favorite>1</oc:favorite>
			</oc:filter-rules>
		</oc:filter-files>`;
}
function Zo(e, t = 100) {
	let r = Ne(), i = r.dav?.search_supports_upload_time, a = r.dav?.search_supports_last_activity ? "<nc:last_activity/>" : "<d:getlastmodified/>";
	return `<?xml version="1.0" encoding="UTF-8"?>
<d:searchrequest ${Jo()}
	xmlns:ns="https://github.com/icewind1991/SearchDAV/ns">
	<d:basicsearch>
		<d:select>
			<d:prop>
				${qo()}
			</d:prop>
		</d:select>
		<d:from>
			<d:scope>
				<d:href>/files/${n()?.uid}/</d:href>
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
				${i ? `
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
// node_modules/@nextcloud/files/dist/dav/dav.mjs
function Qo() {
	return jt() ? `/files/${Mt()}` : `/files/${n()?.uid}`;
}
var $o = Qo();
function es() {
	let e = u("dav");
	return jt() ? e.replace("remote.php", "public.php") : e;
}
var ts = es();
function ns(e = ts, t = {}) {
	let n = Uo(e, { headers: t });
	function r(e) {
		n.setHeaders({
			...t,
			"X-Requested-With": "XMLHttpRequest",
			requesttoken: e ?? ""
		});
	}
	return d(r), r(fe()), un().patch("fetch", (e, t) => {
		let n = t.headers;
		return n?.method && (t.method = n.method, delete n.method), fetch(e, t);
	}), n;
}
async function rs(e = {}) {
	let t = e.client ?? ns(), n = e.path ?? "/", r = e.davRoot ?? $o;
	return (await t.getDirectoryContents(`${r}${n}`, {
		signal: e.signal,
		details: !0,
		data: Xo(),
		headers: { method: "REPORT" },
		includeSelf: !0
	})).data.filter((e) => e.filename !== n).map((e) => is(e, r));
}
function is(e, t = $o, r = ts) {
	let i = n()?.uid;
	if (jt()) i ??= "anonymous";
	else if (!i) throw Error("No user id found");
	let a = e.props, o = Wo(a?.permissions), s = String(a?.["owner-id"] || i), c = a.fileid || 0, l = new Date(Date.parse(e.lastmod)), u = new Date(Date.parse(a.creationdate)), d = new URL(r).pathname.replace(/\/$/, ""), f = {
		id: c,
		source: r + (e.filename.startsWith(d) ? e.filename.slice(d.length) : e.filename),
		mtime: !isNaN(l.getTime()) && l.getTime() !== 0 ? l : void 0,
		crtime: !isNaN(u.getTime()) && u.getTime() !== 0 ? u : void 0,
		mime: e.mime || "application/octet-stream",
		displayname: a.displayname === void 0 ? void 0 : String(a.displayname),
		size: a?.size || Number.parseInt(a.getcontentlength || "0"),
		status: c < 0 ? Re.FAILED : void 0,
		permissions: o,
		owner: s,
		root: t,
		attributes: {
			...e,
			...a,
			hasPreview: a?.["has-preview"]
		}
	};
	return delete f.attributes?.props, e.type === "file" ? new We(f) : new Ye(f);
}
// node_modules/@nextcloud/dialogs/dist/chunks/FilePicker-qWi4RBGN.js
var as = {
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
}, os = ["aria-hidden", "aria-label"], ss = [
	"fill",
	"width",
	"height"
], cs = { key: 0 };
function ls(e, n, r, i, a, o) {
	return A(), D("span", E(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon file-icon",
		role: "img",
		onClick: n[0] ||= (t) => e.$emit("click", t)
	}), [(A(), D("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (A(), D("title", cs, k(r.title), 1)) : t("", !0), n[1] ||= S("path", { d: "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" }, null, -1)], 8, ss))], 16, os);
}
var us = /*#__PURE__*/ j(as, [["render", ls]]), ds = {
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
}, fs = ["aria-hidden", "aria-label"], ps = [
	"fill",
	"width",
	"height"
], ms = { key: 0 };
function hs(e, n, r, i, a, o) {
	return A(), D("span", E(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon menu-down-icon",
		role: "img",
		onClick: n[0] ||= (t) => e.$emit("click", t)
	}), [(A(), D("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (A(), D("title", ms, k(r.title), 1)) : t("", !0), n[1] ||= S("path", { d: "M7,10L12,15L17,10H7Z" }, null, -1)], 8, ps))], 16, fs);
}
var gs = /*#__PURE__*/ j(ds, [["render", hs]]), _s = {
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
}, vs = ["aria-hidden", "aria-label"], ys = [
	"fill",
	"width",
	"height"
], bs = { key: 0 };
function xs(e, n, r, i, a, o) {
	return A(), D("span", E(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon menu-up-icon",
		role: "img",
		onClick: n[0] ||= (t) => e.$emit("click", t)
	}), [(A(), D("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (A(), D("title", bs, k(r.title), 1)) : t("", !0), n[1] ||= S("path", { d: "M7,15L12,10L17,15H7Z" }, null, -1)], 8, ys))], 16, vs);
}
var Ss = /*#__PURE__*/ j(_s, [["render", xs]]), Cs = {
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
}, ws = ["aria-hidden", "aria-label"], Ts = [
	"fill",
	"width",
	"height"
], Es = { key: 0 };
function Ds(e, n, r, i, a, o) {
	return A(), D("span", E(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon folder-icon",
		role: "img",
		onClick: n[0] ||= (t) => e.$emit("click", t)
	}), [(A(), D("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (A(), D("title", Es, k(r.title), 1)) : t("", !0), n[1] ||= S("path", { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" }, null, -1)], 8, Ts))], 16, ws);
}
var Os = /*#__PURE__*/ j(Cs, [["render", Ds]]), ks = {
	"file-picker__file-icon": "_file-picker__file-icon_1hpi8_12",
	"file-picker__file-icon-overlay": "_file-picker__file-icon-overlay_1hpi8_29",
	"file-picker__file-icon--primary": "_file-picker__file-icon--primary_1hpi8_41"
}, As = /* @__PURE__ */ ue({
	__name: "FilePreview",
	props: {
		node: {},
		cropImagePreviews: { type: Boolean }
	},
	setup(n) {
		let r = n, i = s(ks), { previewURL: a, previewLoaded: o } = ft(b(r, "node"), y(() => ({ cropPreview: r.cropImagePreviews }))), l = y(() => r.node.type === Le.File), u = y(() => {
			if (r.node.type !== Le.Folder) return null;
			if (r.node.attributes?.["is-encrypted"] === 1) return Ct;
			if (r.node.attributes?.["is-tag"]) return Dt;
			let e = Object.values(r.node.attributes?.["share-types"] || {}).flat();
			if (e.some((e) => e === At.Link || e === At.Email)) return wt;
			if (e.length > 0) return bt;
			switch (r.node.attributes?.["mount-type"]) {
				case "external":
				case "external-session": return Tt;
				case "group": return yt;
				case "shared": return bt;
			}
			return null;
		});
		return (n, r) => (A(), D("div", {
			style: be(e(o) ? { backgroundImage: `url(${e(a)})` } : void 0),
			class: ie(i.value["file-picker__file-icon"])
		}, [e(o) ? t("", !0) : (A(), D(c, { key: 0 }, [l.value ? (A(), g(us, { key: 0 })) : (A(), D(c, { key: 1 }, [u.value ? (A(), g(e(w), {
			key: 0,
			class: ie(i.value["file-picker__file-icon-overlay"]),
			inline: "",
			path: u.value,
			size: "auto"
		}, null, 8, ["class", "path"])) : t("", !0), O(Os, { class: ie(i.value["file-picker__file-icon--primary"]) }, null, 8, ["class"])], 64))], 64))], 6));
	}
}), js = [
	"tabindex",
	"aria-selected",
	"data-filename"
], Ms = { class: "row-name" }, Ns = {
	class: "file-picker__name-container",
	"data-testid": "row-name"
}, Ps = ["title", "textContent"], Fs = ["textContent"], Is = { class: "row-size" }, Ls = { class: "row-modified" }, Rs = /*#__PURE__*/ j(/* @__PURE__ */ ue({
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
	setup(n, { emit: r }) {
		let a = n, o = r, s = y(() => a.node.mtime ?? 0), c = y(() => xe(a.node.displayname)), l = y(() => a.node.displayname.slice(0, c.value ? -c.value.length : void 0)), u = y(() => a.node.type === Le.Folder), d = y(() => a.canPick && (a.allowPickDirectory || !u.value)), f = y(() => (a.node.permissions & M.READ) === M.READ);
		function p() {
			d.value && o("update:selected", !a.selected);
		}
		function m() {
			u.value ? f.value && o("enterDirectory", a.node) : p();
		}
		function h(e) {
			e.key === "Enter" && m();
		}
		return (r, a) => (A(), D("tr", E({
			tabindex: n.showCheckbox && !u.value ? void 0 : 0,
			"aria-selected": d.value ? n.selected : void 0,
			class: ["file-picker__row", [{
				"file-picker__row--selected": n.selected && !n.showCheckbox,
				"file-picker__row--not-navigatable": u.value && !f.value,
				"file-picker__row--not-pickable": !d.value
			}]],
			"data-filename": n.node.basename,
			"data-testid": "file-list-row"
		}, i({
			click: m,
			...!n.showCheckbox || u.value ? { keydown: h } : {}
		}, !0)), [
			n.showCheckbox ? (A(), D("td", {
				key: 0,
				class: "row-checkbox",
				onClick: we(() => {}, ["stop"])
			}, [O(e(ae), {
				"aria-label": e(T)("Select the row for {nodename}", { nodename: l.value }),
				disabled: !d.value,
				"data-testid": "row-checkbox",
				modelValue: n.selected,
				"onUpdate:modelValue": p
			}, null, 8, [
				"aria-label",
				"disabled",
				"modelValue"
			])])) : t("", !0),
			S("td", Ms, [S("div", Ns, [
				O(As, {
					node: n.node,
					cropImagePreviews: n.cropImagePreviews
				}, null, 8, ["node", "cropImagePreviews"]),
				S("div", {
					class: "file-picker__file-name",
					title: l.value,
					textContent: k(l.value)
				}, null, 8, Ps),
				S("div", {
					class: "file-picker__file-extension",
					textContent: k(c.value)
				}, null, 8, Fs)
			])]),
			S("td", Is, k(e(tt)(n.node.size || 0)), 1),
			S("td", Ls, [O(e(kt), {
				timestamp: s.value,
				ignoreSeconds: ""
			}, null, 8, ["timestamp"])])
		], 16, js));
	}
}), [["__scopeId", "data-v-7857e8bd"]]), zs = {
	"aria-hidden": "true",
	class: "file-picker__row loading-row"
}, Bs = {
	key: 0,
	class: "row-checkbox"
}, Vs = { class: "row-name" }, Hs = { class: "row-wrapper" }, Us = /*#__PURE__*/ j(/* @__PURE__ */ ue({
	__name: "LoadingTableRow",
	props: { showCheckbox: { type: Boolean } },
	setup(n) {
		return (r, i) => (A(), D("tr", zs, [
			n.showCheckbox ? (A(), D("td", Bs, [...i[0] ||= [S("span", null, null, -1)]])) : t("", !0),
			S("td", Vs, [S("div", Hs, [S("span", { class: ie(e(ks)["file-picker__file-icon"]) }, null, 2), i[1] ||= S("span", null, null, -1)])]),
			i[2] ||= S("td", { class: "row-size" }, [S("span")], -1),
			i[3] ||= S("td", { class: "row-modified" }, [S("span")], -1)
		]));
	}
}), [["__scopeId", "data-v-1f96131b"]]);
function Ws() {
	let e = v("files", "config", null), t = s(e?.show_hidden ?? !0), n = s(e?.sort_favorites_first ?? !0), r = s(e?.crop_image_previews ?? !0);
	return ee(async () => {
		if (jt()) C.debug("Skip loading files settings - currently on public share");
		else try {
			let { data: e } = await se.get(_("/apps/files/api/v1/configs"));
			t.value = e?.data?.show_hidden ?? !1, n.value = e?.data?.sort_favorites_first ?? !0, r.value = e?.data?.crop_image_previews ?? !0;
		} catch (e) {
			C.error("Could not load files settings", { error: e }), ke(T("Could not load files settings"));
		}
	}), {
		showHiddenFiles: t,
		sortFavoritesFirst: n,
		cropImagePreviews: r
	};
}
function Gs(e) {
	let t = (e) => e === "asc" ? "ascending" : e === "desc" ? "descending" : "none", n = v("files", "viewConfigs", null), r = s({
		sortBy: n?.files?.sorting_mode ?? "basename",
		order: t(n?.files?.sorting_direction ?? "asc")
	}), i = s({
		sortBy: n?.recent?.sorting_mode ?? "basename",
		order: t(n?.recent?.sorting_direction ?? "asc")
	}), a = s({
		sortBy: n?.favorites?.sorting_mode ?? "basename",
		order: t(n?.favorites?.sorting_direction ?? "asc")
	});
	ee(async () => {
		if (jt()) C.debug("Skip loading files views - currently on public share");
		else try {
			let { data: e } = await se.get(_("/apps/files/api/v1/views"));
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
			C.error("Could not load files views", { error: e }), ke(T("Could not load files views"));
		}
	});
	let o = y(() => x(e || "files") === "files" ? r.value : x(e) === "recent" ? i.value : a.value);
	return {
		filesViewConfig: r,
		favoritesViewConfig: a,
		recentViewConfig: i,
		currentConfig: o,
		sortBy: y(() => o.value.sortBy),
		order: y(() => o.value.order)
	};
}
var Ks = {
	key: 0,
	class: "row-checkbox"
}, qs = { class: "hidden-visually" }, Js = ["aria-sort"], Ys = { class: "header-wrapper" }, Xs = {
	key: 2,
	style: { width: "44px" }
}, Zs = ["aria-sort"], Qs = {
	key: 2,
	style: { width: "44px" }
}, $s = ["aria-sort"], ec = {
	key: 2,
	style: { width: "44px" }
}, tc = /*#__PURE__*/ j(/* @__PURE__ */ ue({
	__name: "FileList",
	props: /*@__PURE__*/ Ae({
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
	setup(n) {
		let r = he(n, "path"), i = he(n, "selectedFiles"), o = n, l = s(), { currentConfig: u } = Gs(o.currentView), d = y(() => l.value ?? u.value), f = y(() => d.value.sortBy === "basename" ? d.value.order === "none" ? void 0 : d.value.order : void 0), p = y(() => d.value.sortBy === "size" ? d.value.order === "none" ? void 0 : d.value.order : void 0), m = y(() => d.value.sortBy === "mtime" ? d.value.order === "none" ? void 0 : d.value.order : void 0);
		function h(e) {
			d.value.sortBy === e ? d.value.order === "ascending" ? l.value = {
				sortBy: d.value.sortBy,
				order: "descending"
			} : l.value = {
				sortBy: d.value.sortBy,
				order: "ascending"
			} : l.value = {
				sortBy: e,
				order: "ascending"
			};
		}
		let { sortFavoritesFirst: _, cropImagePreviews: v } = Ws(), b = y(() => Je(o.files, {
			sortFoldersFirst: !0,
			sortFavoritesFirst: _.value,
			sortingOrder: d.value.order === "descending" ? "desc" : "asc",
			sortingMode: d.value.sortBy
		})), x = y(() => o.files.filter((e) => o.allowPickDirectory || e.type !== Le.Folder)), te = y(() => !o.loading && i.value.length > 0 && i.value.length >= x.value.length);
		function ne() {
			i.value.length < x.value.length ? i.value = [...x.value] : i.value = [];
		}
		function re(e) {
			i.value.includes(e) ? i.value = i.value.filter((t) => t.path !== e.path) : o.multiselect ? i.value = [...i.value, e] : i.value = [e];
		}
		function C(e) {
			r.value = e.path;
		}
		let w = s(4), E = s();
		{
			let e = () => oe(() => {
				let e = E.value?.parentElement?.children || [], t = E.value?.parentElement?.clientHeight || 450;
				for (let n = 0; n < e.length; n++) E.value?.isSameNode(e[n]) || (t -= e[n].clientHeight);
				w.value = Math.max(1, Math.floor((t - 50) / 50));
			});
			ee(() => {
				window.addEventListener("resize", e), e();
			}), Me(() => {
				window.removeEventListener("resize", e);
			});
		}
		return (r, o) => (A(), D("div", {
			ref_key: "fileContainer",
			ref: E,
			class: "file-picker__files"
		}, [S("table", null, [S("thead", null, [S("tr", null, [
			n.multiselect ? (A(), D("th", Ks, [S("span", qs, k(e(T)("Select entry")), 1), n.multiselect ? (A(), g(e(ae), {
				key: 0,
				"aria-label": e(T)("Select all entries"),
				"data-testid": "select-all-checkbox",
				modelValue: te.value,
				"onUpdate:modelValue": ne
			}, null, 8, ["aria-label", "modelValue"])) : t("", !0)])) : t("", !0),
			S("th", {
				"aria-sort": f.value,
				class: "row-name"
			}, [S("div", Ys, [o[3] ||= S("span", { class: "file-picker__header-preview" }, null, -1), O(e(ge), {
				"data-test": "file-picker_sort-name",
				variant: "tertiary",
				wide: "",
				onClick: o[0] ||= (e) => h("basename")
			}, {
				icon: a(() => [f.value === "ascending" ? (A(), g(Ss, {
					key: 0,
					size: 20
				})) : f.value === "descending" ? (A(), g(gs, {
					key: 1,
					size: 20
				})) : (A(), D("span", Xs))]),
				default: a(() => [ye(" " + k(e(T)("Name")), 1)]),
				_: 1
			})])], 8, Js),
			S("th", {
				"aria-sort": p.value,
				class: "row-size"
			}, [O(e(ge), {
				variant: "tertiary",
				wide: "",
				onClick: o[1] ||= (e) => h("size")
			}, {
				icon: a(() => [p.value === "ascending" ? (A(), g(Ss, {
					key: 0,
					size: 20
				})) : p.value === "descending" ? (A(), g(gs, {
					key: 1,
					size: 20
				})) : (A(), D("span", Qs))]),
				default: a(() => [ye(" " + k(e(T)("Size")), 1)]),
				_: 1
			})], 8, Zs),
			S("th", {
				"aria-sort": m.value,
				class: "row-modified"
			}, [O(e(ge), {
				variant: "tertiary",
				wide: "",
				onClick: o[2] ||= (e) => h("mtime")
			}, {
				icon: a(() => [m.value === "ascending" ? (A(), g(Ss, {
					key: 0,
					size: 20
				})) : m.value === "descending" ? (A(), g(gs, {
					key: 1,
					size: 20
				})) : (A(), D("span", ec))]),
				default: a(() => [ye(" " + k(e(T)("Modified")), 1)]),
				_: 1
			})], 8, $s)
		])]), S("tbody", null, [n.loading ? (A(!0), D(c, { key: 0 }, Pe(w.value, (e) => (A(), g(Us, {
			key: e,
			showCheckbox: n.multiselect
		}, null, 8, ["showCheckbox"]))), 128)) : (A(!0), D(c, { key: 1 }, Pe(b.value, (t) => (A(), g(Rs, {
			key: t.fileid || t.path,
			allowPickDirectory: n.allowPickDirectory,
			showCheckbox: n.multiselect,
			canPick: n.canPick === void 0 || n.canPick(t),
			selected: i.value.includes(t),
			node: t,
			cropImagePreviews: e(v),
			"onUpdate:selected": (e) => re(t),
			onEnterDirectory: C
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
}), [["__scopeId", "data-v-03ad4b4a"]]), nc = {
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
}, rc = ["aria-hidden", "aria-label"], ic = [
	"fill",
	"width",
	"height"
], ac = { key: 0 };
function oc(e, n, r, i, a, o) {
	return A(), D("span", E(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon home-icon",
		role: "img",
		onClick: n[0] ||= (t) => e.$emit("click", t)
	}), [(A(), D("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (A(), D("title", ac, k(r.title), 1)) : t("", !0), n[1] ||= S("path", { d: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" }, null, -1)], 8, ic))], 16, rc);
}
var sc = /*#__PURE__*/ j(nc, [["render", oc]]), cc = {
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
}, lc = ["aria-hidden", "aria-label"], uc = [
	"fill",
	"width",
	"height"
], dc = { key: 0 };
function fc(e, n, r, i, a, o) {
	return A(), D("span", E(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon plus-icon",
		role: "img",
		onClick: n[0] ||= (t) => e.$emit("click", t)
	}), [(A(), D("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (A(), D("title", dc, k(r.title), 1)) : t("", !0), n[1] ||= S("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, null, -1)], 8, uc))], 16, lc);
}
var pc = /*#__PURE__*/ j(cc, [["render", fc]]), mc = ["aria-label"], hc = ["for"], gc = /*#__PURE__*/ j(/* @__PURE__ */ ue({
	__name: "FilePickerBreadcrumbs",
	props: /*@__PURE__*/ Ae({ showMenu: { type: Boolean } }, {
		path: { required: !0 },
		pathModifiers: {}
	}),
	emits: /*@__PURE__*/ Ae(["createNode"], ["update:path"]),
	setup(t, { emit: n }) {
		let i = he(t, "path"), o = n, u = s(!1), d = s(""), f = p(), m = pe("nameInput");
		function h() {
			let e = d.value.trim(), t = m.value?.$el?.querySelector("input"), n = "";
			try {
				Qe(e);
			} catch (e) {
				if (!(e instanceof Ze)) throw e;
				switch (e.reason) {
					case Xe.Character:
						n = T("\"{char}\" is not allowed inside a folder name.", { char: e.segment });
						break;
					case Xe.ReservedName:
						n = T("\"{segment}\" is a reserved name and not allowed for folder names.", { segment: e.segment });
						break;
					case Xe.Extension:
						n = T("Folder names must not end with \"{extension}\".", { extension: e.segment });
						break;
					default: n = T("Invalid folder name.");
				}
			}
			return t && t.setCustomValidity(n), n === "";
		}
		function _() {
			let e = d.value.trim();
			h() ? (u.value = !1, o("createNode", e), d.value = "") : m.value?.$el?.querySelector("input")?.reportValidity();
		}
		let v = y(() => i.value.split("/").filter((e) => e !== "").map((e, t, n) => ({
			name: e,
			path: "/" + n.slice(0, t + 1).join("/")
		})));
		return (n, o) => (A(), g(e(Se), { class: "file-picker__breadcrumbs" }, Oe({
			default: a(() => [O(e(_e), {
				name: e(T)("All files"),
				title: e(T)("Home"),
				onClick: o[0] ||= (e) => i.value = "/"
			}, {
				icon: a(() => [O(sc, { size: 20 })]),
				_: 1
			}, 8, ["name", "title"]), (A(!0), D(c, null, Pe(v.value, (t) => (A(), g(e(_e), {
				key: t.path,
				name: t.name,
				title: t.path,
				onClick: (e) => i.value = t.path
			}, null, 8, [
				"name",
				"title",
				"onClick"
			]))), 128))]),
			_: 2
		}, [t.showMenu ? {
			name: "actions",
			fn: a(() => [O(e(r), {
				shown: u.value,
				"onUpdate:shown": o[3] ||= (e) => u.value = e,
				popupRole: "dialog",
				onAfterHide: o[4] ||= (e) => d.value = ""
			}, {
				trigger: a(() => [O(e(ge), {
					"aria-label": e(T)("Create directory"),
					variant: "secondary"
				}, {
					icon: a(() => [O(pc, { size: 20 })]),
					default: a(() => [ye(" " + k(e(T)("New")), 1)]),
					_: 1
				}, 8, ["aria-label"])]),
				default: a(() => [S("form", {
					class: "file-picker__new-folder",
					role: "dialog",
					"aria-label": e(T)("Create directory"),
					onSubmit: we(_, ["prevent"]),
					onKeydown: o[2] ||= l((e) => u.value = !1, ["esc"])
				}, [
					O(Os, { size: 20 }),
					S("label", {
						class: "file-picker__new-folder-label",
						for: e(f)
					}, k(e(T)("New folder")), 9, hc),
					O(e(ve), {
						id: e(f),
						ref_key: "nameInput",
						ref: m,
						modelValue: d.value,
						"onUpdate:modelValue": [o[1] ||= (e) => d.value = e, h],
						class: "file-picker__new-folder-input",
						labelOutside: "",
						placeholder: e(T)("New folder name"),
						showTrailingButton: "",
						trailingButtonIcon: "arrowEnd",
						trailingButtonLabel: e(T)("Create directory"),
						onTrailingButtonClick: _
					}, null, 8, [
						"id",
						"modelValue",
						"placeholder",
						"trailingButtonLabel"
					])
				], 40, mc)]),
				_: 1
			}, 8, ["shown"])]),
			key: "0"
		} : void 0]), 1024));
	}
}), [["__scopeId", "data-v-5eb8b83a"]]), _c = {
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
}, vc = ["aria-hidden", "aria-label"], yc = [
	"fill",
	"width",
	"height"
], bc = { key: 0 };
function xc(e, n, r, i, a, o) {
	return A(), D("span", E(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: n[0] ||= (t) => e.$emit("click", t)
	}), [(A(), D("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (A(), D("title", bc, k(r.title), 1)) : t("", !0), n[1] ||= S("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, null, -1)], 8, yc))], 16, vc);
}
var Sc = /*#__PURE__*/ j(_c, [["render", xc]]), Cc = {
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
}, wc = ["aria-hidden", "aria-label"], Tc = [
	"fill",
	"width",
	"height"
], Ec = { key: 0 };
function Dc(e, n, r, i, a, o) {
	return A(), D("span", E(e.$attrs, {
		"aria-hidden": r.title ? null : "true",
		"aria-label": r.title,
		class: "material-design-icon magnify-icon",
		role: "img",
		onClick: n[0] ||= (t) => e.$emit("click", t)
	}), [(A(), D("svg", {
		fill: r.fillColor,
		class: "material-design-icon__svg",
		width: r.size,
		height: r.size,
		viewBox: "0 0 24 24"
	}, [r.title ? (A(), D("title", Ec, k(r.title), 1)) : t("", !0), n[1] ||= S("path", { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, null, -1)], 8, Tc))], 16, wc);
}
var Oc = /*#__PURE__*/ j(Cc, [["render", Dc]]);
function kc(e) {
	let t = [
		{
			id: "files",
			label: T("All files"),
			icon: St
		},
		{
			id: "recent",
			label: T("Recent"),
			icon: xt
		},
		{
			id: "favorites",
			label: T("Favorites"),
			icon: Et
		}
	];
	return {
		allViews: t,
		availableViews: e.value ? t.filter(({ id: e }) => e === "files") : t
	};
}
var Ac = {
	key: 0,
	class: "file-picker__side"
}, jc = /*#__PURE__*/ j(/* @__PURE__ */ ue({
	__name: "FilePickerNavigation",
	props: {
		currentView: {},
		filterString: {},
		isCollapsed: { type: Boolean },
		disabledNavigation: { type: Boolean }
	},
	emits: ["update:currentView", "update:filterString"],
	setup(r, { emit: i }) {
		let o = r, l = i, { availableViews: u } = kc(s(n() === null)), d = y(() => u.filter((e) => e.id === o.currentView)[0] ?? u[0]), f = (e) => l("update:filterString", e.toString());
		return (n, i) => (A(), D(c, null, [O(e(ve), {
			class: "file-picker__filter-input",
			label: e(T)("Filter file list"),
			showTrailingButton: !!r.filterString,
			modelValue: r.filterString,
			"onUpdate:modelValue": f,
			onTrailingButtonClick: i[0] ||= (e) => f("")
		}, {
			"trailing-button-icon": a(() => [O(Sc, { size: 16 })]),
			default: a(() => [O(Oc, { size: 16 })]),
			_: 1
		}, 8, [
			"label",
			"showTrailingButton",
			"modelValue"
		]), e(u).length > 1 && !r.disabledNavigation ? (A(), D(c, { key: 0 }, [r.isCollapsed ? (A(), g(e(De), {
			key: 1,
			"aria-label": e(T)("Current view selector"),
			clearable: !1,
			searchable: !1,
			options: e(u),
			modelValue: d.value,
			"onUpdate:modelValue": i[1] ||= (e) => l("update:currentView", e.id)
		}, null, 8, [
			"aria-label",
			"options",
			"modelValue"
		])) : (A(), D("ul", Ac, [(A(!0), D(c, null, Pe(e(u), (t) => (A(), D("li", { key: t.id }, [O(e(ge), {
			variant: r.currentView === t.id ? "primary" : "tertiary",
			wide: !0,
			onClick: (e) => n.$emit("update:currentView", t.id)
		}, {
			icon: a(() => [O(e(w), {
				path: t.icon,
				size: 20
			}, null, 8, ["path"])]),
			default: a(() => [ye(" " + k(t.label), 1)]),
			_: 2
		}, 1032, ["variant", "onClick"])]))), 128))]))], 64)) : t("", !0)], 64));
	}
}), [["__scopeId", "data-v-e1c54e23"]]);
async function Mc({ client: e, signal: t }) {
	let n = Math.round(Date.now() / 1e3) - 1209600, { data: r } = await e.search("/", {
		signal: t,
		details: !0,
		data: Zo(n)
	});
	return r.results.map((e) => is(e));
}
async function Nc({ client: e, path: t, signal: n }) {
	let r = (await e.getDirectoryContents(Ee($o, t), {
		signal: n,
		details: !0,
		includeSelf: !0,
		data: Yo()
	})).data.map((e) => is(e));
	return {
		contents: r.filter(({ path: e }) => e !== t),
		folder: r.find(({ path: e }) => t === e)
	};
}
async function Pc(e, t) {
	let { data: n } = await e.stat(Ee($o, t), {
		details: !0,
		data: Yo()
	});
	return is(n);
}
function Fc(e, t) {
	let n = ns(), r = Ce([]), i = Ce(null), a = s(!0), o;
	async function c(e) {
		let i = Ee(t.value, e);
		await n.createDirectory(Ee($o, i));
		let a = await Pc(n, i);
		return r.value = [...r.value, a], a;
	}
	async function l() {
		o && o.abort();
		let s = new AbortController();
		o = s, a.value = !0;
		try {
			if (e.value === "favorites") r.value = await rs({
				client: n,
				path: t.value,
				signal: s.signal
			}), i.value = null;
			else if (e.value === "recent") r.value = await Mc({
				client: n,
				signal: s.signal
			}), i.value = null;
			else {
				let e = await Nc({
					client: n,
					path: t.value,
					signal: s.signal
				});
				i.value = e.folder, r.value = e.contents;
			}
		} catch (e) {
			if (e instanceof Error && e.name === "AbortError") return;
			throw e;
		} finally {
			o === s && (o = void 0, a.value = !1);
		}
	}
	return f([e, t], () => l()), ee(() => l()), {
		isLoading: a,
		files: r,
		folder: i,
		loadFiles: l,
		createDirectory: c
	};
}
function Ic(e) {
	let t = y(() => e.value.map((e) => e.split("/")));
	return { isSupportedMimeType: (e) => {
		let n = e.split("/");
		return t.value.some(([e, t]) => (n[0] === e || e === "*") && (n[1] === t || t === "*"));
	} };
}
var Lc = { class: "file-picker__main" }, Rc = {
	key: 1,
	class: "file-picker__view"
}, zc = /*#__PURE__*/ j(/* @__PURE__ */ ue({
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
	setup(t, { emit: n }) {
		let r = t, i = n, o = s(!0), c = s("files"), l = s(window?.sessionStorage.getItem("NC.FilePicker.LastPath") || "/"), u = s(""), d = y({
			get: () => c.value === "files" ? u.value || r.path || l.value : "/",
			set: (e) => {
				u.value = e;
			}
		}), p = Ce([]), m = s(""), { files: h, folder: _, isLoading: v, loadFiles: x, createDirectory: te } = Fc(c, d);
		f([u], () => {
			r.path === void 0 && u.value && window.sessionStorage.setItem("NC.FilePicker.LastPath", u.value), p.value = [], m.value = "";
		});
		let ne = !1, w = y(() => {
			let e = p.value.length === 0 && r.allowPickDirectory && _.value && (!r.canPickFn || r.canPickFn(_.value)) ? [_.value] : p.value;
			return (typeof r.buttons == "function" ? r.buttons(e, d.value, c.value) : r.buttons).map((t) => ({
				...t,
				disabled: t.disabled || v.value,
				callback: () => {
					ne = !0, E(t.callback, e);
				}
			}));
		});
		async function E(e, t) {
			await e(t), i("close", t), ne = !1;
		}
		let ie = y(() => c.value === "favorites" ? T("Favorites") : c.value === "recent" ? T("Recent") : ""), { isSupportedMimeType: ae } = Ic(b(r, "mimetypeFilter"));
		ee(() => x());
		let { showHiddenFiles: oe } = Ws(), se = y(() => {
			let e = h.value;
			return oe.value || (e = e.filter((e) => !e.basename.startsWith("."))), r.mimetypeFilter.length > 0 && (e = e.filter((e) => e.type === "folder" || e.mime && ae(e.mime))), m.value && (e = e.filter((e) => e.basename.toLowerCase().includes(m.value.toLowerCase()))), r.filterFn && (e = e.filter((e) => r.filterFn(e))), e;
		}), le = y(() => c.value === "files" ? T("Upload some content or sync with your devices!") : c.value === "recent" ? T("Files and folders you recently modified will show up here.") : T("Files and folders you mark as favorite will show up here."));
		async function ue(e) {
			try {
				let t = await te(e);
				u.value = t.path, me("files:node:created", h.value.filter((t) => t.basename === e)[0]);
			} catch (t) {
				C.warn("Could not create new folder", {
					name: e,
					error: t
				}), ke(T("Could not create the new folder"));
			}
		}
		function de(e) {
			!e && !ne && i("close");
		}
		return (n, r) => (A(), g(e(ce), {
			open: o.value,
			"onUpdate:open": [r[6] ||= (e) => o.value = e, de],
			buttons: w.value,
			name: t.name,
			size: "large",
			contentClasses: "file-picker__content",
			dialogClasses: "file-picker",
			navigationClasses: "file-picker__navigation"
		}, {
			navigation: a(({ isCollapsed: e }) => [O(jc, {
				currentView: c.value,
				"onUpdate:currentView": r[0] ||= (e) => c.value = e,
				filterString: m.value,
				"onUpdate:filterString": r[1] ||= (e) => m.value = e,
				isCollapsed: e,
				disabledNavigation: t.disabledNavigation
			}, null, 8, [
				"currentView",
				"filterString",
				"isCollapsed",
				"disabledNavigation"
			])]),
			default: a(() => [S("div", Lc, [c.value === "files" ? (A(), g(gc, {
				key: 0,
				path: d.value,
				"onUpdate:path": r[2] ||= (e) => d.value = e,
				showMenu: !t.noMenu,
				onCreateNode: ue
			}, null, 8, ["path", "showMenu"])) : (A(), D("div", Rc, [S("h3", null, k(ie.value), 1)])), e(v) || se.value.length > 0 ? (A(), g(tc, {
				key: 2,
				path: d.value,
				"onUpdate:path": [r[3] ||= (e) => d.value = e, r[5] ||= (e) => c.value = "files"],
				selectedFiles: p.value,
				"onUpdate:selectedFiles": r[4] ||= (e) => p.value = e,
				allowPickDirectory: t.allowPickDirectory,
				currentView: c.value,
				files: se.value,
				multiselect: t.multiselect,
				loading: e(v),
				name: ie.value,
				canPick: t.canPickFn
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
			])) : m.value ? (A(), g(e(re), {
				key: 3,
				name: e(T)("No matching files"),
				description: e(T)("No files matching your filter were found.")
			}, {
				icon: a(() => [O(us)]),
				_: 1
			}, 8, ["name", "description"])) : (A(), g(e(re), {
				key: 4,
				name: e(T)("No files in here"),
				description: le.value
			}, {
				icon: a(() => [O(us)]),
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
export { zc as default };
