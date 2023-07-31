"use strict";(self.webpackChunkcontent=self.webpackChunkcontent||[]).push([[8418],{84210:(U,y,t)=>{t.r(y),t.d(y,{default:()=>ie});var e=t(67294),r=t(14087),x=t(185),T=t(53979),O=t(49066),a=t(80120),m=t(86896),v=t(88767),g=t(84419),n=t(42722),b=t(42866),j=t(24969),l=t(59946),o=t(11276),s=t(67819),d=t(61467),c=t(36856),f=t(29728),Z=t(63321),I=t(36773),A=t(14916),S=t(45697),u=t.n(S),R=t(87561);const Y=R.Ry().shape({options:R.Ry().shape({from:R.Ry().shape({name:R.Z_().required(a.I0.required),email:R.Z_().email(a.I0.email).required(a.I0.required)}).required(),response_email:R.Z_().email(a.I0.email),object:R.Z_().required(a.I0.required),message:R.Z_().required(a.I0.required)}).required(a.I0.required)}),W=({template:i,onToggle:p,onSubmit:E})=>{const{formatMessage:h}=(0,m.Z)();return e.createElement(b.P,{onClose:p,labelledBy:`${h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,n.OB)(i.display),defaultMessage:i.display})}`},e.createElement(j.x,null,e.createElement(Z.O,{label:`${h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,n.OB)(i.display),defaultMessage:i.display})}`},e.createElement(I.$,null,h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(I.$,{isCurrent:!0},h({id:(0,n.OB)(i.display),defaultMessage:i.display})))),e.createElement(A.J9,{onSubmit:E,initialValues:i,validateOnChange:!1,validationSchema:Y,enableReinitialize:!0},({errors:B,values:P,handleChange:C,isSubmitting:$})=>e.createElement(a.l0,null,e.createElement(l.f,null,e.createElement(o.r,{gap:5},e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:C,value:P.options.from.name,error:B?.options?.from?.name,type:"text"})),e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:C,value:P.options.from.email,error:B?.options?.from?.email,type:"text"})),e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:C,value:P.options.response_email,error:B?.options?.response_email,type:"text"})),e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:C,value:P.options.object,error:B?.options?.object,type:"text"})),e.createElement(s.P,{col:12,s:12},e.createElement(d.g,{label:h({id:(0,n.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:C,value:P.options.message,error:B?.options?.message&&h({id:B.options.message,defaultMessage:B.options.message})})))),e.createElement(c.m,{startActions:e.createElement(f.z,{onClick:p,variant:"tertiary"},"Cancel"),endActions:e.createElement(f.z,{loading:$,type:"submit"},"Finish")}))))};W.propTypes={template:u().shape({display:u().string,icon:u().string,options:u().shape({from:u().shape({name:u().string,email:u().string}),message:u().string,object:u().string,response_email:u().string})}).isRequired,onSubmit:u().func.isRequired,onToggle:u().func.isRequired};const w=W;var k=t(38939),q=t(8060),F=t(79031),M=t(37909),N=t(63237),D=t(75515),_=t(15234),z=t(52624),G=t(12028),ee=t(30815),K=t(4585),te=t(85018);const J=({canUpdate:i,onEditClick:p})=>{const{formatMessage:E}=(0,m.Z)();return e.createElement(k.i,{colCount:3,rowCount:3},e.createElement(q.h,null,e.createElement(F.Tr,null,e.createElement(M.Th,{width:"1%"},e.createElement(N.T,null,E({id:(0,n.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(M.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},E({id:(0,n.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(M.Th,{width:"1%"},e.createElement(N.T,null,E({id:(0,n.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(_.p,null,e.createElement(F.Tr,{...(0,a.X7)({fn:()=>p("reset_password")})},e.createElement(M.Td,null,e.createElement(z.J,null,e.createElement(ee.Z,{"aria-label":E({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(M.Td,null,e.createElement(D.Z,null,E({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(M.Td,{...a.UW},e.createElement(G.h,{onClick:()=>p("reset_password"),label:E({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:i&&e.createElement(K.Z,null)}))),e.createElement(F.Tr,{...(0,a.X7)({fn:()=>p("email_confirmation")})},e.createElement(M.Td,null,e.createElement(z.J,null,e.createElement(te.Z,{"aria-label":E({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(M.Td,null,e.createElement(D.Z,null,E({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(M.Td,{...a.UW},e.createElement(G.h,{onClick:()=>p("email_confirmation"),label:E({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:i&&e.createElement(K.Z,null)})))))};J.propTypes={canUpdate:u().bool.isRequired,onEditClick:u().func.isRequired};const ae=J,ne=async()=>{const{get:i}=(0,a.tg)(),{data:p}=await i((0,n.Gc)("email-templates"));return p},le=i=>{const{put:p}=(0,a.tg)();return p((0,n.Gc)("email-templates"),i)},se=()=>e.createElement(a.O4,{permissions:g._.readEmailTemplates},e.createElement(oe,null)),oe=()=>{const{formatMessage:i}=(0,m.Z)(),{trackUsage:p}=(0,a.rS)(),{notifyStatus:E}=(0,r.G)(),h=(0,a.lm)(),{lockApp:B,unlockApp:P}=(0,a.o1)(),C=(0,e.useRef)(p),$=(0,v.useQueryClient)();(0,a.go)();const[re,me]=(0,e.useState)(!1),[Q,de]=(0,e.useState)(null),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,a.ss)({update:g._.updateEmailTemplates}),{status:pe,data:X}=(0,v.useQuery)("email-templates",()=>ne(),{onSuccess(){E(i({id:(0,n.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ee=ce||pe!=="success",H=()=>{me(L=>!L)},ge=L=>{de(L),H()},V=(0,v.useMutation)(L=>le({"email-templates":L}),{async onSuccess(){await $.invalidateQueries("email-templates"),h({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),C.current("didEditEmailTemplates"),P(),H()},onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),P()},refetchActive:!0}),{isLoading:fe}=V,he=L=>{B(),C.current("willEditEmailTemplates");const ve={...X,[Q]:L};V.mutate(ve)};return Ee?e.createElement(x.o,{"aria-busy":"true"},e.createElement(a.SL,{name:i({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(T.T,{title:i({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.D,null,e.createElement(a.dO,null))):e.createElement(x.o,{"aria-busy":fe},e.createElement(a.SL,{name:i({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(T.T,{title:i({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.D,null,e.createElement(ae,{onEditClick:ge,canUpdate:ue}),re&&e.createElement(w,{template:X[Q],onToggle:H,onSubmit:he})))},ie=se},42722:(U,y,t)=>{t.d(y,{YX:()=>T,Gc:()=>m,OB:()=>v.Z});var e=t(41609),r=t.n(e);const T=g=>Object.keys(g).reduce((n,b)=>{const j=g[b].controllers,l=Object.keys(j).reduce((o,s)=>(r()(j[s])||(o[s]=j[s]),o),{});return r()(l)||(n[b]={controllers:l}),n},{});var O=t(83086);const m=g=>`/${O.Z}/${g}`;var v=t(97961)},49066:(U,y,t)=>{t.d(y,{D:()=>x});var e=t(85893),r=t(41580);const x=({children:T})=>(0,e.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:T})},53979:(U,y,t)=>{t.d(y,{T:()=>n});var e=t(85893),r=t(67294),x=t(71997);const T=l=>{const o=(0,r.useRef)(null),[s,d]=(0,r.useState)(!0),c=([f])=>{d(f.isIntersecting)};return(0,r.useEffect)(()=>{const f=o.current,Z=new IntersectionObserver(c,l);return f&&Z.observe(o.current),()=>{f&&Z.disconnect()}},[o,l]),[o,s]};var O=t(79698);const a=(l,o)=>{const s=(0,O.W)(o);(0,r.useLayoutEffect)(()=>{const d=new ResizeObserver(s);return Array.isArray(l)?l.forEach(c=>{c.current&&d.observe(c.current)}):l.current&&d.observe(l.current),()=>{d.disconnect()}},[l,s])};var m=t(41580),v=t(11047),g=t(75515);const n=l=>{const o=(0,r.useRef)(null),[s,d]=(0,r.useState)(null),[c,f]=T({root:null,rootMargin:"0px",threshold:0});return a(c,()=>{c.current&&d(c.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{o.current&&d(o.current.getBoundingClientRect())},[o]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:s?.height},ref:c,children:f&&(0,e.jsx)(j,{ref:o,...l})}),!f&&(0,e.jsx)(j,{...l,sticky:!0,width:s?.width})]})};n.displayName="HeaderLayout";const b=(0,x.ZP)(m.x)`
  width: ${({width:l})=>l?`${l/16}rem`:void 0};
  z-index: ${({theme:l})=>l.zIndices[1]};
`,j=r.forwardRef(({navigationAction:l,primaryAction:o,secondaryAction:s,subtitle:d,title:c,sticky:f,width:Z,...I},A)=>{const S=typeof d=="string";return f?(0,e.jsx)(b,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Z,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{children:[l&&(0,e.jsx)(m.x,{paddingRight:3,children:l}),(0,e.jsxs)(m.x,{children:[(0,e.jsx)(g.Z,{variant:"beta",as:"h1",...I,children:c}),S?(0,e.jsx)(g.Z,{variant:"pi",textColor:"neutral600",children:d}):d]}),s?(0,e.jsx)(m.x,{paddingLeft:4,children:s}):null]}),(0,e.jsx)(v.k,{children:o?(0,e.jsx)(m.x,{paddingLeft:2,children:o}):void 0})]})}):(0,e.jsxs)(m.x,{ref:A,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:l?6:8,background:"neutral100","data-strapi-header":!0,children:[l?(0,e.jsx)(m.x,{paddingBottom:2,children:l}):null,(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{minWidth:0,children:[(0,e.jsx)(g.Z,{as:"h1",variant:"alpha",...I,children:c}),s?(0,e.jsx)(m.x,{paddingLeft:4,children:s}):null]}),o]}),S?(0,e.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},185:(U,y,t)=>{t.d(y,{o:()=>O});var e=t(85893),r=t(71997),x=t(41580);const T=(0,r.ZP)(x.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,O=({labelledBy:a="main-content-title",...m})=>(0,e.jsx)(T,{"aria-labelledby":a,as:"main",id:"main-content",tabIndex:-1,...m})}}]);
