import { Cn as e, Ct as t, Lt as n, Qt as r, Xt as i, _t as a, dn as o, en as s, gt as c, mt as l, vt as u, xt as d, yn as f } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { l as p, u as m } from "./NcPopover-B87bEPLq-Bfc7fZbF.chunk.mjs";
import { a as h, f as g, g as _, o as v, r as y } from "./chunks-tk4b0tDJ.chunk.mjs";
import { n as b, o as x, r as S, t as C } from "./_plugin-vue_export-helper-DV6c2A9v.chunk.mjs";
import { t as w } from "./NcTextField-DMTMb6bC.chunk.mjs";
//#region node_modules/@nextcloud/dialogs/dist/chunks/PublicAuthPrompt.mjs
function T(e) {
	if (e.trim() === "") return v("Names must not be empty.");
	if (e.startsWith(".")) return v("Names must not start with a dot.");
	if (e.length > 64) return v("Names may be at most 64 characters long.");
	try {
		return x(e), "";
	} catch (e) {
		if (!(e instanceof b)) throw e;
		switch (e.reason) {
			case S.Character: return v("\"{char}\" is not allowed inside a name.", { char: e.segment });
			case S.ReservedName: return v("\"{segment}\" is a reserved name and not allowed.", { segment: e.segment });
			case S.Extension: return e.segment.match(/\.[a-z]/i) ? v("\"{extension}\" is not an allowed name.", { extension: e.segment }) : v("Names must not end with \"{extension}\".", { extension: e.segment });
			default: return v("Invalid name.");
		}
	}
}
var E = {
	key: 0,
	class: "public-auth-prompt__text"
}, D = /* @__PURE__ */ t({
	__name: "PublicAuthPrompt",
	props: {
		nickname: { default: "" },
		title: { default: v("Guest identification") },
		text: { default: "" },
		notice: { default: "" },
		submitLabel: { default: v("Submit name") },
		cancellable: { type: Boolean }
	},
	emits: ["close"],
	setup(t, { emit: b }) {
		let x = t, S = b, C = i("input"), D = m("public").build(), O = o(x.nickname);
		r(() => x.nickname, () => {
			O.value = x.nickname;
		}), r(O, (e) => {
			let t = T(e);
			if (!t && C.value) {
				M(t);
				return;
			}
		});
		let k = l(() => {
			let e = {
				label: v("Cancel"),
				variant: "tertiary",
				callback: () => S("close")
			}, t = {
				label: x.submitLabel,
				type: "submit",
				variant: "primary"
			};
			return x.cancellable ? [e, t] : [t];
		}), A = l(() => x.notice ? x.notice : O.value ? v("You are currently identified as {nickname}.", { nickname: O.value }) : v("You are currently not identified."));
		function j() {
			let e = O.value.trim(), t = T(e);
			if (t) {
				M(t);
				return;
			}
			if (e === "") {
				M(v("You cannot leave the name empty."));
				return;
			}
			if (e.length < 2) {
				M(v("Please enter a name with at least 2 characters."));
				return;
			}
			try {
				p(e);
			} catch (e) {
				y.error("Failed to set nickname", { error: e }), h(v("Failed to set nickname.")), C.value.focus();
				return;
			}
			D.setItem("public-auth-prompt-shown", "true"), S("close", O.value);
		}
		function M(e) {
			C.value && (C.value.setCustomValidity(e), C.value.reportValidity(), C.value.focus());
		}
		return (r, i) => (n(), c(f(g), {
			buttons: k.value,
			class: "public-auth-prompt",
			"data-cy-public-auth-prompt-dialog": "",
			isForm: "",
			noClose: "",
			name: t.title,
			onSubmit: j
		}, {
			default: s(() => [
				t.text ? (n(), u("p", E, e(t.text), 1)) : a("", !0),
				d(f(_), {
					class: "public-auth-prompt__header",
					text: A.value,
					type: "info"
				}, null, 8, ["text"]),
				d(f(w), {
					ref: "input",
					modelValue: O.value,
					"onUpdate:modelValue": i[0] ||= (e) => O.value = e,
					class: "public-auth-prompt__input",
					"data-cy-public-auth-prompt-dialog-name": "",
					label: f(v)("Name"),
					placeholder: f(v)("Enter your name"),
					required: !t.cancellable,
					minlength: "2",
					maxlength: "64",
					name: "name"
				}, null, 8, [
					"modelValue",
					"label",
					"placeholder",
					"required"
				])
			]),
			_: 1
		}, 8, ["buttons", "name"]));
	}
}), O = /* @__PURE__ */ C(D, [["__scopeId", "data-v-bd4b7f1b"]]);
//#endregion
export { O as default };
