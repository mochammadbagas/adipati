import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useForm, Head } from "@inertiajs/react";
import { B as Button } from "./tooltip-Cbn6jex2.js";
import "justd-icons";
import { F as Form } from "./form-Dmi_eg0k.js";
import { T as TextField } from "./text-field-6Hwg1vI8.js";
import "sonner";
import { useEffect } from "react";
import { G as GuestLayout } from "./guest-layout-57kyknCU.js";
import "tailwind-variants";
import "clsx";
import "tailwind-merge";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
import "./flash-message-7-6omp4s.js";
import "./logo-DvVOjWhF.js";
function ResetPassword(args) {
  const { token, email } = args;
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post("/reset-password");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs(Form, { className: "space-y-6", validationErrors: errors, onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          label: "Email",
          isRequired: true,
          errorMessage: errors.email,
          type: "email",
          name: "email",
          value: data.email,
          autoComplete: "username",
          onChange: (v) => setData("email", v)
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          label: "Password",
          isRequired: true,
          errorMessage: errors.password,
          type: "password",
          name: "password",
          value: data.password,
          autoComplete: "new-password",
          autoFocus: true,
          onChange: (v) => setData("password", v)
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          label: "Confirm Password",
          type: "password",
          name: "password_confirmation",
          value: data.password_confirmation,
          autoComplete: "new-password",
          onChange: (v) => setData("password_confirmation", v),
          errorMessage: errors.password_confirmation,
          isRequired: true
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", className: "ml-4", isDisabled: processing, children: "Reset Password" }) })
    ] })
  ] });
}
ResetPassword.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { children: page });
export {
  ResetPassword as default
};
