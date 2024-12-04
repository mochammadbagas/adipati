import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { IconEyeClosed, IconEye } from "justd-icons";
import { TextField as TextField$1, Button } from "react-aria-components";
import { L as Label, F as FieldGroup, I as Input, i as Loader, k as fieldGroupPrefixStyles, D as Description, l as FieldError, m as composeTailwindRenderProps } from "./tooltip-Cbn6jex2.js";
const TextField = ({
  placeholder,
  label,
  description,
  errorMessage,
  prefix,
  suffix,
  isPending,
  className,
  isRevealable,
  type,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const inputType = isRevealable ? isPasswordVisible ? "text" : "password" : type;
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return /* @__PURE__ */ jsxs(TextField$1, { type: inputType, ...props, className: composeTailwindRenderProps(className, "group flex flex-col gap-y-1.5"), children: [
    label && /* @__PURE__ */ jsx(Label, { children: label }),
    /* @__PURE__ */ jsxs(FieldGroup, { "data-loading": isPending ? "true" : void 0, className: fieldGroupPrefixStyles({ className }), children: [
      prefix ? /* @__PURE__ */ jsx("span", { "data-slot": "prefix", className: "atrs x2e2", children: prefix }) : null,
      /* @__PURE__ */ jsx(Input, { placeholder }),
      isRevealable ? /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          "aria-label": "Toggle password visibility",
          onPress: handleTogglePasswordVisibility,
          className: "atrs relative [&>[data-slot=icon]]:text-muted-fg focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded",
          children: /* @__PURE__ */ jsx(Fragment, { children: isPasswordVisible ? /* @__PURE__ */ jsx(IconEyeClosed, {}) : /* @__PURE__ */ jsx(IconEye, {}) })
        }
      ) : isPending ? /* @__PURE__ */ jsx(Loader, { variant: "spin", "data-slot": "suffix" }) : suffix ? /* @__PURE__ */ jsx("span", { "data-slot": "suffix", className: "atrs x2e2", children: suffix }) : null
    ] }),
    description && /* @__PURE__ */ jsx(Description, { children: description }),
    /* @__PURE__ */ jsx(FieldError, { children: errorMessage })
  ] });
};
export {
  TextField as T
};
