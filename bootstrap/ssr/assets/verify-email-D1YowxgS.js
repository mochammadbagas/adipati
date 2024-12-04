import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { G as GuestLayout } from "./guest-layout-57kyknCU.js";
import { useForm, Head } from "@inertiajs/react";
import { B as Button, e as Link } from "./tooltip-Cbn6jex2.js";
import "justd-icons";
import { F as Form } from "./form-Dmi_eg0k.js";
import "react";
import "sonner";
import "./flash-message-7-6omp4s.js";
import "tailwind-merge";
import "./logo-DvVOjWhF.js";
import "tailwind-variants";
import "clsx";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
function VerifyEmail({ status }) {
  const { post, processing } = useForm();
  const submit = (e) => {
    e.preventDefault();
    post("/email/verification-notification");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Form, { onSubmit: submit, children: /* @__PURE__ */ jsx(Button, { isDisabled: processing, type: "submit", children: "Resend Verification Email" }) }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/logout",
          routerOptions: {
            method: "post"
          },
          intent: "secondary",
          children: "Log Out"
        }
      )
    ] })
  ] });
}
VerifyEmail.layout = (page) => /* @__PURE__ */ jsx(
  GuestLayout,
  {
    header: "Verify email",
    description: "\n                Thanks for signing up! Before getting started, could you verify your email address by clicking on the\n                link we just emailed to you? If you didn't receive the email, we will gladly send you another.",
    children: page
  }
);
export {
  VerifyEmail as default
};
