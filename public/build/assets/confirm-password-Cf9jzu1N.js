import{W as d,r as l,j as s,Y as p}from"./app-BYp-eQj0.js";import{B as u}from"./tooltip-DkUY4b1Q.js";import{F as c}from"./form-Cbz4u6tb.js";import{T as f}from"./text-field-BxFzu0JU.js";import{G as x}from"./guest-layout-BudFi1bN.js";import"./flash-message-EEnTQ1J0.js";import"./logo-vqddoVDU.js";function w(){const{data:r,setData:t,post:e,processing:a,errors:i,reset:n}=d({password:""});l.useEffect(()=>()=>{n("password")},[]);const m=o=>{o.preventDefault(),e(route("password.confirm"))};return s.jsxs(s.Fragment,{children:[s.jsx(p,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-muted-fg",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs(c,{validationErrors:i,onSubmit:m,children:[s.jsx(f,{id:"password",label:"Password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoFocus:!0,onChange:o=>t("password",o)}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(u,{isDisabled:a,children:"Confirm"})})]})]})}w.layout=r=>s.jsx(x,{children:r});export{w as default};
