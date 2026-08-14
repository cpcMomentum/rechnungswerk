import { n as e } from "./rolldown-runtime-B0aSnxlc.chunk.mjs";
import { $ as t, Cn as n, Ct as r, D as i, Ht as a, Jt as o, Lt as s, Sn as c, Tt as l, Ut as u, Vt as d, _ as f, _t as p, a as m, at as ee, bn as h, bt as te, dn as ne, en as g, gt as _, ht as v, i as y, kt as b, mt as re, ot as x, r as S, t as ie, tn as C, ut as ae, vt as w, xn as oe, xt as T, yn as E } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { r as se, t as ce } from "./NcPopover-B87bEPLq-Bfc7fZbF.chunk.mjs";
import { E as D, T as O, g as le, h as ue, i as de, s as fe } from "./mdi-CpchYUUV-BlQjFBKG.chunk.mjs";
//#region node_modules/@ckpack/vue-color/libs/style-inject.es-746bb8ed.js
function k(e, t) {
	t === void 0 && (t = {});
	var n = t.insertAt;
	if (!(!e || typeof document > "u")) {
		var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
		i.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
	}
}
//#endregion
//#region node_modules/@ckpack/vue-color/libs/utils/compoent.js
var A = function(e, t) {
	let { componentPrefix: n = "" } = t || {};
	e.component(`${n}${this.name}`, this);
}, j = {}, M = {
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
		return { "background-image": `url(${me(this.white, this.grey, this.size)})` };
	} }
};
function pe(e, t, n) {
	if (typeof document > "u") return null;
	let r = document.createElement("canvas");
	r.width = r.height = n * 2;
	let i = r.getContext("2d");
	return i ? (i.fillStyle = e, i.fillRect(0, 0, r.width, r.height), i.fillStyle = t, i.fillRect(0, 0, n, n), i.translate(n, n), i.fillRect(0, 0, n, n), r.toDataURL()) : null;
}
function me(e, t, n) {
	let r = `${e},${t},${n}`;
	if (j[r]) return j[r];
	let i = pe(e, t, n);
	return j[r] = i, i;
}
function he(e, t, n, r, i, a) {
	return s(), w("div", {
		class: "vc-checkerboard",
		style: c(a.bgStyle)
	}, null, 4);
}
k(".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}"), M.render = he, M.__file = "src/components/checkboard/checkboard.vue", M.install = A;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/alpha/index.js
var N = {
	name: "Alpha",
	components: { Checkboard: M },
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
}, ge = { class: "vc-alpha" }, _e = { class: "vc-alpha-checkboard-wrap" }, ve = [/* @__PURE__ */ v("div", { class: "vc-alpha-picker" }, null, -1)];
function ye(e, t, n, r, i, a) {
	let o = u("Checkboard");
	return s(), w("div", ge, [
		v("div", _e, [T(o)]),
		v("div", {
			class: "vc-alpha-gradient",
			style: c({ background: a.gradientColor })
		}, null, 4),
		v("div", {
			ref: "container",
			class: "vc-alpha-container",
			onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
			onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
			onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
		}, [v("div", {
			class: "vc-alpha-pointer",
			style: c({ left: `${a.colors.a * 100}%` })
		}, ve, 4)], 544)
	]);
}
k(".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), N.render = ye, N.__file = "src/components/alpha/alpha.vue", N.install = A;
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/util.js
function P(e, t) {
	be(e) && (e = "100%");
	var n = xe(e);
	return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (e = t === 360 ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t)), e);
}
function F(e) {
	return Math.min(1, Math.max(0, e));
}
function be(e) {
	return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function xe(e) {
	return typeof e == "string" && e.indexOf("%") !== -1;
}
function Se(e) {
	return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function I(e) {
	return e <= 1 ? `${Number(e) * 100}%` : e;
}
function L(e) {
	return e.length === 1 ? "0" + e : String(e);
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/conversion.js
function Ce(e, t, n) {
	return {
		r: P(e, 255) * 255,
		g: P(t, 255) * 255,
		b: P(n, 255) * 255
	};
}
function we(e, t, n) {
	e = P(e, 255), t = P(t, 255), n = P(n, 255);
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
function R(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Te(e, t, n) {
	var r, i, a;
	if (e = P(e, 360), t = P(t, 100), n = P(n, 100), t === 0) i = n, a = n, r = n;
	else {
		var o = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
		r = R(s, o, e + 1 / 3), i = R(s, o, e), a = R(s, o, e - 1 / 3);
	}
	return {
		r: r * 255,
		g: i * 255,
		b: a * 255
	};
}
function Ee(e, t, n) {
	e = P(e, 255), t = P(t, 255), n = P(n, 255);
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
function De(e, t, n) {
	e = P(e, 360) * 6, t = P(t, 100), n = P(n, 100);
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
function Oe(e, t, n, r) {
	var i = [
		L(Math.round(e).toString(16)),
		L(Math.round(t).toString(16)),
		L(Math.round(n).toString(16))
	];
	return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function ke(e, t, n, r, i) {
	var a = [
		L(Math.round(e).toString(16)),
		L(Math.round(t).toString(16)),
		L(Math.round(n).toString(16)),
		L(Ae(r))
	];
	return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Ae(e) {
	return Math.round(parseFloat(e) * 255).toString(16);
}
function je(e) {
	return z(e) / 255;
}
function z(e) {
	return parseInt(e, 16);
}
function Me(e) {
	return {
		r: e >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var B = {
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
function Ne(e) {
	var t = {
		r: 0,
		g: 0,
		b: 0
	}, n = 1, r = null, i = null, a = null, o = !1, s = !1;
	return typeof e == "string" && (e = Pe(e)), typeof e == "object" && (G(e.r) && G(e.g) && G(e.b) ? (t = Ce(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : G(e.h) && G(e.s) && G(e.v) ? (r = I(e.s), i = I(e.v), t = De(e.h, r, i), o = !0, s = "hsv") : G(e.h) && G(e.s) && G(e.l) && (r = I(e.s), a = I(e.l), t = Te(e.h, r, a), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Se(n), {
		ok: o,
		format: e.format || s,
		r: Math.min(255, Math.max(t.r, 0)),
		g: Math.min(255, Math.max(t.g, 0)),
		b: Math.min(255, Math.max(t.b, 0)),
		a: n
	};
}
var V = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", H = `[\\s|\\(]+(${V})[,|\\s]+(${V})[,|\\s]+(${V})\\s*\\)?`, U = `[\\s|\\(]+(${V})[,|\\s]+(${V})[,|\\s]+(${V})[,|\\s]+(${V})\\s*\\)?`, W = {
	CSS_UNIT: new RegExp(V),
	rgb: RegExp("rgb" + H),
	rgba: RegExp("rgba" + U),
	hsl: RegExp("hsl" + H),
	hsla: RegExp("hsla" + U),
	hsv: RegExp("hsv" + H),
	hsva: RegExp("hsva" + U),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Pe(e) {
	if (e = e.trim().toLowerCase(), e.length === 0) return !1;
	var t = !1;
	if (B[e]) e = B[e], t = !0;
	else if (e === "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var n = W.rgb.exec(e);
	return n ? {
		r: n[1],
		g: n[2],
		b: n[3]
	} : (n = W.rgba.exec(e), n ? {
		r: n[1],
		g: n[2],
		b: n[3],
		a: n[4]
	} : (n = W.hsl.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3]
	} : (n = W.hsla.exec(e), n ? {
		h: n[1],
		s: n[2],
		l: n[3],
		a: n[4]
	} : (n = W.hsv.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3]
	} : (n = W.hsva.exec(e), n ? {
		h: n[1],
		s: n[2],
		v: n[3],
		a: n[4]
	} : (n = W.hex8.exec(e), n ? {
		r: z(n[1]),
		g: z(n[2]),
		b: z(n[3]),
		a: je(n[4]),
		format: t ? "name" : "hex8"
	} : (n = W.hex6.exec(e), n ? {
		r: z(n[1]),
		g: z(n[2]),
		b: z(n[3]),
		format: t ? "name" : "hex"
	} : (n = W.hex4.exec(e), n ? {
		r: z(n[1] + n[1]),
		g: z(n[2] + n[2]),
		b: z(n[3] + n[3]),
		a: je(n[4] + n[4]),
		format: t ? "name" : "hex8"
	} : (n = W.hex3.exec(e), n ? {
		r: z(n[1] + n[1]),
		g: z(n[2] + n[2]),
		b: z(n[3] + n[3]),
		format: t ? "name" : "hex"
	} : !1)))))))));
}
function G(e) {
	return !!W.CSS_UNIT.exec(String(e));
}
//#endregion
//#region node_modules/@ctrl/tinycolor/dist/module/index.js
var Fe = function() {
	function e(t, n) {
		if (t === void 0 && (t = ""), n === void 0 && (n = {}), t instanceof e) return t;
		typeof t == "number" && (t = Me(t)), this.originalInput = t;
		var r = Ne(t);
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
		return this.a = Se(e), this.roundA = Math.round(100 * this.a) / 100, this;
	}, e.prototype.isMonochrome = function() {
		return this.toHsl().s === 0;
	}, e.prototype.toHsv = function() {
		var e = Ee(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			v: e.v,
			a: this.a
		};
	}, e.prototype.toHsvString = function() {
		var e = Ee(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
		return this.a === 1 ? `hsv(${t}, ${n}%, ${r}%)` : `hsva(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHsl = function() {
		var e = we(this.r, this.g, this.b);
		return {
			h: e.h * 360,
			s: e.s,
			l: e.l,
			a: this.a
		};
	}, e.prototype.toHslString = function() {
		var e = we(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
		return this.a === 1 ? `hsl(${t}, ${n}%, ${r}%)` : `hsla(${t}, ${n}%, ${r}%, ${this.roundA})`;
	}, e.prototype.toHex = function(e) {
		return e === void 0 && (e = !1), Oe(this.r, this.g, this.b, e);
	}, e.prototype.toHexString = function(e) {
		return e === void 0 && (e = !1), "#" + this.toHex(e);
	}, e.prototype.toHex8 = function(e) {
		return e === void 0 && (e = !1), ke(this.r, this.g, this.b, this.a, e);
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
			return `${Math.round(P(e, 255) * 100)}%`;
		};
		return {
			r: e(this.r),
			g: e(this.g),
			b: e(this.b),
			a: this.a
		};
	}, e.prototype.toPercentageRgbString = function() {
		var e = function(e) {
			return Math.round(P(e, 255) * 100);
		};
		return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
	}, e.prototype.toName = function() {
		if (this.a === 0) return "transparent";
		if (this.a < 1) return !1;
		for (var e = "#" + Oe(this.r, this.g, this.b, !1), t = 0, n = Object.entries(B); t < n.length; t++) {
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
		return n.l += t / 100, n.l = F(n.l), new e(n);
	}, e.prototype.brighten = function(t) {
		t === void 0 && (t = 10);
		var n = this.toRgb();
		return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
	}, e.prototype.darken = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.l -= t / 100, n.l = F(n.l), new e(n);
	}, e.prototype.tint = function(e) {
		return e === void 0 && (e = 10), this.mix("white", e);
	}, e.prototype.shade = function(e) {
		return e === void 0 && (e = 10), this.mix("black", e);
	}, e.prototype.desaturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s -= t / 100, n.s = F(n.s), new e(n);
	}, e.prototype.saturate = function(t) {
		t === void 0 && (t = 10);
		var n = this.toHsl();
		return n.s += t / 100, n.s = F(n.s), new e(n);
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
function K(...e) {
	return new Fe(...e);
}
function q(e, t) {
	let n = e && e.a, r;
	r = e && e.hsl ? K(e.hsl) : e && e.hex && e.hex.length > 0 ? K(e.hex) : e && e.hsv ? K(e.hsv) : e && e.rgba ? K(e.rgba) : e && e.rgb ? K(e.rgb) : K(e), r && (r._a === void 0 || r._a === null) && r.setAlpha(n || r.getAlpha());
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
var Ie = {
	model: {
		prop: "modelValue",
		event: "update:modelValue"
	},
	props: ["modelValue"],
	data() {
		return { val: q(this.modelValue) };
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
		this.val = q(e);
	} },
	methods: {
		colorChange(e, t) {
			this.oldHue = this.colors.hsl.h, this.colors = q(e, t || this.oldHue);
		},
		isValidHex(e) {
			return K(e).isValid;
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
			return K(e).getAlpha() === 0;
		}
	}
}, J = {
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
}, Le = { class: "vc-editable-input" }, Re = ["aria-labelledby"], ze = ["id", "for"], Be = { class: "vc-input__desc" };
function Ve(e, t, r, i, a, o) {
	return s(), w("div", Le, [
		C(v("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => o.val = e,
			"aria-labelledby": o.labelId,
			class: "vc-input__input",
			onKeydown: t[1] ||= (...e) => o.handleKeyDown && o.handleKeyDown(...e),
			onInput: t[2] ||= (...e) => o.update && o.update(...e)
		}, null, 40, Re), [[ee, o.val]]),
		v("span", {
			id: o.labelId,
			for: r.label,
			class: "vc-input__label"
		}, n(o.labelSpanText), 9, ze),
		v("span", Be, n(r.desc), 1)
	]);
}
k(".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}"), J.render = Ve, J.__file = "src/components/editable-input/editable-input.vue", J.install = A;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/utils/utils.js
function Y(e, t, n) {
	return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e;
}
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/saturation/index.js
var X = {
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
			let r = n.clientWidth, i = n.clientHeight, a = n.getBoundingClientRect().left + window.pageXOffset, o = n.getBoundingClientRect().top + window.pageYOffset, s = e.pageX || (e.touches ? e.touches[0].pageX : 0), c = e.pageY || (e.touches ? e.touches[0].pageY : 0), l = Y(s - a, 0, r), u = Y(c - o, 0, i), d = l / r, f = Y(-(u / i) + 1, 0, 1);
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
}, He = /*#__PURE__*/ v("div", { class: "vc-saturation--white" }, null, -1), Ue = /*#__PURE__*/ v("div", { class: "vc-saturation--black" }, null, -1), We = [/* @__PURE__ */ v("div", { class: "vc-saturation-circle" }, null, -1)];
function Ge(e, t, n, r, i, a) {
	return s(), w("div", {
		ref: "container",
		class: "vc-saturation",
		style: c({ background: a.bgColor }),
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [
		He,
		Ue,
		v("div", {
			class: "vc-saturation-pointer",
			style: c({
				top: a.pointerTop,
				left: a.pointerLeft
			})
		}, We, 4)
	], 36);
}
k(".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}"), X.render = Ge, X.__file = "src/components/saturation/saturation.vue", X.install = A;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/hue/index.js
var Z = {
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
}, Ke = ["aria-valuenow"], qe = [/* @__PURE__ */ v("div", { class: "vc-hue-picker" }, null, -1)];
function Je(e, t, n, r, i, a) {
	return s(), w("div", { class: h(["vc-hue", [a.directionClass]]) }, [v("div", {
		ref: "container",
		class: "vc-hue-container",
		role: "slider",
		"aria-valuenow": a.colors.hsl.h,
		"aria-valuemin": "0",
		"aria-valuemax": "360",
		onMousedown: t[0] ||= (...e) => a.handleMouseDown && a.handleMouseDown(...e),
		onTouchmove: t[1] ||= (...e) => a.handleChange && a.handleChange(...e),
		onTouchstart: t[2] ||= (...e) => a.handleChange && a.handleChange(...e)
	}, [v("div", {
		class: "vc-hue-pointer",
		style: c({
			top: a.pointerTop,
			left: a.pointerLeft
		}),
		role: "presentation"
	}, qe, 4)], 40, Ke)], 2);
}
k(".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}"), Z.render = Je, Z.__file = "src/components/hue/hue.vue", Z.install = A;
//#endregion
//#region node_modules/@ckpack/vue-color/libs/components/chrome/index.js
var Q = {
	name: "Chrome",
	components: {
		Saturation: X,
		Hue: Z,
		Alpha: N,
		EdIn: J,
		Checkboard: M
	},
	mixins: [Ie],
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
}, Ye = { class: "vc-chrome-saturation-wrap" }, Xe = { class: "vc-chrome-body" }, Ze = { class: "vc-chrome-controls" }, Qe = { class: "vc-chrome-color-wrap" }, $e = ["aria-label"], et = { class: "vc-chrome-sliders" }, tt = { class: "vc-chrome-hue-wrap" }, nt = {
	key: 0,
	class: "vc-chrome-alpha-wrap"
}, rt = {
	key: 0,
	class: "vc-chrome-fields-wrap"
}, it = { class: "vc-chrome-fields" }, at = { class: "vc-chrome-field" }, ot = { class: "vc-chrome-fields" }, st = { class: "vc-chrome-field" }, ct = { class: "vc-chrome-field" }, lt = { class: "vc-chrome-field" }, ut = {
	key: 0,
	class: "vc-chrome-field"
}, dt = { class: "vc-chrome-fields" }, ft = { class: "vc-chrome-field" }, pt = { class: "vc-chrome-field" }, mt = { class: "vc-chrome-field" }, ht = {
	key: 0,
	class: "vc-chrome-field"
}, gt = { class: "vc-chrome-toggle-icon" }, _t = [/* @__PURE__ */ v("path", {
	fill: "#333",
	d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1)], vt = { class: "vc-chrome-toggle-icon-highlight" };
function yt(e, t, n, r, i, a) {
	let o = u("Saturation"), l = u("Checkboard"), d = u("Hue"), f = u("Alpha"), m = u("EdIn");
	return s(), w("div", {
		role: "application",
		"aria-label": "Chrome color picker",
		class: h(["vc-chrome", [n.disableAlpha ? "vc-chrome__disable-alpha" : ""]])
	}, [v("div", Ye, [T(o, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]), v("div", Xe, [v("div", Ze, [v("div", Qe, [v("div", {
		"aria-label": `current color is ${e.colors.hex}`,
		class: "vc-chrome-active-color",
		style: c({ background: a.activeColor })
	}, null, 12, $e), n.disableAlpha ? p("v-if", !0) : (s(), _(l, { key: 0 }))]), v("div", et, [v("div", tt, [T(d, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]), n.disableAlpha ? p("v-if", !0) : (s(), w("div", nt, [T(f, {
		value: e.colors,
		onChange: a.childChange
	}, null, 8, ["value", "onChange"])]))])]), n.disableFields ? p("v-if", !0) : (s(), w("div", rt, [
		C(v("div", it, [p(" hex "), v("div", at, [a.hasAlpha ? p("v-if", !0) : (s(), _(m, {
			key: 0,
			label: "hex",
			value: e.colors.hex,
			onChange: a.inputChange
		}, null, 8, ["value", "onChange"])), a.hasAlpha ? (s(), _(m, {
			key: 1,
			label: "hex",
			value: e.colors.hex8,
			onChange: a.inputChange
		}, null, 8, ["value", "onChange"])) : p("v-if", !0)])], 512), [[x, i.fieldsIndex === "hex"]]),
		C(v("div", ot, [
			p(" rgba "),
			v("div", st, [T(m, {
				label: "r",
				value: e.colors.rgba.r,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			v("div", ct, [T(m, {
				label: "g",
				value: e.colors.rgba.g,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			v("div", lt, [T(m, {
				label: "b",
				value: e.colors.rgba.b,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			n.disableAlpha ? p("v-if", !0) : (s(), w("div", ut, [T(m, {
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
		C(v("div", dt, [
			p(" hsla "),
			v("div", ft, [T(m, {
				label: "h",
				value: a.hsl.h,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			v("div", pt, [T(m, {
				label: "s",
				value: a.hsl.s,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			v("div", mt, [T(m, {
				label: "l",
				value: a.hsl.l,
				onChange: a.inputChange
			}, null, 8, ["value", "onChange"])]),
			n.disableAlpha ? p("v-if", !0) : (s(), w("div", ht, [T(m, {
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
		p(" btn "),
		v("div", {
			class: "vc-chrome-toggle-btn",
			role: "button",
			"aria-label": "Change another color definition",
			onClick: t[3] ||= (...e) => a.toggleViews && a.toggleViews(...e)
		}, [v("div", gt, [(s(), w("svg", {
			style: {
				width: "24px",
				height: "24px"
			},
			viewBox: "0 0 24 24",
			onMouseover: t[0] ||= (...e) => a.showHighlight && a.showHighlight(...e),
			onMouseenter: t[1] ||= (...e) => a.showHighlight && a.showHighlight(...e),
			onMouseout: t[2] ||= (...e) => a.hideHighlight && a.hideHighlight(...e)
		}, _t, 32))]), C(v("div", vt, null, 512), [[x, i.highlight]])]),
		p(" btn ")
	]))])], 2);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/colors-Cv9F-jWS.mjs
k(".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}"), Q.render = yt, Q.__file = "src/components/chrome/chrome.vue", Q.install = A, S(f);
var $ = class {
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
}, bt = new $(182, 70, 157, y("Purple")), xt = new $(221, 203, 85, y("Gold")), St = new $(0, 130, 201, y("Nextcloud blue")), Ct = new $(0, 0, 0, y("Black")), wt = new $(255, 255, 255, y("White")), Tt = [
	bt,
	new $(191, 103, 139, y("Rosy brown")),
	new $(201, 136, 121, y("Feldspar")),
	new $(211, 169, 103, y("Whiskey")),
	xt,
	new $(165, 184, 114, y("Olivine")),
	new $(110, 166, 143, y("Acapulco")),
	new $(55, 148, 172, y("Boston Blue")),
	St,
	new $(45, 115, 190, y("Mariner")),
	new $(91, 100, 179, y("Blue Violet")),
	new $(136, 85, 168, y("Deluge"))
];
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcColorPicker-BCkasLwT.mjs
S(m);
var Et = ["aria-label"], Dt = {
	key: 0,
	class: "color-picker__simple"
}, Ot = [
	"aria-label",
	"name",
	"checked",
	"onClick"
], kt = ["title"], At = [
	"aria-label",
	"name",
	"checked"
], jt = {
	key: 0,
	class: "color-picker__navigation"
}, Mt = /* @__PURE__ */ i(/* @__PURE__ */ r({
	__name: "NcColorPicker",
	props: /* @__PURE__ */ b({
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
	emits: /* @__PURE__ */ b(["submit", "closed"], ["update:modelValue", "update:open"]),
	setup(e, { emit: r }) {
		let i = o(e, "modelValue"), u = o(e, "open"), f = e, m = r, ee = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i, b = ie(), x = ne(!1), S = re(() => {
			let e = f.palette;
			for (let t of e) if (typeof t == "string" && !t.match(ee) || typeof t == "object" && !t.color?.match(ee)) {
				se.error("[NcColorPicker] Invalid palette passed", { color: t }), e = [];
				break;
			}
			return e.length === 0 && (e = f.clearable ? [
				...Tt,
				Ct,
				wt
			] : [...Tt]), e.map((e) => ({
				color: typeof e == "object" ? e.color : e,
				name: typeof e == "object" && e.name ? e.name : y("A color with a HEX value {hex}", { hex: typeof e == "string" ? e : e.color })
			}));
		});
		function C(e) {
			m("submit", i.value), e(), x.value = !1;
		}
		function k(e) {
			e = typeof e == "string" ? e : e.color, f.clearable && i.value === e ? i.value = void 0 : i.value = e;
		}
		function A(e) {
			i.value = e.hex;
		}
		function j(e) {
			return M(e) > .5 ? Ct.color : wt.color;
		}
		function M(e) {
			let [t, n, r] = pe(e);
			return (.2126 * t + .7152 * n + .0722 * r) / 255;
		}
		function pe(e) {
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
		return (r, o) => (s(), _(E(ce), {
			shown: u.value,
			"onUpdate:shown": o[3] ||= (e) => u.value = e,
			container: e.container,
			popupRole: "dialog",
			onApplyHide: o[4] ||= (e) => m("closed")
		}, {
			trigger: g((e) => [a(r.$slots, "default", oe(l(e)), void 0, !0)]),
			default: g((r) => [v("div", {
				role: "dialog",
				class: h(["color-picker", {
					"color-picker--advanced-fields": x.value && e.advancedFields,
					"color-picker--clearable": e.clearable
				}]),
				"aria-modal": "true",
				"aria-label": E(y)("Color picker")
			}, [T(t, {
				name: "slide",
				mode: "out-in"
			}, {
				default: g(() => [x.value ? (s(), _(E(Q), {
					key: 1,
					class: "color-picker__advanced",
					disableAlpha: "",
					disableFields: !e.advancedFields,
					modelValue: i.value ?? "#000000",
					"onUpdate:modelValue": A
				}, null, 8, ["disableFields", "modelValue"])) : (s(), w("div", Dt, [(s(!0), w(ae, null, d(S.value, ({ color: e, name: t }, n) => (s(), w("label", {
					key: n,
					class: h(["color-picker__simple-color-circle", { "color-picker__simple-color-circle--active": e === i.value }]),
					style: c({
						backgroundColor: e,
						color: j(e)
					})
				}, [e === i.value ? (s(), _(E(O), {
					key: 0,
					path: E(fe)
				}, null, 8, ["path"])) : p("", !0), v("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": t,
					name: `color-picker-${E(b)}`,
					checked: e === i.value,
					onClick: (t) => k(e)
				}, null, 8, Ot)], 6))), 128)), e.clearable ? (s(), w("label", {
					key: 0,
					class: "color-picker__clear",
					title: E(y)("No color")
				}, [T(E(O), {
					size: i.value ? 28 : 34,
					path: E(ue)
				}, null, 8, ["size", "path"]), v("input", {
					type: "radio",
					class: "hidden-visually",
					"aria-label": E(y)("No color"),
					name: `color-picker-${E(b)}`,
					checked: !i.value,
					onClick: o[0] ||= (e) => i.value = void 0
				}, null, 8, At)], 8, kt)) : p("", !0)]))]),
				_: 1
			}), e.paletteOnly ? p("", !0) : (s(), w("div", jt, [x.value ? (s(), _(E(D), {
				key: 0,
				"aria-label": E(y)("Back"),
				title: E(y)("Back"),
				variant: "tertiary",
				onClick: o[1] ||= (e) => x.value = !1
			}, {
				icon: g(() => [T(E(O), {
					directional: "",
					path: E(de)
				}, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])) : (s(), _(E(D), {
				key: 1,
				"aria-label": E(y)("More options"),
				title: E(y)("More options"),
				variant: "tertiary",
				onClick: o[2] ||= (e) => x.value = !0
			}, {
				icon: g(() => [T(E(O), { path: E(le) }, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "title"])), T(E(D), {
				variant: "primary",
				onClick: (e) => C(r.hide)
			}, {
				default: g(() => [te(n(E(y)("Choose")), 1)]),
				_: 1
			}, 8, ["onClick"])]))], 10, Et)]),
			_: 3
		}, 8, ["shown", "container"]));
	}
}), [["__scopeId", "data-v-fab7cffe"]]), Nt = /* @__PURE__ */ e({ default: () => Mt });
//#endregion
export { Mt as n, Nt as t };
