import { i as e } from "./buildMatchPatternFn-DQMsT4gp.chunk.mjs";
import { n as t, r as n, t as r } from "./match-BvgYgO7F.chunk.mjs";
import { t as i } from "./formatRelative-BvQuf46f.chunk.mjs";
var a = {
	date: e({
		formats: {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd/MM/y"
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
			full: "{{date}} 'à' {{time}}",
			long: "{{date}} 'à' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, o = {
	code: "fr",
	formatDistance: n,
	formatLong: a,
	formatRelative: i,
	localize: t,
	match: r,
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
export { o as default, o as fr };
