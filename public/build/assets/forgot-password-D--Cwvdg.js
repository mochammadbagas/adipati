import{W as n,j as e,Y as d}from"./app-B2ca1LDr.js";import{B as u}from"./tooltip-lHw-z-2b.js";import{F as c}from"./form-DJDvpzZ9.js";import{T as p}from"./text-field-DkpDGKOe.js";import{G as x}from"./guest-layout-D5dyRtCZ.js";import"./flash-message-DK496Ji0.js";import"./logo-MXse2nph.js";function w({status:s}){const{data:r,setData:a,post:i,processing:m,errors:t}=n({email:""}),l=o=>{o.preventDefault(),i("/forgot-password")};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Forgot Password"}),s&&e.jsx("div",{className:"mb-4 text-sm font-medium text-success",children:s}),e.jsxs(c,{validationErrors:t,onSubmit:l,children:[e.jsx(p,{type:"text",name:"email",value:r.email,isRequired:!0,errorMessage:t.email,autoFocus:!0,onChange:o=>a("email",o)}),e.jsx("div",{className:"mt-4 flex items-center justify-end",children:e.jsx(u,{type:"submit",className:"ml-4",isDisabled:m,children:"Email Password Reset Link"})})]})]})}w.layout=s=>e.jsx(x,{header:"Forgot Password",description:`
                    Forgot your password? No problem. Just let us know your email address and we will email you a password
                    reset link that will allow you to choose a new one.`,children:s});export{w as default};