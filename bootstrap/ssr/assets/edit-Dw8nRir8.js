import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { H as Header } from "./header-CXbJGelD.js";
import { A as AppLayout } from "./app-layout-BITDaVXr.js";
import "react";
import "sonner";
import { C as Container } from "./tooltip-Cbn6jex2.js";
import "justd-icons";
import { DeleteUserForm } from "./delete-user-form-DTmGJbE4.js";
import { UpdatePasswordForm } from "./update-password-form-PenBPB-9.js";
import { UpdateProfileInformationForm } from "./update-profile-information-form-BJfSEXuf.js";
import "./flash-message-7-6omp4s.js";
import "tailwind-merge";
import "tailwind-variants";
import "clsx";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
import "./text-field-6Hwg1vI8.js";
import "./form-Dmi_eg0k.js";
const title = "Profile";
function Edit({ mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx(Header, { title }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl space-y-6", children: [
      /* @__PURE__ */ jsx(UpdateProfileInformationForm, { mustVerifyEmail, status }),
      /* @__PURE__ */ jsx(UpdatePasswordForm, {}),
      /* @__PURE__ */ jsx(DeleteUserForm, {})
    ] }) })
  ] });
}
Edit.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  Edit as default
};
