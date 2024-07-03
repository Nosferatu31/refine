"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5508],{58860:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>y});var n=r(37953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=d(r),s=a,y=u["".concat(p,".").concat(s)]||u[s]||c[s]||o;return r?n.createElement(y,i(i({ref:t},g),{},{components:r})):n.createElement(y,i({ref:t},g))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},95827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});r(37953);var n=r(58860);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"useLogList",title:"useLogList"},p=void 0,d={unversionedId:"api-reference/core/hooks/audit-log/useLogList",id:"version-3.xx.xx/api-reference/core/hooks/audit-log/useLogList",title:"useLogList",description:"Overview",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/audit-log/useLogList.md",sourceDirName:"api-reference/core/hooks/audit-log",slug:"/api-reference/core/hooks/audit-log/useLogList",permalink:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLogList",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/audit-log/useLogList.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1719988904,formattedLastUpdatedAt:"Jul 3, 2024",frontMatter:{id:"useLogList",title:"useLogList"},sidebar:"someSidebar",previous:{title:"useLog",permalink:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLog"},next:{title:"useBreadcrumb",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useBreadcrumb"}},g={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3}],c=(s="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var s;const y={toc:u},m="wrapper";function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)(c,{id:"overview",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you need to list audit log events ",(0,n.yg)("strong",{parentName:"p"},"refine")," provides the ",(0,n.yg)("inlineCode",{parentName:"p"},"useLogList")," hook for it, It uses the ",(0,n.yg)("inlineCode",{parentName:"p"},"get")," method from ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/audit-log-provider#get"},(0,n.yg)("inlineCode",{parentName:"a"},"auditLogProvider"))," under the hood.")),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.yg)("inlineCode",{parentName:"p"},"auditLogProvider"),"'s ",(0,n.yg)("inlineCode",{parentName:"p"},"get")," method is provided.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useLogList } from "@pankod/refine-core";\n\nconst postAuditLogResults = useLogList({\n    resource: "posts",\n});\n'))),(0,n.yg)("h2",{id:"api"},"API"),(0,n.yg)("h3",{id:"properties"},"Properties"),(0,n.yg)(c,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{className:"required-block"},(0,n.yg)("div",null,"resource")," ",(0,n.yg)("div",{className:" required"},"Required"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"Action that it reads from route")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"action"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"author"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Record<string, any>")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"meta"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Record<string, any>")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"metaData"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#metadataquery"},(0,n.yg)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"queryOptions"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"UseQueryOptions<TData, TError>")),(0,n.yg)("td",{parentName:"tr",align:null}))))),(0,n.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.yg)(c,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Desription"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TData"),(0,n.yg)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TError"),(0,n.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))))))),(0,n.yg)("h3",{id:"return-values"},"Return values"),(0,n.yg)(c,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Result of the ",(0,n.yg)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,n.yg)("inlineCode",{parentName:"td"},"useQuery")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,n.yg)("inlineCode",{parentName:"a"},"UseQueryResult<{ data: TData; }>"))))))))}f.isMDXComponent=!0}}]);