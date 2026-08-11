import { F as e, P as t } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { i as n } from "./NcPopover-B87bEPLq-Bfc7fZbF.chunk.mjs";
import { c as r, d as i, l as a, s as o, u as s, v as c } from "./chunks-tk4b0tDJ.chunk.mjs";
window._nc_files_scope ??= {}, window._nc_files_scope.v4_0 ??= {};
var l = window._nc_files_scope.v4_0;
n().setApp("@nextcloud/files").detectUser().build();
var u = Object.freeze({
	Folder: "folder",
	File: "file"
}), d = Object.freeze({
	NONE: 0,
	READ: 1,
	UPDATE: 2,
	CREATE: 4,
	WRITE: 4,
	DELETE: 8,
	SHARE: 16,
	ALL: 31
}), f = Object.freeze({
	NEW: "new",
	FAILED: "failed",
	LOADING: "loading",
	LOCKED: "locked"
});
function p(e, t) {
	return e.match(t) !== null;
}
function m(e, t) {
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
	if (p(e.source, t)) {
		let n = e.source.match(t)[0];
		if (!e.source.includes(i(n, e.root))) throw Error("The root must be relative to the service. e.g /files/emma");
	}
	if (e.displayname && typeof e.displayname != "string") throw Error("Invalid displayname type");
	if (e.mtime && !(e.mtime instanceof Date)) throw Error("Invalid mtime type");
	if (e.crtime && !(e.crtime instanceof Date)) throw Error("Invalid crtime type");
	if (!e.mime || typeof e.mime != "string" || !e.mime.match(/^[-\w.]+\/[-+\w.]+$/gi)) throw Error("Missing or invalid mandatory mime");
	if ("size" in e && typeof e.size != "number" && e.size !== void 0) throw Error("Invalid size type");
	if ("permissions" in e && e.permissions !== void 0 && !(typeof e.permissions == "number" && e.permissions >= d.NONE && e.permissions <= d.ALL)) throw Error("Invalid permissions");
	if (e.owner && e.owner !== null && typeof e.owner != "string") throw Error("Invalid owner type");
	if (e.attributes && typeof e.attributes != "object") throw Error("Invalid attributes type");
	if (e.status && !Object.values(f).includes(e.status)) throw Error("Status must be a valid NodeStatus");
}
function h(e) {
	e.mtime && typeof e.mtime == "string" && !isNaN(Date.parse(e.mtime)) && JSON.stringify(new Date(e.mtime)) === JSON.stringify(e.mtime) && (e.mtime = new Date(e.mtime)), e.crtime && typeof e.crtime == "string" && !isNaN(Date.parse(e.crtime)) && JSON.stringify(new Date(e.crtime)) === JSON.stringify(e.crtime) && (e.crtime = new Date(e.crtime));
}
function g(e) {
	if (e instanceof RegExp) return e;
	let t = e.match(/(\/?)(.+)\1([a-z]*)/i);
	if (!t) throw Error("Invalid regular expression format.");
	let n = Array.from(new Set(t[3])).filter((e) => "gimsuy".includes(e)).join("");
	return new RegExp(t[2], n);
}
var _ = class e {
	_attributes;
	_data;
	_knownDavService = /(remote|public)\.php\/(web)?dav/i;
	readonlyAttributes = Object.entries(Object.getOwnPropertyDescriptors(e.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]);
	handler = {
		set: (e, t, n) => !this.readonlyAttributes.includes(t) && Reflect.set(e, t, n),
		deleteProperty: (e, t) => !this.readonlyAttributes.includes(t) && Reflect.deleteProperty(e, t)
	};
	constructor(...[e, t]) {
		e.mime ||= "application/octet-stream", h(e), t = g(t || this._knownDavService), m(e, t), this._data = {
			...e,
			attributes: {}
		}, this._attributes = new Proxy(this._data.attributes, this.handler), this.update(e.attributes ?? {}), t && (this._knownDavService = t);
	}
	get source() {
		return this._data.source.replace(/\/$/i, "");
	}
	get encodedSource() {
		let { origin: e } = new URL(this.source);
		return e + a(this.source.slice(e.length));
	}
	get basename() {
		return o(this.source);
	}
	get displayname() {
		return this._data.displayname || this.basename;
	}
	set displayname(e) {
		m({
			...this._data,
			displayname: e
		}, this._knownDavService), this._data.displayname = e;
	}
	get extension() {
		return s(this.source);
	}
	get dirname() {
		return r(this.path);
	}
	get mime() {
		return this._data.mime || "application/octet-stream";
	}
	set mime(e) {
		e ??= "application/octet-stream", m({
			...this._data,
			mime: e
		}, this._knownDavService), this._data.mime = e;
	}
	get mtime() {
		return this._data.mtime;
	}
	set mtime(e) {
		m({
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
		m({
			...this._data,
			size: e
		}, this._knownDavService), this.updateMtime(), this._data.size = e;
	}
	get attributes() {
		return this._attributes;
	}
	get permissions() {
		return this.owner === null && !this.isDavResource ? d.READ : this._data.permissions === void 0 ? d.NONE : this._data.permissions;
	}
	set permissions(e) {
		m({
			...this._data,
			permissions: e
		}, this._knownDavService), this.updateMtime(), this._data.permissions = e;
	}
	get owner() {
		return this.isDavResource ? this._data.owner : null;
	}
	get isDavResource() {
		return p(this.source, this._knownDavService);
	}
	get root() {
		return this._data.root.replace(/^(.+)\/$/, "$1");
	}
	get path() {
		let e = this.source.indexOf("://"), t = this.source.slice(0, e), n = this.source.slice(e + 3), r = n.indexOf("/"), i = n.slice(0, r), o = n.slice(r), s = `${t}://${i}${a(o)}`, c = new URL(s), l = decodeURIComponent(c.pathname);
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
		m({
			...this._data,
			status: e
		}, this._knownDavService), this._data.status = e;
	}
	move(e) {
		m({
			...this._data,
			source: e
		}, this._knownDavService);
		let t = this.basename;
		this._data.source = e, this.displayname === t && this.basename !== t && (this.displayname = this.basename);
	}
	rename(e) {
		if (e.includes("/")) throw Error("Invalid basename");
		this.move(r(this.source) + "/" + e);
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
}, v = class extends _ {
	constructor(...[e, t]) {
		super(e, t);
	}
	get type() {
		return u.File;
	}
}, y = class extends _ {
	constructor(...[e, t]) {
		super({
			...e,
			mime: "httpd/unix-directory"
		}, t);
	}
	get type() {
		return u.Folder;
	}
	get extension() {
		return null;
	}
	get mime() {
		return "httpd/unix-directory";
	}
};
Object.freeze({
	DEFAULT: "default",
	HIDDEN: "hidden"
}), Object.freeze({
	UploadFromDevice: 0,
	CreateNew: 1,
	Other: 2
});
var b = Object.freeze({
	ReservedName: "reserved name",
	Character: "character",
	Extension: "extension"
}), x = class extends Error {
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
function S(e) {
	let t = c().files, n = t.forbidden_filename_characters ?? ["/", "\\"];
	for (let t of n) if (e.includes(t)) throw new x({
		segment: t,
		reason: b.Character,
		filename: e
	});
	if (e = e.toLocaleLowerCase(), (t.forbidden_filenames ?? [".htaccess"]).includes(e)) throw new x({
		filename: e,
		segment: e,
		reason: b.ReservedName
	});
	let r = e.indexOf(".", 1), i = e.substring(0, r === -1 ? void 0 : r);
	if ((t.forbidden_filename_basenames ?? []).includes(i)) throw new x({
		filename: e,
		segment: i,
		reason: b.ReservedName
	});
	let a = t.forbidden_filename_extensions ?? [];
	for (let t of a) if (e.length > t.length && e.endsWith(t)) throw new x({
		segment: t,
		reason: b.Extension,
		filename: e
	});
}
var C = [
	"B",
	"KB",
	"MB",
	"GB",
	"TB",
	"PB"
], w = [
	"B",
	"KiB",
	"MiB",
	"GiB",
	"TiB",
	"PiB"
];
function T(e, n = !1, r = !1, i = !1) {
	r &&= !i, typeof e == "string" && (e = Number(e));
	let a = e > 0 ? Math.floor(Math.log(e) / Math.log(i ? 1e3 : 1024)) : 0;
	a = Math.min((r ? w.length : C.length) - 1, a);
	let o = r ? w[a] : C[a], s = (e / (i ? 1e3 : 1024) ** a).toFixed(1);
	return n === !0 && a === 0 ? (s === "0.0" ? "0 " : "< 1 ") + (r ? w[1] : C[1]) : (s = a < 2 ? parseFloat(s).toFixed(0) : parseFloat(s).toLocaleString(t()), s + " " + o);
}
function E(e) {
	return e instanceof Date ? e.toISOString() : String(e);
}
function D(n, r, i) {
	r ??= [(e) => e], i ??= [];
	let a = r.map((e, t) => (i[t] ?? "asc") === "asc" ? 1 : -1), o = Intl.Collator([e(), t()], {
		numeric: !0,
		usage: "sort"
	});
	return [...n].sort((e, t) => {
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
		return e.type === u.Folder ? t : t.lastIndexOf(".") > 0 ? t.slice(0, t.lastIndexOf(".")) : t;
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
//#region node_modules/@nextcloud/dialogs/dist/chunks/_plugin-vue_export-helper.mjs
var A = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
//#endregion
export { k as a, u as c, d, l as f, T as i, y as l, x as n, S as o, b as r, v as s, A as t, f as u };
