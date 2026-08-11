import { r as e, t } from "./rolldown-runtime-B0aSnxlc.chunk.mjs";
import { At as n, B as r, Bt as i, Cn as a, Ct as o, D as s, Et as c, G as l, H as u, Ht as d, I as f, K as p, Lt as m, Rt as h, Sn as g, Tt as _, Ut as v, V as ee, W as te, Z as y, Zt as ne, _t as re, bn as b, dn as x, en as S, et as ie, gt as C, ht as w, jt as ae, nn as oe, st as se, ut as ce, vt as T, xn as le, xt as ue, z as de } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
//#region node_modules/floating-vue/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function E(e) {
	return e.ownerDocument?.defaultView || window;
}
function D(e) {
	return E(e).getComputedStyle(e);
}
var fe = Math.min, O = Math.max, pe = Math.round;
function me(e) {
	let t = D(e), n = parseFloat(t.width), r = parseFloat(t.height), i = e.offsetWidth, a = e.offsetHeight, o = pe(n) !== i || pe(r) !== a;
	return o && (n = i, r = a), {
		width: n,
		height: r,
		fallback: o
	};
}
function k(e) {
	return _e(e) ? (e.nodeName || "").toLowerCase() : "";
}
var he;
function ge() {
	if (he) return he;
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? (he = e.brands.map(((e) => e.brand + "/" + e.version)).join(" "), he) : navigator.userAgent;
}
function A(e) {
	return e instanceof E(e).HTMLElement;
}
function j(e) {
	return e instanceof E(e).Element;
}
function _e(e) {
	return e instanceof E(e).Node;
}
function ve(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof E(e).ShadowRoot || e instanceof ShadowRoot;
}
function ye(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = D(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function be(e) {
	return [
		"table",
		"td",
		"th"
	].includes(k(e));
}
function xe(e) {
	let t = /firefox/i.test(ge()), n = D(e), r = n.backdropFilter || n.WebkitBackdropFilter;
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
function Se() {
	return !/^((?!chrome|android).)*safari/i.test(ge());
}
function Ce(e) {
	return [
		"html",
		"body",
		"#document"
	].includes(k(e));
}
function we(e) {
	return j(e) ? e : e.contextElement;
}
var Te = {
	x: 1,
	y: 1
};
function M(e) {
	let t = we(e);
	if (!A(t)) return Te;
	let n = t.getBoundingClientRect(), { width: r, height: i, fallback: a } = me(t), o = (a ? pe(n.width) : n.width) / r, s = (a ? pe(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
function Ee(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = we(e), o = Te;
	t && (r ? j(r) && (o = M(r)) : o = M(e));
	let s = a ? E(a) : window, c = !Se() && n, l = (i.left + (c && s.visualViewport?.offsetLeft || 0)) / o.x, u = (i.top + (c && s.visualViewport?.offsetTop || 0)) / o.y, d = i.width / o.x, f = i.height / o.y;
	if (a) {
		let e = E(a), t = r && j(r) ? E(r) : r, n = e.frameElement;
		for (; n && r && t !== e;) {
			let e = M(n), t = n.getBoundingClientRect(), r = getComputedStyle(n);
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
function N(e) {
	return ((_e(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function De(e) {
	return j(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.pageXOffset,
		scrollTop: e.pageYOffset
	};
}
function Oe(e) {
	return Ee(N(e)).left + De(e).scrollLeft;
}
function P(e) {
	if (k(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ve(e) && e.host || N(e);
	return ve(t) ? t.host : t;
}
function ke(e) {
	let t = P(e);
	return Ce(t) ? t.ownerDocument.body : A(t) && ye(t) ? t : ke(t);
}
function Ae(e, t) {
	t === void 0 && (t = []);
	let n = ke(e), r = n === e.ownerDocument?.body, i = E(n);
	return r ? t.concat(i, i.visualViewport || [], ye(n) ? n : []) : t.concat(n, Ae(n));
}
function je(e, t, n) {
	return t === "viewport" ? y(function(e, t) {
		let n = E(e), r = N(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
		if (i) {
			a = i.width, o = i.height;
			let e = Se();
			(e || !e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
		}
		return {
			width: a,
			height: o,
			x: s,
			y: c
		};
	}(e, n)) : j(t) ? y(function(e, t) {
		let n = Ee(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = A(e) ? M(e) : {
			x: 1,
			y: 1
		};
		return {
			width: e.clientWidth * a.x,
			height: e.clientHeight * a.y,
			x: i * a.x,
			y: r * a.y
		};
	}(t, n)) : y(function(e) {
		let t = N(e), n = De(e), r = e.ownerDocument.body, i = O(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = O(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Oe(e), s = -n.scrollTop;
		return D(r).direction === "rtl" && (o += O(t.clientWidth, r.clientWidth) - i), {
			width: i,
			height: a,
			x: o,
			y: s
		};
	}(N(e)));
}
function Me(e) {
	return A(e) && D(e).position !== "fixed" ? e.offsetParent : null;
}
function Ne(e) {
	let t = E(e), n = Me(e);
	for (; n && be(n) && D(n).position === "static";) n = Me(n);
	return n && (k(n) === "html" || k(n) === "body" && D(n).position === "static" && !xe(n)) ? t : n || function(e) {
		let t = P(e);
		for (; A(t) && !Ce(t);) {
			if (xe(t)) return t;
			t = P(t);
		}
		return null;
	}(e) || t;
}
function Pe(e, t, n) {
	let r = A(t), i = N(t), a = Ee(e, !0, n === "fixed", t), o = {
		scrollLeft: 0,
		scrollTop: 0
	}, s = {
		x: 0,
		y: 0
	};
	if (r || !r && n !== "fixed") {
		if ((k(t) !== "body" || ye(i)) && (o = De(t)), A(t)) {
			let e = Ee(t, !0);
			s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop;
		} else i && (s.x = Oe(i));
	}
	return {
		x: a.left + o.scrollLeft - s.x,
		y: a.top + o.scrollTop - s.y,
		width: a.width,
		height: a.height
	};
}
var Fe = {
	getClippingRect: function(e) {
		let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? function(e, t) {
			let n = t.get(e);
			if (n) return n;
			let r = Ae(e).filter(((e) => j(e) && k(e) !== "body")), i = null, a = D(e).position === "fixed", o = a ? P(e) : e;
			for (; j(o) && !Ce(o);) {
				let e = D(o), t = xe(o);
				(a ? t || i : t || e.position !== "static" || !i || !["absolute", "fixed"].includes(i.position)) ? i = e : r = r.filter(((e) => e !== o)), o = P(o);
			}
			return t.set(e, r), r;
		}(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce(((e, n) => {
			let r = je(t, n, i);
			return e.top = O(r.top, e.top), e.right = fe(r.right, e.right), e.bottom = fe(r.bottom, e.bottom), e.left = O(r.left, e.left), e;
		}), je(t, o, i));
		return {
			width: s.right - s.left,
			height: s.bottom - s.top,
			x: s.left,
			y: s.top
		};
	},
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { rect: t, offsetParent: n, strategy: r } = e, i = A(n), a = N(n);
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
		if ((i || !i && r !== "fixed") && ((k(n) !== "body" || ye(a)) && (o = De(n)), A(n))) {
			let e = Ee(n);
			s = M(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop;
		}
		return {
			width: t.width * s.x,
			height: t.height * s.y,
			x: t.x * s.x - o.scrollLeft * s.x + c.x,
			y: t.y * s.y - o.scrollTop * s.y + c.y
		};
	},
	isElement: j,
	getDimensions: function(e) {
		return A(e) ? me(e) : e.getBoundingClientRect();
	},
	getOffsetParent: Ne,
	getDocumentElement: N,
	getScale: M,
	async getElementRects(e) {
		let { reference: t, floating: n, strategy: r } = e, i = this.getOffsetParent || Ne, a = this.getDimensions;
		return {
			reference: Pe(t, await i(n), r),
			floating: {
				x: 0,
				y: 0,
				...await a(n)
			}
		};
	},
	getClientRects: (e) => Array.from(e.getClientRects()),
	isRTL: (e) => D(e).direction === "rtl"
}, Ie = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Fe,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return ee(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/floating-vue/dist/floating-vue.mjs
function Le(e, t) {
	for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? Le(e[n], t[n]) : e[n] = t[n]);
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
function Re(e) {
	let t = [e], n = F.themes[e] || {};
	do
		n.$extend && !n.$resetCss ? (t.push(n.$extend), n = F.themes[n.$extend] || {}) : n = null;
	while (n);
	return t.map((e) => `v-popper--theme-${e}`);
}
function ze(e) {
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
var Be = !1;
typeof window < "u" && typeof navigator < "u" && (Be = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
var Ve = [
	"auto",
	"top",
	"bottom",
	"left",
	"right"
].reduce((e, t) => e.concat([
	t,
	`${t}-start`,
	`${t}-end`
]), []), He = {
	hover: "mouseenter",
	focus: "focus",
	click: "click",
	touch: "touchstart",
	pointer: "pointerdown"
}, Ue = {
	hover: "mouseleave",
	focus: "blur",
	click: "click",
	touch: "touchend",
	pointer: "pointerup"
};
function We(e, t) {
	let n = e.indexOf(t);
	n !== -1 && e.splice(n, 1);
}
function Ge() {
	return new Promise((e) => requestAnimationFrame(() => {
		requestAnimationFrame(e);
	}));
}
var R = [], z = null, Ke = {};
function qe(e) {
	let t = Ke[e];
	return t ||= Ke[e] = [], t;
}
var Je = function() {};
typeof window < "u" && (Je = window.Element);
function B(e) {
	return function(t) {
		return I(t.theme, e);
	};
}
var Ye = "__floating-vue__popper", Xe = () => o({
	name: "VPopper",
	provide() {
		return { [Ye]: { parentPopper: this } };
	},
	inject: { [Ye]: { default: null } },
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
			validator: (e) => Ve.includes(e)
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
				Je,
				Boolean
			],
			default: B("container")
		},
		boundary: {
			type: [String, Je],
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
			return this[Ye]?.parentPopper;
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
			(this.distance || this.skidding) && e.middleware.push(te({
				mainAxis: this.distance,
				crossAxis: this.skidding
			}));
			let t = this.placement.startsWith("auto");
			if (t ? e.middleware.push(r({ alignment: this.placement.split("-")[1] ?? "" })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(l({
				padding: this.overflowPadding,
				boundary: this.boundary,
				crossAxis: this.shiftCrossAxis
			})), !t && this.flip && e.middleware.push(u({
				padding: this.overflowPadding,
				boundary: this.boundary
			}))), e.middleware.push(de({
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
			(this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(p({
				boundary: this.boundary,
				padding: this.overflowPadding,
				apply: ({ availableWidth: e, availableHeight: t }) => {
					this.$_innerNode.style.maxWidth = e == null ? null : `${e}px`, this.$_innerNode.style.maxHeight = t == null ? null : `${t}px`;
				}
			})));
			let n = await Ie(this.$_referenceNode, this.$_popperNode, e);
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
			clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Ge(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([...Ae(this.$_referenceNode), ...Ae(this.$_popperNode)], "scroll", () => {
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
			for (let e of ze(this.theme)) qe(e).push(this), document.body.classList.add(`v-popper--some-open--${e}`);
			this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ge(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
		},
		async $_applyHide(e = !1) {
			if (this.shownChildren.size > 0) {
				this.pendingHide = !0, this.$_hideInProgress = !1;
				return;
			}
			if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
			this.skipTransition = e, We(R, this), R.length === 0 && document.body.classList.remove("v-popper--some-open");
			for (let e of ze(this.theme)) {
				let t = qe(e);
				We(t, this), t.length === 0 && document.body.classList.remove(`v-popper--some-open--${e}`);
			}
			z === this && (z = null), this.isShown = !1, this.$_applyAttrsToTarget({
				"aria-describedby": void 0,
				"data-popper-shown": void 0
			}), clearTimeout(this.$_disposeTimer);
			let t = this.disposeTimeout;
			t !== null && (this.$_disposeTimer = setTimeout(() => {
				this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
			}, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ge(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
			this.$_registerTriggerListeners(this.$_targetNodes, He, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], He, this.popperTriggers, this.popperShowTriggers, e);
			let t = (e) => {
				e.usedByTooltip || this.hide({ event: e });
			};
			this.$_registerTriggerListeners(this.$_targetNodes, Ue, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Ue, this.popperTriggers, this.popperHideTriggers, t);
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
				return rt(V, H, i, a, e.left, e.top, e.left, e.bottom) || rt(V, H, i, a, e.left, e.top, e.right, e.top) || rt(V, H, i, a, e.right, e.top, e.right, e.bottom) || rt(V, H, i, a, e.left, e.bottom, e.right, e.bottom);
			}
			return !1;
		}
	},
	render() {
		return this.$slots.default(this.slotData);
	}
});
if (typeof document < "u" && typeof window < "u") {
	if (Be) {
		let e = !L || {
			passive: !0,
			capture: !0
		};
		document.addEventListener("touchstart", (e) => Ze(e, !0), e), document.addEventListener("touchend", (e) => Qe(e, !0), e);
	} else window.addEventListener("mousedown", (e) => Ze(e, !1), !0), window.addEventListener("click", (e) => Qe(e, !1), !0);
	window.addEventListener("resize", nt);
}
function Ze(e, t) {
	if (F.autoHideOnMousedown) $e(e, t);
	else for (let t = 0; t < R.length; t++) {
		let n = R[t];
		try {
			n.mouseDownContains = n.popperNode().contains(e.target);
		} catch {}
	}
}
function Qe(e, t) {
	F.autoHideOnMousedown || $e(e, t);
}
function $e(e, t) {
	let n = {};
	for (let r = R.length - 1; r >= 0; r--) {
		let i = R[r];
		try {
			let r = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
			i.pendingHide = !1, requestAnimationFrame(() => {
				if (i.pendingHide = !1, !n[i.randomId] && et(i, r, e)) {
					if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
						let e = i.parentPopper;
						for (; e;) n[e.randomId] = !0, e = e.parentPopper;
						return;
					}
					let a = i.parentPopper;
					for (; a && et(a, a.containsGlobalTarget, e);) a.$_handleGlobalClose(e, t), a = a.parentPopper;
				}
			});
		} catch {}
	}
}
function et(e, t, n) {
	return n.closeAllPopover || n.closePopover && t || tt(e, n) && !t;
}
function tt(e, t) {
	if (typeof e.autoHide == "function") {
		let n = e.autoHide(t);
		return e.lastAutoHide = n, n;
	}
	return e.autoHide;
}
function nt() {
	for (let e = 0; e < R.length; e++) R[e].$_computePosition();
}
var V = 0, H = 0, U = 0, W = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
	V = U, H = W, U = e.clientX, W = e.clientY;
}, L ? { passive: !0 } : void 0);
function rt(e, t, n, r, i, a, o, s) {
	let c = ((o - i) * (t - a) - (s - a) * (e - i)) / ((s - a) * (n - e) - (o - i) * (r - t)), l = ((n - e) * (t - a) - (r - t) * (e - i)) / ((s - a) * (n - e) - (o - i) * (r - t));
	return c >= 0 && c <= 1 && l >= 0 && l <= 1;
}
var it = { extends: Xe() }, at = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
function ot(e, t, n, r, i, a) {
	return m(), T("div", {
		ref: "reference",
		class: b(["v-popper", { "v-popper--shown": e.slotData.isShown }])
	}, [d(e.$slots, "default", le(_(e.slotData)))], 2);
}
var st = /* @__PURE__ */ at(it, [["render", ot]]);
function ct() {
	var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
	if (e.indexOf("Trident/") > 0) {
		var n = e.indexOf("rv:");
		return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
	}
	var r = e.indexOf("Edge/");
	return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : -1;
}
var lt;
function ut() {
	ut.init || (ut.init = !0, lt = ct() !== -1);
}
var dt = {
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
		ut(), ae(() => {
			this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
		});
		let e = document.createElement("object");
		this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", lt && this.$el.appendChild(e), e.data = "about:blank", lt || this.$el.appendChild(e);
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
			this._resizeObject && this._resizeObject.onload && (!lt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
		}
	}
}, ft = /* @__PURE__ */ oe("data-v-b329ee4c");
i("data-v-b329ee4c");
var pt = {
	class: "resize-observer",
	tabindex: "-1"
};
h(), dt.render = /* @__PURE__ */ ft((e, t, n, r, i, a) => (m(), C("div", pt))), dt.__scopeId = "data-v-b329ee4c", dt.__file = "src/components/ResizeObserver.vue";
var mt = (e = "theme") => ({ computed: { themeClass() {
	return Re(this[e]);
} } }), ht = o({
	name: "VPopperContent",
	components: { ResizeObserver: dt },
	mixins: [mt()],
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
}), gt = [
	"id",
	"aria-hidden",
	"tabindex",
	"data-popper-placement"
], _t = {
	ref: "inner",
	class: "v-popper__inner"
}, vt = [/* @__PURE__ */ w("div", { class: "v-popper__arrow-outer" }, null, -1), /* @__PURE__ */ w("div", { class: "v-popper__arrow-inner" }, null, -1)];
function yt(e, t, n, r, i, a) {
	let o = v("ResizeObserver");
	return m(), T("div", {
		id: e.popperId,
		ref: "popover",
		class: b(["v-popper__popper", [
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
		style: g(e.result ? {
			position: e.result.strategy,
			transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
		} : void 0),
		"aria-hidden": e.shown ? "false" : "true",
		tabindex: e.autoHide ? 0 : void 0,
		"data-popper-placement": e.result ? e.result.placement : void 0,
		onKeyup: t[2] ||= se((t) => e.autoHide && e.$emit("hide"), ["esc"])
	}, [w("div", {
		class: "v-popper__backdrop",
		onClick: t[0] ||= (t) => e.autoHide && e.$emit("hide")
	}), w("div", {
		class: "v-popper__wrapper",
		style: g(e.result ? { transformOrigin: e.result.transformOrigin } : void 0)
	}, [w("div", _t, [e.mounted ? (m(), T(ce, { key: 0 }, [w("div", null, [d(e.$slots, "default")]), e.handleResize ? (m(), C(o, {
		key: 0,
		onNotify: t[1] ||= (t) => e.$emit("resize", t)
	})) : re("", !0)], 64)) : re("", !0)], 512), w("div", {
		ref: "arrow",
		class: "v-popper__arrow-container",
		style: g(e.result ? {
			left: e.toPx(e.result.arrow.x),
			top: e.toPx(e.result.arrow.y)
		} : void 0)
	}, vt, 4)], 4)], 46, gt);
}
var bt = /* @__PURE__ */ at(ht, [["render", yt]]), xt = { methods: {
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
} }, St = function() {};
typeof window < "u" && (St = window.Element);
var Ct = o({
	name: "VPopperWrapper",
	components: {
		Popper: st,
		PopperContent: bt
	},
	mixins: [xt, mt("finalTheme")],
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
				St,
				Boolean
			],
			default: void 0
		},
		boundary: {
			type: [String, St],
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
function wt(e, t, r, i, a, o) {
	let s = v("PopperContent"), c = v("Popper");
	return m(), C(c, n({ ref: "popper" }, e.$props, {
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
		default: S(({ popperId: t, isShown: n, shouldMountContent: r, skipTransition: i, autoHide: a, show: o, hide: c, handleResize: l, onResize: u, classes: f, result: p }) => [d(e.$slots, "default", {
			shown: n,
			show: o,
			hide: c
		}), ue(s, {
			ref: "popperContent",
			"popper-id": t,
			theme: e.finalTheme,
			shown: n,
			mounted: r,
			"skip-transition": i,
			"auto-hide": a,
			"handle-resize": l,
			classes: f,
			result: p,
			onHide: c,
			onResize: u
		}, {
			default: S(() => [d(e.$slots, "popper", {
				shown: n,
				hide: c
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
var Tt = /* @__PURE__ */ at(Ct, [["render", wt]]), Et = {
	...Tt,
	name: "VDropdown",
	vPopperTheme: "dropdown"
}, Dt = {
	...Tt,
	name: "VMenu",
	vPopperTheme: "menu"
}, Ot = {
	...Tt,
	name: "VTooltip",
	vPopperTheme: "tooltip"
}, kt = o({
	name: "VTooltipDirective",
	components: {
		Popper: Xe(),
		PopperContent: bt
	},
	mixins: [xt],
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
}), At = ["innerHTML"], jt = ["textContent"];
function Mt(e, t, r, i, o, s) {
	let c = v("PopperContent"), l = v("Popper");
	return m(), C(l, n({ ref: "popper" }, e.$attrs, {
		theme: e.theme,
		"target-nodes": e.targetNodes,
		"popper-node": () => e.$refs.popperContent.$el,
		onApplyShow: e.onShow,
		onApplyHide: e.onHide
	}), {
		default: S(({ popperId: t, isShown: n, shouldMountContent: r, skipTransition: i, autoHide: o, hide: s, handleResize: l, onResize: u, classes: d, result: f }) => [ue(c, {
			ref: "popperContent",
			class: b({ "v-popper--tooltip-loading": e.loading }),
			"popper-id": t,
			theme: e.theme,
			shown: n,
			mounted: r,
			"skip-transition": i,
			"auto-hide": o,
			"handle-resize": l,
			classes: d,
			result: f,
			onHide: s,
			onResize: u
		}, {
			default: S(() => [e.html ? (m(), T("div", {
				key: 0,
				innerHTML: e.finalContent
			}, null, 8, At)) : (m(), T("div", {
				key: 1,
				textContent: a(e.finalContent)
			}, null, 8, jt))]),
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
var Nt = /* @__PURE__ */ at(kt, [["render", Mt]]), Pt = "v-popper--has-tooltip";
function Ft(e, t) {
	let n = e.placement;
	if (!n && t) for (let e of Ve) t[e] && (n = e);
	return n ||= I(e.theme || "tooltip", "placement"), n;
}
function It(e, t, n) {
	let r, i = typeof t;
	return r = i === "string" ? { content: t } : t && i === "object" ? t : { content: !1 }, r.placement = Ft(r, n), r.targetNodes = () => [e], r.referenceNode = () => e, r;
}
var Lt, G, Rt = 0;
function zt() {
	if (Lt) return;
	G = x([]), Lt = ie({
		name: "VTooltipDirectiveApp",
		setup() {
			return { directives: G };
		},
		render() {
			return this.directives.map((e) => c(Nt, {
				...e.options,
				shown: e.shown || e.options.shown,
				key: e.id
			}));
		},
		devtools: { hide: !0 }
	});
	let e = document.createElement("div");
	document.body.appendChild(e), Lt.mount(e);
}
function Bt(e, t, n) {
	zt();
	let r = x(It(e, t, n)), i = x(!1), a = {
		id: Rt++,
		options: r,
		shown: i
	};
	return G.value.push(a), e.classList && e.classList.add(Pt), e.$_popper = {
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
function Vt(e) {
	if (e.$_popper) {
		let t = G.value.indexOf(e.$_popper.item);
		t !== -1 && G.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
	}
	e.classList && e.classList.remove(Pt);
}
function Ht(e, { value: t, modifiers: n }) {
	let r = It(e, t, n);
	if (!r.content || I(r.theme || "tooltip", "disabled")) Vt(e);
	else {
		let i;
		e.$_popper ? (i = e.$_popper, i.options.value = r) : i = Bt(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? i.show() : i.hide());
	}
}
var Ut = {
	beforeMount: Ht,
	updated: Ht,
	beforeUnmount(e) {
		Vt(e);
	}
};
function Wt(e) {
	e.addEventListener("mousedown", Kt), e.addEventListener("click", Kt), e.addEventListener("touchstart", qt, L ? { passive: !0 } : !1);
}
function Gt(e) {
	e.removeEventListener("mousedown", Kt), e.removeEventListener("click", Kt), e.removeEventListener("touchstart", qt), e.removeEventListener("touchend", Jt), e.removeEventListener("touchcancel", Yt);
}
function Kt(e) {
	let t = e.currentTarget;
	e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
}
function qt(e) {
	if (e.changedTouches.length === 1) {
		let t = e.currentTarget;
		t.$_vclosepopover_touch = !0, t.$_vclosepopover_touchPoint = e.changedTouches[0], t.addEventListener("touchend", Jt), t.addEventListener("touchcancel", Yt);
	}
}
function Jt(e) {
	let t = e.currentTarget;
	if (t.$_vclosepopover_touch = !1, e.changedTouches.length === 1) {
		let n = e.changedTouches[0], r = t.$_vclosepopover_touchPoint;
		e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
	}
}
function Yt(e) {
	let t = e.currentTarget;
	t.$_vclosepopover_touch = !1;
}
var Xt = {
	beforeMount(e, { value: t, modifiers: n }) {
		e.$_closePopoverModifiers = n, (typeof t > "u" || t) && Wt(e);
	},
	updated(e, { value: t, oldValue: n, modifiers: r }) {
		e.$_closePopoverModifiers = r, t !== n && (typeof t > "u" || t ? Wt(e) : Gt(e));
	},
	beforeUnmount(e) {
		Gt(e);
	}
}, Zt = F, Qt = Et;
function $t(e, t = {}) {
	e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0, Le(F, t), e.directive("tooltip", Ut), e.directive("close-popper", Xt), e.component("VTooltip", Ot), e.component("VDropdown", Et), e.component("VMenu", Dt));
}
var en = {
	version: "5.2.2",
	install: $t,
	options: F
}, tn = (e) => "/remote.php/" + e, nn = (e, t) => (t?.baseURL ?? sn()) + tn(e), rn = (e, t, n) => {
	let r = Object.assign({ ocsVersion: 2 }, n || {}).ocsVersion === 1 ? 1 : 2;
	return (n?.baseURL ?? sn()) + "/ocs/v" + r + ".php" + an(e, t, n);
}, an = (e, t, n) => {
	let r = Object.assign({ escape: !0 }, n || {});
	return e.charAt(0) !== "/" && (e = "/" + e), function(e, t) {
		return t ||= {}, e.replace(/{([^{}]*)}/g, function(e, n) {
			let i = t[n];
			return r.escape ? encodeURIComponent(typeof i == "string" || typeof i == "number" ? i.toString() : e) : typeof i == "string" || typeof i == "number" ? i.toString() : e;
		});
	}(e, t || {});
}, on = (e, t, n) => {
	let r = Object.assign({ noRewrite: !1 }, n || {}), i = n?.baseURL ?? cn();
	return window?.OC?.config?.modRewriteWorking === !0 && !r.noRewrite ? i + an(e, t, n) : i + "/index.php" + an(e, t, n);
}, sn = () => window.location.protocol + "//" + window.location.host + cn();
function cn() {
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
//#endregion
//#region node_modules/semver/internal/debug.js
var ln = /* @__PURE__ */ t(((e, t) => {
	t.exports = typeof process == "object" && {}.NODE_DEBUG && /\bsemver\b/i.test({}.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
})), un = /* @__PURE__ */ t(((e, t) => {
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
})), dn = /* @__PURE__ */ t(((e, t) => {
	var { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: r, MAX_LENGTH: i } = un(), a = ln();
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
})), fn = /* @__PURE__ */ t(((e, t) => {
	var n = Object.freeze({ loose: !0 }), r = Object.freeze({});
	t.exports = (e) => e ? typeof e == "object" ? e : n : r;
})), pn = /* @__PURE__ */ t(((e, t) => {
	var n = /^[0-9]+$/, r = (e, t) => {
		if (typeof e == "number" && typeof t == "number") return e === t ? 0 : e < t ? -1 : 1;
		let r = n.test(e), i = n.test(t);
		return r && i && (e = +e, t = +t), e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1;
	};
	t.exports = {
		compareIdentifiers: r,
		rcompareIdentifiers: (e, t) => r(t, e)
	};
})), mn = /* @__PURE__ */ t(((e, t) => {
	var n = ln(), { MAX_LENGTH: r, MAX_SAFE_INTEGER: i } = un(), { safeRe: a, t: o } = dn(), s = fn(), { compareIdentifiers: c } = pn(), l = (e, t) => {
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
})), hn = /* @__PURE__ */ t(((e, t) => {
	var n = mn();
	t.exports = (e, t) => new n(e, t).major;
})), gn = /* @__PURE__ */ t(((e, t) => {
	var n = mn();
	t.exports = (e, t, r = !1) => {
		if (e instanceof n) return e;
		try {
			return new n(e, t);
		} catch (e) {
			if (!r) return null;
			throw e;
		}
	};
})), _n = /* @__PURE__ */ t(((e, t) => {
	var n = gn();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r ? r.version : null;
	};
})), vn = /* @__PURE__ */ e(hn(), 1), yn = /* @__PURE__ */ e(_n(), 1), bn = class {
	bus;
	constructor(e) {
		typeof e.getVersion != "function" || !(0, yn.default)(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : (0, vn.default)(e.getVersion()) !== (0, vn.default)(this.getVersion()) && console.warn("Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()), this.bus = e;
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
}, xn = class {
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
}, Sn = null;
function Cn() {
	return Sn === null ? typeof window > "u" ? new Proxy({}, { get: () => () => console.error("Window not available, EventBus can not be established!") }) : (window.OC?._eventBus && window._nc_event_bus === void 0 && (console.warn("found old event bus instance at OC._eventBus. Update your version!"), window._nc_event_bus = window.OC._eventBus), Sn = window?._nc_event_bus === void 0 ? window._nc_event_bus = new xn() : new bn(window._nc_event_bus), Sn) : Sn;
}
function wn(e, t) {
	Cn().subscribe(e, t);
}
function Tn(e, t) {
	Cn().unsubscribe(e, t);
}
function En(e, ...t) {
	Cn().emit(e, ...t);
}
//#endregion
//#region node_modules/tabbable/dist/index.esm.js
var Dn = [
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
], On = /* #__PURE__ */ Dn.join(","), kn = typeof Element > "u", K = kn ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, An = !kn && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, jn = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : jn(e.parentNode));
}, Mn = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, Nn = function(e, t, n) {
	if (jn(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(On));
	return t && K.call(e, On) && r.unshift(e), r = r.filter(n), r;
}, Pn = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!jn(a, !1)) {
			if (a.tagName === "SLOT") {
				var o = a.assignedElements(), s = Pn(o.length ? o : a.children, !0, n);
				n.flatten ? r.push.apply(r, s) : r.push({
					scopeParent: a,
					candidates: s
				});
			} else {
				K.call(a, On) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
				var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !jn(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
				if (c && l) {
					var u = Pn(c === !0 ? a.children : c.children, !0, n);
					n.flatten ? r.push.apply(r, u) : r.push({
						scopeParent: a,
						candidates: u
					});
				} else i.unshift.apply(i, a.children);
			}
		}
	}
	return r;
}, Fn = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, q = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Mn(e)) && !Fn(e) ? 0 : e.tabIndex;
}, In = function(e, t) {
	var n = q(e);
	return n < 0 && t && !Fn(e) ? 0 : n;
}, Ln = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Rn = function(e) {
	return e.tagName === "INPUT";
}, zn = function(e) {
	return Rn(e) && e.type === "hidden";
}, Bn = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, Vn = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, Hn = function(e) {
	if (!e.name) return !0;
	var t = e.form || An(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = Vn(r, e.form);
	return !i || i === e;
}, Un = function(e) {
	return Rn(e) && e.type === "radio";
}, Wn = function(e) {
	return Un(e) && !Hn(e);
}, Gn = function(e) {
	var t = e && An(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = An(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, Kn = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, qn = function(e, t) {
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
	var a = K.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (K.call(a, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var o = e; e;) {
				var s = e.parentElement, c = An(e);
				if (s && !s.shadowRoot && r(s) === !0) return Kn(e);
				e = e.assignedSlot ? e.assignedSlot : !s && c !== e.ownerDocument ? c.host : s;
			}
			e = o;
		}
		if (Gn(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return Kn(e);
	return !1;
}, Jn = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return K.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, Yn = function(e, t) {
	return !(t.disabled || zn(t) || qn(t, e) || Bn(t) || Jn(t));
}, Xn = function(e, t) {
	return !(Wn(t) || q(t) < 0 || !Yn(e, t));
}, Zn = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, Qn = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = In(a, i), s = i ? Qn(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(Ln).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, $n = function(e, t) {
	return t ||= {}, Qn(t.getShadowRoot ? Pn([e], t.includeContainer, {
		filter: Xn.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: Zn
	}) : Nn(e, t.includeContainer, Xn.bind(null, t)));
}, er = function(e, t) {
	return t ||= {}, t.getShadowRoot ? Pn([e], t.includeContainer, {
		filter: Yn.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : Nn(e, t.includeContainer, Yn.bind(null, t));
}, J = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return K.call(e, On) !== !1 && Xn(t, e);
}, tr = /* #__PURE__ */ Dn.concat("iframe:not([inert]):not([inert] *)").join(","), nr = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return K.call(e, tr) !== !1 && Yn(t, e);
};
//#endregion
//#region node_modules/focus-trap/dist/focus-trap.esm.js
function rr(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function ir(e) {
	if (Array.isArray(e)) return rr(e);
}
function ar(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = mr(e)) || t) {
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
function or(e, t, n) {
	return (t = pr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function sr(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function cr() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function lr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ur(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? lr(Object(n), !0).forEach(function(t) {
			or(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function dr(e) {
	return ir(e) || sr(e) || mr(e) || cr();
}
function fr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t);
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function pr(e) {
	var t = fr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function mr(e, t) {
	if (e) {
		if (typeof e == "string") return rr(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rr(e, t) : void 0;
	}
}
var Y = {
	getActiveTrap: function(e) {
		return e?.length > 0 ? e[e.length - 1] : null;
	},
	activateTrap: function(e, t) {
		t !== Y.getActiveTrap(e) && Y.pauseTrap(e);
		var n = e.indexOf(t);
		n === -1 || e.splice(n, 1), e.push(t);
	},
	deactivateTrap: function(e, t) {
		var n = e.indexOf(t);
		n !== -1 && e.splice(n, 1), Y.unpauseTrap(e);
	},
	pauseTrap: function(e) {
		Y.getActiveTrap(e)?._setPausedState(!0);
	},
	unpauseTrap: function(e) {
		var t = Y.getActiveTrap(e);
		t && !t._isManuallyPaused() && t._setPausedState(!1);
	}
}, hr = function(e) {
	return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, gr = function(e) {
	return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, X = function(e) {
	return e?.key === "Tab" || e?.keyCode === 9;
}, _r = function(e) {
	return X(e) && !e.shiftKey;
}, vr = function(e) {
	return X(e) && e.shiftKey;
}, yr = function(e) {
	return setTimeout(e, 0);
}, br = function(e) {
	var t = [...arguments].slice(1);
	return typeof e == "function" ? e.apply(void 0, t) : e;
}, xr = function(e) {
	return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Sr = [], Cr = function(e, t) {
	var n = t?.document || document, r = t?.trapStack || Sr, i = ur({
		returnFocusOnDeactivate: !0,
		escapeDeactivates: !0,
		delayInitialFocus: !0,
		delayReturnFocus: !0,
		isolateSubtrees: !1,
		isKeyForward: _r,
		isKeyBackward: vr
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
		if (typeof c == "function" && (c = c.apply(void 0, dr(s))), c === !0 && (c = void 0), !c) {
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
		if (e === void 0 || e && !nr(e, i.tabbableOptions)) {
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
			var t = $n(e, i.tabbableOptions), n = er(e, i.tabbableOptions), r = t.length > 0 ? t[0] : void 0, a = t.length > 0 ? t[t.length - 1] : void 0, o = n.find(function(e) {
				return J(e);
			}), s = n.slice().reverse().find(function(e) {
				return J(e);
			});
			return {
				container: e,
				tabbableNodes: t,
				focusableNodes: n,
				posTabIndexesFound: !!t.find(function(e) {
					return q(e) > 0;
				}),
				firstTabbableNode: r,
				lastTabbableNode: a,
				firstDomTabbableNode: o,
				lastDomTabbableNode: s,
				nextTabbableNode: function(e) {
					var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, i = t.indexOf(e);
					return i < 0 ? r ? n.slice(n.indexOf(e) + 1).find(function(e) {
						return J(e);
					}) : n.slice(0, n.indexOf(e)).reverse().find(function(e) {
						return J(e);
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
			e.focus({ preventScroll: !!i.preventScroll }), a.mostRecentlyFocusedNode = e, hr(e) && e.select();
		}
	}, m = function(e) {
		var t = l("setReturnFocus", { params: [e] });
		return t || t !== !1 && e;
	}, h = function(e) {
		var t = e.target, n = e.event, r = e.isBackward, o = r !== void 0 && r;
		t ||= xr(n), f();
		var s = null;
		if (a.tabbableGroups.length > 0) {
			var u = c(t, n), d = u >= 0 ? a.containerGroups[u] : void 0;
			if (u < 0) s = o ? a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : a.tabbableGroups[0].firstTabbableNode;
			else if (o) {
				var p = a.tabbableGroups.findIndex(function(e) {
					var n = e.firstTabbableNode;
					return t === n;
				});
				if (p < 0 && (d.container === t || nr(t, i.tabbableOptions) && !J(t, i.tabbableOptions) && !d.nextTabbableNode(t, !1)) && (p = u), p >= 0) {
					var m = p === 0 ? a.tabbableGroups.length - 1 : p - 1, h = a.tabbableGroups[m];
					s = q(t) >= 0 ? h.lastTabbableNode : h.lastDomTabbableNode;
				} else X(n) || (s = d.nextTabbableNode(t, !1));
			} else {
				var g = a.tabbableGroups.findIndex(function(e) {
					var n = e.lastTabbableNode;
					return t === n;
				});
				if (g < 0 && (d.container === t || nr(t, i.tabbableOptions) && !J(t, i.tabbableOptions) && !d.nextTabbableNode(t)) && (g = u), g >= 0) {
					var _ = g === a.tabbableGroups.length - 1 ? 0 : g + 1, v = a.tabbableGroups[_];
					s = q(t) >= 0 ? v.firstTabbableNode : v.firstDomTabbableNode;
				} else X(n) || (s = d.nextTabbableNode(t));
			}
		} else s = l("fallbackFocus");
		return s;
	}, g = function(e) {
		if (!(c(xr(e), e) >= 0)) {
			if (br(i.clickOutsideDeactivates, e)) {
				o.deactivate({ returnFocus: i.returnFocusOnDeactivate });
				return;
			}
			br(i.allowOutsideClick, e) || e.preventDefault();
		}
	}, _ = function(e) {
		var t = xr(e), n = c(t, e) >= 0;
		if (n || t instanceof Document) n && (a.mostRecentlyFocusedNode = t);
		else {
			e.stopImmediatePropagation();
			var r, o = !0;
			if (a.mostRecentlyFocusedNode) {
				if (q(a.mostRecentlyFocusedNode) > 0) {
					var s = c(a.mostRecentlyFocusedNode), l = a.containerGroups[s].tabbableNodes;
					if (l.length > 0) {
						var u = l.findIndex(function(e) {
							return e === a.mostRecentlyFocusedNode;
						});
						u >= 0 && (i.isKeyForward(a.recentNavEvent) ? u + 1 < l.length && (r = l[u + 1], o = !1) : u - 1 >= 0 && (r = l[u - 1], o = !1));
					}
				} else a.containerGroups.some(function(e) {
					return e.tabbableNodes.some(function(e) {
						return q(e) > 0;
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
		n && (X(e) && e.preventDefault(), p(n));
	}, ee = function(e) {
		(i.isKeyForward(e) || i.isKeyBackward(e)) && v(e, i.isKeyBackward(e));
	}, te = function(e) {
		gr(e) && br(i.escapeDeactivates, e) !== !1 && (e.preventDefault(), o.deactivate());
	}, y = function(e) {
		c(xr(e), e) >= 0 || br(i.clickOutsideDeactivates, e) || br(i.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation());
	}, ne = function() {
		if (a.active) {
			Y.activateTrap(r, o);
			var e;
			return i.delayInitialFocus ? e = new Promise(function(e) {
				a.delayInitialFocusTimer = yr(function() {
					p(d()), e();
				});
			}) : p(d()), n.addEventListener("focusin", _, !0), n.addEventListener("mousedown", g, {
				capture: !0,
				passive: !1
			}), n.addEventListener("touchstart", g, {
				capture: !0,
				passive: !1
			}), n.addEventListener("click", y, {
				capture: !0,
				passive: !1
			}), n.addEventListener("keydown", ee, {
				capture: !0,
				passive: !1
			}), n.addEventListener("keydown", te), e;
		}
	}, re = function(e) {
		a.active && !a.paused && o._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
		var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = ar(e), i;
		try {
			for (r.s(); !(i = r.n()).done;) {
				var s = i.value;
				t.add(s);
				for (var c = typeof ShadowRoot < "u" && s.getRootNode() instanceof ShadowRoot, l = s; l;) {
					t.add(l);
					var u = l.parentElement, d = [];
					u ? d = u.children : !u && c && (d = l.getRootNode().children, u = l.getRootNode().host, c = typeof ShadowRoot < "u" && u.getRootNode() instanceof ShadowRoot);
					var f = ar(d), p;
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
	}, b = function() {
		if (a.active) return n.removeEventListener("focusin", _, !0), n.removeEventListener("mousedown", g, !0), n.removeEventListener("touchstart", g, !0), n.removeEventListener("click", y, !0), n.removeEventListener("keydown", ee, !0), n.removeEventListener("keydown", te), o;
	}, x = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(function(e) {
		var t = a.mostRecentlyFocusedNode;
		t && e.some(function(e) {
			return Array.from(e.removedNodes).some(function(e) {
				return e === t || typeof e.contains == "function" && e.contains(t);
			});
		}) && a.containers.some(function(e) {
			return e?.isConnected;
		}) && (f(), p(d()));
	}) : void 0, S = function() {
		x && (x.disconnect(), a.active && !a.paused && a.containers.map(function(e) {
			x.observe(e, {
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
			var t = s(e, "onActivate"), i = s(e, "onPostActivate"), c = s(e, "checkCanFocusTrap"), l = Y.getActiveTrap(r), d = !1;
			if (l && !l.paused) {
				var p;
				(p = l._setSubtreeIsolation) == null || p.call(l, !1), d = !0;
			}
			try {
				c || f(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = u(n), t?.({ trap: o });
				var m = function() {
					c && f();
					var e = function() {
						o._setSubtreeIsolation(!0), S(), i?.({ trap: o });
					}, t = ne();
					t ? t.then(e) : e();
				};
				if (c) return c(a.containers.concat()).then(m, m), this;
				m();
			} catch (e) {
				if (l === Y.getActiveTrap(r) && d) {
					var h;
					(h = l._setSubtreeIsolation) == null || h.call(l, !0);
				}
				throw e;
			}
			return this;
		},
		deactivate: function(e) {
			if (!a.active) return this;
			var t = ur({
				onDeactivate: i.onDeactivate,
				onPostDeactivate: i.onPostDeactivate,
				checkCanReturnFocus: i.checkCanReturnFocus
			}, e);
			clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || o._setSubtreeIsolation(!1), a.alreadySilent.clear(), b(), a.active = !1, a.paused = !1, S(), Y.deactivateTrap(r, o);
			var n = s(t, "onDeactivate"), c = s(t, "onPostDeactivate"), l = s(t, "checkCanReturnFocus"), u = s(t, "delayReturnFocus"), d = s(t, "returnFocus", "returnFocusOnDeactivate");
			n?.({ trap: o });
			var f = function() {
				d && p(m(a.nodeFocusedBeforeActivation)), c?.({ trap: o });
			}, h = function() {
				u && d ? yr(f) : f();
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
			}), i.isolateSubtrees && re(a.containers), a.active && (f(), a.paused || o._setSubtreeIsolation(!0)), S(), this;
		}
	}, Object.defineProperties(o, {
		_isManuallyPaused: { value: function() {
			return a.manuallyPaused;
		} },
		_setPausedState: { value: function(e, t) {
			if (a.paused === e) return this;
			if (a.paused = e, e) {
				var n = s(t, "onPause"), r = s(t, "onPostPause");
				n?.({ trap: o }), b(), o._setSubtreeIsolation(!1), S(), r?.({ trap: o });
			} else {
				var i = s(t, "onUnpause"), c = s(t, "onPostUnpause");
				i?.({ trap: o }), (function() {
					f();
					var e = function() {
						o._setSubtreeIsolation(!0), S(), c?.({ trap: o });
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
//#region node_modules/@nextcloud/vue/dist/chunks/focusTrap-HJQ4pqHV.mjs
function wr() {
	return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Tr() {
	let e = [];
	return {
		pause() {
			e = [...wr()];
			for (let t of e) t.pause();
		},
		unpause() {
			if (e.length === wr().length) for (let t of e) t.unpause();
			e = [];
		}
	};
}
//#endregion
//#region node_modules/@nextcloud/browser-storage/dist/ScopedStorage.js
var Er = class e {
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
}, Dr = class {
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
		return new Er(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
	}
};
//#endregion
//#region node_modules/@nextcloud/browser-storage/dist/index.js
function Or(e) {
	return new Dr(e);
}
//#endregion
//#region node_modules/@nextcloud/auth/dist/index.mjs
Nr();
function kr() {
	return globalThis._nc_auth_requestToken ? globalThis._nc_auth_requestToken : globalThis.document ? document.head.dataset.requesttoken ?? null : null;
}
function Ar(e) {
	if (!e || typeof e != "string") throw Error("Invalid CSRF token given", { cause: { token: e } });
	globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), En("csrf-token-update", {
		token: e,
		_internal: !0
	}));
}
async function jr() {
	let e = on("/csrftoken"), t = await fetch(e);
	if (!t.ok) throw Error("Could not fetch CSRF token from API", { cause: t });
	try {
		let { token: e } = await t.json();
		return Ar(e), e;
	} catch (e) {
		throw Error("Could not parse CSRF token from API response", { cause: e });
	}
}
function Mr(e) {
	let t = async ({ token: t }) => {
		try {
			e(t);
		} catch (e) {
			console.error("Error updating CSRF token observer", e);
		}
	};
	return wn("csrf-token-update", t), () => Tn("csrf-token-update", t);
}
function Nr() {
	wn("csrf-token-update", ({ token: e, _internal: t }) => {
		t || Ar(e);
	});
}
var Z = Or("public").persist().build(), Pr = class {
	_displayName;
	uid;
	isAdmin;
	constructor() {
		Z.getItem("guestUid") || Z.setItem("guestUid", Rr()), this._displayName = Z.getItem("guestNickname") || "", this.uid = Z.getItem("guestUid") || Rr(), this.isAdmin = !1, wn("user:info:changed", (e) => {
			this._displayName = e.displayName, Z.setItem("guestNickname", e.displayName || "");
		});
	}
	get displayName() {
		return this._displayName;
	}
	set displayName(e) {
		this._displayName = e, Z.setItem("guestNickname", e), En("user:info:changed", this);
	}
}, Fr;
function Ir() {
	return Fr ||= new Pr(), Fr;
}
function Lr(e) {
	if (!e || e.trim().length === 0) throw Error("Nickname cannot be empty");
	Ir().displayName = e;
}
function Rr() {
	return globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
		let t = Math.random() * 16 | 0;
		return (e === "x" ? t : t & 3 | 8).toString(16);
	});
}
var Q;
function zr(e, t) {
	return e ? e.getAttribute(t) : null;
}
function Br() {
	if (Q !== void 0) return Q;
	let e = document?.getElementsByTagName("head")[0];
	if (!e) return null;
	let t = zr(e, "data-user");
	return t === null ? (Q = null, Q) : (Q = {
		uid: t,
		displayName: zr(e, "data-user-displayname"),
		isAdmin: !!window._oc_isadmin
	}, Q);
}
//#endregion
//#region node_modules/@nextcloud/logger/dist/index.mjs
var $ = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))($ || {}), Vr = class {
	context;
	constructor(e) {
		this.context = e || {};
	}
	formatMessage(e, t, n) {
		let r = "[" + $[t].toUpperCase() + "] ";
		return n && n.app && (r += n.app + ": "), typeof e == "string" ? r + e : (r += `Unexpected ${e.name}`, e.message && (r += ` "${e.message}"`), t === $.Debug && e.stack && (r += `

Stack trace:
${e.stack}`), r);
	}
	log(e, t, n) {
		if (!(typeof this.context?.level == "number" && e < this.context?.level)) switch (typeof t == "object" && n?.error === void 0 && (n.error = t), e) {
			case $.Debug:
				console.debug(this.formatMessage(t, $.Debug, n), n);
				break;
			case $.Info:
				console.info(this.formatMessage(t, $.Info, n), n);
				break;
			case $.Warn:
				console.warn(this.formatMessage(t, $.Warn, n), n);
				break;
			case $.Error:
				console.error(this.formatMessage(t, $.Error, n), n);
				break;
			case $.Fatal:
			default: console.error(this.formatMessage(t, $.Fatal, n), n);
		}
	}
	debug(e, t) {
		this.log($.Debug, e, Object.assign({}, this.context, t));
	}
	info(e, t) {
		this.log($.Info, e, Object.assign({}, this.context, t));
	}
	warn(e, t) {
		this.log($.Warn, e, Object.assign({}, this.context, t));
	}
	error(e, t) {
		this.log($.Error, e, Object.assign({}, this.context, t));
	}
	fatal(e, t) {
		this.log($.Fatal, e, Object.assign({}, this.context, t));
	}
};
function Hr(e) {
	return new Vr(e);
}
var Ur = class {
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
		let e = Br();
		return e !== null && (this.context.uid = e.uid), this;
	}
	detectLogLevel() {
		let e = this, t = () => {
			document.readyState === "complete" || document.readyState === "interactive" ? (e.context.level = window._oc_config?.loglevel ?? $.Warn, window._oc_debug && (e.context.level = $.Debug), document.removeEventListener("readystatechange", t)) : document.addEventListener("readystatechange", t);
		};
		return t(), this;
	}
	build() {
		return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
	}
};
function Wr() {
	return new Ur(Hr);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/logger-D3RVzcfQ.mjs
var Gr = Wr().detectUser().setApp("@nextcloud/vue").build(), Kr = f(), qr = o({
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
}), Jr = {
	"material-design-icon": "_material-design-icon_bkeq-",
	ncPopover: "_ncPopover_zfWgY"
}, Yr = "nc-popover-9";
Zt.themes[Yr] = structuredClone(Zt.themes.dropdown);
var Xr = {
	name: "NcPopover",
	components: {
		Dropdown: Qt,
		NcPopoverTriggerProvider: qr
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
		return { theme: Yr };
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
			return this.placement === "start" ? Kr ? "right" : "left" : this.placement === "end" ? Kr ? "left" : "right" : this.placement;
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
			window.OC?.debug && (this.getPopoverTriggerContainerElement().querySelector("[aria-expanded]") || ne("It looks like you are using a custom button as a <NcPopover> or other popover #trigger. If you are not using <NcButton> as a trigger, you need to bind attrs from the #trigger slot props to your custom button. See <NcPopover> docs for an example."));
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
			e.tabIndex = -1, e && (this.$focusTrap = Cr(e, {
				escapeDeactivates: !1,
				allowOutsideClick: !0,
				setReturnFocus: this.setReturnFocus,
				trapStack: wr(),
				fallBackFocus: e
			}), this.$focusTrap.activate());
		},
		clearFocusTrap(e = {}) {
			try {
				this.$focusTrap?.deactivate(e), this.$focusTrap = null;
			} catch (e) {
				Gr.warn("[NcPopover] Failed to clear focus trap", { error: e });
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
function Zr(e, t, n, r, i, a) {
	let o = v("NcPopoverTriggerProvider"), s = v("Dropdown");
	return m(), C(s, {
		ref: "popover",
		shown: i.internalShown,
		"onUpdate:shown": [t[0] ||= (e) => i.internalShown = e, t[1] ||= (e) => i.internalShown = e],
		arrowPadding: 10,
		autoHide: !n.noCloseOnClickOutside && n.closeOnClickOutside,
		boundary: n.boundary || void 0,
		container: n.container,
		delay: n.delay,
		distance: 10,
		handleResize: "",
		noAutoFocus: !0,
		placement: a.internalPlacement,
		popperClass: [e.$style.ncPopover, n.popoverBaseClass],
		popperTriggers: a.popperTriggers,
		popperHideTriggers: a.popperHideTriggers,
		popperShowTriggers: a.popperShowTriggers,
		theme: r.theme,
		triggers: a.internalTriggers,
		hideTriggers: a.hideTriggers,
		showTriggers: a.showTriggers,
		onApplyShow: a.afterShow,
		onApplyHide: a.afterHide
	}, {
		popper: S((t) => [d(e.$slots, "default", le(_(t)))]),
		default: S(() => [ue(o, {
			shown: i.internalShown,
			popupRole: n.popupRole
		}, {
			default: S((t) => [d(e.$slots, "trigger", le(_(t)))]),
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
var Qr = /* @__PURE__ */ s(Xr, [["render", Zr], ["__cssModules", { $style: Jr }]]);
//#endregion
export { rn as _, jr as a, en as b, Mr as c, Tr as d, wr as f, Tn as g, wn as h, Wr as i, Lr as l, En as m, Kr as n, Br as o, Cr as p, Gr as r, kr as s, Qr as t, Or as u, nn as v, on as y };
