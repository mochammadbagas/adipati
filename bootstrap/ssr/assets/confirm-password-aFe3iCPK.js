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
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-muted-fg", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxs(Form, { validationErrors: errors, onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          id: "password",
          label: "Password",
          type: "password",
          name: "password",
          value: data.password,
          className: "mt-1 block w-full",
          autoFocus: true,
          onChange: (v) => setData("password", v)
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(Button, { isDisabled: processing, children: "Confirm" }) })
    ] })
  ] });
}
ConfirmPassword.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { children: page });
export {
  ConfirmPassword as default
};
