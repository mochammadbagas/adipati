import{r as h,W as y,j as e}from"./app-BYp-eQj0.js";import{a as r,H as s,B as o}from"./tooltip-DkUY4b1Q.js";import{T as j}from"./text-field-BxFzu0JU.js";function g(){const[m,n]=h.useState(!1),{data:l,setData:a,delete:d,processing:i,reset:t,errors:c}=y({password:""}),u=()=>{d(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>p(),onFinish:()=>t()})},p=()=>{n(!1),t()};return e.jsxs(r,{children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Delete Account"}),e.jsx(r.Description,{children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsx(r.Content,{children:e.jsxs(s,{children:[e.jsx(o,{intent:"danger",children:"Delete Account"}),e.jsxs(s.Content,{children:[e.jsxs(s.Header,{children:[e.jsx(s.Title,{children:"Delete Account"}),e.jsx(s.Description,{children:"Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."})]}),e.jsx(s.Body,{children:e.jsx(j,{type:"password",placeholder:"Password",value:l.password,onChange:x=>a("password",x),errorMessage:c.password,isRequired:!0})}),e.jsxs(s.Footer,{children:[e.jsx(s.Close,{children:"Cancel"}),e.jsx(o,{intent:"danger",type:"submit",onPress:u,isDisabled:i,children:"Continue"})]})]})]})})]})}export{g as DeleteUserForm};
