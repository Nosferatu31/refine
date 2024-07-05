"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54694],{58860:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=s(a),m=r,c=g["".concat(p,".").concat(m)]||g[m]||u[m]||i;return a?n.createElement(c,o(o({ref:t},d),{},{components:a})):n.createElement(c,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>N,frontMatter:()=>l,metadata:()=>s,toc:()=>g});a(37953);var n=a(58860);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"GraphQL",source:"https://github.com/refinedev/refine/tree/master/packages/graphql",swizzle:!0},p=void 0,s={unversionedId:"data/packages/graphql/index",id:"data/packages/graphql/index",title:"GraphQL",description:"Refine provides a data provider for GraphQL APIs that has all the features of Refine without giving up the GraphQL features.",source:"@site/docs/data/packages/graphql/index.md",sourceDirName:"data/packages/graphql",slug:"/data/packages/graphql/",permalink:"/docs/data/packages/graphql/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/packages/graphql/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720181868,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"GraphQL",source:"https://github.com/refinedev/refine/tree/master/packages/graphql",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Appwrite",permalink:"/docs/data/packages/appwrite/"},next:{title:"Simple REST",permalink:"/docs/data/packages/simple-rest/"}},d={},g=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Realtime",id:"realtime",level:2},{value:"Queries and Mutations",id:"queries-and-mutations",level:2},{value:"Authentication",id:"authentication",level:2},{value:"GraphQL Query Builder",id:"graphql-query-builder",level:2},{value:"Usage with Inferencer",id:"usage-with-inferencer",level:2},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},m=u("DocThumbsUpDownFeedbackWidget"),c=u("InstallPackagesCommand"),y=u("CodeSandboxExample"),h={toc:g},f="wrapper";function N(e){var{components:t}=e,a=o(e,["components"]);return(0,n.yg)(f,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Refine provides a data provider for GraphQL APIs that has all the features of Refine without giving up the GraphQL features."),(0,n.yg)("admonition",{title:"Good to know",type:"simple"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"This library uses ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/jasonkuhrt/graphql-request"},(0,n.yg)("inlineCode",{parentName:"a"},"graphql-request@5"))," to handle the requests."),(0,n.yg)("li",{parentName:"ul"},"To build queries and mutations, ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/atulmy/gql-query-builder"},(0,n.yg)("inlineCode",{parentName:"a"},"gql-query-builder"))," is used."),(0,n.yg)("li",{parentName:"ul"},"You can also use ",(0,n.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/graphql-tag"},(0,n.yg)("inlineCode",{parentName:"a"},"graphql-tag"))," to write your queries and mutations."),(0,n.yg)("li",{parentName:"ul"},"To learn more about data fetching in Refine, check out the ",(0,n.yg)("a",{parentName:"li",href:"/docs/guides-concepts/data-fetching"},"Data Fetching")," guide."))),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)(m,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(c,{args:"@refinedev/graphql",mdxType:"InstallPackagesCommand"})),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"We'll create a GraphQL Client with our API url and pass it to the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," function to create a data provider."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\nimport dataProvider, { GraphQLClient } from "@refinedev/graphql";\n\n// highlight-next-line\nconst client = new GraphQLClient("https://api.example.com/graphql");\n\nconst App = () => (\n  <Refine\n    // highlight-next-line\n    dataProvider={dataProvider(client)}\n  >\n    {/* ... */}\n  </Refine>\n);\n'))),(0,n.yg)("h2",{id:"realtime"},"Realtime"),(0,n.yg)(m,{id:"realtime",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"@refinedev/graphql")," also provides a ",(0,n.yg)("inlineCode",{parentName:"p"},"liveProvider")," to enable realtime features of Refine. These features are powered by GraphQL subscriptions and uses ",(0,n.yg)("a",{parentName:"p",href:"https://the-guild.dev/graphql/ws"},(0,n.yg)("inlineCode",{parentName:"a"},"graphql-ws"))," to handle the connections."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\n// highlight-next-line\nimport dataProvider, {\n  GraphQLClient,\n  liveProvider,\n  graphqlWS,\n} from "@refinedev/graphql";\n\nconst client = new GraphQLClient("https://api.example.com/graphql");\n// highlight-next-line\nconst wsClient = graphqlWS.createClient({\n  url: "wss://api.example.com/graphql",\n});\n\nconst App = () => (\n  <Refine\n    dataProvider={dataProvider(client)}\n    // highlight-next-line\n    liveProvider={liveProvider(wsClient)}\n    options={{ liveMode: "auto" }}\n  >\n    {/* ... */}\n  </Refine>\n);\n'))),(0,n.yg)("h2",{id:"queries-and-mutations"},"Queries and Mutations"),(0,n.yg)(m,{id:"queries-and-mutations",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"You can use ",(0,n.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql-tag"},(0,n.yg)("inlineCode",{parentName:"a"},"graphql-tag"))," to write your queries and mutations."),(0,n.yg)("p",null,"Refine hooks' ",(0,n.yg)("inlineCode",{parentName:"p"},"meta")," object has optional ",(0,n.yg)("inlineCode",{parentName:"p"},"gqlQuery")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"gqlMutation")," properties, you can use them to write your queries and mutations."),(0,n.yg)("p",null,"As a best-practice, we suggest writing your queries/mutations in a separate file, next to the component that uses it."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/queries.ts"',title:'"src/pages/posts/queries.ts"'},'import gql from "graphql-tag";\n\nconst POSTS_LIST_QUERY = gql`\n  query PostList($where: JSON, $sort: String) {\n    posts(where: $where, sort: $sort) {\n      id\n      title\n      content\n      category {\n        id\n      }\n    }\n  }\n`;\n\nconst POST_CREATE_MUTATION = gql`\n  mutation createPost($input: createPostInput!) {\n    createPost(input: $input) {\n      id\n      title\n      content\n      category {\n        id\n      }\n    }\n  }\n`;\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useList } from "@refinedev/core";\nimport { POSTS_LIST_QUERY } from "./queries";\n\nexport const PostListPage () => {\n  const { data } = useList({\n    resource: "posts",\n    // highlight-next-line\n    meta: { gqlQuery: POSTS_LIST_QUERY },\n  });\n\n  return (\n    <div>\n      {/* ... */}\n    </div>\n  );\n}\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/create.tsx"',title:'"src/pages/posts/create.tsx"'},'import { useForm } from "@refinedev/core";\nimport { POST_CREATE_MUTATION } from "./queries";\n\nexport const PostCreatePage () => {\n  const { formProps } = useForm({\n    resource: "posts",\n    // highlight-next-line\n    meta: { gqlMutation: POST_CREATE_MUTATION },\n  });\n\n  return (\n    <div>\n      {/* ... */}\n    </div>\n  );\n}\n'))),(0,n.yg)("h2",{id:"authentication"},"Authentication"),(0,n.yg)(m,{id:"authentication",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If your API uses authentication, you can easily provide a custom fetcher for the requests and handle the authentication logic there. When creating a GraphQL Client, you can pass a ",(0,n.yg)("inlineCode",{parentName:"p"},"fetch")," function to the client options. This function will be used to append the authentication headers to the requests."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="data-provider.tsx"',title:'"data-provider.tsx"'},'import graphqlDataProvider, { GraphQLClient } from "@refinedev/graphql";\n\nconst client = new GraphQLClient(API_URL, {\n  fetch: (url: string, options: RequestInit) => {\n    return fetch(url, {\n      ...options,\n      headers: {\n        ...options.headers,\n        /**\n         * For demo purposes, we\'re using `localStorage` to access the token.\n         * You can use your own authentication logic here.\n         * In real world applications, you\'ll need to handle it in sync with your `authProvider`.\n         */\n        // highlight-next-line\n        Authorization: `Bearer ${localStorage.getItem("token")}`,\n      },\n    });\n  },\n});\n\n/**\n * Create the data provider with the custom client.\n */\nconst dataProvider = graphqlDataProvider(client);\n'))),(0,n.yg)("h2",{id:"graphql-query-builder"},"GraphQL Query Builder"),(0,n.yg)(m,{id:"graphql-query-builder",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"GraphQL Query Builder")," allows us to build queries and mutations. The ",(0,n.yg)("inlineCode",{parentName:"p"},"getList"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"getMany"),", and, ",(0,n.yg)("inlineCode",{parentName:"p"},"getOne")," methods in our ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," generate a query to send a request. On the other hand, the ",(0,n.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"createMany"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"update"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"updateMany"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteOne"),", and, ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteMany")," methods generate a mutation to send a request."),(0,n.yg)("p",null,"In order to create a GraphQL query, our ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," has to take some options, such as specifying which fields will come in response, we pass these options to our ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," methods with ",(0,n.yg)("inlineCode",{parentName:"p"},"MetaDataQuery"),"."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder#options"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"meta")," properties for detailed usage. ","\u2192")),(0,n.yg)("p",null,"Hooks and components that support ",(0,n.yg)("inlineCode",{parentName:"p"},"meta"),":"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Supported data hooks"),(0,n.yg)("th",{parentName:"tr",align:null},"Supported other hooks"),(0,n.yg)("th",{parentName:"tr",align:null},"Supported components"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-update"},(0,n.yg)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-form"},(0,n.yg)("inlineCode",{parentName:"a"},"useForm")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/components/buttons/delete-button"},(0,n.yg)("inlineCode",{parentName:"a"},"DeleteButton")," ","\u2192"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-update"},(0,n.yg)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-modal-form"},(0,n.yg)("inlineCode",{parentName:"a"},"useModalForm")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/components/buttons/refresh-button"},(0,n.yg)("inlineCode",{parentName:"a"},"RefreshButton")," ","\u2192"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-delete"},(0,n.yg)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-drawer-form"},(0,n.yg)("inlineCode",{parentName:"a"},"useDrawerForm")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-delete"},(0,n.yg)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-steps-form"},(0,n.yg)("inlineCode",{parentName:"a"},"useStepsForm")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-create"},(0,n.yg)("inlineCode",{parentName:"a"},"useCreate")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-table"},(0,n.yg)("inlineCode",{parentName:"a"},"useTable")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-create"},(0,n.yg)("inlineCode",{parentName:"a"},"useCreateMany")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-editable-table"},(0,n.yg)("inlineCode",{parentName:"a"},"useEditableTable")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-list"},(0,n.yg)("inlineCode",{parentName:"a"},"useList")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-simple-list"},(0,n.yg)("inlineCode",{parentName:"a"},"useSimpleList")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-one"},(0,n.yg)("inlineCode",{parentName:"a"},"useOne")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-show"},(0,n.yg)("inlineCode",{parentName:"a"},"useShow")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-many"},(0,n.yg)("inlineCode",{parentName:"a"},"useMany")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/hooks/utilities/use-export"},(0,n.yg)("inlineCode",{parentName:"a"},"useExport")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-custom"},(0,n.yg)("inlineCode",{parentName:"a"},"useCustom")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-checkbox-group"},(0,n.yg)("inlineCode",{parentName:"a"},"useCheckboxGroup")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-select"},(0,n.yg)("inlineCode",{parentName:"a"},"useSelect")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-radio-group"},(0,n.yg)("inlineCode",{parentName:"a"},"useRadioGroup")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null}))))),(0,n.yg)("h2",{id:"usage-with-inferencer"},"Usage with Inferencer"),(0,n.yg)(m,{id:"usage-with-inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"You can also use ",(0,n.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package to generate sample codes for your views. Since the GraphQL data providers rely on ",(0,n.yg)("inlineCode",{parentName:"p"},"meta")," fields, you'll need to provide some ",(0,n.yg)("inlineCode",{parentName:"p"},"meta")," values beforehand and then Inferencer will use these values to infer the fields of the data provider's response, generate a code and a preview."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages#usage-with-graphql-backends-and-meta-values"},"Check out Inferencer docs for more information. ","\u2192"))),(0,n.yg)("h2",{id:"example"},"Example"),(0,n.yg)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(y,{path:"data-provider-nestjs-query",mdxType:"CodeSandboxExample"})))}N.isMDXComponent=!0}}]);