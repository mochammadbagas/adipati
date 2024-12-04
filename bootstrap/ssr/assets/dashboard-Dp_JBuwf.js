import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { A as AppLayout } from "./app-layout-C8nfIT7A.js";
import "react";
import "sonner";
import { C as Container, a as Card } from "./tooltip-Cbn6jex2.js";
import "justd-icons";
import "./flash-message-7-6omp4s.js";
import "tailwind-merge";
import "tailwind-variants";
import "clsx";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx(Container, { className: "py-12", children: /* @__PURE__ */ jsxs(Card, { className: "p-6 w-full", children: [
      "Hello, ",
      auth.user.name,
      "!"
    ] }) })
  ] });
}
Dashboard.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  Dashboard as default
};
