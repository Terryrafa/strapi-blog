"use strict";(self.webpackChunkcontent=self.webpackChunkcontent||[]).push([[8936],{36318:(ue,p,t)=>{t.r(p),t.d(p,{default:()=>K});var e=t(67294),i=t(80120),g=t(86706),E=t(36364),F=t(29728),m=t(11047),V=t(77197),k=t(75515),X=t(85018),d=t(14916),Y=t(36968),Z=t.n(Y),z=t(86896),B=t(88767),H=t(16550),N=t(92686),P=t(79194),j=t(7761),S=t(11984),u=t(43390),c=t(38705),J=t(68997),Q=t(85230),n=t(86978),G=t(52258),C=t(3848),U=t(66578);function $(){const{formatMessage:s}=(0,z.Z)(),{post:b}=(0,i.kY)(),{push:q}=(0,H.k6)(),{formatAPIError:_}=(0,i.So)(),w=(0,g.I0)(),ee=(0,g.v9)(E._),T=(0,i.lm)(),{collectionTypes:te,singleTypes:oe,isLoading:se}=(0,N.G)(),{isLoading:M,meta:v,workflows:I}=(0,G.n)(),{clientState:{currentWorkflow:{data:l,isDirty:ne}}}=(0,g.v9)(o=>o?.[n.sN]??C.E),{allowedActions:{canCreate:ae}}=(0,i.ss)(ee.settings["review-workflows"]),[L,f]=e.useState(!1),{isLoading:W,getFeature:le}=(0,j.q5)(),[re,ie]=e.useState(null),[A,h]=e.useState({}),a=le("review-workflows"),R=I.flatMap(o=>o.contentTypes),{mutateAsync:ce,isLoading:D}=(0,B.useMutation)(async({workflow:o})=>{const{data:{data:r}}=await b("/admin/review-workflows/workflows",{data:o});return r},{onSuccess(){T({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}})}}),O=async()=>{h({});try{const o=await ce({workflow:l});return q(`/settings/review-workflows/${o.id}`),o}catch(o){return o.response.data?.error?.name==="ValidationError"&&o.response.data?.error?.details?.errors?.length>0&&ie(o.response.data?.error?.details?.errors.reduce((r,x)=>(Z()(r,x.path,x.message),r),{})),T({type:"warning",message:_(o)}),null}},fe=async()=>{await O()},ge=()=>{h({})},y=(0,d.TA)({enableReinitialize:!0,initialErrors:re,initialValues:l,async onSubmit(){const o=l.contentTypes.some(r=>R.includes(r));a?.[n.Ef]&&v?.workflowCount>=parseInt(a[n.Ef],10)?f("workflow"):a?.[n._X]&&l.stages.length>=parseInt(a[n._X],10)?f("stage"):o?h(r=>({...r,hasReassignedContentTypes:!0})):O()},validate(o){return(0,U.V)({values:o,formatMessage:s})}});return(0,P.v)(n.sN,C.I),e.useEffect(()=>{w((0,S.Js)()),w((0,S.CI)({name:""}))},[w]),e.useEffect(()=>{!M&&!W&&(a?.[n.Ef]&&v?.workflowsTotal>=parseInt(a[n.Ef],10)?f("workflow"):a?.[n._X]&&l.stages.length>=parseInt(a[n._X],10)&&f("stage"))},[W,M,a,v?.workflowsTotal,l.stages.length]),e.createElement(e.Fragment,null,e.createElement(u.lx,null),e.createElement(d.Hy,{value:y},e.createElement(d.l0,{onSubmit:y.handleSubmit},e.createElement(u.h4,{navigationAction:e.createElement(u.eJ,{href:"/settings/review-workflows"}),primaryAction:e.createElement(F.z,{startIcon:e.createElement(X.Z,null),type:"submit",size:"M",disabled:!ne||!ae,isLoading:D},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:s({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:l?.stages?.length??0})}),e.createElement(u.fC,null,e.createElement(m.k,{alignItems:"stretch",direction:"column",gap:7},se?e.createElement(V.a,null,s({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})):e.createElement(m.k,{alignItems:"stretch",direction:"column",gap:7},e.createElement(Q.Y,{contentTypes:{collectionTypes:te,singleTypes:oe},workflows:I}),e.createElement(J.U,{stages:y.values?.stages})))))),e.createElement(i.QH.Root,{isConfirmButtonLoading:D,isOpen:Object.keys(A).length>0,onToggleDialog:ge,onConfirm:fe},e.createElement(i.QH.Body,null,e.createElement(m.k,{direction:"column",gap:5},A.hasReassignedContentTypes&&e.createElement(k.Z,{textAlign:"center",variant:"omega"},s({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:R.filter(o=>l.contentTypes.includes(o)).length})),e.createElement(k.Z,{textAlign:"center",variant:"omega"},s({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"}))))),e.createElement(c.fC,{isOpen:L==="workflow",onClose:()=>f(!1)},e.createElement(c.Dx,null,s({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(c.uT,null,s({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(c.fC,{isOpen:L==="stage",onClose:()=>f(!1)},e.createElement(c.Dx,null,s({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(c.uT,null,s({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function K(){const s=(0,g.v9)(E._);return e.createElement(i.O4,{permissions:s.settings["review-workflows"].create},e.createElement($,null))}}}]);