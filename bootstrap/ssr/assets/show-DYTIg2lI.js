import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { IconBookOpenTextFill } from "justd-icons";
import { A as AppLayout } from "./app-layout-C8nfIT7A.js";
import "react";
import "sonner";
import { C as Container, a as Card } from "./tooltip-Cbn6jex2.js";
import "./flash-message-7-6omp4s.js";
import "tailwind-merge";
import "tailwind-variants";
import "clsx";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
function Show(props) {
  const { data: article, related: articles } = props.article;
  console.log(articles);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Article" }),
    /* @__PURE__ */ jsx("div", { className: "py-6 bg-bg sm:py-12 border-b mb-12", children: /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-2xl text-center font-semibold tracking-tight", children: article.title }),
      /* @__PURE__ */ jsxs("h5", { className: "text-xs text-center tracking-tight", children: [
        article.created_at,
        " | ",
        article.author.name
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("p", { className: "text-center", children: article.body }) }),
    /* @__PURE__ */ jsxs(Container, { className: "mt-12", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6", children: "Related Articles:" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: articles.map((article2) => /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx("div", { className: "px-6 pt-6", children: /* @__PURE__ */ jsx("div", { className: "size-8 grid place-content-center rounded-full border", children: /* @__PURE__ */ jsx(IconBookOpenTextFill, {}) }) }),
        /* @__PURE__ */ jsxs(Card.Header, { children: [
          /* @__PURE__ */ jsx(Card.Title, { children: /* @__PURE__ */ jsx(Link, { href: route("article.show", article2.slug), children: article2.title }) }),
          /* @__PURE__ */ jsx(Card.Description, { children: article2.teaser })
        ] })
      ] }, article2.slug)) })
    ] })
  ] });
}
Show.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  Show as default
};
