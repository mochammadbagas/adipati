import { jsxs, jsx } from "react/jsx-runtime";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";
import { toast } from "sonner";
import { a as Card, B as Button } from "./tooltip-Cbn6jex2.js";
import "justd-icons";
import { F as Form } from "./form-Dmi_eg0k.js";
import { T as TextField } from "./text-field-6Hwg1vI8.js";
import "tailwind-variants";
import "clsx";
import "tailwind-merge";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
function UpdatePasswordForm() {
  const passwordInput = useRef(null);
  const currentPasswordInput = useRef(null);
  const { data, setData, put, errors, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => {
        toast.success("Your profile information has been updated.");
        reset();
      },
      onError: () => {
        var _a, _b;
        if (errors.password) {
          reset("password", "password_confirmation");
          (_a = passwordInput.current) == null ? void 0 : _a.focus();
        }
        if (errors.current_password) {
          reset("current_password");
          (_b = currentPasswordInput.current) == null ? void 0 : _b.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(Card.Header, { children: [
      /* @__PURE__ */ jsx(Card.Title, { children: "Update Password" }),
      /* @__PURE__ */ jsx(Card.Description, { children: "Ensure your account is using a long, random password to stay secure." })
    ] }),
    /* @__PURE__ */ jsx(Card.Content, { children: /* @__PURE__ */ jsxs(Form, { validationErrors: errors, onSubmit: submit, className: "space-y-6", children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          label: "Current Password",
          value: data.current_password,
          className: "mt-1",
          onChange: (v) => setData("current_password", v),
          type: "password",
          autoComplete: "current-password",
          isRequired: true
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          type: "password",
          name: "password",
          label: "Password",
          value: data.password,
          autoComplete: "current-password",
          onChange: (v) => setData("password", v),
          errorMessage: errors.password,
          isRequired: true
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          type: "password",
          label: "Confirm Password",
          name: "password_confirmation",
          value: data.password_confirmation,
          className: "mt-1",
          onChange: (v) => setData("password_confirmation", v),
          errorMessage: errors.password_confirmation,
          isRequired: true
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { type: "submit", isDisabled: processing, children: "Save" }),
        recentlySuccessful && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-fg", children: "Saved." })
      ] })
    ] }) })
  ] });
}
export {
  UpdatePasswordForm
};
