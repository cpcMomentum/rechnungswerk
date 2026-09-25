import { g as e, t } from "./logger-Dmvqkkgn.chunk.mjs";
import { $n as n, $t as r, An as i, Bn as a, Bt as o, Cn as s, D as c, E as l, En as u, Hn as d, Ht as f, In as p, Jn as m, Jt as h, K as g, Ln as _, Pn as v, Q as y, Qn as b, Qt as x, Rn as S, Sn as C, St as w, Un as T, Vn as E, Wn as D, X as O, Xn as k, Xt as ee, Yt as A, Z as j, _n as M, an as N, bt as te, cn as P, cr as F, d as ne, dn as I, dr as L, f as re, fn as ie, fr as ae, h as oe, in as R, jn as z, k as se, ln as ce, lr as B, m as le, mn as ue, nn as V, on as H, or as de, p as fe, pn as pe, pr as me, rn as U, s as he, sn as ge, t as _e, tr as W, u as ve, ur as G, vn as ye, wn as be, xt as xe, yn as Se, yt as Ce, zn as we } from "./createElementId-XLh0NVJk.chunk.mjs";
import { t as Te } from "./NcSelect-Be1FMmY2.chunk.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./buildMatchPatternFn-DQMsT4gp.chunk.mjs";
//#region node_modules/date-fns/constants.js
var Ae = 365.2425, je = 6048e5, Me = 864e5, Ne = 6e4, Pe = 36e5, Fe = 1e3, Ie = 86400;
Ie * 7, Ie * Ae / 12 * 3;
var Le = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/date-fns/constructFrom.js
function K(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && Le in e ? e[Le](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/date-fns/toDate.js
function q(e, t) {
	return K(t || e, e);
}
//#endregion
//#region node_modules/date-fns/addDays.js
function Re(e, t, n) {
	let r = q(e, n?.in);
	return isNaN(t) ? K(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/date-fns/addMonths.js
function ze(e, t, n) {
	let r = q(e, n?.in);
	if (isNaN(t)) return K(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = K(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region node_modules/date-fns/add.js
function Be(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = q(e, n?.in), d = i || r ? ze(u, i + r * 12) : u, f = o || a ? Re(d, o + a * 7) : d, p = (l + (c + s * 60) * 60) * 1e3;
	return K(n?.in || e, +f + p);
}
//#endregion
//#region node_modules/date-fns/addMilliseconds.js
function Ve(e, t, n) {
	return K(n?.in || e, +q(e) + t);
}
//#endregion
//#region node_modules/date-fns/addHours.js
function He(e, t, n) {
	return Ve(e, t * Pe, n);
}
//#endregion
//#region node_modules/date-fns/_lib/defaultOptions.js
var Ue = {};
function We() {
	return Ue;
}
//#endregion
//#region node_modules/date-fns/startOfWeek.js
function Ge(e, t) {
	let n = We(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = q(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/date-fns/startOfISOWeek.js
function Ke(e, t) {
	return Ge(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/date-fns/getISOWeekYear.js
function qe(e, t) {
	let n = q(e, t?.in), r = n.getFullYear(), i = K(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = Ke(i), o = K(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = Ke(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function Je(e) {
	let t = q(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), +e - n;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeDates.js
function Ye(e, ...t) {
	let n = K.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/date-fns/startOfDay.js
function Xe(e, t) {
	let n = q(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarDays.js
function Ze(e, t, n) {
	let [r, i] = Ye(n?.in, e, t), a = Xe(r), o = Xe(i), s = +a - Je(a), c = +o - Je(o);
	return Math.round((s - c) / Me);
}
//#endregion
//#region node_modules/date-fns/startOfISOWeekYear.js
function Qe(e, t) {
	let n = qe(e, t), r = K(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Ke(r);
}
//#endregion
//#region node_modules/date-fns/addQuarters.js
function $e(e, t, n) {
	return ze(e, t * 3, n);
}
//#endregion
//#region node_modules/date-fns/addYears.js
function et(e, t, n) {
	return ze(e, t * 12, n);
}
//#endregion
//#region node_modules/date-fns/compareAsc.js
function tt(e, t) {
	let n = +q(e) - q(t);
	return n < 0 ? -1 : n > 0 ? 1 : n;
}
//#endregion
//#region node_modules/date-fns/isDate.js
function nt(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/date-fns/isValid.js
function rt(e) {
	return !(!nt(e) && typeof e != "number" || isNaN(+q(e)));
}
//#endregion
//#region node_modules/date-fns/getQuarter.js
function it(e, t) {
	let n = q(e, t?.in);
	return Math.trunc(n.getMonth() / 3) + 1;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarYears.js
function at(e, t, n) {
	let [r, i] = Ye(n?.in, e, t);
	return r.getFullYear() - i.getFullYear();
}
//#endregion
//#region node_modules/date-fns/differenceInYears.js
function ot(e, t, n) {
	let [r, i] = Ye(n?.in, e, t), a = tt(r, i), o = Math.abs(at(r, i));
	r.setFullYear(1584), i.setFullYear(1584);
	let s = a * (o - +(tt(r, i) === -a));
	return s === 0 ? 0 : s;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeInterval.js
function st(e, t) {
	let [n, r] = Ye(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region node_modules/date-fns/eachDayOfInterval.js
function ct(e, t) {
	let { start: n, end: r } = st(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(K(n, o)), o.setDate(o.getDate() + s), o.setHours(0, 0, 0, 0);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/date-fns/startOfQuarter.js
function lt(e, t) {
	let n = q(e, t?.in), r = n.getMonth(), i = r - r % 3;
	return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/eachQuarterOfInterval.js
function ut(e, t) {
	let { start: n, end: r } = st(t?.in, e), i = +n > +r, a = i ? +lt(n) : +lt(r), o = lt(i ? r : n), s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(K(n, o)), o = $e(o, s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/date-fns/startOfMonth.js
function dt(e, t) {
	let n = q(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/endOfYear.js
function ft(e, t) {
	let n = q(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/date-fns/startOfYear.js
function pt(e, t) {
	let n = q(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/endOfWeek.js
function mt(e, t) {
	let n = We(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = q(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region node_modules/date-fns/endOfQuarter.js
function ht(e, t) {
	let n = q(e, t?.in), r = n.getMonth(), i = r - r % 3 + 3;
	return n.setMonth(i, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var gt = {
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
}, _t = (e, t, n) => {
	let r, i = gt[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, vt = {
	date: Ee({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Ee({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Ee({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, yt = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, bt = (e, t, n, r) => yt[e], xt = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: Oe({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: Oe({
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
	month: Oe({
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
	day: Oe({
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
	dayPeriod: Oe({
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
}, St = {
	ordinalNumber: ke({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: De({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: De({
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
	month: De({
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
	day: De({
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
	dayPeriod: De({
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
}, Ct = {
	code: "en-US",
	formatDistance: _t,
	formatLong: vt,
	formatRelative: bt,
	localize: xt,
	match: St,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/date-fns/getDayOfYear.js
function wt(e, t) {
	let n = q(e, t?.in);
	return Ze(n, pt(n)) + 1;
}
//#endregion
//#region node_modules/date-fns/getISOWeek.js
function Tt(e, t) {
	let n = q(e, t?.in), r = +Ke(n) - Qe(n);
	return Math.round(r / je) + 1;
}
//#endregion
//#region node_modules/date-fns/getWeekYear.js
function Et(e, t) {
	let n = q(e, t?.in), r = n.getFullYear(), i = We(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = K(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Ge(o, t), c = K(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Ge(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/date-fns/startOfWeekYear.js
function Dt(e, t) {
	let n = We(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Et(e, t), a = K(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Ge(a, t);
}
//#endregion
//#region node_modules/date-fns/getWeek.js
function Ot(e, t) {
	let n = q(e, t?.in), r = +Ge(n, t) - Dt(n, t);
	return Math.round(r / je) + 1;
}
//#endregion
//#region node_modules/date-fns/_lib/addLeadingZeros.js
function kt(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/date-fns/_lib/format/lightFormatters.js
var At = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return kt(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : kt(n + 1, 2);
	},
	d(e, t) {
		return kt(e.getDate(), t.length);
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
		return kt(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return kt(e.getHours(), t.length);
	},
	m(e, t) {
		return kt(e.getMinutes(), t.length);
	},
	s(e, t) {
		return kt(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return kt(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, jt = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Mt = {
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
		return At.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = Et(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? kt(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : kt(a, t.length);
	},
	R: function(e, t) {
		return kt(qe(e), t.length);
	},
	u: function(e, t) {
		return kt(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return kt(r, 2);
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
			case "qq": return kt(r, 2);
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
			case "MM": return At.M(e, t);
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
			case "LL": return kt(r + 1, 2);
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
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : kt(i, t.length);
	},
	I: function(e, t, n) {
		let r = Tt(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : kt(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : At.d(e, t);
	},
	D: function(e, t, n) {
		let r = wt(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : kt(r, t.length);
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
			case "ee": return kt(a, 2);
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
			case "cc": return kt(a, t.length);
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
			case "ii": return kt(i, t.length);
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
		switch (i = r === 12 ? jt.noon : r === 0 ? jt.midnight : r / 12 >= 1 ? "pm" : "am", t) {
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
		switch (i = r >= 17 ? jt.evening : r >= 12 ? jt.afternoon : r >= 4 ? jt.morning : jt.night, t) {
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
		return At.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : At.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : kt(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : kt(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : At.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : At.s(e, t);
	},
	S: function(e, t) {
		return At.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Pt(r);
			case "XXXX":
			case "XX": return Ft(r);
			default: return Ft(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Pt(r);
			case "xxxx":
			case "xx": return Ft(r);
			default: return Ft(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Nt(r, ":");
			default: return "GMT" + Ft(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Nt(r, ":");
			default: return "GMT" + Ft(r, ":");
		}
	},
	t: function(e, t, n) {
		return kt(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return kt(+e, t.length);
	}
};
function Nt(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + kt(a, 2);
}
function Pt(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + kt(Math.abs(e) / 60, 2) : Ft(e, t);
}
function Ft(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = kt(Math.trunc(r / 60), 2), a = kt(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/date-fns/_lib/format/longFormatters.js
var It = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, Lt = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Rt = {
	p: Lt,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return It(e, t);
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
		return a.replace("{{date}}", It(r, t)).replace("{{time}}", Lt(i, t));
	}
}, zt = /^D+$/, Bt = /^Y+$/, Vt = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function Ht(e) {
	return zt.test(e);
}
function Ut(e) {
	return Bt.test(e);
}
function Wt(e, t, n) {
	let r = Gt(e, t, n);
	if (console.warn(r), Vt.includes(e)) throw RangeError(r);
}
function Gt(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/date-fns/format.js
var Kt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, qt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Jt = /^'([^]*?)'?$/, Yt = /''/g, Xt = /[a-zA-Z]/;
function Zt(e, t, n) {
	let r = We(), i = n?.locale ?? r.locale ?? Ct, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = q(e, n?.in);
	if (!rt(s)) throw RangeError("Invalid time value");
	let c = t.match(qt).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Rt[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(Kt).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: Qt(e)
		};
		if (Mt[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(Xt)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && Ut(a) || !n?.useAdditionalDayOfYearTokens && Ht(a)) && Wt(a, t, String(e));
		let o = Mt[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function Qt(e) {
	let t = e.match(Jt);
	return t ? t[1].replace(Yt, "'") : e;
}
//#endregion
//#region node_modules/date-fns/getDay.js
function $t(e, t) {
	return q(e, t?.in).getDay();
}
//#endregion
//#region node_modules/date-fns/getDaysInMonth.js
function en(e, t) {
	let n = q(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = K(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region node_modules/date-fns/getDefaultOptions.js
function tn() {
	return Object.assign({}, We());
}
//#endregion
//#region node_modules/date-fns/getHours.js
function nn(e, t) {
	return q(e, t?.in).getHours();
}
//#endregion
//#region node_modules/date-fns/getISODay.js
function rn(e, t) {
	let n = q(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/date-fns/getMinutes.js
function an(e, t) {
	return q(e, t?.in).getMinutes();
}
//#endregion
//#region node_modules/date-fns/getMonth.js
function J(e, t) {
	return q(e, t?.in).getMonth();
}
//#endregion
//#region node_modules/date-fns/getSeconds.js
function on(e) {
	return q(e).getSeconds();
}
//#endregion
//#region node_modules/date-fns/getYear.js
function Y(e, t) {
	return q(e, t?.in).getFullYear();
}
//#endregion
//#region node_modules/date-fns/isAfter.js
function sn(e, t) {
	return +q(e) > +q(t);
}
//#endregion
//#region node_modules/date-fns/isBefore.js
function cn(e, t) {
	return +q(e) < +q(t);
}
//#endregion
//#region node_modules/date-fns/isEqual.js
function ln(e, t) {
	return +q(e) == +q(t);
}
//#endregion
//#region node_modules/date-fns/transpose.js
function un(e, t) {
	let n = dn(t) ? new t(0) : K(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function dn(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/Setter.js
var fn = 10, pn = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, mn = class extends pn {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, hn = class extends pn {
	priority = fn;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => K(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : K(e, un(e, this.context));
	}
}, X = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new mn(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, gn = class extends X {
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
}, _n = {
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
}, vn = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/date-fns/parse/_lib/utils.js
function yn(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function bn(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function xn(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * Pe + a * Ne + o * Fe),
		rest: t.slice(n[0].length)
	};
}
function Sn(e) {
	return bn(_n.anyDigitsSigned, e);
}
function Cn(e, t) {
	switch (e) {
		case 1: return bn(_n.singleDigit, t);
		case 2: return bn(_n.twoDigits, t);
		case 3: return bn(_n.threeDigits, t);
		case 4: return bn(_n.fourDigits, t);
		default: return bn(RegExp("^\\d{1," + e + "}"), t);
	}
}
function wn(e, t) {
	switch (e) {
		case 1: return bn(_n.singleDigitSigned, t);
		case 2: return bn(_n.twoDigitsSigned, t);
		case 3: return bn(_n.threeDigitsSigned, t);
		case 4: return bn(_n.fourDigitsSigned, t);
		default: return bn(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function Tn(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function En(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function Dn(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/YearParser.js
var On = class extends X {
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
			case "y": return yn(Cn(4, e), r);
			case "yo": return yn(n.ordinalNumber(e, { unit: "year" }), r);
			default: return yn(Cn(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = En(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, kn = class extends X {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return yn(Cn(4, e), r);
			case "Yo": return yn(n.ordinalNumber(e, { unit: "year" }), r);
			default: return yn(Cn(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = Et(e, r);
		if (n.isTwoDigitYear) {
			let t = En(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ge(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ge(e, r);
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
}, An = class extends X {
	priority = 130;
	parse(e, t) {
		return wn(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = K(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Ke(r);
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
}, jn = class extends X {
	priority = 130;
	parse(e, t) {
		return wn(t === "u" ? 4 : t.length, e);
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
}, Mn = class extends X {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return Cn(t.length, e);
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
}, Nn = class extends X {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return Cn(t.length, e);
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
}, Pn = class extends X {
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
			case "M": return yn(bn(_n.month, e), r);
			case "MM": return yn(Cn(2, e), r);
			case "Mo": return yn(n.ordinalNumber(e, { unit: "month" }), r);
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
}, Fn = class extends X {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return yn(bn(_n.month, e), r);
			case "LL": return yn(Cn(2, e), r);
			case "Lo": return yn(n.ordinalNumber(e, { unit: "month" }), r);
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
function In(e, t, n) {
	let r = q(e, n?.in), i = Ot(r, n) - t;
	return r.setDate(r.getDate() - i * 7), q(r, n?.in);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var Ln = class extends X {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return bn(_n.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return Cn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return Ge(In(e, n, r), r);
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
function Rn(e, t, n) {
	let r = q(e, n?.in), i = Tt(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var zn = class extends X {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return bn(_n.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return Cn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return Ke(Rn(e, n));
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
}, Bn = [
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
], Vn = [
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
], Hn = class extends X {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return bn(_n.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return Cn(t.length, e);
		}
	}
	validate(e, t) {
		let n = Dn(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= Vn[r] : t >= 1 && t <= Bn[r];
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
}, Un = class extends X {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return bn(_n.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return Cn(t.length, e);
		}
	}
	validate(e, t) {
		return Dn(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
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
function Wn(e, t, n) {
	let r = We(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = q(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return Re(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/DayParser.js
var Gn = class extends X {
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
		return e = Wn(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
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
			case "e":
			case "ee": return yn(Cn(t.length, e), i);
			case "eo": return yn(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = Wn(e, n, r), e.setHours(0, 0, 0, 0), e;
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
}, qn = class extends X {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return yn(Cn(t.length, e), i);
			case "co": return yn(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = Wn(e, n, r), e.setHours(0, 0, 0, 0), e;
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
function Jn(e, t, n) {
	let r = q(e, n?.in);
	return Re(r, t - rn(r, n), n);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var Yn = class extends X {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return Cn(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return yn(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return yn(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return yn(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return yn(n.day(e, {
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
		return e = Jn(e, n), e.setHours(0, 0, 0, 0), e;
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
}, Xn = class extends X {
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
		return e.setHours(Tn(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
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
		return e.setHours(Tn(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Qn = class extends X {
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
		return e.setHours(Tn(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, $n = class extends X {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return bn(_n.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Cn(t.length, e);
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
}, er = class extends X {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return bn(_n.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Cn(t.length, e);
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
}, tr = class extends X {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return bn(_n.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Cn(t.length, e);
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
}, nr = class extends X {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return bn(_n.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Cn(t.length, e);
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
}, rr = class extends X {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return bn(_n.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return Cn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, ir = class extends X {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return bn(_n.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return Cn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, ar = class extends X {
	priority = 30;
	parse(e, t) {
		return yn(Cn(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, or = class extends X {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return xn(vn.basicOptionalMinutes, e);
			case "XX": return xn(vn.basic, e);
			case "XXXX": return xn(vn.basicOptionalSeconds, e);
			case "XXXXX": return xn(vn.extendedOptionalSeconds, e);
			default: return xn(vn.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : K(e, e.getTime() - Je(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, sr = class extends X {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return xn(vn.basicOptionalMinutes, e);
			case "xx": return xn(vn.basic, e);
			case "xxxx": return xn(vn.basicOptionalSeconds, e);
			case "xxxxx": return xn(vn.extendedOptionalSeconds, e);
			default: return xn(vn.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : K(e, e.getTime() - Je(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, cr = class extends X {
	priority = 40;
	parse(e) {
		return Sn(e);
	}
	set(e, t, n) {
		return [K(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, lr = class extends X {
	priority = 20;
	parse(e) {
		return Sn(e);
	}
	set(e, t, n) {
		return [K(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, ur = {
	G: new gn(),
	y: new On(),
	Y: new kn(),
	R: new An(),
	u: new jn(),
	Q: new Mn(),
	q: new Nn(),
	M: new Pn(),
	L: new Fn(),
	w: new Ln(),
	I: new zn(),
	d: new Hn(),
	D: new Un(),
	E: new Gn(),
	e: new Kn(),
	c: new qn(),
	i: new Yn(),
	a: new Xn(),
	b: new Zn(),
	B: new Qn(),
	h: new $n(),
	H: new er(),
	K: new tr(),
	k: new nr(),
	m: new rr(),
	s: new ir(),
	S: new ar(),
	X: new or(),
	x: new sr(),
	t: new cr(),
	T: new lr()
}, dr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, fr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, pr = /^'([^]*?)'?$/, mr = /''/g, hr = /\S/, gr = /[a-zA-Z]/;
function _r(e, t, n, r) {
	let i = () => K(r?.in || n, NaN), a = tn(), o = r?.locale ?? a.locale ?? Ct, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : q(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new hn(r?.in, n)], d = t.match(fr).map((e) => {
		let t = e[0];
		if (t in Rt) {
			let n = Rt[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(dr), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && Ut(n) && Wt(n, t, e), !r?.useAdditionalDayOfYearTokens && Ht(n) && Wt(n, t, e);
		let a = n[0], s = ur[a];
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
			if (a.match(gr)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = vr(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && hr.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = q(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function vr(e) {
	return e.match(pr)[1].replace(mr, "'");
}
//#endregion
//#region node_modules/date-fns/isSameQuarter.js
function yr(e, t, n) {
	let [r, i] = Ye(n?.in, e, t);
	return +lt(r) == +lt(i);
}
//#endregion
//#region node_modules/date-fns/subDays.js
function br(e, t, n) {
	return Re(e, -t, n);
}
//#endregion
//#region node_modules/date-fns/setMonth.js
function xr(e, t, n) {
	let r = q(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = K(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = en(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region node_modules/date-fns/set.js
function Sr(e, t, n) {
	let r = q(e, n?.in);
	return isNaN(+r) ? K(n?.in || e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = xr(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
//#endregion
//#region node_modules/date-fns/setHours.js
function Cr(e, t, n) {
	let r = q(e, n?.in);
	return r.setHours(t), r;
}
//#endregion
//#region node_modules/date-fns/setMilliseconds.js
function wr(e, t, n) {
	let r = q(e, n?.in);
	return r.setMilliseconds(t), r;
}
//#endregion
//#region node_modules/date-fns/setMinutes.js
function Tr(e, t, n) {
	let r = q(e, n?.in);
	return r.setMinutes(t), r;
}
//#endregion
//#region node_modules/date-fns/setSeconds.js
function Er(e, t, n) {
	let r = q(e, n?.in);
	return r.setSeconds(t), r;
}
//#endregion
//#region node_modules/date-fns/setYear.js
function Dr(e, t, n) {
	let r = q(e, n?.in);
	return isNaN(+r) ? K(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region node_modules/date-fns/subMonths.js
function Or(e, t, n) {
	return ze(e, -t, n);
}
//#endregion
//#region node_modules/date-fns/sub.js
function kr(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = br(Or(e, i + r * 12, n), o + a * 7, n), d = (l + (c + s * 60) * 60) * 1e3;
	return K(n?.in || e, +u - d);
}
//#endregion
//#region node_modules/date-fns/subYears.js
function Ar(e, t, n) {
	return et(e, -t, n);
}
//#endregion
//#region node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js
function jr() {
	let e = p();
	return u(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img",
		...e
	}, [
		U("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }),
		U("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		U("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		U("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" })
	]);
}
jr.compatConfig = { MODE: 3 };
function Mr() {
	return u(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }), U("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
Mr.compatConfig = { MODE: 3 };
function Nr() {
	return u(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
Nr.compatConfig = { MODE: 3 };
function Pr() {
	return u(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" })]);
}
Pr.compatConfig = { MODE: 3 };
function Fr() {
	return u(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }), U("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" })]);
}
Fr.compatConfig = { MODE: 3 };
function Ir() {
	return u(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
Ir.compatConfig = { MODE: 3 };
function Lr() {
	return u(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
Lr.compatConfig = { MODE: 3 };
var Rr = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), zr = (e, t, n) => Vr(e, t, n) || Z(), Br = (e, t, n) => {
	let r = t.dateInTz ? Rr(new Date(e), t.dateInTz) : Z(e);
	return n ? ji(r, !0) : r;
}, Vr = (e, t, n) => {
	if (!e) return null;
	let r = n ? ji(Z(e), !0) : Z(e);
	return t ? t.exactMatch ? Br(e, t, n) : Rr(r, t.timezone) : r;
}, Hr = (e) => {
	let t = new Date(e.getFullYear(), 0, 1).getTimezoneOffset();
	return e.getTimezoneOffset() < t;
}, Ur = (e, t) => {
	if (!e) return 0;
	let n = /* @__PURE__ */ new Date(), r = new Date(n.toLocaleString("en-US", { timeZone: "UTC" })), i = new Date(n.toLocaleString("en-US", { timeZone: e })), a = (Hr(t ?? i) ? i : t ?? i).getTimezoneOffset() / 60;
	return (+r - i) / 36e5 - a;
}, Wr = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Wr || {}), Gr = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Gr || {}), Kr = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Kr || {}), qr = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(qr || {}), Jr = [
	"timestamp",
	"date",
	"iso"
], Yr = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Yr || {}), Xr = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Xr || {}), Zr = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(Zr || {});
function Qr(e) {
	return (t) => {
		let n = new Intl.DateTimeFormat(e, {
			weekday: "short",
			timeZone: "UTC"
		}).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`));
		return e === "ar" ? n.slice(2, 5) : n.slice(0, 2);
	};
}
function $r(e) {
	return (t) => Zt(Rr(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
var ei = (e, t, n) => {
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
		i = r.map($r(e));
	} catch {
		i = r.map(Qr(t));
	}
	else i = r.map(Qr(t));
	let a = i.slice(0, n), o = i.slice(n + 1, i.length);
	return [i[n]].concat(...o, ...a);
}, ti = (e, t, n) => {
	let r = [];
	for (let n = +e[0]; n <= +e[1]; n++) r.push({
		value: +n,
		text: yi(n, t)
	});
	return n ? r.reverse() : r;
}, ni = (e, t, n) => {
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
			let i = Zt(Rr(n, "UTC"), t, { locale: e });
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
}, ri = (e) => [
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
][e], ii = (e) => {
	let t = B(e);
	return t?.$el ? t?.$el : t;
}, ai = (e) => ({
	type: "dot",
	...e ?? {}
}), oi = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, si = {
	prop: (e) => `"${e}" prop must be enabled!`,
	dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, ci = (e) => e, li = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, ui = (e) => e === null, di = (e) => {
	if (e) return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, fi = (e) => {
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
}, pi = (e, t, n) => {
	let r = n != null, i = t != null;
	if (!r && !i) return !1;
	let a = +n, o = +t;
	return r && i ? +e > a || +e < o : r ? +e > a : i ? +e < o : !1;
}, mi = (e, t) => fi(e).map((e) => e.map((e) => {
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
})), hi = (e, t, n = !1) => {
	e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
}, gi = () => [
	"a[href]",
	"area[href]",
	"input:not([disabled]):not([type='hidden'])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"[tabindex]:not([tabindex='-1'])",
	"[data-datepicker-instance]"
].join(", ");
function _i(e, t) {
	let n = [...document.querySelectorAll(gi())];
	n = n.filter((t) => !e.contains(t) || t.hasAttribute("data-datepicker-instance"));
	let r = n.indexOf(e);
	if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length)) return n[r + (t ? -1 : 1)];
}
var vi = (e, t) => e?.querySelector(`[data-dp-element="${t}"]`), yi = (e, t) => new Intl.NumberFormat(t, {
	useGrouping: !1,
	style: "decimal"
}).format(e), bi = (e, t) => Zt(e, t ?? Zr.DATE), xi = (e) => Array.isArray(e), Si = (e, t, n) => t.get(bi(e, n)), Ci = (e, t) => e ? t ? t instanceof Map ? !!Si(e, t) : t(Z(e)) : !1 : !0, wi = (e, t, n = !1, r) => {
	if (e.key === Xr.enter || e.key === Xr.space) return n && e.preventDefault(), t();
	if (r) return r(e);
}, Ti = () => "ontouchstart" in window || navigator.maxTouchPoints > 0, Ei = (e, t) => e ? Zr.MONTH_AND_YEAR : t ? Zr.YEAR : Zr.DATE, Di = (e) => e < 10 ? `0${e}` : e, Oi = (e, t, n, r, i, a) => {
	let o = _r(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: a });
	return rt(o) && nt(o) ? r || i ? o : Sr(o, {
		hours: +n.hours,
		minutes: +n?.minutes,
		seconds: +n?.seconds,
		milliseconds: 0
	}) : null;
}, ki = (e, t, n, r, i, a) => {
	let o = Array.isArray(n) ? n[0] : n;
	if (typeof t == "string") return Oi(e, t, o, r, i, a);
	if (Array.isArray(t)) {
		let n = null;
		for (let s of t) if (n = Oi(e, s, o, r, i, a), n) break;
		return n;
	}
	return typeof t == "function" ? t(e) : null;
}, Z = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Ai = (e, t, n) => {
	if (t) {
		let t = (e.getMonth() + 1).toString().padStart(2, "0"), r = e.getDate().toString().padStart(2, "0"), i = e.getHours().toString().padStart(2, "0"), a = e.getMinutes().toString().padStart(2, "0"), o = n ? e.getSeconds().toString().padStart(2, "0") : "00";
		return `${e.getFullYear()}-${t}-${r}T${i}:${a}:${o}.000Z`;
	}
	let r = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
	return new Date(r).toISOString();
}, ji = (e, t) => {
	let n = Sr(Z(JSON.parse(JSON.stringify(e))), {
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0
	});
	return t ? dt(n) : n;
}, Mi = (e, t, n, r) => {
	let i = e ? Z(e) : Z();
	return (t || t === 0) && (i = Cr(i, +t)), (n || n === 0) && (i = Tr(i, +n)), (r || r === 0) && (i = Er(i, +r)), wr(i, 0);
}, Ni = (e, t) => !e || !t ? !1 : cn(ji(e), ji(t)), Q = (e, t) => !e || !t ? !1 : ln(ji(e), ji(t)), Pi = (e, t) => !e || !t ? !1 : sn(ji(e), ji(t)), Fi = (e, t, n) => e?.[0] && e?.[1] ? Pi(n, e[0]) && Ni(n, e[1]) : e?.[0] && t ? Pi(n, e[0]) && Ni(n, t) || Ni(n, e[0]) && Pi(n, t) : !1, Ii = (e) => ji(Sr(new Date(e), { date: 1 })), Li = (e, t, n) => t && (n || n === 0) ? Object.fromEntries([
	"hours",
	"minutes",
	"seconds"
].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])) : {
	hours: isNaN(+e.hours) ? void 0 : +e.hours,
	minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
	seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, Ri = (e) => ({
	hours: nn(e),
	minutes: an(e),
	seconds: on(e)
}), zi = (e, t) => {
	if (t) {
		let n = Y(Z(t));
		if (n > e) return 12;
		if (n === e) return J(Z(t));
	}
}, Bi = (e, t) => {
	if (t) {
		let n = Y(Z(t));
		return n < e ? -1 : n === e ? J(Z(t)) : void 0;
	}
}, Vi = (e) => {
	if (e) return Y(Z(e));
}, Hi = (e, t) => ct({
	start: Pi(e, t) ? t : e,
	end: Pi(t, e) ? t : e
}), Ui = (e) => {
	let t = ze(e, 1);
	return {
		month: J(t),
		year: Y(t)
	};
}, Wi = (e, t) => [Ge(e, { weekStartsOn: +t }), mt(e, { weekStartsOn: +t })], Gi = (e, t) => {
	let n = {
		hours: nn(Z()),
		minutes: an(Z()),
		seconds: t ? on(Z()) : 0
	};
	return Object.assign(n, e);
}, Ki = (e, t, n) => [Sr(Z(e), { date: 1 }), Sr(Z(), {
	month: t,
	year: n,
	date: 1
})], qi = (e, t, n) => {
	let r = e ? Z(e) : Z();
	return (t || t === 0) && (r = xr(r, t)), n && (r = Dr(r, n)), r;
}, Ji = (e, t, n, r, i) => {
	if (!r || i && !t || !i && !n) return !1;
	let a = i ? ze(e, 1) : Or(e, 1), o = [J(a), Y(a)];
	return i ? !Xi(...o, t) : !Yi(...o, n);
}, Yi = (e, t, n) => Ni(...Ki(n, e, t)) || Q(...Ki(n, e, t)), Xi = (e, t, n) => Pi(...Ki(n, e, t)) || Q(...Ki(n, e, t)), Zi = (e, t, n, r, i, a, o) => {
	if (typeof t == "function" && !o) return t(e);
	let s = n ? { locale: n } : void 0;
	return Array.isArray(e) ? `${Zt(e[0], a, s)}${i && !e[1] ? "" : r}${e[1] ? Zt(e[1], a, s) : ""}` : Zt(e, a, s);
}, Qi = (e) => {
	if (e) return null;
	throw Error(si.prop("partial-range"));
}, $i = (e, t) => {
	if (t) return e();
	throw Error(si.prop("range"));
}, ea = (e) => Array.isArray(e) ? rt(e[0]) && (!e[1] || rt(e[1])) : e ? rt(e) : !1, ta = (e, t) => Sr(t ?? Z(), {
	hours: +e.hours || 0,
	minutes: +e.minutes || 0,
	seconds: +e.seconds || 0
}), na = (e, t, n, r) => {
	if (!e) return !0;
	if (r) {
		let r = n === "max" ? cn(e, t) : sn(e, t), i = {
			seconds: 0,
			milliseconds: 0
		};
		return r || ln(Sr(e, i), Sr(t, i));
	}
	return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, ra = (e, t, n) => e ? ta(e, t) : Z(n ?? t), ia = (e, t, n, r, i) => {
	if (Array.isArray(r)) {
		let a = ra(e, r[0], t), o = ra(e, r[1], t);
		return na(r[0], a, n, !!t) && na(r[1], o, n, !!t) && i;
	}
	return na(r, ra(e, r, t), n, !!t) && i;
}, aa = (e) => Sr(Z(), Ri(e)), oa = (e, t, n) => {
	if (e instanceof Map) {
		let r = `${Di(n + 1)}-${t}`;
		return e.size ? e.has(r) : !1;
	}
	return typeof e == "function" && e(ji(Sr(Z(), {
		month: n,
		year: t
	}), !0));
}, sa = (e, t, n) => {
	if (e instanceof Map) {
		let r = `${Di(n + 1)}-${t}`;
		return !e.size || e.has(r);
	}
	return !0;
}, ca = (e, t, n) => typeof e == "function" ? e({
	month: t,
	year: n
}) : !!e.months.find((e) => e.month === t && e.year === n), la = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), ua = (e) => `dp-${Zt(e, "yyyy-MM-dd")}`, da = (e, t) => ({
	before: br(ji(t), e),
	after: Re(ji(t), e)
}), fa = (e, t) => t < +e[0] || t > +e[1], pa = n({
	menuFocused: !1,
	shiftKeyInMenu: !1
}), ma = () => ({
	control: V(() => ({
		shiftKeyInMenu: pa.shiftKeyInMenu,
		menuFocused: pa.menuFocused
	})),
	setMenuFocused: (e) => {
		pa.menuFocused = e;
	},
	setShiftKey: (e) => {
		pa.shiftKeyInMenu !== e && (pa.shiftKeyInMenu = e);
	}
}), ha = n({
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
}), ga = W(null), _a = W(!1), va = W(!1), ya = W(!1), ba = W(!1), xa = W(0), Sa = W(0), Ca = () => {
	let e = V(() => _a.value ? [...ha.selectionGrid, ha.actionRow].filter((e) => e.length) : va.value ? [
		...ha.timePicker[0],
		...ha.timePicker[1],
		ba.value ? [] : [ga.value],
		ha.actionRow
	].filter((e) => e.length) : ya.value ? [...ha.monthPicker, ha.actionRow] : [
		ha.monthYear,
		...ha.calendar,
		ha.time,
		ha.actionRow
	].filter((e) => e.length)), t = (t) => {
		xa.value = t ? xa.value + 1 : xa.value - 1;
		let n = null;
		e.value[Sa.value] && (n = e.value[Sa.value][xa.value]), !n && e.value[Sa.value + (t ? 1 : -1)] ? (Sa.value += t ? 1 : -1, xa.value = t ? 0 : e.value[Sa.value].length - 1) : n || (xa.value = t ? xa.value - 1 : xa.value + 1);
	}, n = (t) => {
		Sa.value === 0 && !t || Sa.value === e.value.length && t || (Sa.value = t ? Sa.value + 1 : Sa.value - 1, e.value[Sa.value] ? e.value[Sa.value] && !e.value[Sa.value][xa.value] && xa.value !== 0 && (xa.value = e.value[Sa.value].length - 1) : Sa.value = t ? Sa.value - 1 : Sa.value + 1);
	}, r = (t) => {
		let n = null;
		e.value[Sa.value] && (n = e.value[Sa.value][xa.value]), n ? n.focus({ preventScroll: !_a.value }) : xa.value = t ? xa.value - 1 : xa.value + 1;
	}, i = () => {
		t(!0), r(!0);
	}, a = () => {
		t(!1), r(!1);
	}, o = () => {
		n(!1), r(!0);
	}, s = () => {
		n(!0), r(!0);
	}, c = (e, t) => {
		ha[t] = e;
	}, l = (e, t) => {
		ha[t] = e;
	}, u = () => {
		xa.value = 0, Sa.value = 0;
	};
	return {
		buildMatrix: c,
		buildMultiLevelMatrix: l,
		setTimePickerBackRef: (e) => {
			ga.value = e;
		},
		setSelectionGrid: (e) => {
			_a.value = e, u(), e || (ha.selectionGrid = []);
		},
		setTimePicker: (e, t = !1) => {
			va.value = e, ba.value = t, u(), e || (ha.timePicker[0] = [], ha.timePicker[1] = []);
		},
		setTimePickerElements: (e, t = 0) => {
			ha.timePicker[t] = e;
		},
		arrowRight: i,
		arrowLeft: a,
		arrowUp: o,
		arrowDown: s,
		clearArrowNav: () => {
			ha.monthYear = [], ha.calendar = [], ha.time = [], ha.actionRow = [], ha.selectionGrid = [], ha.timePicker[0] = [], ha.timePicker[1] = [], _a.value = !1, va.value = !1, ba.value = !1, ya.value = !1, u(), ga.value = null;
		},
		setMonthPicker: (e) => {
			ya.value = e, u();
		},
		refSets: ha
	};
}, wa = (e) => ({
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down",
	...e ?? {}
}), Ta = (e) => ({
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
}), Ea = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Da = (e) => {
	let t = typeof e == "object" && e, n = {
		static: !0,
		solo: !1
	};
	if (!e) return {
		...n,
		count: Ea(!1)
	};
	let r = t ? e : {}, i = Ea(t ? r.count ?? !0 : e);
	return Object.assign(n, r, { count: i });
}, Oa = (e, t, n) => e || (typeof n == "string" ? n : t), ka = (e) => typeof e == "boolean" ? e ? wa({}) : !1 : wa(e), Aa = (e) => {
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
}, ja = (e) => ({
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	},
	...e ?? {}
}), Ma = (e) => ({
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	...e ?? {}
}), Na = (e) => {
	let t = { input: !1 };
	return typeof e == "object" ? {
		...t,
		...e ?? {},
		enabled: !0
	} : {
		enabled: e,
		...t
	};
}, Pa = (e) => ({
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
}), Fa = (e) => {
	let t = {
		dates: Array.isArray(e) ? e.map((e) => Z(e)) : [],
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
}, Ia = (e) => typeof e == "object" ? {
	type: e?.type ?? "local",
	hideOnOffsetDates: e?.hideOnOffsetDates ?? !1
} : {
	type: e,
	hideOnOffsetDates: !1
}, La = (e) => {
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
}, Ra = (e) => e ? typeof e == "string" ? {
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
}, za = (e, t, n, r) => new Map(e.map((e) => {
	let i = zr(e, t, r);
	return [bi(i, n), i];
})), Ba = (e, t) => e.length ? new Map(e.map((e) => [bi(zr(e.date, t), Zr.DATE), e])) : null, Va = (e) => {
	let t = Ei(e.isMonthPicker, e.isYearPicker);
	return {
		minDate: Vr(e.minDate, e.timezone, e.isSpecific),
		maxDate: Vr(e.maxDate, e.timezone, e.isSpecific),
		disabledDates: xi(e.disabledDates) ? za(e.disabledDates, e.timezone, t, e.isSpecific) : e.disabledDates,
		allowedDates: xi(e.allowedDates) ? za(e.allowedDates, e.timezone, t, e.isSpecific) : null,
		highlight: typeof e.highlight == "object" && xi(e.highlight?.dates) ? za(e.highlight.dates, e.timezone, t) : e.highlight,
		markers: Ba(e.markers, e.timezone)
	};
}, Ha = (e) => typeof e == "boolean" ? {
	enabled: e,
	dragSelect: !0,
	limit: null
} : {
	enabled: !!e,
	limit: e.limit ? +e.limit : null,
	dragSelect: e.dragSelect ?? !0
}, Ua = (e) => ({ ...Object.fromEntries(Object.keys(e).map((t) => {
	let n = t, r = e[n];
	return [t, typeof e[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
})) }), Wa = (e) => {
	let t = () => {
		let t = e.enableSeconds ? ":ss" : "", n = e.enableMinutes ? ":mm" : "";
		return e.is24 ? `HH${n}${t}` : `hh${n}${t} aa`;
	}, n = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${g.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy", r = (t) => Gi(t, e.enableSeconds), i = () => b.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, a = V(() => Da(e.multiCalendars)), o = V(() => i()), s = V(() => Ta(e.ariaLabels)), c = V(() => ja(e.filters)), l = V(() => ka(e.transitions)), u = V(() => Ma(e.actionRow)), d = V(() => Oa(e.previewFormat, e.format, n())), f = V(() => Aa(e.textInput)), p = V(() => Na(e.inline)), m = V(() => Pa(e.config)), h = V(() => Fa(e.highlight)), g = V(() => Ia(e.weekNumbers)), _ = V(() => Ra(e.timezone)), v = V(() => Ha(e.multiDates)), y = V(() => Va({
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
	})), b = V(() => La(e.range));
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
		defaultedUI: V(() => Ua(e.ui)),
		getDefaultPattern: n,
		getDefaultStartTime: i,
		handleEventPropagation: (e) => {
			m.value.allowStopPropagation && e.stopPropagation(), m.value.allowPreventDefault && e.preventDefault();
		}
	};
}, Ga = (e, t, { isInputFocused: n, isTextInputDate: r }) => {
	let i = W(), { defaultedTextInput: a, defaultedRange: o, defaultedTz: s, defaultedMultiDates: c, getDefaultPattern: l } = Wa(t), u = W(""), d = de(t, "format"), f = de(t, "formatLocale");
	E(i, () => {
		typeof t.onInternalModelChange == "function" && e("internal-model-change", i.value, oe(!0));
	}, { deep: !0 }), E(o, (e, t) => {
		e.enabled !== t.enabled && (i.value = null);
	}), E(d, () => {
		P();
	});
	let p = (e) => s.value.timezone && s.value.convertModel ? Rr(e, s.value.timezone) : e, m = (e) => s.value.timezone && s.value.convertModel ? He(e, Ur(s.value.timezone, e)) : e, h = (e, n, r = !1) => Zi(e, t.format, t.formatLocale, a.value.rangeSeparator, t.modelAuto, n ?? l(), r), g = (e) => e ? t.modelType ? ne(e) : {
		hours: nn(e),
		minutes: an(e),
		seconds: t.enableSeconds ? on(e) : 0
	} : null, _ = (e) => t.modelType ? ne(e) : {
		month: J(e),
		year: Y(e)
	}, v = (e) => Array.isArray(e) ? c.value.enabled ? e.map((e) => y(e, Dr(Z(), e))) : $i(() => [Dr(Z(), e[0]), e[1] ? Dr(Z(), e[1]) : Qi(o.value.partialRange)], o.value.enabled) : Dr(Z(), +e), y = (e, n) => (typeof e == "string" || typeof e == "number") && t.modelType ? F(e) : n, b = (e) => Array.isArray(e) ? [y(e[0], Mi(null, +e[0].hours, +e[0].minutes, e[0].seconds)), y(e[1], Mi(null, +e[1].hours, +e[1].minutes, e[1].seconds))] : y(e, Mi(null, e.hours, e.minutes, e.seconds)), x = (e) => {
		let t = Sr(Z(), { date: 1 });
		return Array.isArray(e) ? c.value.enabled ? e.map((e) => y(e, qi(t, +e.month, +e.year))) : $i(() => [y(e[0], qi(t, +e[0].month, +e[0].year)), y(e[1], e[1] ? qi(t, +e[1].month, +e[1].year) : Qi(o.value.partialRange))], o.value.enabled) : y(e, qi(t, +e.month, +e.year));
	}, S = (e) => {
		if (Array.isArray(e)) return e.map((e) => F(e));
		throw Error(si.dateArr("multi-dates"));
	}, C = (e) => {
		if (Array.isArray(e) && o.value.enabled) {
			let t = e[0], n = e[1];
			return [Z(Array.isArray(t) ? t[0] : null), Array.isArray(n) && n.length ? Z(n[0]) : null];
		}
		return Z(e[0]);
	}, w = (e) => t.modelAuto ? Array.isArray(e) ? [F(e[0]), F(e[1])] : t.autoApply ? [F(e)] : [F(e), null] : Array.isArray(e) ? $i(() => e[1] ? [F(e[0]), e[1] ? F(e[1]) : Qi(o.value.partialRange)] : [F(e[0])], o.value.enabled) : F(e), T = () => {
		Array.isArray(i.value) && o.value.enabled && i.value.length === 1 && i.value.push(Qi(o.value.partialRange));
	}, D = () => {
		let e = i.value;
		return [ne(e[0]), e[1] ? ne(e[1]) : Qi(o.value.partialRange)];
	}, O = () => Array.isArray(i.value) ? i.value[1] ? D() : ne(ci(i.value[0])) : [], k = () => (i.value || []).map((e) => ne(e)), ee = (e = !1) => (e || T(), t.modelAuto ? O() : c.value.enabled ? k() : Array.isArray(i.value) ? $i(() => D(), o.value.enabled) : ne(ci(i.value))), A = (e) => !e || Array.isArray(e) && !e.length ? null : t.timePicker ? b(ci(e)) : t.monthPicker ? x(ci(e)) : t.yearPicker ? v(ci(e)) : c.value.enabled ? S(ci(e)) : t.weekPicker ? C(ci(e)) : w(ci(e)), j = (e) => {
		if (r.value) return;
		let t = A(e);
		ea(ci(t)) ? (i.value = ci(t), P()) : (i.value = null, u.value = "");
	}, M = () => {
		let e = (e) => Zt(e, a.value.format);
		return `${e(i.value[0])} ${a.value.rangeSeparator} ${i.value[1] ? e(i.value[1]) : ""}`;
	}, N = () => n.value && i.value ? Array.isArray(i.value) ? M() : Zt(i.value, a.value.format) : h(i.value), te = () => i.value ? c.value.enabled ? i.value.map((e) => h(e)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? N() : h(i.value) : "", P = () => {
		!t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? u.value = te() : u.value = t.format(i.value);
	}, F = (e) => {
		if (t.utc) {
			let n = new Date(e);
			return t.utc === "preserve" ? new Date(n.getTime() + n.getTimezoneOffset() * 6e4) : n;
		}
		return t.modelType ? Jr.includes(t.modelType) ? p(new Date(e)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? p(_r(e, l(), /* @__PURE__ */ new Date(), { locale: f.value })) : p(_r(e, t.modelType, /* @__PURE__ */ new Date(), { locale: f.value })) : p(new Date(e));
	}, ne = (e) => e ? t.utc ? Ai(e, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +m(e) : t.modelType === "iso" ? m(e).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? h(m(e)) : h(m(e), t.modelType, !0) : m(e) : "", I = (t, n = !1, r = !1) => {
		if (r) return t;
		e("update:model-value", t), s.value.emitTimezone && n && e("update:model-timezone-value", Array.isArray(t) ? t.map((e) => Rr(ci(e), s.value.emitTimezone)) : Rr(ci(t), s.value.emitTimezone));
	}, L = (e) => Array.isArray(i.value) ? c.value.enabled ? i.value.map((t) => e(t)) : [e(i.value[0]), i.value[1] ? e(i.value[1]) : Qi(o.value.partialRange)] : e(ci(i.value)), re = () => {
		if (Array.isArray(i.value)) {
			let e = Wi(i.value[0], t.weekStart), n = i.value[1] ? Wi(i.value[1], t.weekStart) : [];
			return [e.map((e) => Z(e)), n.map((e) => Z(e))];
		}
		return Wi(i.value, t.weekStart).map((e) => Z(e));
	}, ie = (e, t) => I(ci(L(e)), !1, t), ae = (t) => {
		let n = re();
		return t ? n : e("update:model-value", re());
	}, oe = (e = !1) => (e || P(), t.monthPicker ? ie(_, e) : t.timePicker ? ie(g, e) : t.yearPicker ? ie(Y, e) : t.weekPicker ? ae(e) : I(ee(e), !0, e));
	return {
		inputValue: u,
		internalModelValue: i,
		checkBeforeEmit: () => i.value ? o.value.enabled ? o.value.partialRange ? i.value.length >= 1 : i.value.length === 2 : !!i.value : !1,
		parseExternalModelValue: j,
		formatInputValue: P,
		emitModelValue: oe
	};
}, Ka = (e, t) => {
	let { defaultedFilters: n, propDates: r } = Wa(e), { validateMonthYearInRange: i } = Cs(e), a = (e, t) => {
		let r = e;
		return n.value.months.includes(J(r)) ? (r = t ? ze(e, 1) : Or(e, 1), a(r, t)) : r;
	}, o = (e, t) => {
		let r = e;
		return n.value.years.includes(Y(r)) ? (r = t ? et(e, 1) : Ar(e, 1), o(r, t)) : r;
	}, s = (t, r = !1) => {
		let s = Sr(Z(), {
			month: e.month,
			year: e.year
		}), l = t ? ze(s, 1) : Or(s, 1);
		e.disableYearSelect && (l = Dr(l, e.year));
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
		isDisabled: V(() => (t) => Ji(Sr(Z(), {
			month: e.month,
			year: e.year
		}), r.value.maxDate, r.value.minDate, e.preventMinMaxNavigation, t)),
		updateMonthYear: c
	};
}, qa = {
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
}, Ja = {
	...qa,
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
}, Ya = ["title"], Xa = ["disabled"], Za = /* @__PURE__ */ I({
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
		...Ja
	},
	emits: [
		"close-picker",
		"select-date",
		"select-now",
		"invalid-select"
	],
	setup(e, { emit: t }) {
		let n = t, r = e, { defaultedActionRow: i, defaultedPreviewFormat: a, defaultedMultiCalendars: o, defaultedTextInput: c, defaultedInline: l, defaultedRange: d, defaultedMultiDates: f } = Wa(r), { isTimeValid: p, isMonthValid: m } = Cs(r), { buildMatrix: h } = Ca(), g = W(null), _ = W(null), v = W(!1), y = W({}), b = W(null), S = W(null);
		s(() => {
			r.arrowNavigation && h([ii(g), ii(_)], "actionRow"), C(), window.addEventListener("resize", C);
		}), be(() => {
			window.removeEventListener("resize", C);
		});
		let C = () => {
			v.value = !1, setTimeout(() => {
				let e = b.value?.getBoundingClientRect(), t = S.value?.getBoundingClientRect();
				e && t && (y.value.maxWidth = `${t.width - e.width - 20}px`), v.value = !0;
			}, 0);
		}, w = V(() => d.value.enabled && !d.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), T = V(() => !p.value(r.internalModelValue) || !m.value(r.internalModelValue) || !w.value), E = () => {
			let e = a.value;
			return r.timePicker || r.monthPicker, e(ci(r.internalModelValue));
		}, D = () => {
			let e = r.internalModelValue;
			return o.value.count > 0 ? `${O(e[0])} - ${O(e[1])}` : [O(e[0]), O(e[1])];
		}, O = (e) => Zi(e, a.value, r.formatLocale, c.value.rangeSeparator, r.modelAuto, a.value), k = V(() => !r.internalModelValue || !r.menuMount ? "" : typeof a.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? D() : f.value.enabled ? r.internalModelValue.map((e) => `${O(e)}`) : r.modelAuto ? `${O(r.internalModelValue[0])}` : `${O(r.internalModelValue[0])} -` : O(r.internalModelValue) : E()), ee = () => f.value.enabled ? "; " : " - ", A = V(() => Array.isArray(k.value) ? k.value.join(ee()) : k.value), j = () => {
			p.value(r.internalModelValue) && m.value(r.internalModelValue) && w.value ? n("select-date") : n("invalid-select");
		};
		return (e, t) => (u(), H("div", {
			ref_key: "actionRowRef",
			ref: S,
			class: "dp__action_row"
		}, [e.$slots["action-row"] ? z(e.$slots, "action-row", L(ye({ key: 0 }, {
			internalModelValue: e.internalModelValue,
			disabled: T.value,
			selectDate: () => e.$emit("select-date"),
			closePicker: () => e.$emit("close-picker")
		}))) : (u(), H(x, { key: 1 }, [B(i).showPreview ? (u(), H("div", {
			key: 0,
			class: "dp__selection_preview",
			title: A.value,
			style: ae(y.value)
		}, [e.$slots["action-preview"] && v.value ? z(e.$slots, "action-preview", {
			key: 0,
			value: e.internalModelValue
		}) : N("", !0), !e.$slots["action-preview"] && v.value ? (u(), H(x, { key: 1 }, [P(me(A.value), 1)], 64)) : N("", !0)], 12, Ya)) : N("", !0), U("div", {
			ref_key: "actionBtnContainer",
			ref: b,
			class: "dp__action_buttons",
			"data-dp-element": "action-row"
		}, [e.$slots["action-buttons"] ? z(e.$slots, "action-buttons", {
			key: 0,
			value: e.internalModelValue
		}) : N("", !0), e.$slots["action-buttons"] ? N("", !0) : (u(), H(x, { key: 1 }, [
			!B(l).enabled && B(i).showCancel ? (u(), H("button", {
				key: 0,
				ref_key: "cancelButtonRef",
				ref: g,
				type: "button",
				class: "dp__action_button dp__action_cancel",
				onClick: t[0] ||= (t) => e.$emit("close-picker"),
				onKeydown: t[1] ||= (t) => B(wi)(t, () => e.$emit("close-picker"))
			}, me(e.cancelText), 545)) : N("", !0),
			B(i).showNow ? (u(), H("button", {
				key: 1,
				type: "button",
				class: "dp__action_button dp__action_cancel",
				onClick: t[2] ||= (t) => e.$emit("select-now"),
				onKeydown: t[3] ||= (t) => B(wi)(t, () => e.$emit("select-now"))
			}, me(e.nowButtonLabel), 33)) : N("", !0),
			B(i).showSelect ? (u(), H("button", {
				key: 2,
				ref_key: "selectButtonRef",
				ref: _,
				type: "button",
				class: "dp__action_button dp__action_select",
				disabled: T.value,
				"data-test-id": "select-button",
				onKeydown: t[4] ||= (e) => B(wi)(e, () => j()),
				onClick: j
			}, me(e.selectText), 41, Xa)) : N("", !0)
		], 64))], 512)], 64))], 512));
	}
}), Qa = [
	"role",
	"aria-label",
	"tabindex"
], $a = { class: "dp__selection_grid_header" }, eo = [
	"aria-selected",
	"aria-disabled",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], to = ["aria-label"], no = /* @__PURE__ */ I({
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
		let { setSelectionGrid: r, buildMultiLevelMatrix: a, setMonthPicker: o } = Ca(), c = n, l = e, { defaultedAriaLabels: d, defaultedTextInput: f, defaultedConfig: p, handleEventPropagation: m } = Wa(l), { hideNavigationButtons: g } = ws(), _ = W(!1), v = W(null), y = W(null), b = W([]), S = W(), w = W(null), T = W(0), O = W(null);
		C(() => {
			v.value = null;
		}), s(() => {
			Se().then(() => I()), l.noOverlayFocus || A(), k(!0);
		}), be(() => k(!1));
		let k = (e) => {
			l.arrowNavigation && (l.headerRefs?.length ? o(e) : r(e));
		}, A = () => {
			let e = ii(y);
			e && (f.value.enabled || (v.value ? v.value?.focus({ preventScroll: !0 }) : e.focus({ preventScroll: !0 })), _.value = e.clientHeight < e.scrollHeight);
		}, j = V(() => ({
			dp__overlay: !0,
			"dp--overlay-absolute": !l.useRelative,
			"dp--overlay-relative": l.useRelative
		})), M = V(() => l.useRelative ? {
			height: `${l.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), te = V(() => ({ dp__overlay_col: !0 })), F = V(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__overlay_action: !0,
			dp__over_action_scroll: _.value,
			dp__button_bottom: l.isLast
		})), ne = V(() => ({
			dp__overlay_container: !0,
			dp__container_flex: l.items?.length <= 6,
			dp__container_block: l.items?.length > 6
		}));
		E(() => l.items, () => I(!1), { deep: !0 });
		let I = (e = !0) => {
			Se().then(() => {
				let t = ii(v), n = ii(y), r = ii(w), i = ii(O), a = r ? r.getBoundingClientRect().height : 0;
				n && (n.getBoundingClientRect().height ? T.value = n.getBoundingClientRect().height - a : T.value = p.value.modeHeight - a), t && i && e && (i.scrollTop = t.offsetTop - i.offsetTop - (T.value / 2 - t.getBoundingClientRect().height) - a);
			});
		}, L = (e) => {
			e.disabled || c("selected", e.value);
		}, re = () => {
			c("toggle"), c("reset-flow");
		}, ie = (e) => {
			l.escClose && (re(), m(e));
		}, oe = (e, t, n, r) => {
			e && ((t.active || t.value === l.focusValue) && (v.value = e), l.arrowNavigation && (Array.isArray(b.value[n]) ? b.value[n][r] = e : b.value[n] = [e], R()));
		}, R = () => {
			let e = l.headerRefs?.length ? [l.headerRefs].concat(b.value) : b.value.concat([l.skipButtonRef ? [] : [w.value]]);
			a(ci(e), l.headerRefs?.length ? "monthPicker" : "selectionGrid");
		}, se = (e) => {
			l.arrowNavigation || hi(e, p.value, !0);
		}, ce = (e) => {
			S.value = e, c("hover-value", e);
		}, le = () => {
			if (re(), !l.isLast) {
				let e = vi(l.menuWrapRef ?? null, "action-row");
				e && di(e)?.focus();
			}
		}, ue = (e) => {
			switch (e.key) {
				case Xr.esc: return ie(e);
				case Xr.arrowLeft: return se(e);
				case Xr.arrowRight: return se(e);
				case Xr.arrowUp: return se(e);
				case Xr.arrowDown: return se(e);
				default: return;
			}
		}, de = (e) => {
			if (e.key === Xr.enter) return re();
			if (e.key === Xr.tab) return le();
		};
		return t({ focusGrid: A }), (t, n) => (u(), H("div", {
			ref_key: "gridWrapRef",
			ref: y,
			class: G(j.value),
			style: ae(M.value),
			role: e.useRelative ? void 0 : "dialog",
			"aria-label": e.overlayLabel,
			tabindex: e.useRelative ? void 0 : "0",
			onKeydown: ue,
			onClick: n[0] ||= ee(() => {}, ["prevent"])
		}, [U("div", {
			ref_key: "containerRef",
			ref: O,
			class: G(ne.value),
			style: ae({ "--dp-overlay-height": `${T.value}px` }),
			role: "grid"
		}, [U("div", $a, [z(t.$slots, "header")]), t.$slots.overlay ? z(t.$slots, "overlay", { key: 0 }) : (u(!0), H(x, { key: 1 }, i(e.items, (n, r) => (u(), H("div", {
			key: r,
			class: G(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
			role: "row"
		}, [(u(!0), H(x, null, i(n, (e, n) => (u(), H("div", {
			key: e.value,
			ref_for: !0,
			ref: (t) => oe(t, e, r, n),
			role: "gridcell",
			class: G(te.value),
			"aria-selected": e.active || void 0,
			"aria-disabled": e.disabled || void 0,
			tabindex: "0",
			"data-test-id": e.text,
			onClick: ee((t) => L(e), ["prevent"]),
			onKeydown: (t) => B(wi)(t, () => L(e), !0),
			onMouseover: (t) => ce(e.value)
		}, [U("div", { class: G(e.className) }, [t.$slots.item ? z(t.$slots, "item", {
			key: 0,
			item: e
		}) : N("", !0), t.$slots.item ? N("", !0) : (u(), H(x, { key: 1 }, [P(me(e.text), 1)], 64))], 2)], 42, eo))), 128))], 2))), 128))], 6), t.$slots["button-icon"] ? D((u(), H("button", {
			key: 0,
			ref_key: "toggleButton",
			ref: w,
			type: "button",
			"aria-label": B(d)?.toggleOverlay,
			class: G(F.value),
			tabindex: "0",
			onClick: re,
			onKeydown: de
		}, [z(t.$slots, "button-icon")], 42, to)), [[h, !B(g)(e.hideNavigation, e.type)]]) : N("", !0)], 46, Qa));
	}
}), ro = ["data-dp-mobile"], io = /* @__PURE__ */ I({
	__name: "InstanceWrap",
	props: {
		multiCalendars: {},
		stretch: { type: Boolean },
		collapse: { type: Boolean },
		isMobile: { type: Boolean }
	},
	setup(e) {
		let t = e, n = V(() => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]), r = V(() => ({ dp__instance_calendar: t.multiCalendars > 0 }));
		return (t, a) => (u(), H("div", {
			class: G({
				dp__menu_inner: !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				dp__flex_display: e.multiCalendars > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": e.isMobile
		}, [(u(!0), H(x, null, i(n.value, (e, n) => (u(), H("div", {
			key: e,
			class: G(r.value)
		}, [z(t.$slots, "default", {
			instance: e,
			index: n
		})], 2))), 128))], 10, ro));
	}
}), ao = [
	"data-dp-element",
	"aria-label",
	"aria-disabled"
], oo = /* @__PURE__ */ I({
	compatConfig: { MODE: 3 },
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let n = t, r = W(null);
		return s(() => n("set-ref", r)), (t, i) => (u(), H("button", {
			ref_key: "elRef",
			ref: r,
			type: "button",
			"data-dp-element": e.elName,
			class: "dp__btn dp--arrow-btn-nav",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-disabled": e.disabled || void 0,
			onClick: i[0] ||= (e) => n("activate"),
			onKeydown: i[1] ||= (e) => B(wi)(e, () => n("activate"), !0)
		}, [U("span", { class: G(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }]) }, [z(t.$slots, "default")], 2)], 40, ao));
	}
}), so = ["aria-label", "data-test-id"], co = /* @__PURE__ */ I({
	__name: "YearModePicker",
	props: {
		...Ja,
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
	setup(e, { emit: t }) {
		let n = t, r = e, { showRightIcon: i, showLeftIcon: a } = ws(), { defaultedConfig: s, defaultedMultiCalendars: c, defaultedAriaLabels: l, defaultedTransitions: d, defaultedUI: f } = Wa(r), { showTransition: p, transitionName: m } = bs(d), h = W(!1), g = V(() => yi(r.year, r.locale)), _ = (e = !1, t) => {
			h.value = !h.value, n("toggle-year-picker", {
				flow: e,
				show: t
			});
		}, v = (e) => {
			h.value = !1, n("year-select", e);
		}, y = (e = !1) => {
			n("handle-year", e);
		};
		return (t, n) => (u(), H(x, null, [U("div", { class: G(["dp--year-mode-picker", { "dp--hidden-el": h.value }]) }, [
			B(a)(B(c), e.instance) ? (u(), R(oo, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": B(l)?.prevYear,
				disabled: e.isDisabled(!1),
				class: G(B(f)?.navBtnPrev),
				onActivate: n[0] ||= (e) => y(!1)
			}, {
				default: T(() => [t.$slots["arrow-left"] ? z(t.$slots, "arrow-left", { key: 0 }) : N("", !0), t.$slots["arrow-left"] ? N("", !0) : (u(), R(B(Nr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : N("", !0),
			U("button", {
				ref: "mpYearButtonRef",
				class: "dp__btn dp--year-select",
				type: "button",
				"aria-label": `${e.year}-${B(l)?.openYearsOverlay}`,
				"data-test-id": `year-mode-btn-${e.instance}`,
				onClick: n[1] ||= () => _(!1),
				onKeydown: n[2] ||= A(() => _(!1), ["enter"])
			}, [t.$slots.year ? z(t.$slots, "year", {
				key: 0,
				year: e.year,
				text: g.value,
				value: e.year
			}) : N("", !0), t.$slots.year ? N("", !0) : (u(), H(x, { key: 1 }, [P(me(g.value), 1)], 64))], 40, so),
			B(i)(B(c), e.instance) ? (u(), R(oo, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": B(l)?.nextYear,
				disabled: e.isDisabled(!0),
				class: G(B(f)?.navBtnNext),
				onActivate: n[3] ||= (e) => y(!0)
			}, {
				default: T(() => [t.$slots["arrow-right"] ? z(t.$slots, "arrow-right", { key: 0 }) : N("", !0), t.$slots["arrow-right"] ? N("", !0) : (u(), R(B(Pr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : N("", !0)
		], 2), ce(o, {
			name: B(m)(e.showYearPicker),
			css: B(p)
		}, {
			default: T(() => [e.showYearPicker ? (u(), R(no, {
				key: 0,
				items: e.items,
				"text-input": t.textInput,
				"esc-close": t.escClose,
				config: t.config,
				"is-last": t.autoApply && !B(s).keepActionRow,
				"hide-navigation": t.hideNavigation,
				"aria-labels": t.ariaLabels,
				"overlay-label": B(l)?.yearPicker?.(!0),
				type: "year",
				onToggle: _,
				onSelected: n[4] ||= (e) => v(e)
			}, ge({
				"button-icon": T(() => [t.$slots["calendar-icon"] ? z(t.$slots, "calendar-icon", { key: 0 }) : N("", !0), t.$slots["calendar-icon"] ? N("", !0) : (u(), R(B(jr), { key: 1 }))]),
				_: 2
			}, [t.$slots["year-overlay-value"] ? {
				name: "item",
				fn: T(({ item: e }) => [z(t.$slots, "year-overlay-value", {
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
			])) : N("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 64));
	}
}), lo = (e, t, n) => {
	if (t.value && Array.isArray(t.value)) {
		if (t.value.some((t) => Q(e, t))) {
			let n = t.value.filter((t) => !Q(t, e));
			t.value = n.length ? n : null;
		} else (n && +n > t.value.length || !n) && t.value.push(e);
	} else t.value = [e];
}, uo = (e, t, n) => {
	let r = e.value ? e.value.slice() : [];
	return r.length === 2 && r[1] !== null && (r = []), r.length ? (Ni(t, r[0]) ? r.unshift(t) : r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, fo = (e, t, n, r) => {
	e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, po = (e) => {
	Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => Rr(Z(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Rr(Z(e.value), e.timezone));
}, mo = (e, t, n, r) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && r.value.partialRange) ? r.value.fixedStart && (Pi(e, t.value[0]) || Q(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (Ni(e, t.value[1]) || Q(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], ho = ({ multiCalendars: e, range: t, highlight: n, propDates: r, calendars: i, modelValue: a, props: o, filters: c, year: l, month: u, emit: d }) => {
	let f = V(() => ti(o.yearRange, o.locale, o.reverseYears)), p = W([!1]), m = V(() => (e, t) => {
		let n = Sr(Ii(/* @__PURE__ */ new Date()), {
			month: u.value(e),
			year: l.value(e)
		});
		return Ji(t ? ft(n) : pt(n), r.value.maxDate, r.value.minDate, o.preventMinMaxNavigation, t);
	}), h = () => Array.isArray(a.value) && e.value.solo && a.value[1], g = () => {
		for (let t = 0; t < e.value.count; t++) if (t === 0) i.value[t] = i.value[0];
		else if (t === e.value.count - 1 && h()) i.value[t] = {
			month: J(a.value[1]),
			year: Y(a.value[1])
		};
		else {
			let e = Sr(Z(), i.value[t - 1]);
			i.value[t] = {
				month: J(e),
				year: Y(et(e, 1))
			};
		}
	}, _ = (t) => {
		if (!t) return g();
		let n = Sr(Z(), i.value[t]);
		return i.value[0].year = Y(Ar(n, e.value.count - 1)), g();
	}, v = (e, n) => {
		let r = ot(n, e);
		return t.value.showLastInRange && r > 1 ? n : e;
	}, y = (t) => o.focusStartDate || e.value.solo ? t[0] : t[1] ? v(t[0], t[1]) : t[0], b = () => {
		if (a.value) {
			let e = Array.isArray(a.value) ? y(a.value) : a.value;
			i.value[0] = {
				month: J(e),
				year: Y(e)
			};
		}
	}, x = () => {
		b(), e.value.count && g();
	};
	E(a, (e, t) => {
		o.isTextInputDate && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && x();
	}), s(() => {
		x();
	});
	let S = (t, n) => {
		i.value[n].year = t, d("update-month-year", {
			instance: n,
			year: t,
			month: i.value[n].month
		}), e.value.count && !e.value.solo && _(n);
	}, C = V(() => (e) => mi(f.value, (t) => ({
		active: l.value(e) === t.value,
		disabled: pi(t.value, Vi(r.value.minDate), Vi(r.value.maxDate)) || c.value.years?.includes(l.value(e)),
		highlighted: la(n.value, t.value)
	}))), w = (e, t) => {
		S(e, t), D(t);
	}, T = (e, t = !1) => {
		if (!m.value(e, t)) {
			let n = t ? l.value(e) + 1 : l.value(e) - 1;
			S(n, e);
		}
	}, D = (e, t = !1, n) => {
		t || d("reset-flow"), n === void 0 ? p.value[e] = !p.value[e] : p.value[e] = n, p.value[e] ? d("overlay-toggle", {
			open: !0,
			overlay: qr.year
		}) : (d("overlay-closed"), d("overlay-toggle", {
			open: !1,
			overlay: qr.year
		}));
	};
	return {
		isDisabled: m,
		groupedYears: C,
		showYearPicker: p,
		selectYear: S,
		toggleYearPicker: D,
		handleYearSelect: w,
		handleYear: T
	};
}, go = (e, t) => {
	let { defaultedMultiCalendars: n, defaultedAriaLabels: r, defaultedTransitions: i, defaultedConfig: a, defaultedRange: o, defaultedHighlight: c, propDates: l, defaultedTz: u, defaultedFilters: d, defaultedMultiDates: f } = Wa(e), { modelValue: p, year: m, month: h, calendars: g } = xs(e, t, () => {
		e.isTextInputDate && b(Y(Z(e.startDate)), 0);
	}), _ = V(() => ni(e.formatLocale, e.locale, e.monthNameFormat)), v = W(null), { checkMinMaxRange: y } = Cs(e), { selectYear: b, groupedYears: x, showYearPicker: S, toggleYearPicker: C, handleYearSelect: w, handleYear: T, isDisabled: E } = ho({
		modelValue: p,
		multiCalendars: n,
		range: o,
		highlight: c,
		calendars: g,
		year: m,
		propDates: l,
		month: h,
		filters: d,
		props: e,
		emit: t
	});
	s(() => {
		e.startDate && (p.value && e.focusStartDate || !p.value) && b(Y(Z(e.startDate)), 0);
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
	}, ee = (e, t, n) => {
		let r = O();
		return Array.isArray(r) ? m.value(t) === r[n]?.year && e === r[n]?.month : !1;
	}, A = (e, t) => {
		if (o.value.enabled) {
			let n = O();
			if (Array.isArray(p.value) && Array.isArray(n)) {
				let n = ee(e, t, 0) || ee(e, t, 1), r = qi(Ii(Z()), e, m.value(t));
				return Fi(p.value, v.value, r) && !n;
			}
			return !1;
		}
		return !1;
	}, j = V(() => (t) => mi(_.value, (n) => ({
		active: k(t, n.value),
		disabled: pi(n.value, zi(m.value(t), l.value.minDate), Bi(m.value(t), l.value.maxDate)) || oa(l.value.disabledDates, m.value(t), n.value) || d.value.months?.includes(n.value) || !sa(l.value.allowedDates, m.value(t), n.value) || fa(e.yearRange, m.value(t)),
		isBetween: A(n.value, t),
		highlighted: ca(c.value, n.value, m.value(t))
	}))), M = (e, t) => qi(Ii(Z()), e, m.value(t)), N = (e, n) => {
		let r = p.value ? p.value : Ii(/* @__PURE__ */ new Date());
		p.value = qi(r, e, m.value(n)), t("auto-apply"), t("update-flow-step");
	}, te = (n, r) => {
		let i = M(n, r);
		o.value.fixedEnd || o.value.fixedStart ? p.value = mo(i, p, t, o) : p.value ? y(i, p.value) && (p.value = uo(p, M(n, r), t)) : p.value = [M(n, r)], Se().then(() => {
			fo(p.value, t, e.autoApply, e.modelAuto);
		});
	}, P = (e, n) => {
		lo(M(e, n), p, f.value.limit), t("auto-apply", !0);
	}, F = (e, t) => (g.value[t].month = e, I(t, g.value[t].year, e), f.value.enabled ? P(e, t) : o.value.enabled ? te(e, t) : N(e, t)), ne = (e, t) => {
		b(e, t), I(t, e, null);
	}, I = (e, n, r) => {
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
		groupedMonths: j,
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
			po({
				value: e,
				modelValue: p,
				range: o.value.enabled,
				timezone: n ? void 0 : u.value.timezone
			}), t("auto-apply");
		},
		setHoverDate: (e, t) => {
			v.value = M(e, t);
		},
		selectMonth: F,
		selectYear: ne,
		toggleYearPicker: C,
		handleYearSelect: w,
		handleYear: T,
		getModelMonthYear: O
	};
}, _o = /* @__PURE__ */ I({
	compatConfig: { MODE: 3 },
	__name: "MonthPicker",
	props: { ...Ja },
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
	setup(e, { expose: t, emit: n }) {
		let r = n, a = ys(S(), "yearMode"), o = e;
		s(() => {
			o.shadow || r("mount", null);
		});
		let { groupedMonths: c, groupedYears: l, year: d, isDisabled: f, defaultedMultiCalendars: p, defaultedConfig: m, showYearPicker: h, modelValue: g, presetDate: _, setHoverDate: v, selectMonth: y, selectYear: b, toggleYearPicker: x, handleYearSelect: C, handleYear: w, getModelMonthYear: E } = go(o, r);
		return t({
			getSidebarProps: () => ({
				modelValue: g,
				year: d,
				getModelMonthYear: E,
				selectMonth: y,
				selectYear: b,
				handleYear: w
			}),
			presetDate: _,
			toggleYearPicker: (e) => x(0, e)
		}), (e, t) => (u(), R(io, {
			"multi-calendars": B(p).count,
			collapse: e.collapse,
			stretch: "",
			"is-mobile": e.isMobile
		}, {
			default: T(({ instance: t }) => [e.$slots["top-extra"] ? z(e.$slots, "top-extra", {
				key: 0,
				value: e.internalModelValue
			}) : N("", !0), e.$slots["month-year"] ? z(e.$slots, "month-year", L(ye({ key: 1 }, {
				year: B(d),
				months: B(c)(t),
				years: B(l)(t),
				selectMonth: B(y),
				selectYear: B(b),
				instance: t
			}))) : (u(), R(no, {
				key: 2,
				items: B(c)(t),
				"arrow-navigation": e.arrowNavigation,
				"is-last": e.autoApply && !B(m).keepActionRow,
				"esc-close": e.escClose,
				height: B(m).modeHeight,
				config: e.config,
				"no-overlay-focus": !!(e.noOverlayFocus || e.textInput),
				"use-relative": "",
				type: "month",
				onSelected: (e) => B(y)(e, t),
				onHoverValue: (e) => B(v)(e, t)
			}, ge({
				header: T(() => [ce(co, ye(e.$props, {
					items: B(l)(t),
					instance: t,
					"show-year-picker": B(h)[t],
					year: B(d)(t),
					"is-disabled": (e) => B(f)(t, e),
					onHandleYear: (e) => B(w)(t, e),
					onYearSelect: (e) => B(C)(e, t),
					onToggleYearPicker: (e) => B(x)(t, e?.flow, e?.show)
				}), ge({ _: 2 }, [i(B(a), (t, n) => ({
					name: t,
					fn: T((n) => [z(e.$slots, t, L(pe(n)))])
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
				fn: T(({ item: t }) => [z(e.$slots, "month-overlay-value", {
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
}), vo = (e, t) => {
	let { modelValue: n } = xs(e, t, () => {
		e.isTextInputDate && (u.value = Y(Z(e.startDate)));
	}), r = W(null), { defaultedHighlight: i, defaultedMultiDates: a, defaultedFilters: o, defaultedRange: c, propDates: l } = Wa(e), u = W();
	s(() => {
		e.startDate && (n.value && e.focusStartDate || !n.value) && (u.value = Y(Z(e.startDate)));
	});
	let d = (e) => Array.isArray(n.value) ? n.value.some((t) => Y(t) === e) : n.value ? Y(n.value) === e : !1, f = (e) => c.value.enabled && Array.isArray(n.value) ? Fi(n.value, r.value, g(e)) : !1, p = (e) => l.value.allowedDates instanceof Map ? l.value.allowedDates.size ? l.value.allowedDates.has(`${e}`) : !1 : !0, m = (e) => l.value.disabledDates instanceof Map ? l.value.disabledDates.size ? l.value.disabledDates.has(`${e}`) : !1 : typeof l.value.disabledDates != "function" || l.value.disabledDates(Dr(ji(pt(Z())), e)), h = V(() => mi(ti(e.yearRange, e.locale, e.reverseYears), (e) => {
		let t = d(e.value);
		return {
			active: t,
			disabled: pi(e.value, Vi(l.value.minDate), Vi(l.value.maxDate)) || o.value.years.includes(e.value) || !p(e.value) || m(e.value),
			isBetween: f(e.value) && !t,
			highlighted: la(i.value, e.value)
		};
	})), g = (e) => Dr(Ii(pt(/* @__PURE__ */ new Date())), e);
	return {
		groupedYears: h,
		modelValue: n,
		focusYear: u,
		setHoverValue: (e) => {
			r.value = Dr(Ii(/* @__PURE__ */ new Date()), e);
		},
		selectYear: (r) => {
			if (t("update-month-year", {
				instance: 0,
				year: r
			}), a.value.enabled) return n.value ? Array.isArray(n.value) && ((n.value?.map((e) => Y(e))).includes(r) ? n.value = n.value.filter((e) => Y(e) !== r) : n.value.push(Dr(ji(Z()), r))) : n.value = [Dr(ji(pt(Z())), r)], t("auto-apply", !0);
			c.value.enabled ? (n.value = uo(n, g(r), t), Se().then(() => {
				fo(n.value, t, e.autoApply, e.modelAuto);
			})) : (n.value = g(r), t("auto-apply"));
		}
	};
}, yo = /* @__PURE__ */ I({
	compatConfig: { MODE: 3 },
	__name: "YearPicker",
	props: { ...Ja },
	emits: [
		"update:internal-model-value",
		"reset-flow",
		"range-start",
		"range-end",
		"auto-apply",
		"update-month-year"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, { groupedYears: a, modelValue: o, focusYear: s, selectYear: c, setHoverValue: l } = vo(i, r), { defaultedConfig: d } = Wa(i);
		return t({ getSidebarProps: () => ({
			modelValue: o,
			selectYear: c
		}) }), (e, t) => (u(), H("div", null, [e.$slots["top-extra"] ? z(e.$slots, "top-extra", {
			key: 0,
			value: e.internalModelValue
		}) : N("", !0), e.$slots["month-year"] ? z(e.$slots, "month-year", L(ye({ key: 1 }, {
			years: B(a),
			selectYear: B(c)
		}))) : (u(), R(no, {
			key: 2,
			items: B(a),
			"is-last": e.autoApply && !B(d).keepActionRow,
			height: B(d).modeHeight,
			config: e.config,
			"no-overlay-focus": !!(e.noOverlayFocus || e.textInput),
			"focus-value": B(s),
			type: "year",
			"use-relative": "",
			onSelected: B(c),
			onHoverValue: B(l)
		}, ge({ _: 2 }, [e.$slots["year-overlay-value"] ? {
			name: "item",
			fn: T(({ item: t }) => [z(e.$slots, "year-overlay-value", {
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
}), bo = {
	key: 0,
	class: "dp__time_input"
}, xo = ["data-compact", "data-collapsed"], So = [
	"data-test-id",
	"aria-label",
	"onKeydown",
	"onClick",
	"onMousedown"
], Co = [
	"aria-label",
	"disabled",
	"data-test-id",
	"onKeydown",
	"onClick"
], wo = [
	"data-test-id",
	"aria-label",
	"onKeydown",
	"onClick",
	"onMousedown"
], To = { key: 0 }, Eo = ["aria-label", "data-compact"], Do = /* @__PURE__ */ I({
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
		...Ja
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
	setup(e, { expose: t, emit: r }) {
		let a = r, c = e, { setTimePickerElements: l, setTimePickerBackRef: d } = Ca(), { defaultedAriaLabels: f, defaultedTransitions: p, defaultedFilters: m, defaultedConfig: h, defaultedRange: g, defaultedMultiCalendars: _ } = Wa(c), { transitionName: y, showTransition: b } = bs(p), S = n({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), C = W("AM"), w = W(null), E = W([]), D = W(), O = W(!1);
		s(() => {
			a("mounted");
		});
		let k = (e) => Sr(/* @__PURE__ */ new Date(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: c.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), ee = V(() => (e) => se(e, c[e]) || j(e, c[e])), A = V(() => ({
			hours: c.hours,
			minutes: c.minutes,
			seconds: c.seconds
		})), j = (e, t) => g.value.enabled && !g.value.disableTimeRangeValidation ? !c.validateTime(e, t) : !1, M = (e, t) => {
			if (g.value.enabled && !g.value.disableTimeRangeValidation) {
				let n = t ? +c[`${e}Increment`] : -+c[`${e}Increment`], r = c[e] + n;
				return !c.validateTime(e, r);
			}
			return !1;
		}, te = V(() => (e) => !fe(+c[e] + +c[`${e}Increment`], e) || M(e, !0)), F = V(() => (e) => !fe(+c[e] - c[`${e}Increment`], e) || M(e, !1)), ne = (e, t) => Be(Sr(Z(), e), t), I = (e, t) => kr(Sr(Z(), e), t), L = V(() => ({
			dp__time_col: !0,
			dp__time_col_block: !c.timePickerInline,
			dp__time_col_reg_block: !c.enableSeconds && c.is24 && !c.timePickerInline,
			dp__time_col_reg_inline: !c.enableSeconds && c.is24 && c.timePickerInline,
			dp__time_col_reg_with_button: !c.enableSeconds && !c.is24,
			dp__time_col_sec: c.enableSeconds && c.is24,
			dp__time_col_sec_with_button: c.enableSeconds && !c.is24
		})), re = V(() => c.timePickerInline && g.value.enabled && !_.value.count), ie = V(() => {
			let e = [{ type: "hours" }];
			return c.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), c.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), ae = V(() => ie.value.filter((e) => !e.separator)), oe = V(() => (e) => {
			if (e === "hours") {
				let e = be(+c.hours);
				return {
					text: e < 10 ? `0${e}` : `${e}`,
					value: e
				};
			}
			return {
				text: c[e] < 10 ? `0${c[e]}` : `${c[e]}`,
				value: c[e]
			};
		}), se = (e, t) => {
			if (!c.disabledTimesConfig) return !1;
			let n = c.disabledTimesConfig(c.order, e === "hours" ? t : void 0);
			return !n[e] || !!n[e]?.includes(t);
		}, ce = (e, t) => t !== "hours" || C.value === "AM" ? e : e + 12, le = (e) => {
			let t = c.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +c[`${e}GridIncrement`], i = e === "hours" && !c.is24 ? r : 0, a = [];
			for (let t = i; t < n; t += r) a.push({
				value: c.is24 ? t : ce(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !c.is24 && a.unshift({
				value: C.value === "PM" ? 12 : 0,
				text: "12"
			}), mi(a, (t) => ({
				active: !1,
				disabled: m.value.times[e].includes(t.value) || !fe(t.value, e) || se(e, t.value) || j(e, t.value)
			}));
		}, ue = (e) => e >= 0 ? e : 59, de = (e) => e >= 0 ? e : 23, fe = (e, t) => {
			let n = c.minTime ? k(Li(c.minTime)) : null, r = c.maxTime ? k(Li(c.maxTime)) : null, i = k(Li(A.value, t, t === "minutes" || t === "seconds" ? ue(e) : de(e)));
			return n && r ? (cn(i, r) || ln(i, r)) && (sn(i, n) || ln(i, n)) : n ? sn(i, n) || ln(i, n) : !r || cn(i, r) || ln(i, r);
		}, pe = (e) => c[`no${e[0].toUpperCase() + e.slice(1)}Overlay`], he = (e) => {
			pe(e) || (S[e] = !S[e], S[e] ? (O.value = !0, a("overlay-opened", e)) : (O.value = !1, a("overlay-closed", e)));
		}, _e = (e) => e === "hours" ? nn : e === "minutes" ? an : on, ve = () => {
			D.value && clearTimeout(D.value);
		}, ye = (e, t = !0, n) => {
			let r = t ? ne : I, i = t ? +c[`${e}Increment`] : -+c[`${e}Increment`];
			fe(+c[e] + i, e) && a(`update:${e}`, _e(e)(r({ [e]: +c[e] }, { [e]: +c[`${e}Increment`] }))), !n?.keyboard && h.value.timeArrowHoldThreshold && (D.value = setTimeout(() => {
				ye(e, t);
			}, h.value.timeArrowHoldThreshold));
		}, be = (e) => c.is24 ? e : (e >= 12 ? C.value = "PM" : C.value = "AM", ri(e)), xe = () => {
			C.value === "PM" ? (C.value = "AM", a("update:hours", c.hours - 12)) : (C.value = "PM", a("update:hours", c.hours + 12)), a("am-pm-change", C.value);
		}, Se = (e) => {
			S[e] = !0;
		}, Ce = (e, t, n) => {
			if (e && c.arrowNavigation) {
				Array.isArray(E.value[t]) ? E.value[t][n] = e : E.value[t] = [e];
				let r = E.value.reduce((e, t) => t.map((n, r) => [...e[r] || [], t[r]]), []);
				d(c.closeTimePickerBtn), w.value && (r[1] = r[1].concat(w.value)), l(r, c.order);
			}
		}, we = (e, t) => (he(e), a(`update:${e}`, t));
		return t({ openChildCmp: Se }), (e, t) => e.disabled ? N("", !0) : (u(), H("div", bo, [
			(u(!0), H(x, null, i(ie.value, (n, r) => (u(), H("div", {
				key: r,
				class: G(L.value),
				"data-compact": re.value && !e.enableSeconds,
				"data-collapsed": re.value && e.enableSeconds
			}, [n.separator ? (u(), H(x, { key: 0 }, [O.value ? N("", !0) : (u(), H(x, { key: 0 }, [P(":")], 64))], 64)) : (u(), H(x, { key: 1 }, [
				U("button", {
					ref_for: !0,
					ref: (e) => Ce(e, r, 0),
					type: "button",
					class: G({
						dp__btn: !0,
						dp__inc_dec_button: !e.timePickerInline,
						dp__inc_dec_button_inline: e.timePickerInline,
						dp__tp_inline_btn_top: e.timePickerInline,
						dp__inc_dec_button_disabled: te.value(n.type),
						"dp--hidden-el": O.value
					}),
					"data-test-id": `${n.type}-time-inc-btn-${c.order}`,
					"aria-label": B(f)?.incrementValue(n.type),
					tabindex: "0",
					onKeydown: (e) => B(wi)(e, () => ye(n.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => B(h).timeArrowHoldThreshold ? void 0 : ye(n.type, !0),
					onMousedown: (e) => B(h).timeArrowHoldThreshold ? ye(n.type, !0) : void 0,
					onMouseup: ve
				}, [c.timePickerInline ? (u(), H(x, { key: 1 }, [e.$slots["tp-inline-arrow-up"] ? z(e.$slots, "tp-inline-arrow-up", { key: 0 }) : (u(), H(x, { key: 1 }, [t[2] ||= U("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), t[3] ||= U("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)], 64))], 64)) : (u(), H(x, { key: 0 }, [e.$slots["arrow-up"] ? z(e.$slots, "arrow-up", { key: 0 }) : N("", !0), e.$slots["arrow-up"] ? N("", !0) : (u(), R(B(Ir), { key: 1 }))], 64))], 42, So),
				U("button", {
					ref_for: !0,
					ref: (e) => Ce(e, r, 1),
					type: "button",
					"aria-label": `${oe.value(n.type).text}-${B(f)?.openTpOverlay(n.type)}`,
					class: G({
						dp__time_display: !0,
						dp__time_display_block: !e.timePickerInline,
						dp__time_display_inline: e.timePickerInline,
						"dp--time-invalid": ee.value(n.type),
						"dp--time-overlay-btn": !ee.value(n.type),
						"dp--hidden-el": O.value
					}),
					disabled: pe(n.type),
					tabindex: "0",
					"data-test-id": `${n.type}-toggle-overlay-btn-${c.order}`,
					onKeydown: (e) => B(wi)(e, () => he(n.type), !0),
					onClick: (e) => he(n.type)
				}, [e.$slots[n.type] ? z(e.$slots, n.type, {
					key: 0,
					text: oe.value(n.type).text,
					value: oe.value(n.type).value
				}) : N("", !0), e.$slots[n.type] ? N("", !0) : (u(), H(x, { key: 1 }, [P(me(oe.value(n.type).text), 1)], 64))], 42, Co),
				U("button", {
					ref_for: !0,
					ref: (e) => Ce(e, r, 2),
					type: "button",
					class: G({
						dp__btn: !0,
						dp__inc_dec_button: !e.timePickerInline,
						dp__inc_dec_button_inline: e.timePickerInline,
						dp__tp_inline_btn_bottom: e.timePickerInline,
						dp__inc_dec_button_disabled: F.value(n.type),
						"dp--hidden-el": O.value
					}),
					"data-test-id": `${n.type}-time-dec-btn-${c.order}`,
					"aria-label": B(f)?.decrementValue(n.type),
					tabindex: "0",
					onKeydown: (e) => B(wi)(e, () => ye(n.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => B(h).timeArrowHoldThreshold ? void 0 : ye(n.type, !1),
					onMousedown: (e) => B(h).timeArrowHoldThreshold ? ye(n.type, !1) : void 0,
					onMouseup: ve
				}, [c.timePickerInline ? (u(), H(x, { key: 1 }, [e.$slots["tp-inline-arrow-down"] ? z(e.$slots, "tp-inline-arrow-down", { key: 0 }) : (u(), H(x, { key: 1 }, [t[4] ||= U("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), t[5] ||= U("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)], 64))], 64)) : (u(), H(x, { key: 0 }, [e.$slots["arrow-down"] ? z(e.$slots, "arrow-down", { key: 0 }) : N("", !0), e.$slots["arrow-down"] ? N("", !0) : (u(), R(B(Lr), { key: 1 }))], 64))], 42, wo)
			], 64))], 10, xo))), 128)),
			e.is24 ? N("", !0) : (u(), H("div", To, [e.$slots["am-pm-button"] ? z(e.$slots, "am-pm-button", {
				key: 0,
				toggle: xe,
				value: C.value
			}) : N("", !0), e.$slots["am-pm-button"] ? N("", !0) : (u(), H("button", {
				key: 1,
				ref_key: "amPmButton",
				ref: w,
				type: "button",
				class: "dp__pm_am_button",
				role: "button",
				"aria-label": B(f)?.amPmButton,
				tabindex: "0",
				"data-compact": re.value,
				onClick: xe,
				onKeydown: t[0] ||= (e) => B(wi)(e, () => xe(), !0)
			}, me(C.value), 41, Eo))])),
			(u(!0), H(x, null, i(ae.value, (n, r) => (u(), R(o, {
				key: r,
				name: B(y)(S[n.type]),
				css: B(b)
			}, {
				default: T(() => [S[n.type] ? (u(), R(no, {
					key: 0,
					items: le(n.type),
					"is-last": e.autoApply && !B(h).keepActionRow,
					"esc-close": e.escClose,
					type: n.type,
					"text-input": e.textInput,
					config: e.config,
					"arrow-navigation": e.arrowNavigation,
					"aria-labels": e.ariaLabels,
					"overlay-label": B(f).timeOverlay?.(n.type),
					onSelected: (e) => we(n.type, e),
					onToggle: (e) => he(n.type),
					onResetFlow: t[1] ||= (t) => e.$emit("reset-flow")
				}, ge({
					"button-icon": T(() => [e.$slots["clock-icon"] ? z(e.$slots, "clock-icon", { key: 0 }) : N("", !0), e.$slots["clock-icon"] ? N("", !0) : (u(), R(v(e.timePickerInline ? B(jr) : B(Fr)), { key: 1 }))]),
					_: 2
				}, [e.$slots[`${n.type}-overlay-value`] ? {
					name: "item",
					fn: T(({ item: t }) => [z(e.$slots, `${n.type}-overlay-value`, {
						text: t.text,
						value: t.value
					})]),
					key: "0"
				} : void 0, e.$slots[`${n.type}-overlay-header`] ? {
					name: "header",
					fn: T(() => [z(e.$slots, `${n.type}-overlay-header`, { toggle: () => he(n.type) })]),
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
				])) : N("", !0)]),
				_: 2
			}, 1032, ["name", "css"]))), 128))
		]));
	}
}), Oo = ["data-dp-mobile"], ko = ["aria-label", "tabindex"], Ao = [
	"role",
	"aria-label",
	"tabindex"
], jo = ["aria-label"], Mo = /* @__PURE__ */ I({
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
		...Ja
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
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, { buildMatrix: c, setTimePicker: l } = Ca(), d = S(), { defaultedTransitions: f, defaultedAriaLabels: p, defaultedTextInput: m, defaultedConfig: g, defaultedRange: _ } = Wa(a), { transitionName: v, showTransition: y } = bs(f), { hideNavigationButtons: b } = ws(), C = W(null), w = W(null), E = W([]), O = W(null), k = W(!1);
		s(() => {
			r("mount"), !a.timePicker && a.arrowNavigation ? c([ii(C.value)], "time") : l(!0, a.timePicker);
		});
		let ee = V(() => _.value.enabled && a.modelAuto ? oi(a.internalModelValue) : !0), A = W(!1), j = (e) => ({
			hours: Array.isArray(a.hours) ? a.hours[e] : a.hours,
			minutes: Array.isArray(a.minutes) ? a.minutes[e] : a.minutes,
			seconds: Array.isArray(a.seconds) ? a.seconds[e] : a.seconds
		}), M = V(() => {
			let e = [];
			if (_.value.enabled) for (let t = 0; t < 2; t++) e.push(j(t));
			else e.push(j(0));
			return e;
		}), te = (e, t = !1, n = "") => {
			t || r("reset-flow"), A.value = e, r(e ? "overlay-opened" : "overlay-closed", qr.time), a.arrowNavigation && l(e), Se(() => {
				n !== "" && E.value[0] && E.value[0].openChildCmp(n);
			});
		}, P = V(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__button_bottom: a.autoApply && !g.value.keepActionRow
		})), F = ys(d, "timePicker"), ne = (e, t, n) => _.value.enabled ? t === 0 ? [e, M.value[1][n]] : [M.value[0][n], e] : e, I = (e) => {
			r("update:hours", e);
		}, L = (e) => {
			r("update:minutes", e);
		}, re = (e) => {
			r("update:seconds", e);
		}, ie = () => {
			if (O.value && !m.value.enabled && !a.noOverlayFocus) {
				let e = di(O.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, oe = (e) => {
			k.value = !1, r("overlay-closed", e);
		}, se = (e) => {
			k.value = !0, r("overlay-opened", e);
		};
		return t({ toggleTimePicker: te }), (t, n) => (u(), H("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": t.isMobile
		}, [!t.timePicker && !t.timePickerInline ? D((u(), H("button", {
			key: 0,
			ref_key: "openTimePickerBtn",
			ref: C,
			type: "button",
			class: G({
				...P.value,
				"dp--hidden-el": A.value
			}),
			"aria-label": B(p)?.openTimePicker,
			tabindex: t.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: n[0] ||= (e) => B(wi)(e, () => te(!0)),
			onClick: n[1] ||= (e) => te(!0)
		}, [t.$slots["clock-icon"] ? z(t.$slots, "clock-icon", { key: 0 }) : N("", !0), t.$slots["clock-icon"] ? N("", !0) : (u(), R(B(Fr), { key: 1 }))], 42, ko)), [[h, !B(b)(t.hideNavigation, "time")]]) : N("", !0), ce(o, {
			name: B(v)(A.value),
			css: B(y) && !t.timePickerInline
		}, {
			default: T(() => [A.value || t.timePicker || t.timePickerInline ? (u(), H("div", {
				key: 0,
				ref_key: "overlayRef",
				ref: O,
				role: t.timePickerInline ? void 0 : "dialog",
				class: G({
					dp__overlay: !t.timePickerInline,
					"dp--overlay-absolute": !a.timePicker && !t.timePickerInline,
					"dp--overlay-relative": a.timePicker
				}),
				style: ae(t.timePicker ? { height: `${B(g).modeHeight}px` } : void 0),
				"aria-label": B(p)?.timePicker,
				tabindex: t.timePickerInline ? void 0 : 0
			}, [U("div", {
				class: G(t.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
				style: { display: "flex" }
			}, [
				t.$slots["time-picker-overlay"] ? z(t.$slots, "time-picker-overlay", {
					key: 0,
					hours: e.hours,
					minutes: e.minutes,
					seconds: e.seconds,
					setHours: I,
					setMinutes: L,
					setSeconds: re
				}) : N("", !0),
				t.$slots["time-picker-overlay"] ? N("", !0) : (u(), H("div", {
					key: 1,
					class: G(t.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
				}, [(u(!0), H(x, null, i(M.value, (r, a) => D((u(), R(Do, ye({ key: a }, { ref_for: !0 }, {
					...t.$props,
					order: a,
					hours: r.hours,
					minutes: r.minutes,
					seconds: r.seconds,
					closeTimePickerBtn: w.value,
					disabledTimesConfig: e.disabledTimesConfig,
					disabled: a === 0 ? B(_).fixedStart : B(_).fixedEnd
				}, {
					ref_for: !0,
					ref_key: "timeInputRefs",
					ref: E,
					"validate-time": (t, n) => e.validateTime(t, ne(n, a, t)),
					"onUpdate:hours": (e) => I(ne(e, a, "hours")),
					"onUpdate:minutes": (e) => L(ne(e, a, "minutes")),
					"onUpdate:seconds": (e) => re(ne(e, a, "seconds")),
					onMounted: ie,
					onOverlayClosed: oe,
					onOverlayOpened: se,
					onAmPmChange: n[2] ||= (e) => t.$emit("am-pm-change", e)
				}), ge({ _: 2 }, [i(B(F), (e, n) => ({
					name: e,
					fn: T((n) => [z(t.$slots, e, ye({ ref_for: !0 }, n))])
				}))]), 1040, [
					"validate-time",
					"onUpdate:hours",
					"onUpdate:minutes",
					"onUpdate:seconds"
				])), [[h, a === 0 || ee.value]])), 128))], 2)),
				!t.timePicker && !t.timePickerInline ? D((u(), H("button", {
					key: 2,
					ref_key: "closeTimePickerBtn",
					ref: w,
					type: "button",
					class: G({
						...P.value,
						"dp--hidden-el": k.value
					}),
					"aria-label": B(p)?.closeTimePicker,
					tabindex: "0",
					onKeydown: n[3] ||= (e) => B(wi)(e, () => te(!1)),
					onClick: n[4] ||= (e) => te(!1)
				}, [t.$slots["calendar-icon"] ? z(t.$slots, "calendar-icon", { key: 0 }) : N("", !0), t.$slots["calendar-icon"] ? N("", !0) : (u(), R(B(jr), { key: 1 }))], 42, jo)), [[h, !B(b)(t.hideNavigation, "time")]]) : N("", !0)
			], 2)], 14, Ao)) : N("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, Oo));
	}
}), No = (e, t, n, r) => {
	let { defaultedRange: i } = Wa(e), a = (e, n) => Array.isArray(t[e]) ? t[e][n] : t[e], o = (n) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[n] : t.seconds : 0, s = (e, n) => e ? n === void 0 ? Mi(e, t.hours, t.minutes, o()) : Mi(e, a("hours", n), a("minutes", n), o(n)) : Er(Z(), o(n)), c = (e, n) => {
		t[e] = n;
	}, l = V(() => e.modelAuto && i.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : i.value.enabled), u = (e, r) => {
		let a = Object.fromEntries(Object.keys(t).map((n) => n === e ? [n, r] : [n, t[n]].slice()));
		if (l.value && !i.value.disableTimeRangeValidation) {
			let e = (e) => n.value ? Mi(n.value[e], a.hours[e], a.minutes[e], a.seconds[e]) : null, t = (e) => wr(n.value[e], 0);
			return !(Q(e(0), e(1)) && (sn(e(0), t(1)) || cn(e(1), t(0))));
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
		disabledTimesConfig: V(() => (t, n) => {
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
}, Po = (e, t) => {
	let { modelValue: n, time: r } = xs(e, t, () => {
		e.isTextInputDate && b();
	}), { defaultedStartTime: i, defaultedRange: a, defaultedTz: o } = Wa(e), { updateTimeValues: c, getSetDateTime: l, setTime: u, assignStartTime: d, disabledTimesConfig: f, validateTime: p } = No(e, r, n, m);
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
				return [Sr(Z(), t), Sr(Z(), n)];
			}
			let t = h(e.startTime);
			return Sr(Z(), t);
		}
		return a.value.enabled ? [null, null] : null;
	}, _ = () => {
		if (a.value.enabled) {
			let [e, t] = g();
			n.value = [Rr(l(e, 0), o.value.timezone), Rr(l(t, 1), o.value.timezone)];
		} else n.value = Rr(l(g()), o.value.timezone);
	}, v = (e) => Array.isArray(e) ? [Ri(Z(e[0])), Ri(Z(e[1]))] : [Ri(e ?? Z())], y = (t, n, r) => {
		u("hours", t), u("minutes", n), u("seconds", e.enableSeconds ? r : 0);
	}, b = () => {
		let [e, t] = v(n.value);
		return a.value.enabled ? y([e.hours, t.hours], [e.minutes, t.minutes], [e.seconds, t.seconds]) : y(e.hours, e.minutes, e.seconds);
	};
	s(() => {
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
			c(e, t, n, x);
		},
		validateTime: p
	};
}, Fo = /* @__PURE__ */ I({
	compatConfig: { MODE: 3 },
	__name: "TimePickerSolo",
	props: { ...Ja },
	emits: [
		"update:internal-model-value",
		"time-update",
		"am-pm-change",
		"mount",
		"reset-flow",
		"update-flow-step",
		"overlay-toggle"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, o = ys(S(), "timePicker"), c = W(null), { time: l, modelValue: d, disabledTimesConfig: f, updateTime: p, validateTime: m } = Po(a, r);
		return s(() => {
			a.shadow || r("mount", null);
		}), t({
			getSidebarProps: () => ({
				modelValue: d,
				time: l,
				updateTime: p
			}),
			toggleTimePicker: (e, t = !1, n = "") => {
				c.value?.toggleTimePicker(e, t, n);
			}
		}), (e, t) => (u(), R(io, {
			"multi-calendars": 0,
			stretch: "",
			"is-mobile": e.isMobile
		}, {
			default: T(() => [ce(Mo, ye({
				ref_key: "tpRef",
				ref: c
			}, e.$props, {
				hours: B(l).hours,
				minutes: B(l).minutes,
				seconds: B(l).seconds,
				"internal-model-value": e.internalModelValue,
				"disabled-times-config": B(f),
				"validate-time": B(m),
				"onUpdate:hours": t[0] ||= (e) => B(p)(e),
				"onUpdate:minutes": t[1] ||= (e) => B(p)(e, !1),
				"onUpdate:seconds": t[2] ||= (e) => B(p)(e, !1, !0),
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
			}), ge({ _: 2 }, [i(B(o), (t, n) => ({
				name: t,
				fn: T((n) => [z(e.$slots, t, L(pe(n)))])
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
}), Io = { class: "dp--header-wrap" }, Lo = {
	key: 0,
	class: "dp__month_year_wrap"
}, Ro = { key: 0 }, zo = { class: "dp__month_year_wrap" }, Bo = [
	"data-dp-element",
	"aria-label",
	"data-test-id",
	"onClick",
	"onKeydown"
], Vo = /* @__PURE__ */ I({
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
		...Ja
	},
	emits: [
		"update-month-year",
		"mount",
		"reset-flow",
		"overlay-closed",
		"overlay-opened"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, { defaultedTransitions: c, defaultedAriaLabels: l, defaultedMultiCalendars: d, defaultedFilters: f, defaultedConfig: p, defaultedHighlight: m, propDates: h, defaultedUI: g } = Wa(a), { transitionName: _, showTransition: y } = bs(c), { buildMatrix: b } = Ca(), { handleMonthYearChange: S, isDisabled: C, updateMonthYear: w } = Ka(a, r), { showLeftIcon: E, showRightIcon: D } = ws(), O = W(!1), k = W(!1), ee = W(!1), A = W([
			null,
			null,
			null,
			null
		]);
		s(() => {
			r("mount");
		});
		let j = (e) => ({
			get: () => a[e],
			set: (t) => {
				let n = e === Wr.month ? Wr.year : Wr.month;
				r("update-month-year", {
					[e]: t,
					[n]: a[n]
				}), e === Wr.month ? ae(!0) : oe(!0);
			}
		}), M = V(j(Wr.month)), te = V(j(Wr.year)), F = V(() => (e) => ({
			month: a.month,
			year: a.year,
			items: e === Wr.month ? a.months : a.years,
			instance: a.instance,
			updateMonthYear: w,
			toggle: e === Wr.month ? ae : oe
		})), ne = V(() => a.months.find((e) => e.value === a.month) || {
			text: "",
			value: 0
		}), I = V(() => mi(a.months, (e) => ({
			active: a.month === e.value,
			disabled: pi(e.value, zi(a.year, h.value.minDate), Bi(a.year, h.value.maxDate)) || f.value.months.includes(e.value),
			highlighted: ca(m.value, e.value, a.year)
		}))), re = V(() => mi(a.years, (e) => ({
			active: a.year === e.value,
			disabled: pi(e.value, Vi(h.value.minDate), Vi(h.value.maxDate)) || f.value.years.includes(e.value),
			highlighted: la(m.value, e.value)
		}))), ie = (e, t, n) => {
			e.value = n === void 0 ? !e.value : n, e.value ? (ee.value = !0, r("overlay-opened", t)) : (ee.value = !1, r("overlay-closed", t));
		}, ae = (e = !1, t) => {
			se(e), ie(O, qr.month, t);
		}, oe = (e = !1, t) => {
			se(e), ie(k, qr.year, t);
		}, se = (e) => {
			e || r("reset-flow");
		}, le = (e, t) => {
			a.arrowNavigation && (A.value[t] = ii(e), b(A.value, "monthYear"));
		}, ue = V(() => [{
			type: Wr.month,
			index: 1,
			toggle: ae,
			modelValue: M.value,
			updateModelValue: (e) => M.value = e,
			text: ne.value.text,
			showSelectionGrid: O.value,
			items: I.value,
			ariaLabel: l.value?.openMonthsOverlay,
			overlayLabel: l.value.monthPicker?.(!0) ?? void 0
		}, {
			type: Wr.year,
			index: 2,
			toggle: oe,
			modelValue: te.value,
			updateModelValue: (e) => te.value = e,
			text: yi(a.year, a.locale),
			showSelectionGrid: k.value,
			items: re.value,
			ariaLabel: l.value?.openYearsOverlay,
			overlayLabel: l.value.yearPicker?.(!0) ?? void 0
		}]), de = V(() => a.disableYearSelect ? [ue.value[0]] : a.yearFirst ? [...ue.value].reverse() : ue.value);
		return t({
			toggleMonthPicker: ae,
			toggleYearPicker: oe,
			handleMonthYearChange: S
		}), (t, n) => (u(), H("div", Io, [t.$slots["month-year"] ? (u(), H("div", Lo, [z(t.$slots, "month-year", L(pe({
			month: e.month,
			year: e.year,
			months: e.months,
			years: e.years,
			updateMonthYear: B(w),
			handleMonthYearChange: B(S),
			instance: e.instance,
			isDisabled: B(C)
		})))])) : (u(), H(x, { key: 1 }, [t.$slots["top-extra"] ? (u(), H("div", Ro, [z(t.$slots, "top-extra", { value: t.internalModelValue })])) : N("", !0), U("div", zo, [
			B(E)(B(d), e.instance) && !t.vertical ? (u(), R(oo, {
				key: 0,
				"aria-label": B(l)?.prevMonth,
				disabled: B(C)(!1),
				class: G(B(g)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: n[0] ||= (e) => B(S)(!1, !0),
				onSetRef: n[1] ||= (e) => le(e, 0)
			}, {
				default: T(() => [t.$slots["arrow-left"] ? z(t.$slots, "arrow-left", { key: 0 }) : N("", !0), t.$slots["arrow-left"] ? N("", !0) : (u(), R(B(Nr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : N("", !0),
			U("div", { class: G(["dp__month_year_wrap", { dp__year_disable_select: t.disableYearSelect }]) }, [(u(!0), H(x, null, i(de.value, (n, r) => (u(), H(x, { key: n.type }, [U("button", {
				ref_for: !0,
				ref: (e) => le(e, r + 1),
				type: "button",
				"data-dp-element": `overlay-${n.type}`,
				class: G(["dp__btn dp__month_year_select", { "dp--hidden-el": ee.value }]),
				"aria-label": `${n.text}-${n.ariaLabel}`,
				"data-test-id": `${n.type}-toggle-overlay-${e.instance}`,
				onClick: n.toggle,
				onKeydown: (e) => B(wi)(e, () => n.toggle(), !0)
			}, [t.$slots[n.type] ? z(t.$slots, n.type, {
				key: 0,
				text: n.text,
				value: a[n.type]
			}) : N("", !0), t.$slots[n.type] ? N("", !0) : (u(), H(x, { key: 1 }, [P(me(n.text), 1)], 64))], 42, Bo), ce(o, {
				name: B(_)(n.showSelectionGrid),
				css: B(y)
			}, {
				default: T(() => [n.showSelectionGrid ? (u(), R(no, {
					key: 0,
					items: n.items,
					"arrow-navigation": t.arrowNavigation,
					"hide-navigation": t.hideNavigation,
					"is-last": t.autoApply && !B(p).keepActionRow,
					"skip-button-ref": !1,
					config: t.config,
					type: n.type,
					"header-refs": [],
					"esc-close": t.escClose,
					"menu-wrap-ref": t.menuWrapRef,
					"text-input": t.textInput,
					"aria-labels": t.ariaLabels,
					"overlay-label": n.overlayLabel,
					onSelected: n.updateModelValue,
					onToggle: n.toggle
				}, ge({
					"button-icon": T(() => [t.$slots["calendar-icon"] ? z(t.$slots, "calendar-icon", { key: 0 }) : N("", !0), t.$slots["calendar-icon"] ? N("", !0) : (u(), R(B(jr), { key: 1 }))]),
					_: 2
				}, [
					t.$slots[`${n.type}-overlay-value`] ? {
						name: "item",
						fn: T(({ item: e }) => [z(t.$slots, `${n.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					t.$slots[`${n.type}-overlay`] ? {
						name: "overlay",
						fn: T(() => [z(t.$slots, `${n.type}-overlay`, ye({ ref_for: !0 }, F.value(n.type)))]),
						key: "1"
					} : void 0,
					t.$slots[`${n.type}-overlay-header`] ? {
						name: "header",
						fn: T(() => [z(t.$slots, `${n.type}-overlay-header`, { toggle: n.toggle })]),
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
				])) : N("", !0)]),
				_: 2
			}, 1032, ["name", "css"])], 64))), 128))], 2),
			B(E)(B(d), e.instance) && t.vertical ? (u(), R(oo, {
				key: 1,
				"aria-label": B(l)?.prevMonth,
				"el-name": "action-prev",
				disabled: B(C)(!1),
				class: G(B(g)?.navBtnPrev),
				onActivate: n[2] ||= (e) => B(S)(!1, !0)
			}, {
				default: T(() => [t.$slots["arrow-up"] ? z(t.$slots, "arrow-up", { key: 0 }) : N("", !0), t.$slots["arrow-up"] ? N("", !0) : (u(), R(B(Ir), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : N("", !0),
			B(D)(B(d), e.instance) ? (u(), R(oo, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: B(C)(!0),
				"aria-label": B(l)?.nextMonth,
				class: G(B(g)?.navBtnNext),
				onActivate: n[3] ||= (e) => B(S)(!0, !0),
				onSetRef: n[4] ||= (e) => le(e, t.disableYearSelect ? 2 : 3)
			}, {
				default: T(() => [t.$slots[t.vertical ? "arrow-down" : "arrow-right"] ? z(t.$slots, t.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : N("", !0), t.$slots[t.vertical ? "arrow-down" : "arrow-right"] ? N("", !0) : (u(), R(v(t.vertical ? B(Lr) : B(Pr)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"class"
			])) : N("", !0)
		])], 64))]));
	}
}), Ho = {
	class: "dp__calendar_header",
	role: "row"
}, Uo = {
	key: 0,
	class: "dp__calendar_header_item",
	role: "gridcell"
}, Wo = ["aria-label"], Go = {
	key: 0,
	class: "dp__calendar_item dp__week_num",
	role: "gridcell"
}, Ko = { class: "dp__cell_inner" }, qo = [
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
], Jo = /* @__PURE__ */ I({
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
		...Ja
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
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, { buildMultiLevelMatrix: c } = Ca(), { defaultedTransitions: l, defaultedConfig: d, defaultedAriaLabels: f, defaultedMultiCalendars: p, defaultedWeekNumbers: m, defaultedMultiDates: h, defaultedUI: g } = Wa(a), _ = W(null), v = W({
			bottom: "",
			left: "",
			transform: ""
		}), y = W([]), b = W(null), S = W(!0), C = W(""), w = W({
			startX: 0,
			endX: 0,
			startY: 0,
			endY: 0
		}), E = W([]), D = W({ left: "50%" }), O = W(!1), k = V(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), A = V(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : ei(a.formatLocale, a.locale, +a.weekStart));
		s(() => {
			r("mount", {
				cmp: "calendar",
				refs: y
			}), d.value.noSwipe || b.value && (b.value.addEventListener("touchstart", se, { passive: !1 }), b.value.addEventListener("touchend", le, { passive: !1 }), b.value.addEventListener("touchmove", ue, { passive: !1 })), a.monthChangeOnScroll && b.value && b.value.addEventListener("wheel", pe, { passive: !1 });
		}), be(() => {
			d.value.noSwipe || b.value && (b.value.removeEventListener("touchstart", se), b.value.removeEventListener("touchend", le), b.value.removeEventListener("touchmove", ue)), a.monthChangeOnScroll && b.value && b.value.removeEventListener("wheel", pe);
		});
		let j = (e) => e ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", M = (e, t) => {
			if (a.transitions) {
				let n = ji(qi(Z(), a.month, a.year));
				C.value = Pi(ji(qi(Z(), e, t)), n) ? l.value[j(!0)] : l.value[j(!1)], S.value = !1, Se(() => {
					S.value = !0;
				});
			}
		}, te = V(() => ({ ...g.value.calendar ?? {} })), F = V(() => (e) => {
			let t = ai(e);
			return {
				dp__marker_dot: t.type === "dot",
				dp__marker_line: t.type === "line"
			};
		}), ne = V(() => (e) => Q(e, _.value)), I = V(() => ({
			dp__calendar: !0,
			dp__calendar_next: p.value.count > 0 && a.instance !== 0
		})), L = V(() => (e) => !a.hideOffsetDates || e.current), re = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			_.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await Se(), E.value[0]) {
				let { left: e, width: t } = E.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, D.value.left = `${n / 2}px`), window.innerWidth < e + t && (i = { right: "0" }, a = 0, D.value.left = `${t - n / 2}px`);
			}
			v.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, ie = async (e, t, n) => {
			let i = ii(y.value[t][n]);
			i && (e.marker?.customPosition && e.marker?.tooltip?.length ? v.value = e.marker.customPosition(i) : await re(i, e), r("tooltip-open", e.marker));
		}, oe = async (e, t, n) => {
			if (O.value && h.value.enabled && h.value.dragSelect) return r("select-date", e);
			if (r("set-hover-date", e), e.marker?.tooltip?.length) {
				if (a.hideOffsetDates && !e.current) return;
				await ie(e, t, n);
			}
		}, R = (e) => {
			_.value && (_.value = null, v.value = JSON.parse(JSON.stringify({
				bottom: "",
				left: "",
				transform: ""
			})), r("tooltip-close", e.marker));
		}, se = (e) => {
			w.value.startX = e.changedTouches[0].screenX, w.value.startY = e.changedTouches[0].screenY;
		}, le = (e) => {
			w.value.endX = e.changedTouches[0].screenX, w.value.endY = e.changedTouches[0].screenY, de();
		}, ue = (e) => {
			a.vertical && !a.inline && e.preventDefault();
		}, de = () => {
			let e = a.vertical ? "Y" : "X";
			Math.abs(w.value[`start${e}`] - w.value[`end${e}`]) > 10 && r("handle-swipe", w.value[`start${e}`] > w.value[`end${e}`] ? "right" : "left");
		}, fe = (e, t, n) => {
			e && (Array.isArray(y.value[t]) ? y.value[t][n] = e : y.value[t] = [e]), a.arrowNavigation && c(y.value, "calendar");
		}, pe = (e) => {
			a.monthChangeOnScroll && (e.preventDefault(), r("handle-scroll", e));
		}, he = (e) => m.value.type === "local" ? Ot(e.value, { weekStartsOn: +a.weekStart }) : m.value.type === "iso" ? Tt(e.value) : typeof m.value.type == "function" ? m.value.type(e.value) : "", ge = (e) => {
			let t = e[0];
			return m.value.hideOnOffsetDates ? e.some((e) => e.current) ? he(t) : "" : he(t);
		}, _e = (e, t, n = !0) => {
			!n && Ti() || (!h.value.enabled || d.value.allowPreventDefault) && (hi(e, d.value), r("select-date", t));
		}, ve = (e) => {
			hi(e, d.value);
		}, ye = (e) => {
			h.value.enabled && h.value.dragSelect ? (O.value = !0, r("select-date", e)) : h.value.enabled && r("select-date", e);
		};
		return t({ triggerTransition: M }), (e, t) => (u(), H("div", { class: G(I.value) }, [U("div", {
			ref_key: "calendarWrapRef",
			ref: b,
			class: G(te.value),
			role: "grid"
		}, [
			U("div", Ho, [e.weekNumbers ? (u(), H("div", Uo, me(e.weekNumName), 1)) : N("", !0), (u(!0), H(x, null, i(A.value, (t, n) => (u(), H("div", {
				key: n,
				class: "dp__calendar_header_item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": B(f)?.weekDay?.(n)
			}, [e.$slots["calendar-header"] ? z(e.$slots, "calendar-header", {
				key: 0,
				day: t,
				index: n
			}) : N("", !0), e.$slots["calendar-header"] ? N("", !0) : (u(), H(x, { key: 1 }, [P(me(t), 1)], 64))], 8, Wo))), 128))]),
			t[2] ||= U("div", { class: "dp__calendar_header_separator" }, null, -1),
			ce(o, {
				name: C.value,
				css: !!e.transitions
			}, {
				default: T(() => [S.value ? (u(), H("div", {
					key: 0,
					class: "dp__calendar",
					role: "rowgroup",
					onMouseleave: t[1] ||= (e) => O.value = !1
				}, [(u(!0), H(x, null, i(k.value, (n, r) => (u(), H("div", {
					key: r,
					class: "dp__calendar_row",
					role: "row"
				}, [e.weekNumbers ? (u(), H("div", Go, [U("div", Ko, me(ge(n.days)), 1)])) : N("", !0), (u(!0), H(x, null, i(n.days, (n, a) => (u(), H("div", {
					id: B(ua)(n.value),
					ref_for: !0,
					ref: (e) => fe(e, r, a),
					key: a + r,
					role: "gridcell",
					class: "dp__calendar_item",
					"aria-selected": (n.classData.dp__active_date || n.classData.dp__range_start || n.classData.dp__range_end) ?? void 0,
					"aria-disabled": n.classData.dp__cell_disabled || void 0,
					"aria-label": B(f)?.day?.(n),
					tabindex: !n.current && e.hideOffsetDates ? void 0 : 0,
					"data-test-id": B(ua)(n.value),
					onClick: ee((e) => _e(e, n), ["prevent"]),
					onTouchend: (e) => _e(e, n, !1),
					onKeydown: (t) => B(wi)(t, () => e.$emit("select-date", n)),
					onMouseenter: (e) => oe(n, r, a),
					onMouseleave: (e) => R(n),
					onMousedown: (e) => ye(n),
					onMouseup: t[0] ||= (e) => O.value = !1
				}, [U("div", { class: G(["dp__cell_inner", n.classData]) }, [
					e.$slots.day && L.value(n) ? z(e.$slots, "day", {
						key: 0,
						day: +n.text,
						date: n.value
					}) : N("", !0),
					e.$slots.day ? N("", !0) : (u(), H(x, { key: 1 }, [P(me(n.text), 1)], 64)),
					n.marker && L.value(n) ? (u(), H(x, { key: 2 }, [e.$slots.marker ? z(e.$slots, "marker", {
						key: 0,
						marker: n.marker,
						day: +n.text,
						date: n.value
					}) : (u(), H("div", {
						key: 1,
						class: G(F.value(n.marker)),
						style: ae(n.marker.color ? { backgroundColor: n.marker.color } : {})
					}, null, 6))], 64)) : N("", !0),
					ne.value(n.value) ? (u(), H("div", {
						key: 3,
						ref_for: !0,
						ref_key: "activeTooltip",
						ref: E,
						class: "dp__marker_tooltip",
						style: ae(v.value)
					}, [n.marker?.tooltip ? (u(), H("div", {
						key: 0,
						class: "dp__tooltip_content",
						onClick: ve
					}, [(u(!0), H(x, null, i(n.marker.tooltip, (t, r) => (u(), H("div", {
						key: r,
						class: "dp__tooltip_text"
					}, [e.$slots["marker-tooltip"] ? z(e.$slots, "marker-tooltip", {
						key: 0,
						tooltip: t,
						day: n.value
					}) : N("", !0), e.$slots["marker-tooltip"] ? N("", !0) : (u(), H(x, { key: 1 }, [U("div", {
						class: "dp__tooltip_mark",
						style: ae(t.color ? { backgroundColor: t.color } : {})
					}, null, 4), U("div", null, me(t.text), 1)], 64))]))), 128)), U("div", {
						class: "dp__arrow_bottom_tp",
						style: ae(D.value)
					}, null, 4)])) : N("", !0)], 4)) : N("", !0)
				], 2)], 40, qo))), 128))]))), 128))], 32)) : N("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 2));
	}
}), Yo = (e) => Array.isArray(e), Xo = (e, t, n, r) => {
	let i = W([]), a = W(/* @__PURE__ */ new Date()), o = W(), { modelValue: c, calendars: l, time: u, today: d } = xs(e, t, () => F(e.isTextInputDate)), { defaultedMultiCalendars: f, defaultedStartTime: p, defaultedRange: m, defaultedConfig: h, defaultedTz: g, propDates: _, defaultedMultiDates: v } = Wa(e), { validateMonthYearInRange: y, isDisabled: b, isDateRangeAllowed: x, checkMinMaxRange: S } = Cs(e), { updateTimeValues: C, getSetDateTime: w, setTime: T, assignStartTime: E, validateTime: D, disabledTimesConfig: O } = No(e, u, c, r), k = V(() => (e) => l.value[e] ? l.value[e].month : 0), ee = V(() => (e) => l.value[e] ? l.value[e].year : 0), A = (e) => !h.value.keepViewOnOffsetClick || e ? !0 : !o.value, j = (e, t, n, r = !1) => {
		A(r) && (l.value[e] || (l.value[e] = {
			month: 0,
			year: 0
		}), l.value[e].month = ui(t) ? l.value[e]?.month : t, l.value[e].year = ui(n) ? l.value[e]?.year : n);
	}, M = () => {
		e.autoApply && t("select-date");
	}, N = () => {
		p.value && E(p.value);
	};
	s(() => {
		e.shadow || (c.value || (ce(), N()), F(!0), e.focusStartDate && e.startDate && ce());
	});
	let te = V(() => e.flow?.length && !e.partialFlow ? e.flowStep === e.flow.length : !0), P = () => {
		e.autoApply && te.value && t("auto-apply", e.partialFlow ? e.flowStep !== e.flow.length : !1);
	}, F = (t = !1) => {
		if (c.value) return Array.isArray(c.value) ? (i.value = c.value, oe(t)) : L(c.value, t);
		if (f.value.count && t && !e.startDate) return I(Z(), t);
	}, ne = () => Array.isArray(c.value) && m.value.enabled ? J(c.value[0]) === J(c.value[1] ?? c.value[0]) : !1, I = (e = /* @__PURE__ */ new Date(), t = !1) => {
		if ((!f.value.count || !f.value.static || t) && j(0, J(e), Y(e)), f.value.count && (!c.value || ne() || !f.value.solo) && (!f.value.solo || t)) for (let e = 1; e < f.value.count; e++) {
			let t = Be(Sr(Z(), {
				month: k.value(e - 1),
				year: ee.value(e - 1)
			}), { months: 1 });
			l.value[e] = {
				month: J(t),
				year: Y(t)
			};
		}
	}, L = (e, t) => {
		I(e), T("hours", nn(e)), T("minutes", an(e)), T("seconds", on(e)), f.value.count && t && se();
	}, re = (e) => {
		if (f.value.count) {
			if (f.value.solo) return 0;
			let t = J(e[0]), n = J(e[1]);
			return Math.abs(n - t) < f.value.count ? 0 : 1;
		}
		return 1;
	}, ie = (e, t) => {
		e[1] && m.value.showLastInRange ? I(e[re(e)], t) : I(e[0], t);
		let n = (t, n) => [t(e[0]), e[1] ? t(e[1]) : u[n][1]];
		T("hours", n(nn, "hours")), T("minutes", n(an, "minutes")), T("seconds", n(on, "seconds"));
	}, ae = (t, n) => {
		if ((m.value.enabled || e.weekPicker) && !v.value.enabled) return ie(t, n);
		if (v.value.enabled && n) {
			let e = t[t.length - 1];
			return L(e, n);
		}
	}, oe = (e) => {
		let t = c.value;
		ae(t, e), f.value.count && f.value.solo && se();
	}, R = (r, i) => {
		let a = Sr(Z(), {
			month: k.value(i),
			year: ee.value(i)
		}), o = r < 0 ? ze(a, 1) : Or(a, 1);
		y(J(o), Y(o), r < 0, e.preventMinMaxNavigation) && (j(i, J(o), Y(o)), t("update-month-year", {
			instance: i,
			month: J(o),
			year: Y(o)
		}), f.value.count && !f.value.solo && z(i), n());
	}, z = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = Or(Sr(Z(), {
				month: k.value(t + 1),
				year: ee.value(t + 1)
			}), 1);
			j(t, J(e), Y(e));
		}
		for (let t = e + 1; t <= f.value.count - 1; t++) {
			let e = ze(Sr(Z(), {
				month: k.value(t - 1),
				year: ee.value(t - 1)
			}), 1);
			j(t, J(e), Y(e));
		}
	}, se = () => {
		if (Array.isArray(c.value) && c.value.length === 2) {
			let e = Z(Z(c.value[1] ? c.value[1] : ze(c.value[0], 1))), [t, n] = [J(c.value[0]), Y(c.value[0])], [r, i] = [J(c.value[1]), Y(c.value[1])];
			(t !== r || t === r && n !== i) && f.value.solo && j(1, J(e), Y(e));
		} else c.value && !Array.isArray(c.value) && (j(0, J(c.value), Y(c.value)), I(Z()));
	}, ce = () => {
		e.startDate && (j(0, J(Z(e.startDate)), Y(Z(e.startDate))), f.value.count && z(0));
	}, B = (t, n) => {
		if (e.monthChangeOnScroll) {
			let r = (/* @__PURE__ */ new Date()).getTime() - a.value.getTime(), i = Math.abs(t.deltaY), o = 500;
			i > 1 && (o = 100), i > 100 && (o = 0), r > o && (a.value = /* @__PURE__ */ new Date(), R(e.monthChangeOnScroll === "inverse" ? t.deltaY : -t.deltaY, n));
		}
	}, le = (t, n, r = !1) => {
		e.monthChangeOnArrows && e.vertical === r && ue(t, n);
	}, ue = (e, t) => {
		R(e === "right" ? -1 : 1, t);
	}, H = (e) => {
		if (_.value.markers) return Si(e.value, _.value.markers);
	}, de = (t, n) => {
		switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
			case "prepend": return [!0, !1];
			case "center": return [t == 0, !0];
			case "fair": return [t == 0 || n > t, !0];
			case "append": return [!1, !1];
			default: return [!1, !1];
		}
	}, fe = (t, n, r, i) => {
		if (e.sixWeeks && t.length < 6) {
			let e = 6 - t.length, a = (n.getDay() + 7 - i) % 7, o = 6 - (r.getDay() + 7 - i) % 7, [s, c] = de(a, o);
			for (let r = 1; r <= e; r++) if (c ? !!(r % 2) == s : s) {
				let e = t[0].days[0], r = pe(Re(e.value, -7), J(n));
				t.unshift({ days: r });
			} else {
				let e = t[t.length - 1], r = e.days[e.days.length - 1], i = pe(Re(r.value, 1), J(n));
				t.push({ days: i });
			}
		}
		return t;
	}, pe = (t, n) => {
		let r = Z(t), i = [];
		for (let t = 0; t < 7; t++) {
			let a = Re(r, t), o = J(a) !== n;
			i.push({
				text: e.hideOffsetDates && o ? "" : a.getDate(),
				value: a,
				current: !o,
				classData: {}
			});
		}
		return i;
	}, me = (t, n) => {
		let r = [], i = new Date(n, t), a = new Date(n, t + 1, 0), o = e.weekStart, s = Ge(i, { weekStartsOn: o }), c = (e) => {
			let n = pe(e, t);
			if (r.push({ days: n }), !r[r.length - 1].days.some((e) => Q(ji(e.value), ji(a)))) {
				let t = Re(e, 7);
				c(t);
			}
		};
		return c(s), fe(r, i, a, o);
	}, U = (e) => {
		let n = Mi(Z(e.value), u.hours, u.minutes, be());
		t("date-update", n), v.value.enabled ? lo(n, c, v.value.limit) : c.value = n, r(), Se().then(() => {
			P();
		});
	}, he = (e) => m.value.noDisabledRange ? Hi(i.value[0], e).some((e) => b(e)) : !1, ge = () => {
		i.value = c.value ? c.value.slice() : [], i.value.length === 2 && !(m.value.fixedStart || m.value.fixedEnd) && (i.value = []);
	}, _e = (e, n) => {
		let r = [Z(e.value), Re(Z(e.value), +m.value.autoRange)];
		x(r) ? (n && ve(e.value), i.value = r) : t("invalid-date", e.value);
	}, ve = (e) => {
		let t = J(Z(e)), n = Y(Z(e));
		if (j(0, t, n), f.value.count > 0) for (let t = 1; t < f.value.count; t++) {
			let n = Ui(Sr(Z(e), {
				year: ee.value(t - 1),
				month: k.value(t - 1)
			}));
			j(t, n.month, n.year);
		}
	}, G = (e) => {
		if (he(e.value) || !S(e.value, c.value, +!m.value.fixedStart)) return t("invalid-date", e.value);
		i.value = mo(Z(e.value), c, t, m);
	}, ye = (n, r) => {
		if (ge(), m.value.autoRange) return _e(n, r);
		if (m.value.fixedStart || m.value.fixedEnd) return G(n);
		i.value[0] ? S(Z(n.value), c.value) && !he(n.value) ? Ni(Z(n.value), Z(i.value[0])) ? (i.value.unshift(Z(n.value)), t("range-end", i.value[0])) : (i.value[1] = Z(n.value), t("range-end", i.value[1])) : (e.autoApply && t("auto-apply-invalid", n.value), t("invalid-date", n.value)) : (i.value[0] = Z(n.value), t("range-start", i.value[0]));
	}, be = (t = !0) => e.enableSeconds ? Array.isArray(u.seconds) ? t ? u.seconds[0] : u.seconds[1] : u.seconds : 0, xe = (e) => {
		i.value[e] = Mi(i.value[e], u.hours[e], u.minutes[e], be(e !== 1));
	}, Ce = () => {
		i.value[0] && i.value[1] && +i.value?.[0] > +i.value?.[1] && (i.value.reverse(), t("range-start", i.value[0]), t("range-end", i.value[1]));
	}, we = () => {
		i.value.length && (i.value[0] && !i.value[1] ? xe(0) : (xe(0), xe(1), r()), Ce(), c.value = i.value.slice(), fo(i.value, t, e.autoApply, e.modelAuto));
	}, Te = (n, r = !1) => {
		if (b(n.value) || !n.current && e.hideOffsetDates) return t("invalid-date", n.value);
		if (o.value = JSON.parse(JSON.stringify(n)), !m.value.enabled) return U(n);
		Yo(u.hours) && Yo(u.minutes) && !v.value.enabled && (ye(n, r), we());
	}, Ee = (i, a) => {
		j(i, a.month, a.year, !0), f.value.count && !f.value.solo && z(i), t("update-month-year", {
			instance: i,
			month: a.month,
			year: a.year
		}), n(f.value.solo ? i : void 0);
		let o = e.flow?.length ? e.flow[e.flowStep] : void 0;
		!a.fromNav && (o === qr.month || o === qr.year) && r();
	}, De = (t, n) => {
		po({
			value: t,
			modelValue: c,
			range: m.value.enabled,
			timezone: n ? void 0 : g.value.timezone
		}), M(), e.multiCalendars && Se().then(() => F(!0));
	}, Oe = () => {
		let e = zr(Z(), g.value);
		!m.value.enabled && !v.value.enabled ? c.value = e : c.value && Array.isArray(c.value) && c.value[0] ? v.value.enabled ? c.value = [...c.value, e] : c.value = Ni(e, c.value[0]) ? [e, c.value[0]] : [c.value[0], e] : c.value = [e], M();
	}, ke = () => {
		if (Array.isArray(c.value)) {
			if (v.value.enabled) {
				let e = Ae();
				c.value[c.value.length - 1] = w(e);
			} else c.value = c.value.map((e, t) => e && w(e, t));
		} else c.value = w(c.value);
		t("time-update");
	}, Ae = () => Array.isArray(c.value) && c.value.length ? c.value[c.value.length - 1] : null;
	return {
		calendars: l,
		modelValue: c,
		month: k,
		year: ee,
		time: u,
		disabledTimesConfig: O,
		today: d,
		validateTime: D,
		getCalendarDays: me,
		getMarker: H,
		handleScroll: B,
		handleSwipe: ue,
		handleArrow: le,
		selectDate: Te,
		updateMonthYear: Ee,
		presetDate: De,
		selectCurrentDate: Oe,
		updateTime: (e, t = !0, n = !1) => {
			C(e, t, n, ke);
		},
		assignMonthAndYear: I,
		setStartTime: N
	};
}, Zo = { key: 0 }, Qo = /* @__PURE__ */ I({
	__name: "DatePicker",
	props: { ...Ja },
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
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, { calendars: o, month: s, year: c, modelValue: l, time: d, disabledTimesConfig: f, today: p, validateTime: m, getCalendarDays: h, getMarker: g, handleArrow: _, handleScroll: v, handleSwipe: y, selectDate: b, updateMonthYear: C, presetDate: w, selectCurrentDate: D, updateTime: O, assignMonthAndYear: k, setStartTime: ee } = Xo(a, r, le, ue), A = S(), { setHoverDate: j, getDayClassData: M, clearHoverDate: te } = Ss(l, a), { defaultedMultiCalendars: P } = Wa(a), F = W([]), ne = W([]), I = W(null), re = ys(A, "calendar"), ie = ys(A, "monthYear"), ae = ys(A, "timePicker"), oe = (e) => {
			a.shadow || r("mount", e);
		};
		E(o, () => {
			a.shadow || setTimeout(() => {
				r("recalculate-position");
			}, 0);
		}, { deep: !0 }), E(P, (e, t) => {
			e.count - t.count > 0 && k();
		}, { deep: !0 });
		let se = V(() => (e) => h(s.value(e), c.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = g(e), e.classData = M(e), e))
		})));
		function le(e) {
			e || e === 0 ? ne.value[e]?.triggerTransition(s.value(e), c.value(e)) : ne.value.forEach((e, t) => e.triggerTransition(s.value(t), c.value(t)));
		}
		function ue() {
			r("update-flow-step");
		}
		let de = (e, t = !1) => {
			b(e, t), a.spaceConfirm && r("select-date");
		}, fe = (e, t, n = 0) => {
			F.value[n]?.toggleMonthPicker(e, t);
		}, me = (e, t, n = 0) => {
			F.value[n]?.toggleYearPicker(e, t);
		}, U = (e, t, n) => {
			I.value?.toggleTimePicker(e, t, n);
		}, he = (e, t) => {
			if (!a.range) {
				let n = l.value ? l.value : p, r = t ? new Date(t) : n, i = e ? Ge(r, { weekStartsOn: 1 }) : mt(r, { weekStartsOn: 1 });
				b({
					value: i,
					current: J(r) === s.value(0),
					text: "",
					classData: {}
				}), document.getElementById(ua(i))?.focus();
			}
		}, _e = (e) => {
			F.value[0]?.handleMonthYearChange(e, !0);
		}, ve = (e) => {
			C(0, {
				month: s.value(0),
				year: c.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, G = (e, t) => {
			e === qr.time && r(`time-picker-${t ? "open" : "close"}`), r("overlay-toggle", {
				open: t,
				overlay: e
			});
		}, be = (e) => {
			r("overlay-toggle", {
				open: !1,
				overlay: e
			}), r("focus-menu");
		};
		return t({
			clearHoverDate: te,
			presetDate: w,
			selectCurrentDate: D,
			toggleMonthPicker: fe,
			toggleYearPicker: me,
			toggleTimePicker: U,
			handleArrow: _,
			updateMonthYear: C,
			getSidebarProps: () => ({
				modelValue: l,
				month: s,
				year: c,
				time: d,
				updateTime: O,
				updateMonthYear: C,
				selectDate: b,
				presetDate: w
			}),
			changeMonth: _e,
			changeYear: ve,
			selectWeekDate: he,
			setStartTime: ee
		}), (e, t) => (u(), H(x, null, [ce(io, {
			"multi-calendars": B(P).count,
			collapse: e.collapse,
			"is-mobile": e.isMobile
		}, {
			default: T(({ instance: n, index: r }) => [e.disableMonthYearSelect ? N("", !0) : (u(), R(Vo, ye({
				key: 0,
				ref: (e) => {
					e && (F.value[r] = e);
				},
				months: B(ni)(e.formatLocale, e.locale, e.monthNameFormat),
				years: B(ti)(e.yearRange, e.locale, e.reverseYears),
				month: B(s)(n),
				year: B(c)(n),
				instance: n
			}, e.$props, {
				onMount: t[0] ||= (e) => oe(B(Kr).header),
				onResetFlow: t[1] ||= (t) => e.$emit("reset-flow"),
				onUpdateMonthYear: (e) => B(C)(n, e),
				onOverlayClosed: be,
				onOverlayOpened: t[2] ||= (t) => e.$emit("overlay-toggle", {
					open: !0,
					overlay: t
				})
			}), ge({ _: 2 }, [i(B(ie), (t, n) => ({
				name: t,
				fn: T((n) => [z(e.$slots, t, L(pe(n)))])
			}))]), 1040, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"onUpdateMonthYear"
			])), ce(Jo, ye({
				ref: (e) => {
					e && (ne.value[r] = e);
				},
				"mapped-dates": se.value(n),
				month: B(s)(n),
				year: B(c)(n),
				instance: n
			}, e.$props, {
				onSelectDate: (e) => B(b)(e, n !== 1),
				onHandleSpace: (e) => de(e, n !== 1),
				onSetHoverDate: t[3] ||= (e) => B(j)(e),
				onHandleScroll: (e) => B(v)(e, n),
				onHandleSwipe: (e) => B(y)(e, n),
				onMount: t[4] ||= (e) => oe(B(Kr).calendar),
				onResetFlow: t[5] ||= (t) => e.$emit("reset-flow"),
				onTooltipOpen: t[6] ||= (t) => e.$emit("tooltip-open", t),
				onTooltipClose: t[7] ||= (t) => e.$emit("tooltip-close", t)
			}), ge({ _: 2 }, [i(B(re), (t, n) => ({
				name: t,
				fn: T((n) => [z(e.$slots, t, L(pe({ ...n })))])
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
		]), e.enableTimePicker ? (u(), H("div", Zo, [e.$slots["time-picker"] ? z(e.$slots, "time-picker", L(ye({ key: 0 }, {
			time: B(d),
			updateTime: B(O)
		}))) : (u(), R(Mo, ye({
			key: 1,
			ref_key: "timePickerRef",
			ref: I
		}, e.$props, {
			hours: B(d).hours,
			minutes: B(d).minutes,
			seconds: B(d).seconds,
			"internal-model-value": e.internalModelValue,
			"disabled-times-config": B(f),
			"validate-time": B(m),
			onMount: t[8] ||= (e) => oe(B(Kr).timePicker),
			"onUpdate:hours": t[9] ||= (e) => B(O)(e),
			"onUpdate:minutes": t[10] ||= (e) => B(O)(e, !1),
			"onUpdate:seconds": t[11] ||= (e) => B(O)(e, !1, !0),
			onResetFlow: t[12] ||= (t) => e.$emit("reset-flow"),
			onOverlayClosed: t[13] ||= (e) => G(e, !1),
			onOverlayOpened: t[14] ||= (e) => G(e, !0),
			onAmPmChange: t[15] ||= (t) => e.$emit("am-pm-change", t)
		}), ge({ _: 2 }, [i(B(ae), (t, n) => ({
			name: t,
			fn: T((n) => [z(e.$slots, t, L(pe(n)))])
		}))]), 1040, [
			"hours",
			"minutes",
			"seconds",
			"internal-model-value",
			"disabled-times-config",
			"validate-time"
		]))])) : N("", !0)], 64));
	}
}), $o = (e, t) => {
	let n = W(), { defaultedMultiCalendars: r, defaultedConfig: i, defaultedHighlight: a, defaultedRange: o, propDates: s, defaultedFilters: c, defaultedMultiDates: l } = Wa(e), { modelValue: u, year: d, month: f, calendars: p } = xs(e, t), { isDisabled: m } = Cs(e), { selectYear: h, groupedYears: g, showYearPicker: _, isDisabled: v, toggleYearPicker: y, handleYearSelect: b, handleYear: x } = ho({
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
	}), S = (t, n) => [t, n].map((t) => Zt(t, "MMMM", { locale: e.formatLocale })).join("-"), C = V(() => (e) => u.value ? Array.isArray(u.value) ? u.value.some((t) => yr(e, t)) : yr(u.value, e) : !1), w = (e) => {
		if (o.value.enabled) {
			if (Array.isArray(u.value)) {
				let t = Q(e, u.value[0]) || Q(e, u.value[1]);
				return Fi(u.value, n.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, T = (e, t) => e.quarter === it(t) && e.year === Y(t), E = (e) => typeof a.value == "function" ? a.value({
		quarter: it(e),
		year: Y(e)
	}) : !!a.value.quarters.find((t) => T(t, e)), D = V(() => (e) => {
		let t = Sr(/* @__PURE__ */ new Date(), { year: d.value(e) });
		return ut({
			start: pt(t),
			end: ft(t)
		}).map((e) => {
			let t = lt(e), n = ht(e), r = m(e), i = w(t), a = E(t);
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
		lo(e, u, l.value.limit), t("auto-apply", !0);
	}, k = (n) => {
		u.value = uo(u, n, t), fo(u.value, t, e.autoApply, e.modelAuto);
	}, ee = (e) => {
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
			if (!n) return p.value[t].month = J(ht(e)), l.value.enabled ? O(e) : o.value.enabled ? k(e) : ee(e);
		},
		toggleYearPicker: y,
		handleYearSelect: b,
		handleYear: x
	};
}, es = { class: "dp--quarter-items" }, ts = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], ns = /* @__PURE__ */ I({
	compatConfig: { MODE: 3 },
	__name: "QuarterPicker",
	props: { ...Ja },
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
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, o = ys(S(), "yearMode"), { defaultedMultiCalendars: s, defaultedConfig: c, groupedYears: l, year: d, isDisabled: f, quarters: p, modelValue: m, showYearPicker: h, setHoverDate: g, selectQuarter: _, toggleYearPicker: v, handleYearSelect: y, handleYear: b } = $o(a, r);
		return t({ getSidebarProps: () => ({
			modelValue: m,
			year: d,
			selectQuarter: _,
			handleYearSelect: y,
			handleYear: b
		}) }), (e, t) => (u(), R(io, {
			"multi-calendars": B(s).count,
			collapse: e.collapse,
			stretch: "",
			"is-mobile": e.isMobile
		}, {
			default: T(({ instance: t }) => [U("div", {
				class: "dp-quarter-picker-wrap",
				style: ae({ minHeight: `${B(c).modeHeight}px` })
			}, [
				e.$slots["top-extra"] ? z(e.$slots, "top-extra", {
					key: 0,
					value: e.internalModelValue
				}) : N("", !0),
				U("div", null, [ce(co, ye(e.$props, {
					items: B(l)(t),
					instance: t,
					"show-year-picker": B(h)[t],
					year: B(d)(t),
					"is-disabled": (e) => B(f)(t, e),
					onHandleYear: (e) => B(b)(t, e),
					onYearSelect: (e) => B(y)(e, t),
					onToggleYearPicker: (e) => B(v)(t, e?.flow, e?.show)
				}), ge({ _: 2 }, [i(B(o), (t, n) => ({
					name: t,
					fn: T((n) => [z(e.$slots, t, L(pe(n)))])
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
				U("div", es, [(u(!0), H(x, null, i(B(p)(t), (n, r) => (u(), H("div", { key: r }, [U("button", {
					type: "button",
					class: G(["dp--qr-btn", {
						"dp--qr-btn-active": n.active,
						"dp--qr-btn-between": n.isBetween,
						"dp--qr-btn-disabled": n.disabled,
						"dp--highlighted": n.highlighted
					}]),
					"data-test-id": n.value,
					disabled: n.disabled,
					onClick: (e) => B(_)(n.value, t, n.disabled),
					onMouseover: (e) => B(g)(n.value)
				}, [e.$slots.quarter ? z(e.$slots, "quarter", {
					key: 0,
					value: n.value,
					text: n.text
				}) : (u(), H(x, { key: 1 }, [P(me(n.text), 1)], 64))], 42, ts)]))), 128))])
			], 4)]),
			_: 3
		}, 8, [
			"multi-calendars",
			"collapse",
			"is-mobile"
		]));
	}
}), rs = (e, t) => {
	let n = W(0);
	s(() => {
		r(), window.addEventListener("resize", r, { passive: !0 });
	}), be(() => {
		window.removeEventListener("resize", r);
	});
	let r = () => {
		n.value = window.document.documentElement.clientWidth;
	};
	return { isMobile: V(() => n.value <= e.value.mobileBreakpoint && !t || void 0) };
}, is = [
	"id",
	"tabindex",
	"role",
	"aria-label"
], as = {
	key: 0,
	class: "dp--menu-load-container"
}, os = {
	key: 1,
	class: "dp--menu-header"
}, ss = ["data-dp-mobile"], cs = {
	key: 0,
	class: "dp__sidebar_left"
}, ls = ["data-dp-mobile"], us = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], ds = {
	key: 2,
	class: "dp__sidebar_right"
}, fs = {
	key: 3,
	class: "dp__action_extra"
}, ps = /* @__PURE__ */ I({
	compatConfig: { MODE: 3 },
	__name: "DatepickerMenu",
	props: {
		...qa,
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
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, o = W(null), c = V(() => {
			let { openOnTop: e, ...t } = a;
			return {
				...t,
				isMobile: b.value,
				flowStep: I.value,
				menuWrapRef: o.value
			};
		}), { setMenuFocused: l, setShiftKey: d, control: f } = ma(), p = S(), { defaultedTextInput: m, defaultedInline: h, defaultedConfig: g, defaultedUI: _, handleEventPropagation: y } = Wa(a), { isMobile: b } = rs(g, a.shadow), C = W(null), w = W(0), E = W(null), D = W(!1), O = W(null), k = W(!1), A = (e) => {
			k.value = !0, g.value.allowPreventDefault && e.preventDefault(), hi(e, g.value, !0);
		};
		s(() => {
			if (!a.shadow) {
				D.value = !0, j(), window.addEventListener("resize", j);
				let e = ii(o);
				e && !m.value.enabled && !h.value.enabled && (l(!0), ue()), e && (e.addEventListener("pointerdown", A), e.addEventListener("mousedown", A));
			}
			document.addEventListener("mousedown", Le);
		}), be(() => {
			window.removeEventListener("resize", j), document.removeEventListener("mousedown", Le);
			let e = ii(o);
			e && (e.removeEventListener("pointerdown", A), e.removeEventListener("mousedown", A));
		});
		let j = () => {
			let e = ii(E);
			e && (w.value = e.getBoundingClientRect().width);
		}, { arrowRight: M, arrowLeft: te, arrowDown: P, arrowUp: ne } = Ca(), { flowStep: I, updateFlowStep: re, childMount: ie, resetFlow: oe, handleFlow: se } = Ts(a, r, O), ce = V(() => a.monthPicker ? _o : a.yearPicker ? yo : a.timePicker ? Fo : a.quarterPicker ? ns : Qo), le = V(() => {
			if (g.value.arrowLeft) return g.value.arrowLeft;
			let e = o.value?.getBoundingClientRect(), t = a.getInputRect();
			return t?.width < w?.value && t?.left <= (e?.left ?? 0) ? `${t?.width / 2}px` : t?.right >= (e?.right ?? 0) && t?.width < w?.value ? `${w?.value - t?.width / 2}px` : "50%";
		}), ue = () => {
			let e = ii(o);
			e && e.focus({ preventScroll: !0 });
		}, de = V(() => O.value?.getSidebarProps() || {}), fe = () => {
			a.openOnTop && r("recalculate-position");
		}, he = ys(p, "action"), _e = V(() => a.monthPicker || a.yearPicker ? ys(p, "monthYear") : a.timePicker ? ys(p, "timePicker") : ys(p, "shared")), ve = V(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), xe = V(() => ({
			dp__menu_disabled: a.disabled,
			dp__menu_readonly: a.readonly,
			"dp-menu-loading": a.loading
		})), Se = V(() => ({
			dp__menu: !0,
			dp__menu_index: !h.value.enabled,
			dp__relative: h.value.enabled,
			..._.value.menu ?? {}
		})), Ce = (e) => {
			hi(e, g.value, !0);
		}, we = (e) => {
			a.escClose && (r("close-picker"), y(e));
		}, Te = (e) => {
			if (a.arrowNavigation) {
				if (e === Yr.up) return ne();
				if (e === Yr.down) return P();
				if (e === Yr.left) return te();
				if (e === Yr.right) return M();
			} else e === Yr.left || e === Yr.up ? Ae("handleArrow", Yr.left, 0, e === Yr.up) : Ae("handleArrow", Yr.right, 0, e === Yr.down);
		}, Ee = (e) => {
			d(e.shiftKey), !a.disableMonthYearSelect && e.code === Xr.tab && e.target.classList.contains("dp__menu") && f.value.shiftKeyInMenu && (e.preventDefault(), hi(e, g.value, !0), r("close-picker"));
		}, De = () => {
			ue(), r("time-picker-close");
		}, Oe = (e) => {
			O.value?.toggleTimePicker(!1, !1), O.value?.toggleMonthPicker(!1, !1, e), O.value?.toggleYearPicker(!1, !1, e);
		}, ke = (e, t = 0) => e === "month" ? O.value?.toggleMonthPicker(!1, !0, t) : e === "year" ? O.value?.toggleYearPicker(!1, !0, t) : e === "time" ? O.value?.toggleTimePicker(!0, !1) : Oe(t), Ae = (e, ...t) => {
			O.value?.[e] && O.value?.[e](...t);
		}, je = () => {
			Ae("selectCurrentDate");
		}, Me = (e, t) => {
			Ae("presetDate", F(e), t);
		}, Ne = () => {
			Ae("clearHoverDate");
		}, Pe = (e, t) => {
			Ae("updateMonthYear", e, t);
		}, Fe = (e, t) => {
			e.preventDefault(), Te(t);
		}, Ie = (e) => {
			if (Ee(e), e.key === Xr.home || e.key === Xr.end) return Ae("selectWeekDate", e.key === Xr.home, e.target.getAttribute("id"));
			switch ((e.key === Xr.pageUp || e.key === Xr.pageDown) && (e.shiftKey ? (Ae("changeYear", e.key === Xr.pageUp), vi(o.value, "overlay-year")?.focus()) : (Ae("changeMonth", e.key === Xr.pageUp), vi(o.value, e.key === Xr.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && o.value?.focus({ preventScroll: !0 })), e.key) {
				case Xr.esc: return we(e);
				case Xr.arrowLeft: return Fe(e, Yr.left);
				case Xr.arrowRight: return Fe(e, Yr.right);
				case Xr.arrowUp: return Fe(e, Yr.up);
				case Xr.arrowDown: return Fe(e, Yr.down);
				default: return;
			}
		}, Le = (e) => {
			h.value.enabled && !h.value.input && !o.value?.contains(e.target) && k.value && (k.value = !1, r("menu-blur"));
		};
		return t({
			updateMonthYear: Pe,
			switchView: ke,
			handleFlow: se,
			onValueCleared: () => {
				O.value?.setStartTime?.();
			}
		}), (t, n) => (u(), H("div", {
			id: t.uid ? `dp-menu-${t.uid}` : void 0,
			ref_key: "dpMenuRef",
			ref: o,
			tabindex: B(h).enabled ? void 0 : "0",
			role: B(h).enabled ? void 0 : "dialog",
			"aria-label": t.ariaLabels?.menu,
			class: G(Se.value),
			style: ae({ "--dp-arrow-left": le.value }),
			onMouseleave: Ne,
			onClick: Ce,
			onKeydown: Ie
		}, [
			(t.disabled || t.readonly) && B(h).enabled || t.loading ? (u(), H("div", {
				key: 0,
				class: G(xe.value)
			}, [t.loading ? (u(), H("div", as, [...n[19] ||= [U("span", { class: "dp--menu-loader" }, null, -1)]])) : N("", !0)], 2)) : N("", !0),
			t.$slots["menu-header"] ? (u(), H("div", os, [z(t.$slots, "menu-header")])) : N("", !0),
			!B(h).enabled && !t.teleportCenter ? (u(), H("div", {
				key: 2,
				class: G(ve.value)
			}, null, 2)) : N("", !0),
			U("div", {
				ref_key: "innerMenuRef",
				ref: E,
				class: G({
					dp__menu_content_wrapper: t.presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": e.collapse && (t.presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"])
				}),
				"data-dp-mobile": B(b),
				style: ae({ "--dp-menu-width": `${w.value}px` })
			}, [
				t.$slots["left-sidebar"] ? (u(), H("div", cs, [z(t.$slots, "left-sidebar", L(pe(de.value)))])) : N("", !0),
				t.presetDates.length ? (u(), H("div", {
					key: 1,
					class: G({
						"dp--preset-dates-collapsed": e.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": B(b)
				}, [(u(!0), H(x, null, i(t.presetDates, (n, r) => (u(), H(x, { key: r }, [n.slot ? z(t.$slots, n.slot, {
					key: 0,
					presetDate: Me,
					label: n.label,
					value: n.value
				}) : (u(), H("button", {
					key: 1,
					type: "button",
					style: ae(n.style || {}),
					class: G(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
					"data-test-id": n.testId ?? void 0,
					"data-dp-mobile": B(b),
					onClick: ee((e) => Me(n.value, n.noTz), ["prevent"]),
					onKeydown: (e) => B(wi)(e, () => Me(n.value, n.noTz), !0)
				}, me(n.label), 47, us))], 64))), 128))], 10, ls)) : N("", !0),
				U("div", {
					ref_key: "calendarWrapperRef",
					ref: C,
					class: "dp__instance_calendar",
					role: "document"
				}, [(u(), R(v(ce.value), ye({
					ref_key: "dynCmpRef",
					ref: O
				}, c.value, {
					"flow-step": B(I),
					onMount: B(ie),
					onUpdateFlowStep: B(re),
					onResetFlow: B(oe),
					onFocusMenu: ue,
					onSelectDate: n[0] ||= (e) => t.$emit("select-date"),
					onDateUpdate: n[1] ||= (e) => t.$emit("date-update", e),
					onTooltipOpen: n[2] ||= (e) => t.$emit("tooltip-open", e),
					onTooltipClose: n[3] ||= (e) => t.$emit("tooltip-close", e),
					onAutoApply: n[4] ||= (e) => t.$emit("auto-apply", e),
					onRangeStart: n[5] ||= (e) => t.$emit("range-start", e),
					onRangeEnd: n[6] ||= (e) => t.$emit("range-end", e),
					onInvalidFixedRange: n[7] ||= (e) => t.$emit("invalid-fixed-range", e),
					onTimeUpdate: n[8] ||= (e) => t.$emit("time-update"),
					onAmPmChange: n[9] ||= (e) => t.$emit("am-pm-change", e),
					onTimePickerOpen: n[10] ||= (e) => t.$emit("time-picker-open", e),
					onTimePickerClose: De,
					onRecalculatePosition: fe,
					onUpdateMonthYear: n[11] ||= (e) => t.$emit("update-month-year", e),
					onAutoApplyInvalid: n[12] ||= (e) => t.$emit("auto-apply-invalid", e),
					onInvalidDate: n[13] ||= (e) => t.$emit("invalid-date", e),
					onOverlayToggle: n[14] ||= (e) => t.$emit("overlay-toggle", e),
					"onUpdate:internalModelValue": n[15] ||= (e) => t.$emit("update:internal-model-value", e)
				}), ge({ _: 2 }, [i(_e.value, (e, n) => ({
					name: e,
					fn: T((n) => [z(t.$slots, e, L(pe({ ...n })))])
				}))]), 1040, [
					"flow-step",
					"onMount",
					"onUpdateFlowStep",
					"onResetFlow"
				]))], 512),
				t.$slots["right-sidebar"] ? (u(), H("div", ds, [z(t.$slots, "right-sidebar", L(pe(de.value)))])) : N("", !0),
				t.$slots["action-extra"] ? (u(), H("div", fs, [t.$slots["action-extra"] ? z(t.$slots, "action-extra", {
					key: 0,
					selectCurrentDate: je
				}) : N("", !0)])) : N("", !0)
			], 14, ss),
			!t.autoApply || B(g).keepActionRow ? (u(), R(Za, ye({
				key: 3,
				"menu-mount": D.value
			}, c.value, {
				"calendar-width": w.value,
				onClosePicker: n[16] ||= (e) => t.$emit("close-picker"),
				onSelectDate: n[17] ||= (e) => t.$emit("select-date"),
				onInvalidSelect: n[18] ||= (e) => t.$emit("invalid-select"),
				onSelectNow: je
			}), ge({ _: 2 }, [i(B(he), (e, n) => ({
				name: e,
				fn: T((n) => [z(t.$slots, e, L(pe({ ...n })))])
			}))]), 1040, ["menu-mount", "calendar-width"])) : N("", !0)
		], 46, is));
	}
}), ms = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(ms || {}), hs = ({ menuRef: e, menuRefInner: t, inputRef: n, pickerWrapperRef: r, inline: i, emit: a, props: o, slots: s }) => {
	let { defaultedConfig: c } = Wa(o), l = W({}), u = W(!1), d = W({
		top: "0",
		left: "0"
	}), p = W(!1), m = de(o, "teleportCenter");
	E(m, () => {
		d.value = JSON.parse(JSON.stringify({})), S();
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
		d.value.left = `${e + t - l.value.width}px`;
	}, _ = (e) => {
		d.value.left = `${e}px`;
	}, v = (e, t) => {
		o.position === ms.left && _(e), o.position === ms.right && g(e, t), o.position === ms.center && (d.value.left = `${e + t / 2 - l.value.width / 2}px`);
	}, y = (e) => {
		let { width: t, height: n } = e.getBoundingClientRect(), { top: r, left: i } = h(e);
		return {
			top: +r,
			left: +i,
			width: t,
			height: n
		};
	}, b = () => {
		d.value.left = "50%", d.value.top = "50%", d.value.transform = "translate(-50%, -50%)", d.value.position = "fixed", delete d.value.opacity;
	}, x = () => {
		let e = ii(n);
		d.value = o.altPosition(e);
	}, S = (n = !0) => {
		if (!i.value.enabled) {
			if (m.value) return b();
			if (o.altPosition !== null) return x();
			if (n) {
				let n = o.teleport ? t.value?.$el : e.value;
				n && (l.value = n.getBoundingClientRect()), a("recalculate-position");
			}
			return ee();
		}
	}, C = ({ inputEl: e, left: t, width: n }) => {
		window.screen.width > 768 && !u.value && v(t, n), D(e);
	}, w = (e) => {
		let { top: t, left: n, height: r, width: i } = y(e);
		d.value.top = `${r + t + +o.offset}px`, p.value = !1, u.value || (d.value.left = `${n + i / 2 - l.value.width / 2}px`), C({
			inputEl: e,
			left: n,
			width: i
		});
	}, T = (e) => {
		let { top: t, left: n, width: r } = y(e);
		d.value.top = `${t - +o.offset - l.value.height}px`, p.value = !0, C({
			inputEl: e,
			left: n,
			width: r
		});
	}, D = (e) => {
		if (o.autoPosition) {
			let { left: t, width: n } = y(e), { left: r, right: i } = l.value;
			if (!u.value) {
				if (Math.abs(r) !== Math.abs(i)) {
					if (r <= 0) return u.value = !0, _(t);
					if (i >= document.documentElement.clientWidth) return u.value = !0, g(t, n);
				}
				return v(t, n);
			}
		}
	}, O = () => {
		let e = ii(n);
		if (e) {
			if (o.autoPosition === Gr.top) return Gr.top;
			if (o.autoPosition === Gr.bottom) return Gr.bottom;
			let { height: t } = l.value, { top: n, height: r } = e.getBoundingClientRect(), i = window.innerHeight - n - r, a = n;
			return t <= i ? Gr.bottom : t > i && t <= a ? Gr.top : i >= a ? Gr.bottom : Gr.top;
		}
		return Gr.bottom;
	}, k = (e) => O() === Gr.bottom ? w(e) : T(e), ee = () => {
		let e = ii(n);
		if (e) return o.autoPosition ? k(e) : w(e);
	}, A = function(e) {
		if (e) {
			let t = e.scrollHeight > e.clientHeight, n = window.getComputedStyle(e).overflowY.indexOf("hidden") !== -1;
			return t && !n;
		}
		return !0;
	}, j = function(e) {
		return !e || e === document.body || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : A(e) ? e : j(e.assignedSlot && c.value.shadowDom ? e.assignedSlot.parentNode : e.parentNode);
	}, M = (e) => {
		if (e) switch (o.position) {
			case ms.left: return {
				left: 0,
				transform: "translateX(0)"
			};
			case ms.right: return {
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
		menuStyle: d,
		xCorrect: u,
		setMenuPosition: S,
		getScrollableParent: j,
		shadowRender: (e, t, i) => {
			let a = document.createElement("div"), o = ii(n)?.getBoundingClientRect();
			a.setAttribute("id", "dp--temp-container");
			let u = r.value?.clientWidth ? r.value : document.body;
			u.append(a);
			let d = M(o), p = c.value.shadowDom ? Object.keys(s).filter((e) => [
				"right-sidebar",
				"left-sidebar",
				"top-extra",
				"action-extra"
			].includes(e)) : Object.keys(s), m = ue(t, {
				...i,
				shadow: !0,
				style: {
					opacity: 0,
					position: "absolute",
					...d
				}
			}, Object.fromEntries(p.map((e) => [e, s[e]])));
			e != null && (m.appContext = e.appContext), f(m, a), l.value = m.el?.getBoundingClientRect(), f(null, a), u.removeChild(a);
		}
	};
}, gs = [
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
], _s = [
	{ name: "trigger" },
	{ name: "input-icon" },
	{ name: "clear-icon" },
	{ name: "dp-input" }
], vs = {
	all: () => gs,
	monthYear: () => gs.filter((e) => e.use.includes("month-year")),
	input: () => _s,
	timePicker: () => gs.filter((e) => e.use.includes("time")),
	action: () => gs.filter((e) => e.use.includes("action")),
	calendar: () => gs.filter((e) => e.use.includes("calendar")),
	menu: () => gs.filter((e) => e.use.includes("menu")),
	shared: () => gs.filter((e) => e.use.includes("shared")),
	yearMode: () => gs.filter((e) => e.use.includes("year-mode"))
}, ys = (e, t, n) => {
	let r = [];
	return vs[t]().forEach((t) => {
		e[t.name] && r.push(t.name);
	}), n?.length && n.forEach((e) => {
		e.slot && r.push(e.slot);
	}), r;
}, bs = (e) => {
	let t = V(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = V(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, xs = (e, t, r) => {
	let { defaultedRange: i, defaultedTz: a } = Wa(e), o = Z(Rr(Z(), a.value.timezone)), s = W([{
		month: J(o),
		year: Y(o)
	}]), c = (e) => {
		let t = {
			hours: nn(o),
			minutes: an(o),
			seconds: 0
		};
		return i.value.enabled ? [t[e], t[e]] : t[e];
	}, l = n({
		hours: c("hours"),
		minutes: c("minutes"),
		seconds: c("seconds")
	});
	E(i, (e, t) => {
		e.enabled !== t.enabled && (l.hours = c("hours"), l.minutes = c("minutes"), l.seconds = c("seconds"));
	}, { deep: !0 });
	let u = V({
		get: () => e.internalModelValue,
		set: (n) => {
			!e.readonly && !e.disabled && t("update:internal-model-value", n);
		}
	}), d = V(() => (e) => s.value[e] ? s.value[e].month : 0), f = V(() => (e) => s.value[e] ? s.value[e].year : 0);
	return E(u, (e, t) => {
		r && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && r();
	}, { deep: !0 }), {
		calendars: s,
		time: l,
		modelValue: u,
		month: d,
		year: f,
		today: o
	};
}, Ss = (e, t) => {
	let { defaultedMultiCalendars: n, defaultedMultiDates: r, defaultedUI: i, defaultedHighlight: a, defaultedTz: o, propDates: s, defaultedRange: c } = Wa(t), { isDisabled: l } = Cs(t), u = W(null), d = W(Rr(/* @__PURE__ */ new Date(), o.value.timezone)), f = (e) => {
		!e.current && t.hideOffsetDates || (u.value = e.value);
	}, p = () => {
		u.value = null;
	}, m = (t) => Array.isArray(e.value) && c.value.enabled && e.value[0] && u.value ? t ? Pi(u.value, e.value[0]) : Ni(u.value, e.value[0]) : !0, h = (t, n) => {
		let r = e.value && Array.isArray(e.value) && e.value ? n ? e.value[0] || null : e.value[1] : null;
		return Q(Z(t.value), r);
	}, g = (t) => {
		let n = Array.isArray(e.value) ? e.value[0] : null;
		return !t || !Ni(u.value ?? null, n);
	}, _ = (n, r = !0) => (c.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !n.current ? !1 : Q(Z(n.value), e.value[+!r]) : c.value.enabled ? h(n, r) && g(r) || Q(n.value, Array.isArray(e.value) ? e.value[0] : null) && m(r) : !1, v = (t, n) => {
		if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
			let r = Q(t.value, u.value);
			return n ? Pi(e.value[0], t.value) && r : Ni(e.value[0], t.value) && r;
		}
		return !1;
	}, y = (n) => !e.value || t.hideOffsetDates && !n.current ? !1 : c.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Q(n.value, e.value[0] ? e.value[0] : d.value) : !1 : r.value.enabled && Array.isArray(e.value) ? e.value.some((e) => Q(e, n.value)) : Q(n.value, e.value ? e.value : d.value), b = (e) => {
		if (c.value.autoRange || t.weekPicker) {
			if (u.value) {
				if (t.hideOffsetDates && !e.current) return !1;
				let n = Re(u.value, +c.value.autoRange), r = Wi(Z(u.value), t.weekStart);
				return t.weekPicker ? Q(r[1], Z(e.value)) : Q(n, Z(e.value));
			}
			return !1;
		}
		return !1;
	}, x = (e) => {
		if (c.value.autoRange || t.weekPicker) {
			if (u.value) {
				let n = Re(u.value, +c.value.autoRange);
				if (t.hideOffsetDates && !e.current) return !1;
				let r = Wi(Z(u.value), t.weekStart);
				return t.weekPicker ? Pi(e.value, r[0]) && Ni(e.value, r[1]) : Pi(e.value, u.value) && Ni(e.value, n);
			}
			return !1;
		}
		return !1;
	}, S = (e) => {
		if (c.value.autoRange || t.weekPicker) {
			if (u.value) {
				if (t.hideOffsetDates && !e.current) return !1;
				let n = Wi(Z(u.value), t.weekStart);
				return t.weekPicker ? Q(n[0], e.value) : Q(u.value, e.value);
			}
			return !1;
		}
		return !1;
	}, C = (t) => Fi(e.value, u.value, t.value), w = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, T = () => !t.modelAuto || oi(t.internalModelValue), E = (e) => {
		if (t.weekPicker) return !1;
		let n = !c.value.enabled || !_(e) && !_(e, !1);
		return !l(e.value) && !y(e) && !(!e.current && t.hideOffsetDates) && n;
	}, D = (e) => c.value.enabled ? t.modelAuto ? w() && y(e) : !1 : y(e), O = (e) => a.value ? Ci(e.value, s.value.highlight) : !1, k = (e) => {
		let t = l(e.value);
		return t && (typeof a.value == "function" ? !a.value(e.value, t) : !a.value.options.highlightDisabled);
	}, ee = (e) => typeof a.value == "function" ? a.value(e.value) : a.value.weekdays?.includes(e.value.getDay()), A = (e) => (c.value.enabled || t.weekPicker) && (!(n.value.count > 0) || e.current) && T() && (e.current || !t.hideOffsetDates) && !y(e) ? C(e) : !1, j = (t) => {
		if (Array.isArray(e.value) && e.value.length === 1) {
			let { before: n, after: r } = da(+c.value.maxRange, e.value[0]);
			return cn(t.value, n) || sn(t.value, r);
		}
		return !1;
	}, M = (t) => {
		if (Array.isArray(e.value) && e.value.length === 1) {
			let { before: n, after: r } = da(+c.value.minRange, e.value[0]);
			return Fi([n, r], e.value[0], t.value);
		}
		return !1;
	}, N = (e) => c.value.enabled && (c.value.maxRange || c.value.minRange) ? c.value.maxRange && c.value.minRange ? j(e) || M(e) : c.value.maxRange ? j(e) : M(e) : !1, te = (e) => {
		let { isRangeStart: n, isRangeEnd: r } = I(e), i = c.value.enabled ? n || r : !1;
		return {
			dp__cell_offset: !e.current,
			dp__pointer: !t.disabled && !(!e.current && t.hideOffsetDates) && !l(e.value) && !N(e),
			dp__cell_disabled: l(e.value) || N(e),
			dp__cell_highlight: !k(e) && (O(e) || ee(e)) && !D(e) && !i && !S(e) && !(A(e) && t.weekPicker) && !r,
			dp__cell_highlight_active: !k(e) && (O(e) || ee(e)) && D(e),
			dp__today: !t.noToday && Q(e.value, d.value) && e.current,
			"dp--past": Ni(e.value, d.value),
			"dp--future": Pi(e.value, d.value)
		};
	}, P = (e) => ({
		dp__active_date: D(e),
		dp__date_hover: E(e)
	}), F = (n) => {
		if (e.value && !Array.isArray(e.value)) {
			let r = Wi(e.value, t.weekStart);
			return {
				...re(n),
				dp__range_start: Q(r[0], n.value),
				dp__range_end: Q(r[1], n.value),
				dp__range_between_week: Pi(n.value, r[0]) && Ni(n.value, r[1])
			};
		}
		return { ...re(n) };
	}, ne = (n) => {
		if (e.value && Array.isArray(e.value)) {
			let r = Wi(e.value[0], t.weekStart), i = e.value[1] ? Wi(e.value[1], t.weekStart) : [];
			return {
				...re(n),
				dp__range_start: Q(r[0], n.value) || Q(i[0], n.value),
				dp__range_end: Q(r[1], n.value) || Q(i[1], n.value),
				dp__range_between_week: Pi(n.value, r[0]) && Ni(n.value, r[1]) || Pi(n.value, i[0]) && Ni(n.value, i[1]),
				dp__range_between: Pi(n.value, r[1]) && Ni(n.value, i[0])
			};
		}
		return { ...re(n) };
	}, I = (e) => ({
		isRangeStart: n.value.count > 0 ? e.current && _(e) && T() : _(e) && T(),
		isRangeEnd: n.value.count > 0 ? e.current && _(e, !1) && T() : _(e, !1) && T()
	}), L = (e) => {
		let { isRangeStart: n, isRangeEnd: r } = I(e);
		return {
			dp__range_start: n,
			dp__range_end: r,
			dp__range_between: A(e),
			dp__date_hover: Q(e.value, u.value) && !n && !r && !t.weekPicker,
			dp__date_hover_start: v(e, !0),
			dp__date_hover_end: v(e, !1)
		};
	}, re = (e) => ({
		...L(e),
		dp__cell_auto_range: x(e),
		dp__cell_auto_range_start: S(e),
		dp__cell_auto_range_end: b(e)
	}), ie = (e) => c.value.enabled ? c.value.autoRange ? re(e) : t.modelAuto ? {
		...P(e),
		...L(e)
	} : t.weekPicker ? ne(e) : L(e) : t.weekPicker ? F(e) : P(e);
	return {
		setHoverDate: f,
		clearHoverDate: p,
		getDayClassData: (e) => t.hideOffsetDates && !e.current ? {} : {
			...te(e),
			...ie(e),
			[t.dayClass ? t.dayClass(e.value, t.internalModelValue) : ""]: !0,
			...i.value.calendarCell ?? {}
		}
	};
}, Cs = (e) => {
	let { defaultedFilters: t, defaultedRange: n, propDates: r, defaultedMultiDates: i } = Wa(e), a = (e) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(Z(e)) : !!Si(e, r.value.disabledDates) : !1, o = (t) => r.value.maxDate ? e.yearPicker ? Y(t) > Y(r.value.maxDate) : Pi(t, r.value.maxDate) : !1, s = (t) => r.value.minDate ? e.yearPicker ? Y(t) < Y(r.value.minDate) : Ni(t, r.value.minDate) : !1, c = (n) => {
		let r = o(n), i = s(n), c = a(n), l = t.value.months.map((e) => +e).includes(J(n)), u = e.disabledWeekDays.length ? e.disabledWeekDays.some((e) => +e === $t(n)) : !1, d = p(n), f = Y(n), m = fa(e.yearRange, f);
		return !(r || i || c || l || m || u || d);
	}, l = (e, t) => Ni(...Ki(r.value.minDate, e, t)) || Q(...Ki(r.value.minDate, e, t)), u = (e, t) => Pi(...Ki(r.value.maxDate, e, t)) || Q(...Ki(r.value.maxDate, e, t)), d = (e, t, n) => {
		let i = !1;
		return r.value.maxDate && n && u(e, t) && (i = !0), r.value.minDate && !n && l(e, t) && (i = !0), i;
	}, f = (e, t, n, i) => {
		let a = !1;
		return i && (r.value.minDate || r.value.maxDate) ? r.value.minDate && r.value.maxDate ? a = d(e, t, n) : (r.value.minDate && l(e, t) || r.value.maxDate && u(e, t)) && (a = !0) : a = !0, a;
	}, p = (t) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !Si(t, r.value.allowedDates, Ei(e.monthPicker, e.yearPicker)) : !1, m = (e) => !c(e), h = (e) => !n.value.noDisabledRange || !ct({
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
			let i = Ze(e, t[r]), a = Hi(t[r], e), o = a.length === 1 ? 0 : a.filter((e) => m(e)).length, s = Math.abs(i) - (n.value.minMaxRawRange ? 0 : o);
			if (n.value.minRange && n.value.maxRange) return s >= +n.value.minRange && s <= +n.value.maxRange;
			if (n.value.minRange) return s >= +n.value.minRange;
			if (n.value.maxRange) return s <= +n.value.maxRange;
		}
		return !0;
	}, y = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, b = (e) => Array.isArray(e) ? [e[0] ? aa(e[0]) : null, e[1] ? aa(e[1]) : null] : aa(e), x = (e, t, n) => e.find((e) => +e.hours === nn(t) && e.minutes === "*" || +e.minutes === an(t) && +e.hours === nn(t)) && n, S = (e, t, n) => {
		let [r, i] = e, [a, o] = t;
		return !x(r, a, n) && !x(i, o, n) && n;
	}, C = (t, n) => {
		let r = Array.isArray(n) ? n : [n];
		return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? S(e.disabledTimes, r, t) : !r.some((n) => x(e.disabledTimes, n, t)) : t;
	}, w = (t, n) => {
		let r = Array.isArray(n) ? [Ri(n[0]), n[1] ? Ri(n[1]) : void 0] : Ri(n), i = !e.disabledTimes(r);
		return t && i;
	}, T = (t, n) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? C(n, t) : w(n, t) : n, E = (t) => {
		let n = !0;
		if (!t || y()) return !0;
		let i = !r.value.minDate && !r.value.maxDate ? b(t) : t;
		return (e.maxTime || r.value.maxDate) && (n = ia(e.maxTime, r.value.maxDate, "max", ci(i), n)), (e.minTime || r.value.minDate) && (n = ia(e.minTime, r.value.minDate, "min", ci(i), n)), T(t, n);
	}, D = (t) => {
		if (!e.monthPicker) return !0;
		let n = !0, i = Z(Ii(t));
		if (r.value.minDate && r.value.maxDate) {
			let e = Z(Ii(r.value.minDate)), t = Z(Ii(r.value.maxDate));
			return Pi(i, e) && Ni(i, t) || Q(i, e) || Q(i, t);
		}
		if (r.value.minDate) {
			let e = Z(Ii(r.value.minDate));
			n = Pi(i, e) || Q(i, e);
		}
		if (r.value.maxDate) {
			let e = Z(Ii(r.value.maxDate));
			n = Ni(i, e) || Q(i, e);
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
		isTimeValid: V(() => (t) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : E(t)),
		isMonthValid: V(() => (t) => e.monthPicker ? Array.isArray(t) && (n.value.enabled || i.value.enabled) ? !t.filter((e) => !D(e)).length : D(t) : !0)
	};
}, ws = () => ({
	hideNavigationButtons: V(() => (e, t) => e?.includes(t)),
	showLeftIcon: V(() => (e, t) => e.count ? e.solo ? !0 : t === 0 : !0),
	showRightIcon: V(() => (e, t) => e.count ? e.solo ? !0 : t === e.count - 1 : !0)
}), Ts = (e, t, r) => {
	let i = W(0), a = n({
		[Kr.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
		[Kr.calendar]: !1,
		[Kr.header]: !1
	}), o = V(() => e.monthPicker || e.timePicker), s = (t) => {
		if (e.flow?.length) {
			if (!t && o.value) return d();
			a[t] = !0, Object.keys(a).filter((e) => !a[e]).length || d();
		}
	}, c = () => {
		e.flow?.length && i.value !== -1 && (i.value += 1, t("flow-step", i.value), d()), e.flow?.length === i.value && Se().then(() => l());
	}, l = () => {
		i.value = -1;
	}, u = (t, n, ...a) => {
		e.flow[i.value] === t && r.value && r.value[n]?.(...a);
	}, d = (t = 0) => {
		t && (i.value += t), u(qr.month, "toggleMonthPicker", !0), u(qr.year, "toggleYearPicker", !0), u(qr.calendar, "toggleTimePicker", !1, !0), u(qr.time, "toggleTimePicker", !0, !0);
		let n = e.flow[i.value];
		(n === qr.hours || n === qr.minutes || n === qr.seconds) && u(n, "toggleTimePicker", !0, !0, n);
	};
	return {
		childMount: s,
		updateFlowStep: c,
		resetFlow: l,
		handleFlow: d,
		flowStep: i
	};
}, Es = {
	key: 1,
	class: "dp__input_wrap"
}, Ds = [
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
], Os = {
	key: 2,
	class: "dp--clear-btn"
}, ks = ["aria-label"], As = /* @__PURE__ */ I({
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
		...qa
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
		let r = n, i = e, { defaultedTextInput: a, defaultedAriaLabels: o, defaultedInline: s, defaultedConfig: c, defaultedRange: l, defaultedMultiDates: d, defaultedUI: f, getDefaultPattern: p, getDefaultStartTime: m } = Wa(i), { checkMinMaxRange: h } = Cs(i), g = W(), _ = W(null), v = W(!1), y = W(!1), b = V(() => ({
			dp__pointer: !i.disabled && !i.readonly && !a.value.enabled,
			dp__disabled: i.disabled,
			dp__input_readonly: !a.value.enabled,
			dp__input: !0,
			dp__input_not_clearable: !i.clearable,
			dp__input_icon_pad: !i.hideInputIcon,
			dp__input_valid: typeof i.state == "boolean" && i.state,
			dp__input_invalid: typeof i.state == "boolean" && !i.state,
			dp__input_focus: v.value || i.isMenuOpen,
			dp__input_reg: !a.value.enabled,
			...f.value.input ?? {}
		})), x = () => {
			r("set-input-date", null), i.clearable && i.autoApply && (r("set-empty-date"), g.value = null);
		}, S = (e) => {
			let t = m();
			return ki(e, a.value.format ?? p(), t ?? Gi({}, i.enableSeconds), i.inputValue, y.value, i.formatLocale);
		}, C = (e) => {
			let { rangeSeparator: t } = a.value, [n, r] = e.split(`${t}`);
			if (n) {
				let e = S(n.trim()), t = r ? S(r.trim()) : void 0;
				if (sn(e, t)) return;
				let i = e && t ? [e, t] : [e];
				h(t, i, 0) && (g.value = e ? i : null);
			}
		}, w = () => {
			y.value = !0;
		}, T = (e) => {
			if (l.value.enabled) C(e);
			else if (d.value.enabled) {
				let t = e.split(";");
				g.value = t.map((e) => S(e.trim())).filter((e) => e);
			} else g.value = S(e);
		}, E = (e) => {
			let t = typeof e == "string" ? e : e.target?.value;
			t === "" ? x() : (a.value.openMenu && !i.isMenuOpen && r("open"), T(t), r("set-input-date", g.value)), y.value = !1, r("update:input-value", t), r("text-input", e, g.value);
		}, D = (e) => {
			a.value.enabled ? (T(e.target.value), a.value.enterSubmit && ea(g.value) && i.inputValue !== "" ? (r("set-input-date", g.value, !0), g.value = null) : a.value.enterSubmit && i.inputValue === "" && (g.value = null, r("clear"))) : A(e);
		}, O = (e, t) => {
			a.value.enabled && a.value.tabSubmit && !t && T(e.target.value), a.value.tabSubmit && ea(g.value) && i.inputValue !== "" ? (r("set-input-date", g.value, !0, !0), g.value = null) : a.value.tabSubmit && i.inputValue === "" && (g.value = null, r("clear", !0));
		}, k = () => {
			v.value = !0, r("focus"), Se().then(() => {
				a.value.enabled && a.value.selectOnFocus && _.value?.select();
			});
		}, A = (e) => {
			if (hi(e, c.value, !0), a.value.enabled && a.value.openMenu && !s.value.input) {
				if (a.value.openMenu === "open" && !i.isMenuOpen) return r("open");
				if (a.value.openMenu === "toggle") return r("toggle");
			} else a.value.enabled || r("toggle");
		}, j = () => {
			r("real-blur"), v.value = !1, (!i.isMenuOpen || s.value.enabled && s.value.input) && r("blur"), i.autoApply && a.value.enabled && g.value && !i.isMenuOpen && (r("set-input-date", g.value), r("select-date"), g.value = null);
		}, M = (e) => {
			hi(e, c.value, !0), r("clear");
		}, te = () => {
			r("close");
		}, P = (e) => {
			if (e.key === "Tab" && O(e), e.key === "Enter" && D(e), e.key === "Escape" && a.value.escClose && te(), !a.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, F = () => {
			_.value?.focus({ preventScroll: !0 });
		}, ne = (e) => {
			g.value = e;
		}, I = (e) => {
			e.key === Xr.tab && O(e, !0);
		};
		return t({
			focusInput: F,
			setParsedDate: ne
		}), (t, n) => (u(), H("div", { onClick: A }, [t.$slots.trigger && !t.$slots["dp-input"] && !B(s).enabled ? z(t.$slots, "trigger", { key: 0 }) : N("", !0), !t.$slots.trigger && (!B(s).enabled || B(s).input) ? (u(), H("div", Es, [
			t.$slots["dp-input"] && !t.$slots.trigger && (!B(s).enabled || B(s).enabled && B(s).input) ? z(t.$slots, "dp-input", {
				key: 0,
				value: e.inputValue,
				isMenuOpen: e.isMenuOpen,
				onInput: E,
				onEnter: D,
				onTab: O,
				onClear: M,
				onBlur: j,
				onKeypress: P,
				onPaste: w,
				onFocus: k,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}) : N("", !0),
			t.$slots["dp-input"] ? N("", !0) : (u(), H("input", {
				key: 1,
				id: t.uid ? `dp-input-${t.uid}` : void 0,
				ref_key: "inputRef",
				ref: _,
				"data-test-id": "dp-input",
				name: t.name,
				class: G(b.value),
				inputmode: B(a).enabled ? "text" : "none",
				placeholder: t.placeholder,
				disabled: t.disabled,
				readonly: t.readonly,
				required: t.required,
				value: e.inputValue,
				autocomplete: t.autocomplete,
				"aria-label": B(o)?.input,
				"aria-disabled": t.disabled || void 0,
				"aria-invalid": t.state === !1 || void 0,
				onInput: E,
				onBlur: j,
				onFocus: k,
				onKeypress: P,
				onKeydown: n[0] ||= (e) => P(e),
				onPaste: w
			}, null, 42, Ds)),
			U("div", { onClick: n[3] ||= (e) => r("toggle") }, [t.$slots["input-icon"] && !t.hideInputIcon ? (u(), H("span", {
				key: 0,
				class: "dp__input_icon",
				onClick: n[1] ||= (e) => r("toggle")
			}, [z(t.$slots, "input-icon")])) : N("", !0), !t.$slots["input-icon"] && !t.hideInputIcon && !t.$slots["dp-input"] ? (u(), R(B(jr), {
				key: 1,
				"aria-label": B(o)?.calendarIcon,
				class: "dp__input_icon dp__input_icons",
				onClick: n[2] ||= (e) => r("toggle")
			}, null, 8, ["aria-label"])) : N("", !0)]),
			t.$slots["clear-icon"] && (t.alwaysClearable || e.inputValue && t.clearable && !t.disabled && !t.readonly) ? (u(), H("span", Os, [z(t.$slots, "clear-icon", { clear: M })])) : N("", !0),
			!t.$slots["clear-icon"] && (t.alwaysClearable || t.clearable && e.inputValue && !t.disabled && !t.readonly) ? (u(), H("button", {
				key: 3,
				"aria-label": B(o)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				onKeydown: n[4] ||= (e) => B(wi)(e, () => M(e), !0, I),
				onClick: n[5] ||= ee((e) => M(e), ["prevent"])
			}, [ce(B(Mr), {
				class: "dp__input_icons",
				"data-test-id": "clear-icon"
			})], 40, ks)) : N("", !0)
		])) : N("", !0)]));
	}
}), js = typeof window < "u" ? window : void 0, Ms = () => {}, Ns = (e) => m() ? (b(e), !0) : !1, Ps = (e, t, n, r) => {
	if (!e) return Ms;
	let i = Ms, a = E(() => B(e), (e) => {
		i(), e && (e.removeEventListener(t, n), e.addEventListener(t, n, r), i = () => {
			e.removeEventListener(t, n, r), i = Ms;
		});
	}, {
		immediate: !0,
		flush: "post"
	}), o = () => {
		a(), i();
	};
	return Ns(o), o;
}, Fs = (e, t, n, r = {}) => {
	let { window: i = js, event: a = "pointerdown" } = r;
	return i ? Ps(i, a, (r) => {
		let i = ii(e), a = ii(t);
		!i || !a || i === r.target || r.composedPath().includes(i) || r.composedPath().includes(a) || n(r);
	}, { passive: !0 }) : void 0;
}, Is = ["data-dp-mobile"], Ls = /* @__PURE__ */ I({
	compatConfig: { MODE: 3 },
	__name: "VueDatePicker",
	props: { ...qa },
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
	setup(e, { expose: t, emit: n }) {
		let a = n, c = e, l = S(), d = W(!1), f = de(c, "modelValue"), p = de(c, "timezone"), m = W(null), h = W(null), g = W(null), _ = W(!1), y = W(null), b = W(!1), x = W(!1), C = W(!1), w = W(!1), { setMenuFocused: D, setShiftKey: O } = ma(), { clearArrowNav: ee } = Ca(), { validateDate: A, isValidTime: j } = Cs(c), { defaultedTransitions: M, defaultedTextInput: te, defaultedInline: P, defaultedConfig: F, defaultedRange: ne, defaultedMultiDates: I } = Wa(c), { menuTransition: re, showTransition: ae } = bs(M), { isMobile: oe } = rs(F), se = ie();
		s(() => {
			we(c.modelValue), Se().then(() => {
				P.value.enabled || (_e(y.value)?.addEventListener("scroll", Pe), window?.addEventListener("resize", Fe));
			}), P.value.enabled && (d.value = !0), window?.addEventListener("keyup", Ie), window?.addEventListener("keydown", Le);
		}), be(() => {
			P.value.enabled || (_e(y.value)?.removeEventListener("scroll", Pe), window?.removeEventListener("resize", Fe)), window?.removeEventListener("keyup", Ie), window?.removeEventListener("keydown", Le);
		});
		let le = ys(l, "all", c.presetDates), ue = ys(l, "input");
		E([f, p], () => {
			we(f.value);
		}, { deep: !0 });
		let { openOnTop: fe, menuStyle: me, xCorrect: U, setMenuPosition: he, getScrollableParent: _e, shadowRender: ve } = hs({
			menuRef: m,
			menuRefInner: h,
			inputRef: g,
			pickerWrapperRef: y,
			inline: P,
			emit: a,
			props: c,
			slots: l
		}), { inputValue: xe, internalModelValue: Ce, parseExternalModelValue: we, emitModelValue: Te, formatInputValue: Ee, checkBeforeEmit: De } = Ga(a, c, {
			isInputFocused: _,
			isTextInputDate: w
		}), Oe = V(() => ({
			dp__main: !0,
			dp__theme_dark: c.dark,
			dp__theme_light: !c.dark,
			dp__flex_display: P.value.enabled,
			"dp--flex-display-collapsed": C.value,
			dp__flex_display_with_input: P.value.input
		})), ke = V(() => c.dark ? "dp__theme_dark" : "dp__theme_light"), Ae = V(() => c.teleport ? {
			to: typeof c.teleport == "boolean" ? "body" : c.teleport,
			disabled: !c.teleport || P.value.enabled
		} : {}), je = V(() => ({ class: "dp__outer_menu_wrap" })), Me = V(() => P.value.enabled && (c.timePicker || c.monthPicker || c.yearPicker || c.quarterPicker)), Ne = () => g.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, Pe = () => {
			d.value && (F.value.closeOnScroll ? We() : he());
		}, Fe = () => {
			d.value && he();
			let e = h.value?.$el.getBoundingClientRect().width ?? 0;
			C.value = document.body.offsetWidth <= e;
		}, Ie = (e) => {
			e.key === "Tab" && !P.value.enabled && !c.teleport && F.value.tabOutClosesMenu && (y.value.contains(document.activeElement) || We()), x.value = e.shiftKey;
		}, Le = (e) => {
			x.value = e.shiftKey;
		}, K = () => {
			!c.disabled && !c.readonly && (ve(se, ps, c), he(!1), d.value = !0, d.value && a("open"), d.value || Ue(), we(c.modelValue));
		}, q = () => {
			xe.value = "", Ue(), h.value?.onValueCleared(), g.value?.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), F.value.closeOnClearValue && We();
		}, Re = () => {
			let e = Ce.value;
			return !e || !Array.isArray(e) && A(e) ? !0 : Array.isArray(e) ? I.value.enabled || e.length === 2 && A(e[0]) && A(e[1]) ? !0 : ne.value.partialRange && !c.timePicker ? A(e[0]) : !1 : !1;
		}, ze = () => {
			De() && Re() ? (Te(), We()) : a("invalid-select", Ce.value);
		}, Be = (e) => {
			Ve(), Te(), F.value.closeOnAutoApply && !e && We();
		}, Ve = () => {
			g.value && te.value.enabled && g.value.setParsedDate(Ce.value);
		}, He = (e = !1) => {
			c.autoApply && j(Ce.value) && Re() && (ne.value.enabled && Array.isArray(Ce.value) ? (ne.value.partialRange || Ce.value.length === 2) && Be(e) : Be(e));
		}, Ue = () => {
			te.value.enabled || (Ce.value = null);
		}, We = (e = !1) => {
			e && Ce.value && F.value.setDateOnMenuClose && ze(), P.value.enabled || (d.value && (d.value = !1, U.value = !1, D(!1), O(!1), ee(), a("closed"), xe.value && we(f.value)), Ue(), a("blur"), h.value?.$el?.remove());
		}, Ge = (e, t, n = !1) => {
			if (!e) {
				Ce.value = null;
				return;
			}
			let r = Array.isArray(e) ? !e.some((e) => !A(e)) : A(e), i = j(e);
			r && i ? (w.value = !0, Ce.value = e, t ? (b.value = n, ze(), a("text-submit")) : c.autoApply && He(!0), Se().then(() => {
				w.value = !1;
			})) : a("invalid-date", e);
		}, Ke = () => {
			c.autoApply && j(Ce.value) && Te(), Ve();
		}, qe = () => d.value ? We() : K(), Je = (e) => {
			Ce.value = e;
		}, Ye = () => {
			te.value.enabled && (_.value = !0, Ee()), a("focus");
		}, Xe = () => {
			te.value.enabled && (_.value = !1, we(c.modelValue), b.value && _i(y.value, x.value)?.focus()), a("blur");
		}, Ze = (e) => {
			h.value && h.value.updateMonthYear(0, {
				month: li(e.month),
				year: li(e.year)
			});
		}, Qe = (e) => {
			we(e ?? c.modelValue);
		}, $e = (e, t) => {
			h.value?.switchView(e, t);
		}, et = (e, t) => F.value.onClickOutside ? F.value.onClickOutside(e, t) : We(!0);
		return Fs(m, g, (e) => et(Re, e)), t({
			closeMenu: We,
			selectDate: ze,
			clearValue: q,
			openMenu: K,
			onScroll: Pe,
			formatInputValue: Ee,
			updateInternalModelValue: Je,
			setMonthYear: Ze,
			parseModel: Qe,
			switchView: $e,
			toggleMenu: qe,
			handleFlow: (e = 0) => {
				h.value?.handleFlow(e);
			},
			getDpWrapMenuRef: () => m
		}), (e, t) => (u(), H("div", {
			ref_key: "pickerWrapperRef",
			ref: y,
			class: G(Oe.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": B(oe)
		}, [ce(As, ye({
			ref_key: "inputRef",
			ref: g,
			"input-value": B(xe),
			"onUpdate:inputValue": t[0] ||= (e) => k(xe) ? xe.value = e : null,
			"is-menu-open": d.value
		}, e.$props, {
			onClear: q,
			onOpen: K,
			onSetInputDate: Ge,
			onSetEmptyDate: B(Te),
			onSelectDate: ze,
			onToggle: qe,
			onClose: We,
			onFocus: Ye,
			onBlur: Xe,
			onRealBlur: t[1] ||= (e) => _.value = !1,
			onTextInput: t[2] ||= (t) => e.$emit("text-input", t)
		}), ge({ _: 2 }, [i(B(ue), (t, n) => ({
			name: t,
			fn: T((n) => [z(e.$slots, t, L(pe(n)))])
		}))]), 1040, [
			"input-value",
			"is-menu-open",
			"onSetEmptyDate"
		]), (u(), R(v(e.teleport ? r : "div"), L(pe(Ae.value)), {
			default: T(() => [ce(o, {
				name: B(re)(B(fe)),
				css: B(ae) && !B(P).enabled
			}, {
				default: T(() => [d.value ? (u(), H("div", ye({
					key: 0,
					ref_key: "dpWrapMenuRef",
					ref: m
				}, je.value, {
					class: { "dp--menu-wrapper": !B(P).enabled },
					style: B(P).enabled ? void 0 : B(me)
				}), [ce(ps, ye({
					ref_key: "dpMenuRef",
					ref: h
				}, e.$props, {
					"internal-model-value": B(Ce),
					"onUpdate:internalModelValue": t[3] ||= (e) => k(Ce) ? Ce.value = e : null,
					class: {
						[ke.value]: !0,
						"dp--menu-wrapper": e.teleport
					},
					"open-on-top": B(fe),
					"no-overlay-focus": Me.value,
					collapse: C.value,
					"get-input-rect": Ne,
					"is-text-input-date": w.value,
					onClosePicker: We,
					onSelectDate: ze,
					onAutoApply: He,
					onTimeUpdate: Ke,
					onFlowStep: t[4] ||= (t) => e.$emit("flow-step", t),
					onUpdateMonthYear: t[5] ||= (t) => e.$emit("update-month-year", t),
					onInvalidSelect: t[6] ||= (t) => e.$emit("invalid-select", B(Ce)),
					onAutoApplyInvalid: t[7] ||= (t) => e.$emit("invalid-select", t),
					onInvalidFixedRange: t[8] ||= (t) => e.$emit("invalid-fixed-range", t),
					onRecalculatePosition: B(he),
					onTooltipOpen: t[9] ||= (t) => e.$emit("tooltip-open", t),
					onTooltipClose: t[10] ||= (t) => e.$emit("tooltip-close", t),
					onTimePickerOpen: t[11] ||= (t) => e.$emit("time-picker-open", t),
					onTimePickerClose: t[12] ||= (t) => e.$emit("time-picker-close", t),
					onAmPmChange: t[13] ||= (t) => e.$emit("am-pm-change", t),
					onRangeStart: t[14] ||= (t) => e.$emit("range-start", t),
					onRangeEnd: t[15] ||= (t) => e.$emit("range-end", t),
					onDateUpdate: t[16] ||= (t) => e.$emit("date-update", t),
					onInvalidDate: t[17] ||= (t) => e.$emit("invalid-date", t),
					onOverlayToggle: t[18] ||= (t) => e.$emit("overlay-toggle", t),
					onMenuBlur: t[19] ||= (t) => e.$emit("blur")
				}), ge({ _: 2 }, [i(B(le), (t, n) => ({
					name: t,
					fn: T((n) => [z(e.$slots, t, L(pe({ ...n })))])
				}))]), 1040, [
					"internal-model-value",
					"class",
					"open-on-top",
					"no-overlay-focus",
					"collapse",
					"is-text-input-date",
					"onRecalculatePosition"
				])], 16)) : N("", !0)]),
				_: 3
			}, 8, ["name", "css"])]),
			_: 3
		}, 16))], 10, Is));
	}
}), Rs = /* @__PURE__ */ (() => {
	let e = Ls;
	return e.install = (t) => {
		t.component("Vue3DatePicker", e);
	}, e;
})();
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcTimezonePicker.vue_vue_type_script_setup_true_lang.mjs
Object.entries(/* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: Rs
}, Symbol.toStringTag, { value: "Module" }))).forEach(([e, t]) => {
	e !== "default" && (Rs[e] = t);
}), l(g);
function zs(e) {
	return e.slice(e.indexOf("/") + 1).replaceAll("/", " - ").replaceAll("_", " ");
}
function Bs() {
	return Intl.supportedValuesOf("timeZone").filter((e) => !e.startsWith("Etc/")).map((e) => ({
		timezoneId: e,
		label: zs(e)
	})).sort((e, t) => e.timezoneId.localeCompare(t.timezoneId));
}
var Vs = /* @__PURE__ */ I({
	__name: "NcTimezonePicker",
	props: /* @__PURE__ */ M({
		additionalTimezones: { default: () => [] },
		uid: { default: _e() }
	}, {
		modelValue: { default: "floating" },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = _(e, "modelValue"), n = e, r = V(() => n.additionalTimezones.map(({ timezoneId: e, label: t }) => ({
			timezoneId: e,
			label: t
		}))), i = V(() => {
			let e = Bs();
			return e.unshift(...r.value), e;
		});
		function a(e, t, n) {
			let r = n.trim().split(/\s+/), i = Object.values(e);
			return r.every((e) => i.some((t) => t.toLowerCase().includes(e.toLowerCase())));
		}
		return (n, r) => (u(), R(Te, {
			modelValue: t.value,
			"onUpdate:modelValue": r[0] ||= (e) => t.value = e,
			"aria-label-combobox": B(c)("Search for time zone"),
			clearable: !1,
			filterBy: a,
			multiple: !1,
			options: i.value,
			placeholder: B(c)("Type to search time zone"),
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
}), Hs = {
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
}, Us = (e, t, n) => {
	let r, i = Hs[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ws(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Gs = {
	date: Ws({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Ws({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Ws({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Ks = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, qs = (e, t, n, r) => Ks[e];
function Js(e) {
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
var Ys = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: Js({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: Js({
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
	month: Js({
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
	day: Js({
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
	dayPeriod: Js({
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
function Xs(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Qs(s, (e) => e.test(o)) : Zs(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Zs(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Qs(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function $s(e) {
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
var ec = {
	code: "en-US",
	formatDistance: Us,
	formatLong: Gs,
	formatRelative: qs,
	localize: Ys,
	match: {
		ordinalNumber: $s({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: Xs({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: Xs({
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
		month: Xs({
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
		day: Xs({
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
		dayPeriod: Xs({
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
}, tc = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, nc = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, rc = {
	p: nc,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return tc(e, t);
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
		return a.replace("{{date}}", tc(r, t)).replace("{{time}}", nc(i, t));
	}
}, ic = /^D+$/, ac = /^Y+$/, oc = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function sc(e) {
	return ic.test(e);
}
function cc(e) {
	return ac.test(e);
}
function lc(e, t, n) {
	let r = uc(e, t, n);
	if (console.warn(r), oc.includes(e)) throw RangeError(r);
}
function uc(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
var dc = 6048e5, fc = 6e4, pc = 36e5, mc = 1e3, hc = /* @__PURE__ */ Symbol.for("constructDateFrom");
function gc(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && hc in e ? e[hc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
var _c = {};
function vc() {
	return _c;
}
function yc() {
	return Object.assign({}, vc());
}
function bc(e, t) {
	return gc(t || e, e);
}
function xc(e, t) {
	let n = Sc(t) ? new t(0) : gc(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function Sc(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
var Cc = 10, wc = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, Tc = class extends wc {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, Ec = class extends wc {
	priority = Cc;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => gc(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : gc(e, xc(e, this.context));
	}
}, Dc = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new Tc(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, Oc = class extends Dc {
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
}, kc = {
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
}, Ac = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function jc(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function Mc(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function Nc(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * pc + a * fc + o * mc),
		rest: t.slice(n[0].length)
	};
}
function Pc(e) {
	return Mc(kc.anyDigitsSigned, e);
}
function Fc(e, t) {
	switch (e) {
		case 1: return Mc(kc.singleDigit, t);
		case 2: return Mc(kc.twoDigits, t);
		case 3: return Mc(kc.threeDigits, t);
		case 4: return Mc(kc.fourDigits, t);
		default: return Mc(RegExp("^\\d{1," + e + "}"), t);
	}
}
function Ic(e, t) {
	switch (e) {
		case 1: return Mc(kc.singleDigitSigned, t);
		case 2: return Mc(kc.twoDigitsSigned, t);
		case 3: return Mc(kc.threeDigitsSigned, t);
		case 4: return Mc(kc.fourDigitsSigned, t);
		default: return Mc(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function Lc(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function Rc(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function zc(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
var Bc = class extends Dc {
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
			case "y": return jc(Fc(4, e), r);
			case "yo": return jc(n.ordinalNumber(e, { unit: "year" }), r);
			default: return jc(Fc(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = Rc(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
};
function Vc(e, t) {
	let n = vc(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = bc(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
function Hc(e, t) {
	let n = bc(e, t?.in), r = n.getFullYear(), i = vc(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = gc(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Vc(o, t), c = gc(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Vc(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
var Uc = class extends Dc {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return jc(Fc(4, e), r);
			case "Yo": return jc(n.ordinalNumber(e, { unit: "year" }), r);
			default: return jc(Fc(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = Hc(e, r);
		if (n.isTwoDigitYear) {
			let t = Rc(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Vc(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Vc(e, r);
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
};
function Wc(e, t) {
	return Vc(e, {
		...t,
		weekStartsOn: 1
	});
}
var Gc = class extends Dc {
	priority = 130;
	parse(e, t) {
		return Ic(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = gc(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Wc(r);
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
}, Kc = class extends Dc {
	priority = 130;
	parse(e, t) {
		return Ic(t === "u" ? 4 : t.length, e);
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
}, qc = class extends Dc {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return Fc(t.length, e);
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
}, Jc = class extends Dc {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return Fc(t.length, e);
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
}, Yc = class extends Dc {
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
			case "M": return jc(Mc(kc.month, e), r);
			case "MM": return jc(Fc(2, e), r);
			case "Mo": return jc(n.ordinalNumber(e, { unit: "month" }), r);
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
}, Xc = class extends Dc {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return jc(Mc(kc.month, e), r);
			case "LL": return jc(Fc(2, e), r);
			case "Lo": return jc(n.ordinalNumber(e, { unit: "month" }), r);
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
function Zc(e, t) {
	let n = vc(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Hc(e, t), a = gc(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Vc(a, t);
}
function Qc(e, t) {
	let n = bc(e, t?.in), r = +Vc(n, t) - Zc(n, t);
	return Math.round(r / dc) + 1;
}
function $c(e, t, n) {
	let r = bc(e, n?.in), i = Qc(r, n) - t;
	return r.setDate(r.getDate() - i * 7), bc(r, n?.in);
}
var el = class extends Dc {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return Mc(kc.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return Fc(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return Vc($c(e, n, r), r);
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
function tl(e, t) {
	let n = bc(e, t?.in), r = n.getFullYear(), i = gc(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = Wc(i), o = gc(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = Wc(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function nl(e, t) {
	let n = tl(e, t), r = gc(e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Wc(r);
}
function rl(e, t) {
	let n = bc(e, t?.in), r = +Wc(n) - nl(n);
	return Math.round(r / dc) + 1;
}
function il(e, t, n) {
	let r = bc(e, n?.in), i = rl(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
var al = class extends Dc {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return Mc(kc.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return Fc(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return Wc(il(e, n));
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
}, ol = [
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
], sl = [
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
], cl = class extends Dc {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return Mc(kc.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return Fc(t.length, e);
		}
	}
	validate(e, t) {
		let n = zc(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= sl[r] : t >= 1 && t <= ol[r];
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
}, ll = class extends Dc {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return Mc(kc.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return Fc(t.length, e);
		}
	}
	validate(e, t) {
		return zc(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
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
function ul(e, t, n) {
	let r = bc(e, n?.in);
	return isNaN(t) ? gc(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function dl(e, t, n) {
	let r = vc(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = bc(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return ul(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
var fl = class extends Dc {
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
		return e = dl(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, pl = class extends Dc {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return jc(Fc(t.length, e), i);
			case "eo": return jc(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = dl(e, n, r), e.setHours(0, 0, 0, 0), e;
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
}, ml = class extends Dc {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return jc(Fc(t.length, e), i);
			case "co": return jc(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = dl(e, n, r), e.setHours(0, 0, 0, 0), e;
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
function hl(e, t) {
	let n = bc(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
function gl(e, t, n) {
	let r = bc(e, n?.in);
	return ul(r, t - hl(r, n), n);
}
var _l = class extends Dc {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return Fc(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return jc(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return jc(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return jc(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return jc(n.day(e, {
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
		return e = gl(e, n), e.setHours(0, 0, 0, 0), e;
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
}, vl = class extends Dc {
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
		return e.setHours(Lc(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, yl = class extends Dc {
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
		return e.setHours(Lc(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, bl = class extends Dc {
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
		return e.setHours(Lc(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, xl = class extends Dc {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return Mc(kc.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Fc(t.length, e);
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
}, Sl = class extends Dc {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return Mc(kc.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Fc(t.length, e);
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
}, Cl = class extends Dc {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return Mc(kc.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Fc(t.length, e);
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
}, wl = class extends Dc {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return Mc(kc.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Fc(t.length, e);
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
}, Tl = class extends Dc {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return Mc(kc.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return Fc(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, El = class extends Dc {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return Mc(kc.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return Fc(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, Dl = class extends Dc {
	priority = 30;
	parse(e, t) {
		return jc(Fc(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
};
function Ol(e) {
	let t = bc(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), +e - n;
}
var kl = class extends Dc {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return Nc(Ac.basicOptionalMinutes, e);
			case "XX": return Nc(Ac.basic, e);
			case "XXXX": return Nc(Ac.basicOptionalSeconds, e);
			case "XXXXX": return Nc(Ac.extendedOptionalSeconds, e);
			default: return Nc(Ac.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : gc(e, e.getTime() - Ol(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, Al = class extends Dc {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return Nc(Ac.basicOptionalMinutes, e);
			case "xx": return Nc(Ac.basic, e);
			case "xxxx": return Nc(Ac.basicOptionalSeconds, e);
			case "xxxxx": return Nc(Ac.extendedOptionalSeconds, e);
			default: return Nc(Ac.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : gc(e, e.getTime() - Ol(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, jl = class extends Dc {
	priority = 40;
	parse(e) {
		return Pc(e);
	}
	set(e, t, n) {
		return [gc(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, Ml = class extends Dc {
	priority = 20;
	parse(e) {
		return Pc(e);
	}
	set(e, t, n) {
		return [gc(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, Nl = {
	G: new Oc(),
	y: new Bc(),
	Y: new Uc(),
	R: new Gc(),
	u: new Kc(),
	Q: new qc(),
	q: new Jc(),
	M: new Yc(),
	L: new Xc(),
	w: new el(),
	I: new al(),
	d: new cl(),
	D: new ll(),
	E: new fl(),
	e: new pl(),
	c: new ml(),
	i: new _l(),
	a: new vl(),
	b: new yl(),
	B: new bl(),
	h: new xl(),
	H: new Sl(),
	K: new Cl(),
	k: new wl(),
	m: new Tl(),
	s: new El(),
	S: new Dl(),
	X: new kl(),
	x: new Al(),
	t: new jl(),
	T: new Ml()
}, Pl = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fl = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Il = /^'([^]*?)'?$/, Ll = /''/g, Rl = /\S/, zl = /[a-zA-Z]/;
function Bl(e, t, n, r) {
	let i = () => gc(r?.in || n, NaN), a = yc(), o = r?.locale ?? a.locale ?? ec, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : bc(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new Ec(r?.in, n)], d = t.match(Fl).map((e) => {
		let t = e[0];
		if (t in rc) {
			let n = rc[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(Pl), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && cc(n) && lc(n, t, e), !r?.useAdditionalDayOfYearTokens && sc(n) && lc(n, t, e);
		let a = n[0], s = Nl[a];
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
			if (a.match(zl)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = Vl(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && Rl.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = bc(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function Vl(e) {
	return e.match(Il)[1].replace(Ll, "'");
}
l(se);
function Hl(e) {
	return e.code.split("-")[0] === "de" ? "P" : "PP";
}
function Ul() {
	return "p";
}
function Wl(e) {
	return Hl(e) + Ul();
}
function Gl() {
	return "RRRR-II";
}
function Kl(e) {
	return Jl(e.code, !0);
}
function ql(e) {
	return Jl(e.code, !1);
}
function Jl(e, t) {
	let n = new Date(2026, 0, 1), r = {
		year: "numeric",
		calendar: "gregory"
	};
	return t && (r.month = "2-digit"), Intl.DateTimeFormat(e, r).formatToParts(n).map((e) => {
		switch (e.type) {
			case "month": return "MM";
			case "year": return "yyyy";
			case "literal": return Yl(e.value);
			default: return "";
		}
	}).join("");
}
function Yl(e) {
	return e = e.replaceAll(/'/g, "''"), e.replaceAll(/[A-Za-z]+/g, (e) => `'${e}'`);
}
var $ = {};
$.af = async () => (await import("./af-iMfA3J11.chunk.mjs")).af, $["ar-DZ"] = async () => (await import("./ar-DZ-C9Rt1y36.chunk.mjs")).arDZ, $["ar-EG"] = async () => (await import("./ar-EG-DVcqrWq7.chunk.mjs")).arEG, $["ar-MA"] = async () => (await import("./ar-MA-SzaopgQ7.chunk.mjs")).arMA, $["ar-SA"] = async () => (await import("./ar-SA-DLtq0rFe.chunk.mjs")).arSA, $["ar-TN"] = async () => (await import("./ar-TN-C1waZL9P.chunk.mjs")).arTN, $.ar = async () => (await import("./ar-AlY-QF4a.chunk.mjs")).ar, $.az = async () => (await import("./az-CizghbDx.chunk.mjs")).az, $["be-tarask"] = async () => (await import("./be-tarask-BvRk9kiK.chunk.mjs")).beTarasak, $.be = async () => (await import("./be-DEY41ugl.chunk.mjs")).be, $.bg = async () => (await import("./bg-C5sghpxX.chunk.mjs")).bg, $.bn = async () => (await import("./bn-CfrqSRLw.chunk.mjs")).bn, $.bs = async () => (await import("./bs-D-IXtP-n.chunk.mjs")).bs, $.ca = async () => (await import("./ca-DebEfIrI.chunk.mjs")).ca, $.ckb = async () => (await import("./ckb-D653CBCM.chunk.mjs")).ckb, $.cs = async () => (await import("./cs-i6c5UV-K.chunk.mjs")).cs, $.cy = async () => (await import("./cy-IZI71KRd.chunk.mjs")).cy, $.da = async () => (await import("./da-CUgXCR3C.chunk.mjs")).da, $["de-AT"] = async () => (await import("./de-AT-BWVbAUXU.chunk.mjs")).deAT, $.de = async () => (await import("./de-DQLwOFwi.chunk.mjs")).de, $.el = async () => (await import("./el-ML0krVA7.chunk.mjs")).el, $["en-AU"] = async () => (await import("./en-AU-BtwG09WD.chunk.mjs")).enAU, $["en-CA"] = async () => (await import("./en-CA-Bf_7587v.chunk.mjs")).enCA, $["en-GB"] = async () => (await import("./en-GB-F70tPUvG.chunk.mjs")).enGB, $["en-IE"] = async () => (await import("./en-IE-D8l8BKWl.chunk.mjs")).enIE, $["en-IN"] = async () => (await import("./en-IN-K-NlMiNx.chunk.mjs")).enIN, $["en-NZ"] = async () => (await import("./en-NZ-CpC818I3.chunk.mjs")).enNZ, $["en-ZA"] = async () => (await import("./en-ZA-Cp-uor4q.chunk.mjs")).enZA, $.eo = async () => (await import("./eo-C3QHo_Ak.chunk.mjs")).eo, $.es = async () => (await import("./es-DDJ2ikkF.chunk.mjs")).es, $.et = async () => (await import("./et-WZi_Sb3b.chunk.mjs")).et, $.eu = async () => (await import("./eu-DB3wiZ-D.chunk.mjs")).eu, $["fa-IR"] = async () => (await import("./fa-IR-DfXE2G0N.chunk.mjs")).faIR, $.fi = async () => (await import("./fi-xEvJMHmm.chunk.mjs")).fi, $["fr-CA"] = async () => (await import("./fr-CA-CFI11q5V.chunk.mjs")).frCA, $["fr-CH"] = async () => (await import("./fr-CH-BfW3WYC9.chunk.mjs")).frCH, $.fr = async () => (await import("./fr-DdKCpOqb.chunk.mjs")).fr, $.fy = async () => (await import("./fy-De0w19Nz.chunk.mjs")).fy, $.gd = async () => (await import("./gd-BSNiqHuP.chunk.mjs")).gd, $.gl = async () => (await import("./gl-BoIfWOAY.chunk.mjs")).gl, $.gu = async () => (await import("./gu-DqW9-eau.chunk.mjs")).gu, $.he = async () => (await import("./he-DwPyNI9Z.chunk.mjs")).he, $.hi = async () => (await import("./hi-BoiQHZOu.chunk.mjs")).hi, $.hr = async () => (await import("./hr-CuUitgB_.chunk.mjs")).hr, $.ht = async () => (await import("./ht-D6JMNeN_.chunk.mjs")).ht, $.hu = async () => (await import("./hu-CAEuqWMr.chunk.mjs")).hu, $.hy = async () => (await import("./hy-oPL5B1ZX.chunk.mjs")).hy, $.id = async () => (await import("./id-BjMvdrf2.chunk.mjs")).id, $.is = async () => (await import("./is-CjhsHPke.chunk.mjs")).is, $["it-CH"] = async () => (await import("./it-CH-5QqkjInq.chunk.mjs")).itCH, $.it = async () => (await import("./it-B-5V38v4.chunk.mjs")).it, $["ja-Hira"] = async () => (await import("./ja-Hira-Dn_ccPfg.chunk.mjs")).jaHira, $.ja = async () => (await import("./ja-Hg__hxFc.chunk.mjs")).ja, $.ka = async () => (await import("./ka-CdY7yiIj.chunk.mjs")).ka, $.kk = async () => (await import("./kk-DcPi57iF.chunk.mjs")).kk, $.km = async () => (await import("./km-DRc5OX5T.chunk.mjs")).km, $.kn = async () => (await import("./kn-BGM1iRzT.chunk.mjs")).kn, $.ko = async () => (await import("./ko-YCvNT3o-.chunk.mjs")).ko, $.lb = async () => (await import("./lb-C4a5PzHO.chunk.mjs")).lb, $.lt = async () => (await import("./lt-BtlqPSTj.chunk.mjs")).lt, $.lv = async () => (await import("./lv-BO-vSjGx.chunk.mjs")).lv, $.mk = async () => (await import("./mk-BPJ7Om0m.chunk.mjs")).mk, $.mn = async () => (await import("./mn-Cnr_1wJv.chunk.mjs")).mn, $.ms = async () => (await import("./ms-BMPu8UNq.chunk.mjs")).ms, $.mt = async () => (await import("./mt-Cl5fs1WC.chunk.mjs")).mt, $.nb = async () => (await import("./nb-BM2XXQm0.chunk.mjs")).nb, $["nl-BE"] = async () => (await import("./nl-BE-B6fD0VfT.chunk.mjs")).nlBE, $.nl = async () => (await import("./nl-6V7WmmOF.chunk.mjs")).nl, $.nn = async () => (await import("./nn-CXUkSxzC.chunk.mjs")).nn, $.oc = async () => (await import("./oc-aHmu6tSs.chunk.mjs")).oc, $.pl = async () => (await import("./pl-BOO4__EC.chunk.mjs")).pl, $["pt-BR"] = async () => (await import("./pt-BR-CQ24slKR.chunk.mjs")).ptBR, $.pt = async () => (await import("./pt-knzfMONl.chunk.mjs")).pt, $.ro = async () => (await import("./ro-DPqSt5j1.chunk.mjs")).ro, $.ru = async () => (await import("./ru-DC-WqqQo.chunk.mjs")).ru, $.se = async () => (await import("./se-BMoQtM66.chunk.mjs")).se, $.sk = async () => (await import("./sk-D7YdNp6G.chunk.mjs")).sk, $.sl = async () => (await import("./sl-CWUeAagL.chunk.mjs")).sl, $.sq = async () => (await import("./sq-DBa3OHTi.chunk.mjs")).sq, $["sr-Latn"] = async () => (await import("./sr-Latn-DZrIXtg2.chunk.mjs")).srLatn, $.sr = async () => (await import("./sr-CtncIy66.chunk.mjs")).sr, $.sv = async () => (await import("./sv-rJYSgpf9.chunk.mjs")).sv, $.ta = async () => (await import("./ta-DsiqVk4W.chunk.mjs")).ta, $.te = async () => (await import("./te-CkSTrYxv.chunk.mjs")).te, $.th = async () => (await import("./th-CLSu0vGl.chunk.mjs")).th, $.tr = async () => (await import("./tr-nIS26eJ9.chunk.mjs")).tr, $.ug = async () => (await import("./ug-PoCuopys.chunk.mjs")).ug, $.uk = async () => (await import("./uk-BLwFu8zn.chunk.mjs")).uk, $["uz-Cyrl"] = async () => (await import("./uz-Cyrl-WWIb3qvj.chunk.mjs")).uzCyrl, $.uz = async () => (await import("./uz-Nx0-7x_Q.chunk.mjs")).uz, $.vi = async () => (await import("./vi-DE9AXszy.chunk.mjs")).vi, $["zh-CN"] = async () => (await import("./zh-CN-CiDAGowG.chunk.mjs")).zhCN, $["zh-HK"] = async () => (await import("./zh-HK-DrR5ReEk.chunk.mjs")).zhHK, $["zh-TW"] = async () => (await import("./zh-TW-BkYnARe0.chunk.mjs")).zhTW;
var Xl = Ct, Zl;
function Ql() {
	let e = w();
	if (e === Xl.code) return {
		isLoading: W(!1),
		locale: W(Xl)
	};
	if (Zl === void 0 && (Zl = $l(e)), Zl instanceof Promise) {
		let e = W(!0), t = W(Xl);
		return Zl.then((n) => {
			Zl = n, e.value = !1, t.value = Zl;
		}), {
			isLoading: e,
			locale: t
		};
	}
	return {
		isLoading: W(!1),
		locale: W(Zl)
	};
}
async function $l(e) {
	if (e in $) try {
		return await $[e]();
	} catch (n) {
		return t.warn("Failed to load locale.", {
			localeCode: e,
			error: n
		}), Xl;
	}
	if (e.includes("-")) {
		let t = e.split("-")[0];
		return $l(t);
	}
	return t.warn("Found no locale to load.", { localeCode: e }), Xl;
}
var eu = { class: "vue-date-time-picker__wrapper" }, tu = {
	ref: "target",
	class: "vue-date-time-picker__wrapper vue-date-time-picker__wrapper--teleport"
}, nu = /* @__PURE__ */ I({
	__name: "NcDateTimePicker",
	props: /* @__PURE__ */ M({
		appendToBody: { type: Boolean },
		ariaLabel: { default: c("Datepicker input") },
		ariaLabelMenu: { default: c("Datepicker menu") },
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
	emits: /* @__PURE__ */ M([
		"update:modelValue",
		"update:timezoneId",
		"blur"
	], ["update:timezoneId"]),
	setup(e, { emit: t }) {
		let n = _(e, "timezoneId"), i = e, o = t, s = w();
		d(() => {
			i.locale !== void 0 && a("[NcDateTimePicker] The `locale` property is no longer used and will be ignored.");
		});
		let l = we("target"), f = we("picker"), p = V(() => {
			if (i.modelValue === null && i.clearable) return null;
			if (i.type === "week") {
				let e = i.modelValue instanceof Date ? i.modelValue : /* @__PURE__ */ new Date(), t = new Date(e);
				return t.setUTCDate(e.getUTCDate() + 6), [e, t];
			}
			if (i.type === "year") return (i.modelValue instanceof Date ? i.modelValue : /* @__PURE__ */ new Date()).getUTCFullYear();
			if (i.type === "month") {
				let e = i.modelValue instanceof Date ? i.modelValue : /* @__PURE__ */ new Date();
				return {
					year: e.getUTCFullYear(),
					month: e.getUTCMonth()
				};
			}
			if (i.type === "time") {
				let e = i.modelValue instanceof Date ? i.modelValue : /* @__PURE__ */ new Date();
				return {
					hours: e.getHours(),
					minutes: e.getMinutes(),
					seconds: e.getSeconds()
				};
			}
			if (i.type === "time-range") {
				let e = [i.modelValue].flat();
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
			if (i.type.endsWith("-range")) {
				if (i.modelValue === void 0) {
					let e = /* @__PURE__ */ new Date(), t = new Date(e);
					return t.setUTCDate(e.getUTCDate() + 7), [e, t];
				}
				return i.modelValue;
			}
			return i.modelValue ?? /* @__PURE__ */ new Date();
		}), m = V(() => i.type === "date" ? c("Select date") : i.type === "time" ? c("Select time") : i.type === "datetime" ? c("Select date and time") : i.type === "week" ? c("Select week") : i.type === "month" ? c("Select month") : i.type === "year" ? c("Select year") : i.type.endsWith("-range") ? c("Select time range") : c("Select date and time")), { isLoading: h, locale: g } = Ql();
		E(g, () => {
			f.value?.parseModel();
		}, { flush: "post" });
		let v = V(() => {
			if (i.format) return i.format;
			switch (i.type) {
				case "date":
				case "date-range": return Hl(g.value);
				case "time":
				case "time-range": return Ul();
				case "datetime":
				case "datetime-range": return Wl(g.value);
				case "month": return Kl(g.value);
				case "year": return ql(g.value);
				case "week": return Gl();
			}
		}), y = V(() => {
			let e = v.value;
			return typeof e == "function" ? !1 : typeof e != "string" || { format: (t) => Bl(t, e, /* @__PURE__ */ new Date(), { locale: g.value }) };
		}), b = V(() => ({
			timePicker: i.type === "time" || i.type === "time-range",
			yearPicker: i.type === "year",
			monthPicker: i.type === "month",
			weekPicker: i.type === "week",
			range: i.type.endsWith("-range") && { partialRange: !1 },
			enableTimePicker: i.type === "datetime" || i.type === "datetime-range",
			flow: i.type === "datetime" ? ["calendar", "time"] : void 0
		})), x = V(() => i.min && {
			hours: i.min.getHours(),
			minutes: i.min.getMinutes(),
			seconds: i.min.getSeconds()
		}), S = V(() => i.max && {
			hours: i.max.getHours(),
			minutes: i.max.getMinutes(),
			seconds: i.max.getSeconds()
		});
		function C(e) {
			if (e === null) return o("update:modelValue", null);
			if (i.type === "time") o("update:modelValue", D(e));
			else if (i.type === "time-range") {
				let t = D(e[0]), n = D(e[1]);
				n.getTime() < t.getTime() && n.setDate(n.getDate() + 1), o("update:modelValue", [t, n]);
			} else if (i.type === "month") {
				let t = e;
				o("update:modelValue", new Date(t.year, t.month, 1));
			} else i.type === "year" ? o("update:modelValue", new Date(e, 0)) : i.type === "week" ? o("update:modelValue", e[0]) : o("update:modelValue", e);
		}
		function D(e) {
			let t = /* @__PURE__ */ new Date();
			return t.setHours(e.hours), t.setMinutes(e.minutes), t.setSeconds(e.seconds), t;
		}
		let k = xe(), ee = [...te()];
		for (let e = 0; e < k; e++) ee.push(ee.shift());
		let A = c("W"), M = V(() => ({
			toggleOverlay: c("Toggle overlay"),
			menu: i.ariaLabelMenu,
			input: i.ariaLabel,
			openTimePicker: c("Open time picker"),
			closeTimePicker: c("Close time Picker"),
			incrementValue: (e) => c(e === "hours" ? "Increment hours" : e === "minutes" ? "Increment minutes" : "Increment seconds"),
			decrementValue: (e) => c(e === "hours" ? "Decrement hours" : e === "minutes" ? "Decrement minutes" : "Decrement seconds"),
			openTpOverlay: (e) => c(e === "hours" ? "Open hours overlay" : e === "minutes" ? "Open minutes overlay" : "Open seconds overlay"),
			amPmButton: c("Switch AM/PM mode"),
			openYearsOverlay: c("Open years overlay"),
			openMonthsOverlay: c("Open months overlay"),
			nextMonth: c("Next month"),
			prevMonth: c("Previous month"),
			nextYear: c("Next year"),
			prevYear: c("Previous year"),
			weekDay: (e) => Ce()[e],
			clearInput: c("Clear value"),
			calendarIcon: c("Calendar icon"),
			timePicker: c("Time picker"),
			monthPicker: (e) => c(e ? "Month picker overlay" : "Month picker"),
			yearPicker: (e) => c(e ? "Year picker overlay" : "Year picker")
		}));
		function N() {
			f.value.selectDate();
		}
		function F() {
			f.value.closeMenu();
		}
		let I = V(() => i.type === "datetime" ? {
			minDate: i.min,
			maxDate: i.max,
			minTime: i.min && p.value && L(i.min, p.value) ? x.value : void 0,
			maxTime: i.max && p.value && L(i.max, p.value) ? S.value : void 0
		} : i.type === "datetime-range" ? {
			minDate: i.min,
			maxDate: i.max,
			minTime: i.min && p.value && L(i.min, p.value[0]) ? x.value : void 0,
			maxTime: i.max && p.value && L(i.max, p.value[1]) ? S.value : void 0
		} : i.type === "time" || i.type === "time-range" ? {
			minTime: i.min ? x.value : void 0,
			maxTime: i.max ? S.value : void 0
		} : {
			minDate: i.min,
			maxDate: i.max
		});
		function L(e, t) {
			return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
		}
		return (t, i) => (u(), H("div", eu, [ce(B(Rs), ye({
			ref: "picker",
			"aria-labels": M.value,
			autoApply: !e.confirm,
			class: ["vue-date-time-picker", { "vue-date-time-picker--clearable": e.clearable }],
			cancelText: B(c)("Cancel"),
			clearable: e.clearable,
			dayNames: ee,
			placeholder: e.placeholder ?? m.value,
			format: v.value,
			locale: B(s),
			formatLocale: B(g),
			readonly: B(h),
			minDate: I.value.minDate,
			maxDate: I.value.maxDate,
			minTime: I.value.minTime,
			maxTime: I.value.maxTime,
			minutesIncrement: e.minuteStep,
			modelValue: p.value,
			nowButtonLabel: B(c)("Now"),
			selectText: B(c)("Pick"),
			sixWeeks: "fair",
			inline: e.inline,
			teleport: e.appendToBody ? l.value || void 0 : !1,
			textInput: y.value,
			weekNumName: B(A),
			weekNumbers: e.showWeekNumber ? { type: "iso" } : void 0,
			weekStart: B(k)
		}, b.value, {
			"onUpdate:modelValue": C,
			onBlur: i[1] ||= (e) => o("blur")
		}), ge({
			"action-buttons": T(() => [ce(B(j), {
				size: "small",
				variant: "tertiary",
				onClick: F
			}, {
				default: T(() => [P(me(B(c)("Cancel")), 1)]),
				_: 1
			}), ce(B(j), {
				size: "small",
				variant: "primary",
				onClick: N
			}, {
				default: T(() => [P(me(B(c)("Pick")), 1)]),
				_: 1
			})]),
			"clear-icon": T(({ clear: e }) => [ce(B(j), {
				"aria-label": B(c)("Clear value"),
				variant: "tertiary-no-background",
				onClick: e
			}, {
				icon: T(() => [ce(O, {
					inline: "",
					path: B(oe),
					size: 20
				}, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "onClick"])]),
			"input-icon": T(() => [ce(O, {
				path: B(he),
				size: 20
			}, null, 8, ["path"])]),
			"clock-icon": T(() => [ce(O, {
				inline: "",
				path: B(le),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-left": T(() => [ce(O, {
				inline: "",
				path: B(ne),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-right": T(() => [ce(O, {
				inline: "",
				path: B(re),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-down": T(() => [ce(O, {
				inline: "",
				path: B(ve),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-up": T(() => [ce(O, {
				inline: "",
				path: B(fe),
				size: 20
			}, null, 8, ["path"])]),
			_: 2
		}, [e.showTimezoneSelect ? {
			name: "action-extra",
			fn: T(() => [ce(Vs, {
				modelValue: n.value,
				"onUpdate:modelValue": i[0] ||= (e) => n.value = e,
				class: "vue-date-time-picker__timezone",
				appendToBody: !1,
				inputLabel: B(c)("Time zone")
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
			"formatLocale",
			"readonly",
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
			"textInput",
			"weekNumName",
			"weekNumbers",
			"weekStart"
		]), (u(), R(r, {
			to: "body",
			disabled: !e.appendToBody
		}, [U("div", tu, null, 512)], 8, ["disabled"]))]));
	}
}), ru = /* @__PURE__ */ y(nu, [["__scopeId", "data-v-ed61636a"]]), iu = /* @__PURE__ */ e({ default: () => ru });
//#endregion
export { _t as a, q as c, ru as default, bt as i, St as n, Ye as o, xt as r, Ge as s, iu as t };
