import { i as e } from "./buildMatchPatternFn-DQMsT4gp.chunk.mjs";
import { a as t, i as n, n as r, r as i } from "./NcDateTimePicker-B_QaJ-Jw.chunk.mjs";
var a = {
	date: e({
		formats: {
			full: "EEEE, dd MMMM yyyy",
			long: "dd MMMM yyyy",
			medium: "dd MMM yyyy",
			short: "yyyy/MM/dd"
		},
		defaultWidth: "full"
	}),
	time: e({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
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
	code: "en-ZA",
	formatDistance: t,
	formatLong: a,
	formatRelative: n,
	localize: i,
	match: r,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
export { o as default, o as enZA };
