import { jsxs, jsx } from "react/jsx-runtime";
import { a as Card, j as Modal, B as Button } from "./tooltip-Cbn6jex2.js";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import "justd-icons";
import { T as TextField } from "./text-field-6Hwg1vI8.js";
import "sonner";
import "tailwind-variants";
import "clsx";
import "tailwind-merge";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
function DeleteUserForm() {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const deleteUser = () => {
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(Card.Header, { children: [
      /* @__PURE__ */ jsx(Card.Title, { children: "Delete Account" }),
      /* @__PURE__ */ jsx(Card.Description, { children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsx(Card.Content, { children: /* @__PURE__ */ jsxs(Modal, { children: [
      /* @__PURE__ */ jsx(Button, { intent: "danger", children: "Delete Account" }),
      /* @__PURE__ */ jsxs(Modal.Content, { children: [
        /* @__PURE__ */ jsxs(Modal.Header, { children: [
          /* @__PURE__ */ jsx(Modal.Title, { children: "Delete Account" }),
          /* @__PURE__ */ jsx(Modal.Description, { children: "Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." })
        ] }),
        /* @__PURE__ */ jsx(Modal.Body, { children: /* @__PURE__ */ jsx(
          TextField,
          {
            type: "password",
            placeholder: "Password",
            value: data.password,
            onChange: (v) => setData("password", v),
            errorMessage: errors.password,
            isRequired: true
          }
        ) }),
        /* @__PURE__ */ jsxs(Modal.Footer, { children: [
          /* @__PURE__ */ jsx(Modal.Close, { children: "Cancel" }),
          /* @__PURE__ */ jsx(Button, { intent: "danger", type: "submit", onPress: deleteUser, isDisabled: processing, children: "Continue" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  DeleteUserForm
};
