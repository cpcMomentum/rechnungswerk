import { c as e, s as t } from "./logger-Dmvqkkgn.chunk.mjs";
import { En as n, Un as r, Vn as i, an as a, dn as o, in as s, ln as c, lr as l, nn as u, on as d, pr as f, tr as p, zn as m } from "./createElementId-XLh0NVJk.chunk.mjs";
import { T as h, i as g, n as _, o as v, s as y, w as b } from "./chunks-DrYk3xeN.chunk.mjs";
import { t as x } from "./NcTextField.vue_vue_type_script_setup_true_lang-C2t_3wGw.chunk.mjs";
import { i as S, n as C, t as w } from "./dist-oESYOil-.chunk.mjs";
import "./FilePicker-CmON9OVd.chunk.mjs";
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
}, D = /* @__PURE__ */ o({
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
	setup(o, { emit: _ }) {
		let S = o, C = _, w = m("input"), D = e("public").build(), O = p(S.nickname);
		i(() => S.nickname, () => {
			O.value = S.nickname;
		}), i(O, (e) => {
			let t = T(e);
			if (!t && w.value) {
				M(t);
				return;
			}
		});
		let k = u(() => {
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
		}), A = u(() => S.notice ? S.notice : O.value ? y("You are currently identified as {nickname}.", { nickname: O.value }) : y("You are currently not identified."));
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
		return (e, t) => (n(), s(l(b), {
			buttons: k.value,
			class: "public-auth-prompt",
			"data-cy-public-auth-prompt-dialog": "",
			isForm: "",
			noClose: "",
			name: o.title,
			onSubmit: j
		}, {
			default: r(() => [
				o.text ? (n(), d("p", E, f(o.text), 1)) : a("", !0),
				c(l(h), {
					class: "public-auth-prompt__header",
					text: A.value,
					type: "info"
				}, null, 8, ["text"]),
				c(l(x), {
					ref: "input",
					modelValue: O.value,
					"onUpdate:modelValue": t[0] ||= (e) => O.value = e,
					class: "public-auth-prompt__input",
					"data-cy-public-auth-prompt-dialog-name": "",
					label: l(y)("Name"),
					placeholder: l(y)("Enter your name"),
					required: !o.cancellable,
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
