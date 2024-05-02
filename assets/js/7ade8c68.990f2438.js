"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19267],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>u});t(96540);var r=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"layout",title:"Layout",swizzle:!0},s=void 0,l={unversionedId:"api-reference/chakra-ui/customization/layout",id:"version-3.xx.xx/api-reference/chakra-ui/customization/layout",title:"Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/customization/layout.md",sourceDirName:"api-reference/chakra-ui/customization",slug:"/api-reference/chakra-ui/customization/layout",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/customization/layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/customization/layout.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1714632650,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{id:"layout",title:"Layout",swizzle:!0},sidebar:"someSidebar",previous:{title:"Theme",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/customization/theme"},next:{title:"Sider",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/customization/sider"}},p={},u=[{value:"Creating a Custom Layout",id:"creating-a-custom-layout",level:2}],d=(m="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var m;const y={toc:u},f="wrapper";function g(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(f,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can create custom layouts using ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.yg)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.yg)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,r.yg)("p",null,"Both of these components can accept the listed props for customization. ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.yg)("inlineCode",{parentName:"a"},"<Refine>"))," being for global customization and the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.yg)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," being for local."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#layout"},(0,r.yg)("inlineCode",{parentName:"a"},"Layout"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#sider"},(0,r.yg)("inlineCode",{parentName:"a"},"Sider"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#footer"},(0,r.yg)("inlineCode",{parentName:"a"},"Footer"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#header"},(0,r.yg)("inlineCode",{parentName:"a"},"Header"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#offlayoutarea"},(0,r.yg)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#title"},(0,r.yg)("inlineCode",{parentName:"a"},"Title")))),(0,r.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.yg)("strong",{parentName:"a"},"refine CLI")))),(0,r.yg)("h2",{id:"creating-a-custom-layout"},"Creating a Custom Layout"),(0,r.yg)(d,{id:"creating-a-custom-layout",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's start with creating a ",(0,r.yg)("inlineCode",{parentName:"p"},"<CustomLayout/>")," component using ",(0,r.yg)("inlineCode",{parentName:"p"},"LayoutProps")," from ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-core")," with the following code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\nimport { useNavigation } from "@pankod/refine-core";\nimport {\n  List,\n  Text,\n  Code,\n  TableContainer,\n  Table,\n  Thead,\n  Tbody,\n  Tr,\n  Th,\n  Td,\n} from "@pankod/refine-chakra-ui";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n    ],\n    [],\n  );\n\n  const { getHeaderGroups, getRowModel } = useTable({\n    columns,\n    refineCoreProps: {\n      initialPageSize: 5,\n    },\n  });\n\n  return (\n    <List>\n      <TableContainer whiteSpace="pre-line">\n        <Table variant="simple">\n          <Thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <Tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => (\n                  <Th key={header.id}>\n                    {!header.isPlaceholder && (\n                      <Text>\n                        {flexRender(\n                          header.column.columnDef.header,\n                          header.getContext(),\n                        )}\n                      </Text>\n                    )}\n                  </Th>\n                ))}\n              </Tr>\n            ))}\n          </Thead>\n          <Tbody>\n            {getRowModel().rows.map((row) => (\n              <Tr key={row.id}>\n                {row.getVisibleCells().map((cell) => (\n                  <Td key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </Td>\n                ))}\n              </Tr>\n            ))}\n          </Tbody>\n        </Table>\n      </TableContainer>\n    </List>\n  );\n};\n\nconst DummyListPage = () => {\n  const { list } = useNavigation();\n  const params = RefineCore.useRouterContext().useParams();\n\n  return (\n    <List>\n      <Text as="i" color="dimmed" fontSize="sm">\n        URL Parameters:\n      </Text>\n      <Code>{JSON.stringify(params)}</Code>\n    </List>\n  );\n};\n\nconst IconList = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-list"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <line x1={9} y1={6} x2={20} y2={6}></line>\n    <line x1={9} y1={12} x2={20} y2={12}></line>\n    <line x1={9} y1={18} x2={20} y2={18}></line>\n    <line x1={5} y1={6} x2={5} y2="6.01"></line>\n    <line x1={5} y1={12} x2={5} y2="12.01"></line>\n    <line x1={5} y1={18} x2={5} y2="18.01"></line>\n  </svg>\n);\n\nconst IconCategory = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-category"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M4 4h6v6h-6z"></path>\n    <path d="M14 4h6v6h-6z"></path>\n    <path d="M4 14h6v6h-6z"></path>\n    <circle cx={17} cy={17} r={3}></circle>\n  </svg>\n);\n\nconst IconUsers = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-users"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <circle cx={9} cy={7} r={4}></circle>\n    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>\n    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\n    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>\n  </svg>\n);\n\n// visible-block-start\n// highlight-start\nimport {\n  Refine,\n  LayoutProps,\n  useMenu,\n  useRouterContext,\n} from "@pankod/refine-core";\n// highlight-end\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  ReadyPage,\n  useNotificationProvider,\n  refineTheme,\n  // highlight-start\n  Box,\n  HStack,\n  Button,\n  // highlight-end\n} from "@pankod/refine-chakra-ui";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\n// highlight-start\nconst CustomLayout: React.FC<LayoutProps> = ({ children }) => {\n  const { menuItems, selectedKey } = useMenu();\n  const { Link } = useRouterContext();\n\n  return (\n    <Box display="flex" flexDirection="column">\n      <Box\n        pt="2"\n        px="4"\n        bg="chakra-body-bg"\n        borderBottom="1px"\n        borderColor="gray.200"\n      >\n        <HStack>\n          {menuItems.map(({ route, label, icon }) => (\n            <Box key={route}>\n              <Button\n                as={Link}\n                to={route}\n                label={label}\n                variant="ghost"\n                colorScheme="green"\n                leftIcon={icon ?? ((<IconList size={20} />) as any)}\n                isActive={route === selectedKey}\n                borderBottomLeftRadius="0"\n                borderBottomRightRadius="0"\n              >\n                {label}\n              </Button>\n            </Box>\n          ))}\n        </HStack>\n      </Box>\n      <Box>{children}</Box>\n    </Box>\n  );\n};\n// highlight-end\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        notificationProvider={notificationProvider()}\n        ReadyPage={ReadyPage}\n        // highlight-next-line\n        Layout={CustomLayout}\n        resources={[\n          {\n            name: "posts",\n            list: PostList,\n          },\n          {\n            name: "categories",\n            list: DummyListPage,\n            icon: <IconCategory />,\n          },\n          {\n            name: "users",\n            list: DummyListPage,\n            icon: <IconUsers />,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.yg)("p",null,"We used ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/ui/useMenu"},(0,r.yg)("inlineCode",{parentName:"a"},"useMenu"))," hook to get the list of current resources and print it. We also use ",(0,r.yg)("inlineCode",{parentName:"p"},"useRouterContext")," hook to get the router context and use it to create a link."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},"refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192")))))}g.isMDXComponent=!0}}]);