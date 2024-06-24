"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93057],{58860:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>y});var n=t(37953);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,y=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return t?n.createElement(y,o(o({ref:a},p),{},{components:t})):n.createElement(y,o({ref:a},p))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34189:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});t(37953);var n=t(58860);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const l={title:"useCreateMany",siderbar_label:"useCreateMany",source:"packages/core/src/hooks/data/useCreateMany.ts"},d=void 0,s={unversionedId:"api-reference/core/hooks/data/useCreateMany/index",id:"version-3.xx.xx/api-reference/core/hooks/data/useCreateMany/index",title:"useCreateMany",description:"useCreateMany is an extended version of TanStack Query's useMutation. It supports all the features of useMutation and adds some extra features.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useCreateMany/index.md",sourceDirName:"api-reference/core/hooks/data/useCreateMany",slug:"/api-reference/core/hooks/data/useCreateMany/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreateMany/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useCreateMany/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1719220803,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{title:"useCreateMany",siderbar_label:"useCreateMany",source:"packages/core/src/hooks/data/useCreateMany.ts"},sidebar:"someSidebar",previous:{title:"useCreate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"},next:{title:"useCustom",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustom/"}},p={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Invalidating Queries",id:"invalidating-queries",level:2},{value:"Audit Logs",id:"audit-logs",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>mutationOptions</code>",id:"mutationoptions",level:3},{value:"Mutation Parameters",id:"mutation-parameters",level:2},{value:"<code>resource</code> <PropTag required />",id:"resource-",level:3},{value:"<code>values</code> <PropTag required />",id:"values-",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>metaData</code>",id:"metadata",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>invalidates</code>",id:"invalidates",level:3},{value:"Return Values",id:"return-values",level:2},{value:"API",id:"api",level:2},{value:"Mutation Parameters",id:"mutation-parameters-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",a)},m=c("DocThumbsUpDownFeedbackWidget"),y=c("PropTag"),g={toc:u},h="wrapper";function f(e){var{components:a}=e,t=o(e,["components"]);return(0,n.yg)(h,i(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){r(e,a,t[a])}))}return e}({},g,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useCreateMany")," is an extended version of TanStack Query's ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")),". It supports all the features of ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," and adds some extra features."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It uses the ",(0,n.yg)("inlineCode",{parentName:"li"},"createMany")," method as the ",(0,n.yg)("strong",{parentName:"li"},"mutation function")," from the ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.yg)("inlineCode",{parentName:"li"},"<Refine>"),".")),(0,n.yg)("p",null,"It is useful when you want to create multiple records."),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"If your data provider does not have a ",(0,n.yg)("inlineCode",{parentName:"p"},"createMany")," method, ",(0,n.yg)("inlineCode",{parentName:"p"},"useCreateMany")," will use the ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," method instead. It is not recommended, because it will make requests one by one for each record. It is better to implement the ",(0,n.yg)("inlineCode",{parentName:"p"},"createMany")," method in the data provider.")),(0,n.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.yg)(m,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"useCreateMany")," hook returns many useful properties and methods. One of them is the ",(0,n.yg)("inlineCode",{parentName:"p"},"mutate")," method which expects ",(0,n.yg)("inlineCode",{parentName:"p"},"values")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," as parameters. These parameters will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"createMany")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as parameters."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useCreateMany } from "@pankod/refine-core";\n\nconst { mutate } = useCreateMany();\n\nmutate({\n  resource: "products",\n  values: [\n    {\n      name: "Product 1",\n      material: "Wood",\n    },\n    {\n      name: "Product 2",\n      material: "Metal",\n    },\n  ],\n});\n'))),(0,n.yg)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,n.yg)(m,{id:"realtime-updates",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},"Live Provider"),".")),(0,n.yg)("p",null,"When the ",(0,n.yg)("inlineCode",{parentName:"p"},"useCreateMany")," mutation runs successfully, it will call the ",(0,n.yg)("inlineCode",{parentName:"p"},"publish")," method from ",(0,n.yg)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,n.yg)("inlineCode",{parentName:"p"},"channel"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"type")," etc. It is useful when you want to publish the changes to the subscribers on the client side."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"liveProvider")," documentation for more information ","\u2192"))),(0,n.yg)("h2",{id:"invalidating-queries"},"Invalidating Queries"),(0,n.yg)(m,{id:"invalidating-queries",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"When the ",(0,n.yg)("inlineCode",{parentName:"p"},"useCreateMany")," mutation runs successfully, by default it will invalidate the following queries from the current ",(0,n.yg)("inlineCode",{parentName:"p"},"resource"),": ",(0,n.yg)("inlineCode",{parentName:"p"},'"list"')," and ",(0,n.yg)("inlineCode",{parentName:"p"},'"many"'),". That means, if you use ",(0,n.yg)("inlineCode",{parentName:"p"},"useList")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"useMany")," hooks in the same page, they will refetch the data after the mutation is completed. You can change this behavior by passing ",(0,n.yg)("a",{parentName:"p",href:"#invalidates"},(0,n.yg)("inlineCode",{parentName:"a"},"invalidates"))," prop."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/query-invalidation"},"Refer to the query invalidation documentation for more information ","\u2192"))),(0,n.yg)("h2",{id:"audit-logs"},"Audit Logs"),(0,n.yg)(m,{id:"audit-logs",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/audit-log-provider/"},"Audit Log Provider"),".")),(0,n.yg)("p",null,"When the ",(0,n.yg)("inlineCode",{parentName:"p"},"useCreateMany")," mutation runs successfully, it will call the ",(0,n.yg)("inlineCode",{parentName:"p"},"log")," method from ",(0,n.yg)("inlineCode",{parentName:"p"},"auditLogProvider")," with some parameters such as ",(0,n.yg)("inlineCode",{parentName:"p"},"resource"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"action"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"data")," etc. It is useful when you want to log the changes to the database."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/audit-log-provider/"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"auditLogProvider")," documentation for more information ","\u2192"))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"mutationoptions"},(0,n.yg)("inlineCode",{parentName:"h3"},"mutationOptions")),(0,n.yg)(m,{id:"mutationoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"mutationOptions")," is used to pass options to the ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," hook. It is useful when you want to pass additional options to the ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," hook."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"useCreateMany({\n  mutationOptions: {\n    retry: 3,\n  },\n});\n")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"mutationOptions")," does not support ",(0,n.yg)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"onError")," props because they override the default ",(0,n.yg)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"onError")," functions. If you want to use these props, you can pass them to mutate functions like this:"),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate(\n  {\n    resource: "products",\n    values: [\n      {\n        name: "Product 1",\n        material: "Wood",\n      },\n      {\n        name: "Product 2",\n        material: "Metal",\n      },\n    ],\n  },\n  {\n    onError: (error, variables, context) => {\n      // An error occurred!\n    },\n    onSuccess: (data, variables, context) => {\n      // Let\'s celebrate!\n    },\n  },\n);\n')))),(0,n.yg)("h2",{id:"mutation-parameters"},"Mutation Parameters"),(0,n.yg)("h3",{id:"resource-"},(0,n.yg)("inlineCode",{parentName:"h3"},"resource")," ",(0,n.yg)(y,{required:!0,mdxType:"PropTag"})),(0,n.yg)(m,{id:"resource-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as an API endpoint path. It all depends on how to handle the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," in the ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," method. See the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-dataprovider/create-dataprovider/"},"creating a data provider")," section for an example of how resources are handled."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  resource: "categories",\n});\n'))),(0,n.yg)("h3",{id:"values-"},(0,n.yg)("inlineCode",{parentName:"h3"},"values")," ",(0,n.yg)(y,{required:!0,mdxType:"PropTag"})),(0,n.yg)(m,{id:"values-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as the data to be created. It contains the data that will be sent to the server."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  values: [\n    {\n      name: "Product 1",\n      material: "Wood",\n    },\n    {\n      name: "Product 2",\n      material: "Metal",\n    },\n  ],\n});\n'))),(0,n.yg)("h3",{id:"successnotification"},(0,n.yg)("inlineCode",{parentName:"h3"},"successNotification")),(0,n.yg)(m,{id:"successnotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.yg)("p",null,"After data is fetched successfully, ",(0,n.yg)("inlineCode",{parentName:"p"},"useCreateMany")," can call ",(0,n.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  successNotification: (data, values, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n'))),(0,n.yg)("h3",{id:"errornotification"},(0,n.yg)("inlineCode",{parentName:"h3"},"errorNotification")),(0,n.yg)(m,{id:"errornotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.yg)("p",null,"After data fetching is failed, ",(0,n.yg)("inlineCode",{parentName:"p"},"useCreateMany")," will call ",(0,n.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  errorNotification: (data, values, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n'))),(0,n.yg)("h3",{id:"metadata"},(0,n.yg)("inlineCode",{parentName:"h3"},"metaData")),(0,n.yg)(m,{id:"metadata",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/general-concepts/#metadata"},(0,n.yg)("inlineCode",{parentName:"a"},"metaData"))," is used following two purposes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,n.yg)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/advanced-tutorials/data-provider/graphql/#edit-page"},"GraphQL")," for more information.")),(0,n.yg)("p",null,"In the following example, we pass the ",(0,n.yg)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,n.yg)("inlineCode",{parentName:"p"},"metaData")," object to the ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  // highlight-start\n  metaData: {\n    headers: { "x-meta-data": "true" },\n  },\n  // highlight-end\n});\n\nconst myDataProvider = {\n  //...\n  createMany: async ({\n    resource,\n    variables,\n    // highlight-next-line\n    metaData,\n  }) => {\n    // highlight-next-line\n    const headers = metaData?.headers ?? {};\n    const url = `${apiUrl}/${resource}`;\n\n    //...\n    //...\n\n    // highlight-next-line\n    const { data } = await httpClient.post(url, variables, { headers });\n\n    return {\n      data,\n    };\n  },\n  //...\n};\n'))),(0,n.yg)("h3",{id:"dataprovidername"},(0,n.yg)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,n.yg)(m,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If there is more than one ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  dataProviderName: "second-data-provider",\n});\n'))),(0,n.yg)("h3",{id:"invalidates"},(0,n.yg)("inlineCode",{parentName:"h3"},"invalidates")),(0,n.yg)(m,{id:"invalidates",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"invalidates")," is used to specify which queries should be invalidated after the mutation is completed."),(0,n.yg)("p",null,"By default, it invalidates the following queries from the current ",(0,n.yg)("inlineCode",{parentName:"p"},"resource"),": ",(0,n.yg)("inlineCode",{parentName:"p"},'"list"')," and ",(0,n.yg)("inlineCode",{parentName:"p"},'"many"'),". That means, if you use ",(0,n.yg)("inlineCode",{parentName:"p"},"useList")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"useMany")," hooks on the same page, they will refetch the data after the mutation is completed."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  invalidates: ["list", "many"],\n});\n'))),(0,n.yg)("h2",{id:"return-values"},"Return Values"),(0,n.yg)(m,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Returns an object with TanStack Query's ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," return values."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192"))),(0,n.yg)("h2",{id:"api"},"API"),(0,n.yg)("h3",{id:"mutation-parameters-1"},"Mutation Parameters"),(0,n.yg)(m,{id:"mutation-parameters-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{className:"required-block"},(0,n.yg)("div",null,"resource")," ",(0,n.yg)("div",{className:" required"},"Required"))),(0,n.yg)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"values ",(0,n.yg)("div",{className:" required"},"Required")),(0,n.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"TVariables[]")),(0,n.yg)("td",{parentName:"tr",align:null},"[{}]")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"successNotification"),(0,n.yg)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#successerrornotification"},(0,n.yg)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,n.yg)("td",{parentName:"tr",align:null},'"Successfully created ',(0,n.yg)("inlineCode",{parentName:"td"},"resource"),'s"')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"errorNotification"),(0,n.yg)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#successerrornotification"},(0,n.yg)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,n.yg)("td",{parentName:"tr",align:null},'"There was an error creating ',(0,n.yg)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,n.yg)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"metaData"),(0,n.yg)("td",{parentName:"tr",align:null},"Metadata query for ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProvider")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#metadataquery"},(0,n.yg)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,n.yg)("td",{parentName:"tr",align:null},"{}")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.yg)("td",{parentName:"tr",align:null},"If there is more than one ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"default"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"invalidates"),(0,n.yg)("td",{parentName:"tr",align:null},"You can use it to manage the invalidations that will occur at the end of the mutation."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"all"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"list"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"many"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"detail"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'["list", "many"]')))))),(0,n.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.yg)(m,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Desription"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TData"),(0,n.yg)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TError"),(0,n.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TVariables"),(0,n.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"{}")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"{}")))))),(0,n.yg)("h3",{id:"return-value"},"Return value"),(0,n.yg)(m,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useMutation"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"},"{ data: TData[]},"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"},"TError,"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables[]; },"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"}," unknown>"))))))))}f.isMDXComponent=!0}}]);