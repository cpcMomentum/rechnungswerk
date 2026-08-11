import { $ as e, At as t, Cn as n, Ct as r, D as i, Et as a, G as o, Gt as s, H as c, Ht as l, J as u, Kt as d, Lt as f, O as p, Q as m, Tt as h, U as g, Ut as _, V as ee, Vt as v, W as y, Wt as b, X as te, Y as x, Z as ne, Zt as S, _t as C, bn as re, bt as w, c as ie, ct as ae, en as T, gt as E, ht as D, i as O, ot as oe, q as k, r as se, st as ce, t as le, tn as A, ut as ue, vt as j, xn as M, xt as N, yt as de } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { t as fe } from "./NcLoadingIcon-BOVpFVQz-B0B1cMOR.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/ChevronDown-C6gc637b.mjs
var pe = {
	name: "ChevronDownIcon",
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
}, me = ["aria-hidden", "aria-label"], he = [
	"fill",
	"width",
	"height"
], ge = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, _e = { key: 0 };
function ve(e, r, i, a, o, s) {
	return f(), j("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon chevron-down-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(f(), j("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [D("path", ge, [i.title ? (f(), j("title", _e, n(i.title), 1)) : C("", !0)])], 8, he))], 16, me);
}
var ye = /* @__PURE__ */ i(pe, [["render", ve]]), be = {
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
}, xe = ["aria-hidden", "aria-label"], Se = [
	"fill",
	"width",
	"height"
], Ce = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, we = { key: 0 };
function Te(e, r, i, a, o, s) {
	return f(), j("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(f(), j("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [D("path", Ce, [i.title ? (f(), j("title", we, n(i.title), 1)) : C("", !0)])], 8, Se))], 16, xe);
}
var Ee = /* @__PURE__ */ i(be, [["render", Te]]);
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function P() {
	return typeof window < "u";
}
function F(e) {
	return De(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function I(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function L(e) {
	return ((De(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function De(e) {
	return P() ? e instanceof Node || e instanceof I(e).Node : !1;
}
function R(e) {
	return P() ? e instanceof Element || e instanceof I(e).Element : !1;
}
function z(e) {
	return P() ? e instanceof HTMLElement || e instanceof I(e).HTMLElement : !1;
}
function Oe(e) {
	return !P() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof I(e).ShadowRoot;
}
function B(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = K(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function ke(e) {
	return /^(table|td|th)$/.test(F(e));
}
function V(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Ae = /transform|translate|scale|rotate|perspective|filter/, je = /paint|layout|strict|content/, H = (e) => !!e && e !== "none", Me;
function U(e) {
	let t = R(e) ? K(e) : e;
	return H(t.transform) || H(t.translate) || H(t.scale) || H(t.rotate) || H(t.perspective) || !W() && (H(t.backdropFilter) || H(t.filter)) || Ae.test(t.willChange || "") || je.test(t.contain || "");
}
function Ne(e) {
	let t = J(e);
	for (; z(t) && !G(t);) {
		if (U(t)) return t;
		if (V(t)) return null;
		t = J(t);
	}
	return null;
}
function W() {
	return Me ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Me;
}
function G(e) {
	return /^(html|body|#document)$/.test(F(e));
}
function K(e) {
	return I(e).getComputedStyle(e);
}
function q(e) {
	return R(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function J(e) {
	if (F(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Oe(e) && e.host || L(e);
	return Oe(t) ? t.host : t;
}
function Pe(e) {
	let t = J(e);
	return G(t) ? (e.ownerDocument || e).body : z(t) && B(t) ? t : Pe(t);
}
function Y(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Pe(e), i = r === e.ownerDocument?.body, a = I(r);
	if (i) {
		let e = Fe(a);
		return t.concat(a, a.visualViewport || [], B(r) ? r : [], e && n ? Y(e) : []);
	}
	return t.concat(r, Y(r, [], n));
}
function Fe(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Ie(e) {
	let t = K(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = z(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = m(n) !== a || m(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Le(e) {
	return R(e) ? e : e.contextElement;
}
function X(e) {
	let t = Le(e);
	if (!z(t)) return k(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Ie(t), o = (a ? m(n.width) : n.width) / r, s = (a ? m(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Re = /*#__PURE__*/ k(0);
function ze(e) {
	let t = I(e);
	return !W() || !t.visualViewport ? Re : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Be(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === I(e);
}
function Z(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Le(e), o = k(1);
	t && (r ? R(r) && (o = X(r)) : o = X(e));
	let s = Be(a, n, r) ? ze(a) : k(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = I(a), t = R(r) ? I(r) : r, n = e, i = Fe(n);
		for (; i && t !== n;) {
			let e = X(i), t = i.getBoundingClientRect(), r = K(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = I(i), i = Fe(n);
		}
	}
	return ne({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Q(e, t) {
	let n = q(e).scrollLeft;
	return t ? t.left + n : Z(L(e)).left + n;
}
function Ve(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Q(e, n),
		y: n.top + t.scrollTop
	};
}
function He(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = L(r), s = t ? V(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = k(1), u = k(0), d = z(r);
	if ((d || !a) && ((F(r) !== "body" || B(o)) && (c = q(r)), d)) {
		let e = Z(r);
		l = X(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Ve(o, c) : k(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Ue(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function We(e) {
	let t = q(e), n = e.ownerDocument.body, r = x(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = x(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Q(e), o = -t.scrollTop;
	return K(n).direction === "rtl" && (a += x(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Ge = 25;
function Ke(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = I(e), a = L(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !W() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Q(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Ge && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function qe(e, t) {
	let n = Z(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = X(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Je(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = Ke(e, n, t);
	else if (t === "document") r = We(L(e));
	else if (R(t)) r = qe(t, n);
	else {
		let n = ze(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return ne(r);
}
function Ye(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Y(e, [], !1).filter((e) => R(e) && F(e) !== "body"), i = null, a = K(e).position === "fixed", o = a ? J(e) : e;
	for (; R(o) && !G(o);) {
		let e = K(o), t = U(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = J(o);
	}
	return t.set(e, r), r;
}
function Xe(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? V(t) ? [] : Ye(t, this._c) : [].concat(n), r], o = Je(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Je(t, a[e], i);
		s = x(n.top, s), c = te(n.right, c), l = te(n.bottom, l), u = x(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Ze(e) {
	let { width: t, height: n } = Ie(e);
	return {
		width: t,
		height: n
	};
}
function Qe(e, t, n) {
	let r = z(t), i = L(t), a = n === "fixed", o = Z(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = k(0);
	if ((r || !a) && ((F(t) !== "body" || B(i)) && (s = q(t)), r)) {
		let e = Z(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Q(i));
	let l = i && !r && !a ? Ve(i, s) : k(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function $e(e) {
	return K(e).position === "static";
}
function et(e, t) {
	if (!z(e) || K(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return L(e) === n && (n = n.ownerDocument.body), n;
}
function tt(e, t) {
	let n = I(e);
	if (V(e)) return n;
	if (!z(e)) {
		let t = J(e);
		for (; t && !G(t);) {
			if (R(t) && !$e(t)) return t;
			t = J(t);
		}
		return n;
	}
	let r = et(e, t);
	for (; r && ke(r) && $e(r);) r = et(r, t);
	return r && G(r) && $e(r) && !U(r) ? n : r || Ne(e) || n;
}
var nt = async function(e) {
	let t = this.getOffsetParent || tt, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Qe(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function rt(e) {
	return K(e).direction === "rtl";
}
var it = {
	convertOffsetParentRelativeRectToViewportRelativeRect: He,
	getDocumentElement: L,
	getClippingRect: Xe,
	getOffsetParent: tt,
	getElementRects: nt,
	getClientRects: Ue,
	getDimensions: Ze,
	getScale: X,
	isElement: R,
	isRTL: rt
};
function at(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ot(e, t, n) {
	let r = null, i, a = L(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: d, top: f, width: p, height: m } = l;
		if (n || t(), !p || !m) return;
		let h = u(f), g = u(a.clientWidth - (d + p)), _ = u(a.clientHeight - (f + m)), ee = u(d), v = {
			rootMargin: -h + "px " + -g + "px " + -_ + "px " + -ee + "px",
			threshold: x(0, te(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!at(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = I(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function st(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Le(e), u = i || a ? [...l ? Y(l) : [], ...t ? Y(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? ot(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Z(e) : null;
	c && g();
	function g() {
		let t = Z(e);
		h && !at(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var ct = y, lt = o, ut = c, dt = g, ft = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...it,
		...i.platform,
		_c: r
	};
	return ee(e, t, {
		...i,
		platform: a
	});
}, pt = {
	mounted(e, { instance: t }) {
		if (t.appendToBody) {
			document.body.appendChild(e);
			let { height: n, top: r, left: i, width: a } = t.$refs.toggle.getBoundingClientRect(), o = window.scrollX || window.pageXOffset, s = window.scrollY || window.pageYOffset;
			e.unbindPosition = t.calculatePosition(e, t, {
				width: a + "px",
				left: o + i + "px",
				top: s + r + n + "px"
			});
		}
	},
	unmounted(e, { instance: t }) {
		t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
	}
}, mt = {
	props: { loading: {
		type: Boolean,
		default: !1
	} },
	data() {
		return { mutableLoading: !1 };
	},
	watch: {
		search() {
			this.$emit("search", this.search, this.toggleLoading);
		},
		loading(e) {
			this.mutableLoading = e;
		}
	},
	methods: { toggleLoading(e = null) {
		return this.mutableLoading = e ?? !this.mutableLoading;
	} }
}, ht = {
	props: { autoscroll: {
		type: Boolean,
		default: !0
	} },
	watch: {
		typeAheadPointer() {
			this.autoscroll && this.maybeAdjustScroll();
		},
		open(e) {
			this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
		}
	},
	methods: {
		maybeAdjustScroll() {
			let e = this.$refs.dropdownMenu?.children[this.typeAheadPointer] || !1;
			if (e) {
				let t = this.getDropdownViewport(), { top: n, bottom: r, height: i } = e.getBoundingClientRect();
				if (n < t.top) return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
				if (r > t.bottom) return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (t.height - i);
			}
		},
		getDropdownViewport() {
			return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
				height: 0,
				top: 0,
				bottom: 0
			};
		}
	}
}, gt = {
	data() {
		return { typeAheadPointer: -1 };
	},
	watch: {
		filteredOptions() {
			if (this.resetFocusOnOptionsChange) {
				for (let e = 0; e < this.filteredOptions.length; e++) if (this.selectable(this.filteredOptions[e])) {
					this.typeAheadPointer = e;
					break;
				}
			}
		},
		open(e) {
			e && this.typeAheadToLastSelected();
		},
		selectedValue() {
			this.open && this.typeAheadToLastSelected();
		}
	},
	methods: {
		typeAheadUp() {
			for (let e = this.typeAheadPointer - 1; e >= 0; e--) if (this.selectable(this.filteredOptions[e])) {
				this.typeAheadPointer = e;
				break;
			}
		},
		typeAheadDown() {
			for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++) if (this.selectable(this.filteredOptions[e])) {
				this.typeAheadPointer = e;
				break;
			}
		},
		typeAheadSelect() {
			let e = this.filteredOptions[this.typeAheadPointer];
			e && this.selectable(e) && this.select(e);
		},
		typeAheadToLastSelected() {
			let e = this.selectedValue.length === 0 ? -1 : this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]);
			e !== -1 && (this.typeAheadPointer = e);
		}
	}
};
function _t(e) {
	let t = {};
	return Object.keys(e).sort().forEach((n) => {
		t[n] = e[n];
	}), JSON.stringify(t);
}
var vt = 0;
function yt() {
	return ++vt;
}
var bt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, xt = {}, St = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "10",
	height: "10"
};
function Ct(e, t) {
	return f(), j("svg", St, [...t[0] ||= [D("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1)]]);
}
var wt = /* @__PURE__ */ bt(xt, [["render", Ct]]), Tt = {}, Et = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "14",
	height: "10"
};
function Dt(e, t) {
	return f(), j("svg", Et, [...t[0] ||= [D("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1)]]);
}
var Ot = {
	Deselect: wt,
	OpenIndicator: /* @__PURE__ */ bt(Tt, [["render", Dt]])
}, kt = {
	components: { ...Ot },
	directives: { appendToBody: pt },
	mixins: [
		ht,
		gt,
		mt
	],
	props: {
		modelValue: {},
		components: {
			type: Object,
			default: () => ({})
		},
		options: {
			type: Array,
			default() {
				return [];
			}
		},
		limit: {
			type: Number,
			default: null
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		clearable: {
			type: Boolean,
			default: !0
		},
		deselectFromDropdown: {
			type: Boolean,
			default: !1
		},
		searchable: {
			type: Boolean,
			default: !0
		},
		multiple: {
			type: Boolean,
			default: !1
		},
		placeholder: {
			type: String,
			default: ""
		},
		transition: {
			type: String,
			default: "vs__fade"
		},
		clearSearchOnSelect: {
			type: Boolean,
			default: !0
		},
		closeOnSelect: {
			type: Boolean,
			default: !0
		},
		label: {
			type: String,
			default: "label"
		},
		ariaLabelCombobox: {
			type: String,
			default: "Search for options"
		},
		ariaLabelListbox: {
			type: String,
			default: "Options"
		},
		ariaLabelClearSelected: {
			type: String,
			default: "Clear selected"
		},
		ariaLabelDeselectOption: {
			type: Function,
			default: (e) => `Deselect ${e}`
		},
		autocomplete: {
			type: String,
			default: "off"
		},
		reduce: {
			type: Function,
			default: (e) => e
		},
		selectable: {
			type: Function,
			default: () => !0
		},
		getOptionLabel: {
			type: Function,
			default(e) {
				return typeof e == "object" ? Object.hasOwn(e, this.label) ? e[this.label] : S(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
			}
		},
		getOptionKey: {
			type: Function,
			default(e) {
				if (typeof e != "object") return e;
				try {
					return Object.hasOwn(e, "id") ? e.id : _t(e);
				} catch (t) {
					return S("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey", e, t);
				}
			}
		},
		onTab: {
			type: Function,
			default() {
				this.selectOnTab && !this.isComposing && this.typeAheadSelect();
			}
		},
		taggable: {
			type: Boolean,
			default: !1
		},
		tabindex: {
			type: Number,
			default: null
		},
		pushTags: {
			type: Boolean,
			default: !1
		},
		filterable: {
			type: Boolean,
			default: !0
		},
		filterBy: {
			type: Function,
			default(e, t, n) {
				return (t || "").toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) > -1;
			}
		},
		filter: {
			type: Function,
			default(e, t) {
				return e.filter((e) => {
					let n = this.getOptionLabel(e);
					return typeof n == "number" && (n = n.toString()), this.filterBy(e, n, t);
				});
			}
		},
		createOption: {
			type: Function,
			default(e) {
				return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
			}
		},
		resetFocusOnOptionsChange: {
			type: Boolean,
			default: !0
		},
		resetOnOptionsChange: {
			default: !1,
			validator: (e) => ["function", "boolean"].includes(typeof e)
		},
		clearSearchOnBlur: {
			type: Function,
			default({ clearSearchOnSelect: e, multiple: t }) {
				return e && !t;
			}
		},
		noDrop: {
			type: Boolean,
			default: !1
		},
		inputId: { type: String },
		dir: {
			type: String,
			default: "auto"
		},
		selectOnTab: {
			type: Boolean,
			default: !1
		},
		selectOnKeyCodes: {
			type: Array,
			default: () => [13]
		},
		searchInputQuerySelector: {
			type: String,
			default: "[type=search]"
		},
		mapKeydown: {
			type: Function,
			default: (e) => e
		},
		appendToBody: {
			type: Boolean,
			default: !1
		},
		calculatePosition: {
			type: Function,
			default(e, t, { width: n, top: r, left: i }) {
				e.style.top = r, e.style.left = i, e.style.width = n;
			}
		},
		dropdownShouldOpen: {
			type: Function,
			default({ noDrop: e, open: t, mutableLoading: n }) {
				return !e && t && !n;
			}
		},
		keyboardFocusBorder: {
			type: Boolean,
			default: !1
		},
		uid: {
			type: [String, Number],
			default: () => yt()
		}
	},
	emits: [
		"open",
		"close",
		"update:modelValue",
		"search",
		"search:compositionstart",
		"search:compositionend",
		"search:keydown",
		"search:blur",
		"search:focus",
		"search:input",
		"option:created",
		"option:selecting",
		"option:selected",
		"option:deselecting",
		"option:deselected"
	],
	data() {
		return {
			search: "",
			open: !1,
			isComposing: !1,
			isKeyboardNavigation: !1,
			pushedTags: [],
			_value: [],
			deselectButtons: []
		};
	},
	computed: {
		isReducingValues() {
			return this.$props.reduce !== this.$options.props.reduce.default;
		},
		isTrackingValues() {
			return this.modelValue === void 0 || this.isReducingValues;
		},
		selectedValue() {
			let e = this.modelValue;
			return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
		},
		optionList() {
			return this.options.concat(this.pushTags ? this.pushedTags : []);
		},
		searchEl() {
			return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
		},
		scope() {
			let e = {
				search: this.search,
				loading: this.loading,
				searching: this.searching,
				filteredOptions: this.filteredOptions
			};
			return {
				search: {
					attributes: {
						id: this.inputId,
						disabled: this.disabled,
						placeholder: this.searchPlaceholder,
						tabindex: this.tabindex,
						readonly: !this.searchable,
						role: "combobox",
						"aria-autocomplete": "list",
						"aria-label": this.ariaLabelCombobox,
						"aria-controls": `vs-${this.uid}__listbox`,
						"aria-owns": `vs-${this.uid}__listbox`,
						"aria-expanded": this.dropdownOpen.toString(),
						ref: "search",
						type: "search",
						autocomplete: this.autocomplete,
						value: this.search,
						...this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? { "aria-activedescendant": `vs-${this.uid}__option-${this.typeAheadPointer}` } : {}
					},
					events: {
						compositionstart: () => this.isComposing = !0,
						compositionend: () => this.isComposing = !1,
						keydown: this.onSearchKeyDown,
						keypress: this.onSearchKeyPress,
						blur: this.onSearchBlur,
						focus: this.onSearchFocus,
						input: (e) => this.search = e.target.value
					}
				},
				spinner: { loading: this.mutableLoading },
				noOptions: {
					search: this.search,
					loading: this.mutableLoading,
					searching: this.searching
				},
				openIndicator: { attributes: {
					ref: "openIndicator",
					role: "presentation",
					class: "vs__open-indicator"
				} },
				listHeader: e,
				listFooter: e,
				header: {
					...e,
					deselect: this.deselect
				},
				footer: {
					...e,
					deselect: this.deselect
				}
			};
		},
		childComponents() {
			return {
				...Ot,
				...this.components
			};
		},
		stateClasses() {
			return {
				"vs--open": this.dropdownOpen,
				"vs--single": !this.multiple,
				"vs--multiple": this.multiple,
				"vs--searching": this.searching && !this.noDrop,
				"vs--searchable": this.searchable && !this.noDrop,
				"vs--unsearchable": !this.searchable,
				"vs--loading": this.mutableLoading,
				"vs--disabled": this.disabled
			};
		},
		searching() {
			return !!this.search;
		},
		dropdownOpen() {
			return this.dropdownShouldOpen(this);
		},
		searchPlaceholder() {
			return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
		},
		filteredOptions() {
			let e = (e) => this.limit === null ? e : e.slice(0, this.limit), t = [].concat(this.optionList);
			if (!this.filterable && !this.taggable) return e(t);
			let n = this.search.length ? this.filter(t, this.search, this) : t;
			if (this.taggable && this.search.length) try {
				let e = this.createOption(this.search);
				this.optionExists(e) || n.unshift(e);
			} catch {}
			return e(n);
		},
		isValueEmpty() {
			return this.selectedValue.length === 0;
		},
		showClearButton() {
			return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
		}
	},
	watch: {
		options(e, t) {
			!this.taggable && (typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, t, this.selectedValue) : this.resetOnOptionsChange) && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
		},
		modelValue: {
			immediate: !0,
			handler(e) {
				this.isTrackingValues && this.setInternalValueFromOptions(e);
			}
		},
		multiple() {
			this.clearSelection();
		},
		open(e) {
			this.$emit(e ? "open" : "close");
		},
		search(e) {
			e.length && (this.open = !0);
		}
	},
	created() {
		this.mutableLoading = this.loading;
	},
	methods: {
		setInternalValueFromOptions(e) {
			Array.isArray(e) ? this.$data._value = e.map((e) => this.findOptionFromReducedValue(e)) : this.$data._value = this.findOptionFromReducedValue(e);
		},
		select(e) {
			this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
		},
		deselect(e) {
			this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((t) => !this.optionComparator(t, e))), this.$emit("option:deselected", e);
		},
		keyboardDeselect(e, t) {
			this.deselect(e);
			let n = this.deselectButtons?.[t + 1], r = this.deselectButtons?.[t - 1], i = n ?? r;
			i ? i.focus() : this.searchEl.focus();
		},
		clearSelection() {
			this.updateValue(this.multiple ? [] : null), this.searchEl.focus();
		},
		onAfterSelect() {
			this.closeOnSelect && (this.open = !this.open), this.clearSearchOnSelect && (this.search = ""), this.noDrop && this.multiple && this.$nextTick(() => this.$refs.search.focus());
		},
		updateValue(e) {
			this.modelValue === void 0 && (this.$data._value = e), e !== null && (e = Array.isArray(e) ? e.map((e) => this.reduce(e)) : this.reduce(e)), this.$emit("update:modelValue", e);
		},
		toggleDropdown(e) {
			let t = e.target !== this.searchEl;
			t && e.preventDefault();
			let n = [...this.deselectButtons || [], ...this.$refs.clearButton ? [this.$refs.clearButton] : []];
			if (this.searchEl === void 0 || n.filter(Boolean).some((t) => t.contains(e.target) || t === e.target)) {
				e.preventDefault();
				return;
			}
			this.open && t ? (this.open = !1, this.searchEl.blur()) : this.disabled || (this.open = !0, this.searchEl.focus());
		},
		isOptionSelected(e) {
			return this.selectedValue.some((t) => this.optionComparator(t, e));
		},
		isOptionDeselectable(e) {
			return this.isOptionSelected(e) && this.deselectFromDropdown;
		},
		hasKeyboardFocusBorder(e) {
			return this.keyboardFocusBorder && this.isKeyboardNavigation ? e === this.typeAheadPointer : !1;
		},
		optionComparator(e, t) {
			return this.getOptionKey(e) === this.getOptionKey(t);
		},
		findOptionFromReducedValue(e) {
			let t = (t) => JSON.stringify(this.reduce(t)) === JSON.stringify(e), n = [...this.options, ...this.pushedTags].filter(t);
			return n.length === 1 ? n[0] : n.find((e) => this.optionComparator(e, this.$data._value)) || e;
		},
		closeSearchOptions() {
			this.open = !1, this.$emit("search:blur");
		},
		maybeDeleteValue() {
			if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
				let e = null;
				this.multiple && (e = [...this.selectedValue.slice(0, this.selectedValue.length - 1)]), this.updateValue(e);
			}
		},
		optionExists(e) {
			return this.optionList.some((t) => this.optionComparator(t, e));
		},
		optionAriaSelected(e) {
			return this.selectable(e) ? String(this.isOptionSelected(e)) : null;
		},
		normalizeOptionForSlot(e) {
			return typeof e == "object" ? e : { [this.label]: e };
		},
		pushTag(e) {
			this.pushedTags.push(e);
		},
		onEscape() {
			this.search.length ? this.search = "" : this.open = !1;
		},
		onSearchBlur() {
			if (this.mousedown && !this.searching) this.mousedown = !1;
			else {
				let { clearSearchOnSelect: e, multiple: t } = this;
				this.clearSearchOnBlur({
					clearSearchOnSelect: e,
					multiple: t
				}) && (this.search = ""), this.closeSearchOptions();
				return;
			}
			this.search.length === 0 && this.options.length === 0 && this.closeSearchOptions();
		},
		onSearchFocus() {
			this.$emit("search:focus");
		},
		onMousedown() {
			this.mousedown = !0;
		},
		onMouseUp() {
			this.mousedown = !1;
		},
		onMouseMove(e, t) {
			this.isKeyboardNavigation = !1, this.selectable(e) && (this.typeAheadPointer = t);
		},
		onSearchKeyDown(e) {
			let t = (e) => {
				if (e.preventDefault(), !this.open) {
					this.open = !0;
					return;
				}
				return !this.isComposing && this.typeAheadSelect();
			}, n = {
				8: () => this.maybeDeleteValue(),
				9: () => this.onTab(),
				27: () => this.onEscape(),
				38: (e) => {
					if (e.preventDefault(), this.isKeyboardNavigation = !0, !this.open) {
						this.open = !0;
						return;
					}
					return this.typeAheadUp();
				},
				40: (e) => {
					if (e.preventDefault(), this.isKeyboardNavigation = !0, !this.open) {
						this.open = !0;
						return;
					}
					return this.typeAheadDown();
				}
			};
			this.selectOnKeyCodes.forEach((e) => n[e] = t);
			let r = this.mapKeydown(n, this);
			if (typeof r[e.keyCode] == "function") return r[e.keyCode](e);
		},
		onSearchKeyPress(e) {
			!this.open && e.keyCode === 32 && (e.preventDefault(), this.open = !0);
		}
	}
}, At = ["id", "dir"], jt = {
	ref: "toggle",
	class: "vs__dropdown-toggle"
}, Mt = [
	"disabled",
	"title",
	"aria-label",
	"onMousedown",
	"onKeydown"
], Nt = {
	ref: "actions",
	class: "vs__actions"
}, Pt = [
	"disabled",
	"title",
	"aria-label"
], Ft = { class: "vs__spinner" }, It = [
	"id",
	"aria-label",
	"aria-multiselectable"
], Lt = [
	"id",
	"aria-selected",
	"onMousemove",
	"onClick"
], Rt = {
	key: 0,
	class: "vs__no-options"
}, zt = ["id", "aria-label"];
function Bt(r, i, a, o, c, u) {
	let p = b("append-to-body");
	return f(), j("div", {
		id: `v-select-${a.uid}`,
		dir: a.dir,
		class: re(["v-select", u.stateClasses])
	}, [
		l(r.$slots, "header", M(h(u.scope.header))),
		D("div", jt, [D("div", {
			ref: "selectedOptions",
			class: "vs__selected-options",
			onMousedown: i[0] ||= (...e) => u.toggleDropdown && u.toggleDropdown(...e)
		}, [(f(!0), j(ue, null, v(u.selectedValue, (e, i) => l(r.$slots, "selected-option-container", {
			option: u.normalizeOptionForSlot(e),
			deselect: u.deselect,
			multiple: a.multiple,
			disabled: a.disabled
		}, () => [(f(), j("span", {
			key: a.getOptionKey(e),
			class: "vs__selected"
		}, [l(r.$slots, "selected-option", t({ ref_for: !0 }, u.normalizeOptionForSlot(e)), () => [w(n(a.getOptionLabel(e)), 1)]), a.multiple ? (f(), j("button", {
			key: 0,
			ref_for: !0,
			ref: (e) => c.deselectButtons[i] = e,
			disabled: a.disabled,
			type: "button",
			class: "vs__deselect",
			title: a.ariaLabelDeselectOption(a.getOptionLabel(e)),
			"aria-label": a.ariaLabelDeselectOption(a.getOptionLabel(e)),
			onMousedown: ae((t) => u.deselect(e), ["stop"]),
			onKeydown: ce((t) => u.keyboardDeselect(e, i), ["enter"])
		}, [(f(), E(s(u.childComponents.Deselect)))], 40, Mt)) : C("", !0)]))])), 256)), l(r.$slots, "search", M(h(u.scope.search)), () => [D("input", t({ class: "vs__search" }, u.scope.search.attributes, d(u.scope.search.events, !0)), null, 16)])], 544), D("div", Nt, [
			A(D("button", {
				ref: "clearButton",
				disabled: a.disabled,
				type: "button",
				class: "vs__clear",
				title: a.ariaLabelClearSelected,
				"aria-label": a.ariaLabelClearSelected,
				onClick: i[1] ||= (...e) => u.clearSelection && u.clearSelection(...e)
			}, [(f(), E(s(u.childComponents.Deselect)))], 8, Pt), [[oe, u.showClearButton]]),
			a.noDrop ? C("", !0) : (f(), j("button", {
				key: 0,
				ref: "openIndicatorButton",
				class: "vs__open-indicator-button",
				type: "button",
				tabindex: "-1",
				"aria-hidden": "true",
				onMousedown: i[2] ||= (...e) => u.toggleDropdown && u.toggleDropdown(...e)
			}, [l(r.$slots, "open-indicator", M(h(u.scope.openIndicator)), () => [(f(), E(s(u.childComponents.OpenIndicator), M(h(u.scope.openIndicator.attributes)), null, 16))])], 544)),
			l(r.$slots, "spinner", M(h(u.scope.spinner)), () => [A(D("div", Ft, " Loading... ", 512), [[oe, r.mutableLoading]])])
		], 512)], 512),
		N(e, { name: a.transition }, {
			default: T(() => [u.dropdownOpen ? A((f(), j("ul", {
				id: `vs-${a.uid}__listbox`,
				ref: "dropdownMenu",
				key: `vs-${a.uid}__listbox`,
				class: "vs__dropdown-menu",
				role: "listbox",
				"aria-label": a.ariaLabelListbox,
				"aria-multiselectable": a.multiple ? "true" : null,
				tabindex: "-1",
				onMousedown: i[3] ||= ae((...e) => u.onMousedown && u.onMousedown(...e), ["prevent"]),
				onMouseup: i[4] ||= (...e) => u.onMouseUp && u.onMouseUp(...e)
			}, [
				l(r.$slots, "list-header", M(h(u.scope.listHeader))),
				(f(!0), j(ue, null, v(u.filteredOptions, (e, i) => (f(), j("li", {
					id: `vs-${a.uid}__option-${i}`,
					key: a.getOptionKey(e),
					role: "option",
					class: re(["vs__dropdown-option", {
						"vs__dropdown-option--deselect": u.isOptionDeselectable(e) && i === r.typeAheadPointer,
						"vs__dropdown-option--selected": u.isOptionSelected(e),
						"vs__dropdown-option--highlight": i === r.typeAheadPointer,
						"vs__dropdown-option--kb-focus": u.hasKeyboardFocusBorder(i),
						"vs__dropdown-option--disabled": !a.selectable(e)
					}]),
					"aria-selected": u.optionAriaSelected(e),
					onMousemove: (t) => u.onMouseMove(e, i),
					onClick: ae((t) => a.selectable(e) ? u.select(e) : null, ["prevent", "stop"])
				}, [l(r.$slots, "option", t({ ref_for: !0 }, u.normalizeOptionForSlot(e)), () => [w(n(a.getOptionLabel(e)), 1)])], 42, Lt))), 128)),
				u.filteredOptions.length === 0 ? (f(), j("li", Rt, [l(r.$slots, "no-options", M(h(u.scope.noOptions)), () => [i[5] ||= w(" Sorry, no matching options. ", -1)])])) : C("", !0),
				l(r.$slots, "list-footer", M(h(u.scope.listFooter)))
			], 40, It)), [[p]]) : (f(), j("ul", {
				key: 1,
				id: `vs-${a.uid}__listbox`,
				role: "listbox",
				"aria-label": a.ariaLabelListbox,
				style: {
					display: "none",
					visibility: "hidden"
				}
			}, null, 8, zt))]),
			_: 3
		}, 8, ["name"]),
		l(r.$slots, "footer", M(h(u.scope.footer)))
	], 10, At);
}
var $ = /* @__PURE__ */ bt(kt, [["render", Bt]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcHighlight.vue_vue_type_script_lang-DnWQDM_2.mjs
function Vt(e, t) {
	let n = [], r = 0, i = e.toLowerCase().indexOf(t.toLowerCase(), r), a = 0;
	for (; i > -1 && a++ < e.length;) r = i + t.length, n.push({
		start: i,
		end: r
	}), i = e.toLowerCase().indexOf(t.toLowerCase(), r);
	return n;
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcEllipsisedOption-D6Amb91K.mjs
var Ht = {
	name: "NcEllipsisedOption",
	components: { NcHighlight: r({
		name: "NcHighlight",
		props: {
			text: {
				type: String,
				default: ""
			},
			search: {
				type: String,
				default: ""
			},
			highlight: {
				type: Array,
				default: () => []
			}
		},
		computed: {
			ranges() {
				let e = [];
				return !this.search && this.highlight.length === 0 ? e : (e = this.highlight.length > 0 ? this.highlight : Vt(this.text, this.search), e.forEach((t, n) => {
					t.end < t.start && (e[n] = {
						start: t.end,
						end: t.start
					});
				}), e = e.reduce((e, t) => (t.start < this.text.length && t.end > 0 && e.push({
					start: t.start < 0 ? 0 : t.start,
					end: t.end > this.text.length ? this.text.length : t.end
				}), e), []), e.sort((e, t) => e.start - t.start), e = e.reduce((e, t) => {
					if (!e.length) e.push(t);
					else {
						let n = e.length - 1;
						e[n].end >= t.start ? e[n] = {
							start: e[n].start,
							end: Math.max(e[n].end, t.end)
						} : e.push(t);
					}
					return e;
				}, []), e);
			},
			chunks() {
				if (this.ranges.length === 0) return [{
					start: 0,
					end: this.text.length,
					highlight: !1,
					text: this.text
				}];
				let e = [], t = 0, n = 0;
				for (; t < this.text.length;) {
					let r = this.ranges[n];
					if (r.start === t) {
						e.push({
							...r,
							highlight: !0,
							text: this.text.slice(r.start, r.end)
						}), n++, t = r.end, n >= this.ranges.length && t < this.text.length && (e.push({
							start: t,
							end: this.text.length,
							highlight: !1,
							text: this.text.slice(t)
						}), t = this.text.length);
						continue;
					}
					e.push({
						start: t,
						end: r.start,
						highlight: !1,
						text: this.text.slice(t, r.start)
					}), t = r.start;
				}
				return e;
			}
		},
		render() {
			return this.ranges.length ? a("span", {}, this.chunks.map((e) => e.highlight ? a("strong", {}, e.text) : e.text)) : a("span", {}, this.text);
		}
	}) },
	props: {
		name: {
			type: String,
			default: ""
		},
		search: {
			type: String,
			default: ""
		}
	},
	computed: {
		needsTruncate() {
			return this.name && this.name.length >= 10;
		},
		split() {
			return this.name.length - Math.min(Math.floor(this.name.length / 2), 10);
		},
		part1() {
			return this.needsTruncate ? this.name.slice(0, this.split) : this.name;
		},
		part2() {
			return this.needsTruncate ? this.name.slice(this.split) : "";
		},
		highlight1() {
			return this.search ? Vt(this.name, this.search) : [];
		},
		highlight2() {
			return this.highlight1.map((e) => ({
				start: e.start - this.split,
				end: e.end - this.split
			}));
		}
	}
}, Ut = ["title"];
function Wt(e, t, n, r, i, a) {
	let o = _("NcHighlight");
	return f(), j("span", {
		dir: "auto",
		class: "name-parts",
		title: n.name
	}, [N(o, {
		class: "name-parts__first",
		text: a.part1,
		search: n.search,
		highlight: a.highlight1
	}, null, 8, [
		"text",
		"search",
		"highlight"
	]), a.part2 ? (f(), E(o, {
		key: 0,
		class: "name-parts__last",
		text: a.part2,
		search: n.search,
		highlight: a.highlight2
	}, null, 8, [
		"text",
		"search",
		"highlight"
	])) : C("", !0)], 8, Ut);
}
var Gt = /* @__PURE__ */ i(Ht, [["render", Wt], ["__scopeId", "data-v-a612f185"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcSelect--kERLlBK.mjs
se(ie);
var Kt = {
	name: "NcSelect",
	components: {
		ChevronDown: ye,
		NcEllipsisedOption: Gt,
		NcLoadingIcon: fe,
		VueSelect: $
	},
	props: {
		...$.props,
		...$.mixins.reduce((e, t) => ({
			...e,
			...t.props
		}), {}),
		ariaLabelClearSelected: {
			type: String,
			default: O("Clear selected")
		},
		ariaLabelCombobox: {
			type: String,
			default: null
		},
		ariaLabelListbox: {
			type: String,
			default: O("Options")
		},
		ariaLabelDeselectOption: {
			type: Function,
			default: (e) => O("Deselect {option}", { option: e })
		},
		appendToBody: {
			type: Boolean,
			default: !0
		},
		calculatePosition: {
			type: Function,
			default: null
		},
		keepOpen: {
			type: Boolean,
			default: !1
		},
		components: {
			type: Object,
			default: () => ({ Deselect: { render: () => a(Ee, {
				size: 20,
				fillColor: "var(--vs-controls-color)",
				style: [{ cursor: "pointer" }]
			}) } })
		},
		limit: {
			type: Number,
			default: null
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		dropdownShouldOpen: {
			type: Function,
			default: ({ noDrop: e, open: t }) => !e && t
		},
		filterBy: {
			type: Function,
			default: null
		},
		inputClass: {
			type: [String, Object],
			default: null
		},
		inputId: {
			type: String,
			default: () => le()
		},
		inputLabel: {
			type: String,
			default: null
		},
		labelOutside: {
			type: Boolean,
			default: !1
		},
		keyboardFocusBorder: {
			type: Boolean,
			default: !0
		},
		label: {
			type: String,
			default: null
		},
		loading: {
			type: Boolean,
			default: !1
		},
		multiple: {
			type: Boolean,
			default: !1
		},
		noWrap: {
			type: Boolean,
			default: !1
		},
		options: {
			type: Array,
			default: () => []
		},
		placeholder: {
			type: String,
			default: ""
		},
		mapKeydown: {
			type: Function,
			default(e, t) {
				return {
					...e,
					27: (n) => {
						t.open && n.stopPropagation(), e[27](n);
					}
				};
			}
		},
		uid: {
			type: String,
			default: () => le()
		},
		placement: {
			type: String,
			default: "bottom"
		},
		resetFocusOnOptionsChange: {
			type: Boolean,
			default: !0
		},
		modelValue: {
			type: [
				String,
				Number,
				Object,
				Array
			],
			default: null
		},
		required: {
			type: Boolean,
			default: !1
		},
		" ": {}
	},
	emits: [" ", "update:modelValue"],
	setup() {
		return {
			avatarSize: Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--default-clickable-area")) - 2 * Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--default-grid-baseline")),
			isLegacy: p
		};
	},
	data() {
		return { search: "" };
	},
	computed: {
		inputRequired() {
			return this.required ? this.modelValue === null || Array.isArray(this.modelValue) && this.modelValue.length === 0 : null;
		},
		localCalculatePosition() {
			return this.calculatePosition === null ? (e, t, { width: n }) => {
				e.style.width = n;
				let r = {
					name: "addClass",
					fn() {
						return e.classList.add("vs__dropdown-menu--floating"), {};
					}
				}, i = {
					name: "togglePlacementClass",
					fn({ placement: n }) {
						return t.$el.classList.toggle("select--drop-up", n === "top"), e.classList.toggle("vs__dropdown-menu--floating-placement-top", n === "top"), {};
					}
				};
				return st(t.$refs.toggle, e, () => {
					ft(t.$refs.toggle, e, {
						placement: this.placement,
						middleware: [
							ct(-1),
							r,
							i,
							ut(),
							lt({ limiter: dt() })
						]
					}).then(({ x: n, y: r }) => {
						Object.assign(e.style, {
							left: `${n}px`,
							top: `${r}px`,
							width: `${t.$refs.toggle.getBoundingClientRect().width}px`
						});
					});
				});
			} : this.calculatePosition;
		},
		localFilterBy() {
			return this.filterBy ?? $.props.filterBy.default;
		},
		localLabel() {
			return this.label ?? $.props.label.default;
		},
		propsToForward() {
			let e = [...Object.keys($.props), ...$.mixins.flatMap((e) => Object.keys(e.props ?? {}))];
			return {
				...Object.fromEntries(Object.entries(this.$props).filter(([t, n]) => e.includes(t))),
				calculatePosition: this.localCalculatePosition,
				closeOnSelect: !this.keepOpen,
				filterBy: this.localFilterBy,
				label: this.localLabel
			};
		}
	},
	mounted() {
		!this.labelOutside && !this.inputLabel && !this.ariaLabelCombobox && S("[NcSelect] An `inputLabel` or `ariaLabelCombobox` should be set. If an external label is used, `labelOutside` should be set to `true`."), this.inputLabel && this.ariaLabelCombobox && S("[NcSelect] Only one of `inputLabel` or `ariaLabelCombobox` should to be set.");
	},
	methods: { t: O }
}, qt = ["for"], Jt = ["required"];
function Yt(e, r, i, a, o, s) {
	let c = _("ChevronDown"), u = _("NcEllipsisedOption"), p = _("NcLoadingIcon"), m = _("VueSelect");
	return f(), E(m, t({ class: ["select", {
		"select--legacy": a.isLegacy,
		"select--no-wrap": i.noWrap
	}] }, s.propsToForward, {
		onSearch: r[0] ||= (e) => o.search = e,
		"onUpdate:modelValue": r[1] ||= (t) => e.$emit("update:modelValue", t)
	}), de({
		search: T(({ attributes: e, events: n }) => [D("input", t({ class: ["vs__search", [i.inputClass]] }, e, {
			required: s.inputRequired,
			dir: "auto"
		}, d(n, !0)), null, 16, Jt)]),
		"open-indicator": T(({ attributes: e }) => [N(c, t(e, {
			fillColor: "var(--vs-controls-color)",
			style: { cursor: i.disabled ? null : "pointer" },
			size: 26
		}), null, 16, ["style"])]),
		option: T((t) => [l(e.$slots, "option", M(h(t)), () => [N(u, {
			name: String(t[s.localLabel]),
			search: o.search
		}, null, 8, ["name", "search"])])]),
		"selected-option": T((t) => [l(e.$slots, "selected-option", M(h(t)), () => [N(u, {
			name: String(t[s.localLabel]),
			search: o.search
		}, null, 8, ["name", "search"])])]),
		spinner: T((e) => [e.loading ? (f(), E(p, { key: 0 })) : C("", !0)]),
		"no-options": T(() => [w(n(s.t("No results")), 1)]),
		_: 2
	}, [!i.labelOutside && i.inputLabel ? {
		name: "header",
		fn: T(() => [D("label", {
			for: i.inputId,
			class: "select__label"
		}, n(i.inputLabel), 9, qt)]),
		key: "0"
	} : void 0, v(e.$slots, (t, n) => ({
		name: n,
		fn: T((t) => [l(e.$slots, n, M(h(t)))])
	}))]), 1040, ["class"]);
}
var Xt = /* @__PURE__ */ i(Kt, [["render", Yt]]);
//#endregion
export { Ee as n, ye as r, Xt as t };
