import { $ as e, An as t, At as n, Bn as r, Bt as i, D as a, E as o, En as s, Fn as c, Ft as l, It as u, Jt as d, Lt as f, Mn as p, Mt as m, Nn as h, Ot as g, Pn as _, Pt as v, Q as y, Qt as ee, Rt as b, Un as x, Wn as S, X as te, Xt as ne, Yt as re, an as C, c as ie, cn as w, dn as ae, dr as T, in as E, j as oe, jn as D, jt as se, kt as ce, ln as O, mn as k, on as A, pn as j, pr as M, r as le, rn as N, sn as ue, t as de, ur as fe, vn as P, zt as F } from "./createElementId-XLh0NVJk.chunk.mjs";
import { t as pe } from "./NcLoadingIcon-RK5ACPqk.chunk.mjs";
import { t as me } from "./NcTextField.vue_vue_type_script_setup_true_lang-C2t_3wGw.chunk.mjs";
//#region node_modules/@nextcloud/vue/dist/chunks/ChevronDown.mjs
var he = {
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
}, ge = ["aria-hidden", "aria-label"], _e = [
	"fill",
	"width",
	"height"
], ve = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, ye = { key: 0 };
function be(e, t, n, r, i, a) {
	return s(), A("span", P(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon chevron-down-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(s(), A("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [N("path", ve, [n.title ? (s(), A("title", ye, M(n.title), 1)) : C("", !0)])], 8, _e))], 16, ge);
}
var xe = /* @__PURE__ */ y(he, [["render", be]]), Se = {
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
}, Ce = ["aria-hidden", "aria-label"], we = [
	"fill",
	"width",
	"height"
], Te = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, Ee = { key: 0 };
function De(e, t, n, r, i, a) {
	return s(), A("span", P(e.$attrs, {
		"aria-hidden": n.title ? null : "true",
		"aria-label": n.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: t[0] ||= (t) => e.$emit("click", t)
	}), [(s(), A("svg", {
		fill: n.fillColor,
		class: "material-design-icon__svg",
		width: n.size,
		height: n.size,
		viewBox: "0 0 24 24"
	}, [N("path", Te, [n.title ? (s(), A("title", Ee, M(n.title), 1)) : C("", !0)])], 8, we))], 16, Ce);
}
var Oe = /* @__PURE__ */ y(Se, [["render", De]]);
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function I() {
	return typeof window < "u";
}
function L(e) {
	return ke(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function R(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function z(e) {
	return ((ke(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function ke(e) {
	return I() ? e instanceof Node || e instanceof R(e).Node : !1;
}
function B(e) {
	return I() ? e instanceof Element || e instanceof R(e).Element : !1;
}
function V(e) {
	return I() ? e instanceof HTMLElement || e instanceof R(e).HTMLElement : !1;
}
function Ae(e) {
	return !I() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof R(e).ShadowRoot;
}
function H(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = K(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function je(e) {
	return /^(table|td|th)$/.test(L(e));
}
function U(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Me = /transform|translate|scale|rotate|perspective|filter/, Ne = /paint|layout|strict|content/, W = (e) => !!e && e !== "none", Pe;
function Fe(e) {
	let t = B(e) ? K(e) : e;
	return W(t.transform) || W(t.translate) || W(t.scale) || W(t.rotate) || W(t.perspective) || !Le() && (W(t.backdropFilter) || W(t.filter)) || Me.test(t.willChange || "") || Ne.test(t.contain || "");
}
function Ie(e) {
	let t = J(e);
	for (; V(t) && !G(t);) {
		if (Fe(t)) return t;
		if (U(t)) return null;
		t = J(t);
	}
	return null;
}
function Le() {
	return Pe ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Pe;
}
function G(e) {
	return /^(html|body|#document)$/.test(L(e));
}
function K(e) {
	return R(e).getComputedStyle(e);
}
function q(e) {
	return B(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function J(e) {
	if (L(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Ae(e) && e.host || z(e);
	return Ae(t) ? t.host : t;
}
function Re(e) {
	let t = J(e);
	return G(t) ? (e.ownerDocument || e).body : V(t) && H(t) ? t : Re(t);
}
function Y(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Re(e), i = r === e.ownerDocument?.body, a = R(r);
	if (i) {
		let e = ze(a);
		return t.concat(a, a.visualViewport || [], H(r) ? r : [], e && n ? Y(e) : []);
	}
	return t.concat(r, Y(r, [], n));
}
function ze(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Be(e) {
	let t = K(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = V(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = F(n) !== a || F(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Ve(e) {
	return B(e) ? e : e.contextElement;
}
function X(e) {
	let t = Ve(e);
	if (!V(t)) return v(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Be(t), o = (a ? F(n.width) : n.width) / r, s = (a ? F(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var He = /*#__PURE__*/ v(0);
function Ue(e) {
	let t = R(e);
	return !Le() || !t.visualViewport ? He : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function We(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === R(e);
}
function Z(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Ve(e), o = v(1);
	t && (r ? B(r) && (o = X(r)) : o = X(e));
	let s = We(a, n, r) ? Ue(a) : v(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = R(a), t = B(r) ? R(r) : r, n = e, i = ze(n);
		for (; i && t !== n;) {
			let e = X(i), t = i.getBoundingClientRect(), r = K(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = R(i), i = ze(n);
		}
	}
	return b({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Q(e, t) {
	let n = q(e).scrollLeft;
	return t ? t.left + n : Z(z(e)).left + n;
}
function Ge(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Q(e, n),
		y: n.top + t.scrollTop
	};
}
function Ke(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = z(r), s = t ? U(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = v(1), u = v(0), d = V(r);
	if ((d || !a) && ((L(r) !== "body" || H(o)) && (c = q(r)), d)) {
		let e = Z(r);
		l = X(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Ge(o, c) : v(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function qe(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Je(e) {
	let t = q(e), n = e.ownerDocument.body, r = u(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = u(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Q(e), o = -t.scrollTop;
	return K(n).direction === "rtl" && (a += u(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Ye = 25;
function Xe(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = R(e), a = z(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Le() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Q(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Ye && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Ze(e, t) {
	let n = Z(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = X(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Qe(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = Xe(e, n, t);
	else if (t === "document") r = Je(z(e));
	else if (B(t)) r = Ze(t, n);
	else {
		let n = Ue(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return b(r);
}
function $e(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Y(e, [], !1).filter((e) => B(e) && L(e) !== "body"), i = null, a = K(e).position === "fixed", o = a ? J(e) : e;
	for (; B(o) && !G(o);) {
		let e = K(o), t = Fe(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = J(o);
	}
	return t.set(e, r), r;
}
function et(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? U(t) ? [] : $e(t, this._c) : [].concat(n), r], o = Qe(t, a[0], i), s = o.top, c = o.right, l = o.bottom, d = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Qe(t, a[e], i);
		s = u(n.top, s), c = f(n.right, c), l = f(n.bottom, l), d = u(n.left, d);
	}
	return {
		width: c - d,
		height: l - s,
		x: d,
		y: s
	};
}
function tt(e) {
	let { width: t, height: n } = Be(e);
	return {
		width: t,
		height: n
	};
}
function nt(e, t, n) {
	let r = V(t), i = z(t), a = n === "fixed", o = Z(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = v(0);
	if ((r || !a) && ((L(t) !== "body" || H(i)) && (s = q(t)), r)) {
		let e = Z(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Q(i));
	let l = i && !r && !a ? Ge(i, s) : v(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function rt(e) {
	return K(e).position === "static";
}
function it(e, t) {
	if (!V(e) || K(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return z(e) === n && (n = n.ownerDocument.body), n;
}
function at(e, t) {
	let n = R(e);
	if (U(e)) return n;
	if (!V(e)) {
		let t = J(e);
		for (; t && !G(t);) {
			if (B(t) && !rt(t)) return t;
			t = J(t);
		}
		return n;
	}
	let r = it(e, t);
	for (; r && je(r) && rt(r);) r = it(r, t);
	return r && G(r) && rt(r) && !Fe(r) ? n : r || Ie(e) || n;
}
var ot = async function(e) {
	let t = this.getOffsetParent || at, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: nt(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function st(e) {
	return K(e).direction === "rtl";
}
var ct = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ke,
	getDocumentElement: z,
	getClippingRect: et,
	getOffsetParent: at,
	getElementRects: ot,
	getClientRects: qe,
	getDimensions: tt,
	getScale: X,
	isElement: B,
	isRTL: st
};
function lt(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ut(e, t, n) {
	let r = null, i, a = z(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let d = e.getBoundingClientRect(), { left: p, top: m, width: h, height: g } = d;
		if (n || t(), !h || !g) return;
		let _ = l(m), v = l(a.clientWidth - (p + h)), y = l(a.clientHeight - (m + g)), ee = l(p), b = {
			rootMargin: -_ + "px " + -v + "px " + -y + "px " + -ee + "px",
			threshold: u(0, f(1, c)) || 1
		}, x = !0;
		function S(t) {
			let n = t[0].intersectionRatio;
			if (!lt(d, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!x) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			x = !1;
		}
		try {
			r = new IntersectionObserver(S, {
				...b,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(S, b);
		}
		r.observe(e);
	}
	let c = R(e), d = () => s(n);
	return c.addEventListener("resize", d), s(!0), () => {
		c.removeEventListener("resize", d), o();
	};
}
function dt(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Ve(e), u = i || a ? [...l ? Y(l) : [], ...t ? Y(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? ut(l, n, a) : null, f = -1, p = null;
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
		h && !lt(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var ft = se, pt = m, mt = ce, ht = n, gt = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...ct,
		...i.platform,
		_c: r
	};
	return g(e, t, {
		...i,
		platform: a
	});
}, _t = {
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
}, vt = {
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
}, yt = {
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
}, bt = {
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
function xt(e) {
	let t = {};
	return Object.keys(e).sort().forEach((n) => {
		t[n] = e[n];
	}), JSON.stringify(t);
}
var St = 0;
function Ct() {
	return ++St;
}
var wt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Tt = {}, Et = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "10",
	height: "10"
};
function Dt(e, t) {
	return s(), A("svg", Et, [...t[0] ||= [N("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1)]]);
}
var Ot = /* @__PURE__ */ wt(Tt, [["render", Dt]]), kt = {}, At = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "14",
	height: "10"
};
function jt(e, t) {
	return s(), A("svg", At, [...t[0] ||= [N("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1)]]);
}
var Mt = {
	Deselect: Ot,
	OpenIndicator: /* @__PURE__ */ wt(kt, [["render", jt]])
}, Nt = {
	components: { ...Mt },
	directives: { appendToBody: _t },
	mixins: [
		yt,
		bt,
		vt
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
				return typeof e == "object" ? Object.hasOwn(e, this.label) ? e[this.label] : r(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
			}
		},
		getOptionKey: {
			type: Function,
			default(e) {
				if (typeof e != "object") return e;
				try {
					return Object.hasOwn(e, "id") ? e.id : xt(e);
				} catch (t) {
					return r("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey", e, t);
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
			default: () => Ct()
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
				...Mt,
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
}, Pt = ["id", "dir"], Ft = {
	ref: "toggle",
	class: "vs__dropdown-toggle"
}, It = [
	"disabled",
	"title",
	"aria-label",
	"onMousedown",
	"onKeydown"
], Lt = {
	ref: "actions",
	class: "vs__actions"
}, Rt = [
	"disabled",
	"title",
	"aria-label"
], zt = { class: "vs__spinner" }, Bt = [
	"id",
	"aria-label",
	"aria-multiselectable"
], Vt = [
	"id",
	"aria-selected",
	"onMousemove",
	"onClick"
], Ht = {
	key: 0,
	class: "vs__no-options"
}, Ut = ["id", "aria-label"];
function Wt(e, n, r, a, o, l) {
	let u = h("append-to-body");
	return s(), A("div", {
		id: `v-select-${r.uid}`,
		dir: r.dir,
		class: fe(["v-select", l.stateClasses])
	}, [
		D(e.$slots, "header", T(j(l.scope.header))),
		N("div", Ft, [N("div", {
			ref: "selectedOptions",
			class: "vs__selected-options",
			onMousedown: n[0] ||= (...e) => l.toggleDropdown && l.toggleDropdown(...e)
		}, [(s(!0), A(ee, null, t(l.selectedValue, (t, n) => D(e.$slots, "selected-option-container", {
			option: l.normalizeOptionForSlot(t),
			deselect: l.deselect,
			multiple: r.multiple,
			disabled: r.disabled
		}, () => [(s(), A("span", {
			key: r.getOptionKey(t),
			class: "vs__selected"
		}, [D(e.$slots, "selected-option", P({ ref_for: !0 }, l.normalizeOptionForSlot(t)), () => [w(M(r.getOptionLabel(t)), 1)]), r.multiple ? (s(), A("button", {
			key: 0,
			ref_for: !0,
			ref: (e) => o.deselectButtons[n] = e,
			disabled: r.disabled,
			type: "button",
			class: "vs__deselect",
			title: r.ariaLabelDeselectOption(r.getOptionLabel(t)),
			"aria-label": r.ariaLabelDeselectOption(r.getOptionLabel(t)),
			onMousedown: ne((e) => l.deselect(t), ["stop"]),
			onKeydown: re((e) => l.keyboardDeselect(t, n), ["enter"])
		}, [(s(), E(_(l.childComponents.Deselect)))], 40, It)) : C("", !0)]))])), 256)), D(e.$slots, "search", T(j(l.scope.search)), () => [N("input", P({ class: "vs__search" }, l.scope.search.attributes, c(l.scope.search.events, !0)), null, 16)])], 544), N("div", Lt, [
			S(N("button", {
				ref: "clearButton",
				disabled: r.disabled,
				type: "button",
				class: "vs__clear",
				title: r.ariaLabelClearSelected,
				"aria-label": r.ariaLabelClearSelected,
				onClick: n[1] ||= (...e) => l.clearSelection && l.clearSelection(...e)
			}, [(s(), E(_(l.childComponents.Deselect)))], 8, Rt), [[d, l.showClearButton]]),
			r.noDrop ? C("", !0) : (s(), A("button", {
				key: 0,
				ref: "openIndicatorButton",
				class: "vs__open-indicator-button",
				type: "button",
				tabindex: "-1",
				"aria-hidden": "true",
				onMousedown: n[2] ||= (...e) => l.toggleDropdown && l.toggleDropdown(...e)
			}, [D(e.$slots, "open-indicator", T(j(l.scope.openIndicator)), () => [(s(), E(_(l.childComponents.OpenIndicator), T(j(l.scope.openIndicator.attributes)), null, 16))])], 544)),
			D(e.$slots, "spinner", T(j(l.scope.spinner)), () => [S(N("div", zt, " Loading... ", 512), [[d, e.mutableLoading]])])
		], 512)], 512),
		O(i, { name: r.transition }, {
			default: x(() => [l.dropdownOpen ? S((s(), A("ul", {
				id: `vs-${r.uid}__listbox`,
				ref: "dropdownMenu",
				key: `vs-${r.uid}__listbox`,
				class: "vs__dropdown-menu",
				role: "listbox",
				"aria-label": r.ariaLabelListbox,
				"aria-multiselectable": r.multiple ? "true" : null,
				tabindex: "-1",
				onMousedown: n[3] ||= ne((...e) => l.onMousedown && l.onMousedown(...e), ["prevent"]),
				onMouseup: n[4] ||= (...e) => l.onMouseUp && l.onMouseUp(...e)
			}, [
				D(e.$slots, "list-header", T(j(l.scope.listHeader))),
				(s(!0), A(ee, null, t(l.filteredOptions, (t, n) => (s(), A("li", {
					id: `vs-${r.uid}__option-${n}`,
					key: r.getOptionKey(t),
					role: "option",
					class: fe(["vs__dropdown-option", {
						"vs__dropdown-option--deselect": l.isOptionDeselectable(t) && n === e.typeAheadPointer,
						"vs__dropdown-option--selected": l.isOptionSelected(t),
						"vs__dropdown-option--highlight": n === e.typeAheadPointer,
						"vs__dropdown-option--kb-focus": l.hasKeyboardFocusBorder(n),
						"vs__dropdown-option--disabled": !r.selectable(t)
					}]),
					"aria-selected": l.optionAriaSelected(t),
					onMousemove: (e) => l.onMouseMove(t, n),
					onClick: ne((e) => r.selectable(t) ? l.select(t) : null, ["prevent", "stop"])
				}, [D(e.$slots, "option", P({ ref_for: !0 }, l.normalizeOptionForSlot(t)), () => [w(M(r.getOptionLabel(t)), 1)])], 42, Vt))), 128)),
				l.filteredOptions.length === 0 ? (s(), A("li", Ht, [D(e.$slots, "no-options", T(j(l.scope.noOptions)), () => [n[5] ||= w(" Sorry, no matching options. ", -1)])])) : C("", !0),
				D(e.$slots, "list-footer", T(j(l.scope.listFooter)))
			], 40, Bt)), [[u]]) : (s(), A("ul", {
				key: 1,
				id: `vs-${r.uid}__listbox`,
				role: "listbox",
				"aria-label": r.ariaLabelListbox,
				style: {
					display: "none",
					visibility: "hidden"
				}
			}, null, 8, Ut))]),
			_: 3
		}, 8, ["name"]),
		D(e.$slots, "footer", T(j(l.scope.footer)))
	], 10, Pt);
}
var $ = /* @__PURE__ */ wt(Nt, [["render", Wt]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcHighlight.vue_vue_type_script_lang.mjs
function Gt(e, t) {
	let n = [], r = 0, i = e.toLowerCase().indexOf(t.toLowerCase(), r), a = 0;
	for (; i > -1 && a++ < e.length;) r = i + t.length, n.push({
		start: i,
		end: r
	}), i = e.toLowerCase().indexOf(t.toLowerCase(), r);
	return n;
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcEllipsisedOption.mjs
var Kt = {
	name: "NcEllipsisedOption",
	components: { NcHighlight: ae({
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
				return !this.search && this.highlight.length === 0 ? e : (e = this.highlight.length > 0 ? this.highlight : Gt(this.text, this.search), e.forEach((t, n) => {
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
			return this.ranges.length ? k("span", {}, this.chunks.map((e) => e.highlight ? k("strong", {}, e.text) : e.text)) : k("span", {}, this.text);
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
			return this.search ? Gt(this.name, this.search) : [];
		},
		highlight2() {
			return this.highlight1.map((e) => ({
				start: e.start - this.split,
				end: e.end - this.split
			}));
		}
	}
}, qt = ["title"];
function Jt(e, t, n, r, i, a) {
	let o = p("NcHighlight");
	return s(), A("span", {
		dir: "auto",
		class: "name-parts",
		title: n.name
	}, [O(o, {
		class: "name-parts__first",
		text: a.part1,
		search: n.search,
		highlight: a.highlight1
	}, null, 8, [
		"text",
		"search",
		"highlight"
	]), a.part2 ? (s(), E(o, {
		key: 0,
		class: "name-parts__last",
		text: a.part2,
		search: n.search,
		highlight: a.highlight2
	}, null, 8, [
		"text",
		"search",
		"highlight"
	])) : C("", !0)], 8, qt);
}
var Yt = /* @__PURE__ */ y(Kt, [["render", Jt], ["__scopeId", "data-v-c843f2cd"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcSelect.mjs
o(oe);
var Xt = {
	name: "NcSelect",
	components: {
		ChevronDown: xe,
		NcEllipsisedOption: Yt,
		NcIconSvgWrapper: te,
		NcLoadingIcon: pe,
		NcTextField: me,
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
			default: a("Clear selected")
		},
		ariaLabelCombobox: {
			type: String,
			default: null
		},
		ariaLabelListbox: {
			type: String,
			default: a("Options")
		},
		ariaLabelDeselectOption: {
			type: Function,
			default: (e) => a("Deselect {option}", { option: e })
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
			default: () => ({ Deselect: { render: () => k(Oe, {
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
			default: () => de()
		},
		inputLabel: {
			type: String,
			default: null
		},
		helperText: {
			type: String,
			default: ""
		},
		error: {
			type: Boolean,
			default: !1
		},
		success: {
			type: Boolean,
			default: !1
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
			default: () => de()
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
			isLegacy: e,
			mdiAlertCircleOutline: le,
			mdiCheck: ie
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
						return e.classList.add("vs__dropdown-menu--floating", "nc-select__dropdown"), {};
					}
				}, i = {
					name: "togglePlacementClass",
					fn({ placement: n }) {
						return t.$el.classList.toggle("select--drop-up", n === "top"), e.classList.toggle("vs__dropdown-menu--floating-placement-top", n === "top"), {};
					}
				};
				return dt(t.$refs.toggle, e, () => {
					gt(t.$refs.toggle, e, {
						placement: this.placement,
						middleware: [
							mt(),
							r,
							i,
							ft(({ placement: e }) => e.startsWith("top") ? 10 : -1),
							pt({ limiter: ht() })
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
		!this.labelOutside && !this.inputLabel && !this.ariaLabelCombobox && r("[NcSelect] An `inputLabel` or `ariaLabelCombobox` should be set. If an external label is used, `labelOutside` should be set to `true`."), this.inputLabel && this.ariaLabelCombobox && r("[NcSelect] Only one of `inputLabel` or `ariaLabelCombobox` should to be set.");
	},
	methods: {
		t: a,
		forwardedSlots() {
			return Object.keys(this.$slots).filter((e) => e !== "footer");
		}
	}
}, Zt = ["for"], Qt = ["id"];
function $t(e, n, r, i, a, o) {
	let c = p("NcTextField"), l = p("ChevronDown"), u = p("NcEllipsisedOption"), d = p("NcLoadingIcon"), f = p("NcIconSvgWrapper"), m = p("VueSelect");
	return s(), E(m, P({ class: ["select nc-select", {
		"select--legacy": i.isLegacy,
		"select--no-wrap": r.noWrap
	}] }, o.propsToForward, {
		onSearch: n[0] ||= (e) => a.search = e,
		"onUpdate:modelValue": n[1] ||= (t) => e.$emit("update:modelValue", t)
	}), ue({
		search: x(({ attributes: e, events: t }) => [O(c, {
			id: e.id,
			class: fe(["vs__search", [r.inputClass]]),
			type: e.type,
			modelValue: e.value,
			placeholder: r.multiple || r.modelValue ? "" : r.placeholder || "",
			label: !r.labelOutside && !r.multiple && r.inputLabel ? r.inputLabel : "",
			labelOutside: r.labelOutside || r.multiple,
			disabled: r.disabled,
			required: o.inputRequired,
			role: e.role,
			tabindex: e.tabindex,
			readonly: e.readonly,
			autocomplete: e.autocomplete,
			"aria-label": e["aria-label"],
			"aria-describedby": [e["aria-describedby"], r.helperText ? `${r.inputId}-helper-text` : null].filter(Boolean).join(" ") || void 0,
			"aria-autocomplete": e["aria-autocomplete"],
			"aria-controls": e["aria-controls"],
			"aria-owns": e["aria-owns"],
			"aria-expanded": e["aria-expanded"],
			"aria-activedescendant": e["aria-activedescendant"],
			onKeydown: t.keydown,
			onKeypress: t.keypress,
			onFocus: t.focus,
			onBlur: t.blur,
			onCompositionstart: t.compositionstart,
			onCompositionend: t.compositionend,
			"onUpdate:modelValue": (e) => t.input({ target: { value: e } })
		}, null, 8, /* @__PURE__ */ "id.class.type.modelValue.placeholder.label.labelOutside.disabled.required.role.tabindex.readonly.autocomplete.aria-label.aria-describedby.aria-autocomplete.aria-controls.aria-owns.aria-expanded.aria-activedescendant.onKeydown.onKeypress.onFocus.onBlur.onCompositionstart.onCompositionend.onUpdate:modelValue".split("."))]),
		"open-indicator": x(({ attributes: e }) => [O(l, P(e, {
			fillColor: "var(--vs-controls-color)",
			style: { cursor: r.disabled ? null : "pointer" },
			size: 20
		}), null, 16, ["style"])]),
		option: x((t) => [D(e.$slots, "option", T(j(t)), () => [O(u, {
			name: String(t[o.localLabel]),
			search: a.search
		}, null, 8, ["name", "search"])])]),
		"selected-option": x((t) => [D(e.$slots, "selected-option", T(j(t)), () => [O(u, {
			name: String(t[o.localLabel]),
			search: a.search
		}, null, 8, ["name", "search"])])]),
		spinner: x((e) => [e.loading ? (s(), E(d, { key: 0 })) : C("", !0)]),
		"no-options": x(() => [w(M(o.t("No results")), 1)]),
		_: 2
	}, [
		r.multiple && !r.labelOutside && r.inputLabel ? {
			name: "header",
			fn: x(() => [N("label", {
				for: r.inputId,
				class: "select__label"
			}, M(r.inputLabel), 9, Zt)]),
			key: "0"
		} : void 0,
		r.helperText || e.$slots.footer ? {
			name: "footer",
			fn: x((t) => [r.helperText ? (s(), A("p", {
				key: 0,
				id: `${r.inputId}-helper-text`,
				class: fe(["select__helper-text", {
					"select__helper-text--error": r.error,
					"select__helper-text--success": r.success
				}])
			}, [r.success ? (s(), E(f, {
				key: 0,
				class: "select__helper-text-icon",
				path: i.mdiCheck,
				inline: ""
			}, null, 8, ["path"])) : r.error ? (s(), E(f, {
				key: 1,
				class: "select__helper-text-icon",
				path: i.mdiAlertCircleOutline,
				inline: ""
			}, null, 8, ["path"])) : C("", !0), w(" " + M(r.helperText), 1)], 10, Qt)) : C("", !0), D(e.$slots, "footer", T(j(t)))]),
			key: "1"
		} : void 0,
		t(o.forwardedSlots(), (t) => ({
			name: t,
			fn: x((n) => [D(e.$slots, t, T(j(n)))])
		}))
	]), 1040, ["class"]);
}
var en = /* @__PURE__ */ y(Xt, [["render", $t]]);
//#endregion
export { Oe as n, xe as r, en as t };
