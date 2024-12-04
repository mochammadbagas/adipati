import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { C as Container, g as cn } from "./tooltip-Cbn6jex2.js";
import "justd-icons";
import "sonner";
const Header = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("py-6 bg-bg sm:py-12 border-b mb-12", className), ...props, children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-2xl font-semibold tracking-tight", children: props.title }) }) })
);
Header.displayName = "Header";
export {
  Header as H
};
