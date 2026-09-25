import { r as e } from "./buildMatchPatternFn-DQMsT4gp.chunk.mjs";
import { i as t, n, r, t as i } from "./match-DGmh1NLg.chunk.mjs";
//#region node_modules/date-fns/locale/de/_lib/localize.js
var a = {
	narrow: ["v.Chr.", "n.Chr."],
	abbreviated: ["v.Chr.", "n.Chr."],
	wide: ["vor Christus", "nach Christus"]
}, o = {
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
		"1. Quartal",
		"2. Quartal",
		"3. Quartal",
		"4. Quartal"
	]
}, s = {
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
		"Mär",
		"Apr",
		"Mai",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Okt",
		"Nov",
		"Dez"
	],
	wide: [
		"Januar",
		"Februar",
		"März",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"Dezember"
	]
}, c = {
	narrow: s.narrow,
	abbreviated: [
		"Jan.",
		"Feb.",
		"März",
		"Apr.",
		"Mai",
		"Juni",
		"Juli",
		"Aug.",
		"Sep.",
		"Okt.",
		"Nov.",
		"Dez."
	],
	wide: s.wide
}, l = {
	ordinalNumber: (e) => Number(e) + ".",
	era: e({
		values: a,
		defaultWidth: "wide"
	}),
	quarter: e({
		values: o,
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: e({
		values: s,
		formattingValues: c,
		defaultWidth: "wide"
	}),
	day: e({
		values: {
			narrow: [
				"S",
				"M",
				"D",
				"M",
				"D",
				"F",
				"S"
			],
			short: [
				"So",
				"Mo",
				"Di",
				"Mi",
				"Do",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"So.",
				"Mo.",
				"Di.",
				"Mi.",
				"Do.",
				"Fr.",
				"Sa."
			],
			wide: [
				"Sonntag",
				"Montag",
				"Dienstag",
				"Mittwoch",
				"Donnerstag",
				"Freitag",
				"Samstag"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: e({
		values: {
			narrow: {
				am: "vm.",
				pm: "nm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "Morgen",
				afternoon: "Nachm.",
				evening: "Abend",
				night: "Nacht"
			},
			abbreviated: {
				am: "vorm.",
				pm: "nachm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "Morgen",
				afternoon: "Nachmittag",
				evening: "Abend",
				night: "Nacht"
			},
			wide: {
				am: "vormittags",
				pm: "nachmittags",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "Morgen",
				afternoon: "Nachmittag",
				evening: "Abend",
				night: "Nacht"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "vm.",
				pm: "nm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "morgens",
				afternoon: "nachm.",
				evening: "abends",
				night: "nachts"
			},
			abbreviated: {
				am: "vorm.",
				pm: "nachm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "morgens",
				afternoon: "nachmittags",
				evening: "abends",
				night: "nachts"
			},
			wide: {
				am: "vormittags",
				pm: "nachmittags",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "morgens",
				afternoon: "nachmittags",
				evening: "abends",
				night: "nachts"
			}
		},
		defaultFormattingWidth: "wide"
	})
}, u = {
	code: "de",
	formatDistance: t,
	formatLong: r,
	formatRelative: n,
	localize: l,
	match: i,
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
export { u as de, u as default };
