import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useForm, Head } from "@inertiajs/react";
import { e as Link, f as buttonStyles, B as Button } from "./tooltip-Cbn6jex2.js";
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
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post("/register");
  };
  console.log(void 0);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs(Form, { onSubmit: submit, validationErrors: errors, className: "space-y-6", children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          type: "text",
          name: "name",
          label: "Name",
          value: data.name,
          className: "mt-1",
          autoComplete: "name",
          autoFocus: true,
          onChange: (v) => setData("name", v),
          errorMessage: errors.name,
          isRequired: true
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          type: "email",
          name: "email",
          label: "Email",
          value: data.email,
          className: "mt-1",
          autoComplete: "username",
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
      void 0,
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(Link, { href: "/login", className: buttonStyles({ appearance: "outline" }), children: "Already registered?" }),
        /* @__PURE__ */ jsx(Button, { type: "submit", isDisabled: processing, children: "Register" })
      ] })
    ] })
  ] });
}
Register.layout = (page) => {
  return /* @__PURE__ */ jsx(GuestLayout, { header: "Register", description: "Register for your new account.", children: page });
};
export {
  Register as default
};
