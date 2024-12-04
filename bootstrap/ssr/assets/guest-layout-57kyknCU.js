import { jsxs, jsx } from "react/jsx-runtime";
import { F as FlashMessage } from "./flash-message-7-6omp4s.js";
import { L as Logo } from "./logo-DvVOjWhF.js";
import { e as Link, a as Card } from "./tooltip-Cbn6jex2.js";
import "justd-icons";
import "react";
import "sonner";
function GuestLayout({ description = null, header = null, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0", children: [
    /* @__PURE__ */ jsx(FlashMessage, {}),
    /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx(Logo, { className: "mx-auto size-8" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 w-full max-w-lg", children: /* @__PURE__ */ jsxs(Card, { className: "rounded-none border-l-transparent border-r-transparent shadow-none sm:rounded-lg sm:border-l-border sm:border-r-border sm:shadow-sm lg:rounded-xl ", children: [
      /* @__PURE__ */ jsx(Card.Header, { className: "flex-row justify-between", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Card.Title, { children: header }),
        /* @__PURE__ */ jsx(Card.Description, { className: "mt-2", children: description })
      ] }) }),
      /* @__PURE__ */ jsx(Card.Content, { children })
    ] }) })
  ] });
}
export {
  GuestLayout as G
};
