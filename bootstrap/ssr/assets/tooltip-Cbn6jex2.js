import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { useState } from "react";
import { tv } from "tailwind-variants";
import { clsx } from "clsx";
import { twMerge, twJoin } from "tailwind-merge";
import { composeRenderProps, Button as Button$1, Label as Label$1, Group, Input as Input$1, Text, FieldError as FieldError$1, Checkbox as Checkbox$2, Dialog as Dialog$1, Heading as Heading$1, OverlayTriggerStateContext, Section as Section$2, Header as Header$4, Collection, ListBoxItem as ListBoxItem$1, Link as Link$1, ListBox as ListBox$1, Keyboard as Keyboard$1, DialogTrigger, Popover as Popover$1, useSlottedContext, PopoverContext, ModalOverlay, Modal as Modal$1, OverlayArrow, MenuTrigger, Menu as Menu$1, MenuItem, Separator as Separator$1, SubmenuTrigger, TagGroup as TagGroup$1, TagList as TagList$1, Tag as Tag$1, ComboBox, Select as Select$1, SelectValue, ResizableTableContainer, Table as Table$1, TableBody, Cell, Column, ColumnResizer as ColumnResizer$1, useTableOptions, TableHeader, Row, ProgressBar, TextField, TextArea as TextArea$1 } from "react-aria-components";
import { IconMinus, IconCheck, IconX, IconHamburger, IconChevronLgRight, IconBulletFill, IconChevronLgDown, IconChevronsLgRight, IconChevronsLgLeft, IconChevronLgLeft, IconDotsHorizontal, IconLoader } from "justd-icons";
import { useVisuallyHidden, useFilter } from "react-aria";
import { useListData } from "react-stately";
import { motion, LayoutGroup } from "framer-motion";
const VisuallyHidden = ({ children }) => {
  const { visuallyHiddenProps } = useVisuallyHidden();
  return /* @__PURE__ */ jsx("span", { ...visuallyHiddenProps, children });
};
tv({
  base: "flex items-center justify-center -space-x-2 [&_[data-slot=avatar]]:ring-2 [&_[data-slot=avatar]]:ring-bg"
});
const avatarStyles = tv({
  base: [
    "grid relative place-content-center shrink-0 bg-secondary align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1",
    "loo2ppvkxrcah38e outline outline-1 -outline-offset-1 outline-fg/[--ring-opacity]"
  ],
  variants: {
    size: {
      "extra-small": "size-5",
      small: "size-6",
      medium: "size-8",
      large: "size-10"
    },
    shape: {
      square: "rounded-[--avatar-radius] *:rounded-[--avatar-radius] [&_[data-slot=badge]]:rounded-full",
      circle: "rounded-full *:rounded-full"
    }
  },
  defaultVariants: {
    shape: "circle",
    size: "medium"
  }
});
const Avatar = ({
  status,
  src = null,
  initials,
  alt = "",
  children,
  className,
  shape,
  size,
  ...props
}) => {
  const badgeId = React__default.useId();
  const ariaLabelledby = [badgeId, children ? badgeId : ""].join(" ");
  return /* @__PURE__ */ jsxs(
    "span",
    {
      "aria-labelledby": ariaLabelledby,
      "data-slot": "avatar",
      ...props,
      className: avatarStyles({ shape, size, className }),
      children: [
        initials && /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "select-none fill-current text-[48px] font-medium uppercase",
            viewBox: "0 0 100 100",
            "aria-hidden": alt ? void 0 : "true",
            children: [
              alt && /* @__PURE__ */ jsx("title", { children: alt }),
              /* @__PURE__ */ jsx(
                "text",
                {
                  x: "50%",
                  y: "50%",
                  alignmentBaseline: "middle",
                  dominantBaseline: "middle",
                  textAnchor: "middle",
                  dy: ".125em",
                  children: initials
                }
              )
            ]
          }
        ),
        src && /* @__PURE__ */ jsx("img", { src, alt }),
        status && /* @__PURE__ */ jsx(AvatarBadge, { size, status, "aria-label": status })
      ]
    }
  );
};
const avatarBadgeStyles = tv({
  base: ["size-3 z-10 absolute bottom-0 right-0 rounded-full ring-[1.5px] ring-bg bg-bg"],
  variants: {
    size: {
      "extra-small": "size-[0.360rem] translate-x-[0%] translate-y-[0%]",
      small: "size-1.5 translate-x-[0%] translate-y-[0%]",
      medium: "size-2 translate-x-[5%] translate-y-[5%]",
      large: "size-2.5 translate-x-[5%] translate-y-[5%]"
    },
    status: {
      away: "bg-danger",
      online: "bg-success",
      offline: "bg-muted-fg",
      dnd: "bg-warning",
      idle: "bg-muted-fg"
    }
  },
  defaultVariants: {
    size: "medium",
    status: "idle"
  }
});
const AvatarBadge = ({ size, className, status, ...props }) => {
  return /* @__PURE__ */ jsx("span", { "data-slot": "badge", ...props, "aria-hidden": true, className: avatarBadgeStyles({ size, status, className }), children: /* @__PURE__ */ jsx(VisuallyHidden, { children: status }) });
};
const badgeIntents = {
  primary: "bg-primary/10 dark:bg-primary/15 text-primary dark:text-primary group-hover:bg-primary/15 dark:group-hover:bg-primary/20",
  secondary: "bg-secondary group-hover:bg-muted dark:bg-secondary dark:group-hover:bg-muted text-secondary-fg",
  success: "bg-emerald-500/15 text-emerald-700 group-hover:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20",
  info: "bg-info/15 dark:bg-info/15 text-info group-hover:bg-info/20 dark:group-hover:bg-info/20",
  warning: "bg-warning/10 dark:bg-warning/15 text-warning-fg dark:text-warning group-hover:bg-warning/15 dark:group-hover:bg-warning/20",
  danger: "bg-danger/10 dark:bg-danger/15 text-danger group-hover:bg-danger/15 dark:group-hover:bg-danger/20"
};
const badgeShapes = {
  square: "rounded-md px-1.5",
  circle: "px-2 rounded-full"
};
const badgeStyles = tv({
  base: "inline-flex items-center gap-x-1.5 py-0.5 text-xs/5 font-medium forced-colors:outline [&_[data-slot=icon]]:size-3",
  variants: {
    intent: { ...badgeIntents },
    shape: { ...badgeShapes }
  },
  defaultVariants: {
    intent: "primary",
    shape: "square"
  }
});
const cn$1 = (...inputs) => twMerge(clsx(inputs));
function composeTailwindRenderProps(className, tw) {
  return composeRenderProps(className, (className2) => twMerge(tw, className2));
}
const focusRing = tv({
  base: "outline-none focus:outline-none forced-colors:outline-1 forced-colors:outline-[Highlight]",
  variants: {
    isFocused: { true: "ring-4 ring-ring/20" },
    isInvalid: { true: "ring-4 ring-danger/20" }
  }
});
const focusStyles = tv({
  extend: focusRing,
  variants: {
    isFocused: { true: "border-ring/85" },
    isInvalid: { true: "border-danger" }
  }
});
const focusButtonStyles = tv({
  base: "outline outline-ring forced-colors:outline-[Highlight] outline-offset-2",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2"
    }
  }
});
const useMediaQuery = (query) => {
  const [value, setValue] = React.useState(false);
  React.useEffect(() => {
    const onChange = (event) => {
      setValue(event.matches);
    };
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => result.removeEventListener("change", onChange);
  }, [query]);
  return value;
};
const buttonStyles = tv(
  {
    extend: focusButtonStyles,
    base: [
      "kbt32x before:absolute after:absolute box-border relative no-underline isolate inline-flex items-center justify-center gap-x-2 border font-medium",
      "forced-colors:[--button-icon:ButtonText] forced-colors:hover:[--button-icon:ButtonText]",
      "[&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-1 [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--button-icon]"
    ],
    variants: {
      intent: {
        primary: [
          "text-primary-fg [--button-bg:theme(colors.primary.DEFAULT)] [--button-border:theme(colors.primary.DEFAULT)] [--button-hover-overlay:theme(colors.white/10%)]",
          "[--button-icon:theme(colors.primary.fg/60%)] active:[--button-icon:theme(colors.primary.fg/80%)] hover:[--button-icon:theme(colors.primary.fg/80%)]"
        ],
        secondary: [
          "text-secondary-fg [--button-bg:theme(colors.secondary.DEFAULT)] dark:[--button-bg:theme(colors.secondary.DEFAULT)] [--button-border:theme(colors.secondary.fg/10%)] [--button-hover-overlay:theme(colors.secondary.fg/2.5%)] data-[active]:[--button-border:theme(colors.secondary.fg/15%)] hover:[--button-border:theme(colors.secondary.fg/15%)]",
          "[--button-icon:theme(colors.muted.fg)] active:[--button-icon:theme(colors.fg)] hover:[--button-icon:theme(colors.fg)]"
        ],
        warning: [
          "text-warning-fg [--button-bg:theme(colors.warning.DEFAULT)] [--button-border:theme(colors.warning.DEFAULT)] [--button-hover-overlay:theme(colors.white/10%)]",
          "[--button-icon:theme(colors.warning.fg/60%)] active:[--button-icon:theme(colors.warning.fg/80%)] hover:[--button-icon:theme(colors.warning.fg/80%)]"
        ],
        danger: [
          "text-white [--button-bg:theme(colors.danger.DEFAULT)] [--button-border:theme(colors.danger.DEFAULT)] [--button-hover-overlay:theme(colors.white/10%)]",
          "[--button-icon:theme(colors.white/60%)] active:[--button-icon:theme(colors.white/80%)] hover:[--button-icon:theme(colors.white/80%)]"
        ]
      },
      appearance: {
        solid: [
          "border-transparent bg-[--button-border]",
          "before:inset-0 before:-z-10 before:bg-[--button-bg] before:shadow before:data-[disabled]:shadow-none",
          "after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:active:bg-[--button-hover-overlay] after:hover:bg-[--button-hover-overlay] after:data-[disabled]:shadow-none after:inset-0 after:-z-10",
          "dark:after:-inset-px dark:before:hidden dark:border-white/5 dark:bg-[--button-bg]"
        ],
        outline: [
          "border-border text-fg [--button-icon:theme(colors.muted.fg)]",
          "hover:[--button-icon:theme(colors.fg)] hover:bg-secondary/90",
          "active:bg-secondary/90 active:[--button-icon:theme(colors.fg)]"
        ],
        plain: [
          "border-transparent text-fg [--button-icon:theme(colors.muted.fg)]",
          "pressed:bg-secondary/90",
          "active:[--button-icon:theme(colors.fg)] active:bg-secondary/90",
          "hover:[--button-icon:theme(colors.fg)] hover:bg-secondary/90"
        ]
      },
      size: {
        "extra-small": "h-8 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.1)-1px)] text-xs/4 lg:text-[0.800rem]/4",
        small: "h-9 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-sm/5 lg:text-sm/5",
        medium: "h-10 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing.2)-1px)] text-base lg:text-sm/6",
        large: "h-10 [&>[data-slot=icon]]:mx-[-3px] sm:h-11 px-[calc(theme(spacing.4)-1px)] sm:px-[calc(theme(spacing.5)-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base lg:text-base/7 sm:[&>[data-slot=icon]]:size-5",
        "square-petite": "size-9 shrink-0 [&_[data-slot=icon]]:text-current"
      },
      shape: {
        square: "rounded-lg before:rounded-[calc(theme(borderRadius.lg)-1px)] after:rounded-[calc(theme(borderRadius.lg)-1px)] dark:after:rounded-lg",
        circle: "rounded-[9999px] before:rounded-[9998px] after:rounded-[9998px] dark:after:rounded-[9999px]"
      },
      isDisabled: {
        false: "forced-colors:disabled:text-[GrayText]",
        true: "cursor-default opacity-60 forced-colors:disabled:text-[GrayText]"
      },
      isPending: {
        true: "cursor-default"
      }
    },
    defaultVariants: {
      intent: "primary",
      appearance: "solid",
      size: "medium",
      shape: "square"
    }
  },
  {
    responsiveVariants: ["sm", "lg"]
  }
);
const Button = React.forwardRef(
  ({ className, intent, appearance, size, shape, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      Button$1,
      {
        ref,
        ...props,
        className: composeRenderProps(
          className,
          (className2, renderProps) => buttonStyles({
            ...renderProps,
            intent,
            appearance,
            size,
            shape,
            className: className2
          })
        ),
        children: (values) => /* @__PURE__ */ jsx(Fragment, { children: typeof props.children === "function" ? props.children(values) : props.children })
      }
    );
  }
);
Button.displayName = "Button";
const cn = (...inputs) => twMerge(clsx(inputs));
const headingStyles = tv({
  base: "font-sans tracking-tight text-fg",
  variants: {
    level: {
      1: "font-bold text-xl sm:text-2xl",
      2: "font-semibold text-lg sm:text-xl",
      3: "font-semibold text-base sm:text-lg",
      4: "font-semibold text-base"
    },
    tracking: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest"
    }
  }
});
const Heading = ({ className, tracking = "normal", level = 1, ...props }) => {
  const Element = `h${level}`;
  return /* @__PURE__ */ jsx(
    Element,
    {
      className: headingStyles({
        level,
        tracking,
        className
      }),
      ...props
    }
  );
};
const card = tv({
  slots: {
    root: [
      "xrkr bg-bg rounded-xl xkd2 [&:has(table)_.ccvgs8x]:border-t [&:has(table)_.x32]:bg-tertiary [&:has(table)]:overflow-hidden border text-fg shadow-sm [&:has(.larhy3):not(:has(.yahnba))>.ccvgs8x]:pt-6 [&:has(.larhy3)]:overflow-hidden [&_table]:overflow-hidden"
    ],
    header: "flex xlw32 flex-col space-y-1.5 px-6 py-5",
    title: "sm:leading-6 leading-none klda font-semibold tracking-tight",
    description: "text-base dl2 text-muted-fg sm:text-sm",
    content: "yahnba px-6 pb-6 has-[.t-hea]:bg-secondary/40 has-[table]:p-0 [&:has(table)+.ccvgs8x]:py-5 [&:has(table)]:border-t [&_.t-cel]:px-6 [&_.t-col]:px-6",
    footer: "ccvgs8x flex items-center p-6 pt-0"
  }
});
const { root: root$2, header: header$3, title, description: description$2, content, footer: footer$1 } = card();
const Card = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx("div", { className: root$2({ className }), ...props });
};
const Header$3 = ({ withoutPadding = false, className, title: title2, description: description2, children, ...props }) => /* @__PURE__ */ jsxs("div", { className: header$3({ className: cn(className, withoutPadding && "px-0 pt-0") }), ...props, children: [
  title2 && /* @__PURE__ */ jsx(Title$2, { children: title2 }),
  description2 && /* @__PURE__ */ jsx(Description$2, { children: description2 }),
  !title2 && typeof children === "string" ? /* @__PURE__ */ jsx(Title$2, { children }) : children
] });
const Title$2 = ({ className, level = 3, ...props }) => {
  return /* @__PURE__ */ jsx(Heading, { level, className: title({ className }), ...props });
};
const Description$2 = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx("div", { ...props, slot: "description", className: description$2({ className }), ...props });
};
const Content$2 = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx("div", { className: content({ className }), ...props });
};
const Footer$2 = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx("div", { className: footer$1({ className }), ...props });
};
Card.Content = Content$2;
Card.Description = Description$2;
Card.Footer = Footer$2;
Card.Header = Header$3;
Card.Title = Title$2;
tv({
  base: "group-focus-within:border-ring/85 forced-colors:border-[Highlight]",
  variants: {
    isInvalid: {
      true: "border-danger/70 group-focus-within:border-danger/70 forced-colors:border-[Mark]"
    }
  }
});
const fieldGroupPrefixStyles = tv({
  base: [
    "flex group-invalid:border-danger group-disabled:bg-secondary group-disabled:opacity-50 items-center group-invalid:focus-within:ring-danger/20",
    "has-[[data-slot=prefix]]:-mx-0.5 has-[[data-slot=suffix]]:-mx-0.5",
    "[&_button]:h-8 [&_button]:rounded-md [&_button]:px-2.5 [&_button]:before:rounded-[calc(theme(borderRadius.md)-1px)] [&_button]:after:rounded-[calc(theme(borderRadius.md)-1px)] dark:[&_button]:after:rounded-md",
    "[&>[role=progressbar]]:mr-2.5 [&>[data-slot=prefix]]:ml-2.5 [&>[data-slot=prefix]]:text-muted-fg [&>[data-slot=prefix]>button]:ml-[-7px]",
    "[&>[data-slot=suffix]]:mr-2.5 [&>[data-slot=suffix]]:text-muted-fg [&>[data-slot=suffix]>button]:mr-[-7px]"
  ]
});
const fieldStyles = tv({
  slots: {
    description: "text-pretty text-base/6 text-muted-fg sm:text-sm/6",
    label: "w-fit cursor-default font-medium text-secondary-fg text-sm",
    fieldError: "text-sm/6 text-danger forced-colors:text-[Mark]",
    input: [
      "w-full min-w-0 [&::-ms-reveal]:hidden bg-transparent py-2 px-2.5 text-base text-fg placeholder-muted-fg outline-none focus:outline-none lg:text-sm"
    ]
  }
});
const { description: description$1, label, fieldError, input: input$1 } = fieldStyles();
const Label = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(Label$1, { ...props, className: label({ className }) });
};
const Description$1 = ({ className, ...props }) => {
  const isWarning = props.isWarning ?? false;
  return /* @__PURE__ */ jsx(
    Text,
    {
      ...props,
      slot: "description",
      className: description$1({ className: isWarning ? "text-warning" : className })
    }
  );
};
const FieldError = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(FieldError$1, { ...props, className: composeTailwindRenderProps(className, fieldError()) });
};
const fieldGroupStyles = tv({
  base: [
    "group [&>[data-slot=icon]]:shrink-0 flex h-10 items-center overflow-hidden rounded-lg border border-input bg-bg transition forced-colors:bg-[Field]"
  ],
  variants: {
    isDisabled: {
      true: "opacity-50 bg-secondary"
    },
    isInvalid: {
      false: "focus-within:border-ring/85 focus-within:ring-4 focus-within:ring-ring/20",
      true: "border-danger focus-within:border-danger focus-within:ring-4 focus-within:ring-danger/20"
    }
  }
});
const FieldGroup = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(
    Group,
    {
      ...props,
      className: composeRenderProps(className, (className2, renderProps) => fieldGroupStyles({ ...renderProps, className: className2 }))
    }
  );
};
const Input = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(Input$1, { ref, ...props, className: composeTailwindRenderProps(className, input$1()) });
});
Input.displayName = "Input";
const checkboxStyles = tv({
  base: "racc group flex items-center gap-2 text-sm transition",
  variants: {
    isDisabled: {
      false: "opacity-100",
      true: "opacity-50"
    }
  }
});
const boxStyles = tv({
  base: "flex size-4 [&>[data-slot=icon]]:size-3 flex-shrink-0 items-center justify-center rounded border text-bg transition",
  variants: {
    isSelected: {
      false: "border-toggle bg-secondary",
      true: [
        "border-primary/70 bg-primary text-primary-fg",
        "group-invalid:border-danger/70 group-invalid:bg-danger group-invalid:text-danger-fg"
      ]
    },
    isFocused: {
      true: [
        "border-primary/70 ring-4 ring-primary/20",
        "group-invalid:border-danger/70 group-invalid:text-danger-fg group-invalid:ring-danger/20"
      ]
    },
    isInvalid: {
      true: "border-danger/70 bg-danger/20 text-danger-fg ring-danger/20"
    }
  }
});
const Checkbox$1 = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(
    Checkbox$2,
    {
      ...props,
      className: composeRenderProps(className, (className2, renderProps) => checkboxStyles({ ...renderProps, className: className2 })),
      children: ({ isSelected, isIndeterminate, ...renderProps }) => /* @__PURE__ */ jsxs("div", { className: cn$1("flex gap-x-2", props.description ? "items-start" : "items-center"), children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: boxStyles({
              ...renderProps,
              isSelected: isSelected || isIndeterminate,
              className: props.description ? "mt-1" : "mt-px"
            }),
            children: isIndeterminate ? /* @__PURE__ */ jsx(IconMinus, {}) : isSelected ? /* @__PURE__ */ jsx(IconCheck, {}) : null
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ jsxs(Fragment, { children: [
          props.label ? /* @__PURE__ */ jsx(Label, { children: props.label }) : props.children,
          props.description && /* @__PURE__ */ jsx(Description$1, { children: props.description })
        ] }) })
      ] })
    }
  );
};
const containerStyles = tv({
  base: "mx-auto w-full max-w-7xl lg:max-w-screen-xl 2xl:max-w-screen-2xl",
  variants: {
    intent: {
      constrained: "sm:px-6 lg:px-8",
      "padded-content": "px-4 sm:px-6 lg:px-8"
    }
  },
  defaultVariants: {
    intent: "padded-content"
  }
});
const Container = React__default.forwardRef(({ className, intent, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: containerStyles({ intent, className }), ...props, ref }));
Container.displayName = "Container";
const dialogStyles = tv({
  slots: {
    root: [
      "dlc relative flex max-h-[inherit] [&::-webkit-scrollbar]:size-0.5 [scrollbar-width:thin] flex-col overflow-hidden outline-none",
      "sm:[&:not(:has([data-slot=dialog-body]))]:px-6 sm:[&:has([data-slot=dialog-body])_[data-slot=dialog-header]]:px-6 sm:[&:has([data-slot=dialog-body])_[data-slot=dialog-footer]]:px-6",
      "[&:not(:has([data-slot=dialog-body]))]:px-4 [&:has([data-slot=dialog-body])_[data-slot=dialog-header]]:px-4 [&:has([data-slot=dialog-body])_[data-slot=dialog-footer]]:px-4"
    ],
    header: "relative flex flex-col pb-3 pt-4 sm:pt-6",
    description: "text-sm block text-muted-fg mt-0.5 sm:mt-1",
    body: [
      "flex flex-1 flex-col gap-2 overflow-auto px-4 sm:px-6 py-1",
      "max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))]"
    ],
    footer: "mt-auto flex flex-col-reverse justify-between gap-3 pb-4 sm:pb-6 pt-4 sm:flex-row",
    closeIndicator: "close absolute right-1 top-1 sm:right-2 sm:top-2 focus:outline-none focus:bg-secondary hover:bg-secondary grid place-content-center rounded-xl sm:rounded-md focus-visible:ring-1 focus-visible:ring-primary size-8 sm:size-7 z-50"
  }
});
const { root: root$1, header: header$2, description, body, footer, closeIndicator } = dialogStyles();
const Dialog = ({ role, className, ...props }) => {
  return /* @__PURE__ */ jsx(Dialog$1, { ...props, role: role ?? "dialog", className: root$1({ className }) });
};
const Trigger$3 = (props) => /* @__PURE__ */ jsx(Button$1, { ...props, children: (values) => /* @__PURE__ */ jsx(Fragment, { children: typeof props.children === "function" ? props.children(values) : props.children }) });
const Header$2 = ({ className, ...props }) => {
  const headerRef = React.useRef(null);
  React.useEffect(() => {
    const header2 = headerRef.current;
    if (!header2) {
      return;
    }
    const observer = new ResizeObserver((entries) => {
      var _a;
      for (const entry of entries) {
        (_a = header2.parentElement) == null ? void 0 : _a.style.setProperty("--dialog-header-height", `${entry.target.clientHeight}px`);
      }
    });
    observer.observe(header2);
    return () => observer.unobserve(header2);
  }, []);
  return /* @__PURE__ */ jsxs("div", { "data-slot": "dialog-header", ref: headerRef, className: header$2({ className }), children: [
    props.title && /* @__PURE__ */ jsx(Title$1, { children: props.title }),
    props.description && /* @__PURE__ */ jsx(Description, { children: props.description }),
    !props.title && typeof props.children === "string" ? /* @__PURE__ */ jsx(Title$1, { ...props }) : props.children
  ] });
};
const titleStyles = tv({
  base: "flex flex-1 items-center text-fg",
  variants: {
    level: {
      1: "font-semibold text-lg sm:text-xl",
      2: "font-semibold text-lg sm:text-xl",
      3: "font-semibold text-base sm:text-lg",
      4: "font-semibold text-base"
    }
  }
});
const Title$1 = ({ level = 2, className, ...props }) => /* @__PURE__ */ jsx(Heading$1, { slot: "title", level, className: titleStyles({ level, className }), ...props });
const Description = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: description({ className }), ...props });
const Body$2 = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { "data-slot": "dialog-body", className: body({ className }), ...props });
const Footer$1 = ({ className, ...props }) => {
  const footerRef = React.useRef(null);
  React.useEffect(() => {
    const footer2 = footerRef.current;
    if (!footer2) {
      return;
    }
    const observer = new ResizeObserver((entries) => {
      var _a;
      for (const entry of entries) {
        (_a = footer2.parentElement) == null ? void 0 : _a.style.setProperty("--dialog-footer-height", `${entry.target.clientHeight}px`);
      }
    });
    observer.observe(footer2);
    return () => {
      observer.unobserve(footer2);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: footerRef, "data-slot": "dialog-footer", className: footer({ className }), ...props });
};
const Close = ({ className, appearance = "outline", ...props }) => {
  const state = React.useContext(OverlayTriggerStateContext);
  return /* @__PURE__ */ jsx(Button, { className, appearance, onPress: () => state.close(), ...props });
};
const CloseIndicator = ({ className, ...props }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const buttonRef = React.useRef(null);
  React.useEffect(() => {
    if (isMobile && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isMobile]);
  return props.isDismissable ? /* @__PURE__ */ jsx(
    Button$1,
    {
      ref: buttonRef,
      ...isMobile ? { autoFocus: true } : {},
      "aria-label": "Close",
      onPress: props.close,
      className: closeIndicator({ className }),
      children: /* @__PURE__ */ jsx(IconX, { className: "size-4" })
    }
  ) : null;
};
Dialog.Trigger = Trigger$3;
Dialog.Header = Header$2;
Dialog.Title = Title$1;
Dialog.Description = Description;
Dialog.Body = Body$2;
Dialog.Footer = Footer$1;
Dialog.Close = Close;
Dialog.CloseIndicator = CloseIndicator;
const dropdownItemStyles = tv({
  base: [
    "group text-fg forced-colors:text-[LinkText] flex cursor-default forced-color-adjust-none select-none items-center gap-x-1.5 rounded-[calc(var(--radius)-1px)] py-2 px-2.5 relative text-base outline outline-0 forced-color:text-[Highlight] lg:text-sm",
    "has-submenu:open:data-[danger=true]:bg-danger/20 has-submenu:open:data-[danger=true]:text-danger",
    "has-submenu:open:bg-accent has-submenu:open:text-accent-fg [&[data-has-submenu][data-open]_[data-slot=icon]]:text-accent-fg [&[data-has-submenu][data-open]_.text-muted-fg]:text-accent-fg",
    "[&_[data-slot=avatar]]:-mr-0.5 [&_[data-slot=avatar]]:size-6 sm:[&_[data-slot=avatar]]:size-5",
    "[&_[data-slot=icon]]:size-4 [&_[data-slot=icon]]:shrink-0 [&_[data-slot=icon]]:text-muted-fg [&[data-hovered]_[data-slot=icon]]:text-accent-fg [&[data-focused]_[data-slot=icon]]:text-accent-fg [&[data-danger]_[data-slot=icon]]:text-danger/60 [&[data-focused][data-danger]_[data-slot=icon]]:text-danger-fg",
    "[&_[data-slot=menu-radio]>[data-slot=icon]]:size-3",
    "forced-colors:[&_[data-slot=icon]]:text-[CanvasText] forced-colors:[&_[data-slot=icon]]:group-data-[focus]:text-[Canvas] "
  ],
  variants: {
    isDisabled: {
      true: "text-muted-fg forced-colors:text-[GrayText]"
    },
    isFocused: {
      false: "data-[danger=true]:text-danger",
      true: [
        "bg-accent text-accent-fg forced-colors:text-[HighlightText] forced-colors:bg-[Highlight]",
        "data-[danger=true]:bg-danger data-[danger=true]:text-danger-fg",
        "[&_.text-muted-fg]:text-accent-fg/80 [&[data-slot=label]]:text-accent-fg [&[data-slot=description]]:text-accent-fg"
      ]
    }
  },
  compoundVariants: [
    {
      isFocused: false,
      isOpen: true,
      className: "bg-secondary"
    }
  ]
});
const dropdownSectionStyles = tv({
  slots: {
    section: "first:-mt-[5px] xss3 flex flex-col gap-y-0.5 after:content-[''] after:block after:h-[5px]",
    header: "text-sm font-medium text-muted-fg bg-tertiary px-4 py-2 truncate min-w-[--trigger-width] sticky -top-[5px] backdrop-blur -mt-px -mb-0.5 -mx-1 z-10 supports-[-moz-appearance:none]:bg-tertiary border-y [&+*]:mt-1"
  }
});
const { section: section$1, header: header$1 } = dropdownSectionStyles();
const DropdownSection = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxs(Section$2, { className: section$1({ className }), children: [
    "title" in props && /* @__PURE__ */ jsx(Header$4, { className: header$1(), children: props.title }),
    /* @__PURE__ */ jsx(Collection, { items: props.items, children: props.children })
  ] });
};
const DropdownItem = ({ className, ...props }) => {
  const textValue = props.textValue || (typeof props.children === "string" ? props.children : void 0);
  return /* @__PURE__ */ jsx(
    ListBoxItem$1,
    {
      textValue,
      className: composeRenderProps(className, (className2, renderProps) => dropdownItemStyles({ ...renderProps, className: className2 })),
      ...props,
      children: composeRenderProps(props.children, (children, { isSelected }) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "flex flex-1 items-center gap-2 truncate font-normal group-selected:font-medium", children }),
        isSelected && /* @__PURE__ */ jsx("span", { className: "absolute right-2 top-3 lg:top-2.5", children: /* @__PURE__ */ jsx(IconCheck, {}) })
      ] }))
    }
  );
};
const DropdownItemDetails = ({ label: label2, description: description2, classNames, ...props }) => {
  const { slot, children, title: title2, ...restProps } = props;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1", ...restProps, children: [
    label2 && /* @__PURE__ */ jsx(Text, { slot: slot ?? "label", className: cn$1("font-medium lg:text-sm", classNames == null ? void 0 : classNames.label), ...restProps, children: label2 }),
    description2 && /* @__PURE__ */ jsx(
      Text,
      {
        slot: slot ?? "description",
        className: cn$1("text-muted-fg text-xs", classNames == null ? void 0 : classNames.description),
        ...restProps,
        children: description2
      }
    ),
    !title2 && children
  ] });
};
const gridStyles = tv(
  {
    base: "grid",
    variants: {
      // Columns
      columns: {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        7: "grid-cols-7",
        8: "grid-cols-8",
        9: "grid-cols-9",
        10: "grid-cols-10",
        11: "grid-cols-11",
        12: "grid-cols-12"
      },
      // Rows
      rows: {
        1: "grid-rows-1",
        2: "grid-rows-2",
        3: "grid-rows-3",
        4: "grid-rows-4",
        5: "grid-rows-5",
        6: "grid-rows-6",
        7: "grid-rows-7",
        8: "grid-rows-8",
        9: "grid-rows-9",
        10: "grid-rows-10",
        11: "grid-rows-11",
        12: "grid-rows-12"
      },
      // Flow
      flow: {
        row: "grid-flow-row",
        col: "grid-flow-col",
        rowDense: "grid-flow-row-dense",
        colDense: "grid-flow-col-dense",
        dense: "grid-flow-dense"
      },
      // Gap
      gap: {
        0: "gap-0",
        0.5: "gap-0.5",
        1: "gap-1",
        1.5: "gap-1.5",
        2: "gap-2",
        2.5: "gap-2.5",
        3: "gap-3",
        3.5: "gap-3.5",
        4: "gap-4",
        5: "gap-5",
        6: "gap-6",
        7: "gap-7",
        8: "gap-8",
        9: "gap-9",
        10: "gap-10",
        11: "gap-11",
        12: "gap-12",
        14: "gap-14",
        16: "gap-16",
        20: "gap-20",
        24: "gap-24"
      },
      gapX: {
        0: "gap-x-0",
        0.5: "gap-x-0.5",
        1: "gap-x-1",
        1.5: "gap-x-1.5",
        2: "gap-x-2",
        2.5: "gap-x-2.5",
        3: "gap-x-3",
        3.5: "gap-x-3.5",
        4: "gap-x-4",
        5: "gap-x-5",
        6: "gap-x-6",
        7: "gap-x-7",
        8: "gap-x-8",
        9: "gap-x-9",
        10: "gap-x-10",
        11: "gap-x-11",
        12: "gap-x-12",
        14: "gap-x-14",
        16: "gap-x-16",
        20: "gap-x-20",
        24: "gap-x-24"
      },
      gapY: {
        0: "gap-y-0",
        0.5: "gap-y-0.5",
        1: "gap-y-1",
        1.5: "gap-y-1.5",
        2: "gap-y-2",
        2.5: "gap-y-2.5",
        3: "gap-y-3",
        3.5: "gap-y-3.5",
        4: "gap-y-4",
        5: "gap-y-5",
        6: "gap-y-6",
        7: "gap-y-7",
        8: "gap-y-8",
        9: "gap-y-9",
        10: "gap-y-10",
        11: "gap-y-11",
        12: "gap-y-12",
        14: "gap-y-14",
        16: "gap-y-16",
        20: "gap-y-20",
        24: "gap-y-24"
      }
    },
    defaultVariants: {
      columns: 1
    }
  },
  {
    responsiveVariants: true
  }
);
const Grid = ({ className, gap, gapX, gapY, flow, columns, rows, ...props }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-label": props["aria-label"] || "grid",
      className: gridStyles({
        gap: gap ?? gapX ?? gapY,
        gapX: gapX ?? gap,
        gapY: gapY ?? gap,
        flow: flow ?? "row",
        columns: columns ?? 1,
        rows: rows ?? 1,
        className: "debug" in props ? cn$1("[&>.grid-cell]:border [&>.grid-cell]:border-warning", className) : className
      }),
      ...props,
      children: props.children
    }
  );
};
const gridItemStyles = tv(
  {
    base: "grid-cell focus:outline-none",
    variants: {
      colSpan: {
        auto: "col-auto",
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4",
        5: "col-span-5",
        6: "col-span-6",
        7: "col-span-7",
        8: "col-span-8",
        9: "col-span-9",
        10: "col-span-10",
        11: "col-span-11",
        12: "col-span-12",
        full: "col-span-full"
      },
      colStart: {
        1: "col-start-1",
        2: "col-start-2",
        3: "col-start-3",
        4: "col-start-4",
        5: "col-start-5",
        6: "col-start-6",
        7: "col-start-7",
        8: "col-start-8",
        9: "col-start-9",
        10: "col-start-10",
        11: "col-start-11",
        12: "col-start-12",
        13: "col-start-13",
        auto: "col-start-auto"
      },
      colEnd: {
        1: "col-end-1",
        2: "col-end-2",
        3: "col-end-3",
        4: "col-end-4",
        5: "col-end-5",
        6: "col-end-6",
        7: "col-end-7",
        8: "col-end-8",
        9: "col-end-9",
        10: "col-end-10",
        11: "col-end-11",
        12: "col-end-12",
        13: "col-end-13",
        auto: "col-end-auto"
      },
      rowSpan: {
        auto: "row-auto",
        1: "row-span-1",
        2: "row-span-2",
        3: "row-span-3",
        4: "row-span-4",
        5: "row-span-5",
        6: "row-span-6",
        7: "row-span-7",
        8: "row-span-8",
        9: "row-span-9",
        10: "row-span-10",
        11: "row-span-11",
        12: "row-span-12",
        full: "row-span-full"
      },
      rowStart: {
        1: "row-start-1",
        2: "row-start-2",
        3: "row-start-3",
        4: "row-start-4",
        5: "row-start-5",
        6: "row-start-6",
        7: "row-start-7",
        8: "row-start-8",
        9: "row-start-9",
        10: "row-start-10",
        11: "row-start-11",
        12: "row-start-12",
        13: "row-start-13",
        auto: "row-start-auto"
      },
      rowEnd: {
        1: "row-end-1",
        2: "row-end-2",
        3: "row-end-3",
        4: "row-end-4",
        5: "row-end-5",
        6: "row-end-6",
        7: "row-end-7",
        8: "row-end-8",
        9: "row-end-9",
        10: "row-end-10",
        11: "row-end-11",
        12: "row-end-12",
        13: "row-end-13",
        auto: "row-end-auto"
      }
    }
  },
  {
    responsiveVariants: ["sm", "md", "lg", "xl", "2xl"]
  }
);
const GridItem = ({
  children,
  className,
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: gridItemStyles({
        colSpan,
        rowSpan,
        colStart,
        colEnd,
        rowStart,
        rowEnd,
        className
      }),
      ...props,
      children
    }
  );
};
Grid.Collection = Collection;
Grid.Item = GridItem;
const linkStyles = tv({
  base: [
    "relative focus-visible:outline-2 outline outline-offset-2 outline-0 outline-primary transition-colors",
    "forced-colors:outline-[Highlight] forced-colors:disabled:text-[GrayText] disabled:focus-visible:outline-0",
    "disabled:cursor-default disabled:opacity-60"
  ],
  variants: {
    intent: {
      unstyled: "text-current",
      primary: "text-primary hover:text-primary/80 forced-colors:disabled:text-[GrayText]",
      danger: "text-danger hover:text-danger/80 forced-colors:disabled:text-[GrayText]",
      "lad/primary": "text-fg hover:text-primary dark:hover:text-primary/80 forced-colors:disabled:text-[GrayText]",
      secondary: "text-secondary-fg hover:text-secondary-fg/80"
    }
  },
  defaultVariants: {
    intent: "unstyled"
  }
});
const Link = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link$1,
    {
      ...props,
      className: composeRenderProps(
        className,
        (className2, ...renderProps) => linkStyles({ ...renderProps, intent: props.intent, className: className2 })
      ),
      children: (values) => /* @__PURE__ */ jsx(Fragment, { children: typeof props.children === "function" ? props.children(values) : props.children })
    }
  );
};
const listBoxStyles = tv({
  base: "flex max-h-96 [&::-webkit-scrollbar]:size-0.5 [scrollbar-width:thin] w-full gap-y-1 min-w-72 flex-col overflow-y-auto rounded-xl border p-1 shadow-lg outline-none"
});
const ListBox = ({ children, className, ...props }) => /* @__PURE__ */ jsx(ListBox$1, { ...props, className: listBoxStyles({ className }), children });
const listBoxItemStyles = tv({
  base: "lbi cursor-pointer relative rounded-[calc(var(--radius)-1px)] p-2 text-base outline-none lg:text-sm",
  variants: {
    isFocusVisible: {
      true: "bg-secondary [&:focus-visible_[slot=label]]:text-accent-fg [&:focus-visible_[slot=description]]:text-accent-fg/70 text-secondary-fg"
    },
    isHovered: {
      true: "bg-accent [&:hover_[slot=label]]:text-accent-fg [&:hover_[slot=description]]:text-accent-fg/70 text-accent-fg [&_.text-muted-fg]:text-accent-fg/80"
    },
    isFocused: {
      true: "[&_[data-slot=icon]]:text-accent-fg [&_[data-slot=label]]:text-accent-fg [&_.text-muted-fg]:text-accent-fg/80 bg-accent text-accent-fg"
    },
    isSelected: {
      true: "[&_[data-slot=icon]]:text-accent-fg [&_[data-slot=label]]:text-accent-fg [&_.text-muted-fg]:text-accent-fg/80 bg-accent text-accent-fg"
    },
    isDragging: { true: "cursor-grabbing bg-secondary text-secondary-fg" },
    isDisabled: {
      true: "opacity-70 cursor-default text-muted-fg"
    }
  }
});
const ListBoxItem = ({ children, className, ...props }) => {
  const textValue = typeof children === "string" ? children : void 0;
  return /* @__PURE__ */ jsx(
    ListBoxItem$1,
    {
      textValue,
      ...props,
      className: composeRenderProps(
        className,
        (className2, renderProps) => listBoxItemStyles({
          ...renderProps,
          className: className2
        })
      ),
      children: (values) => /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(Fragment, { children: [
        values.allowsDragging && /* @__PURE__ */ jsx(
          IconHamburger,
          {
            className: cn$1(
              "size-4 shrink-0 text-muted-fg transition",
              values.isFocused && "text-fg",
              values.isDragging && "text-fg",
              values.isSelected && "text-accent-fg/70"
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          typeof children === "function" ? children(values) : children,
          values.isSelected && /* @__PURE__ */ jsx("span", { className: "animate-in absolute right-2 top-3 lg:top-2.5", children: /* @__PURE__ */ jsx(IconCheck, {}) })
        ] })
      ] }) })
    }
  );
};
const ListBoxPicker = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(ListBox$1, { className: cn$1("max-h-72 overflow-auto p-1 outline-none", className), ...props });
};
const Section$1 = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(DropdownSection, { className: cn$1(className, "[&_.lbi:last-child]:-mb-1.5 gap-y-1"), ...props });
};
ListBox.Section = Section$1;
ListBox.ItemDetails = DropdownItemDetails;
ListBox.Item = ListBoxItem;
ListBox.Picker = ListBoxPicker;
const keyboardStyles = tv({
  slots: {
    base: "-mr-1 ml-auto hidden items-center gap-[0.25rem] px-1 lg:inline-flex",
    kbd: [
      "text-center font-sans capitalize text-muted-fg group-focus:text-fg forced-colors:group-focus:text-[HighlightText]",
      "inline-grid min-h-5 min-w-5 place-content-center rounded bg-bg font-sans text-[.75rem] uppercase text-fg ring-1 ring-fg/10 group-focus:opacity-60"
    ]
  }
});
const { base, kbd } = keyboardStyles();
const Keyboard = ({ keys, classNames, className, ...props }) => {
  return /* @__PURE__ */ jsx(Keyboard$1, { className: base({ className: (classNames == null ? void 0 : classNames.base) ?? className }), ...props, children: (Array.isArray(keys) ? keys : keys.split("")).map((char, index) => /* @__PURE__ */ jsx(
    "kbd",
    {
      className: kbd({ className: index > 0 && char.length > 1 ? "pl-1" : classNames == null ? void 0 : classNames.kbd }),
      children: char
    },
    index
  )) });
};
const Popover = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(DialogTrigger, { ...props, children });
};
const Title = ({ level = 2, className, ...props }) => /* @__PURE__ */ jsx(Dialog.Title, { className: cn$1("sm:leading-none", level === 2 && "sm:text-lg", className), ...props });
const Header$1 = ({ className, ...props }) => /* @__PURE__ */ jsx(Dialog.Header, { className: cn$1("p-0 sm:pt-0", className), ...props });
const Footer = ({ className, ...props }) => /* @__PURE__ */ jsx(Dialog.Footer, { className: cn$1("pb-0 pt-4 sm:pb-0", className), ...props });
const Body$1 = ({ className, ...props }) => /* @__PURE__ */ jsx(Dialog.Body, { className: cn$1("p-0", className), ...props });
const popoverContentStyles = tv({
  base: [
    "max-w-xs min-w-80 p-4 rounded-xl border bg-overlay bg-clip-padding text-overlay-fg shadow-sm dark:backdrop-blur-2xl dark:backdrop-saturate-200 lg:text-sm sm:max-w-3xl forced-colors:bg-[Canvas] [&::-webkit-scrollbar]:size-0.5 [scrollbar-width:thin]"
  ],
  variants: {
    isMenu: {
      true: {
        true: "p-0"
      }
    },
    isEntering: {
      true: [
        "duration-50 ease-out animate-in fade-in placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1"
      ]
    },
    isExiting: {
      true: "duration-50 ease-in animate-out fade-out placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1"
    }
  }
});
const drawerStyles = tv({
  base: [
    "fixed max-h-full bottom-0 top-auto z-50 w-full bg-overlay max-w-2xl border border-b-transparent outline-none"
  ],
  variants: {
    isMenu: {
      true: "p-0 [&_[role=dialog]]:px-0 rounded-t-xl",
      false: "py-4 rounded-t-2xl"
    },
    isEntering: {
      true: [
        "[will-change:transform] [transition:transform_0.5s_cubic-bezier(0.32,_0.72,_0,_1)]",
        "animate-in duration-200 fade-in-0 slide-in-from-bottom-56",
        "[transition:translate3d(0,_100%,_0)]",
        "sm:slide-in-from-bottom-auto sm:slide-in-from-top-[20%]"
      ]
    },
    isExiting: {
      true: "duration-200 ease-in animate-out slide-out-to-bottom-56"
    }
  }
});
const Content$1 = ({ respectScreen = true, children, showArrow = true, className, ...props }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const popoverContext = useSlottedContext(PopoverContext);
  const isMenuTrigger = (popoverContext == null ? void 0 : popoverContext.trigger) === "MenuTrigger";
  const isSubmenuTrigger = (popoverContext == null ? void 0 : popoverContext.trigger) === "SubmenuTrigger";
  const isMenu = isMenuTrigger || isSubmenuTrigger;
  const offset = showArrow ? 12 : 8;
  const effectiveOffset = isSubmenuTrigger ? offset - 5 : offset;
  return isMobile && respectScreen ? /* @__PURE__ */ jsx(
    ModalOverlay,
    {
      className: twJoin(
        "fixed left-0 top-0 isolate z-50 h-[--visual-viewport-height] w-full bg-overlay/10 [--visual-viewport-vertical-padding:16px]",
        isSubmenuTrigger ? "bg-overlay/10" : ""
      ),
      ...props,
      isDismissable: true,
      children: /* @__PURE__ */ jsx(
        Modal$1,
        {
          className: composeRenderProps(
            className,
            (className2, renderProps) => drawerStyles({ ...renderProps, isMenu, className: className2 })
          ),
          children: /* @__PURE__ */ jsx(Dialog, { "aria-label": isMenu ? "Menu" : props["aria-label"], className: "touch-none focus:outline-none", children })
        }
      )
    }
  ) : /* @__PURE__ */ jsxs(
    Popover$1,
    {
      offset: effectiveOffset,
      ...props,
      className: composeRenderProps(
        className,
        (className2, renderProps) => popoverContentStyles({
          ...renderProps,
          className: className2
        })
      ),
      children: [
        showArrow && /* @__PURE__ */ jsx(OverlayArrow, { className: "group", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: 12,
            height: 12,
            viewBox: "0 0 12 12",
            className: "block fill-overlay stroke-border group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
            children: /* @__PURE__ */ jsx("path", { d: "M0 0 L6 6 L12 0" })
          }
        ) }),
        children
      ]
    }
  );
};
const Picker = ({ children, className, ...props }) => {
  return /* @__PURE__ */ jsx(
    Popover$1,
    {
      ...props,
      className: composeRenderProps(
        className,
        (className2, renderProps) => popoverContentStyles({
          ...renderProps,
          className: cn$1("max-h-72 min-w-[--trigger-width] overflow-y-auto p-0", className2)
        })
      ),
      children
    }
  );
};
Popover.Primitive = Popover$1;
Popover.Trigger = Dialog.Trigger;
Popover.Close = Dialog.Close;
Popover.Content = Content$1;
Popover.Description = Dialog.Description;
Popover.Body = Body$1;
Popover.Footer = Footer;
Popover.Header = Header$1;
Popover.Picker = Picker;
Popover.Title = Title;
const MenuContext = React.createContext({ respectScreen: true });
const Menu = ({ respectScreen = true, ...props }) => {
  return /* @__PURE__ */ jsx(MenuContext.Provider, { value: { respectScreen }, children: /* @__PURE__ */ jsx(MenuTrigger, { ...props, children: props.children }) });
};
const SubMenu = ({ delay = 0, ...props }) => /* @__PURE__ */ jsx(SubmenuTrigger, { ...props, delay, children: props.children });
const menuStyles = tv({
  slots: {
    menu: "z32kk max-h-[calc(var(--visual-viewport-height)-10rem)] sm:max-h-[inherit] overflow-auto rounded-xl p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",
    popover: "z-50 min-w-40 p-0 outline-none shadow-sm",
    trigger: [
      "inline relative text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary pressed:outline-none"
    ]
  }
});
const { menu, popover, trigger } = menuStyles();
const Trigger$2 = ({ className, ...props }) => /* @__PURE__ */ jsx(Button$1, { className: trigger({ className }), ...props, children: (values) => /* @__PURE__ */ jsx(Fragment, { children: typeof props.children === "function" ? props.children(values) : props.children }) });
const Content = ({
  className,
  showArrow = false,
  popoverClassName,
  ...props
}) => {
  const { respectScreen } = React.useContext(MenuContext);
  return /* @__PURE__ */ jsx(
    Popover.Content,
    {
      respectScreen,
      showArrow,
      className: popover({
        className: cn$1([
          showArrow && "placement-left:mt-[-0.38rem] placement-right:mt-[-0.38rem]",
          popoverClassName
        ])
      }),
      ...props,
      children: /* @__PURE__ */ jsx(Menu$1, { className: menu({ className }), ...props })
    }
  );
};
const Item$2 = ({ className, isDanger = false, children, ...props }) => {
  const textValue = props.textValue || (typeof children === "string" ? children : void 0);
  return /* @__PURE__ */ jsx(
    MenuItem,
    {
      textValue,
      className: composeRenderProps(
        className,
        (className2, renderProps) => dropdownItemStyles({
          ...renderProps,
          className: className2
        })
      ),
      "data-danger": isDanger ? "true" : void 0,
      ...props,
      children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
        typeof children === "function" ? children(values) : children,
        values.hasSubmenu && /* @__PURE__ */ jsx(IconChevronLgRight, { className: "gpfw ml-auto size-3.5" })
      ] })
    }
  );
};
const MenuHeader = ({ className, separator = false, ...props }) => /* @__PURE__ */ jsx(
  Header$4,
  {
    className: cn$1(
      "p-2 text-base font-semibold sm:text-sm",
      separator && "-mx-1 border-b border-b-border px-3 pb-[0.625rem]",
      className
    ),
    ...props
  }
);
const MenuSeparator = ({ className, ...props }) => /* @__PURE__ */ jsx(Separator$1, { className: cn$1("-mx-1 my-1 h-px border-b border-b-muted", className), ...props });
const Checkbox = ({ className, children, ...props }) => /* @__PURE__ */ jsx(Item$2, { className: cn$1("relative pr-8", className), ...props, children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
  typeof children === "function" ? children(values) : children,
  values.isSelected && /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-4 shrink-0 items-center animate-in justify-center", children: /* @__PURE__ */ jsx(IconCheck, {}) })
] }) });
const Radio = ({ className, children, ...props }) => /* @__PURE__ */ jsx(Item$2, { className: cn$1("relative", className), ...props, children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
  typeof children === "function" ? children(values) : children,
  values.isSelected && /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "menu-radio",
      className: "absolute right-3 flex items-center animate-in justify-center",
      children: /* @__PURE__ */ jsx(IconBulletFill, {})
    }
  )
] }) });
Menu.Primitive = Menu$1;
Menu.Content = Content;
Menu.Header = MenuHeader;
Menu.Item = Item$2;
Menu.Content = Content;
Menu.Keyboard = Keyboard;
Menu.Checkbox = Checkbox;
Menu.Radio = Radio;
Menu.Section = DropdownSection;
Menu.Separator = MenuSeparator;
Menu.Trigger = Trigger$2;
Menu.ItemDetails = DropdownItemDetails;
Menu.Submenu = SubMenu;
const modalOverlayStyles = tv({
  base: [
    "fixed left-0 top-0 isolate z-50 h-[--visual-viewport-height] w-full",
    "flex items-end text-center sm:block",
    "[--visual-viewport-vertical-padding:16px] sm:[--visual-viewport-vertical-padding:32px]"
  ],
  variants: {
    isBlurred: {
      true: "backdrop-blur",
      false: "bg-dark/15 dark:bg-dark/40"
    },
    isEntering: {
      true: "ease-out animate-in fade-in"
    },
    isExiting: {
      true: "duration-200 ease-in animate-out fade-out"
    }
  }
});
const modalContentStyles = tv({
  base: [
    "max-h-full w-full rounded-t-2xl ring-1 ring-dark/5 bg-overlay text-overlay-fg text-left align-middle shadow-lg",
    "dark:ring-border sm:rounded-2xl overflow-hidden",
    "sm:fixed sm:left-[50vw] sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
  ],
  variants: {
    isEntering: {
      true: [
        "animate-in ease-out duration-200 slide-in-from-bottom-[20%]",
        "sm:slide-in-from-bottom-auto sm:slide-in-from-top-[80%] sm:slide-in-from-left-1/2"
      ]
    },
    isExiting: {
      true: [
        "duration-200 ease-in animate-out slide-out-to-bottom-56",
        "sm:exiting:slide-out-to-top-[80%] sm:slide-out-to-left-1/2"
      ]
    },
    size: {
      xs: "sm:max-w-xs",
      sm: "sm:max-w-sm",
      md: "sm:max-w-md",
      lg: "sm:max-w-lg sm:has-[[role=alertdialog]]:max-w-lg sm:has-[[role=dialog]]:max-w-lg",
      xl: "sm:max-w-xl",
      "2xl": "sm:max-w-2xl",
      "3xl": "sm:max-w-3xl",
      "4xl": "sm:max-w-4xl",
      "5xl": "sm:max-w-5xl"
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
const Modal = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(DialogTrigger, { ...props, children });
};
const ModalContent = ({
  classNames,
  isDismissable = true,
  isBlurred = false,
  children,
  size,
  role,
  closeButton = true,
  ...props
}) => {
  const _isDismissable = role === "alertdialog" ? false : isDismissable;
  return /* @__PURE__ */ jsx(
    ModalOverlay,
    {
      isDismissable: _isDismissable,
      className: composeRenderProps(classNames == null ? void 0 : classNames.overlay, (className, renderProps) => {
        return modalOverlayStyles({
          ...renderProps,
          isBlurred,
          className
        });
      }),
      ...props,
      children: /* @__PURE__ */ jsx(
        Modal$1,
        {
          className: composeRenderProps(
            classNames == null ? void 0 : classNames.content,
            (className, renderProps) => modalContentStyles({
              ...renderProps,
              size,
              className
            })
          ),
          ...props,
          children: (values) => /* @__PURE__ */ jsxs(Dialog, { role, children: [
            typeof children === "function" ? children(values) : children,
            closeButton && /* @__PURE__ */ jsx(Dialog.CloseIndicator, { close: values.state.close, isDismissable: _isDismissable })
          ] })
        }
      )
    }
  );
};
Modal.Trigger = Dialog.Trigger;
Modal.Header = Dialog.Header;
Modal.Title = Dialog.Title;
Modal.Description = Dialog.Description;
Modal.Footer = Dialog.Footer;
Modal.Body = Dialog.Body;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
const intents = {
  primary: {
    base: [
      badgeIntents.primary,
      "[&_[slot=remove]:hover]:bg-primary [&_[slot=remove]:hover]:text-primary-fg"
    ],
    selected: [
      "bg-primary dark:hover:bg-primary dark:bg-primary hover:bg-primary ring-primary ring-inset text-primary-fg dark:text-primary-fg hover:text-primary-fg",
      "[&_[slot=remove]:hover]:bg-primary-fg/80 [&_[slot=remove]:hover]:text-primary"
    ]
  },
  secondary: {
    base: [badgeIntents.secondary, "[&_[slot=remove]:hover]:bg-fg [&_[slot=remove]:hover]:text-bg"],
    selected: [
      "bg-fg ring-fg/50 text-bg dark:bg-fg/90 dark:text-secondary ring-inset",
      "[&_[slot=remove]:hover]:bg-bg [&_[slot=remove]:hover]:text-secondary-fg"
    ]
  },
  success: {
    base: [
      badgeIntents.success,
      "[&_[slot=remove]:hover]:bg-success [&_[slot=remove]:hover]:text-success-fg"
    ],
    selected: [
      "bg-success dark:bg-success ring-success ring-inset dark:text-success-fg dark:hover:bg-success hover:bg-success text-success-fg hover:text-success-fg",
      "[&_[slot=remove]:hover]:bg-success-fg/80 [&_[slot=remove]:hover]:text-success"
    ]
  },
  warning: {
    base: [
      badgeIntents.warning,
      "[&_[slot=remove]:hover]:bg-warning [&_[slot=remove]:hover]:text-warning-fg"
    ],
    selected: [
      "bg-warning dark:hover:bg-warning dark:bg-warning dark:text-bg hover:bg-warning text-warning-fg hover:text-warning-fg",
      "[&_[slot=remove]:hover]:bg-warning-fg/80 [&_[slot=remove]:hover]:text-warning"
    ]
  },
  danger: {
    base: [
      badgeIntents.danger,
      "[&_[slot=remove]:hover]:bg-danger [&_[slot=remove]:hover]:text-danger-fg"
    ],
    selected: [
      "bg-danger dark:bg-danger dark:hover:bg-danger/90 hover:bg-danger text-danger-fg ring-danger hover:text-danger-fg",
      "[&_[slot=remove]:hover]:bg-danger-fg/80 [&_[slot=remove]:hover]:text-danger"
    ]
  }
};
const TagGroupContext = React__default.createContext({
  intent: "primary",
  shape: "square"
});
const TagGroup = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(TagGroup$1, { ...props, className: cn$1("flex flex-wrap flex-col", props.className), children: /* @__PURE__ */ jsxs(
    TagGroupContext.Provider,
    {
      value: {
        intent: props.intent || "primary",
        shape: props.shape || "square"
      },
      children: [
        props.label && /* @__PURE__ */ jsx(Label, { className: "mb-1", children: props.label }),
        children,
        props.description && /* @__PURE__ */ jsx(Description$1, { children: props.description })
      ]
    }
  ) });
};
const TagList = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(TagList$1, { ...props, className: composeTailwindRenderProps(className, "flex flex-wrap gap-2") });
};
const tagStyles = tv({
  extend: focusStyles,
  base: [badgeStyles.base, "cursor-pointer jdt3lr2x"],
  variants: {
    isFocused: { true: "ring-1" },
    isDisabled: { true: "opacity-50 cursor-default" },
    allowsRemoving: { true: "pr-1" }
  }
});
const TagItem = ({ className, intent, shape, ...props }) => {
  const textValue = typeof props.children === "string" ? props.children : void 0;
  const groupContext = React__default.useContext(TagGroupContext);
  return /* @__PURE__ */ jsx(
    Tag$1,
    {
      textValue,
      ...props,
      className: composeRenderProps(className, (_, renderProps) => {
        var _a;
        const finalIntent = intent || groupContext.intent;
        const finalShape = shape || groupContext.shape;
        return tagStyles({
          ...renderProps,
          className: cn$1([
            (_a = intents[finalIntent]) == null ? void 0 : _a.base,
            badgeShapes[finalShape],
            renderProps.isSelected ? intents[finalIntent].selected : void 0
          ])
        });
      }),
      children: ({ allowsRemoving }) => {
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          props.children,
          allowsRemoving && /* @__PURE__ */ jsx(
            Button$1,
            {
              slot: "remove",
              className: composeRenderProps("", (className2) => {
                return cn$1(
                  "rounded [&>[data-slot=icon]]:size-3 [&>[data-slot=icon]]:shrink-0 focus:outline-none size-3.5 grid place-content-center -mr-0.5 focus-visible:ring-1 focus-visible:ring-primary",
                  className2
                );
              }),
              children: /* @__PURE__ */ jsx(IconX, {})
            }
          )
        ] });
      }
    }
  );
};
const Tag = {
  Group: TagGroup,
  Item: TagItem,
  List: TagList
};
const multiSelectStyles = tv({
  slots: {
    multiSelectField: "group flex w-full flex-col",
    multiSelect: [
      "relative px-1 flex min-h-10 flex-row flex-wrap items-center rounded-lg bg-bg shadow-sm border",
      "has-[input[data-focused=true]]:border-ring/85",
      "has-[input[data-invalid=true][data-focused=true]]:border-blue-500",
      "has-[input[data-invalid=true]]:border-danger",
      "has-[input[data-focused=true]]:ring-4 has-[input[data-focused=true]]:ring-ring/20"
    ],
    chevronButton: "size-8 -mr-2 grid place-content-center rounded-sm hover:text-fg focus:text-fg text-muted-fg",
    input: "flex-1 py-1 px-0.5 ml-1 shadow-none ring-0",
    comboBoxChild: "inline-flex flex-1 flex-wrap items-center px-0",
    comboBox: "group peer flex flex-1"
  }
});
const { multiSelectField, multiSelect, chevronButton, input, comboBox, comboBoxChild } = multiSelectStyles();
const MultipleSelect = ({
  children,
  items,
  selectedItems,
  onItemCleared,
  onItemInserted,
  className,
  name,
  renderEmptyState,
  errorMessage,
  ...props
}) => {
  const tagGroupIdentifier = React.useId();
  const triggerRef = React.useRef(null);
  const [width, setWidth] = React.useState(0);
  const { contains } = useFilter({ sensitivity: "base" });
  const selectedKeys = selectedItems.items.map((i) => i.id);
  const filter = React.useCallback(
    (item, filterText) => {
      return !selectedKeys.includes(item.id) && contains(item.name, filterText);
    },
    [contains, selectedKeys]
  );
  const accessibleList = useListData({
    initialItems: items,
    filter
  });
  const [fieldState, setFieldState] = useState({
    selectedKey: null,
    inputValue: ""
  });
  const onRemove = React.useCallback(
    (keys) => {
      const key = keys.values().next().value;
      if (key) {
        selectedItems.remove(key);
        setFieldState({
          inputValue: "",
          selectedKey: null
        });
        onItemCleared == null ? void 0 : onItemCleared(key);
      }
    },
    [selectedItems, onItemCleared]
  );
  const onSelectionChange = (id) => {
    if (!id) {
      return;
    }
    const item = accessibleList.getItem(id);
    if (!item) {
      return;
    }
    if (!selectedKeys.includes(id)) {
      selectedItems.append(item);
      setFieldState({
        inputValue: "",
        selectedKey: id
      });
      onItemInserted == null ? void 0 : onItemInserted(id);
    }
    accessibleList.setFilterText("");
  };
  const onInputChange = (value) => {
    setFieldState((prev) => ({
      inputValue: value,
      selectedKey: value === "" ? null : prev.selectedKey
    }));
    accessibleList.setFilterText(value);
  };
  const popLast = React.useCallback(() => {
    if (selectedItems.items.length == 0) {
      return;
    }
    const endKey = selectedItems.items[selectedItems.items.length - 1];
    if (endKey !== null) {
      selectedItems.remove(endKey.id);
      onItemCleared == null ? void 0 : onItemCleared(endKey.id);
    }
    setFieldState({
      inputValue: "",
      selectedKey: null
    });
  }, [selectedItems, onItemCleared]);
  const onKeyDownCapture = React.useCallback(
    (e) => {
      if (e.key === "Backspace" && fieldState.inputValue === "") {
        popLast();
      }
    },
    [popLast, fieldState.inputValue]
  );
  React.useEffect(() => {
    const trigger2 = triggerRef.current;
    if (!trigger2) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.target.clientWidth);
      }
    });
    observer.observe(trigger2);
    return () => {
      observer.unobserve(trigger2);
    };
  }, [triggerRef]);
  const triggerButtonRef = React.useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: multiSelectField({ className }), children: [
    props.label && /* @__PURE__ */ jsx(Label, { className: "mb-[6px]", children: props.label }),
    /* @__PURE__ */ jsx("div", { className: props.isDisabled ? "opacity-50" : "", children: /* @__PURE__ */ jsxs("div", { ref: triggerRef, className: multiSelect({ className }), children: [
      /* @__PURE__ */ jsx(
        Tag.Group,
        {
          shape: props.shape,
          intent: props.intent,
          "aria-label": "Selected items",
          id: tagGroupIdentifier,
          onRemove,
          children: /* @__PURE__ */ jsx(
            Tag.List,
            {
              items: selectedItems.items,
              className: cn$1(
                selectedItems.items.length !== 0 && "px-1 py-1.5",
                "last:[&_.jdt3lr2x]:-mr-1 outline-none gap-1.5",
                props.shape === "square" && "[&_.jdt3lr2x]:rounded-[calc(var(--radius)-4px)]"
              ),
              children: props.tag
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        ComboBox,
        {
          ...props,
          allowsEmptyCollection: true,
          "aria-label": "Available items",
          className: comboBox(),
          items: accessibleList.items,
          selectedKey: fieldState.selectedKey,
          inputValue: fieldState.inputValue,
          onSelectionChange,
          onInputChange,
          children: [
            /* @__PURE__ */ jsxs("div", { className: comboBoxChild({ className }), children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: props.placeholder,
                  className: input(),
                  onBlur: () => {
                    setFieldState({
                      inputValue: "",
                      selectedKey: null
                    });
                    accessibleList.setFilterText("");
                  },
                  onKeyDownCapture
                }
              ),
              /* @__PURE__ */ jsx(VisuallyHidden, { children: /* @__PURE__ */ jsx(
                Button,
                {
                  slot: "remove",
                  type: "button",
                  "aria-label": "Remove",
                  appearance: "plain",
                  size: "square-petite",
                  ref: triggerButtonRef,
                  children: /* @__PURE__ */ jsx(IconChevronLgDown, {})
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx(
              Popover.Picker,
              {
                className: "max-w-none",
                style: { width: `${width}px` },
                triggerRef,
                trigger: "ComboBox",
                children: /* @__PURE__ */ jsx(
                  ListBox.Picker,
                  {
                    renderEmptyState: () => renderEmptyState ? renderEmptyState(fieldState.inputValue) : /* @__PURE__ */ jsx(Description$1, { className: "p-3 block", children: fieldState.inputValue ? /* @__PURE__ */ jsxs(Fragment, { children: [
                      "No results found for:",
                      " ",
                      /* @__PURE__ */ jsx("strong", { className: "font-medium text-fg", children: fieldState.inputValue })
                    ] }) : `No options` }),
                    selectionMode: "multiple",
                    children
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative px-1 ml-auto flex items-center justify-center", "aria-hidden": true, children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: chevronButton(),
          onClick: () => {
            var _a;
            return (_a = triggerButtonRef.current) == null ? void 0 : _a.click();
          },
          tabIndex: -1,
          children: /* @__PURE__ */ jsx(IconChevronLgDown, { className: "peer/[data-open]:rotate-180 size-4" })
        }
      ) })
    ] }) }),
    props.description && /* @__PURE__ */ jsx(Description$1, { children: props.description }),
    /* @__PURE__ */ jsx(FieldError, { children: errorMessage }),
    name && /* @__PURE__ */ jsx("input", { hidden: true, name, value: selectedKeys.join(","), readOnly: true })
  ] });
};
MultipleSelect.Tag = Tag.Item;
MultipleSelect.Option = ListBox.Item;
const sheetOverlayStyles = tv({
  base: ["fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-50 flex items-center justify-center p-4"],
  variants: {
    isBlurred: {
      true: "backdrop-blur",
      false: "bg-dark/15 dark:bg-dark/40"
    },
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out"
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in"
    }
  }
});
const generateCompoundVariants = (sides) => {
  return sides.map((side) => ({
    side,
    isStack: true,
    className: side === "top" ? "top-2 inset-x-2 rounded-xl ring-1 border-b-0 ring-dark/5 dark:ring-border" : side === "bottom" ? "bottom-2 inset-x-2 rounded-xl ring-1 border-t-0 ring-dark/5 dark:ring-border" : side === "left" ? "left-2 inset-y-2 rounded-xl ring-1 border-r-0 ring-dark/5 dark:ring-border" : "right-2 inset-y-2 rounded-xl ring-1 border-l-0 ring-dark/5 dark:ring-border"
  }));
};
const sheetContentStyles = tv({
  base: "fixed z-50 grid gap-4 bg-overlay border-dark/5 dark:border-border text-overlay-fg shadow-lg transition ease-in-out",
  variants: {
    isEntering: {
      true: "duration-300 animate-in "
    },
    isExiting: {
      true: "duration-200 animate-out"
    },
    side: {
      top: "inset-x-0 top-0 rounded-b-2xl border-b entering:slide-in-from-top exiting:slide-out-to-top",
      bottom: "inset-x-0 bottom-0 rounded-t-2xl border-t entering:slide-in-from-bottom exiting:slide-out-to-bottom",
      left: "inset-y-0 left-0 h-auto w-[19rem] sm:w-3/4 overflow-y-auto border-r entering:slide-in-from-left exiting:slide-out-to-left sm:max-w-xs",
      right: "inset-y-0 right-0 h-auto w-[19rem] sm:w-3/4 overflow-y-auto border-l entering:slide-in-from-right exiting:slide-out-to-right sm:max-w-xs"
    },
    isStack: {
      true: "",
      false: ""
    }
  },
  compoundVariants: generateCompoundVariants(["top", "bottom", "left", "right"])
});
const Sheet = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(DialogTrigger, { ...props, children });
};
const SheetContent = ({
  classNames,
  isBlurred = false,
  isDismissable = true,
  side = "right",
  role = "dialog",
  closeButton = true,
  isStack = true,
  ...props
}) => {
  const _isDismissable = role === "alertdialog" ? false : isDismissable;
  return /* @__PURE__ */ jsx(
    ModalOverlay,
    {
      isDismissable: _isDismissable,
      className: composeRenderProps(classNames == null ? void 0 : classNames.overlay, (className, renderProps) => {
        return sheetOverlayStyles({
          ...renderProps,
          isBlurred,
          className
        });
      }),
      ...props,
      children: /* @__PURE__ */ jsx(
        Modal$1,
        {
          className: composeRenderProps(
            classNames == null ? void 0 : classNames.content,
            (className, renderProps) => sheetContentStyles({
              ...renderProps,
              side,
              isStack,
              className
            })
          ),
          ...props,
          children: /* @__PURE__ */ jsx(Dialog, { role, "aria-label": props["aria-label"] ?? void 0, className: "h-full", children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
            props.children,
            closeButton && /* @__PURE__ */ jsx(
              Dialog.CloseIndicator,
              {
                className: "top-2.5 right-2.5",
                close: values.close,
                isDismissable: _isDismissable
              }
            )
          ] }) })
        }
      )
    }
  );
};
Sheet.Trigger = Dialog.Trigger;
Sheet.Footer = Dialog.Footer;
Sheet.Content = SheetContent;
Sheet.Header = Dialog.Header;
Sheet.Title = Dialog.Title;
Sheet.Description = Dialog.Description;
Sheet.Body = Dialog.Body;
Sheet.Close = Dialog.Close;
const NavbarContext = React.createContext(null);
function useNavbar() {
  const context = React.useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a Navbar.");
  }
  return context;
}
const navbarStyles = tv({
  base: "relative isolate flex w-full min-h-svh flex-col",
  variants: {
    intent: {
      floating: "pt-2 px-2.5",
      navbar: "",
      inset: "bg-secondary dark:bg-bg"
    }
  }
});
const Navbar = ({
  children,
  isOpen: openProp,
  onOpenChange: setOpenProp,
  defaultOpen = false,
  className,
  side = "left",
  isSticky = false,
  intent = "navbar",
  ...props
}) => {
  const isCompact = useMediaQuery("(max-width: 1023px)");
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value) => {
      if (setOpenProp) {
        return setOpenProp == null ? void 0 : setOpenProp(typeof value === "function" ? value(open) : value);
      }
      _setOpen(value);
    },
    [setOpenProp, open]
  );
  const toggleNavbar = React.useCallback(() => {
    setOpen((open2) => !open2);
  }, [setOpen]);
  const contextValue = React.useMemo(
    () => ({
      open,
      setOpen,
      isCompact,
      toggleNavbar,
      intent,
      isSticky,
      side
    }),
    [open, setOpen, isCompact, toggleNavbar, intent, isSticky, side]
  );
  return /* @__PURE__ */ jsx(NavbarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx("header", { "data-intent": intent, className: navbarStyles({ intent, className }), ...props, children }) });
};
const navStyles = tv({
  base: [
    "hidden h-[--navbar-height] [--navbar-height:3.5rem] px-4 group peer lg:flex items-center w-full",
    "[&>div]:max-w-[1680px] lg:[&>div]:flex [&>div]:items-center [&>div]:w-full [&>div]:mx-auto"
  ],
  variants: {
    isSticky: {
      true: "sticky z-40 top-0"
    },
    intent: {
      floating: "bg-tertiary w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto shadow-sm border rounded-xl sm:px-4",
      navbar: "bg-tertiary shadow-sm border-b sm:px-6",
      inset: [
        "bg-secondary mx-auto dark:bg-bg sm:px-6",
        "2xl:[&>div]:max-w-screen-2xl lg:[&>div]:flex [&>div]:items-center [&>div]:w-full [&>div]:mx-auto"
      ]
    }
  }
});
const Nav = ({ className, ...props }) => {
  const { isCompact, side, intent, isSticky, open, setOpen } = useNavbar();
  if (isCompact) {
    return /* @__PURE__ */ jsx(Sheet, { isOpen: open, onOpenChange: setOpen, ...props, children: /* @__PURE__ */ jsx(
      Sheet.Content,
      {
        side,
        "aria-label": "Compact Navbar",
        "data-navbar": "compact",
        classNames: {
          content: "text-fg [&>button]:hidden"
        },
        isStack: intent === "floating",
        children: /* @__PURE__ */ jsx(Sheet.Body, { className: "sm:px-4 px-2", children: props.children })
      }
    ) });
  }
  return /* @__PURE__ */ jsx("div", { className: navStyles({ isSticky, intent, className }), ...props, children: /* @__PURE__ */ jsx("div", { children: props.children }) });
};
const Trigger$1 = ({ className, onPress, ...props }) => {
  const { toggleNavbar } = useNavbar();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      "data-sidebar": "trigger",
      appearance: "plain",
      "aria-label": props["aria-label"] || "Toggle Navbar",
      size: "square-petite",
      className,
      onPress: (event) => {
        onPress == null ? void 0 : onPress(event);
        toggleNavbar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx(IconHamburger, {}),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Navbar" })
      ]
    }
  );
};
const Section = ({ className, ...props }) => {
  const { isCompact } = useNavbar();
  const id = React.useId();
  return /* @__PURE__ */ jsx(LayoutGroup, { id, children: /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "navbar-section",
      className: cn$1("flex", isCompact ? "flex-col gap-y-4" : "flex-row gap-x-3 items-center", className),
      ...props,
      children: props.children
    }
  ) });
};
const navItemStyles = tv({
  base: [
    "relative cursor-pointer lg:text-sm px-2 flex forced-colors:outline-0 items-center gap-x-2 [&>[data-slot=icon]]:-mx-0.5 text-muted-fg outline-none forced-colors:disabled:text-[GrayText] forced-colors:transform-none transition-colors",
    "hover:text-fg focus:text-fg pressed:text-fg focus-visible:outline-1 focus-visible:outline-primary",
    "disabled:opacity-60 disabled:cursor-default",
    "[&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:shrink-0"
  ],
  variants: {
    isCurrent: {
      true: "text-fg"
    }
  }
});
const Item$1 = ({ className, isCurrent, ...props }) => {
  const { intent, isCompact } = useNavbar();
  return /* @__PURE__ */ jsx(
    Link$1,
    {
      slot: "navbar-item",
      "aria-current": isCurrent ? "page" : void 0,
      className: composeRenderProps(
        className,
        (className2, ...renderProps) => navItemStyles({ ...renderProps, isCurrent, className: className2 })
      ),
      ...props,
      children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
        typeof props.children === "function" ? props.children(values) : props.children,
        (isCurrent || values.isCurrent) && !isCompact && intent !== "floating" && /* @__PURE__ */ jsx(
          motion.span,
          {
            layoutId: "current-indicator",
            className: "absolute inset-x-2 bottom-[calc(var(--navbar-height)*-0.33)] h-0.5 rounded-full bg-fg"
          }
        )
      ] })
    }
  );
};
const Logo = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link$1,
    {
      className: cn$1(
        "lg:mr-4 focus:outline-none flex items-center gap-x-2 focus-visible:outline-1 focus-visible:outline-primary px-2 py-4 lg:px-0 lg:py-0 text-fg",
        className
      ),
      ...props
    }
  );
};
const Flex = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx("div", { className: cn$1("flex items-center gap-2 sm:gap-3", className), ...props });
};
const compactStyles = tv({
  base: "lg:hidden flex peer-has-[[data-intent=floating]]:border bg-tertiary justify-between",
  variants: {
    intent: {
      floating: "border h-12 rounded-lg px-3.5",
      inset: "h-14 px-4",
      navbar: "h-14 border-b px-4"
    }
  }
});
const Compact = ({ className, ...props }) => {
  const { intent } = useNavbar();
  return /* @__PURE__ */ jsx("div", { className: compactStyles({ intent, className }), ...props });
};
const insetStyles = tv({
  base: "grow",
  variants: {
    intent: {
      floating: "",
      inset: "bg-tertiary lg:rounded-lg lg:shadow-sm lg:ring-1 lg:ring-dark/5 lg:dark:ring-light/10",
      navbar: ""
    }
  }
});
const Inset = ({ className, ...props }) => {
  const { intent } = useNavbar();
  return /* @__PURE__ */ jsx(
    "main",
    {
      "data-intent": intent,
      className: cn$1("flex flex-1 flex-col", intent === "inset" && "pb-2 lg:px-2", className),
      children: /* @__PURE__ */ jsx("div", { className: insetStyles({ intent, className }), children: props.children })
    }
  );
};
Navbar.Nav = Nav;
Navbar.Inset = Inset;
Navbar.Compact = Compact;
Navbar.Flex = Flex;
Navbar.Trigger = Trigger$1;
Navbar.Logo = Logo;
Navbar.Item = Item$1;
Navbar.Section = Section;
const paginationStyles = tv({
  slots: {
    pagination: "mx-auto flex w-full justify-center gap-[5px]",
    section: "flex h-9 gap-[5px]",
    list: "flex flex-row items-center gap-[5px]",
    itemButton: "focus-visible:border-primary text-fg font-normal cursor-pointer focus-visible:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary/20",
    itemLabel: "h-9 px-3.5 tabular-nums grid place-content-center",
    itemSeparator: "h-9 grid place-content-center",
    itemEllipsis: "flex items-center justify-center focus-visible:border-primary rounded-lg border border-transparent focus:outline-none size-9 focus-visible:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary/20",
    itemEllipsisIcon: "flex size-9 items-center justify-center",
    defaultItem: "focus-visible:border-primary tabular-nums font-normal cursor-pointer disabled:cursor-default focus-visible:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary/20 disabled:opacity-100",
    itemSeparatorLine: "h-5 w-[1.5px] bg-secondary-fg/40 rotate-[14deg] shrink-0"
  }
});
const {
  pagination,
  section,
  list,
  itemButton,
  itemLabel,
  itemSeparator,
  itemEllipsis,
  itemEllipsisIcon,
  defaultItem,
  itemSeparatorLine
} = paginationStyles();
const Pagination = ({ className, ...props }) => /* @__PURE__ */ jsx("nav", { role: "navigation", "aria-label": "pagination", className: pagination({ className }), ...props });
const PaginationSection = ({ className, ...props }) => /* @__PURE__ */ jsx(Section$2, { ...props, className: section({ className }) });
const List$1 = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(
    ListBox$1,
    {
      orientation: "horizontal",
      "aria-label": props["aria-label"] || "Pagination",
      layout: "grid",
      className: composeRenderProps(className, (className2) => list({ className: className2 })),
      ...props
    }
  );
};
const renderListItem = (props, children) => /* @__PURE__ */ jsx(ListBoxItem$1, { ...props, children });
const Item = ({
  variant = "default",
  size = "small",
  appearance = "outline",
  intent,
  className,
  isCurrent,
  children,
  ...props
}) => {
  const textValue = typeof children === "string" ? children : typeof children === "number" ? children.toString() : void 0;
  const renderPaginationIndicator = (indicator) => renderListItem(
    {
      textValue: variant,
      "aria-current": isCurrent ? "page" : void 0,
      isDisabled: isCurrent,
      className: cn$1(
        buttonStyles({
          appearance: "outline",
          size: "small",
          className: itemButton()
        }),
        className
      ),
      ...props
    },
    indicator
  );
  switch (variant) {
    case "label":
      return renderListItem(
        {
          textValue,
          className: itemLabel({ className }),
          ...props
        },
        children
      );
    case "separator":
      return renderListItem(
        {
          textValue: "Separator",
          className: itemSeparator({ className }),
          ...props
        },
        /* @__PURE__ */ jsx(Separator$1, { orientation: "vertical", className: itemSeparatorLine() })
      );
    case "ellipsis":
      return renderListItem(
        {
          textValue: "More pages",
          className: itemEllipsis({ className }),
          ...props
        },
        /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: itemEllipsisIcon({ className }), children: /* @__PURE__ */ jsx(IconDotsHorizontal, {}) })
      );
    case "previous":
      return renderPaginationIndicator(/* @__PURE__ */ jsx(IconChevronLgLeft, {}));
    case "next":
      return renderPaginationIndicator(/* @__PURE__ */ jsx(IconChevronLgRight, {}));
    case "first":
      return renderPaginationIndicator(/* @__PURE__ */ jsx(IconChevronsLgLeft, {}));
    case "last":
      return renderPaginationIndicator(/* @__PURE__ */ jsx(IconChevronsLgRight, {}));
    default:
      return renderListItem(
        {
          textValue,
          "aria-current": isCurrent ? "page" : void 0,
          isDisabled: isCurrent,
          className: cn$1(
            buttonStyles({
              intent: isCurrent ? "primary" : intent,
              appearance: isCurrent ? "solid" : appearance,
              size,
              className: defaultItem({ className })
            }),
            className
          ),
          ...props
        },
        children
      );
  }
};
Pagination.Item = Item;
Pagination.List = List$1;
Pagination.Section = PaginationSection;
const selectTriggerStyles = tv({
  extend: focusStyles,
  base: [
    "btr group-disabled:bg-secondary [&_[data-slot=icon]]:size-4 group-disabled:opacity-50 focus-visible:border-ring/85 focus-visible:ring-4 focus-visible:ring-primary/20 group-open:border-ring/85 group-open:ring-4 group-open:ring-ring/20 flex h-10 w-full cursor-default items-center gap-4 rounded-lg border border-input bg-bg py-2 pl-3 pr-2 text-start shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition dark:shadow-none"
  ],
  variants: {
    isDisabled: {
      false: "text-fg group-invalid:border-danger group-invalid:ring-danger/20 forced-colors:group-invalid:border-[Mark]",
      true: "bg-secondary text-muted-fg forced-colors:border-[GrayText] forced-colors:text-[GrayText]"
    }
  }
});
const Select = ({
  label: label2,
  description: description2,
  errorMessage,
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(Select$1, { ...props, className: composeTailwindRenderProps(className, "group flex w-full flex-col gap-y-1.5"), children: [
    label2 && /* @__PURE__ */ jsx(Label, { children: label2 }),
    /* @__PURE__ */ jsx(Fragment, { children }),
    description2 && /* @__PURE__ */ jsx(Description$1, { children: description2 }),
    /* @__PURE__ */ jsx(FieldError, { children: errorMessage })
  ] });
};
const List = ({ className, children, items, placement }) => {
  return /* @__PURE__ */ jsx(Popover.Picker, { className, trigger: "Select", placement, children: /* @__PURE__ */ jsx(ListBox.Picker, { "aria-label": "items", items, children }) });
};
const Trigger = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxs(
    Button$1,
    {
      className: composeRenderProps(
        className,
        (className2, renderProps) => selectTriggerStyles({
          ...renderProps,
          className: className2
        })
      ),
      children: [
        props.prefix && /* @__PURE__ */ jsx("span", { className: "-mr-1", children: props.prefix }),
        /* @__PURE__ */ jsx(SelectValue, { className: "flex-1 [&_[slot=description]]:hidden text-base placeholder-shown:text-muted-fg lg:text-sm" }),
        /* @__PURE__ */ jsx(
          IconChevronLgDown,
          {
            "aria-hidden": true,
            className: "text-muted-fg shrink-0 size-4 duration-300 group-open:rotate-180 group-open:text-fg group-disabled:opacity-50 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
          }
        )
      ]
    }
  );
};
Select.OptionDetails = DropdownItemDetails;
Select.Option = DropdownItem;
Select.Section = DropdownSection;
Select.Trigger = Trigger;
Select.List = List;
const separatorStyles = tv({
  base: "bg-border shrink-0 forced-colors:bg-[ButtonBorder]",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
function Separator({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Separator$1,
    {
      ...props,
      className: separatorStyles({
        orientation: props.orientation,
        className
      })
    }
  );
}
const table = tv({
  slots: {
    root: "table [&_[data-drop-target]]:border [&_[data-drop-target]]:border-primary w-full caption-bottom border-spacing-0 text-sm outline-none",
    header: "border-b x32",
    row: "tr group relative cursor-default border-b text-fg/70 outline-none ring-primary focus-visible:ring-1 selected:bg-accent-subtle selected:hover:bg-accent-subtle/50 dark:selected:hover:bg-accent-subtle/60",
    cellIcon: "flex-none rounded bg-secondary text-fg [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:size-3.5 [&>[data-slot=icon]]:transition-transform [&>[data-slot=icon]]:duration-200 size-[1.15rem] grid place-content-center shrink-0",
    columnResizer: [
      "touch-none absolute [&[data-resizing]>div]:bg-primary right-0 top-0 bottom-0 w-px px-1 grid place-content-center",
      "[&[data-resizable-direction=both]]:cursor-ew-resize &[data-resizable-direction=left]:cursor-e-resize &[data-resizable-direction=right]:cursor-w-resize"
    ]
  }
});
const { root, header, row, cellIcon, columnResizer } = table();
const TableContext = React__default.createContext({
  allowResize: false
});
const useTableContext = () => React__default.useContext(TableContext);
const Table = ({ children, className, ...props }) => /* @__PURE__ */ jsx(TableContext.Provider, { value: props, children: /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: props.allowResize ? /* @__PURE__ */ jsx(ResizableTableContainer, { className: "overflow-auto", children: /* @__PURE__ */ jsx(Table$1, { ...props, className: root({ className }), children }) }) : /* @__PURE__ */ jsx(Table$1, { ...props, className: root({ className }), children }) }) });
const ColumnResizer = ({ className, ...props }) => /* @__PURE__ */ jsx(
  ColumnResizer$1,
  {
    ...props,
    className: composeRenderProps(
      className,
      (className2, renderProps) => columnResizer({
        ...renderProps,
        className: className2
      })
    ),
    children: /* @__PURE__ */ jsx("div", { className: "bg-border h-full w-px py-3" })
  }
);
const Body = (props) => /* @__PURE__ */ jsx(TableBody, { ...props, className: cn$1("[&_.tr:last-child]:border-0") });
const cellStyles = tv({
  base: "group px-3 py-3 outline-none",
  variants: {
    allowResize: {
      true: "overflow-hidden truncate"
    }
  }
});
const TableCell = ({ children, className, ...props }) => {
  const { allowResize } = useTableContext();
  return /* @__PURE__ */ jsx(Cell, { ...props, className: cellStyles({ allowResize, className }), children });
};
const columnStyles = tv({
  base: "whitespace-nowrap relative allows-sorting:cursor-pointer px-3 py-3 text-left dragging:cursor-grabbing font-medium outline-none [&:has([slot=selection])]:pr-0",
  variants: {
    isResizable: {
      true: "overflow-hidden truncate"
    }
  }
});
const TableColumn = ({ children, isResizable = false, className, ...props }) => {
  return /* @__PURE__ */ jsx(
    Column,
    {
      ...props,
      className: columnStyles({
        isResizable,
        className
      }),
      children: ({ allowsSorting, sortDirection, isHovered }) => /* @__PURE__ */ jsx("div", { className: "flex [&_[data-slot=icon]]:shrink-0 items-center gap-2", children: /* @__PURE__ */ jsxs(Fragment, { children: [
        children,
        allowsSorting && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("span", { className: cellIcon({ className: isHovered ? "bg-secondary-fg/10" : "" }), children: /* @__PURE__ */ jsx(IconChevronLgDown, { className: sortDirection === "ascending" ? "rotate-180" : "" }) }) }),
        isResizable && /* @__PURE__ */ jsx(ColumnResizer, {})
      ] }) })
    }
  );
};
const Header = ({ children, className, columns, ...props }) => {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();
  return /* @__PURE__ */ jsxs(TableHeader, { ...props, className: header({ className }), children: [
    allowsDragging && /* @__PURE__ */ jsx(Column, { className: "w-0" }),
    selectionBehavior === "toggle" && /* @__PURE__ */ jsx(Column, { className: "pl-4 w-0", children: selectionMode === "multiple" && /* @__PURE__ */ jsx(Checkbox$1, { slot: "selection" }) }),
    /* @__PURE__ */ jsx(Collection, { items: columns, children })
  ] });
};
const TableRow = ({ children, className, columns, id, ...props }) => {
  const { selectionBehavior, allowsDragging } = useTableOptions();
  return /* @__PURE__ */ jsxs(
    Row,
    {
      id,
      ...props,
      className: row({
        className: "href" in props ? cn$1("cursor-pointer hover:bg-secondary/50", className) : ""
      }),
      children: [
        allowsDragging && /* @__PURE__ */ jsx(Cell, { className: "ring-primary pr-0 group cursor-grab dragging:cursor-grabbing", children: /* @__PURE__ */ jsx(Button$1, { className: "relative bg-transparent pl-3.5 py-1.5 text-muted-fg pressed:text-fg", slot: "drag", children: /* @__PURE__ */ jsx(IconHamburger, {}) }) }),
        selectionBehavior === "toggle" && /* @__PURE__ */ jsxs(Cell, { className: "pl-4", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": true,
              className: "absolute inset-y-0 left-0 hidden h-full w-0.5 bg-primary group-selected:block"
            }
          ),
          /* @__PURE__ */ jsx(Checkbox$1, { slot: "selection" })
        ] }),
        /* @__PURE__ */ jsx(Collection, { items: columns, children })
      ]
    }
  );
};
Table.Body = Body;
Table.Cell = TableCell;
Table.Column = TableColumn;
Table.Header = Header;
Table.Row = TableRow;
const loaderStyles = tv({
  base: "relative",
  variants: {
    intent: {
      current: "text-current",
      primary: "text-primary",
      secondary: "text-muted-fg",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger"
    },
    size: {
      small: "size-4",
      medium: "size-6",
      large: "size-8",
      "extra-large": "size-10"
    }
  },
  defaultVariants: {
    intent: "current",
    size: "small"
  }
});
const Bars = ({ className, ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className: cn$1("size-4", className),
    "data-slot": "icon",
    viewBox: "0 0 135 140",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ...props,
    children: [
      /* @__PURE__ */ jsxs("rect", { y: "10", width: "15", height: "120", rx: "6", children: [
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "height",
            begin: "0.5s",
            dur: "1s",
            values: "120;110;100;90;80;70;60;50;40;140;120",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "y",
            begin: "0.5s",
            dur: "1s",
            values: "10;15;20;25;30;35;40;45;50;0;10",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("rect", { x: "30", y: "10", width: "15", height: "120", rx: "6", children: [
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "height",
            begin: "0.25s",
            dur: "1s",
            values: "120;110;100;90;80;70;60;50;40;140;120",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "y",
            begin: "0.25s",
            dur: "1s",
            values: "10;15;20;25;30;35;40;45;50;0;10",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("rect", { x: "60", width: "15", height: "140", rx: "6", children: [
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "height",
            begin: "0s",
            dur: "1s",
            values: "120;110;100;90;80;70;60;50;40;140;120",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "y",
            begin: "0s",
            dur: "1s",
            values: "10;15;20;25;30;35;40;45;50;0;10",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("rect", { x: "90", y: "10", width: "15", height: "120", rx: "6", children: [
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "height",
            begin: "0.25s",
            dur: "1s",
            values: "120;110;100;90;80;70;60;50;40;140;120",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "y",
            begin: "0.25s",
            dur: "1s",
            values: "10;15;20;25;30;35;40;45;50;0;10",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("rect", { x: "120", y: "10", width: "15", height: "120", rx: "6", children: [
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "height",
            begin: "0.5s",
            dur: "1s",
            values: "120;110;100;90;80;70;60;50;40;140;120",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "y",
            begin: "0.5s",
            dur: "1s",
            values: "10;15;20;25;30;35;40;45;50;0;10",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        )
      ] })
    ]
  }
);
const Ring = (props) => /* @__PURE__ */ jsx(IconLoader, { ...props });
const Spin = ({ className, ...props }) => /* @__PURE__ */ jsx("svg", { className: cn$1("size-4", className), "data-slot": "icon", viewBox: "0 0 2400 2400", ...props, children: /* @__PURE__ */ jsxs("g", { strokeWidth: "200", strokeLinecap: "round", fill: "none", children: [
  /* @__PURE__ */ jsx("line", { x1: "1200", y1: "600", x2: "1200", y2: "100" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.5", x1: "1200", y1: "2300", x2: "1200", y2: "1800" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.917", x1: "900", y1: "680.4", x2: "650", y2: "247.4" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.417", x1: "1750", y1: "2152.6", x2: "1500", y2: "1719.6" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.833", x1: "680.4", y1: "900", x2: "247.4", y2: "650" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.333", x1: "2152.6", y1: "1750", x2: "1719.6", y2: "1500" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.75", x1: "600", y1: "1200", x2: "100", y2: "1200" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.25", x1: "2300", y1: "1200", x2: "1800", y2: "1200" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.667", x1: "680.4", y1: "1500", x2: "247.4", y2: "1750" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.167", x1: "2152.6", y1: "650", x2: "1719.6", y2: "900" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.583", x1: "900", y1: "1719.6", x2: "650", y2: "2152.6" }),
  /* @__PURE__ */ jsx("line", { opacity: "0.083", x1: "1750", y1: "247.4", x2: "1500", y2: "680.4" }),
  /* @__PURE__ */ jsx(
    "animateTransform",
    {
      attributeName: "transform",
      attributeType: "XML",
      type: "rotate",
      keyTimes: "0;0.08333;0.16667;0.25;0.33333;0.41667;0.5;0.58333;0.66667;0.75;0.83333;0.91667",
      values: "0 1199 1199;30 1199 1199;60 1199 1199;90 1199 1199;120 1199 1199;150 1199 1199;180 1199 1199;210 1199 1199;240 1199 1199;270 1199 1199;300 1199 1199;330 1199 1199",
      dur: "0.83333s",
      begin: "0.08333s",
      repeatCount: "indefinite",
      calcMode: "discrete"
    }
  )
] }) });
const LOADERS = {
  bars: Bars,
  ring: Ring,
  spin: Spin
};
const DEFAULT_SPINNER = "ring";
const Loader = React.forwardRef(({ isIndeterminate = true, ...props }, ref) => {
  const { className, variant = DEFAULT_SPINNER, intent, size, ...spinnerProps } = props;
  const LoaderPrimitive = LOADERS[variant in LOADERS ? variant : DEFAULT_SPINNER];
  return /* @__PURE__ */ jsx(
    ProgressBar,
    {
      "aria-label": props["aria-label"] ?? "Loading...",
      formatOptions: props.formatOptions,
      isIndeterminate,
      children: /* @__PURE__ */ jsx(
        LoaderPrimitive,
        {
          role: "presentation",
          className: loaderStyles({
            intent,
            size,
            className: cn$1([
              ["ring"].includes(variant) && "animate-spin",
              variant === "spin" && "stroke-current",
              className
            ])
          }),
          ref,
          ...spinnerProps
        }
      )
    }
  );
});
Loader.displayName = "Loader";
const textareaStyles = tv({
  extend: focusStyles,
  base: "w-full min-w-0 rounded-lg border border-input bg-bg px-2.5 py-2 text-base shadow-sm outline-none transition duration-200 disabled:bg-secondary disabled:opacity-50 sm:text-sm"
});
const TextArea = ({ className, placeholder, label: label2, description: description2, errorMessage, ...props }) => {
  return /* @__PURE__ */ jsxs(TextField, { ...props, className: composeTailwindRenderProps(className, "group flex flex-col gap-y-1.5"), children: [
    label2 && /* @__PURE__ */ jsx(Label, { children: label2 }),
    /* @__PURE__ */ jsx(
      TextArea$1,
      {
        placeholder,
        className: composeRenderProps(
          className,
          (className2, renderProps) => textareaStyles({
            ...renderProps,
            className: className2
          })
        )
      }
    ),
    description2 && /* @__PURE__ */ jsx(Description$1, { children: description2 }),
    /* @__PURE__ */ jsx(FieldError, { children: errorMessage })
  ] });
};
const initialState = {
  theme: "system",
  setTheme: () => null
};
const ThemeProviderContext = React.createContext(initialState);
const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);
  if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
tv({
  base: [
    "group rounded-lg [&_strong]:font-medium border px-3 py-1.5 text-sm will-change-transform dark:shadow-none",
    "placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1"
  ],
  variants: {
    intent: {
      default: "bg-overlay text-overlay-fg [&_.arx]:fill-overlay [&_.arx]:stroke-border",
      inverse: "border-transparent bg-dark dark:[&_.text-muted-fg]:text-dark/70 [&_.text-muted-fg]:text-light/70 text-light dark:bg-light dark:text-dark dark:[&_.arx]:fill-light [&_.arx]:fill-dark [&_.arx]:stroke-transparent"
    },
    isEntering: {
      true: "animate-in fade-in"
    },
    isExiting: {
      true: "animate-in fade-in direction-reverse"
    }
  },
  defaultVariants: {
    intent: "default"
  }
});
export {
  Avatar as A,
  Button as B,
  Container as C,
  Description$1 as D,
  FieldGroup as F,
  Grid as G,
  Input as I,
  Label as L,
  MultipleSelect as M,
  Navbar as N,
  Pagination as P,
  Select as S,
  TextArea as T,
  Card as a,
  Table as b,
  Menu as c,
  Checkbox$1 as d,
  Link as e,
  buttonStyles as f,
  cn$1 as g,
  Separator as h,
  Loader as i,
  Modal as j,
  fieldGroupPrefixStyles as k,
  FieldError as l,
  composeTailwindRenderProps as m,
  useTheme as u
};
