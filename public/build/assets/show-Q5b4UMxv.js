import{j as e,Y as c,a as d}from"./app-BYp-eQj0.js";import{C as i,a as r,S as n}from"./tooltip-DkUY4b1Q.js";import{A as o}from"./app-layout-bBWUUIcA.js";import"./flash-message-EEnTQ1J0.js";function x(l){const{data:s,related:a}=l.article;return console.log(a),e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Article"}),e.jsx("div",{className:"py-6 bg-bg sm:py-12 border-b mb-12",children:e.jsxs(i,{children:[e.jsx("h1",{className:"text-xl sm:text-2xl text-center font-semibold tracking-tight",children:s.title}),e.jsxs("h5",{className:"text-xs text-center tracking-tight",children:[s.created_at," | ",s.author.name]})]})}),e.jsx(i,{children:e.jsx("p",{className:"text-center",children:s.body})}),e.jsxs(i,{className:"mt-12",children:[e.jsx("div",{className:"mb-6",children:"Related Articles:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:a.map(t=>e.jsxs(r,{children:[e.jsx("div",{className:"px-6 pt-6",children:e.jsx("div",{className:"size-8 grid place-content-center rounded-full border",children:e.jsx(n,{})})}),e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:e.jsx(d,{href:route("article.show",t.slug),children:t.title})}),e.jsx(r.Description,{children:t.teaser})]})]},t.slug))})]})]})}x.layout=l=>e.jsx(o,{children:l});export{x as default};
