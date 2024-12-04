import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { usePage, Head, Link } from "@inertiajs/react";
import { IconBookOpenTextFill } from "justd-icons";
import { A as AppLayout } from "./app-layout-BVMwY2M-.js";
import "react";
import "sonner";
import { C as Container, a as Card, P as Pagination } from "./tooltip-Cbn6jex2.js";
import "./flash-message-7-6omp4s.js";
import "tailwind-merge";
import "tailwind-variants";
import "clsx";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
function Category(props) {
  const { data: products, meta, links } = props.data;
  const { categoriesProduct } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Article Category" }),
    /* @__PURE__ */ jsx("div", { className: "py-6 bg-bg sm:py-12 border-b mb-12", children: /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-2xl font-semibold tracking-tight", children: "Product" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-6", children: [
        /* @__PURE__ */ jsx(Link, { href: route("product"), className: "hover:text-blue-500 text-sm", children: "All" }),
        categoriesProduct.map((category) => /* @__PURE__ */ jsx(
          Link,
          {
            href: route("product.category", category.slug),
            className: "hover:text-blue-500 text-sm",
            children: category.name
          },
          category.slug
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: products.map((product) => /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx("div", { className: "px-6 pt-6", children: /* @__PURE__ */ jsx("div", { className: "size-8 grid place-content-center rounded-full border", children: /* @__PURE__ */ jsx(IconBookOpenTextFill, {}) }) }),
        /* @__PURE__ */ jsxs(Card.Header, { children: [
          /* @__PURE__ */ jsx(Card.Title, { children: /* @__PURE__ */ jsx(Link, { href: route("product.show", product.slug), children: product.title }) }),
          /* @__PURE__ */ jsx(Card.Description, { children: product.teaser })
        ] })
      ] }, product.slug)) }),
      /* @__PURE__ */ jsx(Pagination, { children: /* @__PURE__ */ jsxs(Pagination.List, { children: [
        /* @__PURE__ */ jsx(Pagination.Item, { variant: "first", href: links.first }),
        /* @__PURE__ */ jsx(Pagination.Item, { variant: "previous", href: links.prev }),
        /* @__PURE__ */ jsxs(Pagination.Section, { "aria-label": "Pagination Segment", className: "rounded-lg border", children: [
          /* @__PURE__ */ jsx(Pagination.Item, { variant: "label", children: meta.current_page }),
          /* @__PURE__ */ jsx(Pagination.Item, { variant: "separator" }),
          /* @__PURE__ */ jsx(Pagination.Item, { className: "text-muted-fg", variant: "label", children: meta.last_page })
        ] }),
        /* @__PURE__ */ jsx(Pagination.Item, { variant: "next", href: links.next }),
        /* @__PURE__ */ jsx(Pagination.Item, { variant: "last", href: links.last })
      ] }) })
    ] })
  ] });
}
Category.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  Category as default
};
