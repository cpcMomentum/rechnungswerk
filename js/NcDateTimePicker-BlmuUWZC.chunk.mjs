import { g as e, t } from "./logger-Dmvqkkgn.chunk.mjs";
import { $t as n, Bn as r, Bt as i, Cn as a, D as o, E as s, En as c, Gn as l, Hn as u, Ht as d, In as f, Jt as p, K as m, Kn as h, Mn as g, Nn as _, On as v, Q as y, Qn as b, Qt as x, Rn as S, St as C, Tn as w, Un as T, Vn as E, Wn as D, X as O, Xn as k, Xt as A, Yt as j, Z as M, _n as N, an as P, bt as ee, cn as te, cr as ne, d as re, dn as F, dr as I, er as L, f as ie, fn as ae, fr as R, h as oe, hr as se, in as z, k as ce, ln as B, m as le, mn as ue, mr as de, nn as V, on as H, p as fe, pn as pe, pr as me, rn as U, rr as W, s as he, sn as ge, t as _e, tr as ve, u as ye, ur as be, vn as xe, xt as Se, yn as Ce, yt as we, zn as Te } from "./createElementId-BhyzukIw.chunk.mjs";
import { t as Ee } from "./NcSelect-C6R5-Zbo.chunk.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./buildMatchPatternFn-DQMsT4gp.chunk.mjs";
//#region node_modules/date-fns/constants.js
var je = 365.2425, Me = 6048e5, Ne = 864e5, Pe = 6e4, Fe = 36e5, Ie = 1e3, Le = 86400;
Le * 7, Le * je / 12 * 3;
var Re = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/date-fns/constructFrom.js
function G(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && Re in e ? e[Re](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/date-fns/toDate.js
function K(e, t) {
	return G(t || e, e);
}
//#endregion
//#region node_modules/date-fns/addDays.js
function ze(e, t, n) {
	let r = K(e, n?.in);
	return isNaN(t) ? G(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/date-fns/addMonths.js
function Be(e, t, n) {
	let r = K(e, n?.in);
	if (isNaN(t)) return G(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = G(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region node_modules/date-fns/add.js
function Ve(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = K(e, n?.in), d = i || r ? Be(u, i + r * 12) : u, f = o || a ? ze(d, o + a * 7) : d, p = (l + (c + s * 60) * 60) * 1e3;
	return G(n?.in || e, +f + p);
}
//#endregion
//#region node_modules/date-fns/addMilliseconds.js
function He(e, t, n) {
	return G(n?.in || e, +K(e) + t);
}
//#endregion
//#region node_modules/date-fns/addHours.js
function Ue(e, t, n) {
	return He(e, t * Fe, n);
}
//#endregion
//#region node_modules/date-fns/_lib/defaultOptions.js
var We = {};
function Ge() {
	return We;
}
//#endregion
//#region node_modules/date-fns/startOfWeek.js
function Ke(e, t) {
	let n = Ge(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = K(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/date-fns/startOfISOWeek.js
function qe(e, t) {
	return Ke(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/date-fns/getISOWeekYear.js
function Je(e, t) {
	let n = K(e, t?.in), r = n.getFullYear(), i = G(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = qe(i), o = G(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = qe(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function Ye(e) {
	let t = K(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), +e - n;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeDates.js
function Xe(e, ...t) {
	let n = G.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/date-fns/startOfDay.js
function Ze(e, t) {
	let n = K(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarDays.js
function Qe(e, t, n) {
	let [r, i] = Xe(n?.in, e, t), a = Ze(r), o = Ze(i), s = +a - Ye(a), c = +o - Ye(o);
	return Math.round((s - c) / Ne);
}
//#endregion
//#region node_modules/date-fns/startOfISOWeekYear.js
function $e(e, t) {
	let n = Je(e, t), r = G(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), qe(r);
}
//#endregion
//#region node_modules/date-fns/addQuarters.js
function et(e, t, n) {
	return Be(e, t * 3, n);
}
//#endregion
//#region node_modules/date-fns/addYears.js
function tt(e, t, n) {
	return Be(e, t * 12, n);
}
//#endregion
//#region node_modules/date-fns/compareAsc.js
function nt(e, t) {
	let n = +K(e) - K(t);
	return n < 0 ? -1 : n > 0 ? 1 : n;
}
//#endregion
//#region node_modules/date-fns/isDate.js
function rt(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/date-fns/isValid.js
function it(e) {
	return !(!rt(e) && typeof e != "number" || isNaN(+K(e)));
}
//#endregion
//#region node_modules/date-fns/getQuarter.js
function at(e, t) {
	let n = K(e, t?.in);
	return Math.trunc(n.getMonth() / 3) + 1;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarYears.js
function ot(e, t, n) {
	let [r, i] = Xe(n?.in, e, t);
	return r.getFullYear() - i.getFullYear();
}
//#endregion
//#region node_modules/date-fns/differenceInYears.js
function st(e, t, n) {
	let [r, i] = Xe(n?.in, e, t), a = nt(r, i), o = Math.abs(ot(r, i));
	r.setFullYear(1584), i.setFullYear(1584);
	let s = a * (o - +(nt(r, i) === -a));
	return s === 0 ? 0 : s;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeInterval.js
function ct(e, t) {
	let [n, r] = Xe(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region node_modules/date-fns/eachDayOfInterval.js
function lt(e, t) {
	let { start: n, end: r } = ct(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
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
function ut(e, t) {
	let n = K(e, t?.in), r = n.getMonth(), i = r - r % 3;
	return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/eachQuarterOfInterval.js
function dt(e, t) {
	let { start: n, end: r } = ct(t?.in, e), i = +n > +r, a = i ? +ut(n) : +ut(r), o = ut(i ? r : n), s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(G(n, o)), o = et(o, s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/date-fns/startOfMonth.js
function ft(e, t) {
	let n = K(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/endOfYear.js
function pt(e, t) {
	let n = K(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/date-fns/startOfYear.js
function mt(e, t) {
	let n = K(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/endOfWeek.js
function ht(e, t) {
	let n = Ge(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = K(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region node_modules/date-fns/endOfQuarter.js
function gt(e, t) {
	let n = K(e, t?.in), r = n.getMonth(), i = r - r % 3 + 3;
	return n.setMonth(i, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var _t = {
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
}, vt = (e, t, n) => {
	let r, i = _t[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, yt = {
	date: De({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: De({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: De({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, bt = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, xt = (e, t, n, r) => bt[e], St = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: ke({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: ke({
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
	month: ke({
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
	day: ke({
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
	dayPeriod: ke({
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
}, Ct = {
	ordinalNumber: Ae({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: Oe({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: Oe({
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
	month: Oe({
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
	day: Oe({
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
	dayPeriod: Oe({
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
}, wt = {
	code: "en-US",
	formatDistance: vt,
	formatLong: yt,
	formatRelative: xt,
	localize: St,
	match: Ct,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/date-fns/getDayOfYear.js
function Tt(e, t) {
	let n = K(e, t?.in);
	return Qe(n, mt(n)) + 1;
}
//#endregion
//#region node_modules/date-fns/getISOWeek.js
function Et(e, t) {
	let n = K(e, t?.in), r = +qe(n) - $e(n);
	return Math.round(r / Me) + 1;
}
//#endregion
//#region node_modules/date-fns/getWeekYear.js
function Dt(e, t) {
	let n = K(e, t?.in), r = n.getFullYear(), i = Ge(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = G(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Ke(o, t), c = G(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Ke(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/date-fns/startOfWeekYear.js
function Ot(e, t) {
	let n = Ge(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Dt(e, t), a = G(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Ke(a, t);
}
//#endregion
//#region node_modules/date-fns/getWeek.js
function kt(e, t) {
	let n = K(e, t?.in), r = +Ke(n, t) - Ot(n, t);
	return Math.round(r / Me) + 1;
}
//#endregion
//#region node_modules/date-fns/_lib/addLeadingZeros.js
function At(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/date-fns/_lib/format/lightFormatters.js
var jt = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return At(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : At(n + 1, 2);
	},
	d(e, t) {
		return At(e.getDate(), t.length);
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
		return At(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return At(e.getHours(), t.length);
	},
	m(e, t) {
		return At(e.getMinutes(), t.length);
	},
	s(e, t) {
		return At(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return At(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, Mt = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Nt = {
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
		return jt.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = Dt(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? At(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : At(a, t.length);
	},
	R: function(e, t) {
		return At(Je(e), t.length);
	},
	u: function(e, t) {
		return At(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return At(r, 2);
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
			case "qq": return At(r, 2);
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
			case "MM": return jt.M(e, t);
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
			case "LL": return At(r + 1, 2);
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
		let i = kt(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : At(i, t.length);
	},
	I: function(e, t, n) {
		let r = Et(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : At(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : jt.d(e, t);
	},
	D: function(e, t, n) {
		let r = Tt(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : At(r, t.length);
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
			case "ee": return At(a, 2);
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
			case "cc": return At(a, t.length);
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
			case "ii": return At(i, t.length);
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
		switch (i = r === 12 ? Mt.noon : r === 0 ? Mt.midnight : r / 12 >= 1 ? "pm" : "am", t) {
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
		switch (i = r >= 17 ? Mt.evening : r >= 12 ? Mt.afternoon : r >= 4 ? Mt.morning : Mt.night, t) {
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
		return jt.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : jt.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : At(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : At(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : jt.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : jt.s(e, t);
	},
	S: function(e, t) {
		return jt.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Ft(r);
			case "XXXX":
			case "XX": return It(r);
			default: return It(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Ft(r);
			case "xxxx":
			case "xx": return It(r);
			default: return It(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Pt(r, ":");
			default: return "GMT" + It(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Pt(r, ":");
			default: return "GMT" + It(r, ":");
		}
	},
	t: function(e, t, n) {
		return At(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return At(+e, t.length);
	}
};
function Pt(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + At(a, 2);
}
function Ft(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + At(Math.abs(e) / 60, 2) : It(e, t);
}
function It(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = At(Math.trunc(r / 60), 2), a = At(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/date-fns/_lib/format/longFormatters.js
var Lt = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, Rt = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, zt = {
	p: Rt,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Lt(e, t);
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
		return a.replace("{{date}}", Lt(r, t)).replace("{{time}}", Rt(i, t));
	}
}, Bt = /^D+$/, Vt = /^Y+$/, Ht = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function Ut(e) {
	return Bt.test(e);
}
function Wt(e) {
	return Vt.test(e);
}
function Gt(e, t, n) {
	let r = Kt(e, t, n);
	if (console.warn(r), Ht.includes(e)) throw RangeError(r);
}
function Kt(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/date-fns/format.js
var qt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Jt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Yt = /^'([^]*?)'?$/, Xt = /''/g, Zt = /[a-zA-Z]/;
function Qt(e, t, n) {
	let r = Ge(), i = n?.locale ?? r.locale ?? wt, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = K(e, n?.in);
	if (!it(s)) throw RangeError("Invalid time value");
	let c = t.match(Jt).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = zt[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(qt).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: $t(e)
		};
		if (Nt[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(Zt)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && Wt(a) || !n?.useAdditionalDayOfYearTokens && Ut(a)) && Gt(a, t, String(e));
		let o = Nt[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function $t(e) {
	let t = e.match(Yt);
	return t ? t[1].replace(Xt, "'") : e;
}
//#endregion
//#region node_modules/date-fns/getDay.js
function en(e, t) {
	return K(e, t?.in).getDay();
}
//#endregion
//#region node_modules/date-fns/getDaysInMonth.js
function tn(e, t) {
	let n = K(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = G(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region node_modules/date-fns/getDefaultOptions.js
function nn() {
	return Object.assign({}, Ge());
}
//#endregion
//#region node_modules/date-fns/getHours.js
function rn(e, t) {
	return K(e, t?.in).getHours();
}
//#endregion
//#region node_modules/date-fns/getISODay.js
function an(e, t) {
	let n = K(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/date-fns/getMinutes.js
function on(e, t) {
	return K(e, t?.in).getMinutes();
}
//#endregion
//#region node_modules/date-fns/getMonth.js
function q(e, t) {
	return K(e, t?.in).getMonth();
}
//#endregion
//#region node_modules/date-fns/getSeconds.js
function sn(e) {
	return K(e).getSeconds();
}
//#endregion
//#region node_modules/date-fns/getYear.js
function J(e, t) {
	return K(e, t?.in).getFullYear();
}
//#endregion
//#region node_modules/date-fns/isAfter.js
function cn(e, t) {
	return +K(e) > +K(t);
}
//#endregion
//#region node_modules/date-fns/isBefore.js
function ln(e, t) {
	return +K(e) < +K(t);
}
//#endregion
//#region node_modules/date-fns/isEqual.js
function un(e, t) {
	return +K(e) == +K(t);
}
//#endregion
//#region node_modules/date-fns/transpose.js
function dn(e, t) {
	let n = fn(t) ? new t(0) : G(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function fn(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/Setter.js
var pn = 10, mn = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, hn = class extends mn {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, gn = class extends mn {
	priority = pn;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => G(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : G(e, dn(e, this.context));
	}
}, Y = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new hn(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, _n = class extends Y {
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
}, vn = {
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
}, yn = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/date-fns/parse/_lib/utils.js
function bn(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function xn(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function Sn(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * Fe + a * Pe + o * Ie),
		rest: t.slice(n[0].length)
	};
}
function Cn(e) {
	return xn(vn.anyDigitsSigned, e);
}
function wn(e, t) {
	switch (e) {
		case 1: return xn(vn.singleDigit, t);
		case 2: return xn(vn.twoDigits, t);
		case 3: return xn(vn.threeDigits, t);
		case 4: return xn(vn.fourDigits, t);
		default: return xn(RegExp("^\\d{1," + e + "}"), t);
	}
}
function Tn(e, t) {
	switch (e) {
		case 1: return xn(vn.singleDigitSigned, t);
		case 2: return xn(vn.twoDigitsSigned, t);
		case 3: return xn(vn.threeDigitsSigned, t);
		case 4: return xn(vn.fourDigitsSigned, t);
		default: return xn(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function En(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function Dn(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function On(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/YearParser.js
var kn = class extends Y {
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
			case "y": return bn(wn(4, e), r);
			case "yo": return bn(n.ordinalNumber(e, { unit: "year" }), r);
			default: return bn(wn(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = Dn(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, An = class extends Y {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return bn(wn(4, e), r);
			case "Yo": return bn(n.ordinalNumber(e, { unit: "year" }), r);
			default: return bn(wn(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = Dt(e, r);
		if (n.isTwoDigitYear) {
			let t = Dn(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ke(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ke(e, r);
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
}, jn = class extends Y {
	priority = 130;
	parse(e, t) {
		return Tn(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = G(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), qe(r);
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
}, Mn = class extends Y {
	priority = 130;
	parse(e, t) {
		return Tn(t === "u" ? 4 : t.length, e);
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
}, Nn = class extends Y {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return wn(t.length, e);
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
}, Pn = class extends Y {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return wn(t.length, e);
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
}, Fn = class extends Y {
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
			case "M": return bn(xn(vn.month, e), r);
			case "MM": return bn(wn(2, e), r);
			case "Mo": return bn(n.ordinalNumber(e, { unit: "month" }), r);
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
}, In = class extends Y {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return bn(xn(vn.month, e), r);
			case "LL": return bn(wn(2, e), r);
			case "Lo": return bn(n.ordinalNumber(e, { unit: "month" }), r);
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
function Ln(e, t, n) {
	let r = K(e, n?.in), i = kt(r, n) - t;
	return r.setDate(r.getDate() - i * 7), K(r, n?.in);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var Rn = class extends Y {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return xn(vn.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return wn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return Ke(Ln(e, n, r), r);
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
function zn(e, t, n) {
	let r = K(e, n?.in), i = Et(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var Bn = class extends Y {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return xn(vn.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return wn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return qe(zn(e, n));
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
}, Vn = [
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
], Hn = [
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
], Un = class extends Y {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return xn(vn.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return wn(t.length, e);
		}
	}
	validate(e, t) {
		let n = On(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= Hn[r] : t >= 1 && t <= Vn[r];
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
}, Wn = class extends Y {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return xn(vn.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return wn(t.length, e);
		}
	}
	validate(e, t) {
		return On(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
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
function Gn(e, t, n) {
	let r = Ge(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = K(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return ze(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/DayParser.js
var Kn = class extends Y {
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
		return e = Gn(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, qn = class extends Y {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return bn(wn(t.length, e), i);
			case "eo": return bn(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = Gn(e, n, r), e.setHours(0, 0, 0, 0), e;
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
}, Jn = class extends Y {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return bn(wn(t.length, e), i);
			case "co": return bn(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = Gn(e, n, r), e.setHours(0, 0, 0, 0), e;
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
function Yn(e, t, n) {
	let r = K(e, n?.in);
	return ze(r, t - an(r, n), n);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var Xn = class extends Y {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return wn(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return bn(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return bn(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return bn(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return bn(n.day(e, {
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
		return e = Yn(e, n), e.setHours(0, 0, 0, 0), e;
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
}, Zn = class extends Y {
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
		return e.setHours(En(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Qn = class extends Y {
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
		return e.setHours(En(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, $n = class extends Y {
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
		return e.setHours(En(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, er = class extends Y {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return xn(vn.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return wn(t.length, e);
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
}, tr = class extends Y {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return xn(vn.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return wn(t.length, e);
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
}, nr = class extends Y {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return xn(vn.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return wn(t.length, e);
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
}, rr = class extends Y {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return xn(vn.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return wn(t.length, e);
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
}, ir = class extends Y {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return xn(vn.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return wn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, ar = class extends Y {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return xn(vn.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return wn(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, or = class extends Y {
	priority = 30;
	parse(e, t) {
		return bn(wn(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, sr = class extends Y {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return Sn(yn.basicOptionalMinutes, e);
			case "XX": return Sn(yn.basic, e);
			case "XXXX": return Sn(yn.basicOptionalSeconds, e);
			case "XXXXX": return Sn(yn.extendedOptionalSeconds, e);
			default: return Sn(yn.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : G(e, e.getTime() - Ye(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, cr = class extends Y {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return Sn(yn.basicOptionalMinutes, e);
			case "xx": return Sn(yn.basic, e);
			case "xxxx": return Sn(yn.basicOptionalSeconds, e);
			case "xxxxx": return Sn(yn.extendedOptionalSeconds, e);
			default: return Sn(yn.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : G(e, e.getTime() - Ye(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, lr = class extends Y {
	priority = 40;
	parse(e) {
		return Cn(e);
	}
	set(e, t, n) {
		return [G(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, ur = class extends Y {
	priority = 20;
	parse(e) {
		return Cn(e);
	}
	set(e, t, n) {
		return [G(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, dr = {
	G: new _n(),
	y: new kn(),
	Y: new An(),
	R: new jn(),
	u: new Mn(),
	Q: new Nn(),
	q: new Pn(),
	M: new Fn(),
	L: new In(),
	w: new Rn(),
	I: new Bn(),
	d: new Un(),
	D: new Wn(),
	E: new Kn(),
	e: new qn(),
	c: new Jn(),
	i: new Xn(),
	a: new Zn(),
	b: new Qn(),
	B: new $n(),
	h: new er(),
	H: new tr(),
	K: new nr(),
	k: new rr(),
	m: new ir(),
	s: new ar(),
	S: new or(),
	X: new sr(),
	x: new cr(),
	t: new lr(),
	T: new ur()
}, fr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, pr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, mr = /^'([^]*?)'?$/, hr = /''/g, gr = /\S/, _r = /[a-zA-Z]/;
function vr(e, t, n, r) {
	let i = () => G(r?.in || n, NaN), a = nn(), o = r?.locale ?? a.locale ?? wt, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : K(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new gn(r?.in, n)], d = t.match(pr).map((e) => {
		let t = e[0];
		if (t in zt) {
			let n = zt[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(fr), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && Wt(n) && Gt(n, t, e), !r?.useAdditionalDayOfYearTokens && Ut(n) && Gt(n, t, e);
		let a = n[0], s = dr[a];
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
			if (a.match(_r)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = yr(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && gr.test(e)) return i();
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
function yr(e) {
	return e.match(mr)[1].replace(hr, "'");
}
//#endregion
//#region node_modules/date-fns/isSameQuarter.js
function br(e, t, n) {
	let [r, i] = Xe(n?.in, e, t);
	return +ut(r) == +ut(i);
}
//#endregion
//#region node_modules/date-fns/subDays.js
function xr(e, t, n) {
	return ze(e, -t, n);
}
//#endregion
//#region node_modules/date-fns/setMonth.js
function Sr(e, t, n) {
	let r = K(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = G(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = tn(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region node_modules/date-fns/set.js
function Cr(e, t, n) {
	let r = K(e, n?.in);
	return isNaN(+r) ? G(n?.in || e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = Sr(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
//#endregion
//#region node_modules/date-fns/setHours.js
function wr(e, t, n) {
	let r = K(e, n?.in);
	return r.setHours(t), r;
}
//#endregion
//#region node_modules/date-fns/setMilliseconds.js
function Tr(e, t, n) {
	let r = K(e, n?.in);
	return r.setMilliseconds(t), r;
}
//#endregion
//#region node_modules/date-fns/setMinutes.js
function Er(e, t, n) {
	let r = K(e, n?.in);
	return r.setMinutes(t), r;
}
//#endregion
//#region node_modules/date-fns/setSeconds.js
function Dr(e, t, n) {
	let r = K(e, n?.in);
	return r.setSeconds(t), r;
}
//#endregion
//#region node_modules/date-fns/setYear.js
function Or(e, t, n) {
	let r = K(e, n?.in);
	return isNaN(+r) ? G(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region node_modules/date-fns/subMonths.js
function kr(e, t, n) {
	return Be(e, -t, n);
}
//#endregion
//#region node_modules/date-fns/sub.js
function Ar(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = xr(kr(e, i + r * 12, n), o + a * 7, n), d = (l + (c + s * 60) * 60) * 1e3;
	return G(n?.in || e, +u - d);
}
//#endregion
//#region node_modules/date-fns/subYears.js
function jr(e, t, n) {
	return tt(e, -t, n);
}
//#endregion
//#region node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js
function Mr() {
	let e = S();
	return v(), H("svg", {
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
Mr.compatConfig = { MODE: 3 };
function Nr() {
	return v(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }), U("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
Nr.compatConfig = { MODE: 3 };
function Pr() {
	return v(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
Pr.compatConfig = { MODE: 3 };
function Fr() {
	return v(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" })]);
}
Fr.compatConfig = { MODE: 3 };
function Ir() {
	return v(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }), U("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" })]);
}
Ir.compatConfig = { MODE: 3 };
function Lr() {
	return v(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
Lr.compatConfig = { MODE: 3 };
function Rr() {
	return v(), H("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [U("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
Rr.compatConfig = { MODE: 3 };
var zr = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Br = (e, t, n) => Hr(e, t, n) || X(), Vr = (e, t, n) => {
	let r = t.dateInTz ? zr(new Date(e), t.dateInTz) : X(e);
	return n ? Mi(r, !0) : r;
}, Hr = (e, t, n) => {
	if (!e) return null;
	let r = n ? Mi(X(e), !0) : X(e);
	return t ? t.exactMatch ? Vr(e, t, n) : zr(r, t.timezone) : r;
}, Ur = (e) => {
	let t = new Date(e.getFullYear(), 0, 1).getTimezoneOffset();
	return e.getTimezoneOffset() < t;
}, Wr = (e, t) => {
	if (!e) return 0;
	let n = /* @__PURE__ */ new Date(), r = new Date(n.toLocaleString("en-US", { timeZone: "UTC" })), i = new Date(n.toLocaleString("en-US", { timeZone: e })), a = (Ur(t ?? i) ? i : t ?? i).getTimezoneOffset() / 60;
	return (+r - i) / 36e5 - a;
}, Gr = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Gr || {}), Kr = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Kr || {}), qr = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(qr || {}), Jr = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Jr || {}), Yr = [
	"timestamp",
	"date",
	"iso"
], Xr = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Xr || {}), Zr = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Zr || {}), Qr = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(Qr || {});
function $r(e) {
	return (t) => {
		let n = new Intl.DateTimeFormat(e, {
			weekday: "short",
			timeZone: "UTC"
		}).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`));
		return e === "ar" ? n.slice(2, 5) : n.slice(0, 2);
	};
}
function ei(e) {
	return (t) => Qt(zr(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
var ti = (e, t, n) => {
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
		i = r.map(ei(e));
	} catch {
		i = r.map($r(t));
	}
	else i = r.map($r(t));
	let a = i.slice(0, n), o = i.slice(n + 1, i.length);
	return [i[n]].concat(...o, ...a);
}, ni = (e, t, n) => {
	let r = [];
	for (let n = +e[0]; n <= +e[1]; n++) r.push({
		value: +n,
		text: bi(n, t)
	});
	return n ? r.reverse() : r;
}, ri = (e, t, n) => {
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
			let i = Qt(zr(n, "UTC"), t, { locale: e });
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
}, ii = (e) => [
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
][e], ai = (e) => {
	let t = I(e);
	return t?.$el ? t?.$el : t;
}, oi = (e) => ({
	type: "dot",
	...e ?? {}
}), si = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, ci = {
	prop: (e) => `"${e}" prop must be enabled!`,
	dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, li = (e) => e, ui = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, di = (e) => e === null, fi = (e) => {
	if (e) return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, pi = (e) => {
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
}, mi = (e, t, n) => {
	let r = n != null, i = t != null;
	if (!r && !i) return !1;
	let a = +n, o = +t;
	return r && i ? +e > a || +e < o : r ? +e > a : i ? +e < o : !1;
}, hi = (e, t) => pi(e).map((e) => e.map((e) => {
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
})), gi = (e, t, n = !1) => {
	e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
}, _i = () => [
	"a[href]",
	"area[href]",
	"input:not([disabled]):not([type='hidden'])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"[tabindex]:not([tabindex='-1'])",
	"[data-datepicker-instance]"
].join(", ");
function vi(e, t) {
	let n = [...document.querySelectorAll(_i())];
	n = n.filter((t) => !e.contains(t) || t.hasAttribute("data-datepicker-instance"));
	let r = n.indexOf(e);
	if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length)) return n[r + (t ? -1 : 1)];
}
var yi = (e, t) => e?.querySelector(`[data-dp-element="${t}"]`), bi = (e, t) => new Intl.NumberFormat(t, {
	useGrouping: !1,
	style: "decimal"
}).format(e), xi = (e, t) => Qt(e, t ?? Qr.DATE), Si = (e) => Array.isArray(e), Ci = (e, t, n) => t.get(xi(e, n)), wi = (e, t) => e ? t ? t instanceof Map ? !!Ci(e, t) : t(X(e)) : !1 : !0, Ti = (e, t, n = !1, r) => {
	if (e.key === Zr.enter || e.key === Zr.space) return n && e.preventDefault(), t();
	if (r) return r(e);
}, Ei = () => "ontouchstart" in window || navigator.maxTouchPoints > 0, Di = (e, t) => e ? Qr.MONTH_AND_YEAR : t ? Qr.YEAR : Qr.DATE, Oi = (e) => e < 10 ? `0${e}` : e, ki = (e, t, n, r, i, a) => {
	let o = vr(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: a });
	return it(o) && rt(o) ? r || i ? o : Cr(o, {
		hours: +n.hours,
		minutes: +n?.minutes,
		seconds: +n?.seconds,
		milliseconds: 0
	}) : null;
}, Ai = (e, t, n, r, i, a) => {
	let o = Array.isArray(n) ? n[0] : n;
	if (typeof t == "string") return ki(e, t, o, r, i, a);
	if (Array.isArray(t)) {
		let n = null;
		for (let s of t) if (n = ki(e, s, o, r, i, a), n) break;
		return n;
	}
	return typeof t == "function" ? t(e) : null;
}, X = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), ji = (e, t, n) => {
	if (t) {
		let t = (e.getMonth() + 1).toString().padStart(2, "0"), r = e.getDate().toString().padStart(2, "0"), i = e.getHours().toString().padStart(2, "0"), a = e.getMinutes().toString().padStart(2, "0"), o = n ? e.getSeconds().toString().padStart(2, "0") : "00";
		return `${e.getFullYear()}-${t}-${r}T${i}:${a}:${o}.000Z`;
	}
	let r = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
	return new Date(r).toISOString();
}, Mi = (e, t) => {
	let n = Cr(X(JSON.parse(JSON.stringify(e))), {
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0
	});
	return t ? ft(n) : n;
}, Ni = (e, t, n, r) => {
	let i = e ? X(e) : X();
	return (t || t === 0) && (i = wr(i, +t)), (n || n === 0) && (i = Er(i, +n)), (r || r === 0) && (i = Dr(i, +r)), Tr(i, 0);
}, Pi = (e, t) => !e || !t ? !1 : ln(Mi(e), Mi(t)), Z = (e, t) => !e || !t ? !1 : un(Mi(e), Mi(t)), Fi = (e, t) => !e || !t ? !1 : cn(Mi(e), Mi(t)), Ii = (e, t, n) => e?.[0] && e?.[1] ? Fi(n, e[0]) && Pi(n, e[1]) : e?.[0] && t ? Fi(n, e[0]) && Pi(n, t) || Pi(n, e[0]) && Fi(n, t) : !1, Li = (e) => Mi(Cr(new Date(e), { date: 1 })), Ri = (e, t, n) => t && (n || n === 0) ? Object.fromEntries([
	"hours",
	"minutes",
	"seconds"
].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])) : {
	hours: isNaN(+e.hours) ? void 0 : +e.hours,
	minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
	seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, zi = (e) => ({
	hours: rn(e),
	minutes: on(e),
	seconds: sn(e)
}), Bi = (e, t) => {
	if (t) {
		let n = J(X(t));
		if (n > e) return 12;
		if (n === e) return q(X(t));
	}
}, Vi = (e, t) => {
	if (t) {
		let n = J(X(t));
		return n < e ? -1 : n === e ? q(X(t)) : void 0;
	}
}, Hi = (e) => {
	if (e) return J(X(e));
}, Ui = (e, t) => lt({
	start: Fi(e, t) ? t : e,
	end: Fi(t, e) ? t : e
}), Wi = (e) => {
	let t = Be(e, 1);
	return {
		month: q(t),
		year: J(t)
	};
}, Gi = (e, t) => [Ke(e, { weekStartsOn: +t }), ht(e, { weekStartsOn: +t })], Ki = (e, t) => {
	let n = {
		hours: rn(X()),
		minutes: on(X()),
		seconds: t ? sn(X()) : 0
	};
	return Object.assign(n, e);
}, qi = (e, t, n) => [Cr(X(e), { date: 1 }), Cr(X(), {
	month: t,
	year: n,
	date: 1
})], Ji = (e, t, n) => {
	let r = e ? X(e) : X();
	return (t || t === 0) && (r = Sr(r, t)), n && (r = Or(r, n)), r;
}, Yi = (e, t, n, r, i) => {
	if (!r || i && !t || !i && !n) return !1;
	let a = i ? Be(e, 1) : kr(e, 1), o = [q(a), J(a)];
	return i ? !Zi(...o, t) : !Xi(...o, n);
}, Xi = (e, t, n) => Pi(...qi(n, e, t)) || Z(...qi(n, e, t)), Zi = (e, t, n) => Fi(...qi(n, e, t)) || Z(...qi(n, e, t)), Qi = (e, t, n, r, i, a, o) => {
	if (typeof t == "function" && !o) return t(e);
	let s = n ? { locale: n } : void 0;
	return Array.isArray(e) ? `${Qt(e[0], a, s)}${i && !e[1] ? "" : r}${e[1] ? Qt(e[1], a, s) : ""}` : Qt(e, a, s);
}, $i = (e) => {
	if (e) return null;
	throw Error(ci.prop("partial-range"));
}, ea = (e, t) => {
	if (t) return e();
	throw Error(ci.prop("range"));
}, ta = (e) => Array.isArray(e) ? it(e[0]) && (!e[1] || it(e[1])) : e ? it(e) : !1, na = (e, t) => Cr(t ?? X(), {
	hours: +e.hours || 0,
	minutes: +e.minutes || 0,
	seconds: +e.seconds || 0
}), ra = (e, t, n, r) => {
	if (!e) return !0;
	if (r) {
		let r = n === "max" ? ln(e, t) : cn(e, t), i = {
			seconds: 0,
			milliseconds: 0
		};
		return r || un(Cr(e, i), Cr(t, i));
	}
	return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, ia = (e, t, n) => e ? na(e, t) : X(n ?? t), aa = (e, t, n, r, i) => {
	if (Array.isArray(r)) {
		let a = ia(e, r[0], t), o = ia(e, r[1], t);
		return ra(r[0], a, n, !!t) && ra(r[1], o, n, !!t) && i;
	}
	return ra(r, ia(e, r, t), n, !!t) && i;
}, oa = (e) => Cr(X(), zi(e)), sa = (e, t, n) => {
	if (e instanceof Map) {
		let r = `${Oi(n + 1)}-${t}`;
		return e.size ? e.has(r) : !1;
	}
	return typeof e == "function" && e(Mi(Cr(X(), {
		month: n,
		year: t
	}), !0));
}, ca = (e, t, n) => {
	if (e instanceof Map) {
		let r = `${Oi(n + 1)}-${t}`;
		return !e.size || e.has(r);
	}
	return !0;
}, la = (e, t, n) => typeof e == "function" ? e({
	month: t,
	year: n
}) : !!e.months.find((e) => e.month === t && e.year === n), ua = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), da = (e) => `dp-${Qt(e, "yyyy-MM-dd")}`, fa = (e, t) => ({
	before: xr(Mi(t), e),
	after: ze(Mi(t), e)
}), pa = (e, t) => t < +e[0] || t > +e[1], ma = ve({
	menuFocused: !1,
	shiftKeyInMenu: !1
}), ha = () => ({
	control: V(() => ({
		shiftKeyInMenu: ma.shiftKeyInMenu,
		menuFocused: ma.menuFocused
	})),
	setMenuFocused: (e) => {
		ma.menuFocused = e;
	},
	setShiftKey: (e) => {
		ma.shiftKeyInMenu !== e && (ma.shiftKeyInMenu = e);
	}
}), ga = ve({
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
}), _a = W(null), va = W(!1), ya = W(!1), ba = W(!1), xa = W(!1), Sa = W(0), Ca = W(0), wa = () => {
	let e = V(() => va.value ? [...ga.selectionGrid, ga.actionRow].filter((e) => e.length) : ya.value ? [
		...ga.timePicker[0],
		...ga.timePicker[1],
		xa.value ? [] : [_a.value],
		ga.actionRow
	].filter((e) => e.length) : ba.value ? [...ga.monthPicker, ga.actionRow] : [
		ga.monthYear,
		...ga.calendar,
		ga.time,
		ga.actionRow
	].filter((e) => e.length)), t = (t) => {
		Sa.value = t ? Sa.value + 1 : Sa.value - 1;
		let n = null;
		e.value[Ca.value] && (n = e.value[Ca.value][Sa.value]), !n && e.value[Ca.value + (t ? 1 : -1)] ? (Ca.value += t ? 1 : -1, Sa.value = t ? 0 : e.value[Ca.value].length - 1) : n || (Sa.value = t ? Sa.value - 1 : Sa.value + 1);
	}, n = (t) => {
		Ca.value === 0 && !t || Ca.value === e.value.length && t || (Ca.value = t ? Ca.value + 1 : Ca.value - 1, e.value[Ca.value] ? e.value[Ca.value] && !e.value[Ca.value][Sa.value] && Sa.value !== 0 && (Sa.value = e.value[Ca.value].length - 1) : Ca.value = t ? Ca.value - 1 : Ca.value + 1);
	}, r = (t) => {
		let n = null;
		e.value[Ca.value] && (n = e.value[Ca.value][Sa.value]), n ? n.focus({ preventScroll: !va.value }) : Sa.value = t ? Sa.value - 1 : Sa.value + 1;
	}, i = () => {
		t(!0), r(!0);
	}, a = () => {
		t(!1), r(!1);
	}, o = () => {
		n(!1), r(!0);
	}, s = () => {
		n(!0), r(!0);
	}, c = (e, t) => {
		ga[t] = e;
	}, l = (e, t) => {
		ga[t] = e;
	}, u = () => {
		Sa.value = 0, Ca.value = 0;
	};
	return {
		buildMatrix: c,
		buildMultiLevelMatrix: l,
		setTimePickerBackRef: (e) => {
			_a.value = e;
		},
		setSelectionGrid: (e) => {
			va.value = e, u(), e || (ga.selectionGrid = []);
		},
		setTimePicker: (e, t = !1) => {
			ya.value = e, xa.value = t, u(), e || (ga.timePicker[0] = [], ga.timePicker[1] = []);
		},
		setTimePickerElements: (e, t = 0) => {
			ga.timePicker[t] = e;
		},
		arrowRight: i,
		arrowLeft: a,
		arrowUp: o,
		arrowDown: s,
		clearArrowNav: () => {
			ga.monthYear = [], ga.calendar = [], ga.time = [], ga.actionRow = [], ga.selectionGrid = [], ga.timePicker[0] = [], ga.timePicker[1] = [], va.value = !1, ya.value = !1, xa.value = !1, ba.value = !1, u(), _a.value = null;
		},
		setMonthPicker: (e) => {
			ba.value = e, u();
		},
		refSets: ga
	};
}, Ta = (e) => ({
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down",
	...e ?? {}
}), Ea = (e) => ({
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
}), Da = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Oa = (e) => {
	let t = typeof e == "object" && e, n = {
		static: !0,
		solo: !1
	};
	if (!e) return {
		...n,
		count: Da(!1)
	};
	let r = t ? e : {}, i = Da(t ? r.count ?? !0 : e);
	return Object.assign(n, r, { count: i });
}, ka = (e, t, n) => e || (typeof n == "string" ? n : t), Aa = (e) => typeof e == "boolean" ? e ? Ta({}) : !1 : Ta(e), ja = (e) => {
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
}, Ma = (e) => ({
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	},
	...e ?? {}
}), Na = (e) => ({
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	...e ?? {}
}), Pa = (e) => {
	let t = { input: !1 };
	return typeof e == "object" ? {
		...t,
		...e ?? {},
		enabled: !0
	} : {
		enabled: e,
		...t
	};
}, Fa = (e) => ({
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
}), Ia = (e) => {
	let t = {
		dates: Array.isArray(e) ? e.map((e) => X(e)) : [],
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
}, La = (e) => typeof e == "object" ? {
	type: e?.type ?? "local",
	hideOnOffsetDates: e?.hideOnOffsetDates ?? !1
} : {
	type: e,
	hideOnOffsetDates: !1
}, Ra = (e) => {
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
}, za = (e) => e ? typeof e == "string" ? {
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
}, Ba = (e, t, n, r) => new Map(e.map((e) => {
	let i = Br(e, t, r);
	return [xi(i, n), i];
})), Va = (e, t) => e.length ? new Map(e.map((e) => [xi(Br(e.date, t), Qr.DATE), e])) : null, Ha = (e) => {
	let t = Di(e.isMonthPicker, e.isYearPicker);
	return {
		minDate: Hr(e.minDate, e.timezone, e.isSpecific),
		maxDate: Hr(e.maxDate, e.timezone, e.isSpecific),
		disabledDates: Si(e.disabledDates) ? Ba(e.disabledDates, e.timezone, t, e.isSpecific) : e.disabledDates,
		allowedDates: Si(e.allowedDates) ? Ba(e.allowedDates, e.timezone, t, e.isSpecific) : null,
		highlight: typeof e.highlight == "object" && Si(e.highlight?.dates) ? Ba(e.highlight.dates, e.timezone, t) : e.highlight,
		markers: Va(e.markers, e.timezone)
	};
}, Ua = (e) => typeof e == "boolean" ? {
	enabled: e,
	dragSelect: !0,
	limit: null
} : {
	enabled: !!e,
	limit: e.limit ? +e.limit : null,
	dragSelect: e.dragSelect ?? !0
}, Wa = (e) => ({ ...Object.fromEntries(Object.keys(e).map((t) => {
	let n = t, r = e[n];
	return [t, typeof e[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
})) }), Ga = (e) => {
	let t = () => {
		let t = e.enableSeconds ? ":ss" : "", n = e.enableMinutes ? ":mm" : "";
		return e.is24 ? `HH${n}${t}` : `hh${n}${t} aa`;
	}, n = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${g.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy", r = (t) => Ki(t, e.enableSeconds), i = () => b.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, a = V(() => Oa(e.multiCalendars)), o = V(() => i()), s = V(() => Ea(e.ariaLabels)), c = V(() => Ma(e.filters)), l = V(() => Aa(e.transitions)), u = V(() => Na(e.actionRow)), d = V(() => ka(e.previewFormat, e.format, n())), f = V(() => ja(e.textInput)), p = V(() => Pa(e.inline)), m = V(() => Fa(e.config)), h = V(() => Ia(e.highlight)), g = V(() => La(e.weekNumbers)), _ = V(() => za(e.timezone)), v = V(() => Ua(e.multiDates)), y = V(() => Ha({
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
	})), b = V(() => Ra(e.range));
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
		defaultedUI: V(() => Wa(e.ui)),
		getDefaultPattern: n,
		getDefaultStartTime: i,
		handleEventPropagation: (e) => {
			m.value.allowStopPropagation && e.stopPropagation(), m.value.allowPreventDefault && e.preventDefault();
		}
	};
}, Ka = (e, t, { isInputFocused: n, isTextInputDate: r }) => {
	let i = W(), { defaultedTextInput: a, defaultedRange: o, defaultedTz: s, defaultedMultiDates: c, getDefaultPattern: l } = Ga(t), u = W(""), d = ne(t, "format"), f = ne(t, "formatLocale");
	T(i, () => {
		typeof t.onInternalModelChange == "function" && e("internal-model-change", i.value, oe(!0));
	}, { deep: !0 }), T(o, (e, t) => {
		e.enabled !== t.enabled && (i.value = null);
	}), T(d, () => {
		te();
	});
	let p = (e) => s.value.timezone && s.value.convertModel ? zr(e, s.value.timezone) : e, m = (e) => s.value.timezone && s.value.convertModel ? Ue(e, Wr(s.value.timezone, e)) : e, h = (e, n, r = !1) => Qi(e, t.format, t.formatLocale, a.value.rangeSeparator, t.modelAuto, n ?? l(), r), g = (e) => e ? t.modelType ? F(e) : {
		hours: rn(e),
		minutes: on(e),
		seconds: t.enableSeconds ? sn(e) : 0
	} : null, _ = (e) => t.modelType ? F(e) : {
		month: q(e),
		year: J(e)
	}, v = (e) => Array.isArray(e) ? c.value.enabled ? e.map((e) => y(e, Or(X(), e))) : ea(() => [Or(X(), e[0]), e[1] ? Or(X(), e[1]) : $i(o.value.partialRange)], o.value.enabled) : Or(X(), +e), y = (e, n) => (typeof e == "string" || typeof e == "number") && t.modelType ? re(e) : n, b = (e) => Array.isArray(e) ? [y(e[0], Ni(null, +e[0].hours, +e[0].minutes, e[0].seconds)), y(e[1], Ni(null, +e[1].hours, +e[1].minutes, e[1].seconds))] : y(e, Ni(null, e.hours, e.minutes, e.seconds)), x = (e) => {
		let t = Cr(X(), { date: 1 });
		return Array.isArray(e) ? c.value.enabled ? e.map((e) => y(e, Ji(t, +e.month, +e.year))) : ea(() => [y(e[0], Ji(t, +e[0].month, +e[0].year)), y(e[1], e[1] ? Ji(t, +e[1].month, +e[1].year) : $i(o.value.partialRange))], o.value.enabled) : y(e, Ji(t, +e.month, +e.year));
	}, S = (e) => {
		if (Array.isArray(e)) return e.map((e) => re(e));
		throw Error(ci.dateArr("multi-dates"));
	}, C = (e) => {
		if (Array.isArray(e) && o.value.enabled) {
			let t = e[0], n = e[1];
			return [X(Array.isArray(t) ? t[0] : null), Array.isArray(n) && n.length ? X(n[0]) : null];
		}
		return X(e[0]);
	}, w = (e) => t.modelAuto ? Array.isArray(e) ? [re(e[0]), re(e[1])] : t.autoApply ? [re(e)] : [re(e), null] : Array.isArray(e) ? ea(() => e[1] ? [re(e[0]), e[1] ? re(e[1]) : $i(o.value.partialRange)] : [re(e[0])], o.value.enabled) : re(e), E = () => {
		Array.isArray(i.value) && o.value.enabled && i.value.length === 1 && i.value.push($i(o.value.partialRange));
	}, D = () => {
		let e = i.value;
		return [F(e[0]), e[1] ? F(e[1]) : $i(o.value.partialRange)];
	}, O = () => Array.isArray(i.value) ? i.value[1] ? D() : F(li(i.value[0])) : [], k = () => (i.value || []).map((e) => F(e)), A = (e = !1) => (e || E(), t.modelAuto ? O() : c.value.enabled ? k() : Array.isArray(i.value) ? ea(() => D(), o.value.enabled) : F(li(i.value))), j = (e) => !e || Array.isArray(e) && !e.length ? null : t.timePicker ? b(li(e)) : t.monthPicker ? x(li(e)) : t.yearPicker ? v(li(e)) : c.value.enabled ? S(li(e)) : t.weekPicker ? C(li(e)) : w(li(e)), M = (e) => {
		if (r.value) return;
		let t = j(e);
		ta(li(t)) ? (i.value = li(t), te()) : (i.value = null, u.value = "");
	}, N = () => {
		let e = (e) => Qt(e, a.value.format);
		return `${e(i.value[0])} ${a.value.rangeSeparator} ${i.value[1] ? e(i.value[1]) : ""}`;
	}, P = () => n.value && i.value ? Array.isArray(i.value) ? N() : Qt(i.value, a.value.format) : h(i.value), ee = () => i.value ? c.value.enabled ? i.value.map((e) => h(e)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? P() : h(i.value) : "", te = () => {
		!t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? u.value = ee() : u.value = t.format(i.value);
	}, re = (e) => {
		if (t.utc) {
			let n = new Date(e);
			return t.utc === "preserve" ? new Date(n.getTime() + n.getTimezoneOffset() * 6e4) : n;
		}
		return t.modelType ? Yr.includes(t.modelType) ? p(new Date(e)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? p(vr(e, l(), /* @__PURE__ */ new Date(), { locale: f.value })) : p(vr(e, t.modelType, /* @__PURE__ */ new Date(), { locale: f.value })) : p(new Date(e));
	}, F = (e) => e ? t.utc ? ji(e, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +m(e) : t.modelType === "iso" ? m(e).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? h(m(e)) : h(m(e), t.modelType, !0) : m(e) : "", I = (t, n = !1, r = !1) => {
		if (r) return t;
		e("update:model-value", t), s.value.emitTimezone && n && e("update:model-timezone-value", Array.isArray(t) ? t.map((e) => zr(li(e), s.value.emitTimezone)) : zr(li(t), s.value.emitTimezone));
	}, L = (e) => Array.isArray(i.value) ? c.value.enabled ? i.value.map((t) => e(t)) : [e(i.value[0]), i.value[1] ? e(i.value[1]) : $i(o.value.partialRange)] : e(li(i.value)), ie = () => {
		if (Array.isArray(i.value)) {
			let e = Gi(i.value[0], t.weekStart), n = i.value[1] ? Gi(i.value[1], t.weekStart) : [];
			return [e.map((e) => X(e)), n.map((e) => X(e))];
		}
		return Gi(i.value, t.weekStart).map((e) => X(e));
	}, ae = (e, t) => I(li(L(e)), !1, t), R = (t) => {
		let n = ie();
		return t ? n : e("update:model-value", ie());
	}, oe = (e = !1) => (e || te(), t.monthPicker ? ae(_, e) : t.timePicker ? ae(g, e) : t.yearPicker ? ae(J, e) : t.weekPicker ? R(e) : I(A(e), !0, e));
	return {
		inputValue: u,
		internalModelValue: i,
		checkBeforeEmit: () => i.value ? o.value.enabled ? o.value.partialRange ? i.value.length >= 1 : i.value.length === 2 : !!i.value : !1,
		parseExternalModelValue: M,
		formatInputValue: te,
		emitModelValue: oe
	};
}, qa = (e, t) => {
	let { defaultedFilters: n, propDates: r } = Ga(e), { validateMonthYearInRange: i } = ws(e), a = (e, t) => {
		let r = e;
		return n.value.months.includes(q(r)) ? (r = t ? Be(e, 1) : kr(e, 1), a(r, t)) : r;
	}, o = (e, t) => {
		let r = e;
		return n.value.years.includes(J(r)) ? (r = t ? tt(e, 1) : jr(e, 1), o(r, t)) : r;
	}, s = (t, r = !1) => {
		let s = Cr(X(), {
			month: e.month,
			year: e.year
		}), l = t ? Be(s, 1) : kr(s, 1);
		e.disableYearSelect && (l = Or(l, e.year));
		let u = q(l), d = J(l);
		n.value.months.includes(u) && (l = a(l, t), u = q(l), d = J(l)), n.value.years.includes(d) && (l = o(l, t), d = J(l)), i(u, d, t, e.preventMinMaxNavigation) && c(u, d, r);
	}, c = (e, n, r) => {
		t("update-month-year", {
			month: e,
			year: n,
			fromNav: r
		});
	};
	return {
		handleMonthYearChange: s,
		isDisabled: V(() => (t) => Yi(Cr(X(), {
			month: e.month,
			year: e.year
		}), r.value.maxDate, r.value.minDate, e.preventMinMaxNavigation, t)),
		updateMonthYear: c
	};
}, Ja = {
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
}, Ya = {
	...Ja,
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
}, Xa = ["title"], Za = ["disabled"], Qa = /* @__PURE__ */ F({
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
		...Ya
	},
	emits: [
		"close-picker",
		"select-date",
		"select-now",
		"invalid-select"
	],
	setup(e, { emit: t }) {
		let n = t, r = e, { defaultedActionRow: i, defaultedPreviewFormat: a, defaultedMultiCalendars: o, defaultedTextInput: s, defaultedInline: l, defaultedRange: u, defaultedMultiDates: d } = Ga(r), { isTimeValid: f, isMonthValid: p } = ws(r), { buildMatrix: m } = wa(), h = W(null), g = W(null), y = W(!1), b = W({}), S = W(null), C = W(null);
		w(() => {
			r.arrowNavigation && m([ai(h), ai(g)], "actionRow"), T(), window.addEventListener("resize", T);
		}), c(() => {
			window.removeEventListener("resize", T);
		});
		let T = () => {
			y.value = !1, setTimeout(() => {
				let e = S.value?.getBoundingClientRect(), t = C.value?.getBoundingClientRect();
				e && t && (b.value.maxWidth = `${t.width - e.width - 20}px`), y.value = !0;
			}, 0);
		}, E = V(() => u.value.enabled && !u.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), D = V(() => !f.value(r.internalModelValue) || !p.value(r.internalModelValue) || !E.value), O = () => {
			let e = a.value;
			return r.timePicker || r.monthPicker, e(li(r.internalModelValue));
		}, k = () => {
			let e = r.internalModelValue;
			return o.value.count > 0 ? `${A(e[0])} - ${A(e[1])}` : [A(e[0]), A(e[1])];
		}, A = (e) => Qi(e, a.value, r.formatLocale, s.value.rangeSeparator, r.modelAuto, a.value), j = V(() => !r.internalModelValue || !r.menuMount ? "" : typeof a.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? k() : d.value.enabled ? r.internalModelValue.map((e) => `${A(e)}`) : r.modelAuto ? `${A(r.internalModelValue[0])}` : `${A(r.internalModelValue[0])} -` : A(r.internalModelValue) : O()), M = () => d.value.enabled ? "; " : " - ", N = V(() => Array.isArray(j.value) ? j.value.join(M()) : j.value), ee = () => {
			f.value(r.internalModelValue) && p.value(r.internalModelValue) && E.value ? n("select-date") : n("invalid-select");
		};
		return (e, t) => (v(), H("div", {
			ref_key: "actionRowRef",
			ref: C,
			class: "dp__action_row"
		}, [e.$slots["action-row"] ? _(e.$slots, "action-row", me(xe({ key: 0 }, {
			internalModelValue: e.internalModelValue,
			disabled: D.value,
			selectDate: () => e.$emit("select-date"),
			closePicker: () => e.$emit("close-picker")
		}))) : (v(), H(x, { key: 1 }, [I(i).showPreview ? (v(), H("div", {
			key: 0,
			class: "dp__selection_preview",
			title: N.value,
			style: de(b.value)
		}, [e.$slots["action-preview"] && y.value ? _(e.$slots, "action-preview", {
			key: 0,
			value: e.internalModelValue
		}) : P("", !0), !e.$slots["action-preview"] && y.value ? (v(), H(x, { key: 1 }, [te(se(N.value), 1)], 64)) : P("", !0)], 12, Xa)) : P("", !0), U("div", {
			ref_key: "actionBtnContainer",
			ref: S,
			class: "dp__action_buttons",
			"data-dp-element": "action-row"
		}, [e.$slots["action-buttons"] ? _(e.$slots, "action-buttons", {
			key: 0,
			value: e.internalModelValue
		}) : P("", !0), e.$slots["action-buttons"] ? P("", !0) : (v(), H(x, { key: 1 }, [
			!I(l).enabled && I(i).showCancel ? (v(), H("button", {
				key: 0,
				ref_key: "cancelButtonRef",
				ref: h,
				type: "button",
				class: "dp__action_button dp__action_cancel",
				onClick: t[0] ||= (t) => e.$emit("close-picker"),
				onKeydown: t[1] ||= (t) => I(Ti)(t, () => e.$emit("close-picker"))
			}, se(e.cancelText), 545)) : P("", !0),
			I(i).showNow ? (v(), H("button", {
				key: 1,
				type: "button",
				class: "dp__action_button dp__action_cancel",
				onClick: t[2] ||= (t) => e.$emit("select-now"),
				onKeydown: t[3] ||= (t) => I(Ti)(t, () => e.$emit("select-now"))
			}, se(e.nowButtonLabel), 33)) : P("", !0),
			I(i).showSelect ? (v(), H("button", {
				key: 2,
				ref_key: "selectButtonRef",
				ref: g,
				type: "button",
				class: "dp__action_button dp__action_select",
				disabled: D.value,
				"data-test-id": "select-button",
				onKeydown: t[4] ||= (e) => I(Ti)(e, () => ee()),
				onClick: ee
			}, se(e.selectText), 41, Za)) : P("", !0)
		], 64))], 512)], 64))], 512));
	}
}), $a = [
	"role",
	"aria-label",
	"tabindex"
], eo = { class: "dp__selection_grid_header" }, to = [
	"aria-selected",
	"aria-disabled",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], no = ["aria-label"], ro = /* @__PURE__ */ F({
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
		let { setSelectionGrid: r, buildMultiLevelMatrix: i, setMonthPicker: o } = wa(), s = n, l = e, { defaultedAriaLabels: u, defaultedTextInput: d, defaultedConfig: f, handleEventPropagation: m } = Ga(l), { hideNavigationButtons: y } = Ts(), b = W(!1), S = W(null), C = W(null), E = W([]), D = W(), O = W(null), k = W(0), j = W(null);
		a(() => {
			S.value = null;
		}), w(() => {
			Ce().then(() => ie()), l.noOverlayFocus || N(), M(!0);
		}), c(() => M(!1));
		let M = (e) => {
			l.arrowNavigation && (l.headerRefs?.length ? o(e) : r(e));
		}, N = () => {
			let e = ai(C);
			e && (d.value.enabled || (S.value ? S.value?.focus({ preventScroll: !0 }) : e.focus({ preventScroll: !0 })), b.value = e.clientHeight < e.scrollHeight);
		}, ee = V(() => ({
			dp__overlay: !0,
			"dp--overlay-absolute": !l.useRelative,
			"dp--overlay-relative": l.useRelative
		})), ne = V(() => l.useRelative ? {
			height: `${l.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), re = V(() => ({ dp__overlay_col: !0 })), F = V(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__overlay_action: !0,
			dp__over_action_scroll: b.value,
			dp__button_bottom: l.isLast
		})), L = V(() => ({
			dp__overlay_container: !0,
			dp__container_flex: l.items?.length <= 6,
			dp__container_block: l.items?.length > 6
		}));
		T(() => l.items, () => ie(!1), { deep: !0 });
		let ie = (e = !0) => {
			Ce().then(() => {
				let t = ai(S), n = ai(C), r = ai(O), i = ai(j), a = r ? r.getBoundingClientRect().height : 0;
				n && (n.getBoundingClientRect().height ? k.value = n.getBoundingClientRect().height - a : k.value = f.value.modeHeight - a), t && i && e && (i.scrollTop = t.offsetTop - i.offsetTop - (k.value / 2 - t.getBoundingClientRect().height) - a);
			});
		}, ae = (e) => {
			e.disabled || s("selected", e.value);
		}, oe = () => {
			s("toggle"), s("reset-flow");
		}, z = (e) => {
			l.escClose && (oe(), m(e));
		}, ce = (e, t, n, r) => {
			e && ((t.active || t.value === l.focusValue) && (S.value = e), l.arrowNavigation && (Array.isArray(E.value[n]) ? E.value[n][r] = e : E.value[n] = [e], B()));
		}, B = () => {
			let e = l.headerRefs?.length ? [l.headerRefs].concat(E.value) : E.value.concat([l.skipButtonRef ? [] : [O.value]]);
			i(li(e), l.headerRefs?.length ? "monthPicker" : "selectionGrid");
		}, le = (e) => {
			l.arrowNavigation || gi(e, f.value, !0);
		}, ue = (e) => {
			D.value = e, s("hover-value", e);
		}, fe = () => {
			if (oe(), !l.isLast) {
				let e = yi(l.menuWrapRef ?? null, "action-row");
				e && fi(e)?.focus();
			}
		}, pe = (e) => {
			switch (e.key) {
				case Zr.esc: return z(e);
				case Zr.arrowLeft: return le(e);
				case Zr.arrowRight: return le(e);
				case Zr.arrowUp: return le(e);
				case Zr.arrowDown: return le(e);
				default: return;
			}
		}, me = (e) => {
			if (e.key === Zr.enter) return oe();
			if (e.key === Zr.tab) return fe();
		};
		return t({ focusGrid: N }), (t, n) => (v(), H("div", {
			ref_key: "gridWrapRef",
			ref: C,
			class: R(ee.value),
			style: de(ne.value),
			role: e.useRelative ? void 0 : "dialog",
			"aria-label": e.overlayLabel,
			tabindex: e.useRelative ? void 0 : "0",
			onKeydown: pe,
			onClick: n[0] ||= A(() => {}, ["prevent"])
		}, [U("div", {
			ref_key: "containerRef",
			ref: j,
			class: R(L.value),
			style: de({ "--dp-overlay-height": `${k.value}px` }),
			role: "grid"
		}, [U("div", eo, [_(t.$slots, "header")]), t.$slots.overlay ? _(t.$slots, "overlay", { key: 0 }) : (v(!0), H(x, { key: 1 }, g(e.items, (n, r) => (v(), H("div", {
			key: r,
			class: R(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
			role: "row"
		}, [(v(!0), H(x, null, g(n, (e, n) => (v(), H("div", {
			key: e.value,
			ref_for: !0,
			ref: (t) => ce(t, e, r, n),
			role: "gridcell",
			class: R(re.value),
			"aria-selected": e.active || void 0,
			"aria-disabled": e.disabled || void 0,
			tabindex: "0",
			"data-test-id": e.text,
			onClick: A((t) => ae(e), ["prevent"]),
			onKeydown: (t) => I(Ti)(t, () => ae(e), !0),
			onMouseover: (t) => ue(e.value)
		}, [U("div", { class: R(e.className) }, [t.$slots.item ? _(t.$slots, "item", {
			key: 0,
			item: e
		}) : P("", !0), t.$slots.item ? P("", !0) : (v(), H(x, { key: 1 }, [te(se(e.text), 1)], 64))], 2)], 42, to))), 128))], 2))), 128))], 6), t.$slots["button-icon"] ? h((v(), H("button", {
			key: 0,
			ref_key: "toggleButton",
			ref: O,
			type: "button",
			"aria-label": I(u)?.toggleOverlay,
			class: R(F.value),
			tabindex: "0",
			onClick: oe,
			onKeydown: me
		}, [_(t.$slots, "button-icon")], 42, no)), [[p, !I(y)(e.hideNavigation, e.type)]]) : P("", !0)], 46, $a));
	}
}), io = ["data-dp-mobile"], ao = /* @__PURE__ */ F({
	__name: "InstanceWrap",
	props: {
		multiCalendars: {},
		stretch: { type: Boolean },
		collapse: { type: Boolean },
		isMobile: { type: Boolean }
	},
	setup(e) {
		let t = e, n = V(() => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]), r = V(() => ({ dp__instance_calendar: t.multiCalendars > 0 }));
		return (t, i) => (v(), H("div", {
			class: R({
				dp__menu_inner: !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				dp__flex_display: e.multiCalendars > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": e.isMobile
		}, [(v(!0), H(x, null, g(n.value, (e, n) => (v(), H("div", {
			key: e,
			class: R(r.value)
		}, [_(t.$slots, "default", {
			instance: e,
			index: n
		})], 2))), 128))], 10, io));
	}
}), oo = [
	"data-dp-element",
	"aria-label",
	"aria-disabled"
], so = /* @__PURE__ */ F({
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
		return w(() => n("set-ref", r)), (t, i) => (v(), H("button", {
			ref_key: "elRef",
			ref: r,
			type: "button",
			"data-dp-element": e.elName,
			class: "dp__btn dp--arrow-btn-nav",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-disabled": e.disabled || void 0,
			onClick: i[0] ||= (e) => n("activate"),
			onKeydown: i[1] ||= (e) => I(Ti)(e, () => n("activate"), !0)
		}, [U("span", { class: R(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }]) }, [_(t.$slots, "default")], 2)], 40, oo));
	}
}), co = ["aria-label", "data-test-id"], lo = /* @__PURE__ */ F({
	__name: "YearModePicker",
	props: {
		...Ya,
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
		let n = t, r = e, { showRightIcon: a, showLeftIcon: o } = Ts(), { defaultedConfig: s, defaultedMultiCalendars: c, defaultedAriaLabels: u, defaultedTransitions: d, defaultedUI: f } = Ga(r), { showTransition: p, transitionName: m } = xs(d), h = W(!1), g = V(() => bi(r.year, r.locale)), y = (e = !1, t) => {
			h.value = !h.value, n("toggle-year-picker", {
				flow: e,
				show: t
			});
		}, b = (e) => {
			h.value = !1, n("year-select", e);
		}, S = (e = !1) => {
			n("handle-year", e);
		};
		return (t, n) => (v(), H(x, null, [U("div", { class: R(["dp--year-mode-picker", { "dp--hidden-el": h.value }]) }, [
			I(o)(I(c), e.instance) ? (v(), z(so, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": I(u)?.prevYear,
				disabled: e.isDisabled(!1),
				class: R(I(f)?.navBtnPrev),
				onActivate: n[0] ||= (e) => S(!1)
			}, {
				default: l(() => [t.$slots["arrow-left"] ? _(t.$slots, "arrow-left", { key: 0 }) : P("", !0), t.$slots["arrow-left"] ? P("", !0) : (v(), z(I(Pr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : P("", !0),
			U("button", {
				ref: "mpYearButtonRef",
				class: "dp__btn dp--year-select",
				type: "button",
				"aria-label": `${e.year}-${I(u)?.openYearsOverlay}`,
				"data-test-id": `year-mode-btn-${e.instance}`,
				onClick: n[1] ||= () => y(!1),
				onKeydown: n[2] ||= j(() => y(!1), ["enter"])
			}, [t.$slots.year ? _(t.$slots, "year", {
				key: 0,
				year: e.year,
				text: g.value,
				value: e.year
			}) : P("", !0), t.$slots.year ? P("", !0) : (v(), H(x, { key: 1 }, [te(se(g.value), 1)], 64))], 40, co),
			I(a)(I(c), e.instance) ? (v(), z(so, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": I(u)?.nextYear,
				disabled: e.isDisabled(!0),
				class: R(I(f)?.navBtnNext),
				onActivate: n[3] ||= (e) => S(!0)
			}, {
				default: l(() => [t.$slots["arrow-right"] ? _(t.$slots, "arrow-right", { key: 0 }) : P("", !0), t.$slots["arrow-right"] ? P("", !0) : (v(), z(I(Fr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : P("", !0)
		], 2), B(i, {
			name: I(m)(e.showYearPicker),
			css: I(p)
		}, {
			default: l(() => [e.showYearPicker ? (v(), z(ro, {
				key: 0,
				items: e.items,
				"text-input": t.textInput,
				"esc-close": t.escClose,
				config: t.config,
				"is-last": t.autoApply && !I(s).keepActionRow,
				"hide-navigation": t.hideNavigation,
				"aria-labels": t.ariaLabels,
				"overlay-label": I(u)?.yearPicker?.(!0),
				type: "year",
				onToggle: y,
				onSelected: n[4] ||= (e) => b(e)
			}, ge({
				"button-icon": l(() => [t.$slots["calendar-icon"] ? _(t.$slots, "calendar-icon", { key: 0 }) : P("", !0), t.$slots["calendar-icon"] ? P("", !0) : (v(), z(I(Mr), { key: 1 }))]),
				_: 2
			}, [t.$slots["year-overlay-value"] ? {
				name: "item",
				fn: l(({ item: e }) => [_(t.$slots, "year-overlay-value", {
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
			])) : P("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 64));
	}
}), uo = (e, t, n) => {
	if (t.value && Array.isArray(t.value)) {
		if (t.value.some((t) => Z(e, t))) {
			let n = t.value.filter((t) => !Z(t, e));
			t.value = n.length ? n : null;
		} else (n && +n > t.value.length || !n) && t.value.push(e);
	} else t.value = [e];
}, fo = (e, t, n) => {
	let r = e.value ? e.value.slice() : [];
	return r.length === 2 && r[1] !== null && (r = []), r.length ? (Pi(t, r[0]) ? r.unshift(t) : r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, po = (e, t, n, r) => {
	e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, mo = (e) => {
	Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => zr(X(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = zr(X(e.value), e.timezone));
}, ho = (e, t, n, r) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && r.value.partialRange) ? r.value.fixedStart && (Fi(e, t.value[0]) || Z(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (Pi(e, t.value[1]) || Z(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], go = ({ multiCalendars: e, range: t, highlight: n, propDates: r, calendars: i, modelValue: a, props: o, filters: s, year: c, month: l, emit: u }) => {
	let d = V(() => ni(o.yearRange, o.locale, o.reverseYears)), f = W([!1]), p = V(() => (e, t) => {
		let n = Cr(Li(/* @__PURE__ */ new Date()), {
			month: l.value(e),
			year: c.value(e)
		});
		return Yi(t ? pt(n) : mt(n), r.value.maxDate, r.value.minDate, o.preventMinMaxNavigation, t);
	}), m = () => Array.isArray(a.value) && e.value.solo && a.value[1], h = () => {
		for (let t = 0; t < e.value.count; t++) if (t === 0) i.value[t] = i.value[0];
		else if (t === e.value.count - 1 && m()) i.value[t] = {
			month: q(a.value[1]),
			year: J(a.value[1])
		};
		else {
			let e = Cr(X(), i.value[t - 1]);
			i.value[t] = {
				month: q(e),
				year: J(tt(e, 1))
			};
		}
	}, g = (t) => {
		if (!t) return h();
		let n = Cr(X(), i.value[t]);
		return i.value[0].year = J(jr(n, e.value.count - 1)), h();
	}, _ = (e, n) => {
		let r = st(n, e);
		return t.value.showLastInRange && r > 1 ? n : e;
	}, v = (t) => o.focusStartDate || e.value.solo ? t[0] : t[1] ? _(t[0], t[1]) : t[0], y = () => {
		if (a.value) {
			let e = Array.isArray(a.value) ? v(a.value) : a.value;
			i.value[0] = {
				month: q(e),
				year: J(e)
			};
		}
	}, b = () => {
		y(), e.value.count && h();
	};
	T(a, (e, t) => {
		o.isTextInputDate && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && b();
	}), w(() => {
		b();
	});
	let x = (t, n) => {
		i.value[n].year = t, u("update-month-year", {
			instance: n,
			year: t,
			month: i.value[n].month
		}), e.value.count && !e.value.solo && g(n);
	}, S = V(() => (e) => hi(d.value, (t) => ({
		active: c.value(e) === t.value,
		disabled: mi(t.value, Hi(r.value.minDate), Hi(r.value.maxDate)) || s.value.years?.includes(c.value(e)),
		highlighted: ua(n.value, t.value)
	}))), C = (e, t) => {
		x(e, t), D(t);
	}, E = (e, t = !1) => {
		if (!p.value(e, t)) {
			let n = t ? c.value(e) + 1 : c.value(e) - 1;
			x(n, e);
		}
	}, D = (e, t = !1, n) => {
		t || u("reset-flow"), n === void 0 ? f.value[e] = !f.value[e] : f.value[e] = n, f.value[e] ? u("overlay-toggle", {
			open: !0,
			overlay: Jr.year
		}) : (u("overlay-closed"), u("overlay-toggle", {
			open: !1,
			overlay: Jr.year
		}));
	};
	return {
		isDisabled: p,
		groupedYears: S,
		showYearPicker: f,
		selectYear: x,
		toggleYearPicker: D,
		handleYearSelect: C,
		handleYear: E
	};
}, _o = (e, t) => {
	let { defaultedMultiCalendars: n, defaultedAriaLabels: r, defaultedTransitions: i, defaultedConfig: a, defaultedRange: o, defaultedHighlight: s, propDates: c, defaultedTz: l, defaultedFilters: u, defaultedMultiDates: d } = Ga(e), { modelValue: f, year: p, month: m, calendars: h } = Ss(e, t, () => {
		e.isTextInputDate && y(J(X(e.startDate)), 0);
	}), g = V(() => ri(e.formatLocale, e.locale, e.monthNameFormat)), _ = W(null), { checkMinMaxRange: v } = ws(e), { selectYear: y, groupedYears: b, showYearPicker: x, toggleYearPicker: S, handleYearSelect: C, handleYear: T, isDisabled: E } = go({
		modelValue: f,
		multiCalendars: n,
		range: o,
		highlight: s,
		calendars: h,
		year: p,
		propDates: c,
		month: m,
		filters: u,
		props: e,
		emit: t
	});
	w(() => {
		e.startDate && (f.value && e.focusStartDate || !f.value) && y(J(X(e.startDate)), 0);
	});
	let D = (e) => e ? {
		month: q(e),
		year: J(e)
	} : {
		month: null,
		year: null
	}, O = () => f.value ? Array.isArray(f.value) ? f.value.map((e) => D(e)) : D(f.value) : D(), k = (e, t) => {
		let n = h.value[e], r = O();
		return Array.isArray(r) ? r.some((e) => e.year === n?.year && e.month === t) : n?.year === r.year && t === r.month;
	}, A = (e, t, n) => {
		let r = O();
		return Array.isArray(r) ? p.value(t) === r[n]?.year && e === r[n]?.month : !1;
	}, j = (e, t) => {
		if (o.value.enabled) {
			let n = O();
			if (Array.isArray(f.value) && Array.isArray(n)) {
				let n = A(e, t, 0) || A(e, t, 1), r = Ji(Li(X()), e, p.value(t));
				return Ii(f.value, _.value, r) && !n;
			}
			return !1;
		}
		return !1;
	}, M = V(() => (t) => hi(g.value, (n) => ({
		active: k(t, n.value),
		disabled: mi(n.value, Bi(p.value(t), c.value.minDate), Vi(p.value(t), c.value.maxDate)) || sa(c.value.disabledDates, p.value(t), n.value) || u.value.months?.includes(n.value) || !ca(c.value.allowedDates, p.value(t), n.value) || pa(e.yearRange, p.value(t)),
		isBetween: j(n.value, t),
		highlighted: la(s.value, n.value, p.value(t))
	}))), N = (e, t) => Ji(Li(X()), e, p.value(t)), P = (e, n) => {
		let r = f.value ? f.value : Li(/* @__PURE__ */ new Date());
		f.value = Ji(r, e, p.value(n)), t("auto-apply"), t("update-flow-step");
	}, ee = (n, r) => {
		let i = N(n, r);
		o.value.fixedEnd || o.value.fixedStart ? f.value = ho(i, f, t, o) : f.value ? v(i, f.value) && (f.value = fo(f, N(n, r), t)) : f.value = [N(n, r)], Ce().then(() => {
			po(f.value, t, e.autoApply, e.modelAuto);
		});
	}, te = (e, n) => {
		uo(N(e, n), f, d.value.limit), t("auto-apply", !0);
	}, ne = (e, t) => (h.value[t].month = e, F(t, h.value[t].year, e), d.value.enabled ? te(e, t) : o.value.enabled ? ee(e, t) : P(e, t)), re = (e, t) => {
		y(e, t), F(t, e, null);
	}, F = (e, n, r) => {
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
		groupedMonths: M,
		groupedYears: b,
		year: p,
		isDisabled: E,
		defaultedMultiCalendars: n,
		defaultedAriaLabels: r,
		defaultedTransitions: i,
		defaultedConfig: a,
		showYearPicker: x,
		modelValue: f,
		presetDate: (e, n) => {
			mo({
				value: e,
				modelValue: f,
				range: o.value.enabled,
				timezone: n ? void 0 : l.value.timezone
			}), t("auto-apply");
		},
		setHoverDate: (e, t) => {
			_.value = N(e, t);
		},
		selectMonth: ne,
		selectYear: re,
		toggleYearPicker: S,
		handleYearSelect: C,
		handleYear: T,
		getModelMonthYear: O
	};
}, vo = /* @__PURE__ */ F({
	compatConfig: { MODE: 3 },
	__name: "MonthPicker",
	props: { ...Ya },
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
		let i = n, a = bs(r(), "yearMode"), o = e;
		w(() => {
			o.shadow || i("mount", null);
		});
		let { groupedMonths: s, groupedYears: c, year: u, isDisabled: d, defaultedMultiCalendars: f, defaultedConfig: p, showYearPicker: m, modelValue: h, presetDate: y, setHoverDate: b, selectMonth: x, selectYear: S, toggleYearPicker: C, handleYearSelect: T, handleYear: E, getModelMonthYear: D } = _o(o, i);
		return t({
			getSidebarProps: () => ({
				modelValue: h,
				year: u,
				getModelMonthYear: D,
				selectMonth: x,
				selectYear: S,
				handleYear: E
			}),
			presetDate: y,
			toggleYearPicker: (e) => C(0, e)
		}), (e, t) => (v(), z(ao, {
			"multi-calendars": I(f).count,
			collapse: e.collapse,
			stretch: "",
			"is-mobile": e.isMobile
		}, {
			default: l(({ instance: t }) => [e.$slots["top-extra"] ? _(e.$slots, "top-extra", {
				key: 0,
				value: e.internalModelValue
			}) : P("", !0), e.$slots["month-year"] ? _(e.$slots, "month-year", me(xe({ key: 1 }, {
				year: I(u),
				months: I(s)(t),
				years: I(c)(t),
				selectMonth: I(x),
				selectYear: I(S),
				instance: t
			}))) : (v(), z(ro, {
				key: 2,
				items: I(s)(t),
				"arrow-navigation": e.arrowNavigation,
				"is-last": e.autoApply && !I(p).keepActionRow,
				"esc-close": e.escClose,
				height: I(p).modeHeight,
				config: e.config,
				"no-overlay-focus": !!(e.noOverlayFocus || e.textInput),
				"use-relative": "",
				type: "month",
				onSelected: (e) => I(x)(e, t),
				onHoverValue: (e) => I(b)(e, t)
			}, ge({
				header: l(() => [B(lo, xe(e.$props, {
					items: I(c)(t),
					instance: t,
					"show-year-picker": I(m)[t],
					year: I(u)(t),
					"is-disabled": (e) => I(d)(t, e),
					onHandleYear: (e) => I(E)(t, e),
					onYearSelect: (e) => I(T)(e, t),
					onToggleYearPicker: (e) => I(C)(t, e?.flow, e?.show)
				}), ge({ _: 2 }, [g(I(a), (t, n) => ({
					name: t,
					fn: l((n) => [_(e.$slots, t, me(pe(n)))])
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
				fn: l(({ item: t }) => [_(e.$slots, "month-overlay-value", {
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
}), yo = (e, t) => {
	let { modelValue: n } = Ss(e, t, () => {
		e.isTextInputDate && (l.value = J(X(e.startDate)));
	}), r = W(null), { defaultedHighlight: i, defaultedMultiDates: a, defaultedFilters: o, defaultedRange: s, propDates: c } = Ga(e), l = W();
	w(() => {
		e.startDate && (n.value && e.focusStartDate || !n.value) && (l.value = J(X(e.startDate)));
	});
	let u = (e) => Array.isArray(n.value) ? n.value.some((t) => J(t) === e) : n.value ? J(n.value) === e : !1, d = (e) => s.value.enabled && Array.isArray(n.value) ? Ii(n.value, r.value, h(e)) : !1, f = (e) => c.value.allowedDates instanceof Map ? c.value.allowedDates.size ? c.value.allowedDates.has(`${e}`) : !1 : !0, p = (e) => c.value.disabledDates instanceof Map ? c.value.disabledDates.size ? c.value.disabledDates.has(`${e}`) : !1 : typeof c.value.disabledDates != "function" || c.value.disabledDates(Or(Mi(mt(X())), e)), m = V(() => hi(ni(e.yearRange, e.locale, e.reverseYears), (e) => {
		let t = u(e.value);
		return {
			active: t,
			disabled: mi(e.value, Hi(c.value.minDate), Hi(c.value.maxDate)) || o.value.years.includes(e.value) || !f(e.value) || p(e.value),
			isBetween: d(e.value) && !t,
			highlighted: ua(i.value, e.value)
		};
	})), h = (e) => Or(Li(mt(/* @__PURE__ */ new Date())), e);
	return {
		groupedYears: m,
		modelValue: n,
		focusYear: l,
		setHoverValue: (e) => {
			r.value = Or(Li(/* @__PURE__ */ new Date()), e);
		},
		selectYear: (r) => {
			if (t("update-month-year", {
				instance: 0,
				year: r
			}), a.value.enabled) return n.value ? Array.isArray(n.value) && ((n.value?.map((e) => J(e))).includes(r) ? n.value = n.value.filter((e) => J(e) !== r) : n.value.push(Or(Mi(X()), r))) : n.value = [Or(Mi(mt(X())), r)], t("auto-apply", !0);
			s.value.enabled ? (n.value = fo(n, h(r), t), Ce().then(() => {
				po(n.value, t, e.autoApply, e.modelAuto);
			})) : (n.value = h(r), t("auto-apply"));
		}
	};
}, bo = /* @__PURE__ */ F({
	compatConfig: { MODE: 3 },
	__name: "YearPicker",
	props: { ...Ya },
	emits: [
		"update:internal-model-value",
		"reset-flow",
		"range-start",
		"range-end",
		"auto-apply",
		"update-month-year"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, { groupedYears: a, modelValue: o, focusYear: s, selectYear: c, setHoverValue: u } = yo(i, r), { defaultedConfig: d } = Ga(i);
		return t({ getSidebarProps: () => ({
			modelValue: o,
			selectYear: c
		}) }), (e, t) => (v(), H("div", null, [e.$slots["top-extra"] ? _(e.$slots, "top-extra", {
			key: 0,
			value: e.internalModelValue
		}) : P("", !0), e.$slots["month-year"] ? _(e.$slots, "month-year", me(xe({ key: 1 }, {
			years: I(a),
			selectYear: I(c)
		}))) : (v(), z(ro, {
			key: 2,
			items: I(a),
			"is-last": e.autoApply && !I(d).keepActionRow,
			height: I(d).modeHeight,
			config: e.config,
			"no-overlay-focus": !!(e.noOverlayFocus || e.textInput),
			"focus-value": I(s),
			type: "year",
			"use-relative": "",
			onSelected: I(c),
			onHoverValue: I(u)
		}, ge({ _: 2 }, [e.$slots["year-overlay-value"] ? {
			name: "item",
			fn: l(({ item: t }) => [_(e.$slots, "year-overlay-value", {
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
}), xo = {
	key: 0,
	class: "dp__time_input"
}, So = ["data-compact", "data-collapsed"], Co = [
	"data-test-id",
	"aria-label",
	"onKeydown",
	"onClick",
	"onMousedown"
], wo = [
	"aria-label",
	"disabled",
	"data-test-id",
	"onKeydown",
	"onClick"
], To = [
	"data-test-id",
	"aria-label",
	"onKeydown",
	"onClick",
	"onMousedown"
], Eo = { key: 0 }, Do = ["aria-label", "data-compact"], Oo = /* @__PURE__ */ F({
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
		...Ya
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
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, { setTimePickerElements: o, setTimePickerBackRef: s } = wa(), { defaultedAriaLabels: c, defaultedTransitions: u, defaultedFilters: d, defaultedConfig: p, defaultedRange: m, defaultedMultiCalendars: h } = Ga(a), { transitionName: y, showTransition: b } = xs(u), S = ve({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), C = W("AM"), T = W(null), E = W([]), D = W(), O = W(!1);
		w(() => {
			r("mounted");
		});
		let k = (e) => Cr(/* @__PURE__ */ new Date(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: a.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), A = V(() => (e) => B(e, a[e]) || M(e, a[e])), j = V(() => ({
			hours: a.hours,
			minutes: a.minutes,
			seconds: a.seconds
		})), M = (e, t) => m.value.enabled && !m.value.disableTimeRangeValidation ? !a.validateTime(e, t) : !1, N = (e, t) => {
			if (m.value.enabled && !m.value.disableTimeRangeValidation) {
				let n = t ? +a[`${e}Increment`] : -+a[`${e}Increment`], r = a[e] + n;
				return !a.validateTime(e, r);
			}
			return !1;
		}, ee = V(() => (e) => !pe(+a[e] + +a[`${e}Increment`], e) || N(e, !0)), ne = V(() => (e) => !pe(+a[e] - a[`${e}Increment`], e) || N(e, !1)), re = (e, t) => Ve(Cr(X(), e), t), F = (e, t) => Ar(Cr(X(), e), t), L = V(() => ({
			dp__time_col: !0,
			dp__time_col_block: !a.timePickerInline,
			dp__time_col_reg_block: !a.enableSeconds && a.is24 && !a.timePickerInline,
			dp__time_col_reg_inline: !a.enableSeconds && a.is24 && a.timePickerInline,
			dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
			dp__time_col_sec: a.enableSeconds && a.is24,
			dp__time_col_sec_with_button: a.enableSeconds && !a.is24
		})), ie = V(() => a.timePickerInline && m.value.enabled && !h.value.count), ae = V(() => {
			let e = [{ type: "hours" }];
			return a.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), a.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), oe = V(() => ae.value.filter((e) => !e.separator)), ce = V(() => (e) => {
			if (e === "hours") {
				let e = xe(+a.hours);
				return {
					text: e < 10 ? `0${e}` : `${e}`,
					value: e
				};
			}
			return {
				text: a[e] < 10 ? `0${a[e]}` : `${a[e]}`,
				value: a[e]
			};
		}), B = (e, t) => {
			if (!a.disabledTimesConfig) return !1;
			let n = a.disabledTimesConfig(a.order, e === "hours" ? t : void 0);
			return !n[e] || !!n[e]?.includes(t);
		}, le = (e, t) => t !== "hours" || C.value === "AM" ? e : e + 12, ue = (e) => {
			let t = a.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +a[`${e}GridIncrement`], i = e === "hours" && !a.is24 ? r : 0, o = [];
			for (let t = i; t < n; t += r) o.push({
				value: a.is24 ? t : le(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !a.is24 && o.unshift({
				value: C.value === "PM" ? 12 : 0,
				text: "12"
			}), hi(o, (t) => ({
				active: !1,
				disabled: d.value.times[e].includes(t.value) || !pe(t.value, e) || B(e, t.value) || M(e, t.value)
			}));
		}, de = (e) => e >= 0 ? e : 59, fe = (e) => e >= 0 ? e : 23, pe = (e, t) => {
			let n = a.minTime ? k(Ri(a.minTime)) : null, r = a.maxTime ? k(Ri(a.maxTime)) : null, i = k(Ri(j.value, t, t === "minutes" || t === "seconds" ? de(e) : fe(e)));
			return n && r ? (ln(i, r) || un(i, r)) && (cn(i, n) || un(i, n)) : n ? cn(i, n) || un(i, n) : !r || ln(i, r) || un(i, r);
		}, me = (e) => a[`no${e[0].toUpperCase() + e.slice(1)}Overlay`], he = (e) => {
			me(e) || (S[e] = !S[e], S[e] ? (O.value = !0, r("overlay-opened", e)) : (O.value = !1, r("overlay-closed", e)));
		}, _e = (e) => e === "hours" ? rn : e === "minutes" ? on : sn, ye = () => {
			D.value && clearTimeout(D.value);
		}, be = (e, t = !0, n) => {
			let i = t ? re : F, o = t ? +a[`${e}Increment`] : -+a[`${e}Increment`];
			pe(+a[e] + o, e) && r(`update:${e}`, _e(e)(i({ [e]: +a[e] }, { [e]: +a[`${e}Increment`] }))), !n?.keyboard && p.value.timeArrowHoldThreshold && (D.value = setTimeout(() => {
				be(e, t);
			}, p.value.timeArrowHoldThreshold));
		}, xe = (e) => a.is24 ? e : (e >= 12 ? C.value = "PM" : C.value = "AM", ii(e)), Se = () => {
			C.value === "PM" ? (C.value = "AM", r("update:hours", a.hours - 12)) : (C.value = "PM", r("update:hours", a.hours + 12)), r("am-pm-change", C.value);
		}, Ce = (e) => {
			S[e] = !0;
		}, we = (e, t, n) => {
			if (e && a.arrowNavigation) {
				Array.isArray(E.value[t]) ? E.value[t][n] = e : E.value[t] = [e];
				let r = E.value.reduce((e, t) => t.map((n, r) => [...e[r] || [], t[r]]), []);
				s(a.closeTimePickerBtn), T.value && (r[1] = r[1].concat(T.value)), o(r, a.order);
			}
		}, Te = (e, t) => (he(e), r(`update:${e}`, t));
		return t({ openChildCmp: Ce }), (e, t) => e.disabled ? P("", !0) : (v(), H("div", xo, [
			(v(!0), H(x, null, g(ae.value, (n, r) => (v(), H("div", {
				key: r,
				class: R(L.value),
				"data-compact": ie.value && !e.enableSeconds,
				"data-collapsed": ie.value && e.enableSeconds
			}, [n.separator ? (v(), H(x, { key: 0 }, [O.value ? P("", !0) : (v(), H(x, { key: 0 }, [te(":")], 64))], 64)) : (v(), H(x, { key: 1 }, [
				U("button", {
					ref_for: !0,
					ref: (e) => we(e, r, 0),
					type: "button",
					class: R({
						dp__btn: !0,
						dp__inc_dec_button: !e.timePickerInline,
						dp__inc_dec_button_inline: e.timePickerInline,
						dp__tp_inline_btn_top: e.timePickerInline,
						dp__inc_dec_button_disabled: ee.value(n.type),
						"dp--hidden-el": O.value
					}),
					"data-test-id": `${n.type}-time-inc-btn-${a.order}`,
					"aria-label": I(c)?.incrementValue(n.type),
					tabindex: "0",
					onKeydown: (e) => I(Ti)(e, () => be(n.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => I(p).timeArrowHoldThreshold ? void 0 : be(n.type, !0),
					onMousedown: (e) => I(p).timeArrowHoldThreshold ? be(n.type, !0) : void 0,
					onMouseup: ye
				}, [a.timePickerInline ? (v(), H(x, { key: 1 }, [e.$slots["tp-inline-arrow-up"] ? _(e.$slots, "tp-inline-arrow-up", { key: 0 }) : (v(), H(x, { key: 1 }, [t[2] ||= U("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), t[3] ||= U("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)], 64))], 64)) : (v(), H(x, { key: 0 }, [e.$slots["arrow-up"] ? _(e.$slots, "arrow-up", { key: 0 }) : P("", !0), e.$slots["arrow-up"] ? P("", !0) : (v(), z(I(Lr), { key: 1 }))], 64))], 42, Co),
				U("button", {
					ref_for: !0,
					ref: (e) => we(e, r, 1),
					type: "button",
					"aria-label": `${ce.value(n.type).text}-${I(c)?.openTpOverlay(n.type)}`,
					class: R({
						dp__time_display: !0,
						dp__time_display_block: !e.timePickerInline,
						dp__time_display_inline: e.timePickerInline,
						"dp--time-invalid": A.value(n.type),
						"dp--time-overlay-btn": !A.value(n.type),
						"dp--hidden-el": O.value
					}),
					disabled: me(n.type),
					tabindex: "0",
					"data-test-id": `${n.type}-toggle-overlay-btn-${a.order}`,
					onKeydown: (e) => I(Ti)(e, () => he(n.type), !0),
					onClick: (e) => he(n.type)
				}, [e.$slots[n.type] ? _(e.$slots, n.type, {
					key: 0,
					text: ce.value(n.type).text,
					value: ce.value(n.type).value
				}) : P("", !0), e.$slots[n.type] ? P("", !0) : (v(), H(x, { key: 1 }, [te(se(ce.value(n.type).text), 1)], 64))], 42, wo),
				U("button", {
					ref_for: !0,
					ref: (e) => we(e, r, 2),
					type: "button",
					class: R({
						dp__btn: !0,
						dp__inc_dec_button: !e.timePickerInline,
						dp__inc_dec_button_inline: e.timePickerInline,
						dp__tp_inline_btn_bottom: e.timePickerInline,
						dp__inc_dec_button_disabled: ne.value(n.type),
						"dp--hidden-el": O.value
					}),
					"data-test-id": `${n.type}-time-dec-btn-${a.order}`,
					"aria-label": I(c)?.decrementValue(n.type),
					tabindex: "0",
					onKeydown: (e) => I(Ti)(e, () => be(n.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => I(p).timeArrowHoldThreshold ? void 0 : be(n.type, !1),
					onMousedown: (e) => I(p).timeArrowHoldThreshold ? be(n.type, !1) : void 0,
					onMouseup: ye
				}, [a.timePickerInline ? (v(), H(x, { key: 1 }, [e.$slots["tp-inline-arrow-down"] ? _(e.$slots, "tp-inline-arrow-down", { key: 0 }) : (v(), H(x, { key: 1 }, [t[4] ||= U("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), t[5] ||= U("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)], 64))], 64)) : (v(), H(x, { key: 0 }, [e.$slots["arrow-down"] ? _(e.$slots, "arrow-down", { key: 0 }) : P("", !0), e.$slots["arrow-down"] ? P("", !0) : (v(), z(I(Rr), { key: 1 }))], 64))], 42, To)
			], 64))], 10, So))), 128)),
			e.is24 ? P("", !0) : (v(), H("div", Eo, [e.$slots["am-pm-button"] ? _(e.$slots, "am-pm-button", {
				key: 0,
				toggle: Se,
				value: C.value
			}) : P("", !0), e.$slots["am-pm-button"] ? P("", !0) : (v(), H("button", {
				key: 1,
				ref_key: "amPmButton",
				ref: T,
				type: "button",
				class: "dp__pm_am_button",
				role: "button",
				"aria-label": I(c)?.amPmButton,
				tabindex: "0",
				"data-compact": ie.value,
				onClick: Se,
				onKeydown: t[0] ||= (e) => I(Ti)(e, () => Se(), !0)
			}, se(C.value), 41, Do))])),
			(v(!0), H(x, null, g(oe.value, (n, r) => (v(), z(i, {
				key: r,
				name: I(y)(S[n.type]),
				css: I(b)
			}, {
				default: l(() => [S[n.type] ? (v(), z(ro, {
					key: 0,
					items: ue(n.type),
					"is-last": e.autoApply && !I(p).keepActionRow,
					"esc-close": e.escClose,
					type: n.type,
					"text-input": e.textInput,
					config: e.config,
					"arrow-navigation": e.arrowNavigation,
					"aria-labels": e.ariaLabels,
					"overlay-label": I(c).timeOverlay?.(n.type),
					onSelected: (e) => Te(n.type, e),
					onToggle: (e) => he(n.type),
					onResetFlow: t[1] ||= (t) => e.$emit("reset-flow")
				}, ge({
					"button-icon": l(() => [e.$slots["clock-icon"] ? _(e.$slots, "clock-icon", { key: 0 }) : P("", !0), e.$slots["clock-icon"] ? P("", !0) : (v(), z(f(e.timePickerInline ? I(Mr) : I(Ir)), { key: 1 }))]),
					_: 2
				}, [e.$slots[`${n.type}-overlay-value`] ? {
					name: "item",
					fn: l(({ item: t }) => [_(e.$slots, `${n.type}-overlay-value`, {
						text: t.text,
						value: t.value
					})]),
					key: "0"
				} : void 0, e.$slots[`${n.type}-overlay-header`] ? {
					name: "header",
					fn: l(() => [_(e.$slots, `${n.type}-overlay-header`, { toggle: () => he(n.type) })]),
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
				])) : P("", !0)]),
				_: 2
			}, 1032, ["name", "css"]))), 128))
		]));
	}
}), ko = ["data-dp-mobile"], Ao = ["aria-label", "tabindex"], jo = [
	"role",
	"aria-label",
	"tabindex"
], Mo = ["aria-label"], No = /* @__PURE__ */ F({
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
		...Ya
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
		let a = n, o = e, { buildMatrix: s, setTimePicker: c } = wa(), u = r(), { defaultedTransitions: d, defaultedAriaLabels: f, defaultedTextInput: m, defaultedConfig: y, defaultedRange: b } = Ga(o), { transitionName: S, showTransition: C } = xs(d), { hideNavigationButtons: T } = Ts(), E = W(null), D = W(null), O = W([]), k = W(null), A = W(!1);
		w(() => {
			a("mount"), !o.timePicker && o.arrowNavigation ? s([ai(E.value)], "time") : c(!0, o.timePicker);
		});
		let j = V(() => b.value.enabled && o.modelAuto ? si(o.internalModelValue) : !0), M = W(!1), N = (e) => ({
			hours: Array.isArray(o.hours) ? o.hours[e] : o.hours,
			minutes: Array.isArray(o.minutes) ? o.minutes[e] : o.minutes,
			seconds: Array.isArray(o.seconds) ? o.seconds[e] : o.seconds
		}), ee = V(() => {
			let e = [];
			if (b.value.enabled) for (let t = 0; t < 2; t++) e.push(N(t));
			else e.push(N(0));
			return e;
		}), te = (e, t = !1, n = "") => {
			t || a("reset-flow"), M.value = e, a(e ? "overlay-opened" : "overlay-closed", Jr.time), o.arrowNavigation && c(e), Ce(() => {
				n !== "" && O.value[0] && O.value[0].openChildCmp(n);
			});
		}, ne = V(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__button_bottom: o.autoApply && !y.value.keepActionRow
		})), re = bs(u, "timePicker"), F = (e, t, n) => b.value.enabled ? t === 0 ? [e, ee.value[1][n]] : [ee.value[0][n], e] : e, L = (e) => {
			a("update:hours", e);
		}, ie = (e) => {
			a("update:minutes", e);
		}, ae = (e) => {
			a("update:seconds", e);
		}, oe = () => {
			if (k.value && !m.value.enabled && !o.noOverlayFocus) {
				let e = fi(k.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, se = (e) => {
			A.value = !1, a("overlay-closed", e);
		}, ce = (e) => {
			A.value = !0, a("overlay-opened", e);
		};
		return t({ toggleTimePicker: te }), (t, n) => (v(), H("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": t.isMobile
		}, [!t.timePicker && !t.timePickerInline ? h((v(), H("button", {
			key: 0,
			ref_key: "openTimePickerBtn",
			ref: E,
			type: "button",
			class: R({
				...ne.value,
				"dp--hidden-el": M.value
			}),
			"aria-label": I(f)?.openTimePicker,
			tabindex: t.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: n[0] ||= (e) => I(Ti)(e, () => te(!0)),
			onClick: n[1] ||= (e) => te(!0)
		}, [t.$slots["clock-icon"] ? _(t.$slots, "clock-icon", { key: 0 }) : P("", !0), t.$slots["clock-icon"] ? P("", !0) : (v(), z(I(Ir), { key: 1 }))], 42, Ao)), [[p, !I(T)(t.hideNavigation, "time")]]) : P("", !0), B(i, {
			name: I(S)(M.value),
			css: I(C) && !t.timePickerInline
		}, {
			default: l(() => [M.value || t.timePicker || t.timePickerInline ? (v(), H("div", {
				key: 0,
				ref_key: "overlayRef",
				ref: k,
				role: t.timePickerInline ? void 0 : "dialog",
				class: R({
					dp__overlay: !t.timePickerInline,
					"dp--overlay-absolute": !o.timePicker && !t.timePickerInline,
					"dp--overlay-relative": o.timePicker
				}),
				style: de(t.timePicker ? { height: `${I(y).modeHeight}px` } : void 0),
				"aria-label": I(f)?.timePicker,
				tabindex: t.timePickerInline ? void 0 : 0
			}, [U("div", {
				class: R(t.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
				style: { display: "flex" }
			}, [
				t.$slots["time-picker-overlay"] ? _(t.$slots, "time-picker-overlay", {
					key: 0,
					hours: e.hours,
					minutes: e.minutes,
					seconds: e.seconds,
					setHours: L,
					setMinutes: ie,
					setSeconds: ae
				}) : P("", !0),
				t.$slots["time-picker-overlay"] ? P("", !0) : (v(), H("div", {
					key: 1,
					class: R(t.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
				}, [(v(!0), H(x, null, g(ee.value, (r, i) => h((v(), z(Oo, xe({ key: i }, { ref_for: !0 }, {
					...t.$props,
					order: i,
					hours: r.hours,
					minutes: r.minutes,
					seconds: r.seconds,
					closeTimePickerBtn: D.value,
					disabledTimesConfig: e.disabledTimesConfig,
					disabled: i === 0 ? I(b).fixedStart : I(b).fixedEnd
				}, {
					ref_for: !0,
					ref_key: "timeInputRefs",
					ref: O,
					"validate-time": (t, n) => e.validateTime(t, F(n, i, t)),
					"onUpdate:hours": (e) => L(F(e, i, "hours")),
					"onUpdate:minutes": (e) => ie(F(e, i, "minutes")),
					"onUpdate:seconds": (e) => ae(F(e, i, "seconds")),
					onMounted: oe,
					onOverlayClosed: se,
					onOverlayOpened: ce,
					onAmPmChange: n[2] ||= (e) => t.$emit("am-pm-change", e)
				}), ge({ _: 2 }, [g(I(re), (e, n) => ({
					name: e,
					fn: l((n) => [_(t.$slots, e, xe({ ref_for: !0 }, n))])
				}))]), 1040, [
					"validate-time",
					"onUpdate:hours",
					"onUpdate:minutes",
					"onUpdate:seconds"
				])), [[p, i === 0 || j.value]])), 128))], 2)),
				!t.timePicker && !t.timePickerInline ? h((v(), H("button", {
					key: 2,
					ref_key: "closeTimePickerBtn",
					ref: D,
					type: "button",
					class: R({
						...ne.value,
						"dp--hidden-el": A.value
					}),
					"aria-label": I(f)?.closeTimePicker,
					tabindex: "0",
					onKeydown: n[3] ||= (e) => I(Ti)(e, () => te(!1)),
					onClick: n[4] ||= (e) => te(!1)
				}, [t.$slots["calendar-icon"] ? _(t.$slots, "calendar-icon", { key: 0 }) : P("", !0), t.$slots["calendar-icon"] ? P("", !0) : (v(), z(I(Mr), { key: 1 }))], 42, Mo)), [[p, !I(T)(t.hideNavigation, "time")]]) : P("", !0)
			], 2)], 14, jo)) : P("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, ko));
	}
}), Po = (e, t, n, r) => {
	let { defaultedRange: i } = Ga(e), a = (e, n) => Array.isArray(t[e]) ? t[e][n] : t[e], o = (n) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[n] : t.seconds : 0, s = (e, n) => e ? n === void 0 ? Ni(e, t.hours, t.minutes, o()) : Ni(e, a("hours", n), a("minutes", n), o(n)) : Dr(X(), o(n)), c = (e, n) => {
		t[e] = n;
	}, l = V(() => e.modelAuto && i.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : i.value.enabled), u = (e, r) => {
		let a = Object.fromEntries(Object.keys(t).map((n) => n === e ? [n, r] : [n, t[n]].slice()));
		if (l.value && !i.value.disableTimeRangeValidation) {
			let e = (e) => n.value ? Ni(n.value[e], a.hours[e], a.minutes[e], a.seconds[e]) : null, t = (e) => Tr(n.value[e], 0);
			return !(Z(e(0), e(1)) && (cn(e(0), t(1)) || ln(e(1), t(0))));
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
}, Fo = (e, t) => {
	let { modelValue: n, time: r } = Ss(e, t, () => {
		e.isTextInputDate && y();
	}), { defaultedStartTime: i, defaultedRange: a, defaultedTz: o } = Ga(e), { updateTimeValues: s, getSetDateTime: c, setTime: l, assignStartTime: u, disabledTimesConfig: d, validateTime: f } = Po(e, r, n, p);
	function p() {
		t("update-flow-step");
	}
	let m = (e) => {
		let { hours: t, minutes: n, seconds: r } = e;
		return {
			hours: +t,
			minutes: +n,
			seconds: r ? +r : 0
		};
	}, h = () => {
		if (e.startTime) {
			if (Array.isArray(e.startTime)) {
				let t = m(e.startTime[0]), n = m(e.startTime[1]);
				return [Cr(X(), t), Cr(X(), n)];
			}
			let t = m(e.startTime);
			return Cr(X(), t);
		}
		return a.value.enabled ? [null, null] : null;
	}, g = () => {
		if (a.value.enabled) {
			let [e, t] = h();
			n.value = [zr(c(e, 0), o.value.timezone), zr(c(t, 1), o.value.timezone)];
		} else n.value = zr(c(h()), o.value.timezone);
	}, _ = (e) => Array.isArray(e) ? [zi(X(e[0])), zi(X(e[1]))] : [zi(e ?? X())], v = (t, n, r) => {
		l("hours", t), l("minutes", n), l("seconds", e.enableSeconds ? r : 0);
	}, y = () => {
		let [e, t] = _(n.value);
		return a.value.enabled ? v([e.hours, t.hours], [e.minutes, t.minutes], [e.seconds, t.seconds]) : v(e.hours, e.minutes, e.seconds);
	};
	w(() => {
		if (!e.shadow) return u(i.value), n.value ? y() : g();
	});
	let b = () => {
		Array.isArray(n.value) ? n.value = n.value.map((e, t) => e && c(e, t)) : n.value = c(n.value), t("time-update");
	};
	return {
		modelValue: n,
		time: r,
		disabledTimesConfig: d,
		updateTime: (e, t = !0, n = !1) => {
			s(e, t, n, b);
		},
		validateTime: f
	};
}, Io = /* @__PURE__ */ F({
	compatConfig: { MODE: 3 },
	__name: "TimePickerSolo",
	props: { ...Ya },
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
		let i = n, a = e, o = bs(r(), "timePicker"), s = W(null), { time: c, modelValue: u, disabledTimesConfig: d, updateTime: f, validateTime: p } = Fo(a, i);
		return w(() => {
			a.shadow || i("mount", null);
		}), t({
			getSidebarProps: () => ({
				modelValue: u,
				time: c,
				updateTime: f
			}),
			toggleTimePicker: (e, t = !1, n = "") => {
				s.value?.toggleTimePicker(e, t, n);
			}
		}), (e, t) => (v(), z(ao, {
			"multi-calendars": 0,
			stretch: "",
			"is-mobile": e.isMobile
		}, {
			default: l(() => [B(No, xe({
				ref_key: "tpRef",
				ref: s
			}, e.$props, {
				hours: I(c).hours,
				minutes: I(c).minutes,
				seconds: I(c).seconds,
				"internal-model-value": e.internalModelValue,
				"disabled-times-config": I(d),
				"validate-time": I(p),
				"onUpdate:hours": t[0] ||= (e) => I(f)(e),
				"onUpdate:minutes": t[1] ||= (e) => I(f)(e, !1),
				"onUpdate:seconds": t[2] ||= (e) => I(f)(e, !1, !0),
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
			}), ge({ _: 2 }, [g(I(o), (t, n) => ({
				name: t,
				fn: l((n) => [_(e.$slots, t, me(pe(n)))])
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
}), Lo = { class: "dp--header-wrap" }, Ro = {
	key: 0,
	class: "dp__month_year_wrap"
}, zo = { key: 0 }, Bo = { class: "dp__month_year_wrap" }, Vo = [
	"data-dp-element",
	"aria-label",
	"data-test-id",
	"onClick",
	"onKeydown"
], Ho = /* @__PURE__ */ F({
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
		...Ya
	},
	emits: [
		"update-month-year",
		"mount",
		"reset-flow",
		"overlay-closed",
		"overlay-opened"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, { defaultedTransitions: o, defaultedAriaLabels: s, defaultedMultiCalendars: c, defaultedFilters: u, defaultedConfig: d, defaultedHighlight: p, propDates: m, defaultedUI: h } = Ga(a), { transitionName: y, showTransition: b } = xs(o), { buildMatrix: S } = wa(), { handleMonthYearChange: C, isDisabled: T, updateMonthYear: E } = qa(a, r), { showLeftIcon: D, showRightIcon: O } = Ts(), k = W(!1), A = W(!1), j = W(!1), M = W([
			null,
			null,
			null,
			null
		]);
		w(() => {
			r("mount");
		});
		let N = (e) => ({
			get: () => a[e],
			set: (t) => {
				let n = e === Gr.month ? Gr.year : Gr.month;
				r("update-month-year", {
					[e]: t,
					[n]: a[n]
				}), e === Gr.month ? oe(!0) : ce(!0);
			}
		}), ee = V(N(Gr.month)), ne = V(N(Gr.year)), re = V(() => (e) => ({
			month: a.month,
			year: a.year,
			items: e === Gr.month ? a.months : a.years,
			instance: a.instance,
			updateMonthYear: E,
			toggle: e === Gr.month ? oe : ce
		})), F = V(() => a.months.find((e) => e.value === a.month) || {
			text: "",
			value: 0
		}), L = V(() => hi(a.months, (e) => ({
			active: a.month === e.value,
			disabled: mi(e.value, Bi(a.year, m.value.minDate), Vi(a.year, m.value.maxDate)) || u.value.months.includes(e.value),
			highlighted: la(p.value, e.value, a.year)
		}))), ie = V(() => hi(a.years, (e) => ({
			active: a.year === e.value,
			disabled: mi(e.value, Hi(m.value.minDate), Hi(m.value.maxDate)) || u.value.years.includes(e.value),
			highlighted: ua(p.value, e.value)
		}))), ae = (e, t, n) => {
			e.value = n === void 0 ? !e.value : n, e.value ? (j.value = !0, r("overlay-opened", t)) : (j.value = !1, r("overlay-closed", t));
		}, oe = (e = !1, t) => {
			le(e), ae(k, Jr.month, t);
		}, ce = (e = !1, t) => {
			le(e), ae(A, Jr.year, t);
		}, le = (e) => {
			e || r("reset-flow");
		}, ue = (e, t) => {
			a.arrowNavigation && (M.value[t] = ai(e), S(M.value, "monthYear"));
		}, de = V(() => [{
			type: Gr.month,
			index: 1,
			toggle: oe,
			modelValue: ee.value,
			updateModelValue: (e) => ee.value = e,
			text: F.value.text,
			showSelectionGrid: k.value,
			items: L.value,
			ariaLabel: s.value?.openMonthsOverlay,
			overlayLabel: s.value.monthPicker?.(!0) ?? void 0
		}, {
			type: Gr.year,
			index: 2,
			toggle: ce,
			modelValue: ne.value,
			updateModelValue: (e) => ne.value = e,
			text: bi(a.year, a.locale),
			showSelectionGrid: A.value,
			items: ie.value,
			ariaLabel: s.value?.openYearsOverlay,
			overlayLabel: s.value.yearPicker?.(!0) ?? void 0
		}]), fe = V(() => a.disableYearSelect ? [de.value[0]] : a.yearFirst ? [...de.value].reverse() : de.value);
		return t({
			toggleMonthPicker: oe,
			toggleYearPicker: ce,
			handleMonthYearChange: C
		}), (t, n) => (v(), H("div", Lo, [t.$slots["month-year"] ? (v(), H("div", Ro, [_(t.$slots, "month-year", me(pe({
			month: e.month,
			year: e.year,
			months: e.months,
			years: e.years,
			updateMonthYear: I(E),
			handleMonthYearChange: I(C),
			instance: e.instance,
			isDisabled: I(T)
		})))])) : (v(), H(x, { key: 1 }, [t.$slots["top-extra"] ? (v(), H("div", zo, [_(t.$slots, "top-extra", { value: t.internalModelValue })])) : P("", !0), U("div", Bo, [
			I(D)(I(c), e.instance) && !t.vertical ? (v(), z(so, {
				key: 0,
				"aria-label": I(s)?.prevMonth,
				disabled: I(T)(!1),
				class: R(I(h)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: n[0] ||= (e) => I(C)(!1, !0),
				onSetRef: n[1] ||= (e) => ue(e, 0)
			}, {
				default: l(() => [t.$slots["arrow-left"] ? _(t.$slots, "arrow-left", { key: 0 }) : P("", !0), t.$slots["arrow-left"] ? P("", !0) : (v(), z(I(Pr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : P("", !0),
			U("div", { class: R(["dp__month_year_wrap", { dp__year_disable_select: t.disableYearSelect }]) }, [(v(!0), H(x, null, g(fe.value, (n, r) => (v(), H(x, { key: n.type }, [U("button", {
				ref_for: !0,
				ref: (e) => ue(e, r + 1),
				type: "button",
				"data-dp-element": `overlay-${n.type}`,
				class: R(["dp__btn dp__month_year_select", { "dp--hidden-el": j.value }]),
				"aria-label": `${n.text}-${n.ariaLabel}`,
				"data-test-id": `${n.type}-toggle-overlay-${e.instance}`,
				onClick: n.toggle,
				onKeydown: (e) => I(Ti)(e, () => n.toggle(), !0)
			}, [t.$slots[n.type] ? _(t.$slots, n.type, {
				key: 0,
				text: n.text,
				value: a[n.type]
			}) : P("", !0), t.$slots[n.type] ? P("", !0) : (v(), H(x, { key: 1 }, [te(se(n.text), 1)], 64))], 42, Vo), B(i, {
				name: I(y)(n.showSelectionGrid),
				css: I(b)
			}, {
				default: l(() => [n.showSelectionGrid ? (v(), z(ro, {
					key: 0,
					items: n.items,
					"arrow-navigation": t.arrowNavigation,
					"hide-navigation": t.hideNavigation,
					"is-last": t.autoApply && !I(d).keepActionRow,
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
					"button-icon": l(() => [t.$slots["calendar-icon"] ? _(t.$slots, "calendar-icon", { key: 0 }) : P("", !0), t.$slots["calendar-icon"] ? P("", !0) : (v(), z(I(Mr), { key: 1 }))]),
					_: 2
				}, [
					t.$slots[`${n.type}-overlay-value`] ? {
						name: "item",
						fn: l(({ item: e }) => [_(t.$slots, `${n.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					t.$slots[`${n.type}-overlay`] ? {
						name: "overlay",
						fn: l(() => [_(t.$slots, `${n.type}-overlay`, xe({ ref_for: !0 }, re.value(n.type)))]),
						key: "1"
					} : void 0,
					t.$slots[`${n.type}-overlay-header`] ? {
						name: "header",
						fn: l(() => [_(t.$slots, `${n.type}-overlay-header`, { toggle: n.toggle })]),
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
				])) : P("", !0)]),
				_: 2
			}, 1032, ["name", "css"])], 64))), 128))], 2),
			I(D)(I(c), e.instance) && t.vertical ? (v(), z(so, {
				key: 1,
				"aria-label": I(s)?.prevMonth,
				"el-name": "action-prev",
				disabled: I(T)(!1),
				class: R(I(h)?.navBtnPrev),
				onActivate: n[2] ||= (e) => I(C)(!1, !0)
			}, {
				default: l(() => [t.$slots["arrow-up"] ? _(t.$slots, "arrow-up", { key: 0 }) : P("", !0), t.$slots["arrow-up"] ? P("", !0) : (v(), z(I(Lr), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : P("", !0),
			I(O)(I(c), e.instance) ? (v(), z(so, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: I(T)(!0),
				"aria-label": I(s)?.nextMonth,
				class: R(I(h)?.navBtnNext),
				onActivate: n[3] ||= (e) => I(C)(!0, !0),
				onSetRef: n[4] ||= (e) => ue(e, t.disableYearSelect ? 2 : 3)
			}, {
				default: l(() => [t.$slots[t.vertical ? "arrow-down" : "arrow-right"] ? _(t.$slots, t.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : P("", !0), t.$slots[t.vertical ? "arrow-down" : "arrow-right"] ? P("", !0) : (v(), z(f(t.vertical ? I(Rr) : I(Fr)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"class"
			])) : P("", !0)
		])], 64))]));
	}
}), Uo = {
	class: "dp__calendar_header",
	role: "row"
}, Wo = {
	key: 0,
	class: "dp__calendar_header_item",
	role: "gridcell"
}, Go = ["aria-label"], Ko = {
	key: 0,
	class: "dp__calendar_item dp__week_num",
	role: "gridcell"
}, qo = { class: "dp__cell_inner" }, Jo = [
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
], Yo = /* @__PURE__ */ F({
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
		...Ya
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
		let r = n, a = e, { buildMultiLevelMatrix: o } = wa(), { defaultedTransitions: s, defaultedConfig: u, defaultedAriaLabels: d, defaultedMultiCalendars: f, defaultedWeekNumbers: p, defaultedMultiDates: m, defaultedUI: h } = Ga(a), y = W(null), b = W({
			bottom: "",
			left: "",
			transform: ""
		}), S = W([]), C = W(null), T = W(!0), E = W(""), D = W({
			startX: 0,
			endX: 0,
			startY: 0,
			endY: 0
		}), O = W([]), k = W({ left: "50%" }), j = W(!1), M = V(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), N = V(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : ti(a.formatLocale, a.locale, +a.weekStart));
		w(() => {
			r("mount", {
				cmp: "calendar",
				refs: S
			}), u.value.noSwipe || C.value && (C.value.addEventListener("touchstart", ue, { passive: !1 }), C.value.addEventListener("touchend", fe, { passive: !1 }), C.value.addEventListener("touchmove", pe, { passive: !1 })), a.monthChangeOnScroll && C.value && C.value.addEventListener("wheel", ge, { passive: !1 });
		}), c(() => {
			u.value.noSwipe || C.value && (C.value.removeEventListener("touchstart", ue), C.value.removeEventListener("touchend", fe), C.value.removeEventListener("touchmove", pe)), a.monthChangeOnScroll && C.value && C.value.removeEventListener("wheel", ge);
		});
		let ee = (e) => e ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", ne = (e, t) => {
			if (a.transitions) {
				let n = Mi(Ji(X(), a.month, a.year));
				E.value = Fi(Mi(Ji(X(), e, t)), n) ? s.value[ee(!0)] : s.value[ee(!1)], T.value = !1, Ce(() => {
					T.value = !0;
				});
			}
		}, re = V(() => ({ ...h.value.calendar ?? {} })), F = V(() => (e) => {
			let t = oi(e);
			return {
				dp__marker_dot: t.type === "dot",
				dp__marker_line: t.type === "line"
			};
		}), L = V(() => (e) => Z(e, y.value)), ie = V(() => ({
			dp__calendar: !0,
			dp__calendar_next: f.value.count > 0 && a.instance !== 0
		})), ae = V(() => (e) => !a.hideOffsetDates || e.current), oe = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			y.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await Ce(), O.value[0]) {
				let { left: e, width: t } = O.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, k.value.left = `${n / 2}px`), window.innerWidth < e + t && (i = { right: "0" }, a = 0, k.value.left = `${t - n / 2}px`);
			}
			b.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, z = async (e, t, n) => {
			let i = ai(S.value[t][n]);
			i && (e.marker?.customPosition && e.marker?.tooltip?.length ? b.value = e.marker.customPosition(i) : await oe(i, e), r("tooltip-open", e.marker));
		}, ce = async (e, t, n) => {
			if (j.value && m.value.enabled && m.value.dragSelect) return r("select-date", e);
			if (r("set-hover-date", e), e.marker?.tooltip?.length) {
				if (a.hideOffsetDates && !e.current) return;
				await z(e, t, n);
			}
		}, le = (e) => {
			y.value && (y.value = null, b.value = JSON.parse(JSON.stringify({
				bottom: "",
				left: "",
				transform: ""
			})), r("tooltip-close", e.marker));
		}, ue = (e) => {
			D.value.startX = e.changedTouches[0].screenX, D.value.startY = e.changedTouches[0].screenY;
		}, fe = (e) => {
			D.value.endX = e.changedTouches[0].screenX, D.value.endY = e.changedTouches[0].screenY, me();
		}, pe = (e) => {
			a.vertical && !a.inline && e.preventDefault();
		}, me = () => {
			let e = a.vertical ? "Y" : "X";
			Math.abs(D.value[`start${e}`] - D.value[`end${e}`]) > 10 && r("handle-swipe", D.value[`start${e}`] > D.value[`end${e}`] ? "right" : "left");
		}, he = (e, t, n) => {
			e && (Array.isArray(S.value[t]) ? S.value[t][n] = e : S.value[t] = [e]), a.arrowNavigation && o(S.value, "calendar");
		}, ge = (e) => {
			a.monthChangeOnScroll && (e.preventDefault(), r("handle-scroll", e));
		}, _e = (e) => p.value.type === "local" ? kt(e.value, { weekStartsOn: +a.weekStart }) : p.value.type === "iso" ? Et(e.value) : typeof p.value.type == "function" ? p.value.type(e.value) : "", ve = (e) => {
			let t = e[0];
			return p.value.hideOnOffsetDates ? e.some((e) => e.current) ? _e(t) : "" : _e(t);
		}, ye = (e, t, n = !0) => {
			!n && Ei() || (!m.value.enabled || u.value.allowPreventDefault) && (gi(e, u.value), r("select-date", t));
		}, be = (e) => {
			gi(e, u.value);
		}, xe = (e) => {
			m.value.enabled && m.value.dragSelect ? (j.value = !0, r("select-date", e)) : m.value.enabled && r("select-date", e);
		};
		return t({ triggerTransition: ne }), (e, t) => (v(), H("div", { class: R(ie.value) }, [U("div", {
			ref_key: "calendarWrapRef",
			ref: C,
			class: R(re.value),
			role: "grid"
		}, [
			U("div", Uo, [e.weekNumbers ? (v(), H("div", Wo, se(e.weekNumName), 1)) : P("", !0), (v(!0), H(x, null, g(N.value, (t, n) => (v(), H("div", {
				key: n,
				class: "dp__calendar_header_item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": I(d)?.weekDay?.(n)
			}, [e.$slots["calendar-header"] ? _(e.$slots, "calendar-header", {
				key: 0,
				day: t,
				index: n
			}) : P("", !0), e.$slots["calendar-header"] ? P("", !0) : (v(), H(x, { key: 1 }, [te(se(t), 1)], 64))], 8, Go))), 128))]),
			t[2] ||= U("div", { class: "dp__calendar_header_separator" }, null, -1),
			B(i, {
				name: E.value,
				css: !!e.transitions
			}, {
				default: l(() => [T.value ? (v(), H("div", {
					key: 0,
					class: "dp__calendar",
					role: "rowgroup",
					onMouseleave: t[1] ||= (e) => j.value = !1
				}, [(v(!0), H(x, null, g(M.value, (n, r) => (v(), H("div", {
					key: r,
					class: "dp__calendar_row",
					role: "row"
				}, [e.weekNumbers ? (v(), H("div", Ko, [U("div", qo, se(ve(n.days)), 1)])) : P("", !0), (v(!0), H(x, null, g(n.days, (n, i) => (v(), H("div", {
					id: I(da)(n.value),
					ref_for: !0,
					ref: (e) => he(e, r, i),
					key: i + r,
					role: "gridcell",
					class: "dp__calendar_item",
					"aria-selected": (n.classData.dp__active_date || n.classData.dp__range_start || n.classData.dp__range_end) ?? void 0,
					"aria-disabled": n.classData.dp__cell_disabled || void 0,
					"aria-label": I(d)?.day?.(n),
					tabindex: !n.current && e.hideOffsetDates ? void 0 : 0,
					"data-test-id": I(da)(n.value),
					onClick: A((e) => ye(e, n), ["prevent"]),
					onTouchend: (e) => ye(e, n, !1),
					onKeydown: (t) => I(Ti)(t, () => e.$emit("select-date", n)),
					onMouseenter: (e) => ce(n, r, i),
					onMouseleave: (e) => le(n),
					onMousedown: (e) => xe(n),
					onMouseup: t[0] ||= (e) => j.value = !1
				}, [U("div", { class: R(["dp__cell_inner", n.classData]) }, [
					e.$slots.day && ae.value(n) ? _(e.$slots, "day", {
						key: 0,
						day: +n.text,
						date: n.value
					}) : P("", !0),
					e.$slots.day ? P("", !0) : (v(), H(x, { key: 1 }, [te(se(n.text), 1)], 64)),
					n.marker && ae.value(n) ? (v(), H(x, { key: 2 }, [e.$slots.marker ? _(e.$slots, "marker", {
						key: 0,
						marker: n.marker,
						day: +n.text,
						date: n.value
					}) : (v(), H("div", {
						key: 1,
						class: R(F.value(n.marker)),
						style: de(n.marker.color ? { backgroundColor: n.marker.color } : {})
					}, null, 6))], 64)) : P("", !0),
					L.value(n.value) ? (v(), H("div", {
						key: 3,
						ref_for: !0,
						ref_key: "activeTooltip",
						ref: O,
						class: "dp__marker_tooltip",
						style: de(b.value)
					}, [n.marker?.tooltip ? (v(), H("div", {
						key: 0,
						class: "dp__tooltip_content",
						onClick: be
					}, [(v(!0), H(x, null, g(n.marker.tooltip, (t, r) => (v(), H("div", {
						key: r,
						class: "dp__tooltip_text"
					}, [e.$slots["marker-tooltip"] ? _(e.$slots, "marker-tooltip", {
						key: 0,
						tooltip: t,
						day: n.value
					}) : P("", !0), e.$slots["marker-tooltip"] ? P("", !0) : (v(), H(x, { key: 1 }, [U("div", {
						class: "dp__tooltip_mark",
						style: de(t.color ? { backgroundColor: t.color } : {})
					}, null, 4), U("div", null, se(t.text), 1)], 64))]))), 128)), U("div", {
						class: "dp__arrow_bottom_tp",
						style: de(k.value)
					}, null, 4)])) : P("", !0)], 4)) : P("", !0)
				], 2)], 40, Jo))), 128))]))), 128))], 32)) : P("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 2));
	}
}), Xo = (e) => Array.isArray(e), Zo = (e, t, n, r) => {
	let i = W([]), a = W(/* @__PURE__ */ new Date()), o = W(), { modelValue: s, calendars: c, time: l, today: u } = Ss(e, t, () => ne(e.isTextInputDate)), { defaultedMultiCalendars: d, defaultedStartTime: f, defaultedRange: p, defaultedConfig: m, defaultedTz: h, propDates: g, defaultedMultiDates: _ } = Ga(e), { validateMonthYearInRange: v, isDisabled: y, isDateRangeAllowed: b, checkMinMaxRange: x } = ws(e), { updateTimeValues: S, getSetDateTime: C, setTime: T, assignStartTime: E, validateTime: D, disabledTimesConfig: O } = Po(e, l, s, r), k = V(() => (e) => c.value[e] ? c.value[e].month : 0), A = V(() => (e) => c.value[e] ? c.value[e].year : 0), j = (e) => !m.value.keepViewOnOffsetClick || e ? !0 : !o.value, M = (e, t, n, r = !1) => {
		j(r) && (c.value[e] || (c.value[e] = {
			month: 0,
			year: 0
		}), c.value[e].month = di(t) ? c.value[e]?.month : t, c.value[e].year = di(n) ? c.value[e]?.year : n);
	}, N = () => {
		e.autoApply && t("select-date");
	}, P = () => {
		f.value && E(f.value);
	};
	w(() => {
		e.shadow || (s.value || (ce(), P()), ne(!0), e.focusStartDate && e.startDate && ce());
	});
	let ee = V(() => e.flow?.length && !e.partialFlow ? e.flowStep === e.flow.length : !0), te = () => {
		e.autoApply && ee.value && t("auto-apply", e.partialFlow ? e.flowStep !== e.flow.length : !1);
	}, ne = (t = !1) => {
		if (s.value) return Array.isArray(s.value) ? (i.value = s.value, R(t)) : I(s.value, t);
		if (d.value.count && t && !e.startDate) return F(X(), t);
	}, re = () => Array.isArray(s.value) && p.value.enabled ? q(s.value[0]) === q(s.value[1] ?? s.value[0]) : !1, F = (e = /* @__PURE__ */ new Date(), t = !1) => {
		if ((!d.value.count || !d.value.static || t) && M(0, q(e), J(e)), d.value.count && (!s.value || re() || !d.value.solo) && (!d.value.solo || t)) for (let e = 1; e < d.value.count; e++) {
			let t = Ve(Cr(X(), {
				month: k.value(e - 1),
				year: A.value(e - 1)
			}), { months: 1 });
			c.value[e] = {
				month: q(t),
				year: J(t)
			};
		}
	}, I = (e, t) => {
		F(e), T("hours", rn(e)), T("minutes", on(e)), T("seconds", sn(e)), d.value.count && t && z();
	}, L = (e) => {
		if (d.value.count) {
			if (d.value.solo) return 0;
			let t = q(e[0]), n = q(e[1]);
			return Math.abs(n - t) < d.value.count ? 0 : 1;
		}
		return 1;
	}, ie = (e, t) => {
		e[1] && p.value.showLastInRange ? F(e[L(e)], t) : F(e[0], t);
		let n = (t, n) => [t(e[0]), e[1] ? t(e[1]) : l[n][1]];
		T("hours", n(rn, "hours")), T("minutes", n(on, "minutes")), T("seconds", n(sn, "seconds"));
	}, ae = (t, n) => {
		if ((p.value.enabled || e.weekPicker) && !_.value.enabled) return ie(t, n);
		if (_.value.enabled && n) {
			let e = t[t.length - 1];
			return I(e, n);
		}
	}, R = (e) => {
		let t = s.value;
		ae(t, e), d.value.count && d.value.solo && z();
	}, oe = (r, i) => {
		let a = Cr(X(), {
			month: k.value(i),
			year: A.value(i)
		}), o = r < 0 ? Be(a, 1) : kr(a, 1);
		v(q(o), J(o), r < 0, e.preventMinMaxNavigation) && (M(i, q(o), J(o)), t("update-month-year", {
			instance: i,
			month: q(o),
			year: J(o)
		}), d.value.count && !d.value.solo && se(i), n());
	}, se = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = kr(Cr(X(), {
				month: k.value(t + 1),
				year: A.value(t + 1)
			}), 1);
			M(t, q(e), J(e));
		}
		for (let t = e + 1; t <= d.value.count - 1; t++) {
			let e = Be(Cr(X(), {
				month: k.value(t - 1),
				year: A.value(t - 1)
			}), 1);
			M(t, q(e), J(e));
		}
	}, z = () => {
		if (Array.isArray(s.value) && s.value.length === 2) {
			let e = X(X(s.value[1] ? s.value[1] : Be(s.value[0], 1))), [t, n] = [q(s.value[0]), J(s.value[0])], [r, i] = [q(s.value[1]), J(s.value[1])];
			(t !== r || t === r && n !== i) && d.value.solo && M(1, q(e), J(e));
		} else s.value && !Array.isArray(s.value) && (M(0, q(s.value), J(s.value)), F(X()));
	}, ce = () => {
		e.startDate && (M(0, q(X(e.startDate)), J(X(e.startDate))), d.value.count && se(0));
	}, B = (t, n) => {
		if (e.monthChangeOnScroll) {
			let r = (/* @__PURE__ */ new Date()).getTime() - a.value.getTime(), i = Math.abs(t.deltaY), o = 500;
			i > 1 && (o = 100), i > 100 && (o = 0), r > o && (a.value = /* @__PURE__ */ new Date(), oe(e.monthChangeOnScroll === "inverse" ? t.deltaY : -t.deltaY, n));
		}
	}, le = (t, n, r = !1) => {
		e.monthChangeOnArrows && e.vertical === r && ue(t, n);
	}, ue = (e, t) => {
		oe(e === "right" ? -1 : 1, t);
	}, de = (e) => {
		if (g.value.markers) return Ci(e.value, g.value.markers);
	}, H = (t, n) => {
		switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
			case "prepend": return [!0, !1];
			case "center": return [t == 0, !0];
			case "fair": return [t == 0 || n > t, !0];
			case "append": return [!1, !1];
			default: return [!1, !1];
		}
	}, fe = (t, n, r, i) => {
		if (e.sixWeeks && t.length < 6) {
			let e = 6 - t.length, a = (n.getDay() + 7 - i) % 7, o = 6 - (r.getDay() + 7 - i) % 7, [s, c] = H(a, o);
			for (let r = 1; r <= e; r++) if (c ? !!(r % 2) == s : s) {
				let e = t[0].days[0], r = pe(ze(e.value, -7), q(n));
				t.unshift({ days: r });
			} else {
				let e = t[t.length - 1], r = e.days[e.days.length - 1], i = pe(ze(r.value, 1), q(n));
				t.push({ days: i });
			}
		}
		return t;
	}, pe = (t, n) => {
		let r = X(t), i = [];
		for (let t = 0; t < 7; t++) {
			let a = ze(r, t), o = q(a) !== n;
			i.push({
				text: e.hideOffsetDates && o ? "" : a.getDate(),
				value: a,
				current: !o,
				classData: {}
			});
		}
		return i;
	}, me = (t, n) => {
		let r = [], i = new Date(n, t), a = new Date(n, t + 1, 0), o = e.weekStart, s = Ke(i, { weekStartsOn: o }), c = (e) => {
			let n = pe(e, t);
			if (r.push({ days: n }), !r[r.length - 1].days.some((e) => Z(Mi(e.value), Mi(a)))) {
				let t = ze(e, 7);
				c(t);
			}
		};
		return c(s), fe(r, i, a, o);
	}, U = (e) => {
		let n = Ni(X(e.value), l.hours, l.minutes, xe());
		t("date-update", n), _.value.enabled ? uo(n, s, _.value.limit) : s.value = n, r(), Ce().then(() => {
			te();
		});
	}, he = (e) => p.value.noDisabledRange ? Ui(i.value[0], e).some((e) => y(e)) : !1, ge = () => {
		i.value = s.value ? s.value.slice() : [], i.value.length === 2 && !(p.value.fixedStart || p.value.fixedEnd) && (i.value = []);
	}, _e = (e, n) => {
		let r = [X(e.value), ze(X(e.value), +p.value.autoRange)];
		b(r) ? (n && ve(e.value), i.value = r) : t("invalid-date", e.value);
	}, ve = (e) => {
		let t = q(X(e)), n = J(X(e));
		if (M(0, t, n), d.value.count > 0) for (let t = 1; t < d.value.count; t++) {
			let n = Wi(Cr(X(e), {
				year: A.value(t - 1),
				month: k.value(t - 1)
			}));
			M(t, n.month, n.year);
		}
	}, ye = (e) => {
		if (he(e.value) || !x(e.value, s.value, +!p.value.fixedStart)) return t("invalid-date", e.value);
		i.value = ho(X(e.value), s, t, p);
	}, be = (n, r) => {
		if (ge(), p.value.autoRange) return _e(n, r);
		if (p.value.fixedStart || p.value.fixedEnd) return ye(n);
		i.value[0] ? x(X(n.value), s.value) && !he(n.value) ? Pi(X(n.value), X(i.value[0])) ? (i.value.unshift(X(n.value)), t("range-end", i.value[0])) : (i.value[1] = X(n.value), t("range-end", i.value[1])) : (e.autoApply && t("auto-apply-invalid", n.value), t("invalid-date", n.value)) : (i.value[0] = X(n.value), t("range-start", i.value[0]));
	}, xe = (t = !0) => e.enableSeconds ? Array.isArray(l.seconds) ? t ? l.seconds[0] : l.seconds[1] : l.seconds : 0, Se = (e) => {
		i.value[e] = Ni(i.value[e], l.hours[e], l.minutes[e], xe(e !== 1));
	}, we = () => {
		i.value[0] && i.value[1] && +i.value?.[0] > +i.value?.[1] && (i.value.reverse(), t("range-start", i.value[0]), t("range-end", i.value[1]));
	}, Te = () => {
		i.value.length && (i.value[0] && !i.value[1] ? Se(0) : (Se(0), Se(1), r()), we(), s.value = i.value.slice(), po(i.value, t, e.autoApply, e.modelAuto));
	}, Ee = (n, r = !1) => {
		if (y(n.value) || !n.current && e.hideOffsetDates) return t("invalid-date", n.value);
		if (o.value = JSON.parse(JSON.stringify(n)), !p.value.enabled) return U(n);
		Xo(l.hours) && Xo(l.minutes) && !_.value.enabled && (be(n, r), Te());
	}, De = (i, a) => {
		M(i, a.month, a.year, !0), d.value.count && !d.value.solo && se(i), t("update-month-year", {
			instance: i,
			month: a.month,
			year: a.year
		}), n(d.value.solo ? i : void 0);
		let o = e.flow?.length ? e.flow[e.flowStep] : void 0;
		!a.fromNav && (o === Jr.month || o === Jr.year) && r();
	}, Oe = (t, n) => {
		mo({
			value: t,
			modelValue: s,
			range: p.value.enabled,
			timezone: n ? void 0 : h.value.timezone
		}), N(), e.multiCalendars && Ce().then(() => ne(!0));
	}, ke = () => {
		let e = Br(X(), h.value);
		!p.value.enabled && !_.value.enabled ? s.value = e : s.value && Array.isArray(s.value) && s.value[0] ? _.value.enabled ? s.value = [...s.value, e] : s.value = Pi(e, s.value[0]) ? [e, s.value[0]] : [s.value[0], e] : s.value = [e], N();
	}, Ae = () => {
		if (Array.isArray(s.value)) {
			if (_.value.enabled) {
				let e = je();
				s.value[s.value.length - 1] = C(e);
			} else s.value = s.value.map((e, t) => e && C(e, t));
		} else s.value = C(s.value);
		t("time-update");
	}, je = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null;
	return {
		calendars: c,
		modelValue: s,
		month: k,
		year: A,
		time: l,
		disabledTimesConfig: O,
		today: u,
		validateTime: D,
		getCalendarDays: me,
		getMarker: de,
		handleScroll: B,
		handleSwipe: ue,
		handleArrow: le,
		selectDate: Ee,
		updateMonthYear: De,
		presetDate: Oe,
		selectCurrentDate: ke,
		updateTime: (e, t = !0, n = !1) => {
			S(e, t, n, Ae);
		},
		assignMonthAndYear: F,
		setStartTime: P
	};
}, Qo = { key: 0 }, $o = /* @__PURE__ */ F({
	__name: "DatePicker",
	props: { ...Ya },
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
		let i = n, a = e, { calendars: o, month: s, year: c, modelValue: u, time: d, disabledTimesConfig: f, today: p, validateTime: m, getCalendarDays: h, getMarker: y, handleArrow: b, handleScroll: S, handleSwipe: C, selectDate: w, updateMonthYear: E, presetDate: D, selectCurrentDate: O, updateTime: k, assignMonthAndYear: A, setStartTime: j } = Zo(a, i, ce, le), M = r(), { setHoverDate: N, getDayClassData: ee, clearHoverDate: te } = Cs(u, a), { defaultedMultiCalendars: ne } = Ga(a), re = W([]), F = W([]), L = W(null), ie = bs(M, "calendar"), ae = bs(M, "monthYear"), R = bs(M, "timePicker"), oe = (e) => {
			a.shadow || i("mount", e);
		};
		T(o, () => {
			a.shadow || setTimeout(() => {
				i("recalculate-position");
			}, 0);
		}, { deep: !0 }), T(ne, (e, t) => {
			e.count - t.count > 0 && A();
		}, { deep: !0 });
		let se = V(() => (e) => h(s.value(e), c.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = y(e), e.classData = ee(e), e))
		})));
		function ce(e) {
			e || e === 0 ? F.value[e]?.triggerTransition(s.value(e), c.value(e)) : F.value.forEach((e, t) => e.triggerTransition(s.value(t), c.value(t)));
		}
		function le() {
			i("update-flow-step");
		}
		let ue = (e, t = !1) => {
			w(e, t), a.spaceConfirm && i("select-date");
		}, de = (e, t, n = 0) => {
			re.value[n]?.toggleMonthPicker(e, t);
		}, fe = (e, t, n = 0) => {
			re.value[n]?.toggleYearPicker(e, t);
		}, U = (e, t, n) => {
			L.value?.toggleTimePicker(e, t, n);
		}, he = (e, t) => {
			if (!a.range) {
				let n = u.value ? u.value : p, r = t ? new Date(t) : n, i = e ? Ke(r, { weekStartsOn: 1 }) : ht(r, { weekStartsOn: 1 });
				w({
					value: i,
					current: q(r) === s.value(0),
					text: "",
					classData: {}
				}), document.getElementById(da(i))?.focus();
			}
		}, _e = (e) => {
			re.value[0]?.handleMonthYearChange(e, !0);
		}, ve = (e) => {
			E(0, {
				month: s.value(0),
				year: c.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, ye = (e, t) => {
			e === Jr.time && i(`time-picker-${t ? "open" : "close"}`), i("overlay-toggle", {
				open: t,
				overlay: e
			});
		}, be = (e) => {
			i("overlay-toggle", {
				open: !1,
				overlay: e
			}), i("focus-menu");
		};
		return t({
			clearHoverDate: te,
			presetDate: D,
			selectCurrentDate: O,
			toggleMonthPicker: de,
			toggleYearPicker: fe,
			toggleTimePicker: U,
			handleArrow: b,
			updateMonthYear: E,
			getSidebarProps: () => ({
				modelValue: u,
				month: s,
				year: c,
				time: d,
				updateTime: k,
				updateMonthYear: E,
				selectDate: w,
				presetDate: D
			}),
			changeMonth: _e,
			changeYear: ve,
			selectWeekDate: he,
			setStartTime: j
		}), (e, t) => (v(), H(x, null, [B(ao, {
			"multi-calendars": I(ne).count,
			collapse: e.collapse,
			"is-mobile": e.isMobile
		}, {
			default: l(({ instance: n, index: r }) => [e.disableMonthYearSelect ? P("", !0) : (v(), z(Ho, xe({
				key: 0,
				ref: (e) => {
					e && (re.value[r] = e);
				},
				months: I(ri)(e.formatLocale, e.locale, e.monthNameFormat),
				years: I(ni)(e.yearRange, e.locale, e.reverseYears),
				month: I(s)(n),
				year: I(c)(n),
				instance: n
			}, e.$props, {
				onMount: t[0] ||= (e) => oe(I(qr).header),
				onResetFlow: t[1] ||= (t) => e.$emit("reset-flow"),
				onUpdateMonthYear: (e) => I(E)(n, e),
				onOverlayClosed: be,
				onOverlayOpened: t[2] ||= (t) => e.$emit("overlay-toggle", {
					open: !0,
					overlay: t
				})
			}), ge({ _: 2 }, [g(I(ae), (t, n) => ({
				name: t,
				fn: l((n) => [_(e.$slots, t, me(pe(n)))])
			}))]), 1040, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"onUpdateMonthYear"
			])), B(Yo, xe({
				ref: (e) => {
					e && (F.value[r] = e);
				},
				"mapped-dates": se.value(n),
				month: I(s)(n),
				year: I(c)(n),
				instance: n
			}, e.$props, {
				onSelectDate: (e) => I(w)(e, n !== 1),
				onHandleSpace: (e) => ue(e, n !== 1),
				onSetHoverDate: t[3] ||= (e) => I(N)(e),
				onHandleScroll: (e) => I(S)(e, n),
				onHandleSwipe: (e) => I(C)(e, n),
				onMount: t[4] ||= (e) => oe(I(qr).calendar),
				onResetFlow: t[5] ||= (t) => e.$emit("reset-flow"),
				onTooltipOpen: t[6] ||= (t) => e.$emit("tooltip-open", t),
				onTooltipClose: t[7] ||= (t) => e.$emit("tooltip-close", t)
			}), ge({ _: 2 }, [g(I(ie), (t, n) => ({
				name: t,
				fn: l((n) => [_(e.$slots, t, me(pe({ ...n })))])
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
		]), e.enableTimePicker ? (v(), H("div", Qo, [e.$slots["time-picker"] ? _(e.$slots, "time-picker", me(xe({ key: 0 }, {
			time: I(d),
			updateTime: I(k)
		}))) : (v(), z(No, xe({
			key: 1,
			ref_key: "timePickerRef",
			ref: L
		}, e.$props, {
			hours: I(d).hours,
			minutes: I(d).minutes,
			seconds: I(d).seconds,
			"internal-model-value": e.internalModelValue,
			"disabled-times-config": I(f),
			"validate-time": I(m),
			onMount: t[8] ||= (e) => oe(I(qr).timePicker),
			"onUpdate:hours": t[9] ||= (e) => I(k)(e),
			"onUpdate:minutes": t[10] ||= (e) => I(k)(e, !1),
			"onUpdate:seconds": t[11] ||= (e) => I(k)(e, !1, !0),
			onResetFlow: t[12] ||= (t) => e.$emit("reset-flow"),
			onOverlayClosed: t[13] ||= (e) => ye(e, !1),
			onOverlayOpened: t[14] ||= (e) => ye(e, !0),
			onAmPmChange: t[15] ||= (t) => e.$emit("am-pm-change", t)
		}), ge({ _: 2 }, [g(I(R), (t, n) => ({
			name: t,
			fn: l((n) => [_(e.$slots, t, me(pe(n)))])
		}))]), 1040, [
			"hours",
			"minutes",
			"seconds",
			"internal-model-value",
			"disabled-times-config",
			"validate-time"
		]))])) : P("", !0)], 64));
	}
}), es = (e, t) => {
	let n = W(), { defaultedMultiCalendars: r, defaultedConfig: i, defaultedHighlight: a, defaultedRange: o, propDates: s, defaultedFilters: c, defaultedMultiDates: l } = Ga(e), { modelValue: u, year: d, month: f, calendars: p } = Ss(e, t), { isDisabled: m } = ws(e), { selectYear: h, groupedYears: g, showYearPicker: _, isDisabled: v, toggleYearPicker: y, handleYearSelect: b, handleYear: x } = go({
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
	}), S = (t, n) => [t, n].map((t) => Qt(t, "MMMM", { locale: e.formatLocale })).join("-"), C = V(() => (e) => u.value ? Array.isArray(u.value) ? u.value.some((t) => br(e, t)) : br(u.value, e) : !1), w = (e) => {
		if (o.value.enabled) {
			if (Array.isArray(u.value)) {
				let t = Z(e, u.value[0]) || Z(e, u.value[1]);
				return Ii(u.value, n.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, T = (e, t) => e.quarter === at(t) && e.year === J(t), E = (e) => typeof a.value == "function" ? a.value({
		quarter: at(e),
		year: J(e)
	}) : !!a.value.quarters.find((t) => T(t, e)), D = V(() => (e) => {
		let t = Cr(/* @__PURE__ */ new Date(), { year: d.value(e) });
		return dt({
			start: mt(t),
			end: pt(t)
		}).map((e) => {
			let t = ut(e), n = gt(e), r = m(e), i = w(t), a = E(t);
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
		uo(e, u, l.value.limit), t("auto-apply", !0);
	}, k = (n) => {
		u.value = fo(u, n, t), po(u.value, t, e.autoApply, e.modelAuto);
	}, A = (e) => {
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
			if (!n) return p.value[t].month = q(gt(e)), l.value.enabled ? O(e) : o.value.enabled ? k(e) : A(e);
		},
		toggleYearPicker: y,
		handleYearSelect: b,
		handleYear: x
	};
}, ts = { class: "dp--quarter-items" }, ns = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], rs = /* @__PURE__ */ F({
	compatConfig: { MODE: 3 },
	__name: "QuarterPicker",
	props: { ...Ya },
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
		let i = n, a = e, o = bs(r(), "yearMode"), { defaultedMultiCalendars: s, defaultedConfig: c, groupedYears: u, year: d, isDisabled: f, quarters: p, modelValue: m, showYearPicker: h, setHoverDate: y, selectQuarter: b, toggleYearPicker: S, handleYearSelect: C, handleYear: w } = es(a, i);
		return t({ getSidebarProps: () => ({
			modelValue: m,
			year: d,
			selectQuarter: b,
			handleYearSelect: C,
			handleYear: w
		}) }), (e, t) => (v(), z(ao, {
			"multi-calendars": I(s).count,
			collapse: e.collapse,
			stretch: "",
			"is-mobile": e.isMobile
		}, {
			default: l(({ instance: t }) => [U("div", {
				class: "dp-quarter-picker-wrap",
				style: de({ minHeight: `${I(c).modeHeight}px` })
			}, [
				e.$slots["top-extra"] ? _(e.$slots, "top-extra", {
					key: 0,
					value: e.internalModelValue
				}) : P("", !0),
				U("div", null, [B(lo, xe(e.$props, {
					items: I(u)(t),
					instance: t,
					"show-year-picker": I(h)[t],
					year: I(d)(t),
					"is-disabled": (e) => I(f)(t, e),
					onHandleYear: (e) => I(w)(t, e),
					onYearSelect: (e) => I(C)(e, t),
					onToggleYearPicker: (e) => I(S)(t, e?.flow, e?.show)
				}), ge({ _: 2 }, [g(I(o), (t, n) => ({
					name: t,
					fn: l((n) => [_(e.$slots, t, me(pe(n)))])
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
				U("div", ts, [(v(!0), H(x, null, g(I(p)(t), (n, r) => (v(), H("div", { key: r }, [U("button", {
					type: "button",
					class: R(["dp--qr-btn", {
						"dp--qr-btn-active": n.active,
						"dp--qr-btn-between": n.isBetween,
						"dp--qr-btn-disabled": n.disabled,
						"dp--highlighted": n.highlighted
					}]),
					"data-test-id": n.value,
					disabled: n.disabled,
					onClick: (e) => I(b)(n.value, t, n.disabled),
					onMouseover: (e) => I(y)(n.value)
				}, [e.$slots.quarter ? _(e.$slots, "quarter", {
					key: 0,
					value: n.value,
					text: n.text
				}) : (v(), H(x, { key: 1 }, [te(se(n.text), 1)], 64))], 42, ns)]))), 128))])
			], 4)]),
			_: 3
		}, 8, [
			"multi-calendars",
			"collapse",
			"is-mobile"
		]));
	}
}), is = (e, t) => {
	let n = W(0);
	w(() => {
		r(), window.addEventListener("resize", r, { passive: !0 });
	}), c(() => {
		window.removeEventListener("resize", r);
	});
	let r = () => {
		n.value = window.document.documentElement.clientWidth;
	};
	return { isMobile: V(() => n.value <= e.value.mobileBreakpoint && !t || void 0) };
}, as = [
	"id",
	"tabindex",
	"role",
	"aria-label"
], os = {
	key: 0,
	class: "dp--menu-load-container"
}, ss = {
	key: 1,
	class: "dp--menu-header"
}, cs = ["data-dp-mobile"], ls = {
	key: 0,
	class: "dp__sidebar_left"
}, us = ["data-dp-mobile"], ds = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], fs = {
	key: 2,
	class: "dp__sidebar_right"
}, ps = {
	key: 3,
	class: "dp__action_extra"
}, ms = /* @__PURE__ */ F({
	compatConfig: { MODE: 3 },
	__name: "DatepickerMenu",
	props: {
		...Ja,
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
		let i = n, a = e, o = W(null), s = V(() => {
			let { openOnTop: e, ...t } = a;
			return {
				...t,
				isMobile: T.value,
				flowStep: L.value,
				menuWrapRef: o.value
			};
		}), { setMenuFocused: u, setShiftKey: d, control: p } = ha(), m = r(), { defaultedTextInput: h, defaultedInline: y, defaultedConfig: b, defaultedUI: S, handleEventPropagation: C } = Ga(a), { isMobile: T } = is(b, a.shadow), E = W(null), D = W(0), O = W(null), k = W(!1), j = W(null), M = W(!1), N = (e) => {
			M.value = !0, b.value.allowPreventDefault && e.preventDefault(), gi(e, b.value, !0);
		};
		w(() => {
			if (!a.shadow) {
				k.value = !0, ee(), window.addEventListener("resize", ee);
				let e = ai(o);
				e && !h.value.enabled && !y.value.enabled && (u(!0), ue()), e && (e.addEventListener("pointerdown", N), e.addEventListener("mousedown", N));
			}
			document.addEventListener("mousedown", Re);
		}), c(() => {
			window.removeEventListener("resize", ee), document.removeEventListener("mousedown", Re);
			let e = ai(o);
			e && (e.removeEventListener("pointerdown", N), e.removeEventListener("mousedown", N));
		});
		let ee = () => {
			let e = ai(O);
			e && (D.value = e.getBoundingClientRect().width);
		}, { arrowRight: te, arrowLeft: ne, arrowDown: re, arrowUp: F } = wa(), { flowStep: L, updateFlowStep: ie, childMount: ae, resetFlow: oe, handleFlow: ce } = Es(a, i, j), B = V(() => a.monthPicker ? vo : a.yearPicker ? bo : a.timePicker ? Io : a.quarterPicker ? rs : $o), le = V(() => {
			if (b.value.arrowLeft) return b.value.arrowLeft;
			let e = o.value?.getBoundingClientRect(), t = a.getInputRect();
			return t?.width < D?.value && t?.left <= (e?.left ?? 0) ? `${t?.width / 2}px` : t?.right >= (e?.right ?? 0) && t?.width < D?.value ? `${D?.value - t?.width / 2}px` : "50%";
		}), ue = () => {
			let e = ai(o);
			e && e.focus({ preventScroll: !0 });
		}, fe = V(() => j.value?.getSidebarProps() || {}), he = () => {
			a.openOnTop && i("recalculate-position");
		}, _e = bs(m, "action"), ve = V(() => a.monthPicker || a.yearPicker ? bs(m, "monthYear") : a.timePicker ? bs(m, "timePicker") : bs(m, "shared")), ye = V(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), Se = V(() => ({
			dp__menu_disabled: a.disabled,
			dp__menu_readonly: a.readonly,
			"dp-menu-loading": a.loading
		})), Ce = V(() => ({
			dp__menu: !0,
			dp__menu_index: !y.value.enabled,
			dp__relative: y.value.enabled,
			...S.value.menu ?? {}
		})), we = (e) => {
			gi(e, b.value, !0);
		}, Te = (e) => {
			a.escClose && (i("close-picker"), C(e));
		}, Ee = (e) => {
			if (a.arrowNavigation) {
				if (e === Xr.up) return F();
				if (e === Xr.down) return re();
				if (e === Xr.left) return ne();
				if (e === Xr.right) return te();
			} else e === Xr.left || e === Xr.up ? je("handleArrow", Xr.left, 0, e === Xr.up) : je("handleArrow", Xr.right, 0, e === Xr.down);
		}, De = (e) => {
			d(e.shiftKey), !a.disableMonthYearSelect && e.code === Zr.tab && e.target.classList.contains("dp__menu") && p.value.shiftKeyInMenu && (e.preventDefault(), gi(e, b.value, !0), i("close-picker"));
		}, Oe = () => {
			ue(), i("time-picker-close");
		}, ke = (e) => {
			j.value?.toggleTimePicker(!1, !1), j.value?.toggleMonthPicker(!1, !1, e), j.value?.toggleYearPicker(!1, !1, e);
		}, Ae = (e, t = 0) => e === "month" ? j.value?.toggleMonthPicker(!1, !0, t) : e === "year" ? j.value?.toggleYearPicker(!1, !0, t) : e === "time" ? j.value?.toggleTimePicker(!0, !1) : ke(t), je = (e, ...t) => {
			j.value?.[e] && j.value?.[e](...t);
		}, Me = () => {
			je("selectCurrentDate");
		}, Ne = (e, t) => {
			je("presetDate", be(e), t);
		}, Pe = () => {
			je("clearHoverDate");
		}, Fe = (e, t) => {
			je("updateMonthYear", e, t);
		}, Ie = (e, t) => {
			e.preventDefault(), Ee(t);
		}, Le = (e) => {
			if (De(e), e.key === Zr.home || e.key === Zr.end) return je("selectWeekDate", e.key === Zr.home, e.target.getAttribute("id"));
			switch ((e.key === Zr.pageUp || e.key === Zr.pageDown) && (e.shiftKey ? (je("changeYear", e.key === Zr.pageUp), yi(o.value, "overlay-year")?.focus()) : (je("changeMonth", e.key === Zr.pageUp), yi(o.value, e.key === Zr.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && o.value?.focus({ preventScroll: !0 })), e.key) {
				case Zr.esc: return Te(e);
				case Zr.arrowLeft: return Ie(e, Xr.left);
				case Zr.arrowRight: return Ie(e, Xr.right);
				case Zr.arrowUp: return Ie(e, Xr.up);
				case Zr.arrowDown: return Ie(e, Xr.down);
				default: return;
			}
		}, Re = (e) => {
			y.value.enabled && !y.value.input && !o.value?.contains(e.target) && M.value && (M.value = !1, i("menu-blur"));
		};
		return t({
			updateMonthYear: Fe,
			switchView: Ae,
			handleFlow: ce,
			onValueCleared: () => {
				j.value?.setStartTime?.();
			}
		}), (t, n) => (v(), H("div", {
			id: t.uid ? `dp-menu-${t.uid}` : void 0,
			ref_key: "dpMenuRef",
			ref: o,
			tabindex: I(y).enabled ? void 0 : "0",
			role: I(y).enabled ? void 0 : "dialog",
			"aria-label": t.ariaLabels?.menu,
			class: R(Ce.value),
			style: de({ "--dp-arrow-left": le.value }),
			onMouseleave: Pe,
			onClick: we,
			onKeydown: Le
		}, [
			(t.disabled || t.readonly) && I(y).enabled || t.loading ? (v(), H("div", {
				key: 0,
				class: R(Se.value)
			}, [t.loading ? (v(), H("div", os, [...n[19] ||= [U("span", { class: "dp--menu-loader" }, null, -1)]])) : P("", !0)], 2)) : P("", !0),
			t.$slots["menu-header"] ? (v(), H("div", ss, [_(t.$slots, "menu-header")])) : P("", !0),
			!I(y).enabled && !t.teleportCenter ? (v(), H("div", {
				key: 2,
				class: R(ye.value)
			}, null, 2)) : P("", !0),
			U("div", {
				ref_key: "innerMenuRef",
				ref: O,
				class: R({
					dp__menu_content_wrapper: t.presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": e.collapse && (t.presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"])
				}),
				"data-dp-mobile": I(T),
				style: de({ "--dp-menu-width": `${D.value}px` })
			}, [
				t.$slots["left-sidebar"] ? (v(), H("div", ls, [_(t.$slots, "left-sidebar", me(pe(fe.value)))])) : P("", !0),
				t.presetDates.length ? (v(), H("div", {
					key: 1,
					class: R({
						"dp--preset-dates-collapsed": e.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": I(T)
				}, [(v(!0), H(x, null, g(t.presetDates, (n, r) => (v(), H(x, { key: r }, [n.slot ? _(t.$slots, n.slot, {
					key: 0,
					presetDate: Ne,
					label: n.label,
					value: n.value
				}) : (v(), H("button", {
					key: 1,
					type: "button",
					style: de(n.style || {}),
					class: R(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
					"data-test-id": n.testId ?? void 0,
					"data-dp-mobile": I(T),
					onClick: A((e) => Ne(n.value, n.noTz), ["prevent"]),
					onKeydown: (e) => I(Ti)(e, () => Ne(n.value, n.noTz), !0)
				}, se(n.label), 47, ds))], 64))), 128))], 10, us)) : P("", !0),
				U("div", {
					ref_key: "calendarWrapperRef",
					ref: E,
					class: "dp__instance_calendar",
					role: "document"
				}, [(v(), z(f(B.value), xe({
					ref_key: "dynCmpRef",
					ref: j
				}, s.value, {
					"flow-step": I(L),
					onMount: I(ae),
					onUpdateFlowStep: I(ie),
					onResetFlow: I(oe),
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
					onTimePickerClose: Oe,
					onRecalculatePosition: he,
					onUpdateMonthYear: n[11] ||= (e) => t.$emit("update-month-year", e),
					onAutoApplyInvalid: n[12] ||= (e) => t.$emit("auto-apply-invalid", e),
					onInvalidDate: n[13] ||= (e) => t.$emit("invalid-date", e),
					onOverlayToggle: n[14] ||= (e) => t.$emit("overlay-toggle", e),
					"onUpdate:internalModelValue": n[15] ||= (e) => t.$emit("update:internal-model-value", e)
				}), ge({ _: 2 }, [g(ve.value, (e, n) => ({
					name: e,
					fn: l((n) => [_(t.$slots, e, me(pe({ ...n })))])
				}))]), 1040, [
					"flow-step",
					"onMount",
					"onUpdateFlowStep",
					"onResetFlow"
				]))], 512),
				t.$slots["right-sidebar"] ? (v(), H("div", fs, [_(t.$slots, "right-sidebar", me(pe(fe.value)))])) : P("", !0),
				t.$slots["action-extra"] ? (v(), H("div", ps, [t.$slots["action-extra"] ? _(t.$slots, "action-extra", {
					key: 0,
					selectCurrentDate: Me
				}) : P("", !0)])) : P("", !0)
			], 14, cs),
			!t.autoApply || I(b).keepActionRow ? (v(), z(Qa, xe({
				key: 3,
				"menu-mount": k.value
			}, s.value, {
				"calendar-width": D.value,
				onClosePicker: n[16] ||= (e) => t.$emit("close-picker"),
				onSelectDate: n[17] ||= (e) => t.$emit("select-date"),
				onInvalidSelect: n[18] ||= (e) => t.$emit("invalid-select"),
				onSelectNow: Me
			}), ge({ _: 2 }, [g(I(_e), (e, n) => ({
				name: e,
				fn: l((n) => [_(t.$slots, e, me(pe({ ...n })))])
			}))]), 1040, ["menu-mount", "calendar-width"])) : P("", !0)
		], 46, as));
	}
}), hs = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(hs || {}), gs = ({ menuRef: e, menuRefInner: t, inputRef: n, pickerWrapperRef: r, inline: i, emit: a, props: o, slots: s }) => {
	let { defaultedConfig: c } = Ga(o), l = W({}), u = W(!1), f = W({
		top: "0",
		left: "0"
	}), p = W(!1), m = ne(o, "teleportCenter");
	T(m, () => {
		f.value = JSON.parse(JSON.stringify({})), S();
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
		f.value.left = `${e + t - l.value.width}px`;
	}, _ = (e) => {
		f.value.left = `${e}px`;
	}, v = (e, t) => {
		o.position === hs.left && _(e), o.position === hs.right && g(e, t), o.position === hs.center && (f.value.left = `${e + t / 2 - l.value.width / 2}px`);
	}, y = (e) => {
		let { width: t, height: n } = e.getBoundingClientRect(), { top: r, left: i } = h(e);
		return {
			top: +r,
			left: +i,
			width: t,
			height: n
		};
	}, b = () => {
		f.value.left = "50%", f.value.top = "50%", f.value.transform = "translate(-50%, -50%)", f.value.position = "fixed", delete f.value.opacity;
	}, x = () => {
		let e = ai(n);
		f.value = o.altPosition(e);
	}, S = (n = !0) => {
		if (!i.value.enabled) {
			if (m.value) return b();
			if (o.altPosition !== null) return x();
			if (n) {
				let n = o.teleport ? t.value?.$el : e.value;
				n && (l.value = n.getBoundingClientRect()), a("recalculate-position");
			}
			return A();
		}
	}, C = ({ inputEl: e, left: t, width: n }) => {
		window.screen.width > 768 && !u.value && v(t, n), D(e);
	}, w = (e) => {
		let { top: t, left: n, height: r, width: i } = y(e);
		f.value.top = `${r + t + +o.offset}px`, p.value = !1, u.value || (f.value.left = `${n + i / 2 - l.value.width / 2}px`), C({
			inputEl: e,
			left: n,
			width: i
		});
	}, E = (e) => {
		let { top: t, left: n, width: r } = y(e);
		f.value.top = `${t - +o.offset - l.value.height}px`, p.value = !0, C({
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
		let e = ai(n);
		if (e) {
			if (o.autoPosition === Kr.top) return Kr.top;
			if (o.autoPosition === Kr.bottom) return Kr.bottom;
			let { height: t } = l.value, { top: n, height: r } = e.getBoundingClientRect(), i = window.innerHeight - n - r, a = n;
			return t <= i ? Kr.bottom : t > i && t <= a ? Kr.top : i >= a ? Kr.bottom : Kr.top;
		}
		return Kr.bottom;
	}, k = (e) => O() === Kr.bottom ? w(e) : E(e), A = () => {
		let e = ai(n);
		if (e) return o.autoPosition ? k(e) : w(e);
	}, j = function(e) {
		if (e) {
			let t = e.scrollHeight > e.clientHeight, n = window.getComputedStyle(e).overflowY.indexOf("hidden") !== -1;
			return t && !n;
		}
		return !0;
	}, M = function(e) {
		return !e || e === document.body || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : j(e) ? e : M(e.assignedSlot && c.value.shadowDom ? e.assignedSlot.parentNode : e.parentNode);
	}, N = (e) => {
		if (e) switch (o.position) {
			case hs.left: return {
				left: 0,
				transform: "translateX(0)"
			};
			case hs.right: return {
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
		xCorrect: u,
		setMenuPosition: S,
		getScrollableParent: M,
		shadowRender: (e, t, i) => {
			let a = document.createElement("div"), o = ai(n)?.getBoundingClientRect();
			a.setAttribute("id", "dp--temp-container");
			let u = r.value?.clientWidth ? r.value : document.body;
			u.append(a);
			let f = N(o), p = c.value.shadowDom ? Object.keys(s).filter((e) => [
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
					...f
				}
			}, Object.fromEntries(p.map((e) => [e, s[e]])));
			e != null && (m.appContext = e.appContext), d(m, a), l.value = m.el?.getBoundingClientRect(), d(null, a), u.removeChild(a);
		}
	};
}, _s = [
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
], vs = [
	{ name: "trigger" },
	{ name: "input-icon" },
	{ name: "clear-icon" },
	{ name: "dp-input" }
], ys = {
	all: () => _s,
	monthYear: () => _s.filter((e) => e.use.includes("month-year")),
	input: () => vs,
	timePicker: () => _s.filter((e) => e.use.includes("time")),
	action: () => _s.filter((e) => e.use.includes("action")),
	calendar: () => _s.filter((e) => e.use.includes("calendar")),
	menu: () => _s.filter((e) => e.use.includes("menu")),
	shared: () => _s.filter((e) => e.use.includes("shared")),
	yearMode: () => _s.filter((e) => e.use.includes("year-mode"))
}, bs = (e, t, n) => {
	let r = [];
	return ys[t]().forEach((t) => {
		e[t.name] && r.push(t.name);
	}), n?.length && n.forEach((e) => {
		e.slot && r.push(e.slot);
	}), r;
}, xs = (e) => {
	let t = V(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = V(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, Ss = (e, t, n) => {
	let { defaultedRange: r, defaultedTz: i } = Ga(e), a = X(zr(X(), i.value.timezone)), o = W([{
		month: q(a),
		year: J(a)
	}]), s = (e) => {
		let t = {
			hours: rn(a),
			minutes: on(a),
			seconds: 0
		};
		return r.value.enabled ? [t[e], t[e]] : t[e];
	}, c = ve({
		hours: s("hours"),
		minutes: s("minutes"),
		seconds: s("seconds")
	});
	T(r, (e, t) => {
		e.enabled !== t.enabled && (c.hours = s("hours"), c.minutes = s("minutes"), c.seconds = s("seconds"));
	}, { deep: !0 });
	let l = V({
		get: () => e.internalModelValue,
		set: (n) => {
			!e.readonly && !e.disabled && t("update:internal-model-value", n);
		}
	}), u = V(() => (e) => o.value[e] ? o.value[e].month : 0), d = V(() => (e) => o.value[e] ? o.value[e].year : 0);
	return T(l, (e, t) => {
		n && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && n();
	}, { deep: !0 }), {
		calendars: o,
		time: c,
		modelValue: l,
		month: u,
		year: d,
		today: a
	};
}, Cs = (e, t) => {
	let { defaultedMultiCalendars: n, defaultedMultiDates: r, defaultedUI: i, defaultedHighlight: a, defaultedTz: o, propDates: s, defaultedRange: c } = Ga(t), { isDisabled: l } = ws(t), u = W(null), d = W(zr(/* @__PURE__ */ new Date(), o.value.timezone)), f = (e) => {
		!e.current && t.hideOffsetDates || (u.value = e.value);
	}, p = () => {
		u.value = null;
	}, m = (t) => Array.isArray(e.value) && c.value.enabled && e.value[0] && u.value ? t ? Fi(u.value, e.value[0]) : Pi(u.value, e.value[0]) : !0, h = (t, n) => {
		let r = e.value && Array.isArray(e.value) && e.value ? n ? e.value[0] || null : e.value[1] : null;
		return Z(X(t.value), r);
	}, g = (t) => {
		let n = Array.isArray(e.value) ? e.value[0] : null;
		return !t || !Pi(u.value ?? null, n);
	}, _ = (n, r = !0) => (c.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !n.current ? !1 : Z(X(n.value), e.value[+!r]) : c.value.enabled ? h(n, r) && g(r) || Z(n.value, Array.isArray(e.value) ? e.value[0] : null) && m(r) : !1, v = (t, n) => {
		if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
			let r = Z(t.value, u.value);
			return n ? Fi(e.value[0], t.value) && r : Pi(e.value[0], t.value) && r;
		}
		return !1;
	}, y = (n) => !e.value || t.hideOffsetDates && !n.current ? !1 : c.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Z(n.value, e.value[0] ? e.value[0] : d.value) : !1 : r.value.enabled && Array.isArray(e.value) ? e.value.some((e) => Z(e, n.value)) : Z(n.value, e.value ? e.value : d.value), b = (e) => {
		if (c.value.autoRange || t.weekPicker) {
			if (u.value) {
				if (t.hideOffsetDates && !e.current) return !1;
				let n = ze(u.value, +c.value.autoRange), r = Gi(X(u.value), t.weekStart);
				return t.weekPicker ? Z(r[1], X(e.value)) : Z(n, X(e.value));
			}
			return !1;
		}
		return !1;
	}, x = (e) => {
		if (c.value.autoRange || t.weekPicker) {
			if (u.value) {
				let n = ze(u.value, +c.value.autoRange);
				if (t.hideOffsetDates && !e.current) return !1;
				let r = Gi(X(u.value), t.weekStart);
				return t.weekPicker ? Fi(e.value, r[0]) && Pi(e.value, r[1]) : Fi(e.value, u.value) && Pi(e.value, n);
			}
			return !1;
		}
		return !1;
	}, S = (e) => {
		if (c.value.autoRange || t.weekPicker) {
			if (u.value) {
				if (t.hideOffsetDates && !e.current) return !1;
				let n = Gi(X(u.value), t.weekStart);
				return t.weekPicker ? Z(n[0], e.value) : Z(u.value, e.value);
			}
			return !1;
		}
		return !1;
	}, C = (t) => Ii(e.value, u.value, t.value), w = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, T = () => !t.modelAuto || si(t.internalModelValue), E = (e) => {
		if (t.weekPicker) return !1;
		let n = !c.value.enabled || !_(e) && !_(e, !1);
		return !l(e.value) && !y(e) && !(!e.current && t.hideOffsetDates) && n;
	}, D = (e) => c.value.enabled ? t.modelAuto ? w() && y(e) : !1 : y(e), O = (e) => a.value ? wi(e.value, s.value.highlight) : !1, k = (e) => {
		let t = l(e.value);
		return t && (typeof a.value == "function" ? !a.value(e.value, t) : !a.value.options.highlightDisabled);
	}, A = (e) => typeof a.value == "function" ? a.value(e.value) : a.value.weekdays?.includes(e.value.getDay()), j = (e) => (c.value.enabled || t.weekPicker) && (!(n.value.count > 0) || e.current) && T() && (e.current || !t.hideOffsetDates) && !y(e) ? C(e) : !1, M = (t) => {
		if (Array.isArray(e.value) && e.value.length === 1) {
			let { before: n, after: r } = fa(+c.value.maxRange, e.value[0]);
			return ln(t.value, n) || cn(t.value, r);
		}
		return !1;
	}, N = (t) => {
		if (Array.isArray(e.value) && e.value.length === 1) {
			let { before: n, after: r } = fa(+c.value.minRange, e.value[0]);
			return Ii([n, r], e.value[0], t.value);
		}
		return !1;
	}, P = (e) => c.value.enabled && (c.value.maxRange || c.value.minRange) ? c.value.maxRange && c.value.minRange ? M(e) || N(e) : c.value.maxRange ? M(e) : N(e) : !1, ee = (e) => {
		let { isRangeStart: n, isRangeEnd: r } = F(e), i = c.value.enabled ? n || r : !1;
		return {
			dp__cell_offset: !e.current,
			dp__pointer: !t.disabled && !(!e.current && t.hideOffsetDates) && !l(e.value) && !P(e),
			dp__cell_disabled: l(e.value) || P(e),
			dp__cell_highlight: !k(e) && (O(e) || A(e)) && !D(e) && !i && !S(e) && !(j(e) && t.weekPicker) && !r,
			dp__cell_highlight_active: !k(e) && (O(e) || A(e)) && D(e),
			dp__today: !t.noToday && Z(e.value, d.value) && e.current,
			"dp--past": Pi(e.value, d.value),
			"dp--future": Fi(e.value, d.value)
		};
	}, te = (e) => ({
		dp__active_date: D(e),
		dp__date_hover: E(e)
	}), ne = (n) => {
		if (e.value && !Array.isArray(e.value)) {
			let r = Gi(e.value, t.weekStart);
			return {
				...L(n),
				dp__range_start: Z(r[0], n.value),
				dp__range_end: Z(r[1], n.value),
				dp__range_between_week: Fi(n.value, r[0]) && Pi(n.value, r[1])
			};
		}
		return { ...L(n) };
	}, re = (n) => {
		if (e.value && Array.isArray(e.value)) {
			let r = Gi(e.value[0], t.weekStart), i = e.value[1] ? Gi(e.value[1], t.weekStart) : [];
			return {
				...L(n),
				dp__range_start: Z(r[0], n.value) || Z(i[0], n.value),
				dp__range_end: Z(r[1], n.value) || Z(i[1], n.value),
				dp__range_between_week: Fi(n.value, r[0]) && Pi(n.value, r[1]) || Fi(n.value, i[0]) && Pi(n.value, i[1]),
				dp__range_between: Fi(n.value, r[1]) && Pi(n.value, i[0])
			};
		}
		return { ...L(n) };
	}, F = (e) => ({
		isRangeStart: n.value.count > 0 ? e.current && _(e) && T() : _(e) && T(),
		isRangeEnd: n.value.count > 0 ? e.current && _(e, !1) && T() : _(e, !1) && T()
	}), I = (e) => {
		let { isRangeStart: n, isRangeEnd: r } = F(e);
		return {
			dp__range_start: n,
			dp__range_end: r,
			dp__range_between: j(e),
			dp__date_hover: Z(e.value, u.value) && !n && !r && !t.weekPicker,
			dp__date_hover_start: v(e, !0),
			dp__date_hover_end: v(e, !1)
		};
	}, L = (e) => ({
		...I(e),
		dp__cell_auto_range: x(e),
		dp__cell_auto_range_start: S(e),
		dp__cell_auto_range_end: b(e)
	}), ie = (e) => c.value.enabled ? c.value.autoRange ? L(e) : t.modelAuto ? {
		...te(e),
		...I(e)
	} : t.weekPicker ? re(e) : I(e) : t.weekPicker ? ne(e) : te(e);
	return {
		setHoverDate: f,
		clearHoverDate: p,
		getDayClassData: (e) => t.hideOffsetDates && !e.current ? {} : {
			...ee(e),
			...ie(e),
			[t.dayClass ? t.dayClass(e.value, t.internalModelValue) : ""]: !0,
			...i.value.calendarCell ?? {}
		}
	};
}, ws = (e) => {
	let { defaultedFilters: t, defaultedRange: n, propDates: r, defaultedMultiDates: i } = Ga(e), a = (e) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(X(e)) : !!Ci(e, r.value.disabledDates) : !1, o = (t) => r.value.maxDate ? e.yearPicker ? J(t) > J(r.value.maxDate) : Fi(t, r.value.maxDate) : !1, s = (t) => r.value.minDate ? e.yearPicker ? J(t) < J(r.value.minDate) : Pi(t, r.value.minDate) : !1, c = (n) => {
		let r = o(n), i = s(n), c = a(n), l = t.value.months.map((e) => +e).includes(q(n)), u = e.disabledWeekDays.length ? e.disabledWeekDays.some((e) => +e === en(n)) : !1, d = p(n), f = J(n), m = pa(e.yearRange, f);
		return !(r || i || c || l || m || u || d);
	}, l = (e, t) => Pi(...qi(r.value.minDate, e, t)) || Z(...qi(r.value.minDate, e, t)), u = (e, t) => Fi(...qi(r.value.maxDate, e, t)) || Z(...qi(r.value.maxDate, e, t)), d = (e, t, n) => {
		let i = !1;
		return r.value.maxDate && n && u(e, t) && (i = !0), r.value.minDate && !n && l(e, t) && (i = !0), i;
	}, f = (e, t, n, i) => {
		let a = !1;
		return i && (r.value.minDate || r.value.maxDate) ? r.value.minDate && r.value.maxDate ? a = d(e, t, n) : (r.value.minDate && l(e, t) || r.value.maxDate && u(e, t)) && (a = !0) : a = !0, a;
	}, p = (t) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !Ci(t, r.value.allowedDates, Di(e.monthPicker, e.yearPicker)) : !1, m = (e) => !c(e), h = (e) => !n.value.noDisabledRange || !lt({
		start: e[0],
		end: e[1]
	}).some((e) => m(e)), g = (t) => {
		if (t) {
			let n = J(t);
			return n >= +e.yearRange[0] && n <= e.yearRange[1];
		}
		return !0;
	}, _ = (e, t) => !!(Array.isArray(e) && e[t] && (n.value.maxRange || n.value.minRange) && g(e[t])), v = (e, t, r = 0) => {
		if (_(t, r) && g(e)) {
			let i = Qe(e, t[r]), a = Ui(t[r], e), o = a.length === 1 ? 0 : a.filter((e) => m(e)).length, s = Math.abs(i) - (n.value.minMaxRawRange ? 0 : o);
			if (n.value.minRange && n.value.maxRange) return s >= +n.value.minRange && s <= +n.value.maxRange;
			if (n.value.minRange) return s >= +n.value.minRange;
			if (n.value.maxRange) return s <= +n.value.maxRange;
		}
		return !0;
	}, y = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, b = (e) => Array.isArray(e) ? [e[0] ? oa(e[0]) : null, e[1] ? oa(e[1]) : null] : oa(e), x = (e, t, n) => e.find((e) => +e.hours === rn(t) && e.minutes === "*" || +e.minutes === on(t) && +e.hours === rn(t)) && n, S = (e, t, n) => {
		let [r, i] = e, [a, o] = t;
		return !x(r, a, n) && !x(i, o, n) && n;
	}, C = (t, n) => {
		let r = Array.isArray(n) ? n : [n];
		return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? S(e.disabledTimes, r, t) : !r.some((n) => x(e.disabledTimes, n, t)) : t;
	}, w = (t, n) => {
		let r = Array.isArray(n) ? [zi(n[0]), n[1] ? zi(n[1]) : void 0] : zi(n), i = !e.disabledTimes(r);
		return t && i;
	}, T = (t, n) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? C(n, t) : w(n, t) : n, E = (t) => {
		let n = !0;
		if (!t || y()) return !0;
		let i = !r.value.minDate && !r.value.maxDate ? b(t) : t;
		return (e.maxTime || r.value.maxDate) && (n = aa(e.maxTime, r.value.maxDate, "max", li(i), n)), (e.minTime || r.value.minDate) && (n = aa(e.minTime, r.value.minDate, "min", li(i), n)), T(t, n);
	}, D = (t) => {
		if (!e.monthPicker) return !0;
		let n = !0, i = X(Li(t));
		if (r.value.minDate && r.value.maxDate) {
			let e = X(Li(r.value.minDate)), t = X(Li(r.value.maxDate));
			return Fi(i, e) && Pi(i, t) || Z(i, e) || Z(i, t);
		}
		if (r.value.minDate) {
			let e = X(Li(r.value.minDate));
			n = Fi(i, e) || Z(i, e);
		}
		if (r.value.maxDate) {
			let e = X(Li(r.value.maxDate));
			n = Pi(i, e) || Z(i, e);
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
}, Ts = () => ({
	hideNavigationButtons: V(() => (e, t) => e?.includes(t)),
	showLeftIcon: V(() => (e, t) => e.count ? e.solo ? !0 : t === 0 : !0),
	showRightIcon: V(() => (e, t) => e.count ? e.solo ? !0 : t === e.count - 1 : !0)
}), Es = (e, t, n) => {
	let r = W(0), i = ve({
		[qr.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
		[qr.calendar]: !1,
		[qr.header]: !1
	}), a = V(() => e.monthPicker || e.timePicker), o = (t) => {
		if (e.flow?.length) {
			if (!t && a.value) return u();
			i[t] = !0, Object.keys(i).filter((e) => !i[e]).length || u();
		}
	}, s = () => {
		e.flow?.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), u()), e.flow?.length === r.value && Ce().then(() => c());
	}, c = () => {
		r.value = -1;
	}, l = (t, i, ...a) => {
		e.flow[r.value] === t && n.value && n.value[i]?.(...a);
	}, u = (t = 0) => {
		t && (r.value += t), l(Jr.month, "toggleMonthPicker", !0), l(Jr.year, "toggleYearPicker", !0), l(Jr.calendar, "toggleTimePicker", !1, !0), l(Jr.time, "toggleTimePicker", !0, !0);
		let n = e.flow[r.value];
		(n === Jr.hours || n === Jr.minutes || n === Jr.seconds) && l(n, "toggleTimePicker", !0, !0, n);
	};
	return {
		childMount: o,
		updateFlowStep: s,
		resetFlow: c,
		handleFlow: u,
		flowStep: r
	};
}, Ds = {
	key: 1,
	class: "dp__input_wrap"
}, Os = [
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
], ks = {
	key: 2,
	class: "dp--clear-btn"
}, As = ["aria-label"], js = /* @__PURE__ */ F({
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
		...Ja
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
		let r = n, i = e, { defaultedTextInput: a, defaultedAriaLabels: o, defaultedInline: s, defaultedConfig: c, defaultedRange: l, defaultedMultiDates: u, defaultedUI: d, getDefaultPattern: f, getDefaultStartTime: p } = Ga(i), { checkMinMaxRange: m } = ws(i), h = W(), g = W(null), y = W(!1), b = W(!1), x = V(() => ({
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
			...d.value.input ?? {}
		})), S = () => {
			r("set-input-date", null), i.clearable && i.autoApply && (r("set-empty-date"), h.value = null);
		}, C = (e) => {
			let t = p();
			return Ai(e, a.value.format ?? f(), t ?? Ki({}, i.enableSeconds), i.inputValue, b.value, i.formatLocale);
		}, w = (e) => {
			let { rangeSeparator: t } = a.value, [n, r] = e.split(`${t}`);
			if (n) {
				let e = C(n.trim()), t = r ? C(r.trim()) : void 0;
				if (cn(e, t)) return;
				let i = e && t ? [e, t] : [e];
				m(t, i, 0) && (h.value = e ? i : null);
			}
		}, T = () => {
			b.value = !0;
		}, E = (e) => {
			if (l.value.enabled) w(e);
			else if (u.value.enabled) {
				let t = e.split(";");
				h.value = t.map((e) => C(e.trim())).filter((e) => e);
			} else h.value = C(e);
		}, D = (e) => {
			let t = typeof e == "string" ? e : e.target?.value;
			t === "" ? S() : (a.value.openMenu && !i.isMenuOpen && r("open"), E(t), r("set-input-date", h.value)), b.value = !1, r("update:input-value", t), r("text-input", e, h.value);
		}, O = (e) => {
			a.value.enabled ? (E(e.target.value), a.value.enterSubmit && ta(h.value) && i.inputValue !== "" ? (r("set-input-date", h.value, !0), h.value = null) : a.value.enterSubmit && i.inputValue === "" && (h.value = null, r("clear"))) : M(e);
		}, k = (e, t) => {
			a.value.enabled && a.value.tabSubmit && !t && E(e.target.value), a.value.tabSubmit && ta(h.value) && i.inputValue !== "" ? (r("set-input-date", h.value, !0, !0), h.value = null) : a.value.tabSubmit && i.inputValue === "" && (h.value = null, r("clear", !0));
		}, j = () => {
			y.value = !0, r("focus"), Ce().then(() => {
				a.value.enabled && a.value.selectOnFocus && g.value?.select();
			});
		}, M = (e) => {
			if (gi(e, c.value, !0), a.value.enabled && a.value.openMenu && !s.value.input) {
				if (a.value.openMenu === "open" && !i.isMenuOpen) return r("open");
				if (a.value.openMenu === "toggle") return r("toggle");
			} else a.value.enabled || r("toggle");
		}, N = () => {
			r("real-blur"), y.value = !1, (!i.isMenuOpen || s.value.enabled && s.value.input) && r("blur"), i.autoApply && a.value.enabled && h.value && !i.isMenuOpen && (r("set-input-date", h.value), r("select-date"), h.value = null);
		}, ee = (e) => {
			gi(e, c.value, !0), r("clear");
		}, te = () => {
			r("close");
		}, ne = (e) => {
			if (e.key === "Tab" && k(e), e.key === "Enter" && O(e), e.key === "Escape" && a.value.escClose && te(), !a.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, re = () => {
			g.value?.focus({ preventScroll: !0 });
		}, F = (e) => {
			h.value = e;
		}, L = (e) => {
			e.key === Zr.tab && k(e, !0);
		};
		return t({
			focusInput: re,
			setParsedDate: F
		}), (t, n) => (v(), H("div", { onClick: M }, [t.$slots.trigger && !t.$slots["dp-input"] && !I(s).enabled ? _(t.$slots, "trigger", { key: 0 }) : P("", !0), !t.$slots.trigger && (!I(s).enabled || I(s).input) ? (v(), H("div", Ds, [
			t.$slots["dp-input"] && !t.$slots.trigger && (!I(s).enabled || I(s).enabled && I(s).input) ? _(t.$slots, "dp-input", {
				key: 0,
				value: e.inputValue,
				isMenuOpen: e.isMenuOpen,
				onInput: D,
				onEnter: O,
				onTab: k,
				onClear: ee,
				onBlur: N,
				onKeypress: ne,
				onPaste: T,
				onFocus: j,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}) : P("", !0),
			t.$slots["dp-input"] ? P("", !0) : (v(), H("input", {
				key: 1,
				id: t.uid ? `dp-input-${t.uid}` : void 0,
				ref_key: "inputRef",
				ref: g,
				"data-test-id": "dp-input",
				name: t.name,
				class: R(x.value),
				inputmode: I(a).enabled ? "text" : "none",
				placeholder: t.placeholder,
				disabled: t.disabled,
				readonly: t.readonly,
				required: t.required,
				value: e.inputValue,
				autocomplete: t.autocomplete,
				"aria-label": I(o)?.input,
				"aria-disabled": t.disabled || void 0,
				"aria-invalid": t.state === !1 || void 0,
				onInput: D,
				onBlur: N,
				onFocus: j,
				onKeypress: ne,
				onKeydown: n[0] ||= (e) => ne(e),
				onPaste: T
			}, null, 42, Os)),
			U("div", { onClick: n[3] ||= (e) => r("toggle") }, [t.$slots["input-icon"] && !t.hideInputIcon ? (v(), H("span", {
				key: 0,
				class: "dp__input_icon",
				onClick: n[1] ||= (e) => r("toggle")
			}, [_(t.$slots, "input-icon")])) : P("", !0), !t.$slots["input-icon"] && !t.hideInputIcon && !t.$slots["dp-input"] ? (v(), z(I(Mr), {
				key: 1,
				"aria-label": I(o)?.calendarIcon,
				class: "dp__input_icon dp__input_icons",
				onClick: n[2] ||= (e) => r("toggle")
			}, null, 8, ["aria-label"])) : P("", !0)]),
			t.$slots["clear-icon"] && (t.alwaysClearable || e.inputValue && t.clearable && !t.disabled && !t.readonly) ? (v(), H("span", ks, [_(t.$slots, "clear-icon", { clear: ee })])) : P("", !0),
			!t.$slots["clear-icon"] && (t.alwaysClearable || t.clearable && e.inputValue && !t.disabled && !t.readonly) ? (v(), H("button", {
				key: 3,
				"aria-label": I(o)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				onKeydown: n[4] ||= (e) => I(Ti)(e, () => ee(e), !0, L),
				onClick: n[5] ||= A((e) => ee(e), ["prevent"])
			}, [B(I(Nr), {
				class: "dp__input_icons",
				"data-test-id": "clear-icon"
			})], 40, As)) : P("", !0)
		])) : P("", !0)]));
	}
}), Ms = typeof window < "u" ? window : void 0, Ns = () => {}, Ps = (e) => k() ? (L(e), !0) : !1, Fs = (e, t, n, r) => {
	if (!e) return Ns;
	let i = Ns, a = T(() => I(e), (e) => {
		i(), e && (e.removeEventListener(t, n), e.addEventListener(t, n, r), i = () => {
			e.removeEventListener(t, n, r), i = Ns;
		});
	}, {
		immediate: !0,
		flush: "post"
	}), o = () => {
		a(), i();
	};
	return Ps(o), o;
}, Is = (e, t, n, r = {}) => {
	let { window: i = Ms, event: a = "pointerdown" } = r;
	return i ? Fs(i, a, (r) => {
		let i = ai(e), a = ai(t);
		!i || !a || i === r.target || r.composedPath().includes(i) || r.composedPath().includes(a) || n(r);
	}, { passive: !0 }) : void 0;
}, Ls = ["data-dp-mobile"], Rs = /* @__PURE__ */ F({
	compatConfig: { MODE: 3 },
	__name: "VueDatePicker",
	props: { ...Ja },
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
	setup(e, { expose: t, emit: a }) {
		let o = a, s = e, u = r(), d = W(!1), p = ne(s, "modelValue"), m = ne(s, "timezone"), h = W(null), y = W(null), x = W(null), S = W(!1), C = W(null), E = W(!1), D = W(!1), O = W(!1), k = W(!1), { setMenuFocused: A, setShiftKey: j } = ha(), { clearArrowNav: M } = wa(), { validateDate: N, isValidTime: ee } = ws(s), { defaultedTransitions: te, defaultedTextInput: re, defaultedInline: F, defaultedConfig: L, defaultedRange: ie, defaultedMultiDates: oe } = Ga(s), { menuTransition: se, showTransition: ce } = xs(te), { isMobile: le } = is(L), ue = ae();
		w(() => {
			Te(s.modelValue), Ce().then(() => {
				F.value.enabled || (ye(C.value)?.addEventListener("scroll", Fe), window?.addEventListener("resize", Ie));
			}), F.value.enabled && (d.value = !0), window?.addEventListener("keyup", Le), window?.addEventListener("keydown", Re);
		}), c(() => {
			F.value.enabled || (ye(C.value)?.removeEventListener("scroll", Fe), window?.removeEventListener("resize", Ie)), window?.removeEventListener("keyup", Le), window?.removeEventListener("keydown", Re);
		});
		let de = bs(u, "all", s.presetDates), fe = bs(u, "input");
		T([p, m], () => {
			Te(p.value);
		}, { deep: !0 });
		let { openOnTop: U, menuStyle: he, xCorrect: _e, setMenuPosition: ve, getScrollableParent: ye, shadowRender: be } = gs({
			menuRef: h,
			menuRefInner: y,
			inputRef: x,
			pickerWrapperRef: C,
			inline: F,
			emit: o,
			props: s,
			slots: u
		}), { inputValue: Se, internalModelValue: we, parseExternalModelValue: Te, emitModelValue: Ee, formatInputValue: De, checkBeforeEmit: Oe } = Ka(o, s, {
			isInputFocused: S,
			isTextInputDate: k
		}), ke = V(() => ({
			dp__main: !0,
			dp__theme_dark: s.dark,
			dp__theme_light: !s.dark,
			dp__flex_display: F.value.enabled,
			"dp--flex-display-collapsed": O.value,
			dp__flex_display_with_input: F.value.input
		})), Ae = V(() => s.dark ? "dp__theme_dark" : "dp__theme_light"), je = V(() => s.teleport ? {
			to: typeof s.teleport == "boolean" ? "body" : s.teleport,
			disabled: !s.teleport || F.value.enabled
		} : {}), Me = V(() => ({ class: "dp__outer_menu_wrap" })), Ne = V(() => F.value.enabled && (s.timePicker || s.monthPicker || s.yearPicker || s.quarterPicker)), Pe = () => x.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, Fe = () => {
			d.value && (L.value.closeOnScroll ? Ge() : ve());
		}, Ie = () => {
			d.value && ve();
			let e = y.value?.$el.getBoundingClientRect().width ?? 0;
			O.value = document.body.offsetWidth <= e;
		}, Le = (e) => {
			e.key === "Tab" && !F.value.enabled && !s.teleport && L.value.tabOutClosesMenu && (C.value.contains(document.activeElement) || Ge()), D.value = e.shiftKey;
		}, Re = (e) => {
			D.value = e.shiftKey;
		}, G = () => {
			!s.disabled && !s.readonly && (be(ue, ms, s), ve(!1), d.value = !0, d.value && o("open"), d.value || We(), Te(s.modelValue));
		}, K = () => {
			Se.value = "", We(), y.value?.onValueCleared(), x.value?.setParsedDate(null), o("update:model-value", null), o("update:model-timezone-value", null), o("cleared"), L.value.closeOnClearValue && Ge();
		}, ze = () => {
			let e = we.value;
			return !e || !Array.isArray(e) && N(e) ? !0 : Array.isArray(e) ? oe.value.enabled || e.length === 2 && N(e[0]) && N(e[1]) ? !0 : ie.value.partialRange && !s.timePicker ? N(e[0]) : !1 : !1;
		}, Be = () => {
			Oe() && ze() ? (Ee(), Ge()) : o("invalid-select", we.value);
		}, Ve = (e) => {
			He(), Ee(), L.value.closeOnAutoApply && !e && Ge();
		}, He = () => {
			x.value && re.value.enabled && x.value.setParsedDate(we.value);
		}, Ue = (e = !1) => {
			s.autoApply && ee(we.value) && ze() && (ie.value.enabled && Array.isArray(we.value) ? (ie.value.partialRange || we.value.length === 2) && Ve(e) : Ve(e));
		}, We = () => {
			re.value.enabled || (we.value = null);
		}, Ge = (e = !1) => {
			e && we.value && L.value.setDateOnMenuClose && Be(), F.value.enabled || (d.value && (d.value = !1, _e.value = !1, A(!1), j(!1), M(), o("closed"), Se.value && Te(p.value)), We(), o("blur"), y.value?.$el?.remove());
		}, Ke = (e, t, n = !1) => {
			if (!e) {
				we.value = null;
				return;
			}
			let r = Array.isArray(e) ? !e.some((e) => !N(e)) : N(e), i = ee(e);
			r && i ? (k.value = !0, we.value = e, t ? (E.value = n, Be(), o("text-submit")) : s.autoApply && Ue(!0), Ce().then(() => {
				k.value = !1;
			})) : o("invalid-date", e);
		}, qe = () => {
			s.autoApply && ee(we.value) && Ee(), He();
		}, Je = () => d.value ? Ge() : G(), Ye = (e) => {
			we.value = e;
		}, Xe = () => {
			re.value.enabled && (S.value = !0, De()), o("focus");
		}, Ze = () => {
			re.value.enabled && (S.value = !1, Te(s.modelValue), E.value && vi(C.value, D.value)?.focus()), o("blur");
		}, Qe = (e) => {
			y.value && y.value.updateMonthYear(0, {
				month: ui(e.month),
				year: ui(e.year)
			});
		}, $e = (e) => {
			Te(e ?? s.modelValue);
		}, et = (e, t) => {
			y.value?.switchView(e, t);
		}, tt = (e, t) => L.value.onClickOutside ? L.value.onClickOutside(e, t) : Ge(!0);
		return Is(h, x, (e) => tt(ze, e)), t({
			closeMenu: Ge,
			selectDate: Be,
			clearValue: K,
			openMenu: G,
			onScroll: Fe,
			formatInputValue: De,
			updateInternalModelValue: Ye,
			setMonthYear: Qe,
			parseModel: $e,
			switchView: et,
			toggleMenu: Je,
			handleFlow: (e = 0) => {
				y.value?.handleFlow(e);
			},
			getDpWrapMenuRef: () => h
		}), (e, t) => (v(), H("div", {
			ref_key: "pickerWrapperRef",
			ref: C,
			class: R(ke.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": I(le)
		}, [B(js, xe({
			ref_key: "inputRef",
			ref: x,
			"input-value": I(Se),
			"onUpdate:inputValue": t[0] ||= (e) => b(Se) ? Se.value = e : null,
			"is-menu-open": d.value
		}, e.$props, {
			onClear: K,
			onOpen: G,
			onSetInputDate: Ke,
			onSetEmptyDate: I(Ee),
			onSelectDate: Be,
			onToggle: Je,
			onClose: Ge,
			onFocus: Xe,
			onBlur: Ze,
			onRealBlur: t[1] ||= (e) => S.value = !1,
			onTextInput: t[2] ||= (t) => e.$emit("text-input", t)
		}), ge({ _: 2 }, [g(I(fe), (t, n) => ({
			name: t,
			fn: l((n) => [_(e.$slots, t, me(pe(n)))])
		}))]), 1040, [
			"input-value",
			"is-menu-open",
			"onSetEmptyDate"
		]), (v(), z(f(e.teleport ? n : "div"), me(pe(je.value)), {
			default: l(() => [B(i, {
				name: I(se)(I(U)),
				css: I(ce) && !I(F).enabled
			}, {
				default: l(() => [d.value ? (v(), H("div", xe({
					key: 0,
					ref_key: "dpWrapMenuRef",
					ref: h
				}, Me.value, {
					class: { "dp--menu-wrapper": !I(F).enabled },
					style: I(F).enabled ? void 0 : I(he)
				}), [B(ms, xe({
					ref_key: "dpMenuRef",
					ref: y
				}, e.$props, {
					"internal-model-value": I(we),
					"onUpdate:internalModelValue": t[3] ||= (e) => b(we) ? we.value = e : null,
					class: {
						[Ae.value]: !0,
						"dp--menu-wrapper": e.teleport
					},
					"open-on-top": I(U),
					"no-overlay-focus": Ne.value,
					collapse: O.value,
					"get-input-rect": Pe,
					"is-text-input-date": k.value,
					onClosePicker: Ge,
					onSelectDate: Be,
					onAutoApply: Ue,
					onTimeUpdate: qe,
					onFlowStep: t[4] ||= (t) => e.$emit("flow-step", t),
					onUpdateMonthYear: t[5] ||= (t) => e.$emit("update-month-year", t),
					onInvalidSelect: t[6] ||= (t) => e.$emit("invalid-select", I(we)),
					onAutoApplyInvalid: t[7] ||= (t) => e.$emit("invalid-select", t),
					onInvalidFixedRange: t[8] ||= (t) => e.$emit("invalid-fixed-range", t),
					onRecalculatePosition: I(ve),
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
				}), ge({ _: 2 }, [g(I(de), (t, n) => ({
					name: t,
					fn: l((n) => [_(e.$slots, t, me(pe({ ...n })))])
				}))]), 1040, [
					"internal-model-value",
					"class",
					"open-on-top",
					"no-overlay-focus",
					"collapse",
					"is-text-input-date",
					"onRecalculatePosition"
				])], 16)) : P("", !0)]),
				_: 3
			}, 8, ["name", "css"])]),
			_: 3
		}, 16))], 10, Ls));
	}
}), zs = /* @__PURE__ */ (() => {
	let e = Rs;
	return e.install = (t) => {
		t.component("Vue3DatePicker", e);
	}, e;
})();
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcTimezonePicker.vue_vue_type_script_setup_true_lang.mjs
Object.entries(/* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: zs
}, Symbol.toStringTag, { value: "Module" }))).forEach(([e, t]) => {
	e !== "default" && (zs[e] = t);
}), s(m);
function Bs(e) {
	return e.slice(e.indexOf("/") + 1).replaceAll("/", " - ").replaceAll("_", " ");
}
function Vs() {
	return Intl.supportedValuesOf("timeZone").filter((e) => !e.startsWith("Etc/")).map((e) => ({
		timezoneId: e,
		label: Bs(e)
	})).sort((e, t) => e.timezoneId.localeCompare(t.timezoneId));
}
var Hs = /* @__PURE__ */ F({
	__name: "NcTimezonePicker",
	props: /* @__PURE__ */ N({
		additionalTimezones: { default: () => [] },
		uid: { default: _e() }
	}, {
		modelValue: { default: "floating" },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = Te(e, "modelValue"), n = e, r = V(() => n.additionalTimezones.map(({ timezoneId: e, label: t }) => ({
			timezoneId: e,
			label: t
		}))), i = V(() => {
			let e = Vs();
			return e.unshift(...r.value), e;
		});
		function a(e, t, n) {
			let r = n.trim().split(/\s+/), i = Object.values(e);
			return r.every((e) => i.some((t) => t.toLowerCase().includes(e.toLowerCase())));
		}
		return (n, r) => (v(), z(Ee, {
			modelValue: t.value,
			"onUpdate:modelValue": r[0] ||= (e) => t.value = e,
			"aria-label-combobox": I(o)("Search for time zone"),
			clearable: !1,
			filterBy: a,
			multiple: !1,
			options: i.value,
			placeholder: I(o)("Type to search time zone"),
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
}), Us = {
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
}, Ws = (e, t, n) => {
	let r, i = Us[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Gs(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Ks = {
	date: Gs({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Gs({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Gs({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, qs = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Js = (e, t, n, r) => qs[e];
function Ys(e) {
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
var Xs = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: Ys({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: Ys({
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
	month: Ys({
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
	day: Ys({
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
	dayPeriod: Ys({
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
function Zs(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? $s(s, (e) => e.test(o)) : Qs(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Qs(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function $s(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function ec(e) {
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
var tc = {
	code: "en-US",
	formatDistance: Ws,
	formatLong: Ks,
	formatRelative: Js,
	localize: Xs,
	match: {
		ordinalNumber: ec({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: Zs({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: Zs({
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
		month: Zs({
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
		day: Zs({
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
		dayPeriod: Zs({
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
}, nc = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, rc = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, ic = {
	p: rc,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return nc(e, t);
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
		return a.replace("{{date}}", nc(r, t)).replace("{{time}}", rc(i, t));
	}
}, ac = /^D+$/, oc = /^Y+$/, sc = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function cc(e) {
	return ac.test(e);
}
function lc(e) {
	return oc.test(e);
}
function uc(e, t, n) {
	let r = dc(e, t, n);
	if (console.warn(r), sc.includes(e)) throw RangeError(r);
}
function dc(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
var fc = 6048e5, pc = 6e4, mc = 36e5, hc = 1e3, gc = /* @__PURE__ */ Symbol.for("constructDateFrom");
function _c(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && gc in e ? e[gc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
var vc = {};
function yc() {
	return vc;
}
function bc() {
	return Object.assign({}, yc());
}
function xc(e, t) {
	return _c(t || e, e);
}
function Sc(e, t) {
	let n = Cc(t) ? new t(0) : _c(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function Cc(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
var wc = 10, Tc = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, Ec = class extends Tc {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, Dc = class extends Tc {
	priority = wc;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => _c(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : _c(e, Sc(e, this.context));
	}
}, Q = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new Ec(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, Oc = class extends Q {
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
		value: r * (i * mc + a * pc + o * hc),
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
var Bc = class extends Q {
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
	let n = yc(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = xc(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
function Hc(e, t) {
	let n = xc(e, t?.in), r = n.getFullYear(), i = yc(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = _c(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Vc(o, t), c = _c(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Vc(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
var Uc = class extends Q {
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
var Gc = class extends Q {
	priority = 130;
	parse(e, t) {
		return Ic(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = _c(e, 0);
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
}, Kc = class extends Q {
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
}, qc = class extends Q {
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
}, Jc = class extends Q {
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
}, Yc = class extends Q {
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
}, Xc = class extends Q {
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
	let n = yc(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Hc(e, t), a = _c(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Vc(a, t);
}
function Qc(e, t) {
	let n = xc(e, t?.in), r = +Vc(n, t) - Zc(n, t);
	return Math.round(r / fc) + 1;
}
function $c(e, t, n) {
	let r = xc(e, n?.in), i = Qc(r, n) - t;
	return r.setDate(r.getDate() - i * 7), xc(r, n?.in);
}
var el = class extends Q {
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
	let n = xc(e, t?.in), r = n.getFullYear(), i = _c(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = Wc(i), o = _c(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = Wc(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function nl(e, t) {
	let n = tl(e, t), r = _c(e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Wc(r);
}
function rl(e, t) {
	let n = xc(e, t?.in), r = +Wc(n) - nl(n);
	return Math.round(r / fc) + 1;
}
function il(e, t, n) {
	let r = xc(e, n?.in), i = rl(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
var al = class extends Q {
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
], cl = class extends Q {
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
}, ll = class extends Q {
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
	let r = xc(e, n?.in);
	return isNaN(t) ? _c(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function dl(e, t, n) {
	let r = yc(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = xc(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return ul(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
var fl = class extends Q {
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
}, pl = class extends Q {
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
}, ml = class extends Q {
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
	let n = xc(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
function gl(e, t, n) {
	let r = xc(e, n?.in);
	return ul(r, t - hl(r, n), n);
}
var _l = class extends Q {
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
}, vl = class extends Q {
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
}, yl = class extends Q {
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
}, bl = class extends Q {
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
}, xl = class extends Q {
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
}, Sl = class extends Q {
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
}, Cl = class extends Q {
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
}, wl = class extends Q {
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
}, Tl = class extends Q {
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
}, El = class extends Q {
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
}, Dl = class extends Q {
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
	let t = xc(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), +e - n;
}
var kl = class extends Q {
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
		return t.timestampIsSet ? e : _c(e, e.getTime() - Ol(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, Al = class extends Q {
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
		return t.timestampIsSet ? e : _c(e, e.getTime() - Ol(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, jl = class extends Q {
	priority = 40;
	parse(e) {
		return Pc(e);
	}
	set(e, t, n) {
		return [_c(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, Ml = class extends Q {
	priority = 20;
	parse(e) {
		return Pc(e);
	}
	set(e, t, n) {
		return [_c(e, n), { timestampIsSet: !0 }];
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
	let i = () => _c(r?.in || n, NaN), a = bc(), o = r?.locale ?? a.locale ?? tc, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : xc(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new Dc(r?.in, n)], d = t.match(Fl).map((e) => {
		let t = e[0];
		if (t in ic) {
			let n = ic[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(Pl), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && lc(n) && uc(n, t, e), !r?.useAdditionalDayOfYearTokens && cc(n) && uc(n, t, e);
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
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = xc(n, r?.in);
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
s(ce);
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
var Xl = /* @__PURE__ */ new Set([
	"i",
	"I",
	"R",
	"t",
	"T",
	"o",
	"P",
	"p"
]), Zl = "'";
function Ql(e) {
	let t = /* @__PURE__ */ new Set(), n = !1;
	for (let r of e) r === Zl ? n = !n : n || Xl.has(r) && t.add(r);
	return [...t];
}
var $ = {};
$.af = async () => (await import("./af-iMfA3J11.chunk.mjs")).af, $["ar-DZ"] = async () => (await import("./ar-DZ-C9Rt1y36.chunk.mjs")).arDZ, $["ar-EG"] = async () => (await import("./ar-EG-DVcqrWq7.chunk.mjs")).arEG, $["ar-MA"] = async () => (await import("./ar-MA-SzaopgQ7.chunk.mjs")).arMA, $["ar-SA"] = async () => (await import("./ar-SA-DLtq0rFe.chunk.mjs")).arSA, $["ar-TN"] = async () => (await import("./ar-TN-C1waZL9P.chunk.mjs")).arTN, $.ar = async () => (await import("./ar-AlY-QF4a.chunk.mjs")).ar, $.az = async () => (await import("./az-CizghbDx.chunk.mjs")).az, $["be-tarask"] = async () => (await import("./be-tarask-BvRk9kiK.chunk.mjs")).beTarasak, $.be = async () => (await import("./be-cYDTYJkF.chunk.mjs")).be, $.bg = async () => (await import("./bg-CAMsqz6N.chunk.mjs")).bg, $.bn = async () => (await import("./bn-CfrqSRLw.chunk.mjs")).bn, $.bs = async () => (await import("./bs-D-IXtP-n.chunk.mjs")).bs, $.ca = async () => (await import("./ca-DebEfIrI.chunk.mjs")).ca, $.ckb = async () => (await import("./ckb-D653CBCM.chunk.mjs")).ckb, $.cs = async () => (await import("./cs-i6c5UV-K.chunk.mjs")).cs, $.cy = async () => (await import("./cy-IZI71KRd.chunk.mjs")).cy, $.da = async () => (await import("./da-CUgXCR3C.chunk.mjs")).da, $["de-AT"] = async () => (await import("./de-AT-BWVbAUXU.chunk.mjs")).deAT, $.de = async () => (await import("./de-DQLwOFwi.chunk.mjs")).de, $.el = async () => (await import("./el-ML0krVA7.chunk.mjs")).el, $["en-AU"] = async () => (await import("./en-AU-wddg_pBT.chunk.mjs")).enAU, $["en-CA"] = async () => (await import("./en-CA-Bo31yx1D.chunk.mjs")).enCA, $["en-GB"] = async () => (await import("./en-GB-DwCGWBar.chunk.mjs")).enGB, $["en-IE"] = async () => (await import("./en-IE-CmYvKuhv.chunk.mjs")).enIE, $["en-IN"] = async () => (await import("./en-IN-C5kWvKpC.chunk.mjs")).enIN, $["en-NZ"] = async () => (await import("./en-NZ-DXlJ0H7E.chunk.mjs")).enNZ, $["en-ZA"] = async () => (await import("./en-ZA-CJTOQybb.chunk.mjs")).enZA, $.eo = async () => (await import("./eo-C3QHo_Ak.chunk.mjs")).eo, $.es = async () => (await import("./es-DDJ2ikkF.chunk.mjs")).es, $.et = async () => (await import("./et-WZi_Sb3b.chunk.mjs")).et, $.eu = async () => (await import("./eu-DB3wiZ-D.chunk.mjs")).eu, $["fa-IR"] = async () => (await import("./fa-IR-DfXE2G0N.chunk.mjs")).faIR, $.fi = async () => (await import("./fi-xEvJMHmm.chunk.mjs")).fi, $["fr-CA"] = async () => (await import("./fr-CA-CFI11q5V.chunk.mjs")).frCA, $["fr-CH"] = async () => (await import("./fr-CH-BfW3WYC9.chunk.mjs")).frCH, $.fr = async () => (await import("./fr-DdKCpOqb.chunk.mjs")).fr, $.fy = async () => (await import("./fy-De0w19Nz.chunk.mjs")).fy, $.gd = async () => (await import("./gd-BSNiqHuP.chunk.mjs")).gd, $.gl = async () => (await import("./gl-BoIfWOAY.chunk.mjs")).gl, $.gu = async () => (await import("./gu-DqW9-eau.chunk.mjs")).gu, $.he = async () => (await import("./he-DwPyNI9Z.chunk.mjs")).he, $.hi = async () => (await import("./hi-BoiQHZOu.chunk.mjs")).hi, $.hr = async () => (await import("./hr-CuUitgB_.chunk.mjs")).hr, $.ht = async () => (await import("./ht-D6JMNeN_.chunk.mjs")).ht, $.hu = async () => (await import("./hu-CAEuqWMr.chunk.mjs")).hu, $.hy = async () => (await import("./hy-oPL5B1ZX.chunk.mjs")).hy, $.id = async () => (await import("./id-BjMvdrf2.chunk.mjs")).id, $.is = async () => (await import("./is-CjhsHPke.chunk.mjs")).is, $["it-CH"] = async () => (await import("./it-CH-BQZpn5z-.chunk.mjs")).itCH, $.it = async () => (await import("./it-CIFAvaRo.chunk.mjs")).it, $["ja-Hira"] = async () => (await import("./ja-Hira-Dn_ccPfg.chunk.mjs")).jaHira, $.ja = async () => (await import("./ja-Hg__hxFc.chunk.mjs")).ja, $.ka = async () => (await import("./ka-CdY7yiIj.chunk.mjs")).ka, $.kk = async () => (await import("./kk-BSDz9MPi.chunk.mjs")).kk, $.km = async () => (await import("./km-DRc5OX5T.chunk.mjs")).km, $.kn = async () => (await import("./kn-BGM1iRzT.chunk.mjs")).kn, $.ko = async () => (await import("./ko-YCvNT3o-.chunk.mjs")).ko, $.lb = async () => (await import("./lb-C4a5PzHO.chunk.mjs")).lb, $.lt = async () => (await import("./lt-BtlqPSTj.chunk.mjs")).lt, $.lv = async () => (await import("./lv-Cy2l2dvI.chunk.mjs")).lv, $.mk = async () => (await import("./mk-BkUaUT_R.chunk.mjs")).mk, $.mn = async () => (await import("./mn-Cnr_1wJv.chunk.mjs")).mn, $.ms = async () => (await import("./ms-BMPu8UNq.chunk.mjs")).ms, $.mt = async () => (await import("./mt-Cl5fs1WC.chunk.mjs")).mt, $.nb = async () => (await import("./nb-BM2XXQm0.chunk.mjs")).nb, $["nl-BE"] = async () => (await import("./nl-BE-B6fD0VfT.chunk.mjs")).nlBE, $.nl = async () => (await import("./nl-6V7WmmOF.chunk.mjs")).nl, $.nn = async () => (await import("./nn-CXUkSxzC.chunk.mjs")).nn, $.oc = async () => (await import("./oc-aHmu6tSs.chunk.mjs")).oc, $.pl = async () => (await import("./pl-T6SHq6-e.chunk.mjs")).pl, $["pt-BR"] = async () => (await import("./pt-BR-CQ24slKR.chunk.mjs")).ptBR, $.pt = async () => (await import("./pt-knzfMONl.chunk.mjs")).pt, $.ro = async () => (await import("./ro-DPqSt5j1.chunk.mjs")).ro, $.ru = async () => (await import("./ru-qwkN_pzX.chunk.mjs")).ru, $.se = async () => (await import("./se-BMoQtM66.chunk.mjs")).se, $.sk = async () => (await import("./sk-Cjjgz0xJ.chunk.mjs")).sk, $.sl = async () => (await import("./sl-CWUeAagL.chunk.mjs")).sl, $.sq = async () => (await import("./sq-DBa3OHTi.chunk.mjs")).sq, $["sr-Latn"] = async () => (await import("./sr-Latn-DZrIXtg2.chunk.mjs")).srLatn, $.sr = async () => (await import("./sr-CtncIy66.chunk.mjs")).sr, $.sv = async () => (await import("./sv-rJYSgpf9.chunk.mjs")).sv, $.ta = async () => (await import("./ta-DsiqVk4W.chunk.mjs")).ta, $.te = async () => (await import("./te-CkSTrYxv.chunk.mjs")).te, $.th = async () => (await import("./th-CLSu0vGl.chunk.mjs")).th, $.tr = async () => (await import("./tr-nIS26eJ9.chunk.mjs")).tr, $.ug = async () => (await import("./ug-PoCuopys.chunk.mjs")).ug, $.uk = async () => (await import("./uk-CLSbRt0Y.chunk.mjs")).uk, $["uz-Cyrl"] = async () => (await import("./uz-Cyrl-WWIb3qvj.chunk.mjs")).uzCyrl, $.uz = async () => (await import("./uz-Nx0-7x_Q.chunk.mjs")).uz, $.vi = async () => (await import("./vi-DE9AXszy.chunk.mjs")).vi, $["zh-CN"] = async () => (await import("./zh-CN-C5Ab87BR.chunk.mjs")).zhCN, $["zh-HK"] = async () => (await import("./zh-HK-DrR5ReEk.chunk.mjs")).zhHK, $["zh-TW"] = async () => (await import("./zh-TW-BkYnARe0.chunk.mjs")).zhTW;
var $l = wt, eu;
function tu() {
	let e = C();
	if (e === $l.code) return {
		isLoading: W(!1),
		locale: W($l)
	};
	if (eu === void 0 && (eu = nu(e)), eu instanceof Promise) {
		let e = W(!0), t = W($l);
		return eu.then((n) => {
			eu = n, e.value = !1, t.value = eu;
		}), {
			isLoading: e,
			locale: t
		};
	}
	return {
		isLoading: W(!1),
		locale: W(eu)
	};
}
async function nu(e) {
	if (e in $) try {
		return await $[e]();
	} catch (n) {
		return t.warn("Failed to load locale.", {
			localeCode: e,
			error: n
		}), $l;
	}
	if (e.includes("-")) {
		let t = e.split("-")[0];
		return nu(t);
	}
	return t.warn("Found no locale to load.", { localeCode: e }), $l;
}
var ru = { class: "vue-date-time-picker__wrapper" }, iu = {
	ref: "target",
	class: "vue-date-time-picker__wrapper vue-date-time-picker__wrapper--teleport"
}, au = /* @__PURE__ */ F({
	__name: "NcDateTimePicker",
	props: /* @__PURE__ */ N({
		appendToBody: { type: Boolean },
		ariaLabel: { default: o("Datepicker input") },
		ariaLabelMenu: { default: o("Datepicker menu") },
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
	emits: /* @__PURE__ */ N([
		"update:modelValue",
		"update:timezoneId",
		"blur"
	], ["update:timezoneId"]),
	setup(e, { emit: t }) {
		let r = Te(e, "timezoneId"), i = e, a = t, s = C();
		D(() => {
			i.locale !== void 0 && u("[NcDateTimePicker] The `locale` property is no longer used and will be ignored.");
		});
		let c = E("target"), d = E("picker"), f = V(() => {
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
		}), p = V(() => i.type === "date" ? o("Select date") : i.type === "time" ? o("Select time") : i.type === "datetime" ? o("Select date and time") : i.type === "week" ? o("Select week") : i.type === "month" ? o("Select month") : i.type === "year" ? o("Select year") : i.type.endsWith("-range") ? o("Select time range") : o("Select date and time")), { isLoading: m, locale: h } = tu();
		T(h, () => {
			d.value?.parseModel();
		}, { flush: "post" }), D(() => {
			if (typeof i.format != "string") return;
			let e = Ql(i.format);
			if (e.length !== 0) {
				let t = `[NcDateTimePicker] The \`format\` property value "${i.format}" uses the non-standard formating tokens ${e.join(", ")}.`;
				t += " They will be disabled in the future because they are only supported by the date-fns library.", t += " Only use tokens from the Unicode Technical Standard #35.", t += " See https://github.com/nextcloud-libraries/nextcloud-vue/issues/8931", u(t);
			}
		});
		let g = V(() => {
			if (i.format) return i.format;
			switch (i.type) {
				case "date":
				case "date-range": return Hl(h.value);
				case "time":
				case "time-range": return Ul();
				case "datetime":
				case "datetime-range": return Wl(h.value);
				case "month": return Kl(h.value);
				case "year": return ql(h.value);
				case "week": return Gl();
			}
		}), _ = V(() => {
			let e = g.value;
			return typeof e == "function" ? !1 : typeof e != "string" || { format: (t) => Bl(t, e, /* @__PURE__ */ new Date(), { locale: h.value }) };
		}), y = V(() => ({
			timePicker: i.type === "time" || i.type === "time-range",
			yearPicker: i.type === "year",
			monthPicker: i.type === "month",
			weekPicker: i.type === "week",
			range: i.type.endsWith("-range") && { partialRange: !1 },
			enableTimePicker: i.type === "datetime" || i.type === "datetime-range",
			flow: i.type === "datetime" ? ["calendar", "time"] : void 0
		})), b = V(() => i.min && {
			hours: i.min.getHours(),
			minutes: i.min.getMinutes(),
			seconds: i.min.getSeconds()
		}), x = V(() => i.max && {
			hours: i.max.getHours(),
			minutes: i.max.getMinutes(),
			seconds: i.max.getSeconds()
		});
		function S(e) {
			if (e === null) return a("update:modelValue", null);
			if (i.type === "time") a("update:modelValue", w(e));
			else if (i.type === "time-range") {
				let t = w(e[0]), n = w(e[1]);
				n.getTime() < t.getTime() && n.setDate(n.getDate() + 1), a("update:modelValue", [t, n]);
			} else if (i.type === "month") {
				let t = e;
				a("update:modelValue", new Date(t.year, t.month, 1));
			} else i.type === "year" ? a("update:modelValue", new Date(e, 0)) : i.type === "week" ? a("update:modelValue", e[0]) : a("update:modelValue", e);
		}
		function w(e) {
			let t = /* @__PURE__ */ new Date();
			return t.setHours(e.hours), t.setMinutes(e.minutes), t.setSeconds(e.seconds), t;
		}
		let k = Se(), A = [...ee()];
		for (let e = 0; e < k; e++) A.push(A.shift());
		let j = o("W"), N = V(() => ({
			toggleOverlay: o("Toggle overlay"),
			menu: i.ariaLabelMenu,
			input: i.ariaLabel,
			openTimePicker: o("Open time picker"),
			closeTimePicker: o("Close time Picker"),
			incrementValue: (e) => o(e === "hours" ? "Increment hours" : e === "minutes" ? "Increment minutes" : "Increment seconds"),
			decrementValue: (e) => o(e === "hours" ? "Decrement hours" : e === "minutes" ? "Decrement minutes" : "Decrement seconds"),
			openTpOverlay: (e) => o(e === "hours" ? "Open hours overlay" : e === "minutes" ? "Open minutes overlay" : "Open seconds overlay"),
			amPmButton: o("Switch AM/PM mode"),
			openYearsOverlay: o("Open years overlay"),
			openMonthsOverlay: o("Open months overlay"),
			nextMonth: o("Next month"),
			prevMonth: o("Previous month"),
			nextYear: o("Next year"),
			prevYear: o("Previous year"),
			weekDay: (e) => we()[e],
			clearInput: o("Clear value"),
			calendarIcon: o("Calendar icon"),
			timePicker: o("Time picker"),
			monthPicker: (e) => o(e ? "Month picker overlay" : "Month picker"),
			yearPicker: (e) => o(e ? "Year picker overlay" : "Year picker")
		}));
		function P() {
			d.value.selectDate();
		}
		function ne() {
			d.value.closeMenu();
		}
		let F = V(() => i.type === "datetime" ? {
			minDate: i.min,
			maxDate: i.max,
			minTime: i.min && f.value && L(i.min, f.value) ? b.value : void 0,
			maxTime: i.max && f.value && L(i.max, f.value) ? x.value : void 0
		} : i.type === "datetime-range" ? {
			minDate: i.min,
			maxDate: i.max,
			minTime: i.min && f.value && L(i.min, f.value[0]) ? b.value : void 0,
			maxTime: i.max && f.value && L(i.max, f.value[1]) ? x.value : void 0
		} : i.type === "time" || i.type === "time-range" ? {
			minTime: i.min ? b.value : void 0,
			maxTime: i.max ? x.value : void 0
		} : {
			minDate: i.min,
			maxDate: i.max
		});
		function L(e, t) {
			return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
		}
		return (t, i) => (v(), H("div", ru, [B(I(zs), xe({
			ref: "picker",
			"aria-labels": N.value,
			autoApply: !e.confirm,
			class: ["vue-date-time-picker", { "vue-date-time-picker--clearable": e.clearable }],
			cancelText: I(o)("Cancel"),
			clearable: e.clearable,
			dayNames: A,
			placeholder: e.placeholder ?? p.value,
			format: g.value,
			locale: I(s),
			formatLocale: I(h),
			readonly: I(m),
			minDate: F.value.minDate,
			maxDate: F.value.maxDate,
			minTime: F.value.minTime,
			maxTime: F.value.maxTime,
			minutesIncrement: e.minuteStep,
			modelValue: f.value,
			nowButtonLabel: I(o)("Now"),
			selectText: I(o)("Pick"),
			sixWeeks: "fair",
			inline: e.inline,
			teleport: e.appendToBody ? c.value || void 0 : !1,
			textInput: _.value,
			weekNumName: I(j),
			weekNumbers: e.showWeekNumber ? { type: "iso" } : void 0,
			weekStart: I(k)
		}, y.value, {
			"onUpdate:modelValue": S,
			onBlur: i[1] ||= (e) => a("blur")
		}), ge({
			"action-buttons": l(() => [B(I(M), {
				size: "small",
				variant: "tertiary",
				onClick: ne
			}, {
				default: l(() => [te(se(I(o)("Cancel")), 1)]),
				_: 1
			}), B(I(M), {
				size: "small",
				variant: "primary",
				onClick: P
			}, {
				default: l(() => [te(se(I(o)("Pick")), 1)]),
				_: 1
			})]),
			"clear-icon": l(({ clear: e }) => [B(I(M), {
				"aria-label": I(o)("Clear value"),
				variant: "tertiary-no-background",
				onClick: e
			}, {
				icon: l(() => [B(O, {
					inline: "",
					path: I(oe),
					size: 20
				}, null, 8, ["path"])]),
				_: 1
			}, 8, ["aria-label", "onClick"])]),
			"input-icon": l(() => [B(O, {
				path: I(he),
				size: 20
			}, null, 8, ["path"])]),
			"clock-icon": l(() => [B(O, {
				inline: "",
				path: I(le),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-left": l(() => [B(O, {
				inline: "",
				path: I(re),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-right": l(() => [B(O, {
				inline: "",
				path: I(ie),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-down": l(() => [B(O, {
				inline: "",
				path: I(ye),
				size: 20
			}, null, 8, ["path"])]),
			"arrow-up": l(() => [B(O, {
				inline: "",
				path: I(fe),
				size: 20
			}, null, 8, ["path"])]),
			_: 2
		}, [e.showTimezoneSelect ? {
			name: "action-extra",
			fn: l(() => [B(Hs, {
				modelValue: r.value,
				"onUpdate:modelValue": i[0] ||= (e) => r.value = e,
				class: "vue-date-time-picker__timezone",
				appendToBody: !1,
				inputLabel: I(o)("Time zone")
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
		]), (v(), z(n, {
			to: "body",
			disabled: !e.appendToBody
		}, [U("div", iu, null, 512)], 8, ["disabled"]))]));
	}
}), ou = /* @__PURE__ */ y(au, [["__scopeId", "data-v-23910d95"]]), su = /* @__PURE__ */ e({ default: () => ou });
//#endregion
export { vt as a, K as c, ou as default, xt as i, Ct as n, Xe as o, St as r, Ke as s, su as t };
