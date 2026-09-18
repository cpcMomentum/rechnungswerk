import { i as e } from "./buildMatchPatternFn-DQMsT4gp.chunk.mjs";
import { i as t, n, r } from "./NcDateTimePicker-B_QaJ-Jw.chunk.mjs";
//#region node_modules/date-fns/locale/en-CA/_lib/formatDistance.js
var i = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "a second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "a minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about an hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "an hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "a day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about a week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "a week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about a month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "a month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about a year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "a year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over a year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost a year",
		other: "almost {{count}} years"
	}
}, a = {
	code: "en-CA",
	formatDistance: (e, t, n) => {
		let r, a = i[e];
		return r = typeof a == "string" ? a : t === 1 ? a.one : a.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
	},
	formatLong: {
		date: e({
			formats: {
				full: "EEEE, MMMM do, yyyy",
				long: "MMMM do, yyyy",
				medium: "MMM d, yyyy",
				short: "yyyy-MM-dd"
			},
			defaultWidth: "full"
		}),
		time: e({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: e({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: t,
	localize: r,
	match: n,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
export { a as default, a as enCA };
