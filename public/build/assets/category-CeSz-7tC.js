import{q as o,j as e,Y as m,a as i}from"./app-BYp-eQj0.js";import{C as c,a as l,S as h,P as s}from"./tooltip-DkUY4b1Q.js";import{A as j}from"./app-layout-bBWUUIcA.js";import"./flash-message-EEnTQ1J0.js";function g(t){const{data:d,meta:n,links:a}=t.data,{categoriesArticle:x}=o().props;return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Article Category"}),e.jsx("div",{className:"py-6 bg-bg sm:py-12 border-b mb-12",children:e.jsxs(c,{children:[e.jsx("h1",{className:"text-xl sm:text-2xl font-semibold tracking-tight",children:t.category.name}),e.jsxs("div",{className:"flex gap-4 mt-6",children:[e.jsx(i,{href:route("article"),className:"hover:text-blue-500 text-sm",children:"All"}),x.map(r=>e.jsx(i,{href:route("article.category",r.slug),className:"hover:text-blue-500 text-sm",children:r.name},r.slug))]})]})}),e.jsxs(c,{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:d.map(r=>e.jsxs(l,{children:[e.jsx("div",{className:"px-6 pt-6",children:e.jsx("div",{className:"size-8 grid place-content-center rounded-full border",children:e.jsx(h,{})})}),e.jsxs(l.Header,{children:[e.jsx(l.Title,{children:e.jsx(i,{href:route("article.show",r.slug),children:r.title})}),e.jsx(l.Description,{children:r.teaser})]})]},r.slug))}),e.jsx(s,{children:e.jsxs(s.List,{children:[e.jsx(s.Item,{variant:"first",href:a.first}),e.jsx(s.Item,{variant:"previous",href:a.prev}),e.jsxs(s.Section,{"aria-label":"Pagination Segment",className:"rounded-lg border",children:[e.jsx(s.Item,{variant:"label",children:n.current_page}),e.jsx(s.Item,{variant:"separator"}),e.jsx(s.Item,{className:"text-muted-fg",variant:"label",children:n.last_page})]}),e.jsx(s.Item,{variant:"next",href:a.next}),e.jsx(s.Item,{variant:"last",href:a.last})]})})]})]})}g.layout=t=>e.jsx(j,{children:t});export{g as default};
