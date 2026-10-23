import { Gn as e, Mn as t, On as n, Qt as r, Un as i, Vn as a, X as o, Xt as s, Z as c, _n as l, an as u, cn as d, dn as f, dr as p, fr as m, hr as h, in as g, ln as _, nn as v, on as y, or as b, rn as x, rr as S, zn as C } from "./createElementId-BhyzukIw.chunk.mjs";
import { a as w, f as T, i as E, n as D, o as O, p as k, s as A, u as j, w as M, y as N } from "./chunks-DROf82q0.chunk.mjs";
import { t as P } from "./NcCheckboxRadioSwitch-CxW6DNxG.chunk.mjs";
import { a as F, s as I } from "./dist-6LyxEVKo.chunk.mjs";
import { n as L, t as R } from "./FilePicker-BjR1w0Ts.chunk.mjs";
//#region node_modules/@nextcloud/dialogs/dist/chunks/ConflictPicker.mjs
var z = ["src"], B = { key: 1 }, V = { class: "hidden-visually" }, H = /* @__PURE__ */ D(/* @__PURE__ */ f({
	__name: "ConflictPickerCard",
	props: {
		preview: {},
		mtime: {},
		size: {},
		isFolder: { type: Boolean },
		label: {},
		boldDate: { type: Boolean },
		boldSize: { type: Boolean }
	},
	setup(e) {
		let t = e, r = S(!1);
		i(() => t.preview, () => {
			r.value = !1;
		});
		let a = v(() => !!t.preview && !r.value);
		return (t, i) => (n(), y("span", { class: m(t.$style.card) }, [
			a.value ? (n(), y("img", {
				key: 1,
				class: m(t.$style.cardPreview),
				src: e.preview,
				alt: "",
				loading: "lazy",
				onError: i[0] ||= (e) => r.value = !0
			}, null, 42, z)) : (n(), g(p(o), {
				key: 0,
				class: m([t.$style.cardIcon, { [t.$style.cardIcon_folder]: e.isFolder }]),
				path: e.isFolder ? p(k) : p(T),
				size: 48
			}, null, 8, ["class", "path"])),
			x("span", { class: m(t.$style.cardDescription) }, [e.mtime ? (n(), g(p(L), {
				key: 0,
				class: m({ [t.$style.bold]: e.boldDate }),
				timestamp: e.mtime,
				relativeTime: !1,
				format: {
					timeStyle: "short",
					dateStyle: "medium"
				}
			}, null, 8, ["class", "timestamp"])) : (n(), y("span", B, h(p(A)("Last modified date unknown")), 1)), e.size === void 0 ? u("", !0) : (n(), y("span", {
				key: 2,
				class: m({ [t.$style.bold]: e.boldSize })
			}, h(p(F)(e.size)), 3))], 2),
			x("span", V, h(e.label), 1)
		], 2));
	}
}), [["__cssModules", { $style: {
	card: "_card_ysn65_1",
	cardIcon: "_cardIcon_ysn65_7",
	cardPreview: "_cardPreview_ysn65_8",
	cardIcon_folder: "_cardIcon_folder_ysn65_20",
	cardDescription: "_cardDescription_ysn65_30",
	bold: "_bold_ysn65_40"
} }]]), U = 64, W = /* @__PURE__ */ D(/* @__PURE__ */ f({
	__name: "ConflictPickerEntry",
	props: /* @__PURE__ */ l({
		existing: {},
		incoming: {},
		isSingle: { type: Boolean }
	}, {
		existingSelected: {
			type: Boolean,
			required: !0
		},
		existingSelectedModifiers: {},
		incomingSelected: {
			type: Boolean,
			required: !0
		},
		incomingSelectedModifiers: {}
	}),
	emits: ["update:existingSelected", "update:incomingSelected"],
	setup(t, { expose: r }) {
		let a = C(t, "existingSelected"), s = C(t, "incomingSelected"), c = t;
		r({ validate: q });
		let l = (e) => "FileSystemEntry" in window && e instanceof window.FileSystemEntry, u = (e) => "FileSystemFileEntry" in window && e instanceof window.FileSystemFileEntry, d = S(""), f = S(), b = S(), w = S(), T = S(), E = S(), D = S(), O = v(() => s.value || a.value), k = v(() => c.existing.type === I.Folder), M = v(() => l(c.incoming) ? c.incoming.isDirectory : c.incoming instanceof File ? !1 : c.incoming.type === I.Folder), N = v(() => !!w.value && !!T.value && w.value > T.value), F = v(() => !!w.value && !!T.value && T.value > w.value), L = v(() => E.value !== void 0 && D.value !== void 0 && E.value > D.value), z = v(() => E.value !== void 0 && D.value !== void 0 && D.value > E.value);
		i(() => c.existing, async () => {
			T.value = W(c.existing), D.value = V(c.existing), b.value = await G(c.existing);
		}), i(() => c.incoming, async () => {
			let e = await B(c.incoming);
			e !== null && (w.value = W(e), E.value = V(e), f.value = await G(e));
		});
		async function B(e) {
			return u(e) ? await new Promise((t, n) => e.file(t, n)) : l(e) ? null : e;
		}
		function V(e) {
			return e.size;
		}
		function W(e) {
			if (e instanceof File) {
				let t = e.lastModified;
				if (t > 0) return new Date(t);
			} else return e.mtime;
		}
		async function G(e) {
			return e instanceof File ? await K(e) : R(e, { size: U })?.toString();
		}
		async function K(e) {
			if (!e.type.startsWith("image/")) return;
			let { resolve: t, promise: n } = Promise.withResolvers(), r = new FileReader();
			return r.onload = async (n) => {
				let r = n?.target?.result;
				if (r instanceof ArrayBuffer) {
					let n = new Blob([r], { type: e.type }), i = URL.createObjectURL(n);
					t(i);
					return;
				}
				t(void 0);
			}, r.readAsArrayBuffer(e), n;
		}
		function q() {
			d.value = !s.value && !a.value ? A("You need to choose at least one conflict solution") : "";
		}
		return (r, i) => (n(), y("fieldset", { class: m(r.$style.pickerEntry) }, [
			x("legend", null, h(t.existing.displayname), 1),
			t.isSingle ? (n(), g(H, {
				key: 1,
				class: m(r.$style.pickerEntryColumn),
				preview: b.value,
				mtime: T.value,
				size: D.value,
				isFolder: k.value,
				label: p(A)("Existing version"),
				boldDate: F.value,
				boldSize: z.value
			}, null, 8, [
				"class",
				"preview",
				"mtime",
				"size",
				"isFolder",
				"label",
				"boldDate",
				"boldSize"
			])) : (n(), g(p(P), {
				key: 0,
				modelValue: a.value,
				"onUpdate:modelValue": i[0] ||= (e) => a.value = e,
				class: m(r.$style.pickerEntryColumn),
				error: !!d.value,
				helperText: d.value,
				required: !O.value
			}, {
				default: e(() => [_(H, {
					preview: b.value,
					mtime: T.value,
					size: D.value,
					isFolder: k.value,
					label: p(A)("Existing version"),
					boldDate: F.value,
					boldSize: z.value
				}, null, 8, [
					"preview",
					"mtime",
					"size",
					"isFolder",
					"label",
					"boldDate",
					"boldSize"
				])]),
				_: 1
			}, 8, [
				"modelValue",
				"class",
				"error",
				"helperText",
				"required"
			])),
			_(p(o), {
				class: m(r.$style.pickerEntryArrow),
				directional: "",
				path: p(j)
			}, null, 8, ["class", "path"]),
			t.isSingle ? (n(), g(H, {
				key: 3,
				class: m(r.$style.pickerEntryColumn),
				preview: f.value,
				mtime: w.value,
				size: E.value,
				isFolder: M.value,
				label: p(A)("New version"),
				boldDate: N.value,
				boldSize: L.value
			}, null, 8, [
				"class",
				"preview",
				"mtime",
				"size",
				"isFolder",
				"label",
				"boldDate",
				"boldSize"
			])) : (n(), g(p(P), {
				key: 2,
				modelValue: s.value,
				"onUpdate:modelValue": i[1] ||= (e) => s.value = e,
				class: m(r.$style.pickerEntryColumn),
				error: !!d.value,
				helperText: d.value,
				required: !O.value
			}, {
				default: e(() => [_(H, {
					preview: f.value,
					mtime: w.value,
					size: E.value,
					isFolder: M.value,
					label: p(A)("New version"),
					boldDate: N.value,
					boldSize: L.value
				}, null, 8, [
					"preview",
					"mtime",
					"size",
					"isFolder",
					"label",
					"boldDate",
					"boldSize"
				])]),
				_: 1
			}, 8, [
				"modelValue",
				"class",
				"error",
				"helperText",
				"required"
			]))
		], 2));
	}
}), [["__cssModules", { $style: {
	pickerEntry: "_pickerEntry_k9pc8_1",
	pickerEntryArrow: "_pickerEntryArrow_k9pc8_14"
} }]]), G = { class: "hidden-visually" }, K = {
	key: 0,
	class: "hidden-visually"
}, q = /* @__PURE__ */ D(/* @__PURE__ */ f({
	__name: "ConflictPicker",
	props: {
		container: {},
		dirname: {},
		existing: {},
		incoming: {},
		recursiveUpload: { type: Boolean },
		isOverwriting: { type: Boolean }
	},
	emits: ["close"],
	setup(i, { emit: l }) {
		let f = i, S = l, C = A("You need to select at least one version of each file to continue."), T = a("form"), D = a("conflictEntry"), k = v(() => f.incoming.length === 1), F = b([...f.incoming]), I = b([]), L = v(() => F.value.length === 0), R = v(() => F.value.length === f.incoming.length), z = v(() => !R.value && !L.value), B = v(() => I.value.length === f.existing.length), V = v(() => !B.value && !L.value), H = v(() => {
			for (let e of f.incoming) if (!(I.value.includes(e) || F.value.includes(e))) return !1;
			return !0;
		}), U = v(() => k.value ? A("Select file to keep") : A("Select files to keep")), q = v(() => N(f.dirname ?? "") || A("All files")), J = v(() => {
			let [e, t = ""] = (k.value ? A("An item with the same name already exists in {dirname}.") : A("Items with the same name already exist in {dirname}, select which to keep.")).split("{dirname}");
			return {
				before: e,
				after: t
			};
		});
		function Y() {
			S("close", null);
		}
		function X() {
			S("close", {
				selected: [...f.incoming],
				renamed: [],
				skipped: []
			});
		}
		function Z() {
			S("close", {
				selected: [],
				renamed: [...f.incoming],
				skipped: []
			});
		}
		function Q() {
			E.debug("Conflict skipped. Ignoring all conflicting files"), S("close", {
				selected: [],
				renamed: [],
				skipped: [...f.incoming]
			});
		}
		function ee(e) {
			e ? (E.debug("Selected all new files"), F.value = [...f.incoming]) : (E.debug("Cleared new selection"), F.value = []);
		}
		function te(e) {
			e ? (E.debug("Selected all existing files"), I.value = [...f.incoming]) : (E.debug("Cleared old selection"), I.value = []);
		}
		function ne(e) {
			I.value.includes(e) ? I.value = I.value.filter((t) => t !== e) : I.value = [...I.value, e];
		}
		function re(e) {
			F.value.includes(e) ? F.value = F.value.filter((t) => t !== e) : F.value = [...F.value, e];
		}
		function $() {
			if (!H.value) {
				for (let e of D.value) e.validate();
				T.value.reportValidity(), O(C);
				return;
			}
			let e = F.value.filter((e) => !I.value.includes(e)), t = F.value.filter((e) => I.value.includes(e)), n = I.value.filter((e) => !F.value.includes(e));
			S("close", {
				renamed: t,
				selected: e,
				skipped: n
			});
		}
		return (a, l) => (n(), g(p(M), {
			container: i.container,
			class: m(a.$style.picker),
			name: U.value,
			size: "large",
			onClosing: Y
		}, {
			actions: e(() => [
				_(p(c), {
					title: p(A)("Cancel the entire operation"),
					"data-cy-conflict-picker-cancel": "",
					variant: "tertiary",
					onClick: Y
				}, {
					default: e(() => [d(h(p(A)("Cancel")), 1)]),
					_: 1
				}, 8, ["title"]),
				x("span", { class: m(a.$style.pickerActionSeparator) }, null, 2),
				k.value ? (n(), y(r, { key: 0 }, [_(p(c), {
					variant: "secondary",
					onClick: Z
				}, {
					default: e(() => [d(h(p(A)("Keep both")), 1)]),
					_: 1
				}), _(p(c), {
					variant: "primary",
					onClick: X
				}, {
					default: e(() => [d(h(p(A)("Replace")), 1)]),
					_: 1
				})], 64)) : (n(), y(r, { key: 1 }, [_(p(c), { onClick: Q }, {
					default: e(() => [d(h(p(w)("Skip %n file", "Skip %n files", i.incoming.length)), 1)]),
					_: 1
				}), _(p(c), {
					"aria-disabled": !H.value,
					class: m([a.$style.pickerActionSubmit, { [a.$style.pickerActionSubmit_disabled]: !H.value }]),
					title: H.value ? "" : p(C),
					type: "submit",
					variant: "primary",
					onClick: s($, ["stop", "prevent"])
				}, {
					icon: e(() => [_(p(o), {
						directional: "",
						path: p(j)
					}, null, 8, ["path"])]),
					default: e(() => [d(" " + h(p(A)("Continue")) + " ", 1), H.value ? u("", !0) : (n(), y("span", K, h(p(C)), 1))]),
					_: 1
				}, 8, [
					"aria-disabled",
					"class",
					"title"
				])], 64))
			]),
			default: e(() => [x("div", { class: m(a.$style.pickerHeader) }, [x("p", {
				id: "conflict-picker-description",
				class: m(a.$style.pickerDescription)
			}, [
				d(h(J.value.before), 1),
				x("strong", null, h(q.value), 1),
				d(h(J.value.after), 1),
				l[1] ||= x("br", null, null, -1),
				k.value ? u("", !0) : (n(), y(r, { key: 0 }, [d(h(p(A)("Existing files and folders will be deleted if not selected. If both are chosen, they will be renamed.")), 1), l[0] ||= x("br", null, null, -1)], 64)),
				i.recursiveUpload ? (n(), y(r, { key: 1 }, [d(h(p(A)("When a new folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.")), 1)], 64)) : i.isOverwriting ? (n(), y(r, { key: 2 }, [d(h(p(A)("When a new folder is selected, any files within it will also be overwritten.")), 1)], 64)) : (n(), y(r, { key: 3 }, [d(h(p(A)("When a new folder is selected, any conflicting files within it will also be overwritten.")), 1)], 64))
			], 2)], 2), x("form", {
				ref: "form",
				"aria-labelledby": "conflict-picker-description",
				class: m(a.$style.pickerForm),
				onSubmit: s($, ["prevent", "stop"])
			}, [k.value ? u("", !0) : (n(), y("fieldset", {
				key: 0,
				class: m(a.$style.pickerSelectAll)
			}, [
				x("legend", G, h(p(A)("Select all checkboxes")), 1),
				_(p(P), {
					modelValue: B.value,
					indeterminate: V.value,
					"onUpdate:modelValue": te
				}, {
					default: e(() => [d(h(p(A)("Existing files")), 1)]),
					_: 1
				}, 8, ["modelValue", "indeterminate"]),
				l[2] ||= x("span", null, null, -1),
				_(p(P), {
					modelValue: R.value,
					indeterminate: z.value,
					"onUpdate:modelValue": ee
				}, {
					default: e(() => [d(h(p(A)("New files")), 1)]),
					_: 1
				}, 8, ["modelValue", "indeterminate"])
			], 2)), (n(!0), y(r, null, t(i.existing, (e, t) => (n(), g(W, {
				ref_for: !0,
				ref: "conflictEntry",
				key: e.fileid,
				isSingle: k.value,
				incoming: i.incoming[t],
				existing: e,
				incomingSelected: F.value.includes(i.incoming[t]),
				existingSelected: I.value.includes(i.incoming[t]),
				"onUpdate:existingSelected": (e) => ne(i.incoming[t]),
				"onUpdate:incomingSelected": (e) => re(i.incoming[t])
			}, null, 8, [
				"isSingle",
				"incoming",
				"existing",
				"incomingSelected",
				"existingSelected",
				"onUpdate:existingSelected",
				"onUpdate:incomingSelected"
			]))), 128))], 34)]),
			_: 1
		}, 8, [
			"container",
			"class",
			"name"
		]));
	}
}), [["__cssModules", { $style: {
	picker: "_picker_108fg_1",
	pickerActionSeparator: "_pickerActionSeparator_108fg_10",
	pickerHeader: "_pickerHeader_108fg_14",
	pickerForm: "_pickerForm_108fg_23",
	pickerActionSubmit_disabled: "_pickerActionSubmit_disabled_108fg_30",
	pickerSelectAll: "_pickerSelectAll_108fg_35",
	"conflict-picker__all": "_conflict-picker__all_108fg_50"
} }]]);
//#endregion
export { q as default };
