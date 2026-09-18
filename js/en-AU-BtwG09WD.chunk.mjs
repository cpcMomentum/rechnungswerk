import { i as e } from "./buildMatchPatternFn-DQMsT4gp.chunk.mjs";
import { a as t, i as n, n as r, r as i } from "./NcDateTimePicker-B_QaJ-Jw.chunk.mjs";
var a = {
	date: e({
		formats: {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "dd/MM/yyyy"
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
}, o = {
	code: "en-AU",
	formatDistance: t,
	formatLong: a,
	formatRelative: n,
	localize: i,
	match: r,
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
export { o as default, o as enAU };
