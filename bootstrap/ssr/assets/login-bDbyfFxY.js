import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useForm, Head } from "@inertiajs/react";
import { d as Checkbox, e as Link, f as buttonStyles, B as Button } from "./tooltip-Cbn6jex2.js";
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
function Login(args) {
  const { status, canResetPassword } = args;
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600 dark:text-green-400", children: status }),
    /* @__PURE__ */ jsxs(Form, { validationErrors: errors, onSubmit: submit, className: "space-y-6", children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          label: "Email",
          type: "email",
          name: "email",
          value: data.email,
          autoComplete: "username",
          autoFocus: true,
          onChange: (v) => setData("email", v),
          errorMessage: errors.email,
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
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(Checkbox, { name: "remember", onChange: (v) => setData("remember", v), children: "Remember me" }),
        canResetPassword && /* @__PURE__ */ jsx(Link, { href: "/forgot-password", className: "text-sm text-fg hover:underline", children: "Forgot your password?" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(Link, { href: route("register"), className: buttonStyles({ appearance: "outline" }), children: "Register" }),
        /* @__PURE__ */ jsx(Button, { isDisabled: processing, type: "submit", children: "Log in" })
      ] })
    ] })
  ] });
}
Login.layout = (page) => {
  return /* @__PURE__ */ jsx(GuestLayout, { header: "Login", description: "Log in to your account.", children: page });
};
export {
  Login as default
};
