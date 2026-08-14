import { n as e, r as t, t as n } from "./rolldown-runtime-B0aSnxlc.chunk.mjs";
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function r(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var i = {}, a = [], o = () => {}, s = () => !1, c = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), l = (e) => e.startsWith("onUpdate:"), u = Object.assign, d = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, f = Object.prototype.hasOwnProperty, p = (e, t) => f.call(e, t), m = Array.isArray, h = (e) => T(e) === "[object Map]", g = (e) => T(e) === "[object Set]", _ = (e) => T(e) === "[object Date]", v = (e) => T(e) === "[object RegExp]", y = (e) => typeof e == "function", b = (e) => typeof e == "string", x = (e) => typeof e == "symbol", S = (e) => typeof e == "object" && !!e, C = (e) => (S(e) || y(e)) && y(e.then) && y(e.catch), w = Object.prototype.toString, T = (e) => w.call(e), E = (e) => T(e).slice(8, -1), D = (e) => T(e) === "[object Object]", O = (e) => b(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = /* @__PURE__ */ r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), ne = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, re = /-\w/g, k = ne((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, A = ne((e) => e.replace(ie, "-$1").toLowerCase()), ae = ne((e) => e.charAt(0).toUpperCase() + e.slice(1)), j = ne((e) => e ? `on${ae(e)}` : ""), M = (e, t) => !Object.is(e, t), oe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, se = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ce = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, le = (e) => {
	let t = b(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, ue, de = () => ue ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function fe(e, t) {
	return e + JSON.stringify(t, (e, t) => typeof t == "function" ? t.toString() : t);
}
var pe = /* @__PURE__ */ r("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function N(e) {
	if (m(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = b(r) ? F(r) : N(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (b(e) || S(e)) return e;
}
var me = /;(?![^(]*\))/g, P = /:([^]+)/, he = /\/\*[^]*?\*\//g;
function F(e) {
	let t = {};
	return e.replace(he, "").split(me).forEach((e) => {
		if (e) {
			let n = e.split(P);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ge(e) {
	let t = "";
	if (b(e)) t = e;
	else if (m(e)) for (let n = 0; n < e.length; n++) {
		let r = ge(e[n]);
		r && (t += r + " ");
	}
	else if (S(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function _e(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !b(t) && (e.class = ge(t)), n && (e.style = N(n)), e;
}
var ve = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ye = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", be = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", xe = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Se = /* @__PURE__ */ r(ve), Ce = /* @__PURE__ */ r(ye), we = /* @__PURE__ */ r(be), Te = /* @__PURE__ */ r(xe), Ee = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", De = /* @__PURE__ */ r(Ee);
Ee + "";
function Oe(e) {
	return !!e || e === "";
}
function ke(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Ae(e[r], t[r]);
	return n;
}
function Ae(e, t) {
	if (e === t) return !0;
	let n = _(e), r = _(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = x(e), r = x(t), n || r) return e === t;
	if (n = m(e), r = m(t), n || r) return n && r ? ke(e, t) : !1;
	if (n = S(e), r = S(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Ae(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function je(e, t) {
	return e.findIndex((e) => Ae(e, t));
}
var Me = (e) => !!(e && e.__v_isRef === !0), Ne = (e) => b(e) ? e : e == null ? "" : m(e) || S(e) && (e.toString === w || !y(e.toString)) ? Me(e) ? Ne(e.value) : JSON.stringify(e, Pe, 2) : String(e), Pe = (e, t) => Me(t) ? Pe(e, t.value) : h(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Fe(t, r) + " =>"] = n, e), {}) } : g(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Fe(e)) } : x(t) ? Fe(t) : S(t) && !m(t) && !D(t) ? String(t) : t, Fe = (e, t = "") => x(e) ? `Symbol(${e.description ?? t})` : e;
function Ie(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var I, Le = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && I && (I.active ? (this.parent = I, this.index = (I.scopes || (I.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = I;
			try {
				return I = this, e();
			} finally {
				I = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = I, I = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (I === this) I = this.prevScope;
			else {
				let e = I;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Re(e) {
	return new Le(e);
}
function ze() {
	return I;
}
function Be(e, t = !1) {
	I && I.cleanups.push(e);
}
var L, Ve = /* @__PURE__ */ new WeakSet(), He = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, I && (I.active ? I.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ve.has(this) && (Ve.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ke(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, ot(this), Ye(this);
		let e = L, t = R;
		L = this, R = !0;
		try {
			return this.fn();
		} finally {
			Xe(this), L = e, R = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) $e(e);
			this.deps = this.depsTail = void 0, ot(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ve.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ze(this) && this.run();
	}
	get dirty() {
		return Ze(this);
	}
}, Ue = 0, We, Ge;
function Ke(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ge, Ge = e;
		return;
	}
	e.next = We, We = e;
}
function qe() {
	Ue++;
}
function Je() {
	if (--Ue > 0) return;
	if (Ge) {
		let e = Ge;
		for (Ge = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; We;) {
		let t = We;
		for (We = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Ye(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xe(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), $e(r), et(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ze(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Qe(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Qe(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === st) || (e.globalVersion = st, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ze(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = L, r = R;
	L = e, R = !0;
	try {
		Ye(e);
		let n = e.fn(e._value);
		(t.version === 0 || M(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		L = n, R = r, Xe(e), e.flags &= -3;
	}
}
function $e(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) $e(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function et(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function tt(e, t) {
	e.effect instanceof He && (e = e.effect.fn);
	let n = new He(e);
	t && u(n, t);
	try {
		n.run();
	} catch (e) {
		throw n.stop(), e;
	}
	let r = n.run.bind(n);
	return r.effect = n, r;
}
function nt(e) {
	e.effect.stop();
}
var R = !0, rt = [];
function it() {
	rt.push(R), R = !1;
}
function at() {
	let e = rt.pop();
	R = e === void 0 || e;
}
function ot(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = L;
		L = void 0;
		try {
			t();
		} finally {
			L = e;
		}
	}
}
var st = 0, ct = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, lt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!L || !R || L === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== L) t = this.activeLink = new ct(L, this), L.deps ? (t.prevDep = L.depsTail, L.depsTail.nextDep = t, L.depsTail = t) : L.deps = L.depsTail = t, ut(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = L.depsTail, t.nextDep = void 0, L.depsTail.nextDep = t, L.depsTail = t, L.deps === t && (L.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, st++, this.notify(e);
	}
	notify(e) {
		qe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Je();
		}
	}
};
function ut(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) ut(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var dt = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ Symbol(""), pt = /* @__PURE__ */ Symbol(""), mt = /* @__PURE__ */ Symbol("");
function z(e, t, n) {
	if (R && L) {
		let t = dt.get(e);
		t || dt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new lt()), r.map = t, r.key = n), r.track();
	}
}
function ht(e, t, n, r, i, a) {
	let o = dt.get(e);
	if (!o) {
		st++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (qe(), t === "clear") o.forEach(s);
	else {
		let i = m(e), a = i && O(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === mt || !x(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(mt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ft)), h(e) && s(o.get(pt)));
				break;
			case "delete":
				i || (s(o.get(ft)), h(e) && s(o.get(pt)));
				break;
			case "set": h(e) && s(o.get(ft));
		}
	}
	Je();
}
function gt(e, t) {
	let n = dt.get(e);
	return n && n.get(t);
}
function _t(e) {
	let t = /* @__PURE__ */ B(e);
	return t === e ? t : (z(t, "iterate", mt), /* @__PURE__ */ on(e) ? t : t.map(ln));
}
function vt(e) {
	return z(e = /* @__PURE__ */ B(e), "iterate", mt), e;
}
function yt(e, t) {
	return /* @__PURE__ */ an(e) ? un(/* @__PURE__ */ rn(e) ? ln(t) : t) : ln(t);
}
var bt = {
	__proto__: null,
	[Symbol.iterator]() {
		return xt(this, Symbol.iterator, (e) => yt(this, e));
	},
	concat(...e) {
		return _t(this).concat(...e.map((e) => m(e) ? _t(e) : e));
	},
	entries() {
		return xt(this, "entries", (e) => (e[1] = yt(this, e[1]), e));
	},
	every(e, t) {
		return Ct(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return Ct(this, "filter", e, t, (e) => e.map((e) => yt(this, e)), arguments);
	},
	find(e, t) {
		return Ct(this, "find", e, t, (e) => yt(this, e), arguments);
	},
	findIndex(e, t) {
		return Ct(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return Ct(this, "findLast", e, t, (e) => yt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return Ct(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return Ct(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return Tt(this, "includes", e);
	},
	indexOf(...e) {
		return Tt(this, "indexOf", e);
	},
	join(e) {
		return _t(this).join(e);
	},
	lastIndexOf(...e) {
		return Tt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return Ct(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return Et(this, "pop");
	},
	push(...e) {
		return Et(this, "push", e);
	},
	reduce(e, ...t) {
		return wt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return wt(this, "reduceRight", e, t);
	},
	shift() {
		return Et(this, "shift");
	},
	some(e, t) {
		return Ct(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return Et(this, "splice", e);
	},
	toReversed() {
		return _t(this).toReversed();
	},
	toSorted(e) {
		return _t(this).toSorted(e);
	},
	toSpliced(...e) {
		return _t(this).toSpliced(...e);
	},
	unshift(...e) {
		return Et(this, "unshift", e);
	},
	values() {
		return xt(this, "values", (e) => yt(this, e));
	}
};
function xt(e, t, n) {
	let r = vt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ on(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var St = Array.prototype;
function Ct(e, t, n, r, i, a) {
	let o = vt(e), s = o !== e && !/* @__PURE__ */ on(e), c = o[t];
	if (c !== St[t]) {
		let t = c.apply(e, a);
		return s ? ln(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, yt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function wt(e, t, n, r) {
	let i = vt(e), a = i !== e && !/* @__PURE__ */ on(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = yt(e, t)), n.call(this, t, yt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? yt(e, c) : c;
}
function Tt(e, t, n) {
	let r = /* @__PURE__ */ B(e);
	z(r, "iterate", mt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ sn(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), r[t](...n)) : i;
}
function Et(e, t, n = []) {
	it(), qe();
	let r = (/* @__PURE__ */ B(e))[t].apply(e, n);
	return Je(), at(), r;
}
var Dt = /* @__PURE__ */ r("__proto__,__v_isRef,__isVue"), Ot = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(x));
function kt(e) {
	x(e) || (e = String(e));
	let t = /* @__PURE__ */ B(this);
	return z(t, "has", e), t.hasOwnProperty(e);
}
var At = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Xt : Yt : i ? Jt : qt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = m(e);
		if (!r) {
			let e;
			if (a && (e = bt[t])) return e;
			if (t === "hasOwnProperty") return kt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ V(e) ? e : n);
		if ((x(t) ? Ot.has(t) : Dt(t)) || (r || z(e, "get", t), i)) return o;
		if (/* @__PURE__ */ V(o)) {
			let e = a && O(t) ? o : o.value;
			return r && S(e) ? /* @__PURE__ */ en(e) : e;
		}
		return S(o) ? r ? /* @__PURE__ */ en(o) : /* @__PURE__ */ Qt(o) : o;
	}
}, jt = class extends At {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = m(e) && O(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ an(i);
			if (!/* @__PURE__ */ on(n) && !/* @__PURE__ */ an(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !a && /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : p(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ V(e) ? e : r);
		return e === /* @__PURE__ */ B(r) && s && (o ? M(n, i) && ht(e, "set", t, n, i) : ht(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = p(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ht(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!x(t) || !Ot.has(t)) && z(e, "has", t), n;
	}
	ownKeys(e) {
		return z(e, "iterate", m(e) ? "length" : ft), Reflect.ownKeys(e);
	}
}, Mt = class extends At {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Nt = /* @__PURE__ */ new jt(), Pt = /* @__PURE__ */ new Mt(), Ft = /* @__PURE__ */ new jt(!0), It = /* @__PURE__ */ new Mt(!0), Lt = (e) => e, Rt = (e) => Reflect.getPrototypeOf(e);
function zt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ B(i), o = h(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), d = n ? Lt : t ? un : ln;
		return !t && z(a, "iterate", c ? pt : ft), u(Object.create(l), { next() {
			let { value: e, done: t } = l.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Bt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Vt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ B(r), a = /* @__PURE__ */ B(n);
			e || (M(n, a) && z(i, "get", n), z(i, "get", a));
			let { has: o } = Rt(i), s = t ? Lt : e ? un : ln;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && z(/* @__PURE__ */ B(t), "iterate", ft), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ B(n), i = /* @__PURE__ */ B(t);
			return e || (M(t, i) && z(r, "has", t), z(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ B(a), s = t ? Lt : e ? un : ln;
			return !e && z(o, "iterate", ft), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return u(n, e ? {
		add: Bt("add"),
		set: Bt("set"),
		delete: Bt("delete"),
		clear: Bt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ B(this), r = Rt(n), i = /* @__PURE__ */ B(e), a = !t && !/* @__PURE__ */ on(e) && !/* @__PURE__ */ an(e) ? i : e;
			return r.has.call(n, a) || M(e, a) && r.has.call(n, e) || M(i, a) && r.has.call(n, i) || (n.add(a), ht(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ on(n) && !/* @__PURE__ */ an(n) && (n = /* @__PURE__ */ B(n));
			let r = /* @__PURE__ */ B(this), { has: i, get: a } = Rt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ B(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? M(n, s) && ht(r, "set", e, n, s) : ht(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ B(this), { has: n, get: r } = Rt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ B(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ht(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ B(this), t = e.size !== 0, n = e.clear();
			return t && ht(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = zt(r, e, t);
	}), n;
}
function Ht(e, t) {
	let n = Vt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(p(n, r) && r in t ? n : t, r, i);
}
var Ut = { get: /* @__PURE__ */ Ht(!1, !1) }, Wt = { get: /* @__PURE__ */ Ht(!1, !0) }, Gt = { get: /* @__PURE__ */ Ht(!0, !1) }, Kt = { get: /* @__PURE__ */ Ht(!0, !0) }, qt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap();
function Zt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return /* @__PURE__ */ an(e) ? e : nn(e, !1, Nt, Ut, qt);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return nn(e, !1, Ft, Wt, Jt);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return nn(e, !0, Pt, Gt, Yt);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return nn(e, !0, It, Kt, Xt);
}
function nn(e, t, n, r, i) {
	if (!S(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Zt(E(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
	return /* @__PURE__ */ an(e) ? /* @__PURE__ */ rn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ B(t) : e;
}
function cn(e) {
	return !p(e, "__v_skip") && Object.isExtensible(e) && se(e, "__v_skip", !0), e;
}
var ln = (e) => S(e) ? /* @__PURE__ */ Qt(e) : e, un = (e) => S(e) ? /* @__PURE__ */ en(e) : e;
// @__NO_SIDE_EFFECTS__
function V(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
	return pn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
	return pn(e, !0);
}
function pn(e, t) {
	return /* @__PURE__ */ V(e) ? e : new mn(e, t);
}
var mn = class {
	constructor(e, t) {
		this.dep = new lt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ B(e), this._value = t ? e : ln(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ on(e) || /* @__PURE__ */ an(e);
		e = n ? e : /* @__PURE__ */ B(e), M(e, t) && (this._rawValue = e, this._value = n ? e : ln(e), this.dep.trigger());
	}
};
function hn(e) {
	e.dep && e.dep.trigger();
}
function gn(e) {
	return /* @__PURE__ */ V(e) ? e.value : e;
}
function _n(e) {
	return y(e) ? e() : gn(e);
}
var vn = {
	get: (e, t, n) => t === "__v_raw" ? e : gn(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function yn(e) {
	return /* @__PURE__ */ rn(e) ? e : new Proxy(e, vn);
}
var bn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new lt(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function xn(e) {
	return new bn(e);
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
	let t = m(e) ? Array(e.length) : {};
	for (let n in e) t[n] = En(e, n);
	return t;
}
var Cn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = x(t) ? t : String(t), this._raw = /* @__PURE__ */ B(e);
		let r = !0, i = e;
		if (!m(e) || x(this._key) || !O(this._key)) do
			r = !/* @__PURE__ */ sn(i) || /* @__PURE__ */ on(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = gn(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ V(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ V(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return gt(this._raw, this._key);
	}
}, wn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function Tn(e, t, n) {
	return /* @__PURE__ */ V(e) ? e : y(e) ? new wn(e) : S(e) && arguments.length > 1 ? En(e, t, n) : /* @__PURE__ */ dn(e);
}
function En(e, t, n) {
	return new Cn(e, t, n);
}
var Dn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new lt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = st - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && L !== this) return Ke(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Qe(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function On(e, t, n = !1) {
	let r, i;
	return y(e) ? r = e : (r = e.get, i = e.set), new Dn(r, i, n);
}
var kn = {
	GET: "get",
	HAS: "has",
	ITERATE: "iterate"
}, An = {
	SET: "set",
	ADD: "add",
	DELETE: "delete",
	CLEAR: "clear"
}, jn = {}, Mn = /* @__PURE__ */ new WeakMap(), Nn = void 0;
function Pn() {
	return Nn;
}
function Fn(e, t = !1, n = Nn) {
	if (n) {
		let t = Mn.get(n);
		t || Mn.set(n, t = []), t.push(e);
	}
}
function In(e, t, n = i) {
	let { immediate: r, deep: a, once: s, scheduler: c, augmentJob: l, call: u } = n, f = (e) => a ? e : /* @__PURE__ */ on(e) || a === !1 || a === 0 ? Ln(e, 1) : Ln(e), p, h, g, _, v = !1, b = !1;
	if (/* @__PURE__ */ V(e) ? (h = () => e.value, v = /* @__PURE__ */ on(e)) : /* @__PURE__ */ rn(e) ? (h = () => f(e), v = !0) : m(e) ? (b = !0, v = e.some((e) => /* @__PURE__ */ rn(e) || /* @__PURE__ */ on(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ V(e)) return e.value;
		if (/* @__PURE__ */ rn(e)) return f(e);
		if (y(e)) return u ? u(e, 2) : e();
	})) : h = y(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (g) {
			it();
			try {
				g();
			} finally {
				at();
			}
		}
		let t = Nn;
		Nn = p;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			Nn = t;
		}
	} : o, t && a) {
		let e = h, t = a === !0 ? Infinity : a;
		h = () => Ln(e(), t);
	}
	let x = ze(), S = () => {
		p.stop(), x && x.active && d(x.effects, p);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(jn) : jn, w = (e) => {
		if (!(!(p.flags & 1) || !p.dirty && !e)) {
			if (t) {
				let n = p.run();
				if (e || a || v || (b ? n.some((e, t) => M(e, C[t])) : M(n, C))) {
					g && g();
					let e = Nn;
					Nn = p;
					try {
						let e = [
							n,
							C === jn ? void 0 : b && C[0] === jn ? [] : C,
							_
						];
						C = n, u ? u(t, 3, e) : t(...e);
					} finally {
						Nn = e;
					}
				}
			} else p.run();
		}
	};
	return l && l(w), p = new He(h), p.scheduler = c ? () => c(w, !1) : w, _ = (e) => Fn(e, !1, p), g = p.onStop = () => {
		let e = Mn.get(p);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			Mn.delete(p);
		}
	}, t ? r ? w(!0) : C = p.run() : c ? c(w.bind(null, !0), !0) : p.run(), S.pause = p.pause.bind(p), S.resume = p.resume.bind(p), S.stop = S, S;
}
function Ln(e, t = Infinity, n) {
	if (t <= 0 || !S(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ V(e)) Ln(e.value, t, n);
	else if (m(e)) for (let r = 0; r < e.length; r++) Ln(e[r], t, n);
	else if (g(e) || h(e)) e.forEach((e) => {
		Ln(e, t, n);
	});
	else if (D(e)) {
		for (let r in e) Ln(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Ln(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var Rn = [];
function zn(e) {
	Rn.push(e);
}
function Bn() {
	Rn.pop();
}
function Vn(e, t) {}
var Hn = {
	SETUP_FUNCTION: 0,
	0: "SETUP_FUNCTION",
	RENDER_FUNCTION: 1,
	1: "RENDER_FUNCTION",
	NATIVE_EVENT_HANDLER: 5,
	5: "NATIVE_EVENT_HANDLER",
	COMPONENT_EVENT_HANDLER: 6,
	6: "COMPONENT_EVENT_HANDLER",
	VNODE_HOOK: 7,
	7: "VNODE_HOOK",
	DIRECTIVE_HOOK: 8,
	8: "DIRECTIVE_HOOK",
	TRANSITION_HOOK: 9,
	9: "TRANSITION_HOOK",
	APP_ERROR_HANDLER: 10,
	10: "APP_ERROR_HANDLER",
	APP_WARN_HANDLER: 11,
	11: "APP_WARN_HANDLER",
	FUNCTION_REF: 12,
	12: "FUNCTION_REF",
	ASYNC_COMPONENT_LOADER: 13,
	13: "ASYNC_COMPONENT_LOADER",
	SCHEDULER: 14,
	14: "SCHEDULER",
	COMPONENT_UPDATE: 15,
	15: "COMPONENT_UPDATE",
	APP_UNMOUNT_CLEANUP: 16,
	16: "APP_UNMOUNT_CLEANUP"
}, Un = {
	sp: "serverPrefetch hook",
	bc: "beforeCreate hook",
	c: "created hook",
	bm: "beforeMount hook",
	m: "mounted hook",
	bu: "beforeUpdate hook",
	u: "updated",
	bum: "beforeUnmount hook",
	um: "unmounted hook",
	a: "activated hook",
	da: "deactivated hook",
	ec: "errorCaptured hook",
	rtc: "renderTracked hook",
	rtg: "renderTriggered hook",
	0: "setup function",
	1: "render function",
	2: "watcher getter",
	3: "watcher callback",
	4: "watcher cleanup function",
	5: "native event handler",
	6: "component event handler",
	7: "vnode hook",
	8: "directive hook",
	9: "transition hook",
	10: "app errorHandler",
	11: "app warnHandler",
	12: "ref function",
	13: "async component loader",
	14: "scheduler flush",
	15: "component update",
	16: "app unmount cleanup function"
};
function Wn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Kn(e, t, n);
	}
}
function Gn(e, t, n, r) {
	if (y(e)) {
		let i = Wn(e, t, n, r);
		return i && C(i) && i.catch((e) => {
			Kn(e, t, n);
		}), i;
	}
	if (m(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Gn(e[a], t, n, r));
		return i;
	}
}
function Kn(e, t, n, r = !0) {
	let a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || i;
	if (t) {
		let r = t.parent, i = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			r = r.parent;
		}
		if (o) {
			it(), Wn(o, null, 10, [
				e,
				i,
				a
			]), at();
			return;
		}
	}
	qn(e, n, a, r, s);
}
function qn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var Jn = [], Yn = -1, Xn = [], Zn = null, Qn = 0, $n = /* @__PURE__ */ Promise.resolve(), er = null;
function tr(e) {
	let t = er || $n;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function nr(e) {
	let t = Yn + 1, n = Jn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = Jn[r], a = cr(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function rr(e) {
	if (!(e.flags & 1)) {
		let t = cr(e), n = Jn[Jn.length - 1];
		!n || !(e.flags & 2) && t >= cr(n) ? Jn.push(e) : Jn.splice(nr(t), 0, e), e.flags |= 1, ir();
	}
}
function ir() {
	er ||= $n.then(lr);
}
function ar(e) {
	if (!m(e)) Zn && e.id === -1 ? Zn.splice(Qn + 1, 0, e) : e.flags & 1 || (Xn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Xn.push(e[t]);
	ir();
}
function or(e, t, n = Yn + 1) {
	for (; n < Jn.length; n++) {
		let t = Jn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			Jn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function sr(e) {
	if (Xn.length) {
		let e = [...new Set(Xn)].sort((e, t) => cr(e) - cr(t));
		if (Xn.length = 0, Zn) {
			for (let t = 0; t < e.length; t++) Zn.push(e[t]);
			return;
		}
		for (Zn = e, Qn = 0; Qn < Zn.length; Qn++) {
			let e = Zn[Qn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Zn = null, Qn = 0;
	}
}
var cr = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function lr(e) {
	try {
		for (Yn = 0; Yn < Jn.length; Yn++) {
			let e = Jn[Yn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Wn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Yn < Jn.length; Yn++) {
			let e = Jn[Yn];
			e && (e.flags &= -2);
		}
		Yn = -1, Jn.length = 0, sr(e), er = null, (Jn.length || Xn.length) && lr(e);
	}
}
var ur, dr = [];
function fr(e, t) {
	ur = e, ur ? (ur.enabled = !0, dr.forEach(({ event: e, args: t }) => ur.emit(e, ...t)), dr = []) : typeof window < "u" && window.HTMLElement && !(window.navigator?.userAgent)?.includes("jsdom") ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		fr(e, t);
	}), setTimeout(() => {
		ur || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, dr = []);
	}, 3e3)) : dr = [];
}
var pr = null, mr = null;
function hr(e) {
	let t = pr;
	return pr = e, mr = e && e.type.__scopeId || null, t;
}
function gr(e) {
	mr = e;
}
function _r() {
	mr = null;
}
var vr = (e) => yr;
function yr(e, t = pr, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && bs(-1);
		let i = hr(t), a = hs.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = hs.length; e > a; e--) vs();
			hr(i), r._d && bs(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function br(e, t) {
	if (pr === null) return e;
	let n = cc(pr), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = i] = t[e];
		a && (y(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && Ln(o), r.push({
			dir: a,
			instance: n,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function xr(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (it(), Gn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), at());
	}
}
function Sr(e, t) {
	if (Ws) {
		let n = Ws.provides, r = Ws.parent && Ws.parent.provides;
		r === n && (n = Ws.provides = Object.create(r)), n[e] = t;
	}
}
function Cr(e, t, n = !1) {
	let r = Gs();
	if (r || co) {
		let i = co ? co._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && y(t) ? t.call(r && r.proxy) : t;
	}
}
function wr() {
	return !!(Gs() || co);
}
var Tr = /* @__PURE__ */ Symbol.for("v-scx"), Er = () => Cr(Tr);
function Dr(e, t) {
	return jr(e, null, t);
}
function Or(e, t) {
	return jr(e, null, { flush: "post" });
}
function kr(e, t) {
	return jr(e, null, { flush: "sync" });
}
function Ar(e, t, n) {
	return jr(e, t, n);
}
function jr(e, t, n = i) {
	let { immediate: r, deep: a, flush: s, once: c } = n, l = u({}, n), d = t && r || !t && s !== "post", f;
	if (Zs) {
		if (s === "sync") {
			let e = Er();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = o, e.resume = o, e.pause = o, e;
		}
	}
	let p = Ws;
	l.call = (e, t, n) => Gn(e, p, t, n);
	let m = !1;
	s === "post" ? l.scheduler = (e) => {
		H(e, p && p.suspense);
	} : s !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : rr(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = In(e, t, l);
	return Zs && (f ? f.push(h) : d && h()), h;
}
function Mr(e, t, n) {
	let r = this.proxy, i = b(e) ? e.includes(".") ? Nr(r, e) : () => r[e] : e.bind(r, r), a;
	y(t) ? a = t : (a = t.handler, n = t);
	let o = Js(this), s = jr(i, a.bind(r), n);
	return o(), s;
}
function Nr(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Pr = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, Lr = (e) => e && (e.disabled || e.disabled === ""), Rr = (e) => e && (e.defer || e.defer === ""), zr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Br = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Vr = (e, t) => {
	let n = e && e.to;
	return b(n) ? t ? t(n) : null : n;
}, Hr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = Lr(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = Lr(e.props), r = e.target = Vr(e.props, m), a = qr(r, e, h, p);
			r && (o !== "svg" && zr(r) ? o = "svg" : o !== "mathml" && Br(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), Kr(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (Pr.get(e) === t) {
					if (Pr.delete(e), Lr(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), Kr(e, !0);
					}
					x(e);
				}
			};
			Pr.set(e, t), H(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), Rr(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), Kr(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Pr.get(e);
			if (u) {
				u.flags |= 8, Pr.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = Lr(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || zr(p) ? o = "svg" : (o === "mathml" || Br(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), Jo(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ur(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = Vr(t.props, m);
				e && (t.target = e, Ur(t, e, null, l, 0));
			} else g && Ur(t, p, h, l, 1);
			Kr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = Lr(f), m = a || !p, h = Pr.get(e);
		if (h && (h.flags |= 8, Pr.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: Ur,
	hydrate: Wr
};
function Ur(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Pr.has(e) && (!d || Lr(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function Wr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = Vr(t.props, c), h = Lr(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || qr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || qr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), Kr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var Gr = Hr;
function Kr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function qr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Fr] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var Jr = /* @__PURE__ */ Symbol("_leaveCb"), Yr = /* @__PURE__ */ Symbol("_enterCb");
function Xr() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return na(() => {
		e.isMounted = !0;
	}), aa(() => {
		e.isUnmounting = !0;
	}), e;
}
var Zr = [Function, Array], Qr = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: Zr,
	onEnter: Zr,
	onAfterEnter: Zr,
	onEnterCancelled: Zr,
	onBeforeLeave: Zr,
	onLeave: Zr,
	onAfterLeave: Zr,
	onLeaveCancelled: Zr,
	onBeforeAppear: Zr,
	onAppear: Zr,
	onAfterAppear: Zr,
	onAppearCancelled: Zr
}, $r = (e) => {
	let t = e.subTree;
	return t.component ? $r(t.component) : t;
}, ei = {
	name: "BaseTransition",
	props: Qr,
	setup(e, { slots: t }) {
		let n = Gs(), r = Xr();
		return () => {
			let i = t.default && ci(t.default(), !0), a = i && i.length ? ti(i) : n.subTree ? Fs() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ B(e), { mode: s } = o;
			if (r.isLeaving) return ai(a);
			let c = oi(a);
			if (!c) return ai(a);
			let l = ii(c, o, r, n, (e) => l = e);
			c.type !== U && si(c, l);
			let u = n.subTree && oi(n.subTree);
			if (u && u.type !== U && !Ts(u, c) && $r(n).type !== U) {
				let e = ii(u, o, r, n);
				if (si(u, e), s === "out-in" && c.type !== U) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, ai(a);
				s === "in-out" && c.type !== U ? e.delayLeave = (e, t, n) => {
					let i = ri(r, u);
					i[String(u.key)] = u, e[Jr] = () => {
						t(), e[Jr] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function ti(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== U) {
			t = n;
			break;
		}
	}
	return t;
}
var ni = ei;
function ri(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ii(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: p, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = ri(n, e), C = (e, t) => {
		e && Gn(e, r, 9, t);
	}, w = (e, t) => {
		let n = t[1];
		C(e, t), m(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, T = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) {
				if (a) r = _ || c;
				else return;
			}
			t[Jr] && t[Jr](!0);
			let i = S[x];
			i && Ts(e, i) && i.el[Jr] && i.el[Jr](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) {
				if (a) r = v || l, i = y || u, o = b || d;
				else return;
			}
			let s = !1;
			t[Yr] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[Yr] = void 0);
			};
			let c = t[Yr].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Yr] && t[Yr](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[Jr] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[Jr] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[Jr].bind(null, !1);
			S[i] = e, p ? w(p, [t, o]) : o();
		},
		clone(e) {
			let a = ii(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function ai(e) {
	if (Wi(e)) return e = Ms(e), e.children = null, e;
}
function oi(e) {
	if (!Wi(e)) return Ir(e.type) && e.children ? ti(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && y(n.default)) return n.default();
	}
}
function si(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		si(Ir(n.type) && oi(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ci(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === fs ? (o.patchFlag & 128 && i++, r = r.concat(ci(o.children, t, s))) : (t || o.type !== U) && r.push(s == null ? o : Ms(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
// @__NO_SIDE_EFFECTS__
function li(e, t) {
	return y(e) ? /* @__PURE__ */ u({ name: e.name }, t, { setup: e }) : e;
}
function ui() {
	let e = Gs();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function di(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function fi(e) {
	let t = Gs(), n = /* @__PURE__ */ fn(null);
	if (t) {
		let r = t.refs === i ? t.refs = {} : t.refs;
		Object.defineProperty(r, e, {
			enumerable: !0,
			get: () => n.value,
			set: (e) => n.value = e
		});
	}
	return n;
}
function pi(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var mi = /* @__PURE__ */ new WeakMap();
function hi(e, t, n, r, a = !1) {
	if (m(e)) {
		e.forEach((e, i) => hi(e, t && (m(t) ? t[i] : t), n, r, a));
		return;
	}
	if (Vi(r) && !a) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && hi(e, t, n, r.component.subTree);
		return;
	}
	let o = r.shapeFlag & 4 ? cc(r.component) : r.el, c = a ? null : o, { i: l, r: u } = e, f = t && t.r, h = l.refs === i ? l.refs = {} : l.refs, g = l.setupState, _ = /* @__PURE__ */ B(g), v = g === i ? s : (e) => !pi(h, e) && p(_, e), x = (e, t) => !(t && pi(h, t));
	if (f != null && f !== u) {
		if (gi(t), b(f)) h[f] = null, v(f) && (g[f] = null);
		else if (/* @__PURE__ */ V(f)) {
			let e = t;
			x(f, e.k) && (f.value = null), e.k && (h[e.k] = null);
		}
	}
	if (y(u)) Wn(u, l, 12, [c, h]);
	else {
		let t = b(u), r = /* @__PURE__ */ V(u);
		if (t || r) {
			let i = () => {
				if (e.f) {
					let n = t ? v(u) ? g[u] : h[u] : x(u) || !e.k ? u.value : h[e.k];
					if (a) m(n) && d(n, o);
					else if (m(n)) n.includes(o) || n.push(o);
					else if (t) h[u] = [o], v(u) && (g[u] = h[u]);
					else {
						let t = [o];
						x(u, e.k) && (u.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[u] = c, v(u) && (g[u] = c)) : r && (x(u, e.k) && (u.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), mi.delete(e);
				};
				t.id = -1, mi.set(e, t), H(t, n);
			} else gi(e), i();
		}
	}
}
function gi(e) {
	let t = mi.get(e);
	t && (t.flags |= 8, mi.delete(e));
}
var _i = !1, vi = () => {
	_i ||= (console.error("Hydration completed but contains mismatches."), !0);
}, yi = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", bi = (e) => e.namespaceURI.includes("MathML"), xi = (e) => {
	if (e.nodeType === 1) {
		if (yi(e)) return "svg";
		if (bi(e)) return "mathml";
	}
}, Si = (e) => e.nodeType === 8;
function Ci(e) {
	let { mt: t, p: n, o: { patchProp: r, createText: i, nextSibling: a, parentNode: o, remove: s, insert: l, createComment: u } } = e, d = (e, t) => {
		if (!t.hasChildNodes()) {
			n(null, e, t), sr(), t._vnode = e;
			return;
		}
		f(t.firstChild, e, null, null, null), sr(), t._vnode = e;
	}, f = (n, r, s, c, u, d = !1) => {
		d ||= !!r.dynamicChildren;
		let b = Si(n) && n.data === "[", x = () => g(n, r, s, c, u, b), { type: S, ref: C, shapeFlag: w, patchFlag: T } = r, E = n.nodeType;
		r.el = n, T === -2 && (d = !1, r.dynamicChildren = null);
		let D = null;
		switch (S) {
			case ps:
				E === 3 ? (n.data !== r.children && (vi(), n.data = r.children), D = a(n)) : r.children === "" ? (l(r.el = i(""), o(n), n), D = n) : D = x();
				break;
			case U:
				y(n) ? (D = a(n), v(r.el = n.content.firstChild, n, s)) : D = E !== 8 || b ? x() : a(n);
				break;
			case ms:
				if (b && (n = a(n), E = n.nodeType), E === 1 || E === 3) {
					D = n;
					let e = !r.children.length;
					for (let t = 0; t < r.staticCount; t++) e && (r.children += D.nodeType === 1 ? D.outerHTML : D.data), t === r.staticCount - 1 && (r.anchor = D), D = a(D);
					return b ? a(D) : D;
				}
				x();
				break;
			case fs:
				D = b ? h(n, r, s, c, u, d) : x();
				break;
			default: if (w & 1) D = (E !== 1 || r.type.toLowerCase() !== n.tagName.toLowerCase()) && !y(n) ? x() : p(n, r, s, c, u, d);
			else if (w & 6) {
				r.slotScopeIds = u;
				let e = o(n);
				if (D = b ? _(n) : Si(n) && n.data === "teleport start" ? _(n, n.data, "teleport end") : a(n), t(r, e, null, s, c, xi(e), d), Vi(r) && !r.type.__asyncResolved) {
					let t;
					b ? (t = W(fs), t.anchor = D ? D.previousSibling : e.lastChild) : t = n.nodeType === 3 ? Ns("") : W("div"), t.el = n, r.component.subTree = t;
				}
			} else w & 64 ? D = E === 8 ? r.type.hydrate(n, r, s, c, u, d, e, m) : x() : w & 128 && (D = r.type.hydrate(n, r, s, c, xi(o(n)), u, d, e, f));
		}
		return C != null && hi(C, null, c, r), D;
	}, p = (e, t, n, i, a, o) => {
		o ||= !!t.dynamicChildren;
		let { type: l, dynamicProps: u, props: d, patchFlag: f, shapeFlag: p, dirs: h, transition: g } = t, _ = l === "input" || l === "option", b = !!u;
		if (_ || b || f !== -1) {
			h && xr(t, null, n, "created");
			let l = !1;
			if (y(e)) {
				l = qo(null, g) && n && n.vnode.props && n.vnode.props.appear;
				let r = e.content.firstChild;
				if (l) {
					let e = r.getAttribute("class");
					e && (r.$cls = e), g.beforeEnter(r);
				}
				v(r, e, n), t.el = e = r;
			}
			if (p & 16 && !(d && (d.innerHTML || d.textContent))) {
				let r = m(e.firstChild, t, e, n, i, a, o);
				for (r && !Oi(e, 1) && vi(); r;) {
					let e = r;
					r = r.nextSibling, s(e);
				}
			} else if (p & 8) {
				let n = t.children;
				n[0] === "\n" && (e.tagName === "PRE" || e.tagName === "TEXTAREA") && (n = n.slice(1));
				let { textContent: r } = e;
				r !== n && r !== n.replace(/\r\n|\r/g, "\n") && (Oi(e, 0) || vi(), e.textContent = t.children);
			}
			if (d) {
				if (_ || b || !o || f & 48) {
					let t = e.tagName.includes("-"), i = e.namespaceURI.includes("svg") ? "svg" : e.namespaceURI.includes("MathML") ? "mathml" : void 0;
					for (let a in d) if (_ && (a.endsWith("value") || a === "indeterminate") || c(a) && !ee(a) || a[0] === "." || t && !ee(a) || u && u.includes(a)) {
						if (Ti(e, a, d[a])) continue;
						r(e, a, null, d[a], i, n);
					}
				} else if (d.onClick) r(e, "onClick", null, d.onClick, void 0, n);
				else if (f & 4 && /* @__PURE__ */ rn(d.style)) for (let e in d.style) d.style[e];
			}
			let x;
			(x = d && d.onVnodeBeforeMount) && Bs(x, n, t), h && xr(t, null, n, "beforeMount"), ((x = d && d.onVnodeMounted) || h || l) && ls(() => {
				x && Bs(x, n, t), l && g.enter(e), h && xr(t, null, n, "mounted");
			}, i);
		}
		return e.nextSibling;
	}, m = (e, t, r, o, s, c, u) => {
		u ||= !!t.dynamicChildren;
		let d = t.children, p = d.length, m = !1;
		for (let t = 0; t < p; t++) {
			let h = u ? d[t] : d[t] = Is(d[t]), g = h.type === ps;
			e ? (g && !u && t + 1 < p && Is(d[t + 1]).type === ps && (l(i(e.data.slice(h.children.length)), r, a(e)), e.data = h.children), e = f(e, h, o, s, c, u)) : g && !h.children ? l(h.el = i(""), r) : (m || (m = !0, Oi(r, 1) || vi()), n(null, h, r, null, o, s, xi(r), c));
		}
		return e;
	}, h = (e, t, n, r, i, s) => {
		let { slotScopeIds: c } = t;
		c && (i = i ? i.concat(c) : c);
		let d = o(e), f = m(a(e), t, d, n, r, i, s);
		return f && Si(f) && f.data === "]" ? a(t.anchor = f) : (vi(), l(t.anchor = u("]"), d, f), f);
	}, g = (e, t, r, i, c, l) => {
		if (Ai(e, t) || vi(), t.el = null, l) {
			let t = _(e);
			for (;;) {
				let n = a(e);
				if (n && n !== t) s(n);
				else break;
			}
		}
		let u = a(e), d = o(e);
		return s(e), n(null, t, d, u, r, i, xi(d), c), r && (r.vnode.el = t.el, Co(r, t.el)), u;
	}, _ = (e, t = "[", n = "]") => {
		let r = 0;
		for (; e;) if (e = a(e), e && Si(e) && (e.data === t && r++, e.data === n)) {
			if (r === 0) return a(e);
			r--;
		}
		return e;
	}, v = (e, t, n) => {
		let r = t.parentNode;
		r && r.replaceChild(e, t);
		let i = n;
		for (; i;) i.vnode.el === t && (i.vnode.el = i.subTree.el = e), i = i.parent;
	}, y = (e) => e.nodeType === 1 && e.tagName === "TEMPLATE";
	return [d, f];
}
var wi = /* @__PURE__ */ new Set([
	"src",
	"srcset",
	"href",
	"poster"
]);
function Ti(e, t, n) {
	return wi.has(t) ? e.getAttribute(t) === (n == null ? null : `${n}`) : !1;
}
var Ei = "data-allow-mismatch", Di = {
	0: "text",
	1: "children",
	2: "class",
	3: "style",
	4: "attribute"
};
function Oi(e, t) {
	if (t === 0 || t === 1) for (; e && !e.hasAttribute(Ei);) e = e.parentElement;
	return ki(e && e.getAttribute(Ei), t);
}
function ki(e, t) {
	if (e == null) return !1;
	if (e === "") return !0;
	{
		let n = e.split(",");
		return t === 0 && n.includes("children") ? !0 : n.includes(Di[t]);
	}
}
function Ai(e, t) {
	return Oi(e.parentElement, 1) || ji(e) || Mi(t);
}
function ji(e) {
	return e.nodeType === 1 && ki(e.getAttribute(Ei), 1);
}
function Mi({ props: e }) {
	let t = e && e[Ei];
	return typeof t == "string" && ki(t, 1);
}
var Ni = de().requestIdleCallback || ((e) => setTimeout(e, 1)), Pi = de().cancelIdleCallback || ((e) => clearTimeout(e)), Fi = (e = 1e4) => (t) => {
	let n = Ni(t, { timeout: e });
	return () => Pi(n);
};
function Ii(e) {
	let { top: t, left: n, bottom: r, right: i } = e.getBoundingClientRect(), { innerHeight: a, innerWidth: o } = window;
	return (t > 0 && t < a || r > 0 && r < a) && (n > 0 && n < o || i > 0 && i < o);
}
var Li = (e) => (t, n) => {
	let r = new IntersectionObserver((e) => {
		for (let n of e) if (n.isIntersecting) {
			r.disconnect(), t();
			break;
		}
	}, e);
	return n((e) => {
		if (e instanceof Element) {
			if (Ii(e)) return t(), r.disconnect(), !1;
			r.observe(e);
		}
	}), () => r.disconnect();
}, Ri = (e) => (t) => {
	if (e) {
		let n = matchMedia(e);
		if (n.matches) t();
		else return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
	}
}, zi = (e = []) => (t, n) => {
	b(e) && (e = [e]);
	let r = !1, i = (e) => {
		r || (r = !0, a(), t(), e.target.dispatchEvent(new e.constructor(e.type, e)));
	}, a = () => {
		n((t) => {
			for (let n of e) t.removeEventListener(n, i);
		});
	};
	return n((t) => {
		for (let n of e) t.addEventListener(n, i, { once: !0 });
	}), a;
};
function Bi(e, t) {
	if (Si(e) && e.data === "[") {
		let n = 1, r = e.nextSibling;
		for (; r;) {
			if (r.nodeType === 1) {
				if (t(r) === !1) break;
			} else if (Si(r)) {
				if (r.data === "]") {
					if (--n === 0) break;
				} else r.data === "[" && n++;
			}
			r = r.nextSibling;
		}
	} else t(e);
}
var Vi = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function Hi(e) {
	y(e) && (e = { loader: e });
	let { loader: t, loadingComponent: n, errorComponent: r, delay: i = 200, hydrate: a, timeout: o, suspensible: s = !0, onError: c } = e, l = null, u, d = 0, f = () => (d++, l = null, p()), p = () => {
		let e;
		return l || (e = l = t().catch((e) => {
			if (e = e instanceof Error ? e : Error(String(e)), c) return new Promise((t, n) => {
				c(e, () => t(f()), () => n(e), d + 1);
			});
			throw e;
		}).then((t) => e !== l && l ? l : (t && (t.__esModule || t[Symbol.toStringTag] === "Module") && (t = t.default), u = t, t)));
	};
	return /* @__PURE__ */ li({
		name: "AsyncComponentWrapper",
		__asyncLoader: p,
		__asyncHydrate(e, t, n) {
			let r = e.isConnected, i = !1;
			(t.bu ||= []).push(() => i = !0);
			let o = () => {
				i || !e.parentNode || r && !e.isConnected || n();
			}, s = a ? () => {
				let n = a(o, (t) => Bi(e, t));
				n && (t.bum ||= []).push(n);
			} : o;
			u ? s() : p().then(() => !t.isUnmounted && s());
		},
		get __asyncResolved() {
			return u;
		},
		setup() {
			let e = Ws;
			if (di(e), u) return () => Ui(u, e);
			let t = (t) => {
				l = null, Kn(t, e, 13, !r);
			};
			if (s && e.suspense || Zs) return p().then((t) => () => Ui(t, e)).catch((e) => (t(e), () => r ? W(r, { error: e }) : null));
			let a = /* @__PURE__ */ dn(!1), c = /* @__PURE__ */ dn(), d = /* @__PURE__ */ dn(!!i), f, m;
			return oa(() => {
				f != null && clearTimeout(f), m != null && clearTimeout(m);
			}), i && (m = setTimeout(() => {
				e.isUnmounted || (d.value = !1);
			}, i)), o != null && (f = setTimeout(() => {
				if (!e.isUnmounted && !a.value && !c.value) {
					let e = /* @__PURE__ */ Error(`Async component timed out after ${o}ms.`);
					t(e), c.value = e;
				}
			}, o)), p().then(() => {
				e.isUnmounted || (a.value = !0, e.parent && Wi(e.parent.vnode) && e.parent.update());
			}).catch((n) => {
				if (e.isUnmounted) {
					l = null;
					return;
				}
				t(n), c.value = n;
			}), () => {
				if (a.value && u) return Ui(u, e);
				if (c.value && r) return W(r, { error: c.value });
				if (n && !d.value) return Ui(n, e);
			};
		}
	});
}
function Ui(e, t) {
	let { ref: n, props: r, children: i, ce: a } = t.vnode, o = W(e, r, i);
	return o.ref = n, o.ce = a, delete t.vnode.ce, o;
}
var Wi = (e) => e.type.__isKeepAlive, Gi = {
	name: "KeepAlive",
	__isKeepAlive: !0,
	props: {
		include: [
			String,
			RegExp,
			Array
		],
		exclude: [
			String,
			RegExp,
			Array
		],
		max: [String, Number]
	},
	setup(e, { slots: t }) {
		let n = Gs(), r = n.ctx;
		if (!r.renderer) return () => {
			let e = t.default && t.default();
			return e && e.length === 1 ? e[0] : e;
		};
		let i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = null, s = n.suspense, { renderer: { p: c, m: l, um: u, o: { createElement: d } } } = r, f = d("div");
		r.activate = (e, t, n, r, i) => {
			let a = e.component;
			l(e, t, n, 0, s), c(a.vnode, e, t, n, a, s, r, e.slotScopeIds, i), H(() => {
				a.isDeactivated = !1, a.a && oe(a.a);
				let t = e.props && e.props.onVnodeMounted;
				t && Bs(t, a.parent, e);
			}, s);
		}, r.deactivate = (e) => {
			let t = e.component;
			Zo(t.m), Zo(t.a), l(e, f, null, 1, s), H(() => {
				t.da && oe(t.da);
				let n = e.props && e.props.onVnodeUnmounted;
				n && Bs(n, t.parent, e), t.isDeactivated = !0;
			}, s);
		};
		function p(e) {
			Zi(e), u(e, n, s, !0);
		}
		function m(e) {
			i.forEach((t, n) => {
				let r = lc(Vi(t) ? t.type.__asyncResolved || {} : t.type);
				r && !e(r) && h(n);
			});
		}
		function h(e) {
			let t = i.get(e);
			t && (!o || !Ts(t, o)) ? p(t) : o && Zi(o), i.delete(e), a.delete(e);
		}
		Ar(() => [e.include, e.exclude], ([e, t]) => {
			e && m((t) => Ki(e, t)), t && m((e) => !Ki(t, e));
		}, {
			flush: "post",
			deep: !0
		});
		let g = null, _ = () => {
			g != null && ($o(n.subTree.type) ? H(() => {
				i.set(g, Qi(n.subTree));
			}, n.subTree.suspense) : i.set(g, Qi(n.subTree)));
		};
		return na(_), ia(_), aa(() => {
			i.forEach((e) => {
				let { subTree: t, suspense: r } = n, i = Qi(t);
				if (e.type === i.type && e.key === i.key) {
					Zi(i);
					let e = i.component.da;
					e && H(e, r);
					return;
				}
				p(e);
			});
		}), () => {
			if (g = null, !t.default) return o = null;
			let n = t.default(), r = n[0];
			if (n.length > 1) return o = null, n;
			if (!ws(r) || !(r.shapeFlag & 4) && !(r.shapeFlag & 128)) return o = null, r;
			let s = Qi(r);
			if (s.type === U) return o = null, s;
			let c = s.type, l = lc(Vi(s) ? s.type.__asyncResolved || {} : c), { include: u, exclude: d, max: f } = e;
			if (u && (!l || !Ki(u, l)) || d && l && Ki(d, l)) return s.shapeFlag &= -257, o = s, r;
			let p = s.key == null ? c : s.key, m = i.get(p);
			return s.el && (s = Ms(s), r.shapeFlag & 128 && (r.ssContent = s)), g = p, m ? (s.el = m.el, s.component = m.component, s.transition && si(s, s.transition), s.shapeFlag |= 512, a.delete(p), a.add(p)) : (a.add(p), f && a.size > parseInt(f, 10) && h(a.values().next().value)), s.shapeFlag |= 256, o = s, $o(r.type) ? r : s;
		};
	}
};
function Ki(e, t) {
	return m(e) ? e.some((e) => Ki(e, t)) : b(e) ? e.split(",").includes(t) : v(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function qi(e, t) {
	Yi(e, "a", t);
}
function Ji(e, t) {
	Yi(e, "da", t);
}
function Yi(e, t, n = Ws) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if ($i(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Wi(e.parent.vnode) && Xi(r, t, n, e), e = e.parent;
	}
}
function Xi(e, t, n, r) {
	let i = $i(t, e, r, !0);
	oa(() => {
		d(r[t], i);
	}, n);
}
function Zi(e) {
	e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Qi(e) {
	return e.shapeFlag & 128 ? e.ssContent : e;
}
function $i(e, t, n = Ws, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			it();
			let i = Js(n), a = Gn(t, n, e, r);
			return i(), at(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var ea = (e) => (t, n = Ws) => {
	(!Zs || e === "sp") && $i(e, (...e) => t(...e), n);
}, ta = ea("bm"), na = ea("m"), ra = ea("bu"), ia = ea("u"), aa = ea("bum"), oa = ea("um"), sa = ea("sp"), ca = ea("rtg"), la = ea("rtc");
function ua(e, t = Ws) {
	$i("ec", e, t);
}
var da = "components", fa = "directives";
function pa(e, t) {
	return _a(da, e, !0, t) || e;
}
var ma = /* @__PURE__ */ Symbol.for("v-ndc");
function ha(e) {
	return b(e) ? _a(da, e, !1) || e : e || ma;
}
function ga(e) {
	return _a(fa, e);
}
function _a(e, t, n = !0, r = !1) {
	let i = pr || Ws;
	if (i) {
		let n = i.type;
		if (e === da) {
			let e = lc(n, !1);
			if (e && (e === t || e === k(t) || e === ae(k(t)))) return n;
		}
		let a = va(i[e] || n[e], t) || va(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function va(e, t) {
	return e && (e[t] || e[k(t)] || e[ae(k(t))]);
}
function ya(e, t, n, r) {
	let i, a = n && n[r], o = m(e);
	if (o || b(e)) {
		let n = o && /* @__PURE__ */ rn(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ on(e), s = /* @__PURE__ */ an(e), e = vt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? un(ln(e[n])) : ln(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (S(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
function ba(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (m(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
		else r && (e[r.name] = r.key ? (...e) => {
			let t = r.fn(...e);
			return t && (t.key = r.key), t;
		} : r.fn);
	}
	return e;
}
function xa(e, t, n, r, i, a) {
	if (n ??= {}, pr.ce || pr.parent && Vi(pr.parent) && pr.parent.ce) {
		let e = a != null && n.key == null ? u({}, n, { key: a }) : n, i = Object.keys(e).length > 0;
		return t !== "default" && (e.name = t), _s(), Cs(fs, null, [W("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	o && o._c && (o._d = !1);
	let s = hs.length;
	_s();
	let c;
	try {
		let i = o && Sa(o(n)), s = n.key || a || i && i.key;
		c = Cs(fs, { key: (s && !x(s) ? s : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
	} catch (e) {
		for (let e = hs.length; e > s; e--) vs();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), c;
}
function Sa(e) {
	return e.some((e) => !ws(e) || !(e.type === U || e.type === fs && !Sa(e.children))) ? e : null;
}
function Ca(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : j(r)] = e[r];
	return n;
}
var wa = (e) => e ? Xs(e) ? cc(e) : wa(e.parent) : null, Ta = /* @__PURE__ */ u(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => wa(e.parent),
	$root: (e) => wa(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Ya(e),
	$forceUpdate: (e) => e.f ||= () => {
		rr(e.update);
	},
	$nextTick: (e) => e.n ||= tr.bind(e.proxy),
	$watch: (e) => Mr.bind(e)
}), Ea = (e, t) => e !== i && !e.__isScriptSetup && p(e, t), Da = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return a[t];
				case 4: return n[t];
				case 3: return o[t];
			}
			else if (Ea(r, t)) return s[t] = 1, r[t];
			else if (a !== i && p(a, t)) return s[t] = 2, a[t];
			else if (p(o, t)) return s[t] = 3, o[t];
			else if (n !== i && p(n, t)) return s[t] = 4, n[t];
			else Wa && (s[t] = 0);
		}
		let u = Ta[t], d, f;
		if (u) return t === "$attrs" && z(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== i && p(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, p(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: a, ctx: o } = e;
		return Ea(a, t) ? (a[t] = n, !0) : r !== i && p(r, t) ? (r[t] = n, !0) : p(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== i && c[0] !== "$" && p(e, c) || Ea(t, c) || p(o, c) || p(r, c) || p(Ta, c) || p(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? p(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
}, Oa = /* @__PURE__ */ u({}, Da, {
	get(e, t) {
		if (t !== Symbol.unscopables) return Da.get(e, t, e);
	},
	has(e, t) {
		return t[0] !== "_" && !pe(t);
	}
});
function ka() {
	return null;
}
function Aa() {
	return null;
}
function ja(e) {}
function Ma(e) {}
function Na() {
	return null;
}
function Pa() {}
function Fa(e, t) {
	return null;
}
function Ia() {
	return Ra("useSlots").slots;
}
function La() {
	return Ra("useAttrs").attrs;
}
function Ra(e) {
	let t = Gs();
	return t.setupContext ||= sc(t);
}
function za(e) {
	return m(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Ba(e, t) {
	let n = za(e);
	for (let e in t) {
		if (e.startsWith("__skip")) continue;
		let r = n[e];
		r ? m(r) || y(r) ? r = n[e] = {
			type: r,
			default: t[e]
		} : r.default = t[e] : r === null && (r = n[e] = { default: t[e] }), r && t[`__skip_${e}`] && (r.skipFactory = !0);
	}
	return n;
}
function Va(e, t) {
	return !e || !t ? e || t : m(e) && m(t) ? e.concat(t) : u({}, za(e), za(t));
}
function Ha(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || Object.defineProperty(n, r, {
		enumerable: !0,
		get: () => e[r]
	});
	return n;
}
function Ua(e) {
	let t = Gs(), n = Zs, r = e();
	Ys(), n && qs(!1);
	let i = () => {
		Js(t), n && qs(!0);
	}, a = () => {
		Gs() !== t && t.scope.off(), Ys(), n && qs(!1);
	};
	return C(r) && (r = r.catch((e) => {
		throw i(), Promise.resolve().then(() => Promise.resolve().then(a)), e;
	})), [r, () => {
		i(), Promise.resolve().then(a);
	}];
}
var Wa = !0;
function Ga(e) {
	let t = Ya(e), n = e.proxy, r = e.ctx;
	Wa = !1, t.beforeCreate && qa(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: h, updated: g, activated: _, deactivated: v, beforeDestroy: b, beforeUnmount: x, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: D, errorCaptured: O, serverPrefetch: ee, expose: te, inheritAttrs: ne, components: re, directives: k, filters: ie } = t;
	if (u && Ka(u, r, null), s) for (let e in s) {
		let t = s[e];
		y(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		S(t) && (e.data = /* @__PURE__ */ Qt(t));
	}
	if (Wa = !0, a) for (let e in a) {
		let t = a[e], i = dc({
			get: y(t) ? t.bind(n, n) : y(t.get) ? t.get.bind(n, n) : o,
			set: !y(t) && y(t.set) ? t.set.bind(n) : o
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (c) for (let e in c) Ja(c[e], r, n, e);
	if (l) {
		let e = y(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Sr(t, e[t]);
		});
	}
	d && qa(d, e, "c");
	function A(e, t) {
		m(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (A(ta, f), A(na, p), A(ra, h), A(ia, g), A(qi, _), A(Ji, v), A(ua, O), A(la, E), A(ca, D), A(aa, x), A(oa, w), A(sa, ee), m(te)) {
		if (te.length) {
			let t = e.exposed ||= {};
			te.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	T && e.render === o && (e.render = T), ne != null && (e.inheritAttrs = ne), re && (e.components = re), k && (e.directives = k), ee && di(e);
}
function Ka(e, t, n = o) {
	m(e) && (e = eo(e));
	for (let n in e) {
		let r = e[n], i;
		i = S(r) ? "default" in r ? Cr(r.from || n, r.default, !0) : Cr(r.from || n) : Cr(r), /* @__PURE__ */ V(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function qa(e, t, n) {
	Gn(m(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ja(e, t, n, r) {
	let i = r.includes(".") ? Nr(n, r) : () => n[r];
	if (b(e)) {
		let n = t[e];
		y(n) && Ar(i, n);
	} else if (y(e)) Ar(i, e.bind(n));
	else if (S(e)) {
		if (m(e)) e.forEach((e) => Ja(e, t, n, r));
		else {
			let r = y(e.handler) ? e.handler.bind(n) : t[e.handler];
			y(r) && Ar(i, r, e);
		}
	}
}
function Ya(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Xa(c, e, o, !0)), Xa(c, t, o)), S(t) && a.set(t, c), c;
}
function Xa(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Xa(e, a, n, !0), i && i.forEach((t) => Xa(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Za[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Za = {
	data: Qa,
	props: ro,
	emits: ro,
	methods: no,
	computed: no,
	beforeCreate: to,
	created: to,
	beforeMount: to,
	mounted: to,
	beforeUpdate: to,
	updated: to,
	beforeDestroy: to,
	beforeUnmount: to,
	destroyed: to,
	unmounted: to,
	activated: to,
	deactivated: to,
	errorCaptured: to,
	serverPrefetch: to,
	components: no,
	directives: no,
	watch: io,
	provide: Qa,
	inject: $a
};
function Qa(e, t) {
	return t ? e ? function() {
		return u(y(e) ? e.call(this, this) : e, y(t) ? t.call(this, this) : t);
	} : t : e;
}
function $a(e, t) {
	return no(eo(e), eo(t));
}
function eo(e) {
	if (m(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function to(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function no(e, t) {
	return e ? u(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ro(e, t) {
	return e ? m(e) && m(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : u(/* @__PURE__ */ Object.create(null), za(e), za(t ?? {})) : t;
}
function io(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = u(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = to(e[r], t[r]);
	return n;
}
function ao() {
	return {
		app: null,
		config: {
			isNativeTag: s,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var oo = 0;
function so(e, t) {
	return function(n, r = null) {
		y(n) || (n = u({}, n)), r != null && !S(r) && (r = null);
		let i = ao(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: oo++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: gc,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && y(e.install) ? (a.add(e), e.install(c, ...t)) : y(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || W(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, cc(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Gn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = co;
				co = c;
				try {
					return e();
				} finally {
					co = t;
				}
			}
		};
		return c;
	};
}
var co = null;
function lo(e, t, n = i) {
	let r = Gs(), a = k(t), o = A(t), s = uo(e, a), c = xn((s, c) => {
		let l, u = i, d;
		return kr(() => {
			let t = e[a];
			M(l, t) && (l = t, c());
		}), {
			get() {
				return s(), n.get ? n.get(l) : l;
			},
			set(e) {
				let s = n.set ? n.set(e) : e;
				if (!M(s, l) && !(u !== i && M(e, u))) return;
				let f = r.vnode.props, p = !!(f && (t in f || a in f || o in f) && (`onUpdate:${t}` in f || `onUpdate:${a}` in f || `onUpdate:${o}` in f));
				p || (l = e, c()), r.emit(`update:${t}`, s), M(e, u) && (M(e, s) && !M(s, d) || p && u !== i && !M(s, l)) && c(), u = e, d = s;
			}
		};
	});
	return c[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? s || i : c,
				done: !1
			} : { done: !0 };
		} };
	}, c;
}
var uo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${k(t)}Modifiers`] || e[`${A(t)}Modifiers`];
function fo(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || i, a = n, o = t.startsWith("update:"), s = o && uo(r, t.slice(7));
	s && (s.trim && (a = n.map((e) => b(e) ? e.trim() : e)), s.number && (a = n.map(ce)));
	let c, l = r[c = j(t)] || r[c = j(k(t))];
	!l && o && (l = r[c = j(A(t))]), l && Gn(l, e, 6, a);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, Gn(u, e, 6, a);
	}
}
var po = /* @__PURE__ */ new WeakMap();
function mo(e, t, n = !1) {
	let r = n ? po : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!y(e)) {
		let r = (e) => {
			let n = mo(e, t, !0);
			n && (s = !0, u(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (S(e) && r.set(e, null), null) : (m(a) ? a.forEach((e) => o[e] = null) : u(o, a), S(e) && r.set(e, o), o);
}
function ho(e, t) {
	return !e || !c(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), p(e, t[0].toLowerCase() + t.slice(1)) || p(e, A(t)) || p(e, t));
}
function go(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = hr(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Is(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Is(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : vo(s);
		}
	} catch (t) {
		hs.length = 0, Kn(t, e, 1), v = W(U);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(l) && (y = yo(y, a)), b = Ms(b, y, !1, !0));
	}
	return n.dirs && (b = Ms(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && si(Ir(b.type) && oi(b) || b, n.transition), v = b, hr(_), v;
}
function _o(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (ws(r)) {
			if (r.type !== U || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var vo = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || c(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, yo = (e, t) => {
	let n = {};
	for (let r in e) (!l(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function bo(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? xo(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (So(o, r, n) && !ho(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || xo(r, o, l) : !!o;
	return !1;
}
function xo(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (So(t, e, a) && !ho(n, a)) return !0;
	}
	return !1;
}
function So(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && S(r) && S(i) ? !Ae(r, i) : r !== i;
}
function Co({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var wo = {}, To = () => Object.create(wo), Eo = (e) => Object.getPrototypeOf(e) === wo;
function Do(e, t, n, r = !1) {
	let i = {}, a = To();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ko(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ $t(i) : e.type.props ? i : a, e.attrs = a;
}
function Oo(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ B(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ho(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (p(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = k(o);
						i[t] = Ao(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ko(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !p(t, a) && ((r = A(a)) === a || !p(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ao(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !p(t, e)) && (delete a[e], l = !0);
	}
	l && ht(e.attrs, "set", "");
}
function ko(e, t, n, r) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let i in t) {
		if (ee(i)) continue;
		let l = t[i], u;
		a && p(a, u = k(i)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : ho(e.emitsOptions, i) || (!(i in r) || l !== r[i]) && (r[i] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ B(n), r = c || i;
		for (let i = 0; i < o.length; i++) {
			let s = o[i];
			n[s] = Ao(a, t, s, r[s], e, !p(r, s));
		}
	}
	return s;
}
function Ao(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = p(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && y(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Js(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === A(n)) && (r = !0));
	}
	return r;
}
var jo = /* @__PURE__ */ new WeakMap();
function Mo(e, t, n = !1) {
	let r = n ? jo : t.propsCache, o = r.get(e);
	if (o) return o;
	let s = e.props, c = {}, l = [], d = !1;
	if (!y(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Mo(e, t, !0);
			u(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return S(e) && r.set(e, a), a;
	if (m(s)) for (let e = 0; e < s.length; e++) {
		let t = k(s[e]);
		No(t) && (c[t] = i);
	}
	else if (s) for (let e in s) {
		let t = k(e);
		if (No(t)) {
			let n = s[e], r = c[t] = m(n) || y(n) ? { type: n } : u({}, n), i = r.type, a = !1, o = !0;
			if (m(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = y(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = y(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || p(r, "default")) && l.push(t);
		}
	}
	let f = [c, l];
	return S(e) && r.set(e, f), f;
}
function No(e) {
	return e[0] !== "$" && !ee(e);
}
var Po = (e) => e === "_" || e === "_ctx" || e === "$stable", Fo = (e) => m(e) ? e.map(Is) : [Is(e)], Io = (e, t, n) => {
	if (t._n) return t;
	let r = yr((...e) => Fo(t(...e)), n);
	return r._c = !1, r;
}, Lo = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Po(n)) continue;
		let i = e[n];
		if (y(i)) t[n] = Io(n, i, r);
		else if (i != null) {
			let e = Fo(i);
			t[n] = () => e;
		}
	}
}, Ro = (e, t) => {
	let n = Fo(t);
	e.slots.default = () => n;
}, zo = (e, t, n) => {
	for (let r in t) (n || !Po(r)) && (e[r] = t[r]);
}, Bo = (e, t, n) => {
	let r = e.slots = To();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (zo(r, t, n), n && se(r, "_", e, !0)) : Lo(t, r);
	} else t && Ro(e, t);
}, Vo = (e, t, n) => {
	let { vnode: r, slots: a } = e, o = !0, s = i;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : zo(a, t, n) : (o = !t.$stable, Lo(t, a)), s = t;
	} else t && (Ro(e, t), s = { default: 1 });
	if (o) for (let e in a) !Po(e) && s[e] == null && delete a[e];
}, H = ls;
function Ho(e) {
	return Wo(e);
}
function Uo(e) {
	return Wo(e, Ci);
}
function Wo(e, t) {
	let n = de();
	n.__VUE__ = !0;
	let { insert: r, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = o, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ts(e, t) && (r = P(e), ue(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ps:
				y(e, t, n, r);
				break;
			case U:
				b(e, t, n, r);
				break;
			case ms:
				e ?? x(t, n, r, o);
				break;
			case fs:
				re(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? k(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, ge);
		}
		u != null && i ? hi(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && hi(e.ref, null, a, e, !0);
	}, y = (e, t, n, i) => {
		if (e == null) r(t.el = u(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = d(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = h(e), r(e, n, i), e = a;
		r(t, n, i);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) T(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), O(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, i, a, o, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, o, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && D(e.children, d, null, i, a, Go(e, o), s, u), _ && xr(e, null, i, "created"), E(d, e, e.scopeId, s, i), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], o, i);
			"value" in m && c(d, "value", null, m.value, o), (f = m.onVnodeBeforeMount) && Bs(f, i, e);
		}
		_ && xr(e, null, i, "beforeMount");
		let v = qo(a, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && H(() => {
			try {
				f && Bs(f, i, e), v && g.enter(d), _ && xr(e, null, i, "mounted");
			} finally {}
		}, a);
	}, E = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || $o(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				E(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Ls(e[l]) : Is(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, O = (e, t, n, r, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || i, h = t.props || i, g;
		if (n && Ko(n, !1), (g = h.onVnodeBeforeUpdate) && Bs(g, n, t, e), f && xr(t, e, n, "beforeUpdate"), n && Ko(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? te(e.dynamicChildren, d, l, n, r, Go(t, a), o) : s || M(e, t, l, null, n, r, Go(t, a), o, !1), u > 0) {
			if (u & 16) ne(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && ne(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && H(() => {
			g && Bs(g, n, t, e), f && xr(t, e, n, "updated");
		}, r);
	}, te = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === fs || !Ts(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, ne = (e, t, n, r, a) => {
		if (t !== n) {
			if (t !== i) for (let i in t) !ee(i) && !(i in n) && c(e, i, t[i], null, a, r);
			for (let i in n) {
				if (ee(i)) continue;
				let o = n[i], s = t[i];
				o !== s && i !== "value" && c(e, i, s, o, a, r);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, re = (e, t, n, i, a, o, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), D(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (te(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && Jo(e, t, !0)) : M(e, t, n, f, a, o, s, c, l);
	}, k = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ie(t, n, r, i, a, o, c) : A(e, t, c);
	}, ie = (e, t, n, r, i, a, o) => {
		let s = e.component = Us(e, r, i);
		if (Wi(e) && (s.ctx.renderer = ge), Qs(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ae, o), !e.el) {
				let r = s.subTree = W(U);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ae(s, e, t, n, i, a, o);
	}, A = (e, t, n) => {
		let r = t.component = e.component;
		if (bo(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				j(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, r.vnode = t;
	}, ae = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Xo(e);
					if (n) {
						t && (t.el = c.el, j(e, t, o)), n.asyncDep.then(() => {
							H(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ko(e, !1), t ? (t.el = c.el, j(e, t, o)) : t = c, n && oe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Bs(d, s, t, c), Ko(e, !0);
				let f = go(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), P(p), e, i, a), t.el = f.el, u === null && Co(e, f.el), r && H(r, i), (d = t.props && t.props.onVnodeUpdated) && H(() => Bs(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Vi(t);
				if (Ko(e, !1), l && oe(l), !m && (o = c && c.onVnodeBeforeMount) && Bs(o, d, t), Ko(e, !0), s && ve) {
					let t = () => {
						e.subTree = go(e), ve(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = go(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && H(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					H(() => Bs(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Vi(d.vnode) && d.vnode.shapeFlag & 256) && e.a && H(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new He(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => rr(u), Ko(e, !0), l();
	}, j = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Oo(e, t.props, r, n), Vo(e, t.children, n), it(), or(e), at();
	}, M = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				ce(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				se(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && me(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? ce(l, d, n, r, i, a, o, s, c) : me(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && D(d, n, r, i, a, o, s, c));
	}, se = (e, t, n, r, i, o, s, c, l) => {
		e ||= a, t ||= a;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? Ls(t[p]) : Is(t[p]);
			v(e[p], r, n, null, i, o, s, c, l);
		}
		u > d ? me(e, i, o, !0, !1, f) : D(t, n, r, i, o, s, c, l, f);
	}, ce = (e, t, n, r, i, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], a = t[u] = l ? Ls(t[u]) : Is(t[u]);
			if (Ts(r, a)) v(r, a, n, null, i, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], a = t[p] = l ? Ls(t[p]) : Is(t[p]);
			if (Ts(r, a)) v(r, a, n, null, i, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, a = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Ls(t[u]) : Is(t[u]), n, a, i, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ue(e[u], i, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Ls(t[u]) : Is(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					ue(r, i, o, !0);
					continue;
				}
				let a;
				if (r.key != null) a = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Ts(r, t[_])) {
					a = _;
					break;
				}
				a === void 0 ? ue(r, i, o, !0) : (C[a - h] = u + 1, a >= S ? S = a : x = !0, v(r, t[a], n, null, i, o, s, c, l), y++);
			}
			let w = x ? Yo(C) : a;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, a = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Qo(f) : r;
				C[u] === 0 ? v(null, a, n, p, i, o, s, c, l) : x && (_ < 0 || u !== w[_] ? le(a, n, p, 2) : _--);
			}
		}
	}, le = (e, t, n, i, a = null) => {
		let { el: o, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			le(e.component.subTree, t, n, i);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, i);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, ge);
			return;
		}
		if (c === fs) {
			r(o, t, n);
			for (let e = 0; e < u.length; e++) le(u[e], t, n, i);
			r(e.anchor, t, n);
			return;
		}
		if (c === ms) {
			S(e, t, n);
			return;
		}
		if (i !== 2 && d & 1 && l) {
			if (i === 0) l.persisted && !o[Jr] ? r(o, t, n) : (l.beforeEnter(o), r(o, t, n), H(() => l.enter(o), a));
			else {
				let { leave: i, delayLeave: a, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(o) : r(o, t, n);
				}, d = () => {
					let e = o._isLeaving || !!o[Jr];
					o._isLeaving && o[Jr](!0), l.persisted && !e ? u() : i(o, () => {
						u(), c && c();
					});
				};
				a ? a(o, u, d) : d();
			}
		} else r(o, t, n);
	}, ue = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (it(), hi(s, null, n, e, !0), at()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Vi(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Bs(_, t, e), u & 6) N(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && xr(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, ge, r) : l && !l.hasOnce && (a !== fs || d > 0 && d & 64) ? me(l, t, n, !1, !0) : (a === fs && d & 384 || !i && u & 16) && me(c, t, n), r && fe(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && H(() => {
			_ && Bs(_, t, e), h && xr(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, fe = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === fs) {
			pe(n, r);
			return;
		}
		if (t === ms) {
			C(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, pe = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, N = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Zo(c), Zo(l), r && oe(r), i.stop(), a && (a.flags |= 8, ue(o, e, t, n)), s && H(s, t), H(() => {
			e.isUnmounted = !0;
		}, t);
	}, me = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ue(e[o], t, n, r, i);
	}, P = (e) => {
		if (e.shapeFlag & 6) return P(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Fr];
		return n ? h(n) : t;
	}, he = !1, F = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ue(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, he ||= (he = !0, or(r), sr(), !1);
	}, ge = {
		p: v,
		um: ue,
		m: le,
		r: fe,
		mt: ie,
		mc: D,
		pc: M,
		pbc: te,
		n: P,
		o: e
	}, _e, ve;
	return t && ([_e, ve] = t(ge)), {
		render: F,
		hydrate: _e,
		createApp: so(F, _e)
	};
}
function Go({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ko({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function qo(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Jo(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (m(r) && m(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Ls(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Jo(t, a)), a.type === ps && (a.patchFlag === -1 && (a = i[e] = Ls(a)), a.el = t.el), a.type === U && !a.el && (a.el = t.el);
	}
}
function Yo(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Xo(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Xo(t);
}
function Zo(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Qo(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Qo(t.subTree) : null;
}
var $o = (e) => e.__isSuspense, es = 0, ts = {
	name: "Suspense",
	__isSuspense: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		if (e == null) rs(t, n, r, i, a, o, s, c, l);
		else {
			if (a && a.deps > 0 && !e.suspense.isInFallback) {
				t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
				return;
			}
			is(e, t, n, r, i, o, s, c, l);
		}
	},
	hydrate: os,
	normalize: ss
};
function ns(e, t) {
	let n = e.props && e.props[t];
	y(n) && n();
}
function rs(e, t, n, r, i, a, o, s, c) {
	let { p: l, o: { createElement: u } } = c, d = u("div"), f = e.suspense = as(e, i, r, t, d, n, a, o, s, c);
	l(null, f.pendingBranch = e.ssContent, d, null, r, f, a, o), f.deps > 0 ? (ns(e, "onPending"), ns(e, "onFallback"), l(null, e.ssFallback, t, n, r, null, a, o), us(f, e.ssFallback)) : f.resolve(!1, !0);
}
function is(e, t, n, r, i, a, o, s, { p: c, um: l, o: { createElement: u } }) {
	let d = t.suspense = e.suspense;
	d.vnode = t, t.el = e.el;
	let f = t.ssContent, p = t.ssFallback, { activeBranch: m, pendingBranch: h, isInFallback: g, isHydrating: _ } = d;
	if (h) d.pendingBranch = f, Ts(h, f) ? (c(h, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : g && (_ || (c(m, p, n, r, i, null, a, o, s), us(d, p)))) : (d.pendingId = es++, _ ? (d.isHydrating = !1, d.activeBranch = h) : l(h, i, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), g ? (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : (c(m, p, n, r, i, null, a, o, s), us(d, p))) : m && Ts(m, f) ? (c(m, f, n, r, i, d, a, o, s), d.resolve(!0)) : (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 && d.resolve()));
	else if (m && Ts(m, f)) c(m, f, n, r, i, d, a, o, s), us(d, f);
	else if (ns(t, "onPending"), d.pendingBranch = f, d.pendingId = f.shapeFlag & 512 ? f.component.suspenseId : es++, c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0) d.resolve();
	else {
		let { timeout: e, pendingId: t } = d;
		e > 0 ? setTimeout(() => {
			d.pendingId === t && d.fallback(p);
		}, e) : e === 0 && d.fallback(p);
	}
}
function as(e, t, n, r, i, a, o, s, c, l, u = !1) {
	let { p: d, m: f, um: p, n: m, o: { parentNode: h, remove: g } } = l, _, v = ds(e);
	v && t && t.pendingBranch && (_ = t.pendingId, t.deps++);
	let y = e.props ? le(e.props.timeout) : void 0, b = a, x = {
		vnode: e,
		parent: t,
		parentComponent: n,
		namespace: o,
		container: r,
		hiddenContainer: i,
		deps: 0,
		pendingId: es++,
		timeout: typeof y == "number" ? y : -1,
		activeBranch: null,
		isFallbackMountPending: !1,
		pendingBranch: null,
		isInFallback: !u,
		isHydrating: u,
		isUnmounted: !1,
		effects: [],
		resolve(e = !1, n = !1) {
			let { vnode: r, activeBranch: i, pendingBranch: o, pendingId: s, effects: c, parentComponent: l, container: u, isInFallback: d } = x, g = !1;
			if (x.isHydrating) x.isHydrating = !1;
			else if (!e) {
				g = i && o.transition && o.transition.mode === "out-in";
				let e = !1;
				g && (i.transition.afterLeave = () => {
					s === x.pendingId && (f(o, u, a === b && !e ? m(i) : a, 0), ar(c), d && r.ssFallback && (r.ssFallback.el = null));
				}), i && !x.isFallbackMountPending && (h(i.el) === u && (a = m(i), e = !0), p(i, l, x, !0), !g && d && r.ssFallback && H(() => r.ssFallback.el = null, x)), g || f(o, u, a, 0);
			}
			x.isFallbackMountPending = !1, us(x, o), x.pendingBranch = null, x.isInFallback = !1;
			let y = x.parent, S = !1;
			for (; y;) {
				if (y.pendingBranch) {
					for (let e = 0; e < c.length; e++) y.effects.push(c[e]);
					S = !0;
					break;
				}
				y = y.parent;
			}
			!S && !g && ar(c), x.effects = [], v && t && t.pendingBranch && _ === t.pendingId && (t.deps--, t.deps === 0 && !n && t.resolve()), ns(r, "onResolve");
		},
		fallback(e) {
			if (!x.pendingBranch) return;
			let { vnode: t, activeBranch: n, parentComponent: r, container: i, namespace: a } = x;
			ns(t, "onFallback");
			let o = m(n), l = () => {
				x.isFallbackMountPending = !1, x.isInFallback && (d(null, e, i, o, r, null, a, s, c), us(x, e));
			}, u = e.transition && e.transition.mode === "out-in";
			u && (x.isFallbackMountPending = !0, n.transition.afterLeave = l), x.isInFallback = !0, p(n, r, null, !0), u || l();
		},
		move(e, t, n) {
			x.activeBranch && f(x.activeBranch, e, t, n), x.container = e;
		},
		next() {
			return x.activeBranch && m(x.activeBranch);
		},
		registerDep(e, t, n) {
			let r = !!x.pendingBranch;
			r && x.deps++;
			let i = e.vnode.el;
			e.asyncDep.catch((t) => {
				Kn(t, e, 0);
			}).then((a) => {
				if (e.isUnmounted || x.isUnmounted || x.pendingId !== e.suspenseId) return;
				Ys(), e.asyncResolved = !0;
				let { vnode: s } = e;
				ec(e, a, !1), i && (s.el = i);
				let c = !i && e.subTree.el;
				t(e, s, h(i || e.subTree.el), i ? null : m(e.subTree), x, o, n), c && (s.placeholder = null, g(c)), Co(e, s.el), r && --x.deps === 0 && x.resolve();
			});
		},
		unmount(e, t) {
			x.isUnmounted = !0, x.activeBranch && p(x.activeBranch, n, e, t), x.pendingBranch && p(x.pendingBranch, n, e, t);
		}
	};
	return x;
}
function os(e, t, n, r, i, a, o, s, c) {
	let l = t.suspense = as(t, r, n, e.parentNode, document.createElement("div"), null, i, a, o, s, !0), u = c(e, l.pendingBranch = t.ssContent, n, l, a, o);
	return l.deps === 0 && l.resolve(!1, !0), u;
}
function ss(e) {
	let { shapeFlag: t, children: n } = e, r = t & 32;
	e.ssContent = cs(r ? n.default : n), e.ssFallback = r ? cs(n.fallback) : W(U);
}
function cs(e) {
	let t;
	if (y(e)) {
		let n = ys && e._c;
		n && (e._d = !1, _s()), e = e(), n && (e._d = !0, t = gs, vs());
	}
	return m(e) && (e = _o(e)), e = Is(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)), e;
}
function ls(e, t) {
	t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : ar(e);
}
function us(e, t) {
	e.activeBranch = t;
	let { vnode: n, parentComponent: r } = e, i = t.el;
	for (; !i && t.component;) t = t.component.subTree, i = t.el;
	n.el = i, r && r.subTree === n && (r.vnode.el = i, Co(r, i));
}
function ds(e) {
	let t = e.props && e.props.suspensible;
	return t != null && t !== !1;
}
var fs = /* @__PURE__ */ Symbol.for("v-fgt"), ps = /* @__PURE__ */ Symbol.for("v-txt"), U = /* @__PURE__ */ Symbol.for("v-cmt"), ms = /* @__PURE__ */ Symbol.for("v-stc"), hs = [], gs = null;
function _s(e = !1) {
	hs.push(gs = e ? null : []);
}
function vs() {
	hs.pop(), gs = hs[hs.length - 1] || null;
}
var ys = 1;
function bs(e, t = !1) {
	ys += e, e < 0 && gs && t && (gs.hasOnce = !0);
}
function xs(e) {
	return e.dynamicChildren = ys > 0 ? gs || a : null, vs(), ys > 0 && gs && gs.push(e), e;
}
function Ss(e, t, n, r, i, a) {
	return xs(ks(e, t, n, r, i, a, !0));
}
function Cs(e, t, n, r, i) {
	return xs(W(e, t, n, r, i, !0));
}
function ws(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ts(e, t) {
	return e.type === t.type && e.key === t.key;
}
function Es(e) {}
var Ds = ({ key: e }) => e ?? null, Os = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : b(e) || /* @__PURE__ */ V(e) || y(e) ? {
	i: pr,
	r: e,
	k: t,
	f: !!n
} : e);
function ks(e, t = null, n = null, r = 0, i = null, a = e === fs ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Ds(t),
		ref: t && Os(t),
		scopeId: mr,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: pr
	};
	return s ? (Rs(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= b(n) ? 8 : 16), ys > 0 && !o && gs && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && gs.push(c), c;
}
var W = As;
function As(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === ma) && (e = U), ws(e)) {
		let r = Ms(e, t, !0);
		return n && Rs(r, n), ys > 0 && !a && gs && (r.shapeFlag & 6 ? gs[gs.indexOf(e)] = r : gs.push(r)), r.patchFlag = -2, r;
	}
	if (uc(e) && (e = e.__vccOpts), t) {
		t = js(t);
		let { class: e, style: n } = t;
		e && !b(e) && (t.class = ge(e)), S(n) && (/* @__PURE__ */ sn(n) && !m(n) && (n = u({}, n)), t.style = N(n));
	}
	let o = b(e) ? 1 : $o(e) ? 128 : Ir(e) ? 64 : S(e) ? 4 : y(e) ? 2 : 0;
	return ks(e, t, n, r, i, o, a, !0);
}
function js(e) {
	return e ? /* @__PURE__ */ sn(e) || Eo(e) ? u({}, e) : e : null;
}
function Ms(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? zs(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ds(l),
		ref: t && t.ref ? n && a ? m(a) ? a.concat(Os(t)) : [a, Os(t)] : Os(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== fs ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ms(e.ssContent),
		ssFallback: e.ssFallback && Ms(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && si(u, c.clone(u)), u;
}
function Ns(e = " ", t = 0) {
	return W(ps, null, e, t);
}
function Ps(e, t) {
	let n = W(ms, null, e);
	return n.staticCount = t, n;
}
function Fs(e = "", t = !1) {
	return t ? (_s(), Cs(U, null, e)) : W(U, null, e);
}
function Is(e) {
	return e == null || typeof e == "boolean" ? W(U) : m(e) ? W(fs, null, e.slice()) : ws(e) ? Ls(e) : W(ps, null, String(e));
}
function Ls(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ms(e);
}
function Rs(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (m(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Rs(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Eo(t) ? t._ctx = pr : r === 3 && pr && (pr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (y(t)) {
		if (r & 65) {
			Rs(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: pr
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Ns(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function zs(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = ge([t.class, r.class]));
		else if (e === "style") t.style = N([t.style, r.style]);
		else if (c(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(m(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !l(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Bs(e, t, n, r = null) {
	Gn(e, t, 7, [n, r]);
}
var Vs = ao(), Hs = 0;
function Us(e, t, n) {
	let r = e.type, a = (t ? t.appContext : e.appContext) || Vs, o = {
		uid: Hs++,
		vnode: e,
		type: r,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Le(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Mo(r, a),
		emitsOptions: mo(r, a),
		emit: null,
		emitted: null,
		propsDefaults: i,
		inheritAttrs: r.inheritAttrs,
		ctx: i,
		data: i,
		props: i,
		attrs: i,
		slots: i,
		refs: i,
		setupState: i,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = fo.bind(null, o), e.ce && e.ce(o), o;
}
var Ws = null, Gs = () => Ws || pr, Ks, qs;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ks = t("__VUE_INSTANCE_SETTERS__", (e) => Ws = e), qs = t("__VUE_SSR_SETTERS__", (e) => Zs = e);
}
var Js = (e) => {
	let t = Ws;
	return Ks(e), e.scope.on(), () => {
		e.scope.off(), Ks(t);
	};
}, Ys = () => {
	Ws && Ws.scope.off(), Ks(null);
};
function Xs(e) {
	return e.vnode.shapeFlag & 4;
}
var Zs = !1;
function Qs(e, t = !1, n = !1) {
	t && qs(t);
	let { props: r, children: i } = e.vnode, a = Xs(e);
	Do(e, r, a, t), Bo(e, i, n || t);
	let o = a ? $s(e, t) : void 0;
	return t && qs(!1), o;
}
function $s(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Da);
	let { setup: r } = n;
	if (r) {
		it();
		let n = e.setupContext = r.length > 1 ? sc(e) : null, i = Js(e), a = Wn(r, e, 0, [e.props, n]), o = C(a);
		if (at(), i(), (o || e.sp) && !Vi(e) && di(e), o) {
			if (a.then(Ys, Ys), t) return a.then((n) => {
				qs(!0);
				try {
					ec(e, n, t);
				} finally {
					qs(!1);
				}
			}).catch((t) => {
				Kn(t, e, 0);
			});
			e.asyncDep = a;
		} else ec(e, a, t);
	} else ac(e, t);
}
function ec(e, t, n) {
	y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : S(t) && (e.setupState = yn(t)), ac(e, n);
}
var tc, nc;
function rc(e) {
	tc = e, nc = (e) => {
		e.render._rc && (e.withProxy = new Proxy(e.ctx, Oa));
	};
}
var ic = () => !tc;
function ac(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && tc && !r.render) {
			let t = r.template || Ya(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r, s = u(u({
					isCustomElement: n,
					delimiters: a
				}, i), o);
				r.render = tc(t, s);
			}
		}
		e.render = r.render || o, nc && nc(e);
	}
	{
		let t = Js(e);
		it();
		try {
			Ga(e);
		} finally {
			at(), t();
		}
	}
}
var oc = { get(e, t) {
	return z(e, "get", ""), e[t];
} };
function sc(e) {
	return {
		attrs: new Proxy(e.attrs, oc),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function cc(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(yn(cn(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Ta) return Ta[n](e);
		},
		has(e, t) {
			return t in e || t in Ta;
		}
	}) : e.proxy;
}
function lc(e, t = !0) {
	return y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function uc(e) {
	return y(e) && "__vccOpts" in e;
}
var dc = (e, t) => /* @__PURE__ */ On(e, t, Zs);
function fc(e, t, n) {
	try {
		bs(-1);
		let r = arguments.length;
		return r === 2 ? S(t) && !m(t) ? ws(t) ? W(e, null, [t]) : W(e, t) : W(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ws(n) && (n = [n]), W(e, t, n));
	} finally {
		bs(1);
	}
}
function pc() {}
function mc(e, t, n, r) {
	let i = n[r];
	if (i && hc(i, e)) return i;
	let a = t();
	return a.memo = e.slice(), a.cacheIndex = r, n[r] = a;
}
function hc(e, t) {
	let n = e.memo;
	if (n.length != t.length) return !1;
	for (let e = 0; e < n.length; e++) if (M(n[e], t[e])) return !1;
	return ys > 0 && gs && gs.push(e), !0;
}
var gc = "3.5.41", _c = o, vc = Un, yc = ur, bc = fr, xc = {
	createComponentInstance: Us,
	setupComponent: Qs,
	renderComponentRoot: go,
	setCurrentRenderingInstance: hr,
	isVNode: ws,
	normalizeVNode: Is,
	getComponentPublicInstance: cc,
	ensureValidVNode: Sa,
	pushWarningContext: zn,
	popWarningContext: Bn
}, Sc = /* @__PURE__ */ e({
	BaseTransition: () => ni,
	BaseTransitionPropsValidators: () => Qr,
	Comment: () => U,
	DeprecationTypes: () => null,
	EffectScope: () => Le,
	ErrorCodes: () => Hn,
	ErrorTypeStrings: () => vc,
	Fragment: () => fs,
	KeepAlive: () => Gi,
	ReactiveEffect: () => He,
	Static: () => ms,
	Suspense: () => ts,
	Teleport: () => Gr,
	Text: () => ps,
	TrackOpTypes: () => kn,
	Transition: () => Ic,
	TransitionGroup: () => Gl,
	TriggerOpTypes: () => An,
	VueElement: () => Ll,
	assertNumber: () => Vn,
	callWithAsyncErrorHandling: () => Gn,
	callWithErrorHandling: () => Wn,
	camelize: () => k,
	capitalize: () => ae,
	cloneVNode: () => Ms,
	compatUtils: () => null,
	computed: () => dc,
	createApp: () => Du,
	createBlock: () => Cs,
	createCommentVNode: () => Fs,
	createElementBlock: () => Ss,
	createElementVNode: () => ks,
	createHydrationRenderer: () => Uo,
	createPropsRestProxy: () => Ha,
	createRenderer: () => Ho,
	createSSRApp: () => Ou,
	createSlots: () => ba,
	createStaticVNode: () => Ps,
	createTextVNode: () => Ns,
	createVNode: () => W,
	customRef: () => xn,
	defineAsyncComponent: () => Hi,
	defineComponent: () => li,
	defineCustomElement: () => Pl,
	defineEmits: () => Aa,
	defineExpose: () => ja,
	defineModel: () => Pa,
	defineOptions: () => Ma,
	defineProps: () => ka,
	defineSSRCustomElement: () => Fl,
	defineSlots: () => Na,
	devtools: () => yc,
	effect: () => tt,
	effectScope: () => Re,
	getCurrentInstance: () => Gs,
	getCurrentScope: () => ze,
	getCurrentWatcher: () => Pn,
	getTransitionRawChildren: () => ci,
	guardReactiveProps: () => js,
	h: () => fc,
	handleError: () => Kn,
	hasInjectionContext: () => wr,
	hydrate: () => Eu,
	hydrateOnIdle: () => Fi,
	hydrateOnInteraction: () => zi,
	hydrateOnMediaQuery: () => Ri,
	hydrateOnVisible: () => Li,
	initCustomFormatter: () => pc,
	initDirectivesForSSR: () => Mu,
	inject: () => Cr,
	isMemoSame: () => hc,
	isProxy: () => sn,
	isReactive: () => rn,
	isReadonly: () => an,
	isRef: () => V,
	isRuntimeOnly: () => ic,
	isShallow: () => on,
	isVNode: () => ws,
	markRaw: () => cn,
	mergeDefaults: () => Ba,
	mergeModels: () => Va,
	mergeProps: () => zs,
	nextTick: () => tr,
	nodeOps: () => Ac,
	normalizeClass: () => ge,
	normalizeProps: () => _e,
	normalizeStyle: () => N,
	onActivated: () => qi,
	onBeforeMount: () => ta,
	onBeforeUnmount: () => aa,
	onBeforeUpdate: () => ra,
	onDeactivated: () => Ji,
	onErrorCaptured: () => ua,
	onMounted: () => na,
	onRenderTracked: () => la,
	onRenderTriggered: () => ca,
	onScopeDispose: () => Be,
	onServerPrefetch: () => sa,
	onUnmounted: () => oa,
	onUpdated: () => ia,
	onWatcherCleanup: () => Fn,
	openBlock: () => _s,
	patchProp: () => Al,
	popScopeId: () => _r,
	provide: () => Sr,
	proxyRefs: () => yn,
	pushScopeId: () => gr,
	queuePostFlushCb: () => ar,
	reactive: () => Qt,
	readonly: () => en,
	ref: () => dn,
	registerRuntimeCompiler: () => rc,
	render: () => Tu,
	renderList: () => ya,
	renderSlot: () => xa,
	resolveComponent: () => pa,
	resolveDirective: () => ga,
	resolveDynamicComponent: () => ha,
	resolveFilter: () => null,
	resolveTransitionHooks: () => ii,
	setBlockTracking: () => bs,
	setDevtoolsHook: () => bc,
	setTransitionHooks: () => si,
	shallowReactive: () => $t,
	shallowReadonly: () => tn,
	shallowRef: () => fn,
	ssrContextKey: () => Tr,
	ssrUtils: () => xc,
	stop: () => nt,
	toDisplayString: () => Ne,
	toHandlerKey: () => j,
	toHandlers: () => Ca,
	toRaw: () => B,
	toRef: () => Tn,
	toRefs: () => Sn,
	toValue: () => _n,
	transformVNodeArgs: () => Es,
	triggerRef: () => hn,
	unref: () => gn,
	useAttrs: () => La,
	useCssModule: () => Bl,
	useCssVars: () => il,
	useHost: () => Rl,
	useId: () => ui,
	useModel: () => lo,
	useSSRContext: () => Er,
	useShadowRoot: () => zl,
	useSlots: () => Ia,
	useTemplateRef: () => fi,
	useTransitionState: () => Xr,
	vModelCheckbox: () => iu,
	vModelDynamic: () => du,
	vModelRadio: () => ou,
	vModelSelect: () => su,
	vModelText: () => ru,
	vShow: () => el,
	version: () => gc,
	warn: () => _c,
	watch: () => Ar,
	watchEffect: () => Dr,
	watchPostEffect: () => Or,
	watchSyncEffect: () => kr,
	withAsyncContext: () => Ua,
	withCtx: () => yr,
	withDefaults: () => Fa,
	withDirectives: () => br,
	withKeys: () => yu,
	withMemo: () => mc,
	withModifiers: () => _u,
	withScopeId: () => vr
}), Cc = void 0, wc = typeof window < "u" && window.trustedTypes;
if (wc) try {
	Cc = /* @__PURE__ */ wc.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Tc = Cc ? (e) => Cc.createHTML(e) : (e) => e, Ec = "http://www.w3.org/2000/svg", Dc = "http://www.w3.org/1998/Math/MathML", Oc = typeof document < "u" ? document : null, kc = Oc && /* @__PURE__ */ Oc.createElement("template"), Ac = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Oc.createElementNS(Ec, e) : t === "mathml" ? Oc.createElementNS(Dc, e) : n ? Oc.createElement(e, { is: n }) : Oc.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Oc.createTextNode(e),
	createComment: (e) => Oc.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Oc.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			kc.innerHTML = Tc(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = kc.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, jc = "transition", Mc = "animation", Nc = /* @__PURE__ */ Symbol("_vtc"), Pc = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, Fc = /* @__PURE__ */ u({}, Qr, Pc), Ic = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = Fc, e))((e, { slots: t }) => fc(ni, zc(e), t)), Lc = (e, t = []) => {
	m(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, Rc = (e) => e ? m(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function zc(e) {
	let t = {};
	for (let n in e) n in Pc || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: l = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = Bc(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, Uc(e, t ? d : s), Uc(e, t ? l : o), n && n();
	}, D = (e, t) => {
		e._isLeaving = !1, Uc(e, f), Uc(e, m), Uc(e, p), t && t();
	}, O = (e) => (t, n) => {
		let i = e ? w : y, o = () => E(t, e, n);
		Lc(i, [t, o]), Wc(() => {
			Uc(t, e ? c : a), Hc(t, e ? d : s), Rc(i) || Kc(t, r, g, o);
		});
	};
	return u(t, {
		onBeforeEnter(e) {
			Lc(v, [e]), Hc(e, a), Hc(e, o);
		},
		onBeforeAppear(e) {
			Lc(C, [e]), Hc(e, c), Hc(e, l);
		},
		onEnter: O(!1),
		onAppear: O(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => D(e, t);
			Hc(e, f), e._enterCancelled ? (Hc(e, p), Xc(e)) : (Xc(e), Hc(e, p)), Wc(() => {
				e._isLeaving && (Uc(e, f), Hc(e, m), Rc(x) || Kc(e, r, _, n));
			}), Lc(x, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), Lc(b, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), Lc(T, [e]);
		},
		onLeaveCancelled(e) {
			D(e), Lc(S, [e]);
		}
	});
}
function Bc(e) {
	if (e == null) return null;
	if (S(e)) return [Vc(e.enter), Vc(e.leave)];
	{
		let t = Vc(e);
		return [t, t];
	}
}
function Vc(e) {
	return le(e);
}
function Hc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[Nc] || (e[Nc] = /* @__PURE__ */ new Set())).add(t);
}
function Uc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[Nc];
	n && (n.delete(t), n.size || (e[Nc] = void 0));
}
function Wc(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var Gc = 0;
function Kc(e, t, n, r) {
	let i = e._endId = ++Gc, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = qc(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function qc(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${jc}Delay`), a = r(`${jc}Duration`), o = Jc(i, a), s = r(`${Mc}Delay`), c = r(`${Mc}Duration`), l = Jc(s, c), u = null, d = 0, f = 0;
	t === jc ? o > 0 && (u = jc, d = o, f = a.length) : t === Mc ? l > 0 && (u = Mc, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? jc : Mc : null, f = u ? u === jc ? a.length : c.length : 0);
	let p = u === jc && /\b(?:transform|all)(?:,|$)/.test(r(`${jc}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function Jc(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => Yc(t) + Yc(e[n])));
}
function Yc(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Xc(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Zc(e, t, n) {
	let r = e[Nc];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Qc = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), el = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Qc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : tl(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), tl(e, !0), r.enter(e)) : r.leave(e, () => {
			tl(e, !1);
		}) : tl(e, t));
	},
	beforeUnmount(e, { value: t }) {
		tl(e, t);
	}
};
function tl(e, t) {
	e.style.display = t ? e[Qc] : "none", e[$c] = !t;
}
function nl() {
	el.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var rl = /* @__PURE__ */ Symbol("");
function il(e) {
	let t = Gs();
	if (!t) return;
	let n = t.ut = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => ol(e, n));
	}, r = () => {
		let r = e(t.proxy);
		t.ce ? ol(t.ce, r) : al(t.subTree, r), n(r);
	};
	ra(() => {
		ar(r);
	}), na(() => {
		Ar(r, o, { flush: "post" });
		let e = new MutationObserver(r);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), oa(() => e.disconnect());
	});
}
function al(e, t) {
	if (e.shapeFlag & 128) {
		let n = e.suspense;
		e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
			al(n.activeBranch, t);
		});
	}
	for (; e.component;) e = e.component.subTree;
	if (e.shapeFlag & 1 && e.el) ol(e.el, t);
	else if (e.type === fs) e.children.forEach((e) => al(e, t));
	else if (e.type === ms) {
		let { el: n, anchor: r } = e;
		for (; n && (ol(n, t), n !== r);) n = n.nextSibling;
	}
}
function ol(e, t) {
	if (e.nodeType === 1) {
		let n = e.style, r = "";
		for (let e in t) {
			let i = Ie(t[e]);
			n.setProperty(`--${e}`, i), r += `--${e}: ${i};`;
		}
		n[rl] = r;
	}
}
var sl = /(?:^|;)\s*display\s*:/;
function cl(e, t, n) {
	let r = e.style, i = b(n), a = !1;
	if (n && !i) {
		if (t) {
			if (b(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? ul(r, t, "");
			}
			else for (let e in t) n[e] ?? ul(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? ul(r, i, "") : ml(e, i, !b(t) && t ? t[i] : void 0, o) || ul(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[rl];
			e && (n += ";" + e), r.cssText = n, a = sl.test(n);
		}
	} else t && e.removeAttribute("style");
	Qc in e && (e[Qc] = a ? r.display : "", e[$c] && (r.display = "none"));
}
var ll = /\s*!important$/;
function ul(e, t, n) {
	if (m(n)) n.forEach((n) => ul(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = pl(e, t);
		ll.test(n) ? e.setProperty(A(r), n.replace(ll, ""), "important") : e[r] = n;
	}
}
var dl = [
	"Webkit",
	"Moz",
	"ms"
], fl = {};
function pl(e, t) {
	let n = fl[t];
	if (n) return n;
	let r = k(t);
	if (r !== "filter" && r in e) return fl[t] = r;
	r = ae(r);
	for (let n = 0; n < dl.length; n++) {
		let i = dl[n] + r;
		if (i in e) return fl[t] = i;
	}
	return t;
}
function ml(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && b(r) && n === r;
}
var hl = "http://www.w3.org/1999/xlink";
function gl(e, t, n, r, i, a = De(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(hl, t.slice(6, t.length)) : e.setAttributeNS(hl, t, n) : n == null || a && !Oe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : x(n) ? String(n) : n);
}
function _l(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Tc(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = Oe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function vl(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function yl(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var bl = /* @__PURE__ */ Symbol("_vei");
function xl(e, t, n, r, i = null) {
	let a = e[bl] || (e[bl] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = wl(t);
		r ? vl(e, n, a[t] = Ol(r, i), s) : o && (yl(e, n, o, s), a[t] = void 0);
	}
}
var Sl = /(Once|Passive|Capture)$/, Cl = /^on:?(?:Once|Passive|Capture)$/;
function wl(e) {
	let t, n;
	for (; (n = e.match(Sl)) && !Cl.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : A(e.slice(2)), t];
}
var Tl = 0, El = /* @__PURE__ */ Promise.resolve(), Dl = () => Tl ||= (El.then(() => Tl = 0), Date.now());
function Ol(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (m(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && Gn(e, t, 5, a);
			}
		} else Gn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Dl(), n;
}
var kl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Al = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Zc(e, r, o) : t === "style" ? cl(e, n, r) : c(t) ? l(t) || xl(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jl(e, t, r, o)) ? (_l(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && gl(e, t, r, o, a, t !== "value")) : e._isVueCE && (Ml(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !b(r))) ? _l(e, k(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), gl(e, t, r, o));
};
function jl(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && kl(t) && y(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return kl(t) && b(n) ? !1 : t in e;
}
function Ml(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = k(t);
	return Array.isArray(n) ? n.some((e) => k(e) === r) : Object.keys(n).some((e) => k(e) === r);
}
var Nl = {};
// @__NO_SIDE_EFFECTS__
function Pl(e, t, n) {
	let r = /* @__PURE__ */ li(e, t);
	D(r) && (r = u({}, r, t));
	class i extends Ll {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var Fl = /* @__NO_SIDE_EFFECTS__ */ ((e, t) => /* @__PURE__ */ Pl(e, t, Ou)), Il = typeof HTMLElement < "u" ? HTMLElement : class {}, Ll = class e extends Il {
	constructor(e, t = {}, n = Du) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== Du ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(u({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, tr(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return this._pendingResolve;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !m(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = le(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[k(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._mount(e);
		}, t = this._def.__asyncLoader;
		if (t) return this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}), this._pendingResolve;
		e(this._def);
	}
	_mount(e) {
		this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) p(this, e) || Object.defineProperty(this, e, { get: () => gn(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = m(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(k)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : Nl, r = k(e);
		t && this._numberProps && this._numberProps[r] && (n = le(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === Nl ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(A(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(A(e), t + "") : t || this.removeAttribute(A(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), Tu(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = W(this._def, u(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, D(t[0]) ? u({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), A(e) !== e && t(A(e), n);
			}, this._setParent();
		}), t;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {}
};
function Rl(e) {
	let t = Gs();
	return t && t.ce || null;
}
function zl() {
	let e = Rl();
	return e && e.shadowRoot;
}
function Bl(e = "$style") {
	{
		let t = Gs();
		if (!t) return i;
		let n = t.type.__cssModules;
		return n && n[e] || i;
	}
}
var Vl = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ Symbol("_moveCb"), Wl = /* @__PURE__ */ Symbol("_enterCb"), Gl = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ u({}, Fc, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = Gs(), r = Xr(), i, a;
		return ia(() => {
			if (!i.length) return;
			let t = e.moveClass || `${e.name || "v"}-move`;
			if (!Xl(i[0].el, n.vnode.el, t)) {
				i = [];
				return;
			}
			i.forEach(Kl), i.forEach(ql);
			let r = i.filter(Jl);
			Xc(n.vnode.el), r.forEach((e) => {
				let n = e.el, r = n.style;
				Hc(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[Ul] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[Ul] = null, Uc(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let o = /* @__PURE__ */ B(e), s = zc(o), c = o.tag || fs;
			if (i = [], a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && !t.el[$c] && (i.push(t), si(t, ii(t, s, r, n)), Vl.set(t, Yl(t.el)));
			}
			a = t.default ? ci(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key != null && si(t, ii(t, s, r, n));
			}
			return W(c, null, a);
		};
	}
});
function Kl(e) {
	let t = e.el;
	t[Ul] && t[Ul](), t[Wl] && t[Wl]();
}
function ql(e) {
	Hl.set(e, Yl(e.el));
}
function Jl(e) {
	let t = Vl.get(e), n = Hl.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), (!Number.isFinite(o) || o === 0) && (o = 1), (!Number.isFinite(s) || s === 0) && (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function Yl(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top
	};
}
function Xl(e, t, n) {
	let r = e.cloneNode(), i = e[Nc];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = qc(r);
	return a.removeChild(r), o;
}
var Zl = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return m(t) ? (e) => oe(t, e) : t;
};
function Ql(e) {
	e.target.composing = !0;
}
function $l(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var eu = /* @__PURE__ */ Symbol("_assign"), tu = /* @__PURE__ */ Symbol("_initialValue");
function nu(e, t, n) {
	return t && (e = e.trim()), n && (e = ce(e)), e;
}
var ru = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[tu] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[tu] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[eu] = Zl(i);
		let a = r || i.props && i.props.type === "number";
		vl(e, t ? "change" : "input", (t) => {
			t.target.composing || e[eu](nu(e.value, n, a));
		}), (n || a) && vl(e, "change", () => {
			e.value = nu(e.value, n, a);
		}), t || (vl(e, "compositionstart", Ql), vl(e, "compositionend", $l), vl(e, "change", $l));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[tu];
		delete e[tu], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[eu](nu(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[eu] = Zl(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ce(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, iu = {
	deep: !0,
	created(e, t, n) {
		e[eu] = Zl(n), vl(e, "change", () => {
			let t = e._modelValue, n = lu(e), r = e.checked, i = e[eu];
			if (m(t)) {
				let e = je(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (g(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(uu(e, r));
		});
	},
	mounted: au,
	beforeUpdate(e, t, n) {
		e[eu] = Zl(n), au(e, t, n);
	}
};
function au(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (m(t)) i = je(t, r.props.value) > -1;
	else if (g(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ae(t, uu(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var ou = {
	created(e, { value: t }, n) {
		e.checked = Ae(t, n.props.value), e[eu] = Zl(n), vl(e, "change", () => {
			e[eu](lu(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[eu] = Zl(r), t !== n && (e.checked = Ae(t, r.props.value));
	}
}, su = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, vl(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ce(lu(e)) : lu(e));
			e[eu](e.multiple ? g(e._modelValue) ? new Set(t) : t : t[0]), e._assigning = !0, tr(() => {
				e._assigning = !1;
			});
		}), e[eu] = Zl(r);
	},
	mounted(e, { value: t }) {
		cu(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[eu] = Zl(n);
	},
	updated(e, { value: t }) {
		e._assigning || cu(e, t);
	}
};
function cu(e, t) {
	let n = e.multiple, r = m(t);
	if (!(n && !r && !g(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = lu(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : je(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (Ae(lu(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function lu(e) {
	return "_value" in e ? e._value : e.value;
}
function uu(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var du = {
	created(e, t, n) {
		pu(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		pu(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		pu(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		pu(e, t, n, r, "updated");
	}
};
function fu(e, t) {
	switch (e) {
		case "SELECT": return su;
		case "TEXTAREA": return ru;
		default: switch (t) {
			case "checkbox": return iu;
			case "radio": return ou;
			default: return ru;
		}
	}
}
function pu(e, t, n, r, i) {
	let a = fu(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function mu() {
	ru.getSSRProps = ({ value: e }) => ({ value: e }), ou.getSSRProps = ({ value: e }, t) => {
		if (t.props && Ae(t.props.value, e)) return { checked: !0 };
	}, iu.getSSRProps = ({ value: e }, t) => {
		if (m(e)) {
			if (t.props && je(e, t.props.value) > -1) return { checked: !0 };
		} else if (g(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, du.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = fu(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var hu = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], gu = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => hu.some((n) => e[`${n}Key`] && !t.includes(n))
}, _u = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = gu[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, vu = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, yu = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = A(n.key);
		if (t.some((e) => e === r || vu[e] === r)) return e(n);
	}));
}, bu = /* @__PURE__ */ u({ patchProp: Al }, Ac), xu, Su = !1;
function Cu() {
	return xu ||= Ho(bu);
}
function wu() {
	return xu = Su ? xu : Uo(bu), Su = !0, xu;
}
var Tu = ((...e) => {
	Cu().render(...e);
}), Eu = ((...e) => {
	wu().hydrate(...e);
}), Du = ((...e) => {
	let t = Cu().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Au(e);
		if (!r) return;
		let i = t._component;
		!y(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, ku(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
}), Ou = ((...e) => {
	let t = wu().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let t = Au(e);
		if (t) return n(t, !0, ku(t));
	}, t;
});
function ku(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Au(e) {
	return b(e) ? document.querySelector(e) : e;
}
var ju = !1, Mu = () => {
	ju || (ju = !0, mu(), nl());
}, Nu = /* @__PURE__ */ Symbol(""), Pu = /* @__PURE__ */ Symbol(""), Fu = /* @__PURE__ */ Symbol(""), Iu = /* @__PURE__ */ Symbol(""), Lu = /* @__PURE__ */ Symbol(""), Ru = /* @__PURE__ */ Symbol(""), zu = /* @__PURE__ */ Symbol(""), Bu = /* @__PURE__ */ Symbol(""), Vu = /* @__PURE__ */ Symbol(""), Hu = /* @__PURE__ */ Symbol(""), Uu = /* @__PURE__ */ Symbol(""), Wu = /* @__PURE__ */ Symbol(""), Gu = /* @__PURE__ */ Symbol(""), Ku = /* @__PURE__ */ Symbol(""), qu = /* @__PURE__ */ Symbol(""), Ju = /* @__PURE__ */ Symbol(""), Yu = /* @__PURE__ */ Symbol(""), Xu = /* @__PURE__ */ Symbol(""), Zu = /* @__PURE__ */ Symbol(""), Qu = /* @__PURE__ */ Symbol(""), $u = /* @__PURE__ */ Symbol(""), ed = /* @__PURE__ */ Symbol(""), td = /* @__PURE__ */ Symbol(""), nd = /* @__PURE__ */ Symbol(""), rd = /* @__PURE__ */ Symbol(""), id = /* @__PURE__ */ Symbol(""), ad = /* @__PURE__ */ Symbol(""), od = /* @__PURE__ */ Symbol(""), sd = /* @__PURE__ */ Symbol(""), cd = /* @__PURE__ */ Symbol(""), ld = /* @__PURE__ */ Symbol(""), ud = /* @__PURE__ */ Symbol(""), dd = /* @__PURE__ */ Symbol(""), fd = /* @__PURE__ */ Symbol(""), pd = /* @__PURE__ */ Symbol(""), md = /* @__PURE__ */ Symbol(""), hd = /* @__PURE__ */ Symbol(""), gd = /* @__PURE__ */ Symbol(""), _d = /* @__PURE__ */ Symbol(""), vd = {
	[Nu]: "Fragment",
	[Pu]: "Teleport",
	[Fu]: "Suspense",
	[Iu]: "KeepAlive",
	[Lu]: "BaseTransition",
	[Ru]: "openBlock",
	[zu]: "createBlock",
	[Bu]: "createElementBlock",
	[Vu]: "createVNode",
	[Hu]: "createElementVNode",
	[Uu]: "createCommentVNode",
	[Wu]: "createTextVNode",
	[Gu]: "createStaticVNode",
	[Ku]: "resolveComponent",
	[qu]: "resolveDynamicComponent",
	[Ju]: "resolveDirective",
	[Yu]: "resolveFilter",
	[Xu]: "withDirectives",
	[Zu]: "renderList",
	[Qu]: "renderSlot",
	[$u]: "createSlots",
	[ed]: "toDisplayString",
	[td]: "mergeProps",
	[nd]: "normalizeClass",
	[rd]: "normalizeStyle",
	[id]: "normalizeProps",
	[ad]: "guardReactiveProps",
	[od]: "toHandlers",
	[sd]: "camelize",
	[cd]: "capitalize",
	[ld]: "toHandlerKey",
	[ud]: "setBlockTracking",
	[dd]: "pushScopeId",
	[fd]: "popScopeId",
	[pd]: "withCtx",
	[md]: "unref",
	[hd]: "isRef",
	[gd]: "withMemo",
	[_d]: "isMemoSame"
};
function yd(e) {
	Object.getOwnPropertySymbols(e).forEach((t) => {
		vd[t] = e[t];
	});
}
var bd = {
	start: {
		line: 1,
		column: 1,
		offset: 0
	},
	end: {
		line: 1,
		column: 1,
		offset: 0
	},
	source: ""
};
function xd(e, t = "") {
	return {
		type: 0,
		source: t,
		children: e,
		helpers: /* @__PURE__ */ new Set(),
		components: [],
		directives: [],
		hoists: [],
		imports: [],
		cached: [],
		temps: 0,
		codegenNode: void 0,
		loc: bd
	};
}
function Sd(e, t, n, r, i, a, o, s = !1, c = !1, l = !1, u = bd) {
	return e && (s ? (e.helper(Ru), e.helper(Md(e.inSSR, l))) : e.helper(jd(e.inSSR, l)), o && e.helper(Xu)), {
		type: 13,
		tag: t,
		props: n,
		children: r,
		patchFlag: i,
		dynamicProps: a,
		directives: o,
		isBlock: s,
		disableTracking: c,
		isComponent: l,
		loc: u
	};
}
function Cd(e, t = bd) {
	return {
		type: 17,
		loc: t,
		elements: e
	};
}
function wd(e, t = bd) {
	return {
		type: 15,
		loc: t,
		properties: e
	};
}
function G(e, t) {
	return {
		type: 16,
		loc: bd,
		key: b(e) ? K(e, !0) : e,
		value: t
	};
}
function K(e, t = !1, n = bd, r = 0) {
	return {
		type: 4,
		loc: n,
		content: e,
		isStatic: t,
		constType: t ? 3 : r
	};
}
function Td(e, t = bd) {
	return {
		type: 8,
		loc: t,
		children: e
	};
}
function Ed(e, t = [], n = bd) {
	return {
		type: 14,
		loc: n,
		callee: e,
		arguments: t
	};
}
function Dd(e, t = void 0, n = !1, r = !1, i = bd) {
	return {
		type: 18,
		params: e,
		returns: t,
		newline: n,
		isSlot: r,
		loc: i
	};
}
function Od(e, t, n, r = !0) {
	return {
		type: 19,
		test: e,
		consequent: t,
		alternate: n,
		newline: r,
		loc: bd
	};
}
function kd(e, t, n = !1, r = !1) {
	return {
		type: 20,
		index: e,
		value: t,
		needPauseTracking: n,
		inVOnce: r,
		needArraySpread: !1,
		loc: bd
	};
}
function Ad(e) {
	return {
		type: 21,
		body: e,
		loc: bd
	};
}
function jd(e, t) {
	return e || t ? Vu : Hu;
}
function Md(e, t) {
	return e || t ? zu : Bu;
}
function Nd(e, { helper: t, removeHelper: n, inSSR: r }) {
	e.isBlock || (e.isBlock = !0, n(jd(r, e.isComponent)), t(Ru), t(Md(r, e.isComponent)));
}
var Pd = new Uint8Array([123, 123]), Fd = new Uint8Array([125, 125]);
function Id(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ld(e) {
	return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function Rd(e) {
	return e === 47 || e === 62 || Ld(e);
}
function zd(e) {
	let t = new Uint8Array(e.length);
	for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
	return t;
}
var Bd = {
	Cdata: new Uint8Array([
		67,
		68,
		65,
		84,
		65,
		91
	]),
	CdataEnd: new Uint8Array([
		93,
		93,
		62
	]),
	CommentEnd: new Uint8Array([
		45,
		45,
		62
	]),
	ScriptEnd: new Uint8Array([
		60,
		47,
		115,
		99,
		114,
		105,
		112,
		116
	]),
	StyleEnd: new Uint8Array([
		60,
		47,
		115,
		116,
		121,
		108,
		101
	]),
	TitleEnd: new Uint8Array([
		60,
		47,
		116,
		105,
		116,
		108,
		101
	]),
	TextareaEnd: new Uint8Array([
		60,
		47,
		116,
		101,
		120,
		116,
		97,
		114,
		101,
		97
	])
}, Vd = class {
	constructor(e, t) {
		this.stack = e, this.cbs = t, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = Pd, this.delimiterClose = Fd, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
	}
	get inSFCRoot() {
		return this.mode === 2 && this.stack.length === 0;
	}
	reset() {
		this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = Pd, this.delimiterClose = Fd;
	}
	getPos(e) {
		let t = 1, n = e + 1, r = this.newlines.length, i = -1;
		if (r > 100) {
			let t = -1, n = r;
			for (; t + 1 < n;) {
				let r = t + n >>> 1;
				this.newlines[r] < e ? t = r : n = r;
			}
			i = t;
		} else for (let t = r - 1; t >= 0; t--) if (e > this.newlines[t]) {
			i = t;
			break;
		}
		return i >= 0 && (t = i + 2, n = e - this.newlines[i]), {
			column: n,
			line: t,
			offset: e
		};
	}
	peek() {
		return this.buffer.charCodeAt(this.index + 1);
	}
	stateText(e) {
		e === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && e === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e));
	}
	stateInterpolationOpen(e) {
		if (e === this.delimiterOpen[this.delimiterIndex]) {
			if (this.delimiterIndex === this.delimiterOpen.length - 1) {
				let e = this.index + 1 - this.delimiterOpen.length;
				e > this.sectionStart && this.cbs.ontext(this.sectionStart, e), this.state = 3, this.sectionStart = e;
			} else this.delimiterIndex++;
		} else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(e)) : (this.state = 1, this.stateText(e));
	}
	stateInterpolation(e) {
		e === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(e));
	}
	stateInterpolationClose(e) {
		e === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.state = this.inRCDATA ? 32 : 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(e));
	}
	stateSpecialStartSequence(e) {
		let t = this.sequenceIndex === this.currentSequence.length;
		if (!(t ? Rd(e) : (e | 32) === this.currentSequence[this.sequenceIndex])) this.inRCDATA = !1;
		else if (!t) {
			this.sequenceIndex++;
			return;
		}
		this.sequenceIndex = 0, this.state = 6, this.stateInTagName(e);
	}
	stateInRCDATA(e) {
		if (this.sequenceIndex === this.currentSequence.length) {
			if (e === 62 || Ld(e)) {
				let t = this.index - this.currentSequence.length;
				if (this.sectionStart < t) {
					let e = this.index;
					this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = e;
				}
				this.sectionStart = t + 2, this.stateInClosingTagName(e), this.inRCDATA = !1;
				return;
			}
			this.sequenceIndex = 0;
		}
		(e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Bd.TitleEnd || this.currentSequence === Bd.TextareaEnd && !this.inSFCRoot ? !this.inVPre && e === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(e === 60);
	}
	stateCDATASequence(e) {
		e === Bd.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Bd.Cdata.length && (this.state = 28, this.currentSequence = Bd.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(e));
	}
	fastForwardTo(e) {
		for (; ++this.index < this.buffer.length;) {
			let t = this.buffer.charCodeAt(this.index);
			if (t === 10 && this.newlines.push(this.index), t === e) return !0;
		}
		return this.index = this.buffer.length - 1, !1;
	}
	stateInCommentLike(e) {
		e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Bd.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
	}
	startSpecial(e, t) {
		this.enterRCDATA(e, t), this.state = 31;
	}
	enterRCDATA(e, t) {
		this.inRCDATA = !0, this.currentSequence = e, this.sequenceIndex = t;
	}
	stateBeforeTagName(e) {
		e === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : e === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : Id(e) ? (this.sectionStart = this.index, this.state = this.mode === 0 ? 6 : this.inSFCRoot ? 34 : this.inXML ? 6 : e === 116 ? 30 : e === 115 ? 29 : 6) : e === 47 ? this.state = 8 : (this.state = 1, this.stateText(e));
	}
	stateInTagName(e) {
		Rd(e) && this.handleTagName(e);
	}
	stateInSFCRootTagName(e) {
		if (Rd(e)) {
			let t = this.buffer.slice(this.sectionStart, this.index);
			t !== "template" && this.enterRCDATA(zd("</" + t), 0), this.handleTagName(e);
		}
	}
	handleTagName(e) {
		this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e);
	}
	stateBeforeClosingTagName(e) {
		Ld(e) || (e === 62 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = Id(e) ? 9 : 27, this.sectionStart = this.index));
	}
	stateInClosingTagName(e) {
		(e === 62 || Ld(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(e));
	}
	stateAfterClosingTagName(e) {
		e === 62 && (this.state = 1, this.sectionStart = this.index + 1);
	}
	stateBeforeAttrName(e) {
		e === 62 ? (this.cbs.onopentagend(this.index), this.state = this.inRCDATA ? 32 : 1, this.sectionStart = this.index + 1) : e === 47 ? this.state = 7 : e === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Ld(e) || this.handleAttrStart(e);
	}
	handleAttrStart(e) {
		e === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : e === 46 || e === 58 || e === 64 || e === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
	}
	stateInSelfClosingTag(e) {
		e === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Ld(e) || (this.state = 11, this.stateBeforeAttrName(e));
	}
	stateInAttrName(e) {
		(e === 61 || Rd(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(e));
	}
	stateInDirName(e) {
		e === 61 || Rd(e) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : e === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
	}
	stateInDirArg(e) {
		e === 61 || Rd(e) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 91 ? this.state = 15 : e === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
	}
	stateInDynamicDirArg(e) {
		e === 93 ? this.state = 14 : (e === 61 || Rd(e)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(e));
	}
	stateInDirModifier(e) {
		e === 61 || Rd(e) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
	}
	handleAttrNameEnd(e) {
		this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(e);
	}
	stateAfterAttrName(e) {
		e === 61 ? this.state = 18 : e === 47 || e === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e)) : Ld(e) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(e));
	}
	stateBeforeAttrValue(e) {
		e === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : e === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Ld(e) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(e));
	}
	handleInAttrValue(e, t) {
		(e === t || this.fastForwardTo(t)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === 34 ? 3 : 2, this.index + 1), this.state = 11);
	}
	stateInAttrValueDoubleQuotes(e) {
		this.handleInAttrValue(e, 34);
	}
	stateInAttrValueSingleQuotes(e) {
		this.handleInAttrValue(e, 39);
	}
	stateInAttrValueNoQuotes(e) {
		Ld(e) || e === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(e)) : (e === 39 || e === 60 || e === 61 || e === 96) && this.cbs.onerr(18, this.index);
	}
	stateBeforeDeclaration(e) {
		e === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = e === 45 ? 25 : 23;
	}
	stateInDeclaration(e) {
		(e === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
	}
	stateInProcessingInstruction(e) {
		(e === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
	}
	stateBeforeComment(e) {
		e === 45 ? (this.state = 28, this.currentSequence = Bd.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
	}
	stateInSpecialComment(e) {
		(e === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
	}
	stateBeforeSpecialS(e) {
		e === Bd.ScriptEnd[3] ? this.startSpecial(Bd.ScriptEnd, 4) : e === Bd.StyleEnd[3] ? this.startSpecial(Bd.StyleEnd, 4) : (this.state = 6, this.stateInTagName(e));
	}
	stateBeforeSpecialT(e) {
		e === Bd.TitleEnd[3] ? this.startSpecial(Bd.TitleEnd, 4) : e === Bd.TextareaEnd[3] ? this.startSpecial(Bd.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(e));
	}
	startEntity() {}
	stateInEntity() {}
	parse(e) {
		for (this.buffer = e; this.index < this.buffer.length;) {
			let e = this.buffer.charCodeAt(this.index);
			switch (e === 10 && this.state !== 33 && this.newlines.push(this.index), this.state) {
				case 1:
					this.stateText(e);
					break;
				case 2:
					this.stateInterpolationOpen(e);
					break;
				case 3:
					this.stateInterpolation(e);
					break;
				case 4:
					this.stateInterpolationClose(e);
					break;
				case 31:
					this.stateSpecialStartSequence(e);
					break;
				case 32:
					this.stateInRCDATA(e);
					break;
				case 26:
					this.stateCDATASequence(e);
					break;
				case 19:
					this.stateInAttrValueDoubleQuotes(e);
					break;
				case 12:
					this.stateInAttrName(e);
					break;
				case 13:
					this.stateInDirName(e);
					break;
				case 14:
					this.stateInDirArg(e);
					break;
				case 15:
					this.stateInDynamicDirArg(e);
					break;
				case 16:
					this.stateInDirModifier(e);
					break;
				case 28:
					this.stateInCommentLike(e);
					break;
				case 27:
					this.stateInSpecialComment(e);
					break;
				case 11:
					this.stateBeforeAttrName(e);
					break;
				case 6:
					this.stateInTagName(e);
					break;
				case 34:
					this.stateInSFCRootTagName(e);
					break;
				case 9:
					this.stateInClosingTagName(e);
					break;
				case 5:
					this.stateBeforeTagName(e);
					break;
				case 17:
					this.stateAfterAttrName(e);
					break;
				case 20:
					this.stateInAttrValueSingleQuotes(e);
					break;
				case 18:
					this.stateBeforeAttrValue(e);
					break;
				case 8:
					this.stateBeforeClosingTagName(e);
					break;
				case 10:
					this.stateAfterClosingTagName(e);
					break;
				case 29:
					this.stateBeforeSpecialS(e);
					break;
				case 30:
					this.stateBeforeSpecialT(e);
					break;
				case 21:
					this.stateInAttrValueNoQuotes(e);
					break;
				case 7:
					this.stateInSelfClosingTag(e);
					break;
				case 23:
					this.stateInDeclaration(e);
					break;
				case 22:
					this.stateBeforeDeclaration(e);
					break;
				case 25:
					this.stateBeforeComment(e);
					break;
				case 24:
					this.stateInProcessingInstruction(e);
					break;
				case 33: this.stateInEntity();
			}
			this.index++;
		}
		this.cleanup(), this.finish();
	}
	cleanup() {
		this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
	}
	finish() {
		this.handleTrailingData(), this.cbs.onend();
	}
	handleTrailingData() {
		let e = this.buffer.length;
		this.sectionStart >= e || (this.state === 28 ? this.currentSequence === Bd.CdataEnd ? this.cbs.oncdata(this.sectionStart, e) : this.cbs.oncomment(this.sectionStart, e) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, e));
	}
	emitCodePoint(e, t) {}
};
function Hd(e, { compatConfig: t }) {
	let n = t && t[e];
	return e === "MODE" ? n || 3 : n;
}
function Ud(e, t) {
	let n = Hd("MODE", t), r = Hd(e, t);
	return n === 3 ? r === !0 : r !== !1;
}
function Wd(e, t, n, ...r) {
	return Ud(e, t);
}
function Gd(e) {
	throw e;
}
function Kd(e) {}
function q(e, t, n, r) {
	let i = `https://vuejs.org/error-reference/#compiler-${e}`, a = SyntaxError(String(i));
	return a.code = e, a.loc = t, a;
}
var qd = (e) => e.type === 4 && e.isStatic;
function Jd(e) {
	switch (e) {
		case "Teleport":
		case "teleport": return Pu;
		case "Suspense":
		case "suspense": return Fu;
		case "KeepAlive":
		case "keep-alive": return Iu;
		case "BaseTransition":
		case "base-transition": return Lu;
	}
}
var Yd = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Xd = (e) => !Yd.test(e), Zd = /[A-Za-z_$\xA0-\uFFFF]/, Qd = /[\.\?\w$\xA0-\uFFFF]/, $d = /\s+[.[]\s*|\s*[.[]\s+/g, ef = (e) => e.type === 4 ? e.content : e.loc.source, tf = (e) => {
	let t = ef(e).trim().replace($d, (e) => e.trim()), n = 0, r = [], i = 0, a = 0, o = null;
	for (let e = 0; e < t.length; e++) {
		let s = t.charAt(e);
		switch (n) {
			case 0:
				if (s === "[") r.push(n), n = 1, i++;
				else if (s === "(") r.push(n), n = 2, a++;
				else if (!(e === 0 ? Zd : Qd).test(s)) return !1;
				break;
			case 1:
				s === "'" || s === "\"" || s === "`" ? (r.push(n), n = 3, o = s) : s === "[" ? i++ : s === "]" && (--i || (n = r.pop()));
				break;
			case 2:
				if (s === "'" || s === "\"" || s === "`") r.push(n), n = 3, o = s;
				else if (s === "(") a++;
				else if (s === ")") {
					if (e === t.length - 1) return !1;
					--a || (n = r.pop());
				}
				break;
			case 3: s === o && (n = r.pop(), o = null);
		}
	}
	return !i && !a;
}, nf = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/, rf = (e) => nf.test(ef(e));
function af(e, t, n = !1) {
	for (let r = 0; r < e.props.length; r++) {
		let i = e.props[r];
		if (i.type === 7 && (n || i.exp) && (b(t) ? i.name === t : t.test(i.name))) return i;
	}
}
function of(e, t, n = !1, r = !1) {
	for (let i = 0; i < e.props.length; i++) {
		let a = e.props[i];
		if (a.type === 6) {
			if (n) continue;
			if (a.name === t && (a.value || r)) return a;
		} else if (a.name === "bind" && (a.exp || r) && sf(a.arg, t)) return a;
	}
}
function sf(e, t) {
	return !!(e && qd(e) && e.content === t);
}
function cf(e) {
	return e.props.some((e) => e.type === 7 && e.name === "bind" && (!e.arg || e.arg.type !== 4 || !e.arg.isStatic));
}
function lf(e) {
	return e.type === 5 || e.type === 2;
}
function uf(e) {
	return e.type === 7 && e.name === "pre";
}
function df(e) {
	return e.type === 7 && e.name === "slot";
}
function ff(e) {
	return e.type === 1 && e.tagType === 3;
}
function pf(e) {
	return e.type === 1 && e.tagType === 2;
}
var mf = /* @__PURE__ */ new Set([id, ad]);
function hf(e, t = []) {
	if (e && !b(e) && e.type === 14) {
		let n = e.callee;
		if (!b(n) && mf.has(n)) return hf(e.arguments[0], t.concat(e));
	}
	return [e, t];
}
function gf(e, t, n) {
	if (e.type !== 13 && _f(e, t)) return;
	let r, i = e.type === 13 ? e.props : e.arguments[2], a = [], o;
	if (i && !b(i) && i.type === 14) {
		let e = hf(i);
		i = e[0], a = e[1], o = a[a.length - 1];
	}
	if (i == null || b(i)) r = wd([t]);
	else if (i.type === 14) {
		let e = i.arguments[0];
		!b(e) && e.type === 15 ? vf(t, e) || e.properties.unshift(t) : i.callee === od ? r = Ed(n.helper(td), [wd([t]), i]) : i.arguments.unshift(wd([t])), !r && (r = i);
	} else i.type === 15 ? (vf(t, i) || i.properties.unshift(t), r = i) : (r = Ed(n.helper(td), [wd([t]), i]), o && o.callee === ad && (o = a[a.length - 2]));
	e.type === 13 ? o ? o.arguments[0] = r : e.props = r : o ? o.arguments[0] = r : e.arguments[2] = r;
}
function _f(e, t) {
	var n, r, i;
	if (t.key.type !== 4 || t.key.content !== "key") return !1;
	let a = e.arguments[2];
	if (a && !b(a)) {
		let [e] = hf(a);
		if (e && !b(e) && e.type === 15 && vf(t, e)) return !0;
	}
	return (n = e.arguments)[2] || (n[2] = "{}"), (r = e.arguments)[3] || (r[3] = "undefined"), (i = e.arguments)[4] || (i[4] = "undefined"), e.arguments[5] = t.value, !0;
}
function vf(e, t) {
	let n = !1;
	if (e.key.type === 4) {
		let r = e.key.content;
		n = t.properties.some((e) => e.key.type === 4 && e.key.content === r);
	}
	return n;
}
function yf(e, t) {
	return `_${t}_${e.replace(/[^\w]/g, (t, n) => t === "-" ? "_" : e.charCodeAt(n).toString())}`;
}
function bf(e) {
	return e.type === 14 && e.callee === gd ? e.arguments[1].returns : e;
}
var xf = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
function Sf(e) {
	for (let t = 0; t < e.length; t++) if (!Ld(e.charCodeAt(t))) return !1;
	return !0;
}
function Cf(e) {
	return e.type === 2 && Sf(e.content) || e.type === 12 && Cf(e.content);
}
function wf(e) {
	return e.type === 3 || Cf(e);
}
var Tf = {
	parseMode: "base",
	ns: 0,
	delimiters: ["{{", "}}"],
	getNamespace: () => 0,
	isVoidTag: s,
	isPreTag: s,
	isIgnoreNewlineTag: s,
	isCustomElement: s,
	onError: Gd,
	onWarn: Kd,
	comments: !1,
	prefixIdentifiers: !1
}, J = Tf, Ef = null, Df = "", Of = null, Y = null, kf = "", Af = -1, jf = -1, Mf = 0, Nf = !1, Pf = null, X = [], Z = new Vd(X, {
	onerr: rp,
	ontext(e, t) {
		Bf(Rf(e, t), e, t);
	},
	ontextentity(e, t, n) {
		Bf(e, t, n);
	},
	oninterpolation(e, t) {
		if (Nf) return Bf(Rf(e, t), e, t);
		let n = e + Z.delimiterOpen.length, r = t - Z.delimiterClose.length;
		for (; Ld(Df.charCodeAt(n));) n++;
		for (; Ld(Df.charCodeAt(r - 1));) r--;
		let i = Rf(n, r);
		i.includes("&") && (i = J.decodeEntities(i, !1)), Qf({
			type: 5,
			content: np(i, !1, Q(n, r)),
			loc: Q(e, t)
		});
	},
	onopentagname(e, t) {
		let n = Rf(e, t);
		Of = {
			type: 1,
			tag: n,
			ns: J.getNamespace(n, X[0], J.ns),
			tagType: 0,
			props: [],
			children: [],
			loc: Q(e - 1, t),
			codegenNode: void 0
		};
	},
	onopentagend(e) {
		zf(e);
	},
	onclosetag(e, t) {
		let n = Rf(e, t);
		if (!J.isVoidTag(n)) {
			let r = !1;
			for (let e = 0; e < X.length; e++) if (X[e].tag.toLowerCase() === n.toLowerCase()) {
				r = !0, e > 0 && rp(24, X[0].loc.start.offset);
				for (let n = 0; n <= e; n++) Vf(X.shift(), t, n < e);
				break;
			}
			r || rp(23, Uf(e, 60));
		}
	},
	onselfclosingtag(e) {
		let t = Of.tag;
		Of.isSelfClosing = !0, zf(e), X[0] && X[0].tag === t && Vf(X.shift(), e);
	},
	onattribname(e, t) {
		Y = {
			type: 6,
			name: Rf(e, t),
			nameLoc: Q(e, t),
			value: void 0,
			loc: Q(e)
		};
	},
	ondirname(e, t) {
		let n = Rf(e, t), r = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
		if (!Nf && r === "" && rp(26, e), Nf || r === "") Y = {
			type: 6,
			name: n,
			nameLoc: Q(e, t),
			value: void 0,
			loc: Q(e)
		};
		else if (Y = {
			type: 7,
			name: r,
			rawName: n,
			exp: void 0,
			arg: void 0,
			modifiers: n === "." ? [K("prop")] : [],
			loc: Q(e)
		}, r === "pre") {
			Nf = Z.inVPre = !0, Pf = Of;
			let e = Of.props;
			for (let t = 0; t < e.length; t++) e[t].type === 7 && (e[t] = tp(e[t]));
		}
	},
	ondirarg(e, t) {
		if (e === t) return;
		let n = Rf(e, t);
		if (Nf && !uf(Y)) Y.name += n, ep(Y.nameLoc, t);
		else {
			let r = n[0] !== "[";
			Y.arg = np(r ? n : n.slice(1, -1), r, Q(e, t), r ? 3 : 0);
		}
	},
	ondirmodifier(e, t) {
		let n = Rf(e, t);
		if (Nf && !uf(Y)) Y.name += "." + n, ep(Y.nameLoc, t);
		else if (Y.name === "slot") {
			let e = Y.arg;
			e && (e.content += "." + n, ep(e.loc, t));
		} else {
			let r = K(n, !0, Q(e, t));
			Y.modifiers.push(r);
		}
	},
	onattribdata(e, t) {
		kf += Rf(e, t), Af < 0 && (Af = e), jf = t;
	},
	onattribentity(e, t, n) {
		kf += e, Af < 0 && (Af = t), jf = n;
	},
	onattribnameend(e) {
		let t = Y.loc.start.offset, n = Rf(t, e);
		Y.type === 7 && (Y.rawName = n), Of.props.some((e) => (e.type === 7 ? e.rawName : e.name) === n) && rp(2, t);
	},
	onattribend(e, t) {
		if (Of && Y) {
			if (ep(Y.loc, t), e !== 0) {
				if (kf.includes("&") && (kf = J.decodeEntities(kf, !0)), Y.type === 6) Y.name === "class" && (kf = Zf(kf).trim()), e === 1 && !kf && rp(13, t), Y.value = {
					type: 2,
					content: kf,
					loc: e === 1 ? Q(Af, jf) : Q(Af - 1, jf + 1)
				}, Z.inSFCRoot && Of.tag === "template" && Y.name === "lang" && kf && kf !== "html" && Z.enterRCDATA(zd("</template"), 0);
				else {
					Y.exp = np(kf, !1, Q(Af, jf), 0, 0), Y.name === "for" && (Y.forParseResult = Lf(Y.exp));
					let e = -1;
					Y.name === "bind" && (e = Y.modifiers.findIndex((e) => e.content === "sync")) > -1 && Wd("COMPILER_V_BIND_SYNC", J, Y.loc, Y.arg.loc.source) && (Y.name = "model", Y.modifiers.splice(e, 1));
				}
			}
			(Y.type !== 7 || Y.name !== "pre") && Of.props.push(Y);
		}
		kf = "", Af = jf = -1;
	},
	oncomment(e, t) {
		J.comments && Qf({
			type: 3,
			content: Rf(e, t),
			loc: Q(e - 4, t + 3)
		});
	},
	onend() {
		let e = Df.length;
		for (let t = 0; t < X.length; t++) Vf(X[t], e - 1), rp(24, X[t].loc.start.offset);
	},
	oncdata(e, t) {
		(X[0] ? X[0].ns : J.ns) === 0 ? rp(1, e - 9) : Bf(Rf(e, t), e, t);
	},
	onprocessinginstruction(e) {
		(X[0] ? X[0].ns : J.ns) === 0 && rp(21, e - 1);
	}
}), Ff = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, If = /^\(|\)$/g;
function Lf(e) {
	let t = e.loc, n = e.content, r = n.match(xf);
	if (!r) return;
	let [, i, a] = r, o = (e, n, r = !1) => {
		let i = t.start.offset + n;
		return np(e, !1, Q(i, i + e.length), 0, +!!r);
	}, s = {
		source: o(a.trim(), n.indexOf(a, i.length)),
		value: void 0,
		key: void 0,
		index: void 0,
		finalized: !1
	}, c = i.trim().replace(If, "").trim(), l = i.indexOf(c), u = c.match(Ff);
	if (u) {
		c = c.replace(Ff, "").trim();
		let e = u[1].trim(), t;
		if (e && (t = n.indexOf(e, l + c.length), s.key = o(e, t, !0)), u[2]) {
			let r = u[2].trim();
			r && (s.index = o(r, n.indexOf(r, s.key ? t + e.length : l + c.length), !0));
		}
	}
	return c && (s.value = o(c, l, !0)), s;
}
function Rf(e, t) {
	return Df.slice(e, t);
}
function zf(e) {
	Z.inSFCRoot && (Of.innerLoc = Q(e + 1, e + 1)), Qf(Of);
	let { tag: t, ns: n } = Of;
	n === 0 && J.isPreTag(t) && Mf++, J.isVoidTag(t) ? Vf(Of, e) : (X.unshift(Of), (n === 1 || n === 2) && (Z.inXML = !0)), Of = null;
}
function Bf(e, t, n) {
	{
		let t = X[0] && X[0].tag;
		t !== "script" && t !== "style" && e.includes("&") && (e = J.decodeEntities(e, !1));
	}
	let r = X[0] || Ef, i = r.children[r.children.length - 1];
	i && i.type === 2 ? (i.content += e, ep(i.loc, n)) : r.children.push({
		type: 2,
		content: e,
		loc: Q(t, n)
	});
}
function Vf(e, t, n = !1) {
	n ? ep(e.loc, Uf(t, 60)) : ep(e.loc, Hf(t, 62) + 1), Z.inSFCRoot && (e.children.length ? e.innerLoc.end = u({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = u({}, e.innerLoc.start), e.innerLoc.source = Rf(e.innerLoc.start.offset, e.innerLoc.end.offset));
	let { tag: r, ns: i, children: a } = e;
	if (Nf || (r === "slot" ? e.tagType = 2 : Gf(e) ? e.tagType = 3 : Kf(e) && (e.tagType = 1)), Z.inRCDATA || (e.children = Yf(a)), i === 0 && J.isIgnoreNewlineTag(r)) {
		let e = a[0];
		e && e.type === 2 && (e.content = e.content.replace(/^\r?\n/, ""));
	}
	i === 0 && J.isPreTag(r) && Mf--, Pf === e && (Nf = Z.inVPre = !1, Pf = null), Z.inXML && (X[0] ? X[0].ns : J.ns) === 0 && (Z.inXML = !1);
	{
		let t = e.props;
		if (!Z.inSFCRoot && Ud("COMPILER_NATIVE_TEMPLATE", J) && e.tag === "template" && !Gf(e)) {
			let t = X[0] || Ef, n = t.children.indexOf(e);
			t.children.splice(n, 1, ...e.children);
		}
		let n = t.find((e) => e.type === 6 && e.name === "inline-template");
		n && Wd("COMPILER_INLINE_TEMPLATE", J, n.loc) && e.children.length && (n.value = {
			type: 2,
			content: Rf(e.children[0].loc.start.offset, e.children[e.children.length - 1].loc.end.offset),
			loc: n.loc
		});
	}
}
function Hf(e, t) {
	let n = e;
	for (; Df.charCodeAt(n) !== t && n < Df.length - 1;) n++;
	return n;
}
function Uf(e, t) {
	let n = e;
	for (; Df.charCodeAt(n) !== t && n >= 0;) n--;
	return n;
}
var Wf = /* @__PURE__ */ new Set([
	"if",
	"else",
	"else-if",
	"for",
	"slot"
]);
function Gf({ tag: e, props: t }) {
	if (e === "template") {
		for (let e = 0; e < t.length; e++) if (t[e].type === 7 && Wf.has(t[e].name)) return !0;
	}
	return !1;
}
function Kf({ tag: e, props: t }) {
	if (J.isCustomElement(e)) return !1;
	if (e === "component" || qf(e.charCodeAt(0)) || Jd(e) || J.isBuiltInComponent && J.isBuiltInComponent(e) || J.isNativeTag && !J.isNativeTag(e)) return !0;
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (n.type === 6) {
			if (n.name === "is" && n.value && (n.value.content.startsWith("vue:") || Wd("COMPILER_IS_ON_ELEMENT", J, n.loc))) return !0;
		} else if (n.name === "bind" && sf(n.arg, "is") && Wd("COMPILER_IS_ON_ELEMENT", J, n.loc)) return !0;
	}
	return !1;
}
function qf(e) {
	return e > 64 && e < 91;
}
var Jf = /\r\n/g;
function Yf(e) {
	let t = J.whitespace !== "preserve", n = !1;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i.type === 2) {
			if (Mf) i.content = i.content.replace(Jf, "\n");
			else if (Sf(i.content)) {
				let a = e[r - 1] && e[r - 1].type, o = e[r + 1] && e[r + 1].type;
				!a || !o || t && (a === 3 && (o === 3 || o === 1) || a === 1 && (o === 3 || o === 1 && Xf(i.content))) ? (n = !0, e[r] = null) : i.content = " ";
			} else t && (i.content = Zf(i.content));
		}
	}
	return n ? e.filter(Boolean) : e;
}
function Xf(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e.charCodeAt(t);
		if (n === 10 || n === 13) return !0;
	}
	return !1;
}
function Zf(e) {
	let t = "", n = !1;
	for (let r = 0; r < e.length; r++) Ld(e.charCodeAt(r)) ? n ||= (t += " ", !0) : (t += e[r], n = !1);
	return t;
}
function Qf(e) {
	(X[0] || Ef).children.push(e);
}
function Q(e, t) {
	return {
		start: Z.getPos(e),
		end: t == null ? t : Z.getPos(t),
		source: t == null ? t : Rf(e, t)
	};
}
function $f(e) {
	return Q(e.start.offset, e.end.offset);
}
function ep(e, t) {
	e.end = Z.getPos(t), e.source = Rf(e.start.offset, t);
}
function tp(e) {
	let t = {
		type: 6,
		name: e.rawName,
		nameLoc: Q(e.loc.start.offset, e.loc.start.offset + e.rawName.length),
		value: void 0,
		loc: e.loc
	};
	if (e.exp) {
		let n = e.exp.loc;
		n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
			type: 2,
			content: e.exp.content,
			loc: n
		};
	}
	return t;
}
function np(e, t = !1, n, r = 0, i = 0) {
	return K(e, t, n, r);
}
function rp(e, t, n) {
	J.onError(q(e, Q(t, t), void 0, n));
}
function ip() {
	Z.reset(), Of = null, Y = null, kf = "", Af = -1, jf = -1, X.length = 0;
}
function ap(e, t) {
	if (ip(), Df = e, J = u({}, Tf), t) {
		let e;
		for (e in t) t[e] != null && (J[e] = t[e]);
	}
	Z.mode = J.parseMode === "html" ? 1 : J.parseMode === "sfc" ? 2 : 0, Z.inXML = J.ns === 1 || J.ns === 2;
	let n = t && t.delimiters;
	n && (Z.delimiterOpen = zd(n[0]), Z.delimiterClose = zd(n[1]));
	let r = Ef = xd([], e);
	return Z.parse(Df), r.loc = Q(0, e.length), r.children = Yf(r.children), Ef = null, r;
}
function op(e, t) {
	cp(e, void 0, t, !!sp(e));
}
function sp(e) {
	let t = e.children.filter((e) => e.type !== 3);
	return t.length === 1 && t[0].type === 1 && !pf(t[0]) ? t[0] : null;
}
function cp(e, t, n, r = !1, i = !1) {
	let { children: a } = e, o = [];
	for (let t = 0; t < a.length; t++) {
		let s = a[t];
		if (s.type === 1 && s.tagType === 0) {
			let e = r ? 0 : lp(s, n);
			if (e > 0) {
				if (e >= 2) {
					s.codegenNode.patchFlag = -1, o.push(s);
					continue;
				}
			} else {
				let e = s.codegenNode;
				if (e.type === 13) {
					let t = e.patchFlag;
					if ((t === void 0 || t === 512 || t === 1) && fp(s, n) >= 2) {
						let t = pp(s);
						t && (e.props = n.hoist(t));
					}
					e.dynamicProps &&= n.hoist(e.dynamicProps);
				}
			}
		} else if (s.type === 12 && (r ? 0 : lp(s, n)) >= 2) {
			s.codegenNode.type === 14 && s.codegenNode.arguments.length > 0 && s.codegenNode.arguments.push("-1"), o.push(s);
			continue;
		}
		if (s.type === 1) {
			let t = s.tagType === 1;
			t && n.scopes.vSlot++, cp(s, e, n, !1, i), t && n.scopes.vSlot--;
		} else if (s.type === 11) cp(s, e, n, s.children.length === 1, !0);
		else if (s.type === 9) for (let t = 0; t < s.branches.length; t++) cp(s.branches[t], e, n, s.branches[t].children.length === 1, i);
	}
	let s = !1;
	if (o.length === a.length && e.type === 1) {
		if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && m(e.codegenNode.children)) e.codegenNode.children = c(Cd(e.codegenNode.children)), s = !0;
		else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !m(e.codegenNode.children) && e.codegenNode.children.type === 15) {
			let t = l(e.codegenNode, "default");
			t && (t.returns = c(Cd(t.returns)), s = !0);
		} else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !m(t.codegenNode.children) && t.codegenNode.children.type === 15) {
			let n = af(e, "slot", !0), r = n && n.arg && l(t.codegenNode, n.arg);
			r && (r.returns = c(Cd(r.returns)), s = !0);
		}
	}
	if (!s) for (let e of o) e.codegenNode = n.cache(e.codegenNode);
	function c(e) {
		let t = n.cache(e);
		return t.needArraySpread = !0, t;
	}
	function l(e, t) {
		if (e.children && !m(e.children) && e.children.type === 15) {
			let n = e.children.properties.find((e) => e.key === t || e.key.content === t);
			return n && n.value;
		}
	}
	o.length && n.transformHoist && n.transformHoist(a, n, e);
}
function lp(e, t) {
	let { constantCache: n } = t;
	switch (e.type) {
		case 1:
			if (e.tagType !== 0) return 0;
			let r = n.get(e);
			if (r !== void 0) return r;
			let i = e.codegenNode;
			if (i.type !== 13 || i.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math") return 0;
			if (i.patchFlag === void 0) {
				let r = 3, a = fp(e, t);
				if (a === 0) return n.set(e, 0), 0;
				a < r && (r = a);
				for (let i = 0; i < e.children.length; i++) {
					let a = lp(e.children[i], t);
					if (a === 0) return n.set(e, 0), 0;
					a < r && (r = a);
				}
				if (r > 1) for (let i = 0; i < e.props.length; i++) {
					let a = e.props[i];
					if (a.type === 7 && a.name === "bind" && a.exp) {
						let i = lp(a.exp, t);
						if (i === 0) return n.set(e, 0), 0;
						i < r && (r = i);
					}
				}
				if (i.isBlock) {
					for (let t = 0; t < e.props.length; t++) if (e.props[t].type === 7) return n.set(e, 0), 0;
					t.removeHelper(Ru), t.removeHelper(Md(t.inSSR, i.isComponent)), i.isBlock = !1, t.helper(jd(t.inSSR, i.isComponent));
				}
				return n.set(e, r), r;
			}
			return n.set(e, 0), 0;
		case 2:
		case 3: return 3;
		case 9:
		case 11:
		case 10: return 0;
		case 5:
		case 12: return lp(e.content, t);
		case 4: return e.constType;
		case 8:
			let a = 3;
			for (let n = 0; n < e.children.length; n++) {
				let r = e.children[n];
				if (b(r) || x(r)) continue;
				let i = lp(r, t);
				if (i === 0) return 0;
				i < a && (a = i);
			}
			return a;
		case 20: return 2;
		default: return 0;
	}
}
var up = /* @__PURE__ */ new Set([
	nd,
	rd,
	id,
	ad
]);
function dp(e, t) {
	if (e.type === 14 && !b(e.callee) && up.has(e.callee)) {
		let n = e.arguments[0];
		if (n.type === 4) return lp(n, t);
		if (n.type === 14) return dp(n, t);
	}
	return 0;
}
function fp(e, t) {
	let n = 3, r = pp(e);
	if (r && r.type === 15) {
		let { properties: e } = r;
		for (let r = 0; r < e.length; r++) {
			let { key: i, value: a } = e[r], o = lp(i, t);
			if (o === 0) return o;
			o < n && (n = o);
			let s;
			if (s = a.type === 4 ? lp(a, t) : a.type === 14 ? dp(a, t) : 0, s === 0) return s;
			s < n && (n = s);
		}
	}
	return n;
}
function pp(e) {
	let t = e.codegenNode;
	if (t.type === 13) return t.props;
}
function mp(e, { filename: t = "", prefixIdentifiers: n = !1, hoistStatic: r = !1, hmr: a = !1, cacheHandlers: s = !1, nodeTransforms: c = [], directiveTransforms: l = {}, transformHoist: u = null, isBuiltInComponent: d = o, isCustomElement: f = o, expressionPlugins: p = [], scopeId: m = null, slotted: h = !0, ssr: g = !1, inSSR: _ = !1, ssrCssVars: v = "", bindingMetadata: y = i, inline: x = !1, isTS: S = !1, onError: C = Gd, onWarn: w = Kd, compatConfig: T }) {
	let E = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), D = {
		filename: t,
		selfName: E && ae(k(E[1])),
		prefixIdentifiers: n,
		hoistStatic: r,
		hmr: a,
		cacheHandlers: s,
		nodeTransforms: c,
		directiveTransforms: l,
		transformHoist: u,
		isBuiltInComponent: d,
		isCustomElement: f,
		expressionPlugins: p,
		scopeId: m,
		slotted: h,
		ssr: g,
		inSSR: _,
		ssrCssVars: v,
		bindingMetadata: y,
		inline: x,
		isTS: S,
		onError: C,
		onWarn: w,
		compatConfig: T,
		root: e,
		helpers: /* @__PURE__ */ new Map(),
		components: /* @__PURE__ */ new Set(),
		directives: /* @__PURE__ */ new Set(),
		hoists: [],
		imports: [],
		cached: [],
		constantCache: /* @__PURE__ */ new WeakMap(),
		vForMemoKeyedNodes: /* @__PURE__ */ new WeakSet(),
		temps: 0,
		identifiers: /* @__PURE__ */ Object.create(null),
		scopes: {
			vFor: 0,
			vSlot: 0,
			vPre: 0,
			vOnce: 0
		},
		parent: null,
		grandParent: null,
		currentNode: e,
		childIndex: 0,
		inVOnce: !1,
		helper(e) {
			let t = D.helpers.get(e) || 0;
			return D.helpers.set(e, t + 1), e;
		},
		removeHelper(e) {
			let t = D.helpers.get(e);
			if (t) {
				let n = t - 1;
				n ? D.helpers.set(e, n) : D.helpers.delete(e);
			}
		},
		helperString(e) {
			return `_${vd[D.helper(e)]}`;
		},
		replaceNode(e) {
			D.parent.children[D.childIndex] = D.currentNode = e;
		},
		removeNode(e) {
			let t = D.parent.children, n = e ? t.indexOf(e) : D.currentNode ? D.childIndex : -1;
			!e || e === D.currentNode ? (D.currentNode = null, D.onNodeRemoved()) : D.childIndex > n && (D.childIndex--, D.onNodeRemoved()), D.parent.children.splice(n, 1);
		},
		onNodeRemoved: o,
		addIdentifiers(e) {},
		removeIdentifiers(e) {},
		hoist(e) {
			b(e) && (e = K(e)), D.hoists.push(e);
			let t = K(`_hoisted_${D.hoists.length}`, !1, e.loc, 2);
			return t.hoisted = e, t;
		},
		cache(e, t = !1, n = !1) {
			let r = kd(D.cached.length, e, t, n);
			return D.cached.push(r), r;
		}
	};
	return D.filters = /* @__PURE__ */ new Set(), D;
}
function hp(e, t) {
	let n = mp(e, t);
	vp(e, n), t.hoistStatic && op(e, n), t.ssr || gp(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function gp(e, t) {
	let { helper: n } = t, { children: r } = e;
	if (r.length === 1) {
		let n = sp(e);
		if (n && n.codegenNode) {
			let r = n.codegenNode;
			r.type === 13 && Nd(r, t), e.codegenNode = r;
		} else e.codegenNode = r[0];
	} else r.length > 1 && (e.codegenNode = Sd(t, n(Nu), void 0, e.children, 64, void 0, void 0, !0, void 0, !1));
}
function _p(e, t) {
	let n = 0, r = () => {
		n--;
	};
	for (; n < e.children.length; n++) {
		let i = e.children[n];
		b(i) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = r, vp(i, t));
	}
}
function vp(e, t) {
	t.currentNode = e;
	let { nodeTransforms: n } = t, r = [];
	for (let i = 0; i < n.length; i++) {
		let a = n[i](e, t);
		if (a && (m(a) ? r.push(...a) : r.push(a)), t.currentNode) e = t.currentNode;
		else return;
	}
	switch (e.type) {
		case 3:
			t.ssr || t.helper(Uu);
			break;
		case 5:
			t.ssr || t.helper(ed);
			break;
		case 9:
			for (let n = 0; n < e.branches.length; n++) vp(e.branches[n], t);
			break;
		case 10:
		case 11:
		case 1:
		case 0: _p(e, t);
	}
	t.currentNode = e;
	let i = r.length;
	for (; i--;) r[i]();
}
function yp(e, t) {
	let n = b(e) ? (t) => t === e : (t) => e.test(t);
	return (e, r) => {
		if (e.type === 1) {
			let { props: i } = e;
			if (e.tagType === 3 && i.some(df)) return;
			let a = [];
			for (let o = 0; o < i.length; o++) {
				let s = i[o];
				if (s.type === 7 && n(s.name)) {
					i.splice(o, 1), o--;
					let n = t(e, s, r);
					n && a.push(n);
				}
			}
			return a;
		}
	};
}
var bp = "/*@__PURE__*/", xp = (e) => `${vd[e]}: _${vd[e]}`;
function Sp(e, { mode: t = "function", prefixIdentifiers: n = t === "module", sourceMap: r = !1, filename: i = "template.vue.html", scopeId: a = null, optimizeImports: o = !1, runtimeGlobalName: s = "Vue", runtimeModuleName: c = "vue", ssrRuntimeModuleName: l = "vue/server-renderer", ssr: u = !1, isTS: d = !1, inSSR: f = !1 }) {
	let p = {
		mode: t,
		prefixIdentifiers: n,
		sourceMap: r,
		filename: i,
		scopeId: a,
		optimizeImports: o,
		runtimeGlobalName: s,
		runtimeModuleName: c,
		ssrRuntimeModuleName: l,
		ssr: u,
		isTS: d,
		inSSR: f,
		source: e.source,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		indentLevel: 0,
		pure: !1,
		map: void 0,
		helper(e) {
			return `_${vd[e]}`;
		},
		push(e, t = -2, n) {
			p.code += e;
		},
		indent() {
			m(++p.indentLevel);
		},
		deindent(e = !1) {
			e ? --p.indentLevel : m(--p.indentLevel);
		},
		newline() {
			m(p.indentLevel);
		}
	};
	function m(e) {
		p.push("\n" + "  ".repeat(e), 0);
	}
	return p;
}
function Cp(e, t = {}) {
	let n = Sp(e, t);
	t.onContextCreated && t.onContextCreated(n);
	let { mode: r, push: i, prefixIdentifiers: a, indent: o, deindent: s, newline: c, scopeId: l, ssr: u } = n, d = Array.from(e.helpers), f = d.length > 0, p = !a && r !== "module";
	if (wp(e, n), i(`function ${u ? "ssrRender" : "render"}(${(u ? [
		"_ctx",
		"_push",
		"_parent",
		"_attrs"
	] : ["_ctx", "_cache"]).join(", ")}) {`), o(), p && (i("with (_ctx) {"), o(), f && (i(`const { ${d.map(xp).join(", ")} } = _Vue
`, -1), c())), e.components.length && (Tp(e.components, "component", n), (e.directives.length || e.temps > 0) && c()), e.directives.length && (Tp(e.directives, "directive", n), e.temps > 0 && c()), e.filters && e.filters.length && (c(), Tp(e.filters, "filter", n), c()), e.temps > 0) {
		i("let ");
		for (let t = 0; t < e.temps; t++) i(`${t > 0 ? ", " : ""}_temp${t}`);
	}
	return (e.components.length || e.directives.length || e.temps) && (i("\n", 0), c()), u || i("return "), e.codegenNode ? kp(e.codegenNode, n) : i("null"), p && (s(), i("}")), s(), i("}"), {
		ast: e,
		code: n.code,
		preamble: "",
		map: n.map ? n.map.toJSON() : void 0
	};
}
function wp(e, t) {
	let { ssr: n, prefixIdentifiers: r, push: i, newline: a, runtimeModuleName: o, runtimeGlobalName: s, ssrRuntimeModuleName: c } = t, l = s, u = Array.from(e.helpers);
	u.length > 0 && (i(`const _Vue = ${l}
`, -1), e.hoists.length && i(`const { ${[
		Vu,
		Hu,
		Uu,
		Wu,
		Gu
	].filter((e) => u.includes(e)).map(xp).join(", ")} } = _Vue
`, -1)), Ep(e.hoists, t), a(), i("return ");
}
function Tp(e, t, { helper: n, push: r, newline: i, isTS: a }) {
	let o = n(t === "filter" ? Yu : t === "component" ? Ku : Ju);
	for (let n = 0; n < e.length; n++) {
		let s = e[n], c = s.endsWith("__self");
		c && (s = s.slice(0, -6)), r(`const ${yf(s, t)} = ${o}(${JSON.stringify(s)}${c ? ", true" : ""})${a ? "!" : ""}`), n < e.length - 1 && i();
	}
}
function Ep(e, t) {
	if (!e.length) return;
	t.pure = !0;
	let { push: n, newline: r } = t;
	r();
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a && (n(`const _hoisted_${i + 1} = `), kp(a, t), r());
	}
	t.pure = !1;
}
function Dp(e, t) {
	let n = e.length > 3 || !1;
	t.push("["), n && t.indent(), Op(e, t, n), n && t.deindent(), t.push("]");
}
function Op(e, t, n = !1, r = !0) {
	let { push: i, newline: a } = t;
	for (let o = 0; o < e.length; o++) {
		let s = e[o];
		b(s) ? i(s, -3) : m(s) ? Dp(s, t) : kp(s, t), o < e.length - 1 && (n ? (r && i(","), a()) : r && i(", "));
	}
}
function kp(e, t) {
	if (b(e)) {
		t.push(e, -3);
		return;
	}
	if (x(e)) {
		t.push(t.helper(e));
		return;
	}
	switch (e.type) {
		case 1:
		case 9:
		case 11:
			kp(e.codegenNode, t);
			break;
		case 2:
			Ap(e, t);
			break;
		case 4:
			jp(e, t);
			break;
		case 5:
			Mp(e, t);
			break;
		case 12:
			kp(e.codegenNode, t);
			break;
		case 8:
			Np(e, t);
			break;
		case 3:
			Fp(e, t);
			break;
		case 13:
			Ip(e, t);
			break;
		case 14:
			Rp(e, t);
			break;
		case 15:
			zp(e, t);
			break;
		case 17:
			Bp(e, t);
			break;
		case 18:
			Vp(e, t);
			break;
		case 19:
			Hp(e, t);
			break;
		case 20:
			Up(e, t);
			break;
		case 21: Op(e.body, t, !0, !1);
	}
}
function Ap(e, t) {
	t.push(JSON.stringify(e.content), -3, e);
}
function jp(e, t) {
	let { content: n, isStatic: r } = e;
	t.push(r ? JSON.stringify(n) : n, -3, e);
}
function Mp(e, t) {
	let { push: n, helper: r, pure: i } = t;
	i && n(bp), n(`${r(ed)}(`), kp(e.content, t), n(")");
}
function Np(e, t) {
	for (let n = 0; n < e.children.length; n++) {
		let r = e.children[n];
		b(r) ? t.push(r, -3) : kp(r, t);
	}
}
function Pp(e, t) {
	let { push: n } = t;
	e.type === 8 ? (n("["), Np(e, t), n("]")) : e.isStatic ? n(Xd(e.content) ? e.content : JSON.stringify(e.content), -2, e) : n(`[${e.content}]`, -3, e);
}
function Fp(e, t) {
	let { push: n, helper: r, pure: i } = t;
	i && n(bp), n(`${r(Uu)}(${JSON.stringify(e.content)})`, -3, e);
}
function Ip(e, t) {
	let { push: n, helper: r, pure: i } = t, { tag: a, props: o, children: s, patchFlag: c, dynamicProps: l, directives: u, isBlock: d, disableTracking: f, isComponent: p } = e, m;
	c && (m = String(c)), u && n(r(Xu) + "("), d && n(`(${r(Ru)}(${f ? "true" : ""}), `), i && n(bp), n(r(d ? Md(t.inSSR, p) : jd(t.inSSR, p)) + "(", -2, e), Op(Lp([
		a,
		o,
		s,
		m,
		l
	]), t), n(")"), d && n(")"), u && (n(", "), kp(u, t), n(")"));
}
function Lp(e) {
	let t = e.length;
	for (; t-- && e[t] == null;);
	return e.slice(0, t + 1).map((e) => e || "null");
}
function Rp(e, t) {
	let { push: n, helper: r, pure: i } = t, a = b(e.callee) ? e.callee : r(e.callee);
	i && n(bp), n(a + "(", -2, e), Op(e.arguments, t), n(")");
}
function zp(e, t) {
	let { push: n, indent: r, deindent: i, newline: a } = t, { properties: o } = e;
	if (!o.length) {
		n("{}", -2, e);
		return;
	}
	let s = o.length > 1 || !1;
	n(s ? "{" : "{ "), s && r();
	for (let e = 0; e < o.length; e++) {
		let { key: r, value: i } = o[e];
		Pp(r, t), n(": "), kp(i, t), e < o.length - 1 && (n(","), a());
	}
	s && i(), n(s ? "}" : " }");
}
function Bp(e, t) {
	Dp(e.elements, t);
}
function Vp(e, t) {
	let { push: n, indent: r, deindent: i } = t, { params: a, returns: o, body: s, newline: c, isSlot: l } = e;
	l && n(`_${vd[pd]}(`), n("(", -2, e), m(a) ? Op(a, t) : a && kp(a, t), n(") => "), (c || s) && (n("{"), r()), o ? (c && n("return "), m(o) ? Dp(o, t) : kp(o, t)) : s && kp(s, t), (c || s) && (i(), n("}")), l && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function Hp(e, t) {
	let { test: n, consequent: r, alternate: i, newline: a } = e, { push: o, indent: s, deindent: c, newline: l } = t;
	if (n.type === 4) {
		let e = !Xd(n.content);
		e && o("("), jp(n, t), e && o(")");
	} else o("("), kp(n, t), o(")");
	a && s(), t.indentLevel++, a || o(" "), o("? "), kp(r, t), t.indentLevel--, a && l(), a || o(" "), o(": ");
	let u = i.type === 19;
	u || t.indentLevel++, kp(i, t), u || t.indentLevel--, a && c(!0);
}
function Up(e, t) {
	let { push: n, helper: r, indent: i, deindent: a, newline: o } = t, { needPauseTracking: s, needArraySpread: c } = e;
	c && n("[...("), n(`_cache[${e.index}] || (`), s && (i(), n(`${r(ud)}(-1`), e.inVOnce && n(", true"), n("),"), o(), n("(")), n(`_cache[${e.index}] = `), kp(e.value, t), s && (n(`).cacheIndex = ${e.index},`), o(), n(`${r(ud)}(1),`), o(), n(`_cache[${e.index}]`), a()), n(")"), c && n(")]");
}
RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
var Wp = yp(/^(?:if|else|else-if)$/, (e, t, n) => Gp(e, t, n, (e, t, r) => {
	let i = n.parent.children, a = i.indexOf(e), o = 0;
	for (; a-- >= 0;) {
		let e = i[a];
		e && e.type === 9 && (o += e.branches.length);
	}
	return () => {
		if (r) e.codegenNode = qp(t, o, n);
		else {
			let r = Yp(e.codegenNode);
			r.alternate = qp(t, o + e.branches.length - 1, n);
		}
	};
}));
function Gp(e, t, n, r) {
	if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
		let r = t.exp ? t.exp.loc : e.loc;
		n.onError(q(28, t.loc)), t.exp = K("true", !1, r);
	}
	if (t.name === "if") {
		let i = Kp(e, t), a = {
			type: 9,
			loc: $f(e.loc),
			branches: [i]
		};
		if (n.replaceNode(a), r) return r(a, i, !0);
	} else {
		let i = n.parent.children, a = i.indexOf(e);
		for (; a-- >= -1;) {
			let o = i[a];
			if (o && wf(o)) {
				n.removeNode(o);
				continue;
			}
			if (o && o.type === 9) {
				(t.name === "else-if" || t.name === "else") && o.branches[o.branches.length - 1].condition === void 0 && n.onError(q(30, e.loc)), n.removeNode();
				let i = Kp(e, t);
				o.branches.push(i);
				let a = r && r(o, i, !1);
				vp(i, n), a && a(), n.currentNode = null;
			} else n.onError(q(30, e.loc));
			break;
		}
	}
}
function Kp(e, t) {
	let n = e.tagType === 3;
	return {
		type: 10,
		loc: e.loc,
		condition: t.name === "else" ? void 0 : t.exp,
		children: n && !af(e, "for") ? e.children : [e],
		userKey: of(e, "key"),
		isTemplateIf: n
	};
}
function qp(e, t, n) {
	return e.condition ? Od(e.condition, Jp(e, t, n), Ed(n.helper(Uu), ["\"\"", "true"])) : Jp(e, t, n);
}
function Jp(e, t, n) {
	let { helper: r } = n, i = G("key", K(`${t}`, !1, bd, 2)), { children: a } = e, o = a[0];
	if (a.length !== 1 || o.type !== 1) {
		if (a.length === 1 && o.type === 11) {
			let e = o.codegenNode;
			return gf(e, i, n), e;
		}
		return Sd(n, r(Nu), wd([i]), a, 64, void 0, void 0, !0, !1, !1, e.loc);
	}
	{
		let e = o.codegenNode, t = bf(e);
		return t.type === 13 && Nd(t, n), gf(t, i, n), e;
	}
}
function Yp(e) {
	for (;;) if (e.type === 19) {
		if (e.alternate.type === 19) e = e.alternate;
		else return e;
	} else e.type === 20 && (e = e.value);
}
var Xp = yp("for", (e, t, n) => {
	let { helper: r, removeHelper: i } = n;
	return Zp(e, t, n, (t) => {
		let a = Ed(r(Zu), [t.source]), o = ff(e), s = af(e, "memo"), c = of(e, "key", !1, !0);
		c && c.type;
		let l = c && (c.type === 6 ? c.value ? K(c.value.content, !0) : void 0 : c.exp), u = l ? G("key", l) : null, d = t.source.type === 4 && t.source.constType > 0, f = d ? 64 : c ? 128 : 256;
		return t.codegenNode = Sd(n, r(Nu), void 0, a, f, void 0, void 0, !0, !d, !1, e.loc), () => {
			let c, { children: f } = t, p = f.length !== 1 || f[0].type !== 1, m = pf(e) ? e : o && e.children.length === 1 && pf(e.children[0]) ? e.children[0] : null;
			if (m) c = m.codegenNode, o && u && gf(c, u, n);
			else if (p) c = Sd(n, r(Nu), u ? wd([u]) : void 0, e.children, 64, void 0, void 0, !0, void 0, !1);
			else {
				c = f[0].codegenNode, o && u && gf(c, u, n);
				let e = !d || c.isBlockRequired === !0;
				c.isBlock !== e && (c.isBlock ? (i(Ru), i(Md(n.inSSR, c.isComponent))) : i(jd(n.inSSR, c.isComponent))), c.isBlock = e, c.isBlock ? (r(Ru), r(Md(n.inSSR, c.isComponent))) : (r(jd(n.inSSR, c.isComponent)), c.needsPatch && (c.patchFlag = (c.patchFlag ?? 0) | 512));
			}
			if (s) {
				let e = Dd($p(t.parseResult, [K("_cached")]));
				e.body = Ad([
					Td([
						"const _memo = (",
						s.exp,
						")"
					]),
					Td([
						"if (_cached && _cached.el",
						...l ? [" && _cached.key === ", l] : [],
						` && ${n.helperString(_d)}(_cached, _memo)) return _cached`
					]),
					Td(["const _item = ", c]),
					K("_item.memo = _memo"),
					K("return _item")
				]), a.arguments.push(e, K("_cache"), K(String(n.cached.length))), n.cached.push(null);
			} else a.arguments.push(Dd($p(t.parseResult), c, !0));
		};
	});
});
function Zp(e, t, n, r) {
	if (!t.exp) {
		n.onError(q(31, t.loc));
		return;
	}
	let i = t.forParseResult;
	if (!i) {
		n.onError(q(32, t.loc));
		return;
	}
	Qp(i, n);
	let { addIdentifiers: a, removeIdentifiers: o, scopes: s } = n, { source: c, value: l, key: u, index: d } = i, f = {
		type: 11,
		loc: t.loc,
		source: c,
		valueAlias: l,
		keyAlias: u,
		objectIndexAlias: d,
		parseResult: i,
		children: ff(e) ? e.children : [e]
	};
	n.replaceNode(f), s.vFor++;
	let p = r && r(f);
	return () => {
		s.vFor--, p && p();
	};
}
function Qp(e, t) {
	e.finalized ||= !0;
}
function $p({ value: e, key: t, index: n }, r = []) {
	return em([
		e,
		t,
		n,
		...r
	]);
}
function em(e) {
	let t = e.length;
	for (; t-- && !e[t];);
	return e.slice(0, t + 1).map((e, t) => e || K("_".repeat(t + 1), !1));
}
var tm = K("undefined", !1), nm = (e, t) => {
	if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
		let n = af(e, "slot");
		if (n) return n.exp, t.scopes.vSlot++, () => {
			t.scopes.vSlot--;
		};
	}
}, rm = (e, t, n, r) => Dd(e, n, !1, !0, n.length ? n[0].loc : r);
function im(e, t, n = rm) {
	t.helper(pd);
	let { children: r, loc: i } = e, a = [], o = [], s = t.scopes.vSlot > 0 || t.scopes.vFor > 0, c = af(e, "slot", !0);
	if (c) {
		let { arg: e, exp: t } = c;
		e && !qd(e) && (s = !0), a.push(G(e || K("default", !0), n(t, void 0, r, i)));
	}
	let l = !1, u = !1, d = [], f = /* @__PURE__ */ new Set(), p = 0;
	for (let e = 0; e < r.length; e++) {
		let i = r[e], m;
		if (!ff(i) || !(m = af(i, "slot", !0))) {
			i.type !== 3 && d.push(i);
			continue;
		}
		if (c) {
			t.onError(q(37, m.loc));
			break;
		}
		l = !0;
		let { children: h, loc: g } = i, { arg: _ = K("default", !0), exp: v, loc: y } = m, b;
		qd(_) ? b = _ ? _.content : "default" : s = !0;
		let x = af(i, "for"), S = n(v, x, h, g), C, w;
		if (C = af(i, "if")) s = !0, o.push(Od(C.exp, am(_, S, p++), tm));
		else if (w = af(i, /^else(?:-if)?$/, !0)) {
			let n = e, i;
			for (; n-- && (i = r[n], wf(i)););
			if (i && ff(i) && af(i, /^(?:else-)?if$/)) {
				let e = o[o.length - 1];
				for (; e.alternate.type === 19;) e = e.alternate;
				e.alternate = w.exp ? Od(w.exp, am(_, S, p++), tm) : am(_, S, p++);
			} else t.onError(q(30, w.loc));
		} else if (x) {
			s = !0;
			let e = x.forParseResult;
			e ? (Qp(e, t), o.push(Ed(t.helper(Zu), [e.source, Dd($p(e), am(_, S), !0)]))) : t.onError(q(32, x.loc));
		} else {
			if (b) {
				if (f.has(b)) {
					t.onError(q(38, y));
					continue;
				}
				f.add(b), b === "default" && (u = !0);
			}
			a.push(G(_, S));
		}
	}
	if (!c) {
		let e = (e, r) => {
			let a = n(e, void 0, r, i);
			return t.compatConfig && (a.isNonScopedSlot = !0), G("default", a);
		};
		l ? d.length && !d.every(Cf) && (u ? t.onError(q(39, d[0].loc)) : a.push(e(void 0, d))) : a.push(e(void 0, r));
	}
	let m = s ? 2 : om(e.children) ? 3 : 1, h = wd(a.concat(G("_", K(m + "", !1))), i);
	return o.length && (h = Ed(t.helper($u), [h, Cd(o)])), {
		slots: h,
		hasDynamicSlots: s
	};
}
function am(e, t, n) {
	let r = [G("name", e), G("fn", t)];
	return n != null && r.push(G("key", K(String(n), !0))), wd(r);
}
function om(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		switch (n.type) {
			case 1:
				if (n.tagType === 2 || om(n.children)) return !0;
				break;
			case 9:
				if (om(n.branches)) return !0;
				break;
			case 10:
			case 11: if (om(n.children)) return !0;
		}
	}
	return !1;
}
var sm = /* @__PURE__ */ new WeakMap(), cm = (e, t) => function() {
	if (e = t.currentNode, e.type !== 1 || e.tagType !== 0 && e.tagType !== 1) return;
	let { tag: n, props: r } = e, i = e.tagType === 1, a = i ? lm(e, t) : `"${n}"`, o = S(a) && a.callee === qu, s, c, l = 0, u, d, f, p = !1, m = !1, h = o || a === Pu || a === Fu || !i && (n === "svg" || n === "foreignObject" || n === "math");
	if (r.length > 0) {
		let n = um(e, t, void 0, i, o);
		s = n.props, l = n.patchFlag, d = n.dynamicPropNames, p = n.needsPatch, m = n.isBlockRequired;
		let r = n.directives;
		f = r && r.length ? Cd(r.map((e) => pm(e, t))) : void 0, n.shouldUseBlock && (h = !0);
	}
	if (e.children.length > 0) {
		if (a === Iu && (h = !0, l |= 1024), i && a !== Pu && a !== Iu) {
			let { slots: n, hasDynamicSlots: r } = im(e, t);
			c = n, r && (l |= 1024);
		} else if (e.children.length === 1 && a !== Pu) {
			let n = e.children[0], r = n.type, i = r === 5 || r === 8;
			i && lp(n, t) === 0 && (l |= 1), c = i || r === 2 ? n : e.children;
		} else c = e.children;
	}
	d && d.length && (u = mm(d));
	let g = e.codegenNode = Sd(t, a, s, c, l === 0 ? void 0 : l, u, f, !!h, !1, i, e.loc);
	p &&= l === 0 || l === 32, p && (g.needsPatch = !0), m && (g.isBlockRequired = !0);
};
function lm(e, t, n = !1) {
	let { tag: r } = e, i = hm(r), a = of(e, "is", !1, !0);
	if (a) {
		if (i || Ud("COMPILER_IS_ON_ELEMENT", t)) {
			let e;
			if (a.type === 6 ? e = a.value && K(a.value.content, !0) : (e = a.exp, e ||= K("is", !1, a.arg.loc)), e) return Ed(t.helper(qu), [e]);
		} else a.type === 6 && a.value.content.startsWith("vue:") && (r = a.value.content.slice(4));
	}
	let o = Jd(r) || t.isBuiltInComponent(r);
	return o ? (n || t.helper(o), o) : (t.helper(Ku), t.components.add(r), yf(r, "component"));
}
function um(e, t, n = e.props, r, i, a = !1) {
	let { tag: o, loc: s, children: l } = e, u = [], d = [], f = [], p = l.length > 0, m = !1, h = !1, g = 0, _ = !1, v = !1, y = !1, b = !1, S = !1, C = !1, w = [], T = (e) => {
		u.length && (d.push(wd(dm(u), s)), u = []), e && d.push(e);
	}, E = () => {
		t.scopes.vFor > 0 && u.push(G(K("ref_for", !0), K("true")));
	}, D = ({ key: e, value: n }) => {
		if (qd(e)) {
			let a = e.content, o = c(a);
			if (o && (!r || i) && a.toLowerCase() !== "onclick" && a !== "onUpdate:modelValue" && !ee(a) && (b = !0), o && ee(a) && (C = !0), a === "ref" && (_ = !0), o && n.type === 14 && (n = n.arguments[0]), n.type === 20 || (n.type === 4 || n.type === 8) && lp(n, t) > 0) return;
			a === "class" ? v = !0 : a === "style" ? y = !0 : a !== "ref" && a !== "key" && !w.includes(a) && w.push(a), r && (a === "class" || a === "style") && !w.includes(a) && w.push(a);
		} else S = !0;
	};
	for (let i = 0; i < n.length; i++) {
		let c = n[i];
		if (c.type === 6) {
			let { loc: e, name: n, nameLoc: r, value: i } = c;
			if (n === "ref" && (_ = !0, E()), n === "is" && (hm(o) || i && i.content.startsWith("vue:") || Ud("COMPILER_IS_ON_ELEMENT", t))) continue;
			u.push(G(K(n, !0, r), K(i ? i.content : "", !0, i ? i.loc : e)));
		} else {
			let { name: n, arg: i, exp: l, loc: _, modifiers: v } = c, y = n === "bind", b = n === "on";
			if (n === "slot") {
				r || t.onError(q(40, _));
				continue;
			}
			if (n === "once" || n === "memo" || n === "is" || y && sf(i, "is") && (hm(o) || Ud("COMPILER_IS_ON_ELEMENT", t)) || b && a) continue;
			if (y && sf(i, "key") && (m = !0), b && p && i && qd(i) && k(i.content) === "vue:beforeUpdate" && (m = !0, h = !0), y && sf(i, "ref") && E(), !i && (y || b)) {
				if (S = !0, l) {
					if (y) {
						if (T(), Ud("COMPILER_V_BIND_OBJECT_ORDER", t)) {
							d.unshift(l);
							continue;
						}
						E(), T(), d.push(l);
					} else T({
						type: 14,
						loc: _,
						callee: t.helper(od),
						arguments: r ? [l] : [l, "true"]
					});
				} else t.onError(q(y ? 34 : 35, _));
				continue;
			}
			y && v.some((e) => e.content === "prop") && (g |= 32);
			let C = t.directiveTransforms[n];
			if (C) {
				let { props: n, needRuntime: r } = C(c, e, t);
				!a && n.forEach(D), b && i && !qd(i) ? T(wd(n, s)) : u.push(...n), r && (f.push(c), x(r) && sm.set(c, r));
			} else te(n) || (f.push(c), p && (m = !0, h = !0));
		}
	}
	let O;
	d.length ? (T(), O = d.length > 1 ? Ed(t.helper(td), d, s) : d[0]) : u.length && (O = wd(dm(u), s)), S ? g |= 16 : (v && !r && (g |= 2), y && !r && (g |= 4), w.length && (g |= 8), b && (g |= 32));
	let ne = (g === 0 || g === 32) && (_ || C || f.length > 0);
	if (!m && ne && (g |= 512), !t.inSSR && O) switch (O.type) {
		case 15:
			let e = -1, n = -1, r = !1;
			for (let t = 0; t < O.properties.length; t++) {
				let i = O.properties[t].key;
				qd(i) ? i.content === "class" ? e = t : i.content === "style" && (n = t) : i.isHandlerKey || (r = !0);
			}
			let i = O.properties[e], a = O.properties[n];
			r ? O = Ed(t.helper(id), [O]) : (i && !qd(i.value) && (i.value = Ed(t.helper(nd), [i.value])), a && (y || a.value.type === 4 && a.value.content.trim()[0] === "[" || a.value.type === 17) && (a.value = Ed(t.helper(rd), [a.value])));
			break;
		case 14: break;
		default: O = Ed(t.helper(id), [Ed(t.helper(ad), [O])]);
	}
	return {
		props: O,
		directives: f,
		patchFlag: g,
		dynamicPropNames: w,
		shouldUseBlock: m,
		needsPatch: ne,
		isBlockRequired: h
	};
}
function dm(e) {
	let t = /* @__PURE__ */ new Map(), n = [];
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i.key.type === 8 || !i.key.isStatic) {
			n.push(i);
			continue;
		}
		let a = i.key.content, o = t.get(a);
		o ? (a === "style" || a === "class" || c(a)) && fm(o, i) : (t.set(a, i), n.push(i));
	}
	return n;
}
function fm(e, t) {
	e.value.type === 17 ? e.value.elements.push(t.value) : e.value = Cd([e.value, t.value], e.loc);
}
function pm(e, t) {
	let n = [], r = sm.get(e);
	r ? n.push(t.helperString(r)) : (t.helper(Ju), t.directives.add(e.name), n.push(yf(e.name, "directive")));
	let { loc: i } = e;
	if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
		e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
		let t = K("true", !1, i);
		n.push(wd(e.modifiers.map((e) => G(e, t)), i));
	}
	return Cd(n, e.loc);
}
function mm(e) {
	let t = "[";
	for (let n = 0, r = e.length; n < r; n++) t += JSON.stringify(e[n]), n < r - 1 && (t += ", ");
	return t + "]";
}
function hm(e) {
	return e === "component" || e === "Component";
}
var gm = (e, t) => {
	if (pf(e)) {
		let { children: n, loc: r } = e, { slotName: i, slotProps: a } = _m(e, t), o = [
			t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
			i,
			"{}",
			"undefined",
			"true"
		], s = 2;
		a && (o[2] = a, s = 3), n.length && (o[3] = Dd([], n, !1, !1, r), s = 4), t.scopeId && !t.slotted && (s = 5), o.splice(s), e.codegenNode = Ed(t.helper(Qu), o, r);
	}
};
function _m(e, t) {
	let n = "\"default\"", r, i = [];
	for (let t = 0; t < e.props.length; t++) {
		let r = e.props[t];
		r.type === 6 ? r.value && (r.name === "name" ? n = JSON.stringify(r.value.content) : (r.name = k(r.name), i.push(r))) : r.name === "bind" && sf(r.arg, "name") ? r.exp ? n = r.exp : r.arg && r.arg.type === 4 && (n = r.exp = K(k(r.arg.content), !1, r.arg.loc)) : (r.name === "bind" && r.arg && qd(r.arg) && (r.arg.content = k(r.arg.content)), i.push(r));
	}
	if (i.length > 0) {
		let { props: n, directives: a } = um(e, t, i, !1, !1);
		r = n, a.length && t.onError(q(36, a[0].loc));
	}
	return {
		slotName: n,
		slotProps: r
	};
}
var vm = (e, t, n, r) => {
	let { loc: i, modifiers: a, arg: o } = e;
	!e.exp && !a.length && n.onError(q(35, i));
	let s;
	if (o.type === 4) {
		if (o.isStatic) {
			let e = o.content;
			e.startsWith("vue:") && (e = `vnode-${e.slice(4)}`), s = K(t.tagType !== 0 || e.startsWith("vnode") || !/[A-Z]/.test(e) ? j(k(e)) : `on:${e}`, !0, o.loc);
		} else s = Td([
			`${n.helperString(ld)}(`,
			o,
			")"
		]);
	} else s = o, s.children.unshift(`${n.helperString(ld)}(`), s.children.push(")");
	let c = e.exp;
	c && !c.content.trim() && (c = void 0);
	let l = n.cacheHandlers && !c && !n.inVOnce;
	if (c) {
		let e = tf(c), t = !(e || rf(c)), n = c.content.includes(";");
		(t || l && e) && (c = Td([
			`${t ? "$event" : "(...args)"} => ${n ? "{" : "("}`,
			c,
			n ? "}" : ")"
		]));
	}
	let u = { props: [G(s, c || K("() => {}", !1, i))] };
	return r && (u = r(u)), l && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((e) => e.key.isHandlerKey = !0), u;
}, ym = (e, t, n) => {
	let { modifiers: r, loc: i } = e, a = e.arg, { exp: o } = e;
	return o && o.type === 4 && !o.content.trim() && (o = void 0), a.type === 4 ? a.isStatic || (a.content = a.content ? `${a.content} || ""` : "\"\"") : (a.children.unshift("("), a.children.push(") || \"\"")), r.some((e) => e.content === "camel") && (a.type === 4 ? a.content = a.isStatic ? k(a.content) : `${n.helperString(sd)}(${a.content})` : (a.children.unshift(`${n.helperString(sd)}(`), a.children.push(")"))), n.inSSR || (r.some((e) => e.content === "prop") && bm(a, "."), r.some((e) => e.content === "attr") && bm(a, "^")), { props: [G(a, o)] };
}, bm = (e, t) => {
	e.type === 4 ? e.content = e.isStatic ? t + e.content : `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, xm = (e, t) => {
	if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10) return () => {
		let n = e.children, r, i = !1;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			if (lf(t)) {
				i = !0;
				for (let i = e + 1; i < n.length; i++) {
					let a = n[i];
					if (lf(a)) r ||= n[e] = Td([t], t.loc), r.children.push(" + ", a), n.splice(i, 1), i--;
					else {
						r = void 0;
						break;
					}
				}
			}
		}
		if (!(!i || n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && !e.props.find((e) => e.type === 7 && !t.directiveTransforms[e.name]) && e.tag !== "template"))) for (let e = 0; e < n.length; e++) {
			let r = n[e];
			if (lf(r) || r.type === 8) {
				let i = [];
				(r.type !== 2 || r.content !== " ") && i.push(r), !t.ssr && lp(r, t) === 0 && i.push("1"), n[e] = {
					type: 12,
					content: r,
					loc: r.loc,
					codegenNode: Ed(t.helper(Wu), i)
				};
			}
		}
	};
}, Sm = /* @__PURE__ */ new WeakSet(), Cm = (e, t) => {
	if (e.type === 1 && af(e, "once", !0)) return Sm.has(e) || t.inVOnce || t.inSSR ? void 0 : (Sm.add(e), t.inVOnce = !0, t.helper(ud), () => {
		t.inVOnce = !1;
		let e = t.currentNode;
		e.codegenNode &&= t.cache(e.codegenNode, !0, !0);
	});
}, wm = (e, t, n) => {
	let { exp: r, arg: i } = e;
	if (!r) return n.onError(q(41, e.loc)), Tm();
	let a = r.loc.source.trim(), o = r.type === 4 ? r.content : a, s = n.bindingMetadata[a];
	if (s === "props" || s === "props-aliased") return n.onError(q(44, r.loc)), Tm();
	if (s === "literal-const" || s === "setup-const") return n.onError(q(45, r.loc)), Tm();
	if (!o.trim() || !tf(r)) return n.onError(q(42, r.loc)), Tm();
	let c = i || K("modelValue", !0), l = i ? qd(i) ? `onUpdate:${k(i.content)}` : Td(["\"onUpdate:\" + ", i]) : "onUpdate:modelValue", u;
	u = Td([
		`${n.isTS ? "($event: any)" : "$event"} => ((`,
		r,
		") = $event)"
	]);
	let d = [G(c, e.exp), G(l, u)];
	if (e.modifiers.length && t.tagType === 1) {
		let t = e.modifiers.map((e) => e.content).map((e) => (Xd(e) ? e : JSON.stringify(e)) + ": true").join(", "), n = i ? qd(i) ? `${i.content}Modifiers` : Td([i, " + \"Modifiers\""]) : "modelModifiers";
		d.push(G(n, K(`{ ${t} }`, !1, e.loc, 2)));
	}
	return Tm(d);
};
function Tm(e = []) {
	return { props: e };
}
var Em = /[\w).+\-_$\]]/, Dm = (e, t) => {
	Ud("COMPILER_FILTERS", t) && (e.type === 5 ? Om(e.content, t) : e.type === 1 && e.props.forEach((e) => {
		e.type === 7 && e.name !== "for" && e.exp && Om(e.exp, t);
	}));
};
function Om(e, t) {
	if (e.type === 4) km(e, t);
	else for (let n = 0; n < e.children.length; n++) {
		let r = e.children[n];
		typeof r == "object" && (r.type === 4 ? km(r, t) : r.type === 8 ? Om(r, t) : r.type === 5 && Om(r.content, t));
	}
}
function km(e, t) {
	let n = e.content, r = !1, i = !1, a = !1, o = !1, s = 0, c = 0, l = 0, u = 0, d, f, p, m, h = [];
	for (p = 0; p < n.length; p++) if (f = d, d = n.charCodeAt(p), r) d === 39 && f !== 92 && (r = !1);
	else if (i) d === 34 && f !== 92 && (i = !1);
	else if (a) d === 96 && f !== 92 && (a = !1);
	else if (o) d === 47 && f !== 92 && (o = !1);
	else if (d === 124 && n.charCodeAt(p + 1) !== 124 && n.charCodeAt(p - 1) !== 124 && !s && !c && !l) m === void 0 ? (u = p + 1, m = n.slice(0, p).trim()) : g();
	else {
		switch (d) {
			case 34:
				i = !0;
				break;
			case 39:
				r = !0;
				break;
			case 96:
				a = !0;
				break;
			case 40:
				l++;
				break;
			case 41:
				l--;
				break;
			case 91:
				c++;
				break;
			case 93:
				c--;
				break;
			case 123:
				s++;
				break;
			case 125: s--;
		}
		if (d === 47) {
			let e = p - 1, t;
			for (; e >= 0 && (t = n.charAt(e), t === " "); e--);
			(!t || !Em.test(t)) && (o = !0);
		}
	}
	m === void 0 ? m = n.slice(0, p).trim() : u !== 0 && g();
	function g() {
		h.push(n.slice(u, p).trim()), u = p + 1;
	}
	if (h.length) {
		for (p = 0; p < h.length; p++) m = Am(m, h[p], t);
		e.content = m, e.ast = void 0;
	}
}
function Am(e, t, n) {
	n.helper(Yu);
	let r = t.indexOf("(");
	if (r < 0) return n.filters.add(t), `${yf(t, "filter")}(${e})`;
	{
		let i = t.slice(0, r), a = t.slice(r + 1);
		return n.filters.add(i), `${yf(i, "filter")}(${e}${a === ")" ? a : "," + a}`;
	}
}
var jm = /* @__PURE__ */ new WeakSet(), Mm = (e, t) => {
	if (e.type === 1) {
		let n = af(e, "memo");
		return !n || jm.has(e) || t.inSSR ? void 0 : (jm.add(e), () => {
			let r = e.codegenNode || t.currentNode.codegenNode;
			r && r.type === 13 && (e.tagType !== 1 && Nd(r, t), e.codegenNode = Ed(t.helper(gd), [
				n.exp,
				Dd(void 0, r),
				"_cache",
				String(t.cached.length)
			]), t.cached.push(null));
		});
	}
}, Nm = (e, t) => {
	if (e.type === 1) {
		for (let n of e.props) if (n.type === 7 && n.name === "bind" && (!n.exp || n.exp.type === 4 && !n.exp.content.trim()) && n.arg) {
			let e = n.arg;
			if (e.type !== 4 || !e.isStatic) t.onError(q(53, e.loc)), n.exp = K("", !0, e.loc);
			else {
				let t = k(e.content);
				(Zd.test(t[0]) || t[0] === "-") && (n.exp = K(t, !1, e.loc));
			}
		}
	}
};
function Pm(e) {
	return [[
		Nm,
		Cm,
		Wp,
		Mm,
		Xp,
		Dm,
		gm,
		cm,
		nm,
		xm
	], {
		on: vm,
		bind: ym,
		model: wm
	}];
}
function Fm(e, t = {}) {
	let n = t.onError || Gd, r = t.mode === "module";
	t.prefixIdentifiers === !0 ? n(q(48)) : r && n(q(49)), t.cacheHandlers && n(q(50)), t.scopeId && !r && n(q(51));
	let i = u({}, t, { prefixIdentifiers: !1 }), a = b(e) ? ap(e, i) : e, [o, s] = Pm();
	return hp(a, u({}, i, {
		nodeTransforms: [...o, ...t.nodeTransforms || []],
		directiveTransforms: u({}, s, t.directiveTransforms || {})
	})), Cp(a, i);
}
var Im = () => ({ props: [] }), Lm = /* @__PURE__ */ Symbol(""), Rm = /* @__PURE__ */ Symbol(""), zm = /* @__PURE__ */ Symbol(""), Bm = /* @__PURE__ */ Symbol(""), Vm = /* @__PURE__ */ Symbol(""), Hm = /* @__PURE__ */ Symbol(""), Um = /* @__PURE__ */ Symbol(""), Wm = /* @__PURE__ */ Symbol(""), Gm = /* @__PURE__ */ Symbol(""), Km = /* @__PURE__ */ Symbol("");
yd({
	[Lm]: "vModelRadio",
	[Rm]: "vModelCheckbox",
	[zm]: "vModelText",
	[Bm]: "vModelSelect",
	[Vm]: "vModelDynamic",
	[Hm]: "withModifiers",
	[Um]: "withKeys",
	[Wm]: "vShow",
	[Gm]: "Transition",
	[Km]: "TransitionGroup"
});
var qm;
function Jm(e, t = !1) {
	return qm ||= document.createElement("div"), t ? (qm.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, qm.children[0].getAttribute("foo")) : (qm.innerHTML = e, qm.textContent);
}
var Ym = {
	parseMode: "html",
	isVoidTag: Te,
	isNativeTag: (e) => Se(e) || Ce(e) || we(e),
	isPreTag: (e) => e === "pre",
	isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
	decodeEntities: Jm,
	isBuiltInComponent: (e) => {
		if (e === "Transition" || e === "transition") return Gm;
		if (e === "TransitionGroup" || e === "transition-group") return Km;
	},
	getNamespace(e, t, n) {
		let r = t ? t.ns : n;
		if (t && r === 2) {
			if (t.tag === "annotation-xml") {
				if (e === "svg") return 1;
				t.props.some((e) => e.type === 6 && e.name === "encoding" && e.value != null && (e.value.content === "text/html" || e.value.content === "application/xhtml+xml")) && (r = 0);
			} else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (r = 0);
		} else t && r === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (r = 0);
		if (r === 0) {
			if (e === "svg") return 1;
			if (e === "math") return 2;
		}
		return r;
	}
}, Xm = (e) => {
	e.type === 1 && e.props.forEach((t, n) => {
		t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
			type: 7,
			name: "bind",
			arg: K("style", !0, t.loc),
			exp: Zm(t.value.content, t.loc),
			modifiers: [],
			loc: t.loc
		});
	});
}, Zm = (e, t) => {
	let n = F(e);
	return K(JSON.stringify(n), !1, t, 3);
};
function Qm(e, t) {
	return q(e, t, void 0);
}
var $m = (e, t, n) => {
	let { exp: r, loc: i } = e;
	return r || n.onError(Qm(54, i)), t.children.length && (n.onError(Qm(55, i)), t.children.length = 0), { props: [G(K("innerHTML", !0, i), r || K("", !0))] };
}, eh = (e, t, n) => {
	let { exp: r, loc: i } = e;
	return r || n.onError(Qm(56, i)), t.children.length && (n.onError(Qm(57, i)), t.children.length = 0), { props: [G(K("textContent", !0), r ? lp(r, n) > 0 ? r : Ed(n.helperString(ed), [r], i) : K("", !0))] };
}, th = (e, t, n) => {
	let r = wm(e, t, n);
	if (!r.props.length || t.tagType === 1) return r;
	e.arg && n.onError(Qm(59, e.arg.loc));
	let { tag: i } = t, a = n.isCustomElement(i);
	if (i === "input" || i === "textarea" || i === "select" || a) {
		let o = zm, s = !1;
		if (i === "input" || a) {
			let r = of(t, "type");
			if (r) {
				if (r.type === 7) o = Vm;
				else if (r.value) switch (r.value.content) {
					case "radio":
						o = Lm;
						break;
					case "checkbox":
						o = Rm;
						break;
					case "file": s = !0, n.onError(Qm(60, e.loc));
				}
			} else cf(t) && (o = Vm);
		} else i === "select" && (o = Bm);
		s || (r.needRuntime = n.helper(o));
	} else n.onError(Qm(58, e.loc));
	return r.props = r.props.filter((e) => e.key.type !== 4 || e.key.content !== "modelValue"), r;
}, nh = /* @__PURE__ */ r("passive,once,capture"), rh = /* @__PURE__ */ r("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"), ih = /* @__PURE__ */ r("left,right"), ah = /* @__PURE__ */ r("onkeyup,onkeydown,onkeypress"), oh = (e, t, n, r) => {
	let i = [], a = [], o = [];
	for (let s = 0; s < t.length; s++) {
		let c = t[s].content;
		c === "native" && Wd("COMPILER_V_ON_NATIVE", n, r) || nh(c) ? o.push(c) : ih(c) ? qd(e) ? ah(e.content.toLowerCase()) ? i.push(c) : a.push(c) : (i.push(c), a.push(c)) : rh(c) ? a.push(c) : i.push(c);
	}
	return {
		keyModifiers: i,
		nonKeyModifiers: a,
		eventOptionModifiers: o
	};
}, sh = (e, t) => qd(e) && e.content.toLowerCase() === "onclick" ? K(t, !0) : e.type === 4 ? e : Td([
	"(",
	e,
	`) === "onClick" ? "${t}" : (`,
	e,
	")"
]), ch = (e, t, n) => vm(e, t, n, (t) => {
	let { modifiers: r } = e;
	if (!r.length) return t;
	let { key: i, value: a } = t.props[0], { keyModifiers: o, nonKeyModifiers: s, eventOptionModifiers: c } = oh(i, r, n, e.loc);
	if (s.includes("right") && (i = sh(i, "onContextmenu")), s.includes("middle") && (i = sh(i, "onMouseup")), s.length && (a = Ed(n.helper(Hm), [a, JSON.stringify(s)])), o.length && (!qd(i) || ah(i.content.toLowerCase())) && (a = Ed(n.helper(Um), [a, JSON.stringify(o)])), c.length) {
		let e = c.map(ae).join("");
		i = qd(i) ? K(`${i.content}${e}`, !0) : Td([
			"(",
			i,
			`) + "${e}"`
		]);
	}
	return { props: [G(i, a)] };
}), lh = (e, t, n) => {
	let { exp: r, loc: i } = e;
	return r || n.onError(Qm(62, i)), {
		props: [],
		needRuntime: n.helper(Wm)
	};
}, uh = (e, t) => {
	e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && t.removeNode();
}, dh = [Xm], fh = {
	cloak: Im,
	html: $m,
	text: eh,
	model: th,
	on: ch,
	show: lh
};
function ph(e, t = {}) {
	return Fm(e, u({}, Ym, t, {
		nodeTransforms: [
			uh,
			...dh,
			...t.nodeTransforms || []
		],
		directiveTransforms: u({}, fh, t.directiveTransforms || {}),
		transformHoist: null
	}));
}
//#endregion
//#region node_modules/vue/dist/vue.esm-bundler.js
var mh = /* @__PURE__ */ Object.create(null);
function hh(e, t) {
	if (!b(e)) {
		if (e.nodeType) e = e.innerHTML;
		else return o;
	}
	let n = fe(e, t), r = mh[n];
	if (r) return r;
	if (e[0] === "#") {
		let t = document.querySelector(e);
		e = t ? t.innerHTML : "";
	}
	let i = u({
		hoistStatic: !0,
		onError: void 0,
		onWarn: o
	}, t);
	!i.isCustomElement && typeof customElements < "u" && (i.isCustomElement = (e) => !!customElements.get(e));
	let { code: a } = ph(e, i), s = Function("Vue", a)(Sc);
	return s._rc = !0, mh[n] = s;
}
rc(hh);
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var gh = [
	"top",
	"right",
	"bottom",
	"left"
], _h = ["start", "end"], vh = /*#__PURE__*/ gh.reduce((e, t) => e.concat(t, t + "-" + _h[0], t + "-" + _h[1]), []), yh = Math.min, bh = Math.max, xh = Math.round, Sh = Math.floor, Ch = (e) => ({
	x: e,
	y: e
}), wh = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Th(e, t, n) {
	return bh(e, yh(t, n));
}
function Eh(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Dh(e) {
	return e.split("-")[0];
}
function Oh(e) {
	return e.split("-")[1];
}
function kh(e) {
	return e === "x" ? "y" : "x";
}
function Ah(e) {
	return e === "y" ? "height" : "width";
}
function jh(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Mh(e) {
	return kh(jh(e));
}
function Nh(e, t, n) {
	n === void 0 && (n = !1);
	let r = Oh(e), i = Mh(e), a = Ah(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Hh(o)), [o, Hh(o)];
}
function Ph(e) {
	let t = Hh(e);
	return [
		Fh(e),
		t,
		Fh(t)
	];
}
function Fh(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Ih = ["left", "right"], Lh = ["right", "left"], Rh = ["top", "bottom"], zh = ["bottom", "top"];
function Bh(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Lh : Ih : t ? Ih : Lh;
		case "left":
		case "right": return t ? Rh : zh;
		default: return [];
	}
}
function Vh(e, t, n, r) {
	let i = Oh(e), a = Bh(Dh(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Fh)))), a;
}
function Hh(e) {
	let t = Dh(e);
	return wh[t] + e.slice(t.length);
}
function Uh(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Wh(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Uh(e);
}
function Gh(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Kh(e, t, n) {
	let { reference: r, floating: i } = e, a = jh(t), o = Mh(t), s = Ah(o), c = Dh(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = Oh(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function qh(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Eh(t, e), p = Wh(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Gh(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = Gh(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Jh = 50, Yh = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: qh
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Kh(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < Jh && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Kh(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Xh = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Eh(e, t) || {};
		if (l == null) return {};
		let d = Wh(u), f = {
			x: n,
			y: r
		}, p = Mh(i), m = Ah(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = yh(d[_], T), D = yh(d[v], T), O = C - h[m] - D, ee = C / 2 - h[m] / 2 + w, te = Th(E, ee, O), ne = !c.arrow && Oh(i) != null && ee !== te && a.reference[m] / 2 - (ee < E ? E : D) - h[m] / 2 < 0, re = ne ? ee < E ? ee - E : ee - O : 0;
		return {
			[p]: f[p] + re,
			data: {
				[p]: te,
				centerOffset: ee - te - re,
				...ne && { alignmentOffset: re }
			},
			reset: ne
		};
	}
});
function Zh(e, t, n) {
	return (e ? [...n.filter((t) => Oh(t) === e), ...n.filter((t) => Oh(t) !== e)] : n.filter((e) => Dh(e) === e)).filter((n) => !e || Oh(n) === e || (t ? Fh(n) !== n : !1));
}
var Qh = function(e) {
	return e === void 0 && (e = {}), {
		name: "autoPlacement",
		options: e,
		async fn(t) {
			let { rects: n, middlewareData: r, placement: i, platform: a, elements: o } = t, { crossAxis: s = !1, alignment: c, allowedPlacements: l = vh, autoAlignment: u = !0, ...d } = Eh(e, t), f = c !== void 0 || l === vh ? Zh(c || null, u, l) : l, p = r.autoPlacement?.index || 0, m = f[p];
			if (m == null) return {};
			if (i !== m) return { reset: { placement: f[0] } };
			let h = await a.detectOverflow(t, d), g = Nh(m, n, await (a.isRTL == null ? void 0 : a.isRTL(o.floating))), _ = [
				h[Dh(m)],
				h[g[0]],
				h[g[1]]
			], v = [...r.autoPlacement?.overflows || [], {
				placement: m,
				overflows: _
			}], y = f[p + 1];
			if (y) return {
				data: {
					index: p + 1,
					overflows: v
				},
				reset: { placement: y }
			};
			let b = v.map((e) => {
				let t = Oh(e.placement);
				return [
					e.placement,
					t && s ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
					e.overflows
				];
			}).sort((e, t) => e[1] - t[1]), x = b.filter((e) => e[2].slice(0, Oh(e[0]) ? 2 : 3).every((e) => e <= 0))[0]?.[0] || b[0][0];
			return x === i ? {} : {
				data: {
					index: p + 1,
					overflows: v
				},
				reset: { placement: x }
			};
		}
	};
}, $h = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Eh(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Dh(r), _ = jh(o), v = Dh(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Hh(o)] : Ph(o)), x = p !== "none";
			!d && x && b.push(...Vh(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Nh(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === jh(t) || T.every((e) => jh(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = jh(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, eg = /*#__PURE__*/ new Set(["left", "top"]);
async function tg(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Dh(n), s = Oh(n), c = jh(n) === "y", l = eg.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Eh(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var ng = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await tg(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, rg = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Eh(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = jh(i), p = kh(f), m = u[p], h = u[f], g = (e, t) => Th(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, ig = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Eh(e, t), u = {
				x: n,
				y: r
			}, d = jh(i), f = kh(d), p = u[f], m = u[d], h = Eh(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: h.mainAxis ?? 0,
				crossAxis: h.crossAxis ?? 0
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = eg.has(Dh(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, ag = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = Eh(e, t), c = await i.detectOverflow(t, s), l = Dh(n), u = Oh(n), d = jh(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = yh(p - c[m], g), y = yh(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * bh(c.left, c.right) : S = p - 2 * bh(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/dompurify/dist/purify.es.mjs
function og(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function sg(e) {
	if (Array.isArray(e)) return e;
}
function cg(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function lg() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ug(e, t) {
	return sg(e) || cg(e, t) || dg(e, t) || lg();
}
function dg(e, t) {
	if (e) {
		if (typeof e == "string") return og(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? og(e, t) : void 0;
	}
}
var fg = Object.entries, pg = Object.setPrototypeOf, mg = Object.isFrozen, hg = Object.getPrototypeOf, gg = Object.getOwnPropertyDescriptor, _g = Object.freeze, vg = Object.seal, yg = Object.create, bg = typeof Reflect < "u" && Reflect, xg = bg.apply, Sg = bg.construct;
_g ||= function(e) {
	return e;
}, vg ||= function(e) {
	return e;
}, xg ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, Sg ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var Cg = Ug(Array.prototype.forEach), wg = Ug(Array.prototype.lastIndexOf), Tg = Ug(Array.prototype.pop), Eg = Ug(Array.prototype.push), Dg = Ug(Array.prototype.splice), Og = Array.isArray, kg = Ug(String.prototype.toLowerCase), Ag = Ug(String.prototype.toString), jg = Ug(String.prototype.match), Mg = Ug(String.prototype.replace), Ng = Ug(String.prototype.indexOf), Pg = Ug(String.prototype.trim), Fg = Ug(Number.prototype.toString), Ig = Ug(Boolean.prototype.toString), Lg = typeof BigInt > "u" ? null : Ug(BigInt.prototype.toString), Rg = typeof Symbol > "u" ? null : Ug(Symbol.prototype.toString), zg = Ug(Object.prototype.hasOwnProperty), Bg = Ug(Object.prototype.toString), Vg = Ug(RegExp.prototype.test), Hg = Wg(TypeError);
function Ug(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return xg(e, t, n);
	};
}
function Wg(e) {
	return function() {
		return Sg(e, [...arguments]);
	};
}
function $(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kg;
	if (pg && pg(e, null), !Og(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (mg(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function Gg(e) {
	for (let t = 0; t < e.length; t++) zg(e, t) || (e[t] = null);
	return e;
}
function Kg(e) {
	let t = yg(null);
	for (let r of fg(e)) {
		var n = ug(r, 2);
		let i = n[0], a = n[1];
		zg(e, i) && (t[i] = Og(a) ? Gg(a) : a && typeof a == "object" && a.constructor === Object ? Kg(a) : a);
	}
	return t;
}
function qg(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return Fg(e);
		case "boolean": return Ig(e);
		case "bigint": return Lg ? Lg(e) : "0";
		case "symbol": return Rg ? Rg(e) : "Symbol()";
		case "undefined": return Bg(e);
		case "function":
		case "object": {
			if (e === null) return Bg(e);
			let t = e, n = Jg(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : Bg(e);
			}
			return Bg(e);
		}
		default: return Bg(e);
	}
}
function Jg(e, t) {
	for (; e !== null;) {
		let n = gg(e, t);
		if (n) {
			if (n.get) return Ug(n.get);
			if (typeof n.value == "function") return Ug(n.value);
		}
		e = hg(e);
	}
	function n() {
		return null;
	}
	return n;
}
function Yg(e) {
	try {
		return Vg(e, ""), !0;
	} catch {
		return !1;
	}
}
var Xg = _g(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), Zg = _g(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), Qg = _g([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), $g = _g([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), e_ = _g(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), t_ = _g([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), n_ = _g(["#text"]), r_ = _g(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), i_ = _g(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), a_ = _g(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), o_ = _g([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), s_ = vg(/{{[\w\W]*|^[\w\W]*}}/g), c_ = vg(/<%[\w\W]*|^[\w\W]*%>/g), l_ = vg(/\${[\w\W]*/g), u_ = vg(/^data-[\-\w.\u00B7-\uFFFF]+$/), d_ = vg(/^aria-[\-\w]+$/), f_ = vg(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), p_ = vg(/^(?:\w+script|data):/i), m_ = vg(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), h_ = vg(/^html$/i), g_ = vg(/^[a-z][.\w]*(-[.\w]+)+$/i), __ = vg(/<[/\w!]/g), v_ = vg(/<[/\w]/g), y_ = vg(/<\/no(script|embed|frames)/i), b_ = vg(/\/>/i), x_ = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, S_ = function() {
	return typeof window > "u" ? null : window;
}, C_ = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, w_ = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
}, T_ = function(e, t, n, r) {
	return zg(e, t) && Og(e[t]) ? $(r.base ? Kg(r.base) : {}, e[t], r.transform) : n;
};
function E_() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S_(), t = (e) => E_(e);
	if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== x_.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, o = e.Node, s = e.Element, c = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let l = e.DOMParser, u = e.trustedTypes, d = s.prototype, f = Jg(d, "cloneNode"), p = Jg(d, "remove"), m = Jg(d, "nextSibling"), h = Jg(d, "childNodes"), g = Jg(d, "parentNode"), _ = Jg(d, "shadowRoot"), v = Jg(d, "attributes"), y = o && o.prototype ? Jg(o.prototype, "nodeType") : null, b = o && o.prototype ? Jg(o.prototype, "nodeName") : null, x = o && o.prototype ? Jg(o.prototype, "ownerDocument") : null;
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let S, C = "", w, T = !1, E = 0, D = function() {
		if (E > 0) throw Hg("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, O = function(e) {
		D(), E++;
		try {
			return S.createHTML(e);
		} finally {
			E--;
		}
	}, ee = function(e) {
		D(), E++;
		try {
			return S.createScriptURL(e);
		} finally {
			E--;
		}
	}, te = function() {
		return T ||= (w = C_(u, i), !0), w;
	}, ne = n, re = ne.implementation, k = ne.createNodeIterator, ie = ne.createDocumentFragment, A = ne.getElementsByTagName, ae = r.importNode, j = w_();
	t.isSupported = typeof fg == "function" && typeof g == "function" && re && re.createHTMLDocument !== void 0;
	let M = s_, oe = c_, se = l_, ce = u_, le = d_, ue = p_, de = m_, fe = g_, pe = f_, N = null, me = $({}, [
		...Xg,
		...Zg,
		...Qg,
		...e_,
		...n_
	]), P = null, he = $({}, [
		...r_,
		...i_,
		...a_,
		...o_
	]), F = Object.seal(yg(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), ge = null, _e = null, ve = Object.seal(yg(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), ye = !0, be = !0, xe = !1, Se = !0, Ce = !1, we = !0, Te = !1, Ee = !1, De = null, Oe = null, ke = !1, Ae = !1, je = !1, Me = !1, Ne = !0, Pe = !1, Fe = "user-content-", Ie = !0, I = !1, Le = {}, Re = null, ze = $({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), Be = null, L = $({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Ve = null, He = $({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), Ue = "http://www.w3.org/1998/Math/MathML", We = "http://www.w3.org/2000/svg", Ge = "http://www.w3.org/1999/xhtml", Ke = Ge, qe = !1, Je = null, Ye = $({}, [
		Ue,
		We,
		Ge
	], Ag), Xe = _g([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Ze = $({}, Xe), Qe = _g(["annotation-xml"]), $e = $({}, Qe), et = $({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), tt = null, nt = ["application/xhtml+xml", "text/html"], R = null, rt = null, it = n.createElement("form"), at = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, ot = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (rt && rt === e) return;
		(!e || typeof e != "object") && (e = {}), e = Kg(e), tt = nt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, R = tt === "application/xhtml+xml" ? Ag : kg, N = T_(e, "ALLOWED_TAGS", me, { transform: R }), P = T_(e, "ALLOWED_ATTR", he, { transform: R }), Je = T_(e, "ALLOWED_NAMESPACES", Ye, { transform: Ag }), Ve = T_(e, "ADD_URI_SAFE_ATTR", He, {
			transform: R,
			base: He
		}), Be = T_(e, "ADD_DATA_URI_TAGS", L, {
			transform: R,
			base: L
		}), Re = T_(e, "FORBID_CONTENTS", ze, { transform: R }), ge = T_(e, "FORBID_TAGS", Kg({}), { transform: R }), _e = T_(e, "FORBID_ATTR", Kg({}), { transform: R }), Le = zg(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? Kg(e.USE_PROFILES) : e.USE_PROFILES : !1, ye = e.ALLOW_ARIA_ATTR !== !1, be = e.ALLOW_DATA_ATTR !== !1, xe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Se = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ce = e.SAFE_FOR_TEMPLATES || !1, we = e.SAFE_FOR_XML !== !1, Te = e.WHOLE_DOCUMENT || !1, Ae = e.RETURN_DOM || !1, je = e.RETURN_DOM_FRAGMENT || !1, Me = e.RETURN_TRUSTED_TYPE || !1, ke = e.FORCE_BODY || !1, Ne = e.SANITIZE_DOM !== !1, Pe = e.SANITIZE_NAMED_PROPS || !1, Ie = e.KEEP_CONTENT !== !1, I = e.IN_PLACE || !1, pe = Yg(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : f_, Ke = typeof e.NAMESPACE == "string" ? e.NAMESPACE : Ge, Ze = zg(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Kg(e.MATHML_TEXT_INTEGRATION_POINTS) : $({}, Xe), $e = zg(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? Kg(e.HTML_INTEGRATION_POINTS) : $({}, Qe);
		let t = zg(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? Kg(e.CUSTOM_ELEMENT_HANDLING) : yg(null);
		if (F = yg(null), zg(t, "tagNameCheck") && at(t.tagNameCheck) && (F.tagNameCheck = t.tagNameCheck), zg(t, "attributeNameCheck") && at(t.attributeNameCheck) && (F.attributeNameCheck = t.attributeNameCheck), zg(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (F.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), vg(F), Ce && (be = !1), je && (Ae = !0), Le && (N = $({}, n_), P = yg(null), Le.html === !0 && ($(N, Xg), $(P, r_)), Le.svg === !0 && ($(N, Zg), $(P, i_), $(P, o_)), Le.svgFilters === !0 && ($(N, Qg), $(P, i_), $(P, o_)), Le.mathMl === !0 && ($(N, e_), $(P, a_), $(P, o_))), ve.tagCheck = null, ve.attributeCheck = null, zg(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? ve.tagCheck = e.ADD_TAGS : Og(e.ADD_TAGS) && (N === me && (N = Kg(N)), $(N, e.ADD_TAGS, R))), zg(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? ve.attributeCheck = e.ADD_ATTR : Og(e.ADD_ATTR) && (P === he && (P = Kg(P)), $(P, e.ADD_ATTR, R))), zg(e, "ADD_URI_SAFE_ATTR") && Og(e.ADD_URI_SAFE_ATTR) && $(Ve, e.ADD_URI_SAFE_ATTR, R), zg(e, "FORBID_CONTENTS") && Og(e.FORBID_CONTENTS) && (Re === ze && (Re = Kg(Re)), $(Re, e.FORBID_CONTENTS, R)), zg(e, "ADD_FORBID_CONTENTS") && Og(e.ADD_FORBID_CONTENTS) && (Re === ze && (Re = Kg(Re)), $(Re, e.ADD_FORBID_CONTENTS, R)), Ie && (N["#text"] = !0), Te && $(N, [
			"html",
			"head",
			"body"
		]), N.table && ($(N, ["tbody"]), delete ge.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw Hg("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Hg("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = S;
			S = e.TRUSTED_TYPES_POLICY;
			try {
				C = O("");
			} catch (e) {
				throw S = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (S = void 0, C = "") : (S === void 0 && (S = te()), S && typeof C == "string" && (C = O("")));
		_g && _g(e), rt = e;
	}, st = $({}, [
		...Zg,
		...Qg,
		...$g
	]), ct = $({}, [...e_, ...t_]), lt = function(e, t, n) {
		return t.namespaceURI === Ge ? e === "svg" : t.namespaceURI === Ue ? e === "svg" && (n === "annotation-xml" || Ze[n]) : !!st[e];
	}, ut = function(e, t, n) {
		return t.namespaceURI === Ge ? e === "math" : t.namespaceURI === We ? e === "math" && $e[n] : !!ct[e];
	}, dt = function(e, t, n) {
		return t.namespaceURI === We && !$e[n] || t.namespaceURI === Ue && !Ze[n] ? !1 : !ct[e] && (et[e] || !st[e]);
	}, ft = function(e) {
		let t = g(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: Ke,
			tagName: "template"
		});
		let n = kg(e.tagName), r = kg(t.tagName);
		return Je[e.namespaceURI] ? e.namespaceURI === We ? lt(n, t, r) : e.namespaceURI === Ue ? ut(n, t, r) : e.namespaceURI === Ge ? dt(n, t, r) : !!(tt === "application/xhtml+xml" && Je[e.namespaceURI]) : !1;
	}, pt = function(e) {
		Eg(t.removed, { element: e });
		try {
			g(e).removeChild(e);
		} catch {
			if (p(e), !g(e)) throw Hg("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, mt = function(e) {
		gt(e);
		let t = h(e);
		if (t) {
			let e = [];
			Cg(t, (t) => {
				Eg(e, t);
			}), Cg(e, (e) => {
				try {
					p(e);
				} catch {}
			});
		}
		let n = v(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			if (typeof i == "string") try {
				e.removeAttribute(i);
			} catch {}
		}
	}, z = function(e, n) {
		try {
			Eg(t.removed, {
				attribute: n.getAttributeNode(e),
				from: n
			});
		} catch {
			Eg(t.removed, {
				attribute: null,
				from: n
			});
		}
		if (n.removeAttribute(e), e === "is") {
			if (Ae || je) try {
				pt(n);
			} catch {}
			else try {
				n.setAttribute(e, "");
			} catch {}
		}
	}, ht = function(e) {
		let t = v(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			if (!(typeof i != "string" || P[R(i)])) try {
				e.removeAttribute(i);
			} catch {}
		}
	}, gt = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			(y ? y(e) : e.nodeType) === x_.element && ht(e);
			let n = h(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, _t = function(e) {
		if (!we) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = y ? y(e) : e.nodeType;
			if (n === x_.processingInstruction || n === x_.comment && Vg(v_, e.data)) {
				try {
					p(e);
				} catch {}
				continue;
			}
			if (n === x_.element) {
				let t = e, n = R(b ? b(e) : e.nodeName);
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && n !== "label" && n !== "output" && t.removeAttribute("for");
				} catch {}
			}
			let r = h(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, vt = function(e) {
		let t = null, r = null;
		if (ke) e = "<remove></remove>" + e;
		else {
			let t = jg(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		tt === "application/xhtml+xml" && Ke === Ge && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = S ? O(e) : e;
		if (Ke === Ge) try {
			t = new l().parseFromString(i, tt);
		} catch {}
		if (!t || !t.documentElement) {
			t = re.createDocument(Ke, "template", null);
			try {
				t.documentElement.innerHTML = qe ? C : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), Ke === Ge ? A.call(t, Te ? "html" : "body")[0] : Te ? t.documentElement : a;
	}, yt = function(e) {
		let t = x ? x(e) : e.ownerDocument;
		return k.call(t || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, bt = function(e) {
		return e = Mg(e, M, " "), e = Mg(e, oe, " "), e = Mg(e, se, " "), e;
	}, xt = function(e) {
		e.normalize();
		let t = x ? x(e) : e.ownerDocument, n = k.call(t || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = bt(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && Cg(i, (e) => {
			Ct(e.content) && xt(e.content);
		});
	}, St = function(e) {
		let t = b ? b(e) : null;
		return typeof t != "string" || R(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== v(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== y(e) || e.childNodes !== h(e);
	}, Ct = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return y(e) === x_.documentFragment;
		} catch {
			return !1;
		}
	}, wt = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return typeof y(e) == "number";
		} catch {
			return !1;
		}
	};
	function Tt(e, n, r) {
		e.length !== 0 && Cg(e, (e) => {
			e.call(t, n, r, rt);
		});
	}
	let Et = function(e, t) {
		return !!(we && e.hasChildNodes() && !wt(e.firstElementChild) && Vg(__, e.textContent) && Vg(__, e.innerHTML) || we && e.namespaceURI === Ge && t === "style" && wt(e.firstElementChild) || e.nodeType === x_.processingInstruction || we && e.nodeType === x_.comment && Vg(v_, e.data));
	}, Dt = function(e, t, n) {
		if (!ge[t] && Mt(t) && (F.tagNameCheck instanceof RegExp && Vg(F.tagNameCheck, t) || F.tagNameCheck instanceof Function && F.tagNameCheck(t))) return !1;
		if (Ie && !Re[t]) {
			let t = g(e), r = h(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? f(r[a], !0) : r[a];
					t.insertBefore(i, m(e));
				}
			}
		}
		return pt(e), !0;
	}, Ot = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? Kg(t) : t;
	}, kt = function(e, n) {
		if (Tt(j.beforeSanitizeElements, e, null), e !== n && g(e) === null) return I && gt(e), !0;
		if (St(e)) return pt(e), !0;
		let r = R(b ? b(e) : e.nodeName);
		if (N = Ot(j.uponSanitizeElement, N, me, De), Tt(j.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: N
		}), e !== n && g(e) === null) return I && gt(e), !0;
		if (Et(e, r)) return pt(e), !0;
		if (ge[r] || !(ve.tagCheck instanceof Function && ve.tagCheck(r)) && !N[r]) {
			let t = Dt(e, r, n);
			return t === !1 && Tt(j.afterSanitizeElements, e, null), t;
		}
		if ((y ? y(e) : e.nodeType) === x_.element && !ft(e) || (r === "noscript" || r === "noembed" || r === "noframes") && Vg(y_, e.innerHTML)) return pt(e), !0;
		if (Ce && e.nodeType === x_.text) {
			let n = bt(e.textContent);
			e.textContent !== n && (Eg(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return Tt(j.afterSanitizeElements, e, null), !1;
	}, At = function(e, t, r) {
		if (_e[t] || we && t === "patchsrc" || we && t === "for" && e !== "label" && e !== "output" || Ne && (t === "id" || t === "name") && (r in n || r in it)) return !1;
		let i = P[t] || ve.attributeCheck instanceof Function && ve.attributeCheck(t, e);
		if (!(be && Vg(ce, t)) && !(ye && Vg(le, t))) {
			if (!i) {
				if (!(Mt(e) && (F.tagNameCheck instanceof RegExp && Vg(F.tagNameCheck, e) || F.tagNameCheck instanceof Function && F.tagNameCheck(e)) && (F.attributeNameCheck instanceof RegExp && Vg(F.attributeNameCheck, t) || F.attributeNameCheck instanceof Function && F.attributeNameCheck(t, e)) || t === "is" && F.allowCustomizedBuiltInElements && (F.tagNameCheck instanceof RegExp && Vg(F.tagNameCheck, r) || F.tagNameCheck instanceof Function && F.tagNameCheck(r)))) return !1;
			} else if (!Ve[t] && !Vg(pe, Mg(r, de, "")) && !((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && Ng(r, "data:") === 0 && Be[e]) && !(xe && !Vg(ue, Mg(r, de, ""))) && r) return !1;
		}
		return !0;
	}, jt = $({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), Mt = function(e) {
		return !jt[kg(e)] && Vg(fe, e);
	}, Nt = function(e, t, n, r) {
		if (S && typeof u == "object" && typeof u.getAttributeType == "function" && !n) switch (u.getAttributeType(e, t)) {
			case "TrustedHTML": return O(r);
			case "TrustedScriptURL": return ee(r);
		}
		return r;
	}, Pt = function(e, n, r, i) {
		try {
			r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i), St(e) ? pt(e) : Tg(t.removed);
		} catch {
			z(n, e);
		}
	}, Ft = function(e) {
		Tt(j.beforeSanitizeAttributes, e, null);
		let t = e.attributes;
		if (!t || St(e)) return;
		P = Ot(j.uponSanitizeAttribute, P, he, Oe);
		let n = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: P,
			forceKeepAttr: void 0
		}, r = t.length, i = R(e.nodeName);
		for (; r--;) {
			let a = t[r], o = a.name, s = a.namespaceURI, c = a.value, l = R(o), u = c, d = o === "value" ? u : Pg(u);
			if (n.attrName = l, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, Tt(j.uponSanitizeAttribute, e, n), d = n.attrValue, Pe && (l === "id" || l === "name") && Ng(d, Fe) !== 0 && (z(o, e), d = Fe + d), we && Vg(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
				z(o, e);
				continue;
			}
			if (l === "attributename" && jg(d, "href")) {
				z(o, e);
				continue;
			}
			if (!n.forceKeepAttr) {
				if (!n.keepAttr) {
					z(o, e);
					continue;
				}
				if (!Se && Vg(b_, d)) {
					z(o, e);
					continue;
				}
				if (Ce && (d = bt(d)), !At(i, l, d)) {
					z(o, e);
					continue;
				}
				d = Nt(i, l, s, d), d !== u && Pt(e, o, s, d);
			}
		}
		Tt(j.afterSanitizeAttributes, e, null);
	}, It = function(e) {
		let t = null, n = yt(e);
		for (Tt(j.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if (Tt(j.uponSanitizeShadowNode, t, null), kt(t, e), Ft(t), Ct(t.content) && It(t.content), (y ? y(t) : t.nodeType) === x_.element) {
			let e = _(t);
			Ct(e) && (Lt(e), It(e));
		}
		Tt(j.afterSanitizeShadowDOM, e, null);
	}, Lt = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				It(e.shadow);
				continue;
			}
			let n = e.node, r = (y ? y(n) : n.nodeType) === x_.element, i = h(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = b ? b(n) : null;
				if (typeof e == "string" && R(e) === "template") {
					let e = n.content;
					Ct(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = _(n);
				Ct(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (qe = !e, qe && (e = "<!-->"), typeof e != "string" && !wt(e) && (e = qg(e), typeof e != "string")) throw Hg("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		Ee ? (N = De, P = Oe) : ot(n), (j.uponSanitizeElement.length > 0 || j.uponSanitizeAttribute.length > 0) && (N = Kg(N)), j.uponSanitizeAttribute.length > 0 && (P = Kg(P)), t.removed = [];
		let c = I && typeof e != "string" && wt(e);
		if (c) {
			_t(e);
			let t = b ? b(e) : e.nodeName;
			if (typeof t == "string") {
				let n = R(t);
				if (!N[n] || ge[n]) throw mt(e), Hg("root node is forbidden and cannot be sanitized in-place");
			}
			if (St(e)) throw mt(e), Hg("root node is clobbered and cannot be sanitized in-place");
			try {
				Lt(e);
			} catch (t) {
				throw mt(e), t;
			}
		} else if (wt(e)) i = vt("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === x_.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), Lt(a);
		else {
			if (!Ae && !Ce && !Te && e.indexOf("<") === -1) return S && Me ? O(e) : e;
			if (i = vt(e), !i) return Ae ? null : Me ? C : "";
		}
		i && ke && pt(i.firstChild);
		let l = c ? e : i;
		try {
			let e = yt(l);
			for (; o = e.nextNode();) kt(o, l), Ft(o), Ct(o.content) && It(o.content);
		} catch (n) {
			throw c && (mt(e), Cg(t.removed, (e) => {
				e.element && gt(e.element);
			})), n;
		}
		if (c) return Cg(t.removed, (e) => {
			e.element && gt(e.element);
		}), Ce && xt(e), e;
		if (Ae) {
			if (Ce && xt(i), je) for (s = ie.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (P.shadowroot || P.shadowrootmode) && (s = ae.call(r, s, !0)), s;
		}
		let u = Te ? i.outerHTML : i.innerHTML;
		return Te && N["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && Vg(h_, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), Ce && (u = bt(u)), S && Me ? O(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		ot(e), Ee = !0, De = N, Oe = P;
	}, t.clearConfig = function() {
		rt = null, Ee = !1, De = null, Oe = null, S = w, C = "";
	}, t.isValidAttribute = function(e, t, n) {
		rt || ot({});
		let r = R(e), i = R(t);
		return At(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && zg(j, e) && Eg(j[e], t);
	}, t.removeHook = function(e, t) {
		if (zg(j, e)) {
			if (t !== void 0) {
				let n = wg(j[e], t);
				return n === -1 ? void 0 : Dg(j[e], n, 1)[0];
			}
			return Tg(j[e]);
		}
	}, t.removeHooks = function(e) {
		zg(j, e) && (j[e] = []);
	}, t.removeAllHooks = function() {
		j = w_();
	}, t;
}
var D_ = E_(), O_ = /* @__PURE__ */ t((/* @__PURE__ */ n(((e, t) => {
	var n = /["'&<>]/;
	t.exports = r;
	function r(e) {
		var t = "" + e, r = n.exec(t);
		if (!r) return t;
		var i, a = "", o = 0, s = 0;
		for (o = r.index; o < t.length; o++) {
			switch (t.charCodeAt(o)) {
				case 34:
					i = "&quot;";
					break;
				case 38:
					i = "&amp;";
					break;
				case 39:
					i = "&#39;";
					break;
				case 60:
					i = "&lt;";
					break;
				case 62:
					i = "&gt;";
					break;
				default: continue;
			}
			s !== o && (a += t.substring(s, o)), s = o + 1, a += i;
		}
		return s === o ? a : a + t.substring(s, o);
	}
})))(), 1);
function k_() {
	return globalThis._nc_l10n_locale;
}
function A_() {
	return k_().replaceAll(/_/g, "-");
}
function j_() {
	return globalThis._nc_l10n_language;
}
function M_(e) {
	let t = e || j_();
	return [
		"ae",
		"ar",
		"arc",
		"arz",
		"bcc",
		"bqi",
		"ckb",
		"dv",
		"fa",
		"glk",
		"ha",
		"he",
		"khw",
		"ks",
		"ku",
		"mzn",
		"nqo",
		"pnb",
		"ps",
		"sd",
		"ug",
		"ur",
		"ur-PK",
		"uz-AF",
		"yi"
	].includes(t);
}
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_"), globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function N_(e) {
	return {
		translations: globalThis._oc_l10n_registry_translations[e] ?? {},
		pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((e) => e)
	};
}
globalThis._oc_l10n_registry_translations ??= {}, globalThis._oc_l10n_registry_plural_functions ??= {};
function P_(e, t, n, r, i) {
	let a = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, s = {
		escape: !0,
		sanitize: !0,
		...typeof i == "object" ? i : typeof r == "object" ? r : {}
	}, c = (e) => e, l = (s.sanitize ? D_.sanitize : c) || c, u = s.escape ? O_.default : c, d = (e) => typeof e == "string" || typeof e == "number", f = (e, t, n) => e.replace(/%n/g, "" + n).replace(/{([^{}]*)}/g, (e, n) => {
		if (t === void 0 || !(n in t)) return u(e);
		let r = t[n];
		return d(r) ? u(`${r}`) : typeof r == "object" && d(r.value) ? (r.escape === !1 ? c : O_.default)(`${r.value}`) : u(e);
	}), p = (i?.bundle ?? N_(e)).translations[t] || t;
	return p = Array.isArray(p) ? p[0] : p, l(typeof a == "object" || o !== void 0 ? f(p, a, o) : p);
}
function F_(e, t, n, r, i, a) {
	let o = "_" + t + "_::_" + n + "_", s = a?.bundle ?? N_(e), c = s.translations[o];
	if (c !== void 0) {
		let t = c;
		if (Array.isArray(t)) return P_(e, t[s.pluralFunction(r)], i, r, a);
	}
	return r === 1 ? P_(e, t, i, r, a) : P_(e, n, i, r, a);
}
function I_(e, t = j_()) {
	switch (t === "pt-BR" && (t = "xbr"), t.length > 3 && (t = t.substring(0, t.lastIndexOf("-"))), t) {
		case "az":
		case "bo":
		case "dz":
		case "id":
		case "ja":
		case "jv":
		case "ka":
		case "km":
		case "kn":
		case "ko":
		case "ms":
		case "th":
		case "tr":
		case "vi":
		case "zh": return 0;
		case "af":
		case "bn":
		case "bg":
		case "ca":
		case "da":
		case "de":
		case "el":
		case "en":
		case "eo":
		case "es":
		case "et":
		case "eu":
		case "fa":
		case "fi":
		case "fo":
		case "fur":
		case "fy":
		case "gl":
		case "gu":
		case "ha":
		case "he":
		case "hu":
		case "is":
		case "it":
		case "ku":
		case "lb":
		case "ml":
		case "mn":
		case "mr":
		case "nah":
		case "nb":
		case "ne":
		case "nl":
		case "nn":
		case "no":
		case "oc":
		case "om":
		case "or":
		case "pa":
		case "pap":
		case "ps":
		case "pt":
		case "so":
		case "sq":
		case "sv":
		case "sw":
		case "ta":
		case "te":
		case "tk":
		case "ur":
		case "zu": return e === 1 ? 0 : 1;
		case "am":
		case "bh":
		case "fil":
		case "fr":
		case "gun":
		case "hi":
		case "hy":
		case "ln":
		case "mg":
		case "nso":
		case "xbr":
		case "ti":
		case "wa": return e === 0 || e === 1 ? 0 : 1;
		case "be":
		case "bs":
		case "hr":
		case "ru":
		case "sh":
		case "sr":
		case "uk": return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
		case "cs":
		case "sk": return e === 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
		case "ga": return e === 1 ? 0 : e === 2 ? 1 : 2;
		case "lt": return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
		case "sl": return e % 100 == 1 ? 0 : e % 100 == 2 ? 1 : e % 100 == 3 || e % 100 == 4 ? 2 : 3;
		case "mk": return e % 10 == 1 ? 0 : 1;
		case "mt": return e === 1 ? 0 : e === 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
		case "lv": return e === 0 ? 0 : e % 10 == 1 && e % 100 != 11 ? 1 : 2;
		case "pl": return e === 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 12 || e % 100 > 14) ? 1 : 2;
		case "cy": return e === 1 ? 0 : e === 2 ? 1 : e === 8 || e === 11 ? 2 : 3;
		case "ro": return e === 1 ? 0 : e === 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
		case "ar": return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 && e % 100 <= 99 ? 4 : 5;
		default: return 0;
	}
}
//#endregion
//#region node_modules/@nextcloud/l10n/dist/index.mjs
function L_() {
	if (globalThis.firstDay !== void 0) return globalThis.firstDay;
	let e = new Intl.Locale(A_()), t = e.getWeekInfo?.() ?? e.weekInfo;
	return t ? t.firstDay % 7 : 1;
}
function R_() {
	if (globalThis.dayNames !== void 0) return globalThis.dayNames;
	let e = A_();
	return [
		new Date(1970, 0, 4).toLocaleDateString(e, { weekday: "long" }),
		new Date(1970, 0, 5).toLocaleDateString(e, { weekday: "long" }),
		new Date(1970, 0, 6).toLocaleDateString(e, { weekday: "long" }),
		new Date(1970, 0, 7).toLocaleDateString(e, { weekday: "long" }),
		new Date(1970, 0, 8).toLocaleDateString(e, { weekday: "long" }),
		new Date(1970, 0, 9).toLocaleDateString(e, { weekday: "long" }),
		new Date(1970, 0, 10).toLocaleDateString(e, { weekday: "long" })
	];
}
function z_() {
	if (globalThis.dayNamesMin !== void 0) return globalThis.dayNamesMin;
	let e = A_();
	return [
		new Date(1970, 0, 4).toLocaleDateString(e, { weekday: "narrow" }),
		new Date(1970, 0, 5).toLocaleDateString(e, { weekday: "narrow" }),
		new Date(1970, 0, 6).toLocaleDateString(e, { weekday: "narrow" }),
		new Date(1970, 0, 7).toLocaleDateString(e, { weekday: "narrow" }),
		new Date(1970, 0, 8).toLocaleDateString(e, { weekday: "narrow" }),
		new Date(1970, 0, 9).toLocaleDateString(e, { weekday: "narrow" }),
		new Date(1970, 0, 10).toLocaleDateString(e, { weekday: "narrow" })
	];
}
function B_(e = Date.now(), t = {}) {
	let n = {
		ignoreSeconds: !1,
		language: j_(),
		relativeTime: "long",
		...t
	}, r = new Date(e), i = new Intl.RelativeTimeFormat([n.language, j_()], {
		numeric: "auto",
		style: n.relativeTime
	}), a = (r.getTime() - Date.now()) / 1e3;
	if (Math.abs(a) < 59.5) return n.ignoreSeconds || i.format(Math.round(a), "second");
	let o = a / 60;
	if (Math.abs(o) <= 59) return i.format(Math.round(o), "minute");
	let s = o / 60;
	if (Math.abs(s) < 23.5) return i.format(Math.round(s), "hour");
	let c = s / 24;
	if (Math.abs(c) < 6.5) return i.format(Math.round(c), "day");
	if (Math.abs(c) < 27.5) {
		let e = c / 7;
		return i.format(Math.round(e), "week");
	}
	let l = c / 30, u = Math.abs(l) < 11 ? {
		month: n.relativeTime,
		day: "numeric"
	} : {
		year: n.relativeTime === "narrow" ? "2-digit" : "numeric",
		month: n.relativeTime
	};
	return new Intl.DateTimeFormat([n.language, j_()], u).format(r);
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/legacy-BoqDmOCa.mjs
var [V_] = window.OC?.config?.version?.split(".") ?? [], H_ = Number.parseInt(V_ ?? "34"), U_ = H_ < 32, W_ = H_ < 34, G_ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, K_ = class {
	bundle;
	constructor(e) {
		this.bundle = {
			pluralFunction: e,
			translations: {}
		};
	}
	addTranslations(e) {
		let t = Object.values(e.translations[""] ?? {}).map(({ msgid: e, msgid_plural: t, msgstr: n }) => t === void 0 ? [e, n[0]] : [`_${e}_::_${t}_`, n]);
		this.bundle.translations = {
			...this.bundle.translations,
			...Object.fromEntries(t)
		};
	}
	gettext(e, t = {}) {
		return P_("", e, t, void 0, { bundle: this.bundle });
	}
	ngettext(e, t, n, r = {}) {
		return F_("", e, t, n, r, { bundle: this.bundle });
	}
}, q_ = class {
	debug = !1;
	language = "en";
	translations = {};
	setLanguage(e) {
		return this.language = e, this;
	}
	detectLocale() {
		return this.detectLanguage();
	}
	detectLanguage() {
		return this.setLanguage(j_().replace("-", "_"));
	}
	addTranslation(e, t) {
		return this.translations[e] = t, this;
	}
	enableDebugMode() {
		return this.debug = !0, this;
	}
	build() {
		this.debug && console.debug(`Creating gettext instance for language ${this.language}`);
		let e = new K_((e) => I_(e, this.language));
		return this.language in this.translations && e.addTranslations(this.translations[this.language]), e;
	}
};
function J_() {
	return new q_();
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/_l10n-wdIzZwir.mjs
var Y_ = J_().detectLanguage().build(), X_ = (...e) => Y_.ngettext(...e), Z_ = (...e) => Y_.gettext(...e);
function Q_(...e) {
	for (let t of e) if (!t.registered) {
		for (let { l: e, t: n } of t) {
			if (e !== j_() || !n) continue;
			let t = Object.fromEntries(Object.entries(n).map(([e, t]) => [e, {
				msgid: e,
				msgid_plural: t.p,
				msgstr: t.v
			}]));
			Y_.addTranslations({ translations: { "": t } });
		}
		t.registered = !0;
	}
}
var $_ = [
	{
		l: "ar",
		t: {
			"A color with a HEX value {hex}": { v: ["لون بالقيمة الست عشرية {hex}"] },
			Back: { v: ["عودة"] },
			Choose: { v: ["إختَر"] },
			"Color picker": { v: ["لاقط الألوان"] },
			"More options": { v: ["خيارات أخرى ..."] }
		}
	},
	{
		l: "ast",
		t: {
			"A color with a HEX value {hex}": { v: ["Un color con un valor HEX {hex}"] },
			Back: { v: ["Atrás"] },
			Choose: { v: ["Escoyer"] },
			"Color picker": { v: ["Selector de colores"] },
			"More options": { v: ["Más opciones"] }
		}
	},
	{
		l: "br",
		t: { Choose: { v: ["Dibab"] } }
	},
	{
		l: "ca",
		t: { Choose: { v: ["Tria"] } }
	},
	{
		l: "cs",
		t: {
			"A color with a HEX value {hex}": { v: ["Barva vyjádřená HEX hodnotou {hex}"] },
			Back: { v: ["Zpět"] },
			Choose: { v: ["Zvolit"] },
			"Color picker": { v: ["Výběr barev"] },
			"More options": { v: ["Další volby"] },
			"No color": { v: ["Žádná barva"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			"A color with a HEX value {hex}": { v: ["Barva vyjádřená HEX hodnotou {hex}"] },
			Back: { v: ["Zpět"] },
			Choose: { v: ["Zvolit"] },
			"Color picker": { v: ["Výběr barev"] },
			"More options": { v: ["Další volby"] }
		}
	},
	{
		l: "da",
		t: {
			"A color with a HEX value {hex}": { v: ["En farve med en HEX-værdi {hex}"] },
			Back: { v: ["Tilbage"] },
			Choose: { v: ["Vælg"] },
			"Color picker": { v: ["Farvevælger"] },
			"More options": { v: ["Flere muligheder"] },
			"No color": { v: ["Ingen farve"] }
		}
	},
	{
		l: "de",
		t: {
			"A color with a HEX value {hex}": { v: ["Eine Farbe mit einem HEX-Wert {hex}"] },
			Back: { v: ["Zurück"] },
			Choose: { v: ["Auswählen"] },
			"Color picker": { v: ["Farbauswahl"] },
			"More options": { v: ["Weitere Optionen"] },
			"No color": { v: ["Keine Farbe"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"A color with a HEX value {hex}": { v: ["Eine Farbe mit einem HEX-Wert {hex}"] },
			Back: { v: ["Zurück"] },
			Choose: { v: ["Auswählen"] },
			"Color picker": { v: ["Farbauswahl"] },
			"More options": { v: ["Mehr Optionen"] },
			"No color": { v: ["Keine Farbe"] }
		}
	},
	{
		l: "el",
		t: {
			"A color with a HEX value {hex}": { v: ["Ένα χρώμα με τιμή HEX {hex}"] },
			Back: { v: ["Επιστροφή"] },
			Choose: { v: ["Επιλογή"] },
			"Color picker": { v: ["Επιλογέας χρώματος"] },
			"More options": { v: ["Περισσότερες επιλογές"] },
			"No color": { v: ["Χωρίς χρώμα"] }
		}
	},
	{
		l: "en-GB",
		t: {
			"A color with a HEX value {hex}": { v: ["A colour with a HEX value {hex}"] },
			Back: { v: ["Back"] },
			Choose: { v: ["Choose"] },
			"Color picker": { v: ["Colour picker"] },
			"More options": { v: ["More options"] },
			"No color": { v: ["No colour"] }
		}
	},
	{
		l: "eo",
		t: { Choose: { v: ["Elektu"] } }
	},
	{
		l: "es",
		t: {
			"A color with a HEX value {hex}": { v: ["Un color con un valor HEX {hex}"] },
			Back: { v: ["Atrás"] },
			Choose: { v: ["Escoger"] },
			"Color picker": { v: ["Selector de color"] },
			"More options": { v: ["Más opciones"] }
		}
	},
	{
		l: "es-AR",
		t: {
			"A color with a HEX value {hex}": { v: ["Un color con valor HEX {hex}"] },
			Back: { v: ["Atrás"] },
			Choose: { v: ["Elegir"] },
			"Color picker": { v: ["Selector de color"] },
			"More options": { v: ["Más opciones"] }
		}
	},
	{
		l: "es-EC",
		t: {
			Back: { v: ["Atrás"] },
			Choose: { v: ["Elegir"] },
			"More options": { v: ["Más opciones"] }
		}
	},
	{
		l: "es-MX",
		t: {
			"A color with a HEX value {hex}": { v: ["Un color con valor HEX {hex}"] },
			Back: { v: ["Atrás"] },
			Choose: { v: ["Elegir"] },
			"Color picker": { v: ["Selector de color"] },
			"More options": { v: ["Más opciones"] }
		}
	},
	{
		l: "et-EE",
		t: {
			"A color with a HEX value {hex}": { v: ["Värv kuueteistkümnendarvuna {hex}"] },
			Back: { v: ["Tagasi"] },
			Choose: { v: ["Tee valik"] },
			"Color picker": { v: ["Värvivalija"] },
			"More options": { v: ["Rohkem valikuid"] },
			"No color": { v: ["Värv puudub"] }
		}
	},
	{
		l: "eu",
		t: {
			Back: { v: ["Atzera"] },
			Choose: { v: ["Aukeratu"] },
			"More options": { v: ["Aukera gehiago"] }
		}
	},
	{
		l: "fa",
		t: {
			"A color with a HEX value {hex}": { v: ["رنگی با مقدار مبنای هشت {hex}"] },
			Back: { v: ["بازگشت"] },
			Choose: { v: ["انتخاب کنید"] },
			"Color picker": { v: ["انتخاب‌گر رنگ"] },
			"More options": { v: ["گزینه‌های بیشتر"] }
		}
	},
	{
		l: "fi",
		t: {
			"A color with a HEX value {hex}": { v: ["Väri heksa-arvolla {hex}"] },
			Back: { v: ["Takaisin"] },
			Choose: { v: ["Valitse"] },
			"Color picker": { v: ["Värivalitsin"] },
			"More options": { v: ["Lisää vaihtoehtoja"] }
		}
	},
	{
		l: "fr",
		t: {
			"A color with a HEX value {hex}": { v: ["Une couleur de valeur HEX {hex}"] },
			Back: { v: ["Retour"] },
			Choose: { v: ["Choisir"] },
			"Color picker": { v: ["Sélecteur de couleurs"] },
			"More options": { v: ["Plus d'options"] },
			"No color": { v: ["Sans couleur"] }
		}
	},
	{
		l: "ga",
		t: {
			"A color with a HEX value {hex}": { v: ["Dath le luach HEX {hex}"] },
			Back: { v: ["Ar ais"] },
			Choose: { v: ["Roghnaigh"] },
			"Color picker": { v: ["Roghnóir dathanna"] },
			"More options": { v: ["Tuilleadh roghanna"] },
			"No color": { v: ["Gan dath"] }
		}
	},
	{
		l: "gl",
		t: {
			"A color with a HEX value {hex}": { v: ["Unha cor cun valor HEX {hex}"] },
			Back: { v: ["Atrás"] },
			Choose: { v: ["Escoller"] },
			"Color picker": { v: ["Selector de cores"] },
			"More options": { v: ["Máis opcións"] },
			"No color": { v: ["Sen cor"] }
		}
	},
	{
		l: "he",
		t: {
			Back: { v: ["חזרה"] },
			Choose: { v: ["בחירה"] },
			"More options": { v: ["אפשרויות נוספות"] }
		}
	},
	{
		l: "hr",
		t: {
			"A color with a HEX value {hex}": { v: ["Boja s HEX vrijednošću {hex}"] },
			Back: { v: ["Natrag"] },
			Choose: { v: ["Odaberi"] },
			"Color picker": { v: ["Odabir boje"] },
			"More options": { v: ["Više mogućnosti"] },
			"No color": { v: ["Bez boje"] }
		}
	},
	{
		l: "hu",
		t: {
			"A color with a HEX value {hex}": { v: ["Szín ezzel a HEX értékkel: {hex}"] },
			Back: { v: ["Vissza"] },
			Choose: { v: ["Válassszon"] },
			"Color picker": { v: ["Színválasztó"] },
			"More options": { v: ["További lehetőségek"] },
			"No color": { v: ["Nincs szín"] }
		}
	},
	{
		l: "id",
		t: {
			"A color with a HEX value {hex}": { v: ["Warna dengan nilai HEX {hex}"] },
			Back: { v: ["Kembali"] },
			Choose: { v: ["Pilih"] },
			"Color picker": { v: ["Pemilih warna"] },
			"More options": { v: ["Opsi lainnya"] },
			"No color": { v: ["Tanpa warna"] }
		}
	},
	{
		l: "is",
		t: {
			"A color with a HEX value {hex}": { v: ["Litur með HEX-gildi {hex}"] },
			Back: { v: ["Til baka"] },
			Choose: { v: ["Velja"] },
			"Color picker": { v: ["Litaplokkari"] },
			"More options": { v: ["Fleiri valkostir"] }
		}
	},
	{
		l: "it",
		t: {
			"A color with a HEX value {hex}": { v: ["Un colore con un valore HEX {hex}"] },
			Back: { v: ["Indietro"] },
			Choose: { v: ["Scegli"] },
			"More options": { v: ["Altre opzioni"] }
		}
	},
	{
		l: "ja",
		t: {
			"A color with a HEX value {hex}": { v: [" HEX値 {hex} を持つ色"] },
			Back: { v: ["戻る"] },
			Choose: { v: ["選択"] },
			"Color picker": { v: ["カラーピッカー"] },
			"More options": { v: ["他のオプション"] },
			"No color": { v: ["色なし"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			"A color with a HEX value {hex}": { v: [" HEX値 {hex} を持つ色"] },
			Back: { v: ["戻る"] },
			Choose: { v: ["選択"] },
			"Color picker": { v: ["カラーピッカー"] },
			"More options": { v: ["他のオプション"] }
		}
	},
	{
		l: "ko",
		t: {
			"A color with a HEX value {hex}": { v: ["HEX 값이 {hex}인 색상"] },
			Back: { v: ["뒤로"] },
			Choose: { v: ["선택"] },
			"Color picker": { v: ["색상 선택기"] },
			"More options": { v: ["옵션 더 보기"] },
			"No color": { v: ["색 없음"] }
		}
	},
	{
		l: "lo",
		t: {
			"A color with a HEX value {hex}": { v: ["ສີທີ່ມີຄ່າ HEX {hex}"] },
			Back: { v: ["ກັບຄືນ"] },
			Choose: { v: ["ເລືອກ"] },
			"Color picker": { v: ["ໂຕເລືອກສີ"] },
			"More options": { v: ["ຕົວເລືອກເພີ່ມເຕີມ"] },
			"No color": { v: ["ບໍ່ມີສີ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"A color with a HEX value {hex}": { v: ["Spalva, kurios HEX reikšmė yra {hex}"] },
			Back: { v: ["Atgal"] },
			Choose: { v: ["Pasirinkti"] },
			"Color picker": { v: ["Spalvos parinkiklis"] },
			"More options": { v: ["Daugiau parinkčių"] },
			"No color": { v: ["Be spalvos"] }
		}
	},
	{
		l: "lv",
		t: { Choose: { v: ["Izvēlēties"] } }
	},
	{
		l: "mk",
		t: {
			"A color with a HEX value {hex}": { v: ["Боја со HEX вредност {hex}"] },
			Back: { v: ["Назад"] },
			Choose: { v: ["Избери"] },
			"Color picker": { v: ["Избор на боја"] },
			"More options": { v: ["Повеќе опции"] },
			"No color": { v: ["Без боја"] }
		}
	},
	{
		l: "mn",
		t: {
			"A color with a HEX value {hex}": { v: ["{hex} HEX утгатай өнгө"] },
			Back: { v: ["Буцах"] },
			Choose: { v: ["Сонгох"] },
			"Color picker": { v: ["Өнгө сонгогч"] },
			"More options": { v: ["Нэмэлт сонголтууд"] },
			"No color": { v: ["Өнгөгүй"] }
		}
	},
	{
		l: "my",
		t: { Choose: { v: ["ရွေးချယ်ရန်"] } }
	},
	{
		l: "nb",
		t: {
			"A color with a HEX value {hex}": { v: ["En farge med en HEX-verdi {hex}"] },
			Back: { v: ["Tilbake"] },
			Choose: { v: ["Velg"] },
			"Color picker": { v: ["Fargevelger"] },
			"More options": { v: ["Flere alternativer"] }
		}
	},
	{
		l: "nl",
		t: {
			"A color with a HEX value {hex}": { v: ["Een kleur met een HEX-waarde {hex}"] },
			Back: { v: ["Terug"] },
			Choose: { v: ["Kiezen"] },
			"Color picker": { v: ["Kleurkiezer"] },
			"More options": { v: ["Meer opties"] },
			"No color": { v: ["Geen kleur"] }
		}
	},
	{
		l: "oc",
		t: { Choose: { v: ["Causir"] } }
	},
	{
		l: "pl",
		t: {
			"A color with a HEX value {hex}": { v: ["Kolor o wartości HEX {hex}"] },
			Back: { v: ["Wstecz"] },
			Choose: { v: ["Wybierz"] },
			"Color picker": { v: ["Wybierz kolor"] },
			"More options": { v: ["Więcej opcji"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			"A color with a HEX value {hex}": { v: ["Uma cor com valor HEX {hex}"] },
			Back: { v: ["Voltar"] },
			Choose: { v: ["Escolher"] },
			"Color picker": { v: ["Seletor de cores"] },
			"More options": { v: ["Mais opções"] },
			"No color": { v: ["Sem cor"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			"A color with a HEX value {hex}": { v: ["Uma cor com o valor HEX  {hex}"] },
			Back: { v: ["Anterior"] },
			Choose: { v: ["Escolher"] },
			"Color picker": { v: ["seletor de cores"] },
			"More options": { v: ["Mais opções"] }
		}
	},
	{
		l: "ro",
		t: {
			"A color with a HEX value {hex}": { v: ["O culoare în HEX value {hex}"] },
			Back: { v: ["Înapoi"] },
			Choose: { v: ["Alegeți"] },
			"More options": { v: ["Mai multe opțiuni"] }
		}
	},
	{
		l: "ru",
		t: {
			"A color with a HEX value {hex}": { v: ["Цвет в HEX {hex}"] },
			Back: { v: ["Назад"] },
			Choose: { v: ["Выберите"] },
			"Color picker": { v: ["Выбор цвета"] },
			"More options": { v: ["Больше опций"] },
			"No color": { v: ["Без цвета"] }
		}
	},
	{
		l: "sk",
		t: {
			"A color with a HEX value {hex}": { v: ["Farba s hodnotou HEX {hex}"] },
			Back: { v: ["Späť"] },
			Choose: { v: ["Vybrať"] },
			"Color picker": { v: ["Výber farby"] },
			"More options": { v: ["Viac možností"] }
		}
	},
	{
		l: "sl",
		t: { Choose: { v: ["Izbor"] } }
	},
	{
		l: "sr",
		t: {
			"A color with a HEX value {hex}": { v: ["Боја са HEX вредности {hex}"] },
			Back: { v: ["Назад"] },
			Choose: { v: ["Изаберите"] },
			"Color picker": { v: ["Бирач боје"] },
			"More options": { v: ["Још опција"] },
			"No color": { v: ["Без боје"] }
		}
	},
	{
		l: "sv",
		t: {
			"A color with a HEX value {hex}": { v: ["En färg med ett HEX-värde {hex}"] },
			Back: { v: ["Tillbaka"] },
			Choose: { v: ["Välj"] },
			"Color picker": { v: ["Färgväljare"] },
			"More options": { v: ["Fler alternativ"] },
			"No color": { v: ["Ingen färg"] }
		}
	},
	{
		l: "tr",
		t: {
			"A color with a HEX value {hex}": { v: ["{hex} onaltılık değeri ile bir renk "] },
			Back: { v: ["Geri"] },
			Choose: { v: ["Seçin"] },
			"Color picker": { v: ["Renk seçici"] },
			"More options": { v: ["Diğer seçenekler"] },
			"No color": { v: ["Renk yok"] }
		}
	},
	{
		l: "uk",
		t: {
			"A color with a HEX value {hex}": { v: ["Колір у форматі HEX {hex}"] },
			Back: { v: ["Назад"] },
			Choose: { v: ["Виберіть"] },
			"Color picker": { v: ["Вибір кольору"] },
			"More options": { v: ["Більше об'єктів"] }
		}
	},
	{
		l: "uz",
		t: {
			"A color with a HEX value {hex}": { v: ["HEX qiymatiga ega rang {hex}"] },
			Back: { v: ["Orqaga"] },
			Choose: { v: ["Tanlang"] },
			"Color picker": { v: ["Rang tanlagich"] },
			"More options": { v: ["Boshqa variantlar"] },
			"No color": { v: ["Rangsiz"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			"A color with a HEX value {hex}": { v: ["以16进制 {hex} 表示的颜色为"] },
			Back: { v: ["返回"] },
			Choose: { v: ["选择"] },
			"Color picker": { v: ["颜色拾取器"] },
			"More options": { v: ["更多选项"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			"A color with a HEX value {hex}": { v: ["具有 HEX 值 {hex}的顏色 "] },
			Back: { v: ["返回"] },
			Choose: { v: ["選擇"] },
			"Color picker": { v: ["顏色選擇器"] },
			"More options": { v: ["更多選項"] },
			"No color": { v: ["無顏色"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"A color with a HEX value {hex}": { v: ["HEX 值為 {hex} 的顏色"] },
			Back: { v: ["返回"] },
			Choose: { v: ["選擇"] },
			"Color picker": { v: ["色彩挑選器"] },
			"More options": { v: ["更多選項"] },
			"No color": { v: ["沒有顏色"] }
		}
	}
], ev = [
	{
		l: "ar",
		t: {
			"a few seconds ago": { v: ["منذ عدة ثوانٍ"] },
			"sec. ago": { v: ["ثانية مضت"] },
			"seconds ago": { v: ["ثوانٍ مضت"] }
		}
	},
	{
		l: "ast",
		t: {
			"a few seconds ago": { v: ["hai unos segundos"] },
			"sec. ago": { v: ["hai segs"] },
			"seconds ago": { v: ["hai segundos"] }
		}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: {}
	},
	{
		l: "cs",
		t: {
			"a few seconds ago": { v: ["před několika sekundami"] },
			"sec. ago": { v: ["sek. před"] },
			"seconds ago": { v: ["sekund předtím"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			"a few seconds ago": { v: ["před několika sekundami"] },
			"sec. ago": { v: ["sek. před"] },
			"seconds ago": { v: ["sekund předtím"] }
		}
	},
	{
		l: "da",
		t: {
			"a few seconds ago": { v: ["et par sekunder siden"] },
			"sec. ago": { v: ["sek. siden"] },
			"seconds ago": { v: ["sekunder siden"] }
		}
	},
	{
		l: "de",
		t: {
			"a few seconds ago": { v: ["vor ein paar Sekunden"] },
			"sec. ago": { v: ["Sek. zuvor"] },
			"seconds ago": { v: ["Sekunden zuvor"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"a few seconds ago": { v: ["vor ein paar Sekunden"] },
			"sec. ago": { v: ["Sek. zuvor"] },
			"seconds ago": { v: ["Sekunden zuvor"] }
		}
	},
	{
		l: "el",
		t: {
			"a few seconds ago": { v: ["πριν λίγα δευτερόλεπτα"] },
			"sec. ago": { v: ["δευτ. πριν"] },
			"seconds ago": { v: ["δευτερόλεπτα πριν"] }
		}
	},
	{
		l: "en-GB",
		t: {
			"a few seconds ago": { v: ["a few seconds ago"] },
			"sec. ago": { v: ["sec. ago"] },
			"seconds ago": { v: ["seconds ago"] }
		}
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {
			"a few seconds ago": { v: ["hace unos pocos segundos"] },
			"sec. ago": { v: ["hace segundos"] },
			"seconds ago": { v: ["segundos atrás"] }
		}
	},
	{
		l: "es-AR",
		t: {
			"a few seconds ago": { v: ["hace unos segundos"] },
			"sec. ago": { v: ["seg. atrás"] },
			"seconds ago": { v: ["segundos atrás"] }
		}
	},
	{
		l: "es-EC",
		t: {
			"a few seconds ago": { v: ["hace unos segundos"] },
			"sec. ago": { v: ["hace segundos"] },
			"seconds ago": { v: ["Segundos atrás"] }
		}
	},
	{
		l: "es-MX",
		t: {
			"a few seconds ago": { v: ["hace unos segundos"] },
			"sec. ago": { v: ["seg. atrás"] },
			"seconds ago": { v: ["segundos atrás"] }
		}
	},
	{
		l: "et-EE",
		t: {
			"a few seconds ago": { v: ["mõni sekund tagasi"] },
			"sec. ago": { v: ["sek. tagasi"] },
			"seconds ago": { v: ["sekundit tagasi"] }
		}
	},
	{
		l: "eu",
		t: {
			"a few seconds ago": { v: ["duela segundo batzuk"] },
			"sec. ago": { v: ["duela seg."] },
			"seconds ago": { v: ["duela segundo"] }
		}
	},
	{
		l: "fa",
		t: {
			"a few seconds ago": { v: ["چند ثانیه پیش"] },
			"sec. ago": { v: ["چند ثانیه پیش"] },
			"seconds ago": { v: ["چند ثانیه پیش"] }
		}
	},
	{
		l: "fi",
		t: {
			"a few seconds ago": { v: ["muutamia sekunteja sitten"] },
			"sec. ago": { v: ["sek. sitten"] },
			"seconds ago": { v: ["sekunteja sitten"] }
		}
	},
	{
		l: "fr",
		t: {
			"a few seconds ago": { v: ["il y a quelques instants"] },
			"sec. ago": { v: ["il y a qq. sec."] },
			"seconds ago": { v: ["il y a quelques secondes"] }
		}
	},
	{
		l: "ga",
		t: {
			"a few seconds ago": { v: ["cúpla soicind ó shin"] },
			"sec. ago": { v: ["soic. ó shin"] },
			"seconds ago": { v: ["soicind ó shin"] }
		}
	},
	{
		l: "gl",
		t: {
			"a few seconds ago": { v: ["hai uns segundos"] },
			"sec. ago": { v: ["segs. atrás"] },
			"seconds ago": { v: ["segundos atrás"] }
		}
	},
	{
		l: "he",
		t: {
			"a few seconds ago": { v: ["לפני מספר שניות"] },
			"sec. ago": { v: ["לפני מספר שניות"] },
			"seconds ago": { v: ["לפני מס׳ שניות"] }
		}
	},
	{
		l: "hr",
		t: {
			"a few seconds ago": { v: ["prije nekoliko sekundi"] },
			"sec. ago": { v: ["prije nek. sek."] },
			"seconds ago": { v: ["prije nek. sek."] }
		}
	},
	{
		l: "hu",
		t: {
			"a few seconds ago": { v: ["néhány másodperce"] },
			"sec. ago": { v: ["másodperce"] },
			"seconds ago": { v: ["másodperce"] }
		}
	},
	{
		l: "id",
		t: {
			"a few seconds ago": { v: ["beberapa detik yang lalu"] },
			"sec. ago": { v: ["dtk. yang lalu"] },
			"seconds ago": { v: ["beberapa detik lalu"] }
		}
	},
	{
		l: "is",
		t: {
			"a few seconds ago": { v: ["fyrir örfáum sekúndum síðan"] },
			"sec. ago": { v: ["sek. síðan"] },
			"seconds ago": { v: ["sekúndum síðan"] }
		}
	},
	{
		l: "it",
		t: {
			"a few seconds ago": { v: ["pochi secondi fa"] },
			"sec. ago": { v: ["sec. fa"] },
			"seconds ago": { v: ["secondi fa"] }
		}
	},
	{
		l: "ja",
		t: {
			"a few seconds ago": { v: ["数秒前"] },
			"sec. ago": { v: ["秒前"] },
			"seconds ago": { v: ["数秒前"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			"a few seconds ago": { v: ["数秒前"] },
			"sec. ago": { v: ["秒前"] },
			"seconds ago": { v: ["数秒前"] }
		}
	},
	{
		l: "ko",
		t: {
			"a few seconds ago": { v: ["방금 전"] },
			"sec. ago": { v: ["몇 초 전"] },
			"seconds ago": { v: ["초 전"] }
		}
	},
	{
		l: "lo",
		t: {
			"a few seconds ago": { v: ["ສອງສາມວິນາທີກ່ອນ"] },
			"sec. ago": { v: ["ວິ. ກ່ອນ"] },
			"seconds ago": { v: ["ວິນາທີກ່ອນ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"a few seconds ago": { v: ["prieš keletą sekundžių"] },
			"sec. ago": { v: ["prieš sek."] },
			"seconds ago": { v: ["prieš sekundes"] }
		}
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: {
			"a few seconds ago": { v: ["пред неколку секунди"] },
			"sec. ago": { v: ["секунда"] },
			"seconds ago": { v: ["секунди"] }
		}
	},
	{
		l: "mn",
		t: {
			"a few seconds ago": { v: ["хэдхэн секундын өмнө"] },
			"sec. ago": { v: ["сек. өмнө"] },
			"seconds ago": { v: ["секундын өмнө"] }
		}
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: {
			"a few seconds ago": { v: ["noen få sekunder siden"] },
			"sec. ago": { v: ["sek. siden"] },
			"seconds ago": { v: ["sekunder siden"] }
		}
	},
	{
		l: "nl",
		t: {
			"a few seconds ago": { v: ["enkele seconden geleden"] },
			"sec. ago": { v: ["sec. geleden"] },
			"seconds ago": { v: ["seconden geleden"] }
		}
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: {
			"a few seconds ago": { v: ["kilka sekund temu"] },
			"sec. ago": { v: ["sek. temu"] },
			"seconds ago": { v: ["sekund temu"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			"a few seconds ago": { v: ["há alguns segundos"] },
			"sec. ago": { v: ["seg. atrás"] },
			"seconds ago": { v: ["segundos atrás"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			"a few seconds ago": { v: ["há alguns segundos"] },
			"sec. ago": { v: ["seg. atrás"] },
			"seconds ago": { v: ["segundos atrás"] }
		}
	},
	{
		l: "ro",
		t: {
			"a few seconds ago": { v: ["acum câteva secunde"] },
			"sec. ago": { v: ["sec. în urmă"] },
			"seconds ago": { v: ["secunde în urmă"] }
		}
	},
	{
		l: "ru",
		t: {
			"a few seconds ago": { v: ["несколько секунд назад"] },
			"sec. ago": { v: ["сек. назад"] },
			"seconds ago": { v: ["секунд назад"] }
		}
	},
	{
		l: "sk",
		t: {
			"a few seconds ago": { v: ["pred chvíľou"] },
			"sec. ago": { v: ["pred pár sekundami"] },
			"seconds ago": { v: ["pred sekundami"] }
		}
	},
	{
		l: "sl",
		t: {}
	},
	{
		l: "sr",
		t: {
			"a few seconds ago": { v: ["пре неколико секунди"] },
			"sec. ago": { v: ["сек. раније"] },
			"seconds ago": { v: ["секунди раније"] }
		}
	},
	{
		l: "sv",
		t: {
			"a few seconds ago": { v: ["några sekunder sedan"] },
			"sec. ago": { v: ["sek. sedan"] },
			"seconds ago": { v: ["sekunder sedan"] }
		}
	},
	{
		l: "tr",
		t: {
			"a few seconds ago": { v: ["birkaç saniye önce"] },
			"sec. ago": { v: ["sn. önce"] },
			"seconds ago": { v: ["saniye önce"] }
		}
	},
	{
		l: "uk",
		t: {
			"a few seconds ago": { v: ["декілька секунд тому"] },
			"sec. ago": { v: ["с тому"] },
			"seconds ago": { v: ["с тому"] }
		}
	},
	{
		l: "uz",
		t: {
			"a few seconds ago": { v: ["bir necha soniya oldin"] },
			"sec. ago": { v: ["sek. oldin"] },
			"seconds ago": { v: ["soniyalar oldin"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			"a few seconds ago": { v: ["几秒前"] },
			"sec. ago": { v: ["几秒前"] },
			"seconds ago": { v: ["几秒前"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			"a few seconds ago": { v: ["幾秒前"] },
			"sec. ago": { v: ["秒前"] },
			"seconds ago": { v: ["秒前"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"a few seconds ago": { v: ["幾秒前"] },
			"sec. ago": { v: ["秒前"] },
			"seconds ago": { v: ["秒前"] }
		}
	}
], tv = [
	{
		l: "ar",
		t: {
			Acapulco: { v: ["بازلائي مطفي"] },
			"Blue Violet": { v: ["بنفسجي مشعشع"] },
			"Boston Blue": { v: ["سماوي مطفي"] },
			Deluge: { v: ["بنفسجي مطفي"] },
			Feldspar: { v: ["وردي صخري"] },
			Gold: { v: ["ذهبي"] },
			Mariner: { v: ["أزرق بحري"] },
			"Nextcloud blue": { v: ["أزرق نكست كلاود"] },
			Olivine: { v: ["زيتي"] },
			Purple: { v: ["بنفسجي"] },
			"Rosy brown": { v: ["بُنِّي زهري"] },
			Whiskey: { v: ["نبيذي"] }
		}
	},
	{
		l: "ast",
		t: {
			Acapulco: { v: ["Acapulcu"] },
			"Blue Violet": { v: ["Viola azulao"] },
			"Boston Blue": { v: ["Azul Boston"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Oru"] },
			Mariner: { v: ["Marineru"] },
			"Nextcloud blue": { v: ["Nextcloud azul"] },
			Olivine: { v: ["Olivina"] },
			Purple: { v: ["Moráu"] },
			"Rosy brown": { v: ["Marrón arrosao"] },
			Whiskey: { v: ["Whiskey"] }
		}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: {}
	},
	{
		l: "cs",
		t: {
			Acapulco: { v: ["Akapulko"] },
			Black: { v: ["Černá"] },
			"Blue Violet": { v: ["Modrofialová"] },
			"Boston Blue": { v: ["Bostonská modrá"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Živicová"] },
			Gold: { v: ["Zlatá"] },
			Mariner: { v: ["Námořnická"] },
			"Nextcloud blue": { v: ["Nextcloud modrá"] },
			Olivine: { v: ["Olivínová"] },
			Purple: { v: ["Fialová"] },
			"Rosy brown": { v: ["Růžovohnědá"] },
			Whiskey: { v: ["Whisky"] },
			White: { v: ["Bílá"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			Acapulco: { v: ["Akapulko"] },
			"Blue Violet": { v: ["Modrofialová"] },
			"Boston Blue": { v: ["Bostonská modrá"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Živicová"] },
			Gold: { v: ["Zlatá"] },
			Mariner: { v: ["Námořnická"] },
			"Nextcloud blue": { v: ["Nextcloud modrá"] },
			Olivine: { v: ["Olivínová"] },
			Purple: { v: ["Fialová"] },
			"Rosy brown": { v: ["Růžovohnědá"] },
			Whiskey: { v: ["Whisky"] }
		}
	},
	{
		l: "da",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Sort"] },
			"Blue Violet": { v: ["Blue Violet"] },
			"Boston Blue": { v: ["Boston Blue"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Guld"] },
			Mariner: { v: ["Mariner"] },
			"Nextcloud blue": { v: ["Nextcloud blue"] },
			Olivine: { v: ["Olivine"] },
			Purple: { v: ["Lilla"] },
			"Rosy brown": { v: ["Rosy brown"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["Hvid"] }
		}
	},
	{
		l: "de",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Schwarz"] },
			"Blue Violet": { v: ["Blau Violett"] },
			"Boston Blue": { v: ["Boston-Blau"] },
			Deluge: { v: ["Sintflut"] },
			Feldspar: { v: ["Feldspat"] },
			Gold: { v: ["Gold"] },
			Mariner: { v: ["Seemann"] },
			"Nextcloud blue": { v: ["Nextcloud Blau"] },
			Olivine: { v: ["Olivin"] },
			Purple: { v: ["Lila"] },
			"Rosy brown": { v: ["Rosiges Braun"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["Weiß"] }
		}
	},
	{
		l: "de-DE",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Schwarz"] },
			"Blue Violet": { v: ["Blau Violett"] },
			"Boston Blue": { v: ["Boston-Blau"] },
			Deluge: { v: ["Sintflut"] },
			Feldspar: { v: ["Feldspat"] },
			Gold: { v: ["Gold"] },
			Mariner: { v: ["Seemann"] },
			"Nextcloud blue": { v: ["Nextcloud Blau"] },
			Olivine: { v: ["Olivin"] },
			Purple: { v: ["Lila"] },
			"Rosy brown": { v: ["Rosiges Braun"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["Weiß"] }
		}
	},
	{
		l: "el",
		t: {
			Acapulco: { v: ["Ακαπούλκο"] },
			Black: { v: ["Μαύρο"] },
			"Blue Violet": { v: ["Μπλε Βιολέτ"] },
			"Boston Blue": { v: ["Μπλε Βοστώνης"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Χρυσό"] },
			Mariner: { v: ["Mariner"] },
			"Nextcloud blue": { v: ["Μπλε Nextcloud"] },
			Olivine: { v: ["Olivine"] },
			Purple: { v: ["Μωβ"] },
			"Rosy brown": { v: ["Ροζ καφέ"] },
			Whiskey: { v: ["Ουίσκι"] },
			White: { v: ["Λευκό"] }
		}
	},
	{
		l: "en-GB",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Black"] },
			"Blue Violet": { v: ["Blue Violet"] },
			"Boston Blue": { v: ["Boston Blue"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Gold"] },
			Mariner: { v: ["Mariner"] },
			"Nextcloud blue": { v: ["Nextcloud blue"] },
			Olivine: { v: ["Olivine"] },
			Purple: { v: ["Purple"] },
			"Rosy brown": { v: ["Rosy brown"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["White"] }
		}
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {
			Acapulco: { v: ["Acapulco"] },
			"Blue Violet": { v: ["Violeta Azul"] },
			"Boston Blue": { v: ["Azul Boston"] },
			Deluge: { v: ["Diluvio"] },
			Feldspar: { v: ["Feldespato"] },
			Gold: { v: ["Oro"] },
			Mariner: { v: ["Marinero"] },
			"Nextcloud blue": { v: ["Azul Nextcloud"] },
			Olivine: { v: ["Olivino"] },
			Purple: { v: ["Púrpura"] },
			"Rosy brown": { v: ["Marrón rosáceo"] },
			Whiskey: { v: ["Whiskey"] }
		}
	},
	{
		l: "es-AR",
		t: {
			Acapulco: { v: ["Acapulco"] },
			"Blue Violet": { v: ["Violeta Azul"] },
			"Boston Blue": { v: ["Azul Boston"] },
			Deluge: { v: ["Diluvio"] },
			Feldspar: { v: ["Feldespato"] },
			Gold: { v: ["Oro"] },
			Mariner: { v: ["Marinero"] },
			"Nextcloud blue": { v: ["Azul Nextcloud"] },
			Olivine: { v: ["Olivino"] },
			Purple: { v: ["Púrpura"] },
			"Rosy brown": { v: ["Marrón rosáceo"] },
			Whiskey: { v: ["Whiskey"] }
		}
	},
	{
		l: "es-EC",
		t: {}
	},
	{
		l: "es-MX",
		t: {
			Acapulco: { v: ["Acapulco"] },
			"Blue Violet": { v: ["Violeta Azul"] },
			"Boston Blue": { v: ["Azul Boston"] },
			Deluge: { v: ["Diluvio"] },
			Feldspar: { v: ["Feldespato"] },
			Gold: { v: ["Oro"] },
			Mariner: { v: ["Marinero"] },
			"Nextcloud blue": { v: ["Azul Nextcloud"] },
			Olivine: { v: ["Olivino"] },
			Purple: { v: ["Púrpura"] },
			"Rosy brown": { v: ["Marrón rosáceo"] },
			Whiskey: { v: ["Whiskey"] }
		}
	},
	{
		l: "et-EE",
		t: {
			Acapulco: { v: ["Acapulco meresinine"] },
			Black: { v: ["Must"] },
			"Blue Violet": { v: ["Sinakasvioletne"] },
			"Boston Blue": { v: ["Bostoni rohekassinine"] },
			Deluge: { v: ["Tulvavee lilla"] },
			Feldspar: { v: ["Põlevkivipruun"] },
			Gold: { v: ["Kuldne"] },
			Mariner: { v: ["Meresinine"] },
			"Nextcloud blue": { v: ["Nextcloudi sinine"] },
			Olivine: { v: ["Oliiviroheline"] },
			Purple: { v: ["Purpurpunane"] },
			"Rosy brown": { v: ["Roosikarva pruun"] },
			Whiskey: { v: ["Viskikarva kollakaspruun"] },
			White: { v: ["Valge"] }
		}
	},
	{
		l: "eu",
		t: {}
	},
	{
		l: "fa",
		t: {
			Acapulco: { v: ["آکاپولکو"] },
			"Blue Violet": { v: ["بنفش آبی"] },
			"Boston Blue": { v: ["آبی بوستونی"] },
			Deluge: { v: ["سیل"] },
			Feldspar: { v: ["فلدسپات"] },
			Gold: { v: ["طلا"] },
			Mariner: { v: ["مارینر"] },
			"Nextcloud blue": { v: ["نکس کلود آبی"] },
			Olivine: { v: ["الیوین"] },
			Purple: { v: ["بنفش"] },
			"Rosy brown": { v: ["قهوه‌ای رز"] },
			Whiskey: { v: ["ویسکی"] }
		}
	},
	{
		l: "fi",
		t: {
			Acapulco: { v: ["Acapulco"] },
			"Blue Violet": { v: ["Sinivioletti"] },
			"Boston Blue": { v: ["Bostoninsininen"] },
			Deluge: { v: ["Tulva"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Kulta"] },
			Mariner: { v: ["Merenkulkija"] },
			"Nextcloud blue": { v: ["Nextcloudin sininen"] },
			Olivine: { v: ["Oliviini"] },
			Purple: { v: ["Purppura"] },
			"Rosy brown": { v: ["Ruusunruskea"] },
			Whiskey: { v: ["Viski"] }
		}
	},
	{
		l: "fr",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Noir"] },
			"Blue Violet": { v: ["Bleu violet"] },
			"Boston Blue": { v: ["Bleu de Boston"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Doré"] },
			Mariner: { v: ["Marin"] },
			"Nextcloud blue": { v: ["Bleu Nextcloud"] },
			Olivine: { v: ["Olivine"] },
			Purple: { v: ["Violet"] },
			"Rosy brown": { v: ["Brun rosé"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["Blanc"] }
		}
	},
	{
		l: "ga",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Dubh"] },
			"Blue Violet": { v: ["Gorm Violet"] },
			"Boston Blue": { v: ["Bostún Gorm"] },
			Deluge: { v: ["Díle"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Óir"] },
			Mariner: { v: ["Mairnéalach"] },
			"Nextcloud blue": { v: ["Nextcloud gorm"] },
			Olivine: { v: ["Olaivín"] },
			Purple: { v: ["Corcra"] },
			"Rosy brown": { v: ["Rosach donn"] },
			Whiskey: { v: ["Fuisce"] },
			White: { v: ["Bán"] }
		}
	},
	{
		l: "gl",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Negro"] },
			"Blue Violet": { v: ["Azul violeta"] },
			"Boston Blue": { v: ["Azul Boston"] },
			Deluge: { v: ["Dioivo"] },
			Feldspar: { v: ["Feldespato"] },
			Gold: { v: ["Ouro"] },
			Mariner: { v: ["Marino"] },
			"Nextcloud blue": { v: ["Azul Nextcloud"] },
			Olivine: { v: ["Olivina"] },
			Purple: { v: ["Púrpura"] },
			"Rosy brown": { v: ["Pardo rosado"] },
			Whiskey: { v: ["Whisky"] },
			White: { v: ["Branco"] }
		}
	},
	{
		l: "he",
		t: {}
	},
	{
		l: "hr",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Crna"] },
			"Blue Violet": { v: ["Plavoljubičasta"] },
			"Boston Blue": { v: ["Bostonsko plava"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Zlatna"] },
			Mariner: { v: ["Mariner"] },
			"Nextcloud blue": { v: ["Nextcloud plava"] },
			Olivine: { v: ["Olivine"] },
			Purple: { v: ["Ljubičasta"] },
			"Rosy brown": { v: ["Ružičastosmeđa"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["Bijela"] }
		}
	},
	{
		l: "hu",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Fekete"] },
			"Blue Violet": { v: ["Kék ibolya"] },
			"Boston Blue": { v: ["Boston kék"] },
			Deluge: { v: ["Özönvíz"] },
			Feldspar: { v: ["Földpát"] },
			Gold: { v: ["Arany"] },
			Mariner: { v: ["Tengerész"] },
			"Nextcloud blue": { v: ["Nextcloud kék"] },
			Olivine: { v: ["Olivin"] },
			Purple: { v: ["Lila"] },
			"Rosy brown": { v: ["Rózsás barna"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["Fehér"] }
		}
	},
	{
		l: "id",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Hitam"] },
			"Blue Violet": { v: ["Ungu kebiruan"] },
			"Boston Blue": { v: ["Biru Boston"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Emas"] },
			Mariner: { v: ["Mariner"] },
			"Nextcloud blue": { v: ["Biru Nextcloud"] },
			Olivine: { v: ["Olivine"] },
			Purple: { v: ["Ungu"] },
			"Rosy brown": { v: ["Cokelat kemerahan"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["Putih"] }
		}
	},
	{
		l: "is",
		t: {
			Acapulco: { v: ["Acapulco"] },
			"Blue Violet": { v: ["Bláklukka"] },
			"Boston Blue": { v: ["Bostonblátt"] },
			Deluge: { v: ["Fjólublátt"] },
			Feldspar: { v: ["Feldspat"] },
			Gold: { v: ["Gull"] },
			Mariner: { v: ["Sjóarablátt"] },
			"Nextcloud blue": { v: ["Nextcloud blátt"] },
			Olivine: { v: ["Ólivín"] },
			Purple: { v: ["Purpurablátt"] },
			"Rosy brown": { v: ["Rósabrúnt"] },
			Whiskey: { v: ["Viský"] }
		}
	},
	{
		l: "it",
		t: {
			Gold: { v: ["Oro"] },
			"Nextcloud blue": { v: ["Nextcloud blue"] },
			Purple: { v: ["Viola"] }
		}
	},
	{
		l: "ja",
		t: {
			Acapulco: { v: ["アカプルコ"] },
			Black: { v: ["黒"] },
			"Blue Violet": { v: ["ブルーバイオレット"] },
			"Boston Blue": { v: ["ボストンブルー"] },
			Deluge: { v: ["豪雨"] },
			Feldspar: { v: ["長石"] },
			Gold: { v: ["黄金"] },
			Mariner: { v: ["船乗り"] },
			"Nextcloud blue": { v: ["ネクストクラウド・ブルー"] },
			Olivine: { v: ["カンラン石"] },
			Purple: { v: ["紫色"] },
			"Rosy brown": { v: ["バラ色"] },
			Whiskey: { v: ["ウイスキー"] },
			White: { v: ["白"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			Acapulco: { v: ["アカプルコ"] },
			"Blue Violet": { v: ["ブルーバイオレット"] },
			"Boston Blue": { v: ["ボストンブルー"] },
			Deluge: { v: ["豪雨"] },
			Feldspar: { v: ["長石"] },
			Gold: { v: ["黄金"] },
			Mariner: { v: ["船乗り"] },
			"Nextcloud blue": { v: ["ネクストクラウド・ブルー"] },
			Olivine: { v: ["カンラン石"] },
			Purple: { v: ["紫色"] },
			"Rosy brown": { v: ["バラ色"] },
			Whiskey: { v: ["ウイスキー"] }
		}
	},
	{
		l: "ko",
		t: {
			Acapulco: { v: ["아카풀코"] },
			Black: { v: ["검정"] },
			"Blue Violet": { v: ["푸른 보라"] },
			"Boston Blue": { v: ["보스턴 블루"] },
			Deluge: { v: ["폭우"] },
			Feldspar: { v: ["장석"] },
			Gold: { v: ["금"] },
			Mariner: { v: ["뱃사람"] },
			"Nextcloud blue": { v: ["Nextcloud 파랑"] },
			Olivine: { v: ["감람석"] },
			Purple: { v: ["보라"] },
			"Rosy brown": { v: ["로지 브라운"] },
			Whiskey: { v: ["위스키"] },
			White: { v: ["하양"] }
		}
	},
	{
		l: "lo",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["ສີດຳ"] },
			"Blue Violet": { v: ["Blue Violet"] },
			"Boston Blue": { v: ["Boston Blue"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["ສີຄຳ"] },
			Mariner: { v: ["Mariner"] },
			"Nextcloud blue": { v: ["ສີຟ້າ Nextcloud"] },
			Olivine: { v: ["Olivine"] },
			Purple: { v: ["ສີມ່ວງ"] },
			"Rosy brown": { v: ["Rosy brown"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["ສີຂາວ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			Acapulco: { v: ["\"Acapulco\""] },
			Black: { v: ["Juoda"] },
			"Blue Violet": { v: ["Mėlyna-violetinė"] },
			"Boston Blue": { v: ["\"Boston Blue\""] },
			Deluge: { v: ["\"Deluge\""] },
			Feldspar: { v: ["\"Feldspar\""] },
			Gold: { v: ["Auksas"] },
			Mariner: { v: ["\"Mariner\""] },
			"Nextcloud blue": { v: ["\"Nextcloud\" mėlyna"] },
			Olivine: { v: ["\"Olivine\""] },
			Purple: { v: ["Violetinė"] },
			"Rosy brown": { v: ["Rožiniai rudas"] },
			Whiskey: { v: ["\"Whiskey\""] },
			White: { v: ["Balta"] }
		}
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: {
			Acapulco: { v: ["Акапулко"] },
			Black: { v: ["Црно"] },
			"Blue Violet": { v: ["Сино Виолетова"] },
			"Boston Blue": { v: ["Бостон Сина"] },
			Deluge: { v: ["Делуџ"] },
			Feldspar: { v: ["Фелдспар"] },
			Gold: { v: ["Златна"] },
			Mariner: { v: ["Маринер"] },
			"Nextcloud blue": { v: ["Nextcloud сина"] },
			Olivine: { v: ["Оливин"] },
			Purple: { v: ["Виолетова"] },
			"Rosy brown": { v: ["Розево-кафеава"] },
			Whiskey: { v: ["Виски"] },
			White: { v: ["Бела"] }
		}
	},
	{
		l: "mn",
		t: {
			Acapulco: { v: ["Акапулько"] },
			Black: { v: ["Хар"] },
			"Blue Violet": { v: ["Цэнхэр ягаан"] },
			"Boston Blue": { v: ["Бостон цэнхэр"] },
			Deluge: { v: ["Делюж"] },
			Feldspar: { v: ["Фельдспар"] },
			Gold: { v: ["Алтан"] },
			Mariner: { v: ["Маринер"] },
			"Nextcloud blue": { v: ["Nextcloud цэнхэр"] },
			Olivine: { v: ["Оливин"] },
			Purple: { v: ["Нил ягаан"] },
			"Rosy brown": { v: ["Ягаан бор"] },
			Whiskey: { v: ["Виски"] },
			White: { v: ["Цагаан"] }
		}
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: {
			Acapulco: { v: ["Acapulco"] },
			"Blue Violet": { v: ["Blå fiolett"] },
			"Boston Blue": { v: ["Boston blå"] },
			Deluge: { v: ["Syndflod"] },
			Feldspar: { v: ["Feltspat"] },
			Gold: { v: ["Gull"] },
			Mariner: { v: ["Mariner"] },
			"Nextcloud blue": { v: ["Nextcloud-blå"] },
			Olivine: { v: ["Olivin"] },
			Purple: { v: ["Lilla"] },
			"Rosy brown": { v: ["Rosenrød brun"] },
			Whiskey: { v: ["Whiskey"] }
		}
	},
	{
		l: "nl",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Zwart"] },
			"Blue Violet": { v: ["Blauw Paars"] },
			"Boston Blue": { v: ["Boston Blauw"] },
			Deluge: { v: ["Overlopen"] },
			Feldspar: { v: ["Veldspaat"] },
			Gold: { v: ["Goud"] },
			Mariner: { v: ["Marineblauw"] },
			"Nextcloud blue": { v: ["Nextcloud blauw"] },
			Olivine: { v: ["Olivijn"] },
			Purple: { v: ["Paars"] },
			"Rosy brown": { v: ["Rozig bruin"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["Wit"] }
		}
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: {
			Acapulco: { v: ["Acapulco"] },
			"Blue Violet": { v: ["Niebieski fiolet"] },
			"Boston Blue": { v: ["Błękit Bostonu"] },
			Deluge: { v: ["Potop"] },
			Feldspar: { v: ["Skaleń"] },
			Gold: { v: ["Złote"] },
			Mariner: { v: ["Marynarz"] },
			"Nextcloud blue": { v: ["Niebieskie Nextcloud"] },
			Olivine: { v: ["Oliwin"] },
			Purple: { v: ["Fioletowy"] },
			"Rosy brown": { v: ["Różowy brąz"] },
			Whiskey: { v: ["Whisky"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Preto"] },
			"Blue Violet": { v: ["Violeta Azul"] },
			"Boston Blue": { v: ["Azul Boston"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Feldspato"] },
			Gold: { v: ["Ouro"] },
			Mariner: { v: ["Marinheiro"] },
			"Nextcloud blue": { v: ["Azul Nextcloud"] },
			Olivine: { v: ["Olivina"] },
			Purple: { v: ["Roxo"] },
			"Rosy brown": { v: ["Castanho rosado"] },
			Whiskey: { v: ["Uísque"] },
			White: { v: ["Branco"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			Acapulco: { v: ["Acapulco"] },
			"Blue Violet": { v: ["Azul violeta"] },
			"Boston Blue": { v: ["Azul Boston"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Ouro"] },
			Mariner: { v: ["Mariner"] },
			"Nextcloud blue": { v: ["Nextcloud azul"] },
			Olivine: { v: ["Olivine"] },
			Purple: { v: ["Púrpura"] },
			"Rosy brown": { v: ["Castanho rosado"] },
			Whiskey: { v: ["Whiskey"] }
		}
	},
	{
		l: "ro",
		t: {
			Gold: { v: ["Aur"] },
			"Nextcloud blue": { v: ["Nextcloud albastru"] },
			Purple: { v: ["Purpuriu"] }
		}
	},
	{
		l: "ru",
		t: {
			Acapulco: { v: ["Акапулько"] },
			Black: { v: ["Черный"] },
			"Blue Violet": { v: ["Синий фиолет"] },
			"Boston Blue": { v: ["Синий Бостон"] },
			Deluge: { v: ["Перламутрово-фиолетовый"] },
			Feldspar: { v: ["Античная латунь"] },
			Gold: { v: ["Золотой"] },
			Mariner: { v: ["Морской"] },
			"Nextcloud blue": { v: ["Nextcloud голубой"] },
			Olivine: { v: [" Оливковый"] },
			Purple: { v: ["Фиолетовый"] },
			"Rosy brown": { v: ["Розово-коричневый"] },
			Whiskey: { v: ["Виски"] },
			White: { v: ["Белый"] }
		}
	},
	{
		l: "sk",
		t: {
			Acapulco: { v: ["Acapulco"] },
			"Blue Violet": { v: ["Modro fialová"] },
			"Boston Blue": { v: ["Bostonská modrá"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["Živec"] },
			Gold: { v: ["Zlatá"] },
			Mariner: { v: ["Námorník"] },
			"Nextcloud blue": { v: ["Nextcloud modrá"] },
			Olivine: { v: ["Olivová"] },
			Purple: { v: ["Fialová"] },
			"Rosy brown": { v: ["Ružovo hnedá"] },
			Whiskey: { v: ["Whisky"] }
		}
	},
	{
		l: "sl",
		t: {}
	},
	{
		l: "sr",
		t: {
			Acapulco: { v: ["Акапулко"] },
			Black: { v: ["Црно"] },
			"Blue Violet": { v: ["Плаво љубичаста"] },
			"Boston Blue": { v: ["Бостон плава"] },
			Deluge: { v: ["Поплава"] },
			Feldspar: { v: ["Фелдспар"] },
			Gold: { v: ["Злато"] },
			Mariner: { v: ["Морнар"] },
			"Nextcloud blue": { v: ["Nextcloud плава"] },
			Olivine: { v: ["Маслинаста"] },
			Purple: { v: ["Пурпурна"] },
			"Rosy brown": { v: ["Роси браон"] },
			Whiskey: { v: ["Виски"] },
			White: { v: ["Бело"] }
		}
	},
	{
		l: "sv",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["Svart"] },
			"Blue Violet": { v: ["Blåviolett"] },
			"Boston Blue": { v: ["Bostonblå"] },
			Deluge: { v: ["Skyfallsblå"] },
			Feldspar: { v: ["Fältspat"] },
			Gold: { v: ["Guld"] },
			Mariner: { v: ["Marinblå"] },
			"Nextcloud blue": { v: ["Nextcloud-blå"] },
			Olivine: { v: ["Olivin"] },
			Purple: { v: ["Lila"] },
			"Rosy brown": { v: ["Rosabrun"] },
			Whiskey: { v: ["Whisky"] },
			White: { v: ["Vit"] }
		}
	},
	{
		l: "tr",
		t: {
			Acapulco: { v: ["Akapulko"] },
			Black: { v: ["Siyah"] },
			"Blue Violet": { v: ["Mavi mor"] },
			"Boston Blue": { v: ["Boston mavisi"] },
			Deluge: { v: ["Sel"] },
			Feldspar: { v: ["Feldispat"] },
			Gold: { v: ["Altın"] },
			Mariner: { v: ["Denizci"] },
			"Nextcloud blue": { v: ["Nextcloud mavi"] },
			Olivine: { v: ["Zeytinlik"] },
			Purple: { v: ["Mor"] },
			"Rosy brown": { v: ["Kırmızımsı kahverengi"] },
			Whiskey: { v: ["Viski"] },
			White: { v: ["Beyaz"] }
		}
	},
	{
		l: "uk",
		t: {
			Acapulco: { v: ["Акапулько"] },
			"Blue Violet": { v: ["Блакитна фіалка"] },
			"Boston Blue": { v: ["Бостонський синій"] },
			Deluge: { v: ["Злива"] },
			Feldspar: { v: ["Польові шпати"] },
			Gold: { v: ["Золотий"] },
			Mariner: { v: ["Морський"] },
			"Nextcloud blue": { v: ["Блакитний Nextcloud"] },
			Olivine: { v: ["Олива"] },
			Purple: { v: ["Фіолетовий"] },
			"Rosy brown": { v: ["Темно-рожевий"] },
			Whiskey: { v: ["Кола"] }
		}
	},
	{
		l: "uz",
		t: {
			Acapulco: { v: ["Akapulko"] },
			Black: { v: ["Qora"] },
			"Blue Violet": { v: ["Moviy binafsha"] },
			"Boston Blue": { v: ["Boston ko'k"] },
			Deluge: { v: ["To'fon"] },
			Feldspar: { v: ["Feldspar"] },
			Gold: { v: ["Oltin"] },
			Mariner: { v: ["Dengizchi"] },
			"Nextcloud blue": { v: ["Ko'k Nextcloud\xA0"] },
			Olivine: { v: ["Olivine"] },
			Purple: { v: ["Binafsha"] },
			"Rosy brown": { v: ["Qizil jigarrang"] },
			Whiskey: { v: ["Whiskey"] },
			White: { v: ["Oq"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			Acapulco: { v: ["Acapulco"] },
			"Blue Violet": { v: ["瓦罗兰特蓝"] },
			"Boston Blue": { v: ["波士顿蓝"] },
			Deluge: { v: ["洪水色"] },
			Feldspar: { v: ["长石"] },
			Gold: { v: ["金色"] },
			Mariner: { v: ["水手"] },
			"Nextcloud blue": { v: ["Nextcloud 蓝"] },
			Olivine: { v: ["橄榄石色"] },
			Purple: { v: ["紫色"] },
			"Rosy brown": { v: ["玫瑰棕色"] },
			Whiskey: { v: ["威士忌"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			Acapulco: { v: ["阿卡普爾科"] },
			Black: { v: ["黑色"] },
			"Blue Violet": { v: ["藍紫色"] },
			"Boston Blue": { v: ["波士頓藍"] },
			Deluge: { v: ["大洪水"] },
			Feldspar: { v: ["長石"] },
			Gold: { v: ["Gold"] },
			Mariner: { v: ["海軍藍"] },
			"Nextcloud blue": { v: ["Nextcloud 藍色"] },
			Olivine: { v: ["橄欖石色"] },
			Purple: { v: ["紫色"] },
			"Rosy brown": { v: ["玫瑰棕色"] },
			Whiskey: { v: ["威士忌"] },
			White: { v: ["白色"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			Acapulco: { v: ["Acapulco"] },
			Black: { v: ["黑色"] },
			"Blue Violet": { v: ["藍紫色"] },
			"Boston Blue": { v: ["波士頓藍"] },
			Deluge: { v: ["Deluge"] },
			Feldspar: { v: ["長石"] },
			Gold: { v: ["金色"] },
			Mariner: { v: ["海軍藍"] },
			"Nextcloud blue": { v: ["Nextcloud 藍色"] },
			Olivine: { v: ["橄欖石色"] },
			Purple: { v: ["紫色"] },
			"Rosy brown": { v: ["玫瑰棕色"] },
			Whiskey: { v: ["威士忌"] },
			White: { v: ["白色"] }
		}
	}
], nv = [
	{
		l: "ar",
		t: { Actions: { v: ["إجراءات"] } }
	},
	{
		l: "ast",
		t: { Actions: { v: ["Aiciones"] } }
	},
	{
		l: "br",
		t: { Actions: { v: ["Oberioù"] } }
	},
	{
		l: "ca",
		t: { Actions: { v: ["Accions"] } }
	},
	{
		l: "cs",
		t: { Actions: { v: ["Akce"] } }
	},
	{
		l: "cs-CZ",
		t: { Actions: { v: ["Akce"] } }
	},
	{
		l: "da",
		t: { Actions: { v: ["Handlinger"] } }
	},
	{
		l: "de",
		t: { Actions: { v: ["Aktionen"] } }
	},
	{
		l: "de-DE",
		t: { Actions: { v: ["Aktionen"] } }
	},
	{
		l: "el",
		t: { Actions: { v: ["Ενέργειες"] } }
	},
	{
		l: "en-GB",
		t: { Actions: { v: ["Actions"] } }
	},
	{
		l: "eo",
		t: { Actions: { v: ["Agoj"] } }
	},
	{
		l: "es",
		t: { Actions: { v: ["Acciones"] } }
	},
	{
		l: "es-AR",
		t: { Actions: { v: ["Acciones"] } }
	},
	{
		l: "es-EC",
		t: { Actions: { v: ["Acciones"] } }
	},
	{
		l: "es-MX",
		t: { Actions: { v: ["Acciones"] } }
	},
	{
		l: "et-EE",
		t: { Actions: { v: ["Tegevus"] } }
	},
	{
		l: "eu",
		t: { Actions: { v: ["Ekintzak"] } }
	},
	{
		l: "fa",
		t: { Actions: { v: ["کنش‌ها"] } }
	},
	{
		l: "fi",
		t: { Actions: { v: ["Toiminnot"] } }
	},
	{
		l: "fr",
		t: { Actions: { v: ["Actions"] } }
	},
	{
		l: "ga",
		t: { Actions: { v: ["Gníomhartha"] } }
	},
	{
		l: "gl",
		t: { Actions: { v: ["Accións"] } }
	},
	{
		l: "he",
		t: { Actions: { v: ["פעולות"] } }
	},
	{
		l: "hr",
		t: { Actions: { v: ["Radnje"] } }
	},
	{
		l: "hu",
		t: { Actions: { v: ["Műveletek"] } }
	},
	{
		l: "id",
		t: { Actions: { v: ["Tindakan"] } }
	},
	{
		l: "is",
		t: { Actions: { v: ["Aðgerðir"] } }
	},
	{
		l: "it",
		t: { Actions: { v: ["Azioni"] } }
	},
	{
		l: "ja",
		t: { Actions: { v: ["操作"] } }
	},
	{
		l: "ja-JP",
		t: { Actions: { v: ["操作"] } }
	},
	{
		l: "ko",
		t: { Actions: { v: ["동작"] } }
	},
	{
		l: "lo",
		t: { Actions: { v: ["ການກະທຳ"] } }
	},
	{
		l: "lt-LT",
		t: { Actions: { v: ["Veiksmai"] } }
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: { Actions: { v: ["Акции"] } }
	},
	{
		l: "mn",
		t: { Actions: { v: ["Үйлдлүүд"] } }
	},
	{
		l: "my",
		t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } }
	},
	{
		l: "nb",
		t: { Actions: { v: ["Handlinger"] } }
	},
	{
		l: "nl",
		t: { Actions: { v: ["Acties"] } }
	},
	{
		l: "oc",
		t: { Actions: { v: ["Accions"] } }
	},
	{
		l: "pl",
		t: { Actions: { v: ["Działania"] } }
	},
	{
		l: "pt-BR",
		t: { Actions: { v: ["Ações"] } }
	},
	{
		l: "pt-PT",
		t: { Actions: { v: ["Ações"] } }
	},
	{
		l: "ro",
		t: { Actions: { v: ["Acțiuni"] } }
	},
	{
		l: "ru",
		t: { Actions: { v: ["Действия "] } }
	},
	{
		l: "sk",
		t: { Actions: { v: ["Akcie"] } }
	},
	{
		l: "sl",
		t: { Actions: { v: ["Dejanja"] } }
	},
	{
		l: "sr",
		t: { Actions: { v: ["Радње"] } }
	},
	{
		l: "sv",
		t: { Actions: { v: ["Åtgärder"] } }
	},
	{
		l: "tr",
		t: { Actions: { v: ["İşlemler"] } }
	},
	{
		l: "uk",
		t: { Actions: { v: ["Дії"] } }
	},
	{
		l: "uz",
		t: { Actions: { v: ["Harakatlar"] } }
	},
	{
		l: "zh-CN",
		t: { Actions: { v: ["行为"] } }
	},
	{
		l: "zh-HK",
		t: { Actions: { v: ["動作"] } }
	},
	{
		l: "zh-TW",
		t: { Actions: { v: ["動作"] } }
	}
], rv = [
	{
		l: "ar",
		t: {
			"Calendar icon": { v: ["أيقونة التقويم"] },
			Cancel: { v: ["إلغاء"] },
			"Clear value": { v: ["مَحو القيمة"] },
			"Close time Picker": { v: ["إغلاق لاقط الوقت"] },
			"Datepicker input": { v: ["مُدخَلات لاقط التاريخ"] },
			"Datepicker menu": { v: ["قائمة لاقط التاريخ"] },
			"Decrement hours": { v: ["إنقاص الساعات"] },
			"Decrement minutes": { v: ["إنقاص الدقائق"] },
			"Decrement seconds": { v: ["إنقاص الثواني"] },
			"Increment hours": { v: ["زيادة الساعات"] },
			"Increment minutes": { v: ["زيادة الدقائق"] },
			"Increment seconds": { v: ["زيادة الثواني"] },
			"Month picker": { v: ["لاقط الشهر"] },
			"Month picker overlay": { v: ["تراكب لاقط الشهر"] },
			"Next month": { v: ["الشهر القادم"] },
			"Next year": { v: ["السنة القادمة"] },
			Now: { v: ["الآن"] },
			"Open hours overlay": { v: ["فتح تراكب الساعات "] },
			"Open minutes overlay": { v: ["فتح تراكب الدقائق"] },
			"Open months overlay": { v: ["فتح تراكب الشهور"] },
			"Open seconds overlay": { v: ["فتح تراكب الثواني"] },
			"Open time picker": { v: ["فتح لاقط الوقت"] },
			"Open years overlay": { v: ["فتح تراكب السنوات"] },
			Pick: { v: ["إلتقاط"] },
			"Previous month": { v: ["الشهر الماضي"] },
			"Previous year": { v: ["السنة الماضية"] },
			"Select date": { v: ["إختيار التاريخ"] },
			"Select date and time": { v: ["إختيار التاريخ والوقت"] },
			"Select month": { v: ["إختيار الشهر"] },
			"Select time": { v: ["إختيار الوقت"] },
			"Select time range": { v: ["إختيار المدى الزمني"] },
			"Select week": { v: ["إختيار الأسبوع"] },
			"Select year": { v: ["إختيار السنة"] },
			"Switch AM/PM mode": { v: ["تبديل وضعية صباحاً/مساءً"] },
			"Time picker": { v: ["لاقط الوقت"] },
			"Toggle overlay": { v: ["تبديل التراكب"] },
			W: { v: ["أ"] },
			"Year picker": { v: ["لاقط السنة"] },
			"Year picker overlay": { v: ["تراكب لاقط السنة"] }
		}
	},
	{
		l: "ast",
		t: {}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: {}
	},
	{
		l: "cs",
		t: {
			"Calendar icon": { v: ["Ikona kalendáře"] },
			Cancel: { v: ["Storno"] },
			"Clear value": { v: ["Vyčistit hodnotu"] },
			"Close time Picker": { v: ["Zavřít výběr času"] },
			"Datepicker input": { v: ["Vstup výběru data"] },
			"Datepicker menu": { v: ["Nabídka výběru data"] },
			"Decrement hours": { v: ["Snížit hodiny"] },
			"Decrement minutes": { v: ["Snížit minuty"] },
			"Decrement seconds": { v: ["Snížit sekundy"] },
			"Increment hours": { v: ["Zvýšit hodiny"] },
			"Increment minutes": { v: ["Zvýšit minuty"] },
			"Increment seconds": { v: ["Zvýšit sekundy"] },
			"Month picker": { v: ["Výběr měsíce"] },
			"Month picker overlay": { v: ["Překryvné okno výběru měsíce"] },
			"Next month": { v: ["Příští měsíc"] },
			"Next year": { v: ["Příští rok"] },
			Now: { v: ["Nyní"] },
			"Open hours overlay": { v: ["Otevřít překryvné okno hodin"] },
			"Open minutes overlay": { v: ["Otevřít překryvné okno minut"] },
			"Open months overlay": { v: ["Otevřít překryvné okno měsíců"] },
			"Open seconds overlay": { v: ["Otevřít překryvné okno sekund"] },
			"Open time picker": { v: ["Otevřít výběr času"] },
			"Open years overlay": { v: ["Otevřít překryvné okno roku"] },
			Pick: { v: ["Vybrat"] },
			"Previous month": { v: ["Předchozí měsíc"] },
			"Previous year": { v: ["Předchozí rok"] },
			"Select date": { v: ["Vybrat datum"] },
			"Select date and time": { v: ["Vybrat datum a čas"] },
			"Select month": { v: ["Vybrat měsíc"] },
			"Select time": { v: ["Vybrat čas"] },
			"Select time range": { v: ["Vybrat časový rozsah"] },
			"Select week": { v: ["Vybrat týden"] },
			"Select year": { v: ["Vybrat rok"] },
			"Switch AM/PM mode": { v: ["Přepnout režim dopo/odpoledne"] },
			"Time picker": { v: ["Výběr času"] },
			"Time zone": { v: ["Časové pásmo"] },
			"Toggle overlay": { v: ["Vyp/zap. překryvné okno"] },
			W: { v: ["T"] },
			"Year picker": { v: ["Výběr roku"] },
			"Year picker overlay": { v: ["Překryvné okno výběru roku"] }
		}
	},
	{
		l: "cs-CZ",
		t: {}
	},
	{
		l: "da",
		t: {
			"Calendar icon": { v: ["Kalenderikon"] },
			Cancel: { v: ["Annullér"] },
			"Clear value": { v: ["Klar værdi"] },
			"Close time Picker": { v: ["Nærtid Picker"] },
			"Datepicker input": { v: ["Datapicker input"] },
			"Datepicker menu": { v: ["Datapicker menu"] },
			"Decrement hours": { v: ["Formindsk timer"] },
			"Decrement minutes": { v: ["Formindsk minutter"] },
			"Decrement seconds": { v: ["Formindsk sekunder"] },
			"Increment hours": { v: ["Forøg timer"] },
			"Increment minutes": { v: ["Forøg minutter"] },
			"Increment seconds": { v: ["Forøg sekunder"] },
			"Month picker": { v: ["Månedsvælger"] },
			"Month picker overlay": { v: ["Måneder vælger overlay"] },
			"Next month": { v: ["Næste måned"] },
			"Next year": { v: ["Næste år"] },
			Now: { v: ["Nu"] },
			"Open hours overlay": { v: ["Åbne timer overlay"] },
			"Open minutes overlay": { v: ["Åbn minutter overlay"] },
			"Open months overlay": { v: ["Åbne måneder overlay"] },
			"Open seconds overlay": { v: ["Åbne sekunder overlay"] },
			"Open time picker": { v: ["Åbent tidsvælger"] },
			"Open years overlay": { v: ["Åbne år overlay"] },
			Pick: { v: ["Vælg"] },
			"Previous month": { v: ["Forrige måned"] },
			"Previous year": { v: ["Foregående år"] },
			"Select date": { v: ["Vælg dato"] },
			"Select date and time": { v: ["Vælg dato og tidspunkt"] },
			"Select month": { v: ["Vælg måned"] },
			"Select time": { v: ["Vælg tid"] },
			"Select time range": { v: ["Vælg tidsinterval"] },
			"Select week": { v: ["Vælg uge"] },
			"Select year": { v: ["Vælg år"] },
			"Switch AM/PM mode": { v: ["Skift AM/PM-tilstand"] },
			"Time picker": { v: ["Tidsvælger"] },
			"Time zone": { v: ["Tidszone"] },
			"Toggle overlay": { v: ["Slå overlay til / fra"] },
			W: { v: ["W"] },
			"Year picker": { v: ["År vælger"] },
			"Year picker overlay": { v: ["År vælger overlay"] }
		}
	},
	{
		l: "de",
		t: {
			"Calendar icon": { v: ["Kalendersymbol"] },
			Cancel: { v: ["Abbrechen"] },
			"Clear value": { v: ["Wert löschen"] },
			"Close time Picker": { v: ["Zeitauswahl schließen"] },
			"Datepicker input": { v: ["Eingabe Datumsauswahl"] },
			"Datepicker menu": { v: ["Menü Datumsauswahl"] },
			"Decrement hours": { v: ["Stunden verringern"] },
			"Decrement minutes": { v: ["Minuten verringern"] },
			"Decrement seconds": { v: ["Sekunden verringern"] },
			"Increment hours": { v: ["Stunden hochzählen"] },
			"Increment minutes": { v: ["Minuten hochzählen"] },
			"Increment seconds": { v: ["Sekunden hochzählen"] },
			"Month picker": { v: ["Monatsauswahl"] },
			"Month picker overlay": { v: ["Monatsauswahl-Overlay"] },
			"Next month": { v: ["Nächster Monat"] },
			"Next year": { v: ["Nächstes Jahr"] },
			Now: { v: ["Jetzt"] },
			"Open hours overlay": { v: ["Stunden-Overlay öffnen"] },
			"Open minutes overlay": { v: ["Minuten-Overlay öffnen"] },
			"Open months overlay": { v: ["Monate-Overlay öffnen"] },
			"Open seconds overlay": { v: ["Sekunden-Overlay öffnen"] },
			"Open time picker": { v: ["Zeitauswahl öffnen"] },
			"Open years overlay": { v: ["Jahre-Overlay öffnen"] },
			Pick: { v: ["Auswählen"] },
			"Previous month": { v: ["Vorheriger Monat"] },
			"Previous year": { v: ["Vorheriges Jahr"] },
			"Select date": { v: ["Datum auswählen"] },
			"Select date and time": { v: ["Datum und Uhrzeit auswählen"] },
			"Select month": { v: ["Monat auswählen"] },
			"Select time": { v: ["Uhrzeit auswählen"] },
			"Select time range": { v: ["Zeitspanne auswählen"] },
			"Select week": { v: ["Woche auswählen"] },
			"Select year": { v: ["Jahr auswählen"] },
			"Switch AM/PM mode": { v: ["Zwischen AM/PM-Modus wechseln"] },
			"Time picker": { v: ["Zeitauswahl"] },
			"Time zone": { v: ["Zeitzone"] },
			"Toggle overlay": { v: ["Overlay umschalten"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Jahresauswahl"] },
			"Year picker overlay": { v: ["Jahre-Overlay öffnen"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"Calendar icon": { v: ["Kalendersymbol"] },
			Cancel: { v: ["Abbrechen"] },
			"Clear value": { v: ["Wert löschen"] },
			"Close time Picker": { v: ["Zeitauswahl schließen"] },
			"Datepicker input": { v: ["Eingabe Datumsauswahl"] },
			"Datepicker menu": { v: ["Menü Datumsauswahl"] },
			"Decrement hours": { v: ["Stunden verringern"] },
			"Decrement minutes": { v: ["Minuten verringern"] },
			"Decrement seconds": { v: ["Sekunden verringern"] },
			"Increment hours": { v: ["Stunden hochzählen"] },
			"Increment minutes": { v: ["Minuten hochzählen"] },
			"Increment seconds": { v: ["Sekunden hochzählen"] },
			"Month picker": { v: ["Monatsauswahl"] },
			"Month picker overlay": { v: ["Monatsauswahl-Overlay"] },
			"Next month": { v: ["Nächster Monat"] },
			"Next year": { v: ["Nächstes Jahr"] },
			Now: { v: ["Jetzt"] },
			"Open hours overlay": { v: ["Stunden-Overlay öffnen"] },
			"Open minutes overlay": { v: ["Minuten-Overlay öffnen"] },
			"Open months overlay": { v: ["Monate-Overlay öffnen"] },
			"Open seconds overlay": { v: ["Sekunden-Overlay öffnen"] },
			"Open time picker": { v: ["Zeitauswahl öffnen"] },
			"Open years overlay": { v: ["Jahre-Overlay öffnen"] },
			Pick: { v: ["Auswählen"] },
			"Previous month": { v: ["Vorheriger Monat"] },
			"Previous year": { v: ["Vorheriges Jahr"] },
			"Select date": { v: ["Datum auswählen"] },
			"Select date and time": { v: ["Datum und Uhrzeit auswählen"] },
			"Select month": { v: ["Monat auswählen"] },
			"Select time": { v: ["Uhrzeit auswählen"] },
			"Select time range": { v: ["Zeitspanne auswählen"] },
			"Select week": { v: ["Woche auswählen"] },
			"Select year": { v: ["Jahr auswählen"] },
			"Switch AM/PM mode": { v: ["Zwischen AM/PM-Modus wechseln"] },
			"Time picker": { v: ["Zeitauswahl"] },
			"Time zone": { v: ["Zeitzone"] },
			"Toggle overlay": { v: ["Overlay umschalten"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Jahresauswahl"] },
			"Year picker overlay": { v: ["Jahre-Overlay öffnen"] }
		}
	},
	{
		l: "el",
		t: {
			"Calendar icon": { v: ["Εικονίδιο ημερολογίου"] },
			Cancel: { v: ["Ακύρωση"] },
			"Clear value": { v: ["Εκκαθάριση αξίας"] },
			"Close time Picker": { v: ["Κλείσιμο επιλογέα ώρας"] },
			"Datepicker input": { v: ["Εισαγωγή ημερομηνίας"] },
			"Datepicker menu": { v: ["Μενού επιλογής ημερομηνίας"] },
			"Decrement hours": { v: ["Μείωση ωρών"] },
			"Decrement minutes": { v: ["Μείωση λεπτών"] },
			"Decrement seconds": { v: ["Μείωση δευτερολέπτων"] },
			"Increment hours": { v: ["Αύξηση ωρών"] },
			"Increment minutes": { v: ["Αύξηση λεπτών"] },
			"Increment seconds": { v: ["Αύξηση δευτερολέπτων"] },
			"Month picker": { v: ["Επιλογή μήνα"] },
			"Month picker overlay": { v: ["Επικάλυψη επιλογής μήνα"] },
			"Next month": { v: ["Επόμενος μήνας"] },
			"Next year": { v: ["Επόμενο έτος"] },
			Now: { v: ["Τώρα"] },
			"Open hours overlay": { v: ["Άνοιγμα επικάλυψης ωρών"] },
			"Open minutes overlay": { v: ["Άνοιγμα επικάλυψης λεπτών"] },
			"Open months overlay": { v: ["Άνοιγμα επικάλυψης μηνών"] },
			"Open seconds overlay": { v: ["Άνοιγμα επικάλυψης δευτερολέπτων"] },
			"Open time picker": { v: ["Άνοιγμα επιλογέα ώρας"] },
			"Open years overlay": { v: ["Άνοιγμα επικάλυψης ετών"] },
			Pick: { v: ["Επιλογή"] },
			"Previous month": { v: ["Προηγούμενος μήνας"] },
			"Previous year": { v: ["Προηγούμενο έτος"] },
			"Select date": { v: ["Επιλογή ημερομηνίας"] },
			"Select date and time": { v: ["Επιλογή ημερομηνίας και ώρας"] },
			"Select month": { v: ["Επιλογή μήνα"] },
			"Select time": { v: ["Επιλογή ώρας"] },
			"Select time range": { v: ["Επιλογή χρονικού διαστήματος"] },
			"Select week": { v: ["Επιλογή εβδομάδας"] },
			"Select year": { v: ["Επιλογή έτους"] },
			"Switch AM/PM mode": { v: ["Εναλλαγή λειτουργίας AM/PM"] },
			"Time picker": { v: ["Επιλογή ώρας"] },
			"Toggle overlay": { v: ["Εναλλαγή επικάλυψης"] },
			W: { v: ["Τε"] },
			"Year picker": { v: ["Επιλογέας έτους"] },
			"Year picker overlay": { v: ["Επικάλυψη επιλογέα έτους"] }
		}
	},
	{
		l: "en-GB",
		t: {
			"Calendar icon": { v: ["Calendar icon"] },
			Cancel: { v: ["Cancel"] },
			"Clear value": { v: ["Clear value"] },
			"Close time Picker": { v: ["Close time Picker"] },
			"Datepicker input": { v: ["Datepicker input"] },
			"Datepicker menu": { v: ["Datepicker menu"] },
			"Decrement hours": { v: ["Decrement hours"] },
			"Decrement minutes": { v: ["Decrement minutes"] },
			"Decrement seconds": { v: ["Decrement seconds"] },
			"Increment hours": { v: ["Increment hours"] },
			"Increment minutes": { v: ["Increment minutes"] },
			"Increment seconds": { v: ["Increment seconds"] },
			"Month picker": { v: ["Month picker"] },
			"Month picker overlay": { v: ["Month picker overlay"] },
			"Next month": { v: ["Next month"] },
			"Next year": { v: ["Next year"] },
			Now: { v: ["Now"] },
			"Open hours overlay": { v: ["Open hours overlay"] },
			"Open minutes overlay": { v: ["Open minutes overlay"] },
			"Open months overlay": { v: ["Open months overlay"] },
			"Open seconds overlay": { v: ["Open seconds overlay"] },
			"Open time picker": { v: ["Open time picker"] },
			"Open years overlay": { v: ["Open years overlay"] },
			Pick: { v: ["Pick"] },
			"Previous month": { v: ["Previous month"] },
			"Previous year": { v: ["Previous year"] },
			"Select date": { v: ["Select date"] },
			"Select date and time": { v: ["Select date and time"] },
			"Select month": { v: ["Select month"] },
			"Select time": { v: ["Select time"] },
			"Select time range": { v: ["Select time range"] },
			"Select week": { v: ["Select week"] },
			"Select year": { v: ["Select year"] },
			"Switch AM/PM mode": { v: ["Switch AM/PM mode"] },
			"Time picker": { v: ["Time picker"] },
			"Time zone": { v: ["Time zone"] },
			"Toggle overlay": { v: ["Toggle overlay"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Year picker"] },
			"Year picker overlay": { v: ["Year picker overlay"] }
		}
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {}
	},
	{
		l: "es-AR",
		t: {}
	},
	{
		l: "es-EC",
		t: {}
	},
	{
		l: "es-MX",
		t: {}
	},
	{
		l: "et-EE",
		t: {
			"Calendar icon": { v: ["Kalendriikoon"] },
			Cancel: { v: ["Katkesta"] },
			"Clear value": { v: ["Kustuta väärtus"] },
			"Close time Picker": { v: ["Sulge ajavalija"] },
			"Datepicker input": { v: ["Kuupäevavalija sisend"] },
			"Datepicker menu": { v: ["Kuupäevavalija menüü"] },
			"Decrement hours": { v: ["Vähenda tunde"] },
			"Decrement minutes": { v: ["Vähenda minuteid"] },
			"Decrement seconds": { v: ["Vähenda sekundeid"] },
			"Increment hours": { v: ["Suurenda tunde"] },
			"Increment minutes": { v: ["Suurenda minuteid"] },
			"Increment seconds": { v: ["Suurenda sekundeid"] },
			"Month picker": { v: ["Kuupäevavalija"] },
			"Month picker overlay": { v: ["Kuupäevavalija ülekatteaken"] },
			"Next month": { v: ["Järgmine kuu"] },
			"Next year": { v: ["Järgmine aasta"] },
			Now: { v: ["Praegu"] },
			"Open hours overlay": { v: ["Ava tundide vaade"] },
			"Open minutes overlay": { v: ["Ava minutite vaade"] },
			"Open months overlay": { v: ["Ava kuude vaade"] },
			"Open seconds overlay": { v: ["Ava sekundite vaade"] },
			"Open time picker": { v: ["Ava ajavalija"] },
			"Open years overlay": { v: ["Ava aastate vaade"] },
			Pick: { v: ["Vali"] },
			"Previous month": { v: ["Eelmine kuu"] },
			"Previous year": { v: ["Eelmine aasta"] },
			"Select date": { v: ["Vali kuupäev"] },
			"Select date and time": { v: ["Vali kuupäev ja kellaaeg"] },
			"Select month": { v: ["Vali kuu"] },
			"Select time": { v: ["Vali aeg"] },
			"Select time range": { v: ["Vali ajavahemik"] },
			"Select week": { v: ["Vali nädal"] },
			"Select year": { v: ["Vali aasta"] },
			"Switch AM/PM mode": { v: ["Vaheta AM/PM kuvamist"] },
			"Time picker": { v: ["Ajavalija"] },
			"Time zone": { v: ["Ajavöönd"] },
			"Toggle overlay": { v: ["Lülita ülekatteaken sisse/välja"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Aastavalija"] },
			"Year picker overlay": { v: ["Aastavavalija ülekatteaken"] }
		}
	},
	{
		l: "eu",
		t: {}
	},
	{
		l: "fa",
		t: {}
	},
	{
		l: "fi",
		t: {}
	},
	{
		l: "fr",
		t: {
			"Calendar icon": { v: ["Icône de calendrier"] },
			Cancel: { v: ["Annuler"] },
			"Clear value": { v: ["Effacer la valeur"] },
			"Close time Picker": { v: ["Fermer le sélecteur de temps"] },
			"Datepicker input": { v: ["Entrée du sélecteur de date"] },
			"Datepicker menu": { v: ["Menu du sélecteur de date"] },
			"Decrement hours": { v: ["Diminuer les heures"] },
			"Decrement minutes": { v: ["Diminuer les minutes"] },
			"Decrement seconds": { v: ["Diminuer les secondes"] },
			"Increment hours": { v: ["Augmenter les heures"] },
			"Increment minutes": { v: ["Augmenter les minutes"] },
			"Increment seconds": { v: ["Augmenter les secondes"] },
			"Month picker": { v: ["Sélecteur de mois"] },
			"Month picker overlay": { v: ["Superposition du sélecteur de mois"] },
			"Next month": { v: ["Mois prochain"] },
			"Next year": { v: ["Année prochaine"] },
			Now: { v: ["Maintenant"] },
			"Open hours overlay": { v: ["Superposition des heures d'ouverture"] },
			"Open minutes overlay": { v: ["Superposition des minutes d'ouverture"] },
			"Open months overlay": { v: ["Superposition des mois ouverts"] },
			"Open seconds overlay": { v: ["Superposition des secondes ouvertes"] },
			"Open time picker": { v: ["Ouvrir le sélecteur de temps"] },
			"Open years overlay": { v: ["Superposition des années ouvertes"] },
			Pick: { v: ["Choisir"] },
			"Previous month": { v: ["Mois précédent"] },
			"Previous year": { v: ["Année précédente"] },
			"Select date": { v: ["Sélectionnez la date"] },
			"Select date and time": { v: ["Sélectionnez la date et l'heure"] },
			"Select month": { v: ["Sélectionnez le mois"] },
			"Select time": { v: ["Sélectionnez l'heure"] },
			"Select time range": { v: ["Sélectionnez la plage horaire"] },
			"Select week": { v: ["Sélectionnez la semaine"] },
			"Select year": { v: ["Sélectionnez l'année"] },
			"Switch AM/PM mode": { v: ["Basculer le mode Matin/Après-midi"] },
			"Time picker": { v: ["Sélecteur de temps"] },
			"Time zone": { v: ["Fuseau horaire"] },
			"Toggle overlay": { v: ["Basculer la superposition"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Sélecteur d'année"] },
			"Year picker overlay": { v: ["Superposition du sélecteur d’année"] }
		}
	},
	{
		l: "ga",
		t: {
			"Calendar icon": { v: ["Deilbhín féilire"] },
			Cancel: { v: ["Cealaigh"] },
			"Clear value": { v: ["Luach soiléir"] },
			"Close time Picker": { v: ["Roghnóir am dúnta"] },
			"Datepicker input": { v: ["Ionchur datepicker"] },
			"Datepicker menu": { v: ["Roghchlár datepicker"] },
			"Decrement hours": { v: ["Laghdaigh uaireanta"] },
			"Decrement minutes": { v: ["Laghdaigh nóiméid "] },
			"Decrement seconds": { v: ["Laghdaigh soicind"] },
			"Increment hours": { v: ["Méadaigh uaireanta"] },
			"Increment minutes": { v: ["Méadaigh nóiméid"] },
			"Increment seconds": { v: ["Méadaigh soicind"] },
			"Month picker": { v: ["Roghnóir míosa"] },
			"Month picker overlay": { v: ["Forleagan roghnóir míosa"] },
			"Next month": { v: ["An mhí seo chugainn"] },
			"Next year": { v: ["An bhliain seo chugainn"] },
			Now: { v: ["Anois"] },
			"Open hours overlay": { v: ["Forleagan uaireanta oscailte"] },
			"Open minutes overlay": { v: ["Forleagan nóiméad oscailte"] },
			"Open months overlay": { v: ["Forleagan míonna oscailte"] },
			"Open seconds overlay": { v: ["Soicind oscailte forleagan"] },
			"Open time picker": { v: ["Roghnóir am oscailte"] },
			"Open years overlay": { v: ["Forleagan blianta oscailte"] },
			Pick: { v: ["Pioc"] },
			"Previous month": { v: ["An mhí roimhe sin"] },
			"Previous year": { v: ["Bhliain roimhe sin"] },
			"Select date": { v: ["Roghnaigh dáta"] },
			"Select date and time": { v: ["Roghnaigh dáta agus am"] },
			"Select month": { v: ["Roghnaigh mí"] },
			"Select time": { v: ["Roghnaigh am"] },
			"Select time range": { v: ["Roghnaigh raon ama"] },
			"Select week": { v: ["Roghnaigh seachtain"] },
			"Select year": { v: ["Roghnaigh bliain"] },
			"Switch AM/PM mode": { v: ["Athraigh mód AM/PM"] },
			"Time picker": { v: ["Roghnóir ama"] },
			"Time zone": { v: ["Crios ama"] },
			"Toggle overlay": { v: ["Scoránaigh forleagan"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Roghnóir bliana"] },
			"Year picker overlay": { v: ["Forleagan roghnóir bliana"] }
		}
	},
	{
		l: "gl",
		t: {
			"Calendar icon": { v: ["Icona do calendario"] },
			Cancel: { v: ["Cancelar"] },
			"Clear value": { v: ["Limpar o valor"] },
			"Close time Picker": { v: ["Pechar o Selector de hora"] },
			"Datepicker input": { v: ["Entrada do selector de datas"] },
			"Datepicker menu": { v: ["Menú do selector de datas"] },
			"Decrement hours": { v: ["Diminuír as horas"] },
			"Decrement minutes": { v: ["Diminuír os minutos"] },
			"Decrement seconds": { v: ["Diminuír os segundos"] },
			"Increment hours": { v: ["Aumentar as horas"] },
			"Increment minutes": { v: ["Aumentar os minutos"] },
			"Increment seconds": { v: ["Aumentar os segundos"] },
			"Month picker": { v: ["Selector de mes"] },
			"Month picker overlay": { v: ["Superposición do selector de mes"] },
			"Next month": { v: ["Próximo mes"] },
			"Next year": { v: ["Próximo ano"] },
			Now: { v: ["Agora"] },
			"Open hours overlay": { v: ["Abrir a superposición de horas"] },
			"Open minutes overlay": { v: ["Abrir a superposición de minutos"] },
			"Open months overlay": { v: ["Abrir a superposición de meses"] },
			"Open seconds overlay": { v: ["Abrir a superposición de segundos"] },
			"Open time picker": { v: ["Abrir o selector de hora"] },
			"Open years overlay": { v: ["Abrir a superposición de anos"] },
			Pick: { v: ["Escoller"] },
			"Previous month": { v: ["Mes pasado"] },
			"Previous year": { v: ["Ano pasado"] },
			"Select date": { v: ["Seleccione a data"] },
			"Select date and time": { v: ["Seleccione a data e a hora"] },
			"Select month": { v: ["Seleccione o mes"] },
			"Select time": { v: ["Seleccione a hora"] },
			"Select time range": { v: [" Seleccione o intervalo de tempo"] },
			"Select week": { v: ["Seleccione a semana"] },
			"Select year": { v: ["Seleccione o ano"] },
			"Switch AM/PM mode": { v: ["Alternar o modo AM/PM"] },
			"Time picker": { v: ["Selector de hora"] },
			"Time zone": { v: ["Fuso horario"] },
			"Toggle overlay": { v: ["Alternar a sobreposición"] },
			W: { v: ["S"] },
			"Year picker": { v: ["Selector de ano"] },
			"Year picker overlay": { v: ["Superposición do selector de ano"] }
		}
	},
	{
		l: "he",
		t: {}
	},
	{
		l: "hr",
		t: {
			"Calendar icon": { v: ["Ikona kalendara"] },
			Cancel: { v: ["Otkaži"] },
			"Clear value": { v: ["Očisti vrijednost"] },
			"Close time Picker": { v: ["Zatvori odabir vremena"] },
			"Datepicker input": { v: ["Unos birača datuma"] },
			"Datepicker menu": { v: ["Izbornik birača datuma"] },
			"Decrement hours": { v: ["Smanji sate"] },
			"Decrement minutes": { v: ["Smanji minute"] },
			"Decrement seconds": { v: ["Smanji sekunde"] },
			"Increment hours": { v: ["Povećaj sate"] },
			"Increment minutes": { v: ["Povećaj minute"] },
			"Increment seconds": { v: ["Povećaj sekunde"] },
			"Month picker": { v: ["Odabir mjeseca"] },
			"Month picker overlay": { v: ["Sloj za odabir mjeseca"] },
			"Next month": { v: ["Sljedeći mjesec"] },
			"Next year": { v: ["Sljedeća godina"] },
			Now: { v: ["Sada"] },
			"Open hours overlay": { v: ["Otvori sloj za odabir sati"] },
			"Open minutes overlay": { v: ["Otvori sloj za odabir minuta"] },
			"Open months overlay": { v: ["Otvori sloj za odabir mjeseci"] },
			"Open seconds overlay": { v: ["Otvori sloj za odabir sekundi"] },
			"Open time picker": { v: ["Otvori birač vremena"] },
			"Open years overlay": { v: ["Otvori sloj za odabir godina"] },
			Pick: { v: ["Odaberi"] },
			"Previous month": { v: ["Prethodni mjesec"] },
			"Previous year": { v: ["Prethodna godina"] },
			"Select date": { v: ["Odaberi datum"] },
			"Select date and time": { v: ["Odaberi datum i vrijeme"] },
			"Select month": { v: ["Odaberi mjesec"] },
			"Select time": { v: ["Odaberi vrijeme"] },
			"Select time range": { v: ["Odaberi vremenski raspon"] },
			"Select week": { v: ["Odaberi tjedan"] },
			"Select year": { v: ["Odaberi godinu"] },
			"Switch AM/PM mode": { v: ["Prebaci AM/PM način"] },
			"Time picker": { v: ["Odabir vremena"] },
			"Time zone": { v: ["Vremenska zona"] },
			"Toggle overlay": { v: ["Uključi/isključi sloj"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Odabir godine"] },
			"Year picker overlay": { v: ["Sloj za odabir godine"] }
		}
	},
	{
		l: "hu",
		t: {
			"Calendar icon": { v: ["Naptárikon"] },
			Cancel: { v: ["Mégse"] },
			"Clear value": { v: ["Érték törlése"] },
			"Close time Picker": { v: ["Időválasztó bezárása"] },
			"Datepicker input": { v: ["Dátumválasztó bemenet"] },
			"Datepicker menu": { v: ["Dátumválasztó menü"] },
			"Decrement hours": { v: ["Órák csökkentése"] },
			"Decrement minutes": { v: ["Percek csökkentése"] },
			"Decrement seconds": { v: ["Másodpercek csökkentése"] },
			"Increment hours": { v: ["Órák növelése"] },
			"Increment minutes": { v: ["Percek növelése"] },
			"Increment seconds": { v: ["Másodpercek növelése"] },
			"Month picker": { v: ["Hónapválasztó"] },
			"Month picker overlay": { v: ["Hónapválasztó átfedés"] },
			"Next month": { v: ["Következő hónap"] },
			"Next year": { v: ["Következő év"] },
			Now: { v: ["Most"] },
			"Open hours overlay": { v: ["Órák átfedésének megnyitása"] },
			"Open minutes overlay": { v: ["Percek átfedésének megnyitása"] },
			"Open months overlay": { v: ["Hónapok átfedésének megnyitása"] },
			"Open seconds overlay": { v: ["Másodpercek átfedésének megnyitása"] },
			"Open time picker": { v: ["Időválasztó megnyitása"] },
			"Open years overlay": { v: ["Évek átfedésének megnyitása"] },
			Pick: { v: ["Válasszon"] },
			"Previous month": { v: ["Előző hónap"] },
			"Previous year": { v: ["Előző év"] },
			"Select date": { v: ["Válasszon dátumot"] },
			"Select date and time": { v: ["Válasszon dátumot és időt"] },
			"Select month": { v: ["Válasszon hónapot"] },
			"Select time": { v: ["Válasszon időt"] },
			"Select time range": { v: ["Válasszon időszakot"] },
			"Select week": { v: ["Válasszon hetet"] },
			"Select year": { v: ["Válasszon évet"] },
			"Switch AM/PM mode": { v: ["Váltás de./du. módra"] },
			"Time picker": { v: ["Időválasztó"] },
			"Time zone": { v: ["Időzóna"] },
			"Toggle overlay": { v: ["Átfedés be/ki"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Évválasztó"] },
			"Year picker overlay": { v: ["Évválasztó átfedés"] }
		}
	},
	{
		l: "id",
		t: {
			"Calendar icon": { v: ["Ikon kalender"] },
			Cancel: { v: ["Batal"] },
			"Clear value": { v: ["Hapus nilai"] },
			"Close time Picker": { v: ["Tutup pemilih waktu"] },
			"Datepicker input": { v: ["Input pemilih tanggal"] },
			"Datepicker menu": { v: ["Menu pemilih tanggal"] },
			"Decrement hours": { v: ["Kurangi jam"] },
			"Decrement minutes": { v: ["Kurangi menit"] },
			"Decrement seconds": { v: ["Kurangi detik"] },
			"Increment hours": { v: ["Tambah jam"] },
			"Increment minutes": { v: ["Tambah menit"] },
			"Increment seconds": { v: ["Tambah detik"] },
			"Month picker": { v: ["Pemilih bulan"] },
			"Month picker overlay": { v: ["Overlay pemilih bulan"] },
			"Next month": { v: ["Bulan berikutnya"] },
			"Next year": { v: ["Tahun berikutnya"] },
			Now: { v: ["Sekarang"] },
			"Open hours overlay": { v: ["Buka overlay jam"] },
			"Open minutes overlay": { v: ["Buka overlay menit"] },
			"Open months overlay": { v: ["Buka overlay bulan"] },
			"Open seconds overlay": { v: ["Buka overlay detik"] },
			"Open time picker": { v: ["Buka pemilih waktu"] },
			"Open years overlay": { v: ["Buka overlay tahun"] },
			Pick: { v: ["Pilih"] },
			"Previous month": { v: ["Bulan sebelumnya"] },
			"Previous year": { v: ["Tahun sebelumnya"] },
			"Select date": { v: ["Pilih tanggal"] },
			"Select date and time": { v: ["Pilih tanggal dan waktu"] },
			"Select month": { v: ["Pilih bulan"] },
			"Select time": { v: ["Pilih waktu"] },
			"Select time range": { v: ["Pilih rentang waktu"] },
			"Select week": { v: ["Pilih minggu"] },
			"Select year": { v: ["Pilih tahun"] },
			"Switch AM/PM mode": { v: ["Ganti mode AM/PM"] },
			"Time picker": { v: ["Pemilih waktu"] },
			"Time zone": { v: ["Zona waktu"] },
			"Toggle overlay": { v: ["Alihkan overlay"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Pemilih tahun"] },
			"Year picker overlay": { v: ["Overlay pemilih tahun"] }
		}
	},
	{
		l: "is",
		t: {}
	},
	{
		l: "it",
		t: {}
	},
	{
		l: "ja",
		t: {
			"Calendar icon": { v: ["カレンダーのアイコン"] },
			Cancel: { v: ["キャンセル"] },
			"Clear value": { v: ["値をクリア"] },
			"Close time Picker": { v: ["時間ピッカーを閉じる"] },
			"Datepicker input": { v: ["データピッカー入力"] },
			"Datepicker menu": { v: ["データピッカーメニュー"] },
			"Decrement hours": { v: ["時間を減らす"] },
			"Decrement minutes": { v: ["分を減らす"] },
			"Decrement seconds": { v: ["秒を減らす"] },
			"Increment hours": { v: ["時間を増やす"] },
			"Increment minutes": { v: ["分を増やす"] },
			"Increment seconds": { v: ["秒を増やす"] },
			"Month picker": { v: ["月ピッカー"] },
			"Month picker overlay": { v: ["月ピッカーオーバーレイ"] },
			"Next month": { v: ["次月"] },
			"Next year": { v: ["次年"] },
			Now: { v: ["現在"] },
			"Open hours overlay": { v: ["時間オーバーレイを開く"] },
			"Open minutes overlay": { v: ["分オーバーレイを開く"] },
			"Open months overlay": { v: ["月オーバーレイを開く"] },
			"Open seconds overlay": { v: ["秒オーバーレイを開く"] },
			"Open time picker": { v: ["時間ピッカーを開く"] },
			"Open years overlay": { v: ["年オーバーレイを開く"] },
			Pick: { v: ["選択"] },
			"Previous month": { v: ["前月"] },
			"Previous year": { v: ["前年"] },
			"Select date": { v: ["日付を選択"] },
			"Select date and time": { v: ["日付と時刻を選択"] },
			"Select month": { v: ["月を選択"] },
			"Select time": { v: ["時刻を選択"] },
			"Select time range": { v: ["時間範囲を選択"] },
			"Select week": { v: ["週を選択"] },
			"Select year": { v: ["年を選択"] },
			"Switch AM/PM mode": { v: ["AM/PMモードの切り替え"] },
			"Time picker": { v: ["時刻ピッカー"] },
			"Time zone": { v: ["タイムゾーン"] },
			"Toggle overlay": { v: ["オーバーレイの切り替え"] },
			W: { v: ["W"] },
			"Year picker": { v: ["年ピッカー"] },
			"Year picker overlay": { v: ["年ピッカーオーバーレイ"] }
		}
	},
	{
		l: "ja-JP",
		t: {}
	},
	{
		l: "ko",
		t: {
			"Calendar icon": { v: ["캘린더 아이콘"] },
			Cancel: { v: ["취소"] },
			"Clear value": { v: ["값 지우기"] },
			"Close time Picker": { v: ["시간 선택기 닫기"] },
			"Datepicker input": { v: ["날짜 선택기 입력"] },
			"Datepicker menu": { v: ["날짜 입력기 메뉴"] },
			"Decrement hours": { v: ["시 감소"] },
			"Decrement minutes": { v: ["분 감소"] },
			"Decrement seconds": { v: ["초 감소"] },
			"Increment hours": { v: ["시 증가"] },
			"Increment minutes": { v: ["분 증가"] },
			"Increment seconds": { v: ["초 증가"] },
			"Month picker": { v: ["월 선택기"] },
			"Month picker overlay": { v: ["월 선택기 오버레이"] },
			"Next month": { v: ["다음 달"] },
			"Next year": { v: ["다음 해"] },
			Now: { v: ["현재"] },
			"Open hours overlay": { v: ["시 오버레이 열기"] },
			"Open minutes overlay": { v: ["분 오버레이 열기"] },
			"Open months overlay": { v: ["월 오버레이 열기"] },
			"Open seconds overlay": { v: ["초 오버레이 열기"] },
			"Open time picker": { v: ["시간 선택기 열기"] },
			"Open years overlay": { v: ["년 오버레이 열기"] },
			Pick: { v: ["선택"] },
			"Previous month": { v: ["이전 달"] },
			"Previous year": { v: ["이전 해"] },
			"Select date": { v: ["날짜 선택"] },
			"Select date and time": { v: ["날짜와 시간 선택"] },
			"Select month": { v: ["월 선택"] },
			"Select time": { v: ["시간 선택"] },
			"Select time range": { v: ["시간 구간 선택"] },
			"Select week": { v: ["주 선택"] },
			"Select year": { v: ["년도 선택"] },
			"Switch AM/PM mode": { v: ["AM/PM 모드 전환"] },
			"Time picker": { v: ["시간 선택기"] },
			"Time zone": { v: ["시간대"] },
			"Toggle overlay": { v: ["오버레이 토글"] },
			W: { v: ["W"] },
			"Year picker": { v: ["년도 선택기"] },
			"Year picker overlay": { v: ["년도 선택기 오버레이"] }
		}
	},
	{
		l: "lo",
		t: {
			"Calendar icon": { v: ["ໄອຄອນປະຕິທິນ"] },
			Cancel: { v: ["ຍົກເລີກ"] },
			"Clear value": { v: ["ລຶບຄ່າ"] },
			"Close time Picker": { v: ["ປິດໂຕເລືອກເວລາ"] },
			"Datepicker input": { v: ["ຊ່ອງປ້ອນວັນທີ"] },
			"Datepicker menu": { v: ["ເມນູໂຕເລືອກວັນທີ"] },
			"Decrement hours": { v: ["ຫຼຸດຊົ່ວໂມງ"] },
			"Decrement minutes": { v: ["ຫຼຸດນາທີ"] },
			"Decrement seconds": { v: ["ຫຼຸດວິນາທີ"] },
			"Increment hours": { v: ["ເພີ່ມຊົ່ວໂມງ"] },
			"Increment minutes": { v: ["ເພີ່ມນາທີ"] },
			"Increment seconds": { v: ["ເພີ່ມວິນາທີ"] },
			"Month picker": { v: ["ໂຕເລືອກເດືອນ"] },
			"Month picker overlay": { v: ["ໜ້າຕ່າງໂຕເລືອກເດືອນ"] },
			"Next month": { v: ["ເດືອນໜ້າ"] },
			"Next year": { v: ["ປີໜ້າ"] },
			Now: { v: ["ຕອນນີ້"] },
			"Open hours overlay": { v: ["ເປີດໜ້າຕ່າງເລືອກຊົ່ວໂມງ"] },
			"Open minutes overlay": { v: ["ເປີດໜ້າຕ່າງເລືອກນາທີ"] },
			"Open months overlay": { v: ["ເປີດໜ້າຕ່າງເລືອກເດືອນ"] },
			"Open seconds overlay": { v: ["ເປີດໜ້າຕ່າງເລືອກວິນາທີ"] },
			"Open time picker": { v: ["ເປີດໂຕເລືອກເວລາ"] },
			"Open years overlay": { v: ["ເປີດໜ້າຕ່າງເລືອກປີ"] },
			Pick: { v: ["ເລືອກ"] },
			"Previous month": { v: ["ເດືອນກ່ອນ"] },
			"Previous year": { v: ["ປີກ່ອນ"] },
			"Select date": { v: ["ເລືອກວັນທີ"] },
			"Select date and time": { v: ["ເລືອກວັນທີ ແລະ ເວລາ"] },
			"Select month": { v: ["ເລືອກເດືອນ"] },
			"Select time": { v: ["ເລືອກເວລາ"] },
			"Select time range": { v: ["ເລືອກຊ່ວງເວລາ"] },
			"Select week": { v: ["ເລືອກອາທິດ"] },
			"Select year": { v: ["ເລືອກປີ"] },
			"Switch AM/PM mode": { v: ["ສະຫຼັບໂໝດ AM/PM"] },
			"Time picker": { v: ["ໂຕເລືອກເວລາ"] },
			"Time zone": { v: ["ເຂດເວລາ"] },
			"Toggle overlay": { v: ["ສະຫຼັບໜ້າຕ່າງ"] },
			W: { v: ["ອ"] },
			"Year picker": { v: ["ໂຕເລືອກປີ"] },
			"Year picker overlay": { v: ["ໜ້າຕ່າງໂຕເລືອກປີ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"Calendar icon": { v: ["Kalendoriaus piktograma"] },
			Cancel: { v: ["Atsisakyti"] },
			"Clear value": { v: ["Aiški vertė"] },
			"Close time Picker": { v: ["Uždaryti laiko pasirinkimo langą"] },
			"Datepicker input": { v: ["Datos rinkiklio įvestis"] },
			"Datepicker menu": { v: ["Datos rinkiklio meniu"] },
			"Decrement hours": { v: ["Sumažinkite valandas"] },
			"Decrement minutes": { v: ["Sumažinkite minutes"] },
			"Decrement seconds": { v: ["Sumažinkite sekundes"] },
			"Increment hours": { v: ["Padidinkite valandas"] },
			"Increment minutes": { v: ["Padidinkite minutes"] },
			"Increment seconds": { v: ["Padidinkite sekundes"] },
			"Month picker": { v: ["Mėnesio pasirinkimas"] },
			"Month picker overlay": { v: ["Mėnesio parinkiklio langas"] },
			"Next month": { v: ["Kitą mėnesį"] },
			"Next year": { v: ["Kiti metai"] },
			Now: { v: ["Dabar"] },
			"Open hours overlay": { v: ["Atidaryti valandų pasirinkimą"] },
			"Open minutes overlay": { v: ["Atidaryti minučių pasirinkimą"] },
			"Open months overlay": { v: ["Atidaryti mėnesių pasirinkimą"] },
			"Open seconds overlay": { v: ["Atidaryti sekundžių pasirinkimą"] },
			"Open time picker": { v: ["Atverti laiko pasirinkimo langą"] },
			"Open years overlay": { v: ["Atidaryti metų pasirinkimą"] },
			Pick: { v: ["Pasirinkti"] },
			"Previous month": { v: ["Ankstesnis mėnesis"] },
			"Previous year": { v: ["Ankstesni metai"] },
			"Select date": { v: ["Pasirinkti datą"] },
			"Select date and time": { v: ["Pasirinkti datą ir laiką"] },
			"Select month": { v: ["Pasirinkti mėnesį"] },
			"Select time": { v: ["Pasirinkti laiką"] },
			"Select time range": { v: ["Pasirinkti laikotarpį"] },
			"Select week": { v: ["Pasirinkti savaitę"] },
			"Select year": { v: ["Pasirinkti metus"] },
			"Switch AM/PM mode": { v: ["Perjungti AM/PM režimą"] },
			"Time picker": { v: ["Laiko parinkiklis"] },
			"Time zone": { v: ["Laiko juosta"] },
			"Toggle overlay": { v: ["Perjungti pasirinkimo langą"] },
			W: { v: ["\"W\""] },
			"Year picker": { v: ["Metų parinkiklis"] },
			"Year picker overlay": { v: ["Metų pasirinkimo langas"] }
		}
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: {
			"Calendar icon": { v: ["Икона за календар"] },
			Cancel: { v: ["Откажи"] },
			"Clear value": { v: ["Исчисти вредност"] },
			"Close time Picker": { v: ["Затвори избирач на време"] },
			"Datepicker input": { v: ["Поле за избор на датум"] },
			"Datepicker menu": { v: ["Мени за избор на датум"] },
			"Decrement hours": { v: ["Намали часови"] },
			"Decrement minutes": { v: ["Намали минути"] },
			"Decrement seconds": { v: ["Намали секунди"] },
			"Increment hours": { v: ["Зголеми часови"] },
			"Increment minutes": { v: ["Зголеми минути"] },
			"Increment seconds": { v: ["Зголеми секунди"] },
			"Month picker": { v: ["Избор на месец"] },
			"Month picker overlay": { v: ["Надолжен избор на месец"] },
			"Next month": { v: ["Следен месец"] },
			"Next year": { v: ["Следна година"] },
			Now: { v: ["Сега"] },
			"Open hours overlay": { v: ["Отвори преклоп за часови"] },
			"Open minutes overlay": { v: ["Отвори преклоп за минути"] },
			"Open months overlay": { v: ["Отвори преклоп за месеци"] },
			"Open seconds overlay": { v: ["Отвори преклоп за секунди"] },
			"Open time picker": { v: ["Отвори избор на време"] },
			"Open years overlay": { v: ["Отвори преклоп за години"] },
			Pick: { v: ["Избери"] },
			"Previous month": { v: ["Предходен месец"] },
			"Previous year": { v: ["Предходна година"] },
			"Select date": { v: ["Избери датум"] },
			"Select date and time": { v: ["Избери датум и време"] },
			"Select month": { v: ["Избери месец"] },
			"Select time": { v: ["Избери време"] },
			"Select time range": { v: ["Избери времески опсег"] },
			"Select week": { v: ["Избери недела"] },
			"Select year": { v: ["Избери година"] },
			"Switch AM/PM mode": { v: ["Смени AM/PM режим"] },
			"Time picker": { v: ["Избирач на време"] },
			"Time zone": { v: ["Временска зона"] },
			"Toggle overlay": { v: ["Вклучи/исклучи преклоп"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Избор на година"] },
			"Year picker overlay": { v: ["Надолжен избор на година"] }
		}
	},
	{
		l: "mn",
		t: {
			"Calendar icon": { v: ["Календарийн дүрс"] },
			Cancel: { v: ["Цуцлах"] },
			"Clear value": { v: ["Утгыг цэвэрлэх"] },
			"Close time Picker": { v: ["Цаг сонгогчийг хаах"] },
			"Datepicker input": { v: ["Огноо сонгогчийн оролт"] },
			"Datepicker menu": { v: ["Огноо сонгогчийн цэс"] },
			"Decrement hours": { v: ["Цагийг бууруулах"] },
			"Decrement minutes": { v: ["Минутыг бууруулах"] },
			"Decrement seconds": { v: ["Секундыг бууруулах"] },
			"Increment hours": { v: ["Цагийг нэмэгдүүлэх"] },
			"Increment minutes": { v: ["Минутыг нэмэгдүүлэх"] },
			"Increment seconds": { v: ["Секундыг нэмэгдүүлэх"] },
			"Month picker": { v: ["Сар сонгогч"] },
			"Month picker overlay": { v: ["Сар сонгогчийн давхарга"] },
			"Next month": { v: ["Дараа сар"] },
			"Next year": { v: ["Дараа жил"] },
			Now: { v: ["Одоо"] },
			"Open hours overlay": { v: ["Цагийн давхаргыг нээх"] },
			"Open minutes overlay": { v: ["Минутын давхаргыг нээх"] },
			"Open months overlay": { v: ["Сарын давхаргыг нээх"] },
			"Open seconds overlay": { v: ["Секундын давхаргыг нээх"] },
			"Open time picker": { v: ["Цаг сонгогчийг нээх"] },
			"Open years overlay": { v: ["Жилийн давхаргыг нээх"] },
			Pick: { v: ["Сонгох"] },
			"Previous month": { v: ["Өмнөх сар"] },
			"Previous year": { v: ["Өмнөх жил"] },
			"Select date": { v: ["Огноо сонгох"] },
			"Select date and time": { v: ["Огноо, цаг сонгох"] },
			"Select month": { v: ["Сар сонгох"] },
			"Select time": { v: ["Цаг сонгох"] },
			"Select time range": { v: ["Цагийн хүрээ сонгох"] },
			"Select week": { v: ["Долоо хоног сонгох"] },
			"Select year": { v: ["Жил сонгох"] },
			"Switch AM/PM mode": { v: ["ҮӨ/ҮХ горимыг солих"] },
			"Time picker": { v: ["Цаг сонгогч"] },
			"Time zone": { v: ["Цагийн бүс"] },
			"Toggle overlay": { v: ["Давхаргыг сэлгэх"] },
			W: { v: ["Д"] },
			"Year picker": { v: ["Жил сонгогч"] },
			"Year picker overlay": { v: ["Жил сонгогчийн давхарга"] }
		}
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: {}
	},
	{
		l: "nl",
		t: {
			"Calendar icon": { v: ["Kalender-pictogram"] },
			Cancel: { v: ["Annuleren"] },
			"Clear value": { v: ["Waarde wissen"] },
			"Close time Picker": { v: ["Tijdkiezer sluiten"] },
			"Datepicker input": { v: ["Datumkiezer invoer"] },
			"Datepicker menu": { v: ["Datumkiezer menu"] },
			"Decrement hours": { v: ["Uren verminderen"] },
			"Decrement minutes": { v: ["Minuten verminderen"] },
			"Decrement seconds": { v: ["Seconden verminderen"] },
			"Increment hours": { v: ["Uren vermeerderen"] },
			"Increment minutes": { v: ["Minuten vermeerderen"] },
			"Increment seconds": { v: ["Seconden vermeerderen"] },
			"Month picker": { v: ["Maandkiezer"] },
			"Month picker overlay": { v: ["Maandkiezer-overlay"] },
			"Next month": { v: ["Volgende maand"] },
			"Next year": { v: ["Volgend jaar"] },
			Now: { v: ["Nu"] },
			"Open hours overlay": { v: ["Uren-overlay openen"] },
			"Open minutes overlay": { v: ["Minuten-overlay openen"] },
			"Open months overlay": { v: ["Maanden-overlay openen"] },
			"Open seconds overlay": { v: ["Seconden-overlay openen"] },
			"Open time picker": { v: ["Tijdkiezer openen"] },
			"Open years overlay": { v: ["Jaren-overlay openen"] },
			Pick: { v: ["Kiezen"] },
			"Previous month": { v: ["Vorige maand"] },
			"Previous year": { v: ["Vorig jaar"] },
			"Select date": { v: ["Selecteer datum"] },
			"Select date and time": { v: ["Selecteer datum en tijd"] },
			"Select month": { v: ["Selecteer maand"] },
			"Select time": { v: ["Selecteer tijd"] },
			"Select time range": { v: ["Selecteer tijdsbereik"] },
			"Select week": { v: ["Selecteer week"] },
			"Select year": { v: ["Selecteer jaar"] },
			"Switch AM/PM mode": { v: ["AM/PM-modus wisselen"] },
			"Time picker": { v: ["Tijdkiezer"] },
			"Time zone": { v: ["Tijdzone"] },
			"Toggle overlay": { v: ["Overlay wisselen"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Jaarkiezer"] },
			"Year picker overlay": { v: ["Jaarkiezer-overlay"] }
		}
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: {}
	},
	{
		l: "pt-BR",
		t: {
			"Calendar icon": { v: ["Ícone de calendário"] },
			Cancel: { v: ["Cancelar"] },
			"Clear value": { v: ["Limpar valor"] },
			"Close time Picker": { v: ["Fechar Seletor de tempo"] },
			"Datepicker input": { v: ["entrada do seletor de data"] },
			"Datepicker menu": { v: ["menu do seletor de data"] },
			"Decrement hours": { v: ["Diminuir horas"] },
			"Decrement minutes": { v: ["Diminuir minutos"] },
			"Decrement seconds": { v: ["Diminuir segundos"] },
			"Increment hours": { v: ["Aumentar horas"] },
			"Increment minutes": { v: ["Aumentar minutos"] },
			"Increment seconds": { v: ["Aumentar segundos"] },
			"Month picker": { v: ["Seletor de meses"] },
			"Month picker overlay": { v: ["Sobreposição do seletor de meses"] },
			"Next month": { v: ["Próximo mês"] },
			"Next year": { v: ["Próximo ano"] },
			Now: { v: ["Agora"] },
			"Open hours overlay": { v: ["Abrir sobreposição de horas"] },
			"Open minutes overlay": { v: ["Abrir sobreposição de minutos"] },
			"Open months overlay": { v: ["Abrir sobreposição de meses"] },
			"Open seconds overlay": { v: ["Abrir sobreposição de segundos"] },
			"Open time picker": { v: ["Abrir seletor de tempo"] },
			"Open years overlay": { v: ["Abrir sobreposição de anos"] },
			Pick: { v: ["Escolher"] },
			"Previous month": { v: ["Mês anterior"] },
			"Previous year": { v: ["Ano anterior"] },
			"Select date": { v: ["Selecione data"] },
			"Select date and time": { v: ["Selecione data e hora"] },
			"Select month": { v: ["Selecione mês"] },
			"Select time": { v: ["Selecione hora"] },
			"Select time range": { v: ["Selecione intervalo de tempo"] },
			"Select week": { v: ["Selecione semana"] },
			"Select year": { v: ["Selecione ano"] },
			"Switch AM/PM mode": { v: ["Alternar modo AM/PM"] },
			"Time picker": { v: ["Seletor de tempo"] },
			"Time zone": { v: ["Fuso horário"] },
			"Toggle overlay": { v: ["Alternar sobreposição"] },
			W: { v: ["S"] },
			"Year picker": { v: ["Seletor de ano"] },
			"Year picker overlay": { v: ["Sobreposição do seletor de ano"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			"Calendar icon": { v: ["Ícone de calendário"] },
			Cancel: { v: ["Cancelar"] },
			"Clear value": { v: ["Limpar valor"] },
			"Close time Picker": { v: ["Fechar seletor de hora"] },
			"Datepicker input": { v: ["Campo do seletor de data"] },
			"Datepicker menu": { v: ["Menu do seletor de data"] },
			"Decrement hours": { v: ["Diminuir horas"] },
			"Decrement minutes": { v: ["Diminuir minutos"] },
			"Decrement seconds": { v: ["Diminuir segundos"] },
			"Increment hours": { v: ["Aumentar horas"] },
			"Increment minutes": { v: ["Aumentar minutos"] },
			"Increment seconds": { v: ["Aumentar segundos"] },
			"Month picker": { v: ["Seletor de mês"] },
			"Month picker overlay": { v: ["Janela do seletor de mês"] },
			"Next month": { v: ["Próximo mês"] },
			"Next year": { v: ["Próximo ano"] },
			Now: { v: ["Agora"] },
			"Open hours overlay": { v: ["Abrir janela de horas"] },
			"Open minutes overlay": { v: ["Abrir janela de minutos"] },
			"Open months overlay": { v: ["Abrir janela de meses"] },
			"Open seconds overlay": { v: ["Abrir janela de segundos"] },
			"Open time picker": { v: ["Abrir seletor de hora"] },
			"Open years overlay": { v: ["Abrir janela de anos"] },
			Pick: { v: ["Selecionar"] },
			"Previous month": { v: ["Mês anterior"] },
			"Previous year": { v: ["Ano anterior"] },
			"Select date": { v: ["Selecionar data"] },
			"Select date and time": { v: ["Selecionar data e hora"] },
			"Select month": { v: ["Selecionar mês"] },
			"Select time": { v: ["Selecionar hora"] },
			"Select time range": { v: ["Selecionar intervalo de horas"] },
			"Select week": { v: ["Selecionar semana"] },
			"Select year": { v: ["Selecionar ano"] },
			"Switch AM/PM mode": { v: ["Alternar modo AM/PM"] },
			"Time picker": { v: ["Seletor de hora"] },
			"Toggle overlay": { v: ["Alternar sobreposição"] },
			W: { v: ["S"] },
			"Year picker": { v: ["Seletor de ano"] },
			"Year picker overlay": { v: ["Janela do seletor de ano"] }
		}
	},
	{
		l: "ro",
		t: {}
	},
	{
		l: "ru",
		t: {
			"Calendar icon": { v: ["Значок календаря"] },
			Cancel: { v: ["Отмена"] },
			"Clear value": { v: ["Очистить значение"] },
			"Close time Picker": { v: ["Закрыть выбор времени"] },
			"Datepicker input": { v: ["Поле выбора даты"] },
			"Datepicker menu": { v: ["Меню выбора даты"] },
			"Decrement hours": { v: ["Уменьшить количество часов"] },
			"Decrement minutes": { v: ["Уменьшить количество минут"] },
			"Decrement seconds": { v: ["Уменьшить количество секунд"] },
			"Increment hours": { v: ["Увеличить количество часов"] },
			"Increment minutes": { v: ["Увеличить количество минут"] },
			"Increment seconds": { v: ["Увеличить количество секунд"] },
			"Month picker": { v: ["Выбор месяца"] },
			"Month picker overlay": { v: ["Окно выбора месяца"] },
			"Next month": { v: ["Следующий месяц"] },
			"Next year": { v: ["Следующий год"] },
			Now: { v: ["Сейчас"] },
			"Open hours overlay": { v: ["Открыть окно выбора часов"] },
			"Open minutes overlay": { v: ["Открыть окно выбора минут"] },
			"Open months overlay": { v: ["Открыть окно выбора месяца"] },
			"Open seconds overlay": { v: ["Открыть окно выбора секунд"] },
			"Open time picker": { v: ["Открыть средство выбора времени"] },
			"Open years overlay": { v: ["Открыть окно выбора года"] },
			Pick: { v: ["Выбор"] },
			"Previous month": { v: ["Предыдущий месяц"] },
			"Previous year": { v: ["Предыдущий год"] },
			"Select date": { v: ["Выбрать дату"] },
			"Select date and time": { v: ["Выбрать дату и время"] },
			"Select month": { v: ["Выбрать месяц"] },
			"Select time": { v: ["Выбрать время"] },
			"Select time range": { v: ["Выбрать временной диапазон"] },
			"Select week": { v: ["Выбрать неделю"] },
			"Select year": { v: ["Выбрать год"] },
			"Switch AM/PM mode": { v: ["Переключение режима AM/PM"] },
			"Time picker": { v: ["Выбор времени"] },
			"Time zone": { v: ["Часовой пояс"] },
			"Toggle overlay": { v: ["Переключить панель"] },
			W: { v: ["Н"] },
			"Year picker": { v: ["Выбор года"] },
			"Year picker overlay": { v: ["Окно выбора года"] }
		}
	},
	{
		l: "sk",
		t: {}
	},
	{
		l: "sl",
		t: {}
	},
	{
		l: "sr",
		t: {
			"Calendar icon": { v: ["Икона календара"] },
			Cancel: { v: ["Откажи"] },
			"Clear value": { v: ["Обриши вредност"] },
			"Close time Picker": { v: ["Затвори бирач времена"] },
			"Datepicker input": { v: ["Улаз бирача датума"] },
			"Datepicker menu": { v: ["Мени бирача датума"] },
			"Decrement hours": { v: ["Умањи сате"] },
			"Decrement minutes": { v: ["Умањи минуте"] },
			"Decrement seconds": { v: ["Умањи секунде"] },
			"Increment hours": { v: ["Увећај сате"] },
			"Increment minutes": { v: ["Увећај минуте"] },
			"Increment seconds": { v: ["Увећај секунде"] },
			"Month picker": { v: ["Бирач месеца"] },
			"Month picker overlay": { v: ["Маска бирача месеца"] },
			"Next month": { v: ["Наредни месец"] },
			"Next year": { v: ["Наредна година"] },
			Now: { v: ["Сада"] },
			"Open hours overlay": { v: ["Отвори маску сати"] },
			"Open minutes overlay": { v: ["Отвори маску минута"] },
			"Open months overlay": { v: ["Отвори маску месеци"] },
			"Open seconds overlay": { v: ["Отвори маску секунди"] },
			"Open time picker": { v: ["Отвори бирач времена"] },
			"Open years overlay": { v: ["Отвори маску година"] },
			Pick: { v: ["Изабери"] },
			"Previous month": { v: ["Претходни месец"] },
			"Previous year": { v: ["Претходна година"] },
			"Select date": { v: ["Изаберите датум"] },
			"Select date and time": { v: ["Изаберите датум и време"] },
			"Select month": { v: ["Изаберите месец"] },
			"Select time": { v: ["Изаберите време"] },
			"Select time range": { v: ["Изаберите опсег времена"] },
			"Select week": { v: ["Изаберите недељу"] },
			"Select year": { v: ["Изаберите годину"] },
			"Switch AM/PM mode": { v: ["Укљ./Искљ. AM/PM режим"] },
			"Time picker": { v: ["Бирач времена"] },
			"Toggle overlay": { v: ["Укљ./Искљ. маску"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Бирач године"] },
			"Year picker overlay": { v: ["Маска бирача године"] }
		}
	},
	{
		l: "sv",
		t: {
			"Calendar icon": { v: ["Kalenderikon"] },
			Cancel: { v: ["Avbryt"] },
			"Clear value": { v: ["Rensa värde"] },
			"Close time Picker": { v: ["Stäng tidsväljaren"] },
			"Datepicker input": { v: ["Inmatning för datumväljare"] },
			"Datepicker menu": { v: ["Datumväljarmeny"] },
			"Decrement hours": { v: ["Minska timmar"] },
			"Decrement minutes": { v: ["Minska minuter"] },
			"Decrement seconds": { v: ["Minska sekunder"] },
			"Increment hours": { v: ["Öka timmar"] },
			"Increment minutes": { v: ["Öka minuter"] },
			"Increment seconds": { v: ["Öka sekunder"] },
			"Month picker": { v: ["Månadsväljare"] },
			"Month picker overlay": { v: ["Månadsväljarens panel"] },
			"Next month": { v: ["Nästa månad"] },
			"Next year": { v: ["Nästa år"] },
			Now: { v: ["Nu"] },
			"Open hours overlay": { v: ["Öppna timmespanel"] },
			"Open minutes overlay": { v: ["Öppna minutpanel"] },
			"Open months overlay": { v: ["Öppna månadspanel"] },
			"Open seconds overlay": { v: ["Öppna sekundpanel"] },
			"Open time picker": { v: ["Öppna tidsväljaren"] },
			"Open years overlay": { v: ["Öppna årspanel"] },
			Pick: { v: ["Välj"] },
			"Previous month": { v: ["Föregående månad"] },
			"Previous year": { v: ["Föregående år"] },
			"Select date": { v: ["Välj datum"] },
			"Select date and time": { v: ["Välj datum och tid"] },
			"Select month": { v: ["Välj månad"] },
			"Select time": { v: ["Välj tid"] },
			"Select time range": { v: ["Välj tidsintervall"] },
			"Select week": { v: ["Välj vecka"] },
			"Select year": { v: ["Välj år"] },
			"Switch AM/PM mode": { v: ["Växla mellan AM/PM-läge"] },
			"Time picker": { v: ["Tidsväljare"] },
			"Time zone": { v: ["Tidszon"] },
			"Toggle overlay": { v: ["Växla panel"] },
			W: { v: ["V"] },
			"Year picker": { v: ["Årsväljare"] },
			"Year picker overlay": { v: ["Årsväljarens panel"] }
		}
	},
	{
		l: "tr",
		t: {
			"Calendar icon": { v: ["Takvim simgesi"] },
			Cancel: { v: ["İptal"] },
			"Clear value": { v: ["Değeri temizle"] },
			"Close time Picker": { v: ["Zaman seçiciyi kapat"] },
			"Datepicker input": { v: ["Tarih seçici girişi"] },
			"Datepicker menu": { v: ["Tarih seçici menüsü"] },
			"Decrement hours": { v: ["Azalma saati"] },
			"Decrement minutes": { v: ["Azalma dakikası"] },
			"Decrement seconds": { v: ["Azalma saniyesi"] },
			"Increment hours": { v: ["Artma saati"] },
			"Increment minutes": { v: ["Artma dakikası"] },
			"Increment seconds": { v: ["Artma saniyesi"] },
			"Month picker": { v: ["Ay seçici"] },
			"Month picker overlay": { v: ["Ay seçici kaplaması"] },
			"Next month": { v: ["Sonraki ay"] },
			"Next year": { v: ["Sonraki yıl"] },
			Now: { v: ["Şimdi"] },
			"Open hours overlay": { v: ["Açık saatler kaplaması"] },
			"Open minutes overlay": { v: ["Dakika kaplamasını aç"] },
			"Open months overlay": { v: ["Ay kaplamasını aç"] },
			"Open seconds overlay": { v: ["Saniye kaplamasını aç"] },
			"Open time picker": { v: ["Saat seçiciyi aç"] },
			"Open years overlay": { v: ["Yıl kaplamasını aç"] },
			Pick: { v: ["Seçin"] },
			"Previous month": { v: ["Önceki ay"] },
			"Previous year": { v: ["Önceki yıl"] },
			"Select date": { v: ["Tarih seçin"] },
			"Select date and time": { v: ["Tarih ve saat seçin"] },
			"Select month": { v: ["Ay seçin"] },
			"Select time": { v: ["Saat seçin"] },
			"Select time range": { v: ["Saat aralığı seçin"] },
			"Select week": { v: ["Hafta seçin"] },
			"Select year": { v: ["Yıl seçin"] },
			"Switch AM/PM mode": { v: ["ÖÖ/ÖS kipine geç"] },
			"Time picker": { v: ["Saat seçici"] },
			"Time zone": { v: ["Saat dilimi"] },
			"Toggle overlay": { v: ["Kaplamayı aç/kapat"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Yıl seçici"] },
			"Year picker overlay": { v: ["Yıl seçici kaplaması"] }
		}
	},
	{
		l: "uk",
		t: {
			"Calendar icon": { v: ["Значок календаря"] },
			Cancel: { v: ["Скасувати"] },
			"Clear value": { v: ["Очистити значення"] },
			"Close time Picker": { v: ["Закрити вибір часу"] },
			"Datepicker input": { v: ["Вибір дати"] },
			"Datepicker menu": { v: ["Меню вибору дати"] },
			"Decrement hours": { v: ["Зменшення годин"] },
			"Decrement minutes": { v: ["Зменшення хвилин"] },
			"Decrement seconds": { v: ["Зменшення секунд"] },
			"Increment hours": { v: ["Збільшення годин"] },
			"Increment minutes": { v: ["Збільшення хвилин"] },
			"Increment seconds": { v: ["Збільшення секунд"] },
			"Month picker": { v: ["Вибір місяця"] },
			"Month picker overlay": { v: ["Напис вибору місяця"] },
			"Next month": { v: ["Наступний місяць"] },
			"Next year": { v: ["Наступний рік"] },
			Now: { v: ["Зараз"] },
			"Open hours overlay": { v: ["Відкрити напис годин"] },
			"Open minutes overlay": { v: ["Відкрити напис хвилин"] },
			"Open months overlay": { v: ["Відкрити напис місяців"] },
			"Open seconds overlay": { v: ["Відкрити напис секунд"] },
			"Open time picker": { v: ["Відкрити вибір часу"] },
			"Open years overlay": { v: ["Відкрити напис років"] },
			Pick: { v: ["Вибрати"] },
			"Previous month": { v: ["Попередній місяць"] },
			"Previous year": { v: ["Попередній рік"] },
			"Select date": { v: ["Вибрати дату"] },
			"Select date and time": { v: ["Вибрати дату та час"] },
			"Select month": { v: ["Вибрати місяць"] },
			"Select time": { v: ["Вибрати час"] },
			"Select time range": { v: ["Вибрати проміжок часу"] },
			"Select week": { v: ["Вибрати тиждень"] },
			"Select year": { v: ["Вибрати рік"] },
			"Switch AM/PM mode": { v: ["Перемкнути показ по полудні/до полудня"] },
			"Time picker": { v: ["Вибір часу"] },
			"Toggle overlay": { v: ["Перемкнути напис"] },
			W: { v: ["Тиж."] },
			"Year picker": { v: ["Вибір року"] },
			"Year picker overlay": { v: ["Напис вибору року"] }
		}
	},
	{
		l: "uz",
		t: {
			"Calendar icon": { v: ["Kalendar belgisi"] },
			Cancel: { v: ["Bekor qilish"] },
			"Clear value": { v: ["Qiymatni tozalash"] },
			"Close time Picker": { v: ["Vaqtni tanlash vositasini yopish"] },
			"Datepicker input": { v: ["Sana tanlash vositasi kiritish"] },
			"Datepicker menu": { v: ["Sana tanlash menyusi"] },
			"Decrement hours": { v: ["Ish vaqtini qisqartirish"] },
			"Decrement minutes": { v: ["Daqiqalarni kamaytirish"] },
			"Decrement seconds": { v: ["Soniyalarni kamaytirish"] },
			"Increment hours": { v: ["Ish soatlarini oshirish"] },
			"Increment minutes": { v: ["Daqiqalarni oshiring"] },
			"Increment seconds": { v: ["Soniyalarni ko'paytirish"] },
			"Month picker": { v: ["Oyni tanlovchi"] },
			"Month picker overlay": { v: ["Oyni tanlash vositasi qoplamasi"] },
			"Next month": { v: ["Keyingi oy"] },
			"Next year": { v: ["Keyingi yil"] },
			Now: { v: ["Hozir"] },
			"Open hours overlay": { v: ["Ochiq ish soatlari"] },
			"Open minutes overlay": { v: ["Ochiq daqiqalar qoplamasi"] },
			"Open months overlay": { v: ["Ochiq oylik qoplama"] },
			"Open seconds overlay": { v: ["Ochiq soniyalar qoplamasi"] },
			"Open time picker": { v: ["Vaqt tanlagichni ochish"] },
			"Open years overlay": { v: ["Yillar qoplamasini ochish"] },
			Pick: { v: ["Tanlash"] },
			"Previous month": { v: ["Oldingi oy"] },
			"Previous year": { v: ["O'tgan yil"] },
			"Select date": { v: ["Sana tanlang"] },
			"Select date and time": { v: ["Sana va vaqtni tanlang"] },
			"Select month": { v: ["Oyni tanlang"] },
			"Select time": { v: ["Oyni tanlang"] },
			"Select time range": { v: ["Vaqt oralig'ini tanlang"] },
			"Select week": { v: ["Haftani tanlang"] },
			"Select year": { v: ["Yilni tanlang"] },
			"Switch AM/PM mode": { v: ["AM/PM rejimini almashtiring"] },
			"Time picker": { v: ["Vaqtni tanlovchi"] },
			"Time zone": { v: ["Vaqt mintaqasi"] },
			"Toggle overlay": { v: ["Qoplamani almashtirish"] },
			W: { v: ["W"] },
			"Year picker": { v: ["Yilni tanlovchi"] },
			"Year picker overlay": { v: ["Yilni tanlash vositasi"] }
		}
	},
	{
		l: "zh-CN",
		t: {}
	},
	{
		l: "zh-HK",
		t: {
			"Calendar icon": { v: ["行事曆圖示"] },
			Cancel: { v: ["取消"] },
			"Clear value": { v: ["清除值"] },
			"Close time Picker": { v: ["關閉時間挑選器"] },
			"Datepicker input": { v: ["日期挑選器輸入"] },
			"Datepicker menu": { v: ["日期挑選器選單"] },
			"Decrement hours": { v: ["小時遞減"] },
			"Decrement minutes": { v: ["分鐘遞減"] },
			"Decrement seconds": { v: ["秒遞減"] },
			"Increment hours": { v: ["小時遞增"] },
			"Increment minutes": { v: ["分鐘遞增"] },
			"Increment seconds": { v: ["秒遞增"] },
			"Month picker": { v: ["月挑選器"] },
			"Month picker overlay": { v: ["月挑選器覆蓋層"] },
			"Next month": { v: ["下個月"] },
			"Next year": { v: ["明年"] },
			Now: { v: ["現在"] },
			"Open hours overlay": { v: ["開啟小時覆蓋層"] },
			"Open minutes overlay": { v: ["開啟分鐘覆蓋層"] },
			"Open months overlay": { v: ["開啟月覆蓋層"] },
			"Open seconds overlay": { v: ["開啟秒覆蓋層"] },
			"Open time picker": { v: ["開啟時間挑選器"] },
			"Open years overlay": { v: ["開啟年覆蓋層"] },
			Pick: { v: ["挑選"] },
			"Previous month": { v: ["上個月"] },
			"Previous year": { v: ["去年"] },
			"Select date": { v: ["選取日期"] },
			"Select date and time": { v: ["選取日期與時間"] },
			"Select month": { v: ["選取月"] },
			"Select time": { v: ["選取時間"] },
			"Select time range": { v: ["選取時間範圍"] },
			"Select week": { v: ["選取週"] },
			"Select year": { v: ["選取年"] },
			"Switch AM/PM mode": { v: ["切換上午/下午模式"] },
			"Time picker": { v: ["時間挑選器"] },
			"Time zone": { v: ["時區"] },
			"Toggle overlay": { v: ["切換覆蓋層"] },
			W: { v: ["週"] },
			"Year picker": { v: ["年挑選器"] },
			"Year picker overlay": { v: ["年挑選器覆蓋層"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"Calendar icon": { v: ["行事曆圖示"] },
			Cancel: { v: ["取消"] },
			"Clear value": { v: ["清除值"] },
			"Close time Picker": { v: ["關閉時間挑選器"] },
			"Datepicker input": { v: ["日期挑選器輸入"] },
			"Datepicker menu": { v: ["日期挑選器選單"] },
			"Decrement hours": { v: ["小時遞減"] },
			"Decrement minutes": { v: ["分鐘遞減"] },
			"Decrement seconds": { v: ["秒遞減"] },
			"Increment hours": { v: ["小時遞增"] },
			"Increment minutes": { v: ["分鐘遞增"] },
			"Increment seconds": { v: ["秒遞增"] },
			"Month picker": { v: ["月挑選器"] },
			"Month picker overlay": { v: ["月挑選器覆蓋層"] },
			"Next month": { v: ["下個月"] },
			"Next year": { v: ["明年"] },
			Now: { v: ["現在"] },
			"Open hours overlay": { v: ["開啟小時覆蓋層"] },
			"Open minutes overlay": { v: ["開啟分鐘覆蓋層"] },
			"Open months overlay": { v: ["開啟月覆蓋層"] },
			"Open seconds overlay": { v: ["開啟秒覆蓋層"] },
			"Open time picker": { v: ["開啟時間挑選器"] },
			"Open years overlay": { v: ["開啟年覆蓋層"] },
			Pick: { v: ["挑選"] },
			"Previous month": { v: ["上個月"] },
			"Previous year": { v: ["去年"] },
			"Select date": { v: ["選取日期"] },
			"Select date and time": { v: ["選取日期與時間"] },
			"Select month": { v: ["選取月"] },
			"Select time": { v: ["選取時間"] },
			"Select time range": { v: ["選取時間範圍"] },
			"Select week": { v: ["選取週"] },
			"Select year": { v: ["選取年"] },
			"Switch AM/PM mode": { v: ["切換上午/下午模式"] },
			"Time picker": { v: ["時間挑選器"] },
			"Time zone": { v: ["時區"] },
			"Toggle overlay": { v: ["切換覆蓋層"] },
			W: { v: ["W"] },
			"Year picker": { v: ["年挑選器"] },
			"Year picker overlay": { v: ["年挑選器覆蓋層"] }
		}
	}
], iv = [
	{
		l: "ar",
		t: {
			"Cancel changes": { v: ["إلغاء التغييرات"] },
			"Confirm changes": { v: ["تأكيد التغييرات"] }
		}
	},
	{
		l: "ast",
		t: {
			"Cancel changes": { v: ["Encaboxar los cambeos"] },
			"Confirm changes": { v: ["Confirmar los cambeos"] }
		}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: {
			"Cancel changes": { v: ["Cancel·la els canvis"] },
			"Confirm changes": { v: ["Confirmeu els canvis"] }
		}
	},
	{
		l: "cs",
		t: {
			"Cancel changes": { v: ["Zrušit změny"] },
			"Confirm changes": { v: ["Potvrdit změny"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			"Cancel changes": { v: ["Zrušit změny"] },
			"Confirm changes": { v: ["Potvrdit změny"] }
		}
	},
	{
		l: "da",
		t: {
			"Cancel changes": { v: ["Annuller ændringer"] },
			"Confirm changes": { v: ["Bekræft ændringer"] }
		}
	},
	{
		l: "de",
		t: {
			"Cancel changes": { v: ["Änderungen verwerfen"] },
			"Confirm changes": { v: ["Änderungen bestätigen"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"Cancel changes": { v: ["Änderungen verwerfen"] },
			"Confirm changes": { v: ["Änderungen bestätigen"] }
		}
	},
	{
		l: "el",
		t: {
			"Cancel changes": { v: ["Ακύρωση αλλαγών"] },
			"Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] }
		}
	},
	{
		l: "en-GB",
		t: {
			"Cancel changes": { v: ["Cancel changes"] },
			"Confirm changes": { v: ["Confirm changes"] }
		}
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {
			"Cancel changes": { v: ["Cancelar cambios"] },
			"Confirm changes": { v: ["Confirmar cambios"] }
		}
	},
	{
		l: "es-AR",
		t: {
			"Cancel changes": { v: ["Cancelar cambios"] },
			"Confirm changes": { v: ["Confirmar cambios"] }
		}
	},
	{
		l: "es-EC",
		t: {
			"Cancel changes": { v: ["Cancelar cambios"] },
			"Confirm changes": { v: ["Confirmar cambios"] }
		}
	},
	{
		l: "es-MX",
		t: {
			"Cancel changes": { v: ["Cancelar cambios"] },
			"Confirm changes": { v: ["Confirmar cambios"] }
		}
	},
	{
		l: "et-EE",
		t: {
			"Cancel changes": { v: ["Tühista muudatused"] },
			"Confirm changes": { v: ["Kinnita muudatused"] }
		}
	},
	{
		l: "eu",
		t: {
			"Cancel changes": { v: ["Ezeztatu aldaketak"] },
			"Confirm changes": { v: ["Baieztatu aldaketak"] }
		}
	},
	{
		l: "fa",
		t: {
			"Cancel changes": { v: ["لغو تغییرات"] },
			"Confirm changes": { v: ["تایید تغییرات"] }
		}
	},
	{
		l: "fi",
		t: {
			"Cancel changes": { v: ["Peruuta muutokset"] },
			"Confirm changes": { v: ["Vahvista muutokset"] }
		}
	},
	{
		l: "fr",
		t: {
			"Cancel changes": { v: ["Annuler les modifications"] },
			"Confirm changes": { v: ["Confirmer les modifications"] }
		}
	},
	{
		l: "ga",
		t: {
			"Cancel changes": { v: ["Cealaigh athruithe"] },
			"Confirm changes": { v: ["Deimhnigh na hathruithe"] }
		}
	},
	{
		l: "gl",
		t: {
			"Cancel changes": { v: ["Cancelar os cambios"] },
			"Confirm changes": { v: ["Confirma os cambios"] }
		}
	},
	{
		l: "he",
		t: {
			"Cancel changes": { v: ["ביטול שינויים"] },
			"Confirm changes": { v: ["אישור השינויים"] }
		}
	},
	{
		l: "hr",
		t: {
			"Cancel changes": { v: ["Otkaži promjene"] },
			"Confirm changes": { v: ["Potvrdi promjene"] }
		}
	},
	{
		l: "hu",
		t: {
			"Cancel changes": { v: ["Változtatások elvetése"] },
			"Confirm changes": { v: ["Változtatások megerősítése"] }
		}
	},
	{
		l: "id",
		t: {
			"Cancel changes": { v: ["Batalkan perubahan"] },
			"Confirm changes": { v: ["Konfirmasikan perubahan"] }
		}
	},
	{
		l: "is",
		t: {
			"Cancel changes": { v: ["Hætta við breytingar"] },
			"Confirm changes": { v: ["Staðfesta breytingar"] }
		}
	},
	{
		l: "it",
		t: {
			"Cancel changes": { v: ["Annulla modifiche"] },
			"Confirm changes": { v: ["Conferma modifiche"] }
		}
	},
	{
		l: "ja",
		t: {
			"Cancel changes": { v: ["変更をキャンセル"] },
			"Confirm changes": { v: ["変更を承認"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			"Cancel changes": { v: ["変更をキャンセル"] },
			"Confirm changes": { v: ["変更を承認"] }
		}
	},
	{
		l: "ko",
		t: {
			"Cancel changes": { v: ["변경 취소"] },
			"Confirm changes": { v: ["변경 사항 확인"] }
		}
	},
	{
		l: "lo",
		t: {
			"Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] },
			"Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"Cancel changes": { v: ["Atsisakyti pakeitimų"] },
			"Confirm changes": { v: ["Patvirtinti pakeitimus"] }
		}
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: {
			"Cancel changes": { v: ["Откажи ги промените"] },
			"Confirm changes": { v: ["Потврди ги промените"] }
		}
	},
	{
		l: "mn",
		t: {
			"Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] },
			"Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] }
		}
	},
	{
		l: "my",
		t: {
			"Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] },
			"Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] }
		}
	},
	{
		l: "nb",
		t: {
			"Cancel changes": { v: ["Avbryt endringer"] },
			"Confirm changes": { v: ["Bekreft endringer"] }
		}
	},
	{
		l: "nl",
		t: {
			"Cancel changes": { v: ["Wijzigingen annuleren"] },
			"Confirm changes": { v: ["Wijzigingen bevestigen"] }
		}
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: {
			"Cancel changes": { v: ["Anuluj zmiany"] },
			"Confirm changes": { v: ["Potwierdź zmiany"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			"Cancel changes": { v: ["Cancelar alterações"] },
			"Confirm changes": { v: ["Confirmar alterações"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			"Cancel changes": { v: ["Cancelar alterações"] },
			"Confirm changes": { v: ["Confirmar alterações"] }
		}
	},
	{
		l: "ro",
		t: {
			"Cancel changes": { v: ["Anulează modificările"] },
			"Confirm changes": { v: ["Confirmați modificările"] }
		}
	},
	{
		l: "ru",
		t: {
			"Cancel changes": { v: ["Отменить изменения"] },
			"Confirm changes": { v: ["Подтвердить изменения"] }
		}
	},
	{
		l: "sk",
		t: {
			"Cancel changes": { v: ["Zrušiť zmeny"] },
			"Confirm changes": { v: ["Potvrdiť zmeny"] }
		}
	},
	{
		l: "sl",
		t: {
			"Cancel changes": { v: ["Prekliči spremembe"] },
			"Confirm changes": { v: ["Potrdi spremembe"] }
		}
	},
	{
		l: "sr",
		t: {
			"Cancel changes": { v: ["Откажи измене"] },
			"Confirm changes": { v: ["Потврдите измене"] }
		}
	},
	{
		l: "sv",
		t: {
			"Cancel changes": { v: ["Avbryt ändringar"] },
			"Confirm changes": { v: ["Bekräfta ändringar"] }
		}
	},
	{
		l: "tr",
		t: {
			"Cancel changes": { v: ["Değişiklikleri iptal et"] },
			"Confirm changes": { v: ["Değişiklikleri onayla"] }
		}
	},
	{
		l: "uk",
		t: {
			"Cancel changes": { v: ["Скасувати зміни"] },
			"Confirm changes": { v: ["Підтвердити зміни"] }
		}
	},
	{
		l: "uz",
		t: {
			"Cancel changes": { v: ["O'zgarishlarni bekor qilish"] },
			"Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			"Cancel changes": { v: ["取消更改"] },
			"Confirm changes": { v: ["确认更改"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			"Cancel changes": { v: ["取消更改"] },
			"Confirm changes": { v: ["確認更改"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"Cancel changes": { v: ["取消變更"] },
			"Confirm changes": { v: ["確認變更"] }
		}
	}
], av = [
	{
		l: "ar",
		t: {
			"Clear selected": { v: ["محو المحدّد"] },
			"Deselect {option}": { v: ["إلغاء تحديد {option}"] },
			"No results": { v: ["ليس هناك أية نتيجة"] },
			Options: { v: ["خيارات"] }
		}
	},
	{
		l: "ast",
		t: {
			"Clear selected": { v: ["Borrar lo seleicionao"] },
			"Deselect {option}": { v: ["Deseleicionar «{option}»"] },
			"No results": { v: ["Nun hai nengún resultáu"] },
			Options: { v: ["Opciones"] }
		}
	},
	{
		l: "br",
		t: { "No results": { v: ["Disoc'h ebet"] } }
	},
	{
		l: "ca",
		t: { "No results": { v: ["Sense resultats"] } }
	},
	{
		l: "cs",
		t: {
			"Clear selected": { v: ["Vyčistit vybrané"] },
			"Deselect {option}": { v: ["Zrušit výběr {option}"] },
			"No results": { v: ["Nic nenalezeno"] },
			Options: { v: ["Možnosti"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			"Clear selected": { v: ["Vyčistit vybrané"] },
			"Deselect {option}": { v: ["Zrušit výběr {option}"] },
			"No results": { v: ["Nic nenalezeno"] },
			Options: { v: ["Možnosti"] }
		}
	},
	{
		l: "da",
		t: {
			"Clear selected": { v: ["Ryd valgt"] },
			"Deselect {option}": { v: ["Fravælg {option}"] },
			"No results": { v: ["Ingen resultater"] },
			Options: { v: ["Indstillinger"] }
		}
	},
	{
		l: "de",
		t: {
			"Clear selected": { v: ["Auswahl leeren"] },
			"Deselect {option}": { v: ["{option} abwählen"] },
			"No results": { v: ["Keine Ergebnisse"] },
			Options: { v: ["Optionen"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"Clear selected": { v: ["Auswahl leeren"] },
			"Deselect {option}": { v: ["{option} abwählen"] },
			"No results": { v: ["Keine Ergebnisse"] },
			Options: { v: ["Optionen"] }
		}
	},
	{
		l: "el",
		t: {
			"Clear selected": { v: ["Εκκαθάριση επιλογής"] },
			"Deselect {option}": { v: ["Αποεπιλογή {option}"] },
			"No results": { v: ["Κανένα αποτέλεσμα"] },
			Options: { v: ["Επιλογές"] }
		}
	},
	{
		l: "en-GB",
		t: {
			"Clear selected": { v: ["Clear selected"] },
			"Deselect {option}": { v: ["Deselect {option}"] },
			"No results": { v: ["No results"] },
			Options: { v: ["Options"] }
		}
	},
	{
		l: "eo",
		t: { "No results": { v: ["La rezulto forestas"] } }
	},
	{
		l: "es",
		t: {
			"Clear selected": { v: ["Limpiar selección"] },
			"Deselect {option}": { v: ["Deseleccionar {option}"] },
			"No results": { v: [" Ningún resultado"] },
			Options: { v: ["Opciones"] }
		}
	},
	{
		l: "es-AR",
		t: {
			"Clear selected": { v: ["Limpiar selección"] },
			"Deselect {option}": { v: ["Deseleccionar {option}"] },
			"No results": { v: ["Sin resultados"] },
			Options: { v: ["Opciones"] }
		}
	},
	{
		l: "es-EC",
		t: { "No results": { v: ["Sin resultados"] } }
	},
	{
		l: "es-MX",
		t: {
			"Clear selected": { v: ["Limpiar selección"] },
			"Deselect {option}": { v: ["Deseleccionar {option}"] },
			"No results": { v: ["Sin resultados"] },
			Options: { v: ["Opciones"] }
		}
	},
	{
		l: "et-EE",
		t: {
			"Clear selected": { v: ["Tühjenda valik"] },
			"Deselect {option}": { v: ["Eemalda {option} valik"] },
			"No results": { v: ["Tulemusi pole"] },
			Options: { v: ["Valikud"] }
		}
	},
	{
		l: "eu",
		t: { "No results": { v: ["Emaitzarik ez"] } }
	},
	{
		l: "fa",
		t: {
			"Clear selected": { v: ["پاک کردن مورد انتخاب شده"] },
			"Deselect {option}": { v: ["لغو انتخاب {option}"] },
			"No results": { v: ["بدون هیچ نتیجه‌ای"] },
			Options: { v: ["گزینه‌ها"] }
		}
	},
	{
		l: "fi",
		t: {
			"Clear selected": { v: ["Tyhjennä valitut"] },
			"Deselect {option}": { v: ["Poista valinta {option}"] },
			"No results": { v: ["Ei tuloksia"] },
			Options: { v: ["Valinnat"] }
		}
	},
	{
		l: "fr",
		t: {
			"Clear selected": { v: ["Vider la sélection"] },
			"Deselect {option}": { v: ["Désélectionner {option}"] },
			"No results": { v: ["Aucun résultat"] },
			Options: { v: ["Options"] }
		}
	},
	{
		l: "ga",
		t: {
			"Clear selected": { v: ["Glan roghnaithe"] },
			"Deselect {option}": { v: ["Díroghnaigh {option}"] },
			"No results": { v: ["Gan torthaí"] },
			Options: { v: ["Roghanna"] }
		}
	},
	{
		l: "gl",
		t: {
			"Clear selected": { v: ["Limpar o seleccionado"] },
			"Deselect {option}": { v: ["Desmarcar {option}"] },
			"No results": { v: ["Sen resultados"] },
			Options: { v: ["Opcións"] }
		}
	},
	{
		l: "he",
		t: { "No results": { v: ["אין תוצאות"] } }
	},
	{
		l: "hr",
		t: {
			"Clear selected": { v: ["Očisti odabir"] },
			"Deselect {option}": { v: ["Odznači {option}"] },
			"No results": { v: ["Nema rezultata"] },
			Options: { v: ["Mogućnosti"] }
		}
	},
	{
		l: "hu",
		t: {
			"Clear selected": { v: ["Kijelölés törlése"] },
			"Deselect {option}": { v: ["{option} kijelölésének megszüntetése"] },
			"No results": { v: ["Nincs találat"] },
			Options: { v: ["Beállítások"] }
		}
	},
	{
		l: "id",
		t: {
			"Clear selected": { v: ["Hapus terpilih"] },
			"Deselect {option}": { v: ["Batalkan pemilihan {option}"] },
			"No results": { v: ["Tidak ada hasil"] },
			Options: { v: ["Opsi"] }
		}
	},
	{
		l: "is",
		t: {
			"Clear selected": { v: ["Hreinsa valið"] },
			"Deselect {option}": { v: ["Afvelja {option}"] },
			"No results": { v: ["Engar niðurstöður"] },
			Options: { v: ["Valkostir"] }
		}
	},
	{
		l: "it",
		t: {
			"Clear selected": { v: ["Cancella selezionati"] },
			"Deselect {option}": { v: ["Deselezionare {option}"] },
			"No results": { v: ["Nessun risultato"] }
		}
	},
	{
		l: "ja",
		t: {
			"Clear selected": { v: ["選択を解除"] },
			"Deselect {option}": { v: ["{option} の選択を解除"] },
			"No results": { v: ["結果無し"] },
			Options: { v: ["オプション"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			"Clear selected": { v: ["選択を解除"] },
			"Deselect {option}": { v: ["{option} の選択を解除"] },
			"No results": { v: ["結果無し"] },
			Options: { v: ["オプション"] }
		}
	},
	{
		l: "ko",
		t: {
			"Clear selected": { v: ["선택 항목 지우기"] },
			"Deselect {option}": { v: ["{option} 선택 해제"] },
			"No results": { v: ["결과 없음"] },
			Options: { v: ["옵션"] }
		}
	},
	{
		l: "lo",
		t: {
			"Clear selected": { v: ["ລຶບສິ່ງທີ່ເລືອກ"] },
			"Deselect {option}": { v: ["ຍົກເລີກການເລືອກ {option}"] },
			"No results": { v: ["ບໍ່ມີຜົນລັບ"] },
			Options: { v: ["ຕົວເລືອກ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"Clear selected": { v: ["Išvalyti pasirinkimą"] },
			"Deselect {option}": { v: ["Panaikinkite {option} pasirinkimą"] },
			"No results": { v: ["Nėra rezultatų"] },
			Options: { v: ["Parinktys"] }
		}
	},
	{
		l: "lv",
		t: { "No results": { v: ["Nav rezultātu"] } }
	},
	{
		l: "mk",
		t: {
			"Clear selected": { v: ["Исчисти означени"] },
			"Deselect {option}": { v: ["Откажи избор на {option}"] },
			"No results": { v: ["Нема резултати"] },
			Options: { v: ["Опции"] }
		}
	},
	{
		l: "mn",
		t: {
			"Clear selected": { v: ["Сонголтыг цэвэрлэх"] },
			"Deselect {option}": { v: ["{option}-г сонголтоос хасах"] },
			"No results": { v: ["Үр дүн алга"] },
			Options: { v: ["Тохиргоо"] }
		}
	},
	{
		l: "my",
		t: { "No results": { v: ["ရလဒ်မရှိပါ"] } }
	},
	{
		l: "nb",
		t: {
			"Clear selected": { v: ["Tøm merket"] },
			"Deselect {option}": { v: ["Opphev valg {option}"] },
			"No results": { v: ["Ingen resultater"] },
			Options: { v: ["Alternativer"] }
		}
	},
	{
		l: "nl",
		t: {
			"Clear selected": { v: ["Selectie wissen"] },
			"Deselect {option}": { v: ["Selectie {option} opheffen"] },
			"No results": { v: ["Geen resultaten"] },
			Options: { v: ["Opties"] }
		}
	},
	{
		l: "oc",
		t: { "No results": { v: ["Cap de resultat"] } }
	},
	{
		l: "pl",
		t: {
			"Clear selected": { v: ["Wyczyść wybrane"] },
			"Deselect {option}": { v: ["Odznacz {option}"] },
			"No results": { v: ["Brak wyników"] },
			Options: { v: ["Opcje"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			"Clear selected": { v: ["Limpar selecionado"] },
			"Deselect {option}": { v: ["Desselecionar {option}"] },
			"No results": { v: ["Sem resultados"] },
			Options: { v: ["Opções"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			"Clear selected": { v: ["Limpeza selecionada"] },
			"Deselect {option}": { v: ["Desmarcar {option}"] },
			"No results": { v: ["Sem resultados"] },
			Options: { v: ["Opções"] }
		}
	},
	{
		l: "ro",
		t: {
			"Clear selected": { v: ["Șterge selecția"] },
			"Deselect {option}": { v: ["Deselctează {option}"] },
			"No results": { v: ["Nu există rezultate"] }
		}
	},
	{
		l: "ru",
		t: {
			"Clear selected": { v: ["Очистить выбранный"] },
			"Deselect {option}": { v: ["Отменить выбор {option}"] },
			"No results": { v: ["Результаты отсуствуют"] },
			Options: { v: ["Варианты"] }
		}
	},
	{
		l: "sk",
		t: {
			"Clear selected": { v: ["Vymazať vybraté"] },
			"Deselect {option}": { v: ["Zrušiť výber {option}"] },
			"No results": { v: ["Žiadne výsledky"] },
			Options: { v: ["možnosti"] }
		}
	},
	{
		l: "sl",
		t: { "No results": { v: ["Ni zadetkov"] } }
	},
	{
		l: "sr",
		t: {
			"Clear selected": { v: ["Обриши изабрано"] },
			"Deselect {option}": { v: ["Уклони избор {option}"] },
			"No results": { v: ["Нема резултата"] },
			Options: { v: ["Опције"] }
		}
	},
	{
		l: "sv",
		t: {
			"Clear selected": { v: ["Rensa val"] },
			"Deselect {option}": { v: ["Avmarkera {option}"] },
			"No results": { v: ["Inga resultat"] },
			Options: { v: ["Alternativ"] }
		}
	},
	{
		l: "tr",
		t: {
			"Clear selected": { v: ["Seçilmişleri temizle"] },
			"Deselect {option}": { v: ["{option} bırak"] },
			"No results": { v: ["Herhangi bir sonuç bulunamadı"] },
			Options: { v: ["Seçenekler"] }
		}
	},
	{
		l: "uk",
		t: {
			"Clear selected": { v: ["Очистити вибране"] },
			"Deselect {option}": { v: ["Зняти вибір {option}"] },
			"No results": { v: ["Відсутні результати"] },
			Options: { v: ["Параметри"] }
		}
	},
	{
		l: "uz",
		t: {
			"Clear selected": { v: ["Tanlanganni tozalash"] },
			"Deselect {option}": { v: ["{option}tanlovni bekor qiling"] },
			"No results": { v: ["Natija yoʻq"] },
			Options: { v: ["Variantlar"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			"Clear selected": { v: ["清除所选"] },
			"Deselect {option}": { v: ["取消选择 {option}"] },
			"No results": { v: ["无结果"] },
			Options: { v: ["选项"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			"Clear selected": { v: ["清除所選項目"] },
			"Deselect {option}": { v: ["取消選擇 {option}"] },
			"No results": { v: ["無結果"] },
			Options: { v: ["選項"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"Clear selected": { v: ["清除選定項目"] },
			"Deselect {option}": { v: ["取消選取 {option}"] },
			"No results": { v: ["無結果"] },
			Options: { v: ["選項"] }
		}
	}
], ov = [
	{
		l: "ar",
		t: {
			"Clear text": { v: ["محو النص"] },
			"Save changes": { v: ["حفظ التغييرات"] }
		}
	},
	{
		l: "ast",
		t: {
			"Clear text": { v: ["Borrar el testu"] },
			"Save changes": { v: ["Guardar los cambeos"] }
		}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: { "Clear text": { v: ["Netejar text"] } }
	},
	{
		l: "cs",
		t: {
			"Clear text": { v: ["Čitelný text"] },
			"Save changes": { v: ["Uložit změny"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			"Clear text": { v: ["Čitelný text"] },
			"Save changes": { v: ["Uložit změny"] }
		}
	},
	{
		l: "da",
		t: {
			"Clear text": { v: ["Ryd tekst"] },
			"Save changes": { v: ["Gem ændringer"] }
		}
	},
	{
		l: "de",
		t: {
			"Clear text": { v: ["Klartext"] },
			"Save changes": { v: ["Änderungen speichern"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"Clear text": { v: ["Klartext"] },
			"Save changes": { v: ["Änderungen speichern"] }
		}
	},
	{
		l: "el",
		t: {
			"Clear text": { v: ["Εκκαθάριση κειμένου"] },
			"Save changes": { v: ["Αποθήκευση αλλαγών"] }
		}
	},
	{
		l: "en-GB",
		t: {
			"Clear text": { v: ["Clear text"] },
			"Save changes": { v: ["Save changes"] }
		}
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {
			"Clear text": { v: ["Limpiar texto"] },
			"Save changes": { v: ["Guardar cambios"] }
		}
	},
	{
		l: "es-AR",
		t: {
			"Clear text": { v: ["Limpiar texto"] },
			"Save changes": { v: ["Guardar cambios"] }
		}
	},
	{
		l: "es-EC",
		t: { "Clear text": { v: ["Limpiar texto"] } }
	},
	{
		l: "es-MX",
		t: {
			"Clear text": { v: ["Limpiar texto"] },
			"Save changes": { v: ["Guardar cambios"] }
		}
	},
	{
		l: "et-EE",
		t: {
			"Clear text": { v: ["Kustuta tekst"] },
			"Save changes": { v: ["Salvesta muudatused"] }
		}
	},
	{
		l: "eu",
		t: { "Clear text": { v: ["Garbitu testua"] } }
	},
	{
		l: "fa",
		t: {
			"Clear text": { v: ["پاک کردن متن"] },
			"Save changes": { v: ["ذخیرهٔ تغییرات"] }
		}
	},
	{
		l: "fi",
		t: {
			"Clear text": { v: ["Tyhjennä teksti"] },
			"Save changes": { v: ["Tallenna muutokset"] }
		}
	},
	{
		l: "fr",
		t: {
			"Clear text": { v: ["Effacer le texte"] },
			"Save changes": { v: ["Sauvegarder les changements"] }
		}
	},
	{
		l: "ga",
		t: {
			"Clear text": { v: ["Glan téacs"] },
			"Save changes": { v: ["Sabháil na hathruithe"] }
		}
	},
	{
		l: "gl",
		t: {
			"Clear text": { v: ["Limpar o texto"] },
			"Save changes": { v: ["Gardar os cambios"] }
		}
	},
	{
		l: "he",
		t: { "Clear text": { v: ["פינוי טקסט"] } }
	},
	{
		l: "hr",
		t: {
			"Clear text": { v: ["Očisti tekst"] },
			"Save changes": { v: ["Spremi promjene"] }
		}
	},
	{
		l: "hu",
		t: {
			"Clear text": { v: ["Szöveg törlése"] },
			"Save changes": { v: ["Változtatások mentése"] }
		}
	},
	{
		l: "id",
		t: {
			"Clear text": { v: ["Bersihkan teks"] },
			"Save changes": { v: ["Simpan perubahan"] }
		}
	},
	{
		l: "is",
		t: {
			"Clear text": { v: ["Hreinsa texta"] },
			"Save changes": { v: ["Vista breytingar"] }
		}
	},
	{
		l: "it",
		t: {
			"Clear text": { v: ["Cancella il testo"] },
			"Save changes": { v: ["Salva le modifiche"] }
		}
	},
	{
		l: "ja",
		t: {
			"Clear text": { v: ["テキストをクリア"] },
			"Save changes": { v: ["変更を保存"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			"Clear text": { v: ["テキストをクリア"] },
			"Save changes": { v: ["変更を保存"] }
		}
	},
	{
		l: "ko",
		t: {
			"Clear text": { v: ["텍스트 지우기"] },
			"Save changes": { v: ["변경 사항 저장"] }
		}
	},
	{
		l: "lo",
		t: {
			"Clear text": { v: ["ລຶບຂໍ້ຄວາມ"] },
			"Save changes": { v: ["ບັນທຶກການປ່ຽນແປງ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"Clear text": { v: ["Išvalyti tekstą"] },
			"Save changes": { v: ["Įrašyti pakeitimus"] }
		}
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: {
			"Clear text": { v: ["Исчисти текст"] },
			"Save changes": { v: ["Зачувај промени"] }
		}
	},
	{
		l: "mn",
		t: {
			"Clear text": { v: ["Текстийг цэвэрлэх"] },
			"Save changes": { v: ["Өөрчлөлтийг хадгалах"] }
		}
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: {
			"Clear text": { v: ["Fjern tekst"] },
			"Save changes": { v: ["Lagre endringer"] }
		}
	},
	{
		l: "nl",
		t: {
			"Clear text": { v: ["Tekst wissen"] },
			"Save changes": { v: ["Wijzigingen opslaan"] }
		}
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: {
			"Clear text": { v: ["Wyczyść tekst"] },
			"Save changes": { v: ["Zapisz zmiany"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			"Clear text": { v: ["Limpar texto"] },
			"Save changes": { v: ["Salvar alterações"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			"Clear text": { v: ["Limpar texto"] },
			"Save changes": { v: ["Gravar alterações"] }
		}
	},
	{
		l: "ro",
		t: {
			"Clear text": { v: ["Șterge textul"] },
			"Save changes": { v: ["Salvează modificările"] }
		}
	},
	{
		l: "ru",
		t: {
			"Clear text": { v: ["Очистить текст"] },
			"Save changes": { v: ["Сохранить изменения"] }
		}
	},
	{
		l: "sk",
		t: {
			"Clear text": { v: ["Vamazať text"] },
			"Save changes": { v: ["Uložiť zmeny"] }
		}
	},
	{
		l: "sl",
		t: { "Clear text": { v: ["Počisti besedilo"] } }
	},
	{
		l: "sr",
		t: {
			"Clear text": { v: ["Обриши текст"] },
			"Save changes": { v: ["Сачувај измене"] }
		}
	},
	{
		l: "sv",
		t: {
			"Clear text": { v: ["Ta bort text"] },
			"Save changes": { v: ["Spara ändringar"] }
		}
	},
	{
		l: "tr",
		t: {
			"Clear text": { v: ["Metni temizle"] },
			"Save changes": { v: ["Değişiklikleri kaydet"] }
		}
	},
	{
		l: "uk",
		t: {
			"Clear text": { v: ["Очистити текст"] },
			"Save changes": { v: ["Зберегти зміни"] }
		}
	},
	{
		l: "uz",
		t: {
			"Clear text": { v: ["Matnni tozalash"] },
			"Save changes": { v: ["O'zgarishlarni saqlang"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			"Clear text": { v: ["清除文本"] },
			"Save changes": { v: ["保存修改"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			"Clear text": { v: ["清除文本"] },
			"Save changes": { v: ["保存更改"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"Clear text": { v: ["清除文字"] },
			"Save changes": { v: ["儲存變更"] }
		}
	}
], sv = [
	{
		l: "ar",
		t: { Close: { v: ["إغلاق"] } }
	},
	{
		l: "ast",
		t: { Close: { v: ["Zarrar"] } }
	},
	{
		l: "br",
		t: { Close: { v: ["Serriñ"] } }
	},
	{
		l: "ca",
		t: { Close: { v: ["Tanca"] } }
	},
	{
		l: "cs",
		t: { Close: { v: ["Zavřít"] } }
	},
	{
		l: "cs-CZ",
		t: { Close: { v: ["Zavřít"] } }
	},
	{
		l: "da",
		t: { Close: { v: ["Luk"] } }
	},
	{
		l: "de",
		t: { Close: { v: ["Schließen"] } }
	},
	{
		l: "de-DE",
		t: { Close: { v: ["Schließen"] } }
	},
	{
		l: "el",
		t: { Close: { v: ["Κλείσιμο"] } }
	},
	{
		l: "en-GB",
		t: { Close: { v: ["Close"] } }
	},
	{
		l: "eo",
		t: { Close: { v: ["Fermu"] } }
	},
	{
		l: "es",
		t: { Close: { v: ["Cerrar"] } }
	},
	{
		l: "es-AR",
		t: { Close: { v: ["Cerrar"] } }
	},
	{
		l: "es-EC",
		t: { Close: { v: ["Cerrar"] } }
	},
	{
		l: "es-MX",
		t: { Close: { v: ["Cerrar"] } }
	},
	{
		l: "et-EE",
		t: { Close: { v: ["Sulge"] } }
	},
	{
		l: "eu",
		t: { Close: { v: ["Itxi"] } }
	},
	{
		l: "fa",
		t: { Close: { v: ["بستن"] } }
	},
	{
		l: "fi",
		t: { Close: { v: ["Sulje"] } }
	},
	{
		l: "fr",
		t: { Close: { v: ["Fermer"] } }
	},
	{
		l: "ga",
		t: { Close: { v: ["Dún"] } }
	},
	{
		l: "gl",
		t: { Close: { v: ["Pechar"] } }
	},
	{
		l: "he",
		t: { Close: { v: ["סגירה"] } }
	},
	{
		l: "hr",
		t: { Close: { v: ["Zatvori"] } }
	},
	{
		l: "hu",
		t: { Close: { v: ["Bezárás"] } }
	},
	{
		l: "id",
		t: { Close: { v: ["Tutup"] } }
	},
	{
		l: "is",
		t: { Close: { v: ["Loka"] } }
	},
	{
		l: "it",
		t: { Close: { v: ["Chiudi"] } }
	},
	{
		l: "ja",
		t: { Close: { v: ["閉じる"] } }
	},
	{
		l: "ja-JP",
		t: { Close: { v: ["閉じる"] } }
	},
	{
		l: "ko",
		t: { Close: { v: ["닫기"] } }
	},
	{
		l: "lo",
		t: { Close: { v: ["ປິດ"] } }
	},
	{
		l: "lt-LT",
		t: { Close: { v: ["Užverti"] } }
	},
	{
		l: "lv",
		t: { Close: { v: ["Aizvērt"] } }
	},
	{
		l: "mk",
		t: { Close: { v: ["Затвори"] } }
	},
	{
		l: "mn",
		t: { Close: { v: ["Хаах"] } }
	},
	{
		l: "my",
		t: { Close: { v: ["ပိတ်ရန်"] } }
	},
	{
		l: "nb",
		t: { Close: { v: ["Lukk"] } }
	},
	{
		l: "nl",
		t: { Close: { v: ["Sluiten"] } }
	},
	{
		l: "oc",
		t: { Close: { v: ["Tampar"] } }
	},
	{
		l: "pl",
		t: { Close: { v: ["Zamknij"] } }
	},
	{
		l: "pt-BR",
		t: { Close: { v: ["Fechar"] } }
	},
	{
		l: "pt-PT",
		t: { Close: { v: ["Fechar"] } }
	},
	{
		l: "ro",
		t: { Close: { v: ["Închideți"] } }
	},
	{
		l: "ru",
		t: { Close: { v: ["Закрыть"] } }
	},
	{
		l: "sk",
		t: { Close: { v: ["Zavrieť"] } }
	},
	{
		l: "sl",
		t: { Close: { v: ["Zapri"] } }
	},
	{
		l: "sr",
		t: { Close: { v: ["Затвори"] } }
	},
	{
		l: "sv",
		t: { Close: { v: ["Stäng"] } }
	},
	{
		l: "tr",
		t: { Close: { v: ["Kapat"] } }
	},
	{
		l: "uk",
		t: { Close: { v: ["Закрити"] } }
	},
	{
		l: "uz",
		t: { Close: { v: ["Yopish"] } }
	},
	{
		l: "zh-CN",
		t: { Close: { v: ["关闭"] } }
	},
	{
		l: "zh-HK",
		t: { Close: { v: ["關閉"] } }
	},
	{
		l: "zh-TW",
		t: { Close: { v: ["關閉"] } }
	}
], cv = [
	{
		l: "ar",
		t: {
			"Close navigation": { v: ["إغلاق التصفح"] },
			"Open navigation": { v: ["فتح التنقُّل"] }
		}
	},
	{
		l: "ast",
		t: {
			"Close navigation": { v: ["Zarrar la navegación"] },
			"Open navigation": { v: ["Abrir la navegación"] }
		}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: {
			"Close navigation": { v: ["Tanca la navegació"] },
			"Open navigation": { v: ["Obre la navegació"] }
		}
	},
	{
		l: "cs",
		t: {
			"Close navigation": { v: ["Zavřít navigaci"] },
			"Open navigation": { v: ["Otevřít navigaci"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			"Close navigation": { v: ["Zavřít navigaci"] },
			"Open navigation": { v: ["Otevřít navigaci"] }
		}
	},
	{
		l: "da",
		t: {
			"Close navigation": { v: ["Luk navigation"] },
			"Open navigation": { v: ["Åben navigation"] }
		}
	},
	{
		l: "de",
		t: {
			"Close navigation": { v: ["Navigation schließen"] },
			"Open navigation": { v: ["Navigation öffnen"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"Close navigation": { v: ["Navigation schließen"] },
			"Open navigation": { v: ["Navigation öffnen"] }
		}
	},
	{
		l: "el",
		t: {
			"Close navigation": { v: ["Κλείσιμο πλοήγησης"] },
			"Open navigation": { v: ["Άνοιγμα πλοήγησης"] }
		}
	},
	{
		l: "en-GB",
		t: {
			"Close navigation": { v: ["Close navigation"] },
			"Open navigation": { v: ["Open navigation"] }
		}
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {
			"Close navigation": { v: ["Cerrar navegación"] },
			"Open navigation": { v: ["Abrir navegación"] }
		}
	},
	{
		l: "es-AR",
		t: {
			"Close navigation": { v: ["Cerrar navegación"] },
			"Open navigation": { v: ["Abrir navegación"] }
		}
	},
	{
		l: "es-EC",
		t: {
			"Close navigation": { v: ["Cerrar navegación"] },
			"Open navigation": { v: ["Abrir navegación"] }
		}
	},
	{
		l: "es-MX",
		t: {
			"Close navigation": { v: ["Cerrar navegación"] },
			"Open navigation": { v: ["Abrir navegación"] }
		}
	},
	{
		l: "et-EE",
		t: {
			"Close navigation": { v: ["Sulge navigatsioon"] },
			"Open navigation": { v: ["Ava liikumisvaade"] }
		}
	},
	{
		l: "eu",
		t: {
			"Close navigation": { v: ["Itxi nabigazioa"] },
			"Open navigation": { v: ["Ireki nabigazioa"] }
		}
	},
	{
		l: "fa",
		t: {
			"Close navigation": { v: ["بستن بخش ناوبری"] },
			"Open navigation": { v: ["باز کردن بخش ناوبری"] }
		}
	},
	{
		l: "fi",
		t: { "Close navigation": { v: ["Sulje navigaatio"] } }
	},
	{
		l: "fr",
		t: {
			"Close navigation": { v: ["Fermer la navigation"] },
			"Open navigation": { v: ["Ouvrir la navigation"] }
		}
	},
	{
		l: "ga",
		t: {
			"Close navigation": { v: ["Dún nascleanúint"] },
			"Open navigation": { v: ["Oscail nascleanúint"] }
		}
	},
	{
		l: "gl",
		t: {
			"Close navigation": { v: ["Pechar a navegación"] },
			"Open navigation": { v: ["Abrir a navegación"] }
		}
	},
	{
		l: "he",
		t: {
			"Close navigation": { v: ["סגירת הניווט"] },
			"Open navigation": { v: ["פתיחת ניווט"] }
		}
	},
	{
		l: "hr",
		t: {
			"Close navigation": { v: ["Zatvori navigaciju"] },
			"Open navigation": { v: ["Otvori navigaciju"] }
		}
	},
	{
		l: "hu",
		t: {
			"Close navigation": { v: ["Navigáció bezárása"] },
			"Open navigation": { v: ["Navigáció megnyitása"] }
		}
	},
	{
		l: "id",
		t: {
			"Close navigation": { v: ["Tutup navigasi"] },
			"Open navigation": { v: ["Buka navigasi"] }
		}
	},
	{
		l: "is",
		t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } }
	},
	{
		l: "it",
		t: {
			"Close navigation": { v: ["Chiudi la navigazione"] },
			"Open navigation": { v: ["Apri la navigazione"] }
		}
	},
	{
		l: "ja",
		t: {
			"Close navigation": { v: ["ナビゲーションを閉じる"] },
			"Open navigation": { v: ["ナビゲーションを開く"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			"Close navigation": { v: ["ナビゲーションを閉じる"] },
			"Open navigation": { v: ["ナビゲーションを開く"] }
		}
	},
	{
		l: "ko",
		t: {
			"Close navigation": { v: ["탐색 닫기"] },
			"Open navigation": { v: ["탐색 열기"] }
		}
	},
	{
		l: "lo",
		t: {
			"Close navigation": { v: ["ປິດການນຳທາງ"] },
			"Open navigation": { v: ["ເປີດການນຳທາງ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"Close navigation": { v: ["Užverti naršymą"] },
			"Open navigation": { v: ["Atverti naršymą"] }
		}
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: {
			"Close navigation": { v: ["Затвори навигација"] },
			"Open navigation": { v: ["Отвори навигација"] }
		}
	},
	{
		l: "mn",
		t: {
			"Close navigation": { v: ["Навигацийг хаах"] },
			"Open navigation": { v: ["Навигацийг нээх"] }
		}
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: {
			"Close navigation": { v: ["Lukk navigasjon"] },
			"Open navigation": { v: ["Åpne navigasjon"] }
		}
	},
	{
		l: "nl",
		t: {
			"Close navigation": { v: ["Navigatie sluiten"] },
			"Open navigation": { v: ["Navigatie openen"] }
		}
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: { "Close navigation": { v: ["Zamknij nawigację"] } }
	},
	{
		l: "pt-BR",
		t: {
			"Close navigation": { v: ["Fechar navegação"] },
			"Open navigation": { v: ["Abrir navegação"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			"Close navigation": { v: ["Fechar navegação"] },
			"Open navigation": { v: ["Abrir navegação"] }
		}
	},
	{
		l: "ro",
		t: {
			"Close navigation": { v: ["Închideți navigarea"] },
			"Open navigation": { v: ["Deschideți navigația"] }
		}
	},
	{
		l: "ru",
		t: {
			"Close navigation": { v: ["Закрыть навигацию"] },
			"Open navigation": { v: ["Открыть навигацию"] }
		}
	},
	{
		l: "sk",
		t: { "Close navigation": { v: ["Zavrieť navigáciu"] } }
	},
	{
		l: "sl",
		t: {
			"Close navigation": { v: ["Zapri krmarjenje"] },
			"Open navigation": { v: ["Odpri krmarjenje"] }
		}
	},
	{
		l: "sr",
		t: {
			"Close navigation": { v: ["Затвори навигацију"] },
			"Open navigation": { v: ["Отвори навигацију"] }
		}
	},
	{
		l: "sv",
		t: {
			"Close navigation": { v: ["Stäng navigering"] },
			"Open navigation": { v: ["Öppna navigering"] }
		}
	},
	{
		l: "tr",
		t: {
			"Close navigation": { v: ["Gezinmeyi kapat"] },
			"Open navigation": { v: ["Gezinmeyi aç"] }
		}
	},
	{
		l: "uk",
		t: {
			"Close navigation": { v: ["Закрити навігацію"] },
			"Open navigation": { v: ["Перейти до навігації"] }
		}
	},
	{
		l: "uz",
		t: {
			"Close navigation": { v: ["Navigatsiyani yopish"] },
			"Open navigation": { v: ["Navigatsiyani oching"] }
		}
	},
	{
		l: "zh-CN",
		t: { "Close navigation": { v: ["关闭导航"] } }
	},
	{
		l: "zh-HK",
		t: {
			"Close navigation": { v: ["關閉導航"] },
			"Open navigation": { v: ["開啟導航"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"Close navigation": { v: ["關閉導航"] },
			"Open navigation": { v: ["開啟導航"] }
		}
	}
], lv = [
	{
		l: "ar",
		t: {
			"Collapse menu": { v: ["طي القائمة"] },
			"Open menu": { v: ["إفتَح القائمة"] }
		}
	},
	{
		l: "ast",
		t: {
			"Collapse menu": { v: ["Recoyer el menú"] },
			"Open menu": { v: ["Abrir le menú"] }
		}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: {}
	},
	{
		l: "cs",
		t: {
			"Collapse menu": { v: ["Sbalit nabídku"] },
			"Open menu": { v: ["Otevřít nabídku"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			"Collapse menu": { v: ["Sbalit nabídku"] },
			"Open menu": { v: ["Otevřít nabídku"] }
		}
	},
	{
		l: "da",
		t: {
			"Collapse menu": { v: ["Skjul menuen"] },
			"Open menu": { v: ["Åben menu"] }
		}
	},
	{
		l: "de",
		t: {
			"Collapse menu": { v: ["Menü einklappen"] },
			"Open menu": { v: ["Menü öffnen"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"Collapse menu": { v: ["Menü einklappen"] },
			"Open menu": { v: ["Menü öffnen"] }
		}
	},
	{
		l: "el",
		t: {
			"Collapse menu": { v: ["Σύμπτυξη μενού"] },
			"Open menu": { v: ["Άνοιγμα μενού"] }
		}
	},
	{
		l: "en-GB",
		t: {
			"Collapse menu": { v: ["Collapse menu"] },
			"Open menu": { v: ["Open menu"] }
		}
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {
			"Collapse menu": { v: ["Ocultar menú"] },
			"Open menu": { v: ["Abrir menú"] }
		}
	},
	{
		l: "es-AR",
		t: {
			"Collapse menu": { v: ["Ocultar menú"] },
			"Open menu": { v: ["Abrir menú"] }
		}
	},
	{
		l: "es-EC",
		t: {
			"Collapse menu": { v: ["Ocultar menú"] },
			"Open menu": { v: ["Abrir menú"] }
		}
	},
	{
		l: "es-MX",
		t: {
			"Collapse menu": { v: ["Ocultar menú"] },
			"Open menu": { v: ["Abrir menú"] }
		}
	},
	{
		l: "et-EE",
		t: {
			"Collapse menu": { v: ["Ahenda menüü"] },
			"Open menu": { v: ["Ava menüü"] }
		}
	},
	{
		l: "eu",
		t: {
			"Collapse menu": { v: ["Tolestu menua"] },
			"Open menu": { v: ["Ireki menua"] }
		}
	},
	{
		l: "fa",
		t: {
			"Collapse menu": { v: ["بستن فهرست"] },
			"Open menu": { v: ["باز کردن فهرست"] }
		}
	},
	{
		l: "fi",
		t: {
			"Collapse menu": { v: ["Supista valikko"] },
			"Open menu": { v: ["Avaa valikko"] }
		}
	},
	{
		l: "fr",
		t: {
			"Collapse menu": { v: ["Réduire le menu"] },
			"Open menu": { v: ["Ouvrir le menu"] }
		}
	},
	{
		l: "ga",
		t: {
			"Collapse menu": { v: ["Roghchlár Laghdaigh"] },
			"Open menu": { v: ["Roghchlár a oscailt"] }
		}
	},
	{
		l: "gl",
		t: {
			"Collapse menu": { v: ["Contraer o menú"] },
			"Open menu": { v: ["Abrir o menú"] }
		}
	},
	{
		l: "he",
		t: {
			"Collapse menu": { v: ["צמצום התפריט"] },
			"Open menu": { v: ["פתיחת תפריט"] }
		}
	},
	{
		l: "hr",
		t: {
			"Collapse menu": { v: ["Sakrij izbornik"] },
			"Open menu": { v: ["Otvori izbornik"] }
		}
	},
	{
		l: "hu",
		t: {
			"Collapse menu": { v: ["Menü összecsukása"] },
			"Open menu": { v: ["Menü megnyitása"] }
		}
	},
	{
		l: "id",
		t: {
			"Collapse menu": { v: ["Ciutkan menu"] },
			"Open menu": { v: ["Buka menu"] }
		}
	},
	{
		l: "is",
		t: {
			"Collapse menu": { v: ["Fella valmynd saman"] },
			"Open menu": { v: ["Opna valmynd"] }
		}
	},
	{
		l: "it",
		t: {
			"Collapse menu": { v: ["Chiudi Menu"] },
			"Open menu": { v: ["Apri il menu"] }
		}
	},
	{
		l: "ja",
		t: {
			"Collapse menu": { v: ["メニューの折りたたみ"] },
			"Open menu": { v: ["メニューを開く"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			"Collapse menu": { v: ["メニューの折りたたみ"] },
			"Open menu": { v: ["メニューを開く"] }
		}
	},
	{
		l: "ko",
		t: {
			"Collapse menu": { v: ["메뉴 접기"] },
			"Open menu": { v: ["메뉴 열기"] }
		}
	},
	{
		l: "lo",
		t: {
			"Collapse menu": { v: ["ຫຍໍ້ເມນູ"] },
			"Open menu": { v: ["ເປີດເມນູ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"Collapse menu": { v: ["Suskleisti meniu"] },
			"Open menu": { v: ["Atverti meniu"] }
		}
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: {
			"Collapse menu": { v: ["Скриј мени"] },
			"Open menu": { v: ["Отвори мени"] }
		}
	},
	{
		l: "mn",
		t: {
			"Collapse menu": { v: ["Цэсийг хураах"] },
			"Open menu": { v: ["Цэсийг нээх"] }
		}
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: {
			"Collapse menu": { v: ["Skjul meny"] },
			"Open menu": { v: ["Åpne meny"] }
		}
	},
	{
		l: "nl",
		t: {
			"Collapse menu": { v: ["Menu inklappen"] },
			"Open menu": { v: ["Menu openen"] }
		}
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: {
			"Collapse menu": { v: ["Zwiń menu"] },
			"Open menu": { v: ["Otwórz menu"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			"Collapse menu": { v: ["Recolher menu"] },
			"Open menu": { v: ["Abrir menu"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			"Collapse menu": { v: ["Ocultar menu"] },
			"Open menu": { v: ["Abrir menu"] }
		}
	},
	{
		l: "ro",
		t: {
			"Collapse menu": { v: ["Restrânge meniul"] },
			"Open menu": { v: ["Deschide meniul"] }
		}
	},
	{
		l: "ru",
		t: {
			"Collapse menu": { v: ["Свернуть меню"] },
			"Open menu": { v: ["Открыть меню"] }
		}
	},
	{
		l: "sk",
		t: {
			"Collapse menu": { v: ["Zbaliť menu"] },
			"Open menu": { v: ["Otvoriť menu"] }
		}
	},
	{
		l: "sl",
		t: {}
	},
	{
		l: "sr",
		t: {
			"Collapse menu": { v: ["Сажми мени"] },
			"Open menu": { v: ["Отвори мени"] }
		}
	},
	{
		l: "sv",
		t: {
			"Collapse menu": { v: ["Dölj menyn"] },
			"Open menu": { v: ["Öppna menyn"] }
		}
	},
	{
		l: "tr",
		t: {
			"Collapse menu": { v: ["Menüyü daralt"] },
			"Open menu": { v: ["Menüyü aç"] }
		}
	},
	{
		l: "uk",
		t: {
			"Collapse menu": { v: ["Згорнути меню"] },
			"Open menu": { v: ["Відкрити меню"] }
		}
	},
	{
		l: "uz",
		t: {
			"Collapse menu": { v: ["Menyuni yig‘ish"] },
			"Open menu": { v: ["Menyuni oching"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			"Collapse menu": { v: ["收起菜单"] },
			"Open menu": { v: ["打开菜单"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			"Collapse menu": { v: ["折疊選單"] },
			"Open menu": { v: ["開啟選單"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"Collapse menu": { v: ["折疊選單"] },
			"Open menu": { v: ["開啟選單"] }
		}
	}
], uv = [
	{
		l: "ar",
		t: { "Edit item": { v: ["تعديل عنصر"] } }
	},
	{
		l: "ast",
		t: { "Edit item": { v: ["Editar l'elementu"] } }
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: { "Edit item": { v: ["Edita l'element"] } }
	},
	{
		l: "cs",
		t: { "Edit item": { v: ["Upravit položku"] } }
	},
	{
		l: "cs-CZ",
		t: { "Edit item": { v: ["Upravit položku"] } }
	},
	{
		l: "da",
		t: { "Edit item": { v: ["Rediger emne"] } }
	},
	{
		l: "de",
		t: { "Edit item": { v: ["Element bearbeiten"] } }
	},
	{
		l: "de-DE",
		t: { "Edit item": { v: ["Element bearbeiten"] } }
	},
	{
		l: "el",
		t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } }
	},
	{
		l: "en-GB",
		t: { "Edit item": { v: ["Edit item"] } }
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: { "Edit item": { v: ["Editar elemento"] } }
	},
	{
		l: "es-AR",
		t: { "Edit item": { v: ["Editar elemento"] } }
	},
	{
		l: "es-EC",
		t: { "Edit item": { v: ["Editar elemento"] } }
	},
	{
		l: "es-MX",
		t: { "Edit item": { v: ["Editar elemento"] } }
	},
	{
		l: "et-EE",
		t: { "Edit item": { v: ["Muuda objekti"] } }
	},
	{
		l: "eu",
		t: { "Edit item": { v: ["Editatu elementua"] } }
	},
	{
		l: "fa",
		t: { "Edit item": { v: ["ویرایش مورد"] } }
	},
	{
		l: "fi",
		t: { "Edit item": { v: ["Muokkaa kohdetta"] } }
	},
	{
		l: "fr",
		t: { "Edit item": { v: ["Éditer l'élément"] } }
	},
	{
		l: "ga",
		t: { "Edit item": { v: ["Cuir mír in eagar"] } }
	},
	{
		l: "gl",
		t: { "Edit item": { v: ["Editar o elemento"] } }
	},
	{
		l: "he",
		t: { "Edit item": { v: ["עריכת פריט"] } }
	},
	{
		l: "hr",
		t: { "Edit item": { v: ["Uredi stavku"] } }
	},
	{
		l: "hu",
		t: { "Edit item": { v: ["Elem szerkesztése"] } }
	},
	{
		l: "id",
		t: { "Edit item": { v: ["Edit item"] } }
	},
	{
		l: "is",
		t: { "Edit item": { v: ["Breyta atriði"] } }
	},
	{
		l: "it",
		t: { "Edit item": { v: ["Modifica l'elemento"] } }
	},
	{
		l: "ja",
		t: { "Edit item": { v: ["編集"] } }
	},
	{
		l: "ja-JP",
		t: { "Edit item": { v: ["編集"] } }
	},
	{
		l: "ko",
		t: { "Edit item": { v: ["항목 수정"] } }
	},
	{
		l: "lo",
		t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } }
	},
	{
		l: "lt-LT",
		t: { "Edit item": { v: ["Taisyti elementą"] } }
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: { "Edit item": { v: ["Уреди"] } }
	},
	{
		l: "mn",
		t: { "Edit item": { v: ["Зүйлийг засварлах"] } }
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: { "Edit item": { v: ["Rediger"] } }
	},
	{
		l: "nl",
		t: { "Edit item": { v: ["Item bewerken"] } }
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: { "Edit item": { v: ["Edytuj element"] } }
	},
	{
		l: "pt-BR",
		t: { "Edit item": { v: ["Editar item"] } }
	},
	{
		l: "pt-PT",
		t: { "Edit item": { v: ["Editar item"] } }
	},
	{
		l: "ro",
		t: { "Edit item": { v: ["Editați elementul"] } }
	},
	{
		l: "ru",
		t: { "Edit item": { v: ["Изменить элемент"] } }
	},
	{
		l: "sk",
		t: { "Edit item": { v: ["Upraviť položku"] } }
	},
	{
		l: "sl",
		t: { "Edit item": { v: ["Uredi predmet"] } }
	},
	{
		l: "sr",
		t: { "Edit item": { v: ["Уреди ставку"] } }
	},
	{
		l: "sv",
		t: { "Edit item": { v: ["Redigera objekt"] } }
	},
	{
		l: "tr",
		t: { "Edit item": { v: ["Ögeyi düzenle"] } }
	},
	{
		l: "uk",
		t: { "Edit item": { v: ["Редагувати елемент"] } }
	},
	{
		l: "uz",
		t: { "Edit item": { v: ["Elementni tahrirlash"] } }
	},
	{
		l: "zh-CN",
		t: { "Edit item": { v: ["编辑项目"] } }
	},
	{
		l: "zh-HK",
		t: { "Edit item": { v: ["編輯項目"] } }
	},
	{
		l: "zh-TW",
		t: { "Edit item": { v: ["編輯項目"] } }
	}
], dv = [
	{
		l: "ar",
		t: { "Go back to the list": { v: ["عودة إلى القائمة"] } }
	},
	{
		l: "ast",
		t: { "Go back to the list": { v: ["Volver a la llista"] } }
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: { "Go back to the list": { v: ["Torna a la llista"] } }
	},
	{
		l: "cs",
		t: { "Go back to the list": { v: ["Jít zpět na seznam"] } }
	},
	{
		l: "cs-CZ",
		t: { "Go back to the list": { v: ["Jít zpět na seznam"] } }
	},
	{
		l: "da",
		t: { "Go back to the list": { v: ["Tilbage til listen"] } }
	},
	{
		l: "de",
		t: { "Go back to the list": { v: ["Zurück zur Liste"] } }
	},
	{
		l: "de-DE",
		t: { "Go back to the list": { v: ["Zurück zur Liste"] } }
	},
	{
		l: "el",
		t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } }
	},
	{
		l: "en-GB",
		t: { "Go back to the list": { v: ["Go back to the list"] } }
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: { "Go back to the list": { v: ["Volver a la lista"] } }
	},
	{
		l: "es-AR",
		t: { "Go back to the list": { v: ["Volver a la lista"] } }
	},
	{
		l: "es-EC",
		t: { "Go back to the list": { v: ["Volver a la lista"] } }
	},
	{
		l: "es-MX",
		t: { "Go back to the list": { v: ["Regresar a la lista"] } }
	},
	{
		l: "et-EE",
		t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } }
	},
	{
		l: "eu",
		t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } }
	},
	{
		l: "fa",
		t: { "Go back to the list": { v: ["برگشت به لیست"] } }
	},
	{
		l: "fi",
		t: { "Go back to the list": { v: ["Takaisin listaan"] } }
	},
	{
		l: "fr",
		t: { "Go back to the list": { v: ["Retourner à la liste"] } }
	},
	{
		l: "ga",
		t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } }
	},
	{
		l: "gl",
		t: { "Go back to the list": { v: ["Volver á lista"] } }
	},
	{
		l: "he",
		t: { "Go back to the list": { v: ["חזרה לרשימה"] } }
	},
	{
		l: "hr",
		t: { "Go back to the list": { v: ["Vrati se na popis"] } }
	},
	{
		l: "hu",
		t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } }
	},
	{
		l: "id",
		t: { "Go back to the list": { v: ["Kembali ke daftar"] } }
	},
	{
		l: "is",
		t: { "Go back to the list": { v: ["Fara til baka í listann"] } }
	},
	{
		l: "it",
		t: { "Go back to the list": { v: ["Torna all'elenco"] } }
	},
	{
		l: "ja",
		t: { "Go back to the list": { v: ["リストに戻る"] } }
	},
	{
		l: "ja-JP",
		t: { "Go back to the list": { v: ["リストに戻る"] } }
	},
	{
		l: "ko",
		t: { "Go back to the list": { v: ["목록으로 돌아가기"] } }
	},
	{
		l: "lo",
		t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } }
	},
	{
		l: "lt-LT",
		t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } }
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: { "Go back to the list": { v: ["Врати се на листата"] } }
	},
	{
		l: "mn",
		t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } }
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: { "Go back to the list": { v: ["Gå tilbake til listen"] } }
	},
	{
		l: "nl",
		t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } }
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: { "Go back to the list": { v: ["Powrót do listy"] } }
	},
	{
		l: "pt-BR",
		t: { "Go back to the list": { v: ["Voltar para a lista"] } }
	},
	{
		l: "pt-PT",
		t: { "Go back to the list": { v: ["Voltar para a lista"] } }
	},
	{
		l: "ro",
		t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } }
	},
	{
		l: "ru",
		t: { "Go back to the list": { v: ["Вернуться к списку"] } }
	},
	{
		l: "sk",
		t: { "Go back to the list": { v: ["Späť na zoznam"] } }
	},
	{
		l: "sl",
		t: { "Go back to the list": { v: ["Vrni se na seznam"] } }
	},
	{
		l: "sr",
		t: { "Go back to the list": { v: ["Назад на листу"] } }
	},
	{
		l: "sv",
		t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } }
	},
	{
		l: "tr",
		t: { "Go back to the list": { v: ["Listeye dön"] } }
	},
	{
		l: "uk",
		t: { "Go back to the list": { v: ["Повернутися до списку"] } }
	},
	{
		l: "uz",
		t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } }
	},
	{
		l: "zh-CN",
		t: { "Go back to the list": { v: ["返回至列表"] } }
	},
	{
		l: "zh-HK",
		t: { "Go back to the list": { v: ["返回清單"] } }
	},
	{
		l: "zh-TW",
		t: { "Go back to the list": { v: ["回到清單"] } }
	}
], fv = [
	{
		l: "ar",
		t: {
			"Hide password": { v: ["إخفاء كلمة المرور"] },
			"Password is secure": { v: ["كلمة المرور آمنة"] },
			"Show password": { v: ["أظهِر كلمة المرور"] }
		}
	},
	{
		l: "ast",
		t: {
			"Hide password": { v: ["Anubrir la contraseña"] },
			"Password is secure": { v: ["La contraseña ye segura"] },
			"Show password": { v: ["Amosar la contraseña"] }
		}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: {
			"Hide password": { v: ["Amagar contrasenya"] },
			"Password is secure": { v: ["Contrasenya segura<br>"] },
			"Show password": { v: ["Mostrar contrasenya"] }
		}
	},
	{
		l: "cs",
		t: {
			"Hide password": { v: ["Skrýt heslo"] },
			"Password is secure": { v: ["Heslo je bezpečné"] },
			"Show password": { v: ["Zobrazit heslo"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			"Hide password": { v: ["Skrýt heslo"] },
			"Password is secure": { v: ["Heslo je bezpečné"] },
			"Show password": { v: ["Zobrazit heslo"] }
		}
	},
	{
		l: "da",
		t: {
			"Hide password": { v: ["Skjul kodeord"] },
			"Password is secure": { v: ["Kodeordet er sikkert"] },
			"Show password": { v: ["Vis kodeord"] }
		}
	},
	{
		l: "de",
		t: {
			"Hide password": { v: ["Passwort verbergen"] },
			"Password is secure": { v: ["Passwort ist sicher"] },
			"Show password": { v: ["Passwort anzeigen"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"Hide password": { v: ["Passwort verbergen"] },
			"Password is secure": { v: ["Passwort ist sicher"] },
			"Show password": { v: ["Passwort anzeigen"] }
		}
	},
	{
		l: "el",
		t: {
			"Hide password": { v: ["Απόκρυψη συνθηματικού"] },
			"Password is secure": { v: ["Το συνθηματικό είναι ασφαλές"] },
			"Show password": { v: ["Εμφάνιση κωδικού πρόσβασης"] }
		}
	},
	{
		l: "en-GB",
		t: {
			"Hide password": { v: ["Hide password"] },
			"Password is secure": { v: ["Password is secure"] },
			"Show password": { v: ["Show password"] }
		}
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {
			"Hide password": { v: ["Ocultar contraseña"] },
			"Password is secure": { v: ["La contraseña es segura"] },
			"Show password": { v: ["Mostrar contraseña"] }
		}
	},
	{
		l: "es-AR",
		t: {
			"Hide password": { v: ["Ocultar contraseña"] },
			"Password is secure": { v: ["La contraseña es segura"] },
			"Show password": { v: ["Mostrar contraseña"] }
		}
	},
	{
		l: "es-EC",
		t: {
			"Hide password": { v: ["Ocultar contraseña"] },
			"Password is secure": { v: ["La contraseña es segura"] },
			"Show password": { v: ["Mostrar contraseña"] }
		}
	},
	{
		l: "es-MX",
		t: {
			"Hide password": { v: ["Ocultar contraseña"] },
			"Password is secure": { v: ["La contraseña es segura"] },
			"Show password": { v: ["Mostrar contraseña"] }
		}
	},
	{
		l: "et-EE",
		t: {
			"Hide password": { v: ["Peida salasõna"] },
			"Password is secure": { v: ["Salasõna on turvaline"] },
			"Show password": { v: ["Näita salasõna"] }
		}
	},
	{
		l: "eu",
		t: {
			"Hide password": { v: ["Ezkutatu pasahitza"] },
			"Password is secure": { v: ["Pasahitza segurua da"] },
			"Show password": { v: ["Erakutsi pasahitza"] }
		}
	},
	{
		l: "fa",
		t: {
			"Hide password": { v: ["پنهان کردن رمز عبور"] },
			"Password is secure": { v: ["گذرواژه امن است"] },
			"Show password": { v: ["نمایش گذرواژه"] }
		}
	},
	{
		l: "fi",
		t: {
			"Hide password": { v: ["Piilota salasana"] },
			"Password is secure": { v: ["Salasana on turvallinen"] },
			"Show password": { v: ["Näytä salasana"] }
		}
	},
	{
		l: "fr",
		t: {
			"Hide password": { v: ["Cacher le mot de passe"] },
			"Password is secure": { v: ["Le mot de passe est sécurisé"] },
			"Show password": { v: ["Afficher le mot de passe"] }
		}
	},
	{
		l: "ga",
		t: {
			"Hide password": { v: ["Folaigh pasfhocal"] },
			"Password is secure": { v: ["Tá pasfhocal slán"] },
			"Show password": { v: ["Taispeáin pasfhocal"] }
		}
	},
	{
		l: "gl",
		t: {
			"Hide password": { v: ["Agochar o contrasinal"] },
			"Password is secure": { v: ["O contrasinal é seguro"] },
			"Show password": { v: ["Amosar o contrasinal"] }
		}
	},
	{
		l: "he",
		t: {
			"Hide password": { v: ["הסתרת סיסמה"] },
			"Password is secure": { v: ["הסיסמה מאובטחת"] },
			"Show password": { v: ["הצגת סיסמה"] }
		}
	},
	{
		l: "hr",
		t: {
			"Hide password": { v: ["Sakrij lozinku"] },
			"Password is secure": { v: ["Lozinka je zaštićena"] },
			"Show password": { v: ["Prikaži lozinku"] }
		}
	},
	{
		l: "hu",
		t: {
			"Hide password": { v: ["Jelszó elrejtése"] },
			"Password is secure": { v: ["A jelszó biztonságos"] },
			"Show password": { v: ["Jelszó megjelenítése"] }
		}
	},
	{
		l: "id",
		t: {
			"Hide password": { v: ["Sembunyikan sandi"] },
			"Password is secure": { v: ["Kata sandi sudah aman"] },
			"Show password": { v: ["Tampilkan sandi"] }
		}
	},
	{
		l: "is",
		t: {
			"Hide password": { v: ["Fela lykilorð"] },
			"Password is secure": { v: ["Lykilorðið er öruggt"] },
			"Show password": { v: ["Birta lykilorð"] }
		}
	},
	{
		l: "it",
		t: {
			"Hide password": { v: ["Nascondi la password"] },
			"Password is secure": { v: ["La password è sicura"] },
			"Show password": { v: ["Mostra la password"] }
		}
	},
	{
		l: "ja",
		t: {
			"Hide password": { v: ["パスワードを非表示"] },
			"Password is secure": { v: ["パスワードは保護されています"] },
			"Show password": { v: ["パスワードを表示"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			"Hide password": { v: ["パスワードを非表示"] },
			"Password is secure": { v: ["パスワードは保護されています"] },
			"Show password": { v: ["パスワードを表示"] }
		}
	},
	{
		l: "ko",
		t: {
			"Hide password": { v: ["암호 숨기기"] },
			"Password is secure": { v: ["암호가 안전합니다."] },
			"Show password": { v: ["암호 표시"] }
		}
	},
	{
		l: "lo",
		t: {
			"Hide password": { v: ["ເຊື່ອງລະຫັດຜ່ານ"] },
			"Password is secure": { v: ["ລະຫັດຜ່ານປອດໄພ"] },
			"Show password": { v: ["ສະແດງລະຫັດຜ່ານ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"Hide password": { v: ["Slėpti slaptažodį"] },
			"Password is secure": { v: ["Slaptažodis yra saugus"] },
			"Show password": { v: ["Rodyti slaptažodį"] }
		}
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: {
			"Hide password": { v: ["Сокриј лозинка"] },
			"Password is secure": { v: ["Лозинката е безбедна"] },
			"Show password": { v: ["Прикажи лозинка"] }
		}
	},
	{
		l: "mn",
		t: {
			"Hide password": { v: ["Нууц үгийг нуух"] },
			"Password is secure": { v: ["Нууц үг найдвартай байна"] },
			"Show password": { v: ["Нууц үгийг харуулах"] }
		}
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: {
			"Hide password": { v: ["Skjul passord"] },
			"Password is secure": { v: ["Passordet er sikkert"] },
			"Show password": { v: ["Vis passord"] }
		}
	},
	{
		l: "nl",
		t: {
			"Hide password": { v: ["Wachtwoord verbergen"] },
			"Password is secure": { v: ["Wachtwoord is veilig"] },
			"Show password": { v: ["Wachtwoord weergeven"] }
		}
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: {
			"Hide password": { v: ["Ukryj hasło"] },
			"Password is secure": { v: ["Hasło jest bezpieczne"] },
			"Show password": { v: ["Pokaż hasło"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			"Hide password": { v: ["Ocultar senha"] },
			"Password is secure": { v: ["A senha é segura"] },
			"Show password": { v: ["Mostrar senha"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			"Hide password": { v: ["Ocultar palavra-passe"] },
			"Password is secure": { v: ["A palavra-passe é segura"] },
			"Show password": { v: ["Mostrar palavra-passe"] }
		}
	},
	{
		l: "ro",
		t: {
			"Hide password": { v: ["Ascunde parola"] },
			"Password is secure": { v: ["Parola este sigură"] },
			"Show password": { v: ["Arată parola"] }
		}
	},
	{
		l: "ru",
		t: {
			"Hide password": { v: ["Скрыть пароль"] },
			"Password is secure": { v: ["Пароль надежный"] },
			"Show password": { v: ["Показать пароль"] }
		}
	},
	{
		l: "sk",
		t: {
			"Hide password": { v: ["Skryť heslo"] },
			"Password is secure": { v: ["Heslo je bezpečné"] },
			"Show password": { v: ["Zobraziť heslo"] }
		}
	},
	{
		l: "sl",
		t: {
			"Hide password": { v: ["Skrij geslo"] },
			"Password is secure": { v: ["Geslo je varno"] },
			"Show password": { v: ["Pokaži geslo"] }
		}
	},
	{
		l: "sr",
		t: {
			"Hide password": { v: ["Сакриј лозинку"] },
			"Password is secure": { v: ["Лозинка је безбедна"] },
			"Show password": { v: ["Прикажи лозинку"] }
		}
	},
	{
		l: "sv",
		t: {
			"Hide password": { v: ["Göm lösenordet"] },
			"Password is secure": { v: ["Lössenordet är säkert"] },
			"Show password": { v: ["Visa lösenordet"] }
		}
	},
	{
		l: "tr",
		t: {
			"Hide password": { v: ["Parolayı gizle"] },
			"Password is secure": { v: ["Parola güvenli"] },
			"Show password": { v: ["Parolayı görüntüle"] }
		}
	},
	{
		l: "uk",
		t: {
			"Hide password": { v: ["Приховати пароль"] },
			"Password is secure": { v: ["Пароль безпечний"] },
			"Show password": { v: ["Показати пароль"] }
		}
	},
	{
		l: "uz",
		t: {
			"Hide password": { v: ["Parolni yashirish"] },
			"Password is secure": { v: ["Parol xavfsiz"] },
			"Show password": { v: ["Parolni ko'rsatish"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			"Hide password": { v: ["隐藏密码"] },
			"Password is secure": { v: ["密码安全"] },
			"Show password": { v: ["显示密码"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			"Hide password": { v: ["隱藏密碼"] },
			"Password is secure": { v: ["密碼是安全的"] },
			"Show password": { v: ["顯示密碼"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"Hide password": { v: ["隱藏密碼"] },
			"Password is secure": { v: ["密碼安全"] },
			"Show password": { v: ["顯示密碼"] }
		}
	}
], pv = [
	{
		l: "ar",
		t: {
			"Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] },
			"Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] },
			"Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] }
		}
	},
	{
		l: "ast",
		t: {
			"Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] },
			"Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] },
			"Skip to main content": { v: ["Dir al conteníu principal"] }
		}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: {}
	},
	{
		l: "cs",
		t: {
			"Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] },
			"Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] },
			"Skip to main content": { v: ["Přeskočit na hlavní obsah"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			"Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] },
			"Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] },
			"Skip to main content": { v: ["Přeskočit na hlavní obsah"] }
		}
	},
	{
		l: "da",
		t: {
			"Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] },
			"Skip to app navigation": { v: ["Spring til app navigation"] },
			"Skip to main content": { v: ["Spring til hovedindhold"] }
		}
	},
	{
		l: "de",
		t: {
			"Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] },
			"Skip to app navigation": { v: ["Zur App-Navigation springen"] },
			"Skip to main content": { v: ["Zum Hauptinhalt springen"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] },
			"Skip to app navigation": { v: ["Zur App-Navigation springen"] },
			"Skip to main content": { v: ["Zum Hauptinhalt springen"] }
		}
	},
	{
		l: "el",
		t: {
			"Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] },
			"Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] },
			"Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] }
		}
	},
	{
		l: "en-GB",
		t: {
			"Keyboard navigation help": { v: ["Keyboard navigation help"] },
			"Skip to app navigation": { v: ["Skip to app navigation"] },
			"Skip to main content": { v: ["Skip to main content"] }
		}
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {
			"Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] },
			"Skip to app navigation": { v: ["Saltar a la navegación de apps"] },
			"Skip to main content": { v: ["Saltar al contenido principal"] }
		}
	},
	{
		l: "es-AR",
		t: {
			"Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] },
			"Skip to app navigation": { v: ["Saltar a la navegación de app"] },
			"Skip to main content": { v: ["Saltar al contenido principal"] }
		}
	},
	{
		l: "es-EC",
		t: {}
	},
	{
		l: "es-MX",
		t: {
			"Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] },
			"Skip to app navigation": { v: ["Saltar a la navegación de app"] },
			"Skip to main content": { v: ["Saltar al contenido principal"] }
		}
	},
	{
		l: "et-EE",
		t: {
			"Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] },
			"Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] },
			"Skip to main content": { v: ["Suundu põhisisu juurde"] }
		}
	},
	{
		l: "eu",
		t: {}
	},
	{
		l: "fa",
		t: {
			"Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] },
			"Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] },
			"Skip to main content": { v: ["رفتن به محتوای اصلی"] }
		}
	},
	{
		l: "fi",
		t: {
			"Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] },
			"Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] },
			"Skip to main content": { v: ["Siirry pääsisältöön"] }
		}
	},
	{
		l: "fr",
		t: {
			"Keyboard navigation help": { v: ["Aide à la navigation du clavier"] },
			"Skip to app navigation": { v: ["Passer à l'app navigation"] },
			"Skip to main content": { v: ["Passer au contenu principal"] }
		}
	},
	{
		l: "ga",
		t: {
			"Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] },
			"Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] },
			"Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] }
		}
	},
	{
		l: "gl",
		t: {
			"Keyboard navigation help": { v: ["Axuda á navegación co teclado"] },
			"Skip to app navigation": { v: ["Ir á navegación da aplicación"] },
			"Skip to main content": { v: ["Ir ao contido principal"] }
		}
	},
	{
		l: "he",
		t: {}
	},
	{
		l: "hr",
		t: {
			"Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] },
			"Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] },
			"Skip to main content": { v: ["Preskoči na glavni sadržaj"] }
		}
	},
	{
		l: "hu",
		t: {
			"Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] },
			"Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] },
			"Skip to main content": { v: ["Ugrás a fő tartalomhoz"] }
		}
	},
	{
		l: "id",
		t: {
			"Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] },
			"Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] },
			"Skip to main content": { v: ["Lewati ke konten utama"] }
		}
	},
	{
		l: "is",
		t: {
			"Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] },
			"Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] },
			"Skip to main content": { v: ["Sleppa og fara í meginefni"] }
		}
	},
	{
		l: "it",
		t: {}
	},
	{
		l: "ja",
		t: {
			"Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] },
			"Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] },
			"Skip to main content": { v: ["メインコンテンツへ移動"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			"Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] },
			"Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] },
			"Skip to main content": { v: ["メインコンテンツへ移動"] }
		}
	},
	{
		l: "ko",
		t: {
			"Keyboard navigation help": { v: ["키보드 탐색 도움말"] },
			"Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] },
			"Skip to main content": { v: ["본 내용으로 건너뛰기"] }
		}
	},
	{
		l: "lo",
		t: {
			"Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] },
			"Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] },
			"Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] },
			"Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] },
			"Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] }
		}
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: {
			"Keyboard navigation help": { v: ["Навигација со тастатура"] },
			"Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] },
			"Skip to main content": { v: ["Прескокни на главна содржина"] }
		}
	},
	{
		l: "mn",
		t: {
			"Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] },
			"Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] },
			"Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] }
		}
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: {
			"Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] },
			"Skip to app navigation": { v: ["Hopp til appnavigering"] },
			"Skip to main content": { v: ["Hopp til hovedinnhold"] }
		}
	},
	{
		l: "nl",
		t: {
			"Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] },
			"Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] },
			"Skip to main content": { v: ["Naar hoofdinhoud gaan"] }
		}
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: {
			"Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] },
			"Skip to app navigation": { v: ["Przewiń do nawigacji"] },
			"Skip to main content": { v: ["Przewiń do głównych treści"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			"Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] },
			"Skip to app navigation": { v: ["Ir para navegação de aplicativo"] },
			"Skip to main content": { v: ["Ir para conteúdo principal"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			"Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] },
			"Skip to app navigation": { v: ["Saltar para navegação da app"] },
			"Skip to main content": { v: ["Saltar para conteúdo principal"] }
		}
	},
	{
		l: "ro",
		t: {}
	},
	{
		l: "ru",
		t: {
			"Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] },
			"Skip to app navigation": { v: ["Перейти к навигации по приложению"] },
			"Skip to main content": { v: ["Перейти к основному содержанию"] }
		}
	},
	{
		l: "sk",
		t: {
			"Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] },
			"Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] },
			"Skip to main content": { v: ["Preskočiť na hlavný obsah"] }
		}
	},
	{
		l: "sl",
		t: {}
	},
	{
		l: "sr",
		t: {
			"Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] },
			"Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] },
			"Skip to main content": { v: ["Прескочи на главни садржај"] }
		}
	},
	{
		l: "sv",
		t: {
			"Keyboard navigation help": { v: ["Hjälp med tangentbordsnavigering"] },
			"Skip to app navigation": { v: ["Hoppa till appnavigering"] },
			"Skip to main content": { v: ["Hoppa till huvudinnehåll"] }
		}
	},
	{
		l: "tr",
		t: {
			"Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] },
			"Skip to app navigation": { v: ["Uygulama gezinmesine git"] },
			"Skip to main content": { v: ["Ana içeriğe git"] }
		}
	},
	{
		l: "uk",
		t: {
			"Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] },
			"Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] },
			"Skip to main content": { v: ["Перейти одразу до головного вмісту"] }
		}
	},
	{
		l: "uz",
		t: {
			"Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] },
			"Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] },
			"Skip to main content": { v: ["Asosiy tarkibga o'tish"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			"Keyboard navigation help": { v: ["键盘导航栏帮助"] },
			"Skip to app navigation": { v: ["跳转至应用程序导航页"] },
			"Skip to main content": { v: ["跳转至主要内容"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			"Keyboard navigation help": { v: ["鍵盤導航幫助"] },
			"Skip to app navigation": { v: ["跳至應用程式導航"] },
			"Skip to main content": { v: ["跳至主要內容"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"Keyboard navigation help": { v: ["鍵盤導航說明"] },
			"Skip to app navigation": { v: ["略過應用程式導覽"] },
			"Skip to main content": { v: ["跳至主要內容"] }
		}
	}
], mv = [
	{
		l: "ar",
		t: { "Loading\xA0…": { v: ["التحميل جارٍ ..."] } }
	},
	{
		l: "ast",
		t: {}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: {}
	},
	{
		l: "cs",
		t: { "Loading\xA0…": { v: ["Načítání\xA0…"] } }
	},
	{
		l: "cs-CZ",
		t: {}
	},
	{
		l: "da",
		t: { "Loading\xA0…": { v: ["Indlæser ..."] } }
	},
	{
		l: "de",
		t: { "Loading\xA0…": { v: ["Wird geladen\xA0…"] } }
	},
	{
		l: "de-DE",
		t: { "Loading\xA0…": { v: ["Wird geladen\xA0…"] } }
	},
	{
		l: "el",
		t: { "Loading\xA0…": { v: ["Φόρτωση \xA0…"] } }
	},
	{
		l: "en-GB",
		t: { "Loading\xA0…": { v: ["Loading\xA0…"] } }
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {}
	},
	{
		l: "es-AR",
		t: {}
	},
	{
		l: "es-EC",
		t: {}
	},
	{
		l: "es-MX",
		t: {}
	},
	{
		l: "et-EE",
		t: { "Loading\xA0…": { v: ["Laadin…"] } }
	},
	{
		l: "eu",
		t: {}
	},
	{
		l: "fa",
		t: { "Loading\xA0…": { v: ["در حال بارگذاری ..."] } }
	},
	{
		l: "fi",
		t: { "Loading\xA0…": { v: ["Ladataan ..."] } }
	},
	{
		l: "fr",
		t: { "Loading\xA0…": { v: ["Chargement..."] } }
	},
	{
		l: "ga",
		t: { "Loading\xA0…": { v: ["Ag lódáil\xA0…"] } }
	},
	{
		l: "gl",
		t: { "Loading\xA0…": { v: ["Cargando…"] } }
	},
	{
		l: "he",
		t: {}
	},
	{
		l: "hr",
		t: { "Loading\xA0…": { v: ["Učitavanje\xA0…"] } }
	},
	{
		l: "hu",
		t: { "Loading\xA0…": { v: ["Betöltés…"] } }
	},
	{
		l: "id",
		t: { "Loading\xA0…": { v: ["Memuat\xA0…"] } }
	},
	{
		l: "is",
		t: { "Loading\xA0…": { v: ["Hleð inn\xA0…"] } }
	},
	{
		l: "it",
		t: {}
	},
	{
		l: "ja",
		t: { "Loading\xA0…": { v: ["読み込み中 …"] } }
	},
	{
		l: "ja-JP",
		t: {}
	},
	{
		l: "ko",
		t: { "Loading\xA0…": { v: ["로딩 중 ..."] } }
	},
	{
		l: "lo",
		t: { "Loading\xA0…": { v: ["ກຳລັງໂຫຼດ…"] } }
	},
	{
		l: "lt-LT",
		t: { "Loading\xA0…": { v: ["Įkeliama\xA0…"] } }
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: { "Loading\xA0…": { v: ["Вчитување\xA0…"] } }
	},
	{
		l: "mn",
		t: { "Loading\xA0…": { v: ["Ачаалж байна …"] } }
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: { "Loading\xA0…": { v: ["Laster inn..."] } }
	},
	{
		l: "nl",
		t: { "Loading\xA0…": { v: ["Laden\xA0…"] } }
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: { "Loading\xA0…": { v: ["Wczytywanie…"] } }
	},
	{
		l: "pt-BR",
		t: { "Loading\xA0…": { v: ["Carregando\xA0…"] } }
	},
	{
		l: "pt-PT",
		t: { "Loading\xA0…": { v: ["A carregar..."] } }
	},
	{
		l: "ro",
		t: {}
	},
	{
		l: "ru",
		t: { "Loading\xA0…": { v: ["Загрузка\xA0…"] } }
	},
	{
		l: "sk",
		t: { "Loading\xA0…": { v: ["Nahrávam ..."] } }
	},
	{
		l: "sl",
		t: {}
	},
	{
		l: "sr",
		t: { "Loading\xA0…": { v: ["Учитава се…"] } }
	},
	{
		l: "sv",
		t: { "Loading\xA0…": { v: ["Laddar\xA0…"] } }
	},
	{
		l: "tr",
		t: { "Loading\xA0…": { v: ["Yükleniyor…"] } }
	},
	{
		l: "uk",
		t: { "Loading\xA0…": { v: ["Завантаження\xA0…"] } }
	},
	{
		l: "uz",
		t: { "Loading\xA0…": { v: ["Yuklanmoqda..."] } }
	},
	{
		l: "zh-CN",
		t: { "Loading\xA0…": { v: ["加载中..."] } }
	},
	{
		l: "zh-HK",
		t: { "Loading\xA0…": { v: ["加載中\xA0…"] } }
	},
	{
		l: "zh-TW",
		t: { "Loading\xA0…": { v: ["載入中......"] } }
	}
], hv = [
	{
		l: "ar",
		t: {
			Next: { v: ["التالي"] },
			"Pause slideshow": { v: ["تجميد عرض الشرائح"] },
			Previous: { v: ["السابق"] },
			"Start slideshow": { v: ["إبدإ العرض"] }
		}
	},
	{
		l: "ast",
		t: {
			Next: { v: ["Siguiente"] },
			"Pause slideshow": { v: ["Posar la presentación de diapositives"] },
			Previous: { v: ["Anterior"] },
			"Start slideshow": { v: ["Aniciar la presentación de diapositives"] }
		}
	},
	{
		l: "br",
		t: {
			Next: { v: ["Da heul"] },
			"Pause slideshow": { v: ["Arsav an diaporama"] },
			Previous: { v: ["A-raok"] },
			"Start slideshow": { v: ["Kregiñ an diaporama"] }
		}
	},
	{
		l: "ca",
		t: {
			Next: { v: ["Següent"] },
			"Pause slideshow": { v: ["Atura la presentació"] },
			Previous: { v: ["Anterior"] },
			"Start slideshow": { v: ["Inicia la presentació"] }
		}
	},
	{
		l: "cs",
		t: {
			Next: { v: ["Následující"] },
			"Pause slideshow": { v: ["Pozastavit prezentaci"] },
			Previous: { v: ["Předchozí"] },
			"Start slideshow": { v: ["Spustit prezentaci"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			Next: { v: ["Následující"] },
			"Pause slideshow": { v: ["Pozastavit prezentaci"] },
			Previous: { v: ["Předchozí"] },
			"Start slideshow": { v: ["Spustit prezentaci"] }
		}
	},
	{
		l: "da",
		t: {
			Next: { v: ["Videre"] },
			"Pause slideshow": { v: ["Suspender fremvisning"] },
			Previous: { v: ["Forrige"] },
			"Start slideshow": { v: ["Start fremvisning"] }
		}
	},
	{
		l: "de",
		t: {
			Next: { v: ["Weiter"] },
			"Pause slideshow": { v: ["Diashow pausieren"] },
			Previous: { v: ["Vorherige"] },
			"Start slideshow": { v: ["Diashow starten"] }
		}
	},
	{
		l: "de-DE",
		t: {
			Next: { v: ["Weiter"] },
			"Pause slideshow": { v: ["Diashow pausieren"] },
			Previous: { v: ["Vorherige"] },
			"Start slideshow": { v: ["Diashow starten"] }
		}
	},
	{
		l: "el",
		t: {
			Next: { v: ["Επόμενο"] },
			"Pause slideshow": { v: ["Παύση προβολής διαφανειών"] },
			Previous: { v: ["Προηγούμενο"] },
			"Start slideshow": { v: ["Έναρξη προβολής διαφανειών"] }
		}
	},
	{
		l: "en-GB",
		t: {
			Next: { v: ["Next"] },
			"Pause slideshow": { v: ["Pause slideshow"] },
			Previous: { v: ["Previous"] },
			"Start slideshow": { v: ["Start slideshow"] }
		}
	},
	{
		l: "eo",
		t: {
			Next: { v: ["Sekva"] },
			"Pause slideshow": { v: ["Payzi bildprezenton"] },
			Previous: { v: ["Antaŭa"] },
			"Start slideshow": { v: ["Komenci bildprezenton"] }
		}
	},
	{
		l: "es",
		t: {
			Next: { v: ["Siguiente"] },
			"Pause slideshow": { v: ["Pausar la presentación "] },
			Previous: { v: ["Anterior"] },
			"Start slideshow": { v: ["Iniciar la presentación"] }
		}
	},
	{
		l: "es-AR",
		t: {
			Next: { v: ["Siguiente"] },
			"Pause slideshow": { v: ["Pausar la presentación "] },
			Previous: { v: ["Anterior"] },
			"Start slideshow": { v: ["Iniciar la presentación"] }
		}
	},
	{
		l: "es-EC",
		t: {
			Next: { v: ["Siguiente"] },
			"Pause slideshow": { v: ["Pausar presentación de diapositivas"] },
			Previous: { v: ["Anterior"] },
			"Start slideshow": { v: ["Iniciar presentación de diapositivas"] }
		}
	},
	{
		l: "es-MX",
		t: {
			Next: { v: ["Siguiente"] },
			"Pause slideshow": { v: ["Pausar presentación de diapositivas"] },
			Previous: { v: ["Anterior"] },
			"Start slideshow": { v: ["Iniciar presentación de diapositivas"] }
		}
	},
	{
		l: "et-EE",
		t: {
			Next: { v: ["Edasi"] },
			"Pause slideshow": { v: ["Slaidiesitluse paus"] },
			Previous: { v: ["Eelmine"] },
			"Start slideshow": { v: ["Alusta slaidiesitust"] }
		}
	},
	{
		l: "eu",
		t: {
			Next: { v: ["Hurrengoa"] },
			"Pause slideshow": { v: ["Pausatu diaporama"] },
			Previous: { v: ["Aurrekoa"] },
			"Start slideshow": { v: ["Hasi diaporama"] }
		}
	},
	{
		l: "fa",
		t: {
			Next: { v: ["بعدی"] },
			"Pause slideshow": { v: ["توقف نمایش اسلاید"] },
			Previous: { v: ["قبلی"] },
			"Start slideshow": { v: ["شروع نمایش اسلاید"] }
		}
	},
	{
		l: "fi",
		t: {
			Next: { v: ["Seuraava"] },
			"Pause slideshow": { v: ["Keskeytä diaesitys"] },
			Previous: { v: ["Edellinen"] },
			"Start slideshow": { v: ["Aloita diaesitys"] }
		}
	},
	{
		l: "fr",
		t: {
			Next: { v: ["Suivant"] },
			"Pause slideshow": { v: ["Mettre le diaporama en pause"] },
			Previous: { v: ["Précédent"] },
			"Start slideshow": { v: ["Démarrer le diaporama"] }
		}
	},
	{
		l: "ga",
		t: {
			Next: { v: ["Ar aghaidh"] },
			"Pause slideshow": { v: ["Cuir taispeántas sleamhnán ar sos"] },
			Previous: { v: ["Roimhe Seo"] },
			"Start slideshow": { v: ["Tosaigh taispeántas sleamhnán"] }
		}
	},
	{
		l: "gl",
		t: {
			Next: { v: ["Seguinte"] },
			"Pause slideshow": { v: ["Pausar o diaporama"] },
			Previous: { v: ["Anterir"] },
			"Start slideshow": { v: ["Iniciar o diaporama"] }
		}
	},
	{
		l: "he",
		t: {
			Next: { v: ["הבא"] },
			"Pause slideshow": { v: ["השהיית מצגת"] },
			Previous: { v: ["הקודם"] },
			"Start slideshow": { v: ["התחלת המצגת"] }
		}
	},
	{
		l: "hr",
		t: {
			Next: { v: ["Sljedeće"] },
			"Pause slideshow": { v: ["Pauziraj dijaprojekciju"] },
			Previous: { v: ["Prethodno"] },
			"Start slideshow": { v: ["Pokreni dijaprojekciju"] }
		}
	},
	{
		l: "hu",
		t: {
			Next: { v: ["Következő"] },
			"Pause slideshow": { v: ["Diavetítés szüneteltetése"] },
			Previous: { v: ["Előző"] },
			"Start slideshow": { v: ["Diavetítés indítása"] }
		}
	},
	{
		l: "id",
		t: {
			Next: { v: ["Selanjutnya"] },
			"Pause slideshow": { v: ["Jeda tayangan slide"] },
			Previous: { v: ["Sebelumnya"] },
			"Start slideshow": { v: ["Mulai salindia"] }
		}
	},
	{
		l: "is",
		t: {
			Next: { v: ["Næsta"] },
			"Pause slideshow": { v: ["Gera hlé á skyggnusýningu"] },
			Previous: { v: ["Fyrri"] },
			"Start slideshow": { v: ["Byrja skyggnusýningu"] }
		}
	},
	{
		l: "it",
		t: {
			Next: { v: ["Successivo"] },
			"Pause slideshow": { v: ["Presentazione in pausa"] },
			Previous: { v: ["Precedente"] },
			"Start slideshow": { v: ["Avvia presentazione"] }
		}
	},
	{
		l: "ja",
		t: {
			Next: { v: ["次"] },
			"Pause slideshow": { v: ["スライドショーを一時停止"] },
			Previous: { v: ["前"] },
			"Start slideshow": { v: ["スライドショーを開始"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			Next: { v: ["次"] },
			"Pause slideshow": { v: ["スライドショーを一時停止"] },
			Previous: { v: ["前"] },
			"Start slideshow": { v: ["スライドショーを開始"] }
		}
	},
	{
		l: "ko",
		t: {
			Next: { v: ["다음"] },
			"Pause slideshow": { v: ["슬라이드쇼 일시정지"] },
			Previous: { v: ["이전"] },
			"Start slideshow": { v: ["슬라이드쇼 시작"] }
		}
	},
	{
		l: "lo",
		t: {
			Next: { v: ["ຕໍ່ໄປ"] },
			"Pause slideshow": { v: ["ຢຸດສະໄລ້ໂຊຊົ່ວຄາວ"] },
			Previous: { v: ["ກ່ອນໜ້າ"] },
			"Start slideshow": { v: ["ເລີ່ມສະໄລ້ໂຊ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			Next: { v: ["Kitas"] },
			"Pause slideshow": { v: ["Pristabdyti skaidrių rodymą"] },
			Previous: { v: ["Ankstesnis"] },
			"Start slideshow": { v: ["Pradėti skaidrių rodymą"] }
		}
	},
	{
		l: "lv",
		t: {
			Next: { v: ["Nākamais"] },
			"Pause slideshow": { v: ["Pauzēt slaidrādi"] },
			Previous: { v: ["Iepriekšējais"] },
			"Start slideshow": { v: ["Sākt slaidrādi"] }
		}
	},
	{
		l: "mk",
		t: {
			Next: { v: ["Следно"] },
			"Pause slideshow": { v: ["Пузирај слајдшоу"] },
			Previous: { v: ["Предходно"] },
			"Start slideshow": { v: ["Стартувај слајдшоу"] }
		}
	},
	{
		l: "mn",
		t: {
			Next: { v: ["Дараах"] },
			"Pause slideshow": { v: ["Слайд шоуг түр зогсоох"] },
			Previous: { v: ["Өмнөх"] },
			"Start slideshow": { v: ["Слайд шоуг эхлүүлэх"] }
		}
	},
	{
		l: "my",
		t: {
			Next: { v: ["နောက်သို့ဆက်ရန်"] },
			"Pause slideshow": { v: ["စလိုက်ရှိုး ခေတ္တရပ်ရန်"] },
			Previous: { v: ["ယခင်"] },
			"Start slideshow": { v: ["စလိုက်ရှိုးအား စတင်ရန်"] }
		}
	},
	{
		l: "nb",
		t: {
			Next: { v: ["Neste"] },
			"Pause slideshow": { v: ["Pause lysbildefremvisning"] },
			Previous: { v: ["Forrige"] },
			"Start slideshow": { v: ["Start lysbildefremvisning"] }
		}
	},
	{
		l: "nl",
		t: {
			Next: { v: ["Volgende"] },
			"Pause slideshow": { v: ["Diavoorstelling pauzeren"] },
			Previous: { v: ["Vorige"] },
			"Start slideshow": { v: ["Diavoorstelling starten"] }
		}
	},
	{
		l: "oc",
		t: {
			Next: { v: ["Seguent"] },
			"Pause slideshow": { v: ["Metre en pausa lo diaporama"] },
			Previous: { v: ["Precedent"] },
			"Start slideshow": { v: ["Lançar lo diaporama"] }
		}
	},
	{
		l: "pl",
		t: {
			Next: { v: ["Następny"] },
			"Pause slideshow": { v: ["Wstrzymaj pokaz slajdów"] },
			Previous: { v: ["Poprzedni"] },
			"Start slideshow": { v: ["Rozpocznij pokaz slajdów"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			Next: { v: ["Próximo"] },
			"Pause slideshow": { v: ["Pausar apresentação de slides"] },
			Previous: { v: ["Anterior"] },
			"Start slideshow": { v: ["Iniciar apresentação de slides"] }
		}
	},
	{
		l: "pt-PT",
		t: {
			Next: { v: ["Seguinte"] },
			"Pause slideshow": { v: ["Pausar diaporama"] },
			Previous: { v: ["Anterior"] },
			"Start slideshow": { v: ["Iniciar diaporama"] }
		}
	},
	{
		l: "ro",
		t: {
			Next: { v: ["Următorul"] },
			"Pause slideshow": { v: ["Pauză prezentare de diapozitive"] },
			Previous: { v: ["Anterior"] },
			"Start slideshow": { v: ["Începeți prezentarea de diapozitive"] }
		}
	},
	{
		l: "ru",
		t: {
			Next: { v: ["Следующее"] },
			"Pause slideshow": { v: ["Приостановить показ слйдов"] },
			Previous: { v: ["Предыдущее"] },
			"Start slideshow": { v: ["Начать показ слайдов"] }
		}
	},
	{
		l: "sk",
		t: {
			Next: { v: ["Ďalej"] },
			"Pause slideshow": { v: ["Pozastaviť prezentáciu"] },
			Previous: { v: ["Predchádzajúce"] },
			"Start slideshow": { v: ["Začať prezentáciu"] }
		}
	},
	{
		l: "sl",
		t: {
			Next: { v: ["Naslednji"] },
			"Pause slideshow": { v: ["Ustavi predstavitev"] },
			Previous: { v: ["Predhodni"] },
			"Start slideshow": { v: ["Začni predstavitev"] }
		}
	},
	{
		l: "sr",
		t: {
			Next: { v: ["Следеће"] },
			"Pause slideshow": { v: ["Паузирај слајд шоу"] },
			Previous: { v: ["Претходно"] },
			"Start slideshow": { v: ["Покрени слајд шоу"] }
		}
	},
	{
		l: "sv",
		t: {
			Next: { v: ["Nästa"] },
			"Pause slideshow": { v: ["Pausa bildspelet"] },
			Previous: { v: ["Föregående"] },
			"Start slideshow": { v: ["Starta bildspelet"] }
		}
	},
	{
		l: "tr",
		t: {
			Next: { v: ["Sonraki"] },
			"Pause slideshow": { v: ["Slayt sunumunu duraklat"] },
			Previous: { v: ["Önceki"] },
			"Start slideshow": { v: ["Slayt sunumunu başlat"] }
		}
	},
	{
		l: "uk",
		t: {
			Next: { v: ["Вперед"] },
			"Pause slideshow": { v: ["Пауза у показі слайдів"] },
			Previous: { v: ["Назад"] },
			"Start slideshow": { v: ["Почати показ слайдів"] }
		}
	},
	{
		l: "uz",
		t: {
			Next: { v: ["Keyingi"] },
			"Pause slideshow": { v: ["Slayd-shouni to'xtatib turish"] },
			Previous: { v: ["Oldingi"] },
			"Start slideshow": { v: ["Slayd-shouni boshlash"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			Next: { v: ["下一个"] },
			"Pause slideshow": { v: ["暂停幻灯片"] },
			Previous: { v: ["上一个"] },
			"Start slideshow": { v: ["开始幻灯片"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			Next: { v: ["下一個"] },
			"Pause slideshow": { v: ["暫停幻燈片"] },
			Previous: { v: ["上一個"] },
			"Start slideshow": { v: ["開始幻燈片"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			Next: { v: ["下一個"] },
			"Pause slideshow": { v: ["暫停幻燈片"] },
			Previous: { v: ["上一個"] },
			"Start slideshow": { v: ["開始幻燈片"] }
		}
	}
], gv = [
	{
		l: "ar",
		t: {}
	},
	{
		l: "ast",
		t: {}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: {}
	},
	{
		l: "cs",
		t: { "Please choose a date": { v: ["Zvolte datum"] } }
	},
	{
		l: "cs-CZ",
		t: {}
	},
	{
		l: "da",
		t: { "Please choose a date": { v: ["Vælg en dato"] } }
	},
	{
		l: "de",
		t: { "Please choose a date": { v: ["Bitte ein Datum wählen"] } }
	},
	{
		l: "de-DE",
		t: { "Please choose a date": { v: ["Bitte ein Datum wählen"] } }
	},
	{
		l: "el",
		t: { "Please choose a date": { v: ["Παρακαλώ επιλέξτε μια ημερομηνία"] } }
	},
	{
		l: "en-GB",
		t: { "Please choose a date": { v: ["Please choose a date"] } }
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {}
	},
	{
		l: "es-AR",
		t: {}
	},
	{
		l: "es-EC",
		t: {}
	},
	{
		l: "es-MX",
		t: {}
	},
	{
		l: "et-EE",
		t: { "Please choose a date": { v: ["Palun vali kuupäev"] } }
	},
	{
		l: "eu",
		t: {}
	},
	{
		l: "fa",
		t: {}
	},
	{
		l: "fi",
		t: {}
	},
	{
		l: "fr",
		t: { "Please choose a date": { v: ["Veuillez choisir une date"] } }
	},
	{
		l: "ga",
		t: { "Please choose a date": { v: ["Roghnaigh dáta le do thoil"] } }
	},
	{
		l: "gl",
		t: { "Please choose a date": { v: ["Escolla unha data"] } }
	},
	{
		l: "he",
		t: {}
	},
	{
		l: "hr",
		t: { "Please choose a date": { v: ["Molimo odaberite datum"] } }
	},
	{
		l: "hu",
		t: { "Please choose a date": { v: ["Válasszon egy dátumot"] } }
	},
	{
		l: "id",
		t: { "Please choose a date": { v: ["Silakan pilih tanggal"] } }
	},
	{
		l: "is",
		t: {}
	},
	{
		l: "it",
		t: {}
	},
	{
		l: "ja",
		t: { "Please choose a date": { v: ["日付を選択してください"] } }
	},
	{
		l: "ja-JP",
		t: {}
	},
	{
		l: "ko",
		t: { "Please choose a date": { v: ["날짜를 선택해주세요"] } }
	},
	{
		l: "lo",
		t: { "Please choose a date": { v: ["ກະລຸນາເລືອກວັນທີ"] } }
	},
	{
		l: "lt-LT",
		t: { "Please choose a date": { v: ["Pasirinkite datą"] } }
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: { "Please choose a date": { v: ["Избери датум"] } }
	},
	{
		l: "mn",
		t: { "Please choose a date": { v: ["Огноо сонгоно уу"] } }
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: {}
	},
	{
		l: "nl",
		t: { "Please choose a date": { v: ["Kies een datum"] } }
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: {}
	},
	{
		l: "pt-BR",
		t: { "Please choose a date": { v: ["Por favor, escolha uma data"] } }
	},
	{
		l: "pt-PT",
		t: { "Please choose a date": { v: ["Por favor, escolha uma data"] } }
	},
	{
		l: "ro",
		t: {}
	},
	{
		l: "ru",
		t: { "Please choose a date": { v: ["Выберите дату"] } }
	},
	{
		l: "sk",
		t: {}
	},
	{
		l: "sl",
		t: {}
	},
	{
		l: "sr",
		t: { "Please choose a date": { v: ["Молимо вас да изаберете датум"] } }
	},
	{
		l: "sv",
		t: { "Please choose a date": { v: ["Välj ett datum"] } }
	},
	{
		l: "tr",
		t: { "Please choose a date": { v: ["Lütfen bir tarih seçin"] } }
	},
	{
		l: "uk",
		t: { "Please choose a date": { v: ["Виберіть дату"] } }
	},
	{
		l: "uz",
		t: { "Please choose a date": { v: ["Iltimos, sanani tanlang"] } }
	},
	{
		l: "zh-CN",
		t: {}
	},
	{
		l: "zh-HK",
		t: { "Please choose a date": { v: ["請選擇日期"] } }
	},
	{
		l: "zh-TW",
		t: { "Please choose a date": { v: ["請選擇日期"] } }
	}
], _v = [
	{
		l: "ar",
		t: { "Type to search time zone": { v: ["أكتُب للبحث عن منطقة زمنية"] } }
	},
	{
		l: "ast",
		t: {
			"Search for time zone": { v: ["Buscar fusos horarios"] },
			"Type to search time zone": { v: ["Escribi pa buscar un fusu horariu"] }
		}
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: { "Type to search time zone": { v: ["Escriviu per cercar la zona horària"] } }
	},
	{
		l: "cs",
		t: {
			"Search for time zone": { v: ["Vyhledat časové pásmo"] },
			"Type to search time zone": { v: ["Psaním vyhledejte časovou zónu"] }
		}
	},
	{
		l: "cs-CZ",
		t: {
			"Search for time zone": { v: ["Vyhledat časové pásmo"] },
			"Type to search time zone": { v: ["Psaním vyhledejte časovou zónu"] }
		}
	},
	{
		l: "da",
		t: {
			"Search for time zone": { v: ["Søg efter tidszone"] },
			"Type to search time zone": { v: ["Indtast for at søge efter tidszone"] }
		}
	},
	{
		l: "de",
		t: {
			"Search for time zone": { v: ["Nach Zeitzone suchen"] },
			"Type to search time zone": { v: ["Tippen, um eine Zeitzone zu suchen"] }
		}
	},
	{
		l: "de-DE",
		t: {
			"Search for time zone": { v: ["Nach Zeitzone suchen"] },
			"Type to search time zone": { v: ["Tippen, um eine Zeitzone zu suchen"] }
		}
	},
	{
		l: "el",
		t: { "Type to search time zone": { v: ["Πληκτρολογήστε για αναζήτηση ζώνης ώρας"] } }
	},
	{
		l: "en-GB",
		t: {
			"Search for time zone": { v: ["Search for time zone"] },
			"Type to search time zone": { v: ["Type to search time zone"] }
		}
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: {
			"Search for time zone": { v: ["Buscar huso horario"] },
			"Type to search time zone": { v: ["Escriba para buscar un huso horario"] }
		}
	},
	{
		l: "es-AR",
		t: {
			"Search for time zone": { v: ["Buscar zona horaria"] },
			"Type to search time zone": { v: ["Escriba para buscar la zona horaria"] }
		}
	},
	{
		l: "es-EC",
		t: { "Type to search time zone": { v: ["Escribe para buscar la zona horaria"] } }
	},
	{
		l: "es-MX",
		t: {
			"Search for time zone": { v: ["Buscar zona horaria"] },
			"Type to search time zone": { v: ["Escriba para buscar la zona horaria"] }
		}
	},
	{
		l: "et-EE",
		t: {
			"Search for time zone": { v: ["Otsi ajavööndit"] },
			"Type to search time zone": { v: ["Ajavööndi otsimiseks kirjuta midagi"] }
		}
	},
	{
		l: "eu",
		t: { "Type to search time zone": { v: ["Idatzi ordu-zona bat bilatzeko"] } }
	},
	{
		l: "fa",
		t: {
			"Search for time zone": { v: ["جستجو برای منطقهٔ زمانی"] },
			"Type to search time zone": { v: ["برای جستجوی منطقه زمانی تایپ کنید"] }
		}
	},
	{
		l: "fi",
		t: {
			"Search for time zone": { v: ["Etsi aikavyöhykettä"] },
			"Type to search time zone": { v: ["Kirjoita etsiäksesi aikavyöhykettä"] }
		}
	},
	{
		l: "fr",
		t: {
			"Search for time zone": { v: ["Rechercher le fuseau horaire"] },
			"Type to search time zone": { v: ["Saisissez les premiers lettres pour rechercher un fuseau horaire"] }
		}
	},
	{
		l: "ga",
		t: {
			"Search for time zone": { v: ["Cuardaigh crios ama"] },
			"Type to search time zone": { v: ["Clóscríobh chun crios ama a chuardach"] }
		}
	},
	{
		l: "gl",
		t: {
			"Search for time zone": { v: ["Buscar por fuso horario"] },
			"Type to search time zone": { v: ["Escriba para buscar o fuso horario"] }
		}
	},
	{
		l: "he",
		t: { "Type to search time zone": { v: ["יש להקליד כדי לחפש אזור זמן"] } }
	},
	{
		l: "hr",
		t: {
			"Search for time zone": { v: ["Pretraži vremensku zonu"] },
			"Type to search time zone": { v: ["Upišite za pretraživanje vremenske zone"] }
		}
	},
	{
		l: "hu",
		t: {
			"Search for time zone": { v: ["Időzóna keresése"] },
			"Type to search time zone": { v: ["Gépeljen az időzóna kereséséhez"] }
		}
	},
	{
		l: "id",
		t: {
			"Search for time zone": { v: ["Cari zona waktu"] },
			"Type to search time zone": { v: ["Ketik untuk mencari zona waktu"] }
		}
	},
	{
		l: "is",
		t: {
			"Search for time zone": { v: ["Leita að tímabelti"] },
			"Type to search time zone": { v: ["Skrifaðu til að leita að tímabelti"] }
		}
	},
	{
		l: "it",
		t: {
			"Search for time zone": { v: ["Ricerca del fuso orario"] },
			"Type to search time zone": { v: ["Digita per cercare un fuso orario"] }
		}
	},
	{
		l: "ja",
		t: {
			"Search for time zone": { v: ["タイムゾーンを検索"] },
			"Type to search time zone": { v: ["タイムゾーン検索のため入力してください"] }
		}
	},
	{
		l: "ja-JP",
		t: {
			"Search for time zone": { v: ["タイムゾーンを検索"] },
			"Type to search time zone": { v: ["タイムゾーン検索のため入力してください"] }
		}
	},
	{
		l: "ko",
		t: {
			"Search for time zone": { v: ["시간대 찾기"] },
			"Type to search time zone": { v: ["입력하여 시간대를 검색"] }
		}
	},
	{
		l: "lo",
		t: {
			"Search for time zone": { v: ["ຄົ້ນຫາເຂດເວລາ"] },
			"Type to search time zone": { v: ["ພິມເພື່ອຄົ້ນຫາເຂດເວລາ"] }
		}
	},
	{
		l: "lt-LT",
		t: {
			"Search for time zone": { v: ["Ieškoti laiko juostų"] },
			"Type to search time zone": { v: ["Įveskite, kad surastumėte laiko juostą"] }
		}
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: {
			"Search for time zone": { v: ["Барај временска зона"] },
			"Type to search time zone": { v: ["Напишете за да пребарате временска зона"] }
		}
	},
	{
		l: "mn",
		t: {
			"Search for time zone": { v: ["Цагийн бүс хайх"] },
			"Type to search time zone": { v: ["Цагийн бүс хайхын тулд бичнэ үү"] }
		}
	},
	{
		l: "my",
		t: { "Type to search time zone": { v: ["ဒေသစံတော်ချိန်များ ရှာဖွေရန် စာရိုက်ပါ"] } }
	},
	{
		l: "nb",
		t: {
			"Search for time zone": { v: ["Søk etter tidssone"] },
			"Type to search time zone": { v: ["Tast for å søke etter tidssone"] }
		}
	},
	{
		l: "nl",
		t: {
			"Search for time zone": { v: ["Zoeken naar tijdzone"] },
			"Type to search time zone": { v: ["Typ om een tijdzone te zoeken"] }
		}
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: {
			"Search for time zone": { v: ["Szukaj strefy czasowej"] },
			"Type to search time zone": { v: ["Wpisz, aby wyszukać strefę czasową"] }
		}
	},
	{
		l: "pt-BR",
		t: {
			"Search for time zone": { v: ["Pesquisar fuso horário"] },
			"Type to search time zone": { v: ["Digite para pesquisar o fuso horário "] }
		}
	},
	{
		l: "pt-PT",
		t: { "Type to search time zone": { v: ["Digite para pesquisar o fuso horário "] } }
	},
	{
		l: "ro",
		t: {
			"Search for time zone": { v: ["Căutare zonă de timp"] },
			"Type to search time zone": { v: ["Tastați pentru a căuta fusul orar"] }
		}
	},
	{
		l: "ru",
		t: {
			"Search for time zone": { v: ["Поиск часового пояса"] },
			"Type to search time zone": { v: ["Введите для поиска часового пояса"] }
		}
	},
	{
		l: "sk",
		t: {
			"Search for time zone": { v: ["Vyhľadať časové pásmo"] },
			"Type to search time zone": { v: ["Začníte písať pre vyhľadávanie časovej zóny"] }
		}
	},
	{
		l: "sl",
		t: { "Type to search time zone": { v: ["Vpišite niz za iskanje časovnega pasu"] } }
	},
	{
		l: "sr",
		t: { "Type to search time zone": { v: ["Куцајте да претражите временске зоне"] } }
	},
	{
		l: "sv",
		t: {
			"Search for time zone": { v: ["Sök efter tidszon"] },
			"Type to search time zone": { v: ["Skriv för att välja tidszon"] }
		}
	},
	{
		l: "tr",
		t: {
			"Search for time zone": { v: ["Saat dilimi ara"] },
			"Type to search time zone": { v: ["Saat dilimi aramak için yazmaya başlayın"] }
		}
	},
	{
		l: "uk",
		t: { "Type to search time zone": { v: ["Введіть для пошуку часовий пояс"] } }
	},
	{
		l: "uz",
		t: {
			"Search for time zone": { v: ["Vaqt mintaqasini qidirish"] },
			"Type to search time zone": { v: ["Vaqt mintaqasini qidirish uchun kiriting"] }
		}
	},
	{
		l: "zh-CN",
		t: {
			"Search for time zone": { v: ["搜索时区"] },
			"Type to search time zone": { v: ["打字以搜索时区"] }
		}
	},
	{
		l: "zh-HK",
		t: {
			"Search for time zone": { v: ["搜索時區"] },
			"Type to search time zone": { v: ["鍵入以搜索時區"] }
		}
	},
	{
		l: "zh-TW",
		t: {
			"Search for time zone": { v: ["搜尋時區"] },
			"Type to search time zone": { v: ["輸入以搜尋時區"] }
		}
	}
], vv = [
	{
		l: "ar",
		t: { Submit: { v: ["إرسال"] } }
	},
	{
		l: "ast",
		t: { Submit: { v: ["Unviar"] } }
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: { Submit: { v: ["Envia"] } }
	},
	{
		l: "cs",
		t: { Submit: { v: ["Odeslat"] } }
	},
	{
		l: "cs-CZ",
		t: { Submit: { v: ["Odeslat"] } }
	},
	{
		l: "da",
		t: { Submit: { v: ["Send"] } }
	},
	{
		l: "de",
		t: { Submit: { v: ["Einreichen"] } }
	},
	{
		l: "de-DE",
		t: { Submit: { v: ["Einreichen"] } }
	},
	{
		l: "el",
		t: { Submit: { v: ["Υποβολή"] } }
	},
	{
		l: "en-GB",
		t: { Submit: { v: ["Submit"] } }
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: { Submit: { v: ["Enviar"] } }
	},
	{
		l: "es-AR",
		t: { Submit: { v: ["Enviar"] } }
	},
	{
		l: "es-EC",
		t: { Submit: { v: ["Enviar"] } }
	},
	{
		l: "es-MX",
		t: { Submit: { v: ["Enviar"] } }
	},
	{
		l: "et-EE",
		t: { Submit: { v: ["Saada"] } }
	},
	{
		l: "eu",
		t: { Submit: { v: ["Bidali"] } }
	},
	{
		l: "fa",
		t: { Submit: { v: ["ارسال"] } }
	},
	{
		l: "fi",
		t: { Submit: { v: ["Lähetä"] } }
	},
	{
		l: "fr",
		t: { Submit: { v: ["Valider"] } }
	},
	{
		l: "ga",
		t: { Submit: { v: ["Cuir isteach"] } }
	},
	{
		l: "gl",
		t: { Submit: { v: ["Enviar"] } }
	},
	{
		l: "he",
		t: { Submit: { v: ["הגשה"] } }
	},
	{
		l: "hr",
		t: { Submit: { v: ["Pošalji"] } }
	},
	{
		l: "hu",
		t: { Submit: { v: ["Beküldés"] } }
	},
	{
		l: "id",
		t: { Submit: { v: ["Kirimkan"] } }
	},
	{
		l: "is",
		t: { Submit: { v: ["Senda inn"] } }
	},
	{
		l: "it",
		t: { Submit: { v: ["Invia"] } }
	},
	{
		l: "ja",
		t: { Submit: { v: ["提出"] } }
	},
	{
		l: "ja-JP",
		t: { Submit: { v: ["提出"] } }
	},
	{
		l: "ko",
		t: { Submit: { v: ["제출"] } }
	},
	{
		l: "lo",
		t: { Submit: { v: ["ສົ່ງ"] } }
	},
	{
		l: "lt-LT",
		t: { Submit: { v: ["Pateikti"] } }
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: { Submit: { v: ["Испрати"] } }
	},
	{
		l: "mn",
		t: { Submit: { v: ["Илгээх"] } }
	},
	{
		l: "my",
		t: { Submit: { v: ["တင်သွင်းရန်"] } }
	},
	{
		l: "nb",
		t: { Submit: { v: ["Send"] } }
	},
	{
		l: "nl",
		t: { Submit: { v: ["Indienen"] } }
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: { Submit: { v: ["Wyślij"] } }
	},
	{
		l: "pt-BR",
		t: { Submit: { v: ["Enviar"] } }
	},
	{
		l: "pt-PT",
		t: { Submit: { v: ["Submeter"] } }
	},
	{
		l: "ro",
		t: { Submit: { v: ["Trimiteți"] } }
	},
	{
		l: "ru",
		t: { Submit: { v: ["Утвердить"] } }
	},
	{
		l: "sk",
		t: { Submit: { v: ["Odoslať"] } }
	},
	{
		l: "sl",
		t: { Submit: { v: ["Pošlji"] } }
	},
	{
		l: "sr",
		t: { Submit: { v: ["Поднеси"] } }
	},
	{
		l: "sv",
		t: { Submit: { v: ["Skicka"] } }
	},
	{
		l: "tr",
		t: { Submit: { v: ["Gönder"] } }
	},
	{
		l: "uk",
		t: { Submit: { v: ["Надіслати"] } }
	},
	{
		l: "uz",
		t: { Submit: { v: ["Yuborish"] } }
	},
	{
		l: "zh-CN",
		t: { Submit: { v: ["提交"] } }
	},
	{
		l: "zh-HK",
		t: { Submit: { v: ["提交"] } }
	},
	{
		l: "zh-TW",
		t: { Submit: { v: ["遞交"] } }
	}
], yv = [
	{
		l: "ar",
		t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } }
	},
	{
		l: "ast",
		t: { "Undo changes": { v: ["Desfacer los cambeos"] } }
	},
	{
		l: "br",
		t: {}
	},
	{
		l: "ca",
		t: { "Undo changes": { v: ["Desfés els canvis"] } }
	},
	{
		l: "cs",
		t: { "Undo changes": { v: ["Vzít změny zpět"] } }
	},
	{
		l: "cs-CZ",
		t: { "Undo changes": { v: ["Vzít změny zpět"] } }
	},
	{
		l: "da",
		t: { "Undo changes": { v: ["Fortryd ændringer"] } }
	},
	{
		l: "de",
		t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } }
	},
	{
		l: "de-DE",
		t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } }
	},
	{
		l: "el",
		t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } }
	},
	{
		l: "en-GB",
		t: { "Undo changes": { v: ["Undo changes"] } }
	},
	{
		l: "eo",
		t: {}
	},
	{
		l: "es",
		t: { "Undo changes": { v: ["Deshacer cambios"] } }
	},
	{
		l: "es-AR",
		t: { "Undo changes": { v: ["Deshacer cambios"] } }
	},
	{
		l: "es-EC",
		t: { "Undo changes": { v: ["Deshacer cambios"] } }
	},
	{
		l: "es-MX",
		t: { "Undo changes": { v: ["Deshacer cambios"] } }
	},
	{
		l: "et-EE",
		t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } }
	},
	{
		l: "eu",
		t: { "Undo changes": { v: ["Aldaketak desegin"] } }
	},
	{
		l: "fa",
		t: { "Undo changes": { v: ["لغو تغییرات"] } }
	},
	{
		l: "fi",
		t: { "Undo changes": { v: ["Kumoa muutokset"] } }
	},
	{
		l: "fr",
		t: { "Undo changes": { v: ["Annuler les changements"] } }
	},
	{
		l: "ga",
		t: { "Undo changes": { v: ["Cealaigh athruithe"] } }
	},
	{
		l: "gl",
		t: { "Undo changes": { v: ["Desfacer os cambios"] } }
	},
	{
		l: "he",
		t: { "Undo changes": { v: ["ביטול שינויים"] } }
	},
	{
		l: "hr",
		t: { "Undo changes": { v: ["Poništi promjene"] } }
	},
	{
		l: "hu",
		t: { "Undo changes": { v: ["Változtatások visszavonása"] } }
	},
	{
		l: "id",
		t: { "Undo changes": { v: ["Urungkan perubahan"] } }
	},
	{
		l: "is",
		t: { "Undo changes": { v: ["Afturkalla breytingar"] } }
	},
	{
		l: "it",
		t: { "Undo changes": { v: ["Cancella i cambiamenti"] } }
	},
	{
		l: "ja",
		t: { "Undo changes": { v: ["変更を取り消し"] } }
	},
	{
		l: "ja-JP",
		t: { "Undo changes": { v: ["変更を取り消し"] } }
	},
	{
		l: "ko",
		t: { "Undo changes": { v: ["변경 되돌리기"] } }
	},
	{
		l: "lo",
		t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } }
	},
	{
		l: "lt-LT",
		t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } }
	},
	{
		l: "lv",
		t: {}
	},
	{
		l: "mk",
		t: { "Undo changes": { v: ["Врати ги промените"] } }
	},
	{
		l: "mn",
		t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } }
	},
	{
		l: "my",
		t: {}
	},
	{
		l: "nb",
		t: { "Undo changes": { v: ["Tilbakestill endringer"] } }
	},
	{
		l: "nl",
		t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } }
	},
	{
		l: "oc",
		t: {}
	},
	{
		l: "pl",
		t: { "Undo changes": { v: ["Cofnij zmiany"] } }
	},
	{
		l: "pt-BR",
		t: { "Undo changes": { v: ["Desfazer modificações"] } }
	},
	{
		l: "pt-PT",
		t: { "Undo changes": { v: ["Anular alterações"] } }
	},
	{
		l: "ro",
		t: { "Undo changes": { v: ["Anularea modificărilor"] } }
	},
	{
		l: "ru",
		t: { "Undo changes": { v: ["Отменить изменения"] } }
	},
	{
		l: "sk",
		t: { "Undo changes": { v: ["Vrátiť zmeny"] } }
	},
	{
		l: "sl",
		t: { "Undo changes": { v: ["Razveljavi spremembe"] } }
	},
	{
		l: "sr",
		t: { "Undo changes": { v: ["Поништи измене"] } }
	},
	{
		l: "sv",
		t: { "Undo changes": { v: ["Ångra ändringar"] } }
	},
	{
		l: "tr",
		t: { "Undo changes": { v: ["Değişiklikleri geri al"] } }
	},
	{
		l: "uk",
		t: { "Undo changes": { v: ["Скасувати зміни"] } }
	},
	{
		l: "uz",
		t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } }
	},
	{
		l: "zh-CN",
		t: { "Undo changes": { v: ["撤销更改"] } }
	},
	{
		l: "zh-HK",
		t: { "Undo changes": { v: ["取消更改"] } }
	},
	{
		l: "zh-TW",
		t: { "Undo changes": { v: ["還原變更"] } }
	}
];
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/createElementId-DhjFt1I9.mjs
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function bv() {
	return `nc-vue-${window._nc_vue_element_id++}`;
}
//#endregion
export { Ic as $, Dr as $t, B_ as A, zs as At, Qh as B, gr as Bt, _v as C, Ne as Cn, li as Ct, G_ as D, wr as Dt, J_ as E, fc as Et, j_ as F, na as Ft, rg as G, ha as Gt, $h as H, xa as Ht, M_ as I, oa as It, Sh as J, lo as Jt, ag as K, Ca as Kt, P_ as L, _s as Lt, z_ as M, ta as Mt, L_ as N, aa as Nt, U_ as O, Cr as Ot, A_ as P, ra as Pt, xh as Q, Ar as Qt, D_ as R, _r as Rt, gv as S, N as Sn, Hi as St, yv as T, js as Tt, ig as U, pa as Ut, Yh as V, ya as Vt, ng as W, ga as Wt, yh as X, fi as Xt, bh as Y, Ia as Yt, Gh as Z, _c as Zt, tv as _, Sn as _n, Fs as _t, $_ as a, rn as an, ru as at, hv as b, ge as bn, Ns as bt, av as c, Be as cn, _u as ct, ev as d, dn, Gr as dt, yr as en, Du as et, cv as f, $t as fn, ps as ft, fv as g, Tn as gn, Cs as gt, dv as h, B as hn, ks as ht, Z_ as i, ze as in, su as it, R_ as j, tr as jt, W_ as k, Va as kt, ov as l, Qt as ln, U as lt, uv as m, fn as mn, dc as mt, X_ as n, vr as nn, il as nt, rv as o, V as on, el as ot, lv as p, tn as pn, Ms as pt, Ch as q, La as qt, Q_ as r, Re as rn, iu as rt, iv as s, cn as sn, yu as st, bv as t, br as tn, Tu as tt, sv as u, en as un, fs as ut, pv as v, _n as vn, Ss as vt, vv as w, Gs as wt, nv as x, _e as xn, W as xt, mv as y, gn as yn, ba as yt, Xh as z, Sr as zt };
