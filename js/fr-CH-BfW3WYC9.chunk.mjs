import { i as e } from "./buildMatchPatternFn-DQMsT4gp.chunk.mjs";
import { n as t, r as n, t as r } from "./match-BvgYgO7F.chunk.mjs";
var i = {
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
			full: "{{date}} 'à' {{time}}",
			long: "{{date}} 'à' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, a = {
	lastWeek: "eeee 'la semaine dernière à' p",
	yesterday: "'hier à' p",
	today: "'aujourd’hui à' p",
	tomorrow: "'demain à' p'",
	nextWeek: "eeee 'la semaine prochaine à' p",
	other: "P"
}, o = {
	code: "fr-CH",
	formatDistance: n,
	formatLong: i,
	formatRelative: (e, t, n, r) => a[e],
	localize: t,
	match: r,
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
export { o as default, o as frCH };
