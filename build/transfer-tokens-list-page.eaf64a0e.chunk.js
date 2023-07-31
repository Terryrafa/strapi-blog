"use strict";(self.webpackChunkcontent=self.webpackChunkcontent||[]).push([[9600],{92668:(W,v,t)=>{t.d(v,{Z:()=>H});var e=t(67294),o=t(15234),N=t(79031),m=t(37909),h=t(75515),P=t(11047),l=t(80120),V=t(45697),n=t.n(V),A=t(86896),b=t(16550),O=t(41580),L=t(12028),x=t(20022);const T=({tokenName:s,onClickDelete:i,tokenType:c})=>{const{formatMessage:E}=(0,A.Z)(),{trackUsage:u}=(0,l.rS)(),[f,g]=(0,e.useState)(!1),C=()=>{g(!1),u("willDeleteToken",{tokenType:c}),i()};return e.createElement(O.x,{paddingLeft:1,onClick:d=>d.stopPropagation()},e.createElement(L.h,{onClick:()=>{g(!0)},label:E({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${s}`}),name:"delete",noBorder:!0,icon:e.createElement(x.Z,null)}),e.createElement(l.QH,{onToggleDialog:()=>g(!1),onConfirm:C,isOpen:f}))};T.propTypes={tokenName:n().string.isRequired,onClickDelete:n().func.isRequired,tokenType:n().string.isRequired};const F=T;var z=t(8934),$=t(71997);const J={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},Q=(0,$.ZP)(l.rU)`
  svg {
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:s})=>s.colors.neutral800};
      }
    }
  }
`,Z=({tokenName:s,tokenId:i,buttonType:c,children:E})=>{const{formatMessage:u}=(0,A.Z)(),{location:{pathname:f}}=(0,b.k6)();return e.createElement(Q,{to:`${f}/${i}`,title:u(J[c],{target:s})},E)};Z.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired,buttonType:n().string,children:n().node.isRequired},Z.defaultProps={buttonType:"edit"};const I=Z,k=({tokenName:s,tokenId:i})=>e.createElement(I,{tokenName:s,tokenId:i,buttonType:"read"},e.createElement(z.Z,null));k.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const p=k;var y=t(4585);const B=({tokenName:s,tokenId:i})=>e.createElement(I,{tokenName:s,tokenId:i},e.createElement(y.Z,null));B.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const D=B,M=({permissions:s,headers:i,contentType:c,isLoading:E,tokens:u,onConfirmDelete:f,tokenType:g})=>{const{canDelete:C,canUpdate:d,canRead:S}=s,U=C||d||S,[{query:R}]=(0,l.Kx)(),{formatMessage:Y}=(0,A.Z)(),[,K]=R?R.sort.split(":"):"ASC",{push:j,location:{pathname:w}}=(0,b.k6)(),{trackUsage:a}=(0,l.rS)(),X=u.sort((r,q)=>{const G=r.name.localeCompare(q.name);return K==="DESC"?-G:G});return e.createElement(l.tM,{headers:i,contentType:c,rows:u,withBulkActions:U,isLoading:E,onConfirmDelete:f},e.createElement(o.p,null,X.map(r=>e.createElement(N.Tr,{key:r.id,...(0,l.X7)({fn(){a("willEditTokenFromList",{tokenType:g}),j(`${w}/${r.id}`)},condition:d})},e.createElement(m.Td,{maxWidth:(0,l.Q1)(250)},e.createElement(h.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},r.name)),e.createElement(m.Td,{maxWidth:(0,l.Q1)(250)},e.createElement(h.Z,{textColor:"neutral800",ellipsis:!0},r.description)),e.createElement(m.Td,null,e.createElement(h.Z,{textColor:"neutral800"},e.createElement(l.ij,{timestamp:new Date(r.createdAt)}))),e.createElement(m.Td,null,r.lastUsedAt&&e.createElement(h.Z,{textColor:"neutral800"},e.createElement(l.ij,{timestamp:new Date(r.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:Y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]}))),U&&e.createElement(m.Td,null,e.createElement(P.k,{justifyContent:"end"},d&&e.createElement(D,{tokenName:r.name,tokenId:r.id}),!d&&S&&e.createElement(p,{tokenName:r.name,tokenId:r.id}),C&&e.createElement(F,{tokenName:r.name,onClickDelete:()=>f(r.id),tokenType:g})))))))};M.propTypes={tokens:n().array,permissions:n().shape({canRead:n().bool,canDelete:n().bool,canUpdate:n().bool}).isRequired,headers:n().arrayOf(n().shape({cellFormatter:n().func,key:n().string.isRequired,metadatas:n().shape({label:n().string.isRequired,sortable:n().bool}).isRequired,name:n().string.isRequired})),contentType:n().string.isRequired,isLoading:n().bool,onConfirmDelete:n().func,tokenType:n().string.isRequired},M.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};const H=M},81966:(W,v,t)=>{t.d(v,{Z:()=>e,f:()=>o});const e="api-token",o="transfer-token"},68446:(W,v,t)=>{t.r(v),t.d(v,{default:()=>I});var e=t(67294),o=t(80120),N=t(86706),m=t(36364),h=t(185),P=t(53979),l=t(49066),V=t(29728),n=t(96315),A=t(80129),b=t.n(A),O=t(86896),L=t(88767),x=t(16550),T=t(81966),F=t(92668);const $=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],Q=()=>{(0,o.go)();const k=(0,L.useQueryClient)(),{formatMessage:p}=(0,O.Z)(),y=(0,o.lm)(),B=(0,N.v9)(m._),{allowedActions:{canCreate:D,canDelete:M,canUpdate:H,canRead:s}}=(0,o.ss)(B.settings["transfer-tokens"]),{push:i}=(0,x.k6)(),{trackUsage:c}=(0,o.rS)(),{startSection:E}=(0,o.c1)(),u=(0,e.useRef)(E),{get:f,del:g}=(0,o.kY)();(0,e.useEffect)(()=>{u.current&&u.current("transferTokens")},[]),(0,e.useEffect)(()=>{i({search:b().stringify({sort:"name:ASC"},{encode:!1})})},[i]);const C=$.map(a=>({...a,metadatas:{...a.metadatas,label:p(a.metadatas.label)}})),{data:d,status:S,isFetching:U}=(0,L.useQuery)(["transfer-tokens"],async()=>{c("willAccessTokenList",{tokenType:T.f});const{data:{data:a}}=await f("/admin/transfer/tokens");return c("didAccessTokenList",{number:a.length,tokenType:T.f}),a},{enabled:s,onError(a){console.log("error",a),a?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?y({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),R=s&&(S!=="success"&&S!=="error"||S==="success"&&U),Y=(0,L.useMutation)(async a=>{await g(`/admin/transfer/tokens/${a}`)},{async onSuccess(){await k.invalidateQueries(["transfer-tokens"])},onError(a){a?.response?.data?.data?y({type:"warning",message:a.response.data.data}):a?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?y({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),K=s&&d,j=s&&!d&&!D,w=s&&!d&&D;return e.createElement(h.o,{"aria-busy":R},e.createElement(o.SL,{name:"Transfer Tokens"}),e.createElement(P.T,{title:p({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:p({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:D?e.createElement(o.Qj,{"data-testid":"create-transfer-token-button",startIcon:e.createElement(n.Z,null),size:"S",onClick:()=>c("willAddTokenFromList",{tokenType:T.f}),to:"/settings/transfer-tokens/create"},p({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})):void 0}),e.createElement(l.D,null,!s&&e.createElement(o.ZF,null),K&&e.createElement(F.Z,{permissions:{canRead:s,canDelete:M,canUpdate:H},headers:C,contentType:"trasfer-tokens",rows:d,isLoading:R,onConfirmDelete:a=>Y.mutateAsync(a),tokens:d,tokenType:T.f}),w&&e.createElement(o.dJ,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:e.createElement(V.z,{variant:"secondary",startIcon:e.createElement(n.Z,null)},p({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"}))}),j&&e.createElement(o.dJ,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},I=()=>{const k=(0,N.v9)(m._);return e.createElement(o.O4,{permissions:k.settings["transfer-tokens"].main},e.createElement(Q,null))}}}]);
