import { t as e } from "./logger-Dmvqkkgn.chunk.mjs";
import { Bn as t, Dn as n, Dt as r, En as i, Et as a, Gn as o, Mn as s, Mt as c, Nt as l, Ot as u, Q as d, Qt as f, Rt as p, Un as m, Vt as h, Yt as g, an as _, dn as v, dr as y, fr as b, in as x, jn as S, jt as ee, kn as te, kt as ne, ln as C, mn as re, on as w, pn as ie, pr as ae, rn as T, tr as oe, ur as se, vn as ce, wt as le, yn as ue } from "./createElementId-XLh0NVJk.chunk.mjs";
//#region node_modules/floating-vue/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function E(e) {
	return e.ownerDocument?.defaultView || window;
}
function D(e) {
	return E(e).getComputedStyle(e);
}
var de = Math.min, O = Math.max, k = Math.round;
function fe(e) {
	let t = D(e), n = parseFloat(t.width), r = parseFloat(t.height), i = e.offsetWidth, a = e.offsetHeight, o = k(n) !== i || k(r) !== a;
	return o && (n = i, r = a), {
		width: n,
		height: r,
		fallback: o
	};
}
function A(e) {
	return he(e) ? (e.nodeName || "").toLowerCase() : "";
}
var pe;
function me() {
	if (pe) return pe;
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? (pe = e.brands.map(((e) => e.brand + "/" + e.version)).join(" "), pe) : navigator.userAgent;
}
function j(e) {
	return e instanceof E(e).HTMLElement;
}
function M(e) {
	return e instanceof E(e).Element;
}
function he(e) {
	return e instanceof E(e).Node;
}
function ge(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof E(e).ShadowRoot || e instanceof ShadowRoot;
}
function _e(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = D(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function ve(e) {
	return [
		"table",
		"td",
		"th"
	].includes(A(e));
}
function ye(e) {
	let t = /firefox/i.test(me()), n = D(e), r = n.backdropFilter || n.WebkitBackdropFilter;
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
function be() {
	return !/^((?!chrome|android).)*safari/i.test(me());
}
function xe(e) {
	return [
		"html",
		"body",
		"#document"
	].includes(A(e));
}
function Se(e) {
	return M(e) ? e : e.contextElement;
}
var Ce = {
	x: 1,
	y: 1
};
function N(e) {
	let t = Se(e);
	if (!j(t)) return Ce;
	let n = t.getBoundingClientRect(), { width: r, height: i, fallback: a } = fe(t), o = (a ? k(n.width) : n.width) / r, s = (a ? k(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
function P(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Se(e), o = Ce;
	t && (r ? M(r) && (o = N(r)) : o = N(e));
	let s = a ? E(a) : window, c = !be() && n, l = (i.left + (c && s.visualViewport?.offsetLeft || 0)) / o.x, u = (i.top + (c && s.visualViewport?.offsetTop || 0)) / o.y, d = i.width / o.x, f = i.height / o.y;
	if (a) {
		let e = E(a), t = r && M(r) ? E(r) : r, n = e.frameElement;
		for (; n && r && t !== e;) {
			let e = N(n), t = n.getBoundingClientRect(), r = getComputedStyle(n);
			t.x += (n.clientLeft + parseFloat(r.paddingLeft)) * e.x, t.y += (n.clientTop + parseFloat(r.paddingTop)) * e.y, l *= e.x, u *= e.y, d *= e.x, f *= e.y, l += t.x, u += t.y, n = E(n).frameElement;
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
function F(e) {
	return ((he(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function we(e) {
	return M(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.pageXOffset,
		scrollTop: e.pageYOffset
	};
}
function Te(e) {
	return P(F(e)).left + we(e).scrollLeft;
}
function I(e) {
	if (A(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ge(e) && e.host || F(e);
	return ge(t) ? t.host : t;
}
function Ee(e) {
	let t = I(e);
	return xe(t) ? t.ownerDocument.body : j(t) && _e(t) ? t : Ee(t);
}
function De(e, t) {
	t === void 0 && (t = []);
	let n = Ee(e), r = n === e.ownerDocument?.body, i = E(n);
	return r ? t.concat(i, i.visualViewport || [], _e(n) ? n : []) : t.concat(n, De(n));
}
function Oe(e, t, n) {
	return t === "viewport" ? p(function(e, t) {
		let n = E(e), r = F(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
		if (i) {
			a = i.width, o = i.height;
			let e = be();
			(e || !e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
		}
		return {
			width: a,
			height: o,
			x: s,
			y: c
		};
	}(e, n)) : M(t) ? p(function(e, t) {
		let n = P(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = j(e) ? N(e) : {
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
		let t = F(e), n = we(e), r = e.ownerDocument.body, i = O(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = O(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Te(e), s = -n.scrollTop;
		return D(r).direction === "rtl" && (o += O(t.clientWidth, r.clientWidth) - i), {
			width: i,
			height: a,
			x: o,
			y: s
		};
	}(F(e)));
}
function ke(e) {
	return j(e) && D(e).position !== "fixed" ? e.offsetParent : null;
}
function Ae(e) {
	let t = E(e), n = ke(e);
	for (; n && ve(n) && D(n).position === "static";) n = ke(n);
	return n && (A(n) === "html" || A(n) === "body" && D(n).position === "static" && !ye(n)) ? t : n || function(e) {
		let t = I(e);
		for (; j(t) && !xe(t);) {
			if (ye(t)) return t;
			t = I(t);
		}
		return null;
	}(e) || t;
}
function je(e, t, n) {
	let r = j(t), i = F(t), a = P(e, !0, n === "fixed", t), o = {
		scrollLeft: 0,
		scrollTop: 0
	}, s = {
		x: 0,
		y: 0
	};
	if (r || !r && n !== "fixed") {
		if ((A(t) !== "body" || _e(i)) && (o = we(t)), j(t)) {
			let e = P(t, !0);
			s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop;
		} else i && (s.x = Te(i));
	}
	return {
		x: a.left + o.scrollLeft - s.x,
		y: a.top + o.scrollTop - s.y,
		width: a.width,
		height: a.height
	};
}
var Me = {
	getClippingRect: function(e) {
		let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? function(e, t) {
			let n = t.get(e);
			if (n) return n;
			let r = De(e).filter(((e) => M(e) && A(e) !== "body")), i = null, a = D(e).position === "fixed", o = a ? I(e) : e;
			for (; M(o) && !xe(o);) {
				let e = D(o), t = ye(o);
				(a ? t || i : t || e.position !== "static" || !i || !["absolute", "fixed"].includes(i.position)) ? i = e : r = r.filter(((e) => e !== o)), o = I(o);
			}
			return t.set(e, r), r;
		}(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce(((e, n) => {
			let r = Oe(t, n, i);
			return e.top = O(r.top, e.top), e.right = de(r.right, e.right), e.bottom = de(r.bottom, e.bottom), e.left = O(r.left, e.left), e;
		}), Oe(t, o, i));
		return {
			width: s.right - s.left,
			height: s.bottom - s.top,
			x: s.left,
			y: s.top
		};
	},
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { rect: t, offsetParent: n, strategy: r } = e, i = j(n), a = F(n);
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
		if ((i || !i && r !== "fixed") && ((A(n) !== "body" || _e(a)) && (o = we(n)), j(n))) {
			let e = P(n);
			s = N(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop;
		}
		return {
			width: t.width * s.x,
			height: t.height * s.y,
			x: t.x * s.x - o.scrollLeft * s.x + c.x,
			y: t.y * s.y - o.scrollTop * s.y + c.y
		};
	},
	isElement: M,
	getDimensions: function(e) {
		return j(e) ? fe(e) : e.getBoundingClientRect();
	},
	getOffsetParent: Ae,
	getDocumentElement: F,
	getScale: N,
	async getElementRects(e) {
		let { reference: t, floating: n, strategy: r } = e, i = this.getOffsetParent || Ae, a = this.getDimensions;
		return {
			reference: je(t, await i(n), r),
			floating: {
				x: 0,
				y: 0,
				...await a(n)
			}
		};
	},
	getClientRects: (e) => Array.from(e.getClientRects()),
	isRTL: (e) => D(e).direction === "rtl"
}, Ne = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Me,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return u(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/floating-vue/dist/floating-vue.mjs
function Pe(e, t) {
	for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? Pe(e[n], t[n]) : e[n] = t[n]);
}
var L = {
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
function R(e, t) {
	let n = L.themes[e] || {}, r;
	do
		r = n[t], typeof r > "u" ? n.$extend ? n = L.themes[n.$extend] || {} : (n = null, r = L[t]) : n = null;
	while (n);
	return r;
}
function Fe(e) {
	let t = [e], n = L.themes[e] || {};
	do
		n.$extend && !n.$resetCss ? (t.push(n.$extend), n = L.themes[n.$extend] || {}) : n = null;
	while (n);
	return t.map((e) => `v-popper--theme-${e}`);
}
function Ie(e) {
	let t = [e], n = L.themes[e] || {};
	do
		n.$extend ? (t.push(n.$extend), n = L.themes[n.$extend] || {}) : n = null;
	while (n);
	return t;
}
var z = !1;
if (typeof window < "u") {
	z = !1;
	try {
		let e = Object.defineProperty({}, "passive", { get() {
			z = !0;
		} });
		window.addEventListener("test", null, e);
	} catch {}
}
var Le = !1;
typeof window < "u" && typeof navigator < "u" && (Le = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
var Re = [
	"auto",
	"top",
	"bottom",
	"left",
	"right"
].reduce((e, t) => e.concat([
	t,
	`${t}-start`,
	`${t}-end`
]), []), ze = {
	hover: "mouseenter",
	focus: "focus",
	click: "click",
	touch: "touchstart",
	pointer: "pointerdown"
}, Be = {
	hover: "mouseleave",
	focus: "blur",
	click: "click",
	touch: "touchend",
	pointer: "pointerup"
};
function Ve(e, t) {
	let n = e.indexOf(t);
	n !== -1 && e.splice(n, 1);
}
function He() {
	return new Promise((e) => requestAnimationFrame(() => {
		requestAnimationFrame(e);
	}));
}
var B = [], V = null, Ue = {};
function We(e) {
	let t = Ue[e];
	return t ||= Ue[e] = [], t;
}
var Ge = function() {};
typeof window < "u" && (Ge = window.Element);
function H(e) {
	return function(t) {
		return R(t.theme, e);
	};
}
var Ke = "__floating-vue__popper", qe = () => v({
	name: "VPopper",
	provide() {
		return { [Ke]: { parentPopper: this } };
	},
	inject: { [Ke]: { default: null } },
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
			default: H("disabled")
		},
		positioningDisabled: {
			type: Boolean,
			default: H("positioningDisabled")
		},
		placement: {
			type: String,
			default: H("placement"),
			validator: (e) => Re.includes(e)
		},
		delay: {
			type: [
				String,
				Number,
				Object
			],
			default: H("delay")
		},
		distance: {
			type: [Number, String],
			default: H("distance")
		},
		skidding: {
			type: [Number, String],
			default: H("skidding")
		},
		triggers: {
			type: Array,
			default: H("triggers")
		},
		showTriggers: {
			type: [Array, Function],
			default: H("showTriggers")
		},
		hideTriggers: {
			type: [Array, Function],
			default: H("hideTriggers")
		},
		popperTriggers: {
			type: Array,
			default: H("popperTriggers")
		},
		popperShowTriggers: {
			type: [Array, Function],
			default: H("popperShowTriggers")
		},
		popperHideTriggers: {
			type: [Array, Function],
			default: H("popperHideTriggers")
		},
		container: {
			type: [
				String,
				Object,
				Ge,
				Boolean
			],
			default: H("container")
		},
		boundary: {
			type: [String, Ge],
			default: H("boundary")
		},
		strategy: {
			type: String,
			validator: (e) => ["absolute", "fixed"].includes(e),
			default: H("strategy")
		},
		autoHide: {
			type: [Boolean, Function],
			default: H("autoHide")
		},
		handleResize: {
			type: Boolean,
			default: H("handleResize")
		},
		instantMove: {
			type: Boolean,
			default: H("instantMove")
		},
		eagerMount: {
			type: Boolean,
			default: H("eagerMount")
		},
		popperClass: {
			type: [
				String,
				Array,
				Object
			],
			default: H("popperClass")
		},
		computeTransformOrigin: {
			type: Boolean,
			default: H("computeTransformOrigin")
		},
		autoMinSize: {
			type: Boolean,
			default: H("autoMinSize")
		},
		autoSize: {
			type: [Boolean, String],
			default: H("autoSize")
		},
		autoMaxSize: {
			type: Boolean,
			default: H("autoMaxSize")
		},
		autoBoundaryMaxSize: {
			type: Boolean,
			default: H("autoBoundaryMaxSize")
		},
		preventOverflow: {
			type: Boolean,
			default: H("preventOverflow")
		},
		overflowPadding: {
			type: [Number, String],
			default: H("overflowPadding")
		},
		arrowPadding: {
			type: [Number, String],
			default: H("arrowPadding")
		},
		arrowOverflow: {
			type: Boolean,
			default: H("arrowOverflow")
		},
		flip: {
			type: Boolean,
			default: H("flip")
		},
		shift: {
			type: Boolean,
			default: H("shift")
		},
		shiftCrossAxis: {
			type: Boolean,
			default: H("shiftCrossAxis")
		},
		noAutoFocus: {
			type: Boolean,
			default: H("noAutoFocus")
		},
		disposeTimeout: {
			type: Number,
			default: H("disposeTimeout")
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
			return this[Ke]?.parentPopper;
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
			(this.distance || this.skidding) && e.middleware.push(ee({
				mainAxis: this.distance,
				crossAxis: this.skidding
			}));
			let t = this.placement.startsWith("auto");
			if (t ? e.middleware.push(r({ alignment: this.placement.split("-")[1] ?? "" })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(c({
				padding: this.overflowPadding,
				boundary: this.boundary,
				crossAxis: this.shiftCrossAxis
			})), !t && this.flip && e.middleware.push(ne({
				padding: this.overflowPadding,
				boundary: this.boundary
			}))), e.middleware.push(a({
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
			(this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(l({
				boundary: this.boundary,
				padding: this.overflowPadding,
				apply: ({ availableWidth: e, availableHeight: t }) => {
					this.$_innerNode.style.maxWidth = e == null ? null : `${e}px`, this.$_innerNode.style.maxHeight = t == null ? null : `${t}px`;
				}
			})));
			let n = await Ne(this.$_referenceNode, this.$_popperNode, e);
			Object.assign(this.result, {
				x: n.x,
				y: n.y,
				placement: n.placement,
				strategy: n.strategy,
				arrow: {
					...n.middlewareData.arrow,
					...n.middlewareData.arrowOverflow
				}
			});
		},
		$_scheduleShow(e, t = !1) {
			if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), V && this.instantMove && V.instantMove && V !== this.parentPopper) {
				V.$_applyHide(!0), this.$_applyShow(!0);
				return;
			}
			t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
		},
		$_scheduleHide(e, t = !1) {
			if (this.shownChildren.size > 0) {
				this.pendingHide = !0;
				return;
			}
			this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (V = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
		},
		$_computeDelay(e) {
			let t = this.delay;
			return parseInt(t && t[e] || t || 0);
		},
		async $_applyShow(e = !1) {
			clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await He(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([...De(this.$_referenceNode), ...De(this.$_popperNode)], "scroll", () => {
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
				for (let n = 0; n < B.length; n++) t = B[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
			}
			B.push(this), document.body.classList.add("v-popper--some-open");
			for (let e of Ie(this.theme)) We(e).push(this), document.body.classList.add(`v-popper--some-open--${e}`);
			this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await He(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
		},
		async $_applyHide(e = !1) {
			if (this.shownChildren.size > 0) {
				this.pendingHide = !0, this.$_hideInProgress = !1;
				return;
			}
			if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
			this.skipTransition = e, Ve(B, this), B.length === 0 && document.body.classList.remove("v-popper--some-open");
			for (let e of Ie(this.theme)) {
				let t = We(e);
				Ve(t, this), t.length === 0 && document.body.classList.remove(`v-popper--some-open--${e}`);
			}
			V === this && (V = null), this.isShown = !1, this.$_applyAttrsToTarget({
				"aria-describedby": void 0,
				"data-popper-shown": void 0
			}), clearTimeout(this.$_disposeTimer);
			let t = this.disposeTimeout;
			t !== null && (this.$_disposeTimer = setTimeout(() => {
				this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
			}, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await He(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
			this.$_registerTriggerListeners(this.$_targetNodes, ze, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], ze, this.popperTriggers, this.popperShowTriggers, e);
			let t = (e) => {
				e.usedByTooltip || this.hide({ event: e });
			};
			this.$_registerTriggerListeners(this.$_targetNodes, Be, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Be, this.popperTriggers, this.popperHideTriggers, t);
		},
		$_registerEventListeners(e, t, n) {
			this.$_events.push({
				targetNodes: e,
				eventType: t,
				handler: n
			}), e.forEach((e) => e.addEventListener(t, n, z ? { passive: !0 } : void 0));
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
			if (G >= e.left && G <= e.right && K >= e.top && K <= e.bottom) {
				let e = this.$_popperNode.getBoundingClientRect(), t = G - U, n = K - W, r = e.left + e.width / 2 - U + (e.top + e.height / 2) - W + e.width + e.height, i = U + t * r, a = W + n * r;
				return et(U, W, i, a, e.left, e.top, e.left, e.bottom) || et(U, W, i, a, e.left, e.top, e.right, e.top) || et(U, W, i, a, e.right, e.top, e.right, e.bottom) || et(U, W, i, a, e.left, e.bottom, e.right, e.bottom);
			}
			return !1;
		}
	},
	render() {
		return this.$slots.default(this.slotData);
	}
});
if (typeof document < "u" && typeof window < "u") {
	if (Le) {
		let e = !z || {
			passive: !0,
			capture: !0
		};
		document.addEventListener("touchstart", (e) => Je(e, !0), e), document.addEventListener("touchend", (e) => Ye(e, !0), e);
	} else window.addEventListener("mousedown", (e) => Je(e, !1), !0), window.addEventListener("click", (e) => Ye(e, !1), !0);
	window.addEventListener("resize", $e);
}
function Je(e, t) {
	if (L.autoHideOnMousedown) Xe(e, t);
	else for (let t = 0; t < B.length; t++) {
		let n = B[t];
		try {
			n.mouseDownContains = n.popperNode().contains(e.target);
		} catch {}
	}
}
function Ye(e, t) {
	L.autoHideOnMousedown || Xe(e, t);
}
function Xe(e, t) {
	let n = {};
	for (let r = B.length - 1; r >= 0; r--) {
		let i = B[r];
		try {
			let r = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
			i.pendingHide = !1, requestAnimationFrame(() => {
				if (i.pendingHide = !1, !n[i.randomId] && Ze(i, r, e)) {
					if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
						let e = i.parentPopper;
						for (; e;) n[e.randomId] = !0, e = e.parentPopper;
						return;
					}
					let a = i.parentPopper;
					for (; a && Ze(a, a.containsGlobalTarget, e);) a.$_handleGlobalClose(e, t), a = a.parentPopper;
				}
			});
		} catch {}
	}
}
function Ze(e, t, n) {
	return n.closeAllPopover || n.closePopover && t || Qe(e, n) && !t;
}
function Qe(e, t) {
	if (typeof e.autoHide == "function") {
		let n = e.autoHide(t);
		return e.lastAutoHide = n, n;
	}
	return e.autoHide;
}
function $e() {
	for (let e = 0; e < B.length; e++) B[e].$_computePosition();
}
var U = 0, W = 0, G = 0, K = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
	U = G, W = K, G = e.clientX, K = e.clientY;
}, z ? { passive: !0 } : void 0);
function et(e, t, n, r, i, a, o, s) {
	let c = ((o - i) * (t - a) - (s - a) * (e - i)) / ((s - a) * (n - e) - (o - i) * (r - t)), l = ((n - e) * (t - a) - (r - t) * (e - i)) / ((s - a) * (n - e) - (o - i) * (r - t));
	return c >= 0 && c <= 1 && l >= 0 && l <= 1;
}
var tt = { extends: qe() }, nt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
function rt(e, t, n, r, a, o) {
	return i(), w("div", {
		ref: "reference",
		class: se(["v-popper", { "v-popper--shown": e.slotData.isShown }])
	}, [S(e.$slots, "default", y(ie(e.slotData)))], 2);
}
var it = /* @__PURE__ */ nt(tt, [["render", rt]]);
function at() {
	var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
	if (e.indexOf("Trident/") > 0) {
		var n = e.indexOf("rv:");
		return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
	}
	var r = e.indexOf("Edge/");
	return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : -1;
}
var ot;
function st() {
	st.init || (st.init = !0, ot = at() !== -1);
}
var ct = {
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
		st(), ue(() => {
			this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
		});
		let e = document.createElement("object");
		this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ot && this.$el.appendChild(e), e.data = "about:blank", ot || this.$el.appendChild(e);
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
			this._resizeObject && this._resizeObject.onload && (!ot && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
		}
	}
}, lt = /* @__PURE__ */ o("data-v-b329ee4c");
te("data-v-b329ee4c");
var ut = {
	class: "resize-observer",
	tabindex: "-1"
};
n(), ct.render = /* @__PURE__ */ lt((e, t, n, r, a, o) => (i(), x("div", ut))), ct.__scopeId = "data-v-b329ee4c", ct.__file = "src/components/ResizeObserver.vue";
var dt = (e = "theme") => ({ computed: { themeClass() {
	return Fe(this[e]);
} } }), ft = v({
	name: "VPopperContent",
	components: { ResizeObserver: ct },
	mixins: [dt()],
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
}), pt = [
	"id",
	"aria-hidden",
	"tabindex",
	"data-popper-placement"
], mt = {
	ref: "inner",
	class: "v-popper__inner"
}, ht = [/* @__PURE__ */ T("div", { class: "v-popper__arrow-outer" }, null, -1), /* @__PURE__ */ T("div", { class: "v-popper__arrow-inner" }, null, -1)];
function gt(e, t, n, r, a, o) {
	let c = s("ResizeObserver");
	return i(), w("div", {
		id: e.popperId,
		ref: "popover",
		class: se(["v-popper__popper", [
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
		style: b(e.result ? {
			position: e.result.strategy,
			transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
		} : void 0),
		"aria-hidden": e.shown ? "false" : "true",
		tabindex: e.autoHide ? 0 : void 0,
		"data-popper-placement": e.result ? e.result.placement : void 0,
		onKeyup: t[2] ||= g((t) => e.autoHide && e.$emit("hide"), ["esc"])
	}, [T("div", {
		class: "v-popper__backdrop",
		onClick: t[0] ||= (t) => e.autoHide && e.$emit("hide")
	}), T("div", {
		class: "v-popper__wrapper",
		style: b(e.result ? { transformOrigin: e.result.transformOrigin } : void 0)
	}, [T("div", mt, [e.mounted ? (i(), w(f, { key: 0 }, [T("div", null, [S(e.$slots, "default")]), e.handleResize ? (i(), x(c, {
		key: 0,
		onNotify: t[1] ||= (t) => e.$emit("resize", t)
	})) : _("", !0)], 64)) : _("", !0)], 512), T("div", {
		ref: "arrow",
		class: "v-popper__arrow-container",
		style: b(e.result ? {
			left: e.toPx(e.result.arrow.x),
			top: e.toPx(e.result.arrow.y)
		} : void 0)
	}, ht, 4)], 4)], 46, pt);
}
var _t = /* @__PURE__ */ nt(ft, [["render", gt]]), vt = { methods: {
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
} }, yt = function() {};
typeof window < "u" && (yt = window.Element);
var bt = v({
	name: "VPopperWrapper",
	components: {
		Popper: it,
		PopperContent: _t
	},
	mixins: [vt, dt("finalTheme")],
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
				yt,
				Boolean
			],
			default: void 0
		},
		boundary: {
			type: [String, yt],
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
function xt(e, t, n, r, a, o) {
	let c = s("PopperContent"), l = s("Popper");
	return i(), x(l, ce({ ref: "popper" }, e.$props, {
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
		default: m(({ popperId: t, isShown: n, shouldMountContent: r, skipTransition: i, autoHide: a, show: o, hide: s, handleResize: l, onResize: u, classes: d, result: f }) => [S(e.$slots, "default", {
			shown: n,
			show: o,
			hide: s
		}), C(c, {
			ref: "popperContent",
			"popper-id": t,
			theme: e.finalTheme,
			shown: n,
			mounted: r,
			"skip-transition": i,
			"auto-hide": a,
			"handle-resize": l,
			classes: d,
			result: f,
			onHide: s,
			onResize: u
		}, {
			default: m(() => [S(e.$slots, "popper", {
				shown: n,
				hide: s
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
var St = /* @__PURE__ */ nt(bt, [["render", xt]]), Ct = {
	...St,
	name: "VDropdown",
	vPopperTheme: "dropdown"
}, wt = {
	...St,
	name: "VMenu",
	vPopperTheme: "menu"
}, Tt = {
	...St,
	name: "VTooltip",
	vPopperTheme: "tooltip"
}, Et = v({
	name: "VTooltipDirective",
	components: {
		Popper: qe(),
		PopperContent: _t
	},
	mixins: [vt],
	inheritAttrs: !1,
	props: {
		theme: {
			type: String,
			default: "tooltip"
		},
		html: {
			type: Boolean,
			default: (e) => R(e.theme, "html")
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
			default: (e) => R(e.theme, "loadingContent")
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
}), Dt = ["innerHTML"], Ot = ["textContent"];
function kt(e, t, n, r, a, o) {
	let c = s("PopperContent"), l = s("Popper");
	return i(), x(l, ce({ ref: "popper" }, e.$attrs, {
		theme: e.theme,
		"target-nodes": e.targetNodes,
		"popper-node": () => e.$refs.popperContent.$el,
		onApplyShow: e.onShow,
		onApplyHide: e.onHide
	}), {
		default: m(({ popperId: t, isShown: n, shouldMountContent: r, skipTransition: a, autoHide: o, hide: s, handleResize: l, onResize: u, classes: d, result: f }) => [C(c, {
			ref: "popperContent",
			class: se({ "v-popper--tooltip-loading": e.loading }),
			"popper-id": t,
			theme: e.theme,
			shown: n,
			mounted: r,
			"skip-transition": a,
			"auto-hide": o,
			"handle-resize": l,
			classes: d,
			result: f,
			onHide: s,
			onResize: u
		}, {
			default: m(() => [e.html ? (i(), w("div", {
				key: 0,
				innerHTML: e.finalContent
			}, null, 8, Dt)) : (i(), w("div", {
				key: 1,
				textContent: ae(e.finalContent)
			}, null, 8, Ot))]),
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
var At = /* @__PURE__ */ nt(Et, [["render", kt]]), jt = "v-popper--has-tooltip";
function Mt(e, t) {
	let n = e.placement;
	if (!n && t) for (let e of Re) t[e] && (n = e);
	return n ||= R(e.theme || "tooltip", "placement"), n;
}
function Nt(e, t, n) {
	let r, i = typeof t;
	return r = i === "string" ? { content: t } : t && i === "object" ? t : { content: !1 }, r.placement = Mt(r, n), r.targetNodes = () => [e], r.referenceNode = () => e, r;
}
var Pt, q, Ft = 0;
function It() {
	if (Pt) return;
	q = oe([]), Pt = h({
		name: "VTooltipDirectiveApp",
		setup() {
			return { directives: q };
		},
		render() {
			return this.directives.map((e) => re(At, {
				...e.options,
				shown: e.shown || e.options.shown,
				key: e.id
			}));
		},
		devtools: { hide: !0 }
	});
	let e = document.createElement("div");
	document.body.appendChild(e), Pt.mount(e);
}
function Lt(e, t, n) {
	It();
	let r = oe(Nt(e, t, n)), i = oe(!1), a = {
		id: Ft++,
		options: r,
		shown: i
	};
	return q.value.push(a), e.classList && e.classList.add(jt), e.$_popper = {
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
function Rt(e) {
	if (e.$_popper) {
		let t = q.value.indexOf(e.$_popper.item);
		t !== -1 && q.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
	}
	e.classList && e.classList.remove(jt);
}
function zt(e, { value: t, modifiers: n }) {
	let r = Nt(e, t, n);
	if (!r.content || R(r.theme || "tooltip", "disabled")) Rt(e);
	else {
		let i;
		e.$_popper ? (i = e.$_popper, i.options.value = r) : i = Lt(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? i.show() : i.hide());
	}
}
var Bt = {
	beforeMount: zt,
	updated: zt,
	beforeUnmount(e) {
		Rt(e);
	}
};
function Vt(e) {
	e.addEventListener("mousedown", Ut), e.addEventListener("click", Ut), e.addEventListener("touchstart", Wt, z ? { passive: !0 } : !1);
}
function Ht(e) {
	e.removeEventListener("mousedown", Ut), e.removeEventListener("click", Ut), e.removeEventListener("touchstart", Wt), e.removeEventListener("touchend", Gt), e.removeEventListener("touchcancel", Kt);
}
function Ut(e) {
	let t = e.currentTarget;
	e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
}
function Wt(e) {
	if (e.changedTouches.length === 1) {
		let t = e.currentTarget;
		t.$_vclosepopover_touch = !0, t.$_vclosepopover_touchPoint = e.changedTouches[0], t.addEventListener("touchend", Gt), t.addEventListener("touchcancel", Kt);
	}
}
function Gt(e) {
	let t = e.currentTarget;
	if (t.$_vclosepopover_touch = !1, e.changedTouches.length === 1) {
		let n = e.changedTouches[0], r = t.$_vclosepopover_touchPoint;
		e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
	}
}
function Kt(e) {
	let t = e.currentTarget;
	t.$_vclosepopover_touch = !1;
}
var qt = {
	beforeMount(e, { value: t, modifiers: n }) {
		e.$_closePopoverModifiers = n, (typeof t > "u" || t) && Vt(e);
	},
	updated(e, { value: t, oldValue: n, modifiers: r }) {
		e.$_closePopoverModifiers = r, t !== n && (typeof t > "u" || t ? Vt(e) : Ht(e));
	},
	beforeUnmount(e) {
		Ht(e);
	}
}, Jt = L, Yt = Ct;
function Xt(e, t = {}) {
	e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0, Pe(L, t), e.directive("tooltip", Bt), e.directive("close-popper", qt), e.component("VTooltip", Tt), e.component("VDropdown", Ct), e.component("VMenu", wt));
}
var Zt = {
	version: "5.2.2",
	install: Xt,
	options: L
}, Qt = [
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
], $t = /* #__PURE__ */ Qt.join(","), en = typeof Element > "u", J = en ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, tn = !en && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, nn = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : nn(e.parentNode));
}, rn = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, an = function(e, t, n) {
	if (nn(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll($t));
	return t && J.call(e, $t) && r.unshift(e), r = r.filter(n), r;
}, on = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!nn(a, !1)) {
			if (a.tagName === "SLOT") {
				var o = a.assignedElements(), s = on(o.length ? o : a.children, !0, n);
				n.flatten ? r.push.apply(r, s) : r.push({
					scopeParent: a,
					candidates: s
				});
			} else {
				J.call(a, $t) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
				var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !nn(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
				if (c && l) {
					var u = on(c === !0 ? a.children : c.children, !0, n);
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
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || rn(e)) && !sn(e) ? 0 : e.tabIndex;
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
	var t = e.form || tn(e), n = function(e) {
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
	var t = e && tn(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = tn(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
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
	var a = J.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (J.call(a, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var o = e; e;) {
				var s = e.parentElement, c = tn(e);
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
				if (r.tagName === "LEGEND") return J.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
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
	return t ||= {}, wn(t.getShadowRoot ? on([e], t.includeContainer, {
		filter: Sn.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: Cn
	}) : an(e, t.includeContainer, Sn.bind(null, t)));
}, En = function(e, t) {
	return t ||= {}, t.getShadowRoot ? on([e], t.includeContainer, {
		filter: xn.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : an(e, t.includeContainer, xn.bind(null, t));
}, X = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return J.call(e, $t) !== !1 && Sn(t, e);
}, Dn = /* #__PURE__ */ Qt.concat("iframe:not([inert]):not([inert] *)").join(","), On = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return J.call(e, Dn) !== !1 && xn(t, e);
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
	}, y = function(e) {
		(i.isKeyForward(e) || i.isKeyBackward(e)) && v(e, i.isKeyBackward(e));
	}, b = function(e) {
		Hn(e) && $(i.escapeDeactivates, e) !== !1 && (e.preventDefault(), o.deactivate());
	}, x = function(e) {
		c(Kn(e), e) >= 0 || $(i.clickOutsideDeactivates, e) || $(i.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation());
	}, S = function() {
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
			}), n.addEventListener("click", x, {
				capture: !0,
				passive: !1
			}), n.addEventListener("keydown", y, {
				capture: !0,
				passive: !1
			}), n.addEventListener("keydown", b), e;
		}
	}, ee = function(e) {
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
	}, te = function() {
		if (a.active) return n.removeEventListener("focusin", _, !0), n.removeEventListener("mousedown", g, !0), n.removeEventListener("touchstart", g, !0), n.removeEventListener("click", x, !0), n.removeEventListener("keydown", y, !0), n.removeEventListener("keydown", b), o;
	}, ne = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(function(e) {
		var t = a.mostRecentlyFocusedNode;
		t && e.some(function(e) {
			return Array.from(e.removedNodes).some(function(e) {
				return e === t || typeof e.contains == "function" && e.contains(t);
			});
		}) && a.containers.some(function(e) {
			return e?.isConnected;
		}) && (f(), p(d()));
	}) : void 0, C = function() {
		ne && (ne.disconnect(), a.active && !a.paused && a.containers.map(function(e) {
			ne.observe(e, {
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
						o._setSubtreeIsolation(!0), C(), i?.({ trap: o });
					}, t = S();
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
			clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || o._setSubtreeIsolation(!1), a.alreadySilent.clear(), te(), a.active = !1, a.paused = !1, C(), Z.deactivateTrap(r, o);
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
			}), i.isolateSubtrees && ee(a.containers), a.active && (f(), a.paused || o._setSubtreeIsolation(!0)), C(), this;
		}
	}, Object.defineProperties(o, {
		_isManuallyPaused: { value: function() {
			return a.manuallyPaused;
		} },
		_setPausedState: { value: function(e, t) {
			if (a.paused === e) return this;
			if (a.paused = e, e) {
				var n = s(t, "onPause"), r = s(t, "onPostPause");
				n?.({ trap: o }), te(), o._setSubtreeIsolation(!1), C(), r?.({ trap: o });
			} else {
				var i = s(t, "onUnpause"), c = s(t, "onPostUnpause");
				i?.({ trap: o }), (function() {
					f();
					var e = function() {
						o._setSubtreeIsolation(!0), C(), c?.({ trap: o });
					}, t = S();
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
var Zn = le(), Qn = v({
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
	"material-design-icon": "_material-design-icon_4lyLG",
	ncPopover: "_ncPopover_OB2ul"
}, er = "nc-popover-9";
Jt.themes[er] = structuredClone(Jt.themes.dropdown);
var tr = {
	name: "NcPopover",
	components: {
		Dropdown: Yt,
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
			window.OC?.debug && (this.getPopoverTriggerContainerElement().querySelector("[aria-expanded]") || t("It looks like you are using a custom button as a <NcPopover> or other popover #trigger. If you are not using <NcButton> as a trigger, you need to bind attrs from the #trigger slot props to your custom button. See <NcPopover> docs for an example."));
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
function nr(e, t, n, r, a, o) {
	let c = s("NcPopoverTriggerProvider"), l = s("Dropdown");
	return i(), x(l, {
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
		placement: o.internalPlacement,
		popperClass: [e.$style.ncPopover, n.popoverBaseClass],
		popperTriggers: o.popperTriggers,
		popperHideTriggers: o.popperHideTriggers,
		popperShowTriggers: o.popperShowTriggers,
		theme: r.theme,
		triggers: o.internalTriggers,
		hideTriggers: o.hideTriggers,
		showTriggers: o.showTriggers,
		onApplyShow: o.afterShow,
		onApplyHide: o.afterHide
	}, {
		popper: m((t) => [S(e.$slots, "default", y(ie(t)))]),
		default: m(() => [C(c, {
			shown: a.internalShown,
			popupRole: n.popupRole
		}, {
			default: m((t) => [S(e.$slots, "trigger", y(ie(t)))]),
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
export { Jn as a, Yn as i, Zn as n, Zt as o, Xn as r, rr as t };
