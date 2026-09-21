//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), u = (e) => "/remote.php/" + e;
function d(e, t) {
	return v(t), (t?.baseURL ?? h()) + u(e);
}
function f(e, t, n) {
	let r = {
		ocsVersion: 2,
		...n || {}
	};
	v(r);
	let i = r.ocsVersion === 1 ? 1 : 2;
	return (n?.baseURL ?? h()) + "/ocs/v" + i + ".php" + p(e, t, n);
}
function p(e, t, n) {
	let r = {
		escape: !0,
		...n || {}
	};
	return e.charAt(0) !== "/" && (e = "/" + e), function(e, t) {
		return t ||= {}, e.replace(/{([^{}]*)}/g, function(e, n) {
			let i = t[n];
			return r.escape ? encodeURIComponent(typeof i == "string" || typeof i == "number" ? i.toString() : e) : typeof i == "string" || typeof i == "number" ? i.toString() : e;
		});
	}(e, t || {});
}
function m(e, t, n) {
	let r = {
		noRewrite: !1,
		...n || {}
	};
	v(r);
	let i = n?.baseURL ?? g();
	return !r.noRewrite && typeof window < "u" && window.OC?.config?.modRewriteWorking === !0 ? i + p(e, t, n) : i + "/index.php" + p(e, t, n);
}
function h() {
	return _(), window.location.protocol + "//" + window.location.host + g();
}
function g() {
	_();
	let e = window._oc_webroot;
	if (e === void 0) {
		e = location.pathname;
		let t = e.indexOf("/index.php/");
		if (t !== -1) e = e.slice(0, t);
		else {
			let t = e.indexOf("/", 1);
			e = e.slice(0, t > 0 ? t : void 0);
		}
	}
	return e;
}
function _() {
	if (typeof window > "u") throw Error("This function is only available in a DOM environment");
}
function v(e) {
	if (typeof window > "u" && !e?.baseURL) throw Error("This function requires baseURL option to be provided in non-DOM environments");
}
//#endregion
//#region node_modules/semver/internal/debug.js
var y = /* @__PURE__ */ o(((e, t) => {
	t.exports = typeof process == "object" && {}.NODE_DEBUG && /\bsemver\b/i.test({}.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
})), b = /* @__PURE__ */ o(((e, t) => {
	t.exports = {
		MAX_LENGTH: 256,
		MAX_SAFE_COMPONENT_LENGTH: 16,
		MAX_SAFE_BUILD_LENGTH: 250,
		MAX_SAFE_INTEGER: 2 ** 53 - 1 || 
		/* istanbul ignore next */ 9007199254740991,
		RELEASE_TYPES: [
			"major",
			"premajor",
			"minor",
			"preminor",
			"patch",
			"prepatch",
			"prerelease"
		],
		SEMVER_SPEC_VERSION: "2.0.0",
		FLAG_INCLUDE_PRERELEASE: 1,
		FLAG_LOOSE: 2
	};
})), x = /* @__PURE__ */ o(((e, t) => {
	var { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: r, MAX_LENGTH: i } = b(), a = y();
	e = t.exports = {};
	var o = e.re = [], s = e.safeRe = [], c = e.src = [], l = e.safeSrc = [], u = e.t = {}, d = 0, f = "[a-zA-Z0-9-]", p = [
		["\\s", 1],
		["\\d", i],
		[f, r]
	], m = (e) => {
		for (let [t, n] of p) e = e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);
		return e;
	}, h = (e, t, n) => {
		let r = m(t), i = d++;
		a(e, i, t), u[e] = i, c[i] = t, l[i] = r, o[i] = new RegExp(t, n ? "g" : void 0), s[i] = new RegExp(r, n ? "g" : void 0);
	};
	h("NUMERICIDENTIFIER", "0|[1-9]\\d*"), h("NUMERICIDENTIFIERLOOSE", "\\d+"), h("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`), h("MAINVERSION", `(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})`), h("MAINVERSIONLOOSE", `(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})`), h("PRERELEASEIDENTIFIER", `(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIER]})`), h("PRERELEASEIDENTIFIERLOOSE", `(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIERLOOSE]})`), h("PRERELEASE", `(?:-(${c[u.PRERELEASEIDENTIFIER]}(?:\\.${c[u.PRERELEASEIDENTIFIER]})*))`), h("PRERELEASELOOSE", `(?:-?(${c[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[u.PRERELEASEIDENTIFIERLOOSE]})*))`), h("BUILDIDENTIFIER", `${f}+`), h("BUILD", `(?:\\+(${c[u.BUILDIDENTIFIER]}(?:\\.${c[u.BUILDIDENTIFIER]})*))`), h("FULLPLAIN", `v?${c[u.MAINVERSION]}${c[u.PRERELEASE]}?${c[u.BUILD]}?`), h("FULL", `^${c[u.FULLPLAIN]}$`), h("LOOSEPLAIN", `[v=\\s]*${c[u.MAINVERSIONLOOSE]}${c[u.PRERELEASELOOSE]}?${c[u.BUILD]}?`), h("LOOSE", `^${c[u.LOOSEPLAIN]}$`), h("GTLT", "((?:<|>)?=?)"), h("XRANGEIDENTIFIERLOOSE", `${c[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), h("XRANGEIDENTIFIER", `${c[u.NUMERICIDENTIFIER]}|x|X|\\*`), h("XRANGEPLAIN", `[v=\\s]*(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:${c[u.PRERELEASE]})?${c[u.BUILD]}?)?)?`), h("XRANGEPLAINLOOSE", `[v=\\s]*(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:${c[u.PRERELEASELOOSE]})?${c[u.BUILD]}?)?)?`), h("XRANGE", `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAIN]}$`), h("XRANGELOOSE", `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAINLOOSE]}$`), h("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), h("COERCE", `${c[u.COERCEPLAIN]}(?:$|[^\\d])`), h("COERCEFULL", c[u.COERCEPLAIN] + `(?:${c[u.PRERELEASE]})?(?:${c[u.BUILD]})?(?:$|[^\\d])`), h("COERCERTL", c[u.COERCE], !0), h("COERCERTLFULL", c[u.COERCEFULL], !0), h("LONETILDE", "(?:~>?)"), h("TILDETRIM", `(\\s*)${c[u.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", h("TILDE", `^${c[u.LONETILDE]}${c[u.XRANGEPLAIN]}$`), h("TILDELOOSE", `^${c[u.LONETILDE]}${c[u.XRANGEPLAINLOOSE]}$`), h("LONECARET", "(?:\\^)"), h("CARETTRIM", `(\\s*)${c[u.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", h("CARET", `^${c[u.LONECARET]}${c[u.XRANGEPLAIN]}$`), h("CARETLOOSE", `^${c[u.LONECARET]}${c[u.XRANGEPLAINLOOSE]}$`), h("COMPARATORLOOSE", `^${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]})$|^$`), h("COMPARATOR", `^${c[u.GTLT]}\\s*(${c[u.FULLPLAIN]})$|^$`), h("COMPARATORTRIM", `(\\s*)${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]}|${c[u.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", h("HYPHENRANGE", `^\\s*(${c[u.XRANGEPLAIN]})\\s+-\\s+(${c[u.XRANGEPLAIN]})\\s*$`), h("HYPHENRANGELOOSE", `^\\s*(${c[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[u.XRANGEPLAINLOOSE]})\\s*$`), h("STAR", "(<|>)?=?\\s*\\*"), h("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), h("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})), S = /* @__PURE__ */ o(((e, t) => {
	var n = Object.freeze({ loose: !0 }), r = Object.freeze({});
	t.exports = (e) => e ? typeof e == "object" ? e : n : r;
})), C = /* @__PURE__ */ o(((e, t) => {
	var n = /^[0-9]+$/, r = (e, t) => {
		if (typeof e == "number" && typeof t == "number") return e === t ? 0 : e < t ? -1 : 1;
		let r = n.test(e), i = n.test(t);
		return r && i && (e = +e, t = +t), e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1;
	};
	t.exports = {
		compareIdentifiers: r,
		rcompareIdentifiers: (e, t) => r(t, e)
	};
})), w = /* @__PURE__ */ o(((e, t) => {
	var n = y(), { MAX_LENGTH: r, MAX_SAFE_INTEGER: i } = b(), { safeRe: a, t: o } = x(), s = S(), { compareIdentifiers: c } = C(), l = (e, t) => {
		let n = t.split(".");
		if (n.length > e.length) return !1;
		for (let t = 0; t < n.length; t++) if (c(e[t], n[t]) !== 0) return !1;
		return !0;
	};
	t.exports = class e {
		constructor(t, c) {
			if (c = s(c), t instanceof e) {
				if (t.loose === !!c.loose && t.includePrerelease === !!c.includePrerelease) return t;
				t = t.version;
			} else if (typeof t != "string") throw TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
			if (t.length > r) throw TypeError(`version is longer than ${r} characters`);
			n("SemVer", t, c), this.options = c, this.loose = !!c.loose, this.includePrerelease = !!c.includePrerelease;
			let l = t.trim().match(c.loose ? a[o.LOOSE] : a[o.FULL]);
			if (!l) throw TypeError(`Invalid Version: ${t}`);
			if (this.raw = t, this.major = +l[1], this.minor = +l[2], this.patch = +l[3], this.major > i || this.major < 0) throw TypeError("Invalid major version");
			if (this.minor > i || this.minor < 0) throw TypeError("Invalid minor version");
			if (this.patch > i || this.patch < 0) throw TypeError("Invalid patch version");
			this.prerelease = l[4] ? l[4].split(".").map((e) => {
				if (/^[0-9]+$/.test(e)) {
					let t = +e;
					if (t >= 0 && t < i) return t;
				}
				return e;
			}) : [], this.build = l[5] ? l[5].split(".") : [], this.format();
		}
		format() {
			return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
		}
		toString() {
			return this.version;
		}
		compare(t) {
			if (n("SemVer.compare", this.version, this.options, t), !(t instanceof e)) {
				if (typeof t == "string" && t === this.version) return 0;
				t = new e(t, this.options);
			}
			return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
		}
		compareMain(t) {
			return t instanceof e || (t = new e(t, this.options)), this.major < t.major ? -1 : this.major > t.major ? 1 : this.minor < t.minor ? -1 : this.minor > t.minor ? 1 : this.patch < t.patch ? -1 : +(this.patch > t.patch);
		}
		comparePre(t) {
			if (t instanceof e || (t = new e(t, this.options)), this.prerelease.length && !t.prerelease.length) return -1;
			if (!this.prerelease.length && t.prerelease.length) return 1;
			if (!this.prerelease.length && !t.prerelease.length) return 0;
			let r = 0;
			do {
				let e = this.prerelease[r], i = t.prerelease[r];
				if (n("prerelease compare", r, e, i), e === void 0 && i === void 0) return 0;
				if (i === void 0) return 1;
				if (e === void 0) return -1;
				if (e !== i) return c(e, i);
			} while (++r);
		}
		compareBuild(t) {
			t instanceof e || (t = new e(t, this.options));
			let r = 0;
			do {
				let e = this.build[r], i = t.build[r];
				if (n("build compare", r, e, i), e === void 0 && i === void 0) return 0;
				if (i === void 0) return 1;
				if (e === void 0) return -1;
				if (e !== i) return c(e, i);
			} while (++r);
		}
		inc(e, t, n) {
			if (e.startsWith("pre")) {
				if (!t && n === !1) throw Error("invalid increment argument: identifier is empty");
				if (t) {
					let e = `-${t}`.match(this.options.loose ? a[o.PRERELEASELOOSE] : a[o.PRERELEASE]);
					if (!e || e[1] !== t) throw Error(`invalid identifier: ${t}`);
				}
			}
			switch (e) {
				case "premajor":
					this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, n);
					break;
				case "preminor":
					this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, n);
					break;
				case "prepatch":
					this.prerelease.length = 0, this.inc("patch", t, n), this.inc("pre", t, n);
					break;
				case "prerelease":
					this.prerelease.length === 0 && this.inc("patch", t, n), this.inc("pre", t, n);
					break;
				case "release":
					if (this.prerelease.length === 0) throw Error(`version ${this.raw} is not a prerelease`);
					this.prerelease.length = 0;
					break;
				case "major":
					(this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
					break;
				case "minor":
					(this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
					break;
				case "patch":
					this.prerelease.length === 0 && this.patch++, this.prerelease = [];
					break;
				case "pre": {
					let e = +!!Number(n);
					if (this.prerelease.length === 0) this.prerelease = [e];
					else {
						let r = this.prerelease.length;
						for (; --r >= 0;) typeof this.prerelease[r] == "number" && (this.prerelease[r]++, r = -2);
						if (r === -1) {
							if (t === this.prerelease.join(".") && n === !1) throw Error("invalid increment argument: identifier already exists");
							this.prerelease.push(e);
						}
					}
					if (t) {
						let r = [t, e];
						if (n === !1 && (r = [t]), l(this.prerelease, t)) {
							let e = this.prerelease[t.split(".").length];
							isNaN(e) && (this.prerelease = r);
						} else this.prerelease = r;
					}
					break;
				}
				default: throw Error(`invalid increment argument: ${e}`);
			}
			return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
		}
	};
})), T = /* @__PURE__ */ o(((e, t) => {
	var n = w();
	t.exports = (e, t) => new n(e, t).major;
})), E = /* @__PURE__ */ o(((e, t) => {
	var n = w();
	t.exports = (e, t, r = !1) => {
		if (e instanceof n) return e;
		try {
			return new n(e, t);
		} catch (e) {
			if (!r) return null;
			throw e;
		}
	};
})), D = /* @__PURE__ */ o(((e, t) => {
	var n = E();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r ? r.version : null;
	};
})), O = /* @__PURE__ */ l(T(), 1), k = /* @__PURE__ */ l(D(), 1), A = class {
	bus;
	constructor(e) {
		typeof e.getVersion != "function" || !(0, k.default)(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : (0, O.default)(e.getVersion()) !== (0, O.default)(this.getVersion()) && console.warn("Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()), this.bus = e;
	}
	getVersion() {
		return "3.3.3";
	}
	subscribe(e, t) {
		this.bus.subscribe(e, t);
	}
	unsubscribe(e, t) {
		this.bus.unsubscribe(e, t);
	}
	emit(e, ...t) {
		this.bus.emit(e, ...t);
	}
}, j = class {
	handlers = /* @__PURE__ */ new Map();
	getVersion() {
		return "3.3.3";
	}
	subscribe(e, t) {
		this.handlers.set(e, (this.handlers.get(e) || []).concat(t));
	}
	unsubscribe(e, t) {
		this.handlers.set(e, (this.handlers.get(e) || []).filter((e) => e !== t));
	}
	emit(e, ...t) {
		(this.handlers.get(e) || []).forEach((e) => {
			try {
				e(t[0]);
			} catch (e) {
				console.error("could not invoke event listener", e);
			}
		});
	}
}, M = null;
function N() {
	return M === null ? typeof window > "u" ? new Proxy({}, { get: () => () => console.error("Window not available, EventBus can not be established!") }) : (window.OC?._eventBus && window._nc_event_bus === void 0 && (console.warn("found old event bus instance at OC._eventBus. Update your version!"), window._nc_event_bus = window.OC._eventBus), M = window?._nc_event_bus === void 0 ? window._nc_event_bus = new j() : new A(window._nc_event_bus), M) : M;
}
function P(e, t) {
	N().subscribe(e, t);
}
function F(e, t) {
	N().unsubscribe(e, t);
}
function I(e, ...t) {
	N().emit(e, ...t);
}
//#endregion
//#region node_modules/@nextcloud/browser-storage/dist/ScopedStorage.js
var ee = class e {
	static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
	static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
	scope;
	wrapped;
	constructor(t, n, r) {
		this.scope = `${r ? e.GLOBAL_SCOPE_PERSISTENT : e.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
	}
	scopeKey(e) {
		return `${this.scope}${e}`;
	}
	setItem(e, t) {
		this.wrapped.setItem(this.scopeKey(e), t);
	}
	getItem(e) {
		return this.wrapped.getItem(this.scopeKey(e));
	}
	removeItem(e) {
		this.wrapped.removeItem(this.scopeKey(e));
	}
	clear() {
		Object.keys(this.wrapped).filter((e) => e.startsWith(this.scope)).map(this.wrapped.removeItem.bind(this.wrapped));
	}
}, te = class {
	appId;
	persisted = !1;
	clearedOnLogout = !1;
	constructor(e) {
		this.appId = e;
	}
	persist(e = !0) {
		return this.persisted = e, this;
	}
	clearOnLogout(e = !0) {
		return this.clearedOnLogout = e, this;
	}
	build() {
		return new ee(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
	}
};
//#endregion
//#region node_modules/@nextcloud/browser-storage/dist/index.js
function L(e) {
	return new te(e);
}
//#endregion
//#region node_modules/@nextcloud/auth/dist/index.mjs
H();
function R() {
	return globalThis._nc_auth_requestToken ? globalThis._nc_auth_requestToken : globalThis.document ? document.head.dataset.requesttoken ?? null : null;
}
function z(e) {
	if (!e || typeof e != "string") throw Error("Invalid CSRF token given", { cause: { token: e } });
	globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), I("csrf-token-update", {
		token: e,
		_internal: !0
	}));
}
async function B() {
	let e = m("/csrftoken"), t = await fetch(e);
	if (!t.ok) throw Error("Could not fetch CSRF token from API", { cause: t });
	try {
		let { token: e } = await t.json();
		return z(e), e;
	} catch (e) {
		throw Error("Could not parse CSRF token from API response", { cause: e });
	}
}
function V(e) {
	let t = async ({ token: t }) => {
		try {
			e(t);
		} catch (e) {
			console.error("Error updating CSRF token observer", e);
		}
	};
	return P("csrf-token-update", t), () => F("csrf-token-update", t);
}
function H() {
	P("csrf-token-update", ({ token: e, _internal: t }) => {
		t || z(e);
	});
}
var U = L("public").persist().build(), W = class {
	_displayName;
	uid;
	isAdmin;
	constructor() {
		U.getItem("guestUid") || U.setItem("guestUid", J()), this._displayName = U.getItem("guestNickname") || "", this.uid = U.getItem("guestUid") || J(), this.isAdmin = !1, P("user:info:changed", (e) => {
			this._displayName = e.displayName, U.setItem("guestNickname", e.displayName || "");
		});
	}
	get displayName() {
		return this._displayName;
	}
	set displayName(e) {
		this._displayName = e, U.setItem("guestNickname", e), I("user:info:changed", this);
	}
}, G;
function K() {
	return G ||= new W(), G;
}
function q(e) {
	if (!e || e.trim().length === 0) throw Error("Nickname cannot be empty");
	K().displayName = e;
}
function J() {
	return globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
		let t = Math.random() * 16 | 0;
		return (e === "x" ? t : t & 3 | 8).toString(16);
	});
}
var Y;
function X(e, t) {
	return e ? e.getAttribute(t) : null;
}
function Z() {
	if (Y !== void 0) return Y;
	let e = document?.getElementsByTagName("head")[0];
	if (!e) return null;
	let t = X(e, "data-user");
	return t === null ? (Y = null, Y) : (Y = {
		uid: t,
		displayName: X(e, "data-user-displayname"),
		isAdmin: !!window._oc_isadmin
	}, Y);
}
//#endregion
//#region node_modules/@nextcloud/logger/dist/index.mjs
var Q = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(Q || {}), ne = class {
	context;
	constructor(e) {
		this.context = e || {};
	}
	formatMessage(e, t, n) {
		let r = "[" + Q[t].toUpperCase() + "] ";
		return n && n.app && (r += n.app + ": "), typeof e == "string" ? r + e : (r += `Unexpected ${e.name}`, e.message && (r += ` "${e.message}"`), t === Q.Debug && e.stack && (r += `

Stack trace:
${e.stack}`), r);
	}
	log(e, t, n) {
		if (!(typeof this.context?.level == "number" && e < this.context?.level)) switch (typeof t == "object" && n?.error === void 0 && (n.error = t), e) {
			case Q.Debug:
				console.debug(this.formatMessage(t, Q.Debug, n), n);
				break;
			case Q.Info:
				console.info(this.formatMessage(t, Q.Info, n), n);
				break;
			case Q.Warn:
				console.warn(this.formatMessage(t, Q.Warn, n), n);
				break;
			case Q.Error:
				console.error(this.formatMessage(t, Q.Error, n), n);
				break;
			case Q.Fatal:
			default: console.error(this.formatMessage(t, Q.Fatal, n), n);
		}
	}
	debug(e, t) {
		this.log(Q.Debug, e, Object.assign({}, this.context, t));
	}
	info(e, t) {
		this.log(Q.Info, e, Object.assign({}, this.context, t));
	}
	warn(e, t) {
		this.log(Q.Warn, e, Object.assign({}, this.context, t));
	}
	error(e, t) {
		this.log(Q.Error, e, Object.assign({}, this.context, t));
	}
	fatal(e, t) {
		this.log(Q.Fatal, e, Object.assign({}, this.context, t));
	}
};
function re(e) {
	return new ne(e);
}
var ie = class {
	context;
	factory;
	constructor(e) {
		this.context = {}, this.factory = e;
	}
	setApp(e) {
		return this.context.app = e, this;
	}
	setLogLevel(e) {
		return this.context.level = e, this;
	}
	setUid(e) {
		return this.context.uid = e, this;
	}
	detectUser() {
		let e = Z();
		return e !== null && (this.context.uid = e.uid), this;
	}
	detectLogLevel() {
		let e = this, t = () => {
			document.readyState === "complete" || document.readyState === "interactive" ? (e.context.level = window._oc_config?.loglevel ?? Q.Warn, window._oc_debug && (e.context.level = Q.Debug), document.removeEventListener("readystatechange", t)) : document.addEventListener("readystatechange", t);
		};
		return t(), this;
	}
	build() {
		return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
	}
};
function $() {
	return new ie(re);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/logger.mjs
var ae = $().detectUser().setApp("@nextcloud/vue").build();
//#endregion
export { l as _, R as a, L as c, F as d, f, s as g, o as h, Z as i, I as l, m, $ as n, V as o, d as p, B as r, q as s, ae as t, P as u };
