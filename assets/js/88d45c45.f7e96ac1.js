"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59786],{58860:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>y});var a=r(37953);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),p=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=t,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(y,s(s({ref:n},l),{},{components:r})):a.createElement(y,s({ref:n},l))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:t,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19644:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});r(37953);var a=r(58860);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}const i={id:"accessControl-provider",title:"Access Control Provider",sidebar_label:"Access Control Provider"},c=void 0,p={unversionedId:"api-reference/core/providers/accessControl-provider",id:"version-3.xx.xx/api-reference/core/providers/accessControl-provider",title:"Access Control Provider",description:"Access control is a broad topic where there are lots of advanced solutions that provide different set of features. refine is deliberately agnostic for its own API to be able to integrate different methods (RBAC, ABAC, ACL, etc.) and different libraries (Casbin, CASL, Cerbos, AccessControl.js). can method would be the entry point for those solutions.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/providers/accessControl-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/accessControl-provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/providers/accessControl-provider.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718352227,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"accessControl-provider",title:"Access Control Provider",sidebar_label:"Access Control Provider"},sidebar:"someSidebar",previous:{title:"Core API",permalink:"/docs/3.xx.xx/api-reference/core"},next:{title:"Auth Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Hooks and Components",id:"hooks-and-components",level:2},{value:"<code>useCan</code>",id:"usecan",level:3},{value:"<code>&lt;CanAccess /&gt;</code>",id:"canaccess-",level:3},{value:"Performance",id:"performance",level:2},{value:"List of Default Access Control Points",id:"list-of-default-access-control-points",level:2},{value:"Routes",id:"routes",level:3},{value:"Sider",id:"sider",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Example",id:"example",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),y=u("CodeSandboxExample"),g={toc:d},f="wrapper";function h(e){var{components:n}=e,r=s(e,["components"]);return(0,a.yg)(f,o(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(n){t(e,n,r[n])}))}return e}({},g,r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Access control is a broad topic where there are lots of advanced solutions that provide different set of features. ",(0,a.yg)("strong",{parentName:"p"},"refine")," is deliberately agnostic for its own API to be able to integrate different methods (RBAC, ABAC, ACL, etc.) and different libraries (",(0,a.yg)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,a.yg)("a",{parentName:"p",href:"https://casl.js.org/v5/en/"},"CASL"),", ",(0,a.yg)("a",{parentName:"p",href:"https://cerbos.dev/"},"Cerbos"),", ",(0,a.yg)("a",{parentName:"p",href:"https://onury.io/accesscontrol/"},"AccessControl.js"),"). ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," method would be the entry point for those solutions."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," provides an agnostic API via the ",(0,a.yg)("inlineCode",{parentName:"p"},"accessControlProvider")," to manage access control throughout your app."),(0,a.yg)("p",null,"An ",(0,a.yg)("inlineCode",{parentName:"p"},"accessControlProvider")," must implement only one async method named ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," to be used to check if the desired access will be granted."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"can")," must have the interface:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type CanParams = {\n    resource: string;\n    action: string;\n    params?: {\n        resource?: IResourceItem;\n        id?: BaseKey;\n        [key: string]: any;\n    };\n};\n\ntype CanReturnType = {\n    can: boolean;\n    reason?: string;\n}\n\nconst accessControlProvider = {\n    can: ({ resource, action, params }: CanParams) => Promise<CanReturnType>;\n}\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"*"),": Too see ","\u2192"," ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},(0,a.yg)("inlineCode",{parentName:"a"},"IResourceItem")),", ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseKey")),", ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#canparams"},(0,a.yg)("inlineCode",{parentName:"a"},"CanParams")),", ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#canreturntype"},(0,a.yg)("inlineCode",{parentName:"a"},"CanReturnType")))),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"A basic example looks like:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const App: React.FC = () => {\n    <Refine\n        // other providers and props\n        accessControlProvider={{\n            can: async ({ resource, action, params }) => {\n                if (resource === "posts" && action === "edit") {\n                    return Promise.resolve({\n                        can: false,\n                        reason: "Unauthorized",\n                    });\n                }\n\n                // or you can access directly *resource object\n                // const resourceName = params?.resource?.name;\n                // const anyUsefulOption = params?.resource?.options?.yourUsefulOption;\n                // if (resourceName === "posts" && anyUsefulOption === true && action === "edit") {\n                //     return Promise.resolve({\n                //         can: false,\n                //         reason: "Unauthorized",\n                //     });\n                // }\n\n                return { can: true };\n            },\n        }}\n    />;\n};\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"*resource"),": ","\u2192"," It returns the resource (",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},"ResourceItemProps"),") object you gave to ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," component. This will enable Attribute Based Access Control (ABAC), for example granting permissions based on the value of a field in the resource object.")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"You can pass a ",(0,a.yg)("inlineCode",{parentName:"p"},"reason")," along with ",(0,a.yg)("inlineCode",{parentName:"p"},"can"),". It will be accessible using ",(0,a.yg)("inlineCode",{parentName:"p"},"useCan"),". It will be shown at the tooltip of the buttons from ",(0,a.yg)("strong",{parentName:"p"},"refine")," when they are disabled.")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"You can find access control examples made with ",(0,a.yg)("strong",{parentName:"p"},"refine")),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Casbin")," ","\u2192"," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/v3/examples/access-control-casbin"},"Source Code")," - ",(0,a.yg)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/v3/examples/access-control-casbin/?view=preview&theme=dark&codemirror=1"},"Demo")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Cerbos")," ","\u2192"," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/v3/examples/access-control-cerbos"},"Source Code")," - ",(0,a.yg)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/v3/examples/access-control-cerbos/?view=preview&theme=dark&codemirror=1"},"Demo")))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," checks for access control in its related components and pages. ",(0,a.yg)("a",{parentName:"p",href:"#list-of-default-access-control-points"},"Refer here to see all the places ",(0,a.yg)("strong",{parentName:"a"},"refine")," checks for access control."))),(0,a.yg)("h2",{id:"hooks-and-components"},"Hooks and Components"),(0,a.yg)(m,{id:"hooks-and-components",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," provides a hook and a component to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," method from the ",(0,a.yg)("inlineCode",{parentName:"p"},"accessControlProvider"),".")),(0,a.yg)("h3",{id:"usecan"},(0,a.yg)("inlineCode",{parentName:"h3"},"useCan")),(0,a.yg)(m,{id:"usecan",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," as the query function for ",(0,a.yg)("strong",{parentName:"p"},"react-query"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery"),". It takes the parameters that ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," takes. It can also be configured with ",(0,a.yg)("inlineCode",{parentName:"p"},"queryOptions")," for ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery"),". Returns the result of ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" },\n});\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const useCan: ({\n    action,\n    resource,\n    params,\n    queryOptions,\n}: CanParams* & {\n    queryOptions?: UseQueryOptions<CanReturnType>;\n}) => UseQueryResult<CanReturnType*>\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"*"),": Too see ","\u2192"," ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#canparams"},(0,a.yg)("inlineCode",{parentName:"a"},"CanParams")),", ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#canreturntype"},(0,a.yg)("inlineCode",{parentName:"a"},"CanReturnType"))))),(0,a.yg)("h3",{id:"canaccess-"},(0,a.yg)("inlineCode",{parentName:"h3"},"<CanAccess />")),(0,a.yg)(m,{id:"canaccess-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"<CanAccess />")," is a wrapper component that uses ",(0,a.yg)("inlineCode",{parentName:"p"},"useCan")," to check for access control. It takes the parameters that ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," method takes and also a ",(0,a.yg)("inlineCode",{parentName:"p"},"fallback"),". It renders its children if the access control returns true and if access control returns false renders ",(0,a.yg)("inlineCode",{parentName:"p"},"fallback")," if provided."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<CanAccess\n    resource="posts"\n    action="edit"\n    params={{ id: 1 }}\n    fallback={<CustomFallback />}\n>\n    <YourComponent />\n</CanAccess>\n'))),(0,a.yg)("h2",{id:"performance"},"Performance"),(0,a.yg)(m,{id:"performance",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"As the number of points that checks for access control in your app increases the performance of your app may take a hit especially if its access control involves remote endpoints. Caching the access control checks helps a great deal. Since ",(0,a.yg)("strong",{parentName:"p"},"refine")," uses react-query it can be easily done configuring ",(0,a.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},(0,a.yg)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,a.yg)("inlineCode",{parentName:"a"},"cacheTime"))," properties."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n);\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," uses 5 minutes ",(0,a.yg)("inlineCode",{parentName:"p"},"cacheTime")," and 0 for ",(0,a.yg)("inlineCode",{parentName:"p"},"staleTime")," by default for its own access control points.")),(0,a.yg)("h2",{id:"list-of-default-access-control-points"},"List of Default Access Control Points"),(0,a.yg)("h3",{id:"routes"},"Routes"),(0,a.yg)(m,{id:"routes",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-nextjs-router"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-nextjs-router")),", ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-react-router"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-react-router")),", and ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-react-location"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-react-location"))," packages integrate access control for CRUD pages at ",(0,a.yg)("inlineCode",{parentName:"p"},"[resource]/[action]")," and root routes."),(0,a.yg)("p",null,"They will check access control with parameters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"dashboard (",(0,a.yg)("inlineCode",{parentName:"li"},"/"),"): ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "dashboard", action: "list" }')),(0,a.yg)("li",{parentName:"ul"},"list (e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"/posts"),"): ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "list", params: { *resource } }')),(0,a.yg)("li",{parentName:"ul"},"create (e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"/posts/create"),"): ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { *resource } }')),(0,a.yg)("li",{parentName:"ul"},"clone (e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"/posts/clone/1"),"): ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { id: 1, *resource }}')),(0,a.yg)("li",{parentName:"ul"},"edit (e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"/posts/edit/1"),"): ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "edit", params: { id: 1, *resource } }')),(0,a.yg)("li",{parentName:"ul"},"show (e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"/posts/show/1"),"): ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "show", params: { id: 1, *resource } }'))),(0,a.yg)("p",null,"In case access control returns ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," they will show ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#catchall"},(0,a.yg)("inlineCode",{parentName:"a"},"cathcAll"))," if provided or a standard error page otherwise."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"*resource"),": ","\u2192"," It returns the resource (",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},"ResourceItemProps"),") object you gave to ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," component. This will enable Attribute Based Access Control (ABAC), for example granting permissions based on the value of a field in the resource object."))),(0,a.yg)("h3",{id:"sider"},"Sider"),(0,a.yg)(m,{id:"sider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Sider is also integrated so that unaccessible resources won't appear in the sider menu."),(0,a.yg)("p",null,"Menu items will check access control with ",(0,a.yg)("inlineCode",{parentName:"p"},'{ resource, action: "list" }')),(0,a.yg)("p",null,"For example if your app has resource ",(0,a.yg)("inlineCode",{parentName:"p"},"posts")," it will be checked with ",(0,a.yg)("inlineCode",{parentName:"p"},'{ resource: "posts", action: "list" }'))),(0,a.yg)("h3",{id:"buttons"},"Buttons"),(0,a.yg)(m,{id:"buttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"These buttons will check for access control.\nLet's say these buttons are rendered where ",(0,a.yg)("inlineCode",{parentName:"p"},"resource")," is ",(0,a.yg)("inlineCode",{parentName:"p"},"posts")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"id")," is ",(0,a.yg)("inlineCode",{parentName:"p"},"1")," where applicable."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/list-button"},(0,a.yg)("strong",{parentName:"a"},"List")),": ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "list", params: { *resource } }')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/create-button"},(0,a.yg)("strong",{parentName:"a"},"Create")),": ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { *resource } }')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/clone-button"},(0,a.yg)("strong",{parentName:"a"},"Clone")),": ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { id: 1, *resource } }')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/edit-button"},(0,a.yg)("strong",{parentName:"a"},"Edit")),": ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "edit", params: { id: 1, *resource } }')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/delete-button"},(0,a.yg)("strong",{parentName:"a"},"Delete")),": ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "delete", params: { id: 1, *resource } }')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/show-button"},(0,a.yg)("strong",{parentName:"a"},"Show")),": ",(0,a.yg)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "show", params: { id: 1, *resource } }'))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"*resource"),": ","\u2192"," It returns the resource (",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},"ResourceItemProps"),") object you gave to ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," component. This will enable Attribute Based Access Control (ABAC), for example granting permissions based on the value of a field in the resource object.")),(0,a.yg)("p",null,"These buttons will be disabled if access control returns ",(0,a.yg)("inlineCode",{parentName:"p"},"{ can: false }"))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(y,{path:"access-control-casbin",mdxType:"CodeSandboxExample"})))}h.isMDXComponent=!0}}]);