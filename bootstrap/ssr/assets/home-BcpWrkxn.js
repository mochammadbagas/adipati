import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link, router } from "@inertiajs/react";
import { IconDotsVertical } from "justd-icons";
import { A as AppLayout } from "./app-layout-C8nfIT7A.js";
import "react";
import "sonner";
import { C as Container, B as Button, a as Card, b as Table, c as Menu, P as Pagination } from "./tooltip-Cbn6jex2.js";
import "./flash-message-7-6omp4s.js";
import "tailwind-merge";
import "tailwind-variants";
import "clsx";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
function handleDelete(slug) {
  if (confirm("Are you sure you want to delete this item?")) {
    router.visit(route("article.destroy", slug), {
      method: "delete",
      // Menentukan metode DELETE
      onSuccess: () => {
        alert("Article deleted successfully!");
      },
      onError: (errors) => {
        console.error(errors);
        alert("Failed to delete the article.");
      }
    });
  }
}
function Home(props) {
  const { data: articles, meta, links } = props.articles;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Your List of Articles" }),
    /* @__PURE__ */ jsx("div", { className: "py-6 bg-bg sm:py-12 border-b mb-12", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-2xl font-semibold tracking-tight", children: "Your List of Articles" }) }) }),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx(Button, { className: "mb-12", children: /* @__PURE__ */ jsx(Link, { href: route("article.create"), children: "Add New Article" }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(Table, { "aria-label": "Products", children: [
        /* @__PURE__ */ jsxs(Table.Header, { children: [
          /* @__PURE__ */ jsx(Table.Column, { className: "w-0", children: "#" }),
          /* @__PURE__ */ jsx(Table.Column, { isRowHeader: true, children: "Name" }),
          /* @__PURE__ */ jsx(Table.Column, {})
        ] }),
        /* @__PURE__ */ jsx(Table.Body, { items: articles, children: (item) => /* @__PURE__ */ jsxs(Table.Row, { id: item.id, children: [
          /* @__PURE__ */ jsx(Table.Cell, { children: item.id }),
          /* @__PURE__ */ jsx(Table.Cell, { children: item.title }),
          /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(Menu, { children: [
            /* @__PURE__ */ jsx(Menu.Trigger, { children: /* @__PURE__ */ jsx(IconDotsVertical, {}) }),
            /* @__PURE__ */ jsxs(Menu.Content, { "aria-label": "Actions", showArrow: true, placement: "left", children: [
              /* @__PURE__ */ jsx(Menu.Item, { href: route("article.show", item.slug), children: "View" }),
              /* @__PURE__ */ jsx(Menu.Item, { href: route("article.edit", item.slug), children: "Edit" }),
              /* @__PURE__ */ jsx(Menu.Separator, {}),
              /* @__PURE__ */ jsx(Menu.Item, { isDanger: true, onAction: () => handleDelete(item.slug), children: "Delete" })
            ] })
          ] }) }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(Pagination, { className: "mt-12", children: /* @__PURE__ */ jsxs(Pagination.List, { children: [
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
Home.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  Home as default
};
