"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69660],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),y=r,g=c["".concat(d,".").concat(y)]||c[y]||u[y]||i;return t?n.createElement(g,o(o({ref:a},p),{},{components:t})):n.createElement(g,o({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},53581:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});t(96540);var n=t(15680);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const l={id:"useInvalidate",title:"useInvalidate",source:"/packages/core/src/hooks/invalidate"},d=void 0,s={unversionedId:"api-reference/core/hooks/invalidate/useInvalidate",id:"version-3.xx.xx/api-reference/core/hooks/invalidate/useInvalidate",title:"useInvalidate",description:"refine uses TanStack Query to fetch and manage the state of the data. More information about invalidation please read the TanStack Query's invalidation docs.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/invalidate/useInvalidate.md",sourceDirName:"api-reference/core/hooks/invalidate",slug:"/api-reference/core/hooks/invalidate/useInvalidate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/invalidate/useInvalidate",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/invalidate/useInvalidate.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1714632650,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{id:"useInvalidate",title:"useInvalidate",source:"/packages/core/src/hooks/invalidate"},sidebar:"someSidebar",previous:{title:"useImport",permalink:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useImport"},next:{title:"usePublish",permalink:"/docs/3.xx.xx/api-reference/core/hooks/live/usePublish"}},p={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Invalidation Parameters",id:"invalidation-parameters",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>invalidates</code> <PropTag required />",id:"invalidates-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Invalidation Parameters",id:"invalidation-parameters-1",level:3}],u=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",a)},y=u("DocThumbsUpDownFeedbackWidget"),g=u("PropTag"),m={toc:c},v="wrapper";function f(e){var{components:a}=e,t=o(e,["components"]);return(0,n.yg)(v,i(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){r(e,a,t[a])}))}return e}({},m,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"refine")," uses ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query")," to fetch and manage the state of the data. More information about invalidation please read the TanStack Query's ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/query-invalidation"},"invalidation")," docs.")),(0,n.yg)("br",null),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useInvalidate")," can be used to invalidate the state of a particular ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," or ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," (with dataProviderName)."),(0,n.yg)("p",null,"This hook is used on mutation hooks. when a mutation is success, this hook will called. For example, creating a ",(0,n.yg)("inlineCode",{parentName:"p"},"Posts")," with ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"},"useCreate")," hook will invalidate the ",(0,n.yg)("inlineCode",{parentName:"p"},"list")," (",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useList/"},"useList"),") and ",(0,n.yg)("inlineCode",{parentName:"p"},"many")," (",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useMany/"},"useMany"),") state of the ",(0,n.yg)("inlineCode",{parentName:"p"},"Posts")," resource."),(0,n.yg)("admonition",{type:"info-tip"},(0,n.yg)("p",{parentName:"admonition"},"The hook is used internally by ",(0,n.yg)("strong",{parentName:"p"},"refine"),". In most of the cases, you won't need this hook, but we export it as it may be useful for some use-cases that may require customized invalidation.")),(0,n.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.yg)(y,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'import { useInvalidate } from "@pankod/refine-core";\n\nconst invalidate = useInvalidate();\n\ninvalidate({\n  resource: "posts",\n  invalidates: ["list"],\n});\n'))),(0,n.yg)("h2",{id:"examples"},"Examples"),(0,n.yg)(y,{id:"examples",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To invalidate the ",(0,n.yg)("inlineCode",{parentName:"li"},'"list"')," and ",(0,n.yg)("inlineCode",{parentName:"li"},'"many"')," states of the Posts ",(0,n.yg)("inlineCode",{parentName:"li"},"resource"),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n  resource: "posts",\n  invalidates: ["list", "many"],\n});\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To invalidate the state of a Posts with an id of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n  resource: "posts",\n  invalidates: ["detail"],\n  id: 1,\n});\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To invalidate the ",(0,n.yg)("inlineCode",{parentName:"li"},'"list"')," and ",(0,n.yg)("inlineCode",{parentName:"li"},'"many"')," states of the Posts ",(0,n.yg)("inlineCode",{parentName:"li"},"resource")," of the ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," named ",(0,n.yg)("inlineCode",{parentName:"li"},'"second-data-provider"'),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n  resource: "posts",\n  dataProviderName: "second-data-provider",\n  invalidates: ["list"],\n});\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To invalidate all states of the ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," named ",(0,n.yg)("inlineCode",{parentName:"li"},'"second-data-provider"'),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n  dataProviderName: "second-data-provider",\n  invalidates: ["all"],\n});\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To invalidate all states of the Posts.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n  resource: "posts",\n  invalidates: ["resourceAll"],\n});\n'))),(0,n.yg)("h2",{id:"invalidation-parameters"},"Invalidation Parameters"),(0,n.yg)("h3",{id:"resource"},(0,n.yg)("inlineCode",{parentName:"h3"},"resource")),(0,n.yg)(y,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"A resource represents an entity in an endpoint in the API (e.g. ",(0,n.yg)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev/posts"},"https://api.fake-rest.refine.dev/posts"),"). It is used to invalidate the state of a particular resource.")),(0,n.yg)("h3",{id:"id"},(0,n.yg)("inlineCode",{parentName:"h3"},"id")),(0,n.yg)(y,{id:"id",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," to use when invalidating the ",(0,n.yg)("inlineCode",{parentName:"p"},'"detail"')," state.")),(0,n.yg)("h3",{id:"dataprovidername"},(0,n.yg)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,n.yg)(y,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If there is more than one ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider")),", you should use the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProviderName")," that you will use.")),(0,n.yg)("h3",{id:"invalidates-"},(0,n.yg)("inlineCode",{parentName:"h3"},"invalidates")," ",(0,n.yg)(g,{required:!0,mdxType:"PropTag"})),(0,n.yg)(y,{id:"invalidates-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Type: ",(0,n.yg)("inlineCode",{parentName:"p"},'Array<"all", "resourceAll", "list", "many", "detail", "false">')," | ",(0,n.yg)("inlineCode",{parentName:"p"},"false"))),(0,n.yg)("p",null,"The states you want to invalidate. You can use the following values:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"all"'),": Invalidates all states of the all resources."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"resourceAll"'),": Invalidates all states of the given ",(0,n.yg)("inlineCode",{parentName:"li"},"resource"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"list"'),": Invalidates the ",(0,n.yg)("inlineCode",{parentName:"li"},'"list"')," state of the given ",(0,n.yg)("inlineCode",{parentName:"li"},"resource"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"detail"'),": Invalidates the ",(0,n.yg)("inlineCode",{parentName:"li"},'"detail"')," state of the given ",(0,n.yg)("inlineCode",{parentName:"li"},"resource")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"id"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"many"'),": Invalidates the ",(0,n.yg)("inlineCode",{parentName:"li"},'"many"')," state of the given ",(0,n.yg)("inlineCode",{parentName:"li"},"resource"),"."))),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"invalidation-parameters-1"},"Invalidation Parameters"),(0,n.yg)(y,{id:"invalidation-parameters-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{className:"required-block"},(0,n.yg)("div",null,"invalidates")," ",(0,n.yg)("div",{className:"required"},"Required"))),(0,n.yg)("td",{parentName:"tr",align:null},"The states you want to invalidate."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"all"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"list"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"many"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"detail"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resource"),(0,n.yg)("td",{parentName:"tr",align:null},"Resource name for State invalidation."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"id"),(0,n.yg)("td",{parentName:"tr",align:null},"The ",(0,n.yg)("inlineCode",{parentName:"td"},"id"),' to use when invalidating the "detail" state.'),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseKey"))),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.yg)("td",{parentName:"tr",align:null},"The name of the data provider whose state you want to invalidate."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"default")))))))}f.isMDXComponent=!0}}]);