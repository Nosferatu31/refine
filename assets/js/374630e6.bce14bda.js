"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1271],{58860:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>h});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>u});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Create",swizzle:!0},p=void 0,c={unversionedId:"ui-integrations/chakra-ui/components/buttons/create-button/index",id:"ui-integrations/chakra-ui/components/buttons/create-button/index",title:"Create",description:"` uses Chakra UI's  component. It uses the create method from useNavigation` under the hood. It can be useful to redirect the app to the create page route of resource.",source:"@site/docs/ui-integrations/chakra-ui/components/buttons/create-button/index.md",sourceDirName:"ui-integrations/chakra-ui/components/buttons/create-button",slug:"/ui-integrations/chakra-ui/components/buttons/create-button/",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/create-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/chakra-ui/components/buttons/create-button/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718352227,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{title:"Create",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Clone",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/clone-button/"},next:{title:"Delete",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/delete-button/"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"resource",id:"resource",level:3},{value:"meta",id:"meta",level:3},{value:"hideText",id:"hidetext",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},m=d("DocThumbsUpDownFeedbackWidget"),h=d("PropTag"),g=d("PropsTable"),y={toc:u},f="wrapper";function b(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(f,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: sharedRouterProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  legacyRouterProvider: sharedRouterProvider,\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  Layout: RefineChakra.Layout,\n  Sider: () => null,\n  catchAll: <RefineChakra.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>\n      {children}\n    </ChakraUI.ChakraProvider>\n  );\n};\n\nconst CreatePage = () => {\n  const { list } = RefineCore.useNavigation();\n  const params = RefineCore.useRouterContext().useParams();\n\n  return (\n    <ChakraUI.VStack alignItems="flex-start">\n      <ChakraUI.Text as="i" color="gray.700" fontSize="sm">\n        URL Parameters:\n      </ChakraUI.Text>\n      <ChakraUI.Code>{JSON.stringify(params)}</ChakraUI.Code>\n\n      <ChakraUI.Button\n        size="sm"\n        onClick={() => list("posts")}\n        colorScheme="green"\n      >\n        Go back\n      </ChakraUI.Button>\n    </ChakraUI.VStack>\n  );\n};\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<CreateButton>")," uses Chakra UI's ",(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/button/usage"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," method from ",(0,r.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful to redirect the app to the create page route of resource."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport {\n  List,\n  // highlight-next-line\n  CreateButton,\n} from "@refinedev/chakra-ui";\nimport {\n  TableContainer,\n  Table,\n  Thead,\n  Tr,\n  Th,\n  Tbody,\n  Td,\n} from "@chakra-ui/react";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n    ],\n    [],\n  );\n\n  const { getHeaderGroups, getRowModel } = useTable({\n    columns,\n  });\n\n  return (\n    // highlight-next-line\n    <List headerButtons={<CreateButton />}>\n      <TableContainer>\n        <Table variant="simple" whiteSpace="pre-line">\n          <Thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <Tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => {\n                  return (\n                    <Th key={header.id}>\n                      {!header.isPlaceholder &&\n                        flexRender(\n                          header.column.columnDef.header,\n                          header.getContext(),\n                        )}\n                    </Th>\n                  );\n                })}\n              </Tr>\n            ))}\n          </Thead>\n          <Tbody>\n            {getRowModel().rows.map((row) => {\n              return (\n                <Tr key={row.id}>\n                  {row.getVisibleCells().map((cell) => {\n                    return (\n                      <Td key={cell.id}>\n                        {flexRender(\n                          cell.column.columnDef.cell,\n                          cell.getContext(),\n                        )}\n                      </Td>\n                    );\n                  })}\n                </Tr>\n              );\n            })}\n          </Tbody>\n        </Table>\n      </TableContainer>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n          create: CreatePage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"resource"},"resource"),(0,r.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"resource")," is used to redirect the app to the ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," action path of the given resource name. By default, the app redirects to the inferred resource's ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," action path."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { CreateButton } from "@refinedev/chakra-ui";\n\nconst MyCreateComponent = () => {\n  return <CreateButton colorScheme="black" resource="categories" />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MyCreateComponent,\n        },\n        {\n          name: "categories",\n          create: CreatePage,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," method of ",(0,r.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," action path of the resource, filling the necessary parameters in the route."),(0,r.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.yg)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,r.yg)("h3",{id:"meta"},"meta"),(0,r.yg)(m,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"It is used to pass additional parameters to the ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," method of ",(0,r.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," method. You can pass additional parameters or override the existing ones using the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," prop."),(0,r.yg)("p",null,"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," action route is defined by the pattern: ",(0,r.yg)("inlineCode",{parentName:"p"},"/posts/:authorId/create"),", the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n  return <CreateButton meta={{ authorId: "10" }} />;\n};\n'))),(0,r.yg)("h3",{id:"hidetext"},"hideText"),(0,r.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hideText")," is used to show and not show the text of the button. When ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { CreateButton } from "@refinedev/chakra-ui";\n\nconst MyCreateComponent = () => {\n  return <CreateButton colorScheme="black" hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MyCreateComponent,\n          create: CreatePage,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h3",{id:"accesscontrol"},"accessControl"),(0,r.yg)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"accessControl")," prop can be used to skip the access control check with its ",(0,r.yg)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.yg)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { CreateButton } from "@refinedev/chakra-ui";\n\nexport const MyListComponent = () => {\n  return (\n    <CreateButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />\n  );\n};\n'))),(0,r.yg)("h3",{id:"resourcenameorroutename-"},(0,r.yg)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,r.yg)(h,{deprecated:!0,mdxType:"PropTag"})),(0,r.yg)(m,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(g,{module:"@refinedev/chakra-ui/CloneButton",mdxType:"PropsTable"})))}b.isMDXComponent=!0}}]);