import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, useForm } from "@inertiajs/react";
import { a as Card, e as Link, B as Button } from "./tooltip-Cbn6jex2.js";
import "justd-icons";
import { F as Form } from "./form-Dmi_eg0k.js";
import { T as TextField } from "./text-field-6Hwg1vI8.js";
import "sonner";
import "react";
import "tailwind-variants";
import "clsx";
import "tailwind-merge";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
function UpdateProfileInformationForm({ mustVerifyEmail, status, className }) {
  const { auth } = usePage().props;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: auth.user.name ?? "",
    email: auth.user.email ?? ""
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"), {
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(Card.Header, { children: [
      /* @__PURE__ */ jsx(Card.Title, { children: "Profile Information" }),
      /* @__PURE__ */ jsx(Card.Description, { children: "Update your account's profile information and email address." })
    ] }),
    /* @__PURE__ */ jsx(Card.Content, { children: /* @__PURE__ */ jsxs(Form, { validationErrors: errors, onSubmit: submit, className: "space-y-6", children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          id: "name",
          label: "Name",
          type: "text",
          value: data.name,
          className: "mt-1",
          onChange: (v) => setData("name", v),
          isRequired: true,
          errorMessage: errors.name,
          autoFocus: true,
          autoComplete: "name"
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          id: "email",
          type: "email",
          label: "Email",
          value: data.email,
          className: "mt-1",
          onChange: (v) => setData("email", v),
          isRequired: true,
          errorMessage: errors.email,
          autoComplete: "email"
        }
      ),
      mustVerifyEmail && auth.user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              intent: "secondary",
              routerOptions: {
                method: "post"
              },
              children: "Click here to re-send the verification email."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium text-green-600", children: "A new verification link has been sent to your email address." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { type: "submit", isDisabled: processing, children: "Save" }),
        recentlySuccessful && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-fg", children: "Saved." })
      ] })
    ] }) })
  ] });
}
export {
  UpdateProfileInformationForm
};
