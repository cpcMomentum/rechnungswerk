import { i as e } from "./buildMatchPatternFn-DQMsT4gp.chunk.mjs";
import { i as t, n, r, t as i } from "./match-z3wfzZ1m.chunk.mjs";
var a = {
	date: e({
		formats: {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd.MM.y"
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
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
}, o = {
	code: "it-CH",
	formatDistance: t,
	formatLong: a,
	formatRelative: r,
	localize: n,
	match: i,
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
export { o as default, o as itCH };
