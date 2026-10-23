import { c as e, s as t } from "./logger-Dmvqkkgn.chunk.mjs";
import { Gn as n, On as r, Un as i, Vn as a, an as o, dn as s, dr as c, hr as l, in as u, ln as d, nn as f, on as p, rr as m } from "./createElementId-BhyzukIw.chunk.mjs";
import { T as h, i as g, n as _, o as v, s as y, w as b } from "./chunks-DROf82q0.chunk.mjs";
import { t as x } from "./NcTextField.vue_vue_type_script_setup_true_lang-fs06_dx6.chunk.mjs";
import { i as S, n as C, t as w } from "./dist-6LyxEVKo.chunk.mjs";
import "./FilePicker-BjR1w0Ts.chunk.mjs";
//#region node_modules/@nextcloud/dialogs/dist/chunks/PublicAuthPrompt.mjs
function T(e) {
	if (e.trim() === "") return y("Names must not be empty.");
	if (e.startsWith(".")) return y("Names must not start with a dot.");
	if (e.length > 64) return y("Names may be at most 64 characters long.");
	try {
		return S(e), "";
	} catch (e) {
		if (!(e instanceof w)) throw e;
		switch (e.reason) {
			case C.Character: return y("\"{char}\" is not allowed inside a name.", { char: e.segment });
			case C.ReservedName: return y("\"{segment}\" is a reserved name and not allowed.", { segment: e.segment });
			case C.Extension: return e.segment.match(/\.[a-z]/i) ? y("\"{extension}\" is not an allowed name.", { extension: e.segment }) : y("Names must not end with \"{extension}\".", { extension: e.segment });
			default: return y("Invalid name.");
		}
	}
}
var E = {
	key: 0,
	class: "public-auth-prompt__text"
}, D = /* @__PURE__ */ s({
	__name: "PublicAuthPrompt",
	props: {
		nickname: { default: "" },
		title: { default: y("Guest identification") },
		text: { default: "" },
		notice: { default: "" },
		submitLabel: { default: y("Submit name") },
		cancellable: { type: Boolean }
	},
	emits: ["close"],
	setup(s, { emit: _ }) {
		let S = s, C = _, w = a("input"), D = e("public").build(), O = m(S.nickname);
		i(() => S.nickname, () => {
			O.value = S.nickname;
		}), i(O, (e) => {
			let t = T(e);
			if (!t && w.value) {
				M(t);
				return;
			}
		});
		let k = f(() => {
			let e = {
				label: y("Cancel"),
				variant: "tertiary",
				callback: () => C("close")
			}, t = {
				label: S.submitLabel,
				type: "submit",
				variant: "primary"
			};
			return S.cancellable ? [e, t] : [t];
		}), A = f(() => S.notice ? S.notice : O.value ? y("You are currently identified as {nickname}.", { nickname: O.value }) : y("You are currently not identified."));
		function j() {
			let e = O.value.trim(), n = T(e);
			if (n) {
				M(n);
				return;
			}
			if (e === "") {
				M(y("You cannot leave the name empty."));
				return;
			}
			if (e.length < 2) {
				M(y("Please enter a name with at least 2 characters."));
				return;
			}
			try {
				t(e);
			} catch (e) {
				g.error("Failed to set nickname", { error: e }), v(y("Failed to set nickname.")), w.value.focus();
				return;
			}
			D.setItem("public-auth-prompt-shown", "true"), C("close", O.value);
		}
		function M(e) {
			w.value && (w.value.setCustomValidity(e), w.value.reportValidity(), w.value.focus());
		}
		return (e, t) => (r(), u(c(b), {
			buttons: k.value,
			class: "public-auth-prompt",
			"data-cy-public-auth-prompt-dialog": "",
			isForm: "",
			noClose: "",
			name: s.title,
			onSubmit: j
		}, {
			default: n(() => [
				s.text ? (r(), p("p", E, l(s.text), 1)) : o("", !0),
				d(c(h), {
					class: "public-auth-prompt__header",
					text: A.value,
					type: "info"
				}, null, 8, ["text"]),
				d(c(x), {
					ref: "input",
					modelValue: O.value,
					"onUpdate:modelValue": t[0] ||= (e) => O.value = e,
					class: "public-auth-prompt__input",
					"data-cy-public-auth-prompt-dialog-name": "",
					label: c(y)("Name"),
					placeholder: c(y)("Enter your name"),
					required: !s.cancellable,
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
}), O = /* @__PURE__ */ _(D, [["__scopeId", "data-v-bd4b7f1b"]]);
//#endregion
export { O as default };
