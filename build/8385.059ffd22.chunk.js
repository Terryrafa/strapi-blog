"use strict";(self.webpackChunkcontent=self.webpackChunkcontent||[]).push([[8385],{52713:(W,E,r)=>{r.d(E,{r:()=>P});var m=r(67294),y=r(41580),L=r(45697),v=r.n(L),x=r(99168);function k(A,M,g){if(!A||!M)return{display:"none"};const{x:C,y:F}=g;return{transform:`translate(${C}px, ${F}px)`}}function P({renderItem:A}){const{itemType:M,isDragging:g,item:C,initialOffset:F,currentOffset:j,mouseOffset:B}=(0,x.useDragLayer)(D=>({item:D.getItem(),itemType:D.getItemType(),initialOffset:D.getInitialSourceClientOffset(),currentOffset:D.getSourceClientOffset(),isDragging:D.isDragging(),mouseOffset:D.getClientOffset()}));return g?m.createElement(y.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},m.createElement(y.x,{style:k(F,j,B)},A({type:M,item:C}))):null}P.propTypes={renderItem:v().func.isRequired}},27661:(W,E,r)=>{var m=r(67294);const y=(0,m.createContext)();var L=null},21440:(W,E,r)=>{r.d(E,{PL:()=>x,Y9:()=>k.Y,zE:()=>re,Ky:()=>le,fi:()=>z,zH:()=>de,r5:()=>fe});var m=r(67294),y=r(86706),L=r(25398);const x=()=>{const e=(0,y.v9)(L.Z),t=(0,m.useCallback)(n=>e?.components?.[n]??{},[e]);return{...e,getComponentLayout:t}};var k=r(79116),P=r(80120),A=r(52861),M=r(42225),g=r(18172);const C={error:null,isLoading:!0,layout:{},layouts:{}},j=(e,t)=>(0,g.ZP)(e,n=>{switch(t.type){case"GET_DATA":{n.isLoading=!0,n.error=null,n.layout={};break}case"GET_DATA_SUCCEEDED":{const s=t.data.contentType.uid;n.layout=t.data,n.layouts[s]=t.data,n.isLoading=!1;break}case"GET_DATA_ERROR":{n.isLoading=!1,n.error=t.error;break}case"SET_LAYOUT_FROM_STATE":{n.error=null,n.layout=e.layouts[t.uid];break}case"UPDATE_LAYOUT":{const s=e.layout;n.layout={...s,contentType:{uid:s.contentType.uid,...t.newLayout.contentType}},n.layouts[s.contentType.uid]={...s,contentType:{uid:s.contentType.uid,...t.newLayout.contentType}};break}default:return n}});var B=r(50361),D=r.n(B),G=r(27361),R=r.n(G),w=r(36968),S=r.n(w),se=r(44949);const Q=(e,t)=>t.find(n=>n.uid===e),H=(e,t)=>{const n=X(e,t),s=b(n.contentType,t),i=J(n.contentType,n.components);return S()(n,["contentType","layouts","edit"],s),S()(n,["contentType","layouts","list"],i),Object.keys(n.components).forEach(u=>{const l=b(n.components[u],t);S()(n,["components",u,"layouts","edit"],l)}),n},X=(e,t)=>{const n=(0,se.w8)(D()(e),t,"contentType"),{components:s,contentType:i}=n,u=l=>Object.keys(l.metadatas).reduce((d,h)=>{const T=R()(l,["attributes",h],{});let O=l.metadatas[h];if(T.type==="relation"){const I=Q(T.targetModel,t),N=O.edit.mainField,V={name:N,schema:R()(I,["attributes",N])};O={list:{...O.list,mainField:V},edit:{...O.edit,mainField:V}}}return d[h]=O,d},{});return S()(n,["contentType","metadatas"],u(i)),Object.keys(s).forEach(l=>{const d=s[l],h=u(d);S()(n,["components",l,"metadatas"],h)}),n},b=(e,t)=>e.layouts.edit.reduce((n,s)=>{const i=s.map(u=>{const l=R()(e,["attributes",u.name],{}),d={...u,fieldSchema:l,metadatas:R()(e,["metadatas",u.name,"edit"],{})};if(l.type==="relation"){const T=Q(l.targetModel,t).pluginOptions||{};S()(d,"targetModelPluginOptions",T),S()(d,"queryInfos",{shouldDisplayRelationLink:Y(e,u.name,t)})}return d});return n.push(i),n},[]),J=(e,t)=>e.layouts.list.reduce((s,i)=>{const u=R()(e,["attributes",i],{}),l=R()(e,["metadatas",i,"list"],{}),d=u.type;if(d==="relation")return s.push({key:`__${i}_key__`,name:i,fieldSchema:u,metadatas:l}),s;if(d==="component"){const h=t[u.component],T=h.settings.mainField,O=h.attributes[T];return s.push({key:`__${i}_key__`,name:i,fieldSchema:u,metadatas:{...l,mainField:{...O,name:T}}}),s}return s.push({key:`__${i}_key__`,name:i,fieldSchema:u,metadatas:l}),s},[]),Y=(e,t,n)=>{const s=R()(e,["attributes",t,"targetModel"],"");return K(n).includes(s)},K=e=>e.filter(t=>t.isDisplayed).map(({uid:t})=>t),$=H,re=e=>{const[{error:t,isLoading:n,layout:s,layouts:i},u]=(0,m.useReducer)(j,C),l=(0,m.useMemo)(M.Vo,[]),{schemas:d}=(0,y.v9)(N=>l(N),y.wU),h=(0,m.useRef)(!0),{get:T}=(0,P.kY)(),O=(0,m.useCallback)(async(N,V)=>{if(i[N]){u({type:"SET_LAYOUT_FROM_STATE",uid:N});return}u({type:"GET_DATA"});try{const{data:{data:ne}}=await T(`/content-manager/content-types/${N}/configuration`,{cancelToken:V.token});u({type:"GET_DATA_SUCCEEDED",data:$(ne,d)})}catch(ne){if(A.default.isCancel(ne))return;h.current&&console.error(ne),h.current&&u({type:"GET_DATA_ERROR",error:ne})}},[i,d,T]);(0,m.useEffect)(()=>()=>{h.current=!1},[]),(0,m.useEffect)(()=>{const V=A.default.CancelToken.source();return O(e,V),()=>{V.cancel("Operation canceled by the user.")}},[e,O]);const I=(0,m.useCallback)(N=>{u({type:"UPDATE_LAYOUT",newLayout:$(N,d)})},[d]);return{error:t,isLoading:n,layout:s,updateLayout:I}},oe=e=>e["content-manager_app"].collectionTypeLinks;var ie=r(13218),ae=r.n(ie),Z=r(80129);const ue=(e,t)=>Object.keys(e).reduce((n,s)=>{const i=e[s],u=R()(t,[s],i);return ae()(i)?{...n,[s]:ue(i,u)}:(n[s]=u,n)},{}),f=(e,t,n)=>{const s=e.find(({to:O})=>O.includes(t));if(!s)return"/";const{to:i,search:u}=s,l=(0,Z.parse)(u),d=(0,Z.parse)(n.substring(1)),h=ue(l,d);return`${i}?${(0,Z.stringify)(h,{encode:!1})}`},le=e=>{const[{rawQuery:t}]=(0,P.Kx)(),n=(0,y.v9)(oe);return f(n,e,t)};var ge=r(25950),ce=r(16550);const z=()=>{const{search:e}=(0,ce.TH)(),t=e?(0,Z.parse)(e.substring(1)):{};return t.plugins?(0,Z.stringify)({plugins:t.plugins},{encode:!1}):""},de=e=>{const t=(0,m.useRef)();return(0,m.useEffect)(()=>{t.current=e},[e]),t.current};var U=r(14996);const p=(e,t,n)=>({type:U.m,permissions:e,__meta__:{plugins:t,containerName:n}}),ee=()=>({type:U.Q}),me=e=>e["content-manager_rbacManager"].permissions,te=e=>e.rbacProvider.collectionTypesRelatedPermissions,fe=(e,t,n="listView")=>{const s=(0,y.v9)(te),i=(0,y.v9)(me),u=(0,y.I0)(),l=s[t];return(0,m.useEffect)(()=>l?(u(p(l,e?e.plugins:null,n)),()=>{u(ee())}):()=>{},[l,u,e,n]),i};var o=r(27661);const c=()=>useContext(WysiwygContext),a=null},79116:(W,E,r)=>{r.d(E,{Y:()=>x});var m=r(67294),y=r(99168),L=r.n(y),v=r(25950);const x=(k,{type:P="STRAPI_DND",index:A,item:M={},onStart:g,onEnd:C,onGrabItem:F,onDropItem:j,onCancel:B,onMoveItem:D,dropSensitivity:G="regular"})=>{const R=(0,m.useRef)(null),[{handlerId:w},S]=(0,y.useDrop)({accept:P,collect(b){return{handlerId:b.getHandlerId()}},hover(b,J){if(!R.current)return;const Y=b.index,K=A;if(Y!==K){if(G==="regular"){const $=R.current.getBoundingClientRect(),q=($.bottom-$.top)/2,_=J.getClientOffset().y-$.top;if(Y<K&&_<q||Y>K&&_>q)return}D(K,Y),b.index=K}}}),[{isDragging:se},Q,H]=(0,y.useDrag)({type:P,item(){g&&g();const{width:b}=R.current?.getBoundingClientRect()??{};return{index:A,width:b,...M}},end(){C&&C()},canDrag:k,isDragging:M.id?b=>M.id===b.getItem().id:void 0,collect:b=>({isDragging:b.isDragging()})}),X=(0,v.A)(k,A,{onGrabItem:F,onDropItem:j,onCancel:B,onMoveItem:D});return[{handlerId:w,isDragging:se,handleKeyDown:X},R,S,Q,H]}},25950:(W,E,r)=>{r.d(E,{A:()=>y});var m=r(67294);const y=(L,v,{onCancel:x,onDropItem:k,onGrabItem:P,onMoveItem:A})=>{const[M,g]=(0,m.useState)(!1),C=D=>{M&&(D==="UP"?A(v-1,v):D==="DOWN"&&A(v+1,v))},F=()=>{M?(k&&k(v),g(!1)):(P&&P(v),g(!0))},j=()=>{M&&(g(!1),x&&x(v))};return D=>{if(L&&!(D.key==="Tab"&&!M))switch(D.preventDefault(),D.key){case" ":case"Enter":F();break;case"Escape":j();break;case"ArrowDown":case"ArrowRight":C("DOWN");break;case"ArrowUp":case"ArrowLeft":C("UP");break;default:}}}},42225:(W,E,r)=>{r.d(E,{Jg:()=>A,KQ:()=>k,Vo:()=>P,Yg:()=>L});var m=r(20573),y=r(23301);const L=()=>g=>g["content-manager_app"]||y.E,v=()=>createSelector(L(),g=>g),x=()=>createSelector(L(),g=>g.models),k=()=>(0,m.P1)(L(),g=>({collectionTypeLinks:g.collectionTypeLinks,singleTypeLinks:g.singleTypeLinks})),P=()=>(0,m.P1)(L(),({components:g,models:C})=>({schemas:[...g,...C]})),A=(0,m.P1)(L(),g=>g.fieldSizes);var M=null},25398:(W,E,r)=>{r.d(E,{Z:()=>y});const y=L=>L["content-manager_editViewLayoutManager"].currentLayout},56837:(W,E,r)=>{r.d(E,{Z:()=>m});const m={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"}},45283:(W,E,r)=>{r.d(E,{Z:()=>y});const y=L=>`content-manager.${L}`},44949:(W,E,r)=>{r.d(E,{_Q:()=>_.Z,W3:()=>v,ko:()=>A,FE:()=>g,Di:()=>B,Ex:()=>fe,du:()=>w,TA:()=>Q,Ts:()=>J,Uo:()=>K,IF:()=>q,OB:()=>re.Z,w8:()=>ye,kc:()=>le});var m=r(50361),y=r.n(m);const v=(o,c,a)=>{if(Array.isArray(o)&&c>=0&&a>=0&&c<=o.length-1&&a<=o.length-1){const e=y()(o),t=e.splice(c,1);return e.splice(a,0,t[0]),e}return o};var x=r(7334),k=r.n(x);const A=o=>{const c=o.type;return c==="relation"?!k()(o.relationType).includes("morph"):!["json","dynamiczone","richtext","password"].includes(c)&&!!c},M=(o,c)=>{typeof o=="function"?o(c):o!=null&&(o.current=c)},g=(...o)=>c=>o.forEach(a=>M(a,c));var C=r(27361),F=r.n(C);const j=(o,c)=>Object.keys(o).reduce((a,e)=>{const t=F()(o,[e],{}),{default:n,component:s,type:i,required:u,min:l,repeatable:d}=t;if(n!==void 0&&(a[e]=n),i==="component"){const h=c?.[s]?.attributes??{},T=j(h,c);if(u===!0&&(a[e]=d===!0?[]:T),l&&d===!0&&u){a[e]=[];for(let O=0;O<l;O+=1)a[e].push(T)}}return i==="dynamiczone"&&u===!0&&(a[e]=[]),a},{}),B=j;var D=r(57557),G=r.n(D);const w=({layouts:o,metadatas:c,...a})=>{const e=o.list.map(s=>s.name?s.name:s),t=Object.keys(c).reduce((s,i)=>{const u=F()(c,[i],{});let l=u.edit;return l.mainField&&(l={...l,mainField:u.edit.mainField.name}),{...s,[i]:{edit:l,list:G()(u.list,["mainField"])}}},{}),n=o.edit.map(s=>s.map(({name:i,size:u})=>({name:i,size:u})));return{...a,layouts:{edit:n,list:e},metadatas:t}},S=(o,c)=>o.map(a=>({...a,subject:c})),Q=o=>{const c={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(c).reduce((a,e)=>(a[e]=S(c[e],o),a),{})};var H=r(7654),X=r.n(H);const J=o=>o.split(".").filter(c=>X()(parseInt(c,10))),K=o=>{if(o.length===0)return-1;const c=Math.max.apply(Math,o.map(a=>a.__temp_key__??0));return Number.isNaN(c)?-1:c},q=o=>`/content-manager/${o}`;var re=r(45283),_=r(56837),oe=r(82492),ie=r.n(oe),ae=r(36968),Z=r.n(ae);const ye=(o,c,a)=>{const e=i=>c.find(u=>u.uid===i),t=Object.assign({},o),n=o[a].uid,s=e(n);return Z()(t,[a],ie()({},s,o[a])),Object.keys(o.components).forEach(i=>{const u=e(i);Z()(t,["components",i],{...o.components[i],...u})}),t};var f=r(80120);const le=(o,c,a)=>{const e=(t,n)=>Object.keys(t).reduce((s,i)=>{const u=(0,f.UN)(n,i),l=F()(t,i),d=(0,f.k2)(n,[i,"component"]),h=(0,f.k2)(n,[i,"repeatable"]);return u==="dynamiczone"?(s[i]=l.map(T=>e(T,a[T.__component])),s):u==="component"?(h?s[i]=l&&l.map(T=>e(T,a[d])):s[i]=l&&e(l,a[d]),s):(u!=="password"&&(s[i]=l),s)},{});return e(o,c)};var ge=r(51584),ce=r.n(ge),pe=r(41609),z=r.n(pe),de=r(14841),U=r.n(de),p=r(87561),ee=r(72262);p.kM(p.nK,"defined",function(){return this.test("defined",f.I0.required,o=>o!==void 0)}),p.kM(p.IX,"notEmptyMin",function(o){return this.test("notEmptyMin",f.I0.min,c=>z()(c)?!0:c.length>=o)}),p.kM(p.Z_,"isInferior",function(o,c){return this.test("isInferior",o,function(a){return!a||Number.isNaN(U()(a))?!0:U()(c)>=U()(a)})}),p.kM(p.Z_,"isSuperior",function(o,c){return this.test("isSuperior",o,function(a){return!a||Number.isNaN(U()(a))?!0:U()(a)>=U()(c)})});const me=o=>F()(o,["attributes"],{}),te=(o,{components:c},a={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const e=me(o);return p.Ry().shape(Object.keys(e).reduce((t,n)=>{const s=e[n];if(s.type!=="relation"&&s.type!=="component"&&s.type!=="dynamiczone"){const i=he(s.type,s,a);t[n]=i}if(s.type==="relation"&&(t[n]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(s.relationType)?p.Ry().nullable():p.IX().nullable()),s.type==="component"){const i=te(c[s.component],{components:c},{...a,isFromComponent:!0});if(s.repeatable===!0){const{min:l,max:d,required:h}=s;let T=p.Vo(O=>{let I=p.IX().of(i);return l?h?I=I.min(l,f.I0.min):h!==!0&&z()(O)?I=I.nullable():I=I.min(l,f.I0.min):h&&!a.isDraft&&(I=I.min(1,f.I0.required)),d&&(I=I.max(d,f.I0.max)),I});return t[n]=T,t}const u=p.Vo(l=>l!==void 0?s.required===!0&&!a.isDraft?i.defined():i.nullable():s.required===!0?p.Ry().defined():p.Ry().nullable());return t[n]=u,t}if(s.type==="dynamiczone"){let i=p.IX().of(p.Vo(({__component:d})=>te(c[d],{components:c},{...a,isFromComponent:!0})));const{max:u,min:l}=s;l?s.required?i=i.test("min",f.I0.min,d=>a.isCreatingEntry?d&&d.length>=l:d===void 0?!0:d!==null&&d.length>=l).test("required",f.I0.required,d=>a.isCreatingEntry?d!==null||d!==void 0:d===void 0?!0:d!==null):i=i.notEmptyMin(l):s.required&&!a.isDraft&&(i=i.test("required",f.I0.required,d=>a.isCreatingEntry?d!==null||d!==void 0:d===void 0?!0:d!==null)),u&&(i=i.max(u,f.I0.max)),t[n]=i}return t},{}))},he=(o,c,a)=>{let e=p.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(o)&&(e=p.Z_()),o==="json"&&(e=p.nK(f.I0.json).test("isJSON",f.I0.json,t=>{if(!t||!t.length)return!0;try{return JSON.parse(t),!0}catch{return!1}}).nullable().test("required",f.I0.required,t=>!(c.required&&(!t||!t.length)))),o==="email"&&(e=e.email(f.I0.email)),["number","integer","float","decimal"].includes(o)&&(e=p.Rx().transform(t=>X()(t)?void 0:t).typeError()),o==="biginteger"&&(e=p.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(o)&&(e=p.hT()),Object.keys(c).forEach(t=>{const n=c[t];if(n||!ce()(n)&&Number.isInteger(Math.floor(n))||n===0)switch(t){case"required":{a.isDraft||(o==="password"&&a.isCreatingEntry&&(e=e.required(f.I0.required)),o!=="password"&&(a.isCreatingEntry?e=e.required(f.I0.required):e=e.test("required",f.I0.required,s=>s===void 0&&!a.isFromComponent?!0:(0,ee.Z)(o)?s===0?!0:!!s:o==="boolean"?s!=null:o==="date"||o==="datetime"?typeof s=="string"?!z()(s):!z()(s?.toString()):!z()(s))));break}case"max":{o==="biginteger"?e=e.isInferior(f.I0.max,n):e=e.max(n,f.I0.max);break}case"maxLength":e=e.max(n,f.I0.maxLength);break;case"min":{o==="biginteger"?e=e.isSuperior(f.I0.min,n):e=e.min(n,f.I0.min);break}case"minLength":{a.isDraft||(e=e.min(n,f.I0.minLength));break}case"regex":e=e.matches(new RegExp(n),{message:f.I0.regex,excludeEmptyString:!c.required});break;case"lowercase":["text","textarea","email","string"].includes(o)&&(e=e.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(o)&&(e=e.strict().uppercase());break;case"positive":(0,ee.Z)(o)&&(e=e.positive());break;case"negative":(0,ee.Z)(o)&&(e=e.negative());break;default:e=e.nullable()}}),e},fe=te},72262:(W,E,r)=>{r.d(E,{Z:()=>m});function m(y){return["integer","biginteger","decimal","float","number"].includes(y)}}}]);
