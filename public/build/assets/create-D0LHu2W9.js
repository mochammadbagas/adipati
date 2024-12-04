import{q as j,W as b,r as y,j as e,Y as f}from"./app-DYfeufBd.js";import{H as C}from"./header-BzK8sMAB.js";import{A as T}from"./app-layout-DK1lex0x.js";import{$ as v,C as S,a as s,L as N,I as F,b as l,M as n,T as A,B as M,t as d}from"./tooltip-CnhG7ZFb.js";import{F as q}from"./form-_I0Nxj6P.js";import{T as u}from"./text-field-BeQ9U-Y7.js";import"./flash-message-_Sv-lsg1.js";function E(){const{categoriesArticle:o,articleTags:m}=j().props,c=v({initialItems:[]}),{data:i,setData:r,post:p,processing:x,reset:g,errors:a}=b({title:"",teaser:"",body:"",picture:null,article_tags:[],articleCategory_id:""});y.useEffect(()=>{r("article_tags",c.items.map(t=>t.id))},[c.items]);const h=t=>{t.preventDefault(),p(route("article.store",i),{preserveScroll:!0,onSuccess:()=>{d.success("Artikel anda sukses dibuat."),g()},onError:()=>{d.error("Gagal")}})};return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Create Article"}),e.jsx(C,{title:"Create Article"}),e.jsx(S,{children:e.jsxs(s,{className:"p-6",children:[e.jsxs(s.Header,{children:[e.jsx(s.Title,{children:"Share Your Story Today!"}),e.jsx(s.Description,{children:"Create compelling articles that inspire, inform, and engage—it's quick, simple, and impactful. Start now!"})]}),e.jsx(s.Content,{className:"space-y-6",children:e.jsxs(q,{onSubmit:h,validationErrors:a,className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-[6px]",children:[e.jsx(N,{htmlFor:"picture",children:"Thumbnail"}),e.jsx(F,{className:"border border-input rounded-lg hover:bg-neutral-900 py-[6px]",type:"file",onChange:t=>r("picture",t.target.files?t.target.files[0]:null)})]}),e.jsxs(l,{label:"Category",placeholder:"Select a category",errorMessage:a.articleCategory_id,onSelectionChange:t=>r("articleCategory_id",t),children:[e.jsx(l.Trigger,{}),e.jsx(l.List,{items:o,children:t=>e.jsx(l.Option,{id:t.id,textValue:t.name,value:t.id,children:t.name})})]}),e.jsx(n,{label:"Tag",selectedItems:c,items:m,tag:t=>e.jsx(n.Tag,{textValue:t.name,children:t.name},t.id),children:t=>e.jsx(n.Option,{textValue:t.name,children:t.name},t.id)})]}),e.jsx(u,{id:"title",label:"Title",value:i.title,type:"text",className:"mt-1",autoFocus:!0,onChange:t=>r("title",t),errorMessage:a.title,autoComplete:"title",isRequired:!0}),e.jsx(u,{id:"teaser",label:"Teaser",value:i.teaser,type:"text",className:"mt-1",autoFocus:!0,onChange:t=>r("teaser",t),errorMessage:a.teaser,autoComplete:"teaser",isRequired:!0}),e.jsx(A,{id:"body",label:"Body",value:i.body,type:"text",className:"mt-1",autoFocus:!0,onChange:t=>r("body",t),errorMessage:a.body,autoComplete:"body",isRequired:!0}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(M,{type:"submit",isDisabled:x,children:"Submit"})})]})})]})})]})}E.layout=o=>e.jsx(T,{children:o});export{E as default};