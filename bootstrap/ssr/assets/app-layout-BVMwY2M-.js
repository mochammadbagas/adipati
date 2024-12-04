import { jsxs, jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { u as useTheme, B as Button, N as Navbar, c as Menu, A as Avatar, h as Separator, e as Link } from "./tooltip-Cbn6jex2.js";
import { IconSun, IconMoon, IconBrandLaravel, IconSettings, IconChevronDown } from "justd-icons";
import React__default from "react";
import "sonner";
import { F as FlashMessage } from "./flash-message-7-6omp4s.js";
function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      appearance: "outline",
      size: "square-petite",
      "aria-label": "Switch to " + theme === "light" ? "dark" : "lightmode",
      onPress: () => setTheme(theme === "light" ? "dark" : "light"),
      children: [
        /* @__PURE__ */ jsx(IconSun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
        /* @__PURE__ */ jsx(IconMoon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" })
      ]
    }
  );
}
const navigations = [
  {
    name: "Home",
    textValue: "Home",
    href: "/"
  },
  {
    name: "About",
    textValue: "About",
    href: "/about"
  },
  {
    name: "Articles",
    textValue: "Articles",
    href: "/article"
  },
  {
    name: "Products",
    textValue: "Products",
    href: "/product"
  }
];
function AppNavbar({ children, ...props }) {
  const page = usePage();
  const { auth } = usePage().props;
  const [isOpen, setIsOpen] = React__default.useState(false);
  React__default.useEffect(() => setIsOpen(false), [page.url]);
  return /* @__PURE__ */ jsxs(Navbar, { isOpen, onOpenChange: setIsOpen, ...props, children: [
    /* @__PURE__ */ jsxs(Navbar.Nav, { children: [
      /* @__PURE__ */ jsx(Navbar.Logo, { "aria-label": "Logo", children: /* @__PURE__ */ jsx(IconBrandLaravel, { className: "size-6" }) }),
      /* @__PURE__ */ jsx(Navbar.Section, { children: navigations.map((item) => /* @__PURE__ */ jsx(Navbar.Item, { isCurrent: item.href === page.url, href: item.href, children: item.name }, item.href)) }),
      /* @__PURE__ */ jsxs(Navbar.Section, { className: "hidden ml-auto gap-x-1 lg:flex", children: [
        !auth.user && /* @__PURE__ */ jsx(ThemeSwitcher, {}),
        auth.user ? /* @__PURE__ */ jsx(UserMenu, {}) : /* @__PURE__ */ jsx(LoginMenu, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Navbar.Compact, { children: [
      /* @__PURE__ */ jsxs(Navbar.Flex, { children: [
        /* @__PURE__ */ jsx(Navbar.Trigger, {}),
        /* @__PURE__ */ jsx(Separator, { className: "h-6", orientation: "vertical" }),
        /* @__PURE__ */ jsx(Navbar.Logo, { "aria-label": "Logo", children: /* @__PURE__ */ jsx(IconBrandLaravel, {}) })
      ] }),
      /* @__PURE__ */ jsxs(Navbar.Flex, { className: "gap-x-1", children: [
        !auth.user && /* @__PURE__ */ jsx(ThemeSwitcher, {}),
        auth.user ? /* @__PURE__ */ jsx(UserMenu, {}) : /* @__PURE__ */ jsx(LoginMenu, {})
      ] })
    ] }),
    children
  ] });
}
function UserMenu() {
  const { auth } = usePage().props;
  const { theme, setTheme } = useTheme();
  const currentTheme = theme || "system";
  const [selectedTheme, setSelectedTheme] = React__default.useState(/* @__PURE__ */ new Set([currentTheme]));
  return /* @__PURE__ */ jsxs(Menu, { children: [
    /* @__PURE__ */ jsx(Menu.Trigger, { "aria-label": "Open menu", children: /* @__PURE__ */ jsx(Avatar, { status: "online", size: "medium", src: auth.user.gravatar, className: "size-8" }) }),
    /* @__PURE__ */ jsxs(Menu.Content, { showArrow: true, placement: "bottom end", className: "sm:min-w-56", children: [
      /* @__PURE__ */ jsx(Menu.Section, { children: /* @__PURE__ */ jsxs(Menu.Header, { separator: true, className: "relative", children: [
        /* @__PURE__ */ jsx("div", { children: auth.user.name }),
        /* @__PURE__ */ jsx("div", { className: "text-muted-fg font-normal text-sm whitespace-nowrap truncate pr-6", children: auth.user.email })
      ] }) }),
      /* @__PURE__ */ jsx(Menu.Item, { href: route("dashboard"), children: "Dashboard" }),
      /* @__PURE__ */ jsxs(Menu.Item, { href: route("profile.edit"), className: "justify-between", children: [
        "Settings",
        /* @__PURE__ */ jsx(IconSettings, {})
      ] }),
      /* @__PURE__ */ jsxs(Menu.Submenu, { children: [
        /* @__PURE__ */ jsx(Menu.Item, { children: "Preferences" }),
        /* @__PURE__ */ jsx(
          Menu.Content,
          {
            selectionMode: "single",
            selectedKeys: selectedTheme,
            onSelectionChange: (keys) => {
              setSelectedTheme(keys);
              setTheme(keys.has("system") ? "system" : keys.has("dark") ? "dark" : "light");
            },
            items: [
              { name: "Light", value: "light" },
              { name: "Dark", value: "dark" },
              { name: "System", value: "system" }
            ],
            children: (item) => /* @__PURE__ */ jsx(Menu.Checkbox, { id: item.value, textValue: item.name, children: item.name })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Menu.Separator, {}),
      /* @__PURE__ */ jsxs(Menu.Submenu, { children: [
        /* @__PURE__ */ jsx(Menu.Item, { children: "Article" }),
        /* @__PURE__ */ jsxs(Menu.Content, { children: [
          /* @__PURE__ */ jsx(Menu.Item, { href: route("article.table"), children: "List" }),
          /* @__PURE__ */ jsx(Menu.Item, { href: route("article.create"), children: "Add Article" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Menu.Submenu, { children: [
        /* @__PURE__ */ jsx(Menu.Item, { children: "Product" }),
        /* @__PURE__ */ jsxs(Menu.Content, { children: [
          /* @__PURE__ */ jsx(Menu.Item, { href: route("product.table"), children: "List" }),
          /* @__PURE__ */ jsx(Menu.Item, { href: route("product.create"), children: "Add Product" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Menu.Separator, {}),
      /* @__PURE__ */ jsx(Menu.Item, { routerOptions: { method: "post" }, href: route("logout"), children: /* @__PURE__ */ jsx("span", { children: "Logout" }) })
    ] })
  ] });
}
function LoginMenu() {
  return /* @__PURE__ */ jsxs(Menu, { children: [
    /* @__PURE__ */ jsxs(Button, { size: "small", appearance: "outline", children: [
      "Login",
      /* @__PURE__ */ jsx(IconChevronDown, { className: "ml-2" })
    ] }),
    /* @__PURE__ */ jsxs(Menu.Content, { showArrow: true, placement: "bottom end", className: "sm:min-w-40", children: [
      /* @__PURE__ */ jsx(Menu.Item, { href: route("login"), children: "Login" }),
      /* @__PURE__ */ jsx(Menu.Item, { href: route("register"), children: "Register" })
    ] })
  ] });
}
const navigation = {
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/__bagas_/",
      icon: (props) => /* @__PURE__ */ jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
          clipRule: "evenodd"
        }
      ) })
    },
    {
      name: "GitHub",
      href: "https://github.com/mochammadbagas",
      icon: (props) => /* @__PURE__ */ jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
          clipRule: "evenodd"
        }
      ) })
    }
  ]
};
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { "aria-labelledby": "footer-heading", children: [
    /* @__PURE__ */ jsx("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32", children: /* @__PURE__ */ jsxs("div", { className: "mt-16 border-t border-slate-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24", children: [
      /* @__PURE__ */ jsx("div", { className: "flex space-x-6 md:order-2", children: navigation.social.map((item) => /* @__PURE__ */ jsxs(
        Link,
        {
          href: item.href,
          className: "text-muted-fg hover:text-fg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[1.5]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: item.name }),
            /* @__PURE__ */ jsx(item.icon, { "aria-hidden": "true" })
          ]
        },
        item.name
      )) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-8 text-xs leading-5 text-muted-fg md:order-1 md:mt-0", children: [
        "© 2024 Inertia.ts by",
        " ",
        /* @__PURE__ */ jsx(Link, { target: "_blank", href: "https://x.com/EastIndiesRoyal", className: "font-semibold text-fg", children: "Adipati" }),
        ", All rights reserved."
      ] })
    ] }) })
  ] });
}
function AppLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(FlashMessage, {}),
    /* @__PURE__ */ jsx(AppNavbar, { children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AppLayout as A
};
