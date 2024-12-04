import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useForm, Head } from "@inertiajs/react";
import { B as Button } from "./tooltip-Cbn6jex2.js";
import "justd-icons";
import { F as Form } from "./form-Dmi_eg0k.js";
import { T as TextField } from "./text-field-6Hwg1vI8.js";
import "sonner";
import "react";
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
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post("/forgot-password");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-success", children: status }),
    /* @__PURE__ */ jsxs(Form, { validationErrors: errors, onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          type: "text",
          name: "email",
          value: data.email,
          isRequired: true,
          errorMessage: errors.email,
          autoFocus: true,
          onChange: (v) => setData("email", v)
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", className: "ml-4", isDisabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
ForgotPassword.layout = (page) => /* @__PURE__ */ jsx(
  GuestLayout,
  {
    header: "Forgot Password",
    description: "\n                    Forgot your password? No problem. Just let us know your email address and we will email you a password\n                    reset link that will allow you to choose a new one.",
    children: page
  }
);
export {
  ForgotPassword as default
};
