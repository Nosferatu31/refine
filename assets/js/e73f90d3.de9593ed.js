"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16024],{58860:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var o=t(37953);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),g=n,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return t?o.createElement(m,s(s({ref:r},u),{},{components:t})):o.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4442:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>d});t(37953);var o=t(58860);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={title:"useForgotPassword",description:"useForgotPassword data hook from Refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useForgotPassword/index.ts"},l=void 0,c={unversionedId:"authentication/hooks/use-forgot-password/index",id:"authentication/hooks/use-forgot-password/index",title:"useForgotPassword",description:"useForgotPassword data hook from Refine is a modified version of react-query's useMutation for registration.",source:"@site/docs/authentication/hooks/use-forgot-password/index.md",sourceDirName:"authentication/hooks/use-forgot-password",slug:"/authentication/hooks/use-forgot-password/",permalink:"/docs/authentication/hooks/use-forgot-password/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/hooks/use-forgot-password/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720181868,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"useForgotPassword",description:"useForgotPassword data hook from Refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useForgotPassword/index.ts"},sidebar:"mainSidebar",previous:{title:"useRegister",permalink:"/docs/authentication/hooks/use-register/"},next:{title:"useUpdatePassword",permalink:"/docs/authentication/hooks/use-update-password/"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Redirection after forgotPassword",id:"redirection-after-forgotpassword",level:2},{value:"Error handling",id:"error-handling",level:2}],p=(g="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var g;const m={toc:d},f="wrapper";function y(e){var{components:r}=e,t=s(e,["components"]);return(0,o.yg)(f,a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},m,t),{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," calls the ",(0,o.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method from ",(0,o.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,o.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,o.yg)("p",null,"It returns the result of ",(0,o.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,o.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being ",(0,o.yg)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"isError"),"."),(0,o.yg)("p",null,"Data that is resolved from ",(0,o.yg)("inlineCode",{parentName:"p"},"forgotPassword")," will be returned as the ",(0,o.yg)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"type SuccessNotificationResponse = {\n  message: string;\n  description?: string;\n};\n\ntype AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n  successNotification?: SuccessNotificationResponse;\n};\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,o.yg)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"If ",(0,o.yg)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values: ",(0,o.yg)("inlineCode",{parentName:"li"},'{ name: "Forgot Password Error", message: "Invalid credentials" }'),"."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"redirectTo"),": If it has a value, the app will be redirected to the given URL."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"error"),": If it has a value, a notification will be shown with the error message and name."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"successNotification"),": If provided, a success notification will be shown. The structure is as follows:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"type SuccessNotificationResponse = {\n  message: string;\n  description?: string;\n};\n")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(p,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Refine provides a default 'forgot password' page which handles the forgot password flow manually."),(0,o.yg)("p",null,"If you want to use a custom 'forgot password' page however, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," hook like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customForgotPasswordPage"',title:'"pages/customForgotPasswordPage"'},'import { useForgotPassword } from "@refinedev/core";\n\ntype forgotPasswordVariables = {\n  email: string;\n};\n\nexport const ForgotPasswordPage = () => {\n  const { mutate: forgotPassword } =\n    useForgotPassword<forgotPasswordVariables>();\n\n  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n\n    const values = {\n      email: e.currentTarget.email.value,\n    };\n\n    forgotPassword(values);\n  };\n\n  return (\n    <form onSubmit={onSubmit}>\n      <label>Email</label>\n      <input name="email" value="test@refine.com" />\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n')),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"mutate")," acquired from the ",(0,o.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," hook can accept any kind of object for values because the ",(0,o.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method from ",(0,o.yg)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.\nA type parameter for the values can be provided to ",(0,o.yg)("inlineCode",{parentName:"p"},"useForgotPassword"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useForgotPassword } from "@refinedev/core";\n\nconst { mutate: forgotPassword } = useForgotPassword<{ email: string }>();\n'))),(0,o.yg)("h2",{id:"redirection-after-forgotpassword"},"Redirection after forgotPassword"),(0,o.yg)(p,{id:"redirection-after-forgotpassword",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"A custom URL can be given to mutate the function from the ",(0,o.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," hook if you want to redirect yourself to a certain URL."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useForgotPassword } from "@refinedev/core";\n\nconst { mutate: forgotPassword } = useForgotPassword();\n\nforgotPassword({ redirectPath: "/custom-url" });\n')),(0,o.yg)("p",null,"Then, you can handle this URL in your ",(0,o.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method of the ",(0,o.yg)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // ...\n  forgotPassword: async ({ redirectPath }) => {\n    // ...\n    return {\n      success: true,\n      redirectTo: redirectPath,\n      successNotification: {\n        message: "Password reset successful",\n        description: "Your password has been successfully reset.",\n      },\n    };\n  },\n};\n'))),(0,o.yg)("h2",{id:"error-handling"},"Error handling"),(0,o.yg)(p,{id:"error-handling",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Since the methods of ",(0,o.yg)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,o.yg)("inlineCode",{parentName:"p"},"success")," value in the response."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useForgotPassword } from "@refinedev/core";\n\nconst { mutate: forgotPassword } = useForgotPassword();\n\nforgotPassword(\n  {\n    email: "refine@example.com",\n  },\n  {\n    onSuccess: (data) => {\n      if (!data.success) {\n        // handle error\n      }\n\n      // handle success\n    },\n  },\n);\n')),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,o.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," hook will not be called if ",(0,o.yg)("inlineCode",{parentName:"p"},"success")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),". This is because the ",(0,o.yg)("inlineCode",{parentName:"p"},"authProvider")," methods always return a resolved promise, and the callback is only triggered when the promise is rejected."))))}y.isMDXComponent=!0}}]);