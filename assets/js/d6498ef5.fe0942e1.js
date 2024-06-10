"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17262],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,y=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},51607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>N,frontMatter:()=>s,metadata:()=>p,toc:()=>u});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"useCheckboxGroup"},l=void 0,p={unversionedId:"ui-integrations/ant-design/hooks/use-checkbox-group/index",id:"ui-integrations/ant-design/hooks/use-checkbox-group/index",title:"useCheckboxGroup",description:"useCheckboxGroup hook allows you to manage an Ant Design Checkbox.Group component when records in a resource needs to be used as checkbox options.",source:"@site/docs/ui-integrations/ant-design/hooks/use-checkbox-group/index.md",sourceDirName:"ui-integrations/ant-design/hooks/use-checkbox-group",slug:"/ui-integrations/ant-design/hooks/use-checkbox-group/",permalink:"/docs/ui-integrations/ant-design/hooks/use-checkbox-group/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/hooks/use-checkbox-group/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1718008560,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{title:"useCheckboxGroup"},sidebar:"mainSidebar",previous:{title:"useSelect",permalink:"/docs/ui-integrations/ant-design/hooks/use-select/"},next:{title:"useRadioGroup",permalink:"/docs/ui-integrations/ant-design/hooks/use-radio-group/"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"resource",id:"resource",level:3},{value:"defaultValue",id:"defaultvalue",level:3},{value:"optionLabel and optionValue",id:"optionlabel-and-optionvalue",level:3},{value:"searchField",id:"searchfield",level:3},{value:"filters",id:"filters",level:3},{value:"sorters",id:"sorters",level:3},{value:"fetchSize",id:"fetchsize",level:3},{value:"queryOptions",id:"queryoptions",level:3},{value:"pagination",id:"pagination",level:3},{value:"<del>sort</del> <PropTag deprecated />",id:"sort-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Example",id:"example",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},g=d("DocThumbsUpDownFeedbackWidget"),y=d("Image"),m=d("PropTag"),h=d("PropsTable"),f=d("CodeSandboxExample"),b={toc:u},x="wrapper";function N(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(x,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},b,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useCheckboxGroup")," hook allows you to manage an Ant Design ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/checkbox/#components-checkbox-demo-group"},"Checkbox.Group")," component when records in a resource needs to be used as checkbox options."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(g,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will demonstrate how to get data at the ",(0,r.yg)("inlineCode",{parentName:"p"},"/tags")," endpoint from the ",(0,r.yg)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/tags"',title:'"https://api.fake-rest.refine.dev/tags"'},'{\n  [\n    {\n      id: 1,\n      title: "Driver Deposit",\n    },\n    {\n      id: 2,\n      title: "Index Compatible Synergistic",\n    },\n    {\n      id: 3,\n      title: "Plum",\n    },\n  ];\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { useCheckboxGroup } from "@refinedev/antd";\nimport { Form, Checkbox } from "antd";\n\nexport const PostCreate: React.FC = () => {\n  // highlight-start\n  const { checkboxGroupProps } = useCheckboxGroup<ITag>({\n    resource: "tags",\n  });\n  // highlight-end\n\n  return (\n    <Form>\n      <Form.Item label="Tags" name="tags">\n        // highlight-next-line\n        <Checkbox.Group {...checkboxGroupProps} />\n      </Form.Item>\n    </Form>\n  );\n};\n\ninterface ITag {\n  id: number;\n  title: string;\n}\n')),(0,r.yg)("br",null),(0,r.yg)("p",null,"All we have to do is pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"checkboxGroupProps")," it returns to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Checkbox.Group>")," component.\n",(0,r.yg)("inlineCode",{parentName:"p"},"useCheckboxGroup")," uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"useList")," hook for fetching data."),(0,r.yg)(y,{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/hooks/useCheckboxGroup/basic.png",alt:"Tags",mdxType:"Image"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-list"},(0,r.yg)("inlineCode",{parentName:"a"},"useList")," documentation ","\u2192")))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("h3",{id:"resource"},"resource"),(0,r.yg)(g,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n  resource: "tags",\n});\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"resource")," property determines which API resource endpoint to fetch records from ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,r.yg)("inlineCode",{parentName:"p"},"options")," values for checkboxes."),(0,r.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.yg)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/checkbox"},"Ant Design's Checkbox.Group component documentation ","\u2192")))),(0,r.yg)("h3",{id:"defaultvalue"},"defaultValue"),(0,r.yg)(g,{id:"defaultvalue",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useCheckboxGroup({\n  resource: "languages",\n  // highlight-next-line\n  defaultValue: [1, 2],\n});\n')),(0,r.yg)("p",null,"The easiest way to select default values for checkbox fields is by passing in ",(0,r.yg)("inlineCode",{parentName:"p"},"defaultValue"),".")),(0,r.yg)("h3",{id:"optionlabel-and-optionvalue"},"optionLabel and optionValue"),(0,r.yg)(g,{id:"optionlabel-and-optionvalue",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n  resource: "tags",\n  // highlight-start\n  optionLabel: "title",\n  optionValue: "id",\n  // highlight-end\n});\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"optionValue")," allows you to change the values and appearances of your options. Default values are ",(0,r.yg)("inlineCode",{parentName:"p"},'optionLabel = "title"')," and ",(0,r.yg)("inlineCode",{parentName:"p"},'optionValue = "id"'),"."),(0,r.yg)("p",null,"These properties also support nested property access with ",(0,r.yg)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15#get"},"Object path")," syntax."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useCheckboxGroup({\n  resource: "categories",\n  // highlight-start\n  optionLabel: "nested.title",\n  optionValue: "nested.id",\n  // highlight-end\n});\n')),(0,r.yg)("p",null,"It's also possible to pass function to these props. These functions will receive ",(0,r.yg)("inlineCode",{parentName:"p"},"item")," argument."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const { options } = useCheckboxGroup({\n  optionLabel: (item) => `${item.firstName} ${item.lastName}`,\n  optionValue: (item) => item.id,\n});\n"))),(0,r.yg)("h3",{id:"searchfield"},"searchField"),(0,r.yg)(g,{id:"searchfield",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Can be used to specify which field will be searched with value given to ",(0,r.yg)("inlineCode",{parentName:"p"},"onSearch")," function."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { onSearch } = useCheckboxGroup({ searchField: "name" });\n\nonSearch("John"); // Searches by `name` field with value John.\n')),(0,r.yg)("p",null,"By default, it uses ",(0,r.yg)("inlineCode",{parentName:"p"},"optionLabel"),"'s value, if ",(0,r.yg)("inlineCode",{parentName:"p"},"optionLabel")," is a string. Uses ",(0,r.yg)("inlineCode",{parentName:"p"},"title")," field otherwise."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'// When `optionLabel` is string.\nconst { onSearch } = useCheckboxGroup({ optionLabel: "name" });\n\nonSearch("John"); // Searches by `name` field with value John.\n\n// When `optionLabel` is function.\nconst { onSearch } = useCheckboxGroup({\n  optionLabel: (item) => `${item.id} - ${item.name}`,\n});\n\nonSearch("John"); // Searches by `title` field with value John.\n'))),(0,r.yg)("h3",{id:"filters"},"filters"),(0,r.yg)(g,{id:"filters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"filters")," allows us to add filters while fetching the data. For example, if you want to list only the ",(0,r.yg)("inlineCode",{parentName:"p"},"titles"),' that are equal to "Driver Deposit":'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n  resource: "tags",\n  // highlight-start\n  filters: [\n    {\n      field: "title",\n      operator: "eq",\n      value: "Driver Deposit",\n    },\n  ],\n  // highlight-end\n});\n'))),(0,r.yg)("h3",{id:"sorters"},"sorters"),(0,r.yg)(g,{id:"sorters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"sorters")," allows us to sort the ",(0,r.yg)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,r.yg)("inlineCode",{parentName:"p"},"title")," by ascending:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n  resource: "tags",\n  // highlight-start\n  sorters: [\n    {\n      field: "title",\n      order: "asc",\n    },\n  ],\n  // highlight-end\n});\n'))),(0,r.yg)("h3",{id:"fetchsize"},"fetchSize"),(0,r.yg)(g,{id:"fetchsize",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"fetchSize")," is the amount of records to fetch in checkboxes."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useCheckboxGroup({\n  resource: "languages",\n  // highlight-next-line\n  fetchSize: 20,\n});\n'))),(0,r.yg)("h3",{id:"queryoptions"},"queryOptions"),(0,r.yg)(g,{id:"queryoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Passing the ",(0,r.yg)("inlineCode",{parentName:"p"},"queryOptions")," property allows us to set the ",(0,r.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n  resource: "tags",\n  // highlight-start\n  queryOptions: {\n    onError: () => {\n      console.log("triggers when on query return Error");\n    },\n  },\n  // highlight-end\n});\n'))),(0,r.yg)("h3",{id:"pagination"},"pagination"),(0,r.yg)(g,{id:"pagination",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"pagination")," allows us to set page and items per page values."),(0,r.yg)("p",null,"For example, lets say that we have 1000 post records:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const { selectProps } = useCheckboxGroup({\n  resource: "categories",\n  // highlight-next-line\n  pagination: { current: 3, pageSize: 8 },\n});\n')),(0,r.yg)("p",null,"The listing will start from page 3, showing 8 records per page.")),(0,r.yg)("h3",{id:"sort-"},(0,r.yg)("del",{parentName:"h3"},"sort")," ",(0,r.yg)(m,{deprecated:!0,mdxType:"PropTag"})),(0,r.yg)(g,{id:"sort-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"sorters")," instead.")),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(g,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(h,{module:"@refinedev/antd/useCheckboxGroup",mdxType:"PropsTable"})),(0,r.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.yg)(g,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TQueryFnData"),(0,r.yg)("td",{parentName:"tr",align:null},"Result data returned by the query function. Extends ",(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TError"),(0,r.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TData"),(0,r.yg)("td",{parentName:"tr",align:null},"Result data returned by the ",(0,r.yg)("inlineCode",{parentName:"td"},"select")," function. Extends ",(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord")),". If not specified, the value of ",(0,r.yg)("inlineCode",{parentName:"td"},"TQueryFnData")," will be used as the default value."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"TQueryFnData")))))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(g,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{path:"field-antd-use-checkbox-group",mdxType:"CodeSandboxExample"})))}N.isMDXComponent=!0}}]);