"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21113],{58860:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>d});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>m});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"refine-themes-antd",title:"Refine Themes in Ant Design",sidebar_label:"Refine Themes","example-title":"Ant Design","example-tags":["antd","customization"]},c=void 0,p={unversionedId:"examples/themes/refine-themes-antd",id:"examples/themes/refine-themes-antd",title:"Refine Themes in Ant Design",description:"You can use predefined themes provided by Refine. In this example, we have created an example application by using the RefineThemes from @refinedev/antd. You can easily customize your theme as you wish in your Refine project.",source:"@site/docs/examples/themes/refine-themes-antd.md",sourceDirName:"examples/themes",slug:"/examples/themes/refine-themes-antd",permalink:"/docs/examples/themes/refine-themes-antd",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/themes/refine-themes-antd.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718352227,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"refine-themes-antd",title:"Refine Themes in Ant Design",sidebar_label:"Refine Themes","example-title":"Ant Design","example-tags":["antd","customization"]},sidebar:"mainSidebar",previous:{title:"Custom Theme",permalink:"/docs/examples/customization/theme/customThemeAntd"},next:{title:"Remix",permalink:"/docs/examples/remix/remix-antd"}},l={},m=[],u=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var f;const d={toc:m},y="wrapper";function b(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can use predefined themes provided by Refine. In this example, we have created an example application by using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/theming#predefined-themes"},(0,r.yg)("inlineCode",{parentName:"a"},"RefineThemes"))," from ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/antd"),". You can easily ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/theming#overriding-the-themes"},"customize your theme")," as you wish in your Refine project."),(0,r.yg)(u,{path:"theme-antd-demo",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);