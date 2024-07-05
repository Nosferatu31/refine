"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71325],{58860:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(37953);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,y=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});r(37953);var n=r(58860);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={title:"useResourceParams",source:"packages/core/src/hooks/use-resource-params"},d=void 0,p={unversionedId:"routing/hooks/use-resource-params/index",id:"routing/hooks/use-resource-params/index",title:"useResourceParams",description:"useResourceParams is used to get the related parameters of the current resource such as resource, id and action. It also provides formAction to determine the action of the form and setId to set the id programmatically without having to use a separate state for it.",source:"@site/docs/routing/hooks/use-resource-params/index.md",sourceDirName:"routing/hooks/use-resource-params",slug:"/routing/hooks/use-resource-params/",permalink:"/docs/routing/hooks/use-resource-params/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/routing/hooks/use-resource-params/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720194788,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"useResourceParams",source:"packages/core/src/hooks/use-resource-params"},sidebar:"mainSidebar",previous:{title:"Remix",permalink:"/docs/routing/integrations/remix/"},next:{title:"useResource",permalink:"/docs/routing/hooks/use-resource/"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Inferring the <code>id</code> from the route",id:"inferring-the-id-from-the-route",level:3},{value:"Inferring the <code>formAction</code> from the route",id:"inferring-the-formaction-from-the-route",level:3},{value:"Return Values",id:"return-values",level:2},{value:"resource",id:"resource",level:3},{value:"identifier",id:"identifier",level:3},{value:"id",id:"id",level:3},{value:"setId",id:"setid",level:3},{value:"action",id:"action",level:3},{value:"formAction",id:"formaction",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return value",id:"return-value",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},m=s("DocThumbsUpDownFeedbackWidget"),y=s("PropsTable"),g={toc:u},f="wrapper";function h(e){var{components:t}=e,r=a(e,["components"]);return(0,n.yg)(f,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useResourceParams")," is used to get the related parameters of the current resource such as ",(0,n.yg)("inlineCode",{parentName:"p"},"resource"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"action"),". It also provides ",(0,n.yg)("inlineCode",{parentName:"p"},"formAction")," to determine the action of the form and ",(0,n.yg)("inlineCode",{parentName:"p"},"setId")," to set the ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," programmatically without having to use a separate state for it."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"const {\n  id?, // ID of the record\n  setId, // Function to set the ID\n  resource?, // Resource object\n  action?, // Passed action or inferred from the route\n  identifier?, // Identifier value of the resource\n  formAction?, // Form action derived from the action\n} = useResourceParams({\n  id?, // ID to set explicitly. Inferred from the route if not provided\n  action?, // Action to set explicitly. Inferred from the route if not provided\n  resource?, // Resource object to set explicitly. Inferred from the route if not provided\n});\n"))),(0,n.yg)("h3",{id:"inferring-the-id-from-the-route"},"Inferring the ",(0,n.yg)("inlineCode",{parentName:"h3"},"id")," from the route"),(0,n.yg)(m,{id:"inferring-the-id-from-the-route",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"When the ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," is not explicitly passed, it can be inferred from the route. Inference from the route is only possible under certain conditions:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If there's no explicitly set ",(0,n.yg)("inlineCode",{parentName:"li"},"resource")," value."),(0,n.yg)("li",{parentName:"ul"},"If there's an explicitly set ",(0,n.yg)("inlineCode",{parentName:"li"},"resource")," value and it's the same as the current route.")),(0,n.yg)("p",null,"This check is necessary to prevent the ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," from being inferred from a different resource."),(0,n.yg)("p",null,"If there's no explicit ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," value, no ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," from the route or there's a mismatch between the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," and the route, the ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," will be set to ",(0,n.yg)("inlineCode",{parentName:"p"},"undefined"),".")),(0,n.yg)("h3",{id:"inferring-the-formaction-from-the-route"},"Inferring the ",(0,n.yg)("inlineCode",{parentName:"h3"},"formAction")," from the route"),(0,n.yg)(m,{id:"inferring-the-formaction-from-the-route",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"formAction")," is inferred from the ",(0,n.yg)("inlineCode",{parentName:"p"},"action")," value."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If the ",(0,n.yg)("inlineCode",{parentName:"li"},"action")," is a valid form action (",(0,n.yg)("inlineCode",{parentName:"li"},"create"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"edit")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"clone"),"), the ",(0,n.yg)("inlineCode",{parentName:"li"},"formAction")," will be set to the ",(0,n.yg)("inlineCode",{parentName:"li"},"action"),"."),(0,n.yg)("li",{parentName:"ul"},"Otherwise, the ",(0,n.yg)("inlineCode",{parentName:"li"},"formAction")," will be set to ",(0,n.yg)("inlineCode",{parentName:"li"},"create"),".")),(0,n.yg)("p",null,"This is done to provide a more convenient way to determine the action of the form.")),(0,n.yg)("h2",{id:"return-values"},"Return Values"),(0,n.yg)("h3",{id:"resource"},"resource"),(0,n.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object.")),(0,n.yg)("h3",{id:"identifier"},"identifier"),(0,n.yg)(m,{id:"identifier",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Identifier value for the current resource, this can either be the ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," property or the ",(0,n.yg)("inlineCode",{parentName:"p"},"name")," property of the resource.")),(0,n.yg)("h3",{id:"id"},"id"),(0,n.yg)(m,{id:"id",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"id")," parameter to be used in the actions.")),(0,n.yg)("h3",{id:"setid"},"setId"),(0,n.yg)(m,{id:"setid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Function to set the ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," programmatically.")),(0,n.yg)("h3",{id:"action"},"action"),(0,n.yg)(m,{id:"action",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Current action to be performed. This can be explicitly passed via the ",(0,n.yg)("inlineCode",{parentName:"p"},"action")," parameter or inferred from the route.")),(0,n.yg)("h3",{id:"formaction"},"formAction"),(0,n.yg)(m,{id:"formaction",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Apart from the ",(0,n.yg)("inlineCode",{parentName:"p"},"action")," value, ",(0,n.yg)("inlineCode",{parentName:"p"},"formAction")," can only be ",(0,n.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"edit")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"clone"),". If the ",(0,n.yg)("inlineCode",{parentName:"p"},"action")," is not one of these, ",(0,n.yg)("inlineCode",{parentName:"p"},"formAction")," will be set to ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," for convenience.")),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"properties"},"Properties"),(0,n.yg)(m,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(y,{module:"@refinedev/core/useResourceParams",mdxType:"PropsTable"})),(0,n.yg)("h3",{id:"return-value"},"Return value"),(0,n.yg)(m,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resource"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"IResourceItem")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"undefined"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"identifier"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"undefined"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"id"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#basekey"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseKey")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"a"},"undefined")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"setId"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"(id: BaseKey) => void"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"action"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"clone"'))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"formAction"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"clone"')))))))}h.isMDXComponent=!0}}]);