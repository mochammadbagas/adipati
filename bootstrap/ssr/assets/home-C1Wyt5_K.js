import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { H as Header } from "./header-CXbJGelD.js";
import { L as Logo } from "./logo-DvVOjWhF.js";
import { IconBrandJustd, IconBrandGithub, IconBrandParanoid, IconCube, IconBrandParsinta, IconBrandKarteil } from "justd-icons";
import { A as AppLayout } from "./app-layout-BITDaVXr.js";
import "react";
import "sonner";
import { C as Container, e as Link, G as Grid, a as Card } from "./tooltip-Cbn6jex2.js";
import "./flash-message-7-6omp4s.js";
import "tailwind-merge";
import "tailwind-variants";
import "clsx";
import "react-aria-components";
import "react-aria";
import "react-stately";
import "framer-motion";
const items = [
  {
    name: "Just D.",
    url: "https://getjustd.com",
    icon: IconBrandJustd,
    description: " Just D. is a chill set of React components, built on top of React Aria Components, all about keeping the web accessible."
  },
  {
    name: "Inertia.ts",
    url: "https://github.com/irsyadadl/inertia.ts",
    icon: IconBrandGithub,
    description: "This project is developed by IrsyadAdl, if you want to contribute to this project, please visit the Github Repository."
  },
  {
    name: "Icons",
    url: "https://getjustd.com/icons",
    icon: IconBrandParanoid,
    description: "A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user experience of your web applications."
  },
  {
    name: "Next.js Template",
    url: "https://irsyad.co/s",
    icon: IconCube,
    description: `Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.`
  },
  {
    name: "Parsinta",
    url: "https://parsinta.com",
    icon: IconBrandParsinta,
    description: "Improve your skills with Parsinta by pushing your skills to the next level, through the series here such as Laravel, Vue, React, Tailwind CSS and Much more."
  },
  {
    name: "Karteil",
    url: "https://karteil.com",
    icon: IconBrandKarteil,
    description: "Improve your skills with Karteil by pushing your skills to the next level, through the online books here such as Laravel, Vue, React, Tailwind CSS and Much more."
  }
];
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsx(Header, { title: "Adipati's Home" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg border lg:border-border border-transparent", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "sm:p-20", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "https://getjustd.com",
          target: "_blank",
          className: "grid place-content-center size-12 outline-1 outline-border rounded-full",
          children: /* @__PURE__ */ jsx(Logo, { className: "block size-7" })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "mt-6 text-xl sm:text-2xl", children: "Laravel application with Inertia and React Typescript!" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 text-muted-fg sm:text-lg", children: "This is a Laravel application with Inertia and React Typescript. It is a work in progress. If you have any questions or suggestions, please feel free to contact me." })
      ] }),
      /* @__PURE__ */ jsx(
        Grid,
        {
          columns: {
            initial: 1,
            sm: 2
          },
          gap: 4,
          children: /* @__PURE__ */ jsx(Grid.Collection, { items, children: (item) => /* @__PURE__ */ jsxs(Grid.Item, { className: "relative", id: item.name, children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                className: "absolute inset-0 size-full",
                target: "_blank",
                href: item.url
              }
            ),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx("div", { className: "px-6 pt-6", children: /* @__PURE__ */ jsx("div", { className: "size-8 grid place-content-center rounded-full border", children: /* @__PURE__ */ jsx(item.icon, {}) }) }),
              /* @__PURE__ */ jsxs(Card.Header, { children: [
                /* @__PURE__ */ jsx(Card.Title, { children: item.name }),
                /* @__PURE__ */ jsx(Card.Description, { children: item.description })
              ] })
            ] })
          ] }) })
        }
      )
    ] }) }) }) })
  ] });
}
Home.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  Home as default
};
