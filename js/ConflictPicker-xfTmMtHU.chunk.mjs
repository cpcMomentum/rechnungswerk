import { Cn as e, Ct as t, Jt as n, Lt as r, Qt as i, Vt as a, Xt as o, _t as s, bn as c, bt as l, ct as u, dn as d, en as f, gt as p, ht as m, kt as h, mn as g, mt as _, ut as v, vt as y, xt as b, yn as x } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { E as S, T as C } from "./mdi-CpchYUUV-BlQjFBKG.chunk.mjs";
import { a as w, f as T, i as E, o as D, r as O } from "./chunks-tk4b0tDJ.chunk.mjs";
import { t as k } from "./NcCheckboxRadioSwitch-b1krvMyn.chunk.mjs";
import { c as A, l as j, o as M, r as N, t as P, u as F } from "./preview-Bef-XMOh.chunk.mjs";
import { c as I, t as L } from "./_plugin-vue_export-helper-DV6c2A9v.chunk.mjs";
//#region node_modules/@nextcloud/dialogs/dist/chunks/ConflictPicker.mjs
var R = ["src"], z = { key: 1 }, B = ["src"], V = { key: 1 }, H = 64, U = /* @__PURE__ */ L(/* @__PURE__ */ t({
	__name: "ConflictPickerEntry",
	props: /* @__PURE__ */ h({
		existing: {},
		incoming: {}
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
	setup(t, { expose: a }) {
		let o = n(t, "existingSelected"), s = n(t, "incomingSelected"), l = t;
		a({ validate: J });
		let u = (e) => "FileSystemEntry" in window && e instanceof window.FileSystemEntry, h = (e) => "FileSystemFileEntry" in window && e instanceof window.FileSystemFileEntry, g = d(""), v = d(), S = d(), w = d(), T = d(), E = d(), O = d(), A = _(() => s.value || o.value), M = _(() => l.existing.type === I.Folder), L = _(() => u(l.incoming) ? l.incoming.isDirectory : l.incoming instanceof File ? !1 : l.incoming.type === I.Folder);
		i(() => l.existing, async () => {
			T.value = G(l.existing), O.value = W(l.existing), S.value = await K(l.existing);
		}), i(() => l.incoming, async () => {
			let e = await U(l.incoming);
			e !== null && (w.value = G(e), E.value = W(e), v.value = await K(e));
		});
		async function U(e) {
			return h(e) ? await new Promise((t, n) => e.file(t, n)) : u(e) ? null : e;
		}
		function W(e) {
			return e.size;
		}
		function G(e) {
			if (e instanceof File) {
				let t = e.lastModified;
				if (t > 0) return new Date(t);
			} else return e.mtime;
		}
		async function K(e) {
			return e instanceof File ? await q(e) : P(e, { size: H })?.toString();
		}
		async function q(e) {
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
		function J() {
			g.value = !s.value && !o.value ? D("You need to choose at least one conflict solution") : "";
		}
		return (n, i) => (r(), y("fieldset", { class: c(n.$style.pickerEntry) }, [
			m("legend", null, e(t.existing.displayname), 1),
			b(x(k), {
				modelValue: s.value,
				"onUpdate:modelValue": i[0] ||= (e) => s.value = e,
				error: !!g.value,
				helperText: g.value,
				required: !A.value
			}, {
				default: f(() => [m("span", { class: c(n.$style.pickerEntryItem) }, [v.value ? (r(), y("img", {
					key: 1,
					class: c(n.$style.pickerEntryPreview),
					src: v.value,
					alt: "",
					loading: "lazy"
				}, null, 10, R)) : (r(), p(x(C), {
					key: 0,
					class: c([n.$style.pickerEntryIcon, { [n.$style.pickerEntryIcon_folder]: M.value }]),
					path: L.value ? x(F) : x(j),
					size: 48
				}, null, 8, ["class", "path"])), m("span", { class: c(n.$style.pickerEntryDescription) }, [
					m("span", null, e(x(D)("New version")), 1),
					w.value ? (r(), p(x(N), {
						key: 0,
						timestamp: w.value,
						relativeTime: !1,
						format: {
							timeStyle: "short",
							dateStyle: "medium"
						}
					}, null, 8, ["timestamp"])) : (r(), y("span", z, e(x(D)("Last modified date unknown")), 1)),
					m("span", null, e(E.value), 1)
				], 2)], 2)]),
				_: 1
			}, 8, [
				"modelValue",
				"error",
				"helperText",
				"required"
			]),
			b(x(k), {
				modelValue: o.value,
				"onUpdate:modelValue": i[1] ||= (e) => o.value = e,
				error: !!g.value,
				helperText: g.value,
				required: !A.value
			}, {
				default: f(() => [m("span", { class: c(n.$style.pickerEntryItem) }, [S.value ? (r(), y("img", {
					key: 1,
					class: c(n.$style.pickerEntryPreview),
					src: S.value,
					alt: "",
					loading: "lazy"
				}, null, 10, B)) : (r(), p(x(C), {
					key: 0,
					class: c([n.$style.pickerEntryIcon, { [n.$style.pickerEntryIcon_folder]: M.value }]),
					path: M.value ? x(F) : x(j),
					size: 48
				}, null, 8, ["class", "path"])), m("span", { class: c(n.$style.pickerEntryDescription) }, [
					m("span", null, e(x(D)("Existing version")), 1),
					T.value ? (r(), p(x(N), {
						key: 0,
						timestamp: T.value,
						relativeTime: !1,
						format: {
							timeStyle: "short",
							dateStyle: "medium"
						}
					}, null, 8, ["timestamp"])) : (r(), y("span", V, e(x(D)("Last modified date unknown")), 1)),
					m("span", null, e(O.value), 1)
				], 2)], 2)]),
				_: 1
			}, 8, [
				"modelValue",
				"error",
				"helperText",
				"required"
			])
		], 2));
	}
}), [["__cssModules", { $style: {
	pickerEntry: "_pickerEntry_xk2pl_1",
	pickerEntryItem: "_pickerEntryItem_xk2pl_5",
	pickerEntryIcon: "_pickerEntryIcon_xk2pl_11",
	pickerEntryPreview: "_pickerEntryPreview_xk2pl_12",
	pickerEntryIcon_folder: "_pickerEntryIcon_folder_xk2pl_24",
	pickerEntryDescription: "_pickerEntryDescription_xk2pl_34"
} }]]), W = { class: "hidden-visually" }, G = {
	key: 0,
	class: "hidden-visually"
}, K = /* @__PURE__ */ L(/* @__PURE__ */ t({
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
	setup(t, { emit: n }) {
		let i = t, d = n, h = D("You need to select at least one version of each file to continue."), j = o("form"), N = o("conflictEntry"), P = g([]), F = g([]), I = _(() => P.value.length === 0), L = _(() => P.value.length === i.incoming.length), R = _(() => !L.value && !I.value), z = _(() => F.value.length === i.existing.length), B = _(() => !z.value && !I.value), V = _(() => {
			for (let e of i.incoming) if (!(F.value.includes(e) || P.value.includes(e))) return !1;
			return !0;
		}), H = _(() => i.dirname?.trim() === "" ? E("%n file conflict", "%n files conflict", i.incoming.length) : E("%n file conflict in {dirname}", "%n file conflicts in {dirname}", i.incoming.length, { dirname: i.dirname }));
		function K() {
			d("close", null);
		}
		function q() {
			O.debug("Conflict skipped. Ignoring all conflicting files"), d("close", {
				selected: [],
				renamed: [],
				skipped: [...i.incoming]
			});
		}
		function J(e) {
			e ? (O.debug("Selected all new files"), P.value = [...i.incoming]) : (O.debug("Cleared new selection"), P.value = []);
		}
		function Y(e) {
			e ? (O.debug("Selected all existing files"), F.value = [...i.incoming]) : (O.debug("Cleared old selection"), F.value = []);
		}
		function X(e) {
			F.value.includes(e) ? F.value = F.value.filter((t) => t !== e) : F.value = [...F.value, e];
		}
		function Z(e) {
			P.value.includes(e) ? P.value = P.value.filter((t) => t !== e) : P.value = [...P.value, e];
		}
		function Q() {
			if (!V.value) {
				for (let e of N.value) e.validate();
				j.value.reportValidity(), w(h);
				return;
			}
			let e = P.value.filter((e) => !F.value.includes(e)), t = P.value.filter((e) => F.value.includes(e)), n = F.value.filter((e) => !P.value.includes(e));
			d("close", {
				renamed: t,
				selected: e,
				skipped: n
			});
		}
		return (n, i) => (r(), p(x(T), {
			container: t.container,
			class: c(n.$style.picker),
			name: H.value,
			size: "large",
			onClosing: K
		}, {
			actions: f(() => [
				b(x(S), {
					title: x(D)("Cancel the entire operation"),
					"data-cy-conflict-picker-cancel": "",
					variant: "tertiary",
					onClick: K
				}, {
					icon: f(() => [b(x(C), { path: x(A) }, null, 8, ["path"])]),
					default: f(() => [l(" " + e(x(D)("Cancel")), 1)]),
					_: 1
				}, 8, ["title"]),
				m("span", { class: c(n.$style.pickerActionSeparator) }, null, 2),
				b(x(S), { onClick: q }, {
					icon: f(() => [b(x(C), { path: x(A) }, null, 8, ["path"])]),
					default: f(() => [l(" " + e(t.incoming.length === 1 ? x(D)("Skip this file") : x(E)("Skip %n file", "Skip %n files", t.incoming.length)), 1)]),
					_: 1
				}),
				b(x(S), {
					"aria-disabled": !V.value,
					class: c([n.$style.pickerActionSubmit, { [n.$style.pickerActionSubmit_disabled]: !V.value }]),
					title: V.value ? "" : x(h),
					type: "submit",
					variant: "primary",
					onClick: u(Q, ["stop", "prevent"])
				}, {
					icon: f(() => [b(x(C), {
						directional: "",
						path: x(M)
					}, null, 8, ["path"])]),
					default: f(() => [l(" " + e(x(D)("Continue")) + " ", 1), V.value ? s("", !0) : (r(), y("span", G, e(x(h)), 1))]),
					_: 1
				}, 8, [
					"aria-disabled",
					"class",
					"title"
				])
			]),
			default: f(() => [m("div", { class: c(n.$style.pickerHeader) }, [m("p", {
				id: "conflict-picker-description",
				class: c(n.$style.pickerDescription)
			}, [
				l(e(x(D)("Which files do you want to keep?")), 1),
				i[0] ||= m("br", null, null, -1),
				l(" " + e(x(D)("If you select both versions, the incoming file will have a number added to its name.")), 1),
				i[1] ||= m("br", null, null, -1),
				t.recursiveUpload ? (r(), y(v, { key: 0 }, [l(e(x(D)("When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.")), 1)], 64)) : t.isOverwriting ? (r(), y(v, { key: 1 }, [l(e(x(D)("When an incoming folder is selected, any files within it will also be overwritten.")), 1)], 64)) : (r(), y(v, { key: 2 }, [l(e(x(D)("When an incoming folder is selected, any conflicting files within it will also be overwritten.")), 1)], 64))
			], 2)], 2), m("form", {
				ref: "form",
				"aria-labelledby": "conflict-picker-description",
				class: c(n.$style.pickerForm),
				onSubmit: u(Q, ["prevent", "stop"])
			}, [m("fieldset", { class: c(n.$style.pickerSelectAll) }, [
				m("legend", W, e(x(D)("Select all checkboxes")), 1),
				b(x(k), {
					modelValue: L.value,
					indeterminate: R.value,
					"onUpdate:modelValue": J
				}, {
					default: f(() => [l(e(x(D)("Select all new files")), 1)]),
					_: 1
				}, 8, ["modelValue", "indeterminate"]),
				b(x(k), {
					modelValue: z.value,
					indeterminate: B.value,
					"onUpdate:modelValue": Y
				}, {
					default: f(() => [l(e(x(D)("Select all existing files")), 1)]),
					_: 1
				}, 8, ["modelValue", "indeterminate"])
			], 2), (r(!0), y(v, null, a(t.existing, (e, n) => (r(), p(U, {
				ref_for: !0,
				ref: "conflictEntry",
				key: e.fileid,
				incoming: t.incoming[n],
				existing: e,
				incomingSelected: P.value.includes(t.incoming[n]),
				existingSelected: F.value.includes(t.incoming[n]),
				"onUpdate:existingSelected": (e) => X(t.incoming[n]),
				"onUpdate:incomingSelected": (e) => Z(t.incoming[n])
			}, null, 8, [
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
	picker: "_picker_6q4ek_1",
	pickerHeader: "_pickerHeader_6q4ek_6",
	pickerForm: "_pickerForm_6q4ek_15",
	pickerActionSubmit_disabled: "_pickerActionSubmit_disabled_6q4ek_22",
	pickerSelectAll: "_pickerSelectAll_6q4ek_27",
	"conflict-picker__all": "_conflict-picker__all_6q4ek_40"
} }]]);
//#endregion
export { K as default };
