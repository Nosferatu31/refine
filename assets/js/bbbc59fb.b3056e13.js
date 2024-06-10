"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53988],{58860:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>m});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},68329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>u});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={title:"<CanAccess />",siderbar_label:"<CanAccess />",source:"packages/core/src/components/canAccess/index.tsx"},s=void 0,p={unversionedId:"authorization/components/can-access/index",id:"authorization/components/can-access/index",title:"<CanAccess />",description:"` is the component form of useCan`.",source:"@site/docs/authorization/components/can-access/index.md",sourceDirName:"authorization/components/can-access",slug:"/authorization/components/can-access/",permalink:"/docs/authorization/components/can-access/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authorization/components/can-access/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1718008560,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{title:"<CanAccess />",siderbar_label:"<CanAccess />",source:"packages/core/src/components/canAccess/index.tsx"},sidebar:"mainSidebar",previous:{title:"Access Control Provider",permalink:"/docs/authorization/access-control-provider/"},next:{title:"useCan",permalink:"/docs/authorization/hooks/use-can/"}},l={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Usage with props",id:"usage-with-props",level:3},{value:"Properties",id:"properties",level:2},{value:"onUnauthorized",id:"onunauthorized",level:3},{value:"fallback",id:"fallback",level:3},{value:"queryOptions",id:"queryoptions",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},y=d("DocThumbsUpDownFeedbackWidget"),m=d("PropsTable"),g={toc:u},f="wrapper";function h(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(f,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<CanAccess>")," is the component form of ",(0,r.yg)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},(0,r.yg)("inlineCode",{parentName:"a"},"useCan")),"."),(0,r.yg)("p",null,"It internally uses ",(0,r.yg)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},(0,r.yg)("inlineCode",{parentName:"a"},"useCan")),"'s return values to provide its functionality."),(0,r.yg)("p",null,"Passes the given properties to the ",(0,r.yg)("inlineCode",{parentName:"p"},"can")," method from your access control provider. After, if it returns ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", it renders the children, otherwise, if it returns ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),", it renders ",(0,r.yg)("a",{parentName:"p",href:"#fallback"},(0,r.yg)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it renders ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,r.yg)("p",null,"To learn more about authorization, check out the ",(0,r.yg)("a",{parentName:"p",href:"/docs/guides-concepts/authorization"},"Authorization")," guide and ",(0,r.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Access Control Provider")," documentation."),(0,r.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.yg)(y,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"By default, the ",(0,r.yg)("inlineCode",{parentName:"p"},"CanAccess")," component will infer the current ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," and the ",(0,r.yg)("inlineCode",{parentName:"p"},"action")," based on your route automatically. ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," will also be inferred if the current route includes one."),(0,r.yg)("p",null,"So if you are at the ",(0,r.yg)("inlineCode",{parentName:"p"},"/posts")," route, ",(0,r.yg)("inlineCode",{parentName:"p"},"CanAccess")," will check authorization for the ",(0,r.yg)("inlineCode",{parentName:"p"},"posts")," resource and the ",(0,r.yg)("inlineCode",{parentName:"p"},"list")," action."),(0,r.yg)("p",null,"For ",(0,r.yg)("inlineCode",{parentName:"p"},"/posts/show/:id")," route, the action will be ",(0,r.yg)("inlineCode",{parentName:"p"},"show"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@refinedev/core";\n\nconst MyComponent = () => (\n  <CanAccess fallback={<CustomFallback />}>\n    <YourComponent />\n  </CanAccess>\n);\n'))),(0,r.yg)("h3",{id:"usage-with-props"},"Usage with props"),(0,r.yg)(y,{id:"usage-with-props",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You may have a case like in the ",(0,r.yg)("inlineCode",{parentName:"p"},"/posts/show/:id")," page, where, inferred resource is ",(0,r.yg)("inlineCode",{parentName:"p"},"posts")," and action is ",(0,r.yg)("inlineCode",{parentName:"p"},"show"),", but you want to authorize a different resource eg. ",(0,r.yg)("inlineCode",{parentName:"p"},"category"),"."),(0,r.yg)("p",null,"In this case, you can explicitly pass props to the ",(0,r.yg)("inlineCode",{parentName:"p"},"CanAccess")," component for authorizing a different resource."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@refinedev/core";\n\nexport const MyComponent = () => {\n  return (\n    <Buttons>\n      <CreateButton>Create</CreateButton>\n      <CanAccess resource="posts" action="delete">\n        <DeleteButton>Delete</DeleteButton>\n      </CanAccess>\n    </Buttons>\n  );\n};\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)(y,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"It also accepts all the properties of ",(0,r.yg)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can#properties"},(0,r.yg)("inlineCode",{parentName:"a"},"useCan")),".")),(0,r.yg)("h3",{id:"onunauthorized"},"onUnauthorized"),(0,r.yg)(y,{id:"onunauthorized",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Callback to be called when ",(0,r.yg)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},(0,r.yg)("inlineCode",{parentName:"a"},"useCan"))," returns false."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess\n  onUnauthorized={({ resource, reason, action, params }) =>\n    console.log(\n      `You cannot access ${resource}-${params.id} resource with ${action} action because ${reason}`,\n    )\n  }\n>\n  <YourComponent />\n</CanAccess>\n"))),(0,r.yg)("h3",{id:"fallback"},"fallback"),(0,r.yg)(y,{id:"fallback",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Component to render if ",(0,r.yg)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},(0,r.yg)("inlineCode",{parentName:"a"},"useCan"))," returns false. If ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined"),", it renders ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess fallback={<div>You cannot access this section</div>}>\n  <YourComponent />\n</CanAccess>\n"))),(0,r.yg)("h3",{id:"queryoptions"},"queryOptions"),(0,r.yg)(y,{id:"queryoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Accepts ",(0,r.yg)("inlineCode",{parentName:"p"},"UseQueryOptions<CanReturnType>")," to customize the caching behavior of the underlying query."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess queryOptions={{ cacheTime: 25000 }}>\n  <YourComponent />\n</CanAccess>\n"))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(y,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(m,{module:"@refinedev/core/CanAccess",mdxType:"PropsTable"})))}h.isMDXComponent=!0}}]);