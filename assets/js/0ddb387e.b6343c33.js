"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26308],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(n),y=o,m=l["".concat(s,".").concat(y)]||l[y]||u[y]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},91406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>l});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"nhost",title:"Nhost","example-tags":["antd","data-provider","nhost","auth-provider","graphql"]},s=void 0,d={unversionedId:"examples/data-provider/nhost",id:"version-3.xx.xx/examples/data-provider/nhost",title:"Nhost",description:"refine Nhost GraphQL Data Provider comes out-of-the-box. Thanks to refine, you can connect to your Nhost database and create special queries and use your data easily. This example shows in detail how you can use the data in your Nhost database with refine project.",source:"@site/versioned_docs/version-3.xx.xx/examples/data-provider/nhost.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/nhost",permalink:"/docs/3.xx.xx/examples/data-provider/nhost",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/data-provider/nhost.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1719988904,formattedLastUpdatedAt:"Jul 3, 2024",frontMatter:{id:"nhost",title:"Nhost","example-tags":["antd","data-provider","nhost","auth-provider","graphql"]},sidebar:"someSidebar",previous:{title:"Nestjsx Crud",permalink:"/docs/3.xx.xx/examples/data-provider/nestjsxCrud"},next:{title:"Strapi",permalink:"/docs/3.xx.xx/examples/data-provider/strapi"}},c={},l=[{value:"ID Data Type",id:"id-data-type",level:2},{value:"Passing &#39;Int&#39; or &#39;uuid&#39; to <code>idType</code>",id:"passing-int-or-uuid-to-idtype",level:4},{value:"Passing function to <code>idType</code>",id:"passing-function-to-idtype",level:4}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},y=u("DocThumbsUpDownFeedbackWidget"),m=u("CodeSandboxExample"),g={toc:l},f="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(f,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"refine")," ",(0,r.yg)("a",{parentName:"p",href:"https://nhost.io/"},"Nhost")," GraphQL Data Provider comes out-of-the-box. Thanks to ",(0,r.yg)("strong",{parentName:"p"},"refine"),", you can connect to your Nhost database and create special queries and use your data easily. This example shows in detail how you can use the data in your Nhost database with ",(0,r.yg)("strong",{parentName:"p"},"refine")," project."),(0,r.yg)("h2",{id:"id-data-type"},"ID Data Type"),(0,r.yg)(y,{id:"id-data-type",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"By default, the data provider assume that your ",(0,r.yg)("inlineCode",{parentName:"p"},"ID")," type is ",(0,r.yg)("inlineCode",{parentName:"p"},"uuid"),", you can change this behavior by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"idType")," option. You can pass ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"uuid")," as the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"idType")," option or use function to determine the ",(0,r.yg)("inlineCode",{parentName:"p"},"idType")," based on the resource name.")),(0,r.yg)("h4",{id:"passing-int-or-uuid-to-idtype"},"Passing 'Int' or 'uuid' to ",(0,r.yg)("inlineCode",{parentName:"h4"},"idType")),(0,r.yg)(y,{id:"passing-int-or-uuid-to-idtype",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"This will allow you to determine the ",(0,r.yg)("inlineCode",{parentName:"p"},"idType")," for all resources."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const myDataProvider = dataProvider(client, {\n  idType: "Int",\n});\n'))),(0,r.yg)("h4",{id:"passing-function-to-idtype"},"Passing function to ",(0,r.yg)("inlineCode",{parentName:"h4"},"idType")),(0,r.yg)(y,{id:"passing-function-to-idtype",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"This will allow you to determine the ",(0,r.yg)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const idTypeMap: Record<string, "Int" | "uuid"> = {\n  users: "Int",\n  posts: "uuid",\n};\nconst myDataProvider = dataProvider(client, {\n  idType: (resource) => idTypeMap[resource] ?? "uuid",\n});\n')),(0,r.yg)("admonition",{title:"Demo Credentials",type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Username"),": ",(0,r.yg)("a",{parentName:"p",href:"mailto:info@refine.dev"},"info@refine.dev"),"\n",(0,r.yg)("strong",{parentName:"p"},"Password"),": demodemo")),(0,r.yg)(m,{path:"--branch v3 data-provider-nhost",mdxType:"CodeSandboxExample"})))}h.isMDXComponent=!0}}]);