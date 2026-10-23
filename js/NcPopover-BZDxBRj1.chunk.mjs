import { t as e } from "./logger-Dmvqkkgn.chunk.mjs";
import { Dt as t, Et as n, Gn as r, Hn as i, Mt as a, Nn as o, Nt as s, On as c, Ot as l, Pn as u, Q as d, Qt as f, Rt as p, Vt as m, Yt as h, an as g, dn as _, fr as v, hr as ee, in as y, jn as te, jt as ne, kn as re, kt as ie, ln as b, mn as x, mr as ae, on as S, pn as oe, pr as se, qn as ce, rn as C, rr as le, vn as ue, wt as de, yn as fe } from "./createElementId-BhyzukIw.chunk.mjs";
//#region node_modules/floating-vue/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function w(e) {
	return e.ownerDocument?.defaultView || window;
}
function T(e) {
	return w(e).getComputedStyle(e);
}
var pe = Math.min, E = Math.max, me = Math.round;
function he(e) {
	let t = T(e), n = parseFloat(t.width), r = parseFloat(t.height), i = e.offsetWidth, a = e.offsetHeight, o = me(n) !== i || me(r) !== a;
	return o && (n = i, r = a), {
		width: n,
		height: r,
		fallback: o
	};
}
function D(e) {
	return ve(e) ? (e.nodeName || "").toLowerCase() : "";
}
var ge;
function _e() {
	if (ge) return ge;
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? (ge = e.brands.map(((e) => e.brand + "/" + e.version)).join(" "), ge) : navigator.userAgent;
}
function O(e) {
	return e instanceof w(e).HTMLElement;
}
function k(e) {
	return e instanceof w(e).Element;
}
function ve(e) {
	return e instanceof w(e).Node;
}
function ye(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof w(e).ShadowRoot || e instanceof ShadowRoot;
}
function be(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = T(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function xe(e) {
	return [
		"table",
		"td",
		"th"
	].includes(D(e));
}
function Se(e) {
	let t = /firefox/i.test(_e()), n = T(e), r = n.backdropFilter || n.WebkitBackdropFilter;
	return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((e) => n.willChange.includes(e))) || [
		"paint",
		"layout",
		"strict",
		"content"
	].some(((e) => {
		let t = n.contain;
		return t != null && t.includes(e);
	}));
}
function Ce() {
	return !/^((?!chrome|android).)*safari/i.test(_e());
}
function we(e) {
	return [
		"html",
		"body",
		"#document"
	].includes(D(e));
}
function Te(e) {
	return k(e) ? e : e.contextElement;
}
var Ee = {
	x: 1,
	y: 1
};
function A(e) {
	let t = Te(e);
	if (!O(t)) return Ee;
	let n = t.getBoundingClientRect(), { width: r, height: i, fallback: a } = he(t), o = (a ? me(n.width) : n.width) / r, s = (a ? me(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
function j(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Te(e), o = Ee;
	t && (r ? k(r) && (o = A(r)) : o = A(e));
	let s = a ? w(a) : window, c = !Ce() && n, l = (i.left + (c && s.visualViewport?.offsetLeft || 0)) / o.x, u = (i.top + (c && s.visualViewport?.offsetTop || 0)) / o.y, d = i.width / o.x, f = i.height / o.y;
	if (a) {
		let e = w(a), t = r && k(r) ? w(r) : r, n = e.frameElement;
		for (; n && r && t !== e;) {
			let e = A(n), t = n.getBoundingClientRect(), r = getComputedStyle(n);
			t.x += (n.clientLeft + parseFloat(r.paddingLeft)) * e.x, t.y += (n.clientTop + parseFloat(r.paddingTop)) * e.y, l *= e.x, u *= e.y, d *= e.x, f *= e.y, l += t.x, u += t.y, n = w(n).frameElement;
		}
	}
	return {
		width: d,
		height: f,
		top: u,
		right: l + d,
		bottom: u + f,
		left: l,
		x: l,
		y: u
	};
}
function M(e) {
	return ((ve(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function N(e) {
	return k(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.pageXOffset,
		scrollTop: e.pageYOffset
	};
}
function De(e) {
	return j(M(e)).left + N(e).scrollLeft;
}
function P(e) {
	if (D(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ye(e) && e.host || M(e);
	return ye(t) ? t.host : t;
}
function Oe(e) {
	let t = P(e);
	return we(t) ? t.ownerDocument.body : O(t) && be(t) ? t : Oe(t);
}
function ke(e, t) {
	t === void 0 && (t = []);
	let n = Oe(e), r = n === e.ownerDocument?.body, i = w(n);
	return r ? t.concat(i, i.visualViewport || [], be(n) ? n : []) : t.concat(n, ke(n));
}
function Ae(e, t, n) {
	return t === "viewport" ? p(function(e, t) {
		let n = w(e), r = M(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
		if (i) {
			a = i.width, o = i.height;
			let e = Ce();
			(e || !e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
		}
		return {
			width: a,
			height: o,
			x: s,
			y: c
		};
	}(e, n)) : k(t) ? p(function(e, t) {
		let n = j(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = O(e) ? A(e) : {
			x: 1,
			y: 1
		};
		return {
			width: e.clientWidth * a.x,
			height: e.clientHeight * a.y,
			x: i * a.x,
			y: r * a.y
		};
	}(t, n)) : p(function(e) {
		let t = M(e), n = N(e), r = e.ownerDocument.body, i = E(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = E(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + De(e), s = -n.scrollTop;
		return T(r).direction === "rtl" && (o += E(t.clientWidth, r.clientWidth) - i), {
			width: i,
			height: a,
			x: o,
			y: s
		};
	}(M(e)));
}
function je(e) {
	return O(e) && T(e).position !== "fixed" ? e.offsetParent : null;
}
function Me(e) {
	let t = w(e), n = je(e);
	for (; n && xe(n) && T(n).position === "static";) n = je(n);
	return n && (D(n) === "html" || D(n) === "body" && T(n).position === "static" && !Se(n)) ? t : n || function(e) {
		let t = P(e);
		for (; O(t) && !we(t);) {
			if (Se(t)) return t;
			t = P(t);
		}
		return null;
	}(e) || t;
}
function Ne(e, t, n) {
	let r = O(t), i = M(t), a = j(e, !0, n === "fixed", t), o = {
		scrollLeft: 0,
		scrollTop: 0
	}, s = {
		x: 0,
		y: 0
	};
	if (r || !r && n !== "fixed") {
		if ((D(t) !== "body" || be(i)) && (o = N(t)), O(t)) {
			let e = j(t, !0);
			s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop;
		} else i && (s.x = De(i));
	}
	return {
		x: a.left + o.scrollLeft - s.x,
		y: a.top + o.scrollTop - s.y,
		width: a.width,
		height: a.height
	};
}
var Pe = {
	getClippingRect: function(e) {
		let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? function(e, t) {
			let n = t.get(e);
			if (n) return n;
			let r = ke(e).filter(((e) => k(e) && D(e) !== "body")), i = null, a = T(e).position === "fixed", o = a ? P(e) : e;
			for (; k(o) && !we(o);) {
				let e = T(o), t = Se(o);
				(a ? t || i : t || e.position !== "static" || !i || !["absolute", "fixed"].includes(i.position)) ? i = e : r = r.filter(((e) => e !== o)), o = P(o);
			}
			return t.set(e, r), r;
		}(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce(((e, n) => {
			let r = Ae(t, n, i);
			return e.top = E(r.top, e.top), e.right = pe(r.right, e.right), e.bottom = pe(r.bottom, e.bottom), e.left = E(r.left, e.left), e;
		}), Ae(t, o, i));
		return {
			width: s.right - s.left,
			height: s.bottom - s.top,
			x: s.left,
			y: s.top
		};
	},
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { rect: t, offsetParent: n, strategy: r } = e, i = O(n), a = M(n);
		if (n === a) return t;
		let o = {
			scrollLeft: 0,
			scrollTop: 0
		}, s = {
			x: 1,
			y: 1
		}, c = {
			x: 0,
			y: 0
		};
		if ((i || !i && r !== "fixed") && ((D(n) !== "body" || be(a)) && (o = N(n)), O(n))) {
			let e = j(n);
			s = A(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop;
		}
		return {
			width: t.width * s.x,
			height: t.height * s.y,
			x: t.x * s.x - o.scrollLeft * s.x + c.x,
			y: t.y * s.y - o.scrollTop * s.y + c.y
		};
	},
	isElement: k,
	getDimensions: function(e) {
		return O(e) ? he(e) : e.getBoundingClientRect();
	},
	getOffsetParent: Me,
	getDocumentElement: M,
	getScale: A,
	async getElementRects(e) {
		let { reference: t, floating: n, strategy: r } = e, i = this.getOffsetParent || Me, a = this.getDimensions;
		return {
			reference: Ne(t, await i(n), r),
			floating: {
				x: 0,
				y: 0,
				...await a(n)
			}
		};
	},
	getClientRects: (e) => Array.from(e.getClientRects()),
	isRTL: (e) => T(e).direction === "rtl"
}, Fe = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Pe,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return l(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/floating-vue/dist/floating-vue.mjs
function Ie(e, t) {
	for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? Ie(e[n], t[n]) : e[n] = t[n]);
}
var F = {
	disabled: !1,
	distance: 5,
	skidding: 0,
	container: "body",
	boundary: void 0,
	instantMove: !1,
	disposeTimeout: 150,
	popperTriggers: [],
	strategy: "absolute",
	preventOverflow: !0,
	flip: !0,
	shift: !0,
	overflowPadding: 0,
	arrowPadding: 0,
	arrowOverflow: !0,
	autoHideOnMousedown: !1,
	themes: {
		tooltip: {
			placement: "top",
			triggers: [
				"hover",
				"focus",
				"touch"
			],
			hideTriggers: (e) => [...e, "click"],
			delay: {
				show: 200,
				hide: 0
			},
			handleResize: !1,
			html: !1,
			loadingContent: "..."
		},
		dropdown: {
			placement: "bottom",
			triggers: ["click"],
			delay: 0,
			handleResize: !0,
			autoHide: !0
		},
		menu: {
			$extend: "dropdown",
			triggers: ["hover", "focus"],
			popperTriggers: ["hover"],
			delay: {
				show: 0,
				hide: 400
			}
		}
	}
};
function I(e, t) {
	let n = F.themes[e] || {}, r;
	do
		r = n[t], typeof r > "u" ? n.$extend ? n = F.themes[n.$extend] || {} : (n = null, r = F[t]) : n = null;
	while (n);
	return r;
}
function Le(e) {
	let t = [e], n = F.themes[e] || {};
	do
		n.$extend && !n.$resetCss ? (t.push(n.$extend), n = F.themes[n.$extend] || {}) : n = null;
	while (n);
	return t.map((e) => `v-popper--theme-${e}`);
}
function Re(e) {
	let t = [e], n = F.themes[e] || {};
	do
		n.$extend ? (t.push(n.$extend), n = F.themes[n.$extend] || {}) : n = null;
	while (n);
	return t;
}
var L = !1;
if (typeof window < "u") {
	L = !1;
	try {
		let e = Object.defineProperty({}, "passive", { get() {
			L = !0;
		} });
		window.addEventListener("test", null, e);
	} catch {}
}
var ze = !1;
typeof window < "u" && typeof navigator < "u" && (ze = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
var Be = [
	"auto",
	"top",
	"bottom",
	"left",
	"right"
].reduce((e, t) => e.concat([
	t,
	`${t}-start`,
	`${t}-end`
]), []), Ve = {
	hover: "mouseenter",
	focus: "focus",
	click: "click",
	touch: "touchstart",
	pointer: "pointerdown"
}, He = {
	hover: "mouseleave",
	focus: "blur",
	click: "click",
	touch: "touchend",
	pointer: "pointerup"
};
function Ue(e, t) {
	let n = e.indexOf(t);
	n !== -1 && e.splice(n, 1);
}
function We() {
	return new Promise((e) => requestAnimationFrame(() => {
		requestAnimationFrame(e);
	}));
}
var R = [], z = null, Ge = {};
function Ke(e) {
	let t = Ge[e];
	return t ||= Ge[e] = [], t;
}
var qe = function() {};
typeof window < "u" && (qe = window.Element);
function B(e) {
	return function(t) {
		return I(t.theme, e);
	};
}
var Je = "__floating-vue__popper", Ye = () => _({
	name: "VPopper",
	provide() {
		return { [Je]: { parentPopper: this } };
	},
	inject: { [Je]: { default: null } },
	props: {
		theme: {
			type: String,
			required: !0
		},
		targetNodes: {
			type: Function,
			required: !0
		},
		referenceNode: {
			type: Function,
			default: null
		},
		popperNode: {
			type: Function,
			required: !0
		},
		shown: {
			type: Boolean,
			default: !1
		},
		showGroup: {
			type: String,
			default: null
		},
		ariaId: { default: null },
		disabled: {
			type: Boolean,
			default: B("disabled")
		},
		positioningDisabled: {
			type: Boolean,
			default: B("positioningDisabled")
		},
		placement: {
			type: String,
			default: B("placement"),
			validator: (e) => Be.includes(e)
		},
		delay: {
			type: [
				String,
				Number,
				Object
			],
			default: B("delay")
		},
		distance: {
			type: [Number, String],
			default: B("distance")
		},
		skidding: {
			type: [Number, String],
			default: B("skidding")
		},
		triggers: {
			type: Array,
			default: B("triggers")
		},
		showTriggers: {
			type: [Array, Function],
			default: B("showTriggers")
		},
		hideTriggers: {
			type: [Array, Function],
			default: B("hideTriggers")
		},
		popperTriggers: {
			type: Array,
			default: B("popperTriggers")
		},
		popperShowTriggers: {
			type: [Array, Function],
			default: B("popperShowTriggers")
		},
		popperHideTriggers: {
			type: [Array, Function],
			default: B("popperHideTriggers")
		},
		container: {
			type: [
				String,
				Object,
				qe,
				Boolean
			],
			default: B("container")
		},
		boundary: {
			type: [String, qe],
			default: B("boundary")
		},
		strategy: {
			type: String,
			validator: (e) => ["absolute", "fixed"].includes(e),
			default: B("strategy")
		},
		autoHide: {
			type: [Boolean, Function],
			default: B("autoHide")
		},
		handleResize: {
			type: Boolean,
			default: B("handleResize")
		},
		instantMove: {
			type: Boolean,
			default: B("instantMove")
		},
		eagerMount: {
			type: Boolean,
			default: B("eagerMount")
		},
		popperClass: {
			type: [
				String,
				Array,
				Object
			],
			default: B("popperClass")
		},
		computeTransformOrigin: {
			type: Boolean,
			default: B("computeTransformOrigin")
		},
		autoMinSize: {
			type: Boolean,
			default: B("autoMinSize")
		},
		autoSize: {
			type: [Boolean, String],
			default: B("autoSize")
		},
		autoMaxSize: {
			type: Boolean,
			default: B("autoMaxSize")
		},
		autoBoundaryMaxSize: {
			type: Boolean,
			default: B("autoBoundaryMaxSize")
		},
		preventOverflow: {
			type: Boolean,
			default: B("preventOverflow")
		},
		overflowPadding: {
			type: [Number, String],
			default: B("overflowPadding")
		},
		arrowPadding: {
			type: [Number, String],
			default: B("arrowPadding")
		},
		arrowOverflow: {
			type: Boolean,
			default: B("arrowOverflow")
		},
		flip: {
			type: Boolean,
			default: B("flip")
		},
		shift: {
			type: Boolean,
			default: B("shift")
		},
		shiftCrossAxis: {
			type: Boolean,
			default: B("shiftCrossAxis")
		},
		noAutoFocus: {
			type: Boolean,
			default: B("noAutoFocus")
		},
		disposeTimeout: {
			type: Number,
			default: B("disposeTimeout")
		}
	},
	emits: {
		show: () => !0,
		hide: () => !0,
		"update:shown": (e) => !0,
		"apply-show": () => !0,
		"apply-hide": () => !0,
		"close-group": () => !0,
		"close-directive": () => !0,
		"auto-hide": () => !0,
		resize: () => !0
	},
	data() {
		return {
			isShown: !1,
			isMounted: !1,
			skipTransition: !1,
			classes: {
				showFrom: !1,
				showTo: !1,
				hideFrom: !1,
				hideTo: !0
			},
			result: {
				x: 0,
				y: 0,
				placement: "",
				strategy: this.strategy,
				arrow: {
					x: 0,
					y: 0,
					centerOffset: 0
				},
				transformOrigin: null
			},
			randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
			shownChildren: /* @__PURE__ */ new Set(),
			lastAutoHide: !0,
			pendingHide: !1,
			containsGlobalTarget: !1,
			isDisposed: !0,
			mouseDownContains: !1
		};
	},
	computed: {
		popperId() {
			return this.ariaId == null ? this.randomId : this.ariaId;
		},
		shouldMountContent() {
			return this.eagerMount || this.isMounted;
		},
		slotData() {
			return {
				popperId: this.popperId,
				isShown: this.isShown,
				shouldMountContent: this.shouldMountContent,
				skipTransition: this.skipTransition,
				autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
				show: this.show,
				hide: this.hide,
				handleResize: this.handleResize,
				onResize: this.onResize,
				classes: {
					...this.classes,
					popperClass: this.popperClass
				},
				result: this.positioningDisabled ? null : this.result,
				attrs: this.$attrs
			};
		},
		parentPopper() {
			return this[Je]?.parentPopper;
		},
		hasPopperShowTriggerHover() {
			return this.popperTriggers?.includes("hover") || this.popperShowTriggers?.includes("hover");
		}
	},
	watch: {
		shown: "$_autoShowHide",
		disabled(e) {
			e ? this.dispose() : this.init();
		},
		async container() {
			this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
		},
		triggers: {
			handler: "$_refreshListeners",
			deep: !0
		},
		positioningDisabled: "$_refreshListeners",
		...[
			"placement",
			"distance",
			"skidding",
			"boundary",
			"strategy",
			"overflowPadding",
			"arrowPadding",
			"preventOverflow",
			"shift",
			"shiftCrossAxis",
			"flip"
		].reduce((e, t) => (e[t] = "$_computePosition", e), {})
	},
	created() {
		this.autoMinSize && console.warn("[floating-vue] `autoMinSize` option is deprecated. Use `autoSize=\"min\"` instead."), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
	},
	mounted() {
		this.init(), this.$_detachPopperNode();
	},
	activated() {
		this.$_autoShowHide();
	},
	deactivated() {
		this.hide();
	},
	beforeUnmount() {
		this.dispose();
	},
	methods: {
		show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
			var r;
			(r = this.parentPopper) != null && r.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (n || !this.disabled) && (this.parentPopper?.lockedChild === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
				this.$_showFrameLocked = !1;
			})), this.$emit("update:shown", !0));
		},
		hide({ event: e = null, skipDelay: t = !1 } = {}) {
			if (!this.$_hideInProgress) {
				if (this.shownChildren.size > 0) {
					this.pendingHide = !0;
					return;
				}
				if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
					this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
						this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
					}, 1e3));
					return;
				}
				this.parentPopper?.lockedChild === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
			}
		},
		init() {
			this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = this.referenceNode?.call(this) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((e) => e.nodeType === e.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
		},
		dispose() {
			this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
		},
		async onResize() {
			this.isShown && (await this.$_computePosition(), this.$emit("resize"));
		},
		async $_computePosition() {
			if (this.isDisposed || this.positioningDisabled) return;
			let e = {
				strategy: this.strategy,
				middleware: []
			};
			(this.distance || this.skidding) && e.middleware.push(ne({
				mainAxis: this.distance,
				crossAxis: this.skidding
			}));
			let r = this.placement.startsWith("auto");
			if (r ? e.middleware.push(t({ alignment: this.placement.split("-")[1] ?? "" })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(a({
				padding: this.overflowPadding,
				boundary: this.boundary,
				crossAxis: this.shiftCrossAxis
			})), !r && this.flip && e.middleware.push(ie({
				padding: this.overflowPadding,
				boundary: this.boundary
			}))), e.middleware.push(n({
				element: this.$_arrowNode,
				padding: this.arrowPadding
			})), this.arrowOverflow && e.middleware.push({
				name: "arrowOverflow",
				fn: ({ placement: e, rects: t, middlewareData: n }) => {
					let r, { centerOffset: i } = n.arrow;
					return r = e.startsWith("top") || e.startsWith("bottom") ? Math.abs(i) > t.reference.width / 2 : Math.abs(i) > t.reference.height / 2, { data: { overflow: r } };
				}
			}), this.autoMinSize || this.autoSize) {
				let t = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
				e.middleware.push({
					name: "autoSize",
					fn: ({ rects: e, placement: n, middlewareData: r }) => {
						var i;
						if ((i = r.autoSize) != null && i.skip) return {};
						let a, o;
						return n.startsWith("top") || n.startsWith("bottom") ? a = e.reference.width : o = e.reference.height, this.$_innerNode.style[t === "min" ? "minWidth" : t === "max" ? "maxWidth" : "width"] = a == null ? null : `${a}px`, this.$_innerNode.style[t === "min" ? "minHeight" : t === "max" ? "maxHeight" : "height"] = o == null ? null : `${o}px`, {
							data: { skip: !0 },
							reset: { rects: !0 }
						};
					}
				});
			}
			(this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(s({
				boundary: this.boundary,
				padding: this.overflowPadding,
				apply: ({ availableWidth: e, availableHeight: t }) => {
					this.$_innerNode.style.maxWidth = e == null ? null : `${e}px`, this.$_innerNode.style.maxHeight = t == null ? null : `${t}px`;
				}
			})));
			let i = await Fe(this.$_referenceNode, this.$_popperNode, e);
			Object.assign(this.result, {
				x: i.x,
				y: i.y,
				placement: i.placement,
				strategy: i.strategy,
				arrow: {
					...i.middlewareData.arrow,
					...i.middlewareData.arrowOverflow
				}
			});
		},
		$_scheduleShow(e, t = !1) {
			if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), z && this.instantMove && z.instantMove && z !== this.parentPopper) {
				z.$_applyHide(!0), this.$_applyShow(!0);
				return;
			}
			t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
		},
		$_scheduleHide(e, t = !1) {
			if (this.shownChildren.size > 0) {
				this.pendingHide = !0;
				return;
			}
			this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (z = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
		},
		$_computeDelay(e) {
			let t = this.delay;
			return parseInt(t && t[e] || t || 0);
		},
		async $_applyShow(e = !1) {
			clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await We(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([...ke(this.$_referenceNode), ...ke(this.$_popperNode)], "scroll", () => {
				this.$_computePosition();
			}));
		},
		async $_applyShowEffect() {
			if (this.$_hideInProgress) return;
			if (this.computeTransformOrigin) {
				let e = this.$_referenceNode.getBoundingClientRect(), t = this.$_popperNode.querySelector(".v-popper__wrapper"), n = t.parentNode.getBoundingClientRect(), r = e.x + e.width / 2 - (n.left + t.offsetLeft), i = e.y + e.height / 2 - (n.top + t.offsetTop);
				this.result.transformOrigin = `${r}px ${i}px`;
			}
			this.isShown = !0, this.$_applyAttrsToTarget({
				"aria-describedby": this.popperId,
				"data-popper-shown": ""
			});
			let e = this.showGroup;
			if (e) {
				let t;
				for (let n = 0; n < R.length; n++) t = R[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
			}
			R.push(this), document.body.classList.add("v-popper--some-open");
			for (let e of Re(this.theme)) Ke(e).push(this), document.body.classList.add(`v-popper--some-open--${e}`);
			this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await We(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
		},
		async $_applyHide(e = !1) {
			if (this.shownChildren.size > 0) {
				this.pendingHide = !0, this.$_hideInProgress = !1;
				return;
			}
			if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
			this.skipTransition = e, Ue(R, this), R.length === 0 && document.body.classList.remove("v-popper--some-open");
			for (let e of Re(this.theme)) {
				let t = Ke(e);
				Ue(t, this), t.length === 0 && document.body.classList.remove(`v-popper--some-open--${e}`);
			}
			z === this && (z = null), this.isShown = !1, this.$_applyAttrsToTarget({
				"aria-describedby": void 0,
				"data-popper-shown": void 0
			}), clearTimeout(this.$_disposeTimer);
			let t = this.disposeTimeout;
			t !== null && (this.$_disposeTimer = setTimeout(() => {
				this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
			}, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await We(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
		},
		$_autoShowHide() {
			this.shown ? this.show() : this.hide();
		},
		$_ensureTeleport() {
			if (this.isDisposed) return;
			let e = this.container;
			if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e) throw Error("No container for popover: " + this.container);
			e.appendChild(this.$_popperNode), this.isMounted = !0;
		},
		$_addEventListeners() {
			let e = (e) => {
				this.isShown && !this.$_hideInProgress || (e.usedByTooltip = !0, !this.$_preventShow && this.show({ event: e }));
			};
			this.$_registerTriggerListeners(this.$_targetNodes, Ve, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Ve, this.popperTriggers, this.popperShowTriggers, e);
			let t = (e) => {
				e.usedByTooltip || this.hide({ event: e });
			};
			this.$_registerTriggerListeners(this.$_targetNodes, He, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], He, this.popperTriggers, this.popperHideTriggers, t);
		},
		$_registerEventListeners(e, t, n) {
			this.$_events.push({
				targetNodes: e,
				eventType: t,
				handler: n
			}), e.forEach((e) => e.addEventListener(t, n, L ? { passive: !0 } : void 0));
		},
		$_registerTriggerListeners(e, t, n, r, i) {
			let a = n;
			r != null && (a = typeof r == "function" ? r(a) : r), a.forEach((n) => {
				let r = t[n];
				r && this.$_registerEventListeners(e, r, i);
			});
		},
		$_removeEventListeners(e) {
			let t = [];
			this.$_events.forEach((n) => {
				let { targetNodes: r, eventType: i, handler: a } = n;
				!e || e === i ? r.forEach((e) => e.removeEventListener(i, a)) : t.push(n);
			}), this.$_events = t;
		},
		$_refreshListeners() {
			this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
		},
		$_handleGlobalClose(e, t = !1) {
			this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
				this.$_preventShow = !1;
			}, 300)));
		},
		$_detachPopperNode() {
			this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
		},
		$_swapTargetAttrs(e, t) {
			for (let n of this.$_targetNodes) {
				let r = n.getAttribute(e);
				r && (n.removeAttribute(e), n.setAttribute(t, r));
			}
		},
		$_applyAttrsToTarget(e) {
			for (let t of this.$_targetNodes) for (let n in e) {
				let r = e[n];
				r == null ? t.removeAttribute(n) : t.setAttribute(n, r);
			}
		},
		$_updateParentShownChildren(e) {
			let t = this.parentPopper;
			for (; t;) e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
		},
		$_isAimingPopper() {
			let e = this.$_referenceNode.getBoundingClientRect();
			if (U >= e.left && U <= e.right && W >= e.top && W <= e.bottom) {
				let e = this.$_popperNode.getBoundingClientRect(), t = U - V, n = W - H, r = e.left + e.width / 2 - V + (e.top + e.height / 2) - H + e.width + e.height, i = V + t * r, a = H + n * r;
				return nt(V, H, i, a, e.left, e.top, e.left, e.bottom) || nt(V, H, i, a, e.left, e.top, e.right, e.top) || nt(V, H, i, a, e.right, e.top, e.right, e.bottom) || nt(V, H, i, a, e.left, e.bottom, e.right, e.bottom);
			}
			return !1;
		}
	},
	render() {
		return this.$slots.default(this.slotData);
	}
});
if (typeof document < "u" && typeof window < "u") {
	if (ze) {
		let e = !L || {
			passive: !0,
			capture: !0
		};
		document.addEventListener("touchstart", (e) => Xe(e, !0), e), document.addEventListener("touchend", (e) => Ze(e, !0), e);
	} else window.addEventListener("mousedown", (e) => Xe(e, !1), !0), window.addEventListener("click", (e) => Ze(e, !1), !0);
	window.addEventListener("resize", tt);
}
function Xe(e, t) {
	if (F.autoHideOnMousedown) Qe(e, t);
	else for (let t = 0; t < R.length; t++) {
		let n = R[t];
		try {
			n.mouseDownContains = n.popperNode().contains(e.target);
		} catch {}
	}
}
function Ze(e, t) {
	F.autoHideOnMousedown || Qe(e, t);
}
function Qe(e, t) {
	let n = {};
	for (let r = R.length - 1; r >= 0; r--) {
		let i = R[r];
		try {
			let r = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
			i.pendingHide = !1, requestAnimationFrame(() => {
				if (i.pendingHide = !1, !n[i.randomId] && $e(i, r, e)) {
					if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
						let e = i.parentPopper;
						for (; e;) n[e.randomId] = !0, e = e.parentPopper;
						return;
					}
					let a = i.parentPopper;
					for (; a && $e(a, a.containsGlobalTarget, e);) a.$_handleGlobalClose(e, t), a = a.parentPopper;
				}
			});
		} catch {}
	}
}
function $e(e, t, n) {
	return n.closeAllPopover || n.closePopover && t || et(e, n) && !t;
}
function et(e, t) {
	if (typeof e.autoHide == "function") {
		let n = e.autoHide(t);
		return e.lastAutoHide = n, n;
	}
	return e.autoHide;
}
function tt() {
	for (let e = 0; e < R.length; e++) R[e].$_computePosition();
}
var V = 0, H = 0, U = 0, W = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
	V = U, H = W, U = e.clientX, W = e.clientY;
}, L ? { passive: !0 } : void 0);
function nt(e, t, n, r, i, a, o, s) {
	let c = ((o - i) * (t - a) - (s - a) * (e - i)) / ((s - a) * (n - e) - (o - i) * (r - t)), l = ((n - e) * (t - a) - (r - t) * (e - i)) / ((s - a) * (n - e) - (o - i) * (r - t));
	return c >= 0 && c <= 1 && l >= 0 && l <= 1;
}
var rt = { extends: Ye() }, it = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
function at(e, t, n, r, i, a) {
	return c(), S("div", {
		ref: "reference",
		class: v(["v-popper", { "v-popper--shown": e.slotData.isShown }])
	}, [o(e.$slots, "default", se(oe(e.slotData)))], 2);
}
var ot = /* @__PURE__ */ it(rt, [["render", at]]);
function st() {
	var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
	if (e.indexOf("Trident/") > 0) {
		var n = e.indexOf("rv:");
		return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
	}
	var r = e.indexOf("Edge/");
	return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : -1;
}
var ct;
function lt() {
	lt.init || (lt.init = !0, ct = st() !== -1);
}
var G = {
	name: "ResizeObserver",
	props: {
		emitOnMount: {
			type: Boolean,
			default: !1
		},
		ignoreWidth: {
			type: Boolean,
			default: !1
		},
		ignoreHeight: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["notify"],
	mounted() {
		lt(), fe(() => {
			this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
		});
		let e = document.createElement("object");
		this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ct && this.$el.appendChild(e), e.data = "about:blank", ct || this.$el.appendChild(e);
	},
	beforeUnmount() {
		this.removeResizeHandlers();
	},
	methods: {
		compareAndNotify() {
			(!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
		},
		emitSize() {
			this.$emit("notify", {
				width: this._w,
				height: this._h
			});
		},
		addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
		},
		removeResizeHandlers() {
			this._resizeObject && this._resizeObject.onload && (!ct && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
		}
	}
}, ut = /* @__PURE__ */ ce("data-v-b329ee4c");
te("data-v-b329ee4c");
var dt = {
	class: "resize-observer",
	tabindex: "-1"
};
re(), G.render = /* @__PURE__ */ ut((e, t, n, r, i, a) => (c(), y("div", dt))), G.__scopeId = "data-v-b329ee4c", G.__file = "src/components/ResizeObserver.vue";
var ft = (e = "theme") => ({ computed: { themeClass() {
	return Le(this[e]);
} } }), pt = _({
	name: "VPopperContent",
	components: { ResizeObserver: G },
	mixins: [ft()],
	props: {
		popperId: String,
		theme: String,
		shown: Boolean,
		mounted: Boolean,
		skipTransition: Boolean,
		autoHide: Boolean,
		handleResize: Boolean,
		classes: Object,
		result: Object
	},
	emits: ["hide", "resize"],
	methods: { toPx(e) {
		return e != null && !isNaN(e) ? `${e}px` : null;
	} }
}), mt = [
	"id",
	"aria-hidden",
	"tabindex",
	"data-popper-placement"
], ht = {
	ref: "inner",
	class: "v-popper__inner"
}, gt = [/* @__PURE__ */ C("div", { class: "v-popper__arrow-outer" }, null, -1), /* @__PURE__ */ C("div", { class: "v-popper__arrow-inner" }, null, -1)];
function _t(e, t, n, r, i, a) {
	let s = u("ResizeObserver");
	return c(), S("div", {
		id: e.popperId,
		ref: "popover",
		class: v(["v-popper__popper", [
			e.themeClass,
			e.classes.popperClass,
			{
				"v-popper__popper--shown": e.shown,
				"v-popper__popper--hidden": !e.shown,
				"v-popper__popper--show-from": e.classes.showFrom,
				"v-popper__popper--show-to": e.classes.showTo,
				"v-popper__popper--hide-from": e.classes.hideFrom,
				"v-popper__popper--hide-to": e.classes.hideTo,
				"v-popper__popper--skip-transition": e.skipTransition,
				"v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
				"v-popper__popper--no-positioning": !e.result
			}
		]]),
		style: ae(e.result ? {
			position: e.result.strategy,
			transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
		} : void 0),
		"aria-hidden": e.shown ? "false" : "true",
		tabindex: e.autoHide ? 0 : void 0,
		"data-popper-placement": e.result ? e.result.placement : void 0,
		onKeyup: t[2] ||= h((t) => e.autoHide && e.$emit("hide"), ["esc"])
	}, [C("div", {
		class: "v-popper__backdrop",
		onClick: t[0] ||= (t) => e.autoHide && e.$emit("hide")
	}), C("div", {
		class: "v-popper__wrapper",
		style: ae(e.result ? { transformOrigin: e.result.transformOrigin } : void 0)
	}, [C("div", ht, [e.mounted ? (c(), S(f, { key: 0 }, [C("div", null, [o(e.$slots, "default")]), e.handleResize ? (c(), y(s, {
		key: 0,
		onNotify: t[1] ||= (t) => e.$emit("resize", t)
	})) : g("", !0)], 64)) : g("", !0)], 512), C("div", {
		ref: "arrow",
		class: "v-popper__arrow-container",
		style: ae(e.result ? {
			left: e.toPx(e.result.arrow.x),
			top: e.toPx(e.result.arrow.y)
		} : void 0)
	}, gt, 4)], 4)], 46, mt);
}
var vt = /* @__PURE__ */ it(pt, [["render", _t]]), yt = { methods: {
	show(...e) {
		return this.$refs.popper.show(...e);
	},
	hide(...e) {
		return this.$refs.popper.hide(...e);
	},
	dispose(...e) {
		return this.$refs.popper.dispose(...e);
	},
	onResize(...e) {
		return this.$refs.popper.onResize(...e);
	}
} }, bt = function() {};
typeof window < "u" && (bt = window.Element);
var xt = _({
	name: "VPopperWrapper",
	components: {
		Popper: ot,
		PopperContent: vt
	},
	mixins: [yt, ft("finalTheme")],
	props: {
		theme: {
			type: String,
			default: null
		},
		referenceNode: {
			type: Function,
			default: null
		},
		shown: {
			type: Boolean,
			default: !1
		},
		showGroup: {
			type: String,
			default: null
		},
		ariaId: { default: null },
		disabled: {
			type: Boolean,
			default: void 0
		},
		positioningDisabled: {
			type: Boolean,
			default: void 0
		},
		placement: {
			type: String,
			default: void 0
		},
		delay: {
			type: [
				String,
				Number,
				Object
			],
			default: void 0
		},
		distance: {
			type: [Number, String],
			default: void 0
		},
		skidding: {
			type: [Number, String],
			default: void 0
		},
		triggers: {
			type: Array,
			default: void 0
		},
		showTriggers: {
			type: [Array, Function],
			default: void 0
		},
		hideTriggers: {
			type: [Array, Function],
			default: void 0
		},
		popperTriggers: {
			type: Array,
			default: void 0
		},
		popperShowTriggers: {
			type: [Array, Function],
			default: void 0
		},
		popperHideTriggers: {
			type: [Array, Function],
			default: void 0
		},
		container: {
			type: [
				String,
				Object,
				bt,
				Boolean
			],
			default: void 0
		},
		boundary: {
			type: [String, bt],
			default: void 0
		},
		strategy: {
			type: String,
			default: void 0
		},
		autoHide: {
			type: [Boolean, Function],
			default: void 0
		},
		handleResize: {
			type: Boolean,
			default: void 0
		},
		instantMove: {
			type: Boolean,
			default: void 0
		},
		eagerMount: {
			type: Boolean,
			default: void 0
		},
		popperClass: {
			type: [
				String,
				Array,
				Object
			],
			default: void 0
		},
		computeTransformOrigin: {
			type: Boolean,
			default: void 0
		},
		autoMinSize: {
			type: Boolean,
			default: void 0
		},
		autoSize: {
			type: [Boolean, String],
			default: void 0
		},
		autoMaxSize: {
			type: Boolean,
			default: void 0
		},
		autoBoundaryMaxSize: {
			type: Boolean,
			default: void 0
		},
		preventOverflow: {
			type: Boolean,
			default: void 0
		},
		overflowPadding: {
			type: [Number, String],
			default: void 0
		},
		arrowPadding: {
			type: [Number, String],
			default: void 0
		},
		arrowOverflow: {
			type: Boolean,
			default: void 0
		},
		flip: {
			type: Boolean,
			default: void 0
		},
		shift: {
			type: Boolean,
			default: void 0
		},
		shiftCrossAxis: {
			type: Boolean,
			default: void 0
		},
		noAutoFocus: {
			type: Boolean,
			default: void 0
		},
		disposeTimeout: {
			type: Number,
			default: void 0
		}
	},
	emits: {
		show: () => !0,
		hide: () => !0,
		"update:shown": (e) => !0,
		"apply-show": () => !0,
		"apply-hide": () => !0,
		"close-group": () => !0,
		"close-directive": () => !0,
		"auto-hide": () => !0,
		resize: () => !0
	},
	computed: { finalTheme() {
		return this.theme ?? this.$options.vPopperTheme;
	} },
	methods: { getTargetNodes() {
		return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
	} }
});
function St(e, t, n, i, a, s) {
	let l = u("PopperContent"), d = u("Popper");
	return c(), y(d, ue({ ref: "popper" }, e.$props, {
		theme: e.finalTheme,
		"target-nodes": e.getTargetNodes,
		"popper-node": () => e.$refs.popperContent.$el,
		class: [e.themeClass],
		onShow: t[0] ||= () => e.$emit("show"),
		onHide: t[1] ||= () => e.$emit("hide"),
		"onUpdate:shown": t[2] ||= (t) => e.$emit("update:shown", t),
		onApplyShow: t[3] ||= () => e.$emit("apply-show"),
		onApplyHide: t[4] ||= () => e.$emit("apply-hide"),
		onCloseGroup: t[5] ||= () => e.$emit("close-group"),
		onCloseDirective: t[6] ||= () => e.$emit("close-directive"),
		onAutoHide: t[7] ||= () => e.$emit("auto-hide"),
		onResize: t[8] ||= () => e.$emit("resize")
	}), {
		default: r(({ popperId: t, isShown: n, shouldMountContent: i, skipTransition: a, autoHide: s, show: c, hide: u, handleResize: d, onResize: f, classes: p, result: m }) => [o(e.$slots, "default", {
			shown: n,
			show: c,
			hide: u
		}), b(l, {
			ref: "popperContent",
			"popper-id": t,
			theme: e.finalTheme,
			shown: n,
			mounted: i,
			"skip-transition": a,
			"auto-hide": s,
			"handle-resize": d,
			classes: p,
			result: m,
			onHide: u,
			onResize: f
		}, {
			default: r(() => [o(e.$slots, "popper", {
				shown: n,
				hide: u
			})]),
			_: 2
		}, 1032, [
			"popper-id",
			"theme",
			"shown",
			"mounted",
			"skip-transition",
			"auto-hide",
			"handle-resize",
			"classes",
			"result",
			"onHide",
			"onResize"
		])]),
		_: 3
	}, 16, [
		"theme",
		"target-nodes",
		"popper-node",
		"class"
	]);
}
var Ct = /* @__PURE__ */ it(xt, [["render", St]]), wt = {
	...Ct,
	name: "VDropdown",
	vPopperTheme: "dropdown"
}, Tt = {
	...Ct,
	name: "VMenu",
	vPopperTheme: "menu"
}, Et = {
	...Ct,
	name: "VTooltip",
	vPopperTheme: "tooltip"
}, Dt = _({
	name: "VTooltipDirective",
	components: {
		Popper: Ye(),
		PopperContent: vt
	},
	mixins: [yt],
	inheritAttrs: !1,
	props: {
		theme: {
			type: String,
			default: "tooltip"
		},
		html: {
			type: Boolean,
			default: (e) => I(e.theme, "html")
		},
		content: {
			type: [
				String,
				Number,
				Function
			],
			default: null
		},
		loadingContent: {
			type: String,
			default: (e) => I(e.theme, "loadingContent")
		},
		targetNodes: {
			type: Function,
			required: !0
		}
	},
	data() {
		return { asyncContent: null };
	},
	computed: {
		isContentAsync() {
			return typeof this.content == "function";
		},
		loading() {
			return this.isContentAsync && this.asyncContent == null;
		},
		finalContent() {
			return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
		}
	},
	watch: {
		content: {
			handler() {
				this.fetchContent(!0);
			},
			immediate: !0
		},
		async finalContent() {
			await this.$nextTick(), this.$refs.popper.onResize();
		}
	},
	created() {
		this.$_fetchId = 0;
	},
	methods: {
		fetchContent(e) {
			if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
				this.asyncContent = null, this.$_loading = !0;
				let e = ++this.$_fetchId, t = this.content(this);
				t.then ? t.then((t) => this.onResult(e, t)) : this.onResult(e, t);
			}
		},
		onResult(e, t) {
			e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
		},
		onShow() {
			this.$_isShown = !0, this.fetchContent();
		},
		onHide() {
			this.$_isShown = !1;
		}
	}
}), Ot = ["innerHTML"], kt = ["textContent"];
function At(e, t, n, i, a, o) {
	let s = u("PopperContent"), l = u("Popper");
	return c(), y(l, ue({ ref: "popper" }, e.$attrs, {
		theme: e.theme,
		"target-nodes": e.targetNodes,
		"popper-node": () => e.$refs.popperContent.$el,
		onApplyShow: e.onShow,
		onApplyHide: e.onHide
	}), {
		default: r(({ popperId: t, isShown: n, shouldMountContent: i, skipTransition: a, autoHide: o, hide: l, handleResize: u, onResize: d, classes: f, result: p }) => [b(s, {
			ref: "popperContent",
			class: v({ "v-popper--tooltip-loading": e.loading }),
			"popper-id": t,
			theme: e.theme,
			shown: n,
			mounted: i,
			"skip-transition": a,
			"auto-hide": o,
			"handle-resize": u,
			classes: f,
			result: p,
			onHide: l,
			onResize: d
		}, {
			default: r(() => [e.html ? (c(), S("div", {
				key: 0,
				innerHTML: e.finalContent
			}, null, 8, Ot)) : (c(), S("div", {
				key: 1,
				textContent: ee(e.finalContent)
			}, null, 8, kt))]),
			_: 2
		}, 1032, [
			"class",
			"popper-id",
			"theme",
			"shown",
			"mounted",
			"skip-transition",
			"auto-hide",
			"handle-resize",
			"classes",
			"result",
			"onHide",
			"onResize"
		])]),
		_: 1
	}, 16, [
		"theme",
		"target-nodes",
		"popper-node",
		"onApplyShow",
		"onApplyHide"
	]);
}
var jt = /* @__PURE__ */ it(Dt, [["render", At]]), Mt = "v-popper--has-tooltip";
function Nt(e, t) {
	let n = e.placement;
	if (!n && t) for (let e of Be) t[e] && (n = e);
	return n ||= I(e.theme || "tooltip", "placement"), n;
}
function Pt(e, t, n) {
	let r, i = typeof t;
	return r = i === "string" ? { content: t } : t && i === "object" ? t : { content: !1 }, r.placement = Nt(r, n), r.targetNodes = () => [e], r.referenceNode = () => e, r;
}
var Ft, K, It = 0;
function Lt() {
	if (Ft) return;
	K = le([]), Ft = m({
		name: "VTooltipDirectiveApp",
		setup() {
			return { directives: K };
		},
		render() {
			return this.directives.map((e) => x(jt, {
				...e.options,
				shown: e.shown || e.options.shown,
				key: e.id
			}));
		},
		devtools: { hide: !0 }
	});
	let e = document.createElement("div");
	document.body.appendChild(e), Ft.mount(e);
}
function Rt(e, t, n) {
	Lt();
	let r = le(Pt(e, t, n)), i = le(!1), a = {
		id: It++,
		options: r,
		shown: i
	};
	return K.value.push(a), e.classList && e.classList.add(Mt), e.$_popper = {
		options: r,
		item: a,
		show() {
			i.value = !0;
		},
		hide() {
			i.value = !1;
		}
	};
}
function zt(e) {
	if (e.$_popper) {
		let t = K.value.indexOf(e.$_popper.item);
		t !== -1 && K.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
	}
	e.classList && e.classList.remove(Mt);
}
function Bt(e, { value: t, modifiers: n }) {
	let r = Pt(e, t, n);
	if (!r.content || I(r.theme || "tooltip", "disabled")) zt(e);
	else {
		let i;
		e.$_popper ? (i = e.$_popper, i.options.value = r) : i = Rt(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? i.show() : i.hide());
	}
}
var Vt = {
	beforeMount: Bt,
	updated: Bt,
	beforeUnmount(e) {
		zt(e);
	}
};
function Ht(e) {
	e.addEventListener("mousedown", Wt), e.addEventListener("click", Wt), e.addEventListener("touchstart", Gt, L ? { passive: !0 } : !1);
}
function Ut(e) {
	e.removeEventListener("mousedown", Wt), e.removeEventListener("click", Wt), e.removeEventListener("touchstart", Gt), e.removeEventListener("touchend", Kt), e.removeEventListener("touchcancel", qt);
}
function Wt(e) {
	let t = e.currentTarget;
	e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
}
function Gt(e) {
	if (e.changedTouches.length === 1) {
		let t = e.currentTarget;
		t.$_vclosepopover_touch = !0, t.$_vclosepopover_touchPoint = e.changedTouches[0], t.addEventListener("touchend", Kt), t.addEventListener("touchcancel", qt);
	}
}
function Kt(e) {
	let t = e.currentTarget;
	if (t.$_vclosepopover_touch = !1, e.changedTouches.length === 1) {
		let n = e.changedTouches[0], r = t.$_vclosepopover_touchPoint;
		e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
	}
}
function qt(e) {
	let t = e.currentTarget;
	t.$_vclosepopover_touch = !1;
}
var Jt = {
	beforeMount(e, { value: t, modifiers: n }) {
		e.$_closePopoverModifiers = n, (typeof t > "u" || t) && Ht(e);
	},
	updated(e, { value: t, oldValue: n, modifiers: r }) {
		e.$_closePopoverModifiers = r, t !== n && (typeof t > "u" || t ? Ht(e) : Ut(e));
	},
	beforeUnmount(e) {
		Ut(e);
	}
}, Yt = F, Xt = wt;
function Zt(e, t = {}) {
	e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0, Ie(F, t), e.directive("tooltip", Vt), e.directive("close-popper", Jt), e.component("VTooltip", Et), e.component("VDropdown", wt), e.component("VMenu", Tt));
}
var Qt = {
	version: "5.2.2",
	install: Zt,
	options: F
}, $t = [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"area[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
], en = /* #__PURE__ */ $t.join(","), tn = typeof Element > "u", q = tn ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, nn = !tn && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, rn = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : rn(e.parentNode));
}, an = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, on = function(e, t, n) {
	if (rn(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(en));
	return t && q.call(e, en) && r.unshift(e), r = r.filter(n), r;
}, J = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!rn(a, !1)) {
			if (a.tagName === "SLOT") {
				var o = a.assignedElements(), s = J(o.length ? o : a.children, !0, n);
				n.flatten ? r.push.apply(r, s) : r.push({
					scopeParent: a,
					candidates: s
				});
			} else {
				q.call(a, en) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
				var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !rn(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
				if (c && l) {
					var u = J(c === !0 ? a.children : c.children, !0, n);
					n.flatten ? r.push.apply(r, u) : r.push({
						scopeParent: a,
						candidates: u
					});
				} else i.unshift.apply(i, a.children);
			}
		}
	}
	return r;
}, sn = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Y = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || an(e)) && !sn(e) ? 0 : e.tabIndex;
}, cn = function(e, t) {
	var n = Y(e);
	return n < 0 && t && !sn(e) ? 0 : n;
}, ln = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, un = function(e) {
	return e.tagName === "INPUT";
}, dn = function(e) {
	return un(e) && e.type === "hidden";
}, fn = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, pn = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, mn = function(e) {
	if (!e.name) return !0;
	var t = e.form || nn(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = pn(r, e.form);
	return !i || i === e;
}, hn = function(e) {
	return un(e) && e.type === "radio";
}, gn = function(e) {
	return hn(e) && !mn(e);
}, _n = function(e) {
	var t = e && nn(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = nn(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, vn = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, yn = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	var i = getComputedStyle(e).visibility;
	if (i === "hidden" || i === "collapse") return !0;
	var a = q.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (q.call(a, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var o = e; e;) {
				var s = e.parentElement, c = nn(e);
				if (s && !s.shadowRoot && r(s) === !0) return vn(e);
				e = e.assignedSlot ? e.assignedSlot : !s && c !== e.ownerDocument ? c.host : s;
			}
			e = o;
		}
		if (_n(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return vn(e);
	return !1;
}, bn = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return q.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, xn = function(e, t) {
	return !(t.disabled || dn(t) || yn(t, e) || fn(t) || bn(t));
}, Sn = function(e, t) {
	return !(gn(t) || Y(t) < 0 || !xn(e, t));
}, Cn = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, wn = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = cn(a, i), s = i ? wn(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(ln).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, Tn = function(e, t) {
	return t ||= {}, wn(t.getShadowRoot ? J([e], t.includeContainer, {
		filter: Sn.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: Cn
	}) : on(e, t.includeContainer, Sn.bind(null, t)));
}, En = function(e, t) {
	return t ||= {}, t.getShadowRoot ? J([e], t.includeContainer, {
		filter: xn.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : on(e, t.includeContainer, xn.bind(null, t));
}, X = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return q.call(e, en) !== !1 && Sn(t, e);
}, Dn = /* #__PURE__ */ $t.concat("iframe:not([inert]):not([inert] *)").join(","), On = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return q.call(e, Dn) !== !1 && xn(t, e);
};
//#endregion
//#region node_modules/focus-trap/dist/focus-trap.esm.js
function kn(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function An(e) {
	if (Array.isArray(e)) return kn(e);
}
function jn(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = Bn(e)) || t) {
			n && (e = n);
			var r = 0, i = function() {};
			return {
				s: i,
				n: function() {
					return r >= e.length ? { done: !0 } : {
						done: !1,
						value: e[r++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: i
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var a, o = !0, s = !1;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return o = e.done, e;
		},
		e: function(e) {
			s = !0, a = e;
		},
		f: function() {
			try {
				o || n.return == null || n.return();
			} finally {
				if (s) throw a;
			}
		}
	};
}
function Mn(e, t, n) {
	return (t = zn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Nn(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Pn() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Fn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function In(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Fn(Object(n), !0).forEach(function(t) {
			Mn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ln(e) {
	return An(e) || Nn(e) || Bn(e) || Pn();
}
function Rn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t);
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function zn(e) {
	var t = Rn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Bn(e, t) {
	if (e) {
		if (typeof e == "string") return kn(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? kn(e, t) : void 0;
	}
}
var Z = {
	getActiveTrap: function(e) {
		return e?.length > 0 ? e[e.length - 1] : null;
	},
	activateTrap: function(e, t) {
		t !== Z.getActiveTrap(e) && Z.pauseTrap(e);
		var n = e.indexOf(t);
		n === -1 || e.splice(n, 1), e.push(t);
	},
	deactivateTrap: function(e, t) {
		var n = e.indexOf(t);
		n !== -1 && e.splice(n, 1), Z.unpauseTrap(e);
	},
	pauseTrap: function(e) {
		Z.getActiveTrap(e)?._setPausedState(!0);
	},
	unpauseTrap: function(e) {
		var t = Z.getActiveTrap(e);
		t && !t._isManuallyPaused() && t._setPausedState(!1);
	}
}, Vn = function(e) {
	return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Hn = function(e) {
	return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, Q = function(e) {
	return e?.key === "Tab" || e?.keyCode === 9;
}, Un = function(e) {
	return Q(e) && !e.shiftKey;
}, Wn = function(e) {
	return Q(e) && e.shiftKey;
}, Gn = function(e) {
	return setTimeout(e, 0);
}, $ = function(e) {
	var t = [...arguments].slice(1);
	return typeof e == "function" ? e.apply(void 0, t) : e;
}, Kn = function(e) {
	return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, qn = [], Jn = function(e, t) {
	var n = t?.document || document, r = t?.trapStack || qn, i = In({
		returnFocusOnDeactivate: !0,
		escapeDeactivates: !0,
		delayInitialFocus: !0,
		delayReturnFocus: !0,
		isolateSubtrees: !1,
		isKeyForward: Un,
		isKeyBackward: Wn
	}, t), a = {
		containers: [],
		containerGroups: [],
		tabbableGroups: [],
		adjacentElements: /* @__PURE__ */ new Set(),
		alreadySilent: /* @__PURE__ */ new Set(),
		nodeFocusedBeforeActivation: null,
		mostRecentlyFocusedNode: null,
		active: !1,
		paused: !1,
		manuallyPaused: !1,
		delayInitialFocusTimer: void 0,
		recentNavEvent: void 0
	}, o, s = function(e, t, n) {
		return e && e[t] !== void 0 ? e[t] : i[n || t];
	}, c = function(e, t) {
		var n = typeof t?.composedPath == "function" ? t.composedPath() : void 0;
		return a.containerGroups.findIndex(function(t) {
			var r = t.container, i = t.tabbableNodes;
			return r.contains(e) || n?.includes(r) || i.find(function(t) {
				return t === e;
			});
		});
	}, l = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.hasFallback, a = r !== void 0 && r, o = t.params, s = o === void 0 ? [] : o, c = i[e];
		if (typeof c == "function" && (c = c.apply(void 0, Ln(s))), c === !0 && (c = void 0), !c) {
			if (c === void 0 || c === !1) return c;
			throw Error(`\`${e}\` was specified but was not a node, or did not return a node`);
		}
		var l = c;
		if (typeof c == "string") {
			try {
				l = n.querySelector(c);
			} catch (t) {
				throw Error(`\`${e}\` appears to be an invalid selector; error="${t.message}"`);
			}
			if (!l && !a) throw Error(`\`${e}\` as selector refers to no known node`);
		}
		return l;
	}, u = function(e) {
		var t = e.activeElement;
		return t ? t.shadowRoot && t.shadowRoot.activeElement !== null ? u(t.shadowRoot) : t : null;
	}, d = function() {
		var e = l("initialFocus", { hasFallback: !0 });
		if (e === !1) return !1;
		if (e === void 0 || e && !On(e, i.tabbableOptions)) {
			var t = u(n);
			if (c(t) >= 0) e = t;
			else {
				var r = a.tabbableGroups[0];
				e = r && r.firstTabbableNode || l("fallbackFocus");
			}
		} else e === null && (e = l("fallbackFocus"));
		if (!e) throw Error("Your focus-trap needs to have at least one focusable element");
		return e;
	}, f = function() {
		if (a.containerGroups = a.containers.map(function(e) {
			var t = Tn(e, i.tabbableOptions), n = En(e, i.tabbableOptions), r = t.length > 0 ? t[0] : void 0, a = t.length > 0 ? t[t.length - 1] : void 0, o = n.find(function(e) {
				return X(e);
			}), s = n.slice().reverse().find(function(e) {
				return X(e);
			});
			return {
				container: e,
				tabbableNodes: t,
				focusableNodes: n,
				posTabIndexesFound: !!t.find(function(e) {
					return Y(e) > 0;
				}),
				firstTabbableNode: r,
				lastTabbableNode: a,
				firstDomTabbableNode: o,
				lastDomTabbableNode: s,
				nextTabbableNode: function(e) {
					var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, i = t.indexOf(e);
					return i < 0 ? r ? n.slice(n.indexOf(e) + 1).find(function(e) {
						return X(e);
					}) : n.slice(0, n.indexOf(e)).reverse().find(function(e) {
						return X(e);
					}) : t[i + (r ? 1 : -1)];
				}
			};
		}), a.tabbableGroups = a.containerGroups.filter(function(e) {
			return e.tabbableNodes.length > 0;
		}), a.tabbableGroups.length <= 0 && !l("fallbackFocus")) throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
		if (a.containerGroups.find(function(e) {
			return e.posTabIndexesFound;
		}) && a.containerGroups.length > 1) throw Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
	}, p = function(e) {
		if (e !== !1 && e !== u(document)) {
			if (!e || !e.focus) {
				p(d());
				return;
			}
			e.focus({ preventScroll: !!i.preventScroll }), a.mostRecentlyFocusedNode = e, Vn(e) && e.select();
		}
	}, m = function(e) {
		var t = l("setReturnFocus", { params: [e] });
		return t || t !== !1 && e;
	}, h = function(e) {
		var t = e.target, n = e.event, r = e.isBackward, o = r !== void 0 && r;
		t ||= Kn(n), f();
		var s = null;
		if (a.tabbableGroups.length > 0) {
			var u = c(t, n), d = u >= 0 ? a.containerGroups[u] : void 0;
			if (u < 0) s = o ? a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : a.tabbableGroups[0].firstTabbableNode;
			else if (o) {
				var p = a.tabbableGroups.findIndex(function(e) {
					var n = e.firstTabbableNode;
					return t === n;
				});
				if (p < 0 && (d.container === t || On(t, i.tabbableOptions) && !X(t, i.tabbableOptions) && !d.nextTabbableNode(t, !1)) && (p = u), p >= 0) {
					var m = p === 0 ? a.tabbableGroups.length - 1 : p - 1, h = a.tabbableGroups[m];
					s = Y(t) >= 0 ? h.lastTabbableNode : h.lastDomTabbableNode;
				} else Q(n) || (s = d.nextTabbableNode(t, !1));
			} else {
				var g = a.tabbableGroups.findIndex(function(e) {
					var n = e.lastTabbableNode;
					return t === n;
				});
				if (g < 0 && (d.container === t || On(t, i.tabbableOptions) && !X(t, i.tabbableOptions) && !d.nextTabbableNode(t)) && (g = u), g >= 0) {
					var _ = g === a.tabbableGroups.length - 1 ? 0 : g + 1, v = a.tabbableGroups[_];
					s = Y(t) >= 0 ? v.firstTabbableNode : v.firstDomTabbableNode;
				} else Q(n) || (s = d.nextTabbableNode(t));
			}
		} else s = l("fallbackFocus");
		return s;
	}, g = function(e) {
		if (!(c(Kn(e), e) >= 0)) {
			if ($(i.clickOutsideDeactivates, e)) {
				o.deactivate({ returnFocus: i.returnFocusOnDeactivate });
				return;
			}
			$(i.allowOutsideClick, e) || e.preventDefault();
		}
	}, _ = function(e) {
		var t = Kn(e), n = c(t, e) >= 0;
		if (n || t instanceof Document) n && (a.mostRecentlyFocusedNode = t);
		else {
			e.stopImmediatePropagation();
			var r, o = !0;
			if (a.mostRecentlyFocusedNode) {
				if (Y(a.mostRecentlyFocusedNode) > 0) {
					var s = c(a.mostRecentlyFocusedNode), l = a.containerGroups[s].tabbableNodes;
					if (l.length > 0) {
						var u = l.findIndex(function(e) {
							return e === a.mostRecentlyFocusedNode;
						});
						u >= 0 && (i.isKeyForward(a.recentNavEvent) ? u + 1 < l.length && (r = l[u + 1], o = !1) : u - 1 >= 0 && (r = l[u - 1], o = !1));
					}
				} else a.containerGroups.some(function(e) {
					return e.tabbableNodes.some(function(e) {
						return Y(e) > 0;
					});
				}) || (o = !1);
			} else o = !1;
			o && (r = h({
				target: a.mostRecentlyFocusedNode,
				isBackward: i.isKeyBackward(a.recentNavEvent)
			})), p(r || a.mostRecentlyFocusedNode || d());
		}
		a.recentNavEvent = void 0;
	}, v = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		a.recentNavEvent = e;
		var n = h({
			event: e,
			isBackward: t
		});
		n && (Q(e) && e.preventDefault(), p(n));
	}, ee = function(e) {
		(i.isKeyForward(e) || i.isKeyBackward(e)) && v(e, i.isKeyBackward(e));
	}, y = function(e) {
		Hn(e) && $(i.escapeDeactivates, e) !== !1 && (e.preventDefault(), o.deactivate());
	}, te = function(e) {
		c(Kn(e), e) >= 0 || $(i.clickOutsideDeactivates, e) || $(i.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation());
	}, ne = function() {
		if (a.active) {
			Z.activateTrap(r, o);
			var e;
			return i.delayInitialFocus ? e = new Promise(function(e) {
				a.delayInitialFocusTimer = Gn(function() {
					p(d()), e();
				});
			}) : p(d()), n.addEventListener("focusin", _, !0), n.addEventListener("mousedown", g, {
				capture: !0,
				passive: !1
			}), n.addEventListener("touchstart", g, {
				capture: !0,
				passive: !1
			}), n.addEventListener("click", te, {
				capture: !0,
				passive: !1
			}), n.addEventListener("keydown", ee, {
				capture: !0,
				passive: !1
			}), n.addEventListener("keydown", y), e;
		}
	}, re = function(e) {
		a.active && !a.paused && o._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
		var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = jn(e), i;
		try {
			for (r.s(); !(i = r.n()).done;) {
				var s = i.value;
				t.add(s);
				for (var c = typeof ShadowRoot < "u" && s.getRootNode() instanceof ShadowRoot, l = s; l;) {
					t.add(l);
					var u = l.parentElement, d = [];
					u ? d = u.children : !u && c && (d = l.getRootNode().children, u = l.getRootNode().host, c = typeof ShadowRoot < "u" && u.getRootNode() instanceof ShadowRoot);
					var f = jn(d), p;
					try {
						for (f.s(); !(p = f.n()).done;) {
							var m = p.value;
							n.add(m);
						}
					} catch (e) {
						f.e(e);
					} finally {
						f.f();
					}
					l = u;
				}
			}
		} catch (e) {
			r.e(e);
		} finally {
			r.f();
		}
		t.forEach(function(e) {
			n.delete(e);
		}), a.adjacentElements = n;
	}, ie = function() {
		if (a.active) return n.removeEventListener("focusin", _, !0), n.removeEventListener("mousedown", g, !0), n.removeEventListener("touchstart", g, !0), n.removeEventListener("click", te, !0), n.removeEventListener("keydown", ee, !0), n.removeEventListener("keydown", y), o;
	}, b = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(function(e) {
		var t = a.mostRecentlyFocusedNode;
		t && e.some(function(e) {
			return Array.from(e.removedNodes).some(function(e) {
				return e === t || typeof e.contains == "function" && e.contains(t);
			});
		}) && a.containers.some(function(e) {
			return e?.isConnected;
		}) && (f(), p(d()));
	}) : void 0, x = function() {
		b && (b.disconnect(), a.active && !a.paused && a.containers.map(function(e) {
			b.observe(e, {
				subtree: !0,
				childList: !0
			});
		}));
	};
	return o = {
		get active() {
			return a.active;
		},
		get paused() {
			return a.paused;
		},
		activate: function(e) {
			if (a.active) return this;
			var t = s(e, "onActivate"), i = s(e, "onPostActivate"), c = s(e, "checkCanFocusTrap"), l = Z.getActiveTrap(r), d = !1;
			if (l && !l.paused) {
				var p;
				(p = l._setSubtreeIsolation) == null || p.call(l, !1), d = !0;
			}
			try {
				c || f(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = u(n), t?.({ trap: o });
				var m = function() {
					c && f();
					var e = function() {
						o._setSubtreeIsolation(!0), x(), i?.({ trap: o });
					}, t = ne();
					t ? t.then(e) : e();
				};
				if (c) return c(a.containers.concat()).then(m, m), this;
				m();
			} catch (e) {
				if (l === Z.getActiveTrap(r) && d) {
					var h;
					(h = l._setSubtreeIsolation) == null || h.call(l, !0);
				}
				throw e;
			}
			return this;
		},
		deactivate: function(e) {
			if (!a.active) return this;
			var t = In({
				onDeactivate: i.onDeactivate,
				onPostDeactivate: i.onPostDeactivate,
				checkCanReturnFocus: i.checkCanReturnFocus
			}, e);
			clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || o._setSubtreeIsolation(!1), a.alreadySilent.clear(), ie(), a.active = !1, a.paused = !1, x(), Z.deactivateTrap(r, o);
			var n = s(t, "onDeactivate"), c = s(t, "onPostDeactivate"), l = s(t, "checkCanReturnFocus"), u = s(t, "delayReturnFocus"), d = s(t, "returnFocus", "returnFocusOnDeactivate");
			n?.({ trap: o });
			var f = function() {
				d && p(m(a.nodeFocusedBeforeActivation)), c?.({ trap: o });
			}, h = function() {
				u && d ? Gn(f) : f();
			};
			return d && l ? (l(m(a.nodeFocusedBeforeActivation)).then(h, h), this) : (h(), this);
		},
		pause: function(e) {
			return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, e)) : this;
		},
		unpause: function(e) {
			return !a.active || (a.manuallyPaused = !1, r[r.length - 1] !== this) ? this : this._setPausedState(!1, e);
		},
		updateContainerElements: function(e) {
			return a.containers = [].concat(e).filter(Boolean).map(function(e) {
				return typeof e == "string" ? n.querySelector(e) : e;
			}), i.isolateSubtrees && re(a.containers), a.active && (f(), a.paused || o._setSubtreeIsolation(!0)), x(), this;
		}
	}, Object.defineProperties(o, {
		_isManuallyPaused: { value: function() {
			return a.manuallyPaused;
		} },
		_setPausedState: { value: function(e, t) {
			if (a.paused === e) return this;
			if (a.paused = e, e) {
				var n = s(t, "onPause"), r = s(t, "onPostPause");
				n?.({ trap: o }), ie(), o._setSubtreeIsolation(!1), x(), r?.({ trap: o });
			} else {
				var i = s(t, "onUnpause"), c = s(t, "onPostUnpause");
				i?.({ trap: o }), (function() {
					f();
					var e = function() {
						o._setSubtreeIsolation(!0), x(), c?.({ trap: o });
					}, t = ne();
					t ? t.then(e) : e();
				})();
			}
			return this;
		} },
		_setSubtreeIsolation: { value: function(e) {
			i.isolateSubtrees && a.adjacentElements.forEach(function(t) {
				if (e) switch (i.isolateSubtrees) {
					case "aria-hidden":
						(t.ariaHidden === "true" || t.getAttribute("aria-hidden")?.toLowerCase() === "true") && a.alreadySilent.add(t), t.setAttribute("aria-hidden", "true");
						break;
					default: (t.inert || t.hasAttribute("inert")) && a.alreadySilent.add(t), t.setAttribute("inert", !0);
				}
				else if (!a.alreadySilent.has(t)) switch (i.isolateSubtrees) {
					case "aria-hidden":
						t.removeAttribute("aria-hidden");
						break;
					default: t.removeAttribute("inert");
				}
			});
		} }
	}), o.updateContainerElements(e), o;
};
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/focusTrap.mjs
function Yn() {
	return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Xn() {
	let e = [];
	return {
		pause() {
			e = [...Yn()];
			for (let t of e) t.pause();
		},
		unpause() {
			if (e.length === Yn().length) for (let t of e) t.unpause();
			e = [];
		}
	};
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/rtl.mjs
var Zn = de(), Qn = _({
	name: "NcPopoverTriggerProvider",
	provide() {
		return {
			"NcPopover:trigger:shown": () => this.shown,
			"NcPopover:trigger:attrs": () => this.triggerAttrs
		};
	},
	props: {
		shown: {
			type: Boolean,
			required: !0
		},
		popupRole: {
			type: String,
			default: void 0
		}
	},
	computed: { triggerAttrs() {
		return {
			"aria-haspopup": this.popupRole,
			"aria-expanded": this.shown.toString()
		};
	} },
	render() {
		return this.$slots.default?.({ attrs: this.triggerAttrs });
	}
}), $n = {
	"material-design-icon": "_material-design-icon_sCkSO",
	ncPopover: "_ncPopover_HD5BC"
}, er = "nc-popover-9";
Yt.themes[er] = structuredClone(Yt.themes.dropdown);
var tr = {
	name: "NcPopover",
	components: {
		Dropdown: Xt,
		NcPopoverTriggerProvider: Qn
	},
	props: {
		boundary: {
			type: [String, Object],
			default: ""
		},
		closeOnClickOutside: {
			type: Boolean,
			default: !0
		},
		noCloseOnClickOutside: {
			type: Boolean,
			default: !1
		},
		container: {
			type: [Boolean, String],
			default: "body"
		},
		delay: {
			type: [Number, Object],
			default: 0
		},
		noFocusTrap: {
			type: Boolean,
			default: !1
		},
		placement: {
			type: String,
			default: "bottom"
		},
		popoverBaseClass: {
			type: String,
			default: ""
		},
		popoverTriggers: {
			type: [Array, Object],
			default: null
		},
		popupRole: {
			type: String,
			default: void 0,
			validator: (e) => [
				"menu",
				"listbox",
				"tree",
				"grid",
				"dialog",
				"true"
			].includes(e)
		},
		setReturnFocus: {
			default: void 0,
			type: [
				Boolean,
				HTMLElement,
				SVGElement,
				String,
				Function
			]
		},
		shown: {
			type: Boolean,
			default: !1
		},
		triggers: {
			type: [Array, Object],
			default: () => ["click"]
		}
	},
	emits: [
		"afterShow",
		"afterHide",
		"update:shown"
	],
	setup() {
		return { theme: er };
	},
	data() {
		return { internalShown: this.shown };
	},
	computed: {
		popperTriggers() {
			if (this.popoverTriggers && Array.isArray(this.popoverTriggers)) return this.popoverTriggers;
		},
		popperHideTriggers() {
			if (this.popoverTriggers && typeof this.popoverTriggers == "object") return this.popoverTriggers.hide;
		},
		popperShowTriggers() {
			if (this.popoverTriggers && typeof this.popoverTriggers == "object") return this.popoverTriggers.show;
		},
		internalTriggers() {
			if (this.triggers && Array.isArray(this.triggers)) return this.triggers;
		},
		hideTriggers() {
			if (this.triggers && typeof this.triggers == "object") return this.triggers.hide;
		},
		showTriggers() {
			if (this.triggers && typeof this.triggers == "object") return this.triggers.show;
		},
		internalPlacement() {
			return this.placement === "start" ? Zn ? "right" : "left" : this.placement === "end" ? Zn ? "left" : "right" : this.placement;
		}
	},
	watch: {
		shown(e) {
			this.internalShown = e;
		},
		internalShown(e) {
			this.$emit("update:shown", e);
		}
	},
	mounted() {
		this.checkTriggerA11y();
	},
	beforeUnmount() {
		this.clearFocusTrap(), this.clearEscapeStopPropagation();
	},
	methods: {
		checkTriggerA11y() {
			window.OC?.debug && (this.getPopoverTriggerContainerElement().querySelector("[aria-expanded]") || i("It looks like you are using a custom button as a <NcPopover> or other popover #trigger. If you are not using <NcButton> as a trigger, you need to bind attrs from the #trigger slot props to your custom button. See <NcPopover> docs for an example."));
		},
		removeFloatingVueAriaDescribedBy() {
			let e = this.getPopoverTriggerContainerElement().querySelectorAll("[data-popper-shown]");
			for (let t of e) t.removeAttribute("aria-describedby");
		},
		getPopoverContentElement() {
			return this.$refs.popover?.$refs.popperContent?.$el;
		},
		getPopoverTriggerContainerElement() {
			return this.$refs.popover?.$refs.popper?.$refs.reference;
		},
		async useFocusTrap() {
			if (await this.$nextTick(), this.noFocusTrap) return;
			let e = this.getPopoverContentElement();
			e.tabIndex = -1, e && (this.$focusTrap = Jn(e, {
				escapeDeactivates: !1,
				allowOutsideClick: !0,
				setReturnFocus: this.setReturnFocus,
				trapStack: Yn(),
				fallBackFocus: e
			}), this.$focusTrap.activate());
		},
		clearFocusTrap(t = {}) {
			try {
				this.$focusTrap?.deactivate(t), this.$focusTrap = null;
			} catch (t) {
				e.warn("[NcPopover] Failed to clear focus trap", { error: t });
			}
		},
		addEscapeStopPropagation() {
			this.getPopoverContentElement()?.addEventListener("keydown", this.stopKeydownEscapeHandler);
		},
		clearEscapeStopPropagation() {
			this.getPopoverContentElement()?.removeEventListener("keydown", this.stopKeydownEscapeHandler);
		},
		stopKeydownEscapeHandler(e) {
			e.type === "keydown" && e.key === "Escape" && e.stopPropagation();
		},
		async afterShow() {
			this.getPopoverContentElement().addEventListener("transitionend", () => {
				this.$emit("afterShow");
			}, {
				once: !0,
				passive: !0
			}), this.removeFloatingVueAriaDescribedBy(), await this.$nextTick(), await this.useFocusTrap(), this.addEscapeStopPropagation();
		},
		afterHide() {
			this.getPopoverContentElement()?.addEventListener("transitionend", () => {
				this.$emit("afterHide");
			}, {
				once: !0,
				passive: !0
			}), this.clearFocusTrap(), this.clearEscapeStopPropagation();
		}
	}
};
function nr(e, t, n, i, a, s) {
	let l = u("NcPopoverTriggerProvider"), d = u("Dropdown");
	return c(), y(d, {
		ref: "popover",
		shown: a.internalShown,
		"onUpdate:shown": [t[0] ||= (e) => a.internalShown = e, t[1] ||= (e) => a.internalShown = e],
		autoHide: !n.noCloseOnClickOutside && n.closeOnClickOutside,
		boundary: n.boundary || void 0,
		container: n.container,
		delay: n.delay,
		distance: 4,
		handleResize: "",
		noAutoFocus: !0,
		placement: s.internalPlacement,
		popperClass: [e.$style.ncPopover, n.popoverBaseClass],
		popperTriggers: s.popperTriggers,
		popperHideTriggers: s.popperHideTriggers,
		popperShowTriggers: s.popperShowTriggers,
		theme: i.theme,
		triggers: s.internalTriggers,
		hideTriggers: s.hideTriggers,
		showTriggers: s.showTriggers,
		onApplyShow: s.afterShow,
		onApplyHide: s.afterHide
	}, {
		popper: r((t) => [o(e.$slots, "default", se(oe(t)))]),
		default: r(() => [b(l, {
			shown: a.internalShown,
			popupRole: n.popupRole
		}, {
			default: r((t) => [o(e.$slots, "trigger", se(oe(t)))]),
			_: 3
		}, 8, ["shown", "popupRole"])]),
		_: 3
	}, 8, [
		"shown",
		"autoHide",
		"boundary",
		"container",
		"delay",
		"placement",
		"popperClass",
		"popperTriggers",
		"popperHideTriggers",
		"popperShowTriggers",
		"theme",
		"triggers",
		"hideTriggers",
		"showTriggers",
		"onApplyShow",
		"onApplyHide"
	]);
}
var rr = /* @__PURE__ */ d(tr, [["render", nr], ["__cssModules", { $style: $n }]]);
//#endregion
export { Jn as a, Yn as i, Zn as n, Qt as o, Xn as r, rr as t };
