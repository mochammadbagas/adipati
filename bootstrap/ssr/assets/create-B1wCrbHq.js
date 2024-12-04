import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { usePage, useForm, Head } from "@inertiajs/react";
import { H as Header } from "./header-CXbJGelD.js";
import { A as AppLayout } from "./app-layout-BITDaVXr.js";
import { useEffect } from "react";
import { toast } from "sonner";
import { C as Container, a as Card, L as Label, I as Input, S as Select, M as MultipleSelect, T as TextArea, B as Button } from "./tooltip-Cbn6jex2.js";
import "justd-icons";
import { F as Form } from "./form-Dmi_eg0k.js";
import { T as TextField } from "./text-field-6Hwg1vI8.js";
import { useListData } from "react-stately";
import "./flash-message-7-6omp4s.js";
import "tailwind-merge";
import "tailwind-variants";
import "clsx";
import "react-aria-components";
import "react-aria";
import "framer-motion";
function Create() {
  const { categoriesArticle, articleTags } = usePage().props;
  const selectedItems = useListData({
    initialItems: []
  });
  const { data, setData, post, processing, reset, errors } = useForm({
    title: "",
    teaser: "",
    body: "",
    picture: null,
    article_tags: [],
    articleCategory_id: ""
  });
  useEffect(() => {
    setData("article_tags", selectedItems.items.map((item) => item.id));
  }, [selectedItems.items]);
  const submit = (e) => {
    e.preventDefault();
    post(route("article.store", data), {
      preserveScroll: true,
      onSuccess: () => {
        toast.success("Artikel anda sukses dibuat.");
        reset();
      },
      onError: () => {
        toast.error("Gagal");
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Article" }),
    /* @__PURE__ */ jsx(Header, { title: "Create Article" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs(Card.Header, { children: [
        /* @__PURE__ */ jsx(Card.Title, { children: "Share Your Story Today!" }),
        /* @__PURE__ */ jsx(Card.Description, { children: "Create compelling articles that inspire, inform, and engage—it's quick, simple, and impactful. Start now!" })
      ] }),
      /* @__PURE__ */ jsx(Card.Content, { className: "space-y-6", children: /* @__PURE__ */ jsxs(Form, { onSubmit: submit, validationErrors: errors, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[6px]", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "picture", children: "Thumbnail" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                className: "border border-input rounded-lg hover:bg-neutral-900 py-[6px]",
                type: "file",
                onChange: (e) => setData("picture", e.target.files ? e.target.files[0] : null)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              label: "Category",
              placeholder: "Select a category",
              errorMessage: errors.articleCategory_id,
              onSelectionChange: (v) => setData("articleCategory_id", v),
              children: [
                /* @__PURE__ */ jsx(Select.Trigger, {}),
                /* @__PURE__ */ jsx(Select.List, { items: categoriesArticle, children: (item) => /* @__PURE__ */ jsx(Select.Option, { id: item.id, textValue: item.name, value: item.id, children: item.name }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            MultipleSelect,
            {
              label: "Tag",
              selectedItems,
              items: articleTags,
              tag: (item) => /* @__PURE__ */ jsx(MultipleSelect.Tag, { textValue: item.name, children: item.name }, item.id),
              children: (item) => {
                return /* @__PURE__ */ jsx(MultipleSelect.Option, { textValue: item.name, children: item.name }, item.id);
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          TextField,
          {
            id: "title",
            label: "Title",
            value: data.title,
            type: "text",
            className: "mt-1",
            autoFocus: true,
            onChange: (v) => setData("title", v),
            errorMessage: errors.title,
            autoComplete: "title",
            isRequired: true
          }
        ),
        /* @__PURE__ */ jsx(
          TextField,
          {
            id: "teaser",
            label: "Teaser",
            value: data.teaser,
            type: "text",
            className: "mt-1",
            autoFocus: true,
            onChange: (v) => setData("teaser", v),
            errorMessage: errors.teaser,
            autoComplete: "teaser",
            isRequired: true
          }
        ),
        /* @__PURE__ */ jsx(
          TextArea,
          {
            id: "body",
            label: "Body",
            value: data.body,
            type: "text",
            className: "mt-1",
            autoFocus: true,
            onChange: (v) => setData("body", v),
            errorMessage: errors.body,
            autoComplete: "body",
            isRequired: true
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx(Button, { type: "submit", isDisabled: processing, children: "Submit" }) })
      ] }) })
    ] }) })
  ] });
}
Create.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  Create as default
};
