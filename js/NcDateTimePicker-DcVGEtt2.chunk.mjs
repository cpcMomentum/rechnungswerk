import { $ as e, $t as t, At as n, C as r, Cn as i, Ct as a, D as o, Et as s, Ft as c, Gt as l, Ht as u, It as d, Jt as f, Lt as p, M as m, N as h, P as g, Pt as _, Qt as v, Sn as y, Tt as b, Vt as x, Xt as S, Yt as C, Zt as w, _t as T, bn as E, bt as D, cn as O, ct as k, dn as A, dt as j, en as M, gn as N, gt as P, ht as F, i as I, in as ee, j as te, jt as L, kt as R, ln as z, mt as B, o as ne, on as re, ot as ie, qt as ae, r as oe, st as se, t as ce, tn as le, tt as ue, ut as V, vn as de, vt as H, wt as fe, xn as pe, xt as U, yn as W, yt as me } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { E as he, T as ge, d as _e, f as ve, l as ye, m as be, o as xe, p as Se, u as Ce } from "./mdi-CpchYUUV-BlQjFBKG.chunk.mjs";
import { t as we } from "./NcSelect--kERLlBK-CgY601vH.chunk.mjs";
//#region node_modules/date-fns/constants.js
var Te = 365.2425, Ee = 6048e5, De = 864e5, Oe = 6e4, ke = 36e5, Ae = 1e3, je = 86400;
je * 7, je * Te / 12 * 3;
var Me = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/date-fns/constructFrom.js
function G(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && Me in e ? e[Me](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/date-fns/toDate.js
function K(e, t) {
	return G(t || e, e);
}
//#endregion
//#region node_modules/date-fns/addDays.js
function Ne(e, t, n) {
	let r = K(e, n?.in);
	return isNaN(t) ? G(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/date-fns/addMonths.js
function Pe(e, t, n) {
	let r = K(e, n?.in);
	if (isNaN(t)) return G(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = G(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region node_modules/date-fns/add.js
function Fe(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = K(e, n?.in), d = i || r ? Pe(u, i + r * 12) : u, f = o || a ? Ne(d, o + a * 7) : d, p = (l + (c + s * 60) * 60) * 1e3;
	return G(n?.in || e, +f + p);
}
//#endregion
//#region node_modules/date-fns/addMilliseconds.js
function Ie(e, t, n) {
	return G(n?.in || e, +K(e) + t);
}
//#endregion
//#region node_modules/date-fns/addHours.js
function Le(e, t, n) {
	return Ie(e, t * ke, n);
}
//#endregion
//#region node_modules/date-fns/_lib/defaultOptions.js
var Re = {};
function ze() {
	return Re;
}
//#endregion
//#region node_modules/date-fns/startOfWeek.js
function Be(e, t) {
	let n = ze(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = K(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/date-fns/startOfISOWeek.js
function Ve(e, t) {
	return Be(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/date-fns/getISOWeekYear.js
function He(e, t) {
	let n = K(e, t?.in), r = n.getFullYear(), i = G(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = Ve(i), o = G(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = Ve(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function Ue(e) {
	let t = K(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeDates.js
function We(e, ...t) {
	let n = G.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/date-fns/startOfDay.js
function Ge(e, t) {
	let n = K(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarDays.js
function Ke(e, t, n) {
	let [r, i] = We(n?.in, e, t), a = Ge(r), o = Ge(i), s = +a - Ue(a), c = +o - Ue(o);
	return Math.round((s - c) / De);
}
//#endregion
//#region node_modules/date-fns/startOfISOWeekYear.js
function qe(e, t) {
	let n = He(e, t), r = G(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Ve(r);
}
//#endregion
//#region node_modules/date-fns/addQuarters.js
function Je(e, t, n) {
	return Pe(e, t * 3, n);
}
//#endregion
//#region node_modules/date-fns/addYears.js
function Ye(e, t, n) {
	return Pe(e, t * 12, n);
}
//#endregion
//#region node_modules/date-fns/compareAsc.js
function Xe(e, t) {
	let n = K(e) - +K(t);
	return n < 0 ? -1 : n > 0 ? 1 : n;
}
//#endregion
//#region node_modules/date-fns/isDate.js
function Ze(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/date-fns/isValid.js
function Qe(e) {
	return !(!Ze(e) && typeof e != "number" || isNaN(+K(e)));
}
//#endregion
//#region node_modules/date-fns/getQuarter.js
function $e(e, t) {
	let n = K(e, t?.in);
	return Math.trunc(n.getMonth() / 3) + 1;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarYears.js
function et(e, t, n) {
	let [r, i] = We(n?.in, e, t);
	return r.getFullYear() - i.getFullYear();
}
//#endregion
//#region node_modules/date-fns/differenceInYears.js
function tt(e, t, n) {
	let [r, i] = We(n?.in, e, t), a = Xe(r, i), o = Math.abs(et(r, i));
	r.setFullYear(1584), i.setFullYear(1584);
	let s = a * (o - +(Xe(r, i) === -a));
	return s === 0 ? 0 : s;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeInterval.js
function nt(e, t) {
	let [n, r] = We(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region node_modules/date-fns/eachDayOfInterval.js
function rt(e, t) {
	let { start: n, end: r } = nt(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(G(n, o)), o.setDate(o.getDate() + s), o.setHours(0, 0, 0, 0);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/date-fns/startOfQuarter.js
function it(e, t) {
	let n = K(e, t?.in), r = n.getMonth(), i = r - r % 3;
	return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/eachQuarterOfInterval.js
function at(e, t) {
	let { start: n, end: r } = nt(t?.in, e), i = +n > +r, a = i ? +it(n) : +it(r), o = it(i ? r : n), s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(G(n, o)), o = Je(o, s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/date-fns/startOfMonth.js
function ot(e, t) {
	let n = K(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/endOfYear.js
function st(e, t) {
	let n = K(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/date-fns/startOfYear.js
function ct(e, t) {
	let n = K(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/endOfWeek.js
function lt(e, t) {
	let n = ze(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = K(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region node_modules/date-fns/endOfQuarter.js
function ut(e, t) {
	let n = K(e, t?.in), r = n.getMonth(), i = r - r % 3 + 3;
	return n.setMonth(i, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var dt = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, ft = (e, t, n) => {
	let r, i = dt[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function pt(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var mt = {
	date: pt({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: pt({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: pt({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, ht = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, gt = (e, t, n, r) => ht[e];
//#endregion
//#region node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function _t(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var vt = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: _t({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: _t({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: _t({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: _t({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: _t({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchFn.js
function yt(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? xt(s, (e) => e.test(o)) : bt(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function bt(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function xt(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function St(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
//#endregion
//#region node_modules/date-fns/locale/en-US.js
var Ct = {
	code: "en-US",
	formatDistance: ft,
	formatLong: mt,
	formatRelative: gt,
	localize: vt,
	match: {
		ordinalNumber: St({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: yt({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: yt({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: yt({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: yt({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: yt({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/date-fns/getDayOfYear.js
function wt(e, t) {
	let n = K(e, t?.in);
	return Ke(n, ct(n)) + 1;
}
//#endregion
//#region node_modules/date-fns/getISOWeek.js
function Tt(e, t) {
	let n = K(e, t?.in), r = Ve(n) - +qe(n);
	return Math.round(r / Ee) + 1;
}
//#endregion
//#region node_modules/date-fns/getWeekYear.js
function Et(e, t) {
	let n = K(e, t?.in), r = n.getFullYear(), i = ze(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = G(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Be(o, t), c = G(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Be(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/date-fns/startOfWeekYear.js
function Dt(e, t) {
	let n = ze(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Et(e, t), a = G(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Be(a, t);
}
//#endregion
//#region node_modules/date-fns/getWeek.js
function Ot(e, t) {
	let n = K(e, t?.in), r = Be(n, t) - +Dt(n, t);
	return Math.round(r / Ee) + 1;
}
//#endregion
//#region node_modules/date-fns/_lib/addLeadingZeros.js
function q(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/date-fns/_lib/format/lightFormatters.js
var kt = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return q(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : q(n + 1, 2);
	},
	d(e, t) {
		return q(e.getDate(), t.length);
	},
	a(e, t) {
		let n = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.toUpperCase();
			case "aaa": return n;
			case "aaaaa": return n[0];
			default: return n === "am" ? "a.m." : "p.m.";
		}
	},
	h(e, t) {
		return q(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return q(e.getHours(), t.length);
	},
	m(e, t) {
		return q(e.getMinutes(), t.length);
	},
	s(e, t) {
		return q(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return q(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, At = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, jt = {
	G: function(e, t, n) {
		let r = +(e.getFullYear() > 0);
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(r, { width: "abbreviated" });
			case "GGGGG": return n.era(r, { width: "narrow" });
			default: return n.era(r, { width: "wide" });
		}
	},
	y: function(e, t, n) {
		if (t === "yo") {
			let t = e.getFullYear(), r = t > 0 ? t : 1 - t;
			return n.ordinalNumber(r, { unit: "year" });
		}
		return kt.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = Et(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? q(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : q(a, t.length);
	},
	R: function(e, t) {
		return q(He(e), t.length);
	},
	u: function(e, t) {
		return q(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return q(r, 2);
			case "Qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "QQQ": return n.quarter(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "q": return String(r);
			case "qq": return q(r, 2);
			case "qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "qqq": return n.quarter(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "M":
			case "MM": return kt.M(e, t);
			case "Mo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "MMM": return n.month(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return n.month(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "L": return String(r + 1);
			case "LL": return q(r + 1, 2);
			case "Lo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "LLL": return n.month(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return n.month(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(e, t, n, r) {
		let i = Ot(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : q(i, t.length);
	},
	I: function(e, t, n) {
		let r = Tt(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : q(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : kt.d(e, t);
	},
	D: function(e, t, n) {
		let r = wt(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : q(r, t.length);
	},
	E: function(e, t, n) {
		let r = e.getDay();
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "e": return String(a);
			case "ee": return q(a, 2);
			case "eo": return n.ordinalNumber(a, { unit: "day" });
			case "eee": return n.day(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return n.day(i, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(i, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "c": return String(a);
			case "cc": return q(a, t.length);
			case "co": return n.ordinalNumber(a, { unit: "day" });
			case "ccc": return n.day(i, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return n.day(i, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(i, {
				width: "short",
				context: "standalone"
			});
			default: return n.day(i, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(e, t, n) {
		let r = e.getDay(), i = r === 0 ? 7 : r;
		switch (t) {
			case "i": return String(i);
			case "ii": return q(i, t.length);
			case "io": return n.ordinalNumber(i, { unit: "day" });
			case "iii": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(e, t, n) {
		let r = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return n.dayPeriod(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r === 12 ? At.noon : r === 0 ? At.midnight : r / 12 >= 1 ? "pm" : "am", t) {
			case "b":
			case "bb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r >= 17 ? At.evening : r >= 12 ? At.afternoon : r >= 4 ? At.morning : At.night, t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(e, t, n) {
		if (t === "ho") {
			let t = e.getHours() % 12;
			return t === 0 && (t = 12), n.ordinalNumber(t, { unit: "hour" });
		}
		return kt.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : kt.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : q(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : q(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : kt.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : kt.s(e, t);
	},
	S: function(e, t) {
		return kt.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Nt(r);
			case "XXXX":
			case "XX": return Pt(r);
			default: return Pt(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Nt(r);
			case "xxxx":
			case "xx": return Pt(r);
			default: return Pt(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Mt(r, ":");
			default: return "GMT" + Pt(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Mt(r, ":");
			default: return "GMT" + Pt(r, ":");
		}
	},
	t: function(e, t, n) {
		return q(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return q(+e, t.length);
	}
};
function Mt(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + q(a, 2);
}
function Nt(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + q(Math.abs(e) / 60, 2) : Pt(e, t);
}
function Pt(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = q(Math.trunc(r / 60), 2), a = q(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/date-fns/_lib/format/longFormatters.js
var Ft = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, It = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Lt = {
	p: It,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Ft(e, t);
		let a;
		switch (r) {
			case "P":
				a = t.dateTime({ width: "short" });
				break;
			case "PP":
				a = t.dateTime({ width: "medium" });
				break;
			case "PPP":
				a = t.dateTime({ width: "long" });
				break;
			default: a = t.dateTime({ width: "full" });
		}
		return a.replace("{{date}}", Ft(r, t)).replace("{{time}}", It(i, t));
	}
}, Rt = /^D+$/, zt = /^Y+$/, Bt = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function Vt(e) {
	return Rt.test(e);
}
function Ht(e) {
	return zt.test(e);
}
function Ut(e, t, n) {
	let r = Wt(e, t, n);
	if (console.warn(r), Bt.includes(e)) throw RangeError(r);
}
function Wt(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/date-fns/format.js
var Gt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Kt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, qt = /^'([^]*?)'?$/, Jt = /''/g, Yt = /[a-zA-Z]/;
function Xt(e, t, n) {
	let r = ze(), i = n?.locale ?? r.locale ?? Ct, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = K(e, n?.in);
	if (!Qe(s)) throw RangeError("Invalid time value");
	let c = t.match(Kt).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Lt[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(Gt).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: Zt(e)
		};
		if (jt[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(Yt)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
		return {
			isToken: !1,
			value: e
		};
	});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = {
		firstWeekContainsDate: a,
		weekStartsOn: o,
		locale: i
	};
	return c.map((r) => {
		if (!r.isToken) return r.value;
		let a = r.value;
		(!n?.useAdditionalWeekYearTokens && Ht(a) || !n?.useAdditionalDayOfYearTokens && Vt(a)) && Ut(a, t, String(e));
		let o = jt[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function Zt(e) {
	let t = e.match(qt);
	return t ? t[1].replace(Jt, "'") : e;
}
//#endregion
//#region node_modules/date-fns/getDay.js
function Qt(e, t) {
	return K(e, t?.in).getDay();
}
//#endregion
//#region node_modules/date-fns/getDaysInMonth.js
function $t(e, t) {
	let n = K(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = G(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region node_modules/date-fns/getDefaultOptions.js
function en() {
	return Object.assign({}, ze());
}
//#endregion
//#region node_modules/date-fns/getHours.js
function tn(e, t) {
	return K(e, t?.in).getHours();
}
//#endregion
//#region node_modules/date-fns/getISODay.js
function nn(e, t) {
	let n = K(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/date-fns/getMinutes.js
function rn(e, t) {
	return K(e, t?.in).getMinutes();
}
//#endregion
//#region node_modules/date-fns/getMonth.js
function J(e, t) {
	return K(e, t?.in).getMonth();
}
//#endregion
//#region node_modules/date-fns/getSeconds.js
function an(e) {
	return K(e).getSeconds();
}
//#endregion
//#region node_modules/date-fns/getYear.js
function Y(e, t) {
	return K(e, t?.in).getFullYear();
}
//#endregion
//#region node_modules/date-fns/isAfter.js
function on(e, t) {
	return +K(e) > +K(t);
}
//#endregion
//#region node_modules/date-fns/isBefore.js
function sn(e, t) {
	return +K(e) < +K(t);
}
//#endregion
//#region node_modules/date-fns/isEqual.js
function cn(e, t) {
	return +K(e) == +K(t);
}
//#endregion
//#region node_modules/date-fns/transpose.js
function ln(e, t) {
	let n = un(t) ? new t(0) : G(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function un(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/Setter.js
var dn = 10, fn = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, pn = class extends fn {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, mn = class extends fn {
	priority = dn;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => G(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : G(e, ln(e, this.context));
	}
}, X = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new pn(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, hn = class extends X {
	priority = 140;
	parse(e, t, n) {
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
			case "GGGGG": return n.era(e, { width: "narrow" });
			default: return n.era(e, { width: "wide" }) || n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
		}
	}
	set(e, t, n) {
		return t.era = n, e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"R",
		"u",
		"t",
		"T"
	];
}, gn = {
	month: /^(1[0-2]|0?\d)/,
	date: /^(3[0-1]|[0-2]?\d)/,
	dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
	week: /^(5[0-3]|[0-4]?\d)/,
	hour23h: /^(2[0-3]|[0-1]?\d)/,
	hour24h: /^(2[0-4]|[0-1]?\d)/,
	hour11h: /^(1[0-1]|0?\d)/,
	hour12h: /^(1[0-2]|0?\d)/,
	minute: /^[0-5]?\d/,
	second: /^[0-5]?\d/,
	singleDigit: /^\d/,
	twoDigits: /^\d{1,2}/,
	threeDigits: /^\d{1,3}/,
	fourDigits: /^\d{1,4}/,
	anyDigitsSigned: /^-?\d+/,
	singleDigitSigned: /^-?\d/,
	twoDigitsSigned: /^-?\d{1,2}/,
	threeDigitsSigned: /^-?\d{1,3}/,
	fourDigitsSigned: /^-?\d{1,4}/
}, _n = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/date-fns/parse/_lib/utils.js
function vn(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function yn(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function bn(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * ke + a * Oe + o * Ae),
		rest: t.slice(n[0].length)
	};
}
function xn(e) {
	return yn(gn.anyDigitsSigned, e);
}
function Sn(e, t) {
	switch (e) {
		case 1: return yn(gn.singleDigit, t);
		case 2: return yn(gn.twoDigits, t);
		case 3: return yn(gn.threeDigits, t);
		case 4: return yn(gn.fourDigits, t);
		default: return yn(RegExp("^\\d{1," + e + "}"), t);
	}
}
function Cn(e, t) {
	switch (e) {
		case 1: return yn(gn.singleDigitSigned, t);
		case 2: return yn(gn.twoDigitsSigned, t);
		case 3: return yn(gn.threeDigitsSigned, t);
		case 4: return yn(gn.fourDigitsSigned, t);
		default: return yn(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function wn(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function Tn(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function En(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/YearParser.js
var Dn = class extends X {
	priority = 130;
	incompatibleTokens = [
		"Y",
		"R",
		"u",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "yy"
		});
		switch (t) {
			case "y": return vn(Sn(4, e), r);
			case "yo": return vn(n.ordinalNumber(e, { unit: "year" }), r);
			default: return vn(Sn(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = Tn(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, On = class extends X {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return vn(Sn(4, e), r);
			case "Yo": return vn(n.ordinalNumber(e, { unit: "year" }), r);
			default: return vn(Sn(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = Et(e, r);
		if (n.isTwoDigitYear) {
			let t = Tn(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Be(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Be(e, r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
}, kn = class extends X {
	priority = 130;
	parse(e, t) {
		return Cn(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = G(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Ve(r);
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, An = class extends X {
	priority = 130;
	parse(e, t) {
		return Cn(t === "u" ? 4 : t.length, e);
	}
	set(e, t, n) {
		return e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"R",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, jn = class extends X {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return Sn(t.length, e);
			case "Qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "QQQ": return n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "formatting"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Mn = class extends X {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return Sn(t.length, e);
			case "qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "qqq": return n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "standalone"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Nn = class extends X {
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"L",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "M": return vn(yn(gn.month, e), r);
			case "MM": return vn(Sn(2, e), r);
			case "Mo": return vn(n.ordinalNumber(e, { unit: "month" }), r);
			case "MMM": return n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			case "MMMMM": return n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(e, {
				width: "wide",
				context: "formatting"
			}) || n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
}, Pn = class extends X {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return vn(yn(gn.month, e), r);
			case "LL": return vn(Sn(2, e), r);
			case "Lo": return vn(n.ordinalNumber(e, { unit: "month" }), r);
			case "LLL": return n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			case "LLLLL": return n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(e, {
				width: "wide",
				context: "standalone"
			}) || n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/date-fns/setWeek.js
function Fn(e, t, n) {
	let r = K(e, n?.in), i = Ot(r, n) - t;
	return r.setDate(r.getDate() - i * 7), K(r, n?.in);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var In = class extends X {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return yn(gn.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return Sn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return Be(Fn(e, n, r), r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/date-fns/setISOWeek.js
function Ln(e, t, n) {
	let r = K(e, n?.in), i = Tt(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var Rn = class extends X {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return yn(gn.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return Sn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return Ve(Ln(e, n));
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, zn = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], Bn = [
	31,
	29,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], Vn = class extends X {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return yn(gn.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return Sn(t.length, e);
		}
	}
	validate(e, t) {
		let n = En(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= Bn[r] : t >= 1 && t <= zn[r];
	}
	set(e, t, n) {
		return e.setDate(n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Hn = class extends X {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return yn(gn.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return Sn(t.length, e);
		}
	}
	validate(e, t) {
		return En(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
	}
	set(e, t, n) {
		return e.setMonth(0, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"E",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/date-fns/setDay.js
function Un(e, t, n) {
	let r = ze(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = K(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return Ne(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/DayParser.js
var Wn = class extends X {
	priority = 90;
	parse(e, t, n) {
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEE": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Un(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Gn = class extends X {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return vn(Sn(t.length, e), i);
			case "eo": return vn(n.ordinalNumber(e, { unit: "day" }), i);
			case "eee": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeee": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Un(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"c",
		"t",
		"T"
	];
}, Kn = class extends X {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return vn(Sn(t.length, e), i);
			case "co": return vn(n.ordinalNumber(e, { unit: "day" }), i);
			case "ccc": return n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "ccccc": return n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.day(e, {
				width: "wide",
				context: "standalone"
			}) || n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Un(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"e",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/date-fns/setISODay.js
function qn(e, t, n) {
	let r = K(e, n?.in);
	return Ne(r, t - nn(r, n), n);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var Jn = class extends X {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return Sn(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return vn(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return vn(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return vn(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return vn(n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 7;
	}
	set(e, t, n) {
		return e = qn(e, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"E",
		"e",
		"c",
		"t",
		"T"
	];
}, Yn = class extends X {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "a":
			case "aa":
			case "aaa": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "aaaaa": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(wn(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Xn = class extends X {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "b":
			case "bb":
			case "bbb": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "bbbbb": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(wn(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Zn = class extends X {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(wn(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, Qn = class extends X {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return yn(gn.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Sn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 12;
	}
	set(e, t, n) {
		let r = e.getHours() >= 12;
		return r && n < 12 ? e.setHours(n + 12, 0, 0, 0) : !r && n === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"H",
		"K",
		"k",
		"t",
		"T"
	];
}, $n = class extends X {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return yn(gn.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Sn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 23;
	}
	set(e, t, n) {
		return e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"K",
		"k",
		"t",
		"T"
	];
}, er = class extends X {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return yn(gn.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Sn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.getHours() >= 12 && n < 12 ? e.setHours(n + 12, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"h",
		"H",
		"k",
		"t",
		"T"
	];
}, tr = class extends X {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return yn(gn.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Sn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 24;
	}
	set(e, t, n) {
		let r = n <= 24 ? n % 24 : n;
		return e.setHours(r, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"H",
		"K",
		"t",
		"T"
	];
}, nr = class extends X {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return yn(gn.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return Sn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, rr = class extends X {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return yn(gn.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return Sn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, ir = class extends X {
	priority = 30;
	parse(e, t) {
		return vn(Sn(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, ar = class extends X {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return bn(_n.basicOptionalMinutes, e);
			case "XX": return bn(_n.basic, e);
			case "XXXX": return bn(_n.basicOptionalSeconds, e);
			case "XXXXX": return bn(_n.extendedOptionalSeconds, e);
			default: return bn(_n.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : G(e, e.getTime() - Ue(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, or = class extends X {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return bn(_n.basicOptionalMinutes, e);
			case "xx": return bn(_n.basic, e);
			case "xxxx": return bn(_n.basicOptionalSeconds, e);
			case "xxxxx": return bn(_n.extendedOptionalSeconds, e);
			default: return bn(_n.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : G(e, e.getTime() - Ue(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, sr = class extends X {
	priority = 40;
	parse(e) {
		return xn(e);
	}
	set(e, t, n) {
		return [G(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, cr = class extends X {
	priority = 20;
	parse(e) {
		return xn(e);
	}
	set(e, t, n) {
		return [G(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, lr = {
	G: new hn(),
	y: new Dn(),
	Y: new On(),
	R: new kn(),
	u: new An(),
	Q: new jn(),
	q: new Mn(),
	M: new Nn(),
	L: new Pn(),
	w: new In(),
	I: new Rn(),
	d: new Vn(),
	D: new Hn(),
	E: new Wn(),
	e: new Gn(),
	c: new Kn(),
	i: new Jn(),
	a: new Yn(),
	b: new Xn(),
	B: new Zn(),
	h: new Qn(),
	H: new $n(),
	K: new er(),
	k: new tr(),
	m: new nr(),
	s: new rr(),
	S: new ir(),
	X: new ar(),
	x: new or(),
	t: new sr(),
	T: new cr()
}, ur = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, dr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, fr = /^'([^]*?)'?$/, pr = /''/g, mr = /\S/, hr = /[a-zA-Z]/;
function gr(e, t, n, r) {
	let i = () => G(r?.in || n, NaN), a = en(), o = r?.locale ?? a.locale ?? Ct, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : K(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new mn(r?.in, n)], d = t.match(dr).map((e) => {
		let t = e[0];
		if (t in Lt) {
			let n = Lt[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(ur), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && Ht(n) && Ut(n, t, e), !r?.useAdditionalDayOfYearTokens && Vt(n) && Ut(n, t, e);
		let a = n[0], s = lr[a];
		if (s) {
			let { incompatibleTokens: t } = s;
			if (Array.isArray(t)) {
				let e = f.find((e) => t.includes(e.token) || e.token === a);
				if (e) throw RangeError(`The format string mustn't contain \`${e.fullToken}\` and \`${n}\` at the same time`);
			} else if (s.incompatibleTokens === "*" && f.length > 0) throw RangeError(`The format string mustn't contain \`${n}\` and any other token at the same time`);
			f.push({
				token: a,
				fullToken: n
			});
			let r = s.run(e, n, o.match, l);
			if (!r) return i();
			u.push(r.setter), e = r.rest;
		} else {
			if (a.match(hr)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = _r(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && mr.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = K(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function _r(e) {
	return e.match(fr)[1].replace(pr, "'");
}
//#endregion
//#region node_modules/date-fns/isSameQuarter.js
function vr(e, t, n) {
	let [r, i] = We(n?.in, e, t);
	return +it(r) == +it(i);
}
//#endregion
//#region node_modules/date-fns/subDays.js
function yr(e, t, n) {
	return Ne(e, -t, n);
}
//#endregion
//#region node_modules/date-fns/setMonth.js
function br(e, t, n) {
	let r = K(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = G(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = $t(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region node_modules/date-fns/set.js
function Z(e, t, n) {
	let r = K(e, n?.in);
	return isNaN(+r) ? G(n?.in || e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = br(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
//#endregion
//#region node_modules/date-fns/setHours.js
function xr(e, t, n) {
	let r = K(e, n?.in);
	return r.setHours(t), r;
}
//#endregion
//#region node_modules/date-fns/setMilliseconds.js
function Sr(e, t, n) {
	let r = K(e, n?.in);
	return r.setMilliseconds(t), r;
}
//#endregion
//#region node_modules/date-fns/setMinutes.js
function Cr(e, t, n) {
	let r = K(e, n?.in);
	return r.setMinutes(t), r;
}
//#endregion
//#region node_modules/date-fns/setSeconds.js
function wr(e, t, n) {
	let r = K(e, n?.in);
	return r.setSeconds(t), r;
}
//#endregion
//#region node_modules/date-fns/setYear.js
function Tr(e, t, n) {
	let r = K(e, n?.in);
	return isNaN(+r) ? G(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region node_modules/date-fns/subMonths.js
function Er(e, t, n) {
	return Pe(e, -t, n);
}
//#endregion
//#region node_modules/date-fns/sub.js
function Dr(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = yr(Er(e, i + r * 12, n), o + a * 7, n), d = (l + (c + s * 60) * 60) * 1e3;
	return G(n?.in || e, +u - d);
}
//#endregion
//#region node_modules/date-fns/subYears.js
function Or(e, t, n) {
	return Ye(e, -t, n);
}
//#endregion
//#region node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js
function kr() {
	let e = ae();
	return p(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img",
		...e
	}, [
		F("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }),
		F("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		F("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		F("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" })
	]);
}
kr.compatConfig = { MODE: 3 };
function Ar() {
	return p(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [F("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }), F("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
Ar.compatConfig = { MODE: 3 };
function jr() {
	return p(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [F("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
jr.compatConfig = { MODE: 3 };
function Mr() {
	return p(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [F("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" })]);
}
Mr.compatConfig = { MODE: 3 };
function Nr() {
	return p(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [F("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }), F("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" })]);
}
Nr.compatConfig = { MODE: 3 };
function Pr() {
	return p(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [F("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
Pr.compatConfig = { MODE: 3 };
function Fr() {
	return p(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [F("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
Fr.compatConfig = { MODE: 3 };
var Ir = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Lr = (e, t, n) => zr(e, t, n) || Q(), Rr = (e, t, n) => {
	let r = t.dateInTz ? Ir(new Date(e), t.dateInTz) : Q(e);
	return n ? ki(r, !0) : r;
}, zr = (e, t, n) => {
	if (!e) return null;
	let r = n ? ki(Q(e), !0) : Q(e);
	return t ? t.exactMatch ? Rr(e, t, n) : Ir(r, t.timezone) : r;
}, Br = (e) => {
	let t = new Date(e.getFullYear(), 0, 1).getTimezoneOffset();
	return e.getTimezoneOffset() < t;
}, Vr = (e, t) => {
	if (!e) return 0;
	let n = /* @__PURE__ */ new Date(), r = new Date(n.toLocaleString("en-US", { timeZone: "UTC" })), i = new Date(n.toLocaleString("en-US", { timeZone: e })), a = (Br(t ?? i) ? i : t ?? i).getTimezoneOffset() / 60;
	return (r - +i) / 36e5 - a;
}, Hr = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Hr || {}), Ur = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Ur || {}), Wr = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Wr || {}), Gr = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Gr || {}), Kr = [
	"timestamp",
	"date",
	"iso"
], qr = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(qr || {}), Jr = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Jr || {}), Yr = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(Yr || {});
function Xr(e) {
	return (t) => {
		let n = new Intl.DateTimeFormat(e, {
			weekday: "short",
			timeZone: "UTC"
		}).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`));
		return e === "ar" ? n.slice(2, 5) : n.slice(0, 2);
	};
}
function Zr(e) {
	return (t) => Xt(Ir(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
var Qr = (e, t, n) => {
	let r = [
		1,
		2,
		3,
		4,
		5,
		6,
		7
	], i;
	if (e !== null) try {
		i = r.map(Zr(e));
	} catch {
		i = r.map(Xr(t));
	}
	else i = r.map(Xr(t));
	let a = i.slice(0, n), o = i.slice(n + 1, i.length);
	return [i[n]].concat(...o, ...a);
}, $r = (e, t, n) => {
	let r = [];
	for (let n = +e[0]; n <= +e[1]; n++) r.push({
		value: +n,
		text: _i(n, t)
	});
	return n ? r.reverse() : r;
}, ei = (e, t, n) => {
	let r = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	].map((e) => {
		let t = e < 10 ? `0${e}` : e;
		return /* @__PURE__ */ new Date(`2017-${t}-01T00:00:00+00:00`);
	});
	if (e !== null) try {
		let t = n === "long" ? "LLLL" : "LLL";
		return r.map((n, r) => {
			let i = Xt(Ir(n, "UTC"), t, { locale: e });
			return {
				text: i.charAt(0).toUpperCase() + i.substring(1),
				value: r
			};
		});
	} catch {}
	let i = new Intl.DateTimeFormat(t, {
		month: n,
		timeZone: "UTC"
	});
	return r.map((e, t) => {
		let n = i.format(e);
		return {
			text: n.charAt(0).toUpperCase() + n.substring(1),
			value: t
		};
	});
}, ti = (e) => [
	12,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11
][e], ni = (e) => {
	let t = W(e);
	return t?.$el ? t?.$el : t;
}, ri = (e) => ({
	type: "dot",
	...e ?? {}
}), ii = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, ai = {
	prop: (e) => `"${e}" prop must be enabled!`,
	dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, oi = (e) => e, si = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, ci = (e) => e === null, li = (e) => {
	if (e) return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, ui = (e) => {
	let t = [], n = (e) => e.filter((e) => e);
	for (let r = 0; r < e.length; r += 3) {
		let i = [
			e[r],
			e[r + 1],
			e[r + 2]
		];
		t.push(n(i));
	}
	return t;
}, di = (e, t, n) => {
	let r = n != null, i = t != null;
	if (!r && !i) return !1;
	let a = +n, o = +t;
	return r && i ? +e > a || +e < o : r ? +e > a : i ? +e < o : !1;
}, fi = (e, t) => ui(e).map((e) => e.map((e) => {
	let { active: n, disabled: r, isBetween: i, highlighted: a } = t(e);
	return {
		...e,
		active: n,
		disabled: r,
		className: {
			dp__overlay_cell_active: n,
			dp__overlay_cell: !n,
			dp__overlay_cell_disabled: r,
			dp__overlay_cell_pad: !0,
			dp__overlay_cell_active_disabled: r && n,
			dp__cell_in_between: i,
			"dp--highlighted": a
		}
	};
})), pi = (e, t, n = !1) => {
	e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
}, mi = () => [
	"a[href]",
	"area[href]",
	"input:not([disabled]):not([type='hidden'])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"[tabindex]:not([tabindex='-1'])",
	"[data-datepicker-instance]"
].join(", ");
function hi(e, t) {
	let n = [...document.querySelectorAll(mi())];
	n = n.filter((t) => !e.contains(t) || t.hasAttribute("data-datepicker-instance"));
	let r = n.indexOf(e);
	if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length)) return n[r + (t ? -1 : 1)];
}
var gi = (e, t) => e?.querySelector(`[data-dp-element="${t}"]`), _i = (e, t) => new Intl.NumberFormat(t, {
	useGrouping: !1,
	style: "decimal"
}).format(e), vi = (e, t) => Xt(e, t ?? Yr.DATE), yi = (e) => Array.isArray(e), bi = (e, t, n) => t.get(vi(e, n)), xi = (e, t) => e ? t ? t instanceof Map ? !!bi(e, t) : t(Q(e)) : !1 : !0, Si = (e, t, n = !1, r) => {
	if (e.key === Jr.enter || e.key === Jr.space) return n && e.preventDefault(), t();
	if (r) return r(e);
}, Ci = () => "ontouchstart" in window || navigator.maxTouchPoints > 0, wi = (e, t) => e ? Yr.MONTH_AND_YEAR : t ? Yr.YEAR : Yr.DATE, Ti = (e) => e < 10 ? `0${e}` : e, Ei = (e, t, n, r, i, a) => {
	let o = gr(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: a });
	return Qe(o) && Ze(o) ? r || i ? o : Z(o, {
		hours: +n.hours,
		minutes: +n?.minutes,
		seconds: +n?.seconds,
		milliseconds: 0
	}) : null;
}, Di = (e, t, n, r, i, a) => {
	let o = Array.isArray(n) ? n[0] : n;
	if (typeof t == "string") return Ei(e, t, o, r, i, a);
	if (Array.isArray(t)) {
		let n = null;
		for (let s of t) if (n = Ei(e, s, o, r, i, a), n) break;
		return n;
	}
	return typeof t == "function" ? t(e) : null;
}, Q = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Oi = (e, t, n) => {
	if (t) {
		let t = (e.getMonth() + 1).toString().padStart(2, "0"), r = e.getDate().toString().padStart(2, "0"), i = e.getHours().toString().padStart(2, "0"), a = e.getMinutes().toString().padStart(2, "0"), o = n ? e.getSeconds().toString().padStart(2, "0") : "00";
		return `${e.getFullYear()}-${t}-${r}T${i}:${a}:${o}.000Z`;
	}
	let r = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
	return new Date(r).toISOString();
}, ki = (e, t) => {
	let n = Z(Q(JSON.parse(JSON.stringify(e))), {
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0
	});
	return t ? ot(n) : n;
}, Ai = (e, t, n, r) => {
	let i = e ? Q(e) : Q();
	return (t || t === 0) && (i = xr(i, +t)), (n || n === 0) && (i = Cr(i, +n)), (r || r === 0) && (i = wr(i, +r)), Sr(i, 0);
}, ji = (e, t) => !e || !t ? !1 : sn(ki(e), ki(t)), $ = (e, t) => !e || !t ? !1 : cn(ki(e), ki(t)), Mi = (e, t) => !e || !t ? !1 : on(ki(e), ki(t)), Ni = (e, t, n) => e?.[0] && e?.[1] ? Mi(n, e[0]) && ji(n, e[1]) : e?.[0] && t ? Mi(n, e[0]) && ji(n, t) || ji(n, e[0]) && Mi(n, t) : !1, Pi = (e) => ki(Z(new Date(e), { date: 1 })), Fi = (e, t, n) => t && (n || n === 0) ? Object.fromEntries([
	"hours",
	"minutes",
	"seconds"
].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])) : {
	hours: isNaN(+e.hours) ? void 0 : +e.hours,
	minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
	seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, Ii = (e) => ({
	hours: tn(e),
	minutes: rn(e),
	seconds: an(e)
}), Li = (e, t) => {
	if (t) {
		let n = Y(Q(t));
		if (n > e) return 12;
		if (n === e) return J(Q(t));
	}
}, Ri = (e, t) => {
	if (t) {
		let n = Y(Q(t));
		return n < e ? -1 : n === e ? J(Q(t)) : void 0;
	}
}, zi = (e) => {
	if (e) return Y(Q(e));
}, Bi = (e, t) => rt({
	start: Mi(e, t) ? t : e,
	end: Mi(t, e) ? t : e
}), Vi = (e) => {
	let t = Pe(e, 1);
	return {
		month: J(t),
		year: Y(t)
	};
}, Hi = (e, t) => [Be(e, { weekStartsOn: +t }), lt(e, { weekStartsOn: +t })], Ui = (e, t) => {
	let n = {
		hours: tn(Q()),
		minutes: rn(Q()),
		seconds: t ? an(Q()) : 0
	};
	return Object.assign(n, e);
}, Wi = (e, t, n) => [Z(Q(e), { date: 1 }), Z(Q(), {
	month: t,
	year: n,
	date: 1
})], Gi = (e, t, n) => {
	let r = e ? Q(e) : Q();
	return (t || t === 0) && (r = br(r, t)), n && (r = Tr(r, n)), r;
}, Ki = (e, t, n, r, i) => {
	if (!r || i && !t || !i && !n) return !1;
	let a = i ? Pe(e, 1) : Er(e, 1), o = [J(a), Y(a)];
	return i ? !Ji(...o, t) : !qi(...o, n);
}, qi = (e, t, n) => ji(...Wi(n, e, t)) || $(...Wi(n, e, t)), Ji = (e, t, n) => Mi(...Wi(n, e, t)) || $(...Wi(n, e, t)), Yi = (e, t, n, r, i, a, o) => {
	if (typeof t == "function" && !o) return t(e);
	let s = n ? { locale: n } : void 0;
	return Array.isArray(e) ? `${Xt(e[0], a, s)}${i && !e[1] ? "" : r}${e[1] ? Xt(e[1], a, s) : ""}` : Xt(e, a, s);
}, Xi = (e) => {
	if (e) return null;
	throw Error(ai.prop("partial-range"));
}, Zi = (e, t) => {
	if (t) return e();
	throw Error(ai.prop("range"));
}, Qi = (e) => Array.isArray(e) ? Qe(e[0]) && (!e[1] || Qe(e[1])) : e ? Qe(e) : !1, $i = (e, t) => Z(t ?? Q(), {
	hours: +e.hours || 0,
	minutes: +e.minutes || 0,
	seconds: +e.seconds || 0
}), ea = (e, t, n, r) => {
	if (!e) return !0;
	if (r) {
		let r = n === "max" ? sn(e, t) : on(e, t), i = {
			seconds: 0,
			milliseconds: 0
		};
		return r || cn(Z(e, i), Z(t, i));
	}
	return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, ta = (e, t, n) => e ? $i(e, t) : Q(n ?? t), na = (e, t, n, r, i) => {
	if (Array.isArray(r)) {
		let a = ta(e, r[0], t), o = ta(e, r[1], t);
		return ea(r[0], a, n, !!t) && ea(r[1], o, n, !!t) && i;
	}
	return ea(r, ta(e, r, t), n, !!t) && i;
}, ra = (e) => Z(Q(), Ii(e)), ia = (e, t, n) => {
	if (e instanceof Map) {
		let r = `${Ti(n + 1)}-${t}`;
		return e.size ? e.has(r) : !1;
	}
	return typeof e == "function" && e(ki(Z(Q(), {
		month: n,
		year: t
	}), !0));
}, aa = (e, t, n) => {
	if (e instanceof Map) {
		let r = `${Ti(n + 1)}-${t}`;
		return !e.size || e.has(r);
	}
	return !0;
}, oa = (e, t, n) => typeof e == "function" ? e({
	month: t,
	year: n
}) : !!e.months.find((e) => e.month === t && e.year === n), sa = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), ca = (e) => `dp-${Xt(e, "yyyy-MM-dd")}`, la = (e, t) => ({
	before: yr(ki(t), e),
	after: Ne(ki(t), e)
}), ua = (e, t) => t < +e[0] || t > +e[1], da = z({
	menuFocused: !1,
	shiftKeyInMenu: !1
}), fa = () => ({
	control: B(() => ({
		shiftKeyInMenu: da.shiftKeyInMenu,
		menuFocused: da.menuFocused
	})),
	setMenuFocused: (e) => {
		da.menuFocused = e;
	},
	setShiftKey: (e) => {
		da.shiftKeyInMenu !== e && (da.shiftKeyInMenu = e);
	}
}), pa = z({
	monthYear: [],
	calendar: [],
	time: [],
	actionRow: [],
	selectionGrid: [],
	timePicker: {
		0: [],
		1: []
	},
	monthPicker: []
}), ma = A(null), ha = A(!1), ga = A(!1), _a = A(!1), va = A(!1), ya = A(0), ba = A(0), xa = () => {
	let e = B(() => ha.value ? [...pa.selectionGrid, pa.actionRow].filter((e) => e.length) : ga.value ? [
		...pa.timePicker[0],
		...pa.timePicker[1],
		va.value ? [] : [ma.value],
		pa.actionRow
	].filter((e) => e.length) : _a.value ? [...pa.monthPicker, pa.actionRow] : [
		pa.monthYear,
		...pa.calendar,
		pa.time,
		pa.actionRow
	].filter((e) => e.length)), t = (t) => {
		ya.value = t ? ya.value + 1 : ya.value - 1;
		let n = null;
		e.value[ba.value] && (n = e.value[ba.value][ya.value]), !n && e.value[ba.value + (t ? 1 : -1)] ? (ba.value += t ? 1 : -1, ya.value = t ? 0 : e.value[ba.value].length - 1) : n || (ya.value = t ? ya.value - 1 : ya.value + 1);
	}, n = (t) => {
		ba.value === 0 && !t || ba.value === e.value.length && t || (ba.value = t ? ba.value + 1 : ba.value - 1, e.value[ba.value] ? e.value[ba.value] && !e.value[ba.value][ya.value] && ya.value !== 0 && (ya.value = e.value[ba.value].length - 1) : ba.value = t ? ba.value - 1 : ba.value + 1);
	}, r = (t) => {
		let n = null;
		e.value[ba.value] && (n = e.value[ba.value][ya.value]), n ? n.focus({ preventScroll: !ha.value }) : ya.value = t ? ya.value - 1 : ya.value + 1;
	}, i = () => {
		t(!0), r(!0);
	}, a = () => {
		t(!1), r(!1);
	}, o = () => {
		n(!1), r(!0);
	}, s = () => {
		n(!0), r(!0);
	}, c = (e, t) => {
		pa[t] = e;
	}, l = (e, t) => {
		pa[t] = e;
	}, u = () => {
		ya.value = 0, ba.value = 0;
	};
	return {
		buildMatrix: c,
		buildMultiLevelMatrix: l,
		setTimePickerBackRef: (e) => {
			ma.value = e;
		},
		setSelectionGrid: (e) => {
			ha.value = e, u(), e || (pa.selectionGrid = []);
		},
		setTimePicker: (e, t = !1) => {
			ga.value = e, va.value = t, u(), e || (pa.timePicker[0] = [], pa.timePicker[1] = []);
		},
		setTimePickerElements: (e, t = 0) => {
			pa.timePicker[t] = e;
		},
		arrowRight: i,
		arrowLeft: a,
		arrowUp: o,
		arrowDown: s,
		clearArrowNav: () => {
			pa.monthYear = [], pa.calendar = [], pa.time = [], pa.actionRow = [], pa.selectionGrid = [], pa.timePicker[0] = [], pa.timePicker[1] = [], ha.value = !1, ga.value = !1, va.value = !1, _a.value = !1, u(), ma.value = null;
		},
		setMonthPicker: (e) => {
			_a.value = e, u();
		},
		refSets: pa
	};
}, Sa = (e) => ({
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down",
	...e ?? {}
}), Ca = (e) => ({
	toggleOverlay: "Toggle overlay",
	menu: "Datepicker menu",
	input: "Datepicker input",
	openTimePicker: "Open time picker",
	closeTimePicker: "Close time Picker",
	incrementValue: (e) => `Increment ${e}`,
	decrementValue: (e) => `Decrement ${e}`,
	openTpOverlay: (e) => `Open ${e} overlay`,
	amPmButton: "Switch AM/PM mode",
	openYearsOverlay: "Open years overlay",
	openMonthsOverlay: "Open months overlay",
	nextMonth: "Next month",
	prevMonth: "Previous month",
	nextYear: "Next year",
	prevYear: "Previous year",
	day: void 0,
	weekDay: void 0,
	clearInput: "Clear value",
	calendarIcon: "Calendar icon",
	timePicker: "Time picker",
	monthPicker: (e) => `Month picker${e ? " overlay" : ""}`,
	yearPicker: (e) => `Year picker${e ? " overlay" : ""}`,
	timeOverlay: (e) => `${e} overlay`,
	...e ?? {}
}), wa = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Ta = (e) => {
	let t = typeof e == "object" && e, n = {
		static: !0,
		solo: !1
	};
	if (!e) return {
		...n,
		count: wa(!1)
	};
	let r = t ? e : {}, i = wa(t ? r.count ?? !0 : e);
	return Object.assign(n, r, { count: i });
}, Ea = (e, t, n) => e || (typeof n == "string" ? n : t), Da = (e) => typeof e == "boolean" ? e ? Sa({}) : !1 : Sa(e), Oa = (e) => {
	let t = {
		enterSubmit: !0,
		tabSubmit: !0,
		openMenu: "open",
		selectOnFocus: !1,
		rangeSeparator: " - ",
		escClose: !0
	};
	return typeof e == "object" ? {
		...t,
		...e ?? {},
		enabled: !0
	} : {
		...t,
		enabled: e
	};
}, ka = (e) => ({
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	},
	...e ?? {}
}), Aa = (e) => ({
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	...e ?? {}
}), ja = (e) => {
	let t = { input: !1 };
	return typeof e == "object" ? {
		...t,
		...e ?? {},
		enabled: !0
	} : {
		enabled: e,
		...t
	};
}, Ma = (e) => ({
	allowStopPropagation: !0,
	closeOnScroll: !1,
	modeHeight: 255,
	allowPreventDefault: !1,
	closeOnClearValue: !0,
	closeOnAutoApply: !0,
	noSwipe: !1,
	keepActionRow: !1,
	onClickOutside: void 0,
	tabOutClosesMenu: !0,
	arrowLeft: void 0,
	keepViewOnOffsetClick: !1,
	timeArrowHoldThreshold: 0,
	shadowDom: !1,
	mobileBreakpoint: 600,
	setDateOnMenuClose: !1,
	...e ?? {}
}), Na = (e) => {
	let t = {
		dates: Array.isArray(e) ? e.map((e) => Q(e)) : [],
		years: [],
		months: [],
		quarters: [],
		weeks: [],
		weekdays: [],
		options: { highlightDisabled: !1 }
	};
	return typeof e == "function" ? e : {
		...t,
		...e ?? {}
	};
}, Pa = (e) => typeof e == "object" ? {
	type: e?.type ?? "local",
	hideOnOffsetDates: e?.hideOnOffsetDates ?? !1
} : {
	type: e,
	hideOnOffsetDates: !1
}, Fa = (e) => {
	let t = {
		noDisabledRange: !1,
		showLastInRange: !0,
		minMaxRawRange: !1,
		partialRange: !0,
		disableTimeRangeValidation: !1,
		maxRange: void 0,
		minRange: void 0,
		autoRange: void 0,
		fixedStart: !1,
		fixedEnd: !1
	};
	return typeof e == "object" ? {
		enabled: !0,
		...t,
		...e
	} : {
		enabled: e,
		...t
	};
}, Ia = (e) => e ? typeof e == "string" ? {
	timezone: e,
	exactMatch: !1,
	dateInTz: void 0,
	emitTimezone: void 0,
	convertModel: !0
} : {
	timezone: e.timezone,
	exactMatch: e.exactMatch ?? !1,
	dateInTz: e.dateInTz ?? void 0,
	emitTimezone: e.emitTimezone ?? void 0,
	convertModel: e.convertModel ?? !0
} : {
	timezone: void 0,
	exactMatch: !1,
	emitTimezone: void 0
}, La = (e, t, n, r) => new Map(e.map((e) => {
	let i = Lr(e, t, r);
	return [vi(i, n), i];
})), Ra = (e, t) => e.length ? new Map(e.map((e) => [vi(Lr(e.date, t), Yr.DATE), e])) : null, za = (e) => {
	let t = wi(e.isMonthPicker, e.isYearPicker);
	return {
		minDate: zr(e.minDate, e.timezone, e.isSpecific),
		maxDate: zr(e.maxDate, e.timezone, e.isSpecific),
		disabledDates: yi(e.disabledDates) ? La(e.disabledDates, e.timezone, t, e.isSpecific) : e.disabledDates,
		allowedDates: yi(e.allowedDates) ? La(e.allowedDates, e.timezone, t, e.isSpecific) : null,
		highlight: typeof e.highlight == "object" && yi(e.highlight?.dates) ? La(e.highlight.dates, e.timezone, t) : e.highlight,
		markers: Ra(e.markers, e.timezone)
	};
}, Ba = (e) => typeof e == "boolean" ? {
	enabled: e,
	dragSelect: !0,
	limit: null
} : {
	enabled: !!e,
	limit: e.limit ? +e.limit : null,
	dragSelect: e.dragSelect ?? !0
}, Va = (e) => ({ ...Object.fromEntries(Object.keys(e).map((t) => {
	let n = t, r = e[n];
	return [t, typeof e[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
})) }), Ha = (e) => {
	let t = () => {
		let t = e.enableSeconds ? ":ss" : "", n = e.enableMinutes ? ":mm" : "";
		return e.is24 ? `HH${n}${t}` : `hh${n}${t} aa`;
	}, n = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${g.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy", r = (t) => Ui(t, e.enableSeconds), i = () => b.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, a = B(() => Ta(e.multiCalendars)), o = B(() => i()), s = B(() => Ca(e.ariaLabels)), c = B(() => ka(e.filters)), l = B(() => Da(e.transitions)), u = B(() => Aa(e.actionRow)), d = B(() => Ea(e.previewFormat, e.format, n())), f = B(() => Oa(e.textInput)), p = B(() => ja(e.inline)), m = B(() => Ma(e.config)), h = B(() => Na(e.highlight)), g = B(() => Pa(e.weekNumbers)), _ = B(() => Ia(e.timezone)), v = B(() => Ba(e.multiDates)), y = B(() => za({
		minDate: e.minDate,
		maxDate: e.maxDate,
		disabledDates: e.disabledDates,
		allowedDates: e.allowedDates,
		highlight: h.value,
		markers: e.markers,
		timezone: _.value,
		isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker,
		isMonthPicker: e.monthPicker,
		isYearPicker: e.yearPicker
	})), b = B(() => Fa(e.range));
	return {
		defaultedTransitions: l,
		defaultedMultiCalendars: a,
		defaultedStartTime: o,
		defaultedAriaLabels: s,
		defaultedFilters: c,
		defaultedActionRow: u,
		defaultedPreviewFormat: d,
		defaultedTextInput: f,
		defaultedInline: p,
		defaultedConfig: m,
		defaultedHighlight: h,
		defaultedWeekNumbers: g,
		defaultedRange: b,
		propDates: y,
		defaultedTz: _,
		defaultedMultiDates: v,
		defaultedUI: B(() => Va(e.ui)),
		getDefaultPattern: n,
		getDefaultStartTime: i,
		handleEventPropagation: (e) => {
			m.value.allowStopPropagation && e.stopPropagation(), m.value.allowPreventDefault && e.preventDefault();
		}
	};
}, Ua = (e, t, { isInputFocused: n, isTextInputDate: r }) => {
	let i = A(), { defaultedTextInput: a, defaultedRange: o, defaultedTz: s, defaultedMultiDates: c, getDefaultPattern: l } = Ha(t), u = A(""), d = N(t, "format"), f = N(t, "formatLocale");
	v(i, () => {
		typeof t.onInternalModelChange == "function" && e("internal-model-change", i.value, ae(!0));
	}, { deep: !0 }), v(o, (e, t) => {
		e.enabled !== t.enabled && (i.value = null);
	}), v(d, () => {
		te();
	});
	let p = (e) => s.value.timezone && s.value.convertModel ? Ir(e, s.value.timezone) : e, m = (e) => s.value.timezone && s.value.convertModel ? Le(e, Vr(s.value.timezone, e)) : e, h = (e, n, r = !1) => Yi(e, t.format, t.formatLocale, a.value.rangeSeparator, t.modelAuto, n ?? l(), r), g = (e) => e ? t.modelType ? R(e) : {
		hours: tn(e),
		minutes: rn(e),
		seconds: t.enableSeconds ? an(e) : 0
	} : null, _ = (e) => t.modelType ? R(e) : {
		month: J(e),
		year: Y(e)
	}, y = (e) => Array.isArray(e) ? c.value.enabled ? e.map((e) => b(e, Tr(Q(), e))) : Zi(() => [Tr(Q(), e[0]), e[1] ? Tr(Q(), e[1]) : Xi(o.value.partialRange)], o.value.enabled) : Tr(Q(), +e), b = (e, n) => (typeof e == "string" || typeof e == "number") && t.modelType ? L(e) : n, x = (e) => Array.isArray(e) ? [b(e[0], Ai(null, +e[0].hours, +e[0].minutes, e[0].seconds)), b(e[1], Ai(null, +e[1].hours, +e[1].minutes, e[1].seconds))] : b(e, Ai(null, e.hours, e.minutes, e.seconds)), S = (e) => {
		let t = Z(Q(), { date: 1 });
		return Array.isArray(e) ? c.value.enabled ? e.map((e) => b(e, Gi(t, +e.month, +e.year))) : Zi(() => [b(e[0], Gi(t, +e[0].month, +e[0].year)), b(e[1], e[1] ? Gi(t, +e[1].month, +e[1].year) : Xi(o.value.partialRange))], o.value.enabled) : b(e, Gi(t, +e.month, +e.year));
	}, C = (e) => {
		if (Array.isArray(e)) return e.map((e) => L(e));
		throw Error(ai.dateArr("multi-dates"));
	}, w = (e) => {
		if (Array.isArray(e) && o.value.enabled) {
			let t = e[0], n = e[1];
			return [Q(Array.isArray(t) ? t[0] : null), Array.isArray(n) && n.length ? Q(n[0]) : null];
		}
		return Q(e[0]);
	}, T = (e) => t.modelAuto ? Array.isArray(e) ? [L(e[0]), L(e[1])] : t.autoApply ? [L(e)] : [L(e), null] : Array.isArray(e) ? Zi(() => e[1] ? [L(e[0]), e[1] ? L(e[1]) : Xi(o.value.partialRange)] : [L(e[0])], o.value.enabled) : L(e), E = () => {
		Array.isArray(i.value) && o.value.enabled && i.value.length === 1 && i.value.push(Xi(o.value.partialRange));
	}, D = () => {
		let e = i.value;
		return [R(e[0]), e[1] ? R(e[1]) : Xi(o.value.partialRange)];
	}, O = () => Array.isArray(i.value) ? i.value[1] ? D() : R(oi(i.value[0])) : [], k = () => (i.value || []).map((e) => R(e)), j = (e = !1) => (e || E(), t.modelAuto ? O() : c.value.enabled ? k() : Array.isArray(i.value) ? Zi(() => D(), o.value.enabled) : R(oi(i.value))), M = (e) => !e || Array.isArray(e) && !e.length ? null : t.timePicker ? x(oi(e)) : t.monthPicker ? S(oi(e)) : t.yearPicker ? y(oi(e)) : c.value.enabled ? C(oi(e)) : t.weekPicker ? w(oi(e)) : T(oi(e)), P = (e) => {
		if (r.value) return;
		let t = M(e);
		Qi(oi(t)) ? (i.value = oi(t), te()) : (i.value = null, u.value = "");
	}, F = () => {
		let e = (e) => Xt(e, a.value.format);
		return `${e(i.value[0])} ${a.value.rangeSeparator} ${i.value[1] ? e(i.value[1]) : ""}`;
	}, I = () => n.value && i.value ? Array.isArray(i.value) ? F() : Xt(i.value, a.value.format) : h(i.value), ee = () => i.value ? c.value.enabled ? i.value.map((e) => h(e)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? I() : h(i.value) : "", te = () => {
		!t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? u.value = ee() : u.value = t.format(i.value);
	}, L = (e) => {
		if (t.utc) {
			let n = new Date(e);
			return t.utc === "preserve" ? new Date(n.getTime() + n.getTimezoneOffset() * 6e4) : n;
		}
		return t.modelType ? Kr.includes(t.modelType) ? p(new Date(e)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? p(gr(e, l(), /* @__PURE__ */ new Date(), { locale: f.value })) : p(gr(e, t.modelType, /* @__PURE__ */ new Date(), { locale: f.value })) : p(new Date(e));
	}, R = (e) => e ? t.utc ? Oi(e, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +m(e) : t.modelType === "iso" ? m(e).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? h(m(e)) : h(m(e), t.modelType, !0) : m(e) : "", z = (t, n = !1, r = !1) => {
		if (r) return t;
		e("update:model-value", t), s.value.emitTimezone && n && e("update:model-timezone-value", Array.isArray(t) ? t.map((e) => Ir(oi(e), s.value.emitTimezone)) : Ir(oi(t), s.value.emitTimezone));
	}, B = (e) => Array.isArray(i.value) ? c.value.enabled ? i.value.map((t) => e(t)) : [e(i.value[0]), i.value[1] ? e(i.value[1]) : Xi(o.value.partialRange)] : e(oi(i.value)), ne = () => {
		if (Array.isArray(i.value)) {
			let e = Hi(i.value[0], t.weekStart), n = i.value[1] ? Hi(i.value[1], t.weekStart) : [];
			return [e.map((e) => Q(e)), n.map((e) => Q(e))];
		}
		return Hi(i.value, t.weekStart).map((e) => Q(e));
	}, re = (e, t) => z(oi(B(e)), !1, t), ie = (t) => {
		let n = ne();
		return t ? n : e("update:model-value", ne());
	}, ae = (e = !1) => (e || te(), t.monthPicker ? re(_, e) : t.timePicker ? re(g, e) : t.yearPicker ? re(Y, e) : t.weekPicker ? ie(e) : z(j(e), !0, e));
	return {
		inputValue: u,
		internalModelValue: i,
		checkBeforeEmit: () => i.value ? o.value.enabled ? o.value.partialRange ? i.value.length >= 1 : i.value.length === 2 : !!i.value : !1,
		parseExternalModelValue: P,
		formatInputValue: te,
		emitModelValue: ae
	};
}, Wa = (e, t) => {
	let { defaultedFilters: n, propDates: r } = Ha(e), { validateMonthYearInRange: i } = xs(e), a = (e, t) => {
		let r = e;
		return n.value.months.includes(J(r)) ? (r = t ? Pe(e, 1) : Er(e, 1), a(r, t)) : r;
	}, o = (e, t) => {
		let r = e;
		return n.value.years.includes(Y(r)) ? (r = t ? Ye(e, 1) : Or(e, 1), o(r, t)) : r;
	}, s = (t, r = !1) => {
		let s = Z(Q(), {
			month: e.month,
			year: e.year
		}), l = t ? Pe(s, 1) : Er(s, 1);
		e.disableYearSelect && (l = Tr(l, e.year));
		let u = J(l), d = Y(l);
		n.value.months.includes(u) && (l = a(l, t), u = J(l), d = Y(l)), n.value.years.includes(d) && (l = o(l, t), d = Y(l)), i(u, d, t, e.preventMinMaxNavigation) && c(u, d, r);
	}, c = (e, n, r) => {
		t("update-month-year", {
			month: e,
			year: n,
			fromNav: r
		});
	};
	return {
		handleMonthYearChange: s,
		isDisabled: B(() => (t) => Ki(Z(Q(), {
			month: e.month,
			year: e.year
		}), r.value.maxDate, r.value.minDate, e.preventMinMaxNavigation, t)),
		updateMonthYear: c
	};
}, Ga = {
	multiCalendars: {
		type: [
			Boolean,
			Number,
			String,
			Object
		],
		default: void 0
	},
	modelValue: {
		type: [
			String,
			Date,
			Array,
			Object,
			Number
		],
		default: null
	},
	modelType: {
		type: String,
		default: null
	},
	position: {
		type: String,
		default: "center"
	},
	dark: {
		type: Boolean,
		default: !1
	},
	format: {
		type: [String, Function],
		default: () => null
	},
	autoPosition: {
		type: [Boolean, String],
		default: !0
	},
	altPosition: {
		type: Function,
		default: null
	},
	transitions: {
		type: [Boolean, Object],
		default: !0
	},
	formatLocale: {
		type: Object,
		default: null
	},
	utc: {
		type: [Boolean, String],
		default: !1
	},
	ariaLabels: {
		type: Object,
		default: () => ({})
	},
	offset: {
		type: [Number, String],
		default: 10
	},
	hideNavigation: {
		type: Array,
		default: () => []
	},
	timezone: {
		type: [String, Object],
		default: null
	},
	vertical: {
		type: Boolean,
		default: !1
	},
	disableMonthYearSelect: {
		type: Boolean,
		default: !1
	},
	disableYearSelect: {
		type: Boolean,
		default: !1
	},
	dayClass: {
		type: Function,
		default: null
	},
	yearRange: {
		type: Array,
		default: () => [1900, 2100]
	},
	enableTimePicker: {
		type: Boolean,
		default: !0
	},
	autoApply: {
		type: Boolean,
		default: !1
	},
	disabledDates: {
		type: [Array, Function],
		default: () => []
	},
	monthNameFormat: {
		type: String,
		default: "short"
	},
	startDate: {
		type: [Date, String],
		default: null
	},
	startTime: {
		type: [Object, Array],
		default: null
	},
	hideOffsetDates: {
		type: Boolean,
		default: !1
	},
	noToday: {
		type: Boolean,
		default: !1
	},
	disabledWeekDays: {
		type: Array,
		default: () => []
	},
	allowedDates: {
		type: Array,
		default: null
	},
	nowButtonLabel: {
		type: String,
		default: "Now"
	},
	markers: {
		type: Array,
		default: () => []
	},
	escClose: {
		type: Boolean,
		default: !0
	},
	spaceConfirm: {
		type: Boolean,
		default: !0
	},
	monthChangeOnArrows: {
		type: Boolean,
		default: !0
	},
	presetDates: {
		type: Array,
		default: () => []
	},
	flow: {
		type: Array,
		default: () => []
	},
	partialFlow: {
		type: Boolean,
		default: !1
	},
	preventMinMaxNavigation: {
		type: Boolean,
		default: !1
	},
	reverseYears: {
		type: Boolean,
		default: !1
	},
	weekPicker: {
		type: Boolean,
		default: !1
	},
	filters: {
		type: Object,
		default: () => ({})
	},
	arrowNavigation: {
		type: Boolean,
		default: !1
	},
	highlight: {
		type: [Function, Object],
		default: null
	},
	teleport: {
		type: [
			Boolean,
			String,
			Object
		],
		default: null
	},
	teleportCenter: {
		type: Boolean,
		default: !1
	},
	locale: {
		type: String,
		default: "en-Us"
	},
	weekNumName: {
		type: String,
		default: "W"
	},
	weekStart: {
		type: [Number, String],
		default: 1
	},
	weekNumbers: {
		type: [
			String,
			Function,
			Object
		],
		default: null
	},
	monthChangeOnScroll: {
		type: [Boolean, String],
		default: !0
	},
	dayNames: {
		type: [Function, Array],
		default: null
	},
	monthPicker: {
		type: Boolean,
		default: !1
	},
	customProps: {
		type: Object,
		default: null
	},
	yearPicker: {
		type: Boolean,
		default: !1
	},
	modelAuto: {
		type: Boolean,
		default: !1
	},
	selectText: {
		type: String,
		default: "Select"
	},
	cancelText: {
		type: String,
		default: "Cancel"
	},
	previewFormat: {
		type: [String, Function],
		default: () => ""
	},
	multiDates: {
		type: [Object, Boolean],
		default: !1
	},
	ignoreTimeValidation: {
		type: Boolean,
		default: !1
	},
	minDate: {
		type: [Date, String],
		default: null
	},
	maxDate: {
		type: [Date, String],
		default: null
	},
	minTime: {
		type: Object,
		default: null
	},
	maxTime: {
		type: Object,
		default: null
	},
	name: {
		type: String,
		default: null
	},
	placeholder: {
		type: String,
		default: ""
	},
	hideInputIcon: {
		type: Boolean,
		default: !1
	},
	clearable: {
		type: Boolean,
		default: !0
	},
	alwaysClearable: {
		type: Boolean,
		default: !1
	},
	state: {
		type: Boolean,
		default: null
	},
	required: {
		type: Boolean,
		default: !1
	},
	autocomplete: {
		type: String,
		default: "off"
	},
	timePicker: {
		type: Boolean,
		default: !1
	},
	enableSeconds: {
		type: Boolean,
		default: !1
	},
	is24: {
		type: Boolean,
		default: !0
	},
	noHoursOverlay: {
		type: Boolean,
		default: !1
	},
	noMinutesOverlay: {
		type: Boolean,
		default: !1
	},
	noSecondsOverlay: {
		type: Boolean,
		default: !1
	},
	hoursGridIncrement: {
		type: [String, Number],
		default: 1
	},
	minutesGridIncrement: {
		type: [String, Number],
		default: 5
	},
	secondsGridIncrement: {
		type: [String, Number],
		default: 5
	},
	hoursIncrement: {
		type: [Number, String],
		default: 1
	},
	minutesIncrement: {
		type: [Number, String],
		default: 1
	},
	secondsIncrement: {
		type: [Number, String],
		default: 1
	},
	range: {
		type: [Boolean, Object],
		default: !1
	},
	uid: {
		type: String,
		default: null
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	readonly: {
		type: Boolean,
		default: !1
	},
	inline: {
		type: [Boolean, Object],
		default: !1
	},
	textInput: {
		type: [Boolean, Object],
		default: !1
	},
	sixWeeks: {
		type: [Boolean, String],
		default: !1
	},
	actionRow: {
		type: Object,
		default: () => ({})
	},
	focusStartDate: {
		type: Boolean,
		default: !1
	},
	disabledTimes: {
		type: [Function, Array],
		default: void 0
	},
	timePickerInline: {
		type: Boolean,
		default: !1
	},
	calendar: {
		type: Function,
		default: null
	},
	config: {
		type: Object,
		default: void 0
	},
	quarterPicker: {
		type: Boolean,
		default: !1
	},
	yearFirst: {
		type: Boolean,
		default: !1
	},
	loading: {
		type: Boolean,
		default: !1
	},
	onInternalModelChange: {
		type: [Function, Object],
		default: null
	},
	enableMinutes: {
		type: Boolean,
		default: !0
	},
	ui: {
		type: Object,
		default: () => ({})
	}
}, Ka = {
	...Ga,
	shadow: {
		type: Boolean,
		default: !1
	},
	flowStep: {
		type: Number,
		default: 0
	},
	internalModelValue: {
		type: [Date, Array],
		default: null
	},
	noOverlayFocus: {
		type: Boolean,
		default: !1
	},
	collapse: {
		type: Boolean,
		default: !1
	},
	menuWrapRef: {
		type: Object,
		default: null
	},
	getInputRect: {
		type: Function,
		default: () => ({})
	},
	isTextInputDate: {
		type: Boolean,
		default: !1
	},
	isMobile: {
		type: Boolean,
		default: void 0
	}
}, qa = ["title"], Ja = ["disabled"], Ya = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "ActionRow",
	props: {
		menuMount: {
			type: Boolean,
			default: !1
		},
		calendarWidth: {
			type: Number,
			default: 0
		},
		...Ka
	},
	emits: [
		"close-picker",
		"select-date",
		"select-now",
		"invalid-select"
	],
	setup(e, { emit: t }) {
		let r = t, a = e, { defaultedActionRow: o, defaultedPreviewFormat: s, defaultedMultiCalendars: l, defaultedTextInput: f, defaultedInline: m, defaultedRange: h, defaultedMultiDates: g } = Ha(a), { isTimeValid: _, isMonthValid: v } = xs(a), { buildMatrix: b } = xa(), x = A(null), S = A(null), C = A(!1), w = A({}), E = A(null), O = A(null);
		c(() => {
			a.arrowNavigation && b([ni(x), ni(S)], "actionRow"), k(), window.addEventListener("resize", k);
		}), d(() => {
			window.removeEventListener("resize", k);
		});
		let k = () => {
			C.value = !1, setTimeout(() => {
				let e = E.value?.getBoundingClientRect(), t = O.value?.getBoundingClientRect();
				e && t && (w.value.maxWidth = `${t.width - e.width - 20}px`), C.value = !0;
			}, 0);
		}, j = B(() => h.value.enabled && !h.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), M = B(() => !_.value(a.internalModelValue) || !v.value(a.internalModelValue) || !j.value), N = () => {
			let e = s.value;
			return a.timePicker || a.monthPicker, e(oi(a.internalModelValue));
		}, P = () => {
			let e = a.internalModelValue;
			return l.value.count > 0 ? `${I(e[0])} - ${I(e[1])}` : [I(e[0]), I(e[1])];
		}, I = (e) => Yi(e, s.value, a.formatLocale, f.value.rangeSeparator, a.modelAuto, s.value), ee = B(() => !a.internalModelValue || !a.menuMount ? "" : typeof s.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? P() : g.value.enabled ? a.internalModelValue.map((e) => `${I(e)}`) : a.modelAuto ? `${I(a.internalModelValue[0])}` : `${I(a.internalModelValue[0])} -` : I(a.internalModelValue) : N()), te = () => g.value.enabled ? "; " : " - ", L = B(() => Array.isArray(ee.value) ? ee.value.join(te()) : ee.value), R = () => {
			_.value(a.internalModelValue) && v.value(a.internalModelValue) && j.value ? r("select-date") : r("invalid-select");
		};
		return (e, t) => (p(), H("div", {
			ref_key: "actionRowRef",
			ref: O,
			class: "dp__action_row"
		}, [e.$slots["action-row"] ? u(e.$slots, "action-row", pe(n({ key: 0 }, {
			internalModelValue: e.internalModelValue,
			disabled: M.value,
			selectDate: () => e.$emit("select-date"),
			closePicker: () => e.$emit("close-picker")
		}))) : (p(), H(V, { key: 1 }, [W(o).showPreview ? (p(), H("div", {
			key: 0,
			class: "dp__selection_preview",
			title: L.value,
			style: y(w.value)
		}, [e.$slots["action-preview"] && C.value ? u(e.$slots, "action-preview", {
			key: 0,
			value: e.internalModelValue
		}) : T("", !0), !e.$slots["action-preview"] && C.value ? (p(), H(V, { key: 1 }, [D(i(L.value), 1)], 64)) : T("", !0)], 12, qa)) : T("", !0), F("div", {
			ref_key: "actionBtnContainer",
			ref: E,
			class: "dp__action_buttons",
			"data-dp-element": "action-row"
		}, [e.$slots["action-buttons"] ? u(e.$slots, "action-buttons", {
			key: 0,
			value: e.internalModelValue
		}) : T("", !0), e.$slots["action-buttons"] ? T("", !0) : (p(), H(V, { key: 1 }, [
			!W(m).enabled && W(o).showCancel ? (p(), H("button", {
				key: 0,
				ref_key: "cancelButtonRef",
				ref: x,
				type: "button",
				class: "dp__action_button dp__action_cancel",
				onClick: t[0] ||= (t) => e.$emit("close-picker"),
				onKeydown: t[1] ||= (t) => W(Si)(t, () => e.$emit("close-picker"))
			}, i(e.cancelText), 545)) : T("", !0),
			W(o).showNow ? (p(), H("button", {
				key: 1,
				type: "button",
				class: "dp__action_button dp__action_cancel",
				onClick: t[2] ||= (t) => e.$emit("select-now"),
				onKeydown: t[3] ||= (t) => W(Si)(t, () => e.$emit("select-now"))
			}, i(e.nowButtonLabel), 33)) : T("", !0),
			W(o).showSelect ? (p(), H("button", {
				key: 2,
				ref_key: "selectButtonRef",
				ref: S,
				type: "button",
				class: "dp__action_button dp__action_select",
				disabled: M.value,
				"data-test-id": "select-button",
				onKeydown: t[4] ||= (e) => W(Si)(e, () => R()),
				onClick: R
			}, i(e.selectText), 41, Ja)) : T("", !0)
		], 64))], 512)], 64))], 512));
	}
}), Xa = [
	"role",
	"aria-label",
	"tabindex"
], Za = { class: "dp__selection_grid_header" }, Qa = [
	"aria-selected",
	"aria-disabled",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], $a = ["aria-label"], eo = /* @__PURE__ */ a({
	__name: "SelectionOverlay",
	props: {
		items: {},
		type: {},
		isLast: { type: Boolean },
		arrowNavigation: { type: Boolean },
		skipButtonRef: { type: Boolean },
		headerRefs: {},
		hideNavigation: {},
		escClose: { type: Boolean },
		useRelative: { type: Boolean },
		height: {},
		textInput: { type: [Boolean, Object] },
		config: {},
		noOverlayFocus: { type: Boolean },
		focusValue: {},
		menuWrapRef: {},
		ariaLabels: {},
		overlayLabel: {}
	},
	emits: [
		"selected",
		"toggle",
		"reset-flow",
		"hover-value"
	],
	setup(e, { expose: t, emit: n }) {
		let { setSelectionGrid: r, buildMultiLevelMatrix: a, setMonthPicker: o } = xa(), s = n, l = e, { defaultedAriaLabels: f, defaultedTextInput: m, defaultedConfig: h, handleEventPropagation: g } = Ha(l), { hideNavigationButtons: b } = Ss(), S = A(!1), C = A(null), w = A(null), O = A([]), j = A(), M = A(null), N = A(0), P = A(null);
		_(() => {
			C.value = null;
		}), c(() => {
			L().then(() => ae()), l.noOverlayFocus || ee(), I(!0);
		}), d(() => I(!1));
		let I = (e) => {
			l.arrowNavigation && (l.headerRefs?.length ? o(e) : r(e));
		}, ee = () => {
			let e = ni(w);
			e && (m.value.enabled || (C.value ? C.value?.focus({ preventScroll: !0 }) : e.focus({ preventScroll: !0 })), S.value = e.clientHeight < e.scrollHeight);
		}, te = B(() => ({
			dp__overlay: !0,
			"dp--overlay-absolute": !l.useRelative,
			"dp--overlay-relative": l.useRelative
		})), R = B(() => l.useRelative ? {
			height: `${l.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), z = B(() => ({ dp__overlay_col: !0 })), ne = B(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__overlay_action: !0,
			dp__over_action_scroll: S.value,
			dp__button_bottom: l.isLast
		})), re = B(() => ({
			dp__overlay_container: !0,
			dp__container_flex: l.items?.length <= 6,
			dp__container_block: l.items?.length > 6
		}));
		v(() => l.items, () => ae(!1), { deep: !0 });
		let ae = (e = !0) => {
			L().then(() => {
				let t = ni(C), n = ni(w), r = ni(M), i = ni(P), a = r ? r.getBoundingClientRect().height : 0;
				n && (n.getBoundingClientRect().height ? N.value = n.getBoundingClientRect().height - a : N.value = h.value.modeHeight - a), t && i && e && (i.scrollTop = t.offsetTop - i.offsetTop - (N.value / 2 - t.getBoundingClientRect().height) - a);
			});
		}, oe = (e) => {
			e.disabled || s("selected", e.value);
		}, se = () => {
			s("toggle"), s("reset-flow");
		}, ce = (e) => {
			l.escClose && (se(), g(e));
		}, ue = (e, t, n, r) => {
			e && ((t.active || t.value === l.focusValue) && (C.value = e), l.arrowNavigation && (Array.isArray(O.value[n]) ? O.value[n][r] = e : O.value[n] = [e], de()));
		}, de = () => {
			let e = l.headerRefs?.length ? [l.headerRefs].concat(O.value) : O.value.concat([l.skipButtonRef ? [] : [M.value]]);
			a(oi(e), l.headerRefs?.length ? "monthPicker" : "selectionGrid");
		}, fe = (e) => {
			l.arrowNavigation || pi(e, h.value, !0);
		}, pe = (e) => {
			j.value = e, s("hover-value", e);
		}, U = () => {
			if (se(), !l.isLast) {
				let e = gi(l.menuWrapRef ?? null, "action-row");
				e && li(e)?.focus();
			}
		}, me = (e) => {
			switch (e.key) {
				case Jr.esc: return ce(e);
				case Jr.arrowLeft: return fe(e);
				case Jr.arrowRight: return fe(e);
				case Jr.arrowUp: return fe(e);
				case Jr.arrowDown: return fe(e);
				default: return;
			}
		}, he = (e) => {
			if (e.key === Jr.enter) return se();
			if (e.key === Jr.tab) return U();
		};
		return t({ focusGrid: ee }), (t, n) => (p(), H("div", {
			ref_key: "gridWrapRef",
			ref: w,
			class: E(te.value),
			style: y(R.value),
			role: e.useRelative ? void 0 : "dialog",
			"aria-label": e.overlayLabel,
			tabindex: e.useRelative ? void 0 : "0",
			onKeydown: me,
			onClick: n[0] ||= k(() => {}, ["prevent"])
		}, [F("div", {
			ref_key: "containerRef",
			ref: P,
			class: E(re.value),
			style: y({ "--dp-overlay-height": `${N.value}px` }),
			role: "grid"
		}, [F("div", Za, [u(t.$slots, "header")]), t.$slots.overlay ? u(t.$slots, "overlay", { key: 0 }) : (p(!0), H(V, { key: 1 }, x(e.items, (n, r) => (p(), H("div", {
			key: r,
			class: E(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
			role: "row"
		}, [(p(!0), H(V, null, x(n, (e, n) => (p(), H("div", {
			key: e.value,
			ref_for: !0,
			ref: (t) => ue(t, e, r, n),
			role: "gridcell",
			class: E(z.value),
			"aria-selected": e.active || void 0,
			"aria-disabled": e.disabled || void 0,
			tabindex: "0",
			"data-test-id": e.text,
			onClick: k((t) => oe(e), ["prevent"]),
			onKeydown: (t) => W(Si)(t, () => oe(e), !0),
			onMouseover: (t) => pe(e.value)
		}, [F("div", { class: E(e.className) }, [t.$slots.item ? u(t.$slots, "item", {
			key: 0,
			item: e
		}) : T("", !0), t.$slots.item ? T("", !0) : (p(), H(V, { key: 1 }, [D(i(e.text), 1)], 64))], 2)], 42, Qa))), 128))], 2))), 128))], 6), t.$slots["button-icon"] ? le((p(), H("button", {
			key: 0,
			ref_key: "toggleButton",
			ref: M,
			type: "button",
			"aria-label": W(f)?.toggleOverlay,
			class: E(ne.value),
			tabindex: "0",
			onClick: se,
			onKeydown: he
		}, [u(t.$slots, "button-icon")], 42, $a)), [[ie, !W(b)(e.hideNavigation, e.type)]]) : T("", !0)], 46, Xa));
	}
}), to = ["data-dp-mobile"], no = /* @__PURE__ */ a({
	__name: "InstanceWrap",
	props: {
		multiCalendars: {},
		stretch: { type: Boolean },
		collapse: { type: Boolean },
		isMobile: { type: Boolean }
	},
	setup(e) {
		let t = e, n = B(() => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]), r = B(() => ({ dp__instance_calendar: t.multiCalendars > 0 }));
		return (t, i) => (p(), H("div", {
			class: E({
				dp__menu_inner: !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				dp__flex_display: e.multiCalendars > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": e.isMobile
		}, [(p(!0), H(V, null, x(n.value, (e, n) => (p(), H("div", {
			key: e,
			class: E(r.value)
		}, [u(t.$slots, "default", {
			instance: e,
			index: n
		})], 2))), 128))], 10, to));
	}
}), ro = [
	"data-dp-element",
	"aria-label",
	"aria-disabled"
], io = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let n = t, r = A(null);
		return c(() => n("set-ref", r)), (t, i) => (p(), H("button", {
			ref_key: "elRef",
			ref: r,
			type: "button",
			"data-dp-element": e.elName,
			class: "dp__btn dp--arrow-btn-nav",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-disabled": e.disabled || void 0,
			onClick: i[0] ||= (e) => n("activate"),
			onKeydown: i[1] ||= (e) => W(Si)(e, () => n("activate"), !0)
		}, [F("span", { class: E(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }]) }, [u(t.$slots, "default")], 2)], 40, ro));
	}
}), ao = ["aria-label", "data-test-id"], oo = /* @__PURE__ */ a({
	__name: "YearModePicker",
	props: {
		...Ka,
		showYearPicker: {
			type: Boolean,
			default: !1
		},
		items: {
			type: Array,
			default: () => []
		},
		instance: {
			type: Number,
			default: 0
		},
		year: {
			type: Number,
			default: 0
		},
		isDisabled: {
			type: Function,
			default: () => !1
		}
	},
	emits: [
		"toggle-year-picker",
		"year-select",
		"handle-year"
	],
	setup(t, { emit: n }) {
		let r = n, a = t, { showRightIcon: o, showLeftIcon: s } = Ss(), { defaultedConfig: c, defaultedMultiCalendars: l, defaultedAriaLabels: d, defaultedTransitions: f, defaultedUI: m } = Ha(a), { showTransition: h, transitionName: g } = vs(f), _ = A(!1), v = B(() => _i(a.year, a.locale)), y = (e = !1, t) => {
			_.value = !_.value, r("toggle-year-picker", {
				flow: e,
				show: t
			});
		}, b = (e) => {
			_.value = !1, r("year-select", e);
		}, x = (e = !1) => {
			r("handle-year", e);
		};
		return (n, r) => (p(), H(V, null, [F("div", { class: E(["dp--year-mode-picker", { "dp--hidden-el": _.value }]) }, [
			W(s)(W(l), t.instance) ? (p(), P(io, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": W(d)?.prevYear,
				disabled: t.isDisabled(!1),
				class: E(W(m)?.navBtnPrev),
				onActivate: r[0] ||= (e) => x(!1)
			}, {
				default: M(() => [n.$slots["arrow-left"] ? u(n.$slots, "arrow-left", { key: 0 }) : T("", !0), n.$slots["arrow-left"] ? T("", !0) : (p(), P(W(jr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : T("", !0),
			F("button", {
				ref: "mpYearButtonRef",
				class: "dp__btn dp--year-select",
				type: "button",
				"aria-label": `${t.year}-${W(d)?.openYearsOverlay}`,
				"data-test-id": `year-mode-btn-${t.instance}`,
				onClick: r[1] ||= () => y(!1),
				onKeydown: r[2] ||= se(() => y(!1), ["enter"])
			}, [n.$slots.year ? u(n.$slots, "year", {
				key: 0,
				year: t.year,
				text: v.value,
				value: t.year
			}) : T("", !0), n.$slots.year ? T("", !0) : (p(), H(V, { key: 1 }, [D(i(v.value), 1)], 64))], 40, ao),
			W(o)(W(l), t.instance) ? (p(), P(io, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": W(d)?.nextYear,
				disabled: t.isDisabled(!0),
				class: E(W(m)?.navBtnNext),
				onActivate: r[3] ||= (e) => x(!0)
			}, {
				default: M(() => [n.$slots["arrow-right"] ? u(n.$slots, "arrow-right", { key: 0 }) : T("", !0), n.$slots["arrow-right"] ? T("", !0) : (p(), P(W(Mr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : T("", !0)
		], 2), U(e, {
			name: W(g)(t.showYearPicker),
			css: W(h)
		}, {
			default: M(() => [t.showYearPicker ? (p(), P(eo, {
				key: 0,
				items: t.items,
				"text-input": n.textInput,
				"esc-close": n.escClose,
				config: n.config,
				"is-last": n.autoApply && !W(c).keepActionRow,
				"hide-navigation": n.hideNavigation,
				"aria-labels": n.ariaLabels,
				"overlay-label": W(d)?.yearPicker?.(!0),
				type: "year",
				onToggle: y,
				onSelected: r[4] ||= (e) => b(e)
			}, me({
				"button-icon": M(() => [n.$slots["calendar-icon"] ? u(n.$slots, "calendar-icon", { key: 0 }) : T("", !0), n.$slots["calendar-icon"] ? T("", !0) : (p(), P(W(kr), { key: 1 }))]),
				_: 2
			}, [n.$slots["year-overlay-value"] ? {
				name: "item",
				fn: M(({ item: e }) => [u(n.$slots, "year-overlay-value", {
					text: e.text,
					value: e.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"text-input",
				"esc-close",
				"config",
				"is-last",
				"hide-navigation",
				"aria-labels",
				"overlay-label"
			])) : T("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 64));
	}
}), so = (e, t, n) => {
	if (t.value && Array.isArray(t.value)) {
		if (t.value.some((t) => $(e, t))) {
			let n = t.value.filter((t) => !$(t, e));
			t.value = n.length ? n : null;
		} else (n && +n > t.value.length || !n) && t.value.push(e);
	} else t.value = [e];
}, co = (e, t, n) => {
	let r = e.value ? e.value.slice() : [];
	return r.length === 2 && r[1] !== null && (r = []), r.length ? (ji(t, r[0]) ? r.unshift(t) : r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, lo = (e, t, n, r) => {
	e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, uo = (e) => {
	Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => Ir(Q(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Ir(Q(e.value), e.timezone));
}, fo = (e, t, n, r) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && r.value.partialRange) ? r.value.fixedStart && (Mi(e, t.value[0]) || $(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (ji(e, t.value[1]) || $(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], po = ({ multiCalendars: e, range: t, highlight: n, propDates: r, calendars: i, modelValue: a, props: o, filters: s, year: l, month: u, emit: d }) => {
	let f = B(() => $r(o.yearRange, o.locale, o.reverseYears)), p = A([!1]), m = B(() => (e, t) => {
		let n = Z(Pi(/* @__PURE__ */ new Date()), {
			month: u.value(e),
			year: l.value(e)
		});
		return Ki(t ? st(n) : ct(n), r.value.maxDate, r.value.minDate, o.preventMinMaxNavigation, t);
	}), h = () => Array.isArray(a.value) && e.value.solo && a.value[1], g = () => {
		for (let t = 0; t < e.value.count; t++) if (t === 0) i.value[t] = i.value[0];
		else if (t === e.value.count - 1 && h()) i.value[t] = {
			month: J(a.value[1]),
			year: Y(a.value[1])
		};
		else {
			let e = Z(Q(), i.value[t - 1]);
			i.value[t] = {
				month: J(e),
				year: Y(Ye(e, 1))
			};
		}
	}, _ = (t) => {
		if (!t) return g();
		let n = Z(Q(), i.value[t]);
		return i.value[0].year = Y(Or(n, e.value.count - 1)), g();
	}, y = (e, n) => {
		let r = tt(n, e);
		return t.value.showLastInRange && r > 1 ? n : e;
	}, b = (t) => o.focusStartDate || e.value.solo ? t[0] : t[1] ? y(t[0], t[1]) : t[0], x = () => {
		if (a.value) {
			let e = Array.isArray(a.value) ? b(a.value) : a.value;
			i.value[0] = {
				month: J(e),
				year: Y(e)
			};
		}
	}, S = () => {
		x(), e.value.count && g();
	};
	v(a, (e, t) => {
		o.isTextInputDate && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && S();
	}), c(() => {
		S();
	});
	let C = (t, n) => {
		i.value[n].year = t, d("update-month-year", {
			instance: n,
			year: t,
			month: i.value[n].month
		}), e.value.count && !e.value.solo && _(n);
	}, w = B(() => (e) => fi(f.value, (t) => ({
		active: l.value(e) === t.value,
		disabled: di(t.value, zi(r.value.minDate), zi(r.value.maxDate)) || s.value.years?.includes(l.value(e)),
		highlighted: sa(n.value, t.value)
	}))), T = (e, t) => {
		C(e, t), D(t);
	}, E = (e, t = !1) => {
		if (!m.value(e, t)) {
			let n = t ? l.value(e) + 1 : l.value(e) - 1;
			C(n, e);
		}
	}, D = (e, t = !1, n) => {
		t || d("reset-flow"), n === void 0 ? p.value[e] = !p.value[e] : p.value[e] = n, p.value[e] ? d("overlay-toggle", {
			open: !0,
			overlay: Gr.year
		}) : (d("overlay-closed"), d("overlay-toggle", {
			open: !1,
			overlay: Gr.year
		}));
	};
	return {
		isDisabled: m,
		groupedYears: w,
		showYearPicker: p,
		selectYear: C,
		toggleYearPicker: D,
		handleYearSelect: T,
		handleYear: E
	};
}, mo = (e, t) => {
	let { defaultedMultiCalendars: n, defaultedAriaLabels: r, defaultedTransitions: i, defaultedConfig: a, defaultedRange: o, defaultedHighlight: s, propDates: l, defaultedTz: u, defaultedFilters: d, defaultedMultiDates: f } = Ha(e), { modelValue: p, year: m, month: h, calendars: g } = ys(e, t, () => {
		e.isTextInputDate && b(Y(Q(e.startDate)), 0);
	}), _ = B(() => ei(e.formatLocale, e.locale, e.monthNameFormat)), v = A(null), { checkMinMaxRange: y } = xs(e), { selectYear: b, groupedYears: x, showYearPicker: S, toggleYearPicker: C, handleYearSelect: w, handleYear: T, isDisabled: E } = po({
		modelValue: p,
		multiCalendars: n,
		range: o,
		highlight: s,
		calendars: g,
		year: m,
		propDates: l,
		month: h,
		filters: d,
		props: e,
		emit: t
	});
	c(() => {
		e.startDate && (p.value && e.focusStartDate || !p.value) && b(Y(Q(e.startDate)), 0);
	});
	let D = (e) => e ? {
		month: J(e),
		year: Y(e)
	} : {
		month: null,
		year: null
	}, O = () => p.value ? Array.isArray(p.value) ? p.value.map((e) => D(e)) : D(p.value) : D(), k = (e, t) => {
		let n = g.value[e], r = O();
		return Array.isArray(r) ? r.some((e) => e.year === n?.year && e.month === t) : n?.year === r.year && t === r.month;
	}, j = (e, t, n) => {
		let r = O();
		return Array.isArray(r) ? m.value(t) === r[n]?.year && e === r[n]?.month : !1;
	}, M = (e, t) => {
		if (o.value.enabled) {
			let n = O();
			if (Array.isArray(p.value) && Array.isArray(n)) {
				let n = j(e, t, 0) || j(e, t, 1), r = Gi(Pi(Q()), e, m.value(t));
				return Ni(p.value, v.value, r) && !n;
			}
			return !1;
		}
		return !1;
	}, N = B(() => (t) => fi(_.value, (n) => ({
		active: k(t, n.value),
		disabled: di(n.value, Li(m.value(t), l.value.minDate), Ri(m.value(t), l.value.maxDate)) || ia(l.value.disabledDates, m.value(t), n.value) || d.value.months?.includes(n.value) || !aa(l.value.allowedDates, m.value(t), n.value) || ua(e.yearRange, m.value(t)),
		isBetween: M(n.value, t),
		highlighted: oa(s.value, n.value, m.value(t))
	}))), P = (e, t) => Gi(Pi(Q()), e, m.value(t)), F = (e, n) => {
		let r = p.value ? p.value : Pi(/* @__PURE__ */ new Date());
		p.value = Gi(r, e, m.value(n)), t("auto-apply"), t("update-flow-step");
	}, I = (n, r) => {
		let i = P(n, r);
		o.value.fixedEnd || o.value.fixedStart ? p.value = fo(i, p, t, o) : p.value ? y(i, p.value) && (p.value = co(p, P(n, r), t)) : p.value = [P(n, r)], L().then(() => {
			lo(p.value, t, e.autoApply, e.modelAuto);
		});
	}, ee = (e, n) => {
		so(P(e, n), p, f.value.limit), t("auto-apply", !0);
	}, te = (e, t) => (g.value[t].month = e, z(t, g.value[t].year, e), f.value.enabled ? ee(e, t) : o.value.enabled ? I(e, t) : F(e, t)), R = (e, t) => {
		b(e, t), z(t, e, null);
	}, z = (e, n, r) => {
		let i = r;
		if (!i && i !== 0) {
			let t = O();
			i = Array.isArray(t) ? t[e].month : t.month;
		}
		t("update-month-year", {
			instance: e,
			year: n,
			month: i
		});
	};
	return {
		groupedMonths: N,
		groupedYears: x,
		year: m,
		isDisabled: E,
		defaultedMultiCalendars: n,
		defaultedAriaLabels: r,
		defaultedTransitions: i,
		defaultedConfig: a,
		showYearPicker: S,
		modelValue: p,
		presetDate: (e, n) => {
			uo({
				value: e,
				modelValue: p,
				range: o.value.enabled,
				timezone: n ? void 0 : u.value.timezone
			}), t("auto-apply");
		},
		setHoverDate: (e, t) => {
			v.value = P(e, t);
		},
		selectMonth: te,
		selectYear: R,
		toggleYearPicker: C,
		handleYearSelect: w,
		handleYear: T,
		getModelMonthYear: O
	};
}, ho = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "MonthPicker",
	props: { ...Ka },
	emits: [
		"update:internal-model-value",
		"overlay-closed",
		"reset-flow",
		"range-start",
		"range-end",
		"auto-apply",
		"update-month-year",
		"update-flow-step",
		"mount",
		"invalid-fixed-range",
		"overlay-toggle"
	],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = _s(C(), "yearMode"), o = e;
		c(() => {
			o.shadow || i("mount", null);
		});
		let { groupedMonths: s, groupedYears: l, year: d, isDisabled: f, defaultedMultiCalendars: m, defaultedConfig: h, showYearPicker: g, modelValue: _, presetDate: v, setHoverDate: y, selectMonth: S, selectYear: w, toggleYearPicker: E, handleYearSelect: D, handleYear: O, getModelMonthYear: k } = mo(o, i);
		return t({
			getSidebarProps: () => ({
				modelValue: _,
				year: d,
				getModelMonthYear: k,
				selectMonth: S,
				selectYear: w,
				handleYear: O
			}),
			presetDate: v,
			toggleYearPicker: (e) => E(0, e)
		}), (e, t) => (p(), P(no, {
			"multi-calendars": W(m).count,
			collapse: e.collapse,
			stretch: "",
			"is-mobile": e.isMobile
		}, {
			default: M(({ instance: t }) => [e.$slots["top-extra"] ? u(e.$slots, "top-extra", {
				key: 0,
				value: e.internalModelValue
			}) : T("", !0), e.$slots["month-year"] ? u(e.$slots, "month-year", pe(n({ key: 1 }, {
				year: W(d),
				months: W(s)(t),
				years: W(l)(t),
				selectMonth: W(S),
				selectYear: W(w),
				instance: t
			}))) : (p(), P(eo, {
				key: 2,
				items: W(s)(t),
				"arrow-navigation": e.arrowNavigation,
				"is-last": e.autoApply && !W(h).keepActionRow,
				"esc-close": e.escClose,
				height: W(h).modeHeight,
				config: e.config,
				"no-overlay-focus": !!(e.noOverlayFocus || e.textInput),
				"use-relative": "",
				type: "month",
				onSelected: (e) => W(S)(e, t),
				onHoverValue: (e) => W(y)(e, t)
			}, me({
				header: M(() => [U(oo, n(e.$props, {
					items: W(l)(t),
					instance: t,
					"show-year-picker": W(g)[t],
					year: W(d)(t),
					"is-disabled": (e) => W(f)(t, e),
					onHandleYear: (e) => W(O)(t, e),
					onYearSelect: (e) => W(D)(e, t),
					onToggleYearPicker: (e) => W(E)(t, e?.flow, e?.show)
				}), me({ _: 2 }, [x(W(a), (t, n) => ({
					name: t,
					fn: M((n) => [u(e.$slots, t, pe(b(n)))])
				}))]), 1040, [
					"items",
					"instance",
					"show-year-picker",
					"year",
					"is-disabled",
					"onHandleYear",
					"onYearSelect",
					"onToggleYearPicker"
				])]),
				_: 2
			}, [e.$slots["month-overlay-value"] ? {
				name: "item",
				fn: M(({ item: t }) => [u(e.$slots, "month-overlay-value", {
					text: t.text,
					value: t.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"arrow-navigation",
				"is-last",
				"esc-close",
				"height",
				"config",
				"no-overlay-focus",
				"onSelected",
				"onHoverValue"
			]))]),
			_: 3
		}, 8, [
			"multi-calendars",
			"collapse",
			"is-mobile"
		]));
	}
}), go = (e, t) => {
	let { modelValue: n } = ys(e, t, () => {
		e.isTextInputDate && (u.value = Y(Q(e.startDate)));
	}), r = A(null), { defaultedHighlight: i, defaultedMultiDates: a, defaultedFilters: o, defaultedRange: s, propDates: l } = Ha(e), u = A();
	c(() => {
		e.startDate && (n.value && e.focusStartDate || !n.value) && (u.value = Y(Q(e.startDate)));
	});
	let d = (e) => Array.isArray(n.value) ? n.value.some((t) => Y(t) === e) : n.value ? Y(n.value) === e : !1, f = (e) => s.value.enabled && Array.isArray(n.value) ? Ni(n.value, r.value, g(e)) : !1, p = (e) => l.value.allowedDates instanceof Map ? l.value.allowedDates.size ? l.value.allowedDates.has(`${e}`) : !1 : !0, m = (e) => l.value.disabledDates instanceof Map ? l.value.disabledDates.size ? l.value.disabledDates.has(`${e}`) : !1 : typeof l.value.disabledDates != "function" || l.value.disabledDates(Tr(ki(ct(Q())), e)), h = B(() => fi($r(e.yearRange, e.locale, e.reverseYears), (e) => {
		let t = d(e.value);
		return {
			active: t,
			disabled: di(e.value, zi(l.value.minDate), zi(l.value.maxDate)) || o.value.years.includes(e.value) || !p(e.value) || m(e.value),
			isBetween: f(e.value) && !t,
			highlighted: sa(i.value, e.value)
		};
	})), g = (e) => Tr(Pi(ct(/* @__PURE__ */ new Date())), e);
	return {
		groupedYears: h,
		modelValue: n,
		focusYear: u,
		setHoverValue: (e) => {
			r.value = Tr(Pi(/* @__PURE__ */ new Date()), e);
		},
		selectYear: (r) => {
			if (t("update-month-year", {
				instance: 0,
				year: r
			}), a.value.enabled) return n.value ? Array.isArray(n.value) && ((n.value?.map((e) => Y(e))).includes(r) ? n.value = n.value.filter((e) => Y(e) !== r) : n.value.push(Tr(ki(Q()), r))) : n.value = [Tr(ki(ct(Q())), r)], t("auto-apply", !0);
			s.value.enabled ? (n.value = co(n, g(r), t), L().then(() => {
				lo(n.value, t, e.autoApply, e.modelAuto);
			})) : (n.value = g(r), t("auto-apply"));
		}
	};
}, _o = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "YearPicker",
	props: { ...Ka },
	emits: [
		"update:internal-model-value",
		"reset-flow",
		"range-start",
		"range-end",
		"auto-apply",
		"update-month-year"
	],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = e, { groupedYears: o, modelValue: s, focusYear: c, selectYear: l, setHoverValue: d } = go(a, i), { defaultedConfig: f } = Ha(a);
		return t({ getSidebarProps: () => ({
			modelValue: s,
			selectYear: l
		}) }), (e, t) => (p(), H("div", null, [e.$slots["top-extra"] ? u(e.$slots, "top-extra", {
			key: 0,
			value: e.internalModelValue
		}) : T("", !0), e.$slots["month-year"] ? u(e.$slots, "month-year", pe(n({ key: 1 }, {
			years: W(o),
			selectYear: W(l)
		}))) : (p(), P(eo, {
			key: 2,
			items: W(o),
			"is-last": e.autoApply && !W(f).keepActionRow,
			height: W(f).modeHeight,
			config: e.config,
			"no-overlay-focus": !!(e.noOverlayFocus || e.textInput),
			"focus-value": W(c),
			type: "year",
			"use-relative": "",
			onSelected: W(l),
			onHoverValue: W(d)
		}, me({ _: 2 }, [e.$slots["year-overlay-value"] ? {
			name: "item",
			fn: M(({ item: t }) => [u(e.$slots, "year-overlay-value", {
				text: t.text,
				value: t.value
			})]),
			key: "0"
		} : void 0]), 1032, [
			"items",
			"is-last",
			"height",
			"config",
			"no-overlay-focus",
			"focus-value",
			"onSelected",
			"onHoverValue"
		]))]));
	}
}), vo = {
	key: 0,
	class: "dp__time_input"
}, yo = ["data-compact", "data-collapsed"], bo = [
	"data-test-id",
	"aria-label",
	"onKeydown",
	"onClick",
	"onMousedown"
], xo = [
	"aria-label",
	"disabled",
	"data-test-id",
	"onKeydown",
	"onClick"
], So = [
	"data-test-id",
	"aria-label",
	"onKeydown",
	"onClick",
	"onMousedown"
], Co = { key: 0 }, wo = ["aria-label", "data-compact"], To = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "TimeInput",
	props: {
		hours: {
			type: Number,
			default: 0
		},
		minutes: {
			type: Number,
			default: 0
		},
		seconds: {
			type: Number,
			default: 0
		},
		closeTimePickerBtn: {
			type: Object,
			default: null
		},
		order: {
			type: Number,
			default: 0
		},
		disabledTimesConfig: {
			type: Function,
			default: null
		},
		validateTime: {
			type: Function,
			default: () => !1
		},
		...Ka
	},
	emits: [
		"set-hours",
		"set-minutes",
		"update:hours",
		"update:minutes",
		"update:seconds",
		"reset-flow",
		"mounted",
		"overlay-closed",
		"overlay-opened",
		"am-pm-change"
	],
	setup(t, { expose: n, emit: r }) {
		let a = r, o = t, { setTimePickerElements: s, setTimePickerBackRef: d } = xa(), { defaultedAriaLabels: f, defaultedTransitions: m, defaultedFilters: h, defaultedConfig: g, defaultedRange: _, defaultedMultiCalendars: v } = Ha(o), { transitionName: y, showTransition: b } = vs(m), S = z({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), C = A("AM"), w = A(null), O = A([]), k = A(), j = A(!1);
		c(() => {
			a("mounted");
		});
		let N = (e) => Z(/* @__PURE__ */ new Date(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: o.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), I = B(() => (e) => ue(e, o[e]) || te(e, o[e])), ee = B(() => ({
			hours: o.hours,
			minutes: o.minutes,
			seconds: o.seconds
		})), te = (e, t) => _.value.enabled && !_.value.disableTimeRangeValidation ? !o.validateTime(e, t) : !1, L = (e, t) => {
			if (_.value.enabled && !_.value.disableTimeRangeValidation) {
				let n = t ? +o[`${e}Increment`] : -+o[`${e}Increment`], r = o[e] + n;
				return !o.validateTime(e, r);
			}
			return !1;
		}, R = B(() => (e) => !he(+o[e] + +o[`${e}Increment`], e) || L(e, !0)), ne = B(() => (e) => !he(o[e] - +o[`${e}Increment`], e) || L(e, !1)), re = (e, t) => Fe(Z(Q(), e), t), ie = (e, t) => Dr(Z(Q(), e), t), ae = B(() => ({
			dp__time_col: !0,
			dp__time_col_block: !o.timePickerInline,
			dp__time_col_reg_block: !o.enableSeconds && o.is24 && !o.timePickerInline,
			dp__time_col_reg_inline: !o.enableSeconds && o.is24 && o.timePickerInline,
			dp__time_col_reg_with_button: !o.enableSeconds && !o.is24,
			dp__time_col_sec: o.enableSeconds && o.is24,
			dp__time_col_sec_with_button: o.enableSeconds && !o.is24
		})), oe = B(() => o.timePickerInline && _.value.enabled && !v.value.count), se = B(() => {
			let e = [{ type: "hours" }];
			return o.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), o.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), ce = B(() => se.value.filter((e) => !e.separator)), le = B(() => (e) => {
			if (e === "hours") {
				let e = xe(+o.hours);
				return {
					text: e < 10 ? `0${e}` : `${e}`,
					value: e
				};
			}
			return {
				text: o[e] < 10 ? `0${o[e]}` : `${o[e]}`,
				value: o[e]
			};
		}), ue = (e, t) => {
			if (!o.disabledTimesConfig) return !1;
			let n = o.disabledTimesConfig(o.order, e === "hours" ? t : void 0);
			return !n[e] || !!n[e]?.includes(t);
		}, de = (e, t) => t !== "hours" || C.value === "AM" ? e : e + 12, fe = (e) => {
			let t = o.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +o[`${e}GridIncrement`], i = e === "hours" && !o.is24 ? r : 0, a = [];
			for (let t = i; t < n; t += r) a.push({
				value: o.is24 ? t : de(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !o.is24 && a.unshift({
				value: C.value === "PM" ? 12 : 0,
				text: "12"
			}), fi(a, (t) => ({
				active: !1,
				disabled: h.value.times[e].includes(t.value) || !he(t.value, e) || ue(e, t.value) || te(e, t.value)
			}));
		}, pe = (e) => e >= 0 ? e : 59, U = (e) => e >= 0 ? e : 23, he = (e, t) => {
			let n = o.minTime ? N(Fi(o.minTime)) : null, r = o.maxTime ? N(Fi(o.maxTime)) : null, i = N(Fi(ee.value, t, t === "minutes" || t === "seconds" ? pe(e) : U(e)));
			return n && r ? (sn(i, r) || cn(i, r)) && (on(i, n) || cn(i, n)) : n ? on(i, n) || cn(i, n) : !r || sn(i, r) || cn(i, r);
		}, ge = (e) => o[`no${e[0].toUpperCase() + e.slice(1)}Overlay`], _e = (e) => {
			ge(e) || (S[e] = !S[e], S[e] ? (j.value = !0, a("overlay-opened", e)) : (j.value = !1, a("overlay-closed", e)));
		}, ve = (e) => e === "hours" ? tn : e === "minutes" ? rn : an, ye = () => {
			k.value && clearTimeout(k.value);
		}, be = (e, t = !0, n) => {
			let r = t ? re : ie, i = t ? +o[`${e}Increment`] : -+o[`${e}Increment`];
			he(+o[e] + i, e) && a(`update:${e}`, ve(e)(r({ [e]: +o[e] }, { [e]: +o[`${e}Increment`] }))), !n?.keyboard && g.value.timeArrowHoldThreshold && (k.value = setTimeout(() => {
				be(e, t);
			}, g.value.timeArrowHoldThreshold));
		}, xe = (e) => o.is24 ? e : (e >= 12 ? C.value = "PM" : C.value = "AM", ti(e)), Se = () => {
			C.value === "PM" ? (C.value = "AM", a("update:hours", o.hours - 12)) : (C.value = "PM", a("update:hours", o.hours + 12)), a("am-pm-change", C.value);
		}, Ce = (e) => {
			S[e] = !0;
		}, we = (e, t, n) => {
			if (e && o.arrowNavigation) {
				Array.isArray(O.value[t]) ? O.value[t][n] = e : O.value[t] = [e];
				let r = O.value.reduce((e, t) => t.map((n, r) => [...e[r] || [], t[r]]), []);
				d(o.closeTimePickerBtn), w.value && (r[1] = r[1].concat(w.value)), s(r, o.order);
			}
		}, Te = (e, t) => (_e(e), a(`update:${e}`, t));
		return n({ openChildCmp: Ce }), (t, n) => t.disabled ? T("", !0) : (p(), H("div", vo, [
			(p(!0), H(V, null, x(se.value, (e, r) => (p(), H("div", {
				key: r,
				class: E(ae.value),
				"data-compact": oe.value && !t.enableSeconds,
				"data-collapsed": oe.value && t.enableSeconds
			}, [e.separator ? (p(), H(V, { key: 0 }, [j.value ? T("", !0) : (p(), H(V, { key: 0 }, [D(":")], 64))], 64)) : (p(), H(V, { key: 1 }, [
				F("button", {
					ref_for: !0,
					ref: (e) => we(e, r, 0),
					type: "button",
					class: E({
						dp__btn: !0,
						dp__inc_dec_button: !t.timePickerInline,
						dp__inc_dec_button_inline: t.timePickerInline,
						dp__tp_inline_btn_top: t.timePickerInline,
						dp__inc_dec_button_disabled: R.value(e.type),
						"dp--hidden-el": j.value
					}),
					"data-test-id": `${e.type}-time-inc-btn-${o.order}`,
					"aria-label": W(f)?.incrementValue(e.type),
					tabindex: "0",
					onKeydown: (t) => W(Si)(t, () => be(e.type, !0, { keyboard: !0 }), !0),
					onClick: (t) => W(g).timeArrowHoldThreshold ? void 0 : be(e.type, !0),
					onMousedown: (t) => W(g).timeArrowHoldThreshold ? be(e.type, !0) : void 0,
					onMouseup: ye
				}, [o.timePickerInline ? (p(), H(V, { key: 1 }, [t.$slots["tp-inline-arrow-up"] ? u(t.$slots, "tp-inline-arrow-up", { key: 0 }) : (p(), H(V, { key: 1 }, [n[2] ||= F("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), n[3] ||= F("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)], 64))], 64)) : (p(), H(V, { key: 0 }, [t.$slots["arrow-up"] ? u(t.$slots, "arrow-up", { key: 0 }) : T("", !0), t.$slots["arrow-up"] ? T("", !0) : (p(), P(W(Pr), { key: 1 }))], 64))], 42, bo),
				F("button", {
					ref_for: !0,
					ref: (e) => we(e, r, 1),
					type: "button",
					"aria-label": `${le.value(e.type).text}-${W(f)?.openTpOverlay(e.type)}`,
					class: E({
						dp__time_display: !0,
						dp__time_display_block: !t.timePickerInline,
						dp__time_display_inline: t.timePickerInline,
						"dp--time-invalid": I.value(e.type),
						"dp--time-overlay-btn": !I.value(e.type),
						"dp--hidden-el": j.value
					}),
					disabled: ge(e.type),
					tabindex: "0",
					"data-test-id": `${e.type}-toggle-overlay-btn-${o.order}`,
					onKeydown: (t) => W(Si)(t, () => _e(e.type), !0),
					onClick: (t) => _e(e.type)
				}, [t.$slots[e.type] ? u(t.$slots, e.type, {
					key: 0,
					text: le.value(e.type).text,
					value: le.value(e.type).value
				}) : T("", !0), t.$slots[e.type] ? T("", !0) : (p(), H(V, { key: 1 }, [D(i(le.value(e.type).text), 1)], 64))], 42, xo),
				F("button", {
					ref_for: !0,
					ref: (e) => we(e, r, 2),
					type: "button",
					class: E({
						dp__btn: !0,
						dp__inc_dec_button: !t.timePickerInline,
						dp__inc_dec_button_inline: t.timePickerInline,
						dp__tp_inline_btn_bottom: t.timePickerInline,
						dp__inc_dec_button_disabled: ne.value(e.type),
						"dp--hidden-el": j.value
					}),
					"data-test-id": `${e.type}-time-dec-btn-${o.order}`,
					"aria-label": W(f)?.decrementValue(e.type),
					tabindex: "0",
					onKeydown: (t) => W(Si)(t, () => be(e.type, !1, { keyboard: !0 }), !0),
					onClick: (t) => W(g).timeArrowHoldThreshold ? void 0 : be(e.type, !1),
					onMousedown: (t) => W(g).timeArrowHoldThreshold ? be(e.type, !1) : void 0,
					onMouseup: ye
				}, [o.timePickerInline ? (p(), H(V, { key: 1 }, [t.$slots["tp-inline-arrow-down"] ? u(t.$slots, "tp-inline-arrow-down", { key: 0 }) : (p(), H(V, { key: 1 }, [n[4] ||= F("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), n[5] ||= F("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)], 64))], 64)) : (p(), H(V, { key: 0 }, [t.$slots["arrow-down"] ? u(t.$slots, "arrow-down", { key: 0 }) : T("", !0), t.$slots["arrow-down"] ? T("", !0) : (p(), P(W(Fr), { key: 1 }))], 64))], 42, So)
			], 64))], 10, yo))), 128)),
			t.is24 ? T("", !0) : (p(), H("div", Co, [t.$slots["am-pm-button"] ? u(t.$slots, "am-pm-button", {
				key: 0,
				toggle: Se,
				value: C.value
			}) : T("", !0), t.$slots["am-pm-button"] ? T("", !0) : (p(), H("button", {
				key: 1,
				ref_key: "amPmButton",
				ref: w,
				type: "button",
				class: "dp__pm_am_button",
				role: "button",
				"aria-label": W(f)?.amPmButton,
				tabindex: "0",
				"data-compact": oe.value,
				onClick: Se,
				onKeydown: n[0] ||= (e) => W(Si)(e, () => Se(), !0)
			}, i(C.value), 41, wo))])),
			(p(!0), H(V, null, x(ce.value, (r, i) => (p(), P(e, {
				key: i,
				name: W(y)(S[r.type]),
				css: W(b)
			}, {
				default: M(() => [S[r.type] ? (p(), P(eo, {
					key: 0,
					items: fe(r.type),
					"is-last": t.autoApply && !W(g).keepActionRow,
					"esc-close": t.escClose,
					type: r.type,
					"text-input": t.textInput,
					config: t.config,
					"arrow-navigation": t.arrowNavigation,
					"aria-labels": t.ariaLabels,
					"overlay-label": W(f).timeOverlay?.(r.type),
					onSelected: (e) => Te(r.type, e),
					onToggle: (e) => _e(r.type),
					onResetFlow: n[1] ||= (e) => t.$emit("reset-flow")
				}, me({
					"button-icon": M(() => [t.$slots["clock-icon"] ? u(t.$slots, "clock-icon", { key: 0 }) : T("", !0), t.$slots["clock-icon"] ? T("", !0) : (p(), P(l(t.timePickerInline ? W(kr) : W(Nr)), { key: 1 }))]),
					_: 2
				}, [t.$slots[`${r.type}-overlay-value`] ? {
					name: "item",
					fn: M(({ item: e }) => [u(t.$slots, `${r.type}-overlay-value`, {
						text: e.text,
						value: e.value
					})]),
					key: "0"
				} : void 0, t.$slots[`${r.type}-overlay-header`] ? {
					name: "header",
					fn: M(() => [u(t.$slots, `${r.type}-overlay-header`, { toggle: () => _e(r.type) })]),
					key: "1"
				} : void 0]), 1032, [
					"items",
					"is-last",
					"esc-close",
					"type",
					"text-input",
					"config",
					"arrow-navigation",
					"aria-labels",
					"overlay-label",
					"onSelected",
					"onToggle"
				])) : T("", !0)]),
				_: 2
			}, 1032, ["name", "css"]))), 128))
		]));
	}
}), Eo = ["data-dp-mobile"], Do = ["aria-label", "tabindex"], Oo = [
	"role",
	"aria-label",
	"tabindex"
], ko = ["aria-label"], Ao = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "TimePicker",
	props: {
		hours: {
			type: [Number, Array],
			default: 0
		},
		minutes: {
			type: [Number, Array],
			default: 0
		},
		seconds: {
			type: [Number, Array],
			default: 0
		},
		disabledTimesConfig: {
			type: Function,
			default: null
		},
		validateTime: {
			type: Function,
			default: () => !1
		},
		...Ka
	},
	emits: [
		"update:hours",
		"update:minutes",
		"update:seconds",
		"mount",
		"reset-flow",
		"overlay-opened",
		"overlay-closed",
		"am-pm-change"
	],
	setup(t, { expose: r, emit: i }) {
		let a = i, o = t, { buildMatrix: s, setTimePicker: l } = xa(), d = C(), { defaultedTransitions: f, defaultedAriaLabels: m, defaultedTextInput: h, defaultedConfig: g, defaultedRange: _ } = Ha(o), { transitionName: v, showTransition: b } = vs(f), { hideNavigationButtons: S } = Ss(), w = A(null), D = A(null), O = A([]), k = A(null), j = A(!1);
		c(() => {
			a("mount"), !o.timePicker && o.arrowNavigation ? s([ni(w.value)], "time") : l(!0, o.timePicker);
		});
		let N = B(() => _.value.enabled && o.modelAuto ? ii(o.internalModelValue) : !0), I = A(!1), ee = (e) => ({
			hours: Array.isArray(o.hours) ? o.hours[e] : o.hours,
			minutes: Array.isArray(o.minutes) ? o.minutes[e] : o.minutes,
			seconds: Array.isArray(o.seconds) ? o.seconds[e] : o.seconds
		}), te = B(() => {
			let e = [];
			if (_.value.enabled) for (let t = 0; t < 2; t++) e.push(ee(t));
			else e.push(ee(0));
			return e;
		}), R = (e, t = !1, n = "") => {
			t || a("reset-flow"), I.value = e, a(e ? "overlay-opened" : "overlay-closed", Gr.time), o.arrowNavigation && l(e), L(() => {
				n !== "" && O.value[0] && O.value[0].openChildCmp(n);
			});
		}, z = B(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__button_bottom: o.autoApply && !g.value.keepActionRow
		})), ne = _s(d, "timePicker"), re = (e, t, n) => _.value.enabled ? t === 0 ? [e, te.value[1][n]] : [te.value[0][n], e] : e, ae = (e) => {
			a("update:hours", e);
		}, oe = (e) => {
			a("update:minutes", e);
		}, se = (e) => {
			a("update:seconds", e);
		}, ce = () => {
			if (k.value && !h.value.enabled && !o.noOverlayFocus) {
				let e = li(k.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, ue = (e) => {
			j.value = !1, a("overlay-closed", e);
		}, de = (e) => {
			j.value = !0, a("overlay-opened", e);
		};
		return r({ toggleTimePicker: R }), (r, i) => (p(), H("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": r.isMobile
		}, [!r.timePicker && !r.timePickerInline ? le((p(), H("button", {
			key: 0,
			ref_key: "openTimePickerBtn",
			ref: w,
			type: "button",
			class: E({
				...z.value,
				"dp--hidden-el": I.value
			}),
			"aria-label": W(m)?.openTimePicker,
			tabindex: r.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: i[0] ||= (e) => W(Si)(e, () => R(!0)),
			onClick: i[1] ||= (e) => R(!0)
		}, [r.$slots["clock-icon"] ? u(r.$slots, "clock-icon", { key: 0 }) : T("", !0), r.$slots["clock-icon"] ? T("", !0) : (p(), P(W(Nr), { key: 1 }))], 42, Do)), [[ie, !W(S)(r.hideNavigation, "time")]]) : T("", !0), U(e, {
			name: W(v)(I.value),
			css: W(b) && !r.timePickerInline
		}, {
			default: M(() => [I.value || r.timePicker || r.timePickerInline ? (p(), H("div", {
				key: 0,
				ref_key: "overlayRef",
				ref: k,
				role: r.timePickerInline ? void 0 : "dialog",
				class: E({
					dp__overlay: !r.timePickerInline,
					"dp--overlay-absolute": !o.timePicker && !r.timePickerInline,
					"dp--overlay-relative": o.timePicker
				}),
				style: y(r.timePicker ? { height: `${W(g).modeHeight}px` } : void 0),
				"aria-label": W(m)?.timePicker,
				tabindex: r.timePickerInline ? void 0 : 0
			}, [F("div", {
				class: E(r.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
				style: { display: "flex" }
			}, [
				r.$slots["time-picker-overlay"] ? u(r.$slots, "time-picker-overlay", {
					key: 0,
					hours: t.hours,
					minutes: t.minutes,
					seconds: t.seconds,
					setHours: ae,
					setMinutes: oe,
					setSeconds: se
				}) : T("", !0),
				r.$slots["time-picker-overlay"] ? T("", !0) : (p(), H("div", {
					key: 1,
					class: E(r.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
				}, [(p(!0), H(V, null, x(te.value, (e, a) => le((p(), P(To, n({ key: a }, { ref_for: !0 }, {
					...r.$props,
					order: a,
					hours: e.hours,
					minutes: e.minutes,
					seconds: e.seconds,
					closeTimePickerBtn: D.value,
					disabledTimesConfig: t.disabledTimesConfig,
					disabled: a === 0 ? W(_).fixedStart : W(_).fixedEnd
				}, {
					ref_for: !0,
					ref_key: "timeInputRefs",
					ref: O,
					"validate-time": (e, n) => t.validateTime(e, re(n, a, e)),
					"onUpdate:hours": (e) => ae(re(e, a, "hours")),
					"onUpdate:minutes": (e) => oe(re(e, a, "minutes")),
					"onUpdate:seconds": (e) => se(re(e, a, "seconds")),
					onMounted: ce,
					onOverlayClosed: ue,
					onOverlayOpened: de,
					onAmPmChange: i[2] ||= (e) => r.$emit("am-pm-change", e)
				}), me({ _: 2 }, [x(W(ne), (e, t) => ({
					name: e,
					fn: M((t) => [u(r.$slots, e, n({ ref_for: !0 }, t))])
				}))]), 1040, [
					"validate-time",
					"onUpdate:hours",
					"onUpdate:minutes",
					"onUpdate:seconds"
				])), [[ie, a === 0 || N.value]])), 128))], 2)),
				!r.timePicker && !r.timePickerInline ? le((p(), H("button", {
					key: 2,
					ref_key: "closeTimePickerBtn",
					ref: D,
					type: "button",
					class: E({
						...z.value,
						"dp--hidden-el": j.value
					}),
					"aria-label": W(m)?.closeTimePicker,
					tabindex: "0",
					onKeydown: i[3] ||= (e) => W(Si)(e, () => R(!1)),
					onClick: i[4] ||= (e) => R(!1)
				}, [r.$slots["calendar-icon"] ? u(r.$slots, "calendar-icon", { key: 0 }) : T("", !0), r.$slots["calendar-icon"] ? T("", !0) : (p(), P(W(kr), { key: 1 }))], 42, ko)), [[ie, !W(S)(r.hideNavigation, "time")]]) : T("", !0)
			], 2)], 14, Oo)) : T("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, Eo));
	}
}), jo = (e, t, n, r) => {
	let { defaultedRange: i } = Ha(e), a = (e, n) => Array.isArray(t[e]) ? t[e][n] : t[e], o = (n) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[n] : t.seconds : 0, s = (e, n) => e ? n === void 0 ? Ai(e, t.hours, t.minutes, o()) : Ai(e, a("hours", n), a("minutes", n), o(n)) : wr(Q(), o(n)), c = (e, n) => {
		t[e] = n;
	}, l = B(() => e.modelAuto && i.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : i.value.enabled), u = (e, r) => {
		let a = Object.fromEntries(Object.keys(t).map((n) => n === e ? [n, r] : [n, t[n]].slice()));
		if (l.value && !i.value.disableTimeRangeValidation) {
			let e = (e) => n.value ? Ai(n.value[e], a.hours[e], a.minutes[e], a.seconds[e]) : null, t = (e) => Sr(n.value[e], 0);
			return !($(e(0), e(1)) && (on(e(0), t(1)) || sn(e(1), t(0))));
		}
		return !0;
	}, d = (e, t) => {
		u(e, t) && (c(e, t), r && r());
	}, f = (e) => {
		d("hours", e);
	}, p = (e) => {
		d("minutes", e);
	}, m = (e) => {
		d("seconds", e);
	}, h = (e, t, r, i) => {
		t && f(e), !t && !r && p(e), r && m(e), n.value && i(n.value);
	}, g = (t) => {
		if (t) {
			let n = Array.isArray(t), r = n ? [+t[0].hours, +t[1].hours] : +t.hours, i = n ? [+t[0].minutes, +t[1].minutes] : +t.minutes, a = n ? [+t[0].seconds, +t[1].seconds] : +t.seconds;
			c("hours", r), c("minutes", i), e.enableSeconds && c("seconds", a);
		}
	}, _ = (n, r) => {
		let a = {
			hours: Array.isArray(t.hours) ? t.hours[n] : t.hours,
			disabledArr: []
		};
		return (r || r === 0) && (a.hours = r), Array.isArray(e.disabledTimes) && (a.disabledArr = i.value.enabled && Array.isArray(e.disabledTimes[n]) ? e.disabledTimes[n] : e.disabledTimes), a;
	};
	return {
		setTime: c,
		updateHours: f,
		updateMinutes: p,
		updateSeconds: m,
		getSetDateTime: s,
		updateTimeValues: h,
		getSecondsValue: o,
		assignStartTime: g,
		validateTime: u,
		disabledTimesConfig: B(() => (t, n) => {
			if (Array.isArray(e.disabledTimes)) {
				let { disabledArr: e, hours: r } = _(t, n), i = e.filter((e) => +e.hours === r);
				return i[0]?.minutes === "*" ? {
					hours: [r],
					minutes: void 0,
					seconds: void 0
				} : {
					hours: [],
					minutes: i?.map((e) => +e.minutes) ?? [],
					seconds: i?.map((e) => e.seconds ? +e.seconds : void 0) ?? []
				};
			}
			return {
				hours: [],
				minutes: [],
				seconds: []
			};
		})
	};
}, Mo = (e, t) => {
	let { modelValue: n, time: r } = ys(e, t, () => {
		e.isTextInputDate && b();
	}), { defaultedStartTime: i, defaultedRange: a, defaultedTz: o } = Ha(e), { updateTimeValues: s, getSetDateTime: l, setTime: u, assignStartTime: d, disabledTimesConfig: f, validateTime: p } = jo(e, r, n, m);
	function m() {
		t("update-flow-step");
	}
	let h = (e) => {
		let { hours: t, minutes: n, seconds: r } = e;
		return {
			hours: +t,
			minutes: +n,
			seconds: r ? +r : 0
		};
	}, g = () => {
		if (e.startTime) {
			if (Array.isArray(e.startTime)) {
				let t = h(e.startTime[0]), n = h(e.startTime[1]);
				return [Z(Q(), t), Z(Q(), n)];
			}
			let t = h(e.startTime);
			return Z(Q(), t);
		}
		return a.value.enabled ? [null, null] : null;
	}, _ = () => {
		if (a.value.enabled) {
			let [e, t] = g();
			n.value = [Ir(l(e, 0), o.value.timezone), Ir(l(t, 1), o.value.timezone)];
		} else n.value = Ir(l(g()), o.value.timezone);
	}, v = (e) => Array.isArray(e) ? [Ii(Q(e[0])), Ii(Q(e[1]))] : [Ii(e ?? Q())], y = (t, n, r) => {
		u("hours", t), u("minutes", n), u("seconds", e.enableSeconds ? r : 0);
	}, b = () => {
		let [e, t] = v(n.value);
		return a.value.enabled ? y([e.hours, t.hours], [e.minutes, t.minutes], [e.seconds, t.seconds]) : y(e.hours, e.minutes, e.seconds);
	};
	c(() => {
		if (!e.shadow) return d(i.value), n.value ? b() : _();
	});
	let x = () => {
		Array.isArray(n.value) ? n.value = n.value.map((e, t) => e && l(e, t)) : n.value = l(n.value), t("time-update");
	};
	return {
		modelValue: n,
		time: r,
		disabledTimesConfig: f,
		updateTime: (e, t = !0, n = !1) => {
			s(e, t, n, x);
		},
		validateTime: p
	};
}, No = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "TimePickerSolo",
	props: { ...Ka },
	emits: [
		"update:internal-model-value",
		"time-update",
		"am-pm-change",
		"mount",
		"reset-flow",
		"update-flow-step",
		"overlay-toggle"
	],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = e, o = _s(C(), "timePicker"), s = A(null), { time: l, modelValue: d, disabledTimesConfig: f, updateTime: m, validateTime: h } = Mo(a, i);
		return c(() => {
			a.shadow || i("mount", null);
		}), t({
			getSidebarProps: () => ({
				modelValue: d,
				time: l,
				updateTime: m
			}),
			toggleTimePicker: (e, t = !1, n = "") => {
				s.value?.toggleTimePicker(e, t, n);
			}
		}), (e, t) => (p(), P(no, {
			"multi-calendars": 0,
			stretch: "",
			"is-mobile": e.isMobile
		}, {
			default: M(() => [U(Ao, n({
				ref_key: "tpRef",
				ref: s
			}, e.$props, {
				hours: W(l).hours,
				minutes: W(l).minutes,
				seconds: W(l).seconds,
				"internal-model-value": e.internalModelValue,
				"disabled-times-config": W(f),
				"validate-time": W(h),
				"onUpdate:hours": t[0] ||= (e) => W(m)(e),
				"onUpdate:minutes": t[1] ||= (e) => W(m)(e, !1),
				"onUpdate:seconds": t[2] ||= (e) => W(m)(e, !1, !0),
				onAmPmChange: t[3] ||= (t) => e.$emit("am-pm-change", t),
				onResetFlow: t[4] ||= (t) => e.$emit("reset-flow"),
				onOverlayClosed: t[5] ||= (t) => e.$emit("overlay-toggle", {
					open: !1,
					overlay: t
				}),
				onOverlayOpened: t[6] ||= (t) => e.$emit("overlay-toggle", {
					open: !0,
					overlay: t
				})
			}), me({ _: 2 }, [x(W(o), (t, n) => ({
				name: t,
				fn: M((n) => [u(e.$slots, t, pe(b(n)))])
			}))]), 1040, [
				"hours",
				"minutes",
				"seconds",
				"internal-model-value",
				"disabled-times-config",
				"validate-time"
			])]),
			_: 3
		}, 8, ["is-mobile"]));
	}
}), Po = { class: "dp--header-wrap" }, Fo = {
	key: 0,
	class: "dp__month_year_wrap"
}, Io = { key: 0 }, Lo = { class: "dp__month_year_wrap" }, Ro = [
	"data-dp-element",
	"aria-label",
	"data-test-id",
	"onClick",
	"onKeydown"
], zo = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "DpHeader",
	props: {
		month: {
			type: Number,
			default: 0
		},
		year: {
			type: Number,
			default: 0
		},
		instance: {
			type: Number,
			default: 0
		},
		years: {
			type: Array,
			default: () => []
		},
		months: {
			type: Array,
			default: () => []
		},
		...Ka
	},
	emits: [
		"update-month-year",
		"mount",
		"reset-flow",
		"overlay-closed",
		"overlay-opened"
	],
	setup(t, { expose: r, emit: a }) {
		let o = a, s = t, { defaultedTransitions: d, defaultedAriaLabels: f, defaultedMultiCalendars: m, defaultedFilters: h, defaultedConfig: g, defaultedHighlight: _, propDates: v, defaultedUI: y } = Ha(s), { transitionName: S, showTransition: C } = vs(d), { buildMatrix: w } = xa(), { handleMonthYearChange: O, isDisabled: k, updateMonthYear: j } = Wa(s, o), { showLeftIcon: N, showRightIcon: I } = Ss(), ee = A(!1), te = A(!1), L = A(!1), R = A([
			null,
			null,
			null,
			null
		]);
		c(() => {
			o("mount");
		});
		let z = (e) => ({
			get: () => s[e],
			set: (t) => {
				let n = e === Hr.month ? Hr.year : Hr.month;
				o("update-month-year", {
					[e]: t,
					[n]: s[n]
				}), e === Hr.month ? le(!0) : ue(!0);
			}
		}), ne = B(z(Hr.month)), re = B(z(Hr.year)), ie = B(() => (e) => ({
			month: s.month,
			year: s.year,
			items: e === Hr.month ? s.months : s.years,
			instance: s.instance,
			updateMonthYear: j,
			toggle: e === Hr.month ? le : ue
		})), ae = B(() => s.months.find((e) => e.value === s.month) || {
			text: "",
			value: 0
		}), oe = B(() => fi(s.months, (e) => ({
			active: s.month === e.value,
			disabled: di(e.value, Li(s.year, v.value.minDate), Ri(s.year, v.value.maxDate)) || h.value.months.includes(e.value),
			highlighted: oa(_.value, e.value, s.year)
		}))), se = B(() => fi(s.years, (e) => ({
			active: s.year === e.value,
			disabled: di(e.value, zi(v.value.minDate), zi(v.value.maxDate)) || h.value.years.includes(e.value),
			highlighted: sa(_.value, e.value)
		}))), ce = (e, t, n) => {
			e.value = n === void 0 ? !e.value : n, e.value ? (L.value = !0, o("overlay-opened", t)) : (L.value = !1, o("overlay-closed", t));
		}, le = (e = !1, t) => {
			de(e), ce(ee, Gr.month, t);
		}, ue = (e = !1, t) => {
			de(e), ce(te, Gr.year, t);
		}, de = (e) => {
			e || o("reset-flow");
		}, fe = (e, t) => {
			s.arrowNavigation && (R.value[t] = ni(e), w(R.value, "monthYear"));
		}, he = B(() => [{
			type: Hr.month,
			index: 1,
			toggle: le,
			modelValue: ne.value,
			updateModelValue: (e) => ne.value = e,
			text: ae.value.text,
			showSelectionGrid: ee.value,
			items: oe.value,
			ariaLabel: f.value?.openMonthsOverlay,
			overlayLabel: f.value.monthPicker?.(!0) ?? void 0
		}, {
			type: Hr.year,
			index: 2,
			toggle: ue,
			modelValue: re.value,
			updateModelValue: (e) => re.value = e,
			text: _i(s.year, s.locale),
			showSelectionGrid: te.value,
			items: se.value,
			ariaLabel: f.value?.openYearsOverlay,
			overlayLabel: f.value.yearPicker?.(!0) ?? void 0
		}]), ge = B(() => s.disableYearSelect ? [he.value[0]] : s.yearFirst ? [...he.value].reverse() : he.value);
		return r({
			toggleMonthPicker: le,
			toggleYearPicker: ue,
			handleMonthYearChange: O
		}), (r, a) => (p(), H("div", Po, [r.$slots["month-year"] ? (p(), H("div", Fo, [u(r.$slots, "month-year", pe(b({
			month: t.month,
			year: t.year,
			months: t.months,
			years: t.years,
			updateMonthYear: W(j),
			handleMonthYearChange: W(O),
			instance: t.instance,
			isDisabled: W(k)
		})))])) : (p(), H(V, { key: 1 }, [r.$slots["top-extra"] ? (p(), H("div", Io, [u(r.$slots, "top-extra", { value: r.internalModelValue })])) : T("", !0), F("div", Lo, [
			W(N)(W(m), t.instance) && !r.vertical ? (p(), P(io, {
				key: 0,
				"aria-label": W(f)?.prevMonth,
				disabled: W(k)(!1),
				class: E(W(y)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: a[0] ||= (e) => W(O)(!1, !0),
				onSetRef: a[1] ||= (e) => fe(e, 0)
			}, {
				default: M(() => [r.$slots["arrow-left"] ? u(r.$slots, "arrow-left", { key: 0 }) : T("", !0), r.$slots["arrow-left"] ? T("", !0) : (p(), P(W(jr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : T("", !0),
			F("div", { class: E(["dp__month_year_wrap", { dp__year_disable_select: r.disableYearSelect }]) }, [(p(!0), H(V, null, x(ge.value, (a, o) => (p(), H(V, { key: a.type }, [F("button", {
				ref_for: !0,
				ref: (e) => fe(e, o + 1),
				type: "button",
				"data-dp-element": `overlay-${a.type}`,
				class: E(["dp__btn dp__month_year_select", { "dp--hidden-el": L.value }]),
				"aria-label": `${a.text}-${a.ariaLabel}`,
				"data-test-id": `${a.type}-toggle-overlay-${t.instance}`,
				onClick: a.toggle,
				onKeydown: (e) => W(Si)(e, () => a.toggle(), !0)
			}, [r.$slots[a.type] ? u(r.$slots, a.type, {
				key: 0,
				text: a.text,
				value: s[a.type]
			}) : T("", !0), r.$slots[a.type] ? T("", !0) : (p(), H(V, { key: 1 }, [D(i(a.text), 1)], 64))], 42, Ro), U(e, {
				name: W(S)(a.showSelectionGrid),
				css: W(C)
			}, {
				default: M(() => [a.showSelectionGrid ? (p(), P(eo, {
					key: 0,
					items: a.items,
					"arrow-navigation": r.arrowNavigation,
					"hide-navigation": r.hideNavigation,
					"is-last": r.autoApply && !W(g).keepActionRow,
					"skip-button-ref": !1,
					config: r.config,
					type: a.type,
					"header-refs": [],
					"esc-close": r.escClose,
					"menu-wrap-ref": r.menuWrapRef,
					"text-input": r.textInput,
					"aria-labels": r.ariaLabels,
					"overlay-label": a.overlayLabel,
					onSelected: a.updateModelValue,
					onToggle: a.toggle
				}, me({
					"button-icon": M(() => [r.$slots["calendar-icon"] ? u(r.$slots, "calendar-icon", { key: 0 }) : T("", !0), r.$slots["calendar-icon"] ? T("", !0) : (p(), P(W(kr), { key: 1 }))]),
					_: 2
				}, [
					r.$slots[`${a.type}-overlay-value`] ? {
						name: "item",
						fn: M(({ item: e }) => [u(r.$slots, `${a.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					r.$slots[`${a.type}-overlay`] ? {
						name: "overlay",
						fn: M(() => [u(r.$slots, `${a.type}-overlay`, n({ ref_for: !0 }, ie.value(a.type)))]),
						key: "1"
					} : void 0,
					r.$slots[`${a.type}-overlay-header`] ? {
						name: "header",
						fn: M(() => [u(r.$slots, `${a.type}-overlay-header`, { toggle: a.toggle })]),
						key: "2"
					} : void 0
				]), 1032, [
					"items",
					"arrow-navigation",
					"hide-navigation",
					"is-last",
					"config",
					"type",
					"esc-close",
					"menu-wrap-ref",
					"text-input",
					"aria-labels",
					"overlay-label",
					"onSelected",
					"onToggle"
				])) : T("", !0)]),
				_: 2
			}, 1032, ["name", "css"])], 64))), 128))], 2),
			W(N)(W(m), t.instance) && r.vertical ? (p(), P(io, {
				key: 1,
				"aria-label": W(f)?.prevMonth,
				"el-name": "action-prev",
				disabled: W(k)(!1),
				class: E(W(y)?.navBtnPrev),
				onActivate: a[2] ||= (e) => W(O)(!1, !0)
			}, {
				default: M(() => [r.$slots["arrow-up"] ? u(r.$slots, "arrow-up", { key: 0 }) : T("", !0), r.$slots["arrow-up"] ? T("", !0) : (p(), P(W(Pr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : T("", !0),
			W(I)(W(m), t.instance) ? (p(), P(io, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: W(k)(!0),
				"aria-label": W(f)?.nextMonth,
				class: E(W(y)?.navBtnNext),
				onActivate: a[3] ||= (e) => W(O)(!0, !0),
				onSetRef: a[4] ||= (e) => fe(e, r.disableYearSelect ? 2 : 3)
			}, {
				default: M(() => [r.$slots[r.vertical ? "arrow-down" : "arrow-right"] ? u(r.$slots, r.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : T("", !0), r.$slots[r.vertical ? "arrow-down" : "arrow-right"] ? T("", !0) : (p(), P(l(r.vertical ? W(Fr) : W(Mr)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"class"
			])) : T("", !0)
		])], 64))]));
	}
}), Bo = {
	class: "dp__calendar_header",
	role: "row"
}, Vo = {
	key: 0,
	class: "dp__calendar_header_item",
	role: "gridcell"
}, Ho = ["aria-label"], Uo = {
	key: 0,
	class: "dp__calendar_item dp__week_num",
	role: "gridcell"
}, Wo = { class: "dp__cell_inner" }, Go = [
	"id",
	"aria-selected",
	"aria-disabled",
	"aria-label",
	"tabindex",
	"data-test-id",
	"onClick",
	"onTouchend",
	"onKeydown",
	"onMouseenter",
	"onMouseleave",
	"onMousedown"
], Ko = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "DpCalendar",
	props: {
		mappedDates: {
			type: Array,
			default: () => []
		},
		instance: {
			type: Number,
			default: 0
		},
		month: {
			type: Number,
			default: 0
		},
		year: {
			type: Number,
			default: 0
		},
		...Ka
	},
	emits: [
		"select-date",
		"set-hover-date",
		"handle-scroll",
		"mount",
		"handle-swipe",
		"handle-space",
		"tooltip-open",
		"tooltip-close"
	],
	setup(t, { expose: n, emit: r }) {
		let a = r, o = t, { buildMultiLevelMatrix: s } = xa(), { defaultedTransitions: l, defaultedConfig: f, defaultedAriaLabels: m, defaultedMultiCalendars: h, defaultedWeekNumbers: g, defaultedMultiDates: _, defaultedUI: v } = Ha(o), b = A(null), S = A({
			bottom: "",
			left: "",
			transform: ""
		}), C = A([]), w = A(null), O = A(!0), j = A(""), N = A({
			startX: 0,
			endX: 0,
			startY: 0,
			endY: 0
		}), P = A([]), I = A({ left: "50%" }), ee = A(!1), te = B(() => o.calendar ? o.calendar(o.mappedDates) : o.mappedDates), R = B(() => o.dayNames ? Array.isArray(o.dayNames) ? o.dayNames : o.dayNames(o.locale, +o.weekStart) : Qr(o.formatLocale, o.locale, +o.weekStart));
		c(() => {
			a("mount", {
				cmp: "calendar",
				refs: C
			}), f.value.noSwipe || w.value && (w.value.addEventListener("touchstart", fe, { passive: !1 }), w.value.addEventListener("touchend", pe, { passive: !1 }), w.value.addEventListener("touchmove", me, { passive: !1 })), o.monthChangeOnScroll && w.value && w.value.addEventListener("wheel", _e, { passive: !1 });
		}), d(() => {
			f.value.noSwipe || w.value && (w.value.removeEventListener("touchstart", fe), w.value.removeEventListener("touchend", pe), w.value.removeEventListener("touchmove", me)), o.monthChangeOnScroll && w.value && w.value.removeEventListener("wheel", _e);
		});
		let z = (e) => e ? o.vertical ? "vNext" : "next" : o.vertical ? "vPrevious" : "previous", ne = (e, t) => {
			if (o.transitions) {
				let n = ki(Gi(Q(), o.month, o.year));
				j.value = Mi(ki(Gi(Q(), e, t)), n) ? l.value[z(!0)] : l.value[z(!1)], O.value = !1, L(() => {
					O.value = !0;
				});
			}
		}, re = B(() => ({ ...v.value.calendar ?? {} })), ie = B(() => (e) => {
			let t = ri(e);
			return {
				dp__marker_dot: t.type === "dot",
				dp__marker_line: t.type === "line"
			};
		}), ae = B(() => (e) => $(e, b.value)), oe = B(() => ({
			dp__calendar: !0,
			dp__calendar_next: h.value.count > 0 && o.instance !== 0
		})), se = B(() => (e) => !o.hideOffsetDates || e.current), ce = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			b.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await L(), P.value[0]) {
				let { left: e, width: t } = P.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, I.value.left = `${n / 2}px`), window.innerWidth < e + t && (i = { right: "0" }, a = 0, I.value.left = `${t - n / 2}px`);
			}
			S.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, le = async (e, t, n) => {
			let r = ni(C.value[t][n]);
			r && (e.marker?.customPosition && e.marker?.tooltip?.length ? S.value = e.marker.customPosition(r) : await ce(r, e), a("tooltip-open", e.marker));
		}, ue = async (e, t, n) => {
			if (ee.value && _.value.enabled && _.value.dragSelect) return a("select-date", e);
			if (a("set-hover-date", e), e.marker?.tooltip?.length) {
				if (o.hideOffsetDates && !e.current) return;
				await le(e, t, n);
			}
		}, de = (e) => {
			b.value && (b.value = null, S.value = JSON.parse(JSON.stringify({
				bottom: "",
				left: "",
				transform: ""
			})), a("tooltip-close", e.marker));
		}, fe = (e) => {
			N.value.startX = e.changedTouches[0].screenX, N.value.startY = e.changedTouches[0].screenY;
		}, pe = (e) => {
			N.value.endX = e.changedTouches[0].screenX, N.value.endY = e.changedTouches[0].screenY, he();
		}, me = (e) => {
			o.vertical && !o.inline && e.preventDefault();
		}, he = () => {
			let e = o.vertical ? "Y" : "X";
			Math.abs(N.value[`start${e}`] - N.value[`end${e}`]) > 10 && a("handle-swipe", N.value[`start${e}`] > N.value[`end${e}`] ? "right" : "left");
		}, ge = (e, t, n) => {
			e && (Array.isArray(C.value[t]) ? C.value[t][n] = e : C.value[t] = [e]), o.arrowNavigation && s(C.value, "calendar");
		}, _e = (e) => {
			o.monthChangeOnScroll && (e.preventDefault(), a("handle-scroll", e));
		}, ve = (e) => g.value.type === "local" ? Ot(e.value, { weekStartsOn: +o.weekStart }) : g.value.type === "iso" ? Tt(e.value) : typeof g.value.type == "function" ? g.value.type(e.value) : "", ye = (e) => {
			let t = e[0];
			return g.value.hideOnOffsetDates ? e.some((e) => e.current) ? ve(t) : "" : ve(t);
		}, be = (e, t, n = !0) => {
			!n && Ci() || (!_.value.enabled || f.value.allowPreventDefault) && (pi(e, f.value), a("select-date", t));
		}, xe = (e) => {
			pi(e, f.value);
		}, Se = (e) => {
			_.value.enabled && _.value.dragSelect ? (ee.value = !0, a("select-date", e)) : _.value.enabled && a("select-date", e);
		};
		return n({ triggerTransition: ne }), (t, n) => (p(), H("div", { class: E(oe.value) }, [F("div", {
			ref_key: "calendarWrapRef",
			ref: w,
			class: E(re.value),
			role: "grid"
		}, [
			F("div", Bo, [t.weekNumbers ? (p(), H("div", Vo, i(t.weekNumName), 1)) : T("", !0), (p(!0), H(V, null, x(R.value, (e, n) => (p(), H("div", {
				key: n,
				class: "dp__calendar_header_item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": W(m)?.weekDay?.(n)
			}, [t.$slots["calendar-header"] ? u(t.$slots, "calendar-header", {
				key: 0,
				day: e,
				index: n
			}) : T("", !0), t.$slots["calendar-header"] ? T("", !0) : (p(), H(V, { key: 1 }, [D(i(e), 1)], 64))], 8, Ho))), 128))]),
			n[2] ||= F("div", { class: "dp__calendar_header_separator" }, null, -1),
			U(e, {
				name: j.value,
				css: !!t.transitions
			}, {
				default: M(() => [O.value ? (p(), H("div", {
					key: 0,
					class: "dp__calendar",
					role: "rowgroup",
					onMouseleave: n[1] ||= (e) => ee.value = !1
				}, [(p(!0), H(V, null, x(te.value, (e, r) => (p(), H("div", {
					key: r,
					class: "dp__calendar_row",
					role: "row"
				}, [t.weekNumbers ? (p(), H("div", Uo, [F("div", Wo, i(ye(e.days)), 1)])) : T("", !0), (p(!0), H(V, null, x(e.days, (e, a) => (p(), H("div", {
					id: W(ca)(e.value),
					ref_for: !0,
					ref: (e) => ge(e, r, a),
					key: a + r,
					role: "gridcell",
					class: "dp__calendar_item",
					"aria-selected": (e.classData.dp__active_date || e.classData.dp__range_start || e.classData.dp__range_end) ?? void 0,
					"aria-disabled": e.classData.dp__cell_disabled || void 0,
					"aria-label": W(m)?.day?.(e),
					tabindex: !e.current && t.hideOffsetDates ? void 0 : 0,
					"data-test-id": W(ca)(e.value),
					onClick: k((t) => be(t, e), ["prevent"]),
					onTouchend: (t) => be(t, e, !1),
					onKeydown: (n) => W(Si)(n, () => t.$emit("select-date", e)),
					onMouseenter: (t) => ue(e, r, a),
					onMouseleave: (t) => de(e),
					onMousedown: (t) => Se(e),
					onMouseup: n[0] ||= (e) => ee.value = !1
				}, [F("div", { class: E(["dp__cell_inner", e.classData]) }, [
					t.$slots.day && se.value(e) ? u(t.$slots, "day", {
						key: 0,
						day: +e.text,
						date: e.value
					}) : T("", !0),
					t.$slots.day ? T("", !0) : (p(), H(V, { key: 1 }, [D(i(e.text), 1)], 64)),
					e.marker && se.value(e) ? (p(), H(V, { key: 2 }, [t.$slots.marker ? u(t.$slots, "marker", {
						key: 0,
						marker: e.marker,
						day: +e.text,
						date: e.value
					}) : (p(), H("div", {
						key: 1,
						class: E(ie.value(e.marker)),
						style: y(e.marker.color ? { backgroundColor: e.marker.color } : {})
					}, null, 6))], 64)) : T("", !0),
					ae.value(e.value) ? (p(), H("div", {
						key: 3,
						ref_for: !0,
						ref_key: "activeTooltip",
						ref: P,
						class: "dp__marker_tooltip",
						style: y(S.value)
					}, [e.marker?.tooltip ? (p(), H("div", {
						key: 0,
						class: "dp__tooltip_content",
						onClick: xe
					}, [(p(!0), H(V, null, x(e.marker.tooltip, (n, r) => (p(), H("div", {
						key: r,
						class: "dp__tooltip_text"
					}, [t.$slots["marker-tooltip"] ? u(t.$slots, "marker-tooltip", {
						key: 0,
						tooltip: n,
						day: e.value
					}) : T("", !0), t.$slots["marker-tooltip"] ? T("", !0) : (p(), H(V, { key: 1 }, [F("div", {
						class: "dp__tooltip_mark",
						style: y(n.color ? { backgroundColor: n.color } : {})
					}, null, 4), F("div", null, i(n.text), 1)], 64))]))), 128)), F("div", {
						class: "dp__arrow_bottom_tp",
						style: y(I.value)
					}, null, 4)])) : T("", !0)], 4)) : T("", !0)
				], 2)], 40, Go))), 128))]))), 128))], 32)) : T("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 2));
	}
}), qo = (e) => Array.isArray(e), Jo = (e, t, n, r) => {
	let i = A([]), a = A(/* @__PURE__ */ new Date()), o = A(), { modelValue: s, calendars: l, time: u, today: d } = ys(e, t, () => te(e.isTextInputDate)), { defaultedMultiCalendars: f, defaultedStartTime: p, defaultedRange: m, defaultedConfig: h, defaultedTz: g, propDates: _, defaultedMultiDates: v } = Ha(e), { validateMonthYearInRange: y, isDisabled: b, isDateRangeAllowed: x, checkMinMaxRange: S } = xs(e), { updateTimeValues: C, getSetDateTime: w, setTime: T, assignStartTime: E, validateTime: D, disabledTimesConfig: O } = jo(e, u, s, r), k = B(() => (e) => l.value[e] ? l.value[e].month : 0), j = B(() => (e) => l.value[e] ? l.value[e].year : 0), M = (e) => !h.value.keepViewOnOffsetClick || e ? !0 : !o.value, N = (e, t, n, r = !1) => {
		M(r) && (l.value[e] || (l.value[e] = {
			month: 0,
			year: 0
		}), l.value[e].month = ci(t) ? l.value[e]?.month : t, l.value[e].year = ci(n) ? l.value[e]?.year : n);
	}, P = () => {
		e.autoApply && t("select-date");
	}, F = () => {
		p.value && E(p.value);
	};
	c(() => {
		e.shadow || (s.value || (ue(), F()), te(!0), e.focusStartDate && e.startDate && ue());
	});
	let I = B(() => e.flow?.length && !e.partialFlow ? e.flowStep === e.flow.length : !0), ee = () => {
		e.autoApply && I.value && t("auto-apply", e.partialFlow ? e.flowStep !== e.flow.length : !1);
	}, te = (t = !1) => {
		if (s.value) return Array.isArray(s.value) ? (i.value = s.value, oe(t)) : ne(s.value, t);
		if (f.value.count && t && !e.startDate) return z(Q(), t);
	}, R = () => Array.isArray(s.value) && m.value.enabled ? J(s.value[0]) === J(s.value[1] ?? s.value[0]) : !1, z = (e = /* @__PURE__ */ new Date(), t = !1) => {
		if ((!f.value.count || !f.value.static || t) && N(0, J(e), Y(e)), f.value.count && (!s.value || R() || !f.value.solo) && (!f.value.solo || t)) for (let e = 1; e < f.value.count; e++) {
			let t = Fe(Z(Q(), {
				month: k.value(e - 1),
				year: j.value(e - 1)
			}), { months: 1 });
			l.value[e] = {
				month: J(t),
				year: Y(t)
			};
		}
	}, ne = (e, t) => {
		z(e), T("hours", tn(e)), T("minutes", rn(e)), T("seconds", an(e)), f.value.count && t && le();
	}, re = (e) => {
		if (f.value.count) {
			if (f.value.solo) return 0;
			let t = J(e[0]), n = J(e[1]);
			return Math.abs(n - t) < f.value.count ? 0 : 1;
		}
		return 1;
	}, ie = (e, t) => {
		e[1] && m.value.showLastInRange ? z(e[re(e)], t) : z(e[0], t);
		let n = (t, n) => [t(e[0]), e[1] ? t(e[1]) : u[n][1]];
		T("hours", n(tn, "hours")), T("minutes", n(rn, "minutes")), T("seconds", n(an, "seconds"));
	}, ae = (t, n) => {
		if ((m.value.enabled || e.weekPicker) && !v.value.enabled) return ie(t, n);
		if (v.value.enabled && n) {
			let e = t[t.length - 1];
			return ne(e, n);
		}
	}, oe = (e) => {
		let t = s.value;
		ae(t, e), f.value.count && f.value.solo && le();
	}, se = (r, i) => {
		let a = Z(Q(), {
			month: k.value(i),
			year: j.value(i)
		}), o = r < 0 ? Pe(a, 1) : Er(a, 1);
		y(J(o), Y(o), r < 0, e.preventMinMaxNavigation) && (N(i, J(o), Y(o)), t("update-month-year", {
			instance: i,
			month: J(o),
			year: Y(o)
		}), f.value.count && !f.value.solo && ce(i), n());
	}, ce = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = Er(Z(Q(), {
				month: k.value(t + 1),
				year: j.value(t + 1)
			}), 1);
			N(t, J(e), Y(e));
		}
		for (let t = e + 1; t <= f.value.count - 1; t++) {
			let e = Pe(Z(Q(), {
				month: k.value(t - 1),
				year: j.value(t - 1)
			}), 1);
			N(t, J(e), Y(e));
		}
	}, le = () => {
		if (Array.isArray(s.value) && s.value.length === 2) {
			let e = Q(Q(s.value[1] ? s.value[1] : Pe(s.value[0], 1))), [t, n] = [J(s.value[0]), Y(s.value[0])], [r, i] = [J(s.value[1]), Y(s.value[1])];
			(t !== r || t === r && n !== i) && f.value.solo && N(1, J(e), Y(e));
		} else s.value && !Array.isArray(s.value) && (N(0, J(s.value), Y(s.value)), z(Q()));
	}, ue = () => {
		e.startDate && (N(0, J(Q(e.startDate)), Y(Q(e.startDate))), f.value.count && ce(0));
	}, V = (t, n) => {
		if (e.monthChangeOnScroll) {
			let r = (/* @__PURE__ */ new Date()).getTime() - a.value.getTime(), i = Math.abs(t.deltaY), o = 500;
			i > 1 && (o = 100), i > 100 && (o = 0), r > o && (a.value = /* @__PURE__ */ new Date(), se(e.monthChangeOnScroll === "inverse" ? t.deltaY : -t.deltaY, n));
		}
	}, de = (t, n, r = !1) => {
		e.monthChangeOnArrows && e.vertical === r && H(t, n);
	}, H = (e, t) => {
		se(e === "right" ? -1 : 1, t);
	}, fe = (e) => {
		if (_.value.markers) return bi(e.value, _.value.markers);
	}, pe = (t, n) => {
		switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
			case "prepend": return [!0, !1];
			case "center": return [t == 0, !0];
			case "fair": return [t == 0 || n > t, !0];
			case "append": return [!1, !1];
			default: return [!1, !1];
		}
	}, U = (t, n, r, i) => {
		if (e.sixWeeks && t.length < 6) {
			let e = 6 - t.length, a = (n.getDay() + 7 - i) % 7, o = 6 - (r.getDay() + 7 - i) % 7, [s, c] = pe(a, o);
			for (let r = 1; r <= e; r++) if (c ? !!(r % 2) == s : s) {
				let e = t[0].days[0], r = W(Ne(e.value, -7), J(n));
				t.unshift({ days: r });
			} else {
				let e = t[t.length - 1], r = e.days[e.days.length - 1], i = W(Ne(r.value, 1), J(n));
				t.push({ days: i });
			}
		}
		return t;
	}, W = (t, n) => {
		let r = Q(t), i = [];
		for (let t = 0; t < 7; t++) {
			let a = Ne(r, t), o = J(a) !== n;
			i.push({
				text: e.hideOffsetDates && o ? "" : a.getDate(),
				value: a,
				current: !o,
				classData: {}
			});
		}
		return i;
	}, me = (t, n) => {
		let r = [], i = new Date(n, t), a = new Date(n, t + 1, 0), o = e.weekStart, s = Be(i, { weekStartsOn: o }), c = (e) => {
			let n = W(e, t);
			if (r.push({ days: n }), !r[r.length - 1].days.some((e) => $(ki(e.value), ki(a)))) {
				let t = Ne(e, 7);
				c(t);
			}
		};
		return c(s), U(r, i, a, o);
	}, he = (e) => {
		let n = Ai(Q(e.value), u.hours, u.minutes, Se());
		t("date-update", n), v.value.enabled ? so(n, s, v.value.limit) : s.value = n, r(), L().then(() => {
			ee();
		});
	}, ge = (e) => m.value.noDisabledRange ? Bi(i.value[0], e).some((e) => b(e)) : !1, _e = () => {
		i.value = s.value ? s.value.slice() : [], i.value.length === 2 && !(m.value.fixedStart || m.value.fixedEnd) && (i.value = []);
	}, ve = (e, n) => {
		let r = [Q(e.value), Ne(Q(e.value), +m.value.autoRange)];
		x(r) ? (n && ye(e.value), i.value = r) : t("invalid-date", e.value);
	}, ye = (e) => {
		let t = J(Q(e)), n = Y(Q(e));
		if (N(0, t, n), f.value.count > 0) for (let t = 1; t < f.value.count; t++) {
			let n = Vi(Z(Q(e), {
				year: j.value(t - 1),
				month: k.value(t - 1)
			}));
			N(t, n.month, n.year);
		}
	}, be = (e) => {
		if (ge(e.value) || !S(e.value, s.value, +!m.value.fixedStart)) return t("invalid-date", e.value);
		i.value = fo(Q(e.value), s, t, m);
	}, xe = (n, r) => {
		if (_e(), m.value.autoRange) return ve(n, r);
		if (m.value.fixedStart || m.value.fixedEnd) return be(n);
		i.value[0] ? S(Q(n.value), s.value) && !ge(n.value) ? ji(Q(n.value), Q(i.value[0])) ? (i.value.unshift(Q(n.value)), t("range-end", i.value[0])) : (i.value[1] = Q(n.value), t("range-end", i.value[1])) : (e.autoApply && t("auto-apply-invalid", n.value), t("invalid-date", n.value)) : (i.value[0] = Q(n.value), t("range-start", i.value[0]));
	}, Se = (t = !0) => e.enableSeconds ? Array.isArray(u.seconds) ? t ? u.seconds[0] : u.seconds[1] : u.seconds : 0, Ce = (e) => {
		i.value[e] = Ai(i.value[e], u.hours[e], u.minutes[e], Se(e !== 1));
	}, we = () => {
		i.value[0] && i.value[1] && +i.value?.[0] > +i.value?.[1] && (i.value.reverse(), t("range-start", i.value[0]), t("range-end", i.value[1]));
	}, Te = () => {
		i.value.length && (i.value[0] && !i.value[1] ? Ce(0) : (Ce(0), Ce(1), r()), we(), s.value = i.value.slice(), lo(i.value, t, e.autoApply, e.modelAuto));
	}, Ee = (n, r = !1) => {
		if (b(n.value) || !n.current && e.hideOffsetDates) return t("invalid-date", n.value);
		if (o.value = JSON.parse(JSON.stringify(n)), !m.value.enabled) return he(n);
		qo(u.hours) && qo(u.minutes) && !v.value.enabled && (xe(n, r), Te());
	}, De = (i, a) => {
		N(i, a.month, a.year, !0), f.value.count && !f.value.solo && ce(i), t("update-month-year", {
			instance: i,
			month: a.month,
			year: a.year
		}), n(f.value.solo ? i : void 0);
		let o = e.flow?.length ? e.flow[e.flowStep] : void 0;
		!a.fromNav && (o === Gr.month || o === Gr.year) && r();
	}, Oe = (t, n) => {
		uo({
			value: t,
			modelValue: s,
			range: m.value.enabled,
			timezone: n ? void 0 : g.value.timezone
		}), P(), e.multiCalendars && L().then(() => te(!0));
	}, ke = () => {
		let e = Lr(Q(), g.value);
		!m.value.enabled && !v.value.enabled ? s.value = e : s.value && Array.isArray(s.value) && s.value[0] ? v.value.enabled ? s.value = [...s.value, e] : s.value = ji(e, s.value[0]) ? [e, s.value[0]] : [s.value[0], e] : s.value = [e], P();
	}, Ae = () => {
		if (Array.isArray(s.value)) {
			if (v.value.enabled) {
				let e = je();
				s.value[s.value.length - 1] = w(e);
			} else s.value = s.value.map((e, t) => e && w(e, t));
		} else s.value = w(s.value);
		t("time-update");
	}, je = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null;
	return {
		calendars: l,
		modelValue: s,
		month: k,
		year: j,
		time: u,
		disabledTimesConfig: O,
		today: d,
		validateTime: D,
		getCalendarDays: me,
		getMarker: fe,
		handleScroll: V,
		handleSwipe: H,
		handleArrow: de,
		selectDate: Ee,
		updateMonthYear: De,
		presetDate: Oe,
		selectCurrentDate: ke,
		updateTime: (e, t = !0, n = !1) => {
			C(e, t, n, Ae);
		},
		assignMonthAndYear: z,
		setStartTime: F
	};
}, Yo = { key: 0 }, Xo = /* @__PURE__ */ a({
	__name: "DatePicker",
	props: { ...Ka },
	emits: [
		"tooltip-open",
		"tooltip-close",
		"mount",
		"update:internal-model-value",
		"update-flow-step",
		"reset-flow",
		"auto-apply",
		"focus-menu",
		"select-date",
		"range-start",
		"range-end",
		"invalid-fixed-range",
		"time-update",
		"am-pm-change",
		"time-picker-open",
		"time-picker-close",
		"recalculate-position",
		"update-month-year",
		"auto-apply-invalid",
		"date-update",
		"invalid-date",
		"overlay-toggle"
	],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = e, { calendars: o, month: s, year: c, modelValue: l, time: d, disabledTimesConfig: f, today: m, validateTime: h, getCalendarDays: g, getMarker: _, handleArrow: y, handleScroll: S, handleSwipe: w, selectDate: E, updateMonthYear: D, presetDate: O, selectCurrentDate: k, updateTime: j, assignMonthAndYear: N, setStartTime: F } = Jo(a, i, le, ue), I = C(), { setHoverDate: ee, getDayClassData: te, clearHoverDate: L } = bs(l, a), { defaultedMultiCalendars: R } = Ha(a), z = A([]), ne = A([]), re = A(null), ie = _s(I, "calendar"), ae = _s(I, "monthYear"), oe = _s(I, "timePicker"), se = (e) => {
			a.shadow || i("mount", e);
		};
		v(o, () => {
			a.shadow || setTimeout(() => {
				i("recalculate-position");
			}, 0);
		}, { deep: !0 }), v(R, (e, t) => {
			e.count - t.count > 0 && N();
		}, { deep: !0 });
		let ce = B(() => (e) => g(s.value(e), c.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = _(e), e.classData = te(e), e))
		})));
		function le(e) {
			e || e === 0 ? ne.value[e]?.triggerTransition(s.value(e), c.value(e)) : ne.value.forEach((e, t) => e.triggerTransition(s.value(t), c.value(t)));
		}
		function ue() {
			i("update-flow-step");
		}
		let de = (e, t = !1) => {
			E(e, t), a.spaceConfirm && i("select-date");
		}, fe = (e, t, n = 0) => {
			z.value[n]?.toggleMonthPicker(e, t);
		}, he = (e, t, n = 0) => {
			z.value[n]?.toggleYearPicker(e, t);
		}, ge = (e, t, n) => {
			re.value?.toggleTimePicker(e, t, n);
		}, _e = (e, t) => {
			if (!a.range) {
				let n = l.value ? l.value : m, r = t ? new Date(t) : n, i = e ? Be(r, { weekStartsOn: 1 }) : lt(r, { weekStartsOn: 1 });
				E({
					value: i,
					current: J(r) === s.value(0),
					text: "",
					classData: {}
				}), document.getElementById(ca(i))?.focus();
			}
		}, ve = (e) => {
			z.value[0]?.handleMonthYearChange(e, !0);
		}, ye = (e) => {
			D(0, {
				month: s.value(0),
				year: c.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, be = (e, t) => {
			e === Gr.time && i(`time-picker-${t ? "open" : "close"}`), i("overlay-toggle", {
				open: t,
				overlay: e
			});
		}, xe = (e) => {
			i("overlay-toggle", {
				open: !1,
				overlay: e
			}), i("focus-menu");
		};
		return t({
			clearHoverDate: L,
			presetDate: O,
			selectCurrentDate: k,
			toggleMonthPicker: fe,
			toggleYearPicker: he,
			toggleTimePicker: ge,
			handleArrow: y,
			updateMonthYear: D,
			getSidebarProps: () => ({
				modelValue: l,
				month: s,
				year: c,
				time: d,
				updateTime: j,
				updateMonthYear: D,
				selectDate: E,
				presetDate: O
			}),
			changeMonth: ve,
			changeYear: ye,
			selectWeekDate: _e,
			setStartTime: F
		}), (e, t) => (p(), H(V, null, [U(no, {
			"multi-calendars": W(R).count,
			collapse: e.collapse,
			"is-mobile": e.isMobile
		}, {
			default: M(({ instance: r, index: i }) => [e.disableMonthYearSelect ? T("", !0) : (p(), P(zo, n({
				key: 0,
				ref: (e) => {
					e && (z.value[i] = e);
				},
				months: W(ei)(e.formatLocale, e.locale, e.monthNameFormat),
				years: W($r)(e.yearRange, e.locale, e.reverseYears),
				month: W(s)(r),
				year: W(c)(r),
				instance: r
			}, e.$props, {
				onMount: t[0] ||= (e) => se(W(Wr).header),
				onResetFlow: t[1] ||= (t) => e.$emit("reset-flow"),
				onUpdateMonthYear: (e) => W(D)(r, e),
				onOverlayClosed: xe,
				onOverlayOpened: t[2] ||= (t) => e.$emit("overlay-toggle", {
					open: !0,
					overlay: t
				})
			}), me({ _: 2 }, [x(W(ae), (t, n) => ({
				name: t,
				fn: M((n) => [u(e.$slots, t, pe(b(n)))])
			}))]), 1040, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"onUpdateMonthYear"
			])), U(Ko, n({
				ref: (e) => {
					e && (ne.value[i] = e);
				},
				"mapped-dates": ce.value(r),
				month: W(s)(r),
				year: W(c)(r),
				instance: r
			}, e.$props, {
				onSelectDate: (e) => W(E)(e, r !== 1),
				onHandleSpace: (e) => de(e, r !== 1),
				onSetHoverDate: t[3] ||= (e) => W(ee)(e),
				onHandleScroll: (e) => W(S)(e, r),
				onHandleSwipe: (e) => W(w)(e, r),
				onMount: t[4] ||= (e) => se(W(Wr).calendar),
				onResetFlow: t[5] ||= (t) => e.$emit("reset-flow"),
				onTooltipOpen: t[6] ||= (t) => e.$emit("tooltip-open", t),
				onTooltipClose: t[7] ||= (t) => e.$emit("tooltip-close", t)
			}), me({ _: 2 }, [x(W(ie), (t, n) => ({
				name: t,
				fn: M((n) => [u(e.$slots, t, pe(b({ ...n })))])
			}))]), 1040, [
				"mapped-dates",
				"month",
				"year",
				"instance",
				"onSelectDate",
				"onHandleSpace",
				"onHandleScroll",
				"onHandleSwipe"
			])]),
			_: 3
		}, 8, [
			"multi-calendars",
			"collapse",
			"is-mobile"
		]), e.enableTimePicker ? (p(), H("div", Yo, [e.$slots["time-picker"] ? u(e.$slots, "time-picker", pe(n({ key: 0 }, {
			time: W(d),
			updateTime: W(j)
		}))) : (p(), P(Ao, n({
			key: 1,
			ref_key: "timePickerRef",
			ref: re
		}, e.$props, {
			hours: W(d).hours,
			minutes: W(d).minutes,
			seconds: W(d).seconds,
			"internal-model-value": e.internalModelValue,
			"disabled-times-config": W(f),
			"validate-time": W(h),
			onMount: t[8] ||= (e) => se(W(Wr).timePicker),
			"onUpdate:hours": t[9] ||= (e) => W(j)(e),
			"onUpdate:minutes": t[10] ||= (e) => W(j)(e, !1),
			"onUpdate:seconds": t[11] ||= (e) => W(j)(e, !1, !0),
			onResetFlow: t[12] ||= (t) => e.$emit("reset-flow"),
			onOverlayClosed: t[13] ||= (e) => be(e, !1),
			onOverlayOpened: t[14] ||= (e) => be(e, !0),
			onAmPmChange: t[15] ||= (t) => e.$emit("am-pm-change", t)
		}), me({ _: 2 }, [x(W(oe), (t, n) => ({
			name: t,
			fn: M((n) => [u(e.$slots, t, pe(b(n)))])
		}))]), 1040, [
			"hours",
			"minutes",
			"seconds",
			"internal-model-value",
			"disabled-times-config",
			"validate-time"
		]))])) : T("", !0)], 64));
	}
}), Zo = (e, t) => {
	let n = A(), { defaultedMultiCalendars: r, defaultedConfig: i, defaultedHighlight: a, defaultedRange: o, propDates: s, defaultedFilters: c, defaultedMultiDates: l } = Ha(e), { modelValue: u, year: d, month: f, calendars: p } = ys(e, t), { isDisabled: m } = xs(e), { selectYear: h, groupedYears: g, showYearPicker: _, isDisabled: v, toggleYearPicker: y, handleYearSelect: b, handleYear: x } = po({
		modelValue: u,
		multiCalendars: r,
		range: o,
		highlight: a,
		calendars: p,
		propDates: s,
		month: f,
		year: d,
		filters: c,
		props: e,
		emit: t
	}), S = (t, n) => [t, n].map((t) => Xt(t, "MMMM", { locale: e.formatLocale })).join("-"), C = B(() => (e) => u.value ? Array.isArray(u.value) ? u.value.some((t) => vr(e, t)) : vr(u.value, e) : !1), w = (e) => {
		if (o.value.enabled) {
			if (Array.isArray(u.value)) {
				let t = $(e, u.value[0]) || $(e, u.value[1]);
				return Ni(u.value, n.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, T = (e, t) => e.quarter === $e(t) && e.year === Y(t), E = (e) => typeof a.value == "function" ? a.value({
		quarter: $e(e),
		year: Y(e)
	}) : !!a.value.quarters.find((t) => T(t, e)), D = B(() => (e) => {
		let t = Z(/* @__PURE__ */ new Date(), { year: d.value(e) });
		return at({
			start: ct(t),
			end: st(t)
		}).map((e) => {
			let t = it(e), n = ut(e), r = m(e), i = w(t), a = E(t);
			return {
				text: S(t, n),
				value: t,
				active: C.value(t),
				highlighted: a,
				disabled: r,
				isBetween: i
			};
		});
	}), O = (e) => {
		so(e, u, l.value.limit), t("auto-apply", !0);
	}, k = (n) => {
		u.value = co(u, n, t), lo(u.value, t, e.autoApply, e.modelAuto);
	}, j = (e) => {
		u.value = e, t("auto-apply");
	};
	return {
		defaultedConfig: i,
		defaultedMultiCalendars: r,
		groupedYears: g,
		year: d,
		isDisabled: v,
		quarters: D,
		showYearPicker: _,
		modelValue: u,
		setHoverDate: (e) => {
			n.value = e;
		},
		selectYear: h,
		selectQuarter: (e, t, n) => {
			if (!n) return p.value[t].month = J(ut(e)), l.value.enabled ? O(e) : o.value.enabled ? k(e) : j(e);
		},
		toggleYearPicker: y,
		handleYearSelect: b,
		handleYear: x
	};
}, Qo = { class: "dp--quarter-items" }, $o = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], es = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "QuarterPicker",
	props: { ...Ka },
	emits: [
		"update:internal-model-value",
		"reset-flow",
		"overlay-closed",
		"auto-apply",
		"range-start",
		"range-end",
		"overlay-toggle",
		"update-month-year"
	],
	setup(e, { expose: t, emit: r }) {
		let a = r, o = e, s = _s(C(), "yearMode"), { defaultedMultiCalendars: c, defaultedConfig: l, groupedYears: d, year: f, isDisabled: m, quarters: h, modelValue: g, showYearPicker: _, setHoverDate: v, selectQuarter: S, toggleYearPicker: w, handleYearSelect: O, handleYear: k } = Zo(o, a);
		return t({ getSidebarProps: () => ({
			modelValue: g,
			year: f,
			selectQuarter: S,
			handleYearSelect: O,
			handleYear: k
		}) }), (e, t) => (p(), P(no, {
			"multi-calendars": W(c).count,
			collapse: e.collapse,
			stretch: "",
			"is-mobile": e.isMobile
		}, {
			default: M(({ instance: t }) => [F("div", {
				class: "dp-quarter-picker-wrap",
				style: y({ minHeight: `${W(l).modeHeight}px` })
			}, [
				e.$slots["top-extra"] ? u(e.$slots, "top-extra", {
					key: 0,
					value: e.internalModelValue
				}) : T("", !0),
				F("div", null, [U(oo, n(e.$props, {
					items: W(d)(t),
					instance: t,
					"show-year-picker": W(_)[t],
					year: W(f)(t),
					"is-disabled": (e) => W(m)(t, e),
					onHandleYear: (e) => W(k)(t, e),
					onYearSelect: (e) => W(O)(e, t),
					onToggleYearPicker: (e) => W(w)(t, e?.flow, e?.show)
				}), me({ _: 2 }, [x(W(s), (t, n) => ({
					name: t,
					fn: M((n) => [u(e.$slots, t, pe(b(n)))])
				}))]), 1040, [
					"items",
					"instance",
					"show-year-picker",
					"year",
					"is-disabled",
					"onHandleYear",
					"onYearSelect",
					"onToggleYearPicker"
				])]),
				F("div", Qo, [(p(!0), H(V, null, x(W(h)(t), (n, r) => (p(), H("div", { key: r }, [F("button", {
					type: "button",
					class: E(["dp--qr-btn", {
						"dp--qr-btn-active": n.active,
						"dp--qr-btn-between": n.isBetween,
						"dp--qr-btn-disabled": n.disabled,
						"dp--highlighted": n.highlighted
					}]),
					"data-test-id": n.value,
					disabled: n.disabled,
					onClick: (e) => W(S)(n.value, t, n.disabled),
					onMouseover: (e) => W(v)(n.value)
				}, [e.$slots.quarter ? u(e.$slots, "quarter", {
					key: 0,
					value: n.value,
					text: n.text
				}) : (p(), H(V, { key: 1 }, [D(i(n.text), 1)], 64))], 42, $o)]))), 128))])
			], 4)]),
			_: 3
		}, 8, [
			"multi-calendars",
			"collapse",
			"is-mobile"
		]));
	}
}), ts = (e, t) => {
	let n = A(0);
	c(() => {
		r(), window.addEventListener("resize", r, { passive: !0 });
	}), d(() => {
		window.removeEventListener("resize", r);
	});
	let r = () => {
		n.value = window.document.documentElement.clientWidth;
	};
	return { isMobile: B(() => n.value <= e.value.mobileBreakpoint && !t || void 0) };
}, ns = [
	"id",
	"tabindex",
	"role",
	"aria-label"
], rs = {
	key: 0,
	class: "dp--menu-load-container"
}, is = {
	key: 1,
	class: "dp--menu-header"
}, as = ["data-dp-mobile"], os = {
	key: 0,
	class: "dp__sidebar_left"
}, ss = ["data-dp-mobile"], cs = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], ls = {
	key: 2,
	class: "dp__sidebar_right"
}, us = {
	key: 3,
	class: "dp__action_extra"
}, ds = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "DatepickerMenu",
	props: {
		...Ga,
		shadow: {
			type: Boolean,
			default: !1
		},
		openOnTop: {
			type: Boolean,
			default: !1
		},
		internalModelValue: {
			type: [Date, Array],
			default: null
		},
		noOverlayFocus: {
			type: Boolean,
			default: !1
		},
		collapse: {
			type: Boolean,
			default: !1
		},
		getInputRect: {
			type: Function,
			default: () => ({})
		},
		isTextInputDate: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"close-picker",
		"select-date",
		"auto-apply",
		"time-update",
		"flow-step",
		"update-month-year",
		"invalid-select",
		"update:internal-model-value",
		"recalculate-position",
		"invalid-fixed-range",
		"tooltip-open",
		"tooltip-close",
		"time-picker-open",
		"time-picker-close",
		"am-pm-change",
		"range-start",
		"range-end",
		"auto-apply-invalid",
		"date-update",
		"invalid-date",
		"overlay-toggle",
		"menu-blur"
	],
	setup(e, { expose: t, emit: r }) {
		let a = r, o = e, s = A(null), f = B(() => {
			let { openOnTop: e, ...t } = o;
			return {
				...t,
				isMobile: j.value,
				flowStep: se.value,
				menuWrapRef: s.value
			};
		}), { setMenuFocused: m, setShiftKey: h, control: g } = fa(), _ = C(), { defaultedTextInput: v, defaultedInline: S, defaultedConfig: w, defaultedUI: D, handleEventPropagation: O } = Ha(o), { isMobile: j } = ts(w, o.shadow), N = A(null), I = A(0), ee = A(null), te = A(!1), L = A(null), R = A(!1), z = (e) => {
			R.value = !0, w.value.allowPreventDefault && e.preventDefault(), pi(e, w.value, !0);
		};
		c(() => {
			if (!o.shadow) {
				te.value = !0, ne(), window.addEventListener("resize", ne);
				let e = ni(s);
				e && !v.value.enabled && !S.value.enabled && (m(!0), ge()), e && (e.addEventListener("pointerdown", z), e.addEventListener("mousedown", z));
			}
			document.addEventListener("mousedown", Ie);
		}), d(() => {
			window.removeEventListener("resize", ne), document.removeEventListener("mousedown", Ie);
			let e = ni(s);
			e && (e.removeEventListener("pointerdown", z), e.removeEventListener("mousedown", z));
		});
		let ne = () => {
			let e = ni(ee);
			e && (I.value = e.getBoundingClientRect().width);
		}, { arrowRight: re, arrowLeft: ie, arrowDown: ae, arrowUp: oe } = xa(), { flowStep: se, updateFlowStep: ce, childMount: le, resetFlow: ue, handleFlow: fe } = Cs(o, a, L), U = B(() => o.monthPicker ? ho : o.yearPicker ? _o : o.timePicker ? No : o.quarterPicker ? es : Xo), he = B(() => {
			if (w.value.arrowLeft) return w.value.arrowLeft;
			let e = s.value?.getBoundingClientRect(), t = o.getInputRect();
			return t?.width < I?.value && t?.left <= (e?.left ?? 0) ? `${t?.width / 2}px` : t?.right >= (e?.right ?? 0) && t?.width < I?.value ? `${I?.value - t?.width / 2}px` : "50%";
		}), ge = () => {
			let e = ni(s);
			e && e.focus({ preventScroll: !0 });
		}, _e = B(() => L.value?.getSidebarProps() || {}), ve = () => {
			o.openOnTop && a("recalculate-position");
		}, ye = _s(_, "action"), be = B(() => o.monthPicker || o.yearPicker ? _s(_, "monthYear") : o.timePicker ? _s(_, "timePicker") : _s(_, "shared")), xe = B(() => o.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), Se = B(() => ({
			dp__menu_disabled: o.disabled,
			dp__menu_readonly: o.readonly,
			"dp-menu-loading": o.loading
		})), Ce = B(() => ({
			dp__menu: !0,
			dp__menu_index: !S.value.enabled,
			dp__relative: S.value.enabled,
			...D.value.menu ?? {}
		})), we = (e) => {
			pi(e, w.value, !0);
		}, Te = (e) => {
			o.escClose && (a("close-picker"), O(e));
		}, Ee = (e) => {
			if (o.arrowNavigation) {
				if (e === qr.up) return oe();
				if (e === qr.down) return ae();
				if (e === qr.left) return ie();
				if (e === qr.right) return re();
			} else e === qr.left || e === qr.up ? je("handleArrow", qr.left, 0, e === qr.up) : je("handleArrow", qr.right, 0, e === qr.down);
		}, De = (e) => {
			h(e.shiftKey), !o.disableMonthYearSelect && e.code === Jr.tab && e.target.classList.contains("dp__menu") && g.value.shiftKeyInMenu && (e.preventDefault(), pi(e, w.value, !0), a("close-picker"));
		}, Oe = () => {
			ge(), a("time-picker-close");
		}, ke = (e) => {
			L.value?.toggleTimePicker(!1, !1), L.value?.toggleMonthPicker(!1, !1, e), L.value?.toggleYearPicker(!1, !1, e);
		}, Ae = (e, t = 0) => e === "month" ? L.value?.toggleMonthPicker(!1, !0, t) : e === "year" ? L.value?.toggleYearPicker(!1, !0, t) : e === "time" ? L.value?.toggleTimePicker(!0, !1) : ke(t), je = (e, ...t) => {
			L.value?.[e] && L.value?.[e](...t);
		}, Me = () => {
			je("selectCurrentDate");
		}, G = (e, t) => {
			je("presetDate", de(e), t);
		}, K = () => {
			je("clearHoverDate");
		}, Ne = (e, t) => {
			je("updateMonthYear", e, t);
		}, Pe = (e, t) => {
			e.preventDefault(), Ee(t);
		}, Fe = (e) => {
			if (De(e), e.key === Jr.home || e.key === Jr.end) return je("selectWeekDate", e.key === Jr.home, e.target.getAttribute("id"));
			switch ((e.key === Jr.pageUp || e.key === Jr.pageDown) && (e.shiftKey ? (je("changeYear", e.key === Jr.pageUp), gi(s.value, "overlay-year")?.focus()) : (je("changeMonth", e.key === Jr.pageUp), gi(s.value, e.key === Jr.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && s.value?.focus({ preventScroll: !0 })), e.key) {
				case Jr.esc: return Te(e);
				case Jr.arrowLeft: return Pe(e, qr.left);
				case Jr.arrowRight: return Pe(e, qr.right);
				case Jr.arrowUp: return Pe(e, qr.up);
				case Jr.arrowDown: return Pe(e, qr.down);
				default: return;
			}
		}, Ie = (e) => {
			S.value.enabled && !S.value.input && !s.value?.contains(e.target) && R.value && (R.value = !1, a("menu-blur"));
		};
		return t({
			updateMonthYear: Ne,
			switchView: Ae,
			handleFlow: fe,
			onValueCleared: () => {
				L.value?.setStartTime?.();
			}
		}), (t, r) => (p(), H("div", {
			id: t.uid ? `dp-menu-${t.uid}` : void 0,
			ref_key: "dpMenuRef",
			ref: s,
			tabindex: W(S).enabled ? void 0 : "0",
			role: W(S).enabled ? void 0 : "dialog",
			"aria-label": t.ariaLabels?.menu,
			class: E(Ce.value),
			style: y({ "--dp-arrow-left": he.value }),
			onMouseleave: K,
			onClick: we,
			onKeydown: Fe
		}, [
			(t.disabled || t.readonly) && W(S).enabled || t.loading ? (p(), H("div", {
				key: 0,
				class: E(Se.value)
			}, [t.loading ? (p(), H("div", rs, [...r[19] ||= [F("span", { class: "dp--menu-loader" }, null, -1)]])) : T("", !0)], 2)) : T("", !0),
			t.$slots["menu-header"] ? (p(), H("div", is, [u(t.$slots, "menu-header")])) : T("", !0),
			!W(S).enabled && !t.teleportCenter ? (p(), H("div", {
				key: 2,
				class: E(xe.value)
			}, null, 2)) : T("", !0),
			F("div", {
				ref_key: "innerMenuRef",
				ref: ee,
				class: E({
					dp__menu_content_wrapper: t.presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": e.collapse && (t.presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"])
				}),
				"data-dp-mobile": W(j),
				style: y({ "--dp-menu-width": `${I.value}px` })
			}, [
				t.$slots["left-sidebar"] ? (p(), H("div", os, [u(t.$slots, "left-sidebar", pe(b(_e.value)))])) : T("", !0),
				t.presetDates.length ? (p(), H("div", {
					key: 1,
					class: E({
						"dp--preset-dates-collapsed": e.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": W(j)
				}, [(p(!0), H(V, null, x(t.presetDates, (n, r) => (p(), H(V, { key: r }, [n.slot ? u(t.$slots, n.slot, {
					key: 0,
					presetDate: G,
					label: n.label,
					value: n.value
				}) : (p(), H("button", {
					key: 1,
					type: "button",
					style: y(n.style || {}),
					class: E(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
					"data-test-id": n.testId ?? void 0,
					"data-dp-mobile": W(j),
					onClick: k((e) => G(n.value, n.noTz), ["prevent"]),
					onKeydown: (e) => W(Si)(e, () => G(n.value, n.noTz), !0)
				}, i(n.label), 47, cs))], 64))), 128))], 10, ss)) : T("", !0),
				F("div", {
					ref_key: "calendarWrapperRef",
					ref: N,
					class: "dp__instance_calendar",
					role: "document"
				}, [(p(), P(l(U.value), n({
					ref_key: "dynCmpRef",
					ref: L
				}, f.value, {
					"flow-step": W(se),
					onMount: W(le),
					onUpdateFlowStep: W(ce),
					onResetFlow: W(ue),
					onFocusMenu: ge,
					onSelectDate: r[0] ||= (e) => t.$emit("select-date"),
					onDateUpdate: r[1] ||= (e) => t.$emit("date-update", e),
					onTooltipOpen: r[2] ||= (e) => t.$emit("tooltip-open", e),
					onTooltipClose: r[3] ||= (e) => t.$emit("tooltip-close", e),
					onAutoApply: r[4] ||= (e) => t.$emit("auto-apply", e),
					onRangeStart: r[5] ||= (e) => t.$emit("range-start", e),
					onRangeEnd: r[6] ||= (e) => t.$emit("range-end", e),
					onInvalidFixedRange: r[7] ||= (e) => t.$emit("invalid-fixed-range", e),
					onTimeUpdate: r[8] ||= (e) => t.$emit("time-update"),
					onAmPmChange: r[9] ||= (e) => t.$emit("am-pm-change", e),
					onTimePickerOpen: r[10] ||= (e) => t.$emit("time-picker-open", e),
					onTimePickerClose: Oe,
					onRecalculatePosition: ve,
					onUpdateMonthYear: r[11] ||= (e) => t.$emit("update-month-year", e),
					onAutoApplyInvalid: r[12] ||= (e) => t.$emit("auto-apply-invalid", e),
					onInvalidDate: r[13] ||= (e) => t.$emit("invalid-date", e),
					onOverlayToggle: r[14] ||= (e) => t.$emit("overlay-toggle", e),
					"onUpdate:internalModelValue": r[15] ||= (e) => t.$emit("update:internal-model-value", e)
				}), me({ _: 2 }, [x(be.value, (e, n) => ({
					name: e,
					fn: M((n) => [u(t.$slots, e, pe(b({ ...n })))])
				}))]), 1040, [
					"flow-step",
					"onMount",
					"onUpdateFlowStep",
					"onResetFlow"
				]))], 512),
				t.$slots["right-sidebar"] ? (p(), H("div", ls, [u(t.$slots, "right-sidebar", pe(b(_e.value)))])) : T("", !0),
				t.$slots["action-extra"] ? (p(), H("div", us, [t.$slots["action-extra"] ? u(t.$slots, "action-extra", {
					key: 0,
					selectCurrentDate: Me
				}) : T("", !0)])) : T("", !0)
			], 14, as),
			!t.autoApply || W(w).keepActionRow ? (p(), P(Ya, n({
				key: 3,
				"menu-mount": te.value
			}, f.value, {
				"calendar-width": I.value,
				onClosePicker: r[16] ||= (e) => t.$emit("close-picker"),
				onSelectDate: r[17] ||= (e) => t.$emit("select-date"),
				onInvalidSelect: r[18] ||= (e) => t.$emit("invalid-select"),
				onSelectNow: Me
			}), me({ _: 2 }, [x(W(ye), (e, n) => ({
				name: e,
				fn: M((n) => [u(t.$slots, e, pe(b({ ...n })))])
			}))]), 1040, ["menu-mount", "calendar-width"])) : T("", !0)
		], 46, ns));
	}
}), fs = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(fs || {}), ps = ({ menuRef: e, menuRefInner: t, inputRef: n, pickerWrapperRef: r, inline: i, emit: a, props: o, slots: c }) => {
	let { defaultedConfig: l } = Ha(o), u = A({}), d = A(!1), f = A({
		top: "0",
		left: "0"
	}), p = A(!1), m = N(o, "teleportCenter");
	v(m, () => {
		f.value = JSON.parse(JSON.stringify({})), C();
	});
	let h = (e) => {
		if (o.teleport) {
			let t = e.getBoundingClientRect();
			return {
				left: t.left + window.scrollX,
				top: t.top + window.scrollY
			};
		}
		return {
			top: 0,
			left: 0
		};
	}, g = (e, t) => {
		f.value.left = `${e + t - u.value.width}px`;
	}, _ = (e) => {
		f.value.left = `${e}px`;
	}, y = (e, t) => {
		o.position === fs.left && _(e), o.position === fs.right && g(e, t), o.position === fs.center && (f.value.left = `${e + t / 2 - u.value.width / 2}px`);
	}, b = (e) => {
		let { width: t, height: n } = e.getBoundingClientRect(), { top: r, left: i } = h(e);
		return {
			top: +r,
			left: +i,
			width: t,
			height: n
		};
	}, x = () => {
		f.value.left = "50%", f.value.top = "50%", f.value.transform = "translate(-50%, -50%)", f.value.position = "fixed", delete f.value.opacity;
	}, S = () => {
		let e = ni(n);
		f.value = o.altPosition(e);
	}, C = (n = !0) => {
		if (!i.value.enabled) {
			if (m.value) return x();
			if (o.altPosition !== null) return S();
			if (n) {
				let n = o.teleport ? t.value?.$el : e.value;
				n && (u.value = n.getBoundingClientRect()), a("recalculate-position");
			}
			return j();
		}
	}, w = ({ inputEl: e, left: t, width: n }) => {
		window.screen.width > 768 && !d.value && y(t, n), D(e);
	}, T = (e) => {
		let { top: t, left: n, height: r, width: i } = b(e);
		f.value.top = `${r + t + +o.offset}px`, p.value = !1, d.value || (f.value.left = `${n + i / 2 - u.value.width / 2}px`), w({
			inputEl: e,
			left: n,
			width: i
		});
	}, E = (e) => {
		let { top: t, left: n, width: r } = b(e);
		f.value.top = `${t - +o.offset - u.value.height}px`, p.value = !0, w({
			inputEl: e,
			left: n,
			width: r
		});
	}, D = (e) => {
		if (o.autoPosition) {
			let { left: t, width: n } = b(e), { left: r, right: i } = u.value;
			if (!d.value) {
				if (Math.abs(r) !== Math.abs(i)) {
					if (r <= 0) return d.value = !0, _(t);
					if (i >= document.documentElement.clientWidth) return d.value = !0, g(t, n);
				}
				return y(t, n);
			}
		}
	}, O = () => {
		let e = ni(n);
		if (e) {
			if (o.autoPosition === Ur.top) return Ur.top;
			if (o.autoPosition === Ur.bottom) return Ur.bottom;
			let { height: t } = u.value, { top: n, height: r } = e.getBoundingClientRect(), i = window.innerHeight - n - r, a = n;
			return t <= i ? Ur.bottom : t > i && t <= a ? Ur.top : i >= a ? Ur.bottom : Ur.top;
		}
		return Ur.bottom;
	}, k = (e) => O() === Ur.bottom ? T(e) : E(e), j = () => {
		let e = ni(n);
		if (e) return o.autoPosition ? k(e) : T(e);
	}, M = function(e) {
		if (e) {
			let t = e.scrollHeight > e.clientHeight, n = window.getComputedStyle(e).overflowY.indexOf("hidden") !== -1;
			return t && !n;
		}
		return !0;
	}, P = function(e) {
		return !e || e === document.body || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : M(e) ? e : P(e.assignedSlot && l.value.shadowDom ? e.assignedSlot.parentNode : e.parentNode);
	}, F = (e) => {
		if (e) switch (o.position) {
			case fs.left: return {
				left: 0,
				transform: "translateX(0)"
			};
			case fs.right: return {
				left: `${e.width}px`,
				transform: "translateX(-100%)"
			};
			default: return {
				left: `${e.width / 2}px`,
				transform: "translateX(-50%)"
			};
		}
		return {};
	};
	return {
		openOnTop: p,
		menuStyle: f,
		xCorrect: d,
		setMenuPosition: C,
		getScrollableParent: P,
		shadowRender: (e, t, i) => {
			let a = document.createElement("div"), o = ni(n)?.getBoundingClientRect();
			a.setAttribute("id", "dp--temp-container");
			let d = r.value?.clientWidth ? r.value : document.body;
			d.append(a);
			let f = F(o), p = l.value.shadowDom ? Object.keys(c).filter((e) => [
				"right-sidebar",
				"left-sidebar",
				"top-extra",
				"action-extra"
			].includes(e)) : Object.keys(c), m = s(t, {
				...i,
				shadow: !0,
				style: {
					opacity: 0,
					position: "absolute",
					...f
				}
			}, Object.fromEntries(p.map((e) => [e, c[e]])));
			e != null && (m.appContext = e.appContext), ue(m, a), u.value = m.el?.getBoundingClientRect(), ue(null, a), d.removeChild(a);
		}
	};
}, ms = [
	{
		name: "clock-icon",
		use: [
			"time",
			"calendar",
			"shared"
		]
	},
	{
		name: "arrow-left",
		use: [
			"month-year",
			"calendar",
			"shared",
			"year-mode"
		]
	},
	{
		name: "arrow-right",
		use: [
			"month-year",
			"calendar",
			"shared",
			"year-mode"
		]
	},
	{
		name: "arrow-up",
		use: [
			"time",
			"calendar",
			"month-year",
			"shared"
		]
	},
	{
		name: "arrow-down",
		use: [
			"time",
			"calendar",
			"month-year",
			"shared"
		]
	},
	{
		name: "calendar-icon",
		use: [
			"month-year",
			"time",
			"calendar",
			"shared",
			"year-mode"
		]
	},
	{
		name: "day",
		use: ["calendar", "shared"]
	},
	{
		name: "month-overlay-value",
		use: [
			"calendar",
			"month-year",
			"shared"
		]
	},
	{
		name: "year-overlay-value",
		use: [
			"calendar",
			"month-year",
			"shared",
			"year-mode"
		]
	},
	{
		name: "year-overlay",
		use: ["month-year", "shared"]
	},
	{
		name: "month-overlay",
		use: ["month-year", "shared"]
	},
	{
		name: "month-overlay-header",
		use: ["month-year", "shared"]
	},
	{
		name: "year-overlay-header",
		use: ["month-year", "shared"]
	},
	{
		name: "hours-overlay-value",
		use: [
			"calendar",
			"time",
			"shared"
		]
	},
	{
		name: "hours-overlay-header",
		use: [
			"calendar",
			"time",
			"shared"
		]
	},
	{
		name: "minutes-overlay-value",
		use: [
			"calendar",
			"time",
			"shared"
		]
	},
	{
		name: "minutes-overlay-header",
		use: [
			"calendar",
			"time",
			"shared"
		]
	},
	{
		name: "seconds-overlay-value",
		use: [
			"calendar",
			"time",
			"shared"
		]
	},
	{
		name: "seconds-overlay-header",
		use: [
			"calendar",
			"time",
			"shared"
		]
	},
	{
		name: "hours",
		use: [
			"calendar",
			"time",
			"shared"
		]
	},
	{
		name: "minutes",
		use: [
			"calendar",
			"time",
			"shared"
		]
	},
	{
		name: "month",
		use: [
			"calendar",
			"month-year",
			"shared"
		]
	},
	{
		name: "year",
		use: [
			"calendar",
			"month-year",
			"shared",
			"year-mode"
		]
	},
	{
		name: "action-buttons",
		use: ["action"]
	},
	{
		name: "action-preview",
		use: ["action"]
	},
	{
		name: "calendar-header",
		use: ["calendar", "shared"]
	},
	{
		name: "marker-tooltip",
		use: ["calendar", "shared"]
	},
	{
		name: "action-extra",
		use: ["menu"]
	},
	{
		name: "time-picker-overlay",
		use: [
			"calendar",
			"time",
			"shared"
		]
	},
	{
		name: "am-pm-button",
		use: [
			"calendar",
			"time",
			"shared"
		]
	},
	{
		name: "left-sidebar",
		use: ["menu"]
	},
	{
		name: "right-sidebar",
		use: ["menu"]
	},
	{
		name: "month-year",
		use: ["month-year", "shared"]
	},
	{
		name: "time-picker",
		use: ["menu", "shared"]
	},
	{
		name: "action-row",
		use: ["action"]
	},
	{
		name: "marker",
		use: ["calendar", "shared"]
	},
	{
		name: "quarter",
		use: ["shared"]
	},
	{
		name: "top-extra",
		use: ["shared", "month-year"]
	},
	{
		name: "tp-inline-arrow-up",
		use: ["shared", "time"]
	},
	{
		name: "tp-inline-arrow-down",
		use: ["shared", "time"]
	},
	{
		name: "menu-header",
		use: ["menu"]
	}
], hs = [
	{ name: "trigger" },
	{ name: "input-icon" },
	{ name: "clear-icon" },
	{ name: "dp-input" }
], gs = {
	all: () => ms,
	monthYear: () => ms.filter((e) => e.use.includes("month-year")),
	input: () => hs,
	timePicker: () => ms.filter((e) => e.use.includes("time")),
	action: () => ms.filter((e) => e.use.includes("action")),
	calendar: () => ms.filter((e) => e.use.includes("calendar")),
	menu: () => ms.filter((e) => e.use.includes("menu")),
	shared: () => ms.filter((e) => e.use.includes("shared")),
	yearMode: () => ms.filter((e) => e.use.includes("year-mode"))
}, _s = (e, t, n) => {
	let r = [];
	return gs[t]().forEach((t) => {
		e[t.name] && r.push(t.name);
	}), n?.length && n.forEach((e) => {
		e.slot && r.push(e.slot);
	}), r;
}, vs = (e) => {
	let t = B(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = B(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, ys = (e, t, n) => {
	let { defaultedRange: r, defaultedTz: i } = Ha(e), a = Q(Ir(Q(), i.value.timezone)), o = A([{
		month: J(a),
		year: Y(a)
	}]), s = (e) => {
		let t = {
			hours: tn(a),
			minutes: rn(a),
			seconds: 0
		};
		return r.value.enabled ? [t[e], t[e]] : t[e];
	}, c = z({
		hours: s("hours"),
		minutes: s("minutes"),
		seconds: s("seconds")
	});
	v(r, (e, t) => {
		e.enabled !== t.enabled && (c.hours = s("hours"), c.minutes = s("minutes"), c.seconds = s("seconds"));
	}, { deep: !0 });
	let l = B({
		get: () => e.internalModelValue,
		set: (n) => {
			!e.readonly && !e.disabled && t("update:internal-model-value", n);
		}
	}), u = B(() => (e) => o.value[e] ? o.value[e].month : 0), d = B(() => (e) => o.value[e] ? o.value[e].year : 0);
	return v(l, (e, t) => {
		n && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && n();
	}, { deep: !0 }), {
		calendars: o,
		time: c,
		modelValue: l,
		month: u,
		year: d,
		today: a
	};
}, bs = (e, t) => {
	let { defaultedMultiCalendars: n, defaultedMultiDates: r, defaultedUI: i, defaultedHighlight: a, defaultedTz: o, propDates: s, defaultedRange: c } = Ha(t), { isDisabled: l } = xs(t), u = A(null), d = A(Ir(/* @__PURE__ */ new Date(), o.value.timezone)), f = (e) => {
		!e.current && t.hideOffsetDates || (u.value = e.value);
	}, p = () => {
		u.value = null;
	}, m = (t) => Array.isArray(e.value) && c.value.enabled && e.value[0] && u.value ? t ? Mi(u.value, e.value[0]) : ji(u.value, e.value[0]) : !0, h = (t, n) => {
		let r = e.value && Array.isArray(e.value) && e.value ? n ? e.value[0] || null : e.value[1] : null;
		return $(Q(t.value), r);
	}, g = (t) => {
		let n = Array.isArray(e.value) ? e.value[0] : null;
		return !t || !ji(u.value ?? null, n);
	}, _ = (n, r = !0) => (c.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !n.current ? !1 : $(Q(n.value), e.value[+!r]) : c.value.enabled ? h(n, r) && g(r) || $(n.value, Array.isArray(e.value) ? e.value[0] : null) && m(r) : !1, v = (t, n) => {
		if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
			let r = $(t.value, u.value);
			return n ? Mi(e.value[0], t.value) && r : ji(e.value[0], t.value) && r;
		}
		return !1;
	}, y = (n) => !e.value || t.hideOffsetDates && !n.current ? !1 : c.value.enabled ? t.modelAuto && Array.isArray(e.value) ? $(n.value, e.value[0] ? e.value[0] : d.value) : !1 : r.value.enabled && Array.isArray(e.value) ? e.value.some((e) => $(e, n.value)) : $(n.value, e.value ? e.value : d.value), b = (e) => {
		if (c.value.autoRange || t.weekPicker) {
			if (u.value) {
				if (t.hideOffsetDates && !e.current) return !1;
				let n = Ne(u.value, +c.value.autoRange), r = Hi(Q(u.value), t.weekStart);
				return t.weekPicker ? $(r[1], Q(e.value)) : $(n, Q(e.value));
			}
			return !1;
		}
		return !1;
	}, x = (e) => {
		if (c.value.autoRange || t.weekPicker) {
			if (u.value) {
				let n = Ne(u.value, +c.value.autoRange);
				if (t.hideOffsetDates && !e.current) return !1;
				let r = Hi(Q(u.value), t.weekStart);
				return t.weekPicker ? Mi(e.value, r[0]) && ji(e.value, r[1]) : Mi(e.value, u.value) && ji(e.value, n);
			}
			return !1;
		}
		return !1;
	}, S = (e) => {
		if (c.value.autoRange || t.weekPicker) {
			if (u.value) {
				if (t.hideOffsetDates && !e.current) return !1;
				let n = Hi(Q(u.value), t.weekStart);
				return t.weekPicker ? $(n[0], e.value) : $(u.value, e.value);
			}
			return !1;
		}
		return !1;
	}, C = (t) => Ni(e.value, u.value, t.value), w = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, T = () => !t.modelAuto || ii(t.internalModelValue), E = (e) => {
		if (t.weekPicker) return !1;
		let n = !c.value.enabled || !_(e) && !_(e, !1);
		return !l(e.value) && !y(e) && !(!e.current && t.hideOffsetDates) && n;
	}, D = (e) => c.value.enabled ? t.modelAuto ? w() && y(e) : !1 : y(e), O = (e) => a.value ? xi(e.value, s.value.highlight) : !1, k = (e) => {
		let t = l(e.value);
		return t && (typeof a.value == "function" ? !a.value(e.value, t) : !a.value.options.highlightDisabled);
	}, j = (e) => typeof a.value == "function" ? a.value(e.value) : a.value.weekdays?.includes(e.value.getDay()), M = (e) => (c.value.enabled || t.weekPicker) && (!(n.value.count > 0) || e.current) && T() && !(!e.current && t.hideOffsetDates) && !y(e) ? C(e) : !1, N = (t) => {
		if (Array.isArray(e.value) && e.value.length === 1) {
			let { before: n, after: r } = la(+c.value.maxRange, e.value[0]);
			return sn(t.value, n) || on(t.value, r);
		}
		return !1;
	}, P = (t) => {
		if (Array.isArray(e.value) && e.value.length === 1) {
			let { before: n, after: r } = la(+c.value.minRange, e.value[0]);
			return Ni([n, r], e.value[0], t.value);
		}
		return !1;
	}, F = (e) => c.value.enabled && (c.value.maxRange || c.value.minRange) ? c.value.maxRange && c.value.minRange ? N(e) || P(e) : c.value.maxRange ? N(e) : P(e) : !1, I = (e) => {
		let { isRangeStart: n, isRangeEnd: r } = R(e), i = c.value.enabled ? n || r : !1;
		return {
			dp__cell_offset: !e.current,
			dp__pointer: !t.disabled && !(!e.current && t.hideOffsetDates) && !l(e.value) && !F(e),
			dp__cell_disabled: l(e.value) || F(e),
			dp__cell_highlight: !k(e) && (O(e) || j(e)) && !D(e) && !i && !S(e) && !(M(e) && t.weekPicker) && !r,
			dp__cell_highlight_active: !k(e) && (O(e) || j(e)) && D(e),
			dp__today: !t.noToday && $(e.value, d.value) && e.current,
			"dp--past": ji(e.value, d.value),
			"dp--future": Mi(e.value, d.value)
		};
	}, ee = (e) => ({
		dp__active_date: D(e),
		dp__date_hover: E(e)
	}), te = (n) => {
		if (e.value && !Array.isArray(e.value)) {
			let r = Hi(e.value, t.weekStart);
			return {
				...B(n),
				dp__range_start: $(r[0], n.value),
				dp__range_end: $(r[1], n.value),
				dp__range_between_week: Mi(n.value, r[0]) && ji(n.value, r[1])
			};
		}
		return { ...B(n) };
	}, L = (n) => {
		if (e.value && Array.isArray(e.value)) {
			let r = Hi(e.value[0], t.weekStart), i = e.value[1] ? Hi(e.value[1], t.weekStart) : [];
			return {
				...B(n),
				dp__range_start: $(r[0], n.value) || $(i[0], n.value),
				dp__range_end: $(r[1], n.value) || $(i[1], n.value),
				dp__range_between_week: Mi(n.value, r[0]) && ji(n.value, r[1]) || Mi(n.value, i[0]) && ji(n.value, i[1]),
				dp__range_between: Mi(n.value, r[1]) && ji(n.value, i[0])
			};
		}
		return { ...B(n) };
	}, R = (e) => ({
		isRangeStart: n.value.count > 0 ? e.current && _(e) && T() : _(e) && T(),
		isRangeEnd: n.value.count > 0 ? e.current && _(e, !1) && T() : _(e, !1) && T()
	}), z = (e) => {
		let { isRangeStart: n, isRangeEnd: r } = R(e);
		return {
			dp__range_start: n,
			dp__range_end: r,
			dp__range_between: M(e),
			dp__date_hover: $(e.value, u.value) && !n && !r && !t.weekPicker,
			dp__date_hover_start: v(e, !0),
			dp__date_hover_end: v(e, !1)
		};
	}, B = (e) => ({
		...z(e),
		dp__cell_auto_range: x(e),
		dp__cell_auto_range_start: S(e),
		dp__cell_auto_range_end: b(e)
	}), ne = (e) => c.value.enabled ? c.value.autoRange ? B(e) : t.modelAuto ? {
		...ee(e),
		...z(e)
	} : t.weekPicker ? L(e) : z(e) : t.weekPicker ? te(e) : ee(e);
	return {
		setHoverDate: f,
		clearHoverDate: p,
		getDayClassData: (e) => t.hideOffsetDates && !e.current ? {} : {
			...I(e),
			...ne(e),
			[t.dayClass ? t.dayClass(e.value, t.internalModelValue) : ""]: !0,
			...i.value.calendarCell ?? {}
		}
	};
}, xs = (e) => {
	let { defaultedFilters: t, defaultedRange: n, propDates: r, defaultedMultiDates: i } = Ha(e), a = (e) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(Q(e)) : !!bi(e, r.value.disabledDates) : !1, o = (t) => r.value.maxDate ? e.yearPicker ? Y(t) > Y(r.value.maxDate) : Mi(t, r.value.maxDate) : !1, s = (t) => r.value.minDate ? e.yearPicker ? Y(t) < Y(r.value.minDate) : ji(t, r.value.minDate) : !1, c = (n) => {
		let r = o(n), i = s(n), c = a(n), l = t.value.months.map((e) => +e).includes(J(n)), u = e.disabledWeekDays.length ? e.disabledWeekDays.some((e) => +e === Qt(n)) : !1, d = p(n), f = Y(n), m = ua(e.yearRange, f);
		return !(r || i || c || l || m || u || d);
	}, l = (e, t) => ji(...Wi(r.value.minDate, e, t)) || $(...Wi(r.value.minDate, e, t)), u = (e, t) => Mi(...Wi(r.value.maxDate, e, t)) || $(...Wi(r.value.maxDate, e, t)), d = (e, t, n) => {
		let i = !1;
		return r.value.maxDate && n && u(e, t) && (i = !0), r.value.minDate && !n && l(e, t) && (i = !0), i;
	}, f = (e, t, n, i) => {
		let a = !1;
		return i && (r.value.minDate || r.value.maxDate) ? r.value.minDate && r.value.maxDate ? a = d(e, t, n) : (r.value.minDate && l(e, t) || r.value.maxDate && u(e, t)) && (a = !0) : a = !0, a;
	}, p = (t) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !bi(t, r.value.allowedDates, wi(e.monthPicker, e.yearPicker)) : !1, m = (e) => !c(e), h = (e) => !n.value.noDisabledRange || !rt({
		start: e[0],
		end: e[1]
	}).some((e) => m(e)), g = (t) => {
		if (t) {
			let n = Y(t);
			return n >= +e.yearRange[0] && n <= e.yearRange[1];
		}
		return !0;
	}, _ = (e, t) => !!(Array.isArray(e) && e[t] && (n.value.maxRange || n.value.minRange) && g(e[t])), v = (e, t, r = 0) => {
		if (_(t, r) && g(e)) {
			let i = Ke(e, t[r]), a = Bi(t[r], e), o = a.length === 1 ? 0 : a.filter((e) => m(e)).length, s = Math.abs(i) - (n.value.minMaxRawRange ? 0 : o);
			if (n.value.minRange && n.value.maxRange) return s >= +n.value.minRange && s <= +n.value.maxRange;
			if (n.value.minRange) return s >= +n.value.minRange;
			if (n.value.maxRange) return s <= +n.value.maxRange;
		}
		return !0;
	}, y = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, b = (e) => Array.isArray(e) ? [e[0] ? ra(e[0]) : null, e[1] ? ra(e[1]) : null] : ra(e), x = (e, t, n) => e.find((e) => +e.hours === tn(t) && e.minutes === "*" || +e.minutes === rn(t) && +e.hours === tn(t)) && n, S = (e, t, n) => {
		let [r, i] = e, [a, o] = t;
		return !x(r, a, n) && !x(i, o, n) && n;
	}, C = (t, n) => {
		let r = Array.isArray(n) ? n : [n];
		return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? S(e.disabledTimes, r, t) : !r.some((n) => x(e.disabledTimes, n, t)) : t;
	}, w = (t, n) => {
		let r = Array.isArray(n) ? [Ii(n[0]), n[1] ? Ii(n[1]) : void 0] : Ii(n), i = !e.disabledTimes(r);
		return t && i;
	}, T = (t, n) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? C(n, t) : w(n, t) : n, E = (t) => {
		let n = !0;
		if (!t || y()) return !0;
		let i = !r.value.minDate && !r.value.maxDate ? b(t) : t;
		return (e.maxTime || r.value.maxDate) && (n = na(e.maxTime, r.value.maxDate, "max", oi(i), n)), (e.minTime || r.value.minDate) && (n = na(e.minTime, r.value.minDate, "min", oi(i), n)), T(t, n);
	}, D = (t) => {
		if (!e.monthPicker) return !0;
		let n = !0, i = Q(Pi(t));
		if (r.value.minDate && r.value.maxDate) {
			let e = Q(Pi(r.value.minDate)), t = Q(Pi(r.value.maxDate));
			return Mi(i, e) && ji(i, t) || $(i, e) || $(i, t);
		}
		if (r.value.minDate) {
			let e = Q(Pi(r.value.minDate));
			n = Mi(i, e) || $(i, e);
		}
		if (r.value.maxDate) {
			let e = Q(Pi(r.value.maxDate));
			n = ji(i, e) || $(i, e);
		}
		return n;
	};
	return {
		isDisabled: m,
		validateDate: c,
		validateMonthYearInRange: f,
		isDateRangeAllowed: h,
		checkMinMaxRange: v,
		isValidTime: E,
		isTimeValid: B(() => (t) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : E(t)),
		isMonthValid: B(() => (t) => e.monthPicker ? Array.isArray(t) && (n.value.enabled || i.value.enabled) ? !t.filter((e) => !D(e)).length : D(t) : !0)
	};
}, Ss = () => ({
	hideNavigationButtons: B(() => (e, t) => e?.includes(t)),
	showLeftIcon: B(() => (e, t) => e.count ? e.solo ? !0 : t === 0 : !0),
	showRightIcon: B(() => (e, t) => e.count ? e.solo ? !0 : t === e.count - 1 : !0)
}), Cs = (e, t, n) => {
	let r = A(0), i = z({
		[Wr.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
		[Wr.calendar]: !1,
		[Wr.header]: !1
	}), a = B(() => e.monthPicker || e.timePicker), o = (t) => {
		if (e.flow?.length) {
			if (!t && a.value) return u();
			i[t] = !0, Object.keys(i).filter((e) => !i[e]).length || u();
		}
	}, s = () => {
		e.flow?.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), u()), e.flow?.length === r.value && L().then(() => c());
	}, c = () => {
		r.value = -1;
	}, l = (t, i, ...a) => {
		e.flow[r.value] === t && n.value && n.value[i]?.(...a);
	}, u = (t = 0) => {
		t && (r.value += t), l(Gr.month, "toggleMonthPicker", !0), l(Gr.year, "toggleYearPicker", !0), l(Gr.calendar, "toggleTimePicker", !1, !0), l(Gr.time, "toggleTimePicker", !0, !0);
		let n = e.flow[r.value];
		(n === Gr.hours || n === Gr.minutes || n === Gr.seconds) && l(n, "toggleTimePicker", !0, !0, n);
	};
	return {
		childMount: o,
		updateFlowStep: s,
		resetFlow: c,
		handleFlow: u,
		flowStep: r
	};
}, ws = {
	key: 1,
	class: "dp__input_wrap"
}, Ts = [
	"id",
	"name",
	"inputmode",
	"placeholder",
	"disabled",
	"readonly",
	"required",
	"value",
	"autocomplete",
	"aria-label",
	"aria-disabled",
	"aria-invalid"
], Es = {
	key: 2,
	class: "dp--clear-btn"
}, Ds = ["aria-label"], Os = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "DatepickerInput",
	props: {
		isMenuOpen: {
			type: Boolean,
			default: !1
		},
		inputValue: {
			type: String,
			default: ""
		},
		...Ga
	},
	emits: [
		"clear",
		"open",
		"update:input-value",
		"set-input-date",
		"close",
		"select-date",
		"set-empty-date",
		"toggle",
		"focus-prev",
		"focus",
		"blur",
		"real-blur",
		"text-input"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, { defaultedTextInput: a, defaultedAriaLabels: o, defaultedInline: s, defaultedConfig: c, defaultedRange: l, defaultedMultiDates: d, defaultedUI: f, getDefaultPattern: m, getDefaultStartTime: h } = Ha(i), { checkMinMaxRange: g } = xs(i), _ = A(), v = A(null), y = A(!1), b = A(!1), x = B(() => ({
			dp__pointer: !i.disabled && !i.readonly && !a.value.enabled,
			dp__disabled: i.disabled,
			dp__input_readonly: !a.value.enabled,
			dp__input: !0,
			dp__input_not_clearable: !i.clearable,
			dp__input_icon_pad: !i.hideInputIcon,
			dp__input_valid: typeof i.state == "boolean" && i.state,
			dp__input_invalid: typeof i.state == "boolean" && !i.state,
			dp__input_focus: y.value || i.isMenuOpen,
			dp__input_reg: !a.value.enabled,
			...f.value.input ?? {}
		})), S = () => {
			r("set-input-date", null), i.clearable && i.autoApply && (r("set-empty-date"), _.value = null);
		}, C = (e) => {
			let t = h();
			return Di(e, a.value.format ?? m(), t ?? Ui({}, i.enableSeconds), i.inputValue, b.value, i.formatLocale);
		}, w = (e) => {
			let { rangeSeparator: t } = a.value, [n, r] = e.split(`${t}`);
			if (n) {
				let e = C(n.trim()), t = r ? C(r.trim()) : void 0;
				if (on(e, t)) return;
				let i = e && t ? [e, t] : [e];
				g(t, i, 0) && (_.value = e ? i : null);
			}
		}, D = () => {
			b.value = !0;
		}, O = (e) => {
			if (l.value.enabled) w(e);
			else if (d.value.enabled) {
				let t = e.split(";");
				_.value = t.map((e) => C(e.trim())).filter((e) => e);
			} else _.value = C(e);
		}, j = (e) => {
			let t = typeof e == "string" ? e : e.target?.value;
			t === "" ? S() : (a.value.openMenu && !i.isMenuOpen && r("open"), O(t), r("set-input-date", _.value)), b.value = !1, r("update:input-value", t), r("text-input", e, _.value);
		}, M = (e) => {
			a.value.enabled ? (O(e.target.value), a.value.enterSubmit && Qi(_.value) && i.inputValue !== "" ? (r("set-input-date", _.value, !0), _.value = null) : a.value.enterSubmit && i.inputValue === "" && (_.value = null, r("clear"))) : ee(e);
		}, N = (e, t) => {
			a.value.enabled && a.value.tabSubmit && !t && O(e.target.value), a.value.tabSubmit && Qi(_.value) && i.inputValue !== "" ? (r("set-input-date", _.value, !0, !0), _.value = null) : a.value.tabSubmit && i.inputValue === "" && (_.value = null, r("clear", !0));
		}, I = () => {
			y.value = !0, r("focus"), L().then(() => {
				a.value.enabled && a.value.selectOnFocus && v.value?.select();
			});
		}, ee = (e) => {
			if (pi(e, c.value, !0), a.value.enabled && a.value.openMenu && !s.value.input) {
				if (a.value.openMenu === "open" && !i.isMenuOpen) return r("open");
				if (a.value.openMenu === "toggle") return r("toggle");
			} else a.value.enabled || r("toggle");
		}, te = () => {
			r("real-blur"), y.value = !1, (!i.isMenuOpen || s.value.enabled && s.value.input) && r("blur"), i.autoApply && a.value.enabled && _.value && !i.isMenuOpen && (r("set-input-date", _.value), r("select-date"), _.value = null);
		}, R = (e) => {
			pi(e, c.value, !0), r("clear");
		}, z = () => {
			r("close");
		}, ne = (e) => {
			if (e.key === "Tab" && N(e), e.key === "Enter" && M(e), e.key === "Escape" && a.value.escClose && z(), !a.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, re = () => {
			v.value?.focus({ preventScroll: !0 });
		}, ie = (e) => {
			_.value = e;
		}, ae = (e) => {
			e.key === Jr.tab && N(e, !0);
		};
		return t({
			focusInput: re,
			setParsedDate: ie
		}), (t, n) => (p(), H("div", { onClick: ee }, [t.$slots.trigger && !t.$slots["dp-input"] && !W(s).enabled ? u(t.$slots, "trigger", { key: 0 }) : T("", !0), !t.$slots.trigger && (!W(s).enabled || W(s).input) ? (p(), H("div", ws, [
			t.$slots["dp-input"] && !t.$slots.trigger && (!W(s).enabled || W(s).enabled && W(s).input) ? u(t.$slots, "dp-input", {
				key: 0,
				value: e.inputValue,
				isMenuOpen: e.isMenuOpen,
				onInput: j,
				onEnter: M,
				onTab: N,
				onClear: R,
				onBlur: te,
				onKeypress: ne,
				onPaste: D,
				onFocus: I,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}) : T("", !0),
			t.$slots["dp-input"] ? T("", !0) : (p(), H("input", {
				key: 1,
				id: t.uid ? `dp-input-${t.uid}` : void 0,
				ref_key: "inputRef",
				ref: v,
				"data-test-id": "dp-input",
				name: t.name,
				class: E(x.value),
				inputmode: W(a).enabled ? "text" : "none",
				placeholder: t.placeholder,
				disabled: t.disabled,
				readonly: t.readonly,
				required: t.required,
				value: e.inputValue,
				autocomplete: t.autocomplete,
				"aria-label": W(o)?.input,
				"aria-disabled": t.disabled || void 0,
				"aria-invalid": t.state === !1 || void 0,
				onInput: j,
				onBlur: te,
				onFocus: I,
				onKeypress: ne,
				onKeydown: n[0] ||= (e) => ne(e),
				onPaste: D
			}, null, 42, Ts)),
			F("div", { onClick: n[3] ||= (e) => r("toggle") }, [t.$slots["input-icon"] && !t.hideInputIcon ? (p(), H("span", {
				key: 0,
				class: "dp__input_icon",
				onClick: n[1] ||= (e) => r("toggle")
			}, [u(t.$slots, "input-icon")])) : T("", !0), !t.$slots["input-icon"] && !t.hideInputIcon && !t.$slots["dp-input"] ? (p(), P(W(kr), {
				key: 1,
				"aria-label": W(o)?.calendarIcon,
				class: "dp__input_icon dp__input_icons",
				onClick: n[2] ||= (e) => r("toggle")
			}, null, 8, ["aria-label"])) : T("", !0)]),
			t.$slots["clear-icon"] && (t.alwaysClearable || e.inputValue && t.clearable && !t.disabled && !t.readonly) ? (p(), H("span", Es, [u(t.$slots, "clear-icon", { clear: R })])) : T("", !0),
			!t.$slots["clear-icon"] && (t.alwaysClearable || t.clearable && e.inputValue && !t.disabled && !t.readonly) ? (p(), H("button", {
				key: 3,
				"aria-label": W(o)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				onKeydown: n[4] ||= (e) => W(Si)(e, () => R(e), !0, ae),
				onClick: n[5] ||= k((e) => R(e), ["prevent"])
			}, [U(W(Ar), {
				class: "dp__input_icons",
				"data-test-id": "clear-icon"
			})], 40, Ds)) : T("", !0)
		])) : T("", !0)]));
	}
}), ks = typeof window < "u" ? window : void 0, As = () => {}, js = (e) => ee() ? (O(e), !0) : !1, Ms = (e, t, n, r) => {
	if (!e) return As;
	let i = As, a = v(() => W(e), (e) => {
		i(), e && (e.removeEventListener(t, n), e.addEventListener(t, n, r), i = () => {
			e.removeEventListener(t, n, r), i = As;
		});
	}, {
		immediate: !0,
		flush: "post"
	}), o = () => {
		a(), i();
	};
	return js(o), o;
}, Ns = (e, t, n, r = {}) => {
	let { window: i = ks, event: a = "pointerdown" } = r;
	return i ? Ms(i, a, (r) => {
		let i = ni(e), a = ni(t);
		!i || !a || i === r.target || r.composedPath().includes(i) || r.composedPath().includes(a) || n(r);
	}, { passive: !0 }) : void 0;
}, Ps = ["data-dp-mobile"], Fs = /* @__PURE__ */ a({
	compatConfig: { MODE: 3 },
	__name: "VueDatePicker",
	props: { ...Ga },
	emits: [
		"update:model-value",
		"update:model-timezone-value",
		"text-submit",
		"closed",
		"cleared",
		"open",
		"focus",
		"blur",
		"internal-model-change",
		"recalculate-position",
		"flow-step",
		"update-month-year",
		"invalid-select",
		"invalid-fixed-range",
		"tooltip-open",
		"tooltip-close",
		"time-picker-open",
		"time-picker-close",
		"am-pm-change",
		"range-start",
		"range-end",
		"date-update",
		"invalid-date",
		"overlay-toggle",
		"text-input"
	],
	setup(t, { expose: r, emit: i }) {
		let a = i, o = t, s = C(), f = A(!1), m = N(o, "modelValue"), h = N(o, "timezone"), g = A(null), _ = A(null), y = A(null), S = A(!1), w = A(null), D = A(!1), O = A(!1), k = A(!1), F = A(!1), { setMenuFocused: I, setShiftKey: ee } = fa(), { clearArrowNav: te } = xa(), { validateDate: R, isValidTime: z } = xs(o), { defaultedTransitions: ne, defaultedTextInput: ie, defaultedInline: ae, defaultedConfig: oe, defaultedRange: se, defaultedMultiDates: ce } = Ha(o), { menuTransition: le, showTransition: ue } = vs(ne), { isMobile: V } = ts(oe), de = fe();
		c(() => {
			Te(o.modelValue), L().then(() => {
				ae.value.enabled || (xe(w.value)?.addEventListener("scroll", Ne), window?.addEventListener("resize", Pe));
			}), ae.value.enabled && (f.value = !0), window?.addEventListener("keyup", Fe), window?.addEventListener("keydown", Ie);
		}), d(() => {
			ae.value.enabled || (xe(w.value)?.removeEventListener("scroll", Ne), window?.removeEventListener("resize", Pe)), window?.removeEventListener("keyup", Fe), window?.removeEventListener("keydown", Ie);
		});
		let he = _s(s, "all", o.presetDates), ge = _s(s, "input");
		v([m, h], () => {
			Te(m.value);
		}, { deep: !0 });
		let { openOnTop: _e, menuStyle: ve, xCorrect: ye, setMenuPosition: be, getScrollableParent: xe, shadowRender: Se } = ps({
			menuRef: g,
			menuRefInner: _,
			inputRef: y,
			pickerWrapperRef: w,
			inline: ae,
			emit: a,
			props: o,
			slots: s
		}), { inputValue: Ce, internalModelValue: we, parseExternalModelValue: Te, emitModelValue: Ee, formatInputValue: De, checkBeforeEmit: Oe } = Ua(a, o, {
			isInputFocused: S,
			isTextInputDate: F
		}), ke = B(() => ({
			dp__main: !0,
			dp__theme_dark: o.dark,
			dp__theme_light: !o.dark,
			dp__flex_display: ae.value.enabled,
			"dp--flex-display-collapsed": k.value,
			dp__flex_display_with_input: ae.value.input
		})), Ae = B(() => o.dark ? "dp__theme_dark" : "dp__theme_light"), je = B(() => o.teleport ? {
			to: typeof o.teleport == "boolean" ? "body" : o.teleport,
			disabled: !o.teleport || ae.value.enabled
		} : {}), Me = B(() => ({ class: "dp__outer_menu_wrap" })), G = B(() => ae.value.enabled && (o.timePicker || o.monthPicker || o.yearPicker || o.quarterPicker)), K = () => y.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, Ne = () => {
			f.value && (oe.value.closeOnScroll ? Ge() : be());
		}, Pe = () => {
			f.value && be();
			let e = _.value?.$el.getBoundingClientRect().width ?? 0;
			k.value = document.body.offsetWidth <= e;
		}, Fe = (e) => {
			e.key === "Tab" && !ae.value.enabled && !o.teleport && oe.value.tabOutClosesMenu && (w.value.contains(document.activeElement) || Ge()), O.value = e.shiftKey;
		}, Ie = (e) => {
			O.value = e.shiftKey;
		}, Le = () => {
			!o.disabled && !o.readonly && (Se(de, ds, o), be(!1), f.value = !0, f.value && a("open"), f.value || We(), Te(o.modelValue));
		}, Re = () => {
			Ce.value = "", We(), _.value?.onValueCleared(), y.value?.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), oe.value.closeOnClearValue && Ge();
		}, ze = () => {
			let e = we.value;
			return !e || !Array.isArray(e) && R(e) ? !0 : Array.isArray(e) ? ce.value.enabled || e.length === 2 && R(e[0]) && R(e[1]) ? !0 : se.value.partialRange && !o.timePicker ? R(e[0]) : !1 : !1;
		}, Be = () => {
			Oe() && ze() ? (Ee(), Ge()) : a("invalid-select", we.value);
		}, Ve = (e) => {
			He(), Ee(), oe.value.closeOnAutoApply && !e && Ge();
		}, He = () => {
			y.value && ie.value.enabled && y.value.setParsedDate(we.value);
		}, Ue = (e = !1) => {
			o.autoApply && z(we.value) && ze() && (se.value.enabled && Array.isArray(we.value) ? (se.value.partialRange || we.value.length === 2) && Ve(e) : Ve(e));
		}, We = () => {
			ie.value.enabled || (we.value = null);
		}, Ge = (e = !1) => {
			e && we.value && oe.value.setDateOnMenuClose && Be(), ae.value.enabled || (f.value && (f.value = !1, ye.value = !1, I(!1), ee(!1), te(), a("closed"), Ce.value && Te(m.value)), We(), a("blur"), _.value?.$el?.remove());
		}, Ke = (e, t, n = !1) => {
			if (!e) {
				we.value = null;
				return;
			}
			let r = Array.isArray(e) ? !e.some((e) => !R(e)) : R(e), i = z(e);
			r && i ? (F.value = !0, we.value = e, t ? (D.value = n, Be(), a("text-submit")) : o.autoApply && Ue(!0), L().then(() => {
				F.value = !1;
			})) : a("invalid-date", e);
		}, qe = () => {
			o.autoApply && z(we.value) && Ee(), He();
		}, Je = () => f.value ? Ge() : Le(), Ye = (e) => {
			we.value = e;
		}, Xe = () => {
			ie.value.enabled && (S.value = !0, De()), a("focus");
		}, Ze = () => {
			ie.value.enabled && (S.value = !1, Te(o.modelValue), D.value && hi(w.value, O.value)?.focus()), a("blur");
		}, Qe = (e) => {
			_.value && _.value.updateMonthYear(0, {
				month: si(e.month),
				year: si(e.year)
			});
		}, $e = (e) => {
			Te(e ?? o.modelValue);
		}, et = (e, t) => {
			_.value?.switchView(e, t);
		}, tt = (e, t) => oe.value.onClickOutside ? oe.value.onClickOutside(e, t) : Ge(!0);
		return Ns(g, y, (e) => tt(ze, e)), r({
			closeMenu: Ge,
			selectDate: Be,
			clearValue: Re,
			openMenu: Le,
			onScroll: Ne,
			formatInputValue: De,
			updateInternalModelValue: Ye,
			setMonthYear: Qe,
			parseModel: $e,
			switchView: et,
			toggleMenu: Je,
			handleFlow: (e = 0) => {
				_.value?.handleFlow(e);
			},
			getDpWrapMenuRef: () => g
		}), (t, r) => (p(), H("div", {
			ref_key: "pickerWrapperRef",
			ref: w,
			class: E(ke.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": W(V)
		}, [U(Os, n({
			ref_key: "inputRef",
			ref: y,
			"input-value": W(Ce),
			"onUpdate:inputValue": r[0] ||= (e) => re(Ce) ? Ce.value = e : null,
			"is-menu-open": f.value
		}, t.$props, {
			onClear: Re,
			onOpen: Le,
			onSetInputDate: Ke,
			onSetEmptyDate: W(Ee),
			onSelectDate: Be,
			onToggle: Je,
			onClose: Ge,
			onFocus: Xe,
			onBlur: Ze,
			onRealBlur: r[1] ||= (e) => S.value = !1,
			onTextInput: r[2] ||= (e) => t.$emit("text-input", e)
		}), me({ _: 2 }, [x(W(ge), (e, n) => ({
			name: e,
			fn: M((n) => [u(t.$slots, e, pe(b(n)))])
		}))]), 1040, [
			"input-value",
			"is-menu-open",
			"onSetEmptyDate"
		]), (p(), P(l(t.teleport ? j : "div"), pe(b(je.value)), {
			default: M(() => [U(e, {
				name: W(le)(W(_e)),
				css: W(ue) && !W(ae).enabled
			}, {
				default: M(() => [f.value ? (p(), H("div", n({
					key: 0,
					ref_key: "dpWrapMenuRef",
					ref: g
				}, Me.value, {
					class: { "dp--menu-wrapper": !W(ae).enabled },
					style: W(ae).enabled ? void 0 : W(ve)
				}), [U(ds, n({
					ref_key: "dpMenuRef",
					ref: _
				}, t.$props, {
					"internal-model-value": W(we),
					"onUpdate:internalModelValue": r[3] ||= (e) => re(we) ? we.value = e : null,
					class: {
						[Ae.value]: !0,
						"dp--menu-wrapper": t.teleport
					},
					"open-on-top": W(_e),
					"no-overlay-focus": G.value,
					collapse: k.value,
					"get-input-rect": K,
					"is-text-input-date": F.value,
					onClosePicker: Ge,
					onSelectDate: Be,
					onAutoApply: Ue,
					onTimeUpdate: qe,
					onFlowStep: r[4] ||= (e) => t.$emit("flow-step", e),
					onUpdateMonthYear: r[5] ||= (e) => t.$emit("update-month-year", e),
					onInvalidSelect: r[6] ||= (e) => t.$emit("invalid-select", W(we)),
					onAutoApplyInvalid: r[7] ||= (e) => t.$emit("invalid-select", e),
					onInvalidFixedRange: r[8] ||= (e) => t.$emit("invalid-fixed-range", e),
					onRecalculatePosition: W(be),
					onTooltipOpen: r[9] ||= (e) => t.$emit("tooltip-open", e),
					onTooltipClose: r[10] ||= (e) => t.$emit("tooltip-close", e),
					onTimePickerOpen: r[11] ||= (e) => t.$emit("time-picker-open", e),
					onTimePickerClose: r[12] ||= (e) => t.$emit("time-picker-close", e),
					onAmPmChange: r[13] ||= (e) => t.$emit("am-pm-change", e),
					onRangeStart: r[14] ||= (e) => t.$emit("range-start", e),
					onRangeEnd: r[15] ||= (e) => t.$emit("range-end", e),
					onDateUpdate: r[16] ||= (e) => t.$emit("date-update", e),
					onInvalidDate: r[17] ||= (e) => t.$emit("invalid-date", e),
					onOverlayToggle: r[18] ||= (e) => t.$emit("overlay-toggle", e),
					onMenuBlur: r[19] ||= (e) => t.$emit("blur")
				}), me({ _: 2 }, [x(W(he), (e, n) => ({
					name: e,
					fn: M((n) => [u(t.$slots, e, pe(b({ ...n })))])
				}))]), 1040, [
					"internal-model-value",
					"class",
					"open-on-top",
					"no-overlay-focus",
					"collapse",
					"is-text-input-date",
					"onRecalculatePosition"
				])], 16)) : T("", !0)]),
				_: 3
			}, 8, ["name", "css"])]),
			_: 3
		}, 16))], 10, Ps));
	}
}), Is = /* @__PURE__ */ (() => {
	let e = Fs;
	return e.install = (t) => {
		t.component("Vue3DatePicker", e);
	}, e;
})();
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcTimezonePicker.vue_vue_type_script_setup_true_lang-D7ZHgnwW.mjs
Object.entries(/* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: Is
}, Symbol.toStringTag, { value: "Module" }))).forEach(([e, t]) => {
	e !== "default" && (Is[e] = t);
}), oe(r);
function Ls(e) {
	return e.slice(e.indexOf("/") + 1).replaceAll("/", " - ").replaceAll("_", " ");
}
function Rs() {
	return Intl.supportedValuesOf("timeZone").filter((e) => !e.startsWith("Etc/")).map((e) => ({
		timezoneId: e,
		label: Ls(e)
	})).sort((e, t) => e.timezoneId.localeCompare(t.timezoneId));
}
var zs = /* @__PURE__ */ a({
	__name: "NcTimezonePicker",
	props: /* @__PURE__ */ R({
		additionalTimezones: { default: () => [] },
		uid: { default: ce() }
	}, {
		modelValue: { default: "floating" },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = f(e, "modelValue"), n = e, r = B(() => n.additionalTimezones.map(({ timezoneId: e, label: t }) => ({
			timezoneId: e,
			label: t
		}))), i = B(() => {
			let e = Rs();
			return e.unshift(...r.value), e;
		});
		function a(e, t, n) {
			let r = n.trim().split(/\s+/), i = Object.values(e);
			return r.every((e) => i.some((t) => t.toLowerCase().includes(e.toLowerCase())));
		}
		return (n, r) => (p(), P(we, {
			modelValue: t.value,
			"onUpdate:modelValue": r[0] ||= (e) => t.value = e,
			"aria-label-combobox": W(I)("Search for time zone"),
			clearable: !1,
			filterBy: a,
			multiple: !1,
			options: i.value,
			placeholder: W(I)("Type to search time zone"),
			uid: e.uid,
			reduce: (e) => e.timezoneId,
			label: "label"
		}, null, 8, [
			"modelValue",
			"aria-label-combobox",
			"options",
			"placeholder",
			"uid",
			"reduce"
		]));
	}
});
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcDateTimePicker-qaFC_wUt.mjs
oe(ne);
var Bs = { class: "vue-date-time-picker__wrapper" }, Vs = {
	ref: "target",
	class: "vue-date-time-picker__wrapper vue-date-time-picker__wrapper--teleport"
}, Hs = /* @__PURE__ */ a({
	__name: "NcDateTimePicker",
	props: /* @__PURE__ */ R({
		appendToBody: { type: Boolean },
		ariaLabel: { default: I("Datepicker input") },
		ariaLabelMenu: { default: I("Datepicker menu") },
		clearable: { type: Boolean },
		confirm: { type: Boolean },
		format: {
			type: [String, Function],
			default: void 0
		},
		locale: { default: void 0 },
		max: { default: void 0 },
		min: { default: void 0 },
		minuteStep: { default: 10 },
		modelValue: { default: null },
		placeholder: { default: void 0 },
		showTimezoneSelect: { type: Boolean },
		showWeekNumber: { type: Boolean },
		type: { default: "date" },
		inline: {
			type: Boolean,
			default: !1
		}
	}, {
		timezoneId: { default: "UTC" },
		timezoneIdModifiers: {}
	}),
	emits: /* @__PURE__ */ R([
		"update:modelValue",
		"update:timezoneId",
		"blur"
	], ["update:timezoneId"]),
	setup(e, { emit: r }) {
		let a = f(e, "timezoneId"), o = e, s = r, c = g();
		t(() => {
			o.locale !== void 0 && w("[NcDateTimePicker] The `locale` property is no longer used and will be ignored.");
		});
		let l = S("target"), u = S("picker"), d = B(() => {
			if (o.modelValue === null && o.clearable) return null;
			if (o.type === "week") {
				let e = o.modelValue instanceof Date ? o.modelValue : /* @__PURE__ */ new Date(), t = new Date(e);
				return t.setUTCDate(e.getUTCDate() + 6), [e, t];
			}
			if (o.type === "year") return (o.modelValue instanceof Date ? o.modelValue : /* @__PURE__ */ new Date()).getUTCFullYear();
			if (o.type === "month") {
				let e = o.modelValue instanceof Date ? o.modelValue : /* @__PURE__ */ new Date();
				return {
					year: e.getUTCFullYear(),
					month: e.getUTCMonth()
				};
			}
			if (o.type === "time") {
				let e = o.modelValue instanceof Date ? o.modelValue : /* @__PURE__ */ new Date();
				return {
					hours: e.getHours(),
					minutes: e.getMinutes(),
					seconds: e.getSeconds()
				};
			}
			if (o.type === "time-range") {
				let e = [o.modelValue].flat();
				if (e.length !== 2) {
					let t = /* @__PURE__ */ new Date(), n = new Date(t);
					n.setHours(n.getHours() + 1), e.splice(0, 2, t, n);
				}
				return e.map((e) => ({
					hours: e.getHours(),
					minutes: e.getMinutes(),
					seconds: e.getSeconds()
				}));
			}
			if (o.type.endsWith("-range")) {
				if (o.modelValue === void 0) {
					let e = /* @__PURE__ */ new Date(), t = new Date(e);
					return t.setUTCDate(e.getUTCDate() + 7), [e, t];
				}
				return o.modelValue;
			}
			return o.modelValue ?? /* @__PURE__ */ new Date();
		}), _ = B(() => o.type === "date" ? I("Select date") : o.type === "time" ? I("Select time") : o.type === "datetime" ? I("Select date and time") : o.type === "week" ? I("Select week") : o.type === "month" ? I("Select month") : o.type === "year" ? I("Select year") : o.type.endsWith("-range") ? I("Select time range") : I("Select date and time")), v = B(() => {
			if (o.format) return o.format;
			if (o.type === "week") return "RR-II";
			let e;
			if (o.type === "date" || o.type === "date-range" ? e = new Intl.DateTimeFormat(c, { dateStyle: "medium" }) : o.type === "time" || o.type === "time-range" ? e = new Intl.DateTimeFormat(c, { timeStyle: "short" }) : o.type === "datetime" || o.type === "datetime-range" ? e = new Intl.DateTimeFormat(c, {
				dateStyle: "medium",
				timeStyle: "short"
			}) : o.type === "month" ? e = new Intl.DateTimeFormat(c, {
				year: "numeric",
				month: "2-digit"
			}) : o.type === "year" && (e = new Intl.DateTimeFormat(c, { year: "numeric" })), e) return (t) => Array.isArray(t) ? e.formatRange(t[0], t[1]) : e.format(t);
		}), y = B(() => ({
			timePicker: o.type === "time" || o.type === "time-range",
			yearPicker: o.type === "year",
			monthPicker: o.type === "month",
			weekPicker: o.type === "week",
			range: o.type.endsWith("-range") && { partialRange: !1 },
			enableTimePicker: o.type !== "date" && o.type !== "date-range",
			flow: o.type === "datetime" ? ["calendar", "time"] : void 0
		})), b = B(() => o.min && {
			hours: o.min.getHours(),
			minutes: o.min.getMinutes(),
			seconds: o.min.getSeconds()
		}), x = B(() => o.max && {
			hours: o.max.getHours(),
			minutes: o.max.getMinutes(),
			seconds: o.max.getSeconds()
		});
		function C(e) {
			if (e === null) return s("update:modelValue", null);
			if (o.type === "time") s("update:modelValue", T(e));
			else if (o.type === "time-range") {
				let t = T(e[0]), n = T(e[1]);
				n.getTime() < t.getTime() && n.setDate(n.getDate() + 1), s("update:modelValue", [t, n]);
			} else if (o.type === "month") {
				let t = e;
				s("update:modelValue", new Date(t.year, t.month, 1));
			} else o.type === "year" ? s("update:modelValue", new Date(e, 0)) : o.type === "week" ? s("update:modelValue", e[0]) : s("update:modelValue", e);
		}
		function T(e) {
			let t = /* @__PURE__ */ new Date();
			return t.setHours(e.hours), t.setMinutes(e.minutes), t.setSeconds(e.seconds), t;
		}
		let E = h(), O = [...m()];
		for (let e = 0; e < E; e++) O.push(O.shift());
		let k = I("W"), A = B(() => ({
			toggleOverlay: I("Toggle overlay"),
			menu: o.ariaLabelMenu,
			input: o.ariaLabel,
			openTimePicker: I("Open time picker"),
			closeTimePicker: I("Close time Picker"),
			incrementValue: (e) => I(e === "hours" ? "Increment hours" : e === "minutes" ? "Increment minutes" : "Increment seconds"),
			decrementValue: (e) => I(e === "hours" ? "Decrement hours" : e === "minutes" ? "Decrement minutes" : "Decrement seconds"),
			openTpOverlay: (e) => I(e === "hours" ? "Open hours overlay" : e === "minutes" ? "Open minutes overlay" : "Open seconds overlay"),
			amPmButton: I("Switch AM/PM mode"),
			openYearsOverlay: I("Open years overlay"),
			openMonthsOverlay: I("Open months overlay"),
			nextMonth: I("Next month"),
			prevMonth: I("Previous month"),
			nextYear: I("Next year"),
			prevYear: I("Previous year"),
			weekDay: (e) => te()[e],
			clearInput: I("Clear value"),
			calendarIcon: I("Calendar icon"),
			timePicker: I("Time picker"),
			monthPicker: (e) => I(e ? "Month picker overlay" : "Month picker"),
			yearPicker: (e) => I(e ? "Year picker overlay" : "Year picker")
		}));
		function N() {
			u.value.selectDate();
		}
		function ee() {
			u.value.closeMenu();
		}
		let L = B(() => o.type === "datetime" ? {
			minDate: o.min,
			maxDate: o.max,
			minTime: o.min && d.value && R(o.min, d.value) ? b.value : void 0,
			maxTime: o.max && d.value && R(o.max, d.value) ? x.value : void 0
		} : o.type === "datetime-range" ? {
			minDate: o.min,
			maxDate: o.max,
			minTime: o.min && d.value && R(o.min, d.value[0]) ? b.value : void 0,
			maxTime: o.max && d.value && R(o.max, d.value[1]) ? x.value : void 0
		} : o.type === "time" || o.type === "time-range" ? {
			minTime: o.min ? b.value : void 0,
			maxTime: o.max ? x.value : void 0
		} : {
			minDate: o.min,
			maxDate: o.max
		});
		function R(e, t) {
			return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
		}
		return (t, r) => (p(), H("div", Bs, [U(W(Is), n({
			ref: "picker",
			"aria-labels": A.value,
			autoApply: !e.confirm,
			class: ["vue-date-time-picker", { "vue-date-time-picker--clearable": e.clearable }],
			cancelText: W(I)("Cancel"),
			clearable: e.clearable,
			dayNames: O,
			placeholder: e.placeholder ?? _.value,
			format: v.value,
			locale: W(c),
			minDate: L.value.minDate,
			maxDate: L.value.maxDate,
			minTime: L.value.minTime,
			maxTime: L.value.maxTime,
			minutesIncrement: e.minuteStep,
			modelValue: d.value,
			nowButtonLabel: W(I)("Now"),
			selectText: W(I)("Pick"),
			sixWeeks: "fair",
			inline: e.inline,
			teleport: e.appendToBody ? l.value || void 0 : !1,
			textInput: "",
			weekNumName: W(k),
			weekNumbers: e.showWeekNumber ? { type: "iso" } : void 0,
			weekStart: W(E)
		}, y.value, {
			"onUpdate:modelValue": C,
			onBlur: r[1] ||= (e) => s("blur")
		}), me({
			"action-buttons": M(() => [U(W(he), {
				size: "small",
				variant: "tertiary",
				onClick: ee
			}, {
				default: M(() => [D(i(W(I)("Cancel")), 1)]),
				_: 1
			}), U(W(he), {
				size: "small",
				variant: "primary",
				onClick: N
			}, {
				default: M(() => [D(i(W(I)("Pick")), 1)]),
				_: 1
			})]),
			"clear-icon": M(({ clear: e }) => [U(W(he), {
				"aria-label": W(I)("Clear value"),
				variant: "tertiary-no-background",
				onClick: e
			}, {
				icon: M(() => [U(ge, {
					inline: "",
					path: W(be),
					size: 20
				}, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "onClick"])]),
			"input-icon": M(() => [U(ge, {
				path: W(xe),
				size: 20
			}, null, 8, ["path"])]),
			"clock-icon": M(() => [U(ge, {
				inline: "",
				path: W(Se),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-left": M(() => [U(ge, {
				inline: "",
				path: W(Ce),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-right": M(() => [U(ge, {
				inline: "",
				path: W(_e),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-down": M(() => [U(ge, {
				inline: "",
				path: W(ye),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-up": M(() => [U(ge, {
				inline: "",
				path: W(ve),
				size: 20
			}, null, 8, ["path"])]),
			_: 2
		}, [e.showTimezoneSelect ? {
			name: "action-extra",
			fn: M(() => [U(zs, {
				modelValue: a.value,
				"onUpdate:modelValue": r[0] ||= (e) => a.value = e,
				class: "vue-date-time-picker__timezone",
				appendToBody: !1,
				inputLabel: W(I)("Time zone")
			}, null, 8, ["modelValue", "inputLabel"])]),
			key: "0"
		} : void 0]), 1040, [
			"aria-labels",
			"autoApply",
			"class",
			"cancelText",
			"clearable",
			"placeholder",
			"format",
			"locale",
			"minDate",
			"maxDate",
			"minTime",
			"maxTime",
			"minutesIncrement",
			"modelValue",
			"nowButtonLabel",
			"selectText",
			"inline",
			"teleport",
			"weekNumName",
			"weekNumbers",
			"weekStart"
		]), (p(), P(j, {
			to: "body",
			disabled: !e.appendToBody
		}, [F("div", Vs, null, 512)], 8, ["disabled"]))]));
	}
}), Us = /* @__PURE__ */ o(Hs, [["__scopeId", "data-v-d689b5b9"]]);
//#endregion
export { Us as default };
