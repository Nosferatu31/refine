"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17815],{58860:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>u});var t=r(37953);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||o;return r?t.createElement(u,a(a({ref:n},c),{},{components:r})):t.createElement(u,a({ref:n},c))}));function u(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26279:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>x,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var t=r(37953),i=r(58860);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const p={id:"inferencer",title:"Inferencer"},s=void 0,c={unversionedId:"api-reference/mantine/components/inferencer",id:"version-3.xx.xx/api-reference/mantine/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @pankod/refine-inferencer. Inferencer exports MantineListInferencer, MantineShowInferencer, MantineEditInferencer, MantineCreateInferencer and MantineInferencer (which combines all in one place) components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/components/inferencer.md",sourceDirName:"api-reference/mantine/components",slug:"/api-reference/mantine/components/inferencer",permalink:"/docs/3.xx.xx/api-reference/mantine/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/components/inferencer.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720181868,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"<AuthPage>",permalink:"/docs/3.xx.xx/api-reference/mantine/components/mantine-auth-page"},next:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/mantine/components/basic-views/create"}},m={},d=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],f=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",n)},u=f("DocThumbsUpDownFeedbackWidget"),h=f("Tabs"),g=f("TabItem"),y=f("CodeSandboxExample"),v={toc:d},b="wrapper";function x(e){var{components:n}=e,r=l(e,["components"]);return(0,i.yg)(b,a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},v,r),{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"You can automatically generate views for your resources using ",(0,i.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer"),". Inferencer exports ",(0,i.yg)("inlineCode",{parentName:"p"},"MantineListInferencer"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"MantineShowInferencer"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"MantineEditInferencer"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"MantineCreateInferencer")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"MantineInferencer")," (which combines all in one place) components."),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)(u,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Mantine components can be imported from ",(0,i.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/mantine"),". You can directly use the components in ",(0,i.yg)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,i.yg)("inlineCode",{parentName:"p"},"Refine")," component or you can use them in your custom components by passing the ",(0,i.yg)("inlineCode",{parentName:"p"},"resource")," prop as the resource name."),(0,i.yg)(h,{defaultValue:"resources",values:[{label:(0,i.yg)(t.Fragment,null,"In",(0,i.yg)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,i.yg)(g,{value:"resources",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import {\n  Layout,\n  MantineProvider,\n  LightTheme,\n  Global,\n} from "@pankod/refine-mantine";\n\n// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <Refine\n        resources={[\n          {\n            name: "samples",\n            // highlight-start\n            list: MantineInferencer,\n            show: MantineInferencer,\n            create: MantineInferencer,\n            edit: MantineInferencer,\n            // highlight-end\n          },\n        ]}\n      />\n    </MantineProvider>\n  );\n};\n'))),(0,i.yg)(g,{value:"custom",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst SampleList = () => {\n  return (\n    // highlight-next-line\n    <MantineInferencer resource="samples" action="list" />\n  );\n};\n\nconst SampleShow = () => {\n  return (\n    // highlight-next-line\n    <MantineInferencer resource="samples" action="show" id="1" />\n  );\n};\n\nconst SampleCreate = () => {\n  return (\n    // highlight-next-line\n    <MantineInferencer resource="samples" action="create" />\n  );\n};\n\nconst SampleEdit = () => {\n  return (\n    // highlight-next-line\n    <MantineInferencer resource="samples" action="edit" id="1" />\n  );\n};\n')))),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"To learn more about ",(0,i.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package, please check out ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/inferencer"},"Docs")))),(0,i.yg)("h2",{id:"views"},"Views"),(0,i.yg)("h3",{id:"list"},(0,i.yg)("inlineCode",{parentName:"h3"},"List")),(0,i.yg)(u,{id:"list",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,i.yg)("inlineCode",{parentName:"p"},"List")," component and from ",(0,i.yg)("inlineCode",{parentName:"p"},"@pankod/refine-mantine")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,i.yg)("inlineCode",{parentName:"p"},"@pankod/refine-react-table"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  MantineProvider,\n  LightTheme,\n  Global,\n} from "@pankod/refine-mantine";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            // highlight-next-line\n            list: MantineInferencer,\n            show: MantineInferencer,\n            create: MantineInferencer,\n            edit: MantineInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            // highlight-next-line\n            list: MantineInferencer,\n            show: MantineInferencer,\n          },\n          {\n            name: "tags",\n            // highlight-next-line\n            list: MantineInferencer,\n            show: MantineInferencer,\n          },\n        ]}\n      />\n    </MantineProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,i.yg)("h3",{id:"show"},(0,i.yg)("inlineCode",{parentName:"h3"},"Show")),(0,i.yg)(u,{id:"show",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,i.yg)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,i.yg)("inlineCode",{parentName:"p"},"@pankod/refine-mantine")," with ",(0,i.yg)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,i.yg)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  MantineProvider,\n  LightTheme,\n  Global,\n} from "@pankod/refine-mantine";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            list: MantineInferencer,\n            // highlight-next-line\n            show: MantineInferencer,\n            create: MantineInferencer,\n            edit: MantineInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            list: MantineInferencer,\n            // highlight-next-line\n            show: MantineInferencer,\n          },\n          {\n            name: "tags",\n            list: MantineInferencer,\n            // highlight-next-line\n            show: MantineInferencer,\n          },\n        ]}\n      />\n    </MantineProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,i.yg)("h3",{id:"create"},(0,i.yg)("inlineCode",{parentName:"h3"},"Create")),(0,i.yg)(u,{id:"create",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,i.yg)("inlineCode",{parentName:"p"},"Create")," component and ",(0,i.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,i.yg)("inlineCode",{parentName:"p"},"@pankod/refine-mantine"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  MantineProvider,\n  LightTheme,\n  Global,\n} from "@pankod/refine-mantine";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            list: MantineInferencer,\n            show: MantineInferencer,\n            // highlight-next-line\n            create: MantineInferencer,\n            edit: MantineInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            list: MantineInferencer,\n            show: MantineInferencer,\n          },\n          {\n            name: "tags",\n            list: MantineInferencer,\n            show: MantineInferencer,\n          },\n        ]}\n      />\n    </MantineProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,i.yg)("h3",{id:"edit"},(0,i.yg)("inlineCode",{parentName:"h3"},"Edit")),(0,i.yg)(u,{id:"edit",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,i.yg)("inlineCode",{parentName:"p"},"Edit")," component and ",(0,i.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,i.yg)("inlineCode",{parentName:"p"},"@pankod/refine-mantine"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  MantineProvider,\n  LightTheme,\n  Global,\n} from "@pankod/refine-mantine";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            list: MantineInferencer,\n            show: MantineInferencer,\n            create: MantineInferencer,\n            // highlight-next-line\n            edit: MantineInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            list: MantineInferencer,\n            show: MantineInferencer,\n          },\n          {\n            name: "tags",\n            list: MantineInferencer,\n            show: MantineInferencer,\n          },\n        ]}\n      />\n    </MantineProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)(u,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,i.yg)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,i.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/mantine")," components."),(0,i.yg)(y,{path:"inferencer-mantine",mdxType:"CodeSandboxExample"})))}x.isMDXComponent=!0}}]);