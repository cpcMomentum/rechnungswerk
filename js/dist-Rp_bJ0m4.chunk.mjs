import { n as e } from "./logger-Dmvqkkgn.chunk.mjs";
import { Ct as t, St as n } from "./createElementId-XLh0NVJk.chunk.mjs";
import { C as r, S as i, b as a, k as o, x as s, y as c } from "./chunks-C8_Df2hW.chunk.mjs";
//#region node_modules/@nextcloud/files/dist/chunks/logger.mjs
var l = Object.freeze({
	Folder: "folder",
	File: "file"
}), u = Object.freeze({
	NONE: 0,
	READ: 1,
	UPDATE: 2,
	CREATE: 4,
	WRITE: 4,
	DELETE: 8,
	SHARE: 16,
	ALL: 31
}), d = Object.freeze({
	NEW: "new",
	FAILED: "failed",
	LOADING: "loading",
	LOCKED: "locked"
});
function f(e, t) {
	return e.match(t) !== null;
}
function p(e, t) {
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
	if (f(e.source, t)) {
		let n = e.source.match(t)[0];
		if (!e.source.includes(r(n, e.root))) throw Error("The root must be relative to the service. e.g /files/emma");
	}
	if (e.displayname && typeof e.displayname != "string") throw Error("Invalid displayname type");
	if (e.mtime && !(e.mtime instanceof Date)) throw Error("Invalid mtime type");
	if (e.crtime && !(e.crtime instanceof Date)) throw Error("Invalid crtime type");
	if (!e.mime || typeof e.mime != "string" || !e.mime.match(/^[-\w.]+\/[-+\w.]+$/gi)) throw Error("Missing or invalid mandatory mime");
	if ("size" in e && typeof e.size != "number" && e.size !== void 0) throw Error("Invalid size type");
	if ("permissions" in e && e.permissions !== void 0 && !(typeof e.permissions == "number" && e.permissions >= u.NONE && e.permissions <= u.ALL)) throw Error("Invalid permissions");
	if (e.owner && e.owner !== null && typeof e.owner != "string") throw Error("Invalid owner type");
	if (e.attributes && typeof e.attributes != "object") throw Error("Invalid attributes type");
	if (e.status && !Object.values(d).includes(e.status)) throw Error("Status must be a valid NodeStatus");
}
function m(e) {
	e.mtime && typeof e.mtime == "string" && !isNaN(Date.parse(e.mtime)) && JSON.stringify(new Date(e.mtime)) === JSON.stringify(e.mtime) && (e.mtime = new Date(e.mtime)), e.crtime && typeof e.crtime == "string" && !isNaN(Date.parse(e.crtime)) && JSON.stringify(new Date(e.crtime)) === JSON.stringify(e.crtime) && (e.crtime = new Date(e.crtime));
}
function h(e) {
	if (e instanceof RegExp) return e;
	let t = e.match(/(\/?)(.+)\1([a-z]*)/i);
	if (!t) throw Error("Invalid regular expression format.");
	let n = Array.from(new Set(t[3])).filter((e) => "gimsuy".includes(e)).join("");
	return new RegExp(t[2], n);
}
var g = class e {
	_attributes;
	_data;
	_knownDavService = /(remote|public)\.php\/(web)?dav/i;
	readonlyAttributes = Object.entries(Object.getOwnPropertyDescriptors(e.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]);
	handler = {
		set: (e, t, n) => !this.readonlyAttributes.includes(t) && Reflect.set(e, t, n),
		deleteProperty: (e, t) => !this.readonlyAttributes.includes(t) && Reflect.deleteProperty(e, t)
	};
	constructor(...[e, t]) {
		e.mime ||= "application/octet-stream", m(e), t = h(t || this._knownDavService), p(e, t), this._data = {
			...e,
			attributes: {}
		}, this._attributes = new Proxy(this._data.attributes, this.handler), this.update(e.attributes ?? {}), t && (this._knownDavService = t);
	}
	get source() {
		return this._data.source.replace(/\/$/i, "");
	}
	get encodedSource() {
		let { origin: e } = new URL(this.source);
		return e + s(this.source.slice(e.length));
	}
	get basename() {
		return c(this.source);
	}
	get displayname() {
		return this._data.displayname || this.basename;
	}
	set displayname(e) {
		p({
			...this._data,
			displayname: e
		}, this._knownDavService), this._data.displayname = e;
	}
	get extension() {
		return i(this.source);
	}
	get dirname() {
		return a(this.path);
	}
	get mime() {
		return this._data.mime || "application/octet-stream";
	}
	set mime(e) {
		e ??= "application/octet-stream", p({
			...this._data,
			mime: e
		}, this._knownDavService), this._data.mime = e;
	}
	get mtime() {
		return this._data.mtime;
	}
	set mtime(e) {
		p({
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
		p({
			...this._data,
			size: e
		}, this._knownDavService), this.updateMtime(), this._data.size = e;
	}
	get attributes() {
		return this._attributes;
	}
	get permissions() {
		return this.owner === null && !this.isDavResource ? u.READ : this._data.permissions === void 0 ? u.NONE : this._data.permissions;
	}
	set permissions(e) {
		p({
			...this._data,
			permissions: e
		}, this._knownDavService), this.updateMtime(), this._data.permissions = e;
	}
	get owner() {
		return this.isDavResource ? this._data.owner : null;
	}
	get isDavResource() {
		return f(this.source, this._knownDavService);
	}
	get root() {
		return this._data.root.replace(/^(.+)\/$/, "$1");
	}
	get path() {
		let e = this.source.indexOf("://"), t = this.source.slice(0, e), n = this.source.slice(e + 3), r = n.indexOf("/"), i = n.slice(0, r), a = n.slice(r), o = `${t}://${i}${s(a)}`, c = new URL(o), l = decodeURIComponent(c.pathname);
		this.isDavResource && (l = l.split(this._knownDavService).pop());
		let u = l.indexOf(this.root), d = this.root.replace(/\/$/, "");
		return l.slice(u + d.length) || "/";
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
		p({
			...this._data,
			status: e
		}, this._knownDavService), this._data.status = e;
	}
	move(e) {
		p({
			...this._data,
			source: e
		}, this._knownDavService);
		let t = this.basename;
		this._data.source = e, this.displayname === t && this.basename !== t && (this.displayname = this.basename);
	}
	rename(e) {
		if (e.includes("/")) throw Error("Invalid basename");
		this.move(a(this.source) + "/" + e);
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
}, _ = class extends g {
	constructor(...[e, t]) {
		super(e, t);
	}
	get type() {
		return l.File;
	}
}, v = class extends g {
	constructor(...[e, t]) {
		super({
			...e,
			mime: "httpd/unix-directory"
		}, t);
	}
	get type() {
		return l.Folder;
	}
	get extension() {
		return null;
	}
	get mime() {
		return "httpd/unix-directory";
	}
};
window._nc_files_scope ??= {}, window._nc_files_scope.v4_0 ??= {};
var y = window._nc_files_scope.v4_0;
e().setApp("@nextcloud/files").detectUser().build();
//#endregion
//#region node_modules/@nextcloud/files/dist/chunks/fileSize.mjs
var b = [
	"B",
	"KB",
	"MB",
	"GB",
	"TB",
	"PB"
], x = [
	"B",
	"KiB",
	"MiB",
	"GiB",
	"TiB",
	"PiB"
];
function S(e, t = !1, r = !1, i = !1) {
	r &&= !i, typeof e == "string" && (e = Number(e));
	let a = e > 0 ? Math.floor(Math.log(e) / Math.log(i ? 1e3 : 1024)) : 0;
	a = Math.min((r ? x.length : b.length) - 1, a);
	let o = r ? x[a] : b[a], s = (e / (i ? 1e3 : 1024) ** a).toFixed(1);
	return t === !0 && a === 0 ? (s === "0.0" ? "0 " : "< 1 ") + (r ? x[1] : b[1]) : (s = a < 2 ? parseFloat(s).toFixed(0) : parseFloat(s).toLocaleString(n()), s + " " + o);
}
Object.freeze({
	DEFAULT: "default",
	HIDDEN: "hidden"
}), Object.freeze({
	UploadFromDevice: 0,
	CreateNew: 1,
	Other: 2
});
var C = Object.freeze({
	ReservedName: "reserved name",
	Character: "character",
	Extension: "extension"
}), w = class extends Error {
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
function T(e) {
	let t = o().files, n = t.forbidden_filename_characters ?? ["/", "\\"];
	for (let t of n) if (e.includes(t)) throw new w({
		segment: t,
		reason: C.Character,
		filename: e
	});
	if (e = e.toLocaleLowerCase(), (t.forbidden_filenames ?? [".htaccess"]).includes(e)) throw new w({
		filename: e,
		segment: e,
		reason: C.ReservedName
	});
	let r = e.indexOf(".", 1), i = e.substring(0, r === -1 ? void 0 : r);
	if ((t.forbidden_filename_basenames ?? []).includes(i)) throw new w({
		filename: e,
		segment: i,
		reason: C.ReservedName
	});
	let a = t.forbidden_filename_extensions ?? [];
	for (let t of a) if (e.length > t.length && e.endsWith(t)) throw new w({
		segment: t,
		reason: C.Extension,
		filename: e
	});
}
function E(e) {
	return e instanceof Date ? e.toISOString() : String(e);
}
function D(e, r, i) {
	r ??= [(e) => e], i ??= [];
	let a = r.map((e, t) => (i[t] ?? "asc") === "asc" ? 1 : -1), o = Intl.Collator([t(), n()], {
		numeric: !0,
		usage: "sort"
	});
	return [...e].sort((e, t) => {
		for (let [n, i] of r.entries()) {
			let r = o.compare(E(i(e)), E(i(t)));
			if (r !== 0) return r * a[n];
		}
		return 0;
	});
}
var O = Object.freeze({
	Name: "basename",
	Modified: "mtime",
	Size: "size"
});
function k(e, t = {}) {
	let n = {
		sortingMode: O.Name,
		sortingOrder: "asc",
		...t
	};
	function r(e) {
		let t = e.displayname || e.attributes?.displayname || e.basename || "";
		return e.type === l.Folder ? t : t.lastIndexOf(".") > 0 ? t.slice(0, t.lastIndexOf(".")) : t;
	}
	return D(e, [
		...n.sortFavoritesFirst ? [(e) => e.attributes?.favorite !== 1] : [],
		...n.sortFoldersFirst ? [(e) => e.type !== "folder"] : [],
		...n.sortingMode === O.Name ? [] : [(e) => e[n.sortingMode] ?? e.attributes[n.sortingMode]],
		(e) => r(e),
		(e) => e.basename
	], [
		...n.sortFavoritesFirst ? ["asc"] : [],
		...n.sortFoldersFirst ? ["asc"] : [],
		...n.sortingMode === O.Modified ? [n.sortingOrder === "asc" ? "desc" : "asc"] : [],
		...n.sortingMode !== O.Modified && n.sortingMode !== O.Name ? [n.sortingOrder] : [],
		n.sortingOrder,
		n.sortingOrder
	]);
}
//#endregion
export { S as a, v as c, y as d, T as i, d as l, C as n, _ as o, k as r, l as s, w as t, u };
