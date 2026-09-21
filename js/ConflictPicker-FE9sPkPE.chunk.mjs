import { An as e, En as t, Ln as n, Qt as r, Un as i, Vn as a, X as o, Xt as s, Z as c, _n as l, an as u, cn as d, dn as f, in as p, ir as m, ln as h, lr as g, nn as _, on as v, pr as y, rn as b, tr as x, ur as S, zn as C } from "./createElementId-XLh0NVJk.chunk.mjs";
import { a as w, f as T, i as E, n as D, o as O, p as k, s as A, u as j, w as M, y as N } from "./chunks-DrYk3xeN.chunk.mjs";
import { t as P } from "./NcCheckboxRadioSwitch-BdRECR9E.chunk.mjs";
import { a as F, s as I } from "./dist-oESYOil-.chunk.mjs";
import { n as L, t as R } from "./FilePicker-CmON9OVd.chunk.mjs";
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
		let n = e, r = x(!1);
		a(() => n.preview, () => {
			r.value = !1;
		});
		let i = _(() => !!n.preview && !r.value);
		return (n, a) => (t(), v("span", { class: S(n.$style.card) }, [
			i.value ? (t(), v("img", {
				key: 1,
				class: S(n.$style.cardPreview),
				src: e.preview,
				alt: "",
				loading: "lazy",
				onError: a[0] ||= (e) => r.value = !0
			}, null, 42, z)) : (t(), p(g(o), {
				key: 0,
				class: S([n.$style.cardIcon, { [n.$style.cardIcon_folder]: e.isFolder }]),
				path: e.isFolder ? g(k) : g(T),
				size: 48
			}, null, 8, ["class", "path"])),
			b("span", { class: S(n.$style.cardDescription) }, [e.mtime ? (t(), p(g(L), {
				key: 0,
				class: S({ [n.$style.bold]: e.boldDate }),
				timestamp: e.mtime,
				relativeTime: !1,
				format: {
					timeStyle: "short",
					dateStyle: "medium"
				}
			}, null, 8, ["class", "timestamp"])) : (t(), v("span", B, y(g(A)("Last modified date unknown")), 1)), e.size === void 0 ? u("", !0) : (t(), v("span", {
				key: 2,
				class: S({ [n.$style.bold]: e.boldSize })
			}, y(g(F)(e.size)), 3))], 2),
			b("span", V, y(e.label), 1)
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
	setup(e, { expose: r }) {
		let s = n(e, "existingSelected"), c = n(e, "incomingSelected"), l = e;
		r({ validate: q });
		let u = (e) => "FileSystemEntry" in window && e instanceof window.FileSystemEntry, d = (e) => "FileSystemFileEntry" in window && e instanceof window.FileSystemFileEntry, f = x(""), m = x(), C = x(), w = x(), T = x(), E = x(), D = x(), O = _(() => c.value || s.value), k = _(() => l.existing.type === I.Folder), M = _(() => u(l.incoming) ? l.incoming.isDirectory : l.incoming instanceof File ? !1 : l.incoming.type === I.Folder), N = _(() => !!w.value && !!T.value && w.value > T.value), F = _(() => !!w.value && !!T.value && T.value > w.value), L = _(() => E.value !== void 0 && D.value !== void 0 && E.value > D.value), z = _(() => E.value !== void 0 && D.value !== void 0 && D.value > E.value);
		a(() => l.existing, async () => {
			T.value = W(l.existing), D.value = V(l.existing), C.value = await G(l.existing);
		}), a(() => l.incoming, async () => {
			let e = await B(l.incoming);
			e !== null && (w.value = W(e), E.value = V(e), m.value = await G(e));
		});
		async function B(e) {
			return d(e) ? await new Promise((t, n) => e.file(t, n)) : u(e) ? null : e;
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
			f.value = !c.value && !s.value ? A("You need to choose at least one conflict solution") : "";
		}
		return (n, r) => (t(), v("fieldset", { class: S(n.$style.pickerEntry) }, [
			b("legend", null, y(e.existing.displayname), 1),
			e.isSingle ? (t(), p(H, {
				key: 1,
				class: S(n.$style.pickerEntryColumn),
				preview: C.value,
				mtime: T.value,
				size: D.value,
				isFolder: k.value,
				label: g(A)("Existing version"),
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
			])) : (t(), p(g(P), {
				key: 0,
				modelValue: s.value,
				"onUpdate:modelValue": r[0] ||= (e) => s.value = e,
				class: S(n.$style.pickerEntryColumn),
				error: !!f.value,
				helperText: f.value,
				required: !O.value
			}, {
				default: i(() => [h(H, {
					preview: C.value,
					mtime: T.value,
					size: D.value,
					isFolder: k.value,
					label: g(A)("Existing version"),
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
			h(g(o), {
				class: S(n.$style.pickerEntryArrow),
				directional: "",
				path: g(j)
			}, null, 8, ["class", "path"]),
			e.isSingle ? (t(), p(H, {
				key: 3,
				class: S(n.$style.pickerEntryColumn),
				preview: m.value,
				mtime: w.value,
				size: E.value,
				isFolder: M.value,
				label: g(A)("New version"),
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
			])) : (t(), p(g(P), {
				key: 2,
				modelValue: c.value,
				"onUpdate:modelValue": r[1] ||= (e) => c.value = e,
				class: S(n.$style.pickerEntryColumn),
				error: !!f.value,
				helperText: f.value,
				required: !O.value
			}, {
				default: i(() => [h(H, {
					preview: m.value,
					mtime: w.value,
					size: E.value,
					isFolder: M.value,
					label: g(A)("New version"),
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
	setup(n, { emit: a }) {
		let l = n, f = a, x = A("You need to select at least one version of each file to continue."), T = C("form"), D = C("conflictEntry"), k = _(() => l.incoming.length === 1), F = m([...l.incoming]), I = m([]), L = _(() => F.value.length === 0), R = _(() => F.value.length === l.incoming.length), z = _(() => !R.value && !L.value), B = _(() => I.value.length === l.existing.length), V = _(() => !B.value && !L.value), H = _(() => {
			for (let e of l.incoming) if (!(I.value.includes(e) || F.value.includes(e))) return !1;
			return !0;
		}), U = _(() => k.value ? A("Select file to keep") : A("Select files to keep")), q = _(() => N(l.dirname ?? "") || A("All files")), J = _(() => {
			let [e, t = ""] = (k.value ? A("An item with the same name already exists in {dirname}.") : A("Items with the same name already exist in {dirname}, select which to keep.")).split("{dirname}");
			return {
				before: e,
				after: t
			};
		});
		function Y() {
			f("close", null);
		}
		function X() {
			f("close", {
				selected: [...l.incoming],
				renamed: [],
				skipped: []
			});
		}
		function Z() {
			f("close", {
				selected: [],
				renamed: [...l.incoming],
				skipped: []
			});
		}
		function Q() {
			E.debug("Conflict skipped. Ignoring all conflicting files"), f("close", {
				selected: [],
				renamed: [],
				skipped: [...l.incoming]
			});
		}
		function ee(e) {
			e ? (E.debug("Selected all new files"), F.value = [...l.incoming]) : (E.debug("Cleared new selection"), F.value = []);
		}
		function te(e) {
			e ? (E.debug("Selected all existing files"), I.value = [...l.incoming]) : (E.debug("Cleared old selection"), I.value = []);
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
				T.value.reportValidity(), O(x);
				return;
			}
			let e = F.value.filter((e) => !I.value.includes(e)), t = F.value.filter((e) => I.value.includes(e)), n = I.value.filter((e) => !F.value.includes(e));
			f("close", {
				renamed: t,
				selected: e,
				skipped: n
			});
		}
		return (a, l) => (t(), p(g(M), {
			container: n.container,
			class: S(a.$style.picker),
			name: U.value,
			size: "large",
			onClosing: Y
		}, {
			actions: i(() => [
				h(g(c), {
					title: g(A)("Cancel the entire operation"),
					"data-cy-conflict-picker-cancel": "",
					variant: "tertiary",
					onClick: Y
				}, {
					default: i(() => [d(y(g(A)("Cancel")), 1)]),
					_: 1
				}, 8, ["title"]),
				b("span", { class: S(a.$style.pickerActionSeparator) }, null, 2),
				k.value ? (t(), v(r, { key: 0 }, [h(g(c), {
					variant: "secondary",
					onClick: Z
				}, {
					default: i(() => [d(y(g(A)("Keep both")), 1)]),
					_: 1
				}), h(g(c), {
					variant: "primary",
					onClick: X
				}, {
					default: i(() => [d(y(g(A)("Replace")), 1)]),
					_: 1
				})], 64)) : (t(), v(r, { key: 1 }, [h(g(c), { onClick: Q }, {
					default: i(() => [d(y(g(w)("Skip %n file", "Skip %n files", n.incoming.length)), 1)]),
					_: 1
				}), h(g(c), {
					"aria-disabled": !H.value,
					class: S([a.$style.pickerActionSubmit, { [a.$style.pickerActionSubmit_disabled]: !H.value }]),
					title: H.value ? "" : g(x),
					type: "submit",
					variant: "primary",
					onClick: s($, ["stop", "prevent"])
				}, {
					icon: i(() => [h(g(o), {
						directional: "",
						path: g(j)
					}, null, 8, ["path"])]),
					default: i(() => [d(" " + y(g(A)("Continue")) + " ", 1), H.value ? u("", !0) : (t(), v("span", K, y(g(x)), 1))]),
					_: 1
				}, 8, [
					"aria-disabled",
					"class",
					"title"
				])], 64))
			]),
			default: i(() => [b("div", { class: S(a.$style.pickerHeader) }, [b("p", {
				id: "conflict-picker-description",
				class: S(a.$style.pickerDescription)
			}, [
				d(y(J.value.before), 1),
				b("strong", null, y(q.value), 1),
				d(y(J.value.after), 1),
				l[1] ||= b("br", null, null, -1),
				k.value ? u("", !0) : (t(), v(r, { key: 0 }, [d(y(g(A)("Existing files and folders will be deleted if not selected. If both are chosen, they will be renamed.")), 1), l[0] ||= b("br", null, null, -1)], 64)),
				n.recursiveUpload ? (t(), v(r, { key: 1 }, [d(y(g(A)("When a new folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.")), 1)], 64)) : n.isOverwriting ? (t(), v(r, { key: 2 }, [d(y(g(A)("When a new folder is selected, any files within it will also be overwritten.")), 1)], 64)) : (t(), v(r, { key: 3 }, [d(y(g(A)("When a new folder is selected, any conflicting files within it will also be overwritten.")), 1)], 64))
			], 2)], 2), b("form", {
				ref: "form",
				"aria-labelledby": "conflict-picker-description",
				class: S(a.$style.pickerForm),
				onSubmit: s($, ["prevent", "stop"])
			}, [k.value ? u("", !0) : (t(), v("fieldset", {
				key: 0,
				class: S(a.$style.pickerSelectAll)
			}, [
				b("legend", G, y(g(A)("Select all checkboxes")), 1),
				h(g(P), {
					modelValue: B.value,
					indeterminate: V.value,
					"onUpdate:modelValue": te
				}, {
					default: i(() => [d(y(g(A)("Existing files")), 1)]),
					_: 1
				}, 8, ["modelValue", "indeterminate"]),
				l[2] ||= b("span", null, null, -1),
				h(g(P), {
					modelValue: R.value,
					indeterminate: z.value,
					"onUpdate:modelValue": ee
				}, {
					default: i(() => [d(y(g(A)("New files")), 1)]),
					_: 1
				}, 8, ["modelValue", "indeterminate"])
			], 2)), (t(!0), v(r, null, e(n.existing, (e, r) => (t(), p(W, {
				ref_for: !0,
				ref: "conflictEntry",
				key: e.fileid,
				isSingle: k.value,
				incoming: n.incoming[r],
				existing: e,
				incomingSelected: F.value.includes(n.incoming[r]),
				existingSelected: I.value.includes(n.incoming[r]),
				"onUpdate:existingSelected": (e) => ne(n.incoming[r]),
				"onUpdate:incomingSelected": (e) => re(n.incoming[r])
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
