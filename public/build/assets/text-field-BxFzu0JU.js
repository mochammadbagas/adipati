import{r as m,j as s}from"./app-BYp-eQj0.js";import{K as g,L as h,O as y,I as v,Q as w,R as T,U as $,z as E,V as I,W as P,X as F,Y as N}from"./tooltip-DkUY4b1Q.js";const L=({placeholder:d,label:e,description:a,errorMessage:c,prefix:r,suffix:t,isPending:o,className:i,isRevealable:l,type:x,...p})=>{const[n,u]=m.useState(!1),f=l?n?"text":"password":x,j=()=>{u(b=>!b)};return s.jsxs(g,{type:f,...p,className:N(i,"group flex flex-col gap-y-1.5"),children:[e&&s.jsx(h,{children:e}),s.jsxs(y,{"data-loading":o?"true":void 0,className:I({className:i}),children:[r?s.jsx("span",{"data-slot":"prefix",className:"atrs x2e2",children:r}):null,s.jsx(v,{placeholder:d}),l?s.jsx(w,{type:"button","aria-label":"Toggle password visibility",onPress:j,className:"atrs relative [&>[data-slot=icon]]:text-muted-fg focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded",children:s.jsx(s.Fragment,{children:n?s.jsx(T,{}):s.jsx($,{})})}):o?s.jsx(E,{variant:"spin","data-slot":"suffix"}):t?s.jsx("span",{"data-slot":"suffix",className:"atrs x2e2",children:t}):null]}),a&&s.jsx(P,{children:a}),s.jsx(F,{children:c})]})};export{L as T};
