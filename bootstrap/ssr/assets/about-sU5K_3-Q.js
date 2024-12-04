import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { H as Header } from "./header-CXbJGelD.js";
import { A as AppLayout } from "./app-layout-BITDaVXr.js";
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
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "About Us" }),
    /* @__PURE__ */ jsx(Header, { title: "About Us" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Card, { className: "p-6", children: "Your about page content goes here." }) })
  ] });
}
About.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  About as default
};
